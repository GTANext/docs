import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/cleo/sa/plus/entity.mdx?collection=docs
var frontmatter = {
	"title": "实体 Entity",
	"description": "CLEO+ 实体相关入口（按主体拆页）"
};
var _markdown = "\n\n`sa` · 扩展 `CLEO+` · 需 CLEO + CLEO+\n\n原单页过长，已按主体拆分。完整 opcode 在各子页。\n\n| 子页                                                | 内容                   |\n| ------------------------------------------------- | -------------------- |\n| [entity-char](/docs/cleo/sa/plus/entity-char)     | 角色 / 骨骼 / 任务 / 武器状态  |\n| [entity-car](/docs/cleo/sa/plus/entity-car)       | 载具 / 拖车 / 警报 / 碰撞    |\n| [entity-object](/docs/cleo/sa/plus/entity-object) | 物体 / 创建 / 扩展变量       |\n| [entity-world](/docs/cleo/sa/plus/entity-world)   | 距离 / 池遍历 / 实体类型 / 金钱 |\n\n按 opcode 查：各子页标题；也可站点搜索。\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "`sa` · 扩展 `CLEO+` · 需 CLEO + CLEO+"
		},
		{
			"heading": void 0,
			"content": "原单页过长，已按主体拆分。完整 opcode 在各子页。"
		},
		{
			"heading": void 0,
			"content": "子页"
		},
		{
			"heading": void 0,
			"content": "内容"
		},
		{
			"heading": void 0,
			"content": "entity-char"
		},
		{
			"heading": void 0,
			"content": "角色 / 骨骼 / 任务 / 武器状态"
		},
		{
			"heading": void 0,
			"content": "entity-car"
		},
		{
			"heading": void 0,
			"content": "载具 / 拖车 / 警报 / 碰撞"
		},
		{
			"heading": void 0,
			"content": "entity-object"
		},
		{
			"heading": void 0,
			"content": "物体 / 创建 / 扩展变量"
		},
		{
			"heading": void 0,
			"content": "entity-world"
		},
		{
			"heading": void 0,
			"content": "距离 / 池遍历 / 实体类型 / 金钱"
		},
		{
			"heading": void 0,
			"content": "按 opcode 查：各子页标题；也可站点搜索。"
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
	};
	return jsxs(Fragment, { children: [
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "sa" }),
			" · 扩展 ",
			jsx(_components.code, { children: "CLEO+" }),
			" · 需 CLEO + CLEO+"
		] }),
		"\n",
		jsx(_components.p, { children: "原单页过长，已按主体拆分。完整 opcode 在各子页。" }),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [jsx(_components.th, { children: "子页" }), jsx(_components.th, { children: "内容" })] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/plus/entity-char",
				children: "entity-char"
			}) }), jsx(_components.td, { children: "角色 / 骨骼 / 任务 / 武器状态" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/plus/entity-car",
				children: "entity-car"
			}) }), jsx(_components.td, { children: "载具 / 拖车 / 警报 / 碰撞" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/plus/entity-object",
				children: "entity-object"
			}) }), jsx(_components.td, { children: "物体 / 创建 / 扩展变量" })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/plus/entity-world",
				children: "entity-world"
			}) }), jsx(_components.td, { children: "距离 / 池遍历 / 实体类型 / 金钱" })] })
		] })] }),
		"\n",
		jsx(_components.p, { children: "按 opcode 查：各子页标题；也可站点搜索。" })
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
