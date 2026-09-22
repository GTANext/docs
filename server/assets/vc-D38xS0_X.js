import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/cleo/vc/index.mdx?collection=docs
var frontmatter = {
	"title": "Vice City",
	"description": "Vice City CLEO 扩展 opcode 按类型分页"
};
var _markdown = "\n\n`vc` · 扩展 `CLEO` · 需 CLEO\n\nVice City 与 SA 同名 op 语义接近。JSON 里常见 **两套 id**：\n\n* 经典：`05xx` / `06xx`（老 CLEO）\n* 现代：`0Axx`（与 SA 对齐）\n\n页内签名 **优先现代 id**；经典别名写在 text 注释。地址以 VC 为准。\n\n源：`sanny-builder-library/vc/vc.json` + `vc/snippets/CLEO/`\n\n写法见 [Lua](/docs/cleo/syntax) / [Redux](/docs/cleo/syntax-redux)。\n\n| 类型             | 页                              |\n| -------------- | ------------------------------ |\n| Memory         | [memory](/docs/cleo/vc/memory) |\n| 算术             | [arith](/docs/cleo/vc/arith)   |\n| 自定义脚本          | [script](/docs/cleo/vc/script) |\n| File / Fs      | [file](/docs/cleo/vc/file)     |\n| DynamicLibrary | [dll](/docs/cleo/vc/dll)       |\n| Game / Pad     | [game](/docs/cleo/vc/game)     |\n| Entity         | [entity](/docs/cleo/vc/entity) |\n| Text           | [text](/docs/cleo/vc/text)     |\n| Math           | [math](/docs/cleo/vc/math)     |\n| 杂项             | [misc](/docs/cleo/vc/misc)     |\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "`vc` · 扩展 `CLEO` · 需 CLEO"
		},
		{
			"heading": void 0,
			"content": "Vice City 与 SA 同名 op 语义接近。JSON 里常见 **两套 id**："
		},
		{
			"heading": void 0,
			"content": "经典：`05xx` / `06xx`（老 CLEO）"
		},
		{
			"heading": void 0,
			"content": "现代：`0Axx`（与 SA 对齐）"
		},
		{
			"heading": void 0,
			"content": "页内签名 **优先现代 id**；经典别名写在 text 注释。地址以 VC 为准。"
		},
		{
			"heading": void 0,
			"content": "源：`sanny-builder-library/vc/vc.json` + `vc/snippets/CLEO/`"
		},
		{
			"heading": void 0,
			"content": "写法见 Lua / Redux。"
		},
		{
			"heading": void 0,
			"content": "类型"
		},
		{
			"heading": void 0,
			"content": "页"
		},
		{
			"heading": void 0,
			"content": "Memory"
		},
		{
			"heading": void 0,
			"content": "memory"
		},
		{
			"heading": void 0,
			"content": "算术"
		},
		{
			"heading": void 0,
			"content": "arith"
		},
		{
			"heading": void 0,
			"content": "自定义脚本"
		},
		{
			"heading": void 0,
			"content": "script"
		},
		{
			"heading": void 0,
			"content": "File / Fs"
		},
		{
			"heading": void 0,
			"content": "file"
		},
		{
			"heading": void 0,
			"content": "DynamicLibrary"
		},
		{
			"heading": void 0,
			"content": "dll"
		},
		{
			"heading": void 0,
			"content": "Game / Pad"
		},
		{
			"heading": void 0,
			"content": "game"
		},
		{
			"heading": void 0,
			"content": "Entity"
		},
		{
			"heading": void 0,
			"content": "entity"
		},
		{
			"heading": void 0,
			"content": "Text"
		},
		{
			"heading": void 0,
			"content": "text"
		},
		{
			"heading": void 0,
			"content": "Math"
		},
		{
			"heading": void 0,
			"content": "math"
		},
		{
			"heading": void 0,
			"content": "杂项"
		},
		{
			"heading": void 0,
			"content": "misc"
		}
	],
	"headings": []
};
var toc = [];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		li: "li",
		p: "p",
		strong: "strong",
		table: "table",
		tbody: "tbody",
		td: "td",
		th: "th",
		thead: "thead",
		tr: "tr",
		ul: "ul",
		...props.components
	};
	return jsxs(Fragment, { children: [
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "vc" }),
			" · 扩展 ",
			jsx(_components.code, { children: "CLEO" }),
			" · 需 CLEO"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"Vice City 与 SA 同名 op 语义接近。JSON 里常见 ",
			jsx(_components.strong, { children: "两套 id" }),
			"："
		] }),
		"\n",
		jsxs(_components.ul, { children: [
			"\n",
			jsxs(_components.li, { children: [
				"经典：",
				jsx(_components.code, { children: "05xx" }),
				" / ",
				jsx(_components.code, { children: "06xx" }),
				"（老 CLEO）"
			] }),
			"\n",
			jsxs(_components.li, { children: [
				"现代：",
				jsx(_components.code, { children: "0Axx" }),
				"（与 SA 对齐）"
			] }),
			"\n"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"页内签名 ",
			jsx(_components.strong, { children: "优先现代 id" }),
			"；经典别名写在 text 注释。地址以 VC 为准。"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"源：",
			jsx(_components.code, { children: "sanny-builder-library/vc/vc.json" }),
			" + ",
			jsx(_components.code, { children: "vc/snippets/CLEO/" })
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"写法见 ",
			jsx(_components.a, {
				href: "/docs/cleo/syntax",
				children: "Lua"
			}),
			" / ",
			jsx(_components.a, {
				href: "/docs/cleo/syntax-redux",
				children: "Redux"
			}),
			"。"
		] }),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [jsx(_components.th, { children: "类型" }), jsx(_components.th, { children: "页" })] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Memory" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/vc/memory",
				children: "memory"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "算术" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/vc/arith",
				children: "arith"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "自定义脚本" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/vc/script",
				children: "script"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "File / Fs" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/vc/file",
				children: "file"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "DynamicLibrary" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/vc/dll",
				children: "dll"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Game / Pad" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/vc/game",
				children: "game"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Entity" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/vc/entity",
				children: "entity"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Text" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/vc/text",
				children: "text"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Math" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/vc/math",
				children: "math"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "杂项" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/vc/misc",
				children: "misc"
			}) })] })
		] })] })
	] });
}
function MDXContent(props = {}) {
	const { wrapper: MDXLayout } = props.components || {};
	return MDXLayout ? jsx(MDXLayout, {
		...props,
		children: jsx(_createMdxContent, { ...props })
	}) : _createMdxContent(props);
}
//#endregion
export { _markdown, MDXContent as default, frontmatter, structuredData, toc };
