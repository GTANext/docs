import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/xbase/version.mdx?collection=docs
var frontmatter = {
	"title": "Version",
	"description": "游戏版本检测与版本名称。"
};
var _markdown = "\n\n`include/XBase/Version.h` · `XBase`\n\n## GameVersion 枚举 [#gameversion-枚举]\n\n```cpp\nenum class GameVersion {\n    SA,  // Grand Theft Auto: San Andreas\n    VC,  // Grand Theft Auto: Vice City\n    III  // Grand Theft Auto III\n};\n```\n\n定义支持的 GTA 游戏版本枚举值；所有函数为编译期 `inline`，按当前静态库的编译宏返回固定结果。\n\n## GetGameVersion [#getgameversion]\n\n```cpp\nGameVersion GetGameVersion();\n```\n\n返回当前游戏对应的 `GameVersion` 枚举值。\n\n## IsSA [#issa]\n\n```cpp\nbool IsSA();\n```\n\n检测当前游戏是否为 Grand Theft Auto: San Andreas。\n\n## IsVC [#isvc]\n\n```cpp\nbool IsVC();\n```\n\n检测当前游戏是否为 Grand Theft Auto: Vice City。\n\n## IsIII [#isiii]\n\n```cpp\nbool IsIII();\n```\n\n检测当前游戏是否为 Grand Theft Auto III。\n\n## GetVersionName [#getversionname]\n\n```cpp\nstd::string GetVersionName();\n```\n\n返回当前游戏版本的名称字符串（例如 `\"SA\"`、`\"VC\"`、`\"III\"`）。\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "`include/XBase/Version.h` · `XBase`"
		},
		{
			"heading": "gameversion-枚举",
			"content": "定义支持的 GTA 游戏版本枚举值；所有函数为编译期 `inline`，按当前静态库的编译宏返回固定结果。"
		},
		{
			"heading": "getgameversion",
			"content": "返回当前游戏对应的 `GameVersion` 枚举值。"
		},
		{
			"heading": "issa",
			"content": "检测当前游戏是否为 Grand Theft Auto: San Andreas。"
		},
		{
			"heading": "isvc",
			"content": "检测当前游戏是否为 Grand Theft Auto: Vice City。"
		},
		{
			"heading": "isiii",
			"content": "检测当前游戏是否为 Grand Theft Auto III。"
		},
		{
			"heading": "getversionname",
			"content": "返回当前游戏版本的名称字符串（例如 `\"SA\"`、`\"VC\"`、`\"III\"`）。"
		}
	],
	"headings": [
		{
			"id": "gameversion-枚举",
			"content": "GameVersion 枚举"
		},
		{
			"id": "getgameversion",
			"content": "GetGameVersion"
		},
		{
			"id": "issa",
			"content": "IsSA"
		},
		{
			"id": "isvc",
			"content": "IsVC"
		},
		{
			"id": "isiii",
			"content": "IsIII"
		},
		{
			"id": "getversionname",
			"content": "GetVersionName"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#gameversion-枚举",
		title: jsx(Fragment, { children: "GameVersion 枚举" })
	},
	{
		depth: 2,
		url: "#getgameversion",
		title: jsx(Fragment, { children: "GetGameVersion" })
	},
	{
		depth: 2,
		url: "#issa",
		title: jsx(Fragment, { children: "IsSA" })
	},
	{
		depth: 2,
		url: "#isvc",
		title: jsx(Fragment, { children: "IsVC" })
	},
	{
		depth: 2,
		url: "#isiii",
		title: jsx(Fragment, { children: "IsIII" })
	},
	{
		depth: 2,
		url: "#getversionname",
		title: jsx(Fragment, { children: "GetVersionName" })
	}
];
function _createMdxContent(props) {
	const _components = {
		code: "code",
		h2: "h2",
		p: "p",
		pre: "pre",
		span: "span",
		...props.components
	};
	return jsxs(Fragment, { children: [
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "include/XBase/Version.h" }),
			" · ",
			jsx(_components.code, { children: "XBase" })
		] }),
		"\n",
		jsx(_components.h2, {
			id: "gameversion-枚举",
			children: "GameVersion 枚举"
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
					children: [
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "enum"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " class"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " GameVersion"
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
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "    SA"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ","
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6A737D",
								"--shiki-dark": "#6A737D"
							},
							children: "  // Grand Theft Auto: San Andreas"
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
							children: "    VC"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ","
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6A737D",
								"--shiki-dark": "#6A737D"
							},
							children: "  // Grand Theft Auto: Vice City"
						})
					]
				}),
				"\n",
				jsxs(_components.span, {
					className: "line",
					children: [jsx(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: "    III"
					}), jsx(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "  // Grand Theft Auto III"
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
						children: "};"
					})
				})
			] })
		}) }),
		"\n",
		jsxs(_components.p, { children: [
			"定义支持的 GTA 游戏版本枚举值；所有函数为编译期 ",
			jsx(_components.code, { children: "inline" }),
			"，按当前静态库的编译宏返回固定结果。"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "getgameversion",
			children: "GetGameVersion"
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
			children: jsx(_components.code, { children: jsxs(_components.span, {
				className: "line",
				children: [
					jsx(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "GameVersion"
					}),
					jsx(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: " GetGameVersion"
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
		}) }),
		"\n",
		jsxs(_components.p, { children: [
			"返回当前游戏对应的 ",
			jsx(_components.code, { children: "GameVersion" }),
			" 枚举值。"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "issa",
			children: "IsSA"
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
			children: jsx(_components.code, { children: jsxs(_components.span, {
				className: "line",
				children: [
					jsx(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "bool"
					}),
					jsx(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: " IsSA"
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
		}) }),
		"\n",
		jsx(_components.p, { children: "检测当前游戏是否为 Grand Theft Auto: San Andreas。" }),
		"\n",
		jsx(_components.h2, {
			id: "isvc",
			children: "IsVC"
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
			children: jsx(_components.code, { children: jsxs(_components.span, {
				className: "line",
				children: [
					jsx(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "bool"
					}),
					jsx(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: " IsVC"
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
		}) }),
		"\n",
		jsx(_components.p, { children: "检测当前游戏是否为 Grand Theft Auto: Vice City。" }),
		"\n",
		jsx(_components.h2, {
			id: "isiii",
			children: "IsIII"
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
			children: jsx(_components.code, { children: jsxs(_components.span, {
				className: "line",
				children: [
					jsx(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "bool"
					}),
					jsx(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: " IsIII"
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
		}) }),
		"\n",
		jsx(_components.p, { children: "检测当前游戏是否为 Grand Theft Auto III。" }),
		"\n",
		jsx(_components.h2, {
			id: "getversionname",
			children: "GetVersionName"
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
			children: jsx(_components.code, { children: jsxs(_components.span, {
				className: "line",
				children: [
					jsx(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "std"
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
						children: "string"
					}),
					jsx(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: " GetVersionName"
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
		}) }),
		"\n",
		jsxs(_components.p, { children: [
			"返回当前游戏版本的名称字符串（例如 ",
			jsx(_components.code, { children: "\"SA\"" }),
			"、",
			jsx(_components.code, { children: "\"VC\"" }),
			"、",
			jsx(_components.code, { children: "\"III\"" }),
			"）。"
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
