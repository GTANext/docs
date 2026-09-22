import{rt as e,t}from"./jsx-runtime-DFJu3dTM.js";var n=e(t()),r={title:`综述`,description:`SA 游戏类 API 入口（ASI 高频）`},i=`

SA 游戏类 API 入口。源在 \`plugin_sa/game_sa\` 等。

逻辑帧用 \`processScriptsEvent\`；静态构造里 \`FindPlayer*\` 常为 null。跨游戏基础见 \`shared/game/\`（\`CVector\` / \`CRGBA\`）。\`game_sa\` 约 500+ 头：本站只收 **ASI 高频**，边界见 [覆盖边界](/docs/plugins/entities/coverage)。

## 基类与玩家 [#基类与玩家]

<Cards>
  <Card title="CPlaceable" href="/docs/plugins/entities/placeable" description="位置、朝向、矩阵" />

  <Card title="CEntity" href="/docs/plugins/entities/entity" description="模型、标志、传送、RW" />

  <Card title="CPhysical" href="/docs/plugins/entities/physical" description="速度、力、附着、免疫" />

  <Card title="FindPlayer*" href="/docs/plugins/entities/player" description="common.h 快捷" />

  <Card title="CPlayerPed" href="/docs/plugins/entities/player-ped" description="通缉、小队、冲刺" />

  <Card title="CPlayerInfo" href="/docs/plugins/entities/player-info" description="钱、最大血甲、免累" />
</Cards>

## 池与实体 [#池与实体]

<Cards>
  <Card title="对象池" href="/docs/plugins/entities/pools" description="CPools 句柄与池" />

  <Card title="行人" href="/docs/plugins/entities/ped" description="CPed" />

  <Card title="载具" href="/docs/plugins/entities/vehicle" description="CVehicle" />

  <Card title="物体" href="/docs/plugins/entities/object" description="CObject" />

  <Card title="世界" href="/docs/plugins/entities/world" description="CWorld" />

  <Card title="火" href="/docs/plugins/entities/fire" description="CFireManager" />

  <Card title="爆炸" href="/docs/plugins/entities/explosion" description="CExplosion" />

  <Card title="拾取物" href="/docs/plugins/entities/pickups" description="CPickups" />

  <Card title="抛射物" href="/docs/plugins/entities/projectile" description="CProjectileInfo" />

  <Card title="武器实例" href="/docs/plugins/entities/weapon" description="CWeapon" />
</Cards>

## 流式与资源 [#流式与资源]

<Cards>
  <Card title="模型流" href="/docs/plugins/entities/streaming" description="CStreaming" />

  <Card title="模型信息" href="/docs/plugins/entities/model-info" description="CModelInfo" />

  <Card title="TXD" href="/docs/plugins/entities/txd-store" description="CTxdStore" />

  <Card title="动画" href="/docs/plugins/entities/anim" description="CAnimManager" />

  <Card title="文件" href="/docs/plugins/entities/file-mgr" description="CFileMgr" />
</Cards>

## 人口交通路径 [#人口交通路径]

<Cards>
  <Card title="人口" href="/docs/plugins/entities/population" description="CPopulation" />

  <Card title="交通" href="/docs/plugins/entities/car-ctrl" description="CCarCtrl" />

  <Card title="路径" href="/docs/plugins/entities/pathfind" description="ThePaths" />

  <Card title="水" href="/docs/plugins/entities/water" description="CWaterLevel" />

  <Card title="室内门" href="/docs/plugins/entities/entry-exit" description="CEntryExitManager" />
</Cards>

## 绘制与 HUD [#绘制与-hud]

<Cards>
  <Card title="2D 精灵" href="/docs/plugins/entities/sprite2d" description="CSprite2d" />

  <Card title="游戏字体" href="/docs/plugins/entities/font" description="CFont" />

  <Card title="光晕 / 3D 标" href="/docs/plugins/entities/markers" description="CCoronas / C3dMarkers" />

  <Card title="影子" href="/docs/plugins/entities/shadows" description="CShadows" />

  <Card title="雷达 Blip" href="/docs/plugins/entities/radar" description="CRadar" />

  <Card title="HUD / 消息" href="/docs/plugins/entities/hud-messages" description="CHud / CMessages" />

  <Card title="镜头" href="/docs/plugins/entities/camera" description="TheCamera" />

  <Card title="CDraw" href="/docs/plugins/entities/draw" description="FOV / 裁剪" />
</Cards>

## 游戏态 [#游戏态]

<Cards>
  <Card title="计时" href="/docs/plugins/entities/timer" description="CTimer" />

  <Card title="时间周期" href="/docs/plugins/entities/time-cycle" description="CTimeCycle" />

  <Card title="时间天气武器表" href="/docs/plugins/entities/world-state" description="CClock / CWeather / CWeaponInfo" />

  <Card title="统计" href="/docs/plugins/entities/stats" description="CStats" />

  <Card title="通缉" href="/docs/plugins/entities/wanted" description="CWanted" />

  <Card title="输入" href="/docs/plugins/entities/pad" description="CPad" />

  <Card title="菜单" href="/docs/plugins/entities/menu" description="FrontEndMenuManager" />

  <Card title="CGame" href="/docs/plugins/entities/game" description="区域 / gGameState" />

  <Card title="脚本" href="/docs/plugins/entities/scripts" description="CTheScripts" />

  <Card title="音频" href="/docs/plugins/entities/audio-engine" description="AudioEngine" />

  <Card title="覆盖边界" href="/docs/plugins/entities/coverage" description="已收 / 不扩" />
</Cards>

## 注意 [#注意]

| 点    | 说明                                   |
| ---- | ------------------------------------ |
| null | \`FindPlayer*\` / \`GetPed\` 全判空         |
| 跨帧   | 存 handle 不存裸指针                       |
| 改全局  | patch / 武器表 / 天气 / 密度 备份还原           |
| 绘制帧  | 别 CREATE/DELETE；字/精灵放 \`drawingEvent\` |
`,a={contents:[{heading:void 0,content:"SA 游戏类 API 入口。源在 `plugin_sa/game_sa` 等。"},{heading:void 0,content:"逻辑帧用 `processScriptsEvent`；静态构造里 `FindPlayer*` 常为 null。跨游戏基础见 `shared/game/`（`CVector` / `CRGBA`）。`game_sa` 约 500+ 头：本站只收 **ASI 高频**，边界见 覆盖边界。"},{heading:`基类与玩家`,content:`<Card title="CPlaceable" href="/docs/plugins/entities/placeable" description="位置、朝向、矩阵" />`},{heading:`基类与玩家`,content:`<Card title="CEntity" href="/docs/plugins/entities/entity" description="模型、标志、传送、RW" />`},{heading:`基类与玩家`,content:`<Card title="CPhysical" href="/docs/plugins/entities/physical" description="速度、力、附着、免疫" />`},{heading:`基类与玩家`,content:`<Card title="FindPlayer*" href="/docs/plugins/entities/player" description="common.h 快捷" />`},{heading:`基类与玩家`,content:`<Card title="CPlayerPed" href="/docs/plugins/entities/player-ped" description="通缉、小队、冲刺" />`},{heading:`基类与玩家`,content:`<Card title="CPlayerInfo" href="/docs/plugins/entities/player-info" description="钱、最大血甲、免累" />`},{heading:`池与实体`,content:`<Card title="对象池" href="/docs/plugins/entities/pools" description="CPools 句柄与池" />`},{heading:`池与实体`,content:`<Card title="行人" href="/docs/plugins/entities/ped" description="CPed" />`},{heading:`池与实体`,content:`<Card title="载具" href="/docs/plugins/entities/vehicle" description="CVehicle" />`},{heading:`池与实体`,content:`<Card title="物体" href="/docs/plugins/entities/object" description="CObject" />`},{heading:`池与实体`,content:`<Card title="世界" href="/docs/plugins/entities/world" description="CWorld" />`},{heading:`池与实体`,content:`<Card title="火" href="/docs/plugins/entities/fire" description="CFireManager" />`},{heading:`池与实体`,content:`<Card title="爆炸" href="/docs/plugins/entities/explosion" description="CExplosion" />`},{heading:`池与实体`,content:`<Card title="拾取物" href="/docs/plugins/entities/pickups" description="CPickups" />`},{heading:`池与实体`,content:`<Card title="抛射物" href="/docs/plugins/entities/projectile" description="CProjectileInfo" />`},{heading:`池与实体`,content:`<Card title="武器实例" href="/docs/plugins/entities/weapon" description="CWeapon" />`},{heading:`流式与资源`,content:`<Card title="模型流" href="/docs/plugins/entities/streaming" description="CStreaming" />`},{heading:`流式与资源`,content:`<Card title="模型信息" href="/docs/plugins/entities/model-info" description="CModelInfo" />`},{heading:`流式与资源`,content:`<Card title="TXD" href="/docs/plugins/entities/txd-store" description="CTxdStore" />`},{heading:`流式与资源`,content:`<Card title="动画" href="/docs/plugins/entities/anim" description="CAnimManager" />`},{heading:`流式与资源`,content:`<Card title="文件" href="/docs/plugins/entities/file-mgr" description="CFileMgr" />`},{heading:`人口交通路径`,content:`<Card title="人口" href="/docs/plugins/entities/population" description="CPopulation" />`},{heading:`人口交通路径`,content:`<Card title="交通" href="/docs/plugins/entities/car-ctrl" description="CCarCtrl" />`},{heading:`人口交通路径`,content:`<Card title="路径" href="/docs/plugins/entities/pathfind" description="ThePaths" />`},{heading:`人口交通路径`,content:`<Card title="水" href="/docs/plugins/entities/water" description="CWaterLevel" />`},{heading:`人口交通路径`,content:`<Card title="室内门" href="/docs/plugins/entities/entry-exit" description="CEntryExitManager" />`},{heading:`绘制与-hud`,content:`<Card title="2D 精灵" href="/docs/plugins/entities/sprite2d" description="CSprite2d" />`},{heading:`绘制与-hud`,content:`<Card title="游戏字体" href="/docs/plugins/entities/font" description="CFont" />`},{heading:`绘制与-hud`,content:`<Card title="光晕 / 3D 标" href="/docs/plugins/entities/markers" description="CCoronas / C3dMarkers" />`},{heading:`绘制与-hud`,content:`<Card title="影子" href="/docs/plugins/entities/shadows" description="CShadows" />`},{heading:`绘制与-hud`,content:`<Card title="雷达 Blip" href="/docs/plugins/entities/radar" description="CRadar" />`},{heading:`绘制与-hud`,content:`<Card title="HUD / 消息" href="/docs/plugins/entities/hud-messages" description="CHud / CMessages" />`},{heading:`绘制与-hud`,content:`<Card title="镜头" href="/docs/plugins/entities/camera" description="TheCamera" />`},{heading:`绘制与-hud`,content:`<Card title="CDraw" href="/docs/plugins/entities/draw" description="FOV / 裁剪" />`},{heading:`游戏态`,content:`<Card title="计时" href="/docs/plugins/entities/timer" description="CTimer" />`},{heading:`游戏态`,content:`<Card title="时间周期" href="/docs/plugins/entities/time-cycle" description="CTimeCycle" />`},{heading:`游戏态`,content:`<Card title="时间天气武器表" href="/docs/plugins/entities/world-state" description="CClock / CWeather / CWeaponInfo" />`},{heading:`游戏态`,content:`<Card title="统计" href="/docs/plugins/entities/stats" description="CStats" />`},{heading:`游戏态`,content:`<Card title="通缉" href="/docs/plugins/entities/wanted" description="CWanted" />`},{heading:`游戏态`,content:`<Card title="输入" href="/docs/plugins/entities/pad" description="CPad" />`},{heading:`游戏态`,content:`<Card title="菜单" href="/docs/plugins/entities/menu" description="FrontEndMenuManager" />`},{heading:`游戏态`,content:`<Card title="CGame" href="/docs/plugins/entities/game" description="区域 / gGameState" />`},{heading:`游戏态`,content:`<Card title="脚本" href="/docs/plugins/entities/scripts" description="CTheScripts" />`},{heading:`游戏态`,content:`<Card title="音频" href="/docs/plugins/entities/audio-engine" description="AudioEngine" />`},{heading:`游戏态`,content:`<Card title="覆盖边界" href="/docs/plugins/entities/coverage" description="已收 / 不扩" />`},{heading:`注意`,content:`点`},{heading:`注意`,content:`说明`},{heading:`注意`,content:`null`},{heading:`注意`,content:"`FindPlayer*` / `GetPed` 全判空"},{heading:`注意`,content:`跨帧`},{heading:`注意`,content:`存 handle 不存裸指针`},{heading:`注意`,content:`改全局`},{heading:`注意`,content:`patch / 武器表 / 天气 / 密度 备份还原`},{heading:`注意`,content:`绘制帧`},{heading:`注意`,content:"别 CREATE/DELETE；字/精灵放 `drawingEvent`"}],headings:[{id:`基类与玩家`,content:`基类与玩家`},{id:`池与实体`,content:`池与实体`},{id:`流式与资源`,content:`流式与资源`},{id:`人口交通路径`,content:`人口交通路径`},{id:`绘制与-hud`,content:`绘制与 HUD`},{id:`游戏态`,content:`游戏态`},{id:`注意`,content:`注意`}]},o=[{depth:2,url:`#基类与玩家`,title:(0,n.jsx)(n.Fragment,{children:`基类与玩家`})},{depth:2,url:`#池与实体`,title:(0,n.jsx)(n.Fragment,{children:`池与实体`})},{depth:2,url:`#流式与资源`,title:(0,n.jsx)(n.Fragment,{children:`流式与资源`})},{depth:2,url:`#人口交通路径`,title:(0,n.jsx)(n.Fragment,{children:`人口交通路径`})},{depth:2,url:`#绘制与-hud`,title:(0,n.jsx)(n.Fragment,{children:`绘制与 HUD`})},{depth:2,url:`#游戏态`,title:(0,n.jsx)(n.Fragment,{children:`游戏态`})},{depth:2,url:`#注意`,title:(0,n.jsx)(n.Fragment,{children:`注意`})}];function s(e){let t={a:`a`,code:`code`,h2:`h2`,p:`p`,strong:`strong`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,...e.components},{Card:r,Cards:i}=t;return r||l(`Card`,!0),i||l(`Cards`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[`SA 游戏类 API 入口。源在 `,(0,n.jsx)(t.code,{children:`plugin_sa/game_sa`}),` 等。`]}),`
`,(0,n.jsxs)(t.p,{children:[`逻辑帧用 `,(0,n.jsx)(t.code,{children:`processScriptsEvent`}),`；静态构造里 `,(0,n.jsx)(t.code,{children:`FindPlayer*`}),` 常为 null。跨游戏基础见 `,(0,n.jsx)(t.code,{children:`shared/game/`}),`（`,(0,n.jsx)(t.code,{children:`CVector`}),` / `,(0,n.jsx)(t.code,{children:`CRGBA`}),`）。`,(0,n.jsx)(t.code,{children:`game_sa`}),` 约 500+ 头：本站只收 `,(0,n.jsx)(t.strong,{children:`ASI 高频`}),`，边界见 `,(0,n.jsx)(t.a,{href:`/docs/plugins/entities/coverage`,children:`覆盖边界`}),`。`]}),`
`,(0,n.jsx)(t.h2,{id:`基类与玩家`,children:`基类与玩家`}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsx)(r,{title:`CPlaceable`,href:`/docs/plugins/entities/placeable`,description:`位置、朝向、矩阵`}),(0,n.jsx)(r,{title:`CEntity`,href:`/docs/plugins/entities/entity`,description:`模型、标志、传送、RW`}),(0,n.jsx)(r,{title:`CPhysical`,href:`/docs/plugins/entities/physical`,description:`速度、力、附着、免疫`}),(0,n.jsx)(r,{title:`FindPlayer*`,href:`/docs/plugins/entities/player`,description:`common.h 快捷`}),(0,n.jsx)(r,{title:`CPlayerPed`,href:`/docs/plugins/entities/player-ped`,description:`通缉、小队、冲刺`}),(0,n.jsx)(r,{title:`CPlayerInfo`,href:`/docs/plugins/entities/player-info`,description:`钱、最大血甲、免累`})]}),`
`,(0,n.jsx)(t.h2,{id:`池与实体`,children:`池与实体`}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsx)(r,{title:`对象池`,href:`/docs/plugins/entities/pools`,description:`CPools 句柄与池`}),(0,n.jsx)(r,{title:`行人`,href:`/docs/plugins/entities/ped`,description:`CPed`}),(0,n.jsx)(r,{title:`载具`,href:`/docs/plugins/entities/vehicle`,description:`CVehicle`}),(0,n.jsx)(r,{title:`物体`,href:`/docs/plugins/entities/object`,description:`CObject`}),(0,n.jsx)(r,{title:`世界`,href:`/docs/plugins/entities/world`,description:`CWorld`}),(0,n.jsx)(r,{title:`火`,href:`/docs/plugins/entities/fire`,description:`CFireManager`}),(0,n.jsx)(r,{title:`爆炸`,href:`/docs/plugins/entities/explosion`,description:`CExplosion`}),(0,n.jsx)(r,{title:`拾取物`,href:`/docs/plugins/entities/pickups`,description:`CPickups`}),(0,n.jsx)(r,{title:`抛射物`,href:`/docs/plugins/entities/projectile`,description:`CProjectileInfo`}),(0,n.jsx)(r,{title:`武器实例`,href:`/docs/plugins/entities/weapon`,description:`CWeapon`})]}),`
`,(0,n.jsx)(t.h2,{id:`流式与资源`,children:`流式与资源`}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsx)(r,{title:`模型流`,href:`/docs/plugins/entities/streaming`,description:`CStreaming`}),(0,n.jsx)(r,{title:`模型信息`,href:`/docs/plugins/entities/model-info`,description:`CModelInfo`}),(0,n.jsx)(r,{title:`TXD`,href:`/docs/plugins/entities/txd-store`,description:`CTxdStore`}),(0,n.jsx)(r,{title:`动画`,href:`/docs/plugins/entities/anim`,description:`CAnimManager`}),(0,n.jsx)(r,{title:`文件`,href:`/docs/plugins/entities/file-mgr`,description:`CFileMgr`})]}),`
`,(0,n.jsx)(t.h2,{id:`人口交通路径`,children:`人口交通路径`}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsx)(r,{title:`人口`,href:`/docs/plugins/entities/population`,description:`CPopulation`}),(0,n.jsx)(r,{title:`交通`,href:`/docs/plugins/entities/car-ctrl`,description:`CCarCtrl`}),(0,n.jsx)(r,{title:`路径`,href:`/docs/plugins/entities/pathfind`,description:`ThePaths`}),(0,n.jsx)(r,{title:`水`,href:`/docs/plugins/entities/water`,description:`CWaterLevel`}),(0,n.jsx)(r,{title:`室内门`,href:`/docs/plugins/entities/entry-exit`,description:`CEntryExitManager`})]}),`
`,(0,n.jsx)(t.h2,{id:`绘制与-hud`,children:`绘制与 HUD`}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsx)(r,{title:`2D 精灵`,href:`/docs/plugins/entities/sprite2d`,description:`CSprite2d`}),(0,n.jsx)(r,{title:`游戏字体`,href:`/docs/plugins/entities/font`,description:`CFont`}),(0,n.jsx)(r,{title:`光晕 / 3D 标`,href:`/docs/plugins/entities/markers`,description:`CCoronas / C3dMarkers`}),(0,n.jsx)(r,{title:`影子`,href:`/docs/plugins/entities/shadows`,description:`CShadows`}),(0,n.jsx)(r,{title:`雷达 Blip`,href:`/docs/plugins/entities/radar`,description:`CRadar`}),(0,n.jsx)(r,{title:`HUD / 消息`,href:`/docs/plugins/entities/hud-messages`,description:`CHud / CMessages`}),(0,n.jsx)(r,{title:`镜头`,href:`/docs/plugins/entities/camera`,description:`TheCamera`}),(0,n.jsx)(r,{title:`CDraw`,href:`/docs/plugins/entities/draw`,description:`FOV / 裁剪`})]}),`
`,(0,n.jsx)(t.h2,{id:`游戏态`,children:`游戏态`}),`
`,(0,n.jsxs)(i,{children:[(0,n.jsx)(r,{title:`计时`,href:`/docs/plugins/entities/timer`,description:`CTimer`}),(0,n.jsx)(r,{title:`时间周期`,href:`/docs/plugins/entities/time-cycle`,description:`CTimeCycle`}),(0,n.jsx)(r,{title:`时间天气武器表`,href:`/docs/plugins/entities/world-state`,description:`CClock / CWeather / CWeaponInfo`}),(0,n.jsx)(r,{title:`统计`,href:`/docs/plugins/entities/stats`,description:`CStats`}),(0,n.jsx)(r,{title:`通缉`,href:`/docs/plugins/entities/wanted`,description:`CWanted`}),(0,n.jsx)(r,{title:`输入`,href:`/docs/plugins/entities/pad`,description:`CPad`}),(0,n.jsx)(r,{title:`菜单`,href:`/docs/plugins/entities/menu`,description:`FrontEndMenuManager`}),(0,n.jsx)(r,{title:`CGame`,href:`/docs/plugins/entities/game`,description:`区域 / gGameState`}),(0,n.jsx)(r,{title:`脚本`,href:`/docs/plugins/entities/scripts`,description:`CTheScripts`}),(0,n.jsx)(r,{title:`音频`,href:`/docs/plugins/entities/audio-engine`,description:`AudioEngine`}),(0,n.jsx)(r,{title:`覆盖边界`,href:`/docs/plugins/entities/coverage`,description:`已收 / 不扩`})]}),`
`,(0,n.jsx)(t.h2,{id:`注意`,children:`注意`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`点`}),(0,n.jsx)(t.th,{children:`说明`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`null`}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.code,{children:`FindPlayer*`}),` / `,(0,n.jsx)(t.code,{children:`GetPed`}),` 全判空`]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`跨帧`}),(0,n.jsx)(t.td,{children:`存 handle 不存裸指针`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`改全局`}),(0,n.jsx)(t.td,{children:`patch / 武器表 / 天气 / 密度 备份还原`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`绘制帧`}),(0,n.jsxs)(t.td,{children:[`别 CREATE/DELETE；字/精灵放 `,(0,n.jsx)(t.code,{children:`drawingEvent`})]})]})]})]})]})}function c(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}function l(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as _markdown,c as default,r as frontmatter,a as structuredData,o as toc};