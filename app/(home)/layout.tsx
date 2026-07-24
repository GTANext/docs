import { HomeLayout } from 'fumadocs-ui/layouts/home';
import type { Metadata } from 'next';
import { baseOptions } from '@/lib/layout.shared';
import { siteTitle } from '@/lib/shared';
import { AppHeader } from '@/components/layout/app-header';

export const metadata: Metadata = {
  title: {
    absolute: siteTitle,
  },
  description: 'GTA 插件开发文档 · plugin-sdk ASI 与 CLEO opcode（III / VC / SA）',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  const options = baseOptions();

  return (
    <HomeLayout
      {...options}
      // slots.header 需要 FC，不能从 Server 传函数；用 nav.component 挂 Client 节点
      nav={{
        ...options.nav,
        component: <AppHeader />,
      }}
    >
      {children}
    </HomeLayout>
  );
}