import{rt as e,t}from"./jsx-runtime-DFJu3dTM.js";var n=e(t()),r={title:`文本 Text`,description:`消息 / 帮助框 / 屏幕文字`},i=`

\`sa\` · 扩展 \`default\` · SCM 原生命令

共 59 条。写法见 [Lua](/docs/cleo/syntax) / [Redux](/docs/cleo/syntax-redux)。

## 样式大字 [#样式大字]

<Opcode id="00BA" name="PRINT_BIG" member="Text.PrintBig">
  样式大字，显示指定时长。

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
      00BA PRINT_BIG
      in: key, time, style
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      printBig(key, time, style)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.printBig(key, time, style)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 底部消息 [#底部消息]

<Opcode id="00BB" name="PRINT" member="Text.Print">
  底部普通消息，指定时长。

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
      00BB PRINT
      in: key, time, flag
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      print(key, time, flag)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.print(key, time, flag)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 立即消息 [#立即消息]

<Opcode id="00BC" name="PRINT_NOW" member="Text.PrintNow">
  底部立即消息（插队），指定时长。

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
      00BC PRINT_NOW
      in: key, time, flag
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      printNow(key, time, flag)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.printNow(key, time, flag)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 清消息 [#清消息]

<Opcode id="00BE" name="CLEAR_PRINTS" member="Text.ClearPrints">
  清优先文本与部分大字样式。

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
      00BE CLEAR_PRINTS
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      clearPrints()
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.clearPrints()
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 大字带数字 [#大字带数字]

<Opcode id="01E3" name="PRINT_WITH_NUMBER_BIG" member="Text.PrintWithNumberBig">
  大字：首个 \`~1~\` 换成数字。

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
      01E3 PRINT_WITH_NUMBER_BIG
      in: key, num, duration, style
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      printWithNumberBig(key, num, duration, style)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.printWithNumberBig(key, num, duration, style)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 消息带数字 [#消息带数字]

<Opcode id="01E4" name="PRINT_WITH_NUMBER" member="Text.PrintWithNumber">
  底部消息：首个 \`~1~\` 换成数字。

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
      01E4 PRINT_WITH_NUMBER
      in: key, num, duration, flag
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      printWithNumber(key, num, duration, flag)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.printWithNumber(key, num, duration, flag)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 立即消息带数字 [#立即消息带数字]

<Opcode id="01E5" name="PRINT_WITH_NUMBER_NOW" member="Text.PrintWithNumberNow">
  立即底部消息：首个 \`~1~\` 换成数字。

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
      01E5 PRINT_WITH_NUMBER_NOW
      in: key, num, duration, flag
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      printWithNumberNow(key, num, duration, flag)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.printWithNumberNow(key, num, duration, flag)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 低优先大字 [#低优先大字]

<Opcode id="0217" name="PRINT_BIG_Q" member="Text.PrintBigQ">
  低优先样式大字。

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
      0217 PRINT_BIG_Q
      in: key, duration, style
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      printBigQ(key, duration, style)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.printBigQ(key, duration, style)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 立即消息 2 数 [#立即消息-2-数]

<Opcode id="02FD" name="PRINT_WITH_2_NUMBERS_NOW" member="Text.PrintWith2NumbersNow">
  立即消息：前两个 \`~1~\` 换成数字。

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
      02FD PRINT_WITH_2_NUMBERS_NOW
      in: key, num1, num2, duration, style
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      printWith2NumbersNow(key, num1, num2, duration, style)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.printWith2NumbersNow(key, num1, num2, duration, style)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 消息 3 数 [#消息-3-数]

<Opcode id="02FF" name="PRINT_WITH_3_NUMBERS" member="Text.PrintWith3Numbers">
  消息：前三个 \`~1~\` 换成数字。

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
      02FF PRINT_WITH_3_NUMBERS
      in: key, num1, num2, num3, duration, style
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      printWith3Numbers(key, num1, num2, num3, duration, style)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.printWith3Numbers(key, num1, num2, num3, duration, style)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 消息 4 数 [#消息-4-数]

<Opcode id="0302" name="PRINT_WITH_4_NUMBERS" member="Text.PrintWith4Numbers">
  消息：前四个 \`~1~\` 换成数字。

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
      0302 PRINT_WITH_4_NUMBERS
      in: key, num1, num2, num3, num4, duration, style
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      printWith4Numbers(key, num1, num2, num3, num4, duration, style)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.printWith4Numbers(key, num1, num2, num3, num4, duration, style)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 立即消息 4 数 [#立即消息-4-数]

<Opcode id="0303" name="PRINT_WITH_4_NUMBERS_NOW" member="Text.PrintWith4NumbersNow">
  立即消息：前四个 \`~1~\` 换成数字。

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
      0303 PRINT_WITH_4_NUMBERS_NOW
      in: key, num1, num2, num3, num4, duration, style
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      printWith4NumbersNow(key, num1, num2, num3, num4, duration, style)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.printWith4NumbersNow(key, num1, num2, num3, num4, duration, style)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 消息 6 数 [#消息-6-数]

<Opcode id="0308" name="PRINT_WITH_6_NUMBERS" member="Text.PrintWith6Numbers">
  消息：前六个 \`~1~\` 换成数字。

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
      0308 PRINT_WITH_6_NUMBERS
      in: key, num1, num2, num3, num4, num5, num6, duration, style
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      printWith6Numbers(key, num1, num2, num3, num4, num5, num6, duration, style)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.printWith6Numbers(key, num1, num2, num3, num4, num5, num6, duration, style)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 画 GXT 字 [#画-gxt-字]

<Opcode id="033E" name="DISPLAY_TEXT" member="Text.Display">
  在屏幕坐标画 GXT 字。

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
      033E DISPLAY_TEXT
      in: offsetLeft, offsetTop, key
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      displayText(offsetLeft, offsetTop, key)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.display(offsetLeft, offsetTop, key)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 文字缩放 [#文字缩放]

<Opcode id="033F" name="SET_TEXT_SCALE" member="Text.SetScale">
  文字宽高缩放。

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
      033F SET_TEXT_SCALE
      in: widthScale, heightScale
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      setTextScale(widthScale, heightScale)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.setScale(widthScale, heightScale)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 文字颜色 [#文字颜色]

<Opcode id="0340" name="SET_TEXT_COLOUR" member="Text.SetColor">
  文字颜色 RGBA。

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
      0340 SET_TEXT_COLOUR
      in: red, green, blue, alpha
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      setTextColour(red, green, blue, alpha)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.setColor(red, green, blue, alpha)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 两端对齐 [#两端对齐]

<Opcode id="0341" name="SET_TEXT_JUSTIFY" member="Text.SetJustify">
  两端对齐/自动换行成矩形。

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
      0341 SET_TEXT_JUSTIFY
      in: state
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      setTextJustify(state)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.setJustify(state)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 水平居中 [#水平居中]

<Opcode id="0342" name="SET_TEXT_CENTRE" member="Text.SetCenter">
  水平居中。

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
      0342 SET_TEXT_CENTRE
      in: state
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      setTextCentre(state)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.setCenter(state)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 换行宽度 [#换行宽度]

<Opcode id="0343" name="SET_TEXT_WRAPX" member="Text.SetWrapX">
  换行宽度。

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
      0343 SET_TEXT_WRAPX
      in: width
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      setTextWrapx(width)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.setWrapX(width)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 居中行宽 [#居中行宽]

<Opcode id="0344" name="SET_TEXT_CENTRE_SIZE" member="Text.SetCenterSize">
  居中文字的行宽。

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
      0344 SET_TEXT_CENTRE_SIZE
      in: width
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      setTextCentreSize(width)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.setCenterSize(width)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 文字背景 [#文字背景]

<Opcode id="0345" name="SET_TEXT_BACKGROUND" member="Text.SetBackground">
  是否画文字背景。

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
      0345 SET_TEXT_BACKGROUND
      in: state
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      setTextBackground(state)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.setBackground(state)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 比例字体 [#比例字体]

<Opcode id="0348" name="SET_TEXT_PROPORTIONAL" member="Text.SetProportional">
  比例字体宽。

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
      0348 SET_TEXT_PROPORTIONAL
      in: state
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      setTextProportional(state)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.setProportional(state)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 字体 [#字体]

<Opcode id="0349" name="SET_TEXT_FONT" member="Text.SetFont">
  绘制字体。

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
      0349 SET_TEXT_FONT
      in: font
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      setTextFont(font)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.setFont(font)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 大字 2 数 [#大字-2-数]

<Opcode id="036D" name="PRINT_WITH_2_NUMBERS_BIG" member="Text.PrintWith2NumbersBig">
  大字：前两个 \`~1~\` 换成数字。

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
      036D PRINT_WITH_2_NUMBERS_BIG
      in: key, num1, num2, duration, style
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      printWith2NumbersBig(key, num1, num2, duration, style)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.printWith2NumbersBig(key, num1, num2, duration, style)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 嵌套 GXT 立即消息 [#嵌套-gxt-立即消息]

<Opcode id="0384" name="PRINT_STRING_IN_STRING_NOW" member="Text.PrintStringInStringNow">
  立即消息：\`~a~\` 换成另一段 GXT。

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
      0384 PRINT_STRING_IN_STRING_NOW
      in: templateKey, replacementKey, duration, style
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      printStringInStringNow(templateKey, replacementKey, duration, style)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.printStringInStringNow(templateKey, replacementKey, duration, style)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 清指定消息 [#清指定消息]

<Opcode id="03D5" name="CLEAR_THIS_PRINT" member="Text.ClearThisPrint">
  清指定 key 的优先消息。

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
      03D5 CLEAR_THIS_PRINT
      in: key
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      clearThisPrint(key)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.clearThisPrint(key)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 清指定大字 [#清指定大字]

<Opcode id="03D6" name="CLEAR_THIS_BIG_PRINT" member="Text.ClearThisBigPrint">
  清指定 key 的样式大字。

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
      03D6 CLEAR_THIS_BIG_PRINT
      in: key
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      clearThisBigPrint(key)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.clearThisBigPrint(key)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 画在淡入前 [#画在淡入前]

<Opcode id="03E0" name="SET_TEXT_DRAW_BEFORE_FADE" member="Text.SetDrawBeforeFade">
  下一次文字画在淡入淡出之前。

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
      03E0 SET_TEXT_DRAW_BEFORE_FADE
      in: state
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      setTextDrawBeforeFade(state)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.setDrawBeforeFade(state)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 右对齐 [#右对齐]

<Opcode id="03E4" name="SET_TEXT_RIGHT_JUSTIFY" member="Text.SetRightJustify">
  右对齐。

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
      03E4 SET_TEXT_RIGHT_JUSTIFY
      in: state
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      setTextRightJustify(state)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.setRightJustify(state)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 帮助框 [#帮助框]

<Opcode id="03E5" name="PRINT_HELP" member="Text.PrintHelp">
  黑底帮助框，数秒后消失。

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
      03E5 PRINT_HELP
      in: key
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      printHelp(key)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.printHelp(key)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 关帮助框 [#关帮助框]

<Opcode id="03E6" name="CLEAR_HELP" member="Text.ClearHelp">
  关掉帮助框。

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
      03E6 CLEAR_HELP
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      clearHelp()
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.clearHelp()
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 清小字 [#清小字]

<Opcode id="03EB" name="CLEAR_SMALL_PRINTS" member="Text.ClearSmallPrints">
  清小字消息。

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
      03EB CLEAR_SMALL_PRINTS
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      clearSmallPrints()
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.clearSmallPrints()
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 开关绘制命令 [#开关绘制命令]

<Opcode id="03F0" name="USE_TEXT_COMMANDS" member="Text.UseCommands">
  开关文字/贴图绘制命令。

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
      03F0 USE_TEXT_COMMANDS
      in: state
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      useTextCommands(state)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.useCommands(state)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 画带 1 数 GXT [#画带-1-数-gxt]

<Opcode id="045A" name="DISPLAY_TEXT_WITH_NUMBER" member="Text.DisplayWithNumber">
  屏幕坐标画带 1 个数字的 GXT。

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
      045A DISPLAY_TEXT_WITH_NUMBER
      in: offsetLeft, offsetTop, key, num
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      displayTextWithNumber(offsetLeft, offsetTop, key, num)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.displayWithNumber(offsetLeft, offsetTop, key, num)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 画带 2 数 GXT [#画带-2-数-gxt]

<Opcode id="045B" name="DISPLAY_TEXT_WITH_2_NUMBERS" member="Text.DisplayWith2Numbers">
  屏幕坐标画带 2 个数字的 GXT。

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
      045B DISPLAY_TEXT_WITH_2_NUMBERS
      in: offsetLeft, offsetTop, key, num1, num2
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      displayTextWith2Numbers(offsetLeft, offsetTop, key, num1, num2)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.displayWith2Numbers(offsetLeft, offsetTop, key, num1, num2)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 常驻帮助框 [#常驻帮助框]

<Opcode id="0512" name="PRINT_HELP_FOREVER" member="Text.PrintHelpForever">
  常驻帮助框，直到别的命令清掉。

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
      0512 PRINT_HELP_FOREVER
      in: key
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      printHelpForever(key)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.printHelpForever(key)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 常驻帮助框带数 [#常驻帮助框带数]

<Opcode id="0513" name="PRINT_HELP_FOREVER_WITH_NUMBER" member="Text.PrintHelpForeverWithNumber">
  常驻帮助框带 1 个数字。

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
      0513 PRINT_HELP_FOREVER_WITH_NUMBER
      in: gxt, number
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      printHelpForeverWithNumber(gxt, number)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.printHelpForeverWithNumber(gxt, number)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 加载任务 GXT [#加载任务-gxt]

<Opcode id="054C" name="LOAD_MISSION_TEXT" member="Text.LoadMissionText">
  加载指定 GXT 表作任务文本源。

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
      054C LOAD_MISSION_TEXT
      in: tableName
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      loadMissionText(tableName)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.loadMissionText(tableName)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 文字阴影 [#文字阴影]

<Opcode id="060D" name="SET_TEXT_DROPSHADOW" member="Text.SetDropshadow">
  当前绘制文字的阴影。

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
      060D SET_TEXT_DROPSHADOW
      in: intensity, red, green, blue, alpha
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      setTextDropshadow(intensity, red, green, blue, alpha)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.setDropshadow(intensity, red, green, blue, alpha)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 是否有优先消息 [#是否有优先消息]

<Opcode id="076F" name="IS_MESSAGE_BEING_DISPLAYED" member="Text.IsMessageBeingDisplayed">
  用在 if：是否有优先 GXT 在屏上。

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
      076F IS_MESSAGE_BEING_DISPLAYED
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      isMessageBeingDisplayed()
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.isMessageBeingDisplayed()
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 画浮点 GXT [#画浮点-gxt]

<Opcode id="07FC" name="DISPLAY_TEXT_WITH_FLOAT" member="Text.DisplayWithFloat">
  浮点按精度拆成两数再画 2 数字 GXT。

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
      07FC DISPLAY_TEXT_WITH_FLOAT
      in: leftTopX, leftTopY, key, value, precision
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      displayTextWithFloat(leftTopX, leftTopY, key, value, precision)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.displayWithFloat(leftTopX, leftTopY, key, value, precision)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 文字描边 [#文字描边]

<Opcode id="081C" name="SET_TEXT_EDGE" member="Text.SetEdge">
  下一次绘制文字描边。

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
      081C SET_TEXT_EDGE
      in: size, red, green, blue, alpha
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      setTextEdge(size, red, green, blue, alpha)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.setEdge(size, red, green, blue, alpha)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 全局 label 是否空 [#全局-label-是否空]

<Opcode id="0844" name="IS_VAR_TEXT_LABEL_EMPTY" member="Text.IsEmpty">
  用在 if：全局 text label 是否空串。

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
      0844 IS_VAR_TEXT_LABEL_EMPTY
      in: text
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      isVarTextLabelEmpty(text)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.isEmpty(text)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 局部 label 是否空 [#局部-label-是否空]

<Opcode id="0845" name="IS_LVAR_TEXT_LABEL_EMPTY" member="Text.IsEmpty">
  用在 if：局部 text label 是否空串。

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
      0845 IS_LVAR_TEXT_LABEL_EMPTY
      in: text
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      isLvarTextLabelEmpty(text)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.isEmpty(text)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 全局 label16 是否空 [#全局-label16-是否空]

<Opcode id="0846" name="IS_VAR_TEXT_LABEL16_EMPTY" member="Text.IsEmpty">
  用在 if：全局 label16 是否空串。

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
      0846 IS_VAR_TEXT_LABEL16_EMPTY
      in: text
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      isVarTextLabel16Empty(text)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.isEmpty(text)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 局部 label16 是否空 [#局部-label16-是否空]

<Opcode id="0847" name="IS_LVAR_TEXT_LABEL16_EMPTY" member="Text.IsEmpty">
  用在 if：局部 label16 是否空串。

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
      0847 IS_LVAR_TEXT_LABEL16_EMPTY
      in: text
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      isLvarTextLabel16Empty(text)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.isEmpty(text)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 是否有帮助框 [#是否有帮助框]

<Opcode id="08FE" name="IS_HELP_MESSAGE_BEING_DISPLAYED" member="Text.IsHelpMessageBeingDisplayed">
  用在 if：是否有任意帮助框。

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
      08FE IS_HELP_MESSAGE_BEING_DISPLAYED
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      isHelpMessageBeingDisplayed()
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.isHelpMessageBeingDisplayed()
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 消息排版 [#消息排版]

<Opcode id="0912" name="SET_MESSAGE_FORMATTING" member="Text.SetMessageFormatting">
  覆盖底部消息屏上位置/边距/宽。

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
      0912 SET_MESSAGE_FORMATTING
      in: customPosition, margin, width
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      setMessageFormatting(customPosition, margin, width)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.setMessageFormatting(customPosition, margin, width)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 帮助框宽度 [#帮助框宽度]

<Opcode id="0989" name="SET_HELP_MESSAGE_BOX_SIZE" member="Text.SetHelpMessageBoxSize">
  帮助框全局宽度。

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
      0989 SET_HELP_MESSAGE_BOX_SIZE
      in: size
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      setHelpMessageBoxSize(size)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.setHelpMessageBoxSize(size)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 字符串哈希 [#字符串哈希]

<Opcode id="09A9" name="GET_HASH_KEY" member="Text.GetHashKey">
  字符串 CRC 哈希。

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
      09A9 GET_HASH_KEY
      in: text
      out: hash
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      local hash = getHashKey(text)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.getHashKey(text)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 下条进简报 [#下条进简报]

<Opcode id="09C1" name="ADD_NEXT_MESSAGE_TO_PREVIOUS_BRIEFS" member="Text.AddNextMessageToPreviousBriefs">
  下一条是否进菜单简报记录。

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
      09C1 ADD_NEXT_MESSAGE_TO_PREVIOUS_BRIEFS
      in: state
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      addNextMessageToPreviousBriefs(state)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.addNextMessageToPreviousBriefs(state)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## GXT 宽度 [#gxt-宽度]

<Opcode id="09FD" name="GET_STRING_WIDTH" member="Text.GetStringWidth">
  GXT 条目渲染宽度。

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
      09FD GET_STRING_WIDTH
      in: entry
      out: width
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      local width = getStringWidth(entry)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.getStringWidth(entry)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 带数 GXT 宽度 [#带数-gxt-宽度]

<Opcode id="0A08" name="GET_STRING_WIDTH_WITH_NUMBER" member="Text.GetStringWidthWithNumber">
  带数字的 GXT 渲染宽度。

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
      0A08 GET_STRING_WIDTH_WITH_NUMBER
      in: gxtEntry, number
      out: width
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      local width = getStringWidthWithNumber(gxtEntry, number)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.getStringWidthWithNumber(gxtEntry, number)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 清 style 大字 [#清-style-大字]

<Opcode id="0A0E" name="CLEAR_THIS_PRINT_BIG_NOW" member="Text.ClearThisPrintBigNow">
  清指定 style 的大字。

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
      0A0E CLEAR_THIS_PRINT_BIG_NOW
      in: textStyle
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      clearThisPrintBigNow(textStyle)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.clearThisPrintBigNow(textStyle)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 区域名样式 [#区域名样式]

<Opcode id="0A19" name="SET_AREA_NAME" member="Text.SetAreaName">
  用区域名样式显示 GXT。

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
      0A19 SET_AREA_NAME
      in: name
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      setAreaName(name)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.setAreaName(name)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 是否该帮助框 [#是否该帮助框]

<Opcode id="0A2A" name="IS_THIS_HELP_MESSAGE_BEING_DISPLAYED" member="Text.IsThisHelpMessageBeingDisplayed">
  用在 if：是否正显示该 GXT 帮助框。

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
      0A2A IS_THIS_HELP_MESSAGE_BEING_DISPLAYED
      in: gxt
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      isThisHelpMessageBeingDisplayed(gxt)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.isThisHelpMessageBeingDisplayed(gxt)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 淡出前画字幕 [#淡出前画字幕]

<Opcode id="0A2C" name="DRAW_SUBTITLES_BEFORE_FADE" member="Text.DrawSubtitlesBeforeFade">
  淡出时字幕是否仍画在前面。

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
      0A2C DRAW_SUBTITLES_BEFORE_FADE
      in: state
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      drawSubtitlesBeforeFade(state)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.drawSubtitlesBeforeFade(state)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 淡出前画零活标题 [#淡出前画零活标题]

<Opcode id="0A2D" name="DRAW_ODDJOB_TITLE_BEFORE_FADE" member="Text.DrawOddjobTitleBeforeFade">
  淡出时零活标题大字是否仍画在前面。

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
      0A2D DRAW_ODDJOB_TITLE_BEFORE_FADE
      in: state
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      drawOddjobTitleBeforeFade(state)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.drawOddjobTitleBeforeFade(state)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 小游戏外帮助消息 [#小游戏外帮助消息]

<Opcode id="0A44" name="DISPLAY_NON_MINIGAME_HELP_MESSAGES" member="Text.DisplayNonMinigameHelpMessages">
  覆盖 \`09BD\` 的小游戏文本块限制。

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
      0A44 DISPLAY_NON_MINIGAME_HELP_MESSAGES
      in: state
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      displayNonMinigameHelpMessages(state)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Text.displayNonMinigameHelpMessages(state)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>
`,a={contents:[{heading:void 0,content:"`sa` · 扩展 `default` · SCM 原生命令"},{heading:void 0,content:`共 59 条。写法见 Lua / Redux。`},{heading:`样式大字`,content:`样式大字，显示指定时长。`},{heading:`底部消息`,content:`底部普通消息，指定时长。`},{heading:`立即消息`,content:`底部立即消息（插队），指定时长。`},{heading:`清消息`,content:`清优先文本与部分大字样式。`},{heading:`大字带数字`,content:"大字：首个 `~1~` 换成数字。"},{heading:`消息带数字`,content:"底部消息：首个 `~1~` 换成数字。"},{heading:`立即消息带数字`,content:"立即底部消息：首个 `~1~` 换成数字。"},{heading:`低优先大字`,content:`低优先样式大字。`},{heading:`立即消息-2-数`,content:"立即消息：前两个 `~1~` 换成数字。"},{heading:`消息-3-数`,content:"消息：前三个 `~1~` 换成数字。"},{heading:`消息-4-数`,content:"消息：前四个 `~1~` 换成数字。"},{heading:`立即消息-4-数`,content:"立即消息：前四个 `~1~` 换成数字。"},{heading:`消息-6-数`,content:"消息：前六个 `~1~` 换成数字。"},{heading:`画-gxt-字`,content:`在屏幕坐标画 GXT 字。`},{heading:`文字缩放`,content:`文字宽高缩放。`},{heading:`文字颜色`,content:`文字颜色 RGBA。`},{heading:`两端对齐`,content:`两端对齐/自动换行成矩形。`},{heading:`水平居中`,content:`水平居中。`},{heading:`换行宽度`,content:`换行宽度。`},{heading:`居中行宽`,content:`居中文字的行宽。`},{heading:`文字背景`,content:`是否画文字背景。`},{heading:`比例字体`,content:`比例字体宽。`},{heading:`字体`,content:`绘制字体。`},{heading:`大字-2-数`,content:"大字：前两个 `~1~` 换成数字。"},{heading:`嵌套-gxt-立即消息`,content:"立即消息：`~a~` 换成另一段 GXT。"},{heading:`清指定消息`,content:`清指定 key 的优先消息。`},{heading:`清指定大字`,content:`清指定 key 的样式大字。`},{heading:`画在淡入前`,content:`下一次文字画在淡入淡出之前。`},{heading:`右对齐`,content:`右对齐。`},{heading:`帮助框`,content:`黑底帮助框，数秒后消失。`},{heading:`关帮助框`,content:`关掉帮助框。`},{heading:`清小字`,content:`清小字消息。`},{heading:`开关绘制命令`,content:`开关文字/贴图绘制命令。`},{heading:`画带-1-数-gxt`,content:`屏幕坐标画带 1 个数字的 GXT。`},{heading:`画带-2-数-gxt`,content:`屏幕坐标画带 2 个数字的 GXT。`},{heading:`常驻帮助框`,content:`常驻帮助框，直到别的命令清掉。`},{heading:`常驻帮助框带数`,content:`常驻帮助框带 1 个数字。`},{heading:`加载任务-gxt`,content:`加载指定 GXT 表作任务文本源。`},{heading:`文字阴影`,content:`当前绘制文字的阴影。`},{heading:`是否有优先消息`,content:`用在 if：是否有优先 GXT 在屏上。`},{heading:`画浮点-gxt`,content:`浮点按精度拆成两数再画 2 数字 GXT。`},{heading:`文字描边`,content:`下一次绘制文字描边。`},{heading:`全局-label-是否空`,content:`用在 if：全局 text label 是否空串。`},{heading:`局部-label-是否空`,content:`用在 if：局部 text label 是否空串。`},{heading:`全局-label16-是否空`,content:`用在 if：全局 label16 是否空串。`},{heading:`局部-label16-是否空`,content:`用在 if：局部 label16 是否空串。`},{heading:`是否有帮助框`,content:`用在 if：是否有任意帮助框。`},{heading:`消息排版`,content:`覆盖底部消息屏上位置/边距/宽。`},{heading:`帮助框宽度`,content:`帮助框全局宽度。`},{heading:`字符串哈希`,content:`字符串 CRC 哈希。`},{heading:`下条进简报`,content:`下一条是否进菜单简报记录。`},{heading:`gxt-宽度`,content:`GXT 条目渲染宽度。`},{heading:`带数-gxt-宽度`,content:`带数字的 GXT 渲染宽度。`},{heading:`清-style-大字`,content:`清指定 style 的大字。`},{heading:`区域名样式`,content:`用区域名样式显示 GXT。`},{heading:`是否该帮助框`,content:`用在 if：是否正显示该 GXT 帮助框。`},{heading:`淡出前画字幕`,content:`淡出时字幕是否仍画在前面。`},{heading:`淡出前画零活标题`,content:`淡出时零活标题大字是否仍画在前面。`},{heading:`小游戏外帮助消息`,content:"覆盖 `09BD` 的小游戏文本块限制。"}],headings:[{id:`样式大字`,content:`样式大字`},{id:`底部消息`,content:`底部消息`},{id:`立即消息`,content:`立即消息`},{id:`清消息`,content:`清消息`},{id:`大字带数字`,content:`大字带数字`},{id:`消息带数字`,content:`消息带数字`},{id:`立即消息带数字`,content:`立即消息带数字`},{id:`低优先大字`,content:`低优先大字`},{id:`立即消息-2-数`,content:`立即消息 2 数`},{id:`消息-3-数`,content:`消息 3 数`},{id:`消息-4-数`,content:`消息 4 数`},{id:`立即消息-4-数`,content:`立即消息 4 数`},{id:`消息-6-数`,content:`消息 6 数`},{id:`画-gxt-字`,content:`画 GXT 字`},{id:`文字缩放`,content:`文字缩放`},{id:`文字颜色`,content:`文字颜色`},{id:`两端对齐`,content:`两端对齐`},{id:`水平居中`,content:`水平居中`},{id:`换行宽度`,content:`换行宽度`},{id:`居中行宽`,content:`居中行宽`},{id:`文字背景`,content:`文字背景`},{id:`比例字体`,content:`比例字体`},{id:`字体`,content:`字体`},{id:`大字-2-数`,content:`大字 2 数`},{id:`嵌套-gxt-立即消息`,content:`嵌套 GXT 立即消息`},{id:`清指定消息`,content:`清指定消息`},{id:`清指定大字`,content:`清指定大字`},{id:`画在淡入前`,content:`画在淡入前`},{id:`右对齐`,content:`右对齐`},{id:`帮助框`,content:`帮助框`},{id:`关帮助框`,content:`关帮助框`},{id:`清小字`,content:`清小字`},{id:`开关绘制命令`,content:`开关绘制命令`},{id:`画带-1-数-gxt`,content:`画带 1 数 GXT`},{id:`画带-2-数-gxt`,content:`画带 2 数 GXT`},{id:`常驻帮助框`,content:`常驻帮助框`},{id:`常驻帮助框带数`,content:`常驻帮助框带数`},{id:`加载任务-gxt`,content:`加载任务 GXT`},{id:`文字阴影`,content:`文字阴影`},{id:`是否有优先消息`,content:`是否有优先消息`},{id:`画浮点-gxt`,content:`画浮点 GXT`},{id:`文字描边`,content:`文字描边`},{id:`全局-label-是否空`,content:`全局 label 是否空`},{id:`局部-label-是否空`,content:`局部 label 是否空`},{id:`全局-label16-是否空`,content:`全局 label16 是否空`},{id:`局部-label16-是否空`,content:`局部 label16 是否空`},{id:`是否有帮助框`,content:`是否有帮助框`},{id:`消息排版`,content:`消息排版`},{id:`帮助框宽度`,content:`帮助框宽度`},{id:`字符串哈希`,content:`字符串哈希`},{id:`下条进简报`,content:`下条进简报`},{id:`gxt-宽度`,content:`GXT 宽度`},{id:`带数-gxt-宽度`,content:`带数 GXT 宽度`},{id:`清-style-大字`,content:`清 style 大字`},{id:`区域名样式`,content:`区域名样式`},{id:`是否该帮助框`,content:`是否该帮助框`},{id:`淡出前画字幕`,content:`淡出前画字幕`},{id:`淡出前画零活标题`,content:`淡出前画零活标题`},{id:`小游戏外帮助消息`,content:`小游戏外帮助消息`}]},o=[{depth:2,url:`#样式大字`,title:(0,n.jsx)(n.Fragment,{children:`样式大字`})},{depth:2,url:`#底部消息`,title:(0,n.jsx)(n.Fragment,{children:`底部消息`})},{depth:2,url:`#立即消息`,title:(0,n.jsx)(n.Fragment,{children:`立即消息`})},{depth:2,url:`#清消息`,title:(0,n.jsx)(n.Fragment,{children:`清消息`})},{depth:2,url:`#大字带数字`,title:(0,n.jsx)(n.Fragment,{children:`大字带数字`})},{depth:2,url:`#消息带数字`,title:(0,n.jsx)(n.Fragment,{children:`消息带数字`})},{depth:2,url:`#立即消息带数字`,title:(0,n.jsx)(n.Fragment,{children:`立即消息带数字`})},{depth:2,url:`#低优先大字`,title:(0,n.jsx)(n.Fragment,{children:`低优先大字`})},{depth:2,url:`#立即消息-2-数`,title:(0,n.jsx)(n.Fragment,{children:`立即消息 2 数`})},{depth:2,url:`#消息-3-数`,title:(0,n.jsx)(n.Fragment,{children:`消息 3 数`})},{depth:2,url:`#消息-4-数`,title:(0,n.jsx)(n.Fragment,{children:`消息 4 数`})},{depth:2,url:`#立即消息-4-数`,title:(0,n.jsx)(n.Fragment,{children:`立即消息 4 数`})},{depth:2,url:`#消息-6-数`,title:(0,n.jsx)(n.Fragment,{children:`消息 6 数`})},{depth:2,url:`#画-gxt-字`,title:(0,n.jsx)(n.Fragment,{children:`画 GXT 字`})},{depth:2,url:`#文字缩放`,title:(0,n.jsx)(n.Fragment,{children:`文字缩放`})},{depth:2,url:`#文字颜色`,title:(0,n.jsx)(n.Fragment,{children:`文字颜色`})},{depth:2,url:`#两端对齐`,title:(0,n.jsx)(n.Fragment,{children:`两端对齐`})},{depth:2,url:`#水平居中`,title:(0,n.jsx)(n.Fragment,{children:`水平居中`})},{depth:2,url:`#换行宽度`,title:(0,n.jsx)(n.Fragment,{children:`换行宽度`})},{depth:2,url:`#居中行宽`,title:(0,n.jsx)(n.Fragment,{children:`居中行宽`})},{depth:2,url:`#文字背景`,title:(0,n.jsx)(n.Fragment,{children:`文字背景`})},{depth:2,url:`#比例字体`,title:(0,n.jsx)(n.Fragment,{children:`比例字体`})},{depth:2,url:`#字体`,title:(0,n.jsx)(n.Fragment,{children:`字体`})},{depth:2,url:`#大字-2-数`,title:(0,n.jsx)(n.Fragment,{children:`大字 2 数`})},{depth:2,url:`#嵌套-gxt-立即消息`,title:(0,n.jsx)(n.Fragment,{children:`嵌套 GXT 立即消息`})},{depth:2,url:`#清指定消息`,title:(0,n.jsx)(n.Fragment,{children:`清指定消息`})},{depth:2,url:`#清指定大字`,title:(0,n.jsx)(n.Fragment,{children:`清指定大字`})},{depth:2,url:`#画在淡入前`,title:(0,n.jsx)(n.Fragment,{children:`画在淡入前`})},{depth:2,url:`#右对齐`,title:(0,n.jsx)(n.Fragment,{children:`右对齐`})},{depth:2,url:`#帮助框`,title:(0,n.jsx)(n.Fragment,{children:`帮助框`})},{depth:2,url:`#关帮助框`,title:(0,n.jsx)(n.Fragment,{children:`关帮助框`})},{depth:2,url:`#清小字`,title:(0,n.jsx)(n.Fragment,{children:`清小字`})},{depth:2,url:`#开关绘制命令`,title:(0,n.jsx)(n.Fragment,{children:`开关绘制命令`})},{depth:2,url:`#画带-1-数-gxt`,title:(0,n.jsx)(n.Fragment,{children:`画带 1 数 GXT`})},{depth:2,url:`#画带-2-数-gxt`,title:(0,n.jsx)(n.Fragment,{children:`画带 2 数 GXT`})},{depth:2,url:`#常驻帮助框`,title:(0,n.jsx)(n.Fragment,{children:`常驻帮助框`})},{depth:2,url:`#常驻帮助框带数`,title:(0,n.jsx)(n.Fragment,{children:`常驻帮助框带数`})},{depth:2,url:`#加载任务-gxt`,title:(0,n.jsx)(n.Fragment,{children:`加载任务 GXT`})},{depth:2,url:`#文字阴影`,title:(0,n.jsx)(n.Fragment,{children:`文字阴影`})},{depth:2,url:`#是否有优先消息`,title:(0,n.jsx)(n.Fragment,{children:`是否有优先消息`})},{depth:2,url:`#画浮点-gxt`,title:(0,n.jsx)(n.Fragment,{children:`画浮点 GXT`})},{depth:2,url:`#文字描边`,title:(0,n.jsx)(n.Fragment,{children:`文字描边`})},{depth:2,url:`#全局-label-是否空`,title:(0,n.jsx)(n.Fragment,{children:`全局 label 是否空`})},{depth:2,url:`#局部-label-是否空`,title:(0,n.jsx)(n.Fragment,{children:`局部 label 是否空`})},{depth:2,url:`#全局-label16-是否空`,title:(0,n.jsx)(n.Fragment,{children:`全局 label16 是否空`})},{depth:2,url:`#局部-label16-是否空`,title:(0,n.jsx)(n.Fragment,{children:`局部 label16 是否空`})},{depth:2,url:`#是否有帮助框`,title:(0,n.jsx)(n.Fragment,{children:`是否有帮助框`})},{depth:2,url:`#消息排版`,title:(0,n.jsx)(n.Fragment,{children:`消息排版`})},{depth:2,url:`#帮助框宽度`,title:(0,n.jsx)(n.Fragment,{children:`帮助框宽度`})},{depth:2,url:`#字符串哈希`,title:(0,n.jsx)(n.Fragment,{children:`字符串哈希`})},{depth:2,url:`#下条进简报`,title:(0,n.jsx)(n.Fragment,{children:`下条进简报`})},{depth:2,url:`#gxt-宽度`,title:(0,n.jsx)(n.Fragment,{children:`GXT 宽度`})},{depth:2,url:`#带数-gxt-宽度`,title:(0,n.jsx)(n.Fragment,{children:`带数 GXT 宽度`})},{depth:2,url:`#清-style-大字`,title:(0,n.jsx)(n.Fragment,{children:`清 style 大字`})},{depth:2,url:`#区域名样式`,title:(0,n.jsx)(n.Fragment,{children:`区域名样式`})},{depth:2,url:`#是否该帮助框`,title:(0,n.jsx)(n.Fragment,{children:`是否该帮助框`})},{depth:2,url:`#淡出前画字幕`,title:(0,n.jsx)(n.Fragment,{children:`淡出前画字幕`})},{depth:2,url:`#淡出前画零活标题`,title:(0,n.jsx)(n.Fragment,{children:`淡出前画零活标题`})},{depth:2,url:`#小游戏外帮助消息`,title:(0,n.jsx)(n.Fragment,{children:`小游戏外帮助消息`})}];function s(e){let t={a:`a`,code:`code`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...e.components},{CodeBlockTab:r,CodeBlockTabs:i,CodeBlockTabsList:a,CodeBlockTabsTrigger:o,Opcode:s}=t;return r||l(`CodeBlockTab`,!0),i||l(`CodeBlockTabs`,!0),a||l(`CodeBlockTabsList`,!0),o||l(`CodeBlockTabsTrigger`,!0),s||l(`Opcode`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`sa`}),` · 扩展 `,(0,n.jsx)(t.code,{children:`default`}),` · SCM 原生命令`]}),`
`,(0,n.jsxs)(t.p,{children:[`共 59 条。写法见 `,(0,n.jsx)(t.a,{href:`/docs/cleo/syntax`,children:`Lua`}),` / `,(0,n.jsx)(t.a,{href:`/docs/cleo/syntax-redux`,children:`Redux`}),`。`]}),`
`,(0,n.jsx)(t.h2,{id:`样式大字`,children:`样式大字`}),`
`,(0,n.jsxs)(s,{id:`00BA`,name:`PRINT_BIG`,member:`Text.PrintBig`,children:[(0,n.jsx)(t.p,{children:`样式大字，显示指定时长。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`00BA PRINT_BIG`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: key, time, style`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`printBig`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(key, time, style)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`printBig`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(key, time, style)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`底部消息`,children:`底部消息`}),`
`,(0,n.jsxs)(s,{id:`00BB`,name:`PRINT`,member:`Text.Print`,children:[(0,n.jsx)(t.p,{children:`底部普通消息，指定时长。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`00BB PRINT`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: key, time, flag`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`print`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(key, time, flag)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`print`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(key, time, flag)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`立即消息`,children:`立即消息`}),`
`,(0,n.jsxs)(s,{id:`00BC`,name:`PRINT_NOW`,member:`Text.PrintNow`,children:[(0,n.jsx)(t.p,{children:`底部立即消息（插队），指定时长。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`00BC PRINT_NOW`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: key, time, flag`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`printNow`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(key, time, flag)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`printNow`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(key, time, flag)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`清消息`,children:`清消息`}),`
`,(0,n.jsxs)(s,{id:`00BE`,name:`CLEAR_PRINTS`,member:`Text.ClearPrints`,children:[(0,n.jsx)(t.p,{children:`清优先文本与部分大字样式。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`00BE CLEAR_PRINTS`})})})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`clearPrints`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`clearPrints`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`大字带数字`,children:`大字带数字`}),`
`,(0,n.jsxs)(s,{id:`01E3`,name:`PRINT_WITH_NUMBER_BIG`,member:`Text.PrintWithNumberBig`,children:[(0,n.jsxs)(t.p,{children:[`大字：首个 `,(0,n.jsx)(t.code,{children:`~1~`}),` 换成数字。`]}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`01E3 PRINT_WITH_NUMBER_BIG`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: key, num, duration, style`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`printWithNumberBig`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(key, num, duration, style)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`printWithNumberBig`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(key, num, duration, style)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`消息带数字`,children:`消息带数字`}),`
`,(0,n.jsxs)(s,{id:`01E4`,name:`PRINT_WITH_NUMBER`,member:`Text.PrintWithNumber`,children:[(0,n.jsxs)(t.p,{children:[`底部消息：首个 `,(0,n.jsx)(t.code,{children:`~1~`}),` 换成数字。`]}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`01E4 PRINT_WITH_NUMBER`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: key, num, duration, flag`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`printWithNumber`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(key, num, duration, flag)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`printWithNumber`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(key, num, duration, flag)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`立即消息带数字`,children:`立即消息带数字`}),`
`,(0,n.jsxs)(s,{id:`01E5`,name:`PRINT_WITH_NUMBER_NOW`,member:`Text.PrintWithNumberNow`,children:[(0,n.jsxs)(t.p,{children:[`立即底部消息：首个 `,(0,n.jsx)(t.code,{children:`~1~`}),` 换成数字。`]}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`01E5 PRINT_WITH_NUMBER_NOW`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: key, num, duration, flag`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`printWithNumberNow`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(key, num, duration, flag)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`printWithNumberNow`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(key, num, duration, flag)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`低优先大字`,children:`低优先大字`}),`
`,(0,n.jsxs)(s,{id:`0217`,name:`PRINT_BIG_Q`,member:`Text.PrintBigQ`,children:[(0,n.jsx)(t.p,{children:`低优先样式大字。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0217 PRINT_BIG_Q`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: key, duration, style`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`printBigQ`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(key, duration, style)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`printBigQ`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(key, duration, style)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`立即消息-2-数`,children:`立即消息 2 数`}),`
`,(0,n.jsxs)(s,{id:`02FD`,name:`PRINT_WITH_2_NUMBERS_NOW`,member:`Text.PrintWith2NumbersNow`,children:[(0,n.jsxs)(t.p,{children:[`立即消息：前两个 `,(0,n.jsx)(t.code,{children:`~1~`}),` 换成数字。`]}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`02FD PRINT_WITH_2_NUMBERS_NOW`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: key, num1, num2, duration, style`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`printWith2NumbersNow`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(key, num1, num2, duration, style)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`printWith2NumbersNow`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(key, num1, num2, duration, style)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`消息-3-数`,children:`消息 3 数`}),`
`,(0,n.jsxs)(s,{id:`02FF`,name:`PRINT_WITH_3_NUMBERS`,member:`Text.PrintWith3Numbers`,children:[(0,n.jsxs)(t.p,{children:[`消息：前三个 `,(0,n.jsx)(t.code,{children:`~1~`}),` 换成数字。`]}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`02FF PRINT_WITH_3_NUMBERS`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: key, num1, num2, num3, duration, style`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`printWith3Numbers`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(key, num1, num2, num3, duration, style)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`printWith3Numbers`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(key, num1, num2, num3, duration, style)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`消息-4-数`,children:`消息 4 数`}),`
`,(0,n.jsxs)(s,{id:`0302`,name:`PRINT_WITH_4_NUMBERS`,member:`Text.PrintWith4Numbers`,children:[(0,n.jsxs)(t.p,{children:[`消息：前四个 `,(0,n.jsx)(t.code,{children:`~1~`}),` 换成数字。`]}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0302 PRINT_WITH_4_NUMBERS`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: key, num1, num2, num3, num4, duration, style`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`printWith4Numbers`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(key, num1, num2, num3, num4, duration, style)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`printWith4Numbers`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(key, num1, num2, num3, num4, duration, style)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`立即消息-4-数`,children:`立即消息 4 数`}),`
`,(0,n.jsxs)(s,{id:`0303`,name:`PRINT_WITH_4_NUMBERS_NOW`,member:`Text.PrintWith4NumbersNow`,children:[(0,n.jsxs)(t.p,{children:[`立即消息：前四个 `,(0,n.jsx)(t.code,{children:`~1~`}),` 换成数字。`]}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0303 PRINT_WITH_4_NUMBERS_NOW`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: key, num1, num2, num3, num4, duration, style`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`printWith4NumbersNow`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(key, num1, num2, num3, num4, duration, style)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`printWith4NumbersNow`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(key, num1, num2, num3, num4, duration, style)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`消息-6-数`,children:`消息 6 数`}),`
`,(0,n.jsxs)(s,{id:`0308`,name:`PRINT_WITH_6_NUMBERS`,member:`Text.PrintWith6Numbers`,children:[(0,n.jsxs)(t.p,{children:[`消息：前六个 `,(0,n.jsx)(t.code,{children:`~1~`}),` 换成数字。`]}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0308 PRINT_WITH_6_NUMBERS`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: key, num1, num2, num3, num4, num5, num6, duration, style`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`printWith6Numbers`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(key, num1, num2, num3, num4, num5, num6, duration, style)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`printWith6Numbers`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(key, num1, num2, num3, num4, num5, num6, duration, style)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`画-gxt-字`,children:`画 GXT 字`}),`
`,(0,n.jsxs)(s,{id:`033E`,name:`DISPLAY_TEXT`,member:`Text.Display`,children:[(0,n.jsx)(t.p,{children:`在屏幕坐标画 GXT 字。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`033E DISPLAY_TEXT`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: offsetLeft, offsetTop, key`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`displayText`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(offsetLeft, offsetTop, key)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`display`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(offsetLeft, offsetTop, key)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`文字缩放`,children:`文字缩放`}),`
`,(0,n.jsxs)(s,{id:`033F`,name:`SET_TEXT_SCALE`,member:`Text.SetScale`,children:[(0,n.jsx)(t.p,{children:`文字宽高缩放。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`033F SET_TEXT_SCALE`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: widthScale, heightScale`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`setTextScale`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(widthScale, heightScale)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setScale`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(widthScale, heightScale)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`文字颜色`,children:`文字颜色`}),`
`,(0,n.jsxs)(s,{id:`0340`,name:`SET_TEXT_COLOUR`,member:`Text.SetColor`,children:[(0,n.jsx)(t.p,{children:`文字颜色 RGBA。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0340 SET_TEXT_COLOUR`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: red, green, blue, alpha`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`setTextColour`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(red, green, blue, alpha)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setColor`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(red, green, blue, alpha)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`两端对齐`,children:`两端对齐`}),`
`,(0,n.jsxs)(s,{id:`0341`,name:`SET_TEXT_JUSTIFY`,member:`Text.SetJustify`,children:[(0,n.jsx)(t.p,{children:`两端对齐/自动换行成矩形。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0341 SET_TEXT_JUSTIFY`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: state`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`setTextJustify`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setJustify`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`水平居中`,children:`水平居中`}),`
`,(0,n.jsxs)(s,{id:`0342`,name:`SET_TEXT_CENTRE`,member:`Text.SetCenter`,children:[(0,n.jsx)(t.p,{children:`水平居中。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0342 SET_TEXT_CENTRE`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: state`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`setTextCentre`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setCenter`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`换行宽度`,children:`换行宽度`}),`
`,(0,n.jsxs)(s,{id:`0343`,name:`SET_TEXT_WRAPX`,member:`Text.SetWrapX`,children:[(0,n.jsx)(t.p,{children:`换行宽度。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0343 SET_TEXT_WRAPX`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: width`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`setTextWrapx`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(width)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setWrapX`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(width)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`居中行宽`,children:`居中行宽`}),`
`,(0,n.jsxs)(s,{id:`0344`,name:`SET_TEXT_CENTRE_SIZE`,member:`Text.SetCenterSize`,children:[(0,n.jsx)(t.p,{children:`居中文字的行宽。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0344 SET_TEXT_CENTRE_SIZE`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: width`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`setTextCentreSize`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(width)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setCenterSize`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(width)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`文字背景`,children:`文字背景`}),`
`,(0,n.jsxs)(s,{id:`0345`,name:`SET_TEXT_BACKGROUND`,member:`Text.SetBackground`,children:[(0,n.jsx)(t.p,{children:`是否画文字背景。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0345 SET_TEXT_BACKGROUND`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: state`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`setTextBackground`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setBackground`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`比例字体`,children:`比例字体`}),`
`,(0,n.jsxs)(s,{id:`0348`,name:`SET_TEXT_PROPORTIONAL`,member:`Text.SetProportional`,children:[(0,n.jsx)(t.p,{children:`比例字体宽。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0348 SET_TEXT_PROPORTIONAL`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: state`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`setTextProportional`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setProportional`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`字体`,children:`字体`}),`
`,(0,n.jsxs)(s,{id:`0349`,name:`SET_TEXT_FONT`,member:`Text.SetFont`,children:[(0,n.jsx)(t.p,{children:`绘制字体。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0349 SET_TEXT_FONT`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: font`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`setTextFont`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(font)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setFont`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(font)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`大字-2-数`,children:`大字 2 数`}),`
`,(0,n.jsxs)(s,{id:`036D`,name:`PRINT_WITH_2_NUMBERS_BIG`,member:`Text.PrintWith2NumbersBig`,children:[(0,n.jsxs)(t.p,{children:[`大字：前两个 `,(0,n.jsx)(t.code,{children:`~1~`}),` 换成数字。`]}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`036D PRINT_WITH_2_NUMBERS_BIG`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: key, num1, num2, duration, style`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`printWith2NumbersBig`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(key, num1, num2, duration, style)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`printWith2NumbersBig`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(key, num1, num2, duration, style)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`嵌套-gxt-立即消息`,children:`嵌套 GXT 立即消息`}),`
`,(0,n.jsxs)(s,{id:`0384`,name:`PRINT_STRING_IN_STRING_NOW`,member:`Text.PrintStringInStringNow`,children:[(0,n.jsxs)(t.p,{children:[`立即消息：`,(0,n.jsx)(t.code,{children:`~a~`}),` 换成另一段 GXT。`]}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0384 PRINT_STRING_IN_STRING_NOW`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: templateKey, replacementKey, duration, style`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`printStringInStringNow`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(templateKey, replacementKey, duration, style)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`printStringInStringNow`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(templateKey, replacementKey, duration, style)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`清指定消息`,children:`清指定消息`}),`
`,(0,n.jsxs)(s,{id:`03D5`,name:`CLEAR_THIS_PRINT`,member:`Text.ClearThisPrint`,children:[(0,n.jsx)(t.p,{children:`清指定 key 的优先消息。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`03D5 CLEAR_THIS_PRINT`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: key`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`clearThisPrint`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(key)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`clearThisPrint`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(key)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`清指定大字`,children:`清指定大字`}),`
`,(0,n.jsxs)(s,{id:`03D6`,name:`CLEAR_THIS_BIG_PRINT`,member:`Text.ClearThisBigPrint`,children:[(0,n.jsx)(t.p,{children:`清指定 key 的样式大字。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`03D6 CLEAR_THIS_BIG_PRINT`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: key`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`clearThisBigPrint`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(key)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`clearThisBigPrint`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(key)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`画在淡入前`,children:`画在淡入前`}),`
`,(0,n.jsxs)(s,{id:`03E0`,name:`SET_TEXT_DRAW_BEFORE_FADE`,member:`Text.SetDrawBeforeFade`,children:[(0,n.jsx)(t.p,{children:`下一次文字画在淡入淡出之前。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`03E0 SET_TEXT_DRAW_BEFORE_FADE`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: state`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`setTextDrawBeforeFade`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setDrawBeforeFade`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`右对齐`,children:`右对齐`}),`
`,(0,n.jsxs)(s,{id:`03E4`,name:`SET_TEXT_RIGHT_JUSTIFY`,member:`Text.SetRightJustify`,children:[(0,n.jsx)(t.p,{children:`右对齐。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`03E4 SET_TEXT_RIGHT_JUSTIFY`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: state`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`setTextRightJustify`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setRightJustify`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`帮助框`,children:`帮助框`}),`
`,(0,n.jsxs)(s,{id:`03E5`,name:`PRINT_HELP`,member:`Text.PrintHelp`,children:[(0,n.jsx)(t.p,{children:`黑底帮助框，数秒后消失。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`03E5 PRINT_HELP`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: key`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`printHelp`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(key)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`printHelp`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(key)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`关帮助框`,children:`关帮助框`}),`
`,(0,n.jsxs)(s,{id:`03E6`,name:`CLEAR_HELP`,member:`Text.ClearHelp`,children:[(0,n.jsx)(t.p,{children:`关掉帮助框。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`03E6 CLEAR_HELP`})})})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`clearHelp`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`clearHelp`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`清小字`,children:`清小字`}),`
`,(0,n.jsxs)(s,{id:`03EB`,name:`CLEAR_SMALL_PRINTS`,member:`Text.ClearSmallPrints`,children:[(0,n.jsx)(t.p,{children:`清小字消息。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`03EB CLEAR_SMALL_PRINTS`})})})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`clearSmallPrints`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`clearSmallPrints`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`开关绘制命令`,children:`开关绘制命令`}),`
`,(0,n.jsxs)(s,{id:`03F0`,name:`USE_TEXT_COMMANDS`,member:`Text.UseCommands`,children:[(0,n.jsx)(t.p,{children:`开关文字/贴图绘制命令。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`03F0 USE_TEXT_COMMANDS`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: state`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`useTextCommands`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`useCommands`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`画带-1-数-gxt`,children:`画带 1 数 GXT`}),`
`,(0,n.jsxs)(s,{id:`045A`,name:`DISPLAY_TEXT_WITH_NUMBER`,member:`Text.DisplayWithNumber`,children:[(0,n.jsx)(t.p,{children:`屏幕坐标画带 1 个数字的 GXT。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`045A DISPLAY_TEXT_WITH_NUMBER`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: offsetLeft, offsetTop, key, num`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`displayTextWithNumber`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(offsetLeft, offsetTop, key, num)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`displayWithNumber`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(offsetLeft, offsetTop, key, num)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`画带-2-数-gxt`,children:`画带 2 数 GXT`}),`
`,(0,n.jsxs)(s,{id:`045B`,name:`DISPLAY_TEXT_WITH_2_NUMBERS`,member:`Text.DisplayWith2Numbers`,children:[(0,n.jsx)(t.p,{children:`屏幕坐标画带 2 个数字的 GXT。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`045B DISPLAY_TEXT_WITH_2_NUMBERS`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: offsetLeft, offsetTop, key, num1, num2`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`displayTextWith2Numbers`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(offsetLeft, offsetTop, key, num1, num2)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`displayWith2Numbers`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(offsetLeft, offsetTop, key, num1, num2)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`常驻帮助框`,children:`常驻帮助框`}),`
`,(0,n.jsxs)(s,{id:`0512`,name:`PRINT_HELP_FOREVER`,member:`Text.PrintHelpForever`,children:[(0,n.jsx)(t.p,{children:`常驻帮助框，直到别的命令清掉。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0512 PRINT_HELP_FOREVER`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: key`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`printHelpForever`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(key)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`printHelpForever`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(key)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`常驻帮助框带数`,children:`常驻帮助框带数`}),`
`,(0,n.jsxs)(s,{id:`0513`,name:`PRINT_HELP_FOREVER_WITH_NUMBER`,member:`Text.PrintHelpForeverWithNumber`,children:[(0,n.jsx)(t.p,{children:`常驻帮助框带 1 个数字。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0513 PRINT_HELP_FOREVER_WITH_NUMBER`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: gxt, number`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`printHelpForeverWithNumber`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(gxt, number)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`printHelpForeverWithNumber`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(gxt, number)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`加载任务-gxt`,children:`加载任务 GXT`}),`
`,(0,n.jsxs)(s,{id:`054C`,name:`LOAD_MISSION_TEXT`,member:`Text.LoadMissionText`,children:[(0,n.jsx)(t.p,{children:`加载指定 GXT 表作任务文本源。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`054C LOAD_MISSION_TEXT`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: tableName`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`loadMissionText`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(tableName)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`loadMissionText`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(tableName)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`文字阴影`,children:`文字阴影`}),`
`,(0,n.jsxs)(s,{id:`060D`,name:`SET_TEXT_DROPSHADOW`,member:`Text.SetDropshadow`,children:[(0,n.jsx)(t.p,{children:`当前绘制文字的阴影。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`060D SET_TEXT_DROPSHADOW`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: intensity, red, green, blue, alpha`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`setTextDropshadow`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(intensity, red, green, blue, alpha)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setDropshadow`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(intensity, red, green, blue, alpha)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`是否有优先消息`,children:`是否有优先消息`}),`
`,(0,n.jsxs)(s,{id:`076F`,name:`IS_MESSAGE_BEING_DISPLAYED`,member:`Text.IsMessageBeingDisplayed`,children:[(0,n.jsx)(t.p,{children:`用在 if：是否有优先 GXT 在屏上。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`076F IS_MESSAGE_BEING_DISPLAYED`})})})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`isMessageBeingDisplayed`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`isMessageBeingDisplayed`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`画浮点-gxt`,children:`画浮点 GXT`}),`
`,(0,n.jsxs)(s,{id:`07FC`,name:`DISPLAY_TEXT_WITH_FLOAT`,member:`Text.DisplayWithFloat`,children:[(0,n.jsx)(t.p,{children:`浮点按精度拆成两数再画 2 数字 GXT。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`07FC DISPLAY_TEXT_WITH_FLOAT`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: leftTopX, leftTopY, key, value, precision`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`displayTextWithFloat`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(leftTopX, leftTopY, key, value, precision)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`displayWithFloat`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(leftTopX, leftTopY, key, value, precision)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`文字描边`,children:`文字描边`}),`
`,(0,n.jsxs)(s,{id:`081C`,name:`SET_TEXT_EDGE`,member:`Text.SetEdge`,children:[(0,n.jsx)(t.p,{children:`下一次绘制文字描边。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`081C SET_TEXT_EDGE`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: size, red, green, blue, alpha`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`setTextEdge`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(size, red, green, blue, alpha)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setEdge`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(size, red, green, blue, alpha)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`全局-label-是否空`,children:`全局 label 是否空`}),`
`,(0,n.jsxs)(s,{id:`0844`,name:`IS_VAR_TEXT_LABEL_EMPTY`,member:`Text.IsEmpty`,children:[(0,n.jsx)(t.p,{children:`用在 if：全局 text label 是否空串。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0844 IS_VAR_TEXT_LABEL_EMPTY`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: text`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`isVarTextLabelEmpty`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(text)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`isEmpty`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(text)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`局部-label-是否空`,children:`局部 label 是否空`}),`
`,(0,n.jsxs)(s,{id:`0845`,name:`IS_LVAR_TEXT_LABEL_EMPTY`,member:`Text.IsEmpty`,children:[(0,n.jsx)(t.p,{children:`用在 if：局部 text label 是否空串。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0845 IS_LVAR_TEXT_LABEL_EMPTY`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: text`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`isLvarTextLabelEmpty`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(text)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`isEmpty`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(text)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`全局-label16-是否空`,children:`全局 label16 是否空`}),`
`,(0,n.jsxs)(s,{id:`0846`,name:`IS_VAR_TEXT_LABEL16_EMPTY`,member:`Text.IsEmpty`,children:[(0,n.jsx)(t.p,{children:`用在 if：全局 label16 是否空串。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0846 IS_VAR_TEXT_LABEL16_EMPTY`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: text`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`isVarTextLabel16Empty`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(text)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`isEmpty`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(text)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`局部-label16-是否空`,children:`局部 label16 是否空`}),`
`,(0,n.jsxs)(s,{id:`0847`,name:`IS_LVAR_TEXT_LABEL16_EMPTY`,member:`Text.IsEmpty`,children:[(0,n.jsx)(t.p,{children:`用在 if：局部 label16 是否空串。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0847 IS_LVAR_TEXT_LABEL16_EMPTY`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: text`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`isLvarTextLabel16Empty`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(text)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`isEmpty`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(text)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`是否有帮助框`,children:`是否有帮助框`}),`
`,(0,n.jsxs)(s,{id:`08FE`,name:`IS_HELP_MESSAGE_BEING_DISPLAYED`,member:`Text.IsHelpMessageBeingDisplayed`,children:[(0,n.jsx)(t.p,{children:`用在 if：是否有任意帮助框。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`08FE IS_HELP_MESSAGE_BEING_DISPLAYED`})})})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`isHelpMessageBeingDisplayed`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`isHelpMessageBeingDisplayed`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`消息排版`,children:`消息排版`}),`
`,(0,n.jsxs)(s,{id:`0912`,name:`SET_MESSAGE_FORMATTING`,member:`Text.SetMessageFormatting`,children:[(0,n.jsx)(t.p,{children:`覆盖底部消息屏上位置/边距/宽。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0912 SET_MESSAGE_FORMATTING`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: customPosition, margin, width`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`setMessageFormatting`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(customPosition, margin, width)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setMessageFormatting`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(customPosition, margin, width)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`帮助框宽度`,children:`帮助框宽度`}),`
`,(0,n.jsxs)(s,{id:`0989`,name:`SET_HELP_MESSAGE_BOX_SIZE`,member:`Text.SetHelpMessageBoxSize`,children:[(0,n.jsx)(t.p,{children:`帮助框全局宽度。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0989 SET_HELP_MESSAGE_BOX_SIZE`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: size`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`setHelpMessageBoxSize`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(size)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setHelpMessageBoxSize`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(size)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`字符串哈希`,children:`字符串哈希`}),`
`,(0,n.jsxs)(s,{id:`09A9`,name:`GET_HASH_KEY`,member:`Text.GetHashKey`,children:[(0,n.jsx)(t.p,{children:`字符串 CRC 哈希。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`09A9 GET_HASH_KEY`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: text`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`out: hash`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`local`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` hash `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` getHashKey`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(text)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getHashKey`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(text)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`下条进简报`,children:`下条进简报`}),`
`,(0,n.jsxs)(s,{id:`09C1`,name:`ADD_NEXT_MESSAGE_TO_PREVIOUS_BRIEFS`,member:`Text.AddNextMessageToPreviousBriefs`,children:[(0,n.jsx)(t.p,{children:`下一条是否进菜单简报记录。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`09C1 ADD_NEXT_MESSAGE_TO_PREVIOUS_BRIEFS`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: state`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`addNextMessageToPreviousBriefs`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`addNextMessageToPreviousBriefs`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`gxt-宽度`,children:`GXT 宽度`}),`
`,(0,n.jsxs)(s,{id:`09FD`,name:`GET_STRING_WIDTH`,member:`Text.GetStringWidth`,children:[(0,n.jsx)(t.p,{children:`GXT 条目渲染宽度。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`09FD GET_STRING_WIDTH`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: entry`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`out: width`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`local`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` width `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` getStringWidth`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(entry)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getStringWidth`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(entry)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`带数-gxt-宽度`,children:`带数 GXT 宽度`}),`
`,(0,n.jsxs)(s,{id:`0A08`,name:`GET_STRING_WIDTH_WITH_NUMBER`,member:`Text.GetStringWidthWithNumber`,children:[(0,n.jsx)(t.p,{children:`带数字的 GXT 渲染宽度。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0A08 GET_STRING_WIDTH_WITH_NUMBER`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: gxtEntry, number`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`out: width`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`local`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` width `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` getStringWidthWithNumber`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(gxtEntry, number)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getStringWidthWithNumber`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(gxtEntry, number)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`清-style-大字`,children:`清 style 大字`}),`
`,(0,n.jsxs)(s,{id:`0A0E`,name:`CLEAR_THIS_PRINT_BIG_NOW`,member:`Text.ClearThisPrintBigNow`,children:[(0,n.jsx)(t.p,{children:`清指定 style 的大字。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0A0E CLEAR_THIS_PRINT_BIG_NOW`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: textStyle`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`clearThisPrintBigNow`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(textStyle)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`clearThisPrintBigNow`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(textStyle)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`区域名样式`,children:`区域名样式`}),`
`,(0,n.jsxs)(s,{id:`0A19`,name:`SET_AREA_NAME`,member:`Text.SetAreaName`,children:[(0,n.jsx)(t.p,{children:`用区域名样式显示 GXT。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0A19 SET_AREA_NAME`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: name`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`setAreaName`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(name)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setAreaName`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(name)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`是否该帮助框`,children:`是否该帮助框`}),`
`,(0,n.jsxs)(s,{id:`0A2A`,name:`IS_THIS_HELP_MESSAGE_BEING_DISPLAYED`,member:`Text.IsThisHelpMessageBeingDisplayed`,children:[(0,n.jsx)(t.p,{children:`用在 if：是否正显示该 GXT 帮助框。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0A2A IS_THIS_HELP_MESSAGE_BEING_DISPLAYED`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: gxt`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`isThisHelpMessageBeingDisplayed`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(gxt)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`isThisHelpMessageBeingDisplayed`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(gxt)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`淡出前画字幕`,children:`淡出前画字幕`}),`
`,(0,n.jsxs)(s,{id:`0A2C`,name:`DRAW_SUBTITLES_BEFORE_FADE`,member:`Text.DrawSubtitlesBeforeFade`,children:[(0,n.jsx)(t.p,{children:`淡出时字幕是否仍画在前面。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0A2C DRAW_SUBTITLES_BEFORE_FADE`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: state`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`drawSubtitlesBeforeFade`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`drawSubtitlesBeforeFade`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`淡出前画零活标题`,children:`淡出前画零活标题`}),`
`,(0,n.jsxs)(s,{id:`0A2D`,name:`DRAW_ODDJOB_TITLE_BEFORE_FADE`,member:`Text.DrawOddjobTitleBeforeFade`,children:[(0,n.jsx)(t.p,{children:`淡出时零活标题大字是否仍画在前面。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0A2D DRAW_ODDJOB_TITLE_BEFORE_FADE`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: state`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`drawOddjobTitleBeforeFade`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`drawOddjobTitleBeforeFade`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`小游戏外帮助消息`,children:`小游戏外帮助消息`}),`
`,(0,n.jsxs)(s,{id:`0A44`,name:`DISPLAY_NON_MINIGAME_HELP_MESSAGES`,member:`Text.DisplayNonMinigameHelpMessages`,children:[(0,n.jsxs)(t.p,{children:[`覆盖 `,(0,n.jsx)(t.code,{children:`09BD`}),` 的小游戏文本块限制。`]}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0A44 DISPLAY_NON_MINIGAME_HELP_MESSAGES`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: state`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`displayNonMinigameHelpMessages`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Text.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`displayNonMinigameHelpMessages`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})})]})]})]})}function c(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}function l(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as _markdown,c as default,r as frontmatter,a as structuredData,o as toc};