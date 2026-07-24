# one-shot title polish; delete after apply
from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1] / "content" / "docs" / "cleo"

MAP: dict[str, str] = {
    # default class pages
    "sa/default/group.mdx": "小组 Group",
    "sa/default/pickup.mdx": "拾取物 Pickup",
    "sa/default/garage.mdx": "车库 Garage",
    "sa/default/gang.mdx": "帮派 Gang",
    "sa/default/clock.mdx": "时钟 Clock",
    "sa/default/mouse.mdx": "鼠标 Mouse",
    "sa/default/path.mdx": "路径 Path",
    "sa/default/zone.mdx": "区域 Zone",
    "sa/default/fx.mdx": "特效 Fx",
    "sa/default/misc.mdx": "杂项 Misc",
    "sa/default/mission.mdx": "任务 Mission",
    "sa/default/checkpoint.mdx": "检查点 Checkpoint",
    "sa/default/decisionmakergroup.mdx": "组决策 DecisionMakerGroup",
    "sa/default/menu.mdx": "菜单 Menu",
    "sa/default/particle.mdx": "粒子 Particle",
    "sa/default/pad.mdx": "手柄 Pad",
    "sa/default/weather.mdx": "天气 Weather",
    "sa/default/decisionmakerchar.mdx": "角色决策 DecisionMakerChar",
    "sa/default/sphere.mdx": "球体 Sphere",
    "sa/default/cargenerator.mdx": "载具生成 CarGenerator",
    "sa/default/scriptfire.mdx": "脚本火 ScriptFire",
    "sa/default/weapon.mdx": "武器 Weapon",
    "sa/default/restart.mdx": "重生点 Restart",
    "sa/default/decisionmaker.mdx": "决策器 DecisionMaker",
    "sa/default/sound.mdx": "音效 Sound",
    "sa/default/boat.mdx": "船只 Boat",
    "sa/default/debugger.mdx": "调试 Debugger",
    "sa/default/user3dmarker.mdx": "3D标记 User3DMarker",
    "sa/default/rc.mdx": "遥控 Rc",
    "sa/default/hud.mdx": "界面 Hud",
    "sa/default/skip.mdx": "跳过 Skip",
    "sa/default/blip.mdx": "标记 Blip",
    "sa/default/plane.mdx": "飞机 Plane",
    "sa/default/txd.mdx": "贴图 Txd",
    "sa/default/shopping.mdx": "商店 Shopping",
    "sa/default/cutscene.mdx": "过场 Cutscene",
    "sa/default/audio.mdx": "音频 Audio",
    "sa/default/searchlight.mdx": "探照灯 Searchlight",
    "sa/default/train.mdx": "火车 Train",
    "sa/default/sequence.mdx": "序列 Sequence",
    "sa/default/attractor.mdx": "吸引点 Attractor",
    "sa/default/heli.mdx": "直升机 Heli",
    "sa/default/crane.mdx": "吊车 Crane",
    "sa/default/trailer.mdx": "拖车 Trailer",
    "sa/default/stuckcarcheck.mdx": "卡死检测 StuckCarCheck",
    "sa/default/streamedscript.mdx": "流式脚本 StreamedScript",
    "sa/default/conversation.mdx": "对话 Conversation",
    # plus
    "sa/plus/blip.mdx": "标记 CleoBlip",
    "sa/plus/clipboard.mdx": "剪贴板 Clipboard",
    "sa/plus/dll.mdx": "动态库 DynamicLibrary",
    "sa/plus/audio.mdx": "音频 Audio",
    "sa/plus/camera.mdx": "镜头 Camera",
    "sa/plus/colpoint.mdx": "碰撞点 ColPoint",
    "sa/plus/entity-world.mdx": "世界实体 Entity World",
    "sa/plus/memory.mdx": "内存 Memory",
    "sa/plus/clock.mdx": "时钟天气 Clock / Weather",
    "sa/plus/weapon.mdx": "武器 Weapon / WeaponInfo",
    "sa/plus/entity-object.mdx": "物体实体 Entity Object",
    "sa/plus/entity-car.mdx": "载具实体 Entity Car",
    "sa/plus/txd.mdx": "贴图绘制 Txd / Draw",
    "sa/plus/matrix.mdx": "矩阵四元数 Matrix / Quat",
    "sa/plus/entity-char.mdx": "角色实体 Entity Char",
    "sa/plus/math.mdx": "数学 Math",
    "sa/plus/hud.mdx": "计时计数 Hud",
    "sa/plus/text.mdx": "文本 Text",
    "sa/plus/list.mdx": "列表 List",
    "sa/plus/streaming.mdx": "流式 Streaming",
    "sa/plus/game.mdx": "游戏任务 Game / Mission",
    "sa/plus/pad.mdx": "输入 Pad",
    "sa/plus/fx.mdx": "特效 Fx",
    "sa/plus/script.mdx": "脚本事件 Script",
    "sa/plus/entity.mdx": "实体 Entity",
    "sa/plus/mouse.mdx": "鼠标 Mouse",
    "sa/plus/pickup.mdx": "拾取物 Pickup",
    "sa/plus/render.mdx": "渲染物体 RenderObject",
    # ext root
    "sa/ext/text.mdx": "文本 Text",
    "sa/ext/sphere.mdx": "球体 Sphere",
    "sa/ext/input.mdx": "输入 Pad",
    "sa/ext/audio.mdx": "音频流 AudioStream",
    "sa/ext/clipboard.mdx": "剪贴板 Clipboard",
    "sa/ext/debug.mdx": "调试 Debug",
    "sa/ext/file.mdx": "文件 Fs / File",
    "sa/ext/ini.mdx": "配置 IniFile",
    "sa/ext/imgui/index.mdx": "界面 ImGui",
    "sa/ext/memory.mdx": "内存 Memory",
    "sa/ext/math.mdx": "数学 Math",
    # newopcodes
    "sa/ext/newopcodes/atomic.mdx": "部件 Component / Atomic",
    "sa/ext/newopcodes/fx.mdx": "特效环境 Fx",
    "sa/ext/newopcodes/draw.mdx": "绘制 Col / Draw / Txd",
    "sa/ext/newopcodes/misc.mdx": "杂项 Misc",
    "sa/ext/newopcodes/matrix.mdx": "矩阵 Matrix / Quat / Vector",
    "sa/ext/newopcodes/index.mdx": "新指令 NewOpcodes",
    "sa/ext/newopcodes/texture.mdx": "纹理精灵 Texture / Sprite",
    "sa/ext/newopcodes/print.mdx": "打印文字 PrintText",
    "sa/ext/newopcodes/entity.mdx": "实体部件 Entity / Component",
    "sa/ext/newopcodes/vehicle.mdx": "载具附加 Vehicle",
    # sampfuncs
    "sa/ext/sampfuncs/index.mdx": "扩展 SAMPFUNCS",
    "sa/ext/sampfuncs/char.mdx": "角色 Char",
    "sa/ext/sampfuncs/car.mdx": "载具 Car",
    "sa/ext/sampfuncs/object.mdx": "物体 Object",
    "sa/ext/sampfuncs/pickup.mdx": "拾取物 Pickup",
    "sa/ext/sampfuncs/misc.mdx": "杂项 Misc",
    "sa/ext/sampfuncs/sampclient.mdx": "客户端 SampClient",
    "sa/ext/sampfuncs/sampchatinput.mdx": "聊天输入 SampChatInput",
    "sa/ext/sampfuncs/sampchat.mdx": "聊天 SampChat",
    "sa/ext/sampfuncs/sftimer.mdx": "定时器 SfTimer",
    "sa/ext/sampfuncs/sampmyplayer.mdx": "本地玩家 SampMyPlayer",
    "sa/ext/sampfuncs/sampbitstream.mdx": "比特流 SampBitstream",
    "sa/ext/sampfuncs/sfconsole.mdx": "控制台 SfConsole",
    "sa/ext/sampfuncs/sfscript.mdx": "脚本 SfScript",
    "sa/ext/sampfuncs/sfdownload.mdx": "下载 SfDownload",
    "sa/ext/sampfuncs/sfgfunc.mdx": "全局函数 SfGFunc",
    "sa/ext/sampfuncs/sfgvar.mdx": "全局变量 SfGVar",
    "sa/ext/sampfuncs/sampplayer.mdx": "玩家 SampPlayer",
    "sa/ext/sampfuncs/samptextlabel3d.mdx": "3D标签 SampTextLabel3D",
    "sa/ext/sampfuncs/sfd3dfont.mdx": "D3D字体 SfD3DFont",
    "sa/ext/sampfuncs/samplocalchatcmd.mdx": "本地聊天命令 SampLocalChatCmd",
    "sa/ext/sampfuncs/sfd3dtexture.mdx": "D3D纹理 SfD3DTexture",
    "sa/ext/sampfuncs/sampraknet.mdx": "网络 SampRaknet",
    "sa/ext/sampfuncs/samptextdraw.mdx": "文本绘制 SampTextDraw",
    "sa/ext/sampfuncs/sfdxutdialog.mdx": "对话框 SfDxutDialog",
    "sa/ext/sampfuncs/sfd3d.mdx": "D3D SfD3D",
    "sa/ext/sampfuncs/sf.mdx": "核心 Sf",
}


def main() -> None:
    changed: list[str] = []
    missing: list[str] = []
    for rel, new_title in MAP.items():
        path = ROOT / rel
        if not path.exists():
            missing.append(rel)
            continue
        text = path.read_text(encoding="utf-8")
        m = re.search(r"^title:\s*(.+)$", text, re.M)
        if not m:
            missing.append(f"{rel} (no title)")
            continue
        old = m.group(1).strip()
        if old == new_title:
            continue
        new_text = re.sub(
            r"^title:\s*.+$",
            f"title: {new_title}",
            text,
            count=1,
            flags=re.M,
        )
        path.write_text(new_text, encoding="utf-8", newline="\n")
        changed.append(f"{rel}: {old} -> {new_title}")

    print(f"changed={len(changed)} missing={len(missing)}")
    for line in changed:
        print(line)
    if missing:
        print("MISSING:")
        for item in missing:
            print(item)


if __name__ == "__main__":
    main()