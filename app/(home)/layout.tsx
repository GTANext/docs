import type { Metadata } from 'next';
import { baseOptions } from '@/lib/layout.shared';
import { siteTitle } from '@/lib/shared';
import { SiteHomeLayout } from '@/components/layout/site-layouts';

export const metadata: Metadata = {
  title: {
    absolute: siteTitle,
  },
  description: 'GTA 三部曲开发文档 · XBase、plugin-sdk、CLEO 与 Agent Skill（III / VC / SA）',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return <SiteHomeLayout {...baseOptions()}>{children}</SiteHomeLayout>;
}