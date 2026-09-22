import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/plugins/entities/coverage.mdx?collection=docs
var frontmatter = {
	"title": "ASI 覆盖边界",
	"description": "entities 收录范围与明确不扩清单"
};
var _markdown = "\n\n本站 **entities** 按 SA 高频 ASI 用法收录，不是 `game_sa` 500+ 头全文。\n\n## 已收录（本树） [#已收录本树]\n\n| 类 / 主题                                                  | 页                                                |\n| ------------------------------------------------------- | ------------------------------------------------ |\n| CPlaceable / CEntity / CPhysical                        | placeable / entity / physical                    |\n| FindPlayer\\* / CPlayerPed / CPlayerInfo                 | player\\*                                         |\n| CPools / CPed / CVehicle / CObject                      | pools / ped / vehicle / object                   |\n| CWorld / CStreaming / CModelInfo / CTxdStore            | world / streaming / model-info / txd-store       |\n| CFireManager / CExplosion / CPickups / CProjectileInfo  | fire / explosion / pickups / projectile          |\n| CAnimManager / CWeapon / CWeaponInfo（world-state）       | anim / weapon / world-state                      |\n| CWanted / CPad / CRadar / CHud·CMessages                | wanted / pad / radar / hud-messages              |\n| CTimer / CCamera / CDraw / CTimeCycle / CClock·CWeather | timer / camera / draw / time-cycle / world-state |\n| CFont / CSprite2d / CCoronas·C3dMarkers / CShadows      | font / sprite2d / markers / shadows              |\n| CStats / CPopulation / CCarCtrl / CPathFind             | stats / population / car-ctrl / pathfind         |\n| CWaterLevel / CEntryExitManager / CGame / CMenuManager  | water / entry-exit / game / menu                 |\n| CFileMgr / CTheScripts / CAudioEngine                   | file-mgr / scripts / audio-engine                |\n\n## 明确不扩（除非以后单开） [#明确不扩除非以后单开]\n\n| 范围                                            | 原因                                           |\n| --------------------------------------------- | -------------------------------------------- |\n| 每个 `CTask*` / `CEvent*` / `CDecisionMaker` 子类 | 体量爆炸，查头文件 + 任务图                              |\n| 全套 `CAE*Audio*`                               | 只留 AudioEngine 入口                            |\n| `CAutomobile` / `CHeli` / … 全字段               | 用 CVehicle + 具体头                             |\n| `CRenderer` 可见列表细节                            | 渲染逆向专题                                       |\n| `CGarages` 全逻辑                                | 头文件字段少，任务向                                   |\n| VC / III `game_vc` / `game_iii` 类页            | 未开坑；API 名常类似，以对应头为准                          |\n| `ScriptCommands` 全枚举                          | 见 [Command](/docs/plugins/commands) 用法 + 枚举头 |\n| `injector` / `safetyhook` 底层                  | 非游戏类                                         |\n\n## 写法约定 [#写法约定]\n\n* `##` 功能中文；`<Api>` 里符号 + 一句人话\n* 签名贴近 plugin-sdk 头；调用可跑或标明以头文件为准\n* 改全局倍数 / 表 / 标志：备份还原\n\n本地头永远大于文档。缺页先搜 `plugin_sa/game_sa`。\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "本站 **entities** 按 SA 高频 ASI 用法收录，不是 `game_sa` 500+ 头全文。"
		},
		{
			"heading": "已收录本树",
			"content": "类 / 主题"
		},
		{
			"heading": "已收录本树",
			"content": "页"
		},
		{
			"heading": "已收录本树",
			"content": "CPlaceable / CEntity / CPhysical"
		},
		{
			"heading": "已收录本树",
			"content": "placeable / entity / physical"
		},
		{
			"heading": "已收录本树",
			"content": "FindPlayer\\* / CPlayerPed / CPlayerInfo"
		},
		{
			"heading": "已收录本树",
			"content": "player\\*"
		},
		{
			"heading": "已收录本树",
			"content": "CPools / CPed / CVehicle / CObject"
		},
		{
			"heading": "已收录本树",
			"content": "pools / ped / vehicle / object"
		},
		{
			"heading": "已收录本树",
			"content": "CWorld / CStreaming / CModelInfo / CTxdStore"
		},
		{
			"heading": "已收录本树",
			"content": "world / streaming / model-info / txd-store"
		},
		{
			"heading": "已收录本树",
			"content": "CFireManager / CExplosion / CPickups / CProjectileInfo"
		},
		{
			"heading": "已收录本树",
			"content": "fire / explosion / pickups / projectile"
		},
		{
			"heading": "已收录本树",
			"content": "CAnimManager / CWeapon / CWeaponInfo（world-state）"
		},
		{
			"heading": "已收录本树",
			"content": "anim / weapon / world-state"
		},
		{
			"heading": "已收录本树",
			"content": "CWanted / CPad / CRadar / CHud·CMessages"
		},
		{
			"heading": "已收录本树",
			"content": "wanted / pad / radar / hud-messages"
		},
		{
			"heading": "已收录本树",
			"content": "CTimer / CCamera / CDraw / CTimeCycle / CClock·CWeather"
		},
		{
			"heading": "已收录本树",
			"content": "timer / camera / draw / time-cycle / world-state"
		},
		{
			"heading": "已收录本树",
			"content": "CFont / CSprite2d / CCoronas·C3dMarkers / CShadows"
		},
		{
			"heading": "已收录本树",
			"content": "font / sprite2d / markers / shadows"
		},
		{
			"heading": "已收录本树",
			"content": "CStats / CPopulation / CCarCtrl / CPathFind"
		},
		{
			"heading": "已收录本树",
			"content": "stats / population / car-ctrl / pathfind"
		},
		{
			"heading": "已收录本树",
			"content": "CWaterLevel / CEntryExitManager / CGame / CMenuManager"
		},
		{
			"heading": "已收录本树",
			"content": "water / entry-exit / game / menu"
		},
		{
			"heading": "已收录本树",
			"content": "CFileMgr / CTheScripts / CAudioEngine"
		},
		{
			"heading": "已收录本树",
			"content": "file-mgr / scripts / audio-engine"
		},
		{
			"heading": "明确不扩除非以后单开",
			"content": "范围"
		},
		{
			"heading": "明确不扩除非以后单开",
			"content": "原因"
		},
		{
			"heading": "明确不扩除非以后单开",
			"content": "每个 `CTask*` / `CEvent*` / `CDecisionMaker` 子类"
		},
		{
			"heading": "明确不扩除非以后单开",
			"content": "体量爆炸，查头文件 + 任务图"
		},
		{
			"heading": "明确不扩除非以后单开",
			"content": "全套 `CAE*Audio*`"
		},
		{
			"heading": "明确不扩除非以后单开",
			"content": "只留 AudioEngine 入口"
		},
		{
			"heading": "明确不扩除非以后单开",
			"content": "`CAutomobile` / `CHeli` / … 全字段"
		},
		{
			"heading": "明确不扩除非以后单开",
			"content": "用 CVehicle + 具体头"
		},
		{
			"heading": "明确不扩除非以后单开",
			"content": "`CRenderer` 可见列表细节"
		},
		{
			"heading": "明确不扩除非以后单开",
			"content": "渲染逆向专题"
		},
		{
			"heading": "明确不扩除非以后单开",
			"content": "`CGarages` 全逻辑"
		},
		{
			"heading": "明确不扩除非以后单开",
			"content": "头文件字段少，任务向"
		},
		{
			"heading": "明确不扩除非以后单开",
			"content": "VC / III `game_vc` / `game_iii` 类页"
		},
		{
			"heading": "明确不扩除非以后单开",
			"content": "未开坑；API 名常类似，以对应头为准"
		},
		{
			"heading": "明确不扩除非以后单开",
			"content": "`ScriptCommands` 全枚举"
		},
		{
			"heading": "明确不扩除非以后单开",
			"content": "见 Command 用法 + 枚举头"
		},
		{
			"heading": "明确不扩除非以后单开",
			"content": "`injector` / `safetyhook` 底层"
		},
		{
			"heading": "明确不扩除非以后单开",
			"content": "非游戏类"
		},
		{
			"heading": "写法约定",
			"content": "`##` 功能中文；`<Api>` 里符号 + 一句人话"
		},
		{
			"heading": "写法约定",
			"content": "签名贴近 plugin-sdk 头；调用可跑或标明以头文件为准"
		},
		{
			"heading": "写法约定",
			"content": "改全局倍数 / 表 / 标志：备份还原"
		},
		{
			"heading": "写法约定",
			"content": "本地头永远大于文档。缺页先搜 `plugin_sa/game_sa`。"
		}
	],
	"headings": [
		{
			"id": "已收录本树",
			"content": "已收录（本树）"
		},
		{
			"id": "明确不扩除非以后单开",
			"content": "明确不扩（除非以后单开）"
		},
		{
			"id": "写法约定",
			"content": "写法约定"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#已收录本树",
		title: jsx(Fragment, { children: "已收录（本树）" })
	},
	{
		depth: 2,
		url: "#明确不扩除非以后单开",
		title: jsx(Fragment, { children: "明确不扩（除非以后单开）" })
	},
	{
		depth: 2,
		url: "#写法约定",
		title: jsx(Fragment, { children: "写法约定" })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h2: "h2",
		li: "li",
		p: "p",
		strong: "strong",
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
			"本站 ",
			jsx(_components.strong, { children: "entities" }),
			" 按 SA 高频 ASI 用法收录，不是 ",
			jsx(_components.code, { children: "game_sa" }),
			" 500+ 头全文。"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "已收录本树",
			children: "已收录（本树）"
		}),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [jsx(_components.th, { children: "类 / 主题" }), jsx(_components.th, { children: "页" })] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "CPlaceable / CEntity / CPhysical" }), jsx(_components.td, { children: "placeable / entity / physical" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "FindPlayer* / CPlayerPed / CPlayerInfo" }), jsx(_components.td, { children: "player*" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "CPools / CPed / CVehicle / CObject" }), jsx(_components.td, { children: "pools / ped / vehicle / object" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "CWorld / CStreaming / CModelInfo / CTxdStore" }), jsx(_components.td, { children: "world / streaming / model-info / txd-store" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "CFireManager / CExplosion / CPickups / CProjectileInfo" }), jsx(_components.td, { children: "fire / explosion / pickups / projectile" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "CAnimManager / CWeapon / CWeaponInfo（world-state）" }), jsx(_components.td, { children: "anim / weapon / world-state" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "CWanted / CPad / CRadar / CHud·CMessages" }), jsx(_components.td, { children: "wanted / pad / radar / hud-messages" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "CTimer / CCamera / CDraw / CTimeCycle / CClock·CWeather" }), jsx(_components.td, { children: "timer / camera / draw / time-cycle / world-state" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "CFont / CSprite2d / CCoronas·C3dMarkers / CShadows" }), jsx(_components.td, { children: "font / sprite2d / markers / shadows" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "CStats / CPopulation / CCarCtrl / CPathFind" }), jsx(_components.td, { children: "stats / population / car-ctrl / pathfind" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "CWaterLevel / CEntryExitManager / CGame / CMenuManager" }), jsx(_components.td, { children: "water / entry-exit / game / menu" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "CFileMgr / CTheScripts / CAudioEngine" }), jsx(_components.td, { children: "file-mgr / scripts / audio-engine" })] })
		] })] }),
		"\n",
		jsx(_components.h2, {
			id: "明确不扩除非以后单开",
			children: "明确不扩（除非以后单开）"
		}),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [jsx(_components.th, { children: "范围" }), jsx(_components.th, { children: "原因" })] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [jsxs(_components.td, { children: [
				"每个 ",
				jsx(_components.code, { children: "CTask*" }),
				" / ",
				jsx(_components.code, { children: "CEvent*" }),
				" / ",
				jsx(_components.code, { children: "CDecisionMaker" }),
				" 子类"
			] }), jsx(_components.td, { children: "体量爆炸，查头文件 + 任务图" })] }),
			jsxs(_components.tr, { children: [jsxs(_components.td, { children: ["全套 ", jsx(_components.code, { children: "CAE*Audio*" })] }), jsx(_components.td, { children: "只留 AudioEngine 入口" })] }),
			jsxs(_components.tr, { children: [jsxs(_components.td, { children: [
				jsx(_components.code, { children: "CAutomobile" }),
				" / ",
				jsx(_components.code, { children: "CHeli" }),
				" / … 全字段"
			] }), jsx(_components.td, { children: "用 CVehicle + 具体头" })] }),
			jsxs(_components.tr, { children: [jsxs(_components.td, { children: [jsx(_components.code, { children: "CRenderer" }), " 可见列表细节"] }), jsx(_components.td, { children: "渲染逆向专题" })] }),
			jsxs(_components.tr, { children: [jsxs(_components.td, { children: [jsx(_components.code, { children: "CGarages" }), " 全逻辑"] }), jsx(_components.td, { children: "头文件字段少，任务向" })] }),
			jsxs(_components.tr, { children: [jsxs(_components.td, { children: [
				"VC / III ",
				jsx(_components.code, { children: "game_vc" }),
				" / ",
				jsx(_components.code, { children: "game_iii" }),
				" 类页"
			] }), jsx(_components.td, { children: "未开坑；API 名常类似，以对应头为准" })] }),
			jsxs(_components.tr, { children: [jsxs(_components.td, { children: [jsx(_components.code, { children: "ScriptCommands" }), " 全枚举"] }), jsxs(_components.td, { children: [
				"见 ",
				jsx(_components.a, {
					href: "/docs/plugins/commands",
					children: "Command"
				}),
				" 用法 + 枚举头"
			] })] }),
			jsxs(_components.tr, { children: [jsxs(_components.td, { children: [
				jsx(_components.code, { children: "injector" }),
				" / ",
				jsx(_components.code, { children: "safetyhook" }),
				" 底层"
			] }), jsx(_components.td, { children: "非游戏类" })] })
		] })] }),
		"\n",
		jsx(_components.h2, {
			id: "写法约定",
			children: "写法约定"
		}),
		"\n",
		jsxs(_components.ul, { children: [
			"\n",
			jsxs(_components.li, { children: [
				jsx(_components.code, { children: "##" }),
				" 功能中文；",
				jsx(_components.code, { children: "<Api>" }),
				" 里符号 + 一句人话"
			] }),
			"\n",
			jsx(_components.li, { children: "签名贴近 plugin-sdk 头；调用可跑或标明以头文件为准" }),
			"\n",
			jsx(_components.li, { children: "改全局倍数 / 表 / 标志：备份还原" }),
			"\n"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"本地头永远大于文档。缺页先搜 ",
			jsx(_components.code, { children: "plugin_sa/game_sa" }),
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
