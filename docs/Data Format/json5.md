# JSON5 – 为人类设计的 JSON

[![构建状态](https://app.travis-ci.com/json5/json5.svg?branch=main)][构建状态] [![覆盖率状态](https://coveralls.io/repos/github/json5/json5/badge.svg)][覆盖率状态]

JSON5 是对流行的 [JSON] 文件格式的扩展，旨在更易于**手动编写和维护**（例如用于配置文件）。它**不适用于**机器之间的通信（对于这种情况，请继续使用 JSON 或其他文件格式。🙂）

JSON5 项目始于 2012 年，截至 2022 年，每周下载量已超过 **[6500 万次](https://www.npmjs.com/package/json5)**，在 npm 上所有依赖包中排名前 **[0.1%](https://gist.github.com/anvaka/8e8fa57c7ee1350e3491)**，并已被 **[Chromium](https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/renderer/platform/runtime_enabled_features.json5;drc=5de823b36e68fd99009a29281b17bc3a1d6b329c)、[Next.js](https://github.com/vercel/next.js/blob/b88f20c90bf4659b8ad5cb2a27956005eac2c7e8/packages/next/lib/find-config.ts#L43-L46)、[Babel](https://babeljs.io/docs/en/config-files#supported-file-extensions)、[Retool](https://community.retool.com/t/i-am-attempting-to-append-several-text-fields-to-a-google-sheet-but-receiving-a-json5-invalid-character-error/7626)、[WebStorm](https://www.jetbrains.com/help/webstorm/json.html) 等主流项目采用**，完整列表见 [In the Wild](https://github.com/json5/json5/wiki/In-the-Wild)。Apple 的平台（如 **macOS** 和 **iOS**）也原生支持 JSON5，详见 **[Apple 文档](https://developer.apple.com/documentation/foundation/jsondecoder/3766916-allowsjson5)**。

形式上，**[JSON5 数据交换格式](https://spec.json5.org/)** 是 JSON 的超集（因此所有合法的 JSON 文件始终是合法的 JSON5 文件），其语法扩展了部分 [ECMAScript 5.1] (ES5) 的特性。它也是 ES5 的*子集*，因此所有合法的 JSON5 文件也始终是合法的 ES5 文件。[\*](#ecmascript-兼容性)

本 JavaScript 库是 JSON5 解析与序列化的参考实现，被上述许多流行项目直接使用（例如在对性能要求不极端的场景中），但也有人在多个其他平台上创建了 [许多其他库](https://github.com/json5/json5/wiki/In-the-Wild)。

[构建状态]: https://app.travis-ci.com/json5/json5

[覆盖率状态]: https://coveralls.io/github/json5/json5

[JSON]: https://tools.ietf.org/html/rfc7159

[ECMAScript 5.1]: https://www.ecma-international.org/ecma-262/5.1/

## 功能概览

JSON5 扩展了 JSON，加入了以下 ECMAScript 5.1 的特性（这些特性在 JSON 中不支持）：

### 对象

* 对象键可以是 ECMAScript 5.1 中的 *[IdentifierName]*。
* 对象可以有一个尾随逗号。

### 数组

* 数组可以有一个尾随逗号。

### 字符串

* 字符串可以用单引号。
* 字符串可以通过转义换行符来跨多行。
* 字符串可以包含转义字符。

### 数字

* 数字可以是十六进制。
* 数字可以有前导或后缀小数点。
* 数字可以是 [IEEE 754] 的正无穷大、负无穷大和 NaN。
* 数字可以以显式的加号开头。

### 注释

* 支持单行和多行注释。

### 空白字符

* 允许更多的空白字符。

[IdentifierName]: https://www.ecma-international.org/ecma-262/5.1/#sec-7.6

[IEEE 754]: http://ieeexplore.ieee.org/servlet/opac?punumber=4610933

## 示例

一个包含所有特性的示例：

```js
{
  // 注释
  unquoted: 'and you can quote me on that',
  singleQuotes: 'I can use "double quotes" here',
  lineBreaks: "Look, Mom! \
No \\n's!",
  hexadecimal: 0xdecaf,
  leadingDecimalPoint: .8675309, andTrailing: 8675309.,
  positiveSign: +1,
  trailingComma: 'in objects', andIn: ['arrays',],
  "backwardsCompatible": "with JSON",
}
```

另一个更贴近实际的示例来自 Chromium/Blink 项目的 [配置文件](https://github.com/chromium/chromium/blob/feb3c9f670515edf9a88f185301cbd7794ee3e52/third_party/blink/renderer/platform/runtime_enabled_features.json5)。

## 规范

关于 JSON5 格式的详细说明，请阅读 [官方规范](https://json5.github.io/json5-spec/)。

## 安装与使用

### Node.js

```sh
npm install json5
```

#### CommonJS

```js
const JSON5 = require('json5')
```

#### 模块

```js
import JSON5 from 'json5'
```

### 浏览器

#### UMD

```html
<!-- 这会创建一个全局变量 `JSON5` -->
<script src="https://unpkg.com/json5@2/dist/index.min.js"></script>
```

#### 模块

```html
<script type="module">
  import JSON5 from 'https://unpkg.com/json5@2/dist/index.min.mjs'
</script>
```

## API

JSON5 的 API 与 [JSON API] 兼容。

[JSON API]: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON

### JSON5.parse()

解析 JSON5 字符串，构造字符串描述的 JavaScript 值或对象。可选的 reviver 函数可用于在返回结果前对对象进行转换。

#### 语法

```
JSON5.parse(text[, reviver])
```

#### 参数

* `text`: 要解析为 JSON5 的字符串。
* `reviver`: 如果是函数，该函数用于在返回值之前对解析后的值进行转换。

#### 返回值

与给定 JSON5 字符串对应的对象。

### JSON5.stringify()

将 JavaScript 值转换为 JSON5 字符串，如果指定了 replacer 函数，则可选择性地替换值；如果指定了 replacer 数组，则只包含指定的属性。

#### 语法

```
JSON5.stringify(value[, replacer[, space]])
JSON5.stringify(value[, options])
```

#### 参数

* `value`: 要转换为 JSON5 字符串的值。
* `replacer`: 用于改变字符串化行为的函数，或用于选择/过滤对象属性的字符串和数字数组。如果该值为 null 或未提供，则对象的所有属性都将包含在输出字符串中。
* `space`: 用于在输出 JSON5 字符串中插入空白以增强可读性。如果该值为数字，表示使用多少个空格作为缩进（最大值为 10）；如果小于 1，则不使用空格。如果该值为字符串，则使用该字符串（或其前 10 个字符）作为缩进。如果未提供（或为 null），则不使用缩进。如果使用缩进，则对象和数组中将包含尾随逗号。
* `options`: 包含以下属性的对象：
  * `replacer`: 同 `replacer` 参数。
  * `space`: 同 `space` 参数。
  * `quote`: 用于序列化字符串的引号字符。

#### 返回值

表示该值的 JSON5 字符串。

### Node.js 中通过 `require()` 加载 JSON5 文件

在 Node.js 中，你可以通过添加以下语句来使用 `require()` 加载 JSON5 文件：

```js
require('json5/lib/register')
```

然后你可以通过 Node.js 的 `require()` 加载 JSON5 文件。例如：

```js
const config = require('./config.json5')
```

## 命令行工具（CLI）

由于 JSON 比 JSON5 更广泛使用，本包包含一个 CLI 工具，用于将 JSON5 转换为 JSON，以及验证 JSON5 文档的语法。

### 安装

```sh
npm install --global json5
```

### 使用

```sh
json5 [选项] <文件>
```

如果没有提供 `<文件>`，则从标准输入（STDIN）读取。

#### 选项：

* `-s`, `--space`: 缩进使用的空格数，或使用 `t` 表示制表符
* `-o`, `--out-file [文件]`: 输出到指定文件，否则输出到标准输出（STDOUT）
* `-v`, `--validate`: 验证 JSON5 但不输出 JSON
* `-V`, `--version`: 输出版本号
* `-h`, `--help`: 输出使用说明

## 贡献

### 开发

```sh
git clone https://github.com/json5/json5
cd json5
npm install
```

贡献代码时，请编写相关测试并在提交 pull request 前运行 `npm test` 和 `npm run lint`。请使用支持 [EditorConfig](http://editorconfig.org/) 的编辑器。

### 问题反馈

如需报告 JSON5 **数据格式**相关的问题或请求新功能，请提交到官方的 **[*规范*仓库](https://github.com/json5/json5-spec)**。

请注意，我们不会添加任何导致 JSON5 与 ES5 不兼容的功能；与 ES5 的兼容性是 JSON5 的基本前提。[\*](#ecmascript-兼容性)

如需报告本 **JavaScript 实现** 的问题或请求新功能，请提交到 **本仓库**。

### 安全漏洞与披露

如需报告安全漏洞，请遵循我们 [安全策略](https://github.com/json5/json5/tree/main/SECURITY.md) 中的指南。

## ECMAScript 兼容性

尽管 JSON5 旨在与 ES5 完全兼容，但有一个例外：JSON 和 JSON5 都允许在字符串中使用未转义的行分隔符和段落分隔符（U+2028 和 U+2029），但 ES5 不允许。一项 [提案](https://github.com/tc39/proposal-json-superset) 已被纳入 ES2019，允许在字符串中使用这些字符，使 JSON 和 JSON5 与 ES2019 完全兼容。

## 许可证

MIT。详见 [LICENSE.md](https://github.com/json5/json5/tree/main/LICENSE.md)。

## 致谢

[Aseem Kishore](https://github.com/aseemk) 创建了本项目。他写了一篇 [博客文章](https://aseemk.substack.com/p/ignore-the-f-ing-haters-json5)，记录了该项目 10 年的发展历程与经验教训。

[Michael Bolin](http://bolinfest.com/) 独立提出了部分相同的想法，并进行了精彩的解释。推荐阅读：[Suggested Improvements to JSON](http://bolinfest.com/essays/json.html)

[Douglas Crockford](http://www.crockford.com/) 当然设计并创建了 JSON，但他在 [JSON 网站](http://json.org/) 上的状态机图，尽管听起来有点老套，却激励并增强了我们构建新解析器以实现这些想法的信心！JSON5 的原始实现也直接参考了 Doug 的开源 [json_parse.js][json_parse.js] 解析器。我们非常感谢他干净且文档完善的代码。

[json_parse.js]: https://github.com/douglascrockford/JSON-js/blob/03157639c7a7cddd2e9f032537f346f1a87c0f6d/json_parse.js

[Max Nanasy](https://github.com/MaxNanasy) 很早就积极参与贡献，提出了多个补丁和建议。

[Andrew Eisenberg](https://github.com/aeisenberg) 贡献了原始的 `stringify` 方法。

Jordan Tucker 对齐了 JSON5 与 ES5 的语法，编写了 JSON5 的官方规范，完全重写了代码库，并持续维护该项目。