import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/skill/index.mdx?collection=docs
var frontmatter = {
	"title": "综述",
	"description": "Cursor / IDE 用 gtamodx skill 路由与边界"
};
var _markdown = "\n\n面向 **写代码的 agent / 开发者**：约束 API 边界、选对文档分区。\n\n## Skill [#skill]\n\n| Skill                          | 适用场景                                                   |\n| ------------------------------ | ------------------------------------------------------ |\n| [插件](/docs/skill/plugins-dev)  | ASI · `plugin::` · Events · Patch · Pattern · 实体 C++   |\n| [XBase](/docs/skill/xbase-dev) | 公共 API · Core 生命周期 · Host / Runtime / Platform · 三版本后端 |\n| [CLEO](/docs/skill/cleo-dev)   | opcode · Lua · Redux · CLEO+ / default / ext           |\n\n## 硬边界 [#硬边界]\n\n| 需求                            | 正确分区                                                           | 别混                         |\n| ----------------------------- | -------------------------------------------------------------- | -------------------------- |\n| XBase 公共功能                    | [XBase](/docs/xbase)                                           | 从宿主直接访问 plugin-sdk 指针或版本地址 |\n| XBase 私有后端                    | [XBase](/docs/skill/xbase-dev) + [插件](/docs/skill/plugins-dev) | 把底层类型泄漏到公共 API             |\n| 脚本 opcode（`0A8C`、`createCar`） | [CLEO](/docs/cleo)                                             | 当 C++ 能编进 ASI              |\n| C++ 调 SCM                     | [Command](/docs/plugins/commands)                              | 把 Lua/JS 贴进 `.cpp`         |\n| 调游戏函数 / 补丁 / 事件               | [插件](/docs/plugins)                                            | 用 opcode 表替代 Call          |\n| 实体挂数据                         | [Extender](/docs/plugins/extender)                             | 和 CLEO handle 混用           |\n\n## 文档入口 [#文档入口]\n\n* 插件：[综述](/docs/plugins)\n* XBase：[综述](/docs/xbase)\n* CLEO：[综述](/docs/cleo)\n\n方法名与签名 **以对应文档页为准**，禁止臆造。\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "面向 **写代码的 agent / 开发者**：约束 API 边界、选对文档分区。"
		},
		{
			"heading": "skill",
			"content": "Skill"
		},
		{
			"heading": "skill",
			"content": "适用场景"
		},
		{
			"heading": "skill",
			"content": "插件"
		},
		{
			"heading": "skill",
			"content": "ASI · `plugin::` · Events · Patch · Pattern · 实体 C++"
		},
		{
			"heading": "skill",
			"content": "XBase"
		},
		{
			"heading": "skill",
			"content": "公共 API · Core 生命周期 · Host / Runtime / Platform · 三版本后端"
		},
		{
			"heading": "skill",
			"content": "CLEO"
		},
		{
			"heading": "skill",
			"content": "opcode · Lua · Redux · CLEO+ / default / ext"
		},
		{
			"heading": "硬边界",
			"content": "需求"
		},
		{
			"heading": "硬边界",
			"content": "正确分区"
		},
		{
			"heading": "硬边界",
			"content": "别混"
		},
		{
			"heading": "硬边界",
			"content": "XBase 公共功能"
		},
		{
			"heading": "硬边界",
			"content": "XBase"
		},
		{
			"heading": "硬边界",
			"content": "从宿主直接访问 plugin-sdk 指针或版本地址"
		},
		{
			"heading": "硬边界",
			"content": "XBase 私有后端"
		},
		{
			"heading": "硬边界",
			"content": "XBase + 插件"
		},
		{
			"heading": "硬边界",
			"content": "把底层类型泄漏到公共 API"
		},
		{
			"heading": "硬边界",
			"content": "脚本 opcode（`0A8C`、`createCar`）"
		},
		{
			"heading": "硬边界",
			"content": "CLEO"
		},
		{
			"heading": "硬边界",
			"content": "当 C++ 能编进 ASI"
		},
		{
			"heading": "硬边界",
			"content": "C++ 调 SCM"
		},
		{
			"heading": "硬边界",
			"content": "Command"
		},
		{
			"heading": "硬边界",
			"content": "把 Lua/JS 贴进 `.cpp`"
		},
		{
			"heading": "硬边界",
			"content": "调游戏函数 / 补丁 / 事件"
		},
		{
			"heading": "硬边界",
			"content": "插件"
		},
		{
			"heading": "硬边界",
			"content": "用 opcode 表替代 Call"
		},
		{
			"heading": "硬边界",
			"content": "实体挂数据"
		},
		{
			"heading": "硬边界",
			"content": "Extender"
		},
		{
			"heading": "硬边界",
			"content": "和 CLEO handle 混用"
		},
		{
			"heading": "文档入口",
			"content": "插件：综述"
		},
		{
			"heading": "文档入口",
			"content": "XBase：综述"
		},
		{
			"heading": "文档入口",
			"content": "CLEO：综述"
		},
		{
			"heading": "文档入口",
			"content": "方法名与签名 **以对应文档页为准**，禁止臆造。"
		}
	],
	"headings": [
		{
			"id": "skill",
			"content": "Skill"
		},
		{
			"id": "硬边界",
			"content": "硬边界"
		},
		{
			"id": "文档入口",
			"content": "文档入口"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#skill",
		title: jsx(Fragment, { children: "Skill" })
	},
	{
		depth: 2,
		url: "#硬边界",
		title: jsx(Fragment, { children: "硬边界" })
	},
	{
		depth: 2,
		url: "#文档入口",
		title: jsx(Fragment, { children: "文档入口" })
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
			"面向 ",
			jsx(_components.strong, { children: "写代码的 agent / 开发者" }),
			"：约束 API 边界、选对文档分区。"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "skill",
			children: "Skill"
		}),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [jsx(_components.th, { children: "Skill" }), jsx(_components.th, { children: "适用场景" })] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/skill/plugins-dev",
				children: "插件"
			}) }), jsxs(_components.td, { children: [
				"ASI · ",
				jsx(_components.code, { children: "plugin::" }),
				" · Events · Patch · Pattern · 实体 C++"
			] })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/skill/xbase-dev",
				children: "XBase"
			}) }), jsx(_components.td, { children: "公共 API · Core 生命周期 · Host / Runtime / Platform · 三版本后端" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/skill/cleo-dev",
				children: "CLEO"
			}) }), jsx(_components.td, { children: "opcode · Lua · Redux · CLEO+ / default / ext" })] })
		] })] }),
		"\n",
		jsx(_components.h2, {
			id: "硬边界",
			children: "硬边界"
		}),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [
			jsx(_components.th, { children: "需求" }),
			jsx(_components.th, { children: "正确分区" }),
			jsx(_components.th, { children: "别混" })
		] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "XBase 公共功能" }),
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/xbase",
					children: "XBase"
				}) }),
				jsx(_components.td, { children: "从宿主直接访问 plugin-sdk 指针或版本地址" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "XBase 私有后端" }),
				jsxs(_components.td, { children: [
					jsx(_components.a, {
						href: "/docs/skill/xbase-dev",
						children: "XBase"
					}),
					" + ",
					jsx(_components.a, {
						href: "/docs/skill/plugins-dev",
						children: "插件"
					})
				] }),
				jsx(_components.td, { children: "把底层类型泄漏到公共 API" })
			] }),
			jsxs(_components.tr, { children: [
				jsxs(_components.td, { children: [
					"脚本 opcode（",
					jsx(_components.code, { children: "0A8C" }),
					"、",
					jsx(_components.code, { children: "createCar" }),
					"）"
				] }),
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo",
					children: "CLEO"
				}) }),
				jsx(_components.td, { children: "当 C++ 能编进 ASI" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "C++ 调 SCM" }),
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/plugins/commands",
					children: "Command"
				}) }),
				jsxs(_components.td, { children: ["把 Lua/JS 贴进 ", jsx(_components.code, { children: ".cpp" })] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "调游戏函数 / 补丁 / 事件" }),
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/plugins",
					children: "插件"
				}) }),
				jsx(_components.td, { children: "用 opcode 表替代 Call" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "实体挂数据" }),
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/plugins/extender",
					children: "Extender"
				}) }),
				jsx(_components.td, { children: "和 CLEO handle 混用" })
			] })
		] })] }),
		"\n",
		jsx(_components.h2, {
			id: "文档入口",
			children: "文档入口"
		}),
		"\n",
		jsxs(_components.ul, { children: [
			"\n",
			jsxs(_components.li, { children: ["插件：", jsx(_components.a, {
				href: "/docs/plugins",
				children: "综述"
			})] }),
			"\n",
			jsxs(_components.li, { children: ["XBase：", jsx(_components.a, {
				href: "/docs/xbase",
				children: "综述"
			})] }),
			"\n",
			jsxs(_components.li, { children: ["CLEO：", jsx(_components.a, {
				href: "/docs/cleo",
				children: "综述"
			})] }),
			"\n"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"方法名与签名 ",
			jsx(_components.strong, { children: "以对应文档页为准" }),
			"，禁止臆造。"
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
