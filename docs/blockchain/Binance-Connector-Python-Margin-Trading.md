# Binance Python 杠杆交易 SDK

[![Build Status](https://img.shields.io/github/actions/workflow/status/binance/binance-connector-python/ci.yaml)](https://github.com/binance/binance-connector-python/actions)
[![Open Issues](https://img.shields.io/github/issues/binance/binance-connector-python)](https://github.com/binance/binance-connector-python/issues)
[![Code Style: Black](https://img.shields.io/badge/code_style-black-black)](https://black.readthedocs.io/en/stable/)
[![PyPI version](https://img.shields.io/pypi/v/binance-sdk-margin-trading)](https://pypi.python.org/pypi/binance-sdk-margin-trading)
[![PyPI Downloads](https://img.shields.io/pypi/dm/binance-sdk-margin-trading.svg)](https://pypi.org/project/binance-sdk-margin-trading/)
[![Python version](https://img.shields.io/pypi/pyversions/binance-sdk-margin-trading)](https://www.python.org/downloads/)
[![Known Vulnerabilities](https://img.shields.io/badge/security-scanned-brightgreen)](https://github.com/binance/binance-connector-python/security)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

这是 Binance 杠杆交易 SDK API 的客户端库，使开发者能够通过编程方式与 Binance 的杠杆交易平台进行交互。该库提供通过 REST API 使用第三方提供的资金进行资产交易的工具：

- [REST API](https://github.com/binance/binance-connector-python/tree/master/clients/margin_trading/src/binance_sdk_margin_trading/rest_api/rest_api.py)
- [Websocket Stream](https://github.com/binance/binance-connector-python/tree/master/clients/margin_trading/src/binance_sdk_margin_trading/websocket_streams/websocket_streams.py)

## 目录

- [支持的功能](#支持的功能)
- [安装](#安装)
- [文档](#文档)
- [REST APIs](#rest-apis)
- [Websocket Streams](#websocket-streams)
- [测试](#测试)
- [迁移指南](#迁移指南)
- [贡献](#贡献)
- [许可证](#许可证)

## 支持的功能

- REST API 接口：
  - `/sapi/v1/margin/*`
  - `/sapi/v1/bnbBurn/*`
  - `/sapi/v1/userDataStream/*`
- 包含测试用例和示例，便于快速上手。

## 安装

要使用此库，请确保您的环境运行 **Python 3.9** 或更高版本。

```bash
pip install binance-sdk-margin-trading
```

## 文档

详细信息，请参阅 [Binance API 文档](https://developers.binance.com/docs/margin_trading/Introduction)。

### REST APIs

所有 REST API 接口都可通过 [`rest_api`](https://github.com/binance/binance-connector-python/tree/master/clients/margin_trading/src/binance_sdk_margin_trading/rest_api/rest_api.py) 模块使用。REST API 可用于获取市场数据、管理交易以及访问账户信息。请注意，某些接口需要使用您的 Binance API 凭证进行身份验证。

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
    logging.info(f"get_summary_of_margin_account() response: {data}")
except Exception as e:
    logging.error(f"get_summary_of_margin_account() error: {e}")
```

更多示例可以在 [`examples/rest_api`](https://github.com/binance/binance-connector-python/tree/master/clients/margin_trading/examples/rest_api/) 文件夹中找到。

#### 配置选项

REST API 支持以下高级配置选项：

- `timeout`: 请求超时时间（毫秒，默认值：1000 ms）。
- `proxy`: 代理配置：
  - `host`: 代理服务器主机名。
  - `port`: 代理服务器端口。
  - `protocol`: 代理协议（http 或 https）。
  - `auth`: 代理身份验证凭据：
    - `username`: 代理用户名。
    - `password`: 代理密码。
- `keep_alive`: 启用 HTTP 长连接（默认值：true）。
- `compression`: 启用响应压缩（默认值：true）。
- `retries`: 请求失败时的重试次数（默认值：3）。
- `backoff`: 重试之间的延迟时间（毫秒，默认值：1000 ms）。
- `https_agent`: 用于高级 TLS 配置的自定义 HTTPS 代理。
- `private_key`: 用于身份验证的 RSA 或 ED25519 私钥。
- `private_key_passphrase`: 私钥的密码（如果加密）。

##### 超时

您可以配置请求的超时时间（毫秒）。如果请求超过指定的超时时间，将被中止。有关详细用法，请参阅 [超时示例](https://github.com/binance/binance-connector-python/tree/master/clients/margin_trading/docs/rest_api/timeout.md)。

##### 代理

REST API 支持 HTTP/HTTPS 代理配置。有关详细用法，请参阅 [代理示例](https://github.com/binance/binance-connector-python/tree/master/clients/margin_trading/docs/rest_api/proxy.md)。

##### 长连接

为持久连接启用 HTTP 长连接。有关详细用法，请参阅 [长连接示例](https://github.com/binance/binance-connector-python/tree/master/clients/margin_trading/docs/rest_api/keepAlive.md)。

##### 压缩

启用或禁用响应压缩。有关详细用法，请参阅 [压缩示例](https://github.com/binance/binance-connector-python/tree/master/clients/margin_trading/docs/rest_api/compression.md)。

##### 重试

配置请求失败时的重试次数和每次重试之间的延迟时间（毫秒）。有关详细用法，请参阅 [重试示例](https://github.com/binance/binance-connector-python/tree/master/clients/margin_trading/docs/rest_api/retries.md)。

##### HTTPS 代理

为高级 TLS 配置自定义 HTTPS 代理。有关详细用法，请参阅 [HTTPS 代理示例](https://github.com/binance/binance-connector-python/tree/master/clients/margin_trading/docs/rest_api/httpsAgent.md)。

##### 基于密钥对的身份验证

REST API 支持基于密钥对的身份验证以确保通信安全。您可以使用 `RSA` 或 `ED25519` 密钥对请求进行签名。有关详细用法，请参阅 [基于密钥对的身份验证示例](https://github.com/binance/binance-connector-python/tree/master/clients/margin_trading/docs/rest_api/key-pair-authentication.md)。

##### 证书锁定

为了增强安全性，您可以在配置中使用 `https_agent` 选项进行证书锁定。这确保客户端仅与使用特定证书的服务器通信。有关详细用法，请参阅 [证书锁定示例](https://github.com/binance/binance-connector-python/tree/master/clients/margin_trading/docs/rest_api/certificate-pinning.md)。

#### 错误处理

REST API 提供了详细的错误类型，以帮助您有效处理问题：

- `ClientError`: 表示在 SDK 客户端中发生的错误。
- `RequiredError`: 当缺少或未定义必需参数时抛出。
- `UnauthorizedError`: 表示缺少或无效的身份验证凭据。
- `ForbiddenError`: 禁止访问请求的资源。
- `TooManyRequestsError`: 超出速率限制。
- `RateLimitBanError`: 因超出速率限制而被禁止的 IP 地址。
- `ServerError`: 内部服务器错误，可选地包括状态码。
- `NetworkError`: 网络连接问题。
- `NotFoundError`: 资源未找到。
- `BadRequestError`: 无效请求或无法处理的请求。

有关详细用法，请参阅 [错误处理示例](https://github.com/binance/binance-connector-python/tree/master/clients/margin_trading/docs/rest_api/error-handling.md)。

如果未提供 `base_path`，则默认为 `https://api.binance.com`。

### Websocket Streams

杠杆交易中的 WebSocket Streams 用于订阅风险和交易数据流。使用 [websocket-streams](https://github.com/binance/binance-connector-python/tree/master/clients/margin_trading/src/binance_sdk_margin_trading/websocket_streams/websocket_streams.py) 模块与之交互。

#### 配置选项

WebSocket Streams API 支持以下高级配置选项：

- `reconnect_delay`: 重新连接之间的延迟（毫秒）。
- `compression`: 启用响应压缩。
- `mode`: 在 `single` 和 `pool` 连接模式之间选择。
  - `single`: 单个 WebSocket 连接。
  - `pool`: 一组 WebSocket 连接。
- `pool_size`: 在池模式下定义 WebSocket 连接的数量。
- `https_agent`: 用于高级 TLS 配置的自定义 HTTPS 代理。
- `user_agent`: 用于 WebSocket Streams 的自定义用户代理字符串。

#### 订阅风险和交易数据流

您可以消费风险和交易数据流，该数据流发送账户级别的事件，例如账户和订单更新。首先通过 REST API 创建一个 listen-key；然后：

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
                print(f"风险等级变化流: {data}")
            case 'outboundAccountPosition':
                print(f"出站账户仓位流 {data}");
                break;
            # …处理其他变体…
            case _:
                print(f"未知流: {data}")
    })
except Exception as e:
    logging.error(f"用户数据流错误: {e}")
```

#### 取消订阅流

您可以使用 `unsubscribe` 方法取消订阅特定的 WebSocket 流。这对于在不关闭连接的情况下管理活动订阅非常有用。

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
                print(f"风险等级变化流: {data}")
            case _:
                print(f"未知流: {data}")
    })
    await asyncio.sleep(10)
    await stream.unsubscribe()
except Exception as e:
    logging.error(f"用户数据流错误: {e}")
finally:
    if connection:
        await connection.close_connection(close_session=True)
```

如果未提供 `wsURL`，则默认为 `wss://stream.binance.com:9443`。

### 自动连接续订

在 API 密钥 24 小时过期之前，WebSocket 连接会自动为 WebSocket API 和 WebSocket Streams 连接续订。这确保了持续的连接。

## 测试

要运行测试，请确保您已安装 [Poetry](https://python-poetry.org/)，然后执行以下命令：

```bash
poetry install
poetry run pytest ./tests
```

测试涵盖：
* REST API 接口
* 流接口
* 错误处理
* 边界情况

## 迁移指南

如果您要升级到新的模块化结构，请参阅 [迁移指南](https://github.com/binance/binance-connector-python/tree/master/clients/margin_trading/docs/migration_guide_margin_trading_sdk.md) 以获取详细步骤。

## 贡献

欢迎贡献！

由于此仓库包含自动生成的代码，我们鼓励您首先在 GitHub 上打开一个问题来讨论您的想法或提出改进建议。这有助于确保更改符合项目的开发目标和自动生成流程。

要贡献：

1. 打开一个 GitHub 问题，描述您的建议或您发现的 bug。
2. 如果确定需要更改，维护者将把更改合并到主分支中。

如果您直接贡献，请确保所有测试通过。请在讨论并确认更改后提交拉取请求。

感谢您的贡献！

## 许可证

该项目根据 MIT 许可证进行许可。详情请参阅 [LICENCE](https://github.com/binance/binance-connector-python/tree/master/clients/margin_trading/LICENCE) 文件。