import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/xbase/index.mdx?collection=docs
var frontmatter = {
	"title": "综述",
	"description": "XBase 是 GTA SA / VC / III 的轻量基础库。大道至简。"
};
var _markdown = "\n\nXBase 是一个按游戏版本隔离的 **静态库**，为 GTA SA、GTA Vice City 和 GTA III 分别生成 `XBaseSA.lib`、`XBaseVC.lib`、`XBaseIII.lib`。公共 API 形状一致，但每个库只允许使用对应游戏的 plugin-sdk ABI。\n\n当前版本后端状态：\n\n| 库              | 游戏              | 状态                                                                                                                             |\n| -------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------ |\n| `XBaseSA.lib`  | GTA San Andreas | 全部 13 个领域已有真实实现；部分特性按能力表报告 Partial                                                                                             |\n| `XBaseVC.lib`  | GTA Vice City   | Player / Ped / Vehicle / Weapon / World / Visual / Teleport / BulletAssist 已有实现；Scene、Camera、Cheats、VehicleEffects、Overlay 未支持 |\n| `XBaseIII.lib` | GTA III         | Player / Ped / Vehicle / Weapon / World / Visual / Teleport 已有实现；BulletAssist、Scene、Camera、Cheats、VehicleEffects、Overlay 未支持   |\n\n公共符号可链接不等于功能已实现。页面必须使用 `FeatureCapability` 判断细粒度支持；能力返回 `Unsupported` 时，宿主必须禁用对应入口，不能因 XBase 提供兼容桩而启用。\n\nVC/III 库不会复用 SA 地址或 SA 类布局。尚未实现的域通过 `XBase::HasCapability()` 返回 `false`，而不是伪造成功。\n\n<Callout type=\"info\" title=\"设计哲学\">\n  一行 `#include <XBase/XBase.h>`，通过 `XBase::` 命名空间直接调用全部功能。\n</Callout>\n\n## 控制器一览 [#控制器一览]\n\n### 基础设施 [#基础设施]\n\n| 控制器          | 命名空间              | 职责                           |\n| ------------ | ----------------- | ---------------------------- |\n| **Log**      | `XBase::Log`      | 线程安全日志，文件输出+内存环缓存            |\n| **Json**     | `XBase::Json`     | 递归下降 JSON 解析/序列化             |\n| **Config**   | `XBase::Config`   | JSON 持久化配置，点号嵌套键             |\n| **I18n**     | `XBase::I18n`     | 多语言翻译，目录扫描+fallback 链        |\n| **Hooks**    | `XBase::Hooks`    | kiero D3D9 钩子 + ImGui 集成     |\n| **Hotkey**   | `XBase::Hotkey`   | 按键绑定、Toggle/Hold/Once 模式与持久化 |\n| **Platform** | `XBase::Platform` | 文件、模块目录、剪贴板、外部打开、时钟          |\n| **Runtime**  | `XBase::Runtime`  | 当前游戏目标检测与运行环境校验              |\n| **Host**     | `XBase::Host`     | 宿主事件安装、消息提示与版本运行时保护          |\n\n### 控制器 [#控制器]\n\n| 控制器                | 命名空间                    | 职责                              |\n| ------------------ | ----------------------- | ------------------------------- |\n| **Core**           | `XBase::Core`           | 初始化、领域所有权、世界就绪检测、全局 Process 分发  |\n| **Player**         | `XBase::Player`         | 血量/护甲/金钱/通缉/皮肤/技能/无敌/隐身/硬核/自由飞行 |\n| **Ped**            | `XBase::Ped`            | Ped 生成、Elvis/武装/暴动等作弊、帮派控制      |\n| **Vehicle**        | `XBase::Vehicle`        | 修复/生成/引擎/灯光/锁定/防护/车门/速度锁定/巡航    |\n| **World**          | `XBase::World`          | 天气/时间/游戏速度/重力/Pickup/物理控制       |\n| **Weapon**         | `XBase::Weapon`         | 给予/清空/丢弃/无限弹药/快速装填/技能           |\n| **Teleport**       | `XBase::Teleport`       | 坐标/标记点/地图传送                     |\n| **Scene**          | `XBase::Scene`          | 动画/粒子/过场动画/任务控制/战斗行走风格          |\n| **Visual**         | `XBase::Visual`         | HUD/雷达显示控制、后处理滤镜                |\n| **BulletAssist**   | `XBase::BulletAssist`   | 子弹追踪、坐标透视、强锁与开火抑制               |\n| **Overlay**        | `XBase::Overlay`        | 屏幕信息覆盖层（FPS/坐标/面板）              |\n| **Camera**         | `XBase::Camera`         | 自由视角与俯视相机                       |\n| **Cheats**         | `XBase::Cheats`         | 飞车/氮气/完美操控/绿灯/暴动/随机作弊           |\n| **VehicleEffects** | `XBase::VehicleEffects` | 载具霓虹等渲染期特效                      |\n\n### UI 层 [#ui-层]\n\n| 模块          | 命名空间             | 职责                              |\n| ----------- | ---------------- | ------------------------------- |\n| **Theme**   | `XBase::Theme`   | 主题配色、样式预设、字体管理                  |\n| **UI**      | `XBase::UI`      | 窗口管理、Tab 系统、MenuSurface 与基础组件封装 |\n| **WebView** | `XBase::WebView` | 通过系统 WebView2 在游戏窗口内渲染网页        |\n\n### 其他 [#其他]\n\n| 控制器         | 命名空间           | 职责                                   |\n| ----------- | -------------- | ------------------------------------ |\n| **Version** | `XBase`        | 游戏版本检测                               |\n| **Types**   | `XBase::Types` | 共享数据结构（ProofState/PedSpawnOptions 等） |\n\n## 版本能力查询 [#版本能力查询]\n\n```cpp\n#include <XBase/XBase.h>\n\nif (XBase::HasCapability(XBase::FeatureCapability::VehicleBasic)) {\n    XBase::Vehicle::Repair();\n}\n```\n\n能力查询属于当前静态库的编译目标，不是运行时猜测。宿主必须链接与游戏目标对应的库；禁止将 `XBaseSA.lib` 链接到 VC 或 III。\n\n## 宿主生命周期 [#宿主生命周期]\n\nXBase 作为 XMenu 等宿主的静态库时，由宿主负责驱动生命周期：\n\n```cpp\n#include <XBase/XBase.h>\n\nvoid OnGameInit() {\n    XBase::Core::NotifyGameInit();\n}\n\nvoid OnProcess() {\n    XBase::Core::Process();\n}\n\n// 安装宿主回调；同时启用当前版本的运行时保护\nXBase::Host::Install({OnGameInit, OnProcess});\n\n// 显式移交领域；掩码会过滤当前库不支持的领域\nXBase::Core::Init(XBase::Core::AllDomains);\n\n// 卸载前恢复状态并清理领域\nXBase::Core::Shutdown();\nXBase::Host::Shutdown();\n```\n\n`Host::Install()` 会同时安装版本相关的运行时保护：VC 增加剧情资源目录纠正与空文件句柄保护，SA/VC 增加剧情期间的对象访问安全门（由 `BulletAssist` 消费）。\n\n## 用法 [#用法]\n\n```cpp\n#include <XBase/XBase.h>\n\nXBase::Player::Heal();\nXBase::Player::GiveMoney(100000);\nXBase::Vehicle::Spawn(411);       // Infernus\nXBase::Vehicle::Repair();\nXBase::World::SetWeather(0, true); // 锁定晴天\nXBase::Weapon::GiveAll();\n```\n\n## 构建 [#构建]\n\n* C++20 / Win32 (x86) / MBCS / static runtime\n* Premake5 生成 VS2022 解决方案\n* `XBaseSA.lib` 使用 `plugin_sa`\n* `XBaseVC.lib` 使用 `plugin_vc`，当前未实现域通过能力查询拒绝调用\n* `XBaseIII.lib` 使用 `plugin_III`，当前未实现域通过能力查询拒绝调用\n* `Setup.bat` 生成项目文件，`Build.bat` 编译三个目标\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "XBase 是一个按游戏版本隔离的 **静态库**，为 GTA SA、GTA Vice City 和 GTA III 分别生成 `XBaseSA.lib`、`XBaseVC.lib`、`XBaseIII.lib`。公共 API 形状一致，但每个库只允许使用对应游戏的 plugin-sdk ABI。"
		},
		{
			"heading": void 0,
			"content": "当前版本后端状态："
		},
		{
			"heading": void 0,
			"content": "库"
		},
		{
			"heading": void 0,
			"content": "游戏"
		},
		{
			"heading": void 0,
			"content": "状态"
		},
		{
			"heading": void 0,
			"content": "`XBaseSA.lib`"
		},
		{
			"heading": void 0,
			"content": "GTA San Andreas"
		},
		{
			"heading": void 0,
			"content": "全部 13 个领域已有真实实现；部分特性按能力表报告 Partial"
		},
		{
			"heading": void 0,
			"content": "`XBaseVC.lib`"
		},
		{
			"heading": void 0,
			"content": "GTA Vice City"
		},
		{
			"heading": void 0,
			"content": "Player / Ped / Vehicle / Weapon / World / Visual / Teleport / BulletAssist 已有实现；Scene、Camera、Cheats、VehicleEffects、Overlay 未支持"
		},
		{
			"heading": void 0,
			"content": "`XBaseIII.lib`"
		},
		{
			"heading": void 0,
			"content": "GTA III"
		},
		{
			"heading": void 0,
			"content": "Player / Ped / Vehicle / Weapon / World / Visual / Teleport 已有实现；BulletAssist、Scene、Camera、Cheats、VehicleEffects、Overlay 未支持"
		},
		{
			"heading": void 0,
			"content": "公共符号可链接不等于功能已实现。页面必须使用 `FeatureCapability` 判断细粒度支持；能力返回 `Unsupported` 时，宿主必须禁用对应入口，不能因 XBase 提供兼容桩而启用。"
		},
		{
			"heading": void 0,
			"content": "VC/III 库不会复用 SA 地址或 SA 类布局。尚未实现的域通过 `XBase::HasCapability()` 返回 `false`，而不是伪造成功。"
		},
		{
			"heading": void 0,
			"content": "一行 `#include <XBase/XBase.h>`，通过 `XBase::` 命名空间直接调用全部功能。"
		},
		{
			"heading": "基础设施",
			"content": "控制器"
		},
		{
			"heading": "基础设施",
			"content": "命名空间"
		},
		{
			"heading": "基础设施",
			"content": "职责"
		},
		{
			"heading": "基础设施",
			"content": "**Log**"
		},
		{
			"heading": "基础设施",
			"content": "`XBase::Log`"
		},
		{
			"heading": "基础设施",
			"content": "线程安全日志，文件输出+内存环缓存"
		},
		{
			"heading": "基础设施",
			"content": "**Json**"
		},
		{
			"heading": "基础设施",
			"content": "`XBase::Json`"
		},
		{
			"heading": "基础设施",
			"content": "递归下降 JSON 解析/序列化"
		},
		{
			"heading": "基础设施",
			"content": "**Config**"
		},
		{
			"heading": "基础设施",
			"content": "`XBase::Config`"
		},
		{
			"heading": "基础设施",
			"content": "JSON 持久化配置，点号嵌套键"
		},
		{
			"heading": "基础设施",
			"content": "**I18n**"
		},
		{
			"heading": "基础设施",
			"content": "`XBase::I18n`"
		},
		{
			"heading": "基础设施",
			"content": "多语言翻译，目录扫描+fallback 链"
		},
		{
			"heading": "基础设施",
			"content": "**Hooks**"
		},
		{
			"heading": "基础设施",
			"content": "`XBase::Hooks`"
		},
		{
			"heading": "基础设施",
			"content": "kiero D3D9 钩子 + ImGui 集成"
		},
		{
			"heading": "基础设施",
			"content": "**Hotkey**"
		},
		{
			"heading": "基础设施",
			"content": "`XBase::Hotkey`"
		},
		{
			"heading": "基础设施",
			"content": "按键绑定、Toggle/Hold/Once 模式与持久化"
		},
		{
			"heading": "基础设施",
			"content": "**Platform**"
		},
		{
			"heading": "基础设施",
			"content": "`XBase::Platform`"
		},
		{
			"heading": "基础设施",
			"content": "文件、模块目录、剪贴板、外部打开、时钟"
		},
		{
			"heading": "基础设施",
			"content": "**Runtime**"
		},
		{
			"heading": "基础设施",
			"content": "`XBase::Runtime`"
		},
		{
			"heading": "基础设施",
			"content": "当前游戏目标检测与运行环境校验"
		},
		{
			"heading": "基础设施",
			"content": "**Host**"
		},
		{
			"heading": "基础设施",
			"content": "`XBase::Host`"
		},
		{
			"heading": "基础设施",
			"content": "宿主事件安装、消息提示与版本运行时保护"
		},
		{
			"heading": "控制器",
			"content": "控制器"
		},
		{
			"heading": "控制器",
			"content": "命名空间"
		},
		{
			"heading": "控制器",
			"content": "职责"
		},
		{
			"heading": "控制器",
			"content": "**Core**"
		},
		{
			"heading": "控制器",
			"content": "`XBase::Core`"
		},
		{
			"heading": "控制器",
			"content": "初始化、领域所有权、世界就绪检测、全局 Process 分发"
		},
		{
			"heading": "控制器",
			"content": "**Player**"
		},
		{
			"heading": "控制器",
			"content": "`XBase::Player`"
		},
		{
			"heading": "控制器",
			"content": "血量/护甲/金钱/通缉/皮肤/技能/无敌/隐身/硬核/自由飞行"
		},
		{
			"heading": "控制器",
			"content": "**Ped**"
		},
		{
			"heading": "控制器",
			"content": "`XBase::Ped`"
		},
		{
			"heading": "控制器",
			"content": "Ped 生成、Elvis/武装/暴动等作弊、帮派控制"
		},
		{
			"heading": "控制器",
			"content": "**Vehicle**"
		},
		{
			"heading": "控制器",
			"content": "`XBase::Vehicle`"
		},
		{
			"heading": "控制器",
			"content": "修复/生成/引擎/灯光/锁定/防护/车门/速度锁定/巡航"
		},
		{
			"heading": "控制器",
			"content": "**World**"
		},
		{
			"heading": "控制器",
			"content": "`XBase::World`"
		},
		{
			"heading": "控制器",
			"content": "天气/时间/游戏速度/重力/Pickup/物理控制"
		},
		{
			"heading": "控制器",
			"content": "**Weapon**"
		},
		{
			"heading": "控制器",
			"content": "`XBase::Weapon`"
		},
		{
			"heading": "控制器",
			"content": "给予/清空/丢弃/无限弹药/快速装填/技能"
		},
		{
			"heading": "控制器",
			"content": "**Teleport**"
		},
		{
			"heading": "控制器",
			"content": "`XBase::Teleport`"
		},
		{
			"heading": "控制器",
			"content": "坐标/标记点/地图传送"
		},
		{
			"heading": "控制器",
			"content": "**Scene**"
		},
		{
			"heading": "控制器",
			"content": "`XBase::Scene`"
		},
		{
			"heading": "控制器",
			"content": "动画/粒子/过场动画/任务控制/战斗行走风格"
		},
		{
			"heading": "控制器",
			"content": "**Visual**"
		},
		{
			"heading": "控制器",
			"content": "`XBase::Visual`"
		},
		{
			"heading": "控制器",
			"content": "HUD/雷达显示控制、后处理滤镜"
		},
		{
			"heading": "控制器",
			"content": "**BulletAssist**"
		},
		{
			"heading": "控制器",
			"content": "`XBase::BulletAssist`"
		},
		{
			"heading": "控制器",
			"content": "子弹追踪、坐标透视、强锁与开火抑制"
		},
		{
			"heading": "控制器",
			"content": "**Overlay**"
		},
		{
			"heading": "控制器",
			"content": "`XBase::Overlay`"
		},
		{
			"heading": "控制器",
			"content": "屏幕信息覆盖层（FPS/坐标/面板）"
		},
		{
			"heading": "控制器",
			"content": "**Camera**"
		},
		{
			"heading": "控制器",
			"content": "`XBase::Camera`"
		},
		{
			"heading": "控制器",
			"content": "自由视角与俯视相机"
		},
		{
			"heading": "控制器",
			"content": "**Cheats**"
		},
		{
			"heading": "控制器",
			"content": "`XBase::Cheats`"
		},
		{
			"heading": "控制器",
			"content": "飞车/氮气/完美操控/绿灯/暴动/随机作弊"
		},
		{
			"heading": "控制器",
			"content": "**VehicleEffects**"
		},
		{
			"heading": "控制器",
			"content": "`XBase::VehicleEffects`"
		},
		{
			"heading": "控制器",
			"content": "载具霓虹等渲染期特效"
		},
		{
			"heading": "ui-层",
			"content": "模块"
		},
		{
			"heading": "ui-层",
			"content": "命名空间"
		},
		{
			"heading": "ui-层",
			"content": "职责"
		},
		{
			"heading": "ui-层",
			"content": "**Theme**"
		},
		{
			"heading": "ui-层",
			"content": "`XBase::Theme`"
		},
		{
			"heading": "ui-层",
			"content": "主题配色、样式预设、字体管理"
		},
		{
			"heading": "ui-层",
			"content": "**UI**"
		},
		{
			"heading": "ui-层",
			"content": "`XBase::UI`"
		},
		{
			"heading": "ui-层",
			"content": "窗口管理、Tab 系统、MenuSurface 与基础组件封装"
		},
		{
			"heading": "ui-层",
			"content": "**WebView**"
		},
		{
			"heading": "ui-层",
			"content": "`XBase::WebView`"
		},
		{
			"heading": "ui-层",
			"content": "通过系统 WebView2 在游戏窗口内渲染网页"
		},
		{
			"heading": "其他",
			"content": "控制器"
		},
		{
			"heading": "其他",
			"content": "命名空间"
		},
		{
			"heading": "其他",
			"content": "职责"
		},
		{
			"heading": "其他",
			"content": "**Version**"
		},
		{
			"heading": "其他",
			"content": "`XBase`"
		},
		{
			"heading": "其他",
			"content": "游戏版本检测"
		},
		{
			"heading": "其他",
			"content": "**Types**"
		},
		{
			"heading": "其他",
			"content": "`XBase::Types`"
		},
		{
			"heading": "其他",
			"content": "共享数据结构（ProofState/PedSpawnOptions 等）"
		},
		{
			"heading": "版本能力查询",
			"content": "能力查询属于当前静态库的编译目标，不是运行时猜测。宿主必须链接与游戏目标对应的库；禁止将 `XBaseSA.lib` 链接到 VC 或 III。"
		},
		{
			"heading": "宿主生命周期",
			"content": "XBase 作为 XMenu 等宿主的静态库时，由宿主负责驱动生命周期："
		},
		{
			"heading": "宿主生命周期",
			"content": "`Host::Install()` 会同时安装版本相关的运行时保护：VC 增加剧情资源目录纠正与空文件句柄保护，SA/VC 增加剧情期间的对象访问安全门（由 `BulletAssist` 消费）。"
		},
		{
			"heading": "构建",
			"content": "C++20 / Win32 (x86) / MBCS / static runtime"
		},
		{
			"heading": "构建",
			"content": "Premake5 生成 VS2022 解决方案"
		},
		{
			"heading": "构建",
			"content": "`XBaseSA.lib` 使用 `plugin_sa`"
		},
		{
			"heading": "构建",
			"content": "`XBaseVC.lib` 使用 `plugin_vc`，当前未实现域通过能力查询拒绝调用"
		},
		{
			"heading": "构建",
			"content": "`XBaseIII.lib` 使用 `plugin_III`，当前未实现域通过能力查询拒绝调用"
		},
		{
			"heading": "构建",
			"content": "`Setup.bat` 生成项目文件，`Build.bat` 编译三个目标"
		}
	],
	"headings": [
		{
			"id": "控制器一览",
			"content": "控制器一览"
		},
		{
			"id": "基础设施",
			"content": "基础设施"
		},
		{
			"id": "控制器",
			"content": "控制器"
		},
		{
			"id": "ui-层",
			"content": "UI 层"
		},
		{
			"id": "其他",
			"content": "其他"
		},
		{
			"id": "版本能力查询",
			"content": "版本能力查询"
		},
		{
			"id": "宿主生命周期",
			"content": "宿主生命周期"
		},
		{
			"id": "用法",
			"content": "用法"
		},
		{
			"id": "构建",
			"content": "构建"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#控制器一览",
		title: jsx(Fragment, { children: "控制器一览" })
	},
	{
		depth: 3,
		url: "#基础设施",
		title: jsx(Fragment, { children: "基础设施" })
	},
	{
		depth: 3,
		url: "#控制器",
		title: jsx(Fragment, { children: "控制器" })
	},
	{
		depth: 3,
		url: "#ui-层",
		title: jsx(Fragment, { children: "UI 层" })
	},
	{
		depth: 3,
		url: "#其他",
		title: jsx(Fragment, { children: "其他" })
	},
	{
		depth: 2,
		url: "#版本能力查询",
		title: jsx(Fragment, { children: "版本能力查询" })
	},
	{
		depth: 2,
		url: "#宿主生命周期",
		title: jsx(Fragment, { children: "宿主生命周期" })
	},
	{
		depth: 2,
		url: "#用法",
		title: jsx(Fragment, { children: "用法" })
	},
	{
		depth: 2,
		url: "#构建",
		title: jsx(Fragment, { children: "构建" })
	}
];
function _createMdxContent(props) {
	const _components = {
		code: "code",
		h2: "h2",
		h3: "h3",
		li: "li",
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
		ul: "ul",
		...props.components
	}, { Callout } = _components;
	if (!Callout) _missingMdxReference("Callout", true);
	return jsxs(Fragment, { children: [
		jsxs(_components.p, { children: [
			"XBase 是一个按游戏版本隔离的 ",
			jsx(_components.strong, { children: "静态库" }),
			"，为 GTA SA、GTA Vice City 和 GTA III 分别生成 ",
			jsx(_components.code, { children: "XBaseSA.lib" }),
			"、",
			jsx(_components.code, { children: "XBaseVC.lib" }),
			"、",
			jsx(_components.code, { children: "XBaseIII.lib" }),
			"。公共 API 形状一致，但每个库只允许使用对应游戏的 plugin-sdk ABI。"
		] }),
		"\n",
		jsx(_components.p, { children: "当前版本后端状态：" }),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [
			jsx(_components.th, { children: "库" }),
			jsx(_components.th, { children: "游戏" }),
			jsx(_components.th, { children: "状态" })
		] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "XBaseSA.lib" }) }),
				jsx(_components.td, { children: "GTA San Andreas" }),
				jsx(_components.td, { children: "全部 13 个领域已有真实实现；部分特性按能力表报告 Partial" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "XBaseVC.lib" }) }),
				jsx(_components.td, { children: "GTA Vice City" }),
				jsx(_components.td, { children: "Player / Ped / Vehicle / Weapon / World / Visual / Teleport / BulletAssist 已有实现；Scene、Camera、Cheats、VehicleEffects、Overlay 未支持" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "XBaseIII.lib" }) }),
				jsx(_components.td, { children: "GTA III" }),
				jsx(_components.td, { children: "Player / Ped / Vehicle / Weapon / World / Visual / Teleport 已有实现；BulletAssist、Scene、Camera、Cheats、VehicleEffects、Overlay 未支持" })
			] })
		] })] }),
		"\n",
		jsxs(_components.p, { children: [
			"公共符号可链接不等于功能已实现。页面必须使用 ",
			jsx(_components.code, { children: "FeatureCapability" }),
			" 判断细粒度支持；能力返回 ",
			jsx(_components.code, { children: "Unsupported" }),
			" 时，宿主必须禁用对应入口，不能因 XBase 提供兼容桩而启用。"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"VC/III 库不会复用 SA 地址或 SA 类布局。尚未实现的域通过 ",
			jsx(_components.code, { children: "XBase::HasCapability()" }),
			" 返回 ",
			jsx(_components.code, { children: "false" }),
			"，而不是伪造成功。"
		] }),
		"\n",
		jsx(Callout, {
			type: "info",
			title: "设计哲学",
			children: jsxs(_components.p, { children: [
				"一行 ",
				jsx(_components.code, { children: "#include <XBase/XBase.h>" }),
				"，通过 ",
				jsx(_components.code, { children: "XBase::" }),
				" 命名空间直接调用全部功能。"
			] })
		}),
		"\n",
		jsx(_components.h2, {
			id: "控制器一览",
			children: "控制器一览"
		}),
		"\n",
		jsx(_components.h3, {
			id: "基础设施",
			children: "基础设施"
		}),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [
			jsx(_components.th, { children: "控制器" }),
			jsx(_components.th, { children: "命名空间" }),
			jsx(_components.th, { children: "职责" })
		] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.strong, { children: "Log" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "XBase::Log" }) }),
				jsx(_components.td, { children: "线程安全日志，文件输出+内存环缓存" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.strong, { children: "Json" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "XBase::Json" }) }),
				jsx(_components.td, { children: "递归下降 JSON 解析/序列化" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.strong, { children: "Config" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "XBase::Config" }) }),
				jsx(_components.td, { children: "JSON 持久化配置，点号嵌套键" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.strong, { children: "I18n" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "XBase::I18n" }) }),
				jsx(_components.td, { children: "多语言翻译，目录扫描+fallback 链" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.strong, { children: "Hooks" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "XBase::Hooks" }) }),
				jsx(_components.td, { children: "kiero D3D9 钩子 + ImGui 集成" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.strong, { children: "Hotkey" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "XBase::Hotkey" }) }),
				jsx(_components.td, { children: "按键绑定、Toggle/Hold/Once 模式与持久化" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.strong, { children: "Platform" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "XBase::Platform" }) }),
				jsx(_components.td, { children: "文件、模块目录、剪贴板、外部打开、时钟" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.strong, { children: "Runtime" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "XBase::Runtime" }) }),
				jsx(_components.td, { children: "当前游戏目标检测与运行环境校验" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.strong, { children: "Host" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "XBase::Host" }) }),
				jsx(_components.td, { children: "宿主事件安装、消息提示与版本运行时保护" })
			] })
		] })] }),
		"\n",
		jsx(_components.h3, {
			id: "控制器",
			children: "控制器"
		}),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [
			jsx(_components.th, { children: "控制器" }),
			jsx(_components.th, { children: "命名空间" }),
			jsx(_components.th, { children: "职责" })
		] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.strong, { children: "Core" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "XBase::Core" }) }),
				jsx(_components.td, { children: "初始化、领域所有权、世界就绪检测、全局 Process 分发" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.strong, { children: "Player" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "XBase::Player" }) }),
				jsx(_components.td, { children: "血量/护甲/金钱/通缉/皮肤/技能/无敌/隐身/硬核/自由飞行" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.strong, { children: "Ped" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "XBase::Ped" }) }),
				jsx(_components.td, { children: "Ped 生成、Elvis/武装/暴动等作弊、帮派控制" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.strong, { children: "Vehicle" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "XBase::Vehicle" }) }),
				jsx(_components.td, { children: "修复/生成/引擎/灯光/锁定/防护/车门/速度锁定/巡航" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.strong, { children: "World" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "XBase::World" }) }),
				jsx(_components.td, { children: "天气/时间/游戏速度/重力/Pickup/物理控制" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.strong, { children: "Weapon" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "XBase::Weapon" }) }),
				jsx(_components.td, { children: "给予/清空/丢弃/无限弹药/快速装填/技能" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.strong, { children: "Teleport" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "XBase::Teleport" }) }),
				jsx(_components.td, { children: "坐标/标记点/地图传送" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.strong, { children: "Scene" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "XBase::Scene" }) }),
				jsx(_components.td, { children: "动画/粒子/过场动画/任务控制/战斗行走风格" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.strong, { children: "Visual" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "XBase::Visual" }) }),
				jsx(_components.td, { children: "HUD/雷达显示控制、后处理滤镜" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.strong, { children: "BulletAssist" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "XBase::BulletAssist" }) }),
				jsx(_components.td, { children: "子弹追踪、坐标透视、强锁与开火抑制" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.strong, { children: "Overlay" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "XBase::Overlay" }) }),
				jsx(_components.td, { children: "屏幕信息覆盖层（FPS/坐标/面板）" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.strong, { children: "Camera" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "XBase::Camera" }) }),
				jsx(_components.td, { children: "自由视角与俯视相机" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.strong, { children: "Cheats" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "XBase::Cheats" }) }),
				jsx(_components.td, { children: "飞车/氮气/完美操控/绿灯/暴动/随机作弊" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.strong, { children: "VehicleEffects" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "XBase::VehicleEffects" }) }),
				jsx(_components.td, { children: "载具霓虹等渲染期特效" })
			] })
		] })] }),
		"\n",
		jsx(_components.h3, {
			id: "ui-层",
			children: "UI 层"
		}),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [
			jsx(_components.th, { children: "模块" }),
			jsx(_components.th, { children: "命名空间" }),
			jsx(_components.th, { children: "职责" })
		] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.strong, { children: "Theme" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "XBase::Theme" }) }),
				jsx(_components.td, { children: "主题配色、样式预设、字体管理" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.strong, { children: "UI" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "XBase::UI" }) }),
				jsx(_components.td, { children: "窗口管理、Tab 系统、MenuSurface 与基础组件封装" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.strong, { children: "WebView" }) }),
				jsx(_components.td, { children: jsx(_components.code, { children: "XBase::WebView" }) }),
				jsx(_components.td, { children: "通过系统 WebView2 在游戏窗口内渲染网页" })
			] })
		] })] }),
		"\n",
		jsx(_components.h3, {
			id: "其他",
			children: "其他"
		}),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [
			jsx(_components.th, { children: "控制器" }),
			jsx(_components.th, { children: "命名空间" }),
			jsx(_components.th, { children: "职责" })
		] }) }), jsxs(_components.tbody, { children: [jsxs(_components.tr, { children: [
			jsx(_components.td, { children: jsx(_components.strong, { children: "Version" }) }),
			jsx(_components.td, { children: jsx(_components.code, { children: "XBase" }) }),
			jsx(_components.td, { children: "游戏版本检测" })
		] }), jsxs(_components.tr, { children: [
			jsx(_components.td, { children: jsx(_components.strong, { children: "Types" }) }),
			jsx(_components.td, { children: jsx(_components.code, { children: "XBase::Types" }) }),
			jsx(_components.td, { children: "共享数据结构（ProofState/PedSpawnOptions 等）" })
		] })] })] }),
		"\n",
		jsx(_components.h2, {
			id: "版本能力查询",
			children: "版本能力查询"
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
						children: " <XBase/XBase.h>"
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
							children: "::VehicleBasic)) {"
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
							children: "Vehicle"
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
							children: "Repair"
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
				})
			] })
		}) }),
		"\n",
		jsxs(_components.p, { children: [
			"能力查询属于当前静态库的编译目标，不是运行时猜测。宿主必须链接与游戏目标对应的库；禁止将 ",
			jsx(_components.code, { children: "XBaseSA.lib" }),
			" 链接到 VC 或 III。"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "宿主生命周期",
			children: "宿主生命周期"
		}),
		"\n",
		jsx(_components.p, { children: "XBase 作为 XMenu 等宿主的静态库时，由宿主负责驱动生命周期：" }),
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
						children: " <XBase/XBase.h>"
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
						children: "// 安装宿主回调；同时启用当前版本的运行时保护"
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
				jsx(_components.span, {
					className: "line",
					children: jsx(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// 显式移交领域；掩码会过滤当前库不支持的领域"
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
							children: "::AllDomains);"
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
						children: "// 卸载前恢复状态并清理领域"
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
			" 会同时安装版本相关的运行时保护：VC 增加剧情资源目录纠正与空文件句柄保护，SA/VC 增加剧情期间的对象访问安全门（由 ",
			jsx(_components.code, { children: "BulletAssist" }),
			" 消费）。"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "用法",
			children: "用法"
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
						children: " <XBase/XBase.h>"
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
							children: "Player"
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
							children: "Heal"
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
							children: "Player"
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
							children: "GiveMoney"
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
							children: "100000"
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
							children: "Vehicle"
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
							children: "Spawn"
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
							children: "411"
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
							children: "       // Infernus"
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
							children: "Vehicle"
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
							children: "Repair"
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
							children: "World"
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
							children: "SetWeather"
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
							children: "0"
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
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "true"
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
							children: " // 锁定晴天"
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
							children: "Weapon"
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
							children: "GiveAll"
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
		jsx(_components.h2, {
			id: "构建",
			children: "构建"
		}),
		"\n",
		jsxs(_components.ul, { children: [
			"\n",
			jsx(_components.li, { children: "C++20 / Win32 (x86) / MBCS / static runtime" }),
			"\n",
			jsx(_components.li, { children: "Premake5 生成 VS2022 解决方案" }),
			"\n",
			jsxs(_components.li, { children: [
				jsx(_components.code, { children: "XBaseSA.lib" }),
				" 使用 ",
				jsx(_components.code, { children: "plugin_sa" })
			] }),
			"\n",
			jsxs(_components.li, { children: [
				jsx(_components.code, { children: "XBaseVC.lib" }),
				" 使用 ",
				jsx(_components.code, { children: "plugin_vc" }),
				"，当前未实现域通过能力查询拒绝调用"
			] }),
			"\n",
			jsxs(_components.li, { children: [
				jsx(_components.code, { children: "XBaseIII.lib" }),
				" 使用 ",
				jsx(_components.code, { children: "plugin_III" }),
				"，当前未实现域通过能力查询拒绝调用"
			] }),
			"\n",
			jsxs(_components.li, { children: [
				jsx(_components.code, { children: "Setup.bat" }),
				" 生成项目文件，",
				jsx(_components.code, { children: "Build.bat" }),
				" 编译三个目标"
			] }),
			"\n"
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
