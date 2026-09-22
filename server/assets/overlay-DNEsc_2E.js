import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/xbase/overlay.mdx?collection=docs
var frontmatter = {
	"title": "Overlay",
	"description": "屏幕信息覆盖层，显示 FPS、坐标、血量、护甲、金钱、通缉、时间、室内编号。"
};
var _markdown = "\n\n`include/XBase/Overlay.h` · `XBase::Overlay`\n\n## Init [#init]\n\n```cpp\nvoid Init();\n```\n\n初始化覆盖层，默认为隐藏状态。\n\n## Process [#process]\n\n```cpp\nvoid Process();\n```\n\n由 `Core` 领域分发；当前不产生额外每帧工作，保留给后续状态维护。\n\n## Draw [#draw]\n\n```cpp\nvoid Draw();\n```\n\n由宿主在绘制回调中调用，使用游戏字体输出文本，不占用 ImGui 绘制列表。\n\n## SetVisible [#setvisible]\n\n```cpp\nvoid SetVisible(bool enable);\n```\n\n显示或隐藏覆盖层。\n\n## IsVisible [#isvisible]\n\n```cpp\nbool IsVisible();\n```\n\n返回覆盖层当前是否可见。\n\n## Toggle [#toggle]\n\n```cpp\nvoid Toggle();\n```\n\n切换覆盖层的显示与隐藏状态。\n\n## SetPosition [#setposition]\n\n```cpp\nvoid SetPosition(bool topLeft, bool topRight, bool bottomLeft, bool bottomRight);\n```\n\n四个角位都会生效：右侧位置按屏幕宽度右对齐，底部位置按行数贴底。四个参数同时为 `false` 时回退到左上角。\n\n## 生命周期 [#生命周期]\n\n```cpp\nvoid Shutdown();\n```\n\n`Shutdown()` 隐藏覆盖层并复位位置状态。SA 实现完整；VC/III 通过 `Capability::Overlay` 报告不支持。\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "`include/XBase/Overlay.h` · `XBase::Overlay`"
		},
		{
			"heading": "init",
			"content": "初始化覆盖层，默认为隐藏状态。"
		},
		{
			"heading": "process",
			"content": "由 `Core` 领域分发；当前不产生额外每帧工作，保留给后续状态维护。"
		},
		{
			"heading": "draw",
			"content": "由宿主在绘制回调中调用，使用游戏字体输出文本，不占用 ImGui 绘制列表。"
		},
		{
			"heading": "setvisible",
			"content": "显示或隐藏覆盖层。"
		},
		{
			"heading": "isvisible",
			"content": "返回覆盖层当前是否可见。"
		},
		{
			"heading": "toggle",
			"content": "切换覆盖层的显示与隐藏状态。"
		},
		{
			"heading": "setposition",
			"content": "四个角位都会生效：右侧位置按屏幕宽度右对齐，底部位置按行数贴底。四个参数同时为 `false` 时回退到左上角。"
		},
		{
			"heading": "生命周期",
			"content": "`Shutdown()` 隐藏覆盖层并复位位置状态。SA 实现完整；VC/III 通过 `Capability::Overlay` 报告不支持。"
		}
	],
	"headings": [
		{
			"id": "init",
			"content": "Init"
		},
		{
			"id": "process",
			"content": "Process"
		},
		{
			"id": "draw",
			"content": "Draw"
		},
		{
			"id": "setvisible",
			"content": "SetVisible"
		},
		{
			"id": "isvisible",
			"content": "IsVisible"
		},
		{
			"id": "toggle",
			"content": "Toggle"
		},
		{
			"id": "setposition",
			"content": "SetPosition"
		},
		{
			"id": "生命周期",
			"content": "生命周期"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#init",
		title: jsx(Fragment, { children: "Init" })
	},
	{
		depth: 2,
		url: "#process",
		title: jsx(Fragment, { children: "Process" })
	},
	{
		depth: 2,
		url: "#draw",
		title: jsx(Fragment, { children: "Draw" })
	},
	{
		depth: 2,
		url: "#setvisible",
		title: jsx(Fragment, { children: "SetVisible" })
	},
	{
		depth: 2,
		url: "#isvisible",
		title: jsx(Fragment, { children: "IsVisible" })
	},
	{
		depth: 2,
		url: "#toggle",
		title: jsx(Fragment, { children: "Toggle" })
	},
	{
		depth: 2,
		url: "#setposition",
		title: jsx(Fragment, { children: "SetPosition" })
	},
	{
		depth: 2,
		url: "#生命周期",
		title: jsx(Fragment, { children: "生命周期" })
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
			jsx(_components.code, { children: "include/XBase/Overlay.h" }),
			" · ",
			jsx(_components.code, { children: "XBase::Overlay" })
		] }),
		"\n",
		jsx(_components.h2, {
			id: "init",
			children: "Init"
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
						children: "void"
					}),
					jsx(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: " Init"
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
		jsx(_components.p, { children: "初始化覆盖层，默认为隐藏状态。" }),
		"\n",
		jsx(_components.h2, {
			id: "process",
			children: "Process"
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
						children: "void"
					}),
					jsx(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: " Process"
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
			"由 ",
			jsx(_components.code, { children: "Core" }),
			" 领域分发；当前不产生额外每帧工作，保留给后续状态维护。"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "draw",
			children: "Draw"
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
						children: "void"
					}),
					jsx(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: " Draw"
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
		jsx(_components.p, { children: "由宿主在绘制回调中调用，使用游戏字体输出文本，不占用 ImGui 绘制列表。" }),
		"\n",
		jsx(_components.h2, {
			id: "setvisible",
			children: "SetVisible"
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
						children: "void"
					}),
					jsx(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: " SetVisible"
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
						children: "bool"
					}),
					jsx(_components.span, {
						style: {
							"--shiki-light": "#E36209",
							"--shiki-dark": "#FFAB70"
						},
						children: " enable"
					}),
					jsx(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: ");"
					})
				]
			}) })
		}) }),
		"\n",
		jsx(_components.p, { children: "显示或隐藏覆盖层。" }),
		"\n",
		jsx(_components.h2, {
			id: "isvisible",
			children: "IsVisible"
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
						children: " IsVisible"
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
		jsx(_components.p, { children: "返回覆盖层当前是否可见。" }),
		"\n",
		jsx(_components.h2, {
			id: "toggle",
			children: "Toggle"
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
						children: "void"
					}),
					jsx(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: " Toggle"
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
		jsx(_components.p, { children: "切换覆盖层的显示与隐藏状态。" }),
		"\n",
		jsx(_components.h2, {
			id: "setposition",
			children: "SetPosition"
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
						children: "void"
					}),
					jsx(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: " SetPosition"
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
						children: "bool"
					}),
					jsx(_components.span, {
						style: {
							"--shiki-light": "#E36209",
							"--shiki-dark": "#FFAB70"
						},
						children: " topLeft"
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
						children: "bool"
					}),
					jsx(_components.span, {
						style: {
							"--shiki-light": "#E36209",
							"--shiki-dark": "#FFAB70"
						},
						children: " topRight"
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
						children: "bool"
					}),
					jsx(_components.span, {
						style: {
							"--shiki-light": "#E36209",
							"--shiki-dark": "#FFAB70"
						},
						children: " bottomLeft"
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
						children: "bool"
					}),
					jsx(_components.span, {
						style: {
							"--shiki-light": "#E36209",
							"--shiki-dark": "#FFAB70"
						},
						children: " bottomRight"
					}),
					jsx(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: ");"
					})
				]
			}) })
		}) }),
		"\n",
		jsxs(_components.p, { children: [
			"四个角位都会生效：右侧位置按屏幕宽度右对齐，底部位置按行数贴底。四个参数同时为 ",
			jsx(_components.code, { children: "false" }),
			" 时回退到左上角。"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "生命周期",
			children: "生命周期"
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
						children: "void"
					}),
					jsx(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: " Shutdown"
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
			jsx(_components.code, { children: "Shutdown()" }),
			" 隐藏覆盖层并复位位置状态。SA 实现完整；VC/III 通过 ",
			jsx(_components.code, { children: "Capability::Overlay" }),
			" 报告不支持。"
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
