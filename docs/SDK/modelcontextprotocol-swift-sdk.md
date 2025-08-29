# MCP Swift SDK

[Model Context Protocol][mcp]（MCP）的官方 Swift SDK。

## 概览

Model Context Protocol（MCP）定义了一种标准化的方式，供应用程序与 AI 和 ML 模型进行通信。本 Swift SDK 根据 [2025-03-26][mcp-spec-2025-03-26]（最新版）MCP 规范，实现了客户端与服务端组件。

## 要求

* Swift 6.0+（Xcode 16+）

有关特定平台的要求，请参阅下方的 [平台可用性](#platform-availability) 章节。

## 安装

### Swift 包管理器

将以下内容添加到你的 `Package.swift` 文件中：
```swift
依赖项：[
    .package(url: "https://github.com/modelcontextprotocol/swift-sdk.git", from: "0.10.0")
]
```
然后向你的目标添加依赖项：
```swift
.target(
    name: "你的目标",
    dependencies: [
        .product(name: "MCP", package: "swift-sdk")
    ]
)
```
## 客户端使用

客户端组件允许你的应用程序连接到 MCP 服务器。

### 基础客户端设置
```swift
import MCP

// 初始化客户端
let client = Client(name: "MyApp", version: "1.0.0")

// 创建传输通道并连接
let transport = StdioTransport()
let result = try await client.connect(transport: transport)

// 检查服务器功能
if result.capabilities.tools != nil {
    // 服务器支持工具（如果存在 'tools' 功能对象，则隐式包括工具调用）
}
```
> \[!NOTE]  
> `Client.connect(transport:)` 方法会返回初始化结果。  
> 此返回值可以被丢弃，  
> 因此如果你不需要检查服务器功能，可以忽略它。

### 客户端的传输选项

#### 标准输入/输出传输

用于本地子进程通信：
```swift
// 创建一个标准输入输出传输（最简单的选项）
let transport = StdioTransport()
try await client.connect(transport: transport)
```
#### HTTP 传输

用于与远程服务器通信：
```swift
// 创建一个流式 HTTP 传输
let transport = HTTPClientTransport(
    endpoint: URL(string: "http://localhost:8080")!,
    streaming: true  // 启用服务器发送事件（SSE）以实现实时更新
)
try await client.connect(transport: transport)
```
### 工具

工具表示客户端可以调用的功能：
```swift
// 列出可用工具
let (tools, cursor) = try await client.listTools()
print("可用工具：\(tools.map { $0.name }.joined(separator: ", "))")

// 调用工具并传入参数
let (content, isError) = try await client.callTool(
    name: "image-generator",
    arguments: [
        "prompt": "夕阳下的宁静山景",
        "style": "photorealistic",
        "width": 1024,
        "height": 768
    ]
)

// 处理工具返回内容
for item in content {
    switch item {
    case .text(let text):
        print("生成的文本：\(text)")
    case .image(let data, let mimeType, let metadata):
        if let width = metadata?["width"] as? Int,
           let height = metadata?["height"] as? Int {
            print("生成的图片尺寸为 \(width)x\(height)，类型为 \(mimeType)")
            // 保存或显示图片数据
        }
    case .audio(let data, let mimeType):
        print("接收到的音频类型为 \(mimeType)")
    case .resource(let uri, let mimeType, let text):
        print("从 \(uri) 接收到的资源类型为 \(mimeType)")
        if let text = text {
            print("资源文本：\(text)")
        }
    }
}
```
### 资源

资源表示可以访问且可能被订阅的数据：
```swift
// 列出可用资源
let (resources, nextCursor) = try await client.listResources()
print("可用资源：\(resources.map { $0.uri }.joined(separator: ", "))")

// 读取资源
let contents = try await client.readResource(uri: "resource://example")
print("资源内容：\(contents)")

// 如果支持的话，订阅资源更新
if result.capabilities.resources.subscribe {
    try await client.subscribeToResource(uri: "resource://example")

    // 注册通知处理程序
    await client.onNotification(ResourceUpdatedNotification.self) { message in
        let uri = message.params.uri
        print("资源 \(uri) 已更新为新内容")

        // 获取更新后的资源内容
        let updatedContents = try await client.readResource(uri: uri)
        print("已收到更新的资源内容")
    }
}
```
### 提示

提示表示模板化的对话开场白：
```swift
// 列出可用的提示
let (prompts, nextCursor) = try await client.listPrompts()
print("可用提示：\(prompts.map { $0.name }.joined(separator: ", "))")

// 获取带有参数的提示
let (description, messages) = try await client.getPrompt(
    name: "customer-service",
    arguments: [
        "customerName": "Alice",
        "orderNumber": "ORD-12345",
        "issue": "配送延迟"
    ]
)

// 在应用程序中使用提示消息
print("提示描述：\(description)")
for message in messages {
    if case .text(text: let text) = message.content {
        print("\(message.role): \(text)")
    }
}
```
### 采样

采样功能允许服务器通过客户端请求大语言模型（LLM）的推理结果，从而在保持人工参与控制的同时实现智能代理行为。客户端需注册一个处理程序来处理来自服务器的采样请求。

> \[!提示]  
> 采样请求的流向是从 **服务器到客户端**，而非客户端到服务器。  
> 这使得服务器可以请求人工智能辅助，同时客户端仍能控制模型访问和用户审批。
```swift
// 在客户端注册一个采样处理器
await client.withSamplingHandler { 参数 in
    // 查看采样请求（人工介入步骤1）
    print("服务器请求补全内容：\$参数.messages)")
    
    // 可根据用户输入选择性地修改请求
    var messages = 参数.messages
    if let systemPrompt = 参数.systemPrompt {
        print("系统提示词：\$systemPrompt)")
    }
    
    // 从你的LLM中进行采样（此处应调用你的AI服务）
    let completion = try await callYourLLMService(
        messages: messages,
        maxTokens: 参数.maxTokens,
        temperature: 参数.temperature
    )
    
    // 查看补全结果（人工介入步骤2）
    print("LLM生成结果：\$completion)")
    // 用户可以在此批准、修改或拒绝生成结果
    
    // 将结果返回给服务器
    return CreateSamplingMessage.Result(
        model: "your-model-name",
        stopReason: .endTurn,
        role: .assistant,
        content: .text(completion)
    )
}
```
采样流程遵循以下步骤：
```mermaid
sequenceDiagram
    participant S as MCP 服务器
    participant C as MCP 客户端
    participant U as 用户/人工
    participant L as 大语言模型服务

    Note over S,L: 服务器发起的采样请求
    S->>C: sampling/createMessage 请求
    Note right of S: 服务器需要AI辅助<br/>进行决策或生成内容

    Note over C,U: 人工审核流程 #1
    C->>U: 显示采样请求
    U->>U: 审核并可选地修改<br/>消息、系统提示词
    U->>C: 批准请求

    Note over C,L: 客户端处理与大语言模型的交互
    C->>L: 将消息发送给大语言模型
    L->>C: 返回生成结果

    Note over C,U: 人工审核流程 #2
    C->>U: 显示大语言模型生成结果
    U->>U: 审核并可选地修改<br/>或拒绝生成结果
    U->>C: 批准生成结果

    Note over C,S: 将结果返回服务器
    C->>S: sampling/createMessage 响应
    Note left of C: 包含所用模型、<br/>停止原因、最终内容

    Note over S: 服务器继续使用<br/>AI辅助的结果
```
这种人机协同的设计确保了用户
能够控制大语言模型（LLM）所看到和生成的内容，
即使请求是由服务器发起的。

### 错误处理

处理常见的客户端错误：
```swift
do {
    try await client.connect(transport: transport)
    // 成功
} catch let error as MCPError {
    print("MCP 错误: \(error.localizedDescription)")
} catch {
    print("未知错误: \(error)")
}
```
### 高级客户端功能

#### 严格模式与非严格模式配置

配置客户端的能力检查行为：
```swift
// 严格配置 - 如果缺少某个功能，则立即失败
let strictClient = Client(
    name: "StrictClient",
    version: "1.0.0",
    configuration: .strict
)

// 在严格配置下，调用不支持的功能的方法时
// 会立即抛出错误，而不会发送请求
do {
    // 如果 resources.list 功能不可用，则会抛出错误
    let resources = try await strictClient.listResources()
} catch let error as MCPError {
    print("功能不可用: \(error.localizedDescription)")
}

// 默认（非严格）配置 - 即使功能未被服务器声明，也会尝试发送请求
let client = Client(
    name: "FlexibleClient",
    version: "1.0.0",
    configuration: .default
)

// 在默认配置下，即使服务器未声明某个功能，
// 客户端仍会尝试发送请求
do {
    let resources = try await client.listResources()
} catch let error as MCPError {
    // 如果服务器拒绝了请求，仍然需要处理错误
    print("服务器拒绝了请求: \(error.localizedDescription)")
}
```
#### 请求批处理

通过在单个批次中发送多个请求来提高性能：
```swift
// 用于保存工具调用任务的数组
var toolTasks: [Task<CallTool.Result, Swift.Error>] = []

// 发送一批请求
try await client.withBatch { batch in
    // 向批次中添加多个工具调用
    for i in 0..<10 {
        toolTasks.append(
            try await batch.addRequest(
                CallTool.request(.init(name: "square", arguments: ["n": Value(i)]))
            )
        )
    }
}

// 批次发送后处理结果
print("正在处理 \(toolTasks.count) 个工具结果...")
for (index, task) in toolTasks.enumerated() {
    do {
        let result = try await task.value
        print("\(index): \(result.content)")
    } catch {
        print("\(index) 失败: \(error)")
    }
}
```
您还可以批量处理不同类型的请求：
```swift
// 声明任务变量
var pingTask: Task<Ping.Result, Error>?
var promptTask: Task<GetPrompt.Result, Error>?

// 发送包含不同请求类型的批量请求
try await client.withBatch { batch in
    pingTask = try await batch.addRequest(Ping.request())
    promptTask = try await batch.addRequest(
        GetPrompt.request(.init(name: "greeting"))
    )
}

// 处理各个结果
do {
    if let pingTask = pingTask {
        try await pingTask.value
        print("Ping 成功")
    }

    if let promptTask = promptTask {
        let promptResult = try await promptTask.value
        print("提示语：\(promptResult.description ?? "无")")
    }
} catch {
    print("处理批量结果时出错：\(error)")
}
```
> [!NOTE]  
> `Server` 会自动处理来自 MCP 客户端的批量请求。

## 服务器用法

服务器组件允许您的应用程序托管模型功能并响应客户端请求。

### 基本服务器设置
```swift
import MCP

// 使用给定的功能创建服务器
let server = Server(
    name: "MyModelServer",
    version: "1.0.0",
    capabilities: .init(
        prompts: .init(listChanged: true),
        resources: .init(subscribe: true, listChanged: true),
        tools: .init(listChanged: true)
    )
)

// 创建传输通道并启动服务器
let transport = StdioTransport()
try await server.start(transport: transport)

// 现在为你已启用的功能注册处理程序
```
### 工具

注册工具处理程序以响应客户端的工具调用：
```swift
// 注册一个工具列表处理器
await server.withMethodHandler(ListTools.self) { _ in
    let tools = [
        Tool(
            name: "weather",
            description: "获取某个地点的当前天气",
            inputSchema: .object([
                "properties": .object([
                    "location": .string("城市名称或坐标"),
                    "units": .string("度量单位，例如：metric、imperial")
                ])
            ])
        ),
        Tool(
            name: "calculator",
            description: "执行计算",
            inputSchema: .object([
                "properties": .object([
                    "expression": .string("需要计算的数学表达式")
                ])
            ])
        )
    ]
    return .init(tools: tools)
}

// 注册一个工具调用处理器
await server.withMethodHandler(CallTool.self) { params in
    switch params.name {
    case "weather":
        let location = params.arguments?["location"]?.stringValue ?? "未知"
        let units = params.arguments?["units"]?.stringValue ?? "metric"
        let weatherData = getWeatherData(location: location, units: units) // 你需要的实现
        return .init(
            content: [.text("天气信息 - 城市：\(location)，温度：\(weatherData.temperature)°，天气状况：\(weatherData.conditions)")],
            isError: false
        )

    case "calculator":
        if let expression = params.arguments?["expression"]?.stringValue {
            let result = evaluateExpression(expression) // 你需要的实现
            return .init(content: [.text("\(result)")], isError: false)
        } else {
            return .init(content: [.text("缺少表达式参数")], isError: true)
        }

    default:
        return .init(content: [.text("未知的工具")], isError: true)
    }
}
```
### 资源

实现资源处理程序以进行数据访问：
```swift
// 注册资源列表处理器
await server.withMethodHandler(ListResources.self) { params in
    let resources = [
        Resource(
            name: "知识库文章",
            uri: "resource://knowledge-base/articles",
            description: "支持文章和文档的集合"
        ),
        Resource(
            name: "系统状态",
            uri: "resource://system/status",
            description: "当前系统运行状态"
        )
    ]
    return .init(resources: resources, nextCursor: nil)
}

// 注册资源读取处理器
await server.withMethodHandler(ReadResource.self) { params in
    switch params.uri {
    case "resource://knowledge-base/articles":
        return .init(contents: [Resource.Content.text("# 知识库\n\n这是知识库的内容...", uri: params.uri)])

    case "resource://system/status":
        let status = getCurrentSystemStatus() // 你的实现
        let statusJson = """
            {
                "status": "\(status.overall)",
                "components": {
                    "database": "\(status.database)",
                    "api": "\(status.api)",
                    "model": "\(status.model)"
                },
                "lastUpdated": "\(status.timestamp)"
            }
            """
        return .init(contents: [Resource.Content.text(statusJson, uri: params.uri, mimeType: "application/json")])

    default:
        throw MCPError.invalidParams("未知的资源URI: \(params.uri)")
    }
}

// 注册资源订阅处理器
await server.withMethodHandler(ResourceSubscribe.self) { params in
    // 存储订阅以便后续通知。
    // 在多客户端场景中，服务器应用需要管理客户端身份标识，
    // 可能需要使用初始化握手期间提供的信息（如果服务器在初始化后仅处理一个客户端）。
    // addSubscription(clientID: /* 某个客户端标识符 */, uri: params.uri)
    print("客户端订阅了 $params.uri)。服务器需要实现逻辑来跟踪该订阅。")
    return .init()
}
```
### 提示

实现提示处理程序：
```swift
// 注册一个提示列表处理器
await server.withMethodHandler(ListPrompts.self) { params in
    let prompts = [
        Prompt(
            name: "interview",
            description: "求职面试对话开场白",
            arguments: [
                .init(name: "position", description: "职位名称", required: true),
                .init(name: "company", description: "公司名称", required: true),
                .init(name: "interviewee", description: "候选人姓名")
            ]
        ),
        Prompt(
            name: "customer-support",
            description: "客户服务对话开场白",
            arguments: [
                .init(name: "issue", description: "客户问题", required: true),
                .init(name: "product", description: "产品名称", required: true)
            ]
        )
    ]
    return .init(prompts: prompts, nextCursor: nil)
}

// 注册一个提示获取处理器
await server.withMethodHandler(GetPrompt.self) { params in
    switch params.name {
    case "interview":
        let position = params.arguments?["position"]?.stringValue ?? "软件工程师"
        let company = params.arguments?["company"]?.stringValue ?? "Acme 公司"
        let interviewee = params.arguments?["interviewee"]?.stringValue ?? "候选人"

        let description = "应聘 \(company) 的 \(position) 职位的面试"
        let messages: [Prompt.Message] = [
            .user("你正在担任 \(company) 的 \(position) 职位的面试官。"),
            .user("你好，我是 \(interviewee)，我来参加 \(position) 职位的面试。"),
            .assistant("你好，\(interviewee)，欢迎来到 \(company)! 我想先了解一下你的背景和经验。")
        ]

        return .init(description: description, messages: messages)

    case "customer-support":
        // 客户支持提示的类似实现

    default:
        throw MCPError.invalidParams("未知的提示名称: \(params.name)")
    }
}
```
### 采样

服务器可以通过采样向客户端请求大语言模型（LLM）补全。这使得服务器在保持人工监督的同时，能够请求人工智能辅助，从而实现类似智能体的行为。

> \[!NOTE]
> 当前的实现为采样提供了正确的 API 设计，但需要传输层支持双向通信。此功能将在传输层支持双向通信后完全可用。
```swift
// 在服务器中启用采样功能
let server = Server(
    name: "MyModelServer",
    version: "1.0.0",
    capabilities: .init(
        sampling: .init(),  // 启用采样功能
        tools: .init(listChanged: true)
    )
)

// 从客户端请求采样（概念性示例 - 需要双向传输）
do {
    let result = try await server.requestSampling(
        messages: [
            .user("分析这些数据并建议下一步操作")
        ],
        systemPrompt: "你是一个有用的数据分析师",
        temperature: 0.7,
        maxTokens: 150
    )
    
    // 在服务器逻辑中使用LLM的生成结果
    print("LLM建议: \(result.content)")
    
} catch {
    print("采样请求失败: \(error)")
}
```
采样功能支持强大的智能体工作流程：

* **决策制定**：要求大语言模型（LLM）在多个选项中进行选择
* **内容生成**：请求生成内容草稿以供用户审批
* **数据分析**：获取人工智能对复杂数据的洞察
* **多步骤推理**：将人工智能补全结果与工具调用相结合

#### 初始化钩子

使用初始化钩子控制客户端连接：
```swift
// 通过初始化钩子启动服务器
try await server.start(transport: transport) { clientInfo, clientCapabilities in
    // 验证客户端信息
    guard clientInfo.name != "BlockedClient" else {
        throw MCPError.invalidRequest("此客户端不被允许")
    }

    // 你也可以检查客户端的功能
    if clientCapabilities.sampling == nil {
        print("客户端不支持采样")
    }

    // 根据客户端信息执行服务器端设置
    print("客户端 \(clientInfo.name) v\(clientInfo.version) 已连接")

    // 如果钩子执行完毕且未抛出错误，则初始化成功
}
```
### 优雅关闭

我们建议使用 [Swift 服务生命周期](https://github.com/swift-server/swift-service-lifecycle) 来管理服务的启动和关闭。

首先，在你的 `Package.swift` 中添加依赖项：
```swift
.package(url: "https://github.com/swift-server/swift-service-lifecycle.git", from: "2.3.0"),
```
然后将MCP服务器实现为一个`Service`：
```swift
import MCP
import ServiceLifecycle
import Logging

struct MCPService: Service {
    let server: Server
    let transport: Transport

    init(server: Server, transport: Transport) {
        self.server = server
        self.transport = transport
    }

    func run() async throws {
        // 启动服务器
        try await server.start(transport: transport)

        // 持续运行直到外部取消
        try await Task.sleep(for: .days(365 * 100))  // 实际上是永久运行
    }

    func shutdown() async throws {
        // 优雅地关闭服务器
        await server.stop()
    }
}
```
然后在你的应用程序中使用它：
```swift
import MCP
import ServiceLifecycle
import Logging

let logger = Logger(label: "com.example.mcp-server")

// 创建 MCP 服务器
let server = Server(
    name: "MyModelServer",
    version: "1.0.0",
    capabilities: .init(
        prompts: .init(listChanged: true),
        resources: .init(subscribe: true, listChanged: true),
        tools: .init(listChanged: true)
    )
)

// 直接向服务器添加处理程序
await server.withMethodHandler(ListTools.self) { _ in
    // 你的实现
    return .init(tools: [
        Tool(name: "example", description: "一个示例工具")
    ])
}

await server.withMethodHandler(CallTool.self) { params in
    // 你的实现
    return .init(content: [.text("工具执行结果")], isError: false)
}

// 创建 MCP 服务及其他服务
let transport = StdioTransport(logger: logger)
let mcpService = MCPService(server: server, transport: transport)
let databaseService = DatabaseService() // 你的其他服务

// 创建包含信号处理的服务组
let serviceGroup = ServiceGroup(
    services: [mcpService, databaseService],
    configuration: .init(
        gracefulShutdownSignals: [.sigterm, .sigint]
    ),
    logger: logger
)

// 运行服务组 - 此调用会阻塞直到服务关闭
try await serviceGroup.run()
```
这种方法具有以下几个优势：

* **信号处理**：
  自动捕获 SIGINT、SIGTERM 并触发优雅关机
* **优雅关机**：
  正确关闭你的 MCP 服务器和其他服务
* **基于超时的关机**：
  可配置的关机超时时间以防止进程挂起
* **高级服务管理**：
  [`ServiceLifecycle`](https://swiftpackageindex.com/swift-server/swift-service-lifecycle/documentation/servicelifecycle)
  同样支持服务依赖、条件服务以及其他有用的特性。

## 传输协议

MCP 的传输层负责处理客户端与服务器之间的通信。Swift SDK 提供了多种内置的传输协议：

| 传输协议                                                                                         | 描述                                                                                                                                                             | 支持平台                         | 最适合的场景                                                     |
| ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ---------------------------------------------------------------- |
| [`StdioTransport`](https://github.com/Sources/MCP/Base/Transports/StdioTransport.swift)           | 使用标准输入/输出流实现 [stdio 传输协议](https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#stdio)                                               | Apple 平台、Linux with glibc    | 本地子进程、CLI 工具                                             |
| [`HTTPClientTransport`](https://github.com/Sources/MCP/Base/Transports/HTTPClientTransport.swift) | 使用 Foundation 的 URL 加载系统实现 [可流式 HTTP 传输协议](https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#streamable-http)                | 所有支持 Foundation 的平台       | 远程服务器、Web 应用                                              |
| [`InMemoryTransport`](https://github.com/Sources/MCP/Base/Transports/InMemoryTransport.swift)     | 自定义的内存内传输协议，用于同一进程内的直接通信                                                                                                                       | 所有平台                         | 测试、调试、同一进程内客户端-服务器通信                          |
| [`NetworkTransport`](https://github.com/Sources/MCP/Base/Transports/NetworkTransport.swift)       | 使用 Apple 的 Network 框架实现 TCP/UDP 连接的自定义传输协议                                                                                                              | 仅 Apple 平台                    | 低级网络通信、自定义协议                                         |

### 自定义传输协议实现

你可以通过实现 `Transport` 协议来创建一个自定义的传输协议：
```swift
import MCP
import Foundation

public actor MyCustomTransport: Transport {
    public nonisolated let logger: Logger
    private var isConnected = false
    private let messageStream: AsyncThrowingStream<Data, any Swift.Error>
    private let messageContinuation: AsyncThrowingStream<Data, any Swift.Error>.Continuation

    public init(logger: Logger? = nil) {
        self.logger = logger ?? Logger(label: "my.custom.transport")

        var continuation: AsyncThrowingStream<Data, any Swift.Error>.Continuation!
        self.messageStream = AsyncThrowingStream { continuation = $0 }
        self.messageContinuation = continuation
    }

    public func connect() async throws {
        // 实现你的连接逻辑
        isConnected = true
    }

    public func disconnect() async {
        // 实现你的断开连接逻辑
        isConnected = false
        messageContinuation.finish()
    }

    public func send(_ data: Data) async throws {
        // 实现你的消息发送逻辑
    }

    public func receive() -> AsyncThrowingStream<Data, any Swift.Error> {
        return messageStream
    }
}
```
## 平台可用性

Swift SDK 具有以下平台要求：

| 平台             | 最低版本要求                                                                            |
| ---------------- | -------------------------------------------------------------------------------------- |
| macOS            | 13.0+                                                                                  |
| iOS / Mac Catalyst | 16.0+                                                                                 |
| watchOS          | 9.0+                                                                                   |
| tvOS             | 16.0+                                                                                  |
| visionOS         | 1.0+                                                                                   |
| Linux           | 支持 `glibc` 或 `musl` 的发行版，包括 Ubuntu、Debian、Fedora 和 Alpine Linux |

尽管核心库可以在任何支持 Swift 6 的平台（包括 Linux 和 Windows）上运行，
但运行客户端或服务端需要一个兼容的传输协议。

我们正在努力添加 [Windows 支持](https://github.com/modelcontextprotocol/swift-sdk/pull/64)。

## 调试与日志

启用日志记录以帮助排查问题：
```swift
import Logging
import MCP

// 配置日志记录器
LoggingSystem.bootstrap { label in
    var handler = StreamLogHandler.standardOutput(label: label)
    handler.logLevel = .debug
    return handler
}

// 创建日志记录器
let logger = Logger(label: "com.example.mcp")

// 传递给客户端/服务端
let client = Client(name: "MyApp", version: "1.0.0")

// 传递给传输层
let transport = StdioTransport(logger: logger)
```
## 其他资源

* [MCP 规范](https://modelcontextprotocol.io/specification/2025-03-26/)
* [协议文档](https://modelcontextprotocol.io)
* [GitHub 仓库](https://github.com/modelcontextprotocol/swift-sdk)

## 更新日志

该项目遵循 [语义化版本控制](https://semver.org/)。
对于 1.0 之前的版本，
次版本号更新（0.X.0）可能包含破坏性变更。

有关每个版本的详细变更信息，
请参阅 [GitHub Releases 页面](https://github.com/modelcontextprotocol/swift-sdk/releases)。

## 许可证

该项目使用 MIT 许可证。

[mcp]: https://modelcontextprotocol.io

[mcp-spec-2025-03-26]: https://modelcontextprotocol.io/specification/2025-03-26