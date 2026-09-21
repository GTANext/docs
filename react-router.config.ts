import type { Config } from '@react-router/dev/config';
import { glob } from 'node:fs/promises';
import { createGetUrl, getSlugs } from 'fumadocs-core/source';
import { getPageMarkdownUrl } from './lib/shared';

const getUrl = createGetUrl('/docs');

export default {
  ssr: true,
  // 预渲染文档页与 LLM 文本，问 AI / 搜索 / OG 图保留运行时 SSR
  async prerender({ getStaticPaths }) {
    const paths: string[] = [];

    for (const path of getStaticPaths()) {
      if (path.startsWith('/api/')) continue;
      paths.push(path);
    }

    for await (const entry of glob('**/*.{md,mdx}', { cwd: 'content/docs' })) {
      // Windows 上 glob 返回反斜杠路径，getSlugs 只认 URL 分隔符
      const slugs = getSlugs(entry.replaceAll('\\', '/'));
      paths.push(getUrl(slugs), getPageMarkdownUrl({ slugs }).url);
    }

    return paths;
  },
} satisfies Config;
