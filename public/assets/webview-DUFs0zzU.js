import{rt as e,t}from"./jsx-runtime-DFJu3dTM.js";var n=e(t()),r={title:`WebView`,description:`通过系统 WebView2 在游戏窗口内渲染网页。`},i=`

\`include/XBase/WebView.h\` · \`XBase::WebView\`

> 网页由系统 WebView2 渲染在游戏窗口内的独立子窗口里；XBase 负责生命周期、面板位置、输入焦点与状态查询，宿主只提交 URL、可见性和尺寸。

## 运行时要求 [#运行时要求]

* Windows 10/11 安装 WebView2 运行时（Evergreen）。
* 载荷目录存在 \`WebView2Loader.dll\`，构建流程会把它和 payload 一起输出。
* 入口先用 \`IsRuntimeAvailable()\` 判断，不可用时不要启用相关 UI。

## API [#api]

\`\`\`cpp
struct State {
    bool initialized;
    bool visible;
    bool loading;
    bool canGoBack;
    bool canGoForward;
    int lastError;
    std::string url;
    std::string title;
};

bool IsRuntimeAvailable();
bool Init();
bool IsInitialized();
void NotifyGameInit();
void Process();
void Shutdown();

bool Navigate(const std::string& url);
bool SetHtml(const std::string& html);
void Reload();
bool GoBack();
bool GoForward();
void SetZoom(float factor);

void SetVisible(bool visible);
bool IsVisible();
void SetBounds(const Rect& bounds);
State GetState();
bool Close();

bool UsesCaptureMode();
void DrawPanel(const Rect& bounds);
void ForwardPanelInput(const Rect& bounds, Vec2 mouse, bool mouseDown, float wheelDelta);

void SetStateCallback(StateCallback callback);

using MessageHandler = std::function<void(const std::string& json)>;
void SetMessageHandler(MessageHandler handler);
bool PostJson(const std::string& json);
bool InjectScript(const std::string& script);
\`\`\`

\`SetMessageHandler()\` 接收网页用 \`chrome.webview.postMessage\` 发来的原始 JSON，回调在游戏线程执行；\`PostJson()\` 反向投递，网页用 \`chrome.webview\` 的 message 事件接收；\`InjectScript()\` 在页面脚本之前注入代码，控制器尚未创建时会排队。需要现成的调用约定时用 \`WebBridge\`。

## 全屏抓帧模式 [#全屏抓帧模式]

独占全屏时 DWM 不合成子窗口，HWND 覆盖层永远不可见，此时 \`UsesCaptureMode()\` 返回真，宿主改用抓帧贴图：

* \`DrawPanel()\` 在 \`SetBounds()\` 提交的同一矩形内绘制最新一帧（抓帧解码后上传 D3D9 贴图），宿主在占位控件之后调用即可。
* \`ForwardPanelInput()\` 把鼠标位置换算成页面坐标，转发悬停、点击与滚轮（\`UI::IsLastItemHovered()\` + \`UI::GetMousePosition()\` + \`Hooks::ConsumeWheelDelta()\`）。
* 抓帧与面板同尺寸，1:1 显示不缩放；静止时用 PNG 保证清晰度，交互时改用 JPEG 把抓帧间隔压到 120ms，空闲间隔 500ms，点击与滚轮后立即重抓。
* 抓帧模式不抢焦点，游戏与菜单热键保持可用；受限于位图转发，页面内的文本输入与输入法不可用，帧率也低于原生渲染。
* 想要原生渲染与文字输入时，让游戏进入窗口或无边框模式（\`Hooks::SetWindowMode(WindowMode::Borderless)\`）；窗口由 DWM 合成后本页自动回落到原生覆盖层，抓帧模式随之关闭。

## 隐藏与关闭 [#隐藏与关闭]

* \`SetVisible(false)\` 只隐藏面板，浏览器与宿主窗口保持存活，再次显示几乎瞬时完成，对应窗口的最小化
* \`Close()\` 释放浏览器与宿主窗口，内存归还系统，之后再次 \`SetVisible(true)\` 或 \`Navigate\` 会重新创建，对应窗口的关闭
* 菜单关闭等临时场景用隐藏，长期不用或需要回收内存时用关闭；\`Shutdown()\` 是卸载路径，与两者都不同

## 生命周期与边界 [#生命周期与边界]

* \`Init()\` 只检查运行时并登记请求，不会立刻创建浏览器；真正的环境与控制器创建延迟到宿主请求页面之后（\`Navigate\`、\`SetHtml\`、\`SetVisible(true)\` 都会登记请求）的 \`Process()\` 安全点执行，因此不会在渲染钩子里重入消息循环，未使用网页时也不会启动浏览器进程。
* 创建是异步的；完成后 \`GetState().initialized\` 为真，之前提交的 \`Navigate\`/\`SetHtml\` 会自动补发，若期间已请求显示则直接可见。
* 领域卸载时若创建仍在进行，会等待回调到达后自行释放控制器并销毁宿主窗口，避免父窗口句柄被复用。
* \`SetBounds()\` 接收与 \`UI::GetDisplaySize()\` 同坐标系的矩形（ImGui 显示像素，通常按菜单内容区计算），XBase 内部按游戏客户区比例换算并裁剪到游戏窗口内。
* 网页渲染为窗口期覆盖层，无法被 ImGui 裁剪，宿主应把矩形限制在菜单窗口可见区域内（菜单滚动时用 \`UI::GetCurrentWindowRect()\` 求交集）。
* 显示时网页子窗口取得焦点，游戏收不到键盘输入；隐藏时焦点交还游戏窗口。独占全屏下不取焦点，改由抓帧模式呈现。
* 面板聚焦期间按键只到达网页子窗口，XBase 通过加速键事件与系统状态轮询补齐输入，菜单热键仍然可用。
* 菜单关闭后面板自动隐藏，宿主无需在关闭流程里手动调用 \`SetVisible(false)\`。
* 关闭菜单、切换场景或新游戏时调用 \`SetVisible(false)\`；\`NotifyGameInit()\` 会自动隐藏。
* 窗口化与无边框模式下网页渲染为窗口期覆盖层，由 DWM 合成；独占全屏切换为抓帧贴图，两种状态都由 XBase 自动判定。
* 浏览器数据目录位于载荷目录下的 \`XBase\\webview2\`，由 XBase 创建。
* 导航、标题、前进后退状态通过事件更新，\`SetStateCallback()\` 可在游戏线程收到变化通知。

## 版本能力 [#版本能力]

| Capability |  SA |  VC | III |
| ---------- | :-: | :-: | :-: |
| WebView    |  ✅  |  ✅  |  ✅  |

实现位于 Win32/COM 层，不访问游戏内存与插件地址；真实可用性由 \`IsRuntimeAvailable()\` 在运行时判定。
`,a={contents:[{heading:void 0,content:"`include/XBase/WebView.h` · `XBase::WebView`"},{heading:void 0,content:`> 网页由系统 WebView2 渲染在游戏窗口内的独立子窗口里；XBase 负责生命周期、面板位置、输入焦点与状态查询，宿主只提交 URL、可见性和尺寸。`},{heading:`运行时要求`,content:`Windows 10/11 安装 WebView2 运行时（Evergreen）。`},{heading:`运行时要求`,content:"载荷目录存在 `WebView2Loader.dll`，构建流程会把它和 payload 一起输出。"},{heading:`运行时要求`,content:"入口先用 `IsRuntimeAvailable()` 判断，不可用时不要启用相关 UI。"},{heading:`api`,content:"`SetMessageHandler()` 接收网页用 `chrome.webview.postMessage` 发来的原始 JSON，回调在游戏线程执行；`PostJson()` 反向投递，网页用 `chrome.webview` 的 message 事件接收；`InjectScript()` 在页面脚本之前注入代码，控制器尚未创建时会排队。需要现成的调用约定时用 `WebBridge`。"},{heading:`全屏抓帧模式`,content:"独占全屏时 DWM 不合成子窗口，HWND 覆盖层永远不可见，此时 `UsesCaptureMode()` 返回真，宿主改用抓帧贴图："},{heading:`全屏抓帧模式`,content:"`DrawPanel()` 在 `SetBounds()` 提交的同一矩形内绘制最新一帧（抓帧解码后上传 D3D9 贴图），宿主在占位控件之后调用即可。"},{heading:`全屏抓帧模式`,content:"`ForwardPanelInput()` 把鼠标位置换算成页面坐标，转发悬停、点击与滚轮（`UI::IsLastItemHovered()` + `UI::GetMousePosition()` + `Hooks::ConsumeWheelDelta()`）。"},{heading:`全屏抓帧模式`,content:`抓帧与面板同尺寸，1:1 显示不缩放；静止时用 PNG 保证清晰度，交互时改用 JPEG 把抓帧间隔压到 120ms，空闲间隔 500ms，点击与滚轮后立即重抓。`},{heading:`全屏抓帧模式`,content:`抓帧模式不抢焦点，游戏与菜单热键保持可用；受限于位图转发，页面内的文本输入与输入法不可用，帧率也低于原生渲染。`},{heading:`全屏抓帧模式`,content:"想要原生渲染与文字输入时，让游戏进入窗口或无边框模式（`Hooks::SetWindowMode(WindowMode::Borderless)`）；窗口由 DWM 合成后本页自动回落到原生覆盖层，抓帧模式随之关闭。"},{heading:`隐藏与关闭`,content:"`SetVisible(false)` 只隐藏面板，浏览器与宿主窗口保持存活，再次显示几乎瞬时完成，对应窗口的最小化"},{heading:`隐藏与关闭`,content:"`Close()` 释放浏览器与宿主窗口，内存归还系统，之后再次 `SetVisible(true)` 或 `Navigate` 会重新创建，对应窗口的关闭"},{heading:`隐藏与关闭`,content:"菜单关闭等临时场景用隐藏，长期不用或需要回收内存时用关闭；`Shutdown()` 是卸载路径，与两者都不同"},{heading:`生命周期与边界`,content:"`Init()` 只检查运行时并登记请求，不会立刻创建浏览器；真正的环境与控制器创建延迟到宿主请求页面之后（`Navigate`、`SetHtml`、`SetVisible(true)` 都会登记请求）的 `Process()` 安全点执行，因此不会在渲染钩子里重入消息循环，未使用网页时也不会启动浏览器进程。"},{heading:`生命周期与边界`,content:"创建是异步的；完成后 `GetState().initialized` 为真，之前提交的 `Navigate`/`SetHtml` 会自动补发，若期间已请求显示则直接可见。"},{heading:`生命周期与边界`,content:`领域卸载时若创建仍在进行，会等待回调到达后自行释放控制器并销毁宿主窗口，避免父窗口句柄被复用。`},{heading:`生命周期与边界`,content:"`SetBounds()` 接收与 `UI::GetDisplaySize()` 同坐标系的矩形（ImGui 显示像素，通常按菜单内容区计算），XBase 内部按游戏客户区比例换算并裁剪到游戏窗口内。"},{heading:`生命周期与边界`,content:"网页渲染为窗口期覆盖层，无法被 ImGui 裁剪，宿主应把矩形限制在菜单窗口可见区域内（菜单滚动时用 `UI::GetCurrentWindowRect()` 求交集）。"},{heading:`生命周期与边界`,content:`显示时网页子窗口取得焦点，游戏收不到键盘输入；隐藏时焦点交还游戏窗口。独占全屏下不取焦点，改由抓帧模式呈现。`},{heading:`生命周期与边界`,content:`面板聚焦期间按键只到达网页子窗口，XBase 通过加速键事件与系统状态轮询补齐输入，菜单热键仍然可用。`},{heading:`生命周期与边界`,content:"菜单关闭后面板自动隐藏，宿主无需在关闭流程里手动调用 `SetVisible(false)`。"},{heading:`生命周期与边界`,content:"关闭菜单、切换场景或新游戏时调用 `SetVisible(false)`；`NotifyGameInit()` 会自动隐藏。"},{heading:`生命周期与边界`,content:`窗口化与无边框模式下网页渲染为窗口期覆盖层，由 DWM 合成；独占全屏切换为抓帧贴图，两种状态都由 XBase 自动判定。`},{heading:`生命周期与边界`,content:"浏览器数据目录位于载荷目录下的 `XBase\\webview2`，由 XBase 创建。"},{heading:`生命周期与边界`,content:"导航、标题、前进后退状态通过事件更新，`SetStateCallback()` 可在游戏线程收到变化通知。"},{heading:`版本能力`,content:`Capability`},{heading:`版本能力`,content:`SA`},{heading:`版本能力`,content:`VC`},{heading:`版本能力`,content:`III`},{heading:`版本能力`,content:`WebView`},{heading:`版本能力`,content:`✅`},{heading:`版本能力`,content:`✅`},{heading:`版本能力`,content:`✅`},{heading:`版本能力`,content:"实现位于 Win32/COM 层，不访问游戏内存与插件地址；真实可用性由 `IsRuntimeAvailable()` 在运行时判定。"}],headings:[{id:`运行时要求`,content:`运行时要求`},{id:`api`,content:`API`},{id:`全屏抓帧模式`,content:`全屏抓帧模式`},{id:`隐藏与关闭`,content:`隐藏与关闭`},{id:`生命周期与边界`,content:`生命周期与边界`},{id:`版本能力`,content:`版本能力`}]},o=[{depth:2,url:`#运行时要求`,title:(0,n.jsx)(n.Fragment,{children:`运行时要求`})},{depth:2,url:`#api`,title:(0,n.jsx)(n.Fragment,{children:`API`})},{depth:2,url:`#全屏抓帧模式`,title:(0,n.jsx)(n.Fragment,{children:`全屏抓帧模式`})},{depth:2,url:`#隐藏与关闭`,title:(0,n.jsx)(n.Fragment,{children:`隐藏与关闭`})},{depth:2,url:`#生命周期与边界`,title:(0,n.jsx)(n.Fragment,{children:`生命周期与边界`})},{depth:2,url:`#版本能力`,title:(0,n.jsx)(n.Fragment,{children:`版本能力`})}];function s(e){let t={blockquote:`blockquote`,code:`code`,h2:`h2`,li:`li`,p:`p`,pre:`pre`,span:`span`,table:`table`,tbody:`tbody`,td:`td`,th:`th`,thead:`thead`,tr:`tr`,ul:`ul`,...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`include/XBase/WebView.h`}),` · `,(0,n.jsx)(t.code,{children:`XBase::WebView`})]}),`
`,(0,n.jsxs)(t.blockquote,{children:[`
`,(0,n.jsx)(t.p,{children:`网页由系统 WebView2 渲染在游戏窗口内的独立子窗口里；XBase 负责生命周期、面板位置、输入焦点与状态查询，宿主只提交 URL、可见性和尺寸。`}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`运行时要求`,children:`运行时要求`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsx)(t.li,{children:`Windows 10/11 安装 WebView2 运行时（Evergreen）。`}),`
`,(0,n.jsxs)(t.li,{children:[`载荷目录存在 `,(0,n.jsx)(t.code,{children:`WebView2Loader.dll`}),`，构建流程会把它和 payload 一起输出。`]}),`
`,(0,n.jsxs)(t.li,{children:[`入口先用 `,(0,n.jsx)(t.code,{children:`IsRuntimeAvailable()`}),` 判断，不可用时不要启用相关 UI。`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`api`,children:`API`}),`
`,(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`struct`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` State`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` {`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    bool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` initialized;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    bool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` visible;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    bool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` loading;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    bool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` canGoBack;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    bool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` canGoForward;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`    int`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` lastError;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`    std`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`::string url;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`    std`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`::string title;`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`};`})}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`bool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` IsRuntimeAvailable`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`bool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` Init`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`bool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` IsInitialized`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`void`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` NotifyGameInit`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`void`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` Process`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`void`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` Shutdown`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`bool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` Navigate`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`const`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` std`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`string`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`&`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:` url`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`bool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` SetHtml`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`const`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` std`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`string`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`&`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:` html`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`void`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` Reload`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`bool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` GoBack`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`bool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` GoForward`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`void`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` SetZoom`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`float`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:` factor`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`void`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` SetVisible`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`bool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:` visible`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`bool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` IsVisible`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`void`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` SetBounds`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`const`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` Rect`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`&`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:` bounds`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`State`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` GetState`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`bool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` Close`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`bool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` UsesCaptureMode`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`();`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`void`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` DrawPanel`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`const`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` Rect`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`&`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:` bounds`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`void`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` ForwardPanelInput`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`const`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` Rect`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`&`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:` bounds`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`Vec2`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:` mouse`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`bool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:` mouseDown`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`float`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:` wheelDelta`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`void`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` SetStateCallback`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`StateCallback`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:` callback`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsx)(t.span,{className:`line`}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`using`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` MessageHandler`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` std`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`function`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`<`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`void`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`const`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` std`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`string`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`&`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` json`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`)>;`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`void`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` SetMessageHandler`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`MessageHandler`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:` handler`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`bool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` PostJson`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`const`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` std`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`string`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`&`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:` json`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]}),`
`,(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`bool`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` InjectScript`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`const`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:` std`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`::`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`string`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`&`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#E36209`,"--shiki-dark":`#FFAB70`},children:` script`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`);`})]})]})})}),`
`,(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`SetMessageHandler()`}),` 接收网页用 `,(0,n.jsx)(t.code,{children:`chrome.webview.postMessage`}),` 发来的原始 JSON，回调在游戏线程执行；`,(0,n.jsx)(t.code,{children:`PostJson()`}),` 反向投递，网页用 `,(0,n.jsx)(t.code,{children:`chrome.webview`}),` 的 message 事件接收；`,(0,n.jsx)(t.code,{children:`InjectScript()`}),` 在页面脚本之前注入代码，控制器尚未创建时会排队。需要现成的调用约定时用 `,(0,n.jsx)(t.code,{children:`WebBridge`}),`。`]}),`
`,(0,n.jsx)(t.h2,{id:`全屏抓帧模式`,children:`全屏抓帧模式`}),`
`,(0,n.jsxs)(t.p,{children:[`独占全屏时 DWM 不合成子窗口，HWND 覆盖层永远不可见，此时 `,(0,n.jsx)(t.code,{children:`UsesCaptureMode()`}),` 返回真，宿主改用抓帧贴图：`]}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`DrawPanel()`}),` 在 `,(0,n.jsx)(t.code,{children:`SetBounds()`}),` 提交的同一矩形内绘制最新一帧（抓帧解码后上传 D3D9 贴图），宿主在占位控件之后调用即可。`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`ForwardPanelInput()`}),` 把鼠标位置换算成页面坐标，转发悬停、点击与滚轮（`,(0,n.jsx)(t.code,{children:`UI::IsLastItemHovered()`}),` + `,(0,n.jsx)(t.code,{children:`UI::GetMousePosition()`}),` + `,(0,n.jsx)(t.code,{children:`Hooks::ConsumeWheelDelta()`}),`）。`]}),`
`,(0,n.jsx)(t.li,{children:`抓帧与面板同尺寸，1:1 显示不缩放；静止时用 PNG 保证清晰度，交互时改用 JPEG 把抓帧间隔压到 120ms，空闲间隔 500ms，点击与滚轮后立即重抓。`}),`
`,(0,n.jsx)(t.li,{children:`抓帧模式不抢焦点，游戏与菜单热键保持可用；受限于位图转发，页面内的文本输入与输入法不可用，帧率也低于原生渲染。`}),`
`,(0,n.jsxs)(t.li,{children:[`想要原生渲染与文字输入时，让游戏进入窗口或无边框模式（`,(0,n.jsx)(t.code,{children:`Hooks::SetWindowMode(WindowMode::Borderless)`}),`）；窗口由 DWM 合成后本页自动回落到原生覆盖层，抓帧模式随之关闭。`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`隐藏与关闭`,children:`隐藏与关闭`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`SetVisible(false)`}),` 只隐藏面板，浏览器与宿主窗口保持存活，再次显示几乎瞬时完成，对应窗口的最小化`]}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Close()`}),` 释放浏览器与宿主窗口，内存归还系统，之后再次 `,(0,n.jsx)(t.code,{children:`SetVisible(true)`}),` 或 `,(0,n.jsx)(t.code,{children:`Navigate`}),` 会重新创建，对应窗口的关闭`]}),`
`,(0,n.jsxs)(t.li,{children:[`菜单关闭等临时场景用隐藏，长期不用或需要回收内存时用关闭；`,(0,n.jsx)(t.code,{children:`Shutdown()`}),` 是卸载路径，与两者都不同`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`生命周期与边界`,children:`生命周期与边界`}),`
`,(0,n.jsxs)(t.ul,{children:[`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`Init()`}),` 只检查运行时并登记请求，不会立刻创建浏览器；真正的环境与控制器创建延迟到宿主请求页面之后（`,(0,n.jsx)(t.code,{children:`Navigate`}),`、`,(0,n.jsx)(t.code,{children:`SetHtml`}),`、`,(0,n.jsx)(t.code,{children:`SetVisible(true)`}),` 都会登记请求）的 `,(0,n.jsx)(t.code,{children:`Process()`}),` 安全点执行，因此不会在渲染钩子里重入消息循环，未使用网页时也不会启动浏览器进程。`]}),`
`,(0,n.jsxs)(t.li,{children:[`创建是异步的；完成后 `,(0,n.jsx)(t.code,{children:`GetState().initialized`}),` 为真，之前提交的 `,(0,n.jsx)(t.code,{children:`Navigate`}),`/`,(0,n.jsx)(t.code,{children:`SetHtml`}),` 会自动补发，若期间已请求显示则直接可见。`]}),`
`,(0,n.jsx)(t.li,{children:`领域卸载时若创建仍在进行，会等待回调到达后自行释放控制器并销毁宿主窗口，避免父窗口句柄被复用。`}),`
`,(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:`SetBounds()`}),` 接收与 `,(0,n.jsx)(t.code,{children:`UI::GetDisplaySize()`}),` 同坐标系的矩形（ImGui 显示像素，通常按菜单内容区计算），XBase 内部按游戏客户区比例换算并裁剪到游戏窗口内。`]}),`
`,(0,n.jsxs)(t.li,{children:[`网页渲染为窗口期覆盖层，无法被 ImGui 裁剪，宿主应把矩形限制在菜单窗口可见区域内（菜单滚动时用 `,(0,n.jsx)(t.code,{children:`UI::GetCurrentWindowRect()`}),` 求交集）。`]}),`
`,(0,n.jsx)(t.li,{children:`显示时网页子窗口取得焦点，游戏收不到键盘输入；隐藏时焦点交还游戏窗口。独占全屏下不取焦点，改由抓帧模式呈现。`}),`
`,(0,n.jsx)(t.li,{children:`面板聚焦期间按键只到达网页子窗口，XBase 通过加速键事件与系统状态轮询补齐输入，菜单热键仍然可用。`}),`
`,(0,n.jsxs)(t.li,{children:[`菜单关闭后面板自动隐藏，宿主无需在关闭流程里手动调用 `,(0,n.jsx)(t.code,{children:`SetVisible(false)`}),`。`]}),`
`,(0,n.jsxs)(t.li,{children:[`关闭菜单、切换场景或新游戏时调用 `,(0,n.jsx)(t.code,{children:`SetVisible(false)`}),`；`,(0,n.jsx)(t.code,{children:`NotifyGameInit()`}),` 会自动隐藏。`]}),`
`,(0,n.jsx)(t.li,{children:`窗口化与无边框模式下网页渲染为窗口期覆盖层，由 DWM 合成；独占全屏切换为抓帧贴图，两种状态都由 XBase 自动判定。`}),`
`,(0,n.jsxs)(t.li,{children:[`浏览器数据目录位于载荷目录下的 `,(0,n.jsx)(t.code,{children:`XBase\\webview2`}),`，由 XBase 创建。`]}),`
`,(0,n.jsxs)(t.li,{children:[`导航、标题、前进后退状态通过事件更新，`,(0,n.jsx)(t.code,{children:`SetStateCallback()`}),` 可在游戏线程收到变化通知。`]}),`
`]}),`
`,(0,n.jsx)(t.h2,{id:`版本能力`,children:`版本能力`}),`
`,(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:`Capability`}),(0,n.jsx)(t.th,{style:{textAlign:`center`},children:`SA`}),(0,n.jsx)(t.th,{style:{textAlign:`center`},children:`VC`}),(0,n.jsx)(t.th,{style:{textAlign:`center`},children:`III`})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:`WebView`}),(0,n.jsx)(t.td,{style:{textAlign:`center`},children:`✅`}),(0,n.jsx)(t.td,{style:{textAlign:`center`},children:`✅`}),(0,n.jsx)(t.td,{style:{textAlign:`center`},children:`✅`})]})})]}),`
`,(0,n.jsxs)(t.p,{children:[`实现位于 Win32/COM 层，不访问游戏内存与插件地址；真实可用性由 `,(0,n.jsx)(t.code,{children:`IsRuntimeAvailable()`}),` 在运行时判定。`]})]})}function c(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}export{i as _markdown,c as default,r as frontmatter,a as structuredData,o as toc};