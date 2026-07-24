import { source } from '@/lib/source';
import { baseOptions } from '@/lib/layout.shared';
import { SiteDocsLayout } from '@/components/layout/site-layouts';
// SSR 问 AI 悬浮入口（静态 export 时勿启用）：
// import { AISearch, AISearchPanel, AISearchTrigger } from '@/components/ai/search';
// import { MessageCircleIcon } from 'lucide-react';
// import { cn } from '@/lib/cn';
// import { buttonVariants } from 'fumadocs-ui/components/ui/button';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <SiteDocsLayout
      tree={source.getPageTree()}
      // root tabs → AppHeader 二级（插件 / CLEO / 技能）
      tabMode="navbar"
      {...baseOptions()}
    >
      {/* SSR 时恢复：
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
      */}
      {children}
    </SiteDocsLayout>
  );
}