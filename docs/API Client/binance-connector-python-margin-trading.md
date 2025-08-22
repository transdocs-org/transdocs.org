# Binance Python 杠杆交易 SDK

[![构建状态](https://img.shields.io/github/actions/workflow/status/binance/binance-connector-python/ci.yaml)](https://github.com/binance/binance-connector-python/actions)
[![问题数量](https://img.shields.io/github/issues/binance/binance-connector-python)](https://github.com/binance/binance-connector-python/issues)
[![代码风格: Black](https://img.shields.io/badge/code_style-black-black)](https://black.readthedocs.io/en/stable/)
[![PyPI 版本](https://img.shields.io/pypi/v/binance-sdk-margin-trading)](https://pypi.python.org/pypi/binance-sdk-margin-trading)
[![PyPI 下载量](https://img.shields.io/pypi/dm/binance-sdk-margin-trading.svg)](https://pypi.org/project/binance-sdk-margin-trading/)
[![Python 版本](https://img.shields.io/pypi/pyversions/binance-sdk-margin-trading)](https://www.python.org/downloads/)
[![已知漏洞](https://img.shields.io/badge/security-scanned-brightgreen)](https://github.com/binance/binance-connector-python/security)
[![许可证: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

这是一个用于 Binance 杠杆交易 SDK API 的客户端库，使开发者能够通过编程方式与 Binance 的杠杆交易平台进行交互。该库提供工具，通过 REST API 使用第三方提供的资金进行资产交易：

* [REST API](https://github.com/binance/binance-connector-python/tree/master/clients/margin_trading/src/binance_sdk_margin_trading/rest_api/rest_api.py)
* [Websocket 流](https://github.com/binance/binance-connector-python/tree/master/clients/margin_trading/src/binance_sdk_margin_trading/websocket_streams/websocket_streams.py)

## 目录

* [支持的功能](#支持的功能)
* [安装](#安装)
* [文档](#文档)
* [REST API](#rest-api)
* [Websocket 流](#websocket-streams)
* [测试](#测试)
* [迁移指南](#迁移指南)
* [贡献](#贡献)
* [许可证](#许可证)

## 支持的功能

* REST API 接口：
  * `/sapi/v1/margin/*`
  * `/sapi/v1/bnbBurn/*`
  * `/sapi/v1/userDataStream/*`
* 包含测试用例和示例，便于快速上手。

## 安装

要使用该库，请确保您的环境运行的是 Python **3.9** 或更高版本。
```bash
pip install binance-sdk-margin-trading
```
## 文档

详细信息，请参考 [Binance API 文档](https://developers.binance.com/docs/margin_trading/Introduction)。

### REST API

所有 REST API 端点均可通过 [`rest_api`](https://github.com/binance/binance-connector-python/tree/master/clients/margin_trading/src/binance_sdk_margin_trading/rest_api/rest_api.py) 模块访问。REST API 使您能够获取市场数据、管理交易以及访问账户信息。请注意，某些端点需要使用您的 Binance API 凭证进行身份验证。
```python
from binance_common.configuration import ConfigurationRestAPI
from binance_common.constants import MARGIN_TRADING_REST_API_PROD_URL
from binance_sdk_margin_trading.margin_trading import MarginTrading
from binance_sdk_margin_trading.rest_api.models import GetSummaryOfMarginAccountResponse

logging.basicConfig(level=logging.INFO)
configuration = ConfigurationRestAPI(api_key="your-api-key", api_secret="your-api-secret", base_path=MARGIN_TRADING_REST_API_PROD_URL)

client = MarginTrading(config_rest_api=configuration)

try:
    response = client.rest_api.get_summary_of_margin_account()

    data: GetSummaryOfMarginAccountResponse = response.data()
    logging.info(f"get_summary_of_margin_account() 响应: {data}")
except Exception as e:
    logging.error(f"get_summary_of_margin_account() 错误: {e}")
```
更多示例可以在 [`examples/rest_api`](https://github.com/binance/binance-connector-python/tree/master/clients/margin_trading/examples/rest_api/) 文件夹中找到。

#### 配置选项

REST API 支持以下高级配置选项：

* `timeout`：请求超时时间（毫秒），默认值为 1000 毫秒。
* `proxy`：代理配置：
  * `host`：代理服务器主机名。
  * `port`：代理服务器端口。
  * `protocol`：代理协议（http 或 https）。
  * `auth`：代理身份验证凭据：
    * `username`：代理用户名。
    * `password`：代理密码。
* `keep_alive`：启用 HTTP 长连接（默认值：true）。
* `compression`：启用响应压缩（默认值：true）。
* `retries`：失败请求的重试次数（默认值：3 次）。
* `backoff`：重试之间的延迟时间（毫秒）（默认值：1000 毫秒）。
* `https_agent`：用于高级 TLS 配置的自定义 HTTPS 代理。
* `private_key`：用于身份验证的 RSA 或 ED25519 私钥。
* `private_key_passphrase`：私钥的密码（如果加密）。

##### 超时

您可以配置请求的超时时间（毫秒）。如果请求超过指定的超时时间，则会被中止。详细使用方法请参见 [Timeout 示例](https://github.com/binance/binance-connector-python/tree/master/clients/margin_trading/docs/rest_api/timeout.md)。

##### 代理

REST API 支持 HTTP/HTTPS 代理配置。详细使用方法请参见 [Proxy 示例](https://github.com/binance/binance-connector-python/tree/master/clients/margin_trading/docs/rest_api/proxy.md)。

##### 长连接（Keep-Alive）

为持久连接启用 HTTP 长连接。详细使用方法请参见 [Keep-Alive 示例](https://github.com/binance/binance-connector-python/tree/master/clients/margin_trading/docs/rest_api/keepAlive.md)。

##### 压缩

启用或禁用响应压缩。详细使用方法请参见 [Compression 示例](https://github.com/binance/binance-connector-python/tree/master/clients/margin_trading/docs/rest_api/compression.md)。

##### 重试

为失败的请求配置重试次数和每次重试之间的延迟时间（毫秒）。详细使用方法请参见 [Retries 示例](https://github.com/binance/binance-connector-python/tree/master/clients/margin_trading/docs/rest_api/retries.md)。

##### HTTPS 代理

自定义 HTTPS 代理以进行高级 TLS 配置。详细使用方法请参见 [HTTPS Agent 示例](https://github.com/binance/binance-connector-python/tree/master/clients/margin_trading/docs/rest_api/httpsAgent.md)。

##### 基于密钥对的身份验证

REST API 支持基于密钥对的身份验证以实现安全通信。您可以使用 `RSA` 或 `ED25519` 密钥来签署请求。详细使用方法请参见 [基于密钥对的身份验证示例](https://github.com/binance/binance-connector-python/tree/master/clients/margin_trading/docs/rest_api/key-pair-authentication.md)。

##### 证书锁定

为增强安全性，您可以在配置中使用 `https_agent` 选项进行证书锁定。这确保客户端仅与使用特定证书的服务器通信。详细使用方法请参见 [证书锁定示例](https://github.com/binance/binance-connector-python/tree/master/clients/margin_trading/docs/rest_api/certificate-pinning.md)。

#### 错误处理

REST API 提供了详细的错误类型，以帮助您有效处理问题：

* `ClientError`：表示在 SDK 客户端中发生的错误。
* `RequiredError`：当缺少或未定义必需参数时抛出。
* `UnauthorizedError`：表示缺少或无效的身份验证凭据。
* `ForbiddenError`：禁止访问请求的资源。
* `TooManyRequestsError`：超出速率限制。
* `RateLimitBanError`：由于超出速率限制，IP 地址被封禁。
* `ServerError`：内部服务器错误，可选包含状态码。
* `NetworkError`：网络连接问题。
* `NotFoundError`：资源未找到。
* `BadRequestError`：无效请求或无法处理的请求。

详细使用方法请参见 [错误处理示例](https://github.com/binance/binance-connector-python/tree/master/clients/margin_trading/docs/rest_api/error-handling.md)。

如果未提供 `base_path`，则默认值为 `https://api.binance.com`。

### WebSocket 流

在杠杆交易中，WebSocket 流用于订阅风险和交易数据流。使用 [websocket-streams](https://github.com/binance/binance-connector-python/tree/master/clients/margin_trading/src/binance_sdk_margin_trading/websocket_streams/websocket_streams.py) 模块与之交互。

#### 配置选项

WebSocket 流 API 支持以下高级配置选项：

* `reconnect_delay`：重连之间的延迟时间（毫秒）。
* `compression`：启用响应压缩。
* `mode`：选择 `single` 或 `pool` 连接模式。
  * `single`：单个 WebSocket 连接。
  * `pool`：多个 WebSocket 连接的池。
* `pool_size`：在池模式下定义 WebSocket 连接的数量。
* `https_agent`：用于高级 TLS 配置的自定义 HTTPS 代理。
* `user_agent`：用于 WebSocket 流的自定义用户代理字符串。

#### 订阅风险和交易数据流

您可以订阅风险和交易数据流，该流会发送账户级别的事件，如账户更新和订单更新。首先通过 REST API 创建一个 listen-key；然后：
```python
import asyncio
import logging

from binance_common.configuration import ConfigurationWebSocketStreams
from binance_common.constants import MARGIN_TRADING_WS_STREAMS_PROD_URL
from binance_sdk_margin_trading.margin_trading import MarginTrading

logging.basicConfig(level=logging.INFO)

configuration_ws_streams = ConfigurationWebSocketStreams(
    reconnect_delay=5000,
)

client = MarginTrading(config_ws_streams=configuration_ws_streams)

connection = None
try:
    connection = await client.websocket_streams.create_connection()

    stream = await connection.tradeData(listenKey="listen-key")
    stream.on("message", lambda data: {
        match data["e"]:
            case "balanceUpdate":
                print(f"风险等级更新流：{data}")
            case 'outboundAccountPosition':
                print(f"出站账户头寸流：{data}");
                break;
            # …处理其他情况…
            case _:
                print(f"未知流：{data}")
    })
except Exception as e:
    logging.error(f"用户数据流中出现错误：{e}")
```
#### 取消订阅流

你可以使用 `unsubscribe` 方法取消订阅特定的 WebSocket 流。这在无需关闭连接的情况下，有助于管理当前的订阅。
```python
import asyncio
import logging

from binance_common.configuration import ConfigurationWebSocketStreams
from binance_sdk_margin_trading.margin_trading import MarginTrading

logging.basicConfig(level=logging.INFO)

client = MarginTrading(config_ws_streams=ConfigurationWebSocketStreams())

try:
    connection = await client.websocket_streams.create_connection()
    stream = connection.tradeData(listenKey="listen-key")
    stream.on("message", lambda data: {
        match data["e"]:
            case "riskLevelChange":
                print(f"风险等级变更流：{data}")
            case _:
                print(f"未知流：{data}")
    })
    await asyncio.sleep(10)
    await stream.unsubscribe()
except Exception as e:
    logging.error(f"用户数据流中出现错误：{e}")
finally:
    if connection:
        await connection.close_connection(close_session=True)
```
如果未提供 `wsURL`，则默认使用 `wss://stream.binance.com:9443`。

### 自动连接续期

在 API 密钥 24 小时过期之前，WebSocket API 和 WebSocket 流连接的 WebSocket 连接会自动续期，以确保持续连接。

## 测试

要运行测试，请确保你已安装 [Poetry](https://python-poetry.org/)，然后执行以下命令：
```bash
poetry install
poetry run pytest ./tests
```
测试涵盖以下内容：

* REST API 端点
* 流端点
* 错误处理
* 边界情况

## 迁移指南

如果您正在升级到新的模块化结构，请参考 [迁移指南](https://github.com/binance/binance-connector-python/tree/master/clients/margin_trading/docs/migration_guide_margin_trading_sdk.md) 以获取详细步骤。

## 贡献

我们欢迎您的贡献！

由于此仓库包含自动生成的代码，因此我们鼓励您先在 GitHub 上创建一个 issue 来讨论您的想法或提出改进建议。这有助于确保所做的更改符合项目的开发目标和自动化生成流程。

如需贡献代码，请遵循以下步骤：

1. 在 GitHub 上创建一个 issue，描述您的建议或您发现的 bug。
2. 如果确认需要进行更改，维护人员将会把您的更改合并到主分支中。

如果您直接进行贡献，请确保所有测试均能通过。请在讨论并确认更改内容后再提交 Pull Request。

感谢您的贡献！

## 许可证

本项目使用 MIT 许可证。详情请查看 [LICENCE](https://github.com/binance/binance-connector-python/tree/master/clients/margin_trading/LICENCE) 文件。