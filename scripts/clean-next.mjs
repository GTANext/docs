import { rmSync } from 'node:fs';

/** 清掉 Next 类型缓存，避免 route 改名后仍校验旧路径（如 /api/chat） */
rmSync('.next', { recursive: true, force: true });
console.log('[clean-next] removed .next');