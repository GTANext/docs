import { Link } from 'react-router';
import { Compass } from 'lucide-react';
import type { Route } from './+types/not-found';
import { docsRoute, siteTitle } from '@/lib/shared';

/** 兜底路由只负责 404 状态，渲染交给 root ErrorBoundary 的 NotFound */
export function loader() {
  throw new Response('Not found', { status: 404 });
}

export function meta(): Route.MetaDescriptors {
  return [
    { title: `页面不存在 - ${siteTitle}` },
    { name: 'description', content: '请求的文档地址不存在。' },
    { name: 'robots', content: 'noindex' },
  ];
}

/** 404：文档根仍可用，避免只剩死链 */
export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-6 py-24">
      <div className="relative isolate overflow-hidden rounded-3xl border border-fd-border bg-fd-card/70 p-8 sm:p-12">
        <div className="gta-city-grid pointer-events-none absolute inset-0 -z-10 opacity-40" />
        <p className="text-sm font-medium text-fd-primary">404</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">找不到这个页面</h1>
        <p className="mt-4 max-w-xl text-sm leading-6 text-fd-muted-foreground">
          链接可能已经失效，或者地址拼写有误。回到文档目录重新查找，或者从首页选择你要开发的游戏与工具。
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to={docsRoute}
            className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground shadow-sm transition hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-ring"
          >
            <Compass className="size-4" />
            回到文档
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card/70 px-5 py-2.5 text-sm font-medium transition hover:bg-fd-accent hover:text-fd-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-ring"
          >
            打开首页
          </Link>
        </div>
      </div>
    </main>
  );
}
