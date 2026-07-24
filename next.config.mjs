import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,

  // —— 纯静态预渲染 --> out/
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,

  // —— 若改回 Node/SSR，可改 output: 'standalone'
  // output: 'standalone',
  // 并恢复 proxy.ssr.ts → proxy.ts、app/api/chat/route.ssr.ts → route.ts
};

export default withMDX(config);