# 模型上下文协议服务器

本仓库是[模型上下文协议](https://modelcontextprotocol.io/)（MCP）的*参考实现*集合，同时也包含社区构建的服务器和额外资源的引用。

本仓库中的服务器展示了MCP的多功能性和可扩展性，演示了它如何用于让大型语言模型（LLMs）安全、受控地访问工具和数据源。通常，每个MCP服务器都使用一个MCP SDK实现：

* [C# MCP SDK](https://github.com/modelcontextprotocol/csharp-sdk)
* [Go MCP SDK](https://github.com/modelcontextprotocol/go-sdk)
* [Java MCP SDK](https://github.com/modelcontextprotocol/java-sdk)
* [Kotlin MCP SDK](https://github.com/modelcontextprotocol/kotlin-sdk)
* [Python MCP SDK](https://github.com/modelcontextprotocol/python-sdk)
* [Ruby MCP SDK](https://github.com/modelcontextprotocol/ruby-sdk)
* [Rust MCP SDK](https://github.com/modelcontextprotocol/rust-sdk)
* [Swift MCP SDK](https://github.com/modelcontextprotocol/swift-sdk)
* [TypeScript MCP SDK](https://github.com/modelcontextprotocol/typescript-sdk)

> \[!NOTE]
> 为了在添加新项目时尽量减少合并冲突，本README中的列表按字母顺序维护。

## 🌟 参考服务器

这些服务器旨在演示MCP功能和官方SDK。

* **[Everything](https://github.com/modelcontextprotocol/servers/tree/main/src/everything)** - 包含提示、资源和工具的参考/测试服务器。
* **[Fetch](https://github.com/modelcontextprotocol/servers/tree/main/src/fetch)** - 用于高效LLM使用的网页内容获取和转换。
* **[Filesystem](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem)** - 具有可配置访问控制的安全文件操作。
* **[Git](https://github.com/modelcontextprotocol/servers/tree/main/src/git)** - 读取、搜索和操作Git仓库的工具。
* **[Memory](https://github.com/modelcontextprotocol/servers/tree/main/src/memory)** - 基于知识图谱的持久内存系统。
* **[Sequential Thinking](https://github.com/modelcontextprotocol/servers/tree/main/src/sequentialthinking)** - 通过思维序列进行动态和反思性问题解决。
* **[Time](https://github.com/modelcontextprotocol/servers/tree/main/src/time)** - 时间和时区转换功能。

### 已归档

以下参考服务器现已归档，可在[servers-archived](https://github.com/modelcontextprotocol/servers-archived)中找到。

* **[AWS KB Retrieval](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/aws-kb-retrieval-server)** - 使用Bedrock Agent Runtime从AWS知识库中检索。
* **[Brave Search](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/brave-search)** - 使用Brave的搜索API进行网页和本地搜索。已被[官方服务器](https://github.com/brave/brave-search-mcp-server)取代。
* **[EverArt](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/everart)** - 使用各种模型进行AI图像生成。
* **[GitHub](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/github)** - 仓库管理、文件操作和GitHub API集成。
* **[GitLab](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/gitlab)** - GitLab API，实现项目管理。
* **[Google Drive](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/gdrive)** - Google Drive的文件访问和搜索功能。
* **[Google Maps](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/google-maps)** - 位置服务、路线指引和地点详情。
* **[PostgreSQL](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/postgres)** - 只读数据库访问和模式检查。
* **[Puppeteer](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/puppeteer)** - 浏览器自动化和网页抓取。
* **[Redis](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/redis)** - 与Redis键值存储交互。
* **[Sentry](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/sentry)** - 从Sentry.io检索和分析问题。
* **[Slack](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/slack)** - 频道管理和消息功能。现由[Zencoder](https://github.com/zencoderai/slack-mcp-server)维护。
* **[SQLite](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/sqlite)** - 数据库交互和商业智能功能。

## 🤝 第三方服务器

### 🎖️ 官方集成

官方集成由公司维护，这些公司正在为其平台构建生产就绪的MCP服务器。

* <img height="12" width="12" src="https://www.21st.dev/favicon.ico" alt="21st.dev Logo" /> **[21st.dev Magic](https://github.com/21st-dev/magic-mcp)** - 创建受21st.dev最佳设计工程师启发的UI组件。
* <img height="12" width="12" src="https://framerusercontent.com/images/LpSK1tSZweomrAHOMAj9Gea96lA.svg" alt="Paragon Logo" /> **[ActionKit by Paragon](https://github.com/useparagon/paragon-mcp)** - 使用Paragon的[ActionKit](https://www.useparagon.com/actionkit) API连接130多个SaaS集成（如Slack、Salesforce、Gmail）。
* <img height="12" width="12" src="https://invoxx-public-bucket.s3.eu-central-1.amazonaws.com/frontend-resources/adfin-logo-small.svg" alt="Adfin Logo" /> **[Adfin](https://github.com/Adfin-Engineering/mcp-server-adfin)** - 您需要的唯一支付平台 - 所有支付集中一处，包括发票和会计对账功能，通过[Adfin](https://www.adfin.com/)。
* <img height="12" width="12" src="https://github.com/AgentOps-AI/agentops/blob/main/docs/favicon.png" alt="AgentOps Logo" /> **[AgentOps](https://github.com/AgentOps-AI/agentops-mcp)** - 通过[AgentOps](https://www.agentops.ai/) API提供调试AI代理的可观测性和追踪功能。
* <img height="12" width="12" src="https://www.agentql.com/favicon/favicon.png" alt="AgentQL Logo" /> **[AgentQL](https://github.com/tinyfish-io/agentql-mcp)** - 使AI代理能够通过[AgentQL](https://www.agentql.com/)从非结构化网页获取结构化数据。
* <img height="12" width="12" src="https://agentrpc.com/favicon.ico" alt="AgentRPC Logo" /> **[AgentRPC](https://github.com/agentrpc/agentrpc)** - 使用[AgentRPC](https://www.agentrpc.com/)跨网络边界连接任意函数和语言。
* **[Agentset](https://github.com/agentset-ai/mcp-server)** - 连接到[Agentset](https://agentset.ai)的知识库RAG。
* <img height="12" width="12" src="https://aiven.io/favicon.ico" alt="Aiven Logo" /> **[Aiven](https://github.com/Aiven-Open/mcp-aiven)** - 导航您的[Aiven项目](https://go.aiven.io/mcp-server)，并与PostgreSQL®、Apache Kafka®、ClickHouse®和OpenSearch®服务进行交互。
* <img height="12" width="12" src="https://www.alation.com/resource-center/download/7p3vnbbznfiw/34FMtBTex5ppvs2hNYa9Fc/c877c37e88e5339878658697c46d2d58/Alation-Logo-Bug-Primary.svg" alt="Alation Logo" /> **[Alation](https://github.com/Alation/alation-ai-agent-sdk)** - 通过Alation MCP服务器提供的工具，释放企业数据目录的力量。
* <img height="12" width="12" src="https://i.postimg.cc/5NYw9qjS/alby-icon-head-yellow-500x500.png" alt="Alby Logo" /> **[Alby Bitcoin Payments](https://github.com/getAlby/mcp)** - 将任何比特币闪电钱包连接到您的代理，以便通过您的代理在全球范围内发送和接收即时支付。
* **[Algolia](https://github.com/algolia/mcp)** - 使用AI代理来配置、设置和查询您的[Algolia](https://algolia.com)搜索索引。
* <img height="12" width="12" src="https://img.alicdn.com/imgextra/i4/O1CN01epkXwH1WLAXkZfV6N_!!6000000002771-2-tps-200-200.png" alt="Alibaba Cloud AnalyticDB for MySQL Logo" /> **[Alibaba Cloud AnalyticDB for MySQL](https://github.com/aliyun/alibabacloud-adb-mysql-mcp-server)** - 连接到[AnalyticDB for MySQL](https://www.alibabacloud.com/en/product/analyticdb-for-mysql)集群，获取数据库或表的元数据、查询和分析数据。未来将支持通过OpenAPI操作集群。
* <img height="12" width="12" src="https://github.com/aliyun/alibabacloud-adbpg-mcp-server/blob/master/images/AnalyticDB.png" alt="Alibaba Cloud AnalyticDB for PostgreSQL Logo" /> **[Alibaba Cloud AnalyticDB for PostgreSQL](https://github.com/aliyun/alibabacloud-adbpg-mcp-server)** - 一个MCP服务器，用于连接到[AnalyticDB for PostgreSQL](https://github.com/aliyun/alibabacloud-adbpg-mcp-server)实例，查询和分析数据。
* <img height="12" width="12" src="https://img.alicdn.com/imgextra/i3/O1CN0101UWWF1UYn3rAe3HU_!!6000000002530-2-tps-32-32.png" alt="DataWorks Logo" /> **[Alibaba Cloud DataWorks](https://github.com/aliyun/alibabacloud-dataworks-mcp-server)** - 一个模型上下文协议（MCP）服务器，提供AI工具，使其能够通过标准化接口与[DataWorks](https://www.alibabacloud.com/help/en/dataworks/) Open API进行交互。该实现基于阿里云Open API，使AI代理能够无缝执行云资源操作。
* <img height="12" width="12" src="https://opensearch-shanghai.oss-cn-shanghai.aliyuncs.com/ouhuang/aliyun-icon.png" alt="Alibaba Cloud OpenSearch Logo" /> **[Alibaba Cloud OpenSearch](https://github.com/aliyun/alibabacloud-opensearch-mcp-server)** - 此MCP服务器为AI代理配备了通过标准化和可扩展接口与[OpenSearch](https://help.aliyun.com/zh/open-search/?spm=5176.7946605.J_5253785160.6.28098651AaYZXC)交互的工具。
* <img height="12" width="12" src="https://github.com/aliyun/alibaba-cloud-ops-mcp-server/blob/master/image/alibaba-cloud.png" alt="Alibaba Cloud OPS Logo" /> **[Alibaba Cloud OPS](https://github.com/aliyun/alibaba-cloud-ops-mcp-server)** - 使用 [CloudOps 编排服务](https://www.alibabacloud.com/zh/product/oos) 和 Alibaba Cloud OpenAPI 管理您的阿里云资源生命周期。
* <img height="12" width="12" src="https://github.com/aliyun/alibabacloud-rds-openapi-mcp-server/blob/main/assets/alibabacloudrds.png" alt="Alibaba Cloud RDS MySQL Logo" /> **[Alibaba Cloud RDS](https://github.com/aliyun/alibabacloud-rds-openapi-mcp-server)** - 一个设计用于与 Alibaba Cloud RDS OpenAPI 交互的 MCP 服务器，可通过 LLM 对 RDS 资源进行编程管理。
* <img height="12" width="12" src="https://www.alipayplus.com/favicon.ico" alt="AlipayPlus Logo" /> **[AlipayPlus](https://github.com/alipay/global-alipayplus-mcp)** - 将您的 AI Agent 连接到 AlipayPlus 结账支付。
* <img height="12" width="12" src="https://cdn.allvoicelab.com/resources/workbench/dist/icon-dark.ico" alt="AllVoiceLab Logo" /> **[AllVoiceLab](https://www.allvoicelab.com/mcp)** - 一个包含 TTS、语音克隆和视频翻译的 AI 语音工具包，现在可作为 MCP 服务器使用，实现更智能的 Agent 集成。
* <img height="12" width="12" src="https://files.alpaca.markets/webassets/favicon-32x32.png" alt="Alpaca Logo" /> **[Alpaca](https://github.com/alpacahq/alpaca-mcp-server)** – Alpaca 的 MCP 服务器可让您通过 [Alpaca 交易 API](https://alpaca.markets/) 进行股票和期权交易、分析市场数据并制定策略。
* <img height="12" width="12" src="https://www.alphavantage.co/logo.png/" alt="AlphaVantage Logo" /> **[AlphaVantage](https://mcp.alphavantage.co/)** - 连接 100+ 金融数据 API，包括股票价格、基本面等来自 [AlphaVantage](https://www.alphavantage.co) 的数据。
* <img height="12" width="12" src="https://www.antom.com/favicon.ico" alt="Antom Logo" /> **[Antom](https://github.com/alipay/global-antom-mcp)** - 将您的 AI Agent 连接到 Antom 结账支付。
* <img height="12" width="12" src="https://developers.anytype.io/img/favicon.ico" alt="Anytype Logo" /> **[Anytype](https://github.com/anyproto/anytype-mcp)** - 一个 MCP 服务器，使 AI 助手能够与 [Anytype](https://anytype.io)（一个本地协作式维基）交互，通过自然语言组织对象、列表等。
* <img height="12" width="12" src="https://doris.apache.org/images/favicon.ico" alt="Apache Doris Logo" /> **[Apache Doris](https://github.com/apache/doris-mcp-server)** - 针对 [Apache Doris](https://doris.apache.org/)（一种基于 MPP 的实时数据仓库）的 MCP 服务器。
* <img height="12" width="12" src="https://iotdb.apache.org/img/logo.svg" alt="Apache IoTDB Logo" /> **[Apache IoTDB](https://github.com/apache/iotdb-mcp-server)** - 针对 [Apache IoTDB](https://github.com/apache/iotdb) 数据库及其工具的 MCP 服务器。
* **[Apache Pinot](https://github.com/startreedata/mcp-pinot)** – 用于在 Apache Pinot 上运行实时分析查询的 MCP 服务器，这是一个为高吞吐量、低延迟实时应用构建的开源 OLAP 数据库。
* <img height="12" width="12" src="https://apify.com/favicon.ico" alt="Apify Logo" /> **[Apify](https://github.com/apify/actors-mcp-server)** - [Actors MCP 服务器](https://apify.com/apify/actors-mcp-server)：使用 3000+ 预建云工具从网站、电商、社交媒体、搜索引擎、地图等提取数据。
* <img height="12" width="12" src="https://2052727.fs1.hubspotusercontent-na1.net/hubfs/2052727/cropped-cropped-apimaticio-favicon-1-32x32.png" alt="APIMatic Logo" /> **[APIMatic MCP](https://github.com/apimatic/apimatic-validator-mcp)** - APIMatic MCP 服务器用于使用 [APIMatic](https://www.apimatic.io/) 验证 OpenAPI 规范。该服务器处理 OpenAPI 文件并通过 APIMatic 的 API 返回验证摘要。
* <img height="12" width="12" src="https://apollo-server-landing-page.cdn.apollographql.com/_latest/assets/favicon.png" alt="Apollo Graph Logo" /> **[Apollo MCP Server](https://github.com/apollographql/apollo-mcp-server/)** - 将您的 GraphQL API 连接到 AI Agent。
* <img height="12" width="12" src="https://developer.aqara.com/favicon.ico" alt="Aqara Logo" /> **[Aqara MCP Server](https://github.com/aqara/aqara-mcp-server/)** - 使用自然语言控制 [Aqara](https://www.aqara.com/) 智能家居设备、查询状态、执行场景等。
* <img height="12" width="12" src="https://media.licdn.com/dms/image/v2/C4D0BAQEeD7Dxbpadkw/company-logo_200_200/company-logo_200_200/0/1644692667545/archbee_logo?e=2147483647&v=beta&t=lTi9GRIoqzG6jN3kJC26uZWh0q3uiQelsH6mGoq_Wfw" alt="Archbee Logo" /> **[Archbee](https://www.npmjs.com/package/@archbee/mcp)** - 编写和发布文档，使其成为 AI 即时答案的可信来源。停止拼凑工具，使用 [Archbee](https://www.archbee.com/) — 第一个完整的文档平台。
* <img height="12" width="12" src="https://phoenix.arize.com/wp-content/uploads/2023/04/cropped-Favicon-32x32.png" alt="Arize-Phoenix Logo" /> **[Arize Phoenix](https://github.com/Arize-ai/phoenix/tree/main/js/packages/phoenix-mcp)** - 使用 [Arize Phoenix](https://github.com/Arize-ai/phoenix)（一个开源的 AI 和 LLM 可观测性工具）检查追踪、管理提示、整理数据集并运行实验。
* <img height="12" width="12" src="https://731523176-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FaVUBXRZbpAgtjYf5HsvO%2Fuploads%2FaRRrVVocXCTr6GkepfCx%2Flogo_color.svg?alt=media&token=3ba24089-0ab2-421f-a9d9-41f2f94f954a" alt="Armor Logo" /> **[Armor Crypto MCP](https://github.com/armorwallet/armor-crypto-mcp)** - 用于与多个区块链、质押、DeFi、兑换、跨链、钱包管理、DCA、限价订单、币种查询、跟踪等交互的 MCP。
* <img height="12" width="12" src="https://console.asgardeo.io/app/libs/themes/wso2is/assets/images/branding/favicon.ico" alt="Asgardeo Logo" /> **[Asgardeo](https://github.com/asgardeo/asgardeo-mcp-server)** - 用于通过 LLM 工具与您的 [Asgardeo](https://wso2.com/asgardeo) 组织交互的 MCP 服务器。
* <img height="12" width="12" src="https://www.datastax.com/favicon-32x32.png" alt="DataStax logo" /> **[Astra DB](https://github.com/datastax/astra-db-mcp)** - 用于管理 [DataStax Astra DB](https://www.datastax.com/products/datastax-astra) NoSQL 数据库中的集合和文档的完整工具，支持创建、更新、删除、查找等操作以及相关批量操作。
* <img height="12" width="12" src="https://cdn.prod.website-files.com/66598898fd13d51606c3215d/66ccbfef13bd8bc19d587578_favicon-32x32.png" alt="Atla Logo" /> **[Atla](https://github.com/atla-ai/atla-mcp-server)** - 启用 AI Agent 与 [Atla API](https://docs.atla-ai.com/) 交互以进行最先进的 LLMJ 评估。
* <img height="12" width="12" src="https://assets.atlan.com/assets/atlan-a-logo-blue-background.png" alt="Atlan Logo" /> **[Atlan](https://github.com/atlanhq/agent-toolkit/tree/main/modelcontextprotocol)** - Atlan Model Context Protocol 服务器允许您通过多种工具与 [Atlan](https://www.atlan.com/) 服务交互。
* <img height="12" width="12" src="https://www.atlassian.com/favicon.ico" alt="Atlassian Logo" /> **[Atlassian](https://www.atlassian.com/platform/remote-mcp-server)** - 安全地与 Jira 工作项和 Confluence 页面交互，并在两者之间进行搜索。
* <img height="12" width="12" src="https://res.oafimg.cn/-/737b3b3ffed9b19e/logo.png" alt="AtomGit Logo" /> **[AtomGit](https://atomgit.com/atomgit-open-source-ecosystem/atomgit-mcp-server)** - 官方 AtomGit 服务器，用于与仓库管理、PRs、问题、分支、标签等集成。
* <img height="12" width="12" src="https://resources.audiense.com/hubfs/favicon-1.png" alt="Audiense Logo" /> **[Audiense Insights](https://github.com/AudienseCo/mcp-audiense-insights)** - 来自 [Audiense](https://www.audiense.com/products/audiense-insights) 报告的营销洞察和受众分析，涵盖人口统计、文化、影响者和内容参与分析。
* <img height="12" width="12" src="https://cdn.auth0.com/website/website/favicons/auth0-favicon.svg" alt="Auth0 Logo" /> **[Auth0](https://github.com/auth0/auth0-mcp-server)** - 用于与您的 Auth0 租户交互的 MCP 服务器，支持创建和修改操作、应用程序、表单、日志、资源服务器等。
* <img height="12" width="12" src="https://firstorder.ai/favicon_auth.ico" alt="Authenticator App Logo" /> **[Authenticator App · 2FA](https://github.com/firstorderai/authenticator_mcp)** - 一个安全的 MCP（模型上下文协议）服务器，使 AI Agent 能够与 Authenticator App 交互。
* <img height="12" width="12" src="https://a0.awsstatic.com/libra-css/images/site/fav/favicon.ico" alt="AWS Logo" /> **[AWS](https://github.com/awslabs/mcp)** - 提供 AWS 最佳实践直接集成到开发工作流中的专用 MCP 服务器。
* <img height="12" width="12" src="https://axiom.co/favicon.ico" alt="Axiom Logo" /> **[Axiom](https://github.com/axiomhq/mcp-server-axiom)** - 以自然语言查询和分析您的 Axiom 日志、追踪及所有其他事件数据。
* <img height="12" width="12" src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/acom_social_icon_azure" alt="Microsoft Azure Logo" /> **[Azure](https://github.com/Azure/azure-mcp)** - Azure MCP 服务器为 MCP 客户端提供对关键 Azure 服务和工具（如 Azure Storage、Cosmos DB、Azure CLI 等）的访问权限。
* <img height="12" width="12" src="https://cdn-dynmedia-1.microsoft.com/is/content/microsoftcorp/1062064-Products-1.2-24x24" alt="Microsoft Azure DevOps Logo" /> **[Azure DevOps](https://github.com/microsoft/azure-devops-mcp)** - 与 Azure DevOps 服务（如存储库、工作项、构建、发布、测试计划和代码搜索）进行交互。
* <img height="12" width="12" src="https://mapopen-website-wiki.cdn.bcebos.com/LOGO/lbsyunlogo_icon.ico" alt="百度地图 Logo" /> **[百度地图](https://github.com/baidu-maps/mcp)** - [百度地图 MCP 服务器](https://lbsyun.baidu.com/faq/api?title=mcpserver/base) 提供 AI 智能体与百度地图 API 交互的工具，实现基于位置的服务和地理空间数据分析。
* <img height="12" width="12" src="https://www.bankless.com/favicon.ico" alt="Bankless Logo" /> **[Bankless Onchain](https://github.com/bankless/onchain-mcp)** - 查询链上数据，例如 ERC20 代币、交易历史、智能合约状态。
* <img height="12" width="12" src="https://baserow.io/img/logo_baserow_square_large.png" alt="Baserow Logo" /> **[Baserow](https://gitlab.com/baserow/baserow/-/tree/develop/backend/src/baserow/api/mcp)** - 使用 MCP 集成从 Baserow 自托管或 SaaS 数据库中查询数据。
* <img height="12" width="12" src="https://bicscan.io/favicon.png" alt="BICScan Logo" /> **[BICScan](https://github.com/ahnlabio/bicscan-mcp)** - EVM 区块链地址（EOA、CA、ENS）甚至域名的风险评分/资产持有情况。
* <img height="12" width="12" src="https://web-cdn.bitrise.io/favicon.ico" alt="Bitrise Logo" /> **[Bitrise](https://github.com/bitrise-io/bitrise-mcp)** - 与您的构建、CI 进行聊天，以及 [更多](https://bitrise.io/blog/post/chat-with-your-builds-ci-and-more-introducing-the-bitrise-mcp-server)。
* <img height="12" width="12" src="https://boikot.xyz/assets/favicon.svg" alt="boikot Logo" /> **[Boikot](https://github.com/boikot-xyz/boikot)** - 通过 [boikot.xyz](https://boikot.xyz/) 了解主要公司的道德和不道德行为。
* <img height="12" width="12" src="https://boldsign.com/favicon.ico" alt="BoldSign Logo" /> **[BoldSign](https://github.com/boldsign/boldsign-mcp)** - 通过 [BoldSign](https://boldsign.com/) 轻松搜索、请求和管理电子签名合同。
* <img height="12" width="12" src="https://boost.space/favicon.ico" alt="Boost.space Logo" /> **[Boost.space](https://github.com/boostspace/boostspace-mcp-server)** - 与 [Boost.space](https://boost.space) 集成的 MCP 服务器，用于集中化、自动化来自 2000+ 来源的业务数据。
* <img height="12" width="12" src="https://www.box.com/favicon.ico" alt="Box Logo" /> **[Box](https://github.com/box-community/mcp-server-box)** - 通过 Box AI 与智能内容管理平台交互。
* <img height="12" width="12" src="https://www.brightdata.com/favicon.ico" alt="BrightData Logo" /> **[BrightData](https://github.com/luminati-io/brightdata-mcp)** - 发现、提取并交互网页内容——一个接口可实现对公共互联网的自动化访问。
* <img height="12" width="12" src="https://browserbase.com/favicon.ico" alt="Browserbase Logo" /> **[Browserbase](https://github.com/browserbase/mcp-server-browserbase)** - 在云端自动化浏览器交互（例如网页导航、数据提取、表单填写等）。
* <img height="12" width="12" src="https://browserstack.wpenginepowered.com/wp-content/themes/browserstack/img/favicons/favicon.ico" alt="BrowserStack Logo" /> **[BrowserStack](https://github.com/browserstack/mcp-server)** - 访问 BrowserStack 的 [测试平台](https://www.browserstack.com/test-platform)，用于调试、编写和修复测试，进行可访问性测试等。
* <img height="12" width="12" src="https://cdn.prod.website-files.com/65c0b8763c04cd15daa89b20/671f9d1301ac85495013761d_Favicon-White.png" alt="Bucket" /> **[Bucket](https://github.com/bucketco/bucket-javascript-sdk/tree/main/packages/cli#model-context-protocol)** - 使用 [Bucket](https://bucket.co) 标记功能、管理公司数据并控制功能访问。
* <img height="12" width="12" src="https://www.google.com/s2/favicons?domain=buildkite.com&sz=24" alt="Buildkite Logo" /> **[Buildkite](https://github.com/buildkite/buildkite-mcp-server)** - 将 Buildkite 数据（流水线、构建、任务、测试）暴露给 AI 工具和编辑器。
* <img height="12" width="12" src="https://bldbl.dev/favico.png" alt="Buildable Logo" />**[Buildable](https://github.com/chunkydotdev/bldbl-mcp)** (TypeScript) - Buildable AI 驱动开发平台的官方 MCP 服务器。使 AI 助手能够管理任务、跟踪进度、获取项目上下文，并与人类协作进行软件项目开发。
* <img height="12" width="12" src="https://builtwith.com/favicon.ico" alt="BuiltWith Logo" /> **[BuiltWith](https://github.com/builtwith/mcp)** - 识别任何网站背后的技术栈。
* <img height="12" width="12" src="https://portswigger.net/favicon.ico" alt="PortSwigger Logo" /> **[Burp Suite](https://github.com/PortSwigger/mcp-server)** - MCP 服务器扩展，允许 AI 客户端连接到 [Burp Suite](https://portswigger.net)。
* <img src="https://app.cal.com/favicon.ico" alt="Cal.com" width="12" height="12"> **[Cal.com](https://www.npmjs.com/package/@calcom/cal-mcp?activeTab=readme)** - 连接到 Cal.com API 以安排和管理预订和预约。
* <img height="12" width="12" src="https://campertunity.com/assets/icon/favicon.ico" alt="Campertunity Logo" /> **[Campertunity](https://github.com/campertunity/mcp-server)** - 在 Campertunity 上搜索全球露营地，检查可用性，并提供预订链接。
* <img height="12" width="12" src="https://static.canva.com/static/images/favicon.ico" alt="Canva logo" /> **[Canva](https://www.canva.dev/docs/apps/mcp-server/)** — 为 [Canva](https://canva.com) 应用和集成提供 AI 驱动的开发辅助。
* <img height="12" width="12" src="https://carbonvoice.app/favicon.ico" alt="Carbon Voice Logo" /> **[Carbon Voice](https://github.com/PhononX/cv-mcp-server)** - 连接 AI 智能体到 [Carbon Voice](https://getcarbon.app) 的 MCP 服务器。创建、管理并与 [Carbon Voice](https://getcarbon.app) 中的语音消息、对话、私信、文件夹、语音备忘录、AI 操作等进行交互。
* <img height="12" width="12" src="https://play.cartesia.ai/icon.png" alt="Cartesia logo" /> **[Cartesia](https://github.com/cartesia-ai/cartesia-mcp)** - 连接到 [Cartesia](https://cartesia.ai/) 语音平台，执行文本转语音、语音克隆等操作。
* <img height="12" width="12" src="https://www.cashfree.com/favicon.ico" alt="Cashfree logo" /> **[Cashfree](https://github.com/cashfree/cashfree-mcp)** - [Cashfree Payments](https://www.cashfree.com/) 官方 MCP 服务器。
* **[CB Insights](https://github.com/cbinsights/cbi-mcp-server)** - 使用 [CB Insights](https://www.cbinsights.com) MCP 服务器连接到 [ChatCBI](https://www.cbinsights.com/chatcbi/)。
* <img height="12" width="12" src="https://cleanupcrew.ai/favicon-light.png" alt="Cleanup Crew logo" /> **[Cleanup Crew](https://cleanupcrew.ai/install)** - 为使用 AI 编程工具的非技术创始人提供实时人工支持服务。当 AI 遇到瓶颈时，可以直接从 IDE 中请求即时人工帮助。
* <img height="12" width="12" src="https://www.chargebee.com/static/resources/brand/favicon.png" alt="Chargebee Logo" /> **[Chargebee](https://github.com/chargebee/agentkit/tree/main/modelcontextprotocol)** - 连接 AI 智能体到 [Chargebee 平台](https://www.chargebee.com) 的 MCP 服务器。
* <img height="12" width="12" src="https://cheqd.io/wp-content/uploads/2023/03/logo_cheqd_favicon.png" alt="Cheqd Logo" /> **[Cheqd](https://github.com/cheqd/mcp-toolkit)** - 通过 [cheqd](https://cheqd.io) 的信任注册表和凭证，使 AI 智能体可被信任、验证、防止欺诈、保护您的声誉等。
* <img height="12" width="12" src="https://cdn.chiki.studio/brand/logo.png" alt="Chiki StudIO Logo" /> **[Chiki StudIO](https://chiki.studio/galimybes/mcp/)** - 仅通过配置（无需代码）创建您自己的可配置 MCP 服务器，支持指令、提示和工具。
* <img height="12" width="12" src="https://trychroma.com/_next/static/media/chroma-logo.ae2d6e4b.svg" alt="Chroma Logo" /> **[Chroma](https://github.com/chroma-core/chroma-mcp)** - 使用开源 AI 应用数据库进行嵌入、向量搜索、文档存储和全文搜索。
* <img height="12" width="12" src="https://www.chronulus.com/favicon/chronulus-logo-blue-on-alpha-square-128x128.ico" alt="Chronulus AI Logo" /> **[Chronulus AI](https://github.com/ChronulusAI/chronulus-mcp)** - 使用 Chronulus AI 预测和预测代理预测任何事物。
* <img height="12" width="12" src="https://circleci.com/favicon.ico" alt="CircleCI Logo" /> **[CircleCI](https://github.com/CircleCI-Public/mcp-server-circleci)** - 使 AI 智能体能够修复来自 CircleCI 的构建失败。
* <img height="12" width="12" src="https://assets.zilliz.com/Zilliz_Logo_Mark_White_20230223_041013_86057436cc.png" alt="Claude Context Logo" /> **[Claude Context](https://github.com/zilliztech/claude-context)** - 将您的代码库作为上下文带入 Claude Code。
* <img height="12" width="12" src="https://clickhouse.com/favicon.ico" alt="ClickHouse Logo" /> **[ClickHouse](https://github.com/ClickHouse/mcp-clickhouse)** - 查询您的 [ClickHouse](https://clickhouse.com/) 数据库服务器。
* <img height="12" width="12" src="https://brand.clicksend.com/_ipx/s_794x608/img/clicksend_icon_only.svg" alt="ClickSend Logo" /> **[ClickSend](https://github.com/ClickSend/clicksend-mcp-server/)** - 由 ClickSend 团队开发的官方 ClickSend MCP 服务器。
* <img height="12" width="12" src="https://7463-tcb-advanced-a656fc-1257967285.tcb.qcloud.la/mcp/cloudbase-logo.svg" alt="CloudBase Logo" /> **[CloudBase](https://github.com/TencentCloudBase/CloudBase-AI-ToolKit)** - 提供一站式后端服务，支持微信小程序和全栈应用，包含腾讯云开发（[Tencent CloudBase](https://tcb.cloud.tencent.com/)）提供的无服务器云函数和数据库。
* <img height="12" width="12" src="https://www.cloudbet.com/favicon.ico" alt="Cloudbet Logo" /> **[Cloudbet](https://github.com/cloudbet/sports-mcp-server)** - 通过 Cloudbet API 提供结构化的体育和电子竞技数据：赛事安排、实时赔率、投注限额和市场数据。
* <img height="12" width="12" src="https://www.cloudbees.com/favicon.ico" alt="CloudBees Logo" /> **[CloudBees](https://docs.cloudbees.com/docs/cloudbees-mcp/latest/)** - 使 AI 能够访问您的 [CloudBees Unify](https://www.cloudbees.com/unify) 环境。
* <img src="http://www.google.com/s2/favicons?domain=www.cloudera.com" alt="Cloudera Iceberg" width="12" height="12"> **[Cloudera Iceberg](https://github.com/cloudera/iceberg-mcp-server)** - 在 [Open Data Lakehouse](https://www.cloudera.com/products/open-data-lakehouse.html) 上启用 AI 功能。
* <img height="12" width="12" src="https://cdn.simpleicons.org/cloudflare" /> **[Cloudflare](https://github.com/cloudflare/mcp-server-cloudflare)** - 在 Cloudflare 开发者平台上部署、配置和查询您的资源（例如 Workers/KV/R2/D1）。
* <img src="https://cdn.prod.website-files.com/64d41aab8183c7c3324ddb29/67c0f1e272e51cf3c511c17c_Gyph.svg" alt="Cloudinary" width="12" height="12"> **[Cloudinary](https://github.com/cloudinary/mcp-servers)** - 将 Cloudinary 的媒体上传、转换、AI 分析、管理、优化和分发功能暴露为 AI 代理可用的工具。
* <img height="12" width="12" src="https://raw.githubusercontent.com/Cloudsway-AI/smartsearch/refs/heads/main/plugin_cloudsway.ico" alt="Cloudsway Logo" /> **[Cloudsway SmartSearch](https://github.com/Cloudsway-AI/smartsearch)** - 由 Cloudsway 提供支持的 Web 搜索 MCP 服务器，支持关键词搜索、语言和安全选项，返回结构化的 JSON 结果。
* <img height="12" width="12" src="https://app.codacy.com/static/images/favicon-16x16.png" alt="Codacy Logo" /> **[Codacy](https://github.com/codacy/codacy-mcp-server/)** - 与 [Codacy](https://www.codacy.com) API 交互，查询代码质量问题、漏洞和代码覆盖率等信息。
* <img height="12" width="12" src="https://codelogic.com/wp-content/themes/codelogic/assets/img/favicon.png" alt="CodeLogic Logo" /> **[CodeLogic](https://github.com/CodeLogicIncEngineering/codelogic-mcp-server)** - 与 [CodeLogic](https://codelogic.com) 交互，这是一个软件智能平台，可以绘制复杂的代码和数据架构依赖关系，以提升 AI 的准确性和洞察力。
* <img height="12" width="12" src="https://www.coingecko.com/favicon.ico" alt="CoinGecko Logo" /> **[CoinGecko](https://github.com/coingecko/coingecko-typescript/tree/main/packages/mcp-server)** - 官方 [CoinGecko API](https://www.coingecko.com/en/api) MCP 服务器，提供加密货币价格和市场数据，覆盖 200 多个区块链网络和 800 万+代币。
* <img height="12" width="12" src="https://www.comet.com/favicon.ico" alt="Comet Logo" /> **[Comet Opik](https://github.com/comet-ml/opik-mcp)** - 用自然语言查询和分析来自 LLM 的 [Opik](https://github.com/comet-ml/opik) 日志、追踪、提示和其他遥测数据。
* <img height="12" width="12" src="https://cdn.prod.website-files.com/6572bd8c27ee5db3eb91f4b3/6572bd8d27ee5db3eb91f55e_favicon-dashflow-webflow-template.svg" alt="OSS Conductor Logo" /> <img height="12" width="12" src="https://orkes.io/icons/icon-48x48.png" alt="Orkes Conductor Logo" />**[Conductor](https://github.com/conductor-oss/conductor-mcp)** - 与 Conductor（开源和 Orkes）的 REST API 进行交互。
* <img height="12" width="12" src="https://platform.composio.dev/favicon.ico" alt="Composio Logo" /> **[Composio](https://docs.composio.dev/docs/mcp-overview#-getting-started)** – 使用 [Composio](https://composio.dev) 连接 100+ 工具。零配置，内置认证。专为代理设计，也适用于人类用户。
* <img height="12" width="12" src="https://www.confluent.io/favicon.ico" alt="Confluent Logo" /> **[Confluent](https://github.com/confluentinc/mcp-confluent)** - 与 Confluent Kafka 和 Confluent Cloud 的 REST API 交互。
* <img src="https://contrastsecurity.com/favicon.ico" alt="Contrast Security" width="12" height="12"> **[Contrast Security](https://github.com/Contrast-Security-OSS/mcp-contrast)** - 将 Contrast 的漏洞和 SCA 数据引入您的编码代理，以便快速修复漏洞。
* <img height="12" width="12" src="https://www.convex.dev/favicon.ico" alt="Convex Logo" /> **[Convex](https://stack.convex.dev/convex-mcp-server)** - 探索和查询部署到 Convex 的应用程序。
* <img height="12" width="12" src="https://www.cortex.io/favicon.ico" alt="Cortex Logo" /> **[Cortex](https://github.com/cortexapps/cortex-mcp)** - [Cortex](https://www.cortex.io) 的官方 MCP 服务器。
* <img height="12" width="12" src="https://avatars.githubusercontent.com/u/605755?s=200&v=4" alt="Couchbase Logo" /> **[Couchbase](https://github.com/Couchbase-Ecosystem/mcp-server-couchbase)** - 与 Couchbase 集群中存储的数据进行交互。
* <img height="12" width="12" src="https://github.com/user-attachments/assets/b256f9fa-2020-4b37-9644-c77229ef182b" alt="CRIC 克而瑞 LOGO"> **[CRIC Wuye AI](https://github.com/wuye-ai/mcp-server-wuye-ai)** - 与 CRIC Wuye AI 平台的功能进行交互，该平台是专为物业管理行业设计的智能助手。
* <img height="12" width="12" src="https://www.crowdstrike.com/etc.clientlibs/crowdstrike/clientlibs/crowdstrike-common/resources/favicon.ico" alt="CrowdStrike Logo" /> **[CrowdStrike Falcon](https://github.com/CrowdStrike/falcon-mcp)** - 将 AI 代理与 CrowdStrike Falcon 平台连接，提供智能安全分析，支持通过程序访问检测、事件、行为、威胁情报、主机、漏洞和身份保护功能。
* <img height="12" width="12" src="https://avatars.githubusercontent.com/u/58433296" alt="CTERA Edge Filer" /> **[CTERA Edge Filer](https://github.com/ctera/mcp-ctera-edge)** - CTERA Edge Filer 提供智能边缘缓存和多协议文件访问，实现核心站点和远程站点之间的快速、安全文件访问。
* <img height="12" width="12" src="https://avatars.githubusercontent.com/u/58433296" alt="CTERA Portal" /> **[CTERA Portal](https://github.com/ctera/mcp-ctera-core)** - CTERA Portal 是一个多租户、多云平台，提供全局命名空间和跨 PB 级分布式内容的统一管理。
* <img height="12" width="12" src="https://app.cycode.com/img/favicon.ico" alt="Cycode Logo" /> **[Cycode](https://github.com/cycodehq/cycode-cli#mcp-command-experiment)** - 通过 SAST、SCA、密钥和 IaC 扫描增强开发生命周期中的安全性，并与 [Cycode](https://cycode.com/) 集成。
* <img height="12" width="12" src="http://app.itsdart.com/static/img/favicon.png" alt="Dart Logo" /> **[Dart](https://github.com/its-dart/dart-mcp-server)** - 与 [Dart](https://itsdart.com) 中的任务、文档和项目数据进行交互，Dart 是一个原生支持 AI 的项目管理工具。
* <img height="12" width="12" src="https://datahub.com/wp-content/uploads/2025/04/cropped-Artboard-1-32x32.png" alt="DataHub Logo" /> **[DataHub](https://github.com/acryldata/mcp-server-datahub)** - 使用 [DataHub](https://datahub.com/) 元数据搜索数据资产、遍历数据血缘、编写 SQL 查询等。
* <img height="12" width="12" src="https://www.daytona.io/brand/social-daytona-icon.png" alt="Daytona Logo" /> **[Daytona](https://github.com/daytonaio/daytona/tree/main/apps/cli/mcp)** - 使用 [Daytona](https://daytona.io) 沙箱快速安全地执行 AI 生成的代码。
* <img height="12" width="12" src="https://debugg.ai/favicon.svg" alt="Debugg AI Logo" /> **[Debugg.AI](https://github.com/debugg-ai/debugg-ai-mcp)** - 通过 [Debugg.AI](https://debugg.ai) 的远程浏览测试代理，对任何代码生成平台实现零配置、全 AI 管理的端到端测试。
* <img height="12" width="12" src="https://www.deepl.com/img/logo/deepl-logo-blue.svg" alt="DeepL Logo" /> **[DeepL](https://github.com/DeepLcom/deepl-mcp-server)** - 使用 [DeepL](https://deepl.com) 自有的 AI 模型并通过 [DeepL API](https://developers.deepl.com/docs) 来翻译或重写文本。
* <img height="12" width="12" src="https://defang.io/_next/static/media/defang-icon-dark-colour.25f95b77.svg" alt="Defang Logo" /> **[Defang](https://github.com/DefangLabs/defang/blob/main/src/pkg/mcp/README.md)** - 无需离开集成开发环境即可将项目无缝部署到 [Defang](https://www.defang.io) 平台。
* <img height="12" width="12" src="https://detailer.ginylil.com/favicon.ico" alt="Detailer Logo" /> **[Detailer](https://detailer.ginylil.com/)** – 立即为您的 GitHub 仓库生成丰富的 AI 驱动文档。专为 AI 代理在执行操作前获取深入的项目上下文而设计。
* <img height="12" width="12" src="https://www.devhub.com/img/upload/favicon-196x196-dh.png" alt="DevHub Logo" /> **[DevHub](https://github.com/devhub/devhub-cms-mcp)** - 在 [DevHub](https://www.devhub.com) CMS 平台内管理和使用网站内容。
* <img height="12" width="12" src="https://devrev.ai/favicon.ico" alt="DevRev Logo" /> **[DevRev](https://github.com/devrev/mcp-server)** - 一个 MCP 服务器，用于集成 DevRev API，搜索 DevRev 知识图谱中的对象，这些对象可以从 [此处](https://devrev.ai/docs/import#available-sources) 列出的不同来源导入。
* <img height="12" width="12" src="https://dexpaprika.com/favicon.ico" alt="DexPaprika 标志" /> **[DexPaprika (CoinPaprika)](https://github.com/coinpaprika/dexpaprika-mcp)** - 使用 [DexPaprika](https://dexpaprika.com) 通过多个区块链网络访问实时 DEX 数据、流动性池、代币信息和交易分析。
* <img height="12" width="12" src="https://avatars.githubusercontent.com/u/65421071?s=200&v=4" alt="Drata 标志" /> **[Drata](https://drata.com/mcp)** - 体验我们的实验性 MCP 服务器 — 将实时合规智能带入您的 AI 工作流。
* <img height="12" width="12" src="https://avatars.githubusercontent.com/u/204530939?s=200&v=4" alt="Dumpling AI 标志" /> **[Dumpling AI](https://github.com/Dumpling-AI/mcp-server-dumplingai)** - 通过 [Dumpling AI](https://www.dumplingai.com/) 访问数据、网络爬虫和文档转换 API。
* <img height="12" width="12" src="https://avatars.githubusercontent.com/u/58178984" alt="Dynatrace 标志" /> **[Dynatrace](https://github.com/dynatrace-oss/dynatrace-mcp)** - 管理并交互 [Dynatrace 平台](https://www.dynatrace.com/platform)，实现实时可观测性和监控。
* <img height="12" width="12" src="https://e2b.dev/favicon.ico" alt="E2B 标志" /> **[E2B](https://github.com/e2b-dev/mcp-server)** - 在 [E2B](https://e2b.dev) 提供的安全沙箱中运行代码。
* <img height="12" width="12" src="https://www.edgee.cloud/favicon.ico" alt="Edgee 标志" /> **[Edgee](https://github.com/edgee-cloud/mcp-server-edgee)** - 部署并管理 [Edgee](https://www.edgee.cloud) 组件和项目。
* <img height="12" width="12" src="https://static.edubase.net/media/brand/favicon/favicon-32x32.png" alt="EduBase 标志" /> **[EduBase](https://github.com/EduBase/MCP)** - 与 [EduBase](https://www.edubase.net) 交互，这是一个具有高级测验、考试管理和内容组织功能的综合性在线学习平台。
* <img height="12" width="12" src="https://www.elastic.co/favicon.ico" alt="Elasticsearch 标志" /> **[Elasticsearch](https://github.com/elastic/mcp-server-elasticsearch)** - 在 [Elasticsearch](https://www.elastic.co/elasticsearch) 中查询您的数据。
* <img height="12" width="12" src="https://cdn.prod.website-files.com/656eaf5c6da3527caf362363/656ecc07555afac40df4c40e_Facicon.png" alt="Endor Labs 标志" /> **[Endor Labs](https://docs.endorlabs.com/deployment/ide/mcp/)** - 发现并修复代码中的安全风险。集成 [Endor Labs](https://endorlabs.com)，从漏洞和密钥泄露中扫描并保护您的代码。
* <img height="12" width="12" src="https://esignatures.com/favicon.ico" alt="eSignatures 标志" /> **[eSignatures](https://github.com/esignaturescom/mcp-server-esignatures)** - 用于起草、审查和发送具有法律约束力的合同的合同和模板管理。
* <img height="12" width="12" src="https://rainmaker.espressif.com/favicon.ico" alt="ESP RainMaker 标志" /> **[ESP RainMaker](https://github.com/espressif/esp-rainmaker-mcp)** - 官方乐鑫 MCP 服务器，用于控制和管理 ESP RainMaker 设备。
* <img height="12" width="12" src="https://exa.ai/images/favicon-32x32.png" alt="Exa 标志" /> **[Exa](https://github.com/exa-labs/exa-mcp-server)** - 专为 AI 设计的搜索引擎，由 [Exa](https://exa.ai) 提供。
* **[FalkorDB](https://github.com/FalkorDB/FalkorDB-MCPServer)** - FalkorDB 图数据库服务器获取模式并读写 Cypher 查询 [FalkorDB](https://www.falkordb.com)。
* <img height="12" width="12" src="https://fetchserp.com/icon.png" alt="fetchSERP 标志" /> **[fetchSERP](https://github.com/fetchSERP/fetchserp-mcp-server-node)** - 一站式 SEO 和网络智能工具包 API [fetchSERP](https://www.fetchserp.com/)。
* <img height="12" width="12" src="https://fewsats.com/favicon.svg" alt="Fewsats 标志" /> **[Fewsats](https://github.com/Fewsats/fewsats-mcp)** - 启用 AI 代理以安全的方式使用 [Fewsats](https://fewsats.com) 购买任何东西。
* <img height="12" width="12" src="https://fibery.io/favicon.svg" alt="Fibery 标志" /> **[Fibery](https://github.com/Fibery-inc/fibery-mcp-server)** - 在您的 [Fibery](https://fibery.io) 工作区中执行查询和实体操作。
* <img height="12" width="12" src="https://financialdatasets.ai/favicon.ico" alt="Financial Datasets 标志" /> **[Financial Datasets](https://github.com/financial-datasets/mcp-server)** - 专为 AI 代理设计的股票市场 API。
* <img height="12" width="12" src="https://www.gstatic.com/devrel-devsite/prod/v7aeef7f1393bb1d75a4489145c511cdd5aeaa8e13ad0a83ec1b5b03612e66330/firebase/images/favicon.png" alt="Firebase 标志" /> **[Firebase](https://github.com/firebase/firebase-tools/blob/master/src/mcp)** - Firebase 的实验性 [MCP 服务器](https://firebase.google.com/docs/cli/mcp-server)，为您的 AI 工具提供支持。
* <img height="12" width="12" src="https://firecrawl.dev/favicon.ico" alt="Firecrawl 标志" /> **[Firecrawl](https://github.com/mendableai/firecrawl-mcp-server)** - 使用 [Firecrawl](https://firecrawl.dev) 提取网页数据。
* <img height="12" width="12" src="https://avatars.githubusercontent.com/u/100200663?s=200&v=4" alt="Firefly 标志" /> **[Firefly](https://github.com/gofireflyio/firefly-mcp)** - 使用 [Firefly](https://firefly.ai) 集成、发现、管理和代码化云资源。
* <img height="12" width="12" src="https://fireproof.storage/favicon.ico" alt="Fireproof 标志" /> **[Fireproof](https://github.com/fireproof-storage/mcp-database-server)** - 具有实时同步功能的不可变账本数据库。
* <img height="12" width="12" src="https://fixparser.dev/favicon.ico" alt="FIXParser 标志" /> **[FIXParser](https://gitlab.com/logotype/fixparser/-/tree/main/packages/fixparser-plugin-mcp)** - 一个面向 AI 交易代理的现代 FIX 协议引擎。
* <img height="12" width="12" src="https://avatars.githubusercontent.com/u/52471808" alt="Fluid Attacks 标志" /> **[Fluid Attacks](https://github.com/fluidattacks/mcp)** - 与 [Fluid Attacks](https://fluidattacks.com/) API 交互，启用漏洞管理、组织洞察和 GraphQL 查询执行。
* <img height="12" width="12" src="https://forevervm.com/icon.png" alt="ForeverVM 标志" /> **[ForeverVM](https://github.com/jamsocket/forevervm/tree/main/javascript/mcp-server)** - 在代码沙箱中运行 Python。
* <img height="12" width="12" src="https://app.gibsonai.com/favicon.ico" alt="GibsonAI 标志" /> **[GibsonAI](https://github.com/GibsonAI/mcp)** - AI 驱动的云数据库：使用 AI 构建、迁移和部署数据库实例。
* <img height="12" width="12" src="https://gitea.com/assets/img/favicon.svg" alt="Gitea 标志" /> **[Gitea](https://gitea.com/gitea/gitea-mcp)** - 使用 MCP 与 Gitea 实例交互。
* <img height="12" width="12" src="https://gitee.com/favicon.ico" alt="Gitee 标志" /> **[Gitee](https://github.com/oschina/mcp-gitee)** - Gitee API 集成、仓库、问题和拉取请求管理等。
* <img height="12" width="12" src="https://cdn.prod.website-files.com/5ee25cbe47310017adf964da/6323888a9b9f4e22a7bc766b_GG%20Favicon.svg" alt="GitGuardian 标志" /> **[GitGuardian](https://github.com/GitGuardian/gg-mcp)** - GitGuardian 官方 MCP 服务器 - 使用 GitGuardian 行业领先的 API 扫描项目，该 API 拥有超过 500 种密钥检测器，可在密钥到达公共仓库之前防止凭证泄露。使用丰富的上下文数据直接解决安全事件，实现快速自动化修复。
* <img height="12" width="12" src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" alt="GitHub 标志" /> **[GitHub](https://github.com/github/github-mcp-server)** - GitHub 的官方 MCP 服务器。
* <img height="12" width="12" src="https://www.gitkraken.com/wp-content/uploads/2021/03/android-chrome-144x144-1.png" alt="GitKraken 标志" /> **[GitKraken](https://github.com/gitkraken/gk-cli?tab=readme-ov-file#mcp-server)** - 用于交互 GitKraken API 的 CLI。包含一个通过 `gk mcp` 提供的 MCP 服务器，不仅包装了 GitKraken API，还包括 Jira、GitHub、GitLab 等。
* <img height="12" width="12" src="https://app.glean.com/images/favicon3-196x196.png" alt="Glean 标志" /> **[Glean](https://github.com/gleanwork/mcp-server)** - 使用 Glean 的 API 进行企业搜索和聊天。
* <img height="12" width="12" src="https://cdn.jsdelivr.net/gh/jsdelivr/globalping-media@refs/heads/master/icons/android-chrome-192x192.png" alt="Globalping 标志" /> **[Globalping](https://github.com/jsdelivr/globalping-mcp-server)** - 访问数千个探测器网络，运行 ping、traceroute、mtr、http 和 DNS 解析等网络命令。
* <img height="12" width="12" src="https://gnucleus.ai/favicon.ico" alt="gNucleus 标志" /> **[gNucleus 文本到 CAD](https://github.com/gNucleus/text-to-cad-mcp)** - 使用 gNucleus AI 模型从文本生成 CAD 零件和装配体。
* <img height="12" width="12" src="https://www.gstatic.com/cgc/favicon.ico" alt="Google Cloud 标志" /> **[Google Cloud Run](https://github.com/GoogleCloudPlatform/cloud-run-mcp)** - 将代码部署到 Google Cloud Run。
* <img height="12" width="12" src="https://api.gologin.com/favicon.ico" alt="GoLogin 标志" /> **[GoLogin MCP 服务器](https://github.com/gologinapp/gologin-mcp)** - 通过 AI 对话直接管理您的 GoLogin 浏览器配置文件和自动化！
* <img height="12" width="12" src="https://avatars.githubusercontent.com/u/3717923?s=200&v=4" alt="Google Maps Platform 标志" /> **[Google Maps Platform 代码助手](https://github.com/googlemaps/platform-ai/tree/main/packages/code-assist)** - 让代理基于最新的官方文档和代码示例获得最佳地理相关指导和代码。
* <img height="12" width="12" src="https://cdn.prod.website-files.com/6605a2979ff17b2cd1939cd4/6605a460de47e7596ed84f06_icon256.png" alt="gotoHuman 标志" /> **[gotoHuman](https://github.com/gotohuman/gotohuman-mcp-server)** - 人工介入平台 - 允许 AI 代理和自动化工具将审批请求发送到您的 [gotoHuman](https://www.gotohuman.com) 收件箱。
* <img height="12" width="12" src="https://grafana.com/favicon.ico" alt="Grafana 标志" /> **[Grafana](https://github.com/grafana/mcp-grafana)** - 搜索仪表板、调查事件并查询 Grafana 实例中的数据源
* <img height="12" width="12" src="https://grafbase.com/favicon.ico" alt="Grafbase 标志" /> **[Grafbase](https://github.com/grafbase/grafbase/tree/main/crates/mcp)** - 通过单个命令将您的 GraphQL API 转换为高效的 MCP 服务器，并提供模式智能。
* <img height="12" width="12" src="https://cdn.prod.website-files.com/5f5e90c17e7c9eb95c7acb17/61d3457a519242f2c75c725c_favicon.png" alt="Grain 标志" /> **[Grain](https://grain.com/release-note/06-18-2025)** - 在 Claude 中直接访问您的 Grain 会议记录和转录内容，并使用原生的 Claude 提示生成报告。
* <img height="12" width="12" src="https://framerusercontent.com/images/KCOWBYLKunDff1Dr452y6EfjiU.png" alt="Graphlit 标志" /> **[Graphlit](https://github.com/graphlit/graphlit-mcp-server)** - 从 Slack、Gmail 到播客订阅源，以及网页爬取内容，均可导入到可搜索的 [Graphlit](https://www.graphlit.com) 项目中。
* <img height="12" width="12" src="https://cdn.prod.website-files.com/64a5291e7847ac04fe1531ad/64a529af2f1fc7debc26f2a6_favicon-32x32.avif" alt="Gremlin 标志" /> **[Gremlin](https://github.com/gremlin/mcp)** - 官方 [Gremlin](https://www.gremlin.com) MCP 服务器。分析您的可靠性状态，查看最近的测试和混沌工程实验，并生成详细报告。
* <img height="12" width="12" src="https://greptime.com/favicon.ico" alt="Greptime 标志" /> **[GreptimeDB](https://github.com/GreptimeTeam/greptimedb-mcp-server)** - 为 AI 助手提供一种安全且结构化的方式来探索和分析 [GreptimeDB](https://github.com/GreptimeTeam/greptimedb) 中的数据。
* <img height="12" width="12" src="https://growi.org/assets/images/favicon.ico" alt="GROWI 标志" /> **[GROWI](https://github.com/growilabs/growi-mcp-server)** - 官方 MCP 服务器，用于与 GROWI API 集成。
* <img height="12" width="12" src="https://gyazo.com/favicon.ico" alt="Gyazo 标志" /> **[Gyazo](https://github.com/nota/gyazo-mcp-server)** - 搜索、获取、上传和与 Gyazo 图像进行交互，包括元数据和 OCR 数据。
* <img height="12" width="12" src="https://cdn.prod.website-files.com/6374050260446c42f94dc90f/63d828be3e13d32ee6973f35_favicon-32x32.png" alt="Harper 标志" /> **[Harper](https://github.com/HarperDB/mcp-server)** - 一个 MCP 服务器，为 MCP 客户端提供访问 [Harper](https://www.harpersystems.dev/) 内部数据的接口。
* <img height="12" width="12" src="https://www.herokucdn.com/favicons/favicon.ico" alt="Heroku 标志" /> **[Heroku](https://github.com/heroku/heroku-mcp-server)** - 通过由 LLM 驱动的工具与 Heroku 平台进行交互，用于管理应用、插件、dyno、数据库等。
* <img height="12" width="12" src="https://heyoncall.com/favicon.ico" alt="HeyOnCall 标志" /> **[HeyOnCall](https://heyoncall.com/blog/mcp-server-for-paging-a-human)** - 向人类发出通知，将重要或非重要警报发送到免费的 [HeyOnCall](https://heyoncall.com/) iOS 或 Android 应用程序。
* <img height="12" width="12" src="https://www.hiveflow.ai/favicon.ico" alt="Hiveflow 标志" /> **[Hiveflow](https://github.com/hiveflowai/hiveflow-mcp-server)** - 直接从您的助手创建、管理和执行代理 AI 工作流。
* <img height="12" width="12" src="https://img.alicdn.com/imgextra/i3/O1CN01d9qrry1i6lTNa2BRa_!!6000000004364-2-tps-218-200.png" alt="Hologres 标志" /> **[Hologres](https://github.com/aliyun/alibabacloud-hologres-mcp-server)** - 连接到 [Hologres](https://www.alibabacloud.com/en/product/hologres) 实例，获取表元数据，查询和分析数据。
* <img height="12" width="12" src="https://brew.sh/assets/img/favicon.ico" alt="Homebrew 标志" /> **[Homebrew](https://docs.brew.sh/MCP-Server)** 允许 [Homebrew](https://brew.sh) 用户在本地运行 Homebrew 命令。
* <img height="12" width="12" src="https://www.honeycomb.io/favicon.ico" alt="Honeycomb 标志" /> **[Honeycomb](https://github.com/honeycombio/honeycomb-mcp)** 允许 [Honeycomb](https://www.honeycomb.io/) 企业客户查询和分析其数据、警报、仪表板等；并将生产行为与代码库进行交叉参考。
* <img height="12" width="12" src="https://static.hsinfrastatic.net/StyleGuideUI/static-3.438/img/sprocket/favicon-32x32.png" alt="HubSpot 标志" /> **[HubSpot](https://developer.hubspot.com/mcp)** - 连接、管理和与 [HubSpot](https://www.hubspot.com/) CRM 数据进行交互
* <img height="12" width="12" src="https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.svg" alt="HuggingFace 标志" /> **[Hugging Face](https://huggingface.co/settings/mcp)** - 以编程方式连接到 Hugging Face Hub API：进行空间和论文的语义搜索、数据集和模型的探索，并访问所有兼容的 MCP Gradio 工具空间！
* <img height="12" width="12" src="https://hunter.io/favicon.ico" alt="Hunter 标志" /> **[Hunter](https://github.com/hunter-io/hunter-mcp)** - 与 [Hunter API](https://hunter.io) 进行交互，使用自然语言获取 B2B 数据。
* <img height="12" width="12" src="https://app.hyperbolic.xyz/hyperbolic-logo.svg" alt="Hyperbolic Labs 标志" /> **[Hyperbolic](https://github.com/HyperbolicLabs/hyperbolic-mcp)** - 与 Hyperbolic 的 GPU 云进行交互，使代理和 LLM 能够查看和租用可用的 GPU，SSH 登录并为您运行 GPU 驱动的工作负载。
* <img height="12" width="12" src="https://hyperbrowser-assets-bucket.s3.us-east-1.amazonaws.com/Hyperbrowser-logo.png" alt="Hyperbrowser 标志" /> **[Hyperbrowser](https://github.com/hyperbrowserai/mcp)** - [Hyperbrowser](https://www.hyperbrowser.ai/) 是下一代平台，赋能 AI 代理并实现轻松、可扩展的浏览器自动化。
* **[IBM wxflows](https://github.com/IBM/wxflows/tree/main/examples/mcp/javascript)** - IBM 的工具平台，用于为任何数据源构建、测试和部署工具
* <img height="12" width="12" src="https://www.getinboxzero.com/icon.png" alt="Inbox Zero 标志" /> **[Inbox Zero](https://github.com/elie222/inbox-zero/tree/main/apps/mcp-server)** - 电子邮件 [Inbox Zero](https://www.getinboxzero.com) 的 AI 个人助理
* <img height="12" width="12" src="https://www.inflectra.com/Favicon.ico" alt="Inflectra 标志" /> **[Inflectra Spira](https://github.com/Inflectra/mcp-server-spira)** - 通过 [Inflectra](https://www.inflectra.com) 连接到您的 SpiraTest、SpiraTeam 或 SpiraPlan 应用生命周期管理平台实例
* <img height="12" width="12" src="https://inkeep.com/favicon.ico" alt="Inkeep 标志" /> **[Inkeep](https://github.com/inkeep/mcp-server-python)** - 借助 [Inkeep](https://inkeep.com) 对您的内容进行 RAG 搜索
* <img height="12" width="12" src="https://integration.app/favicon.ico" alt="Integration App 标志" /> **[Integration App](https://github.com/integration-app/mcp-server)** - 代表您的客户与其他 SaaS 应用程序进行交互。
* <img height="12" width="12" src="https://www.ip2location.io/favicon.ico" alt="IP2Location.io 标志" /> **[IP2Location.io](https://github.com/ip2location/mcp-ip2location-io)** - 与 IP2Location.io API 交互，检索 IP 地址的地理位置信息。
* <img height="12" width="12" src="https://static.iplocate.io/custom/logo-square-rounded.png" alt="IPLocate 标志" /> **[IPLocate](https://github.com/iplocate/mcp-server-iplocate)** - 使用 [IPLocate.io](https://www.iplocate.io) 查找 IP 地址地理位置、网络信息、检测代理和 VPN，并找到滥用联系人详细信息。
* <img height="12" width="12" src="https://jellyfish.co/favicon.ico" alt="Jellyfish 标志" /> **[Jellyfish](https://github.com/Jellyfish-AI/jellyfish-mcp)** – 通过 [Jellyfish](https://jellyfish.co) 平台为您的 AI 代理提供有关团队软件工程分配和工作流的上下文信息
* <img height="12" width="12" src="https://cdn.simpleicons.org/jetbrains" /> **[JetBrains](https://github.com/JetBrains/mcp-jetbrains)** – 使用 JetBrains IDE 进行代码开发
* <img height="12" width="12" src="https://speedmedia.jfrog.com/08612fe1-9391-4cf3-ac1a-6dd49c36b276/media.jfrog.com/wp-content/uploads/2019/04/20131046/Jfrog16-1.png" alt="JFrog 标志" /> **[JFrog](https://github.com/jfrog/mcp-jfrog)** - [JFrog](https://jfrog.com/) 平台 API 的模型上下文协议 (MCP) 服务器，支持仓库管理、构建跟踪、发布生命周期管理等。
* <img height="12" width="12" src="https://kagi.com/favicon.ico" alt="Kagi 标志" /> **[Kagi Search](https://github.com/kagisearch/kagimcp)** - 使用 Kagi 的搜索 API 进行网页搜索
* <img height="12" width="12" src="https://connection.keboola.com/favicon.ico" alt="Keboola 标志" /> **[Keboola](https://github.com/keboola/keboola-mcp-server)** - 在一个直观的平台上构建强大的数据工作流、集成和分析。
* <img height="12" width="12" src="https://mcp.onkernel.com/favicon.svg" alt="Kernel 标志" /> **[Kernel](https://github.com/onkernel/kernel-mcp-server)** – 通过 MCP 访问 Kernel 的基于云的浏览器。
* <img height="12" width="12" src="https://keywordseverywhere.com/favicon.ico" alt="Keywords Everywhere 标志" /> **[Keywords Everywhere](https://api.keywordseverywhere.com/docs/#/mcp_integration)** – 通过官方 Keywords Everywhere API MCP 服务器访问 SEO 数据。
* <img height="12" width="12" src="https://keywordspeopleuse.com/favicon.ico" alt="KeywordsPeopleUse 标志" /> **[KeywordsPeopleUse.com](https://github.com/data-skunks/kpu-mcp)** - 使用 [KeywordsPeopleUse](https://keywordspeopleuse.com) 查找人们在网上提出的问题。
* <img height="12" width="12" src="https://kirokuforms.com/favicon.svg" alt="KirokuForms 标志" /> **[KirokuForms](https://www.kirokuforms.com/ai/mcp)** - [KirokuForms](https://www.kirokuforms.com) 是一个由人工智能驱动的表单平台，结合了专业表单构建与人工参与（HITL）功能。通过 [MCP 集成](https://kirokuforms.com/ai/mcp) 创建自定义表单、收集提交内容，并将人工监督集成到 AI 工作流中。
* <img height="12" width="12" src="https://raw.githubusercontent.com/klavis-ai/klavis/main/static/klavis-ai.png" alt="Klavis 标志" /> **[Klavis ReportGen](https://github.com/Klavis-AI/klavis/tree/main/mcp_servers/report_generation)** - 通过简单的用户查询创建专业报告。
* <img height="12" width="12" src="https://www.klaviyo.com/media/Favicon-16by16.png" alt="Klaviyo 标志" /> **[Klaviyo](https://developers.klaviyo.com/en/docs/klaviyo_mcp_server)** - 操作你的 [Klaviyo](https://www.klaviyo.com/) 营销数据。
* <img height="12" width="12" src="https://platform.kluster.ai/logo-light.svg" alt="kluster.ai 标志" /> **[kluster.ai](https://docs.kluster.ai/get-started/mcp/overview/)** - kluster.ai 提供 MCP 服务器，将 AI 服务直接引入你的开发工作流，包括幻觉检测等防护机制。
* <img height="12" width="12" src="https://cdn.prod.website-files.com/6347ea26001f0287c592ff91/649953ef7a9ffe1f3e492b5a_Knit%20Logo.svg" alt="Knit 标志" /> **[Knit MCP 服务器](https://developers.getknit.dev/docs/knit-mcp-server-getting-started)** - 可投入生产的远程 MCP 服务器，使你可以连接 CRM、HRIS、薪资、会计、ERP、日历、费用管理及聊天等类别的 10000+ 工具。
* <img height="12" width="12" src="https://knock.app/favicon/favicon-dark.svg" alt="Knock 标志" /> **[Knock MCP 服务器](https://github.com/knocklabs/agent-toolkit#model-context-protocol-mcp)** - 通过电子邮件、应用内消息、推送通知、短信、Slack、MS Teams 发送产品和客户消息。
* <img height="12" width="12" src="https://www.kurrent.io/favicon.ico" alt="Kurrent 标志" /> **[KurrentDB](https://github.com/kurrent-io/mcp-server)** - 这是一个简单的 MCP 服务器，可帮助你在 KurrentDB 上更快地探索数据并制作原型。
* <img height="12" width="12" src="https://kuzudb.com/favicon.ico" alt="Kuzu 标志" /> **[Kuzu](https://github.com/kuzudb/kuzu-mcp-server)** - 该服务器使 LLM 能够检查数据库模式并在提供的 Kuzu 图数据库上执行查询。请参阅 [博客](https://blog.kuzudb.com/post/2025-03-23-kuzu-mcp-server/) 了解调试用例。
* <img height="12" width="12" src="https://avatars.githubusercontent.com/u/187484914" alt="KWDB 标志" /> **[KWDB](https://github.com/KWDB/kwdb-mcp-server)** - 在你的 KWDB 数据库中读取、写入、查询、修改数据以及执行 DDL 操作。
* <img height="12" width="12" src="https://labelstud.io/favicon-16x16.png" alt="Label Studio 标志" /> **[Label Studio](https://github.com/HumanSignal/label-studio-mcp-server)** - 开源数据标注平台。
* <img src="https://avatars.githubusercontent.com/u/188884511?s=48&v=4" alt="Lambda Capture" width="12" height="12"> **[Lambda Capture](https://github.com/lambda-capture/mcp-server)** - 来自美联储、英格兰银行、欧洲央行的宏观经济预测与语义上下文。
* <img height="12" width="12" src="https://langfuse.com/favicon.ico" alt="Langfuse 标志" /> **[Langfuse 提示管理](https://github.com/langfuse/mcp-server-langfuse)** - 用于协作编辑、版本控制、评估和发布提示的开源工具。
* <img height="12" width="12" src="https://laratranslate.com/favicon.ico" alt="Lara Translate 标志" /> **[Lara Translate](https://github.com/translated/lara-mcp)** - Lara Translate API 的 MCP 服务器，提供强大的翻译功能，支持语言检测和上下文感知翻译。
* <img height="12" width="12" src="https://last9.io/favicon.png" alt="Last9 标志" /> **[Last9](https://github.com/last9/last9-mcp-server)** - 将实时生产环境上下文（日志、指标和追踪）无缝引入本地环境，以更快地自动修复代码。
* <img height="12" width="12" src="https://www.launchdarkly.com/favicon.ico" alt="LaunchDarkly 标志" /> **[LaunchDarkly](https://github.com/launchdarkly/mcp-server)** - LaunchDarkly 是一个持续交付平台，提供功能标志即服务，允许开发人员快速且安全地进行迭代。
* <img height="12" width="12" src="https://www.line.me/favicon-32x32.png" alt="LINE 标志" /> **[LINE](https://github.com/line/line-bot-mcp-server)** - 集成 LINE 消息 API，将 AI 代理连接到 LINE 官方账号。
* <img height="12" width="12" src="https://linear.app/favicon.ico" alt="Linear 标志" /> **[Linear](https://linear.app/docs/mcp)** - 搜索、创建和更新 Linear 的问题、项目和评论。
* <img height="12" width="12" src="https://lingo.dev/favicon.ico" alt="Lingo.dev 标志" /> **[Lingo.dev](https://github.com/lingodotdev/lingo.dev/blob/main/mcp.md)** - 使用 [Lingo.dev](https://lingo.dev) 本地化引擎，让你的 AI 代理能说世界上每一种语言。
* <img height="12" width="12" src="https://ligo.ertiqah.com/favicon.avif" alt="LiGo 标志" /> **[LinkedIn MCP Runner](https://github.com/ertiqah/linkedin-mcp-runner)** - 通过 [LiGo](https://ligo.ertiqah.com/) 从 ChatGPT 和 Claude 直接撰写、编辑和安排 LinkedIn 帖子。
* <img src="https://gornschool.com/gorn.png" alt="Lisply" width="12" height="12"> **[Lisply](https://github.com/gornskew/lisply-mcp)** - 面向合规的 Lisp 语言后端的灵活前端。
* <img height="12" width="12" src="https://litmus.io/favicon.ico" alt="Litmus.io 标志" /> **[Litmus.io](https://github.com/litmusautomation/litmus-mcp-server)** - 用于配置 [Litmus](https://litmus.io) Edge 进行工业数据采集、边缘分析和工业 AI 的官方 MCP 服务器。
* <img height="12" width="12" src="https://liveblocks.io/favicon.ico" alt="Liveblocks 标志" /> **[Liveblocks](https://github.com/liveblocks/liveblocks-mcp-server)** - 为 AI 和人工协作提供现成的功能——用它来更快地开发你的 [Liveblocks](https://liveblocks.io) 应用。
* <img height="12" width="12" src="https://logfire.pydantic.dev/favicon.ico" alt="Logfire 标志" /> **[Logfire](https://github.com/pydantic/logfire-mcp)** - 通过 Logfire 提供对 OpenTelemetry 跟踪和指标的访问。
* <img height="12" width="12" src="https://make.magicmealkits.com/favicon.ico" alt="Magic Meal Kits 标志" /> **[Magic Meal Kits](https://github.com/pureugong/mmk-mcp)** - 通过 [Magic Meal Kits](https://make.magicmealkits.com/) 释放 Make 的全部潜力。
* <img height="12" width="12" src="https://www.mailgun.com/favicon.ico" alt="Mailgun 标志" /> **[Mailgun](https://github.com/mailgun/mailgun-mcp-server)** - 与 Mailgun API 交互。
* <img height="12" width="12" src="https://www.mailjet.com/favicon.ico" alt="Mailjet 标志" /> **[Mailjet](https://github.com/mailgun/mailjet-mcp-server)** - 官方 MCP 服务器，允许 AI 代理与 [Sinch Mailjet](https://www.mailjet.com) 的联系人、活动、细分、统计、工作流（及更多）API 交互。
* <img height="12" width="12" src="https://www.make.com/favicon.ico" alt="Make 标志" /> **[Make](https://github.com/integromat/make-mcp-server)** - 将你的 [Make](https://www.make.com/) 场景转化为 AI 助手可调用的工具。
* <img height="12" width="12" src="https://static-assets.mapbox.com/branding/favicon/v1/favicon.ico" alt="Mapbox 标志" /> **[Mapbox](https://github.com/mapbox/mcp-server)** - 通过 Mapbox API（如地理编码、POI 搜索、路线、等时线等）解锁地理空间智能。
* <img height="12" width="12" src="https://www.mariadb.com/favicon.ico" alt="MariaDB 标志" /> **[MariaDB](https://github.com/mariadb/mcp)** - 用于管理和查询 MariaDB 数据库的标准接口，支持标准 SQL 操作和基于向量/嵌入的高级搜索。
* <img height="14" width="14" src="https://raw.githubusercontent.com/rust-mcp-stack/mcp-discovery/refs/heads/main/docs/_media/mcp-discovery-logo.png" alt="mcp-discovery 标志" /> **[MCP Discovery](https://github.com/rust-mcp-stack/mcp-discovery)** - 一款用 Rust 构建的轻量级 CLI 工具，用于发现 MCP 服务器功能。
* <img height="12" width="12" src="https://googleapis.github.io/genai-toolbox/favicons/favicon.ico" alt="数据库 MCP 工具包标志" /> **[MCP 工具包 for Databases](https://github.com/googleapis/genai-toolbox)** - 开源 MCP 服务器，专注于提供易于、快速且安全的数据库工具。支持 AlloyDB、BigQuery、Bigtable、Cloud SQL、Dgraph、MySQL、Neo4j、Postgres、Spanner 等。
* <img height="12" width="12" src="https://www.meilisearch.com/favicon.ico" alt="Meilisearch 标志" /> **[Meilisearch](https://github.com/meilisearch/meilisearch-mcp)** - 与 Meilisearch（全文和语义搜索 API）交互并查询。
* <img height="12" width="12" src="https://memgraph.com/favicon.png" alt="Memgraph 标志" /> **[Memgraph](https://github.com/memgraph/ai-toolkit/tree/main/integrations/mcp-memgraph)** - 在 [Memgraph](https://memgraph.com/) 图数据库中查询你的数据。
* <img height="12" width="12" src="https://www.mercadolibre.com.ar/favicon.ico" alt="MercadoLibre 标志" /> **[Mercado Libre](https://mcp.mercadolibre.com/)** - Mercado Libre 的官方 MCP 服务器。
* <img height="12" width="12" src="https://www.mercadopago.com/favicon.ico" alt="MercadoPago 标志" /> **[Mercado Pago](https://mcp.mercadopago.com/)** - Mercado Pago 官方的 MCP 服务器。
* <img height="12" width="12" src="https://metoro.io/static/images/logos/MetoroLogo.png" alt="Metoro 标志" /> **[Metoro](https://github.com/metoro-io/metoro-mcp-server)** - 查询并与由 Metoro 监控的 Kubernetes 环境进行交互。
* <img height="12" width="12" src="https://claritystatic.azureedge.net/images/logo.ico" alt="Microsoft Clarity 标志"/> **[Microsoft Clarity](https://github.com/microsoft/clarity-mcp-server)** - 官方 MCP 服务器，用于从 [Clarity](https://clarity.microsoft.com) 获取行为分析数据和洞察。
* <img height="12" width="12" src="https://conn-afd-prod-endpoint-bmc9bqahasf3grgk.b01.azurefd.net/releases/v1.0.1735/1.0.1735.4099/commondataserviceforapps/icon.png" alt="Microsoft Dataverse 标志" /> **[Microsoft Dataverse](https://go.microsoft.com/fwlink/?linkid=2320176)** - 使用自然语言与业务数据进行对话 - 发现表、运行查询、检索数据、插入或更新记录，并执行基于业务知识和上下文的自定义提示。
* <img height="12" width="12" src="https://www.microsoft.com/favicon.ico" alt="microsoft.com 网站图标" /> **[Microsoft Learn 文档](https://github.com/microsoftdocs/mcp)** - 提供对 Microsoft 官方文档结构化访问的 MCP 服务器。检索准确、权威且具有上下文感知能力的技术内容，用于代码生成、问答和工作流程构建。
* <img height="12" width="12" src="https://milvus.io/favicon-32x32.png" /> **[Milvus](https://github.com/zilliztech/mcp-server-milvus)** - 搜索、查询并与您的 Milvus 向量数据库中的数据进行交互。
* <img src="https://www.mimilabs.ai/logos/mimilabsSquare.svg" alt="mimilabs" width="12" height="12"> **[mimilabs](https://www.mimilabs.ai/mcp)** - 一个面向美国医疗保健数据的发现指南，涵盖 50 多个政府来源和数千个关于政府资助计划、政策、药品定价、临床试验等公开可用的美国医疗保健数据集。
* <img src="https://avatars.githubusercontent.com/u/94089762?s=48&v=4" alt="Mobb" width="12" height="12"> **[Mobb](https://github.com/mobb-dev/bugsy?tab=readme-ov-file#model-context-protocol-mcp-server)** - [Mobb Vibe Shield](https://vibe.mobb.ai/) MCP 服务器可以识别并修复人工和 AI 编写的代码中的漏洞，确保您的应用程序保持安全，同时不会减缓开发速度。
* <img height="12" width="12" src="https://console.gomomento.com/favicon.ico" /> **[Momento](https://github.com/momentohq/mcp-momento)** - Momento Cache 可帮助您快速提升性能、降低成本，并在任何规模下处理负载。
* <img height="12" width="12" src="https://www.mongodb.com/favicon.ico" /> **[MongoDB](https://github.com/mongodb-js/mongodb-mcp-server)** - 支持 MongoDB Community Server 和 MongoDB Atlas。
* <img height="12" width="12" src="https://moorcheh.ai/Moorcheh-mcp.ico" alt="Moorcheh 标志" /> **[Moorcheh](https://github.com/moorcheh-ai/moorcheh-mcp)** - 嵌入、存储和搜索您的文档，并使用 Moorcheh 的信息论语义搜索引擎构建安全的聊天机器人和 RAG 系统。
* <img height="12" width="12" src="https://www.motherduck.com/favicon.ico" alt="MotherDuck 标志" /> **[MotherDuck](https://github.com/motherduckdb/mcp-server-motherduck)** - 使用 MotherDuck 和本地 DuckDB 查询和分析数据。
* <img height="12" width="12" src="https://docs.mulesoft.com/_/img/favicon.ico" alt="Mulesoft 标志" /> **[Mulesoft](https://www.npmjs.com/package/@mulesoft/mcp-server)** - 使用自然语言在任何兼容的 IDE 中构建、部署和管理 MuleSoft 应用程序。
* <img height="12" width="12" src="https://www.multiplayer.app/favicon-32x32.png" alt="Multiplayer 标志" /> **[Multiplayer](https://www.multiplayer.app/docs/ai/mcp-server)** - 轻松分析您的全栈会话记录。使用 Multiplayer 记录一个 Bug，然后使用 LLM 分析并修复它。
* <img height="12" width="12" src="https://avatars.githubusercontent.com/u/38020270" alt="NanoVMs 标志" /> **[NanoVMs](https://github.com/nanovms/ops-mcp)** - 轻松构建并部署 unikernel 到任何云。
* <img height="12" width="12" src="https://needle-ai.com/images/needle-logo-orange-2-rounded.png" alt="Needle AI 标志" /> **[Needle](https://github.com/needle-ai/needle-mcp)** - 即开即用的生产级 RAG，用于从您自己的文档中搜索和检索数据。
* <img height="12" width="12" src="https://neo4j.com/favicon.ico" alt="Neo4j 标志" /> **[Neo4j](https://github.com/neo4j-contrib/mcp-neo4j/)** - Neo4j 图数据库服务器（包括模式 + 读写 Cypher）和独立的图数据库后端内存。
* <img height="12" width="12" src="https://knowall.ai/favicon.ico" alt="Neo4j Agent Memory 标志" /> **[Neo4j Agent Memory](https://github.com/knowall-ai/mcp-neo4j-agent-memory)** - 使用 Neo4j 知识图谱进行 AI 代理的内存管理。
* <img height="12" width="12" src="https://neo4j.com/favicon.ico" alt="Neo4j 标志" /> **[Neo4j GDS](https://github.com/neo4j-contrib/gds-agent)** - Neo4j 图数据科学服务器，包含全面的图算法，支持复杂的图推理和问答。
* <img height="12" width="12" src="https://avatars.githubusercontent.com/u/183852044?s=48&v=4" alt="Neon 标志" /> **[Neon](https://github.com/neondatabase/mcp-server-neon)** - 与 Neon 无服务器 Postgres 平台进行交互。
* <img height="12" width="12" src="https://app.usenerve.com/favicon.ico" alt="Nerve 标志" /> **[Nerve](https://github.com/nerve-hq/nerve-mcp-server)** - 通过 [Nerve](https://www.usenerve.com/) 在所有 SaaS 应用中搜索并操作公司数据。
* <img height="12" width="12" src="https://www.netdata.cloud/favicon-32x32.png" alt="Netdata 标志" /> **[Netdata](https://github.com/netdata/netdata/blob/master/src/web/mcp/README.md)** - 使用所有可观测性数据（包括指标、日志、系统、容器、进程和网络连接）进行发现、探索、报告和根本原因分析。
* <img height="12" width="12" src="https://www.netlify.com/favicon/icon.svg" alt="Netlify 标志" /> **[Netlify](https://docs.netlify.com/welcome/build-with-ai/netlify-mcp-server/)** - 使用 Netlify 网络平台创建、构建、部署和管理您的网站。
* <img height="12" width="12" src="https://www.thenile.dev/favicon.ico" alt="Nile 标志" /> **[Nile](https://github.com/niledatabase/nile-mcp-server)** - 一个与 Nile 通信的 MCP 服务器 - 为 B2B 应用程序重新设计的 Postgres。使用 LLM 管理和查询数据库、租户、用户、身份验证。
* <img height="12" width="12" src="https://avatars.githubusercontent.com/u/208441832?s=400&v=4" alt="Nodit 标志" /> **[Nodit](https://github.com/noditlabs/nodit-mcp-server)** - 官方 Nodit MCP 服务器，提供对多链 RPC 节点和区块链数据数据 API 的访问。
* <img height="12" width="12" src="https://app.norman.finance/favicons/favicon-32x32.png" alt="Norman 标志" /> **[Norman Finance](https://github.com/norman-finance/norman-mcp-server)** - 用于使用 Norman Finance 管理会计和税务的 MCP 服务器。
* <img height="12" width="12" src="https://avatars.githubusercontent.com/u/4792552?s=200&v=4" alt="Notion 标志" /> **[Notion](https://github.com/makenotion/notion-mcp-server#readme)** - 此项目为 Notion API 实现了一个 MCP 服务器。
* <img height="12" width="12" src="https://www.nutrient.io/assets/images/logos/nutrient.svg" alt="Nutrient 标志" /> **[Nutrient](https://github.com/PSPDFKit/nutrient-dws-mcp-server)** - 使用自然语言创建、编辑、签名、提取文档。
* <img height="12" width="12" src="https://nx.dev/favicon/favicon.svg" alt="Nx 标志" /> **[Nx](https://github.com/nrwl/nx-console/blob/master/apps/nx-mcp)** - 让 LLM 可以访问 [Nx 对代码库的理解](https://nx.dev/features/enhance-AI)，提供有关代码库架构、项目关系和可运行任务的洞察，从而让 AI 能够提供精确的代码建议。
* <img height="12" width="12" src="https://avatars.githubusercontent.com/u/82347605?s=48&v=4" alt="OceanBase 标志" /> **[OceanBase](https://github.com/oceanbase/mcp-oceanbase)** - OceanBase 数据库及其工具的 MCP 服务器。
* <img height="12" width="12" src="https://docs.octagonagents.com/logo.svg" alt="Octagon 标志" /> **[Octagon](https://github.com/OctagonAI/octagon-mcp-server)** - 提供实时投资研究，涵盖广泛的私人和公开市场数据。
* <img height="12" width="12" src="https://octoeverywhere.com/img/logo.png" alt="OctoEverywhere 标志" /> **[OctoEverywhere](https://github.com/OctoEverywhere/mcp)** - 一个 3D 打印 MCP 服务器，允许查询实时状态、摄像头快照和控制 3D 打印机。
* <img height="12" width="12" src="https://avatars.githubusercontent.com/u/211697972" alt="Offorte 标志" /> **[Offorte](https://github.com/offorte/offorte-mcp-server#readme)** - Offorte Proposal Software 官方 MCP 服务器，支持创建和发送商业提案。
* <img height="12" width="12" src="https://maps.olakrutrim.com/favicon.ico" alt="Ola 地图" /> **[OlaMaps](https://pypi.org/project/ola-maps-mcp-server)** - Ola Maps 的官方 MCP 服务器，支持地理编码、路线、地点详细信息等服务。
* <img height="12" width="12" src="https://static.onlyoffice.com/images/favicon.ico" alt="ONLYOFFICE DocSpace" /> **[ONLYOFFICE DocSpace](https://github.com/ONLYOFFICE/docspace-mcp)** - 与 [ONLYOFFICE DocSpace](https://www.onlyoffice.com/docspace.aspx) API 交互以创建房间、管理文件和文件夹。
* <img height="12" width="12" src="https://op.gg/favicon.ico" alt="OP.GG Logo" /> **[OP.GG](https://github.com/opgginc/opgg-mcp)** - 访问跨多个热门游戏的实时游戏数据，例如《英雄联盟》、《云顶之弈》和《无畏契约》，提供英雄分析、电子竞技日程、元游戏阵容以及角色统计数据。
* <img height="12" width="12" src="https://www.openfort.io/img/icon.svg" alt="Openfort" /> **[Openfort](https://github.com/openfort-xyz/mcp)** - 将您的AI连接到Openfort的智能钱包、认证和项目基础设施。
* <img height="12" width="12" src="https://open-metadata.org/favicon.ico" alt="OpenMetadata" /> **[OpenMetadata](https://open-metadata.org/mcp)** - 首个企业级MCP服务器，用于元数据管理。
* <img height="12" width="12" src="https://opensearch.org/wp-content/uploads/2025/01/opensearch_mark_default.svg" alt="OpenSearch Logo" /> **[OpenSearch](https://github.com/opensearch-project/opensearch-mcp-server-py)** - MCP服务器，使AI代理能够在[OpenSearch](https://opensearch.org/)中对存储的数据执行搜索和分析用例。
* <img height="12" width="12" src="https://app.opslevel.com/favicon.ico" alt="OpsLevel" /> **[OpsLevel](https://github.com/opslevel/opslevel-mcp)** - [OpsLevel](https://www.opslevel.com)的官方MCP服务器。
* <img height="12" width="12" src="https://optuna.org/assets/img/favicon.ico" alt="Optuna Logo" /> **[Optuna](https://github.com/optuna/optuna-mcp)** - 官方MCP服务器，使[Optuna](https://optuna.org/)能够无缝编排超参数搜索和其他优化任务。
* <img height="12" width="12" src="https://raw.githubusercontent.com/oracle/mcp/refs/heads/main/oracle.svg" alt="Oracle Logo" /> **[Oracle](https://docs.oracle.com/en/database/oracle/sql-developer-command-line/25.2/sqcug/starting-and-managing-sqlcl-mcp-server.html#GUID-5F916B5D-8670-42BD-9F8B-D3D2424EC47E)** - 官方[Oracle Database: SQLcl ](https://www.oracle.com/database/sqldeveloper/technologies/sqlcl/download/) MCP服务器，通过SQLcl中的原生MCP支持，可访问任何Oracle数据库。
* <img height="12" width="12" src="https://orshot.com/brand/favicon.svg" alt="Orshot Logo" /> **[Orshot](https://github.com/rishimohan/orshot-mcp-server)** - 官方[Orshot](https://orshot.com) MCP服务器，用于从自定义设计模板动态生成图像。
* <img height="12" width="12" src="https://oxylabs.io/favicon.ico" alt="Oxylabs Logo" /> **[Oxylabs](https://github.com/oxylabs/oxylabs-mcp)** - 使用Oxylabs网络API抓取网站，支持动态渲染和解析以进行结构化数据提取。
* <img height="12" width="12" src="https://developer.paddle.com/favicon.svg" alt="Paddle Logo" /> **[Paddle](https://github.com/PaddleHQ/paddle-mcp-server)** - 与Paddle API交互。管理产品目录、计费和订阅以及报告。
* **[PaddleOCR](https://paddlepaddle.github.io/PaddleOCR/latest/en/version3.x/deployment/mcp_server.html)** - 为AI应用程序提供企业级OCR和文档解析功能的MCP服务器。
* <img height="12" width="12" src="https://cdn.brandfolder.io/YX9ETPCP/at/266537g8kh6mmvt24jvsjb/P-GreenRGB.svg" alt="PagerDuty Logo" /> **[PagerDuty](https://github.com/PagerDuty/pagerduty-mcp-server)** - 与您的PagerDuty账户交互，允许您直接从支持MCP的客户端管理事件、服务、排班等。
* **[Pagos](https://github.com/pagos-ai/pagos-mcp)** - 与Pagos API交互。查询信用卡BIN数据，未来还将提供更多功能。
* <img height="12" width="12" src="https://paiml.com/favicon.ico" alt="PAIML Logo" /> **[PAIML MCP Agent Toolkit](https://github.com/paiml/paiml-mcp-agent-toolkit)** - 具备零配置AI上下文生成、Rust/Deno/Python项目模板生成和混合神经符号代码分析的专业项目脚手架工具包。
* <img height="12" width="12" src="https://app.paperinvest.io/favicon.svg" alt="Paper Logo" /> **[Paper](https://github.com/paperinvest/mcp-server)** - 具有市场模拟、22个券商模拟和专业工具的逼真模拟交易平台，支持零风险交易练习。首个集成MCP的交易平台。
* **[Patronus AI](https://github.com/patronus-ai/patronus-mcp-server)** - 测试、评估和优化AI代理和RAG应用程序。
* <img height="12" width="12" src="https://mcp.paubox.com/paubox.png" alt="Paubox Logo" />**[Paubox](https://mcp.paubox.com)** - 官方MCP服务器，允许AI代理与Paubox电子邮件API交互。获得HITRUST认证。
* <img height="12" width="12" src="https://www.paypalobjects.com/webstatic/icon/favicon.ico" alt="PayPal Logo" /> **[PayPal](https://mcp.paypal.com)** - PayPal的官方MCP服务器。
* <img height="12" width="12" src="https://ww2-secure.pearl.com/static/pearl/pearl-logo.svg" alt="Pearl Logo" /> **[Pearl](https://github.com/Pearl-com/pearl_mcp_server)** - 官方MCP服务器，用于与Pearl API交互。将您的AI代理与12,000+认证专家即时连接。
* <img height="12" width="12" src="https://www.perplexity.ai/favicon.ico" alt="Perplexity Logo" /> **[Perplexity](https://github.com/ppl-ai/modelcontextprotocol)** - 连接到Perplexity的Sonar API的MCP服务器，使对话式AI具备实时全网研究能力。
* <img height="12" width="12" src="https://www.pga.com/favicon.ico" alt="PGA Logo" /> **[PGA (Golf)](https://mcp.pga.com)** - PGA的官方MCP服务器，涵盖所有与高尔夫相关的内容。找教练、打高尔夫、提升球技等。
* <img height="12" width="12" src="https://avatars.githubusercontent.com/u/54333248" /> **[Pinecone](https://github.com/pinecone-io/pinecone-mcp)** - [Pinecone](https://docs.pinecone.io/guides/operations/mcp-server)的开发者MCP服务器，帮助开发者在开发环境中搜索文档和管理数据。
* <img height="12" width="12" src="https://avatars.githubusercontent.com/u/54333248" /> **[Pinecone Assistant](https://github.com/pinecone-io/assistant-mcp)** - 从您的[Pinecone Assistant](https://docs.pinecone.io/guides/assistant/mcp-server)知识库中检索上下文。
* <img height="12" width="12" src="https://pipedream.com/favicon.ico" alt="Pipedream Logo" /> **[Pipedream](https://github.com/PipedreamHQ/pipedream/tree/master/modelcontextprotocol)** - 连接2,500个API，拥有8,000+预建工具。
* <img height="12" width="12" src="https://playcanvas.com/static-assets/images/icons/favicon.png" alt="PlayCanvas Logo" /> **[PlayCanvas](https://github.com/playcanvas/editor-mcp-server)** - 使用PlayCanvas编辑器创建交互式3D网页应用。
* <img height="12" width="12" src="https://www.plugged.in/favicon.ico" alt="Plugged.in Logo" /> **[Plugged.in](https://github.com/VeriTeknik/pluggedin-mcp)** - 综合性代理服务器，将多个MCP服务器合并为一个MCP服务器。它提供跨服务器的工具、提示、资源和模板的发现和管理，以及在构建MCP服务器时用于调试的游乐场。
* <img height="12" width="12" src="https://github.com/port-labs/port-mcp-server/blob/main/assets/port_symbol_white.svg" alt="Port Logo" /> **[Port IO](https://github.com/port-labs/port-mcp-server)** - 访问和管理您的软件目录，以提高服务质量和合规性。
* **[PostHog](https://github.com/posthog/mcp)** - 使用官方PostHog MCP服务器与PostHog分析、功能标记、错误跟踪等交互。
* **[Postman API](https://github.com/postmanlabs/postman-api-mcp)** - 使用[Postman API](https://www.postman.com/postman/postman-public-workspace/collection/i2uqzpp/postman-api)管理您的Postman资源。
* <img height="12" width="12" src="https://powerdrill.ai/_next/static/media/powerdrill.0fa27d00.webp" alt="Powerdrill Logo" /> **[Powerdrill](https://github.com/powerdrillai/powerdrill-mcp)** - 提供与Powerdrill数据集交互工具的MCP服务器，实现智能AI数据分析和洞察。
* <img height="12" width="12" src="https://www.prisma.io/images/favicon-32x32.png" alt="Prisma Logo" /> **[Prisma](https://www.prisma.io/docs/postgres/mcp-server)** - 创建和管理Prisma Postgres数据库。
* <img height="12" width="12" src="https://probe.dev/favicon.ico" alt="Probe.dev Logo" /> **[Probe.dev](https://docs.probe.dev/guides/mcp-integration)** - 由[Probe.dev](https://probe.dev)提供支持的综合性媒体分析和验证。托管MCP服务器，具备FFprobe、MediaInfo和Probe Report分析功能。
* <img height="12" width="12" src="https://framerusercontent.com/images/FGzpihs4MxmSJhyGZ6n7f2Xj0.png" alt="Prode.ai Logo" /> **[ProdE](https://github.com/CuriousBox-AI/ProdE-mcp)** - 能够跨多个代码库保留上下文的24/7生产工程师。
* <img height="12" width="12" src="https://github.com/newtype-01/prompthouse-mcp/raw/main/prompthouse-logo-12x12.png" alt="PromptHouse Logo" /> **[PromptHouse](https://github.com/newtype-01/prompthouse-mcp)** - 具备MCP集成的AI客户端个人提示库。
* <img height="12" width="12" src="https://docs.speedscale.com/img/favicon.ico" alt="proxymock Logo" /> **[proxymock](https://docs.speedscale.com/proxymock/reference/mcp/)** - 通过记录实时应用自动生成测试和模拟的MCP服务器。
* <img src="https://www.pubnub.com/favicon/favicon-32x32.png" alt="PubNub" width="12" height="12"> **[PubNub](https://github.com/pubnub/pubnub-mcp-server)** - 获取使用PubNub SDK开发和调用API所需的上下文。
* <img height="12" width="12" src="https://www.pulumi.com/images/favicon.ico" alt="Pulumi Logo" /> **[Pulumi](https://github.com/pulumi/mcp-server)** - 使用[Pulumi](https://pulumi.com)部署和管理云基础设施。
* <img height="12" width="12" src="https://pure.md/favicon.png" alt="Pure.md Logo" /> **[Pure.md](https://github.com/puremd/puremd-mcp)** - 使用 [pure.md](https://pure.md) 可靠地以 Markdown 格式访问网页内容（内置防止机器人检测、代理轮换和无头 JS 渲染功能）。
* <img height="12" width="12" src="https://put.io/images/favicon.ico" alt="Put.io Logo" /> **[Put.io](https://github.com/putdotio/putio-mcp-server)** - 与您的 Put.io 账户交互以下载 torrents。
* <img height="12" width="12" src="https://qdrant.tech/img/brand-resources-logos/logomark.svg" /> **[Qdrant](https://github.com/qdrant/mcp-server-qdrant/)** - 在 Qdrant 向量搜索引擎之上实现语义记忆层。
* <img src="https://api.qoretechnologies.com/api/public/apps/Qorus/qorus-logo.svg" alt="Qorus" width="12" height="12"> **[Qorus](https://qoretechnologies.com/manual/qorus/current/qorus/sysarch.html#mcp_server)** - 连接到任何应用程序、系统或技术，并在无需编码的情况下通过 AI 自动化您的业务流程。
* **[Quickchat AI](https://github.com/incentivai/quickchat-ai-mcp)** - 将您的对话式 [Quickchat AI](https://quickchat.ai) 代理作为 MCP 启动，为 AI 应用提供对其知识库和对话功能的实时访问。
* <img height="12" width="12" src="https://avatars.githubusercontent.com/u/165178062" alt="Ragie Logo" /> **[Ragie](https://github.com/ragieai/ragie-mcp-server/)** - 从连接到 Google Drive、Notion、JIRA 等集成的 [Ragie](https://www.ragie.ai)（RAG）知识库中检索上下文。
* <img height="12" width="12" src="https://www.ramp.com/favicon.ico" /> **[Ramp](https://github.com/ramp-public/ramp-mcp)** - 与 [Ramp](https://ramp.com) 的开发者 API 交互，使用 LLM 对支出进行分析并获得洞察。
* **[Raygun](https://github.com/MindscapeHQ/mcp-server-raygun)** - 与您的 Raygun 账户中的崩溃报告和真实监控数据进行交互。
* <img height="12" width="12" src="https://framerusercontent.com/images/CU1m0xFonUl76ZeaW0IdkQ0M.png" alt="Razorpay Logo" /> **[Razorpay](https://github.com/razorpay/razorpay-mcp-server)** - Razorpay 的官方 MCP 服务器。
* <img height="12" width="12" src="https://www.recraft.ai/favicons/icon.svg" alt="Recraft Logo" /> **[Recraft](https://github.com/recraft-ai/mcp-recraft-server)** - 使用 [Recraft](https://recraft.ai) 生成光栅和矢量（SVG）图像。您还可以编辑、放大图像，创建自己的样式，并将光栅图像矢量化。
* <img height="12" width="12" src="https://avatars.githubusercontent.com/u/1529926" alt="Redis Logo" /> **[Redis](https://github.com/redis/mcp-redis/)** - Redis 官方 MCP 服务器提供一个用于管理和搜索 Redis 数据的接口。
* <img height="12" width="12" src="https://avatars.githubusercontent.com/u/1529926" alt="Redis Logo" /> **[Redis Cloud API](https://github.com/redis/mcp-redis-cloud/)** - Redis Cloud API MCP 服务器允许您使用自然语言管理 Redis Cloud 资源。
* <img src="https://avatars.githubusercontent.com/u/149024635" alt="Reexpress" width="12" height="12"> **[Reexpress](https://github.com/ReexpressAI/reexpress_mcp_server)** - 为您的搜索、软件和数据科学工作流启用相似性-距离-幅度统计验证。
* <img height="12" width="12" src="https://www.reltio.com/wp-content/uploads/2024/03/cropped-cropped-Reltio_Light_Mode_Dark_Mode_Favicon-270x270.png" alt="Reltio Logo" /> **[Reltio](https://github.com/reltio-ai/reltio-mcp-server)** - 一个轻量级的、基于插件的 MCP 服务器，旨在在 Reltio 环境中使用语言模型执行高级实体匹配。
* <img height="12" width="12" src="https://www.rember.com/favicon.ico" alt="Rember Logo" /> **[Rember](https://github.com/rember/rember-mcp)** - 在 [Rember](https://rember.com) 中创建间隔重复记忆卡片，记住在聊天中学到的任何内容。
* <img height="12" width="12" src="http://nonica.io/Nonica-logo.ico" alt="Nonica Logo" /> **[Revit](https://github.com/NonicaTeam/AI-Connector-for-Revit)** - 实时连接和交互您的 Revit 模型。
* <img height="12" width="12" src="https://ui.rilldata.com/favicon.png" alt="Rill Data Logo" /> **[Rill Data](https://docs.rilldata.com/explore/mcp)** - 与 Rill Data 交互以查询和分析您的数据。
* <img height="12" width="12" src="https://riza.io/favicon.ico" alt="Riza logo" /> **[Riza](https://github.com/riza-io/riza-mcp)** - 一个用于 LLM 的任意代码执行和工具使用平台，由 [Riza](https://riza.io) 提供。
* <img height="12" width="12" src="https://cdn.foundation.roblox.com/current/RobloxStudio.ico" alt="Roblox Studio" /> **[Roblox Studio](https://github.com/Roblox/studio-rust-mcp-server)** - Roblox Studio MCP 服务器，创建和操作 Roblox Studio 中的场景和脚本。
* <img src="https://hyper3d.ai/favicon.ico" alt="Rodin" width="12" height="12"> **[Rodin](https://github.com/DeemosTech/rodin-api-mcp)** - 使用 [Hyper3D Rodin](https://hyper3d.ai) 生成 3D 模型。
* <img height="12" width="12" src="https://cdn.prod.website-files.com/66b7de6a233c04f4dac200a6/66bed52680d689629483c18b_faviconV2%20(2).png" alt="Root Signals Logo" /> **[Root Signals](https://github.com/root-signals/root-signals-mcp)** - 使用 LLM-as-Judge 评估来改进和质量控制您的输出。
* **[Routine](https://github.com/routineco/mcp-server)** - 与 [Routine](https://routine.co/) 交互的 MCP 服务器：日历、任务、笔记等。
* <img height="12" width="12" src="https://raw.githubusercontent.com/safedep/.github/refs/heads/main/assets/logo/1.png" alt="SafeDep Logo" /> **[SafeDep](https://github.com/safedep/vet/blob/main/docs/mcp.md)** - SafeDep `vet-mcp` 在项目中使用开源包之前（尤其是在使用 AI 生成的代码建议时），帮助检测其安全风险（如漏洞和恶意代码）。
* <img height="12" width="12" src="https://waf-ce.chaitin.cn/favicon.ico" alt="SafeLine Logo" /> **[SafeLine](https://github.com/chaitin/SafeLine/tree/main/mcp_server)** - [SafeLine](https://safepoint.cloud/landing/safeline) 是一个自托管的 WAF（Web 应用防火墙），用于保护您的 Web 应用免受攻击和漏洞利用。
* <img height="12" width="12" src="https://scrapi.tech/favicon.ico" alt="ScrAPI Logo" /> **[ScrAPI](https://github.com/DevEnterpriseSoftware/scrapi-mcp)** - 使用 [ScrAPI](https://scrapi.tech) 进行网页抓取。提取由于机器人检测、验证码甚至地理位置限制而难以访问的网站内容。
* <img height="12" width="12" src="https://upnorthmedia.co/favicon.ico" alt="Up North Media Logo" /> **[ScreenshotMCP](https://github.com/upnorthmedia/ScreenshotMCP/)** - 用于捕获网站截图的 Model Context Protocol (MCP) 服务器，支持整页、元素和设备尺寸功能。
* <img height="12" width="12" src="https://screenshotone.com/favicon.ico" alt="ScreenshotOne Logo" /> **[ScreenshotOne](https://github.com/screenshotone/mcp/)** - 使用 [ScreenshotOne](https://screenshotone.com/) 渲染网站截图。
* <img height="12" width="12" src="https://pics.fatwang2.com/56912e614b35093426c515860f9f2234.svg" alt="Search1API Logo" /> **[Search1API](https://github.com/fatwang2/search1api-mcp)** - 一个统一的搜索、抓取和站点地图 API。
* <img height="12" width="12" src="https://www.searchunify.com/favicon.ico" alt="SearchUnify Logo" /> **[SearchUnify](https://github.com/searchunify/su-mcp/)** - SearchUnify MCP 服务器（su-mcp）实现与 Claude Desktop 的无缝集成。
* <img height="12" width="12" src="https://secureframe.com/favicon.ico" alt="Secureframe Logo" /> **[Secureframe](https://github.com/secureframe/secureframe-mcp-server)** - 查询安全控制、监控合规性测试，并访问来自 SOC 2、ISO 27001、CMMC、FedRAMP 等框架的审计数据，通过 [Secureframe](https://secureframe.com)。
* <img height="12" width="12" src="https://semgrep.dev/favicon.ico" alt="Semgrep Logo" /> **[Semgrep](https://github.com/semgrep/mcp)** - 使 AI 代理能够通过 [Semgrep](https://semgrep.dev/) 保障代码安全。
* <img height="12" width="12" src="https://avatars.githubusercontent.com/u/187640573?s=48&v=4" alt="Sequa Logo" /> **[Sequa.AI](https://github.com/sequa-ai/sequa-mcp)** - 不再为 Copilot 和 Cursor 拼接上下文。使用 [Sequa MCP](https://github.com/sequa-ai/sequa-mcp)，您的 AI 工具可以即开即用了解您的所有代码库和文档。
* <img height="12" width="12" src="https://cdn.prod.website-files.com/6372338e5477e047032b37a5/64f85e6388a2a5c8c9525b4d_favLogo.png" alt="Shortcut Logo" /> **[Shortcut](https://github.com/useshortcut/mcp-server-shortcut)** - 访问和实施 [Shortcut](https://shortcut.com/) 中的所有项目和任务（Stories）。
* <img height="12" width="12" src="https://www.singlestore.com/favicon-32x32.png?v=277b9cbbe31e8bc416504cf3b902d430"/> **[SingleStore](https://github.com/singlestore-labs/mcp-server-singlestore)** - 与 SingleStore 数据库平台交互。
* <img height="12" width="12" src="https://www.smartbear.com/smartbear/assets/img/favicon.png" alt="SmartBear Logo" /> **[SmartBear](https://github.com/SmartBear/smartbear-mcp)** - 提供通过 [专用工具和资源](https://developer.smartbear.com/smartbear-mcp/docs/mcp-server) 访问 SmartBear 的 API Hub、Test Hub 和 Insight Hub 中多项功能的能力。
* <img src="https://smooth-operator.online/logo48.png" alt="Smooth Operator" width="12" height="12"> **[Smooth Operator](https://smooth-operator.online/agent-tools-api-docs/toolserverdocs)** - 通过 AI 视觉、鼠标、键盘、自动化树和 Web 浏览器实现 Windows 自动化的工具。
* <img height="12" width="12" src="https://app.snyk.io/bundle/favicon-faj49uD9.png" alt="Snyk Logo" /> **[Snyk](https://github.com/snyk/snyk-ls/blob/main/mcp_extension/README.md)** - 通过将 [Snyk](https://snyk.io/) 漏洞扫描直接嵌入代理工作流程来增强安全性。
* <img height="12" width="12" src="https://www.sonarsource.com/favicon.ico" alt="SonarQube Logo" /> **[SonarQube](https://github.com/SonarSource/sonarqube-mcp-server)** - 实现与 [SonarQube](https://www.sonarsource.com/) 服务器或云端的无缝集成，并允许在代理上下文中进行代码片段分析。
* <img src="https://sophtron.com/favicon.ico" alt="Sophtron" width="12" height="12"> **[Sophtron](https://github.com/sophtron/Sophtron-Integration/tree/main/modelcontextprotocol)** - 连接到您的银行、信用卡、公用事业账户，通过 [Sophtron 银行集成](https://sophtron.com) 获取账户余额和交易信息。
* <img height="12" width="12" src="https://www.stackhawk.com/wp-content/uploads/2025/03/icon-512x512-2-150x150.png" alt="StackHawk Logo" /> **[StackHawk](https://github.com/stackhawk/stackhawk-mcp)** - 使用 [StackHawk](https://www.stackhawk.com/) 测试并修复代码或可视化编码应用程序中的安全问题。
* <img height="12" width="12" src="https://www.starrocks.com/favicon.ico" alt="StarRocks Logo" /> **[StarRocks](https://github.com/StarRocks/mcp-server-starrocks)** - 与 [StarRocks](https://www.starrocks.io/) 交互
* <img height="12" width="12" src="https://downloads.steadybit.com/logomark.svg" alt="Steadybit Logo" /> **[Steadybit](https://github.com/steadybit/mcp)** - 与 [Steadybit](https://www.steadybit.com/) 交互
* <img height="12" width="12" src="https://stripe.com/favicon.ico" alt="Stripe Logo" /> **[Stripe](https://github.com/stripe/agent-toolkit)** - 与 Stripe API 交互
* <img height="12" width="12" src="https://sunra.ai/favicon.ico" alt="Sunra AI Logo" /> **[Sunra AI](https://github.com/sunra-ai/sunra-clients/tree/main/mcp-server)** - 在 [Sunra.ai](https://sunra.ai) 上搜索和运行 AI 模型。发现模型，创建视频、图像和 3D 模型内容，跟踪其状态，并管理生成的媒体。
* <img height="12" width="12" src="https://supabase.com/favicon/favicon.ico" alt="Supabase Logo" /> **[Supabase](https://github.com/supabase-community/supabase-mcp)** - 与 Supabase 交互：创建表、查询数据、部署边缘函数等。
* <img height="12" width="12" src="https://supadata.ai/favicon.ico" alt="Supadata Logo" /> **[Supadata](https://github.com/supadata-ai/mcp)** - [Supadata](https://supadata.ai) 的官方 MCP 服务器 - 为创作者提供 YouTube、TikTok、X 和网络数据。
* <img height="12" width="12" src="https://d12w4pyrrczi5e.cloudfront.net/archive/50eb154ab859c63a8f1c850f9fe094e25d35e929/images/favicon.ico" alt="Tako Logo" /> **[Tako](https://github.com/TakoData/tako-mcp)** - 使用自然语言搜索 [Tako](https://trytako.com)，以可视化方式获取实时金融、体育、天气和公共数据。
* <img height="12" width="12" src="https://tavily.com/favicon.ico" alt="Tavily Logo" /> **[Tavily](https://github.com/tavily-ai/tavily-mcp)** - 由 [Tavily](https://tavily.com/) 提供支持的 AI 代理搜索引擎（搜索 + 提取）
* <img height="12" width="12" src="https://avatars.githubusercontent.com/u/10522416?s=200&v=4" alt="Telnyx Logo" /> **[Telnyx](https://github.com/team-telnyx/telnyx-mcp-server)** - 用于构建 AI 驱动通信应用程序的官方 MCP 服务器。创建语音助手、发送短信营销活动、管理电话号码，并以企业级可靠性集成实时消息。包括远程 [streamable-http](https://api.telnyx.com/v2/mcp) 和 [sse](https://api.telnyx.com/mcp/sse) 服务器。
* <img height="12" width="12" src="https://avatars.githubusercontent.com/u/1615979?s=200&v=4" alt="Teradata Logo" /> **[Teradata](https://github.com/Teradata/teradata-mcp-server)** - 此 MCP 服务器支持在 [Teradata](https://teradata.com) 平台上进行多任务数据分析的工具和提示。
* <img height="12" width="12" src="https://raw.githubusercontent.com/hashicorp/terraform-mcp-server/main/public/images/Terraform-LogoMark_onDark.svg" alt="Terraform Logo" /> **[Terraform](https://github.com/hashicorp/terraform-mcp-server)** - 无缝集成 Terraform 生态系统，为基础设施即代码（IaC）开发提供高级自动化和交互功能，由 [Terraform](https://www.hashicorp.com/en/products/terraform) 提供支持。
* <img height="12" width="12" src="https://www.textin.com/favicon.png" alt="TextIn Logo" /> **[TextIn](https://github.com/intsig-textin/textin-mcp)** - [TextIn](https://www.textin.com/?from=github_mcp) API 的 MCP 服务器，是一个用于从文档中提取文本和执行 OCR 的工具，也支持将文档转换为 Markdown。
* <img height="12" width="12" src="https://avatars.githubusercontent.com/u/106156665?s=200" alt="Thena Logo" /> **[Thena](https://mcp.thena.ai)** - Thena 的 MCP 服务器，使用户和 AI 代理能够与 Thena 的服务交互，并通过不同渠道（如 Slack、电子邮件、网页、Discord 等）管理客户。
* <img height="12" width="12" src="https://avatars.githubusercontent.com/u/24291394?v=4" alt="ThingsBoard" /> **[ThingsBoard](https://github.com/thingsboard/thingsboard-mcp)** - ThingsBoard MCP 服务器为 LLM 和 AI 代理提供自然语言接口，以与您的 ThingsBoard IoT 平台交互。
* <img height="12" width="12" src="https://www.lg.com/favicon.ico" alt="ThinQ Logo" /> **[ThinQ Connect](https://github.com/thinq-connect/thinqconnect-mcp)** - 通过 ThinQ Connect MCP 服务器与 LG ThinQ 智能家居设备和电器交互。
* <img height="12" width="12" src="https://thirdweb.com/favicon.ico" alt="Thirdweb Logo" /> **[Thirdweb](https://github.com/thirdweb-dev/ai/tree/main/python/thirdweb-mcp)** - 读写超过 2,000 条区块链，支持数据查询、合约分析/部署和交易执行，由 [Thirdweb](https://thirdweb.com/) 提供支持。
* <img height="12" width="12" src="https://www.thoughtspot.com/favicon-16x16.png" alt="ThoughtSpot Logo" /> **[ThoughtSpot](https://github.com/thoughtspot/mcp-server)** - AI 就是新的 BI。为团队中的每个人提供专职的数据分析师。将 [ThoughtSpot](https://thoughtspot.com) 的强大功能带入 Claude 或任何 MCP 主机。
* <img height="12" width="12" src="https://tianji.msgbyte.com/img/dark-brand.svg" alt="Tianji Logo" /> **[Tianji](https://github.com/msgbyte/tianji/tree/master/apps/mcp-server)** - 无论自托管还是云平台，都可以与 Tianji 平台交互，由 [Tianji](https://tianji.msgbyte.com/) 提供支持。
* <img height="12" width="12" src="https://www.pingcap.com/favicon.ico" alt="TiDB Logo" /> **[TiDB](https://github.com/pingcap/pytidb)** - 用于与 TiDB 数据库平台交互的 MCP 服务器。
* <img height="12" width="12" src="https://www.tinybird.co/favicon.ico" alt="Tinybird Logo" /> **[Tinybird](https://github.com/tinybirdco/mcp-tinybird)** - 与 Tinybird 无服务器 ClickHouse 平台交互。
* <img height="12" width="12" src="https://b2729162.smushcdn.com/2729162/wp-content/uploads/2023/10/cropped-Favicon-1-192x192.png?lossy=1&strip=1&webp=1" alt="Tldv Logo" /> **[Tldv](https://gitlab.com/tldv/tldv-mcp-server)** - 通过 [tl;dv](https://tldv.io) 将您的 AI 代理连接到 Google-Meet、Zoom 和 Microsoft Teams。
* <img height="12" width="12" src="https://cdn.tokenmetrics.com/logo.svg" alt="Token Metrics Logo" /> **[Token Metrics](https://github.com/token-metrics/mcp)** - [Token Metrics](https://www.tokenmetrics.com/) 集成，用于获取实时加密货币市场数据、交易信号、价格预测和高级分析。
* <img height="12" width="12" src="https://di8m9w6rqrh5d.cloudfront.net/2G3TRwfv1w3GTLfmT7Dmco1VddoFTI5P/1920_6b7e7ec2-d897-4cd7-94f3-46a8301212c3.png" alt="TomTom Logo" /> **[TomTom-MCP](https://github.com/tomtom-international/tomtom-mcp)** - [TomTom](https://www.tomtom.com/) MCP 服务器通过提供对 TomTom 位置服务（包括搜索、路线、交通和静态地图数据）的无缝访问，简化地理空间开发。
* <img height="12" width="12" src="https://images.thetradeagent.ai/trade_agent/logo.svg" alt="Trade Agent Logo" /> **[Trade Agent](https://github.com/Trade-Agent/trade-agent-mcp)** - 通过 [Trade Agent](https://thetradeagent.ai) 在您的经纪商上执行股票和加密货币交易。
* <img height="18" width="18" src="https://github.com/twelvedata/mcp/raw/develop/favicon.ico" alt="Twelvedata Logo" /> **[Twelve Data](https://github.com/twelvedata/mcp)** — 通过我们的官方 [Twelve Data](https://twelvedata.com) MCP 服务器将您的 AI 代理与实时和历史金融市场数据集成。
* <img height="12" width="12" src="https://www.twilio.com/content/dam/twilio-com/core-assets/social/favicon-16x16.png" alt="Twilio Logo" /> **[Twilio](https://github.com/twilio-labs/mcp)** - 与 [Twilio](https://www.twilio.com/en-us) API 交互以发送短信、管理电话号码、配置账户等。
* <img height="12" width="12" src="https://uberall.com/media/favicon.svg" alt="Uberall Logo" /> **[Uberall](https://github.com/uberall/uberall-mcp-server)** – 通过 [uberall](https://uberall.com) 管理多地点存在，包括列表、评论和社交发布。
* <img height="12" width="12" src="https://avatars.githubusercontent.com/u/91906527" alt="Unblocked Logo" /> **[Unblocked](https://docs.getunblocked.com/unblocked-mcp)** 通过为您的 AI 驱动的 IDE 提供对 Slack、Confluence、Google Docs、JIRA 等上下文的访问权限，帮助它们生成更快、更准确的代码，由 [Unblocked](https://getunblocked.com) 提供支持。
* <img height="12" width="12" src="https://unifai.network/favicon.ico" alt="UnifAI Logo" /> **[UnifAI](https://github.com/unifai-network/unifai-mcp-server)** - 使用 [UnifAI Network](https://unifai.network) 动态搜索并调用工具
* <img height="12" width="12" src="https://framerusercontent.com/images/plcQevjrOYnyriuGw90NfQBPoQ.jpg" alt="Unstructured Logo" /> **[Unstructured](https://github.com/Unstructured-IO/UNS-MCP)** - 在 [Unstructured Platform](https://unstructured.io) 上设置并交互非结构化数据处理工作流
* <img height="12" width="12" src="https://upstash.com/icons/favicon-32x32.png" alt="Upstash Logo" /> **[Upstash](https://github.com/upstash/mcp-server)** - 使用自然语言管理 [Upstash](https://upstash.com/) 上的 Redis 数据库并运行 Redis 命令
* <img src="https://www.vantage.sh/favicon.ico" alt="Vantage" width="12" height="12"> **[Vantage](https://github.com/vantage-sh/vantage-mcp-server)** - 与组织的云成本支出进行交互
* <img height="12" width="12" src="https://mcp.variflight.com/favicon.ico" alt="VariFlight Logo" /> **[VariFlight](https://github.com/variflight/variflight-mcp)** - VariFlight 官方 MCP 服务器，提供查询航班信息、天气数据、舒适度指标、最低可用票价及其他民航相关数据的工具
* <img height="12" width="12" src="https://docs.octagonagents.com/logo.svg" alt="Octagon Logo" /> **[VCAgents](https://github.com/OctagonAI/octagon-vc-agents)** - 与投资人代理（如 Wilson 或 Thiel）进行交互，持续更新市场情报
* **[Vectorize](https://github.com/vectorize-io/vectorize-mcp-server/)** - [Vectorize](https://vectorize.io) MCP 服务器，提供高级检索、私有深度研究、任意格式到 Markdown 的文件提取和文本分块功能
* <img height="12" width="12" src="https://static.verbwire.com/favicon-16x16.png" alt="Verbwire Logo" /> **[Verbwire](https://github.com/verbwire/verbwire-mcp-server)** - 通过 Verbwire API 部署智能合约、铸造 NFT、管理 IPFS 存储等
* <img height="12" width="12" src="http://vercel.com/favicon.ico" alt="Vercel Logo" /> **[Vercel](https://vercel.com/docs/mcp/vercel-mcp)** - 访问日志、搜索文档以及管理项目和部署
* <img height="12" width="12" src="https://verodat.io/assets/favicon-16x16.png" alt="Verodat Logo" /> **[Verodat](https://github.com/Verodat/verodat-mcp-server)** - 与 Verodat AI Ready Data 平台交互
* <img height="12" width="12" src="https://www.veyrax.com/favicon.ico" alt="VeyraX Logo" /> **[VeyraX](https://github.com/VeyraX/veyrax-mcp)** - 控制所有 100+ API 集成和 UI 组件的单一工具
* <img height="12" width="12" src="https://avatars.githubusercontent.com/u/174736222?s=200&v=4" alt="VictoriaMetrics Logo" /> **[VictoriaMetrics](https://github.com/VictoriaMetrics-Community/mcp-victoriametrics)** - 与 [VictoriaMetrics APIs](https://docs.victoriametrics.com/victoriametrics/url-examples/) 和 [文档](https://docs.victoriametrics.com/) 进行全面集成，用于监控、可观测性和调试与 VictoriaMetrics 实例相关的任务
* <img height="12" width="12" src="https://framerusercontent.com/images/ijlYG00LOcMD6zR1XLMxHbAwZkM.png" alt="VideoDB Director" /> **[VideoDB Director](https://github.com/video-db/agent-toolkit/tree/main/modelcontextprotocol)** - 创建 AI 驱动的视频工作流，包括自动剪辑、内容审核、语音克隆、亮点生成以及可搜索的视频片段——所有功能均可通过简单的 API 和直观的基于聊天的界面访问
* <img height="12" width="12" src="https://landing.ai/wp-content/uploads/2024/04/cropped-favicon-192x192.png" alt="LandingAI VisionAgent" /> **[VisionAgent MCP](https://github.com/landing-ai/vision-agent-mcp)** - 一个简单的 MCP 服务器，使您的 LLM 能更好地对图像、视频和文档进行推理
* <img height="12" width="12" src="https://raw.githubusercontent.com/mckinsey/vizro/main/vizro-core/docs/assets/images/favicon.png" alt="Vizro Logo" /> **[Vizro](https://github.com/mckinsey/vizro/tree/main/vizro-mcp)** - 用于创建经过验证且易于维护的数据图表和仪表板的工具和模板
* <img height="12" width="12" src="https://wavespeed.ai/logo.webp" alt="WaveSpeed Logo" /> **[WaveSpeed](https://github.com/WaveSpeedAI/mcp-server)** - WaveSpeed MCP 服务器为 AI 代理提供图像和视频生成功能
* <img height="12" width="12" src="https://waystation.ai/images/logo.svg" alt="WayStation Logo" /> **[WayStation](https://github.com/waystation-ai/mcp)** - 通用 MCP 服务器，用于连接 Notion、Monday、AirTable 等流行生产力工具
* <img height="12" width="12" src="https://www.webflow.com/favicon.ico" alt="Webflow Logo"> **[Webflow](https://github.com/webflow/mcp-server)** - 与 Webflow 站点、页面和集合进行交互
* <img height="12" width="12" src="https://webscraping.ai/favicon.ico" alt="WebScraping.AI Logo" /> **[WebScraping.AI](https://github.com/webscraping-ai/webscraping-ai-mcp-server)** - 与 **[WebScraping.AI](https://WebScraping.AI)** 交互以进行网页数据提取和抓取
* <img height="12" width="12" src="https://winston-app-production-public.s3.us-east-1.amazonaws.com/winston-ai-favicon-light.svg" alt="Winston.AI Logo" /> **[Winston AI](https://github.com/gowinston-ai/winston-ai-mcp-server)** - AI 检测 MCP 服务器，在检测文本和图像中的 AI 使用方面具有行业领先的准确率。[Winston AI](https://gowinston.ai) MCP 服务器还提供强大的查重功能，以帮助维护内容的完整性
* <img height="12" width="12" src="https://www.xero.com/favicon.ico" alt="Xero Logo" /> **[Xero](https://github.com/XeroAPI/xero-mcp-server)** - 使用我们的官方 MCP 服务器与企业中的会计数据进行交互
* <img height="12" width="12" src="https://storage.yandexcloud.net/ydb-www-prod-site-assets/favicon-202305/favicon.ico" alt="YDB Logo" /> **[YDB](https://github.com/ydb-platform/ydb-mcp)** - 查询 [YDB](https://ydb.tech/) 数据库
* <img height="12" width="12" src="https://fe-resource.yeelight.com/logo-black.jpeg" alt="Yeelight Logo" /> **[Yeelight MCP Server](https://github.com/Yeelight/yeelight-iot-mcp)** - 官方 [Yeelight MCP Server](https://github.com/Yeelight/yeelight-iot-mcp) 使用户能够使用自然语言控制和查询其 [Yeelight](https://en.yeelight.com/) 智能设备，提供无缝且高效的 AI 与人类交互体验
* <img height="12" width="12" src="https://cdn.prod.website-files.com/632cd328ed2b485519c3f689/6334977a5d1a542102d4b9b5_favicon-32x32.png" alt="YepCode Logo" /> **[YepCode](https://github.com/yepcode/mcp-server-js)** - 在一个安全、可扩展的沙箱环境中运行代码，全面支持依赖项、密钥、日志以及对 API 或数据库的访问。由 [YepCode](https://yepcode.io) 提供支持
* <img height="12" width="12" src="https://www.yugabyte.com/favicon-16x16.png" alt="YugabyteDB Logo" /> **[YugabyteDB](https://github.com/yugabyte/yugabytedb-mcp-server)** - 用于与 [YugabyteDB](https://www.yugabyte.com/) 数据库交互的 MCP 服务器
* <img height="12" width="12" src="https://avatars.githubusercontent.com/u/14069894" alt="Yunxin Logo" /> **[Yunxin](https://github.com/netease-im/yunxin-mcp-server)** - 连接到 Yunxin 的 IM/RTC/DATA 开放 API 的 MCP 服务器
* <img height="12" width="12" src="https://cdn.zapier.com/zapier/images/favicon.ico" alt="Zapier Logo" /> **[Zapier](https://zapier.com/mcp)** - 立即将您的 AI 代理连接到 8,000 个应用
* **[ZenML](https://github.com/zenml-io/mcp-zenml)** - 通过您的 [ZenML](https://www.zenml.io) MCP 服务器与 MLOps 和 LLMOps 流水线进行交互
* <img height="12" width="12" src="https://zizai.work/images/logo.jpg" alt="ZIZAI Logo" /> **[ZIZAI Recruitment](https://github.com/zaiwork/mcp)** - 与新一代智能招聘平台进行交互，该平台由 [ZIZAI Recruitment](https://zizai.work) 为求职者和雇主提供支持

### 🌎 社区服务器

不断增长的社区开发和维护的服务器集合展示了 MCP 在不同领域的各种应用场景。

> \[!NOTE]  
> 社区服务器是**未经测试**的，应**自行承担风险**使用。它们不隶属于或由 Anthropic 认可。

* **[1mcpserver](https://github.com/particlefuture/1mcpserver)** - MCP 的 MCP。自动发现、配置并在本地机器上添加 MCP 服务器。
* **[1Panel](https://github.com/1Panel-dev/mcp-1panel)** - 提供 1Panel 交互的 MCP 服务器实现。
* **[A2A](https://github.com/GongRzhe/A2A-MCP-Server)** - 桥接模型上下文协议 (MCP) 与代理到代理 (A2A) 协议的 MCP 服务器，使支持 MCP 的 AI 助手（如 Claude）能够无缝地与 A2A 代理交互。
* **[Ableton Live](https://github.com/Simon-Kansara/ableton-live-mcp-server)** - 用于控制 Ableton Live 的 MCP 服务器。
* **[Ableton Live](https://github.com/ahujasid/ableton-mcp)** (作者：ahujasid) - 提供提示驱动音乐创作的 Ableton 集成。
* **[Actor Critic Thinking](https://github.com/aquarius-wing/actor-critic-thinking-mcp)** - 用于性能评估的 Actor-Critic 思维
* **[Adobe Commerce](https://github.com/rafaelstz/adobe-commerce-dev-mcp)** — 用于与 Adobe Commerce GraphQL API（包括订单、产品、客户等）交互的 MCP
* **[ADR Analysis](https://github.com/tosin2013/mcp-adr-analysis-server)** - AI 驱动的架构决策记录 (ADR) 分析服务器，为软件开发项目提供架构洞察、技术栈检测、安全检查和 TDD 工作流增强
* **[AgentBay](https://github.com/Michael98671/agentbay)** - 提供无服务器云基础设施的 AI 代理 MCP 服务器
* **[AgentMode](https://www.agentmode.app)** - 通过单一的 MCP 服务器连接数十个数据库、数据仓库、Github 等。可在本地、云端或企业内部运行 Docker 镜像。
* **[AI Agent Marketplace Index](https://github.com/AI-Agent-Hub/ai-agent-marketplace-index-mcp)** - 用于从 [AI Agent Marketplace Index](http://www.deepnlp.org/store/ai-agent) 搜索超过5000+个 AI 智能代理和各类工具，并监控 AI 智能代理的流量。
* **[AI Tasks](https://github.com/jbrinkman/valkey-ai-tasks)** - 通过集成的任务管理与追踪工具让 AI 管理复杂计划。支持 STDIO、SSE 和可流式传输的 HTTP 协议。
* **[ai-Bible](https://github.com/AdbC99/ai-bible)** - 可靠且可重复地搜索圣经内容 [ai-Bible Labs](https://ai-bible.com)
* **[Airbnb](https://github.com/openbnb-org/mcp-server-airbnb)** - 提供搜索 Airbnb 及获取房源详细信息的工具。
* **[Airflow](https://github.com/yangkyeongmo/mcp-server-apache-airflow)** - 一个使用官方 Python 客户端连接 [Apache Airflow](https://airflow.apache.org/) 的 MCP 服务器。
* **[Airtable](https://github.com/domdomegg/airtable-mcp-server)** - 提供对 [Airtable](https://airtable.com/) 数据库的读写访问权限，并支持模式检查。
* **[Airtable](https://github.com/felores/airtable-mcp)** - Airtable 模型上下文协议服务器。
* **[Algorand](https://github.com/GoPlausible/algorand-mcp)** - 一个全面的 MCP 服务器，支持 40+ 个工具交互和 60+ 个资源访问，同时包含许多与 Algorand 区块链交互的有用提示。
* **[Amadeus](https://github.com/donghyun-chae/mcp-amadeus)** (作者：donghyun-chae) - 一个 MCP 服务器，用于访问、探索和与 Amadeus 航班报价搜索 API 交互，以获取详细的航班选项，包括航空公司、时间、持续时间和定价数据。
* **[Amazon Ads](https://github.com/MarketplaceAdPros/amazon-ads-mcp-server)** - 通过 [MarketplaceAdPros](https://marketplaceadpros.com) 提供与 Amazon Advertising 交互功能的 MCP 服务器。
* **[AniList](https://github.com/yuna0x0/anilist-mcp)** (作者：yuna0x0) - 一个用于与 AniList API 交互的 MCP 服务器，允许你搜索动漫和漫画、检索用户数据并管理你的观看列表。
* **[Anki](https://github.com/scorzeth/anki-mcp-server)** - 用于与你的 [Anki](https://apps.ankiweb.net) 卡组和卡片交互的 MCP 服务器。
* **[Anki](https://github.com/nietus/anki-mcp)** - 本地运行并与 Anki 和 Ankiconnect 交互的 MCP 服务器。支持创建、更新、搜索和过滤卡片及卡组，包括批量更新和其他高级工具。
* **[AntV Chart](https://github.com/antvis/mcp-server-chart)** - 一个用于使用 [AntV](https://github.com/antvis) 生成 15+ 种可视化图表的模型上下文协议服务器。
* **[Any Chat Completions](https://github.com/pyroprompts/any-chat-completions-mcp)** - 与任何兼容 OpenAI SDK 的 Chat Completions API（如 OpenAI、Perplexity、Groq、xAI 等）交互。
* **[Apache Gravitino(孵化中)](https://github.com/datastrato/mcp-server-gravitino)** - 允许 LLM 使用 Gravitino 探索结构化和非结构化数据的元数据，并执行包括标记/分类在内的数据治理任务。
* **[APIWeaver](https://github.com/GongRzhe/APIWeaver)** - 一个可以根据 Web API 配置动态创建 MCP 服务器的服务器。这使你可以轻松地将任何 REST API、GraphQL 端点或 Web 服务集成到 MCP 兼容的工具中，供如 Claude 等 AI 助手使用。
* **[Apollo IO MCP Server](https://github.com/AgentX-ai/apollo-io-mcp-server)** - apollo.io 的 MCP 服务器。通过代理获取/丰富个人和组织的联系人数据。
* **[Apple Books](https://github.com/vgnshiyer/apple-books-mcp)** - 与你的 Apple Books 图书馆交互，管理你的书籍收藏，总结高亮内容、笔记等。
* **[Apple Calendar](https://github.com/Omar-v2/mcp-ical)** - 一个允许你通过自然语言与 macOS 日历交互的 MCP 服务器，包括创建事件、修改事件、列出日程安排、查找空闲时间段等功能。
* **[Apple Docs](https://github.com/kimsungwhee/apple-docs-mcp)** - 一个功能强大的模型上下文协议（MCP）服务器，可通过自然语言查询提供对 Apple 开发者文档的无缝访问。在你支持 AI 的开发环境中直接搜索、浏览并获取有关 Apple 框架、API、示例代码等详细信息。
* **[Apple Script](https://github.com/peakmojo/applescript-mcp)** - 一个 MCP 服务器，允许 LLM 运行 AppleScript 代码，以完全控制 Mac 上的任何内容，无需设置。
* **[APT MCP](https://github.com/GdMacmillan/apt-mcp-server)** - 一个使用 AI 智能代理运行 Debian 包管理器（apt）命令的 MCP 服务器。
* **[Aranet4](https://github.com/diegobit/aranet4-mcp-server)** - 用于管理你的 Aranet4 CO2 传感器的 MCP 服务器。获取数据并存储在本地 SQLite 中。可以对历史数据提出问题。
* **[ArangoDB](https://github.com/ravenwits/mcp-server-arangodb)** - 提供通过 [ArangoDB](https://arangodb.com/) 进行数据库交互功能的 MCP 服务器。
* **[Arduino](https://github.com/vishalmysore/choturobo)** - 一个 MCP 服务器，使用 Claude AI 和 Arduino（ESP32）实现 AI 驱动的机器人技术，用于现实世界的自动化和与机器人的交互。
* **[arXiv API](https://github.com/prashalruchiranga/arxiv-mcp-server)** - 一个通过自然语言与 arXiv API 交互的 MCP 服务器。
* **[arxiv-latex-mcp](https://github.com/takashiishida/arxiv-latex-mcp)** - 一个获取并处理 arXiv LaTeX 源文件以精确解析论文中数学表达式的 MCP 服务器。
* **[Atlassian](https://github.com/sooperset/mcp-atlassian)** - 与 Atlassian Cloud 产品（Confluence 和 Jira）交互，包括搜索/阅读 Confluence 空间/页面、访问 Jira 问题及项目元数据。
* **[Atlassian Server (作者：phuc-nt)](https://github.com/phuc-nt/mcp-atlassian-server)** - 一个将 AI 智能代理（Cline、Claude Desktop、Cursor 等）连接到 Atlassian Jira 和 Confluence 的 MCP 服务器，通过模型上下文协议实现数据查询和操作。
* **[Attestable MCP](https://github.com/co-browser/attestable-mcp-server)** - 通过 Gramine 在可信执行环境（TEE）内运行的 MCP 服务器，展示使用 [RA-TLS](https://gramine.readthedocs.io/en/stable/attestation.html) 的远程认证。这允许 MCP 客户端在连接前验证服务器。
* **[Audius](https://github.com/glassBead-tc/audius-mcp-atris)** - Audius + AI = Atris。通过 Claude 与粉丝互动、流媒体播放音乐、为喜欢的艺术家打赏等。
* **[AutoML](https://github.com/emircansoftware/MCP_Server_DataScience)** - 一个用于数据分析流程的 MCP 服务器，包括读取、预处理、特征工程、模型选择、可视化和超参数调优。
* **[AWS](https://github.com/rishikavikondala/mcp-server-aws)** - 使用 LLM 对你的 AWS 资源执行操作。
* **[AWS Athena](https://github.com/lishenxydlgzs/aws-athena-mcp)** - 用于 AWS Athena 的 MCP 服务器，可在 Glue Catalog 上运行 SQL 查询。
* **[AWS Cognito](https://github.com/gitCarrot/mcp-server-aws-cognito)** - 连接到 AWS Cognito 进行身份验证和用户管理的 MCP 服务器。
* **[AWS Cost Explorer](https://github.com/aarora79/aws-cost-explorer-mcp-server)** - 通过检查跨区域、服务、实例类型和基础模型的支出，优化你的 AWS 花费（包括 Amazon Bedrock 花费）的 MCP 服务器（[演示视频](https://www.youtube.com/watch?v=WuVOmYLRFmI\&feature=youtu.be)）。
* **[AWS Resources Operations](https://github.com/baryhuang/mcp-server-aws-resources-python)** - 运行生成的 Python 代码以安全地查询或修改任何 boto3 支持的 AWS 资源。
* **[AWS S3](https://github.com/aws-samples/sample-mcp-server-s3)** - 用于 AWS S3 的示例 MCP 服务器，可灵活地从 S3 获取对象（如 PDF 文档）。
* **[AWS SES](https://github.com/aws-samples/sample-for-amazon-ses-mcp)** 用于 Amazon SES（SESv2）的示例 MCP 服务器。详见 \[AWS 博客文章]\(<https://aws.amazon.com/blogs/messaging> - 和-targeting/use-ai-agents-and-the-model-context-protocol-with-amazon-ses/)。
* **[Azure ADX](https://github.com/pab1it0/adx-mcp-server)** - 查询和分析 Azure Data Explorer 数据库。
* **[Azure DevOps](https://github.com/Vortiago/mcp-azure-devops)** - 提供与 Azure DevOps 服务桥梁的 MCP 服务器，使 AI 助手能够查询和管理工作项。
* **[Azure MCP Hub](https://github.com/Azure-Samples/mcp)** - 由 **[Arun Sekhar](https://github.com/achandmsft)** 为 Azure 开发者整理的所有 MCP 服务器及相关资源列表。
* **[Azure OpenAI DALL-E 3 MCP Server](https://github.com/jacwu/mcp-server-aoai-dalle3)** - 用于 Azure OpenAI DALL-E 3 服务，根据文本生成图像的 MCP 服务器。
* **[Azure Wiki Search](https://github.com/coder-linping/azure-wiki-search-server)** - 使 AI 能够查询托管在 Azure Devops Wiki 上的维基内容的 MCP 服务器。
* **[Baidu AI Search](https://github.com/baidubce/app-builder/tree/master/python/mcp_server/ai_search)** - 使用百度云 AI Search 进行网页搜索。
* **[BambooHR MCP](https://github.com/encoreshao/bamboohr-mcp)** - 一个与 BambooHR API 接口的 MCP 服务器，提供对员工数据、时间追踪和人力资源管理功能的访问。
* **[Base Free USDC Transfer](https://github.com/magnetai/mcp-free-usdc-transfer)** - 使用 Claude AI 免费发送 [Base](https://base.org) 上的 USDC！使用 [Coinbase CDP](https://docs.cdp.coinbase.com/mpc-wallet/docs/welcome) 构建。
* **[Basic Memory](https://github.com/basicmachines-co/basic-memory)** - 本地优先的知识管理系统，从 Markdown 文件构建语义图，使 LLM 在对话中具有跨会话的持久记忆。
* **[BGG MCP](https://github.com/kkjdaniel/bgg-mcp)**（由 kkjdaniel 开发）- MCP 服务器，用于通过 AI 工具与 BoardGameGeek API 进行交互。
* **[Bible](https://github.com/trevato/bible-mcp)** - 为你的生成式 AI 应用程序添加圣经上下文。
* **[BigQuery](https://github.com/LucasHild/mcp-server-bigquery)**（由 LucasHild 开发）- 该服务器使 LLM 能够检查数据库架构并在 BigQuery 上执行查询。
* **[BigQuery](https://github.com/ergut/mcp-bigquery-server)**（由 ergut 开发）- 用于 Google BigQuery 集成的服务器实现，支持直接访问 BigQuery 数据库和查询功能。
* **[Bilibili](https://github.com/wangshunnn/bilibili-mcp-server)** - 该 MCP 服务器提供了获取 Bilibili 用户资料、视频元数据、搜索视频等工具。
* **[Binance](https://github.com/ethancod1ng/binance-mcp-server)** - 通过 Binance API 集成实现加密货币交易和市场数据访问。
* **[Binance](https://github.com/AnalyticAce/BinanceMCPServer)**（由 dosseh shalom 开发）- Binance Model Context Protocol（MCP）的非官方工具和服务器实现。专为支持构建加密交易 AI 代理的开发者设计。
* **[Bing Web Search API](https://github.com/leehanchung/bing-search-mcp)**（由 hanchunglee 开发）- Microsoft Bing Web Search API 的服务器实现。
* **[BioMCP](https://github.com/genomoncology/biomcp)**（由 imaurer 开发）- 提供对 PubMed、ClinicalTrials.gov 和 MyVariant.info 访问的生物医学研究助理服务器。
* **[bioRxiv](https://github.com/JackKuo666/bioRxiv-MCP-Server)** - 🔍 通过简单的 MCP 接口，使 AI 助手能够搜索和访问 bioRxiv 论文。
* **[Bitable MCP](https://github.com/lloydzhou/bitable-mcp)**（由 lloydzhou 开发）- MCP 服务器，通过 Model Context Protocol 提供对 Lark Bitable 的访问。它允许用户使用预定义工具与 Bitable 表格进行交互。
* **[Blender](https://github.com/ahujasid/blender-mcp)**（由 ahujasid 开发）- 支持通过提示生成 3D 场景创建、建模和操作的 Blender 集成。
* **[Blender MCP](https://github.com/pranav-deshmukh/blender-mcp)** - 通过自然语言在 Blender 中创建专业级 3D 场景的 MCP 服务器。
* **[Blockbench MCP Plugin](https://github.com/jasonjgardner/blockbench-mcp-plugin)**（由 jasonjgardner 开发）- Blockbench 插件，用于将 AI 代理连接到 Blockbench 的 JavaScript API。允许在 Blockbench 中使用 AI 创建和编辑 3D 模型或像素艺术纹理。
* **[Blockchain MCP](https://github.com/tatumio/blockchain-mcp)** - 来自 **[Tatum](http://tatum.io/mcp)** 的区块链数据 MCP 服务器，可立即为你的 AI 代理解锁区块链访问权限。该官方 Tatum MCP 服务器可在几秒钟内连接到任何 LLM。
* **[Bluesky](https://github.com/semioz/bluesky-mcp)**（由 semioz 开发）- 一个用于 Bluesky（去中心化社交网络）的 MCP 服务器。它支持通过 AT 协议进行自动化交互，包括发帖、点赞、转发、时间线管理和个人资料操作等功能。
* **[Bluetooth MCP Server](https://github.com/Hypijump31/bluetooth-mcp-server)** - 通过自然语言命令控制蓝牙设备并管理连接，包括设备发现、配对和音频控制。
* **[BNBChain MCP](https://github.com/bnb-chain/bnbchain-mcp)** - 用于与 BSC、opBNB 和 Greenfield 区块链交互的 MCP 服务器。
* **[Braintree](https://github.com/QuentinCody/braintree-mcp-server)** - 用于 AI 代理处理支付、管理客户和安全处理交易的非官方 PayPal Braintree 支付网关 MCP 服务器。
* **[Brazilian Law](https://github.com/pdmtt/brlaw_mcp_server/)**（由 pdmtt 开发）- 使用官方资源进行巴西法律代理驱动研究。
* **[BreakoutRoom](https://github.com/agree-able/room-mcp)** - 代理在 P2P 房间中共同完成目标。
* **[Browser MCP](https://github.com/bytedance/UI-TARS-desktop/tree/main/packages/agent-infra/mcp-servers/browser)**（由 UI-TARS 开发）- 一个快速轻量的 MCP 服务器，通过 Puppeteer 的结构化可访问性数据为 LLM 提供浏览器自动化功能，支持可选的视觉模式以实现复杂的视觉理解以及灵活的跨平台配置。
* **[browser-use](https://github.com/co-browser/browser-use-mcp-server)**（由 co-browser 开发）- 基于 docker 化的 playwright + chromium + vnc 的 browser-use MCP 服务器。支持 stdio 和可恢复的 HTTP。
* **[BrowserLoop](https://github.com/mattiasw/browserloop)** - 一个使用 Playwright 截取网页截图的 MCP 服务器。支持高质量截图，格式可配置、视口大小、基于 Cookie 的身份验证，以及整页和特定元素截图。
* **[Bsc-mcp](https://github.com/TermiX-official/bsc-mcp)** - 第一个作为 AI 和 BNB Chain 桥梁的 MCP 服务器，使 AI 代理能够通过与 BNB Chain 的无缝集成执行复杂的链上操作，包括转账、交换、代币发行、安全检查等。
* **[BugBug MCP Server](https://github.com/simplypixi/bugbug-mcp-server)** - BugBug API 的非官方 MCP 服务器。
* **[BVG MCP Server - (Unofficial)](https://github.com/svkaizoku/mcp-bvg)** - Berliner Verkehrsbetriebe API 的非官方 MCP 服务器。
* **[Bybit](https://github.com/ethancod1ng/bybit-mcp-server)** - 用于将 AI 助手与 Bybit 加密货币交易所 API 集成的 Model Context Protocol（MCP）服务器，支持自动交易、市场数据访问和账户管理。
* **[CAD-MCP](https://github.com/daobataotie/CAD-MCP#)**（由 daobataotie 开发）- 通过 MCP 服务器绘制 CAD（直线、圆、文本、注释等），支持主流 CAD 软件。
* **[Calculator](https://github.com/githejie/mcp-server-calculator)** - 该服务器使 LLM 能够使用计算器进行精确的数值计算。
* **[CalDAV MCP](https://github.com/dominik1001/caldav-mcp)** - 一个 CalDAV MCP 服务器，将日历操作作为工具提供给 AI 助手。
* **[Calendly-mcp-server](https://github.com/meAmitPatil/calendly-mcp-server)** - 开源的 Calendly MCP 服务器。
* **[Catalysis Hub](https://github.com/QuentinCody/catalysishub-mcp-server)** - 用于从 Catalysis Hub 数据库搜索和检索科学数据的非官方 MCP 服务器，提供对计算催化研究和表面反应数据的访问。
* **[CCTV VMS MCP](https://github.com/jyjune/mcp_vms)** - 一个 Model Context Protocol（MCP）服务器，设计用于连接到 CCTV 录像程序（VMS），以检索录制和实时视频流。它还提供了控制 VMS 软件的工具，例如在指定时间显示特定通道的实时或回放界面。
* **[CFBD API](https://github.com/lenwood/cfbd-mcp-server)** - 用于 [College Football Data API](https://collegefootballdata.com/) 的 MCP 服务器。
* **[ChatMCP](https://github.com/AI-QL/chat-mcp)** – 一个开源的跨平台 GUI 桌面应用程序，兼容 Linux、macOS 和 Windows，能够在动态可选的 LLM 之间无缝交互 MCP 服务器，由 **[AIQL](https://github.com/AI-QL)** 开发。
* **[ChatSum](https://github.com/mcpso/mcp-server-chatsum)** - 使用 LLM 查询和总结聊天消息。由 [mcpso](https://mcp.so) 提供。
* **[Chess.com](https://github.com/pab1it0/chess-mcp)** - 通过标准化的 MCP 接口访问 Chess.com 玩家数据、对局记录和其他公开信息，使 AI 助手能够搜索和分析国际象棋信息。
* **[ChessPal Chess Engine (stockfish)](https://github.com/wilson-urdaneta/chesspal-mcp-engine)** - 一个基于 Stockfish 的国际象棋引擎，作为 MCP 服务器暴露。计算最佳走法，并支持 HTTP/SSE 和 stdio 传输。
* **[Chroma](https://github.com/privetin/chroma)** - 基于 Chroma 构建的语义文档搜索和元数据过滤的向量数据库服务器。
* **[Chrome history](https://github.com/vincent-pli/chrome-history-mcp)** - 与 AI 聊聊你的浏览器历史记录，获得乐趣 ^\_^
* **[Claude Thread Continuity](https://github.com/peless/claude-thread-continuity)** - 持久记忆系统，使 Claude Desktop 的对话能够在多个会话中恢复完整上下文。维护对话历史、项目状态和用户偏好，实现无缝的多会话工作流。
* **[ClaudePost](https://github.com/ZilongXue/claude-post)** - 为 Gmail 提供无缝电子邮件管理的 ClaudePost，提供安全的电子邮件搜索、阅读和发送功能。
* **[CLDGeminiPDF Analyzer](https://github.com/tfll37/CLDGeminiPDF-Analyzer)** - MCP 服务器工具，通过 API 将大型 PDF 文件共享给 Google LLM，以便进一步分析并向 Claude Desktop 返回响应。
* **[ClearML MCP](https://github.com/prassanna-ravishankar/clearml-mcp)** - 在你的 AI 对话中直接从 [ClearML](https://clear.ml) 获取全面的机器学习实验上下文和分析。
* **[ClickUp](https://github.com/TaazKareem/clickup-mcp-server)** - 用于 ClickUp 任务管理的 MCP 服务器，支持任务创建、更新、批量操作和 Markdown 描述。
* **[Cloudinary](https://github.com/felores/cloudinary-mcp-server)** - Cloudinary Model Context Protocol 服务器，用于上传媒体到 Cloudinary 并获取媒体链接和详细信息。
* **[CockroachDB](https://github.com/amineelkouhen/mcp-cockroachdb)** - MCP 服务器，使 AI 代理和 LLM 能够使用自然语言管理和查询 **[CockroachDB](https://www.cockroachlabs.com/)**。
* **[CockroachDB MCP Server](https://github.com/viragtripathi/cockroachdb-mcp-server)** – 使用 FastAPI 和 CockroachDB 构建的完整功能 MCP 实现。支持模式引导、JSONB 存储、LLM 就绪的 CLI，以及可选的 `/debug` 端点。
* **[code-assistant](https://github.com/stippi/code-assistant)** - 一个代码助手MCP服务器，允许探索代码库并对代码进行修改。应仅用于受信任的仓库（对提示注入的防护不足）。
* **[code-context-provider-mcp](https://github.com/AB498/code-context-provider-mcp)** - 提供代码上下文和分析的MCP服务器，用于AI助手。使用WebAssembly Tree-sitter解析器提取目录结构和代码符号，无需本地依赖。
* **[code-executor](https://github.com/bazinga012/mcp_code_executor)** - 一个MCP服务器，允许LLM在指定的Conda环境中执行Python代码。
* **[code-sandbox-mcp](https://github.com/Automata-Labs-team/code-sandbox-mcp)** - 用于在Docker容器内执行代码的安全代码沙盒环境的MCP服务器。
* **[cognee-mcp](https://github.com/topoteretes/cognee/tree/main/cognee-mcp)** - 具有可定制的数据引入、数据处理和搜索功能的GraphRAG内存服务器
* **[coin\_api\_mcp](https://github.com/longmans/coin_api_mcp)** - 提供对[coinmarketcap](https://coinmarketcap.com/)加密货币数据的访问。
* **[CoinMarketCap](https://github.com/shinzo-labs/coinmarketcap-mcp)** - 实现完整的[CoinMarketCap](https://coinmarketcap.com/) API，用于访问加密货币市场数据、交易所信息及其他区块链相关指标。
* **[commands](https://github.com/g0t4/mcp-server-commands)** - 运行命令和脚本，就像在终端中一样。
* **[computer-control-mcp](https://github.com/AB498/computer-control-mcp)** - 提供计算机控制能力（如鼠标、键盘、OCR等）的MCP服务器，使用PyAutoGUI、RapidOCR、ONNXRuntime，无需外部依赖。
* **[Computer-Use - Remote MacOS Use](https://github.com/baryhuang/mcp-remote-macos-use)** - OpenAI Operator的开源开箱即用替代方案，提供完整的桌面体验，并优化用于将远程macOS机器作为自主AI代理。
* **[Congress.gov API](https://github.com/AshwinSundar/congress_gov_mcp)** - 用于与Congress.gov API（美国国会的官方API）实时数据交互的MCP服务器。
* **[consul-mcp](https://github.com/kocierik/consul-mcp-server)** - 用于服务管理、健康检查和键值存储的Consul MCP服务器
* **[consult7](https://github.com/szeider/consult7)** - 通过OpenRouter、OpenAI或Google AI使用高上下文模型分析大型代码库和文档集合——非常有用，例如与Claude Code一起使用时。
* **[Contentful-mcp](https://github.com/ivo-toby/contentful-mcp)** - 从此MCP服务器中读取、更新、删除和发布您[Contentful](https://contentful.com)空间中的内容。
* **[Context Crystallizer](https://github.com/hubertciebiada/context-crystallizer)** - AI上下文工程工具，通过系统分析和优化将大型仓库转化为结晶化的、AI可消费的知识。
* **[context-portal](https://github.com/GreatScottyMac/context-portal)** - 上下文门户（ConPort）是一个内存数据库系统，能有效构建项目特定的知识图谱，捕捉诸如决策、进展和架构等实体及其关系。这作为检索增强生成（RAG）的强大后端，使AI助手能够访问精确且最新的项目信息。
* **[cplusplus-mcp](https://github.com/kandrwmrtn/cplusplus_mcp)** - 使用libclang进行语义C++代码分析。使Claude能够通过AST解析（而非文本搜索）理解C++代码库——查找类、浏览继承关系、追踪函数调用并探索代码关系。
* **[CreateveAI Nexus](https://github.com/spgoodman/createveai-nexus-server)** - AI代理与企业系统之间的开源桥梁，具有简单的自定义API插件功能（包括与ComfyUI节点的高度兼容性）、支持Copilot Studio的MCP代理集成、支持在安全环境中通过Azure Key Vault存储密钥进行Azure部署，以及直接的本地部署支持。
* **[Creatify](https://github.com/TSavo/creatify-mcp)** - MCP服务器，提供Creatify AI API功能，用于AI视频生成，包括虚拟形象视频、URL转视频、文本转语音和AI驱动的编辑工具。
* **[Cronlytic](https://github.com/Cronlytic/cronlytic-mcp-server)** - 通过[Cronlytic](https://cronlytic.com) MCP服务器创建无服务器定时任务的CRUD操作
* **[crypto-feargreed-mcp](https://github.com/kukapay/crypto-feargreed-mcp)**  -  提供实时和历史加密货币恐惧与贪婪指数数据。
* **[crypto-indicators-mcp](https://github.com/kukapay/crypto-indicators-mcp)**  -  提供多种加密货币技术分析指标和策略的MCP服务器。
* **[crypto-sentiment-mcp](https://github.com/kukapay/crypto-sentiment-mcp)**  -  向AI代理提供加密货币情绪分析的MCP服务器。
* **[cryptopanic-mcp-server](https://github.com/kukapay/cryptopanic-mcp-server)** - 通过CryptoPanic为AI代理提供最新的加密货币新闻。
* **[CSV Editor](https://github.com/santoshray02/csv-editor)** - 具备40多种数据操作、分析和验证功能的综合CSV处理工具。具备自动保存、撤销/重做功能，可处理GB级文件。使用FastMCP和Pandas构建。
* **[Cursor MCP Installer](https://github.com/matthewdcage/cursor-mcp-installer)** - 用于在Cursor IDE中轻松安装和配置其他MCP服务器的工具，支持npm包、本地目录和Git仓库。
* **[CVE Intelligence Server](https://github.com/gnlds/mcp-cve-intelligence-server-lite)** – 通过多源CVE数据提供漏洞情报，包含关键漏洞利用发现和EPSS风险评分的MCP服务器。适用于安全研究、自动化和代理工作流程。
* **[Dagster](https://github.com/dagster-io/dagster/tree/master/python_modules/libraries/dagster-dg-cli)** - 用于使用[Dagster](https://dagster.io/)轻松构建数据管道的MCP服务器。
* **[Dappier](https://github.com/DappierAI/dappier-mcp)** - 将LLM连接到来自可信来源的实时、已授权的专有数据。访问用于实时网络搜索、新闻、体育、金融数据、加密货币和优质出版商内容的专用模型。在[marketplace.dappier.com](https://marketplace.dappier.com/marketplace)探索数据模型。
* **[Data Exploration](https://github.com/reading-plus-ai/mcp-server-data-exploration)** - 用于在.csv格式数据集上进行自主数据探索的MCP服务器，提供智能洞察，所需操作极少。注意：将在您的机器上执行任意Python代码，请谨慎使用！
* **[Databricks](https://github.com/JordiNeil/mcp-databricks-server)** - 允许LLM在Databricks账户中运行SQL查询、列出并获取作业执行详情。
* **[Databricks Genie](https://github.com/yashshingvi/databricks-genie-MCP)** - 连接到Databricks Genie的服务器，允许LLM提出自然语言问题、运行SQL查询并与Databricks对话代理交互。
* **[Databricks Smart SQL](https://github.com/RafaelCartenet/mcp-databricks-server)** - 利用Databricks Unity Catalog元数据，执行智能高效的SQL查询以解决临时查询并探索数据。
* **[Datadog](https://github.com/GeLi2001/datadog-mcp-server)** - 基于官方Datadog API构建的应用程序追踪、监控、仪表板和事件查询的Datadog MCP服务器。
* **[Dataset Viewer](https://github.com/privetin/dataset-viewer)** - 浏览和分析Hugging Face数据集，支持搜索、过滤、统计和数据导出功能。
* **[DataWorks](https://github.com/aliyun/alibabacloud-dataworks-mcp-server)** - 一个模型上下文协议（MCP）服务器，提供AI工具，使其能够通过标准化接口与[DataWorks](https://www.alibabacloud.com/help/en/dataworks/)开放API交互。该实现基于阿里云开放API，使AI代理能够无缝执行云资源操作。
* **[DaVinci Resolve](https://github.com/samuelgursky/davinci-resolve-mcp)** - 提供DaVinci Resolve集成的MCP服务器，具备强大的视频编辑、调色、媒体管理和项目控制工具。
* **[DBHub](https://github.com/bytebase/dbhub/)** - 通用数据库MCP服务器，连接MySQL、MariaDB、PostgreSQL和SQL Server。
* **[Deebo](https://github.com/snagasuri/deebo-prototype)** – 用于代理调试的MCP服务器，帮助AI编码代理通过隔离的多代理假设测试来委派和修复难以解决的bug。
* **[Deep Research](https://github.com/reading-plus-ai/mcp-server-deep-research)** - 轻量级MCP服务器，提供类似Grok/OpenAI/Gemini/Perplexity的自动化深度研究探索和结构化报告功能。
* **[DeepSeek MCP Server](https://github.com/DMontgomery40/deepseek-mcp-server)** - 集成DeepSeek先进语言模型的模型上下文协议服务器，以及[其他有用的API端点](https://github.com/DMontgomery40/deepseek-mcp-server?tab=readme-ov-file#features)
* **[deepseek-thinker-mcp](https://github.com/ruixingshi/deepseek-thinker-mcp)** - 一个MCP（模型上下文协议）提供程序，将DeepSeek的推理内容提供给支持MCP的AI客户端，如Claude Desktop。支持从DeepSeek API服务或本地Ollama服务器访问DeepSeek的思考过程。
* **[Deepseek\_R1](https://github.com/66julienmartin/MCP-server-Deepseek_R1)** - 连接Claude Desktop与DeepSeek语言模型（R1/V3）的模型上下文协议（MCP）服务器实现。
* **[Depyler](https://github.com/paiml/depyler/blob/main/docs/mcp-integration.md)** - 一种节能的 Python 到 Rust 转译器，具有渐进式验证功能，使 AI 助手能够将 Python 代码转换为安全、高效的 Rust 代码，同时减少 75-85% 的能耗。
* **[deploy-mcp](https://github.com/alexpota/deploy-mcp)** - 通用的 AI 助手部署追踪器，提供实时状态徽章和部署监控。
* **[Descope](https://github.com/descope-sample-apps/descope-mcp-server)** - 一个与 [Descope](https://descope.com) 集成的 MCP 服务器，用于搜索审计日志、管理用户等。
* **[DesktopCommander](https://github.com/wonderwhy-er/DesktopCommanderMCP)** - 一个 AI 文件编辑与管理工具，可以运行终端命令并通过 SSH 连接远程服务器——所有功能均由最受欢迎的本地 MCP 服务器之一提供支持。
* **[Devcontainer](https://github.com/AI-QL/mcp-devcontainers)** - 一个用于 devcontainer 的 MCP 服务器，可根据 devcontainer 配置文件生成和配置开发容器。
* **[DevDb](https://github.com/damms005/devdb-vscode?tab=readme-ov-file#mcp-configuration)** - 一个运行在 IDE 内部的 MCP 服务器，用于连接 MySQL、Postgres、SQLite 和 MSSQL 数据库。
* **[DevOps AI Toolkit](https://github.com/vfarcic/dot-ai)** - 一个由 AI 驱动的开发生产力平台，通过智能自动化和 AI 驱动的辅助功能增强软件开发工作流程。
* **[DevOps-MCP](https://github.com/wangkanai/devops-mcp)** - 一个动态的 Azure DevOps MCP 服务器，支持基于目录的身份验证切换，涵盖工作项、存储库、构建、流水线和多项目管理，并可通过本地配置文件进行管理。
* **[Dicom](https://github.com/ChristianHinge/dicom-mcp)** - 一个用于查询和检索医学图像以及解析和读取 dicom 封装文档（如 PDF 等）的 MCP 服务器。
* **[Dify](https://github.com/YanxingLiu/dify-mcp-server)** - 一个用于 dify 工作流的简单 MCP 服务器实现。
* **[Discogs](https://github.com/cswkim/discogs-mcp-server)** - 一个连接到 Discogs API 以与您的音乐收藏进行交互的 MCP 服务器。
* **[Discord](https://github.com/v-3/discordmcp)** - 一个通过机器人连接到 Discord 服务器并通过频道读写消息的 MCP 服务器。
* **[Discord](https://github.com/SaseQ/discord-mcp)** - 一个通过机器人连接到 Discord 的 MCP 服务器，并提供与 Discord 的全面集成。
* **[Discord](https://github.com/Klavis-AI/klavis/tree/main/mcp_servers/discord)** - Klavis AI 提供的 Discord API 集成。
* **[Discourse](https://github.com/AshDevFr/discourse-mcp-server)** - 一个用于在 Discourse 论坛上搜索帖子的 MCP 服务器。
* **[Docker](https://github.com/ckreiling/mcp-server-docker)** - 与 Docker 集成以管理容器、镜像、卷和网络。
* **[Docker](https://github.com/0xshariq/docker-mcp-server)** - Docker MCP 服务器通过 CLI 和 MCP 工作流提供高级统一的 Docker 管理，支持容器、镜像、卷、网络和编排。
* **[Docs](https://github.com/da1z/docsmcp)** - 为 AI 代理启用文档访问功能，支持 llms.txt 和其他远程或本地文件。
* **[Docy](https://github.com/oborchers/mcp-server-docy)** - Docy 为您的 AI 提供对所需技术文档的直接访问。不再有过时的信息、失效链接或速率限制——只需准确的实时文档访问，以提供更精确的编码辅助。
* **[Dodo Payments](https://github.com/dodopayments/dodopayments-node/tree/main/packages/mcp-server)** - 通过轻量级、兼容无服务器架构的接口，使 AI 代理能够安全地执行支付操作到 [Dodo Payments](https://dodopayments.com) API。
* **[Domain Tools](https://github.com/deshabhishek007/domain-tools-mcp-server)** - 一个用于全面域名分析的模型上下文协议（MCP）服务器，支持 WHOIS、DNS 记录和 DNS 健康检查。
* **[DPLP](https://github.com/szeider/mcp-dblp)**  - 搜索 [DBLP](https://dblp.org) 计算机科学文献数据库。
* **[Druid MCP Server](https://github.com/iunera/druid-mcp-server)** - [iunera](https://www.iunera.com) 提供的 Apache Druid 的 STDIO/SEE MCP 服务器，提供用于管理和分析 Druid 集群的广泛工具、资源和提示。
* **[Drupal](https://github.com/Omedia/mcp-server-drupal)** - 使用 STDIO 传输层与 [Drupal](https://www.drupal.org/project/mcp) 进行交互的服务器。
* **[dune-analytics-mcp](https://github.com/kukapay/dune-analytics-mcp)** - 一个将 Dune Analytics 数据桥接到 AI 代理的 MCP 服务器。
* **[DynamoDB-Toolbox](https://www.dynamodbtoolbox.com/docs/databases/actions/mcp-toolkit)** - 利用您的模式和访问模式，使用自然语言与 [DynamoDB](https://aws.amazon.com/dynamodb) 数据库进行交互。
* **[eBook-mcp](https://github.com/onebirdrocks/ebook-mcp)** - 一个轻量级的 MCP 服务器，允许 LLM 读取和交互您的个人 PDF 和 EPUB 电子书。适用于构建 AI 阅读助手或基于聊天的电子书接口。
* **[ECharts MCP Server](https://github.com/hustcc/mcp-echarts)** - 使用 ECharts 与 AI MCP 动态生成可视化图表，用于图表生成和数据分析。
* **[EDA MCP Server](https://github.com/NellyW8/mcp-EDA)** - 一个面向电子设计自动化工具的完整模型上下文协议服务器，使 AI 助手能够使用 Yosys 合成 Verilog，使用 Icarus Verilog 进行设计仿真，使用 OpenLane 运行完整的 ASIC 流程，并使用 GTKWave 和 KLayout 查看结果。
* **[EdgeOne Pages MCP](https://github.com/TencentEdgeOne/edgeone-pages-mcp)** - 用于将 HTML 内容部署到 EdgeOne Pages 并获取公共可访问 URL 的 MCP 服务。
* **[Edwin](https://github.com/edwin-finance/edwin/tree/main/examples/mcp-server)** - edwin SDK 的 MCP 服务器——使 AI 代理能够跨 EVM、Solana 和其他区块链与 DeFi 协议进行交互。
* **[eechat](https://github.com/Lucassssss/eechat)** - 一个开源的跨平台桌面应用程序，能够无缝连接 MCP 服务器，支持 Linux、macOS 和 Windows。
* **[Elasticsearch](https://github.com/cr7258/elasticsearch-mcp-server)** - 提供 Elasticsearch 交互的 MCP 服务器实现。
* **[ElevenLabs](https://github.com/mamertofabian/elevenlabs-mcp-server)** - 一个与 ElevenLabs 文本转语音 API 集成的服务器，能够生成包含多个语音的完整配音。
* **[Email](https://github.com/Shy2593666979/mcp-server-email)** - 该服务器使用户能够通过各种电子邮件提供商（包括 Gmail、Outlook、Yahoo、Sina、Sohu、126、163 和 QQ Mail）发送电子邮件。它还支持从指定目录附加文件，使上传附件与邮件内容一起变得简单。
* **[Email SMTP](https://github.com/egyptianego17/email-mcp-server)** - 一个简单的 MCP 服务器，使您的 AI 代理能够通过 SMTP 发送电子邮件并附加文件。
* **[Enhance Prompt](https://github.com/FelixFoster/mcp-enhance-prompt)** - 用于优化您的提示的 MCP 服务。
* **[Ergo Blockchain MCP](https://github.com/marctheshark3/ergo-mcp)** - 一个将 Ergo 区块链节点和浏览器 API 集成的 MCP 服务器，用于检查地址余额、分析交易、查看交易历史、执行地址的取证分析、搜索代币以及监控网络状态。
* **[ESP MCP Server](https://github.com/horw/esp-mcp)** - 一个将 ESP IDF 命令（如构建和烧录 ESP 微控制器代码）与 LLM 集成的 MCP 服务器。
* **[Eunomia](https://github.com/whataboutyou-ai/eunomia-MCP-server)** - Eunomia 框架的扩展，将 Eunomia 仪器与 MCP 服务器连接。
* **[Everything Search](https://github.com/mamertofabian/mcp-everything-search)** - 在 Windows（使用 [Everything SDK](https://www.voidtools.com/support/everything/sdk/)）、macOS（使用 mdfind 命令）和 Linux（使用 locate/plocate 命令）上提供快速文件搜索功能。
* **[EVM MCP Server](https://github.com/mcpdotdirect/evm-mcp-server)** - 针对 30 多个 EVM 网络的综合区块链服务，支持原生代币、ERC20、NFT、智能合约、交易和 ENS 解析。
* **[Excel](https://github.com/haris-musa/excel-mcp-server)** - Excel 操作，包括数据读写、工作表管理、格式化、图表和数据透视表。
* **[Excel to JSON MCP by WTSolutions](https://github.com/he-yang/excel-to-json-mcp)** - 提供标准化接口的 MCP 服务器，用于将 (1) Excel 或 CSV 数据转换为 JSON 格式；(2) Excel(.xlsx) 文件转换为结构化 JSON。
* **[Extended Memory](https://github.com/ssmirnovpro/extended-memory-mcp)** - 在 Claude 对话中提供持久内存，支持多项目、自动重要性评分和基于标签的组织。具备 400 多个测试，适合生产环境。
* **[F1](https://github.com/AbhiJ2706/f1-mcp/tree/main)** - 提供对 F1 数据的访问，包括比赛结果、车手信息、圈速、遥测数据和赛道详情。
* **[Fabric MCP](https://github.com/aci-labs/ms-fabric-mcp)** - Microsoft Fabric MCP 服务器，借助您喜爱的 LLM 模型加速在 Fabric 租户中的工作。
* **[Fabric Real-Time Intelligence MCP](https://github.com/Microsoft/fabric-rti-mcp)** - Microsoft Fabric RTI 官方服务器，借助您喜爱的 LLM 模型加速与 Eventhouse、Azure Data Explorer（Kusto）、Eventstreams 和其他 RTI 项目的交互。
* **[fabric-mcp-server](https://github.com/adapoet/fabric-mcp-server)** - 一个将 [Fabric](https://github.com/danielmiessler/fabric) 模式与 [Cline](https://cline.bot/) 集成的 MCP 服务器，将其作为工具暴露给 AI 驱动的任务执行，从而增强 Cline 的功能。
* **[Facebook 广告](https://github.com/gomarble-ai/facebook-ads-mcp-server)** - 作为 Facebook 广告接口的 MCP 服务器，支持通过编程访问 Facebook 广告数据和管理功能。
* **[Facebook Ads 10xeR](https://github.com/fortytwode/10xer)** - 高级 Facebook 广告 MCP 服务器，提供增强的创意洞察、多维细分和全面的广告效果分析。
* **[Facebook 广告库](https://github.com/trypeggy/facebook-ads-library-mcp)** - 从 Facebook 广告库中获取任意答案，可在几秒钟内进行包括文案、创意测试和对比在内的深度研究。
* **[Fantasy PL](https://github.com/rishijatia/fantasy-pl-mcp)** - 为你的编码代理提供最新的英超联赛 Fantasy 数据访问权限。
* **[Fastmail MCP](https://github.com/MadLlama25/fastmail-mcp)** - 通过 JMAP 访问 Fastmail：列出/搜索邮件、发送和移动邮件、处理附件/会话，以及联系人和日历工具。
* **[fastn.ai – 统一 API MCP 服务器](https://github.com/fastnai/mcp-fastn)** - 一个远程、动态的 MCP 服务器，提供统一的 API，连接 1,000+ 工具、操作和工作流，具备内置的身份验证和监控功能。
* **[FDIC 银行查询 MCP 服务器 - (非官方)](https://github.com/clafollett/fdic-bank-find-mcp-server)** - 这是一个 MCP 服务器，将 FDIC BankFind API 的功能直接带入你的 AI 工具和工作流中。提供结构化的美国银行数据，并以最大化的体验呈现。😎📊
* **[联邦储备经济数据 (FRED)](https://github.com/stefanoamorelli/fred-mcp-server)** (作者：Stefano Amorelli) - 社区开发的 MCP 服务器，用于与联邦储备经济数据进行交互。
* **[Fetch](https://github.com/zcaceres/fetch-mcp)** - 一个灵活获取 HTML、JSON、Markdown 或纯文本的服务器。
* **[Feyod](https://github.com/jeroenvdmeer/feyod-mcp)** - 一个可以回答有关足球比赛问题的服务器，特别专注于费耶诺德足球俱乐部。
* **[FHIR](https://github.com/wso2/fhir-mcp-server)** - 一个模型上下文协议 (MCP) 服务器，可从任何兼容的 FHIR 服务器无缝、标准化地访问快速医疗互操作性资源 (FHIR) 数据。专为与 AI 工具、开发者工作流和医疗应用轻松集成而设计，支持自然语言和程序化搜索、检索和分析临床数据。
* **[Fibaro HC3](https://github.com/coding-sailor/mcp-server-hc3)** - 用于 Fibaro Home Center 3 智能家居系统的 MCP 服务器。
* **[Figma](https://github.com/GLips/Figma-Context-MCP)** - 为你的编码代理提供对 Figma 文件数据的直接访问，帮助其实现一次性设计实施。
* **[Figma](https://github.com/paulvandermeijs/figma-mcp)** - 一个速度极快的 MCP 服务器，用于读取和导出你的 Figma 设计文件。
* **[Files](https://github.com/flesler/mcp-files)** - 使代理能够以精准的方式快速查找和编辑代码库中的代码。查找符号，并在所有位置编辑它们。
* **[文件系统服务器](https://github.com/Oncorporation/filesystem_server)** - 用于 Visual Studio 2022 的本地 MCP 服务器，通过授予 AI 代理对项目文件夹和文件的选择性访问权限，提供代码工作区功能。
* **[Firebase](https://github.com/gannonh/firebase-mcp)** - 用于与 Firebase 服务（包括 Firebase Authentication、Firestore 和 Firebase Storage）交互的服务器。
* **[FireCrawl](https://github.com/vrknetha/mcp-server-firecrawl)** - 支持 JavaScript 渲染、PDF 支持和智能限速的高级网页爬取服务。
* **[Fish Audio](https://github.com/da-okazaki/mcp-fish-audio-server)** - 与 Fish Audio API 集成的文本转语音服务，支持多种语音、流媒体和实时播放。
* **[FitBit MCP 服务器](https://github.com/NitayRabi/fitbit-mcp)** - 一个使用 OAuth 流程获取的令牌连接到 FitBit API 的 MCP 服务器。
* **[FlightRadar24](https://github.com/sunsetcoder/flightradar24-mcp-server)** - 一个适用于 Claude Desktop 的 MCP 服务器，帮助你使用 Flightradar24 数据实时跟踪航班。
* **[Fluent-MCP](https://github.com/modesty/fluent-mcp)** - 针对 ServiceNow SDK（Fluent）的 MCP 服务器，提供对 ServiceNow SDK CLI、API 规范、代码片段等的访问。
* **[Flyworks Avatar](https://github.com/Flyworks-AI/flyworks-mcp)** - 快速且免费的零样本对口型 MCP 服务器。
* **[fmp-mcp-server](https://github.com/vipbat/fmp-mcp-server)** - 使你的代理能够进行并购分析和投资银行工作流。使用 [Financial Modeling Prep API] 访问公司概况、财务报表、比率，并执行行业分析。
* **[FoundationModels](https://github.com/phimage/mcp-foundation-models)** - 一个集成 Apple 的 [FoundationModels](https://developer.apple.com/documentation/foundationmodels) 的 MCP 服务器，用于文本生成。
* **[Foursquare](https://github.com/foursquare/foursquare-places-mcp)** - 使你的代理能够使用 [Foursquare 地点 API](https://location.foursquare.com/products/places-api/) 推荐世界各地的地点。
* **[FrankfurterMCP](https://github.com/anirbanbasu/frankfurtermcp)** - 作为 [Frankfurter API](https://frankfurter.dev/) 接口的 MCP 服务器，用于获取货币兑换数据。
* **[freqtrade-mcp](https://github.com/kukapay/freqtrade-mcp)** - 与 Freqtrade 加密货币交易机器人集成的 MCP 服务器。
* **[GDB](https://github.com/pansila/mcp_server_gdb)** - 基于 MCP 协议的 GDB/MI 协议服务器，为 AI 助手提供远程应用程序调试能力。
* **[ggRMCP](https://github.com/aalobaidi/ggRMCP)** - 一个 Go 网关，将 gRPC 服务转换为 MCP 兼容工具，使 Claude 等 AI 模型可以直接调用你的 gRPC 服务。
* **[Ghost](https://github.com/MFYDev/ghost-mcp)** - 用于通过 Claude 等 LLM 接口与 Ghost CMS 交互的模型上下文协议 (MCP) 服务器。
* **[Git](https://github.com/geropl/git-mcp-go)** - 允许 LLM 与本地 Git 仓库交互，包括可选的推送支持。
* **[Git Mob](https://github.com/Mubashwer/git-mob-mcp-server)** - 与 [git-mob](https://github.com/Mubashwer/git-mob) CLI 应用接口的 MCP 服务器，用于在结对/群体编程期间管理 Git 提交中的合著者。
* **[GitHub](https://github.com/0xshariq/github-mcp-server)** - 一个模型上下文协议 (MCP) 服务器，为 AI 助手和开发者提供 29 个 Git 操作 + 11 个工作流组合。该服务器通过标准化接口公开全面的 Git 仓库管理功能，使 AI 模型和开发者能够安全地管理复杂的版本控制工作流。
* **[GitHub Actions](https://github.com/ko1ynnky/github-actions-mcp-server)** - 用于与 GitHub Actions 交互的模型上下文协议 (MCP) 服务器。
* **[GitHub Enterprise MCP](https://github.com/ddukbg/github-enterprise-mcp)** - 用于与 GitHub Enterprise 交互的模型上下文协议 (MCP) 服务器。
* **[GitHub GraphQL](https://github.com/QuentinCody/github-graphql-mcp-server)** - 非官方 GitHub MCP 服务器，提供对 GitHub GraphQL API 的访问，从而实现对仓库数据、问题、拉取请求和其他 GitHub 资源进行更强大和灵活的查询。
* **[GitHub Projects](https://github.com/redducklabs/github-projects-mcp)** — 通过完整的 GraphQL API 访问管理 GitHub Projects，包括项目、字段和里程碑。
* **[GitHub Repos Manager MCP 服务器](https://github.com/kurdin/github-repos-manager-mcp)** - 基于令牌的 GitHub 自动化管理。无 Docker，灵活配置，支持 80+ 工具和直接 API 集成。
* **[GitMCP](https://github.com/idosal/git-mcp)** - gitmcp.io 是一个通用的远程 MCP 服务器，可轻松连接到任何 GitHub 仓库或项目文档。
* **[Glean](https://github.com/longyi1207/glean-mcp-server)** - 一个使用 Glean API 进行搜索和聊天的服务器。
* **[Gmail](https://github.com/GongRzhe/Gmail-MCP-Server)** - 用于在 Claude Desktop 中集成 Gmail 的模型上下文协议 (MCP) 服务器，支持自动身份验证。
* **[Gmail](https://github.com/Ayush-k-Shukla/gmail-mcp-server)** - 一个简单的 Gmail MCP 服务器，支持所有基本操作并集成 OAuth 2.0。
* **[Gmail 无头版](https://github.com/baryhuang/mcp-headless-gmail)** - 可远程部署的 MCP 服务器，无需本地凭据或文件系统设置即可获取和发送 Gmail 消息。
* **[Gmail MCP](https://github.com/gangradeamitesh/mcp-google-email)** - 使用 MCP（模型上下文协议）实现的 Gmail 服务，提供通过 Gmail API 发送、接收和管理电子邮件的功能。
* **[Gnuradio](https://github.com/yoelbassin/gnuradioMCP)** - 用于 GNU Radio 的 MCP 服务器，使 LLM 能够自主创建和修改 RF .grc 流图。
* **[Goal Story](https://github.com/hichana/goalstory-mcp)** - 个人和职业发展的目标跟踪和可视化工具。
* **[GOAT](https://github.com/goat-sdk/goat/tree/main/typescript/examples/by-framework/model-context-protocol)** - 可在任何区块链（包括以太坊、Solana 和 Base）上运行 200+ 个链上操作。
* **[Godot](https://github.com/Coding-Solo/godot-mcp)** - 提供全面的 Godot 引擎集成的 MCP 服务器，支持项目编辑、调试和场景管理。
* **[Go 文件系统服务器](https://github.com/mark3labs/mcp-filesystem-server)** - 使用 Go 构建的安全文件操作服务，支持可配置的访问控制！
* **[Goodnews](https://github.com/VectorInstitute/mcp-goodnews)** - 一个简单的 MCP 服务器，提供精选的积极和鼓舞人心的新闻故事。
* **[Google 广告](https://github.com/gomarble-ai/google-ads-mcp-server)** - 作为 Google 广告接口的 MCP 服务器，支持通过编程访问 Facebook 广告数据和管理功能。
* **[Google Analytics](https://github.com/surendranb/google-analytics-mcp)** - Google Analytics MCP 服务器，为 LLM 提供 200+ 维度和指标的数据支持，以便进行分析。
* **[Google Calendar](https://github.com/v-3/google-calendar)** - 与Google Calendar集成以检查日程安排、查找空闲时间以及添加/删除事件
* **[Google Calendar](https://github.com/nspady/google-calendar-mcp)** - 用于管理Google Calendar事件的Google Calendar MCP服务器。还支持通过标题和地点等属性搜索事件。
* **[Google Custom Search](https://github.com/adenot/mcp-google-search)** - 通过Google Custom Search API提供Google搜索结果
* **[Google Maps](https://github.com/Mastan1301/google_maps_mcp)** - 使用Google Places API提供位置结果
* **[Google Sheets](https://github.com/xing5/mcp-google-sheets)** - 访问和编辑你的Google Sheets数据
* **[Google Sheets](https://github.com/rohans2/mcp-google-sheets)** - 用TypeScript编写的MCP服务器，用于访问和编辑你的Google Sheets数据
* **[Google Tasks](https://github.com/zcaceres/gtasks-mcp)** - Google Tasks API模型上下文协议服务器
* **[Google Vertex AI Search](https://github.com/ubie-oss/mcp-vertexai-search)** - 通过使用你自己的私有数据为Gemini模型提供基础，从而提供Google Vertex AI Search结果
* **[Google Workspace](https://github.com/taylorwilsdon/google_workspace_mcp)** - 综合性的Google Workspace MCP，通过可流式传输的HTTP或SSE传输，全面支持Calendar、Drive、Gmail和Docs
* **[Google-Scholar](https://github.com/JackKuo666/Google-Scholar-MCP-Server)** - 通过简单的MCP接口使AI助手能够搜索和访问Google Scholar论文
* **[Google-Scholar](https://github.com/mochow13/google-scholar-mcp)** - 用TypeScript编写的Google Scholar MCP服务器，使用可流式传输的HTTP传输，以及一个与服务器集成并与`gemini-2.5-flash`交互的`client`实现
* **[gx-mcp-server](https://github.com/davidf9999/gx-mcp-server)** - 将Great Expectations数据验证和质量检查作为MCP工具暴露给AI代理
* **[Gralio SaaS Database](https://github.com/tymonTe/gralio-mcp)** - 使用[Gralio MCP](https://gralio.ai/mcp)服务器查找和比较SaaS产品，包括来自G2评论、Trustpilot、Crunchbase、LinkedIn、定价、功能等的数据
* **[GraphQL](https://github.com/drestrepom/mcp_graphql)** - 全面的GraphQL API集成，自动将每个GraphQL查询作为单独的工具暴露出来
* **[GraphQL Schema](https://github.com/hannesj/mcp-graphql-schema)** - 允许LLM探索大型GraphQL模式而不使上下文膨胀
* **[HackMD](https://github.com/yuna0x0/hackmd-mcp)**（作者：yuna0x0）- 用于HackMD（协作式Markdown编辑器）的MCP服务器。它允许用户使用模型上下文协议在HackMD中创建、读取和更新文档
* **[HAProxy](https://github.com/tuannvm/haproxy-mcp-server)** - 一个用Go实现的HAProxy Model Context Protocol (MCP)服务器，利用HAProxy运行时API
* **[Hashing MCP Server](https://github.com/kanad13/MCP-Server-for-Hashing)** - 提供加密哈希函数（例如SHA256、MD5等）的MCP服务器
* **[HDW LinkedIn](https://github.com/horizondatawave/hdw-mcp-server)** - 访问个人资料数据和管理用户账户，通过[HorizonDataWave.ai](https://horizondatawave.ai/)
* **[HeatPump](https://github.com/jiweiqi/heatpump-mcp-server)** — 住宅热泵尺寸和成本估算工具，由**HeatPumpHQ**提供
* **[Helm Chart CLI](https://github.com/jeff-nasseri/helm-chart-cli-mcp)** - Helm MCP提供了AI助手与Kubernetes Helm包管理器之间的桥梁。它允许AI助手通过自然语言请求与Helm交互，执行安装图表、管理仓库等命令
* **[Heurist Mesh Agent](https://github.com/heurist-network/heurist-mesh-mcp-server)** - 通过[Heurist Mesh网络](https://github.com/heurist-network/heurist-agent-framework/tree/main/mesh)访问用于区块链分析、智能合约安全、代币指标和区块链交互的专用Web3 AI代理
* **[Holaspirit](https://github.com/syucream/holaspirit-mcp-server)** - 与[Holaspirit](https://www.holaspirit.com/)交互
* **[Home Assistant](https://github.com/tevonsb/homeassistant-mcp)** - 与[Home Assistant](https://www.home-assistant.io/)交互，包括查看和控制灯光、开关、传感器及其他所有Home Assistant实体
* **[Home Assistant](https://github.com/voska/hass-mcp)** - 适用于Home Assistant的Docker-ready MCP服务器，具有实体管理、域摘要、自动化支持和引导式对话功能。包含预构建的容器镜像以便于安装
* **[HubSpot](https://github.com/buryhuang/mcp-hubspot)** - 用于管理联系人和公司的HubSpot CRM集成。可通过Claude聊天直接创建和检索CRM数据
* **[HuggingFace Spaces](https://github.com/evalstate/mcp-hfspace)** - 用于HuggingFace Spaces的服务器，支持开源图像、音频、文本模型等。提供Claude桌面模式以便于集成
* **[Human-In-the-Loop](https://github.com/GongRzhe/Human-In-the-Loop-MCP-Server)** - 一个强大的MCP服务器，使Claude等AI助手能够通过直观的GUI对话框与人类交互。该服务器弥合了自动化AI流程与人工决策之间的差距，提供实时用户输入工具、选择、确认和反馈机制
* **[Human-use](https://github.com/RapidataAI/human-use)** - 通过MCP提供即时人工反馈，让你的AI与全球各地的人类互动。由[Rapidata](https://www.rapidata.ai/)提供支持
* **[Hyperledger Fabric Agent Suite](https://github.com/padmarajkore/hlf-fabric-agent)** - 通过MCP工具管理Fabric测试网络和链码生命周期的模块化工具包
* **[Hyperliquid](https://github.com/mektigboy/server-hyperliquid)** - 集成Hyperliquid SDK以获取交易所数据的MCP服务器实现
* **[Hypertool](https://github.com/toolprint/hypertool-mcp)** – MCP，可让你从多个MCP服务器创建热插拔的“角色工具集”，以减少工具过载并提高工具执行效率
* **[hyprmcp](https://github.com/stefanoamorelli/hyprmcp)**（作者：Stefano Amorelli）- 针对`hyprland`的轻量级MCP服务器
* **[iFlytek SparkAgent Platform](https://github.com/iflytek/ifly-spark-agent-mcp)** - 使用MCP服务器调用iFlytek SparkAgent平台任务链的简单示例
* **[iFlytek Workflow](https://github.com/iflytek/ifly-workflow-mcp-server)** - 通过MCP服务器连接到iFlytek Workflow并运行你自己的Agent
* **[IIIF](https://github.com/code4history/IIIF_MCP)** - 提供全面的IIIF（国际图像互操作性框架）协议支持，用于搜索、浏览和操作来自世界各地博物馆、图书馆和档案馆的数字收藏
* **[Image Generation](https://github.com/GongRzhe/Image-Generation-MCP-Server)** - 该MCP服务器使用Replicate Flux模型提供图像生成能力
* **[ImageSorcery MCP](https://github.com/sunriseapps/imagesorcery-mcp)** - 基于计算机视觉的图像识别和编辑工具，供AI助手使用
* **[IMAP MCP](https://github.com/dominik1001/imap-mcp)** - 📧 一个IMAP Model Context Protocol (MCP)服务器，将IMAP操作作为工具暴露给AI助手
* **[iMCP](https://github.com/loopwork-ai/iMCP)** - 一款macOS应用，为你的iMessage、提醒事项及其他Apple服务提供MCP服务器
* **[InfluxDB](https://github.com/idoru/influxdb-mcp-server)** - 针对InfluxDB OSS API v2运行查询
* **[Inner Monologue MCP](https://github.com/abhinav-mangla/inner-monologue-mcp)** - 一种认知推理工具，使LLM能够在生成响应之前进行私有的、结构化的自我反思和多步骤推理，从而提高响应质量和问题解决能力
* **[Inoyu](https://github.com/sergehuber/inoyu-mcp-unomi-server)** - 与Apache Unomi CDP客户数据平台交互以检索和更新客户资料
* **[Instagram DM](https://github.com/trypeggy/instagram_dm_mcp)** - 通过你的LLM发送Instagram私信
* **[interactive-mcp](https://github.com/ttommyth/interactive-mcp)** - 通过在MCP循环中直接添加本地用户提示和聊天功能，启用交互式LLM工作流
* **[Intercom](https://github.com/raoulbia-ai/mcp-server-for-intercom)** - 一个符合MCP标准的服务器，用于从Intercom检索客户支持工单。该工具使Claude Desktop和Cline等AI助手能够访问和分析你的Intercom支持工单
* **[iOS Simulator](https://github.com/InditexTech/mcp-server-simulator-ios-idb)** - 一个Model Context Protocol (MCP)服务器，使LLM能够通过自然语言命令与iOS模拟器（iPhone、iPad等）交互
* **[ipybox](https://github.com/gradion-ai/ipybox)** - 基于IPython和Docker的Python代码执行沙箱。支持有状态代码执行、主机与容器之间的文件传输、可配置的网络访问。详细信息请参阅[ipybox MCP服务器](https://gradion-ai.github.io/ipybox/mcp-server/)
* **[it-tools-mcp](https://github.com/wrenchpilot/it-tools-mcp)** - 一个Model Context Protocol服务器，为AI代理重现[CorentinTh it-tools](https://github.com/CorentinTh/it-tools)实用程序，通过MCP启用对广泛开发者工具（编码、解码、转换等）的访问
* **[itemit MCP](https://github.com/umin-ai/itemit-mcp)** - itemit是一个资产跟踪MCP，管理库存、监控和位置跟踪，为300多家组织提供支持
* **[iTerm MCP](https://github.com/ferrislucas/iterm-mcp)** - 与macOS的iTerm2终端模拟器集成，使LLM能够执行和监控终端命令
* **[iTerm MCP Server](https://github.com/rishabkoul/iTerm-MCP-Server)** - 用于与 iTerm2 终端集成的模型上下文协议（MCP）服务器实现。能够管理多个 iTerm 会话。
* **[Java 反编译器](https://github.com/idachev/mcp-javadc)** - 使用 CFR 反编译器，从 .class 文件、包名或 JAR 归档中将 Java 字节码反编译为可读的源代码。
* **[JavaFX](https://github.com/quarkiverse/quarkus-mcp-servers/tree/main/jfx)** - 使用 JavaFX 画布进行绘图。
* **[JDBC](https://github.com/quarkiverse/quarkus-mcp-servers/tree/main/jdbc)** - 连接到任何兼容 JDBC 的数据库，并执行查询、插入、更新、删除等操作。支持 MySQL、PostgreSQL、Oracle、SQL Server、SQLite 以及 [更多](https://github.com/quarkiverse/quarkus-mcp-servers/tree/main/jdbc#supported-jdbc-variants)。
* **[JMeter](https://github.com/QAInsights/jmeter-mcp-server)** - 通过符合 MCP 标准的工具使用 Apache JMeter 运行负载测试。
* **[职位搜索器](https://github.com/0xDAEF0F/job-searchoor)** - 提供基于时间段、关键词和远程工作偏好来检索和过滤职位列表工具的 FastMCP 服务器。
* **[jobswithgpt](https://github.com/jobswithgpt/mcp)** - 使用 jobswithgpt 的职位搜索 MCP，索引了超过 50 万个公开职位列表，并持续更新。
* **[joinly](https://github.com/joinly-ai/joinly)** - 用于与基于浏览器的会议平台（Zoom、Teams、Google Meet）交互的 MCP 服务器。允许 AI 代理向在线会议发送机器人，收集实时转录，朗读文本，并在会议聊天中发送消息。
* **[JSON](https://github.com/GongRzhe/JSON-MCP-Server)** - 具有高级查询功能的 JSON 处理服务器，使用 JSONPath 语法，并支持数组、字符串、数字和日期操作。
* **[JSON](https://github.com/kehvinbehvin/json-mcp-filter)** - 支持 TypeScript 类型创建的 JSON 模式生成和过滤服务器，优化了使用 quicktype-core 检索相关上下文 JSON 数据的能力，并支持基于形状的数据提取、嵌套对象过滤和数组处理操作。
* **[WTSolutions 的 JSON 转 Excel](https://github.com/he-yang/json-to-excel-mcp)** - 将 JSON 转换为 CSV 格式的字符串，支持 (1) JSON 数据，(2) 指向公开可用 .json 文件的 URL。
* **[JSON2Video MCP](https://github.com/omergocmen/json2video-mcp-server)** - 使用 json2video API 以编程方式生成视频的模型上下文协议（MCP）服务器实现。该服务器为 LLM、代理或任何兼容 MCP 的客户端提供了强大的视频生成和状态检查工具。
* **[jupiter-mcp](https://github.com/kukapay/jupiter-mcp)** - 使用 Jupiter 的新 Ultra API 在 Solana 区块链上执行代币交换的 MCP 服务器。
* **[Jupyter MCP 服务器](https://github.com/datalayer/jupyter-mcp-server)** – 与 Jupyter Notebook 实时交互，允许 AI 编辑、记录和执行数据分析、可视化等代码。兼容任何 Jupyter 部署（本地、JupyterHub 等）。
* **[Jupyter Notebook](https://github.com/jjsantos01/jupyter-notebook-mcp)** - 将 Jupyter Notebook 连接到 Claude AI，允许 Claude 直接交互和控制 Jupyter Notebook。该集成支持 AI 辅助代码执行、数据分析、可视化等。
* **[k8s-multicluster-mcp](https://github.com/razvanmacovei/k8s-multicluster-mcp)** - 使用多个 kubeconfig 文件同时与多个 Kubernetes 集群交互的 MCP 服务器。
* **[Kafka](https://github.com/tuannvm/kafka-mcp-server)** - 用 Go 编写的 Apache Kafka 模型上下文协议（MCP）服务器，依赖 [franz-go](https://github.com/twmb/franz-go)。
* **[Kafka Schema Registry MCP](https://github.com/aywengo/kafka-schema-reg-mcp)** \ - 具有 48 个工具、多注册表支持、身份验证和生产安全功能的 Kafka Schema Registry 综合 MCP 服务器。支持 AI 驱动的模式管理，具有企业级功能，包括模式上下文、迁移工具和全面的导出能力。
* **[kafka-mcp](https://github.com/shivamxtech/kafka-mcp)** - 用于 Kafka 集群的 MCP 服务器，通过消息、主题、偏移量、分区的工具与 Kafka 环境交互，适用于消费者和生产者，并与 MCP 客户端无缝集成。
* **[Keycloak](https://github.com/idoyudha/mcp-keycloak)** - 专为代理应用程序设计的 Keycloak MCP 服务器，用于高效地管理和搜索 Keycloak 中的数据。
* **[Keycloak MCP](https://github.com/ChristophEnglisch/keycloak-model-context-protocol)** - 该 MCP 服务器允许通过自然语言与 Keycloak 交互，进行用户和领域管理，包括创建、删除和列出用户和领域。
* **[Keycloak MCP 服务器](https://github.com/sshaaf/keycloak-mcp-server)** - 专为与 Keycloak 进行身份和访问管理而设计，包含约 40+ 个工具，涵盖用户、领域、客户端、角色、组、身份提供者（IDPs）、认证等。支持原生构建。
* **[Kibana MCP](https://github.com/TocharianOU/mcp-server-kibana.git)**（由 TocharianOU 提供）- 一个社区维护的 MCP 服务器实现，允许任何兼容 MCP 的客户端通过自然语言或程序化请求访问和管理 Kibana 实例。
* **[Kibela](https://github.com/kiwamizamurai/mcp-kibela-server)**（由 kiwamizamurai 提供）- 与 Kibela API 交互。
* **[KiCad MCP](https://github.com/lamaalrajih/kicad-mcp)** - 支持 Mac、Windows 和 Linux 上的 KiCad 的 MCP 服务器。
* **[kill-process-mcp](https://github.com/misiektoja/kill-process-mcp)** - 通过自然语言查询列出并终止操作系统进程。
* **[Kindred Offers & Discounts MCP](https://github.com/kindred-app/mcp-server-kindred-offers)**（由 kindred.co 提供）- 该 MCP 服务器允许您从全球各地的电子商务商家网站获取实时优惠和优惠券。
* **[kintone](https://github.com/macrat/mcp-server-kintone)** - 通过 LLM 工具管理 [kintone](https://kintone.com) 中的记录和应用。
* **[Kokoro TTS](https://github.com/mberg/kokoro-tts-mcp)** - 使用 Kokoro 文字转语音功能将文本转换为 MP3，并可选自动上传到 S3。
* **[Kong Konnect](https://github.com/Kong/mcp-konnect)** - 一个用于与 Kong Konnect API 交互的模型上下文协议（MCP）服务器，允许 AI 助手查询和分析 Kong Gateway 的配置、流量和分析数据。
* **[Kubernetes](https://github.com/Flux159/mcp-server-kubernetes)** - 连接到 Kubernetes 集群并管理 Pod、部署和服务。
* **[Kubernetes 和 OpenShift](https://github.com/manusa/kubernetes-mcp-server)** - 一个功能强大的 Kubernetes MCP 服务器，额外支持 OpenShift。除了提供对任何 Kubernetes 资源的 CRUD 操作外，该服务器还提供了与集群交互的专用工具。
* **[KubeSphere](https://github.com/kubesphere/ks-mcp-server)** - KubeSphere MCP 服务器是一个模型上下文协议（MCP）服务器，提供与 KubeSphere API 的集成，能够从 KubeSphere 获取资源。分为四个工具模块：工作区管理、集群管理、用户和角色、扩展中心。
* **[Kukapay MCP 服务器](https://github.com/kukapay/kukapay-mcp-servers)** - 一套全面的模型上下文协议（MCP）服务器，专注于加密货币、区块链和 Web3 数据聚合、分析及服务。
* **[kwrds.ai](https://github.com/mkotsollaris/kwrds_ai_mcp)** - 为 [kwrds.ai](https://www.kwrds.ai/) 提供关键词研究、人们也问、SERP 和其他 SEO 工具。
* **[Langflow-DOC-QA-SERVER](https://github.com/GongRzhe/Langflow-DOC-QA-SERVER)** - 由 Langflow 驱动的文档问答模型上下文协议（MCP）服务器。通过提供通过 Langflow 后端查询文档的简单接口，展示了核心 MCP 概念。
* **[语言服务器](https://github.com/isaacphi/mcp-language-server)** - MCP 语言服务器帮助启用了 MCP 的客户端通过访问诸如获取定义、引用、重命名和诊断等语义工具，更轻松地浏览代码库。
* **[Lark(Feishu)](https://github.com/kone-net/mcp_server_lark)** - 用于 Lark(Feishu) 表格、消息、文档等的模型上下文协议（MCP）服务器。
* **[Lazy Toggl MCP](https://github.com/movstox/lazy-toggl-mcp)** - 一个简单的非官方 MCP 服务器，通过 Toggl API 进行时间跟踪。
* **[lean-lsp-mcp](https://github.com/oOo0oOo/lean-lsp-mcp)** - 通过语言服务器协议与 [Lean 定理证明器](https://lean-lang.org/)交互。
* **[librenms-mcp](https://github.com/mhajder/librenms-mcp)** - [LibreNMS](https://www.librenms.org/) 管理的 MCP 服务器。
* **[libvirt-mcp](https://github.com/MatiasVara/libvirt-mcp)** - 允许 LLM 与 libvirt 交互，从而在系统中创建、销毁或列出虚拟机。
* **[Lightdash](https://github.com/syucream/lightdash-mcp-server)** - 与 [Lightdash](https://www.lightdash.com/)（一个 BI 工具）交互。
* **[LINE](https://github.com/amornpan/py-mcp-line)**（由 amornpan 提供）- 一个 LINE 机器人集成的实现，允许语言模型通过标准化接口读取和分析 LINE 对话。支持异步操作、全面的日志记录、Webhook 事件处理以及多种消息类型。
* **[Linear](https://github.com/tacticlaunch/mcp-linear)** - 与 Linear 项目管理系统交互。
* **[Linear](https://github.com/jerhadf/linear-mcp-server)** - 允许 LLM 通过 API 与 Linear 交互以进行项目管理，包括搜索、创建和更新问题。
* **[Linear（Go）](https://github.com/geropl/linear-mcp-go)** - 允许 LLM 通过单一静态二进制文件与 Linear 的 API 交互。
* **[Linear MCP](https://github.com/anoncam/linear-mcp)** - 对 Linear SDK 的完整实现，支持对项目、计划、问题、用户、团队和状态进行全面的 Linear 管理。
* **[Listmonk MCP Server](https://github.com/rhnvrm/listmonk-mcp)** (作者：rhnvrm) - 完全覆盖 [Listmonk](https://github.com/knadh/listmonk) 电子邮件营销开源项目的 API。
* **[LlamaCloud](https://github.com/run-llama/mcp-server-llamacloud)** (作者：marcusschiesser) - 集成存储在 [LlamaCloud](https://cloud.llamaindex.ai/) 上的托管索引中的数据。
* **[lldb-mcp](https://github.com/stass/lldb-mcp)** - 一个用于 LLDB 的模型上下文协议服务器，提供由大型语言模型驱动的调试功能。
* **[llm-context](https://github.com/cyberchitta/llm-context.py)** - 提供一个具有可配置配置文件的代码库打包 MCP 工具，配置文件可指定文件包含/排除模式以及可选提示。
* **[Local History](https://github.com/xxczaki/local-history-mcp)** – 用于访问 VS Code/Cursor 本地历史记录的 MCP 服务器。
* **[Locust](https://github.com/QAInsights/locust-mcp-server)** - 允许使用兼容 MCP 的客户端运行和分析 Locust 测试。
* **[Loki](https://github.com/scottlepp/loki-mcp)** - 基于 Golang 的 MCP 服务器，用于从 [Grafana Loki](https://github.com/grafana/loki) 查询日志。
* **[Loki MCP Server](https://github.com/mo-silent/loki-mcp-server)** - 基于 Python 的 MCP 服务器，用于从 Grafana Loki 查询和分析日志，支持高级过滤和身份验证。
* **[LottieFiles](https://github.com/junmer/mcp-server-lottiefiles)** - 从 [LottieFiles](https://lottiefiles.com/) 搜索和获取 Lottie 动画。
* **[lsp-mcp](https://github.com/Tritlo/lsp-mcp)** - 使用语言服务器协议与语言服务器交互，通过悬停、代码操作和补全功能提供额外的上下文信息。
* **[Lspace](https://github.com/Lspace-io/lspace-server)** - 将分散的 ChatGPT/Claude/Cursor 对话转换为持久、可搜索的知识。
* **[lucene-mcp-server](https://github.com/VivekKumarNeu/MCP-Lucene-Server)** - 使用 Lucene 的 Spring Boot 服务器，用于快速文档搜索和管理。
* **[lucid-mcp-server](https://github.com/smartzan63/lucid-mcp-server)** – 用于 Lucidchart 和 Lucidspark 的 MCP 服务器：通过 LLM 驱动的人工智能视觉分析连接、搜索并获取 Lucid 文档和图表的文本表示。[npm](https://www.npmjs.com/package/lucid-mcp-server)
* **[LunarCrush Remote MCP](https://github.com/lunarcrush/mcp-server)** - 获取最新的社交指标和帖子，提供当前实时社交上下文以及历史指标的 LLM 和令牌优化输出。适用于自动化交易 / 金融咨询。
* **[mac-messages-mcp](https://github.com/carterlasalle/mac_messages_mcp)** - 一个通过模型上下文协议（MCP）安全地与您的 iMessage 数据库交互的 MCP 服务器，允许大型语言模型查询和分析 iMessage 聊天记录。它包括强大的电话号码验证、附件处理、联系人管理、群组聊天处理，以及完整的发送和接收消息支持。
* **[Maestro MCP](https://github.com/maestro-org/maestro-mcp)** - 用于通过 Maestro RPC API 与比特币交互的 MCP 服务器。
* **[Magg: The MCP Aggregator](https://github.com/sitbon/magg)** - 一个作为通用中心的元 MCP 服务器，允许大型语言模型自主发现、安装和编排多个 MCP 服务器——本质上赋予 AI 助手按需扩展自身能力的能力。包含 `mbro`，一个功能强大的 CLI MCP 服务器浏览器，支持脚本功能。
* **[Mailchimp MCP](https://github.com/AgentX-ai/mailchimp-mcp)** - 允许 AI 代理与 Mailchimp API（只读）交互。
* **[MalwareBazaar\_MCP](https://github.com/mytechnotalent/MalwareBazaar_MCP)** (作者：Kevin Thomas) - 一个由人工智能驱动的 MCP 服务器，自主与 MalwareBazaar 接口，为授权的网络安全研究工作流提供实时威胁情报和样本元数据。
* **[Matrix](https://github.com/mjknowles/matrix-mcp-server)** - 与 Matrix 家目录服务器交互。
* **[man-mcp-server](https://github.com/guyru/man-mcp-server)** - 用于在本地机器上搜索和访问 man 手册页的 MCP。
* **[MariaDB](https://github.com/abel9851/mcp-server-mariadb)** - 基于 Python 的 MariaDB 数据库集成，支持可配置的访问控制。
* **[Markdown2doc](https://github.com/Klavis-AI/klavis/tree/main/mcp_servers/pandoc)** - 使用 Pandoc 转换各种文件格式。
* **[Markdownify](https://github.com/zcaceres/mcp-markdownify-server)** - 将几乎所有内容转换为 Markdown 的 MCP（PPTX、HTML、PDF、YouTube 转录等）。
* **[market-fiyati](https://github.com/mtcnbzks/market-fiyati-mcp-server)** - marketfiyati.org.tr 的 MCP 服务器，提供土耳其市场的杂货价格搜索和比较。
* **[Markitdown](https://github.com/Klavis-AI/klavis/tree/main/mcp_servers/markitdown)** - 将文件转换为 Markdown。
* **[Masquerade](https://github.com/postralai/masquerade)** - 在将 PDF 文档发送给 Claude 之前，对敏感信息进行脱敏处理。Masquerade 作为 LLM 的隐私防火墙。
* **[MasterGo](https://github.com/mastergo-design/mastergo-magic-mcp)** - 设计用于将 MasterGo 设计工具与 AI 模型连接的服务器。它使 AI 模型能够直接从 MasterGo 设计文件中检索 DSL 数据。
* **[Matlab-MCP-Tools](https://github.com/neuromechanist/matlab-mcp-tools)** - 用于编写和执行 MATLAB 脚本、在 MCP 调用之间维护工作区上下文、可视化绘图，并对 MATLAB 代码进行逐段分析的 MCP，可完全访问 MATLAB 的计算能力。
* **[Maton](https://github.com/maton-ai/agent-toolkit/tree/main/modelcontextprotocol)** - 连接到您的 SaaS 工具，如 HubSpot、Salesforce 等。
* **[Maven Tools MCP](https://github.com/arvindand/maven-tools-mcp)** - 针对 JVM 构建工具的 Maven Central 依赖智能。支持所有构建工具（Maven、Gradle、SBT、Mill），并集成 Context7 提供文档支持。
* **[MCP-Airflow-API](https://github.com/call518/MCP-Airflow-API)** - 用于 Apache Airflow API 集成的模型上下文协议（MCP）服务器。提供全面的工具用于管理 Airflow 集群，包括服务操作、配置管理、状态监控和请求跟踪。
* **[MCP Compass](https://github.com/liuyoshio/mcp-compass)** - 为您推荐合适的 MCP 服务器。
* **[MCP Create](https://github.com/tesla0225/mcp-create)** - 一个动态的 MCP 服务器管理服务，可以即时创建、运行和管理模型上下文协议服务器。
* **[MCP Documentation Server](https://github.com/andrea9293/mcp-documentation-server)** - 提供本地文档管理和语义搜索功能的服务器。上传文档，使用 AI 嵌入进行搜索，并与如 Claude Desktop 和 VS Code 等 MCP 客户端无缝集成。
* **[MCP Installer](https://github.com/anaisbetts/mcp-installer)** - 一个为您安装其他 MCP 服务器的服务器。
* **[MCP ProjectManage OpenProject](https://github.com/boma086/mcp-projectmanage-openproject)** - 该服务器为项目周报提供 MCP 服务，项目管理信息由 OpenProject 提供。
* **[MCP Proxy Server](https://github.com/TBXark/mcp-proxy)** - 一个 MCP 代理服务器，通过单个 HTTP 服务器聚合并提供多个 MCP 资源服务器。
* **[MCP Server Creator](https://github.com/GongRzhe/MCP-Server-Creator)** - 一个功能强大的模型上下文协议（MCP）服务器，用于创建其他 MCP 服务器！这个元服务器提供工具，用于动态生成 FastMCP 服务器配置和 Python 代码。
* **[MCP Server Generator](https://github.com/SerhatUzbas/mcp-server-generator)** - 一个创建和管理 MCP 服务器的 MCP 服务器！帮助非技术人员和开发人员在 AI 指导、自动依赖管理以及 Claude Desktop 集成的帮助下构建自定义的 JavaScript MCP 服务器。
* **[MCP STDIO to Streamable HTTP Adapter](https://github.com/pyroprompts/mcp-stdio-to-streamable-http-adapter)** - 即使 MCP 客户端仅支持 STDIO，也可以连接到流式 HTTP MCP 服务器。
* **[MCP-Ambari-API](https://github.com/call518/MCP-Ambari-API)** - 用于 Apache Ambari API 集成的模型上下文协议（MCP）服务器。该项目提供了管理 Hadoop 集群的工具，包括服务操作、配置管理、状态监控和请求跟踪。
* **[mcp-containerd](https://github.com/jokemanfire/mcp-containerd)** - 用 Rust 实现的 containerd MCP，支持 CRI 接口的操作。
* **[MCP-Database-Server](https://github.com/executeautomation/mcp-database-server)** - 与数据库（如 SQL Server、SQLite 和 PostgreSQL）交互的最快方式。
* **[mcp-grep](https://github.com/erniebrodeur/mcp-grep)** - 基于 Python 的 MCP 服务器，为大型语言模型提供 grep 功能。支持常见的 grep 功能，包括模式搜索、不区分大小写匹配、上下文行和递归目录搜索。
* **[mcp-k8s-go](https://github.com/strowk/mcp-k8s-go)** - 基于 Golang 的 Kubernetes MCP 服务器，用于浏览 Pod 及其日志、事件、命名空间等。设计为可扩展的。
* **[mcp-local-rag](https://github.com/nkapila6/mcp-local-rag)** - 一个“原始”的类 RAG Web 搜索模型上下文协议（MCP）服务器，使用 Google 的 MediaPipe 文本嵌入器和 DuckDuckGo 搜索在本地运行。
* **[mcp-mcp](https://github.com/wojtyniak/mcp-mcp)** - 作为 MCP 客户端工具发现服务的元 MCP 服务器。
* **[mcp-meme-sticky](https://github.com/nkapila6/mcp-meme-sticky)** - 使用 MCP 服务器为 WhatsApp 或 Telegram 制作表情包或贴纸。
* **[MCP-NixOS](https://github.com/utensils/mcp-nixos)** - 一个模型上下文协议服务器，为 AI 助手提供关于 NixOS 包、系统选项、Home Manager 设置和 nix-darwin macOS 配置的准确实时信息。
* **[mcp-open-library](https://github.com/8enSmith/mcp-open-library)** - 一个用于 Open Library API 的模型上下文协议 (MCP) 服务器，使 AI 助手能够搜索书籍和作者信息。
* **[mcp-proxy](https://github.com/sparfenyuk/mcp-proxy)** - 连接到使用 SSE 传输协议运行的 MCP 服务器，或将 stdio 服务器作为 SSE 服务器暴露。
* **[mcp-read-website-fast](https://github.com/just-every/mcp-read-website-fast)** - 快速、节省 token 的网页内容提取工具，可将网站转换为干净的 Markdown。功能包括 Mozilla Readability、智能缓存、支持 robots.txt 的礼貌爬取，以及最小依赖的并发获取。
* **[mcp-salesforce](https://github.com/lciesielski/mcp-salesforce-example)** - 一个展示与 Salesforce 实例交互基本功能的 MCP 服务器。
* **[mcp-sanctions](https://github.com/madupay/mcp-sanctions)** - 根据全球制裁名单（OFAC、SDN、联合国等）筛查个人和组织。可通过提示或文档上传进行查询。
* **[mcp-screenshot-website-fast](https://github.com/just-every/mcp-screenshot-website-fast)** - 专为 Claude Vision API 优化的高质量网页截图捕获工具。自动将完整页面切割为 1072x1072 的图块（1.15 百万像素），并支持可配置的视口和动态内容等待策略。
* **[mcp-server-leetcode](https://github.com/doggybee/mcp-server-leetcode)** - 用于练习和获取 LeetCode 题目的工具。可自动获取题目、解答和洞察，适用于编程练习和竞赛。
* **[Mcp-Swagger-Server](https://github.com/zaizaizhao/mcp-swagger-server)** (作者：zaizaizhao) - 此 MCP 服务器将 OpenAPI 规范转换为 MCP 工具，使 AI 助手能够通过标准化协议与 REST API 进行交互。
* **[mcp-vision](https://github.com/groundlight/mcp-vision)** - 一个暴露 HuggingFace 计算机视觉模型（如零样本目标检测）为工具的 MCP 服务器，增强大型语言模型或视觉-语言模型的视觉能力。
* **[mcp-weather](https://github.com/TimLukaHorstmann/mcp-weather)** - 通过 AccuWeather API（提供免费层级）提供准确的天气预报。
* **[mcp-youtube-extract](https://github.com/sinjab/mcp_youtube_extract)** - 一个用于 YouTube 操作的模型上下文协议服务器，可提取视频信息和字幕，并具有智能回退逻辑。功能包括全面的日志记录、错误处理，以及对自动生成和手动字幕的支持。
* **[mcp\_weather](https://github.com/isdaniel/mcp_weather_server)** - 从 <https://api.open-meteo.com> API 获取天气信息。
* **[MCPfinder](https://github.com/mcpfinder/server)** - AI 代理的“应用商店”：在 MCP 生态系统内发现、安装和变现 AI 能力。
* **[MCPIgnore Filesytem](https://github.com/CyberhavenInc/filesystem-mcpignore)** - 一个以数据安全为优先的文件系统 MCP 服务器，实现 `.mcpignore` 功能，防止 MCP 客户端访问敏感数据。
* **[MCPJungle](https://github.com/mcpjungle/MCPJungle)** - 企业 AI 代理的自托管 MCP 注册中心和网关。
* **[Md2doc](https://github.com/Yorick-Ryu/md2doc-mcp)** - 使用外部转换服务将 Markdown 文本转换为 DOCX 格式。
* **[MeasureSpace MCP](https://github.com/MeasureSpace/measure-space-mcp-server)** - 一个免费的 [模型上下文协议 (MCP) 服务器](https://smithery.ai/server/@MeasureSpace/measure-space-mcp-server)，提供由 [measurespace.io](https://measurespace.io) 支持的全球天气、气候、空气质量预报和地理编码服务。
* **[MediaWiki](https://github.com/ProfessionalWiki/MediaWiki-MCP-Server)** - 一个与任意 MediaWiki 维基交互的模型上下文协议 (MCP) 服务器。
* **[MediaWiki MCP adapter](https://github.com/lucamauri/MediaWiki-MCP-adapter)** - 一个用于 MediaWiki 和 WikiBase API 的自定义模型上下文协议适配器。
* **[medRxiv](https://github.com/JackKuo666/medRxiv-MCP-Server)** - 通过简单的 MCP 接口使 AI 助手能够搜索和访问 medRxiv 论文。
* **[mem0-mcp](https://github.com/mem0ai/mem0-mcp)** - 一个用于 Mem0 的模型上下文协议服务器，帮助管理编码偏好。
* **[Membase](https://github.com/unibaseio/membase-mcp)** - 通过 Membase 以分布式方式保存和查询代理记忆。
* **[Meme MCP](https://github.com/lidorshimoni/meme-mcp)** - 通过 Model Context Protocol 使用 Imgflip API 生成 AI 模因。
* **[memento-mcp](https://github.com/gannonh/memento-mcp)** - 基于 Neo4j 的知识图谱记忆系统，支持语义搜索和时间感知。
* **[Meta Ads Remote MCP](https://github.com/pipeboard-co/meta-ads-mcp)** - 用于与 Meta Ads API 交互的远程 MCP 服务器 —— 访问、分析和管理 Facebook、Instagram 和其他 Meta 平台的广告活动。
* **[MetaTrader MCP](https://github.com/ariadng/metatrader-mcp-server)** - 使 AI 大语言模型能够使用 MetaTrader 5 平台执行交易。
* **[Metricool MCP](https://github.com/metricool/mcp-metricool)** - 一个集成 Metricool 社交媒体分析平台的模型上下文协议服务器，用于检索性能指标并跨网络（如 Instagram、Facebook、Twitter、LinkedIn、TikTok 和 YouTube）安排内容。
* **[Microsoft 365](https://github.com/merill/lokka)** - (作者：Merill) 一个用于 Microsoft 365 的模型上下文协议 (MCP) 服务器。支持所有服务，包括 Teams、SharePoint、Exchange、OneDrive、Entra、Intune 等。详见 [Lokka](https://lokka.dev/)。
* **[Microsoft 365](https://github.com/softeria/ms-365-mcp-server)** - 一个通过 Graph API 连接到 Microsoft Office 和整个 Microsoft 365 套件的 MCP 服务器（包括 Outlook/邮件、文件、Excel、日历等）。
* **[Microsoft 365](https://github.com/pnp/cli-microsoft365-mcp-server)** - 一个单一的 MCP 服务器，可管理 Microsoft 365 的许多不同领域，例如：Entra ID、OneDrive、OneNote、Outlook、Planner、Power Apps、Power Automate、Power Platform、SharePoint Embedded、SharePoint Online、Teams、Viva Engage 等。
* **[Microsoft 365 文件 (SharePoint/OneDrive)](https://github.com/godwin3737/mcp-server-microsoft365-filesearch)** (作者：godwin3737) - 一个 MCP 服务器，提供从 Microsoft 365（包括 Onedrive 和 SharePoint）搜索和获取文件内容的工具。支持文档（pdf/docx）、演示文稿、电子表格和图像。
* **[Microsoft Teams](https://github.com/InditexTech/mcp-teams-server)** - 一个集成 Microsoft Teams 消息功能（读取、发布、提及、列出成员和线程）的 MCP 服务器。
* **[Mifos X](https://github.com/openMF/mcp-mifosx)** - 一个用于 Mifos X 开源银行系统的 MCP 服务器，可用于管理客户、贷款、储蓄、股份、金融交易并生成金融报告。
* **[Mikrotik](https://github.com/jeff-nasseri/mikrotik-mcp)** - 一个覆盖网络操作（IP、DHCP、防火墙等）的 Mikrotik MCP 服务器。
* **[Mindmap](https://github.com/YuChenSSR/mindmap-mcp-server)** (作者：YuChenSSR) - 一个根据包含 Markdown 代码的输入生成思维导图的服务器。
* **[Minima](https://github.com/dmayboroda/minima)** - 用于本地文件 RAG 的 MCP 服务器。
* **[Mobile MCP](https://github.com/mobile-next/mobile-mcp)** (作者：Mobile Next) - 一个用于移动设备（iOS/Android）自动化、应用抓取和开发的 MCP 服务器，支持物理设备或模拟器/仿真器。
* **[Monday.com](https://github.com/sakce/mcp-server-monday)** - 一个用于与 Monday.com 看板和项目交互的 MCP 服务器。
* **[MongoDB](https://github.com/kiliczsh/mcp-mongo-server)** - 一个 MongoDB 的模型上下文协议服务器。
* **[MongoDB & Mongoose](https://github.com/nabid-pf/mongo-mongoose-mcp)** - 一个使用 Mongoose Schema 和验证的 MongoDB MCP 服务器。
* **[MongoDB Lens](https://github.com/furey/mongodb-lens)** - 一个功能齐全的 MongoDB 数据库 MCP 服务器。
* **[Monzo](https://github.com/BfdCampos/monzo-mcp-bfdcampos)** - 通过自然语言访问和管理您的 Monzo 银行账户，包括余额查询、资金罐管理、交易列表和跨多种账户类型（个人、联名、灵活账户）的交易标注。
* **[Morningstar](https://github.com/Morningstar/morningstar-mcp-server)** - 一个用于与 Morningstar Research、Editorial 和 Datapoints 交互的 MCP 服务器。
* **[MSSQL](https://github.com/aekanun2020/mcp-server/)** - 具有可配置访问控制和模式检查功能的 MSSQL 数据库集成。
* **[MSSQL](https://github.com/JexinSam/mssql_mcp_server)** (作者：jexin) - 一个用 Python 编写的 MSSQL 数据库 MCP 服务器。
* **[MSSQL-MCP](https://github.com/daobataotie/mssql-mcp)** (作者：daobataotie) - 一个参考官方 SQLite MCP 并修改以适配 MSSQL 的 MCP 服务器。
* **[MSSQL-MCP-Node](https://github.com/mihai-dulgheru/mssql-mcp-node)** (作者：mihai - dulgheru) - 一个用于 Microsoft SQL Server 的 Node.js MCP 服务器，支持自动检测的单/多数据库配置、执行 SQL 和模式工具、强大的 Zod 验证，以及可选的 Express 端点用于本地测试。
* **[MSSQL-Python](https://github.com/amornpan/py-mcp-mssql)** (作者：amornpan) - 一个用于 MSSQL 数据库只读访问的 Python 实现，具有增强的安全特性、可配置的访问控制和模式检查功能。专注于通过 Python 生态系统实现安全的数据库交互。
* **[Multi-Model Advisor](https://github.com/YuChenSSR/multi-ai-advisor-mcp)** - 一个模型上下文协议 (MCP) 服务器，可在多个 Ollama 模型之间协调查询，综合它们的洞察，为任何给定查询提供全面且多角度的 AI 视角。
* **[Multicluster-MCP-Sever](https://github.com/yanmxa/multicluster-mcp-server)** - GenAI 系统与多个 Kubernetes 集群交互的网关。
* **[MySQL](https://github.com/benborla/mcp-server-mysql)** (作者：benborla) - 使用 NodeJS 实现的 MySQL 数据库集成，具有可配置的访问控制和模式检查功能。
* **[MySQL](https://github.com/designcomputer/mysql_mcp_server)** (由 DesignComputer 开发) - 在 Python 中集成 MySQL 数据库，支持可配置的访问控制和模式检查
* **[MySQL-Server](https://github.com/tonycai/mcp-mysql-server)** (由 TonyCai 开发) - 使用 Python 脚本集成 MySQL 数据库，支持可配置的访问控制和模式检查，使用 stdio 模式适合本地部署，可以在 Docker 容器中运行。
* **[n8n](https://github.com/leonardsellem/n8n-mcp-server)** - 此 MCP 服务器为 AI 助手提供管理 n8n 工作流和执行的工具和资源，包括列出、创建、更新和删除工作流，以及监控其执行状态。
* **[Nacos MCP Router](https://github.com/nacos-group/nacos-mcp-router)** - 此 MCP（模型上下文协议）服务器提供工具用于搜索、安装、代理其他 MCP 服务器。
* **[NASA](https://github.com/ProgramComputer/NASA-MCP-server)** (由 ProgramComputer 开发) - 访问 NASA 数据源的统一网关，包括但不限于 APOD、NEO、EPIC、GIBS。
* **[NASA Image MCP Server](https://github.com/adithya1012/NASA-MCP-Server/blob/main/README.md)** - 提供访问 NASA 视觉数据 API 的 MCP 服务器，包括火星探测器照片、地球卫星图像（EPIC/GIBS）和每日天文学图片。内置图像分析工具，支持自动格式检测、压缩和用于 LLM 集成的 base64 转换。
* **[Nasdaq Data Link](https://github.com/stefanoamorelli/nasdaq-data-link-mcp)** (由 stefanoamorelli 开发) - 用于访问、探索和交互纳斯达克数据链接的广泛而有价值的金融和经济数据集的 MCP 服务器。
* **[National Parks](https://github.com/KyrieTangSheng/mcp-server-nationalparks)** - 该服务器提供美国国家公园的最新公园详细信息、警报、游客中心、露营地、徒步小径和活动信息。
* **[NAVER](https://github.com/pfldy2850/py-mcp-naver)** (由 pfldy2850 开发) - 此 MCP 服务器提供与各种 Naver 服务交互的工具，例如搜索博客、新闻、书籍等。
* **[Naver](https://github.com/isnow890/naver-search-mcp)** (由 isnow890 开发) - Naver 搜索 API 集成的 MCP 服务器，支持博客、新闻、购物搜索和 DataLab 分析功能。
* **[NBA](https://github.com/Taidgh-Robinson/nba-mcp-server)** - 此 MCP 服务器提供获取最近和历史 NBA 比赛及其基础和高级统计数据的工具。
* **[Neo4j](https://github.com/da-okazaki/mcp-neo4j-server)** - 一个社区开发的服务器，用于与 Neo4j 图数据库交互。
* **[Neovim](https://github.com/bigcodegen/mcp-neovim-server)** - 用于您的 Neovim 会话的 MCP 服务器。
* **[Netbird](https://github.com/aantti/mcp-netbird)** - 列出并分析 Netbird 网络对等点、组、策略等。
* **[NetMind ParsePro](https://github.com/protagolabs/Netmind-Parse-PDF-MCP)** - 由 [NetMind](https://www.netmind.ai/) 团队构建和定制的 PDF 解析 AI 服务。
* **[Nikto MCP](https://github.com/weldpua2008/nikto-mcp)** (由 weldpua2008 开发) - 一个安全的 MCP 服务器，使 AI 代理能够与 Nikto 网络服务器扫描器交互（可与 npx 或 docker 一起使用）。
* **[NocoDB](https://github.com/edwinbernadus/nocodb-mcp-server)** - 对 NocoDB 数据库的读写访问。
* **[Node Code Sandbox](https://github.com/alfonsograziano/node-code-sandbox-mcp)** - 一个 Node.js MCP 服务器，可启动基于 Docker 的隔离沙箱，用于执行带有即时 npm 依赖安装的 JavaScript 代码片段。
* **[nomad-mcp](https://github.com/kocierik/mcp-nomad)** - 一个通过 MCP 提供管理 Nomad 集群工具集的服务器。
* **[Notion](https://github.com/suekou/mcp-notion-server)** (由 suekou 开发) - 与 Notion API 交互。
* **[Notion](https://github.com/v-3/notion-server)** (由 v-3 开发) - Notion MCP 集成。通过 Claude 聊天搜索、读取、更新和创建页面。
* **[NPM Plus](https://github.com/shacharsol/js-package-manager-mcp)** - 具有安全扫描、包分析和智能依赖管理的 AI 驱动 JavaScript 包管理，适用于兼容 MCP 的编辑器。
* **[NS Travel Information](https://github.com/r-huijts/ns-mcp-server)** - 通过官方 NS API 访问荷兰铁路（NS）的实时列车旅行信息和故障信息。
* **[ntfy-mcp](https://github.com/teddyzxcv/ntfy-mcp)** (由 teddyzxcv 开发) - 通过使用 ntfy 发送手机通知的 MCP 服务器，使您随时了解动态。
* **[ntfy-me-mcp](https://github.com/gitmotion/ntfy-me-mcp)** (由 gitmotion 开发) - 一个 ntfy MCP 服务器，用于从 AI 代理向您自托管的 ntfy 服务器发送/获取 ntfy 通知 📤（支持安全令牌认证等功能，可与 npx 或 docker 一起使用！）
* **[oatpp-mcp](https://github.com/oatpp/oatpp-mcp)** - Oat++ 的 C++ MCP 集成。使用 [Oat++](https://oatpp.io) 构建 MCP 服务器。
* **[Obsidian Markdown Notes](https://github.com/calclavia/mcp-obsidian)** - 读取和搜索您的 Obsidian 保险库或包含 Markdown 笔记的任何目录。
* **[obsidian-mcp](https://github.com/StevenStavrakis/obsidian-mcp)** - (由 Steven Stavrakis 开发) 用于 Obsidian.md 的 MCP 服务器，提供搜索、读取、写入和整理笔记的工具。
* **[OceanBase](https://github.com/yuanoOo/oceanbase_mcp_server)** - (由 yuanoOo 开发) 一个模型上下文协议（MCP）服务器，可安全地与 OceanBase 数据库交互。
* **[Octocode](https://github.com/bgauryy/octocode-mcp)** - (由 Guy Bary 开发) 基于 AI 的开发者助手，可在 GitHub 和 NPM 领域实现实时高级代码研究、分析和发现。
* **[Odoo](https://github.com/ivnvxd/mcp-server-odoo)** - 将 AI 助手连接到 Odoo ERP 系统，以实现业务数据访问和工作流自动化。
* **[Office-PowerPoint-MCP-Server](https://github.com/GongRzhe/Office-PowerPoint-MCP-Server)** - 用于创建、读取和操作 Microsoft PowerPoint 文档的模型上下文协议（MCP）服务器。
* **[Office-Visio-MCP-Server](https://github.com/GongRzhe/Office-Visio-MCP-Server)** - 用于创建、读取和操作 Microsoft Visio 文档的模型上下文协议（MCP）服务器。
* **[Office-Word-MCP-Server](https://github.com/GongRzhe/Office-Word-MCP-Server)** - 用于创建、读取和操作 Microsoft Word 文档的模型上下文协议（MCP）服务器。
* **[Okta](https://github.com/kapilduraphe/okta-mcp-server)** - 与 Okta API 交互。
* **[OKX-MCP-Server](https://github.com/memetus/okx-mcp-playground)** - 一个 MCP 服务器，通过 OKX API 提供各种区块链数据和市场价格数据。该服务器允许 Claude 执行诸如检索资产价格、交易数据、账户历史数据和交易指令数据等操作。
* **[OneNote](https://github.com/rajvirtual/MCP-Servers/tree/master/onenote)** - (由 Rajesh Vijay 开发) 一个连接到 Microsoft OneNote 的 MCP 服务器，使用 Microsoft Graph API。从 OneNote 读取笔记本、节和页面，在 OneNote 中创建新的笔记本、节和页面。
* **[Open Strategy Partners 营销工具](https://github.com/open-strategy-partners/osp_marketing_tools)** - 用于产品营销的内容编辑代码、价值图和定位工具。
* **[OpenAI WebSearch MCP](https://github.com/ConechoAI/openai-websearch-mcp)** - 这是一个基于 Python 的 MCP 服务器，提供 OpenAI 的 `web_search` 内置工具。
* **[OpenAlex.org MCP](https://github.com/drAbreu/alex-mcp)** - 使用 OpenAlex 数据库提供基于机器学习的作者去重和全面研究人员档案的专业 MCP 服务器。
* **[OpenAPI](https://github.com/snaggle-ai/openapi-mcp-server)** - 与 [OpenAPI](https://www.openapis.org/) API 交互。
* **[OpenAPI AnyApi](https://github.com/baryhuang/mcp-server-any-openapi)** - 使用内置的端点语义搜索功能与大型 [OpenAPI](https://www.openapis.org/) 文档交互。允许自定义 MCP 服务器前缀。
* **[OpenAPI Schema](https://github.com/hannesj/mcp-openapi-schema)** - 允许 LLM 探索大型 [OpenAPI](https://www.openapis.org/) 模式，而不会使上下文膨胀。
* **[OpenAPI Schema Explorer](https://github.com/kadykov/mcp-openapi-schema-explorer)** - 通过 MCP 资源实现对本地或远程 OpenAPI/Swagger 规范的高效令牌访问。
* **[OpenCTI](https://github.com/Spathodea-Network/opencti-mcp)** - 与 OpenCTI 平台交互以检索威胁情报数据，包括报告、指标、恶意软件和威胁行为者。
* **[OpenCV](https://github.com/GongRzhe/opencv-mcp-server)** - 提供 OpenCV 计算机视觉功能的 MCP 服务器。这使 AI 助手和语言模型能够访问强大的计算机视觉工具。
* **[OpenDota](https://github.com/asusevski/opendota-mcp-server)** - 与 OpenDota API 交互以检索 Dota 2 比赛数据、玩家统计数据等。
* **[OpenLink 通用 Java 数据库连接](https://github.com/OpenLinkSoftware/mcp-jdbc-server)** - 通过开放数据库连接 (ODBC) 连接器 (驱动程序) 实现通用数据库管理系统 (DBMS) 访问
* **[OpenLink 通用开放数据库连接](https://github.com/OpenLinkSoftware/mcp-odbc-server)** - 通过开放数据库连接 (ODBC) 连接器 (驱动程序) 实现通用数据库管理系统 (DBMS) 访问
* **[OpenLink 通用 Python 开放数据库连接](https://github.com/OpenLinkSoftware/mcp-pyodbc-server)** - 通过开放数据库连接 (ODBC) 连接器 (驱动程序) 实现通用数据库管理系统 (DBMS) 访问，适用于 PyODBC
* **[OpenLink 通用 SQLAlchemy 对象关系数据库连接 (适用于 PyODBC)](https://github.com/OpenLinkSoftware/mcp-sqlalchemy-server)** - 通过 SQLAlchemy (PyODBC) 连接器 (驱动程序) 实现通用数据库管理系统 (DBMS) 访问
* **[OpenMetadata](https://github.com/yangkyeongmo/mcp-server-openmetadata)** - 用于 OpenMetadata 的 MCP 服务器，OpenMetadata 是一个开源的元数据管理平台。
* **[OpenReview](https://github.com/anyakors/openreview-mcp-server)** - 一个用于 [OpenReview](https://openreview.net/) 的 MCP 服务器，可从 AI/ML 会议中获取、阅读和保存手稿。
* **[OpenRPC](https://github.com/shanejonas/openrpc-mpc-server)** - 通过 [OpenRPC](https://open-rpc.org) 交互并发现 JSON-RPC API。
* **[OpenStack](https://github.com/wangsqly0407/openstack-mcp-server)** - 提供 OpenStack 交互功能的 MCP 服务器实现。
* **[OpenWeather](https://github.com/mschneider82/mcp-openweather)** - 与免费的 openweathermap API 交互，以获取某个地点的当前天气和天气预报。
* **[Operative WebEvalAgent](https://github.com/Operative-Sh/web-eval-agent)**（由 [Operative.sh](https://www.operative.sh) 提供） - 一个用于自主测试、调试和修复 Web 应用程序的 MCP 服务器。
* **[OPNSense MCP](https://github.com/vespo92/OPNSenseMCP)** - 用于 OPNSense 防火墙管理及 API 访问的 MCP 服务器。
* **[OpenAI GPT Image](https://github.com/SureScaleAI/openai-gpt-image-mcp)** - OpenAI GPT 图像生成/编辑 MCP 服务器。
* **[Optimade MCP](https://github.com/dianfengxiaobo/optimade-mcp-server)** - 一个通过 Optimade 数据库（例如元素组成、晶体结构）进行实时材料科学数据查询的 MCP 服务器。
* **[Oracle](https://github.com/marcelo-ochoa/servers)**（由 marcelo-ochoa 提供） - 使用 NodeJS 实现的 Oracle 数据库集成，具有可配置的访问控制、查询解释、统计和模式检查功能。
* **[Oracle Cloud Infrastructure (OCI)](https://github.com/karthiksuku/oci-mcp)**（由 karthiksukumar 提供） - 用于 OCI 基础设施（计算、自治数据库、对象存储）的 Python MCP 服务器。默认为读取密集型，支持安全实例操作（启动/停止/重置）。包含 Claude Desktop 配置和 `.env` 隔间作用域。
* **[Oura MCP 服务器](https://github.com/tomekkorbak/oura-mcp-server)** - 用于 Oura API 的 MCP 服务器，以检索用户的睡眠数据。
* **[Oura Ring](https://github.com/rajvirtual/oura-mcp-server)**（由 Rajesh Vijay 提供） - 用于访问和分析你的 Oura Ring 数据的 MCP 服务器。它提供了一种结构化的方式来获取和理解你的健康指标。
* **[Outline](https://github.com/Vortiago/mcp-outline)** - 用于与 [Outline](https://www.getoutline.com) 知识库交互的 MCP 服务器，以搜索、阅读、创建和管理文档及其内容，访问集合，添加评论，并管理文档反向链接。
* **[Outlook Mail + Calendar + OneDrive](https://github.com/Norcim133/OutlookMCPServer)** - 具有 Outlook Mail、Calendar 和初步 OneDrive 支持的虚拟助手（需要 Azure 管理员权限）。
* **[Pacman](https://github.com/oborchers/mcp-server-pacman)** - 一个提供软件包索引查询功能的 MCP 服务器。该服务器能够从诸如 PyPI、npm、crates.io、Docker Hub 和 Terraform Registry 等软件包仓库中搜索和检索信息。
* **[pancakeswap-poolspy-mcp](https://github.com/kukapay/pancakeswap-poolspy-mcp)** - 一个跟踪 Pancake Swap 上新创建流动性池的 MCP 服务器。
* **[Pandoc](https://github.com/vivekVells/mcp-pandoc)** - 用于使用 Pandoc 进行无缝文档格式转换的 MCP 服务器，支持 Markdown、HTML、PDF、DOCX（.docx）、CSV 等更多格式。
* **[Paradex MCP](https://github.com/sv/mcp-paradex-py)** - 用于与 Paradex 平台交互的原生 MCP 服务器，包括完整的交易功能。
* **[Parliament MCP](https://github.com/modelcontextprotocol/servers/tree/main/[https://github.com/sv/mcp-paradex-py](https://github.com/i-dot-ai/parliament-mcp))** - 用于查询英国议会数据的 MCP 服务器。
* **[PDF 阅读器 MCP](https://github.com/gpetraroli/mcp_pdf_reader)** - 用于读取和搜索本地 PDF 文件文本的 MCP 服务器。
* **[PDF Tools MCP](https://github.com/Sohaib-2/pdf-mcp-server)** - 综合 PDF 操作工具包（合并、拆分、加密、优化等更多功能）。
* **[PDMT](https://github.com/paiml/pdmt)** - 实用确定性 MCP 模板化 - 高性能确定性模板库，具有全面的待办事项验证、质量保障和 0.0 温度生成以实现可重复输出。
* **[Peacock for VS Code](https://github.com/johnpapa/peacock-mcp)** - 用于 VS Code 的 Peacock 扩展的 MCP 服务器，一次为一个代码编辑器着色。该项目的主要目标是展示如何使用 MCP 服务器与 API 交互。
* **[persistproc](https://github.com/irskep/persistproc)** - 一个 MCP 服务器及命令行工具，允许代理查看和控制长期运行的进程，如 Web 服务器。
* **[Phone MCP](https://github.com/hao-cyber/phone-mcp)** - 📱 一个强大的插件，让你可以控制你的 Android 手机。使 AI 代理能够执行复杂任务，如根据天气自动播放音乐，或拨打电话和发送短信。
* **[PIF](https://github.com/hungryrobot1/MCP-PIF)** - 个人智能框架（PIF），提供用于文件操作、结构化推理和基于日志的文档工具，以支持跨会话的人机协作连续性和演进。
* **[Pinecone](https://github.com/sirmews/mcp-pinecone)** - 用于搜索和上传记录到 Pinecone 的 MCP 服务器。支持简单的 RAG 功能，利用 Pinecone 的推理 API。
* **[Pinner MCP](https://github.com/safedep/pinner-mcp)** - 用于将 GitHub Actions 和容器基础镜像固定到其不可变的 SHA 哈希值以防止供应链攻击的 MCP 服务器。
* **[Pixelle MCP](https://github.com/AIDC-AI/Pixelle-MCP)** - 一个全模态 AIGC 框架，可将 ComfyUI 工作流无缝转换为 MCP 工具，无需代码，支持通过基于 Chainlit 的 Web 界面进行文本、图像、声音和视频生成的全模态支持。
* **[Placid.app](https://github.com/felores/placid-mcp-server)** - 使用 Placid.app 模板生成图像和视频创意。
* **[Plane](https://github.com/kelvin6365/plane-mcp-server)** - 该 MCP 服务器将帮助你通过 Plane 的 API 管理项目和问题。
* **[Playwright](https://github.com/executeautomation/mcp-playwright)** - 该 MCP 服务器将帮助你使用 Playwright 运行浏览器自动化和网页抓取。
* **[Podbean](https://github.com/amurshak/podbeanMCP)** - 通过 Podbean API 管理播客、剧集和分析的 MCP 服务器。允许更新、添加、删除播客，查询节目描述、笔记、分析等更多内容。
* **[Polarsteps](https://github.com/remuzel/polarsteps-mcp)** - 一个帮助你回顾以往旅行并规划新旅程的 MCP 服务器！
* **[PostgreSQL](https://github.com/ahmedmustahid/postgres-mcp-server)** - 提供双 HTTP/Stdio 传输的 PostgreSQL MCP 服务器，支持数据库模式检查和只读查询执行，具有会话管理和 Podman（或 Docker）支持。
* **[Postman](https://github.com/shannonlal/mcp-postman)** - 通过 Newman 本地运行 Postman 集合的 MCP 服务器。允许简单执行 Postman 服务并返回集合是否通过所有测试的结果。
* **[Powerdrill](https://github.com/powerdrillai/powerdrill-mcp)** - 与 Powerdrill 数据集交互，使用 [Powerdrill](https://powerdrill.ai) 用户 ID 和项目 API 密钥进行身份验证。
* **[Prefect](https://github.com/allen-munsch/mcp-prefect)** - 使用 `prefect` Python 客户端为 Prefect Server 和 Prefect Cloud \[<https://www.prefect.io/>] 提供工作流编排和 ELT/ETL 的 MCP 服务器。
* **[Productboard](https://github.com/kenjihikmatullah/productboard-mcp)** - 通过 MCP 将 Productboard API 集成到代理工作流中。
* **[Prometheus](https://github.com/pab1it0/prometheus-mcp-server)** - 查询和分析 Prometheus（开源监控系统）。
* **[Prometheus (TypeScript)](https://github.com/yanmxa/prometheus-mcp-server)** - 启用 AI 助手使用 TypeScript 实现的自然语言查询 Prometheus。
* **[PubChem](https://github.com/sssjiang/pubchem_mcp_server)** - 从 PubChem API 提取药物信息。
* **[PubMed](https://github.com/JackKuo666/PubMed-MCP-Server)** - 通过简单的 MCP 接口启用 AI 助手搜索、访问和分析 PubMed 文章。
* **[Pulumi](https://github.com/dogukanakkaya/pulumi-mcp-server)** - 用于与 Pulumi API 交互的 MCP 服务器，创建并列出 Stacks。
* **[Puppeteer vision](https://github.com/djannot/puppeteer-vision-mcp)** - 使用 Puppeteer 浏览网页并返回高质量 Markdown。使用 AI 视觉功能自动处理 cookie、验证码和其他交互元素。
* **[Pushover](https://github.com/ashiknesin/pushover-mcp)** - 使用 [Pushover.net](https://pushover.net/) 向你的设备发送即时通知。
* **[py-mcp-qdrant-rag](https://github.com/amornpan/py-mcp-qdrant-rag)**（由 amornpan 提供） - 一个提供通过 Qdrant 向量数据库集成 RAG 功能的模型上下文协议服务器实现，使 AI 代理能够在 Mac、Linux 和 Windows 平台上执行语义搜索和文档检索，并支持本地或基于云的嵌入生成。
* **[pydantic/pydantic-ai/mcp-run-python](https://github.com/pydantic/pydantic-ai/tree/main/mcp-run-python)** - 通过 MCP 工具调用在安全沙箱中运行 Python 代码，由 Deno 和 Pyodide 提供支持。
* **[Python CLI MCP](https://github.com/ofek/pycli-mcp)** - 与本地 Python 命令行应用程序交互。
* **[QGIS](https://github.com/jjsantos01/qgis_mcp)** - 通过 MCP 将 QGIS 连接到 Claude AI。此集成支持提示辅助的项目创建、图层加载、代码执行等功能。
* **[Qiniu MCP 服务器](https://github.com/qiniu/qiniu-mcp-server)** - 基于七牛云产品的模型上下文协议（MCP）服务器，支持用户在 AI 大模型客户端的上下文中通过该 MCP 服务器访问七牛云存储、智能多媒体服务等。
* **[QuantConnect](https://github.com/taylorwilsdon/quantconnect-mcp)** - QuantConnect 算法交易平台协调 MCP - 基于代理的 LLM 驱动交易策略设计、研究与实现。
* **[Quarkus](https://github.com/quarkiverse/quarkus-mcp-servers)** - 适用于 Quarkus Java 框架的 MCP 服务器。
* **[QuickChart](https://github.com/GongRzhe/Quickchart-MCP-Server)** - 一个使用 QuickChart.io 生成图表的 Model Context Protocol 服务器。
* **[Qwen\_Max](https://github.com/66julienmartin/MCP-server-Qwen_Max)** - 针对 Qwen 模型的 Model Context Protocol (MCP) 服务器实现。
* **[RabbitMQ](https://github.com/kenliao94/mcp-server-rabbitmq)** - 与 RabbitMQ 交互以发布和消费消息的 MCP 服务器。
* **[RAE](https://github.com/rae-api-com/rae-mcp)** - MPC 服务器，用于将您喜欢的模型与 rae-api.com（西班牙语词典皇家学院）连接。
* **[RAG Local](https://github.com/renl/mcp-rag-local)** - 此 MCP 服务器可根据文本的语义含义在本地存储和检索文本段。
* **[RAG Web Browser](https://github.com/apify/mcp-server-rag-web-browser)** 一个用于 Apify 开源 RAG 网络浏览器 [Actor](https://apify.com/apify/rag-web-browser) 的 MCP 服务器，可执行网络搜索、抓取 URL，并以 Markdown 格式返回内容。
* **[Raindrop.io](https://github.com/hiromitsusasaki/raindrop-io-mcp-server)** - 允许 LLM 使用 Model Context Protocol (MCP) 与 Raindrop.io 书签交互的集成。
* **[Random Number](https://github.com/zazencodes/random-number-mcp)** - 为 LLM 提供基本的随机生成能力，完全基于 Python 标准库构建。
* **[Reaper](https://github.com/dschuler36/reaper-mcp-server)** - 与您的 [Reaper](https://www.reaper.fm/)（数字音频工作站）项目交互。
* **[Redbee](https://github.com/Tamsi/redbee-mcp)** - 提供与 Redbee API 交互支持的 Redbee MCP 服务器。
* **[Redis](https://github.com/GongRzhe/REDIS-MCP-Server)** - 支持键值操作、过期管理及基于模式的键列表的 Redis 数据库操作和缓存微服务服务器。
* **[Redis](https://github.com/prajwalnayak7/mcp-server-redis)** 用于与 Redis Server、AWS Memory DB 等交互的 MCP 服务器，适用于内存和基于键值的存储用例。
* **[RedNote MCP](https://github.com/ifuryst/rednote-mcp)** - 用于访问 RedNote(XiaoHongShu, xhs) 内容的 MCP 服务器。
* **[Reed Jobs](https://github.com/kld3v/reed_jobs_mcp)** - 从 Reed.co.uk 搜索和检索职位列表。
* **[Rememberizer AI](https://github.com/skydeckai/mcp-server-rememberizer)** - 用于与 Rememberizer 数据源交互的 MCP 服务器，促进增强的知识检索。
* **[Replicate](https://github.com/deepfates/mcp-replicate)** - 通过简单的基于工具的接口，在 Replicate 上搜索、运行和管理机器学习模型。浏览模型，创建预测，跟踪其状态，并处理生成的图像。
* **[Resend](https://github.com/Klavis-AI/klavis/tree/main/mcp_servers/resend)** - 使用 Resend 服务发送电子邮件。
* **[Revit MCP](https://github.com/revit-mcp)** - 为 Autodesk Revit 实现 MCP 协议的服务。
* **[Rijksmuseum](https://github.com/r-huijts/rijksmuseum-mcp)** - 通过 Rijksmuseum API 接口搜索艺术品、检索艺术品详情、访问图像切片和浏览用户收藏。
* **[Riot Games](https://github.com/jifrozen0110/mcp-riot)** - 针对英雄联盟的 MCP 服务器 —— 通过 Riot API 获取玩家信息、排名、英雄统计数据和比赛历史。
* **[Rquest](https://github.com/xxxbrian/mcp-rquest)** - 提供类似浏览器的真实 HTTP 请求功能的 MCP 服务器，具有准确的 TLS/JA3/JA4 指纹，可绕过反机器人措施。
* **[Rust MCP Filesystem](https://github.com/rust-mcp-stack/rust-mcp-filesystem)** - 快速、异步的 MCP 服务器，利用 Rust 的强大功能高效处理各种文件系统操作。
* **[SafetySearch](https://github.com/surabhya/SafetySearch)** - 实时 FDA 食品安全数据：召回、不良事件、分析。
* **[Salesforce MCP](https://github.com/smn2gnt/MCP-Salesforce)** - 与 Salesforce 数据和元数据交互。
* **[Salesforce MCP (AiondaDotCom)](https://github.com/AiondaDotCom/mcp-salesforce)** - 使用 OAuth 身份验证、智能学习系统、全面备份功能以及对任何 Salesforce 组织（包括自定义对象和字段）的完整 CRUD 操作的通用 Salesforce 集成。
* **[Salesforce MCP Server](https://github.com/tsmztech/mcp-server-salesforce)** - 提供全面 Salesforce 集成的工具，用于查询记录、执行 Apex、管理字段/对象以及处理调试日志。
* **[SchemaCrawler](https://github.com/schemacrawler/SchemaCrawler-MCP-Server-Usage)** - 连接到任何关系数据库，并能够获取有效 SQL，并回答诸如某个列前缀的含义等问题。
* **[SchemaFlow](https://github.com/CryptoRadi/schemaflow-mcp-server)** - 通过 Model Context Protocol 为 AI-IDE 提供实时 PostgreSQL 和 Supabase 数据库模式访问。通过安全的 SSE 连接提供实时数据库上下文，包含三个强大的工具：get\_schema、analyze\_database 和 check\_schema\_alignment。[SchemaFlow](https://schemaflow.dev)
* **[Scholarly](https://github.com/adityak74/mcp-scholarly)** - 一个用于搜索学术文章的 MCP 服务器。
* **[scrapling-fetch](https://github.com/cyberchitta/scrapling-fetch-mcp)** - 访问受机器人保护网站的文本内容。使用 Scrapling 从具有反自动化措施的站点获取 HTML/Markdown。
* **[Screeny](https://github.com/rohanrav/screeny)** - 隐私优先的 macOS MCP 服务器，通过窗口截图提供 AI 代理的视觉上下文。
* **[ScriptFlow](https://github.com/yanmxa/scriptflow-mcp)** - 将复杂、重复的 AI 交互转换为持久的、可执行的脚本，支持全面的脚本管理（添加、编辑、删除、列表、搜索、执行）和多语言支持（Bash、Python、Node.js、TypeScript）。
* **[SearXNG](https://github.com/ihor-sokoliuk/mcp-searxng)** - [SearXNG](https://docs.searxng.org) 的 Model Context Protocol 服务器。
* **[SearXNG](https://github.com/erhwenkuo/mcp-searxng)** - 通过 [SearXNG](https://docs.searxng.org) 提供网页搜索并以 Markdown 格式检索 URL 的 MCP 服务器。
* **[SearXNG Public](https://github.com/pwilkin/mcp-searxng-public)** - 用于从公共 [SearXNG](https://docs.searxng.org) 实例检索数据的 Model Context Protocol 服务器，支持故障回退。
* **[SEC EDGAR](https://github.com/stefanoamorelli/sec-edgar-mcp)** - (作者：Stefano Amorelli) 一个社区 Model Context Protocol 服务器，通过美国证券交易委员会 ([SEC](https://www.sec.gov/)) 的 `电子数据收集、分析和检索` ([EDGAR](https://www.sec.gov/submit-filings/about-edgar)) 数据库访问财务申报和数据。
* **[SEO MCP](https://github.com/cnych/seo-mcp)** - 一个基于 Ahrefs 数据的免费 SEO 工具 MCP（模型控制协议）服务。包含反向链接、关键词建议等功能。作者 [claudemcp](https://www.claudemcp.com/servers/seo-mcp)。
* **[Serper](https://github.com/garymengcom/serper-mcp-server)** - 使用 [Serper](https://serper.dev) 执行谷歌搜索的 MCP 服务器。
* **[ServiceNow](https://github.com/osomai/servicenow-mcp)** - 用于与 ServiceNow 实例交互的 MCP 服务器。
* **[ShaderToy](https://github.com/wilsonchenghy/ShaderToy-MCP)** - 此 MCP 服务器允许 LLM 与 ShaderToy API 交互，使 LLM 能够从计算着色器示例中学习，并能够创建它们之前无法实现的复杂 GLSL 着色器。
* **[ShareSeer](https://github.com/shareseer/shareseer-mcp-server)** - 通过 [ShareSeer](https://shareseer.com) 使用 MCP 访问 SEC 文件、财务数据和实时内部交易数据。
* **[Shell](https://github.com/sonirico/mcp-shell)** - 为 AI 提供操作能力。可安全、可审计并按需运行 shell 命令的 MCP 服务器。
* **[Shodan MCP](https://github.com/Hexix23/shodan-mcp)** - 用于与 [Shodan](https://www.shodan.io/) 交互的 MCP 服务器。
* **[Shopify](https://github.com/GeLi2001/shopify-mcp)** - 用于与 Shopify API（包括订单、产品、客户等）交互的 MCP。
* **[Shopify Storefront](https://github.com/QuentinCody/shopify-storefront-mcp-server)** - 非官方 MCP 服务器，允许 AI 代理发现 Shopify 前台并与其交互，通过 Storefront API 获取产品、集合和其他商店数据。
* **[Simple Loki MCP](https://github.com/ghrud92/simple-loki-mcp)** - 一个使用 logcli 查询 Loki 日志的简单 MCP 服务器。
* **[Siri Shortcuts](https://github.com/dvcrn/mcp-server-siri-shortcuts)** - 用于与 macOS 上的 Siri 快捷指令交互的 MCP。将所有快捷指令暴露为 MCP 工具。
* **[Skyvern](https://github.com/Skyvern-AI/skyvern/tree/main/integrations/mcp)** - 让 Claude / Windsurf / Cursor / 您的 LLM 控制浏览器的 MCP。
* **[Slack](https://github.com/korotovsky/slack-mcp-server)** - 最强大的 Slack 工作区 MCP 服务器。该集成支持 Stdio 和 SSE 传输，支持代理设置，且不需要工作区管理员创建或批准任何权限或机器人 😏。
* **[Slack](https://github.com/zencoderai/slack-mcp-server)** - 支持 stdio 和流式 HTTP 传输的 Slack MCP 服务器。扩展自原始的 Anthropic 实现，现已 [归档](https://github.com/modelcontextprotocol/servers-archived/tree/main/src/slack)
* **[Slidespeak](https://github.com/SlideSpeak/slidespeak-mcp)** - 使用 [Slidespeak](https://slidespeak.com/) API 创建 PowerPoint 演示文稿。
* **[Smartlead](https://github.com/jean-technologies/smartlead-mcp-server-local)** - 用于连接 Smartlead 的 MCP。此外，还提供工具、功能以及与工作流自动化平台的连接。
* **[Snowflake](https://github.com/isaacwasserman/mcp-snowflake-server)** - 此 MCP 服务器使 LLM 能够与 Snowflake 数据库进行交互，实现安全可控的数据操作。
* **[SoccerDataAPI](https://github.com/yeonupark/mcp-soccer-data)** - 此 MCP 服务器基于 SoccerDataAPI 提供实时足球比赛数据。
* **[Solana Agent Kit](https://github.com/sendaifun/solana-agent-kit/tree/main/examples/agent-kit-mcp-server)** - 此 MCP 服务器通过 SendAI 提供的 Solana Agent Kit 使 LLM 能够与 Solana 区块链交互，支持 40 多个协议操作并持续扩展。
* **[Solr MCP](https://github.com/mjochum64/mcp-solr-search)** - 此 MCP 服务器提供在 Solr 服务器上执行搜索的基本功能。
* **[Solver](https://github.com/szeider/mcp-solver)** - 解决约束满足和优化问题。
* **[Solvitor](https://github.com/Adeptus-Innovatio/solvitor-mcp)** - Solvitor MCP 服务器提供了访问逆向工程工具的工具，帮助开发人员从闭源的 Solana 智能合约中提取 IDL 文件并进行反编译。
* **[Specbridge](https://github.com/TBosak/specbridge)** - 轻松将你的 OpenAPI 规范转换为 MCP 工具。
* **[Splunk](https://github.com/jkosik/mcp-server-splunk)** - 用于 Splunk 的 Golang MCP 服务器（列出保存的搜索、警报、索引、宏等）。支持 SSE 和 STDIO。
* **[Spotify](https://github.com/varunneal/spotify-mcp)** - 此 MCP 允许 LLM 播放和使用 Spotify。
* **[Spring Initializr](https://github.com/hpalma/springinitializr-mcp)** - 此 MCP 允许 LLM 使用自定义配置创建 Spring Boot 项目。你无需手动访问 start.spring.io，现在可以让你的 AI 助手生成具有特定依赖项、Java 版本和项目结构的项目。
* **[Squad AI](https://github.com/the-basilisk-ai/squad-mcp)** - 产品发现和战略平台集成。可以从任何支持 MCP 的 LLM 创建、查询和更新机会、解决方案、结果、需求和反馈。
* **[SSH](https://github.com/AiondaDotCom/mcp-ssh)** - 用于管理和控制 SSH 连接的代理。
* **[SSH](https://github.com/classfang/ssh-mcp-server)** - 可以远程执行 SSH 命令、上传文件、下载文件等的 MCP 服务器。
* **[SSH MCP Server](https://github.com/sinjab/mcp_ssh)** - 用于 SSH 自动化的生产就绪 Model Context Protocol 服务器，支持后台执行、文件传输和全面的超时保护。具有结构化输出、进度跟踪和企业级测试（87% 覆盖率）。
* **[sslmon](https://github.com/firesh/sslmon-mcp)** - 域名/HTTPS/SSL 域名注册信息和 SSL 证书监控功能。可以查询任何域名的域名注册和过期信息，以及 SSL 证书信息和有效性状态。
* **[Standard Korean Dictionary](https://github.com/privetin/stdict)** - 使用 API 搜索字典
* **[Star Wars](https://github.com/johnpapa/mcp-starwars)** - SWAPI Star Wars API 的 MCP 服务器。该项目的主要目标是展示如何使用 MCP 服务器与 API 进行交互。
* **[Starknet MCP Server](https://github.com/mcpdotdirect/starknet-mcp-server)** - 用于与 Starknet 区块链交互的全面 MCP 服务器，提供查询区块链数据、解析 StarknetID 以及执行代币转账的工具。
* **[Starwind UI](https://github.com/Boston343/starwind-ui-mcp/)** - 此 MCP 提供相关命令、文档和其他信息，以使 LLM 能充分利用 Starwind UI 的开源 Astro 组件。
* **[Stellar](https://github.com/syronlabs/stellar-mcp/)** - 此 MCP 服务器使 LLM 能够与 Stellar 区块链交互，用于创建账户、检查地址余额、分析交易、查看交易历史、铸造新资产、与智能合约交互等。
* **[Stitch AI](https://github.com/StitchAI/stitch-ai-mcp/)** - 用于 AI 代理的知识管理系统，具有创建和检索记忆空间的能力。
* **[Stockfish](https://github.com/sonirico/mcp-stockfish)** - 连接 AI 系统到 Stockfish 国际象棋引擎的 MCP 服务器
* **[Strava](https://github.com/r-huijts/strava-mcp)** - 连接到 Strava API 以访问活动数据、运动员资料、路段和路线，通过 Claude 实现健身追踪和分析。
* **[Strava API](https://github.com/tomekkorbak/strava-mcp-server)** - 用于 Strava API 的 MCP 服务器，用于检索用户活动
* **[Stripe](https://github.com/atharvagupta2003/mcp-stripe)** - 此 MCP 允许与 Stripe 集成，用于处理支付、客户和退款。
* **[Substack/Medium](https://github.com/jonathan-politzki/mcp-writer-substack)** - 将 Claude 连接到你的 Substack/Medium 写作，实现已发布内容的语义搜索和分析。
* **[System Health](https://github.com/thanhtung0201/mcp-remote-system-health)** - MCP（多通道协议）系统健康监控是一种强大的实时监控解决方案，旨在为远程 Linux 服务器提供全面的健康指标和警报。
* **[SystemSage](https://github.com/Tarusharma1/SystemSage)** - 一款强大的跨平台系统管理和监控工具，适用于 Windows、Linux 和 macOS。
* **[Talk To Figma](https://github.com/sonnylazuardi/cursor-talk-to-figma-mcp)** - 此 MCP 服务器使 LLM 能够与 Figma 交互，允许它们以编程方式读取和修改设计。
* **[Talk To Figma via Claude](https://github.com/gaganmanku96/talk-with-figma-claude)** - 提供无缝 Figma 集成的 TMCP 服务器，专为 Claude Desktop 设计，支持通过自然语言命令进行设计创建、修改和实时协作。
* **[TAM MCP Server](https://github.com/gvaibhav/TAM-MCP-Server)** - 通过 TAM/SAM 计算以及与 8 个经济数据源（Alpha Vantage、BLS、Census Bureau、FRED、IMF、Nasdaq Data Link、OECD 和 World Bank）的集成，提供市场研究和商业智能。
* **[Tasks](https://github.com/flesler/mcp-tasks)** - 一个高效的任务管理器。旨在最小化工具混淆并最大化 LLM 预算效率，同时提供强大的跨多种文件格式（Markdown、JSON、YAML）的搜索、过滤和组织功能。
* **[Tavily search](https://github.com/RamXX/mcp-tavily)** - 用于 Tavily 搜索与新闻 API 的 MCP 服务器，支持明确的站点包含/排除。
* **[TcpSocketMCP](https://github.com/SpaceyKasey/TcpSocketMCP/)** - 提供原始 TCP 套接字访问的 Model Context Protocol (MCP) 服务器，使 AI 模型能够使用原始 TCP 套接字直接与网络服务交互。支持多个并发连接、响应数据缓冲和自动响应触发。
* **[TeamRetro](https://github.com/adepanges/teamretro-mcp-server)** - 此 MCP 服务器允许 LLM 与 TeamRetro 交互，使 LLM 能够管理用户、团队、团队成员、回顾会议、健康检查、行动项、协议并获取报告。
* **[Telegram](https://github.com/chigwell/telegram-mcp)** - 一个提供 Telegram 的分页聊天阅读、消息检索和消息发送功能的 MCP 服务器，通过 Telethon 集成实现。
* **[Telegram-Client](https://github.com/chaindead/telegram-mcp)** - 一个 Telegram API 桥，管理用户数据、对话、消息、草稿、阅读状态等，实现无缝交互。
* **[Telegram-mcp-server](https://github.com/DLHellMe/telegram-mcp-server)** - 在 Claude 中直接访问 Telegram 频道和群组。支持双模式操作（API 访问（快 100 倍）或网页抓取），支持无限帖子检索和搜索功能。
* **[Template MCP Server](https://github.com/mcpdotdirect/template-mcp-server)** - 一个 CLI 工具，用于创建支持 TypeScript、双传输选项和可扩展结构的 Model Context Protocol 服务器项目。
* **[Tempo](https://github.com/scottlepp/tempo-mcp-server)** - 用于从 [Grafana Tempo](https://github.com/grafana/tempo) 查询追踪/跨度的 MCP 服务器。
* **[Teradata](https://github.com/arturborycki/mcp-teradata)** - 此 MCP 服务器使 LLM 能够与 Teradata 数据库交互。此 MCP 服务器支持用于多任务数据分析的工具和提示。
* **[Terminal-Control](https://github.com/GongRzhe/terminal-controller-mcp)** - 通过标准化接口启用安全终端命令执行、目录导航和文件系统操作的 MCP 服务器。
* **[Terraform-Cloud](https://github.com/severity1/terraform-cloud-mcp)** - 将 AI 助手与 Terraform Cloud API 集成的 MCP 服务器，允许你通过自然对话管理基础设施。
* **[Tideways](https://github.com/abuhamza/tideways-mcp-server)** - 一个 Model Context Protocol 服务器，使 AI 助手能够查询 Tideways 性能监控数据，并为 PHP 应用程序提供会话式性能洞察。
* **[TFT-Match-Analyzer](https://github.com/GeLi2001/tft-mcp-server)** - 用于 Teamfight Tactics 比赛历史和比赛详细信息获取的 MCP 服务器，为用户提供每场比赛的详细上下文。
* **[Thales CDSP CAKM MCP Server](https://github.com/sanyambassi/thales-cdsp-cakm-mcp-server)** - 用于 Thales CipherTrust 数据安全平台 (CDSP) 云密钥管理 (CAKM) 连接器的 MCP 服务器。此 MCP 服务器支持 Ms SQL 和 Oracle 数据库。
* **[Thales CDSP CRDP MCP Server](https://github.com/sanyambassi/thales-cdsp-crdp-mcp-server)** - 一个 Model Context Protocol (MCP) 服务器，允许与 CipherTrust RestFul 数据保护 (CRDP) 数据保护服务交互。
* **[Thales CipherTrust Manager MCP Server](https://github.com/sanyambassi/ciphertrust-manager-mcp-server)** - 用于集成 Thales CipherTrust Manager 的 MCP 服务器，支持安全的密钥管理和加密操作。
* **[thegraph-mcp](https://github.com/kukapay/thegraph-mcp)** - 一个 MCP 服务器，通过来自 The Graph 的索引区块链数据为 AI 代理提供支持。
* **[Things3 MCP](https://github.com/urbanogardun/things3-mcp)** - 针对 macOS 的 Things3 任务管理集成，支持全面的待办事项（TODO）、项目和标签管理。
* **[Think MCP](https://github.com/Rai220/think-mcp)** - 通过集成 think-tools 来增强任何代理的推理能力，如 [Anthropic 的文章](https://www.anthropic.com/engineering/claude-think-tool) 所述。
* **[Think Node MCP](https://github.com/abhinav-mangla/think-tool-mcp)** - 通过集成 think-tools 来增强任何代理的推理能力，如 [Anthropic 的文章](https://www.anthropic.com/engineering/claude-think-tool) 所述。（适用于 Node）
* **[Ticketmaster](https://github.com/delorenj/mcp-server-ticketmaster)** - 通过 Ticketmaster Discovery API 搜索活动、场馆和景点。
* **[TickTick](https://github.com/alexarevalo9/ticktick-mcp-server)** - 一个模型上下文协议 (MCP) 服务器，旨在与 TickTick 任务管理平台集成，实现智能上下文感知任务操作和自动化。
* **[TigerGraph](https://github.com/custom-discoveries/TigerGraph_MCP)** - 一个社区构建的 MCP 服务器，用于与 TigerGraph 图数据库进行交互。
* **[tip.md](https://github.com/tipdotmd#-mcp-server-for-ai-assistants)** - 一个 MCP 服务器，使 AI 助手能够与 tip.md 的加密货币打赏功能进行交互，允许代理或支持者直接通过 AI 聊天界面向注册开发者打赏。
* **[TMD 地震监测](https://github.com/amornpan/tmd-earthquake-server-1.0)** - 🌍 来自泰国气象局的实时地震监测。支持震级过滤、基于位置的搜索（泰语/英语）、当日事件跟踪、危险地震警报以及全面的统计数据。覆盖区域性和全球性地震活动。
* **[TMDB](https://github.com/Laksh-star/mcp-server-tmdb)** - 该 MCP 服务器与 The Movie Database (TMDB) API 集成，提供电影信息、搜索功能和推荐。
* **[Todoist](https://github.com/abhiz123/todoist-mcp-server)** - 与 Todoist 交互以管理任务。
* **[Todos](https://github.com/tomelliot/todos-mcp)** - 一个实用的待办事项管理器，可与你喜爱的聊天机器人一起使用。
* **[token-minter-mcp](https://github.com/kukapay/token-minter-mcp)** - 一个 MCP 服务器，为 AI 代理提供在多个区块链上铸造 ERC-20 代币的工具。
* **[token-revoke-mcp](https://github.com/kukapay/token-revoke-mcp)** - 一个 MCP 服务器，用于检查和撤销多个区块链上的 ERC-20 代币授权。
* **[Ton 区块链 MCP](https://github.com/devonmojito/ton-blockchain-mcp)** - 用于与 Ton 区块链交互的 MCP 服务器。
* **[TouchDesigner](https://github.com/8beeeaaat/touchdesigner-mcp)** - 一个用于 TouchDesigner 的 MCP 服务器，支持与 TouchDesigner 项目、节点和参数交互。
* **[Transcribe](https://github.com/transcribe-app/mcp-transcribe)** - 一个 MCP 服务器，为音频/视频文件和语音备忘录提供快速可靠的转录服务。它允许 LLM 与音频/视频文件中的文本内容交互。
* **[旅行规划器](https://github.com/GongRzhe/TRAVEL-PLANNER-MCP-Server)** - 旅行规划和行程管理服务器，集成 Google Maps API 以实现位置搜索、地点详情和路线计算。
* **[Trello MCP 服务器](https://github.com/lioarce01/trello-mcp-server)** - 一个与用户 Trello 看板交互的 MCP 服务器，可通过提示修改看板。
* **[Trino](https://github.com/tuannvm/mcp-trino)** - 用 Go 实现的高性能模型上下文协议 (MCP) 服务器，用于 Trino。
* **[Tripadvisor](https://github.com/pab1it0/tripadvisor-mcp)** - 一个 MCP 服务器，使 LLM 能够与 Tripadvisor API 交互，通过标准化的 MCP 接口支持位置数据、评论和照片。
* **[TrueNAS Core MCP](https://github.com/vespo92/TrueNasCoreMCP)** - 用于与 TrueNAS Core 交互的 MCP 服务器。
* **[TuriX 计算机自动化 MCP](https://github.com/TurixAI/TuriX-CUA/tree/mac_mcp)** - 用于帮助自动化控制计算机以完成预设任务的 MCP 服务器。
* **[Tyk API 管理](https://github.com/TykTechnologies/tyk-dashboard-mcp)** - 与组织管理的所有 API 进行对话，并执行其他 API 生命周期操作，管理令牌、用户、分析等。
* **[Typesense](https://github.com/suhail-ak-s/mcp-typesense-server)** - 一个模型上下文协议 (MCP) 服务器实现，为 AI 模型提供对 Typesense 搜索功能的访问。该服务器使 LLM 能够发现、搜索和分析存储在 Typesense 集合中的数据。
* **[UniFi Dream Machine](https://github.com/sabler/mcp-unifi)** - 一个 MCP 服务器，从 UniFi 站点管理器和本地 UniFi 路由器获取网络遥测数据。
* **[uniswap-poolspy-mcp](https://github.com/kukapay/uniswap-poolspy-mcp)** - 一个 MCP 服务器，在九个区块链网络上跟踪 Uniswap 上新创建的流动性池。
* **[uniswap-trader-mcp](https://github.com/kukapay/uniswap-trader-mcp)** - 一个 MCP 服务器，供 AI 代理在多个区块链上自动执行 Uniswap 去中心化交易所的代币交换。
* **[Unity Catalog](https://github.com/ognis1205/mcp-server-unitycatalog)** - 一个 MCP 服务器，使 LLM 能够与 Unity Catalog AI 交互，支持对 Unity Catalog 函数执行 CRUD 操作并将其作为 MCP 工具执行。
* **[Unity 集成（高级）](https://github.com/quazaai/UnityMCPIntegration)** - 高级 Unity3d 游戏引擎 MCP，支持直接在 Unity 内执行任何与编辑器相关的代码、获取日志、获取编辑器状态并允许项目文件访问，使其在脚本编辑或资源创建中更加有用。
* **[Unity3d 游戏引擎](https://github.com/CoderGamester/mcp-unity)** - 一个 MCP 服务器，使 LLM 能够与 Unity3d 游戏引擎交互，支持访问 Unity 编辑器引擎的各种工具（例如控制台日志、测试运行器日志、编辑器功能、层级状态等），并将其作为 MCP 工具执行或作为资源收集。
* **[通用 MCP 服务器](https://github.com/universal-mcp)** - 使用 [AgentR 通用 MCP SDK](https://github.com/universal-mcp/universal-mcp) 创建的一组 MCP 服务器。
* **[Unleash 集成（功能开关）](https://github.com/cuongtl1992/unleash-mcp)** - 一个模型上下文协议 (MCP) 服务器实现，与 Unleash 功能开关系统集成。为 LLM 应用程序与 Unleash 功能标志系统之间架起桥梁。
* **[Upbit MCP 服务器](https://github.com/solangii/upbit-mcp-server)** – 一个 MCP 服务器，提供对 Upbit 交易所的加密货币实时价格、市场摘要和资产列表的访问。
* **[use\_aws\_mcp](https://github.com/runjivu/use_aws_mcp)** - 从 amazon-q-cli 中提取的 use\_aws 工具作为一个独立的 MCP，用于通用的 AWS API 使用。
* **[用户反馈](https://github.com/mrexodia/user-feedback-mcp)** - 简单的 MCP 服务器，用于在 Cline 和 Cursor 等工具中启用“人在回路”工作流。
* **[USPTO](https://github.com/riemannzeta/patent_mcp_server)** - 通过其开放数据协议 (ODP) API 访问美国专利商标局数据的 MCP 服务器。
* **[Vectara](https://github.com/vectara/vectara-mcp)** - 查询 Vectara 可信的 RAG-as-a-Service 平台。
* **[Vega-Lite](https://github.com/isaacwasserman/mcp-vegalite-server)** - 使用 VegaLite 格式和渲染器从获取的数据生成可视化图表。
* **[Vertica](https://github.com/nolleh/mcp-vertica)** - 使用 Python 实现的 Vertica 数据库集成，具有可配置的访问控制和模式检查。
* **[情绪检查](https://github.com/PV-Bhat/vibe-check-mcp-server)** - 一个 MCP 服务器，利用外部监督层对代理进行“情绪检查”，并随着时间的推移自我提升准确性和用户对齐度。防止范围蔓延、代码膨胀、不对齐、误解、思维狭隘和过度复杂化。
* **[视频编辑器](https://github.com/burningion/video-editing-mcp)** - 一个模型上下文协议服务器，使用 [Video Jungle](https://www.video-jungle.com/) 添加、编辑和搜索视频。
* **[视频截图](https://github.com/13rac1/videocapture-mcp)** - 📷 从兼容 OpenCV 的网络摄像头或其他视频源捕获视频截图。
* **[虚拟位置（Google 街景等）](https://github.com/mfukushim/map-traveler-mcp)** - 集成 Google 地图、Google 街景、PixAI、Stability.ai、ComfyUI API 和 Bluesky，为 LLM 提供虚拟位置模拟（使用 Effect.ts 编写）。
* **[VMware Fusion](https://github.com/yeahdongcn/vmware-fusion-mcp-server)** - 通过 Fusion REST API 管理 VMware Fusion 虚拟机。
* **[语音 MCP](https://github.com/mbailey/voice-mcp)** - 使用任何兼容 OpenAI 的 STT/TTS 服务与 Claude 进行语音对话 ([voice-mcp.com](https://voice-mcp.com))
* **[语音状态报告](https://github.com/tomekkorbak/voice-status-report-mcp-server)** - 一个 MCP 服务器，使用 OpenAI 的文本转语音 API 提供语音状态更新，可与 Cursor 或 Claude Code 一起使用。
* **[VolcEngine TOS](https://github.com/dinghuazhou/sample-mcp-server-tos)** - 一个用于 VolcEngine TOS 的示例 MCP 服务器，可灵活地从 TOS 获取对象。
* **[Voyp](https://github.com/paulotaylor/voyp-mcp)** - 用于使用人工智能进行通话的 VOYP MCP 服务器。
* **[vulnicheck](https://github.com/andrasfe/vulnicheck)** - 一个实时的 Python 包漏洞扫描器，可将依赖项与 OSV 和 NVD 数据库进行比对，提供包含 CVE 详细信息、锁定文件支持和可操作升级建议的全面安全分析。
* **[Wanaku MCP Router](https://github.com/wanaku-ai/wanaku/)** - Wanaku MCP Router 是一个基于 SSE 的 MCP 服务器，提供可扩展的路由引擎，使您的企业系统能够与 AI 代理集成。
* **[weather-mcp-server](https://github.com/devilcoder01/weather-mcp-server)** - 使用 weatherapi 获取任意地点的实时天气数据。
* **[Web Search MCP](https://github.com/mrkrsl/web-search-mcp)** - 一个提供完整网页搜索、摘要和页面提取功能的服务器，适用于本地 LLM。
* **[Webex](https://github.com/Kashyap-AI-ML-Solutions/webex-messaging-mcp-server)** - 一个模型上下文协议 (MCP) 服务器，为 AI 助手提供对 Cisco Webex 消息功能的全面访问。
* **[Webflow](https://github.com/kapilduraphe/webflow-mcp-server)** - 与 Webflow API 交互。
* **[webhook-mcp](https://github.com/noobnooc/webhook-mcp)**（由 Nooc 开发）- 一个模型上下文协议 (MCP) 服务器，当被调用时发送 webhook 通知。
* **[whale-tracker-mcp](https://github.com/kukapay/whale-tracker-mcp)** - 用于跟踪加密货币巨鲸交易的 MCP 服务器。
* **[WhatsApp MCP Server](https://github.com/lharries/whatsapp-mcp)** - 用于个人 WhatsApp 的 MCP 服务器，支持处理个人、群组、搜索和发送消息。
* **[Whois MCP](https://github.com/bharathvaj-ganesan/whois-mcp)** - 一个执行 Whois 查询的 MCP 服务器，支持对域名、IP、ASN 和顶级域 (TLD) 进行查询。
* **[Wikidata MCP](https://github.com/zzaebok/mcp-wikidata)** - 一个与 Wikidata 交互的 Wikidata MCP 服务器，支持搜索标识符、提取元数据和执行 SPARQL 查询。
* **[Wikipedia MCP](https://github.com/Rudra-ravi/wikipedia-mcp)** - 通过 MCP 访问和搜索维基百科文章，用于 AI 驱动的信息检索。
* **[WildFly MCP](https://github.com/wildfly-extras/wildfly-mcp)** - 一个 WildFly MCP 服务器，允许 LLM 与正在运行的 WildFly 服务器进行交互（获取指标、日志、调用操作等）。
* **[Windows CLI](https://github.com/SimonB97/win-cli-mcp-server)** - 用于在 Windows 系统上进行安全命令行交互的 MCP 服务器，支持对 PowerShell、CMD 和 Git Bash shell 的受控访问。
* **[Windsor](https://github.com/windsor-ai/windsor_mcp)** - Windsor MCP（模型上下文协议）使您的 LLM 能够查询、探索和分析集成到 Windsor.ai 的全栈业务数据，无需编写 SQL 或自定义脚本。
* **[Wordle MCP](https://github.com/cr2007/mcp-wordle-python)** - 用于获取特定日期 Wordle 解决方案的 MCP 服务器。
* **[WordPress MCP](https://github.com/Automattic/wordpress-mcp)** - 将您的 WordPress 网站变成一个简单的 MCP 服务器，向 LLM 和 AI 代理公开功能。
* **[Workflowy](https://github.com/danield137/mcp-workflowy)** - 一个与 [workflowy](https://workflowy.com/) 交互的服务器。
* **[World Bank data API](https://github.com/anshumax/world_bank_mcp_server)** - 一个从世界银行数据 API 获取数据指标的服务器。
* **[Wren Engine](https://github.com/Canner/wren-engine)** - 面向模型上下文协议 (MCP) 客户端和 AI 代理的语义引擎。
* **[X (Twitter)](https://github.com/EnesCinr/twitter-mcp)**（由 EnesCinr 开发）- 与 Twitter API 交互，发布推文并通过查询搜索推文。
* **[X (Twitter)](https://github.com/vidhupv/x-mcp)**（由 vidhupv 开发）- 直接通过 Claude 聊天创建、管理和发布 X/Twitter 帖子。
* **[Xcode](https://github.com/r-huijts/xcode-mcp-server)** - 一个将 AI 带入您的 Xcode 项目的 MCP 服务器，支持智能代码辅助、文件操作、项目管理和自动化开发任务。
* **[Xcode-mcp-server](https://github.com/drewster99/xcode-mcp-server)**（由 drewster99 开发）- 最佳 Xcode 集成 - ClaudeCode 和 Cursor 可以 *使用* Xcode 构建您的项目，并看到与您相同的错误。快速简便的设置。
* **[xcodebuild](https://github.com/ShenghaiWang/xcodebuild)** - 🍎 构建 iOS Xcode 工作区/项目，并将错误反馈给 LLM。
* **[Xero-mcp-server](https://github.com/john-zhang-dev/xero-mcp)** - 使客户端能够与 Xero 系统交互，实现会计、开票和业务操作的流程化。
* **[XiYan](https://github.com/XGenerationLab/xiyan_mcp_server)** - 🗄️ 一个支持通过自然语言查询从数据库中获取数据的 MCP 服务器，由 XiyanSQL（文本到 SQL 的 LLM）驱动。
* **[XMind](https://github.com/apeyroux/mcp-xmind)** - 读取并搜索包含 XMind 文件的 XMind 目录。
* **[Yahoo Finance](https://github.com/AgentX-ai/yahoo-finance-server)** - 📈 让您的 AI 与 Yahoo Finance 交互，以获取全面的股票市场数据、新闻、财务信息等。支持代理。
* **[yfinance](https://github.com/Adity-star/mcp-yfinance-server)** - 💹 MCP YFinance 股票服务器以标准格式提供实时和历史股票数据，为仪表板、AI 代理和研究工具提供无缝的金融洞察力。
* **[YNAB](https://github.com/ChuckBryan/ynabmcpserver)** - 一个用于与 YNAB（You Need A Budget）集成的模型上下文协议 (MCP) 服务器，允许 AI 助手安全地访问和分析您的财务数据。
* **[YouTrack](https://github.com/tonyzorin/youtrack-mcp)** - 一个针对 JetBrains YouTrack 的模型上下文协议 (MCP) 服务器实现，允许 AI 助手与 YouTrack 问题跟踪系统交互。
* **[YouTube](https://github.com/Klavis-AI/klavis/tree/main/mcp_servers/youtube)** - 提取 YouTube 视频信息（支持代理）。
* **[YouTube](https://github.com/ZubeidHendricks/youtube-mcp-server)** - 提供全面的 YouTube API 集成，支持视频管理、Shorts 创建和分析。
* **[YouTube DLP](https://github.com/AgentX-ai/youtube-dlp-server)** - 检索视频信息、字幕和热门评论，支持代理。
* **[Youtube Uploader MCP](https://github.com/anwerj/youtube-uploader-mcp)** - AI 驱动的 YouTube 上传器——无需 CLI，无需 YouTube Studio。
* **[YouTube Video Summarizer](https://github.com/nabid-pf/youtube-video-summarizer-mcp)** - 概括冗长的 YouTube 视频。
* **[yutu](https://github.com/eat-pray-ai/yutu)** - 一个功能齐全的 YouTube MCP 服务器和 CLI，用于自动化 YouTube 操作。
* **[ZapCap](https://github.com/bogdan01m/zapcap-mcp-server)** - 一个针对 ZapCap API 的 MCP 服务器，通过自然语言生成视频字幕和 B-roll。
* **[Zoom](https://github.com/Prathamesh0901/zoom-mcp-server/tree/main)** - 创建、更新、读取和删除您的 Zoom 会议。

## 📚 框架

以下是一些高级框架，可简化 MCP 服务器或客户端的构建。

### 服务器框架

* **[ModelFetch](https://github.com/phuctm97/modelfetch/)**（TypeScript）- 与运行时无关的 SDK，可在任何支持 TypeScript/JavaScript 的环境中创建和部署 MCP 服务器
* **[EasyMCP](https://github.com/zcaceres/easy-mcp/)**（TypeScript）
* **[FastAPI to MCP 自动生成器](https://github.com/tadata-org/fastapi_mcp)** – 一个零配置工具，可自动将 FastAPI 端点作为 MCP 工具暴露，由 **[Tadata](https://tadata.com/)**
* **[FastMCP](https://github.com/punkpeye/fastmcp)**（TypeScript）
* **[Foobara MCP 连接器](https://github.com/foobara/mcp-connector)** - 轻松将使用 Ruby 编写的 Foobara 命令通过 MCP 作为工具暴露
* **[Foxy Contexts](https://github.com/strowk/foxy-contexts)** – 一个用 Golang 构建 MCP 服务器的库，由 **[strowk](https://github.com/strowk)**
* **[Higress MCP 服务器托管](https://github.com/alibaba/higress/tree/main/plugins/wasm-go/mcp-servers)** - 通过使用 wasm 插件扩展 API 网关（基于 Envoy）来托管 MCP 服务器的解决方案。
* **[MCP 声明式 Java SDK](https://github.com/codeboyzhou/mcp-declarative-java-sdk)** 基于注解的 MCP 服务器开发，使用 Java，无需 Spring Framework，尽可能减少依赖。
* **[MCP-Framework](https://mcp-framework.com)** 使用 TypeScript 快速优雅地构建 MCP 服务器。提供一个 CLI 工具，使用 `mcp create app` 创建您的项目。在 **[Alex Andru](https://github.com/QuantGeekDev)** 的帮助下，您可以在不到 5 分钟的时间内启动您的第一个服务器。
* **[MCP Plexus](https://github.com/Super-I-Tech/mcp_plexus)**：一个安全的、**多租户**和多用户 MCP Python 服务器框架，设计用于通过 OAuth 2.1 轻松集成外部服务，提供可扩展且稳健的复杂 AI 应用管理解决方案。
* **[mcp\_sse (Elixir)](https://github.com/kEND/mcp_sse)** 一个在 Elixir 中实现的 SSE 快速创建 MCP 服务器的框架。
* **[mxcp](https://github.com/raw-labs/mxcp)**（Python）- 开源框架，仅使用 YAML、SQL 和 Python 构建企业级 MCP 服务器，内置认证、监控、ETL 和策略执行功能。
* **[Next.js MCP 服务器模板](https://github.com/vercel-labs/mcp-for-next.js)**（TypeScript）- 一个使用 MCP 适配器的 Next.js 启动项目，允许 MCP 客户端连接并访问资源。
* **[PayMCP](https://github.com/blustAI/paymcp)**（Python & TypeScript）- 为 MCP 服务器提供轻量级支付层：只需两行装饰器即可将工具变成付费端点。[PyPI](https://pypi.org/project/paymcp/) · [npm](https://www.npmjs.com/package/paymcp) · [TS 仓库](https://github.com/blustAI/paymcp-ts)
* **[Perl SDK](https://github.com/mojolicious/mojo-mcp)** - 用于使用 Perl 编程语言构建 MCP 服务器和客户端的 SDK。
* **[Quarkus MCP 服务器 SDK](https://github.com/quarkiverse/quarkus-mcp-server)**（Java）

- **[R mcptools](https://github.com/posit-dev/mcptools)** - 用于创建基于 R 的 MCP 服务器，并将第三方 MCP 服务器的功能作为 R 函数检索的 R SDK。
* **[SAP ABAP MCP 服务器 SDK](https://github.com/abap-ai/mcp)** - 构建基于 SAP ABAP 的 MCP 服务器。基于 ABAP 7.52 并兼容 7.02；可在本地部署的 R/3 和 S/4HANA 上运行，目前不支持云环境。
* **[Spring AI MCP 服务器](https://docs.spring.io/spring-ai/reference/api/mcp/mcp-server-boot-starter-docs.html)** - 提供自动配置功能，用于在 Spring Boot 应用程序中设置 MCP 服务器。
* **[模板 MCP 服务器](https://github.com/mcpdotdirect/template-mcp-server)** - 一个 CLI 工具，用于创建支持 TypeScript、双传输选项和可扩展结构的 Model Context Protocol 服务器项目。
* **[AgentR 通用 MCP SDK](https://github.com/universal-mcp/universal-mcp)** - 由 **[Agentr](https://agentr.dev/home)** 提供的 Python SDK，用于构建具有内置凭证管理功能的 MCP 服务器。
* **[Vercel MCP 适配器](https://github.com/vercel/mcp-adapter)** (TypeScript) - 一个简单的包，用于在大多数主流 JS 元框架（包括 Next、Nuxt、Svelte 等）上启动 MCP 服务器。
* **[Hermes MCP](https://github.com/cloudwalk/hermes-mcp)** (Elixir) - 一个高性能、高级别的 Elixir 实现的 Model Context Protocol (MCP)，类似于 MCP 的“Live View”。
* **[PHP MCP 服务器](https://github.com/php-mcp/server)** (PHP) - 用于 Model Context Protocol (MCP) 服务器的核心 PHP 实现。

### 客户端

* **[codemirror-mcp](https://github.com/marimo-team/codemirror-mcp)** - 一个实现了 Model Context Protocol (MCP) 资源引用和提示命令的 CodeMirror 扩展。
* **[llm-analysis-assistant](https://github.com/xuzexin-hz/llm-analysis-assistant)** <img height="12" width="12" src="https://raw.githubusercontent.com/xuzexin-hz/llm-analysis-assistant/refs/heads/main/src/llm_analysis_assistant/pages/html/imgs/favicon.ico" alt="Langfuse Logo" /> - 一个非常简洁的 MCP 客户端，支持调用和监控 stdio/sse/streamableHttp，并可通过 /logs 页面查看请求响应。还支持对 ollama/openai 接口进行监控和模拟。
* **[MCP-Agent](https://github.com/lastmile-ai/mcp-agent)** - 由 **[LastMile AI](https://www.lastmileai.dev)** 提供的一个简单且可组合的框架，用于使用 Model Context Protocol 构建智能代理。
* **[Spring AI MCP 客户端](https://docs.spring.io/spring-ai/reference/api/mcp/mcp-client-boot-starter-docs.html)** - 为 Spring Boot 应用程序提供 MCP 客户端功能的自动配置。
* **[MCP CLI 客户端](https://github.com/vincent-pli/mcp-cli-host)** - 一个 CLI 主机应用程序，使大型语言模型 (LLM) 能够通过 Model Context Protocol (MCP) 与外部工具交互。
* **[OpenMCP 客户端](https://github.com/LSTM-Kirigaya/openmcp-client/)** - 一个用于 MCP 服务器调试的集成 VSCode/trae/cursor 插件。[文档](https://kirigaya.cn/openmcp/) & [OpenMCP SDK](https://kirigaya.cn/openmcp/sdk-tutorial/)。
* **[PHP MCP 客户端](https://github.com/php-mcp/client)** - 用于 Model Context Protocol (MCP) 客户端的核心 PHP 实现。

## 📚 资源

有关 MCP 的其他资源。

* **[A2A-MCP Java 桥接器](https://github.com/vishalmysore/a2ajava)** - A2AJava 将强大的 A2A-MCP 集成直接引入您的 Java 应用程序。它允许开发者注解标准 Java 方法，并立即将其暴露为 MCP 服务器和 A2A 可发现的操作，无需样板代码或服务注册开销。
* **[AiMCP](https://www.aimcp.info)** - 由 **[Hekmon](https://github.com/hekmon8)** 提供的一组 MCP 客户端和服务器，用于查找合适的 MCP 工具。
* **[badkk 的 Awesome Crypto MCP 服务器列表](https://github.com/badkk/awesome-crypto-mcp-servers)** - 由 **[Luke Fan](https://github.com/badkk)** 精选的 MCP 服务器列表。
* **[appcypher 的 Awesome MCP 服务器列表](https://github.com/appcypher/awesome-mcp-servers)** - 由 **[Stephen Akinyemi](https://github.com/appcypher)** 精选的 MCP 服务器列表。
* **[punkpeye 的 Awesome MCP 服务器列表](https://github.com/punkpeye/awesome-mcp-servers)** (**[网站](https://glama.ai/mcp/servers)**) - 由 **[Frank Fiegel](https://github.com/punkpeye)** 精选的 MCP 服务器列表。
* **[wong2 的 Awesome MCP 服务器列表](https://github.com/wong2/awesome-mcp-servers)** (**[网站](https://mcpservers.org)**) - 由 **[wong2](https://github.com/wong2)** 精选的 MCP 服务器列表。
* **[JAW9C 的 Awesome Remote MCP 服务器列表](https://github.com/jaw9c/awesome-remote-mcp-servers)** - 由 **[JAW9C](https://github.com/jaw9c)** 精选的 **远程** MCP 服务器列表，包括其认证支持。
* **[Discord 服务器](https://glama.ai/mcp/discord)** - 由 **[Frank Fiegel](https://github.com/punkpeye)** 主持的 MCP 社区 Discord 服务器。
* **[Discord 服务器 (ModelContextProtocol)](https://discord.gg/jHEGxQu2a5)** - 由 **[Alex Andru](https://github.com/QuantGeekDev)** 主持的活跃 Discord 社区，用于开发者交流、分享见解并协作开展项目。
* <img height="12" width="12" src="https://raw.githubusercontent.com/klavis-ai/klavis/main/static/klavis-ai.png" alt="Klavis Logo" /> **[Klavis AI](https://www.klavis.ai)** - 开源 MCP 基础设施。提供托管的 MCP 服务器以及在 Slack 和 Discord 上的 MCP 客户端。
* **[MCP Badges](https://github.com/mcpx-dev/mcp-badges)** - 由 **[Ironben](https://github.com/nanbingxyz)** 提供的可快速突出显示您的 MCP 项目的清晰、吸引眼球的徽章。
* **[MCPRepository.com](https://mcprepository.com/)** - 一个用于索引和组织所有 MCP 服务器以便于发现的仓库。
* **[mcp-cli](https://github.com/wong2/mcp-cli)** - 由 **[wong2](https://github.com/wong2)** 提供的 Model Context Protocol 的 CLI 检查工具。
* **[mcp-dockmaster](https://mcp-dockmaster.com)** - 一个开源 UI，用于在 Windows、Linux 和 macOS 上安装和管理 MCP 服务器。
* **[mcp-get](https://mcp-get.com)** - 由 **[Michael Latman](https://github.com/michaellatman)** 提供的用于安装和管理 MCP 服务器的命令行工具。
* **[mcp-guardian](https://github.com/eqtylab/mcp-guardian)** - 由 **[EQTY Lab](https://eqtylab.io)** 提供的用于代理/管理 MCP 服务器控制的 GUI 应用程序和工具。
* **[MCP Linker](https://github.com/milisp/mcp-linker)** - 一个跨平台的 Tauri GUI 工具，用于一键设置和管理 MCP 服务器，支持 Claude Desktop、Cursor、Windsurf、VS Code、Cline 和 Neovim。
* **[mcp-manager](https://github.com/zueai/mcp-manager)** - 一个用于为 Claude Desktop 安装和管理 MCP 服务器的简单 Web UI，由 **[Zue](https://github.com/zueai)** 提供。
* **[MCP Marketplace Web 插件](https://github.com/AI-Agent-Hub/mcp-marketplace)** - 一个小型 Web UX 插件，用于与 AI 应用程序集成，支持多种 MCP 服务器 API 端点（例如 pulsemcp.com/deepnlp.org 等）。允许用户按不同类别浏览、分页和选择各种 MCP 服务器。[Pypi](https://pypi.org/project/mcp-marketplace) | [维护者](https://github.com/AI-Agent-Hub) | [网站](http://www.deepnlp.org/store/ai-agent/mcp-server)
* **[mcp.natoma.ai](https://mcp.natoma.ai)** - 一个托管的 MCP 平台，用于发现、安装、管理和部署 MCP 服务器，由 **[Natoma Labs](https://www.natoma.ai)** 提供。
* **[mcp.run](https://mcp.run)** - 一个托管的注册中心和控制平面，用于安装和运行安全且便携的 MCP 服务器。
* **[MCPHub](https://www.mcphub.com)** - 一个列出高质量 MCP 服务器和真实用户评论的网站，还提供支持 MCP 服务器的流行 LLM 模型在线聊天机器人。
* **[MCP Router](https://mcp-router.net)** – 一个免费的 Windows 和 macOS 应用程序，简化了 MCP 管理，同时提供了无缝的应用认证和强大的日志可视化功能，由 **[MCP Router](https://github.com/mcp-router/mcp-router)** 提供。
* **[MCP Servers Hub](https://github.com/apappascs/mcp-servers-hub)** (**[网站](https://mcp-servers-hub-website.pages.dev/)**) - 由 **[apappascs](https://github.com/apappascs)** 精选的 MCP 服务器列表。
* **[MCPServers.com](https://mcpservers.com)** - 一个不断增长的高质量 MCP 服务器目录，为多种 MCP 客户端提供清晰的安装指南。由 **[Highlight MCP 客户端](https://highlightai.com/)** 团队构建。
* **[MCP 服务器评分和用户评论](http://www.deepnlp.org/store/ai-agent/mcp-server)** - 一个用于对 MCP 服务器进行评分、撰写真实用户评论，并提供 [代理与 MCP 搜索引擎](http://www.deepnlp.org/search/agent) 的网站。
* **[MCP Sky](https://bsky.app/profile/brianell.in/feed/mcp)** - 由 **[@brianell.in](https://bsky.app/profile/brianell.in)** 提供的关于 MCP 相关新闻和讨论的 Bluesky 动态。
* **[MCP X 社区](https://x.com/i/communities/1861891349609603310)** – 由 **[Xiaoyi](https://x.com/chxy)** 主持的 MCP X 社区。
* **[MCPHub](https://github.com/Jeamee/MCPHub-Desktop)** – 一个开源的 macOS 和 Windows GUI 桌面应用程序，用于发现、安装和管理 MCP 服务器，由 **[Jeamee](https://github.com/jeamee)** 提供。
* **[mcpm](https://github.com/pathintegral-institute/mcpm.sh)** ([网站](https://mcpm.sh)) - 一个类似于 Homebrew 的服务，用于跨客户端管理 Model Context Protocol (MCP) 服务器，由 **[Pathintegral](https://github.com/pathintegral-institute)** 提供。
* **[MCPVerse](https://mcpverse.dev)** - 一个用于创建和托管认证的 MCP 服务器并安全连接到它们的门户。
* **[MCP 服务器搜索](https://github.com/atonomus/mcp-servers-search)** - 一个提供工具用于查询和发现此列表中可用 MCP 服务器的 MCP 服务器。
* **[MCPWatch](https://github.com/kapilduraphe/mcp-watch)** - 一个全面的 Model Context Protocol (MCP) 服务器安全扫描器，可检测您的 MCP 服务器实现中的漏洞和安全问题。
* <img height="12" width="12" src="https://mkinf.io/favicon-lilac.png" alt="mkinf Logo" /> **[mkinf](https://mkinf.io)** - 一个开源的托管 MCP 服务器注册中心，旨在加速 AI 智能代理的工作流程。
* **[开源的 MCP 服务器目录](https://github.com/chatmcp/mcp-directory)** - 由 **[mcpso](https://mcp.so)** 精选整理的 MCP 服务器列表
* <img height="12" width="12" src="https://opentools.com/favicon.ico" alt="OpenTools Logo" /> **[OpenTools](https://opentools.com)** - 一个开放注册中心，用于查找、安装和使用 MCP 服务器，由 **[opentoolsteam](https://github.com/opentoolsteam)**
* **[PulseMCP](https://www.pulsemcp.com)** ([API](https://www.pulsemcp.com/api)) - 社区中心和每周通讯，用于发现 MCP 服务器、客户端、文章和新闻，由 **[Tadas Antanavicius](https://github.com/tadasant)**、**[Mike Coughlin](https://github.com/macoughl)** 和 **[Ravina Patel](https://github.com/ravinahp)** 维护
* **[r/mcp](https://www.reddit.com/r/mcp)** – 一个专注于 MCP 的 Reddit 社区，由 **[Frank Fiegel](https://github.com/punkpeye)**
* **[r/modelcontextprotocol](https://www.reddit.com/r/modelcontextprotocol)** – Model Context Protocol 的 Reddit 社区页面，用于讨论想法、解答问题、结识志同道合的人并展示你的项目，由 **[Alex Andru](https://github.com/QuantGeekDev)**
* **[MCP.ing](https://mcp.ing/)** - 一份用于发现社区中的 MCP 服务器并提供便捷搜索功能的 MCP 服务列表，由 **[iiiusky](https://github.com/iiiusky)**
* **[MCP Hunt](https://mcp-hunt.com)** - 实时平台，用于发现具有趋势追踪、点赞和社区讨论功能的热门 MCP 服务器，类似 Product Hunt 与 Reddit 的结合体
* **[Smithery](https://smithery.ai/)** - 一份 MCP 服务器注册表，用于为你的 LLM 智能体寻找合适的工具，由 **[Henry Mao](https://github.com/calclavia)**
* **[Toolbase](https://gettoolbase.ai)** - 桌面应用程序，只需几次点击即可管理工具和 MCP 服务器，无需编码，由 **[gching](https://github.com/gching)**
* **[ToolHive](https://github.com/StacklokLabs/toolhive)** - 一个轻量级工具，旨在简化 MCP 服务器的部署和管理，通过容器化确保易用性、一致性与安全性，由 **[StacklokLabs](https://github.com/StacklokLabs)**
* **[NetMind](https://www.netmind.ai/AIServices)** - 通过简单的 API 或 MCP 服务器访问强大的 AI 服务，提升你的生产力。

## 🚀 入门指南

### 使用本仓库中的 MCP 服务器

本仓库中基于 TypeScript 的服务器可以直接使用 `npx` 运行。

例如，以下命令将启动 [Memory](https://github.com/modelcontextprotocol/servers/tree/main/src/memory) 服务器：
```sh
npx -y @modelcontextprotocol/server-memory
```
本仓库中的 Python 服务器可以直接与 [`uvx`](https://docs.astral.sh/uv/concepts/tools/) 或 [`pip`](https://pypi.org/project/pip/) 配合使用。推荐使用 `uvx` 以获得更简便的使用和设置体验。

例如，以下命令将启动 [Git](https://github.com/modelcontextprotocol/servers/tree/main/src/git) 服务器：
```sh
# 使用 uvx
uvx mcp-server-git

# 使用 pip
pip install mcp-server-git
python -m mcp_server_git
```
请按照[这些说明](https://docs.astral.sh/uv/getting-started/installation/)安装 `uv` / `uvx`，并按照[这些说明](https://pip.pypa.io/en/stable/installation/)安装 `pip`。

### 使用 MCP 客户端

然而，单独运行一个服务器并没有太大用处，而应该将其配置到 MCP 客户端中。例如，以下是 Claude Desktop 的配置，用于使用上面的服务器：
```json
{
  "mcpServers": {
    "memory": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"]
    }
  }
}
```
Claude Desktop 作为 MCP 客户端使用的更多示例可能如下所示：
```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/allowed/files"]
    },
    "git": {
      "command": "uvx",
      "args": ["mcp-server-git", "--repository", "path/to/git/repo"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "<YOUR_TOKEN>"
      }
    },
    "postgres": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-postgres", "postgresql://localhost/mydb"]
    }
  }
}
```
## 🛠️ 创建你自己的服务器

有兴趣创建你自己的 MCP 服务器吗？请访问官方网站 [modelcontextprotocol.io](https://modelcontextprotocol.io/introduction) 获取完整的指南、最佳实践以及关于实现 MCP 服务器的技术细节。

## 🤝 贡献

有关向本仓库贡献代码的信息，请参阅 [CONTRIBUTING.md](https://github.com/modelcontextprotocol/servers/tree/main/CONTRIBUTING.md)。

## 🔒 安全

如需报告安全漏洞，请参阅 [SECURITY.md](https://github.com/modelcontextprotocol/servers/tree/main/SECURITY.md)。

## 📜 许可证

本项目采用 MIT 许可证 - 详情请参阅 [LICENSE](https://github.com/modelcontextprotocol/servers/tree/main/LICENSE) 文件。

## 💬 社区

* [GitHub Discussions](https://github.com/orgs/modelcontextprotocol/discussions)

## ⭐ 支持

如果你觉得 MCP 服务器对你有帮助，请考虑为仓库加星标，并贡献新的服务器或改进！

***

由 Anthropic 管理，但与社区共同构建。模型上下文协议是开源的，我们鼓励每个人贡献自己的服务器和改进！