import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';
import { createTokenizer } from '@orama/tokenizers/mandarin';

/**
 * 静态搜索索引：构建时导出 JSON，客户端下载后本地检索。
 * @see https://fumadocs.dev/docs/headless/search/orama#static-export
 */
export const revalidate = false;

export const { staticGET: GET } = createFromSource(source, {
  // 中文文档用 mandarin 分词
  components: {
    tokenizer: createTokenizer(),
  },
  search: {
    threshold: 0,
    tolerance: 0,
  },
});