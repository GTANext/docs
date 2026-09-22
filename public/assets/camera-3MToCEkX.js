import{rt as e,t}from"./jsx-runtime-DFJu3dTM.js";var n=e(t()),r={title:`镜头 Camera`,description:`镜头 / 淡入淡出 / 附着`},i=`

\`sa\` · 扩展 \`default\` · SCM 原生命令

共 51 条。写法见 [Lua](/docs/cleo/syntax) / [Redux](/docs/cleo/syntax-redux)。

## 抖镜头 [#抖镜头]

<Opcode id="0003" name="SHAKE_CAM" member="Camera.Shake">
  按强度抖动镜头。

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
      0003 SHAKE_CAM
      in: intensity
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      shakeCam(intensity)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.shake(intensity)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 点是否在屏上 [#点是否在屏上]

<Opcode id="00C2" name="IS_POINT_ON_SCREEN" member="Camera.IsPointOnScreen">
  用在 if：点周围半径是否有任何部分在屏上。

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
      00C2 IS_POINT_ON_SCREEN
      in: x, y, z, radius
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      isPointOnScreen(x, y, z, radius)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.isPointOnScreen(x, y, z, radius)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 对准车辆 [#对准车辆]

<Opcode id="0158" name="POINT_CAMERA_AT_CAR" member="Camera.PointAtCar">
  镜头对准/附着指定车辆。

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
      0158 POINT_CAMERA_AT_CAR
      in: vehicle, mode, switchStyle
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      pointCameraAtCar(vehicle, mode, switchStyle)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.pointAtCar(vehicle, mode, switchStyle)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 对准角色 [#对准角色]

<Opcode id="0159" name="POINT_CAMERA_AT_CHAR" member="Camera.PointAtChar">
  镜头对准/附着指定角色。

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
      0159 POINT_CAMERA_AT_CHAR
      in: char, mode, switchStyle
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      pointCameraAtChar(char, mode, switchStyle)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.pointAtChar(char, mode, switchStyle)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 恢复镜头 [#恢复镜头]

<Opcode id="015A" name="RESTORE_CAMERA" member="Camera.Restore">
  恢复常规镜头。

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
      015A RESTORE_CAMERA
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      restoreCamera()
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.restore()
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 固定机位 [#固定机位]

<Opcode id="015F" name="SET_FIXED_CAMERA_POSITION" member="Camera.SetFixedPosition">
  固定机位与 up 向量偏移。

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
      015F SET_FIXED_CAMERA_POSITION
      in: x, y, z, upVecOffsetX, upVecOffsetY, upVecOffsetZ
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      setFixedCameraPosition(x, y, z, upVecOffsetX, upVecOffsetY, upVecOffsetZ)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.setFixedPosition(x, y, z, upVecOffsetX, upVecOffsetY, upVecOffsetZ)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 看向坐标 [#看向坐标]

<Opcode id="0160" name="POINT_CAMERA_AT_POINT" member="Camera.PointAtPoint">
  镜头看向坐标（配合固定机位等）。

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
      0160 POINT_CAMERA_AT_POINT
      in: x, y, z, switchStyle
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      pointCameraAtPoint(x, y, z, switchStyle)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.pointAtPoint(x, y, z, switchStyle)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 淡入淡出颜色 [#淡入淡出颜色]

<Opcode id="0169" name="SET_FADING_COLOUR" member="Camera.SetFadingColor">
  淡入淡出颜色 RGB（\`016A\`）。

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
      0169 SET_FADING_COLOUR
      in: r, g, b
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      setFadingColour(r, g, b)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.setFadingColor(r, g, b)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 淡入淡出 [#淡入淡出]

<Opcode id="016A" name="DO_FADE" member="Camera.DoFade">
  屏幕淡入/淡出指定时长。

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
      016A DO_FADE
      in: time, direction
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      doFade(time, direction)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.doFade(time, direction)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 是否在淡入淡出 [#是否在淡入淡出]

<Opcode id="016B" name="GET_FADING_STATUS" member="Camera.GetFadingStatus">
  用在 if：是否正在淡入淡出。

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
      016B GET_FADING_STATUS
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      getFadingStatus()
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.getFadingStatus()
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 硬切恢复 [#硬切恢复]

<Opcode id="02EB" name="RESTORE_CAMERA_JUMPCUT" member="Camera.RestoreJumpcut">
  硬切恢复镜头到玩家身后。

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
      02EB RESTORE_CAMERA_JUMPCUT
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      restoreCameraJumpcut()
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.restoreJumpcut()
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 镜头远近 [#镜头远近]

<Opcode id="032A" name="SET_CAMERA_ZOOM" member="Camera.SetZoom">
  镜头相对玩家的远近。

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
      032A SET_CAMERA_ZOOM
      in: zoom
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      setCameraZoom(zoom)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.setZoom(zoom)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 镜头到玩家后 [#镜头到玩家后]

<Opcode id="0373" name="SET_CAMERA_BEHIND_PLAYER" member="Camera.SetBehindPlayer">
  镜头放到玩家身后。

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
      0373 SET_CAMERA_BEHIND_PLAYER
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      setCameraBehindPlayer()
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.setBehindPlayer()
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 镜头到玩家前 [#镜头到玩家前]

<Opcode id="03C8" name="SET_CAMERA_IN_FRONT_OF_PLAYER" member="Camera.SetInFrontOfPlayer">
  镜头放到玩家前方并朝向玩家。

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
      03C8 SET_CAMERA_IN_FRONT_OF_PLAYER
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      setCameraInFrontOfPlayer()
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.setInFrontOfPlayer()
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 近裁剪面 [#近裁剪面]

<Opcode id="041D" name="SET_NEAR_CLIP" member="Camera.SetNearClip">
  近裁剪面距离。

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
      041D SET_NEAR_CLIP
      in: distance
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      setNearClip(distance)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.setNearClip(distance)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 调试镜头坐标 [#调试镜头坐标]

<Opcode id="0454" name="GET_DEBUG_CAMERA_COORDINATES" member="Camera.GetDebugCoordinates">
  调试镜头位置。

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
      0454 GET_DEBUG_CAMERA_COORDINATES
      out: x, y, z
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      local x, y, z = getDebugCameraCoordinates()
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.getDebugCoordinates()
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 插值参数 [#插值参数]

<Opcode id="0460" name="SET_INTERPOLATION_PARAMETERS" member="Camera.SetInterpolationParameters">
  镜头过渡时长/插值参数。

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
      0460 SET_INTERPOLATION_PARAMETERS
      in: interpolationToStopMoving, time
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      setInterpolationParameters(interpolationToStopMoving, time)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.setInterpolationParameters(interpolationToStopMoving, time)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 调试注视点 [#调试注视点]

<Opcode id="0463" name="GET_DEBUG_CAMERA_POINT_AT" member="Camera.GetDebugPointAt">
  调试镜头注视点。

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
      0463 GET_DEBUG_CAMERA_POINT_AT
      out: x, y, z
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      local x, y, z = getDebugCameraPointAt()
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.getDebugPointAt()
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 附着到车 [#附着到车]

<Opcode id="0679" name="ATTACH_CAMERA_TO_VEHICLE" member="Camera.AttachToVehicle">
  镜头相对车辆偏移附着。

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
      0679 ATTACH_CAMERA_TO_VEHICLE
      in: handle, xOffset, yOffset, zOffset, xRotation, yRotation, zRotation, tilt, switchStyle
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      attachCameraToVehicle(handle, xOffset, yOffset, zOffset, xRotation, yRotation, zRotation, tilt, switchStyle)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.attachToVehicle(handle, xOffset, yOffset, zOffset, xRotation, yRotation, zRotation, tilt, switchStyle)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 附着车上并看车 [#附着车上并看车]

<Opcode id="067A" name="ATTACH_CAMERA_TO_VEHICLE_LOOK_AT_VEHICLE" member="Camera.AttachToVehicleLookAtVehicle">
  附着在车上并看另一辆车。

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
      067A ATTACH_CAMERA_TO_VEHICLE_LOOK_AT_VEHICLE
      in: handle, xOffset, yOffset, zOffset, vehicle, tilt, switchStyle
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      attachCameraToVehicleLookAtVehicle(handle, xOffset, yOffset, zOffset, vehicle, tilt, switchStyle)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.attachToVehicleLookAtVehicle(handle, xOffset, yOffset, zOffset, vehicle, tilt, switchStyle)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 附着车上并看人 [#附着车上并看人]

<Opcode id="067B" name="ATTACH_CAMERA_TO_VEHICLE_LOOK_AT_CHAR" member="Camera.AttachToVehicleLookAtChar">
  附着在车上并看角色。

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
      067B ATTACH_CAMERA_TO_VEHICLE_LOOK_AT_CHAR
      in: car, xOffset, yOffset, zOffset, char, tilt, switchStyle
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      attachCameraToVehicleLookAtChar(car, xOffset, yOffset, zOffset, char, tilt, switchStyle)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.attachToVehicleLookAtChar(car, xOffset, yOffset, zOffset, char, tilt, switchStyle)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 附着到人 [#附着到人]

<Opcode id="067C" name="ATTACH_CAMERA_TO_CHAR" member="Camera.AttachToChar">
  镜头相对角色偏移附着。

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
      067C ATTACH_CAMERA_TO_CHAR
      in: handle, xOffset, yOffset, zOffset, xRotation, yRotation, zRotation, tilt, switchStyle
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      attachCameraToChar(handle, xOffset, yOffset, zOffset, xRotation, yRotation, zRotation, tilt, switchStyle)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.attachToChar(handle, xOffset, yOffset, zOffset, xRotation, yRotation, zRotation, tilt, switchStyle)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 附着人上并看车 [#附着人上并看车]

<Opcode id="067D" name="ATTACH_CAMERA_TO_CHAR_LOOK_AT_VEHICLE" member="Camera.AttachToCharLookAtVehicle">
  附着在角色上并看车辆。

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
      067D ATTACH_CAMERA_TO_CHAR_LOOK_AT_VEHICLE
      in: char, xOffset, yOffset, zOffset, vehicle, tilt, switchStyle
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      attachCameraToCharLookAtVehicle(char, xOffset, yOffset, zOffset, vehicle, tilt, switchStyle)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.attachToCharLookAtVehicle(char, xOffset, yOffset, zOffset, vehicle, tilt, switchStyle)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 附着人上并看人 [#附着人上并看人]

<Opcode id="067E" name="ATTACH_CAMERA_TO_CHAR_LOOK_AT_CHAR" member="Camera.AttachToCharLookAtChar">
  附着在角色上并看另一角色。

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
      067E ATTACH_CAMERA_TO_CHAR_LOOK_AT_CHAR
      in: handle, xOffset, yOffset, zOffset, char, tilt, switchStyle
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      attachCameraToCharLookAtChar(handle, xOffset, yOffset, zOffset, char, tilt, switchStyle)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.attachToCharLookAtChar(handle, xOffset, yOffset, zOffset, char, tilt, switchStyle)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 活动镜头坐标 [#活动镜头坐标]

<Opcode id="068D" name="GET_ACTIVE_CAMERA_COORDINATES" member="Camera.GetActiveCoordinates">
  当前活动镜头坐标。

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
      068D GET_ACTIVE_CAMERA_COORDINATES
      out: x, y, z
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      local x, y, z = getActiveCameraCoordinates()
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.getActiveCoordinates()
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 活动注视点 [#活动注视点]

<Opcode id="068E" name="GET_ACTIVE_CAMERA_POINT_AT" member="Camera.GetActivePointAt">
  当前镜头注视点。

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
      068E GET_ACTIVE_CAMERA_POINT_AT
      out: x, y, z
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      local x, y, z = getActiveCameraPointAt()
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.getActivePointAt()
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 双人镜头 [#双人镜头]

<Opcode id="06E0" name="SET_TWO_PLAYER_CAMERA_MODE" member="Camera.SetTwoPlayerMode">
  双人合作镜头模式。

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
      06E0 SET_TWO_PLAYER_CAMERA_MODE
      in: state
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      setTwoPlayerCameraMode(state)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.setTwoPlayerMode(state)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 取 FOV [#取-fov]

<Opcode id="0801" name="GET_CAMERA_FOV" member="Camera.GetFov">
  视场角 FOV。

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
      0801 GET_CAMERA_FOV
      out: fov
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      local fov = getCameraFov()
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.getFov()
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 车内第一人称 [#车内第一人称]

<Opcode id="0822" name="SET_FIRST_PERSON_IN_CAR_CAMERA_MODE" member="Camera.SetFirstPersonInCarMode">
  车内第一人称/保险杠视角。

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
      0822 SET_FIRST_PERSON_IN_CAR_CAMERA_MODE
      in: state
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      setFirstPersonInCarCameraMode(state)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.setFirstPersonInCarMode(state)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 镜头撞击 [#镜头撞击]

<Opcode id="0834" name="DO_CAMERA_BUMP" member="Camera.DoBump">
  模拟碰撞般的镜头撞击偏移。

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
      0834 DO_CAMERA_BUMP
      in: xOffset, yOffset
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      doCameraBump(xOffset, yOffset)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.doBump(xOffset, yOffset)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 注视点插值 [#注视点插值]

<Opcode id="0920" name="CAMERA_SET_VECTOR_TRACK" member="Camera.SetVectorTrack">
  注视点从 A 转到 B（可缓动）。

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
      0920 CAMERA_SET_VECTOR_TRACK
      in: fromX, fromY, fromZ, toX, toY, toZ, time, ease
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      cameraSetVectorTrack(fromX, fromY, fromZ, toX, toY, toZ, time, ease)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.setVectorTrack(fromX, fromY, fromZ, toX, toY, toZ, time, ease)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## FOV 插值 [#fov-插值]

<Opcode id="0922" name="CAMERA_SET_LERP_FOV" member="Camera.SetLerpFov">
  FOV 在时长内插值。

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
      0922 CAMERA_SET_LERP_FOV
      in: from, to, time, ease
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      cameraSetLerpFov(from, to, time, ease)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.setLerpFov(from, to, time, ease)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 压暗画面 [#压暗画面]

<Opcode id="0924" name="SET_DARKNESS_EFFECT" member="Camera.SetDarknessEffect">
  压暗画面（可全黑）。

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
      0924 SET_DARKNESS_EFFECT
      in: enable, pitchBlack
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      setDarknessEffect(enable, pitchBlack)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.setDarknessEffect(enable, pitchBlack)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 重置脚本镜头 [#重置脚本镜头]

<Opcode id="0925" name="CAMERA_RESET_NEW_SCRIPTABLES" member="Camera.ResetNewScriptables">
  停掉脚本镜头的推进/插值/抖/缩放等。

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
      0925 CAMERA_RESET_NEW_SCRIPTABLES
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      cameraResetNewScriptables()
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.resetNewScriptables()
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 锁定注视点 [#锁定注视点]

<Opcode id="092F" name="CAMERA_PERSIST_TRACK" member="Camera.PersistTrack">
  推进结束后锁定注视点。

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
      092F CAMERA_PERSIST_TRACK
      in: state
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      cameraPersistTrack(state)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.persistTrack(state)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 锁定机位 [#锁定机位]

<Opcode id="0930" name="CAMERA_PERSIST_POS" member="Camera.PersistPos">
  锁定机位。

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
      0930 CAMERA_PERSIST_POS
      in: state
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      cameraPersistPos(state)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.persistPos(state)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 锁定 FOV [#锁定-fov]

<Opcode id="0931" name="CAMERA_PERSIST_FOV" member="Camera.PersistFov">
  缩放结束后锁定 FOV。

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
      0931 CAMERA_PERSIST_FOV
      in: state
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      cameraPersistFov(state)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.persistFov(state)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 机位是否在动 [#机位是否在动]

<Opcode id="0933" name="CAMERA_IS_VECTOR_MOVE_RUNNING" member="Camera.IsVectorMoveRunning">
  用在 if：机位是否在移动插值中。

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
      0933 CAMERA_IS_VECTOR_MOVE_RUNNING
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      cameraIsVectorMoveRunning()
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.isVectorMoveRunning()
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 注视是否在转 [#注视是否在转]

<Opcode id="0934" name="CAMERA_IS_VECTOR_TRACK_RUNNING" member="Camera.IsVectorTrackRunning">
  用在 if：注视点是否在转动插值中。

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
      0934 CAMERA_IS_VECTOR_TRACK_RUNNING
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      cameraIsVectorTrackRunning()
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.isVectorTrackRunning()
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 机位插值 [#机位插值]

<Opcode id="0936" name="CAMERA_SET_VECTOR_MOVE" member="Camera.SetVectorMove">
  机位从 A 移到 B。

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
      0936 CAMERA_SET_VECTOR_MOVE
      in: fromX, fromY, fromZ, toX, toY, toZ, time, ease
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      cameraSetVectorMove(fromX, fromY, fromZ, toX, toY, toZ, time, ease)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.setVectorMove(fromX, fromY, fromZ, toX, toY, toZ, time, ease)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 电影镜头 [#电影镜头]

<Opcode id="093D" name="SET_CINEMA_CAMERA" member="Camera.SetCinema">
  锁定车辆电影镜头模式。

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
      093D SET_CINEMA_CAMERA
      in: state
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      setCinemaCamera(state)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.setCinema(state)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 镜头到角色前 [#镜头到角色前]

<Opcode id="0944" name="SET_CAMERA_IN_FRONT_OF_CHAR" member="Camera.SetInFrontOfChar">
  镜头放到指定角色前方。

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
      0944 SET_CAMERA_IN_FRONT_OF_CHAR
      in: handle
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      setCameraInFrontOfChar(handle)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.setInFrontOfChar(handle)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 简单抖动 [#简单抖动]

<Opcode id="099C" name="CAMERA_SET_SHAKE_SIMULATION_SIMPLE" member="Camera.SetShakeSimulationSimple">
  多种简单抖动模拟。

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
      099C CAMERA_SET_SHAKE_SIMULATION_SIMPLE
      in: type, timeInMs, intensity
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      cameraSetShakeSimulationSimple(type, timeInMs, intensity)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.setShakeSimulationSimple(type, timeInMs, intensity)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 车内视角模式 [#车内视角模式]

<Opcode id="09AD" name="SET_PLAYER_IN_CAR_CAMERA_MODE" member="Camera.SetPlayerInCarMode">
  切换当前车内视角（等同改视角键）。

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
      09AD SET_PLAYER_IN_CAR_CAMERA_MODE
      in: mode
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      setPlayerInCarCameraMode(mode)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.setPlayerInCarMode(mode)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 固定镜头碰撞 [#固定镜头碰撞]

<Opcode id="09EC" name="ALLOW_FIXED_CAMERA_COLLISION" member="Camera.AllowFixedCollision">
  车库等处是否允许固定镜头碰撞处理。

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
      09EC ALLOW_FIXED_CAMERA_COLLISION
      in: state
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      allowFixedCameraCollision(state)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.allowFixedCollision(state)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 车型镜头微调 [#车型镜头微调]

<Opcode id="09EF" name="SET_VEHICLE_CAMERA_TWEAK" member="Camera.SetVehicleTweak">
  指定车型默认镜头距离/高度/角。

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
      09EF SET_VEHICLE_CAMERA_TWEAK
      in: modelId, distance, altitude, angle
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      setVehicleCameraTweak(modelId, distance, altitude, angle)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.setVehicleTweak(modelId, distance, altitude, angle)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 清车型镜头微调 [#清车型镜头微调]

<Opcode id="09F0" name="RESET_VEHICLE_CAMERA_TWEAK" member="Camera.ResetVehicleTweak">
  清除 \`09EF\` 的车型镜头微调。

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
      09F0 RESET_VEHICLE_CAMERA_TWEAK
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      resetVehicleCameraTweak()
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.resetVehicleTweak()
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 截图 [#截图]

<Opcode id="0A1E" name="TAKE_PHOTO" member="Camera.TakePhoto">
  无 HUD 截图到 User Files/Gallery。

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
      0A1E TAKE_PHOTO
      in: _p1
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      takePhoto(_p1)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.takePhoto(_p1)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 非固定偏移 [#非固定偏移]

<Opcode id="0A25" name="SET_CAMERA_POSITION_UNFIXED" member="Camera.SetPositionUnfixed">
  相对目标实体的镜头偏移（非固定机位）。

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
      0A25 SET_CAMERA_POSITION_UNFIXED
      in: xOffset, yOffset
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      setCameraPositionUnfixed(xOffset, yOffset)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.setPositionUnfixed(xOffset, yOffset)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 相机射击视角 [#相机射击视角]

<Opcode id="0A2F" name="SET_PHOTO_CAMERA_EFFECT" member="Camera.SetPhotoEffect">
  持狙击/相机等时强制第一人称射击视角。

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
      0A2F SET_PHOTO_CAMERA_EFFECT
      in: state
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      setPhotoCameraEffect(state)
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.setPhotoEffect(state)
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>

## 取车内视角 [#取车内视角]

<Opcode id="0A39" name="GET_PLAYER_IN_CAR_CAMERA_MODE" member="Camera.GetPlayerInCarMode">
  当前车辆玩家所选镜头模式。

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
      0A39 GET_PLAYER_IN_CAR_CAMERA_MODE
      out: mode
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Lua">
      \`\`\`lua
      local mode = getPlayerInCarCameraMode()
      \`\`\`
    </CodeBlockTab>

    <CodeBlockTab value="Redux">
      \`\`\`js
      Camera.getPlayerInCarMode()
      \`\`\`
    </CodeBlockTab>
  </CodeBlockTabs>
</Opcode>
`,a={contents:[{heading:void 0,content:"`sa` · 扩展 `default` · SCM 原生命令"},{heading:void 0,content:`共 51 条。写法见 Lua / Redux。`},{heading:`抖镜头`,content:`按强度抖动镜头。`},{heading:`点是否在屏上`,content:`用在 if：点周围半径是否有任何部分在屏上。`},{heading:`对准车辆`,content:`镜头对准/附着指定车辆。`},{heading:`对准角色`,content:`镜头对准/附着指定角色。`},{heading:`恢复镜头`,content:`恢复常规镜头。`},{heading:`固定机位`,content:`固定机位与 up 向量偏移。`},{heading:`看向坐标`,content:`镜头看向坐标（配合固定机位等）。`},{heading:`淡入淡出颜色`,content:"淡入淡出颜色 RGB（`016A`）。"},{heading:`淡入淡出`,content:`屏幕淡入/淡出指定时长。`},{heading:`是否在淡入淡出`,content:`用在 if：是否正在淡入淡出。`},{heading:`硬切恢复`,content:`硬切恢复镜头到玩家身后。`},{heading:`镜头远近`,content:`镜头相对玩家的远近。`},{heading:`镜头到玩家后`,content:`镜头放到玩家身后。`},{heading:`镜头到玩家前`,content:`镜头放到玩家前方并朝向玩家。`},{heading:`近裁剪面`,content:`近裁剪面距离。`},{heading:`调试镜头坐标`,content:`调试镜头位置。`},{heading:`插值参数`,content:`镜头过渡时长/插值参数。`},{heading:`调试注视点`,content:`调试镜头注视点。`},{heading:`附着到车`,content:`镜头相对车辆偏移附着。`},{heading:`附着车上并看车`,content:`附着在车上并看另一辆车。`},{heading:`附着车上并看人`,content:`附着在车上并看角色。`},{heading:`附着到人`,content:`镜头相对角色偏移附着。`},{heading:`附着人上并看车`,content:`附着在角色上并看车辆。`},{heading:`附着人上并看人`,content:`附着在角色上并看另一角色。`},{heading:`活动镜头坐标`,content:`当前活动镜头坐标。`},{heading:`活动注视点`,content:`当前镜头注视点。`},{heading:`双人镜头`,content:`双人合作镜头模式。`},{heading:`取-fov`,content:`视场角 FOV。`},{heading:`车内第一人称`,content:`车内第一人称/保险杠视角。`},{heading:`镜头撞击`,content:`模拟碰撞般的镜头撞击偏移。`},{heading:`注视点插值`,content:`注视点从 A 转到 B（可缓动）。`},{heading:`fov-插值`,content:`FOV 在时长内插值。`},{heading:`压暗画面`,content:`压暗画面（可全黑）。`},{heading:`重置脚本镜头`,content:`停掉脚本镜头的推进/插值/抖/缩放等。`},{heading:`锁定注视点`,content:`推进结束后锁定注视点。`},{heading:`锁定机位`,content:`锁定机位。`},{heading:`锁定-fov`,content:`缩放结束后锁定 FOV。`},{heading:`机位是否在动`,content:`用在 if：机位是否在移动插值中。`},{heading:`注视是否在转`,content:`用在 if：注视点是否在转动插值中。`},{heading:`机位插值`,content:`机位从 A 移到 B。`},{heading:`电影镜头`,content:`锁定车辆电影镜头模式。`},{heading:`镜头到角色前`,content:`镜头放到指定角色前方。`},{heading:`简单抖动`,content:`多种简单抖动模拟。`},{heading:`车内视角模式`,content:`切换当前车内视角（等同改视角键）。`},{heading:`固定镜头碰撞`,content:`车库等处是否允许固定镜头碰撞处理。`},{heading:`车型镜头微调`,content:`指定车型默认镜头距离/高度/角。`},{heading:`清车型镜头微调`,content:"清除 `09EF` 的车型镜头微调。"},{heading:`截图`,content:`无 HUD 截图到 User Files/Gallery。`},{heading:`非固定偏移`,content:`相对目标实体的镜头偏移（非固定机位）。`},{heading:`相机射击视角`,content:`持狙击/相机等时强制第一人称射击视角。`},{heading:`取车内视角`,content:`当前车辆玩家所选镜头模式。`}],headings:[{id:`抖镜头`,content:`抖镜头`},{id:`点是否在屏上`,content:`点是否在屏上`},{id:`对准车辆`,content:`对准车辆`},{id:`对准角色`,content:`对准角色`},{id:`恢复镜头`,content:`恢复镜头`},{id:`固定机位`,content:`固定机位`},{id:`看向坐标`,content:`看向坐标`},{id:`淡入淡出颜色`,content:`淡入淡出颜色`},{id:`淡入淡出`,content:`淡入淡出`},{id:`是否在淡入淡出`,content:`是否在淡入淡出`},{id:`硬切恢复`,content:`硬切恢复`},{id:`镜头远近`,content:`镜头远近`},{id:`镜头到玩家后`,content:`镜头到玩家后`},{id:`镜头到玩家前`,content:`镜头到玩家前`},{id:`近裁剪面`,content:`近裁剪面`},{id:`调试镜头坐标`,content:`调试镜头坐标`},{id:`插值参数`,content:`插值参数`},{id:`调试注视点`,content:`调试注视点`},{id:`附着到车`,content:`附着到车`},{id:`附着车上并看车`,content:`附着车上并看车`},{id:`附着车上并看人`,content:`附着车上并看人`},{id:`附着到人`,content:`附着到人`},{id:`附着人上并看车`,content:`附着人上并看车`},{id:`附着人上并看人`,content:`附着人上并看人`},{id:`活动镜头坐标`,content:`活动镜头坐标`},{id:`活动注视点`,content:`活动注视点`},{id:`双人镜头`,content:`双人镜头`},{id:`取-fov`,content:`取 FOV`},{id:`车内第一人称`,content:`车内第一人称`},{id:`镜头撞击`,content:`镜头撞击`},{id:`注视点插值`,content:`注视点插值`},{id:`fov-插值`,content:`FOV 插值`},{id:`压暗画面`,content:`压暗画面`},{id:`重置脚本镜头`,content:`重置脚本镜头`},{id:`锁定注视点`,content:`锁定注视点`},{id:`锁定机位`,content:`锁定机位`},{id:`锁定-fov`,content:`锁定 FOV`},{id:`机位是否在动`,content:`机位是否在动`},{id:`注视是否在转`,content:`注视是否在转`},{id:`机位插值`,content:`机位插值`},{id:`电影镜头`,content:`电影镜头`},{id:`镜头到角色前`,content:`镜头到角色前`},{id:`简单抖动`,content:`简单抖动`},{id:`车内视角模式`,content:`车内视角模式`},{id:`固定镜头碰撞`,content:`固定镜头碰撞`},{id:`车型镜头微调`,content:`车型镜头微调`},{id:`清车型镜头微调`,content:`清车型镜头微调`},{id:`截图`,content:`截图`},{id:`非固定偏移`,content:`非固定偏移`},{id:`相机射击视角`,content:`相机射击视角`},{id:`取车内视角`,content:`取车内视角`}]},o=[{depth:2,url:`#抖镜头`,title:(0,n.jsx)(n.Fragment,{children:`抖镜头`})},{depth:2,url:`#点是否在屏上`,title:(0,n.jsx)(n.Fragment,{children:`点是否在屏上`})},{depth:2,url:`#对准车辆`,title:(0,n.jsx)(n.Fragment,{children:`对准车辆`})},{depth:2,url:`#对准角色`,title:(0,n.jsx)(n.Fragment,{children:`对准角色`})},{depth:2,url:`#恢复镜头`,title:(0,n.jsx)(n.Fragment,{children:`恢复镜头`})},{depth:2,url:`#固定机位`,title:(0,n.jsx)(n.Fragment,{children:`固定机位`})},{depth:2,url:`#看向坐标`,title:(0,n.jsx)(n.Fragment,{children:`看向坐标`})},{depth:2,url:`#淡入淡出颜色`,title:(0,n.jsx)(n.Fragment,{children:`淡入淡出颜色`})},{depth:2,url:`#淡入淡出`,title:(0,n.jsx)(n.Fragment,{children:`淡入淡出`})},{depth:2,url:`#是否在淡入淡出`,title:(0,n.jsx)(n.Fragment,{children:`是否在淡入淡出`})},{depth:2,url:`#硬切恢复`,title:(0,n.jsx)(n.Fragment,{children:`硬切恢复`})},{depth:2,url:`#镜头远近`,title:(0,n.jsx)(n.Fragment,{children:`镜头远近`})},{depth:2,url:`#镜头到玩家后`,title:(0,n.jsx)(n.Fragment,{children:`镜头到玩家后`})},{depth:2,url:`#镜头到玩家前`,title:(0,n.jsx)(n.Fragment,{children:`镜头到玩家前`})},{depth:2,url:`#近裁剪面`,title:(0,n.jsx)(n.Fragment,{children:`近裁剪面`})},{depth:2,url:`#调试镜头坐标`,title:(0,n.jsx)(n.Fragment,{children:`调试镜头坐标`})},{depth:2,url:`#插值参数`,title:(0,n.jsx)(n.Fragment,{children:`插值参数`})},{depth:2,url:`#调试注视点`,title:(0,n.jsx)(n.Fragment,{children:`调试注视点`})},{depth:2,url:`#附着到车`,title:(0,n.jsx)(n.Fragment,{children:`附着到车`})},{depth:2,url:`#附着车上并看车`,title:(0,n.jsx)(n.Fragment,{children:`附着车上并看车`})},{depth:2,url:`#附着车上并看人`,title:(0,n.jsx)(n.Fragment,{children:`附着车上并看人`})},{depth:2,url:`#附着到人`,title:(0,n.jsx)(n.Fragment,{children:`附着到人`})},{depth:2,url:`#附着人上并看车`,title:(0,n.jsx)(n.Fragment,{children:`附着人上并看车`})},{depth:2,url:`#附着人上并看人`,title:(0,n.jsx)(n.Fragment,{children:`附着人上并看人`})},{depth:2,url:`#活动镜头坐标`,title:(0,n.jsx)(n.Fragment,{children:`活动镜头坐标`})},{depth:2,url:`#活动注视点`,title:(0,n.jsx)(n.Fragment,{children:`活动注视点`})},{depth:2,url:`#双人镜头`,title:(0,n.jsx)(n.Fragment,{children:`双人镜头`})},{depth:2,url:`#取-fov`,title:(0,n.jsx)(n.Fragment,{children:`取 FOV`})},{depth:2,url:`#车内第一人称`,title:(0,n.jsx)(n.Fragment,{children:`车内第一人称`})},{depth:2,url:`#镜头撞击`,title:(0,n.jsx)(n.Fragment,{children:`镜头撞击`})},{depth:2,url:`#注视点插值`,title:(0,n.jsx)(n.Fragment,{children:`注视点插值`})},{depth:2,url:`#fov-插值`,title:(0,n.jsx)(n.Fragment,{children:`FOV 插值`})},{depth:2,url:`#压暗画面`,title:(0,n.jsx)(n.Fragment,{children:`压暗画面`})},{depth:2,url:`#重置脚本镜头`,title:(0,n.jsx)(n.Fragment,{children:`重置脚本镜头`})},{depth:2,url:`#锁定注视点`,title:(0,n.jsx)(n.Fragment,{children:`锁定注视点`})},{depth:2,url:`#锁定机位`,title:(0,n.jsx)(n.Fragment,{children:`锁定机位`})},{depth:2,url:`#锁定-fov`,title:(0,n.jsx)(n.Fragment,{children:`锁定 FOV`})},{depth:2,url:`#机位是否在动`,title:(0,n.jsx)(n.Fragment,{children:`机位是否在动`})},{depth:2,url:`#注视是否在转`,title:(0,n.jsx)(n.Fragment,{children:`注视是否在转`})},{depth:2,url:`#机位插值`,title:(0,n.jsx)(n.Fragment,{children:`机位插值`})},{depth:2,url:`#电影镜头`,title:(0,n.jsx)(n.Fragment,{children:`电影镜头`})},{depth:2,url:`#镜头到角色前`,title:(0,n.jsx)(n.Fragment,{children:`镜头到角色前`})},{depth:2,url:`#简单抖动`,title:(0,n.jsx)(n.Fragment,{children:`简单抖动`})},{depth:2,url:`#车内视角模式`,title:(0,n.jsx)(n.Fragment,{children:`车内视角模式`})},{depth:2,url:`#固定镜头碰撞`,title:(0,n.jsx)(n.Fragment,{children:`固定镜头碰撞`})},{depth:2,url:`#车型镜头微调`,title:(0,n.jsx)(n.Fragment,{children:`车型镜头微调`})},{depth:2,url:`#清车型镜头微调`,title:(0,n.jsx)(n.Fragment,{children:`清车型镜头微调`})},{depth:2,url:`#截图`,title:(0,n.jsx)(n.Fragment,{children:`截图`})},{depth:2,url:`#非固定偏移`,title:(0,n.jsx)(n.Fragment,{children:`非固定偏移`})},{depth:2,url:`#相机射击视角`,title:(0,n.jsx)(n.Fragment,{children:`相机射击视角`})},{depth:2,url:`#取车内视角`,title:(0,n.jsx)(n.Fragment,{children:`取车内视角`})}];function s(e){let t={a:`a`,code:`code`,h2:`h2`,p:`p`,pre:`pre`,span:`span`,...e.components},{CodeBlockTab:r,CodeBlockTabs:i,CodeBlockTabsList:a,CodeBlockTabsTrigger:o,Opcode:s}=t;return r||l(`CodeBlockTab`,!0),i||l(`CodeBlockTabs`,!0),a||l(`CodeBlockTabsList`,!0),o||l(`CodeBlockTabsTrigger`,!0),s||l(`Opcode`,!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:`sa`}),` · 扩展 `,(0,n.jsx)(t.code,{children:`default`}),` · SCM 原生命令`]}),`
`,(0,n.jsxs)(t.p,{children:[`共 51 条。写法见 `,(0,n.jsx)(t.a,{href:`/docs/cleo/syntax`,children:`Lua`}),` / `,(0,n.jsx)(t.a,{href:`/docs/cleo/syntax-redux`,children:`Redux`}),`。`]}),`
`,(0,n.jsx)(t.h2,{id:`抖镜头`,children:`抖镜头`}),`
`,(0,n.jsxs)(s,{id:`0003`,name:`SHAKE_CAM`,member:`Camera.Shake`,children:[(0,n.jsx)(t.p,{children:`按强度抖动镜头。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0003 SHAKE_CAM`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: intensity`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`shakeCam`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(intensity)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`shake`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(intensity)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`点是否在屏上`,children:`点是否在屏上`}),`
`,(0,n.jsxs)(s,{id:`00C2`,name:`IS_POINT_ON_SCREEN`,member:`Camera.IsPointOnScreen`,children:[(0,n.jsx)(t.p,{children:`用在 if：点周围半径是否有任何部分在屏上。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`00C2 IS_POINT_ON_SCREEN`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: x, y, z, radius`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`isPointOnScreen`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(x, y, z, radius)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`isPointOnScreen`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(x, y, z, radius)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`对准车辆`,children:`对准车辆`}),`
`,(0,n.jsxs)(s,{id:`0158`,name:`POINT_CAMERA_AT_CAR`,member:`Camera.PointAtCar`,children:[(0,n.jsx)(t.p,{children:`镜头对准/附着指定车辆。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0158 POINT_CAMERA_AT_CAR`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: vehicle, mode, switchStyle`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`pointCameraAtCar`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(vehicle, mode, switchStyle)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`pointAtCar`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(vehicle, mode, switchStyle)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`对准角色`,children:`对准角色`}),`
`,(0,n.jsxs)(s,{id:`0159`,name:`POINT_CAMERA_AT_CHAR`,member:`Camera.PointAtChar`,children:[(0,n.jsx)(t.p,{children:`镜头对准/附着指定角色。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0159 POINT_CAMERA_AT_CHAR`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: char, mode, switchStyle`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`pointCameraAtChar`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(char, mode, switchStyle)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`pointAtChar`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(char, mode, switchStyle)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`恢复镜头`,children:`恢复镜头`}),`
`,(0,n.jsxs)(s,{id:`015A`,name:`RESTORE_CAMERA`,member:`Camera.Restore`,children:[(0,n.jsx)(t.p,{children:`恢复常规镜头。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`015A RESTORE_CAMERA`})})})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`restoreCamera`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`restore`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`固定机位`,children:`固定机位`}),`
`,(0,n.jsxs)(s,{id:`015F`,name:`SET_FIXED_CAMERA_POSITION`,member:`Camera.SetFixedPosition`,children:[(0,n.jsx)(t.p,{children:`固定机位与 up 向量偏移。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`015F SET_FIXED_CAMERA_POSITION`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: x, y, z, upVecOffsetX, upVecOffsetY, upVecOffsetZ`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`setFixedCameraPosition`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(x, y, z, upVecOffsetX, upVecOffsetY, upVecOffsetZ)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setFixedPosition`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(x, y, z, upVecOffsetX, upVecOffsetY, upVecOffsetZ)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`看向坐标`,children:`看向坐标`}),`
`,(0,n.jsxs)(s,{id:`0160`,name:`POINT_CAMERA_AT_POINT`,member:`Camera.PointAtPoint`,children:[(0,n.jsx)(t.p,{children:`镜头看向坐标（配合固定机位等）。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0160 POINT_CAMERA_AT_POINT`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: x, y, z, switchStyle`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`pointCameraAtPoint`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(x, y, z, switchStyle)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`pointAtPoint`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(x, y, z, switchStyle)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`淡入淡出颜色`,children:`淡入淡出颜色`}),`
`,(0,n.jsxs)(s,{id:`0169`,name:`SET_FADING_COLOUR`,member:`Camera.SetFadingColor`,children:[(0,n.jsxs)(t.p,{children:[`淡入淡出颜色 RGB（`,(0,n.jsx)(t.code,{children:`016A`}),`）。`]}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0169 SET_FADING_COLOUR`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: r, g, b`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`setFadingColour`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(r, g, b)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setFadingColor`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(r, g, b)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`淡入淡出`,children:`淡入淡出`}),`
`,(0,n.jsxs)(s,{id:`016A`,name:`DO_FADE`,member:`Camera.DoFade`,children:[(0,n.jsx)(t.p,{children:`屏幕淡入/淡出指定时长。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`016A DO_FADE`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: time, direction`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`doFade`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(time, direction)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`doFade`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(time, direction)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`是否在淡入淡出`,children:`是否在淡入淡出`}),`
`,(0,n.jsxs)(s,{id:`016B`,name:`GET_FADING_STATUS`,member:`Camera.GetFadingStatus`,children:[(0,n.jsx)(t.p,{children:`用在 if：是否正在淡入淡出。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`016B GET_FADING_STATUS`})})})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`getFadingStatus`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getFadingStatus`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`硬切恢复`,children:`硬切恢复`}),`
`,(0,n.jsxs)(s,{id:`02EB`,name:`RESTORE_CAMERA_JUMPCUT`,member:`Camera.RestoreJumpcut`,children:[(0,n.jsx)(t.p,{children:`硬切恢复镜头到玩家身后。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`02EB RESTORE_CAMERA_JUMPCUT`})})})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`restoreCameraJumpcut`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`restoreJumpcut`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`镜头远近`,children:`镜头远近`}),`
`,(0,n.jsxs)(s,{id:`032A`,name:`SET_CAMERA_ZOOM`,member:`Camera.SetZoom`,children:[(0,n.jsx)(t.p,{children:`镜头相对玩家的远近。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`032A SET_CAMERA_ZOOM`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: zoom`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`setCameraZoom`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(zoom)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setZoom`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(zoom)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`镜头到玩家后`,children:`镜头到玩家后`}),`
`,(0,n.jsxs)(s,{id:`0373`,name:`SET_CAMERA_BEHIND_PLAYER`,member:`Camera.SetBehindPlayer`,children:[(0,n.jsx)(t.p,{children:`镜头放到玩家身后。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0373 SET_CAMERA_BEHIND_PLAYER`})})})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`setCameraBehindPlayer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setBehindPlayer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`镜头到玩家前`,children:`镜头到玩家前`}),`
`,(0,n.jsxs)(s,{id:`03C8`,name:`SET_CAMERA_IN_FRONT_OF_PLAYER`,member:`Camera.SetInFrontOfPlayer`,children:[(0,n.jsx)(t.p,{children:`镜头放到玩家前方并朝向玩家。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`03C8 SET_CAMERA_IN_FRONT_OF_PLAYER`})})})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`setCameraInFrontOfPlayer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setInFrontOfPlayer`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`近裁剪面`,children:`近裁剪面`}),`
`,(0,n.jsxs)(s,{id:`041D`,name:`SET_NEAR_CLIP`,member:`Camera.SetNearClip`,children:[(0,n.jsx)(t.p,{children:`近裁剪面距离。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`041D SET_NEAR_CLIP`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: distance`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`setNearClip`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(distance)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setNearClip`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(distance)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`调试镜头坐标`,children:`调试镜头坐标`}),`
`,(0,n.jsxs)(s,{id:`0454`,name:`GET_DEBUG_CAMERA_COORDINATES`,member:`Camera.GetDebugCoordinates`,children:[(0,n.jsx)(t.p,{children:`调试镜头位置。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0454 GET_DEBUG_CAMERA_COORDINATES`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`out: x, y, z`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`local`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` x, y, z `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` getDebugCameraCoordinates`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getDebugCoordinates`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`插值参数`,children:`插值参数`}),`
`,(0,n.jsxs)(s,{id:`0460`,name:`SET_INTERPOLATION_PARAMETERS`,member:`Camera.SetInterpolationParameters`,children:[(0,n.jsx)(t.p,{children:`镜头过渡时长/插值参数。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0460 SET_INTERPOLATION_PARAMETERS`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: interpolationToStopMoving, time`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`setInterpolationParameters`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(interpolationToStopMoving, time)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setInterpolationParameters`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(interpolationToStopMoving, time)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`调试注视点`,children:`调试注视点`}),`
`,(0,n.jsxs)(s,{id:`0463`,name:`GET_DEBUG_CAMERA_POINT_AT`,member:`Camera.GetDebugPointAt`,children:[(0,n.jsx)(t.p,{children:`调试镜头注视点。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0463 GET_DEBUG_CAMERA_POINT_AT`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`out: x, y, z`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`local`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` x, y, z `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` getDebugCameraPointAt`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getDebugPointAt`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`附着到车`,children:`附着到车`}),`
`,(0,n.jsxs)(s,{id:`0679`,name:`ATTACH_CAMERA_TO_VEHICLE`,member:`Camera.AttachToVehicle`,children:[(0,n.jsx)(t.p,{children:`镜头相对车辆偏移附着。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0679 ATTACH_CAMERA_TO_VEHICLE`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: handle, xOffset, yOffset, zOffset, xRotation, yRotation, zRotation, tilt, switchStyle`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`attachCameraToVehicle`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(handle, xOffset, yOffset, zOffset, xRotation, yRotation, zRotation, tilt, switchStyle)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`attachToVehicle`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(handle, xOffset, yOffset, zOffset, xRotation, yRotation, zRotation, tilt, switchStyle)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`附着车上并看车`,children:`附着车上并看车`}),`
`,(0,n.jsxs)(s,{id:`067A`,name:`ATTACH_CAMERA_TO_VEHICLE_LOOK_AT_VEHICLE`,member:`Camera.AttachToVehicleLookAtVehicle`,children:[(0,n.jsx)(t.p,{children:`附着在车上并看另一辆车。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`067A ATTACH_CAMERA_TO_VEHICLE_LOOK_AT_VEHICLE`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: handle, xOffset, yOffset, zOffset, vehicle, tilt, switchStyle`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`attachCameraToVehicleLookAtVehicle`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(handle, xOffset, yOffset, zOffset, vehicle, tilt, switchStyle)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`attachToVehicleLookAtVehicle`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(handle, xOffset, yOffset, zOffset, vehicle, tilt, switchStyle)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`附着车上并看人`,children:`附着车上并看人`}),`
`,(0,n.jsxs)(s,{id:`067B`,name:`ATTACH_CAMERA_TO_VEHICLE_LOOK_AT_CHAR`,member:`Camera.AttachToVehicleLookAtChar`,children:[(0,n.jsx)(t.p,{children:`附着在车上并看角色。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`067B ATTACH_CAMERA_TO_VEHICLE_LOOK_AT_CHAR`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: car, xOffset, yOffset, zOffset, char, tilt, switchStyle`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`attachCameraToVehicleLookAtChar`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(car, xOffset, yOffset, zOffset, char, tilt, switchStyle)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`attachToVehicleLookAtChar`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(car, xOffset, yOffset, zOffset, char, tilt, switchStyle)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`附着到人`,children:`附着到人`}),`
`,(0,n.jsxs)(s,{id:`067C`,name:`ATTACH_CAMERA_TO_CHAR`,member:`Camera.AttachToChar`,children:[(0,n.jsx)(t.p,{children:`镜头相对角色偏移附着。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`067C ATTACH_CAMERA_TO_CHAR`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: handle, xOffset, yOffset, zOffset, xRotation, yRotation, zRotation, tilt, switchStyle`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`attachCameraToChar`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(handle, xOffset, yOffset, zOffset, xRotation, yRotation, zRotation, tilt, switchStyle)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`attachToChar`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(handle, xOffset, yOffset, zOffset, xRotation, yRotation, zRotation, tilt, switchStyle)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`附着人上并看车`,children:`附着人上并看车`}),`
`,(0,n.jsxs)(s,{id:`067D`,name:`ATTACH_CAMERA_TO_CHAR_LOOK_AT_VEHICLE`,member:`Camera.AttachToCharLookAtVehicle`,children:[(0,n.jsx)(t.p,{children:`附着在角色上并看车辆。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`067D ATTACH_CAMERA_TO_CHAR_LOOK_AT_VEHICLE`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: char, xOffset, yOffset, zOffset, vehicle, tilt, switchStyle`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`attachCameraToCharLookAtVehicle`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(char, xOffset, yOffset, zOffset, vehicle, tilt, switchStyle)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`attachToCharLookAtVehicle`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(char, xOffset, yOffset, zOffset, vehicle, tilt, switchStyle)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`附着人上并看人`,children:`附着人上并看人`}),`
`,(0,n.jsxs)(s,{id:`067E`,name:`ATTACH_CAMERA_TO_CHAR_LOOK_AT_CHAR`,member:`Camera.AttachToCharLookAtChar`,children:[(0,n.jsx)(t.p,{children:`附着在角色上并看另一角色。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`067E ATTACH_CAMERA_TO_CHAR_LOOK_AT_CHAR`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: handle, xOffset, yOffset, zOffset, char, tilt, switchStyle`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`attachCameraToCharLookAtChar`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(handle, xOffset, yOffset, zOffset, char, tilt, switchStyle)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`attachToCharLookAtChar`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(handle, xOffset, yOffset, zOffset, char, tilt, switchStyle)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`活动镜头坐标`,children:`活动镜头坐标`}),`
`,(0,n.jsxs)(s,{id:`068D`,name:`GET_ACTIVE_CAMERA_COORDINATES`,member:`Camera.GetActiveCoordinates`,children:[(0,n.jsx)(t.p,{children:`当前活动镜头坐标。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`068D GET_ACTIVE_CAMERA_COORDINATES`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`out: x, y, z`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`local`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` x, y, z `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` getActiveCameraCoordinates`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getActiveCoordinates`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`活动注视点`,children:`活动注视点`}),`
`,(0,n.jsxs)(s,{id:`068E`,name:`GET_ACTIVE_CAMERA_POINT_AT`,member:`Camera.GetActivePointAt`,children:[(0,n.jsx)(t.p,{children:`当前镜头注视点。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`068E GET_ACTIVE_CAMERA_POINT_AT`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`out: x, y, z`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`local`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` x, y, z `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` getActiveCameraPointAt`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getActivePointAt`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`双人镜头`,children:`双人镜头`}),`
`,(0,n.jsxs)(s,{id:`06E0`,name:`SET_TWO_PLAYER_CAMERA_MODE`,member:`Camera.SetTwoPlayerMode`,children:[(0,n.jsx)(t.p,{children:`双人合作镜头模式。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`06E0 SET_TWO_PLAYER_CAMERA_MODE`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: state`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`setTwoPlayerCameraMode`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setTwoPlayerMode`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`取-fov`,children:`取 FOV`}),`
`,(0,n.jsxs)(s,{id:`0801`,name:`GET_CAMERA_FOV`,member:`Camera.GetFov`,children:[(0,n.jsx)(t.p,{children:`视场角 FOV。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0801 GET_CAMERA_FOV`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`out: fov`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`local`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` fov `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` getCameraFov`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getFov`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`车内第一人称`,children:`车内第一人称`}),`
`,(0,n.jsxs)(s,{id:`0822`,name:`SET_FIRST_PERSON_IN_CAR_CAMERA_MODE`,member:`Camera.SetFirstPersonInCarMode`,children:[(0,n.jsx)(t.p,{children:`车内第一人称/保险杠视角。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0822 SET_FIRST_PERSON_IN_CAR_CAMERA_MODE`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: state`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`setFirstPersonInCarCameraMode`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setFirstPersonInCarMode`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`镜头撞击`,children:`镜头撞击`}),`
`,(0,n.jsxs)(s,{id:`0834`,name:`DO_CAMERA_BUMP`,member:`Camera.DoBump`,children:[(0,n.jsx)(t.p,{children:`模拟碰撞般的镜头撞击偏移。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0834 DO_CAMERA_BUMP`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: xOffset, yOffset`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`doCameraBump`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(xOffset, yOffset)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`doBump`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(xOffset, yOffset)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`注视点插值`,children:`注视点插值`}),`
`,(0,n.jsxs)(s,{id:`0920`,name:`CAMERA_SET_VECTOR_TRACK`,member:`Camera.SetVectorTrack`,children:[(0,n.jsx)(t.p,{children:`注视点从 A 转到 B（可缓动）。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0920 CAMERA_SET_VECTOR_TRACK`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: fromX, fromY, fromZ, toX, toY, toZ, time, ease`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`cameraSetVectorTrack`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(fromX, fromY, fromZ, toX, toY, toZ, time, ease)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setVectorTrack`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(fromX, fromY, fromZ, toX, toY, toZ, time, ease)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`fov-插值`,children:`FOV 插值`}),`
`,(0,n.jsxs)(s,{id:`0922`,name:`CAMERA_SET_LERP_FOV`,member:`Camera.SetLerpFov`,children:[(0,n.jsx)(t.p,{children:`FOV 在时长内插值。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0922 CAMERA_SET_LERP_FOV`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: from, to, time, ease`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`cameraSetLerpFov`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(from, to, time, ease)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setLerpFov`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(from, to, time, ease)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`压暗画面`,children:`压暗画面`}),`
`,(0,n.jsxs)(s,{id:`0924`,name:`SET_DARKNESS_EFFECT`,member:`Camera.SetDarknessEffect`,children:[(0,n.jsx)(t.p,{children:`压暗画面（可全黑）。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0924 SET_DARKNESS_EFFECT`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: enable, pitchBlack`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`setDarknessEffect`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(enable, pitchBlack)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setDarknessEffect`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(enable, pitchBlack)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`重置脚本镜头`,children:`重置脚本镜头`}),`
`,(0,n.jsxs)(s,{id:`0925`,name:`CAMERA_RESET_NEW_SCRIPTABLES`,member:`Camera.ResetNewScriptables`,children:[(0,n.jsx)(t.p,{children:`停掉脚本镜头的推进/插值/抖/缩放等。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0925 CAMERA_RESET_NEW_SCRIPTABLES`})})})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`cameraResetNewScriptables`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`resetNewScriptables`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`锁定注视点`,children:`锁定注视点`}),`
`,(0,n.jsxs)(s,{id:`092F`,name:`CAMERA_PERSIST_TRACK`,member:`Camera.PersistTrack`,children:[(0,n.jsx)(t.p,{children:`推进结束后锁定注视点。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`092F CAMERA_PERSIST_TRACK`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: state`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`cameraPersistTrack`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`persistTrack`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`锁定机位`,children:`锁定机位`}),`
`,(0,n.jsxs)(s,{id:`0930`,name:`CAMERA_PERSIST_POS`,member:`Camera.PersistPos`,children:[(0,n.jsx)(t.p,{children:`锁定机位。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0930 CAMERA_PERSIST_POS`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: state`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`cameraPersistPos`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`persistPos`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`锁定-fov`,children:`锁定 FOV`}),`
`,(0,n.jsxs)(s,{id:`0931`,name:`CAMERA_PERSIST_FOV`,member:`Camera.PersistFov`,children:[(0,n.jsx)(t.p,{children:`缩放结束后锁定 FOV。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0931 CAMERA_PERSIST_FOV`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: state`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`cameraPersistFov`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`persistFov`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`机位是否在动`,children:`机位是否在动`}),`
`,(0,n.jsxs)(s,{id:`0933`,name:`CAMERA_IS_VECTOR_MOVE_RUNNING`,member:`Camera.IsVectorMoveRunning`,children:[(0,n.jsx)(t.p,{children:`用在 if：机位是否在移动插值中。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0933 CAMERA_IS_VECTOR_MOVE_RUNNING`})})})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`cameraIsVectorMoveRunning`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`isVectorMoveRunning`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`注视是否在转`,children:`注视是否在转`}),`
`,(0,n.jsxs)(s,{id:`0934`,name:`CAMERA_IS_VECTOR_TRACK_RUNNING`,member:`Camera.IsVectorTrackRunning`,children:[(0,n.jsx)(t.p,{children:`用在 if：注视点是否在转动插值中。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0934 CAMERA_IS_VECTOR_TRACK_RUNNING`})})})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`cameraIsVectorTrackRunning`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`isVectorTrackRunning`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`机位插值`,children:`机位插值`}),`
`,(0,n.jsxs)(s,{id:`0936`,name:`CAMERA_SET_VECTOR_MOVE`,member:`Camera.SetVectorMove`,children:[(0,n.jsx)(t.p,{children:`机位从 A 移到 B。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0936 CAMERA_SET_VECTOR_MOVE`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: fromX, fromY, fromZ, toX, toY, toZ, time, ease`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`cameraSetVectorMove`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(fromX, fromY, fromZ, toX, toY, toZ, time, ease)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setVectorMove`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(fromX, fromY, fromZ, toX, toY, toZ, time, ease)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`电影镜头`,children:`电影镜头`}),`
`,(0,n.jsxs)(s,{id:`093D`,name:`SET_CINEMA_CAMERA`,member:`Camera.SetCinema`,children:[(0,n.jsx)(t.p,{children:`锁定车辆电影镜头模式。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`093D SET_CINEMA_CAMERA`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: state`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`setCinemaCamera`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setCinema`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`镜头到角色前`,children:`镜头到角色前`}),`
`,(0,n.jsxs)(s,{id:`0944`,name:`SET_CAMERA_IN_FRONT_OF_CHAR`,member:`Camera.SetInFrontOfChar`,children:[(0,n.jsx)(t.p,{children:`镜头放到指定角色前方。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0944 SET_CAMERA_IN_FRONT_OF_CHAR`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: handle`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`setCameraInFrontOfChar`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(handle)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setInFrontOfChar`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(handle)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`简单抖动`,children:`简单抖动`}),`
`,(0,n.jsxs)(s,{id:`099C`,name:`CAMERA_SET_SHAKE_SIMULATION_SIMPLE`,member:`Camera.SetShakeSimulationSimple`,children:[(0,n.jsx)(t.p,{children:`多种简单抖动模拟。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`099C CAMERA_SET_SHAKE_SIMULATION_SIMPLE`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: type, timeInMs, intensity`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`cameraSetShakeSimulationSimple`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`type`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`, timeInMs, intensity)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setShakeSimulationSimple`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(type, timeInMs, intensity)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`车内视角模式`,children:`车内视角模式`}),`
`,(0,n.jsxs)(s,{id:`09AD`,name:`SET_PLAYER_IN_CAR_CAMERA_MODE`,member:`Camera.SetPlayerInCarMode`,children:[(0,n.jsx)(t.p,{children:`切换当前车内视角（等同改视角键）。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`09AD SET_PLAYER_IN_CAR_CAMERA_MODE`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: mode`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`setPlayerInCarCameraMode`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(mode)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setPlayerInCarMode`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(mode)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`固定镜头碰撞`,children:`固定镜头碰撞`}),`
`,(0,n.jsxs)(s,{id:`09EC`,name:`ALLOW_FIXED_CAMERA_COLLISION`,member:`Camera.AllowFixedCollision`,children:[(0,n.jsx)(t.p,{children:`车库等处是否允许固定镜头碰撞处理。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`09EC ALLOW_FIXED_CAMERA_COLLISION`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: state`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`allowFixedCameraCollision`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`allowFixedCollision`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`车型镜头微调`,children:`车型镜头微调`}),`
`,(0,n.jsxs)(s,{id:`09EF`,name:`SET_VEHICLE_CAMERA_TWEAK`,member:`Camera.SetVehicleTweak`,children:[(0,n.jsx)(t.p,{children:`指定车型默认镜头距离/高度/角。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`09EF SET_VEHICLE_CAMERA_TWEAK`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: modelId, distance, altitude, angle`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`setVehicleCameraTweak`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(modelId, distance, altitude, angle)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setVehicleTweak`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(modelId, distance, altitude, angle)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`清车型镜头微调`,children:`清车型镜头微调`}),`
`,(0,n.jsxs)(s,{id:`09F0`,name:`RESET_VEHICLE_CAMERA_TWEAK`,member:`Camera.ResetVehicleTweak`,children:[(0,n.jsxs)(t.p,{children:[`清除 `,(0,n.jsx)(t.code,{children:`09EF`}),` 的车型镜头微调。`]}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`09F0 RESET_VEHICLE_CAMERA_TWEAK`})})})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`resetVehicleCameraTweak`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`resetVehicleTweak`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`截图`,children:`截图`}),`
`,(0,n.jsxs)(s,{id:`0A1E`,name:`TAKE_PHOTO`,member:`Camera.TakePhoto`,children:[(0,n.jsx)(t.p,{children:`无 HUD 截图到 User Files/Gallery。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0A1E TAKE_PHOTO`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: _p1`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`takePhoto`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(_p1)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`takePhoto`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(_p1)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`非固定偏移`,children:`非固定偏移`}),`
`,(0,n.jsxs)(s,{id:`0A25`,name:`SET_CAMERA_POSITION_UNFIXED`,member:`Camera.SetPositionUnfixed`,children:[(0,n.jsx)(t.p,{children:`相对目标实体的镜头偏移（非固定机位）。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0A25 SET_CAMERA_POSITION_UNFIXED`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: xOffset, yOffset`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`setCameraPositionUnfixed`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(xOffset, yOffset)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setPositionUnfixed`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(xOffset, yOffset)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`相机射击视角`,children:`相机射击视角`}),`
`,(0,n.jsxs)(s,{id:`0A2F`,name:`SET_PHOTO_CAMERA_EFFECT`,member:`Camera.SetPhotoEffect`,children:[(0,n.jsx)(t.p,{children:`持狙击/相机等时强制第一人称射击视角。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0A2F SET_PHOTO_CAMERA_EFFECT`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`in: state`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:`setPhotoCameraEffect`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`setPhotoEffect`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`(state)`})]})})})})})]})]}),`
`,(0,n.jsx)(t.h2,{id:`取车内视角`,children:`取车内视角`}),`
`,(0,n.jsxs)(s,{id:`0A39`,name:`GET_PLAYER_IN_CAR_CAMERA_MODE`,member:`Camera.GetPlayerInCarMode`,children:[(0,n.jsx)(t.p,{children:`当前车辆玩家所选镜头模式。`}),(0,n.jsxs)(i,{defaultValue:`OP`,children:[(0,n.jsxs)(a,{children:[(0,n.jsx)(o,{value:`OP`,children:`OP`}),(0,n.jsx)(o,{value:`Lua`,children:`Lua`}),(0,n.jsx)(o,{value:`Redux`,children:`Redux`})]}),(0,n.jsx)(r,{value:`OP`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsxs)(t.code,{children:[(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`0A39 GET_PLAYER_IN_CAR_CAMERA_MODE`})}),`
`,(0,n.jsx)(t.span,{className:`line`,children:(0,n.jsx)(t.span,{children:`out: mode`})})]})})})}),(0,n.jsx)(r,{value:`Lua`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`local`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:` mode `}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#D73A49`,"--shiki-dark":`#F97583`},children:`=`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#005CC5`,"--shiki-dark":`#79B8FF`},children:` getPlayerInCarCameraMode`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})}),(0,n.jsx)(r,{value:`Redux`,children:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(t.pre,{className:`shiki shiki-themes github-light github-dark`,style:{"--shiki-light":`#24292e`,"--shiki-dark":`#e1e4e8`,"--shiki-light-bg":`#fff`,"--shiki-dark-bg":`#24292e`},tabIndex:`0`,icon:`<svg viewBox="0 0 24 24"><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="currentColor" /></svg>`,children:(0,n.jsx)(t.code,{children:(0,n.jsxs)(t.span,{className:`line`,children:[(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`Camera.`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#6F42C1`,"--shiki-dark":`#B392F0`},children:`getPlayerInCarMode`}),(0,n.jsx)(t.span,{style:{"--shiki-light":`#24292E`,"--shiki-dark":`#E1E4E8`},children:`()`})]})})})})})]})]})]})}function c(e={}){let{wrapper:t}=e.components||{};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}function l(e,t){throw Error(`Expected `+(t?`component`:`object`)+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}export{i as _markdown,c as default,r as frontmatter,a as structuredData,o as toc};