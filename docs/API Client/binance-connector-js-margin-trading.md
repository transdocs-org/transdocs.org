# Binance JavaScript 杠杆交易连接器

[![Open Issues](https://img.shields.io/github/issues/binance/binance-connector-js)](https://github.com/binance/binance-connector-js/issues)
[![代码风格: Prettier](https://img.shields.io/badge/code%20style-prettier-ff69b4)](https://prettier.io/)
[![npm 版本](https://badge.fury.io/js/@binance%2Fmargin-trading.svg)](https://badge.fury.io/js/@binance%2Fmargin-trading)
[![npm 下载量](https://img.shields.io/npm/dm/@binance/margin-trading.svg)](https://www.npmjs.com/package/@binance/margin-trading)
![Node.js 版本](https://img.shields.io/badge/Node.js-%3E=22.12.0-brightgreen)
[![已知漏洞](https://snyk.io/test/github/binance/binance-connector-js/badge.svg)](https://snyk.io/test/github/binance/binance-connector-js)
[![文档](https://img.shields.io/badge/docs-online-blue?style=flat-square)](https://binance.github.io/binance-connector-js/modules/_binance_margin-trading.html)
[![许可证: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

这是一个用于 Binance 杠杆交易 API 的客户端库，使开发者能够通过编程方式与 Binance 的杠杆交易平台进行交互。该库提供了通过 REST API 使用第三方提供的资金进行资产交易的工具：

* [REST API](https://github.com/binance/binance-connector-js/tree/master/clients/margin-trading/src/rest-api/rest-api.ts)
* [Websocket 流](https://github.com/binance/binance-connector-js/tree/master/clients/margin-trading/src/websocket-streams/websocket-streams-connection.ts)

## 目录

* [支持的功能](#支持的功能)
* [安装](#安装)
* [文档](#文档)
* [REST APIs](#rest-apis)
* [Websocket 流](#websocket-流)
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

要使用该库，请确保您的环境运行的是 **Node.js 22.12.0** 或更高版本。如果您使用 `nvm`（Node 版本管理器），可以按如下方式设置正确的版本：
```bash
nvm install 22.12.0
nvm use 22.12.0
```
然后使用 `npm` 安装库：
```bash
npm install @binance/margin-trading
```
## 文档

如需详细信息，请参考 [Binance API 文档](https://developers.binance.com/docs/margin_trading)。

### REST API

所有 REST API 端点均可通过 [`rest-api`](https://github.com/binance/binance-connector-js/tree/master/clients/margin-trading/src/rest-api/rest-api.ts) 模块访问。请注意，某些端点需要使用您的 Binance API 凭证进行身份验证。
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

* `timeout`：请求超时时间，单位为毫秒（默认值：1000 毫秒）。
* `proxy`：代理配置：
  * `host`：代理服务器主机名。
  * `port`：代理服务器端口。
  * `protocol`：代理协议（http 或 https）。
  * `auth`：代理身份验证凭据：
    * `username`：代理用户名。
    * `password`：代理密码。
* `keepAlive`：启用 HTTP keep-alive（默认值：true）。
* `compression`：启用响应压缩（默认值：true）。
* `retries`：请求失败时的重试次数（默认值：3 次）。
* `backoff`：重试之间的延迟毫秒数（默认值：1000 毫秒）。
* `httpsAgent`：用于高级 TLS 配置的自定义 HTTPS 代理。
* `privateKey`：用于身份验证的 RSA 或 ED25519 私钥。
* `privateKeyPassphrase`：私钥的密码短语（如果加密）。

##### 超时

您可以将请求的超时时间配置为毫秒。如果请求超过指定的超时时间，则会被中止。有关详细用法，请参阅 [超时示例](https://github.com/binance/binance-connector-js/tree/master/clients/margin-trading/docs/rest-api/timeout.md)。

##### 代理

REST API 支持 HTTP/HTTPS 代理配置。有关详细用法，请参阅 [代理示例](https://github.com/binance/binance-connector-js/tree/master/clients/margin-trading/docs/rest-api/proxy.md)。

##### Keep-Alive

为持久连接启用 HTTP keep-alive。有关详细用法，请参阅 [Keep-Alive 示例](https://github.com/binance/binance-connector-js/tree/master/clients/margin-trading/docs/rest-api/keepAlive.md)。

##### 压缩

启用或禁用响应压缩。有关详细用法，请参阅 [压缩示例](https://github.com/binance/binance-connector-js/tree/master/clients/margin-trading/docs/rest-api/compression.md)。

##### 重试

为失败的请求配置重试次数和每次重试之间的延迟毫秒数。有关详细用法，请参阅 [重试示例](https://github.com/binance/binance-connector-js/tree/master/clients/margin-trading/docs/rest-api/retries.md)。

##### HTTPS 代理

为高级 TLS 配置自定义 HTTPS 代理。有关详细用法，请参阅 [HTTPS 代理示例](https://github.com/binance/binance-connector-js/tree/master/clients/margin-trading/docs/rest-api/httpsAgent.md)。

##### 基于密钥对的身份验证

REST API 支持基于密钥对的安全通信身份验证。您可以使用 `RSA` 或 `ED25519` 密钥对请求进行签名。有关详细用法，请参阅 [基于密钥对的身份验证示例](https://github.com/binance/binance-connector-js/tree/master/clients/margin-trading/docs/rest-api/key-pair-authentication.md)。

##### 证书锁定

为增强安全性，您可以在配置中使用 `httpsAgent` 选项进行证书锁定。这确保客户端仅与使用特定证书的服务器通信。有关详细用法，请参阅 [证书锁定示例](https://github.com/binance/binance-connector-js/tree/master/clients/margin-trading/docs/rest-api/certificate-pinning.md)。

#### 错误处理

REST API 提供了详细的错误类型，以帮助您有效地处理问题：

* `ConnectorClientError`：通用客户端错误。
* `RequiredError`：缺少必填参数时抛出。
* `UnauthorizedError`：表示缺少或无效的身份验证凭据。
* `ForbiddenError`：禁止访问所请求的资源。
* `TooManyRequestsError`：超出速率限制。
* `RateLimitBanError`：IP 地址因超出速率限制而被封禁。
* `ServerError`：内部服务器错误。
* `NetworkError`：网络连接问题。
* `NotFoundError`：未找到资源。
* `BadRequestError`：无效请求。

有关详细用法，请参阅 [错误处理示例](https://github.com/binance/binance-connector-js/tree/master/clients/margin-trading/docs/rest-api/error-handling.md)。

如果未提供 `basePath`，则默认为 `https://api.binance.com`。

### WebSocket 流

`margin-trading` 中的 WebSocket 流用于订阅风险和交易数据流。使用 [websocket-streams](https://github.com/binance/binance-connector-js/tree/master/clients/margin-trading/src/websocket-streams/websocket-streams.ts) 模块与之交互。

#### 配置选项

WebSocket 流 API 支持以下高级配置选项：

* `reconnectDelay`：指定重新连接尝试之间的延迟（默认值：5000 毫秒）。
* `compression`：启用或禁用 WebSocket 消息的压缩（默认值：true）。
* `agent`：用于高级配置自定义 WebSocket 代理。
* `mode`：选择 `single` 或 `pool` 连接模式。
  * `single`：单个 WebSocket 连接。
  * `pool`：一组 WebSocket 连接。
* `poolSize`：在池模式下定义 WebSocket 连接数量。

#### 订阅风险和交易数据流

您可以消费风险和交易数据流，该流发送账户级别的事件，如账户和订单更新。首先通过 REST API 创建一个 listen-key；然后：
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
                  console.log('出站账户持仓流', data);
                  break;
              // …处理其他情况…
              default:
                  console.log('未知流', data);
                  break;
          }
      });
  })
  .catch((err) => console.error(err));
```
# 基本示例

以下是一个简单的 FastAPI 应用，演示了如何使用 `pydantic` 模型进行请求和响应数据的验证。

```python
from fastapi import FastAPI
from pydantic import BaseModel
import uvicorn

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float
    is_offer: bool = None

@app.get("/")
def read_root():
    return {"message": "欢迎使用 FastAPI！"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}

@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
    return {
        "item_id": item_id,
        "item_name": item.name,
        "item_price": item.price
    }

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8000)
```

## 演示说明

- `Item` 是一个 [pydantic](https://pydantic-docs.help) 模型，用于验证请求体。
- `@app.get()`、`@app.put()` 等是 FastAPI 提供的装饰器，用于定义 API 路由。
- `uvicorn.run()` 用于启动 ASGI 应用。

## 运行应用

1. 安装依赖：

   ```bash
   pip install fastapi uvicorn
   ```

2. 将上述代码保存为 `main.py`。
3. 运行服务器：

   ```bash
   uvicorn main:app --reload
   ```

4. 打开浏览器访问 [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs) 以查看交互式 API 文档。
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
                  console.log('未知数据流', data);
                  break;
          }
      });
  })
  .catch((err) => console.error(err));
```
#### 取消订阅流

你可以使用 `unsubscribe` 方法取消对风险和交易数据流的订阅。这在无需关闭连接的情况下，有助于管理当前的活跃订阅。
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
                  console.log('出站账户持仓流', data);
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
如果未提供 `wsURL`，则默认使用 `wss://stream.binance.com:9443`。

### 自动连接续期

在 API 密钥 24 小时过期之前，系统会自动为 WebSocket API 和 WebSocket 流连接续期，以确保持续连接。

## 测试

要运行测试：
```bash
npm 安装

npm 运行测试
```
测试涵盖：

* REST API 端点
* 错误处理和边界情况

## 迁移指南

如果您正在升级到新的模块化结构，请参考[迁移指南](https://github.com/binance/binance-connector-js/tree/master/clients/margin-trading/docs/migration_guide_margin_trading_connector.md)，以获取详细步骤。

## 贡献

我们欢迎贡献！

由于此仓库包含自动生成的代码，我们建议您首先创建一个 GitHub Issue 来讨论您的想法或提出改进建议。这有助于确保所做的更改符合项目的开发目标和自动化生成流程。

如需贡献，请遵循以下步骤：

1. 创建一个 GitHub Issue，描述您的建议或发现的 Bug。
2. 如果确认需要更改，维护人员将把更改合并到主分支中。

如果您直接进行贡献，请确保所有测试都能通过。请在讨论并确认更改后再提交 Pull Request。

感谢您的贡献！

## 许可证

本项目采用 MIT 许可证。详情请参阅 [LICENCE](https://github.com/binance/binance-connector-js/tree/master/clients/margin-trading/LICENCE) 文件。