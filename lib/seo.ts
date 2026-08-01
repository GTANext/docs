import { siteTitle } from './shared';

export type DocSeoParts = {
  title: string;
  type?: string;
  gameType?: string;
};

/**
 * 从 docs slug 推断 type / gameType
 * 例: cleo/gta3/arith → CLEO + III
 *     cleo/sa/plus/memory → CLEO+ + SA
 *     plugins/events → 插件 + SA
 */
export function seoPartsFromSlug(slug: string[] | undefined, pageTitle: string): DocSeoParts {
  const parts = slug ?? [];
  const title = cleanPageTitle(pageTitle);

  if (parts.length === 0) {
    return { title: title || '文档', type: '文档' };
  }

  if (parts[0] === 'plugins') {
    return { title: title || '插件', type: '插件', gameType: 'SA' };
  }

  if (parts[0] === 'cleo') {
    if (parts[1] === 'sa') {
      return { title: title || 'SA', type: saType(parts), gameType: 'SA' };
    }
    if (parts[1] === 'vc') {
      return { title: title || 'VC', type: 'CLEO', gameType: 'VC' };
    }
    if (parts[1] === 'gta3') {
      return { title: title || 'III', type: 'CLEO', gameType: 'III' };
    }
    return { title: title || 'CLEO', type: 'CLEO' };
  }

  if (parts[0] === 'xbase') {
    return { title: title || 'XBase', type: 'XBase' };
  }

  if (parts[0] === 'skill') {
    return { title: title || '技能', type: '技能' };
  }

  return { title: title || parts.at(-1) || '文档', type: '文档' };
}

function saType(parts: string[]): string {
  // cleo / sa / plus|default|ext / ...
  if (parts[2] === 'plus') return 'CLEO+';
  if (parts[2] === 'default') return 'default';
  if (parts[2] === 'ext') {
    if (parts[3] === 'newopcodes') return 'NewOpcodes';
    if (parts[3] === 'sampfuncs') return 'SAMPFUNCS';
    if (parts[3] === 'imgui') return 'imgui';
    return '扩展';
  }
  // cleo/sa/memory 等核心类型页
  return 'CLEO';
}

/** 去掉历史塞进 title 的前缀，只留页面本身名称 */
export function cleanPageTitle(raw: string): string {
  let t = raw.trim();

  // CLEO · III · X / CLEO · VC · X / CLEO · SA · X / CLEO · GTA III
  t = t.replace(/^CLEO\s*·\s*(?:GTA\s*)?(?:III|VC|SA)\s*·\s*/i, '');
  t = t.replace(/^CLEO\s*·\s*(?:GTA\s*)?(?:III|VC|SA)\s*$/i, (m) => {
    if (/III/i.test(m)) return 'III';
    if (/VC/i.test(m)) return 'VC';
    return 'SA';
  });

  // CLEO · Memory / CLEO+ · Entity · Object
  t = t.replace(/^CLEO\+\s*·\s*/i, '');
  t = t.replace(/^CLEO\s*·\s*/i, '');
  t = t.replace(/^CLEO\s+/i, '');

  // SAMPFUNCS · Car / NewOpcodes · Misc
  t = t.replace(/^SAMPFUNCS\s*·\s*/i, '');
  t = t.replace(/^NewOpcodes\s*·\s*/i, '');

  // SA · default / SA · 其它扩展
  t = t.replace(/^SA\s*·\s*/i, '');

  // Entity · Car（CLEO+ 子页）
  t = t.replace(/^Entity\s*·\s*/i, 'Entity ');

  // audio · AudioStream / imgui · ImGui（小写模块 id 前缀）
  t = t.replace(/^[a-z][a-z0-9_-]*\s*·\s*/, '');

  return t.trim() || raw.trim();
}

/**
 * SEO title: title / type / gameType - sitetitle
 * 缺项与重复项会自动跳过
 */
export function formatDocSeoTitle(parts: DocSeoParts): string {
  const title = parts.title.trim();
  const type = parts.type?.trim();
  const gameType = parts.gameType?.trim();

  const segs: string[] = [];
  if (title) segs.push(title);
  if (type && type !== title) segs.push(type);
  if (gameType && gameType !== title && gameType !== type) segs.push(gameType);

  const head = segs.join(' / ');
  return head ? `${head} - ${siteTitle}` : siteTitle;
}

export function docSeoTitle(slug: string[] | undefined, pageTitle: string): string {
  return formatDocSeoTitle(seoPartsFromSlug(slug, pageTitle));
}