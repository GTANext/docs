import{rt as e,t}from"./jsx-runtime-DFJu3dTM.js";var n=e(t()),r={title:`XBase`,description:`XBase 开发 Skill · 公共 API、能力矩阵与版本后端边界`},i=`

对应 Skill 文件：\`gtamodx/xbase-dev.md\`。

使用 **XBase 公共 API、Core 生命周期、Host / Runtime / Platform、UI DSL 或三版本后端** 时，先读本页再编写代码。

## 文档落点 [#文档落点]

| 主题        | 文档                                                                                         |
| --------- | ------------------------------------------------------------------------------------------ |
| 架构与能力     | [XBase 综述](/docs/xbase)                                                                    |
| Core 生命周期 | [Core](/docs/xbase/core)                                                                   |
| 公共值类型与 ID | [Types](/docs/xbase/types)                                                                 |
| 宿主与版本后端   | [宿主接入](/docs/xbase/host-integration)                                                       |
| UI 与主题    | [UI](/docs/xbase/ui) · [Theme](/docs/xbase/theme)                                          |
| Hook 边界   | [Hooks](/docs/xbase/hooks)                                                                 |
| 玩家、载具与世界  | [Player](/docs/xbase/player) · [Vehicle](/docs/xbase/vehicle) · [World](/docs/xbase/world) |

## 硬规则 [#硬规则]

* 宿主只使用 \`XBase/*.h\` 公共接口，不包含私有 backend 或第三方 SDK 头
* 调用功能前检查对应能力；不支持的版本必须安全禁用或返回可观察失败
* III、VC、SA 的地址、ABI、脚本命令和对象布局严格隔离
* 生命周期和游戏状态由 XBase Core 统一调度，宿主不得建立第二套状态源
* 公共边界只暴露值类型、强类型 ID、快照、结果与回调

## 使用范围 [#使用范围]

* 编排 XBase 功能或接入 XMenu：只加载 XBase Skill
* 实现 XBase 私有游戏后端：同时加载 [插件 Skill](/docs/skill/plugins-dev)
* 对照脚本命令语义：同时加载 [CLEO Skill](/docs/skill/cleo-dev)

入口：[XBase 综述](/docs/xbase)。
`,a={contents:[{heading:void 0,content:"对应 Skill 文件：`gtamodx/xbase-dev.md`。"},{heading:void 0,content:`使用 **XBase 公共 API、Core 生命周期、Host / Runtime / Platform、UI DSL 或三版本后端** 时，先读本页再编写代码。`},{heading:`文档落点`,content:`主题`},{heading:`文档落点`,content:`文档`},{heading:`文档落点`,content:`架构与能力`},{heading:`文档落点`,content:`XBase 综述`},{heading:`文档落点`,content:`Core 生命周期`},{heading:`文档落点`,content:`Core`},{heading:`文档落点`,content:`公共值类型与 ID`},{heading:`文档落点`,content:`Types`},{heading:`文档落点`,content:`宿主与版本后端`},{heading:`文档落点`,content:`宿主接入`},{heading:`文档落点`,content:`UI 与主题`},{heading:`文档落点`,content:`UI · Theme`},{heading:`文档落点`,content:`Hook 边界`},{heading:`文档落点`,content:`Hooks`},{heading:`文档落点`,content:`玩家、载具与世界`},{heading:`文档落点`,content:`Player · Vehicle · World`},{heading:`硬规则`,content:"宿主只使用 `XBase/*.h` 公共接口，不包含私有 backend 或第三方 SDK 头"},{heading:`硬规则`,content:`调用功能前检查对应能力；不支持的版本必须安全禁用或返回可观察失败`},{heading:`硬规则`,content:`III、VC、SA 的地址、ABI、脚本命令和对象布局严格隔离`},{heading:`硬规则`,content:`生命周期和游戏状态由 XBase Core 统一调度，宿主不得建立第二套状态源`},{heading:`硬规则`,content:`公共边界只暴露值类型、强类型 ID、快照、结果与回调`},{heading:`使用范围`,content:`编排 XBase 功能或接入 XMenu：只加载 XBase Skill`},{heading:`使用范围`,content:`实现 XBase 私有游戏后端：同时加载 插件 Skill`},{heading:`使用范围`,content:`对照脚本命令语义：同时加载 CLEO Skill`},{heading:`使用范围`,content:`入口：XBase 综述。`}],headings:[{id:`文档落点`,content:`文档落点`},{id:`硬规则`,content:`硬规则`},{id:`使用范围`,content:`使用范围`}]},o=[{depth:2,url:`#文档落点`,title:(0,n.jsx)(n.Fragment,{children:`文档落点`})},{depth:2,url:`#硬规则`,title:(0,n.jsx)(n.Fragment,{children:`硬规则`})},{depth:2,url:`#使用范围`,title:(0,n.jsx)(n.Fragment,{children:`使用范围`})}];function s(e){let t={a:`a`,code:`code`,h2:`h2`,li:`li`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`对应 Skill 文件：`,(0,n.jsx)(t.code,{children:`gtamodx/xbase-dev.md`}),`。`]}),`
`,(0,n.jsxs)(t.p,{children:[`使用 `,(0,n.jsx)(t.strong,{children:`XBase 公共 API、Core 生命周期、Host / Runtime / Platform、UI DSL 或三版本后端`}),` 时，先读本页再编写代码。`]}),`
`,(0,n.jsx)(t.h2,{id:`文档落点`,children:`文档落点`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`主题`}),(0,n.jsx)(t.th,{children:`文档`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`架构与能力`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/xbase`,children:`XBase 综述`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Core 生命周期`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/xbase/core`,children:`Core`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`公共值类型与 ID`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/xbase/types`,children:`Types`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`宿主与版本后端`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/xbase/host-integration`,children:`宿主接入`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`UI 与主题`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:`/docs/xbase/ui`,children:`UI`}),` · `,(0,n.jsx)(t.a,{href:`/docs/xbase/theme`,children:`Theme`})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`Hook 边界`}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/xbase/hooks`,children:`Hooks`})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`玩家、载具与世界`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:`/docs/xbase/player`,children:`Player`}),` · `,(0,n.jsx)(t.a,{href:`/docs/xbase/vehicle`,children:`Vehicle`}),` · `,(0,n.jsx)(t.a,{href:`/docs/xbase/world`,children:`World`})]})]})]})]}),`
`,(0,n.jsx)(t.h2,{id:`硬规则`,children:`硬规则`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`宿主只使用 `,(0,n.jsx)(t.code,{children:`XBase/*.h`}),` 公共接口，不包含私有 backend 或第三方 SDK 头`]}),`
`,(0,n.jsx)(t.li,{children:`调用功能前检查对应能力；不支持的版本必须安全禁用或返回可观察失败`}),`
`,(0,n.jsx)(t.li,{children:`III、VC、SA 的地址、ABI、脚本命令和对象布局严格隔离`}),`
`,(0,n.jsx)(t.li,{children:`生命周期和游戏状态由 XBase Core 统一调度，宿主不得建立第二套状态源`}),`
`,(0,n.jsx)(t.li,{children:`公共边界只暴露值类型、强类型 ID、快照、结果与回调`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`使用范围`,children:`使用范围`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`编排 XBase 功能或接入 XMenu：只加载 XBase Skill`}),`
`,(0,n.jsxs)(t.li,{children:[`实现 XBase 私有游戏后端：同时加载 `,(0,n.jsx)(t.a,{href:`/docs/skill/plugins-dev`,children:`插件 Skill`})]}),`
`,(0,n.jsxs)(t.li,{children:[`对照脚本命令语义：同时加载 `,(0,n.jsx)(t.a,{href:`/docs/skill/cleo-dev`,children:`CLEO Skill`})]}),`
`]}),`
`,(0,n.jsxs)(t.p,{children:[`入口：`,(0,n.jsx)(t.a,{href:`/docs/xbase`,children:`XBase 综述`}),`。`]})]})}function c(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}export{i as _markdown,c as default,r as frontmatter,a as structuredData,o as toc};