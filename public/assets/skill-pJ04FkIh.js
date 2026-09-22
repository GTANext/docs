import{rt as e,t}from"./jsx-runtime-DFJu3dTM.js";var n=e(t()),r={title:`综述`,description:`Cursor / IDE 用 gtamodx skill 路由与边界`},i=`

面向 **写代码的 agent / 开发者**：约束 API 边界、选对文档分区。

## Skill [#skill]

| Skill                          | 适用场景                                                   |
| ------------------------------ | ------------------------------------------------------ |
| [插件](/docs/skill/plugins-dev)  | ASI · \`plugin::\` · Events · Patch · Pattern · 实体 C++   |
| [XBase](/docs/skill/xbase-dev) | 公共 API · Core 生命周期 · Host / Runtime / Platform · 三版本后端 |
| [CLEO](/docs/skill/cleo-dev)   | opcode · Lua · Redux · CLEO+ / default / ext           |

## 硬边界 [#硬边界]

| 需求                            | 正确分区                                                           | 别混                         |
| ----------------------------- | -------------------------------------------------------------- | -------------------------- |
| XBase 公共功能                    | [XBase](/docs/xbase)                                           | 从宿主直接访问 plugin-sdk 指针或版本地址 |
| XBase 私有后端                    | [XBase](/docs/skill/xbase-dev) + [插件](/docs/skill/plugins-dev) | 把底层类型泄漏到公共 API             |
| 脚本 opcode（\`0A8C\`、\`createCar\`） | [CLEO](/docs/cleo)                                             | 当 C++ 能编进 ASI              |
| C++ 调 SCM                     | [Command](/docs/plugins/commands)                              | 把 Lua/JS 贴进 \`.cpp\`         |
| 调游戏函数 / 补丁 / 事件               | [插件](/docs/plugins)                                            | 用 opcode 表替代 Call          |
| 实体挂数据                         | [Extender](/docs/plugins/extender)                             | 和 CLEO handle 混用           |

## 文档入口 [#文档入口]

* 插件：[综述](/docs/plugins)
* XBase：[综述](/docs/xbase)
* CLEO：[综述](/docs/cleo)

方法名与签名 **以对应文档页为准**，禁止臆造。
`,a={contents:[{heading:void 0,content:`面向 **写代码的 agent / 开发者**：约束 API 边界、选对文档分区。`},{heading:`skill`,content:`Skill`},{heading:`skill`,content:`适用场景`},{heading:`skill`,content:`插件`},{heading:`skill`,content:"ASI · `plugin::` · Events · Patch · Pattern · 实体 C++"},{heading:`skill`,content:`XBase`},{heading:`skill`,content:`公共 API · Core 生命周期 · Host / Runtime / Platform · 三版本后端`},{heading:`skill`,content:`CLEO`},{heading:`skill`,content:`opcode · Lua · Redux · CLEO+ / default / ext`},{heading:`硬边界`,content:`需求`},{heading:`硬边界`,content:`正确分区`},{heading:`硬边界`,content:`别混`},{heading:`硬边界`,content:`XBase 公共功能`},{heading:`硬边界`,content:`XBase`},{heading:`硬边界`,content:`从宿主直接访问 plugin-sdk 指针或版本地址`},{heading:`硬边界`,content:`XBase 私有后端`},{heading:`硬边界`,content:`XBase + 插件`},{heading:`硬边界`,content:`把底层类型泄漏到公共 API`},{heading:`硬边界`,content:"脚本 opcode（`0A8C`、`createCar`）"},{heading:`硬边界`,content:`CLEO`},{heading:`硬边界`,content:`当 C++ 能编进 ASI`},{heading:`硬边界`,content:`C++ 调 SCM`},{heading:`硬边界`,content:`Command`},{heading:`硬边界`,content:"把 Lua/JS 贴进 `.cpp`"},{heading:`硬边界`,content:`调游戏函数 / 补丁 / 事件`},{heading:`硬边界`,content:`插件`},{heading:`硬边界`,content:`用 opcode 表替代 Call`},{heading:`硬边界`,content:`实体挂数据`},{heading:`硬边界`,content:`Extender`},{heading:`硬边界`,content:`和 CLEO handle 混用`},{heading:`文档入口`,content:`插件：综述`},{heading:`文档入口`,content:`XBase：综述`},{heading:`文档入口`,content:`CLEO：综述`},{heading:`文档入口`,content:`方法名与签名 **以对应文档页为准**，禁止臆造。`}],headings:[{id:`skill`,content:`Skill`},{id:`硬边界`,content:`硬边界`},{id:`文档入口`,content:`文档入口`}]},o=[{depth:2,url:`#skill`,title:(0,n.jsx)(n.Fragment,{children:`Skill`})},{depth:2,url:`#硬边界`,title:(0,n.jsx)(n.Fragment,{children:`硬边界`})},{depth:2,url:`#文档入口`,title:(0,n.jsx)(n.Fragment,{children:`文档入口`})}];function s(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`面向 `,(0,n.jsx)(t.strong,{children:`写代码的 agent / 开发者`}),`：约束 API 边界、选对文档分区。`]}),`
`,(0,n.jsx)(t.h2,{id:`skill`,children:`Skill`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Skill`}),(0,n.jsx)(t.th,{children:`适用场景`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/skill/plugins-dev`,children:`插件`})}),(0,n.jsxs)(t.td,{children:[`ASI · `,(0,n.jsx)(t.code,{children:`plugin::`}),` · Events · Patch · Pattern · 实体 C++`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/skill/xbase-dev`,children:`XBase`})}),(0,n.jsx)(t.td,{children:`公共 API · Core 生命周期 · Host / Runtime / Platform · 三版本后端`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/skill/cleo-dev`,children:`CLEO`})}),(0,n.jsx)(t.td,{children:`opcode · Lua · Redux · CLEO+ / default / ext`})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`硬边界`,children:`硬边界`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`需求`}),(0,n.jsx)(t.th,{children:`正确分区`}),(0,n.jsx)(t.th,{children:`别混`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`XBase 公共功能`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/xbase`,children:`XBase`})}),(0,n.jsx)(t.td,{children:`从宿主直接访问 plugin-sdk 指针或版本地址`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`XBase 私有后端`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:`/docs/skill/xbase-dev`,children:`XBase`}),` + `,(0,n.jsx)(t.a,{href:`/docs/skill/plugins-dev`,children:`插件`})]}),(0,n.jsx)(t.td,{children:`把底层类型泄漏到公共 API`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[`脚本 opcode（`,(0,n.jsx)(t.code,{children:`0A8C`}),`、`,(0,n.jsx)(t.code,{children:`createCar`}),`）`]}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/cleo`,children:`CLEO`})}),(0,n.jsx)(t.td,{children:`当 C++ 能编进 ASI`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`C++ 调 SCM`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/plugins/commands`,children:`Command`})}),(0,n.jsxs)(t.td,{children:[`把 Lua/JS 贴进 `,(0,n.jsx)(t.code,{children:`.cpp`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`调游戏函数 / 补丁 / 事件`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/plugins`,children:`插件`})}),(0,n.jsx)(t.td,{children:`用 opcode 表替代 Call`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`实体挂数据`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/plugins/extender`,children:`Extender`})}),(0,n.jsx)(t.td,{children:`和 CLEO handle 混用`})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`文档入口`,children:`文档入口`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`插件：`,(0,n.jsx)(t.a,{href:`/docs/plugins`,children:`综述`})]}),`
`,(0,n.jsxs)(t.li,{children:[`XBase：`,(0,n.jsx)(t.a,{href:`/docs/xbase`,children:`综述`})]}),`
`,(0,n.jsxs)(t.li,{children:[`CLEO：`,(0,n.jsx)(t.a,{href:`/docs/cleo`,children:`综述`})]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`方法名与签名 `,(0,n.jsx)(t.strong,{children:`以对应文档页为准`}),`，禁止臆造。`]})]})}function c(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}export{i as _markdown,c as default,r as frontmatter,a as structuredData,o as toc};