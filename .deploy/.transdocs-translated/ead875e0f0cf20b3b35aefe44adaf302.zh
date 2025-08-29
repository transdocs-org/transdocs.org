<div align = "right">
<a href="docs/readme/README.zh-cn.md">简体中文(待更新)</a>
</div>

# RMCP

[![Crates.io Version](https://img.shields.io/crates/v/rmcp)](https://crates.io/crates/rmcp)

<!-- ![Release status](https://github.com/modelcontextprotocol/rust-sdk/actions/workflows/release.yml/badge.svg) -->

<!-- [![docs.rs](todo)](todo) -->

![Coverage](https://raw.githubusercontent.com/modelcontextprotocol/rust-sdk/refs/heads/main/docs/coverage.svg)

一个使用 tokio 异步运行时实现的官方 Rust Model Context Protocol（模型上下文协议） SDK。

本仓库包含以下模块包（crates）：

* [rmcp](https://github.com/modelcontextprotocol/rust-sdk/tree/main/crates/rmcp)：核心模块包，提供 RMCP 协议的实现（如需了解更多，请访问 [rmcp](https://github.com/modelcontextprotocol/rust-sdk/tree/main/crates/rmcp/README.md)）
* [rmcp-macros](https://github.com/modelcontextprotocol/rust-sdk/tree/main/crates/rmcp-macros)：用于生成 RMCP 工具实现的程序宏模块包（如需了解更多，请访问 [rmcp-macros](https://github.com/modelcontextprotocol/rust-sdk/tree/main/crates/rmcp-macros/README.md)）

## 使用方法

### 导入模块包

```toml
rmcp = { version = "0.2.0", features = ["server"] }
## 或者开发通道
rmcp = { git = "https://github.com/modelcontextprotocol/rust-sdk", branch = "main" }
```

### 第三方依赖

基础依赖：

* [tokio 必需](https://github.com/tokio-rs/tokio)
* [serde 必需](https://github.com/serde-rs/serde)

### 构建客户端

<details>
<summary>启动客户端</summary>

```rust, ignore
use rmcp::{ServiceExt, transport::{TokioChildProcess, ConfigureCommandExt}};
use tokio::process::Command;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let client = ().serve(TokioChildProcess::new(Command::new("npx").configure(|cmd| {
        cmd.arg("-y").arg("@modelcontextprotocol/server-everything");
    }))?).await?;
    Ok(())
}
```

</details>

### 构建服务器

<details>
<summary>构建传输层</summary>

```rust, ignore
use tokio::io::{stdin, stdout};
let transport = (stdin(), stdout());
```

</details>

<details>
<summary>构建一个服务</summary>

你可以通过使用 [`ServerHandler`](https://github.com/modelcontextprotocol/rust-sdk/tree/main/crates/rmcp/src/handler/server.rs) 或 [`ClientHandler`](https://github.com/modelcontextprotocol/rust-sdk/tree/main/crates/rmcp/src/handler/client.rs) 轻松地构建一个服务。

```rust, ignore
let service = common::counter::Counter::new();
```

</details>
<details>

<summary>启动服务器</summary>

```rust, ignore
// 此调用将完成初始化过程
let server = service.serve(transport).await?;
```

</details>

<details>
<summary>与服务器交互</summary>

一旦服务器初始化完成，你就可以发送请求或通知：

```rust, ignore
// 请求
let roots = server.列出根目录().await?;

// 或发送通知
server.通知已取消(...).await?;
```

</details>

<details>
<summary>等待服务关闭</summary>

```rust, ignore
let quit_reason = server.waiting().await?;
// 或者取消它
let quit_reason = server.cancel().await?;
```

</details>

## 示例

请参阅 [示例](https://github.com/modelcontextprotocol/rust-sdk/tree/main/examples/README.md)

## OAuth 支持

详情请参阅 [oauth\_support](https://github.com/modelcontextprotocol/rust-sdk/tree/main/docs/OAUTH_SUPPORT.md)。

## 相关资源

* [MCP 规范](https://spec.modelcontextprotocol.io/specification/2024-11-05/)
* [Schema](https://github.com/modelcontextprotocol/specification/blob/main/schema/2024-11-05/schema.ts)

## 相关项目

* [rustfs-mcp](https://github.com/rustfs/rustfs/tree/main/crates/mcp) - 高性能 MCP 服务器，为 AI/LLM 集成提供 S3 兼容的对象存储操作
* [containerd-mcp-server](https://github.com/jokemanfire/mcp-containerd) - 基于 containerd 的 MCP 服务器实现

## 开发

### 贡献者建议

请参阅 [docs/CONTRIBUTE.MD](https://github.com/modelcontextprotocol/rust-sdk/tree/main/docs/CONTRIBUTE.MD) 获取一些贡献建议。

### 使用开发容器

如果你想使用开发容器，请参阅 [docs/DEVCONTAINER.md](https://github.com/modelcontextprotocol/rust-sdk/tree/main/docs/DEVCONTAINER.md) 获取有关使用 Dev Container 进行开发的说明。