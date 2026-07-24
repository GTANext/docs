import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { baseOptions } from '@/lib/layout.shared';
import { AppHeader } from '@/components/layout/app-header';

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
      {children}
    </DocsLayout>
  );
}