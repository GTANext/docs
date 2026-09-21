import type { Route } from './+types/docs';
import browserCollections from 'collections/browser';
import { useFumadocsLoader } from 'fumadocs-core/source/client';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  MarkdownCopyButton,
  ViewOptionsPopover,
} from 'fumadocs-ui/layouts/notebook/page';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import { MessageCircleIcon } from 'lucide-react';
import { source } from '@/lib/source';
import { baseOptions } from '@/lib/layout.shared';
import { SiteDocsLayout } from '@/components/layout/site-layouts';
import { getMDXComponents } from '@/components/mdx';
import { AISearch, AISearchPanel, AISearchTrigger } from '@/components/ai/search';
import { cleanPageTitle, docSeoTitle } from '@/lib/seo';
import { getPageImageUrl, getPageMarkdownUrl, gitConfig, siteTitle } from '@/lib/shared';
import { cn } from '@/lib/cn';

const content = browserCollections.docs.createClientLoader({
  id: 'docs',
  component(doc, props: { markdownUrl: string; githubUrl: string }) {
    const { toc, default: MDX, frontmatter } = doc;
    const title = cleanPageTitle(frontmatter.title ?? '');

    return (
      <DocsPage toc={toc} full={frontmatter.full}>
        <DocsTitle>{title}</DocsTitle>
        <DocsDescription className="mb-0">{frontmatter.description}</DocsDescription>
        <div className="flex flex-row flex-wrap gap-2 items-center border-b pb-6">
          <MarkdownCopyButton markdownUrl={props.markdownUrl} />
          <ViewOptionsPopover markdownUrl={props.markdownUrl} githubUrl={props.githubUrl} />
        </div>
        <DocsBody>
          <MDX components={getMDXComponents()} />
        </DocsBody>
      </DocsPage>
    );
  },
});

/** GitHub 源码链接 · GTANext/docs@main */
function githubBlobUrl(pagePath: string) {
  return `https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/content/docs/${pagePath}`;
}

export async function loader({ params }: Route.LoaderArgs) {
  const slugs = params['*'] ? params['*'].split('/').filter((v) => v.length > 0) : [];
  const page = source.getPage(slugs);
  if (!page) throw new Response('Not found', { status: 404 });

  // 预载正文，SSR 与预渲染首屏不经过 Suspense
  await content.preload(page.path);

  return {
    path: page.path,
    slug: slugs,
    title: page.data.title,
    description: page.data.description,
    pageTree: await source.serializePageTree(source.getPageTree()),
  };
}

export async function clientLoader({ serverLoader }: Route.ClientLoaderArgs) {
  const data = await serverLoader();
  await content.preload(data.path);
  return data;
}

export function meta({ loaderData }: Route.MetaArgs) {
  if (!loaderData) return [{ title: siteTitle }];

  return [
    { title: docSeoTitle(loaderData.slug, loaderData.title) },
    { name: 'description', content: loaderData.description },
    { property: 'og:image', content: getPageImageUrl({ slugs: loaderData.slug }).url },
  ];
}

export default function Page({ loaderData }: Route.ComponentProps) {
  const { path, pageTree } = useFumadocsLoader(loaderData);

  return (
    <SiteDocsLayout tree={pageTree} tabMode="navbar" {...baseOptions()}>
      <AISearch>
        <AISearchPanel />
        <AISearchTrigger
          position="float"
          className={cn(
            buttonVariants({
              variant: 'secondary',
              className: 'text-fd-muted-foreground rounded-2xl',
            }),
          )}
        >
          <MessageCircleIcon className="size-4.5" />
          问 AI
        </AISearchTrigger>
      </AISearch>
      {content.useContent(path, {
        markdownUrl: getPageMarkdownUrl({ slugs: loaderData.slug }).url,
        githubUrl: githubBlobUrl(path),
      })}
    </SiteDocsLayout>
  );
}
