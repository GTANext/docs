import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/cleo/gta3/index.mdx?collection=docs
var frontmatter = {
	"title": "GTA III",
	"description": "GTA III CLEO 扩展 opcode 按类型分页"
};
var _markdown = "\n\n`gta3` · 扩展 `CLEO` · 需 CLEO\n\nIII 的 CLEO 表含：\n\n* 一批补进扩展的原生命令（Player/Object 偏移等）\n* 与 VC/SA 对齐的 `05xx` 经典号 + `0Axx` 现代号\n\n页内优先现代 id；地址以 III 为准。\n\n源：`sanny-builder-library/gta3/gta3.json`\n\n写法见 [Lua](/docs/cleo/syntax) / [Redux](/docs/cleo/syntax-redux)。\n\n| 类型             | 页                                |\n| -------------- | -------------------------------- |\n| Memory         | [memory](/docs/cleo/gta3/memory) |\n| 算术             | [arith](/docs/cleo/gta3/arith)   |\n| 自定义脚本          | [script](/docs/cleo/gta3/script) |\n| File / Fs      | [file](/docs/cleo/gta3/file)     |\n| DynamicLibrary | [dll](/docs/cleo/gta3/dll)       |\n| Game / Pad     | [game](/docs/cleo/gta3/game)     |\n| Entity         | [entity](/docs/cleo/gta3/entity) |\n| Text           | [text](/docs/cleo/gta3/text)     |\n| Math           | [math](/docs/cleo/gta3/math)     |\n| 杂项             | [misc](/docs/cleo/gta3/misc)     |\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "`gta3` · 扩展 `CLEO` · 需 CLEO"
		},
		{
			"heading": void 0,
			"content": "III 的 CLEO 表含："
		},
		{
			"heading": void 0,
			"content": "一批补进扩展的原生命令（Player/Object 偏移等）"
		},
		{
			"heading": void 0,
			"content": "与 VC/SA 对齐的 `05xx` 经典号 + `0Axx` 现代号"
		},
		{
			"heading": void 0,
			"content": "页内优先现代 id；地址以 III 为准。"
		},
		{
			"heading": void 0,
			"content": "源：`sanny-builder-library/gta3/gta3.json`"
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
			jsx(_components.code, { children: "gta3" }),
			" · 扩展 ",
			jsx(_components.code, { children: "CLEO" }),
			" · 需 CLEO"
		] }),
		"\n",
		jsx(_components.p, { children: "III 的 CLEO 表含：" }),
		"\n",
		jsxs(_components.ul, { children: [
			"\n",
			jsx(_components.li, { children: "一批补进扩展的原生命令（Player/Object 偏移等）" }),
			"\n",
			jsxs(_components.li, { children: [
				"与 VC/SA 对齐的 ",
				jsx(_components.code, { children: "05xx" }),
				" 经典号 + ",
				jsx(_components.code, { children: "0Axx" }),
				" 现代号"
			] }),
			"\n"
		] }),
		"\n",
		jsx(_components.p, { children: "页内优先现代 id；地址以 III 为准。" }),
		"\n",
		jsxs(_components.p, { children: ["源：", jsx(_components.code, { children: "sanny-builder-library/gta3/gta3.json" })] }),
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
				href: "/docs/cleo/gta3/memory",
				children: "memory"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "算术" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/gta3/arith",
				children: "arith"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "自定义脚本" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/gta3/script",
				children: "script"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "File / Fs" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/gta3/file",
				children: "file"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "DynamicLibrary" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/gta3/dll",
				children: "dll"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Game / Pad" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/gta3/game",
				children: "game"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Entity" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/gta3/entity",
				children: "entity"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Text" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/gta3/text",
				children: "text"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Math" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/gta3/math",
				children: "math"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "杂项" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/gta3/misc",
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
