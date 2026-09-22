import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/cleo/sa/default/index.mdx?collection=docs
var frontmatter = {
	"title": "SCM 原生 default",
	"description": "SCM 原生 opcode 按 class 分页"
};
var _markdown = "\n\n`sa` · 扩展 `default` · SCM 原生命令（无需额外扩展）\n\n源：SBL `sa.json` → `default`。按 class 分页。\n\nOP = 签名 `text`；调用 = [Lua](/docs/cleo/syntax) + [Redux](/docs/cleo/syntax-redux)。\n\n## 说明 [#说明]\n\n* 这是游戏 **default** opcode 表，不是 CLEO 扩展\n* 与 [CLEO 类型页](/docs/cleo/sa/memory) / [CLEO+](/docs/cleo/sa/plus) / [其它扩展](/docs/cleo/sa/ext) 互补\n* 完整在线库：[library.sannybuilder.com](https://library.sannybuilder.com/#/sa)\n\n## 进度 [#进度]\n\n| 状态 | 页                                    |\n| -- | ------------------------------------ |\n| 已迁 | **59 页**（58 class + misc 879 Opcode） |\n\n## 按 class [#按-class]\n\n| class              | 页                                                              |\n| ------------------ | -------------------------------------------------------------- |\n| Attractor          | [attractor](/docs/cleo/sa/default/attractor)                   |\n| Audio              | [audio](/docs/cleo/sa/default/audio)                           |\n| Blip               | [blip](/docs/cleo/sa/default/blip)                             |\n| Boat               | [boat](/docs/cleo/sa/default/boat)                             |\n| Camera             | [camera](/docs/cleo/sa/default/camera)                         |\n| Car                | [car](/docs/cleo/sa/default/car)                               |\n| CarGenerator       | [cargenerator](/docs/cleo/sa/default/cargenerator)             |\n| Char               | [char](/docs/cleo/sa/default/char)                             |\n| Checkpoint         | [checkpoint](/docs/cleo/sa/default/checkpoint)                 |\n| Clock              | [clock](/docs/cleo/sa/default/clock)                           |\n| Conversation       | [conversation](/docs/cleo/sa/default/conversation)             |\n| Crane              | [crane](/docs/cleo/sa/default/crane)                           |\n| Cutscene           | [cutscene](/docs/cleo/sa/default/cutscene)                     |\n| Debugger           | [debugger](/docs/cleo/sa/default/debugger)                     |\n| DecisionMaker      | [decisionmaker](/docs/cleo/sa/default/decisionmaker)           |\n| DecisionMakerChar  | [decisionmakerchar](/docs/cleo/sa/default/decisionmakerchar)   |\n| DecisionMakerGroup | [decisionmakergroup](/docs/cleo/sa/default/decisionmakergroup) |\n| Fx                 | [fx](/docs/cleo/sa/default/fx)                                 |\n| Game               | [game](/docs/cleo/sa/default/game)                             |\n| Gang               | [gang](/docs/cleo/sa/default/gang)                             |\n| Garage             | [garage](/docs/cleo/sa/default/garage)                         |\n| Group              | [group](/docs/cleo/sa/default/group)                           |\n| Heli               | [heli](/docs/cleo/sa/default/heli)                             |\n| Hud                | [hud](/docs/cleo/sa/default/hud)                               |\n| Math               | [math](/docs/cleo/sa/default/math)                             |\n| Menu               | [menu](/docs/cleo/sa/default/menu)                             |\n| Mission            | [mission](/docs/cleo/sa/default/mission)                       |\n| Mouse              | [mouse](/docs/cleo/sa/default/mouse)                           |\n| Object             | [object](/docs/cleo/sa/default/object)                         |\n| Pad                | [pad](/docs/cleo/sa/default/pad)                               |\n| Particle           | [particle](/docs/cleo/sa/default/particle)                     |\n| Path               | [path](/docs/cleo/sa/default/path)                             |\n| Pickup             | [pickup](/docs/cleo/sa/default/pickup)                         |\n| Plane              | [plane](/docs/cleo/sa/default/plane)                           |\n| Player             | [player](/docs/cleo/sa/default/player)                         |\n| Rc                 | [rc](/docs/cleo/sa/default/rc)                                 |\n| Restart            | [restart](/docs/cleo/sa/default/restart)                       |\n| ScriptFire         | [scriptfire](/docs/cleo/sa/default/scriptfire)                 |\n| Searchlight        | [searchlight](/docs/cleo/sa/default/searchlight)               |\n| Sequence           | [sequence](/docs/cleo/sa/default/sequence)                     |\n| Shopping           | [shopping](/docs/cleo/sa/default/shopping)                     |\n| Skip               | [skip](/docs/cleo/sa/default/skip)                             |\n| Sound              | [sound](/docs/cleo/sa/default/sound)                           |\n| Sphere             | [sphere](/docs/cleo/sa/default/sphere)                         |\n| Stat               | [stat](/docs/cleo/sa/default/stat)                             |\n| Streaming          | [streaming](/docs/cleo/sa/default/streaming)                   |\n| StreamedScript     | [streamedscript](/docs/cleo/sa/default/streamedscript)         |\n| StuckCarCheck      | [stuckcarcheck](/docs/cleo/sa/default/stuckcarcheck)           |\n| Task               | [task](/docs/cleo/sa/default/task)                             |\n| Text               | [text](/docs/cleo/sa/default/text)                             |\n| Trailer            | [trailer](/docs/cleo/sa/default/trailer)                       |\n| Train              | [train](/docs/cleo/sa/default/train)                           |\n| Txd                | [txd](/docs/cleo/sa/default/txd)                               |\n| User3dMarker       | [user3dmarker](/docs/cleo/sa/default/user3dmarker)             |\n| Weapon             | [weapon](/docs/cleo/sa/default/weapon)                         |\n| Weather            | [weather](/docs/cleo/sa/default/weather)                       |\n| World              | [world](/docs/cleo/sa/default/world)                           |\n| Zone               | [zone](/docs/cleo/sa/default/zone)                             |\n| Misc（无 class）      | [misc](/docs/cleo/sa/default/misc)                             |\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "`sa` · 扩展 `default` · SCM 原生命令（无需额外扩展）"
		},
		{
			"heading": void 0,
			"content": "源：SBL `sa.json` → `default`。按 class 分页。"
		},
		{
			"heading": void 0,
			"content": "OP = 签名 `text`；调用 = Lua + Redux。"
		},
		{
			"heading": "说明",
			"content": "这是游戏 **default** opcode 表，不是 CLEO 扩展"
		},
		{
			"heading": "说明",
			"content": "与 CLEO 类型页 / CLEO+ / 其它扩展 互补"
		},
		{
			"heading": "说明",
			"content": "完整在线库：library.sannybuilder.com"
		},
		{
			"heading": "进度",
			"content": "状态"
		},
		{
			"heading": "进度",
			"content": "页"
		},
		{
			"heading": "进度",
			"content": "已迁"
		},
		{
			"heading": "进度",
			"content": "**59 页**（58 class + misc 879 Opcode）"
		},
		{
			"heading": "按-class",
			"content": "class"
		},
		{
			"heading": "按-class",
			"content": "页"
		},
		{
			"heading": "按-class",
			"content": "Attractor"
		},
		{
			"heading": "按-class",
			"content": "attractor"
		},
		{
			"heading": "按-class",
			"content": "Audio"
		},
		{
			"heading": "按-class",
			"content": "audio"
		},
		{
			"heading": "按-class",
			"content": "Blip"
		},
		{
			"heading": "按-class",
			"content": "blip"
		},
		{
			"heading": "按-class",
			"content": "Boat"
		},
		{
			"heading": "按-class",
			"content": "boat"
		},
		{
			"heading": "按-class",
			"content": "Camera"
		},
		{
			"heading": "按-class",
			"content": "camera"
		},
		{
			"heading": "按-class",
			"content": "Car"
		},
		{
			"heading": "按-class",
			"content": "car"
		},
		{
			"heading": "按-class",
			"content": "CarGenerator"
		},
		{
			"heading": "按-class",
			"content": "cargenerator"
		},
		{
			"heading": "按-class",
			"content": "Char"
		},
		{
			"heading": "按-class",
			"content": "char"
		},
		{
			"heading": "按-class",
			"content": "Checkpoint"
		},
		{
			"heading": "按-class",
			"content": "checkpoint"
		},
		{
			"heading": "按-class",
			"content": "Clock"
		},
		{
			"heading": "按-class",
			"content": "clock"
		},
		{
			"heading": "按-class",
			"content": "Conversation"
		},
		{
			"heading": "按-class",
			"content": "conversation"
		},
		{
			"heading": "按-class",
			"content": "Crane"
		},
		{
			"heading": "按-class",
			"content": "crane"
		},
		{
			"heading": "按-class",
			"content": "Cutscene"
		},
		{
			"heading": "按-class",
			"content": "cutscene"
		},
		{
			"heading": "按-class",
			"content": "Debugger"
		},
		{
			"heading": "按-class",
			"content": "debugger"
		},
		{
			"heading": "按-class",
			"content": "DecisionMaker"
		},
		{
			"heading": "按-class",
			"content": "decisionmaker"
		},
		{
			"heading": "按-class",
			"content": "DecisionMakerChar"
		},
		{
			"heading": "按-class",
			"content": "decisionmakerchar"
		},
		{
			"heading": "按-class",
			"content": "DecisionMakerGroup"
		},
		{
			"heading": "按-class",
			"content": "decisionmakergroup"
		},
		{
			"heading": "按-class",
			"content": "Fx"
		},
		{
			"heading": "按-class",
			"content": "fx"
		},
		{
			"heading": "按-class",
			"content": "Game"
		},
		{
			"heading": "按-class",
			"content": "game"
		},
		{
			"heading": "按-class",
			"content": "Gang"
		},
		{
			"heading": "按-class",
			"content": "gang"
		},
		{
			"heading": "按-class",
			"content": "Garage"
		},
		{
			"heading": "按-class",
			"content": "garage"
		},
		{
			"heading": "按-class",
			"content": "Group"
		},
		{
			"heading": "按-class",
			"content": "group"
		},
		{
			"heading": "按-class",
			"content": "Heli"
		},
		{
			"heading": "按-class",
			"content": "heli"
		},
		{
			"heading": "按-class",
			"content": "Hud"
		},
		{
			"heading": "按-class",
			"content": "hud"
		},
		{
			"heading": "按-class",
			"content": "Math"
		},
		{
			"heading": "按-class",
			"content": "math"
		},
		{
			"heading": "按-class",
			"content": "Menu"
		},
		{
			"heading": "按-class",
			"content": "menu"
		},
		{
			"heading": "按-class",
			"content": "Mission"
		},
		{
			"heading": "按-class",
			"content": "mission"
		},
		{
			"heading": "按-class",
			"content": "Mouse"
		},
		{
			"heading": "按-class",
			"content": "mouse"
		},
		{
			"heading": "按-class",
			"content": "Object"
		},
		{
			"heading": "按-class",
			"content": "object"
		},
		{
			"heading": "按-class",
			"content": "Pad"
		},
		{
			"heading": "按-class",
			"content": "pad"
		},
		{
			"heading": "按-class",
			"content": "Particle"
		},
		{
			"heading": "按-class",
			"content": "particle"
		},
		{
			"heading": "按-class",
			"content": "Path"
		},
		{
			"heading": "按-class",
			"content": "path"
		},
		{
			"heading": "按-class",
			"content": "Pickup"
		},
		{
			"heading": "按-class",
			"content": "pickup"
		},
		{
			"heading": "按-class",
			"content": "Plane"
		},
		{
			"heading": "按-class",
			"content": "plane"
		},
		{
			"heading": "按-class",
			"content": "Player"
		},
		{
			"heading": "按-class",
			"content": "player"
		},
		{
			"heading": "按-class",
			"content": "Rc"
		},
		{
			"heading": "按-class",
			"content": "rc"
		},
		{
			"heading": "按-class",
			"content": "Restart"
		},
		{
			"heading": "按-class",
			"content": "restart"
		},
		{
			"heading": "按-class",
			"content": "ScriptFire"
		},
		{
			"heading": "按-class",
			"content": "scriptfire"
		},
		{
			"heading": "按-class",
			"content": "Searchlight"
		},
		{
			"heading": "按-class",
			"content": "searchlight"
		},
		{
			"heading": "按-class",
			"content": "Sequence"
		},
		{
			"heading": "按-class",
			"content": "sequence"
		},
		{
			"heading": "按-class",
			"content": "Shopping"
		},
		{
			"heading": "按-class",
			"content": "shopping"
		},
		{
			"heading": "按-class",
			"content": "Skip"
		},
		{
			"heading": "按-class",
			"content": "skip"
		},
		{
			"heading": "按-class",
			"content": "Sound"
		},
		{
			"heading": "按-class",
			"content": "sound"
		},
		{
			"heading": "按-class",
			"content": "Sphere"
		},
		{
			"heading": "按-class",
			"content": "sphere"
		},
		{
			"heading": "按-class",
			"content": "Stat"
		},
		{
			"heading": "按-class",
			"content": "stat"
		},
		{
			"heading": "按-class",
			"content": "Streaming"
		},
		{
			"heading": "按-class",
			"content": "streaming"
		},
		{
			"heading": "按-class",
			"content": "StreamedScript"
		},
		{
			"heading": "按-class",
			"content": "streamedscript"
		},
		{
			"heading": "按-class",
			"content": "StuckCarCheck"
		},
		{
			"heading": "按-class",
			"content": "stuckcarcheck"
		},
		{
			"heading": "按-class",
			"content": "Task"
		},
		{
			"heading": "按-class",
			"content": "task"
		},
		{
			"heading": "按-class",
			"content": "Text"
		},
		{
			"heading": "按-class",
			"content": "text"
		},
		{
			"heading": "按-class",
			"content": "Trailer"
		},
		{
			"heading": "按-class",
			"content": "trailer"
		},
		{
			"heading": "按-class",
			"content": "Train"
		},
		{
			"heading": "按-class",
			"content": "train"
		},
		{
			"heading": "按-class",
			"content": "Txd"
		},
		{
			"heading": "按-class",
			"content": "txd"
		},
		{
			"heading": "按-class",
			"content": "User3dMarker"
		},
		{
			"heading": "按-class",
			"content": "user3dmarker"
		},
		{
			"heading": "按-class",
			"content": "Weapon"
		},
		{
			"heading": "按-class",
			"content": "weapon"
		},
		{
			"heading": "按-class",
			"content": "Weather"
		},
		{
			"heading": "按-class",
			"content": "weather"
		},
		{
			"heading": "按-class",
			"content": "World"
		},
		{
			"heading": "按-class",
			"content": "world"
		},
		{
			"heading": "按-class",
			"content": "Zone"
		},
		{
			"heading": "按-class",
			"content": "zone"
		},
		{
			"heading": "按-class",
			"content": "Misc（无 class）"
		},
		{
			"heading": "按-class",
			"content": "misc"
		}
	],
	"headings": [
		{
			"id": "说明",
			"content": "说明"
		},
		{
			"id": "进度",
			"content": "进度"
		},
		{
			"id": "按-class",
			"content": "按 class"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#说明",
		title: jsx(Fragment, { children: "说明" })
	},
	{
		depth: 2,
		url: "#进度",
		title: jsx(Fragment, { children: "进度" })
	},
	{
		depth: 2,
		url: "#按-class",
		title: jsx(Fragment, { children: "按 class" })
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
			jsx(_components.code, { children: "sa" }),
			" · 扩展 ",
			jsx(_components.code, { children: "default" }),
			" · SCM 原生命令（无需额外扩展）"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"源：SBL ",
			jsx(_components.code, { children: "sa.json" }),
			" → ",
			jsx(_components.code, { children: "default" }),
			"。按 class 分页。"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"OP = 签名 ",
			jsx(_components.code, { children: "text" }),
			"；调用 = ",
			jsx(_components.a, {
				href: "/docs/cleo/syntax",
				children: "Lua"
			}),
			" + ",
			jsx(_components.a, {
				href: "/docs/cleo/syntax-redux",
				children: "Redux"
			}),
			"。"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "说明",
			children: "说明"
		}),
		"\n",
		jsxs(_components.ul, { children: [
			"\n",
			jsxs(_components.li, { children: [
				"这是游戏 ",
				jsx(_components.strong, { children: "default" }),
				" opcode 表，不是 CLEO 扩展"
			] }),
			"\n",
			jsxs(_components.li, { children: [
				"与 ",
				jsx(_components.a, {
					href: "/docs/cleo/sa/memory",
					children: "CLEO 类型页"
				}),
				" / ",
				jsx(_components.a, {
					href: "/docs/cleo/sa/plus",
					children: "CLEO+"
				}),
				" / ",
				jsx(_components.a, {
					href: "/docs/cleo/sa/ext",
					children: "其它扩展"
				}),
				" 互补"
			] }),
			"\n",
			jsxs(_components.li, { children: ["完整在线库：", jsx(_components.a, {
				href: "https://library.sannybuilder.com/#/sa",
				children: "library.sannybuilder.com"
			})] }),
			"\n"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "进度",
			children: "进度"
		}),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [jsx(_components.th, { children: "状态" }), jsx(_components.th, { children: "页" })] }) }), jsx(_components.tbody, { children: jsxs(_components.tr, { children: [jsx(_components.td, { children: "已迁" }), jsxs(_components.td, { children: [jsx(_components.strong, { children: "59 页" }), "（58 class + misc 879 Opcode）"] })] }) })] }),
		"\n",
		jsx(_components.h2, {
			id: "按-class",
			children: "按 class"
		}),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [jsx(_components.th, { children: "class" }), jsx(_components.th, { children: "页" })] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Attractor" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/attractor",
				children: "attractor"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Audio" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/audio",
				children: "audio"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Blip" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/blip",
				children: "blip"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Boat" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/boat",
				children: "boat"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Camera" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/camera",
				children: "camera"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Car" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/car",
				children: "car"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "CarGenerator" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/cargenerator",
				children: "cargenerator"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Char" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/char",
				children: "char"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Checkpoint" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/checkpoint",
				children: "checkpoint"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Clock" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/clock",
				children: "clock"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Conversation" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/conversation",
				children: "conversation"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Crane" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/crane",
				children: "crane"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Cutscene" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/cutscene",
				children: "cutscene"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Debugger" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/debugger",
				children: "debugger"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "DecisionMaker" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/decisionmaker",
				children: "decisionmaker"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "DecisionMakerChar" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/decisionmakerchar",
				children: "decisionmakerchar"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "DecisionMakerGroup" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/decisionmakergroup",
				children: "decisionmakergroup"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Fx" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/fx",
				children: "fx"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Game" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/game",
				children: "game"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Gang" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/gang",
				children: "gang"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Garage" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/garage",
				children: "garage"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Group" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/group",
				children: "group"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Heli" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/heli",
				children: "heli"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Hud" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/hud",
				children: "hud"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Math" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/math",
				children: "math"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Menu" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/menu",
				children: "menu"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Mission" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/mission",
				children: "mission"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Mouse" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/mouse",
				children: "mouse"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Object" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/object",
				children: "object"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Pad" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/pad",
				children: "pad"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Particle" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/particle",
				children: "particle"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Path" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/path",
				children: "path"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Pickup" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/pickup",
				children: "pickup"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Plane" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/plane",
				children: "plane"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Player" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/player",
				children: "player"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Rc" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/rc",
				children: "rc"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Restart" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/restart",
				children: "restart"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "ScriptFire" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/scriptfire",
				children: "scriptfire"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Searchlight" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/searchlight",
				children: "searchlight"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Sequence" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/sequence",
				children: "sequence"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Shopping" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/shopping",
				children: "shopping"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Skip" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/skip",
				children: "skip"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Sound" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/sound",
				children: "sound"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Sphere" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/sphere",
				children: "sphere"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Stat" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/stat",
				children: "stat"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Streaming" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/streaming",
				children: "streaming"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "StreamedScript" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/streamedscript",
				children: "streamedscript"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "StuckCarCheck" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/stuckcarcheck",
				children: "stuckcarcheck"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Task" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/task",
				children: "task"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Text" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/text",
				children: "text"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Trailer" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/trailer",
				children: "trailer"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Train" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/train",
				children: "train"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Txd" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/txd",
				children: "txd"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "User3dMarker" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/user3dmarker",
				children: "user3dmarker"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Weapon" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/weapon",
				children: "weapon"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Weather" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/weather",
				children: "weather"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "World" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/world",
				children: "world"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Zone" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/zone",
				children: "zone"
			}) })] }),
			jsxs(_components.tr, { children: [jsx(_components.td, { children: "Misc（无 class）" }), jsx(_components.td, { children: jsx(_components.a, {
				href: "/docs/cleo/sa/default/misc",
				children: "misc"
			}) })] })
		] })] })
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
