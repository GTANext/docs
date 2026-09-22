import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/xbase/bullet-assist.mdx?collection=docs
var frontmatter = {
	"title": "BulletAssist",
	"description": "子弹追踪、坐标透视、强制锁定与开火抑制。"
};
var _markdown = "\n\n`include/XBase/BulletAssist.h` · `XBase::BulletAssist`\n\n> 追踪计算、射线重定向和绘制由 XBase 后端持有，宿主只设置 `Config` 并决定 UI 开关。命中重定向只发生在本地玩家的开火作用域内，相机专用射线不参与改写。\n\n## 配置 [#配置]\n\n```cpp\nenum class AimPart {\n    Head,\n    Chest,\n    Abdomen,\n    Legs,\n};\n\nstruct Config {\n    bool tracking = false;\n    bool throughWalls = false;\n    bool hardLock = false;\n    bool trackCivilian = true;\n    bool trackFriend = false;\n    bool trackHostile = true;\n    bool trackNeutral = true;\n    AimPart aimPart = AimPart::Chest;\n    float lockRange = 100.0f;\n    int maxTargets = 4;\n    bool drawPedBounds = false;\n    bool drawPedCollision = false;\n    bool drawPedSkeleton = false;\n    bool drawVehicleBounds = false;\n    bool drawVehicleCollision = false;\n};\n\nvoid SetConfig(const Config& config);\nConfig GetConfig();\n```\n\n`lockRange` 下限为 10，`maxTargets` 限定 1\\~16，越界值由 XBase 在 `SetConfig()` 内收敛。\n\n## 生命周期 [#生命周期]\n\n```cpp\nvoid Init();\nbool IsInitialized();\nvoid Process();\nvoid Shutdown();\nvoid Draw();\n```\n\n`Init()`、`Process()`、`Shutdown()` 由 `Core` 领域分发，宿主不要绕过 Core 建立第二套 `Process()`。`Draw()` 由宿主在绘制回调中调用，只负责 ESP 显示，不驱动目标搜索。\n\n## 开火抑制 [#开火抑制]\n\n```cpp\nbool ShouldSuppressPedFire(PedId ped);\n```\n\n只提供开火抑制判断，不暴露 `CPed*`；Ped 分类与总开关由 `XBase::Ped::SetNoFire()` 负责。\n\n## 行为边界 [#行为边界]\n\n* 目标搜索基于相机前向与距离评分，关系过滤使用任务关系（平民/友军/敌对/中立），被锁定目标在每次开火时轮询。\n* 追踪命中重定向只作用于本地玩家的开火调用栈；相机专用射线（`cameraIgnore`）始终按原参数放行。\n* 追踪命中时只强制开启行人碰撞；只有启用 `throughWalls` 才关闭建筑、物体与假对象碰撞。\n* 已损毁载具不会作为有效命中实体返回。\n* `hardLock` 需要同时开启 `tracking` 并按住瞄准输入（瞄准键或鼠标键）才生效；锁定目标具有粘性，目标失效后才切换到准星最优目标，不会随多发轮询跳视角。\n* 剧情、过场动画、相机过渡、玩家控制被脚本禁用、玩家死亡或濒死、相机缓冲或行人池不可用时，追踪计算、射线重定向与 ESP 绘制同时停止，并持续清空候选列表、本次射击目标与强锁目标；离开阻断状态后延迟 750 毫秒自动恢复，不需要宿主重新开关功能。\n\n## 版本能力 [#版本能力]\n\n| FeatureCapability                                                           |  SA |  VC | III |\n| --------------------------------------------------------------------------- | :-: | :-: | :-: |\n| BulletAssistTracking / ThroughWalls / HardLock / PedBounds / VehicleBounds  |  ✅  |  ✅  |  ✖  |\n| BulletAssistPedCollision / PedSkeleton / VehicleCollision / FireSuppression |  ◐  |  ◐  |  ✖  |\n\n标注 ◐ 表示同领域内仍有部分动作受限。页面必须逐项查询 `FeatureCapability`，不能因为 `Capability::BulletAssist` 可链接就启用全部开关；III 当前没有可用的追踪后端。\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "`include/XBase/BulletAssist.h` · `XBase::BulletAssist`"
		},
		{
			"heading": void 0,
			"content": "> 追踪计算、射线重定向和绘制由 XBase 后端持有，宿主只设置 `Config` 并决定 UI 开关。命中重定向只发生在本地玩家的开火作用域内，相机专用射线不参与改写。"
		},
		{
			"heading": "配置",
			"content": "`lockRange` 下限为 10，`maxTargets` 限定 1\\~16，越界值由 XBase 在 `SetConfig()` 内收敛。"
		},
		{
			"heading": "生命周期",
			"content": "`Init()`、`Process()`、`Shutdown()` 由 `Core` 领域分发，宿主不要绕过 Core 建立第二套 `Process()`。`Draw()` 由宿主在绘制回调中调用，只负责 ESP 显示，不驱动目标搜索。"
		},
		{
			"heading": "开火抑制",
			"content": "只提供开火抑制判断，不暴露 `CPed*`；Ped 分类与总开关由 `XBase::Ped::SetNoFire()` 负责。"
		},
		{
			"heading": "行为边界",
			"content": "目标搜索基于相机前向与距离评分，关系过滤使用任务关系（平民/友军/敌对/中立），被锁定目标在每次开火时轮询。"
		},
		{
			"heading": "行为边界",
			"content": "追踪命中重定向只作用于本地玩家的开火调用栈；相机专用射线（`cameraIgnore`）始终按原参数放行。"
		},
		{
			"heading": "行为边界",
			"content": "追踪命中时只强制开启行人碰撞；只有启用 `throughWalls` 才关闭建筑、物体与假对象碰撞。"
		},
		{
			"heading": "行为边界",
			"content": "已损毁载具不会作为有效命中实体返回。"
		},
		{
			"heading": "行为边界",
			"content": "`hardLock` 需要同时开启 `tracking` 并按住瞄准输入（瞄准键或鼠标键）才生效；锁定目标具有粘性，目标失效后才切换到准星最优目标，不会随多发轮询跳视角。"
		},
		{
			"heading": "行为边界",
			"content": "剧情、过场动画、相机过渡、玩家控制被脚本禁用、玩家死亡或濒死、相机缓冲或行人池不可用时，追踪计算、射线重定向与 ESP 绘制同时停止，并持续清空候选列表、本次射击目标与强锁目标；离开阻断状态后延迟 750 毫秒自动恢复，不需要宿主重新开关功能。"
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
			"content": "BulletAssistTracking / ThroughWalls / HardLock / PedBounds / VehicleBounds"
		},
		{
			"heading": "版本能力",
			"content": "✅"
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
			"content": "BulletAssistPedCollision / PedSkeleton / VehicleCollision / FireSuppression"
		},
		{
			"heading": "版本能力",
			"content": "◐"
		},
		{
			"heading": "版本能力",
			"content": "◐"
		},
		{
			"heading": "版本能力",
			"content": "✖"
		},
		{
			"heading": "版本能力",
			"content": "标注 ◐ 表示同领域内仍有部分动作受限。页面必须逐项查询 `FeatureCapability`，不能因为 `Capability::BulletAssist` 可链接就启用全部开关；III 当前没有可用的追踪后端。"
		}
	],
	"headings": [
		{
			"id": "配置",
			"content": "配置"
		},
		{
			"id": "生命周期",
			"content": "生命周期"
		},
		{
			"id": "开火抑制",
			"content": "开火抑制"
		},
		{
			"id": "行为边界",
			"content": "行为边界"
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
		url: "#配置",
		title: jsx(Fragment, { children: "配置" })
	},
	{
		depth: 2,
		url: "#生命周期",
		title: jsx(Fragment, { children: "生命周期" })
	},
	{
		depth: 2,
		url: "#开火抑制",
		title: jsx(Fragment, { children: "开火抑制" })
	},
	{
		depth: 2,
		url: "#行为边界",
		title: jsx(Fragment, { children: "行为边界" })
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
			jsx(_components.code, { children: "include/XBase/BulletAssist.h" }),
			" · ",
			jsx(_components.code, { children: "XBase::BulletAssist" })
		] }),
		"\n",
		jsxs(_components.blockquote, { children: [
			"\n",
			jsxs(_components.p, { children: [
				"追踪计算、射线重定向和绘制由 XBase 后端持有，宿主只设置 ",
				jsx(_components.code, { children: "Config" }),
				" 并决定 UI 开关。命中重定向只发生在本地玩家的开火作用域内，相机专用射线不参与改写。"
			] }),
			"\n"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "配置",
			children: "配置"
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
							children: " AimPart"
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
						children: "    Head"
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
						children: "    Chest"
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
						children: "    Abdomen"
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
						children: "    Legs"
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
							children: " Config"
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
							children: "    bool"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " tracking "
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
							children: " false"
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
							children: "    bool"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " throughWalls "
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
							children: " false"
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
							children: "    bool"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " hardLock "
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
							children: " false"
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
							children: "    bool"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " trackCivilian "
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
							children: " true"
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
							children: "    bool"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " trackFriend "
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
							children: " false"
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
							children: "    bool"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " trackHostile "
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
							children: " true"
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
							children: "    bool"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " trackNeutral "
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
							children: " true"
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
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "    AimPart aimPart "
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
							children: " AimPart"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "::Chest;"
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
							children: " lockRange "
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
							children: " 100.0"
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
							children: " maxTargets "
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
							children: " 4"
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
							children: "    bool"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " drawPedBounds "
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
							children: " false"
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
							children: "    bool"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " drawPedCollision "
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
							children: " false"
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
							children: "    bool"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " drawPedSkeleton "
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
							children: " false"
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
							children: "    bool"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " drawVehicleBounds "
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
							children: " false"
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
							children: "    bool"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " drawVehicleCollision "
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
							children: " false"
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
							children: "void"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " SetConfig"
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
							children: " Config"
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
							children: " config"
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
							children: "Config"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " GetConfig"
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
			jsx(_components.code, { children: "lockRange" }),
			" 下限为 10，",
			jsx(_components.code, { children: "maxTargets" }),
			" 限定 1~16，越界值由 XBase 在 ",
			jsx(_components.code, { children: "SetConfig()" }),
			" 内收敛。"
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
							children: " IsInitialized"
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
				})
			] })
		}) }),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "Init()" }),
			"、",
			jsx(_components.code, { children: "Process()" }),
			"、",
			jsx(_components.code, { children: "Shutdown()" }),
			" 由 ",
			jsx(_components.code, { children: "Core" }),
			" 领域分发，宿主不要绕过 Core 建立第二套 ",
			jsx(_components.code, { children: "Process()" }),
			"。",
			jsx(_components.code, { children: "Draw()" }),
			" 由宿主在绘制回调中调用，只负责 ESP 显示，不驱动目标搜索。"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "开火抑制",
			children: "开火抑制"
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
						children: " ShouldSuppressPedFire"
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
						children: "PedId"
					}),
					jsx(_components.span, {
						style: {
							"--shiki-light": "#E36209",
							"--shiki-dark": "#FFAB70"
						},
						children: " ped"
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
			"只提供开火抑制判断，不暴露 ",
			jsx(_components.code, { children: "CPed*" }),
			"；Ped 分类与总开关由 ",
			jsx(_components.code, { children: "XBase::Ped::SetNoFire()" }),
			" 负责。"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "行为边界",
			children: "行为边界"
		}),
		"\n",
		jsxs(_components.ul, { children: [
			"\n",
			jsx(_components.li, { children: "目标搜索基于相机前向与距离评分，关系过滤使用任务关系（平民/友军/敌对/中立），被锁定目标在每次开火时轮询。" }),
			"\n",
			jsxs(_components.li, { children: [
				"追踪命中重定向只作用于本地玩家的开火调用栈；相机专用射线（",
				jsx(_components.code, { children: "cameraIgnore" }),
				"）始终按原参数放行。"
			] }),
			"\n",
			jsxs(_components.li, { children: [
				"追踪命中时只强制开启行人碰撞；只有启用 ",
				jsx(_components.code, { children: "throughWalls" }),
				" 才关闭建筑、物体与假对象碰撞。"
			] }),
			"\n",
			jsx(_components.li, { children: "已损毁载具不会作为有效命中实体返回。" }),
			"\n",
			jsxs(_components.li, { children: [
				jsx(_components.code, { children: "hardLock" }),
				" 需要同时开启 ",
				jsx(_components.code, { children: "tracking" }),
				" 并按住瞄准输入（瞄准键或鼠标键）才生效；锁定目标具有粘性，目标失效后才切换到准星最优目标，不会随多发轮询跳视角。"
			] }),
			"\n",
			jsx(_components.li, { children: "剧情、过场动画、相机过渡、玩家控制被脚本禁用、玩家死亡或濒死、相机缓冲或行人池不可用时，追踪计算、射线重定向与 ESP 绘制同时停止，并持续清空候选列表、本次射击目标与强锁目标；离开阻断状态后延迟 750 毫秒自动恢复，不需要宿主重新开关功能。" }),
			"\n"
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
		] }) }), jsxs(_components.tbody, { children: [jsxs(_components.tr, { children: [
			jsx(_components.td, { children: "BulletAssistTracking / ThroughWalls / HardLock / PedBounds / VehicleBounds" }),
			jsx(_components.td, {
				style: { textAlign: "center" },
				children: "✅"
			}),
			jsx(_components.td, {
				style: { textAlign: "center" },
				children: "✅"
			}),
			jsx(_components.td, {
				style: { textAlign: "center" },
				children: "✖"
			})
		] }), jsxs(_components.tr, { children: [
			jsx(_components.td, { children: "BulletAssistPedCollision / PedSkeleton / VehicleCollision / FireSuppression" }),
			jsx(_components.td, {
				style: { textAlign: "center" },
				children: "◐"
			}),
			jsx(_components.td, {
				style: { textAlign: "center" },
				children: "◐"
			}),
			jsx(_components.td, {
				style: { textAlign: "center" },
				children: "✖"
			})
		] })] })] }),
		"\n",
		jsxs(_components.p, { children: [
			"标注 ◐ 表示同领域内仍有部分动作受限。页面必须逐项查询 ",
			jsx(_components.code, { children: "FeatureCapability" }),
			"，不能因为 ",
			jsx(_components.code, { children: "Capability::BulletAssist" }),
			" 可链接就启用全部开关；III 当前没有可用的追踪后端。"
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
