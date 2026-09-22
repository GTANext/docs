import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/cleo/index.mdx?collection=docs
var frontmatter = {
	"title": "综述",
	"description": "脚本侧 opcode 调用文档入口"
};
var _markdown = "\n\n脚本侧 **opcode 调用** 文档。\n\n源数据：[sanny-builder-library](https://github.com/sannybuilder/library)（`sa.json` / docs / snippets）。\n\nOP · CLEO Lua · CLEO Redux **同源** SBL Script 表，不是外站另一套 API。\n\n<Callout type=\"warn\" title=\"与插件的边界\">\n  这里是 **opcode**（Lua / Redux / OP 文本）。C++ 的 `plugin::Command` 见 [插件 · Command](/docs/plugins/commands)。\n</Callout>\n\n## 本站覆盖 [#本站覆盖]\n\n| 状态                | 内容                                                                                                             |\n| ----------------- | -------------------------------------------------------------------------------------------------------------- |\n| **语法**            | [OP / Lua](/docs/cleo/syntax) · [Redux](/docs/cleo/syntax-redux)                                               |\n| **已齐 · SA**       | CLEO 类型页 · [default](/docs/cleo/sa/default)（含 misc 879）· [CLEO+](/docs/cleo/sa/plus) · [扩展](/docs/cleo/sa/ext) |\n| **已齐 · VC / III** | [VC](/docs/cleo/vc) · [GTA III](/docs/cleo/gta3)                                                               |\n| **未收录**           | `native.json` Code 全文                                                                                          |\n| **别混**            | C++ ASI 在 [插件](/docs/plugins)                                                                                  |\n\n完整表仍以 [library.sannybuilder.com](https://library.sannybuilder.com/#/sa) 为准。\n\n## 怎么读 [#怎么读]\n\n```\n装 CLEO（+ 需要时 CLEO+ / 扩展）\n  → 写 .lua 或 Redux 脚本\n  → 调本站按表列出的 op\n```\n\n| 页                                     | 内容                              |\n| ------------------------------------- | ------------------------------- |\n| [语法 · OP / Lua](/docs/cleo/syntax)    | 三种形态、Lua 约定                     |\n| [语法 · Redux](/docs/cleo/syntax-redux) | JS 调用、`enums.js`、native 边界      |\n| [SA · Memory](/docs/cleo/sa/memory)   | 读写内存、指针、调用原生                    |\n| [SA · default](/docs/cleo/sa/default) | SCM 原生按 class                   |\n| [SA · CLEO+](/docs/cleo/sa/plus)      | CLEO+ 扩展                        |\n| [SA · 其它扩展](/docs/cleo/sa/ext)        | NewOpcodes / SAMPFUNCS / imgui… |\n| [VC](/docs/cleo/vc)                   | Vice City CLEO 类型页              |\n| [GTA III](/docs/cleo/gta3)            | III CLEO 类型页                    |\n\n## 分工 [#分工]\n\n```\nplugins/  → ASI + plugin-sdk\ncleo/     → opcode（OP + Lua + Redux 调用形态）\n```\n\n## 导航 [#导航]\n\n<Cards>\n  <Card title=\"OP / Lua 语法\" href=\"/docs/cleo/syntax\" description=\"三种形态与 Lua 约定\" />\n\n  <Card title=\"Redux 语法\" href=\"/docs/cleo/syntax-redux\" description=\"Class.member / native\" />\n\n  <Card title=\"Memory\" href=\"/docs/cleo/sa/memory\" description=\"读写内存与原生调用\" />\n\n  <Card title=\"插件\" href=\"/docs/plugins\" description=\"C++ ASI 侧\" />\n</Cards>\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "脚本侧 **opcode 调用** 文档。"
		},
		{
			"heading": void 0,
			"content": "源数据：sanny-builder-library（`sa.json` / docs / snippets）。"
		},
		{
			"heading": void 0,
			"content": "OP · CLEO Lua · CLEO Redux **同源** SBL Script 表，不是外站另一套 API。"
		},
		{
			"heading": void 0,
			"content": "这里是 **opcode**（Lua / Redux / OP 文本）。C++ 的 `plugin::Command` 见 插件 · Command。"
		},
		{
			"heading": "本站覆盖",
			"content": "状态"
		},
		{
			"heading": "本站覆盖",
			"content": "内容"
		},
		{
			"heading": "本站覆盖",
			"content": "**语法**"
		},
		{
			"heading": "本站覆盖",
			"content": "OP / Lua · Redux"
		},
		{
			"heading": "本站覆盖",
			"content": "**已齐 · SA**"
		},
		{
			"heading": "本站覆盖",
			"content": "CLEO 类型页 · default（含 misc 879）· CLEO+ · 扩展"
		},
		{
			"heading": "本站覆盖",
			"content": "**已齐 · VC / III**"
		},
		{
			"heading": "本站覆盖",
			"content": "VC · GTA III"
		},
		{
			"heading": "本站覆盖",
			"content": "**未收录**"
		},
		{
			"heading": "本站覆盖",
			"content": "`native.json` Code 全文"
		},
		{
			"heading": "本站覆盖",
			"content": "**别混**"
		},
		{
			"heading": "本站覆盖",
			"content": "C++ ASI 在 插件"
		},
		{
			"heading": "本站覆盖",
			"content": "完整表仍以 library.sannybuilder.com 为准。"
		},
		{
			"heading": "怎么读",
			"content": "页"
		},
		{
			"heading": "怎么读",
			"content": "内容"
		},
		{
			"heading": "怎么读",
			"content": "语法 · OP / Lua"
		},
		{
			"heading": "怎么读",
			"content": "三种形态、Lua 约定"
		},
		{
			"heading": "怎么读",
			"content": "语法 · Redux"
		},
		{
			"heading": "怎么读",
			"content": "JS 调用、`enums.js`、native 边界"
		},
		{
			"heading": "怎么读",
			"content": "SA · Memory"
		},
		{
			"heading": "怎么读",
			"content": "读写内存、指针、调用原生"
		},
		{
			"heading": "怎么读",
			"content": "SA · default"
		},
		{
			"heading": "怎么读",
			"content": "SCM 原生按 class"
		},
		{
			"heading": "怎么读",
			"content": "SA · CLEO+"
		},
		{
			"heading": "怎么读",
			"content": "CLEO+ 扩展"
		},
		{
			"heading": "怎么读",
			"content": "SA · 其它扩展"
		},
		{
			"heading": "怎么读",
			"content": "NewOpcodes / SAMPFUNCS / imgui…"
		},
		{
			"heading": "怎么读",
			"content": "VC"
		},
		{
			"heading": "怎么读",
			"content": "Vice City CLEO 类型页"
		},
		{
			"heading": "怎么读",
			"content": "GTA III"
		},
		{
			"heading": "怎么读",
			"content": "III CLEO 类型页"
		},
		{
			"heading": "导航",
			"content": "<Card title=\"OP / Lua 语法\" href=\"/docs/cleo/syntax\" description=\"三种形态与 Lua 约定\" />"
		},
		{
			"heading": "导航",
			"content": "<Card title=\"Redux 语法\" href=\"/docs/cleo/syntax-redux\" description=\"Class.member / native\" />"
		},
		{
			"heading": "导航",
			"content": "<Card title=\"Memory\" href=\"/docs/cleo/sa/memory\" description=\"读写内存与原生调用\" />"
		},
		{
			"heading": "导航",
			"content": "<Card title=\"插件\" href=\"/docs/plugins\" description=\"C++ ASI 侧\" />"
		}
	],
	"headings": [
		{
			"id": "本站覆盖",
			"content": "本站覆盖"
		},
		{
			"id": "怎么读",
			"content": "怎么读"
		},
		{
			"id": "分工",
			"content": "分工"
		},
		{
			"id": "导航",
			"content": "导航"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#本站覆盖",
		title: jsx(Fragment, { children: "本站覆盖" })
	},
	{
		depth: 2,
		url: "#怎么读",
		title: jsx(Fragment, { children: "怎么读" })
	},
	{
		depth: 2,
		url: "#分工",
		title: jsx(Fragment, { children: "分工" })
	},
	{
		depth: 2,
		url: "#导航",
		title: jsx(Fragment, { children: "导航" })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h2: "h2",
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
		...props.components
	}, { Callout, Card, Cards } = _components;
	if (!Callout) _missingMdxReference("Callout", true);
	if (!Card) _missingMdxReference("Card", true);
	if (!Cards) _missingMdxReference("Cards", true);
	return jsxs(Fragment, { children: [
		jsxs(_components.p, { children: [
			"脚本侧 ",
			jsx(_components.strong, { children: "opcode 调用" }),
			" 文档。"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"源数据：",
			jsx(_components.a, {
				href: "https://github.com/sannybuilder/library",
				children: "sanny-builder-library"
			}),
			"（",
			jsx(_components.code, { children: "sa.json" }),
			" / docs / snippets）。"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"OP · CLEO Lua · CLEO Redux ",
			jsx(_components.strong, { children: "同源" }),
			" SBL Script 表，不是外站另一套 API。"
		] }),
		"\n",
		jsx(Callout, {
			type: "warn",
			title: "与插件的边界",
			children: jsxs(_components.p, { children: [
				"这里是 ",
				jsx(_components.strong, { children: "opcode" }),
				"（Lua / Redux / OP 文本）。C++ 的 ",
				jsx(_components.code, { children: "plugin::Command" }),
				" 见 ",
				jsx(_components.a, {
					href: "/docs/plugins/commands",
					children: "插件 · Command"
				}),
				"。"
			] })
		}),
		"\n",
		jsx(_components.h2, {
			id: "本站覆盖",
			children: "本站覆盖"
		}),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [jsx(_components.th, { children: "状态" }), jsx(_components.th, { children: "内容" })] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.strong, { children: "语法" }) }), jsxs(_components.td, { children: [
				jsx(_components.a, {
					href: "/docs/cleo/syntax",
					children: "OP / Lua"
				}),
				" · ",
				jsx(_components.a, {
					href: "/docs/cleo/syntax-redux",
					children: "Redux"
				})
			] })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.strong, { children: "已齐 · SA" }) }), jsxs(_components.td, { children: [
				"CLEO 类型页 · ",
				jsx(_components.a, {
					href: "/docs/cleo/sa/default",
					children: "default"
				}),
				"（含 misc 879）· ",
				jsx(_components.a, {
					href: "/docs/cleo/sa/plus",
					children: "CLEO+"
				}),
				" · ",
				jsx(_components.a, {
					href: "/docs/cleo/sa/ext",
					children: "扩展"
				})
			] })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.strong, { children: "已齐 · VC / III" }) }), jsxs(_components.td, { children: [
				jsx(_components.a, {
					href: "/docs/cleo/vc",
					children: "VC"
				}),
				" · ",
				jsx(_components.a, {
					href: "/docs/cleo/gta3",
					children: "GTA III"
				})
			] })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.strong, { children: "未收录" }) }), jsxs(_components.td, { children: [jsx(_components.code, { children: "native.json" }), " Code 全文"] })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.strong, { children: "别混" }) }), jsxs(_components.td, { children: ["C++ ASI 在 ", jsx(_components.a, {
				href: "/docs/plugins",
				children: "插件"
			})] })] })
		] })] }),
		"\n",
		jsxs(_components.p, { children: [
			"完整表仍以 ",
			jsx(_components.a, {
				href: "https://library.sannybuilder.com/#/sa",
				children: "library.sannybuilder.com"
			}),
			" 为准。"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "怎么读",
			children: "怎么读"
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
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
			children: jsxs(_components.code, { children: [
				jsx(_components.span, {
					className: "line",
					children: jsx(_components.span, { children: "装 CLEO（+ 需要时 CLEO+ / 扩展）" })
				}),
				"\n",
				jsx(_components.span, {
					className: "line",
					children: jsx(_components.span, { children: "  → 写 .lua 或 Redux 脚本" })
				}),
				"\n",
				jsx(_components.span, {
					className: "line",
					children: jsx(_components.span, { children: "  → 调本站按表列出的 op" })
				})
			] })
		}) }),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [jsx(_components.th, { children: "页" }), jsx(_components.th, { children: "内容" })] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/syntax",
				children: "语法 · OP / Lua"
			}) }), jsx(_components.td, { children: "三种形态、Lua 约定" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/syntax-redux",
				children: "语法 · Redux"
			}) }), jsxs(_components.td, { children: [
				"JS 调用、",
				jsx(_components.code, { children: "enums.js" }),
				"、native 边界"
			] })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/memory",
				children: "SA · Memory"
			}) }), jsx(_components.td, { children: "读写内存、指针、调用原生" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default",
				children: "SA · default"
			}) }), jsx(_components.td, { children: "SCM 原生按 class" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/plus",
				children: "SA · CLEO+"
			}) }), jsx(_components.td, { children: "CLEO+ 扩展" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/ext",
				children: "SA · 其它扩展"
			}) }), jsx(_components.td, { children: "NewOpcodes / SAMPFUNCS / imgui…" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/vc",
				children: "VC"
			}) }), jsx(_components.td, { children: "Vice City CLEO 类型页" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/gta3",
				children: "GTA III"
			}) }), jsx(_components.td, { children: "III CLEO 类型页" })] })
		] })] }),
		"\n",
		jsx(_components.h2, {
			id: "分工",
			children: "分工"
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
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
			children: jsxs(_components.code, { children: [
				jsx(_components.span, {
					className: "line",
					children: jsx(_components.span, { children: "plugins/  → ASI + plugin-sdk" })
				}),
				"\n",
				jsx(_components.span, {
					className: "line",
					children: jsx(_components.span, { children: "cleo/     → opcode（OP + Lua + Redux 调用形态）" })
				})
			] })
		}) }),
		"\n",
		jsx(_components.h2, {
			id: "导航",
			children: "导航"
		}),
		"\n",
		jsxs(Cards, { children: [
			jsx(Card, {
				title: "OP / Lua 语法",
				href: "/docs/cleo/syntax",
				description: "三种形态与 Lua 约定"
			}),
			jsx(Card, {
				title: "Redux 语法",
				href: "/docs/cleo/syntax-redux",
				description: "Class.member / native"
			}),
			jsx(Card, {
				title: "Memory",
				href: "/docs/cleo/sa/memory",
				description: "读写内存与原生调用"
			}),
			jsx(Card, {
				title: "插件",
				href: "/docs/plugins",
				description: "C++ ASI 侧"
			})
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
function _missingMdxReference(id, component) {
	throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
//#endregion
export { _markdown, MDXContent as default, frontmatter, structuredData, toc };
