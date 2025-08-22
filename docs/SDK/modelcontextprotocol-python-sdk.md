# MCP Python SDK

<div align="center">

<strong>Model Context Protocol (MCP) 的 Python 实现</strong>

[![PyPI][pypi-badge]][pypi-url]
[![MIT 许可证][mit-badge]][mit-url]
[![Python 版本][python-badge]][python-url]
[![文档][docs-badge]][docs-url]
[![规范][spec-badge]][spec-url]
[![GitHub 讨论区][discussions-badge]][discussions-url]

</div>

<!-- omit in toc -->

## 目录

* [MCP Python SDK](#mcp-python-sdk)
  * [概述](#概述)
  * [安装](#安装)
    * [将 MCP 添加到你的 Python 项目](#将-mcp-添加到你的-python-项目)
    * [运行独立的 MCP 开发工具](#运行独立的-mcp-开发工具)
  * [快速入门](#快速入门)
  * [什么是 MCP？](#什么是-mcp)
  * [核心概念](#核心概念)
    * [服务器](#服务器)
    * [资源](#资源)
    * [工具](#工具)
      * [结构化输出](#结构化输出)
    * [提示](#提示)
    * [图像](#图像)
    * [上下文](#上下文)
    * [补全](#补全)
    * [引导](#引导)
    * [采样](#采样)
    * [日志和通知](#日志和通知)
    * [身份验证](#身份验证)
    * [FastMCP 属性](#fastmcp-属性)
    * [会话属性](#会话属性和方法)
    * [请求上下文属性](#请求上下文属性)
  * [运行你的服务器](#运行你的服务器)
    * [开发模式](#开发模式)
    * [Claude 桌面集成](#claude-桌面集成)
    * [直接执行](#直接执行)
    * [可流式 HTTP 传输](#可流式-http-传输)
    * [挂载到现有 ASGI 服务器](#挂载到现有-asgi-服务器)
  * [高级用法](#高级用法)
    * [底层服务器](#底层服务器)
    * [编写 MCP 客户端](#编写-mcp-客户端)
    * [客户端显示工具](#客户端显示工具)
    * [客户端的 OAuth 身份验证](#客户端的-oauth-身份验证)
    * [解析工具结果](#解析工具结果)
    * [MCP 原语](#mcp-原语)
    * [服务器能力](#服务器能力)
  * [文档](#文档)
  * [贡献](#贡献)
  * [许可证](#许可证)

[pypi-badge]: https://img.shields.io/pypi/v/mcp.svg

[pypi-url]: https://pypi.org/project/mcp/

[mit-badge]: https://img.shields.io/pypi/l/mcp.svg

[mit-url]: https://github.com/modelcontextprotocol/python-sdk/blob/main/LICENSE

[python-badge]: https://img.shields.io/pypi/pyversions/mcp.svg

[python-url]: https://www.python.org/downloads/

[docs-badge]: https://img.shields.io/badge/docs-modelcontextprotocol.io-blue.svg

[docs-url]: https://modelcontextprotocol.io

[spec-badge]: https://img.shields.io/badge/spec-spec.modelcontextprotocol.io-blue.svg

[spec-url]: https://spec.modelcontextprotocol.io

[discussions-badge]: https://img.shields.io/github/discussions/modelcontextprotocol/python-sdk

[discussions-url]: https://github.com/modelcontextprotocol/python-sdk/discussions

## 概述

Model Context Protocol（模型上下文协议）允许应用程序以标准化方式为大语言模型（LLM）提供上下文，将提供上下文与实际的 LLM 交互分离开来。这个 Python SDK 实现了完整的 MCP 规范，使得可以轻松地：

* 构建能够连接到任意 MCP 服务器的 MCP 客户端
* 创建暴露资源、提示和工具的 MCP 服务器
* 使用标准传输方式，如 stdio、SSE 和可流式 HTTP
* 处理所有 MCP 协议消息和生命周期事件

## 安装

### 将 MCP 添加到你的 Python 项目

我们推荐使用 [uv](https://docs.astral.sh/uv/) 来管理你的 Python 项目。

如果你还没有创建一个由 uv 管理的项目，请先创建一个：
```bash
uv init mcp-server-demo
cd mcp-server-demo
```
然后将 MCP 添加到你的项目依赖项中：
```bash
uv add "mcp[cli]"
```
或者，对于使用 pip 管理依赖的项目：
```bash
pip install "mcp[cli]"
```
### 运行独立的 MCP 开发工具

使用 uv 运行 mcp 命令：
```bash
uv run mcp
```
## 快速开始

让我们创建一个简单的 MCP 服务器，该服务器提供一个计算器工具和一些数据：

<!-- snippet-source examples/snippets/servers/fastmcp_quickstart.py -->
```python
"""
FastMCP 快速入门示例。

进入 `examples/snippets/clients` 目录并运行：
    uv run server fastmcp_quickstart stdio
"""

from mcp.server.fastmcp import FastMCP

# 创建一个 MCP 服务器
mcp = FastMCP("示例")


# 添加一个加法工具
@mcp.tool()
def add(a: int, b: int) -> int:
    """将两个数字相加"""
    return a + b


# 添加一个动态问候资源
@mcp.resource("greeting://{name}")
def get_greeting(name: str) -> str:
    """获取个性化问候语"""
    return f"你好，{name}！"


# 添加一个提示词模板
@mcp.prompt()
def greet_user(name: str, style: str = "友好") -> str:
    """生成一个问候提示词"""
    styles = {
        "友好": "请写一个温暖、友好的问候",
        "正式": "请写一个正式、专业的问候",
        "随意": "请写一个随意、轻松的问候",
    }

    return f"{styles.get(style, styles['友好'])}，对象名字是 {name}。"
```
完整示例：[examples/snippets/servers/fastmcp_quickstart.py](https://github.com/modelcontextprotocol/python-sdk/blob/main/examples/snippets/servers/fastmcp_quickstart.py)

<!-- /snippet-source -->

你可以将此服务器安装到 [Claude Desktop](https://claude.ai/download) 中，通过运行以下命令立即与它交互：
```bash
uv run mcp install server.py
```
或者，你可以使用 MCP Inspector 进行测试：
```bash
uv run mcp dev server.py
```
## 什么是 MCP？

[模型上下文协议（MCP）](https://modelcontextprotocol.io) 让你可以构建服务器，以安全、标准化的方式向LLM应用程序公开数据和功能。你可以把它想象成一个Web API，但它是专门为LLM交互设计的。MCP服务器具备以下功能：

* 通过 **资源（Resources）** 公开数据（可以将其理解为GET端点；它们用于将信息加载到LLM的上下文中）
* 通过 **工具（Tools）** 提供功能（可以将其理解为POST端点；它们用于执行代码或产生其他副作用）
* 通过 **提示（Prompts）** 定义交互模式（LLM交互的可重用模板）
* 更多功能！

## 核心概念

### 服务器

FastMCP服务器是你与MCP协议交互的核心接口。它负责连接管理、协议合规性和消息路由：

<!-- snippet-source examples/snippets/servers/lifespan_example.py -->
```python
"""一个示例，展示对具有强类型支持的启动/关闭生命周期管理。"""

from collections.abc import AsyncIterator
from contextlib import asynccontextmanager
from dataclasses import dataclass

from mcp.server.fastmcp import Context, FastMCP
from mcp.server.session import ServerSession


# 用于示例的模拟数据库类
class Database:
    """模拟数据库类用于示例。"""

    @classmethod
    async def connect(cls) -> "Database":
        """连接到数据库。"""
        return cls()

    async def disconnect(self) -> None:
        """断开与数据库的连接。"""
        pass

    def query(self) -> str:
        """执行查询。"""
        return "查询结果"


@dataclass
class AppContext:
    """包含类型化依赖项的应用程序上下文。"""

    db: Database


@asynccontextmanager
async def app_lifespan(server: FastMCP) -> AsyncIterator[AppContext]:
    """使用类型安全上下文管理应用程序生命周期。"""
    # 启动时初始化
    db = await Database.connect()
    try:
        yield AppContext(db=db)
    finally:
        # 关闭时清理
        await db.disconnect()


# 将生命周期管理器传递给服务器
mcp = FastMCP("我的应用", lifespan=app_lifespan)


# 在工具中访问类型安全的生命周期上下文
@mcp.tool()
def query_db(ctx: Context[ServerSession, AppContext]) -> str:
    """使用已初始化资源的工具。"""
    db = ctx.request_context.lifespan_context.db
    return db.query()
```
完整示例: [examples/snippets/servers/lifespan_example.py](https://github.com/modelcontextprotocol/python-sdk/blob/main/examples/snippets/servers/lifespan_example.py)

<!-- /snippet-source -->

### 资源

资源是向LLM公开数据的方式。它们类似于REST API中的GET端点 - 它们提供数据，但不应执行重要计算或产生副作用：

<!-- snippet-source examples/snippets/servers/basic_resource.py -->
```python
from mcp.server.fastmcp import FastMCP

mcp = FastMCP(name="Resource 示例")


@mcp.resource("file://documents/{name}")
def read_document(name: str) -> str:
    """通过名称读取文档。"""
    # 这里通常会从磁盘读取
    return f"{name} 的内容"


@mcp.resource("config://settings")
def get_settings() -> str:
    """获取应用程序设置。"""
    return """{
  "theme": "dark",
  "language": "en",
  "debug": false
}"""
```
完整示例：[examples/snippets/servers/basic\_resource.py](https://github.com/modelcontextprotocol/python-sdk/blob/main/examples/snippets/servers/basic_resource.py)

<!-- /snippet-source -->

### 工具

工具允许大语言模型（LLMs）通过你的服务器执行操作。与资源不同，工具通常会执行计算并产生副作用：  

<!-- snippet-source examples/snippets/servers/basic_tool.py -->
```python
from mcp.server.fastmcp import FastMCP

mcp = FastMCP(name="工具示例")


@mcp.tool()
def sum(a: int, b: int) -> int:
    """将两个数字相加。"""
    return a + b


@mcp.tool()
def get_weather(city: str, unit: str = "celsius") -> str:
    """获取城市的天气。"""
    # 这里通常会调用天气API
    return f"{city}的天气：22度{unit[0].upper()}"
```
完整示例：[examples/snippets/servers/basic_tool.py](https://github.com/modelcontextprotocol/python-sdk/blob/main/examples/snippets/servers/basic_tool.py)

<!-- /snippet-source -->

工具可以选择通过包含带有 `Context` 类型注解的参数来接收一个 Context 对象。此上下文由 FastMCP 框架自动注入，并提供对 MCP 功能的访问权限：

<!-- snippet-source examples/snippets/servers/tool_progress.py -->
```python
from mcp.server.fastmcp import Context, FastMCP
from mcp.server.session import ServerSession

mcp = FastMCP(name="进度示例")


@mcp.tool()
async def long_running_task(task_name: str, ctx: Context[ServerSession, None], steps: int = 5) -> str:
    """执行带有进度更新的任务。"""
    await ctx.info(f"开始任务：{task_name}")

    for i in range(steps):
        progress = (i + 1) / steps
        await ctx.report_progress(
            progress=progress,
            total=1.0,
            message=f"步骤 {i + 1}/{steps}",
        )
        await ctx.debug(f"已完成第 {i + 1} 步")

    return f"任务 '{task_name}' 已完成"
```
完整示例：[examples/snippets/servers/tool_progress.py](https://github.com/modelcontextprotocol/python-sdk/blob/main/examples/snippets/servers/tool_progress.py)

<!-- /snippet-source -->

#### 结构化输出

如果工具的返回类型注解是兼容的，则默认返回结构化结果；否则将返回非结构化结果。

结构化输出支持以下返回类型：

* Pydantic 模型（BaseModel 的子类）
* TypedDict
* 带有类型提示的数据类及其他类
* `dict[str, T]`（其中 T 是任何可 JSON 序列化的类型）
* 基础类型（str、int、float、bool、bytes、None）——将被封装在 `{"result": value}` 中
* 泛型类型（list、tuple、Union、Optional 等）——将被封装在 `{"result": value}` 中

没有类型提示的类无法被序列化以用于结构化输出。只有具有正确注解属性的类才会被转换为 Pydantic 模型，用于生成和验证模式。

结构化结果会自动根据注解生成的输出模式进行验证。这确保了工具返回的是类型正确且经过验证的数据，客户端可以轻松处理。

**注意：** 为了向后兼容，也会返回非结构化结果。非结构化结果是为了与 MCP 规范的早期版本兼容，并且当前版本的 SDK 中与旧版 FastMCP 的行为保持兼容。

**注意：** 如果某个工具函数的返回类型注解导致该工具被归类为结构化输出，而这不是期望的行为，可以通过向 `@tool` 装饰器传入 `structured_output=False` 来抑制该分类。

<!-- snippet-source examples/snippets/servers/structured_output.py -->
```python
"""展示工具使用结构化输出的示例。"""

from typing import TypedDict

from pydantic import BaseModel, Field

from mcp.server.fastmcp import FastMCP

mcp = FastMCP("结构化输出示例")


# 使用 Pydantic 模型表示丰富的结构化数据
class WeatherData(BaseModel):
    """天气信息结构。"""

    temperature: float = Field(description="摄氏度温度")
    humidity: float = Field(description="湿度百分比")
    condition: str
    wind_speed: float


@mcp.tool()
def get_weather(city: str) -> WeatherData:
    """获取城市的天气 - 返回结构化数据。"""
    # 模拟的天气数据
    return WeatherData(
        temperature=72.5,
        humidity=45.0,
        condition="晴天",
        wind_speed=5.2,
    )


# 使用 TypedDict 表示更简单的结构
class LocationInfo(TypedDict):
    latitude: float
    longitude: float
    name: str


@mcp.tool()
def get_location(address: str) -> LocationInfo:
    """获取位置坐标"""
    return LocationInfo(latitude=51.5074, longitude=-0.1278, name="英国伦敦")


# 使用 dict[str, Any] 表示灵活的模式
@mcp.tool()
def get_statistics(data_type: str) -> dict[str, float]:
    """获取各种统计数据"""
    return {"mean": 42.5, "median": 40.0, "std_dev": 5.2}


# 带类型提示的普通类可用于结构化输出
class UserProfile:
    name: str
    age: int
    email: str | None = None

    def __init__(self, name: str, age: int, email: str | None = None):
        self.name = name
        self.age = age
        self.email = email


@mcp.tool()
def get_user(user_id: str) -> UserProfile:
    """获取用户资料 - 返回结构化数据"""
    return UserProfile(name="Alice", age=30, email="alice@example.com")


# 没有类型提示的类不能用于结构化输出
class UntypedConfig:
    def __init__(self, setting1, setting2):  # type: ignore[reportMissingParameterType]
        self.setting1 = setting1
        self.setting2 = setting2


@mcp.tool()
def get_config() -> UntypedConfig:
    """此方法返回非结构化输出 - 不生成模式"""
    return UntypedConfig("value1", "value2")


# 列表和其他类型会自动包装
@mcp.tool()
def list_cities() -> list[str]:
    """获取城市列表"""
    return ["London", "Paris", "Tokyo"]
    # 返回: {"result": ["London", "Paris", "Tokyo"]}


@mcp.tool()
def get_temperature(city: str) -> float:
    """获取温度，作为简单的浮点数返回"""
    return 22.5
    # 返回: {"result": 22.5}
```
完整示例：[examples/snippets/servers/structured_output.py](https://github.com/modelcontextprotocol/python-sdk/blob/main/examples/snippets/servers/structured_output.py)

<!-- /snippet-source -->

### 提示词

提示词是可重复使用的模板，可帮助大语言模型（LLM）更有效地与你的服务器进行交互：

<!-- snippet-source examples/snippets/servers/basic_prompt.py -->
```python
from mcp.server.fastmcp import FastMCP
from mcp.server.fastmcp.prompts import base

mcp = FastMCP(name="提示示例")


@mcp.prompt(title="代码审查")
def review_code(code: str) -> str:
    return f"请审查这段代码：\n\n{code}"


@mcp.prompt(title="调试助手")
def debug_error(error: str) -> list[base.Message]:
    return [
        base.UserMessage("我遇到了这个错误："),
        base.UserMessage(error),
        base.AssistantMessage("我会帮您调试这个问题。您到目前为止尝试过哪些方法？"),
    ]
```
完整示例：[examples/snippets/servers/basic_prompt.py](https://github.com/modelcontextprotocol/python-sdk/blob/main/examples/snippets/servers/basic_prompt.py)

<!-- /snippet-source -->

### 图像

FastMCP 提供了一个 `Image` 类，可以自动处理图像数据：

<!-- snippet-source examples/snippets/servers/images.py -->
```python
"""展示使用 FastMCP 进行图像处理的示例。"""

from PIL import Image as PILImage

from mcp.server.fastmcp import FastMCP, Image

mcp = FastMCP("图像示例")


@mcp.tool()
def create_thumbnail(image_path: str) -> Image:
    """根据图像创建缩略图"""
    img = PILImage.open(image_path)
    img.thumbnail((100, 100))
    return Image(data=img.tobytes(), format="png")
```
完整示例：[examples/snippets/servers/images.py](https://github.com/modelcontextprotocol/python-sdk/blob/main/examples/snippets/servers/images.py)

<!-- /snippet-source -->

### 上下文（Context）

当工具（tool）和资源（resource）函数通过类型提示（type hints）请求时，上下文对象（Context）会被自动注入到这些函数中。它提供了对 MCP 能力的访问，例如日志记录、进度报告、资源读取、用户交互以及请求元数据。

#### 在函数中获取上下文（Context）

要在工具或资源函数中使用上下文，只需添加一个类型为 `Context` 的参数即可：
```python
from mcp.server.fastmcp import Context, FastMCP

mcp = FastMCP(name="上下文示例")


@mcp.tool()
async def my_tool(x: int, ctx: Context) -> str:
    """使用上下文功能的工具。"""
    # 上下文参数可以使用任何名称，只要其带有类型注解即可
    return await process_with_context(x, ctx)
```
#### 上下文属性和方法

上下文（Context）对象提供了以下功能：

* `ctx.request_id` - 当前请求的唯一ID
* `ctx.client_id` - 如果可用的客户端ID
* `ctx.fastmcp` - 访问FastMCP服务器实例（参见[FastMCP属性](#fastmcp-properties)）
* `ctx.session` - 访问底层会话进行高级通信（参见[会话属性和方法](#session-properties-and-methods)）
* `ctx.request_context` - 访问特定请求的数据和生命周期资源（参见[请求上下文属性](#request-context-properties)）
* `await ctx.debug(message)` - 发送调试日志消息
* `await ctx.info(message)` - 发送信息日志消息
* `await ctx.warning(message)` - 发送警告日志消息
* `await ctx.error(message)` - 发送错误日志消息
* `await ctx.log(level, message, logger_name=None)` - 使用自定义级别发送日志
* `await ctx.report_progress(progress, total=None, message=None)` - 报告操作进度
* `await ctx.read_resource(uri)` - 通过URI读取资源
* `await ctx.elicit(message, schema)` - 请求用户提供附加信息并进行验证
```python
from mcp.server.fastmcp import Context, FastMCP
from mcp.server.session import ServerSession

mcp = FastMCP(name="进度示例")


@mcp.tool()
async def long_running_task(task_name: str, ctx: Context[ServerSession, None], steps: int = 5) -> str:
    """执行带有进度更新的任务。"""
    await ctx.info(f"开始任务：{task_name}")

    for i in range(steps):
        progress = (i + 1) / steps
        await ctx.report_progress(
            progress=progress,
            total=1.0,
            message=f"步骤 {i + 1}/{steps}",
        )
        await ctx.debug(f"已完成步骤 {i + 1}")

    return f"任务 '{task_name}' 已完成"
```
完整示例：[examples/snippets/servers/tool_progress.py](https://github.com/modelcontextprotocol/python-sdk/blob/main/examples/snippets/servers/tool_progress.py)

<!-- /snippet-source -->

### 补全功能

MCP 支持为提示参数和资源模板参数提供补全建议。通过使用上下文参数，服务器可以根据之前解析的值来提供补全建议：

客户端用法：

<!-- snippet-source examples/snippets/clients/completion_client.py -->
```python
"""
转到 `examples/snippets` 目录并运行：
    uv run completion-client
"""

import asyncio
import os

from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client
from mcp.types import PromptReference, ResourceTemplateReference

# 为 stdio 连接创建服务器参数
server_params = StdioServerParameters(
    command="uv",  # 使用 uv 运行服务器
    args=["run", "server", "completion", "stdio"],  # 支持补全功能的服务器
    env={"UV_INDEX": os.environ.get("UV_INDEX", "")},
)


async def run():
    """运行补全客户端示例。"""
    async with stdio_client(server_params) as (read, write):
        async with ClientSession(read, write) as session:
            # 初始化连接
            await session.initialize()

            # 列出可用的资源模板
            templates = await session.list_resource_templates()
            print("可用的资源模板：")
            for template in templates.resourceTemplates:
                print(f"  - {template.uriTemplate}")

            # 列出可用的提示词
            prompts = await session.list_prompts()
            print("\n可用的提示词：")
            for prompt in prompts.prompts:
                print(f"  - {prompt.name}")

            # 补全资源模板参数
            if templates.resourceTemplates:
                template = templates.resourceTemplates[0]
                print(f"\n正在补全资源模板参数：{template.uriTemplate}")

                # 无上下文补全
                result = await session.complete(
                    ref=ResourceTemplateReference(type="ref/resource", uri=template.uriTemplate),
                    argument={"name": "owner", "value": "model"},
                )
                print(f"'owner' 以 'model' 开头的补全结果：{result.completion.values}")

                # 带上下文补全 - 根据 owner 提供 repo 建议
                result = await session.complete(
                    ref=ResourceTemplateReference(type="ref/resource", uri=template.uriTemplate),
                    argument={"name": "repo", "value": ""},
                    context_arguments={"owner": "modelcontextprotocol"},
                )
                print(f"'repo' 在 owner='modelcontextprotocol' 的补全结果：{result.completion.values}")

            # 补全提示词参数
            if prompts.prompts:
                prompt_name = prompts.prompts[0].name
                print(f"\n正在补全提示词参数：{prompt_name}")

                result = await session.complete(
                    ref=PromptReference(type="ref/prompt", name=prompt_name),
                    argument={"name": "style", "value": ""},
                )
                print(f"'style' 参数的补全结果：{result.completion.values}")


def main():
    """补全客户端的入口点。"""
    asyncio.run(run())


if __name__ == "__main__":
    main()
```
完整示例：[examples/snippets/clients/completion\_client.py](https://github.com/modelcontextprotocol/python-sdk/blob/main/examples/snippets/clients/completion_client.py)

<!-- /snippet-source -->

### 信息获取

向用户请求额外信息。以下示例展示在工具调用过程中进行信息获取的场景：

<!-- snippet-source examples/snippets/servers/elicitation.py -->
```python
from pydantic import BaseModel, Field

from mcp.server.fastmcp import Context, FastMCP
from mcp.server.session import ServerSession

mcp = FastMCP(name="Elicitation Example")


class BookingPreferences(BaseModel):
    """用于收集用户偏好的Schema。"""

    checkAlternative: bool = Field(description="您是否想查看其他日期？")
    alternativeDate: str = Field(
        default="2024-12-26",
        description="替代日期（YYYY-MM-DD）",
    )


@mcp.tool()
async def book_table(date: str, time: str, party_size: int, ctx: Context[ServerSession, None]) -> str:
    """预订餐桌并检查日期可用性。"""
    # 检查日期是否可用
    if date == "2024-12-25":
        # 日期不可用 - 向用户请求替代日期
        result = await ctx.elicit(
            message=(f"在 {date} 这一天没有适合 {party_size} 人的桌位。您想尝试其他日期吗？"),
            schema=BookingPreferences,
        )

        if result.action == "accept" and result.data:
            if result.data.checkAlternative:
                return f"[SUCCESS] 已预订 {result.data.alternativeDate}"
            return "[CANCELLED] 未进行预订"
        return "[CANCELLED] 预订已取消"

    # 日期可用
    return f"[SUCCESS] 已预订 {date} {time} 的桌位"
```
完整示例：[examples/snippets/servers/elicitation.py](https://github.com/modelcontextprotocol/python-sdk/blob/main/examples/snippets/servers/elicitation.py)

<!-- /snippet-source -->

`elicit()` 方法返回一个 `ElicitationResult` 对象，包含以下内容：

* `action`: "accept"（接受）、"decline"（拒绝）或 "cancel"（取消）
* `data`: 已验证的响应（仅在被接受时存在）
* `validation_error`: 任何验证错误信息

### 抽样

工具可以通过抽样（生成文本）与大语言模型（LLM）进行交互：

<!-- snippet-source examples/snippets/servers/sampling.py -->
```python
from mcp.server.fastmcp import Context, FastMCP
from mcp.server.session import ServerSession
from mcp.types import SamplingMessage, TextContent

mcp = FastMCP(name="Sampling 示例")


@mcp.tool()
async def generate_poem(topic: str, ctx: Context[ServerSession, None]) -> str:
    """使用LLM采样生成一首诗。"""
    prompt = f"写一首关于{topic}的短诗"

    result = await ctx.session.create_message(
        messages=[
            SamplingMessage(
                role="user",
                content=TextContent(type="text", text=prompt),
            )
        ],
        max_tokens=100,
    )

    if result.content.type == "text":
        return result.content.text
    return str(result.content)
```
完整示例：[examples/snippets/servers/sampling.py](https://github.com/modelcontextprotocol/python-sdk/blob/main/examples/snippets/servers/sampling.py)

<!-- /snippet-source -->

### 日志和通知

工具可以通过上下文发送日志和通知：  

<!-- snippet-source examples/snippets/servers/notifications.py -->
```python
from mcp.server.fastmcp import Context, FastMCP
from mcp.server.session import ServerSession

mcp = FastMCP(name="通知示例")


@mcp.tool()
async def process_data(data: str, ctx: Context[ServerSession, None]) -> str:
    """带日志记录的数据处理。"""
    # 不同的日志级别
    await ctx.debug(f"调试：正在处理 '{data}'")
    await ctx.info("信息：开始处理")
    await ctx.warning("警告：此功能为实验性功能")
    await ctx.error("错误：（这只是一个演示）")

    # 通知资源变更
    await ctx.session.send_resource_list_changed()

    return f"已处理：{data}"
```
完整示例：[examples/snippets/servers/notifications.py](https://github.com/modelcontextprotocol/python-sdk/blob/main/examples/snippets/servers/notifications.py)

<!-- /snippet-source -->

### 身份验证

身份验证可用于希望暴露访问受保护资源工具的服务器。

`mcp.server.auth` 实现了 OAuth 2.1 资源服务器功能，其中 MCP 服务器作为资源服务器（RS），验证由独立的授权服务器（AS）颁发的令牌。这遵循 [MCP 授权规范](https://modelcontextprotocol.io/specification/2025-06-18/basic/authorization)，并实现 RFC 9728（受保护资源元数据）以进行 AS 发现。

MCP 服务器可以通过提供 `TokenVerifier` 协议的实现来使用身份验证：

<!-- snippet-source examples/snippets/servers/oauth_server.py -->
```python
"""
从仓库根目录运行：
    uv run examples/snippets/servers/oauth_server.py
"""

from pydantic import AnyHttpUrl

from mcp.server.auth.provider import AccessToken, TokenVerifier
from mcp.server.auth.settings import AuthSettings
from mcp.server.fastmcp import FastMCP


class SimpleTokenVerifier(TokenVerifier):
    """用于演示的简单令牌验证器。"""

    async def verify_token(self, token: str) -> AccessToken | None:
        pass  # 这里应实现实际的令牌验证逻辑


# 创建 FastMCP 实例作为资源服务器
mcp = FastMCP(
    "天气服务",
    # 用于身份验证的令牌验证器
    token_verifier=SimpleTokenVerifier(),
    # RFC 9728 受保护资源元数据的认证设置
    auth=AuthSettings(
        issuer_url=AnyHttpUrl("https://auth.example.com"),  # 授权服务器 URL
        resource_server_url=AnyHttpUrl("http://localhost:3001"),  # 当前服务器 URL
        required_scopes=["user"],
    ),
)


@mcp.tool()
async def get_weather(city: str = "伦敦") -> dict[str, str]:
    """获取城市天气数据"""
    return {
        "city": city,
        "temperature": "22",
        "condition": "局部多云",
        "humidity": "65%",
    }


if __name__ == "__main__":
    mcp.run(transport="streamable-http")
```
完整示例：[examples/snippets/servers/oauth\_server.py](https://github.com/modelcontextprotocol/python-sdk/blob/main/examples/snippets/servers/oauth_server.py)

<!-- /snippet-source -->

如需包含独立的授权服务器和资源服务器实现的完整示例，请参见 [`examples/servers/simple-auth/`](https://github.com/modelcontextprotocol/python-sdk/tree/main/examples/servers/simple-auth/)。

**架构：**

* **授权服务器 (AS)**：处理 OAuth 流程、用户认证和令牌发放
* **资源服务器 (RS)**：你的 MCP 服务器，用于验证令牌并提供受保护的资源
* **客户端**：通过 RFC 9728 发现 AS、获取令牌，并将令牌用于 MCP 服务器

有关令牌验证的实现细节，请参见 [TokenVerifier](https://github.com/modelcontextprotocol/python-sdk/tree/main/src/mcp/server/auth/provider.py)。

### FastMCP 属性

可通过 `ctx.fastmcp` 访问的 FastMCP 服务器实例提供了对服务器配置和元数据的访问：

* `ctx.fastmcp.name` - 初始化时定义的服务器名称
* `ctx.fastmcp.instructions` - 提供给客户端的服务器说明/描述
* `ctx.fastmcp.settings` - 包含完整服务器配置的对象，包含以下内容：
  * `debug` - 调试模式标志
  * `log_level` - 当前日志记录级别
  * `host` 和 `port` - 服务器网络配置
  * `mount_path`、`sse_path`、`streamable_http_path` - 传输路径
  * `stateless_http` - 服务器是否以无状态模式运行
  * 以及其他配置选项
```python
@mcp.tool()
def server_info(ctx: Context) -> dict:
    """获取当前服务器的信息。"""
    return {
        "name": ctx.fastmcp.name,
        "instructions": ctx.fastmcp.instructions,
        "debug_mode": ctx.fastmcp.settings.debug,
        "log_level": ctx.fastmcp.settings.log_level,
        "host": ctx.fastmcp.settings.host,
        "port": ctx.fastmcp.settings.port,
    }
```
### 会话属性与方法

通过 `ctx.session` 可以访问的会话对象提供了对客户端通信的高级控制：

* `ctx.session.client_params` - 客户端初始化参数及声明的能力
* `await ctx.session.send_log_message(level, data, logger)` - 完全控制地发送日志消息
* `await ctx.session.create_message(messages, max_tokens)` - 请求 LLM（大语言模型）采样或补全
* `await ctx.session.send_progress_notification(token, progress, total, message)` - 直接发送进度更新
* `await ctx.session.send_resource_updated(uri)` - 通知客户端特定资源已更改
* `await ctx.session.send_resource_list_changed()` - 通知客户端资源列表已更改
* `await ctx.session.send_tool_list_changed()` - 通知客户端工具列表已更改
* `await ctx.session.send_prompt_list_changed()` - 通知客户端提示列表已更改
```python
@mcp.tool()
async def notify_data_update(resource_uri: str, ctx: Context) -> str:
    """更新数据并通知客户端数据已更改。"""
    # 在此处执行数据更新逻辑
    
    # 通知客户端此特定资源已更改
    await ctx.session.send_resource_updated(AnyUrl(resource_uri))
    
    # 如果这影响了整个资源列表，也通知资源列表已更改
    await ctx.session.send_resource_list_changed()
    
    return f"已更新 {resource_uri} 并通知了客户端"
```
### 请求上下文属性

通过 `ctx.request_context` 可以访问到包含请求相关信息和资源的请求上下文：

* `ctx.request_context.lifespan_context` - 可访问在服务器启动期间初始化的资源
  * 数据库连接、配置对象、共享服务
  * 对服务器生命周期函数中定义的资源进行类型安全的访问
* `ctx.request_context.meta` - 来自客户端的请求元数据，包括：
  * `progressToken` - 用于进度通知的令牌
  * 其他客户端提供的元数据
* `ctx.request_context.request` - 原始的 MCP 请求对象，用于高级处理
* `ctx.request_context.request_id` - 此请求的唯一标识符
```python
# 带有类型化生命周期上下文的示例
@dataclass
class AppContext:
    db: Database
    config: AppConfig

@mcp.tool()
def query_with_config(query: str, ctx: Context) -> str:
    """使用共享的数据库和配置执行查询。"""
    # 访问类型化的生命周期上下文
    app_ctx: AppContext = ctx.request_context.lifespan_context
    
    # 使用共享资源
    connection = app_ctx.db
    settings = app_ctx.config
    
    # 使用配置执行查询
    result = connection.execute(query, timeout=settings.query_timeout)
    return str(result)
```
完整生命周期示例：[examples/snippets/servers/lifespan_example.py](https://github.com/modelcontextprotocol/python-sdk/blob/main/examples/snippets/servers/lifespan_example.py)

## 运行你的服务器

### 开发模式

测试和调试服务器的最快方式是使用 MCP Inspector：
```bash
uv run mcp dev server.py

# 添加依赖
uv run mcp dev server.py --with pandas --with numpy

# 挂载本地代码
uv run mcp dev server.py --with-editable .
```
### Claude 桌面集成

一旦服务器准备就绪，请将其安装到 Claude 桌面中：
```bash
uv run mcp install server.py

# 自定义名称
uv run mcp install server.py --name "我的分析服务器"

# 环境变量
uv run mcp install server.py -v API_KEY=abc123 -v DB_URL=postgres://...
uv run mcp install server.py -f .env
```
### 直接执行

对于自定义部署等高级场景：  

<!-- snippet-source examples/snippets/servers/direct_execution.py -->
```python
"""示例展示如何直接执行一个MCP服务器。

这是直接运行MCP服务器的最简单方式。
请进入 `examples/snippets` 目录并运行以下命令之一：
    uv run direct-execution-server
    或
    python servers/direct_execution.py
"""

from mcp.server.fastmcp import FastMCP

mcp = FastMCP("我的应用")


@mcp.tool()
def hello(name: str = "World") -> str:
    """向某人问好。"""
    return f"你好，{name}！"


def main():
    """直接执行服务器的入口点。"""
    mcp.run()


if __name__ == "__main__":
    main()
```
完整示例：[examples/snippets/servers/direct\_execution.py](https://github.com/modelcontextprotocol/python-sdk/blob/main/examples/snippets/servers/direct_execution.py)

<!-- /snippet-source -->

运行方式：
```bash
python servers/direct_execution.py
# 或者
uv run mcp run servers/direct_execution.py
```
请注意，`uv run mcp run` 或 `uv run mcp dev` 仅支持使用 FastMCP 的服务器，而不支持低层级服务器变体。

### 可流式传输的 HTTP 传输协议

> **注意**：可流式传输的 HTTP 传输协议正在取代面向生产部署的 SSE 传输协议。

<!-- snippet-source examples/snippets/servers/streamable_config.py -->
```python
"""
从仓库根目录运行：
    uv run examples/snippets/servers/streamable_config.py
"""

from mcp.server.fastmcp import FastMCP

# 有状态服务器（维护会话状态）
mcp = FastMCP("StatefulServer")

# 其他配置选项：
# 无状态服务器（无会话持久化）
# mcp = FastMCP("StatelessServer", stateless_http=True)

# 无状态服务器（无会话持久化，且不与支持的客户端建立 SSE 流）
# mcp = FastMCP("StatelessServer", stateless_http=True, json_response=True)


# 添加一个简单工具以演示服务器功能
@mcp.tool()
def greet(name: str = "World") -> str:
    """通过名字问候某人。"""
    return f"你好，{name}！"


# 使用 streamable-http 传输协议运行服务器
if __name__ == "__main__":
    mcp.run(transport="streamable-http")
```
完整示例：[examples/snippets/servers/streamable_config.py](https://github.com/modelcontextprotocol/python-sdk/blob/main/examples/snippets/servers/streamable_config.py)

<!-- /snippet-source -->

你可以在一个 Starlette 应用程序中挂载多个 FastMCP 服务器：

<!-- snippet-source examples/snippets/servers/streamable_starlette_mount.py -->
```python
"""
从仓库根目录运行：
    uvicorn examples.snippets.servers.streamable_starlette_mount:app --reload
"""

import contextlib

from starlette.applications import Starlette
from starlette.routing import Mount

from mcp.server.fastmcp import FastMCP

# 创建 Echo 服务器
echo_mcp = FastMCP(name="EchoServer", stateless_http=True)


@echo_mcp.tool()
def echo(message: str) -> str:
    """一个简单的回显工具"""
    return f"Echo: {message}"


# 创建 Math 服务器
math_mcp = FastMCP(name="MathServer", stateless_http=True)


@math_mcp.tool()
def add_two(n: int) -> int:
    """用于将输入加二的工具"""
    return n + 2


# 创建一个组合的生命周期上下文管理器以管理两个会话管理器
@contextlib.asynccontextmanager
async def lifespan(app: Starlette):
    async with contextlib.AsyncExitStack() as stack:
        await stack.enter_async_context(echo_mcp.session_manager.run())
        await stack.enter_async_context(math_mcp.session_manager.run())
        yield


# 创建 Starlette 应用并挂载 MCP 服务器
app = Starlette(
    routes=[
        Mount("/echo", echo_mcp.streamable_http_app()),
        Mount("/math", math_mcp.streamable_http_app()),
    ],
    lifespan=lifespan,
)
```
完整示例：[examples/snippets/servers/streamable\_starlette\_mount.py](https://github.com/modelcontextprotocol/python-sdk/blob/main/examples/snippets/servers/streamable_starlette_mount.py)

<!-- /snippet-source -->

关于使用可流式 HTTP 实现的底层服务器，请参见：

* 有状态服务器：[`examples/servers/simple-streamablehttp/`](https://github.com/modelcontextprotocol/python-sdk/tree/main/examples/servers/simple-streamablehttp/)
* 无状态服务器：[`examples/servers/simple-streamablehttp-stateless/`](https://github.com/modelcontextprotocol/python-sdk/tree/main/examples/servers/simple-streamablehttp-stateless/)

可流式 HTTP 传输支持以下功能：

* 有状态和无状态操作模式
* 使用事件存储实现可恢复性
* JSON 或 SSE 响应格式
* 在多节点部署中具备更好的可扩展性

### 挂载到现有的 ASGI 服务器

默认情况下，SSE 服务器挂载在 `/sse` 路径，而可流式 HTTP 服务器挂载在 `/mcp` 路径。你可以通过以下方法自定义这些路径。

有关在 Starlette 中挂载应用的更多信息，请参阅 [Starlette 文档](https://www.starlette.io/routing/#submounting-routes)。

#### SSE 服务器

> **注意**：SSE 传输正被 [Streamable HTTP 传输](https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#streamable-http) 所取代。

你可以使用 `sse_app` 方法将 SSE 服务器挂载到现有的 ASGI 服务器。这允许你将 SSE 服务器与其他 ASGI 应用集成。
```python
from starlette.applications import Starlette
from starlette.routing import Mount, Host
from mcp.server.fastmcp import FastMCP


mcp = FastMCP("我的应用")

# 将 SSE 服务器挂载到现有的 ASGI 服务器上
app = Starlette(
    routes=[
        Mount('/', app=mcp.sse_app()),
    ]
)

# 或者作为主机动态挂载
app.router.routes.append(Host('mcp.acme.corp', app=mcp.sse_app()))
```
当在不同的路径下挂载多个MCP服务器时，可以通过以下几种方式配置挂载路径：
```python
from starlette.applications import Starlette
from starlette.routing import Mount
from mcp.server.fastmcp import FastMCP

# 创建多个 MCP 服务器
github_mcp = FastMCP("GitHub API")
browser_mcp = FastMCP("浏览器")
curl_mcp = FastMCP("Curl")
search_mcp = FastMCP("搜索")

# 方法 1：通过设置配置挂载路径（推荐用于持久化配置）
github_mcp.settings.mount_path = "/github"
browser_mcp.settings.mount_path = "/browser"

# 方法 2：将挂载路径直接传递给 sse_app（推荐用于临时挂载）
# 此方法不会永久修改服务器的设置

# 创建包含多个已挂载服务器的 Starlette 应用
app = Starlette(
    routes=[
        # 使用基于设置的配置
        Mount("/github", app=github_mcp.sse_app()),
        Mount("/browser", app=browser_mcp.sse_app()),
        # 使用直接指定挂载路径的参数
        Mount("/curl", app=curl_mcp.sse_app("/curl")),
        Mount("/search", app=search_mcp.sse_app("/search")),
    ]
)

# 方法 3：对于直接执行的情况，也可以将挂载路径传递给 run()
if __name__ == "__main__":
    search_mcp.run(transport="sse", mount_path="/search")
```
关于在 Starlette 中挂载应用的更多信息，请参见 [Starlette 文档](https://www.starlette.io/routing/#submounting-routes)。

## 高级用法

### 低级服务器

如果你需要更多控制权，可以直接使用低级服务器实现。这将让你完全访问协议，并允许你自定义服务器的各个方面，包括通过 lifespan API 管理生命周期：

<!-- snippet-source examples/snippets/servers/lowlevel/lifespan.py -->
```python
"""
从仓库根目录运行:
    uv run examples/snippets/servers/lowlevel/lifespan.py
"""

from collections.abc import AsyncIterator
from contextlib import asynccontextmanager
from typing import Any

import mcp.server.stdio
import mcp.types as types
from mcp.server.lowlevel import NotificationOptions, Server
from mcp.server.models import InitializationOptions


# 用于示例的模拟数据库类
class Database:
    """模拟数据库类示例。"""

    @classmethod
    async def connect(cls) -> "Database":
        """连接到数据库。"""
        print("数据库已连接")
        return cls()

    async def disconnect(self) -> None:
        """断开与数据库的连接。"""
        print("数据库已断开连接")

    async def query(self, query_str: str) -> list[dict[str, str]]:
        """执行查询。"""
        # 模拟数据库查询
        return [{"id": "1", "name": "示例", "query": query_str}]


@asynccontextmanager
async def server_lifespan(_server: Server) -> AsyncIterator[dict[str, Any]]:
    """管理服务器的启动和关闭生命周期。"""
    # 启动时初始化资源
    db = await Database.connect()
    try:
        yield {"db": db}
    finally:
        # 关闭时清理资源
        await db.disconnect()


# 将生命周期传递给服务器
server = Server("example-server", lifespan=server_lifespan)


@server.list_tools()
async def handle_list_tools() -> list[types.Tool]:
    """列出可用工具。"""
    return [
        types.Tool(
            name="query_db",
            description="查询数据库",
            inputSchema={
                "type": "object",
                "properties": {"query": {"type": "string", "description": "要执行的SQL查询"}},
                "required": ["query"],
            },
        )
    ]


@server.call_tool()
async def query_db(name: str, arguments: dict[str, Any]) -> list[types.TextContent]:
    """处理数据库查询工具调用。"""
    if name != "query_db":
        raise ValueError(f"未知工具: {name}")

    # 访问生命周期上下文
    ctx = server.request_context
    db = ctx.lifespan_context["db"]

    # 执行查询
    results = await db.query(arguments["query"])

    return [types.TextContent(type="text", text=f"查询结果: {results}")]


async def run():
    """运行带有生命周期管理的服务器。"""
    async with mcp.server.stdio.stdio_server() as (read_stream, write_stream):
        await server.run(
            read_stream,
            write_stream,
            InitializationOptions(
                server_name="example-server",
                server_version="0.1.0",
                capabilities=server.get_capabilities(
                    notification_options=NotificationOptions(),
                    experimental_capabilities={},
                ),
            ),
        )


if __name__ == "__main__":
    import asyncio

    asyncio.run(run())
```
完整示例：[examples/snippets/servers/lowlevel/lifespan.py](https://github.com/modelcontextprotocol/python-sdk/blob/main/examples/snippets/servers/lowlevel/lifespan.py)

<!-- /snippet-source -->

生命周期（lifespan）API 提供了以下功能：

* 在服务器启动时初始化资源，并在其停止时清理这些资源
* 通过请求上下文在处理程序中访问已初始化的资源
* 在生命周期与请求处理程序之间进行类型安全的上下文传递

<!-- snippet-source examples/snippets/servers/lowlevel/basic.py -->
```python
"""
从仓库根目录运行：
uv run examples/snippets/servers/lowlevel/basic.py
"""

import asyncio

import mcp.server.stdio
import mcp.types as types
from mcp.server.lowlevel import NotificationOptions, Server
from mcp.server.models import InitializationOptions

# 创建一个服务器实例
server = Server("example-server")


@server.list_prompts()
async def handle_list_prompts() -> list[types.Prompt]:
    """列出可用的提示词模板。"""
    return [
        types.Prompt(
            name="example-prompt",
            description="一个示例提示词模板",
            arguments=[types.PromptArgument(name="arg1", description="示例参数", required=True)],
        )
    ]


@server.get_prompt()
async def handle_get_prompt(name: str, arguments: dict[str, str] | None) -> types.GetPromptResult:
    """通过名称获取特定的提示词模板。"""
    if name != "example-prompt":
        raise ValueError(f"未知的提示词模板: {name}")

    arg1_value = (arguments or {}).get("arg1", "默认值")

    return types.GetPromptResult(
        description="示例提示词模板",
        messages=[
            types.PromptMessage(
                role="user",
                content=types.TextContent(type="text", text=f"带有参数的示例提示词文本: {arg1_value}"),
            )
        ],
    )


async def run():
    """运行基础的低级服务器。"""
    async with mcp.server.stdio.stdio_server() as (read_stream, write_stream):
        await server.run(
            read_stream,
            write_stream,
            InitializationOptions(
                server_name="example",
                server_version="0.1.0",
                capabilities=server.get_capabilities(
                    notification_options=NotificationOptions(),
                    experimental_capabilities={},
                ),
            ),
        )


if __name__ == "__main__":
    asyncio.run(run())
```
完整示例：[examples/snippets/servers/lowlevel/basic.py](https://github.com/modelcontextprotocol/python-sdk/blob/main/examples/snippets/servers/lowlevel/basic.py)

<!-- /snippet-source -->

注意：`uv run mcp run` 和 `uv run mcp dev` 工具不支持低级服务器。

#### 结构化输出支持

低级服务器支持工具的结构化输出，允许你同时返回人类可读的内容和机器可读的结构化数据。工具可以定义一个 `outputSchema` 来验证其结构化输出：

<!-- snippet-source examples/snippets/servers/lowlevel/structured_output.py -->
```python
"""
从仓库根目录运行:
    uv run examples/snippets/servers/lowlevel/structured_output.py
"""

import asyncio
from typing import Any

import mcp.server.stdio
import mcp.types as types
from mcp.server.lowlevel import NotificationOptions, Server
from mcp.server.models import InitializationOptions

server = Server("example-server")


@server.list_tools()
async def list_tools() -> list[types.Tool]:
    """列出具有结构化输出模式的可用工具。"""
    return [
        types.Tool(
            name="get_weather",
            description="获取城市的当前天气",
            inputSchema={
                "type": "object",
                "properties": {"city": {"type": "string", "description": "城市名称"}},
                "required": ["city"],
            },
            outputSchema={
                "type": "object",
                "properties": {
                    "temperature": {"type": "number", "description": "摄氏温度"},
                    "condition": {"type": "string", "description": "天气状况"},
                    "humidity": {"type": "number", "description": "湿度百分比"},
                    "city": {"type": "string", "description": "城市名称"},
                },
                "required": ["temperature", "condition", "humidity", "city"],
            },
        )
    ]


@server.call_tool()
async def call_tool(name: str, arguments: dict[str, Any]) -> dict[str, Any]:
    """处理具有结构化输出的工具调用。"""
    if name == "get_weather":
        city = arguments["city"]

        # 模拟的天气数据 - 在生产环境中，应调用天气API
        weather_data = {
            "temperature": 22.5,
            "condition": "部分多云",
            "humidity": 65,
            "city": city,  # 包含请求的城市
        }

        # 低级服务器将根据工具的输出模式验证结构化输出，
        # 并且为了与2025-06-18之前的客户端向后兼容，还会将其序列化为TextContent块。
        return weather_data
    else:
        raise ValueError(f"未知工具: {name}")


async def run():
    """运行结构化输出服务器。"""
    async with mcp.server.stdio.stdio_server() as (read_stream, write_stream):
        await server.run(
            read_stream,
            write_stream,
            InitializationOptions(
                server_name="structured-output-example",
                server_version="0.1.0",
                capabilities=server.get_capabilities(
                    notification_options=NotificationOptions(),
                    experimental_capabilities={},
                ),
            ),
        )


if __name__ == "__main__":
    asyncio.run(run())
```
完整示例: [examples/snippets/servers/lowlevel/structured\_output.py](https://github.com/modelcontextprotocol/python-sdk/blob/main/examples/snippets/servers/lowlevel/structured_output.py)

<!-- /snippet-source -->

工具可以通过三种方式返回数据：

1. **仅内容**：返回内容块列表（2025-06-18 版规范之前的默认行为）
2. **仅结构化数据**：返回一个字典，该字典将被序列化为 JSON（在 2025-06-18 版规范中引入）
3. **两者都有**：返回 (content, structured\_data) 元组，推荐用于向后兼容的选项

当定义了 `outputSchema` 时，服务器会自动根据该模式验证结构化输出。这可以确保类型安全并帮助尽早发现错误。

### 编写 MCP 客户端

SDK 提供了一个高级客户端接口，用于通过各种 [传输方式](https://modelcontextprotocol.io/specification/2025-03-26/basic/transports) 连接到 MCP 服务器：

<!-- snippet-source examples/snippets/clients/stdio_client.py -->
```python
"""
进入 `examples/snippets/clients` 目录并运行：
    uv run client
"""

import asyncio
import os

from pydantic import AnyUrl

from mcp import ClientSession, StdioServerParameters, types
from mcp.client.stdio import stdio_client
from mcp.shared.context import RequestContext

# 为 stdio 连接创建服务器参数
server_params = StdioServerParameters(
    command="uv",  # 使用 uv 运行服务器
    args=["run", "server", "fastmcp_quickstart", "stdio"],  # 我们已经在 snippets 目录中
    env={"UV_INDEX": os.environ.get("UV_INDEX", "")},
)


# 可选：创建一个采样回调
async def handle_sampling_message(
    context: RequestContext[ClientSession, None], params: types.CreateMessageRequestParams
) -> types.CreateMessageResult:
    print(f"采样请求: {params.messages}")
    return types.CreateMessageResult(
        role="assistant",
        content=types.TextContent(
            type="text",
            text="你好，世界！来自模型",
        ),
        model="gpt-3.5-turbo",
        stopReason="endTurn",
    )


async def run():
    async with stdio_client(server_params) as (read, write):
        async with ClientSession(read, write, sampling_callback=handle_sampling_message) as session:
            # 初始化连接
            await session.initialize()

            # 列出可用的提示
            prompts = await session.list_prompts()
            print(f"可用提示: {[p.name for p in prompts.prompts]}")

            # 获取一个提示（来自 fastmcp_quickstart 的 greet_user 提示）
            if prompts.prompts:
                prompt = await session.get_prompt("greet_user", arguments={"name": "Alice", "style": "友好"})
                print(f"提示结果: {prompt.messages[0].content}")

            # 列出可用资源
            resources = await session.list_resources()
            print(f"可用资源: {[r.uri for r in resources.resources]}")

            # 列出可用工具
            tools = await session.list_tools()
            print(f"可用工具: {[t.name for t in tools.tools]}")

            # 读取一个资源（来自 fastmcp_quickstart 的 greeting 资源）
            resource_content = await session.read_resource(AnyUrl("greeting://World"))
            content_block = resource_content.contents[0]
            if isinstance(content_block, types.TextContent):
                print(f"资源内容: {content_block.text}")

            # 调用一个工具（来自 fastmcp_quickstart 的 add 工具）
            result = await session.call_tool("add", arguments={"a": 5, "b": 3})
            result_unstructured = result.content[0]
            if isinstance(result_unstructured, types.TextContent):
                print(f"工具结果: {result_unstructured.text}")
            result_structured = result.structuredContent
            print(f"结构化工具结果: {result_structured}")


def main():
    """客户端脚本的入口点。"""
    asyncio.run(run())


if __name__ == "__main__":
    main()
```
完整示例：[examples/snippets/clients/stdio\_client.py](https://github.com/modelcontextprotocol/python-sdk/blob/main/examples/snippets/clients/stdio_client.py)

<!-- /snippet-source -->

客户端也可以使用[可流式 HTTP 传输](https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#streamable-http)进行连接：

<!-- snippet-source examples/snippets/clients/streamable_basic.py -->
```python
"""
从仓库根目录运行：
    uv run examples/snippets/clients/streamable_basic.py
"""

import asyncio

from mcp import ClientSession
from mcp.client.streamable_http import streamablehttp_client


async def main():
    # 连接到一个支持流的HTTP服务器
    async with streamablehttp_client("http://localhost:8000/mcp") as (
        read_stream,
        write_stream,
        _,
    ):
        # 使用客户端流创建一个会话
        async with ClientSession(read_stream, write_stream) as session:
            # 初始化连接
            await session.initialize()
            # 列出可用的工具
            tools = await session.list_tools()
            print(f"可用工具: {[tool.name for tool in tools.tools]}")


if __name__ == "__main__":
    asyncio.run(main())
```
完整示例：[examples/snippets/clients/streamable_basic.py](https://github.com/modelcontextprotocol/python-sdk/blob/main/examples/snippets/clients/streamable_basic.py)

<!-- /snippet-source -->

### 客户端显示工具

在构建 MCP 客户端时，SDK 提供了一些工具，用于显示工具、资源和提示词的人类可读名称：  

<!-- snippet-source examples/snippets/clients/display_utilities.py -->
```python
"""
转到 `examples/snippets` 目录并运行：
    uv run display-utilities-client
"""

import asyncio
import os

from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client
from mcp.shared.metadata_utils import get_display_name

# 为 stdio 连接创建服务器参数
server_params = StdioServerParameters(
    command="uv",  # 使用 uv 运行服务器
    args=["run", "server", "fastmcp_quickstart", "stdio"],
    env={"UV_INDEX": os.environ.get("UV_INDEX", "")},
)


async def display_tools(session: ClientSession):
    """显示具有可读名称的可用工具"""
    tools_response = await session.list_tools()

    for tool in tools_response.tools:
        # get_display_name() 如果存在 title 则返回 title，否则返回 name
        display_name = get_display_name(tool)
        print(f"工具: {display_name}")
        if tool.description:
            print(f"   {tool.description}")


async def display_resources(session: ClientSession):
    """显示具有可读名称的可用资源"""
    resources_response = await session.list_resources()

    for resource in resources_response.resources:
        display_name = get_display_name(resource)
        print(f"资源: {display_name} ({resource.uri})")

    templates_response = await session.list_resource_templates()
    for template in templates_response.resourceTemplates:
        display_name = get_display_name(template)
        print(f"资源模板: {display_name}")


async def run():
    """运行显示工具示例。"""
    async with stdio_client(server_params) as (read, write):
        async with ClientSession(read, write) as session:
            # 初始化连接
            await session.initialize()

            print("=== 可用工具 ===")
            await display_tools(session)

            print("\n=== 可用资源 ===")
            await display_resources(session)


def main():
    """显示工具客户端的入口点。"""
    asyncio.run(run())


if __name__ == "__main__":
    main()
```
完整示例：[examples/snippets/clients/display_utilities.py](https://github.com/modelcontextprotocol/python-sdk/blob/main/examples/snippets/clients/display_utilities.py)

<!-- /snippet-source -->

`get_display_name()` 函数实现了显示名称的正确优先级规则：

* 对于工具：`title` > `annotations.title` > `name`
* 对于其他对象：`title` > `name`

这可以确保你的客户端界面显示服务器提供的最符合用户习惯的名称。

### 客户端的 OAuth 认证

SDK 包含用于连接受保护 MCP 服务器的 [授权支持](https://modelcontextprotocol.io/specification/2025-03-26/basic/authorization)：  

<!-- snippet-source examples/snippets/clients/oauth_client.py -->
```python
"""
运行前，请指定正在运行的 MCP RS 服务器的 URL。
如需在本地启动 RS 服务器，请参见
    examples/servers/simple-auth/README.md

请切换到 `examples/snippets` 目录下并运行：
    uv run oauth-client
"""

import asyncio
from urllib.parse import parse_qs, urlparse

from pydantic import AnyUrl

from mcp import ClientSession
from mcp.client.auth import OAuthClientProvider, TokenStorage
from mcp.client.streamable_http import streamablehttp_client
from mcp.shared.auth import OAuthClientInformationFull, OAuthClientMetadata, OAuthToken


class InMemoryTokenStorage(TokenStorage):
    """演示：内存中的令牌存储实现。"""

    def __init__(self):
        self.tokens: OAuthToken | None = None
        self.client_info: OAuthClientInformationFull | None = None

    async def get_tokens(self) -> OAuthToken | None:
        """获取已存储的令牌。"""
        return self.tokens

    async def set_tokens(self, tokens: OAuthToken) -> None:
        """存储令牌。"""
        self.tokens = tokens

    async def get_client_info(self) -> OAuthClientInformationFull | None:
        """获取已存储的客户端信息。"""
        return self.client_info

    async def set_client_info(self, client_info: OAuthClientInformationFull) -> None:
        """存储客户端信息。"""
        self.client_info = client_info


async def handle_redirect(auth_url: str) -> None:
    print(f"请访问: {auth_url}")


async def handle_callback() -> tuple[str, str | None]:
    callback_url = input("粘贴回调 URL: ")
    params = parse_qs(urlparse(callback_url).query)
    return params["code"][0], params.get("state", [None])[0]


async def main():
    """运行 OAuth 客户端示例。"""
    oauth_auth = OAuthClientProvider(
        server_url="http://localhost:8001",
        client_metadata=OAuthClientMetadata(
            client_name="示例 MCP 客户端",
            redirect_uris=[AnyUrl("http://localhost:3000/callback")],
            grant_types=["authorization_code", "refresh_token"],
            response_types=["code"],
            scope="user",
        ),
        storage=InMemoryTokenStorage(),
        redirect_handler=handle_redirect,
        callback_handler=handle_callback,
    )

    async with streamablehttp_client("http://localhost:8001/mcp", auth=oauth_auth) as (read, write, _):
        async with ClientSession(read, write) as session:
            await session.initialize()

            tools = await session.list_tools()
            print(f"可用工具: {[tool.name for tool in tools.tools]}")

            resources = await session.list_resources()
            print(f"可用资源: {[r.uri for r in resources.resources]}")


def run():
    asyncio.run(main())


if __name__ == "__main__":
    run()
```
完整示例：[examples/snippets/clients/oauth\_client.py](https://github.com/modelcontextprotocol/python-sdk/blob/main/examples/snippets/clients/oauth_client.py)

<!-- /snippet-source -->

如需完整的可运行示例，请参见 [`examples/clients/simple-auth-client/`](https://github.com/modelcontextprotocol/python-sdk/tree/main/examples/clients/simple-auth-client/)。

### 解析工具结果

通过 MCP 调用工具时，`CallToolResult` 对象以结构化的格式包含工具的响应。了解如何解析此结果对于正确处理工具输出至关重要。
```python
"""examples/snippets/clients/parsing_tool_results.py"""

import asyncio

from mcp import ClientSession, StdioServerParameters, types
from mcp.client.stdio import stdio_client


async def parse_tool_results():
    """演示如何解析 CallToolResult 中不同类型的内容。"""
    server_params = StdioServerParameters(
        command="python", args=["path/to/mcp_server.py"]
    )

    async with stdio_client(server_params) as (read, write):
        async with ClientSession(read, write) as session:
            await session.initialize()

            # 示例 1：解析文本内容
            result = await session.call_tool("get_data", {"format": "text"})
            for content in result.content:
                if isinstance(content, types.TextContent):
                    print(f"文本: {content.text}")

            # 示例 2：解析来自 JSON 工具的结构化内容
            result = await session.call_tool("get_user", {"id": "123"})
            if hasattr(result, "structuredContent") and result.structuredContent:
                # 直接访问结构化数据
                user_data = result.structuredContent
                print(f"用户: {user_data.get('name')}, 年龄: {user_data.get('age')}")

            # 示例 3：解析嵌入资源
            result = await session.call_tool("read_config", {})
            for content in result.content:
                if isinstance(content, types.EmbeddedResource):
                    resource = content.resource
                    if isinstance(resource, types.TextResourceContents):
                        print(f"配置文件 {resource.uri}: {resource.text}")
                    elif isinstance(resource, types.BlobResourceContents):
                        print(f"二进制数据来自 {resource.uri}")

            # 示例 4：解析图像内容
            result = await session.call_tool("generate_chart", {"data": [1, 2, 3]})
            for content in result.content:
                if isinstance(content, types.ImageContent):
                    print(f"图像 ({content.mimeType}): {len(content.data)} 字节")

            # 示例 5：处理错误
            result = await session.call_tool("failing_tool", {})
            if result.isError:
                print("工具执行失败！")
                for content in result.content:
                    if isinstance(content, types.TextContent):
                        print(f"错误: {content.text}")


async def main():
    await parse_tool_results()


if __name__ == "__main__":
    asyncio.run(main())
```
### MCP 原语

MCP 协议定义了服务器可实现的三个核心原语：

| 原语       | 控制方式           | 描述                                           | 示例用法                   |
| ---------- | ------------------ | ------------------------------------------------ | -------------------------- |
| 提示(Prompts)   | 用户控制         | 由用户选择调用的交互式模板                      | 斜杠命令、菜单选项        |
| 资源(Resources) | 应用程序控制     | 由客户端应用程序管理的上下文数据                | 文件内容、API 响应        |
| 工具(Tools)    | 模型控制         | 向 LLM 暴露的、用于执行操作的函数               | API 调用、数据更新        |

### 服务器能力

MCP 服务器在初始化期间声明其能力：

| 能力         | 特性标志                  | 描述                         |
| ------------ | -------------------------- | ---------------------------- |
| `prompts`    | `listChanged`              | 提示模板管理                 |
| `resources`  | `subscribe`<br/>`listChanged` | 资源暴露与更新               |
| `tools`      | `listChanged`              | 工具发现与执行               |
| `logging`    | -                          | 服务器日志配置               |
| `completions`| -                          | 参数补全建议                 |

## 文档

* [模型上下文协议文档](https://modelcontextprotocol.io)
* [模型上下文协议规范](https://spec.modelcontextprotocol.io)
* [官方支持的服务器列表](https://github.com/modelcontextprotocol/servers)

## 贡献

我们热衷于支持各个经验水平的贡献者，并希望看到您参与这个项目。请参阅[贡献指南](https://github.com/modelcontextprotocol/python-sdk/tree/main/CONTRIBUTING.md)以了解如何开始。

## 许可证

该项目基于 MIT 协议授权 —— 详情请参阅 LICENSE 文件。