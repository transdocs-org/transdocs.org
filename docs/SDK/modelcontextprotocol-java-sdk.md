# MCP Java SDK

[![构建状态](https://raw.githubusercontent.com/modelcontextprotocol/java-sdk/actions/workflows/publish-snapshot.yml/badge.svg/refs/heads//)](https://github.com/modelcontextprotocol/java-sdk/actions/workflows/publish-snapshot.yml)

一组提供 [Model Context Protocol](https://modelcontextprotocol.org/docs/concepts/architecture) Java SDK 集成的项目。
该 SDK 允许 Java 应用程序通过标准化接口与 AI 模型和工具进行交互，支持同步和异步通信模式。

## 📚 参考文档

#### MCP Java SDK 文档

完整指南和 SDK API 文档

* [功能](https://modelcontextprotocol.io/sdk/java/mcp-overview#features) - Java MCP SDK 提供的功能概述
* [架构](https://modelcontextprotocol.io/sdk/java/mcp-overview#architecture) - Java MCP SDK 架构概述
* [Java 依赖 / BOM](https://modelcontextprotocol.io/sdk/java/mcp-overview#dependencies) - Java 依赖和 BOM
* [Java MCP 客户端](https://modelcontextprotocol.io/sdk/java/mcp-client) - 学习如何使用 MCP 客户端与 MCP 服务器交互
* [Java MCP 服务端](https://modelcontextprotocol.io/sdk/java/mcp-server) - 学习如何实现和配置 MCP 服务器

#### Spring AI MCP 文档

[Spring AI MCP](https://docs.spring.io/spring-ai/reference/api/mcp/mcp-overview.html) 在 MCP Java SDK 的基础上扩展了 Spring Boot 集成，提供了 [客户端](https://docs.spring.io/spring-ai/reference/api/mcp/mcp-client-boot-starter-docs.html) 和 [服务端](https://docs.spring.io/spring-ai/reference/api/mcp/mcp-server-boot-starter-docs.html) 启动器。使用 [Spring Initializer](https://start.spring.io) 快速搭建支持 MCP 的 AI 应用程序。

## 开发

### 从源码构建
```bash
./mvnw clean install -DskipTests
```
### 运行测试

要运行测试，你需要预先安装 `Docker` 和 `npx`。
```bash
./mvnw test
```
## 贡献

欢迎贡献代码！
请遵循 [贡献指南](https://github.com/modelcontextprotocol/java-sdk/tree/main/CONTRIBUTING.md)。

## 团队

* Christian Tzolov
* Dariusz Jędrzejczyk

## 相关链接

* [GitHub 仓库](https://github.com/modelcontextprotocol/java-sdk)
* [问题跟踪](https://github.com/modelcontextprotocol/java-sdk/issues)
* [持续集成/持续部署 (CI/CD)](https://github.com/modelcontextprotocol/java-sdk/actions)

## 许可证

该项目使用 [MIT 许可证](https://github.com/modelcontextprotocol/java-sdk/tree/main/LICENSE) 进行授权。