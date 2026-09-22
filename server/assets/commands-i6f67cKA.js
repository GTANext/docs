import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/plugins/commands.mdx?collection=docs
var frontmatter = {
	"title": "脚本 Command",
	"description": "在 C++ 中调用 SCM 脚本命令"
};
var _markdown = "\n\n`shared/extensions/ScriptCommands.h`\\\n命令枚举：`scripting/ScriptCommandNames.h`\n\n在 `processScriptsEvent`（或同等安全的脚本节拍）里调用。III / VC / SA 的命令集不同，以当前工程头文件为准。\n\n<Callout type=\"warn\" title=\"别混\">\n  本页是 **C++** 封装。CLEO / CLEO+ 的 **opcode · Lua · Redux** 见 [CLEO](/docs/cleo)。\n</Callout>\n\n## 调用 SCM 命令 [#调用-scm-命令]\n\n<Api name=\"Command\" header=\"plugin::Command / Commands::\">\n  按枚举调用 SCM 命令。返回值是脚本条件结果 `m_bCondResult`，**不是**「是否执行成功」的笼统含义。\n\n  `CPed*` 等实体会按约定转成脚本句柄；输出参数用 `int*` / `float*` 等指针。\n\n  <CodeBlockTabs defaultValue=\"签名\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"签名\">\n        签名\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"示例\">\n        示例\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"签名\">\n      ```cpp\n      template <int CommandId, typename... Args>\n      bool Command(Args&&... args);\n\n      plugin::Command<plugin::Commands::NAME>(...);\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"示例\">\n      ```cpp\n      #include \"plugin.h\"\n      #include \"common.h\"\n      #include \"extensions/ScriptCommands.h\"\n\n      plugin::Events::processScriptsEvent += [] {\n          CPed* ped = FindPlayerPed();\n          if (!ped) {\n              return;\n          }\n          plugin::Command<plugin::Commands::SET_CHAR_HEALTH>(ped, 100.0f);\n          float hp = 0.0f;\n          plugin::Command<plugin::Commands::GET_CHAR_HEALTH>(ped, &hp);\n      };\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Api>\n\n## 模型加载链 [#模型加载链]\n\n模型是异步资源。正确顺序：\n\n<Steps>\n  <Step>\n    `REQUEST_MODEL`\n  </Step>\n\n  <Step>\n    之后每一帧检查 \n\n    `HAS_MODEL_LOADED`\n  </Step>\n\n  <Step>\n    就绪后 \n\n    `CREATE_*`\n  </Step>\n\n  <Step>\n    `MARK_MODEL_AS_NO_LONGER_NEEDED`\n  </Step>\n</Steps>\n\n同帧 `REQUEST` 立刻 `CREATE` 很容易失败或崩溃。\n\n```cpp\n#include \"plugin.h\"\n#include \"common.h\"\n#include \"CWorld.h\"\n#include \"extensions/ScriptCommands.h\"\n\nstatic int g_model = -1;\nstatic bool g_wait = false;\n\nvoid begin_spawn(int model) {\n    g_model = model;\n    g_wait = true;\n    plugin::Command<plugin::Commands::REQUEST_MODEL>(model);\n}\n\nvoid poll_spawn() {\n    if (!g_wait) {\n        return;\n    }\n    if (!plugin::Command<plugin::Commands::HAS_MODEL_LOADED>(g_model)) {\n        return;\n    }\n    CPed* ped = FindPlayerPed();\n    if (!ped) {\n        g_wait = false;\n        return;\n    }\n    CVector pos = ped->GetPosition();\n    pos.x += 5.0f;\n    pos.z = CWorld::FindGroundZForCoord(pos.x, pos.y) + 1.0f;\n\n    int car = -1;\n    plugin::Command<plugin::Commands::CREATE_CAR>(g_model, pos.x, pos.y, pos.z, &car);\n    plugin::Command<plugin::Commands::MARK_MODEL_AS_NO_LONGER_NEEDED>(g_model);\n    if (car != -1) {\n        plugin::Command<plugin::Commands::WARP_CHAR_INTO_CAR>(ped, car);\n    }\n    g_wait = false;\n}\n```\n\n## 按 ID 调用 [#按-id-调用]\n\n<Api name=\"CallCommandById\" header=\"plugin::scripting\">\n  更底层的按 ID 调用接口。日常优先 `Command<>` 模板。\n\n  <CodeBlockTabs defaultValue=\"签名\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"签名\">\n        签名\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"示例\">\n        示例\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"签名\">\n      ```cpp\n      plugin::scripting::CallCommandById(plugin::Commands::SOME_COMMAND, ...);\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"示例\">\n      ```cpp\n      plugin::scripting::CallCommandById(plugin::Commands::SET_TIME_OF_DAY, 12, 0);\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Api>\n\n## 常用命令名 [#常用命令名]\n\n`Commands::` 前缀。完整列表见 `ScriptCommandNames.h`，三端有差异。\n\n```cpp\n// REQUEST_MODEL HAS_MODEL_LOADED MARK_MODEL_AS_NO_LONGER_NEEDED\n// CREATE_CAR DELETE_CAR WARP_CHAR_INTO_CAR\n// SET_CHAR_HEALTH GET_CHAR_HEALTH SET_TIME_OF_DAY FORCE_WEATHER\n```\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "`shared/extensions/ScriptCommands.h`\\\n命令枚举：`scripting/ScriptCommandNames.h`"
		},
		{
			"heading": void 0,
			"content": "在 `processScriptsEvent`（或同等安全的脚本节拍）里调用。III / VC / SA 的命令集不同，以当前工程头文件为准。"
		},
		{
			"heading": void 0,
			"content": "本页是 **C++** 封装。CLEO / CLEO+ 的 **opcode · Lua · Redux** 见 CLEO。"
		},
		{
			"heading": "调用-scm-命令",
			"content": "按枚举调用 SCM 命令。返回值是脚本条件结果 `m_bCondResult`，**不是**「是否执行成功」的笼统含义。"
		},
		{
			"heading": "调用-scm-命令",
			"content": "`CPed*` 等实体会按约定转成脚本句柄；输出参数用 `int*` / `float*` 等指针。"
		},
		{
			"heading": "模型加载链",
			"content": "模型是异步资源。正确顺序："
		},
		{
			"heading": "模型加载链",
			"content": "同帧 `REQUEST` 立刻 `CREATE` 很容易失败或崩溃。"
		},
		{
			"heading": "按-id-调用",
			"content": "更底层的按 ID 调用接口。日常优先 `Command<>` 模板。"
		},
		{
			"heading": "常用命令名",
			"content": "`Commands::` 前缀。完整列表见 `ScriptCommandNames.h`，三端有差异。"
		}
	],
	"headings": [
		{
			"id": "调用-scm-命令",
			"content": "调用 SCM 命令"
		},
		{
			"id": "模型加载链",
			"content": "模型加载链"
		},
		{
			"id": "按-id-调用",
			"content": "按 ID 调用"
		},
		{
			"id": "常用命令名",
			"content": "常用命令名"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#调用-scm-命令",
		title: jsx(Fragment, { children: "调用 SCM 命令" })
	},
	{
		depth: 2,
		url: "#模型加载链",
		title: jsx(Fragment, { children: "模型加载链" })
	},
	{
		depth: 2,
		url: "#按-id-调用",
		title: jsx(Fragment, { children: "按 ID 调用" })
	},
	{
		depth: 2,
		url: "#常用命令名",
		title: jsx(Fragment, { children: "常用命令名" })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		br: "br",
		code: "code",
		h2: "h2",
		p: "p",
		pre: "pre",
		span: "span",
		strong: "strong",
		...props.components
	}, { Api, Callout, CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger, Step, Steps } = _components;
	if (!Api) _missingMdxReference("Api", true);
	if (!Callout) _missingMdxReference("Callout", true);
	if (!CodeBlockTab) _missingMdxReference("CodeBlockTab", true);
	if (!CodeBlockTabs) _missingMdxReference("CodeBlockTabs", true);
	if (!CodeBlockTabsList) _missingMdxReference("CodeBlockTabsList", true);
	if (!CodeBlockTabsTrigger) _missingMdxReference("CodeBlockTabsTrigger", true);
	if (!Step) _missingMdxReference("Step", true);
	if (!Steps) _missingMdxReference("Steps", true);
	return jsxs(Fragment, { children: [
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "shared/extensions/ScriptCommands.h" }),
			jsx(_components.br, {}),
			"\n",
			"命令枚举：",
			jsx(_components.code, { children: "scripting/ScriptCommandNames.h" })
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"在 ",
			jsx(_components.code, { children: "processScriptsEvent" }),
			"（或同等安全的脚本节拍）里调用。III / VC / SA 的命令集不同，以当前工程头文件为准。"
		] }),
		"\n",
		jsx(Callout, {
			type: "warn",
			title: "别混",
			children: jsxs(_components.p, { children: [
				"本页是 ",
				jsx(_components.strong, { children: "C++" }),
				" 封装。CLEO / CLEO+ 的 ",
				jsx(_components.strong, { children: "opcode · Lua · Redux" }),
				" 见 ",
				jsx(_components.a, {
					href: "/docs/cleo",
					children: "CLEO"
				}),
				"。"
			] })
		}),
		"\n",
		jsx(_components.h2, {
			id: "调用-scm-命令",
			children: "调用 SCM 命令"
		}),
		"\n",
		jsxs(Api, {
			name: "Command",
			header: "plugin::Command / Commands::",
			children: [
				jsxs(_components.p, { children: [
					"按枚举调用 SCM 命令。返回值是脚本条件结果 ",
					jsx(_components.code, { children: "m_bCondResult" }),
					"，",
					jsx(_components.strong, { children: "不是" }),
					"「是否执行成功」的笼统含义。"
				] }),
				jsxs(_components.p, { children: [
					jsx(_components.code, { children: "CPed*" }),
					" 等实体会按约定转成脚本句柄；输出参数用 ",
					jsx(_components.code, { children: "int*" }),
					" / ",
					jsx(_components.code, { children: "float*" }),
					" 等指针。"
				] }),
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
												children: "template"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#24292E",
													"--shiki-dark": "#E1E4E8"
												},
												children: " <"
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
													"--shiki-light": "#6F42C1",
													"--shiki-dark": "#B392F0"
												},
												children: " CommandId"
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
												children: "typename"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#24292E",
													"--shiki-dark": "#E1E4E8"
												},
												children: "... "
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#6F42C1",
													"--shiki-dark": "#B392F0"
												},
												children: "Args"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#24292E",
													"--shiki-dark": "#E1E4E8"
												},
												children: ">"
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
												children: " Command"
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
												children: "Args"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#D73A49",
													"--shiki-dark": "#F97583"
												},
												children: "&&"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#24292E",
													"--shiki-dark": "#E1E4E8"
												},
												children: "... "
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#E36209",
													"--shiki-dark": "#FFAB70"
												},
												children: "args"
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
												children: "Command"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#24292E",
													"--shiki-dark": "#E1E4E8"
												},
												children: "<"
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
												children: "Commands"
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
												children: "NAME"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#24292E",
													"--shiki-dark": "#E1E4E8"
												},
												children: ">(...);"
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
											children: " \"plugin.h\""
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
											children: "#include"
										}), jsx(_components.span, {
											style: {
												"--shiki-light": "#032F62",
												"--shiki-dark": "#9ECBFF"
											},
											children: " \"common.h\""
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
											children: "#include"
										}), jsx(_components.span, {
											style: {
												"--shiki-light": "#032F62",
												"--shiki-dark": "#9ECBFF"
											},
											children: " \"extensions/ScriptCommands.h\""
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
												children: "::processScriptsEvent "
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
												children: "    CPed"
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
												children: " ped "
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
												children: " FindPlayerPed"
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
												children: "    if"
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
													"--shiki-light": "#D73A49",
													"--shiki-dark": "#F97583"
												},
												children: "!"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#24292E",
													"--shiki-dark": "#E1E4E8"
												},
												children: "ped) {"
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
											children: "        return"
										}), jsx(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: ";"
										})]
									}),
									"\n",
									jsx(_components.span, {
										className: "line",
										children: jsx(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: "    }"
										})
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
												children: "    plugin"
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
												children: "Command"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#24292E",
													"--shiki-dark": "#E1E4E8"
												},
												children: "<"
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
												children: "Commands"
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
												children: "SET_CHAR_HEALTH"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#24292E",
													"--shiki-dark": "#E1E4E8"
												},
												children: ">(ped, "
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
												children: "    float"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#24292E",
													"--shiki-dark": "#E1E4E8"
												},
												children: " hp "
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
												children: " 0.0"
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
													"--shiki-light": "#6F42C1",
													"--shiki-dark": "#B392F0"
												},
												children: "    plugin"
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
												children: "Command"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#24292E",
													"--shiki-dark": "#E1E4E8"
												},
												children: "<"
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
												children: "Commands"
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
												children: "GET_CHAR_HEALTH"
											}),
											jsx(_components.span, {
												style: {
													"--shiki-light": "#24292E",
													"--shiki-dark": "#E1E4E8"
												},
												children: ">(ped, "
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
												children: "hp);"
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
				})
			]
		}),
		"\n",
		jsx(_components.h2, {
			id: "模型加载链",
			children: "模型加载链"
		}),
		"\n",
		jsx(_components.p, { children: "模型是异步资源。正确顺序：" }),
		"\n",
		jsxs(Steps, { children: [
			jsx(Step, { children: jsx(_components.code, { children: "REQUEST_MODEL" }) }),
			jsxs(Step, { children: ["之后每一帧检查 ", jsx(_components.code, { children: "HAS_MODEL_LOADED" })] }),
			jsxs(Step, { children: ["就绪后 ", jsx(_components.code, { children: "CREATE_*" })] }),
			jsx(Step, { children: jsx(_components.code, { children: "MARK_MODEL_AS_NO_LONGER_NEEDED" }) })
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"同帧 ",
			jsx(_components.code, { children: "REQUEST" }),
			" 立刻 ",
			jsx(_components.code, { children: "CREATE" }),
			" 很容易失败或崩溃。"
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
						children: " \"plugin.h\""
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
						children: "#include"
					}), jsx(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " \"common.h\""
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
						children: "#include"
					}), jsx(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " \"CWorld.h\""
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
						children: "#include"
					}), jsx(_components.span, {
						style: {
							"--shiki-light": "#032F62",
							"--shiki-dark": "#9ECBFF"
						},
						children: " \"extensions/ScriptCommands.h\""
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
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " int"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " g_model "
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
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " -"
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
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " g_wait "
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
							children: " false"
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
							children: "void"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " begin_spawn"
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
							children: " model"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ") {"
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
							children: "    g_model "
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
							children: " model;"
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
							children: "    g_wait "
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
							children: " true"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "    plugin"
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
							children: "Command"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "<"
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
							children: "Commands"
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
							children: "REQUEST_MODEL"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">(model);"
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
							children: "void"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: " poll_spawn"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "() {"
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
							children: "    if"
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
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "!"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "g_wait) {"
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
						children: "        return"
					}), jsx(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: ";"
					})]
				}),
				"\n",
				jsx(_components.span, {
					className: "line",
					children: jsx(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    }"
					})
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
							children: "    if"
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
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "!"
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
							children: "Command"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "<"
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
							children: "Commands"
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
							children: "HAS_MODEL_LOADED"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">(g_model)) {"
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
						children: "        return"
					}), jsx(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: ";"
					})]
				}),
				"\n",
				jsx(_components.span, {
					className: "line",
					children: jsx(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    }"
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
							children: "    CPed"
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
							children: " ped "
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
							children: " FindPlayerPed"
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
							children: "    if"
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
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "!"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "ped) {"
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
							children: "        g_wait "
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
							children: " false"
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
					children: [jsx(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "        return"
					}), jsx(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: ";"
					})]
				}),
				"\n",
				jsx(_components.span, {
					className: "line",
					children: jsx(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: "    }"
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
							children: "    CVector pos "
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
							children: " ped->"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "GetPosition"
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
							children: "    pos.x "
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
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " 5.0"
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
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "    pos.z "
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
							children: " CWorld"
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
							children: "FindGroundZForCoord"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "(pos.x, pos.y) "
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "+"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " 1.0"
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
							children: ";"
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
							children: " car "
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
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " -"
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "    plugin"
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
							children: "Command"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "<"
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
							children: "Commands"
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
							children: "CREATE_CAR"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">(g_model, pos.x, pos.y, pos.z, "
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
							children: "car);"
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
							children: "    plugin"
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
							children: "Command"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "<"
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
							children: "Commands"
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
							children: "MARK_MODEL_AS_NO_LONGER_NEEDED"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">(g_model);"
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
							children: "    if"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " (car "
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "!="
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " -"
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
							children: ") {"
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
							children: "        plugin"
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
							children: "Command"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "<"
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
							children: "Commands"
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
							children: "WARP_CHAR_INTO_CAR"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ">(ped, car);"
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
						children: "    }"
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
							children: "    g_wait "
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
							children: " false"
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
		}) }),
		"\n",
		jsx(_components.h2, {
			id: "按-id-调用",
			children: "按 ID 调用"
		}),
		"\n",
		jsxs(Api, {
			name: "CallCommandById",
			header: "plugin::scripting",
			children: [jsxs(_components.p, { children: [
				"更底层的按 ID 调用接口。日常优先 ",
				jsx(_components.code, { children: "Command<>" }),
				" 模板。"
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
							children: jsx(_components.code, { children: jsxs(_components.span, {
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
										children: "scripting"
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
										children: "CallCommandById"
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
										children: "Commands"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "::SOME_COMMAND, ...);"
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
										children: "scripting"
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
										children: "CallCommandById"
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
										children: "Commands"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "::SET_TIME_OF_DAY, "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "12"
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
										children: ");"
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
			id: "常用命令名",
			children: "常用命令名"
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "Commands::" }),
			" 前缀。完整列表见 ",
			jsx(_components.code, { children: "ScriptCommandNames.h" }),
			"，三端有差异。"
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
				jsx(_components.span, {
					className: "line",
					children: jsx(_components.span, {
						style: {
							"--shiki-light": "#6A737D",
							"--shiki-dark": "#6A737D"
						},
						children: "// REQUEST_MODEL HAS_MODEL_LOADED MARK_MODEL_AS_NO_LONGER_NEEDED"
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
						children: "// CREATE_CAR DELETE_CAR WARP_CHAR_INTO_CAR"
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
						children: "// SET_CHAR_HEALTH GET_CHAR_HEALTH SET_TIME_OF_DAY FORCE_WEATHER"
					})
				})
			] })
		}) })
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
