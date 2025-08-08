# Binance Python SPOT SDK

[![构建状态](https://img.shields.io/github/actions/workflow/status/binance/binance-connector-python/ci.yaml)](https://github.com/binance/binance-connector-python/actions)
[![开放问题](https://img.shields.io/github/issues/binance/binance-connector-python)](https://github.com/binance/binance-connector-python/issues)
[![代码风格：Black](https://img.shields.io/badge/code_style-black-black)](https://black.readthedocs.io/en/stable/)
[![PyPI版本](https://img.shields.io/pypi/v/binance-sdk-spot)](https://pypi.python.org/pypi/binance-sdk-spot)
[![PyPI下载量](https://img.shields.io/pypi/dm/binance-sdk-spot.svg)](https://pypi.org/project/binance-sdk-spot/)
[![Python版本](https://img.shields.io/pypi/pyversions/binance-sdk-spot)](https://www.python.org/downloads/)
[![已知漏洞](https://img.shields.io/badge/security-scanned-brightgreen)](https://github.com/binance/binance-connector-python/security)
[![许可证：MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

这是一个用于Binance SPOT SDK API的客户端库，使开发者能够通过编程方式与Binance的SPOT交易平台进行交互。该库通过以下三个端点提供获取市场数据、执行交易和管理订单的工具：

- [REST API](https://github.com/binance/binance-connector-python/tree/master/clients/spot/src/binance_sdk_spot/rest_api/rest_api.py)
- [Websocket API](https://github.com/binance/binance-connector-python/tree/master/clients/spot/src/binance_sdk_spot/websocket_api/websocket_api.py)
- [Websocket Stream](https://github.com/binance/binance-connector-python/tree/master/clients/spot/src/binance_sdk_spot/websocket_streams/websocket_streams.py)

## 目录

- [支持的功能](#支持的功能)
- [安装](#安装)
- [文档](#文档)
- [REST API](#rest-api)
- [Websocket API](#websocket-api)
- [Websocket Streams](#websocket-streams)
- [测试](#测试)
- [迁移指南](#迁移指南)
- [贡献](#贡献)
- [许可证](#许可证)

## 支持的功能

- REST API 端点：
  - `/api/*`
- WebSocket 端点：实时数据流和请求-响应通信。
- 包含测试用例和示例以帮助快速上手。

## 安装

使用本库前，请确保您的环境运行的是 Python **3.9** 或更高版本。

```bash
pip install binance-sdk-spot
```

## 文档

详细信息请参阅 [Binance API 文档](https://developers.binance.com/docs/binance-sdk-spot-api-docs)。

### REST API

所有REST API端点都可以通过 [`rest_api`](https://github.com/binance/binance-connector-python/tree/master/clients/spot/src/binance_sdk_spot/rest_api/rest_api.py) 模块访问。REST API允许您获取市场数据、管理交易并访问账户信息。请注意，某些端点需要使用您的Binance API凭证进行身份验证。

```python
from binance_common.configuration import ConfigurationRestAPI
from binance_common.constants import SPOT_REST_API_PROD_URL
from binance_sdk_spot.spot import Spot
from binance_sdk_spot.rest_api.models import ExchangeInfoResponse, RateLimits

logging.basicConfig(level=logging.INFO)
configuration = ConfigurationRestAPI(api_key="your-api-key", api_secret="your-api-secret", base_path=SPOT_REST_API_PROD_URL)

client = Spot(config_rest_api=configuration)

try:
    response = client.rest_api.exchange_info(symbol="BNBUSDT")

    rate_limits: List[RateLimits] = response.rate_limits
    logging.info(f"exchange_info() 速率限制: {rate_limits}")

    data: ExchangeInfoResponse = response.data()
    logging.info(f"exchange_info() 响应: {data}")
except Exception as e:
    logging.error(f"exchange_info() 错误: {e}")
```

更多示例可在 [`examples/rest_api`](https://github.com/binance/binance-connector-python/tree/master/clients/spot/examples/rest_api/) 文件夹中找到。

#### 配置选项

REST API 支持以下高级配置选项：

- `timeout`: 请求的超时时间（毫秒，默认值：1000 ms）。
- `proxy`: 代理配置：
  - `host`: 代理服务器主机名。
  - `port`: 代理服务器端口。
  - `protocol`: 代理协议（http 或 https）。
  - `auth`: 代理身份验证凭据：
    - `username`: 代理用户名。
    - `password`: 代理密码。
- `keep_alive`: 启用 HTTP 长连接（默认：true）。
- `compression`: 启用响应压缩（默认：true）。
- `retries`: 请求失败时的重试次数（默认：3次）。
- `backoff`: 重试之间的延迟（毫秒，默认：1000 ms）。
- `https_agent`: 自定义 HTTPS 代理以进行高级 TLS 配置。
- `time_unit`: 指定时间戳的时间单位（例如毫秒或微秒）。
- `private_key`: 用于身份验证的 RSA 或 ED25519 私钥。
- `private_key_passphrase`: 如果私钥加密了，则提供密码。

##### 超时

您可以配置请求的超时时间（毫秒）。如果请求超过指定的超时时间，将被中止。有关详细用法，请参阅 [超时示例](https://github.com/binance/binance-connector-python/tree/master/clients/spot/docs/rest_api/timeout.md)。

##### 代理

REST API 支持 HTTP/HTTPS 代理配置。有关详细用法，请参阅 [代理示例](https://github.com/binance/binance-connector-python/tree/master/clients/spot/docs/rest_api/proxy.md)。

##### 长连接

启用 HTTP 长连接以保持持久连接。有关详细用法，请参阅 [长连接示例](https://github.com/binance/binance-connector-python/tree/master/clients/spot/docs/rest_api/keepAlive.md)。

##### 压缩

启用或禁用响应压缩。有关详细用法，请参阅 [压缩示例](https://github.com/binance/binance-connector-python/tree/master/clients/spot/docs/rest_api/compression.md)。

##### 重试

配置请求失败时的重试次数和重试之间的延迟（毫秒）。有关详细用法，请参阅 [重试示例](https://github.com/binance/binance-connector-python/tree/master/clients/spot/docs/rest_api/retries.md)。

##### HTTPS 代理

自定义 HTTPS 代理以进行高级 TLS 配置。有关详细用法，请参阅 [HTTPS 代理示例](https://github.com/binance/binance-connector-python/tree/master/clients/spot/docs/rest_api/httpsAgent.md)。

##### 基于密钥对的身份验证

REST API 支持基于密钥对的身份验证以进行安全通信。您可以使用 `RSA` 或 `ED25519` 密钥来签名请求。有关详细用法，请参阅 [基于密钥对的身份验证示例](https://github.com/binance/binance-connector-python/tree/master/clients/spot/docs/rest_api/key-pair-authentication.md)。

##### 时间单位

REST API 支持不同的时间单位用于时间戳值。有关详细信息，请参阅 [时间单位示例](https://github.com/binance/binance-connector-python/tree/master/clients/spot/docs/rest_api/time-unit.md)。

##### 证书锁定

为了增强安全性，您可以使用配置中的 `https_agent` 选项进行证书锁定。这确保客户端仅与使用特定证书的服务器通信。有关详细用法，请参阅 [证书锁定示例](https://github.com/binance/binance-connector-python/tree/master/clients/spot/docs/rest_api/certificate-pinning.md)。

#### 错误处理

REST API 提供了详细的错误类型，以帮助您有效处理问题：

- `ClientError`: 表示在SDK客户端中发生的错误。
- `RequiredError`: 当缺少或未定义必需的参数时抛出。
- `UnauthorizedError`: 表示缺少或无效的身份验证凭据。
- `ForbiddenError`: 禁止访问请求的资源。
- `TooManyRequestsError`: 超出速率限制。
- `RateLimitBanError`: 因超出速率限制而IP地址被封禁。
- `ServerError`: 内部服务器错误，可选包含状态码。
- `NetworkError`: 网络连接问题。
- `NotFoundError`: 资源未找到。
- `BadRequestError`: 请求无效或无法处理。

有关详细用法，请参阅 [错误处理示例](https://github.com/binance/binance-connector-python/tree/master/clients/spot/docs/rest_api/error-handling.md)。

#### 测试网络

出于测试目的，`/api/*` 端点可以在 [Spot Testnet](https://testnet.binance.vision/) 上使用。更新配置中的 `base_path`：

```python
from binance_common.configuration import ConfigurationRestAPI
from binance_common.constants import SPOT_REST_API_TESTNET_URL
from binance_sdk_spot.spot import Spot

configuration = ConfigurationRestAPI(api_key="your-api-key", api_secret="your-api-secret", base_path=SPOT_REST_API_TESTNET_URL)
client = Spot(config_rest_api=configuration)
```

如果未提供 `base_path`，则默认为 `https://api.binance.com`。

### Websocket API

WebSocket API 提供市场数据和交易操作的请求-响应通信。使用 [`websocket_api`](https://github.com/binance/binance-connector-python/tree/master/clients/spot/src/binance_sdk_spot/websocket_api/websocket_api.py) 模块与这些端点交互。

```python
import asyncio
import logging

from binance_common.configuration import ConfigurationWebSocketAPI
from binance_common.constants import SPOT_WS_API_PROD_URL
from binance_sdk_spot.spot import Spot
from binance_sdk_spot.websocket_api.models import AccountCommissionResponse

logging.basicConfig(level=logging.INFO)

configuration_ws_api = ConfigurationWebSocketAPI(api_key="your-api-key", api_secret="your-api-secret", stream_url=SPOT_WS_API_PROD_URL)
client = Spot(config_ws_api=configuration_ws_api)

async def exchange_info():
    connection = None
    try:
        connection = await client.websocket_api.create_connection()

        response = await connection.account_commission(
            symbol="BNBUSDT",
        )
        result: AccountCommissionResponse = response.data()
        print(f"Exchange Info: {result}")

    except Exception as e:
        print(f"exchange_info() 错误: {e}")
    finally:
        if connection:
            await connection.close_connection(close_session=True)

if __name__ == "__main__":
    asyncio.run(exchange_info())
```

更多示例可在 [`examples/websocket_api`](https://github.com/binance/binance-connector-python/tree/master/clients/spot/examples/websocket_api/) 文件夹中找到。

#### 配置选项

WebSocket API 支持以下高级配置选项：

- `timeout`: 设置 WebSocket 请求的超时时间（默认：5000 ms）。
- `reconnect_delay`: 重连之间的延迟（ms）。
- `compression`: 启用响应压缩。
- `proxy`: 代理配置：
  - `host`: 代理服务器主机名。
  - `port`: 代理服务器端口。
  - `protocol`: 代理协议（http 或 https）。
  - `auth`: 代理身份验证凭据：
    - `username`: 代理用户名。
    - `password`: 代理密码。
- `mode`: 选择 `single` 和 `pool` 连接模式。
  - `single`: 单个 WebSocket 连接。
  - `pool`: WebSocket 连接池。
- `pool_size`: 在池模式下定义 WebSocket 连接数量。
- `time_unit`: 指定时间戳的时间单位（例如毫秒或微秒）。
- `private_key`: 用于身份验证的 RSA 或 ED25519 私钥。
- `private_key_passphrase`: 如果私钥加密了，则提供密码。
- `https_agent`: 自定义 HTTPS 代理以进行高级 TLS 配置。
- `user_agent`: 自定义 WebSocket Streams 的用户代理字符串。

##### 超时

设置 WebSocket API 请求的超时时间（毫秒）。有关详细用法，请参阅 [超时示例](https://github.com/binance/binance-connector-python/tree/master/clients/spot/docs/websocket_api/timeout.md)。

##### 重连延迟

指定 WebSocket 重连尝试之间的延迟（毫秒）。有关详细用法，请参阅 [重连延迟示例](https://github.com/binance/binance-connector-python/tree/master/clients/spot/docs/websocket_api/reconnect-delay.md)。

##### 压缩

启用或禁用 WebSocket 消息的压缩。有关详细用法，请参阅 [压缩示例](https://github.com/binance/binance-connector-python/tree/master/clients/spot/docs/websocket_api/compression.md)。

##### 代理

WebSocket API 支持 HTTP/HTTPS 代理配置。有关详细用法，请参阅 [代理示例](https://github.com/binance/binance-connector-python/tree/master/clients/spot/docs/websocket_api/proxy.md)。

##### 连接模式

在 `single` 和 `pool` 连接模式之间选择。`single` 模式使用单个 WebSocket 连接，而 `pool` 模式使用 WebSocket 连接池。有关详细用法，请参阅 [连接模式示例](https://github.com/binance/binance-connector-python/tree/master/clients/spot/docs/websocket_api/connection-mode.md)。

##### 时间单位

指定 WebSocket API 时间戳的时间单位（例如毫秒或微秒）。有关详细用法，请参阅 [时间单位示例](https://github.com/binance/binance-connector-python/tree/master/clients/spot/docs/websocket_api/time-unit.md)。

##### 基于密钥对的身份验证

使用 RSA 或 ED25519 私钥进行 WebSocket API 身份验证。有关详细用法，请参阅 [密钥对身份验证示例](https://github.com/binance/binance-connector-python/tree/master/clients/spot/docs/websocket_api/key-pair-authentication.md)。

##### WebSocket Http 代理

自定义代理以进行高级配置。有关详细用法，请参阅 [WebSocket Http 代理示例](https://github.com/binance/binance-connector-python/tree/master/clients/spot/docs/websocket_api/agent.md)。

#### 测试网络

出于测试目的，Websocket API 也支持测试网络环境。更新配置中的 `wsURL`：

```python
from binance_common.configuration import ConfigurationWebSocketAPI
from binance_common.constants import SPOT_WS_API_TESTNET_URL
from binance_sdk_spot.spot import Spot

configuration_ws_api = ConfigurationWebSocketAPI(
    api_key="your-api-key",
    api_secret="your-api-secret",
    stream_url=SPOT_WS_API_TESTNET_URL
)
client = Spot(config_ws_api=configuration_ws_api)
```

如果未提供 `wsURL`，则默认为 `wss://ws-api.binance.com:443/ws-api/v3`。

### Websocket Streams

WebSocket Streams 提供实时数据流，如市场交易、K线图等。使用 [websocket-streams](https://github.com/binance/binance-connector-python/tree/master/clients/spot/src/binance_sdk_spot/websocket_streams/websocket_streams.py) 模块订阅这些流。

```python
import asyncio
import logging

from binance_common.configuration import ConfigurationWebSocketStreams
from binance_common.constants import SPOT_WS_STREAMS_PROD_URL
from binance_sdk_spot.spot import Spot

logging.basicConfig(level=logging.INFO)

configuration_ws_streams = ConfigurationWebSocketStreams(
    stream_url=SPOT_WS_STREAMS_PROD_URL,
)

client = Spot(config_ws_streams=configuration_ws_streams)


async def agg_trade():
    connection = None
    try:
        connection = await client.websocket_streams.create_connection()

        stream = await connection.agg_trade(
            symbol="bnbusdt",
        )
        stream.on("message", lambda data: print(f"{data}"))

        await asyncio.sleep(5)
        await stream.unsubscribe()
    except Exception as e:
        logging.error(f"agg_trade() 错误: {e}")
    finally:
        if connection:
            await connection.close_connection(close_session=True)


if __name__ == "__main__":
    asyncio.run(agg_trade())
```

更多示例可在 [`examples/websocket-streams`](https://github.com/binance/binance-connector-python/tree/master/clients/spot/examples/websocket_streams/) 文件夹中找到。

#### 配置选项

WebSocket Streams API 支持以下高级配置选项：

- `reconnect_delay`: 重连之间的延迟（ms）。
- `compression`: 启用响应压缩。
- `proxy`: 代理配置：
  - `host`: 代理服务器主机名。
  - `port`: 代理服务器端口。
  - `protocol`: 代理协议（http 或 https）。
  - `auth`: 代理身份验证凭据：
    - `username`: 代理用户名。
    - `password`: 代理密码。
- `mode`: 选择 `single` 和 `pool` 连接模式。
  - `single`: 单个 WebSocket 连接。
  - `pool`: WebSocket 连接池。
- `pool_size`: 在池模式下定义 WebSocket 连接数量。
- `time_unit`: 指定时间戳的时间单位（例如毫秒或微秒）。
- `https_agent`: 自定义 HTTPS 代理以进行高级 TLS 配置。
- `user_agent`: 自定义 WebSocket Streams 的用户代理字符串。

##### 重连延迟

指定 WebSocket 流的重连尝试之间的延迟（毫秒）。有关详细用法，请参阅 [重连延迟示例](https://github.com/binance/binance-connector-python/tree/master/clients/spot/docs/websocket_streams/reconnect-delay.md)。

##### 压缩

启用或禁用 WebSocket Streams 消息的压缩。有关详细用法，请参阅 [压缩示例](https://github.com/binance/binance-connector-python/tree/master/clients/spot/docs/websocket_streams/compression.md)。

##### 代理

WebSocket Streams 支持 HTTP/HTTPS 代理配置。有关详细用法，请参阅 [代理示例](https://github.com/binance/binance-connector-python/tree/master/clients/spot/docs/websocket_streams/proxy.md)。

##### 连接模式

在 `single` 和 `pool` 连接模式之间选择。`single` 模式使用单个 WebSocket 连接，而 `pool` 模式使用 WebSocket 连接池。有关详细用法，请参阅 [连接模式示例](https://github.com/binance/binance-connector-python/tree/master/clients/spot/docs/websocket_streams/connection-mode.md)。

##### 时间单位

指定 WebSocket Streams 时间戳的时间单位（例如毫秒或微秒）。有关详细用法，请参阅 [时间单位示例](https://github.com/binance/binance-connector-python/tree/master/clients/spot/docs/websocket_streams/time-unit.md)。

##### WebSocket Http 代理

自定义代理以进行高级配置。有关详细用法，请参阅 [WebSocket Http 代理示例](https://github.com/binance/binance-connector-python/tree/master/clients/spot/docs/websocket_streams/agent.md)。

#### 取消订阅流

您可以使用 `unsubscribe` 方法取消订阅特定的 WebSocket 流。这对于在不关闭连接的情况下管理活动订阅非常有用。

```python
import asyncio
import logging

from binance_common.configuration import ConfigurationWebSocketStreams
from binance_sdk_spot.spot import Spot

logging.basicConfig(level=logging.INFO)

client = Spot(config_ws_streams=ConfigurationWebSocketStreams())


async def agg_trade():
    connection = None
    try:
        connection = await client.websocket_streams.create_connection()

        stream = await connection.agg_trade(
            symbol="bnbusdt",
        )
        stream.on("message", lambda data: print(f"{data}"))

        await asyncio.sleep(5)
        await stream.unsubscribe()
    except Exception as e:
        logging.error(f"agg_trade() 错误: {e}")
    finally:
        if connection:
            await connection.close_connection(close_session=True)


if __name__ == "__main__":
    asyncio.run(agg_trade())
```

#### 测试网络

Websocket Streams 也支持开发和测试使用的测试网络环境。更新配置中的 `wsURL`：

```python
from binance_common.configuration import ConfigurationWebSocketStreams
from binance_common.constants import SPOT_WS_STREAMS_TESTNET_URL
from binance_sdk_spot.spot import Spot

config_ws_streams = ConfigurationWebSocketStreams(
    stream_url=SPOT_WS_STREAMS_TESTNET_URL
)

client = Spot(config_ws_streams=config_ws_streams)
```

如果未提供 `wsURL`，则默认为 `wss://stream.binance.com:9443`。

### 自动连接续订

WebSocket 连接会在 API 密钥过期（24 小时）之前自动续订，确保持续连接。

## 测试

要运行测试，请确保已安装 [Poetry](https://python-poetry.org/)，然后执行以下命令：

```bash
poetry install
poetry run pytest ./tests
```

测试涵盖：
- REST API 端点
- WebSocket API 和 Streams
- 错误处理和边界情况

## 迁移指南

如果您正在升级到新的模块化结构，请参阅 [迁移指南](https://github.com/binance/binance-connector-python/tree/master/clients/spot/docs/migration_guide_spot_sdk.md) 以获取详细步骤。

## 贡献

我们欢迎贡献！

由于此仓库包含自动生成的代码，我们鼓励您首先在 GitHub 上打开一个问题来讨论您的想法或提出改进建议。这有助于确保更改与项目目标和自动生成流程保持一致。

要贡献：

1. 打开一个 GitHub 问题，描述您的建议或发现的 bug。
2. 如果确定需要更改，维护人员将把更改合并到主分支中。

请确保在进行直接贡献时所有测试都通过。只有在讨论和确认更改后才提交拉取请求。

感谢您的贡献！

## 许可证

本项目采用 MIT 许可证。详情请参阅 [LICENCE](https://github.com/binance/binance-connector-python/tree/master/clients/spot/LICENCE) 文件。