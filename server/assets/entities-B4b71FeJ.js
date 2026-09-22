import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/plugins/entities/index.mdx?collection=docs
var frontmatter = {
	"title": "综述",
	"description": "SA 游戏类 API 入口（ASI 高频）"
};
var _markdown = "\n\nSA 游戏类 API 入口。源在 `plugin_sa/game_sa` 等。\n\n逻辑帧用 `processScriptsEvent`；静态构造里 `FindPlayer*` 常为 null。跨游戏基础见 `shared/game/`（`CVector` / `CRGBA`）。`game_sa` 约 500+ 头：本站只收 **ASI 高频**，边界见 [覆盖边界](/docs/plugins/entities/coverage)。\n\n## 基类与玩家 [#基类与玩家]\n\n<Cards>\n  <Card title=\"CPlaceable\" href=\"/docs/plugins/entities/placeable\" description=\"位置、朝向、矩阵\" />\n\n  <Card title=\"CEntity\" href=\"/docs/plugins/entities/entity\" description=\"模型、标志、传送、RW\" />\n\n  <Card title=\"CPhysical\" href=\"/docs/plugins/entities/physical\" description=\"速度、力、附着、免疫\" />\n\n  <Card title=\"FindPlayer*\" href=\"/docs/plugins/entities/player\" description=\"common.h 快捷\" />\n\n  <Card title=\"CPlayerPed\" href=\"/docs/plugins/entities/player-ped\" description=\"通缉、小队、冲刺\" />\n\n  <Card title=\"CPlayerInfo\" href=\"/docs/plugins/entities/player-info\" description=\"钱、最大血甲、免累\" />\n</Cards>\n\n## 池与实体 [#池与实体]\n\n<Cards>\n  <Card title=\"对象池\" href=\"/docs/plugins/entities/pools\" description=\"CPools 句柄与池\" />\n\n  <Card title=\"行人\" href=\"/docs/plugins/entities/ped\" description=\"CPed\" />\n\n  <Card title=\"载具\" href=\"/docs/plugins/entities/vehicle\" description=\"CVehicle\" />\n\n  <Card title=\"物体\" href=\"/docs/plugins/entities/object\" description=\"CObject\" />\n\n  <Card title=\"世界\" href=\"/docs/plugins/entities/world\" description=\"CWorld\" />\n\n  <Card title=\"火\" href=\"/docs/plugins/entities/fire\" description=\"CFireManager\" />\n\n  <Card title=\"爆炸\" href=\"/docs/plugins/entities/explosion\" description=\"CExplosion\" />\n\n  <Card title=\"拾取物\" href=\"/docs/plugins/entities/pickups\" description=\"CPickups\" />\n\n  <Card title=\"抛射物\" href=\"/docs/plugins/entities/projectile\" description=\"CProjectileInfo\" />\n\n  <Card title=\"武器实例\" href=\"/docs/plugins/entities/weapon\" description=\"CWeapon\" />\n</Cards>\n\n## 流式与资源 [#流式与资源]\n\n<Cards>\n  <Card title=\"模型流\" href=\"/docs/plugins/entities/streaming\" description=\"CStreaming\" />\n\n  <Card title=\"模型信息\" href=\"/docs/plugins/entities/model-info\" description=\"CModelInfo\" />\n\n  <Card title=\"TXD\" href=\"/docs/plugins/entities/txd-store\" description=\"CTxdStore\" />\n\n  <Card title=\"动画\" href=\"/docs/plugins/entities/anim\" description=\"CAnimManager\" />\n\n  <Card title=\"文件\" href=\"/docs/plugins/entities/file-mgr\" description=\"CFileMgr\" />\n</Cards>\n\n## 人口交通路径 [#人口交通路径]\n\n<Cards>\n  <Card title=\"人口\" href=\"/docs/plugins/entities/population\" description=\"CPopulation\" />\n\n  <Card title=\"交通\" href=\"/docs/plugins/entities/car-ctrl\" description=\"CCarCtrl\" />\n\n  <Card title=\"路径\" href=\"/docs/plugins/entities/pathfind\" description=\"ThePaths\" />\n\n  <Card title=\"水\" href=\"/docs/plugins/entities/water\" description=\"CWaterLevel\" />\n\n  <Card title=\"室内门\" href=\"/docs/plugins/entities/entry-exit\" description=\"CEntryExitManager\" />\n</Cards>\n\n## 绘制与 HUD [#绘制与-hud]\n\n<Cards>\n  <Card title=\"2D 精灵\" href=\"/docs/plugins/entities/sprite2d\" description=\"CSprite2d\" />\n\n  <Card title=\"游戏字体\" href=\"/docs/plugins/entities/font\" description=\"CFont\" />\n\n  <Card title=\"光晕 / 3D 标\" href=\"/docs/plugins/entities/markers\" description=\"CCoronas / C3dMarkers\" />\n\n  <Card title=\"影子\" href=\"/docs/plugins/entities/shadows\" description=\"CShadows\" />\n\n  <Card title=\"雷达 Blip\" href=\"/docs/plugins/entities/radar\" description=\"CRadar\" />\n\n  <Card title=\"HUD / 消息\" href=\"/docs/plugins/entities/hud-messages\" description=\"CHud / CMessages\" />\n\n  <Card title=\"镜头\" href=\"/docs/plugins/entities/camera\" description=\"TheCamera\" />\n\n  <Card title=\"CDraw\" href=\"/docs/plugins/entities/draw\" description=\"FOV / 裁剪\" />\n</Cards>\n\n## 游戏态 [#游戏态]\n\n<Cards>\n  <Card title=\"计时\" href=\"/docs/plugins/entities/timer\" description=\"CTimer\" />\n\n  <Card title=\"时间周期\" href=\"/docs/plugins/entities/time-cycle\" description=\"CTimeCycle\" />\n\n  <Card title=\"时间天气武器表\" href=\"/docs/plugins/entities/world-state\" description=\"CClock / CWeather / CWeaponInfo\" />\n\n  <Card title=\"统计\" href=\"/docs/plugins/entities/stats\" description=\"CStats\" />\n\n  <Card title=\"通缉\" href=\"/docs/plugins/entities/wanted\" description=\"CWanted\" />\n\n  <Card title=\"输入\" href=\"/docs/plugins/entities/pad\" description=\"CPad\" />\n\n  <Card title=\"菜单\" href=\"/docs/plugins/entities/menu\" description=\"FrontEndMenuManager\" />\n\n  <Card title=\"CGame\" href=\"/docs/plugins/entities/game\" description=\"区域 / gGameState\" />\n\n  <Card title=\"脚本\" href=\"/docs/plugins/entities/scripts\" description=\"CTheScripts\" />\n\n  <Card title=\"音频\" href=\"/docs/plugins/entities/audio-engine\" description=\"AudioEngine\" />\n\n  <Card title=\"覆盖边界\" href=\"/docs/plugins/entities/coverage\" description=\"已收 / 不扩\" />\n</Cards>\n\n## 注意 [#注意]\n\n| 点    | 说明                                   |\n| ---- | ------------------------------------ |\n| null | `FindPlayer*` / `GetPed` 全判空         |\n| 跨帧   | 存 handle 不存裸指针                       |\n| 改全局  | patch / 武器表 / 天气 / 密度 备份还原           |\n| 绘制帧  | 别 CREATE/DELETE；字/精灵放 `drawingEvent` |\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "SA 游戏类 API 入口。源在 `plugin_sa/game_sa` 等。"
		},
		{
			"heading": void 0,
			"content": "逻辑帧用 `processScriptsEvent`；静态构造里 `FindPlayer*` 常为 null。跨游戏基础见 `shared/game/`（`CVector` / `CRGBA`）。`game_sa` 约 500+ 头：本站只收 **ASI 高频**，边界见 覆盖边界。"
		},
		{
			"heading": "基类与玩家",
			"content": "<Card title=\"CPlaceable\" href=\"/docs/plugins/entities/placeable\" description=\"位置、朝向、矩阵\" />"
		},
		{
			"heading": "基类与玩家",
			"content": "<Card title=\"CEntity\" href=\"/docs/plugins/entities/entity\" description=\"模型、标志、传送、RW\" />"
		},
		{
			"heading": "基类与玩家",
			"content": "<Card title=\"CPhysical\" href=\"/docs/plugins/entities/physical\" description=\"速度、力、附着、免疫\" />"
		},
		{
			"heading": "基类与玩家",
			"content": "<Card title=\"FindPlayer*\" href=\"/docs/plugins/entities/player\" description=\"common.h 快捷\" />"
		},
		{
			"heading": "基类与玩家",
			"content": "<Card title=\"CPlayerPed\" href=\"/docs/plugins/entities/player-ped\" description=\"通缉、小队、冲刺\" />"
		},
		{
			"heading": "基类与玩家",
			"content": "<Card title=\"CPlayerInfo\" href=\"/docs/plugins/entities/player-info\" description=\"钱、最大血甲、免累\" />"
		},
		{
			"heading": "池与实体",
			"content": "<Card title=\"对象池\" href=\"/docs/plugins/entities/pools\" description=\"CPools 句柄与池\" />"
		},
		{
			"heading": "池与实体",
			"content": "<Card title=\"行人\" href=\"/docs/plugins/entities/ped\" description=\"CPed\" />"
		},
		{
			"heading": "池与实体",
			"content": "<Card title=\"载具\" href=\"/docs/plugins/entities/vehicle\" description=\"CVehicle\" />"
		},
		{
			"heading": "池与实体",
			"content": "<Card title=\"物体\" href=\"/docs/plugins/entities/object\" description=\"CObject\" />"
		},
		{
			"heading": "池与实体",
			"content": "<Card title=\"世界\" href=\"/docs/plugins/entities/world\" description=\"CWorld\" />"
		},
		{
			"heading": "池与实体",
			"content": "<Card title=\"火\" href=\"/docs/plugins/entities/fire\" description=\"CFireManager\" />"
		},
		{
			"heading": "池与实体",
			"content": "<Card title=\"爆炸\" href=\"/docs/plugins/entities/explosion\" description=\"CExplosion\" />"
		},
		{
			"heading": "池与实体",
			"content": "<Card title=\"拾取物\" href=\"/docs/plugins/entities/pickups\" description=\"CPickups\" />"
		},
		{
			"heading": "池与实体",
			"content": "<Card title=\"抛射物\" href=\"/docs/plugins/entities/projectile\" description=\"CProjectileInfo\" />"
		},
		{
			"heading": "池与实体",
			"content": "<Card title=\"武器实例\" href=\"/docs/plugins/entities/weapon\" description=\"CWeapon\" />"
		},
		{
			"heading": "流式与资源",
			"content": "<Card title=\"模型流\" href=\"/docs/plugins/entities/streaming\" description=\"CStreaming\" />"
		},
		{
			"heading": "流式与资源",
			"content": "<Card title=\"模型信息\" href=\"/docs/plugins/entities/model-info\" description=\"CModelInfo\" />"
		},
		{
			"heading": "流式与资源",
			"content": "<Card title=\"TXD\" href=\"/docs/plugins/entities/txd-store\" description=\"CTxdStore\" />"
		},
		{
			"heading": "流式与资源",
			"content": "<Card title=\"动画\" href=\"/docs/plugins/entities/anim\" description=\"CAnimManager\" />"
		},
		{
			"heading": "流式与资源",
			"content": "<Card title=\"文件\" href=\"/docs/plugins/entities/file-mgr\" description=\"CFileMgr\" />"
		},
		{
			"heading": "人口交通路径",
			"content": "<Card title=\"人口\" href=\"/docs/plugins/entities/population\" description=\"CPopulation\" />"
		},
		{
			"heading": "人口交通路径",
			"content": "<Card title=\"交通\" href=\"/docs/plugins/entities/car-ctrl\" description=\"CCarCtrl\" />"
		},
		{
			"heading": "人口交通路径",
			"content": "<Card title=\"路径\" href=\"/docs/plugins/entities/pathfind\" description=\"ThePaths\" />"
		},
		{
			"heading": "人口交通路径",
			"content": "<Card title=\"水\" href=\"/docs/plugins/entities/water\" description=\"CWaterLevel\" />"
		},
		{
			"heading": "人口交通路径",
			"content": "<Card title=\"室内门\" href=\"/docs/plugins/entities/entry-exit\" description=\"CEntryExitManager\" />"
		},
		{
			"heading": "绘制与-hud",
			"content": "<Card title=\"2D 精灵\" href=\"/docs/plugins/entities/sprite2d\" description=\"CSprite2d\" />"
		},
		{
			"heading": "绘制与-hud",
			"content": "<Card title=\"游戏字体\" href=\"/docs/plugins/entities/font\" description=\"CFont\" />"
		},
		{
			"heading": "绘制与-hud",
			"content": "<Card title=\"光晕 / 3D 标\" href=\"/docs/plugins/entities/markers\" description=\"CCoronas / C3dMarkers\" />"
		},
		{
			"heading": "绘制与-hud",
			"content": "<Card title=\"影子\" href=\"/docs/plugins/entities/shadows\" description=\"CShadows\" />"
		},
		{
			"heading": "绘制与-hud",
			"content": "<Card title=\"雷达 Blip\" href=\"/docs/plugins/entities/radar\" description=\"CRadar\" />"
		},
		{
			"heading": "绘制与-hud",
			"content": "<Card title=\"HUD / 消息\" href=\"/docs/plugins/entities/hud-messages\" description=\"CHud / CMessages\" />"
		},
		{
			"heading": "绘制与-hud",
			"content": "<Card title=\"镜头\" href=\"/docs/plugins/entities/camera\" description=\"TheCamera\" />"
		},
		{
			"heading": "绘制与-hud",
			"content": "<Card title=\"CDraw\" href=\"/docs/plugins/entities/draw\" description=\"FOV / 裁剪\" />"
		},
		{
			"heading": "游戏态",
			"content": "<Card title=\"计时\" href=\"/docs/plugins/entities/timer\" description=\"CTimer\" />"
		},
		{
			"heading": "游戏态",
			"content": "<Card title=\"时间周期\" href=\"/docs/plugins/entities/time-cycle\" description=\"CTimeCycle\" />"
		},
		{
			"heading": "游戏态",
			"content": "<Card title=\"时间天气武器表\" href=\"/docs/plugins/entities/world-state\" description=\"CClock / CWeather / CWeaponInfo\" />"
		},
		{
			"heading": "游戏态",
			"content": "<Card title=\"统计\" href=\"/docs/plugins/entities/stats\" description=\"CStats\" />"
		},
		{
			"heading": "游戏态",
			"content": "<Card title=\"通缉\" href=\"/docs/plugins/entities/wanted\" description=\"CWanted\" />"
		},
		{
			"heading": "游戏态",
			"content": "<Card title=\"输入\" href=\"/docs/plugins/entities/pad\" description=\"CPad\" />"
		},
		{
			"heading": "游戏态",
			"content": "<Card title=\"菜单\" href=\"/docs/plugins/entities/menu\" description=\"FrontEndMenuManager\" />"
		},
		{
			"heading": "游戏态",
			"content": "<Card title=\"CGame\" href=\"/docs/plugins/entities/game\" description=\"区域 / gGameState\" />"
		},
		{
			"heading": "游戏态",
			"content": "<Card title=\"脚本\" href=\"/docs/plugins/entities/scripts\" description=\"CTheScripts\" />"
		},
		{
			"heading": "游戏态",
			"content": "<Card title=\"音频\" href=\"/docs/plugins/entities/audio-engine\" description=\"AudioEngine\" />"
		},
		{
			"heading": "游戏态",
			"content": "<Card title=\"覆盖边界\" href=\"/docs/plugins/entities/coverage\" description=\"已收 / 不扩\" />"
		},
		{
			"heading": "注意",
			"content": "点"
		},
		{
			"heading": "注意",
			"content": "说明"
		},
		{
			"heading": "注意",
			"content": "null"
		},
		{
			"heading": "注意",
			"content": "`FindPlayer*` / `GetPed` 全判空"
		},
		{
			"heading": "注意",
			"content": "跨帧"
		},
		{
			"heading": "注意",
			"content": "存 handle 不存裸指针"
		},
		{
			"heading": "注意",
			"content": "改全局"
		},
		{
			"heading": "注意",
			"content": "patch / 武器表 / 天气 / 密度 备份还原"
		},
		{
			"heading": "注意",
			"content": "绘制帧"
		},
		{
			"heading": "注意",
			"content": "别 CREATE/DELETE；字/精灵放 `drawingEvent`"
		}
	],
	"headings": [
		{
			"id": "基类与玩家",
			"content": "基类与玩家"
		},
		{
			"id": "池与实体",
			"content": "池与实体"
		},
		{
			"id": "流式与资源",
			"content": "流式与资源"
		},
		{
			"id": "人口交通路径",
			"content": "人口交通路径"
		},
		{
			"id": "绘制与-hud",
			"content": "绘制与 HUD"
		},
		{
			"id": "游戏态",
			"content": "游戏态"
		},
		{
			"id": "注意",
			"content": "注意"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#基类与玩家",
		title: jsx(Fragment, { children: "基类与玩家" })
	},
	{
		depth: 2,
		url: "#池与实体",
		title: jsx(Fragment, { children: "池与实体" })
	},
	{
		depth: 2,
		url: "#流式与资源",
		title: jsx(Fragment, { children: "流式与资源" })
	},
	{
		depth: 2,
		url: "#人口交通路径",
		title: jsx(Fragment, { children: "人口交通路径" })
	},
	{
		depth: 2,
		url: "#绘制与-hud",
		title: jsx(Fragment, { children: "绘制与 HUD" })
	},
	{
		depth: 2,
		url: "#游戏态",
		title: jsx(Fragment, { children: "游戏态" })
	},
	{
		depth: 2,
		url: "#注意",
		title: jsx(Fragment, { children: "注意" })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h2: "h2",
		p: "p",
		strong: "strong",
		table: "table",
		tbody: "tbody",
		td: "td",
		th: "th",
		thead: "thead",
		tr: "tr",
		...props.components
	}, { Card, Cards } = _components;
	if (!Card) _missingMdxReference("Card", true);
	if (!Cards) _missingMdxReference("Cards", true);
	return jsxs(Fragment, { children: [
		jsxs(_components.p, { children: [
			"SA 游戏类 API 入口。源在 ",
			jsx(_components.code, { children: "plugin_sa/game_sa" }),
			" 等。"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"逻辑帧用 ",
			jsx(_components.code, { children: "processScriptsEvent" }),
			"；静态构造里 ",
			jsx(_components.code, { children: "FindPlayer*" }),
			" 常为 null。跨游戏基础见 ",
			jsx(_components.code, { children: "shared/game/" }),
			"（",
			jsx(_components.code, { children: "CVector" }),
			" / ",
			jsx(_components.code, { children: "CRGBA" }),
			"）。",
			jsx(_components.code, { children: "game_sa" }),
			" 约 500+ 头：本站只收 ",
			jsx(_components.strong, { children: "ASI 高频" }),
			"，边界见 ",
			jsx(_components.a, {
				href: "/docs/plugins/entities/coverage",
				children: "覆盖边界"
			}),
			"。"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "基类与玩家",
			children: "基类与玩家"
		}),
		"\n",
		jsxs(Cards, { children: [
			jsx(Card, {
				title: "CPlaceable",
				href: "/docs/plugins/entities/placeable",
				description: "位置、朝向、矩阵"
			}),
			jsx(Card, {
				title: "CEntity",
				href: "/docs/plugins/entities/entity",
				description: "模型、标志、传送、RW"
			}),
			jsx(Card, {
				title: "CPhysical",
				href: "/docs/plugins/entities/physical",
				description: "速度、力、附着、免疫"
			}),
			jsx(Card, {
				title: "FindPlayer*",
				href: "/docs/plugins/entities/player",
				description: "common.h 快捷"
			}),
			jsx(Card, {
				title: "CPlayerPed",
				href: "/docs/plugins/entities/player-ped",
				description: "通缉、小队、冲刺"
			}),
			jsx(Card, {
				title: "CPlayerInfo",
				href: "/docs/plugins/entities/player-info",
				description: "钱、最大血甲、免累"
			})
		] }),
		"\n",
		jsx(_components.h2, {
			id: "池与实体",
			children: "池与实体"
		}),
		"\n",
		jsxs(Cards, { children: [
			jsx(Card, {
				title: "对象池",
				href: "/docs/plugins/entities/pools",
				description: "CPools 句柄与池"
			}),
			jsx(Card, {
				title: "行人",
				href: "/docs/plugins/entities/ped",
				description: "CPed"
			}),
			jsx(Card, {
				title: "载具",
				href: "/docs/plugins/entities/vehicle",
				description: "CVehicle"
			}),
			jsx(Card, {
				title: "物体",
				href: "/docs/plugins/entities/object",
				description: "CObject"
			}),
			jsx(Card, {
				title: "世界",
				href: "/docs/plugins/entities/world",
				description: "CWorld"
			}),
			jsx(Card, {
				title: "火",
				href: "/docs/plugins/entities/fire",
				description: "CFireManager"
			}),
			jsx(Card, {
				title: "爆炸",
				href: "/docs/plugins/entities/explosion",
				description: "CExplosion"
			}),
			jsx(Card, {
				title: "拾取物",
				href: "/docs/plugins/entities/pickups",
				description: "CPickups"
			}),
			jsx(Card, {
				title: "抛射物",
				href: "/docs/plugins/entities/projectile",
				description: "CProjectileInfo"
			}),
			jsx(Card, {
				title: "武器实例",
				href: "/docs/plugins/entities/weapon",
				description: "CWeapon"
			})
		] }),
		"\n",
		jsx(_components.h2, {
			id: "流式与资源",
			children: "流式与资源"
		}),
		"\n",
		jsxs(Cards, { children: [
			jsx(Card, {
				title: "模型流",
				href: "/docs/plugins/entities/streaming",
				description: "CStreaming"
			}),
			jsx(Card, {
				title: "模型信息",
				href: "/docs/plugins/entities/model-info",
				description: "CModelInfo"
			}),
			jsx(Card, {
				title: "TXD",
				href: "/docs/plugins/entities/txd-store",
				description: "CTxdStore"
			}),
			jsx(Card, {
				title: "动画",
				href: "/docs/plugins/entities/anim",
				description: "CAnimManager"
			}),
			jsx(Card, {
				title: "文件",
				href: "/docs/plugins/entities/file-mgr",
				description: "CFileMgr"
			})
		] }),
		"\n",
		jsx(_components.h2, {
			id: "人口交通路径",
			children: "人口交通路径"
		}),
		"\n",
		jsxs(Cards, { children: [
			jsx(Card, {
				title: "人口",
				href: "/docs/plugins/entities/population",
				description: "CPopulation"
			}),
			jsx(Card, {
				title: "交通",
				href: "/docs/plugins/entities/car-ctrl",
				description: "CCarCtrl"
			}),
			jsx(Card, {
				title: "路径",
				href: "/docs/plugins/entities/pathfind",
				description: "ThePaths"
			}),
			jsx(Card, {
				title: "水",
				href: "/docs/plugins/entities/water",
				description: "CWaterLevel"
			}),
			jsx(Card, {
				title: "室内门",
				href: "/docs/plugins/entities/entry-exit",
				description: "CEntryExitManager"
			})
		] }),
		"\n",
		jsx(_components.h2, {
			id: "绘制与-hud",
			children: "绘制与 HUD"
		}),
		"\n",
		jsxs(Cards, { children: [
			jsx(Card, {
				title: "2D 精灵",
				href: "/docs/plugins/entities/sprite2d",
				description: "CSprite2d"
			}),
			jsx(Card, {
				title: "游戏字体",
				href: "/docs/plugins/entities/font",
				description: "CFont"
			}),
			jsx(Card, {
				title: "光晕 / 3D 标",
				href: "/docs/plugins/entities/markers",
				description: "CCoronas / C3dMarkers"
			}),
			jsx(Card, {
				title: "影子",
				href: "/docs/plugins/entities/shadows",
				description: "CShadows"
			}),
			jsx(Card, {
				title: "雷达 Blip",
				href: "/docs/plugins/entities/radar",
				description: "CRadar"
			}),
			jsx(Card, {
				title: "HUD / 消息",
				href: "/docs/plugins/entities/hud-messages",
				description: "CHud / CMessages"
			}),
			jsx(Card, {
				title: "镜头",
				href: "/docs/plugins/entities/camera",
				description: "TheCamera"
			}),
			jsx(Card, {
				title: "CDraw",
				href: "/docs/plugins/entities/draw",
				description: "FOV / 裁剪"
			})
		] }),
		"\n",
		jsx(_components.h2, {
			id: "游戏态",
			children: "游戏态"
		}),
		"\n",
		jsxs(Cards, { children: [
			jsx(Card, {
				title: "计时",
				href: "/docs/plugins/entities/timer",
				description: "CTimer"
			}),
			jsx(Card, {
				title: "时间周期",
				href: "/docs/plugins/entities/time-cycle",
				description: "CTimeCycle"
			}),
			jsx(Card, {
				title: "时间天气武器表",
				href: "/docs/plugins/entities/world-state",
				description: "CClock / CWeather / CWeaponInfo"
			}),
			jsx(Card, {
				title: "统计",
				href: "/docs/plugins/entities/stats",
				description: "CStats"
			}),
			jsx(Card, {
				title: "通缉",
				href: "/docs/plugins/entities/wanted",
				description: "CWanted"
			}),
			jsx(Card, {
				title: "输入",
				href: "/docs/plugins/entities/pad",
				description: "CPad"
			}),
			jsx(Card, {
				title: "菜单",
				href: "/docs/plugins/entities/menu",
				description: "FrontEndMenuManager"
			}),
			jsx(Card, {
				title: "CGame",
				href: "/docs/plugins/entities/game",
				description: "区域 / gGameState"
			}),
			jsx(Card, {
				title: "脚本",
				href: "/docs/plugins/entities/scripts",
				description: "CTheScripts"
			}),
			jsx(Card, {
				title: "音频",
				href: "/docs/plugins/entities/audio-engine",
				description: "AudioEngine"
			}),
			jsx(Card, {
				title: "覆盖边界",
				href: "/docs/plugins/entities/coverage",
				description: "已收 / 不扩"
			})
		] }),
		"\n",
		jsx(_components.h2, {
			id: "注意",
			children: "注意"
		}),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [jsx(_components.th, { children: "点" }), jsx(_components.th, { children: "说明" })] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "null" }), jsxs(_components.td, { children: [
				jsx(_components.code, { children: "FindPlayer*" }),
				" / ",
				jsx(_components.code, { children: "GetPed" }),
				" 全判空"
			] })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "跨帧" }), jsx(_components.td, { children: "存 handle 不存裸指针" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "改全局" }), jsx(_components.td, { children: "patch / 武器表 / 天气 / 密度 备份还原" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "绘制帧" }), jsxs(_components.td, { children: ["别 CREATE/DELETE；字/精灵放 ", jsx(_components.code, { children: "drawingEvent" })] })] })
		] })] })
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
