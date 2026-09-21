# GTAMODX开发文档

> 基于 React Router v8 的服务端渲染文档站，内容源在 `content/docs`，覆盖 XBase、plugin-sdk ASI 与 CLEO。

## 快速开始

```bash
pnpm install
pnpm dev
```

开发端口 5173。`pnpm dev` 与 `pnpm build` 会先生成 `.source` 集合入口，正文按需编译。

## 构建与部署

```bash
pnpm deploy:pack
```

该命令先构建再整理产物。构建时只预渲染首页、分区入口与 LLM 文本，文档正文、问 AI、搜索与 OG 图走运行时服务端渲染，产物里不会留下每页的 HTML 与 data。

| 目录 | 内容 | 用途 |
|---|---|---|
| `server/` | 清单入口、启动文件、环境文件 | 项目内启动结构 |
| `deploy/` | `public/` 静态资源、`server/` 服务端、`package.json`、`.env.example` | 整体上传的部署目录 |

项目内启动：

```bash
pnpm start
```

### 自动构建

任意分支的推送都会跑类型检查与打包；推送 `main` 或手动触发 `Deploy website` 工作流（`.github/workflows/deploy-website.yml`）时，产物 `deploy/` 会强推到 `website` 分支。该分支只保留一次提交，不存历史。

部署机首次准备：

```bash
git clone -b website https://github.com/GTANext/docs.git site
cd site
pnpm install --prod
cp .env.example server/.env
```

更新产物，未跟踪的 `server/.env` 不会被覆盖：

```bash
git fetch origin website
git reset --hard origin/website
```

启动 `node server/server.mjs`，端口由 `server/.env` 的 `PORT` 决定。

站点是服务端渲染，需要常驻 Node 进程；`website` 分支是产物分支，不能直接当 GitHub Pages 的静态站点用。

## 环境变量

`.env` 缺失时打包用 `.env.example` 占位，问 AI 需要自行补齐密钥。

| 变量 | 作用 | 缺省 |
|---|---|---|
| `LLM_GATEWAY_API_KEY` | 问 AI 网关密钥，缺失时 `/api/chat` 不可用 | 空 |
| `LLM_GATEWAY_MODEL` | 问 AI 使用的模型 | `anthropic/claude-3.5-sonnet` |
| `PORT` | 监听端口 | `3000` |

## 目录结构

```txt
app
├─ routes.ts            路由表，路径与资源路由
├─ root.tsx             站点外壳，Provider 与 Markdown 协商
├─ app.css              样式入口，Tailwind 与 Fumadocs 预设
├─ routes
│  ├─ home.tsx          首页
│  ├─ docs.tsx          文档页，侧栏与正文懒加载
│  ├─ api.search.ts     静态搜索索引
│  ├─ api.chat.ts       问 AI 流式接口
│  ├─ llms.ts           llms.txt
│  ├─ llms-full.ts      llms-full.txt
│  ├─ llms-mdx.ts       单页 Markdown 文本
│  └─ og.docs.tsx       OG 图
content/docs            文档内容，meta.json 控制侧栏
lib                     来源加载、SEO、导航词表与共享常量
components              布局、MDX 组件与问 AI 面板
```

## 排查路径

1. 文档页 404：确认 `content/docs` 下文件路径与侧栏 `meta.json` 是否一致
2. 侧栏标题与页面标题不一致：确认 `lib/source.ts` 的标题清洗插件是否命中前缀
3. 部署后首屏报错：确认启动目录能读到时环境文件与 `node_modules`
4. 问 AI 报未授权：确认 `server/.env` 里的网关密钥有效
