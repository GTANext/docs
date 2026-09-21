import { docs } from 'collections/server';
import { loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';
import { docsRoute } from './shared';
import { cleanPageTitle } from './seo';

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: docsRoute,
  source: docs.toFumadocsSource(),
  plugins: [
    lucideIconsPlugin(),
    {
      name: 'clean-page-title',
      // 统一去掉 CLEO · {game} · 等前缀，侧栏 / getPage 同源
      transformStorage({ storage }) {
        for (const filePath of storage.getFiles()) {
          const file = storage.read(filePath);
          if (file?.format === 'page' && typeof file.data.title === 'string') {
            file.data.title = cleanPageTitle(file.data.title);
          }
        }
      },
    },
  ],
});

export async function getLLMText(page: (typeof source)['$inferPage']) {
  const processed = await page.data.getText('processed');

  return `# ${cleanPageTitle(page.data.title)} (${page.url})

${processed}`;
}
