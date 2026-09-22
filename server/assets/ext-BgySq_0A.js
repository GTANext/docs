import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/cleo/sa/ext/index.mdx?collection=docs
var frontmatter = {
	"title": "其它扩展",
	"description": "除 CLEO / CLEO+ / default 外的 SA 扩展入口"
};
var _markdown = "\n\nSBL `sa.json` 里 **除 CLEO / CLEO+ / default** 以外的扩展。\n\n调用见 [Lua](/docs/cleo/syntax) / [Redux](/docs/cleo/syntax-redux)。在线表：[library.sannybuilder.com](https://library.sannybuilder.com/#/sa)。\n\n## 覆盖 [#覆盖]\n\n| 状态      | 内容                                                             |\n| ------- | -------------------------------------------------------------- |\n| **本目录** | 小扩展 + NewOpcodes + imgui + SAMPFUNCS                           |\n| **已另录** | [CLEO 类型页](/docs/cleo/sa/memory) · [CLEO+](/docs/cleo/sa/plus) |\n| **未做**  | `native.json` Code 全文                                          |\n\n## 扩展清单 [#扩展清单]\n\n| 扩展         | 入口                                          |   约条数 | 装载                      |\n| ---------- | ------------------------------------------- | ----: | ----------------------- |\n| NewOpcodes | [newopcodes/](/docs/cleo/sa/ext/newopcodes) | \\~128 | CLEO + NewOpcodes       |\n| imgui      | [imgui/](/docs/cleo/sa/ext/imgui)           |    87 | CLEO + ImGui 插件         |\n| SAMPFUNCS  | [sampfuncs/](/docs/cleo/sa/ext/sampfuncs)   |   382 | **仅 SA-MP** + SAMPFUNCS |\n| audio      | [audio](/docs/cleo/sa/ext/audio)            |    26 | 对应扩展                    |\n| bitwise    | [bitwise](/docs/cleo/sa/ext/bitwise)        |    15 | 对应扩展                    |\n| clipboard  | [clipboard](/docs/cleo/sa/ext/clipboard)    |     2 | 对应扩展                    |\n| debug      | [debug](/docs/cleo/sa/ext/debug)            |     6 | 对应扩展                    |\n| file       | [file](/docs/cleo/sa/ext/file)              |    12 | 对应扩展                    |\n| ini        | [ini](/docs/cleo/sa/ext/ini)                |     8 | 对应扩展                    |\n| input      | [input](/docs/cleo/sa/ext/input)            |     7 | 对应扩展                    |\n| math       | [math](/docs/cleo/sa/ext/math)              |    13 | 对应扩展                    |\n| memory     | [memory](/docs/cleo/sa/ext/memory)          |     8 | 对应扩展                    |\n| text       | [text](/docs/cleo/sa/ext/text)              |    10 | 对应扩展                    |\n| Sphere     | [sphere](/docs/cleo/sa/ext/sphere)          |     1 | 对应扩展                    |\n\n## 说明 [#说明]\n\n* 模板：功能中文 H2 + `<Opcode>` + OP / Lua / Redux\n* **不**再跑生成器；旧 `docs/_tools` 仅作对照素材\n* 不改 SBL 上游\n\n<Cards>\n  <Card title=\"bitwise\" href=\"/docs/cleo/sa/ext/bitwise\" description=\"位运算\" />\n\n  <Card title=\"ini\" href=\"/docs/cleo/sa/ext/ini\" description=\"IniFile\" />\n\n  <Card title=\"input\" href=\"/docs/cleo/sa/ext/input\" description=\"键边沿与模拟\" />\n\n  <Card title=\"debug\" href=\"/docs/cleo/sa/ext/debug\" description=\"断点与日志\" />\n\n  <Card title=\"SAMPFUNCS\" href=\"/docs/cleo/sa/ext/sampfuncs\" description=\"SA-MP 扩展表\" />\n</Cards>\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "SBL `sa.json` 里 **除 CLEO / CLEO+ / default** 以外的扩展。"
		},
		{
			"heading": void 0,
			"content": "调用见 Lua / Redux。在线表：library.sannybuilder.com。"
		},
		{
			"heading": "覆盖",
			"content": "状态"
		},
		{
			"heading": "覆盖",
			"content": "内容"
		},
		{
			"heading": "覆盖",
			"content": "**本目录**"
		},
		{
			"heading": "覆盖",
			"content": "小扩展 + NewOpcodes + imgui + SAMPFUNCS"
		},
		{
			"heading": "覆盖",
			"content": "**已另录**"
		},
		{
			"heading": "覆盖",
			"content": "CLEO 类型页 · CLEO+"
		},
		{
			"heading": "覆盖",
			"content": "**未做**"
		},
		{
			"heading": "覆盖",
			"content": "`native.json` Code 全文"
		},
		{
			"heading": "扩展清单",
			"content": "扩展"
		},
		{
			"heading": "扩展清单",
			"content": "入口"
		},
		{
			"heading": "扩展清单",
			"content": "约条数"
		},
		{
			"heading": "扩展清单",
			"content": "装载"
		},
		{
			"heading": "扩展清单",
			"content": "NewOpcodes"
		},
		{
			"heading": "扩展清单",
			"content": "newopcodes/"
		},
		{
			"heading": "扩展清单",
			"content": "\\~128"
		},
		{
			"heading": "扩展清单",
			"content": "CLEO + NewOpcodes"
		},
		{
			"heading": "扩展清单",
			"content": "imgui"
		},
		{
			"heading": "扩展清单",
			"content": "imgui/"
		},
		{
			"heading": "扩展清单",
			"content": "87"
		},
		{
			"heading": "扩展清单",
			"content": "CLEO + ImGui 插件"
		},
		{
			"heading": "扩展清单",
			"content": "SAMPFUNCS"
		},
		{
			"heading": "扩展清单",
			"content": "sampfuncs/"
		},
		{
			"heading": "扩展清单",
			"content": "382"
		},
		{
			"heading": "扩展清单",
			"content": "**仅 SA-MP** + SAMPFUNCS"
		},
		{
			"heading": "扩展清单",
			"content": "audio"
		},
		{
			"heading": "扩展清单",
			"content": "audio"
		},
		{
			"heading": "扩展清单",
			"content": "26"
		},
		{
			"heading": "扩展清单",
			"content": "对应扩展"
		},
		{
			"heading": "扩展清单",
			"content": "bitwise"
		},
		{
			"heading": "扩展清单",
			"content": "bitwise"
		},
		{
			"heading": "扩展清单",
			"content": "15"
		},
		{
			"heading": "扩展清单",
			"content": "对应扩展"
		},
		{
			"heading": "扩展清单",
			"content": "clipboard"
		},
		{
			"heading": "扩展清单",
			"content": "clipboard"
		},
		{
			"heading": "扩展清单",
			"content": "2"
		},
		{
			"heading": "扩展清单",
			"content": "对应扩展"
		},
		{
			"heading": "扩展清单",
			"content": "debug"
		},
		{
			"heading": "扩展清单",
			"content": "debug"
		},
		{
			"heading": "扩展清单",
			"content": "6"
		},
		{
			"heading": "扩展清单",
			"content": "对应扩展"
		},
		{
			"heading": "扩展清单",
			"content": "file"
		},
		{
			"heading": "扩展清单",
			"content": "file"
		},
		{
			"heading": "扩展清单",
			"content": "12"
		},
		{
			"heading": "扩展清单",
			"content": "对应扩展"
		},
		{
			"heading": "扩展清单",
			"content": "ini"
		},
		{
			"heading": "扩展清单",
			"content": "ini"
		},
		{
			"heading": "扩展清单",
			"content": "8"
		},
		{
			"heading": "扩展清单",
			"content": "对应扩展"
		},
		{
			"heading": "扩展清单",
			"content": "input"
		},
		{
			"heading": "扩展清单",
			"content": "input"
		},
		{
			"heading": "扩展清单",
			"content": "7"
		},
		{
			"heading": "扩展清单",
			"content": "对应扩展"
		},
		{
			"heading": "扩展清单",
			"content": "math"
		},
		{
			"heading": "扩展清单",
			"content": "math"
		},
		{
			"heading": "扩展清单",
			"content": "13"
		},
		{
			"heading": "扩展清单",
			"content": "对应扩展"
		},
		{
			"heading": "扩展清单",
			"content": "memory"
		},
		{
			"heading": "扩展清单",
			"content": "memory"
		},
		{
			"heading": "扩展清单",
			"content": "8"
		},
		{
			"heading": "扩展清单",
			"content": "对应扩展"
		},
		{
			"heading": "扩展清单",
			"content": "text"
		},
		{
			"heading": "扩展清单",
			"content": "text"
		},
		{
			"heading": "扩展清单",
			"content": "10"
		},
		{
			"heading": "扩展清单",
			"content": "对应扩展"
		},
		{
			"heading": "扩展清单",
			"content": "Sphere"
		},
		{
			"heading": "扩展清单",
			"content": "sphere"
		},
		{
			"heading": "扩展清单",
			"content": "1"
		},
		{
			"heading": "扩展清单",
			"content": "对应扩展"
		},
		{
			"heading": "说明",
			"content": "模板：功能中文 H2 + `<Opcode>` + OP / Lua / Redux"
		},
		{
			"heading": "说明",
			"content": "**不**再跑生成器；旧 `docs/_tools` 仅作对照素材"
		},
		{
			"heading": "说明",
			"content": "不改 SBL 上游"
		},
		{
			"heading": "说明",
			"content": "<Card title=\"bitwise\" href=\"/docs/cleo/sa/ext/bitwise\" description=\"位运算\" />"
		},
		{
			"heading": "说明",
			"content": "<Card title=\"ini\" href=\"/docs/cleo/sa/ext/ini\" description=\"IniFile\" />"
		},
		{
			"heading": "说明",
			"content": "<Card title=\"input\" href=\"/docs/cleo/sa/ext/input\" description=\"键边沿与模拟\" />"
		},
		{
			"heading": "说明",
			"content": "<Card title=\"debug\" href=\"/docs/cleo/sa/ext/debug\" description=\"断点与日志\" />"
		},
		{
			"heading": "说明",
			"content": "<Card title=\"SAMPFUNCS\" href=\"/docs/cleo/sa/ext/sampfuncs\" description=\"SA-MP 扩展表\" />"
		}
	],
	"headings": [
		{
			"id": "覆盖",
			"content": "覆盖"
		},
		{
			"id": "扩展清单",
			"content": "扩展清单"
		},
		{
			"id": "说明",
			"content": "说明"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#覆盖",
		title: jsx(Fragment, { children: "覆盖" })
	},
	{
		depth: 2,
		url: "#扩展清单",
		title: jsx(Fragment, { children: "扩展清单" })
	},
	{
		depth: 2,
		url: "#说明",
		title: jsx(Fragment, { children: "说明" })
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
	}, { Card, Cards } = _components;
	if (!Card) _missingMdxReference("Card", true);
	if (!Cards) _missingMdxReference("Cards", true);
	return jsxs(Fragment, { children: [
		jsxs(_components.p, { children: [
			"SBL ",
			jsx(_components.code, { children: "sa.json" }),
			" 里 ",
			jsx(_components.strong, { children: "除 CLEO / CLEO+ / default" }),
			" 以外的扩展。"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"调用见 ",
			jsx(_components.a, {
				href: "/docs/cleo/syntax",
				children: "Lua"
			}),
			" / ",
			jsx(_components.a, {
				href: "/docs/cleo/syntax-redux",
				children: "Redux"
			}),
			"。在线表：",
			jsx(_components.a, {
				href: "https://library.sannybuilder.com/#/sa",
				children: "library.sannybuilder.com"
			}),
			"。"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "覆盖",
			children: "覆盖"
		}),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [jsx(_components.th, { children: "状态" }), jsx(_components.th, { children: "内容" })] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.strong, { children: "本目录" }) }), jsx(_components.td, { children: "小扩展 + NewOpcodes + imgui + SAMPFUNCS" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.strong, { children: "已另录" }) }), jsxs(_components.td, { children: [
				jsx(_components.a, {
					href: "/docs/cleo/sa/memory",
					children: "CLEO 类型页"
				}),
				" · ",
				jsx(_components.a, {
					href: "/docs/cleo/sa/plus",
					children: "CLEO+"
				})
			] })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.strong, { children: "未做" }) }), jsxs(_components.td, { children: [jsx(_components.code, { children: "native.json" }), " Code 全文"] })] })
		] })] }),
		"\n",
		jsx(_components.h2, {
			id: "扩展清单",
			children: "扩展清单"
		}),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [
			jsx(_components.th, { children: "扩展" }),
			jsx(_components.th, { children: "入口" }),
			jsx(_components.th, {
				style: { textAlign: "right" },
				children: "约条数"
			}),
			jsx(_components.th, { children: "装载" })
		] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "NewOpcodes" }),
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/newopcodes",
					children: "newopcodes/"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "~128"
				}),
				jsx(_components.td, { children: "CLEO + NewOpcodes" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "imgui" }),
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/imgui",
					children: "imgui/"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "87"
				}),
				jsx(_components.td, { children: "CLEO + ImGui 插件" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "SAMPFUNCS" }),
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/sampfuncs",
					children: "sampfuncs/"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "382"
				}),
				jsxs(_components.td, { children: [jsx(_components.strong, { children: "仅 SA-MP" }), " + SAMPFUNCS"] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "audio" }),
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/audio",
					children: "audio"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "26"
				}),
				jsx(_components.td, { children: "对应扩展" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "bitwise" }),
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/bitwise",
					children: "bitwise"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "15"
				}),
				jsx(_components.td, { children: "对应扩展" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "clipboard" }),
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/clipboard",
					children: "clipboard"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "2"
				}),
				jsx(_components.td, { children: "对应扩展" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "debug" }),
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/debug",
					children: "debug"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "6"
				}),
				jsx(_components.td, { children: "对应扩展" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "file" }),
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/file",
					children: "file"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "12"
				}),
				jsx(_components.td, { children: "对应扩展" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "ini" }),
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/ini",
					children: "ini"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "8"
				}),
				jsx(_components.td, { children: "对应扩展" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "input" }),
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/input",
					children: "input"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "7"
				}),
				jsx(_components.td, { children: "对应扩展" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "math" }),
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/math",
					children: "math"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "13"
				}),
				jsx(_components.td, { children: "对应扩展" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "memory" }),
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/memory",
					children: "memory"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "8"
				}),
				jsx(_components.td, { children: "对应扩展" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "text" }),
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/text",
					children: "text"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "10"
				}),
				jsx(_components.td, { children: "对应扩展" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "Sphere" }),
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/sphere",
					children: "sphere"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "1"
				}),
				jsx(_components.td, { children: "对应扩展" })
			] })
		] })] }),
		"\n",
		jsx(_components.h2, {
			id: "说明",
			children: "说明"
		}),
		"\n",
		jsxs(_components.ul, { children: [
			"\n",
			jsxs(_components.li, { children: [
				"模板：功能中文 H2 + ",
				jsx(_components.code, { children: "<Opcode>" }),
				" + OP / Lua / Redux"
			] }),
			"\n",
			jsxs(_components.li, { children: [
				jsx(_components.strong, { children: "不" }),
				"再跑生成器；旧 ",
				jsx(_components.code, { children: "docs/_tools" }),
				" 仅作对照素材"
			] }),
			"\n",
			jsx(_components.li, { children: "不改 SBL 上游" }),
			"\n"
		] }),
		"\n",
		jsxs(Cards, { children: [
			jsx(Card, {
				title: "bitwise",
				href: "/docs/cleo/sa/ext/bitwise",
				description: "位运算"
			}),
			jsx(Card, {
				title: "ini",
				href: "/docs/cleo/sa/ext/ini",
				description: "IniFile"
			}),
			jsx(Card, {
				title: "input",
				href: "/docs/cleo/sa/ext/input",
				description: "键边沿与模拟"
			}),
			jsx(Card, {
				title: "debug",
				href: "/docs/cleo/sa/ext/debug",
				description: "断点与日志"
			}),
			jsx(Card, {
				title: "SAMPFUNCS",
				href: "/docs/cleo/sa/ext/sampfuncs",
				description: "SA-MP 扩展表"
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
