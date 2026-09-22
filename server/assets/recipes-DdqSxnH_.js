import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/plugins/recipes.mdx?collection=docs
var frontmatter = {
	"title": "组合示例",
	"description": "可抄示例目录（兼容旧 /plugins/recipes 链接）"
};
var _markdown = "\n\n完整代码在 [插件 · 综述](/docs/plugins)。本页是目录，方便从旧路径跳转。\n\n| 示例              | 要点                       | 位置                                                    |\n| --------------- | ------------------------ | ----------------------------------------------------- |\n| 最小 ASI          | 全局构造只 `+=`               | [综述 · 最小 ASI](/docs/plugins#最小-asi)                   |\n| 热键边沿 + 满血       | KeyCheck + FindPlayerPed | [综述 · 热键](/docs/plugins#热键边沿--满血)                     |\n| 给武器             | processScripts + 判空      | [综述 · 给武器](/docs/plugins#给武器)                         |\n| Command 刷车      | REQUEST → HAS → CREATE   | [综述 · Command 刷车](/docs/plugins#command-刷车)           |\n| patch 可逆开关      | Get 备份再 Set              | [综述 · patch](/docs/plugins#patch-可逆开关)                |\n| SetRaw 备份还原     | 改代码字节                    | [综述 · SetRaw](/docs/plugins#setraw-备份还原)              |\n| PedExtendedData | 每 ped 附加数据               | [综述 · PedExtendedData](/docs/plugins#pedextendeddata) |\n| 贴图 + 设备丢失       | Lost / Reset 成对          | [综述 · 贴图](/docs/plugins#贴图与设备丢失)                      |\n\n单 API 仍走侧栏：Events / Patch / Pattern / Command / [扩展](/docs/plugins/extensions) / [工具](/docs/plugins/utils) / [Extender](/docs/plugins/extender) / [实体](/docs/plugins/entities)。\n\n<Cards>\n  <Card title=\"插件 · 综述\" href=\"/docs/plugins\" description=\"全部示例正文\" />\n\n  <Card title=\"Extender\" href=\"/docs/plugins/extender\" description=\"附加数据 API\" />\n</Cards>\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "完整代码在 插件 · 综述。本页是目录，方便从旧路径跳转。"
		},
		{
			"heading": void 0,
			"content": "示例"
		},
		{
			"heading": void 0,
			"content": "要点"
		},
		{
			"heading": void 0,
			"content": "位置"
		},
		{
			"heading": void 0,
			"content": "最小 ASI"
		},
		{
			"heading": void 0,
			"content": "全局构造只 `+=`"
		},
		{
			"heading": void 0,
			"content": "综述 · 最小 ASI"
		},
		{
			"heading": void 0,
			"content": "热键边沿 + 满血"
		},
		{
			"heading": void 0,
			"content": "KeyCheck + FindPlayerPed"
		},
		{
			"heading": void 0,
			"content": "综述 · 热键"
		},
		{
			"heading": void 0,
			"content": "给武器"
		},
		{
			"heading": void 0,
			"content": "processScripts + 判空"
		},
		{
			"heading": void 0,
			"content": "综述 · 给武器"
		},
		{
			"heading": void 0,
			"content": "Command 刷车"
		},
		{
			"heading": void 0,
			"content": "REQUEST → HAS → CREATE"
		},
		{
			"heading": void 0,
			"content": "综述 · Command 刷车"
		},
		{
			"heading": void 0,
			"content": "patch 可逆开关"
		},
		{
			"heading": void 0,
			"content": "Get 备份再 Set"
		},
		{
			"heading": void 0,
			"content": "综述 · patch"
		},
		{
			"heading": void 0,
			"content": "SetRaw 备份还原"
		},
		{
			"heading": void 0,
			"content": "改代码字节"
		},
		{
			"heading": void 0,
			"content": "综述 · SetRaw"
		},
		{
			"heading": void 0,
			"content": "PedExtendedData"
		},
		{
			"heading": void 0,
			"content": "每 ped 附加数据"
		},
		{
			"heading": void 0,
			"content": "综述 · PedExtendedData"
		},
		{
			"heading": void 0,
			"content": "贴图 + 设备丢失"
		},
		{
			"heading": void 0,
			"content": "Lost / Reset 成对"
		},
		{
			"heading": void 0,
			"content": "综述 · 贴图"
		},
		{
			"heading": void 0,
			"content": "单 API 仍走侧栏：Events / Patch / Pattern / Command / 扩展 / 工具 / Extender / 实体。"
		},
		{
			"heading": void 0,
			"content": "<Card title=\"插件 · 综述\" href=\"/docs/plugins\" description=\"全部示例正文\" />"
		},
		{
			"heading": void 0,
			"content": "<Card title=\"Extender\" href=\"/docs/plugins/extender\" description=\"附加数据 API\" />"
		}
	],
	"headings": []
};
var toc = [];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		p: "p",
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
			"完整代码在 ",
			jsx(_components.a, {
				href: "/docs/plugins",
				children: "插件 · 综述"
			}),
			"。本页是目录，方便从旧路径跳转。"
		] }),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [
			jsx(_components.th, { children: "示例" }),
			jsx(_components.th, { children: "要点" }),
			jsx(_components.th, { children: "位置" })
		] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "最小 ASI" }),
				jsxs(_components.td, { children: ["全局构造只 ", jsx(_components.code, { children: "+=" })] }),
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/plugins#%E6%9C%80%E5%B0%8F-asi",
					children: "综述 · 最小 ASI"
				}) })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "热键边沿 + 满血" }),
				jsx(_components.td, { children: "KeyCheck + FindPlayerPed" }),
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/plugins#%E7%83%AD%E9%94%AE%E8%BE%B9%E6%B2%BF--%E6%BB%A1%E8%A1%80",
					children: "综述 · 热键"
				}) })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "给武器" }),
				jsx(_components.td, { children: "processScripts + 判空" }),
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/plugins#%E7%BB%99%E6%AD%A6%E5%99%A8",
					children: "综述 · 给武器"
				}) })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "Command 刷车" }),
				jsx(_components.td, { children: "REQUEST → HAS → CREATE" }),
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/plugins#command-%E5%88%B7%E8%BD%A6",
					children: "综述 · Command 刷车"
				}) })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "patch 可逆开关" }),
				jsx(_components.td, { children: "Get 备份再 Set" }),
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/plugins#patch-%E5%8F%AF%E9%80%86%E5%BC%80%E5%85%B3",
					children: "综述 · patch"
				}) })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "SetRaw 备份还原" }),
				jsx(_components.td, { children: "改代码字节" }),
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/plugins#setraw-%E5%A4%87%E4%BB%BD%E8%BF%98%E5%8E%9F",
					children: "综述 · SetRaw"
				}) })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "PedExtendedData" }),
				jsx(_components.td, { children: "每 ped 附加数据" }),
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/plugins#pedextendeddata",
					children: "综述 · PedExtendedData"
				}) })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: "贴图 + 设备丢失" }),
				jsx(_components.td, { children: "Lost / Reset 成对" }),
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/plugins#%E8%B4%B4%E5%9B%BE%E4%B8%8E%E8%AE%BE%E5%A4%87%E4%B8%A2%E5%A4%B1",
					children: "综述 · 贴图"
				}) })
			] })
		] })] }),
		"\n",
		jsxs(_components.p, { children: [
			"单 API 仍走侧栏：Events / Patch / Pattern / Command / ",
			jsx(_components.a, {
				href: "/docs/plugins/extensions",
				children: "扩展"
			}),
			" / ",
			jsx(_components.a, {
				href: "/docs/plugins/utils",
				children: "工具"
			}),
			" / ",
			jsx(_components.a, {
				href: "/docs/plugins/extender",
				children: "Extender"
			}),
			" / ",
			jsx(_components.a, {
				href: "/docs/plugins/entities",
				children: "实体"
			}),
			"。"
		] }),
		"\n",
		jsxs(Cards, { children: [jsx(Card, {
			title: "插件 · 综述",
			href: "/docs/plugins",
			description: "全部示例正文"
		}), jsx(Card, {
			title: "Extender",
			href: "/docs/plugins/extender",
			description: "附加数据 API"
		})] })
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
