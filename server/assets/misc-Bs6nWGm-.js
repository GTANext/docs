import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/cleo/gta3/misc.mdx?collection=docs
var frontmatter = {
	"title": "杂项",
	"description": "无独立 class 的边缘 op 说明"
};
var _markdown = "\n\n`gta3` · 扩展 `CLEO` · 需 CLEO\n\n* 有 class 的已分到类型页（含 file find、III 原生 Player/Char/Game）\n* classic / modern 双 id 只文档 modern\n* 完整表：`gta3.json` → `CLEO`\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "`gta3` · 扩展 `CLEO` · 需 CLEO"
		},
		{
			"heading": void 0,
			"content": "有 class 的已分到类型页（含 file find、III 原生 Player/Char/Game）"
		},
		{
			"heading": void 0,
			"content": "classic / modern 双 id 只文档 modern"
		},
		{
			"heading": void 0,
			"content": "完整表：`gta3.json` → `CLEO`"
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
		ul: "ul",
		...props.components
	};
	return jsxs(Fragment, { children: [
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "gta3" }),
			" · 扩展 ",
			jsx(_components.code, { children: "CLEO" }),
			" · 需 CLEO"
		] }),
		"\n",
		jsxs(_components.ul, { children: [
			"\n",
			jsx(_components.li, { children: "有 class 的已分到类型页（含 file find、III 原生 Player/Char/Game）" }),
			"\n",
			jsx(_components.li, { children: "classic / modern 双 id 只文档 modern" }),
			"\n",
			jsxs(_components.li, { children: [
				"完整表：",
				jsx(_components.code, { children: "gta3.json" }),
				" → ",
				jsx(_components.code, { children: "CLEO" })
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
//#endregion
export { _markdown, MDXContent as default, frontmatter, structuredData, toc };
