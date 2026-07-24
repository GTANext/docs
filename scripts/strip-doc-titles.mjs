/**
 * 一次性清理 content/docs frontmatter title 前缀
 * 运行: node scripts/strip-doc-titles.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../content/docs');

function cleanPageTitle(raw) {
  let t = raw.trim();
  t = t.replace(/^CLEO\s*·\s*(?:GTA\s*)?(?:III|VC|SA)\s*·\s*/i, '');
  t = t.replace(/^CLEO\s*·\s*(?:GTA\s*)?(?:III|VC|SA)\s*$/i, (m) => {
    if (/III/i.test(m)) return 'III';
    if (/VC/i.test(m)) return 'VC';
    return 'SA';
  });
  t = t.replace(/^CLEO\+\s*·\s*/i, '');
  t = t.replace(/^CLEO\s*·\s*/i, '');
  t = t.replace(/^CLEO\s+/i, '');
  t = t.replace(/^SAMPFUNCS\s*·\s*/i, '');
  t = t.replace(/^NewOpcodes\s*·\s*/i, '');
  t = t.replace(/^SA\s*·\s*/i, '');
  t = t.replace(/^[a-z][a-z0-9_-]*\s*·\s*/, '');
  return t.trim() || raw.trim();
}

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (ent.name.endsWith('.mdx')) out.push(p);
  }
  return out;
}

let changed = 0;
for (const file of walk(root)) {
  const text = fs.readFileSync(file, 'utf8');
  if (!text.startsWith('---')) continue;
  const end = text.indexOf('\n---', 3);
  if (end < 0) continue;
  const fm = text.slice(0, end + 4);
  const body = text.slice(end + 4);
  const m = fm.match(/^title:\s*(.+)$/m);
  if (!m) continue;
  const unq = m[1].trim().replace(/^['"]|['"]$/g, '');
  const next = cleanPageTitle(unq);
  if (next === unq) continue;
  // 含空格/斜杠时加引号，避免 frontmatter 歧义
  const rendered = /[:#{}[\],&*?|<>=!%@`]|\s/.test(next) ? JSON.stringify(next) : next;
  fs.writeFileSync(file, fm.replace(/^title:\s*.+$/m, `title: ${rendered}`) + body);
  changed++;
  console.log(`${path.relative(root, file)}: ${unq} => ${next}`);
}
console.log(`done changed=${changed}`);