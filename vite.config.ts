import { reactRouter } from '@react-router/dev/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import fumadocsMdx from 'fumadocs-mdx/vite';

export default defineConfig({
  plugins: [fumadocsMdx(), tailwindcss(), reactRouter()],
  resolve: {
    tsconfigPaths: true,
  },
  optimizeDeps: {
    // fumadocs-ui 在预构建排除名单里，Base UI 与 swr 会直连它的 CJS 垫片
    // 这两个入口必须预构建，否则 dev 下拿不到具名导出会整页失去交互
    include: ['use-sync-external-store/shim', 'use-sync-external-store/shim/with-selector'],
  },
});
