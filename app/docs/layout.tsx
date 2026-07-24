import { source } from '@/lib/source';
import { baseOptions } from '@/lib/layout.shared';
import { SiteDocsLayout } from '@/components/layout/site-layouts';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <SiteDocsLayout
      tree={source.getPageTree()}
      // root tabs → AppHeader 二级（插件 / CLEO / 技能）
      tabMode="navbar"
      {...baseOptions()}
    >
      {children}
    </SiteDocsLayout>
  );
}