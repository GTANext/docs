import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/xbase/host-integration.mdx?collection=docs
var frontmatter = {
	"title": "宿主接入与版本后端",
	"description": "XBase 静态库的版本选择、生命周期和能力边界。"
};
var _markdown = "\n\n## 选择静态库 [#选择静态库]\n\nXBase 按 GTA 版本生成独立静态库：\n\n| 目标  | 库              | plugin-sdk   |\n| --- | -------------- | ------------ |\n| SA  | `XBaseSA.lib`  | `plugin_sa`  |\n| VC  | `XBaseVC.lib`  | `plugin_vc`  |\n| III | `XBaseIII.lib` | `plugin_III` |\n\n一个 payload 只能链接一个目标库。不要使用库文件名、头文件或宏把 SA ABI 混入 VC/III。\n\n## 生命周期 [#生命周期]\n\n宿主负责生命周期，推荐顺序如下：\n\n```cpp\nXBase::Log::Init();\n\nvoid OnGameInit() {\n    XBase::Core::NotifyGameInit();\n}\n\nvoid OnProcess() {\n    XBase::Core::Process();\n}\n\n// 安装宿主事件回调；同时启用当前版本的运行时保护\nXBase::Host::Install({OnGameInit, OnProcess});\n\nconst auto domains =\n    XBase::Core::DomainBit(XBase::Core::Domain::Player) |\n    XBase::Core::DomainBit(XBase::Core::Domain::Ped) |\n    XBase::Core::DomainBit(XBase::Core::Domain::Vehicle);\n\n// 掩码会过滤当前库不支持的领域\nXBase::Core::Init(domains);\n\n// 卸载前恢复控制器状态\nXBase::Core::Shutdown();\nXBase::Host::Shutdown();\n```\n\n`Host::Install()` 安装 `initGameEvent` 与进程事件订阅；`Host::Shutdown()` 会等待在途回调结束再解除订阅，并按逆序卸载运行时保护。\n\n```cpp\nbool Install(const Callbacks& callbacks);\nvoid Shutdown();\nbool IsInstalled();\nbool ShowMessage(const char* message);\n```\n\n`ShowMessage()` 在当前版本用游戏内置帮助消息输出 UTF-8 文本；VC/III 内部转换为宽字符，不经过 ImGui。\n\n运行时保护只在对应版本安装：VC 增加剧情资源目录纠正（`CDirectory::ReadDirFile`）与空文件句柄保护（`CFileMgr::Read` / `CloseFile`）；SA/VC 同时维护剧情期安全门，供 `BulletAssist` 在剧情、相机过渡与玩家不可用状态下停止对象访问。\n\n如果宿主自己负责 D3D/ImGui，则不要同时调用 `XBase::Hooks::Init()` 和 `XBase::UI::Init()`，避免重复安装 Hook 或创建第二套 ImGui context。\n\n## 能力检查 [#能力检查]\n\n领域能力只表示至少存在一组真实 backend。页面应优先检查细粒度能力：\n\n```cpp\nif (!XBase::HasCapability(XBase::FeatureCapability::PlayerBasicState)) {\n    // 禁用对应 UI 或显示“不支持当前版本”\n    return;\n}\n```\n\n各版本的实际支持情况以 `Capabilities.cpp` 与 README 能力矩阵为准；运行时行为以能力返回值唯一为准。SA 已收口全部领域；VC/III 只报告已实现的能力，未实现的能力保持 `false`。\n\n能力为 `false` 时宿主不得继续调用对应功能。VC/III 的 `SetEnabledDomains()` 会过滤未支持领域，`GetEnabledDomains()` 返回实际生效掩码。\n\n## XMenu 集成边界 [#xmenu-集成边界]\n\n```mermaid\nflowchart LR\n    Page[XMenu 页面] --> Bridge[版本适配层]\n    Bridge --> API[XBase 公共 API]\n    API --> Backend[当前目标 XBase 后端]\n    Backend --> Game[GTA 运行时对象]\n```\n\n页面只负责输入和显示；游戏对象访问属于 XBase 后端。宿主先将菜单字段转换为 `XBase::Vehicle::SpawnOptions` 和 `SpawnPolicy`，再调用 XBase Vehicle session。XBase 负责模型校验、限流、生成、旧车追踪/清理、生命周期恢复和事件队列；XMenu 只负责菜单输入、结果展示以及交通/自动驾驶/版本专属策略。\n\n```mermaid\nflowchart LR\n    Page[XMenu 页面] --> Adapter[纯菜单输入转换]\n    Adapter --> Session[XBase Vehicle Spawn Session]\n    Session --> Limit[限流与生成状态]\n    Session --> Cleanup[旧车追踪与清理]\n    Session --> Backend[SA/VC/III 版本后端]\n    Session --> Result[SpawnResult / VehicleEvent]\n    Result --> Host[XMenu 日志与提示]\n```\n\n`Vehicle::Process()`、`World::Process()`、`Weapon::Process()`、`Scene::Process()`、`Teleport::Process()`、`Visual::Process()` 和 `BulletAssist::Process()` 只能由 `Core::Process()` 调用。XMenu 不得再调用这些领域的持续处理入口；`ProcessHost()` 仅处理宿主策略和 UI 事件适配。\n\n自由视角、俯视相机、霓虹、随机作弊等曾属于宿主的功能已由 `Camera`、`VehicleEffects`、`Cheats` 提供，宿主不要重新引入对象访问；XMenu 只保留菜单状态、页面编排和输入转换，XBase 不依赖 `MenuState`。\n";
var structuredData = {
	"contents": [
		{
			"heading": "选择静态库",
			"content": "XBase 按 GTA 版本生成独立静态库："
		},
		{
			"heading": "选择静态库",
			"content": "目标"
		},
		{
			"heading": "选择静态库",
			"content": "库"
		},
		{
			"heading": "选择静态库",
			"content": "plugin-sdk"
		},
		{
			"heading": "选择静态库",
			"content": "SA"
		},
		{
			"heading": "选择静态库",
			"content": "`XBaseSA.lib`"
		},
		{
			"heading": "选择静态库",
			"content": "`plugin_sa`"
		},
		{
			"heading": "选择静态库",
			"content": "VC"
		},
		{
			"heading": "选择静态库",
			"content": "`XBaseVC.lib`"
		},
		{
			"heading": "选择静态库",
			"content": "`plugin_vc`"
		},
		{
			"heading": "选择静态库",
			"content": "III"
		},
		{
			"heading": "选择静态库",
			"content": "`XBaseIII.lib`"
		},
		{
			"heading": "选择静态库",
			"content": "`plugin_III`"
		},
		{
			"heading": "选择静态库",
			"content": "一个 payload 只能链接一个目标库。不要使用库文件名、头文件或宏把 SA ABI 混入 VC/III。"
		},
		{
			"heading": "生命周期",
			"content": "宿主负责生命周期，推荐顺序如下："
		},
		{
			"heading": "生命周期",
			"content": "`Host::Install()` 安装 `initGameEvent` 与进程事件订阅；`Host::Shutdown()` 会等待在途回调结束再解除订阅，并按逆序卸载运行时保护。"
		},
		{
			"heading": "生命周期",
			"content": "`ShowMessage()` 在当前版本用游戏内置帮助消息输出 UTF-8 文本；VC/III 内部转换为宽字符，不经过 ImGui。"
		},
		{
			"heading": "生命周期",
			"content": "运行时保护只在对应版本安装：VC 增加剧情资源目录纠正（`CDirectory::ReadDirFile`）与空文件句柄保护（`CFileMgr::Read` / `CloseFile`）；SA/VC 同时维护剧情期安全门，供 `BulletAssist` 在剧情、相机过渡与玩家不可用状态下停止对象访问。"
		},
		{
			"heading": "生命周期",
			"content": "如果宿主自己负责 D3D/ImGui，则不要同时调用 `XBase::Hooks::Init()` 和 `XBase::UI::Init()`，避免重复安装 Hook 或创建第二套 ImGui context。"
		},
		{
			"heading": "能力检查",
			"content": "领域能力只表示至少存在一组真实 backend。页面应优先检查细粒度能力："
		},
		{
			"heading": "能力检查",
			"content": "各版本的实际支持情况以 `Capabilities.cpp` 与 README 能力矩阵为准；运行时行为以能力返回值唯一为准。SA 已收口全部领域；VC/III 只报告已实现的能力，未实现的能力保持 `false`。"
		},
		{
			"heading": "能力检查",
			"content": "能力为 `false` 时宿主不得继续调用对应功能。VC/III 的 `SetEnabledDomains()` 会过滤未支持领域，`GetEnabledDomains()` 返回实际生效掩码。"
		},
		{
			"heading": "xmenu-集成边界",
			"content": "页面只负责输入和显示；游戏对象访问属于 XBase 后端。宿主先将菜单字段转换为 `XBase::Vehicle::SpawnOptions` 和 `SpawnPolicy`，再调用 XBase Vehicle session。XBase 负责模型校验、限流、生成、旧车追踪/清理、生命周期恢复和事件队列；XMenu 只负责菜单输入、结果展示以及交通/自动驾驶/版本专属策略。"
		},
		{
			"heading": "xmenu-集成边界",
			"content": "`Vehicle::Process()`、`World::Process()`、`Weapon::Process()`、`Scene::Process()`、`Teleport::Process()`、`Visual::Process()` 和 `BulletAssist::Process()` 只能由 `Core::Process()` 调用。XMenu 不得再调用这些领域的持续处理入口；`ProcessHost()` 仅处理宿主策略和 UI 事件适配。"
		},
		{
			"heading": "xmenu-集成边界",
			"content": "自由视角、俯视相机、霓虹、随机作弊等曾属于宿主的功能已由 `Camera`、`VehicleEffects`、`Cheats` 提供，宿主不要重新引入对象访问；XMenu 只保留菜单状态、页面编排和输入转换，XBase 不依赖 `MenuState`。"
		}
	],
	"headings": [
		{
			"id": "选择静态库",
			"content": "选择静态库"
		},
		{
			"id": "生命周期",
			"content": "生命周期"
		},
		{
			"id": "能力检查",
			"content": "能力检查"
		},
		{
			"id": "xmenu-集成边界",
			"content": "XMenu 集成边界"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#选择静态库",
		title: jsx(Fragment, { children: "选择静态库" })
	},
	{
		depth: 2,
		url: "#生命周期",
		title: jsx(Fragment, { children: "生命周期" })
	},
	{
		depth: 2,
		url: "#能力检查",
		title: jsx(Fragment, { children: "能力检查" })
	},
	{
		depth: 2,
		url: "#xmenu-集成边界",
		title: jsx(Fragment, { children: "XMenu 集成边界" })
	}
];
function _createMdxContent(props) {
	const _components = {
		code: "code",
		h2: "h2",
		p: "p",
		pre: "pre",
		span: "span",
		table: "table",
		tbody: "tbody",
		td: "td",
		th: "th",
		thead: "thead",
		tr: "tr",
		...props.components
	};
	return jsxs(Fragment, { children: [
		jsx(_components.h2, {
			id: "选择静态库",
			children: "选择静态库"
		}),
		"\n",
		jsx(_components.p, { children: "XBase 按 GTA 版本生成独立静态库：" }),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [
			jsx(_components.th, { children: "目标" }),
			jsx(_components.th, { children: "库" }),
			jsx(_components.th, { children: "plugin-sdk" })
		] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "SA" }),
				jsx(_components.td, { children: jsx(_components.code, { children: "XBaseSA.lib" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "plugin_sa" }) })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "VC" }),
				jsx(_components.td, { children: jsx(_components.code, { children: "XBaseVC.lib" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "plugin_vc" }) })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "III" }),
				jsx(_components.td, { children: jsx(_components.code, { children: "XBaseIII.lib" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "plugin_III" }) })
			] })
		] })] }),
		"\n",
		jsx(_components.p, { children: "一个 payload 只能链接一个目标库。不要使用库文件名、头文件或宏把 SA ABI 混入 VC/III。" }),
		"\n",
		jsx(_components.h2, {
			id: "生命周期",
			children: "生命周期"
		}),
		"\n",
		jsx(_components.p, { children: "宿主负责生命周期，推荐顺序如下：" }),
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "XBase"
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
							children: "Log"
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
							children: "Init"
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
							children: " OnGameInit"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "() {"
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
							children: "    XBase"
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
							children: "Core"
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
							children: "NotifyGameInit"
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
							children: " OnProcess"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "() {"
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
							children: "    XBase"
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
							children: "Core"
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
							children: "Process"
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
				jsx(_components.span, { className: "line" }),
				"\n",
				jsx(_components.span, {
					className: "line",
					children: jsx(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// 安装宿主事件回调；同时启用当前版本的运行时保护"
					})
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
							children: "XBase"
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
							children: "Host"
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
							children: "Install"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "({OnGameInit, OnProcess});"
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
							children: "const"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " auto"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " domains "
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "="
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
							children: "    XBase"
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
							children: "Core"
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
							children: "DomainBit"
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
							children: "XBase"
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
							children: "Core"
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
							children: "Domain"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "::Player) "
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "|"
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
							children: "    XBase"
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
							children: "Core"
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
							children: "DomainBit"
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
							children: "XBase"
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
							children: "Core"
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
							children: "Domain"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "::Ped) "
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "|"
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
							children: "    XBase"
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
							children: "Core"
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
							children: "DomainBit"
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
							children: "XBase"
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
							children: "Core"
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
							children: "Domain"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "::Vehicle);"
						})
					]
				}),
				"\n",
				jsx(_components.span, { className: "line" }),
				"\n",
				jsx(_components.span, {
					className: "line",
					children: jsx(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// 掩码会过滤当前库不支持的领域"
					})
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
							children: "XBase"
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
							children: "Core"
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
							children: "Init"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "(domains);"
						})
					]
				}),
				"\n",
				jsx(_components.span, { className: "line" }),
				"\n",
				jsx(_components.span, {
					className: "line",
					children: jsx(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// 卸载前恢复控制器状态"
					})
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
							children: "XBase"
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
							children: "Core"
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
							children: "Shutdown"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "XBase"
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
							children: "Host"
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
							children: "Shutdown"
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
			jsx(_components.code, { children: "Host::Install()" }),
			" 安装 ",
			jsx(_components.code, { children: "initGameEvent" }),
			" 与进程事件订阅；",
			jsx(_components.code, { children: "Host::Shutdown()" }),
			" 会等待在途回调结束再解除订阅，并按逆序卸载运行时保护。"
		] }),
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
							children: "bool"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " Install"
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
							children: " Callbacks"
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
							children: " callbacks"
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
							children: "bool"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " IsInstalled"
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
							children: " ShowMessage"
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
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " char*"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: " message"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ");"
						})
					]
				})
			] })
		}) }),
		"\n",
		jsxs(_components.p, { children: [jsx(_components.code, { children: "ShowMessage()" }), " 在当前版本用游戏内置帮助消息输出 UTF-8 文本；VC/III 内部转换为宽字符，不经过 ImGui。"] }),
		"\n",
		jsxs(_components.p, { children: [
			"运行时保护只在对应版本安装：VC 增加剧情资源目录纠正（",
			jsx(_components.code, { children: "CDirectory::ReadDirFile" }),
			"）与空文件句柄保护（",
			jsx(_components.code, { children: "CFileMgr::Read" }),
			" / ",
			jsx(_components.code, { children: "CloseFile" }),
			"）；SA/VC 同时维护剧情期安全门，供 ",
			jsx(_components.code, { children: "BulletAssist" }),
			" 在剧情、相机过渡与玩家不可用状态下停止对象访问。"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"如果宿主自己负责 D3D/ImGui，则不要同时调用 ",
			jsx(_components.code, { children: "XBase::Hooks::Init()" }),
			" 和 ",
			jsx(_components.code, { children: "XBase::UI::Init()" }),
			"，避免重复安装 Hook 或创建第二套 ImGui context。"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "能力检查",
			children: "能力检查"
		}),
		"\n",
		jsx(_components.p, { children: "领域能力只表示至少存在一组真实 backend。页面应优先检查细粒度能力：" }),
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
							children: "if"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "XBase"
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
							children: "HasCapability"
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
							children: "XBase"
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
							children: "FeatureCapability"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "::PlayerBasicState)) {"
						})
					]
				}),
				"\n",
				jsx(_components.span, {
					className: "line",
					children: jsx(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "    // 禁用对应 UI 或显示“不支持当前版本”"
					})
				}),
				"\n",
				jsxs(_components.span, {
					className: "line",
					children: [jsx(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "    return"
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
						children: "}"
					})
				})
			] })
		}) }),
		"\n",
		jsxs(_components.p, { children: [
			"各版本的实际支持情况以 ",
			jsx(_components.code, { children: "Capabilities.cpp" }),
			" 与 README 能力矩阵为准；运行时行为以能力返回值唯一为准。SA 已收口全部领域；VC/III 只报告已实现的能力，未实现的能力保持 ",
			jsx(_components.code, { children: "false" }),
			"。"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"能力为 ",
			jsx(_components.code, { children: "false" }),
			" 时宿主不得继续调用对应功能。VC/III 的 ",
			jsx(_components.code, { children: "SetEnabledDomains()" }),
			" 会过滤未支持领域，",
			jsx(_components.code, { children: "GetEnabledDomains()" }),
			" 返回实际生效掩码。"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "xmenu-集成边界",
			children: "XMenu 集成边界"
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
				jsx(_components.span, {
					className: "line",
					children: jsx(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "flowchart LR"
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
						children: "    Page[XMenu 页面] --> Bridge[版本适配层]"
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
						children: "    Bridge --> API[XBase 公共 API]"
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
						children: "    API --> Backend[当前目标 XBase 后端]"
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
						children: "    Backend --> Game[GTA 运行时对象]"
					})
				})
			] })
		}) }),
		"\n",
		jsxs(_components.p, { children: [
			"页面只负责输入和显示；游戏对象访问属于 XBase 后端。宿主先将菜单字段转换为 ",
			jsx(_components.code, { children: "XBase::Vehicle::SpawnOptions" }),
			" 和 ",
			jsx(_components.code, { children: "SpawnPolicy" }),
			"，再调用 XBase Vehicle session。XBase 负责模型校验、限流、生成、旧车追踪/清理、生命周期恢复和事件队列；XMenu 只负责菜单输入、结果展示以及交通/自动驾驶/版本专属策略。"
		] }),
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
				jsx(_components.span, {
					className: "line",
					children: jsx(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "flowchart LR"
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
						children: "    Page[XMenu 页面] --> Adapter[纯菜单输入转换]"
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
						children: "    Adapter --> Session[XBase Vehicle Spawn Session]"
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
						children: "    Session --> Limit[限流与生成状态]"
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
						children: "    Session --> Cleanup[旧车追踪与清理]"
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
						children: "    Session --> Backend[SA/VC/III 版本后端]"
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
						children: "    Session --> Result[SpawnResult / VehicleEvent]"
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
						children: "    Result --> Host[XMenu 日志与提示]"
					})
				})
			] })
		}) }),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "Vehicle::Process()" }),
			"、",
			jsx(_components.code, { children: "World::Process()" }),
			"、",
			jsx(_components.code, { children: "Weapon::Process()" }),
			"、",
			jsx(_components.code, { children: "Scene::Process()" }),
			"、",
			jsx(_components.code, { children: "Teleport::Process()" }),
			"、",
			jsx(_components.code, { children: "Visual::Process()" }),
			" 和 ",
			jsx(_components.code, { children: "BulletAssist::Process()" }),
			" 只能由 ",
			jsx(_components.code, { children: "Core::Process()" }),
			" 调用。XMenu 不得再调用这些领域的持续处理入口；",
			jsx(_components.code, { children: "ProcessHost()" }),
			" 仅处理宿主策略和 UI 事件适配。"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"自由视角、俯视相机、霓虹、随机作弊等曾属于宿主的功能已由 ",
			jsx(_components.code, { children: "Camera" }),
			"、",
			jsx(_components.code, { children: "VehicleEffects" }),
			"、",
			jsx(_components.code, { children: "Cheats" }),
			" 提供，宿主不要重新引入对象访问；XMenu 只保留菜单状态、页面编排和输入转换，XBase 不依赖 ",
			jsx(_components.code, { children: "MenuState" }),
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
//#endregion
export { _markdown, MDXContent as default, frontmatter, structuredData, toc };
