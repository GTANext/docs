import { createGetUrl } from 'fumadocs-core/source';

/** 站点正式名 · SEO 尾缀 */
export const siteTitle = 'GTAMODX开发文档';

/** 导航栏短名 */
export const appName = siteTitle;

export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

export const gitConfig = {
  user: 'GTANext',
  repo: 'docs',
  branch: 'main',
};

const getContentUrl = createGetUrl(docsContentRoute);
const getImageUrl = createGetUrl(docsImageRoute);

/**
 * 页面 Markdown 文本地址（/llms.mdx/docs/<slug>/content.md）
 * 与 proxy 协商、MarkdownCopyButton 共用
 */
export function getPageMarkdownUrl(page: { slugs: string[] }) {
  const segments = [...page.slugs, 'content.md'];

  return { segments, url: getContentUrl(segments) };
}

/** 页面 OG 图地址（/og/docs/<slug>/image.png） */
export function getPageImageUrl(page: { slugs: string[] }) {
  const segments = [...page.slugs, 'image.png'];

  return { segments, url: getImageUrl(segments) };
}
