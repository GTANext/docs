import{rt as e,t}from"./jsx-runtime-DFJu3dTM.js";var n=e(t()),r={title:`插件`,description:`插件开发 Skill · ASI / plugin-sdk 侧硬约束与文档路由`},i=`

对应 skill 文件：\`gtamodx/plugins-dev.md\`。

写 **ASI / \`plugin::\` / Events / Patch / Pattern / 实体类** 时先读本页再写代码。

## 文档落点 [#文档落点]

| 主题                  | 文档                                                                    |
| ------------------- | --------------------------------------------------------------------- |
| Call / Method / VMT | [PluginBase](/docs/plugins/plugin-base)                               |
| 生命周期                | [Events](/docs/plugins/events)                                        |
| 内存修改                | [Patch](/docs/plugins/patch)                                          |
| 特征码                 | [Pattern](/docs/plugins/pattern)                                      |
| C++ 调 SCM           | [Command](/docs/plugins/commands)                                     |
| 扩展与工具               | [extensions](/docs/plugins/extensions) · [utils](/docs/plugins/utils) |
| 附加数据                | [Extender](/docs/plugins/extender)                                    |
| 实体 API              | [entities](/docs/plugins/entities)                                    |
| 组合示例                | [recipes](/docs/plugins/recipes)                                      |

## 硬规则 [#硬规则]

* 签名以文档与本地头文件为准，不臆造方法 / 事件名 / 地址
* CLEO Lua/Redux **不能**当可编译 C++ 用
* 本站是 **精选**，不是完整 plugin-sdk 树；长尾看本地头

## 示例形态 [#示例形态]

\`\`\`cpp
#include "plugin.h"
using namespace plugin;

// Events / Call / Patch 等见对应文档页
\`\`\`

跨到 opcode 语义时对照 [CLEO](/docs/cleo)，调用侧仍用 \`plugin::Command\`。
`,a={contents:[{heading:void 0,content:"对应 skill 文件：`gtamodx/plugins-dev.md`。"},{heading:void 0,content:"写 **ASI / `plugin::` / Events / Patch / Pattern / 实体类** 时先读本页再写代码。"},{heading:`文档落点`,content:`主题`},{heading:`文档落点`,content:`文档`},{heading:`文档落点`,content:`Call / Method / VMT`},{heading:`文档落点`,content:`PluginBase`},{heading:`文档落点`,content:`生命周期`},{heading:`文档落点`,content:`Events`},{heading:`文档落点`,content:`内存修改`},{heading:`文档落点`,content:`Patch`},{heading:`文档落点`,content:`特征码`},{heading:`文档落点`,content:`Pattern`},{heading:`文档落点`,content:`C++ 调 SCM`},{heading:`文档落点`,content:`Command`},{heading:`文档落点`,content:`扩展与工具`},{heading:`文档落点`,content:`extensions · utils`},{heading:`文档落点`,content:`附加数据`},{heading:`文档落点`,content:`Extender`},{heading:`文档落点`,content:`实体 API`},{heading:`文档落点`,content:`entities`},{heading:`文档落点`,content:`组合示例`},{heading:`文档落点`,content:`recipes`},{heading:`硬规则`,content:`签名以文档与本地头文件为准，不臆造方法 / 事件名 / 地址`},{heading:`硬规则`,content:`CLEO Lua/Redux **不能**当可编译 C++ 用`},{heading:`硬规则`,content:`本站是 **精选**，不是完整 plugin-sdk 树；长尾看本地头`},{heading:`示例形态`,content:"跨到 opcode 语义时对照 CLEO，调用侧仍用 `plugin::Command`。"}],headings:[{id:`文档落点`,content:`文档落点`},{id:`硬规则`,content:`硬规则`},{id:`示例形态`,content:`示例形态`}]},o=[{depth:2,url:`#文档落点`,title:(0,n.jsx)(n.Fragment,{children:`文档落点`})},{depth:2,url:`#硬规则`,title:(0,n.jsx)(n.Fragment,{children:`硬规则`})},{depth:2,url:`#示例形态`,title:(0,n.jsx)(n.Fragment,{children:`示例形态`})}];function s(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`对应 skill 文件：`,(0,n.jsx)(t.code,{children:`gtamodx/plugins-dev.md`}),`。`]}),`
`,(0,n.jsxs)(t.p,{children:[`写 `,(0,n.jsxs)(t.strong,{children:[`ASI / `,(0,n.jsx)(t.code,{children:`plugin::`}),` / Events / Patch / Pattern / 实体类`]}),` 时先读本页再写代码。`]}),`
`,(0,n.jsx)(t.h2,{id:`文档落点`,children:`文档落点`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`主题`}),(0,n.jsx)(t.th,{children:`文档`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Call / Method / VMT`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/plugins/plugin-base`,children:`PluginBase`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`生命周期`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/plugins/events`,children:`Events`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`内存修改`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/plugins/patch`,children:`Patch`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`特征码`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/plugins/pattern`,children:`Pattern`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`C++ 调 SCM`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/plugins/commands`,children:`Command`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`扩展与工具`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:`/docs/plugins/extensions`,children:`extensions`}),` · `,(0,n.jsx)(t.a,{href:`/docs/plugins/utils`,children:`utils`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`附加数据`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/plugins/extender`,children:`Extender`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`实体 API`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/plugins/entities`,children:`entities`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`组合示例`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/plugins/recipes`,children:`recipes`})})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`硬规则`,children:`硬规则`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`签名以文档与本地头文件为准，不臆造方法 / 事件名 / 地址`}),`
`,(0,n.jsxs)(t.li,{children:[`CLEO Lua/Redux `,(0,n.jsx)(t.strong,{children:`不能`}),`当可编译 C++ 用`]}),`
`,(0,n.jsxs)(t.li,{children:[`本站是 `,(0,n.jsx)(t.strong,{children:`精选`}),`，不是完整 plugin-sdk 树；长尾看本地头`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`示例形态`,children:`示例形态`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`#include`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:` "plugin.h"`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`using`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` namespace`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` plugin`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:`// Events / Call / Patch 等见对应文档页`})})]})})}),`
`,(0,n.jsxs)(t.p,{children:[`跨到 opcode 语义时对照 `,(0,n.jsx)(t.a,{href:`/docs/cleo`,children:`CLEO`}),`，调用侧仍用 `,(0,n.jsx)(t.code,{children:`plugin::Command`}),`。`]})]})}function c(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}export{i as _markdown,c as default,r as frontmatter,a as structuredData,o as toc};