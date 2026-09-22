import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/plugins/events.mdx?collection=docs
var frontmatter = {
	"title": "生命周期 Events",
	"description": "挂游戏帧、绘制与实体构造析构回调（SA 为主）"
};
var _markdown = "\n\n`shared/Events.h` · `plugin::Events`\n\n把逻辑挂在游戏生命周期上。&#x2A;*不要在 `DllMain` 里碰游戏对象。** 文档以 SA 为主；III / VC 的同名事件以 `Events.h` 为准。\n\n## 注册回调 [#注册回调]\n\n`+=` / `before` / `after` / `-=` 的签名必须与事件一致。在 **静态全局对象的构造函数** 里 `+=`；全局实例必须存在，否则构造不会执行。\n\n<CodeBlockTabs defaultValue=\"签名\">\n  <CodeBlockTabsList>\n    <CodeBlockTabsTrigger value=\"签名\">\n      签名\n    </CodeBlockTabsTrigger>\n\n    <CodeBlockTabsTrigger value=\"示例\">\n      示例\n    </CodeBlockTabsTrigger>\n  </CodeBlockTabsList>\n\n  <CodeBlockTab value=\"签名\">\n    ```cpp\n    event += callback;\n    event.before += callback;\n    event.after += callback;\n    event -= callback;\n    ```\n  </CodeBlockTab>\n\n  <CodeBlockTab value=\"示例\">\n    ```cpp\n    #include \"plugin.h\"\n\n    class MyPlugin {\n    public:\n        MyPlugin() {\n            plugin::Events::processScriptsEvent += OnProcessScripts;\n            plugin::Events::drawingEvent += OnDraw;\n            plugin::Events::pedCtorEvent += OnPedCtor;\n        }\n\n    private:\n        static void OnProcessScripts() {}\n        static void OnDraw() {}\n        static void OnPedCtor(CPed* ped) { (void)ped; }\n    };\n\n    MyPlugin g_my_plugin;\n    ```\n  </CodeBlockTab>\n</CodeBlockTabs>\n\n## 阶段速查 [#阶段速查]\n\n| 阶段                    | 适合             | 避免                 |\n| --------------------- | -------------- | ------------------ |\n| 静态构造                  | `+=`、读自己的 ini  | `FindPlayerPed`、刷车 |\n| `initRwEvent`         | 贴图、Pattern、配置  | 假定已有玩家             |\n| `initPoolsEvent`      | 按池分配 Extender  | 遍历尚不存在的实体          |\n| `processScriptsEvent` | 逻辑、Command、按键  | 重 IO               |\n| `drawing` / `drawHud` | 2D 绘制          | 创建 / 删除实体          |\n| `*RenderEvent`        | 矩阵、材质          | 删除实体               |\n| `*DtorEvent`          | 释放附属数据         | 之后继续用指针            |\n| `d3dLost` / `Reset`   | 释放 / 重建 GPU 资源 | Lost 后继续 Draw      |\n\n## 重开游戏 [#重开游戏]\n\n<Api name=\"restartGameEvent\" header=\"void()\">\n  新开一局时清理插件自身状态。\n\n  ```cpp\n  plugin::Events::restartGameEvent += [] {\n      // clear flags / caches\n  };\n  ```\n</Api>\n\n## RenderWare 初始化与关闭 [#renderware-初始化与关闭]\n\n<Api name=\"initRwEvent / shutdownRwEvent\" header=\"void()\">\n  RW 就绪后加载贴图与资源；关闭前释放。\n\n  ```cpp\n  plugin::Events::initRwEvent += [] {\n      // load sprites / pattern / ini\n  };\n  plugin::Events::shutdownRwEvent += [] {\n      // clear sprites\n  };\n  ```\n</Api>\n\n## 对象池 [#对象池]\n\n<Api name=\"initPoolsEvent / shutdownPoolsEvent\" header=\"void()\">\n  池建好后分配 Extender；池销毁时释放。\n\n  ```cpp\n  plugin::Events::initPoolsEvent += [] {};\n  plugin::Events::shutdownPoolsEvent += [] {};\n  ```\n</Api>\n\n## 进游戏与再初始化 [#进游戏与再初始化]\n\n<Api name=\"initGameEvent / reInitGameEvent\" header=\"void()\">\n  进入游戏，以及读档后的再初始化。\n\n  ```cpp\n  plugin::Events::initGameEvent += [] {};\n  plugin::Events::reInitGameEvent += [] {};\n  ```\n</Api>\n\n## 脚本系统就绪 [#脚本系统就绪]\n\n<Api name=\"initScriptsEvent\" header=\"void()\">\n  脚本系统起来之后。\n\n  ```cpp\n  plugin::Events::initScriptsEvent += [] {};\n  ```\n</Api>\n\n## 每帧逻辑 [#每帧逻辑]\n\n<Api name=\"processScriptsEvent\" header=\"void()\">\n  每帧逻辑的主入口：按键、Command、改实体状态。\n\n  ```cpp\n  #include \"common.h\"\n\n  plugin::Events::processScriptsEvent += [] {\n      CPed* ped = FindPlayerPed();\n      if (!ped) {\n          return;\n      }\n      ped->m_fHealth = ped->m_fMaxHealth;\n  };\n  ```\n</Api>\n\n## 主循环钩子 [#主循环钩子]\n\n<Api name=\"gameProcessEvent\" header=\"void()\">\n  主循环上的另一钩子。改脚本 / 实体状态时优先 `processScriptsEvent`。\n\n  ```cpp\n  plugin::Events::gameProcessEvent += [] {};\n  ```\n</Api>\n\n## 2D 绘制 [#2d-绘制]\n\n<Api name=\"drawingEvent / drawHudEvent / drawAfterFadeEvent / drawFontsEvent\" header=\"void()\">\n  只做绘制，不要在这里创建或删除实体。\n\n  ```cpp\n  plugin::Events::drawingEvent += [] {\n      // gamefont / sprite\n  };\n  plugin::Events::drawHudEvent += [] {};\n  plugin::Events::drawAfterFadeEvent += [] {};\n  plugin::Events::drawFontsEvent += [] {};\n  ```\n</Api>\n\n## 雷达绘制 [#雷达绘制]\n\n<Api name=\"drawRadarEvent / drawBlipsEvent / drawRadarOverlayEvent\">\n  ```cpp\n  plugin::Events::drawRadarEvent += [] {};\n  plugin::Events::drawBlipsEvent += [] {};\n  // SA: void(bool)\n  plugin::Events::drawRadarOverlayEvent += [](bool flag) {\n      (void)flag;\n  };\n  ```\n</Api>\n\n## 暂停菜单绘制 [#暂停菜单绘制]\n\n<Api name=\"drawMenuBackgroundEvent / menuDrawingEvent\">\n  参数类型以当前游戏头文件为准。\n\n  ```cpp\n  plugin::Events::drawMenuBackgroundEvent += [](void*) {};\n  plugin::Events::menuDrawingEvent += [](CMenuManager* menu) {\n      (void)menu;\n  };\n  ```\n</Api>\n\n## 3D 场景与特效 [#3d-场景与特效]\n\n<Api name=\"renderSceneEvent / renderEffectsEvent\" header=\"void()\">\n  可以改矩阵、材质；不要在这里删除实体。\n\n  ```cpp\n  plugin::Events::renderSceneEvent += [] {};\n  plugin::Events::renderEffectsEvent += [] {};\n  ```\n</Api>\n\n## 镜子渲染（SA） [#镜子渲染sa]\n\n<Api name=\"renderMirrorEvent\" header=\"void() · SA\">\n  需要画进镜面内容时使用；不要在这里改游戏逻辑状态。\n\n  ```cpp\n  plugin::Events::renderMirrorEvent += [] {\n      // mirror pass extras\n  };\n  ```\n</Api>\n\n## 行人构造与析构 [#行人构造与析构]\n\n<Api name=\"pedCtorEvent / pedDtorEvent\" header=\"void(CPed*)\">\n  构造后初始化附属数据；析构前释放。dtor 之后不要再使用该指针。\n\n  ```cpp\n  plugin::Events::pedCtorEvent += [](CPed* ped) {\n      if (!ped) {\n          return;\n      }\n  };\n  plugin::Events::pedDtorEvent += [](CPed* ped) {\n      (void)ped;\n  };\n  ```\n</Api>\n\n## 载具构造与析构 [#载具构造与析构]\n\n<Api name=\"vehicleCtorEvent / vehicleDtorEvent\" header=\"void(CVehicle*)\">\n  ```cpp\n  plugin::Events::vehicleCtorEvent += [](CVehicle* veh) {\n      (void)veh;\n  };\n  plugin::Events::vehicleDtorEvent += [](CVehicle* veh) {\n      (void)veh;\n  };\n  ```\n</Api>\n\n## 物体构造与析构 [#物体构造与析构]\n\n<Api name=\"objectCtorEvent / objectDtorEvent\" header=\"void(CObject*)\">\n  ```cpp\n  plugin::Events::objectCtorEvent += [](CObject* obj) {\n      (void)obj;\n  };\n  plugin::Events::objectDtorEvent += [](CObject* obj) {\n      (void)obj;\n  };\n  ```\n</Api>\n\n## 实体渲染前 [#实体渲染前]\n\n<Api name=\"pedRenderEvent / vehicleRenderEvent / objectRenderEvent\">\n  适合改骨骼矩阵；不要删除实体。\n\n  ```cpp\n  plugin::Events::pedRenderEvent += [](CPed* ped) {\n      if (!ped || !ped->m_pRwClump) {\n          return;\n      }\n  };\n  plugin::Events::vehicleRenderEvent += [](CVehicle*) {};\n  plugin::Events::objectRenderEvent += [](CObject*) {};\n  ```\n</Api>\n\n## 换模型后 [#换模型后]\n\n<Api name=\"pedSetModelEvent / vehicleSetModelEvent\">\n  ```cpp\n  // void(CPed*, int) / void(CVehicle*, int)\n  plugin::Events::pedSetModelEvent += [](CPed* ped, int model) {\n      (void)ped;\n      (void)model;\n  };\n  plugin::Events::vehicleSetModelEvent += [](CVehicle*, int) {};\n  ```\n</Api>\n\n## D3D 设备丢失与重置 [#d3d-设备丢失与重置]\n\n<Api name=\"d3dLostEvent / d3dResetEvent\" header=\"void()\">\n  设备丢失时释放 GPU 资源，重置后重建。\n\n  ```cpp\n  plugin::Events::d3dLostEvent += [] {};\n  plugin::Events::d3dResetEvent += [] {};\n  ```\n</Api>\n\n## 全局静音与恢复 [#全局静音与恢复]\n\n<Api name=\"onPauseAllSounds / onResumeAllSounds\">\n  签名以头文件为准。\n\n  ```cpp\n  plugin::Events::onPauseAllSounds += [](void* p) {\n      (void)p;\n  };\n  plugin::Events::onResumeAllSounds += [](void*) {};\n  ```\n</Api>\n\n## 挂 RenderWare 插件 [#挂-renderware-插件]\n\n<Api name=\"attachRwPluginsEvent\" header=\"bool()\">\n  ```cpp\n  plugin::Events::attachRwPluginsEvent += [] {\n      return true;\n  };\n  ```\n</Api>\n\n## 组合示例 [#组合示例]\n\n```cpp\n#include \"plugin.h\"\n#include \"common.h\"\n#include \"extensions/KeyCheck.h\"\n\nclass Plugin {\npublic:\n    Plugin() {\n        plugin::Events::processScriptsEvent += [] {\n            KeyCheck::Update();\n            if (!KeyCheck::CheckJustDown(VK_F7)) {\n                return;\n            }\n            CPed* ped = FindPlayerPed();\n            if (!ped) {\n                return;\n            }\n            ped->m_fHealth = ped->m_fMaxHealth;\n        };\n    }\n} g_plugin;\n```\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "`shared/Events.h` · `plugin::Events`"
		},
		{
			"heading": void 0,
			"content": "把逻辑挂在游戏生命周期上。&#x2A;*不要在 `DllMain` 里碰游戏对象。** 文档以 SA 为主；III / VC 的同名事件以 `Events.h` 为准。"
		},
		{
			"heading": "注册回调",
			"content": "`+=` / `before` / `after` / `-=` 的签名必须与事件一致。在 **静态全局对象的构造函数** 里 `+=`；全局实例必须存在，否则构造不会执行。"
		},
		{
			"heading": "阶段速查",
			"content": "阶段"
		},
		{
			"heading": "阶段速查",
			"content": "适合"
		},
		{
			"heading": "阶段速查",
			"content": "避免"
		},
		{
			"heading": "阶段速查",
			"content": "静态构造"
		},
		{
			"heading": "阶段速查",
			"content": "`+=`、读自己的 ini"
		},
		{
			"heading": "阶段速查",
			"content": "`FindPlayerPed`、刷车"
		},
		{
			"heading": "阶段速查",
			"content": "`initRwEvent`"
		},
		{
			"heading": "阶段速查",
			"content": "贴图、Pattern、配置"
		},
		{
			"heading": "阶段速查",
			"content": "假定已有玩家"
		},
		{
			"heading": "阶段速查",
			"content": "`initPoolsEvent`"
		},
		{
			"heading": "阶段速查",
			"content": "按池分配 Extender"
		},
		{
			"heading": "阶段速查",
			"content": "遍历尚不存在的实体"
		},
		{
			"heading": "阶段速查",
			"content": "`processScriptsEvent`"
		},
		{
			"heading": "阶段速查",
			"content": "逻辑、Command、按键"
		},
		{
			"heading": "阶段速查",
			"content": "重 IO"
		},
		{
			"heading": "阶段速查",
			"content": "`drawing` / `drawHud`"
		},
		{
			"heading": "阶段速查",
			"content": "2D 绘制"
		},
		{
			"heading": "阶段速查",
			"content": "创建 / 删除实体"
		},
		{
			"heading": "阶段速查",
			"content": "`*RenderEvent`"
		},
		{
			"heading": "阶段速查",
			"content": "矩阵、材质"
		},
		{
			"heading": "阶段速查",
			"content": "删除实体"
		},
		{
			"heading": "阶段速查",
			"content": "`*DtorEvent`"
		},
		{
			"heading": "阶段速查",
			"content": "释放附属数据"
		},
		{
			"heading": "阶段速查",
			"content": "之后继续用指针"
		},
		{
			"heading": "阶段速查",
			"content": "`d3dLost` / `Reset`"
		},
		{
			"heading": "阶段速查",
			"content": "释放 / 重建 GPU 资源"
		},
		{
			"heading": "阶段速查",
			"content": "Lost 后继续 Draw"
		},
		{
			"heading": "重开游戏",
			"content": "新开一局时清理插件自身状态。"
		},
		{
			"heading": "renderware-初始化与关闭",
			"content": "RW 就绪后加载贴图与资源；关闭前释放。"
		},
		{
			"heading": "对象池",
			"content": "池建好后分配 Extender；池销毁时释放。"
		},
		{
			"heading": "进游戏与再初始化",
			"content": "进入游戏，以及读档后的再初始化。"
		},
		{
			"heading": "脚本系统就绪",
			"content": "脚本系统起来之后。"
		},
		{
			"heading": "每帧逻辑",
			"content": "每帧逻辑的主入口：按键、Command、改实体状态。"
		},
		{
			"heading": "主循环钩子",
			"content": "主循环上的另一钩子。改脚本 / 实体状态时优先 `processScriptsEvent`。"
		},
		{
			"heading": "2d-绘制",
			"content": "只做绘制，不要在这里创建或删除实体。"
		},
		{
			"heading": "暂停菜单绘制",
			"content": "参数类型以当前游戏头文件为准。"
		},
		{
			"heading": "3d-场景与特效",
			"content": "可以改矩阵、材质；不要在这里删除实体。"
		},
		{
			"heading": "镜子渲染sa",
			"content": "需要画进镜面内容时使用；不要在这里改游戏逻辑状态。"
		},
		{
			"heading": "行人构造与析构",
			"content": "构造后初始化附属数据；析构前释放。dtor 之后不要再使用该指针。"
		},
		{
			"heading": "实体渲染前",
			"content": "适合改骨骼矩阵；不要删除实体。"
		},
		{
			"heading": "d3d-设备丢失与重置",
			"content": "设备丢失时释放 GPU 资源，重置后重建。"
		},
		{
			"heading": "全局静音与恢复",
			"content": "签名以头文件为准。"
		}
	],
	"headings": [
		{
			"id": "注册回调",
			"content": "注册回调"
		},
		{
			"id": "阶段速查",
			"content": "阶段速查"
		},
		{
			"id": "重开游戏",
			"content": "重开游戏"
		},
		{
			"id": "renderware-初始化与关闭",
			"content": "RenderWare 初始化与关闭"
		},
		{
			"id": "对象池",
			"content": "对象池"
		},
		{
			"id": "进游戏与再初始化",
			"content": "进游戏与再初始化"
		},
		{
			"id": "脚本系统就绪",
			"content": "脚本系统就绪"
		},
		{
			"id": "每帧逻辑",
			"content": "每帧逻辑"
		},
		{
			"id": "主循环钩子",
			"content": "主循环钩子"
		},
		{
			"id": "2d-绘制",
			"content": "2D 绘制"
		},
		{
			"id": "雷达绘制",
			"content": "雷达绘制"
		},
		{
			"id": "暂停菜单绘制",
			"content": "暂停菜单绘制"
		},
		{
			"id": "3d-场景与特效",
			"content": "3D 场景与特效"
		},
		{
			"id": "镜子渲染sa",
			"content": "镜子渲染（SA）"
		},
		{
			"id": "行人构造与析构",
			"content": "行人构造与析构"
		},
		{
			"id": "载具构造与析构",
			"content": "载具构造与析构"
		},
		{
			"id": "物体构造与析构",
			"content": "物体构造与析构"
		},
		{
			"id": "实体渲染前",
			"content": "实体渲染前"
		},
		{
			"id": "换模型后",
			"content": "换模型后"
		},
		{
			"id": "d3d-设备丢失与重置",
			"content": "D3D 设备丢失与重置"
		},
		{
			"id": "全局静音与恢复",
			"content": "全局静音与恢复"
		},
		{
			"id": "挂-renderware-插件",
			"content": "挂 RenderWare 插件"
		},
		{
			"id": "组合示例",
			"content": "组合示例"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#注册回调",
		title: jsx(Fragment, { children: "注册回调" })
	},
	{
		depth: 2,
		url: "#阶段速查",
		title: jsx(Fragment, { children: "阶段速查" })
	},
	{
		depth: 2,
		url: "#重开游戏",
		title: jsx(Fragment, { children: "重开游戏" })
	},
	{
		depth: 2,
		url: "#renderware-初始化与关闭",
		title: jsx(Fragment, { children: "RenderWare 初始化与关闭" })
	},
	{
		depth: 2,
		url: "#对象池",
		title: jsx(Fragment, { children: "对象池" })
	},
	{
		depth: 2,
		url: "#进游戏与再初始化",
		title: jsx(Fragment, { children: "进游戏与再初始化" })
	},
	{
		depth: 2,
		url: "#脚本系统就绪",
		title: jsx(Fragment, { children: "脚本系统就绪" })
	},
	{
		depth: 2,
		url: "#每帧逻辑",
		title: jsx(Fragment, { children: "每帧逻辑" })
	},
	{
		depth: 2,
		url: "#主循环钩子",
		title: jsx(Fragment, { children: "主循环钩子" })
	},
	{
		depth: 2,
		url: "#2d-绘制",
		title: jsx(Fragment, { children: "2D 绘制" })
	},
	{
		depth: 2,
		url: "#雷达绘制",
		title: jsx(Fragment, { children: "雷达绘制" })
	},
	{
		depth: 2,
		url: "#暂停菜单绘制",
		title: jsx(Fragment, { children: "暂停菜单绘制" })
	},
	{
		depth: 2,
		url: "#3d-场景与特效",
		title: jsx(Fragment, { children: "3D 场景与特效" })
	},
	{
		depth: 2,
		url: "#镜子渲染sa",
		title: jsx(Fragment, { children: "镜子渲染（SA）" })
	},
	{
		depth: 2,
		url: "#行人构造与析构",
		title: jsx(Fragment, { children: "行人构造与析构" })
	},
	{
		depth: 2,
		url: "#载具构造与析构",
		title: jsx(Fragment, { children: "载具构造与析构" })
	},
	{
		depth: 2,
		url: "#物体构造与析构",
		title: jsx(Fragment, { children: "物体构造与析构" })
	},
	{
		depth: 2,
		url: "#实体渲染前",
		title: jsx(Fragment, { children: "实体渲染前" })
	},
	{
		depth: 2,
		url: "#换模型后",
		title: jsx(Fragment, { children: "换模型后" })
	},
	{
		depth: 2,
		url: "#d3d-设备丢失与重置",
		title: jsx(Fragment, { children: "D3D 设备丢失与重置" })
	},
	{
		depth: 2,
		url: "#全局静音与恢复",
		title: jsx(Fragment, { children: "全局静音与恢复" })
	},
	{
		depth: 2,
		url: "#挂-renderware-插件",
		title: jsx(Fragment, { children: "挂 RenderWare 插件" })
	},
	{
		depth: 2,
		url: "#组合示例",
		title: jsx(Fragment, { children: "组合示例" })
	}
];
function _createMdxContent(props) {
	const _components = {
		code: "code",
		h2: "h2",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		table: "table",
		tbody: "tbody",
		td: "td",
		th: "th",
		thead: "thead",
		tr: "tr",
		...props.components
	}, { Api, CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger } = _components;
	if (!Api) _missingMdxReference("Api", true);
	if (!CodeBlockTab) _missingMdxReference("CodeBlockTab", true);
	if (!CodeBlockTabs) _missingMdxReference("CodeBlockTabs", true);
	if (!CodeBlockTabsList) _missingMdxReference("CodeBlockTabsList", true);
	if (!CodeBlockTabsTrigger) _missingMdxReference("CodeBlockTabsTrigger", true);
	return jsxs(Fragment, { children: [
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "shared/Events.h" }),
			" · ",
			jsx(_components.code, { children: "plugin::Events" })
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"把逻辑挂在游戏生命周期上。",
			jsxs(_components.strong, { children: [
				"不要在 ",
				jsx(_components.code, { children: "DllMain" }),
				" 里碰游戏对象。"
			] }),
			" 文档以 SA 为主；III / VC 的同名事件以 ",
			jsx(_components.code, { children: "Events.h" }),
			" 为准。"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "注册回调",
			children: "注册回调"
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "+=" }),
			" / ",
			jsx(_components.code, { children: "before" }),
			" / ",
			jsx(_components.code, { children: "after" }),
			" / ",
			jsx(_components.code, { children: "-=" }),
			" 的签名必须与事件一致。在 ",
			jsx(_components.strong, { children: "静态全局对象的构造函数" }),
			" 里 ",
			jsx(_components.code, { children: "+=" }),
			"；全局实例必须存在，否则构造不会执行。"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "event "
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
										children: " callback;"
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
										children: "event.before "
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
										children: " callback;"
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
										children: "event.after "
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
										children: " callback;"
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
										children: "event "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "-="
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " callback;"
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
									children: " \"plugin.h\""
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
										children: "class"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " MyPlugin"
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
							jsx(_components.span, {
								className: "line",
								children: jsx(_components.span, {
									style: {
										"--shiki-light": "#D73A49",
										"--shiki-dark": "#F97583"
									},
									children: "public:"
								})
							}),
							"\n",
							jsxs(_components.span, {
								className: "line",
								children: [jsx(_components.span, {
									style: {
										"--shiki-light": "#6F42C1",
										"--shiki-dark": "#B392F0"
									},
									children: "    MyPlugin"
								}), jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "() {"
								})]
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
										children: "        plugin"
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
										children: " OnProcessScripts;"
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
										children: "        plugin"
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
										children: "::drawingEvent "
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
										children: " OnDraw;"
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
										children: "        plugin"
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
										children: "::pedCtorEvent "
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
										children: " OnPedCtor;"
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
							jsx(_components.span, { className: "line" }),
							"\n",
							jsx(_components.span, {
								className: "line",
								children: jsx(_components.span, {
									style: {
										"--shiki-light": "#D73A49",
										"--shiki-dark": "#F97583"
									},
									children: "private:"
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
										children: "    static"
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
										children: " OnProcessScripts"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "() {}"
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
										children: " OnDraw"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "() {}"
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
										children: " OnPedCtor"
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
										children: "CPed"
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
										children: ") { ("
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
										children: ")ped; }"
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
							jsx(_components.span, {
								className: "line",
								children: jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "MyPlugin g_my_plugin;"
								})
							})
						] })
					}) })
				})
			]
		}),
		"\n",
		jsx(_components.h2, {
			id: "阶段速查",
			children: "阶段速查"
		}),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [
			jsx(_components.th, { children: "阶段" }),
			jsx(_components.th, { children: "适合" }),
			jsx(_components.th, { children: "避免" })
		] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "静态构造" }),
				jsxs(_components.td, { children: [jsx(_components.code, { children: "+=" }), "、读自己的 ini"] }),
				jsxs(_components.td, { children: [jsx(_components.code, { children: "FindPlayerPed" }), "、刷车"] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "initRwEvent" }) }),
				jsx(_components.td, { children: "贴图、Pattern、配置" }),
				jsx(_components.td, { children: "假定已有玩家" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "initPoolsEvent" }) }),
				jsx(_components.td, { children: "按池分配 Extender" }),
				jsx(_components.td, { children: "遍历尚不存在的实体" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "processScriptsEvent" }) }),
				jsx(_components.td, { children: "逻辑、Command、按键" }),
				jsx(_components.td, { children: "重 IO" })
			] }),
			jsxs(_components.tr, { children: [
				jsxs(_components.td, { children: [
					jsx(_components.code, { children: "drawing" }),
					" / ",
					jsx(_components.code, { children: "drawHud" })
				] }),
				jsx(_components.td, { children: "2D 绘制" }),
				jsx(_components.td, { children: "创建 / 删除实体" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "*RenderEvent" }) }),
				jsx(_components.td, { children: "矩阵、材质" }),
				jsx(_components.td, { children: "删除实体" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "*DtorEvent" }) }),
				jsx(_components.td, { children: "释放附属数据" }),
				jsx(_components.td, { children: "之后继续用指针" })
			] }),
			jsxs(_components.tr, { children: [
				jsxs(_components.td, { children: [
					jsx(_components.code, { children: "d3dLost" }),
					" / ",
					jsx(_components.code, { children: "Reset" })
				] }),
				jsx(_components.td, { children: "释放 / 重建 GPU 资源" }),
				jsx(_components.td, { children: "Lost 后继续 Draw" })
			] })
		] })] }),
		"\n",
		jsx(_components.h2, {
			id: "重开游戏",
			children: "重开游戏"
		}),
		"\n",
		jsxs(Api, {
			name: "restartGameEvent",
			header: "void()",
			children: [jsx(_components.p, { children: "新开一局时清理插件自身状态。" }), jsx(Fragment, { children: jsx(_components.pre, {
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
								children: "::restartGameEvent "
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
					jsx(_components.span, {
						className: "line",
						children: jsx(_components.span, {
							style: {
								"--shiki-light": "#6A737D",
								"--shiki-dark": "#6A737D"
							},
							children: "    // clear flags / caches"
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
			}) })]
		}),
		"\n",
		jsx(_components.h2, {
			id: "renderware-初始化与关闭",
			children: "RenderWare 初始化与关闭"
		}),
		"\n",
		jsxs(Api, {
			name: "initRwEvent / shutdownRwEvent",
			header: "void()",
			children: [jsx(_components.p, { children: "RW 就绪后加载贴图与资源；关闭前释放。" }), jsx(Fragment, { children: jsx(_components.pre, {
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
								children: "::initRwEvent "
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
					jsx(_components.span, {
						className: "line",
						children: jsx(_components.span, {
							style: {
								"--shiki-light": "#6A737D",
								"--shiki-dark": "#6A737D"
							},
							children: "    // load sprites / pattern / ini"
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
								children: "::shutdownRwEvent "
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
					jsx(_components.span, {
						className: "line",
						children: jsx(_components.span, {
							style: {
								"--shiki-light": "#6A737D",
								"--shiki-dark": "#6A737D"
							},
							children: "    // clear sprites"
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
			}) })]
		}),
		"\n",
		jsx(_components.h2, {
			id: "对象池",
			children: "对象池"
		}),
		"\n",
		jsxs(Api, {
			name: "initPoolsEvent / shutdownPoolsEvent",
			header: "void()",
			children: [jsx(_components.p, { children: "池建好后分配 Extender；池销毁时释放。" }), jsx(Fragment, { children: jsx(_components.pre, {
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
								children: "::initPoolsEvent "
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
								children: " [] {};"
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
								children: "::shutdownPoolsEvent "
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
								children: " [] {};"
							})
						]
					})
				] })
			}) })]
		}),
		"\n",
		jsx(_components.h2, {
			id: "进游戏与再初始化",
			children: "进游戏与再初始化"
		}),
		"\n",
		jsxs(Api, {
			name: "initGameEvent / reInitGameEvent",
			header: "void()",
			children: [jsx(_components.p, { children: "进入游戏，以及读档后的再初始化。" }), jsx(Fragment, { children: jsx(_components.pre, {
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
								children: "::initGameEvent "
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
								children: " [] {};"
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
								children: "::reInitGameEvent "
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
								children: " [] {};"
							})
						]
					})
				] })
			}) })]
		}),
		"\n",
		jsx(_components.h2, {
			id: "脚本系统就绪",
			children: "脚本系统就绪"
		}),
		"\n",
		jsxs(Api, {
			name: "initScriptsEvent",
			header: "void()",
			children: [jsx(_components.p, { children: "脚本系统起来之后。" }), jsx(Fragment, { children: jsx(_components.pre, {
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
							children: "::initScriptsEvent "
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
							children: " [] {};"
						})
					]
				}) })
			}) })]
		}),
		"\n",
		jsx(_components.h2, {
			id: "每帧逻辑",
			children: "每帧逻辑"
		}),
		"\n",
		jsxs(Api, {
			name: "processScriptsEvent",
			header: "void()",
			children: [jsx(_components.p, { children: "每帧逻辑的主入口：按键、Command、改实体状态。" }), jsx(Fragment, { children: jsx(_components.pre, {
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
							children: " \"common.h\""
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
									"--shiki-light": "#24292E",
									"--shiki-dark": "#E1E4E8"
								},
								children: "    CPed"
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
								children: "    ped->m_fHealth "
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
							children: "};"
						})
					})
				] })
			}) })]
		}),
		"\n",
		jsx(_components.h2, {
			id: "主循环钩子",
			children: "主循环钩子"
		}),
		"\n",
		jsxs(Api, {
			name: "gameProcessEvent",
			header: "void()",
			children: [jsxs(_components.p, { children: [
				"主循环上的另一钩子。改脚本 / 实体状态时优先 ",
				jsx(_components.code, { children: "processScriptsEvent" }),
				"。"
			] }), jsx(Fragment, { children: jsx(_components.pre, {
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
							children: "::gameProcessEvent "
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
							children: " [] {};"
						})
					]
				}) })
			}) })]
		}),
		"\n",
		jsx(_components.h2, {
			id: "2d-绘制",
			children: "2D 绘制"
		}),
		"\n",
		jsxs(Api, {
			name: "drawingEvent / drawHudEvent / drawAfterFadeEvent / drawFontsEvent",
			header: "void()",
			children: [jsx(_components.p, { children: "只做绘制，不要在这里创建或删除实体。" }), jsx(Fragment, { children: jsx(_components.pre, {
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
								children: "::drawingEvent "
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
					jsx(_components.span, {
						className: "line",
						children: jsx(_components.span, {
							style: {
								"--shiki-light": "#6A737D",
								"--shiki-dark": "#6A737D"
							},
							children: "    // gamefont / sprite"
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
								children: "::drawHudEvent "
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
								children: " [] {};"
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
								children: "::drawAfterFadeEvent "
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
								children: " [] {};"
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
								children: "::drawFontsEvent "
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
								children: " [] {};"
							})
						]
					})
				] })
			}) })]
		}),
		"\n",
		jsx(_components.h2, {
			id: "雷达绘制",
			children: "雷达绘制"
		}),
		"\n",
		jsx(Api, {
			name: "drawRadarEvent / drawBlipsEvent / drawRadarOverlayEvent",
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
								children: "::drawRadarEvent "
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
								children: " [] {};"
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
								children: "::drawBlipsEvent "
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
								children: " [] {};"
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
							children: "// SA: void(bool)"
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
								children: "::drawRadarOverlayEvent "
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
								children: " []("
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
								children: " flag"
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
						children: [
							jsx(_components.span, {
								style: {
									"--shiki-light": "#24292E",
									"--shiki-dark": "#E1E4E8"
								},
								children: "    ("
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
								children: ")flag;"
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
		"\n",
		jsx(_components.h2, {
			id: "暂停菜单绘制",
			children: "暂停菜单绘制"
		}),
		"\n",
		jsxs(Api, {
			name: "drawMenuBackgroundEvent / menuDrawingEvent",
			children: [jsx(_components.p, { children: "参数类型以当前游戏头文件为准。" }), jsx(Fragment, { children: jsx(_components.pre, {
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
								children: "::drawMenuBackgroundEvent "
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
								children: " []("
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#D73A49",
									"--shiki-dark": "#F97583"
								},
								children: "void*"
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#24292E",
									"--shiki-dark": "#E1E4E8"
								},
								children: ") {};"
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
								children: "::menuDrawingEvent "
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
								children: " []("
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#6F42C1",
									"--shiki-dark": "#B392F0"
								},
								children: "CMenuManager"
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
									"--shiki-light": "#E36209",
									"--shiki-dark": "#FFAB70"
								},
								children: " menu"
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
						children: [
							jsx(_components.span, {
								style: {
									"--shiki-light": "#24292E",
									"--shiki-dark": "#E1E4E8"
								},
								children: "    ("
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
								children: ")menu;"
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
			}) })]
		}),
		"\n",
		jsx(_components.h2, {
			id: "3d-场景与特效",
			children: "3D 场景与特效"
		}),
		"\n",
		jsxs(Api, {
			name: "renderSceneEvent / renderEffectsEvent",
			header: "void()",
			children: [jsx(_components.p, { children: "可以改矩阵、材质；不要在这里删除实体。" }), jsx(Fragment, { children: jsx(_components.pre, {
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
								children: "::renderSceneEvent "
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
								children: " [] {};"
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
								children: "::renderEffectsEvent "
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
								children: " [] {};"
							})
						]
					})
				] })
			}) })]
		}),
		"\n",
		jsx(_components.h2, {
			id: "镜子渲染sa",
			children: "镜子渲染（SA）"
		}),
		"\n",
		jsxs(Api, {
			name: "renderMirrorEvent",
			header: "void() · SA",
			children: [jsx(_components.p, { children: "需要画进镜面内容时使用；不要在这里改游戏逻辑状态。" }), jsx(Fragment, { children: jsx(_components.pre, {
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
								children: "::renderMirrorEvent "
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
					jsx(_components.span, {
						className: "line",
						children: jsx(_components.span, {
							style: {
								"--shiki-light": "#6A737D",
								"--shiki-dark": "#6A737D"
							},
							children: "    // mirror pass extras"
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
			}) })]
		}),
		"\n",
		jsx(_components.h2, {
			id: "行人构造与析构",
			children: "行人构造与析构"
		}),
		"\n",
		jsxs(Api, {
			name: "pedCtorEvent / pedDtorEvent",
			header: "void(CPed*)",
			children: [jsx(_components.p, { children: "构造后初始化附属数据；析构前释放。dtor 之后不要再使用该指针。" }), jsx(Fragment, { children: jsx(_components.pre, {
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
								children: "::pedCtorEvent "
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
								children: " []("
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#6F42C1",
									"--shiki-dark": "#B392F0"
								},
								children: "CPed"
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
								children: ") {"
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
								children: "::pedDtorEvent "
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
								children: " []("
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#6F42C1",
									"--shiki-dark": "#B392F0"
								},
								children: "CPed"
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
								children: ") {"
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
								children: "    ("
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
								children: ")ped;"
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
			}) })]
		}),
		"\n",
		jsx(_components.h2, {
			id: "载具构造与析构",
			children: "载具构造与析构"
		}),
		"\n",
		jsx(Api, {
			name: "vehicleCtorEvent / vehicleDtorEvent",
			header: "void(CVehicle*)",
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
								children: "::vehicleCtorEvent "
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
								children: " []("
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#6F42C1",
									"--shiki-dark": "#B392F0"
								},
								children: "CVehicle"
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
									"--shiki-light": "#E36209",
									"--shiki-dark": "#FFAB70"
								},
								children: " veh"
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
						children: [
							jsx(_components.span, {
								style: {
									"--shiki-light": "#24292E",
									"--shiki-dark": "#E1E4E8"
								},
								children: "    ("
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
								children: ")veh;"
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
								children: "::vehicleDtorEvent "
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
								children: " []("
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#6F42C1",
									"--shiki-dark": "#B392F0"
								},
								children: "CVehicle"
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
									"--shiki-light": "#E36209",
									"--shiki-dark": "#FFAB70"
								},
								children: " veh"
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
						children: [
							jsx(_components.span, {
								style: {
									"--shiki-light": "#24292E",
									"--shiki-dark": "#E1E4E8"
								},
								children: "    ("
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
								children: ")veh;"
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
		"\n",
		jsx(_components.h2, {
			id: "物体构造与析构",
			children: "物体构造与析构"
		}),
		"\n",
		jsx(Api, {
			name: "objectCtorEvent / objectDtorEvent",
			header: "void(CObject*)",
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
								children: "::objectCtorEvent "
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
								children: " []("
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#6F42C1",
									"--shiki-dark": "#B392F0"
								},
								children: "CObject"
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
									"--shiki-light": "#E36209",
									"--shiki-dark": "#FFAB70"
								},
								children: " obj"
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
						children: [
							jsx(_components.span, {
								style: {
									"--shiki-light": "#24292E",
									"--shiki-dark": "#E1E4E8"
								},
								children: "    ("
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
								children: ")obj;"
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
								children: "::objectDtorEvent "
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
								children: " []("
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#6F42C1",
									"--shiki-dark": "#B392F0"
								},
								children: "CObject"
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
									"--shiki-light": "#E36209",
									"--shiki-dark": "#FFAB70"
								},
								children: " obj"
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
						children: [
							jsx(_components.span, {
								style: {
									"--shiki-light": "#24292E",
									"--shiki-dark": "#E1E4E8"
								},
								children: "    ("
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
								children: ")obj;"
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
		"\n",
		jsx(_components.h2, {
			id: "实体渲染前",
			children: "实体渲染前"
		}),
		"\n",
		jsxs(Api, {
			name: "pedRenderEvent / vehicleRenderEvent / objectRenderEvent",
			children: [jsx(_components.p, { children: "适合改骨骼矩阵；不要删除实体。" }), jsx(Fragment, { children: jsx(_components.pre, {
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
								children: "::pedRenderEvent "
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
								children: " []("
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#6F42C1",
									"--shiki-dark": "#B392F0"
								},
								children: "CPed"
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
								children: ") {"
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
								children: "ped "
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#D73A49",
									"--shiki-dark": "#F97583"
								},
								children: "||"
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#D73A49",
									"--shiki-dark": "#F97583"
								},
								children: " !"
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#24292E",
									"--shiki-dark": "#E1E4E8"
								},
								children: "ped->m_pRwClump) {"
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
								children: "::vehicleRenderEvent "
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
								children: " []("
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#6F42C1",
									"--shiki-dark": "#B392F0"
								},
								children: "CVehicle"
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
								children: ") {};"
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
								children: "::objectRenderEvent "
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
								children: " []("
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#6F42C1",
									"--shiki-dark": "#B392F0"
								},
								children: "CObject"
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
								children: ") {};"
							})
						]
					})
				] })
			}) })]
		}),
		"\n",
		jsx(_components.h2, {
			id: "换模型后",
			children: "换模型后"
		}),
		"\n",
		jsx(Api, {
			name: "pedSetModelEvent / vehicleSetModelEvent",
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
					jsx(_components.span, {
						className: "line",
						children: jsx(_components.span, {
							style: {
								"--shiki-light": "#6A737D",
								"--shiki-dark": "#6A737D"
							},
							children: "// void(CPed*, int) / void(CVehicle*, int)"
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
								children: "::pedSetModelEvent "
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
								children: " []("
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#6F42C1",
									"--shiki-dark": "#B392F0"
								},
								children: "CPed"
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
								children: ", "
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#D73A49",
									"--shiki-dark": "#F97583"
								},
								children: "int"
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#E36209",
									"--shiki-dark": "#FFAB70"
								},
								children: " model"
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
						children: [
							jsx(_components.span, {
								style: {
									"--shiki-light": "#24292E",
									"--shiki-dark": "#E1E4E8"
								},
								children: "    ("
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
								children: ")ped;"
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
								children: "    ("
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
								children: ")model;"
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
								children: "::vehicleSetModelEvent "
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
								children: " []("
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#6F42C1",
									"--shiki-dark": "#B392F0"
								},
								children: "CVehicle"
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
								children: ", "
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#D73A49",
									"--shiki-dark": "#F97583"
								},
								children: "int"
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#24292E",
									"--shiki-dark": "#E1E4E8"
								},
								children: ") {};"
							})
						]
					})
				] })
			}) })
		}),
		"\n",
		jsx(_components.h2, {
			id: "d3d-设备丢失与重置",
			children: "D3D 设备丢失与重置"
		}),
		"\n",
		jsxs(Api, {
			name: "d3dLostEvent / d3dResetEvent",
			header: "void()",
			children: [jsx(_components.p, { children: "设备丢失时释放 GPU 资源，重置后重建。" }), jsx(Fragment, { children: jsx(_components.pre, {
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
								children: "::d3dLostEvent "
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
								children: " [] {};"
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
								children: "::d3dResetEvent "
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
								children: " [] {};"
							})
						]
					})
				] })
			}) })]
		}),
		"\n",
		jsx(_components.h2, {
			id: "全局静音与恢复",
			children: "全局静音与恢复"
		}),
		"\n",
		jsxs(Api, {
			name: "onPauseAllSounds / onResumeAllSounds",
			children: [jsx(_components.p, { children: "签名以头文件为准。" }), jsx(Fragment, { children: jsx(_components.pre, {
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
								children: "::onPauseAllSounds "
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
								children: " []("
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#D73A49",
									"--shiki-dark": "#F97583"
								},
								children: "void*"
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#E36209",
									"--shiki-dark": "#FFAB70"
								},
								children: " p"
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
						children: [
							jsx(_components.span, {
								style: {
									"--shiki-light": "#24292E",
									"--shiki-dark": "#E1E4E8"
								},
								children: "    ("
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
								children: ")p;"
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
								children: "::onResumeAllSounds "
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
								children: " []("
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#D73A49",
									"--shiki-dark": "#F97583"
								},
								children: "void*"
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#24292E",
									"--shiki-dark": "#E1E4E8"
								},
								children: ") {};"
							})
						]
					})
				] })
			}) })]
		}),
		"\n",
		jsx(_components.h2, {
			id: "挂-renderware-插件",
			children: "挂 RenderWare 插件"
		}),
		"\n",
		jsx(Api, {
			name: "attachRwPluginsEvent",
			header: "bool()",
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
								children: "::attachRwPluginsEvent "
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
								children: "    return"
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
		"\n",
		jsx(_components.h2, {
			id: "组合示例",
			children: "组合示例"
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
						children: " \"plugin.h\""
					})]
				}),
				"\n",
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
						children: " \"common.h\""
					})]
				}),
				"\n",
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
							children: " Plugin"
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
				jsx(_components.span, {
					className: "line",
					children: jsx(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "public:"
					})
				}),
				"\n",
				jsxs(_components.span, {
					className: "line",
					children: [jsx(_components.span, {
						style: {
							"--shiki-light": "#6F42C1",
							"--shiki-dark": "#B392F0"
						},
						children: "    Plugin"
					}), jsx(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "() {"
					})]
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
							children: "        plugin"
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
							children: "            KeyCheck"
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
							children: "            if"
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
					children: [jsx(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "                return"
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
						children: "            }"
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
							children: "            CPed"
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
							children: "            if"
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
						children: "                return"
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
						children: "            }"
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
							children: "            ped->m_fHealth "
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
						children: "        };"
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
						children: "} g_plugin;"
					})
				})
			] })
		}) })
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
