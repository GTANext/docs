import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/plugins/extensions/keycheck.mdx?collection=docs
var frontmatter = {
	"title": "按键 KeyCheck",
	"description": "边沿检测与延迟连发"
};
var _markdown = "\n\n`KeyCheck.h` · **全局类**，不在 `plugin::` 命名空间。\n\n## 每帧刷新 [#每帧刷新]\n\n<Api name=\"Update\">\n  在逻辑帧里先调用，刷新当前 / 上一帧键状态。\n\n  <CodeBlockTabs defaultValue=\"签名\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"签名\">\n        签名\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"示例\">\n        示例\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"签名\">\n      ```cpp\n      static void Update();\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"示例\">\n      ```cpp\n      KeyCheck::Update();\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Api>\n\n## 检测按键 [#检测按键]\n\n<Api name=\"Check / CheckJustDown / CheckJustUp / CheckWithDelay\">\n  * `Check`：当前是否按住\n  * `CheckJustDown` / `CheckJustUp`：边沿\n  * `CheckWithDelay`：按住连发（毫秒）\n\n  仅需「是否按下」且不要边沿时，可用 `plugin::KeyPressed`（见 [杂项工具](/docs/plugins/utils/other)）。\n\n  <CodeBlockTabs defaultValue=\"签名\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"签名\">\n        签名\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"示例\">\n        示例\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"签名\">\n      ```cpp\n      static bool Check(unsigned int key);\n      static bool CheckJustDown(unsigned int key);\n      static bool CheckJustUp(unsigned int key);\n      static bool CheckWithDelay(unsigned int key, unsigned int time); // III/VC/SA\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"示例\">\n      ```cpp\n      #include \"extensions/KeyCheck.h\"\n\n      plugin::Events::processScriptsEvent += [] {\n          KeyCheck::Update();\n          if (KeyCheck::CheckJustDown(VK_F7)) {\n              CPed* ped = FindPlayerPed();\n              if (!ped) {\n                  return;\n              }\n              ped->m_fHealth = ped->m_fMaxHealth;\n          }\n      };\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Api>\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "`KeyCheck.h` · **全局类**，不在 `plugin::` 命名空间。"
		},
		{
			"heading": "每帧刷新",
			"content": "在逻辑帧里先调用，刷新当前 / 上一帧键状态。"
		},
		{
			"heading": "检测按键",
			"content": "`Check`：当前是否按住"
		},
		{
			"heading": "检测按键",
			"content": "`CheckJustDown` / `CheckJustUp`：边沿"
		},
		{
			"heading": "检测按键",
			"content": "`CheckWithDelay`：按住连发（毫秒）"
		},
		{
			"heading": "检测按键",
			"content": "仅需「是否按下」且不要边沿时，可用 `plugin::KeyPressed`（见 杂项工具）。"
		}
	],
	"headings": [{
		"id": "每帧刷新",
		"content": "每帧刷新"
	}, {
		"id": "检测按键",
		"content": "检测按键"
	}]
};
var toc = [{
	depth: 2,
	url: "#每帧刷新",
	title: jsx(Fragment, { children: "每帧刷新" })
}, {
	depth: 2,
	url: "#检测按键",
	title: jsx(Fragment, { children: "检测按键" })
}];
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
		ul: "ul",
		...props.components
	}, { Api, CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger } = _components;
	if (!Api) _missingMdxReference("Api", true);
	if (!CodeBlockTab) _missingMdxReference("CodeBlockTab", true);
	if (!CodeBlockTabs) _missingMdxReference("CodeBlockTabs", true);
	if (!CodeBlockTabsList) _missingMdxReference("CodeBlockTabsList", true);
	if (!CodeBlockTabsTrigger) _missingMdxReference("CodeBlockTabsTrigger", true);
	return jsxs(Fragment, { children: [
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "KeyCheck.h" }),
			" · ",
			jsx(_components.strong, { children: "全局类" }),
			"，不在 ",
			jsx(_components.code, { children: "plugin::" }),
			" 命名空间。"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "每帧刷新",
			children: "每帧刷新"
		}),
		"\n",
		jsxs(Api, {
			name: "Update",
			children: [jsx(_components.p, { children: "在逻辑帧里先调用，刷新当前 / 上一帧键状态。" }), jsxs(CodeBlockTabs, {
				defaultValue: "签名",
				children: [
					jsxs(CodeBlockTabsList, { children: [jsx(CodeBlockTabsTrigger, {
						value: "签名",
						children: "签名"
					}), jsx(CodeBlockTabsTrigger, {
						value: "示例",
						children: "示例"
					})] }),
					jsx(CodeBlockTab, {
						value: "签名",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "static"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " void"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " Update"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "();"
									})
								]
							}) })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "示例",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "KeyCheck"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "::"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "Update"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "();"
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
			id: "检测按键",
			children: "检测按键"
		}),
		"\n",
		jsxs(Api, {
			name: "Check / CheckJustDown / CheckJustUp / CheckWithDelay",
			children: [
				jsxs(_components.ul, { children: [
					"\n",
					jsxs(_components.li, { children: [jsx(_components.code, { children: "Check" }), "：当前是否按住"] }),
					"\n",
					jsxs(_components.li, { children: [
						jsx(_components.code, { children: "CheckJustDown" }),
						" / ",
						jsx(_components.code, { children: "CheckJustUp" }),
						"：边沿"
					] }),
					"\n",
					jsxs(_components.li, { children: [jsx(_components.code, { children: "CheckWithDelay" }), "：按住连发（毫秒）"] }),
					"\n"
				] }),
				jsxs(_components.p, { children: [
					"仅需「是否按下」且不要边沿时，可用 ",
					jsx(_components.code, { children: "plugin::KeyPressed" }),
					"（见 ",
					jsx(_components.a, {
						href: "/docs/plugins/utils/other",
						children: "杂项工具"
					}),
					"）。"
				] }),
				jsxs(CodeBlockTabs, {
					defaultValue: "签名",
					children: [
						jsxs(CodeBlockTabsList, { children: [jsx(CodeBlockTabsTrigger, {
							value: "签名",
							children: "签名"
						}), jsx(CodeBlockTabsTrigger, {
							value: "示例",
							children: "示例"
						})] }),
						jsx(CodeBlockTab, {
							value: "签名",
							children: jsx(Fragment, { children: jsx(_components.pre, {
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
										children: [
											jsx(_components.span, {
												style: {
													"--shiki-light": "#D73A49",
													"--shiki-dark": "#F97583"
												},
												children: "static"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#D73A49",
													"--shiki-dark": "#F97583"
												},
												children: " bool"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#6F42C1",
													"--shiki-dark": "#B392F0"
												},
												children: " Check"
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
													"--shiki-light": "#D73A49",
													"--shiki-dark": "#F97583"
												},
												children: "unsigned"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#D73A49",
													"--shiki-dark": "#F97583"
												},
												children: " int"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#E36209",
													"--shiki-dark": "#FFAB70"
												},
												children: " key"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#24292E",
													"--shiki-dark": "#E1E4E8"
												},
												children: ");"
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
												children: "static"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#D73A49",
													"--shiki-dark": "#F97583"
												},
												children: " bool"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#6F42C1",
													"--shiki-dark": "#B392F0"
												},
												children: " CheckJustDown"
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
													"--shiki-light": "#D73A49",
													"--shiki-dark": "#F97583"
												},
												children: "unsigned"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#D73A49",
													"--shiki-dark": "#F97583"
												},
												children: " int"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#E36209",
													"--shiki-dark": "#FFAB70"
												},
												children: " key"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#24292E",
													"--shiki-dark": "#E1E4E8"
												},
												children: ");"
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
												children: "static"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#D73A49",
													"--shiki-dark": "#F97583"
												},
												children: " bool"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#6F42C1",
													"--shiki-dark": "#B392F0"
												},
												children: " CheckJustUp"
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
													"--shiki-light": "#D73A49",
													"--shiki-dark": "#F97583"
												},
												children: "unsigned"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#D73A49",
													"--shiki-dark": "#F97583"
												},
												children: " int"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#E36209",
													"--shiki-dark": "#FFAB70"
												},
												children: " key"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#24292E",
													"--shiki-dark": "#E1E4E8"
												},
												children: ");"
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
												children: "static"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#D73A49",
													"--shiki-dark": "#F97583"
												},
												children: " bool"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#6F42C1",
													"--shiki-dark": "#B392F0"
												},
												children: " CheckWithDelay"
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
													"--shiki-light": "#D73A49",
													"--shiki-dark": "#F97583"
												},
												children: "unsigned"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#D73A49",
													"--shiki-dark": "#F97583"
												},
												children: " int"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#E36209",
													"--shiki-dark": "#FFAB70"
												},
												children: " key"
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
													"--shiki-light": "#D73A49",
													"--shiki-dark": "#F97583"
												},
												children: "unsigned"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#D73A49",
													"--shiki-dark": "#F97583"
												},
												children: " int"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#E36209",
													"--shiki-dark": "#FFAB70"
												},
												children: " time"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#24292E",
													"--shiki-dark": "#E1E4E8"
												},
												children: ");"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#6A737D",
													"--shiki-dark": "#6A737D"
												},
												children: " // III/VC/SA"
											})
										]
									})
								] })
							}) })
						}),
						jsx(CodeBlockTab, {
							value: "示例",
							children: jsx(Fragment, { children: jsx(_components.pre, {
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
											children: " \"extensions/KeyCheck.h\""
										})]
									}),
									"\n",
									jsx(_components.span, { className: "line" }),
									"\n",
									jsxs(_components.span, {
										className: "line",
										children: [
											jsx(_components.span, {
												style: {
													"--shiki-light": "#6F42C1",
													"--shiki-dark": "#B392F0"
												},
												children: "plugin"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#24292E",
													"--shiki-dark": "#E1E4E8"
												},
												children: "::"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#6F42C1",
													"--shiki-dark": "#B392F0"
												},
												children: "Events"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#24292E",
													"--shiki-dark": "#E1E4E8"
												},
												children: "::processScriptsEvent "
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#D73A49",
													"--shiki-dark": "#F97583"
												},
												children: "+="
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#24292E",
													"--shiki-dark": "#E1E4E8"
												},
												children: " [] {"
											})
										]
									}),
									"\n",
									jsxs(_components.span, {
										className: "line",
										children: [
											jsx(_components.span, {
												style: {
													"--shiki-light": "#6F42C1",
													"--shiki-dark": "#B392F0"
												},
												children: "    KeyCheck"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#24292E",
													"--shiki-dark": "#E1E4E8"
												},
												children: "::"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#6F42C1",
													"--shiki-dark": "#B392F0"
												},
												children: "Update"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#24292E",
													"--shiki-dark": "#E1E4E8"
												},
												children: "();"
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
												children: "    if"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#24292E",
													"--shiki-dark": "#E1E4E8"
												},
												children: " ("
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#6F42C1",
													"--shiki-dark": "#B392F0"
												},
												children: "KeyCheck"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#24292E",
													"--shiki-dark": "#E1E4E8"
												},
												children: "::"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#6F42C1",
													"--shiki-dark": "#B392F0"
												},
												children: "CheckJustDown"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#24292E",
													"--shiki-dark": "#E1E4E8"
												},
												children: "(VK_F7)) {"
											})
										]
									}),
									"\n",
									jsxs(_components.span, {
										className: "line",
										children: [
											jsx(_components.span, {
												style: {
													"--shiki-light": "#24292E",
													"--shiki-dark": "#E1E4E8"
												},
												children: "        CPed"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#D73A49",
													"--shiki-dark": "#F97583"
												},
												children: "*"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#24292E",
													"--shiki-dark": "#E1E4E8"
												},
												children: " ped "
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
													"--shiki-light": "#6F42C1",
													"--shiki-dark": "#B392F0"
												},
												children: " FindPlayerPed"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#24292E",
													"--shiki-dark": "#E1E4E8"
												},
												children: "();"
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
												children: "        if"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#24292E",
													"--shiki-dark": "#E1E4E8"
												},
												children: " ("
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#D73A49",
													"--shiki-dark": "#F97583"
												},
												children: "!"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#24292E",
													"--shiki-dark": "#E1E4E8"
												},
												children: "ped) {"
											})
										]
									}),
									"\n",
									jsxs(_components.span, {
										className: "line",
										children: [jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: "            return"
										}), jsx(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: ";"
										})]
									}),
									"\n",
									jsx(_components.span, {
										className: "line",
										children: jsx(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: "        }"
										})
									}),
									"\n",
									jsxs(_components.span, {
										className: "line",
										children: [
											jsx(_components.span, {
												style: {
													"--shiki-light": "#24292E",
													"--shiki-dark": "#E1E4E8"
												},
												children: "        ped->m_fHealth "
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
													"--shiki-light": "#24292E",
													"--shiki-dark": "#E1E4E8"
												},
												children: " ped->m_fMaxHealth;"
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
											children: "    }"
										})
									}),
									"\n",
									jsx(_components.span, {
										className: "line",
										children: jsx(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: "};"
										})
									})
								] })
							}) })
						})
					]
				})
			]
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
