# MCP C# SDK

[![NuGet 预览版本](https://img.shields.io/nuget/vpre/ModelContextProtocol.svg)](https://www.nuget.org/packages/ModelContextProtocol/absoluteLatest)

这是 [Model Context Protocol](https://modelcontextprotocol.io/) 的官方 C# SDK，允许 .NET 应用程序、服务和库实现并交互 MCP 客户端和服务端。有关可用功能的详细信息，请查看我们的 [API 文档](https://modelcontextprotocol.github.io/csharp-sdk/api/ModelContextProtocol.html)。

## 包

该 SDK 包含三个主要包：

* **[ModelContextProtocol](https://www.nuget.org/packages/ModelContextProtocol/absoluteLatest)** [![NuGet 预览版本](https://img.shields.io/nuget/vpre/ModelContextProtocol.svg)](https://www.nuget.org/packages/ModelContextProtocol/absoluteLatest) - 主包，包含托管和依赖注入扩展。这适用于大多数不需要 HTTP 服务端功能的项目。本 README 文件是该包的文档。

* **[ModelContextProtocol.AspNetCore](https://www.nuget.org/packages/ModelContextProtocol.AspNetCore/absoluteLatest)** [![NuGet 预览版本](https://img.shields.io/nuget/vpre/ModelContextProtocol.AspNetCore.svg)](https://www.nuget.org/packages/ModelContextProtocol.AspNetCore/absoluteLatest) - 用于基于 HTTP 的 MCP 服务端。[文档](https://github.com/modelcontextprotocol/csharp-sdk/tree/main/src/ModelContextProtocol.AspNetCore/README.md)

* **[ModelContextProtocol.Core](https://www.nuget.org/packages/ModelContextProtocol.Core/absoluteLatest)** [![NuGet 预览版本](https://img.shields.io/nuget/vpre/ModelContextProtocol.Core.svg)](https://www.nuget.org/packages/ModelContextProtocol.Core/absoluteLatest) - 适用于仅需使用客户端或低级服务端 API，并希望依赖项最少的用户。[文档](https://github.com/modelcontextprotocol/csharp-sdk/tree/main/src/ModelContextProtocol.Core/README.md)

> \[!NOTE]
> 该项目处于预览阶段；可能会在不提前通知的情况下引入破坏性变更。

## 关于 MCP

模型上下文协议（MCP）是一项开放协议，用于标准化应用程序向大语言模型（LLM）提供上下文的方式。它支持 LLM 与各种数据源和工具之间的安全集成。

关于 MCP 的更多信息：

* [官方文档](https://modelcontextprotocol.io/)
* [协议规范](https://spec.modelcontextprotocol.io/)
* [GitHub 组织](https://github.com/modelcontextprotocol)

## 安装

要开始使用，请从 NuGet 安装包
```
dotnet add package ModelContextProtocol --prerelease
```
## 开始使用（客户端）

要开始编写客户端，可以使用 `McpClientFactory.CreateAsync` 方法来实例化并连接一个 `IMcpClient` 到服务器。一旦获得 `IMcpClient`，就可以与其进行交互，例如枚举所有可用工具并调用工具。
```csharp
var clientTransport = new StdioClientTransport(new StdioClientTransportOptions
{
    Name = "Everything",
    Command = "npx",
    Arguments = ["-y", "@modelcontextprotocol/server-everything"],
});

var client = await McpClientFactory.CreateAsync(clientTransport);

// 打印服务器提供的工具列表。
foreach (var tool in await client.ListToolsAsync())
{
    Console.WriteLine($"{tool.Name} ({tool.Description})");
}

// 执行一个工具（这通常由LLM工具调用驱动）。
var result = await client.CallToolAsync(
    "echo",
    new Dictionary<string, object?>() { ["message"] = "Hello MCP!" },
    cancellationToken:CancellationToken.None);

// echo 总是返回一个且仅一个文本内容对象
Console.WriteLine(result.Content.First(c => c.Type == "text").Text);
```
你可以在[samples](https://github.com/modelcontextprotocol/csharp-sdk/tree/main/samples)目录中找到展示如何在LLM SDK中使用`ModelContextProtocol`的示例，也可以参考[tests](https://github.com/modelcontextprotocol/csharp-sdk/tree/main/tests/ModelContextProtocol.Tests)项目获取更多示例。未来还将添加更多示例和文档。

客户端可以连接到任意MCP服务器，而不局限于使用本库创建的服务器。该协议被设计为与服务器无关（server-agnostic），因此你可以使用本库连接到任意兼容的服务器。

工具可以被轻松地暴露出来，供`IChatClient`立即使用，因为`McpClientTool`继承自`AIFunction`。
```csharp
// 获取可用的函数。
IList<McpClientTool> tools = await client.ListToolsAsync();

// 使用工具调用聊天客户端。
IChatClient chatClient = ...;
var response = await chatClient.GetResponseAsync(
    "你的提示内容",
    new() { Tools = [.. tools] },
```
## 入门（服务器）

以下是如何创建一个MCP服务器并注册当前应用程序中所有工具的示例。  
其中包含了一个简单的echo工具作为示例（这个示例被包含在同一个文件中是为了方便复制和粘贴，但其实它并不需要和主文件放在同一位置……  
所使用的`WithTools`重载方法会检查当前程序集内带有`McpServerToolType`特性的类，并将其中带有`McpTool`特性的方法注册为工具。）
```
dotnet add package ModelContextProtocol --prerelease
dotnet add package Microsoft.Extensions.Hosting
```
# 简介

libmaxminddb 库提供了一个用于读取 MaxMind DB 文件的快速查找 API。MaxMind 提供了免费的 [GeoIP2 数据库](https://dev.maxmind.com/geoip/geoip2/geolite2/)，这些数据库使用 MaxMind DB 格式进行分发。此外，MaxMind 提供了一个[商业服务](https://www.maxmind.com/en/geoip2-services)。MaxMind DB 的设计也适用于其他 IP 数据库提供商。

这个库支持在各种不同的平台上使用，包括 Linux、macOS、Solaris 和 Windows。

## 支持的格式

这个库支持 MaxMind DB 文件的读取。它不支持写入或创建这些文件。如果你需要创建 MaxMind DB 文件，请参阅我们的 [maxmind-db-writer](https://github.com/maxmind/maxminddb-writer) Perl 模块或 [maxmind-db-reader](https://github.com/maxmind/maxmind-db-writer) 模块的文档。

## 要求

* 一个标准的 C 编译器（支持 C89 或更新版本）
* `libtool`
* `autoconf`
* `automake`
* `make`
* `pkg-config`（可选）
* `curl`（用于运行测试）
* `doxygen`（用于生成文档）

## 安装

请参阅我们的 [安装说明](INSTALL.md) 获取有关如何安装此库的详细信息。
```csharp
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using ModelContextProtocol.Server;
using System.ComponentModel;

var builder = Host.CreateApplicationBuilder(args);
builder.Logging.AddConsole(consoleLogOptions =>
{
    // 配置所有日志输出到 stderr
    consoleLogOptions.LogToStandardErrorThreshold = LogLevel.Trace;
});
builder.Services
    .AddMcpServer()
    .WithStdioServerTransport()
    .WithToolsFromAssembly();
await builder.Build().RunAsync();

[McpServerToolType]
public static class EchoTool
{
    [McpServerTool, Description("将消息回显给客户端。")]
    public static string Echo(string message) => $"hello {message}";
}
```
工具可以通过方法的参数注入表示服务器的 `IMcpServer`，并使用它与已连接的客户端进行交互。同样，参数也可以通过依赖注入的方式被注入。例如，此工具将使用提供的 `IMcpServer` 向客户端发起采样请求，以总结其通过依赖注入的 `HttpClient` 从指定 URL 下载的内容。
```csharp
[McpServerTool(Name = "SummarizeContentFromUrl"), Description("对从特定 URI 下载的内容进行摘要")]
public static async Task<string> SummarizeDownloadedContent(
    IMcpServer thisServer,
    HttpClient httpClient,
    [Description("要从中下载内容并进行摘要的 URL")] string url,
    CancellationToken cancellationToken)
{
    string content = await httpClient.GetStringAsync(url);

    ChatMessage[] messages =
    [
        new(ChatRole.User, "请简要总结以下下载的内容："),
        new(ChatRole.User, content),
    ];
    
    ChatOptions options = new()
    {
        MaxOutputTokens = 256,
        Temperature = 0.3f,
    };

    return $"摘要：{await thisServer.AsSamplingChatClient().GetResponseAsync(messages, options, cancellationToken)}";
}
```
提示也可以以类似的方式暴露出来，使用 `[McpServerPrompt]`，例如：
```csharp
[McpServerPromptType]
public static class 我的提示
{
    [McpServerPrompt, Description("创建一个提示，用于总结提供的消息。")]
    public static ChatMessage 总结([Description("需要总结的内容")] string 内容) =>
        new(ChatRole.User, $"请将此内容总结成一句话：{内容}");
}
```
还可以进行更细致的控制，包括对服务器配置以及其处理客户端请求方式的细粒度控制。例如：
```csharp
using ModelContextProtocol;
using ModelContextProtocol.Protocol;
using ModelContextProtocol.Server;
using System.Text.Json;

McpServerOptions options = new()
{
    ServerInfo = new Implementation { Name = "MyServer", Version = "1.0.0" },
    Capabilities = new ServerCapabilities
    {
        Tools = new ToolsCapability
        {
            ListToolsHandler = (request, cancellationToken) =>
                ValueTask.FromResult(new ListToolsResult
                {
                    Tools =
                    [
                        new Tool
                        {
                            Name = "echo",
                            Description = "将输入回显给客户端。",
                            InputSchema = JsonSerializer.Deserialize<JsonElement>("""
                                {
                                    "type": "object",
                                    "properties": {
                                      "message": {
                                        "type": "string",
                                        "description": "需要回显的输入内容"
                                      }
                                    },
                                    "required": ["message"]
                                }
                                """),
                        }
                    ]
                }),

            CallToolHandler = (request, cancellationToken) =>
            {
                if (request.Params?.Name == "echo")
                {
                    if (request.Params.Arguments?.TryGetValue("message", out var message) is not true)
                    {
                        throw new McpException("缺少必需的参数 'message'");
                    }

                    return ValueTask.FromResult(new CallToolResult
                    {
                        Content = [new TextContentBlock { Text = $"Echo: {message}", Type = "text" }]
                    });
                }

                throw new McpException($"未知的工具: '{request.Params?.Name}'");
            },
        }
    },
};

await using IMcpServer server = McpServerFactory.Create(new StdioServerTransport("MyServer"), options);
await server.RunAsync();
```
## 致谢

本库的起点是一个名为 [mcpdotnet](https://github.com/PederHP/mcpdotnet) 的项目，该项目由 [Peder Holdgaard Pedersen](https://github.com/PederHP) 发起。我们感谢 Peder 以及该仓库的其他贡献者所做的工作，他们为本库打下了坚实的基础。

## 许可证

本项目采用 [MIT 许可证](https://github.com/modelcontextprotocol/csharp-sdk/tree/main/LICENSE) 进行授权。