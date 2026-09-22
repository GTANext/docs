import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/plugins/entities/time-cycle.mdx?collection=docs
var frontmatter = {
	"title": "时段光 CTimeCycle",
	"description": "时段光照、雾与额外色"
};
var _markdown = "\n\n`CTimeCycle.h`\n\n时段光照、雾、远裁、天空色。改当前色要懂插值，否则闪。\n\n## 当前颜色集 [#当前颜色集]\n\n<Api name=\"m_CurrentColours\">\n  当前插值结果。读环境光 / 天空常用。\n\n  <CodeBlockTabs defaultValue=\"签名\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"签名\">\n        签名\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"示例\">\n        示例\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"签名\">\n      ```cpp\n      static CColourSet& m_CurrentColours;\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"示例\">\n      ```cpp\n      // 字段名见 CColourSet；如 ambient / sky 等\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Api>\n\n## 读环境光 [#读环境光]\n\n<Api name=\"GetAmbientRed / Green / Blue\">\n  <CodeBlockTabs defaultValue=\"签名\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"签名\">\n        签名\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"示例\">\n        示例\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"签名\">\n      ```cpp\n      static float GetAmbientRed();\n      static float GetAmbientGreen();\n      static float GetAmbientBlue();\n      static float GetAmbientRed_Obj();\n      static float GetAmbientGreen_Obj();\n      static float GetAmbientBlue_Obj();\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"示例\">\n      ```cpp\n      float ar = CTimeCycle::GetAmbientRed();\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Api>\n\n## 额外色 [#额外色]\n\n<Api name=\"StartExtraColour / StopExtraColour\">\n  室内 / 特殊场景染色。\n\n  <CodeBlockTabs defaultValue=\"签名\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"签名\">\n        签名\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"示例\">\n        示例\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"签名\">\n      ```cpp\n      static void StartExtraColour(int colour, bool bNoExtraColorInterior);\n      static void StopExtraColour(bool bNoExtraColorInterior);\n      static int& m_ExtraColour;\n      static unsigned int& m_bExtraColourOn;\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"示例\">\n      ```cpp\n      // CTimeCycle::StartExtraColour(id, false);\n      // CTimeCycle::StopExtraColour(false);\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Api>\n\n## 太阳方向 [#太阳方向]\n\n<Api name=\"m_VectorToSun / m_vecDirnLightToSun\">\n  影子方向相关。\n\n  <CodeBlockTabs defaultValue=\"签名\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"签名\">\n        签名\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"示例\">\n        示例\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"签名\">\n      ```cpp\n      static CVector* m_VectorToSun; // [16]\n      static RwV3d& m_vecDirnLightToSun;\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"示例\">\n      ```cpp\n      // CVector sun = CTimeCycle::m_VectorToSun[CTimeCycle::m_CurrentStoredValue];\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Api>\n\n## 盒区域 [#盒区域]\n\n<Api name=\"AddOne / FindTimeCycleBox\">\n  区域覆盖远裁 / 额外色。\n\n  ```cpp\n  static void AddOne(CBox& box, short farclip, int extracolor, float strength, float falloff, float lodDistMult);\n  static void FindTimeCycleBox(CVector pos, CTimeCycleBox** outbox, float* interpolation, bool bCheckLod, bool bCheckFar, CTimeCycleBox* exclude);\n  static CTimeCycleBox* m_aBoxes;\n  static unsigned int& m_NumBoxes;\n  ```\n</Api>\n\n## 表数据 [#表数据]\n\n<Api name=\"m_nAmbientRed / m_fFarClip\">\n  按天气 × 小时表。直接改表影响全局，务必备份。\n\n  ```cpp\n  static unsigned char* m_nAmbientRed;\n  static unsigned char* m_nSkyTopRed;\n  static signed short* m_fFarClip;\n  static signed short* m_fFogStart;\n  // 同结构多通道见头文件\n  ```\n</Api>\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "`CTimeCycle.h`"
		},
		{
			"heading": void 0,
			"content": "时段光照、雾、远裁、天空色。改当前色要懂插值，否则闪。"
		},
		{
			"heading": "当前颜色集",
			"content": "当前插值结果。读环境光 / 天空常用。"
		},
		{
			"heading": "额外色",
			"content": "室内 / 特殊场景染色。"
		},
		{
			"heading": "太阳方向",
			"content": "影子方向相关。"
		},
		{
			"heading": "盒区域",
			"content": "区域覆盖远裁 / 额外色。"
		},
		{
			"heading": "表数据",
			"content": "按天气 × 小时表。直接改表影响全局，务必备份。"
		}
	],
	"headings": [
		{
			"id": "当前颜色集",
			"content": "当前颜色集"
		},
		{
			"id": "读环境光",
			"content": "读环境光"
		},
		{
			"id": "额外色",
			"content": "额外色"
		},
		{
			"id": "太阳方向",
			"content": "太阳方向"
		},
		{
			"id": "盒区域",
			"content": "盒区域"
		},
		{
			"id": "表数据",
			"content": "表数据"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#当前颜色集",
		title: jsx(Fragment, { children: "当前颜色集" })
	},
	{
		depth: 2,
		url: "#读环境光",
		title: jsx(Fragment, { children: "读环境光" })
	},
	{
		depth: 2,
		url: "#额外色",
		title: jsx(Fragment, { children: "额外色" })
	},
	{
		depth: 2,
		url: "#太阳方向",
		title: jsx(Fragment, { children: "太阳方向" })
	},
	{
		depth: 2,
		url: "#盒区域",
		title: jsx(Fragment, { children: "盒区域" })
	},
	{
		depth: 2,
		url: "#表数据",
		title: jsx(Fragment, { children: "表数据" })
	}
];
function _createMdxContent(props) {
	const _components = {
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
		jsx(_components.p, { children: jsx(_components.code, { children: "CTimeCycle.h" }) }),
		"\n",
		jsx(_components.p, { children: "时段光照、雾、远裁、天空色。改当前色要懂插值，否则闪。" }),
		"\n",
		jsx(_components.h2, {
			id: "当前颜色集",
			children: "当前颜色集"
		}),
		"\n",
		jsxs(Api, {
			name: "m_CurrentColours",
			children: [jsx(_components.p, { children: "当前插值结果。读环境光 / 天空常用。" }), jsxs(CodeBlockTabs, {
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
							children: jsx(_components.code, { children: jsxs(_components.span, {
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " CColourSet"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " m_CurrentColours;"
									})
								]
							}) })
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
							children: jsx(_components.code, { children: jsx(_components.span, {
								className: "line",
								children: jsx(_components.span, {
									style: {
										"--shiki-light": "#6A737D",
										"--shiki-dark": "#6A737D"
									},
									children: "// 字段名见 CColourSet；如 ambient / sky 等"
								})
							}) })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsx(_components.h2, {
			id: "读环境光",
			children: "读环境光"
		}),
		"\n",
		jsx(Api, {
			name: "GetAmbientRed / Green / Blue",
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
											children: " float"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: " GetAmbientRed"
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
											children: " float"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: " GetAmbientGreen"
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
											children: " float"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: " GetAmbientBlue"
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
											children: " float"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: " GetAmbientRed_Obj"
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
											children: " float"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: " GetAmbientGreen_Obj"
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
											children: " float"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: " GetAmbientBlue_Obj"
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
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "float"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " ar "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "="
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " CTimeCycle"
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
										children: "GetAmbientRed"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "();"
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
			id: "额外色",
			children: "额外色"
		}),
		"\n",
		jsxs(Api, {
			name: "StartExtraColour / StopExtraColour",
			children: [jsx(_components.p, { children: "室内 / 特殊场景染色。" }), jsxs(CodeBlockTabs, {
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
											children: " StartExtraColour"
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
											children: "int"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " colour"
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
											children: " bNoExtraColorInterior"
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
											children: " StopExtraColour"
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
											children: " bNoExtraColorInterior"
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
											children: " int&"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: " m_ExtraColour;"
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
											children: " unsigned"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " int&"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: " m_bExtraColourOn;"
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
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, {
										style: {
											"--shiki-light": "#6A737D",
											"--shiki-dark": "#6A737D"
										},
										children: "// CTimeCycle::StartExtraColour(id, false);"
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
										children: "// CTimeCycle::StopExtraColour(false);"
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
			id: "太阳方向",
			children: "太阳方向"
		}),
		"\n",
		jsxs(Api, {
			name: "m_VectorToSun / m_vecDirnLightToSun",
			children: [jsx(_components.p, { children: "影子方向相关。" }), jsxs(CodeBlockTabs, {
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
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: " CVector"
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
											children: " m_VectorToSun;"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#6A737D",
												"--shiki-dark": "#6A737D"
											},
											children: " // [16]"
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
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: " RwV3d"
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
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: " m_vecDirnLightToSun;"
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
							children: jsx(_components.code, { children: jsx(_components.span, {
								className: "line",
								children: jsx(_components.span, {
									style: {
										"--shiki-light": "#6A737D",
										"--shiki-dark": "#6A737D"
									},
									children: "// CVector sun = CTimeCycle::m_VectorToSun[CTimeCycle::m_CurrentStoredValue];"
								})
							}) })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsx(_components.h2, {
			id: "盒区域",
			children: "盒区域"
		}),
		"\n",
		jsxs(Api, {
			name: "AddOne / FindTimeCycleBox",
			children: [jsx(_components.p, { children: "区域覆盖远裁 / 额外色。" }), jsx(Fragment, { children: jsx(_components.pre, {
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
								children: " AddOne"
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
								children: "CBox"
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
								children: " box"
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
								children: "short"
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#E36209",
									"--shiki-dark": "#FFAB70"
								},
								children: " farclip"
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
								children: " extracolor"
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
								children: " strength"
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
								children: " falloff"
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
								children: " lodDistMult"
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
								children: " FindTimeCycleBox"
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
								children: "CVector"
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#E36209",
									"--shiki-dark": "#FFAB70"
								},
								children: " pos"
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
								children: "CTimeCycleBox"
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#D73A49",
									"--shiki-dark": "#F97583"
								},
								children: "**"
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#E36209",
									"--shiki-dark": "#FFAB70"
								},
								children: " outbox"
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
								children: "float*"
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#E36209",
									"--shiki-dark": "#FFAB70"
								},
								children: " interpolation"
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
								children: " bCheckLod"
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
								children: " bCheckFar"
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
								children: "CTimeCycleBox"
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
									"--shiki-light": "#E36209",
									"--shiki-dark": "#FFAB70"
								},
								children: " exclude"
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
									"--shiki-light": "#24292E",
									"--shiki-dark": "#E1E4E8"
								},
								children: " CTimeCycleBox"
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
								children: " m_aBoxes;"
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
								children: " unsigned"
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#D73A49",
									"--shiki-dark": "#F97583"
								},
								children: " int&"
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#24292E",
									"--shiki-dark": "#E1E4E8"
								},
								children: " m_NumBoxes;"
							})
						]
					})
				] })
			}) })]
		}),
		"\n",
		jsx(_components.h2, {
			id: "表数据",
			children: "表数据"
		}),
		"\n",
		jsxs(Api, {
			name: "m_nAmbientRed / m_fFarClip",
			children: [jsx(_components.p, { children: "按天气 × 小时表。直接改表影响全局，务必备份。" }), jsx(Fragment, { children: jsx(_components.pre, {
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
								children: " unsigned"
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#D73A49",
									"--shiki-dark": "#F97583"
								},
								children: " char*"
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#24292E",
									"--shiki-dark": "#E1E4E8"
								},
								children: " m_nAmbientRed;"
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
								children: " unsigned"
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#D73A49",
									"--shiki-dark": "#F97583"
								},
								children: " char*"
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#24292E",
									"--shiki-dark": "#E1E4E8"
								},
								children: " m_nSkyTopRed;"
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
								children: " signed"
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#D73A49",
									"--shiki-dark": "#F97583"
								},
								children: " short*"
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#24292E",
									"--shiki-dark": "#E1E4E8"
								},
								children: " m_fFarClip;"
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
								children: " signed"
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#D73A49",
									"--shiki-dark": "#F97583"
								},
								children: " short*"
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#24292E",
									"--shiki-dark": "#E1E4E8"
								},
								children: " m_fFogStart;"
							})
						]
					}),
					"\n",
					jsx(_components.span, {
						className: "line",
						children: jsx(_components.span, {
							style: {
								"--shiki-light": "#6A737D",
								"--shiki-dark": "#6A737D"
							},
							children: "// 同结构多通道见头文件"
						})
					})
				] })
			}) })]
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
