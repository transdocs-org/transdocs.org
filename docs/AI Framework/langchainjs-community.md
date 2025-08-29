# 🦜️🧑‍🤝‍🧑 LangChain 社区

[![CI](https://raw.githubusercontent.com/langchain-ai/langchainjs/actions/workflows/ci.yml/badge.svg/refs/heads//)](https://github.com/langchain-ai/langchainjs/actions/workflows/ci.yml) ![npm](https://img.shields.io/npm/dm/@langchain/community) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/langchainai.svg?style=social\&label=关注%20%40LangChainAI)](https://twitter.com/langchainai)

## 快速安装
```bash
$ yarn add @langchain/community
```
该包与主 LangChain 包一样，都依赖于 [`@langchain/core`](https://npmjs.com/package/@langchain/core/)。
如果你将此包与其他 LangChain 包一起使用，则应确保所有包都依赖于同一个 @langchain/core 实例。
你可以通过在项目的 `package.json` 中添加适当的字段来实现这一点，如下所示：
```json
{
  "name": "your-project",
  "version": "0.0.0",
  "dependencies": {
    "@langchain/community": "^0.0.0",
    "@langchain/core": "^0.3.0"
  },
  "resolutions": {
    "@langchain/core": "^0.3.0"
  },
  "overrides": {
    "@langchain/core": "^0.3.0"
  },
  "pnpm": {
    "overrides": {
      "@langchain/core": "^0.3.0"
    }
  }
}
```
你需要的字段取决于你使用的包管理器，但我们建议为常用的 `yarn`、`npm` 和 `pnpm` 都添加字段，以最大化兼容性。

## 🤔 这是什么？

LangChain Community 包含第三方集成，这些集成实现了在 LangChain Core 中定义的基础接口，使它们可以在任何 LangChain 应用程序中即插即用。

![LangChain Stack](https://raw.githubusercontent.com/langchain-ai/langchainjs/refs/heads/main/docs/core_docs/static/svg/langchain_stack_062024.svg)

## 📕 发布与版本控制

`@langchain/community` 当前版本为 `0.0.x`

所有更改都将伴随着补丁版本号的增加。

## 💁 贡献

作为一个处于快速开发阶段的开源项目，我们非常欢迎任何形式的贡献，无论是提供新功能、改进基础设施，还是完善文档。

有关如何贡献的详细信息，请参见[此处](https://github.com/langchain-ai/langchainjs/tree/main/CONTRIBUTING.md)。