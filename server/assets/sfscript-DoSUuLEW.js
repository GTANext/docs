import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/cleo/sa/ext/sampfuncs/sfscript.mdx?collection=docs
var frontmatter = {
	"title": "脚本 SfScript",
	"description": "启停脚本与局部变量"
};
var _markdown = "\n\n`sa` · 扩展 `SAMPFUNCS` · 仅 SA-MP；需 SAMPFUNCS\n\n共 6 条。调用见 [Lua](/docs/cleo/syntax) / [Redux](/docs/cleo/syntax-redux)。\n\n## 启动 [#启动]\n\n<Opcode id=\"0C6A\" name=\"SF_START_NEW_SCRIPT_FROM_LABEL\" member=\"SfScript.RunFromLabel\">\n  从 scriptLabel 启动新脚本，并把指针写入 newScriptPtrTo。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      0C6A SF_START_NEW_SCRIPT_FROM_LABEL\n      in: scriptLabel, newScriptPtrTo, passedValues\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      sfStartNewScriptFromLabel(scriptLabel, newScriptPtrTo, passedValues)\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      SfScript.RunFromLabel(scriptLabel, newScriptPtrTo, passedValues)\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n\n<Opcode id=\"0C6B\" name=\"SF_START_NEW_SCRIPT_FROM_POINTER\" member=\"SfScript.RunFromPtr\">\n  从存放脚本二进制的内存位置（scriptBin）启动新脚本。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      0C6B SF_START_NEW_SCRIPT_FROM_POINTER\n      in: scriptBin, newScriptPtrTo, passedValues\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      sfStartNewScriptFromPointer(scriptBin, newScriptPtrTo, passedValues)\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      SfScript.RunFromPtr(scriptBin, newScriptPtrTo, passedValues)\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n\n## 局部变量 / 终止 [#局部变量--终止]\n\n<Opcode id=\"0C6C\" name=\"SF_SET_SCRIPT_LOCAL_VARIABLE\" member=\"SfScript.SetLVar\">\n  设置指定脚本中局部变量的值。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      0C6C SF_SET_SCRIPT_LOCAL_VARIABLE\n      in: self, varIndex, value\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      sfSetScriptLocalVariable(self, varIndex, value)\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      SfScript.setLVar(self, varIndex, value)\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n\n<Opcode id=\"0C6D\" name=\"SF_GET_SCRIPT_LOCAL_VARIABLE\" member=\"SfScript.GetLVar\">\n  返回指定脚本中局部变量的值。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      0C6D SF_GET_SCRIPT_LOCAL_VARIABLE\n      in: self, varIndex\n      out: value\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      local value = sfGetScriptLocalVariable(self, varIndex)\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      const value = SfScript.getLVar(self, varIndex)\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n\n<Opcode id=\"0C6E\" name=\"SF_TERMINATE_SCRIPT\" member=\"SfScript.Terminate\">\n  终止地址指向的脚本。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      0C6E SF_TERMINATE_SCRIPT\n      in: self\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      sfTerminateScript(self)\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      SfScript.terminate(self)\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n\n<Opcode id=\"0C6F\" name=\"SF_RESTART_SCRIPT\" member=\"SfScript.Restart\">\n  重启地址指向的脚本。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      0C6F SF_RESTART_SCRIPT\n      in: self, passedValues\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      sfRestartScript(self, passedValues)\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      SfScript.restart(self, passedValues)\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "`sa` · 扩展 `SAMPFUNCS` · 仅 SA-MP；需 SAMPFUNCS"
		},
		{
			"heading": void 0,
			"content": "共 6 条。调用见 Lua / Redux。"
		},
		{
			"heading": "启动",
			"content": "从 scriptLabel 启动新脚本，并把指针写入 newScriptPtrTo。"
		},
		{
			"heading": "启动",
			"content": "从存放脚本二进制的内存位置（scriptBin）启动新脚本。"
		},
		{
			"heading": "局部变量--终止",
			"content": "设置指定脚本中局部变量的值。"
		},
		{
			"heading": "局部变量--终止",
			"content": "返回指定脚本中局部变量的值。"
		},
		{
			"heading": "局部变量--终止",
			"content": "终止地址指向的脚本。"
		},
		{
			"heading": "局部变量--终止",
			"content": "重启地址指向的脚本。"
		}
	],
	"headings": [{
		"id": "启动",
		"content": "启动"
	}, {
		"id": "局部变量--终止",
		"content": "局部变量 / 终止"
	}]
};
var toc = [{
	depth: 2,
	url: "#启动",
	title: jsx(Fragment, { children: "启动" })
}, {
	depth: 2,
	url: "#局部变量--终止",
	title: jsx(Fragment, { children: "局部变量 / 终止" })
}];
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
			jsx(_components.code, { children: "SAMPFUNCS" }),
			" · 仅 SA-MP；需 SAMPFUNCS"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"共 6 条。调用见 ",
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
			id: "启动",
			children: "启动"
		}),
		"\n",
		jsxs(Opcode, {
			id: "0C6A",
			name: "SF_START_NEW_SCRIPT_FROM_LABEL",
			member: "SfScript.RunFromLabel",
			children: [jsx(_components.p, { children: "从 scriptLabel 启动新脚本，并把指针写入 newScriptPtrTo。" }), jsxs(CodeBlockTabs, {
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
									children: jsx(_components.span, { children: "0C6A SF_START_NEW_SCRIPT_FROM_LABEL" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "in: scriptLabel, newScriptPtrTo, passedValues" })
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
								children: [jsx(_components.span, {
									style: {
										"--shiki-light": "#005CC5",
										"--shiki-dark": "#79B8FF"
									},
									children: "sfStartNewScriptFromLabel"
								}), jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "(scriptLabel, newScriptPtrTo, passedValues)"
								})]
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
										children: "SfScript."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "RunFromLabel"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(scriptLabel, newScriptPtrTo, passedValues)"
									})
								]
							}) })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsxs(Opcode, {
			id: "0C6B",
			name: "SF_START_NEW_SCRIPT_FROM_POINTER",
			member: "SfScript.RunFromPtr",
			children: [jsx(_components.p, { children: "从存放脚本二进制的内存位置（scriptBin）启动新脚本。" }), jsxs(CodeBlockTabs, {
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
									children: jsx(_components.span, { children: "0C6B SF_START_NEW_SCRIPT_FROM_POINTER" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "in: scriptBin, newScriptPtrTo, passedValues" })
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
								children: [jsx(_components.span, {
									style: {
										"--shiki-light": "#005CC5",
										"--shiki-dark": "#79B8FF"
									},
									children: "sfStartNewScriptFromPointer"
								}), jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "(scriptBin, newScriptPtrTo, passedValues)"
								})]
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
										children: "SfScript."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "RunFromPtr"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(scriptBin, newScriptPtrTo, passedValues)"
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
			id: "局部变量--终止",
			children: "局部变量 / 终止"
		}),
		"\n",
		jsxs(Opcode, {
			id: "0C6C",
			name: "SF_SET_SCRIPT_LOCAL_VARIABLE",
			member: "SfScript.SetLVar",
			children: [jsx(_components.p, { children: "设置指定脚本中局部变量的值。" }), jsxs(CodeBlockTabs, {
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
									children: jsx(_components.span, { children: "0C6C SF_SET_SCRIPT_LOCAL_VARIABLE" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "in: self, varIndex, value" })
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
										children: "sfSetScriptLocalVariable"
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
										children: "self"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ", varIndex, value)"
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
										children: "SfScript."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "setLVar"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(self, varIndex, value)"
									})
								]
							}) })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsxs(Opcode, {
			id: "0C6D",
			name: "SF_GET_SCRIPT_LOCAL_VARIABLE",
			member: "SfScript.GetLVar",
			children: [jsx(_components.p, { children: "返回指定脚本中局部变量的值。" }), jsxs(CodeBlockTabs, {
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
									children: jsx(_components.span, { children: "0C6D SF_GET_SCRIPT_LOCAL_VARIABLE" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "in: self, varIndex" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "out: value" })
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
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "local"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " value "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "="
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " sfGetScriptLocalVariable"
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
										children: "self"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ", varIndex)"
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
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "const"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " value"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ="
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " SfScript."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "getLVar"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(self, varIndex)"
									})
								]
							}) })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsxs(Opcode, {
			id: "0C6E",
			name: "SF_TERMINATE_SCRIPT",
			member: "SfScript.Terminate",
			children: [jsx(_components.p, { children: "终止地址指向的脚本。" }), jsxs(CodeBlockTabs, {
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
									children: jsx(_components.span, { children: "0C6E SF_TERMINATE_SCRIPT" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "in: self" })
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
										children: "sfTerminateScript"
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
										children: "self"
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
										children: "SfScript."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "terminate"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(self)"
									})
								]
							}) })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsxs(Opcode, {
			id: "0C6F",
			name: "SF_RESTART_SCRIPT",
			member: "SfScript.Restart",
			children: [jsx(_components.p, { children: "重启地址指向的脚本。" }), jsxs(CodeBlockTabs, {
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
									children: jsx(_components.span, { children: "0C6F SF_RESTART_SCRIPT" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "in: self, passedValues" })
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
										children: "sfRestartScript"
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
										children: "self"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ", passedValues)"
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
										children: "SfScript."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "restart"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(self, passedValues)"
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
