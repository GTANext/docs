import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/cleo/sa/ext/sampfuncs/index.mdx?collection=docs
var frontmatter = {
	"title": "SA-MP SAMPFUNCS",
	"description": "SA-MP SAMPFUNCS 扩展表入口（382 条）"
};
var _markdown = "\n\n`sa` · 扩展 `SAMPFUNCS` · 仅 SA-MP；需 SAMPFUNCS 插件\n\n源：`sa.json` → `SAMPFUNCS`。共 382 条，按 class 分页。\n\n## 按页 [#按页]\n\n| 页                                                                | 约条数 | 说明               |\n| ---------------------------------------------------------------- | --: | ---------------- |\n| [car](/docs/cleo/sa/ext/sampfuncs/car)                           |   1 | Car              |\n| [char](/docs/cleo/sa/ext/sampfuncs/char)                         |   1 | Char             |\n| [object](/docs/cleo/sa/ext/sampfuncs/object)                     |   1 | Object           |\n| [pickup](/docs/cleo/sa/ext/sampfuncs/pickup)                     |   1 | Pickup           |\n| [sampbitstream](/docs/cleo/sa/ext/sampfuncs/sampbitstream)       |  25 | SampBitstream    |\n| [sampchat](/docs/cleo/sa/ext/sampfuncs/sampchat)                 |   6 | SampChat         |\n| [sampchatinput](/docs/cleo/sa/ext/sampfuncs/sampchatinput)       |   5 | SampChatInput    |\n| [sampclient](/docs/cleo/sa/ext/sampfuncs/sampclient)             |  59 | SampClient       |\n| [samplocalchatcmd](/docs/cleo/sa/ext/sampfuncs/samplocalchatcmd) |   4 | SampLocalChatCmd |\n| [sampmyplayer](/docs/cleo/sa/ext/sampfuncs/sampmyplayer)         |   3 | SampMyPlayer     |\n| [sampplayer](/docs/cleo/sa/ext/sampfuncs/sampplayer)             |  19 | SampPlayer       |\n| [sampraknet](/docs/cleo/sa/ext/sampfuncs/sampraknet)             |  49 | SampRaknet       |\n| [samptextdraw](/docs/cleo/sa/ext/sampfuncs/samptextdraw)         |  23 | SampTextDraw     |\n| [samptextlabel3d](/docs/cleo/sa/ext/sampfuncs/samptextlabel3d)   |   6 | SampTextLabel3D  |\n| [sf](/docs/cleo/sa/ext/sampfuncs/sf)                             |  82 | Sf               |\n| [sfconsole](/docs/cleo/sa/ext/sampfuncs/sfconsole)               |   7 | SfConsole        |\n| [sfd3d](/docs/cleo/sa/ext/sampfuncs/sfd3d)                       |   4 | SfD3D            |\n| [sfd3dfont](/docs/cleo/sa/ext/sampfuncs/sfd3dfont)               |   5 | SfD3DFont        |\n| [sfd3dtexture](/docs/cleo/sa/ext/sampfuncs/sfd3dtexture)         |   4 | SfD3DTexture     |\n| [sfdownload](/docs/cleo/sa/ext/sampfuncs/sfdownload)             |   3 | SfDownload       |\n| [sfdxutdialog](/docs/cleo/sa/ext/sampfuncs/sfdxutdialog)         |  38 | SfDxutDialog     |\n| [sfgfunc](/docs/cleo/sa/ext/sampfuncs/sfgfunc)                   |   6 | SfGFunc          |\n| [sfgvar](/docs/cleo/sa/ext/sampfuncs/sfgvar)                     |   5 | SfGVar           |\n| [sfscript](/docs/cleo/sa/ext/sampfuncs/sfscript)                 |   6 | SfScript         |\n| [sftimer](/docs/cleo/sa/ext/sampfuncs/sftimer)                   |   9 | SfTimer          |\n| [misc](/docs/cleo/sa/ext/sampfuncs/misc)                         |  10 | Misc             |\n\n调用见 [Lua](/docs/cleo/syntax) / [Redux](/docs/cleo/syntax-redux)。\n\n<Callout type=\"warn\" title=\"边界\">\n  仅 SA-MP 环境。单机 / 非 SAMPFUNCS 装载不要调这些 op。\n</Callout>\n\n<Callout type=\"info\" title=\"进度\">\n  SAMPFUNCS 子页全齐（含大页 `sf` · `sampclient` · `sampraknet` · `samptextdraw` · `sampplayer` · `sampbitstream` · `sfdxutdialog` · `misc`）。\n</Callout>\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "`sa` · 扩展 `SAMPFUNCS` · 仅 SA-MP；需 SAMPFUNCS 插件"
		},
		{
			"heading": void 0,
			"content": "源：`sa.json` → `SAMPFUNCS`。共 382 条，按 class 分页。"
		},
		{
			"heading": "按页",
			"content": "页"
		},
		{
			"heading": "按页",
			"content": "约条数"
		},
		{
			"heading": "按页",
			"content": "说明"
		},
		{
			"heading": "按页",
			"content": "car"
		},
		{
			"heading": "按页",
			"content": "1"
		},
		{
			"heading": "按页",
			"content": "Car"
		},
		{
			"heading": "按页",
			"content": "char"
		},
		{
			"heading": "按页",
			"content": "1"
		},
		{
			"heading": "按页",
			"content": "Char"
		},
		{
			"heading": "按页",
			"content": "object"
		},
		{
			"heading": "按页",
			"content": "1"
		},
		{
			"heading": "按页",
			"content": "Object"
		},
		{
			"heading": "按页",
			"content": "pickup"
		},
		{
			"heading": "按页",
			"content": "1"
		},
		{
			"heading": "按页",
			"content": "Pickup"
		},
		{
			"heading": "按页",
			"content": "sampbitstream"
		},
		{
			"heading": "按页",
			"content": "25"
		},
		{
			"heading": "按页",
			"content": "SampBitstream"
		},
		{
			"heading": "按页",
			"content": "sampchat"
		},
		{
			"heading": "按页",
			"content": "6"
		},
		{
			"heading": "按页",
			"content": "SampChat"
		},
		{
			"heading": "按页",
			"content": "sampchatinput"
		},
		{
			"heading": "按页",
			"content": "5"
		},
		{
			"heading": "按页",
			"content": "SampChatInput"
		},
		{
			"heading": "按页",
			"content": "sampclient"
		},
		{
			"heading": "按页",
			"content": "59"
		},
		{
			"heading": "按页",
			"content": "SampClient"
		},
		{
			"heading": "按页",
			"content": "samplocalchatcmd"
		},
		{
			"heading": "按页",
			"content": "4"
		},
		{
			"heading": "按页",
			"content": "SampLocalChatCmd"
		},
		{
			"heading": "按页",
			"content": "sampmyplayer"
		},
		{
			"heading": "按页",
			"content": "3"
		},
		{
			"heading": "按页",
			"content": "SampMyPlayer"
		},
		{
			"heading": "按页",
			"content": "sampplayer"
		},
		{
			"heading": "按页",
			"content": "19"
		},
		{
			"heading": "按页",
			"content": "SampPlayer"
		},
		{
			"heading": "按页",
			"content": "sampraknet"
		},
		{
			"heading": "按页",
			"content": "49"
		},
		{
			"heading": "按页",
			"content": "SampRaknet"
		},
		{
			"heading": "按页",
			"content": "samptextdraw"
		},
		{
			"heading": "按页",
			"content": "23"
		},
		{
			"heading": "按页",
			"content": "SampTextDraw"
		},
		{
			"heading": "按页",
			"content": "samptextlabel3d"
		},
		{
			"heading": "按页",
			"content": "6"
		},
		{
			"heading": "按页",
			"content": "SampTextLabel3D"
		},
		{
			"heading": "按页",
			"content": "sf"
		},
		{
			"heading": "按页",
			"content": "82"
		},
		{
			"heading": "按页",
			"content": "Sf"
		},
		{
			"heading": "按页",
			"content": "sfconsole"
		},
		{
			"heading": "按页",
			"content": "7"
		},
		{
			"heading": "按页",
			"content": "SfConsole"
		},
		{
			"heading": "按页",
			"content": "sfd3d"
		},
		{
			"heading": "按页",
			"content": "4"
		},
		{
			"heading": "按页",
			"content": "SfD3D"
		},
		{
			"heading": "按页",
			"content": "sfd3dfont"
		},
		{
			"heading": "按页",
			"content": "5"
		},
		{
			"heading": "按页",
			"content": "SfD3DFont"
		},
		{
			"heading": "按页",
			"content": "sfd3dtexture"
		},
		{
			"heading": "按页",
			"content": "4"
		},
		{
			"heading": "按页",
			"content": "SfD3DTexture"
		},
		{
			"heading": "按页",
			"content": "sfdownload"
		},
		{
			"heading": "按页",
			"content": "3"
		},
		{
			"heading": "按页",
			"content": "SfDownload"
		},
		{
			"heading": "按页",
			"content": "sfdxutdialog"
		},
		{
			"heading": "按页",
			"content": "38"
		},
		{
			"heading": "按页",
			"content": "SfDxutDialog"
		},
		{
			"heading": "按页",
			"content": "sfgfunc"
		},
		{
			"heading": "按页",
			"content": "6"
		},
		{
			"heading": "按页",
			"content": "SfGFunc"
		},
		{
			"heading": "按页",
			"content": "sfgvar"
		},
		{
			"heading": "按页",
			"content": "5"
		},
		{
			"heading": "按页",
			"content": "SfGVar"
		},
		{
			"heading": "按页",
			"content": "sfscript"
		},
		{
			"heading": "按页",
			"content": "6"
		},
		{
			"heading": "按页",
			"content": "SfScript"
		},
		{
			"heading": "按页",
			"content": "sftimer"
		},
		{
			"heading": "按页",
			"content": "9"
		},
		{
			"heading": "按页",
			"content": "SfTimer"
		},
		{
			"heading": "按页",
			"content": "misc"
		},
		{
			"heading": "按页",
			"content": "10"
		},
		{
			"heading": "按页",
			"content": "Misc"
		},
		{
			"heading": "按页",
			"content": "调用见 Lua / Redux。"
		},
		{
			"heading": "按页",
			"content": "仅 SA-MP 环境。单机 / 非 SAMPFUNCS 装载不要调这些 op。"
		},
		{
			"heading": "按页",
			"content": "SAMPFUNCS 子页全齐（含大页 `sf` · `sampclient` · `sampraknet` · `samptextdraw` · `sampplayer` · `sampbitstream` · `sfdxutdialog` · `misc`）。"
		}
	],
	"headings": [{
		"id": "按页",
		"content": "按页"
	}]
};
var toc = [{
	depth: 2,
	url: "#按页",
	title: jsx(Fragment, { children: "按页" })
}];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h2: "h2",
		p: "p",
		table: "table",
		tbody: "tbody",
		td: "td",
		th: "th",
		thead: "thead",
		tr: "tr",
		...props.components
	}, { Callout } = _components;
	if (!Callout) _missingMdxReference("Callout", true);
	return jsxs(Fragment, { children: [
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "sa" }),
			" · 扩展 ",
			jsx(_components.code, { children: "SAMPFUNCS" }),
			" · 仅 SA-MP；需 SAMPFUNCS 插件"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"源：",
			jsx(_components.code, { children: "sa.json" }),
			" → ",
			jsx(_components.code, { children: "SAMPFUNCS" }),
			"。共 382 条，按 class 分页。"
		] }),
		"\n",
		jsx(_components.h2, {
			id: "按页",
			children: "按页"
		}),
		"\n",
		jsxs(_components.table, { children: [jsx(_components.thead, { children: jsxs(_components.tr, { children: [
			jsx(_components.th, { children: "页" }),
			jsx(_components.th, {
				style: { textAlign: "right" },
				children: "约条数"
			}),
			jsx(_components.th, { children: "说明" })
		] }) }), jsxs(_components.tbody, { children: [
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/sampfuncs/car",
					children: "car"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "1"
				}),
				jsx(_components.td, { children: "Car" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/sampfuncs/char",
					children: "char"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "1"
				}),
				jsx(_components.td, { children: "Char" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/sampfuncs/object",
					children: "object"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "1"
				}),
				jsx(_components.td, { children: "Object" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/sampfuncs/pickup",
					children: "pickup"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "1"
				}),
				jsx(_components.td, { children: "Pickup" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/sampfuncs/sampbitstream",
					children: "sampbitstream"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "25"
				}),
				jsx(_components.td, { children: "SampBitstream" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/sampfuncs/sampchat",
					children: "sampchat"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "6"
				}),
				jsx(_components.td, { children: "SampChat" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/sampfuncs/sampchatinput",
					children: "sampchatinput"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "5"
				}),
				jsx(_components.td, { children: "SampChatInput" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/sampfuncs/sampclient",
					children: "sampclient"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "59"
				}),
				jsx(_components.td, { children: "SampClient" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/sampfuncs/samplocalchatcmd",
					children: "samplocalchatcmd"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "4"
				}),
				jsx(_components.td, { children: "SampLocalChatCmd" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/sampfuncs/sampmyplayer",
					children: "sampmyplayer"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "3"
				}),
				jsx(_components.td, { children: "SampMyPlayer" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/sampfuncs/sampplayer",
					children: "sampplayer"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "19"
				}),
				jsx(_components.td, { children: "SampPlayer" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/sampfuncs/sampraknet",
					children: "sampraknet"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "49"
				}),
				jsx(_components.td, { children: "SampRaknet" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/sampfuncs/samptextdraw",
					children: "samptextdraw"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "23"
				}),
				jsx(_components.td, { children: "SampTextDraw" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/sampfuncs/samptextlabel3d",
					children: "samptextlabel3d"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "6"
				}),
				jsx(_components.td, { children: "SampTextLabel3D" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/sampfuncs/sf",
					children: "sf"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "82"
				}),
				jsx(_components.td, { children: "Sf" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/sampfuncs/sfconsole",
					children: "sfconsole"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "7"
				}),
				jsx(_components.td, { children: "SfConsole" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/sampfuncs/sfd3d",
					children: "sfd3d"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "4"
				}),
				jsx(_components.td, { children: "SfD3D" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/sampfuncs/sfd3dfont",
					children: "sfd3dfont"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "5"
				}),
				jsx(_components.td, { children: "SfD3DFont" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/sampfuncs/sfd3dtexture",
					children: "sfd3dtexture"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "4"
				}),
				jsx(_components.td, { children: "SfD3DTexture" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/sampfuncs/sfdownload",
					children: "sfdownload"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "3"
				}),
				jsx(_components.td, { children: "SfDownload" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/sampfuncs/sfdxutdialog",
					children: "sfdxutdialog"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "38"
				}),
				jsx(_components.td, { children: "SfDxutDialog" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/sampfuncs/sfgfunc",
					children: "sfgfunc"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "6"
				}),
				jsx(_components.td, { children: "SfGFunc" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/sampfuncs/sfgvar",
					children: "sfgvar"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "5"
				}),
				jsx(_components.td, { children: "SfGVar" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/sampfuncs/sfscript",
					children: "sfscript"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "6"
				}),
				jsx(_components.td, { children: "SfScript" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/sampfuncs/sftimer",
					children: "sftimer"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "9"
				}),
				jsx(_components.td, { children: "SfTimer" })
			] }),
			jsxs(_components.tr, { children: [
				jsx(_components.td, { children: jsx(_components.a, {
					href: "/docs/cleo/sa/ext/sampfuncs/misc",
					children: "misc"
				}) }),
				jsx(_components.td, {
					style: { textAlign: "right" },
					children: "10"
				}),
				jsx(_components.td, { children: "Misc" })
			] })
		] })] }),
		"\n",
		jsxs(_components.p, { children: [
			"调用见 ",
			jsx(_components.a, {
				href: "/docs/cleo/syntax",
				children: "Lua"
			}),
			" / ",
			jsx(_components.a, {
				href: "/docs/cleo/syntax-redux",
				children: "Redux"
			}),
			"。"
		] }),
		"\n",
		jsx(Callout, {
			type: "warn",
			title: "边界",
			children: jsx(_components.p, { children: "仅 SA-MP 环境。单机 / 非 SAMPFUNCS 装载不要调这些 op。" })
		}),
		"\n",
		jsx(Callout, {
			type: "info",
			title: "进度",
			children: jsxs(_components.p, { children: [
				"SAMPFUNCS 子页全齐（含大页 ",
				jsx(_components.code, { children: "sf" }),
				" · ",
				jsx(_components.code, { children: "sampclient" }),
				" · ",
				jsx(_components.code, { children: "sampraknet" }),
				" · ",
				jsx(_components.code, { children: "samptextdraw" }),
				" · ",
				jsx(_components.code, { children: "sampplayer" }),
				" · ",
				jsx(_components.code, { children: "sampbitstream" }),
				" · ",
				jsx(_components.code, { children: "sfdxutdialog" }),
				" · ",
				jsx(_components.code, { children: "misc" }),
				"）。"
			] })
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
