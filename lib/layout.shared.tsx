import type { ReactNode } from 'react';
import { appName, gitConfig } from './shared';
import { sectionNavLinks } from './nav';

/** 文档 notebook 布局 / 首页共用：品牌 + GitHub icon */
export function baseOptions() {
  return {
    nav: {
      title: appName,
      /** notebook 顶栏常驻；首页忽略此字段 */
      mode: 'top' as const,
      url: '/',
    },
    /** 分区链接在 AppHeader 二级；这里只留给 githubUrl 生成 icon */
    links: [] as {
      text: string;
      url: string;
      active?: 'url' | 'nested-url' | 'none';
    }[],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}

export { sectionNavLinks };

export type BaseOptions = ReturnType<typeof baseOptions> & {
  children?: ReactNode;
};