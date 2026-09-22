import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/skill/xbase-dev.mdx?collection=docs
var frontmatter = {
	"title": "XBase",
	"description": "XBase 开发 Skill · 公共 API、能力矩阵与版本后端边界"
};
var _markdown = "\n\n对应 Skill 文件：`gtamodx/xbase-dev.md`。\n\n使用 **XBase 公共 API、Core 生命周期、Host / Runtime / Platform、UI DSL 或三版本后端** 时，先读本页再编写代码。\n\n## 文档落点 [#文档落点]\n\n| 主题        | 文档                                                                                         |\n| --------- | ------------------------------------------------------------------------------------------ |\n| 架构与能力     | [XBase 综述](/docs/xbase)                                                                    |\n| Core 生命周期 | [Core](/docs/xbase/core)                                                                   |\n| 公共值类型与 ID | [Types](/docs/xbase/types)                                                                 |\n| 宿主与版本后端   | [宿主接入](/docs/xbase/host-integration)                                                       |\n| UI 与主题    | [UI](/docs/xbase/ui) · [Theme](/docs/xbase/theme)                                          |\n| Hook 边界   | [Hooks](/docs/xbase/hooks)                                                                 |\n| 玩家、载具与世界  | [Player](/docs/xbase/player) · [Vehicle](/docs/xbase/vehicle) · [World](/docs/xbase/world) |\n\n## 硬规则 [#硬规则]\n\n* 宿主只使用 `XBase/*.h` 公共接口，不包含私有 backend 或第三方 SDK 头\n* 调用功能前检查对应能力；不支持的版本必须安全禁用或返回可观察失败\n* III、VC、SA 的地址、ABI、脚本命令和对象布局严格隔离\n* 生命周期和游戏状态由 XBase Core 统一调度，宿主不得建立第二套状态源\n* 公共边界只暴露值类型、强类型 ID、快照、结果与回调\n\n## 使用范围 [#使用范围]\n\n* 编排 XBase 功能或接入 XMenu：只加载 XBase Skill\n* 实现 XBase 私有游戏后端：同时加载 [插件 Skill](/docs/skill/plugins-dev)\n* 对照脚本命令语义：同时加载 [CLEO Skill](/docs/skill/cleo-dev)\n\n入口：[XBase 综述](/docs/xbase)。\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "对应 Skill 文件：`gtamodx/xbase-dev.md`。"
		},
		{
			"heading": void 0,
			"content": "使用 **XBase 公共 API、Core 生命周期、Host / Runtime / Platform、UI DSL 或三版本后端** 时，先读本页再编写代码。"
		},
		{
			"heading": "文档落点",
			"content": "主题"
		},
		{
			"heading": "文档落点",
			"content": "文档"
		},
		{
			"heading": "文档落点",
			"content": "架构与能力"
		},
		{
			"heading": "文档落点",
			"content": "XBase 综述"
		},
		{
			"heading": "文档落点",
			"content": "Core 生命周期"
		},
		{
			"heading": "文档落点",
			"content": "Core"
		},
		{
			"heading": "文档落点",
			"content": "公共值类型与 ID"
		},
		{
			"heading": "文档落点",
			"content": "Types"
		},
		{
			"heading": "文档落点",
			"content": "宿主与版本后端"
		},
		{
			"heading": "文档落点",
			"content": "宿主接入"
		},
		{
			"heading": "文档落点",
			"content": "UI 与主题"
		},
		{
			"heading": "文档落点",
			"content": "UI · Theme"
		},
		{
			"heading": "文档落点",
			"content": "Hook 边界"
		},
		{
			"heading": "文档落点",
			"content": "Hooks"
		},
		{
			"heading": "文档落点",
			"content": "玩家、载具与世界"
		},
		{
			"heading": "文档落点",
			"content": "Player · Vehicle · World"
		},
		{
			"heading": "硬规则",
			"content": "宿主只使用 `XBase/*.h` 公共接口，不包含私有 backend 或第三方 SDK 头"
		},
		{
			"heading": "硬规则",
			"content": "调用功能前检查对应能力；不支持的版本必须安全禁用或返回可观察失败"
		},
		{
			"heading": "硬规则",
			"content": "III、VC、SA 的地址、ABI、脚本命令和对象布局严格隔离"
		},
		{
			"heading": "硬规则",
			"content": "生命周期和游戏状态由 XBase Core 统一调度，宿主不得建立第二套状态源"
		},
		{
			"heading": "硬规则",
			"content": "公共边界只暴露值类型、强类型 ID、快照、结果与回调"
		},
		{
			"heading": "使用范围",
			"content": "编排 XBase 功能或接入 XMenu：只加载 XBase Skill"
		},
		{
			"heading": "使用范围",
			"content": "实现 XBase 私有游戏后端：同时加载 插件 Skill"
		},
		{
			"heading": "使用范围",
			"content": "对照脚本命令语义：同时加载 CLEO Skill"
		},
		{
			"heading": "使用范围",
			"content": "入口：XBase 综述。"
		}
	],
	"headings": [
		{
			"id": "文档落点",
			"content": "文档落点"
		},
		{
			"id": "硬规则",
			"content": "硬规则"
		},
		{
			"id": "使用范围",
			"content": "使用范围"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#文档落点",
		title: jsx(Fragment, { children: "文档落点" })
	},
	{
		depth: 2,
		url: "#硬规则",
		title: jsx(Fragment, { children: "硬规则" })
	},
	{
		depth: 2,
		url: "#使用范围",
		title: jsx(Fragment, { children: "使用范围" })
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
			"对应 Skill 文件：",
			jsx(_components.code, { children: "gtamodx/xbase-dev.md" }),
			"。"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"使用 ",
			jsx(_components.strong, { children: "XBase 公共 API、Core 生命周期、Host / Runtime / Platform、UI DSL 或三版本后端" }),
			" 时，先读本页再编写代码。"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "文档落点",
			children: "文档落点"
		}),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [jsx(_components.th, { children: "主题" }), jsx(_components.th, { children: "文档" })] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "架构与能力" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/xbase",
				children: "XBase 综述"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Core 生命周期" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/xbase/core",
				children: "Core"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "公共值类型与 ID" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/xbase/types",
				children: "Types"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "宿主与版本后端" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/xbase/host-integration",
				children: "宿主接入"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "UI 与主题" }), jsxs(_components.td, { children: [
				jsx(_components.a, {
					href: "/docs/xbase/ui",
					children: "UI"
				}),
				" · ",
				jsx(_components.a, {
					href: "/docs/xbase/theme",
					children: "Theme"
				})
			] })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Hook 边界" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/xbase/hooks",
				children: "Hooks"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "玩家、载具与世界" }), jsxs(_components.td, { children: [
				jsx(_components.a, {
					href: "/docs/xbase/player",
					children: "Player"
				}),
				" · ",
				jsx(_components.a, {
					href: "/docs/xbase/vehicle",
					children: "Vehicle"
				}),
				" · ",
				jsx(_components.a, {
					href: "/docs/xbase/world",
					children: "World"
				})
			] })] })
		] })] }),
		"\n",
		jsx(_components.h2, {
			id: "硬规则",
			children: "硬规则"
		}),
		"\n",
		jsxs(_components.ul, { children: [
			"\n",
			jsxs(_components.li, { children: [
				"宿主只使用 ",
				jsx(_components.code, { children: "XBase/*.h" }),
				" 公共接口，不包含私有 backend 或第三方 SDK 头"
			] }),
			"\n",
			jsx(_components.li, { children: "调用功能前检查对应能力；不支持的版本必须安全禁用或返回可观察失败" }),
			"\n",
			jsx(_components.li, { children: "III、VC、SA 的地址、ABI、脚本命令和对象布局严格隔离" }),
			"\n",
			jsx(_components.li, { children: "生命周期和游戏状态由 XBase Core 统一调度，宿主不得建立第二套状态源" }),
			"\n",
			jsx(_components.li, { children: "公共边界只暴露值类型、强类型 ID、快照、结果与回调" }),
			"\n"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "使用范围",
			children: "使用范围"
		}),
		"\n",
		jsxs(_components.ul, { children: [
			"\n",
			jsx(_components.li, { children: "编排 XBase 功能或接入 XMenu：只加载 XBase Skill" }),
			"\n",
			jsxs(_components.li, { children: ["实现 XBase 私有游戏后端：同时加载 ", jsx(_components.a, {
				href: "/docs/skill/plugins-dev",
				children: "插件 Skill"
			})] }),
			"\n",
			jsxs(_components.li, { children: ["对照脚本命令语义：同时加载 ", jsx(_components.a, {
				href: "/docs/skill/cleo-dev",
				children: "CLEO Skill"
			})] }),
			"\n"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"入口：",
			jsx(_components.a, {
				href: "/docs/xbase",
				children: "XBase 综述"
			}),
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
