import{rt as e,t}from"./jsx-runtime-DFJu3dTM.js";var n=e(t()),r={title:`扩展 NewOpcodes`,description:`NewOpcodes 按页入口（约 128 条）`},i=`

\`sa\` · 扩展 \`NewOpcodes\` · 需 CLEO + NewOpcodes 插件

源：\`sa.json\` → \`NewOpcodes\`（\`0D00\`…\`0D7F\`，中间有洞）。

部分号与 CLEO+ 重叠（如 \`0D0B\` 骨骼矩阵）；以实际加载的插件为准。

## 按页 [#按页]

| 页                                               | 范围概要                       |
| ----------------------------------------------- | -------------------------- |
| [matrix](/docs/cleo/sa/ext/newopcodes/matrix)   | 矩阵 / 四元数 / 向量              |
| [entity](/docs/cleo/sa/ext/newopcodes/entity)   | 部件 / 透明度 / 碰撞 / 骨骼         |
| [draw](/docs/cleo/sa/ext/newopcodes/draw)       | ColPoint / shape / TXD / 串 |
| [misc](/docs/cleo/sa/ext/newopcodes/misc)       | memcpy / 线程变量 / 串          |
| [fx](/docs/cleo/sa/ext/newopcodes/fx)           | 阴影光 corona 天气 分辨率          |
| [vehicle](/docs/cleo/sa/ext/newopcodes/vehicle) | 车灯损伤 dummy 抛射物             |
| [texture](/docs/cleo/sa/ext/newopcodes/texture) | BMP/PNG/DDS + 2D 精灵        |
| [print](/docs/cleo/sa/ext/newopcodes/print)     | 临时屏字                       |
| [atomic](/docs/cleo/sa/ext/newopcodes/atomic)   | Component / Atomic / 材质    |

调用见 [CLEO Lua](/docs/cleo/syntax) / [Redux](/docs/cleo/syntax-redux)。

## 覆盖 [#覆盖]

| 状态      | 说明                                              |
| ------- | ----------------------------------------------- |
| **本目录** | 上表各页全文切片已齐                                      |
| **对账**  | 与 \`sa.json\` NewOpcodes.commands 对齐；无命令空洞 ID 不写页 |
| **重复**  | 与 CLEO+ 同号语义接近，勿混装冲突插件                          |

<Callout type="info" title="进度">
  NewOpcodes 子页全齐：\`matrix\` · \`entity\` · \`draw\` · \`misc\` · \`fx\` · \`vehicle\` · \`texture\` · \`print\` · \`atomic\`。
</Callout>
`,a={contents:[{heading:void 0,content:"`sa` · 扩展 `NewOpcodes` · 需 CLEO + NewOpcodes 插件"},{heading:void 0,content:"源：`sa.json` → `NewOpcodes`（`0D00`…`0D7F`，中间有洞）。"},{heading:void 0,content:"部分号与 CLEO+ 重叠（如 `0D0B` 骨骼矩阵）；以实际加载的插件为准。"},{heading:`按页`,content:`页`},{heading:`按页`,content:`范围概要`},{heading:`按页`,content:`matrix`},{heading:`按页`,content:`矩阵 / 四元数 / 向量`},{heading:`按页`,content:`entity`},{heading:`按页`,content:`部件 / 透明度 / 碰撞 / 骨骼`},{heading:`按页`,content:`draw`},{heading:`按页`,content:`ColPoint / shape / TXD / 串`},{heading:`按页`,content:`misc`},{heading:`按页`,content:`memcpy / 线程变量 / 串`},{heading:`按页`,content:`fx`},{heading:`按页`,content:`阴影光 corona 天气 分辨率`},{heading:`按页`,content:`vehicle`},{heading:`按页`,content:`车灯损伤 dummy 抛射物`},{heading:`按页`,content:`texture`},{heading:`按页`,content:`BMP/PNG/DDS + 2D 精灵`},{heading:`按页`,content:`print`},{heading:`按页`,content:`临时屏字`},{heading:`按页`,content:`atomic`},{heading:`按页`,content:`Component / Atomic / 材质`},{heading:`按页`,content:`调用见 CLEO Lua / Redux。`},{heading:`覆盖`,content:`状态`},{heading:`覆盖`,content:`说明`},{heading:`覆盖`,content:`**本目录**`},{heading:`覆盖`,content:`上表各页全文切片已齐`},{heading:`覆盖`,content:`**对账**`},{heading:`覆盖`,content:"与 `sa.json` NewOpcodes.commands 对齐；无命令空洞 ID 不写页"},{heading:`覆盖`,content:`**重复**`},{heading:`覆盖`,content:`与 CLEO+ 同号语义接近，勿混装冲突插件`},{heading:`覆盖`,content:"NewOpcodes 子页全齐：`matrix` · `entity` · `draw` · `misc` · `fx` · `vehicle` · `texture` · `print` · `atomic`。"}],headings:[{id:`按页`,content:`按页`},{id:`覆盖`,content:`覆盖`}]},o=[{depth:2,url:`#按页`,title:(0,n.jsx)(n.Fragment,{children:`按页`})},{depth:2,url:`#覆盖`,title:(0,n.jsx)(n.Fragment,{children:`覆盖`})}];function s(e){let t={a:`a`,code:`code`,h2:`h2`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components},{Callout:r}=t;return r||l(`Callout`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`sa`}),` · 扩展 `,(0,n.jsx)(t.code,{children:`NewOpcodes`}),` · 需 CLEO + NewOpcodes 插件`]}),`
`,(0,n.jsxs)(t.p,{children:[`源：`,(0,n.jsx)(t.code,{children:`sa.json`}),` → `,(0,n.jsx)(t.code,{children:`NewOpcodes`}),`（`,(0,n.jsx)(t.code,{children:`0D00`}),`…`,(0,n.jsx)(t.code,{children:`0D7F`}),`，中间有洞）。`]}),`
`,(0,n.jsxs)(t.p,{children:[`部分号与 CLEO+ 重叠（如 `,(0,n.jsx)(t.code,{children:`0D0B`}),` 骨骼矩阵）；以实际加载的插件为准。`]}),`
`,(0,n.jsx)(t.h2,{id:`按页`,children:`按页`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`页`}),(0,n.jsx)(t.th,{children:`范围概要`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/cleo/sa/ext/newopcodes/matrix`,children:`matrix`})}),(0,n.jsx)(t.td,{children:`矩阵 / 四元数 / 向量`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/cleo/sa/ext/newopcodes/entity`,children:`entity`})}),(0,n.jsx)(t.td,{children:`部件 / 透明度 / 碰撞 / 骨骼`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/cleo/sa/ext/newopcodes/draw`,children:`draw`})}),(0,n.jsx)(t.td,{children:`ColPoint / shape / TXD / 串`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/cleo/sa/ext/newopcodes/misc`,children:`misc`})}),(0,n.jsx)(t.td,{children:`memcpy / 线程变量 / 串`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/cleo/sa/ext/newopcodes/fx`,children:`fx`})}),(0,n.jsx)(t.td,{children:`阴影光 corona 天气 分辨率`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/cleo/sa/ext/newopcodes/vehicle`,children:`vehicle`})}),(0,n.jsx)(t.td,{children:`车灯损伤 dummy 抛射物`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/cleo/sa/ext/newopcodes/texture`,children:`texture`})}),(0,n.jsx)(t.td,{children:`BMP/PNG/DDS + 2D 精灵`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/cleo/sa/ext/newopcodes/print`,children:`print`})}),(0,n.jsx)(t.td,{children:`临时屏字`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:`/docs/cleo/sa/ext/newopcodes/atomic`,children:`atomic`})}),(0,n.jsx)(t.td,{children:`Component / Atomic / 材质`})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`调用见 `,(0,n.jsx)(t.a,{href:`/docs/cleo/syntax`,children:`CLEO Lua`}),` / `,(0,n.jsx)(t.a,{href:`/docs/cleo/syntax-redux`,children:`Redux`}),`。`]}),`
`,(0,n.jsx)(t.h2,{id:`覆盖`,children:`覆盖`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`状态`}),(0,n.jsx)(t.th,{children:`说明`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`本目录`})}),(0,n.jsx)(t.td,{children:`上表各页全文切片已齐`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`对账`})}),(0,n.jsxs)(t.td,{children:[`与 `,(0,n.jsx)(t.code,{children:`sa.json`}),` NewOpcodes.commands 对齐；无命令空洞 ID 不写页`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:`重复`})}),(0,n.jsx)(t.td,{children:`与 CLEO+ 同号语义接近，勿混装冲突插件`})]})]})]}),`
`,(0,n.jsx)(r,{type:`info`,title:`进度`,children:(0,n.jsxs)(t.p,{children:[`NewOpcodes 子页全齐：`,(0,n.jsx)(t.code,{children:`matrix`}),` · `,(0,n.jsx)(t.code,{children:`entity`}),` · `,(0,n.jsx)(t.code,{children:`draw`}),` · `,(0,n.jsx)(t.code,{children:`misc`}),` · `,(0,n.jsx)(t.code,{children:`fx`}),` · `,(0,n.jsx)(t.code,{children:`vehicle`}),` · `,(0,n.jsx)(t.code,{children:`texture`}),` · `,(0,n.jsx)(t.code,{children:`print`}),` · `,(0,n.jsx)(t.code,{children:`atomic`}),`。`]})})]})}function c(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}function l(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as _markdown,c as default,r as frontmatter,a as structuredData,o as toc};