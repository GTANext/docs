import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { siteTitle } from '@/lib/shared';
import { Provider } from '@/components/provider';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: `%s - ${siteTitle}`,
  },
  description: 'GTA III / VC / SA 插件与 CLEO 开发文档 · plugin-sdk ASI 与 opcode 调用',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="zh-CN" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}