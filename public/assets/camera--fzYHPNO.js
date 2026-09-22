import{rt as e,t}from"./jsx-runtime-DFJu3dTM.js";var n=e(t()),r={title:`Camera`,description:`自由视角与俯视相机。`},i=`

\`include/XBase/Camera.h\` · \`XBase::Camera\`

> 相机模式、输入和恢复快照由 XBase 持有；宿主只切换模式并同步设置，不直接写相机对象。

## 模式与设置 [#模式与设置]

\`\`\`cpp
enum class Mode {
    Disabled,
    Freecam,
    TopDown,
};

struct Settings {
    float freecamFov = 70.0f;
    int freecamSpeed = 1;
    int topDownZoom = 40;
};

bool SetMode(Mode mode);
Mode GetMode();
bool IsActive();
void SetSettings(const Settings& settings);
Settings GetSettings();
\`\`\`

\`SetSettings()\` 会收敛范围：\`freecamFov\` 限制在 10~~115，\`freecamSpeed\` 限制在 1~~10，\`topDownZoom\` 限制在 10\\~100；自由视角激活时立即应用 FOV。

## 自由视角 [#自由视角]

* 进入时生成不可见 dummy ped 并挂载相机，保存并关闭 HUD/雷达显示。
* \`WASD\` 移动，鼠标控制朝向；\`Shift\` 加速，\`Alt\` 减速。
* 鼠标滚轮调整移动速度（1\\~10）；按住 \`Ctrl\` 时改为调整 FOV。
* \`Enter\` 把玩家传送到当前视角位置的地面。
* 退出时删除 dummy ped，恢复 HUD/雷达与相机 FOV。

## 俯视相机 [#俯视相机]

* 相机固定在玩家上方，高度由 \`topDownZoom\` 决定；玩家进入载具时按速度自动拉远。
* 使用视线检测避免相机穿入建筑。
* 退出时恢复进入前的 LOD 与相机状态。

## 生命周期 [#生命周期]

\`\`\`cpp
void NotifyGameInit();
void Process();
void Shutdown();
\`\`\`

\`NotifyGameInit()\` 会把模式复位为 \`Disabled\`；\`Process()\` 由 \`Core\` 领域分发；\`Shutdown()\` 恢复相机与 HUD 状态。\`SetMode()\` 切换失败时返回 \`false\` 并保持原模式。

## 版本能力 [#版本能力]

| FeatureCapability             |  SA |  VC | III |
| ----------------------------- | :-: | :-: | :-: |
| CameraFreecam / CameraTopDown |  ✅  |  ✖  |  ✖  |

VC/III 只接受 \`SetMode(Mode::Disabled)\`，其余模式返回 \`false\`；页面应通过 \`FeatureCapability\` 禁用入口。
`,a={contents:[{heading:void 0,content:"`include/XBase/Camera.h` · `XBase::Camera`"},{heading:void 0,content:`> 相机模式、输入和恢复快照由 XBase 持有；宿主只切换模式并同步设置，不直接写相机对象。`},{heading:`模式与设置`,content:"`SetSettings()` 会收敛范围：`freecamFov` 限制在 10~~115，`freecamSpeed` 限制在 1~~10，`topDownZoom` 限制在 10\\~100；自由视角激活时立即应用 FOV。"},{heading:`自由视角`,content:`进入时生成不可见 dummy ped 并挂载相机，保存并关闭 HUD/雷达显示。`},{heading:`自由视角`,content:"`WASD` 移动，鼠标控制朝向；`Shift` 加速，`Alt` 减速。"},{heading:`自由视角`,content:"鼠标滚轮调整移动速度（1\\~10）；按住 `Ctrl` 时改为调整 FOV。"},{heading:`自由视角`,content:"`Enter` 把玩家传送到当前视角位置的地面。"},{heading:`自由视角`,content:`退出时删除 dummy ped，恢复 HUD/雷达与相机 FOV。`},{heading:`俯视相机`,content:"相机固定在玩家上方，高度由 `topDownZoom` 决定；玩家进入载具时按速度自动拉远。"},{heading:`俯视相机`,content:`使用视线检测避免相机穿入建筑。`},{heading:`俯视相机`,content:`退出时恢复进入前的 LOD 与相机状态。`},{heading:`生命周期`,content:"`NotifyGameInit()` 会把模式复位为 `Disabled`；`Process()` 由 `Core` 领域分发；`Shutdown()` 恢复相机与 HUD 状态。`SetMode()` 切换失败时返回 `false` 并保持原模式。"},{heading:`版本能力`,content:`FeatureCapability`},{heading:`版本能力`,content:`SA`},{heading:`版本能力`,content:`VC`},{heading:`版本能力`,content:`III`},{heading:`版本能力`,content:`CameraFreecam / CameraTopDown`},{heading:`版本能力`,content:`✅`},{heading:`版本能力`,content:`✖`},{heading:`版本能力`,content:`✖`},{heading:`版本能力`,content:"VC/III 只接受 `SetMode(Mode::Disabled)`，其余模式返回 `false`；页面应通过 `FeatureCapability` 禁用入口。"}],headings:[{id:`模式与设置`,content:`模式与设置`},{id:`自由视角`,content:`自由视角`},{id:`俯视相机`,content:`俯视相机`},{id:`生命周期`,content:`生命周期`},{id:`版本能力`,content:`版本能力`}]},o=[{depth:2,url:`#模式与设置`,title:(0,n.jsx)(n.Fragment,{children:`模式与设置`})},{depth:2,url:`#自由视角`,title:(0,n.jsx)(n.Fragment,{children:`自由视角`})},{depth:2,url:`#俯视相机`,title:(0,n.jsx)(n.Fragment,{children:`俯视相机`})},{depth:2,url:`#生命周期`,title:(0,n.jsx)(n.Fragment,{children:`生命周期`})},{depth:2,url:`#版本能力`,title:(0,n.jsx)(n.Fragment,{children:`版本能力`})}];function s(e){let t={blockquote:`blockquote`,code:`code`,del:`del`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`include/XBase/Camera.h`}),` · `,(0,n.jsx)(t.code,{children:`XBase::Camera`})]}),`
`,(0,n.jsxs)(t.blockquote,{children:[`
`,(0,n.jsx)(t.p,{children:`相机模式、输入和恢复快照由 XBase 持有；宿主只切换模式并同步设置，不直接写相机对象。`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`模式与设置`,children:`模式与设置`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`enum`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` class`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` Mode`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`    Disabled`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`    Freecam`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`    TopDown`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`};`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`struct`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` Settings`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    float`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` freecamFov `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 70.0`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`f`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    int`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` freecamSpeed `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 1`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    int`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` topDownZoom `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 40`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`};`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`bool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` SetMode`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`Mode`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:` mode`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`Mode`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` GetMode`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`bool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` IsActive`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`void`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` SetSettings`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`const`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` Settings`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`&`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:` settings`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`Settings`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` GetSettings`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]})]})})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`SetSettings()`}),` 会收敛范围：`,(0,n.jsx)(t.code,{children:`freecamFov`}),` 限制在 10`,(0,n.jsxs)(t.del,{children:[`115，`,(0,n.jsx)(t.code,{children:`freecamSpeed`}),` 限制在 1`]}),`10，`,(0,n.jsx)(t.code,{children:`topDownZoom`}),` 限制在 10~100；自由视角激活时立即应用 FOV。`]}),`
`,(0,n.jsx)(t.h2,{id:`自由视角`,children:`自由视角`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`进入时生成不可见 dummy ped 并挂载相机，保存并关闭 HUD/雷达显示。`}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`WASD`}),` 移动，鼠标控制朝向；`,(0,n.jsx)(t.code,{children:`Shift`}),` 加速，`,(0,n.jsx)(t.code,{children:`Alt`}),` 减速。`]}),`
`,(0,n.jsxs)(t.li,{children:[`鼠标滚轮调整移动速度（1~10）；按住 `,(0,n.jsx)(t.code,{children:`Ctrl`}),` 时改为调整 FOV。`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Enter`}),` 把玩家传送到当前视角位置的地面。`]}),`
`,(0,n.jsx)(t.li,{children:`退出时删除 dummy ped，恢复 HUD/雷达与相机 FOV。`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`俯视相机`,children:`俯视相机`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[`相机固定在玩家上方，高度由 `,(0,n.jsx)(t.code,{children:`topDownZoom`}),` 决定；玩家进入载具时按速度自动拉远。`]}),`
`,(0,n.jsx)(t.li,{children:`使用视线检测避免相机穿入建筑。`}),`
`,(0,n.jsx)(t.li,{children:`退出时恢复进入前的 LOD 与相机状态。`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`生命周期`,children:`生命周期`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`void`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` NotifyGameInit`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`void`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` Process`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`void`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` Shutdown`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]})]})})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`NotifyGameInit()`}),` 会把模式复位为 `,(0,n.jsx)(t.code,{children:`Disabled`}),`；`,(0,n.jsx)(t.code,{children:`Process()`}),` 由 `,(0,n.jsx)(t.code,{children:`Core`}),` 领域分发；`,(0,n.jsx)(t.code,{children:`Shutdown()`}),` 恢复相机与 HUD 状态。`,(0,n.jsx)(t.code,{children:`SetMode()`}),` 切换失败时返回 `,(0,n.jsx)(t.code,{children:`false`}),` 并保持原模式。`]}),`
`,(0,n.jsx)(t.h2,{id:`版本能力`,children:`版本能力`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`FeatureCapability`}),(0,n.jsx)(t.th,{style:{textAlign:`center`},children:`SA`}),(0,n.jsx)(t.th,{style:{textAlign:`center`},children:`VC`}),(0,n.jsx)(t.th,{style:{textAlign:`center`},children:`III`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`CameraFreecam / CameraTopDown`}),(0,n.jsx)(t.td,{style:{textAlign:`center`},children:`✅`}),(0,n.jsx)(t.td,{style:{textAlign:`center`},children:`✖`}),(0,n.jsx)(t.td,{style:{textAlign:`center`},children:`✖`})]})})]}),`
`,(0,n.jsxs)(t.p,{children:[`VC/III 只接受 `,(0,n.jsx)(t.code,{children:`SetMode(Mode::Disabled)`}),`，其余模式返回 `,(0,n.jsx)(t.code,{children:`false`}),`；页面应通过 `,(0,n.jsx)(t.code,{children:`FeatureCapability`}),` 禁用入口。`]})]})}function c(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}export{i as _markdown,c as default,r as frontmatter,a as structuredData,o as toc};