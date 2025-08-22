# Binance JavaScript 现货交易连接器

[![开放的问题](https://img.shields.io/github/issues/binance/binance-connector-js)](https://github.com/binance/binance-connector-js/issues)
[![代码风格: Prettier](https://img.shields.io/badge/code%20style-prettier-ff69b4)](https://prettier.io/)
[![npm 版本](https://badge.fury.io/js/@binance%2Fspot.svg)](https://badge.fury.io/js/@binance%2Fspot)
[![npm 下载量](https://img.shields.io/npm/dm/@binance/spot.svg)](https://www.npmjs.com/package/@binance/spot)
![Node.js 版本](https://img.shields.io/badge/Node.js-%3E=22.12.0-brightgreen)
[![已知漏洞](https://snyk.io/test/github/binance/binance-connector-js/badge.svg)](https://snyk.io/test/github/binance/binance-connector-js)
[![文档](https://img.shields.io/badge/docs-online-blue?style=flat-square)](https://binance.github.io/binance-connector-js/modules/_binance_spot.html)
[![许可证: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

这是一个用于 Binance 现货交易 API 的客户端库，允许开发者通过编程方式与 Binance 的现货交易平台进行交互。该库通过以下三个不同的端点提供获取市场数据、执行交易和管理订单的工具：

* [REST API](https://github.com/binance/binance-connector-js/tree/master/clients/spot/src/rest-api/rest-api.ts)
* [Websocket API](https://github.com/binance/binance-connector-js/tree/master/clients/spot/src/websocket-api/websocket-api-connection.ts)
* [Websocket 流](https://github.com/binance/binance-connector-js/tree/master/clients/spot/src/websocket-streams/websocket-streams-connection.ts)

## 目录

* [支持的功能](#supported-features)
* [安装](#installation)
* [文档](#documentation)
* [REST APIs](#rest-apis)
* [Websocket APIs](#websocket-apis)
* [Websocket 流](#websocket-streams)
* [测试](#testing)
* [迁移指南](#migration-guide)
* [贡献](#contributing)
* [许可证](#licence)

## 支持的功能

* REST API 端点：
  * `/api/*`
* WebSocket 端点：实时数据流和请求-响应通信。
* 包含测试用例和示例，便于快速上手。

## 安装

要使用该库，请确保你的环境运行的是 **Node.js 22.12.0** 或更高版本。如果你使用 `nvm`（Node 版本管理器），可以按如下方式设置正确的版本：
```bash
nvm install 22.12.0
nvm use 22.12.0
```
然后使用 `npm` 安装库：
```bash
npm install @binance/spot
```
## 文档

如需详细信息，请参考 [Binance API 文档](https://developers.binance.com/docs/binance-spot-api-docs/README)。

### REST API

所有 REST API 接口均可通过 [`rest-api`](https://github.com/binance/binance-connector-js/tree/master/clients/spot/src/rest-api/rest-api.ts) 模块访问。REST API 可用于获取市场数据、管理交易以及访问账户信息。请注意，部分接口需要使用您的 Binance API 凭证进行身份验证。
```typescript
import { Spot, SpotRestAPI } from '@binance/spot';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
};
const client = new Spot({ configurationRestAPI });

client.restAPI
    .exchangeInfo({ symbol: 'BNBUSDT' })
    .then((res) => res.data())
    .then((data: SpotRestAPI.ExchangeInfoResponse) => console.log(data))
    .catch((err) => console.error(err));
```
更多示例可以在 [`examples/rest-api`](https://github.com/binance/binance-connector-js/tree/master/clients/spot/examples/rest-api/) 文件夹中找到。

#### 配置选项

REST API 支持以下高级配置选项：

* `timeout`：请求的超时时间（以毫秒为单位，默认值：1000 毫秒）。
* `proxy`：代理配置：
  * `host`：代理服务器主机名。
  * `port`：代理服务器端口。
  * `protocol`：代理协议（http 或 https）。
  * `auth`：代理身份验证凭据：
    * `username`：代理用户名。
    * `password`：代理密码。
* `keepAlive`：启用 HTTP 长连接（默认值：true）。
* `compression`：启用响应压缩（默认值：true）。
* `retries`：失败请求的重试次数（默认值：3 次）。
* `backoff`：重试之间的延迟时间（以毫秒为单位，默认值：1000 毫秒）。
* `httpsAgent`：用于高级 TLS 配置的自定义 HTTPS 代理。
* `privateKey`：用于身份验证的 RSA 或 ED25519 私钥。
* `privateKeyPassphrase`：私钥的密码（如果私钥已加密）。
* `timeUnit`：指定时间戳的时间单位（例如，毫秒或微秒）。

##### 超时

您可以配置请求的超时时间（以毫秒为单位）。如果请求超过指定的超时时间，则会被中止。有关详细用法，请参阅 [超时示例](https://github.com/binance/binance-connector-js/tree/master/clients/spot/docs/rest-api/timeout.md)。

##### 代理

REST API 支持 HTTP/HTTPS 代理配置。有关详细用法，请参阅 [代理示例](https://github.com/binance/binance-connector-js/tree/master/clients/spot/docs/rest-api/proxy.md)。

##### 长连接（Keep-Alive）

为持久连接启用 HTTP 长连接。有关详细用法，请参阅 [长连接示例](https://github.com/binance/binance-connector-js/tree/master/clients/spot/docs/rest-api/keepAlive.md)。

##### 压缩

启用或禁用响应压缩。有关详细用法，请参阅 [压缩示例](https://github.com/binance/binance-connector-js/tree/master/clients/spot/docs/rest-api/compression.md)。

##### 重试

为失败的请求配置重试次数和每次重试之间的延迟时间（以毫秒为单位）。有关详细用法，请参阅 [重试示例](https://github.com/binance/binance-connector-js/tree/master/clients/spot/docs/rest-api/retries.md)。

##### HTTPS 代理

为高级 TLS 配置自定义 HTTPS 代理。有关详细用法，请参阅 [HTTPS 代理示例](https://github.com/binance/binance-connector-js/tree/master/clients/spot/docs/rest-api/httpsAgent.md)。

##### 基于密钥对的身份验证

REST API 支持基于密钥对的安全通信身份验证。您可以使用 `RSA` 或 `ED25519` 密钥对请求进行签名。有关详细用法，请参阅 [基于密钥对的身份验证示例](https://github.com/binance/binance-connector-js/tree/master/clients/spot/docs/rest-api/key-pair-authentication.md)。

##### 时间单位

REST API 支持不同的时间戳时间单位。有关详细信息，请参阅 [时间单位示例](https://github.com/binance/binance-connector-js/tree/master/clients/spot/docs/rest-api/time-unit.md)。

##### 证书锁定

为了增强安全性，您可以在配置中使用 `httpsAgent` 选项进行证书锁定。这可以确保客户端仅与使用特定证书的服务器通信。有关详细用法，请参阅 [证书锁定示例](https://github.com/binance/binance-connector-js/tree/master/clients/spot/docs/rest-api/certificate-pinning.md)。

#### 错误处理

REST API 提供了详细的错误类型，以帮助您有效地处理问题：

* `ConnectorClientError`：通用客户端错误。
* `RequiredError`：缺少必填参数时抛出。
* `UnauthorizedError`：表示缺少或无效的身份验证凭据。
* `ForbiddenError`：禁止访问请求的资源。
* `TooManyRequestsError`：超出速率限制。
* `RateLimitBanError`：IP 地址因超过速率限制而被封禁。
* `ServerError`：内部服务器错误。
* `NetworkError`：网络连接问题。
* `NotFoundError`：资源未找到。
* `BadRequestError`：无效的请求。

有关详细用法，请参阅 [错误处理示例](https://github.com/binance/binance-connector-js/tree/master/clients/spot/docs/rest-api/error-handling.md)。

#### 测试网（Testnet）

出于测试目的，可以在 [Spot Testnet](https://testnet.binance.vision/) 中使用 `/api/*` 端点。请在配置中更新 `basePath`：
```typescript
import { 现货, 现货RestAPI, 现货_REST_API_TESTNET_URL } from '@binance/现货';

const 配置RestAPI = {
    apiKey: '你的-api-密钥',
    apiSecret: '你的-api-密钥',
    basePath: 现货_REST_API_TESTNET_URL,
};
const 客户端 = new 现货({ 配置RestAPI });
```
如果未提供 `basePath`，则默认使用 `https://api.binance.com`。

### WebSocket API

WebSocket API 为市场数据和交易操作提供请求-响应通信。可以使用 [`websocket-api`](https://github.com/binance/binance-connector-js/tree/master/clients/spot/src/websocket-api/websocket-api.ts) 模块与这些端点进行交互。
```typescript
import { 现货, 现货网络套接字API } from '@binance/spot';

const 配置网络套接字API = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
};
const 客户端 = new 现货({ 配置网络套接字API });

客户端.网络套接字API
    .connect()
    .then((连接: 现货网络套接字API.网络套接字API连接) =>
        连接.exchangeInfo({ symbol: 'BNBUSDT' })
    )
    .then((res: 现货网络套接字API.ApiResponse<现货网络套接字API.交易所信息响应>) =>
        console.log(res.data)
    )
    .catch((err) => console.error(err));
```
更多示例可在 [`examples/websocket-api`](https://github.com/binance/binance-connector-js/tree/master/clients/spot/examples/websocket-api/) 文件夹中找到。

#### 配置选项

WebSocket API 支持以下高级配置选项：

* `timeout`：设置 WebSocket 请求的超时时间（默认值：5000 毫秒）。
* `reconnectDelay`：指定重新连接尝试之间的延迟时间（默认值：5000 毫秒）。
* `compression`：启用或禁用 WebSocket 消息的压缩（默认值：true）。
* `agent`：为高级配置自定义 WebSocket 代理。
* `mode`：选择连接模式，`single` 或 `pool`。
  * `single`：单个 WebSocket 连接。
  * `pool`：一组 WebSocket 连接。
* `poolSize`：在池模式下定义 WebSocket 连接的数量。
* `privateKey`：用于身份验证的 RSA 或 ED25519 私钥。
* `privateKeyPassphrase`：如果私钥已加密，则提供其密码短语。
* `timeUnit`：指定时间戳的时间单位（例如，毫秒或微秒）。

##### 超时

以毫秒为单位设置 WebSocket API 请求的超时时间。有关详细用法，请参阅 [超时示例](https://github.com/binance/binance-connector-js/tree/master/clients/spot/docs/websocket-api/timeout.md)。

##### 重新连接延迟

指定 WebSocket 重新连接尝试之间的延迟时间（以毫秒为单位）。有关详细用法，请参阅 [重新连接延迟示例](https://github.com/binance/binance-connector-js/tree/master/clients/spot/docs/websocket-api/reconnect-delay.md)。

##### 压缩

启用或禁用 WebSocket 消息的压缩。有关详细用法，请参阅 [压缩示例](https://github.com/binance/binance-connector-js/tree/master/clients/spot/docs/websocket-api/compression.md)。

##### WebSocket 代理

为高级配置自定义代理。有关详细用法，请参阅 [WebSocket 代理示例](https://github.com/binance/binance-connector-js/tree/master/clients/spot/docs/websocket-api/agent.md)。

##### 连接模式

选择 WebSocket 连接的 `single` 或 `pool` 连接模式。`single` 模式使用单个 WebSocket 连接，而 `pool` 模式使用一组 WebSocket 连接。有关详细用法，请参阅 [连接模式示例](https://github.com/binance/binance-connector-js/tree/master/clients/spot/docs/websocket-api/connection-mode.md)。

##### 基于密钥对的身份验证

使用 RSA 或 ED25519 私钥进行 WebSocket API 身份验证。有关详细用法，请参阅 [密钥对身份验证示例](https://github.com/binance/binance-connector-js/tree/master/clients/spot/docs/websocket-api/key-pair-authentication.md)。

##### 证书锁定

为了增强安全性，您可以在配置中使用 `agent` 选项启用证书锁定。这确保了客户端仅与使用特定证书的服务器通信。有关详细用法，请参阅 [证书锁定示例](https://github.com/binance/binance-connector-js/tree/master/clients/spot/docs/websocket-api/certificate-pinning.md)。

##### 时间单位

指定 WebSocket API 时间戳的时间单位（例如，毫秒或微秒）。有关详细用法，请参阅 [时间单位示例](https://github.com/binance/binance-connector-js/tree/master/clients/spot/docs/websocket-api/time-unit.md)。

#### 订阅用户数据流

您可以订阅用户数据流，它会发送账户级别的事件，例如账户和订单更新。首先通过 WebSocket API 对 WebSocket 连接执行 `logon` 操作；然后：
```typescript
import { Spot, SpotWebsocketAPI } from '@binance/spot';

const configurationWebsocketAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
};
const client = new Spot({ configurationWebsocketAPI });

client.websocketAPI
    .connect()
    .then((connection) => connection.sessionLogon().then(() => connection))
    .then((connection) => connection.userDataStreamSubscribe())
    .then(({ stream }) => {
        stream.on('message', (data) => {
            switch (data.e) {
                case 'balanceUpdate':
                    console.log('余额更新流', data);
                    break;
                case 'outboundAccountPosition':
                    console.log('出站账户头寸流', data);
                    break;
                // …处理其他类型…
                default:
                    console.log('未知流', data);
                    break;
            }
        });
    })
    .catch((err) => console.error(err));
```
#### 测试网

出于测试目的，Websocket API 还支持测试网环境。请在你的配置中更新 `wsURL`：
```typescript
import { 现货, 现货网络套接字API, 现货网络套接字API测试网URL } from '@binance/spot';

const 配置网络套接字API = {
    apiKey: '你的API密钥',
    apiSecret: '你的API密钥机密',
    wsURL: 现货网络套接字API测试网URL,
};
const 客户端 = new 现货({ 配置网络套接字API });
```
如果未提供 `wsURL`，则默认使用 `wss://ws-api.binance.com:443/ws-api/v3`。

### WebSocket 流

WebSocket 流为市场交易、K线图等提供实时数据推送。请使用 [websocket-streams](https://github.com/binance/binance-connector-js/tree/master/clients/spot/src/websocket-streams/websocket-streams.ts) 模块订阅这些流数据。
```typescript
import { Spot, SpotWebsocketStreams, SPOT_WS_STREAMS_PROD_URL } from '@binance/spot';

const configurationWebsocketStreams = {
    wsURL: SPOT_WS_STREAMS_PROD_URL,
};
const client = new Spot({ configurationWebsocketStreams });

client.websocketStreams
    .connect()
    .then((connection: SpotWebsocketStreams.WebsocketStreamsConnection) => {
        const stream = connection.aggTrade({ symbol: 'BNBUSDT' });
        stream.on('message', (data: SpotWebsocketStreams.AggTradeResponse) => console.info(data));
    })
    .catch((err) => console.error(err));
```
更多示例可在 [`examples/websocket-streams`](https://github.com/binance/binance-connector-js/tree/master/clients/spot/examples/websocket-streams/) 文件夹中找到。

#### 配置选项

WebSocket Streams API 支持以下高级配置选项：

* `reconnectDelay`：指定重连尝试之间的延迟时间（默认值：5000 毫秒）。
* `compression`：启用或禁用 WebSocket 消息的压缩（默认值：true）。
* `agent`：为高级配置自定义 WebSocket 代理。
* `mode`：在 `single` 和 `pool` 连接模式之间选择。
  * `single`：单个 WebSocket 连接。
  * `pool`：一组 WebSocket 连接。
* `poolSize`：在池模式下定义 WebSocket 连接的数量。
* `timeUnit`：指定时间戳的时间单位（例如毫秒或微秒）。

##### 重连延迟

为流指定 WebSocket 重连尝试之间的延迟时间（以毫秒为单位）。详细用法请参见[重连延迟示例](https://github.com/binance/binance-connector-js/tree/master/clients/spot/docs/websocket-streams/reconnect-delay.md)。

##### 压缩

启用或禁用 WebSocket Streams 消息的压缩。详细用法请参见[压缩示例](https://github.com/binance/binance-connector-js/tree/master/clients/spot/docs/websocket-streams/compression.md)。

##### WebSocket 代理

为高级配置自定义代理。详细用法请参见[WebSocket 代理示例](https://github.com/binance/binance-connector-js/tree/master/clients/spot/docs/websocket-streams/agent.md)。

##### 连接模式

在 WebSocket Streams 中选择 `single` 或 `pool` 连接模式。`single` 模式使用单个 WebSocket 连接，而 `pool` 模式使用一组 WebSocket 连接。详细用法请参见[连接模式示例](https://github.com/binance/binance-connector-js/tree/master/clients/spot/docs/websocket-streams/connection-mode.md)。

##### 证书锁定

为了增强安全性，可以在配置中使用 `agent` 选项进行证书锁定。这可以确保客户端仅与使用特定证书的服务器通信。详细用法请参见[证书锁定示例](https://github.com/binance/binance-connector-js/tree/master/clients/spot/docs/websocket-streams/certificate-pinning.md)。

##### 时间单位

指定 WebSocket Streams 时间戳的时间单位（例如毫秒或微秒）。详细用法请参见[时间单位示例](https://github.com/binance/binance-connector-js/tree/master/clients/spot/docs/websocket-streams/time-unit.md)。

#### 从流中取消订阅

您可以使用 `unsubscribe` 方法取消订阅特定的 WebSocket 流。这在无需关闭连接的情况下管理活动订阅时非常有用。
```typescript
import { Spot, SpotWebsocketStreams, SPOT_WS_STREAMS_PROD_URL } from '@binance/spot';

const configurationWebsocketStreams = {
    wsURL: SPOT_WS_STREAMS_PROD_URL,
};
const client = new Spot({ configurationWebsocketStreams });

client.websocketStreams
    .connect()
    .then((connection: SpotWebsocketStreams.WebsocketStreamsConnection) => {
        const stream = connection.aggTrade({ symbol: 'BNBUSDT' });
        stream.on('message', (data: SpotWebsocketStreams.AggTradeResponse) => console.info(data));

        setTimeout(() => {
            stream.unsubscribe();
            console.log('已取消订阅 BNBUSDT 交易流');
        }, 10000);
    })
    .catch((err) => console.error(err));
```
#### 测试网

WebSocket 流也支持用于开发和测试的测试网环境。请更新配置中的 `wsURL`：
```typescript
import { Spot, SpotWebsocketStreams, SPOT_WS_STREAMS_TESTNET_URL } from '@binance/spot';

const configurationWebsocketStreams = {
    wsURL: SPOT_WS_STREAMS_TESTNET_URL,
};
const client = new Spot({ configurationWebsocketStreams });
```
如果未提供 `wsURL`，则默认使用 `wss://stream.binance.com:9443`。

### 自动连接续期

在 API 密钥 24 小时过期之前，WebSocket API 和 WebSocket 流连接的 WebSocket 连接都会自动续期，以确保持续连接。

## 测试

要运行测试：
```bash
npm 安装

npm 运行测试
```
测试覆盖内容：  
- REST API 端点  
- WebSocket API 和数据流  
- 错误处理和边界情况  

## 迁移指南  

如果你要升级到新的模块化结构，请参考 [迁移指南](https://github.com/binance/binance-connector-js/tree/master/clients/spot/docs/migration_guide_spot_connector.md) 以获取详细步骤。

## 贡献  

我们欢迎贡献！

由于此仓库包含自动生成的代码，我们建议你首先在 GitHub 上创建一个 issue 来讨论你的想法或提出改进建议。这有助于确保所做的更改符合项目目标和自动生成流程。

贡献步骤如下：

1. 在 GitHub 上创建一个 issue，描述你的建议或发现的 bug。
2. 如果确认需要更改，维护人员会将更改合并到主分支。

如果你进行直接贡献，请确保所有测试都能通过。请在讨论并确认更改后再提交 pull request。

感谢你的贡献！

## 许可证  

本项目采用 MIT 许可证。详情请参阅 [LICENSE](https://github.com/binance/binance-connector-js/tree/master/clients/spot/LICENCE) 文件。