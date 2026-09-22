import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/index.mdx?collection=docs
var frontmatter = {
	"title": "综述",
	"description": "GTAMODX 文档入口 — plugin-sdk ASI 与 CLEO 脚本"
};
var _markdown = "\n\n面向 GTA III / VC / SA 的开发文档。C++ ASI 与 CLEO opcode **分区维护，不要混用调用方式**。\n\n<Cards>\n  <Card title=\"插件 · 综述\" href=\"/docs/plugins\" description=\"plugin-sdk 精选 API、生命周期与组合示例\" />\n\n  <Card title=\"PluginBase / Call\" href=\"/docs/plugins/plugin-base\" description=\"Call / CallDyn / Method / VMT 选型\" />\n\n  <Card title=\"CLEO · 综述\" href=\"/docs/cleo\" description=\"opcode · Lua · Redux（SA / VC / III）\" />\n\n  <Card title=\"技能 · 综述\" href=\"/docs/skill\" description=\"gtamodx agent 路由与 ASI / CLEO 边界\" />\n</Cards>\n\n<Callout type=\"info\" title=\"边界\">\n  本站是 **ASI 高频精选 + CLEO 调用表**，不是 plugin-sdk / SBL 的全量镜像。以本地头文件与 [sanny-builder library](https://library.sannybuilder.com/#/sa) 为准。\n</Callout>\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "面向 GTA III / VC / SA 的开发文档。C++ ASI 与 CLEO opcode **分区维护，不要混用调用方式**。"
		},
		{
			"heading": void 0,
			"content": "<Card title=\"插件 · 综述\" href=\"/docs/plugins\" description=\"plugin-sdk 精选 API、生命周期与组合示例\" />"
		},
		{
			"heading": void 0,
			"content": "<Card title=\"PluginBase / Call\" href=\"/docs/plugins/plugin-base\" description=\"Call / CallDyn / Method / VMT 选型\" />"
		},
		{
			"heading": void 0,
			"content": "<Card title=\"CLEO · 综述\" href=\"/docs/cleo\" description=\"opcode · Lua · Redux（SA / VC / III）\" />"
		},
		{
			"heading": void 0,
			"content": "<Card title=\"技能 · 综述\" href=\"/docs/skill\" description=\"gtamodx agent 路由与 ASI / CLEO 边界\" />"
		},
		{
			"heading": void 0,
			"content": "本站是 **ASI 高频精选 + CLEO 调用表**，不是 plugin-sdk / SBL 的全量镜像。以本地头文件与 sanny-builder library 为准。"
		}
	],
	"headings": []
};
var toc = [];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		p: "p",
		strong: "strong",
		...props.components
	}, { Callout, Card, Cards } = _components;
	if (!Callout) _missingMdxReference("Callout", true);
	if (!Card) _missingMdxReference("Card", true);
	if (!Cards) _missingMdxReference("Cards", true);
	return jsxs(Fragment, { children: [
		jsxs(_components.p, { children: [
			"面向 GTA III / VC / SA 的开发文档。C++ ASI 与 CLEO opcode ",
			jsx(_components.strong, { children: "分区维护，不要混用调用方式" }),
			"。"
		] }),
		"\n",
		jsxs(Cards, { children: [
			jsx(Card, {
				title: "插件 · 综述",
				href: "/docs/plugins",
				description: "plugin-sdk 精选 API、生命周期与组合示例"
			}),
			jsx(Card, {
				title: "PluginBase / Call",
				href: "/docs/plugins/plugin-base",
				description: "Call / CallDyn / Method / VMT 选型"
			}),
			jsx(Card, {
				title: "CLEO · 综述",
				href: "/docs/cleo",
				description: "opcode · Lua · Redux（SA / VC / III）"
			}),
			jsx(Card, {
				title: "技能 · 综述",
				href: "/docs/skill",
				description: "gtamodx agent 路由与 ASI / CLEO 边界"
			})
		] }),
		"\n",
		jsx(Callout, {
			type: "info",
			title: "边界",
			children: jsxs(_components.p, { children: [
				"本站是 ",
				jsx(_components.strong, { children: "ASI 高频精选 + CLEO 调用表" }),
				"，不是 plugin-sdk / SBL 的全量镜像。以本地头文件与 ",
				jsx(_components.a, {
					href: "https://library.sannybuilder.com/#/sa",
					children: "sanny-builder library"
				}),
				" 为准。"
			] })
		})
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
