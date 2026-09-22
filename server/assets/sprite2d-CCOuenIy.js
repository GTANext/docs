import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/plugins/entities/sprite2d.mdx?collection=docs
var frontmatter = {
	"title": "精灵 CSprite2d",
	"description": "2D 贴图矩形与进度条"
};
var _markdown = "\n\n`CSprite2d.h`\n\n2D 贴图矩形。画在 `drawingEvent`；先 `CTxdStore::SetCurrentTxd` 再 `SetTexture`。\n\n## 设贴图 [#设贴图]\n\n<Api name=\"SetTexture / Delete\">\n  <CodeBlockTabs defaultValue=\"签名\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"签名\">\n        签名\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"示例\">\n        示例\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"签名\">\n      ```cpp\n      void SetTexture(char* name);\n      void SetTexture(char* name, char* maskName);\n      void Delete();\n      RwTexture* m_pTexture;\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"示例\">\n      ```cpp\n      static CSprite2d g_icon;\n\n      // initRw 或 Reset 后：\n      // CTxdStore::SetCurrentTxd(slot);\n      g_icon.SetTexture(\"icon\");\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Api>\n\n## 画精灵 [#画精灵]\n\n<Api name=\"Draw\">\n  多种重载：xywh、`CRect`、四角 UV、四角色。\n\n  <CodeBlockTabs defaultValue=\"签名\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"签名\">\n        签名\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"示例\">\n        示例\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"签名\">\n      ```cpp\n      void Draw(float x, float y, float width, float height, CRGBA const& color);\n      void Draw(CRect const& posn, CRGBA const& color);\n      void Draw(CRect const& posn, CRGBA const& color, float u1, float v1, float u2, float v2, float u3, float v3, float u4, float v4);\n      void Draw(CRect const& posn, CRGBA const& color1, CRGBA const& color2, CRGBA const& color3, CRGBA const& color4);\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"示例\">\n      ```cpp\n      plugin::Events::drawingEvent += [] {\n          CRGBA white(255, 255, 255, 255);\n          g_icon.Draw(100.0f, 100.0f, 64.0f, 64.0f, white);\n      };\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Api>\n\n## 纯色矩形 [#纯色矩形]\n\n<Api name=\"DrawRect / DrawRectXLU\">\n  <CodeBlockTabs defaultValue=\"签名\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"签名\">\n        签名\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"示例\">\n        示例\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"签名\">\n      ```cpp\n      static void DrawRect(CRect const& posn, CRGBA const& color);\n      static void DrawRect(CRect const& posn, CRGBA const& color1, CRGBA const& color2, CRGBA const& color3, CRGBA const& color4);\n      static void DrawRectXLU(CRect const& posn, CRGBA const& color1, CRGBA const& color2, CRGBA const& color3, CRGBA const& color4);\n      static void DrawAnyRect(float x1, float y1, float x2, float y2, float x3, float y3, float x4, float y4, CRGBA const& color1, CRGBA const& color2, CRGBA const& color3, CRGBA const& color4);\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"示例\">\n      ```cpp\n      CSprite2d::DrawRect(CRect(10.0f, 10.0f, 200.0f, 40.0f), CRGBA(0, 0, 0, 160));\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Api>\n\n## 进度条 [#进度条]\n\n<Api name=\"DrawBarChart\">\n  `progress` 0..100。\n\n  <CodeBlockTabs defaultValue=\"签名\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"签名\">\n        签名\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"示例\">\n        示例\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"签名\">\n      ```cpp\n      static void DrawBarChart(float x, float y, unsigned short width, unsigned char height, float progress,\n          signed char progressAdd, unsigned char drawPercentage, unsigned char drawBlackBorder, CRGBA color, CRGBA addColor);\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"示例\">\n      ```cpp\n      CSprite2d::DrawBarChart(20.0f, 20.0f, 100, 10, 75.0f, 0, 0, 1, CRGBA(0, 200, 0, 255), CRGBA(0, 0, 0, 0));\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Api>\n\n## 渲染状态 [#渲染状态]\n\n<Api name=\"SetRenderState / DrawTxRect\">\n  部分静态 Draw 需先设。\n\n  <CodeBlockTabs defaultValue=\"签名\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"签名\">\n        签名\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"示例\">\n        示例\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"签名\">\n      ```cpp\n      void SetRenderState();\n      static void DrawTxRect(CRect const& posn, CRGBA const& color);\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"示例\">\n      ```cpp\n      g_icon.SetRenderState();\n      CSprite2d::DrawTxRect(rect, color);\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Api>\n\n## 寻址模式 [#寻址模式]\n\n<Api name=\"SetAddressing / SetAddressingUV\">\n  ```cpp\n  void SetAddressing(RwTextureAddressMode modeUV);\n  void SetAddressingUV(RwTextureAddressMode modeU, RwTextureAddressMode modeV);\n  ```\n</Api>\n\n坐标换算用 [Screen](/docs/plugins/extensions/screen)。批量资源可用 [SpriteLoader](/docs/plugins/utils/image-sprite)。\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "`CSprite2d.h`"
		},
		{
			"heading": void 0,
			"content": "2D 贴图矩形。画在 `drawingEvent`；先 `CTxdStore::SetCurrentTxd` 再 `SetTexture`。"
		},
		{
			"heading": "画精灵",
			"content": "多种重载：xywh、`CRect`、四角 UV、四角色。"
		},
		{
			"heading": "进度条",
			"content": "`progress` 0..100。"
		},
		{
			"heading": "渲染状态",
			"content": "部分静态 Draw 需先设。"
		},
		{
			"heading": "寻址模式",
			"content": "坐标换算用 Screen。批量资源可用 SpriteLoader。"
		}
	],
	"headings": [
		{
			"id": "设贴图",
			"content": "设贴图"
		},
		{
			"id": "画精灵",
			"content": "画精灵"
		},
		{
			"id": "纯色矩形",
			"content": "纯色矩形"
		},
		{
			"id": "进度条",
			"content": "进度条"
		},
		{
			"id": "渲染状态",
			"content": "渲染状态"
		},
		{
			"id": "寻址模式",
			"content": "寻址模式"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#设贴图",
		title: jsx(Fragment, { children: "设贴图" })
	},
	{
		depth: 2,
		url: "#画精灵",
		title: jsx(Fragment, { children: "画精灵" })
	},
	{
		depth: 2,
		url: "#纯色矩形",
		title: jsx(Fragment, { children: "纯色矩形" })
	},
	{
		depth: 2,
		url: "#进度条",
		title: jsx(Fragment, { children: "进度条" })
	},
	{
		depth: 2,
		url: "#渲染状态",
		title: jsx(Fragment, { children: "渲染状态" })
	},
	{
		depth: 2,
		url: "#寻址模式",
		title: jsx(Fragment, { children: "寻址模式" })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h2: "h2",
		p: "p",
		pre: "pre",
		span: "span",
		...props.components
	}, { Api, CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger } = _components;
	if (!Api) _missingMdxReference("Api", true);
	if (!CodeBlockTab) _missingMdxReference("CodeBlockTab", true);
	if (!CodeBlockTabs) _missingMdxReference("CodeBlockTabs", true);
	if (!CodeBlockTabsList) _missingMdxReference("CodeBlockTabsList", true);
	if (!CodeBlockTabsTrigger) _missingMdxReference("CodeBlockTabsTrigger", true);
	return jsxs(Fragment, { children: [
		jsx(_components.p, { children: jsx(_components.code, { children: "CSprite2d.h" }) }),
		"\n",
		jsxs(_components.p, { children: [
			"2D 贴图矩形。画在 ",
			jsx(_components.code, { children: "drawingEvent" }),
			"；先 ",
			jsx(_components.code, { children: "CTxdStore::SetCurrentTxd" }),
			" 再 ",
			jsx(_components.code, { children: "SetTexture" }),
			"。"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "设贴图",
			children: "设贴图"
		}),
		"\n",
		jsx(Api, {
			name: "SetTexture / Delete",
			children: jsxs(CodeBlockTabs, {
				defaultValue: "签名",
				children: [
					jsxs(CodeBlockTabsList, { children: [jsx(CodeBlockTabsTrigger, {
						value: "签名",
						children: "签名"
					}), jsx(CodeBlockTabsTrigger, {
						value: "示例",
						children: "示例"
					})] }),
					jsx(CodeBlockTab, {
						value: "签名",
						children: jsx(Fragment, { children: jsx(_components.pre, {
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
											children: "void"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: " SetTexture"
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
											children: "char*"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " name"
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
											children: "void"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: " SetTexture"
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
											children: "char*"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " name"
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
											children: "char*"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " maskName"
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
											children: "void"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: " Delete"
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
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: "RwTexture"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: "*"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: " m_pTexture;"
										})
									]
								})
							] })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "示例",
						children: jsx(Fragment, { children: jsx(_components.pre, {
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
									children: [jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "static"
									}), jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " CSprite2d g_icon;"
									})]
								}),
								"\n",
								jsx(_components.span, { className: "line" }),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, {
										style: {
											"--shiki-light": "#6A737D",
											"--shiki-dark": "#6A737D"
										},
										children: "// initRw 或 Reset 后："
									})
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, {
										style: {
											"--shiki-light": "#6A737D",
											"--shiki-dark": "#6A737D"
										},
										children: "// CTxdStore::SetCurrentTxd(slot);"
									})
								}),
								"\n",
								jsxs(_components.span, {
									className: "line",
									children: [
										jsx(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: "g_icon."
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: "SetTexture"
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
												"--shiki-light": "#032F62",
												"--shiki-dark": "#9ECBFF"
											},
											children: "\"icon\""
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: ");"
										})
									]
								})
							] })
						}) })
					})
				]
			})
		}),
		"\n",
		jsx(_components.h2, {
			id: "画精灵",
			children: "画精灵"
		}),
		"\n",
		jsxs(Api, {
			name: "Draw",
			children: [jsxs(_components.p, { children: [
				"多种重载：xywh、",
				jsx(_components.code, { children: "CRect" }),
				"、四角 UV、四角色。"
			] }), jsxs(CodeBlockTabs, {
				defaultValue: "签名",
				children: [
					jsxs(CodeBlockTabsList, { children: [jsx(CodeBlockTabsTrigger, {
						value: "签名",
						children: "签名"
					}), jsx(CodeBlockTabsTrigger, {
						value: "示例",
						children: "示例"
					})] }),
					jsx(CodeBlockTab, {
						value: "签名",
						children: jsx(Fragment, { children: jsx(_components.pre, {
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
											children: "void"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: " Draw"
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
											children: " width"
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
											children: " height"
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
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: "CRGBA"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " const&"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " color"
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
											children: "void"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: " Draw"
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
											children: "CRect"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " const&"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " posn"
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
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: "CRGBA"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " const&"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " color"
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
											children: "void"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: " Draw"
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
											children: "CRect"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " const&"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " posn"
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
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: "CRGBA"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " const&"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " color"
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
											children: " u1"
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
											children: " v1"
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
											children: " u2"
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
											children: " v2"
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
											children: " u3"
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
											children: " v3"
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
											children: " u4"
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
											children: " v4"
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
											children: "void"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: " Draw"
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
											children: "CRect"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " const&"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " posn"
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
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: "CRGBA"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " const&"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " color1"
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
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: "CRGBA"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " const&"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " color2"
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
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: "CRGBA"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " const&"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " color3"
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
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: "CRGBA"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " const&"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " color4"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: ");"
										})
									]
								})
							] })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "示例",
						children: jsx(Fragment, { children: jsx(_components.pre, {
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
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: "plugin"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: "::"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: "Events"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: "::drawingEvent "
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: "+="
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: " [] {"
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
											children: "    CRGBA"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: " white"
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
												"--shiki-light": "#005CC5",
												"--shiki-dark": "#79B8FF"
											},
											children: "255"
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
												"--shiki-light": "#005CC5",
												"--shiki-dark": "#79B8FF"
											},
											children: "255"
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
												"--shiki-light": "#005CC5",
												"--shiki-dark": "#79B8FF"
											},
											children: "255"
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
												"--shiki-light": "#005CC5",
												"--shiki-dark": "#79B8FF"
											},
											children: "255"
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
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: "    g_icon."
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: "Draw"
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
												"--shiki-light": "#005CC5",
												"--shiki-dark": "#79B8FF"
											},
											children: "100.0"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: "f"
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
												"--shiki-light": "#005CC5",
												"--shiki-dark": "#79B8FF"
											},
											children: "100.0"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: "f"
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
												"--shiki-light": "#005CC5",
												"--shiki-dark": "#79B8FF"
											},
											children: "64.0"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: "f"
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
												"--shiki-light": "#005CC5",
												"--shiki-dark": "#79B8FF"
											},
											children: "64.0"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: "f"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: ", white);"
										})
									]
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "};"
									})
								})
							] })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsx(_components.h2, {
			id: "纯色矩形",
			children: "纯色矩形"
		}),
		"\n",
		jsx(Api, {
			name: "DrawRect / DrawRectXLU",
			children: jsxs(CodeBlockTabs, {
				defaultValue: "签名",
				children: [
					jsxs(CodeBlockTabsList, { children: [jsx(CodeBlockTabsTrigger, {
						value: "签名",
						children: "签名"
					}), jsx(CodeBlockTabsTrigger, {
						value: "示例",
						children: "示例"
					})] }),
					jsx(CodeBlockTab, {
						value: "签名",
						children: jsx(Fragment, { children: jsx(_components.pre, {
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
											children: "static"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " void"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: " DrawRect"
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
											children: "CRect"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " const&"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " posn"
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
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: "CRGBA"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " const&"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " color"
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
											children: "static"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " void"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: " DrawRect"
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
											children: "CRect"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " const&"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " posn"
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
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: "CRGBA"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " const&"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " color1"
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
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: "CRGBA"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " const&"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " color2"
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
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: "CRGBA"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " const&"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " color3"
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
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: "CRGBA"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " const&"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " color4"
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
											children: "static"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " void"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: " DrawRectXLU"
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
											children: "CRect"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " const&"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " posn"
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
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: "CRGBA"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " const&"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " color1"
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
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: "CRGBA"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " const&"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " color2"
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
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: "CRGBA"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " const&"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " color3"
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
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: "CRGBA"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " const&"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " color4"
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
											children: "static"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " void"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: " DrawAnyRect"
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
											children: " x1"
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
											children: " y1"
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
											children: " x2"
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
											children: " y2"
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
											children: " x3"
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
											children: " y3"
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
											children: " x4"
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
											children: " y4"
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
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: "CRGBA"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " const&"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " color1"
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
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: "CRGBA"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " const&"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " color2"
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
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: "CRGBA"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " const&"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " color3"
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
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: "CRGBA"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " const&"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " color4"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: ");"
										})
									]
								})
							] })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "示例",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "CSprite2d"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "::"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "DrawRect"
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
										children: "CRect"
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
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "10.0"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "f"
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
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "10.0"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "f"
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
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "200.0"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "f"
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
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "40.0"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "f"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "), "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "CRGBA"
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
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "0"
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
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "0"
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
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "0"
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
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "160"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "));"
									})
								]
							}) })
						}) })
					})
				]
			})
		}),
		"\n",
		jsx(_components.h2, {
			id: "进度条",
			children: "进度条"
		}),
		"\n",
		jsxs(Api, {
			name: "DrawBarChart",
			children: [jsxs(_components.p, { children: [jsx(_components.code, { children: "progress" }), " 0..100。"] }), jsxs(CodeBlockTabs, {
				defaultValue: "签名",
				children: [
					jsxs(CodeBlockTabsList, { children: [jsx(CodeBlockTabsTrigger, {
						value: "签名",
						children: "签名"
					}), jsx(CodeBlockTabsTrigger, {
						value: "示例",
						children: "示例"
					})] }),
					jsx(CodeBlockTab, {
						value: "签名",
						children: jsx(Fragment, { children: jsx(_components.pre, {
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
											children: "static"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " void"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: " DrawBarChart"
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
											children: "unsigned"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " short"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " width"
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
											children: "unsigned"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " char"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " height"
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
											children: " progress"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: ","
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
											children: "    signed"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " char"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " progressAdd"
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
											children: "unsigned"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " char"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " drawPercentage"
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
											children: "unsigned"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " char"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " drawBlackBorder"
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
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: "CRGBA"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " color"
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
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: "CRGBA"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " addColor"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: ");"
										})
									]
								})
							] })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "示例",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "CSprite2d"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "::"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "DrawBarChart"
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
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "20.0"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "f"
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
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "20.0"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "f"
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
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "100"
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
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "10"
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
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "75.0"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "f"
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
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "0"
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
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "0"
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
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "1"
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
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "CRGBA"
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
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "0"
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
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "200"
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
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "0"
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
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "255"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "), "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "CRGBA"
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
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "0"
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
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "0"
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
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "0"
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
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "0"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "));"
									})
								]
							}) })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsx(_components.h2, {
			id: "渲染状态",
			children: "渲染状态"
		}),
		"\n",
		jsxs(Api, {
			name: "SetRenderState / DrawTxRect",
			children: [jsx(_components.p, { children: "部分静态 Draw 需先设。" }), jsxs(CodeBlockTabs, {
				defaultValue: "签名",
				children: [
					jsxs(CodeBlockTabsList, { children: [jsx(CodeBlockTabsTrigger, {
						value: "签名",
						children: "签名"
					}), jsx(CodeBlockTabsTrigger, {
						value: "示例",
						children: "示例"
					})] }),
					jsx(CodeBlockTab, {
						value: "签名",
						children: jsx(Fragment, { children: jsx(_components.pre, {
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
											children: "void"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: " SetRenderState"
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
											children: "static"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " void"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: " DrawTxRect"
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
											children: "CRect"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " const&"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " posn"
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
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: "CRGBA"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " const&"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " color"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: ");"
										})
									]
								})
							] })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "示例",
						children: jsx(Fragment, { children: jsx(_components.pre, {
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
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: "g_icon."
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: "SetRenderState"
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
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: "CSprite2d"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: "::"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: "DrawTxRect"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: "(rect, color);"
										})
									]
								})
							] })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsx(_components.h2, {
			id: "寻址模式",
			children: "寻址模式"
		}),
		"\n",
		jsx(Api, {
			name: "SetAddressing / SetAddressingUV",
			children: jsx(Fragment, { children: jsx(_components.pre, {
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
								children: "void"
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#6F42C1",
									"--shiki-dark": "#B392F0"
								},
								children: " SetAddressing"
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
								children: "RwTextureAddressMode"
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#E36209",
									"--shiki-dark": "#FFAB70"
								},
								children: " modeUV"
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
								children: "void"
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#6F42C1",
									"--shiki-dark": "#B392F0"
								},
								children: " SetAddressingUV"
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
								children: "RwTextureAddressMode"
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#E36209",
									"--shiki-dark": "#FFAB70"
								},
								children: " modeU"
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
									"--shiki-light": "#6F42C1",
									"--shiki-dark": "#B392F0"
								},
								children: "RwTextureAddressMode"
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#E36209",
									"--shiki-dark": "#FFAB70"
								},
								children: " modeV"
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#24292E",
									"--shiki-dark": "#E1E4E8"
								},
								children: ");"
							})
						]
					})
				] })
			}) })
		}),
		"\n",
		jsxs(_components.p, { children: [
			"坐标换算用 ",
			jsx(_components.a, {
				href: "/docs/plugins/extensions/screen",
				children: "Screen"
			}),
			"。批量资源可用 ",
			jsx(_components.a, {
				href: "/docs/plugins/utils/image-sprite",
				children: "SpriteLoader"
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
function _missingMdxReference(id, component) {
	throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
//#endregion
export { _markdown, MDXContent as default, frontmatter, structuredData, toc };
