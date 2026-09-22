import{rt as e,t}from"./jsx-runtime-DFJu3dTM.js";var n=e(t()),r={title:`BulletAssist`,description:`子弹追踪、坐标透视、强制锁定与开火抑制。`},i=`

\`include/XBase/BulletAssist.h\` · \`XBase::BulletAssist\`

> 追踪计算、射线重定向和绘制由 XBase 后端持有，宿主只设置 \`Config\` 并决定 UI 开关。命中重定向只发生在本地玩家的开火作用域内，相机专用射线不参与改写。

## 配置 [#配置]

\`\`\`cpp
enum class AimPart {
    Head,
    Chest,
    Abdomen,
    Legs,
};

struct Config {
    bool tracking = false;
    bool throughWalls = false;
    bool hardLock = false;
    bool trackCivilian = true;
    bool trackFriend = false;
    bool trackHostile = true;
    bool trackNeutral = true;
    AimPart aimPart = AimPart::Chest;
    float lockRange = 100.0f;
    int maxTargets = 4;
    bool drawPedBounds = false;
    bool drawPedCollision = false;
    bool drawPedSkeleton = false;
    bool drawVehicleBounds = false;
    bool drawVehicleCollision = false;
};

void SetConfig(const Config& config);
Config GetConfig();
\`\`\`

\`lockRange\` 下限为 10，\`maxTargets\` 限定 1\\~16，越界值由 XBase 在 \`SetConfig()\` 内收敛。

## 生命周期 [#生命周期]

\`\`\`cpp
void Init();
bool IsInitialized();
void Process();
void Shutdown();
void Draw();
\`\`\`

\`Init()\`、\`Process()\`、\`Shutdown()\` 由 \`Core\` 领域分发，宿主不要绕过 Core 建立第二套 \`Process()\`。\`Draw()\` 由宿主在绘制回调中调用，只负责 ESP 显示，不驱动目标搜索。

## 开火抑制 [#开火抑制]

\`\`\`cpp
bool ShouldSuppressPedFire(PedId ped);
\`\`\`

只提供开火抑制判断，不暴露 \`CPed*\`；Ped 分类与总开关由 \`XBase::Ped::SetNoFire()\` 负责。

## 行为边界 [#行为边界]

* 目标搜索基于相机前向与距离评分，关系过滤使用任务关系（平民/友军/敌对/中立），被锁定目标在每次开火时轮询。
* 追踪命中重定向只作用于本地玩家的开火调用栈；相机专用射线（\`cameraIgnore\`）始终按原参数放行。
* 追踪命中时只强制开启行人碰撞；只有启用 \`throughWalls\` 才关闭建筑、物体与假对象碰撞。
* 已损毁载具不会作为有效命中实体返回。
* \`hardLock\` 需要同时开启 \`tracking\` 并按住瞄准输入（瞄准键或鼠标键）才生效；锁定目标具有粘性，目标失效后才切换到准星最优目标，不会随多发轮询跳视角。
* 剧情、过场动画、相机过渡、玩家控制被脚本禁用、玩家死亡或濒死、相机缓冲或行人池不可用时，追踪计算、射线重定向与 ESP 绘制同时停止，并持续清空候选列表、本次射击目标与强锁目标；离开阻断状态后延迟 750 毫秒自动恢复，不需要宿主重新开关功能。

## 版本能力 [#版本能力]

| FeatureCapability                                                           |  SA |  VC | III |
| --------------------------------------------------------------------------- | :-: | :-: | :-: |
| BulletAssistTracking / ThroughWalls / HardLock / PedBounds / VehicleBounds  |  ✅  |  ✅  |  ✖  |
| BulletAssistPedCollision / PedSkeleton / VehicleCollision / FireSuppression |  ◐  |  ◐  |  ✖  |

标注 ◐ 表示同领域内仍有部分动作受限。页面必须逐项查询 \`FeatureCapability\`，不能因为 \`Capability::BulletAssist\` 可链接就启用全部开关；III 当前没有可用的追踪后端。
`,a={contents:[{heading:void 0,content:"`include/XBase/BulletAssist.h` · `XBase::BulletAssist`"},{heading:void 0,content:"> 追踪计算、射线重定向和绘制由 XBase 后端持有，宿主只设置 `Config` 并决定 UI 开关。命中重定向只发生在本地玩家的开火作用域内，相机专用射线不参与改写。"},{heading:`配置`,content:"`lockRange` 下限为 10，`maxTargets` 限定 1\\~16，越界值由 XBase 在 `SetConfig()` 内收敛。"},{heading:`生命周期`,content:"`Init()`、`Process()`、`Shutdown()` 由 `Core` 领域分发，宿主不要绕过 Core 建立第二套 `Process()`。`Draw()` 由宿主在绘制回调中调用，只负责 ESP 显示，不驱动目标搜索。"},{heading:`开火抑制`,content:"只提供开火抑制判断，不暴露 `CPed*`；Ped 分类与总开关由 `XBase::Ped::SetNoFire()` 负责。"},{heading:`行为边界`,content:`目标搜索基于相机前向与距离评分，关系过滤使用任务关系（平民/友军/敌对/中立），被锁定目标在每次开火时轮询。`},{heading:`行为边界`,content:"追踪命中重定向只作用于本地玩家的开火调用栈；相机专用射线（`cameraIgnore`）始终按原参数放行。"},{heading:`行为边界`,content:"追踪命中时只强制开启行人碰撞；只有启用 `throughWalls` 才关闭建筑、物体与假对象碰撞。"},{heading:`行为边界`,content:`已损毁载具不会作为有效命中实体返回。`},{heading:`行为边界`,content:"`hardLock` 需要同时开启 `tracking` 并按住瞄准输入（瞄准键或鼠标键）才生效；锁定目标具有粘性，目标失效后才切换到准星最优目标，不会随多发轮询跳视角。"},{heading:`行为边界`,content:`剧情、过场动画、相机过渡、玩家控制被脚本禁用、玩家死亡或濒死、相机缓冲或行人池不可用时，追踪计算、射线重定向与 ESP 绘制同时停止，并持续清空候选列表、本次射击目标与强锁目标；离开阻断状态后延迟 750 毫秒自动恢复，不需要宿主重新开关功能。`},{heading:`版本能力`,content:`FeatureCapability`},{heading:`版本能力`,content:`SA`},{heading:`版本能力`,content:`VC`},{heading:`版本能力`,content:`III`},{heading:`版本能力`,content:`BulletAssistTracking / ThroughWalls / HardLock / PedBounds / VehicleBounds`},{heading:`版本能力`,content:`✅`},{heading:`版本能力`,content:`✅`},{heading:`版本能力`,content:`✖`},{heading:`版本能力`,content:`BulletAssistPedCollision / PedSkeleton / VehicleCollision / FireSuppression`},{heading:`版本能力`,content:`◐`},{heading:`版本能力`,content:`◐`},{heading:`版本能力`,content:`✖`},{heading:`版本能力`,content:"标注 ◐ 表示同领域内仍有部分动作受限。页面必须逐项查询 `FeatureCapability`，不能因为 `Capability::BulletAssist` 可链接就启用全部开关；III 当前没有可用的追踪后端。"}],headings:[{id:`配置`,content:`配置`},{id:`生命周期`,content:`生命周期`},{id:`开火抑制`,content:`开火抑制`},{id:`行为边界`,content:`行为边界`},{id:`版本能力`,content:`版本能力`}]},o=[{depth:2,url:`#配置`,title:(0,n.jsx)(n.Fragment,{children:`配置`})},{depth:2,url:`#生命周期`,title:(0,n.jsx)(n.Fragment,{children:`生命周期`})},{depth:2,url:`#开火抑制`,title:(0,n.jsx)(n.Fragment,{children:`开火抑制`})},{depth:2,url:`#行为边界`,title:(0,n.jsx)(n.Fragment,{children:`行为边界`})},{depth:2,url:`#版本能力`,title:(0,n.jsx)(n.Fragment,{children:`版本能力`})}];function s(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`include/XBase/BulletAssist.h`}),` · `,(0,n.jsx)(t.code,{children:`XBase::BulletAssist`})]}),`
`,(0,n.jsxs)(t.blockquote,{children:[`
`,(0,n.jsxs)(t.p,{children:[`追踪计算、射线重定向和绘制由 XBase 后端持有，宿主只设置 `,(0,n.jsx)(t.code,{children:`Config`}),` 并决定 UI 开关。命中重定向只发生在本地玩家的开火作用域内，相机专用射线不参与改写。`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`配置`,children:`配置`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`enum`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` class`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` AimPart`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`    Head`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`    Chest`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`    Abdomen`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`    Legs`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`,`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`};`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`struct`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` Config`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    bool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` tracking `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` false`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    bool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` throughWalls `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` false`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    bool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` hardLock `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` false`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    bool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` trackCivilian `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` true`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    bool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` trackFriend `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` false`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    bool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` trackHostile `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` true`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    bool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` trackNeutral `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` true`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`    AimPart aimPart `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` AimPart`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`::Chest;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    float`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` lockRange `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 100.0`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`f`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    int`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` maxTargets `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` 4`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    bool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` drawPedBounds `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` false`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    bool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` drawPedCollision `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` false`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    bool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` drawPedSkeleton `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` false`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    bool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` drawVehicleBounds `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` false`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    bool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` drawVehicleCollision `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` false`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`};`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`void`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` SetConfig`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`const`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` Config`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`&`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:` config`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`Config`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` GetConfig`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]})]})})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`lockRange`}),` 下限为 10，`,(0,n.jsx)(t.code,{children:`maxTargets`}),` 限定 1~16，越界值由 XBase 在 `,(0,n.jsx)(t.code,{children:`SetConfig()`}),` 内收敛。`]}),`
`,(0,n.jsx)(t.h2,{id:`生命周期`,children:`生命周期`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`void`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` Init`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`bool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` IsInitialized`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`void`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` Process`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`void`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` Shutdown`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`void`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` Draw`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]})]})})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`Init()`}),`、`,(0,n.jsx)(t.code,{children:`Process()`}),`、`,(0,n.jsx)(t.code,{children:`Shutdown()`}),` 由 `,(0,n.jsx)(t.code,{children:`Core`}),` 领域分发，宿主不要绕过 Core 建立第二套 `,(0,n.jsx)(t.code,{children:`Process()`}),`。`,(0,n.jsx)(t.code,{children:`Draw()`}),` 由宿主在绘制回调中调用，只负责 ESP 显示，不驱动目标搜索。`]}),`
`,(0,n.jsx)(t.h2,{id:`开火抑制`,children:`开火抑制`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`bool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` ShouldSuppressPedFire`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`PedId`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:` ped`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]})})})}),`
`,(0,n.jsxs)(t.p,{children:[`只提供开火抑制判断，不暴露 `,(0,n.jsx)(t.code,{children:`CPed*`}),`；Ped 分类与总开关由 `,(0,n.jsx)(t.code,{children:`XBase::Ped::SetNoFire()`}),` 负责。`]}),`
`,(0,n.jsx)(t.h2,{id:`行为边界`,children:`行为边界`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`目标搜索基于相机前向与距离评分，关系过滤使用任务关系（平民/友军/敌对/中立），被锁定目标在每次开火时轮询。`}),`
`,(0,n.jsxs)(t.li,{children:[`追踪命中重定向只作用于本地玩家的开火调用栈；相机专用射线（`,(0,n.jsx)(t.code,{children:`cameraIgnore`}),`）始终按原参数放行。`]}),`
`,(0,n.jsxs)(t.li,{children:[`追踪命中时只强制开启行人碰撞；只有启用 `,(0,n.jsx)(t.code,{children:`throughWalls`}),` 才关闭建筑、物体与假对象碰撞。`]}),`
`,(0,n.jsx)(t.li,{children:`已损毁载具不会作为有效命中实体返回。`}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`hardLock`}),` 需要同时开启 `,(0,n.jsx)(t.code,{children:`tracking`}),` 并按住瞄准输入（瞄准键或鼠标键）才生效；锁定目标具有粘性，目标失效后才切换到准星最优目标，不会随多发轮询跳视角。`]}),`
`,(0,n.jsx)(t.li,{children:`剧情、过场动画、相机过渡、玩家控制被脚本禁用、玩家死亡或濒死、相机缓冲或行人池不可用时，追踪计算、射线重定向与 ESP 绘制同时停止，并持续清空候选列表、本次射击目标与强锁目标；离开阻断状态后延迟 750 毫秒自动恢复，不需要宿主重新开关功能。`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`版本能力`,children:`版本能力`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`FeatureCapability`}),(0,n.jsx)(t.th,{style:{textAlign:`center`},children:`SA`}),(0,n.jsx)(t.th,{style:{textAlign:`center`},children:`VC`}),(0,n.jsx)(t.th,{style:{textAlign:`center`},children:`III`})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`BulletAssistTracking / ThroughWalls / HardLock / PedBounds / VehicleBounds`}),(0,n.jsx)(t.td,{style:{textAlign:`center`},children:`✅`}),(0,n.jsx)(t.td,{style:{textAlign:`center`},children:`✅`}),(0,n.jsx)(t.td,{style:{textAlign:`center`},children:`✖`})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`BulletAssistPedCollision / PedSkeleton / VehicleCollision / FireSuppression`}),(0,n.jsx)(t.td,{style:{textAlign:`center`},children:`◐`}),(0,n.jsx)(t.td,{style:{textAlign:`center`},children:`◐`}),(0,n.jsx)(t.td,{style:{textAlign:`center`},children:`✖`})]})]})]}),`
`,(0,n.jsxs)(t.p,{children:[`标注 ◐ 表示同领域内仍有部分动作受限。页面必须逐项查询 `,(0,n.jsx)(t.code,{children:`FeatureCapability`}),`，不能因为 `,(0,n.jsx)(t.code,{children:`Capability::BulletAssist`}),` 可链接就启用全部开关；III 当前没有可用的追踪后端。`]})]})}function c(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}export{i as _markdown,c as default,r as frontmatter,a as structuredData,o as toc};