import type { Route } from './+types/og.docs';
import { generateOGImage } from 'fumadocs-ui/og/takumi';
import { source } from '@/lib/source';
import { siteTitle } from '@/lib/shared';
import { cleanPageTitle } from '@/lib/seo';

export function loader({ params }: Route.LoaderArgs) {
  const slugs = params['*'] ? params['*'].split('/').filter((v) => v.length > 0) : [];
  const page = source.getPage(slugs.slice(0, -1));
  if (!page) throw new Response(null, { status: 404 });

  return generateOGImage({
    title: cleanPageTitle(page.data.title),
    description: page.data.description,
    site: siteTitle,
  });
}
