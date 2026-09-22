import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/cleo/sa/ext/newopcodes/index.mdx?collection=docs
var frontmatter = {
	"title": "扩展 NewOpcodes",
	"description": "NewOpcodes 按页入口（约 128 条）"
};
var _markdown = "\n\n`sa` · 扩展 `NewOpcodes` · 需 CLEO + NewOpcodes 插件\n\n源：`sa.json` → `NewOpcodes`（`0D00`…`0D7F`，中间有洞）。\n\n部分号与 CLEO+ 重叠（如 `0D0B` 骨骼矩阵）；以实际加载的插件为准。\n\n## 按页 [#按页]\n\n| 页                                               | 范围概要                       |\n| ----------------------------------------------- | -------------------------- |\n| [matrix](/docs/cleo/sa/ext/newopcodes/matrix)   | 矩阵 / 四元数 / 向量              |\n| [entity](/docs/cleo/sa/ext/newopcodes/entity)   | 部件 / 透明度 / 碰撞 / 骨骼         |\n| [draw](/docs/cleo/sa/ext/newopcodes/draw)       | ColPoint / shape / TXD / 串 |\n| [misc](/docs/cleo/sa/ext/newopcodes/misc)       | memcpy / 线程变量 / 串          |\n| [fx](/docs/cleo/sa/ext/newopcodes/fx)           | 阴影光 corona 天气 分辨率          |\n| [vehicle](/docs/cleo/sa/ext/newopcodes/vehicle) | 车灯损伤 dummy 抛射物             |\n| [texture](/docs/cleo/sa/ext/newopcodes/texture) | BMP/PNG/DDS + 2D 精灵        |\n| [print](/docs/cleo/sa/ext/newopcodes/print)     | 临时屏字                       |\n| [atomic](/docs/cleo/sa/ext/newopcodes/atomic)   | Component / Atomic / 材质    |\n\n调用见 [CLEO Lua](/docs/cleo/syntax) / [Redux](/docs/cleo/syntax-redux)。\n\n## 覆盖 [#覆盖]\n\n| 状态      | 说明                                              |\n| ------- | ----------------------------------------------- |\n| **本目录** | 上表各页全文切片已齐                                      |\n| **对账**  | 与 `sa.json` NewOpcodes.commands 对齐；无命令空洞 ID 不写页 |\n| **重复**  | 与 CLEO+ 同号语义接近，勿混装冲突插件                          |\n\n<Callout type=\"info\" title=\"进度\">\n  NewOpcodes 子页全齐：`matrix` · `entity` · `draw` · `misc` · `fx` · `vehicle` · `texture` · `print` · `atomic`。\n</Callout>\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "`sa` · 扩展 `NewOpcodes` · 需 CLEO + NewOpcodes 插件"
		},
		{
			"heading": void 0,
			"content": "源：`sa.json` → `NewOpcodes`（`0D00`…`0D7F`，中间有洞）。"
		},
		{
			"heading": void 0,
			"content": "部分号与 CLEO+ 重叠（如 `0D0B` 骨骼矩阵）；以实际加载的插件为准。"
		},
		{
			"heading": "按页",
			"content": "页"
		},
		{
			"heading": "按页",
			"content": "范围概要"
		},
		{
			"heading": "按页",
			"content": "matrix"
		},
		{
			"heading": "按页",
			"content": "矩阵 / 四元数 / 向量"
		},
		{
			"heading": "按页",
			"content": "entity"
		},
		{
			"heading": "按页",
			"content": "部件 / 透明度 / 碰撞 / 骨骼"
		},
		{
			"heading": "按页",
			"content": "draw"
		},
		{
			"heading": "按页",
			"content": "ColPoint / shape / TXD / 串"
		},
		{
			"heading": "按页",
			"content": "misc"
		},
		{
			"heading": "按页",
			"content": "memcpy / 线程变量 / 串"
		},
		{
			"heading": "按页",
			"content": "fx"
		},
		{
			"heading": "按页",
			"content": "阴影光 corona 天气 分辨率"
		},
		{
			"heading": "按页",
			"content": "vehicle"
		},
		{
			"heading": "按页",
			"content": "车灯损伤 dummy 抛射物"
		},
		{
			"heading": "按页",
			"content": "texture"
		},
		{
			"heading": "按页",
			"content": "BMP/PNG/DDS + 2D 精灵"
		},
		{
			"heading": "按页",
			"content": "print"
		},
		{
			"heading": "按页",
			"content": "临时屏字"
		},
		{
			"heading": "按页",
			"content": "atomic"
		},
		{
			"heading": "按页",
			"content": "Component / Atomic / 材质"
		},
		{
			"heading": "按页",
			"content": "调用见 CLEO Lua / Redux。"
		},
		{
			"heading": "覆盖",
			"content": "状态"
		},
		{
			"heading": "覆盖",
			"content": "说明"
		},
		{
			"heading": "覆盖",
			"content": "**本目录**"
		},
		{
			"heading": "覆盖",
			"content": "上表各页全文切片已齐"
		},
		{
			"heading": "覆盖",
			"content": "**对账**"
		},
		{
			"heading": "覆盖",
			"content": "与 `sa.json` NewOpcodes.commands 对齐；无命令空洞 ID 不写页"
		},
		{
			"heading": "覆盖",
			"content": "**重复**"
		},
		{
			"heading": "覆盖",
			"content": "与 CLEO+ 同号语义接近，勿混装冲突插件"
		},
		{
			"heading": "覆盖",
			"content": "NewOpcodes 子页全齐：`matrix` · `entity` · `draw` · `misc` · `fx` · `vehicle` · `texture` · `print` · `atomic`。"
		}
	],
	"headings": [{
		"id": "按页",
		"content": "按页"
	}, {
		"id": "覆盖",
		"content": "覆盖"
	}]
};
var toc = [{
	depth: 2,
	url: "#按页",
	title: jsx(Fragment, { children: "按页" })
}, {
	depth: 2,
	url: "#覆盖",
	title: jsx(Fragment, { children: "覆盖" })
}];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h2: "h2",
		p: "p",
		strong: "strong",
		table: "table",
		tbody: "tbody",
		td: "td",
		th: "th",
		thead: "thead",
		tr: "tr",
		...props.components
	}, { Callout } = _components;
	if (!Callout) _missingMdxReference("Callout", true);
	return jsxs(Fragment, { children: [
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "sa" }),
			" · 扩展 ",
			jsx(_components.code, { children: "NewOpcodes" }),
			" · 需 CLEO + NewOpcodes 插件"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"源：",
			jsx(_components.code, { children: "sa.json" }),
			" → ",
			jsx(_components.code, { children: "NewOpcodes" }),
			"（",
			jsx(_components.code, { children: "0D00" }),
			"…",
			jsx(_components.code, { children: "0D7F" }),
			"，中间有洞）。"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"部分号与 CLEO+ 重叠（如 ",
			jsx(_components.code, { children: "0D0B" }),
			" 骨骼矩阵）；以实际加载的插件为准。"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "按页",
			children: "按页"
		}),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [jsx(_components.th, { children: "页" }), jsx(_components.th, { children: "范围概要" })] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/ext/newopcodes/matrix",
				children: "matrix"
			}) }), jsx(_components.td, { children: "矩阵 / 四元数 / 向量" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/ext/newopcodes/entity",
				children: "entity"
			}) }), jsx(_components.td, { children: "部件 / 透明度 / 碰撞 / 骨骼" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/ext/newopcodes/draw",
				children: "draw"
			}) }), jsx(_components.td, { children: "ColPoint / shape / TXD / 串" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/ext/newopcodes/misc",
				children: "misc"
			}) }), jsx(_components.td, { children: "memcpy / 线程变量 / 串" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/ext/newopcodes/fx",
				children: "fx"
			}) }), jsx(_components.td, { children: "阴影光 corona 天气 分辨率" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/ext/newopcodes/vehicle",
				children: "vehicle"
			}) }), jsx(_components.td, { children: "车灯损伤 dummy 抛射物" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/ext/newopcodes/texture",
				children: "texture"
			}) }), jsx(_components.td, { children: "BMP/PNG/DDS + 2D 精灵" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/ext/newopcodes/print",
				children: "print"
			}) }), jsx(_components.td, { children: "临时屏字" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/ext/newopcodes/atomic",
				children: "atomic"
			}) }), jsx(_components.td, { children: "Component / Atomic / 材质" })] })
		] })] }),
		"\n",
		jsxs(_components.p, { children: [
			"调用见 ",
			jsx(_components.a, {
				href: "/docs/cleo/syntax",
				children: "CLEO Lua"
			}),
			" / ",
			jsx(_components.a, {
				href: "/docs/cleo/syntax-redux",
				children: "Redux"
			}),
			"。"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "覆盖",
			children: "覆盖"
		}),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [jsx(_components.th, { children: "状态" }), jsx(_components.th, { children: "说明" })] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.strong, { children: "本目录" }) }), jsx(_components.td, { children: "上表各页全文切片已齐" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.strong, { children: "对账" }) }), jsxs(_components.td, { children: [
				"与 ",
				jsx(_components.code, { children: "sa.json" }),
				" NewOpcodes.commands 对齐；无命令空洞 ID 不写页"
			] })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.strong, { children: "重复" }) }), jsx(_components.td, { children: "与 CLEO+ 同号语义接近，勿混装冲突插件" })] })
		] })] }),
		"\n",
		jsx(Callout, {
			type: "info",
			title: "进度",
			children: jsxs(_components.p, { children: [
				"NewOpcodes 子页全齐：",
				jsx(_components.code, { children: "matrix" }),
				" · ",
				jsx(_components.code, { children: "entity" }),
				" · ",
				jsx(_components.code, { children: "draw" }),
				" · ",
				jsx(_components.code, { children: "misc" }),
				" · ",
				jsx(_components.code, { children: "fx" }),
				" · ",
				jsx(_components.code, { children: "vehicle" }),
				" · ",
				jsx(_components.code, { children: "texture" }),
				" · ",
				jsx(_components.code, { children: "print" }),
				" · ",
				jsx(_components.code, { children: "atomic" }),
				"。"
			] })
		})
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? jsx(MDXLayout, {
		...props,
		children: jsx(_createMdxContent, { ...props })
	}) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
	throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
//#endregion
export { _markdown, MDXContent as default, frontmatter, structuredData, toc };
