import{rt as e,t}from"./jsx-runtime-DFJu3dTM.js";var n=e(t()),r={title:`综述`,description:`脚本侧 opcode 调用文档入口`},i=`

脚本侧 **opcode 调用** 文档。

源数据：[sanny-builder-library](https://github.com/sannybuilder/library)（\`sa.json\` / docs / snippets）。

OP · CLEO Lua · CLEO Redux **同源** SBL Script 表，不是外站另一套 API。

<Callout type="warn" title="与插件的边界">
  这里是 **opcode**（Lua / Redux / OP 文本）。C++ 的 \`plugin::Command\` 见 [插件 · Command](/docs/plugins/commands)。
</Callout>

## 本站覆盖 [#本站覆盖]

| 状态                | 内容                                                                                                             |
| ----------------- | -------------------------------------------------------------------------------------------------------------- |
| **语法**            | [OP / Lua](/docs/cleo/syntax) · [Redux](/docs/cleo/syntax-redux)                                               |
| **已齐 · SA**       | CLEO 类型页 · [default](/docs/cleo/sa/default)（含 misc 879）· [CLEO+](/docs/cleo/sa/plus) · [扩展](/docs/cleo/sa/ext) |
| **已齐 · VC / III** | [VC](/docs/cleo/vc) · [GTA III](/docs/cleo/gta3)                                                               |
| **未收录**           | \`native.json\` Code 全文                                                                                          |
| **别混**            | C++ ASI 在 [插件](/docs/plugins)                                                                                  |

完整表仍以 [library.sannybuilder.com](https://library.sannybuilder.com/#/sa) 为准。

## 怎么读 [#怎么读]

\`\`\`
装 CLEO（+ 需要时 CLEO+ / 扩展）
  → 写 .lua 或 Redux 脚本
  → 调本站按表列出的 op
\`\`\`

| 页                                     | 内容                              |
| ------------------------------------- | ------------------------------- |
| [语法 · OP / Lua](/docs/cleo/syntax)    | 三种形态、Lua 约定                     |
| [语法 · Redux](/docs/cleo/syntax-redux) | JS 调用、\`enums.js\`、native 边界      |
| [SA · Memory](/docs/cleo/sa/memory)   | 读写内存、指针、调用原生                    |
| [SA · default](/docs/cleo/sa/default) | SCM 原生按 class                   |
| [SA · CLEO+](/docs/cleo/sa/plus)      | CLEO+ 扩展                        |
| [SA · 其它扩展](/docs/cleo/sa/ext)        | NewOpcodes / SAMPFUNCS / imgui… |
| [VC](/docs/cleo/vc)                   | Vice City CLEO 类型页              |
| [GTA III](/docs/cleo/gta3)            | III CLEO 类型页                    |

## 分工 [#分工]

\`\`\`
plugins/  → ASI + plugin-sdk
cleo/     → opcode（OP + Lua + Redux 调用形态）
\`\`\`

## 导航 [#导航]

<Cards>
  <Card title="OP / Lua 语法" href="/docs/cleo/syntax" description="三种形态与 Lua 约定" />

  <Card title="Redux 语法" href="/docs/cleo/syntax-redux" description="Class.member / native" />

  <Card title="Memory" href="/docs/cleo/sa/memory" description="读写内存与原生调用" />

  <Card title="插件" href="/docs/plugins" description="C++ ASI 侧" />
</Cards>
`,a={contents:[{heading:void 0,content:`脚本侧 **opcode 调用** 文档。`},{heading:void 0,content:"源数据：sanny-builder-library（`sa.json` / docs / snippets）。"},{heading:void 0,content:`OP · CLEO Lua · CLEO Redux **同源** SBL Script 表，不是外站另一套 API。`},{heading:void 0,content:"这里是 **opcode**（Lua / Redux / OP 文本）。C++ 的 `plugin::Command` 见 插件 · Command。"},{heading:`本站覆盖`,content:`状态`},{heading:`本站覆盖`,content:`内容`},{heading:`本站覆盖`,content:`**语法**`},{heading:`本站覆盖`,content:`OP / Lua · Redux`},{heading:`本站覆盖`,content:`**已齐 · SA**`},{heading:`本站覆盖`,content:`CLEO 类型页 · default（含 misc 879）· CLEO+ · 扩展`},{heading:`本站覆盖`,content:`**已齐 · VC / III**`},{heading:`本站覆盖`,content:`VC · GTA III`},{heading:`本站覆盖`,content:`**未收录**`},{heading:`本站覆盖`,content:"`native.json` Code 全文"},{heading:`本站覆盖`,content:`**别混**`},{heading:`本站覆盖`,content:`C++ ASI 在 插件`},{heading:`本站覆盖`,content:`完整表仍以 library.sannybuilder.com 为准。`},{heading:`怎么读`,content:`页`},{heading:`怎么读`,content:`内容`},{heading:`怎么读`,content:`语法 · OP / Lua`},{heading:`怎么读`,content:`三种形态、Lua 约定`},{heading:`怎么读`,content:`语法 · Redux`},{heading:`怎么读`,content:"JS 调用、`enums.js`、native 边界"},{heading:`怎么读`,content:`SA · Memory`},{heading:`怎么读`,content:`读写内存、指针、调用原生`},{heading:`怎么读`,content:`SA · default`},{heading:`怎么读`,content:`SCM 原生按 class`},{heading:`怎么读`,content:`SA · CLEO+`},{heading:`怎么读`,content:`CLEO+ 扩展`},{heading:`怎么读`,content:`SA · 其它扩展`},{heading:`怎么读`,content:`NewOpcodes / SAMPFUNCS / imgui…`},{heading:`怎么读`,content:`VC`},{heading:`怎么读`,content:`Vice City CLEO 类型页`},{heading:`怎么读`,content:`GTA III`},{heading:`怎么读`,content:`III CLEO 类型页`},{heading:`导航`,content:`<Card title="OP / Lua 语法" href="/docs/cleo/syntax" description="三种形态与 Lua 约定" />`},{heading:`导航`,content:`<Card title="Redux 语法" href="/docs/cleo/syntax-redux" description="Class.member / native" />`},{heading:`导航`,content:`<Card title="Memory" href="/docs/cleo/sa/memory" description="读写内存与原生调用" />`},{heading:`导航`,content:`<Card title="插件" href="/docs/plugins" description="C++ ASI 侧" />`}],headings:[{id:`本站覆盖`,content:`本站覆盖`},{id:`怎么读`,content:`怎么读`},{id:`分工`,content:`分工`},{id:`导航`,content:`导航`}]},o=[{depth:2,url:`#本站覆盖`,title:(0,n.jsx)(n.Fragment,{children:`本站覆盖`})},{depth:2,url:`#怎么读`,title:(0,n.jsx)(n.Fragment,{children:`怎么读`})},{depth:2,url:`#分工`,title:(0,n.jsx)(n.Fragment,{children:`分工`})},{depth:2,url:`#导航`,title:(0,n.jsx)(n.Fragment,{children:`导航`})}];function s(e){let t={a:`a`,code:`code`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components},{Callout:r,Card:i,Cards:a}=t;return r||l(`Callout`,!0),i||l(`Card`,!0),a||l(`Cards`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`脚本侧 `,(0,n.jsx)(t.strong,{children:`opcode 调用`}),` 文档。`]}),`
`,(0,n.jsxs)(t.p,{children:[`源数据：`,(0,n.jsx)(t.a,{href:`https://github.com/sannybuilder/library`,children:`sanny-builder-library`}),`（`,(0,n.jsx)(t.code,{children:`sa.json`}),` / docs / snippets）。`]}),`
`,(0,n.jsxs)(t.p,{children:[`OP · CLEO Lua · CLEO Redux `,(0,n.jsx)(t.strong,{children:`同源`}),` SBL Script 表，不是外站另一套 API。`]}),`
`,(0,n.jsx)(r,{type:`warn`,title:`与插件的边界`,children:(0,n.jsxs)(t.p,{children:[`这里是 `,(0,n.jsx)(t.strong,{children:`opcode`}),`（Lua / Redux / OP 文本）。C++ 的 `,(0,n.jsx)(t.code,{children:`plugin::Command`}),` 见 `,(0,n.jsx)(t.a,{href:`/docs/plugins/commands`,children:`插件 · Command`}),`。`]})}),`
`,(0,n.jsx)(t.h2,{id:`本站覆盖`,children:`本站覆盖`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`状态`}),(0,n.jsx)(t.th,{children:`内容`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`语法`})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:`/docs/cleo/syntax`,children:`OP / Lua`}),` · `,(0,n.jsx)(t.a,{href:`/docs/cleo/syntax-redux`,children:`Redux`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`已齐 · SA`})}),(0,n.jsxs)(t.td,{children:[`CLEO 类型页 · `,(0,n.jsx)(t.a,{href:`/docs/cleo/sa/default`,children:`default`}),`（含 misc 879）· `,(0,n.jsx)(t.a,{href:`/docs/cleo/sa/plus`,children:`CLEO+`}),` · `,(0,n.jsx)(t.a,{href:`/docs/cleo/sa/ext`,children:`扩展`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`已齐 · VC / III`})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:`/docs/cleo/vc`,children:`VC`}),` · `,(0,n.jsx)(t.a,{href:`/docs/cleo/gta3`,children:`GTA III`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`未收录`})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`native.json`}),` Code 全文`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`别混`})}),(0,n.jsxs)(t.td,{children:[`C++ ASI 在 `,(0,n.jsx)(t.a,{href:`/docs/plugins`,children:`插件`})]})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`完整表仍以 `,(0,n.jsx)(t.a,{href:`https://library.sannybuilder.com/#/sa`,children:`library.sannybuilder.com`}),` 为准。`]}),`
`,(0,n.jsx)(t.h2,{id:`怎么读`,children:`怎么读`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`装 CLEO（+ 需要时 CLEO+ / 扩展）`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  → 写 .lua 或 Redux 脚本`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`  → 调本站按表列出的 op`})})]})})}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`页`}),(0,n.jsx)(t.th,{children:`内容`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/cleo/syntax`,children:`语法 · OP / Lua`})}),(0,n.jsx)(t.td,{children:`三种形态、Lua 约定`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/cleo/syntax-redux`,children:`语法 · Redux`})}),(0,n.jsxs)(t.td,{children:[`JS 调用、`,(0,n.jsx)(t.code,{children:`enums.js`}),`、native 边界`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/cleo/sa/memory`,children:`SA · Memory`})}),(0,n.jsx)(t.td,{children:`读写内存、指针、调用原生`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/cleo/sa/default`,children:`SA · default`})}),(0,n.jsx)(t.td,{children:`SCM 原生按 class`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/cleo/sa/plus`,children:`SA · CLEO+`})}),(0,n.jsx)(t.td,{children:`CLEO+ 扩展`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/cleo/sa/ext`,children:`SA · 其它扩展`})}),(0,n.jsx)(t.td,{children:`NewOpcodes / SAMPFUNCS / imgui…`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/cleo/vc`,children:`VC`})}),(0,n.jsx)(t.td,{children:`Vice City CLEO 类型页`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/cleo/gta3`,children:`GTA III`})}),(0,n.jsx)(t.td,{children:`III CLEO 类型页`})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`分工`,children:`分工`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`plugins/  → ASI + plugin-sdk`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`cleo/     → opcode（OP + Lua + Redux 调用形态）`})})]})})}),`
`,(0,n.jsx)(t.h2,{id:`导航`,children:`导航`}),`
`,(0,n.jsxs)(a,{children:[(0,n.jsx)(i,{title:`OP / Lua 语法`,href:`/docs/cleo/syntax`,description:`三种形态与 Lua 约定`}),(0,n.jsx)(i,{title:`Redux 语法`,href:`/docs/cleo/syntax-redux`,description:`Class.member / native`}),(0,n.jsx)(i,{title:`Memory`,href:`/docs/cleo/sa/memory`,description:`读写内存与原生调用`}),(0,n.jsx)(i,{title:`插件`,href:`/docs/plugins`,description:`C++ ASI 侧`})]})]})}function c(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}function l(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as _markdown,c as default,r as frontmatter,a as structuredData,o as toc};