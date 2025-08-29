# MCP 检查器

MCP 检查器是一款用于测试和调试 MCP 服务器的开发者工具。

![MCP 检查器截图](https://raw.githubusercontent.com/modelcontextprotocol/inspector/main/mcp-inspector.png)

## 架构概览

MCP 检查器包含两个主要组件，它们协同工作：

* **MCP 检查器客户端（MCPI）**：基于 React 的网页用户界面，提供用于测试和调试 MCP 服务器的交互式接口
* **MCP 代理（MCPP）**：一个 Node.js 服务，作为协议桥接器，通过多种传输方式（stdio、SSE、可流式 HTTP）将网页界面与 MCP 服务器连接起来

请注意，该代理不是一个用于拦截网络流量的网络代理。相反，它同时充当 MCP 客户端（连接到你的 MCP 服务器）和 HTTP 服务器（提供网页界面），从而实现基于浏览器与使用不同传输协议的 MCP 服务器进行交互。

## 运行检查器

### 系统要求

* Node.js: ^22.7.5

### 快速开始（UI 模式）

如要立即通过 UI 启动并运行，请执行以下命令：
```bash
npx @modelcontextprotocol/inspector
```
服务器将会启动，并且用户界面可以在 `http://localhost:6274` 访问。

### 来自 MCP 服务器仓库

要检查一个 MCP 服务器的实现，无需克隆此仓库。请使用 `npx`。例如，如果你的服务器构建在 `build/index.js`：
```bash
npx @modelcontextprotocol/inspector node build/index.js
```
你可以向你的 MCP 服务器传递参数和环境变量。参数直接传递给你的服务器，而环境变量则可以使用 `-e` 标志进行设置：
```bash
# 仅传递参数
npx @modelcontextprotocol/inspector node build/index.js arg1 arg2

# 仅传递环境变量
npx @modelcontextprotocol/inspector -e key=value -e key2=$VALUE2 node build/index.js

# 同时传递环境变量和参数
npx @modelcontextprotocol/inspector -e key=value -e key2=$VALUE2 node build/index.js arg1 arg2

# 使用 -- 将检测器标志与服务器参数分隔开
npx @modelcontextprotocol/inspector -e key=$VALUE -- node build/index.js -e server-flag
```
检查器同时运行了一个 MCP 检查器（MCPI）客户端 UI（默认端口 6274）和一个 MCP 代理（MCPP）服务器（默认端口 6277）。你可以在浏览器中打开 MCPI 客户端 UI 来使用该检查器。（这些端口号分别通过 T9 键盘映射对 MCPI 和 MCPP 进行了助记编码）。如有需要，你可以自定义这些端口号：
```bash
CLIENT_PORT=8080 SERVER_PORT=9000 npx @modelcontextprotocol/inspector node build/index.js
```
关于如何使用检查器的更多细节，请参阅 [MCP 文档网站的检查器部分](https://modelcontextprotocol.io/docs/tools/inspector)。如需调试帮助，请参阅 [调试指南](https://modelcontextprotocol.io/docs/tools/debugging)。

### 服务器文件导出

MCP 检查器提供了便捷的按钮，用于导出服务器启动配置，以便在 Cursor、Claude Code 或检查器的 CLI 等客户端中使用。该文件通常命名为 `mcp.json`。

* **服务器条目** - 将单个服务器配置条目复制到剪贴板。你可以将此条目添加到你偏好的服务器名称下的 `mcp.json` 文件中的 `mcpServers` 对象中。

  **STDIO 传输示例：**
```json
{
  "command": "node",
  "args": ["build/index.js", "--debug"],
  "env": {
    "API_KEY": "your-api-key",
    "DEBUG": "true"
  }
}
```
**SSE 传输示例：**
```json
{
  "type": "sse",
  "url": "http://localhost:3000/events",
  "note": "对于 SSE 连接，直接在客户端中添加此 URL"
}
```
* **服务器文件** - 将完整的 MCP 配置文件结构复制到剪贴板，并将当前服务器配置作为 `default-server` 添加进去。该内容可直接保存为 `mcp.json` 文件。

  **STDIO 传输示例：**
```json
{
  "mcpServers": {
    "default-server": {
      "command": "node",
      "args": ["build/index.js", "--debug"],
      "env": {
        "API_KEY": "your-api-key",
        "DEBUG": "true"
      }
    }
  }
}
```
**SSE 传输示例：**
```json
{
  "mcpServers": {
    "default-server": {
      "type": "sse",
      "url": "http://localhost:3000/events",
      "note": "对于 SSE 连接，请直接在客户端中添加此 URL"
    }
  }
}
```
配置服务器设置后，这些按钮将显示在检查器用户界面中，使您能够轻松保存和重复使用配置。

对于SSE传输连接，检查器为两个按钮提供了类似的功能。"Server Entry（服务器条目）"按钮会复制可用于添加到现有配置文件中的SSE URL配置，而"Servers File（服务器文件）"按钮则会创建一个包含SSE URL的完整配置文件，可直接在客户端中使用。

您可以将 Server Entry 粘贴到现有 `mcp.json` 文件中您选择的服务器名称下，或者使用完整的 Servers File 内容来创建新的配置文件。

### 身份验证

检查器支持对SSE连接使用Bearer Token身份验证。在连接到MCP服务器时，在用户界面中输入您的令牌，该令牌将通过Authorization头部发送。您也可以使用侧边栏中的输入框修改头部名称。

### 安全注意事项

MCP检查器包含一个代理服务器，可以运行并与本地MCP进程通信。不应将代理服务器暴露给不受信任的网络，因为它具有启动本地进程的权限，并且可以连接到任何指定的MCP服务器。

#### 身份验证

MCP检查器代理服务器默认需要身份验证。启动服务器时，会生成一个随机的会话令牌并打印到控制台：
```
🔑 会话令牌：3a1c267fad21f7150b7d624c160b7f09b0b8c4f623c7107bbf13378f051538d4

🔗 使用预填充令牌打开检查器：
   http://localhost:6274/?MCP_PROXY_AUTH_TOKEN=3a1c267fad21f7150b7d624c160b7f09b0b8c4f623c7107bbf13378f051538d4
```
该令牌必须作为Bearer令牌包含在发送到服务器的所有请求的Authorization头中。检查器会自动打开浏览器，并在URL中预填令牌。

**自动打开浏览器** - 现在，启用身份验证时，检查器会自动使用URL中预填的令牌打开浏览器。

**替代方案：手动配置** - 如果你已经打开了检查器：

1. 点击侧边栏中的"Configuration"（配置）按钮
2. 找到"Proxy Session Token"（代理会话令牌）并输入代理控制台中显示的令牌
3. 点击"Save"（保存）以应用配置

该令牌将保存在浏览器的本地存储中，以便将来使用。

如果需要禁用身份验证（**不推荐**），可以设置`DANGEROUSLY_OMIT_AUTH`环境变量：
```bash
DANGEROUSLY_OMIT_AUTH=true npm start
```
***

**🚨 警告 🚨**

使用 `DANGEROUSLY_OMIT_AUTH` 禁用身份验证极其危险！禁用身份验证不仅在您的设备暴露于公共互联网时会面临攻击风险，而且**通过您的网络浏览器**也会面临攻击风险。这意味着，访问恶意网站或查看恶意广告都可能使攻击者远程入侵您的计算机。除非您真正了解其中的风险，否则请不要禁用此功能。

详细了解此漏洞的风险，请阅读 Oligo 的博客文章：[Anthropic MCP Inspector 中的关键 RCE 漏洞 - CVE-2025-49596](https://www.oligo.security/blog/critical-rce-vulnerability-in-anthropic-mcp-inspector-cve-2025-49596)

***

您还可以在启动服务器时通过 `MCP_PROXY_AUTH_TOKEN` 环境变量设置令牌：
```bash
MCP_PROXY_AUTH_TOKEN=$(openssl rand -hex 32) npm start
```
#### 仅本地绑定

默认情况下，MCP Inspector 的代理服务器和客户端都仅绑定到 `localhost`，以防止网络访问。这确保了它们无法通过网络中的其他设备访问。如果出于开发目的需要绑定到所有接口，可以通过 `HOST` 环境变量覆盖此设置：
```bash
HOST=0.0.0.0 npm start
```
**警告：** 只应在受信任的网络环境中绑定到所有接口，因为这会使代理服务器能够执行本地进程，并将两个服务都暴露给网络访问。

#### DNS 重新绑定保护

为了防止 DNS 重新绑定攻击，MCP Inspector 会对传入请求的 `Origin` 头进行验证。默认情况下，仅允许来自客户端来源的请求（如果设置了 `CLIENT_PORT`，则遵循该设置，默认端口为 6274）。您可以通过设置 `ALLOWED_ORIGINS` 环境变量（逗号分隔的列表）来配置额外允许的来源：
```bash
ALLOWED_ORIGINS=http://localhost:6274,http://localhost:8000 npm start
```
### 配置

MCP Inspector 支持以下配置设置。要更改这些设置，请点击 MCP Inspector 用户界面中的 `Configuration`（配置）按钮：

| 设置                                     | 说明                                                                                                                                             | 默认值  |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------- |
| `MCP_SERVER_REQUEST_TIMEOUT`             | 发送到 MCP 服务器的请求超时时间（毫秒）                                                                                                           | 10000   |
| `MCP_REQUEST_TIMEOUT_RESET_ON_PROGRESS`  | 在收到进度通知时重置超时                                                                                                                         | true    |
| `MCP_REQUEST_MAX_TOTAL_TIMEOUT`          | 发送到 MCP 服务器的请求最大总超时时间（毫秒）（需与进度通知一起使用）                                                                            | 60000   |
| `MCP_PROXY_FULL_ADDRESS`                 | 如果你在非默认地址上运行 MCP Inspector Proxy，请设置此项。示例：<http://10.1.1.22:5577>                                                          | ""      |
| `MCP_AUTO_OPEN_ENABLED`                  | 启用检查器启动时自动打开浏览器（需启用身份验证）。此选项仅作为环境变量有效，在浏览器界面中无法配置。                                               | true    |

这些设置可以通过用户界面实时调整，并在会话之间保持不变。

检查器还支持使用配置文件来保存不同 MCP 服务器的设置。当你需要连接多个服务器或使用复杂配置时，该功能非常有用：
```bash
npx @modelcontextprotocol/inspector --config 路径/to/config.json --server everything
```
示例服务器配置文件：
```json
{
  "mcpServers": {
    "everything": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-everything"],
      "env": {
        "hello": "你好 MCP！"
      }
    },
    "my-server": {
      "command": "node",
      "args": ["build/index.js", "arg1", "arg2"],
      "env": {
        "key": "值",
        "key2": "值2"
      }
    }
  }
}
```
#### 配置文件中的传输类型

检查器会从你的配置文件中自动检测传输类型。你可以指定不同的传输类型：

**STDIO（默认）：**
```json
{
  "mcpServers": {
    "my-stdio-server": {
      "type": "stdio",
      "command": "npx",
      "args": ["@modelcontextprotocol/server-everything"]
    }
  }
}
```
**SSE（服务器发送事件）：**
```json
{
  "mcpServers": {
    "my-sse-server": {
      "type": "sse",
      "url": "http://localhost:3000/sse"
    }
  }
}
```
**可流化的 HTTP：**
```json
{
  "mcpServers": {
    "my-http-server": {
      "type": "可流式传输的HTTP",
      "url": "http://localhost:3000/mcp"
    }
  }
}
```
#### 默认服务器选择

如果您的配置包含以下内容，您可以在不指定服务器名称的情况下启动检查器：

1. **单个服务器** - 将被自动选中：
```bash
# 如果只有一个服务器，将自动使用 "my-server"
npx @modelcontextprotocol/inspector --config mcp.json
```
2. **名为 "default-server" 的服务器** - 自动选定：
```json
{
  "mcpServers": {
    "default-server": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-everything"]
    },
    "other-server": {
      "command": "node",
      "args": ["other.js"]
    }
  }
}
```
> **提示：** 如上文“服务器文件导出”部分所述，你可以通过检查器用户界面中的 **服务器条目** 和 **服务器文件** 按钮轻松生成此配置格式。

你还可以通过查询参数设置初始的 `transport` 类型、`serverUrl`、`serverCommand` 和 `serverArgs`，例如：
```
http://localhost:6274/?transport=sse&serverUrl=http://localhost:8787/sse
http://localhost:6274/?transport=streamable-http&serverUrl=http://localhost:8787/mcp
http://localhost:6274/?transport=stdio&serverCommand=npx&serverArgs=arg1%20arg2
```
你也可以通过查询参数设置初始配置项，例如：
```
http://localhost:6274/?MCP_SERVER_REQUEST_TIMEOUT=10000&MCP_REQUEST_TIMEOUT_RESET_ON_PROGRESS=false&MCP_PROXY_FULL_ADDRESS=http://10.1.1.22:5577
```
请注意，如果同时设置了查询参数和对应的 localStorage 项，则查询参数将优先起作用。

### 来自此仓库

如果你正在开发检查器本身：

开发模式：
```bash
npm run dev

# 与 typescript-sdk 包进行协同开发（假设它已被克隆到 ../typescript-sdk；否则设置 MCP_SDK）：
npm run dev:sdk "cd sdk && npm run examples:simple-server:w"
# 然后在检查器中打开 http://localhost:3000/mcp 作为 SHTTP。
# 返回已部署的 SDK 版本：
#   npm run unlink:sdk && npm i
```
> **Windows 用户注意事项：**
> 在 Windows 上，请使用以下命令：
>
> ```bash
> npm run dev:windows
> ```

生产模式：
```bash
npm run build
npm start
```
### 命令行接口（CLI）模式

CLI 模式支持通过命令行以编程方式与 MCP 服务器进行交互，非常适合脚本编写、自动化以及与代码助手集成。这对于 MCP 服务器的开发提供了高效的反馈循环。
```bash
npx @modelcontextprotocol/inspector --cli node build/index.js
```
CLI 模式支持跨工具、资源和提示的大多数操作。几个示例：
```bash
# 基本用法
npx @modelcontextprotocol/inspector --cli node build/index.js

# 使用配置文件
npx @modelcontextprotocol/inspector --cli --config path/to/config.json --server myserver

# 列出可用工具
npx @modelcontextprotocol/inspector --cli node build/index.js --method tools/list

# 调用特定工具
npx @modelcontextprotocol/inspector --cli node build/index.js --method tools/call --tool-name mytool --tool-arg key=value --tool-arg another=value2

# 列出可用资源
npx @modelcontextprotocol/inspector --cli node build/index.js --method resources/list

# 列出可用提示
npx @modelcontextprotocol/inspector --cli node build/index.js --method prompts/list

# 连接到远程 MCP 服务器（默认使用 SSE 传输）
npx @modelcontextprotocol/inspector --cli https://my-mcp-server.example.com

# 连接到远程 MCP 服务器（使用可流式 HTTP 传输）
npx @modelcontextprotocol/inspector --cli https://my-mcp-server.example.com --transport http --method tools/list

# 在远程服务器上调用工具
npx @modelcontextprotocol/inspector --cli https://my-mcp-server.example.com --method tools/call --tool-name remotetool --tool-arg param=value

# 从远程服务器列出资源
npx @modelcontextprotocol/inspector --cli https://my-mcp-server.example.com --method resources/list
```
### UI 模式与 CLI 模式：何时使用哪个

| 使用场景                 | UI 模式                                                                   | CLI 模式                                                                                                                                             |
| ------------------------ | ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **服务器开发**           | 在开发过程中用于交互式测试和调试的可视化界面                              | 用于快速测试和持续集成的可脚本化命令；与 AI 编程助手（如 Cursor）创建快速开发的反馈循环                                                             |
| **资源探索**             | 具有分层导航和 JSON 可视化的交互式浏览器                                  | 用于自动化和脚本的编程方式列出和读取资源                                                                                                             |
| **工具测试**             | 基于表单的参数输入和实时响应可视化                                        | 命令行工具执行并输出 JSON，便于脚本处理                                                                                                              |
| **提示工程**             | 支持流式响应和可视化对比的交互式采样                                      | 批量处理提示并输出机器可读的结果                                                                                                                     |
| **调试**                 | 请求历史、可视化错误和实时通知                                            | 用于日志分析和其他工具集成的直接 JSON 输出                                                                                                           |
| **自动化**               | 不适用                                                                    | 非常适合用于 CI/CD 流水线、批量处理以及与编程助手的集成                                                                                              |
| **学习 MCP**             | 丰富的可视化界面帮助新用户理解服务器功能                                  | 简化命令，专注于学习特定端点                                                                                                                         |

## 许可证

本项目采用 MIT 许可证 — 详见 [LICENSE](https://github.com/modelcontextprotocol/inspector/tree/main/LICENSE) 文件获取详细信息。
