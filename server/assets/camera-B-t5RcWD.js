import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/xbase/camera.mdx?collection=docs
var frontmatter = {
	"title": "Camera",
	"description": "自由视角与俯视相机。"
};
var _markdown = "\n\n`include/XBase/Camera.h` · `XBase::Camera`\n\n> 相机模式、输入和恢复快照由 XBase 持有；宿主只切换模式并同步设置，不直接写相机对象。\n\n## 模式与设置 [#模式与设置]\n\n```cpp\nenum class Mode {\n    Disabled,\n    Freecam,\n    TopDown,\n};\n\nstruct Settings {\n    float freecamFov = 70.0f;\n    int freecamSpeed = 1;\n    int topDownZoom = 40;\n};\n\nbool SetMode(Mode mode);\nMode GetMode();\nbool IsActive();\nvoid SetSettings(const Settings& settings);\nSettings GetSettings();\n```\n\n`SetSettings()` 会收敛范围：`freecamFov` 限制在 10~~115，`freecamSpeed` 限制在 1~~10，`topDownZoom` 限制在 10\\~100；自由视角激活时立即应用 FOV。\n\n## 自由视角 [#自由视角]\n\n* 进入时生成不可见 dummy ped 并挂载相机，保存并关闭 HUD/雷达显示。\n* `WASD` 移动，鼠标控制朝向；`Shift` 加速，`Alt` 减速。\n* 鼠标滚轮调整移动速度（1\\~10）；按住 `Ctrl` 时改为调整 FOV。\n* `Enter` 把玩家传送到当前视角位置的地面。\n* 退出时删除 dummy ped，恢复 HUD/雷达与相机 FOV。\n\n## 俯视相机 [#俯视相机]\n\n* 相机固定在玩家上方，高度由 `topDownZoom` 决定；玩家进入载具时按速度自动拉远。\n* 使用视线检测避免相机穿入建筑。\n* 退出时恢复进入前的 LOD 与相机状态。\n\n## 生命周期 [#生命周期]\n\n```cpp\nvoid NotifyGameInit();\nvoid Process();\nvoid Shutdown();\n```\n\n`NotifyGameInit()` 会把模式复位为 `Disabled`；`Process()` 由 `Core` 领域分发；`Shutdown()` 恢复相机与 HUD 状态。`SetMode()` 切换失败时返回 `false` 并保持原模式。\n\n## 版本能力 [#版本能力]\n\n| FeatureCapability             |  SA |  VC | III |\n| ----------------------------- | :-: | :-: | :-: |\n| CameraFreecam / CameraTopDown |  ✅  |  ✖  |  ✖  |\n\nVC/III 只接受 `SetMode(Mode::Disabled)`，其余模式返回 `false`；页面应通过 `FeatureCapability` 禁用入口。\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "`include/XBase/Camera.h` · `XBase::Camera`"
		},
		{
			"heading": void 0,
			"content": "> 相机模式、输入和恢复快照由 XBase 持有；宿主只切换模式并同步设置，不直接写相机对象。"
		},
		{
			"heading": "模式与设置",
			"content": "`SetSettings()` 会收敛范围：`freecamFov` 限制在 10~~115，`freecamSpeed` 限制在 1~~10，`topDownZoom` 限制在 10\\~100；自由视角激活时立即应用 FOV。"
		},
		{
			"heading": "自由视角",
			"content": "进入时生成不可见 dummy ped 并挂载相机，保存并关闭 HUD/雷达显示。"
		},
		{
			"heading": "自由视角",
			"content": "`WASD` 移动，鼠标控制朝向；`Shift` 加速，`Alt` 减速。"
		},
		{
			"heading": "自由视角",
			"content": "鼠标滚轮调整移动速度（1\\~10）；按住 `Ctrl` 时改为调整 FOV。"
		},
		{
			"heading": "自由视角",
			"content": "`Enter` 把玩家传送到当前视角位置的地面。"
		},
		{
			"heading": "自由视角",
			"content": "退出时删除 dummy ped，恢复 HUD/雷达与相机 FOV。"
		},
		{
			"heading": "俯视相机",
			"content": "相机固定在玩家上方，高度由 `topDownZoom` 决定；玩家进入载具时按速度自动拉远。"
		},
		{
			"heading": "俯视相机",
			"content": "使用视线检测避免相机穿入建筑。"
		},
		{
			"heading": "俯视相机",
			"content": "退出时恢复进入前的 LOD 与相机状态。"
		},
		{
			"heading": "生命周期",
			"content": "`NotifyGameInit()` 会把模式复位为 `Disabled`；`Process()` 由 `Core` 领域分发；`Shutdown()` 恢复相机与 HUD 状态。`SetMode()` 切换失败时返回 `false` 并保持原模式。"
		},
		{
			"heading": "版本能力",
			"content": "FeatureCapability"
		},
		{
			"heading": "版本能力",
			"content": "SA"
		},
		{
			"heading": "版本能力",
			"content": "VC"
		},
		{
			"heading": "版本能力",
			"content": "III"
		},
		{
			"heading": "版本能力",
			"content": "CameraFreecam / CameraTopDown"
		},
		{
			"heading": "版本能力",
			"content": "✅"
		},
		{
			"heading": "版本能力",
			"content": "✖"
		},
		{
			"heading": "版本能力",
			"content": "✖"
		},
		{
			"heading": "版本能力",
			"content": "VC/III 只接受 `SetMode(Mode::Disabled)`，其余模式返回 `false`；页面应通过 `FeatureCapability` 禁用入口。"
		}
	],
	"headings": [
		{
			"id": "模式与设置",
			"content": "模式与设置"
		},
		{
			"id": "自由视角",
			"content": "自由视角"
		},
		{
			"id": "俯视相机",
			"content": "俯视相机"
		},
		{
			"id": "生命周期",
			"content": "生命周期"
		},
		{
			"id": "版本能力",
			"content": "版本能力"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#模式与设置",
		title: jsx(Fragment, { children: "模式与设置" })
	},
	{
		depth: 2,
		url: "#自由视角",
		title: jsx(Fragment, { children: "自由视角" })
	},
	{
		depth: 2,
		url: "#俯视相机",
		title: jsx(Fragment, { children: "俯视相机" })
	},
	{
		depth: 2,
		url: "#生命周期",
		title: jsx(Fragment, { children: "生命周期" })
	},
	{
		depth: 2,
		url: "#版本能力",
		title: jsx(Fragment, { children: "版本能力" })
	}
];
function _createMdxContent(props) {
	const _components = {
		blockquote: "blockquote",
		code: "code",
		del: "del",
		h2: "h2",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		table: "table",
		tbody: "tbody",
		td: "td",
		th: "th",
		thead: "thead",
		tr: "tr",
		ul: "ul",
		...props.components
	};
	return jsxs(Fragment, { children: [
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "include/XBase/Camera.h" }),
			" · ",
			jsx(_components.code, { children: "XBase::Camera" })
		] }),
		"\n",
		jsxs(_components.blockquote, { children: [
			"\n",
			jsx(_components.p, { children: "相机模式、输入和恢复快照由 XBase 持有；宿主只切换模式并同步设置，不直接写相机对象。" }),
			"\n"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "模式与设置",
			children: "模式与设置"
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
							children: " Mode"
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
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: "    Disabled"
					}), jsx(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: ","
					})]
				}),
				"\n",
				jsxs(_components.span, {
					className: "line",
					children: [jsx(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: "    Freecam"
					}), jsx(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: ","
					})]
				}),
				"\n",
				jsxs(_components.span, {
					className: "line",
					children: [jsx(_components.span, {
						style: {
							"--shiki-light": "#005CC5",
							"--shiki-dark": "#79B8FF"
						},
						children: "    TopDown"
					}), jsx(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: ","
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
							children: "struct"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " Settings"
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
							children: "    float"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " freecamFov "
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
							children: " 70.0"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "f"
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
				jsxs(_components.span, {
					className: "line",
					children: [
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "    int"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " freecamSpeed "
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
							children: " 1"
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
				jsxs(_components.span, {
					className: "line",
					children: [
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "    int"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " topDownZoom "
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
							children: " 40"
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
						children: "};"
					})
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
							children: "bool"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " SetMode"
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
							children: "Mode"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: " mode"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "Mode"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " GetMode"
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
							children: "bool"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " IsActive"
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
							children: "void"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " SetSettings"
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
							children: "const"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " Settings"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "&"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: " settings"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "Settings"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " GetSettings"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "();"
						})
					]
				})
			] })
		}) }),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "SetSettings()" }),
			" 会收敛范围：",
			jsx(_components.code, { children: "freecamFov" }),
			" 限制在 10",
			jsxs(_components.del, { children: [
				"115，",
				jsx(_components.code, { children: "freecamSpeed" }),
				" 限制在 1"
			] }),
			"10，",
			jsx(_components.code, { children: "topDownZoom" }),
			" 限制在 10~100；自由视角激活时立即应用 FOV。"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "自由视角",
			children: "自由视角"
		}),
		"\n",
		jsxs(_components.ul, { children: [
			"\n",
			jsx(_components.li, { children: "进入时生成不可见 dummy ped 并挂载相机，保存并关闭 HUD/雷达显示。" }),
			"\n",
			jsxs(_components.li, { children: [
				jsx(_components.code, { children: "WASD" }),
				" 移动，鼠标控制朝向；",
				jsx(_components.code, { children: "Shift" }),
				" 加速，",
				jsx(_components.code, { children: "Alt" }),
				" 减速。"
			] }),
			"\n",
			jsxs(_components.li, { children: [
				"鼠标滚轮调整移动速度（1~10）；按住 ",
				jsx(_components.code, { children: "Ctrl" }),
				" 时改为调整 FOV。"
			] }),
			"\n",
			jsxs(_components.li, { children: [jsx(_components.code, { children: "Enter" }), " 把玩家传送到当前视角位置的地面。"] }),
			"\n",
			jsx(_components.li, { children: "退出时删除 dummy ped，恢复 HUD/雷达与相机 FOV。" }),
			"\n"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "俯视相机",
			children: "俯视相机"
		}),
		"\n",
		jsxs(_components.ul, { children: [
			"\n",
			jsxs(_components.li, { children: [
				"相机固定在玩家上方，高度由 ",
				jsx(_components.code, { children: "topDownZoom" }),
				" 决定；玩家进入载具时按速度自动拉远。"
			] }),
			"\n",
			jsx(_components.li, { children: "使用视线检测避免相机穿入建筑。" }),
			"\n",
			jsx(_components.li, { children: "退出时恢复进入前的 LOD 与相机状态。" }),
			"\n"
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
			children: jsxs(_components.code, { children: [
				jsxs(_components.span, {
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
							children: " NotifyGameInit"
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
				})
			] })
		}) }),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "NotifyGameInit()" }),
			" 会把模式复位为 ",
			jsx(_components.code, { children: "Disabled" }),
			"；",
			jsx(_components.code, { children: "Process()" }),
			" 由 ",
			jsx(_components.code, { children: "Core" }),
			" 领域分发；",
			jsx(_components.code, { children: "Shutdown()" }),
			" 恢复相机与 HUD 状态。",
			jsx(_components.code, { children: "SetMode()" }),
			" 切换失败时返回 ",
			jsx(_components.code, { children: "false" }),
			" 并保持原模式。"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "版本能力",
			children: "版本能力"
		}),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [
			jsx(_components.th, { children: "FeatureCapability" }),
			jsx(_components.th, {
				style: { textAlign: "center" },
				children: "SA"
			}),
			jsx(_components.th, {
				style: { textAlign: "center" },
				children: "VC"
			}),
			jsx(_components.th, {
				style: { textAlign: "center" },
				children: "III"
			})
		] }) }), jsx(_components.tbody, { children: jsxs(_components.tr, { children: [
			jsx(_components.td, { children: "CameraFreecam / CameraTopDown" }),
			jsx(_components.td, {
				style: { textAlign: "center" },
				children: "✅"
			}),
			jsx(_components.td, {
				style: { textAlign: "center" },
				children: "✖"
			}),
			jsx(_components.td, {
				style: { textAlign: "center" },
				children: "✖"
			})
		] }) })] }),
		"\n",
		jsxs(_components.p, { children: [
			"VC/III 只接受 ",
			jsx(_components.code, { children: "SetMode(Mode::Disabled)" }),
			"，其余模式返回 ",
			jsx(_components.code, { children: "false" }),
			"；页面应通过 ",
			jsx(_components.code, { children: "FeatureCapability" }),
			" 禁用入口。"
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
