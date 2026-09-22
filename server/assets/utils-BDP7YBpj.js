import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/plugins/utils/index.mdx?collection=docs
var frontmatter = {
	"title": "综述",
	"description": "shared 工具库入口"
};
var _markdown = "\n\n部分已由 `plugin.h` 间接包含。按类型分页。\n\n<Cards>\n  <Card title=\"杂项工具\" href=\"/docs/plugins/utils/other\" description=\"控制台、随机、键、字符串、文件、插值…\" />\n\n  <Card title=\"图片与精灵\" href=\"/docs/plugins/utils/image-sprite\" description=\"Image / SpriteLoader\" />\n\n  <Card title=\"音频\" href=\"/docs/plugins/utils/audio\" description=\"BassSampleManager（依赖 bass）\" />\n\n  <Card title=\"色 / 数学 / 墙钟\" href=\"/docs/plugins/utils/math-color-timer\" description=\"color / maths / Timer\" />\n\n  <Card title=\"文本与报错\" href=\"/docs/plugins/utils/text-error\" description=\"TextLoader / StringUtils / Error\" />\n\n  <Card title=\"版本与地址\" href=\"/docs/plugins/utils/version-address\" description=\"GameVersion / DynAddress / DynamicResource\" />\n\n  <Card title=\"着色器\" href=\"/docs/plugins/utils/shader\" description=\"Shader（SA）\" />\n</Cards>\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "部分已由 `plugin.h` 间接包含。按类型分页。"
		},
		{
			"heading": void 0,
			"content": "<Card title=\"杂项工具\" href=\"/docs/plugins/utils/other\" description=\"控制台、随机、键、字符串、文件、插值…\" />"
		},
		{
			"heading": void 0,
			"content": "<Card title=\"图片与精灵\" href=\"/docs/plugins/utils/image-sprite\" description=\"Image / SpriteLoader\" />"
		},
		{
			"heading": void 0,
			"content": "<Card title=\"音频\" href=\"/docs/plugins/utils/audio\" description=\"BassSampleManager（依赖 bass）\" />"
		},
		{
			"heading": void 0,
			"content": "<Card title=\"色 / 数学 / 墙钟\" href=\"/docs/plugins/utils/math-color-timer\" description=\"color / maths / Timer\" />"
		},
		{
			"heading": void 0,
			"content": "<Card title=\"文本与报错\" href=\"/docs/plugins/utils/text-error\" description=\"TextLoader / StringUtils / Error\" />"
		},
		{
			"heading": void 0,
			"content": "<Card title=\"版本与地址\" href=\"/docs/plugins/utils/version-address\" description=\"GameVersion / DynAddress / DynamicResource\" />"
		},
		{
			"heading": void 0,
			"content": "<Card title=\"着色器\" href=\"/docs/plugins/utils/shader\" description=\"Shader（SA）\" />"
		}
	],
	"headings": []
};
var toc = [];
function _createMdxContent(props) {
	const _components = {
		code: "code",
		p: "p",
		...props.components
	}, { Card, Cards } = _components;
	if (!Card) _missingMdxReference("Card", true);
	if (!Cards) _missingMdxReference("Cards", true);
	return jsxs(Fragment, { children: [
		jsxs(_components.p, { children: [
			"部分已由 ",
			jsx(_components.code, { children: "plugin.h" }),
			" 间接包含。按类型分页。"
		] }),
		"\n",
		jsxs(Cards, { children: [
			jsx(Card, {
				title: "杂项工具",
				href: "/docs/plugins/utils/other",
				description: "控制台、随机、键、字符串、文件、插值…"
			}),
			jsx(Card, {
				title: "图片与精灵",
				href: "/docs/plugins/utils/image-sprite",
				description: "Image / SpriteLoader"
			}),
			jsx(Card, {
				title: "音频",
				href: "/docs/plugins/utils/audio",
				description: "BassSampleManager（依赖 bass）"
			}),
			jsx(Card, {
				title: "色 / 数学 / 墙钟",
				href: "/docs/plugins/utils/math-color-timer",
				description: "color / maths / Timer"
			}),
			jsx(Card, {
				title: "文本与报错",
				href: "/docs/plugins/utils/text-error",
				description: "TextLoader / StringUtils / Error"
			}),
			jsx(Card, {
				title: "版本与地址",
				href: "/docs/plugins/utils/version-address",
				description: "GameVersion / DynAddress / DynamicResource"
			}),
			jsx(Card, {
				title: "着色器",
				href: "/docs/plugins/utils/shader",
				description: "Shader（SA）"
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
