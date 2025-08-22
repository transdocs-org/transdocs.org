# MCP TypeScript SDK ![NPM 版本](https://img.shields.io/npm/v/%40modelcontextprotocol%2Fsdk) ![MIT 许可证](https://img.shields.io/npm/l/%40modelcontextprotocol%2Fsdk)

## 目录

* [概述](#概述)
* [安装](#安装)
* [快速入门](#快速入门)
* [什么是 MCP？](#什么是-mcp)
* [核心概念](#核心概念)
  * [服务器](#服务器)
  * [资源](#资源)
  * [工具](#工具)
  * [提示](#提示)
  * [补全](#补全)
  * [采样](#采样)
* [运行你的服务器](#运行你的服务器)
  * [标准输入输出（stdio）](#标准输入输出stdio)
  * [可流式 HTTP](#可流式-http)
  * [测试与调试](#测试与调试)
* [示例](#示例)
  * [回声服务器](#回声服务器)
  * [SQLite 浏览器](#sqlite-浏览器)
* [高级用法](#高级用法)
  * [动态服务器](#动态服务器)
  * [底层服务器](#底层服务器)
  * [编写 MCP 客户端](#编写-mcp-客户端)
  * [将授权请求代理到上游](#将授权请求代理到上游)
  * [向后兼容性](#向后兼容性)
* [文档](#文档)
* [贡献](#贡献)
* [许可证](#许可证)

## 概述

模型上下文协议（Model Context Protocol）允许应用程序以标准化的方式为大语言模型（LLM）提供上下文，将提供上下文的职责与实际的 LLM 交互分离。这个 TypeScript SDK 实现了完整的 MCP 规范，使以下操作变得简单：

* 构建可以连接到任何 MCP 服务器的 MCP 客户端
* 创建暴露资源、提示和工具的 MCP 服务器
* 使用标准传输协议如标准输入输出（stdio）和可流式 HTTP
* 处理所有 MCP 协议消息和生命周期事件

## 安装
```bash
npm install @modelcontextprotocol/sdk
```
> ⚠️ MCP 要求使用 Node.js v18.x 或更高版本以确保正常运行。

## 快速开始

让我们创建一个简单的 MCP 服务器，该服务器提供一个计算器工具和一些数据：
```typescript
import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// 创建一个MCP服务器
const server = new McpServer({
  name: "demo-server",
  version: "1.0.0"
});

// 添加一个加法工具
server.registerTool("add",
  {
    title: "加法工具",
    description: "将两个数字相加",
    inputSchema: { a: z.number(), b: z.number() }
  },
  async ({ a, b }) => ({
    content: [{ type: "text", text: String(a + b) }]
  })
);

// 添加一个动态问候资源
server.registerResource(
  "greeting",
  new ResourceTemplate("greeting://{name}", { list: undefined }),
  { 
    title: "问候资源",      // 用于UI的显示名称
    description: "动态生成问候语"
  },
  async (uri, { name }) => ({
    contents: [{
      uri: uri.href,
      text: `你好，${name}！`
    }]
  })
);

// 开始在标准输入接收消息，并在标准输出发送消息
const transport = new StdioServerTransport();
await server.connect(transport);
```
## 什么是 MCP？

[模型上下文协议（MCP）](https://modelcontextprotocol.io) 使你能够构建以安全、标准化的方式向 LLM 应用程序公开数据和功能的服务器。你可以将其想象成一种 Web API，但它是专门为 LLM 交互设计的。MCP 服务器具备以下能力：

* 通过 **资源（Resources）** 公开数据（可以将其类比为 GET 请求端点；用于将信息加载到 LLM 的上下文中）
* 通过 **工具（Tools）** 提供功能（可以将其类比为 POST 请求端点；用于执行代码或产生其他副作用）
* 通过 **提示（Prompts）** 定义交互模式（LLM 交互的可重用模板）
* 以及其他功能！

## 核心概念

### 服务器

McpServer 是你与 MCP 协议交互的核心接口。它负责处理连接管理、协议合规性和消息路由：
```typescript
const server = new McpServer({
  name: "my-app",
  version: "1.0.0"
});
```
### 资源

资源是您向大语言模型（LLM）提供数据的方式。它们类似于 REST API 中的 GET 接口：它们提供数据，但不应执行大量计算，也不应产生副作用：
```typescript
// 静态资源
server.registerResource(
  "config",
  "config://app",
  {
    title: "应用程序配置",
    description: "应用程序配置数据",
    mimeType: "text/plain"
  },
  async (uri) => ({
    contents: [{
      uri: uri.href,
      text: "应用程序配置内容"
    }]
  })
);

// 带参数的动态资源
server.registerResource(
  "user-profile",
  new ResourceTemplate("users://{userId}/profile", { list: undefined }),
  {
    title: "用户资料",
    description: "用户资料信息"
  },
  async (uri, { userId }) => ({
    contents: [{
      uri: uri.href,
      text: `用户 ${userId} 的资料信息`
    }]
  })
);

// 支持上下文感知补全的资源
server.registerResource(
  "repository",
  new ResourceTemplate("github://repos/{owner}/{repo}", {
    list: undefined,
    complete: {
      // 根据先前解析的参数提供智能补全
      repo: (value, context) => {
        if (context?.arguments?.["owner"] === "org1") {
          return ["project1", "project2", "project3"].filter(r => r.startsWith(value));
        }
        return ["default-repo"].filter(r => r.startsWith(value));
      }
    }
  }),
  {
    title: "GitHub 仓库",
    description: "仓库信息"
  },
  async (uri, { owner, repo }) => ({
    contents: [{
      uri: uri.href,
      text: `仓库：${owner}/${repo}`
    }]
  })
);
```
### 工具

工具允许 LLM 通过你的服务器执行操作。与资源不同，工具通常会执行计算并产生副作用：
```typescript
// 带参数的简单工具
server.registerTool(
  "calculate-bmi",
  {
    title: "BMI 计算器",
    description: "计算身体质量指数",
    inputSchema: {
      weightKg: z.number(),
      heightM: z.number()
    }
  },
  async ({ weightKg, heightM }) => ({
    content: [{
      type: "text",
      text: String(weightKg / (heightM * heightM))
    }]
  })
);

// 调用外部 API 的异步工具
server.registerTool(
  "fetch-weather",
  {
    title: "天气获取器",
    description: "获取城市天气数据",
    inputSchema: { city: z.string() }
  },
  async ({ city }) => {
    const response = await fetch(`https://api.weather.com/${city}`);
    const data = await response.text();
    return {
      content: [{ type: "text", text: data }]
    };
  }
);

// 返回 ResourceLinks 的工具
server.registerTool(
  "list-files",
  {
    title: "文件列表",
    description: "列出项目文件",
    inputSchema: { pattern: z.string() }
  },
  async ({ pattern }) => ({
    content: [
      { type: "text", text: `找到匹配 "${pattern}" 的文件：` },
      // ResourceLinks 允许工具返回文件引用而非文件内容
      {
        type: "resource_link",
        uri: "file:///project/README.md",
        name: "README.md",
        mimeType: "text/markdown",
        description: '一个 README 文件'
      },
      {
        type: "resource_link",
        uri: "file:///project/src/index.ts",
        name: "index.ts",
        mimeType: "text/typescript",
        description: '一个索引文件'
      }
    ]
  })
);
```
#### 资源链接（ResourceLinks）

工具可以返回 `ResourceLink` 对象，以引用资源而不嵌入其完整内容。这在处理大型文件或大量资源时对性能至关重要——客户端随后可以使用提供的 URI 有选择地读取所需的资源。

### 提示（Prompts）

提示是可重用的模板，帮助大语言模型（LLM）有效地与您的服务器交互：
```typescript
import { completable } from "@modelcontextprotocol/sdk/server/completable.js";

server.registerPrompt(
  "review-code",
  {
    title: "代码审查",
    description: "检查代码中的最佳实践和潜在问题",
    argsSchema: { code: z.string() }
  },
  ({ code }) => ({
    messages: [{
      role: "user",
      content: {
        type: "text",
        text: `请审查以下代码：\n\n${code}`
      }
    }]
  })
);

// 带上下文感知补全功能的提示
server.registerPrompt(
  "team-greeting",
  {
    title: "团队问候",
    description: "为团队成员生成问候语",
    argsSchema: {
      department: completable(z.string(), (value) => {
        // 部门建议
        return ["engineering", "sales", "marketing", "support"].filter(d => d.startsWith(value));
      }),
      name: completable(z.string(), (value, context) => {
        // 根据所选部门提供建议姓名
        const department = context?.arguments?.["department"];
        if (department === "engineering") {
          return ["Alice", "Bob", "Charlie"].filter(n => n.startsWith(value));
        } else if (department === "sales") {
          return ["David", "Eve", "Frank"].filter(n => n.startsWith(value));
        } else if (department === "marketing") {
          return ["Grace", "Henry", "Iris"].filter(n => n.startsWith(value));
        }
        return ["Guest"].filter(n => n.startsWith(value));
      })
    }
  },
  ({ department, name }) => ({
    messages: [{
      role: "assistant",
      content: {
        type: "text",
        text: `你好 ${name}，欢迎加入 ${department} 团队！`
      }
    }]
  })
);
```
### 补全功能

MCP 支持参数补全，以帮助用户填写提示参数和资源模板参数。有关资源补全和提示补全的示例，请参见上面的 [资源补全](#resources) 和 [提示补全](#prompts)。

#### 客户端用法
```typescript
// 请求任意参数的补全
const result = await client.complete({
  ref: {
    type: "ref/prompt",  // 或 "ref/resource"
    name: "示例"         // 或 uri: "template://..."
  },
  argument: {
    name: "参数名称",
    value: "部分输入"     // 用户到目前为止输入的内容
  },
  context: {             // 可选：包含之前已解析的参数
    arguments: {
      之前的参数: "值"
    }
  }
});
```
### 显示名称和元数据

所有资源、工具和提示都支持一个可选的 `title` 字段，用于在用户界面中更好地展示。`title` 用作显示名称，而 `name` 仍然是唯一的标识符。

**注意：** 推荐新代码使用 `register*` 方法（`registerTool`、`registerPrompt`、`registerResource`）。旧的方法（`tool`、`prompt`、`resource`）仍然可用，以保证向后兼容性。

#### 工具的标题优先级

对于工具来说，有两种方式可以指定标题：

* 工具配置中的 `title` 字段
* `annotations.title` 字段（当使用带有注解的旧版 `tool()` 方法时）

优先级顺序为：`title` → `annotations.title` → `name`
```typescript
// 使用 registerTool（推荐方式）
server.registerTool("my_tool", {
  title: "我的工具",              // 此标题具有优先权
  annotations: {
    title: "注释标题"              // 如果设置了 title，则此设置会被忽略
  }
}, handler);

// 使用带有注释的 tool（旧版 API）
server.tool("my_tool", "描述", {
  title: "注释标题"               // 此标题将被用作标题
}, handler);
```
在构建客户端时，请使用提供的工具方法获取合适的显示名称：
```typescript
import { getDisplayName } from "@modelcontextprotocol/sdk/shared/metadataUtils.js";

// 自动处理优先级：title → annotations.title → name
const displayName = getDisplayName(tool);
```
### 采样

MCP 服务器可以向支持采样的连接客户端请求 LLM 补全结果。
```typescript
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

const mcpServer = new McpServer({
  name: "tools-with-sample-server",
  version: "1.0.0",
});

// 工具：使用LLM采样对任意文本进行摘要
mcpServer.registerTool(
  "summarize",
  {
    description: "使用LLM对任意文本进行摘要",
    inputSchema: {
      text: z.string().describe("需要摘要的文本"),
    },
  },
  async ({ text }) => {
    // 通过MCP采样调用LLM
    const response = await mcpServer.server.createMessage({
      messages: [
        {
          role: "user",
          content: {
            type: "text",
            text: `请简洁地总结以下文本：\n\n${text}`,
          },
        },
      ],
      maxTokens: 500,
    });

    return {
      content: [
        {
          type: "text",
          text: response.content.type === "text" ? response.content.text : "无法生成摘要",
        },
      ],
    };
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await mcpServer.connect(transport);
  console.log("MCP服务器正在运行...");
}

main().catch((error) => {
  console.error("服务器错误:", error);
  process.exit(1);
});
```
## 运行你的服务器

使用 TypeScript 编写的 MCP 服务器需要连接到某种传输方式才能与客户端通信。启动服务器的方式取决于所选择的传输方式：

### stdio

适用于命令行工具和直接集成：
```typescript
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer({
  name: "示例服务器",
  version: "1.0.0"
});

// ... 设置服务器资源、工具和提示词 ...

const transport = new StdioServerTransport();
await server.connect(transport);
```
### 可流式传输的 HTTP

对于远程服务器，应设置一个可流式传输的 HTTP 传输协议，以处理客户端请求以及服务器到客户端的通知。

#### 带会话管理

在某些情况下，服务器需要是有状态的。这可以通过[会话管理](https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#session-management)实现。
```typescript
import express from "express";
import { randomUUID } from "node:crypto";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { isInitializeRequest } from "@modelcontextprotocol/sdk/types.js"

const app = express();
app.use(express.json());

// 使用会话 ID 存储传输通道的映射
const transports: { [sessionId: string]: StreamableHTTPServerTransport } = {};

// 处理客户端到服务器通信的 POST 请求
app.post('/mcp', async (req, res) => {
  // 检查是否存在会话 ID
  const sessionId = req.headers['mcp-session-id'] as string | undefined;
  let transport: StreamableHTTPServerTransport;

  if (sessionId && transports[sessionId]) {
    // 复用已有的传输通道
    transport = transports[sessionId];
  } else if (!sessionId && isInitializeRequest(req.body)) {
    // 新的初始化请求
    transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: () => randomUUID(),
      onsessioninitialized: (sessionId) => {
        // 按会话 ID 存储传输通道
        transports[sessionId] = transport;
      },
      // 默认出于向后兼容的考虑禁用 DNS 重新绑定保护。如果您在本地运行此服务器，
      // 请确保设置：
      // enableDnsRebindingProtection: true,
      // allowedHosts: ['127.0.0.1'],
    });

    // 在关闭时清理传输通道
    transport.onclose = () => {
      if (transport.sessionId) {
        delete transports[transport.sessionId];
      }
    };
    const server = new McpServer({
      name: "示例服务器",
      version: "1.0.0"
    });

    // ... 设置服务器资源、工具和提示 ...

    // 连接到 MCP 服务器
    await server.connect(transport);
  } else {
    // 无效请求
    res.status(400).json({
      jsonrpc: '2.0',
      error: {
        code: -32000,
        message: '错误请求：未提供有效的会话 ID',
      },
      id: null,
    });
    return;
  }

  // 处理请求
  await transport.handleRequest(req, res, req.body);
});

// 可复用的 GET 和 DELETE 请求处理器
const handleSessionRequest = async (req: express.Request, res: express.Response) => {
  const sessionId = req.headers['mcp-session-id'] as string | undefined;
  if (!sessionId || !transports[sessionId]) {
    res.status(400).send('无效或缺失的会话 ID');
    return;
  }
  
  const transport = transports[sessionId];
  await transport.handleRequest(req, res);
};

// 处理通过 SSE 的服务器到客户端通知的 GET 请求
app.get('/mcp', handleSessionRequest);

// 处理会话终止的 DELETE 请求
app.delete('/mcp', handleSessionRequest);

app.listen(3000);
```
> [!提示]  
> 在远程环境中使用时，请确保在CORS中允许头部参数 `mcp-session-id`。否则，可能会导致 `Bad Request: No valid session ID provided` 错误。请阅读以下章节以获取示例。

#### 基于浏览器客户端的CORS配置

如果你希望浏览器上的MCP客户端可以访问你的服务器，则需要配置CORS头部。必须暴露 `Mcp-Session-Id` 头部，以便浏览器客户端能够访问它：
```typescript
import cors from 'cors';

// 在你的 MCP 路由之前添加 CORS 中间件
app.use(cors({
  origin: '*', // 生产环境请按需配置，例如：
  // origin: ['https://your-remote-domain.com', 'https://your-other-remote-domain.com'],
  exposedHeaders: ['Mcp-Session-Id'],
  allowedHeaders: ['Content-Type', 'mcp-session-id'],
}));
```
此配置是必需的，原因如下：

* MCP 可流式传输的 HTTP 传输协议使用 `Mcp-Session-Id` 请求头进行会话管理  
* 浏览器限制了对响应头的访问，除非通过 CORS 显式暴露  
* 缺少此配置时，基于浏览器的客户端将无法从初始化响应中读取会话 ID  

#### 不使用会话管理（无状态）

对于不需要会话管理的简单使用场景：
```typescript
const app = express();
app.use(express.json());

app.post('/mcp', async (req: Request, res: Response) => {
  // 无状态模式下，为每个请求创建新的传输实例和服务器实例，
  // 以确保完全隔离。单个实例会导致多个客户端并发连接时请求ID冲突。
  
  try {
    const server = getServer(); 
    const transport: StreamableHTTPServerTransport = new StreamableHTTPServerTransport({
      sessionIdGenerator: undefined,
    });
    res.on('close', () => {
      console.log('请求已关闭');
      transport.close();
      server.close();
    });
    await server.connect(transport);
    await transport.handleRequest(req, res, req.body);
  } catch (error) {
    console.error('处理MCP请求时出错:', error);
    if (!res.headersSent) {
      res.status(500).json({
        jsonrpc: '2.0',
        error: {
          code: -32603,
          message: '内部服务器错误',
        },
        id: null,
      });
    }
  }
});

// 无状态模式下不支持SSE通知
app.get('/mcp', async (req: Request, res: Response) => {
  console.log('收到GET MCP请求');
  res.writeHead(405).end(JSON.stringify({
    jsonrpc: "2.0",
    error: {
      code: -32000,
      message: "方法不允许。"
    },
    id: null
  }));
});

// 无状态模式下不需要终止会话
app.delete('/mcp', async (req: Request, res: Response) => {
  console.log('收到DELETE MCP请求');
  res.writeHead(405).end(JSON.stringify({
    jsonrpc: "2.0",
    error: {
      code: -32000,
      message: "方法不允许。"
    },
    id: null
  }));
});


// 启动服务器
const PORT = 3000;
setupServer().then(() => {
  app.listen(PORT, (error) => {
    if (error) {
      console.error('启动服务器失败:', error);
      process.exit(1);
    }
    console.log(`MCP 无状态可流式传输HTTP服务器正在端口${PORT}上监听`);
  });
}).catch(error => {
  console.error('设置服务器失败:', error);
  process.exit(1);
});

```
这种无状态方法适用于：

* 简单的 API 封装器
* 每个请求相互独立的 RESTful 场景
* 没有共享会话状态的水平扩展部署

#### DNS 重新绑定保护

Streamable HTTP 传输包含 DNS 重新绑定保护功能，以防止安全漏洞。默认情况下，出于向后兼容的考虑，此保护功能是**禁用的**。

**重要提示**：如果您正在本地运行此服务器，请启用 DNS 重新绑定保护：
```typescript
const transport = new StreamableHTTPServerTransport({
  sessionIdGenerator: () => randomUUID(),
  enableDnsRebindingProtection: true,

  allowedHosts: ['127.0.0.1', ...],
  allowedOrigins: ['https://yourdomain.com', 'https://www.yourdomain.com']
});
```
### 测试与调试

要测试你的服务器，可以使用 [MCP Inspector](https://github.com/modelcontextprotocol/inspector)。有关更多信息，请参见其 README 文件。

## 示例

### 回显服务器

一个演示资源、工具和提示的简单服务器：
```typescript
import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

const server = new McpServer({
  name: "echo-server",
  version: "1.0.0"
});

server.registerResource(
  "echo",
  new ResourceTemplate("echo://{message}", { list: undefined }),
  {
    title: "回显资源",
    description: "将消息以资源形式回显"
  },
  async (uri, { message }) => ({
    contents: [{
      uri: uri.href,
      text: `资源回显: ${message}`
    }]
  })
);

server.registerTool(
  "echo",
  {
    title: "回显工具",
    description: "将提供的消息进行回显",
    inputSchema: { message: z.string() }
  },
  async ({ message }) => ({
    content: [{ type: "text", text: `工具回显: ${message}` }]
  })
);

server.registerPrompt(
  "echo",
  {
    title: "回显提示",
    description: "创建一个提示来处理消息",
    argsSchema: { message: z.string() }
  },
  ({ message }) => ({
    messages: [{
      role: "user",
      content: {
        type: "text",
        text: `请处理此消息: ${message}`
      }
    }]
  })
);
```
### SQLite 浏览器

一个更复杂的示例，展示了数据库的集成：
```typescript
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import sqlite3 from "sqlite3";
import { promisify } from "util";
import { z } from "zod";

const server = new McpServer({
  name: "sqlite-explorer",
  version: "1.0.0"
});

// 辅助函数用于创建数据库连接
const getDb = () => {
  const db = new sqlite3.Database("database.db");
  return {
    all: promisify<string, any[]>(db.all.bind(db)),
    close: promisify(db.close.bind(db))
  };
};

server.registerResource(
  "schema",
  "schema://main",
  {
    title: "数据库结构",
    description: "SQLite数据库结构",
    mimeType: "text/plain"
  },
  async (uri) => {
    const db = getDb();
    try {
      const tables = await db.all(
        "SELECT sql FROM sqlite_master WHERE type='table'"
      );
      return {
        contents: [{
          uri: uri.href,
          text: tables.map((t: {sql: string}) => t.sql).join("\n")
        }]
      };
    } finally {
      await db.close();
    }
  }
);

server.registerTool(
  "query",
  {
    title: "SQL查询",
    description: "在数据库上执行SQL查询",
    inputSchema: { sql: z.string() }
  },
  async ({ sql }) => {
    const db = getDb();
    try {
      const results = await db.all(sql);
      return {
        content: [{
          type: "text",
          text: JSON.stringify(results, null, 2)
        }]
      };
    } catch (err: unknown) {
      const error = err as Error;
      return {
        content: [{
          type: "text",
          text: `错误: ${error.message}`
        }],
        isError: true
      };
    } finally {
      await db.close();
    }
  }
);
```
## 高级用法

### 动态服务器

如果你希望先提供一组初始的工具/提示/资源，之后再根据用户的操作或外部状态的变化添加额外的内容，则可以在 Server 连接 *之后* 添加/更新/移除这些内容。这将自动触发相应的 `listChanged` 通知：
```ts
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";

const server = new McpServer({
  name: "动态示例",
  version: "1.0.0"
});

const listMessageTool = server.tool(
  "listMessages",
  { channel: z.string() },
  async ({ channel }) => ({
    content: [{ type: "text", text: await listMessages(channel) }]
  })
);

const putMessageTool = server.tool(
  "putMessage",
  { channel: z.string(), message: z.string() },
  async ({ channel, message }) => ({
    content: [{ type: "text", text: await putMessage(channel, message) }]
  })
);
// 在我们升级权限之前，`putMessage` 是禁用的（不会出现在 listTools 中）
putMessageTool.disable()

const upgradeAuthTool = server.tool(
  "upgradeAuth",
  { permission: z.enum(["write", "admin"])},
  // 此处的任何更改都会自动发出 `listChanged` 通知
  async ({ permission }) => {
    const { ok, err, previous } = await upgradeAuthAndStoreToken(permission)
    if (!ok) return {content: [{ type: "text", text: `错误: ${err}` }]}

    // 如果我们之前只有只读权限，现在 'putMessage' 就可用
    if (previous === "read") {
      putMessageTool.enable()
    }

    if (permission === 'write') {
      // 如果我们刚刚升级到 'write' 权限，我们仍然可以调用 'upgradeAuth' 
      // 但只能升级到 'admin'。 
      upgradeAuthTool.update({
        paramsSchema: { permission: z.enum(["admin"]) }, // 更改验证规则
      })
    } else {
      // 如果我们现在是管理员，就没有更高的权限可升级了，因此完全移除该工具
      upgradeAuthTool.remove()
    }
  }
)

// 正常连接
const transport = new StdioServerTransport();
await server.connect(transport);
```
### 通过通知防抖提升网络效率

在执行触发通知的批量更新操作时（例如，在循环中启用或禁用多个工具），SDK 可能在短时间内发送大量消息。为了提高性能并减少网络流量，您可以启用通知防抖功能。

该功能会将针对同一通知类型的多次快速调用合并为一条消息。例如，如果您连续禁用五个工具，则只会发送一条 `notifications/tools/list_changed` 消息，而不是发送五条。

> \[!IMPORTANT]  
> 此功能专为参数中不包含唯一数据的“简单”通知而设计。为防止发生数据丢失，对于包含 `params` 对象或 `relatedRequestId` 的通知，将**自动绕过**防抖机制。此类通知始终会立即发送。

该功能为可选功能，需在服务器初始化期间进行配置。
```typescript
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

const server = new McpServer(
  {
    name: "高效服务器",
    version: "1.0.0"
  },
  {
    // 为特定方法启用通知去抖动
    debouncedNotificationMethods: [
      'notifications/tools/list_changed',
      'notifications/resources/list_changed',
      'notifications/prompts/list_changed'
    ]
  }
);

// 现在，对工具、资源或提示的任何快速更改都将导致每种类型只发送一个合并后的通知。
server.registerTool("tool1", ...).disable();
server.registerTool("tool2", ...).disable();
server.registerTool("tool3", ...).disable();
// 只发送一个 'notifications/tools/list_changed' 通知。
```
### 低级服务器

如需更多控制，你可以直接使用低级的 `Server` 类：
```typescript
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  ListPromptsRequestSchema,
  GetPromptRequestSchema
} from "@modelcontextprotocol/sdk/types.js";

const server = new Server(
  {
    name: "示例服务器",
    version: "1.0.0"
  },
  {
    capabilities: {
      prompts: {}
    }
  }
);

server.setRequestHandler(ListPromptsRequestSchema, async () => {
  return {
    prompts: [{
      name: "示例提示",
      description: "一个示例提示模板",
      arguments: [{
        name: "参数1",
        description: "示例参数",
        required: true
      }]
    }]
  };
});

server.setRequestHandler(GetPromptRequestSchema, async (request) => {
  if (request.params.name !== "示例提示") {
    throw new Error("未知提示");
  }
  return {
    description: "示例提示",
    messages: [{
      role: "用户",
      content: {
        type: "文本",
        text: "示例提示文本"
      }
    }]
  };
});

const transport = new StdioServerTransport();
await server.connect(transport);
```
### 获取用户输入

MCP 服务器可以通过提示功能请求用户提供额外的信息。这在需要用户输入或确认的交互式工作流程中非常有用：
```typescript
// 服务端：餐厅预订工具，询问替代选项
server.tool(
  "book-restaurant",
  { 
    restaurant: z.string(),
    date: z.string(),
    partySize: z.number()
  },
  async ({ restaurant, date, partySize }) => {
    // 检查可用性
    const available = await checkAvailability(restaurant, date, partySize);
    
    if (!available) {
      // 询问用户是否尝试替代日期
      const result = await server.server.elicitInput({
        message: `在 ${restaurant} 于 ${date} 没有空桌。您想查看替代日期吗？`,
        requestedSchema: {
          type: "object",
          properties: {
            checkAlternatives: {
              type: "boolean",
              title: "查看替代日期",
              description: "您是否想让我查看其他日期？"
            },
            flexibleDates: {
              type: "string",
              title: "日期灵活性",
              description: "您的日期有多灵活？",
              enum: ["next_day", "same_week", "next_week"],
              enumNames: ["次日", "同周", "下周"]
            }
          },
          required: ["checkAlternatives"]
        }
      });

      if (result.action === "accept" && result.content?.checkAlternatives) {
        const alternatives = await findAlternatives(
          restaurant, 
          date, 
          partySize, 
          result.content.flexibleDates as string
        );
        return {
          content: [{
            type: "text",
            text: `找到以下替代选项：${alternatives.join(", ")}`
          }]
        };
      }
      
      return {
        content: [{
          type: "text",
          text: "未进行预订。原始日期不可用。"
        }]
      };
    }
    
    // 预订餐桌
    await makeBooking(restaurant, date, partySize);
    return {
      content: [{
        type: "text",
        text: `已为您预订 ${partySize} 人在 ${restaurant} 于 ${date} 的餐桌`
      }]
    };
  }
);
```
客户端：处理获取请求
```typescript
// 这是一个占位符 - 请根据你的UI框架进行实现
async function getInputFromUser(message: string, schema: any): Promise<{
  action: "accept" | "decline" | "cancel";
  data?: Record<string, any>;
}> {
  // 这应该根据具体的应用进行实现
  throw new Error("getInputFromUser 必须为你的平台实现");
}

client.setRequestHandler(ElicitRequestSchema, async (request) => {
  const userResponse = await getInputFromUser(
    request.params.message, 
    request.params.requestedSchema
  );
  
  return {
    action: userResponse.action,
    content: userResponse.action === "accept" ? userResponse.data : undefined
  };
});
```
**注意**：Elicitation（提示）需要客户端支持。客户端必须在初始化期间声明 `elicitation` 能力。

### 编写 MCP 客户端

SDK 提供了一个高层的客户端接口：
```typescript
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

const transport = new StdioClientTransport({
  command: "node",
  args: ["server.js"]
});

const client = new Client(
  {
    name: "示例客户端",
    version: "1.0.0"
  }
);

await client.connect(transport);

// 列出提示信息
const prompts = await client.listPrompts();

// 获取提示信息
const prompt = await client.getPrompt({
  name: "示例提示",
  arguments: {
    arg1: "值"
  }
});

// 列出资源
const resources = await client.listResources();

// 读取资源
const resource = await client.readResource({
  uri: "file:///example.txt"
});

// 调用工具
const result = await client.callTool({
  name: "示例工具",
  arguments: {
    arg1: "值"
  }
});
```
### 代理上游的代理授权请求

您可以将 OAuth 请求代理到外部授权提供者：
```typescript
import express from 'express';
import { ProxyOAuthServerProvider } from '@modelcontextprotocol/sdk/server/auth/providers/proxyProvider.js';
import { mcpAuthRouter } from '@modelcontextprotocol/sdk/server/auth/router.js';

const app = express();

const proxyProvider = new ProxyOAuthServerProvider({
    endpoints: {
        authorizationUrl: "https://auth.external.com/oauth2/v1/authorize",
        tokenUrl: "https://auth.external.com/oauth2/v1/token",
        revocationUrl: "https://auth.external.com/oauth2/v1/revoke",
    },
    verifyAccessToken: async (token) => {
        return {
            token,
            clientId: "123",
            scopes: ["openid", "email", "profile"],
        }
    },
    getClient: async (client_id) => {
        return {
            client_id,
            redirect_uris: ["http://localhost:3000/callback"],
        }
    }
})

app.use(mcpAuthRouter({
    provider: proxyProvider,
    issuerUrl: new URL("http://auth.external.com"),
    baseUrl: new URL("http://mcp.example.com"),
    serviceDocumentationUrl: new URL("https://docs.example.com/"),
}))
```
此设置允许你：

* 将 OAuth 请求转发到外部提供者
* 添加自定义的令牌验证逻辑
* 管理客户端注册
* 提供自定义的文档 URL
* 在将请求委托给外部提供者的同时，保持对 OAuth 流程的控制

### 向后兼容性

使用 StreamableHttp 传输的客户端和服务器可以通过以下方式与已弃用的 HTTP+SSE 传输（协议版本 2024-11-05）保持[向后兼容性](https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#backwards-compatibility)

#### 客户端兼容性

对于需要同时与 Streamable HTTP 和旧版 SSE 服务器通信的客户端：
```typescript
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";
import { SSEClientTransport } from "@modelcontextprotocol/sdk/client/sse.js";
let client: Client|undefined = undefined
const baseUrl = new URL(url);
try {
  client = new Client({
    name: 'streamable-http-client',
    version: '1.0.0'
  });
  const transport = new StreamableHTTPClientTransport(
    new URL(baseUrl)
  );
  await client.connect(transport);
  console.log("使用可流式 HTTP 传输已连接");
} catch (error) {
  // 如果返回 4xx 错误，则尝试使用较旧的 SSE 传输
  console.log("可流式 HTTP 连接失败，回退到 SSE 传输");
  client = new Client({
    name: 'sse-client',
    version: '1.0.0'
  });
  const sseTransport = new SSEClientTransport(baseUrl);
  await client.connect(sseTransport);
  console.log("使用 SSE 传输已连接");
}
```
#### 服务器端兼容性

对于需要同时支持可流式 HTTP 和旧客户端的服务器：
```typescript
import express from "express";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";

const server = new McpServer({
  name: "backwards-compatible-server",
  version: "1.0.0"
});

// ... 设置服务器资源、工具和提示词 ...

const app = express();
app.use(express.json());

// 为每种会话类型存储传输通道
const transports = {
  streamable: {} as Record<string, StreamableHTTPServerTransport>,
  sse: {} as Record<string, SSEServerTransport>
};

// 现代 Streamable HTTP 端点
app.all('/mcp', async (req, res) => {
  // 为现代客户端处理 Streamable HTTP 传输
  // 实现方式如“带会话管理”示例所示
  // ...
});

// 旧版 SSE 端点，供旧版客户端使用
app.get('/sse', async (req, res) => {
  // 创建 SSE 传输通道以支持旧版客户端
  const transport = new SSEServerTransport('/messages', res);
  transports.sse[transport.sessionId] = transport;
  
  res.on("close", () => {
    delete transports.sse[transport.sessionId];
  });
  
  await server.connect(transport);
});

// 旧版消息端点，供旧版客户端使用
app.post('/messages', async (req, res) => {
  const sessionId = req.query.sessionId as string;
  const transport = transports.sse[sessionId];
  if (transport) {
    await transport.handlePostMessage(req, res, req.body);
  } else {
    res.status(400).send('未找到对应 sessionId 的传输通道');
  }
});

app.listen(3000);
```
**注意**：SSE 传输现已弃用，取而代之的是可流式传输的 HTTP。新的实现应使用可流式传输的 HTTP，现有的 SSE 实现应计划进行迁移。

## 文档

* [模型上下文协议文档](https://modelcontextprotocol.io)
* [MCP 规范](https://spec.modelcontextprotocol.io)
* [示例服务器](https://github.com/modelcontextprotocol/servers)

## 贡献

欢迎在 GitHub 上提交问题和拉取请求：<https://github.com/modelcontextprotocol/typescript-sdk>。

## 许可证

本项目采用 MIT 许可证——详见 [LICENSE](https://github.com/modelcontextprotocol/typescript-sdk/tree/main/LICENSE) 文件。