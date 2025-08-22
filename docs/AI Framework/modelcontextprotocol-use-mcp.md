<div class="oranda-hide">

# 🦑 use-mcp 🦑

</div>

[![GitHub 最后提交](https://img.shields.io/github/last-commit/modelcontextprotocol/use-mcp?logo=github\&style=flat\&label=​)](https://github.com/modelcontextprotocol/use-mcp)  [![npm](https://img.shields.io/npm/v/use-mcp?label=​\&logo=npm)](https://www.npmjs.com/package/use-mcp) ![GitHub 许可证](https://img.shields.io/github/license/modelcontextprotocol/use-mcp)

一个轻量级的 React Hook，用于连接 [Model Context Protocol (MCP)](https://github.com/modelcontextprotocol) 服务器。简化了实现 MCP 标准的 AI 系统的身份验证和工具调用。

在线体验：[聊天演示](https://chat.use-mcp.dev) | [MCP 检查工具](https://inspector.use-mcp.dev) | [Cloudflare Workers AI 演示环境](https://playground.ai.cloudflare.com/)

## 安装方法
```bash
npm 安装 use-mcp
# 或者
pnpm 添加 use-mcp
# 或者
yarn 添加 use-mcp
```
## 开发

要运行包含所有示例和服务器的开发环境：
```bash
pnpm dev
```
这开始于：

* **检查器（Inspector）**: <http://localhost:5001> - MCP 服务器调试工具
* **聊天界面（Chat UI）**: <http://localhost:5002> - 示例聊天界面
* **Hono MCP 服务器**: <http://localhost:5101> - 示例 MCP 服务器
* **CF Agents MCP 服务器**: <http://localhost:5102> - Cloudflare Workers AI MCP 服务器

### 测试

集成测试位于 `test/` 目录，默认情况下以无头模式运行：
```bash
cd test && pnpm test              # 无头模式运行测试（默认）
cd test && pnpm test:headed       # 显示浏览器界面运行测试
cd test && pnpm test:watch        # 在监听模式下运行测试
cd test && pnpm test:ui           # 使用交互式UI运行测试
```
## 功能特性

* 🔄 自动连接管理，支持自动重连和重试
* 🔐 支持 OAuth 认证流程，包含弹窗和降级处理
* 📦 简洁的 React Hook 接口，用于集成 MCP
* 🧰 完全支持 MCP 工具、资源和提示模板
* 📄 可访问服务器资源并读取其内容
* 💬 使用服务器提供的提示模板
* 🧰 提供 TypeScript 类型，便于编辑器辅助和类型检查
* 📝 提供详细的日志记录用于调试
* 🌐 同时支持 HTTP 和 SSE（服务器发送事件）传输协议

## 快速开始
```tsx
import { useMcp } from 'use-mcp/react'

function MyAIComponent() {
  const {
    state,          // 连接状态: 'discovering' | 'pending_auth' | 'authenticating' | 'connecting' | 'loading' | 'ready' | 'failed'
    tools,          // 来自MCP服务器的可用工具
    resources,      // 来自MCP服务器的可用资源
    prompts,        // 来自MCP服务器的可用提示
    error,          // 如果连接失败时的错误信息
    callTool,       // 调用MCP服务器上的工具的函数
    readResource,   // 读取资源内容的函数
    getPrompt,      // 获取提示消息的函数
    retry,          // 手动重试连接
    authenticate,   // 手动触发身份验证
    clearStorage,   // 清除存储的令牌和凭证
  } = useMcp({
    url: 'https://your-mcp-server.com',
    clientName: '我的应用',
    autoReconnect: true,
  })

  // 处理不同状态
  if (state === 'failed') {
    return (
      <div>
        <p>连接失败: {error}</p>
        <button onClick={retry}>重试</button>
        <button onClick={authenticate}>手动验证</button>
      </div>
    )
  }

  if (state !== 'ready') {
    return <div>正在连接AI服务...</div>
  }

  // 使用可用工具
  const handleSearch = async () => {
    try {
      const result = await callTool('search', { query: '示例搜索' })
      console.log('搜索结果:', result)
    } catch (err) {
      console.error('调用工具失败:', err)
    }
  }

  return (
    <div>
      <h2>可用工具: {tools.length}</h2>
      <ul>
        {tools.map(tool => (
          <li key={tool.name}>{tool.name}</li>
        ))}
      </ul>
      <button onClick={handleSearch}>搜索</button>
      
      {/* 示例：显示并读取资源 */}
      {resources.length > 0 && (
        <div>
          <h3>资源: {resources.length}</h3>
          <button onClick={async () => {
            const content = await readResource(resources[0].uri)
            console.log('资源内容:', content)
          }}>
            读取第一个资源
          </button>
        </div>
      )}
      
      {/* 示例：使用提示 */}
      {prompts.length > 0 && (
        <div>
          <h3>提示: {prompts.length}</h3>
          <button onClick={async () => {
            const result = await getPrompt(prompts[0].name)
            console.log('提示消息:', result.messages)
          }}>
            获取第一个提示
          </button>
        </div>
      )}
    </div>
  )
}
```
## 设置 OAuth 回调

为了处理 OAuth 认证流程，你需要在你的应用中设置一个回调端点。

### 使用 React Router
```tsx
// App.tsx 使用 React Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { onMcpAuthorization } from 'use-mcp'

function OAuthCallback() {
  useEffect(() => {
    onMcpAuthorization()
  }, [])

  return (
    <div>
      <h1>正在认证...</h1>
      <p>此窗口应会自动关闭。</p>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/oauth/callback" element={<OAuthCallback />} />
        <Route path="/" element={<YourMainComponent />} />
      </Routes>
    </Router>
  )
}
```
### 使用 Next.js 页面路由器
```tsx
// pages/oauth/callback.tsx
import { useEffect } from 'react'
import { onMcpAuthorization } from 'use-mcp'

export default function OAuthCallbackPage() {
  useEffect(() => {
    onMcpAuthorization()
  }, [])

  return (
    <div>
      <h1>正在认证...</h1>
      <p>此窗口应自动关闭。</p>
    </div>
  )
}
```
## API 参考

### `useMcp` 钩子函数
```ts
function useMcp(options: UseMcpOptions): UseMcpResult
```
#### 选项

| 选项               | 类型                                                              | 说明                                                                                                               |
| ------------------ | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `url`              | `string`                                                          | **必填**。你的 MCP 服务器的 URL                                                                                     |
| `clientName`       | `string`                                                          | 用于 OAuth 注册的客户端名称                                                                                         |
| `clientUri`        | `string`                                                          | 用于 OAuth 注册的客户端 URI                                                                                          |
| `callbackUrl`      | `string`                                                          | 自定义的 OAuth 回调 URL，用于 OAuth 重定向（默认为当前源下的 `/oauth/callback`）                                   |
| `storageKeyPrefix` | `string`                                                          | localStorage 中用于存储 OAuth 数据的键前缀（默认为 "mcp:auth"）                                                     |
| `clientConfig`     | `object`                                                          | MCP 客户端身份的自定义配置                                                                                           |
| `debug`            | `boolean`                                                         | 是否启用详细的调试日志                                                                                               |
| `autoRetry`        | `boolean \| number`                                               | 如果初始连接失败是否自动重试，并指定延迟毫秒数                                                                       |
| `autoReconnect`    | `boolean \| number`                                               | 如果已建立的连接断开是否自动重连，并指定延迟毫秒数（默认：3000）                                                     |
| `transportType`    | `'auto' \| 'http' \| 'sse'`                                       | 传输类型偏好：'auto'（HTTP 优先，SSE 回退）、'http'（仅 HTTP）、'sse'（仅 SSE）（默认：'auto'）                     |
| `preventAutoAuth`  | `boolean`                                                         | 阻止在初始连接时自动弹出身份验证弹窗（默认：false）                                                                  |
| `onPopupWindow`    | `(url: string, features: string, window: Window \| null) => void` | 在身份验证弹窗打开后调用的回调函数                                                                                   |

#### 返回值

| 属性            | 类型                                                                                      | 说明                                                                                                                 |
| ---------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `state`          | `string`                                                                                  | 当前连接状态：'discovering'、'pending_auth'、'authenticating'、'connecting'、'loading'、'ready'、'failed'             |
| `tools`          | `Tool[]`                                                                                  | 来自 MCP 服务器的可用工具                                                                                            |
| `resources`      | `Resource[]`                                                                              | 来自 MCP 服务器的可用资源                                                                                            |
| `resourceTemplates` | `ResourceTemplate[]`                                                                      | 来自 MCP 服务器的可用资源模板                                                                                        |
| `prompts`        | `Prompt[]`                                                                                | 来自 MCP 服务器的可用提示                                                                                            |
| `error`          | `string \| undefined`                                                                     | 如果连接失败时的错误信息                                                                                             |
| `authUrl`        | `string \| undefined`                                                                     | 如果弹窗被阻止时的手动身份验证 URL                                                                                   |
| `log`            | `{ level: 'debug' \| 'info' \| 'warn' \| 'error'; message: string; timestamp: number }[]` | 日志消息数组                                                                                                         |
| `callTool`       | `(name: string, args?: Record<string, unknown>) => Promise<any>`                          | 调用 MCP 服务器上的工具的函数                                                                                        |
| `listResources`  | `() => Promise<void>`                                                                     | 刷新可用资源列表                                                                                                     |
| `readResource`   | `(uri: string) => Promise<{ contents: Array<...> }>`                                      | 读取特定资源的内容                                                                                                   |
| `listPrompts`    | `() => Promise<void>`                                                                     | 刷新可用提示列表                                                                                                     |
| `getPrompt`      | `(name: string, args?: Record<string, string>) => Promise<{ messages: Array<...> }>`      | 获取具有可选参数的特定提示                                                                                           |
| `retry`          | `() => void`                                                                              | 手动尝试重新连接                                                                                                     |
| `disconnect`     | `() => void`                                                                              | 与 MCP 服务器断开连接                                                                                                |
| `authenticate`   | `() => void`                                                                              | 手动触发身份验证                                                                                                     |
| `clearStorage`   | `() => void`                                                                              | 清除所有存储的身份验证数据                                                                                           |

## 许可证

MIT