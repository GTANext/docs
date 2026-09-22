import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/skill/plugins-dev.mdx?collection=docs
var frontmatter = {
	"title": "插件",
	"description": "插件开发 Skill · ASI / plugin-sdk 侧硬约束与文档路由"
};
var _markdown = "\n\n对应 skill 文件：`gtamodx/plugins-dev.md`。\n\n写 **ASI / `plugin::` / Events / Patch / Pattern / 实体类** 时先读本页再写代码。\n\n## 文档落点 [#文档落点]\n\n| 主题                  | 文档                                                                    |\n| ------------------- | --------------------------------------------------------------------- |\n| Call / Method / VMT | [PluginBase](/docs/plugins/plugin-base)                               |\n| 生命周期                | [Events](/docs/plugins/events)                                        |\n| 内存修改                | [Patch](/docs/plugins/patch)                                          |\n| 特征码                 | [Pattern](/docs/plugins/pattern)                                      |\n| C++ 调 SCM           | [Command](/docs/plugins/commands)                                     |\n| 扩展与工具               | [extensions](/docs/plugins/extensions) · [utils](/docs/plugins/utils) |\n| 附加数据                | [Extender](/docs/plugins/extender)                                    |\n| 实体 API              | [entities](/docs/plugins/entities)                                    |\n| 组合示例                | [recipes](/docs/plugins/recipes)                                      |\n\n## 硬规则 [#硬规则]\n\n* 签名以文档与本地头文件为准，不臆造方法 / 事件名 / 地址\n* CLEO Lua/Redux **不能**当可编译 C++ 用\n* 本站是 **精选**，不是完整 plugin-sdk 树；长尾看本地头\n\n## 示例形态 [#示例形态]\n\n```cpp\n#include \"plugin.h\"\nusing namespace plugin;\n\n// Events / Call / Patch 等见对应文档页\n```\n\n跨到 opcode 语义时对照 [CLEO](/docs/cleo)，调用侧仍用 `plugin::Command`。\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "对应 skill 文件：`gtamodx/plugins-dev.md`。"
		},
		{
			"heading": void 0,
			"content": "写 **ASI / `plugin::` / Events / Patch / Pattern / 实体类** 时先读本页再写代码。"
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
			"content": "Call / Method / VMT"
		},
		{
			"heading": "文档落点",
			"content": "PluginBase"
		},
		{
			"heading": "文档落点",
			"content": "生命周期"
		},
		{
			"heading": "文档落点",
			"content": "Events"
		},
		{
			"heading": "文档落点",
			"content": "内存修改"
		},
		{
			"heading": "文档落点",
			"content": "Patch"
		},
		{
			"heading": "文档落点",
			"content": "特征码"
		},
		{
			"heading": "文档落点",
			"content": "Pattern"
		},
		{
			"heading": "文档落点",
			"content": "C++ 调 SCM"
		},
		{
			"heading": "文档落点",
			"content": "Command"
		},
		{
			"heading": "文档落点",
			"content": "扩展与工具"
		},
		{
			"heading": "文档落点",
			"content": "extensions · utils"
		},
		{
			"heading": "文档落点",
			"content": "附加数据"
		},
		{
			"heading": "文档落点",
			"content": "Extender"
		},
		{
			"heading": "文档落点",
			"content": "实体 API"
		},
		{
			"heading": "文档落点",
			"content": "entities"
		},
		{
			"heading": "文档落点",
			"content": "组合示例"
		},
		{
			"heading": "文档落点",
			"content": "recipes"
		},
		{
			"heading": "硬规则",
			"content": "签名以文档与本地头文件为准，不臆造方法 / 事件名 / 地址"
		},
		{
			"heading": "硬规则",
			"content": "CLEO Lua/Redux **不能**当可编译 C++ 用"
		},
		{
			"heading": "硬规则",
			"content": "本站是 **精选**，不是完整 plugin-sdk 树；长尾看本地头"
		},
		{
			"heading": "示例形态",
			"content": "跨到 opcode 语义时对照 CLEO，调用侧仍用 `plugin::Command`。"
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
		pre: "pre",
		span: "span",
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
			jsx(_components.code, { children: "gtamodx/plugins-dev.md" }),
			"。"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"写 ",
			jsxs(_components.strong, { children: [
				"ASI / ",
				jsx(_components.code, { children: "plugin::" }),
				" / Events / Patch / Pattern / 实体类"
			] }),
			" 时先读本页再写代码。"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "文档落点",
			children: "文档落点"
		}),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [jsx(_components.th, { children: "主题" }), jsx(_components.th, { children: "文档" })] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Call / Method / VMT" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/plugins/plugin-base",
				children: "PluginBase"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "生命周期" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/plugins/events",
				children: "Events"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "内存修改" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/plugins/patch",
				children: "Patch"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "特征码" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/plugins/pattern",
				children: "Pattern"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "C++ 调 SCM" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/plugins/commands",
				children: "Command"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "扩展与工具" }), jsxs(_components.td, { children: [
				jsx(_components.a, {
					href: "/docs/plugins/extensions",
					children: "extensions"
				}),
				" · ",
				jsx(_components.a, {
					href: "/docs/plugins/utils",
					children: "utils"
				})
			] })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "附加数据" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/plugins/extender",
				children: "Extender"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "实体 API" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/plugins/entities",
				children: "entities"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "组合示例" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/plugins/recipes",
				children: "recipes"
			}) })] })
		] })] }),
		"\n",
		jsx(_components.h2, {
			id: "硬规则",
			children: "硬规则"
		}),
		"\n",
		jsxs(_components.ul, { children: [
			"\n",
			jsx(_components.li, { children: "签名以文档与本地头文件为准，不臆造方法 / 事件名 / 地址" }),
			"\n",
			jsxs(_components.li, { children: [
				"CLEO Lua/Redux ",
				jsx(_components.strong, { children: "不能" }),
				"当可编译 C++ 用"
			] }),
			"\n",
			jsxs(_components.li, { children: [
				"本站是 ",
				jsx(_components.strong, { children: "精选" }),
				"，不是完整 plugin-sdk 树；长尾看本地头"
			] }),
			"\n"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "示例形态",
			children: "示例形态"
		}),
		"\n",
		jsx(Fragment, { children: jsx(_components.pre, {
			className: "shiki shiki-themes github-light github-dark",
			style: {
				"--shiki-light": "#24292e",
				"--shiki-dark": "#e1e4e8",
				"--shiki-light-bg": "#fff",
				"--shiki-dark-bg": "#24292e"
			},
			tabIndex: "0",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z\" fill=\"currentColor\" /></svg>",
			children: jsxs(_components.code, { children: [
				jsxs(_components.span, {
					className: "line",
					children: [jsx(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "#include"
					}), jsx(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " \"plugin.h\""
					})]
				}),
				"\n",
				jsxs(_components.span, {
					className: "line",
					children: [
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "using"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " namespace"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " plugin"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ";"
						})
					]
				}),
				"\n",
				jsx(_components.span, { className: "line" }),
				"\n",
				jsx(_components.span, {
					className: "line",
					children: jsx(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// Events / Call / Patch 等见对应文档页"
					})
				})
			] })
		}) }),
		"\n",
		jsxs(_components.p, { children: [
			"跨到 opcode 语义时对照 ",
			jsx(_components.a, {
				href: "/docs/cleo",
				children: "CLEO"
			}),
			"，调用侧仍用 ",
			jsx(_components.code, { children: "plugin::Command" }),
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
