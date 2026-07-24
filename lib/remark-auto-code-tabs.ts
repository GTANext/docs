import { visit } from 'unist-util-visit';
import {
  generateCodeBlockTabs,
  parseCodeBlockAttributes,
} from 'fumadocs-core/mdx-plugins';

/** CLEO 三形态 → Tab 文案 */
const CLEO_LABEL: Record<string, string> = {
  text: 'OP',
  lua: 'Lua',
  js: 'Redux',
  javascript: 'Redux',
};

function isCleoLang(lang: string): boolean {
  return lang in CLEO_LABEL;
}

function displayLang(lang: string): string {
  if (lang in CLEO_LABEL) return CLEO_LABEL[lang];
  if (lang === 'cpp' || lang === 'c++') return 'C++';
  if (lang === 'ts' || lang === 'typescript') return 'TS';
  if (lang === 'js' || lang === 'javascript') return 'JS';
  return lang || 'code';
}

function uniquify(items: string[]): string[] {
  const seen = new Map<string, number>();
  return items.map((item) => {
    const n = (seen.get(item) ?? 0) + 1;
    seen.set(item, n);
    return n === 1 ? item : `${item} (${n})`;
  });
}

/** 连续 fence → Tab 标签（不设 groupId，避免多组 Tabs 联动） */
function resolveTabLabels(langs: string[]): string[] {
  const allCleo = langs.every(isCleoLang);
  if (allCleo) {
    return uniquify(langs.map((l) => CLEO_LABEL[l]));
  }

  const allSame = langs.every((l) => l === langs[0]);
  if (allSame && (langs[0] === 'cpp' || langs[0] === 'c++')) {
    if (langs.length === 2) return ['签名', '示例'];
    return langs.map((_, i) =>
      i === 0 ? '签名' : i === 1 ? '示例' : `代码 ${i + 1}`,
    );
  }

  if (allSame && langs.length >= 2) {
    return langs.map((_, i) => `代码 ${i + 1}`);
  }

  return uniquify(langs.map(displayLang));
}

function hasTabMeta(meta: string | null | undefined): boolean {
  if (!meta) return false;
  const { attributes } = parseCodeBlockAttributes(meta, ['tab']);
  return typeof attributes.tab === 'string';
}

type CodeNode = {
  type: 'code';
  lang?: string | null;
  meta?: string | null;
  value?: string;
};

type ParentLike = {
  type?: string;
  name?: string;
  data?: { _code_tab_visited?: boolean };
  children: Array<CodeNode | { type: string; name?: string; data?: unknown }>;
};

/**
 * 把连续 ≥2 的 code fence 合并成官方 CodeBlockTabs。
 * remark 阶段完成（rehype/Shiki 之前），不依赖运行时 language-*。
 *
 * 已手写 tab= 的 fence 留给官方 remarkCodeTab；
 * 本插件处理裸连续 fence（CLEO OP/Lua/Redux、插件双 cpp 等）。
 */
export function remarkAutoCodeTabs() {
  return (tree: ParentLike) => {
    visit(tree as never, (node) => {
      const n = node as ParentLike;
      if (!('children' in n) || !Array.isArray(n.children)) return;
      if (n.data?._code_tab_visited) return 'skip';

      if (
        n.type === 'mdxJsxFlowElement' &&
        (n.name === 'CodeBlockTabs' ||
          n.name === 'Tabs' ||
          n.name === 'CodeBlockTab' ||
          n.name === 'Tab')
      ) {
        return 'skip';
      }

      const children = n.children;
      let i = 0;

      while (i < children.length) {
        const head = children[i];
        if (head.type !== 'code') {
          i += 1;
          continue;
        }

        let j = i;
        while (j < children.length && children[j].type === 'code') {
          j += 1;
        }

        const group = children.slice(i, j) as CodeNode[];
        if (group.length < 2) {
          i = j;
          continue;
        }

        if (group.some((c) => hasTabMeta(c.meta))) {
          i = j;
          continue;
        }

        const langs = group.map((c) => (c.lang ?? '').toLowerCase());
        const items = resolveTabLabels(langs);

        const triggers = items.map((value) => ({
          value,
          children: [{ type: 'text' as const, value }],
        }));
        const tabs = items.map((value, idx) => ({
          value,
          // code 节点即 BlockContent
          children: [group[idx] as never],
        }));

        // 不传 groupId/persist：每组 Tabs 独立切换，互不同步
        const replacement = generateCodeBlockTabs({
          defaultValue: items[0],
          persist: false,
          triggers: triggers as never,
          tabs: tabs as never,
        }) as ParentLike & { data?: { _code_tab_visited?: boolean } };

        replacement.data ??= {};
        replacement.data._code_tab_visited = true;

        children.splice(i, j - i, replacement as never);
        i += 1;
      }
    });
  };
}