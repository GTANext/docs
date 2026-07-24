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
const samples = [];
for (const f of walk(root)) {
  let text = fs.readFileSync(f, 'utf8');
  if (!text.startsWith('---')) continue;
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) continue;
  const fm = m[1];
  const tm = fm.match(/^title:\s*(.+)$/m);
  if (!tm) continue;
  const unq = tm[1].trim().replace(/^['"]|['"]$/g, '');
  const cleaned = cleanPageTitle(unq);
  if (cleaned === unq) continue;
  const newFm = fm.replace(/^title:\s*.+$/m, `title: ${cleaned}`);
  fs.writeFileSync(f, text.replace(m[0], `---\n${newFm}\n---`));
  changed++;
  if (samples.length < 40) samples.push(`${path.relative(root, f)} | ${unq} => ${cleaned}`);
}

console.log(`changed ${changed}`);
console.log(samples.join('\n'));