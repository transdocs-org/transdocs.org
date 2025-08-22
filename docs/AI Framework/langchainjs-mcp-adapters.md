# LangChain.js MCP 适配器

[![npm 版本](https://img.shields.io/npm/v/@langchain/mcp-adapters.svg)](https://www.npmjs.com/package/@langchain/mcp-adapters)
[![许可证: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

本库提供了一个轻量级封装，使 [Anthropic 模型上下文协议 (MCP)](https://modelcontextprotocol.io/introduction) 工具能够与 [LangChain.js](https://github.com/langchain-ai/langchainjs) 和 [LangGraph.js](https://github.com/langchain-ai/langgraphjs) 兼容。

## 功能特性

* 🔌 **传输选项**

  * 通过 stdio（本地）或可流式 HTTP（远程）连接到 MCP 服务器
    * 可流式 HTTP 会自动回退到 SSE，以兼容旧版 MCP 服务器实现
  * SSE 连接支持自定义请求头用于身份验证
  * 两种传输方式均支持可配置的重连策略

* 🔄 **多服务器管理**

  * 可同时连接到多个 MCP 服务器
  * 工具可按服务器自动组织，或以扁平化集合形式访问

* 🧩 **代理集成**

  * 兼容 LangChain.js 和 LangGraph.js
  * 针对 OpenAI、Anthropic 和 Google 模型进行了优化
  * 支持富内容响应，包括文本、图像和嵌入资源

* 🛠️ **开发功能**
  * 使用 `debug` 包进行调试日志记录
  * 灵活的配置选项
  * 强健的错误处理机制

## 安装方法
```bash
npm install @langchain/mcp-adapters
```
# 示例：通过 `MultiServerMCPClient` 连接到一个或多个服务器

该库允许你连接到一个或多个 MCP 服务器，并从中加载工具，而无需自行管理 MCP 客户端实例。
```ts
import { MultiServerMCPClient } from "@langchain/mcp-adapters";
import { ChatOpenAI } from "@langchain/openai";
import { createReactAgent } from "@langchain/langgraph/prebuilt";

// 创建客户端并连接到服务器
const client = new MultiServerMCPClient({
  // 全局工具配置选项
  // 如果工具加载失败是否抛出错误（可选，默认：true）
  throwOnLoadError: true,
  // 是否在工具名称前添加服务器名称（可选，默认：false）
  prefixToolNameWithServerName: false,
  // 工具名称的可选附加前缀（可选，默认：""）
  additionalToolNamePrefix: "",

  // 在工具输出中使用标准化内容块格式
  useStandardContentBlocks: true,

  // 服务器配置
  mcpServers: {
    // 添加一个名为"math"的STDIO连接服务器
    math: {
      transport: "stdio",
      command: "npx",
      args: ["-y", "@modelcontextprotocol/server-math"],
      // stdio传输的重启配置
      restart: {
        enabled: true,
        maxAttempts: 3,
        delayMs: 1000,
      },
    },

    // 这是一个文件系统服务器
    filesystem: {
      transport: "stdio",
      command: "npx",
      args: ["-y", "@modelcontextprotocol/server-filesystem"],
    },

    // 可流式传输的HTTP示例，包含认证头且禁用自动SSE回退（默认启用）
    weather: {
      url: "https://example.com/weather/mcp",
      headers: {
        Authorization: "Bearer token123",
      },
      automaticSSEFallback: false
    },

    // OAuth 2.0认证（推荐用于安全服务器）
    "oauth-protected-server": {
      url: "https://protected.example.com/mcp",
      authProvider: new MyOAuthProvider({
        // 你的OAuth提供程序实现
        redirectUrl: "https://myapp.com/oauth/callback",
        clientMetadata: {
          redirect_uris: ["https://myapp.com/oauth/callback"],
          client_name: "我的MCP客户端",
          scope: "mcp:read mcp:write"
        }
      }),
      // 仍可包含非认证用途的自定义头
      headers: {
        "User-Agent": "My-MCP-Client/1.0"
      }
    },

    // 如何强制使用SSE，适用于已知仅支持SSE的旧服务器（可流式HTTP在不确定时会自动回退）
    github: {
      transport: "sse", // 也可以使用"type"字段代替"transport"
      url: "https://example.com/mcp",
      reconnect: {
        enabled: true,
        maxAttempts: 5,
        delayMs: 2000,
      },
    },
  },
});

const tools = await client.getTools();

// 创建OpenAI模型
const model = new ChatOpenAI({
  model: "gpt-4o-mini",
  temperature: 0,
});

// 创建React代理
const agent = createReactAgent({
  llm: model,
  tools,
});

// 运行代理
try {
  const mathResponse = await agent.invoke({
    messages: [{ role: "user", content: "(3 + 5) x 12等于多少？" }],
  });
  console.log(mathResponse);
} catch (error) {
  console.error("代理执行期间出错：", error);
  // 工具对特定错误会抛出ToolException
  if (error.name === "ToolException") {
    console.error("工具执行失败：", error.message);
  }
}

await client.close();
```
# 示例：自行管理 MCP 客户端

本示例展示了如何自行管理你自己的 MCP 客户端，并使用它获取 LangChain 工具。这些工具可以在任何使用 LangChain 工具的地方使用，包括与 LangGraph 预构建代理一起使用，如下所示。

以下示例需要满足一些前提条件：
```bash
npm install @langchain/mcp-adapters @langchain/langgraph @langchain/core @langchain/openai

export OPENAI_API_KEY=<你的_api_key>
```
```ts
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import { ChatOpenAI } from "@langchain/openai";
import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { loadMcpTools } from "@langchain/mcp-adapters";

// 初始化 ChatOpenAI 模型
const model = new ChatOpenAI({ model: "gpt-4" });

// 自动启动并连接到 MCP 参考服务器
const transport = new StdioClientTransport({
  command: "npx",
  args: ["-y", "@modelcontextprotocol/server-math"],
});

// 初始化客户端
const client = new Client({
  name: "math-client",
  version: "1.0.0",
});

try {
  // 连接传输通道
  await client.connect(transport);

  // 获取带有自定义配置的工具
  const tools = await loadMcpTools("math", client, {
    // 如果工具加载失败是否抛出错误（可选，默认值：true）
    throwOnLoadError: true,
    // 是否在工具名称前加上服务器名称（可选，默认值：false）
    prefixToolNameWithServerName: false,
    // 工具名称的可选附加前缀（可选，默认值：空字符串）
    additionalToolNamePrefix: "",
    // 在工具输出中使用标准化内容块格式（默认值：false）
    useStandardContentBlocks: false,
  });

  // 创建并运行代理
  const agent = createReactAgent({ llm: model, tools });
  const agentResponse = await agent.invoke({
    messages: [{ role: "user", content: "(3 + 5) x 12 等于多少？" }],
  });
  console.log(agentResponse);
} catch (e) {
  console.error(e);
} finally {
  // 清理连接
  await client.close();
}
```
有关更详细的示例，请参阅 [examples](https://github.com/langchain-ai/langchainjs/tree/main/libs/langchain-mcp-adapters/examples) 目录。

## 工具配置选项

> \[!提示]
> 为了向后兼容，`useStandardContentBlocks` 默认为 `false`，但建议新应用程序将其设置为 `true`，因为未来版本可能会将其设为默认值。

当通过 `loadMcpTools` 直接加载 MCP 工具或通过 `MultiServerMCPClient` 加载时，您可以配置以下选项：

| 选项                         | 类型                                   | 默认值                                               | 描述                                                                          |
| ------------------------------ | -------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `throwOnLoadError`             | `boolean`                              | `true`                                                | 如果工具加载失败，是否抛出错误                                    |
| `prefixToolNameWithServerName` | `boolean`                              | `false`                                               | 如果为 true，则在所有工具名称前加上服务器名称（例如，`serverName__toolName`） |
| `additionalToolNamePrefix`     | `string`                               | `""`                                                  | 要添加到工具名称的额外前缀（例如，`prefix__serverName__toolName`）        |
| `useStandardContentBlocks`     | `boolean`                              | `false`                                               | 参见 [工具输出映射](#tool-output-mapping)；新应用程序请设为 true       |
| `outputHandling`               | `"content"`, `"artifact"` 或 `object` | `resource` -> `"artifact"`，其他 -> `"content"` | 参见 [工具输出映射](#tool-output-mapping)                                      |
| `defaultToolTimeout`           | `number`                               | `0`                                                   | 所有工具的默认超时时间（可在每个工具基础上覆盖）                      |

## 工具输出映射

> \[!提示]
> 如果您正在使用多模态工具、生成嵌入资源的工具，或生成可能不想包含在 LLM 输入上下文中的大型输出的工具，本节内容非常重要。如果您正在编写一个仅使用生成简单文本或 JSON 输出的工具的新应用程序，我们建议将 `useStandardContentBlocks` 设置为 `true` 并保持 `outputHandling` 未定义（将使用默认值）。

MCP 工具返回内容块数组。内容块可以包含文本、图像、音频或嵌入资源。如何将这些输出映射到 LangChain 的 `ToolMessage` 对象，取决于您的应用程序需求，这就是我们引入 `useStandardContentBlocks` 和 `outputHandling` 配置选项的原因。

`useStandardContentBlocks` 字段决定如何将各个 MCP 内容块转换为 LangChain ChatModel 提供商（例如 `ChatOpenAI`、`ChatAnthropic` 等）能识别的结构。`outputHandling` 字段允许您指定给定类型的内容是发送给 LLM，还是保留供应用程序后续处理步骤使用（例如，在代码执行环境中使用数据库查询生成的数据帧）。

### 标准化工具输出格式

在 `@langchain/core` 0.3.48 版本中，我们创建了一组新的内容块类型，为多模态输入提供了标准化结构。正如您从名称推测的那样，`useStandardContentBlocks` 设置决定 `@langchain/mcp-adapters` 是否将工具输出转换为此格式。为了与旧版本的 `@langchain/mcp-adapters` 向后兼容，它还决定是否转换工具消息工件。有关更多信息，请参见下面的转换规则。

> \[!重要]
> 除了一个特殊情况外，`ToolMessage.content` 和 `ToolMessage.artifact` 始终是根据以下规则描述的内容块对象数组。当 `outputHandling` 选项将 `text` 输出路由到 `ToolMessage.content` 字段，并且工具调用生成的唯一内容块是 `text` 块时，`ToolMessage.content` 将是一个包含工具生成文本内容的 `string`。

**当 `useStandardContentBlocks` 为 `true` 时（推荐用于新应用程序）：**

* **文本**：作为 [`StandardTextBlock`](https://v03.api.js.langchain.com/types/_langchain_core.messages.StandardTextBlock.html) 对象返回。
* **图像**：作为 base64 [`StandardImageBlock`](https://v03.api.js.langchain.com/types/_langchain_core.messages.StandardImageBlock.html) 对象返回。
* **音频**：作为 base64 [`StandardAudioBlock`](https://v03.api.js.langchain.com/types/_langchain_core.messages.StandardAudioBlock.html) 对象返回。
* **嵌入资源**：作为 [`StandardFileBlock`](https://v03.api.js.langchain.com/types/_langchain_core.messages.StandardFileBlock.html) 返回，`source_type` 为 `text` 或 `base64`，具体取决于资源是二进制还是文本。URI 资源将从服务器主动获取，获取结果将根据这些规则返回。我们将所有嵌入资源 URI 视为服务器可解析，不会尝试获取外部 URI。

**当 `useStandardContentBlocks` 为 `false` 时（默认向后兼容）：**

* 路由到 `ToolMessage.artifact` 的工具输出（由 `outputHandling` 选项控制）：
  * **嵌入资源**：仅包含 URI 的嵌入资源将从服务器主动获取，获取结果将不经过转换存储在 artifact 数组中。其他情况下，嵌入资源以原始 MCP 内容块结构存储在 `artifact` 数组中而不修改。
  * **所有其他内容类型**：以原始 MCP 内容块结构存储在 `artifact` 数组中而不修改。
* 路由到 `ToolMessage.content` 数组的工具输出（由 `outputHandling` 选项控制）：
  * **文本**：作为 [`MessageContentText`](https://v03.api.js.langchain.com/types/_langchain_core.messages.MessageContentText.html) 对象返回，除非它是输出中唯一的内容块，在这种情况下，它将直接作为 `string` 赋值给 `ToolMessage.content`。
  * **图像**：作为 [`MessageContentImageUrl`](https://v03.api.js.langchain.com/types/_langchain_core.messages.MessageContentImageUrl.html) 对象返回，使用 base64 数据 URL（`data:image/png;base64,<data>`）
  * **音频**：作为 [`StandardAudioBlock`](https://v03.api.js.langchain.com/types/_langchain_core.messages.StandardAudioBlock.html) 对象返回。
  * **嵌入资源**：作为 [`StandardFileBlock`](https://v03.api.js.langchain.com/types/_langchain_core.messages.StandardFileBlock.html) 返回，`source_type` 为 `text` 或 `base64`，具体取决于资源是二进制还是文本。URI 资源将从服务器主动获取，获取结果将根据这些规则返回。我们将所有嵌入资源 URI 视为服务器可解析，不会尝试获取外部 URI。

### 确定哪些工具输出对 LLM 可见

`outputHandling` 选项允许您确定哪些工具输出类型分配给 `ToolMessage.content`，哪些分配给 `ToolMessage.artifact`。当调用 LLM 时，[`ToolMessage.content`](https://v03.api.js.langchain.com/classes/_langchain_core.messages_tool.ToolMessage.html#content) 中的数据将用作输入上下文，而 [`ToolMessage.artifact`](https://v03.api.js.langchain.com/classes/_langchain_core.messages_tool.ToolMessage.html#artifact) 中的数据则不会。

默认情况下，`@langchain/mcp-adapters` 将 MCP `resource` 内容块映射到 `ToolMessage.artifact`，并将所有其他 MCP 内容块类型映射到 `ToolMessage.content`。[`useStandardContentBlocks`](#standardizing-the-format-of-tool-outputs) 的值决定了在此过程中每个内容块的结构如何转换。

> \[!提示]
> `ToolMessage.artifact` 有用的示例包括：当您需要通过 `HumanMessage` 或 `SystemMessage` 发送多模态工具输出，但 LLM 提供商 API 不接受多模态工具输出，或一个工具可能生成大型输出供其他工具间接操作的情况（例如，查询工具将数据帧加载到 Python 代码执行环境中）。

`outputHandling` 选项可以赋值为 `"content"`、`"artifact"`，或一个将 MCP 内容块类型映射为 `content` 或 `artifact` 的对象。

使用 `MultiServerMCPClient` 时，`outputHandling` 字段可以赋值给顶级配置对象和/或 `mcpServers` 中的各个服务器条目。`mcpServers` 中的条目会覆盖顶级配置中的条目，而顶级配置中的条目会覆盖默认值。

例如，考虑以下配置：
```typescript
const clientConfig = {
  useStandardContentBlocks: true,
  outputHandling: {
    image: "artifact",
    audio: "artifact",
  },
  mcpServers: {
    "camera-server": {
      url: "...",
      outputHandling: {
        image: content
      },
    },
    microphone: {
      url: "...",
      outputHandling: {
        audio: content
      },
    },
  },
}
```
调用 `camera` MCP 服务器中的工具时，将使用以下 `outputHandling` 配置：
```typescript
{
  text: "content", // 默认值
  image: "content", // 默认值，且被 "camera" 服务器配置覆盖的顶层配置
  audio: "artifact", // 被顶层配置覆盖的默认值
  resource: "artifact", // 默认值
}
```
同样，在调用 `microphone` MCP 服务器上的工具时，将使用以下 `outputHandling` 配置：
```typescript
{
  text: "内容", // 默认值
  image: "工件", // 顶层配置覆盖的默认值
  audio: "内容", // 默认值及顶层配置被 "microphone" 服务器配置覆盖
  resource: "工件", // 默认值
}
```
## 工具超时配置

### 使用 `defaultToolTimeout`

您可以通过在客户端参数中设置 `defaultToolTimeout` 字段，为所有工具配置全局超时时间。您可以在服务器配置中包含 `defaultToolTimeout` 字段，以为该服务器的所有工具设置超时时间，或者在顶级配置中设置它，以为整个客户端设置全局超时时间。

除非被特定工具的超时设置所覆盖，否则所有工具都将使用此超时作为默认超时时间。
```typescript
const client = new MultiServerMCPClient({
  mcpServers: {
    "data-processor": {
      command: "python",
      args: ["data_server.py"],
      defaultToolTimeout: 30000, // 超时时间为30秒
    },
    "image-processor": {
      transport: "stdio",
      command: "node",
      args: ["image_server.js"],
      // 超时时间为10秒（在顶层配置中设置）
    },
  },
  defaultToolTimeout: 10000, // 10秒
});

const tools = await client.getTools();
const slowTool = tools.find((t) => t.name.includes("process_large_dataset"));

// 将在30秒后超时（defaultToolTimeout）
const result = await slowTool.invoke({ dataset: "huge_file.csv" });
```
### 使用 `withConfig`

MCP 工具通过 LangChain 标准的 `RunnableConfig` 接口支持超时配置。这允许你在每次调用工具时设置自定义的超时时间：
```typescript
const client = new MultiServerMCPClient({
  mcpServers: {
    "data-processor": {
      command: "python",
      args: ["data_server.py"],
    },
  },
  useStandardContentBlocks: true,
});

const tools = await client.getTools();
const slowTool = tools.find((t) => t.name.includes("process_large_dataset"));

// 您可以使用 withConfig 在将工具传递给 LangGraph ToolNode 或应用程序其他部分之前
// 设置特定于该工具的超时时间
const slowToolWithTimeout = slowTool.withConfig({ timeout: 300000 }); // 5 分钟超时

// 此调用将遵循 5 分钟超时限制
const result = await slowToolWithTimeout.invoke({ dataset: "huge_file.csv" });

// 或者您也可以不使用 withConfig 而直接调用
const directResult = await slowTool.invoke(
  { dataset: "huge_file.csv" },
  { timeout: 300000 }
);

// 快速操作的短超时时间
const quickResult = await fastTool.invoke(
  { query: "simple_lookup" },
  { timeout: 5000 } // 5 秒钟
);

// 未提供配置时的默认超时时间（来自 MCP SDK 的 60 秒）
const normalResult = await tool.invoke({ input: "normal_processing" });
```
可以使用以下 `RunnableConfig` 字段配置超时：

| 参数      | 类型          | 默认值    | 描述                                                         |
| --------- | ------------- | --------- | ------------------------------------------------------------ |
| `timeout` | number        | 60000     | 工具调用的超时时间（毫秒）                                   |
| `signal`  | AbortSignal   | undefined | 一个 AbortSignal，当被触发时，将取消工具调用                 |

## OAuth 2.0 认证

对于需要 OAuth 2.0 认证的安全 MCP 服务器，您可以使用 `authProvider` 选项，而不是手动管理请求头。这提供了自动刷新令牌、错误处理以及符合标准的 OAuth 流程。

v0.4.6 版本新增功能。

### 基本 OAuth 配置
```ts
import type { OAuthClientProvider } from "@modelcontextprotocol/sdk/client/auth.js";

class MyOAuthProvider implements OAuthClientProvider {
  constructor(
    private config: {
      redirectUrl: string;
      clientMetadata: OAuthClientMetadata;
    }
  ) {}

  get redirectUrl() {
    return this.config.redirectUrl;
  }
  get clientMetadata() {
    return this.config.clientMetadata;
  }

  // 实现令牌存储（localStorage、数据库等）
  tokens(): OAuthTokens | undefined {
    const stored = localStorage.getItem("mcp_tokens");
    return stored ? JSON.parse(stored) : undefined;
  }

  async saveTokens(tokens: OAuthTokens): Promise<void> {
    localStorage.setItem("mcp_tokens", JSON.stringify(tokens));
  }

  // 实现其他必需的方法...
  // 完整示例请参阅 MCP SDK 文档
}

const client = new MultiServerMCPClient({
  mcpServers: {
    "secure-server": {
      url: "https://secure-mcp-server.example.com/mcp",
      authProvider: new MyOAuthProvider({
        redirectUrl: "https://myapp.com/oauth/callback",
        clientMetadata: {
          redirect_uris: ["https://myapp.com/oauth/callback"],
          client_name: "My MCP Client",
          scope: "mcp:read mcp:write",
        },
      }),
    },
  },
  useStandardContentBlocks: true,
});
```
### OAuth 特性

`authProvider` 会自动处理：

* ✅ **令牌刷新**：使用刷新令牌自动刷新过期的访问令牌
* ✅ **401 错误恢复**：在成功重新认证后自动重试请求
* ✅ **PKCE 安全机制**：使用“代码交换的证明密钥”（Proof Key for Code Exchange）以增强安全性
* ✅ **遵循标准**：符合 OAuth 2.0 和 RFC 6750 规范
* ✅ **传输兼容性**：同时支持 StreamableHTTP 和 SSE 传输方式

### OAuth 与手动头部对比

| 方面             | OAuth 提供者           | 手动头部设置                    |
| ---------------- | ---------------------- | ------------------------------- |
| **令牌刷新**     | ✅ 自动刷新             | ❌ 需要手动实现                  |
| **401 处理**     | ✅ 自动重试             | ❌ 需要手动处理错误              |
| **安全性**       | ✅ PKCE，安全流程       | ⚠️ 取决于具体实现               |
| **标准合规性**   | ✅ 符合 RFC 6750 标准   | ⚠️ 需要手动确保符合规范         |
| **复杂度**       | ✅ 配置简单             | ❌ 实现较复杂                   |

**建议**：在生产环境的 OAuth 服务器中使用 `authProvider`，仅在简单的基于令牌的认证或调试时使用 `headers`。

## 重连策略

两种传输方式都支持自动重连：

### Stdio 传输重启
```ts
{
  transport: "stdio",
  command: "npx",
  args: ["-y", "@modelcontextprotocol/server-math"],
  restart: {
    enabled: true,      // 启用自动重启
    maxAttempts: 3,     // 最大重启尝试次数
    delayMs: 1000       // 尝试之间的延迟时间（毫秒）
  }
}
```
### SSE 传输重连
```ts
{
  transport: "sse",
  url: "https://example.com/mcp-server",
  headers: { "Authorization": "Bearer token123" },
  reconnect: {
    enabled: true,      // 启用自动重连
    maxAttempts: 5,     // 最大重连次数
    delayMs: 2000       // 两次重连之间的延迟（毫秒）
  }
}
```
## 错误处理

该库提供了不同的错误类型以帮助调试：

* **MCPClientError**：用于客户端连接和初始化问题
* **ToolException**：用于工具执行期间的错误
* **ZodError**：用于配置验证错误（连接设置无效等）

示例错误处理：
```ts
try {
  const client = new MultiServerMCPClient({
    mcpServers: {
      math: {
        transport: "stdio",
        command: "npx",
        args: ["-y", "@modelcontextprotocol/server-math"],
      },
    },
    useStandardContentBlocks: true,
  });

  const tools = await client.getTools();
  const result = await tools[0].invoke({ expression: "1 + 2" });
} catch (error) {
  if (error.name === "MCPClientError") {
    // 处理连接问题
    console.error(`连接错误 (${error.serverName}):`, error.message);
  } else if (error.name === "ToolException") {
    // 处理工具执行错误
    console.error("工具执行失败:", error.message);
  } else if (error.name === "ZodError") {
    // 处理配置验证错误
    console.error("配置错误:", error.issues);
    // Zod 错误包含关于问题的详细信息
    error.issues.forEach((issue) => {
      console.error(`- 路径: ${issue.path.join(".")}, 错误: ${issue.message}`);
    });
  } else {
    // 处理其他错误
    console.error("意外错误:", error);
  }
}
```
### 常见的 Zod 校验错误

该库使用 Zod 进行配置校验。以下是一些常见的校验错误：

* **缺少必填参数**：例如，对于 stdio 传输方式遗漏 `command`，或对于 SSE 传输方式遗漏 `url`
* **参数类型错误**：例如，在期望字符串的地方提供了数字
* **无效的连接配置**：例如，对于 SSE 传输方式使用了无效的 URL 格式

无效 SSE URL 的 Zod 错误示例：
```json
{
  "issues": [
    {
      "code": "invalid_string",
      "validation": "url",
      "path": ["mcpServers", "weather", "url"],
      "message": "无效的网址"
    }
  ],
  "name": "ZodError"
}
```
### 调试日志

本包使用 [debug](https://www.npmjs.com/package/debug) 包进行调试日志记录。

默认情况下日志记录是禁用的，可以通过按照 debug 包中的说明设置 `DEBUG` 环境变量来启用。

要输出本包的所有调试日志：
```bash
DEBUG='@langchain/mcp-adapters:*'
```
仅从 `client` 模块输出调试日志：
```bash
DEBUG='@langchain/mcp-adapters:client'
```
仅从 `tools` 模块输出调试日志：
```bash
DEBUG='@langchain/mcp-adapters:tools'
```
## 许可证

MIT

## 致谢

非常感谢 [@vrknetha](https://github.com/vrknetha) 和 [@knacklabs](https://www.knacklabs.ai)，感谢你们的初始实现！

## 贡献

我们欢迎贡献！有关更多信息，请查看我们的[贡献指南](https://github.com/langchain-ai/langchainjs/tree/main/libs/langchain-mcp-adapters/CONTRIBUTING.md)。