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

该命令先构建再整理产物，构建时预渲染全部文档页与 Markdown 文本，问 AI、搜索与 OG 图走运行时服务端渲染。

| 目录 | 内容 | 用途 |
|---|---|---|
| `server/` | 清单入口、启动文件、环境文件 | 项目内启动结构 |
| `deploy/` | `public/` 静态资源、`server/` 服务端、`package.json` | 整体上传的部署目录 |

项目内启动：

```bash
pnpm start
```

部署时上传 `deploy/` 整体，在目标机安装依赖后启动，启动目录需能读到时环境文件与 `node_modules`：

```bash
pnpm install --prod
node server/server.mjs
```

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
