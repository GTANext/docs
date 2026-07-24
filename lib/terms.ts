/**
 * 全站中文名词表（导航 / 侧栏 / 交叉链接统一用这里）
 *
 * 原则：
 * - 分区入口页侧栏名一律「综述」
 * - 产品/协议专名保留原文：CLEO · CLEO+ · plugin-sdk · Redux · OP · Lua
 * - 游戏代号：SA · VC · III（正文可写 San Andreas / Vice City / GTA III）
 * - 分区中文：插件 · 技能（路径仍是 plugins / skill）
 */

export const terms = {
  /** 任意分区 / 全站的入口概览页 */
  overview: '综述',
  /** 文档大区 */
  plugins: '插件',
  cleo: 'CLEO',
  skill: '技能',
  /** 全站文档根 */
  docs: '文档',
  /** 首页主 CTA 文案（动作，不是侧栏页名） */
  start: '快速开始',
} as const;

export type TermKey = keyof typeof terms;