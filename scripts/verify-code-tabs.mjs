/**
 * 校验 remark-auto-code-tabs 直接生成 CodeBlockTabs
 * 输出 scripts/verify-code-tabs.out.json
 * 运行: node scripts/verify-code-tabs.mjs
 */
import { remark } from 'remark';
import { visit } from 'unist-util-visit';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import {
  generateCodeBlockTabs,
  parseCodeBlockAttributes,
} from 'fumadocs-core/mdx-plugins';

// 内联插件逻辑，避免 .ts 导入问题
const CLEO_LABEL = {
  text: 'OP',
  lua: 'Lua',
  js: 'Redux',
  javascript: 'Redux',
};

function resolveTabMeta(langs) {
  const allCleo = langs.every((l) => l in CLEO_LABEL);
  if (allCleo) {
    return {
      items: langs.map((l) => CLEO_LABEL[l]),
      groupId: 'opcode-lang',
    };
  }
  if (langs.every((l) => l === 'cpp' || l === 'c++') && langs.length === 2) {
    return { items: ['签名', '示例'], groupId: 'cpp-api' };
  }
  return {
    items: langs.map((l, i) => `${l || 'code'}${i}`),
    groupId: 'code-mixed',
  };
}

function remarkAutoCodeTabs() {
  return (tree) => {
    visit(tree, (node) => {
      if (!('children' in node) || !Array.isArray(node.children)) return;
      if (node.data?._code_tab_visited) return 'skip';
      if (
        node.type === 'mdxJsxFlowElement' &&
        (node.name === 'CodeBlockTabs' || node.name === 'Tabs')
      ) {
        return 'skip';
      }

      const children = node.children;
      let i = 0;
      while (i < children.length) {
        if (children[i].type !== 'code') {
          i += 1;
          continue;
        }
        let j = i;
        while (j < children.length && children[j].type === 'code') j += 1;
        const group = children.slice(i, j);
        if (group.length < 2) {
          i = j;
          continue;
        }
        if (
          group.some((c) => {
            if (!c.meta) return false;
            const { attributes } = parseCodeBlockAttributes(c.meta, ['tab']);
            return typeof attributes.tab === 'string';
          })
        ) {
          i = j;
          continue;
        }

        const langs = group.map((c) => (c.lang ?? '').toLowerCase());
        const { items, groupId } = resolveTabMeta(langs);
        const replacement = generateCodeBlockTabs({
          defaultValue: items[0],
          persist: { id: groupId },
          triggers: items.map((value) => ({
            value,
            children: [{ type: 'text', value }],
          })),
          tabs: items.map((value, idx) => ({
            value,
            children: [group[idx]],
          })),
        });
        replacement.data ??= {};
        replacement.data._code_tab_visited = true;
        children.splice(i, j - i, replacement);
        i += 1;
      }
    });
  };
}

const src = `# t

\`\`\`text
0AA2 LOAD
\`\`\`

\`\`\`lua
load()
\`\`\`

\`\`\`js
DynamicLibrary.Load()
\`\`\`

para

\`\`\`cpp
void foo();
\`\`\`

\`\`\`cpp
foo();
\`\`\`
`;

const processor = remark().use(remarkAutoCodeTabs);
const ast = processor.parse(src);
processor.runSync(ast);

let codeTabs = 0;
const groups = [];

visit(ast, (node) => {
  if (node.type === 'mdxJsxFlowElement' && node.name === 'CodeBlockTabs') {
    codeTabs += 1;
    const attrs = Object.fromEntries(
      (node.attributes ?? []).map((a) => [a.name, a.value]),
    );
    const tabs = (node.children ?? [])
      .filter((c) => c.name === 'CodeBlockTab')
      .map(
        (c) => c.attributes?.find((a) => a.name === 'value')?.value ?? '?',
      );
    groups.push({
      groupId: attrs.groupId,
      defaultValue: attrs.defaultValue,
      persist: Object.prototype.hasOwnProperty.call(attrs, 'persist'),
      tabs,
    });
  }
});

const out = {
  codeTabs,
  groups,
  ok:
    codeTabs === 2 &&
    groups[0]?.tabs?.join(',') === 'OP,Lua,Redux' &&
    groups[1]?.tabs?.join(',') === '签名,示例',
};

const __dirname = dirname(fileURLToPath(import.meta.url));
writeFileSync(
  join(__dirname, 'verify-code-tabs.out.json'),
  JSON.stringify(out, null, 2),
  'utf8',
);
process.exit(out.ok ? 0 : 1);