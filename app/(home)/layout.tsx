import type { Metadata } from 'next';
import { baseOptions } from '@/lib/layout.shared';
import { siteTitle } from '@/lib/shared';
import { SiteHomeLayout } from '@/components/layout/site-layouts';

export const metadata: Metadata = {
  title: {
    absolute: siteTitle,
  },
  description: 'GTA 插件开发文档 · plugin-sdk ASI 与 CLEO opcode（III / VC / SA）',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return <SiteHomeLayout {...baseOptions()}>{children}</SiteHomeLayout>;
}