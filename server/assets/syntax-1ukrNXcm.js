import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/cleo/syntax.mdx?collection=docs
var frontmatter = {
	"title": "OP / Lua 语法",
	"description": "OP · Lua · Redux 三种形态与 Lua 约定"
};
var _markdown = "\n\n本站 opcode 页统一三块：**OP 签名** · **CLEO Lua** · **CLEO Redux**。\n\n数据同源 [sanny-builder-library](https://github.com/sannybuilder/library) 的 `sa.json`（Script 视图）。SBL snippet 多为 Sanny 高级语法，只作语义参考，不直接粘贴 `0@`。\n\n## 三种形态（同源） [#三种形态同源]\n\n| 形态             | 是什么                                            | 本站写在哪      |\n| -------------- | ---------------------------------------------- | ---------- |\n| **OP**         | opcode 号 + 命令名 + 参数（SBL `sb_command`）          | `text` 签名块 |\n| **CLEO Lua**   | `SNAKE` → `camelCase` 函数                       | `lua` 调用块  |\n| **CLEO Redux** | JS：`Class.member(...)` / `native(\"NAME\", ...)` | `js` 调用块   |\n\n细则见 [Redux 语法](/docs/cleo/syntax-redux)。\n\n## CLEO Lua 约定 [#cleo-lua-约定]\n\n| 项    | 规则                                                                  |\n| ---- | ------------------------------------------------------------------- |\n| 函数名  | opcode 名 `SNAKE_CASE` → `camelCase`（`WRITE_MEMORY` → `writeMemory`） |\n| 参数   | 位置参数，顺序与签名 `in` 一致                                                  |\n| bool | `true` / `false`                                                    |\n| 返回值  | `local x = foo(...)`；多输出 `local a, b = foo(...)`                    |\n| 条件命令 | `if foo(...) then ... end`                                          |\n| 等待   | `wait(ms)`                                                          |\n\n## 最小脚本（Lua） [#最小脚本lua]\n\n```lua\nscript_name(\"demo\")\n\nwhile true do\n  wait(0)\n  if testCheat(\"LUA\") then\n    printFormattedNow(\"ok %d\", 1000, 1)\n  end\nend\n```\n\n## 对照 [#对照]\n\n| Sanny / SBL snippet    | OP                  | Lua                          | Redux                             |\n| ---------------------- | ------------------- | ---------------------------- | --------------------------------- |\n| `write_memory ...`     | `0A8C WRITE_MEMORY` | `writeMemory(...)`           | `Memory.Write(...)` 或 class 形态    |\n| `0@ = read_memory ...` | `0A8D READ_MEMORY`  | `local v = readMemory(...)`  | `const result = Memory.Read(...)` |\n| `create_car ...`       | `00A5 CREATE_CAR`   | `local car = createCar(...)` | `const handle = Car.Create(...)`  |\n\n## 无绑定名时 [#无绑定名时]\n\n个别环境可能没有 camelCase 包装。页内仍按 **参数顺序** 给调用；对照签名里的 **opcode 号** 用你装的绑定层调。\n\n## 和 C++ [#和-c]\n\n在 ASI 里调同一条 SCM / CLEO 命令，用 [plugin::Command](/docs/plugins/commands)，不是本页 Lua / JS。\n\n## 表在哪 [#表在哪]\n\n| 表                 | 入口                                       |\n| ----------------- | ---------------------------------------- |\n| CLEO 扩展（类型页）      | [sa/memory](/docs/cleo/sa/memory) 等      |\n| 后续                | CLEO+ / 扩展 / default / SAMPFUNCS（波次手写）   |\n| native.json（Code） | 未收录全文，见 [Redux](/docs/cleo/syntax-redux) |\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "本站 opcode 页统一三块：**OP 签名** · **CLEO Lua** · **CLEO Redux**。"
		},
		{
			"heading": void 0,
			"content": "数据同源 sanny-builder-library 的 `sa.json`（Script 视图）。SBL snippet 多为 Sanny 高级语法，只作语义参考，不直接粘贴 `0@`。"
		},
		{
			"heading": "三种形态同源",
			"content": "形态"
		},
		{
			"heading": "三种形态同源",
			"content": "是什么"
		},
		{
			"heading": "三种形态同源",
			"content": "本站写在哪"
		},
		{
			"heading": "三种形态同源",
			"content": "**OP**"
		},
		{
			"heading": "三种形态同源",
			"content": "opcode 号 + 命令名 + 参数（SBL `sb_command`）"
		},
		{
			"heading": "三种形态同源",
			"content": "`text` 签名块"
		},
		{
			"heading": "三种形态同源",
			"content": "**CLEO Lua**"
		},
		{
			"heading": "三种形态同源",
			"content": "`SNAKE` → `camelCase` 函数"
		},
		{
			"heading": "三种形态同源",
			"content": "`lua` 调用块"
		},
		{
			"heading": "三种形态同源",
			"content": "**CLEO Redux**"
		},
		{
			"heading": "三种形态同源",
			"content": "JS：`Class.member(...)` / `native(\"NAME\", ...)`"
		},
		{
			"heading": "三种形态同源",
			"content": "`js` 调用块"
		},
		{
			"heading": "三种形态同源",
			"content": "细则见 Redux 语法。"
		},
		{
			"heading": "cleo-lua-约定",
			"content": "项"
		},
		{
			"heading": "cleo-lua-约定",
			"content": "规则"
		},
		{
			"heading": "cleo-lua-约定",
			"content": "函数名"
		},
		{
			"heading": "cleo-lua-约定",
			"content": "opcode 名 `SNAKE_CASE` → `camelCase`（`WRITE_MEMORY` → `writeMemory`）"
		},
		{
			"heading": "cleo-lua-约定",
			"content": "参数"
		},
		{
			"heading": "cleo-lua-约定",
			"content": "位置参数，顺序与签名 `in` 一致"
		},
		{
			"heading": "cleo-lua-约定",
			"content": "bool"
		},
		{
			"heading": "cleo-lua-约定",
			"content": "`true` / `false`"
		},
		{
			"heading": "cleo-lua-约定",
			"content": "返回值"
		},
		{
			"heading": "cleo-lua-约定",
			"content": "`local x = foo(...)`；多输出 `local a, b = foo(...)`"
		},
		{
			"heading": "cleo-lua-约定",
			"content": "条件命令"
		},
		{
			"heading": "cleo-lua-约定",
			"content": "`if foo(...) then ... end`"
		},
		{
			"heading": "cleo-lua-约定",
			"content": "等待"
		},
		{
			"heading": "cleo-lua-约定",
			"content": "`wait(ms)`"
		},
		{
			"heading": "对照",
			"content": "Sanny / SBL snippet"
		},
		{
			"heading": "对照",
			"content": "OP"
		},
		{
			"heading": "对照",
			"content": "Lua"
		},
		{
			"heading": "对照",
			"content": "Redux"
		},
		{
			"heading": "对照",
			"content": "`write_memory ...`"
		},
		{
			"heading": "对照",
			"content": "`0A8C WRITE_MEMORY`"
		},
		{
			"heading": "对照",
			"content": "`writeMemory(...)`"
		},
		{
			"heading": "对照",
			"content": "`Memory.Write(...)` 或 class 形态"
		},
		{
			"heading": "对照",
			"content": "`0@ = read_memory ...`"
		},
		{
			"heading": "对照",
			"content": "`0A8D READ_MEMORY`"
		},
		{
			"heading": "对照",
			"content": "`local v = readMemory(...)`"
		},
		{
			"heading": "对照",
			"content": "`const result = Memory.Read(...)`"
		},
		{
			"heading": "对照",
			"content": "`create_car ...`"
		},
		{
			"heading": "对照",
			"content": "`00A5 CREATE_CAR`"
		},
		{
			"heading": "对照",
			"content": "`local car = createCar(...)`"
		},
		{
			"heading": "对照",
			"content": "`const handle = Car.Create(...)`"
		},
		{
			"heading": "无绑定名时",
			"content": "个别环境可能没有 camelCase 包装。页内仍按 **参数顺序** 给调用；对照签名里的 **opcode 号** 用你装的绑定层调。"
		},
		{
			"heading": "和-c",
			"content": "在 ASI 里调同一条 SCM / CLEO 命令，用 plugin::Command，不是本页 Lua / JS。"
		},
		{
			"heading": "表在哪",
			"content": "表"
		},
		{
			"heading": "表在哪",
			"content": "入口"
		},
		{
			"heading": "表在哪",
			"content": "CLEO 扩展（类型页）"
		},
		{
			"heading": "表在哪",
			"content": "sa/memory 等"
		},
		{
			"heading": "表在哪",
			"content": "后续"
		},
		{
			"heading": "表在哪",
			"content": "CLEO+ / 扩展 / default / SAMPFUNCS（波次手写）"
		},
		{
			"heading": "表在哪",
			"content": "native.json（Code）"
		},
		{
			"heading": "表在哪",
			"content": "未收录全文，见 Redux"
		}
	],
	"headings": [
		{
			"id": "三种形态同源",
			"content": "三种形态（同源）"
		},
		{
			"id": "cleo-lua-约定",
			"content": "CLEO Lua 约定"
		},
		{
			"id": "最小脚本lua",
			"content": "最小脚本（Lua）"
		},
		{
			"id": "对照",
			"content": "对照"
		},
		{
			"id": "无绑定名时",
			"content": "无绑定名时"
		},
		{
			"id": "和-c",
			"content": "和 C++"
		},
		{
			"id": "表在哪",
			"content": "表在哪"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#三种形态同源",
		title: jsx(Fragment, { children: "三种形态（同源）" })
	},
	{
		depth: 2,
		url: "#cleo-lua-约定",
		title: jsx(Fragment, { children: "CLEO Lua 约定" })
	},
	{
		depth: 2,
		url: "#最小脚本lua",
		title: jsx(Fragment, { children: "最小脚本（Lua）" })
	},
	{
		depth: 2,
		url: "#对照",
		title: jsx(Fragment, { children: "对照" })
	},
	{
		depth: 2,
		url: "#无绑定名时",
		title: jsx(Fragment, { children: "无绑定名时" })
	},
	{
		depth: 2,
		url: "#和-c",
		title: jsx(Fragment, { children: "和 C++" })
	},
	{
		depth: 2,
		url: "#表在哪",
		title: jsx(Fragment, { children: "表在哪" })
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
	};
	return jsxs(Fragment, { children: [
		jsxs(_components.p, { children: [
			"本站 opcode 页统一三块：",
			jsx(_components.strong, { children: "OP 签名" }),
			" · ",
			jsx(_components.strong, { children: "CLEO Lua" }),
			" · ",
			jsx(_components.strong, { children: "CLEO Redux" }),
			"。"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"数据同源 ",
			jsx(_components.a, {
				href: "https://github.com/sannybuilder/library",
				children: "sanny-builder-library"
			}),
			" 的 ",
			jsx(_components.code, { children: "sa.json" }),
			"（Script 视图）。SBL snippet 多为 Sanny 高级语法，只作语义参考，不直接粘贴 ",
			jsx(_components.code, { children: "0@" }),
			"。"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "三种形态同源",
			children: "三种形态（同源）"
		}),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [
			jsx(_components.th, { children: "形态" }),
			jsx(_components.th, { children: "是什么" }),
			jsx(_components.th, { children: "本站写在哪" })
		] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.strong, { children: "OP" }) }),
				jsxs(_components.td, { children: [
					"opcode 号 + 命令名 + 参数（SBL ",
					jsx(_components.code, { children: "sb_command" }),
					"）"
				] }),
				jsxs(_components.td, { children: [jsx(_components.code, { children: "text" }), " 签名块"] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.strong, { children: "CLEO Lua" }) }),
				jsxs(_components.td, { children: [
					jsx(_components.code, { children: "SNAKE" }),
					" → ",
					jsx(_components.code, { children: "camelCase" }),
					" 函数"
				] }),
				jsxs(_components.td, { children: [jsx(_components.code, { children: "lua" }), " 调用块"] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.strong, { children: "CLEO Redux" }) }),
				jsxs(_components.td, { children: [
					"JS：",
					jsx(_components.code, { children: "Class.member(...)" }),
					" / ",
					jsx(_components.code, { children: "native(\"NAME\", ...)" })
				] }),
				jsxs(_components.td, { children: [jsx(_components.code, { children: "js" }), " 调用块"] })
			] })
		] })] }),
		"\n",
		jsxs(_components.p, { children: [
			"细则见 ",
			jsx(_components.a, {
				href: "/docs/cleo/syntax-redux",
				children: "Redux 语法"
			}),
			"。"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "cleo-lua-约定",
			children: "CLEO Lua 约定"
		}),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [jsx(_components.th, { children: "项" }), jsx(_components.th, { children: "规则" })] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "函数名" }), jsxs(_components.td, { children: [
				"opcode 名 ",
				jsx(_components.code, { children: "SNAKE_CASE" }),
				" → ",
				jsx(_components.code, { children: "camelCase" }),
				"（",
				jsx(_components.code, { children: "WRITE_MEMORY" }),
				" → ",
				jsx(_components.code, { children: "writeMemory" }),
				"）"
			] })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "参数" }), jsxs(_components.td, { children: [
				"位置参数，顺序与签名 ",
				jsx(_components.code, { children: "in" }),
				" 一致"
			] })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "bool" }), jsxs(_components.td, { children: [
				jsx(_components.code, { children: "true" }),
				" / ",
				jsx(_components.code, { children: "false" })
			] })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "返回值" }), jsxs(_components.td, { children: [
				jsx(_components.code, { children: "local x = foo(...)" }),
				"；多输出 ",
				jsx(_components.code, { children: "local a, b = foo(...)" })
			] })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "条件命令" }), jsx(_components.td, { children: jsx(_components.code, { children: "if foo(...) then ... end" }) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "等待" }), jsx(_components.td, { children: jsx(_components.code, { children: "wait(ms)" }) })] })
		] })] }),
		"\n",
		jsx(_components.h2, {
			id: "最小脚本lua",
			children: "最小脚本（Lua）"
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
				jsxs(_components.span, {
					className: "line",
					children: [
						jsx(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "script_name"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "("
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "\"demo\""
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ")"
						})
					]
				}),
				"\n",
				jsx(_components.span, { className: "line" }),
				"\n",
				jsxs(_components.span, {
					className: "line",
					children: [
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "while"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " true"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " do"
						})
					]
				}),
				"\n",
				jsxs(_components.span, {
					className: "line",
					children: [
						jsx(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "  wait"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "("
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "0"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ")"
						})
					]
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
							children: "  if"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " testCheat"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "("
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "\"LUA\""
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ") "
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "then"
						})
					]
				}),
				"\n",
				jsxs(_components.span, {
					className: "line",
					children: [
						jsx(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "    printFormattedNow"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "("
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "\"ok %d\""
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", "
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "1000"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", "
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "1"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ")"
						})
					]
				}),
				"\n",
				jsx(_components.span, {
					className: "line",
					children: jsx(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "  end"
					})
				}),
				"\n",
				jsx(_components.span, {
					className: "line",
					children: jsx(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "end"
					})
				})
			] })
		}) }),
		"\n",
		jsx(_components.h2, {
			id: "对照",
			children: "对照"
		}),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [
			jsx(_components.th, { children: "Sanny / SBL snippet" }),
			jsx(_components.th, { children: "OP" }),
			jsx(_components.th, { children: "Lua" }),
			jsx(_components.th, { children: "Redux" })
		] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "write_memory ..." }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "0A8C WRITE_MEMORY" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "writeMemory(...)" }) }),
				jsxs(_components.td, { children: [jsx(_components.code, { children: "Memory.Write(...)" }), " 或 class 形态"] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "0@ = read_memory ..." }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "0A8D READ_MEMORY" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "local v = readMemory(...)" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "const result = Memory.Read(...)" }) })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "create_car ..." }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "00A5 CREATE_CAR" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "local car = createCar(...)" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "const handle = Car.Create(...)" }) })
			] })
		] })] }),
		"\n",
		jsx(_components.h2, {
			id: "无绑定名时",
			children: "无绑定名时"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"个别环境可能没有 camelCase 包装。页内仍按 ",
			jsx(_components.strong, { children: "参数顺序" }),
			" 给调用；对照签名里的 ",
			jsx(_components.strong, { children: "opcode 号" }),
			" 用你装的绑定层调。"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "和-c",
			children: "和 C++"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"在 ASI 里调同一条 SCM / CLEO 命令，用 ",
			jsx(_components.a, {
				href: "/docs/plugins/commands",
				children: "plugin::Command"
			}),
			"，不是本页 Lua / JS。"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "表在哪",
			children: "表在哪"
		}),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [jsx(_components.th, { children: "表" }), jsx(_components.th, { children: "入口" })] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "CLEO 扩展（类型页）" }), jsxs(_components.td, { children: [jsx(_components.a, {
				href: "/docs/cleo/sa/memory",
				children: "sa/memory"
			}), " 等"] })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "后续" }), jsx(_components.td, { children: "CLEO+ / 扩展 / default / SAMPFUNCS（波次手写）" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "native.json（Code）" }), jsxs(_components.td, { children: ["未收录全文，见 ", jsx(_components.a, {
				href: "/docs/cleo/syntax-redux",
				children: "Redux"
			})] })] })
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
