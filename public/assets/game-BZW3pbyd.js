import{rt as e,t}from"./jsx-runtime-DFJu3dTM.js";var n=e(t()),r={title:`游戏 Game / Pad`,description:`版本、平台、按键与作弊串`},i=`

\`sa\` · 扩展 \`CLEO\` · 需 CLEO

版本、平台、按键、作弊串。

写法见 [Lua](/docs/cleo/syntax) / [Redux](/docs/cleo/syntax-redux)。

## 是否原版 [#是否原版]

<Opcode id="0AA9" name="IS_GAME_VERSION_ORIGINAL" member="Game.IsVersionOriginal">
  是否原版 1.0。用在 \`if\` 里。

  <CodeBlockTabs defaultValue="OP">
    <CodeBlockTabsList>
      <CodeBlockTabsTrigger value="OP">
        OP
      </CodeBlockTabsTrigger>

      <CodeBlockTabsTrigger value="Lua">
        Lua
      </CodeBlockTabsTrigger>

      <CodeBlockTabsTrigger value="Redux">
        Redux
      </CodeBlockTabsTrigger>
    </CodeBlockTabsList>

    <CodeBlockTab value="OP">
      \`\`\`text
      0AA9 IS_GAME_VERSION_ORIGINAL
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      if isGameVersionOriginal() then
      end
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      if (Game.isVersionOriginal()) {
      }
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 取平台 [#取平台]

<Opcode id="0DD5" name="GET_PLATFORM" member="Game.GetPlatform">
  当前平台标识（PC / Android / Xbox 等）。

  <CodeBlockTabs defaultValue="OP">
    <CodeBlockTabsList>
      <CodeBlockTabsTrigger value="OP">
        OP
      </CodeBlockTabsTrigger>

      <CodeBlockTabsTrigger value="Lua">
        Lua
      </CodeBlockTabsTrigger>

      <CodeBlockTabsTrigger value="Redux">
        Redux
      </CodeBlockTabsTrigger>
    </CodeBlockTabsList>

    <CodeBlockTab value="OP">
      \`\`\`text
      0DD5 GET_PLATFORM
      out: platform
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      local platform = getPlatform()
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      const platform = Game.getPlatform()
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 按键是否按下 [#按键是否按下]

<Opcode id="0AB0" name="IS_KEY_PRESSED" member="Pad.IsKeyPressed">
  指定虚拟键码是否按下。用在 \`if\` 里。

  <CodeBlockTabs defaultValue="OP">
    <CodeBlockTabsList>
      <CodeBlockTabsTrigger value="OP">
        OP
      </CodeBlockTabsTrigger>

      <CodeBlockTabsTrigger value="Lua">
        Lua
      </CodeBlockTabsTrigger>

      <CodeBlockTabsTrigger value="Redux">
        Redux
      </CodeBlockTabsTrigger>
    </CodeBlockTabsList>

    <CodeBlockTab value="OP">
      \`\`\`text
      0AB0 IS_KEY_PRESSED
      in: keyCode
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      if isKeyPressed(0x20) then -- space
      end
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      if (Pad.isKeyPressed(keyCode)) {
      }
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 测试作弊串 [#测试作弊串]

<Opcode id="0ADC" name="TEST_CHEAT" member="Pad.TestCheat">
  键盘是否刚打出指定作弊串。用在 \`if\` 里。

  <CodeBlockTabs defaultValue="OP">
    <CodeBlockTabsList>
      <CodeBlockTabsTrigger value="OP">
        OP
      </CodeBlockTabsTrigger>

      <CodeBlockTabsTrigger value="Lua">
        Lua
      </CodeBlockTabsTrigger>

      <CodeBlockTabsTrigger value="Redux">
        Redux
      </CodeBlockTabsTrigger>
    </CodeBlockTabsList>

    <CodeBlockTab value="OP">
      \`\`\`text
      0ADC TEST_CHEAT
      in: input
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      if testCheat("HESOYAM") then
      end
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      if (Pad.testCheat(input)) {
      }
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>
`,a={contents:[{heading:void 0,content:"`sa` · 扩展 `CLEO` · 需 CLEO"},{heading:void 0,content:`版本、平台、按键、作弊串。`},{heading:void 0,content:`写法见 Lua / Redux。`},{heading:`是否原版`,content:"是否原版 1.0。用在 `if` 里。"},{heading:`取平台`,content:`当前平台标识（PC / Android / Xbox 等）。`},{heading:`按键是否按下`,content:"指定虚拟键码是否按下。用在 `if` 里。"},{heading:`测试作弊串`,content:"键盘是否刚打出指定作弊串。用在 `if` 里。"}],headings:[{id:`是否原版`,content:`是否原版`},{id:`取平台`,content:`取平台`},{id:`按键是否按下`,content:`按键是否按下`},{id:`测试作弊串`,content:`测试作弊串`}]},o=[{depth:2,url:`#是否原版`,title:(0,n.jsx)(n.Fragment,{children:`是否原版`})},{depth:2,url:`#取平台`,title:(0,n.jsx)(n.Fragment,{children:`取平台`})},{depth:2,url:`#按键是否按下`,title:(0,n.jsx)(n.Fragment,{children:`按键是否按下`})},{depth:2,url:`#测试作弊串`,title:(0,n.jsx)(n.Fragment,{children:`测试作弊串`})}];function s(e){let t={a:`a`,code:`code`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...e.components},{CodeBlockTab:r,CodeBlockTabs:i,CodeBlockTabsList:a,CodeBlockTabsTrigger:o,Opcode:s}=t;return r||l(`CodeBlockTab`,!0),i||l(`CodeBlockTabs`,!0),a||l(`CodeBlockTabsList`,!0),o||l(`CodeBlockTabsTrigger`,!0),s||l(`Opcode`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`sa`}),` · 扩展 `,(0,n.jsx)(t.code,{children:`CLEO`}),` · 需 CLEO`]}),`
`,(0,n.jsx)(t.p,{children:`版本、平台、按键、作弊串。`}),`
`,(0,n.jsxs)(t.p,{children:[`写法见 `,(0,n.jsx)(t.a,{href:`/docs/cleo/syntax`,children:`Lua`}),` / `,(0,n.jsx)(t.a,{href:`/docs/cleo/syntax-redux`,children:`Redux`}),`。`]}),`
`,(0,n.jsx)(t.h2,{id:`是否原版`,children:`是否原版`}),`
`,(0,n.jsxs)(s,{id:`0AA9`,name:`IS_GAME_VERSION_ORIGINAL`,member:`Game.IsVersionOriginal`,children:[(0,n.jsxs)(t.p,{children:[`是否原版 1.0。用在 `,(0,n.jsx)(t.code,{children:`if`}),` 里。`]}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0AA9 IS_GAME_VERSION_ORIGINAL`})})})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`if`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` isGameVersionOriginal`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`() `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`then`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`end`})})]})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`if`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` (Game.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`isVersionOriginal`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()) {`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`取平台`,children:`取平台`}),`
`,(0,n.jsxs)(s,{id:`0DD5`,name:`GET_PLATFORM`,member:`Game.GetPlatform`,children:[(0,n.jsx)(t.p,{children:`当前平台标识（PC / Android / Xbox 等）。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0DD5 GET_PLATFORM`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`out: platform`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`local`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` platform `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` getPlatform`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`const`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` platform`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:` =`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` Game.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getPlatform`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`按键是否按下`,children:`按键是否按下`}),`
`,(0,n.jsxs)(s,{id:`0AB0`,name:`IS_KEY_PRESSED`,member:`Pad.IsKeyPressed`,children:[(0,n.jsxs)(t.p,{children:[`指定虚拟键码是否按下。用在 `,(0,n.jsx)(t.code,{children:`if`}),` 里。`]}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0AB0 IS_KEY_PRESSED`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: keyCode`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`if`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` isKeyPressed`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`0x20`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`) `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`then`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6A737D`,"--shiki-dark":`#6A737D`},children:` -- space`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`end`})})]})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`if`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` (Pad.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`isKeyPressed`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(keyCode)) {`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`测试作弊串`,children:`测试作弊串`}),`
`,(0,n.jsxs)(s,{id:`0ADC`,name:`TEST_CHEAT`,member:`Pad.TestCheat`,children:[(0,n.jsxs)(t.p,{children:[`键盘是否刚打出指定作弊串。用在 `,(0,n.jsx)(t.code,{children:`if`}),` 里。`]}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0ADC TEST_CHEAT`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: input`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`if`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` testCheat`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#032F62`,"--shiki-dark":`#9ECBFF`},children:`"HESOYAM"`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`) `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`then`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`end`})})]})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`if`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` (Pad.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`testCheat`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(input)) {`})]}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`}`})})]})})})})]})]})]})}function c(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}function l(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as _markdown,c as default,r as frontmatter,a as structuredData,o as toc};