import { docsRoute } from './shared';
import { terms } from './terms';

/**
 * 文档内页二级 · root 分区导航
 * XBase、插件、CLEO 与技能只出现在 docs secondary
 */
export const sectionNavLinks = [
  {
    text: terms.xbase,
    url: `${docsRoute}/xbase`,
    active: 'nested-url' as const,
  },
  {
    text: terms.plugins,
    url: `${docsRoute}/plugins`,
    active: 'nested-url' as const,
  },
  {
    text: terms.cleo,
    url: `${docsRoute}/cleo`,
    active: 'nested-url' as const,
  },
  {
    text: terms.skill,
    url: `${docsRoute}/skill`,
    active: 'nested-url' as const,
  },
] as const;

export type SectionNavLink = (typeof sectionNavLinks)[number];

/** @deprecated 用 sectionNavLinks；一级不再放分区链接 */
export const primaryNavLinks = sectionNavLinks;
export type PrimaryNavLink = SectionNavLink;