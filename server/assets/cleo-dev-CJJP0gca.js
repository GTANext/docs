import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/skill/cleo-dev.mdx?collection=docs
var frontmatter = {
	"title": "CLEO",
	"description": "CLEO 开发 Skill · opcode、Lua 与 Redux 硬约束与文档路由"
};
var _markdown = "\n\n对应 skill 文件：`gtamodx/cleo-dev.md`。\n\n写 **CLEO 脚本 / opcode / Lua / Redux / CLEO+ / 扩展** 时先读本页再写代码。\n\n## 文档落点 [#文档落点]\n\n| 主题          | 文档                                  |\n| ----------- | ----------------------------------- |\n| OP / Lua 约定 | [语法](/docs/cleo/syntax)             |\n| Redux       | [Redux 语法](/docs/cleo/syntax-redux) |\n| SA 核心与扩展    | [SA](/docs/cleo/sa)                 |\n| Vice City   | [VC](/docs/cleo/vc)                 |\n| GTA III     | [III](/docs/cleo/gta3)              |\n\n页内连续示例为 **OP | Lua | Redux** Tabs，同源 SBL，不是三套 API。\n\n## 硬规则 [#硬规则]\n\n* 三种形态同源；缺哪一种就写缺，不瞎补\n* 不把 opcode 表当成 `plugin::Call` 的替代\n* 不臆造 opcode / 参数顺序；以本站 Opcode 页与 SBL 为准\n* C++ ASI 见 [插件](/docs/plugins)，不要混进脚本示例\n\n## 示例形态 [#示例形态]\n\n页内 Tabs：\n\n* **OP** — 文本 opcode\n* **Lua** — CLEO Lua\n* **Redux** — CLEO Redux\n\n入口：[CLEO · 综述](/docs/cleo)。\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "对应 skill 文件：`gtamodx/cleo-dev.md`。"
		},
		{
			"heading": void 0,
			"content": "写 **CLEO 脚本 / opcode / Lua / Redux / CLEO+ / 扩展** 时先读本页再写代码。"
		},
		{
			"heading": "文档落点",
			"content": "主题"
		},
		{
			"heading": "文档落点",
			"content": "文档"
		},
		{
			"heading": "文档落点",
			"content": "OP / Lua 约定"
		},
		{
			"heading": "文档落点",
			"content": "语法"
		},
		{
			"heading": "文档落点",
			"content": "Redux"
		},
		{
			"heading": "文档落点",
			"content": "Redux 语法"
		},
		{
			"heading": "文档落点",
			"content": "SA 核心与扩展"
		},
		{
			"heading": "文档落点",
			"content": "SA"
		},
		{
			"heading": "文档落点",
			"content": "Vice City"
		},
		{
			"heading": "文档落点",
			"content": "VC"
		},
		{
			"heading": "文档落点",
			"content": "GTA III"
		},
		{
			"heading": "文档落点",
			"content": "III"
		},
		{
			"heading": "文档落点",
			"content": "页内连续示例为 **OP | Lua | Redux** Tabs，同源 SBL，不是三套 API。"
		},
		{
			"heading": "硬规则",
			"content": "三种形态同源；缺哪一种就写缺，不瞎补"
		},
		{
			"heading": "硬规则",
			"content": "不把 opcode 表当成 `plugin::Call` 的替代"
		},
		{
			"heading": "硬规则",
			"content": "不臆造 opcode / 参数顺序；以本站 Opcode 页与 SBL 为准"
		},
		{
			"heading": "硬规则",
			"content": "C++ ASI 见 插件，不要混进脚本示例"
		},
		{
			"heading": "示例形态",
			"content": "页内 Tabs："
		},
		{
			"heading": "示例形态",
			"content": "**OP** — 文本 opcode"
		},
		{
			"heading": "示例形态",
			"content": "**Lua** — CLEO Lua"
		},
		{
			"heading": "示例形态",
			"content": "**Redux** — CLEO Redux"
		},
		{
			"heading": "示例形态",
			"content": "入口：CLEO · 综述。"
		}
	],
	"headings": [
		{
			"id": "文档落点",
			"content": "文档落点"
		},
		{
			"id": "硬规则",
			"content": "硬规则"
		},
		{
			"id": "示例形态",
			"content": "示例形态"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#文档落点",
		title: jsx(Fragment, { children: "文档落点" })
	},
	{
		depth: 2,
		url: "#硬规则",
		title: jsx(Fragment, { children: "硬规则" })
	},
	{
		depth: 2,
		url: "#示例形态",
		title: jsx(Fragment, { children: "示例形态" })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h2: "h2",
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
			"对应 skill 文件：",
			jsx(_components.code, { children: "gtamodx/cleo-dev.md" }),
			"。"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"写 ",
			jsx(_components.strong, { children: "CLEO 脚本 / opcode / Lua / Redux / CLEO+ / 扩展" }),
			" 时先读本页再写代码。"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "文档落点",
			children: "文档落点"
		}),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [jsx(_components.th, { children: "主题" }), jsx(_components.th, { children: "文档" })] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "OP / Lua 约定" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/syntax",
				children: "语法"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Redux" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/syntax-redux",
				children: "Redux 语法"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "SA 核心与扩展" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa",
				children: "SA"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Vice City" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/vc",
				children: "VC"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "GTA III" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/gta3",
				children: "III"
			}) })] })
		] })] }),
		"\n",
		jsxs(_components.p, { children: [
			"页内连续示例为 ",
			jsx(_components.strong, { children: "OP | Lua | Redux" }),
			" Tabs，同源 SBL，不是三套 API。"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "硬规则",
			children: "硬规则"
		}),
		"\n",
		jsxs(_components.ul, { children: [
			"\n",
			jsx(_components.li, { children: "三种形态同源；缺哪一种就写缺，不瞎补" }),
			"\n",
			jsxs(_components.li, { children: [
				"不把 opcode 表当成 ",
				jsx(_components.code, { children: "plugin::Call" }),
				" 的替代"
			] }),
			"\n",
			jsx(_components.li, { children: "不臆造 opcode / 参数顺序；以本站 Opcode 页与 SBL 为准" }),
			"\n",
			jsxs(_components.li, { children: [
				"C++ ASI 见 ",
				jsx(_components.a, {
					href: "/docs/plugins",
					children: "插件"
				}),
				"，不要混进脚本示例"
			] }),
			"\n"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "示例形态",
			children: "示例形态"
		}),
		"\n",
		jsx(_components.p, { children: "页内 Tabs：" }),
		"\n",
		jsxs(_components.ul, { children: [
			"\n",
			jsxs(_components.li, { children: [jsx(_components.strong, { children: "OP" }), " — 文本 opcode"] }),
			"\n",
			jsxs(_components.li, { children: [jsx(_components.strong, { children: "Lua" }), " — CLEO Lua"] }),
			"\n",
			jsxs(_components.li, { children: [jsx(_components.strong, { children: "Redux" }), " — CLEO Redux"] }),
			"\n"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"入口：",
			jsx(_components.a, {
				href: "/docs/cleo",
				children: "CLEO · 综述"
			}),
			"。"
		] })
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
