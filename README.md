<p align="center">
  <img src="./assets/splash.webp" alt="Awesome LLM Services" width="100%">
</p>

<p align="center">
  <a href="https://awesome.re"><img src="https://awesome.re/badge.svg" alt="Awesome"></a>
  <img src="https://img.shields.io/badge/services-104%2B-blue" alt="Services">
  <a href="https://visitorbadge.io/status?path=https%3A%2F%2Fgithub.com%2Fav%2Fawesome-llm-services"><img src="https://api.visitorbadge.io/api/combined?path=https%3A%2F%2Fgithub.com%2Fav%2Fawesome-llm-services&countColor=%23263759&style=flat" /></a>
  <a href="https://discord.gg/8nDRphrhSF"><img src="https://img.shields.io/badge/Discord-Harbor-blue?logo=discord&logoColor=white" alt="Discord"></a>
  <a href="https://github.com/av/harbor"><img src="https://img.shields.io/badge/av-Harbor-black.svg" alt="av/harbor repo link"></a>
</p>

A list of **104+** LLM services, tools, and infrastructure for running AI locally. Criteria for inclusion:
- Open Source
- Self-hostable
- Friendly to containerization (Docker, Podman, etc.)
- Relates to homelab or personal AI use cases
- Well-documented with setup instructions

## Contents

- [<img src="./assets/message-square.svg" width="16" height="16" style="vertical-align: middle;"> Frontends](#-frontends) - Chat interfaces and web UIs (17)
- [<img src="./assets/cpu.svg" width="16" height="16" style="vertical-align: middle;"> Backends](#-backends) - Inference engines and model servers (17)
- [<img src="./assets/satellite.svg" width="16" height="16" style="vertical-align: middle;"> Satellites](#-satellites) - Companion services and integrations (65)
- [<img src="./assets/workflow.svg" width="16" height="16" style="vertical-align: middle;"> Workflow & Automation](#-workflow--automation) - Visual programming platforms (10)
- [<img src="./assets/plug.svg" width="16" height="16" style="vertical-align: middle;"> API & Proxies](#-api--proxies) - LLM gateways and aggregators (9)
- [<img src="./assets/audio-lines.svg" width="16" height="16" style="vertical-align: middle;"> Audio & Speech](#-audio--speech) - TTS and STT services (4)
- [<img src="./assets/terminal.svg" width="16" height="16" style="vertical-align: middle;"> CLI Tools](#-cli-tools) - Terminal-based LLM tools (15)
- [<img src="./assets/flask-conical.svg" width="16" height="16" style="vertical-align: middle;"> Evaluation](#-evaluation) - Benchmarking and testing (2)
- [<img src="./assets/wrench.svg" width="16" height="16" style="vertical-align: middle;"> MCP Tools](#-mcp-tools) - Model Context Protocol (5)

---

## <img src="./assets/message-square.svg" width="16" height="16" style="vertical-align: middle;"> Frontends

Chat interfaces and web applications for interacting with language models.

#### **[AnythingLLM](https://github.com/Mintplex-Labs/anything-llm)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 52.6k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-18 &nbsp;  `RAG`<br>
The all-in-one Desktop & Docker AI application with built-in RAG, AI agents, and more.

#### **[AstrBot](https://github.com/AstrBotDevs/AstrBot)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 14.7k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2026-01-03 &nbsp;  `Satellite` `Tools`<br>
All-in-one agentic chatbot platform for multi-LLM conversations across messaging platforms with plugin system.

#### **[BionicGPT](https://github.com/bionic-gpt/bionic-gpt)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 2.3k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-09<br>
on-premise LLM web UI with support for OpenAI-compatible backends

#### **[Chat Nio](https://github.com/zmh-program/chatnio)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 8.9k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-11-08<br>
Comprehensive LLM web interface with built-in marketplace

#### **[ComfyUI](https://github.com/comfyanonymous/ComfyUI)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 98.3k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-27 &nbsp;  `Workflows` `Image`<br>
The most powerful and modular diffusion model GUI, api and backend with a graph/nodes interface.

#### **[Hollama](https://github.com/fmaclen/hollama)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 1.1k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-10-12<br>
A minimal web-UI for talking to Ollama servers.

#### **[HuggingFace ChatUI](https://github.com/huggingface/chat-ui)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 10.4k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-21<br>
A chat interface using open source models, eg OpenAssistant or Llama. It is a SvelteKit app and it powers the HuggingChat app on hf.co/chat.

#### **[KoboldCpp](https://github.com/LostRuins/koboldcpp)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 9.1k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-20 &nbsp;  `Satellite` `Backend`<br>
KoboldCpp is an easy-to-use AI text-generation software for GGML and GGUF models.

#### **[LibreChat](https://github.com/danny-avila/LibreChat)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 32.7k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-28<br>
Open-source ChatGPT UI alternative supporting multiple AI providers (Anthropic, AWS, OpenAI, Azure, Groq, Mistral, Google) with features like model switching, message search, and multi-user support. Includes integration with DALL-E-3 and various APIs.

#### **[Lobe Chat](https://github.com/lobehub/lobe-chat)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 69.6k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-26 &nbsp;  `RAG`<br>
An open-source, modern-design AI chat framework. Supports Multi AI Providers( OpenAI / Claude 3 / Gemini / Ollama / Azure / DeepSeek), Knowledge Base (file upload / knowledge management / RAG ), Multi-Modals (Vision/TTS) and plugin system.

#### **[Mikupad](https://github.com/lmg-anon/mikupad)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 673 &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-27<br>
LLM Frontend in a single HMTL file

#### **[ol1](https://github.com/jupyterlab/jupyterlab)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 15.0k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-26<br>
A simple Gradio app implementing an o1-like chain of reasoning with Ollama.

#### **[Omnichain](https://github.com/zenoverflow/omnichain/tree/main)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 361 &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-05-13<br>
Visual programming for AI language models

#### **[Onyx](https://github.com/onyx-dot-app/onyx)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 16.9k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-28 &nbsp;  `Workflows` `RAG`<br>
Open Source AI Platform with Chat UI, RAG, MCP support, and 40+ document connectors.

#### **[Open WebUI](https://github.com/open-webui/open-webui)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 119.1k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-22 &nbsp;  `RAG`<br>
widely adopted and feature rich web interface for interacting with LLMs. Supports OpenAI-compatible and Ollama backends, multi-users, multi-model chats, custom prompts, TTS, Web RAG, RAG, and much much more.

#### **[oterm](https://github.com/ggozad/oterm)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 2.3k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-19 &nbsp;  `CLI`<br>
The text-based terminal client for Ollama.

#### **[Parllama](https://github.com/paulrobello/parllama)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 408 &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-03<br>
TUI for Ollama

## <img src="./assets/cpu.svg" width="16" height="16" style="vertical-align: middle;"> Backends

Inference engines and model serving platforms. These power the actual LLM responses.

#### **[AirLLM](https://github.com/lyogavin/airllm/tree/main)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 6.5k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-09-03<br>
70B inference with single 4GB GPU (very slow, though)

#### **[Aphrodite](https://github.com/PygmalionAI/aphrodite-engine)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 1.6k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-11-22<br>
Large-scale LLM inference engine

#### **[faster-whisper-server](https://github.com/fedirz/faster-whisper-server)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 2.7k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-27 &nbsp;  `Audio`<br>
Legacy version of Speaches, use that instead.

#### **[KoboldCpp](https://github.com/LostRuins/koboldcpp)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 9.1k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-20 &nbsp;  `Satellite` `Frontend`<br>
KoboldCpp is an easy-to-use AI text-generation software for GGML and GGUF models.

#### **[KTransformers](https://github.com/kvcache-ai/ktransformers)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 16.3k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-25<br>
A Flexible Framework for Experiencing Cutting-edge LLM Inference Optimizations

#### **[llama.cpp](https://github.com/ggerganov/llama.cpp)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 92.1k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-28<br>
LLM inference in C/C++

#### **[mistral.rs](https://github.com/EricLBuehler/mistral.rs)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 6.3k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-19<br>
Blazingly fast LLM inference.

#### **[Modular MAX](https://github.com/modular/max)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 25.4k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-28<br>
MAX is a platform from Modular (creators of Mojo) for running LLMs.

#### **[Nexa SDK](https://github.com/NexaAI/nexa-sdk)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 7.2k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-26<br>
Nexa SDK is a comprehensive toolkit for supporting ONNX and GGML models.

#### **[Ollama](https://github.com/ollama/ollama)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 158.4k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-23<br>
Get up and running with Llama 3.2, Mistral, Gemma 3, and other large language models.

#### **[openedai-speech](https://github.com/matatonic/openedai-speech)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 838 &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-02-02 &nbsp;  `Audio`<br>
An OpenAI API compatible text to speech server using Coqui AI's xtts_v2 and/or piper tts as the backend.

#### **[Parler](https://github.com/huggingface/parler-tts)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 5.5k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2024-12-10 &nbsp;  `Audio`<br>
Inference and training library for high-quality TTS models.

#### **[SGLang](https://github.com/sgl-project/sglang)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 22.0k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-28 &nbsp;  `Image`<br>
SGLang is a fast serving framework for large language models and vision language models.

#### **[Speaches](https://github.com/fedirz/faster-whisper-server)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 2.7k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-27 &nbsp;  `Audio`<br>
an OpenAI API-compatible speech server (formerly `faster-whisper-server`), both TTS and STT

#### **[TabbyAPI](https://github.com/theroyallab/tabbyAPI)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 1.1k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-19<br>
An OAI compatible exllamav2 API that's both lightweight and fast

#### **[Text Generation Inference](https://github.com/huggingface/text-generation-inference)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 10.7k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-18<br>
Inference engine from HuggingFace.

#### **[vLLM](https://github.com/vllm-project/vllm)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 66.4k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-28<br>
A high-throughput and memory-efficient inference and serving engine for LLMs

## <img src="./assets/satellite.svg" width="16" height="16" style="vertical-align: middle;"> Satellites

Companion services, research tools, and integrations that enhance LLM workflows.

#### **[Agent Zero](https://github.com/frdel/agent-zero)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 12.8k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-26 &nbsp;  `RAG`<br>
General-purpose personal assistant with Web RAG, persistent memory, tools, browser use and more.

#### **[aichat](https://github.com/sigoden/aichat)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 8.9k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-01 &nbsp;  `CLI` `RAG`<br>
All-in-one LLM CLI tool featuring Shell Assistant, Chat-REPL, RAG, AI tools & agents.

#### **[Aider](https://github.com/paul-gauthier/aider)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 39.3k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-18 &nbsp;  `CLI`<br>
Aider is AI pair programming in your terminal.

#### **[Airweave](https://github.com/airweave-ai/airweave)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 5.4k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-26 &nbsp;  `RAG`<br>
Airweave lets agents search any app by transforming its contents into agent-ready knowledge.

#### **[AstrBot](https://github.com/AstrBotDevs/AstrBot)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 14.7k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2026-01-03 &nbsp;  `Frontend` `Tools`<br>
All-in-one agentic chatbot platform for multi-LLM conversations across messaging platforms with plugin system.

#### **[autogpt](https://github.com/Significant-Gravitas/AutoGPT)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 180.6k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-18<br>
Create, deploy, and manage continuous AI agents that automate complex workflows.

#### **[Bolt.new](https://github.com/stackblitz-labs/bolt.diy)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 18.7k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-10-23<br>
Prompt, run, edit, and deploy full-stack web applications.

#### **[Browser Use](https://github.com/browser-use/web-ui)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 15.4k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-08-31<br>
AI-powered browser automation with web UI

#### **[cloudflared](https://github.com/cloudflare/cloudflared)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 12.5k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-11-21 &nbsp;  `API` `CLI` `Infra`<br>
A helper service allowing to expose Harbor services over the internet.

#### **[cmdh](https://github.com/pgibler/cmdh)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 117 &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-08-23 &nbsp;  `CLI`<br>
Create Linux commands from natural language, in the shell.

#### **[Dify](https://github.com/langgenius/dify)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 123.9k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-28 &nbsp;  `Workflows`<br>
An open-source LLM app development platform.

#### **[Docling](https://github.com/docling-project/docling)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 48.2k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-24 &nbsp;  `RAG`<br>
Transform documents into format ready for LLMs.

#### **[Drawio](https://github.com/DayuanJiang/next-ai-draw-io)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 15.4k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-28<br>
AI-powered diagram creation tool - generate draw.io diagrams from natural language.

#### **[Fabric](https://github.com/danielmiessler/fabric)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 37.1k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-25 &nbsp;  `CLI`<br>
LLM-driven processing of the text data in the terminal.

#### **[Flowise](https://github.com/FlowiseAI/Flowise)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 47.6k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-23 &nbsp;  `Workflows`<br>
Drag & drop UI to build your customized LLM flow.

#### **[gptme](https://github.com/ErikBjare/gptme)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 4.1k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-28 &nbsp;  `CLI`<br>
A simple CLI tool to interact with LLMs.

#### **[Harbor Bench](https://github.com/av/harbor/tree/main/bench)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 2.2k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-28 &nbsp;  `CLI` `Built-in` `Eval`<br>
Harbor's own tool to evaluate LLMs and inference backends against custom tasks.

#### **[Harbor Boost](https://github.com/av/harbor/tree/main/boost)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 2.2k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-28 &nbsp;  `API` `Built-in`<br>
Connects to downstream LLM API and serves a wrapper with custom workflow. For example, it can be used to add a CoT (Chain of Thought) to an existing LLM API, and much more. Scriptable with Python.

#### **[Home Assistant](https://github.com/home-assistant/core)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 83.7k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-28<br>
Open source home automation platform for managing and controlling smart home devices.

#### **[JupyterLab](https://github.com/jupyterlab/jupyterlab)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 15.0k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-26<br>
Helper service to author/run Jupyter notebooks in Python with access to Harbor services.

#### **[K6](https://github.com/grafana/k6)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 29.5k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-18 &nbsp;  `CLI`<br>
A modern load testing tool, using Go and JavaScript - https://k6.io

#### **[Karakeep](https://github.com/karakeep-app/karakeep)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 22.2k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-28<br>
Self-hosted bookmark manager with AI-powered automatic tagging via OpenAI or Ollama.

#### **[KoboldCpp](https://github.com/LostRuins/koboldcpp)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 9.1k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-20 &nbsp;  `Frontend` `Backend`<br>
KoboldCpp is an easy-to-use AI text-generation software for GGML and GGUF models.

#### **[Kotaemon](https://github.com/Cinnamon/kotaemon)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 24.8k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-07-02 &nbsp;  `RAG`<br>
Clean & customizable RAG UI for chatting with your documents (Gradio-based).

#### **[LangFlow](https://github.com/langflow-ai/langflow)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 142.2k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-27 &nbsp;  `Workflows` `RAG`<br>
A low-code app builder for RAG and multi-agent AI applications.

#### **[LangFuse](https://github.com/langfuse/langfuse)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 19.8k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-24 &nbsp;  `API` `Infra`<br>
Open source LLM engineering platform: LLM Observability, metrics, evals, prompt management, playground, datasets.

#### **[Latent Scope](https://github.com/enjalot/latent-scope)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 745 &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-11-17<br>
A new kind of workflow + tool for visualizing and exploring datasets through the lens of latent spaces.

#### **[LibreTranslate](https://github.com/LibreTranslate/LibreTranslate)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 13.4k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-23<br>
A free and open-source machine translation.

#### **[LiteLLM](https://github.com/BerriAI/litellm)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 33.0k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-28 &nbsp;  `API` `Infra`<br>
LLM proxy that can aggregate multiple inference APIs together into a single endpoint.

#### **[LitLytics](https://github.com/yamalight/litlytics)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 103 &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2024-11-25 &nbsp;  `Workflows`<br>
Simple analytics platform that leverages LLMs to automate data analysis.

#### **[llama-swap](https://github.com/mostlygeek/llama-swap)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 2.1k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-28 &nbsp;  `API`<br>
Runs multiple llama.cpp servers on demand for seamless switching between them.

#### **[lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 11.0k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-23 &nbsp;  `CLI` `Eval`<br>
A de-facto standard framework for the few-shot evaluation of language models.

#### **[Local Deep Research](https://github.com/LearningCircuit/local-deep-research)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 3.8k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-28<br>
Transforms complex questions into comprehensive, cited reports.

#### **[LocalAI](https://github.com/go-skynet/LocalAI)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 40.8k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-27 &nbsp;  `Image`<br>
Complete AI stack for running AI models locally. Allows downloading variety of LLMs, TTS/STT/Image models and running thme locally via Web UI.

#### **[MCP Forge](https://github.com/IBM/mcp-context-forge)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 3.0k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2026-01-03 &nbsp;  `Tools`<br>
Gateway and admin UI for managing Model Context Protocol (MCP) servers, tools, and resources.

#### **[mcpo](https://github.com/open-webui/mcpo)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 3.8k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-10-14 &nbsp;  `Tools`<br>
Turn MCP servers into OpenAPI REST APIs - use them anywhere.

#### **[MetaMCP](https://github.com/metatool-ai/metatool-app)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 1.8k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-23 &nbsp;  `Tools`<br>
Allows to manage MCPs via a WebUI, exposes multiple MCPs as a single server.

#### **[MindsDB](https://github.com/mindsdb/mindsdb)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 38.1k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-09 &nbsp;  `API`<br>
AI platform for integrating ML models with data sources via HTTP and MySQL APIs.

#### **[Morphic](https://github.com/miurla/morphic)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 8.4k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-15 &nbsp;  `RAG`<br>
An AI-powered search engine with a generative UI, similar to Perplexity and Perplexica.

#### **[n8n](https://github.com/n8n-io/n8n)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 165.2k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-24 &nbsp;  `Workflows`<br>
Fair-code workflow automation platform with native AI capabilities.

#### **[Netdata](https://github.com/netdata/netdata)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 77.2k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-28 &nbsp;  `Infra`<br>
Real-time infrastructure monitoring with per-second metrics for systems, containers, and applications.

#### **[OmniParser](https://github.com/microsoft/OmniParser)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 24.1k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-09-09 &nbsp;  `Image`<br>
A simple screen parsing tool towards pure vision based GUI agent.

#### **[Open Interpreter](https://github.com/OpenInterpreter/open-interpreter)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 61.3k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-05 &nbsp;  `CLI`<br>
A natural language interface for computers.

#### **[Open Notebook](https://github.com/lfnovo/open-notebook)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 16.7k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-20<br>
AI-powered research and note-taking platform with multi-provider LLM support, podcast generation, and content analysis.

#### **[Open WebUI Pipelines](https://github.com/open-webui/pipelines)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 2.2k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-08-18 &nbsp;  `API` `Workflows`<br>
UI-Agnostic OpenAI API Plugin Framework.

#### **[OpenHands](https://github.com/All-Hands-AI/OpenHands)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 66.0k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-28<br>
A platform for software development agents powered by AI.

#### **[OptiLLM](https://github.com/codelion/optillm)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 3.3k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-25 &nbsp;  `API` `Infra`<br>
Optimising LLM proxy that implements many advanced workflows to boost the performance of the LLMs.

#### **[Perplexica](https://github.com/ItzCrazyKns/Perplexica)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 27.8k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-28 &nbsp;  `RAG`<br>
An AI-powered search engine. It is an Open source alternative to Perplexity AI.

#### **[Plandex](https://github.com/plandex-ai/plandex)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 14.8k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-10-03 &nbsp;  `CLI`<br>
AI driven development in your terminal.

#### **[Presenton](https://github.com/presenton/presenton)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 3.5k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-23<br>
Open-source AI presentation generator with custom layouts, multi-model support, and PDF/PPTX export.

#### **[Promptfoo](https://github.com/promptfoo/promptfoo)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 9.6k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-28 &nbsp;  `CLI`<br>
Test your prompts, agents, and RAGs. A developer-friendly local tool for testing LLM applications.

#### **[Qdrant](https://github.com/qdrant/qdrant)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 27.9k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-24 &nbsp;  `RAG` `Infra`<br>
Qdrant - High-performance, massive-scale Vector Database and Vector Search Engine.

#### **[RAGLite](https://github.com/superlinear-ai/raglite)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 1.1k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-15 &nbsp;  `RAG`<br>
Python toolkit for Retrieval-Augmented Generation (RAG)

#### **[Repopack](https://github.com/yamadashy/repopack)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 20.8k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-23 &nbsp;  `CLI`<br>
A powerful tool that packs your entire repository into a single, AI-friendly file.

#### **[Resume Matcher](https://github.com/srbhr/Resume-Matcher)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 25.4k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-06<br>
AI-powered tool for comparing resumes against job descriptions using local LLMs via Ollama.

#### **[SearXNG](https://github.com/searxng/searxng)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 23.8k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-26<br>
A privacy-respecting, hackable metasearch engine. Highly configurable and can be used for Web RAG use-cases.

#### **[Sim Studio](https://github.com/simstudioai/sim)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 24.6k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-28 &nbsp;  `Workflows`<br>
Open-source platform to build and deploy AI agent workflows with visual canvas editor.

#### **[SQL Chat](https://github.com/sqlchat/sqlchat)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 5.6k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-07-12<br>
Chat-based SQL client, which uses natural language to communicate with the database.

#### **[SuperGateway](https://github.com/supercorp-ai/supergateway)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 2.3k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-10-09 &nbsp;  `CLI` `Tools` `Infra`<br>
A simple and powerful API gateway for LLMs.

#### **[TextGrad](https://github.com/zou-group/textgrad)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 3.2k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-07-25<br>
Automatic "Differentiation" via Text - using large language models to backpropagate textual gradients.

#### **[Traefik](https://github.com/traefik/traefik)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 60.8k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-23 &nbsp;  `API` `Infra`<br>
A modern HTTP reverse proxy and load balancer that makes deploying microservices easy.

#### **[txtai RAG](https://github.com/neuml/rag)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 432 &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-01 &nbsp;  `RAG`<br>
RAG WebUI built with txtai.

#### **[Unsloth](https://github.com/unslothai/unsloth)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 50.0k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-27<br>
Jupyter Lab environment with Unsloth for fast LLM fine-tuning - 2x faster training with 70% less memory.

#### **[Webtop](https://github.com/linuxserver/docker-webtop)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 3.8k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-28<br>
Linux in a web browser supporting popular desktop environments.

#### **[Windmill](https://github.com/windmill-labs/windmill)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 15.4k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-27 &nbsp;  `Workflows`<br>
Open-source developer platform for internal tools, workflows, and UIs with multi-language script support.

## <img src="./assets/workflow.svg" width="16" height="16" style="vertical-align: middle;"> Workflow & Automation

Visual programming, workflow automation, and orchestration platforms for building LLM applications.

#### **[ComfyUI](https://github.com/comfyanonymous/ComfyUI)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 98.3k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-27 &nbsp;  `Frontend` `Image`<br>
The most powerful and modular diffusion model GUI, api and backend with a graph/nodes interface.

#### **[Dify](https://github.com/langgenius/dify)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 123.9k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-28 &nbsp;  `Satellite`<br>
An open-source LLM app development platform.

#### **[Flowise](https://github.com/FlowiseAI/Flowise)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 47.6k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-23 &nbsp;  `Satellite`<br>
Drag & drop UI to build your customized LLM flow.

#### **[LangFlow](https://github.com/langflow-ai/langflow)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 142.2k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-27 &nbsp;  `Satellite` `RAG`<br>
A low-code app builder for RAG and multi-agent AI applications.

#### **[LitLytics](https://github.com/yamalight/litlytics)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 103 &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2024-11-25 &nbsp;  `Satellite`<br>
Simple analytics platform that leverages LLMs to automate data analysis.

#### **[n8n](https://github.com/n8n-io/n8n)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 165.2k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-24 &nbsp;  `Satellite`<br>
Fair-code workflow automation platform with native AI capabilities.

#### **[Onyx](https://github.com/onyx-dot-app/onyx)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 16.9k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-28 &nbsp;  `Frontend` `RAG`<br>
Open Source AI Platform with Chat UI, RAG, MCP support, and 40+ document connectors.

#### **[Open WebUI Pipelines](https://github.com/open-webui/pipelines)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 2.2k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-08-18 &nbsp;  `Satellite` `API`<br>
UI-Agnostic OpenAI API Plugin Framework.

#### **[Sim Studio](https://github.com/simstudioai/sim)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 24.6k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-28 &nbsp;  `Satellite`<br>
Open-source platform to build and deploy AI agent workflows with visual canvas editor.

#### **[Windmill](https://github.com/windmill-labs/windmill)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 15.4k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-27 &nbsp;  `Satellite`<br>
Open-source developer platform for internal tools, workflows, and UIs with multi-language script support.

## <img src="./assets/plug.svg" width="16" height="16" style="vertical-align: middle;"> API & Proxies

API gateways, proxies, and aggregation services for managing multiple LLM endpoints.

#### **[cloudflared](https://github.com/cloudflare/cloudflared)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 12.5k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-11-21 &nbsp;  `Satellite` `CLI` `Infra`<br>
A helper service allowing to expose Harbor services over the internet.

#### **[Harbor Boost](https://github.com/av/harbor/tree/main/boost)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 2.2k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-28 &nbsp;  `Satellite` `Built-in`<br>
Connects to downstream LLM API and serves a wrapper with custom workflow. For example, it can be used to add a CoT (Chain of Thought) to an existing LLM API, and much more. Scriptable with Python.

#### **[LangFuse](https://github.com/langfuse/langfuse)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 19.8k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-24 &nbsp;  `Satellite` `Infra`<br>
Open source LLM engineering platform: LLM Observability, metrics, evals, prompt management, playground, datasets.

#### **[LiteLLM](https://github.com/BerriAI/litellm)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 33.0k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-28 &nbsp;  `Satellite` `Infra`<br>
LLM proxy that can aggregate multiple inference APIs together into a single endpoint.

#### **[llama-swap](https://github.com/mostlygeek/llama-swap)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 2.1k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-28 &nbsp;  `Satellite`<br>
Runs multiple llama.cpp servers on demand for seamless switching between them.

#### **[MindsDB](https://github.com/mindsdb/mindsdb)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 38.1k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-09 &nbsp;  `Satellite`<br>
AI platform for integrating ML models with data sources via HTTP and MySQL APIs.

#### **[Open WebUI Pipelines](https://github.com/open-webui/pipelines)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 2.2k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-08-18 &nbsp;  `Satellite` `Workflows`<br>
UI-Agnostic OpenAI API Plugin Framework.

#### **[OptiLLM](https://github.com/codelion/optillm)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 3.3k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-25 &nbsp;  `Satellite` `Infra`<br>
Optimising LLM proxy that implements many advanced workflows to boost the performance of the LLMs.

#### **[Traefik](https://github.com/traefik/traefik)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 60.8k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-23 &nbsp;  `Satellite` `Infra`<br>
A modern HTTP reverse proxy and load balancer that makes deploying microservices easy.

## <img src="./assets/audio-lines.svg" width="16" height="16" style="vertical-align: middle;"> Audio & Speech

Text-to-speech (TTS), speech-to-text (STT), and audio processing services.

#### **[faster-whisper-server](https://github.com/fedirz/faster-whisper-server)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 2.7k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-27 &nbsp;  `Backend`<br>
Legacy version of Speaches, use that instead.

#### **[openedai-speech](https://github.com/matatonic/openedai-speech)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 838 &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-02-02 &nbsp;  `Backend`<br>
An OpenAI API compatible text to speech server using Coqui AI's xtts_v2 and/or piper tts as the backend.

#### **[Parler](https://github.com/huggingface/parler-tts)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 5.5k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2024-12-10 &nbsp;  `Backend`<br>
Inference and training library for high-quality TTS models.

#### **[Speaches](https://github.com/fedirz/faster-whisper-server)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 2.7k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-27 &nbsp;  `Backend`<br>
an OpenAI API-compatible speech server (formerly `faster-whisper-server`), both TTS and STT

## <img src="./assets/terminal.svg" width="16" height="16" style="vertical-align: middle;"> CLI Tools

Command-line interfaces and terminal-based tools for LLM interaction.

#### **[aichat](https://github.com/sigoden/aichat)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 8.9k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-01 &nbsp;  `Satellite` `RAG`<br>
All-in-one LLM CLI tool featuring Shell Assistant, Chat-REPL, RAG, AI tools & agents.

#### **[Aider](https://github.com/paul-gauthier/aider)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 39.3k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-18 &nbsp;  `Satellite`<br>
Aider is AI pair programming in your terminal.

#### **[cloudflared](https://github.com/cloudflare/cloudflared)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 12.5k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-11-21 &nbsp;  `Satellite` `API` `Infra`<br>
A helper service allowing to expose Harbor services over the internet.

#### **[cmdh](https://github.com/pgibler/cmdh)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 117 &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-08-23 &nbsp;  `Satellite`<br>
Create Linux commands from natural language, in the shell.

#### **[Fabric](https://github.com/danielmiessler/fabric)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 37.1k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-25 &nbsp;  `Satellite`<br>
LLM-driven processing of the text data in the terminal.

#### **[gptme](https://github.com/ErikBjare/gptme)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 4.1k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-28 &nbsp;  `Satellite`<br>
A simple CLI tool to interact with LLMs.

#### **[Harbor Bench](https://github.com/av/harbor/tree/main/bench)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 2.2k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-28 &nbsp;  `Satellite` `Built-in` `Eval`<br>
Harbor's own tool to evaluate LLMs and inference backends against custom tasks.

#### **[K6](https://github.com/grafana/k6)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 29.5k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-18 &nbsp;  `Satellite`<br>
A modern load testing tool, using Go and JavaScript - https://k6.io

#### **[lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 11.0k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-23 &nbsp;  `Satellite` `Eval`<br>
A de-facto standard framework for the few-shot evaluation of language models.

#### **[Open Interpreter](https://github.com/OpenInterpreter/open-interpreter)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 61.3k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-05 &nbsp;  `Satellite`<br>
A natural language interface for computers.

#### **[oterm](https://github.com/ggozad/oterm)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 2.3k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-19 &nbsp;  `Frontend`<br>
The text-based terminal client for Ollama.

#### **[Plandex](https://github.com/plandex-ai/plandex)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 14.8k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-10-03 &nbsp;  `Satellite`<br>
AI driven development in your terminal.

#### **[Promptfoo](https://github.com/promptfoo/promptfoo)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 9.6k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-28 &nbsp;  `Satellite`<br>
Test your prompts, agents, and RAGs. A developer-friendly local tool for testing LLM applications.

#### **[Repopack](https://github.com/yamadashy/repopack)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 20.8k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-23 &nbsp;  `Satellite`<br>
A powerful tool that packs your entire repository into a single, AI-friendly file.

#### **[SuperGateway](https://github.com/supercorp-ai/supergateway)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 2.3k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-10-09 &nbsp;  `Satellite` `Tools` `Infra`<br>
A simple and powerful API gateway for LLMs.

## <img src="./assets/flask-conical.svg" width="16" height="16" style="vertical-align: middle;"> Evaluation

Benchmarking, evaluation, and testing tools for measuring LLM performance.

#### **[Harbor Bench](https://github.com/av/harbor/tree/main/bench)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 2.2k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-28 &nbsp;  `Satellite` `CLI` `Built-in`<br>
Harbor's own tool to evaluate LLMs and inference backends against custom tasks.

#### **[lm-evaluation-harness](https://github.com/EleutherAI/lm-evaluation-harness)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 11.0k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-23 &nbsp;  `Satellite` `CLI`<br>
A de-facto standard framework for the few-shot evaluation of language models.

## <img src="./assets/wrench.svg" width="16" height="16" style="vertical-align: middle;"> MCP Tools

Model Context Protocol servers and tool integration services.

#### **[AstrBot](https://github.com/AstrBotDevs/AstrBot)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 14.7k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2026-01-03 &nbsp;  `Satellite` `Frontend`<br>
All-in-one agentic chatbot platform for multi-LLM conversations across messaging platforms with plugin system.

#### **[MCP Forge](https://github.com/IBM/mcp-context-forge)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 3.0k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2026-01-03 &nbsp;  `Satellite`<br>
Gateway and admin UI for managing Model Context Protocol (MCP) servers, tools, and resources.

#### **[mcpo](https://github.com/open-webui/mcpo)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 3.8k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-10-14 &nbsp;  `Satellite`<br>
Turn MCP servers into OpenAPI REST APIs - use them anywhere.

#### **[MetaMCP](https://github.com/metatool-ai/metatool-app)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 1.8k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-12-23 &nbsp;  `Satellite`<br>
Allows to manage MCPs via a WebUI, exposes multiple MCPs as a single server.

#### **[SuperGateway](https://github.com/supercorp-ai/supergateway)**<br>
<img src="./assets/star.svg" width="16" height="16" style="vertical-align: middle;"> 2.3k &nbsp; <img src="./assets/git-commit-horizontal.svg" width="16" height="16" style="vertical-align: middle;"> 2025-10-09 &nbsp;  `Satellite` `CLI` `Infra`<br>
A simple and powerful API gateway for LLMs.

## Contributing

This list is auto-generated from [Harbor's service metadata](https://github.com/av/harbor).

<p align="center">
  Made with <img src="./assets/heart.svg" width="16" height="16" style="vertical-align: middle;"> by the <a href="https://github.com/av/harbor">Harbor</a> community
</p>
