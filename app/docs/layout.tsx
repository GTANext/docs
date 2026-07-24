import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { baseOptions } from '@/lib/layout.shared';
import { AISearch, AISearchPanel, AISearchTrigger } from '@/components/ai/search';
import { AppHeader } from '@/components/layout/app-header';
import { MessageCircleIcon } from 'lucide-react';
import { cn } from '@/lib/cn';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  const options = baseOptions();

  return (
    <DocsLayout
      tree={source.getPageTree()}
      // root tabs → AppHeader 二级（插件 / CLEO / 技能）
      tabMode="navbar"
      {...options}
      // slots.header 需要 FC，不能从 Server 传函数；用 nav.component 挂 Client 节点
      nav={{
        ...options.nav,
        component: <AppHeader sectionNav />,
      }}
    >
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

      {children}
    </DocsLayout>
  );
}