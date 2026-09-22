import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/plugins/extensions/index.mdx?collection=docs
var frontmatter = {
	"title": "综述",
	"description": "shared/extensions 工具入口"
};
var _markdown = "\n\n`shared/extensions/` 按能力分页。\n\n<Cards>\n  <Card title=\"路径\" href=\"/docs/plugins/extensions/paths\" description=\"paths · GAME_PATH / PLUGIN_PATH\" />\n\n  <Card title=\"屏幕坐标\" href=\"/docs/plugins/extensions/screen\" description=\"设计坐标 → 当前分辨率\" />\n\n  <Card title=\"配置文件\" href=\"/docs/plugins/extensions/config\" description=\"config_file 读写 ini\" />\n\n  <Card title=\"屏幕字\" href=\"/docs/plugins/extensions/font\" description=\"gamefont 绘制文字\" />\n\n  <Card title=\"按键检测\" href=\"/docs/plugins/extensions/keycheck\" description=\"KeyCheck 边沿与连发\" />\n\n  <Card title=\"池遍历\" href=\"/docs/plugins/extensions/pool-iterator\" description=\"range-for 扫 CPool\" />\n</Cards>\n\n另见 [Extender](/docs/plugins/extender)：给 Ped / Vehicle / Object 挂附加数据。\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "`shared/extensions/` 按能力分页。"
		},
		{
			"heading": void 0,
			"content": "<Card title=\"路径\" href=\"/docs/plugins/extensions/paths\" description=\"paths · GAME_PATH / PLUGIN_PATH\" />"
		},
		{
			"heading": void 0,
			"content": "<Card title=\"屏幕坐标\" href=\"/docs/plugins/extensions/screen\" description=\"设计坐标 → 当前分辨率\" />"
		},
		{
			"heading": void 0,
			"content": "<Card title=\"配置文件\" href=\"/docs/plugins/extensions/config\" description=\"config_file 读写 ini\" />"
		},
		{
			"heading": void 0,
			"content": "<Card title=\"屏幕字\" href=\"/docs/plugins/extensions/font\" description=\"gamefont 绘制文字\" />"
		},
		{
			"heading": void 0,
			"content": "<Card title=\"按键检测\" href=\"/docs/plugins/extensions/keycheck\" description=\"KeyCheck 边沿与连发\" />"
		},
		{
			"heading": void 0,
			"content": "<Card title=\"池遍历\" href=\"/docs/plugins/extensions/pool-iterator\" description=\"range-for 扫 CPool\" />"
		},
		{
			"heading": void 0,
			"content": "另见 Extender：给 Ped / Vehicle / Object 挂附加数据。"
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
		...props.components
	}, { Card, Cards } = _components;
	if (!Card) _missingMdxReference("Card", true);
	if (!Cards) _missingMdxReference("Cards", true);
	return jsxs(Fragment, { children: [
		jsxs(_components.p, { children: [jsx(_components.code, { children: "shared/extensions/" }), " 按能力分页。"] }),
		"\n",
		jsxs(Cards, { children: [
			jsx(Card, {
				title: "路径",
				href: "/docs/plugins/extensions/paths",
				description: "paths · GAME_PATH / PLUGIN_PATH"
			}),
			jsx(Card, {
				title: "屏幕坐标",
				href: "/docs/plugins/extensions/screen",
				description: "设计坐标 → 当前分辨率"
			}),
			jsx(Card, {
				title: "配置文件",
				href: "/docs/plugins/extensions/config",
				description: "config_file 读写 ini"
			}),
			jsx(Card, {
				title: "屏幕字",
				href: "/docs/plugins/extensions/font",
				description: "gamefont 绘制文字"
			}),
			jsx(Card, {
				title: "按键检测",
				href: "/docs/plugins/extensions/keycheck",
				description: "KeyCheck 边沿与连发"
			}),
			jsx(Card, {
				title: "池遍历",
				href: "/docs/plugins/extensions/pool-iterator",
				description: "range-for 扫 CPool"
			})
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"另见 ",
			jsx(_components.a, {
				href: "/docs/plugins/extender",
				children: "Extender"
			}),
			"：给 Ped / Vehicle / Object 挂附加数据。"
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
