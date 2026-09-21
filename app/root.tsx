import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import type { Route } from './+types/root';
import './app.css';
import { isMarkdownPreferred, rewritePath } from 'fumadocs-core/negotiation';
import { Provider } from '@/components/provider';
import { docsContentRoute, docsRoute, siteTitle } from '@/lib/shared';
import NotFound from './routes/not-found';

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  if (isRouteErrorResponse(error) && error.status === 404) {
    return <NotFound />;
  }

  let message = '页面出错了';
  let details = '页面渲染时发生了未知错误。';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = `${error.status}`;
    details = error.statusText;
  } else if (import.meta.env.DEV && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">{message}</h1>
      <p className="mt-3 text-sm text-fd-muted-foreground">{details}</p>
      {stack ? (
        <pre className="mt-6 overflow-x-auto rounded-xl border border-fd-border bg-fd-card/40 p-4 text-xs">
          <code>{stack}</code>
        </pre>
      ) : null}
    </main>
  );
}

const { rewrite: rewriteDocs } = rewritePath(
  `${docsRoute}{/*path}`,
  `${docsContentRoute}{/*path}/content.md`,
);
const { rewrite: rewriteSuffix } = rewritePath(
  `${docsRoute}{/*path}.md`,
  `${docsContentRoute}{/*path}/content.md`,
);

/**
 * Markdown 协商：显式 .md 后缀或 Accept 偏好 markdown 时，重定向到 content.md 资源
 */
const markdownNegotiation: Route.MiddlewareFunction = async ({ request }, next) => {
  const url = new URL(request.url);
  const suffixPath = rewriteSuffix(url.pathname);
  if (suffixPath) {
    return new Response(null, {
      status: 302,
      headers: { Location: new URL(suffixPath, url).toString() },
    });
  }

  if (isMarkdownPreferred(request)) {
    const docsPath = rewriteDocs(url.pathname);
    if (docsPath) {
      return new Response(null, {
        status: 302,
        headers: {
          Location: new URL(docsPath, url).toString(),
          Vary: 'Accept',
        },
      });
    }
  }

  return next();
};

export const middleware = [markdownNegotiation];

export function meta(): Route.MetaDescriptors {
  return [
    { title: siteTitle },
    {
      name: 'description',
      content: 'GTA III / VC / SA 插件与 CLEO 开发文档 · plugin-sdk ASI 与 opcode 调用',
    },
  ];
}
