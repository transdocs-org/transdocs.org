# 极致的 MCP 服务器 [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

[![ไทย](https://img.shields.io/badge/Thai-Click-blue)](https://github.com/punkpeye/awesome-mcp-servers/blob/main/README-th.md)
[![English](https://img.shields.io/badge/English-Click-yellow)](https://github.com/punkpeye/awesome-mcp-servers/blob/main/README.md)
[![繁體中文](https://img.shields.io/badge/繁體中文-點擊查看-orange)](https://github.com/punkpeye/awesome-mcp-servers/blob/main/README-zh_TW.md)
[![简体中文](https://img.shields.io/badge/简体中文-点击查看-orange)](https://github.com/punkpeye/awesome-mcp-servers/blob/main/README-zh.md)
[![日本語](https://img.shields.io/badge/日本語-クリック-青)](https://github.com/punkpeye/awesome-mcp-servers/blob/main/README-ja.md)
[![한국어](https://img.shields.io/badge/한국어-클릭-yellow)](https://github.com/punkpeye/awesome-mcp-servers/blob/main/README-ko.md)
[![Português Brasileiro](https://img.shields.io/badge/Português_Brasileiro-Clique-green)](https://github.com/punkpeye/awesome-mcp-servers/blob/main/README-pt_BR.md)
[![Discord](https://img.shields.io/discord/1312302100125843476?logo=discord\&label=discord)](https://glama.ai/mcp/discord)
[![Subreddit subscribers](https://img.shields.io/reddit/subreddit-subscribers/mcp?style=flat\&logo=reddit\&label=subreddit)](https://www.reddit.com/r/mcp/)

一份精心整理的 Model Context Protocol（MCP）服务器列表。

* [什么是 MCP？](#what-is-mcp)
* [客户端](#clients)
* [教程](#tutorials)
* [社区](#community)
* [图例](#legend)
* [服务器实现](#server-implementations)
* [框架](#frameworks)
* [技巧与窍门](#tips-and-tricks)

## 什么是 MCP？

[MCP](https://modelcontextprotocol.io/) 是一种开放协议，允许 AI 模型通过标准化的服务器实现安全地与本地和远程资源进行交互。本列表专注于可用于生产环境和实验性的 MCP 服务器，这些服务器通过文件访问、数据库连接、API 集成以及其他上下文服务来扩展 AI 功能。

## 客户端

查看 [awesome-mcp-clients](https://github.com/punkpeye/awesome-mcp-clients/) 和 [glama.ai/mcp/clients](https://glama.ai/mcp/clients)。

> \[!提示]
> [Glama Chat](https://glama.ai/chat) 是一个支持 MCP 的多模态 AI 客户端，也是 [AI 网关](https://glama.ai/gateway)。

## 教程

* [Model Context Protocol (MCP) 快速入门](https://glama.ai/blog/2024-11-25-model-context-protocol-quickstart)
* [设置 Claude 桌面应用以使用 SQLite 数据库](https://youtu.be/wxCCzo9dGj0)

## 社区

* [r/mcp Reddit](https://www.reddit.com/r/mcp)
* [Discord 服务器](https://glama.ai/mcp/discord)

## 图例

* 🎖️ – 官方实现

* 编程语言
  * 🐍 – Python 代码库
  * 📇 – TypeScript（或 JavaScript）代码库
  * 🏎️ – Go 代码库
  * 🦀 – Rust 代码库
  * \#️⃣ - C# 代码库
  * ☕ - Java 代码库
  * 🌊 – C/C++ 代码库
  * 💎 - Ruby 代码库

* 范围
  * ☁️ - 云服务
  * 🏠 - 本地服务
  * 📟 - 嵌入式系统

* 操作系统
  * 🍎 – 适用于 macOS
  * 🪟 – 适用于 Windows
  * 🐧 - 适用于 Linux

> \[!注意]
> 对本地 🏠 与云 ☁️ 有疑问？
>
> * 当 MCP 服务器与本地安装的软件通信时使用本地（例如控制 Chrome 浏览器）。
> * 当 MCP 服务器与远程 API 通信时使用云（例如天气 API）。

## 服务器实现

> \[!注意]
> 我们现在有一个与仓库同步的 [基于 Web 的目录](https://glama.ai/mcp/servers)。

* 🔗 - [聚合器](#aggregators)
* 🎨 - [艺术与文化](#art-and-culture)
* 📂 - [浏览器自动化](#browser-automation)
* 🧬 - [生物、医学与生物信息学](#bio)
* ☁️ - [云平台](#cloud-platforms)
* 👨‍💻 - [代码执行](#code-execution)
* 🤖 - [编码代理](#coding-agents)
* 🖥️ - [命令行](#command-line)
* 💬 - [通信](#communication)
* 👤 - [客户数据平台](#customer-data-platforms)
* 🗄️ - [数据库](#databases)
* 📊 - [数据平台](#data-platforms)
* 🚚 - [交付](#delivery)
* 🛠️ - [开发者工具](#developer-tools)
* 🧮 - [数据科学工具](#data-science-tools)
* 📟 - [嵌入式系统](#embedded-system)
* 📂 - [文件系统](#file-systems)
* 💰 - [金融与金融科技](#finance--fintech)
* 🎮 - [游戏](#gaming)
* 🧠 - [知识与记忆](#knowledge--memory)
* 🗺️ - [定位服务](#location-services)
* 🎯 - [营销](#marketing)
* 📊 - [监控](#monitoring)
* 🎥 - [多媒体处理](#multimedia-process)
* 🔎 - [搜索与数据提取](#search)
* 🔒 - [安全](#security)
* 🌐 - [社交媒体](#social-media)
* 🏃 - [体育](#sports)
* 🎧 - [支持与服务管理](#support-and-service-management)
* 🌎 - [翻译服务](#translation-services)
* 🎧 - [文本转语音](#text-to-speech)
* 🚆 - [旅行与交通](#travel-and-transportation)
* 🔄 - [版本控制](#version-control)
* 🏢 - [工作场所与生产力](#workplace-and-productivity)
* 🛠️ - [其他工具与集成](#other-tools-and-integrations)

### 🔗 <a name="aggregators"></a>聚合器

通过单个 MCP 服务器访问多个应用程序和工具的服务器。

* [1mcp/agent](https://github.com/1mcp-app/agent) 📇 ☁️ 🏠 🍎 🪟 🐧 - 一个统一的 Model Context Protocol 服务器实现，将多个 MCP 服务器整合为一个。
* [duaraghav8/MCPJungle](https://github.com/duaraghav8/MCPJungle) 🏎️ 🏠 - 企业 AI 代理的自托管 MCP 服务器注册中心
* [glenngillen/mcpmcp-server](https://github.com/glenngillen/mcpmcp-server) ☁️ 📇 🍎 🪟 🐧 - 一个 MCP 服务器列表，以便你可以询问你的客户端可以使用哪些服务器来改进你的日常流程。
* [hamflx/imagen3-mcp](https://github.com/hamflx/imagen3-mcp) 📇 🏠 🪟 🍎 🐧 - 通过 MCP 使用 Google 的 Imagen 3.0 API 的强大图像生成工具。从文本提示生成高质量图像，具有高级摄影、艺术和逼真效果控制。
* [julien040/anyquery](https://github.com/julien040/anyquery) 🏎️ 🏠 ☁️ - 使用 SQL 查询超过 40 个应用程序。它还可以连接到你的 PostgreSQL、MySQL 或 SQLite 兼容数据库。设计为本地优先且私有的。
* [metatool-ai/metatool-app](https://github.com/metatool-ai/metatool-app) 📇 ☁️ 🏠 🍎 🪟 🐧 - MetaMCP 是一个统一的中间件 MCP 服务器，通过 GUI 管理你的 MCP 连接。
* [mindsdb/mindsdb](https://github.com/mindsdb/mindsdb) - 使用 [MindsDB 作为单一 MCP 服务器](https://docs.mindsdb.com/mcp/overview) 连接并统一各种平台和数据库中的数据。
* [particlefuture/MCPDiscovery](https://github.com/particlefuture/MCPDiscovery) - MCP 的 MCP。一个 MCP 服务器的中心枢纽。帮助你发现可用的 MCP 服务器，并了解如何安装和使用它们。
* [PipedreamHQ/pipedream](https://github.com/PipedreamHQ/pipedream/tree/master/modelcontextprotocol) ☁️ 🏠 - 连接 2500 多个 API 和 8000+ 预构建工具，并在你自己的应用中为你的用户管理服务器。
* [sitbon/magg](https://github.com/sitbon/magg) 🍎 🪟 🐧 ☁️ 🏠 🐍 - Magg：一个作为通用枢纽的元 MCP 服务器，允许 LLM 自主发现、安装和编排多个 MCP 服务器——本质上赋予 AI 助手按需扩展自身能力的力量。
* [SureScaleAI/openai-gpt-image-mcp](https://github.com/SureScaleAI/openai-gpt-image-mcp) 📇 ☁️ - OpenAI GPT 图像生成/编辑 MCP 服务器。
* [sxhxliang/mcp-access-point](https://github.com/sxhxliang/mcp-access-point) 📇 ☁️ 🏠 🍎 🪟 🐧 - 一键将 Web 服务转换为 MCP 服务器，无需更改任何代码。
* [TheLunarCompany/lunar#mcpx](https://github.com/TheLunarCompany/lunar/tree/main/mcpx) 📇 🏠  ☁️ 🍎 🪟 🐧 - MCPX 是一个生产就绪的开源网关，可大规模管理 MCP 服务器——集中工具发现、访问控制、调用优先级和使用跟踪，简化代理工作流程。
* [tigranbs/mcgravity](https://github.com/tigranbs/mcgravity) 📇 🏠 - 一个代理工具，将多个 MCP 服务器组合成一个统一的端点。通过负载均衡请求到多个 MCP 服务器来扩展你的 AI 工具，类似于 Nginx 对 Web 服务器的工作方式。
* [VeriTeknik/pluggedin-mcp-proxy](https://github.com/VeriTeknik/pluggedin-mcp-proxy)  📇 🏠 - 一个综合代理服务器，将多个 MCP 服务器组合成一个带有广泛可见性功能的单一界面。它提供跨服务器的工具、提示、资源和模板的发现与管理，以及在构建 MCP 服务器时用于调试的游乐场。
* [WayStation-ai/mcp](https://github.com/waystation-ai/mcp) ☁️ 🍎 🪟 - 无缝且安全地将 Claude Desktop 和其他 MCP 主机连接到你喜爱的应用程序（Notion、Slack、Monday、Airtable 等）。耗时不到 90 秒。
* [wegotdocs/open-mcp](https://github.com/wegotdocs/open-mcp) 📇 🏠 🍎 🪟 🐧 - 在 10 秒内将 Web API 转换为 MCP 服务器，并将其添加到开源注册中心：<https://open-mcp.org>
* [Data-Everything/mcp-server-templates](https://github.com/Data-Everything/mcp-server-templates) 📇 🏠 🍎 🪟 🐧 - 一个服务器。所有工具。一个统一的 MCP 平台，将许多应用程序、工具和服务连接到一个强大的界面之后——适合本地开发人员或生产代理。

### 🎨 <a name="art-and-culture"></a>艺术与文化

访问和探索艺术收藏、文化遗产和博物馆数据库。使 AI 模型能够搜索和分析艺术和文化内容。

* [8enSmith/mcp-open-library](https://github.com/8enSmith/mcp-open-library) 📇 ☁️ - 一个针对 Open Library API 的 MCP 服务器，使 AI 助手能够搜索图书信息。
* [abhiemj/manim-mcp-server](https://github.com/abhiemj/manim-mcp-server) 🐍 🏠 🪟 🐧 - 一个本地 MCP 服务器，使用 Manim 生成动画。
* [ahujasid/blender-mcp](https://github.com/ahujasid/blender-mcp) 🐍 - 用于与 Blender 交互的 MCP 服务器
* [burningion/video-editing-mcp](https://github.com/burningion/video-editing-mcp) 🐍 - 从你的视频丛林收藏中添加、分析、搜索和生成视频编辑
* [cantian-ai/bazi-mcp](https://github.com/cantian-ai/bazi-mcp) 📇 🏠 ☁️ 🍎 🪟 - 提供全面且准确的八字（中国命理学）图表绘制和分析
* [cswkim/discogs-mcp-server](https://github.com/cswkim/discogs-mcp-server) 📇 ☁️ - 用于与Discogs API交互的MCP服务器
* [diivi/aseprite-mcp](https://github.com/diivi/aseprite-mcp) 🐍 🏠 - 使用Aseprite API创建像素艺术的MCP服务器
* [djalal/quran-mcp-server](https://github.com/djalal/quran-mcp-server) 📇 ☁️ 通过官方REST API v4与Quran.com语料库交互的MCP服务器
* [mikechao/metmuseum-mcp](https://github.com/mikechao/metmuseum-mcp) 📇 ☁️ - 大都会艺术博物馆藏品API集成，用于搜索和展示馆藏艺术品
* [OctoEverywhere/mcp](https://github.com/OctoEverywhere/mcp) #️⃣ ☁️ - 一个3D打印机MCP服务器，允许获取实时打印机状态、摄像头快照和打印机控制
* [omni-mcp/isaac-sim-mcp](https://github.com/omni-mcp/isaac-sim-mcp) 📇 ☁️ - 一个MCP服务器和扩展，支持使用自然语言控制NVIDIA Isaac Sim、Lab、OpenUSD等
* [PatrickPalmer/MayaMCP](https://github.com/PatrickPalmer/MayaMCP) 🐍 🏠 - Autodesk Maya的MCP服务器
* [r-huijts/oorlogsbronnen-mcp](https://github.com/r-huijts/oorlogsbronnen-mcp) 📇 ☁️ - Oorlogsbronnen（战争资料）API集成，用于访问荷兰二战历史记录、照片和文件（1940-1945）
* [r-huijts/rijksmuseum-mcp](https://github.com/r-huijts/rijksmuseum-mcp) 📇 ☁️ - Rijksmuseum API集成，用于艺术品搜索、详情和收藏
* [samuelgursky/davinci-resolve-mcp](https://github.com/samuelgursky/davinci-resolve-mcp) 🐍 - 用于DaVinci Resolve的MCP服务器集成，提供强大的视频剪辑、调色、媒体管理和项目控制工具
* [yuna0x0/anilist-mcp](https://github.com/yuna0x0/anilist-mcp) 📇 ☁️ - 集成AniList API的MCP服务器，提供动漫和漫画信息

### <a name="bio"></a>生物学、医学和生物信息学

* [genomoncology/biomcp](https://github.com/genomoncology/biomcp) 🐍 ☁️ - 提供访问PubMed、ClinicalTrials.gov和MyVariant.info的生物医药研究MCP服务器
* [longevity-genie/biothings-mcp](https://github.com/longevity-genie/biothings-mcp) 🐍 🏠 ☁️ - 与BioThings API交互的MCP服务器，包括基因、遗传变异、药物和分类信息
* [longevity-genie/gget-mcp](https://github.com/longevity-genie/gget-mcp) 🐍 🏠 ☁️ - 提供强大生物信息学工具包的MCP服务器，用于基因组查询和分析，封装了流行的`gget`库
* [longevity-genie/opengenes-mcp](https://github.com/longevity-genie/opengenes-mcp) 🎖️ 🐍 🏠 ☁️ - 针对OpenGenes项目衰老和长寿研究可查询数据库的MCP服务器
* [longevity-genie/synergy-age-mcp](https://github.com/longevity-genie/synergy-age-mcp) 🎖️ 🐍 🏠 ☁️ - SynergyAge长寿基因相互作用数据库的MCP服务器
* [wso2/fhir-mcp-server](https://github.com/wso2/fhir-mcp-server) 🐍 🏠 ☁️ - Fast Healthcare Interoperability Resources（FHIR）API的模型上下文协议服务器。提供与FHIR服务器的无缝集成，使AI助手能够搜索、检索、创建、更新和分析临床医疗数据，并支持SMART-on-FHIR身份验证
* [JamesANZ/medical-mcp](https://github.com/JamesANZ/medical-mcp) 📇 🏠 - 提供访问医疗信息、药物数据库和医疗资源的MCP服务器。使AI助手能够查询医疗数据、药物相互作用和临床指南

### 📂 <a name="browser-automation"></a>浏览器自动化

网页内容访问和自动化功能。支持以AI友好的格式进行搜索、抓取和处理网页内容。

* [34892002/bilibili-mcp-js](https://github.com/34892002/bilibili-mcp-js) 📇 🏠 - 支持Bilibili内容搜索的MCP服务器。提供LangChain集成示例和测试脚本
* [agent-infra/mcp-server-browser](https://github.com/bytedance/UI-TARS-desktop/tree/main/packages/agent-infra/mcp-servers/browser) 📇 🏠 - 使用Puppeteer的浏览器自动化功能，支持本地和远程浏览器连接
* [automatalabs/mcp-server-playwright](https://github.com/Automata-Labs-team/MCP-Server-Playwright) 🐍 - 使用Playwright进行浏览器自动化的MCP服务器
* [blackwhite084/playwright-plus-python-mcp](https://github.com/blackwhite084/playwright-plus-python-mcp) 🐍 - 使用Playwright进行浏览器自动化的Python MCP服务器，更适合LLM
* [browserbase/mcp-server-browserbase](https://github.com/browserbase/mcp-server-browserbase) 🎖️ 📇 - 在云端自动化浏览器交互（例如网页导航、数据提取、表单填写等）
* [browsermcp/mcp](https://github.com/browsermcp/mcp) 📇 🏠 - 自动化本地Chrome浏览器
* [co-browser/browser-use-mcp-server](https://github.com/co-browser/browser-use-mcp-server) 🐍 - 作为MCP服务器打包的browser-use，使用SSE传输。包含在Docker中运行Chromium + VNC服务器的Dockerfile
* [eat-pray-ai/yutu](https://github.com/eat-pray-ai/yutu) 🏎️ 🏠 🍎 🐧 🪟 - 功能完整的YouTube MCP服务器和CLI，用于自动化YouTube操作
* [executeautomation/playwright-mcp-server](https://github.com/executeautomation/mcp-playwright) 📇 - 使用Playwright进行浏览器自动化和网页抓取的MCP服务器
* [eyalzh/browser-control-mcp](https://github.com/eyalzh/browser-control-mcp) 📇 🏠 - 与浏览器扩展配对的MCP服务器，使LLM客户端能够控制用户的浏览器（Firefox）
* [fradser/mcp-server-apple-reminders](https://github.com/FradSer/mcp-server-apple-reminders) 📇 🏠 🍎 - 用于与macOS上的Apple Reminders交互的MCP服务器
* [getrupt/ashra-mcp](https://github.com/getrupt/ashra-mcp) 📇 🏠 - 从任何网站提取结构化数据。只需提示即可获得JSON
* [kimtaeyoon83/mcp-server-youtube-transcript](https://github.com/kimtaeyoon83/mcp-server-youtube-transcript) 📇 ☁️ - 获取YouTube字幕和转录文本供AI分析
* [kimtth/mcp-aoai-web-browsing](https://github.com/kimtth/mcp-aoai-web-browsing) 🐍 🏠 - 使用Azure OpenAI和Playwright的`最小`服务器/客户端MCP实现
* [lightpanda-io/gomcp](https://github.com/lightpanda-io/gomcp) 🏎 🏠/☁️ 🐧/🍎 - 用于Lightpanda的Go语言MCP服务器，Lightpanda是专为网页自动化设计的超快速无头浏览器
* [microsoft/playwright-mcp](https://github.com/microsoft/playwright-mcp) - 微软官方Playwright MCP服务器，使LLM能够通过结构化的可访问性快照与网页交互
* [modelcontextprotocol/server-puppeteer](https://github.com/modelcontextprotocol/servers/tree/main/src/puppeteer) 📇 🏠 - 用于网页抓取和交互的浏览器自动化
* [ndthanhdev/mcp-browser-kit](https://github.com/ndthanhdev/mcp-browser-kit) 📇 🏠 - 使AI助手能够与本地浏览器交互的MCP服务器
* [operative\_sh/web-eval-agent](https://github.com/Operative-Sh/web-eval-agent) 🐍 🏠 🍎 - 使用browser-use浏览器代理自主调试Web应用程序的MCP服务器
* [pskill9/web-search](https://github.com/pskill9/web-search) 📇 🏠 - 使用Google搜索结果进行免费网络搜索的MCP服务器，无需API密钥
* [recursechat/mcp-server-apple-shortcuts](https://github.com/recursechat/mcp-server-apple-shortcuts) 📇 🏠 🍎 - 与Apple快捷指令集成的MCP服务器
* [xspadex/bilibili-mcp](https://github.com/xspadex/bilibili-mcp.git) 📇 🏠 - 基于FastMCP的工具，获取Bilibili热门视频并通过标准MCP接口公开
* [imprvhub/mcp-browser-agent](https://github.com/imprvhub/mcp-browser-agent) 📇 🏠 - 提供Claude Desktop自主浏览器自动化功能的模型上下文协议（MCP）集成

### ☁️ <a name="cloud-platforms"></a>云平台

云平台服务集成。支持对云基础设施和服务进行管理和交互。

* [4everland/4everland-hosting-mcp](https://github.com/4everland/4everland-hosting-mcp) 🎖️ 📇 🏠 🍎 🐧 - 针对4EVERLAND Hosting的MCP服务器实现，支持将AI生成的代码即时部署到Greenfield、IPFS和Arweave等去中心化存储网络
* [aashari/mcp-server-aws-sso](https://github.com/aashari/mcp-server-aws-sso) 📇 ☁️ 🏠 - AWS单点登录（SSO）集成，使AI系统能够通过启动SSO登录、列出账户/角色和使用临时凭证执行AWS CLI命令来安全地与AWS资源交互
* [alexbakers/mcp-ipfs](https://github.com/alexbakers/mcp-ipfs) 📇 ☁️ - IPFS存储的上传和操作
* [alexei-led/aws-mcp-server](https://github.com/alexei-led/aws-mcp-server) 🐍 ☁️ - 一个轻量但强大的服务器，使AI助手能够在安全的Docker环境中执行AWS CLI命令、使用Unix管道，并应用常见AWS任务的提示模板，支持多架构
* [alexei-led/k8s-mcp-server](https://github.com/alexei-led/k8s-mcp-server) 🐍 - 一个轻量但稳健的服务器，使AI助手能够在安全的Docker环境中通过Unix管道安全地执行Kubernetes CLI命令（`kubectl`、`helm`、`istioctl`和`argocd`），支持多架构
* [aliyun/alibaba-cloud-ops-mcp-server](https://github.com/aliyun/alibaba-cloud-ops-mcp-server) 🎖️ 🐍 ☁️ - 使AI助手能够操作阿里云资源的MCP服务器，支持ECS、云监控、OOS和广泛使用的云产品
* [awslabs/mcp](https://github.com/awslabs/mcp) 🎖️ ☁️ - AWS MCP服务器，实现与AWS服务和资源的无缝集成
* [bright8192/esxi-mcp-server](https://github.com/bright8192/esxi-mcp-server) 🐍 ☁️ - 一个基于MCP（模型控制协议）的VMware ESXi/vCenter管理服务器，提供用于虚拟机管理的简单REST API接口。
* [cloudflare/mcp-server-cloudflare](https://github.com/cloudflare/mcp-server-cloudflare) 🎖️ 📇 ☁️ - 集成Cloudflare服务，包括Workers、KV、R2和D1。
* [cyclops-ui/mcp-cyclops](https://github.com/cyclops-ui/mcp-cyclops) 🎖️ 🏎️ ☁️ - 一个MCP服务器，允许AI代理通过Cyclops抽象管理Kubernetes资源。
* [elementfm/mcp](https://gitlab.com/elementfm/mcp) 🎖️ 🐍 📇 🏠 ☁️ - 开源播客托管平台。
* [erikhoward/adls-mcp-server](https://github.com/erikhoward/adls-mcp-server) 🐍 ☁️/🏠 - 用于Azure Data Lake Storage的MCP服务器。它可以执行管理容器、对容器文件进行读/写/上传/下载操作以及管理文件元数据。
* [espressif/esp-rainmaker-mcp](https://github.com/espressif/esp-rainmaker-mcp) 🎖️ 🐍 🏠 ☁️ 📟 - 官方Espressif MCP服务器，用于管理和控制ESP RainMaker设备。
* [flux159/mcp-server-kubernetes](https://github.com/Flux159/mcp-server-kubernetes) 📇 ☁️/🏠 - 使用TypeScript实现的Kubernetes集群操作，包括Pod、部署和服务。
* [hardik-id/azure-resource-graph-mcp-server](https://github.com/hardik-id/azure-resource-graph-mcp-server) 📇 ☁️/🏠 - 一个基于Model Context Protocol的服务器，使用Azure Resource Graph查询和分析Azure资源，使AI助手能够探索和监控Azure基础设施。
* [jdubois/azure-cli-mcp](https://github.com/jdubois/azure-cli-mcp) - 一个围绕Azure CLI命令行的封装，允许你直接与Azure交互。
* [johnneerdael/netskope-mcp](https://github.com/johnneerdael/netskope-mcp) 🔒 ☁️ - 一个MCP，用于访问Netskope Private Access环境中的所有Netskope Private Access组件，包括详细的配置信息和使用示例。
* [liveblocks/liveblocks-mcp-server](https://github.com/liveblocks/liveblocks-mcp-server) 🎖️ 📇 ☁️ - 创建、修改和删除[Liveblocks](https://liveblocks.io)的不同方面内容，如房间、线程、评论、通知等。此外，它还具有对Storage和Yjs的读取权限。
* [manusa/Kubernetes MCP Server](https://github.com/manusa/kubernetes-mcp-server) 🏎️ 🏠 - 一个功能强大的Kubernetes MCP服务器，额外支持OpenShift。除了提供对**任何**Kubernetes资源的CRUD操作外，该服务器还提供了与集群交互的专用工具。
* [Nebula-Block-Data/nebulablock-mcp-server](https://github.com/Nebula-Block-Data/nebulablock-mcp-server) 📇 🏠 - 与fastmcp库集成，将NebulaBlock API功能全面暴露为可访问的工具。
* [nwiizo/tfmcp](https://github.com/nwiizo/tfmcp) 🦀 🏠 - 一个Terraform MCP服务器，允许AI助手管理和操作Terraform环境，实现配置读取、计划分析、配置应用和状态管理。
* [portainer/portainer-mcp](https://github.com/portainer/portainer-mcp) 🏎️ ☁️/🏠 - 一个功能强大的MCP服务器，使AI助手能够无缝地与Portainer实例交互，提供对容器管理、部署操作和基础设施监控的自然语言访问。
* [pulumi/mcp-server](https://github.com/pulumi/mcp-server) 🎖️ 📇 🏠 - 用于通过Pulumi Automation API和Pulumi Cloud API与Pulumi交互的MCP服务器。允许MCP客户端以编程方式执行Pulumi操作，如检索包信息、预览更改、部署更新和获取堆栈输出。
* [pythonanywhere/pythonanywhere-mcp-server](https://github.com/pythonanywhere/pythonanywhere-mcp-server) 🐍 🏠 - PythonAnywhere云平台的MCP服务器实现。
* [qiniu/qiniu-mcp-server](https://github.com/qiniu/qiniu-mcp-server) 🐍 ☁️ - 基于七牛云产品构建的MCP服务器，支持访问七牛云存储、媒体处理服务等。
* [redis/mcp-redis-cloud](https://github.com/redis/mcp-redis-cloud) 📇 ☁️ - 使用自然语言轻松管理你的Redis Cloud资源。通过简单命令创建数据库、监控订阅、配置云部署。
* [reza-gholizade/k8s-mcp-server](https://github.com/reza-gholizade/k8s-mcp-server) 🏎️ ☁️/🏠 - 一个Kubernetes Model Context Protocol (MCP)服务器，提供通过标准化接口与Kubernetes集群交互的工具，包括API资源发现、资源管理、Pod日志、指标和事件。
* [rohitg00/kubectl-mcp-server](https://github.com/rohitg00/kubectl-mcp-server) 🐍 ☁️/🏠 - 一个用于Kubernetes的Model Context Protocol (MCP)服务器，使Claude、Cursor等AI助手能够通过自然语言与Kubernetes集群交互。
* [silenceper/mcp-k8s](https://github.com/silenceper/mcp-k8s) 🏎️ ☁️/🏠 - MCP-K8S是一个由AI驱动的Kubernetes资源管理工具，允许用户通过自然语言交互操作Kubernetes集群中的任何资源，包括原生资源（如Deployment、Service）和自定义资源（CRD）。无需记忆复杂命令——只需描述你的需求，AI将准确执行相应的集群操作，大大提升Kubernetes的易用性。
* [StacklokLabs/mkp](https://github.com/StacklokLabs/mkp) 🏎️ ☁️ - 一个用于Kubernetes的Model Context Protocol (MCP)服务器，允许基于LLM的应用程序与Kubernetes集群交互。它提供了通过MCP协议列出和应用Kubernetes资源的工具。
* [StacklokLabs/mkp](https://github.com/StacklokLabs/mkp) 🏎️ ☁️/🏠 - 一个用于Kubernetes的Model Kontext Protocol服务器，允许基于LLM的应用程序通过本地Go实现和直接API集成与Kubernetes集群交互，并提供全面的资源管理。
* [StacklokLabs/ocireg-mcp](https://github.com/StacklokLabs/ocireg-mcp) 🏎️ ☁️ - 一个基于SSE的MCP服务器，允许基于LLM的应用程序与OCI注册表交互。它提供了检索容器镜像信息、列出标签等功能。
* [strowk/mcp-k8s-go](https://github.com/strowk/mcp-k8s-go) 🏎️ ☁️/🏠 - 通过MCP进行Kubernetes集群操作。
* [thunderboltsid/mcp-nutanix](https://github.com/thunderboltsid/mcp-nutanix) 🏎️ 🏠/☁️ - 一个基于Go语言的MCP服务器，用于与Nutanix Prism Central资源进行交互。
* [trilogy-group/aws-pricing-mcp](https://github.com/trilogy-group/aws-pricing-mcp) 🏎️ ☁️/🏠 - 一次调用即可获取最新的EC2定价信息。快速高效，基于预解析的AWS定价目录。
* [VmLia/books-mcp-server](https://github.com/VmLia/books-mcp-server) 📇 ☁️ - 一个用于查询书籍的MCP服务器，可应用于常见的MCP客户端，例如Cherry Studio。
* [weibaohui/k8m](https://github.com/weibaohui/k8m) 🏎️ ☁️/🏠 - 提供MCP多集群Kubernetes管理和操作，具有管理界面、日志功能，并包含近50个内置工具，覆盖常见的DevOps和开发场景。支持标准资源和CRD资源。
* [weibaohui/kom](https://github.com/weibaohui/kom) 🏎️ ☁️/🏠 - 提供MCP多集群Kubernetes管理和操作。它可以作为SDK集成到你自己的项目中，并包含近50个内置工具，覆盖常见的DevOps和开发场景。支持标准资源和CRD资源。
* [wenhuwang/mcp-k8s-eye](https://github.com/wenhuwang/mcp-k8s-eye) 🏎️ ☁️/🏠 - 用于Kubernetes管理的MCP服务器，可分析你的集群和应用程序健康状况。

### 👨‍💻 <a name="code-execution"></a>代码执行

代码执行服务器。允许LLM在安全环境中执行代码，例如用于编码代理。

* [alfonsograziano/node-code-sandbox-mcp](https://github.com/alfonsograziano/node-code-sandbox-mcp) 📇 🏠 – 一个Node.js MCP服务器，启动基于Docker的隔离沙箱来执行JavaScript代码片段，支持即时安装npm依赖并进行干净的销毁。
* [ckanthony/openapi-mcp](https://github.com/ckanthony/openapi-mcp) 🏎️ ☁️ - OpenAPI-MCP：容器化的MCP服务器，允许你的AI代理通过现有的API文档访问任何API。
* [gwbischof/outsource-mcp](https://github.com/gwbischof/outsource-mcp) 🐍 ☁️ - 给你的AI助手分配自己的AI助手。例如：“你能让OpenAI生成一张狗的图片吗？”
* [hileamlakB/PRIMS](https://github.com/hileamlakB/PRIMS) 🐍 🏠 – 一个Python运行时解释器MCP服务器，在隔离环境中执行用户提交的代码。
* [ouvreboite/openapi-to-mcp](https://github.com/ouvreboite/openapi-to-mcp) #️⃣ ☁️ - 一个轻量级MCP服务器，使用OpenAPI规范访问任何API。支持OAuth2和完整的JSON Schema参数及请求体。
* [pydantic/pydantic-ai/mcp-run-python](https://github.com/pydantic/pydantic-ai/tree/main/mcp-run-python) 🐍 🏠 - 通过MCP工具调用在安全沙箱中运行Python代码。
* [r33drichards/mcp-js](https://github.com/r33drichards/mcp-js) 🦀 🏠 🐧 🍎 - 一个使用v8隔离代码的JavaScript代码执行沙箱，可在本地安全地运行AI生成的JavaScript代码。支持堆快照以实现持久化会话。
* [yepcode/mcp-server-js](https://github.com/yepcode/mcp-server-js) 🎖️ 📇 ☁️ - 在安全且可扩展的沙箱环境中执行任何LLM生成的代码，并使用JavaScript或Python创建你自己的MCP工具，全面支持NPM和PyPI包。
* [dagger/container-use](https://github.com/dagger/container-use) 🏎️ 🏠 🐧 🍎 🪟 - 为编码代理提供容器化环境。多个代理可以在独立的新鲜容器和Git分支中独立工作。无冲突，支持多实验。完整执行历史、终端访问代理环境、Git工作流。适用于任何代理/模型/基础架构堆栈。
### 🤖 <a name="coding-agents"></a>编程代理

完整的编码代理，使LLM能够读取、编辑和执行代码，并完全自主地解决通用编程任务。

* [doggybee/mcp-server-leetcode](https://github.com/doggybee/mcp-server-leetcode) 📇 ☁️ - 一个MCP服务器，使AI模型能够搜索、检索和解决LeetCode问题。支持元数据过滤、用户资料、提交和竞赛数据访问。
* [ezyang/codemcp](https://github.com/ezyang/codemcp) 🐍 🏠 - 具备基本的读取、写入和命令行工具的编码代理。
* [gabrielmaialva33/winx-code-agent](https://github.com/gabrielmaialva33/winx-code-agent) 🦀 🏠 - 用Rust高性能重新实现的WCGW代码代理，通过MCP为LLM提供shell执行和高级文件管理功能。
* [jinzcdev/leetcode-mcp-server](https://github.com/jinzcdev/leetcode-mcp-server) 📇 ☁️ - MCP服务器，实现对**LeetCode**编程问题、解决方案、提交和公共数据的自动化访问，支持用户特定功能（例如笔记）的可选身份验证，同时支持`leetcode.com`（全球）和`leetcode.cn`（中国）站点。
* [juehang/vscode-mcp-server](https://github.com/juehang/vscode-mcp-server) 📇 🏠 - 一个MCP服务器，允许如Claude这样的AI读取VS Code工作区中的目录结构，查看由linter和语言服务器检测到的问题，读取代码文件并进行编辑。
* [micl2e2/code-to-tree](https://github.com/micl2e2/code-to-tree) 🌊 🏠 📟 🐧 🪟 🍎 - 一个单一二进制文件的MCP服务器，能够将源代码转换为AST（抽象语法树），与语言无关。
* [oraios/serena](https://github.com/oraios/serena) 🐍 🏠 - 一个功能齐全的编码代理，通过使用语言服务器进行符号代码操作。
* [pdavis68/RepoMapper](https://github.com.mcas.ms/pdavis68/RepoMapper) 🐧 🪟 🍎 - 一个MCP服务器（和命令行工具），用于从仓库中提供聊天相关文件的动态地图，包括它们的函数原型和相关文件，并按相关性排序。基于Aider.chat中的“仓库地图”功能。
* [rinadelph/Agent-MCP](https://github.com/rinadelph/Agent-MCP) 🐍 🏠 - 一个使用MCP创建多代理系统的框架，支持协调AI协作，具备任务管理、共享上下文和RAG功能。
* [stippi/code-assistant](https://github.com/stippi/code-assistant) 🦀 🏠 - 具备基本的列表、读取、替换文件内容、写入、执行命令和网络搜索工具的编码代理。支持多个项目并发处理。
* [tiianhk/MaxMSP-MCP-Server](https://github.com/tiianhk/MaxMSP-MCP-Server) 🐍 🏠 🎵 🎥 - 一个针对Max（Max/MSP/Jitter）的编码代理，这是一种用于音乐和多媒体的可视化编程语言。
* [VertexStudio/developer](https://github.com/VertexStudio/developer) 🦀 🏠 🍎 🪟 🐧 - 提供全面的开发工具，支持文件编辑、shell命令执行和屏幕捕捉功能。

### 🖥️ <a name="command-line"></a>命令行

运行命令、捕获输出并与shell和命令行工具进行交互。

* [automateyournetwork/pyATS_MCP](https://github.com/automateyournetwork/pyATS_MCP) - Cisco pyATS服务器，支持以结构化、模型驱动的方式与网络设备交互。
* [aymericzip/intlayer](https://github.com/aymericzip/intlayer) 📇 ☁️ 🏠 - 一个MCP服务器，通过Intlayer i18n / CMS工具的AI辅助功能增强你的IDE：智能CLI访问、文档访问。
* [ferrislucas/iterm-mcp](https://github.com/ferrislucas/iterm-mcp) 🖥️ 🛠️ 💬 - 一个Model Context Protocol服务器，提供对iTerm的访问。你可以运行命令并询问关于iTerm终端中看到的内容。
* [g0t4/mcp-server-commands](https://github.com/g0t4/mcp-server-commands) 📇 🏠 - 使用`run_command`和`run_script`工具运行任意命令。
* [maxim-saplin/mcp_safe_local_python_executor](https://github.com/maxim-saplin/mcp_safe_local_python_executor) - 基于HF Smolagents的`LocalPythonExecutor`的安全Python解释器。
* [misiektoja/kill-process-mcp](https://github.com/misiektoja/kill-process-mcp) 🐍 🏠 🍎 🪟 🐧 - 通过自然语言查询列出并终止操作系统进程。
* [MladenSU/cli-mcp-server](https://github.com/MladenSU/cli-mcp-server) 🐍 🏠 - 具备安全执行和可定制安全策略的命令行接口。
* [OthmaneBlial/term_mcp_deepseek](https://github.com/OthmaneBlial/term_mcp_deepseek) 🐍 🏠 - 一个类似DeepSeek的终端MCP服务器。
* [sonirico/mcp-shell](https://github.com/sonirico/mcp-shell) 🏎️ 🏠 🍎 🪟 🐧 - 将操作权限交给AI。MCP服务器用于在隔离环境（如Docker）中安全、可审计、按需运行shell命令。
* [tufantunc/ssh-mcp](https://github.com/tufantunc/ssh-mcp) 📇 🏠 🐧 🪟 - 通过Model Context Protocol公开SSH控制功能的MCP服务器，支持通过密码或SSH密钥认证安全执行远程shell命令。
* [tumf/mcp-shell-server](https://github.com/tumf/mcp-shell-server) - 实现Model Context Protocol（MCP）的安全shell命令执行服务器。
* [wonderwhy-er/DesktopCommanderMCP](https://github.com/wonderwhy-er/DesktopCommanderMCP) 📇 🏠 🍎 🪟 🐧 - 一个瑞士军刀式的工具，可以管理/执行程序，并读取/写入/搜索/编辑代码和文本文件。

### 💬 <a name="communication"></a>通信

与通信平台集成以进行消息管理和频道操作。使AI模型能够与团队通信工具交互。

* [AbdelStark/nostr-mcp](https://github.com/AbdelStark/nostr-mcp) ☁️ - 一个Nostr MCP服务器，允许与Nostr交互，支持发布笔记等操作。
* [adhikasp/mcp-twikit](https://github.com/adhikasp/mcp-twikit) 🐍 ☁️ - 与Twitter搜索和时间线交互。
* [agentmail-toolkit/mcp](https://github.com/agentmail-to/agentmail-toolkit/tree/main/mcp) 🐍 💬 - 一个MCP服务器，可以动态创建收件箱以发送、接收和处理邮件。我们不是为邮件设计的AI代理，而是为AI代理设计的邮件服务。
* [areweai/tsgram-mcp](https://github.com/areweai/tsgram-mcp) - TSgram：Telegram + Claude，支持在手机上访问本地工作区。随时读写代码，保持节奏！
* [arpitbatra123/mcp-googletasks](https://github.com/arpitbatra123/mcp-googletasks) 📇 ☁️ - 一个与Google Tasks API交互的MCP服务器。
* [Cactusinhand/mcp_server_notify](https://github.com/Cactusinhand/mcp_server_notify) 🐍 🏠 - 当代理任务完成时发送带音效的桌面通知的MCP服务器。
* [PhononX/cv-mcp-server](https://github.com/PhononX/cv-mcp-server) 🎖️ 📇 🏠 ☁️ 🍎 🪟 🐧 - 连接AI代理到[Carbon Voice](https://getcarbon.app)的MCP服务器。在[Carbon Voice](https://getcarbon.app)中创建、管理和交互语音消息、对话、私信、文件夹、语音备忘录、AI操作等。
* [carterlasalle/mac_messages_mcp](https://github.com/carterlasalle/mac_messages_mcp) 🏠 🍎 🚀 - 一个通过Model Context Protocol（MCP）安全连接iMessage数据库的MCP服务器，允许LLM查询和分析iMessage对话。包含强大的电话号码验证、附件处理、联系人管理、群聊处理，以及发送和接收消息的完整支持。
* [chaindead/telegram-mcp](https://github.com/chaindead/telegram-mcp) 🏎️ 🏠 - Telegram API集成，用于访问用户数据、管理对话（聊天、频道、群组）、检索消息和处理阅读状态。
* [chigwell/telegram-mcp](https://github.com/chigwell/telegram-mcp) 🐍 🏠 - Telegram API集成，用于访问用户数据、管理对话（聊天、频道、群组）、检索消息、发送消息和处理阅读状态。
* [Danielpeter-99/calcom-mcp](https://github.com/Danielpeter-99/calcom-mcp) 🐍 🏠 - 针对Calcom的MCP服务器。通过LLM管理事件类型、创建预订并访问Cal.com的调度数据。
* [elie222/inbox-zero](https://github.com/elie222/inbox-zero/tree/main/apps/mcp-server) 🐍 ☁️ - 针对Inbox Zero的MCP服务器。在Gmail基础上增加功能，如找出需要回复或跟进的邮件。
* [gitmotion/ntfy-me-mcp](https://github.com/gitmotion/ntfy-me-mcp) 📇 ☁️ 🏠 - 一个ntfy MCP服务器，用于从AI代理向自托管的ntfy服务器发送/获取ntfy通知 📤（支持安全令牌认证等 - 可与npx或docker一起使用！）
* [gotoolkits/wecombot](https://github.com/gotoolkits/mcp-wecombot-server.git) 🚀 ☁️ - 一个MCP服务器应用程序，向WeCom群机器人发送各种类型的消息。
* [hannesrudolph/imessage-query-fastmcp-mcp-server](https://github.com/hannesrudolph/imessage-query-fastmcp-mcp-server) 🐍 🏠 🍎 - 一个通过Model Context Protocol（MCP）提供对iMessage数据库安全访问的MCP服务器，使LLM能够查询和分析iMessage对话，包括电话号码验证和附件处理。
* [i-am-bee/acp-mcp](https://github.com/i-am-bee/acp-mcp) 🐍 💬 - 一个作为[ACP](https://agentcommunicationprotocol.dev)生态系统适配器的MCP服务器。无缝地将ACP代理暴露给MCP客户端，弥合两种协议之间的通信差距。
* [InditexTech/mcp-teams-server](https://github.com/InditexTech/mcp-teams-server) 🐍 ☁️ - 集成Microsoft Teams消息功能（读取、发帖、提及、列出成员和线程）的MCP服务器。
* [jagan-shanmugam/mattermost-mcp-host](https://github.com/jagan-shanmugam/mattermost-mcp-host) 🐍 🏠 - 一个MCP服务器和MCP主机，提供对Mattermost团队、频道和消息的访问。MCP主机作为Mattermost中的机器人集成，并可以配置访问MCP服务器。
* [jaipandya/producthunt-mcp-server](https://github.com/jaipandya/producthunt-mcp-server) 🐍 🏠 - 针对Product Hunt的MCP服务器。与热门帖子、评论、收藏集、用户等进行交互。
* [joinly-ai/joinly](https://github.com/joinly-ai/joinly) 🐍☁️ - 用于与基于浏览器的会议平台（Zoom、Teams、Google Meet）交互的MCP服务器。支持AI代理向在线会议中发送机器人，获取实时会议记录，进行语音播报以及在会议聊天中发送消息。
* [keturiosakys/bluesky-context-server](https://github.com/keturiosakys/bluesky-context-server) 📇 ☁️ - 用于Bluesky实例集成的查询与交互功能
* [khan2a/telephony-mcp-server](https://github.com/khan2a/telephony-mcp-server) 🐍 💬 - 用于自动化语音电话的MCP电话服务器，支持语音转文字和语音识别以总结通话内容。可发送和接收短信，检测语音信箱，并通过Vonage API集成实现高级电话流程。
* [korotovsky/slack-mcp-server](https://github.com/korotovsky/slack-mcp-server) 📇 ☁️ - 面向Slack工作区的最强大的MCP服务器。
* [lharries/whatsapp-mcp](https://github.com/lharries/whatsapp-mcp) 🐍 🏎️ - 用于搜索个人WhatsApp消息、联系人并向个人或群组发送消息的MCP服务器
* [line/line-bot-mcp-server](https://github.com/line/line-bot-mcp-server) 🎖 📇 ☁️ - 用于LINE官方账号集成的MCP服务器
* [OverQuotaAI/chatterboxio-mcp-server](https://github.com/OverQuotaAI/chatterboxio-mcp-server) 📇 ☁️ - ChatterBox.io的MCP服务器实现，支持AI代理向在线会议（Zoom、Google Meet）中发送机器人并获取会议记录和录像。
* [sawa-zen/vrchat-mcp](https://github.com/sawa-zen/vrchat-mcp) - 📇 🏠 这是一个用于与VRChat API交互的MCP服务器。您可以检索VRChat中的好友、世界、头像等信息。
* [softeria/ms-365-mcp-server](https://github.com/softeria/ms-365-mcp-server) 📇 ☁️ - 通过Graph API连接Microsoft Office和整个Microsoft 365套件的MCP服务器（包括Outlook、邮件、文件、Excel、日历等）。
* [saseq/discord-mcp](https://github.com/SaseQ/discord-mcp) ☕ 📇 🏠 💬 - 用于Discord集成的MCP服务器。使您的AI助手能够无缝地与Discord交互，并通过强大的自动化功能增强您的Discord体验。
* [teddyzxcv/ntfy-mcp](https://github.com/teddyzxcv/ntfy-mcp) - 使用ntfy通过手机发送通知的MCP服务器
* [userad/didlogic_mcp](https://github.com/UserAd/didlogic_mcp) 🐍 ☁️ - 针对[DIDLogic](https://didlogic.com)的MCP服务器。新增了管理SIP端点、号码和目标地址的功能。
* [YCloud-Developers/ycloud-whatsapp-mcp-server](https://github.com/YCloud-Developers/ycloud-whatsapp-mcp-server) 📇 🏠 - YCloud提供的WhatsApp Business平台MCP服务器。
* [zcaceres/gtasks-mcp](https://github.com/zcaceres/gtasks-mcp) 📇 ☁️ - 用于管理Google Tasks的MCP服务器
* [ztxtxwd/open-feishu-mcp-server](https://github.com/ztxtxwd/open-feishu-mcp-server) 📇 ☁️ 🏠 - 一个内置飞书OAuth认证的模型上下文协议（MCP）服务器，支持远程连接，并提供完整的飞书文档管理工具，包括区块创建、内容更新和高级功能。

### 👤 <a name="customer-data-platforms"></a>客户数据平台

提供对客户数据平台内部客户资料的访问

* [antv/mcp-server-chart](https://github.com/antvis/mcp-server-chart) 🎖️ 📇 ☁️ - 一个使用[AntV](https://github.com/antvis)生成可视化图表的模型上下文协议服务器。
* [hustcc/mcp-echarts](https://github.com/hustcc/mcp-echarts) 📇 🏠 - 使用[Apache ECharts](https://echarts.apache.org)动态生成可视化图表的AI MCP服务器。
* [hustcc/mcp-mermaid](https://github.com/hustcc/mcp-mermaid) 📇 🏠 - 使用AI MCP动态生成[mermaid](https://mermaid.js.org/)图表的服务器。
* [iaptic/mcp-server-iaptic](https://github.com/iaptic/mcp-server-iaptic) 🎖️ 📇 ☁️ - 连接[iaptic](https://www.iaptic.com)，可查询客户购买、交易数据和应用收入统计数据。
* [OpenDataMCP/OpenDataMCP](https://github.com/OpenDataMCP/OpenDataMCP) 🐍 ☁️ - 使用模型上下文协议将任何开放数据连接到任何LLM。
* [sergehuber/inoyu-mcp-unomi-server](https://github.com/sergehuber/inoyu-mcp-unomi-server) 📇 ☁️ - 用于访问和更新Apache Unomi CDP服务器上用户资料的MCP服务器。
* [tinybirdco/mcp-tinybird](https://github.com/tinybirdco/mcp-tinybird) 🐍 ☁️ - 用于从任何MCP客户端与Tinybird工作区交互的MCP服务器。

### 🗄️ <a name="databases"></a>数据库

安全的数据库访问，支持模式检查功能。支持使用可配置的安全控制（包括只读访问）进行查询和分析数据。

* [Aiven-Open/mcp-aiven](https://github.com/Aiven-Open/mcp-aiven) - 🐍 ☁️ 🎖️ - 浏览[Aiven项目](https://go.aiven.io/mcp-server)并与PostgreSQL®、Apache Kafka®、ClickHouse®和OpenSearch®服务交互
* [alexanderzuev/supabase-mcp-server](https://github.com/alexander-zuev/supabase-mcp-server) - 支持SQL查询执行和数据库探索工具的Supabase MCP服务器
* [aliyun/alibabacloud-tablestore-mcp-server](https://github.com/aliyun/alibabacloud-tablestore-mcp-server) ☕ 🐍 ☁️ - Tablestore的MCP服务，支持添加文档、基于向量和标量的文档语义搜索、支持RAG，并支持无服务器架构。
* [amineelkouhen/mcp-cockroachdb](https://github.com/amineelkouhen/mcp-cockroachdb) 🐍 ☁️ - 用于[CockroachDB](https://cockroachlabs.com)中数据的管理、监控和查询的模型上下文协议服务器。
* [benborla29/mcp-server-mysql](https://github.com/benborla/mcp-server-mysql) ☁️ 🏠 - 使用NodeJS实现的MySQL数据库集成，具有可配置的访问控制和模式检查功能。
* [bram2w/baserow](https://github.com/bram2w/baserow) - 支持表搜索、列表以及行的创建、读取、更新和删除功能的Baserow数据库集成。
* [c4pt0r/mcp-server-tidb](https://github.com/c4pt0r/mcp-server-tidb) 🐍 ☁️ - 支持模式检查和查询功能的TiDB数据库集成
* [Canner/wren-engine](https://github.com/Canner/wren-engine) 🐍 🦀 🏠 - 为模型上下文协议（MCP）客户端和AI代理提供的语义引擎
* [centralmind/gateway](https://github.com/centralmind/gateway) 🏎️ 🏠 🍎 🪟 - MCP和MCP SSE服务器，可根据数据库模式和数据自动生成API。支持PostgreSQL、Clickhouse、MySQL、Snowflake、BigQuery、Supabase
* [ChristianHinge/dicom-mcp](https://github.com/ChristianHinge/dicom-mcp) 🐍 ☁️ 🏠 - 用于查询、读取和移动PACS和其他符合DICOM标准系统中的医学影像和报告的DICOM集成
* [chroma-core/chroma-mcp](https://github.com/chroma-core/chroma-mcp) 🎖️ 🐍 ☁️ 🏠 - 用于访问本地和云端Chroma实例以实现检索功能的Chroma MCP服务器
* [ClickHouse/mcp-clickhouse](https://github.com/ClickHouse/mcp-clickhouse) 🐍 ☁️ - 支持模式检查和查询功能的ClickHouse数据库集成
* [confluentinc/mcp-confluent](https://github.com/confluentinc/mcp-confluent) 🐍 ☁️ - 用于与Confluent Kafka和Confluent Cloud REST API交互的Confluent集成
* [Couchbase-Ecosystem/mcp-server-couchbase](https://github.com/Couchbase-Ecosystem/mcp-server-couchbase) 🎖️ 🐍 ☁️ 🏠 - Couchbase MCP服务器，为Capella云和自托管集群提供统一访问，支持文档操作、SQL++查询和自然语言数据分析。
* [cr7258/elasticsearch-mcp-server](https://github.com/cr7258/elasticsearch-mcp-server) 🐍 🏠 - 提供Elasticsearch交互功能的MCP服务器实现
* [crystaldba/postgres-mcp](https://github.com/crystaldba/postgres-mcp) 🐍 🏠 - 集PostgreSQL开发与运维于一体的MCP服务器，提供性能分析、调优和健康检查工具
* [Dataring-engineering/mcp-server-trino](https://github.com/Dataring-engineering/mcp-server-trino) 🐍 ☁️ - 用于查询和访问Trino集群数据的Trino MCP服务器
* [davewind/mysql-mcp-server](https://github.com/dave-wind/mysql-mcp-server) 🏎️ 🏠 - 一个面向游标和n8n等工具的用户友好型只读MySQL MCP服务器
* [designcomputer/mysql\_mcp\_server](https://github.com/designcomputer/mysql_mcp_server) 🐍 🏠 - 提供可配置访问控制、模式检查和全面安全指南的MySQL数据库集成
* [domdomegg/airtable-mcp-server](https://github.com/domdomegg/airtable-mcp-server) 📇 🏠 - 支持模式检查、读写能力的Airtable数据库集成
* [edwinbernadus/nocodb-mcp-server](https://github.com/edwinbernadus/nocodb-mcp-server) 📇 ☁️ - 支持读写能力的Nocodb数据库集成
* [ergut/mcp-bigquery-server](https://github.com/ergut/mcp-bigquery-server) 📇 ☁️ - 支持Google BigQuery直接访问和查询功能的集成服务器实现
* [f4ww4z/mcp-mysql-server](https://github.com/f4ww4z/mcp-mysql-server) 📇 🏠 - 基于Node.js的MySQL数据库集成，提供安全的MySQL数据库操作
* [ferrants/memvid-mcp-server](https://github.com/ferrants/memvid-mcp-server) 🐍 🏠 - 您可以在本地运行的Python流式HTTP服务器，用于与[memvid](https://github.com/Olow304/memvid)存储和语义搜索交互。
* [fireproof-storage/mcp-database-server](https://github.com/fireproof-storage/mcp-database-server) 📇 ☁️ - 支持多用户同步的Fireproof账本数据库
* [freema/mcp-gsheets](https://github.com/freema/mcp-gsheets) 📇 ☁️ - 支持Google Sheets API集成的MCP服务器，具备全面的读取、写入、格式化和工作表管理功能。
* [FreePeak/db-mcp-server](https://github.com/FreePeak/db-mcp-server) 🏎️ 🏠 – 一个使用 Golang 构建的高性能多数据库 MCP 服务器，支持 MySQL 和 PostgreSQL（即将支持 NoSQL）。包含内置的查询执行、事务管理、模式探索、查询构建和性能分析工具，并集成了 Cursor，增强数据库工作流。
* [furey/mongodb-lens](https://github.com/furey/mongodb-lens) 📇 🏠 - MongoDB Lens：功能齐全的 MongoDB 数据库 MCP 服务器
* [gannonh/firebase-mcp](https://github.com/gannonh/firebase-mcp) 🔥 ⛅️ - 支持 Firebase 服务，包括 Auth、Firestore 和 Storage。
* [get-convex/convex-backend](https://stack.convex.dev/convex-mcp-server) 📇 ☁️ - Convex 数据库集成，用于查看表、函数以及运行一次性查询（[源代码](https://github.com/get-convex/convex-backend/blob/main/npm-packages/convex/src/cli/mcp.ts)）
* [googleapis/genai-toolbox](https://github.com/googleapis/genai-toolbox) 🏎️ ☁️ - 开源的 MCP 服务器，专注于提供易于使用、快速且安全的数据库工具。
* [GreptimeTeam/greptimedb-mcp-server](https://github.com/GreptimeTeam/greptimedb-mcp-server) 🐍 🏠 - 用于查询 GreptimeDB 的 MCP 服务器
* [hannesrudolph/sqlite-explorer-fastmcp-mcp-server](https://github.com/hannesrudolph/sqlite-explorer-fastmcp-mcp-server) 🐍 🏠 - 一个提供对 SQLite 数据库只读安全访问的 MCP 服务器，通过 Model Context Protocol (MCP) 实现。该服务器使用 FastMCP 框架构建，使 LLM 能够安全地探索和查询 SQLite 数据库，并具备内置的安全功能和查询验证。
* [henilcalagiya/google-sheets-mcp](https://github.com/henilcalagiya/google-sheets-mcp) 🐍 🏠 - 你的 AI 助手通往 Google Sheets 的网关！提供 25 个强大工具，通过 MCP 实现 Google Sheets 自动化。
* [hydrolix/mcp-hydrolix](https://github.com/hydrolix/mcp-hydrolix) 🎖️ 🐍 ☁️ - Hydrolix 时序数据湖集成，为基于 LLM 的工作流提供模式探索和查询能力。
* [idoru/influxdb-mcp-server](https://github.com/idoru/influxdb-mcp-server) 📇 ☁️ 🏠 - 运行针对 InfluxDB OSS API v2 的查询。
* [InfluxData/influxdb3\_mcp\_server](https://github.com/influxdata/influxdb3_mcp_server) 🎖️ 📇 🏠 ☁️ - InfluxDB 3 Core/Enterprise/Cloud Dedicated 的官方 MCP 服务器
* [isaacwasserman/mcp-snowflake-server](https://github.com/isaacwasserman/mcp-snowflake-server) 🐍 ☁️ - 实现读取和（可选）写入操作以及洞察追踪的 Snowflake 集成
* [iunera/druid-mcp-server](https://github.com/iunera/druid-mcp-server) ☕ ☁️ 🏠 - 针对 Apache Druid 的全面 MCP 服务器，提供丰富的工具、资源和提示，用于管理和分析 Druid 集群。
* [yannbrrd/simple\_snowflake\_mcp](https://github.com/YannBrrd/simple_snowflake_mcp) 🐍 ☁️ - 可在企业代理后运行的简单 Snowflake MCP 服务器，支持读取和写入（可选）操作
* [joshuarileydev/supabase-mcp-server](https://github.com/joshuarileydev/supabase) - Supabase MCP 服务器，用于管理和创建 Supabase 项目和组织
* [jovezhong/mcp-timeplus](https://github.com/jovezhong/mcp-timeplus) 🐍 ☁️ - Apache Kafka 和 Timeplus 的 MCP 服务器，能够列出 Kafka 主题、轮询 Kafka 消息、将 Kafka 数据本地保存，并通过 Timeplus 使用 SQL 查询流数据
* [jparkerweb/mcp-sqlite](https://github.com/jparkerweb/mcp-sqlite) 📇 🏠 - 提供全面 SQLite 数据库交互能力的 Model Context Protocol (MCP) 服务器
* [KashiwaByte/vikingdb-mcp-server](https://github.com/KashiwaByte/vikingdb-mcp-server) 🐍 ☁️ - VikingDB 集成，支持集合和索引介绍、向量存储与搜索功能
* [kiliczsh/mcp-mongo-server](https://github.com/kiliczsh/mcp-mongo-server) 📇 🏠 - 一个用于 MongoDB 的 Model Context Protocol 服务器
* [ktanaka101/mcp-server-duckdb](https://github.com/ktanaka101/mcp-server-duckdb) 🐍 🏠 - DuckDB 数据库集成，支持模式检查和查询功能
* [LucasHild/mcp-server-bigquery](https://github.com/LucasHild/mcp-server-bigquery) 🐍 ☁️ - BigQuery 数据库集成，支持模式检查和查询功能
* [memgraph/mcp-memgraph](https://github.com/memgraph/ai-toolkit/tree/main/integrations/mcp-memgraph) 🐍 🏠 - Memgraph MCP 服务器 - 包含一个用于运行查询和查看模式资源的工具
* [modelcontextprotocol/server-postgres](https://github.com/modelcontextprotocol/servers/tree/main/src/postgres) 📇 🏠 - PostgreSQL 数据库集成，支持模式检查和查询功能
* [modelcontextprotocol/server-sqlite](https://github.com/modelcontextprotocol/servers/tree/main/src/sqlite) 🐍 🏠 - SQLite 数据库操作，具备内置分析功能
* [neo4j-contrib/mcp-neo4j](https://github.com/neo4j-contrib/mcp-neo4j) 🐍 🏠 - 使用 Neo4j 的 Model Context Protocol（运行查询、知识图谱内存、管理 Neo4j Aura 实例）
* [neondatabase/mcp-server-neon](https://github.com/neondatabase/mcp-server-neon) 📇 ☁️ — 用于使用 Neon Serverless Postgres 创建和管理 Postgres 数据库的 MCP 服务器
* [niledatabase/nile-mcp-server](https://github.com/niledatabase/nile-mcp-server) Nile Postgres 平台的 MCP 服务器 - 使用 LLM 管理和查询 Postgres 数据库、租户、用户、认证
* [openlink/mcp-server-jdbc](https://github.com/OpenLinkSoftware/mcp-jdbc-server) 🐍 🏠 - 通过 Java 数据库连接 (JDBC) 协议实现通用数据库管理系统 (DBMS) 连接的 MCP 服务器
* [openlink/mcp-server-odbc](https://github.com/OpenLinkSoftware/mcp-odbc-server) 🐍 🏠 - 通过开放数据库连接 (ODBC) 协议实现通用数据库管理系统 (DBMS) 连接的 MCP 服务器
* [openlink/mcp-server-sqlalchemy](https://github.com/OpenLinkSoftware/mcp-sqlalchemy-server) 🐍 🏠 - 通过使用 Python ODBC (pyodbc) 的 SQLAlchemy 实现通用数据库管理系统 (DBMS) 连接的 MCP 服务器
* [pab1it0/adx-mcp-server](https://github.com/pab1it0/adx-mcp-server) 🐍 ☁️ - 查询和分析 Azure Data Explorer 数据库
* [pab1it0/prometheus-mcp-server](https://github.com/pab1it0/prometheus-mcp-server) 🐍 ☁️ - 查询和分析 Prometheus（开源监控系统）
* [prisma/mcp](https://github.com/prisma/mcp) 📇 ☁️ 🏠 - 使 LLM 能够管理 Prisma Postgres 数据库（例如启动新数据库并运行迁移或查询）。
* [qdrant/mcp-server-qdrant](https://github.com/qdrant/mcp-server-qdrant) 🐍 📇 ☁️ - Qdrant 的 MCP 服务器
* [QuantGeekDev/mongo-mcp](https://github.com/QuantGeekDev/mongo-mcp) 📇 🏠 - MongoDB 集成，使 LLM 能够直接与数据库交互
* [quarkiverse/mcp-server-jdbc](https://github.com/quarkiverse/quarkus-mcp-servers/tree/main/jdbc) ☕ 🏠 - 连接到任何支持 JDBC 的数据库并进行查询、插入、更新、删除等操作
* [rashidazarang/airtable-mcp](https://github.com/rashidazarang/airtable-mcp) 🐍 ☁️ - 直接将 AI 工具连接到 Airtable。使用自然语言查询、创建、更新和删除记录。功能包括基础管理、表操作、模式操作、记录过滤和数据迁移，通过标准的 MCP 接口实现。
* [redis/mcp-redis](https://github.com/redis/mcp-redis) 🐍 🏠 - Redis 官方 MCP 服务器，提供管理 Redis 数据和搜索的接口
* [runekaagaard/mcp-alchemy](https://github.com/runekaagaard/mcp-alchemy) 🐍 🏠 - 基于 SQLAlchemy 的通用数据库集成，支持 PostgreSQL、MySQL、MariaDB、SQLite、Oracle、MS SQL Server 等多种数据库。功能包括模式和关系检查，以及大规模数据分析能力。
* [s2-streamstore/s2-sdk-typescript](https://github.com/s2-streamstore/s2-sdk-typescript) 🎖️ 📇 ☁️ - S2.dev 无服务器流平台的官方 MCP 服务器
* [schemacrawler/SchemaCrawler-MCP-Server-Usage](https://github.com/schemacrawler/SchemaCrawler-MCP-Server-Usage) 🎖️ ☕ – 连接到任何关系型数据库，能够获取有效 SQL，并回答诸如某个列前缀代表什么等问题。
* [sirmews/mcp-pinecone](https://github.com/sirmews/mcp-pinecone) 🐍 ☁️ - Pinecone 集成，支持向量搜索功能
* [skysqlinc/skysql-mcp](https://github.com/skysqlinc/skysql-mcp) 🎖️ ☁️ - 无服务器 MariaDB 云数据库 MCP 服务器。提供用于启动、删除、执行 SQL 以及与数据库级 AI 代理协作进行精确文本转 SQL 和对话的工具。
* [supabase-community/supabase-mcp](https://github.com/supabase-community/supabase-mcp) 🎖️ 📇 ☁️ - 官方 Supabase MCP 服务器，将 AI 助手直接连接到你的 Supabase 项目，允许其执行管理表、获取配置和查询数据等任务。
* [TheRaLabs/legion-mcp](https://github.com/TheRaLabs/legion-mcp) 🐍 🏠 支持多种数据库类型的通用数据库 MCP 服务器，包括 PostgreSQL、Redshift、CockroachDB、MySQL、RDS MySQL、Microsoft SQL Server、BigQuery、Oracle DB 和 SQLite。
* [tradercjz/dolphindb-mcp-server](https://github.com/tradercjz/dolphindb-mcp-server) 🐍 ☁️ - DolphinDB 数据库集成，支持模式检查和查询功能
* [tuannvm/mcp-trino](https://github.com/tuannvm/mcp-trino) 🏎️ ☁️ - 用 Go 实现的 Trino Model Context Protocol (MCP) 服务器
* [VictoriaMetrics-Community/mcp-victorialogs](https://github.com/VictoriaMetrics-Community/mcp-victorialogs) 🎖️ 🏎️ 🏠 - 提供与 [VictoriaLogs 实例 API](https://docs.victoriametrics.com/victorialogs/querying/#http-api) 和 [文档](https://docs.victoriametrics.com/victorialogs/) 的全面集成，用于处理日志、调查和调试与 VictoriaLogs 实例相关的任务。
* [weaviate/mcp-server-weaviate](https://github.com/weaviate/mcp-server-weaviate) 🐍 📇 ☁️ - 用于连接你的 Weaviate 集合作为知识库，以及使用 Weaviate 作为聊天记忆存储的 MCP 服务器
* [wenb1n-dev/mysql\_mcp\_server\_pro](https://github.com/wenb1n-dev/mysql_mcp_server_pro)  🐍 🏠 - 支持SSE和STDIO；不仅限于MySQL的增删改查功能；还包含数据库异常分析能力；基于角色控制数据库权限；并方便开发者进行定制化扩展工具
* [xexr/mcp-libsql](https://github.com/Xexr/mcp-libsql) 📇 🏠 ☁️ - 适用于libSQL数据库的生产就绪型MCP服务器，具备全面的安全和管理工具。
* [XGenerationLab/xiyan\_mcp\_server](https://github.com/XGenerationLab/xiyan_mcp_server) 📇 ☁️ — 一个支持通过自然语言查询从数据库中获取数据的MCP服务器，由作为文本到SQL的LLM的XiyanSQL驱动。
* [xing5/mcp-google-sheets](https://github.com/xing5/mcp-google-sheets) 🐍 ☁️ - 用于与Google Sheets交互的模型上下文协议服务器。该服务器通过Google Sheets API提供创建、读取、更新和管理电子表格的工具。
* [ydb/ydb-mcp](https://github.com/ydb-platform/ydb-mcp) 🎖️ 🐍 ☁️ - 用于与[YDB](https://ydb.tech)数据库交互的MCP服务器
* [yincongcyincong/VictoriaMetrics-mcp-server](https://github.com/yincongcyincong/VictoriaMetrics-mcp-server) 🐍 🏠 - 用于与VictoriaMetrics数据库交互的MCP服务器。
* [Zhwt/go-mcp-mysql](https://github.com/Zhwt/go-mcp-mysql) 🏎️ 🏠 – 易于使用、零依赖的MySQL MCP服务器，使用Golang构建，支持可配置的只读模式和模式检查。
* [zilliztech/mcp-server-milvus](https://github.com/zilliztech/mcp-server-milvus) 🐍 🏠 ☁️ - Milvus / Zilliz的MCP服务器，使其能够与数据库进行交互。

### 📊 <a name="data-platforms"></a>数据平台

用于数据集成、转换和流水线编排的数据平台。

* [aywengo/kafka-schema-reg-mcp](https://github.com/aywengo/kafka-schema-reg-mcp) 🐍 ☁️ 🏠 🍎 🪟 🐧 - 具备48个工具的综合性Kafka Schema Registry MCP服务器，支持多注册表管理、模式迁移和企业级功能。
* [dbt-labs/dbt-mcp](https://github.com/dbt-labs/dbt-mcp) 🎖️ 🐍 🏠 ☁️ - [dbt（数据构建工具）](https://www.getdbt.com/product/what-is-dbt)的官方MCP服务器，提供与dbt Core/Cloud CLI的集成、项目元数据发现、模型信息以及语义层查询能力。
* [flowcore/mcp-flowcore-platform](https://github.com/flowcore-io/mcp-flowcore-platform) 🎖️ 📇 ☁️ 🏠 - 与Flowcore交互以执行操作、数据摄入，并分析、交叉参考和利用你的数据核心或公共数据核心中的任何数据，所有这些都可以通过人类语言实现。
* [JordiNei/mcp-databricks-server](https://github.com/JordiNeil/mcp-databricks-server) 🐍 ☁️ - 连接到Databricks API，允许LLM运行SQL查询、列出作业并获取作业状态。
* [jwaxman19/qlik-mcp](https://github.com/jwaxman19/qlik-mcp) 📇 ☁️ - 用于Qlik Cloud API的MCP服务器，支持查询应用程序、工作表，并从可视化中提取数据，具备全面的身份验证和速率限制支持。
* [keboola/keboola-mcp-server](https://github.com/keboola/keboola-mcp-server) 🐍 - 与Keboola Connection数据平台交互。该服务器提供用于列出和访问Keboola Storage API中数据的工具。
* [mattijsdp/dbt-docs-mcp](https://github.com/mattijsdp/dbt-docs-mcp) 🐍 🏠 - 为dbt-core（开源）用户提供的MCP服务器，因为官方dbt MCP仅支持dbt Cloud。支持项目元数据、模型和列级别的血缘关系以及dbt文档。
* [yashshingvi/databricks-genie-MCP](https://github.com/yashshingvi/databricks-genie-MCP) 🐍 ☁️ - 连接到Databricks Genie API的服务器，允许LLM提出自然语言问题、运行SQL查询并与Databricks对话代理交互。

### 💻 <a name="developer-tools"></a>开发工具

增强开发工作流程和环境管理的工具和集成。

* [21st-dev/Magic-MCP](https://github.com/21st-dev/magic-mcp) - 创建受21st.dev设计工程师启发的定制UI组件。
* [aashari/mcp-server-atlassian-bitbucket](https://github.com/aashari/mcp-server-atlassian-bitbucket) 📇 ☁️ - Atlassian Bitbucket Cloud集成。使AI系统能够实时与存储库、拉取请求、工作区和代码进行交互。
* [aashari/mcp-server-atlassian-confluence](https://github.com/aashari/mcp-server-atlassian-confluence) 📇 ☁️ - Atlassian Confluence Cloud集成。使AI系统能够实时与Confluence空间、页面和内容进行交互，并自动将ADF转换为Markdown。
* [aashari/mcp-server-atlassian-jira](https://github.com/aashari/mcp-server-atlassian-jira) 📇 ☁️ - Atlassian Jira Cloud集成。使AI系统能够实时与Jira项目、问题、评论和相关开发信息进行交互。
* [abrinsmead/mindpilot-mcp](https://github.com/abrinsmead/mindpilot-mcp) 📇 🏠 - 在本地托管的Web应用中将代码、架构和其他概念可视化为mermaid图表。只需要求代理“用图表向我展示这个”。
* [admica/FileScopeMCP](https://github.com/admica/FileScopeMCP) 🐍 📇 🦀 - 分析代码库，根据依赖关系识别重要文件。生成图表和重要性评分，帮助AI助手理解代码库。
* [akramIOT/MCP\_AI\_SOC\_Sher](https://github.com/akramIOT/MCP_AI_SOC_Sher)  🐍 ☁️ 📇 - 为Text2SQL AI代理执行动态AI SOC安全威胁分析的MCP服务器。
* [alimo7amed93/webhook-tester-mcp](https://github.com/alimo7amed93/webhook-tester-mcp)  🐍 ☁️ – 基于FastMCP的服务器，用于与webhook-test.com交互。允许用户使用Claude本地创建、检索和删除webhook。
* [ambar/simctl-mcp](https://github.com/ambar/simctl-mcp) 📇 🏠 🍎 一个用于iOS模拟器控制的MCP服务器实现。
* [api7/apisix-mcp](https://github.com/api7/apisix-mcp) 🎖️ 📇 🏠 支持查询和管理[Apache APISIX](https://github.com/apache/apisix)中所有资源的MCP服务器。
* [ArchAI-Labs/fastmcp-sonarqube-metrics](https://github.com/ArchAI-Labs/fastmcp-sonarqube-metrics) 🐍 🏠 🪟 🐧 🍎 - 一个模型上下文协议（MCP）服务器，提供用于检索SonarQube项目信息的工具集，如指标（当前和历史）、问题、健康状态。
* [artmann/package-registry-mcp](https://github.com/artmann/package-registry-mcp) 🏠 📇 🍎 🪟 🐧 - 用于搜索和获取NPM、Cargo、PyPi和NuGet包最新信息的MCP服务器。
* [augmnt/augments-mcp-server](https://github.com/augmnt/augments-mcp-server) 📇 ☁️ 🏠 - 通过智能、实时访问90多个框架文档源来转换Claude代码。生成遵循React、Next.js、Laravel、FastAPI、Tailwind CSS等当前最佳实践的准确、最新的代码。
* [automation-ai-labs/mcp-link](https://github.com/automation-ai-labs/mcp-link) 🏎️ 🏠 - 无缝集成任何API与AI代理（支持OpenAPI Schema）
* [axliupore/mcp-code-runner](https://github.com/axliupore/mcp-code-runner) 📇 🏠 - 用于通过Docker本地运行代码并支持多种编程语言的MCP服务器。
* [azer/react-analyzer-mcp](https://github.com/azer/react-analyzer-mcp) 📇 🏠 - 本地分析React代码，一次性为整个项目生成文档/llm.txt。
* [bucketco/bucket-javascript-sdk#cli](https://github.com/bucketco/bucket-javascript-sdk/tree/main/packages/cli#model-context-protocol) 🎖️ 📇 ☁️ - 使用[Bucket](https://bucket.co)直接在IDE的聊天中设置功能标志。
* [Chunkydotdev/bldbl-mcp](https://github.com/chunkydotdev/bldbl-mcp) 📇 ☁️ 🍎 🪟 🐧 - 面向Buildable AI驱动开发平台[bldbl.dev](https://bldbl.dev)的官方MCP服务器。使AI助手能够管理任务、跟踪进度、获取项目上下文，并与人类协作软件项目。
* [CircleCI/mcp-server-circleci](https://github.com/CircleCI-Public/mcp-server-circleci) 📇 ☁️ 使AI代理能够修复来自CircleCI的构建失败。
* [cjo4m06/mcp-shrimp-task-manager](https://github.com/cjo4m06/mcp-shrimp-task-manager) 📇 ☁️ 🏠 – 一个面向编程的任务管理系统，通过高级任务记忆、自我反思和依赖管理增强像Cursor AI这样的编码代理。[ShrimpTaskManager](https://cjo4m06.github.io/mcp-shrimp-task-manager)
* [ckanthony/gin-mcp](https://github.com/ckanthony/gin-mcp) 🏎️ ☁️ 📟 🪟 🐧 🍎 - 一个零配置的Go库，自动将现有的Gin Web框架API暴露为MCP工具。
* [ckreiling/mcp-server-docker](https://github.com/ckreiling/mcp-server-docker) 🐍 🏠 - 与Docker集成，管理容器、镜像、卷和网络。
* [CodeLogicIncEngineering/codelogic-mcp-server](https://github.com/CodeLogicIncEngineering/codelogic-mcp-server) 🎖️ 🐍 ☁️ 🍎 🪟 🐧 - CodeLogic的官方MCP服务器，提供对代码依赖分析、架构风险分析和影响评估工具的访问。
* [Comet-ML/Opik-MCP](https://github.com/comet-ml/opik-mcp) 🎖️ 📇 ☁️ 🏠 - 使用自然语言探索由Opik捕获的LLM可观测性、追踪和监控数据。
* [cqfn/aibolit-mcp-server](https://github.com/cqfn/aibolit-mcp-server) ☕ - 帮助你的AI代理识别重构热点；帮助AI理解如何“改进代码”
* [currents-dev/currents-mcp](https://github.com/currents-dev/currents-mcp) 🎖️ 📇 ☁️ 使AI代理能够修复报告到[Currents](https://currents.dev)的Playwright测试失败。
* [davidan90/time-node-mcp](https://github.com/davidan90/time-node-mcp) 📇 🏠 - 支持IANA时区、时区转换和夏令时处理的时区感知日期和时间操作。
* [davidlin2k/pox-mcp-server](https://github.com/davidlin2k/pox-mcp-server) 🐍 🏠 - 面向POX SDN控制器的MCP服务器，提供网络控制和管理功能。
* [delano/postman-mcp-server](https://github.com/delano/postman-mcp-server) 📇 ☁️ - 与 [Postman API](https://www.postman.com/postman/postman-public-workspace/) 进行交互
* [docker/hub-mcp](https://github.com/docker/hub-mcp) 🎖️ 📇 ☁️ 🏠 - 官方 MCP 服务器，用于与 Docker Hub 交互，提供仓库访问、Hub 搜索和 Docker Hardened Images
* [endorhq/cli](https://github.com/endorhq/cli) 📇 ☁️ 🏠 🪟 🐧 🍎 - Endor 让您的 AI 代理在隔离的沙盒中运行 MariaDB、Postgres、Redis、Memcached、Alpine 或 Valkey 等服务。获取预配置的应用程序，启动时间不到 5 秒。
* [flipt-io/mcp-server-flipt](https://github.com/flipt-io/mcp-server-flipt) 📇 🏠 - 允许 AI 助手与 [Flipt](https://flipt.io) 中的特性标志进行交互。
* [freema/mcp-design-system-extractor](https://github.com/freema/mcp-design-system-extractor) 📇 🏠 - 从 Storybook 设计系统中提取组件信息。为 AI 驱动的设计系统分析提供 HTML、样式、属性、依赖项、主题令牌和组件元数据。
* [gitkraken/gk-cli](https://github.com/gitkraken/gk-cli) 🎖️ 🏎️ 🏠 ☁️ 🍎 🪟 🐧 - 用于与 GitKraken API 交互的 CLI。包含通过 `gk mcp` 提供的 MCP 服务器，不仅封装了 GitKraken API，还支持 Jira、GitHub、GitLab 等。可与本地工具和远程服务一起使用。
* [GLips/Figma-Context-MCP](https://github.com/GLips/Figma-Context-MCP) 📇 🏠 - 为编码代理提供直接访问 Figma 数据的能力，帮助它们实现一次性设计实现。
* [gofireflyio/firefly-mcp](https://github.com/gofireflyio/firefly-mcp) 🎖️ 📇 ☁️ - 通过 [Firefly](https://firefly.ai) 整合、发现、管理并代码化云资源。
* [gorosun/unified-diff-mcp](https://github.com/gorosun/unified-diff-mcp) 📇 🏠 - 生成并可视化统一差分比较，输出美观的 HTML/PNG，支持并排和逐行视图，用于文件系统预演集成。
* [Govcraft/rust-docs-mcp-server](https://github.com/Govcraft/rust-docs-mcp-server) 🦀 🏠 - 通过 MCP 工具为特定 Rust crate 提供最新的文档上下文给 LLM，使用语义搜索（嵌入）和 LLM 摘要。
* [PromptExecution/cratedocs-mcp](https://github.com/promptexecution/cratedocs-mcp) 🦀 🏠 - 从 AST 中输出短格式的 Rust crate 派生特性、接口等（使用与 rust-analyzer 相同的 API），输出限制（令牌估算）及使用正则剥离的 crate 文档。
* [HainanZhao/mcp-gitlab-jira](https://github.com/HainanZhao/mcp-gitlab-jira) 📇 ☁️ 🏠 - GitLab 和 Jira 的统一 MCP 服务器：使用 AI 代理管理项目、合并请求、文件、发布和工单。
* [haris-musa/excel-mcp-server](https://github.com/haris-musa/excel-mcp-server) 🐍 🏠 - Excel 操作服务器，提供工作簿创建、数据操作、格式化和高级功能（图表、数据透视表、公式）。
* [higress-group/higress-ops-mcp-server](https://github.com/higress-group/higress-ops-mcp-server) 🐍 🏠 - 提供全面工具用于管理 [Higress](https://github.com/alibaba/higress) 网关配置和操作的 MCP 服务器。
* [hijaz/postmancer](https://github.com/hijaz/postmancer) 📇 🏠 - 一个 MCP 服务器，通过让 LLM 维护和使用 API 集合来替代 Postman/Insomnia 等 REST 客户端。
* [hloiseaufcms/mcp-gopls](https://github.com/hloiseaufcms/mcp-gopls) 🏎️ 🏠 - 用于与 [Go 的语言服务器协议 (gopls)](https://github.com/golang/tools/tree/master/gopls) 交互的 MCP 服务器，从而受益于高级 Go 代码分析功能。
* [hungthai1401/bruno-mcp](https://github.com/hungthai1401/bruno-mcp) 📇 🏠 - 用于与 [Bruno API 客户端](https://www.usebruno.com/) 交互的 MCP 服务器。
* [hyperb1iss/droidmind](https://github.com/hyperb1iss/droidmind) 🐍 🏠 - 通过 MCP 用 AI 控制 Android 设备，实现设备控制、调试、系统分析和 UI 自动化，并具备全面的安全框架。
* [Hypersequent/qasphere-mcp](https://github.com/Hypersequent/qasphere-mcp) 🎖️ 📇 ☁️ - 与 [QA Sphere](https://qasphere.com/) 测试管理系统集成，使 LLM 可以从 AI 驱动的 IDE 中直接发现、汇总并与测试用例交互。
* [idosal/git-mcp](https://github.com/idosal/git-mcp) 📇 ☁️ - [gitmcp.io](https://gitmcp.io/) 是一个通用的远程 MCP 服务器，用于连接任何 [GitHub](https://www.github.com) 仓库或项目以获取文档。
* [IlyaGulya/gradle-mcp-server](https://github.com/IlyaGulya/gradle-mcp-server) 🏠 - 使用 Gradle Tooling API 进行项目检查、任务执行和带每项测试结果报告的测试运行的 Gradle 集成。
* [promptexecution/just-mcp](https://github.com/promptexecution/just-mcp) 🦀 🏠 - Justfile 集成，使 LLM 能够安全且轻松地执行任何 CLI 或脚本命令，并支持环境变量和全面测试。
* [InditexTech/mcp-server-simulator-ios-idb](https://github.com/InditexTech/mcp-server-simulator-ios-idb) 📇 🏠 🍎 - 一个 Model Context Protocol (MCP) 服务器，使 LLM 能够通过自然语言命令与 iOS 模拟器（iPhone、iPad 等）交互。
* [InhiblabCore/mcp-image-compression](https://github.com/InhiblabCore/mcp-image-compression) 🐍 🏠 - 用于本地压缩各种图像格式的 MCP 服务器。
* [Inspizzz/jetbrains-datalore-mcp](https://github.com/inspizzz/jetbrains-datalore-mcp) 🐍 ☁️ - 用于与 Jetbrains Datalore 平台的云部署交互的 MCP 服务器。完全集成了 Datalore API（运行、交互式运行、获取运行数据、获取文件）。
* [ios-simulator-mcp](https://github.com/joshuayoes/ios-simulator-mcp) 📇 🏠 🍎 - 一个用于与 iOS 模拟器交互的 Model Context Protocol (MCP) 服务器。该服务器允许您通过获取模拟器信息、控制 UI 交互和检查 UI 元素来与 iOS 模拟器交互。
* [isaacphi/mcp-language-server](https://github.com/isaacphi/mcp-language-server) 🏎️ 🏠 - MCP 语言服务器帮助启用 MCP 的客户端更轻松地浏览代码库，提供诸如获取定义、引用、重命名和诊断等语义工具。
* [IvanAmador/vercel-ai-docs-mcp](https://github.com/IvanAmador/vercel-ai-docs-mcp) 📇 🏠 - 一个 Model Context Protocol (MCP) 服务器，为 Vercel AI SDK 文档提供 AI 驱动的搜索和查询功能。
* [j4c0bs/mcp-server-sql-analyzer](https://github.com/j4c0bs/mcp-server-sql-analyzer) 🐍 - 提供 SQL 分析、语法检查和方言转换的 MCP 服务器，使用 [SQLGlot](https://github.com/tobymao/sqlglot)。
* [janreges/ai-distiller-mcp](https://github.com/janreges/ai-distiller) 🏎️ 🏠 - 将大型代码库中的关键代码结构提取为 AI 可消化的格式，帮助 AI 代理在首次尝试时正确使用现有 API 编写代码。
* [jasonjmcghee/claude-debugs-for-you](https://github.com/jasonjmcghee/claude-debugs-for-you) 📇 🏠 - 一个 MCP 服务器和 VS Code 扩展，通过断点和表达式求值实现（语言无关）自动调试。
* [jetbrains/mcpProxy](https://github.com/JetBrains/mcpProxy) 🎖️ 📇 🏠 - 连接到 JetBrains IDE
* [Jktfe/serveMyAPI](https://github.com/Jktfe/serveMyAPI) 📇 🏠 🍎 - 一个个人 MCP（模型上下文协议）服务器，用于使用 macOS Keychain 跨项目安全存储和访问 API 密钥。
* [jordandalton/restcsv-mcp-server](https://github.com/JordanDalton/RestCsvMcpServer) 📇 ☁️ - 用于 CSV 文件的 MCP 服务器。
* [joshuarileydev/app-store-connect-mcp-server](https://github.com/JoshuaRileyDev/app-store-connect-mcp-server) 📇 🏠 - 用于与 iOS 开发者 App Store Connect API 通信的 MCP 服务器。
* [joshuarileydev/simulator-mcp-server](https://github.com/JoshuaRileyDev/simulator-mcp-server) 📇 🏠 - 用于控制 iOS 模拟器的 MCP 服务器。
* [Jpisnice/shadcn-ui-mcp-server](https://github.com/Jpisnice/shadcn-ui-mcp-server) 📇 🏠 - 为 AI 助手提供无缝访问 shadcn/ui v4 组件、区块、演示和元数据的 MCP 服务器。
* [jsdelivr/globalping-mcp-server](https://github.com/jsdelivr/globalping-mcp-server) 🎖️ 📇 ☁️ - Globalping MCP 服务器为用户和 LLM 提供从全球数千个位置运行 ping、traceroute、mtr、HTTP 和 DNS 解析等网络工具的访问权限。
* [kadykov/mcp-openapi-schema-explorer](https://github.com/kadykov/mcp-openapi-schema-explorer) 📇 ☁️ 🏠 - 通过 MCP 资源实现对 OpenAPI/Swagger 规范的令牌高效访问。
* [lamemind/mcp-server-multiverse](https://github.com/lamemind/mcp-server-multiverse) 📇 🏠 🛠️ - 一个中间件服务器，允许相同 MCP 服务器的多个独立实例共存，具有唯一的命名空间和配置。
* [langfuse/mcp-server-langfuse](https://github.com/langfuse/mcp-server-langfuse) 🐍 🏠 - 用于访问和管理使用 [Langfuse](https://langfuse.com/docs/prompts/get-started) 提示管理创建的 LLM 应用程序提示的 MCP 服务器。
* [lpigeon/ros-mcp-server](https://github.com/lpigeon/ros-mcp-server) 🐍 🏠 🍎 🪟 🐧 - ROS MCP 服务器通过将用户发出的自然语言命令转换为 ROS 或 ROS2 控制命令来支持机器人控制。
* [lpigeon/unitree-go2-mcp-server](https://github.com/lpigeon/unitree-go2-mcp-server) 🐍 🏠 🐧 - Unitree Go2 MCP 服务器是基于 MCP 构建的服务器，允许用户通过 LLM 解释的自然语言命令控制 Unitree Go2 机器人。
* [ukkit/memcord](https://github.com/ukkit/memcord) 🐍 🏠 🐧 🍎 - 一个 MCP 服务器，保持您的聊天历史有条理且可搜索——具有 AI 驱动的摘要、安全记忆和完全控制权。
* [mobile-next/mobile-mcp](https://github.com/mobile-next/mobile-mcp) 📇 🏠 🐧 🍎 - Android/iOS 应用和设备自动化的 MCP 服务器，支持开发和应用抓取。支持模拟器/模拟设备/物理设备如 iPhone、Google Pixel、三星设备。
* [mrexodia/user-feedback-mcp](https://github.com/mrexodia/user-feedback-mcp) 🐍 🏠 - 一个简单的 MCP 服务器，用于在 Cline 和 Cursor 等工具中启用人工参与的工作流。
* [narumiruna/gitingest-mcp](https://github.com/narumiruna/gitingest-mcp) 🐍 🏠 - 一个使用 [gitingest](https://github.com/cyclotruc/gitingest) 将任意 Git 仓库转换为代码库的简单文本摘要的 MCP 服务器。
* [neilberkman/editorconfig\_mcp](https://github.com/neilberkman/editorconfig_mcp) 📇 🏠 - 使用 `.editorconfig` 规则格式化文件，作为主动格式看门人，确保 AI 生成的代码从一开始就符合项目特定的格式标准。
* [OctoMind-dev/octomind-mcp](https://github.com/OctoMind-dev/octomind-mcp) 📇 ☁️ - 让你偏好的 AI 代理从代码库或其他数据源（如 Jira、Slack 或 TestRail）创建并运行完全托管的 [Octomind](https://www.octomind.dev/) 端到端测试。
* [OpenZeppelin/contracts-wizard](https://github.com/OpenZeppelin/contracts-wizard/tree/master/packages/mcp) - 一个模型上下文协议（MCP）服务器，允许 AI 代理根据 [OpenZeppelin Wizard 模板](https://wizard.openzeppelin.com/) 生成多种语言的安全智能合约。
* [bgauryy/octocode-mcp](https://github.com/bgauryy/octocode-mcp) ☁️ 📇 🍎 🪟 🐧 - 人工智能驱动的开发者助手，实现实时跨 GitHub 和 NPM 领域的高级研究、分析和发现。
* [opslevel/opslevel-mcp](https://github.com/opslevel/opslevel-mcp) 🎖️ 🏎️ ☁️ 🪟 🍎 🐧 - [OpsLevel](https://www.opslevel.com) 的官方 MCP 服务器。
* [picahq/mcp](https://github.com/picahq/mcp) 🎖️ 🦀 📇 ☁️ - 一个适用于所有集成的 MCP —— 由 [Pica](https://www.picaos.com) 提供支持，这是一个智能协作代理的基础设施。
* [posthog/mcp](https://github.com/posthog/mcp) 🎖️ 📇 ☁️ - 用于与 PostHog 分析、功能标记、错误追踪等交互的 MCP 服务器。
* [Pratyay/mac-monitor-mcp](https://github.com/Pratyay/mac-monitor-mcp) 🐍 🏠 🍎 - 识别 macOS 上资源密集型进程并提供性能改进建议。
* [pskill9/website-downloader](https://github.com/pskill9/website-downloader) 🗄️ 🚀 - 该 MCP 服务器提供一个使用 wget 下载整个网站的工具。它保留网站结构并转换链接以在本地工作。
* [qainsights/jmeter-mcp-server](https://github.com/QAInsights/jmeter-mcp-server) 🐍 🏠 - 用于性能测试的 JMeter MCP 服务器。
* [qainsights/k6-mcp-server](https://github.com/QAInsights/k6-mcp-server) 🐍 🏠 - 用于性能测试的 Grafana k6 MCP 服务器。
* [qainsights/locust-mcp-server](https://github.com/QAInsights/locust-mcp-server) 🐍 🏠 - 用于性能测试的 Locust MCP 服务器。
* [QuantGeekDev/docker-mcp](https://github.com/QuantGeekDev/docker-mcp) 🏎️ 🏠 - 通过 MCP 进行 Docker 容器管理和操作。
* [r-huijts/xcode-mcp-server](https://github.com/r-huijts/xcode-mcp-server) 📇 🏠 🍎 - Xcode 集成，用于项目管理、文件操作和构建自动化。
* [ReAPI-com/mcp-openapi](https://github.com/ReAPI-com/mcp-openapi) 📇 🏠 - MCP 服务器让 LLM 了解你的 OpenAPI 规范，用于发现、解释和生成代码/模拟数据。
* [Rootly-AI-Labs/Rootly-MCP-server](https://github.com/Rootly-AI-Labs/Rootly-MCP-server) 🎖️ 🐍 ☁️ 🍎 - 面向事件管理平台 [Rootly](https://rootly.com/) 的 MCP 服务器。
* [ryan0204/github-repo-mcp](https://github.com/Ryan0204/github-repo-mcp) 📇 ☁️ 🪟 🐧 🍎 - GitHub 仓库 MCP，允许你的 AI 助手浏览 GitHub 仓库、探索目录并查看文件内容。
* [sammcj/mcp-package-version](https://github.com/sammcj/mcp-package-version) 📇 🏠 - 一个 MCP 服务器，帮助 LLM 在编写代码时建议最新的稳定包版本。
* [sapientpants/sonarqube-mcp-server](https://github.com/sapientpants/sonarqube-mcp-server) 🦀 ☁️ 🏠 - 一个集成 SonarQube 的模型上下文协议 (MCP) 服务器，为 AI 助手提供代码质量指标、问题和质量门状态的访问。
* [SDGLBL/mcp-claude-code](https://github.com/SDGLBL/mcp-claude-code) 🐍 🏠 - 使用 MCP 实现 Claude Code 功能，使 AI 具备代码理解、修改和项目分析能力，并提供全面的工具支持。
* [sequa-ai/sequa-mcp](https://github.com/sequa-ai/sequa-mcp) 📇 ☁️ 🐧 🍎 🪟 - 停止为 Copilot 和 Cursor 拼接上下文。使用 Sequa MCP，你的 AI 工具开箱即知你的整个代码库和文档。
* [snaggle-ai/openapi-mcp-server](https://github.com/snaggle-ai/openapi-mcp-server) 🏎️ 🏠 - 使用 Open API 规范（v3）连接任何 HTTP/REST API 服务器。
* [spacecode-ai/SpaceBridge-MCP](https://github.com/spacecode-ai/SpaceBridge-MCP) 🐍 🏠 🍎 🐧 - 通过自动跟踪问题，在 vibe 编码中引入结构并保留上下文。
* [stass/lldb-mcp](https://github.com/stass/lldb-mcp) 🐍 🏠 🐧 🍎 - 用于 LLDB 的 MCP 服务器，支持 AI 进行二进制和核心文件分析、调试、反汇编。
* [TencentEdgeOne/edgeone-pages-mcp](https://github.com/TencentEdgeOne/edgeone-pages-mcp) 📇 ☁️ - 用于将 HTML 内容部署到 EdgeOne Pages 并获取公开可访问 URL 的 MCP 服务。
* [tgeselle/bugsnag-mcp](https://github.com/tgeselle/bugsnag-mcp) 📇 ☁️ - 与 [Bugsnag](https://www.bugsnag.com/) 交互的 MCP 服务器。
* [Tommertom/awesome-ionic-mcp](https://github.com/Tommertom/awesome-ionic-mcp) 📇 🏠 - 通过 MCP 实现的 Ionic 编码助手 – 使用 React/Angular/Vue 甚至 Vanilla JS 构建出色的移动应用！
* [tipdotmd/tip-md-x402-mcp-server](https://github.com/tipdotmd/tip-md-x402-mcp-server) 📇 ☁️ - 通过 AI 接口使用 x402 支付协议和 CDP 钱包进行加密货币打赏的 MCP 服务器。
* [tumf/mcp-text-editor](https://github.com/tumf/mcp-text-editor) 🐍 🏠 - 面向行的文本文件编辑器。优化了 LLM 工具的高效部分文件访问以最小化 token 使用。
* [utensils/mcp-nixos](https://github.com/utensils/mcp-nixos) 🐍 🏠 - 提供关于 NixOS 包、系统选项、Home Manager 配置和 nix-darwin macOS 设置的准确信息的 MCP 服务器，以防止 AI 幻觉。
* [vasayxtx/mcp-prompt-engine](https://github.com/vasayxtx/mcp-prompt-engine) 🏎️ 🏠 🪟️ 🐧 🍎 - 使用优雅且强大的文本模板引擎管理和服务动态提示模板的 MCP 服务器。
* [vivekvells/mcp-pandoc](https://github.com/vivekVells/mcp-pandoc) 🗄️ 🚀 - 使用 Pandoc 实现无缝文档格式转换的 MCP 服务器，支持 Markdown、HTML、PDF、DOCX（.docx）、CSV 等格式。
* [VSCode Devtools](https://github.com/biegehydra/BifrostMCP) 📇 - 连接到 VSCode IDE 并使用语义工具如 `find_usages`。
* [WiseVision/mcp\_server\_ros\_2](https://github.com/wise-vision/mcp_server_ros_2) 🐍 🤖 - 支持 ROS2 的 MCP 服务器，用于 AI 驱动的机器人应用和服务。
* [Wooonster/hocr\_mcp\_server](https://github.com/Wooonster/hocr_mcp_server) 🐍 🏠 – 基于 FastAPI 的 FastMCP 服务器，带 Vue 前端，将上传的图像通过 MCP 发送到 VLM，快速提取手写数学公式为干净的 LaTeX 代码。
* [xcodebuild](https://github.com/ShenghaiWang/xcodebuild) 🍎 构建 iOS Xcode 工作区/项目并将错误反馈给 LLM。
* [XixianLiang/HarmonyOS-mcp-server](https://github.com/XixianLiang/HarmonyOS-mcp-server) 🐍 🏠 - 通过 MCP 使用 AI 控制 HarmonyOS-next 设备。支持设备控制和 UI 自动化。
* [xzq.xu/jvm-mcp-server](https://github.com/xzq-xu/jvm-mcp-server) 📇 🏠  - 基于 JVM 的 MCP（模型上下文协议）服务器实现项目。
* [yangkyeongmo@/mcp-server-apache-airflow](https://github.com/yangkyeongmo/mcp-server-apache-airflow) 🐍 🏠 - 使用官方客户端连接到 [Apache Airflow](https://airflow.apache.org/) 的 MCP 服务器。
* [yikakia/godoc-mcp-server](https://github.com/yikakia/godoc-mcp-server) 🏎️ ☁️ 🪟 🐧 🍎 - 查询 pkg.go.dev 上的 Go 包信息。
* [yiwenlu66/PiloTY](https://github.com/yiwenlu66/PiloTY) 🐍 🏠 - 面向 PTY 操作的 AI 飞行员，使代理能够控制具有有状态会话、SSH 连接和后台进程管理的交互式终端。
* [YuChenSSR/mindmap-mcp-server](https://github.com/YuChenSSR/mindmap-mcp-server) 🐍 🏠 - 用于生成精美交互式思维导图的模型上下文协议 (MCP) 服务器。
* [YuChenSSR/multi-ai-advisor](https://github.com/YuChenSSR/multi-ai-advisor-mcp) 📇 🏠 - 一个模型上下文协议 (MCP) 服务器，查询多个 Ollama 模型并组合其响应，为单一问题提供多样化的 AI 视角。
* [Yutarop/ros-mcp](https://github.com/Yutarop/ros-mcp) 🐍 🏠 🐧 - 支持 ROS2 主题、服务和动作通信，并通过自然语言控制机器人的 MCP 服务器。
* [yWorks/mcp-typescribe](https://github.com/yWorks/mcp-typescribe) 📇 🏠 - 高效地向代理提供 Typescript API 信息的 MCP 服务器，使其能够处理未训练的 API。
* [zaizaizhao/mcp-swagger-server](https://github.com/zaizaizhao/mcp-swagger-server) 📇 ☁️ 🏠 - 将 OpenAPI/Swagger 规范转换为 MCP 格式的模型上下文协议 (MCP) 服务器，使 AI 助手能够通过标准化协议与 REST API 交互。
* [zcaceres/fetch-mcp](https://github.com/zcaceres/fetch-mcp) 📇 🏠 - 灵活获取 JSON、文本和 HTML 数据的 MCP 服务器。
* [zenml-io/mcp-zenml](https://github.com/zenml-io/mcp-zenml) 🐍 🏠 ☁️ - 用于连接你的 [ZenML](https://www.zenml.io) MLOps 和 LLMOps 流水线的 MCP 服务器。
* [zillow/auto-mobile](https://github.com/zillow/auto-mobile) 📇 🏠 🐧  - 用于 Android 自动化开发流程和测试的 MCP 服务器工具套件

### 🔒 <a name="delivery"></a>配送

* [https://github.com/jordandalton/doordash-mcp-server](https://github.com/JordanDalton/DoorDash-MCP-Server) 🐍 –  DoorDash 配送（非官方）

### 🧮 <a name="data-science-tools"></a>数据科学工具

旨在简化数据探索、分析并增强数据科学工作流程的集成和工具。

* [arrismo/kaggle-mcp](https://github.com/arrismo/kaggle-mcp) 🐍 ☁️ - 连接到 Kaggle，能够下载和分析数据集。
* [ChronulusAI/chronulus-mcp](https://github.com/ChronulusAI/chronulus-mcp) 🐍 ☁️ - 使用 Chronulus AI 的预测和预测代理来预测任何事物。
* [DataEval/dingo](https://github.com/DataEval/dingo) 🎖️ 🐍 🏠 🍎 🪟 🐧 - 用于 Dingo 的 MCP 服务器：一个全面的数据质量评估工具。服务器支持与 Dingo 的基于规则和基于 LLM 的评估功能及规则&提示列表的交互。
* [datalayer/jupyter-mcp-server](https://github.com/datalayer/jupyter-mcp-server) 🐍 🏠 - Jupyter 的模型上下文协议 (MCP) 服务器。
* [growthbook/growthbook-mcp](https://github.com/growthbook/growthbook-mcp) 🎖️ 📇 🏠 🪟 🐧 🍎 — 用于创建和交互 GrowthBook 功能标志和实验的工具。
* [HumanSignal/label-studio-mcp-server](https://github.com/HumanSignal/label-studio-mcp-server) 🎖️ 🐍 ☁️ 🪟 🐧 🍎 - 创建、管理和自动化 Label Studio 项目、任务和预测，用于数据标注工作流程。
* [jjsantos01/jupyter-notebook-mcp](https://github.com/jjsantos01/jupyter-notebook-mcp) 🐍 🏠 - 将 Jupyter Notebook 连接到 Claude AI，使 Claude 能够直接交互和控制 Jupyter Notebooks。
* [kdqed/zaturn](https://github.com/kdqed/zaturn) 🐍 🏠 🪟 🐧 🍎 - 链接多个数据源（SQL、CSV、Parquet 等），并让 AI 分析数据以获得洞察和可视化。
* [mckinsey/vizro-mcp](https://github.com/mckinsey/vizro/tree/main/vizro-mcp) 🎖️ 🐍 🏠 - 用于创建经过验证且易于维护的数据图表和仪表板的工具和模板。
* [optuna/optuna-mcp](https://github.com/optuna/optuna-mcp) 🎖️ 🐍 🏠 🐧 🍎 - 官方 MCP 服务器，可无缝编排超参数搜索和其他优化任务，通过 [Optuna](https://optuna.org/)。
* [reading-plus-ai/mcp-server-data-exploration](https://github.com/reading-plus-ai/mcp-server-data-exploration) 🐍 ☁️ - 支持对基于 .csv 的数据集进行自主数据探索，提供智能洞察，所需工作量极少。
* [subelsky/bundler_mcp](https://github.com/subelsky/bundler_mcp) 💎 🏠 - 使代理能够查询 Ruby 项目 `Gemfile` 中依赖项的本地信息。
* [Bright-L01/networkx-mcp-server](https://github.com/Bright-L01/networkx-mcp-server) 🐍 🏠 - Model Context Protocol 的首个 NetworkX 集成，支持在 AI 对话中直接进行图分析和可视化。支持 13 种操作，包括中心性算法、社区检测、PageRank 和图可视化。
* [zcaceres/markdownify-mcp](https://github.com/zcaceres/markdownify-mcp) 📇 🏠 - 一个将几乎任何文件或网页内容转换为 Markdown 的 MCP 服务器

### 📟 <a name="embedded-system"></a>嵌入式系统

提供访问嵌入式设备工作的文档和快捷方式。

* [horw/esp-mcp](https://github.com/horw/esp-mcp) 📟 - 使用 ESP-IDF 解决 ESP32 系列芯片构建问题的工作流程。
* [kukapay/modbus-mcp](https://github.com/kukapay/modbus-mcp) 🐍 📟 - 一个标准化和上下文化工业 Modbus 数据的 MCP 服务器。
* [kukapay/opcua-mcp](https://github.com/kukapay/opcua-mcp) 🐍 📟 - 一个连接到启用 OPC UA 的工业系统的 MCP 服务器。
* [stack-chan/stack-chan](https://github.com/stack-chan/stack-chan) 📇 📟 - 一个由 JavaScript 驱动的 M5Stack 嵌入式超级可爱机器人，具有 MCP 服务器功能，支持 AI 控制的交互和情感。
* [yoelbassin/gnuradioMCP](https://github.com/yoelbassin/gnuradioMCP) 🐍 📟 🏠 - 一个 GNU Radio 的 MCP 服务器，使 LLMs 能够自主创建和修改 RF `.grc` 流图。

### 📂 <a name="file-systems"></a>文件系统

提供对本地文件系统的直接访问，具有可配置的权限。允许 AI 模型在指定目录内读取、写入和管理文件。

* [8b-is/smart-tree](https://github.com/8b-is/smart-tree) 🦀 🏠 🍎 🪟 🐧 - AI 原生目录可视化，具有语义分析、超压缩格式供 AI 使用，以及 10 倍的 token 减少。支持量子语义模式和智能文件分类。
* [cyberchitta/llm-context.py](https://github.com/cyberchitta/llm-context.py) 🐍 🏠 - 通过 MCP 或剪贴板与 LLMs 共享代码上下文
* [exoticknight/mcp-file-merger](https://github.com/exoticknight/mcp-file-merger) 🏎️ 🏠 - 文件合并工具，适用于 AI 聊天长度限制。
* [filesystem@quarkiverse/quarkus-mcp-servers](https://github.com/quarkiverse/quarkus-mcp-servers/tree/main/filesystem) ☕ 🏠 - 一个使用 Java 和 Quarkus 实现的文件系统，支持浏览和编辑文件。可作为 jar 或原生镜像使用。
* [hmk/box-mcp-server](https://github.com/hmk/box-mcp-server) 📇 ☁️ - Box 集成，用于列出、读取和搜索文件
* [isaacphi/mcp-gdrive](https://github.com/isaacphi/mcp-gdrive) 📇 ☁️ - 用于从 Google Drive 读取和编辑 Google Sheets 的模型上下文协议 (MCP) 服务器。
* [jeannier/homebrew-mcp](https://github.com/jeannier/homebrew-mcp) 🐍 🏠 🍎 - 通过此 MCP 服务器使用自然语言控制您的 macOS Homebrew 设置。只需管理您的软件包，或请求建议、排查 brew 问题等。
* [mamertofabian/mcp-everything-search](https://github.com/mamertofabian/mcp-everything-search) 🐍 🏠 🪟 - 使用 Everything SDK 的快速 Windows 文件搜索
* [mark3labs/mcp-filesystem-server](https://github.com/mark3labs/mcp-filesystem-server) 🏎️ 🏠 - Golang 实现的本地文件系统访问。
* [mickaelkerjean/filestash](https://github.com/mickael-kerjean/filestash/tree/master/server/plugin/plg_handler_mcp) 🏎️ ☁️ - 远程存储访问：SFTP、S3、FTP、SMB、NFS、WebDAV、GIT、FTPS、gcloud、azure blob、sharepoint 等。
* [microsoft/markitdown](https://github.com/microsoft/markitdown/tree/main/packages/markitdown-mcp) 🎖️ 🐍 🏠 - 访问 MarkItDown 的 MCP 工具 -- 一个将多种文件格式（本地或远程）转换为 Markdown 供 LLM 使用的库。
* [modelcontextprotocol/server-filesystem](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem) 📇 🏠 - 本地文件系统直接访问。
* [Xuanwo/mcp-server-opendal](https://github.com/Xuanwo/mcp-server-opendal) 🐍 🏠 ☁️ - 使用 Apache OpenDAL™ 访问任意存储

### 💰 <a name="finance--fintech"></a>金融与金融科技

* [Regenerating-World/pix-mcp](https://github.com/Regenerating-World/pix-mcp) 📇 ☁️ - 生成 Pix 二维码和复制粘贴字符串，支持跨多个提供商（Efí、Cielo 等）的巴西即时支付。
* [aaronjmars/web3-research-mcp](https://github.com/aaronjmars/web3-research-mcp) 📇 ☁️ - 加密货币深度研究 - 免费且完全本地化
* [ahnlabio/bicscan-mcp](https://github.com/ahnlabio/bicscan-mcp) 🎖️ 🐍 ☁️ - EVM 区块链地址（EOA、CA、ENS）甚至域名的风险评分 / 资产持有情况。
* [getAlby/mcp](https://github.com/getAlby/mcp) 🎖️ 📇 ☁️ 🏠 - 将任何比特币闪电钱包连接到您的代理，以发送和接收全球即时支付。
* [alchemy/alchemy-mcp-server](https://github.com/alchemyplatform/alchemy-mcp-server) 🎖️ 📇 ☁️ - 允许 AI 代理与 Alchemy 的区块链 API 交互。
* [anjor/coinmarket-mcp-server](https://github.com/anjor/coinmarket-mcp-server) 🐍 ☁️ - Coinmarket API 集成，用于获取加密货币列表和报价
* [araa47/jupiter-mcp](https://github.com/araa47/jupiter-mcp) 🐍 ☁️ - Jupiter API 访问（允许 AI 在 Solana 上交易代币 + 访问余额 + 搜索代币 + 创建限价订单）
* [ariadng/metatrader-mcp-server](https://github.com/ariadng/metatrader-mcp-server) 🐍 🏠 🪟 - 允许 AI LLMs 使用 MetaTrader 5 平台执行交易
* [armorwallet/armor-crypto-mcp](https://github.com/armorwallet/armor-crypto-mcp) 🐍 ☁️ - MCP 用于与多个区块链交互，包括质押、DeFi、交换、跨链、钱包管理、定投、限价订单、代币查询、跟踪等。
* [bankless/onchain-mcp](https://github.com/Bankless/onchain-mcp/) 📇 ☁️ - Bankless Onchain API 用于与智能合约交互，查询交易和代币信息
* [base/base-mcp](https://github.com/base/base-mcp) 🎖️ 📇 ☁️ - Base Network 集成，用于链上工具，允许与 Base Network 和 Coinbase API 交互，进行钱包管理、资金转账、智能合约和 DeFi 操作
* [berlinbra/alpha-vantage-mcp](https://github.com/berlinbra/alpha-vantage-mcp) 🐍 ☁️ - Alpha Vantage API 集成，用于获取股票和加密货币信息
* [bitteprotocol/mcp](https://github.com/BitteProtocol/mcp) 📇 - Bitte Protocol 集成，用于在多个区块链上运行 AI 代理。
* [carsol/monarch-mcp-server](https://github.com/carsol/monarch-mcp-server) 🐍 ☁️ - MCP 服务器提供对 Monarch Money 财务数据的只读访问，使 AI 助手能够分析交易、预算、账户和现金流数据，并支持多因素认证。
* [chargebee/mcp](https://github.com/chargebee/agentkit/tree/main/modelcontextprotocol) 🎖️ 📇 ☁️ - 连接 AI 代理到 [Chargebee 平台](https://www.chargebee.com/) 的 MCP 服务器。
* [codex-data/codex-mcp](https://github.com/Codex-Data/codex-mcp) 🎖️ 📇 ☁️ - [Codex API](https://www.codex.io) 集成，提供 60+ 个网络的实时丰富区块链和市场数据
* [coinpaprika/dexpaprika-mcp](https://github.com/chargebee/agentkit/tree/main/modelcontextprotocol) 🎖️ 📇 ☁️ 🍎 🪟 🐧 - Coinpaprika的DexPaprika MCP服务器提供了高性能的[DexPaprika API](https://docs.dexpaprika.com)，覆盖20多个链和500多万个代币，提供实时定价、流动性池数据和历史OHLCV数据，通过模型上下文协议为AI代理提供标准化的综合市场数据访问。
* [doggybee/mcp-server-ccxt](https://github.com/doggybee/mcp-server-ccxt) 📇 ☁️ - 一个MCP服务器，使用CCXT库通过20多个交易所获取实时加密货币市场数据和交易。支持现货、期货、OHLCV、余额、订单等功能。
* [ferdousbhai/investor-agent](https://github.com/ferdousbhai/investor-agent) 🐍 ☁️ - 集成Yahoo Finance以获取股票市场数据，包括期权推荐。
* [ferdousbhai/tasty-agent](https://github.com/ferdousbhai/tasty-agent) 🐍 ☁️ - 集成Tastyworks API以处理Tastytrade上的交易活动。
* [ferdousbhai/wsb-analyst-mcp](https://github.com/ferdousbhai/wsb-analyst-mcp) 🐍 ☁️ - 集成Reddit以分析WallStreetBets社区内容。
* [getalby/nwc-mcp-server](https://github.com/getalby/nwc-mcp-server) 📇 🏠 - 基于Nostr Wallet Connect的比特币闪电网络钱包集成。
* [glaksmono/finbud-data-mcp](https://github.com/glaksmono/finbud-data-mcp/tree/main/packages/mcp-server) 📇 ☁️ 🏠 - 通过开发者友好、AI原生的API访问全面的实时金融数据（股票、期权、加密货币、外汇），提供无与伦比的价值。
* [heurist-network/heurist-mesh-mcp-server](https://github.com/heurist-network/heurist-mesh-mcp-server) 🎖️ ⛅️ 🏠 🐍 - 通过Heurist Mesh网络访问专业的Web3 AI代理，用于区块链分析、智能合约安全审计、代币指标评估和链上交互。提供跨多个区块链的DeFi分析、NFT估值和交易监控的综合工具。
* [HuggingAGI/mcp-baostock-server](https://github.com/HuggingAGI/mcp-baostock-server) 🐍 ☁️ - 基于baostock的MCP服务器，提供对中国股票市场数据的访问和分析能力。
* [intentos-labs/beeper-mcp](https://github.com/intentos-labs/beeper-mcp) 🐍 - Beeper提供BSC上的交易，包括余额/代币转账、Pancakeswap中的代币交换和beeper奖励申领。
* [janswist/mcp-dexscreener](https://github.com/janswist/mcp-dexscreener) 📇 ☁️ - 使用开放免费的Dexscreener API获取实时链上市场价格。
* [kukapay/binance-alpha-mcp](https://github.com/kukapay/binance-alpha-mcp) 🐍 ☁️ - 一个MCP服务器，用于跟踪币安Alpha交易，帮助AI代理优化Alpha点积累。
* [kukapay/blockbeats-mcp](https://github.com/kukapay/blockbeats-mcp) 🐍 ☁️ - 一个MCP服务器，为AI代理提供来自BlockBeats的区块链新闻和深度文章。
* [kukapay/blocknative-mcp](https://github.com/kukapay/blocknative-mcp) 🐍 ☁️ - 提供跨多个区块链的实时Gas价格预测，由Blocknative驱动。
* [kukapay/bridge-rates-mcp](https://github.com/kukapay/bridge-rates-mcp) 📇 ☁️ - 为链上AI代理提供实时跨链桥接汇率和最佳转账路径。
* [kukapay/chainlink-feeds-mcp](https://github.com/kukapay/chainlink-feeds-mcp) 📇 ☁️ - 提供对Chainlink去中心化链上价格数据源的实时访问。
* [kukapay/chainlist-mcp](https://github.com/kukapay/chainlist-mcp) 📇 ☁️ - 一个MCP服务器，为AI代理提供快速访问经过验证的EVM链信息，包括RPC URL、链ID、浏览器和原生代币。
* [kukapay/cointelegraph-mcp](https://github.com/kukapay/cointelegraph-mcp) 🐍 ☁️ - 提供对Cointelegraph最新新闻的实时访问。
* [kukapay/crypto-feargreed-mcp](https://github.com/kukapay/crypto-feargreed-mcp) 🐍 ☁️ - 提供实时和历史的加密恐惧与贪婪指数数据。
* [kukapay/crypto-indicators-mcp](https://github.com/kukapay/crypto-indicators-mcp) 🐍 ☁️ - 一个MCP服务器，提供多种加密货币技术分析指标和策略。
* [kukapay/crypto-liquidations-mcp](https://github.com/kukapay/crypto-liquidations-mcp) 🐍 ☁️ - 从币安流式传输实时加密货币清算事件。
* [kukapay/crypto-news-mcp](https://github.com/kukapay/crypto-news-mcp) 🐍 ☁️ - 一个MCP服务器，为AI代理提供来自NewsData的实时加密货币新闻。
* [kukapay/crypto-orderbook-mcp](https://github.com/kukapay/crypto-orderbook-mcp) 🐍 ☁️ - 分析主要加密货币交易所的订单簿深度和不平衡性。
* [kukapay/crypto-pegmon-mcp](https://github.com/kukapay/crypto-pegmon-mcp) 🐍 ☁️ - 跨多个区块链跟踪稳定币锚定完整性。
* [kukapay/crypto-portfolio-mcp](https://github.com/kukapay/crypto-portfolio-mcp) 🐍 ☁️ - 一个MCP服务器，用于跟踪和管理加密货币投资组合分配。
* [kukapay/crypto-projects-mcp](https://github.com/kukapay/crypto-projects-mcp) 🐍 ☁️ - 向AI代理提供来自Mobula.io的加密货币项目数据。
* [kukapay/crypto-rss-mcp](https://github.com/kukapay/crypto-rss-mcp) 🐍 ☁️ - 一个MCP服务器，聚合来自多个RSS源的实时加密货币新闻。
* [kukapay/crypto-sentiment-mcp](https://github.com/kukapay/crypto-sentiment-mcp) 🐍 ☁️ - 一个MCP服务器，为AI代理提供加密货币情绪分析。
* [kukapay/crypto-trending-mcp](https://github.com/kukapay/crypto-trending-mcp) 🐍 ☁️ - 跟踪CoinGecko上的最新热门代币。
* [kukapay/crypto-whitepapers-mcp](https://github.com/kukapay/crypto-whitepapers-mcp) 🐍 ☁️ - 作为加密白皮书的结构化知识库。
* [kukapay/cryptopanic-mcp-server](https://github.com/kukapay/cryptopanic-mcp-server) 🐍 ☁️ - 为AI代理提供最新的加密货币新闻，由CryptoPanic驱动。
* [kukapay/dao-proposals-mcp](https://github.com/kukapay/dao-proposals-mcp) 🐍 ☁️ - 一个MCP服务器，聚合主要DAO的实时治理提案。
* [kukapay/defi-yields-mcp](https://github.com/kukapay/defi-yields-mcp) 🐍 ☁️ - 一个MCP服务器，供AI代理探索DeFi收益机会。
* [kukapay/dune-analytics-mcp](https://github.com/kukapay/dune-analytics-mcp) 🐍 ☁️ - 一个MCP服务器，将Dune Analytics数据桥接给AI代理。
* [kukapay/etf-flow-mcp](https://github.com/kukapay/etf-flow-mcp) 🐍 ☁️ - 提供加密ETF流动数据，以支持AI代理的决策。
* [kukapay/freqtrade-mcp](https://github.com/kukapay/freqtrade-mcp) 🐍 ☁️ - 一个MCP服务器，与Freqtrade加密货币交易机器人集成。
* [kukapay/funding-rates-mcp](https://github.com/kukapay/funding-rates-mcp) 🐍 ☁️ - 提供跨主要加密货币交易所的实时资金费率数据。
* [kukapay/hyperliquid-info-mcp](https://github.com/kukapay/hyperliquid-info-mcp) 🐍 ☁️ - 一个MCP服务器，从Hyperliquid永续DEX提供实时数据和洞察，供机器人、仪表盘和分析使用。
* [kukapay/hyperliquid-whalealert-mcp](https://github.com/kukapay/hyperliquid-whalealert-mcp) 🐍 ☁️ - 一个MCP服务器，提供Hyperliquid上的实时鲸鱼警报，标记名义价值超过100万美元的仓位。
* [kukapay/jupiter-mcp](https://github.com/kukapay/jupiter-mcp) 🐍 ☁️ - 一个MCP服务器，用于在Solana区块链上使用Jupiter的全新Ultra API执行代币交换。
* [kukapay/pancakeswap-poolspy-mcp](https://github.com/kukapay/pancakeswap-poolspy-mcp) 🐍 ☁️ - 一个MCP服务器，跟踪Pancake Swap上新创建的池。
* [kukapay/pumpswap-mcp](https://github.com/kukapay/pumpswap-mcp) 🐍 ☁️ - 使AI代理能够与PumpSwap交互，进行实时代币交换和自动化链上交易。
* [kukapay/raydium-launchlab-mcp](https://github.com/kukapay/raydium-launchlab-mcp) 🐍 ☁️ - 一个MCP服务器，使AI代理能够在Raydium Launchpad（即LaunchLab）上发布、购买和出售代币。
* [kukapay/rug-check-mcp](https://github.com/kukapay/rug-check-mcp) 🐍 ☁️ - 一个MCP服务器，用于检测Solana模因代币中的潜在风险。
* [kukapay/sui-trader-mcp](https://github.com/kukapay/sui-trader-mcp) 📇 ☁️ - 一个MCP服务器，专为AI代理在Sui区块链上执行最佳代币交换而设计。
* [kukapay/thegraph-mcp](https://github.com/kukapay/thegraph-mcp) 🐍 ☁️ - 一个MCP服务器，为AI代理提供来自The Graph的索引区块链数据。
* [kukapay/token-minter-mcp](https://github.com/kukapay/token-minter-mcp) 🐍 ☁️ - 一个MCP服务器，为AI代理提供跨多个区块链铸造ERC-20代币的工具。
* [kukapay/token-revoke-mcp](https://github.com/kukapay/token-revoke-mcp) 🐍 ☁️ - 一个MCP服务器，用于检查和撤销跨多个区块链的ERC-20代币授权。
* [kukapay/twitter-username-changes-mcp](https://github.com/kukapay/twitter-username-changes-mcp) 🐍 ☁️ - 一个MCP服务器，跟踪Twitter用户名的历史变更。
* [kukapay/uniswap-poolspy-mcp](https://github.com/kukapay/uniswap-poolspy-mcp) 🐍 ☁️ - 一个MCP服务器，跨多个区块链跟踪Uniswap上新创建的流动性池。
* [kukapay/uniswap-price-mcp](https://github.com/kukapay/uniswap-price-mcp) 📇 ☁️ - 一个MCP服务器，跨多个区块链跟踪Uniswap上新创建的流动性池。
* [kukapay/uniswap-trader-mcp](https://github.com/kukapay/uniswap-trader-mcp) 🐍 ☁️ - 一个MCP服务器，跨多个链提供Uniswap V3的实时代币价格。
* [kukapay/wallet-inspector-mcp](https://github.com/kukapay/wallet-inspector-mcp) 🐍 ☁️ - 一个MCP服务器，使AI代理能够检查任何钱包在主要EVM链和Solana链上的余额和链上活动。
* [kukapay/web3-jobs-mcp](https://github.com/kukapay/web3-jobs-mcp) 🐍 ☁️ - 一个MCP服务器，为AI代理提供对精选Web3工作的实时访问。
* [kukapay/whale-tracker-mcp](https://github.com/kukapay/whale-tracker-mcp) 🐍 ☁️ - 一个用于追踪加密货币鲸鱼交易的 MCP 服务器。
* [laukikk/alpaca-mcp](https://github.com/laukikk/alpaca-mcp) 🐍 ☁️ - 一个用于 Alpaca 交易 API 的 MCP 服务器，可管理股票和加密货币投资组合、下单交易并访问市场数据。
* [logotype/fixparser](https://gitlab.com/logotype/fixparser) 🎖 📇 ☁️ 🏠 📟  - 使用 TypeScript 编写的 FIX 协议（用于下单、市场数据等）。
* [longportapp/openapi](https://github.com/longportapp/openapi/tree/main/mcp) - 🐍 ☁️ - LongPort OpenAPI 提供实时股票市场数据，并通过 MCP 提供 AI 接入分析和交易能力。
* [mcpdotdirect/evm-mcp-server](https://github.com/mcpdotdirect/evm-mcp-server) 📇 ☁️ - 支持 30+ 个 EVM 网络的综合区块链服务，支持原生代币、ERC20、NFT、智能合约、交易和 ENS 解析。
* [mcpdotdirect/starknet-mcp-server](https://github.com/mcpdotdirect/starknet-mcp-server) 📇 ☁️ - 综合 Starknet 区块链集成，支持原生代币（ETH、STRK）、智能合约、StarknetID 解析和代币转账。
* [minhyeoky/mcp-server-ledger](https://github.com/minhyeoky/mcp-server-ledger) 🐍 🏠 - 一个 ledger-cli 集成，用于管理财务交易和生成报告。
* [narumiruna/yfinance-mcp](https://github.com/narumiruna/yfinance-mcp) 🐍 ☁️ - 一个使用 yfinance 获取 Yahoo Finance 信息的 MCP 服务器。
* [OctagonAI/octagon-mcp-server](https://github.com/OctagonAI/octagon-mcp-server) 🐍 ☁️ - Octagon AI Agents 用于整合私有和公共市场数据
* [openMF/mcp-mifosx](https://github.com/openMF/mcp-mifosx) ☁️ 🏠 - 一个用于管理客户、贷款、储蓄、股份、财务交易和生成财务报告的核心银行集成。
* [polygon-io/mcp\_polygon)](https://github.com/polygon-io/mcp_polygon)) 🐍 ☁️ - 一个提供对 [Polygon.io](https://polygon.io/) 金融市场价格数据 API 访问的 MCP 服务器，支持股票、指数、外汇、期权等。
* [pwh-pwh/coin-mcp-server](https://github.com/pwh-pwh/coin-mcp-server) 🐍 ☁️ - 通过 Bitget API 获取加密货币价格。
* [QuantGeekDev/coincap-mcp](https://github.com/QuantGeekDev/coincap-mcp) 📇 ☁️ - 使用 CoinCap 公共 API 提供实时加密货币市场数据集成，无需 API 密钥即可访问加密货币价格和市场信息。
* [QuentinCody/braintree-mcp-server](https://github.com/QuentinCody/braintree-mcp-server) 🐍 - 非官方 PayPal Braintree 支付网关 MCP 服务器，供 AI 代理处理支付、管理客户并安全处理交易。
* [RomThpt/xrpl-mcp-server](https://github.com/RomThpt/mcp-xrpl) 📇 ☁️ - 针对 XRP Ledger 的 MCP 服务器，提供对账户信息、交易历史和网络数据的访问。允许查询账本对象、提交交易并监控 XRPL 网络。
* [SaintDoresh/Crypto-Trader-MCP-ClaudeDesktop](https://github.com/SaintDoresh/Crypto-Trader-MCP-ClaudeDesktop.git) 🐍 ☁️ - 一个使用 CoinGecko API 提供加密货币市场数据的 MCP 工具。
* [SaintDoresh/YFinance-Trader-MCP-ClaudeDesktop](https://github.com/SaintDoresh/YFinance-Trader-MCP-ClaudeDesktop.git) 🐍 ☁️ - 一个使用 Yahoo Finance API 提供股票市场数据和分析的 MCP 工具。
* [shareseer/shareseer-mcp-server](https://github.com/shareseer/shareseer-mcp-server) 🏎️ ☁️ - 通过 [ShareSeer](https://shareseer.com) 访问 SEC 报告、财务数据和内幕交易数据的 MCP 服务器。
* [tatumio/blockchain-mcp](https://github.com/tatumio/blockchain-mcp) ☁️ - 区块链数据的 MCP 服务器。提供对 Tatum 区块链 API 跨越 130+ 个网络的访问，包括 RPC 网关和区块链数据分析工具。
* [ThomasMarches/substrate-mcp-rs](https://github.com/ThomasMarches/substrate-mcp-rs) 🦀 🏠 - 用于与基于 Substrate 的区块链交互的 MCP 服务器实现。使用 Rust 编写，并通过 [subxt](https://github.com/paritytech/subxt) crate 进行接口。
* [tooyipjee/yahoofinance-mcp](https://github.com/tooyipjee/yahoofinance-mcp.git) 📇 ☁️ - Yahoo Finance MCP 的 TypeScript 版本。
* [Trade-Agent/trade-agent-mcp](https://github.com/Trade-Agent/trade-agent-mcp.git) 🎖️ ☁️ - 通过 Trade Agent 的 MCP 服务器，在主流券商（Robinhood、E\*Trade、Coinbase、Kraken）上交易股票和加密货币。
* [twelvedata/mcp](https://github.com/twelvedata/mcp) 🐍 ☁️ - 与 [Twelve Data](https://twelvedata.com) API 进行交互，为您的 AI 代理提供实时和历史金融市场价格数据。
* [wowinter13/solscan-mcp](https://github.com/wowinter13/solscan-mcp) 🦀 🏠 - 一个使用自然语言通过 Solscan API 查询 Solana 交易的 MCP 工具。
* [Wuye-AI/mcp-server-wuye-ai](https://github.com/Wuye-ai/mcp-server-wuye-ai) 🎖️ 📇 ☁️ - 一个与 CRIC 吴AI平台功能交互的 MCP 服务器，专为物业管理行业设计的智能助手。
* [XeroAPI/xero-mcp-server](https://github.com/XeroAPI/xero-mcp-server) 📇 ☁️ – 与 Xero API 集成的 MCP 服务器，允许标准化访问 Xero 的会计和业务功能。
* [zlinzzzz/finData-mcp-server](https://github.com/zlinzzzz/finData-mcp-server) 🐍 ☁️ - 一个用于访问专业金融数据的 MCP 服务器，支持多个数据提供商，例如 Tushare。
* [zolo-ryan/MarketAuxMcpServer](https://github.com/Zolo-Ryan/MarketAuxMcpServer) 📇 ☁️ - 一个提供综合市场和财经新闻搜索功能的 MCP 服务器，支持通过代码、行业、国家和日期范围进行高级过滤。
* [JamesANZ/prediction-market-mcp](https://github.com/JamesANZ/prediction-market-mcp) 📇 ☁️ - 一个提供来自多个平台（包括 Polymarket、PredictIt 和 Kalshi）的实时预测市场数据的 MCP 服务器。使 AI 助手可以通过统一接口查询当前赔率、价格和市场信息。
* [JamesANZ/bitcoin-mcp](https://github.com/JamesANZ/bitcoin-mcp) 📇 🏠 - 一个使 AI 模型能够查询比特币区块链的 MCP 服务器。

### 🎮 <a name="gaming"></a>游戏

与游戏相关数据、游戏引擎和服务的集成

* [CoderGamester/mcp-unity](https://github.com/CoderGamester/mcp-unity) #️⃣ 🏠 - 用于 Unity3d 游戏引擎集成的 MCP 服务器，适用于游戏开发
* [Coding-Solo/godot-mcp](https://github.com/Coding-Solo/godot-mcp) 📇 🏠 - 用于与 Godot 游戏引擎交互的 MCP 服务器，提供编辑、运行、调试和管理 Godot 项目场景的工具。
* [ddsky/gamebrain-api-clients](https://github.com/ddsky/gamebrain-api-clients) ☁️ - 通过 [GameBrain API](https://gamebrain.co/api) 搜索和发现任何平台上的数十万款视频游戏。
* [IvanMurzak/Unity-MCP](https://github.com/IvanMurzak/Unity-MCP) #️⃣ 🏠 🍎 🪟 🐧 - 用于 Unity 编辑器和 Unity 制作的游戏的 MCP 服务器
* [jiayao/mcp-chess](https://github.com/jiayao/mcp-chess) 🐍 🏠 - 一个让 LLM 下国际象棋的 MCP 服务器。
* [kkjdaniel/bgg-mcp](https://github.com/kkjdaniel/bgg-mcp) 🏎️ ☁️ - 一个通过 BoardGameGeek API（XML API2）与桌游相关数据交互的 MCP 服务器。
* [opgginc/opgg-mcp](https://github.com/opgginc/opgg-mcp) 📇 ☁️ - 访问包括《英雄联盟》、《云顶之弈》和《无畏契约》等热门游戏的实时游戏数据，提供英雄分析、电竞赛程、元数据组合和角色统计数据。
* [pab1ito/chess-mcp](https://github.com/pab1it0/chess-mcp) 🐍 ☁️ - 通过标准化 MCP 接口访问 Chess.com 玩家数据、游戏记录和其他公开信息，允许 AI 助手搜索和分析国际象棋信息。
* [rishijatia/fantasy-pl-mcp](https://github.com/rishijatia/fantasy-pl-mcp/) 🐍 ☁️ - 一个提供实时英超 Fantasy 数据和分析工具的 MCP 服务器。
* [sonirico/mpc-stockfish](https://github.com/sonirico/mcp-stockfish) - 🏎️ 🏠 🍎 🪟 🐧️ 连接 AI 系统与 Stockfish 国际象棋引擎的 MCP 服务器。
* [stefan-xyz/mcp-server-runescape](https://github.com/stefan-xyz/mcp-server-runescape) 📇 - 一个带有与 RuneScape (RS) 和 Old School RuneScape (OSRS) 数据交互工具的 MCP 服务器，包括物品价格、玩家排名等。
* [tomholford/mcp-tic-tac-toe](https://github.com/tomholford/mcp-tic-tac-toe) 🏎️ 🏠 - 使用此 MCP 服务器与 AI 对手玩井字棋。

### 🧠 <a name="knowledge--memory"></a>知识与记忆

使用知识图谱结构进行持久化记忆存储。使 AI 模型能够在会话之间维护和查询结构化信息。

* [0xshellming/mcp-summarizer](https://github.com/0xshellming/mcp-summarizer) 📕 ☁️ - AI 摘要 MCP 服务器，支持多种内容类型：纯文本、网页、PDF 文档、EPUB 书籍、HTML 内容
* [apecloud/ApeRAG](https://github.com/apecloud/ApeRAG) 🐍 ☁️ 🏠 - 结合图 RAG、向量搜索和全文搜索的生产级 RAG 平台。构建您自己的知识图谱和上下文工程的最佳选择。
* [chatmcp/mcp-server-chatsum](https://github.com/chatmcp/mcp-server-chatsum) - 使用 AI 提示查询和总结您的聊天消息。
* [CheMiguel23/MemoryMesh](https://github.com/CheMiguel23/MemoryMesh) 📇 🏠 - 增强的基于图的记忆系统，专注于 AI 角色扮演和故事生成。
* [entanglr/zettelkasten-mcp](https://github.com/entanglr/zettelkasten-mcp) 🐍 🏠 - 实现 Zettelkasten 知识管理方法的模型上下文协议 (MCP) 服务器，允许您通过 Claude 和其他兼容 MCP 的客户端创建、链接和搜索原子笔记。
* [GistPad-MCP](https://github.com/lostintangent/gistpad-mcp) 📇 🏠 - 使用 GitHub Gists 管理和访问您的个人知识、日常笔记和可重复使用的提示。这是 <https://gistpad.dev> 和 [GistPad VS Code 扩展](https://aka.ms/gistpad) 的配套工具。
* [graphlit-mcp-server](https://github.com/graphlit/graphlit-mcp-server) 📇 ☁️ - 从 Slack、Discord、网站、Google Drive、Linear 或 GitHub 中引入任何内容，然后在 Cursor、Windsurf 或 Cline 等 MCP 客户端中搜索并检索相关的知识内容。
* [hannesrudolph/mcp-ragdocs](https://github.com/hannesrudolph/mcp-ragdocs) 🐍 🏠 - 一个 MCP 服务器实现，提供通过向量搜索检索和处理文档的工具，使 AI 助手能够在响应中加入相关文档的上下文。
* [jinzcdev/markmap-mcp-server](https://github.com/jinzcdev/markmap-mcp-server) 📇 🏠 - 基于 [markmap](https://github.com/markmap/markmap) 构建的 MCP 服务器，可将 **Markdown** 转换为交互式 **思维导图**。支持多格式导出（PNG/JPG/SVG），浏览器实时预览，一键复制 Markdown，以及动态可视化功能。
* [kaliaboi/mcp-zotero](https://github.com/kaliaboi/mcp-zotero) 📇 ☁️ - 一个 LLM 连接器，用于与你的 Zotero 云端中的集合和资料进行交互。
* [mem0ai/mem0-mcp](https://github.com/mem0ai/mem0-mcp) 🐍 🏠 - Mem0 的模型上下文协议服务器，帮助管理编码偏好和模式，提供在 Cursor 和 Windsurf 等 IDE 中存储、检索和语义处理代码实现、最佳实践和技术文档的工具。
* [modelcontextprotocol/server-memory](https://github.com/modelcontextprotocol/servers/tree/main/src/memory) 📇 🏠 - 基于知识图谱的持久化记忆系统，用于维护上下文。
* [MWGMorningwood/Central-Memory-MCP](https://github.com/MWGMorningwood/Central-Memory-MCP) 📇 ☁️ - 一个可托管在 Azure PaaS 上的 MCP 服务器，通过 Azure Functions MCP 触发器和表存储，为多个开发者提供基于工作区的知识图谱。
* [pinecone-io/assistant-mcp](https://github.com/pinecone-io/assistant-mcp) 🎖️ 🦀 ☁️ - 连接到你的 Pinecone Assistant，并为其代理提供知识引擎中的上下文。
* [ragieai/mcp-server](https://github.com/ragieai/ragie-mcp-server) 📇 ☁️ - 从你的 [Ragie](https://www.ragie.ai)（RAG）知识库中检索上下文，该知识库已连接 Google Drive、Notion、JIRA 等集成。
* [TechDocsStudio/biel-mcp](https://github.com/TechDocsStudio/biel-mcp) 📇 ☁️ - 让 Cursor、VS Code 或 Claude Desktop 等 AI 工具能够使用你的产品文档回答问题。Biel.ai 提供 RAG 系统和 MCP 服务器。
* [topoteretes/cognee](https://github.com/topoteretes/cognee/tree/dev/cognee-mcp) 📇 🏠 - 用于 AI 应用和代理的记忆管理器，支持使用多种图数据库和向量数据库，并允许从 30 多个数据源导入数据。
* [unibaseio/membase-mcp](https://github.com/unibaseio/membase-mcp) 📇 ☁️ - 通过 Membase 以分布式方式保存和查询代理记忆。
* [upstash/context7](https://github.com/upstash/context7) 📇 ☁️ - 为 LLM 和 AI 代码编辑器提供最新代码文档。
* [JamesANZ/memory-mcp](https://github.com/JamesANZ/memory-mcp) 📇 🏠 - 一个使用 MongoDB 存储和检索多个 LLM 的记忆的 MCP 服务器。提供保存、检索、添加和清除带时间戳和 LLM 标识的对话记忆的工具。
* [JamesANZ/cross-llm-mcp](https://github.com/JamesANZ/cross-llm-mcp) 📇 🏠 - 一个支持跨 LLM 通信和记忆共享的 MCP 服务器，允许不同的 AI 模型在对话中协作并共享上下文。

### 🗺️ <a name="location-services"></a>位置服务

基于位置的服务和地图工具。使 AI 模型能够处理地理数据、天气信息和基于位置的分析。

* [briandconnelly/mcp-server-ipinfo](https://github.com/briandconnelly/mcp-server-ipinfo) 🐍 ☁️ - 使用 IPInfo API 进行 IP 地址地理位置和网络信息查询。
* [devilcoder01/weather-mcp-server](https://github.com/devilcoder01/weather-mcp-server) 🐍 ☁️ - 使用 WeatherAPI.com API 获取任意位置的实时天气数据，提供详细的预报和当前状况。
* [ip2location/mcp-ip2location-io](https://github.com/ip2location/mcp-ip2location-io) 🐍 ☁️ - 官方 IP2Location.io MCP 服务器，使用 IP2Location.io API 获取 IP 地址的地理位置、代理和网络信息。
* [ipfind/ipfind-mcp-server](https://github.com/ipfind/ipfind-mcp-server) 🐍 ☁️ - 使用 [IP Find](https://ipfind.com) API 的 IP 地址定位服务。
* [ipfred/aiwen-mcp-server-geoip](https://github.com/ipfred/aiwen-mcp-server-geoip) 🐍 📇 ☁️ – Aiwen IP 定位的 MCP 服务器，获取用户网络 IP 位置，查询 IP 详细信息（国家、省份、城市、纬度、经度、ISP、所有者等）。
* [iplocate/mcp-server-iplocate](https://github.com/iplocate/mcp-server-iplocate) 🎖️ 📇 🏠  - 使用 IPLocate.io 查询 IP 地址地理位置、网络信息，检测代理和 VPN，并查找滥用联系人详情。
* [jagan-shanmugam/open-streetmap-mcp](https://github.com/jagan-shanmugam/open-streetmap-mcp) 🐍 🏠 - 基于 OpenStreetMap 的 MCP 服务器，提供位置服务和地理空间数据。
* [kukapay/nearby-search-mcp](https://github.com/kukapay/nearby-search-mcp) 🐍 ☁️ - 一个支持基于 IP 的位置检测的 MCP 服务器，用于附近的地点搜索。
* [mahdin75/geoserver-mcp](https://github.com/mahdin75/geoserver-mcp) 🏠 – 一个模型上下文协议 (MCP) 服务器实现，将 LLM 连接到 GeoServer REST API，使 AI 助手能够与地理空间数据和服务进行交互。
* [mahdin75/gis-mcp](https://github.com/mahdin75/gis-mcp) 🏠 – 一个模型上下文协议 (MCP) 服务器实现，使用 GIS 库将大型语言模型 (LLM) 连接到 GIS 操作，使 AI 助手能够执行准确的地理空间操作和转换。
* [modelcontextprotocol/server-google-maps](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/google-maps) 📇 ☁️ - Google Maps 集成，提供位置服务、路线规划和地点详情。
* [QGIS MCP](https://github.com/jjsantos01/qgis_mcp) - 通过 MCP 将 QGIS Desktop 连接到 Claude AI。该集成为项目创建、图层加载、代码执行等操作提供提示辅助。
* [rossshannon/Weekly-Weather-mcp](https://github.com/rossshannon/weekly-weather-mcp.git) 🐍 ☁️ - 每周天气 MCP 服务器，可返回全球任意地点 7 天的详细天气预报。
* [SaintDoresh/Weather-MCP-ClaudeDesktop](https://github.com/SaintDoresh/Weather-MCP-ClaudeDesktop.git) 🐍 ☁️ - 使用 OpenWeatherMap API 提供实时天气数据、预报和历史天气信息的 MCP 工具。
* [SecretiveShell/MCP-timeserver](https://github.com/SecretiveShell/MCP-timeserver) 🐍 🏠 - 获取任意时区的时间并查询当前本地时间。
* [stadiamaps/stadiamaps-mcp-server-ts](https://github.com/stadiamaps/stadiamaps-mcp-server-ts) 📇 ☁️ - Stadia Maps 位置 API 的 MCP 服务器 — 查找地址、地点（通过地理编码）、查找时区、创建路线和静态地图。
* [TimLukaHorstmann/mcp-weather](https://github.com/TimLukaHorstmann/mcp-weather) 📇 ☁️  - 通过 AccuWeather API（提供免费层级）获取准确的天气预报。
* [trackmage/trackmage-mcp-server](https://github.com/trackmage/trackmage-mcp-server) 📇 - 通过 [TrackMage API](https://trackmage.com/) 提供货运跟踪和物流管理功能。
* [webcoderz/MCP-Geo](https://github.com/webcoderz/MCP-Geo) 🐍 🏠 - 用于 Nominatim、ArcGIS 和 Bing 的地理编码 MCP 服务器。

### 🎯 <a name="marketing"></a>市场营销

用于创建和编辑营销内容、处理网页元数据、产品定位和编辑指南的工具。

* [gomarble-ai/facebook-ads-mcp-server](https://github.com/gomarble-ai/facebook-ads-mcp-server) 🐍 ☁️ - 作为 Facebook Ads 接口的 MCP 服务器，提供对 Facebook Ads 数据和管理功能的程序化访问。
* [gomarble-ai/google-ads-mcp-server](https://github.com/gomarble-ai/google-ads-mcp-server) 🐍 ☁️ - 作为 Google Ads 接口的 MCP 服务器，提供对 Google Ads 数据和管理功能的程序化访问。
* [marketplaceadpros/amazon-ads-mcp-server](https://github.com/MarketplaceAdPros/amazon-ads-mcp-server) 📇 ☁️  - 使工具能够与 Amazon Advertising 交互，分析广告系列指标和配置。
* [open-strategy-partners/osp_marketing_tools](https://github.com/open-strategy-partners/osp_marketing_tools) 🐍 🏠 - Open Strategy Partners 提供的一套营销工具，包括写作风格、编辑代码和产品营销价值图创建功能。
* [pipeboard-co/meta-ads-mcp](https://github.com/pipeboard-co/meta-ads-mcp) 🐍 ☁️ 🏠 - 简单可靠的 Meta Ads 自动化工具。被 10,000+ 企业用于分析表现、测试创意、优化支出并扩大成果。
* [stape-io/stape-mcp-server](https://github.com/stape-io/stape-mcp-server) 📇 ☁️ – 该项目为 Stape 平台实现了 MCP（模型上下文协议）服务器。允许使用 Claude 或 Cursor 等 AI 驱动的 IDE 与 Stape API 进行交互。
* [stape-io/google-tag-manager-mcp-server](https://github.com/stape-io/google-tag-manager-mcp-server) 📇 ☁️ – 该服务器支持远程 MCP 连接，内置 Google OAuth，并提供 Google Tag Manager API 接口。

### 📊 <a name="monitoring"></a>监控

访问和分析应用程序监控数据。使 AI 模型能够查看错误报告和性能指标。

* [edgedelta/edgedelta-mcp-server](https://github.com/edgedelta/edgedelta-mcp-server) 🎖️ 🏎️ ☁️ – 与 Edge Delta 异常互动，查询日志 / 模式 / 事件，定位根本原因并优化你的流水线。
* [grafana/mcp-grafana](https://github.com/grafana/mcp-grafana) 🎖️ 🐍 🏠 ☁️ - 在你的 Grafana 实例中搜索仪表板、调查事件和查询数据源
* [hyperb1iss/lucidity-mcp](https://github.com/hyperb1iss/lucidity-mcp) 🐍 🏠 - 通过基于提示的智能分析从复杂性到安全漏洞等10个关键维度提升AI生成代码的质量
* [inventer-dev/mcp-internet-speed-test](https://github.com/inventer-dev/mcp-internet-speed-test) 🐍 ☁️ - 使用网络性能指标进行互联网速度测试，包括下载/上传速度、延迟、抖动分析，以及带地理映射的CDN服务器检测
* [last9/last9-mcp-server](https://github.com/last9/last9-mcp-server) - 将实时生产环境上下文（日志、指标和追踪）无缝引入本地环境，以更快地自动修复代码
* [metoro-io/metoro-mcp-server](https://github.com/metoro-io/metoro-mcp-server) 🎖️ 🏎️ ☁️ - 查询并与Metoro监控的Kubernetes环境进行交互
* [MindscapeHQ/server-raygun](https://github.com/MindscapeHQ/mcp-server-raygun) 📇 ☁️ - Raygun API V3集成，用于崩溃报告和真实用户监控
* [getsentry/sentry-mcp](https://github.com/getsentry/sentry-mcp) 🐍 ☁️ - Sentry.io集成，用于错误追踪和性能监控
* [mpeirone/zabbix-mcp-server](https://github.com/mpeirone/zabbix-mcp-server) 🐍 ☁️ 🐧 🪟 🍎 - Zabbix集成，支持主机、项目、触发器、模板、问题、数据等
* [netdata/netdata#Netdata](https://github.com/netdata/netdata/blob/master/src/web/mcp/README.md) 🎖️ 🏠 ☁️ 📟 🍎 🪟 🐧 - 使用所有可观测性数据（包括指标、日志、系统、容器、进程和网络连接）进行发现、探索、报告和根本原因分析
* [pydantic/logfire-mcp](https://github.com/pydantic/logfire-mcp) 🎖️ 🐍 ☁️ - 通过Logfire提供对OpenTelemetry追踪和指标的访问
* [seekrays/mcp-monitor](https://github.com/seekrays/mcp-monitor) 🏎️ 🏠 - 一个系统监控工具，通过Model Context Protocol（MCP）暴露系统指标。该工具允许LLM通过兼容MCP的接口获取实时系统信息（支持CPU、内存、磁盘、网络、主机、进程）
* [tumf/grafana-loki-mcp](https://github.com/tumf/grafana-loki-mcp) 🐍 🏠 - 一个MCP服务器，允许通过Grafana API查询Loki日志
* [VictoriaMetrics-Community/mcp-victoriametrics](https://github.com/VictoriaMetrics-Community/mcp-victoriametrics) 🎖️ 🏎️ 🏠 - 提供与你的[VictoriaMetrics实例API](https://docs.victoriametrics.com/victoriametrics/url-examples/)和[文档](https://docs.victoriametrics.com/)的全面集成，用于与VictoriaMetrics实例相关的监控、可观测性和调试任务
* [imprvhub/mcp-status-observer](https://github.com/imprvhub/mcp-status-observer) 📇 ☁️ - 用于在Claude Desktop中监控主要数字平台运行状态的Model Context Protocol服务器
* [inspektor-gadget/ig-mcp-server](https://github.com/inspektor-gadget/ig-mcp-server) 🏎️ ☁️ 🏠 🐧 🪟 🍎 - 使用基于eBPF的AI接口调试你的容器和Kubernetes工作负载
* [yshngg/pmcp](https://github.com/yshngg/pmcp) 🏎️ ☁️ 🏠 🍎 🪟 🐧 - 一个Prometheus Model Context Protocol服务器

### 🎥 <a name="multimedia-process"></a>多媒体处理

提供处理多媒体（如音频和视频编辑、播放、格式转换）的能力，还包括视频滤镜、增强等

* [ananddtyagi/gif-creator-mcp](https://github.com/ananddtyagi/gif-creator-mcp/tree/main) 📇 🏠 - 一个用于从视频创建GIF的MCP服务器
* [bogdan01m/zapcap-mcp-server](https://github.com/bogdan01m/zapcap-mcp-server) 🐍 ☁️ - ZapCap API的MCP服务器，通过自然语言生成视频字幕和B-roll
* [stass/exif-mcp](https://github.com/stass/exif-mcp) 📇 🏠 🐧 🍎 🪟 - 一个允许检查图像元数据（如EXIF、XMP、JFIF和GPS）的MCP服务器。这为LLM驱动的照片库和图像集搜索与分析提供了基础
* [sunriseapps/imagesorcery-mcp](https://github.com/sunriseapps/imagesorcery-mcp) 🐍 🏠 🐧 🍎 🪟 - 基于计算机视觉的🪄图像识别与编辑工具，为AI助手赋能
* [video-creator/ffmpeg-mcp](https://github.com/video-creator/ffmpeg-mcp.git) 🎥 🔊 - 使用ffmpeg命令行实现MCP服务器，可以通过对话方便地实现本地视频搜索、剪辑、拼接、播放等功能

### 🔎 <a name="RAG"></a>端到端RAG平台

* [vectara/vectara-mcp](https://github.com/vectara/vectara-mcp) 🐍 🏠 ☁️ - 一个用于访问Vectara可信RAG即服务（RAG-as-a-service）平台的MCP服务器

### 🔎 <a name="search"></a>搜索与数据提取

* [0xdaef0f/job-searchoor](https://github.com/0xDAEF0F/job-searchoor) 📇 🏠 - 一个用于使用日期、关键词、远程工作选项等过滤器搜索职位列表的MCP服务器
* [Aas-ee/open-webSearch](https://github.com/Aas-ee/open-webSearch) 🐍 📇 ☁️ - 使用免费多引擎搜索进行网络搜索（无需API密钥）——支持Bing、百度、DuckDuckGo、Brave、Exa和CSDN
* [ac3xx/mcp-servers-kagi](https://github.com/ac3xx/mcp-servers-kagi) 📇 ☁️ - Kagi搜索API集成
* [adawalli/nexus](https://github.com/adawalli/nexus) 📇 ☁️ - 使用Perplexity Sonar模型并带有来源引用的AI驱动网络搜索服务器。通过NPX实现零安装设置
* [ananddtyagi/webpage-screenshot-mcp](https://github.com/ananddtyagi/webpage-screenshot-mcp) 📇 🏠 - 一个用于截取网页截图以在UI开发过程中作为反馈使用的MCP服务器
* [andybrandt/mcp-simple-arxiv](https://github.com/andybrandt/mcp-simple-arxiv) - 🐍 ☁️ LLM用于搜索和阅读arXiv论文的MCP
* [andybrandt/mcp-simple-pubmed](https://github.com/andybrandt/mcp-simple-pubmed) - 🐍 ☁️ MCP用于搜索和阅读来自PubMed的医学/生命科学论文
* [angheljf/nyt](https://github.com/angheljf/nyt) 📇 ☁️ - 使用纽约时报（NYTimes）API搜索文章
* [apify/mcp-server-rag-web-browser](https://github.com/apify/mcp-server-rag-web-browser) 📇 ☁️ - 一个用于Apify开源RAG网络浏览器Actor的MCP服务器，用于执行网络搜索、抓取URL，并以Markdown格式返回内容
* [Bigsy/Clojars-MCP-Server](https://github.com/Bigsy/Clojars-MCP-Server) 📇 ☁️ - Clojars MCP服务器，用于获取Clojure库的最新依赖信息
* [blazickjp/arxiv-mcp-server](https://github.com/blazickjp/arxiv-mcp-server) ☁️ 🐍 - 搜索ArXiv研究论文
* [chanmeng/google-news-mcp-server](https://github.com/ChanMeng666/server-google-news) 📇 ☁️ - Google News集成，支持自动主题分类、多语言支持，以及通过[SerpAPI](https://serpapi.com/)进行包括头条新闻、故事和相关主题在内的综合搜索功能
* [ConechoAI/openai-websearch-mcp](https://github.com/ConechoAI/openai-websearch-mcp/) 🐍 🏠 ☁️ - 这是一个基于Python的MCP服务器，提供OpenAI `web_search`内置工具
* [DappierAI/dappier-mcp](https://github.com/DappierAI/dappier-mcp) 🐍 ☁️ - 启用快速、免费的实时网络搜索，并从可信媒体品牌（新闻、金融市场、体育、娱乐、天气等）访问高级数据。使用Dappier构建强大的AI代理
* [deadletterq/mcp-opennutrition](https://github.com/deadletterq/mcp-opennutrition) 📇 🏠 - 用于从OpenNutrition数据库中搜索30万+食品、营养信息和条形码的本地MCP服务器
* [dealx/mcp-server](https://github.com/DealExpress/mcp-server) ☁️ - DealX平台的MCP服务器
* [devflowinc/trieve](https://github.com/devflowinc/trieve/tree/main/clients/mcp-server) 🎖️ 📇 ☁️ 🏠 - 通过[Trieve](https://trieve.ai)爬取、嵌入、分块、搜索和检索数据集中的信息
* [Dumpling-AI/mcp-server-dumplingai](https://github.com/Dumpling-AI/mcp-server-dumplingai) 🎖️ 📇 ☁️ - 访问由[Dumpling AI](https://www.dumplingai.com/)提供的数据、网络爬取和文档转换API
* [emicklei/melrose-mcp](https://github.com/emicklei/melrose-mcp) 🏎️ 🏠 - 将[Melrōse](https://melrōse.org)音乐表达式播放为MIDI
* [erithwik/mcp-hn](https://github.com/erithwik/mcp-hn) 🐍 ☁️ - 一个用于搜索Hacker News、获取热门故事等的MCP服务器
* [exa-labs/exa-mcp-server](https://github.com/exa-labs/exa-mcp-server) 🎖️ 📇 ☁️ – 一个Model Context Protocol（MCP）服务器，使Claude等AI助手可以使用Exa AI搜索API进行网络搜索。这种设置允许AI模型以安全和受控的方式获取实时网络信息
* [fatwang2/search1api-mcp](https://github.com/fatwang2/search1api-mcp) 📇 ☁️ - 通过search1api进行搜索（需要付费API密钥）
* [format37/youtube_mcp](https://github.com/format37/youtube_mcp) 🐍 ☁️ – 用于将YouTube视频转录为文本的MCP服务器。使用yt-dlp下载音频，并使用OpenAI的Whisper-1进行比YouTube字幕更精确的转录。提供YouTube URL即可获得按块分割的完整转录文本，适用于长视频
* [genomoncology/biomcp](https://github.com/genomoncology/biomcp) 🐍 ☁️ - 提供访问PubMed、ClinicalTrials.gov和MyVariant.info的生物医学研究服务器
* [hbg/mcp-paperswithcode](https://github.com/hbg/mcp-paperswithcode) - 🐍 ☁️ MCP用于通过PapersWithCode API进行搜索
* [hellokaton/unsplash-mcp-server](https://github.com/hellokaton/unsplash-mcp-server)) 🐍 ☁️ - 一个用于Unsplash图像搜索的MCP服务器
* [Himalayas-App/himalayas-mcp](https://github.com/Himalayas-App/himalayas-mcp) 📇 ☁️ - 访问数万个远程职位列表和公司信息。这个公共MCP服务器提供对Himalayas远程职位数据库的实时访问
* [Ihor-Sokoliuk/MCP-SearXNG](https://github.com/ihor-sokoliuk/mcp-searxng) 📇 🏠/☁️ - [SearXNG](https://docs.searxng.org)的Model Context Protocol服务器
* [isnow890/naver-search-mcp](https://github.com/isnow890/naver-search-mcp) 📇 ☁️ - Naver搜索API集成的MCP服务器，支持博客、新闻、购物搜索和DataLab分析功能
* [jae-jae/fetcher-mcp](https://github.com/jae-jae/fetcher-mcp) 📇 🏠 - 使用 Playwright 无头浏览器抓取网页内容的 MCP 服务器，支持 JavaScript 渲染和智能内容提取，输出 Markdown 或 HTML 格式。
* [jae-jae/g-search-mcp](https://github.com/jae-jae/g-search-mcp) 📇 🏠 - 一个功能强大的 Google 搜索 MCP 服务器，支持多个关键词同时并行搜索。
* [joelio/stocky](https://github.com/joelio/stocky) 🐍 ☁️ 🏠 - 一个用于从 Pexels 和 Unsplash 搜索和下载免版税摄影作品的 MCP 服务器。支持多提供商搜索、丰富的元数据、分页支持以及为 AI 助手提供异步高性能查找和访问高质量图片的能力。
* [just-every/mcp-read-website-fast](https://github.com/just-every/mcp-read-website-fast) 📇 🏠 - 为 AI 智能体提供快速、节省 token 的网页内容提取工具 —— 将网站转换为干净的 Markdown 格式，同时保留链接。特性包括 Mozilla Readability、智能缓存、遵守 robots.txt 的礼貌爬取以及并发抓取。
* [just-every/mcp-screenshot-website-fast](https://github.com/just-every/mcp-screenshot-website-fast) 📇 🏠 - 专为 Claude Vision API 优化的快速截图工具。自动将完整页面切分为 1072x1072 的区块，以便 AI 处理，并支持可配置的视口和等待策略以处理动态内容。
* [kagisearch/kagimcp](https://github.com/kagisearch/kagimcp) ☁️ 📇 – 官方 Kagi 搜索 MCP 服务器
* [kehvinbehvin/json-mcp-filter](https://github.com/kehvinbehvin/json-mcp-filter) ️🏠 📇 – 避免你的 LLM 上下文膨胀。从你的 JSON 文件中查询并提取你真正需要的内容。
* [kshern/mcp-tavily](https://github.com/kshern/mcp-tavily.git) ☁️ 📇 – Tavily AI 搜索 API
* [leehanchung/bing-search-mcp](https://github.com/leehanchung/bing-search-mcp) 📇 ☁️ - 使用微软 Bing 搜索 API 提供网页搜索功能
* [lfnovo/content-core](https://github.com/lfnovo/content-core) 🐍 🏠 - 使用智能自动引擎选择技术从 URL、文档、视频和音频文件中提取内容。支持网页、PDF、Word 文档、YouTube 字幕等内容，并返回结构化的 JSON 响应。
* [luminati-io/brightdata-mcp](https://github.com/luminati-io/brightdata-mcp) 📇 ☁️ - 发现、提取并与网络互动 —— 一个接口提供对整个公共互联网的自动化访问。
* [mikechao/brave-search-mcp](https://github.com/mikechao/brave-search-mcp) 📇 ☁️ - 使用 Brave 搜索 API 提供网页、图片、新闻、视频和本地兴趣点搜索功能
* [modelcontextprotocol/server-brave-search](https://github.com/modelcontextprotocol/servers/tree/main/src/brave-search) 📇 ☁️ - 使用 Brave 搜索 API 提供网页搜索功能
* [modelcontextprotocol/server-fetch](https://github.com/modelcontextprotocol/servers/tree/main/src/fetch) 🐍 🏠 ☁️ - 为 AI 使用而优化的高效网页内容抓取和处理服务器
* [mzxrai/mcp-webresearch](https://github.com/mzxrai/mcp-webresearch) 🔍 📚 - 搜索 Google 并对任意主题进行深度网络研究
* [nickclyde/duckduckgo-mcp-server](https://github.com/nickclyde/duckduckgo-mcp-server) 🐍 ☁️ - 使用 DuckDuckGo 进行网页搜索
* [nkapila6/mcp-local-rag](https://github.com/nkapila6/mcp-local-rag) 🏠 🐍 - 一个在本地运行的“原始”类 RAG 网络搜索模型上下文协议（MCP）服务器，无需 API。
* [nyxn-ai/NyxDocs](https://github.com/nyxn-ai/NyxDocs) 🐍 ☁️ 🏠 - 专为加密货币项目文档管理设计的 MCP 服务器，支持多区块链（以太坊、BSC、Polygon、Solana）。
* [OctagonAI/octagon-deep-research-mcp](https://github.com/OctagonAI/octagon-deep-research-mcp) 🎖️ 📇 ☁️ 🏠 - 闪电般快速、高精度的深度研究代理
* [pragmar/mcp-server-webcrawl](https://github.com/pragmar/mcp-server-webcrawl) 🐍 🏠 - 用于网络爬虫数据的高级搜索和检索服务器。支持 WARC、wget、Katana、SiteOne 和 InterroBot 爬虫。
* [QuentinCody/catalysishub-mcp-server](https://github.com/QuentinCody/catalysishub-mcp-server) 🐍 - 非官方 MCP 服务器，用于从 Catalysis Hub 数据库中搜索和获取科学数据，提供对计算催化研究和表面反应数据的访问。
* [r-huijts/opentk-mcp](https://github.com/r-huijts/opentk-mcp) 📇 ☁️ - 通过结构化搜索功能访问荷兰议会（Tweede Kamer）的信息，包括文档、辩论、活动和立法案件（基于 Bert Hubert 的 opentk 项目）。
* [reading-plus-ai/mcp-server-deep-research](https://github.com/reading-plus-ai/mcp-server-deep-research) 📇 ☁️ - 提供类似 OpenAI/Perplexity 的自主深度研究、结构化查询扩展和简洁报告功能的 MCP 服务器。
* [ricocf/mcp-wolframalpha](https://github.com/ricocf/mcp-wolframalpha) 🐍 🏠 ☁️ - 一个 MCP 服务器，使 AI 助手能够使用 Wolfram Alpha API 实时访问计算知识和数据。
* [sascharo/gxtract](https://github.com/sascharo/gxtract) 🐍 ☁️ 🪟 🐧 🍎 - GXtract 是一个设计用于与 VS Code 和其他兼容编辑器集成的 MCP 服务器（文档：[sascharo.github.io/gxtract](https://sascharo.github.io/gxtract))。它提供了一套工具用于与 GroundX 平台交互，使您能够直接在开发环境中利用其强大的文档理解能力。
* [scrapeless-ai/scrapeless-mcp-server](https://github.com/scrapeless-ai/scrapeless-mcp-server) 🐍 ☁️ - Scrapeless Model Context Protocol 服务作为一个 MCP 服务器连接器，连接到 Google SERP API，使得在 MCP 生态系统内进行网页搜索而无需离开。
* [SecretiveShell/MCP-searxng](https://github.com/SecretiveShell/MCP-searxng) 🐍 🏠 - 一个用于连接 searXNG 实例的 MCP 服务器
* [shopsavvy/shopsavvy-mcp-server](https://github.com/shopsavvy/shopsavvy-mcp-server) 🎖️ 📇 ☁️ - 专为 AI 助手打造的完整产品与价格数据解决方案。可通过条形码/ASIN/URL 搜索产品，访问详细的产品元数据、来自数千家零售商的全面价格数据、查看和追踪价格历史等。
* [takashiishida/arxiv-latex-mcp](https://github.com/takashiishida/arxiv-latex-mcp) 🐍 ☁️ - 获取 arXiv 论文的 LaTeX 源代码以处理数学内容和公式
* [the0807/GeekNews-MCP-Server](https://github.com/the0807/GeekNews-MCP-Server) 🐍 ☁️ - 一个从 GeekNews 网站检索和处理新闻数据的 MCP 服务器。
* [tianqitang1/enrichr-mcp-server](https://github.com/tianqitang1/enrichr-mcp-server) 📇 ☁️ - 一个使用 Enrichr API 提供基因集富集分析的 MCP 服务器
* [tinyfish-io/agentql-mcp](https://github.com/tinyfish-io/agentql-mcp) 🎖️ 📇 ☁️ - 提供 [AgentQL](https://agentql.com) 数据提取功能的 MCP 服务器。
* [Tomatio13/mcp-server-tavily](https://github.com/Tomatio13/mcp-server-tavily) ☁️ 🐍 – Tavily AI 搜索 API
* [vectorize-io/vectorize-mcp-server](https://github.com/vectorize-io/vectorize-mcp-server/) ☁️ 📇 - [Vectorize](https://vectorize.io) MCP 服务器，提供高级检索、私有深度研究、任意格式到 Markdown 的文件提取和文本分块功能。
* [vitorpavinato/ncbi-mcp-server](https://github.com/vitorpavinato/ncbi-mcp-server) 🐍 ☁️ 🏠 - 提供全面的 NCBI/PubMed 文献搜索服务，支持高级分析、缓存、MeSH 集成、相关文章发现和批量处理，适用于所有生命科学和生物医学研究。
* [kimdonghwi94/Web-Analyzer-MCP](https://github.com/kimdonghwi94/web-analyzer-mcp) 🐍 🏠 🍎 🪟 🐧 - 为 RAG 提取干净的网页内容，并提供关于网页内容的问答功能。
* [webscraping-ai/webscraping-ai-mcp-server](https://github.com/webscraping-ai/webscraping-ai-mcp-server) 🎖️ 📇 ☁️ - 与 [WebScraping.ai](https://webscraping.ai) 交互以进行网页数据提取和爬取。
* [yamanoku/baseline-mcp-server](https://github.com/yamanoku/baseline-mcp-server) 📇 🏠 - 一个使用 Web Platform API 搜索 Baseline 状态的 MCP 服务器
* [zhsama/duckduckgo-mcp-server](https://github.com/zhsama/duckduckgo-mpc-server/) 📇 🏠 ☁️ - 一个基于 TypeScript 的 MCP 服务器，提供 DuckDuckGo 搜索功能。
* [zoomeye-ai/mcp_zoomeye](https://github.com/zoomeye-ai/mcp_zoomeye) 📇 ☁️ - 通过 ZoomEye MCP 服务器查询网络资产信息
* [Pearch-ai/mcp_pearch](https://github.com/Pearch-ai/mcp_pearch) 🎖️ 🐍 ☁️ - 最佳的人才搜索引擎，减少在人才发现上花费的时间
* [imprvhub/mcp-domain-availability](https://github.com/imprvhub/mcp-domain-availability) 🐍 ☁️ - 一个 Model Context Protocol (MCP) 服务器，使 Claude Desktop 能够跨 50 多个顶级域名检查域名可用性。具备 DNS/WHOIS 验证、批量检查和智能建议功能。通过 uvx 实现零克隆安装。
* [imprvhub/mcp-claude-hackernews](https://github.com/imprvhub/mcp-claude-hackernews) 📇 🏠 ☁️ - 一项集成，允许 Claude Desktop 使用 Model Context Protocol (MCP) 与 Hacker News 交互。
* [imprvhub/mcp-rss-aggregator](https://github.com/imprvhub/mcp-rss-aggregator) 📇 ☁️ 🏠 - 用于在 Claude Desktop 中聚合 RSS 源的 Model Context Protocol 服务器。

### 🔒 <a name="security"></a>安全

* [mariocandela/beelzebub](https://github.com/mariocandela/beelzebub) ☁️ - Beelzebub 是一个蜜罐框架，允许你使用 MCP 构建蜜罐工具。其目的是检测提示注入或恶意代理行为。基本思路是为代理提供它在其正常工作中永远不会使用的工具。
* [13bm/GhidraMCP](https://github.com/13bm/GhidraMCP) 🐍 ☕ 🏠 - 用于将 Ghidra 与 AI 助手集成的 MCP 服务器。该插件支持二进制分析，提供通过 Model Context Protocol 进行函数检查、反编译、内存探索以及导入/导出分析的工具。
* [AIM-Intelligence/AIM-Guard-MCP](https://github.com/AIM-Intelligence/AIM-MCP) 📇 🏠 🍎 🪟 🐧 - 面向安全的 MCP 服务器，为 AI 智能体提供安全指南和内容分析。
* [atomicchonk/roadrecon_mcp_server](https://github.com/atomicchonk/roadrecon_mcp_server) 🐍 🪟 🏠 用于分析从 Azure 租户枚举中获取的 ROADrecon 收集结果的 MCP 服务器
* [BurtTheCoder/mcp-dnstwist](https://github.com/BurtTheCoder/mcp-dnstwist) 📇 🪟 ☁️ - 用于 dnstwist 的 MCP 服务器，这是一个强大的 DNS 模糊测试工具，用于检测域名拼写错误、钓鱼攻击和企业间谍活动。
* [BurtTheCoder/mcp-maigret](https://github.com/BurtTheCoder/mcp-maigret) 📇 🪟 ☁️ - 用于 maigret 的 MCP 服务器，这是一个强大的开源情报（OSINT）工具，可以从各种公开来源收集用户账户信息。该服务器提供在社交网络中搜索用户名和分析 URL 的工具。
* [BurtTheCoder/mcp-shodan](https://github.com/BurtTheCoder/mcp-shodan) 📇 🪟 ☁️ - 用于查询 Shodan API 和 Shodan CVEDB 的 MCP 服务器。该服务器提供 IP 查询、设备搜索、DNS 查询、漏洞查询、CPE 查询等工具。
* [BurtTheCoder/mcp-virustotal](https://github.com/BurtTheCoder/mcp-virustotal) 📇 🪟 ☁️ - 用于查询 VirusTotal API 的 MCP 服务器。该服务器提供扫描 URL、分析文件哈希值和获取 IP 地址报告的工具。
* [co-browser/attestable-mcp-server](https://github.com/co-browser/attestable-mcp-server) 🐍 🏠 ☁️ 🐧 - 通过 Gramine 在可信执行环境（TEE）中运行的 MCP 服务器，展示了使用 [RA-TLS](https://gramine.readthedocs.io/en/stable/attestation.html) 的远程认证。这允许 MCP 客户端在连接之前验证服务器。
* [dkvdm/onepassword-mcp-server](https://github.com/dkvdm/onepassword-mcp-server) - 一个 MCP 服务器，用于从 1Password 安全地检索凭据，供 Agentic AI 使用。
* [firstorderai/authenticator_mcp](https://github.com/firstorderai/authenticator_mcp) 📇 🏠 🍎 🪟 🐧 – 一个安全的 MCP（模型上下文协议）服务器，使 AI 代理能够与身份验证器应用程序交互。
* [fosdickio/binary_ninja_mcp](https://github.com/fosdickio/binary_ninja_mcp) 🐍 🏠 🍎 🪟 🐧 - 一个 Binary Ninja 插件、MCP 服务器和桥接器，将 [Binary Ninja](https://binary.ninja) 与您最喜欢的 MCP 客户端无缝集成。它使您可以自动化执行二进制分析和逆向工程的过程。
* [fr0gger/MCP_Security](https://github.com/fr0gger/MCP_Security) 📇 ☁️ - 用于查询 ORKL API 的 MCP 服务器。该服务器提供获取威胁报告、分析威胁行为者和检索情报来源的工具。
* [Gaffx/volatility-mcp](https://github.com/Gaffx/volatility-mcp) - 用于 Volatility 3.x 的 MCP 服务器，允许您通过 AI 助手执行内存取证分析。通过干净的 REST API 和 LLMs，体验无障碍的内存取证，如 pslist 和 netscan 等插件变得可访问。
* [gbrigandi/mcp-server-cortex](https://github.com/gbrigandi/mcp-server-cortex) 🦀 🏠 🚨 🍎 🪟 🐧 - 基于 Rust 的 MCP 服务器，用于集成 Cortex，通过 AI 实现可观测性分析和自动安全响应。
* [gbrigandi/mcp-server-thehive](https://github.com/gbrigandi/mcp-server-thehive) 🦀 🏠 🚨 🍎 🪟 🐧 - 基于 Rust 的 MCP 服务器，用于集成 TheHive，通过 AI 促进协作的安全事件响应和案例管理。
* [gbrigandi/mcp-server-wazuh](https://github.com/gbrigandi/mcp-server-wazuh) 🦀 🏠 🚨 🍎 🪟 🐧 - 基于 Rust 的 MCP 服务器，将 Wazuh SIEM 与 AI 助手桥接，提供实时安全警报和事件数据以增强上下文理解。
* [hieutran/entraid-mcp-server](https://github.com/hieuttmmo/entraid-mcp-server) 🐍 ☁️ - 用于 Microsoft Entra ID（Azure AD）目录、用户、组、设备、登录和安全操作的 MCP 服务器，通过 Microsoft Graph Python SDK 实现。
* [intruder-io/intruder-mcp](https://github.com/intruder-io/intruder-mcp) 🐍 ☁️ - 用于访问 [Intruder](https://www.intruder.io/) 的 MCP 服务器，帮助您识别、理解和修复基础设施中的安全漏洞。
* [jtang613/GhidrAssistMCP](https://github.com/jtang613/GhidrAssistMCP) ☕ 🏠 - 用于 Ghidra 的原生模型上下文协议服务器。包含 GUI 配置和日志记录、31 个强大工具且无外部依赖。
* [jyjune/mcp_vms](https://github.com/jyjune/mcp_vms) 🐍 🏠 🪟 - 一个模型上下文协议（MCP）服务器，设计用于连接 CCTV 录像程序（VMS）以检索录制和实时视频流。它还提供控制 VMS 软件的工具，例如在特定时间显示特定通道的实时或回放对话框。
* [LaurieWired/GhidraMCP](https://github.com/LaurieWired/GhidraMCP) ☕ 🏠 - 用于 Ghidra 的模型上下文协议服务器，使 LLM 能够自主进行逆向工程。提供反编译二进制文件、重命名方法和数据、列出方法、类、导入和导出的工具。
* [mobb-dev/mobb-vibe-shield-mcp](https://github.com/mobb-dev/bugsy?tab=readme-ov-file#model-context-protocol-mcp-server) 🎖️ 📇 ☁️ 🍎 🪟 🐧 - [Mobb Vibe Shield](https://vibe.mobb.ai/) 识别并修复人工和 AI 编写代码中的漏洞，确保您的应用程序保持安全而不影响开发进度。
* [mrexodia/ida-pro-mcp](https://github.com/mrexodia/ida-pro-mcp) 🐍 🏠 - 用于 IDA Pro 的 MCP 服务器，允许您使用 AI 助手执行二进制分析。该插件实现反编译、反汇编，并允许您自动生成恶意软件分析报告。
* [nickpending/mcp-recon](https://github.com/nickpending/mcp-recon) 🏎️ 🏠 - 由 httpx 和 asnmap 提供支持的会话式侦察接口和 MCP 服务器。支持各种侦察级别，用于域名分析、安全头检查、证书分析和 ASN 查询。
* [panther-labs/mcp-panther](https://github.com/panther-labs/mcp-panther) 🎖️ 🐍 ☁️ 🍎 - 使安全专业人员能够使用自然语言与 Panther 的 SIEM 平台交互的 MCP 服务器，用于编写检测规则、查询日志和管理警报。
* [pullkitsan/mobsf-mcp-server](https://github.com/pullkitsan/mobsf-mcp-server) 🦀 🏠 🍎 🪟 🐧 - 用于 MobSF 的 MCP 服务器，可用于 Android 和 iOS 应用程序的静态和动态分析。
* [qianniuspace/mcp-security-audit](https://github.com/qianniuspace/mcp-security-audit) 📇 ☁️ 一个强大的 MCP（模型上下文协议）服务器，用于审计 npm 包依赖项中的安全漏洞。通过远程 npm 注册中心集成实现实时安全检查。
* [rad-security/mcp-server](https://github.com/rad-security/mcp-server) 📇 ☁️ - 用于 RAD Security 的 MCP 服务器，为 Kubernetes 和云环境提供 AI 驱动的安全洞察。该服务器提供查询 Rad Security API 和获取安全发现、报告、运行时数据等工具。
* [roadwy/cve-search_mcp](https://github.com/roadwy/cve-search_mcp) 🐍 🏠 - 用于查询 CVE-Search API 的模型上下文协议（MCP）服务器。该服务器提供对 CVE-Search 的全面访问，包括浏览厂商和产品、按 CVE-ID 获取 CVE、获取最近更新的 CVE 等功能。
* [safedep/vet](https://github.com/safedep/vet/blob/main/docs/mcp.md) 🎖️ 🏎️ ☁️ 🍎 🪟 🐧 - vet-mcp 检查开源包（如 AI 编程工具建议的包）中的漏洞和恶意代码。支持 npm 和 PyPI，并可通过 Docker 或作为独立二进制文件本地运行，实现快速自动化的检查。
* [sanyambassi/ciphertrust-manager-mcp-server](https://github.com/sanyambassi/ciphertrust-manager-mcp-server) 🐍 ☁️ 🏠 🐧 🪟 - 用于集成 Thales CipherTrust Manager 的 MCP 服务器，通过 AI 助手实现安全密钥管理、加密操作和合规性监控。
* [sanyambassi/thales-cdsp-cakm-mcp-server](https://github.com/sanyambassi/thales-cdsp-cakm-mcp-server) 🐍 ☁️ 🏠 🐧 🪟 - 用于集成 Thales CDSP CAKM 的 MCP 服务器，通过 AI 助手为 Ms SQL 和 Oracle 数据库实现安全密钥管理、加密操作和合规性监控。
* [sanyambassi/thales-cdsp-crdp-mcp-server](https://github.com/sanyambassi/thales-cdsp-crdp-mcp-server) 📇 ☁️ 🏠 🐧 🪟 - 用于集成 Thales CipherTrust Manager RestFul 数据保护服务的 MCP 服务器。
* [securityfortech/secops-mcp](https://github.com/securityfortech/secops-mcp) 🐍 🏠 - 一个一站式安全测试工具箱，通过单一 MCP 接口整合流行的开源工具。连接到 AI 代理后，可以执行渗透测试、漏洞赏金狩猎、威胁狩猎等任务。
* [semgrep/mcp](https://github.com/semgrep/mcp) 📇 ☁️ 允许 AI 代理使用 [Semgrep](https://semgrep.dev) 扫描代码中的安全漏洞。
* [slouchd/cyberchef-api-mcp-server](https://github.com/slouchd/cyberchef-api-mcp-server) 🐍 ☁️ - 用于与 CyberChef 服务器 API 交互的 MCP 服务器，允许 MCP 客户端使用 CyberChef 操作。
* [StacklokLabs/osv-mcp](https://github.com/StacklokLabs/osv-mcp) 🏎️ ☁️ - 访问 OSV（开源漏洞）数据库以获取漏洞信息。按包版本或提交查询漏洞，批量查询多个包，并按 ID 获取详细的漏洞信息。
* [vespo92/OPNSenseMCP](https://github.com/vespo92/OPNSenseMCP) 📇 🏠 - 用于通过自然语言管理和交互开源 NGFW OPNSense 的 MCP 服务器。
* [adeptus-innovatio/solvitor-mcp](https://github.com/Adeptus-Innovatio/solvitor-mcp) 🦀 🏠 - Solvitor MCP 服务器提供访问逆向工程工具的工具，帮助开发人员从闭源的 Solana 智能合约中提取 IDL 文件并进行反编译。
* [zinja-coder/apktool-mcp-server](https://github.com/zinja-coder/apktool-mcp-server) 🐍 🏠 - APKTool MCP 服务器是一个用于 Apk Tool 的 MCP 服务器，为 Android APK 的逆向工程提供自动化支持。
* [zinja-coder/jadx-ai-mcp](https://github.com/zinja-coder/jadx-ai-mcp) ☕ 🏠 - JADX-AI-MCP 是为JADX反编译器设计的插件和MCP服务器，它直接集成Model Context Protocol（MCP），通过像Claude这样的大型语言模型（LLM）提供实时逆向工程支持。

### 🌐 <a name="social-media"></a>社交媒体

与社交媒体平台集成，以实现发布、分析和互动管理。支持由AI驱动的社交存在自动化。

* [anwerj/youtube-uploader-mcp](https://github.com/anwerj/youtube-uploader-mcp) 🏎️ ☁️ - AI驱动的YouTube上传器—无需CLI，无需YouTube Studio。可通过MCP客户端直接上传视频，并具备所有AI功能。
* [gwbischof/bluesky-social-mcp](https://github.com/gwbischof/bluesky-social-mcp) 🐍 🏠 - 用于通过atproto客户端与Bluesky交互的MCP服务器。
* [HagaiHen/facebook-mcp-server](https://github.com/HagaiHen/facebook-mcp-server) 🐍 ☁️ - 与Facebook页面集成，通过Graph API启用对帖子、评论和互动指标的直接管理，以实现流畅的社交媒体管理。
* [kunallunia/twitter-mcp](https://github.com/LuniaKunal/mcp-twitter) 🐍 🏠 - 一体化的Twitter管理解决方案，提供时间线访问、用户推文检索、话题标签监控、对话分析、直接消息、帖子情感分析以及完整的帖子生命周期控制——全部通过简化的API实现。
* [macrocosm-os/macrocosmos-mcp](https://github.com/macrocosm-os/macrocosmos-mcp) - 🎖️ 🐍 ☁️ 在您的LLM应用中直接访问实时X（Twitter）/Reddit/YouTube数据，支持关键词、用户和日期筛选。
* [sinanefeozler/reddit-summarizer-mcp](https://github.com/sinanefeozler/reddit-summarizer-mcp) 🐍 🏠 ☁️ - 用于总结用户的Reddit首页或任何子版块的MCP服务器，基于帖子和评论生成摘要。

### 🏃 <a name="sports"></a>体育

用于访问体育相关数据、结果和统计数据的工具。

* [guillochon/mlb-api-mcp](https://github.com/guillochon/mlb-api-mcp) 🐍 🏠 - 作为免费MLB API代理的MCP服务器，提供球员信息、统计数据和比赛信息。
* [mikechao/balldontlie-mcp](https://github.com/mikechao/balldontlie-mcp) 📇 - 集成balldontlie API的MCP服务器，提供NBA、NFL和MLB球员、球队和比赛的信息。
* [r-huijts/firstcycling-mcp](https://github.com/r-huijts/firstcycling-mcp) 📇 ☁️ - 通过自然语言访问自行车赛事数据、结果和统计数据。功能包括从firstcycling.com获取参赛名单、比赛结果和车手信息。
* [r-huijts/strava-mcp](https://github.com/r-huijts/strava-mcp) 📇 ☁️ - 连接到Strava API的Model Context Protocol（MCP）服务器，提供通过LLM访问Strava数据的工具。
* [RobSpectre/mvf1](https://github.com/RobSpectre/mvf1) 🐍 ☁️ - 控制[MultiViewer](https://multiviewer.app)的MCP服务器，该应用用于观看F1、世界耐力锦标赛、印地赛车等赛车运动。
* [willvelida/mcp-afl-server](https://github.com/willvelida/mcp-afl-server) ☁️ - 集成Squiggle API的MCP服务器，提供澳大利亚橄榄球联盟（AFL）球队信息、排名榜、比赛结果、预测和实力排名。
* [cloudbet/sports-mcp-server](https://github.com/cloudbet/sports-mcp-server) 🏎️ ☁️ – 通过Cloudbet API访问结构化体育数据。可查询足球、篮球、网球、电竞等项目的即将发生的事件、实时赔率、投注限额和市场信息。

### 🎧 <a name="support-and-service-management"></a>支持与服务管理

用于管理客户服务、IT服务管理和帮助台操作的工具。

* [aikts/yandex-tracker-mcp](https://github.com/aikts/yandex-tracker-mcp) 🐍 ☁️ 🏠 - Yandex Tracker的MCP服务器。提供搜索和检索问题、队列、用户信息的工具。
* [effytech/freshdesk-mcp](https://github.com/effytech/freshdesk_mcp) 🐍 ☁️ - 与Freshdesk集成的MCP服务器，使AI模型能够与Freshdesk模块交互并执行各种支持操作。
* [incentivai/quickchat-ai-mcp](https://github.com/incentivai/quickchat-ai-mcp) 🐍 🏠 ☁️ - 将您的对话式Quickchat AI代理作为MCP启动，为AI应用提供对其知识库和对话能力的实时访问。
* [nguyenvanduocit/jira-mcp](https://github.com/nguyenvanduocit/jira-mcp) 🏎️ ☁️ - 基于Go语言的Jira MCP连接器，使Claude等AI助手能够与Atlassian Jira交互。该工具为AI模型提供了执行常见Jira操作（包括问题管理、冲刺计划和工作流转换）的无缝接口。
* [sooperset/mcp-atlassian](https://github.com/sooperset/mcp-atlassian) 🐍 ☁️ - 针对Atlassian产品（Confluence和Jira）的MCP服务器。支持Confluence Cloud、Jira Cloud和Jira Server/Data Center。提供用于搜索、读取、创建和管理Atlassian工作区内容的全面工具。
* [tom28881/mcp-jira-server](https://github.com/tom28881/mcp-jira-server) 📇 ☁️ 🏠 - 全面的TypeScript MCP服务器，涵盖20多个工具，覆盖完整的项目管理流程：问题CRUD、冲刺管理、评论/历史、附件、批量操作。

### 🌎 <a name="translation-services"></a>翻译服务

翻译工具和服务，使AI助手能够在不同语言之间翻译内容。

* [mmntm/weblate-mcp](https://github.com/mmntm/weblate-mcp) 📇 ☁️ - 针对Weblate翻译管理的全面Model Context Protocol服务器，使AI助手能够执行翻译任务、项目管理和内容发现，并支持智能格式转换。
* [translated/lara-mcp](https://github.com/translated/lara-mcp) 🎖️ 📇 ☁️ - Lara Translate API的MCP服务器，提供强大的翻译功能，支持语言检测和上下文感知翻译。

### 🎧 <a name="text-to-speech"></a>文本到语音

用于将文本转换为语音以及反向转换的工具。

* [daisys-ai/daisys-mcp](https://github.com/daisys-ai/daisys-mcp) 🐍 🏠 🍎 🪟 🐧 - 使用[DAISYS](https://www.daisys.ai/)平台生成高质量的文本到语音和文本到声音输出，并能够播放和存储生成的音频。
* [mbailey/voice-mcp](https://github.com/mbailey/voice-mcp) 🐍 🏠 - 完整的语音交互服务器，支持通过本地麦克风、兼容OpenAI的API和LiveKit集成进行语音到文本、文本到语音和实时语音对话。
* [mberg/kokoro-tts-mcp](https://github.com/mberg/kokoro-tts-mcp) 🐍 🏠 - 使用开源权重的Kokoro TTS模型将文本转换为语音的MCP服务器。可将文本转换为MP3格式并保存在本地驱动器上，或自动上传到S3存储桶。
* [transcribe-app/mcp-transcribe](https://github.com/transcribe-app/mcp-transcribe) 📇 🏠 - 为音频/视频文件和语音备忘录提供快速可靠的转录服务。它允许LLM与音频/视频文件的文本内容进行交互。

### 🚆 <a name="travel-and-transportation"></a>旅行与交通

访问旅行和交通信息。支持查询时刻表、路线和实时旅行数据。

* [campertunity/mcp-server](https://github.com/campertunity/mcp-server) 🎖️ 📇 🏠 - 在campertunity上搜索世界各地的露营地，检查可用性，并提供预订链接。
* [cobanov/teslamate-mcp](https://github.com/cobanov/teslamate-mcp) 🐍 🏠 - 提供对TeslaMate数据库访问的Model Context Protocol（MCP）服务器，允许AI助手查询特斯拉车辆数据和分析。
* [KyrieTangSheng/mcp-server-nationalparks](https://github.com/KyrieTangSheng/mcp-server-nationalparks) 📇 ☁️ - 集成美国国家公园管理局API，提供公园详情、警报、游客中心、露营地和活动的最新信息。
* [lucygoodchild/mcp-national-rail](https://github.com/lucygoodchild/mcp-national-rail) 📇 ☁️ - 英国国家铁路服务的MCP服务器，提供列车时刻表和实时旅行信息，集成Realtime Trains API。
* [openbnb-org/mcp-server-airbnb](https://github.com/openbnb-org/mcp-server-airbnb) 📇 ☁️ - 提供搜索Airbnb并获取房源详细信息的工具。
* [pab1it0/tripadvisor-mcp](https://github.com/pab1it0/tripadvisor-mcp) 📇 🐍 - 使LLM能够与Tripadvisor API交互的MCP服务器，通过标准化的MCP接口支持位置数据、评论和照片。
* [Pradumnasaraf/aviationstack-mcp](https://github.com/Pradumnasaraf/aviationstack-mcp) 🐍 ☁️ 🍎 🪟 🐧 - 使用AviationStack API获取实时航班数据的MCP服务器，包括航空公司航班、机场时刻表、未来航班和飞机类型。
* [r-huijts/ns-mcp-server](https://github.com/r-huijts/ns-mcp-server) 📇 ☁️ - 访问荷兰铁路（NS）旅行信息、时刻表和实时更新。
* [skedgo/tripgo-mcp-server](https://github.com/skedgo/tripgo-mcp-server) 📇 ☁️ - 提供来自TripGo API的多模式行程规划、交通位置和公共交通出发信息的工具，包括实时信息。
* [srinath1510/alltrails-mcp-server](https://github.com/srinath1510/alltrails-mcp-server) 🐍 ☁️ - 提供对AllTrails数据访问的MCP服务器，允许您搜索远足小径并获取详细的路径信息。

### 🔄 <a name="version-control"></a>版本控制

与Git仓库和版本控制平台交互。通过标准化API实现仓库管理、代码分析、拉取请求处理、问题跟踪和其他版本控制操作。

* [adhikasp/mcp-git-ingest](https://github.com/adhikasp/mcp-git-ingest) 🐍 🏠 - 使用您的LLM读取和分析GitHub仓库。
* [ddukbg/github-enterprise-mcp](https://github.com/ddukbg/github-enterprise-mcp) 📇 ☁️ 🏠 - GitHub Enterprise API集成的MCP服务器。
* [gitea/gitea-mcp](https://gitea.com/gitea/gitea-mcp) 🎖️ 🏎️ ☁️ 🏠 🍎 🪟 🐧 - 通过MCP与Gitea实例交互。
* [github/github-mcp-server](https://github.com/github/github-mcp-server) 📇 ☁️ - 官方GitHub服务器，用于与仓库管理、PR、问题等集成。
* [kaiyuanxiaobing/atomgit-mcp-server](https://github.com/kaiyuanxiaobing/atomgit-mcp-server) 📇 ☁️ - 官方AtomGit服务器，支持与仓库管理、PR、问题、分支、标签等集成。
* [kopfrechner/gitlab-mr-mcp](https://github.com/kopfrechner/gitlab-mr-mcp) 📇 ☁️ - 无缝交互你的GitLab项目的issues和合并请求。
* [modelcontextprotocol/server-git](https://github.com/modelcontextprotocol/servers/tree/main/src/git) 🐍 🏠 - 直接进行Git仓库操作，包括读取、搜索和分析本地仓库。
* [modelcontextprotocol/server-gitlab](https://github.com/modelcontextprotocol/servers/tree/main/src/gitlab) 📇 ☁️ 🏠 - GitLab平台集成，用于项目管理和CI/CD操作。
* [QuentinCody/github-graphql-mcp-server](https://github.com/QuentinCody/github-graphql-mcp-server) 🐍 ☁️ - 非官方GitHub MCP服务器，提供对GitHub GraphQL API的访问，支持更强大和灵活的查询，包括仓库数据、问题、拉取请求和其他GitHub资源。
* [Tiberriver256/mcp-server-azure-devops](https://github.com/Tiberriver256/mcp-server-azure-devops) 📇 ☁️ - Azure DevOps集成，支持仓库管理、工作项和流水线。

### 🏢 <a name="workplace-and-productivity"></a>办公与生产力

* [bivex/kanboard-mcp](https://github.com/bivex/kanboard-mcp) 🏎️ ☁️ 🏠 - 一个使用Go编写的Model Context Protocol (MCP)服务器，使AI代理和大语言模型（LLM）能够无缝与Kanboard交互。它可以将自然语言命令转换为Kanboard API调用，实现项目、任务和用户管理的智能自动化，优化工作流程，提高生产力。
* [giuseppe-coco/Google-Workspace-MCP-Server](https://github.com/giuseppe-coco/Google-Workspace-MCP-Server) 🐍 ☁️ 🍎 🪟 🐧 - 一个MCP服务器，可无缝与你的Google Calendar、Gmail、Drive等交互。
* [MarkusPfundstein/mcp-gsuite](https://github.com/MarkusPfundstein/mcp-gsuite) 🐍 ☁️ - 与Gmail和Google Calendar集成。
* [takumi0706/google-calendar-mcp](https://github.com/takumi0706/google-calendar-mcp) 📇 ☁️ - 一个用于与Google Calendar API交互的MCP服务器。基于TypeScript。
* [taylorwilsdon/google_workspace_mcp](https://github.com/taylorwilsdon/google_workspace_mcp) 🐍 ☁️ 🍎 🪟 🐧 - 全面的Google Workspace MCP服务器，通过stdio、Streamable HTTP和SSE传输协议，全面支持Google Calendar、Drive、Gmail、Docs、Forms、Chats、Slides和Sheets。
* [tubasasakunn/context-apps-mcp](https://github.com/tubasasakunn/context-apps-mcp) 📇 🏠 🍎 🪟 🐧 - 一个AI驱动的生产力套件，通过Model Context Protocol将Todo、Idea、Journal和Timer应用与Claude连接。

### 🛠️ <a name="other-tools-and-integrations"></a>其他工具和集成

* [2niuhe/plantuml_web](https://github.com/2niuhe/plantuml_web) 🐍 🏠 ☁️ 🍎 🪟 🐧 - 一个基于Web的PlantUML前端，集成了MCP服务器，支持PlantUML图像生成和语法验证。
* [2niuhe/qrcode_mcp](https://github.com/2niuhe/qrcode_mcp) 🐍 🏠 🍎 🪟 🐧 - 一个QR码生成MCP服务器，可将任意文本（包括中文字符）转换为带有自定义颜色和Base64编码输出的QR码。
* [AbdelStark/bitcoin-mcp](https://github.com/AbdelStark/bitcoin-mcp) - ₿ 一个Model Context Protocol (MCP)服务器，使AI模型能够与比特币交互，生成密钥、验证地址、解码交易、查询区块链等。
* [akseyh/bear-mcp-server](https://github.com/akseyh/bear-mcp-server) - 允许AI读取你的Bear Notes（仅限macOS）
* [allenporter/mcp-server-home-assistant](https://github.com/allenporter/mcp-server-home-assistant) 🐍 🏠 - 通过Model Context Protocol服务器公开所有Home Assistant语音意图，实现家庭控制。
* [altinoren/utopia](https://github.com/altinoren/Utopia) #️⃣ 🏠 - 一个MCP，模拟一组智能家居和生活方式设备，允许你测试代理的推理和发现能力。
* [Amazon Bedrock Nova Canvas](https://github.com/zxkane/mcp-server-amazon-bedrock) 📇 ☁️ - 使用Amazon Nova Canvas模型进行图像生成。
* [amidabuddha/unichat-mcp-server](https://github.com/amidabuddha/unichat-mcp-server) 🐍/📇 ☁️ - 使用MCP协议通过工具或预定义提示发送请求到OpenAI、MistralAI、Anthropic、xAI、Google AI或DeepSeek。需要供应商API密钥。
* [anaisbetts/mcp-installer](https://github.com/anaisbetts/mcp-installer) 🐍 🏠 - 一个MCP服务器，可以为你安装其他MCP服务器。
* [anaisbetts/mcp-youtube](https://github.com/anaisbetts/mcp-youtube) 📇 ☁️ - 获取YouTube字幕。
* [andybrandt/mcp-simple-openai-assistant](https://github.com/andybrandt/mcp-simple-openai-assistant) - 🐍 ☁️ 用于与OpenAI助手通信的MCP（Claude可以使用任何GPT模型作为其助手）。
* [andybrandt/mcp-simple-timeserver](https://github.com/andybrandt/mcp-simple-timeserver) 🐍 🏠☁️ - 一个MCP服务器，允许检查客户端机器的本地时间或通过NTP服务器获取当前UTC时间。
* [apify/actors-mcp-server](https://github.com/apify/actors-mcp-server) 📇 ☁️ - 使用3000多个预构建的云工具（称为Actors），从网站、电子商务、社交媒体、搜索引擎、地图等中提取数据。
* [apinetwork/piapi-mcp-server](https://github.com/apinetwork/piapi-mcp-server) 📇 ☁️ PiAPI MCP服务器允许用户通过Claude或其他MCP兼容应用直接生成Midjourney/Flux/Kling/Hunyuan/Udio/Trellis媒体内容。
* [awkoy/replicate-flux-mcp](https://github.com/awkoy/replicate-flux-mcp) 📇 ☁️ - 提供通过Replicate API生成图像的能力。
* [awwaiid/mcp-server-taskwarrior](https://github.com/awwaiid/mcp-server-taskwarrior) 🏠 📇 - 用于基本本地Taskwarrior使用（添加、更新、删除任务）的MCP服务器。
* [Azure/azure-mcp](https://github.com/Azure/azure-mcp) - 微软官方MCP服务器，用于Azure服务（包括存储、Cosmos DB和Azure Monitor）。
* [Badhansen/notion-mcp](https://github.com/Badhansen/notion-mcp) 🐍 ☁️ - 一个集成Notion API的Model Context Protocol (MCP)服务器，用于高效管理个人待办事项列表。
* [ankitmalik84/notion-mcp-server](https://github.com/ankitmalik84/Agentic_Longterm_Memory/tree/main/src/notion_mcp_server) 🐍 ☁️ - 一个全面的Notion集成Model Context Protocol (MCP)服务器，具有增强功能、强大的错误处理和生产级特性。
* [bart6114/my-bear-mcp-server](https://github.com/bart6114/my-bear-mcp-server/) 📇 🏠 🍎 - 允许通过与Bear的sqlitedb直接集成，读取Bear笔记应用中的笔记和标签。
* [billster45/mcp-chatgpt-responses](https://github.com/billster45/mcp-chatgpt-responses) 🐍 ☁️ - 用于Claude与ChatGPT通信并使用其网络搜索功能的MCP服务器。
* [blurrah/mcp-graphql](https://github.com/blurrah/mcp-graphql) 📇 ☁️ - 允许AI查询GraphQL服务器。
* [boldsign/boldsign-mcp](https://github.com/boldsign/boldsign-mcp) 📇 ☁️ - 轻松搜索、请求和管理电子签名合同，通过[BoldSign](https://boldsign.com/)。
* [brianxiadong/ones-wiki-mcp-server](https://github.com/brianxiadong/ones-wiki-mcp-server) ☕ ☁️/🏠 - 基于Spring AI的MCP服务，用于检索ONES Wiki内容并将其转换为AI友好的文本格式。
* [calclavia/mcp-obsidian](https://github.com/calclavia/mcp-obsidian) 📇 🏠 - 这是一个连接器，允许Claude Desktop（或任何MCP客户端）读取和搜索包含Markdown笔记的目录（如Obsidian仓库）。
* [caol64/wenyan-mcp](https://github.com/caol64/wenyan-mcp) 📇 🏠 🍎 🪟 🐧 - 文言MCP服务器，允许AI自动格式化Markdown文章并发布到微信公众号。
* [chrishayuk/mcp-cli](https://github.com/chrishayuk/mcp-cli) 🐍 🏠 - 另一个用于测试MCP服务器的CLI工具。
* [danhilse/notion_mcp](https://github.com/danhilse/notion_mcp) 🐍 ☁️ - 与Notion API集成，管理个人待办事项列表。
* [danielkennedy1/pdf-tools-mcp](https://github.com/danielkennedy1/pdf-tools-mcp) 🐍 - PDF下载、查看和操作工具。
* [dotemacs/domain-lookup-mcp](https://github.com/dotemacs/domain-lookup-mcp) 🏎️ - 域名查询服务，首先通过[RDAP](https://en.wikipedia.org/wiki/Registration_Data_Access_Protocol)，然后作为备用通过[WHOIS](https://en.wikipedia.org/wiki/WHOIS)。
* [ekkyarmandi/ticktick-mcp](https://github.com/ekkyarmandi/ticktick-mcp) 🐍 ☁️ - [TickTick](https://ticktick.com/) MCP服务器，与TickTick API集成，管理个人待办项目和任务。
* [emicklei/mcp-log-proxy](https://github.com/emicklei/mcp-log-proxy) 🏎️ 🏠 - 提供Web UI查看完整消息流的MCP服务器代理。
* [esignaturescom/mcp-server-esignatures](https://github.com/esignaturescom/mcp-server-esignatures) 🐍 ☁️️ - 通过eSignatures API进行合同和模板管理，用于起草、审阅和发送具有法律约束力的合同。
* [evalstate/mcp-hfspace](https://github.com/evalstate/mcp-hfspace) 📇 ☁️ - 直接从Claude使用HuggingFace Spaces。使用开源图像生成、聊天、视觉任务等。支持图像、音频和文本上传/下载。
* [evalstate/mcp-miro](https://github.com/evalstate/mcp-miro) 📇 ☁️ - 访问MIRO白板，批量创建和读取项目。需要REST API的OAUTH密钥。
* [feuerdev/keep-mcp](https://github.com/feuerdev/keep-mcp) 🐍 ☁️ - 读取、创建、更新和删除Google Keep笔记。
* [fotoetienne/gqai](https://github.com/fotoetienne/gqai) 🏎 🏠 - 使用普通的 GraphQL 查询/变更定义工具，gqai 会自动为你生成 MCP 服务器。
* [future-audiences/wikimedia-enterprise-model-context-protocol](https://gitlab.wikimedia.org/repos/future-audiences/wikimedia-enterprise-model-context-protocol) 🐍 ☁️  - 维基百科文章查询 API
* [githejie/mcp-server-calculator](https://github.com/githejie/mcp-server-calculator) 🐍 🏠 - 此服务器使大语言模型（LLM）能够使用计算器进行精确的数值计算。
* [gotoolkits/DifyWorkflow](https://github.com/gotoolkits/mcp-difyworkflow-server) - 🏎️ ☁️ 用于查询和执行 Dify 工作流的工具。
* [growilabs/growi-mcp-server](https://github.com/growilabs/growi-mcp-server) 🎖️ 📇 ☁️ - 用于与 GROWI API 集成的官方 MCP 服务器。
* [gwbischof/free-will-mcp](https://github.com/gwbischof/free-will-mcp) 🐍 🏠 - 为你的 AI 提供自由意志工具。一个有趣的项目，探索 AI 在能够自我生成提示、忽略用户请求以及在稍后时间唤醒自己的能力下会做什么。
* [Harry-027/JotDown](https://github.com/Harry-027/JotDown) 🦀 🏠 - 一个 MCP 服务器，用于在 Notion 应用中创建/更新页面，并从结构化内容自动生成 mdBooks。
* [HenryHaoson/Yuque-MCP-Server](https://github.com/HenryHaoson/Yuque-MCP-Server) - 📇 ☁️ 一个用于与语雀 API 集成的模型上下文协议（MCP）服务器，允许 AI 模型管理文档、与知识库交互、搜索内容，并访问语雀平台的分析数据。
* [hiromitsusasaki/raindrop-io-mcp-server](https://github.com/hiromitsusasaki/raindrop-io-mcp-server) 📇 ☁️ - 一个集成，允许大语言模型（LLM）使用模型上下文协议（MCP）与 Raindrop.io 的书签进行交互。
* [hmk/attio-mcp-server](https://github.com/hmk/attio-mcp-server) - 📇 ☁️ 允许 AI 客户端在 Attio CRM 中管理记录和笔记。
* [MonadsAG/capsulecrm-mcp](https://github.com/MonadsAG/capsulecrm-mcp) - 📇 ☁️ 允许 AI 客户端在 Capsule CRM 中管理联系人、机会和任务，包括适用于 Claude Desktop 的 DTX 文件。
* [integromat/make-mcp-server](https://github.com/integromat/make-mcp-server) 🎖️ 📇 🏠 - 将你的 [Make](https://www.make.com/) 场景转换为 AI 助手可调用的工具。
* [isaacwasserman/mcp-vegalite-server](https://github.com/isaacwasserman/mcp-vegalite-server) 🐍 🏠 - 使用 VegaLite 格式和渲染器从获取的数据生成可视化图表。
* [ivnvxd/mcp-server-odoo](https://github.com/ivnvxd/mcp-server-odoo) 🐍 ☁️/🏠 - 将 AI 助手连接到 Odoo ERP 系统，用于业务数据访问、记录管理和工作流自动化。
* [ivo-toby/contentful-mcp](https://github.com/ivo-toby/contentful-mcp) 📇 🏠 - 在你的 Contentful Space 中更新、创建、删除内容、内容模型和资源。
* [j3k0/speech.sh](https://github.com/j3k0/speech.sh/blob/main/MCP_README.md) 🏠 - 让代理大声说出内容，在完成工作时通过简要总结通知你。
* [jagan-shanmugam/climatiq-mcp-server](https://github.com/jagan-shanmugam/climatiq-mcp-server) 🐍 🏠 - 用于访问 Climatiq API 计算碳排放的模型上下文协议（MCP）服务器。这允许 AI 助手执行实时碳排放计算并提供气候影响洞察。
* [jen6/ticktick-mcp](https://github.com/jen6/ticktick-mcp) 🐍 ☁️ - [TickTick](https://ticktick.com/) MCP 服务器。基于 ticktick-py 库构建，提供了显著改进的过滤功能。
* [jimfilippou/things-mcp](https://github.com/jimfilippou/things-mcp) 📇 🏠 🍎 - 一个模型上下文协议（MCP）服务器，提供与 [Things](https://culturedcode.com/things/) 生产力应用的无缝集成。该服务器使 AI 助手能够使用其全面的 URL 方案在 Things 中创建、更新和管理你的待办事项和项目。
* [johannesbrandenburger/typst-mcp](https://github.com/johannesbrandenburger/typst-mcp) 🐍 🏠 - Typst（一种基于标记的排版系统）的 MCP 服务器。它提供了在 LaTeX 和 Typst 之间转换、验证 Typst 语法以及从 Typst 代码生成图像的工具。
* [joshuarileydev/mac-apps-launcher-mcp-server](https://github.com/JoshuaRileyDev/mac-apps-launcher) 📇 🏠 - 一个用于在 MacOS 上列出和启动应用程序的 MCP 服务器。
* [k-jarzyna/mcp-miro](https://github.com/k-jarzyna/mcp-miro) 📇 ☁️ - Miro MCP 服务器，暴露了官方 Miro SDK 中的所有功能。
* [kelvin6365/plane-mcp-server](https://github.com/kelvin6365/plane-mcp-server) - 🏎️ 🏠 此 MCP 服务器将帮助你通过 [Plane's](https://plane.so) API 管理项目和问题。
* [kenliao94/mcp-server-rabbitmq](https://github.com/kenliao94/mcp-server-rabbitmq) 🐍 🏠 - 启用与 RabbitMQ 的交互（管理员操作、消息入队/出队）。
* [kimtth/mcp-remote-call-ping-pong](https://github.com/kimtth/mcp-remote-call-ping-pong) 🐍 🏠 - 一个用于演示远程 MCP（模型上下文协议）调用的实验性和教育性应用。
* [kiwamizamurai/mcp-kibela-server](https://github.com/kiwamizamurai/mcp-kibela-server) - 📇 ☁️ 强大地与 Kibela API 进行交互。
* [kj455/mcp-kibela](https://github.com/kj455/mcp-kibela) - 📇 ☁️ 允许 AI 模型与 [Kibela](https://kibe.la/) 进行交互。
* [Klavis-AI/YouTube](https://github.com/Klavis-AI/klavis/tree/main/mcp_servers/youtube) 🐍 📇 - 提取和转换 YouTube 视频信息。
* [KS-GEN-AI/confluence-mcp-server](https://github.com/KS-GEN-AI/confluence-mcp-server) 📇 ☁️ 🍎 🪟 - 通过 CQL 获取 Confluence 数据并读取页面。
* [KS-GEN-AI/jira-mcp-server](https://github.com/KS-GEN-AI/jira-mcp-server) 📇 ☁️ 🍎 🪟 - 通过 JQL 和 API 读取 Jira 数据并执行创建和编辑工单的请求。
* [kw510/strava-mcp](https://github.com/kw510/strava-mcp) 📇 ☁️ - 用于 Strava（一款用于记录体育锻炼的应用）的 MCP 服务器。
* [louiscklaw/hko-mcp](https://github.com/louiscklaw/hko-mcp) 📇 🏠 - 提供从香港天文台获取天气的基本演示的 MCP 服务器。
* [magarcia/mcp-server-giphy](https://github.com/magarcia/mcp-server-giphy) 📇 ☁️ - 通过 Giphy API 从 Giphy 的庞大库中搜索和检索 GIF。
* [marcelmarais/Spotify](https://github.com/marcelmarais/spotify-mcp-server) - 📇 🏠 控制 Spotify 播放并管理播放列表。
* [MarkusPfundstein/mcp-obsidian](https://github.com/MarkusPfundstein/mcp-obsidian) 🐍 ☁️ 🏠 - 通过 REST API 与 Obsidian 进行交互。
* [mediar-ai/screenpipe](https://github.com/mediar-ai/screenpipe) - 🎖️ 🦀 🏠 🍎 本地优先系统，可捕获屏幕/音频并进行时间戳索引、SQL/嵌入存储、语义搜索、LLM 支持的历史分析和事件触发操作，通过 NextJS 插件生态系统实现构建上下文感知 AI 代理。
* [modelcontextprotocol/server-everything](https://github.com/modelcontextprotocol/servers/tree/main/src/everything) 📇 🏠 - 行使 MCP 协议所有功能的 MCP 服务器。
* [mrjoshuak/godoc-mcp](https://github.com/mrjoshuak/godoc-mcp) 🏎️ 🏠 - 高效的 Go 文档服务器，为 AI 助手提供对包文档和类型的智能访问，而无需读取整个源文件。
* [Mtehabsim/ScreenPilot](https://github.com/Mtehabsim/ScreenPilot) 🐍 🏠 - 使 AI 能够完全控制和访问 GUI 交互，提供鼠标和键盘工具，适用于通用自动化、教育和实验。
* [mzxrai/mcp-openai](https://github.com/mzxrai/mcp-openai) 📇 ☁️ - 与 OpenAI 最智能的模型聊天。
* [NakaokaRei/swift-mcp-gui](https://github.com/NakaokaRei/swift-mcp-gui.git) 🏠 🍎 - 可以执行键盘输入和鼠标移动等命令的 MCP 服务器。
* [nguyenvanduocit/all-in-one-model-context-protocol](https://github.com/nguyenvanduocit/all-in-one-model-context-protocol) 🏎️ 🏠 - 一些对开发者有用的工具，几乎涵盖工程师所需的一切：Confluence、Jira、YouTube、运行脚本、知识库 RAG、获取 URL、管理 YouTube 频道、电子邮件、日历、GitLab。
* [NON906/omniparser-autogui-mcp](https://github.com/NON906/omniparser-autogui-mcp) - 🐍 屏幕上 GUI 的自动操作。
* [offorte/offorte-mcp-server](https://github.com/offorte/offorte-mcp-server) 🎖️ 📇 ☁️ 🍎 🪟 🐧 - Offorte Proposal Software 的 MCP 服务器，用于创建和发送商业提案。
* [olalonde/mcp-human](https://github.com/olalonde/mcp-human) 📇 ☁️ - 当你的 LLM 需要人工协助时（通过 AWS Mechanical Turk）。
* [orellazi/coda-mcp](https://github.com/orellazri/coda-mcp) 📇 ☁️ - [Coda](https://coda.io/) 的 MCP 服务器。
* [pierrebrunelle/mcp-server-openai](https://github.com/pierrebrunelle/mcp-server-openai) 🐍 ☁️ - 通过 MCP 协议直接从 Claude 查询 OpenAI 模型。
* [pskill9/hn-server](https://github.com/pskill9/hn-server) - 📇 ☁️ 解析 news.ycombinator.com（Hacker News）的 HTML 内容，并为不同类型的故事（热门、新帖、提问、展示、招聘）提供结构化数据。
* [PV-Bhat/vibe-check-mcp-server](https://github.com/PV-Bhat/vibe-check-mcp-server) 📇 ☁️ - 通过调用“Vibe-check”代理确保用户一致性的 MCP 服务器，防止级联错误和范围蔓延。
* [pwh-pwh/cal-mcp](https://github.com/pwh-pwh/cal-mcp) - 用于数学表达式计算的 MCP 服务器。
* [pyroprompts/any-chat-completions-mcp](https://github.com/pyroprompts/any-chat-completions-mcp) - 与任何兼容 OpenAI SDK 的 Chat Completions API（如 Perplexity、Groq、xAI 等）进行聊天。
* [quarkiverse/mcp-server-jfx](https://github.com/quarkiverse/quarkus-mcp-servers/tree/main/jfx) ☕ 🏠 - 在 JavaFX 画布上绘图。
* [QuentinCody/shopify-storefront-mcp-server](https://github.com/QuentinCody/shopify-storefront-mcp-server) 🐍 ☁️ - 非官方 MCP 服务器，允许 AI 代理发现 Shopify 前端商店，并通过 Storefront API 与其交互以获取产品、集合和其他商店数据。
* [r-huijts/ethics-check-mcp](https://github.com/r-huijts/ethics-check-mcp) 🐍 🏠 - 用于对AI对话进行全面伦理分析的MCP服务器，可检测偏见、有害内容，并通过自动化模式学习提供批判性思维评估
* [rae-api-com/rae-mcp](https://github.com/rae-api-com/rae-mcp) - 🏎️ ☁️ 🍎 🪟 🐧 MPC服务器，将您偏好的模型连接至<https://rae-api.com>，即西班牙皇家词典院（Roya Academy of Spanish Dictionary）
* [Rai220/think-mcp](https://github.com/Rai220/think-mcp) 🐍 🏠 - 通过集成think-tools增强任何智能体的推理能力，具体描述见[Anthropic的文章](https://www.anthropic.com/engineering/claude-think-tool)
* [reeeeemo/ancestry-mcp](https://github.com/reeeeemo/ancestry-mcp) 🐍 🏠 - 允许AI读取.ged文件和基因数据
* [rember/rember-mcp](https://github.com/rember/rember-mcp) 📇 🏠 - 在[Rember](https://rember.com)中创建间隔重复闪卡，记住聊天中学到的任何内容
* [roychri/mcp-server-asana](https://github.com/roychri/mcp-server-asana) - 📇 ☁️ 该Asana的Model Context Protocol服务器实现允许你通过MCP客户端（如Anthropic的Claude桌面应用）与Asana API进行交互
* [rusiaaman/wcgw](https://github.com/rusiaaman/wcgw/blob/main/src/wcgw/client/mcp_server/Readme.md) 🐍 🏠 - 自主执行shell命令、控制计算机和编码的智能体。（仅支持Mac）
* [inkbytefo/screenmonitormcp](https://github.com/inkbytefo/screenmonitormcp) 🐍 🏠 🍎 🪟 🐧 - 实时屏幕分析、上下文感知录制和UI监控的MCP服务器。支持AI视觉、事件钩子和多模态智能体工作流
* [SecretiveShell/MCP-wolfram-alpha](https://github.com/SecretiveShell/MCP-wolfram-alpha) 🐍 ☁️ - 用于查询Wolfram Alpha API的MCP服务器
* [Seym0n/tiktok-mcp](https://github.com/Seym0n/tiktok-mcp) 📇 ☁️ - 与TikTok视频进行交互
* [Shopify/dev-mcp](https://github.com/Shopify/dev-mcp) 📇 ☁️ - 用于与Shopify Dev交互的Model Context Protocol (MCP)服务器
* [sirmews/apple-notes-mcp](https://github.com/sirmews/apple-notes-mcp) 🐍 🏠 - 允许AI读取本地Apple Notes数据库（仅限macOS）
* [sooperset/mcp-atlassian](https://github.com/sooperset/mcp-atlassian) 🐍 ☁️ - 针对Atlassian产品（Confluence和Jira）的MCP服务器。支持Confluence Cloud、Jira Cloud和Jira Server/Data Center。提供跨Atlassian工作区搜索、阅读、创建和管理内容的全面工具
* [suekou/mcp-notion-server](https://github.com/suekou/mcp-notion-server) 📇 🏠 - 与Notion API交互
* [tacticlaunch/mcp-linear](https://github.com/tacticlaunch/mcp-linear) 📇 ☁️ 🍎 🪟 🐧 - 与Linear项目管理系统集成
* [tanigami/mcp-server-perplexity](https://github.com/tanigami/mcp-server-perplexity) 🐍 ☁️ - 与Perplexity API交互
* [tevonsb/homeassistant-mcp](https://github.com/tevonsb/homeassistant-mcp) 📇 🏠 - 访问Home Assistant数据并控制设备（灯光、开关、恒温器等）
* [TheoBrigitte/mcp-time](https://github.com/TheoBrigitte/mcp-time) 🏎️ 🏠 🍎 🪟 🐧 - 提供处理时间与日期的工具的MCP服务器，支持自然语言、多种格式和时区转换能力
* [tomekkorbak/oura-mcp-server](https://github.com/tomekkorbak/oura-mcp-server) 🐍 ☁️ - 用于Oura（一款睡眠追踪应用）的MCP服务器
* [tqiqbal/mcp-confluence-server](https://github.com/tqiqbal/mcp-confluence-server) 🐍 - 用于通过REST API与Confluence Data Center交互的Model Context Protocol (MCP)服务器
* [ttommyth/interactive-mcp](https://github.com/ttommyth/interactive-mcp) 📇 🏠 🍎 🪟 🐧 - 通过在MCP循环中添加本地用户提示和聊天功能，启用交互式LLM工作流
* [tumf/web3-mcp](https://github.com/tumf/web3-mcp) 🐍 ☁️ - 基于Ankr Advanced API封装的MCP服务器实现。可访问以太坊、BSC、Polygon、Avalanche等多个链上的NFT、代币和区块链数据
* [ujisati/anki-mcp](https://github.com/ujisati/anki-mcp) 🐍 🏠 - 使用AnkiConnect和MCP管理你的Anki卡片集
* [UnitVectorY-Labs/mcp-graphql-forge](https://github.com/UnitVectorY-Labs/mcp-graphql-forge) 🏎️ ☁️ 🍎 🪟 🐧 - 一个轻量级、基于配置的MCP服务器，将精选的GraphQL查询暴露为模块化工具，使你的智能体能够进行有目的的API交互
* [wanaku-ai/wanaku](https://github.com/wanaku-ai/wanaku) - ☁️ 🏠 Wanaku MCP路由器是一个基于SSE的MCP服务器，提供可扩展的路由引擎，允许将企业系统与AI智能体集成
* [wong2/mcp-cli](https://github.com/wong2/mcp-cli) 📇 🏠 - 用于测试MCP服务器的CLI工具
* [ws-mcp](https://github.com/nick1udwig/ws-mcp) - 用WebSocket包装MCP服务器（用于[kibitz](https://github.com/nick1udwig/kibitz)）
* [yuna0x0/hackmd-mcp](https://github.com/yuna0x0/hackmd-mcp) 📇 ☁️ - 允许AI模型与[HackMD](https://hackmd.io)交互
* [ZeparHyfar/mcp-datetime](https://github.com/ZeparHyfar/mcp-datetime) - 提供多种格式的日期和时间功能的MCP服务器
* [zueai/mcp-manager](https://github.com/zueai/mcp-manager) 📇 ☁️ - 用于为Claude桌面应用安装和管理MCP服务器的简单Web UI
* [imprvhub/mcp-claude-spotify](https://github.com/imprvhub/mcp-claude-spotify) 📇 ☁️ 🏠 - 一项集成，允许Claude桌面应用使用Model Context Protocol (MCP)与Spotify交互

## 框架

> \[!NOTE]  
> 更多框架、工具及其他开发者工具可在 <https://github.com/punkpeye/awesome-mcp-devtools> 找到

* [FastMCP](https://github.com/jlowin/fastmcp) 🐍 - 用于在Python中构建MCP服务器的高级框架
* [FastMCP](https://github.com/punkpeye/fastmcp) 📇 - 用于在TypeScript中构建MCP服务器的高级框架

## 提示与技巧

### 告知LLM如何使用MCP的官方提示

想向Claude询问Model Context Protocol？

创建一个项目，然后将此文件添加到该项目中：

<https://modelcontextprotocol.io/llms-full.txt>

现在Claude可以回答有关编写MCP服务器及其工作原理的问题

* <https://www.reddit.com/r/ClaudeAI/comments/1h3g01r/want_to_ask_claude_about_model_context_protocol/>

## 星标历史

<a href="https://star-history.com/#punkpeye/awesome-mcp-servers&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=punkpeye/awesome-mcp-servers&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=punkpeye/awesome-mcp-servers&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=punkpeye/awesome-mcp-servers&type=Date" />
 </picture>
</a>