import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/plugins/utils/image-sprite.mdx?collection=docs
var frontmatter = {
	"title": "图片精灵 Image / SpriteLoader",
	"description": "加载图片与精灵绘制"
};
var _markdown = "\n\n`Image.h` / `SpriteLoader.h` · III / VC / SA / IV\n\n## 图片字段与释放 [#图片字段与释放]\n\n`CreateImage*` 创建后，用完必须 `Release`。创建入口见 [杂项工具](/docs/plugins/utils/other)。\n\n<CodeBlockTabs defaultValue=\"签名\">\n  <CodeBlockTabsList>\n    <CodeBlockTabsTrigger value=\"签名\">\n      签名\n    </CodeBlockTabsTrigger>\n\n    <CodeBlockTabsTrigger value=\"示例\">\n      示例\n    </CodeBlockTabsTrigger>\n  </CodeBlockTabsList>\n\n  <CodeBlockTab value=\"签名\">\n    ```cpp\n    class Image {\n        int32_t width;\n        int32_t height;\n        int32_t channels;\n        uint8_t* pixels;\n        void Release();\n    };\n    ```\n  </CodeBlockTab>\n\n  <CodeBlockTab value=\"示例\">\n    ```cpp\n    plugin::Image* img = nullptr;\n    if (plugin::CreateImageFromFile(path, img)) {\n        int w = img->width;\n        img->Release();\n    }\n    ```\n  </CodeBlockTab>\n</CodeBlockTabs>\n\n## 从文件夹加载精灵 [#从文件夹加载精灵]\n\n默认扩展名 `png`，可用 `SetExtension` 修改。\n\n<CodeBlockTabs defaultValue=\"签名\">\n  <CodeBlockTabsList>\n    <CodeBlockTabsTrigger value=\"签名\">\n      签名\n    </CodeBlockTabsTrigger>\n\n    <CodeBlockTabsTrigger value=\"示例\">\n      示例\n    </CodeBlockTabsTrigger>\n  </CodeBlockTabsList>\n\n  <CodeBlockTab value=\"签名\">\n    ```cpp\n    bool LoadAllSpritesFromFolder(std::string const& path);\n    texClass* LoadSpriteFromFolder(std::string const& file);\n    ```\n  </CodeBlockTab>\n\n  <CodeBlockTab value=\"示例\">\n    ```cpp\n    #include \"SpriteLoader.h\"\n\n    static plugin::SpriteLoader g_sprites;\n\n    plugin::Events::initRwEvent += [] {\n        g_sprites.SetExtension(\"png\");\n        g_sprites.LoadAllSpritesFromFolder(PLUGIN_PATH(\"sprites\"));\n    };\n    ```\n  </CodeBlockTab>\n</CodeBlockTabs>\n\n## 从 txd 加载 [#从-txd-加载]\n\n<CodeBlockTabs defaultValue=\"签名\">\n  <CodeBlockTabsList>\n    <CodeBlockTabsTrigger value=\"签名\">\n      签名\n    </CodeBlockTabsTrigger>\n\n    <CodeBlockTabsTrigger value=\"示例\">\n      示例\n    </CodeBlockTabsTrigger>\n  </CodeBlockTabsList>\n\n  <CodeBlockTab value=\"签名\">\n    ```cpp\n    bool LoadAllSpritesFromTxd(std::string const& path);\n    ```\n  </CodeBlockTab>\n\n  <CodeBlockTab value=\"示例\">\n    ```cpp\n    g_sprites.LoadAllSpritesFromTxd(PLUGIN_PATH(\"ui.txd\"));\n    ```\n  </CodeBlockTab>\n</CodeBlockTabs>\n\n## 按名取精灵 [#按名取精灵]\n\n不存在时结果为空。\n\n<CodeBlockTabs defaultValue=\"签名\">\n  <CodeBlockTabsList>\n    <CodeBlockTabsTrigger value=\"签名\">\n      签名\n    </CodeBlockTabsTrigger>\n\n    <CodeBlockTabsTrigger value=\"示例\">\n      示例\n    </CodeBlockTabsTrigger>\n  </CodeBlockTabsList>\n\n  <CodeBlockTab value=\"签名\">\n    ```cpp\n    CSprite2d GetSprite(std::string const& name);\n    CSprite2d GetSprite(uint32_t id);\n    texClass* GetTex(std::string const& name);\n    ```\n  </CodeBlockTab>\n\n  <CodeBlockTab value=\"示例\">\n    ```cpp\n    plugin::Events::drawingEvent += [] {\n        CSprite2d spr = g_sprites.GetSprite(\"icon\");\n    };\n    ```\n  </CodeBlockTab>\n</CodeBlockTabs>\n\n## 清理与选项 [#清理与选项]\n\n设备丢失 / 关闭 RW 时 `Clear`。\n\n<CodeBlockTabs defaultValue=\"签名\">\n  <CodeBlockTabsList>\n    <CodeBlockTabsTrigger value=\"签名\">\n      签名\n    </CodeBlockTabsTrigger>\n\n    <CodeBlockTabsTrigger value=\"示例\">\n      示例\n    </CodeBlockTabsTrigger>\n  </CodeBlockTabsList>\n\n  <CodeBlockTab value=\"签名\">\n    ```cpp\n    void Clear();\n    void SetMipMapOn(bool on);\n    void SetExtension(std::string const& ext);\n    uint32_t GetMemoryUsed();\n    ```\n  </CodeBlockTab>\n\n  <CodeBlockTab value=\"示例\">\n    ```cpp\n    plugin::Events::shutdownRwEvent += [] {\n        g_sprites.Clear();\n    };\n    g_sprites.SetMipMapOn(true);\n    ```\n  </CodeBlockTab>\n</CodeBlockTabs>\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "`Image.h` / `SpriteLoader.h` · III / VC / SA / IV"
		},
		{
			"heading": "图片字段与释放",
			"content": "`CreateImage*` 创建后，用完必须 `Release`。创建入口见 杂项工具。"
		},
		{
			"heading": "从文件夹加载精灵",
			"content": "默认扩展名 `png`，可用 `SetExtension` 修改。"
		},
		{
			"heading": "按名取精灵",
			"content": "不存在时结果为空。"
		},
		{
			"heading": "清理与选项",
			"content": "设备丢失 / 关闭 RW 时 `Clear`。"
		}
	],
	"headings": [
		{
			"id": "图片字段与释放",
			"content": "图片字段与释放"
		},
		{
			"id": "从文件夹加载精灵",
			"content": "从文件夹加载精灵"
		},
		{
			"id": "从-txd-加载",
			"content": "从 txd 加载"
		},
		{
			"id": "按名取精灵",
			"content": "按名取精灵"
		},
		{
			"id": "清理与选项",
			"content": "清理与选项"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#图片字段与释放",
		title: jsx(Fragment, { children: "图片字段与释放" })
	},
	{
		depth: 2,
		url: "#从文件夹加载精灵",
		title: jsx(Fragment, { children: "从文件夹加载精灵" })
	},
	{
		depth: 2,
		url: "#从-txd-加载",
		title: jsx(Fragment, { children: "从 txd 加载" })
	},
	{
		depth: 2,
		url: "#按名取精灵",
		title: jsx(Fragment, { children: "按名取精灵" })
	},
	{
		depth: 2,
		url: "#清理与选项",
		title: jsx(Fragment, { children: "清理与选项" })
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
	}, { CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger } = _components;
	if (!CodeBlockTab) _missingMdxReference("CodeBlockTab", true);
	if (!CodeBlockTabs) _missingMdxReference("CodeBlockTabs", true);
	if (!CodeBlockTabsList) _missingMdxReference("CodeBlockTabsList", true);
	if (!CodeBlockTabsTrigger) _missingMdxReference("CodeBlockTabsTrigger", true);
	return jsxs(Fragment, { children: [
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "Image.h" }),
			" / ",
			jsx(_components.code, { children: "SpriteLoader.h" }),
			" · III / VC / SA / IV"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "图片字段与释放",
			children: "图片字段与释放"
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "CreateImage*" }),
			" 创建后，用完必须 ",
			jsx(_components.code, { children: "Release" }),
			"。创建入口见 ",
			jsx(_components.a, {
				href: "/docs/plugins/utils/other",
				children: "杂项工具"
			}),
			"。"
		] }),
		"\n",
		jsxs(CodeBlockTabs, {
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
										children: "class"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " Image"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " {"
									})
								]
							}),
							"\n",
							jsxs(_components.span, {
								className: "line",
								children: [jsx(_components.span, {
									style: {
										"--shiki-light": "#D73A49",
										"--shiki-dark": "#F97583"
									},
									children: "    int32_t"
								}), jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: " width;"
								})]
							}),
							"\n",
							jsxs(_components.span, {
								className: "line",
								children: [jsx(_components.span, {
									style: {
										"--shiki-light": "#D73A49",
										"--shiki-dark": "#F97583"
									},
									children: "    int32_t"
								}), jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: " height;"
								})]
							}),
							"\n",
							jsxs(_components.span, {
								className: "line",
								children: [jsx(_components.span, {
									style: {
										"--shiki-light": "#D73A49",
										"--shiki-dark": "#F97583"
									},
									children: "    int32_t"
								}), jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: " channels;"
								})]
							}),
							"\n",
							jsxs(_components.span, {
								className: "line",
								children: [jsx(_components.span, {
									style: {
										"--shiki-light": "#D73A49",
										"--shiki-dark": "#F97583"
									},
									children: "    uint8_t*"
								}), jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: " pixels;"
								})]
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
										children: "    void"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " Release"
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
										children: "::Image"
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
										children: " img "
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
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " nullptr"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ";"
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
										children: "if"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " ("
									}),
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
										children: "CreateImageFromFile"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(path, img)) {"
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
										children: "    int"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " w "
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " img->width;"
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
										children: "    img->"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "Release"
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
							jsx(_components.span, {
								className: "line",
								children: jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "}"
								})
							})
						] })
					}) })
				})
			]
		}),
		"\n",
		jsx(_components.h2, {
			id: "从文件夹加载精灵",
			children: "从文件夹加载精灵"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"默认扩展名 ",
			jsx(_components.code, { children: "png" }),
			"，可用 ",
			jsx(_components.code, { children: "SetExtension" }),
			" 修改。"
		] }),
		"\n",
		jsxs(CodeBlockTabs, {
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
										children: "bool"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " LoadAllSpritesFromFolder"
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
										children: "std"
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
										children: "string"
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
										children: " path"
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
										children: "texClass"
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
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " LoadSpriteFromFolder"
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
										children: "std"
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
										children: "string"
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
										children: " file"
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
								children: [jsx(_components.span, {
									style: {
										"--shiki-light": "#D73A49",
										"--shiki-dark": "#F97583"
									},
									children: "#include"
								}), jsx(_components.span, {
									style: {
										"--shiki-light": "#032F62",
										"--shiki-dark": "#9ECBFF"
									},
									children: " \"SpriteLoader.h\""
								})]
							}),
							"\n",
							jsx(_components.span, { className: "line" }),
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
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " plugin"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "::SpriteLoader g_sprites;"
									})
								]
							}),
							"\n",
							jsx(_components.span, { className: "line" }),
							"\n",
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
										children: "::initRwEvent "
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "    g_sprites."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "SetExtension"
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
										children: "\"png\""
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
										children: "    g_sprites."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "LoadAllSpritesFromFolder"
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
										children: "PLUGIN_PATH"
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
										children: "\"sprites\""
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "));"
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
		}),
		"\n",
		jsx(_components.h2, {
			id: "从-txd-加载",
			children: "从 txd 加载"
		}),
		"\n",
		jsxs(CodeBlockTabs, {
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
									children: "bool"
								}),
								jsx(_components.span, {
									style: {
										"--shiki-light": "#6F42C1",
										"--shiki-dark": "#B392F0"
									},
									children: " LoadAllSpritesFromTxd"
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
									children: "std"
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
									children: "string"
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
									children: " path"
								}),
								jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: ");"
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
						children: jsx(_components.code, { children: jsxs(_components.span, {
							className: "line",
							children: [
								jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "g_sprites."
								}),
								jsx(_components.span, {
									style: {
										"--shiki-light": "#6F42C1",
										"--shiki-dark": "#B392F0"
									},
									children: "LoadAllSpritesFromTxd"
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
									children: "PLUGIN_PATH"
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
									children: "\"ui.txd\""
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
		}),
		"\n",
		jsx(_components.h2, {
			id: "按名取精灵",
			children: "按名取精灵"
		}),
		"\n",
		jsx(_components.p, { children: "不存在时结果为空。" }),
		"\n",
		jsxs(CodeBlockTabs, {
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
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "CSprite2d"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " GetSprite"
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
										children: "std"
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
										children: "string"
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
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "CSprite2d"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " GetSprite"
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
										children: "uint32_t"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#E36209",
											"--shiki-dark": "#FFAB70"
										},
										children: " id"
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
										children: "texClass"
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
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " GetTex"
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
										children: "std"
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
										children: "string"
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "    CSprite2d spr "
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " g_sprites."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "GetSprite"
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
		}),
		"\n",
		jsx(_components.h2, {
			id: "清理与选项",
			children: "清理与选项"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"设备丢失 / 关闭 RW 时 ",
			jsx(_components.code, { children: "Clear" }),
			"。"
		] }),
		"\n",
		jsxs(CodeBlockTabs, {
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
										children: " Clear"
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
										children: " SetMipMapOn"
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
										children: " on"
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
										children: " SetExtension"
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
										children: "std"
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
										children: "string"
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
										children: " ext"
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
										children: "uint32_t"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: " GetMemoryUsed"
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
										children: "::shutdownRwEvent "
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
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "    g_sprites."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "Clear"
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
							jsx(_components.span, {
								className: "line",
								children: jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "};"
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
										children: "g_sprites."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "SetMipMapOn"
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
										children: "true"
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
