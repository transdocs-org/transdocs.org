# MCP Kotlin SDK

[![Kotlin Multiplatform](https://img.shields.io/badge/Kotlin-Multiplatform-blueviolet?logo=kotlin)](https://kotlinlang.org/docs/multiplatform.html)
[![平台](https://img.shields.io/badge/平台-JVM%20%7C%20Wasm%2FJS%20%7C%20Native%20\(iOS%2FiOS%20模拟器\)-blue)](https://kotlinlang.org/docs/multiplatform.html)
[![Maven Central](https://img.shields.io/maven-central/v/io.modelcontextprotocol/kotlin-sdk.svg?label=Maven%20Central)](https://search.maven.org/search?q=g:io.modelcontextprotocol%20a:kotlin-sdk)
[![许可证](https://img.shields.io/badge/许可证-MIT-yellow.svg)](https://github.com/modelcontextprotocol/kotlin-sdk/tree/main/LICENSE)

这是 [Model Context Protocol](https://modelcontextprotocol.io)（MCP）的 Kotlin Multiplatform 实现，
提供客户端和服务器功能，可用于在各种平台上集成 LLM 接口。

## 概述

Model Context Protocol 允许应用程序以标准化的方式为 LLM 提供上下文，
将提供上下文与实际的 LLM 交互分离开来。
该 SDK 实现了适用于 Kotlin 的 MCP 规范，
使你能够在 JVM、WebAssembly 和 iOS 上构建使用 MCP 通信的应用程序。

* 构建能够连接到任意 MCP 服务器的客户端
* 创建暴露资源、提示和工具的 MCP 服务器
* 使用标准传输协议如 stdio、SSE 和 WebSocket
* 处理所有 MCP 协议消息和生命周期事件

## 示例

* [kotlin-mcp-server](https://github.com/modelcontextprotocol/kotlin-sdk/tree/main/samples/kotlin-mcp-server)：演示了使用多平台（JVM、Wasm）设置 MCP 服务器，包含各种功能和传输方式。
* [weather-stdio-server](https://github.com/modelcontextprotocol/kotlin-sdk/tree/main/samples/weather-stdio-server)：展示了如何使用 STDIO 传输方式构建提供天气预报和警报的 Kotlin MCP 服务器。
* [kotlin-mcp-client](https://github.com/modelcontextprotocol/kotlin-sdk/tree/main/samples/kotlin-mcp-client)：演示了如何构建交互式 Kotlin MCP 客户端，通过 STDIO 连接到 MCP 服务器，并与 Anthropic 的 API 集成。

## 安装

将新的仓库添加到你的构建文件中：
```kotlin
仓库 {
    mavenCentral()
}
```
添加依赖项：
```kotlin
dependencies {
    // 使用上面的徽章获取最新版本
    implementation("io.modelcontextprotocol:kotlin-sdk:$mcpVersion")
}
```
## 快速开始

### 创建客户端
```kotlin
import io.modelcontextprotocol.kotlin.sdk.client.Client
import io.modelcontextprotocol.kotlin.sdk.client.StdioClientTransport
import io.modelcontextprotocol.kotlin.sdk.Implementation

val client = Client(
    clientInfo = Implementation(
        name = "示例客户端",
        version = "1.0.0"
    )
)

val transport = StdioClientTransport(
    inputStream = processInputStream,
    outputStream = processOutputStream
)

// 连接到服务器
client.connect(transport)

// 列出可用资源
val resources = client.listResources()

// 读取特定资源
val resourceContent = client.readResource(
    ReadResourceRequest(uri = "file:///example.txt")
)
```
### 创建服务器
```kotlin
import io.modelcontextprotocol.kotlin.sdk.server.Server
import io.modelcontextprotocol.kotlin.sdk.server.ServerOptions
import io.modelcontextprotocol.kotlin.sdk.server.StdioServerTransport
import io.modelcontextprotocol.kotlin.sdk.ServerCapabilities

val server = Server(
    serverInfo = Implementation(
        name = "example-server",
        version = "1.0.0"
    ),
    options = ServerOptions(
        capabilities = ServerCapabilities(
            resources = ServerCapabilities.Resources(
                subscribe = true,
                listChanged = true
            )
        )
    )
)

// 添加资源
server.addResource(
    uri = "file:///example.txt",
    name = "示例资源",
    description = "一个示例文本文件",
    mimeType = "text/plain"
) { request ->
    ReadResourceResult(
        contents = listOf(
            TextResourceContents(
                text = "这是示例资源的内容。",
                uri = request.uri,
                mimeType = "text/plain"
            )
        )
    )
}

// 使用标准输入输出传输启动服务器
val transport = StdioServerTransport()
server.connect(transport)
```
### 使用 SSE 传输

直接在 Ktor 的 `Application` 中：
```kotlin
import io.ktor.server.application.*
import io.modelcontextprotocol.kotlin.sdk.server.mcp

fun Application.module() {
    mcp {
        Server(
            serverInfo = Implementation(
                name = "example-sse-server",
                version = "1.0.0"
            ),
            options = ServerOptions(
                capabilities = ServerCapabilities(
                    prompts = ServerCapabilities.Prompts(listChanged = null),
                    resources = ServerCapabilities.Resources(subscribe = null, listChanged = null)
                )
            )
        )
    }
}
```
在自定义的 Ktor `Route` 内部：
```kotlin
import io.ktor.server.application.*
import io.ktor.server.sse.SSE
import io.modelcontextprotocol.kotlin.sdk.server.mcp

fun Application.module() {
    install(SSE)

    routing {
        route("myRoute") {
            mcp {
                Server(
                    serverInfo = Implementation(
                        name = "example-sse-server",
                        version = "1.0.0"
                    ),
                    options = ServerOptions(
                        capabilities = ServerCapabilities(
                            prompts = ServerCapabilities.Prompts(listChanged = null),
                            resources = ServerCapabilities.Resources(subscribe = null, listChanged = null)
                        )
                    )
                )
            }
        }
    }
}
```
## 贡献指南

在进行贡献之前，请查看[贡献指南](https://github.com/modelcontextprotocol/kotlin-sdk/tree/main/CONTRIBUTING.md)和[行为准则](https://github.com/modelcontextprotocol/kotlin-sdk/tree/main/CODE_OF_CONDUCT.md)。

## 许可证

本项目采用 MIT 许可证进行授权——详情请参阅[许可证文件](https://github.com/modelcontextprotocol/kotlin-sdk/tree/main/LICENSE)。