import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/cleo/sa/game.mdx?collection=docs
var frontmatter = {
	"title": "游戏 Game / Pad",
	"description": "版本、平台、按键与作弊串"
};
var _markdown = "\n\n`sa` · 扩展 `CLEO` · 需 CLEO\n\n版本、平台、按键、作弊串。\n\n写法见 [Lua](/docs/cleo/syntax) / [Redux](/docs/cleo/syntax-redux)。\n\n## 是否原版 [#是否原版]\n\n<Opcode id=\"0AA9\" name=\"IS_GAME_VERSION_ORIGINAL\" member=\"Game.IsVersionOriginal\">\n  是否原版 1.0。用在 `if` 里。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      0AA9 IS_GAME_VERSION_ORIGINAL\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      if isGameVersionOriginal() then\n      end\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      if (Game.isVersionOriginal()) {\n      }\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n\n## 取平台 [#取平台]\n\n<Opcode id=\"0DD5\" name=\"GET_PLATFORM\" member=\"Game.GetPlatform\">\n  当前平台标识（PC / Android / Xbox 等）。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      0DD5 GET_PLATFORM\n      out: platform\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      local platform = getPlatform()\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      const platform = Game.getPlatform()\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n\n## 按键是否按下 [#按键是否按下]\n\n<Opcode id=\"0AB0\" name=\"IS_KEY_PRESSED\" member=\"Pad.IsKeyPressed\">\n  指定虚拟键码是否按下。用在 `if` 里。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      0AB0 IS_KEY_PRESSED\n      in: keyCode\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      if isKeyPressed(0x20) then -- space\n      end\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      if (Pad.isKeyPressed(keyCode)) {\n      }\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n\n## 测试作弊串 [#测试作弊串]\n\n<Opcode id=\"0ADC\" name=\"TEST_CHEAT\" member=\"Pad.TestCheat\">\n  键盘是否刚打出指定作弊串。用在 `if` 里。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      0ADC TEST_CHEAT\n      in: input\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      if testCheat(\"HESOYAM\") then\n      end\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      if (Pad.testCheat(input)) {\n      }\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "`sa` · 扩展 `CLEO` · 需 CLEO"
		},
		{
			"heading": void 0,
			"content": "版本、平台、按键、作弊串。"
		},
		{
			"heading": void 0,
			"content": "写法见 Lua / Redux。"
		},
		{
			"heading": "是否原版",
			"content": "是否原版 1.0。用在 `if` 里。"
		},
		{
			"heading": "取平台",
			"content": "当前平台标识（PC / Android / Xbox 等）。"
		},
		{
			"heading": "按键是否按下",
			"content": "指定虚拟键码是否按下。用在 `if` 里。"
		},
		{
			"heading": "测试作弊串",
			"content": "键盘是否刚打出指定作弊串。用在 `if` 里。"
		}
	],
	"headings": [
		{
			"id": "是否原版",
			"content": "是否原版"
		},
		{
			"id": "取平台",
			"content": "取平台"
		},
		{
			"id": "按键是否按下",
			"content": "按键是否按下"
		},
		{
			"id": "测试作弊串",
			"content": "测试作弊串"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#是否原版",
		title: jsx(Fragment, { children: "是否原版" })
	},
	{
		depth: 2,
		url: "#取平台",
		title: jsx(Fragment, { children: "取平台" })
	},
	{
		depth: 2,
		url: "#按键是否按下",
		title: jsx(Fragment, { children: "按键是否按下" })
	},
	{
		depth: 2,
		url: "#测试作弊串",
		title: jsx(Fragment, { children: "测试作弊串" })
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
			jsx(_components.code, { children: "CLEO" }),
			" · 需 CLEO"
		] }),
		"\n",
		jsx(_components.p, { children: "版本、平台、按键、作弊串。" }),
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
			id: "是否原版",
			children: "是否原版"
		}),
		"\n",
		jsxs(Opcode, {
			id: "0AA9",
			name: "IS_GAME_VERSION_ORIGINAL",
			member: "Game.IsVersionOriginal",
			children: [jsxs(_components.p, { children: [
				"是否原版 1.0。用在 ",
				jsx(_components.code, { children: "if" }),
				" 里。"
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
							children: jsx(_components.code, { children: jsx(_components.span, {
								className: "line",
								children: jsx(_components.span, { children: "0AA9 IS_GAME_VERSION_ORIGINAL" })
							}) })
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
							children: jsxs(_components.code, { children: [
								jsxs(_components.span, {
									className: "line",
									children: [
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: "if"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#005CC5",
												"--shiki-dark": "#79B8FF"
											},
											children: " isGameVersionOriginal"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: "() "
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
							children: jsxs(_components.code, { children: [
								jsxs(_components.span, {
									className: "line",
									children: [
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: "if"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: " (Game."
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: "isVersionOriginal"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: "()) {"
										})
									]
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "}"
									})
								})
							] })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsx(_components.h2, {
			id: "取平台",
			children: "取平台"
		}),
		"\n",
		jsxs(Opcode, {
			id: "0DD5",
			name: "GET_PLATFORM",
			member: "Game.GetPlatform",
			children: [jsx(_components.p, { children: "当前平台标识（PC / Android / Xbox 等）。" }), jsxs(CodeBlockTabs, {
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
									children: jsx(_components.span, { children: "0DD5 GET_PLATFORM" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "out: platform" })
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
										children: " platform "
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
										children: " getPlatform"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "()"
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
										children: " platform"
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
										children: " Game."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "getPlatform"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "()"
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
			id: "按键是否按下",
			children: "按键是否按下"
		}),
		"\n",
		jsxs(Opcode, {
			id: "0AB0",
			name: "IS_KEY_PRESSED",
			member: "Pad.IsKeyPressed",
			children: [jsxs(_components.p, { children: [
				"指定虚拟键码是否按下。用在 ",
				jsx(_components.code, { children: "if" }),
				" 里。"
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
									children: jsx(_components.span, { children: "0AB0 IS_KEY_PRESSED" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "in: keyCode" })
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
							children: jsxs(_components.code, { children: [
								jsxs(_components.span, {
									className: "line",
									children: [
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: "if"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#005CC5",
												"--shiki-dark": "#79B8FF"
											},
											children: " isKeyPressed"
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
											children: "0x20"
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
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#6A737D",
												"--shiki-dark": "#6A737D"
											},
											children: " -- space"
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
										children: "end"
									})
								})
							] })
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
							children: jsxs(_components.code, { children: [
								jsxs(_components.span, {
									className: "line",
									children: [
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: "if"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: " (Pad."
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: "isKeyPressed"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: "(keyCode)) {"
										})
									]
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "}"
									})
								})
							] })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsx(_components.h2, {
			id: "测试作弊串",
			children: "测试作弊串"
		}),
		"\n",
		jsxs(Opcode, {
			id: "0ADC",
			name: "TEST_CHEAT",
			member: "Pad.TestCheat",
			children: [jsxs(_components.p, { children: [
				"键盘是否刚打出指定作弊串。用在 ",
				jsx(_components.code, { children: "if" }),
				" 里。"
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
									children: jsx(_components.span, { children: "0ADC TEST_CHEAT" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "in: input" })
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
							children: jsxs(_components.code, { children: [
								jsxs(_components.span, {
									className: "line",
									children: [
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: "if"
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
											children: "\"HESOYAM\""
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
							children: jsxs(_components.code, { children: [
								jsxs(_components.span, {
									className: "line",
									children: [
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: "if"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: " (Pad."
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: "testCheat"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: "(input)) {"
										})
									]
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "}"
									})
								})
							] })
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
