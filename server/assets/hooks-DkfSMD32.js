import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/xbase/hooks.mdx?collection=docs
var frontmatter = {
	"title": "Hooks",
	"description": "D3D9 Hook（kiero）+ ImGui 引导。"
};
var _markdown = "\n\n`include/XBase/Hooks.h` · `XBase::Hooks`\n\n```cpp\nstruct DrawCallbackId {\n    std::uint64_t value = 0;\n};\n\nenum class RuntimeState {\n    Uninitialized,\n    Hooked,\n    RenderReady,\n    ShuttingDown,\n    Failed,\n};\n\nbool Init();\nvoid Shutdown();\nRuntimeState GetState();\nbool IsInitialized();\nbool IsReady();\nbool HadInitFailure();\nconst char* GetStatusText();\n\nDrawCallbackId RegisterDrawCallback(std::function<void()> callback);\nbool UnregisterDrawCallback(DrawCallbackId callbackId);\nvoid SetMenuVisible(bool visible);\nbool IsMenuVisible();\nvoid ToggleMenu();\n\nvoid SetBackgroundInputActive(bool active);\nbool IsBackgroundInputActive();\nvoid SetBackgroundRenderActive(bool active);\nbool IsBackgroundRenderActive();\nvoid MaintainInputState();\nfloat GetFrameDeltaSeconds();\nbool IsKeyboardCaptureActive();\nfloat ConsumeWheelDelta();\nvoid SetWheelInputSuppressed(bool suppressed);\nbool IsWheelInputSuppressed();\nbool IsGameWindowFullscreen();\nbool IsWindowModeSupported();\nWindowMode GetWindowMode();\nbool SetWindowMode(WindowMode mode);\nbool PrepareStartupWindowMode(WindowMode mode);\n```\n\n<Callout type=\"info\">\n  构建时通过 `XBASE_WITH_KIERO` 宏控制开启/关闭。依赖 `include/kiero/` 和 `include/imgui/`，完全自包含。\n</Callout>\n\n经典用法：\n\n```cpp\nXBase::Hooks::Init();\nconst XBase::Hooks::DrawCallbackId callbackId =\n    XBase::Hooks::RegisterDrawCallback([] {\n        XBase::UI::Window(\"main\", \"My Window\", [] {\n            XBase::UI::Text(\"Hello from XBase!\");\n        });\n    });\n```\n\n`RegisterDrawCallback()` 返回不透明 `DrawCallbackId`；卸载或重建 UI 时用 `UnregisterDrawCallback()` 注销，禁止把回调地址当作可见句柄传给第三方。\n\n`GetFrameDeltaSeconds()` 返回上一帧耗时（秒），供相机、拖拽等按帧推进的动画使用；`IsKeyboardCaptureActive()` 表示当前是否处于菜单文本输入等需要屏蔽快捷键的状态。\n\n`SetWheelInputSuppressed(true)` 后滚轮增量仍可通过 `ConsumeWheelDelta()` 读取，但滚轮消息不再转发给游戏窗口，宿主可以独占滚轮驱动自己的动作（例如菜单关闭时的武器轮切）；关闭功能或卸载时必须复位。\n\n菜单可见期间游戏按键与鼠标输入被屏蔽，菜单隐藏后若仍有按键处于按下状态，屏蔽会保持到全部松开，避免游戏把关闭键当成自身菜单操作；恢复时先补跑一次 `CPad::UpdatePads()` 再清零鼠标增量，丢弃菜单期间的累积移动。`Shutdown()` 会无条件恢复输入，不受该延迟影响。\n\n`SetWindowMode()` 支持三种模式：`Fullscreen` 保持独占全屏，`Windowed` 切到带边框的窗口并居中，`Borderless` 让窗口铺满显示器且无边框。后两者都让交换链以窗口模式呈现，画面由 DWM 合成，网页视图等 HWND 覆盖层可以原生速度显示。\n\n实现参考 `III.VC.SA.WindowedMode`：游戏设备在启动时就直接以窗口模式创建，三个模式都跑在同一个窗口期设备上，从不做独占全屏与窗口模式之间的设备切换。\n\n实现要点：\n\n* `PrepareStartupWindowMode()` 必须在游戏创建设备之前调用（ASI 加载期），内部替换 `IDirect3D9::CreateDevice`（SA）或 `IDirect3D8::CreateDevice`（VC/III）的 vtable 表项，把 `Windowed=TRUE`、显示器尺寸后缓冲、`DISCARD`、刷新率 0 与 `INTERVAL_DEFAULT` 写进创建参数；接口通过已加载的 `d3d9.dll` / `d3d8.dll` 导出获取，包装层（d3d8to9、d3d9 代理）也能命中同一份 vtable。\n* `SetWindowMode()` 在运行中只保存设置并调整窗口样式、`RsGlobal` 与游戏自身呈现参数，**需要重启游戏才真正生效**，因为窗口期交换链只能在启动时建立；启动阶段宿主调用一次即可。\n* 同步 `RsGlobal` 的窗口与分辨率状态，切回全屏时按保存值恢复；后处理顶点缓冲（SA）与运动模糊（VC/III）在设备变化后刷新，并调用宽屏修正的 `UpdateVars`。\n* 窗口模式下游离开客户区会丢失镜头控制，XBase 在游戏窗口前台且菜单未抢占输入时把光标裁剪到客户区。\n* 窗口模式下拦截游戏的失焦处理与框外鼠标键盘消息，避免自动暂停、最小化与误操作。运行时用 `IsWindowModeSupported()` 判断可用性。\n\n宿主不取得 D3D 设备，也不直接管理 ImGui；设备、Context、Win32/DX9 backend、WndProc、输入屏蔽和 Reset/Shutdown 生命周期全部属于 XBase。\n\n`Init()` 成功表示 EndScene/Reset Hook 已安装，状态进入 `Hooked`；第一次取得有效设备并完成 ImGui backend 初始化后进入 `RenderReady`。`Shutdown()` 先进入 `ShuttingDown`，恢复 WndProc 和游戏输入，再销毁 ImGui backend 与 kiero，最终回到 `Uninitialized`。\n\nReset 必须先失效 ImGui 设备对象，再调用原始 D3D Reset；只有原始 Reset 成功时才重建设备对象。\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "`include/XBase/Hooks.h` · `XBase::Hooks`"
		},
		{
			"heading": void 0,
			"content": "构建时通过 `XBASE_WITH_KIERO` 宏控制开启/关闭。依赖 `include/kiero/` 和 `include/imgui/`，完全自包含。"
		},
		{
			"heading": void 0,
			"content": "经典用法："
		},
		{
			"heading": void 0,
			"content": "`RegisterDrawCallback()` 返回不透明 `DrawCallbackId`；卸载或重建 UI 时用 `UnregisterDrawCallback()` 注销，禁止把回调地址当作可见句柄传给第三方。"
		},
		{
			"heading": void 0,
			"content": "`GetFrameDeltaSeconds()` 返回上一帧耗时（秒），供相机、拖拽等按帧推进的动画使用；`IsKeyboardCaptureActive()` 表示当前是否处于菜单文本输入等需要屏蔽快捷键的状态。"
		},
		{
			"heading": void 0,
			"content": "`SetWheelInputSuppressed(true)` 后滚轮增量仍可通过 `ConsumeWheelDelta()` 读取，但滚轮消息不再转发给游戏窗口，宿主可以独占滚轮驱动自己的动作（例如菜单关闭时的武器轮切）；关闭功能或卸载时必须复位。"
		},
		{
			"heading": void 0,
			"content": "菜单可见期间游戏按键与鼠标输入被屏蔽，菜单隐藏后若仍有按键处于按下状态，屏蔽会保持到全部松开，避免游戏把关闭键当成自身菜单操作；恢复时先补跑一次 `CPad::UpdatePads()` 再清零鼠标增量，丢弃菜单期间的累积移动。`Shutdown()` 会无条件恢复输入，不受该延迟影响。"
		},
		{
			"heading": void 0,
			"content": "`SetWindowMode()` 支持三种模式：`Fullscreen` 保持独占全屏，`Windowed` 切到带边框的窗口并居中，`Borderless` 让窗口铺满显示器且无边框。后两者都让交换链以窗口模式呈现，画面由 DWM 合成，网页视图等 HWND 覆盖层可以原生速度显示。"
		},
		{
			"heading": void 0,
			"content": "实现参考 `III.VC.SA.WindowedMode`：游戏设备在启动时就直接以窗口模式创建，三个模式都跑在同一个窗口期设备上，从不做独占全屏与窗口模式之间的设备切换。"
		},
		{
			"heading": void 0,
			"content": "实现要点："
		},
		{
			"heading": void 0,
			"content": "`PrepareStartupWindowMode()` 必须在游戏创建设备之前调用（ASI 加载期），内部替换 `IDirect3D9::CreateDevice`（SA）或 `IDirect3D8::CreateDevice`（VC/III）的 vtable 表项，把 `Windowed=TRUE`、显示器尺寸后缓冲、`DISCARD`、刷新率 0 与 `INTERVAL_DEFAULT` 写进创建参数；接口通过已加载的 `d3d9.dll` / `d3d8.dll` 导出获取，包装层（d3d8to9、d3d9 代理）也能命中同一份 vtable。"
		},
		{
			"heading": void 0,
			"content": "`SetWindowMode()` 在运行中只保存设置并调整窗口样式、`RsGlobal` 与游戏自身呈现参数，**需要重启游戏才真正生效**，因为窗口期交换链只能在启动时建立；启动阶段宿主调用一次即可。"
		},
		{
			"heading": void 0,
			"content": "同步 `RsGlobal` 的窗口与分辨率状态，切回全屏时按保存值恢复；后处理顶点缓冲（SA）与运动模糊（VC/III）在设备变化后刷新，并调用宽屏修正的 `UpdateVars`。"
		},
		{
			"heading": void 0,
			"content": "窗口模式下游离开客户区会丢失镜头控制，XBase 在游戏窗口前台且菜单未抢占输入时把光标裁剪到客户区。"
		},
		{
			"heading": void 0,
			"content": "窗口模式下拦截游戏的失焦处理与框外鼠标键盘消息，避免自动暂停、最小化与误操作。运行时用 `IsWindowModeSupported()` 判断可用性。"
		},
		{
			"heading": void 0,
			"content": "宿主不取得 D3D 设备，也不直接管理 ImGui；设备、Context、Win32/DX9 backend、WndProc、输入屏蔽和 Reset/Shutdown 生命周期全部属于 XBase。"
		},
		{
			"heading": void 0,
			"content": "`Init()` 成功表示 EndScene/Reset Hook 已安装，状态进入 `Hooked`；第一次取得有效设备并完成 ImGui backend 初始化后进入 `RenderReady`。`Shutdown()` 先进入 `ShuttingDown`，恢复 WndProc 和游戏输入，再销毁 ImGui backend 与 kiero，最终回到 `Uninitialized`。"
		},
		{
			"heading": void 0,
			"content": "Reset 必须先失效 ImGui 设备对象，再调用原始 D3D Reset；只有原始 Reset 成功时才重建设备对象。"
		}
	],
	"headings": []
};
var toc = [];
function _createMdxContent(props) {
	const _components = {
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		ul: "ul",
		...props.components
	}, { Callout } = _components;
	if (!Callout) _missingMdxReference("Callout", true);
	return jsxs(Fragment, { children: [
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "include/XBase/Hooks.h" }),
			" · ",
			jsx(_components.code, { children: "XBase::Hooks" })
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
							children: "struct"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " DrawCallbackId"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "    std"
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
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "uint64_t"
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
							children: " RuntimeState"
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
						children: "    Uninitialized"
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
						children: "    Hooked"
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
						children: "    RenderReady"
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
						children: "    ShuttingDown"
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
						children: "    Failed"
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
							children: "bool"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "RuntimeState"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " GetState"
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
							children: "bool"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " IsReady"
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
							children: " HadInitFailure"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " GetStatusText"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "DrawCallbackId"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " RegisterDrawCallback"
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
							children: "function"
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
							children: "void"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "()> "
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: "callback"
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
							children: "bool"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " UnregisterDrawCallback"
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
							children: "DrawCallbackId"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: " callbackId"
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
							children: " SetMenuVisible"
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
							children: " visible"
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
							children: "bool"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " IsMenuVisible"
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
							children: " ToggleMenu"
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
							children: " SetBackgroundInputActive"
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
							children: " active"
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
							children: "bool"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " IsBackgroundInputActive"
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
							children: " SetBackgroundRenderActive"
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
							children: " active"
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
							children: "bool"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " IsBackgroundRenderActive"
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
							children: " MaintainInputState"
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
							children: "float"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " GetFrameDeltaSeconds"
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
							children: " IsKeyboardCaptureActive"
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
							children: "float"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " ConsumeWheelDelta"
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
							children: " SetWheelInputSuppressed"
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
							children: " suppressed"
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
							children: "bool"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " IsWheelInputSuppressed"
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
							children: " IsGameWindowFullscreen"
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
							children: " IsWindowModeSupported"
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
							children: "WindowMode"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " GetWindowMode"
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
							children: " SetWindowMode"
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
							children: "WindowMode"
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
							children: " PrepareStartupWindowMode"
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
							children: "WindowMode"
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
				})
			] })
		}) }),
		"\n",
		jsx(Callout, {
			type: "info",
			children: jsxs(_components.p, { children: [
				"构建时通过 ",
				jsx(_components.code, { children: "XBASE_WITH_KIERO" }),
				" 宏控制开启/关闭。依赖 ",
				jsx(_components.code, { children: "include/kiero/" }),
				" 和 ",
				jsx(_components.code, { children: "include/imgui/" }),
				"，完全自包含。"
			] })
		}),
		"\n",
		jsx(_components.p, { children: "经典用法：" }),
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
							children: "Hooks"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " XBase"
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
							children: "Hooks"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "::DrawCallbackId callbackId "
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
							children: "Hooks"
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
							children: "RegisterDrawCallback"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "([] {"
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
							children: "        XBase"
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
							children: "UI"
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
							children: "Window"
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
							children: "\"main\""
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
							children: "\"My Window\""
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", [] {"
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
							children: "            XBase"
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
							children: "UI"
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
							children: "Text"
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
							children: "\"Hello from XBase!\""
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
				jsx(_components.span, {
					className: "line",
					children: jsx(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "        });"
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
						children: "    });"
					})
				})
			] })
		}) }),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "RegisterDrawCallback()" }),
			" 返回不透明 ",
			jsx(_components.code, { children: "DrawCallbackId" }),
			"；卸载或重建 UI 时用 ",
			jsx(_components.code, { children: "UnregisterDrawCallback()" }),
			" 注销，禁止把回调地址当作可见句柄传给第三方。"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "GetFrameDeltaSeconds()" }),
			" 返回上一帧耗时（秒），供相机、拖拽等按帧推进的动画使用；",
			jsx(_components.code, { children: "IsKeyboardCaptureActive()" }),
			" 表示当前是否处于菜单文本输入等需要屏蔽快捷键的状态。"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "SetWheelInputSuppressed(true)" }),
			" 后滚轮增量仍可通过 ",
			jsx(_components.code, { children: "ConsumeWheelDelta()" }),
			" 读取，但滚轮消息不再转发给游戏窗口，宿主可以独占滚轮驱动自己的动作（例如菜单关闭时的武器轮切）；关闭功能或卸载时必须复位。"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"菜单可见期间游戏按键与鼠标输入被屏蔽，菜单隐藏后若仍有按键处于按下状态，屏蔽会保持到全部松开，避免游戏把关闭键当成自身菜单操作；恢复时先补跑一次 ",
			jsx(_components.code, { children: "CPad::UpdatePads()" }),
			" 再清零鼠标增量，丢弃菜单期间的累积移动。",
			jsx(_components.code, { children: "Shutdown()" }),
			" 会无条件恢复输入，不受该延迟影响。"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "SetWindowMode()" }),
			" 支持三种模式：",
			jsx(_components.code, { children: "Fullscreen" }),
			" 保持独占全屏，",
			jsx(_components.code, { children: "Windowed" }),
			" 切到带边框的窗口并居中，",
			jsx(_components.code, { children: "Borderless" }),
			" 让窗口铺满显示器且无边框。后两者都让交换链以窗口模式呈现，画面由 DWM 合成，网页视图等 HWND 覆盖层可以原生速度显示。"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"实现参考 ",
			jsx(_components.code, { children: "III.VC.SA.WindowedMode" }),
			"：游戏设备在启动时就直接以窗口模式创建，三个模式都跑在同一个窗口期设备上，从不做独占全屏与窗口模式之间的设备切换。"
		] }),
		"\n",
		jsx(_components.p, { children: "实现要点：" }),
		"\n",
		jsxs(_components.ul, { children: [
			"\n",
			jsxs(_components.li, { children: [
				jsx(_components.code, { children: "PrepareStartupWindowMode()" }),
				" 必须在游戏创建设备之前调用（ASI 加载期），内部替换 ",
				jsx(_components.code, { children: "IDirect3D9::CreateDevice" }),
				"（SA）或 ",
				jsx(_components.code, { children: "IDirect3D8::CreateDevice" }),
				"（VC/III）的 vtable 表项，把 ",
				jsx(_components.code, { children: "Windowed=TRUE" }),
				"、显示器尺寸后缓冲、",
				jsx(_components.code, { children: "DISCARD" }),
				"、刷新率 0 与 ",
				jsx(_components.code, { children: "INTERVAL_DEFAULT" }),
				" 写进创建参数；接口通过已加载的 ",
				jsx(_components.code, { children: "d3d9.dll" }),
				" / ",
				jsx(_components.code, { children: "d3d8.dll" }),
				" 导出获取，包装层（d3d8to9、d3d9 代理）也能命中同一份 vtable。"
			] }),
			"\n",
			jsxs(_components.li, { children: [
				jsx(_components.code, { children: "SetWindowMode()" }),
				" 在运行中只保存设置并调整窗口样式、",
				jsx(_components.code, { children: "RsGlobal" }),
				" 与游戏自身呈现参数，",
				jsx(_components.strong, { children: "需要重启游戏才真正生效" }),
				"，因为窗口期交换链只能在启动时建立；启动阶段宿主调用一次即可。"
			] }),
			"\n",
			jsxs(_components.li, { children: [
				"同步 ",
				jsx(_components.code, { children: "RsGlobal" }),
				" 的窗口与分辨率状态，切回全屏时按保存值恢复；后处理顶点缓冲（SA）与运动模糊（VC/III）在设备变化后刷新，并调用宽屏修正的 ",
				jsx(_components.code, { children: "UpdateVars" }),
				"。"
			] }),
			"\n",
			jsx(_components.li, { children: "窗口模式下游离开客户区会丢失镜头控制，XBase 在游戏窗口前台且菜单未抢占输入时把光标裁剪到客户区。" }),
			"\n",
			jsxs(_components.li, { children: [
				"窗口模式下拦截游戏的失焦处理与框外鼠标键盘消息，避免自动暂停、最小化与误操作。运行时用 ",
				jsx(_components.code, { children: "IsWindowModeSupported()" }),
				" 判断可用性。"
			] }),
			"\n"
		] }),
		"\n",
		jsx(_components.p, { children: "宿主不取得 D3D 设备，也不直接管理 ImGui；设备、Context、Win32/DX9 backend、WndProc、输入屏蔽和 Reset/Shutdown 生命周期全部属于 XBase。" }),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "Init()" }),
			" 成功表示 EndScene/Reset Hook 已安装，状态进入 ",
			jsx(_components.code, { children: "Hooked" }),
			"；第一次取得有效设备并完成 ImGui backend 初始化后进入 ",
			jsx(_components.code, { children: "RenderReady" }),
			"。",
			jsx(_components.code, { children: "Shutdown()" }),
			" 先进入 ",
			jsx(_components.code, { children: "ShuttingDown" }),
			"，恢复 WndProc 和游戏输入，再销毁 ImGui backend 与 kiero，最终回到 ",
			jsx(_components.code, { children: "Uninitialized" }),
			"。"
		] }),
		"\n",
		jsx(_components.p, { children: "Reset 必须先失效 ImGui 设备对象，再调用原始 D3D Reset；只有原始 Reset 成功时才重建设备对象。" })
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
