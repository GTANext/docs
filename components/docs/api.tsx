import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

/**
 * C++ API 文档块：标题 + 可选头文件/命名空间。
 * 连续 cpp 由 remark-auto-code-tabs → CodeBlockTabs（签名 | 示例）。
 */
export function Api({
  name,
  header,
  children,
  className,
}: {
  name: string;
  header?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'my-6 scroll-mt-24 rounded-xl border border-fd-border bg-fd-card/30 p-4 sm:p-5',
        className,
      )}
    >
      <div className="not-prose mb-3 border-b border-fd-border pb-3">
        <div className="font-mono text-[0.95rem] font-semibold tracking-tight text-fd-foreground">
          {name}
        </div>
        {header ? (
          <div className="mt-1 text-sm text-fd-muted-foreground">{header}</div>
        ) : null}
      </div>
      <div className="prose-no-margin">{children}</div>
    </div>
  );
}