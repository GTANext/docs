'use client';

import type { ComponentProps } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { DocsLayout } from 'fumadocs-ui/layouts/notebook';
import { AppHeader } from '@/components/layout/app-header';

/** slots.header 必须在 Client 内赋 FC，不能从 Server 传函数或 nav.component */
function HomeHeaderSlot(props: ComponentProps<'header'>) {
  return <AppHeader {...props} />;
}

function DocsHeaderSlot(props: ComponentProps<'header'>) {
  return <AppHeader {...props} sectionNav />;
}

export function SiteHomeLayout({
  slots,
  ...props
}: ComponentProps<typeof HomeLayout>) {
  return (
    <HomeLayout
      {...props}
      slots={{
        ...slots,
        header: HomeHeaderSlot,
      }}
    />
  );
}

export function SiteDocsLayout({
  slots,
  ...props
}: ComponentProps<typeof DocsLayout>) {
  return (
    <DocsLayout
      {...props}
      slots={{
        ...slots,
        header: DocsHeaderSlot,
      }}
    />
  );
}