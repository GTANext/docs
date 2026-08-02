'use client';

import type { ComponentProps, ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Languages, Sidebar } from 'lucide-react';
import { useHomeLayout } from 'fumadocs-ui/layouts/home';
import { useNotebookLayout } from 'fumadocs-ui/layouts/notebook';
import { LinkItem, type LinkItemType } from 'fumadocs-ui/layouts/shared';
import { buttonVariants } from 'fumadocs-ui/components/ui/button';
import { cn } from '@/lib/cn';

function isIconLink(
  item: LinkItemType,
): item is Extract<LinkItemType, { type: 'icon' }> {
  return item.type === 'icon';
}

/** 首页 / 文档共用：GitHub 等 icon 链接尺寸与 hover 一致 */
const iconLinkClassName = cn(
  buttonVariants({ size: 'icon-sm', color: 'ghost' }),
  'text-fd-muted-foreground',
);

/** 文档二级 · root 分区（XBase / 插件 / CLEO / 技能） */
export function DocsSectionNav({
  items,
  className,
}: {
  items: readonly { title: ReactNode; url: string; unlisted?: boolean }[];
  className?: string;
}) {
  const pathname = usePathname();
  const selectedIdx = items.findLastIndex((item) => {
    return pathname === item.url || pathname.startsWith(`${item.url}/`);
  });

  return (
    <div
      data-header-tabs=""
      className={cn(
        'flex h-10 flex-row items-end gap-6 overflow-x-auto border-b px-4 md:px-6 max-lg:hidden',
        className,
      )}
    >
      {items.map((item, i) => {
        const active = selectedIdx === i;
        if (item.unlisted && !active) return null;
        return (
          <Link
            key={item.url}
            href={item.url}
            className={cn(
              'inline-flex items-center gap-2 border-b-2 border-transparent pb-1.5 text-sm font-medium text-nowrap text-fd-muted-foreground transition-colors hover:text-fd-accent-foreground',
              active && 'border-fd-primary text-fd-primary',
            )}
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
}

type HeaderShellProps = Omit<ComponentProps<'header'>, 'title'> & {
  brand?: ReactNode;
  end?: ReactNode;
  secondary?: ReactNode;
  forDocs?: boolean;
};

function HeaderShell({
  brand,
  end,
  secondary,
  forDocs = false,
  className,
  children,
  ...props
}: HeaderShellProps) {
  const hasSecondary = Boolean(secondary);

  return (
    <header
      {...props}
      className={cn(
        'sticky top-0 z-40 flex flex-col border-b bg-fd-background/80 backdrop-blur-lg',
        forDocs &&
          cn(
            '[grid-area:header] top-(--fd-docs-row-1) z-10 layout:[--fd-header-height:--spacing(14)]',
            hasSecondary && 'lg:layout:[--fd-header-height:--spacing(24)]',
          ),
        !forDocs && 'h-auto',
        className,
      )}
    >
      <div
        data-header-body=""
        className={cn(
          'flex h-14 w-full items-center px-4',
          forDocs ? 'md:px-6' : 'mx-auto max-w-(--fd-layout-width)',
        )}
      >
        <div className="flex items-center gap-2">{brand}</div>
        <div className="ms-auto flex flex-row items-center justify-end gap-1.5">{end}</div>
      </div>
      {secondary}
      {children}
    </header>
  );
}

type AppHeaderProps = ComponentProps<'header'> & {
  /**
   * true：文档 notebook
   */
  sectionNav?: boolean;
};

/**
 * 全站顶栏
 */
export function AppHeader({ sectionNav = false, ...props }: AppHeaderProps) {
  if (sectionNav) return <DocsAppHeader {...props} />;
  return <HomeAppHeader {...props} />;
}

/**
 * 顶栏右侧工具统一顺序：
 * 搜索 → 语言 → 主题 → GitHub 等 icon → 侧栏（仅文档）
 */
function HomeAppHeader(props: ComponentProps<'header'>) {
  const { slots, navItems } = useHomeLayout();
  const iconLinks = navItems.filter(isIconLink);

  return (
    <HeaderShell
      id="nd-nav"
      {...props}
      className={cn(props.className)}
      brand={
        slots.navTitle ? (
          <slots.navTitle className="inline-flex items-center gap-2.5 font-semibold" />
        ) : undefined
      }
      end={
        <>
          {slots.searchTrigger ? (
            <>
              <slots.searchTrigger.full
                hideIfDisabled
                className="w-full max-w-[240px] rounded-full ps-2.5 max-lg:hidden"
              />
              <slots.searchTrigger.sm hideIfDisabled className="p-2 lg:hidden" />
            </>
          ) : null}
          <div className="flex flex-row items-center gap-1.5 max-lg:hidden">
            {slots.languageSelect ? (
              <slots.languageSelect.root>
                <Languages className="size-4.5 text-fd-muted-foreground" />
              </slots.languageSelect.root>
            ) : null}
            {slots.themeSwitch ? <slots.themeSwitch /> : null}
            {iconLinks.map((item, i) => (
              <LinkItem
                key={i}
                item={item}
                className={iconLinkClassName}
                aria-label={item.label}
              >
                {item.icon}
              </LinkItem>
            ))}
          </div>
        </>
      }
    />
  );
}

function DocsAppHeader(props: ComponentProps<'header'>) {
  const {
    slots,
    navItems,
    isNavTransparent,
    props: { tabs, sidebar },
  } = useNotebookLayout();

  const { open } = slots.sidebar?.useSidebar?.() ?? {};
  const sidebarCollapsible = sidebar?.collapsible ?? true;
  const iconLinks = navItems.filter(isIconLink);
  const showSecondary = tabs.length > 0;

  return (
    <HeaderShell
      id="nd-subnav"
      forDocs
      data-transparent={isNavTransparent && !open}
      {...props}
      className={cn(
        'transition-colors data-[transparent=true]:bg-transparent data-[transparent=false]:bg-fd-background/80',
        props.className,
      )}
      brand={
        slots.navTitle ? (
          <slots.navTitle className="inline-flex items-center gap-2.5 font-semibold" />
        ) : undefined
      }
      end={
        <>
          {slots.searchTrigger ? (
            <>
              <slots.searchTrigger.full
                hideIfDisabled
                className="my-auto w-full max-w-[240px] rounded-full ps-2.5 max-md:hidden"
              />
              <slots.searchTrigger.sm hideIfDisabled className="p-2 md:hidden" />
            </>
          ) : null}

          {/* 与首页同一顺序：语言 → 主题 → GitHub；末尾侧栏仅文档 */}
          <div className="flex items-center gap-1.5 max-md:hidden">
            {slots.languageSelect ? (
              <slots.languageSelect.root>
                <Languages className="size-4.5 text-fd-muted-foreground" />
              </slots.languageSelect.root>
            ) : null}
            {slots.themeSwitch ? <slots.themeSwitch /> : null}
            {iconLinks.map((item, i) => (
              <LinkItem
                key={i}
                item={item}
                className={iconLinkClassName}
                aria-label={item.label}
              >
                {item.icon}
              </LinkItem>
            ))}
            {sidebarCollapsible && slots.sidebar ? (
              <slots.sidebar.collapseTrigger
                className={cn(
                  buttonVariants({ color: 'secondary', size: 'icon-sm' }),
                  'rounded-full text-fd-muted-foreground -me-1.5',
                )}
              >
                <Sidebar />
              </slots.sidebar.collapseTrigger>
            ) : null}
          </div>

          {slots.sidebar ? (
            <slots.sidebar.trigger
              className={cn(
                buttonVariants({
                  color: 'ghost',
                  size: 'icon-sm',
                  className: 'p-2 -me-1.5',
                }),
                'md:hidden',
              )}
            >
              <Sidebar />
            </slots.sidebar.trigger>
          ) : null}
        </>
      }
      secondary={
        showSecondary ? (
          <DocsSectionNav
            items={tabs.map((tab) => ({
              title: tab.title,
              url: tab.url,
              unlisted: tab.unlisted,
            }))}
          />
        ) : null
      }
    />
  );
}

/** 兼容旧名 */
export const SiteHeader = AppHeader;