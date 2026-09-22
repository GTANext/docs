import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/plugins/utils/math-color-timer.mdx?collection=docs
var frontmatter = {
	"title": "色数学墙钟 color / maths / Timer",
	"description": "颜色、圆周率与墙钟计时"
};
var _markdown = "\n\n`Color.h` / `Maths.h` / `Timer.h`\n\n## 预置颜色 [#预置颜色]\n\n大量 CSS 风格色名，类型为 `CRGBA`。\n\n<CodeBlockTabs defaultValue=\"签名\">\n  <CodeBlockTabsList>\n    <CodeBlockTabsTrigger value=\"签名\">\n      签名\n    </CodeBlockTabsTrigger>\n\n    <CodeBlockTabsTrigger value=\"示例\">\n      示例\n    </CodeBlockTabsTrigger>\n  </CodeBlockTabsList>\n\n  <CodeBlockTab value=\"签名\">\n    ```cpp\n    namespace color {\n        extern CRGBA Red, Green, Blue, White, Black, /* ... */;\n    }\n    ```\n  </CodeBlockTab>\n\n  <CodeBlockTab value=\"示例\">\n    ```cpp\n    #include \"Color.h\"\n    CRGBA c = plugin::color::Orange;\n    ```\n  </CodeBlockTab>\n</CodeBlockTabs>\n\n## 圆周率 [#圆周率]\n\n<CodeBlockTabs defaultValue=\"签名\">\n  <CodeBlockTabsList>\n    <CodeBlockTabsTrigger value=\"签名\">\n      签名\n    </CodeBlockTabsTrigger>\n\n    <CodeBlockTabsTrigger value=\"示例\">\n      示例\n    </CodeBlockTabsTrigger>\n  </CodeBlockTabsList>\n\n  <CodeBlockTab value=\"签名\">\n    ```cpp\n    namespace maths {\n        template <typename T> static inline T pi();\n    }\n    #define PI (plugin::maths::pi<double>())\n    #define TWOPI (PI*2)\n    ```\n  </CodeBlockTab>\n\n  <CodeBlockTab value=\"示例\">\n    ```cpp\n    #include \"Maths.h\"\n    double p = PI;\n    float half = static_cast<float>(plugin::maths::pi<float>());\n    ```\n  </CodeBlockTab>\n</CodeBlockTabs>\n\n## 墙钟计时 [#墙钟计时]\n\n`Timer` 使用高精度时钟，自构造起计时；**暂停游戏仍继续走**。需要游戏时间时用 `CTimer::m_snTimeInMilliseconds`。\n\n<CodeBlockTabs defaultValue=\"签名\">\n  <CodeBlockTabsList>\n    <CodeBlockTabsTrigger value=\"签名\">\n      签名\n    </CodeBlockTabsTrigger>\n\n    <CodeBlockTabsTrigger value=\"示例\">\n      示例\n    </CodeBlockTabsTrigger>\n  </CodeBlockTabsList>\n\n  <CodeBlockTab value=\"签名\">\n    ```cpp\n    class Timer {\n        Timer();\n        template <typename T = int32_t>\n        static T GetTimeInMilliseconds();\n        template <typename T = double>\n        static T GetTimeInSeconds();\n    };\n    ```\n  </CodeBlockTab>\n\n  <CodeBlockTab value=\"示例\">\n    ```cpp\n    #include \"Timer.h\"\n\n    static plugin::Timer g_timer;\n    static int32_t last_ms = 0;\n\n    plugin::Events::processScriptsEvent += [] {\n        int32_t now = plugin::Timer::GetTimeInMilliseconds();\n        if (now - last_ms < 200) {\n            return;\n        }\n        last_ms = now;\n    };\n    ```\n  </CodeBlockTab>\n</CodeBlockTabs>\n\n角度、限幅、插值见 [杂项工具](/docs/plugins/utils/other)。\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "`Color.h` / `Maths.h` / `Timer.h`"
		},
		{
			"heading": "预置颜色",
			"content": "大量 CSS 风格色名，类型为 `CRGBA`。"
		},
		{
			"heading": "墙钟计时",
			"content": "`Timer` 使用高精度时钟，自构造起计时；**暂停游戏仍继续走**。需要游戏时间时用 `CTimer::m_snTimeInMilliseconds`。"
		},
		{
			"heading": "墙钟计时",
			"content": "角度、限幅、插值见 杂项工具。"
		}
	],
	"headings": [
		{
			"id": "预置颜色",
			"content": "预置颜色"
		},
		{
			"id": "圆周率",
			"content": "圆周率"
		},
		{
			"id": "墙钟计时",
			"content": "墙钟计时"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#预置颜色",
		title: jsx(Fragment, { children: "预置颜色" })
	},
	{
		depth: 2,
		url: "#圆周率",
		title: jsx(Fragment, { children: "圆周率" })
	},
	{
		depth: 2,
		url: "#墙钟计时",
		title: jsx(Fragment, { children: "墙钟计时" })
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
		...props.components
	}, { CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger } = _components;
	if (!CodeBlockTab) _missingMdxReference("CodeBlockTab", true);
	if (!CodeBlockTabs) _missingMdxReference("CodeBlockTabs", true);
	if (!CodeBlockTabsList) _missingMdxReference("CodeBlockTabsList", true);
	if (!CodeBlockTabsTrigger) _missingMdxReference("CodeBlockTabsTrigger", true);
	return jsxs(Fragment, { children: [
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "Color.h" }),
			" / ",
			jsx(_components.code, { children: "Maths.h" }),
			" / ",
			jsx(_components.code, { children: "Timer.h" })
		] }),
		"\n",
		jsx(_components.h2, {
			id: "预置颜色",
			children: "预置颜色"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"大量 CSS 风格色名，类型为 ",
			jsx(_components.code, { children: "CRGBA" }),
			"。"
		] }),
		"\n",
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
										children: "namespace"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " color"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " {"
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
										children: "    extern"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " CRGBA Red, Green, Blue, White, Black,"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6A737D",
											"--shiki-dark": "#6A737D"
										},
										children: " /* ... */"
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
									children: " \"Color.h\""
								})]
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
										children: "CRGBA c "
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
										children: " plugin"
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
										children: "color"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "::Orange;"
									})
								]
							})
						] })
					}) })
				})
			]
		}),
		"\n",
		jsx(_components.h2, {
			id: "圆周率",
			children: "圆周率"
		}),
		"\n",
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
										children: "namespace"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " maths"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " {"
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
										children: "    template"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " <"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "typename"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " T"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "> "
									}),
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
										children: " inline"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " T"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " pi"
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
							jsx(_components.span, {
								className: "line",
								children: jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "}"
								})
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
										children: "#define"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " PI"
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
										children: "maths"
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
										children: "pi"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "<"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "double"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ">())"
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
										children: "#define"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " TWOPI"
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
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: "PI"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "*2)"
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
									children: " \"Maths.h\""
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
										children: "double"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " p "
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
										children: " PI;"
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
										children: "float"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " half "
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
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " static_cast<float>"
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
										children: "maths"
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
										children: "pi"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "<"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "float"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ">());"
									})
								]
							})
						] })
					}) })
				})
			]
		}),
		"\n",
		jsx(_components.h2, {
			id: "墙钟计时",
			children: "墙钟计时"
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "Timer" }),
			" 使用高精度时钟，自构造起计时；",
			jsx(_components.strong, { children: "暂停游戏仍继续走" }),
			"。需要游戏时间时用 ",
			jsx(_components.code, { children: "CTimer::m_snTimeInMilliseconds" }),
			"。"
		] }),
		"\n",
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
										children: "class"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " Timer"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " {"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								className: "line",
								children: [jsx(_components.span, {
									style: {
										"--shiki-light": "#6F42C1",
										"--shiki-dark": "#B392F0"
									},
									children: "    Timer"
								}), jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "();"
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
										children: "    template"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " <"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "typename"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " T"
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
										children: " int32_t>"
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
										children: "    static"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " T"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " GetTimeInMilliseconds"
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
										children: "    template"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " <"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "typename"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " T"
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
										children: " double>"
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
										children: "    static"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " T"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " GetTimeInSeconds"
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
									children: " \"Timer.h\""
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
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "static"
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
										children: "::Timer g_timer;"
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
										children: " int32_t"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " last_ms "
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
										children: " 0"
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
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "    int32_t"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " now "
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
										children: " plugin"
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
										children: "Timer"
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
										children: "GetTimeInMilliseconds"
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
										children: " (now "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "-"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " last_ms "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "<"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " 200"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ") {"
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
									children: "        return"
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
									children: "    }"
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
										children: "    last_ms "
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
										children: " now;"
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
									children: "};"
								})
							})
						] })
					}) })
				})
			]
		}),
		"\n",
		jsxs(_components.p, { children: [
			"角度、限幅、插值见 ",
			jsx(_components.a, {
				href: "/docs/plugins/utils/other",
				children: "杂项工具"
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
function _missingMdxReference(id, component) {
	throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
//#endregion
export { _markdown, MDXContent as default, frontmatter, structuredData, toc };
