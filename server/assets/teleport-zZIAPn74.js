import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/xbase/teleport.mdx?collection=docs
var frontmatter = {
	"title": "Teleport",
	"description": "坐标传送、标记点传送、地图传送。"
};
var _markdown = "\n\n`include/XBase/Teleport.h` · `XBase::Teleport`\n\n> 传送动作在 XBase 后端内完成对象校验、场景流式加载与水上/水下处理；宿主只提交坐标和模式。支持情况由 `FeatureCapability::TeleportBasic` 控制，宿主不应直接调用 `Teleport::Process()`。\n\n```cpp\nbool TryGetCurrentPosition(Vec3& position);\nVec3 GetCurrentPosition();\nbool To(float x, float y, float z, int interior = 0);\nbool Forward(float distance);\nbool MapPosition(float x, float y, bool spawnUnderwater = false);\nbool Marker(bool spawnUnderwater = false);\nbool Center();\nvoid Process();\n```\n\n* `TryGetCurrentPosition` — 读取当前位置；玩家不可用时返回 `false`，`position` 保持不变。\n* `GetCurrentPosition` — 便捷读取，失败时返回安全默认值。\n* `To` — 传送到指定坐标；玩家在载具内时会保留载具并重新落位。\n* `Forward` — 朝面前方向移动指定距离。\n* `MapPosition` — 按地图坐标传送（x，y 自动计算地面 z），可选水面落点。\n* `Marker` — 传送到雷达标记点；没有标记时返回 `false`，仅 SA 实现。\n* `Center` — 传送到世界原点。\n\n`Teleport::Process()` 没有宿主可见的持续策略；领域启用后仍由 `Core::Process()` 统一调度，宿主不要直接调用。\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "`include/XBase/Teleport.h` · `XBase::Teleport`"
		},
		{
			"heading": void 0,
			"content": "> 传送动作在 XBase 后端内完成对象校验、场景流式加载与水上/水下处理；宿主只提交坐标和模式。支持情况由 `FeatureCapability::TeleportBasic` 控制，宿主不应直接调用 `Teleport::Process()`。"
		},
		{
			"heading": void 0,
			"content": "`TryGetCurrentPosition` — 读取当前位置；玩家不可用时返回 `false`，`position` 保持不变。"
		},
		{
			"heading": void 0,
			"content": "`GetCurrentPosition` — 便捷读取，失败时返回安全默认值。"
		},
		{
			"heading": void 0,
			"content": "`To` — 传送到指定坐标；玩家在载具内时会保留载具并重新落位。"
		},
		{
			"heading": void 0,
			"content": "`Forward` — 朝面前方向移动指定距离。"
		},
		{
			"heading": void 0,
			"content": "`MapPosition` — 按地图坐标传送（x，y 自动计算地面 z），可选水面落点。"
		},
		{
			"heading": void 0,
			"content": "`Marker` — 传送到雷达标记点；没有标记时返回 `false`，仅 SA 实现。"
		},
		{
			"heading": void 0,
			"content": "`Center` — 传送到世界原点。"
		},
		{
			"heading": void 0,
			"content": "`Teleport::Process()` 没有宿主可见的持续策略；领域启用后仍由 `Core::Process()` 统一调度，宿主不要直接调用。"
		}
	],
	"headings": []
};
var toc = [];
function _createMdxContent(props) {
	const _components = {
		blockquote: "blockquote",
		code: "code",
		li: "li",
		p: "p",
		pre: "pre",
		span: "span",
		ul: "ul",
		...props.components
	};
	return jsxs(Fragment, { children: [
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "include/XBase/Teleport.h" }),
			" · ",
			jsx(_components.code, { children: "XBase::Teleport" })
		] }),
		"\n",
		jsxs(_components.blockquote, { children: [
			"\n",
			jsxs(_components.p, { children: [
				"传送动作在 XBase 后端内完成对象校验、场景流式加载与水上/水下处理；宿主只提交坐标和模式。支持情况由 ",
				jsx(_components.code, { children: "FeatureCapability::TeleportBasic" }),
				" 控制，宿主不应直接调用 ",
				jsx(_components.code, { children: "Teleport::Process()" }),
				"。"
			] }),
			"\n"
		] }),
		"\n",
		jsx(Fragment, { children: jsx(_components.pre, {
			className: "shiki shiki-themes github-light github-dark",
			style: {
				"--shiki-light": "#24292e",
				"--shiki-dark": "#e1e4e8",
				"--shiki-light-bg": "#fff",
				"--shiki-dark-bg": "#24292e"
			},
			tabIndex: "0",
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z\" fill=\"currentColor\" /></svg>",
			children: jsxs(_components.code, { children: [
				jsxs(_components.span, {
					className: "line",
					children: [
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "bool"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " TryGetCurrentPosition"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "("
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "Vec3"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "&"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: " position"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ");"
						})
					]
				}),
				"\n",
				jsxs(_components.span, {
					className: "line",
					children: [
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "Vec3"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " GetCurrentPosition"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "();"
						})
					]
				}),
				"\n",
				jsxs(_components.span, {
					className: "line",
					children: [
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "bool"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " To"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "("
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "float"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: " x"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", "
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "float"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: " y"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", "
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "float"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: " z"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", "
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "int"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: " interior"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " ="
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " 0"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ");"
						})
					]
				}),
				"\n",
				jsxs(_components.span, {
					className: "line",
					children: [
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "bool"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " Forward"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "("
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "float"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: " distance"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ");"
						})
					]
				}),
				"\n",
				jsxs(_components.span, {
					className: "line",
					children: [
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "bool"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " MapPosition"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "("
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "float"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: " x"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", "
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "float"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: " y"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", "
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "bool"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: " spawnUnderwater"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " ="
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " false"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ");"
						})
					]
				}),
				"\n",
				jsxs(_components.span, {
					className: "line",
					children: [
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "bool"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " Marker"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "("
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "bool"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#E36209",
								"--shiki-dark": "#FFAB70"
							},
							children: " spawnUnderwater"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " ="
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " false"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ");"
						})
					]
				}),
				"\n",
				jsxs(_components.span, {
					className: "line",
					children: [
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "bool"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " Center"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "();"
						})
					]
				}),
				"\n",
				jsxs(_components.span, {
					className: "line",
					children: [
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "void"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " Process"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "();"
						})
					]
				})
			] })
		}) }),
		"\n",
		jsxs(_components.ul, { children: [
			"\n",
			jsxs(_components.li, { children: [
				jsx(_components.code, { children: "TryGetCurrentPosition" }),
				" — 读取当前位置；玩家不可用时返回 ",
				jsx(_components.code, { children: "false" }),
				"，",
				jsx(_components.code, { children: "position" }),
				" 保持不变。"
			] }),
			"\n",
			jsxs(_components.li, { children: [jsx(_components.code, { children: "GetCurrentPosition" }), " — 便捷读取，失败时返回安全默认值。"] }),
			"\n",
			jsxs(_components.li, { children: [jsx(_components.code, { children: "To" }), " — 传送到指定坐标；玩家在载具内时会保留载具并重新落位。"] }),
			"\n",
			jsxs(_components.li, { children: [jsx(_components.code, { children: "Forward" }), " — 朝面前方向移动指定距离。"] }),
			"\n",
			jsxs(_components.li, { children: [jsx(_components.code, { children: "MapPosition" }), " — 按地图坐标传送（x，y 自动计算地面 z），可选水面落点。"] }),
			"\n",
			jsxs(_components.li, { children: [
				jsx(_components.code, { children: "Marker" }),
				" — 传送到雷达标记点；没有标记时返回 ",
				jsx(_components.code, { children: "false" }),
				"，仅 SA 实现。"
			] }),
			"\n",
			jsxs(_components.li, { children: [jsx(_components.code, { children: "Center" }), " — 传送到世界原点。"] }),
			"\n"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "Teleport::Process()" }),
			" 没有宿主可见的持续策略；领域启用后仍由 ",
			jsx(_components.code, { children: "Core::Process()" }),
			" 统一调度，宿主不要直接调用。"
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
