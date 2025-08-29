# @langchain/redis

此包包含通过 Redis SDK 实现的 LangChain.js 集成。  

## 安装
```bash npm2yarn
npm install @langchain/redis @langchain/core
```
## 开发

要开发 Redis 包，您需要遵循以下说明：

### 安装依赖项
```bash
yarn install
```
### 构建包
```bash
yarn build
```
或者从仓库根目录执行：
```bash
yarn build --filter=@langchain/redis
```
### 运行测试

测试文件应位于 `src/` 文件夹内的 `tests/` 文件中。单元测试文件名应以 `.test.ts` 结尾，集成测试文件名应以 `.int.test.ts` 结尾：
```bash
$ yarn test
$ yarn test:int
```
### 代码检查与格式化

运行代码检查器和格式化工具，以确保你的代码符合规范：
```bash
yarn lint && yarn format
```
### 添加新的入口点

如果你新增了一个需要导出的文件，可以选择将其导入并在 `src/index.ts` 中重新导出，或者将其添加到位于 `langchain.config.js` 中的 `config` 变量的 `entrypoints` 字段中，然后运行 `yarn build` 以生成新的入口点。