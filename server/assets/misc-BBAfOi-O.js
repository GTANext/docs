import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/cleo/vc/misc.mdx?collection=docs
var frontmatter = {
	"title": "杂项",
	"description": "无独立 class 的边缘 op 说明"
};
var _markdown = "\n\n`vc` · 扩展 `CLEO` · 需 CLEO\n\n无独立 class、或仅出现在扩展表边缘的 op。\n\n* 有 class 的已归 [Memory](/docs/cleo/vc/memory) / [File](/docs/cleo/vc/file) / [Text](/docs/cleo/vc/text) / [Entity](/docs/cleo/vc/entity) 等类型页\n* classic `05xx` 与 modern `0Axx` 同名时只文档 modern，classic 作别名不另开条\n* 完整清单：`vc/vc.json` → `CLEO`\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "`vc` · 扩展 `CLEO` · 需 CLEO"
		},
		{
			"heading": void 0,
			"content": "无独立 class、或仅出现在扩展表边缘的 op。"
		},
		{
			"heading": void 0,
			"content": "有 class 的已归 Memory / File / Text / Entity 等类型页"
		},
		{
			"heading": void 0,
			"content": "classic `05xx` 与 modern `0Axx` 同名时只文档 modern，classic 作别名不另开条"
		},
		{
			"heading": void 0,
			"content": "完整清单：`vc/vc.json` → `CLEO`"
		}
	],
	"headings": []
};
var toc = [];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		li: "li",
		p: "p",
		ul: "ul",
		...props.components
	};
	return jsxs(Fragment, { children: [
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "vc" }),
			" · 扩展 ",
			jsx(_components.code, { children: "CLEO" }),
			" · 需 CLEO"
		] }),
		"\n",
		jsx(_components.p, { children: "无独立 class、或仅出现在扩展表边缘的 op。" }),
		"\n",
		jsxs(_components.ul, { children: [
			"\n",
			jsxs(_components.li, { children: [
				"有 class 的已归 ",
				jsx(_components.a, {
					href: "/docs/cleo/vc/memory",
					children: "Memory"
				}),
				" / ",
				jsx(_components.a, {
					href: "/docs/cleo/vc/file",
					children: "File"
				}),
				" / ",
				jsx(_components.a, {
					href: "/docs/cleo/vc/text",
					children: "Text"
				}),
				" / ",
				jsx(_components.a, {
					href: "/docs/cleo/vc/entity",
					children: "Entity"
				}),
				" 等类型页"
			] }),
			"\n",
			jsxs(_components.li, { children: [
				"classic ",
				jsx(_components.code, { children: "05xx" }),
				" 与 modern ",
				jsx(_components.code, { children: "0Axx" }),
				" 同名时只文档 modern，classic 作别名不另开条"
			] }),
			"\n",
			jsxs(_components.li, { children: [
				"完整清单：",
				jsx(_components.code, { children: "vc/vc.json" }),
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
