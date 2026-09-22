import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/plugins/entities/shadows.mdx?collection=docs
var frontmatter = {
	"title": "阴影 CShadows",
	"description": "地面影、车灯影与永久影"
};
var _markdown = "\n\n`CShadows.h`\n\n地面影、车灯影、永久影。绘制相关，注意调用时机。\n\n## 存待绘影子 [#存待绘影子]\n\n<Api name=\"StoreShadowToBeRendered\">\n  两套重载（贴图 / 纹理类型）。\n\n  <CodeBlockTabs defaultValue=\"签名\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"签名\">\n        签名\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"示例\">\n        示例\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"签名\">\n      ```cpp\n      static void StoreShadowToBeRendered(unsigned char type, RwTexture* texture, CVector const* posn,\n          float topX, float topY, float rightX, float rightY, short intensity, unsigned char red, unsigned char green, unsigned char blue,\n          float zDistance, bool drawOnWater, float scale, CRealTimeShadow* realTimeShadow, bool drawOnBuildings);\n      static void StoreShadowToBeRendered(unsigned char shadowTextureType, CVector const* posn,\n          float frontX, float frontY, float sideX, float sideY, short intensity, unsigned char red, unsigned char green, unsigned char blue);\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"示例\">\n      ```cpp\n      // CShadows::StoreShadowToBeRendered(...);\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Api>\n\n## 静态 / 永久影 [#静态--永久影]\n\n<Api name=\"StoreStaticShadow / AddPermanentShadow\">\n  <CodeBlockTabs defaultValue=\"签名\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"签名\">\n        签名\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"示例\">\n        示例\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"签名\">\n      ```cpp\n      static bool StoreStaticShadow(unsigned int id, unsigned char type, RwTexture* texture, CVector* posn,\n          float frontX, float frontY, float sideX, float sideY, short intensity, unsigned char red, unsigned char green, unsigned char blue,\n          float zDistane, float scale, float drawDistance, bool temporaryShadow, float upDistance);\n      static void AddPermanentShadow(unsigned char type, RwTexture* texture, CVector* posn,\n          float topX, float topY, float rightX, float rightY, short intensity, unsigned char red, unsigned char greeb, unsigned char blue,\n          float drawDistance, unsigned int time, float upDistance);\n      static void UpdateStaticShadows();\n      static void UpdatePermanentShadows();\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"示例\">\n      ```cpp\n      // id 用于更新同一永久/静态影\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Api>\n\n## 实体影 [#实体影]\n\n<Api name=\"StoreShadowForVehicle / StoreShadowForPedObject\">\n  <CodeBlockTabs defaultValue=\"签名\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"签名\">\n        签名\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"示例\">\n        示例\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"签名\">\n      ```cpp\n      static void StoreShadowForVehicle(CVehicle* vehicle, VEH_SHD_TYPE vehShadowType);\n      static void StoreShadowForPedObject(CEntity* ped, float displacementX, float displacementY, float frontX, float frontY, float sideX, float sideY);\n      static void StoreCarLightShadow(CVehicle* vehicle, int id, RwTexture* texture, CVector* posn,\n          float frontX, float frontY, float sideX, float sideY, unsigned char red, unsigned char green, unsigned char blue, float maxViewAngle);\n      static void StoreRealTimeShadow(CPhysical* physical, float displacementX, float displacementY, float frontX, float frontY, float sideX, float sideY);\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"示例\">\n      ```cpp\n      // 游戏渲染路径会调；自定义实体可仿\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Api>\n\n## 指示标影子 [#指示标影子]\n\n<Api name=\"RenderIndicatorShadow\">\n  任务标记类投影。\n\n  ```cpp\n  static void RenderIndicatorShadow(unsigned int id, unsigned char shadowType, RwTexture* texture, CVector* posn,\n      float frontX, float frontY, float sideX, float sideY, short intensity);\n  ```\n</Api>\n\n## 清理与油渍 [#清理与油渍]\n\n<Api name=\"TidyUpShadows / RemoveOilInArea\">\n  ```cpp\n  static void TidyUpShadows();\n  static void RemoveOilInArea(float x1, float y1, float x2, float y2);\n  static void GunShotSetsOilOnFire(CVector const* shotOrigin, CVector const* shotTarget);\n  ```\n</Api>\n\n## 全局缓冲 [#全局缓冲]\n\n<Api name=\"asShadowsStored / aStaticShadows / aPermanentShadows\">\n  ```cpp\n  static CRegisteredShadow* asShadowsStored;\n  static CStaticShadow* aStaticShadows;\n  static CPermanentShadow* aPermanentShadows;\n  // MAX_STORED_SHADOWS 等 extern\n  ```\n</Api>\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "`CShadows.h`"
		},
		{
			"heading": void 0,
			"content": "地面影、车灯影、永久影。绘制相关，注意调用时机。"
		},
		{
			"heading": "存待绘影子",
			"content": "两套重载（贴图 / 纹理类型）。"
		},
		{
			"heading": "指示标影子",
			"content": "任务标记类投影。"
		}
	],
	"headings": [
		{
			"id": "存待绘影子",
			"content": "存待绘影子"
		},
		{
			"id": "静态--永久影",
			"content": "静态 / 永久影"
		},
		{
			"id": "实体影",
			"content": "实体影"
		},
		{
			"id": "指示标影子",
			"content": "指示标影子"
		},
		{
			"id": "清理与油渍",
			"content": "清理与油渍"
		},
		{
			"id": "全局缓冲",
			"content": "全局缓冲"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#存待绘影子",
		title: jsx(Fragment, { children: "存待绘影子" })
	},
	{
		depth: 2,
		url: "#静态--永久影",
		title: jsx(Fragment, { children: "静态 / 永久影" })
	},
	{
		depth: 2,
		url: "#实体影",
		title: jsx(Fragment, { children: "实体影" })
	},
	{
		depth: 2,
		url: "#指示标影子",
		title: jsx(Fragment, { children: "指示标影子" })
	},
	{
		depth: 2,
		url: "#清理与油渍",
		title: jsx(Fragment, { children: "清理与油渍" })
	},
	{
		depth: 2,
		url: "#全局缓冲",
		title: jsx(Fragment, { children: "全局缓冲" })
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
		jsx(_components.p, { children: jsx(_components.code, { children: "CShadows.h" }) }),
		"\n",
		jsx(_components.p, { children: "地面影、车灯影、永久影。绘制相关，注意调用时机。" }),
		"\n",
		jsx(_components.h2, {
			id: "存待绘影子",
			children: "存待绘影子"
		}),
		"\n",
		jsxs(Api, {
			name: "StoreShadowToBeRendered",
			children: [jsx(_components.p, { children: "两套重载（贴图 / 纹理类型）。" }), jsxs(CodeBlockTabs, {
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
											children: " StoreShadowToBeRendered"
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
											children: " type"
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
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " texture"
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
											children: "CVector"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " const*"
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
											children: "    float"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " topX"
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
											children: " topY"
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
											children: " rightX"
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
											children: " rightY"
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
											children: " intensity"
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
											children: " red"
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
											children: " green"
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
											children: " blue"
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
											children: "    float"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " zDistance"
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
											children: " drawOnWater"
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
											children: " scale"
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
											children: "CRealTimeShadow"
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
											children: " realTimeShadow"
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
											children: " drawOnBuildings"
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
											children: " StoreShadowToBeRendered"
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
											children: " shadowTextureType"
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
											children: "CVector"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " const*"
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
											children: "    float"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " frontX"
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
											children: " frontY"
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
											children: " sideX"
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
											children: " sideY"
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
											children: " intensity"
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
											children: " red"
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
											children: " green"
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
											children: " blue"
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
							children: jsx(_components.code, { children: jsx(_components.span, {
								className: "line",
								children: jsx(_components.span, {
									style: {
										"--shiki-light": "#6A737D",
										"--shiki-dark": "#6A737D"
									},
									children: "// CShadows::StoreShadowToBeRendered(...);"
								})
							}) })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsx(_components.h2, {
			id: "静态--永久影",
			children: "静态 / 永久影"
		}),
		"\n",
		jsx(Api, {
			name: "StoreStaticShadow / AddPermanentShadow",
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
											children: " bool"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: " StoreStaticShadow"
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
											children: "unsigned"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: " int"
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
											children: " type"
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
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " texture"
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
											children: "CVector"
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
											children: " posn"
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
											children: "    float"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " frontX"
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
											children: " frontY"
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
											children: " sideX"
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
											children: " sideY"
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
											children: " intensity"
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
											children: " red"
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
											children: " green"
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
											children: " blue"
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
											children: "    float"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " zDistane"
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
											children: " scale"
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
											children: " drawDistance"
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
											children: " temporaryShadow"
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
											children: " upDistance"
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
											children: " AddPermanentShadow"
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
											children: " type"
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
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " texture"
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
											children: "CVector"
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
											children: " posn"
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
											children: "    float"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " topX"
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
											children: " topY"
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
											children: " rightX"
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
											children: " rightY"
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
											children: " intensity"
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
											children: " red"
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
											children: " greeb"
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
											children: " blue"
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
											children: "    float"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " drawDistance"
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
											children: " int"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " time"
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
											children: " upDistance"
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
											children: " UpdateStaticShadows"
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
											children: " UpdatePermanentShadows"
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
							children: jsx(_components.code, { children: jsx(_components.span, {
								className: "line",
								children: jsx(_components.span, {
									style: {
										"--shiki-light": "#6A737D",
										"--shiki-dark": "#6A737D"
									},
									children: "// id 用于更新同一永久/静态影"
								})
							}) })
						}) })
					})
				]
			})
		}),
		"\n",
		jsx(_components.h2, {
			id: "实体影",
			children: "实体影"
		}),
		"\n",
		jsx(Api, {
			name: "StoreShadowForVehicle / StoreShadowForPedObject",
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
											children: " StoreShadowForVehicle"
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
											children: "CVehicle"
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
											children: " vehicle"
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
											children: "VEH_SHD_TYPE"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " vehShadowType"
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
											children: " StoreShadowForPedObject"
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
											children: "CEntity"
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
											children: " ped"
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
											children: " displacementX"
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
											children: " displacementY"
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
											children: " frontX"
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
											children: " frontY"
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
											children: " sideX"
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
											children: " sideY"
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
											children: " StoreCarLightShadow"
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
											children: "CVehicle"
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
											children: " vehicle"
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
											children: " id"
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
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " texture"
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
											children: "CVector"
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
											children: " posn"
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
											children: "    float"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#E36209",
												"--shiki-dark": "#FFAB70"
											},
											children: " frontX"
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
											children: " frontY"
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
											children: " sideX"
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
											children: " sideY"
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
											children: " red"
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
											children: " green"
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
											children: " blue"
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
											children: " maxViewAngle"
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
											children: " StoreRealTimeShadow"
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
											children: "CPhysical"
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
											children: " physical"
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
											children: " displacementX"
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
											children: " displacementY"
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
											children: " frontX"
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
											children: " frontY"
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
											children: " sideX"
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
											children: " sideY"
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
							children: jsx(_components.code, { children: jsx(_components.span, {
								className: "line",
								children: jsx(_components.span, {
									style: {
										"--shiki-light": "#6A737D",
										"--shiki-dark": "#6A737D"
									},
									children: "// 游戏渲染路径会调；自定义实体可仿"
								})
							}) })
						}) })
					})
				]
			})
		}),
		"\n",
		jsx(_components.h2, {
			id: "指示标影子",
			children: "指示标影子"
		}),
		"\n",
		jsxs(Api, {
			name: "RenderIndicatorShadow",
			children: [jsx(_components.p, { children: "任务标记类投影。" }), jsx(Fragment, { children: jsx(_components.pre, {
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
								children: " RenderIndicatorShadow"
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
								children: "unsigned"
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#D73A49",
									"--shiki-dark": "#F97583"
								},
								children: " int"
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
								children: " shadowType"
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
									"--shiki-light": "#E36209",
									"--shiki-dark": "#FFAB70"
								},
								children: " texture"
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
								children: "CVector"
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
								children: " posn"
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
								children: "    float"
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#E36209",
									"--shiki-dark": "#FFAB70"
								},
								children: " frontX"
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
								children: " frontY"
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
								children: " sideX"
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
								children: " sideY"
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
								children: " intensity"
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
			}) })]
		}),
		"\n",
		jsx(_components.h2, {
			id: "清理与油渍",
			children: "清理与油渍"
		}),
		"\n",
		jsx(Api, {
			name: "TidyUpShadows / RemoveOilInArea",
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
								children: " TidyUpShadows"
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
								children: " RemoveOilInArea"
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
								children: " GunShotSetsOilOnFire"
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
									"--shiki-light": "#D73A49",
									"--shiki-dark": "#F97583"
								},
								children: " const*"
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#E36209",
									"--shiki-dark": "#FFAB70"
								},
								children: " shotOrigin"
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
								children: "CVector"
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#D73A49",
									"--shiki-dark": "#F97583"
								},
								children: " const*"
							}),
							jsx(_components.span, {
								style: {
									"--shiki-light": "#E36209",
									"--shiki-dark": "#FFAB70"
								},
								children: " shotTarget"
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
		jsx(_components.h2, {
			id: "全局缓冲",
			children: "全局缓冲"
		}),
		"\n",
		jsx(Api, {
			name: "asShadowsStored / aStaticShadows / aPermanentShadows",
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
								children: " CRegisteredShadow"
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
								children: " asShadowsStored;"
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
								children: " CStaticShadow"
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
								children: " aStaticShadows;"
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
								children: " CPermanentShadow"
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
								children: " aPermanentShadows;"
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
							children: "// MAX_STORED_SHADOWS 等 extern"
						})
					})
				] })
			}) })
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
