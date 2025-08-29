# MCP Ruby SDK [![Gem Version](https://img.shields.io/gem/v/mcp)](https://rubygems.org/gems/mcp) [![MIT 协议](https://img.shields.io/badge/license-MIT-green)](https://github.com/modelcontextprotocol/ruby-sdk/blob/main/LICENSE.txt) [![CI](https://raw.githubusercontent.com/modelcontextprotocol/ruby-sdk/actions/workflows/ci.yml/badge.svg/refs/heads//)](https://github.com/modelcontextprotocol/ruby-sdk/actions/workflows/ci.yml)

Model Context Protocol 服务器和客户端的官方 Ruby SDK。

## 安装

将以下代码行添加到你的应用 Gemfile 中：
```ruby
gem 'mcp'
```
然后执行：
```console
$ bundle install
```
或者自行安装：
```console
$ gem install mcp
```
## MCP 服务器

`MCP::Server` 类是处理 JSON-RPC 请求和响应的核心组件。  
它实现了模型上下文协议（Model Context Protocol）规范，用于处理模型上下文请求和响应。

### 主要特性

* 实现 JSON-RPC 2.0 消息处理
* 支持协议初始化和能力协商
* 管理工具注册与调用
* 支持提示（Prompt）注册与执行
* 支持资源注册与检索
* 支持标准输入输出（stdio）和可流式 HTTP（包括 SSE）传输
* 支持列表变更通知（工具、提示、资源）

### 支持的方法

* `initialize` - 初始化协议并返回服务器能力
* `ping` - 简单的健康检查
* `tools/list` - 列出所有已注册的工具及其模式（schema）
* `tools/call` - 使用提供的参数调用特定工具
* `prompts/list` - 列出所有已注册的提示及其模式
* `prompts/get` - 按名称检索特定提示
* `resources/list` - 列出所有已注册的资源及其模式
* `resources/read` - 按名称检索特定资源
* `resources/templates/list` - 列出所有已注册的资源模板及其模式

### 自定义方法

服务器允许你使用 `define_custom_method` 方法定义超出标准 MCP 协议方法之外的自定义 JSON-RPC 方法：
```ruby
server = MCP::Server.new(name: "我的服务器")

# 定义一个返回结果的自定义方法
server.define_custom_method(method_name: "add") do |params|
  params[:a] + params[:b]
end

# 定义一个自定义通知方法（返回 nil）
server.define_custom_method(method_name: "notify") do |params|
  # 处理通知
  nil
end
```
**主要特性：**

* 接受任意方法名称作为字符串
* 块接收请求参数为哈希表
* 可处理常规方法（带响应）和通知
* 防止覆盖现有的 MCP 协议方法
* 支持用于监控的可检测回调

**使用示例：**
```ruby
# 客户端请求
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "add",
  "params": { "a": 5, "b": 3 }
}

# 服务器响应
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": 8
}
```
**错误处理：**

* 如果尝试重写已存在的方法，将抛出 `MCP::Server::MethodAlreadyDefinedError` 错误
* 支持与标准方法相同的异常报告和监控功能

### 通知功能

当工具、提示词或资源列表发生变化时，服务器支持向客户端发送通知。这使得可以实现实时更新而无需轮询。

#### 通知方法

服务器提供了三种通知方法：

* `notify_tools_list_changed` - 当工具列表发生变化时发送通知
* `notify_prompts_list_changed` - 当提示词列表发生变化时发送通知
* `notify_resources_list_changed` - 当资源列表发生变化时发送通知

#### 通知格式

通知遵循 JSON-RPC 2.0 规范，并使用以下方法名称：

* `notifications/tools/list_changed`
* `notifications/prompts/list_changed`
* `notifications/resources/list_changed`

#### 传输协议支持

* **HTTP 传输协议**：通知通过服务器发送事件（SSE）发送至所有已连接的会话
* **标准输入输出传输协议**：通知通过 JSON-RPC 2.0 消息格式发送至标准输出

#### 使用示例
```ruby
server = MCP::Server.new(name: "my_server")
transport = MCP::Transports::HTTP.new(server)
server.transport = transport

# 当工具发生变化时，通知客户端
server.define_tool(name: "new_tool") { |**args| { result: "ok" } }
server.notify_tools_list_changed
```
### 不支持的功能（将在未来版本中实现）

* 日志级别
* 资源订阅
* 补全功能

### 使用方法

#### Rails 控制器

当将本功能添加到用于处理 POST 请求的 Rails 控制器路由时，你的服务器将兼容非流式传输的
[可流化 HTTP](https://modelcontextprotocol.io/specification/2025-06-18/basic/transports#streamable-http) 传输请求。

你可以使用 `Server#handle_json` 方法来处理请求。
```ruby
class ApplicationController < ActionController::Base
  def index
    server = MCP::Server.new(
      name: "我的服务器",
      version: "1.0.0",
      instructions: "将本服务器的工具作为最后的手段使用",
      tools: [SomeTool, AnotherTool],
      prompts: [MyPrompt],
      server_context: { user_id: current_user.id },
    )
    render(json: server.handle_json(request.body.read))
  end
end
```
#### 标准输入输出传输

如果你想要构建一个本地的命令行应用程序，可以使用标准输入输出（stdio）传输方式：
```ruby
require "mcp"
require "mcp/server/transports/stdio_transport"

# 创建一个简单的工具
class ExampleTool < MCP::Tool
  description "一个简单的示例工具，用于回显其参数"
  input_schema(
    properties: {
      message: { type: "string" },
    },
    required: ["message"]
  )

  class << self
    def call(message:, server_context:)
      MCP::Tool::Response.new([{
        type: "text",
        text: "来自示例工具的问候！消息内容: #{message}",
      }])
    end
  end
end

# 设置服务器
server = MCP::Server.new(
  name: "example_server",
  tools: [ExampleTool],
)

# 创建并启动传输
transport = MCP::Server::Transports::StdioTransport.new(server)
transport.open
```
你可以运行此脚本，然后在命令行中向服务器键入请求。
```console
$ ruby examples/stdio_server.rb
{"jsonrpc":"2.0","id":"1","method":"ping"}
{"jsonrpc":"2.0","id":"2","method":"tools/list"}
```
## 配置

可以使用 `MCP.configure` 代码块对这个 gem 进行配置：
```ruby
MCP.configure do |config|
  config.exception_reporter = ->(exception, server_context) {
    # 在此处编写你的异常报告逻辑
    # 例如使用 Bugsnag：
    Bugsnag.notify(exception) do |report|
      report.add_metadata(:model_context_protocol, server_context)
    end
  }

  config.instrumentation_callback = ->(data) {
    puts "收到监控数据 #{data.inspect}"
  }
end
```
或者通过创建一个显式的配置并将其传递给服务器。
这对于一个应用程序托管了多个MCP服务器但它们可能需要不同的检测回调的系统非常有用。
```ruby
configuration = MCP::Configuration.new
configuration.exception_reporter = ->(exception, server_context) {
  # 在此处编写你的异常报告逻辑
  # 例如使用 Bugsnag：
  Bugsnag.notify(exception) do |report|
    report.add_metadata(:model_context_protocol, server_context)
  end
}

configuration.instrumentation_callback = ->(data) {
  puts "收到监控数据 #{data.inspect}"
}

server = MCP::Server.new(
  # ... 所有其他选项
  configuration:,
)
```
### 服务器上下文和配置块数据

#### `server_context`

`server_context` 是一个由用户定义的哈希表，它会被传递到服务器实例中，并可供工具、提示词以及异常/监控回调函数使用。该上下文可用于提供诸如认证状态、用户ID或请求相关数据等信息。

**类型：**
```ruby
服务器上下文：{ [String, Symbol] => 任意值 }
```
**示例：**
```ruby
server = MCP::Server.new(
  name: "my_server",
  server_context: { user_id: current_user.id, request_id: request.uuid }
)
```
此哈希随后作为 `server_context` 参数传递给工具和提示调用，并包含在异常和检测回调中。

#### 配置块数据

##### 异常报告器

异常报告器接收以下参数：

* `exception`：引发的 Ruby 异常对象
* `server_context`：提供给服务器的上下文哈希

**签名：**
```ruby
exception_reporter = ->(异常, 服务器上下文) { ... }
```
##### 检测回调函数

检测回调函数会接收到一个哈希值，该哈希值可能包含以下键：

* `method`：（String）调用的协议方法（例如："ping"、"tools/list"）
* `tool_name`：（String，可选）调用的工具名称
* `prompt_name`：（String，可选）调用的提示名称
* `resource_uri`：（String，可选）调用资源的 URI
* `error`：（String，可选）查找失败时的错误代码
* `duration`：（Float）调用持续时间，单位为秒

**类型：**
```ruby
instrumentation_callback = ->(data) { ... }
# 其中 data 是一个 Hash，其键如上所述
```
**示例：**
```ruby
config.instrumentation_callback = ->(data) {
  puts "监控信息：#{data.inspect}"
}
```
### 服务器协议版本

可以使用 `protocol_version` 关键字参数来覆盖服务器的协议版本：
```ruby
configuration = MCP::Configuration.new(protocol_version: "2024-11-05")
MCP::Server.new(name: "test_server", configuration: configuration)
```
这将使所有新的服务器实例使用指定的协议版本，而不是默认版本。可以通过将协议版本设置为 `nil` 来将其重置为默认版本：
```ruby
MCP::Configuration.new(协议版本: nil)
```
如果设置了无效的 `protocol_version` 值，则会抛出 `ArgumentError`。

请务必查看 [MCP 规范](https://modelcontextprotocol.io/specification/versioning)，了解所设置协议版本支持的功能。

### 异常报告

异常报告器接收两个参数：

* `exception`：抛出的 Ruby 异常对象
* `server_context`：包含错误发生位置上下文信息的哈希

`server_context` 哈希包括：

* 对于工具调用：`{ tool_name: "name", arguments: { ... } }`
* 对于通用请求处理：`{ request: { ... } }`

当发生异常时：

1. 通过配置的报告器报告异常
2. 对于工具调用，会向客户端返回一个通用错误响应：`{ error: "发生内部错误", isError: true }`
3. 对于其他请求，在报告异常后重新抛出该异常

如果没有配置异常报告器，则使用默认的空操作报告器，该报告器会静默忽略所有异常。

## 工具

MCP 规范包含了 [工具](https://modelcontextprotocol.io/specification/2025-06-18/server/tools)，为 LLM 应用提供功能。

该 gem 提供了一个 `MCP::Tool` 类，可以通过两种方式创建工具：

1. 作为类定义：
```ruby
class MyTool < MCP::Tool
  description "此工具用于执行特定功能..."
  input_schema(
    properties: {
      message: { type: "string" },
    },
    required: ["message"]
  )
  annotations(
    title: "我的工具",
    read_only_hint: true,
    destructive_hint: false,
    idempotent_hint: true,
    open_world_hint: false
  )

  def self.call(message:, server_context:)
    MCP::Tool::Response.new([{ type: "text", text: "OK" }])
  end
end

tool = MyTool
```
2. 使用带有代码块的 `MCP::Tool.define` 方法：
```ruby
tool = MCP::Tool.define(
  name: "my_tool",
  description: "该工具执行特定功能...",
  annotations: {
    title: "我的工具",
    read_only_hint: true
  }
) do |args, server_context|
  MCP::Tool::Response.new([{ type: "text", text: "OK" }])
end
```
`server_context` 参数是传递给服务器的 `server_context`，可用于传递每个请求的信息，例如与身份验证状态相关的信息。

### 工具注解

工具可以包含提供其行为附加元数据的注解。支持以下注解：

* `title`: 工具的可读标题
* `read_only_hint`: 指示工具是否仅读取数据（不修改状态）
* `destructive_hint`: 指示工具是否执行破坏性操作
* `idempotent_hint`: 指示工具的操作是否是幂等的
* `open_world_hint`: 指示工具是否在开放世界环境中运行

注解可以通过使用 `annotations` 类方法在类定义中设置，也可以在使用 `define` 方法定义工具时设置。

## 提示词（Prompts）

MCP 规范包含 [提示词（Prompts）](https://modelcontextprotocol.io/specification/2025-06-18/server/prompts)，允许服务器定义可重用的提示词模板和工作流，客户端可以轻松地向用户和大语言模型（LLMs）展示这些内容。

`MCP::Prompt` 类提供了两种创建提示词的方式：

1. 作为包含元数据的类定义：
```ruby
class MyPrompt < MCP::Prompt
  prompt_name "my_prompt"  # 可选 - 默认为类名的下划线格式
  description "此提示执行特定功能..."
  arguments [
    MCP::Prompt::Argument.new(
      name: "message",
      description: "输入消息",
      required: true
    )
  ]

  class << self
    def template(args, server_context:)
      MCP::Prompt::Result.new(
        description: "响应描述",
        messages: [
          MCP::Prompt::Message.new(
            role: "用户",
            content: MCP::Content::Text.new("用户消息")
          ),
          MCP::Prompt::Message.new(
            role: "助手",
            content: MCP::Content::Text.new(args["message"])
          )
        ]
      )
    end
  end
end

prompt = MyPrompt
```
2. 使用 `MCP::Prompt.define` 方法：
```ruby
prompt = MCP::Prompt.define(
  name: "my_prompt",
  description: "此提示执行特定功能...",
  arguments: [
    MCP::Prompt::Argument.new(
      name: "message",
      description: "输入消息",
      required: true
    )
  ]
) do |args, server_context:|
  MCP::Prompt::Result.new(
    description: "响应描述",
    messages: [
      MCP::Prompt::Message.new(
        role: "user",
        content: MCP::Content::Text.new("用户消息")
      ),
      MCP::Prompt::Message.new(
        role: "assistant",
        content: MCP::Content::Text.new(args["message"])
      )
    ]
  )
end
```
`server_context` 参数是传递给服务器的 `server_context`，可用于传递每个请求的信息，例如关于身份验证状态或用户偏好。

### 关键组件

* `MCP::Prompt::Argument` - 定义提示模板的输入参数
* `MCP::Prompt::Message` - 表示对话中的消息，包含角色和内容
* `MCP::Prompt::Result` - 包含描述和消息的提示模板输出
* `MCP::Content::Text` - 消息的文本内容

### 使用方法

向 MCP 服务器注册提示：
```ruby
server = MCP::Server.new(
  name: "my_server",
  prompts: [MyPrompt],
  server_context: { user_id: current_user.id },
)
```
服务器将通过 MCP 协议方法处理提示的列出与执行：

* `prompts/list` - 列出所有已注册的提示及其模式
* `prompts/get` - 检索并执行特定提示及其参数

### 检测（Instrumentation）

服务器允许注册一个回调函数以接收检测相关信息。
要注册处理程序，可将一个过程（proc）或 lambda 函数作为 `instrumentation_callback` 参数传递给服务器构造函数。
```ruby
MCP.configure do |config|
  config.instrumentation_callback = ->(data) {
    puts "收到监控数据 #{data.inspect}"
  }
end
```
数据包含以下键：
`method`：调用的方法，例如 `ping`、`tools/list`、`tools/call` 等  
`tool_name`：调用的工具名称  
`prompt_name`：调用的提示名称  
`resource_uri`：调用资源的 URI  
`error`：如果查找工具/提示等失败，例如 `tool_not_found`  
`duration`：调用的持续时间（以秒为单位）

仅当注册了匹配的处理程序时，才会填充 `tool_name`、`prompt_name` 和 `resource_uri` 字段。  
这是为了避免潜在的指标维度问题。

## 资源

MCP 规范包含了 [资源](https://modelcontextprotocol.io/specification/2025-06-18/server/resources)。  

`MCP::Resource` 类提供了一种向服务器注册资源的方式。
```ruby
resource = MCP::Resource.new(
  uri: "https://example.com/my_resource",
  name: "我的资源",
  description: "Lorem ipsum dolor sit amet",
  mime_type: "text/html",
)

server = MCP::Server.new(
  name: "my_server",
  resources: [resource],
)
```
服务器必须为 `resources/read` 方法注册一个处理程序，以动态检索资源。
```ruby
server.resources_read_handler do |params|
  [{
    uri: params[:uri],
    mimeType: "text/plain",
    text: "来自示例资源的消息！URI: #{params[:uri]}"
  }]
end

```
否则，`resources/read` 请求将不执行任何操作。

## 发布版本

该 gem 发布在 [RubyGems.org](https://rubygems.org/gems/mcp)

发布由对 `main` 分支的 PR 触发，该 PR 会更新 `lib/mcp/version.rb` 中的版本号。

1. **更新 `lib/mcp/version.rb` 中的版本号**，遵循 [语义化版本（semver）规范](https://semver.org/)
2. **更新 CHANGELOG.md**，如有必要，补充上次发布以来的变更内容，并为新版本添加一个新的章节，同时清空 "Unreleased" 部分
3. **创建 PR 并获得维护者的批准**
4. **将你的 PR 合并到 main 分支** - 这将通过 GitHub Actions 自动触发发布流程

当更改合并到 `main` 分支后，GitHub Actions 工作流（`.github/workflows/release.yml`）将被触发，并将该 gem 发布到 RubyGems。