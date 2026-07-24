/**
 * 校验 remark-auto-code-tabs → remarkCodeTab
 * node --experimental-strip-types scripts/verify-code-tabs.mts
 */
import { remark } from 'remark';
import { remarkCodeTab } from 'fumadocs-core/mdx-plugins';
import { visit } from 'unist-util-visit';
import { remarkAutoCodeTabs } from '../lib/remark-auto-code-tabs.ts';

const src = `
# t

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

const processor = remark().use(remarkAutoCodeTabs).use(remarkCodeTab);
const ast = processor.parse(src);
processor.runSync(ast);

let codeTabs = 0;
let bareCode = 0;
const groups: Array<{ groupId?: string; defaultValue?: string; tabs: string[] }> =
  [];

visit(ast, (node: any) => {
  if (node.type === 'mdxJsxFlowElement' && node.name === 'CodeBlockTabs') {
    codeTabs += 1;
    const attrs = Object.fromEntries(
      (node.attributes ?? []).map((a: any) => [a.name, a.value]),
    );
    const tabs = (node.children ?? [])
      .filter((c: any) => c.name === 'CodeBlockTab')
      .map(
        (c: any) =>
          c.attributes?.find((a: any) => a.name === 'value')?.value ?? '?',
      );
    groups.push({
      groupId: attrs.groupId,
      defaultValue: attrs.defaultValue,
      tabs,
    });
  }
  if (node.type === 'code') bareCode += 1;
});

const out = { codeTabs, bareCode, groups, ok: codeTabs === 2 && bareCode === 0 };
console.log(JSON.stringify(out, null, 2));
if (!out.ok) process.exit(1);