import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region content/docs/cleo/sa/default/audio.mdx?collection=docs
var frontmatter = {
	"title": "音频 Audio",
	"description": "任务语音 / 电台 / 节拍轨"
};
var _markdown = "\n\n`sa` · 扩展 `default` · SCM 原生命令\n\n共 24 条。写法见 [Lua](/docs/cleo/syntax) / [Redux](/docs/cleo/syntax-redux)。\n\n## 通关曲 [#通关曲]\n\n<Opcode id=\"0394\" name=\"PLAY_MISSION_PASSED_TUNE\" member=\"Audio.PlayMissionPassedTune\">\n  播放 Audio 目录下指定 ID 通关曲。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      0394 PLAY_MISSION_PASSED_TUNE\n      in: soundId\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      playMissionPassedTune(soundId)\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      Audio.playMissionPassedTune(soundId)\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n\n## 加载任务语音 [#加载任务语音]\n\n<Opcode id=\"03CF\" name=\"LOAD_MISSION_AUDIO\" member=\"Audio.LoadMissionAudio\">\n  加载任务语音槽。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      03CF LOAD_MISSION_AUDIO\n      in: slotId, audioId\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      loadMissionAudio(slotId, audioId)\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      Audio.loadMissionAudio(slotId, audioId)\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n\n## 语音是否加载完 [#语音是否加载完]\n\n<Opcode id=\"03D0\" name=\"HAS_MISSION_AUDIO_LOADED\" member=\"Audio.HasMissionAudioLoaded\">\n  `03CF` 是否加载完。用在 `if` 里。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      03D0 HAS_MISSION_AUDIO_LOADED\n      in: slotId\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      if hasMissionAudioLoaded(slotId) then\n      end\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      if (Audio.hasMissionAudioLoaded(slotId)) {\n      }\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n\n## 播放任务语音 [#播放任务语音]\n\n<Opcode id=\"03D1\" name=\"PLAY_MISSION_AUDIO\" member=\"Audio.PlayMissionAudio\">\n  播放已加载任务语音。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      03D1 PLAY_MISSION_AUDIO\n      in: slotId\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      playMissionAudio(slotId)\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      Audio.playMissionAudio(slotId)\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n\n## 语音是否播完 [#语音是否播完]\n\n<Opcode id=\"03D2\" name=\"HAS_MISSION_AUDIO_FINISHED\" member=\"Audio.HasMissionAudioFinished\">\n  该槽语音是否播完。用在 `if` 里。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      03D2 HAS_MISSION_AUDIO_FINISHED\n      in: slotId\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      if hasMissionAudioFinished(slotId) then\n      end\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      if (Audio.hasMissionAudioFinished(slotId)) {\n      }\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n\n## 语音位置 [#语音位置]\n\n<Opcode id=\"03D7\" name=\"SET_MISSION_AUDIO_POSITION\" member=\"Audio.SetMissionAudioPosition\">\n  设任务语音听感位置。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      03D7 SET_MISSION_AUDIO_POSITION\n      in: slotId, x, y, z\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      setMissionAudioPosition(slotId, x, y, z)\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      Audio.setMissionAudioPosition(slotId, x, y, z)\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n\n## 清语音槽 [#清语音槽]\n\n<Opcode id=\"040D\" name=\"CLEAR_MISSION_AUDIO\" member=\"Audio.ClearMissionAudio\">\n  卸载槽语音，腾内存。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      040D CLEAR_MISSION_AUDIO\n      in: slotId\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      clearMissionAudio(slotId)\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      Audio.clearMissionAudio(slotId)\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n\n## 设电台 [#设电台]\n\n<Opcode id=\"041E\" name=\"SET_RADIO_CHANNEL\" member=\"Audio.SetRadioChannel\">\n  在车内时设电台。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      041E SET_RADIO_CHANNEL\n      in: channel\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      setRadioChannel(channel)\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      Audio.setRadioChannel(channel)\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n\n## 音乐淡入淡出 [#音乐淡入淡出]\n\n<Opcode id=\"043C\" name=\"SET_MUSIC_DOES_FADE\" member=\"Audio.SetMusicDoesFade\">\n  音乐是否随画面淡入淡出。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      043C SET_MUSIC_DOES_FADE\n      in: state\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      setMusicDoesFade(state)\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      Audio.setMusicDoesFade(state)\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n\n## 取电台 [#取电台]\n\n<Opcode id=\"051E\" name=\"GET_RADIO_CHANNEL\" member=\"Audio.GetRadioChannel\">\n  当前电台。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      051E GET_RADIO_CHANNEL\n      out: channel\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      local channel = getRadioChannel()\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      const channel = Audio.getRadioChannel()\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n\n## 节拍邻近 [#节拍邻近]\n\n<Opcode id=\"07B1\" name=\"GET_BEAT_PROXIMITY\" member=\"Audio.GetBeatProximity\">\n  相对当前节拍轨（`0954`）的拍点信息。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      07B1 GET_BEAT_PROXIMITY\n      in: offset\n      out: beatTime, beatType, beatIndex\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      local beatTime, beatType, beatIndex = getBeatProximity(offset)\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      const { beatTime, beatType, beatIndex } = Audio.getBeatProximity(offset)\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n\n## 语音绑角色 [#语音绑角色]\n\n<Opcode id=\"0949\" name=\"ATTACH_MISSION_AUDIO_TO_CHAR\" member=\"Audio.AttachMissionAudioToChar\">\n  任务语音绑在角色位置。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      0949 ATTACH_MISSION_AUDIO_TO_CHAR\n      in: slotId, handle\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      attachMissionAudioToChar(slotId, handle)\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      Audio.attachMissionAudioToChar(slotId, handle)\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n\n## 预载节拍轨 [#预载节拍轨]\n\n<Opcode id=\"0952\" name=\"PRELOAD_BEAT_TRACK\" member=\"Audio.PreloadBeatTrack\">\n  预载 streams/BEATS 里的曲目。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      0952 PRELOAD_BEAT_TRACK\n      in: trackId\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      preloadBeatTrack(trackId)\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      Audio.preloadBeatTrack(trackId)\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n\n## 节拍轨状态 [#节拍轨状态]\n\n<Opcode id=\"0953\" name=\"GET_BEAT_TRACK_STATUS\" member=\"Audio.GetBeatTrackStatus\">\n  当前节拍轨状态。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      0953 GET_BEAT_TRACK_STATUS\n      out: status\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      local status = getBeatTrackStatus()\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      const status = Audio.getBeatTrackStatus()\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n\n## 播放节拍轨 [#播放节拍轨]\n\n<Opcode id=\"0954\" name=\"PLAY_BEAT_TRACK\" member=\"Audio.PlayBeatTrack\">\n  播放 `0952` 预载的曲。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      0954 PLAY_BEAT_TRACK\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      playBeatTrack()\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      Audio.playBeatTrack()\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n\n## 停节拍轨 [#停节拍轨]\n\n<Opcode id=\"0955\" name=\"STOP_BEAT_TRACK\" member=\"Audio.StopBeatTrack\">\n  停当前节拍轨。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      0955 STOP_BEAT_TRACK\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      stopBeatTrack()\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      Audio.stopBeatTrack()\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n\n## 坐标音频事件 [#坐标音频事件]\n\n<Opcode id=\"097A\" name=\"REPORT_MISSION_AUDIO_EVENT_AT_POSITION\" member=\"Audio.ReportMissionAudioEventAtPosition\">\n  在坐标触发任务音频事件。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      097A REPORT_MISSION_AUDIO_EVENT_AT_POSITION\n      in: x, y, z, soundId\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      reportMissionAudioEventAtPosition(x, y, z, soundId)\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      Audio.reportMissionAudioEventAtPosition(x, y, z, soundId)\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n\n## 物体音频事件 [#物体音频事件]\n\n<Opcode id=\"097B\" name=\"REPORT_MISSION_AUDIO_EVENT_AT_OBJECT\" member=\"Audio.ReportMissionAudioEventAtObject\">\n  在物体处触发任务音频事件。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      097B REPORT_MISSION_AUDIO_EVENT_AT_OBJECT\n      in: handle, soundId\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      reportMissionAudioEventAtObject(handle, soundId)\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      Audio.reportMissionAudioEventAtObject(handle, soundId)\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n\n## 语音绑物体 [#语音绑物体]\n\n<Opcode id=\"097C\" name=\"ATTACH_MISSION_AUDIO_TO_OBJECT\" member=\"Audio.AttachMissionAudioToObject\">\n  任务语音绑在物体上。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      097C ATTACH_MISSION_AUDIO_TO_OBJECT\n      in: slotId, handle\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      attachMissionAudioToObject(slotId, handle)\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      Audio.attachMissionAudioToObject(slotId, handle)\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n\n## 暂停节拍轨 [#暂停节拍轨]\n\n<Opcode id=\"0991\" name=\"PAUSE_CURRENT_BEAT_TRACK\" member=\"Audio.PauseCurrentBeatTrack\">\n  暂停 / 恢复节拍轨。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      0991 PAUSE_CURRENT_BEAT_TRACK\n      in: state\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      pauseCurrentBeatTrack(state)\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      Audio.pauseCurrentBeatTrack(state)\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n\n## 角色音频事件 [#角色音频事件]\n\n<Opcode id=\"09F1\" name=\"REPORT_MISSION_AUDIO_EVENT_AT_CHAR\" member=\"Audio.ReportMissionAudioEventAtChar\">\n  在角色处触发任务音频事件。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      09F1 REPORT_MISSION_AUDIO_EVENT_AT_CHAR\n      in: handle, soundId\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      reportMissionAudioEventAtChar(handle, soundId)\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      Audio.reportMissionAudioEventAtChar(handle, soundId)\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n\n## 车音频事件 [#车音频事件]\n\n<Opcode id=\"09F7\" name=\"REPORT_MISSION_AUDIO_EVENT_AT_CAR\" member=\"Audio.ReportMissionAudioEventAtCar\">\n  在车处触发任务音频事件。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      09F7 REPORT_MISSION_AUDIO_EVENT_AT_CAR\n      in: handle, soundId\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      reportMissionAudioEventAtCar(handle, soundId)\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      Audio.reportMissionAudioEventAtCar(handle, soundId)\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n\n## 语音绑车 [#语音绑车]\n\n<Opcode id=\"0A16\" name=\"ATTACH_MISSION_AUDIO_TO_CAR\" member=\"Audio.AttachMissionAudioToCar\">\n  任务语音绑在车上。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      0A16 ATTACH_MISSION_AUDIO_TO_CAR\n      in: slotId, handle\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      attachMissionAudioToCar(slotId, handle)\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      Audio.attachMissionAudioToCar(slotId, handle)\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n\n## 最爱电台 [#最爱电台]\n\n<Opcode id=\"0A26\" name=\"SET_RADIO_TO_PLAYERS_FAVOURITE_STATION\" member=\"Audio.SetRadioToPlayersFavouriteStation\">\n  当前车电台切到玩家最爱台（统计 326）。\n\n  <CodeBlockTabs defaultValue=\"OP\">\n    <CodeBlockTabsList>\n      <CodeBlockTabsTrigger value=\"OP\">\n        OP\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Lua\">\n        Lua\n      </CodeBlockTabsTrigger>\n\n      <CodeBlockTabsTrigger value=\"Redux\">\n        Redux\n      </CodeBlockTabsTrigger>\n    </CodeBlockTabsList>\n\n    <CodeBlockTab value=\"OP\">\n      ```text\n      0A26 SET_RADIO_TO_PLAYERS_FAVOURITE_STATION\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Lua\">\n      ```lua\n      setRadioToPlayersFavouriteStation()\n      ```\n    </CodeBlockTab>\n\n    <CodeBlockTab value=\"Redux\">\n      ```js\n      Audio.setRadioToPlayersFavouriteStation()\n      ```\n    </CodeBlockTab>\n  </CodeBlockTabs>\n</Opcode>\n";
var structuredData = {
	"contents": [
		{
			"heading": void 0,
			"content": "`sa` · 扩展 `default` · SCM 原生命令"
		},
		{
			"heading": void 0,
			"content": "共 24 条。写法见 Lua / Redux。"
		},
		{
			"heading": "通关曲",
			"content": "播放 Audio 目录下指定 ID 通关曲。"
		},
		{
			"heading": "加载任务语音",
			"content": "加载任务语音槽。"
		},
		{
			"heading": "语音是否加载完",
			"content": "`03CF` 是否加载完。用在 `if` 里。"
		},
		{
			"heading": "播放任务语音",
			"content": "播放已加载任务语音。"
		},
		{
			"heading": "语音是否播完",
			"content": "该槽语音是否播完。用在 `if` 里。"
		},
		{
			"heading": "语音位置",
			"content": "设任务语音听感位置。"
		},
		{
			"heading": "清语音槽",
			"content": "卸载槽语音，腾内存。"
		},
		{
			"heading": "设电台",
			"content": "在车内时设电台。"
		},
		{
			"heading": "音乐淡入淡出",
			"content": "音乐是否随画面淡入淡出。"
		},
		{
			"heading": "取电台",
			"content": "当前电台。"
		},
		{
			"heading": "节拍邻近",
			"content": "相对当前节拍轨（`0954`）的拍点信息。"
		},
		{
			"heading": "语音绑角色",
			"content": "任务语音绑在角色位置。"
		},
		{
			"heading": "预载节拍轨",
			"content": "预载 streams/BEATS 里的曲目。"
		},
		{
			"heading": "节拍轨状态",
			"content": "当前节拍轨状态。"
		},
		{
			"heading": "播放节拍轨",
			"content": "播放 `0952` 预载的曲。"
		},
		{
			"heading": "停节拍轨",
			"content": "停当前节拍轨。"
		},
		{
			"heading": "坐标音频事件",
			"content": "在坐标触发任务音频事件。"
		},
		{
			"heading": "物体音频事件",
			"content": "在物体处触发任务音频事件。"
		},
		{
			"heading": "语音绑物体",
			"content": "任务语音绑在物体上。"
		},
		{
			"heading": "暂停节拍轨",
			"content": "暂停 / 恢复节拍轨。"
		},
		{
			"heading": "角色音频事件",
			"content": "在角色处触发任务音频事件。"
		},
		{
			"heading": "车音频事件",
			"content": "在车处触发任务音频事件。"
		},
		{
			"heading": "语音绑车",
			"content": "任务语音绑在车上。"
		},
		{
			"heading": "最爱电台",
			"content": "当前车电台切到玩家最爱台（统计 326）。"
		}
	],
	"headings": [
		{
			"id": "通关曲",
			"content": "通关曲"
		},
		{
			"id": "加载任务语音",
			"content": "加载任务语音"
		},
		{
			"id": "语音是否加载完",
			"content": "语音是否加载完"
		},
		{
			"id": "播放任务语音",
			"content": "播放任务语音"
		},
		{
			"id": "语音是否播完",
			"content": "语音是否播完"
		},
		{
			"id": "语音位置",
			"content": "语音位置"
		},
		{
			"id": "清语音槽",
			"content": "清语音槽"
		},
		{
			"id": "设电台",
			"content": "设电台"
		},
		{
			"id": "音乐淡入淡出",
			"content": "音乐淡入淡出"
		},
		{
			"id": "取电台",
			"content": "取电台"
		},
		{
			"id": "节拍邻近",
			"content": "节拍邻近"
		},
		{
			"id": "语音绑角色",
			"content": "语音绑角色"
		},
		{
			"id": "预载节拍轨",
			"content": "预载节拍轨"
		},
		{
			"id": "节拍轨状态",
			"content": "节拍轨状态"
		},
		{
			"id": "播放节拍轨",
			"content": "播放节拍轨"
		},
		{
			"id": "停节拍轨",
			"content": "停节拍轨"
		},
		{
			"id": "坐标音频事件",
			"content": "坐标音频事件"
		},
		{
			"id": "物体音频事件",
			"content": "物体音频事件"
		},
		{
			"id": "语音绑物体",
			"content": "语音绑物体"
		},
		{
			"id": "暂停节拍轨",
			"content": "暂停节拍轨"
		},
		{
			"id": "角色音频事件",
			"content": "角色音频事件"
		},
		{
			"id": "车音频事件",
			"content": "车音频事件"
		},
		{
			"id": "语音绑车",
			"content": "语音绑车"
		},
		{
			"id": "最爱电台",
			"content": "最爱电台"
		}
	]
};
var toc = [
	{
		depth: 2,
		url: "#通关曲",
		title: jsx(Fragment, { children: "通关曲" })
	},
	{
		depth: 2,
		url: "#加载任务语音",
		title: jsx(Fragment, { children: "加载任务语音" })
	},
	{
		depth: 2,
		url: "#语音是否加载完",
		title: jsx(Fragment, { children: "语音是否加载完" })
	},
	{
		depth: 2,
		url: "#播放任务语音",
		title: jsx(Fragment, { children: "播放任务语音" })
	},
	{
		depth: 2,
		url: "#语音是否播完",
		title: jsx(Fragment, { children: "语音是否播完" })
	},
	{
		depth: 2,
		url: "#语音位置",
		title: jsx(Fragment, { children: "语音位置" })
	},
	{
		depth: 2,
		url: "#清语音槽",
		title: jsx(Fragment, { children: "清语音槽" })
	},
	{
		depth: 2,
		url: "#设电台",
		title: jsx(Fragment, { children: "设电台" })
	},
	{
		depth: 2,
		url: "#音乐淡入淡出",
		title: jsx(Fragment, { children: "音乐淡入淡出" })
	},
	{
		depth: 2,
		url: "#取电台",
		title: jsx(Fragment, { children: "取电台" })
	},
	{
		depth: 2,
		url: "#节拍邻近",
		title: jsx(Fragment, { children: "节拍邻近" })
	},
	{
		depth: 2,
		url: "#语音绑角色",
		title: jsx(Fragment, { children: "语音绑角色" })
	},
	{
		depth: 2,
		url: "#预载节拍轨",
		title: jsx(Fragment, { children: "预载节拍轨" })
	},
	{
		depth: 2,
		url: "#节拍轨状态",
		title: jsx(Fragment, { children: "节拍轨状态" })
	},
	{
		depth: 2,
		url: "#播放节拍轨",
		title: jsx(Fragment, { children: "播放节拍轨" })
	},
	{
		depth: 2,
		url: "#停节拍轨",
		title: jsx(Fragment, { children: "停节拍轨" })
	},
	{
		depth: 2,
		url: "#坐标音频事件",
		title: jsx(Fragment, { children: "坐标音频事件" })
	},
	{
		depth: 2,
		url: "#物体音频事件",
		title: jsx(Fragment, { children: "物体音频事件" })
	},
	{
		depth: 2,
		url: "#语音绑物体",
		title: jsx(Fragment, { children: "语音绑物体" })
	},
	{
		depth: 2,
		url: "#暂停节拍轨",
		title: jsx(Fragment, { children: "暂停节拍轨" })
	},
	{
		depth: 2,
		url: "#角色音频事件",
		title: jsx(Fragment, { children: "角色音频事件" })
	},
	{
		depth: 2,
		url: "#车音频事件",
		title: jsx(Fragment, { children: "车音频事件" })
	},
	{
		depth: 2,
		url: "#语音绑车",
		title: jsx(Fragment, { children: "语音绑车" })
	},
	{
		depth: 2,
		url: "#最爱电台",
		title: jsx(Fragment, { children: "最爱电台" })
	}
];
function _createMdxContent(props) {
	const _components = {
		a: "a",
		code: "code",
		h2: "h2",
		p: "p",
		pre: "pre",
		span: "span",
		...props.components
	}, { CodeBlockTab, CodeBlockTabs, CodeBlockTabsList, CodeBlockTabsTrigger, Opcode } = _components;
	if (!CodeBlockTab) _missingMdxReference("CodeBlockTab", true);
	if (!CodeBlockTabs) _missingMdxReference("CodeBlockTabs", true);
	if (!CodeBlockTabsList) _missingMdxReference("CodeBlockTabsList", true);
	if (!CodeBlockTabsTrigger) _missingMdxReference("CodeBlockTabsTrigger", true);
	if (!Opcode) _missingMdxReference("Opcode", true);
	return jsxs(Fragment, { children: [
		jsxs(_components.p, { children: [
			jsx(_components.code, { children: "sa" }),
			" · 扩展 ",
			jsx(_components.code, { children: "default" }),
			" · SCM 原生命令"
		] }),
		"\n",
		jsxs(_components.p, { children: [
			"共 24 条。写法见 ",
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
		jsx(_components.h2, {
			id: "通关曲",
			children: "通关曲"
		}),
		"\n",
		jsxs(Opcode, {
			id: "0394",
			name: "PLAY_MISSION_PASSED_TUNE",
			member: "Audio.PlayMissionPassedTune",
			children: [jsx(_components.p, { children: "播放 Audio 目录下指定 ID 通关曲。" }), jsxs(CodeBlockTabs, {
				defaultValue: "OP",
				children: [
					jsxs(CodeBlockTabsList, { children: [
						jsx(CodeBlockTabsTrigger, {
							value: "OP",
							children: "OP"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Lua",
							children: "Lua"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Redux",
							children: "Redux"
						})
					] }),
					jsx(CodeBlockTab, {
						value: "OP",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsxs(_components.code, { children: [
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "0394 PLAY_MISSION_PASSED_TUNE" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "in: soundId" })
								})
							] })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Lua",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [jsx(_components.span, {
									style: {
										"--shiki-light": "#005CC5",
										"--shiki-dark": "#79B8FF"
									},
									children: "playMissionPassedTune"
								}), jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "(soundId)"
								})]
							}) })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Redux",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "Audio."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "playMissionPassedTune"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(soundId)"
									})
								]
							}) })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsx(_components.h2, {
			id: "加载任务语音",
			children: "加载任务语音"
		}),
		"\n",
		jsxs(Opcode, {
			id: "03CF",
			name: "LOAD_MISSION_AUDIO",
			member: "Audio.LoadMissionAudio",
			children: [jsx(_components.p, { children: "加载任务语音槽。" }), jsxs(CodeBlockTabs, {
				defaultValue: "OP",
				children: [
					jsxs(CodeBlockTabsList, { children: [
						jsx(CodeBlockTabsTrigger, {
							value: "OP",
							children: "OP"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Lua",
							children: "Lua"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Redux",
							children: "Redux"
						})
					] }),
					jsx(CodeBlockTab, {
						value: "OP",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsxs(_components.code, { children: [
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "03CF LOAD_MISSION_AUDIO" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "in: slotId, audioId" })
								})
							] })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Lua",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [jsx(_components.span, {
									style: {
										"--shiki-light": "#005CC5",
										"--shiki-dark": "#79B8FF"
									},
									children: "loadMissionAudio"
								}), jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "(slotId, audioId)"
								})]
							}) })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Redux",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "Audio."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "loadMissionAudio"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(slotId, audioId)"
									})
								]
							}) })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsx(_components.h2, {
			id: "语音是否加载完",
			children: "语音是否加载完"
		}),
		"\n",
		jsxs(Opcode, {
			id: "03D0",
			name: "HAS_MISSION_AUDIO_LOADED",
			member: "Audio.HasMissionAudioLoaded",
			children: [jsxs(_components.p, { children: [
				jsx(_components.code, { children: "03CF" }),
				" 是否加载完。用在 ",
				jsx(_components.code, { children: "if" }),
				" 里。"
			] }), jsxs(CodeBlockTabs, {
				defaultValue: "OP",
				children: [
					jsxs(CodeBlockTabsList, { children: [
						jsx(CodeBlockTabsTrigger, {
							value: "OP",
							children: "OP"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Lua",
							children: "Lua"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Redux",
							children: "Redux"
						})
					] }),
					jsx(CodeBlockTab, {
						value: "OP",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsxs(_components.code, { children: [
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "03D0 HAS_MISSION_AUDIO_LOADED" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "in: slotId" })
								})
							] })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Lua",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsxs(_components.code, { children: [
								jsxs(_components.span, {
									className: "line",
									children: [
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: "if"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#005CC5",
												"--shiki-dark": "#79B8FF"
											},
											children: " hasMissionAudioLoaded"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: "(slotId) "
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: "then"
										})
									]
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "end"
									})
								})
							] })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Redux",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
							children: jsxs(_components.code, { children: [
								jsxs(_components.span, {
									className: "line",
									children: [
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: "if"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: " (Audio."
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: "hasMissionAudioLoaded"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: "(slotId)) {"
										})
									]
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "}"
									})
								})
							] })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsx(_components.h2, {
			id: "播放任务语音",
			children: "播放任务语音"
		}),
		"\n",
		jsxs(Opcode, {
			id: "03D1",
			name: "PLAY_MISSION_AUDIO",
			member: "Audio.PlayMissionAudio",
			children: [jsx(_components.p, { children: "播放已加载任务语音。" }), jsxs(CodeBlockTabs, {
				defaultValue: "OP",
				children: [
					jsxs(CodeBlockTabsList, { children: [
						jsx(CodeBlockTabsTrigger, {
							value: "OP",
							children: "OP"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Lua",
							children: "Lua"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Redux",
							children: "Redux"
						})
					] }),
					jsx(CodeBlockTab, {
						value: "OP",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsxs(_components.code, { children: [
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "03D1 PLAY_MISSION_AUDIO" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "in: slotId" })
								})
							] })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Lua",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [jsx(_components.span, {
									style: {
										"--shiki-light": "#005CC5",
										"--shiki-dark": "#79B8FF"
									},
									children: "playMissionAudio"
								}), jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "(slotId)"
								})]
							}) })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Redux",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "Audio."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "playMissionAudio"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(slotId)"
									})
								]
							}) })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsx(_components.h2, {
			id: "语音是否播完",
			children: "语音是否播完"
		}),
		"\n",
		jsxs(Opcode, {
			id: "03D2",
			name: "HAS_MISSION_AUDIO_FINISHED",
			member: "Audio.HasMissionAudioFinished",
			children: [jsxs(_components.p, { children: [
				"该槽语音是否播完。用在 ",
				jsx(_components.code, { children: "if" }),
				" 里。"
			] }), jsxs(CodeBlockTabs, {
				defaultValue: "OP",
				children: [
					jsxs(CodeBlockTabsList, { children: [
						jsx(CodeBlockTabsTrigger, {
							value: "OP",
							children: "OP"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Lua",
							children: "Lua"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Redux",
							children: "Redux"
						})
					] }),
					jsx(CodeBlockTab, {
						value: "OP",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsxs(_components.code, { children: [
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "03D2 HAS_MISSION_AUDIO_FINISHED" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "in: slotId" })
								})
							] })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Lua",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsxs(_components.code, { children: [
								jsxs(_components.span, {
									className: "line",
									children: [
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: "if"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#005CC5",
												"--shiki-dark": "#79B8FF"
											},
											children: " hasMissionAudioFinished"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: "(slotId) "
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: "then"
										})
									]
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "end"
									})
								})
							] })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Redux",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
							children: jsxs(_components.code, { children: [
								jsxs(_components.span, {
									className: "line",
									children: [
										jsx(_components.span, {
											style: {
												"--shiki-light": "#D73A49",
												"--shiki-dark": "#F97583"
											},
											children: "if"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: " (Audio."
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#6F42C1",
												"--shiki-dark": "#B392F0"
											},
											children: "hasMissionAudioFinished"
										}),
										jsx(_components.span, {
											style: {
												"--shiki-light": "#24292E",
												"--shiki-dark": "#E1E4E8"
											},
											children: "(slotId)) {"
										})
									]
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "}"
									})
								})
							] })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsx(_components.h2, {
			id: "语音位置",
			children: "语音位置"
		}),
		"\n",
		jsxs(Opcode, {
			id: "03D7",
			name: "SET_MISSION_AUDIO_POSITION",
			member: "Audio.SetMissionAudioPosition",
			children: [jsx(_components.p, { children: "设任务语音听感位置。" }), jsxs(CodeBlockTabs, {
				defaultValue: "OP",
				children: [
					jsxs(CodeBlockTabsList, { children: [
						jsx(CodeBlockTabsTrigger, {
							value: "OP",
							children: "OP"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Lua",
							children: "Lua"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Redux",
							children: "Redux"
						})
					] }),
					jsx(CodeBlockTab, {
						value: "OP",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsxs(_components.code, { children: [
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "03D7 SET_MISSION_AUDIO_POSITION" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "in: slotId, x, y, z" })
								})
							] })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Lua",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [jsx(_components.span, {
									style: {
										"--shiki-light": "#005CC5",
										"--shiki-dark": "#79B8FF"
									},
									children: "setMissionAudioPosition"
								}), jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "(slotId, x, y, z)"
								})]
							}) })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Redux",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "Audio."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "setMissionAudioPosition"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(slotId, x, y, z)"
									})
								]
							}) })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsx(_components.h2, {
			id: "清语音槽",
			children: "清语音槽"
		}),
		"\n",
		jsxs(Opcode, {
			id: "040D",
			name: "CLEAR_MISSION_AUDIO",
			member: "Audio.ClearMissionAudio",
			children: [jsx(_components.p, { children: "卸载槽语音，腾内存。" }), jsxs(CodeBlockTabs, {
				defaultValue: "OP",
				children: [
					jsxs(CodeBlockTabsList, { children: [
						jsx(CodeBlockTabsTrigger, {
							value: "OP",
							children: "OP"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Lua",
							children: "Lua"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Redux",
							children: "Redux"
						})
					] }),
					jsx(CodeBlockTab, {
						value: "OP",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsxs(_components.code, { children: [
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "040D CLEAR_MISSION_AUDIO" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "in: slotId" })
								})
							] })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Lua",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [jsx(_components.span, {
									style: {
										"--shiki-light": "#005CC5",
										"--shiki-dark": "#79B8FF"
									},
									children: "clearMissionAudio"
								}), jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "(slotId)"
								})]
							}) })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Redux",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "Audio."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "clearMissionAudio"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(slotId)"
									})
								]
							}) })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsx(_components.h2, {
			id: "设电台",
			children: "设电台"
		}),
		"\n",
		jsxs(Opcode, {
			id: "041E",
			name: "SET_RADIO_CHANNEL",
			member: "Audio.SetRadioChannel",
			children: [jsx(_components.p, { children: "在车内时设电台。" }), jsxs(CodeBlockTabs, {
				defaultValue: "OP",
				children: [
					jsxs(CodeBlockTabsList, { children: [
						jsx(CodeBlockTabsTrigger, {
							value: "OP",
							children: "OP"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Lua",
							children: "Lua"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Redux",
							children: "Redux"
						})
					] }),
					jsx(CodeBlockTab, {
						value: "OP",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsxs(_components.code, { children: [
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "041E SET_RADIO_CHANNEL" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "in: channel" })
								})
							] })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Lua",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [jsx(_components.span, {
									style: {
										"--shiki-light": "#005CC5",
										"--shiki-dark": "#79B8FF"
									},
									children: "setRadioChannel"
								}), jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "(channel)"
								})]
							}) })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Redux",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "Audio."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "setRadioChannel"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(channel)"
									})
								]
							}) })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsx(_components.h2, {
			id: "音乐淡入淡出",
			children: "音乐淡入淡出"
		}),
		"\n",
		jsxs(Opcode, {
			id: "043C",
			name: "SET_MUSIC_DOES_FADE",
			member: "Audio.SetMusicDoesFade",
			children: [jsx(_components.p, { children: "音乐是否随画面淡入淡出。" }), jsxs(CodeBlockTabs, {
				defaultValue: "OP",
				children: [
					jsxs(CodeBlockTabsList, { children: [
						jsx(CodeBlockTabsTrigger, {
							value: "OP",
							children: "OP"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Lua",
							children: "Lua"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Redux",
							children: "Redux"
						})
					] }),
					jsx(CodeBlockTab, {
						value: "OP",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsxs(_components.code, { children: [
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "043C SET_MUSIC_DOES_FADE" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "in: state" })
								})
							] })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Lua",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [jsx(_components.span, {
									style: {
										"--shiki-light": "#005CC5",
										"--shiki-dark": "#79B8FF"
									},
									children: "setMusicDoesFade"
								}), jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "(state)"
								})]
							}) })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Redux",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "Audio."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "setMusicDoesFade"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(state)"
									})
								]
							}) })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsx(_components.h2, {
			id: "取电台",
			children: "取电台"
		}),
		"\n",
		jsxs(Opcode, {
			id: "051E",
			name: "GET_RADIO_CHANNEL",
			member: "Audio.GetRadioChannel",
			children: [jsx(_components.p, { children: "当前电台。" }), jsxs(CodeBlockTabs, {
				defaultValue: "OP",
				children: [
					jsxs(CodeBlockTabsList, { children: [
						jsx(CodeBlockTabsTrigger, {
							value: "OP",
							children: "OP"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Lua",
							children: "Lua"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Redux",
							children: "Redux"
						})
					] }),
					jsx(CodeBlockTab, {
						value: "OP",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsxs(_components.code, { children: [
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "051E GET_RADIO_CHANNEL" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "out: channel" })
								})
							] })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Lua",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "local"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " channel "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "="
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " getRadioChannel"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "()"
									})
								]
							}) })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Redux",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "const"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " channel"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ="
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " Audio."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "getRadioChannel"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "()"
									})
								]
							}) })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsx(_components.h2, {
			id: "节拍邻近",
			children: "节拍邻近"
		}),
		"\n",
		jsxs(Opcode, {
			id: "07B1",
			name: "GET_BEAT_PROXIMITY",
			member: "Audio.GetBeatProximity",
			children: [jsxs(_components.p, { children: [
				"相对当前节拍轨（",
				jsx(_components.code, { children: "0954" }),
				"）的拍点信息。"
			] }), jsxs(CodeBlockTabs, {
				defaultValue: "OP",
				children: [
					jsxs(CodeBlockTabsList, { children: [
						jsx(CodeBlockTabsTrigger, {
							value: "OP",
							children: "OP"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Lua",
							children: "Lua"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Redux",
							children: "Redux"
						})
					] }),
					jsx(CodeBlockTab, {
						value: "OP",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsxs(_components.code, { children: [
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "07B1 GET_BEAT_PROXIMITY" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "in: offset" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "out: beatTime, beatType, beatIndex" })
								})
							] })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Lua",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "local"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " beatTime, beatType, beatIndex "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "="
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " getBeatProximity"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(offset)"
									})
								]
							}) })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Redux",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "const"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " { "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "beatTime"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ", "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "beatType"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: ", "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: "beatIndex"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " } "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "="
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " Audio."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "getBeatProximity"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(offset)"
									})
								]
							}) })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsx(_components.h2, {
			id: "语音绑角色",
			children: "语音绑角色"
		}),
		"\n",
		jsxs(Opcode, {
			id: "0949",
			name: "ATTACH_MISSION_AUDIO_TO_CHAR",
			member: "Audio.AttachMissionAudioToChar",
			children: [jsx(_components.p, { children: "任务语音绑在角色位置。" }), jsxs(CodeBlockTabs, {
				defaultValue: "OP",
				children: [
					jsxs(CodeBlockTabsList, { children: [
						jsx(CodeBlockTabsTrigger, {
							value: "OP",
							children: "OP"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Lua",
							children: "Lua"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Redux",
							children: "Redux"
						})
					] }),
					jsx(CodeBlockTab, {
						value: "OP",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsxs(_components.code, { children: [
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "0949 ATTACH_MISSION_AUDIO_TO_CHAR" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "in: slotId, handle" })
								})
							] })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Lua",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [jsx(_components.span, {
									style: {
										"--shiki-light": "#005CC5",
										"--shiki-dark": "#79B8FF"
									},
									children: "attachMissionAudioToChar"
								}), jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "(slotId, handle)"
								})]
							}) })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Redux",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "Audio."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "attachMissionAudioToChar"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(slotId, handle)"
									})
								]
							}) })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsx(_components.h2, {
			id: "预载节拍轨",
			children: "预载节拍轨"
		}),
		"\n",
		jsxs(Opcode, {
			id: "0952",
			name: "PRELOAD_BEAT_TRACK",
			member: "Audio.PreloadBeatTrack",
			children: [jsx(_components.p, { children: "预载 streams/BEATS 里的曲目。" }), jsxs(CodeBlockTabs, {
				defaultValue: "OP",
				children: [
					jsxs(CodeBlockTabsList, { children: [
						jsx(CodeBlockTabsTrigger, {
							value: "OP",
							children: "OP"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Lua",
							children: "Lua"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Redux",
							children: "Redux"
						})
					] }),
					jsx(CodeBlockTab, {
						value: "OP",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsxs(_components.code, { children: [
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "0952 PRELOAD_BEAT_TRACK" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "in: trackId" })
								})
							] })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Lua",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [jsx(_components.span, {
									style: {
										"--shiki-light": "#005CC5",
										"--shiki-dark": "#79B8FF"
									},
									children: "preloadBeatTrack"
								}), jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "(trackId)"
								})]
							}) })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Redux",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "Audio."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "preloadBeatTrack"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(trackId)"
									})
								]
							}) })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsx(_components.h2, {
			id: "节拍轨状态",
			children: "节拍轨状态"
		}),
		"\n",
		jsxs(Opcode, {
			id: "0953",
			name: "GET_BEAT_TRACK_STATUS",
			member: "Audio.GetBeatTrackStatus",
			children: [jsx(_components.p, { children: "当前节拍轨状态。" }), jsxs(CodeBlockTabs, {
				defaultValue: "OP",
				children: [
					jsxs(CodeBlockTabsList, { children: [
						jsx(CodeBlockTabsTrigger, {
							value: "OP",
							children: "OP"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Lua",
							children: "Lua"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Redux",
							children: "Redux"
						})
					] }),
					jsx(CodeBlockTab, {
						value: "OP",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsxs(_components.code, { children: [
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "0953 GET_BEAT_TRACK_STATUS" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "out: status" })
								})
							] })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Lua",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "local"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " status "
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "="
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " getBeatTrackStatus"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "()"
									})
								]
							}) })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Redux",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: "const"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#005CC5",
											"--shiki-dark": "#79B8FF"
										},
										children: " status"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#D73A49",
											"--shiki-dark": "#F97583"
										},
										children: " ="
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: " Audio."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "getBeatTrackStatus"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "()"
									})
								]
							}) })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsx(_components.h2, {
			id: "播放节拍轨",
			children: "播放节拍轨"
		}),
		"\n",
		jsxs(Opcode, {
			id: "0954",
			name: "PLAY_BEAT_TRACK",
			member: "Audio.PlayBeatTrack",
			children: [jsxs(_components.p, { children: [
				"播放 ",
				jsx(_components.code, { children: "0952" }),
				" 预载的曲。"
			] }), jsxs(CodeBlockTabs, {
				defaultValue: "OP",
				children: [
					jsxs(CodeBlockTabsList, { children: [
						jsx(CodeBlockTabsTrigger, {
							value: "OP",
							children: "OP"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Lua",
							children: "Lua"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Redux",
							children: "Redux"
						})
					] }),
					jsx(CodeBlockTab, {
						value: "OP",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsx(_components.span, {
								className: "line",
								children: jsx(_components.span, { children: "0954 PLAY_BEAT_TRACK" })
							}) })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Lua",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [jsx(_components.span, {
									style: {
										"--shiki-light": "#005CC5",
										"--shiki-dark": "#79B8FF"
									},
									children: "playBeatTrack"
								}), jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "()"
								})]
							}) })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Redux",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "Audio."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "playBeatTrack"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "()"
									})
								]
							}) })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsx(_components.h2, {
			id: "停节拍轨",
			children: "停节拍轨"
		}),
		"\n",
		jsxs(Opcode, {
			id: "0955",
			name: "STOP_BEAT_TRACK",
			member: "Audio.StopBeatTrack",
			children: [jsx(_components.p, { children: "停当前节拍轨。" }), jsxs(CodeBlockTabs, {
				defaultValue: "OP",
				children: [
					jsxs(CodeBlockTabsList, { children: [
						jsx(CodeBlockTabsTrigger, {
							value: "OP",
							children: "OP"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Lua",
							children: "Lua"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Redux",
							children: "Redux"
						})
					] }),
					jsx(CodeBlockTab, {
						value: "OP",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsx(_components.span, {
								className: "line",
								children: jsx(_components.span, { children: "0955 STOP_BEAT_TRACK" })
							}) })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Lua",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [jsx(_components.span, {
									style: {
										"--shiki-light": "#005CC5",
										"--shiki-dark": "#79B8FF"
									},
									children: "stopBeatTrack"
								}), jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "()"
								})]
							}) })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Redux",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "Audio."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "stopBeatTrack"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "()"
									})
								]
							}) })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsx(_components.h2, {
			id: "坐标音频事件",
			children: "坐标音频事件"
		}),
		"\n",
		jsxs(Opcode, {
			id: "097A",
			name: "REPORT_MISSION_AUDIO_EVENT_AT_POSITION",
			member: "Audio.ReportMissionAudioEventAtPosition",
			children: [jsx(_components.p, { children: "在坐标触发任务音频事件。" }), jsxs(CodeBlockTabs, {
				defaultValue: "OP",
				children: [
					jsxs(CodeBlockTabsList, { children: [
						jsx(CodeBlockTabsTrigger, {
							value: "OP",
							children: "OP"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Lua",
							children: "Lua"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Redux",
							children: "Redux"
						})
					] }),
					jsx(CodeBlockTab, {
						value: "OP",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsxs(_components.code, { children: [
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "097A REPORT_MISSION_AUDIO_EVENT_AT_POSITION" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "in: x, y, z, soundId" })
								})
							] })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Lua",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [jsx(_components.span, {
									style: {
										"--shiki-light": "#005CC5",
										"--shiki-dark": "#79B8FF"
									},
									children: "reportMissionAudioEventAtPosition"
								}), jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "(x, y, z, soundId)"
								})]
							}) })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Redux",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "Audio."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "reportMissionAudioEventAtPosition"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(x, y, z, soundId)"
									})
								]
							}) })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsx(_components.h2, {
			id: "物体音频事件",
			children: "物体音频事件"
		}),
		"\n",
		jsxs(Opcode, {
			id: "097B",
			name: "REPORT_MISSION_AUDIO_EVENT_AT_OBJECT",
			member: "Audio.ReportMissionAudioEventAtObject",
			children: [jsx(_components.p, { children: "在物体处触发任务音频事件。" }), jsxs(CodeBlockTabs, {
				defaultValue: "OP",
				children: [
					jsxs(CodeBlockTabsList, { children: [
						jsx(CodeBlockTabsTrigger, {
							value: "OP",
							children: "OP"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Lua",
							children: "Lua"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Redux",
							children: "Redux"
						})
					] }),
					jsx(CodeBlockTab, {
						value: "OP",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsxs(_components.code, { children: [
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "097B REPORT_MISSION_AUDIO_EVENT_AT_OBJECT" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "in: handle, soundId" })
								})
							] })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Lua",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [jsx(_components.span, {
									style: {
										"--shiki-light": "#005CC5",
										"--shiki-dark": "#79B8FF"
									},
									children: "reportMissionAudioEventAtObject"
								}), jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "(handle, soundId)"
								})]
							}) })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Redux",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "Audio."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "reportMissionAudioEventAtObject"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(handle, soundId)"
									})
								]
							}) })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsx(_components.h2, {
			id: "语音绑物体",
			children: "语音绑物体"
		}),
		"\n",
		jsxs(Opcode, {
			id: "097C",
			name: "ATTACH_MISSION_AUDIO_TO_OBJECT",
			member: "Audio.AttachMissionAudioToObject",
			children: [jsx(_components.p, { children: "任务语音绑在物体上。" }), jsxs(CodeBlockTabs, {
				defaultValue: "OP",
				children: [
					jsxs(CodeBlockTabsList, { children: [
						jsx(CodeBlockTabsTrigger, {
							value: "OP",
							children: "OP"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Lua",
							children: "Lua"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Redux",
							children: "Redux"
						})
					] }),
					jsx(CodeBlockTab, {
						value: "OP",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsxs(_components.code, { children: [
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "097C ATTACH_MISSION_AUDIO_TO_OBJECT" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "in: slotId, handle" })
								})
							] })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Lua",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [jsx(_components.span, {
									style: {
										"--shiki-light": "#005CC5",
										"--shiki-dark": "#79B8FF"
									},
									children: "attachMissionAudioToObject"
								}), jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "(slotId, handle)"
								})]
							}) })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Redux",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "Audio."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "attachMissionAudioToObject"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(slotId, handle)"
									})
								]
							}) })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsx(_components.h2, {
			id: "暂停节拍轨",
			children: "暂停节拍轨"
		}),
		"\n",
		jsxs(Opcode, {
			id: "0991",
			name: "PAUSE_CURRENT_BEAT_TRACK",
			member: "Audio.PauseCurrentBeatTrack",
			children: [jsx(_components.p, { children: "暂停 / 恢复节拍轨。" }), jsxs(CodeBlockTabs, {
				defaultValue: "OP",
				children: [
					jsxs(CodeBlockTabsList, { children: [
						jsx(CodeBlockTabsTrigger, {
							value: "OP",
							children: "OP"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Lua",
							children: "Lua"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Redux",
							children: "Redux"
						})
					] }),
					jsx(CodeBlockTab, {
						value: "OP",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsxs(_components.code, { children: [
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "0991 PAUSE_CURRENT_BEAT_TRACK" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "in: state" })
								})
							] })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Lua",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [jsx(_components.span, {
									style: {
										"--shiki-light": "#005CC5",
										"--shiki-dark": "#79B8FF"
									},
									children: "pauseCurrentBeatTrack"
								}), jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "(state)"
								})]
							}) })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Redux",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "Audio."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "pauseCurrentBeatTrack"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(state)"
									})
								]
							}) })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsx(_components.h2, {
			id: "角色音频事件",
			children: "角色音频事件"
		}),
		"\n",
		jsxs(Opcode, {
			id: "09F1",
			name: "REPORT_MISSION_AUDIO_EVENT_AT_CHAR",
			member: "Audio.ReportMissionAudioEventAtChar",
			children: [jsx(_components.p, { children: "在角色处触发任务音频事件。" }), jsxs(CodeBlockTabs, {
				defaultValue: "OP",
				children: [
					jsxs(CodeBlockTabsList, { children: [
						jsx(CodeBlockTabsTrigger, {
							value: "OP",
							children: "OP"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Lua",
							children: "Lua"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Redux",
							children: "Redux"
						})
					] }),
					jsx(CodeBlockTab, {
						value: "OP",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsxs(_components.code, { children: [
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "09F1 REPORT_MISSION_AUDIO_EVENT_AT_CHAR" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "in: handle, soundId" })
								})
							] })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Lua",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [jsx(_components.span, {
									style: {
										"--shiki-light": "#005CC5",
										"--shiki-dark": "#79B8FF"
									},
									children: "reportMissionAudioEventAtChar"
								}), jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "(handle, soundId)"
								})]
							}) })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Redux",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "Audio."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "reportMissionAudioEventAtChar"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(handle, soundId)"
									})
								]
							}) })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsx(_components.h2, {
			id: "车音频事件",
			children: "车音频事件"
		}),
		"\n",
		jsxs(Opcode, {
			id: "09F7",
			name: "REPORT_MISSION_AUDIO_EVENT_AT_CAR",
			member: "Audio.ReportMissionAudioEventAtCar",
			children: [jsx(_components.p, { children: "在车处触发任务音频事件。" }), jsxs(CodeBlockTabs, {
				defaultValue: "OP",
				children: [
					jsxs(CodeBlockTabsList, { children: [
						jsx(CodeBlockTabsTrigger, {
							value: "OP",
							children: "OP"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Lua",
							children: "Lua"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Redux",
							children: "Redux"
						})
					] }),
					jsx(CodeBlockTab, {
						value: "OP",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsxs(_components.code, { children: [
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "09F7 REPORT_MISSION_AUDIO_EVENT_AT_CAR" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "in: handle, soundId" })
								})
							] })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Lua",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [jsx(_components.span, {
									style: {
										"--shiki-light": "#005CC5",
										"--shiki-dark": "#79B8FF"
									},
									children: "reportMissionAudioEventAtCar"
								}), jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "(handle, soundId)"
								})]
							}) })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Redux",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "Audio."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "reportMissionAudioEventAtCar"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(handle, soundId)"
									})
								]
							}) })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsx(_components.h2, {
			id: "语音绑车",
			children: "语音绑车"
		}),
		"\n",
		jsxs(Opcode, {
			id: "0A16",
			name: "ATTACH_MISSION_AUDIO_TO_CAR",
			member: "Audio.AttachMissionAudioToCar",
			children: [jsx(_components.p, { children: "任务语音绑在车上。" }), jsxs(CodeBlockTabs, {
				defaultValue: "OP",
				children: [
					jsxs(CodeBlockTabsList, { children: [
						jsx(CodeBlockTabsTrigger, {
							value: "OP",
							children: "OP"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Lua",
							children: "Lua"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Redux",
							children: "Redux"
						})
					] }),
					jsx(CodeBlockTab, {
						value: "OP",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsxs(_components.code, { children: [
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "0A16 ATTACH_MISSION_AUDIO_TO_CAR" })
								}),
								"\n",
								jsx(_components.span, {
									className: "line",
									children: jsx(_components.span, { children: "in: slotId, handle" })
								})
							] })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Lua",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [jsx(_components.span, {
									style: {
										"--shiki-light": "#005CC5",
										"--shiki-dark": "#79B8FF"
									},
									children: "attachMissionAudioToCar"
								}), jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "(slotId, handle)"
								})]
							}) })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Redux",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "Audio."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "attachMissionAudioToCar"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "(slotId, handle)"
									})
								]
							}) })
						}) })
					})
				]
			})]
		}),
		"\n",
		jsx(_components.h2, {
			id: "最爱电台",
			children: "最爱电台"
		}),
		"\n",
		jsxs(Opcode, {
			id: "0A26",
			name: "SET_RADIO_TO_PLAYERS_FAVOURITE_STATION",
			member: "Audio.SetRadioToPlayersFavouriteStation",
			children: [jsx(_components.p, { children: "当前车电台切到玩家最爱台（统计 326）。" }), jsxs(CodeBlockTabs, {
				defaultValue: "OP",
				children: [
					jsxs(CodeBlockTabsList, { children: [
						jsx(CodeBlockTabsTrigger, {
							value: "OP",
							children: "OP"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Lua",
							children: "Lua"
						}),
						jsx(CodeBlockTabsTrigger, {
							value: "Redux",
							children: "Redux"
						})
					] }),
					jsx(CodeBlockTab, {
						value: "OP",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsx(_components.span, {
								className: "line",
								children: jsx(_components.span, { children: "0A26 SET_RADIO_TO_PLAYERS_FAVOURITE_STATION" })
							}) })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Lua",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M 6,1 C 4.354992,1 3,2.354992 3,4 v 16 c 0,1.645008 1.354992,3 3,3 h 12 c 1.645008,0 3,-1.354992 3,-3 V 8 7 A 1.0001,1.0001 0 0 0 20.707031,6.2929687 l -5,-5 A 1.0001,1.0001 0 0 0 15,1 h -1 z m 0,2 h 7 v 3 c 0,1.645008 1.354992,3 3,3 h 3 v 11 c 0,0.564129 -0.435871,1 -1,1 H 6 C 5.4358712,21 5,20.564129 5,20 V 4 C 5,3.4358712 5.4358712,3 6,3 Z M 15,3.4140625 18.585937,7 H 16 C 15.435871,7 15,6.5641288 15,6 Z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [jsx(_components.span, {
									style: {
										"--shiki-light": "#005CC5",
										"--shiki-dark": "#79B8FF"
									},
									children: "setRadioToPlayersFavouriteStation"
								}), jsx(_components.span, {
									style: {
										"--shiki-light": "#24292E",
										"--shiki-dark": "#E1E4E8"
									},
									children: "()"
								})]
							}) })
						}) })
					}),
					jsx(CodeBlockTab, {
						value: "Redux",
						children: jsx(Fragment, { children: jsx(_components.pre, {
							className: "shiki shiki-themes github-light github-dark",
							style: {
								"--shiki-light": "#24292e",
								"--shiki-dark": "#e1e4e8",
								"--shiki-light-bg": "#fff",
								"--shiki-dark-bg": "#24292e"
							},
							tabIndex: "0",
							icon: "<svg viewBox=\"0 0 24 24\"><path d=\"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z\" fill=\"currentColor\" /></svg>",
							children: jsx(_components.code, { children: jsxs(_components.span, {
								className: "line",
								children: [
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "Audio."
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#6F42C1",
											"--shiki-dark": "#B392F0"
										},
										children: "setRadioToPlayersFavouriteStation"
									}),
									jsx(_components.span, {
										style: {
											"--shiki-light": "#24292E",
											"--shiki-dark": "#E1E4E8"
										},
										children: "()"
									})
								]
							}) })
						}) })
					})
				]
			})]
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
