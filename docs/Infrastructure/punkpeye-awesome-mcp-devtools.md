# 精选的 MCP 开发工具 [![Awesome](https://awesome.re/badge-flat.svg)](https://awesome.re)

[![Discord](https://img.shields.io/discord/1312302100125843476?logo=discord\&label=discord)](https://glama.ai/mcp/discord)
[![Reddit 订阅人数](https://img.shields.io/reddit/subreddit-subscribers/mcp?style=flat\&logo=reddit\&label=subreddit)](https://www.reddit.com/r/mcp/)

一份精心整理的开发者工具、SDK、库、实用程序和资源列表，用于与 **Model Context Protocol (MCP)** 服务器交互。

## 目录

* [目录](#目录)
* [社区](#社区)
* [图例](#图例)
* [SDK](#sdk)
  * [JavaScript/TypeScript](#javascripttypescript)
  * [Python](#python)
  * [Java](#java)
  * [Go](#go)
  * [Rust](#rust)
  * [Kotlin](#kotlin)
  * [C#/.NET](#cnet)
  * [Scala](#scala)
  * [Dart](#dart)
  * [Ruby](#ruby)
  * [Elixir](#elixir)
  * [C/C++](#cc)
  * [Swift](#swift)
* [框架](#框架)
* [测试工具](#测试工具)
  * [授权测试](#授权测试)
* [库](#库)
* [实用工具](#实用工具)
  * [代理和网关](#代理和网关)
  * [开发工具](#开发工具)
* [托管](#托管)
* [模板](#模板)
* [资源](#资源)
* [教程](#教程)
* [相关优秀列表:](#相关优秀列表)

***

## 社区

* [r/mcp Reddit](https://www.reddit.com/r/mcp)
* [Discord 服务器](https://glama.ai/mcp/discord)

## 图例

* 🎖️ 官方 MCP 资源
* 编程语言
  * \#️⃣ - C# 代码库
  * 〽️ – Scala 代码库
  * ☕ - Java 代码库
  * 🎯 - Dart 代码库
  * 🏎️ – Go 代码库
  * 🐍 – Python 代码库
  * 💎 – Ruby 代码库
  * 📇 – TypeScript 代码库
  * 🔶 - Kotlin 代码库
  * 🦀 – Rust 代码库
  * 🌊 – C/C++ 代码库
  * 🍎 – Swift 代码库
  * 💧 – Elixir 代码库

## SDK

> 用于 MCP 服务器开发的软件开发工具包。

<details><summary>SDK 是如何排序的？</summary>

SDK 的排序依据是其在 GitHub 上的星标数。

如果一个 SDK 是单体仓库（monorepo）的一部分，它应以 `github-owner/github-repo#project-name` 的形式命名。

如果 SDK 属于单体仓库，其受欢迎程度将计为 0 星。

</details>

### JavaScript/TypeScript

* [FastMCP](https://github.com/punkpeye/fastmcp) 📇 - 一个用于在 TypeScript 中构建 MCP 服务器的高级框架
* [QuantGeekDev/mcp-framework](https://github.com/QuantGeekDev/mcp-framework) 📇 - 快速且优雅的 TypeScript 框架，用于构建 MCP 服务器
* [wong2/LiteMCP](https://github.com/wong2/litemcp) 📇 - 一个用于在 JavaScript/TypeScript 中构建 MCP 服务器的高级框架
* [ModelFetch](https://github.com/phuctm97/modelfetch) 📇 - 一个运行时无关的 SDK，可以在任何运行 TypeScript/JavaScript 的地方创建和部署 MCP 服务器
* [ribeirogab/simple-mcp](https://github.com/ribeirogab/simple-mcp) 📇 - 一个用于创建 MCP 服务器的简单 TypeScript 库
* [firebase/genkit#mcp](https://github.com/firebase/genkit/tree/main/js/plugins/mcp) 📇 – 提供 [Genkit](https://github.com/firebase/genkit/tree/main) 和 Model Context Protocol (MCP) 之间的集成
* [MCPcat](https://github.com/mcpcat/mcpcat-typescript-sdk) 📇 - 针对 MCP 的用户分析、会话跟踪和实时调试工具

### Python

* [FastMCP](https://github.com/jlowin/fastmcp) 🐍 - 一个用于在 Python 中构建 MCP 服务器的高级框架
* [mcp-use](https://github.com/mcp-use/mcp-use) 🐍 - 一个开源 Python 库，可以轻松地将任何 LLM 本地或远程连接到任何 MCP 服务器
* [langchain-mcp](https://github.com/rectalogic/langchain-mcp) 🐍 - 在 LangChain 中提供 MCP 工具调用支持
* [tadata-org/fastapi_mcp](https://github.com/tadata-org/fastapi_mcp) 🐍 - 在现有 FastAPI REST 端点之上提供 MCP 包装
* [easymcp](https://github.com/promptmesh/easymcp) 🐍 - 一个高级异步客户端 SDK，原生支持命名空间服务器和缓存
* [mcp-cli](https://github.com/tileshq/mcp-cli) 🐍 - 一个轻量级的 CLI MCP 客户端，用于连接远程 MCP 服务器
* [MCPcat](https://github.com/mcpcat/mcpcat-python-sdk) 🐍 - 针对 MCP 的用户分析、会话跟踪和实时调试工具
* [mxcp](http://github.com/raw-labs/mxcp) 🐍 - 一个开源框架，用于基于 SQL 或 Python 在 dbt + DuckDB 上构建安全、可测试、企业级的 MCP 工具

### Java

* [quarkus-mcp-server](https://github.com/quarkiverse/quarkus-mcp-server) ☕ - 一个使用 Quarkus 构建 MCP 服务器的 Java SDK
* [spring-ai-mcp](https://github.com/spring-projects-experimental/spring-ai-mcp) ☕ - 用于构建 MCP 客户端和 MCP 服务器的 Java SDK 和 Spring Framework 集成

### Go

* [strowk/foxy-contexts](https://github.com/strowk/foxy-contexts) 🏎️ - 一个用于声明式编写 MCP 服务器并包含功能测试的 Golang 库
* [mark3labs/mcp-go](https://github.com/mark3labs/mcp-go) 🏎️ - 用于构建 MCP 服务器和客户端的 Golang SDK
* [metoro-io/mcp-golang](https://github.com/metoro-io/mcp-golang) 🏎️ - 专注于类型安全的构建 MCP 服务器的 Golang 框架

### Rust

* [linux-china/mcp-rs-template](https://github.com/linux-china/mcp-rs-template) 🦀 - 用于 Rust 的 MCP CLI 服务器模板
* [poem-web/poem#poem-mcpserver](https://github.com/poem-web/poem/tree/master/poem-mcpserver) 🦀 - Poem 的 MCP 服务器实现

### Kotlin

* [http4k MCP SDK](https://mcp.http4k.org) 🔶 - 基于流行的 [http4k](https://http4k.org) Web 工具包的函数式、可测试的 Kotlin SDK

### C#/.NET

* [salty-flower/ModelContextProtocol.NET](https://github.com/salty-flower/ModelContextProtocol.NET) #️⃣ - 一个用于在 .NET 9 上构建 MCP 服务器的 C# SDK，并支持 NativeAOT ⚡ 🔌

### Scala

* [mullerhai/sakura-mcp](https://github.com/mullerhai/sakura-mcp) 〽️ - 一个用于使用 MCP 服务器和客户端构建高效代理的 Scala MCP 框架

### Dart

* [leehack/mcp_dart](https://github.com/leehack/mcp_dart/) 🎯 - 该库旨在提供一种简单直观的方式来在 Dart 中实现 MCP 服务器和客户端

### Ruby

* [modelcontextprotocol/ruby-sdk](https://github.com/modelcontextprotocol/ruby-sdk) 💎 🎖️ - 官方 Ruby SDK，用于构建 MCP 服务器
* [tidewave-ai/tidewave_rails](https://github.com/tidewave-ai/tidewave_rails) 💎 - Ruby on Rails MCP，通过了解您的 Web 应用程序、其运行方式及其交付内容的 AI 助手加速开发

### Elixir

* [tidewave-ai/tidewave_phoenix](https://github.com/tidewave-ai/tidewave_phoenix) 💧 - Phoenix MCP，通过了解您的 Web 应用程序、其运行方式及其交付内容的 AI 助手加速开发

### C/C++

* [micl2e2/mcpc](https://github.com/micl2e2/mcpc) 🌊 - 用于构建 MCP 服务器/客户端的现代 C SDK

### Swift

* [modelcontextprotocol/swift-sdk](https://github.com/modelcontextprotocol/swift-sdk) 🍎 🎖️ - 官方 Swift SDK，用于构建 MCP 服务器

## 框架

> 用于与 MCP 服务器交互的高级框架

* [lastmile-ai/mcp-agent](https://github.com/lastmile-ai/mcp-agent) 🤖 🔌 - 使用简单、可组合的模式构建高效代理的 MCP 服务器
* [mcpdotdirect/template-mcp-server](https://github.com/mcpdotdirect/template-mcp-server) 📇 - 一个 CLI 工具，用于使用 TypeScript 支持创建新的 MCP 服务器项目
* [p-funk/FEGIS](https://github.com/p-funk/FEGIS) 🐍 - 一个用于 LLM 的语义编程框架，将 YAML 原型编译为具有内置内存和含义的结构化工具。每次交互都成为新兴知识图谱的一部分，从而实现持久、语义化的检索和重用
* [sebastianbuzdugan/framework-rai-mcp](https://github.com/sebastianbuzdugan/framework-rai-mcp) 📇 - 专注于初创企业和企业原型中伦理部署的负责任 AI MCP 服务器框架
* [sendaifun/solana-agent-kit#agent-kit-mcp-server](https://github.com/sendaifun/solana-agent-kit/tree/main/examples/agent-kit-mcp-server) - Solana MCP SDK
* [stephencme/create-mcp-ts](https://github.com/stephencme/create-mcp-ts) 📇 - 使用 TypeScript 创建新的 MCP 服务器，功能齐全 - 支持用户定义的模板！
* [Upsonic/gpt-computer-assistant](https://github.com/Upsonic/gpt-computer-assistant) 🐍 – 构建垂直 AI 代理的框架
* [microsoft/semantic-kernel](https://github.com/microsoft/semantic-kernel) 🐍 #️⃣ – Microsoft 提供的企业级编排框架，支持 MCP，用于构建智能 AI 代理和多代理系统

## 测试工具

> 用于测试 MCP 服务器和客户端的工具

* [mclenhard/mcp-evals](https://github.com/mclenhard/mcp-evals) 🤖 - 用于运行评估的包和 Github Action
* [mcpjam/inspector](https://github.com/MCPJam/inspector) - 测试和调试 MCP 服务器
* [modelcontextprotocol/inspector](https://github.com/modelcontextprotocol/inspector) 📇 🎖️ - 用于测试 MCP 服务器的 UI
* [wong2/mcp-cli](https://github.com/wong2/mcp-cli) 🤖 - 用于手动测试的命令行检查器
* [muppet-kit/inspector](https://github.com/muppet-dev/kit) - 具有 AI 辅助调试和测试功能的 MCP Inspector
* [loopwork-ai/Companion](https://github.com/loopwork-ai/Companion) - 用于在 macOS、iOS 和 visionOS 上测试和调试您的 MCP 服务器的实用程序

### 授权测试

> 用于测试带有身份验证和授权的 MCP 服务器的资源

* [NapthaAI/http-oauth-mcp-server](https://github.com/NapthaAI/http-oauth-mcp-server) 📇 - 带 OAuth 身份验证的远程 MCP 服务器示例实现
* [modelcontextprotocol/python-sdk](https://github.com/modelcontextprotocol/python-sdk/tree/main/examples/servers/simple-auth/mcp_simple_auth) 🐍 🎖️ - 官方 Python SDK 中的示例认证 SSE 服务器

公开测试端点：

* [Asana MCP 服务器](https://mcp.asana.com/sse) - 用于测试 OAuth 流程的生产 SSE 端点
* [Sentry MCP 服务器](https://mcp.sentry.dev/sse) - 用于测试 OAuth 流程的生产 SSE 端点
* [Atlassian MCP 服务器](https://mcp.atlassian.com/v1/sse) - 用于测试 OAuth 流程的生产环境 SSE 端点（需要白名单）

## 库

> MCP 服务器的可复用代码库和组件

* [marimo-team/codemirror-mcp](https://github.com/marimo-team/codemirror-mcp) 📇 - 一个 CodeMirror 扩展，用于实现 MCP 的资源引用和提示命令
* [jhgaylor/express-mcp-handler](https://github.com/jhgaylor/express-mcp-handler) 📇 - 使用 StreamableHTTP 传输协议将 MCP 服务器绑定到 Express 服务器
* [JoshuaSiraj/mcp_auto_register](https://github.com/JoshuaSiraj/mcp_auto_register) 🐍 – 用于将 Python 包中的函数和类自动注册到 FastMCP 实例的工具
* [isaacwasserman/mcp-langchain-ts-client](https://github.com/isaacwasserman/mcp-langchain-ts-client) 📇 – 在 LangChain.js 中使用 MCP 提供的工具
* [traceloop/openllmetry#opentelemetry-instrumentation-mcp](https://github.com/traceloop/openllmetry/tree/main/packages/opentelemetry-instrumentation-mcp) 🐍 - 用于 MCP Python 的 OpenTelemetry 插件，可捕获工具调用、通知、列表、初始化握手，并从客户端到服务器传播追踪。

## 工具

> 用于调试、代理、测试和使用 MCP 服务器的有用工具

### 代理和网关

* [adiom-data/grpcmcp](https://github.com/adiom-data/grpcmcp) 🏎️ - 一个允许访问 gRPC API 服务的 MCP 服务器。
* [boilingdata/mcp-server-and-gw](https://github.com/boilingdata/mcp-server-and-gw) 📇 - 一个 MCP stdio 到 HTTP SSE 传输网关
* [emicklei/mcp-log-proxy](https://github.com/emicklei/mcp-log-proxy) 🏎️ - 一个提供 Web UI 以查看完整消息流的 MCP 代理服务器。
* [EvalsOne/MCP-Connect](https://github.com/EvalsOne/MCP-Connect) 📇 - 一个小型工具，使基于云的 AI 服务可以通过 HTTP/HTTPS 访问本地 Stdio 基础的 MCP 服务器。
* [fangyinc/mcpport](https://github.com/fangyinc/mcpport) 🐍 - 一个轻量级的 MCP 服务器网关和注册中心，支持 NAT 穿透，允许边缘设备跨网络提供 MCP 服务。功能包括 WebSocket/SSE/HTTP 端点、身份验证、IPv6 支持和用于轻松注册基于 stdio 的 MCP 服务器的 CLI 工具。
* [hamidra/yamcp](https://github.com/hamidra/yamcp) 📇 - 一个 MCP 工作区管理器，用于在专用的本地工作区中打包和管理 MCP 服务器（例如，用于编码、设计、研究）。
* [lightconetech/mcp-gateway](https://github.com/lightconetech/mcp-gateway) 📇 - 一个 MCP SSE 服务器的网关示例
* [mcpjungle/MCPJungle](https://github.com/mcpjungle/MCPJungle) 🌳 - 自托管的 MCP 注册中心和代理，供 AI 智能体使用
* [multi-mcp](https://github.com/kfirtoledo/multi-mcp) 🐍 - 一个灵活且动态的多 MCP 代理服务器，作为单一 MCP 服务器运行，同时通过 STDIO 或 SSE 连接并路由多个后端 MCP 服务器。可通过 Kubernetes 部署，只需暴露一个端口，支持在运行时动态添加和移除 MCP 服务器。
* [punkpeye/mcp-proxy](https://github.com/punkpeye/mcp-proxy) 📇 - 一个用于使用 `stdio` 传输的 MCP 服务器的 TypeScript SSE 代理
* [SecretiveShell/MCP-Bridge](https://github.com/SecretiveShell/MCP-Bridge) 🐍 – 一个 OpenAI 中间件代理，可在任何现有的兼容 OpenAI 的客户端中使用 MCP
* [sparfenyuk/mcp-proxy](https://github.com/sparfenyuk/mcp-proxy) 🐍 – 一个 MCP stdio 到 SSE 传输网关
* [TBXark/mcp-proxy](https://github.com/TBXark/mcp-proxy) 🏎️ - 一个通过单个 HTTP 服务器聚合多个 MCP 资源服务器的 MCP 代理服务器

### 开发工具

* [ithena-one/ithena-cli](https://github.com/ithena-one/ithena-cli) 🏎️ - 封装 MCP 命令以在本地记录交互，便于调试和交互审计。可选云端。
* [f/MCPTools](https://github.com/f/mcptools) 🏎️ - 用于检查和与 MCP 服务器交互的命令行开发工具
* [flux159/mcp-chat](https://github.com/flux159/mcp-chat) 📇 - 一个基于 CLI 的客户端，用于与任何 MCP 服务器聊天和连接
* [mark3labs/mcphost](https://github.com/mark3labs/mcphost) 🏎️ - 一个 CLI 主机应用程序，使 LLM 能够通过 MCP 与外部工具交互
* [strowk/mcp-autotest](https://github.com/strowk/mcp-autotest) 🏎️ - 一个用于运行基于 YAML 的语言无关自动测试的命令行工具
* [strowk/synf](https://github.com/strowk/synf) 🦀 - 用于在保存文件发生更改时热重载 MCP 服务器的工具
* [strowk/mcptee](https://github.com/strowk/mcptee/) 🏎️ - 用于代理 MCP 并将输入和输出记录到 YAML 文件的工具
* [StacklokLabs/toolhive](https://github.com/Stacklok/toolhive) 🏎️ - 一个轻量级实用程序，旨在简化 MCP 服务器的部署和管理，确保易用性、一致性以及通过容器化实现安全性
* [addozhang/spring-rest-to-mcp](https://github.com/addozhang/spring-rest-to-mcp) 🏎️ - 一个 [OpenRewrite](https://docs.openrewrite.org/) 配方集合，可自动将 Spring Web REST API 转换为 Spring AI Model Context Protocol (MCP) 服务器工具。
* [taskade/mcp](https://github.com/taskade/mcp/tree/main/packages/openapi-codegen) 📇 - 从 OpenAPI 模式生成 MCP 工具。支持自动链接、响应规范化和 MCP 服务器集成。

## 托管

> 用于托管 MCP 服务器的库和平台

* [Glama](https://glama.ai/mcp/servers) – 提供开源 MCP 服务器的托管，方便开发者和企业轻松发现、构建、管理 MCP 服务器。
* [Smithery](https://smithery.ai/) - 通过 Docker 容器提供云托管 MCP 服务器服务

## 模板

> 可直接用作 MCP 系统组件的示例代码

* [fastmcp-boilerplate](https://github.com/punkpeye/fastmcp-boilerplate) 📇 – 使用 FastMCP、TypeScript、ESLint 和 Prettier 构建的简单 MCP 服务器。
* [dart-mcp-server-template](https://github.com/jhgaylor/dart-mcp-server-template) 🎯 - 用于创建 Dart MCP 服务器的模板仓库。提供带有 Docker 配置、http+stdio 传输绑定和标准 Dart 项目结构的起点
* [rails-mcp-startup-boilerplate](https://github.com/f/mcp-startup-boilerplate) 💎 - 用于创建兼容 Claude 集成的付费 MCP 服务器的 Rails 模板。使用 Rails 8.0.2、Devise、Doorkeeper、FastMCP 和 Stripe。包含内置 UI。

## 资源

> Model Context Protocol 和 MCP 服务器开发的文档、指南、标准和学习资料

* [Model Context Protocol 规范](https://modelcontextprotocol.io/) — 官方 MCP 规范
* [Model Context Protocol (MCP) 快速入门](https://glama.ai/blog/2024-11-25-model-context-protocol-quickstart)

## 教程

* [设置 Claude 桌面应用以使用 SQLite 数据库](https://youtu.be/wxCCzo9dGj0)
* [amirshk/mcp-secrets-plugin](https://github.com/amirshk/mcp-secrets-plugin) 🐍 - 一个参考代码，用于使用系统本地密钥链安全存储和检索敏感信息
* [Microsoft 的 AI 智能体入门教程](https://youtu.be/OhI005_aJkA?si=4nclgu-qAGgM57RJ) 🐍 #️⃣ 完整课程（第 1–10 课）使用 Semantic Kernel – 理论与实践内容（1 小时）

## 相关优秀列表：

* [awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers)
* [awesome-mcp-clients](https://github.com/punkpeye/awesome-mcp-clients)