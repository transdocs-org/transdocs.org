# ws：一个 Node.js WebSocket 库

[![版本 npm](https://img.shields.io/npm/v/ws.svg?logo=npm)](https://www.npmjs.com/package/ws)
[![CI](https://img.shields.io/github/actions/workflow/status/websockets/ws/ci.yml?branch=master\&label=CI\&logo=github)](https://github.com/websockets/ws/actions?query=workflow%3ACI+branch%3Amaster)
[![覆盖率状态](https://img.shields.io/coveralls/websockets/ws/master.svg?logo=coveralls)](https://coveralls.io/github/websockets/ws)

ws 是一个易于使用、极速且经过全面测试的 WebSocket 客户端和服务器实现。

通过了非常全面的 Autobahn 测试套件：[服务器][server-report]，
[客户端][client-report]。

**注意**：此模块无法在浏览器中使用。文档中的客户端是指在 WebSocket 通信中扮演客户端角色的后端。浏览器客户端必须使用原生的
[`WebSocket`](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket)
对象。要让相同的代码在 Node.js 和浏览器中都能无缝运行，你可以使用 npm 上提供的众多封装库之一，例如
[isomorphic-ws](https://github.com/heineiuo/isomorphic-ws)。

## 目录

* [协议支持](#protocol-support)
* [安装](#installing)
  * [性能优化的可选项](#opt-in-for-performance)
    * [旧版性能优化选项](#legacy-opt-in-for-performance)
* [API 文档](#api-docs)
* [WebSocket 压缩](#websocket-compression)
* [使用示例](#usage-examples)
  * [发送和接收文本数据](#sending-and-receiving-text-data)
  * [发送二进制数据](#sending-binary-data)
  * [简单服务器](#simple-server)
  * [外部 HTTP/S 服务器](#external-https-server)
  * [多个服务器共享一个 HTTP/S 服务器](#multiple-servers-sharing-a-single-https-server)
  * [客户端认证](#client-authentication)
  * [服务器广播](#server-broadcast)
  * [往返时延](#round-trip-time)
  * [使用 Node.js 流 API](#use-the-nodejs-streams-api)
  * [其他示例](#other-examples)
* [常见问题](#faq)
  * [如何获取客户端的 IP 地址？](#how-to-get-the-ip-address-of-the-client)
  * [如何检测和关闭断开的连接？](#how-to-detect-and-close-broken-connections)
  * [如何通过代理进行连接？](#how-to-connect-via-a-proxy)
* [变更日志](#changelog)
* [许可证](#license)

## 协议支持

* **HyBi drafts 07-12** (使用选项 `protocolVersion: 8`)
* **HyBi drafts 13-17** (当前默认值，也可使用选项 `protocolVersion: 13`)

## 安装
```
npm install ws
```
### 启用性能优化

[bufferutil][] 是一个可选模块，可以与 ws 模块一起安装：
```
npm install --save-optional bufferutil
```
这是一个二进制插件，可以提高某些操作的性能，例如对 WebSocket 帧的数据负载进行掩码和去掩码操作。对于主流平台，我们提供了预编译的二进制文件，因此你的机器上不一定需要安装 C++ 编译器。

要强制 `ws` 不使用 `bufferutil`，可以使用 [`WS_NO_BUFFER_UTIL`](https://github.com/websockets/ws/tree/master/doc/ws.md#ws_no_buffer_util) 环境变量。这在某些系统中可以增强安全性，特别是在用户可以将软件包放置在另一个用户应用程序的包搜索路径中的情况下，这是由于 Node.js 解析算法的工作方式所导致的。

#### 性能的旧版手动启用

如果你使用的是旧版本的 Node.js（早于 v18.14.0），`ws` 同样支持 [utf-8-validate][] 模块：
```
npm install --save-optional utf-8-validate
```
这包含了一个 [`buffer.isUtf8()`][] 的二进制 polyfill。

要强制 ws 不使用 utf-8-validate，请使用 [`WS_NO_UTF_8_VALIDATE`](https://github.com/websockets/ws/tree/master/doc/ws.md#ws_no_utf_8_validate) 环境变量。

## API 文档

关于 ws 类和实用函数的类 Node.js 文档，请参阅 [`/doc/ws.md`](https://github.com/websockets/ws/tree/master/doc/ws.md)。

## WebSocket 压缩

ws 支持 [permessage-deflate 扩展][permessage-deflate]，该扩展允许客户端和服务端协商压缩算法及其参数，然后有选择地将压缩应用于每条 WebSocket 消息的数据载荷。

该扩展在服务端默认禁用，在客户端默认启用。它会在性能和内存消耗方面带来显著的开销，因此我们建议仅在确实需要时才启用它。

请注意，Node.js 在高性能压缩方面存在多种问题，特别是在 Linux 上，并发量增加可能导致 [灾难性的内存碎片][node-zlib-bug] 和性能下降。如果您打算在生产环境中使用 permessage-deflate，建议设置一个能够代表您的工作负载的测试环境，以确保 Node.js/zlib 能够以可接受的性能和内存使用来处理。

可以通过下面定义的选项对 permessage-deflate 进行调优。您还可以使用 `zlibDeflateOptions` 和 `zlibInflateOptions`，它们会直接传递到 [原始 deflate/inflate 流][node-zlib-deflaterawdocs] 的创建过程中。

更多选项请参阅 [文档][ws-server-options]。
```js
import WebSocket, { WebSocketServer } from 'ws';

const wss = new WebSocketServer({
  port: 8080,
  perMessageDeflate: {
    zlibDeflateOptions: {
      // 参见 zlib 默认值。
      chunkSize: 1024,
      memLevel: 7,
      level: 3
    },
    zlibInflateOptions: {
      chunkSize: 10 * 1024
    },
    // 其他可设置的选项：
    clientNoContextTakeover: true, // 默认为协商值。
    serverNoContextTakeover: true, // 默认为协商值。
    serverMaxWindowBits: 10, // 默认为协商值。
    // 以下选项指定为默认值。
    concurrencyLimit: 10, // 限制 zlib 并发级别以提高性能。
    threshold: 1024 // 若禁用上下文接管，消息大小（以字节为单位）低于此值时
    // 不应进行压缩。
  }
});
```
客户端仅在服务器端支持并启用了该扩展的情况下才会使用它。
要始终在客户端禁用该扩展，请将 `perMessageDeflate` 选项设置为 `false`。
```js
import WebSocket from 'ws';

const ws = new WebSocket('ws://www.host.com/path', {
  perMessageDeflate: false
});
```
## 使用示例

### 发送和接收文本数据
```js
import WebSocket from 'ws';

const ws = new WebSocket('ws://www.host.com/path');

ws.on('error', console.error);

ws.on('open', function open() {
  ws.send('something');
});

ws.on('message', function message(data) {
  console.log('收到: %s', data);
});
```
### 发送二进制数据
```js
import WebSocket from 'ws';

const ws = new WebSocket('ws://www.host.com/path');

ws.on('error', console.error);

ws.on('open', function open() {
  const array = new Float32Array(5);

  for (var i = 0; i < array.length; ++i) {
    array[i] = i / 2;
  }

  ws.send(array);
});
```
### 简单服务器
```js
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('收到消息: %s', data);
  });

  ws.send('something');
});
```
### 外部 HTTP/S 服务器
```js
import { createServer } from 'https';
import { readFileSync } from 'fs';
import { WebSocketServer } from 'ws';

const server = createServer({
  cert: readFileSync('/path/to/cert.pem'),
  key: readFileSync('/path/to/key.pem')
});
const wss = new WebSocketServer({ server });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log('收到：%s', data);
  });

  ws.send('something');
});

server.listen(8080);
```
### 多个服务器共享一个 HTTP/S 服务器
```js
import { createServer } from 'http';
import { WebSocketServer } from 'ws';

const server = createServer();
const wss1 = new WebSocketServer({ noServer: true });
const wss2 = new WebSocketServer({ noServer: true });

wss1.on('connection', function connection(ws) {
  ws.on('error', console.error);

  // ...
});

wss2.on('connection', function connection(ws) {
  ws.on('error', console.error);

  // ...
});

server.on('upgrade', function upgrade(request, socket, head) {
  const { pathname } = new URL(request.url, 'wss://base.url');

  if (pathname === '/foo') {
    wss1.handleUpgrade(request, socket, head, function done(ws) {
      wss1.emit('connection', ws, request);
    });
  } else if (pathname === '/bar') {
    wss2.handleUpgrade(request, socket, head, function done(ws) {
      wss2.emit('connection', ws, request);
    });
  } else {
    socket.destroy();
  }
});

server.listen(8080);
```
### 客户端认证
```js
import { createServer } from 'http';
import { WebSocketServer } from 'ws';

function onSocketError(err) {
  console.error(err);
}

const server = createServer();
const wss = new WebSocketServer({ noServer: true });

wss.on('connection', function connection(ws, request, client) {
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    console.log(`从用户 ${client} 收到消息：${data}`);
  });
});

server.on('upgrade', function upgrade(request, socket, head) {
  socket.on('error', onSocketError);

  // 此函数故意未定义。请使用您自己的逻辑实现它。
  authenticate(request, function next(err, client) {
    if (err || !client) {
      socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
      socket.destroy();
      return;
    }

    socket.removeListener('error', onSocketError);

    wss.handleUpgrade(request, socket, head, function done(ws) {
      wss.emit('connection', ws, request, client);
    });
  });
});

server.listen(8080);
```
另请参阅使用 `express-session` 的[示例][session-parse-example]。

### 服务器广播

某个客户端的 WebSocket 向所有已连接的 WebSocket 客户端（包括其自身）进行广播。
```js
import WebSocket, { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data, isBinary) {
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });
});
```
一个客户端WebSocket向除自身外的其他所有已连接的WebSocket客户端广播消息。
```js
import WebSocket, { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('error', console.error);

  ws.on('message', function message(data, isBinary) {
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data, { binary: isBinary });
      }
    });
  });
});
```
### 往返时间
```js
import WebSocket from 'ws';

const ws = new WebSocket('wss://websocket-echo.com/');

ws.on('error', console.error);

ws.on('open', function open() {
  console.log('已连接');
  ws.send(Date.now());
});

ws.on('close', function close() {
  console.log('已断开连接');
});

ws.on('message', function message(data) {
  console.log(`往返时间: ${Date.now() - data} 毫秒`);

  setTimeout(function timeout() {
    ws.send(Date.now());
  }, 500);
});
```
### 使用 Node.js 流（Streams）API
```js
import WebSocket, { createWebSocketStream } from 'ws';

const ws = new WebSocket('wss://websocket-echo.com/');

const duplex = createWebSocketStream(ws, { encoding: 'utf8' });

duplex.on('error', console.error);

duplex.pipe(process.stdout);
process.stdin.pipe(duplex);
```
### 其他示例

有关浏览器客户端与 WebSocket 服务器通信的完整示例，请参阅
示例文件夹中的内容。

否则，也可以参考测试用例。

## 常见问题

### 如何获取客户端的 IP 地址？

远程 IP 地址可以从原始套接字（raw socket）中获取。
```js
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws, req) {
  const ip = req.socket.remoteAddress;

  ws.on('error', console.error);
});
```
当服务器运行在 NGINX 等代理之后时，通常的标准是使用 `X-Forwarded-For` 请求头。
```js
wss.on('connection', function connection(ws, req) {
  const ip = req.headers['x-forwarded-for'].split(',')[0].trim();

  ws.on('error', console.error);
});
```
### 如何检测并关闭断开的连接？

有时，服务器与客户端之间的连接可能会以一种让服务器和客户端都无法察觉连接已中断的方式断开（例如拔掉网线时）。

在这种情况下，可以使用 ping 消息来确认远程端点是否仍然有响应。
```js
import { WebSocketServer } from 'ws';

function heartbeat() {
  this.isAlive = true;
}

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.isAlive = true;
  ws.on('error', console.error);
  ws.on('pong', heartbeat);
});

const interval = setInterval(function ping() {
  wss.clients.forEach(function each(ws) {
    if (ws.isAlive === false) return ws.terminate();

    ws.isAlive = false;
    ws.ping();
  });
}, 30000);

wss.on('close', function close() {
  clearInterval(interval);
});
```
根据规范要求，Pong 消息会在接收到 ping 消息时自动发送。

与上面的服务器示例一样，你的客户端可能也会在未察觉的情况下失去连接。你可能需要在客户端添加一个 ping 监听器以避免这种情况。一个简单的实现方式如下：
```js
import WebSocket from 'ws';

function heartbeat() {
  clearTimeout(this.pingTimeout);

  // 使用 `WebSocket#terminate()` 立即销毁连接，
  // 而不是 `WebSocket#close()`（它会等待关闭定时器）。
  // 延迟时间应该等于服务器发送 ping 的间隔时间，
  // 再加上对网络延迟的保守估计值。
  this.pingTimeout = setTimeout(() => {
    this.terminate();
  }, 30000 + 1000);
}

const client = new WebSocket('wss://websocket-echo.com/');

client.on('error', console.error);
client.on('open', heartbeat);
client.on('ping', heartbeat);
client.on('close', function clear() {
  clearTimeout(this.pingTimeout);
});
```
### 如何通过代理进行连接？

使用自定义的 `http.Agent` 实现，例如 [https-proxy-agent][] 或 [socks-proxy-agent][]。

## 更新日志

我们使用 GitHub 的 [发布版本][changelog] 来记录更新日志。

## 许可证

[MIT](https://github.com/websockets/ws/tree/master/LICENSE)

[`buffer.isutf8()`]: https://nodejs.org/api/buffer.html#bufferisutf8input

[bufferutil]: https://github.com/websockets/bufferutil

[changelog]: https://github.com/websockets/ws/releases

[client-report]: http://websockets.github.io/ws/autobahn/clients/

[https-proxy-agent]: https://github.com/TooTallNate/node-https-proxy-agent

[node-zlib-bug]: https://github.com/nodejs/node/issues/8871

[node-zlib-deflaterawdocs]: https://nodejs.org/api/zlib.html#zlib_zlib_createdeflateraw_options

[permessage-deflate]: https://tools.ietf.org/html/rfc7692

[server-report]: http://websockets.github.io/ws/autobahn/servers/

[session-parse-example]: https://github.com/websockets/ws/tree/master/examples/express-session-parse

[socks-proxy-agent]: https://github.com/TooTallNate/node-socks-proxy-agent

[utf-8-validate]: https://github.com/websockets/utf-8-validate

[ws-server-options]: https://github.com/websockets/ws/tree/master/doc/ws.md#new-websocketserveroptions-callback