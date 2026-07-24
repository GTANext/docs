import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('content/docs');

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

const keepAsIs = new Set(['CLEO', 'NewOpcodes', 'SAMPFUNCS']);
const files = walk(root);
let changed = 0;

for (const file of files) {
  const src = fs.readFileSync(file, 'utf8');
  if (!src.startsWith('---')) continue;
  const end = src.indexOf('\n---', 3);
  if (end < 0) continue;
  const fm = src.slice(0, end + 4);
  const body = src.slice(end + 4);
  const m = fm.match(/^title:\s*(.+)$/m);
  if (!m) continue;
  const oldTitle = m[1].trim();
  if (keepAsIs.has(oldTitle)) continue;
  const newTitle = cleanPageTitle(oldTitle);
  if (newTitle === oldTitle) continue;
  const newFm = fm.replace(/^title:\s*.+$/m, `title: ${newTitle}`);
  fs.writeFileSync(file, newFm + body, 'utf8');
  changed += 1;
  console.log(`${path.relative(root, file)}: ${oldTitle} => ${newTitle}`);
}

console.log(`changed ${changed} of ${files.length}`);