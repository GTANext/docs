import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/cleo/sa/ext/debug.mdx?collection=docs
var frontmatter = {
	"title": "调试 Debug",
	"description": "调试输出、断点与日志"
};
var _markdown = "\n\n`sa` · 扩展 `debug` · 需对应 CLEO 扩展\n\n写法见 [Lua](/docs/cleo/syntax) / [Redux](/docs/cleo/syntax-redux)。\n\n## 写调试串 [#写调试串]\n\n<Opcode id=\"0662\" name=\"WRITE_DEBUG\">\n  写调试字符串到游戏 debug 输出。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      0662 WRITE_DEBUG\n      in: text\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      writeDebug(\"hello\")\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      native(\"WRITE_DEBUG\", text)\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n\n## 调试串 + 整数 [#调试串--整数]\n\n<Opcode id=\"0663\" name=\"WRITE_DEBUG_WITH_INT\">\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      0663 WRITE_DEBUG_WITH_INT\n      in: text, number\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      writeDebugWithInt(\"n\", 42)\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      native(\"WRITE_DEBUG_WITH_INT\", text, number)\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n\n## 调试串 + 浮点 [#调试串--浮点]\n\n<Opcode id=\"0664\" name=\"WRITE_DEBUG_WITH_FLOAT\">\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      0664 WRITE_DEBUG_WITH_FLOAT\n      in: text, number\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      writeDebugWithFloat(\"f\", 1.5)\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      native(\"WRITE_DEBUG_WITH_FLOAT\", text, number)\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n\n## 断点 [#断点]\n\n<Opcode id=\"2100\" name=\"BREAKPOINT\" member=\"Debugger.Breakpoint\">\n  断点暂停脚本；`blocking` 控制是否卡死。可用 F5–F12 一类继续（看插件）。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      2100 BREAKPOINT\n      in: blocking, text, args...\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      breakpoint(true, \"hit %d\", 1)\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      Debugger.breakpoint(blocking, text, ...args)\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n\n## TRACE [#trace]\n\n<Opcode id=\"2101\" name=\"TRACE\" member=\"Debugger.Trace\">\n  屏上打调试字并写入 `.cleo.log`。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      2101 TRACE\n      in: text, args...\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      trace(\"pos %f %f\", x, y)\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      Debugger.trace(text, ...args)\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n\n## 写日志文件 [#写日志文件]\n\n<Opcode id=\"2102\" name=\"LOG_TO_FILE\" member=\"Debugger.LogLine\">\n  往文件追加一行。`timestamp` 为真则带日期时间前缀。不受 debug 开关影响。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      2102 LOG_TO_FILE\n      in: filename, timestamp, text, args...\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      logToFile(\"cleo/log.txt\", true, \"ok %d\", 1)\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      Debugger.logLine(filename, timestamp, text, ...args)\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "`sa` · 扩展 `debug` · 需对应 CLEO 扩展"
		},
		{
			"heading": void 0,
			"content": "写法见 Lua / Redux。"
		},
		{
			"heading": "写调试串",
			"content": "写调试字符串到游戏 debug 输出。"
		},
		{
			"heading": "断点",
			"content": "断点暂停脚本；`blocking` 控制是否卡死。可用 F5–F12 一类继续（看插件）。"
		},
		{
			"heading": "trace",
			"content": "屏上打调试字并写入 `.cleo.log`。"
		},
		{
			"heading": "写日志文件",
			"content": "往文件追加一行。`timestamp` 为真则带日期时间前缀。不受 debug 开关影响。"
		}
	],
	"headings": [
		{
			"id": "写调试串",
			"content": "写调试串"
		},
		{
			"id": "调试串--整数",
			"content": "调试串 + 整数"
		},
		{
			"id": "调试串--浮点",
			"content": "调试串 + 浮点"
		},
		{
			"id": "断点",
			"content": "断点"
		},
		{
			"id": "trace",
			"content": "TRACE"
		},
		{
			"id": "写日志文件",
			"content": "写日志文件"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#写调试串",
		title: jsx(Fragment, { children: "写调试串" })
	},
	{
		depth: 2,
		url: "#调试串--整数",
		title: jsx(Fragment, { children: "调试串 + 整数" })
	},
	{
		depth: 2,
		url: "#调试串--浮点",
		title: jsx(Fragment, { children: "调试串 + 浮点" })
	},
	{
		depth: 2,
		url: "#断点",
		title: jsx(Fragment, { children: "断点" })
	},
	{
		depth: 2,
		url: "#trace",
		title: jsx(Fragment, { children: "TRACE" })
	},
	{
		depth: 2,
		url: "#写日志文件",
		title: jsx(Fragment, { children: "写日志文件" })
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
		...props.components
	}, { CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger, Opcode } = _components;
	if (!CodeBlockTab) _missingMdxReference("CodeBlockTab", true);
	if (!CodeBlockTabs) _missingMdxReference("CodeBlockTabs", true);
	if (!CodeBlockTabsList) _missingMdxReference("CodeBlockTabsList", true);
	if (!CodeBlockTabsTrigger) _missingMdxReference("CodeBlockTabsTrigger", true);
	if (!Opcode) _missingMdxReference("Opcode", true);
	return jsxs(Fragment, { children: [
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "sa" }),
			" · 扩展 ",
			jsx(_components.code, { children: "debug" }),
			" · 需对应 CLEO 扩展"
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
		jsx(_components.h2, {
			id: "写调试串",
			children: "写调试串"
		}),
		"\n",
		jsxs(Opcode, {
			id: "0662",
			name: "WRITE_DEBUG",
			children: [jsx(_components.p, { children: "写调试字符串到游戏 debug 输出。" }), jsxs(CodeBlockTabs, {
				defaultValue: "OP",
				children: [
					jsxs(CodeBlockTabsList, { children: [
						jsx(CodeBlockTabsTrigger, {
							value: "OP",
							children: "OP"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Lua",
							children: "Lua"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Redux",
							children: "Redux"
						})
					] }),
					jsx(CodeBlockTab, {
						value: "OP",
						children: jsx(Fragment, { children: jsx(_components.pre, {
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
									children: jsx(_components.span, { children: "0662 WRITE_DEBUG" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "in: text" })
								})
							] })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Lua",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "writeDebug"
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
										children: "\"hello\""
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ")"
									})
								]
							}) })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Redux",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "native"
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
										children: "\"WRITE_DEBUG\""
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ", text)"
									})
								]
							}) })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsx(_components.h2, {
			id: "调试串--整数",
			children: "调试串 + 整数"
		}),
		"\n",
		jsx(Opcode, {
			id: "0663",
			name: "WRITE_DEBUG_WITH_INT",
			children: jsxs(CodeBlockTabs, {
				defaultValue: "OP",
				children: [
					jsxs(CodeBlockTabsList, { children: [
						jsx(CodeBlockTabsTrigger, {
							value: "OP",
							children: "OP"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Lua",
							children: "Lua"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Redux",
							children: "Redux"
						})
					] }),
					jsx(CodeBlockTab, {
						value: "OP",
						children: jsx(Fragment, { children: jsx(_components.pre, {
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
									children: jsx(_components.span, { children: "0663 WRITE_DEBUG_WITH_INT" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "in: text, number" })
								})
							] })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Lua",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "writeDebugWithInt"
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
										children: "\"n\""
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
										children: "42"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ")"
									})
								]
							}) })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Redux",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "native"
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
										children: "\"WRITE_DEBUG_WITH_INT\""
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ", text, number)"
									})
								]
							}) })
						}) })
					})
				]
			})
		}),
		"\n",
		jsx(_components.h2, {
			id: "调试串--浮点",
			children: "调试串 + 浮点"
		}),
		"\n",
		jsx(Opcode, {
			id: "0664",
			name: "WRITE_DEBUG_WITH_FLOAT",
			children: jsxs(CodeBlockTabs, {
				defaultValue: "OP",
				children: [
					jsxs(CodeBlockTabsList, { children: [
						jsx(CodeBlockTabsTrigger, {
							value: "OP",
							children: "OP"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Lua",
							children: "Lua"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Redux",
							children: "Redux"
						})
					] }),
					jsx(CodeBlockTab, {
						value: "OP",
						children: jsx(Fragment, { children: jsx(_components.pre, {
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
									children: jsx(_components.span, { children: "0664 WRITE_DEBUG_WITH_FLOAT" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "in: text, number" })
								})
							] })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Lua",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "writeDebugWithFloat"
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
										children: "\"f\""
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
										children: "1.5"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ")"
									})
								]
							}) })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Redux",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "native"
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
										children: "\"WRITE_DEBUG_WITH_FLOAT\""
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ", text, number)"
									})
								]
							}) })
						}) })
					})
				]
			})
		}),
		"\n",
		jsx(_components.h2, {
			id: "断点",
			children: "断点"
		}),
		"\n",
		jsxs(Opcode, {
			id: "2100",
			name: "BREAKPOINT",
			member: "Debugger.Breakpoint",
			children: [jsxs(_components.p, { children: [
				"断点暂停脚本；",
				jsx(_components.code, { children: "blocking" }),
				" 控制是否卡死。可用 F5–F12 一类继续（看插件）。"
			] }), jsxs(CodeBlockTabs, {
				defaultValue: "OP",
				children: [
					jsxs(CodeBlockTabsList, { children: [
						jsx(CodeBlockTabsTrigger, {
							value: "OP",
							children: "OP"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Lua",
							children: "Lua"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Redux",
							children: "Redux"
						})
					] }),
					jsx(CodeBlockTab, {
						value: "OP",
						children: jsx(Fragment, { children: jsx(_components.pre, {
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
									children: jsx(_components.span, { children: "2100 BREAKPOINT" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "in: blocking, text, args..." })
								})
							] })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Lua",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "breakpoint"
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
										children: "true"
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
											"--shiki-light": "#032F62",
											"--shiki-dark": "#9ECBFF"
										},
										children: "\"hit %d\""
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
							}) })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Redux",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "Debugger."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "breakpoint"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(blocking, text, "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "..."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "args)"
									})
								]
							}) })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsx(_components.h2, {
			id: "trace",
			children: "TRACE"
		}),
		"\n",
		jsxs(Opcode, {
			id: "2101",
			name: "TRACE",
			member: "Debugger.Trace",
			children: [jsxs(_components.p, { children: [
				"屏上打调试字并写入 ",
				jsx(_components.code, { children: ".cleo.log" }),
				"。"
			] }), jsxs(CodeBlockTabs, {
				defaultValue: "OP",
				children: [
					jsxs(CodeBlockTabsList, { children: [
						jsx(CodeBlockTabsTrigger, {
							value: "OP",
							children: "OP"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Lua",
							children: "Lua"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Redux",
							children: "Redux"
						})
					] }),
					jsx(CodeBlockTab, {
						value: "OP",
						children: jsx(Fragment, { children: jsx(_components.pre, {
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
									children: jsx(_components.span, { children: "2101 TRACE" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "in: text, args..." })
								})
							] })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Lua",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "trace"
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
										children: "\"pos %f %f\""
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ", x, y)"
									})
								]
							}) })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Redux",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "Debugger."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "trace"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(text, "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "..."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "args)"
									})
								]
							}) })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsx(_components.h2, {
			id: "写日志文件",
			children: "写日志文件"
		}),
		"\n",
		jsxs(Opcode, {
			id: "2102",
			name: "LOG_TO_FILE",
			member: "Debugger.LogLine",
			children: [jsxs(_components.p, { children: [
				"往文件追加一行。",
				jsx(_components.code, { children: "timestamp" }),
				" 为真则带日期时间前缀。不受 debug 开关影响。"
			] }), jsxs(CodeBlockTabs, {
				defaultValue: "OP",
				children: [
					jsxs(CodeBlockTabsList, { children: [
						jsx(CodeBlockTabsTrigger, {
							value: "OP",
							children: "OP"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Lua",
							children: "Lua"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Redux",
							children: "Redux"
						})
					] }),
					jsx(CodeBlockTab, {
						value: "OP",
						children: jsx(Fragment, { children: jsx(_components.pre, {
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
									children: jsx(_components.span, { children: "2102 LOG_TO_FILE" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "in: filename, timestamp, text, args..." })
								})
							] })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Lua",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "logToFile"
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
										children: "\"cleo/log.txt\""
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
										children: "true"
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
							}) })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Redux",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "Debugger."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "logLine"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(filename, timestamp, text, "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "..."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "args)"
									})
								]
							}) })
						}) })
					})
				]
			})]
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
