# @langchain/mongodb

此包包含通过 MongoDB SDK 实现的 LangChain.js 集成。

## 安装
```bash npm2yarn
npm install @langchain/mongodb @langchain/core
```
此包与主 LangChain 包一样，依赖于 [`@langchain/core`](https://npmjs.com/package/@langchain/core/)。
如果你将此包与其他 LangChain 包一起使用，则应确保所有包都依赖于同一个 @langchain/core 实例。
你可以通过在项目的 `package.json` 文件中添加适当的字段来实现这一点，如下所示：
```json
{
  "name": "your-project",
  "version": "0.0.0",
  "dependencies": {
    "@langchain/core": "^0.3.0",
    "@langchain/mongodb": "^0.0.0"
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
你所需的字段取决于你正在使用的包管理器，但我们建议为常见的 `yarn`、`npm` 和 `pnpm` 都添加字段，以最大化兼容性。

## 开发

要开发 MongoDB 包，你需要按照以下说明操作：

### 安装依赖项
```bash
yarn install
```
### 构建包
```bash
yarn build
```
或者从仓库根目录运行：
```bash
yarn build --filter=@langchain/mongodb
```
### 运行测试

测试文件应位于 `src/` 文件夹中的 `tests/` 文件内。单元测试文件名应以 `.test.ts` 结尾，集成测试文件名应以 `.int.test.ts` 结尾：
```bash
$ yarn test
$ yarn test:int
```
本包中的测试需要运行一个 MongoDB Atlas 实例，可以是本地运行的实例，也可以是远程的 Atlas 集群。可以通过设置 `MONGODB_ATLAS_URI` 环境变量，为测试提供一个指向现有 Atlas 集群的 URI：
```bash
MONGODB_ATLAS_URI='<atlas URI>' yarn test:int
```
如果连接到远程 Atlas 集群运行测试，用户必须对 `langchain` 数据库具有读写权限。

如果没有提供 `MONGODB_ATLAS_URI`，测试套件将会尝试使用 [testcontainers](https://testcontainers.com/) 在容器中启动一个本地 Atlas 实例。这需要安装容器引擎，请参阅 [testcontainer 支持的容器运行时文档](https://node.testcontainers.org/supported-container-runtimes/) 了解详细信息。

### 代码检查与格式化

运行代码检查器和格式化工具，以确保你的代码符合标准：
```bash
yarn lint && yarn format
```
### 添加新的入口点

如果你新增了一个需要导出的文件，可以选择将其从 `src/index.ts` 中导入并重新导出，或者将其添加到 `langchain.config.js` 中 `config` 变量的 `entrypoints` 字段中，然后运行 `yarn build` 以生成新的入口点。