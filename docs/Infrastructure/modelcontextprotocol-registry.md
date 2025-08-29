# MCP 注册中心

一个由社区驱动的 Model Context Protocol（MCP）服务器注册服务。

## 开发状态

该项目正在公开开发中，目前处于早期开发阶段。有关项目范围和目标，请参见[概述讨论](https://github.com/modelcontextprotocol/registry/discussions/11)。

### 贡献指南

使用 [Discussions](https://github.com/modelcontextprotocol/registry/discussions) 来提出并讨论产品或技术的**需求**。

使用 [Issues](https://github.com/modelcontextprotocol/registry/issues) 来跟踪社区一致认为将来某个时间点应完成的**范围明确的技术任务**。

当你想要**为某个 Issue 贡献代码**，或你确信自己的贡献足够小且无需在需求和规划层面进行社区讨论时，请提交 [Pull Requests](https://github.com/modelcontextprotocol/registry/pulls)。

## 概览

MCP 注册中心服务为 MCP 服务器条目提供了一个集中式仓库。它支持发现和管理各种 MCP 实现及其相关的元数据、配置和功能。

## 功能特性

* 用于管理 MCP 注册条目的 RESTful API（列表、获取、创建、更新、删除）
* 用于服务监控的健康检查端点
* 支持多种环境配置
* 优雅关闭处理
* 支持 MongoDB 和内存数据库
* 完善的 API 文档
* 列出注册条目时的分页支持
* 支持通过 HTTP 导出/导入种子数据
* 通过 HTTP 端点共享注册实例数据

## 入门指南

### 前提条件

* Go 1.24.x（必需，使用 `go version` 检查版本）
* MongoDB
* Docker（可选，但推荐用于开发）

开发环境所需：

* golangci-lint v2.3.1 - 安装方式：
```bash
curl -sSfL https://raw.githubusercontent.com/golangci/golangci-lint/master/install.sh | sh -s -- -b $(go env GOPATH)/bin v2.3.1
```
## 运行

运行注册表的最简单方法是使用 Docker Compose。这将在本地 Docker 环境中设置 MCP 注册表服务、导入种子数据并运行 MongoDB。
```bash
# 使用 docker compose 运行注册中心和 MongoDB
make dev-compose
```
这将使用 Docker 启动 MCP Registry 服务和 MongoDB，服务运行在 [`localhost:8080`](http://localhost:8080)。

## 构建

如果你更倾向于在本地不使用 Docker 运行该服务，你可以直接进行构建并运行：
```bash
# 构建一个注册中心可执行文件
make build
```
这将在当前目录下创建 `registry` 二进制文件。你需要在本地运行 MongoDB 或使用 Docker 运行。

要在本地运行服务：
```bash
# 在本地运行注册中心（需要 MongoDB）
make dev-local
```
默认情况下，服务将在 [`localhost:8080`](http://localhost:8080) 上运行。

要构建用于将 MCP 服务器发布到注册表的 CLI 工具：
```bash
# 构建发布工具
make publisher
```
## 开发

### 可用的 Make 目标

要查看所有可用的 make 目标：
```bash
make help
```
关键开发命令：
```bash
# 开发
make dev-compose   # 使用 Docker Compose 启动开发环境
make dev-local     # 在本地运行 registry（需要 MongoDB）

# 构建目标
make build          # 构建 registry 应用程序
make publisher      # 构建 publisher 工具

# 测试
make test-unit        # 运行单元测试并生成覆盖率报告
make test-integration # 运行集成测试
make test-endpoints   # 测试 API 端点（需要运行中的服务器）
make test-publish     # 测试发布端点（需要 BEARER_TOKEN）
make test-all         # 运行所有测试

# 代码质量
make lint          # 运行代码检查（与 CI 一致）
make lint-fix      # 运行代码检查并自动修复问题

# 验证
make validate-schemas   # 验证 JSON schema
make validate-examples  # 验证示例是否符合 schema
make validate          # 运行所有验证检查

# 组合工作流
make check         # 运行所有检查（lint、validate、unit tests）

# 工具
make clean         # 清理构建产物和覆盖率文件
```
### 代码检查（Linting）

本项目使用 golangci-lint 进行全面的代码检查。推送代码前请务必运行代码检查：
```bash
# 运行所有代码检查工具（与CI相同）
make lint

# 运行代码检查工具并自动修复问题
make lint-fix
```
### Git Hooks（可选）

要在提交前自动运行代码检查：
```bash
git config core.hooksPath .githooks
```
这将阻止包含lint错误或格式问题的提交。

### 项目结构
```
├── api/           # OpenApi 规范
├── cmd/           # 应用程序入口点
├── config/        # 配置文件
├── internal/      # 私有应用程序代码
│   ├── api/       # HTTP 服务器和请求处理程序（路由）
│   ├── auth/      # GitHub OAuth 集成
│   ├── config/    # 配置管理
│   ├── database/  # 数据持久化抽象（MongoDB 和内存）
│   ├── model/     # 数据模型和领域结构
│   └── service/   # 业务逻辑实现
├── pkg/           # 公共库
├── scripts/       # 实用脚本
└── tools/         # 命令行工具
    └── publisher/ # 将 MCP 服务器发布到注册表的工具
```
### 架构概览

### 请求流程

1. HTTP 请求通过路由器进入（`internal/api/router/`）
2. `internal/api/handlers/v0/` 中的处理器对请求进行验证和处理
3. 服务层执行业务逻辑
4. 数据库接口处理数据持久化
5. 将 JSON 响应返回给客户端

### 关键接口

* **数据库接口** (`internal/database/database.go`) - 使用 MongoDB 和内存实现抽象化数据持久化
* **RegistryService** (`internal/service/service.go`) - 基于数据库的业务逻辑抽象层
* **Auth Service** (`internal/auth/auth.go`) - GitHub OAuth 令牌验证

### 认证流程

发布操作需要 GitHub OAuth 验证：

1. 从 Authorization 头中提取 bearer 令牌
2. 使用 GitHub API 验证令牌
3. 验证仓库所有权与令牌拥有者匹配
4. 如适用，检查组织成员身份

### 设计模式

* **工厂模式**：用于服务创建和依赖注入
* **仓储模式**：用于数据库抽象
* **上下文模式**：用于超时管理（数据库操作限时 5 秒）
* **基于游标的分页**：使用 UUID 实现无状态分页

## API 端点

### API 文档
```
GET /docs
```
该API使用Swagger/OpenAPI进行了文档化。此页面提供了所有端点及其请求/响应模式和示例的完整参考，并允许您直接从浏览器测试API。

## 配置

该服务可以通过环境变量进行配置。详情请参见 [.env.example](https://github.com/modelcontextprotocol/registry/tree/main/.env.example)。

## 预构建的Docker镜像

每次发布和主分支提交时，预构建的Docker镜像会自动发布到GitHub容器注册表：
```bash
# 从主分支运行最新版本
docker run -p 8080:8080 ghcr.io/modelcontextprotocol/registry:latest

# 运行特定提交的构建版本
docker run -p 8080:8080 ghcr.io/modelcontextprotocol/registry:main-20250806-a1b2c3d
```
**可用的镜像标签：**

* `latest` - 来自主分支的最新提交
* `main-<日期>-<提交哈希>` - 特定提交的构建

**配置：** Docker 镜像支持[配置](#configuration)章节中列出的所有环境变量。对于生产环境部署，你需要通过环境变量配置数据库连接和其他设置。

### 导入种子数据

注册表实例可以从以下位置导入数据：

**本地文件：**
```bash
MCP_REGISTRY_SEED_FROM=data/seed.json ./registry
```
**HTTP 端点：**
```bash
MCP_REGISTRY_SEED_FROM=http://other-registry:8080 ./registry
```
## 测试

运行测试脚本来验证 API 端点：
```bash
./scripts/test_endpoints.sh
```
你可以指定要测试的特定端点：
```bash
./scripts/test_endpoints.sh --endpoint health
./scripts/test_endpoints.sh --endpoint servers
```
## 许可证

详情请参阅 [LICENSE](https://github.com/modelcontextprotocol/registry/tree/main/LICENSE) 文件。