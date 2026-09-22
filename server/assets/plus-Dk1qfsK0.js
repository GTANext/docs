import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/cleo/sa/plus/index.mdx?collection=docs
var frontmatter = {
	"title": "综述",
	"description": "CLEO+ 按类型分页入口（约 318 条）"
};
var _markdown = "\n\n`sa` · 扩展 `CLEO+` · 需 CLEO + CLEO+\n\n按类型分页。调用见 [CLEO Lua](/docs/cleo/syntax) / [Redux](/docs/cleo/syntax-redux)。\n\n源：`sa.json` → `CLEO+`（约 `0B20`…`0F17`，共 318 条）。\n\n## 覆盖范围 [#覆盖范围]\n\n| 状态          | 内容                                                     |\n| ----------- | ------------------------------------------------------ |\n| **本目录**     | 仅 **CLEO+**，按类型拆页                                      |\n| **其它扩展**    | [sa/ext](/docs/cleo/sa/ext)：NewOpcodes、imgui、file/ini… |\n| **基础 CLEO** | [SA 类型页](/docs/cleo/sa/memory) / [综述](/docs/cleo)      |\n| **后续**      | default SCM 全表 · SAMPFUNCS                             |\n\n## 类型页 [#类型页]\n\n<Cards>\n  <Card title=\"Clipboard\" href=\"/docs/cleo/sa/plus/clipboard\" description=\"剪贴板读写\" />\n\n  <Card title=\"Matrix / Quat\" href=\"/docs/cleo/sa/plus/matrix\" description=\"矩阵与四元数\" />\n\n  <Card title=\"Memory\" href=\"/docs/cleo/sa/plus/memory\" description=\"内存扩展\" />\n\n  <Card title=\"Entity 综述\" href=\"/docs/cleo/sa/plus/entity\" description=\"实体入口\" />\n\n  <Card title=\"Entity Char\" href=\"/docs/cleo/sa/plus/entity-char\" description=\"角色\" />\n\n  <Card title=\"Entity Car\" href=\"/docs/cleo/sa/plus/entity-car\" description=\"载具\" />\n\n  <Card title=\"Entity Object\" href=\"/docs/cleo/sa/plus/entity-object\" description=\"物体\" />\n\n  <Card title=\"Entity World\" href=\"/docs/cleo/sa/plus/entity-world\" description=\"世界\" />\n\n  <Card title=\"Text\" href=\"/docs/cleo/sa/plus/text\" description=\"文本\" />\n\n  <Card title=\"ColPoint\" href=\"/docs/cleo/sa/plus/colpoint\" description=\"碰撞点\" />\n\n  <Card title=\"Clock / Weather\" href=\"/docs/cleo/sa/plus/clock\" description=\"时钟天气\" />\n\n  <Card title=\"Script\" href=\"/docs/cleo/sa/plus/script\" description=\"脚本事件\" />\n\n  <Card title=\"Game / Mission\" href=\"/docs/cleo/sa/plus/game\" description=\"游戏任务\" />\n\n  <Card title=\"Math\" href=\"/docs/cleo/sa/plus/math\" description=\"噪声缓动\" />\n\n  <Card title=\"Mouse\" href=\"/docs/cleo/sa/plus/mouse\" description=\"鼠标\" />\n\n  <Card title=\"Audio\" href=\"/docs/cleo/sa/plus/audio\" description=\"音频\" />\n\n  <Card title=\"Weapon\" href=\"/docs/cleo/sa/plus/weapon\" description=\"武器\" />\n\n  <Card title=\"Txd / Draw\" href=\"/docs/cleo/sa/plus/txd\" description=\"贴图绘制\" />\n\n  <Card title=\"CleoBlip\" href=\"/docs/cleo/sa/plus/blip\" description=\"Blip\" />\n\n  <Card title=\"Pad\" href=\"/docs/cleo/sa/plus/pad\" description=\"输入边沿\" />\n\n  <Card title=\"RenderObject\" href=\"/docs/cleo/sa/plus/render\" description=\"渲染物\" />\n\n  <Card title=\"Pickup\" href=\"/docs/cleo/sa/plus/pickup\" description=\"拾取物\" />\n\n  <Card title=\"Hud\" href=\"/docs/cleo/sa/plus/hud\" description=\"HUD\" />\n\n  <Card title=\"Camera\" href=\"/docs/cleo/sa/plus/camera\" description=\"镜头\" />\n\n  <Card title=\"List\" href=\"/docs/cleo/sa/plus/list\" description=\"列表\" />\n\n  <Card title=\"Streaming\" href=\"/docs/cleo/sa/plus/streaming\" description=\"流式\" />\n\n  <Card title=\"Fx\" href=\"/docs/cleo/sa/plus/fx\" description=\"特效\" />\n\n  <Card title=\"DynamicLibrary\" href=\"/docs/cleo/sa/plus/dll\" description=\"已加载 DLL\" />\n\n  <Card title=\"杂项\" href=\"/docs/cleo/sa/plus/misc\" description=\"说明\" />\n</Cards>\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "`sa` · 扩展 `CLEO+` · 需 CLEO + CLEO+"
		},
		{
			"heading": void 0,
			"content": "按类型分页。调用见 CLEO Lua / Redux。"
		},
		{
			"heading": void 0,
			"content": "源：`sa.json` → `CLEO+`（约 `0B20`…`0F17`，共 318 条）。"
		},
		{
			"heading": "覆盖范围",
			"content": "状态"
		},
		{
			"heading": "覆盖范围",
			"content": "内容"
		},
		{
			"heading": "覆盖范围",
			"content": "**本目录**"
		},
		{
			"heading": "覆盖范围",
			"content": "仅 **CLEO+**，按类型拆页"
		},
		{
			"heading": "覆盖范围",
			"content": "**其它扩展**"
		},
		{
			"heading": "覆盖范围",
			"content": "sa/ext：NewOpcodes、imgui、file/ini…"
		},
		{
			"heading": "覆盖范围",
			"content": "**基础 CLEO**"
		},
		{
			"heading": "覆盖范围",
			"content": "SA 类型页 / 综述"
		},
		{
			"heading": "覆盖范围",
			"content": "**后续**"
		},
		{
			"heading": "覆盖范围",
			"content": "default SCM 全表 · SAMPFUNCS"
		},
		{
			"heading": "类型页",
			"content": "<Card title=\"Clipboard\" href=\"/docs/cleo/sa/plus/clipboard\" description=\"剪贴板读写\" />"
		},
		{
			"heading": "类型页",
			"content": "<Card title=\"Matrix / Quat\" href=\"/docs/cleo/sa/plus/matrix\" description=\"矩阵与四元数\" />"
		},
		{
			"heading": "类型页",
			"content": "<Card title=\"Memory\" href=\"/docs/cleo/sa/plus/memory\" description=\"内存扩展\" />"
		},
		{
			"heading": "类型页",
			"content": "<Card title=\"Entity 综述\" href=\"/docs/cleo/sa/plus/entity\" description=\"实体入口\" />"
		},
		{
			"heading": "类型页",
			"content": "<Card title=\"Entity Char\" href=\"/docs/cleo/sa/plus/entity-char\" description=\"角色\" />"
		},
		{
			"heading": "类型页",
			"content": "<Card title=\"Entity Car\" href=\"/docs/cleo/sa/plus/entity-car\" description=\"载具\" />"
		},
		{
			"heading": "类型页",
			"content": "<Card title=\"Entity Object\" href=\"/docs/cleo/sa/plus/entity-object\" description=\"物体\" />"
		},
		{
			"heading": "类型页",
			"content": "<Card title=\"Entity World\" href=\"/docs/cleo/sa/plus/entity-world\" description=\"世界\" />"
		},
		{
			"heading": "类型页",
			"content": "<Card title=\"Text\" href=\"/docs/cleo/sa/plus/text\" description=\"文本\" />"
		},
		{
			"heading": "类型页",
			"content": "<Card title=\"ColPoint\" href=\"/docs/cleo/sa/plus/colpoint\" description=\"碰撞点\" />"
		},
		{
			"heading": "类型页",
			"content": "<Card title=\"Clock / Weather\" href=\"/docs/cleo/sa/plus/clock\" description=\"时钟天气\" />"
		},
		{
			"heading": "类型页",
			"content": "<Card title=\"Script\" href=\"/docs/cleo/sa/plus/script\" description=\"脚本事件\" />"
		},
		{
			"heading": "类型页",
			"content": "<Card title=\"Game / Mission\" href=\"/docs/cleo/sa/plus/game\" description=\"游戏任务\" />"
		},
		{
			"heading": "类型页",
			"content": "<Card title=\"Math\" href=\"/docs/cleo/sa/plus/math\" description=\"噪声缓动\" />"
		},
		{
			"heading": "类型页",
			"content": "<Card title=\"Mouse\" href=\"/docs/cleo/sa/plus/mouse\" description=\"鼠标\" />"
		},
		{
			"heading": "类型页",
			"content": "<Card title=\"Audio\" href=\"/docs/cleo/sa/plus/audio\" description=\"音频\" />"
		},
		{
			"heading": "类型页",
			"content": "<Card title=\"Weapon\" href=\"/docs/cleo/sa/plus/weapon\" description=\"武器\" />"
		},
		{
			"heading": "类型页",
			"content": "<Card title=\"Txd / Draw\" href=\"/docs/cleo/sa/plus/txd\" description=\"贴图绘制\" />"
		},
		{
			"heading": "类型页",
			"content": "<Card title=\"CleoBlip\" href=\"/docs/cleo/sa/plus/blip\" description=\"Blip\" />"
		},
		{
			"heading": "类型页",
			"content": "<Card title=\"Pad\" href=\"/docs/cleo/sa/plus/pad\" description=\"输入边沿\" />"
		},
		{
			"heading": "类型页",
			"content": "<Card title=\"RenderObject\" href=\"/docs/cleo/sa/plus/render\" description=\"渲染物\" />"
		},
		{
			"heading": "类型页",
			"content": "<Card title=\"Pickup\" href=\"/docs/cleo/sa/plus/pickup\" description=\"拾取物\" />"
		},
		{
			"heading": "类型页",
			"content": "<Card title=\"Hud\" href=\"/docs/cleo/sa/plus/hud\" description=\"HUD\" />"
		},
		{
			"heading": "类型页",
			"content": "<Card title=\"Camera\" href=\"/docs/cleo/sa/plus/camera\" description=\"镜头\" />"
		},
		{
			"heading": "类型页",
			"content": "<Card title=\"List\" href=\"/docs/cleo/sa/plus/list\" description=\"列表\" />"
		},
		{
			"heading": "类型页",
			"content": "<Card title=\"Streaming\" href=\"/docs/cleo/sa/plus/streaming\" description=\"流式\" />"
		},
		{
			"heading": "类型页",
			"content": "<Card title=\"Fx\" href=\"/docs/cleo/sa/plus/fx\" description=\"特效\" />"
		},
		{
			"heading": "类型页",
			"content": "<Card title=\"DynamicLibrary\" href=\"/docs/cleo/sa/plus/dll\" description=\"已加载 DLL\" />"
		},
		{
			"heading": "类型页",
			"content": "<Card title=\"杂项\" href=\"/docs/cleo/sa/plus/misc\" description=\"说明\" />"
		}
	],
	"headings": [{
		"id": "覆盖范围",
		"content": "覆盖范围"
	}, {
		"id": "类型页",
		"content": "类型页"
	}]
};
var toc = [{
	depth: 2,
	url: "#覆盖范围",
	title: jsx(Fragment, { children: "覆盖范围" })
}, {
	depth: 2,
	url: "#类型页",
	title: jsx(Fragment, { children: "类型页" })
}];
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
			jsx(_components.code, { children: "sa" }),
			" · 扩展 ",
			jsx(_components.code, { children: "CLEO+" }),
			" · 需 CLEO + CLEO+"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"按类型分页。调用见 ",
			jsx(_components.a, {
				href: "/docs/cleo/syntax",
				children: "CLEO Lua"
			}),
			" / ",
			jsx(_components.a, {
				href: "/docs/cleo/syntax-redux",
				children: "Redux"
			}),
			"。"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"源：",
			jsx(_components.code, { children: "sa.json" }),
			" → ",
			jsx(_components.code, { children: "CLEO+" }),
			"（约 ",
			jsx(_components.code, { children: "0B20" }),
			"…",
			jsx(_components.code, { children: "0F17" }),
			"，共 318 条）。"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "覆盖范围",
			children: "覆盖范围"
		}),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [jsx(_components.th, { children: "状态" }), jsx(_components.th, { children: "内容" })] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.strong, { children: "本目录" }) }), jsxs(_components.td, { children: [
				"仅 ",
				jsx(_components.strong, { children: "CLEO+" }),
				"，按类型拆页"
			] })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.strong, { children: "其它扩展" }) }), jsxs(_components.td, { children: [jsx(_components.a, {
				href: "/docs/cleo/sa/ext",
				children: "sa/ext"
			}), "：NewOpcodes、imgui、file/ini…"] })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.strong, { children: "基础 CLEO" }) }), jsxs(_components.td, { children: [
				jsx(_components.a, {
					href: "/docs/cleo/sa/memory",
					children: "SA 类型页"
				}),
				" / ",
				jsx(_components.a, {
					href: "/docs/cleo",
					children: "综述"
				})
			] })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.strong, { children: "后续" }) }), jsx(_components.td, { children: "default SCM 全表 · SAMPFUNCS" })] })
		] })] }),
		"\n",
		jsx(_components.h2, {
			id: "类型页",
			children: "类型页"
		}),
		"\n",
		jsxs(Cards, { children: [
			jsx(Card, {
				title: "Clipboard",
				href: "/docs/cleo/sa/plus/clipboard",
				description: "剪贴板读写"
			}),
			jsx(Card, {
				title: "Matrix / Quat",
				href: "/docs/cleo/sa/plus/matrix",
				description: "矩阵与四元数"
			}),
			jsx(Card, {
				title: "Memory",
				href: "/docs/cleo/sa/plus/memory",
				description: "内存扩展"
			}),
			jsx(Card, {
				title: "Entity 综述",
				href: "/docs/cleo/sa/plus/entity",
				description: "实体入口"
			}),
			jsx(Card, {
				title: "Entity Char",
				href: "/docs/cleo/sa/plus/entity-char",
				description: "角色"
			}),
			jsx(Card, {
				title: "Entity Car",
				href: "/docs/cleo/sa/plus/entity-car",
				description: "载具"
			}),
			jsx(Card, {
				title: "Entity Object",
				href: "/docs/cleo/sa/plus/entity-object",
				description: "物体"
			}),
			jsx(Card, {
				title: "Entity World",
				href: "/docs/cleo/sa/plus/entity-world",
				description: "世界"
			}),
			jsx(Card, {
				title: "Text",
				href: "/docs/cleo/sa/plus/text",
				description: "文本"
			}),
			jsx(Card, {
				title: "ColPoint",
				href: "/docs/cleo/sa/plus/colpoint",
				description: "碰撞点"
			}),
			jsx(Card, {
				title: "Clock / Weather",
				href: "/docs/cleo/sa/plus/clock",
				description: "时钟天气"
			}),
			jsx(Card, {
				title: "Script",
				href: "/docs/cleo/sa/plus/script",
				description: "脚本事件"
			}),
			jsx(Card, {
				title: "Game / Mission",
				href: "/docs/cleo/sa/plus/game",
				description: "游戏任务"
			}),
			jsx(Card, {
				title: "Math",
				href: "/docs/cleo/sa/plus/math",
				description: "噪声缓动"
			}),
			jsx(Card, {
				title: "Mouse",
				href: "/docs/cleo/sa/plus/mouse",
				description: "鼠标"
			}),
			jsx(Card, {
				title: "Audio",
				href: "/docs/cleo/sa/plus/audio",
				description: "音频"
			}),
			jsx(Card, {
				title: "Weapon",
				href: "/docs/cleo/sa/plus/weapon",
				description: "武器"
			}),
			jsx(Card, {
				title: "Txd / Draw",
				href: "/docs/cleo/sa/plus/txd",
				description: "贴图绘制"
			}),
			jsx(Card, {
				title: "CleoBlip",
				href: "/docs/cleo/sa/plus/blip",
				description: "Blip"
			}),
			jsx(Card, {
				title: "Pad",
				href: "/docs/cleo/sa/plus/pad",
				description: "输入边沿"
			}),
			jsx(Card, {
				title: "RenderObject",
				href: "/docs/cleo/sa/plus/render",
				description: "渲染物"
			}),
			jsx(Card, {
				title: "Pickup",
				href: "/docs/cleo/sa/plus/pickup",
				description: "拾取物"
			}),
			jsx(Card, {
				title: "Hud",
				href: "/docs/cleo/sa/plus/hud",
				description: "HUD"
			}),
			jsx(Card, {
				title: "Camera",
				href: "/docs/cleo/sa/plus/camera",
				description: "镜头"
			}),
			jsx(Card, {
				title: "List",
				href: "/docs/cleo/sa/plus/list",
				description: "列表"
			}),
			jsx(Card, {
				title: "Streaming",
				href: "/docs/cleo/sa/plus/streaming",
				description: "流式"
			}),
			jsx(Card, {
				title: "Fx",
				href: "/docs/cleo/sa/plus/fx",
				description: "特效"
			}),
			jsx(Card, {
				title: "DynamicLibrary",
				href: "/docs/cleo/sa/plus/dll",
				description: "已加载 DLL"
			}),
			jsx(Card, {
				title: "杂项",
				href: "/docs/cleo/sa/plus/misc",
				description: "说明"
			})
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
