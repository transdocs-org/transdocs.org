# Binance JavaScript 杠杆交易连接器

[![Open Issues](https://img.shields.io/github/issues/binance/binance-connector-js)](https://github.com/binance/binance-connector-js/issues)
[![代码风格: Prettier](https://img.shields.io/badge/code%20style-prettier-ff69b4)](https://prettier.io/)
[![npm 版本](https://badge.fury.io/js/@binance%2Fmargin-trading.svg)](https://badge.fury.io/js/@binance%2Fmargin-trading)
[![npm 下载量](https://img.shields.io/npm/dm/@binance/margin-trading.svg)](https://www.npmjs.com/package/@binance/margin-trading)
![Node.js 版本](https://img.shields.io/badge/Node.js-%3E=22.12.0-brightgreen)
[![已知漏洞](https://snyk.io/test/github/binance/binance-connector-js/badge.svg)](https://snyk.io/test/github/binance/binance-connector-js)
[![文档](https://img.shields.io/badge/docs-online-blue?style=flat-square)](https://binance.github.io/binance-connector-js/modules/_binance_margin-trading.html)
[![许可证: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

这是一个用于 Binance 杠杆交易 API 的客户端库，使开发者能够通过编程方式与 Binance 的杠杆交易平台进行交互。该库提供通过 REST API 使用第三方提供的资金进行资产交易的工具：

- [REST API](https://github.com/binance/binance-connector-js/tree/master/clients/margin-trading/src/rest-api/rest-api.ts)
- [Websocket 流](https://github.com/binance/binance-connector-js/tree/master/clients/margin-trading/src/websocket-streams/websocket-streams-connection.ts)

## 目录

- [支持的功能](#支持的功能)
- [安装](#安装)
- [文档](#文档)
- [REST API](#rest-api)
- [Websocket 流](#websocket-流)
- [测试](#测试)
- [迁移指南](#迁移指南)
- [贡献](#贡献)
- [许可证](#许可证)

## 支持的功能

- REST API 端点：
  - `/sapi/v1/margin/*`
  - `/sapi/v1/bnbBurn/*`
  - `/sapi/v1/userDataStream/*`
- 包含测试用例和示例以实现快速上手。

## 安装

要使用此库，请确保你的环境运行的是 **Node.js 22.12.0** 或更高版本。如果你使用 `nvm`（Node 版本管理器），你可以按如下方式设置正确的版本：

```bash
nvm install 22.12.0
nvm use 22.12.0
```

然后使用 `npm` 安装库：

```bash
npm install @binance/margin-trading
```

## 文档

有关详细信息，请参阅 [Binance API 文档](https://developers.binance.com/docs/margin_trading)。

### REST API

所有 REST API 端点都可以通过 [`rest-api`](https://github.com/binance/binance-connector-js/tree/master/clients/margin-trading/src/rest-api/rest-api.ts) 模块访问。请注意，某些端点需要使用你的 Binance API 凭据进行身份验证。

```typescript
import { MarginTrading, MarginTradingRestAPI } from '@binance/margin-trading';

const configurationRestAPI = {
    apiKey: 'your-api-key',
    apiSecret: 'your-api-secret',
};
const client = new MarginTrading({ configurationRestAPI });

client.restAPI
    .getSummaryOfMarginAccount()
    .then((res) => res.data())
    .then((data: MarginTradingRestAPI.GetSummaryOfMarginAccountResponse) => console.log(data))
    .catch((err) => console.error(err));
```

更多示例可在 [`examples/rest-api`](https://github.com/binance/binance-connector-js/tree/master/clients/margin-trading/examples/rest-api/) 文件夹中找到。

#### 配置选项

REST API 支持以下高级配置选项：

- `timeout`：请求超时时间（毫秒）（默认值：1000 毫秒）。
- `proxy`：代理配置：
  - `host`：代理服务器主机名。
  - `port`：代理服务器端口。
  - `protocol`：代理协议（http 或 https）。
  - `auth`：代理身份验证凭据：
    - `username`：代理用户名。
    - `password`：代理密码。
- `keepAlive`：启用 HTTP 长连接（默认值：true）。
- `compression`：启用响应压缩（默认值：true）。
- `retries`：失败请求的重试次数（默认值：3）。
- `backoff`：重试之间的延迟（毫秒）（默认值：1000 毫秒）。
- `httpsAgent`：自定义 HTTPS 代理以进行高级 TLS 配置。
- `privateKey`：用于身份验证的 RSA 或 ED25519 私钥。
- `privateKeyPassphrase`：私钥的密码（如果加密）。

##### 超时

你可以配置请求的超时时间（毫秒）。如果请求超过指定的超时时间，将被中止。请参阅 [超时示例](https://github.com/binance/binance-connector-js/tree/master/clients/margin-trading/docs/rest-api/timeout.md) 以了解详细用法。

##### 代理

REST API 支持 HTTP/HTTPS 代理配置。请参阅 [代理示例](https://github.com/binance/binance-connector-js/tree/master/clients/margin-trading/docs/rest-api/proxy.md) 以了解详细用法。

##### 长连接

为持久连接启用 HTTP 长连接。请参阅 [长连接示例](https://github.com/binance/binance-connector-js/tree/master/clients/margin-trading/docs/rest-api/keepAlive.md) 以了解详细用法。

##### 压缩

启用或禁用响应压缩。请参阅 [压缩示例](https://github.com/binance/binance-connector-js/tree/master/clients/margin-trading/docs/rest-api/compression.md) 以了解详细用法。

##### 重试

为失败的请求配置重试次数和重试之间的延迟（毫秒）。请参阅 [重试示例](https://github.com/binance/binance-connector-js/tree/master/clients/margin-trading/docs/rest-api/retries.md) 以了解详细用法。

##### HTTPS 代理

自定义 HTTPS 代理以进行高级 TLS 配置。请参阅 [HTTPS 代理示例](https://github.com/binance/binance-connector-js/tree/master/clients/margin-trading/docs/rest-api/httpsAgent.md) 以了解详细用法。

##### 基于密钥对的身份验证

REST API 支持基于密钥对的身份验证以进行安全通信。你可以使用 `RSA` 或 `ED25519` 密钥对请求进行签名。请参阅 [基于密钥对的身份验证示例](https://github.com/binance/binance-connector-js/tree/master/clients/margin-trading/docs/rest-api/key-pair-authentication.md) 以了解详细用法。

##### 证书固定

为增强安全性，你可以使用 `httpsAgent` 选项进行证书固定。这确保客户端仅与使用特定证书的服务器通信。请参阅 [证书固定示例](https://github.com/binance/binance-connector-js/tree/master/clients/margin-trading/docs/rest-api/certificate-pinning.md) 以了解详细用法。

#### 错误处理

REST API 提供详细的错误类型以帮助你有效处理问题：

- `ConnectorClientError`：一般客户端错误。
- `RequiredError`：缺少必填参数时抛出。
- `UnauthorizedError`：表示缺少或无效的身份验证凭据。
- `ForbiddenError`：禁止访问请求的资源。
- `TooManyRequestsError`：超出速率限制。
- `RateLimitBanError`：IP 地址因超出速率限制而被禁止。
- `ServerError`：内部服务器错误。
- `NetworkError`：网络连接问题。
- `NotFoundError`：资源未找到。
- `BadRequestError`：无效请求。

请参阅 [错误处理示例](https://github.com/binance/binance-connector-js/tree/master/clients/margin-trading/docs/rest-api/error-handling.md) 以了解详细用法。

如果没有提供 `basePath`，则默认为 `https://api.binance.com`。

### Websocket 流

`margin-trading` 中的 WebSocket 流用于订阅风险和交易数据流。使用 [websocket-streams](https://github.com/binance/binance-connector-js/tree/master/clients/margin-trading/src/websocket-streams/websocket-streams.ts) 模块与之交互。

#### 配置选项

WebSocket 流 API 支持以下高级配置选项：

- `reconnectDelay`：指定重新连接尝试之间的延迟（默认值：5000 毫秒）。
- `compression`：启用或禁用 WebSocket 消息的压缩（默认值：true）。
- `agent`：自定义 WebSocket 代理以进行高级配置。
- `mode`：在 `single` 和 `pool` 连接模式之间选择。
  - `single`：单个 WebSocket 连接。
  - `pool`：一组 WebSocket 连接。
- `poolSize`：在池模式下定义 WebSocket 连接数。

#### 订阅风险和交易数据流

你可以消费风险和交易数据流，它会发送账户级别的事件，如账户和订单更新。首先通过 REST API 创建一个 listen-key；然后：

```typescript
import { MarginTrading, MARGIN_TRADING_WS_STREAMS_PROD_URL } from '@binance/margin-trading';

const configurationWebsocketStreams = {
  wsURL: MARGIN_TRADING_WS_STREAMS_PROD_URL,
};
const client = new MarginTrading({ configurationWebsocketStreams });

client.websocketStreams
  .connect()
  .then((connection) => {
      const tradeStream = connection.tradeData('listenKey');
      tradeStream.on('message', (data) => {
          switch (data.e) {
              case 'balanceUpdate':
                  console.log('余额更新流', data);
                  break;
              case 'outboundAccountPosition':
                  console.log('出站账户位置流', data);
                  break;
              // …处理其他变体…
              default:
                  console.log('未知流', data);
                  break;
          }
      });
  })
  .catch((err) => console.error(err));
```

```typescript
import { MarginTrading, MARGIN_TRADING_RISK_WS_STREAMS_PROD_URL } from '@binance/margin-trading';

const configurationWebsocketStreams = {
  wsURL: MARGIN_TRADING_RISK_WS_STREAMS_PROD_URL,
};
const client = new MarginTrading({ configurationWebsocketStreams });

client.websocketStreams
  .connect()
  .then((connection) => {
      const riskStream = connection.riskData('listenKey');
      riskStream.on('message', (data) => {
          switch (data.e) {
              case 'MARGIN_LEVEL_STATUS_CHANGE':
                  console.log('风险等级变更流', data);
                  break;
              case 'USER_LIABILITY_CHANGE':
                  console.log('风险等级变更流', data);
                  break;
              default:
                  console.log('未知流', data);
                  break;
          }
      });
  })
  .catch((err) => console.error(err));
```

#### 取消订阅流

你可以使用 `unsubscribe` 方法取消订阅风险和交易数据流。这对于在不关闭连接的情况下管理活动订阅很有用。

```typescript
import { MarginTrading, MARGIN_TRADING_WS_STREAMS_PROD_URL } from '@binance/margin-trading';

const configurationWebsocketStreams = {
  wsURL: MARGIN_TRADING_WS_STREAMS_PROD_URL,
};
const client = new MarginTrading({ configurationWebsocketStreams });

client.websocketStreams
  .connect()
  .then((connection) => {
      const tradeStream = connection.tradeData('listenKey');
      tradeStream.on('message', (data) => {
          switch (data.e) {
              case 'balanceUpdate':
                  console.log('余额更新流', data);
                  break;
              case 'outboundAccountPosition':
                  console.log('出站账户位置流', data);
                  break;
              default:
                  console.log('未知流', data);
                  break;
          }
      });

      setTimeout(() => {
        stream.unsubscribe();
        console.log('已取消订阅交易数据流');
      }, 10000);
  })
  .catch((err) => console.error(err));
```

如果没有提供 `wsURL`，则默认为 `wss://stream.binance.com:9443`。

### 自动连接续订

在 API 密钥 24 小时过期之前，WebSocket 连接将为 WebSocket API 和 WebSocket 流连接自动续订。这确保了持续的连接。

## 测试

要运行测试：

```bash
npm install

npm run test
```

测试涵盖：

- REST API 端点
- 错误处理和边界情况

## 迁移指南

如果你正在升级到新的模块化结构，请参阅 [迁移指南](https://github.com/binance/binance-connector-js/tree/master/clients/margin-trading/docs/migration_guide_margin_trading_connector.md) 以获取详细步骤。

## 贡献

欢迎贡献！

由于此仓库包含自动生成的代码，我们鼓励你先打开一个 GitHub issue 来讨论你的想法或提出改进建议。这有助于确保更改符合项目的目标和自动生成流程。

要贡献：

1. 打开一个 GitHub issue，描述你的建议或你发现的 bug。
2. 如果确定需要更改，维护者将把更改合并到主分支中。

请确保如果你直接贡献，所有测试都通过。请在讨论并确认更改后才提交 pull request。

感谢你的贡献！

## 许可证

该项目采用 MIT 许可证。请参阅 [LICENCE](https://github.com/binance/binance-connector-js/tree/master/clients/margin-trading/LICENCE) 文件以获取详细信息。