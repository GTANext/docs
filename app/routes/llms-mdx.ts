import type { Route } from './+types/llms-mdx';
import { getLLMText, source } from '@/lib/source';

export async function loader({ params }: Route.LoaderArgs) {
  const slugs = params['*'] ? params['*'].split('/').filter((v) => v.length > 0) : [];
  const page = source.getPage(slugs.slice(0, -1));
  if (!page) throw new Response('Not found', { status: 404 });

  return new Response(await getLLMText(page), {
    headers: {
      'Content-Type': 'text/markdown',
    },
  });
}
