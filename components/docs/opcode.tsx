import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

/**
 * CLEO opcode 文档块：名称 · 十六进制 ID · 可选成员名。
 * 正文内连续 text/lua/js 由 remark-auto-code-tabs → CodeBlockTabs（OP | Lua | Redux）。
 */
export function Opcode({
  id,
  name,
  member,
  children,
  className,
}: {
  id: string;
  name: string;
  member?: string;
  children: ReactNode;
  className?: string;
}) {
  const anchor = `${name.toLowerCase()}-${id.toLowerCase()}`;

  return (
    <div
      id={anchor}
      className={cn(
        'my-6 scroll-mt-24 rounded-xl border border-fd-border bg-fd-card/30 p-4 sm:p-5',
        className,
      )}
    >
      <div className="not-prose mb-3 border-b border-fd-border pb-3">
        <div className="font-mono text-[0.95rem] font-semibold tracking-tight text-fd-foreground">
          {name}
          <span className="text-fd-muted-foreground"> · </span>
          {id}
        </div>
        {member ? (
          <div className="mt-1 font-mono text-sm text-fd-muted-foreground">
            {member}
          </div>
        ) : null}
      </div>
      <div className="prose-no-margin">{children}</div>
    </div>
  );
}