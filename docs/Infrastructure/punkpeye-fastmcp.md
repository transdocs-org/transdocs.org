# FastMCP

用于构建能够处理客户端会话的 [MCP](https://glama.ai/mcp) 服务器的 TypeScript 框架。

> \[!NOTE]
>
> Python 实现请参见 [FastMCP](https://github.com/jlowin/fastmcp)。

## 功能特性

* 简单的工具、资源、提示定义
* [身份验证](#authentication)
* [通过上下文传递请求头](#passing-headers-through-context)
* [会话](#sessions)
* [图片内容](#returning-an-image)
* [音频内容](#returning-an-audio)
* [嵌入式](#embedded-resources)
* [日志](#logging)
* [错误处理](#errors)
* [HTTP 流式传输](#http-streaming)（兼容 SSE）
* [无状态模式](#stateless-mode) 用于无服务器部署
* 默认启用 CORS
* [进度通知](#progress)
* [流式输出](#streaming-output)
* [类型化服务器事件](#typed-server-events)
* [提示参数自动补全](#prompt-argument-auto-completion)
* [采样](#requestsampling)
* [可配置的 ping 行为](#configurable-ping-behavior)
* [健康检查端点](#health-check-endpoint)
* [根目录](#roots-management)
* CLI 用于 [测试](#test-with-mcp-cli) 和 [调试](#inspect-with-mcp-inspector)

## 何时选择 FastMCP 而非官方 SDK？

FastMCP 构建在官方 SDK 之上。

官方 SDK 提供了构建 MCP 的基础模块，但许多实现细节需要你自己处理：

* [初始化与配置](https://github.com/punkpeye/fastmcp/blob/06c2af7a3d7e3d8c638deac1964ce269ce8e518b/src/FastMCP.ts#L664-L744) 所有服务器组件
* [连接处理](https://github.com/punkpeye/fastmcp/blob/06c2af7a3d7e3d8c638deac1964ce269ce8e518b/src/FastMCP.ts#L760-L850)
* [工具处理](https://github.com/punkpeye/fastmcp/blob/06c2af7a3d7e3d8c638deac1964ce269ce8e518b/src/FastMCP.ts#L1303-L1498)
* [响应处理](https://github.com/punkpeye/fastmcp/blob/06c2af7a3d7e3d8c638deac1964ce269ce8e518b/src/FastMCP.ts#L989-L1060)
* [资源处理](https://github.com/punkpeye/fastmcp/blob/06c2af7a3d7e3d8c638deac1964ce269ce8e518b/src/FastMCP.ts#L1151-L1242)
* 添加 [提示](https://github.com/punkpeye/fastmcp/blob/06c2af7a3d7e3d8c638deac1964ce269ce8e518b/src/FastMCP.ts#L760-L850)、[资源](https://github.com/punkpeye/fastmcp/blob/06c2af7a3d7e3d8c638deac1964ce269ce8e518b/src/FastMCP.ts#L960-L962)、[资源模板](https://github.com/punkpeye/fastmcp/blob/06c2af7a3d7e3d8c638deac1964ce269ce8e518b/src/FastMCP.ts#L964-L987)
* 嵌入 [资源](https://github.com/punkpeye/fastmcp/blob/06c2af7a3d7e3d8c638deac1964ce269ce8e518b/src/FastMCP.ts#L1569-L1643)、[图片](https://github.com/punkpeye/fastmcp/blob/06c2af7a3d7e3d8c638deac1964ce269ce8e518b/src/FastMCP.ts#L51-L111) 和 [音频](https://github.com/punkpeye/fastmcp/blob/06c2af7a3d7e3d8c638deac1964ce269ce8e518b/src/FastMCP.ts#L113-L173) 内容块

FastMCP 通过提供一套约定式框架，消除了上述复杂性：

* 自动处理所有样板代码
* 为常见任务提供简单直观的 API
* 内置最佳实践和错误处理
* 让你专注于 MCP 的核心功能

**选择 FastMCP 的场景：** 想快速构建 MCP 服务器，而不想处理底层实现细节。

**使用官方 SDK 的场景：** 需要最大控制权或有特定架构需求。此时建议参考 FastMCP 的实现，以避免常见陷阱。

## 安装
```bash
npm install fastmcp
```
## 快速开始

> \[!NOTE\]
>
> 已有许多在现实场景中使用 FastMCP 的示例。请参见 [展示](#showcase) 获取相关示例。
```ts
import { FastMCP } from "fastmcp";
import { z } from "zod"; // 或者任何支持标准 Schema 的验证库

const server = new FastMCP({
  name: "My Server",
  version: "1.0.0",
});

server.addTool({
  name: "add",
  description: "将两个数字相加",
  parameters: z.object({
    a: z.number(),
    b: z.number(),
  }),
  execute: async (args) => {
    return String(args.a + args.b);
  },
});

server.start({
  transportType: "stdio",
});
```
*就是这样！* 你现在拥有了一个可用的 MCP 服务器。

你可以在终端中用以下命令测试服务器：
```bash
git clone https://github.com/punkpeye/fastmcp.git
cd fastmcp

pnpm install
pnpm build

# 使用 CLI 测试加法服务器示例：
npx fastmcp dev src/examples/addition.ts
# 使用 MCP Inspector 测试加法服务器示例：
npx fastmcp inspect src/examples/addition.ts
```
如果你正在寻找一个样板仓库来构建自己的 MCP 服务器，请查看 [fastmcp-boilerplate](https://github.com/punkpeye/fastmcp-boilerplate)。

### 远程服务器选项

FastMCP 支持多种远程通信传输方式，允许通过网络访问托管在远程机器上的 MCP。

#### HTTP 流式传输

[HTTP 流式传输](https://www.cloudflare.com/learning/video/what-is-http-live-streaming/) 在支持它的环境中提供了比 SSE 更高效的替代方案，对于较大的负载可能具有更好的性能。

你可以使用 HTTP 流式传输支持来运行服务器：
```ts
server.start({
  transportType: "httpStream",
  httpStream: {
    port: 8080,
  },
});
```
这将启动服务器，并在 `http://localhost:8080/mcp` 上监听 HTTP 流式连接。

> **注意：** 你也可以通过 `httpStream.endpoint` 选项自定义端点路径（默认为 `/mcp`）。

你可以使用相应的客户端传输连接到这些服务器。

对于 HTTP 流式连接：
```ts
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";

const client = new Client(
  {
    name: "example-client",
    version: "1.0.0",
  },
  {
    capabilities: {},
  },
);

const transport = new StreamableHTTPClientTransport(
  new URL(`http://localhost:8080/mcp`),
);

await client.connect(transport);
```
对于 SSE 连接：
```ts
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";

const client = new Client(
  {
    name: "example-client",
    version: "1.0.0",
  },
  {
    capabilities: {},
  },
);

const transport = new SSEClientTransport(new URL(`http://localhost:8080/sse`));

await client.connect(transport);
```
#### 无状态模式

FastMCP 支持 HTTP 流式传输的无状态操作，每个请求独立处理，无需维护持久会话。这非常适合无服务器环境、负载均衡部署或不需要会话状态的场景。

在无状态模式下：

* 服务器不会跟踪任何会话
* 每个请求都会创建一个临时会话，响应后即被丢弃
* 内存占用更低，扩展性更好
* 完美适配无状态部署环境

你可以通过添加 `stateless: true` 选项来启用无状态模式：
```ts
server.start({
  transportType: "httpStream",
  httpStream: {
    port: 8080,
    stateless: true,
  },
});
```
> **注意：** 无状态模式仅在使用 HTTP 流式传输时可用。依赖持久会话的功能（如会话特定状态）在无状态模式下将不可用。

你也可以通过 CLI 参数或环境变量启用无状态模式：
```bash
# 通过 CLI 参数
npx fastmcp dev src/server.ts --transport http-stream --port 8080 --stateless true

# 通过环境变量
FASTMCP_STATELESS=true npx fastmcp dev src/server.ts
```
`/ready` 健康检查端点将指示服务器何时以无状态模式运行：
```json
{
  "mode": "无状态",
  "ready": 1,
  "status": "就绪",
  "total": 1
}
```
## 核心概念

### 工具

MCP 中的[工具](https://modelcontextprotocol.io/docs/concepts/tools)允许服务器暴露可执行函数，客户端可以调用这些函数，LLM 也能利用它们来执行操作。

FastMCP 使用 [Standard Schema](https://standardschema.dev) 规范来定义工具参数。这意味着只要你喜欢的模式验证库（如 Zod、ArkType 或 Valibot）实现了该规范，就可以直接使用。

**Zod 示例：**
```typescript
import { z } from "zod";

server.addTool({
  name: "fetch-zod",
  description: "使用 Zod 获取 URL 的内容",
  parameters: z.object({
    url: z.string(),
  }),
  execute: async (args) => {
    return await fetchWebpageContent(args.url);
  },
});
```
**ArkType 示例：**
```typescript
import { type } from "arktype";

server.addTool({
  name: "fetch-arktype",
  description: "使用 ArkType 获取 URL 的内容",
  parameters: type({
    url: "string",
  }),
  execute: async (args) => {
    return await fetchWebpageContent(args.url);
  },
});
```
**Valibot 示例：**

Valibot 需要对等依赖 @valibot/to-json-schema。
```typescript
import * as v from "valibot";

server.addTool({
  name: "fetch-valibot",
  description: "获取一个 url 的内容（使用 Valibot）",
  parameters: v.object({
    url: v.string(),
  }),
  execute: async (args) => {
    return await fetchWebpageContent(args.url);
  },
});
```
#### 无参数工具

创建不需要参数的工具时，你有两种选择：

1. 完全省略 parameters 属性：
```typescript
server.addTool({
  name: "sayHello",
  description: "打招呼",
  // 没有 parameters 属性
  execute: async () => {
    return "你好，世界！";
  },
});
```
2. 显式定义空参数：
```typescript
import { z } from "zod";

server.addTool({
  name: "sayHello",
  description: "打个招呼",
  parameters: z.object({}), // 空对象
  execute: async () => {
    return "你好，世界！";
  },
});
```
> \[!NOTE]
>
> 这两种方法都与所有 MCP 客户端（包括 Cursor）完全兼容。FastMCP 会在两种情况下自动生成正确的架构。

#### 工具授权

你可以通过在工具定义中添加可选的 `canAccess` 函数来控制哪些工具可供已认证用户使用。该函数接收认证上下文，如果允许用户访问该工具，应返回 `true`。
```typescript
server.addTool({
  name: "admin-tool",
  description: "仅限管理员使用的工具",
  canAccess: (auth) => auth?.role === "admin",
  execute: async () => "欢迎，管理员！",
});
```
#### 返回字符串

`execute` 可以返回一个字符串：
```js
server.addTool({
  name: "download",
  description: "下载文件",
  parameters: z.object({
    url: z.string(),
  }),
  execute: async (args) => {
    return "Hello, world!";
  },
});
```
后者等同于：
```js
server.addTool({
  name: "download",
  description: "下载文件",
  parameters: z.object({
    url: z.string(),
  }),
  execute: async (args) => {
    return {
      content: [
        {
          type: "text",
          text: "你好，世界！",
        },
      ],
    };
  },
});
```
#### 返回列表

如果你想返回消息列表，可以返回一个包含 `content` 属性的对象：
```js
server.addTool({
  name: "download",
  description: "下载文件",
  parameters: z.object({
    url: z.string(),
  }),
  execute: async (args) => {
    return {
      content: [
        { type: "text", text: "第一条消息" },
        { type: "text", text: "第二条消息" },
      ],
    };
  },
});
```
#### 返回图像

使用 `imageContent` 创建一个图像的内容对象：
```js
import { imageContent } from "fastmcp";

server.addTool({
  name: "download",
  description: "下载文件",
  parameters: z.object({
    url: z.string(),
  }),
  execute: async (args) => {
    return imageContent({
      url: "https://example.com/image.png",
    });

    // 或者...
    // return imageContent({
    //   path: "/path/to/image.png",
    // });

    // 或者...
    // return imageContent({
    //   buffer: Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=", "base64"),
    // });

    // 或者...
    // return {
    //   content: [
    //     await imageContent(...)
    //   ],
    // };
  },
});
```
`imageContent` 函数接受以下选项：

* `url`：图片的 URL。
* `path`：图片文件的路径。
* `buffer`：以 buffer 形式表示的图片数据。

必须且只能指定 `url`、`path` 或 `buffer` 中的一个。

上面的示例等同于：
```js
server.addTool({
  name: "download",
  description: "下载文件",
  parameters: z.object({
    url: z.string(),
  }),
  execute: async (args) => {
    return {
      content: [
        {
          type: "image",
          data: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
          mimeType: "image/png",
        },
      ],
    };
  },
});
```
#### 可配置的 Ping 行为

FastMCP 包含一个可配置的 ping 机制，用于保持连接健康。可以通过服务器选项自定义 ping 行为：
```ts
const server = new FastMCP({
  name: "我的服务器",
  version: "1.0.0",
  ping: {
    // 显式启用或禁用 ping（默认值因传输方式而异）
    enabled: true,
    // 配置 ping 间隔，单位为毫秒（默认：5000 毫秒）
    intervalMs: 10000,
    // 设置与 ping 相关的日志级别（默认：'debug'）
    logLevel: "debug",
  },
});
```
默认情况下，ping 行为会根据每种传输类型进行优化：

* 为 SSE 和 HTTP 流式连接启用（这些连接受益于保活机制）
* 为 `stdio` 连接禁用（通常不需要 ping）

这种可配置的方法有助于减少日志冗余，并针对不同使用场景优化性能。

### 健康检查端点

当你使用 `httpStream` 传输运行 FastMCP 时，可以选择暴露一个简单的 HTTP 端点，返回纯文本响应，便于负载均衡器或容器编排进行存活检查。

通过服务器选项中的 `health` 键启用（或自定义）该端点：
```ts
const server = new FastMCP({
  name: "我的服务器",
  version: "1.0.0",
  health: {
    // 启用 / 禁用（默认：true）
    enabled: true,
    // 端点返回的响应体（默认：'ok'）
    message: "healthy",
    // 应响应的路径（默认：'/health'）
    path: "/healthz",
    // 返回的 HTTP 状态码（默认：200）
    status: 200,
  },
});

await server.start({
  transportType: "httpStream",
  httpStream: { port: 8080 },
});
```
现在，对 `http://localhost:8080/healthz` 的请求将返回：
```
HTTP/1.1 200 OK
content-type: text/plain

健康
```
当服务器使用 `stdio` 传输启动时，该端点将被忽略。

#### 根目录管理

FastMCP 支持 [根目录](https://modelcontextprotocol.io/docs/concepts/roots) —— 一项允许客户端提供一组类文件系统的根位置，并可以列出和动态更新的功能。可以在服务器选项中配置或禁用根目录功能：
```ts
const server = new FastMCP({
  name: "My Server",
  version: "1.0.0",
  roots: {
    // 设置为 false 以显式禁用 roots 支持
    enabled: false,
    // 默认情况下，roots 支持是启用的（true）
  },
});
```
这带来了以下好处：

* 更好地兼容可能不支持 Roots 的不同客户端
* 连接到未实现 roots 能力的客户端时，减少错误日志
* 对 MCP 服务器能力进行更明确的控制
* 当 roots 功能不可用时，优雅降级

你可以在服务器中监听根目录的变化：
```ts
server.on("connect", (event) => {
  const session = event.session;

  // 访问当前的根节点
  console.log("初始根节点:", session.roots);

  // 监听根节点的变化
  session.on("rootsChanged", (event) => {
    console.log("根节点已更改:", event.roots);
  });
});
```
当客户端不支持根目录，或者根目录功能被显式禁用时，这些操作会优雅地处理这种情况，而不会抛出错误。

### 返回音频

使用 `audioContent` 创建一个音频的内容对象：
```js
import { audioContent } from "fastmcp";

server.addTool({
  name: "download",
  description: "下载文件",
  parameters: z.object({
    url: z.string(),
  }),
  execute: async (args) => {
    return audioContent({
      url: "https://example.com/audio.mp3",
    });

    // 或者...
    // return audioContent({
    //   path: "/path/to/audio.mp3",
    // });

    // 或者...
    // return audioContent({
    //   buffer: Buffer.from("iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=", "base64"),
    // });

    // 或者...
    // return {
    //   content: [
    //     await audioContent(...)
    //   ],
    // };
  },
});
```
`audioContent` 函数接受以下选项：

* `url`：音频的 URL。
* `path`：音频文件的路径。
* `buffer`：以缓冲区形式提供的音频数据。

必须且只能指定 `url`、`path` 或 `buffer` 中的一个。

上面的示例等价于：
```js
server.addTool({
  name: "download",
  description: "下载文件",
  parameters: z.object({
    url: z.string(),
  }),
  execute: async (args) => {
    return {
      content: [
        {
          type: "audio",
          data: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
          mimeType: "audio/mpeg",
        },
      ],
    };
  },
});
```
#### 返回组合类型

你可以用这种方式组合多种类型，并将它们返回给 AI
```js
server.addTool({
  name: "download",
  description: "下载文件",
  parameters: z.object({
    url: z.string(),
  }),
  execute: async (args) => {
    return {
      content: [
        {
          type: "text",
          text: "你好，世界！",
        },
        {
          type: "image",
          data: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
          mimeType: "image/png",
        },
        {
          type: "audio",
          data: "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
          mimeType: "audio/mpeg",
        },
      ],
    };
  },

  // 或者...
  // execute: async (args) => {
  //   const imgContent = await imageContent({
  //     url: "https://example.com/image.png",
  //   });
  //   const audContent = await audioContent({
  //     url: "https://example.com/audio.mp3",
  //   });
  //   return {
  //     content: [
  //       {
  //         type: "text",
  //         text: "你好，世界！",
  //       },
  //       imgContent,
  //       audContent,
  //     ],
  //   };
  // },
});
```
#### 自定义日志记录器

FastMCP 允许你提供自定义的日志记录器实现，以控制服务器如何记录消息。这对于与现有日志基础设施集成或自定义日志格式非常有用。
```ts
import { FastMCP, Logger } from "fastmcp";

class CustomLogger implements Logger {
  debug(...args: unknown[]): void {
    console.log("[DEBUG]", new Date().toISOString(), ...args);
  }

  error(...args: unknown[]): void {
    console.error("[ERROR]", new Date().toISOString(), ...args);
  }

  info(...args: unknown[]): void {
    console.info("[INFO]", new Date().toISOString(), ...args);
  }

  log(...args: unknown[]): void {
    console.log("[LOG]", new Date().toISOString(), ...args);
  }

  warn(...args: unknown[]): void {
    console.warn("[WARN]", new Date().toISOString(), ...args);
  }
}

const server = new FastMCP({
  name: "我的服务器",
  version: "1.0.0",
  logger: new CustomLogger(),
});
```
参见 `src/examples/custom-logger.ts` 获取使用 Winston、Pino 以及基于文件的日志记录的示例。

#### 日志记录

工具可以通过上下文对象中的 `log` 对象向客户端记录消息：
```js
server.addTool({
  name: "download",
  description: "下载一个文件",
  parameters: z.object({
    url: z.string(),
  }),
  execute: async (args, { log }) => {
    log.info("正在下载文件...", {
      url,
    });

    // ...

    log.info("文件已下载");

    return "done";
  },
});
```
`log` 对象具有以下方法：

* `debug(message: string, data?: SerializableValue)`
* `error(message: string, data?: SerializableValue)`
* `info(message: string, data?: SerializableValue)`
* `warn(message: string, data?: SerializableValue)`

#### 错误

面向用户的错误应以 `UserError` 实例的形式抛出：
```js
import { UserError } from "fastmcp";

server.addTool({
  name: "download",
  description: "下载文件",
  parameters: z.object({
    url: z.string(),
  }),
  execute: async (args) => {
    if (args.url.startsWith("https://example.com")) {
      throw new UserError("不允许访问此 URL");
    }

    return "完成";
  },
});
```
#### 进度

工具可以通过在上下文对象中调用 `reportProgress` 来报告进度：
```js
server.addTool({
  name: "download",
  description: "下载文件",
  parameters: z.object({
    url: z.string(),
  }),
  execute: async (args, { reportProgress }) => {
    await reportProgress({
      progress: 0,
      total: 100,
    });

    // ...

    await reportProgress({
      progress: 100,
      total: 100,
    });

    return "完成";
  },
});
```
#### 流式输出

FastMCP 支持在工具仍在执行时流式传输部分结果，从而实现响应式 UI 和实时反馈。这在以下场景特别有用：

* 需要逐步生成内容的长时间运行操作  
* 文本、图像或其他媒体的渐进式生成  
* 用户可以从立即看到部分结果中受益的操作  

要为工具启用流式传输，请添加 `streamingHint` 注解并使用 `streamContent` 方法：
````js
server.addTool({
  name: "generateText",
  description: "逐步生成文本",
  parameters: z.object({
    prompt: z.string(),
  }),
  annotations: {
    streamingHint: true, // 表示此工具使用流式传输
    readOnlyHint: true,
  },
  execute: async (args, { streamContent }) => {
    // 立即发送初始内容
    await streamContent({ type: "text", text: "开始生成...\n" });

    // 模拟逐步生成内容
    const words = "The quick brown fox jumps over the lazy dog.".split(" ");
    for (const word of words) {
      await streamContent({ type: "text", text: word + " " });
      await new Promise((resolve) => setTimeout(resolve, 300)); // 模拟延迟
    }

    // 使用 streamContent 时，你可以：
    // 1. 返回 void（如果所有内容都已流式传输）
    // 2. 返回最终结果（将追加到已流式传输的内容）

    // 选项 1：所有内容已流式传输，因此返回 void
    return;

    // 选项 2：返回将追加的最终内容
    // return "生成完成！";
  },
});

流式传输适用于所有内容类型（文本、图像、音频），并可与进度报告结合使用：

```js
server.addTool({
  name: "processData",
  description: "处理数据并流式更新",
  parameters: z.object({
    datasetSize: z.number(),
  }),
  annotations: {
    streamingHint: true,
  },
  execute: async (args, { streamContent, reportProgress }) => {
    const total = args.datasetSize;

    for (let i = 0; i < total; i++) {
      // 报告数值进度
      await reportProgress({ progress: i, total });

      // 流式传输中间结果
      if (i % 10 === 0) {
        await streamContent({
          type: "text",
          text: `已处理 ${i}/${total} 项...\n`,
        });
      }

      await new Promise((resolve) => setTimeout(resolve, 50));
    }

    return "处理完成！";
  },
});
````

#### 工具注解

根据 MCP 规范（2025-03-26），工具可以包含注解，通过添加关于工具行为的元数据来提供更丰富的上下文和控制：

```typescript
server.addTool({
  name: "fetch-content",
  description: "从 URL 获取内容",
  parameters: z.object({
    url: z.string(),
  }),
  annotations: {
    title: "网页内容获取器", // 供 UI 显示的人类可读标题
    readOnlyHint: true, // 工具不会修改其环境
    openWorldHint: true, // 工具与外部实体交互
  },
  execute: async (args) => {
    return await fetchWebpageContent(args.url);
  },
});
```
可用的注解如下：

| 注解               | 类型    | 默认值  | 说明                                                                                                             |
| :----------------- | :------ | :------ | :--------------------------------------------------------------------------------------------------------------- |
| `title`            | string  | -       | 工具的人类可读标题，便于在 UI 中展示                                                                               |
| `readOnlyHint`     | boolean | `false` | 若为 true，表示该工具不会修改其运行环境                                                                            |
| `destructiveHint`  | boolean | `true`  | 若为 true，表示该工具可能执行破坏性更新（仅在 `readOnlyHint` 为 false 时才有意义）                                 |
| `idempotentHint`   | boolean | `false` | 若为 true，表示用相同参数重复调用该工具不会产生额外效果（仅在 `readOnlyHint` 为 false 时才有意义）                 |
| `openWorldHint`    | boolean | `true`  | 若为 true，表示该工具可能与“开放世界”中的外部实体交互                                                               |

这些注解帮助客户端和 LLM 更好地理解如何使用这些工具，以及在调用它们时应预期发生什么。

### 资源

[资源](https://modelcontextprotocol.io/docs/concepts/resources) 代表 MCP 服务器希望向客户端提供的任何类型的数据。可以包括：

* 文件内容
* 截图和图片
* 日志文件
* 等等

每个资源通过唯一的 URI 标识，可以包含文本或二进制数据。
```ts
server.addResource({
  uri: "file:///logs/app.log",
  name: "应用程序日志",
  mimeType: "text/plain",
  async load() {
    return {
      text: await readLogFile(),
    };
  },
});
```
> \[!NOTE]
>
> `load` 可以返回多个资源。例如，当读取目录时，可以返回目录中的文件列表。
>
> ```ts
> async load() {
>   return [
>     {
>       text: "第一个文件的内容",
>     },
>     {
>       text: "第二个文件的内容",
>     },
>   ];
> }
> ```

你也可以在 `load` 中返回二进制内容：
```ts
async load() {
  return {
    blob: 'base64编码的数据'
  };
}
```
### 资源模板

你还可以定义资源模板：
```ts
server.addResourceTemplate({
  uriTemplate: "file:///logs/{name}.log",
  name: "应用程序日志",
  mimeType: "text/plain",
  arguments: [
    {
      name: "name",
      description: "日志名称",
      required: true,
    },
  ],
  async load({ name }) {
    return {
      text: `${name} 的示例日志内容`,
    };
  },
});
```
#### 资源模板参数自动补全

为资源模板参数提供 `complete` 函数，以启用自动补全：
```ts
server.addResourceTemplate({
  uriTemplate: "file:///logs/{name}.log",
  name: "应用程序日志",
  mimeType: "text/plain",
  arguments: [
    {
      name: "name",
      description: "日志名称",
      required: true,
      complete: async (value) => {
        if (value === "Example") {
          return {
            values: ["示例日志"],
          };
        }

        return {
          values: [],
        };
      },
    },
  ],
  async load({ name }) {
    return {
      text: `${name} 的示例日志内容`,
    };
  },
});
```
### 嵌入资源

FastMCP 提供了一个便捷的 `embedded()` 方法，用于简化在工具响应中包含资源的过程。该功能可减少代码重复，并更轻松地在工具内部引用资源。

#### 基本用法
```js
server.addTool({
  name: "get_user_data",
  description: "获取用户信息",
  parameters: z.object({
    userId: z.string(),
  }),
  execute: async (args) => {
    return {
      content: [
        {
          type: "resource",
          resource: await server.embedded(`user://profile/${args.userId}`),
        },
      ],
    };
  },
});
```
#### 使用资源模板

`embedded()` 方法与资源模板无缝协作：
```js
// 定义一个资源模板
server.addResourceTemplate({
  uriTemplate: "docs://project/{section}",
  name: "项目文档",
  mimeType: "text/markdown",
  arguments: [
    {
      name: "section",
      required: true,
    },
  ],
  async load(args) {
    const docs = {
      "getting-started": "# 入门指南\n\n欢迎来到我们的项目！",
      "api-reference": "# API 参考\n\n需要身份验证。",
    };
    return {
      text: docs[args.section] || "未找到文档",
    };
  },
});

// 在工具中使用嵌入式资源
server.addTool({
  name: "get_documentation",
  description: "获取项目文档",
  parameters: z.object({
    section: z.enum(["getting-started", "api-reference"]),
  }),
  execute: async (args) => {
    return {
      content: [
        {
          type: "resource",
          resource: await server.embedded(`docs://project/${args.section}`),
        },
      ],
    };
  },
});
```
#### 使用直接资源

它也适用于直接定义的资源：
```js
// 定义一个直接资源
server.addResource({
  uri: "system://status",
  name: "系统状态",
  mimeType: "text/plain",
  async load() {
    return {
      text: "系统运行正常",
    };
  },
});

// 在工具中使用
server.addTool({
  name: "get_system_status",
  description: "获取当前系统状态",
  parameters: z.object({}),
  execute: async () => {
    return {
      content: [
        {
          type: "resource",
          resource: await server.embedded("system://status"),
        },
      ],
    };
  },
});
```
### 提示词

[提示词](https://modelcontextprotocol.io/docs/concepts/prompts) 使服务器能够定义可复用的提示模板和工作流，客户端可以轻松地向用户和 LLM 展示这些内容。它们为标准化和共享常见的 LLM 交互提供了一种强大方式。
```ts
server.addPrompt({
  name: "git-commit",
  description: "生成一条 Git 提交信息",
  arguments: [
    {
      name: "changes",
      description: "Git diff 或变更描述",
      required: true,
    },
  ],
  load: async (args) => {
    return `为这些变更生成一条简洁但具有描述性的提交信息：\n\n${args.changes}`;
  },
});
```
#### 提示词参数自动补全

提示词可以为其参数提供自动补全功能：
```js
server.addPrompt({
  name: "countryPoem",
  description: "写一首关于某个国家的诗",
  load: async ({ name }) => {
    return `你好，${name}！`;
  },
  arguments: [
    {
      name: "name",
      description: "国家名称",
      required: true,
      complete: async (value) => {
        if (value === "Germ") {
          return {
            values: ["Germany"],
          };
        }

        return {
          values: [],
        };
      },
    },
  ],
});
```
#### 使用 `enum` 实现 Prompt 参数自动补全

如果为某个参数提供了 `enum` 数组，服务器将自动为该参数提供补全。
```js
server.addPrompt({
  name: "countryPoem",
  description: "写一首关于某个国家的诗",
  load: async ({ name }) => {
    return `你好，${name}！`;
  },
  arguments: [
    {
      name: "name",
      description: "国家名称",
      required: true,
      enum: ["Germany", "France", "Italy"],
    },
  ],
});
```
### 身份验证

FastMCP 支持基于会话的身份验证，允许你保护服务器并控制对其功能的访问。

> \[!NOTE]
> 如需对经过身份验证的用户可使用的工具进行更精细的控制，请参阅 [工具授权](#tool-authorization) 部分。

要启用身份验证，请在服务器选项中提供一个 `authenticate` 函数。该函数接收传入的 HTTP 请求，并应返回一个解析为身份验证上下文的 Promise。

如果身份验证失败，该函数应抛出一个 `Response` 对象，该对象将被发送给客户端。
```ts
const server = new FastMCP({
  name: "My Server",
  version: "1.0.0",
  authenticate: (request) => {
    const apiKey = request.headers["x-api-key"];

    if (apiKey !== "123") {
      throw new Response(null, {
        status: 401,
        statusText: "Unauthorized",
      });
    }

    // 此处返回的任何内容都将在 `context.session` 对象中可用。
    return {
      id: 1,
    };
  },
});
```
现在你可以在工具中访问经过身份验证的会话数据：
```ts
server.addTool({
  name: "sayHello",
  execute: async (args, { session }) => {
    return `你好，${session.id}！`;
  },
});
```
#### 工具授权

你可以通过在工具定义中添加可选的 `canAccess` 函数来控制哪些工具可供已认证的用户使用。该函数接收认证上下文，如果允许用户访问该工具，应返回 `true`。

如果未提供 `canAccess`，则默认所有已认证用户均可访问该工具。如果服务器未配置任何认证，则所有工具对所有客户端都可用。

**示例：**
```typescript
const server = new FastMCP<{ role: "admin" | "user" }>({
  authenticate: async (request) => {
    const role = request.headers["x-role"] as string;
    return { role: role === "admin" ? "admin" : "user" };
  },
  name: "My Server",
  version: "1.0.0",
});

server.addTool({
  name: "admin-dashboard",
  description: "仅限管理员使用的工具",
  // 只有角色为 'admin' 的用户才能看到并执行此工具
  canAccess: (auth) => auth?.role === "admin",
  execute: async () => {
    return "欢迎进入管理员仪表板！";
  },
});

server.addTool({
  name: "public-info",
  description: "所有人都可以使用的工具",
  execute: async () => {
    return "这是公开信息。";
  },
});
```
在此示例中，只有使用 `admin` 角色进行身份验证的客户端才能列出或调用 `admin-dashboard` 工具。所有已认证用户均可使用 `public-info` 工具。

#### OAuth 支持

FastMCP 内置支持 OAuth 发现端点，同时兼容 **MCP 规范 2025-03-26** 和 **MCP 规范 2025-06-18** 的 OAuth 集成。通过提供符合 RFC 8414（OAuth 2.0 授权服务器元数据）和 RFC 9470（OAuth 2.0 受保护资源元数据）的标准发现端点，可轻松集成 OAuth 授权流程。
```ts
import { FastMCP } from "fastmcp";
import { buildGetJwks } from "get-jwks";
import fastJwt from "fast-jwt";

const server = new FastMCP({
  name: "My Server",
  version: "1.0.0",
  oauth: {
    enabled: true,
    authorizationServer: {
      issuer: "https://auth.example.com",
      authorizationEndpoint: "https://auth.example.com/oauth/authorize",
      tokenEndpoint: "https://auth.example.com/oauth/token",
      jwksUri: "https://auth.example.com/.well-known/jwks.json",
      responseTypesSupported: ["code"],
    },
    protectedResource: {
      resource: "mcp://my-server",
      authorizationServers: ["https://auth.example.com"],
    },
  },
  authenticate: async (request) => {
    const authHeader = request.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
      throw new Response(null, {
        status: 401,
        statusText: "缺失或无效的授权标头",
      });
    }

    const token = authHeader.slice(7); // 移除 'Bearer ' 前缀

    // 使用 OpenID Connect 发现验证 OAuth JWT 访问令牌
    try {
      // TODO: 缓存发现文档以避免重复请求
      // 从 well-known 端点发现 OAuth/OpenID 配置
      const discoveryUrl =
        "https://auth.example.com/.well-known/openid-configuration";
      // 替代方案：使用 OAuth 授权服务器元数据端点
      // const discoveryUrl = 'https://auth.example.com/.well-known/oauth-authorization-server';

      const discoveryResponse = await fetch(discoveryUrl);
      if (!discoveryResponse.ok) {
        throw new Error("获取 OAuth 发现文档失败");
      }

      const config = await discoveryResponse.json();
      const jwksUri = config.jwks_uri;
      const issuer = config.issuer;

      // 使用发现的端点创建 JWKS 客户端以验证令牌
      const getJwks = buildGetJwks({
        jwksUrl: jwksUri,
        cache: true,
        rateLimit: true,
      });

      // 使用 JWKS 和发现的颁发者创建 JWT 验证器
      const verify = fastJwt.createVerifier({
        key: async (token) => {
          const { header } = fastJwt.decode(token, { complete: true });
          const jwk = await getJwks.getJwk({
            kid: header.kid,
            alg: header.alg,
          });
          return jwk;
        },
        algorithms: ["RS256", "ES256"],
        issuer: issuer,
        audience: "mcp://my-server",
      });

      // 验证 JWT 令牌
      const payload = await verify(token);

      return {
        userId: payload.sub,
        scope: payload.scope,
        email: payload.email,
        // 根据需要包含其他声明
      };
    } catch (error) {
      throw new Response(null, {
        status: 401,
        statusText: "无效的 OAuth 令牌",
      });
    }
  },
});
```
此配置会自动暴露 OAuth 发现端点：

* `/.well-known/oauth-authorization-server` - 授权服务器元数据（RFC 8414）
* `/.well-known/oauth-protected-resource` - 受保护资源元数据（RFC 9470）

对于 JWT 令牌验证，你可以使用诸如 [`get-jwks`](https://github.com/nearform/get-jwks) 和 [`@fastify/jwt`](https://github.com/fastify/fastify-jwt) 这类库来处理 OAuth JWT 令牌。

#### 通过上下文传递请求头

如果你通过 HTTP 暴露 MCP 服务器，可能希望允许客户端通过请求头提供敏感密钥，然后将其传递给工具所调用的 API，从而使每个客户端都能提供自己的 API 密钥。这可以在 `authenticate` 部分捕获 HTTP 请求头，并将其存储在会话中，供后续工具引用。
```ts
import { FastMCP } from "fastmcp";
import { IncomingHttpHeaders } from "http";

// 定义会话数据类型
interface SessionData {
  headers: IncomingHttpHeaders;
  [key: string]: unknown; // 添加索引签名以满足 Record<string, unknown>
}

// 创建服务器实例
const server = new FastMCP({
  name: "My Server",
  version: "1.0.0",
  authenticate: async (request: any): Promise<SessionData> => {
    // 认证逻辑
    return {
      headers: request.headers,
    };
  },
});

// 用于显示 HTTP 头的工具
server.addTool({
  name: "headerTool",
  description: "从请求中读取 HTTP 头",
  execute: async (args: any, context: any) => {
    const session = context.session as SessionData;
    const headers = session?.headers ?? {};

    const getHeaderString = (header: string | string[] | undefined) =>
      Array.isArray(header) ? header.join(", ") : (header ?? "N/A");

    const userAgent = getHeaderString(headers["user-agent"]);
    const authorization = getHeaderString(headers["authorization"]);
    return `User-Agent: ${userAgent}\nAuthorization: ${authorization}\nAll Headers: ${JSON.stringify(headers, null, 2)}`;
  },
});

// 启动服务器
server.start({
  transportType: "httpStream",
  httpStream: {
    port: 8080,
  },
});
```
连接到该服务器的客户端可能如下所示：
```ts
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";

const transport = new StreamableHTTPClientTransport(
  new URL(`http://localhost:8080/mcp`),
  {
    requestInit: {
      headers: {
        Authorization: "Test 123",
      },
    },
  },
);

const client = new Client({
  name: "example-client",
  version: "1.0.0",
});

(async () => {
  await client.connect(transport);

  // 调用工具
  const result = await client.callTool({
    name: "headerTool",
    arguments: {
      arg1: "value",
    },
  });

  console.log("工具结果:", result);
})().catch(console.error);
```
客户端运行后，在控制台中显示的内容大致如下：
```
工具结果: {
  content: [
    {
      type: 'text',
      text: 'User-Agent: node\n' +
        'Authorization: Test 123\n' +
        '所有头部: {\n' +
        '  "host": "localhost:8080",\n' +
        '  "connection": "keep-alive",\n' +
        '  "authorization": "Test 123",\n' +
        '  "content-type": "application/json",\n' +
        '  "accept": "application/json, text/event-stream",\n' +
        '  "accept-language": "*",\n' +
        '  "sec-fetch-mode": "cors",\n' +
        '  "user-agent": "node",\n' +
        '  "accept-encoding": "gzip, deflate",\n' +
        '  "content-length": "163"\n' +
        '}'
    }
  ]
}
```
### 提供指令

你可以通过 `instructions` 选项向服务器提供指令：
```ts
const server = new FastMCP({
  name: "我的服务器",
  version: "1.0.0",
  instructions:
    '描述如何使用服务器及其功能的说明。\n\n客户端可以利用这些信息提升 LLM 对可用工具、资源等的理解。可以把它看作是给模型的“提示”。例如，这些信息可能会被添加到系统提示中。',
});
```
### 会话

`session` 对象是 `FastMCPSession` 的一个实例，它描述了活动的客户端会话。
```ts
server.sessions;
```
我们为每个客户端连接分配一个新的服务器实例，以实现客户端与服务器之间的一对一通信。

### 类型化服务器事件

你可以使用 `on` 方法监听服务器发出的事件：
```ts
server.on("connect", (event) => {
  console.log("客户端已连接:", event.session);
});

server.on("disconnect", (event) => {
  console.log("客户端已断开:", event.session);
});
```
## `FastMCPSession`

`FastMCPSession` 表示一个客户端会话，并提供与该客户端交互的方法。

有关如何获取 `FastMCPSession` 实例的示例，请参阅 [Sessions](#sessions)。

### `requestSampling`

`requestSampling` 创建一个 [sampling](https://modelcontextprotocol.io/docs/concepts/sampling) 请求并返回响应。
```ts
await session.requestSampling({
  messages: [
    {
      role: "user",
      content: {
        type: "text",
        text: "当前目录下有哪些文件？",
      },
    },
  ],
  systemPrompt: "你是一个有用的文件系统助手。",
  includeContext: "thisServer",
  maxTokens: 100,
});
```
#### 选项

`requestSampling` 接受一个可选的第二个参数，用于请求选项：
```ts
await session.requestSampling(
  {
    messages: [
      {
        role: "user",
        content: {
          type: "text",
          text: "当前目录下有哪些文件？",
        },
      },
    ],
    systemPrompt: "你是一个有用的文件系统助手。",
    includeContext: "thisServer",
    maxTokens: 100,
  },
  {
    // 进度回调——在收到进度通知时调用
    onprogress: (progress) => {
      console.log(`进度：${progress.progress}/${progress.total}`);
    },

    // 用于取消请求的终止信号
    signal: abortController.signal,

    // 请求超时时间，单位为毫秒（默认值：DEFAULT_REQUEST_TIMEOUT_MSEC）
    timeout: 30000,

    // 进度通知是否重置超时时间（默认值：false）
    resetTimeoutOnProgress: true,

    // 最大总超时时间，无论进度如何（无默认值）
    maxTotalTimeout: 60000,
  },
);
```
**选项：**

* `onprogress?: (progress: Progress) => void` - 接收来自远端的进度通知的回调
* `signal?: AbortSignal` - 用于取消请求的终止信号
* `timeout?: number` - 请求超时时间，单位为毫秒
* `resetTimeoutOnProgress?: boolean` - 进度通知是否重置超时
* `maxTotalTimeout?: number` - 无论是否有进度通知，最大总超时时间

### `clientCapabilities`

`clientCapabilities` 属性包含客户端的功能信息。
```ts
session.clientCapabilities;
```
### `loggingLevel`

`loggingLevel` 属性描述了由客户端设置的日志级别。
```ts
session.loggingLevel;
```
### `roots`

`roots` 属性包含客户端设置的根目录。
```ts
session.roots;
```
### `server`

`server` 属性包含与会话关联的 MCP 服务器实例。
```ts
session.server;
```
### 类型化会话事件

你可以使用 `on` 方法监听会话发出的事件：
```ts
session.on("rootsChanged", (event) => {
  console.log("根目录已更改:", event.roots);
});

session.on("error", (event) => {
  console.error("错误:", event.error);
});
```
## 运行你的服务器

### 使用 `mcp-cli` 进行测试

测试和调试服务器最快的方法是使用 `fastmcp dev`：
```bash
npx fastmcp dev server.js
npx fastmcp dev server.ts
```
这将使用 [`mcp-cli`](https://github.com/wong2/mcp-cli) 在终端中运行你的服务器，以便测试和调试你的 MCP 服务器。

### 使用 `MCP Inspector` 检查

另一种方式是使用官方的 [`MCP Inspector`](https://modelcontextprotocol.io/docs/tools/inspector)，通过 Web UI 来检查你的服务器：
```bash
npx fastmcp inspect server.ts
```
## 常见问题

### 如何在 Claude Desktop 中使用？

按照指南 <https://modelcontextprotocol.io/quickstart/user> 操作，并添加以下配置：
```json
{
  "mcpServers": {
    "my-mcp-server": {
      "command": "npx",
      "args": ["tsx", "/PATH/TO/YOUR_PROJECT/src/index.ts"],
      "env": {
        "YOUR_ENV_VAR": "value"
      }
    }
  }
}
```
### 如何在代理后运行 FastMCP？

参考此 [issue](https://github.com/punkpeye/fastmcp/issues/25#issuecomment-3004568732) 查看使用 FastMCP 搭配 `express` 和 `http-proxy-middleware` 的示例。

## 展示

> \[!NOTE]
>
> 如果你使用 FastMCP 开发了服务器，请 [提交 PR](https://github.com/punkpeye/fastmcp) 在此处展示！

> \[!NOTE]
>
> 如果你正在寻找一个样板仓库来构建自己的 MCP 服务器，请查看 [fastmcp-boilerplate](https://github.com/punkpeye/fastmcp-boilerplate)。

* [apinetwork/piapi-mcp-server](https://github.com/apinetwork/piapi-mcp-server) - 使用 Midjourney/Flux/Kling/LumaLabs/Udio/Chrip/Trellis 生成媒体
* [domdomegg/computer-use-mcp](https://github.com/domdomegg/computer-use-mcp) - 控制你的电脑
* [LiterallyBlah/Dradis-MCP](https://github.com/LiterallyBlah/Dradis-MCP) – 在 Dradis 中管理项目和漏洞
* [Meeting-Baas/meeting-mcp](https://github.com/Meeting-Baas/meeting-mcp) - 创建会议机器人、搜索转录并管理录音数据
* [drumnation/unsplash-smart-mcp-server](https://github.com/drumnation/unsplash-smart-mcp-server) – 让 AI 代理无缝搜索、推荐并从 Unsplash 获取专业库存照片
* [ssmanji89/halopsa-workflows-mcp](https://github.com/ssmanji89/halopsa-workflows-mcp) - HaloPSA 工作流与 AI 助手的集成
* [aiamblichus/mcp-chat-adapter](https://github.com/aiamblichus/mcp-chat-adapter) – 为 LLM 提供简洁的聊天补全接口
* [eyaltoledano/claude-task-master](https://github.com/eyaltoledano/claude-task-master) – 由 FastMCP 驱动的先进 AI 项目/任务管理器
* [cswkim/discogs-mcp-server](https://github.com/cswkim/discogs-mcp-server) - 连接 Discogs API 以与你的音乐收藏交互
* [Panzer-Jack/feuse-mcp](https://github.com/Panzer-Jack/feuse-mcp) - 前端实用 MCP 工具 - 为 Web 开发者提供自动化 API 集成和代码生成的基本工具
* [sunra-ai/sunra-clients](https://github.com/sunra-ai/sunra-clients/tree/main/mcp-server) - Sunra.ai 是一个面向开发者的生成式媒体平台，提供高性能的 AI 模型推理能力。
* [foxtrottwist/shortcuts-mcp](https://github.com/foxtrottwist/shortcuts-mcp) - 将 Claude 连接到 macOS 快捷指令，实现系统自动化、应用集成和交互式工作流

## 致谢

* FastMCP 受到 [Jonathan Lowin](https://github.com/jlowin) 的 [Python 实现](https://github.com/jlowin/fastmcp) 的启发。
* 部分代码来自 [LiteMCP](https://github.com/wong2/litemcp)。
* 部分代码来自 [Model Context protocolでSSEをやってみる](https://dev.classmethod.jp/articles/mcp-sse/)。