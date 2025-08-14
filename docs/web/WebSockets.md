# ws：一个 Node.js WebSocket 库

[![版本 npm](https://img.shields.io/npm/v/ws.svg?logo=npm)](https://www.npmjs.com/package/ws)
[![CI](https://img.shields.io/github/actions/workflow/status/websockets/ws/ci.yml?branch=master\&label=CI\&logo=github)](https://github.com/websockets/ws/actions?query=workflow%3ACI+branch%3Amaster)
[![覆盖率状态](https://img.shields.io/coveralls/websockets/ws/master.svg?logo=coveralls)](https://coveralls.io/github/websockets/ws)

ws 是一个简单易用、极速且经过全面测试的 WebSocket 客户端和服务器实现。

通过了相当广泛的 Autobahn 测试套件：[服务器][server-report]、[客户端][client-report]。

**注意**：此模块无法在浏览器中使用。文档中的客户端指的是在 WebSocket 通信中充当客户端角色的后端。浏览器客户端必须使用原生的 [`WebSocket`](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket) 对象。为了使同一份代码能够在 Node.js 和浏览器中无缝运行，你可以使用 npm 上提供的许多封装模块之一，例如 [isomorphic-ws](https://github.com/heineiuo/isomorphic-ws)。

## 目录

* [协议支持](#协议支持)
* [安装](#安装)
  * [性能优化选项](#性能优化选项)
    * [旧版性能优化选项](#旧版性能优化选项)
* [API 文档](#api-文档)
* [WebSocket 压缩](#websocket-压缩)
* [使用示例](#使用示例)
  * [发送和接收文本数据](#发送和接收文本数据)
  * [发送二进制数据](#发送二进制数据)
  * [简单服务器](#简单服务器)
  * [外部 HTTP/S 服务器](#外部-https-服务器)
  * [多个服务器共享一个 HTTP/S 服务器](#多个服务器共享一个-https-服务器)
  * [客户端认证](#客户端认证)
  * [服务器广播](#服务器广播)
  * [往返时间](#往返时间)
  * [使用 Node.js 流 API](#使用-nodejs-流-api)
  * [其他示例](#其他示例)
* [常见问题](#常见问题)
  * [如何获取客户端的 IP 地址？](#如何获取客户端的-ip-地址)
  * [如何检测和关闭断开的连接？](#如何检测和关闭断开的连接)
  * [如何通过代理连接？](#如何通过代理连接)
* [变更日志](#变更日志)
* [许可证](#许可证)

## 协议支持

* **HyBi drafts 07-12** (使用选项 `protocolVersion: 8`)
* **HyBi drafts 13-17** (当前默认值，也可以使用选项 `protocolVersion: 13`)

## 安装

```
npm install ws
```

### 性能优化选项

[bufferutil][] 是一个可选模块，可以与 ws 模块一起安装：

```
npm install --save-optional bufferutil
```

这是一个二进制插件，可以提升某些操作的性能，比如 WebSocket 帧的数据载荷的掩码和解掩码。对于大多数流行的平台，都提供了预编译的二进制文件，因此你不一定需要在机器上安装 C++ 编译器。

要强制 ws 不使用 bufferutil，请使用 [`WS_NO_BUFFER_UTIL`](https://github.com/websockets/ws/blob/master/doc/ws.md#ws_no_buffer_util) 环境变量。这在某些系统中可以增强安全性，因为在这些系统中，用户可以将包放置在其他用户的应用程序的包搜索路径中，这是由于 Node.js 解析器算法的工作方式所致。

#### 旧版性能优化选项

如果你使用的是较旧版本的 Node.js（早于 v18.14.0），ws 还支持 [utf-8-validate][] 模块：

```
npm install --save-optional utf-8-validate
```

这个模块包含了 [`buffer.isUtf8()`][] 的二进制 polyfill。

要强制 ws 不使用 utf-8-validate，请使用 [`WS_NO_UTF_8_VALIDATE`](https://github.com/websockets/ws/blob/master/doc/ws.md#ws_no_utf_8_validate) 环境变量。

## API 文档

Node.js 风格的 ws 类和实用函数的文档请参见 [`/doc/ws.md`](https://github.com/websockets/ws/blob/master/doc/ws.md)。

## WebSocket 压缩

ws 支持 [permessage-deflate 扩展][permessage-deflate]，该扩展允许客户端和服务器协商压缩算法及其参数，然后有选择地将其应用于每个 WebSocket 消息的数据载荷。

默认情况下，该扩展在服务器端是禁用的，在客户端是启用的。它在性能和内存消耗方面增加了显著的开销，因此我们建议仅在确实需要时才启用它。

请注意，Node.js 在高性能压缩方面存在各种问题，尤其是在 Linux 上，增加并发量可能导致 [灾难性的内存碎片][node-zlib-bug] 和缓慢的性能。如果你打算在生产环境中使用 permessage-deflate，值得设置一个代表你的工作负载的测试，并确保 Node.js/zlib 能够以可接受的性能和内存使用来处理它。

可以通过以下选项定义对 permessage-deflate 进行调优。你还可以使用 `zlibDeflateOptions` 和 `zlibInflateOptions`，它们将直接传递到 [原始 deflate/inflate 流][node-zlib-deflaterawdocs] 的创建中。

有关更多选项，请参见 [文档][ws-server-options]。

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
    clientNoContextTakeover: true, // 默认为协商的值。
    serverNoContextTakeover: true, // 默认为协商的值。
    serverMaxWindowBits: 10, // 默认为协商的值。
    // 下列选项指定为默认值。
    concurrencyLimit: 10, // 限制 zlib 并发以提高性能。
    threshold: 1024 // 在上下文接管被禁用的情况下，小于该大小（字节）的消息不应被压缩。
  }
});
```

只有在服务器端支持并启用了该扩展时，客户端才会使用它。要始终在客户端禁用该扩展，请将 `perMessageDeflate` 选项设置为 `false`。

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
    console.log('收到: %s', data);
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
    console.log('收到: %s', data);
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
    console.log(`收到消息 ${data} 来自用户 ${client}`);
  });
});

server.on('upgrade', function upgrade(request, socket, head) {
  socket.on('error', onSocketError);

  // 此函数故意未定义。请使用你自己的逻辑实现它。
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

另请参见提供的 [示例][session-parse-example] 使用 `express-session`。

### 服务器广播

客户端 WebSocket 向所有已连接的 WebSocket 客户端广播，包括它自己。

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

客户端 WebSocket 向所有其他已连接的 WebSocket 客户端广播，排除它自己。

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
  console.log(`往返时间: ${Date.now() - data} ms`);

  setTimeout(function timeout() {
    ws.send(Date.now());
  }, 500);
});
```

### 使用 Node.js 流 API

```js
import WebSocket, { createWebSocketStream } from 'ws';

const ws = new WebSocket('wss://websocket-echo.com/');

const duplex = createWebSocketStream(ws, { encoding: 'utf8' });

duplex.on('error', console.error);

duplex.pipe(process.stdout);
process.stdin.pipe(duplex);
```

### 其他示例

关于浏览器客户端与 ws 服务器通信的完整示例，请参见示例文件夹。

否则，请参见测试用例。

## 常见问题

### 如何获取客户端的 IP 地址？

远程 IP 地址可以从原始套接字中获取。

```js
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws, req) {
  const ip = req.socket.remoteAddress;

  ws.on('error', console.error);
});
```

当服务器运行在像 NGINX 这样的代理后面时，事实上的标准是使用 `X-Forwarded-For` 头。

```js
wss.on('connection', function connection(ws, req) {
  const ip = req.headers['x-forwarded-for'].split(',')[0].trim();

  ws.on('error', console.error);
});
```

### 如何检测和关闭断开的连接？

有时，服务器和客户端之间的连接可能会以保持服务器和客户端都未察觉连接断开状态的方式中断（例如，拔掉网线）。

在这种情况下，ping 消息可以用来验证远程端点是否仍然有响应。

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

根据规范，Pong 消息会自动响应 Ping 消息发送。

就像上面的服务器示例一样，你的客户端可能也会在不知情的情况下失去连接。你可能希望在客户端添加一个 Ping 监听器以防止这种情况。一个简单的实现如下：

```js
import WebSocket from 'ws';

function heartbeat() {
  clearTimeout(this.pingTimeout);

  // 使用 `WebSocket#terminate()`，它会立即销毁连接，
  // 而不是 `WebSocket#close()`，它会等待关闭计时器。
  // 延迟应等于你的服务器发送 Ping 的间隔时间加上对延迟的保守估计。
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

### 如何通过代理连接？

使用自定义的 `http.Agent` 实现，例如 [https-proxy-agent][] 或 [socks-proxy-agent][]。

## 变更日志

我们使用 GitHub [发布][changelog] 来记录变更日志条目。

## 许可证

[MIT](https://github.com/websockets/ws/blob/master/LICENSE)

[`buffer.isutf8()`]: https://nodejs.org/api/buffer.html#bufferisutf8input

[bufferutil]: https://github.com/websockets/bufferutil

[changelog]: https://github.com/websockets/ws/releases

[client-report]: http://websockets.github.io/ws/autobahn/clients/

[https-proxy-agent]: https://github.com/TooTallNate/node-https-proxy-agent

[node-zlib-bug]: https://github.com/nodejs/node/issues/8871

[node-zlib-deflaterawdocs]: https://nodejs.org/api/zlib.html#zlib_zlib_createdeflateraw_options

[permessage-deflate]: https://tools.ietf.org/html/rfc7692

[server-report]: http://websockets.github.io/ws/autobahn/servers/

[session-parse-example]: https://github.com/websockets/ws/blob/master/examples/express-session-parse

[socks-proxy-agent]: https://github.com/TooTallNate/node-socks-proxy-agent

[utf-8-validate]: https://github.com/websockets/utf-8-validate

[ws-server-options]: https://github.com/websockets/ws/blob/master/doc/ws.md#new-websocketserveroptions-callback