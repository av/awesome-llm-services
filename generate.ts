#!/usr/bin/env -S deno run -A
/**
 * Awesome LLM Services List Generator
 *
 * Generates an awesome list from Harbor's service metadata.
 * Compatible with both Deno and Bun.
 *
 * Usage:
 *   deno run -A generate.ts
 *   bun run generate.ts
 */

const HARBOR_METADATA_URL =
  "https://raw.githubusercontent.com/av/harbor/main/app/src/serviceMetadata.ts";

interface GitHubStats {
  stars: number;
  lastCommit: string;
}

interface CachedGitHubStats extends GitHubStats {
  updated_at: string;
}

interface StatsCache {
  [repoKey: string]: CachedGitHubStats;
}

const STATS_CACHE_FILE = new URL("./stats.json", import.meta.url).pathname;
const CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 1 week in milliseconds

const githubStatsCache = new Map<string, GitHubStats>();
const GITHUB_CONCURRENCY = 10;
const DELAY_BETWEEN_REQUESTS_MS = 50;
const MAX_RETRIES = 3;

let persistentCache: StatsCache = {};

async function loadStatsCache(): Promise<StatsCache> {
  try {
    if (typeof Deno !== "undefined") {
      const content = await Deno.readTextFile(STATS_CACHE_FILE);
      return JSON.parse(content);
    } else {
      const fs = await import("node:fs/promises");
      const content = await fs.readFile(STATS_CACHE_FILE, "utf-8");
      return JSON.parse(content);
    }
  } catch {
    return {};
  }
}

async function saveStatsCache(cache: StatsCache): Promise<void> {
  const content = JSON.stringify(cache, null, 2);
  if (typeof Deno !== "undefined") {
    await Deno.writeTextFile(STATS_CACHE_FILE, content);
  } else {
    const fs = await import("node:fs/promises");
    await fs.writeFile(STATS_CACHE_FILE, content, "utf-8");
  }
}

function isCacheEntryValid(entry: CachedGitHubStats): boolean {
  const updatedAt = new Date(entry.updated_at).getTime();
  const now = Date.now();
  return now - updatedAt < CACHE_TTL_MS;
}

const GITHUB_PAT = Deno.env.get("GITHUB_PAT") ?? (typeof process !== "undefined" ? process.env.GITHUB_PAT : undefined);

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

let rateLimitRemaining = GITHUB_PAT ? 5000 : 60;
let rateLimitReset = 0;

function getGitHubHeaders(): HeadersInit {
  const headers: HeadersInit = { "User-Agent": "awesome-llm-services-generator" };
  if (GITHUB_PAT) {
    headers["Authorization"] = `Bearer ${GITHUB_PAT}`;
  }
  return headers;
}

async function checkRateLimit(response: Response): Promise<void> {
  const remaining = response.headers.get("x-ratelimit-remaining");
  const reset = response.headers.get("x-ratelimit-reset");

  if (remaining !== null) {
    rateLimitRemaining = parseInt(remaining, 10);
  }
  if (reset !== null) {
    rateLimitReset = parseInt(reset, 10);
  }

  if (rateLimitRemaining <= 1) {
    const waitMs = Math.max(0, rateLimitReset * 1000 - Date.now()) + 1000;
    console.log(`⚠️  Rate limit nearly exhausted. Waiting ${Math.ceil(waitMs / 1000)}s until reset...`);
    await sleep(waitMs);
    rateLimitRemaining = 60;
  }
}

async function fetchWithRateLimit(url: string, retries = MAX_RETRIES): Promise<Response | null> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    const response = await fetch(url, { headers: getGitHubHeaders() });

    if (response.status === 403 || response.status === 429) {
      const reset = response.headers.get("x-ratelimit-reset");
      const retryAfter = response.headers.get("retry-after");

      let waitMs: number;
      if (reset) {
        waitMs = Math.max(0, parseInt(reset, 10) * 1000 - Date.now()) + 1000;
      } else if (retryAfter) {
        waitMs = parseInt(retryAfter, 10) * 1000;
      } else {
        waitMs = Math.pow(2, attempt) * 1000;
      }

      console.log(`⚠️  Rate limited (${response.status}). Attempt ${attempt}/${retries}. Waiting ${Math.ceil(waitMs / 1000)}s...`);
      await sleep(waitMs);
      continue;
    }

    await checkRateLimit(response);
    return response;
  }

  return null;
}

async function runWithConcurrency<T, R>(
  items: T[],
  fn: (item: T, index: number, total: number) => Promise<R>,
  concurrency: number,
  delayMs = 0
): Promise<R[]> {
  const results: R[] = new Array(items.length);
  const queue = items.map((item, i) => ({ item, index: i }));
  const inFlight: Promise<void>[] = [];

  async function runTask(task: { item: T; index: number }): Promise<void> {
    results[task.index] = await fn(task.item, task.index + 1, items.length);
    if (delayMs > 0) await sleep(delayMs);
  }

  while (queue.length > 0 || inFlight.length > 0) {
    while (inFlight.length < concurrency && queue.length > 0) {
      const task = queue.shift()!;
      const promise = runTask(task).then(() => {
        inFlight.splice(inFlight.indexOf(promise), 1);
      });
      inFlight.push(promise);
    }
    if (inFlight.length > 0) {
      await Promise.race(inFlight);
    }
  }

  return results;
}

function parseGitHubRepo(url: string): { owner: string; repo: string } | null {
  const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
  if (!match) return null;
  return { owner: match[1], repo: match[2].replace(/\.git$/, "") };
}

async function fetchGitHubStats(url: string, index: number, total: number): Promise<GitHubStats | null> {
  const parsed = parseGitHubRepo(url);
  if (!parsed) return null;

  const cacheKey = `${parsed.owner}/${parsed.repo}`;

  // Check in-memory cache first
  if (githubStatsCache.has(cacheKey)) {
    console.log(`  [${index}/${total}] ${cacheKey} (memory cache)`);
    return githubStatsCache.get(cacheKey)!;
  }

  // Check persistent cache with TTL validation
  const cachedEntry = persistentCache[cacheKey];
  if (cachedEntry && isCacheEntryValid(cachedEntry)) {
    const { updated_at, ...stats } = cachedEntry;
    githubStatsCache.set(cacheKey, stats);
    console.log(`  [${index}/${total}] ${cacheKey} (file cache, updated: ${updated_at})`);
    return stats;
  }

  try {
    const staleInfo = cachedEntry ? ` (stale: ${cachedEntry.updated_at})` : "";
    console.log(`  [${index}/${total}] Fetching ${cacheKey}...${staleInfo} (rate limit: ${rateLimitRemaining})`);

    const repoResponse = await fetchWithRateLimit(
      `https://api.github.com/repos/${parsed.owner}/${parsed.repo}`
    );

    if (!repoResponse || !repoResponse.ok) {
      console.log(`  [${index}/${total}] ${cacheKey} - failed`);
      // Return stale data if fetch fails
      if (cachedEntry) {
        const { updated_at, ...stats } = cachedEntry;
        console.log(`  [${index}/${total}] ${cacheKey} - using stale cache`);
        return stats;
      }
      return null;
    }

    const repoData = await repoResponse.json();
    const stars = repoData.stargazers_count;

    const commitsResponse = await fetchWithRateLimit(
      `https://api.github.com/repos/${parsed.owner}/${parsed.repo}/commits?per_page=1`
    );

    let lastCommit = "";
    if (commitsResponse?.ok) {
      const commits = await commitsResponse.json();
      if (commits.length > 0) {
        const date = new Date(commits[0].commit.committer.date);
        lastCommit = date.toISOString().split("T")[0];
      }
    }

    const stats = { stars, lastCommit };
    githubStatsCache.set(cacheKey, stats);

    // Update persistent cache with timestamp
    persistentCache[cacheKey] = {
      ...stats,
      updated_at: new Date().toISOString(),
    };

    return stats;
  } catch (e) {
    console.log(`  [${index}/${total}] ${cacheKey} - error: ${e}`);
    // Return stale data on error
    if (cachedEntry) {
      const { updated_at, ...stats } = cachedEntry;
      console.log(`  [${index}/${total}] ${cacheKey} - using stale cache after error`);
      return stats;
    }
    return null;
  }
}

const response = await fetch(HARBOR_METADATA_URL);
const sourceCode = await response.text();

const tempFile = await Deno.makeTempFile({ suffix: ".ts" });
await Deno.writeTextFile(tempFile, sourceCode);

const { serviceMetadata, HST, wikiUrl } = await import(tempFile);

// Load persistent cache
persistentCache = await loadStatsCache();
console.log(`📦 Loaded ${Object.keys(persistentCache).length} cached entries from stats.json`);

interface ServiceEntry {
  handle: string;
  name: string;
  tags: string[];
  projectUrl?: string;
  wikiUrl?: string;
  tooltip?: string;
  githubStats?: GitHubStats | null;
}

const rawServices: Omit<ServiceEntry, "githubStats">[] = Object.entries(serviceMetadata)
  .map(([handle, s]) => ({
    handle,
    name: s.name ?? handle,
    tags: (s.tags ?? []) as string[],
    projectUrl: s.projectUrl,
    wikiUrl: s.wikiUrl,
    tooltip: s.tooltip ?? "",
  }))
  .filter((s) => !!s.name);

const githubServices = rawServices.filter(s => s.projectUrl?.includes("github.com"));
console.log(`🔍 Fetching GitHub stats for ${githubServices.length} repositories`);
console.log(`   Auth: ${GITHUB_PAT ? "PAT (5000 req/hr)" : "Anonymous (60 req/hr)"}`);
console.log(`   Concurrency: ${GITHUB_CONCURRENCY}, Delay: ${DELAY_BETWEEN_REQUESTS_MS}ms`);

const githubStatsResults = await runWithConcurrency(
  githubServices,
  (s, idx, total) => fetchGitHubStats(s.projectUrl!, idx, total),
  GITHUB_CONCURRENCY,
  DELAY_BETWEEN_REQUESTS_MS
);

const githubStatsMap = new Map<string, GitHubStats | null>();
githubServices.forEach((s, i) => {
  githubStatsMap.set(s.handle, githubStatsResults[i]);
});

// Save updated cache to disk
await saveStatsCache(persistentCache);
console.log(`💾 Saved ${Object.keys(persistentCache).length} entries to stats.json`);

const services: ServiceEntry[] = rawServices.map(s => ({
  ...s,
  githubStats: githubStatsMap.get(s.handle) ?? null,
}));

console.log(`✓ GitHub stats fetched (${githubStatsCache.size} repos)`);

const documentedServices = services.filter(s => s.wikiUrl && s.tooltip);

const byTag = (tag: string, onlyDocumented = true): ServiceEntry[] => {
  const list = onlyDocumented ? documentedServices : services;
  return list
    .filter((s) => s.tags.includes(tag))
    .sort((a, b) => a.name.localeCompare(b.name));
};

const frontends = byTag(HST.frontend);
const backends = byTag(HST.backend);
const satellites = byTag(HST.satellite);
const cliTools = byTag(HST.cli);
const apiServices = byTag(HST.api);
const workflowTools = byTag(HST.workflows);
const audioServices = byTag(HST.audio);
const evalTools = byTag(HST.eval);
const mcpTools = byTag(HST.tools);

const getLink = (s: ServiceEntry): string => {
  if (s.projectUrl) {
    return `[${s.name}](${s.projectUrl})`;
  }
  if (s.wikiUrl) {
    return `[${s.name}](${s.wikiUrl})`;
  }
  return `**${s.name}**`;
};

const formatTags = (tags: string[], primaryTag: string): string => {
  const otherTags = tags.filter(t => t !== primaryTag);
  if (otherTags.length === 0) return "";
  return ` \`${otherTags.join("\` \`")}\``;
};

const renderService = (s: ServiceEntry, primaryTag?: string): string => {
  const link = getLink(s);
  const description = s.tooltip ?? "";
  const tags = primaryTag ? formatTags(s.tags, primaryTag) : "";

  let statsLine = "";
  if (s.githubStats) {
    const stars = s.githubStats.stars >= 1000
      ? `${(s.githubStats.stars / 1000).toFixed(1)}k`
      : s.githubStats.stars.toString();
    const parts = [`${icon("star")} ${stars}`];
    if (s.githubStats.lastCommit) {
      parts.push(`${icon("git-commit-horizontal")} ${s.githubStats.lastCommit}`);
    }
    statsLine = parts.join(" &nbsp; ");
  }

  const lines = [
    `**${link}**${tags}`,
    statsLine,
    description,
  ].filter(Boolean);

  return lines.join("<br>\n");
};

const uniqueServices = (serviceList: ServiceEntry[]): ServiceEntry[] => {
  const seen = new Set<string>();
  return serviceList.filter(s => {
    if (seen.has(s.handle)) return false;
    seen.add(s.handle);
    return true;
  });
};

const allServices = uniqueServices(services).sort((a, b) => a.name.localeCompare(b.name));

const LUCIDE_CDN = "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons";
const icon = (name: string, size = 14) => `<img src="${LUCIDE_CDN}/${name}.svg#gh-light-mode-only" width="${size}" height="${size}"><img src="${LUCIDE_CDN}/${name}.svg#gh-dark-mode-only" width="${size}" height="${size}" style="filter: invert(1);">`;

const today = new Date().toISOString().split("T")[0];

const readme = `<p align="center">
  <img src="./splash.webp" alt="Awesome LLM Services" width="100%">
</p>

<p align="center">
  <a href="https://awesome.re"><img src="https://awesome.re/badge.svg" alt="Awesome"></a>
  <img src="https://img.shields.io/badge/services-${services.length}%2B-blue" alt="Services">
  <img src="https://img.shields.io/badge/updated-${today}-green" alt="Last Updated">
  <a href="https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2Fav%2Fawesome-llm-services"><img src="https://api.visitorbadge.io/api/combined?path=https%3A%2F%2Fgithub.com%2Fav%2Fawesome-llm-services&countColor=%23263759&style=flat" /></a>
  <a href="https://discord.gg/8nDRphrhSF"><img src="https://img.shields.io/badge/Discord-Harbor-blue?logo=discord&logoColor=white" alt="Discord"></a>
  <a href="https://github.com/av/harbor"><img src="https://img.shields.io/badge/av-Harbor-black.svg" alt="av/harbor repo link"></a>
</p>

A curated list of **${services.length}+** LLM services, tools, and infrastructure for running AI locally. Criteria for inclusion:
- Open Source
- Self-hostable
- Friendly to containerization (Docker, Podman, etc.)
- Relates to homelab or personal AI use cases
- Well-documented with setup instructions

## Contents

- [${icon("message-square")} Frontends](#-frontends) - Chat interfaces and web UIs (${frontends.length})
- [${icon("cpu")} Backends](#-backends) - Inference engines and model servers (${backends.length})
- [${icon("satellite")} Satellites](#-satellites) - Companion services and integrations (${satellites.length})
- [${icon("workflow")} Workflow & Automation](#-workflow--automation) - Visual programming platforms (${workflowTools.length})
- [${icon("plug")} API & Proxies](#-api--proxies) - LLM gateways and aggregators (${apiServices.length})
- [${icon("audio-lines")} Audio & Speech](#-audio--speech) - TTS and STT services (${audioServices.length})
- [${icon("terminal")} CLI Tools](#-cli-tools) - Terminal-based LLM tools (${cliTools.length})
- [${icon("flask-conical")} Evaluation](#-evaluation) - Benchmarking and testing (${evalTools.length})
- [${icon("wrench")} MCP Tools](#-mcp-tools) - Model Context Protocol (${mcpTools.length})

---

## ${icon("message-square", 24)} Frontends

Chat interfaces and web applications for interacting with language models.

${frontends.map(s => renderService(s, HST.frontend)).join("\n\n")}

## ${icon("cpu", 24)} Backends

Inference engines and model serving platforms. These power the actual LLM responses.

${backends.map(s => renderService(s, HST.backend)).join("\n\n")}

## ${icon("satellite", 24)} Satellites

Companion services, research tools, and integrations that enhance LLM workflows.

${uniqueServices(satellites).map(s => renderService(s, HST.satellite)).join("\n\n")}

## ${icon("workflow", 24)} Workflow & Automation

Visual programming, workflow automation, and orchestration platforms for building LLM applications.

${uniqueServices(workflowTools).map(s => renderService(s, HST.workflows)).join("\n\n")}

## ${icon("plug", 24)} API & Proxies

API gateways, proxies, and aggregation services for managing multiple LLM endpoints.

${uniqueServices(apiServices).map(s => renderService(s, HST.api)).join("\n\n")}

## ${icon("audio-lines", 24)} Audio & Speech

Text-to-speech (TTS), speech-to-text (STT), and audio processing services.

${uniqueServices(audioServices).map(s => renderService(s, HST.audio)).join("\n\n")}

## ${icon("terminal", 24)} CLI Tools

Command-line interfaces and terminal-based tools for LLM interaction.

${uniqueServices(cliTools).map(s => renderService(s, HST.cli)).join("\n\n")}

## ${icon("flask-conical", 24)} Evaluation

Benchmarking, evaluation, and testing tools for measuring LLM performance.

${uniqueServices(evalTools).map(s => renderService(s, HST.eval)).join("\n\n")}

## ${icon("wrench", 24)} MCP Tools

Model Context Protocol servers and tool integration services.

${uniqueServices(mcpTools).map(s => renderService(s, HST.tools)).join("\n\n")}

## Contributing

This list is auto-generated from [Harbor's service metadata](https://github.com/av/harbor).

<p align="center">
  Made with <img src="${LUCIDE_CDN}/heart.svg" width="14" height="14" style="vertical-align: middle;"> by the <a href="https://github.com/av/harbor">Harbor</a> community
</p>
`;

const outputPath = new URL("./README.md", import.meta.url).pathname;

const writeFile = async (path: string, content: string) => {
  if (typeof Deno !== "undefined") {
    await Deno.writeTextFile(path, content);
  } else {
    const fs = await import("node:fs/promises");
    await fs.writeFile(path, content, "utf-8");
  }
};

await writeFile(outputPath, readme);

console.log(`✅ Generated awesome list with ${services.length} services`);
console.log(`   - ${frontends.length} Frontends`);
console.log(`   - ${backends.length} Backends`);
console.log(`   - ${satellites.length} Satellites`);
console.log(`   - ${workflowTools.length} Workflow Tools`);
console.log(`   - ${apiServices.length} API Services`);
console.log(`   - ${audioServices.length} Audio Services`);
console.log(`   - ${cliTools.length} CLI Tools`);
console.log(`   - ${evalTools.length} Eval Tools`);
console.log(`   - ${mcpTools.length} MCP Tools`);
console.log(`\n📝 Output: ${outputPath}`);
