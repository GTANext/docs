import { index, route, type RouteConfig } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('docs/*', 'routes/docs.tsx'),

  route('api/search', 'routes/api.search.ts'),
  route('api/chat', 'routes/api.chat.ts'),

  route('og/docs/*', 'routes/og.docs.tsx'),

  // LLM 入口
  route('llms.txt', 'routes/llms.ts'),
  route('llms-full.txt', 'routes/llms-full.ts'),
  route('llms.mdx/docs/*', 'routes/llms-mdx.ts'),

  route('*', 'routes/not-found.tsx'),
] satisfies RouteConfig;
