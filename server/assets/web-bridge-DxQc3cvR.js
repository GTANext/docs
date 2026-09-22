import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/xbase/web-bridge.mdx?collection=docs
var frontmatter = {
	"title": "WebBridge",
	"description": "让网页 JavaScript 直接调用 XBase 公共 API，用前端框架替代 ImGui 写界面。"
};
var _markdown = "\n\n`include/XBase/WebBridge.h` · `XBase::WebBridge`\n\n> 网页通过 `window.xbase` 调用 XBase 的玩家、载具、世界、传送、武器接口；能力不足的方法会被拒绝，网页可以据此隐藏入口。\n\n## 适用场景与边界 [#适用场景与边界]\n\n适合用前端框架写界面，把 ImGui 面板换成 HTML 与组件库，逻辑仍由 XBase 执行。\n\n不属于本模块的内容：\n\n* 不提供渲染，网页仍由 `WebView` 承载\n* 不绕过能力矩阵，VC / III 上不支持的方法一律返回错误\n* 不做参数越界修正之外的业务校验，例如载具模型是否存在于游戏由 XBase 后端判断\n\n## 安装 [#安装]\n\n```cpp\nXBase::WebBridge::Install();   // 注册消息通道并注入客户端脚本\nXBase::WebBridge::Shutdown();  // 卸载时调用\n```\n\n`Install()` 内部只做两件事：给 `WebView::SetMessageHandler` 挂上分发器，以及注入客户端脚本。网页若在安装前已经加载，重新导航一次即可获得 `window.xbase`。\n\n## 客户端接口 [#客户端接口]\n\n注入的脚本提供三个成员：\n\n```js\nwindow.xbase.call(method, params);        // 返回 Promise，resolve 方法结果\nwindow.xbase.on(event, callback);         // 订阅原生事件\nwindow.xbase.capabilities();              // 等价于 call('bridge.capabilities')\n```\n\n调用示例：\n\n```js\nconst snapshot = await window.xbase.call('player.snapshot');\ndocument.querySelector('#health').textContent = snapshot.health.toFixed(0);\n\nawait window.xbase.call('vehicle.spawn', { model: 411, asDriver: true });\nawait window.xbase.call('world.setTime', { hour: 12, minute: 0 });\n```\n\n失败会 reject，错误文本包含原因：\n\n```js\ntry {\n    await window.xbase.call('vehicle.doors', { index: 0 });\n} catch (error) {\n    // VC / III 上 VehicleDoors 不支持，这里会拿到 unsupported on this game\n    console.warn(error.message);\n}\n```\n\n## 协议 [#协议]\n\n请求与响应都是 JSON，响应带回同一个 `id`。\n\n```json\n{ \"id\": 1, \"method\": \"player.snapshot\", \"params\": {} }\n{ \"id\": 1, \"ok\": true, \"result\": { \"health\": 100, \"money\": 500 } }\n{ \"id\": 2, \"ok\": false, \"error\": \"unsupported on this game: vehicle.doors\" }\n```\n\n原生推事件用 `Emit()`，网页用 `on()` 接收：\n\n<CodeBlockTabs defaultValue=\"C++\">\n  <CodeBlockTabsList>\n    <CodeBlockTabsTrigger value=\"C++\">\n      C++\n    </CodeBlockTabsTrigger>\n\n    <CodeBlockTabsTrigger value=\"Redux\">\n      Redux\n    </CodeBlockTabsTrigger>\n  </CodeBlockTabsList>\n\n  <CodeBlockTab value=\"C++\">\n    ```cpp\n    XBase::Json::Value payload;\n    payload.Set(\"text\", XBase::Json::Value(\"done\"));\n    XBase::WebBridge::Emit(\"notice\", payload);\n    ```\n  </CodeBlockTab>\n\n  <CodeBlockTab value=\"Redux\">\n    ```js\n    window.xbase.on('notice', (payload) => console.log(payload.text));\n    ```\n  </CodeBlockTab>\n</CodeBlockTabs>\n\n## 方法表 [#方法表]\n\n`bridge.capabilities` 返回每个方法在当前游戏上的状态，`supported` 与 `partial` 可以放行，`unsupported` 应隐藏入口。\n\n| 方法                    | 能力                   | 参数                                                   |\n| --------------------- | -------------------- | ---------------------------------------------------- |\n| `bridge.capabilities` | 始终可用                 | 无                                                    |\n| `player.snapshot`     | PlayerBasicState     | 无                                                    |\n| `player.heal`         | PlayerBasicState     | 无                                                    |\n| `player.armour`       | PlayerBasicState     | 无                                                    |\n| `player.money`        | PlayerBasicState     | `amount`                                             |\n| `player.wanted`       | PlayerBasicState     | `level`                                              |\n| `player.kill`         | PlayerBasicState     | 无                                                    |\n| `player.moveRelative` | PlayerMovement       | `forward` `right` `up`                               |\n| `vehicle.snapshot`    | VehicleBasic         | 无                                                    |\n| `vehicle.spawn`       | VehicleSpawn         | `model` `asDriver` `aircraftInAir` `cleanupPrevious` |\n| `vehicle.repair`      | VehicleBasic         | 无                                                    |\n| `vehicle.unflip`      | VehicleBasic         | 无                                                    |\n| `vehicle.colors`      | VehicleColors        | `primary` `secondary`                                |\n| `vehicle.doors`       | VehicleDoors         | `index`                                              |\n| `world.getTime`       | WorldTime            | 无                                                    |\n| `world.setTime`       | WorldTime            | `hour` `minute`                                      |\n| `world.weather`       | WorldWeather         | `id` `lock`                                          |\n| `world.gameSpeed`     | WorldGameSpeed       | `value`                                              |\n| `world.gravity`       | WorldGravity         | `value`                                              |\n| `world.freezeTime`    | WorldFreezeTime      | `enable`                                             |\n| `teleport.to`         | TeleportBasic        | `x` `y` `z` `interior`                               |\n| `teleport.forward`    | TeleportBasic        | `distance`                                           |\n| `teleport.marker`     | TeleportBasic        | `underwater`                                         |\n| `weapon.give`         | WeaponGive           | `type` `ammo`                                        |\n| `weapon.giveAll`      | WeaponGive           | 无                                                    |\n| `weapon.infiniteAmmo` | WeaponRuntimeEffects | `enable`                                             |\n| `ui.notice`           | 始终可用                 | `text`                                               |\n\n## 线程与安全 [#线程与安全]\n\n* 消息回调在游戏线程执行，可以直接调用 XBase 的域接口，不需要额外排队\n* 除 `ui.notice` 走 `Host::QueueMessage` 延迟到脚本事件外，其余方法在调用点立即生效\n* 页面地址由宿主决定，方法表是白名单，未列出的方法一律返回 `unknown method`\n* 返回值只包含状态与数值，不下发任何游戏内存地址\n\n## 排查路径 [#排查路径]\n\n1. `window.xbase` 未定义：确认宿主调用了 `Install()`，并在安装后重新导航\n2. 调用一直挂起：确认网页由本 XBase 的 WebView 承载，且 `chrome.webview` 可用\n3. 返回 `unsupported on this game`：该方法在当前游戏不支持，按 `bridge.capabilities` 隐藏入口\n4. 返回 `unknown method`：方法名拼写或版本不一致\n5. 参数无效：检查参数名与类型，缺省值见方法表\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "`include/XBase/WebBridge.h` · `XBase::WebBridge`"
		},
		{
			"heading": void 0,
			"content": "> 网页通过 `window.xbase` 调用 XBase 的玩家、载具、世界、传送、武器接口；能力不足的方法会被拒绝，网页可以据此隐藏入口。"
		},
		{
			"heading": "适用场景与边界",
			"content": "适合用前端框架写界面，把 ImGui 面板换成 HTML 与组件库，逻辑仍由 XBase 执行。"
		},
		{
			"heading": "适用场景与边界",
			"content": "不属于本模块的内容："
		},
		{
			"heading": "适用场景与边界",
			"content": "不提供渲染，网页仍由 `WebView` 承载"
		},
		{
			"heading": "适用场景与边界",
			"content": "不绕过能力矩阵，VC / III 上不支持的方法一律返回错误"
		},
		{
			"heading": "适用场景与边界",
			"content": "不做参数越界修正之外的业务校验，例如载具模型是否存在于游戏由 XBase 后端判断"
		},
		{
			"heading": "安装",
			"content": "`Install()` 内部只做两件事：给 `WebView::SetMessageHandler` 挂上分发器，以及注入客户端脚本。网页若在安装前已经加载，重新导航一次即可获得 `window.xbase`。"
		},
		{
			"heading": "客户端接口",
			"content": "注入的脚本提供三个成员："
		},
		{
			"heading": "客户端接口",
			"content": "调用示例："
		},
		{
			"heading": "客户端接口",
			"content": "失败会 reject，错误文本包含原因："
		},
		{
			"heading": "协议",
			"content": "请求与响应都是 JSON，响应带回同一个 `id`。"
		},
		{
			"heading": "协议",
			"content": "原生推事件用 `Emit()`，网页用 `on()` 接收："
		},
		{
			"heading": "方法表",
			"content": "`bridge.capabilities` 返回每个方法在当前游戏上的状态，`supported` 与 `partial` 可以放行，`unsupported` 应隐藏入口。"
		},
		{
			"heading": "方法表",
			"content": "方法"
		},
		{
			"heading": "方法表",
			"content": "能力"
		},
		{
			"heading": "方法表",
			"content": "参数"
		},
		{
			"heading": "方法表",
			"content": "`bridge.capabilities`"
		},
		{
			"heading": "方法表",
			"content": "始终可用"
		},
		{
			"heading": "方法表",
			"content": "无"
		},
		{
			"heading": "方法表",
			"content": "`player.snapshot`"
		},
		{
			"heading": "方法表",
			"content": "PlayerBasicState"
		},
		{
			"heading": "方法表",
			"content": "无"
		},
		{
			"heading": "方法表",
			"content": "`player.heal`"
		},
		{
			"heading": "方法表",
			"content": "PlayerBasicState"
		},
		{
			"heading": "方法表",
			"content": "无"
		},
		{
			"heading": "方法表",
			"content": "`player.armour`"
		},
		{
			"heading": "方法表",
			"content": "PlayerBasicState"
		},
		{
			"heading": "方法表",
			"content": "无"
		},
		{
			"heading": "方法表",
			"content": "`player.money`"
		},
		{
			"heading": "方法表",
			"content": "PlayerBasicState"
		},
		{
			"heading": "方法表",
			"content": "`amount`"
		},
		{
			"heading": "方法表",
			"content": "`player.wanted`"
		},
		{
			"heading": "方法表",
			"content": "PlayerBasicState"
		},
		{
			"heading": "方法表",
			"content": "`level`"
		},
		{
			"heading": "方法表",
			"content": "`player.kill`"
		},
		{
			"heading": "方法表",
			"content": "PlayerBasicState"
		},
		{
			"heading": "方法表",
			"content": "无"
		},
		{
			"heading": "方法表",
			"content": "`player.moveRelative`"
		},
		{
			"heading": "方法表",
			"content": "PlayerMovement"
		},
		{
			"heading": "方法表",
			"content": "`forward` `right` `up`"
		},
		{
			"heading": "方法表",
			"content": "`vehicle.snapshot`"
		},
		{
			"heading": "方法表",
			"content": "VehicleBasic"
		},
		{
			"heading": "方法表",
			"content": "无"
		},
		{
			"heading": "方法表",
			"content": "`vehicle.spawn`"
		},
		{
			"heading": "方法表",
			"content": "VehicleSpawn"
		},
		{
			"heading": "方法表",
			"content": "`model` `asDriver` `aircraftInAir` `cleanupPrevious`"
		},
		{
			"heading": "方法表",
			"content": "`vehicle.repair`"
		},
		{
			"heading": "方法表",
			"content": "VehicleBasic"
		},
		{
			"heading": "方法表",
			"content": "无"
		},
		{
			"heading": "方法表",
			"content": "`vehicle.unflip`"
		},
		{
			"heading": "方法表",
			"content": "VehicleBasic"
		},
		{
			"heading": "方法表",
			"content": "无"
		},
		{
			"heading": "方法表",
			"content": "`vehicle.colors`"
		},
		{
			"heading": "方法表",
			"content": "VehicleColors"
		},
		{
			"heading": "方法表",
			"content": "`primary` `secondary`"
		},
		{
			"heading": "方法表",
			"content": "`vehicle.doors`"
		},
		{
			"heading": "方法表",
			"content": "VehicleDoors"
		},
		{
			"heading": "方法表",
			"content": "`index`"
		},
		{
			"heading": "方法表",
			"content": "`world.getTime`"
		},
		{
			"heading": "方法表",
			"content": "WorldTime"
		},
		{
			"heading": "方法表",
			"content": "无"
		},
		{
			"heading": "方法表",
			"content": "`world.setTime`"
		},
		{
			"heading": "方法表",
			"content": "WorldTime"
		},
		{
			"heading": "方法表",
			"content": "`hour` `minute`"
		},
		{
			"heading": "方法表",
			"content": "`world.weather`"
		},
		{
			"heading": "方法表",
			"content": "WorldWeather"
		},
		{
			"heading": "方法表",
			"content": "`id` `lock`"
		},
		{
			"heading": "方法表",
			"content": "`world.gameSpeed`"
		},
		{
			"heading": "方法表",
			"content": "WorldGameSpeed"
		},
		{
			"heading": "方法表",
			"content": "`value`"
		},
		{
			"heading": "方法表",
			"content": "`world.gravity`"
		},
		{
			"heading": "方法表",
			"content": "WorldGravity"
		},
		{
			"heading": "方法表",
			"content": "`value`"
		},
		{
			"heading": "方法表",
			"content": "`world.freezeTime`"
		},
		{
			"heading": "方法表",
			"content": "WorldFreezeTime"
		},
		{
			"heading": "方法表",
			"content": "`enable`"
		},
		{
			"heading": "方法表",
			"content": "`teleport.to`"
		},
		{
			"heading": "方法表",
			"content": "TeleportBasic"
		},
		{
			"heading": "方法表",
			"content": "`x` `y` `z` `interior`"
		},
		{
			"heading": "方法表",
			"content": "`teleport.forward`"
		},
		{
			"heading": "方法表",
			"content": "TeleportBasic"
		},
		{
			"heading": "方法表",
			"content": "`distance`"
		},
		{
			"heading": "方法表",
			"content": "`teleport.marker`"
		},
		{
			"heading": "方法表",
			"content": "TeleportBasic"
		},
		{
			"heading": "方法表",
			"content": "`underwater`"
		},
		{
			"heading": "方法表",
			"content": "`weapon.give`"
		},
		{
			"heading": "方法表",
			"content": "WeaponGive"
		},
		{
			"heading": "方法表",
			"content": "`type` `ammo`"
		},
		{
			"heading": "方法表",
			"content": "`weapon.giveAll`"
		},
		{
			"heading": "方法表",
			"content": "WeaponGive"
		},
		{
			"heading": "方法表",
			"content": "无"
		},
		{
			"heading": "方法表",
			"content": "`weapon.infiniteAmmo`"
		},
		{
			"heading": "方法表",
			"content": "WeaponRuntimeEffects"
		},
		{
			"heading": "方法表",
			"content": "`enable`"
		},
		{
			"heading": "方法表",
			"content": "`ui.notice`"
		},
		{
			"heading": "方法表",
			"content": "始终可用"
		},
		{
			"heading": "方法表",
			"content": "`text`"
		},
		{
			"heading": "线程与安全",
			"content": "消息回调在游戏线程执行，可以直接调用 XBase 的域接口，不需要额外排队"
		},
		{
			"heading": "线程与安全",
			"content": "除 `ui.notice` 走 `Host::QueueMessage` 延迟到脚本事件外，其余方法在调用点立即生效"
		},
		{
			"heading": "线程与安全",
			"content": "页面地址由宿主决定，方法表是白名单，未列出的方法一律返回 `unknown method`"
		},
		{
			"heading": "线程与安全",
			"content": "返回值只包含状态与数值，不下发任何游戏内存地址"
		},
		{
			"heading": "排查路径",
			"content": "`window.xbase` 未定义：确认宿主调用了 `Install()`，并在安装后重新导航"
		},
		{
			"heading": "排查路径",
			"content": "调用一直挂起：确认网页由本 XBase 的 WebView 承载，且 `chrome.webview` 可用"
		},
		{
			"heading": "排查路径",
			"content": "返回 `unsupported on this game`：该方法在当前游戏不支持，按 `bridge.capabilities` 隐藏入口"
		},
		{
			"heading": "排查路径",
			"content": "返回 `unknown method`：方法名拼写或版本不一致"
		},
		{
			"heading": "排查路径",
			"content": "参数无效：检查参数名与类型，缺省值见方法表"
		}
	],
	"headings": [
		{
			"id": "适用场景与边界",
			"content": "适用场景与边界"
		},
		{
			"id": "安装",
			"content": "安装"
		},
		{
			"id": "客户端接口",
			"content": "客户端接口"
		},
		{
			"id": "协议",
			"content": "协议"
		},
		{
			"id": "方法表",
			"content": "方法表"
		},
		{
			"id": "线程与安全",
			"content": "线程与安全"
		},
		{
			"id": "排查路径",
			"content": "排查路径"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#适用场景与边界",
		title: jsx(Fragment, { children: "适用场景与边界" })
	},
	{
		depth: 2,
		url: "#安装",
		title: jsx(Fragment, { children: "安装" })
	},
	{
		depth: 2,
		url: "#客户端接口",
		title: jsx(Fragment, { children: "客户端接口" })
	},
	{
		depth: 2,
		url: "#协议",
		title: jsx(Fragment, { children: "协议" })
	},
	{
		depth: 2,
		url: "#方法表",
		title: jsx(Fragment, { children: "方法表" })
	},
	{
		depth: 2,
		url: "#线程与安全",
		title: jsx(Fragment, { children: "线程与安全" })
	},
	{
		depth: 2,
		url: "#排查路径",
		title: jsx(Fragment, { children: "排查路径" })
	}
];
function _createMdxContent(props) {
	const _components = {
		blockquote: "blockquote",
		code: "code",
		h2: "h2",
		li: "li",
		ol: "ol",
		p: "p",
		pre: "pre",
		span: "span",
		table: "table",
		tbody: "tbody",
		td: "td",
		th: "th",
		thead: "thead",
		tr: "tr",
		ul: "ul",
		...props.components
	}, { CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger } = _components;
	if (!CodeBlockTab) _missingMdxReference("CodeBlockTab", true);
	if (!CodeBlockTabs) _missingMdxReference("CodeBlockTabs", true);
	if (!CodeBlockTabsList) _missingMdxReference("CodeBlockTabsList", true);
	if (!CodeBlockTabsTrigger) _missingMdxReference("CodeBlockTabsTrigger", true);
	return jsxs(Fragment, { children: [
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "include/XBase/WebBridge.h" }),
			" · ",
			jsx(_components.code, { children: "XBase::WebBridge" })
		] }),
		"\n",
		jsxs(_components.blockquote, { children: [
			"\n",
			jsxs(_components.p, { children: [
				"网页通过 ",
				jsx(_components.code, { children: "window.xbase" }),
				" 调用 XBase 的玩家、载具、世界、传送、武器接口；能力不足的方法会被拒绝，网页可以据此隐藏入口。"
			] }),
			"\n"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "适用场景与边界",
			children: "适用场景与边界"
		}),
		"\n",
		jsx(_components.p, { children: "适合用前端框架写界面，把 ImGui 面板换成 HTML 与组件库，逻辑仍由 XBase 执行。" }),
		"\n",
		jsx(_components.p, { children: "不属于本模块的内容：" }),
		"\n",
		jsxs(_components.ul, { children: [
			"\n",
			jsxs(_components.li, { children: [
				"不提供渲染，网页仍由 ",
				jsx(_components.code, { children: "WebView" }),
				" 承载"
			] }),
			"\n",
			jsx(_components.li, { children: "不绕过能力矩阵，VC / III 上不支持的方法一律返回错误" }),
			"\n",
			jsx(_components.li, { children: "不做参数越界修正之外的业务校验，例如载具模型是否存在于游戏由 XBase 后端判断" }),
			"\n"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "安装",
			children: "安装"
		}),
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
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "XBase"
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
							children: "WebBridge"
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
							children: "Install"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "();"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6A737D",
								"--shiki-dark": "#6A737D"
							},
							children: "   // 注册消息通道并注入客户端脚本"
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
							children: "XBase"
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
							children: "WebBridge"
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
							children: "Shutdown"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "();"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6A737D",
								"--shiki-dark": "#6A737D"
							},
							children: "  // 卸载时调用"
						})
					]
				})
			] })
		}) }),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "Install()" }),
			" 内部只做两件事：给 ",
			jsx(_components.code, { children: "WebView::SetMessageHandler" }),
			" 挂上分发器，以及注入客户端脚本。网页若在安装前已经加载，重新导航一次即可获得 ",
			jsx(_components.code, { children: "window.xbase" }),
			"。"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "客户端接口",
			children: "客户端接口"
		}),
		"\n",
		jsx(_components.p, { children: "注入的脚本提供三个成员：" }),
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
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
			children: jsxs(_components.code, { children: [
				jsxs(_components.span, {
					className: "line",
					children: [
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "window.xbase."
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "call"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "(method, params);        "
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6A737D",
								"--shiki-dark": "#6A737D"
							},
							children: "// 返回 Promise，resolve 方法结果"
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
							children: "window.xbase."
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "on"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "(event, callback);         "
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6A737D",
								"--shiki-dark": "#6A737D"
							},
							children: "// 订阅原生事件"
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
							children: "window.xbase."
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "capabilities"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "();              "
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6A737D",
								"--shiki-dark": "#6A737D"
							},
							children: "// 等价于 call('bridge.capabilities')"
						})
					]
				})
			] })
		}) }),
		"\n",
		jsx(_components.p, { children: "调用示例：" }),
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
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
			children: jsxs(_components.code, { children: [
				jsxs(_components.span, {
					className: "line",
					children: [
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "const"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: " snapshot"
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
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: " await"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " window.xbase."
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "call"
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
							children: "'player.snapshot'"
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
							children: "document."
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "querySelector"
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
							children: "'#health'"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ").textContent "
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
							children: " snapshot.health."
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "toFixed"
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
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "await"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " window.xbase."
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "call"
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
							children: "'vehicle.spawn'"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", { model: "
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "411"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", asDriver: "
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
							children: " });"
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
							children: "await"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " window.xbase."
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "call"
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
							children: "'world.setTime'"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", { hour: "
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
							children: ", minute: "
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
							children: " });"
						})
					]
				})
			] })
		}) }),
		"\n",
		jsx(_components.p, { children: "失败会 reject，错误文本包含原因：" }),
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
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
			children: jsxs(_components.code, { children: [
				jsxs(_components.span, {
					className: "line",
					children: [jsx(_components.span, {
						style: {
							"--shiki-light": "#D73A49",
							"--shiki-dark": "#F97583"
						},
						children: "try"
					}), jsx(_components.span, {
						style: {
							"--shiki-light": "#24292E",
							"--shiki-dark": "#E1E4E8"
						},
						children: " {"
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
							children: "    await"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " window.xbase."
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "call"
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
							children: "'vehicle.doors'"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ", { index: "
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
							children: " });"
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
							children: "} "
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#D73A49",
								"--shiki-dark": "#F97583"
							},
							children: "catch"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " (error) {"
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
						children: "    // VC / III 上 VehicleDoors 不支持，这里会拿到 unsupported on this game"
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
							children: "    console."
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#6F42C1",
								"--shiki-dark": "#B392F0"
							},
							children: "warn"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "(error.message);"
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
			id: "协议",
			children: "协议"
		}),
		"\n",
		jsxs(_components.p, { children: [
			"请求与响应都是 JSON，响应带回同一个 ",
			jsx(_components.code, { children: "id" }),
			"。"
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
			icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
			children: jsxs(_components.code, { children: [
				jsxs(_components.span, {
					className: "line",
					children: [
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: "{ "
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "\"id\""
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ": "
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
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "\"method\""
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ": "
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "\"player.snapshot\""
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
							children: "\"params\""
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ": {} }"
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
							children: "{ "
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "\"id\""
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ": "
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
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "\"ok\""
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ": "
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
							children: ", "
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "\"result\""
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ": { "
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "\"health\""
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ": "
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
							children: "\"money\""
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ": "
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "500"
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " } }"
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
							children: "{ "
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "\"id\""
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ": "
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "2"
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
							children: "\"ok\""
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ": "
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#005CC5",
								"--shiki-dark": "#79B8FF"
							},
							children: "false"
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
							children: "\"error\""
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: ": "
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#032F62",
								"--shiki-dark": "#9ECBFF"
							},
							children: "\"unsupported on this game: vehicle.doors\""
						}),
						jsx(_components.span, {
							style: {
								"--shiki-light": "#24292E",
								"--shiki-dark": "#E1E4E8"
							},
							children: " }"
						})
					]
				})
			] })
		}) }),
		"\n",
		jsxs(_components.p, { children: [
			"原生推事件用 ",
			jsx(_components.code, { children: "Emit()" }),
			"，网页用 ",
			jsx(_components.code, { children: "on()" }),
			" 接收："
		] }),
		"\n",
		jsxs(CodeBlockTabs, {
			defaultValue: "C++",
			children: [
				jsxs(CodeBlockTabsList, { children: [jsx(CodeBlockTabsTrigger, {
					value: "C++",
					children: "C++"
				}), jsx(CodeBlockTabsTrigger, {
					value: "Redux",
					children: "Redux"
				})] }),
				jsx(CodeBlockTab, {
					value: "C++",
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
										children: "XBase"
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
										children: "Json"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "::Value payload;"
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
										children: "payload."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "Set"
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
										children: "\"text\""
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
										children: "XBase"
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
										children: "Json"
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
										children: "Value"
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
										children: "\"done\""
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
							jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "XBase"
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
										children: "WebBridge"
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
										children: "Emit"
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
										children: "\"notice\""
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ", payload);"
									})
								]
							})
						] })
					}) })
				}),
				jsx(CodeBlockTab, {
					value: "Redux",
					children: jsx(Fragment, { children: jsx(_components.pre, {
						className: "shiki shiki-themes github-light github-dark",
						style: {
							"--shiki-light": "#24292e",
							"--shiki-dark": "#e1e4e8",
							"--shiki-light-bg": "#fff",
							"--shiki-dark-bg": "#24292e"
						},
						tabIndex: "0",
						icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
						children: jsx(_components.code, { children: jsxs(_components.span, {
							className: "line",
							children: [
								jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "window.xbase."
								}),
								jsx(_components.span, {
									style: {
										"--shiki-light": "#6F42C1",
										"--shiki-dark": "#B392F0"
									},
									children: "on"
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
									children: "'notice'"
								}),
								jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: ", ("
								}),
								jsx(_components.span, {
									style: {
										"--shiki-light": "#E36209",
										"--shiki-dark": "#FFAB70"
									},
									children: "payload"
								}),
								jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: ") "
								}),
								jsx(_components.span, {
									style: {
										"--shiki-light": "#D73A49",
										"--shiki-dark": "#F97583"
									},
									children: "=>"
								}),
								jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: " console."
								}),
								jsx(_components.span, {
									style: {
										"--shiki-light": "#6F42C1",
										"--shiki-dark": "#B392F0"
									},
									children: "log"
								}),
								jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "(payload.text));"
								})
							]
						}) })
					}) })
				})
			]
		}),
		"\n",
		jsx(_components.h2, {
			id: "方法表",
			children: "方法表"
		}),
		"\n",
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "bridge.capabilities" }),
			" 返回每个方法在当前游戏上的状态，",
			jsx(_components.code, { children: "supported" }),
			" 与 ",
			jsx(_components.code, { children: "partial" }),
			" 可以放行，",
			jsx(_components.code, { children: "unsupported" }),
			" 应隐藏入口。"
		] }),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [
			jsx(_components.th, { children: "方法" }),
			jsx(_components.th, { children: "能力" }),
			jsx(_components.th, { children: "参数" })
		] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "bridge.capabilities" }) }),
				jsx(_components.td, { children: "始终可用" }),
				jsx(_components.td, { children: "无" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "player.snapshot" }) }),
				jsx(_components.td, { children: "PlayerBasicState" }),
				jsx(_components.td, { children: "无" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "player.heal" }) }),
				jsx(_components.td, { children: "PlayerBasicState" }),
				jsx(_components.td, { children: "无" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "player.armour" }) }),
				jsx(_components.td, { children: "PlayerBasicState" }),
				jsx(_components.td, { children: "无" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "player.money" }) }),
				jsx(_components.td, { children: "PlayerBasicState" }),
				jsx(_components.td, { children: jsx(_components.code, { children: "amount" }) })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "player.wanted" }) }),
				jsx(_components.td, { children: "PlayerBasicState" }),
				jsx(_components.td, { children: jsx(_components.code, { children: "level" }) })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "player.kill" }) }),
				jsx(_components.td, { children: "PlayerBasicState" }),
				jsx(_components.td, { children: "无" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "player.moveRelative" }) }),
				jsx(_components.td, { children: "PlayerMovement" }),
				jsxs(_components.td, { children: [
					jsx(_components.code, { children: "forward" }),
					" ",
					jsx(_components.code, { children: "right" }),
					" ",
					jsx(_components.code, { children: "up" })
				] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "vehicle.snapshot" }) }),
				jsx(_components.td, { children: "VehicleBasic" }),
				jsx(_components.td, { children: "无" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "vehicle.spawn" }) }),
				jsx(_components.td, { children: "VehicleSpawn" }),
				jsxs(_components.td, { children: [
					jsx(_components.code, { children: "model" }),
					" ",
					jsx(_components.code, { children: "asDriver" }),
					" ",
					jsx(_components.code, { children: "aircraftInAir" }),
					" ",
					jsx(_components.code, { children: "cleanupPrevious" })
				] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "vehicle.repair" }) }),
				jsx(_components.td, { children: "VehicleBasic" }),
				jsx(_components.td, { children: "无" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "vehicle.unflip" }) }),
				jsx(_components.td, { children: "VehicleBasic" }),
				jsx(_components.td, { children: "无" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "vehicle.colors" }) }),
				jsx(_components.td, { children: "VehicleColors" }),
				jsxs(_components.td, { children: [
					jsx(_components.code, { children: "primary" }),
					" ",
					jsx(_components.code, { children: "secondary" })
				] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "vehicle.doors" }) }),
				jsx(_components.td, { children: "VehicleDoors" }),
				jsx(_components.td, { children: jsx(_components.code, { children: "index" }) })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "world.getTime" }) }),
				jsx(_components.td, { children: "WorldTime" }),
				jsx(_components.td, { children: "无" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "world.setTime" }) }),
				jsx(_components.td, { children: "WorldTime" }),
				jsxs(_components.td, { children: [
					jsx(_components.code, { children: "hour" }),
					" ",
					jsx(_components.code, { children: "minute" })
				] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "world.weather" }) }),
				jsx(_components.td, { children: "WorldWeather" }),
				jsxs(_components.td, { children: [
					jsx(_components.code, { children: "id" }),
					" ",
					jsx(_components.code, { children: "lock" })
				] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "world.gameSpeed" }) }),
				jsx(_components.td, { children: "WorldGameSpeed" }),
				jsx(_components.td, { children: jsx(_components.code, { children: "value" }) })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "world.gravity" }) }),
				jsx(_components.td, { children: "WorldGravity" }),
				jsx(_components.td, { children: jsx(_components.code, { children: "value" }) })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "world.freezeTime" }) }),
				jsx(_components.td, { children: "WorldFreezeTime" }),
				jsx(_components.td, { children: jsx(_components.code, { children: "enable" }) })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "teleport.to" }) }),
				jsx(_components.td, { children: "TeleportBasic" }),
				jsxs(_components.td, { children: [
					jsx(_components.code, { children: "x" }),
					" ",
					jsx(_components.code, { children: "y" }),
					" ",
					jsx(_components.code, { children: "z" }),
					" ",
					jsx(_components.code, { children: "interior" })
				] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "teleport.forward" }) }),
				jsx(_components.td, { children: "TeleportBasic" }),
				jsx(_components.td, { children: jsx(_components.code, { children: "distance" }) })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "teleport.marker" }) }),
				jsx(_components.td, { children: "TeleportBasic" }),
				jsx(_components.td, { children: jsx(_components.code, { children: "underwater" }) })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "weapon.give" }) }),
				jsx(_components.td, { children: "WeaponGive" }),
				jsxs(_components.td, { children: [
					jsx(_components.code, { children: "type" }),
					" ",
					jsx(_components.code, { children: "ammo" })
				] })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "weapon.giveAll" }) }),
				jsx(_components.td, { children: "WeaponGive" }),
				jsx(_components.td, { children: "无" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "weapon.infiniteAmmo" }) }),
				jsx(_components.td, { children: "WeaponRuntimeEffects" }),
				jsx(_components.td, { children: jsx(_components.code, { children: "enable" }) })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.code, { children: "ui.notice" }) }),
				jsx(_components.td, { children: "始终可用" }),
				jsx(_components.td, { children: jsx(_components.code, { children: "text" }) })
			] })
		] })] }),
		"\n",
		jsx(_components.h2, {
			id: "线程与安全",
			children: "线程与安全"
		}),
		"\n",
		jsxs(_components.ul, { children: [
			"\n",
			jsx(_components.li, { children: "消息回调在游戏线程执行，可以直接调用 XBase 的域接口，不需要额外排队" }),
			"\n",
			jsxs(_components.li, { children: [
				"除 ",
				jsx(_components.code, { children: "ui.notice" }),
				" 走 ",
				jsx(_components.code, { children: "Host::QueueMessage" }),
				" 延迟到脚本事件外，其余方法在调用点立即生效"
			] }),
			"\n",
			jsxs(_components.li, { children: ["页面地址由宿主决定，方法表是白名单，未列出的方法一律返回 ", jsx(_components.code, { children: "unknown method" })] }),
			"\n",
			jsx(_components.li, { children: "返回值只包含状态与数值，不下发任何游戏内存地址" }),
			"\n"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "排查路径",
			children: "排查路径"
		}),
		"\n",
		jsxs(_components.ol, { children: [
			"\n",
			jsxs(_components.li, { children: [
				jsx(_components.code, { children: "window.xbase" }),
				" 未定义：确认宿主调用了 ",
				jsx(_components.code, { children: "Install()" }),
				"，并在安装后重新导航"
			] }),
			"\n",
			jsxs(_components.li, { children: [
				"调用一直挂起：确认网页由本 XBase 的 WebView 承载，且 ",
				jsx(_components.code, { children: "chrome.webview" }),
				" 可用"
			] }),
			"\n",
			jsxs(_components.li, { children: [
				"返回 ",
				jsx(_components.code, { children: "unsupported on this game" }),
				"：该方法在当前游戏不支持，按 ",
				jsx(_components.code, { children: "bridge.capabilities" }),
				" 隐藏入口"
			] }),
			"\n",
			jsxs(_components.li, { children: [
				"返回 ",
				jsx(_components.code, { children: "unknown method" }),
				"：方法名拼写或版本不一致"
			] }),
			"\n",
			jsx(_components.li, { children: "参数无效：检查参数名与类型，缺省值见方法表" }),
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
function _missingMdxReference(id, component) {
	throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
//#endregion
export { _markdown, MDXContent as default, frontmatter, structuredData, toc };
