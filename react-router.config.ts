import type { Config } from '@react-router/dev/config';

export default {
  ssr: true,
  // 只预渲染入口页与 LLM 文本
  // 275 页文档正文按需 SSR，避免把每页 HTML 与 data 都打进产物
  prerender: [
    '/',
    '/docs',
    '/docs/xbase',
    '/docs/plugins',
    '/docs/cleo',
    '/docs/skill',
    '/llms.txt',
    '/llms-full.txt',
  ],
} satisfies Config;
