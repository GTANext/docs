import Link from 'next/link';
import {
  BookOpen,
  Box,
  Code2,
  Cpu,
  FileCode2,
  Layers,
  MemoryStick,
  Puzzle,
  Terminal,
  Wrench,
} from 'lucide-react';
import { docsRoute, siteTitle } from '@/lib/shared';
import { terms } from '@/lib/terms';
import { cn } from '@/lib/cn';
import { buttonVariants } from '@/components/ui/button';

type IntroCard = {
  title: string;
  desc: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

const pluginCards: IntroCard[] = [
  {
    title: '调用 PluginBase / Call',
    desc: 'Call · CallDyn · Method · VMT 选型',
    href: `${docsRoute}/plugins/plugin-base`,
    icon: Cpu,
  },
  {
    title: '生命周期 Events',
    desc: '帧逻辑、绘制、实体构造析构',
    href: `${docsRoute}/plugins/events`,
    icon: Layers,
  },
  {
    title: '内存 Patch',
    desc: '读写、NOP、跳转与可逆修改',
    href: `${docsRoute}/plugins/patch`,
    icon: MemoryStick,
  },
  {
    title: '特征码 Pattern',
    desc: '定位地址再交给 CallDyn / patch',
    href: `${docsRoute}/plugins/pattern`,
    icon: FileCode2,
  },
  {
    title: '脚本 Command',
    desc: 'C++ 调 SCM 命令（非 CLEO opcode）',
    href: `${docsRoute}/plugins/commands`,
    icon: Terminal,
  },
  {
    title: '扩展与工具',
    desc: '路径、屏幕、KeyCheck、精灵…',
    href: `${docsRoute}/plugins/extensions`,
    icon: Wrench,
  },
  {
    title: '附加数据 Extender',
    desc: 'Ped / Vehicle / Object 挂数据',
    href: `${docsRoute}/plugins/extender`,
    icon: Puzzle,
  },
  {
    title: '实体 API',
    desc: 'SA 高频游戏类：行人、车、世界…',
    href: `${docsRoute}/plugins/entities`,
    icon: Box,
  },
];

const cleoCards: IntroCard[] = [
  {
    title: 'OP / Lua 语法',
    desc: '三种形态与 Lua 约定',
    href: `${docsRoute}/cleo/syntax`,
    icon: Code2,
  },
  {
    title: 'Redux 语法',
    desc: 'Class.member / native 边界',
    href: `${docsRoute}/cleo/syntax-redux`,
    icon: FileCode2,
  },
  {
    title: 'SA · Memory',
    desc: '读写内存与原生调用',
    href: `${docsRoute}/cleo/sa/memory`,
    icon: MemoryStick,
  },
  {
    title: 'SA · default',
    desc: 'SCM 原生 opcode 按 class',
    href: `${docsRoute}/cleo/sa/default`,
    icon: BookOpen,
  },
  {
    title: 'SA · CLEO+',
    desc: 'CLEO+ 扩展类',
    href: `${docsRoute}/cleo/sa/plus`,
    icon: Puzzle,
  },
  {
    title: 'SA · 其它扩展',
    desc: 'NewOpcodes / SAMPFUNCS / imgui',
    href: `${docsRoute}/cleo/sa/ext`,
    icon: Layers,
  },
  {
    title: 'VC',
    desc: 'Vice City CLEO 类型页',
    href: `${docsRoute}/cleo/vc`,
    icon: Code2,
  },
  {
    title: 'GTA III',
    desc: 'III CLEO 类型页',
    href: `${docsRoute}/cleo/gta3`,
    icon: Code2,
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="relative overflow-hidden border-b border-fd-border">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-fd-primary)_0%,transparent_55%)] opacity-[0.08]" />
        <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-16 sm:px-6 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-fd-muted-foreground">{siteTitle}</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              GTA 插件开发
            </h1>
            <p className="mt-4 text-base leading-relaxed text-fd-muted-foreground sm:text-lg">
              plugin-sdk ASI 精选 API 与 CLEO opcode 调用表（III / VC / SA）。对着本地头文件写，本站不替代完整源码树。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`${docsRoute}/plugins`}
                className={cn(buttonVariants({ color: 'primary', className: 'rounded-full px-5 py-2.5 gap-2' }))}
              >
                <BookOpen className="size-4" />
                {terms.start}
              </Link>
              <Link
                href={`${docsRoute}/cleo`}
                className={cn(buttonVariants({ color: 'secondary', className: 'rounded-full px-5 py-2.5 gap-2' }))}
              >
                <Code2 className="size-4" />
                {terms.cleo} · {terms.overview}
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <HeroStat label="覆盖" value="ASI 高频 + CLEO 全表" />
            <HeroStat label="游戏" value="III · VC · SA" />
            <HeroStat label="边界" value="精选非全量镜像" />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <SectionHead
          title="插件 · plugin-sdk"
          desc="C++ ASI：生命周期、调用、补丁、实体。不要和 CLEO opcode 混用。"
          href={`${docsRoute}/plugins`}
          linkText={`进入${terms.plugins} · ${terms.overview}`}
        />
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {pluginCards.map((card) => (
            <ModuleCard key={card.href} {...card} />
          ))}
        </div>
      </section>

      <section className="border-t border-fd-border bg-fd-secondary/20">
        <div className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
          <SectionHead
            title="CLEO · opcode"
            desc="OP 文本 · Lua · Redux 同源 SBL。C++ Command 不在这里。"
            href={`${docsRoute}/cleo`}
            linkText={`进入${terms.cleo} · ${terms.overview}`}
          />
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {cleoCards.map((card) => (
              <ModuleCard key={card.href} {...card} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="rounded-2xl border border-fd-border bg-fd-card/50 p-6 sm:p-8">
          <h2 className="text-lg font-semibold tracking-tight">收录边界</h2>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-fd-muted-foreground">
            <li>已收录：PluginBase / Events / Patch / Pattern / Command / Extensions / Utils / Extender / SA 实体高频 / CLEO SA·VC·III</li>
            <li>不扩：Task/Event 全家桶、全 CAE*、VC/III 游戏类全文、ScriptCommands 全枚举、injector 底层栈</li>
            <li>以本地头文件与 sanny-builder library 为准；文档是精选调用表，不是全量镜像</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              href={`${docsRoute}/plugins/entities/coverage`}
              className={cn(buttonVariants({ color: 'outline', size: 'sm', className: 'rounded-full' }))}
            >
              ASI 覆盖边界
            </Link>
            <Link
              href={`${docsRoute}/plugins/recipes`}
              className={cn(buttonVariants({ color: 'outline', size: 'sm', className: 'rounded-full' }))}
            >
              组合示例
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function HeroStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-fd-border bg-fd-card/40 px-4 py-3">
      <p className="text-xs text-fd-muted-foreground">{label}</p>
      <p className="mt-1 text-sm font-medium">{value}</p>
    </div>
  );
}

function SectionHead({
  title,
  desc,
  href,
  linkText,
}: {
  title: string;
  desc: string;
  href: string;
  linkText: string;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        <p className="mt-2 max-w-2xl text-sm text-fd-muted-foreground">{desc}</p>
      </div>
      <Link href={href} className="text-sm font-medium text-fd-primary underline-offset-4 hover:underline">
        {linkText}
      </Link>
    </div>
  );
}

function ModuleCard({ title, desc, href, icon: Icon }: IntroCard) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-xl border border-fd-border bg-fd-card/40 p-4 transition-colors hover:bg-fd-accent/50"
    >
      <Icon className="size-4 text-fd-primary" />
      <p className="mt-3 text-sm font-medium leading-snug group-hover:text-fd-accent-foreground">{title}</p>
      <p className="mt-1 text-xs leading-relaxed text-fd-muted-foreground">{desc}</p>
    </Link>
  );
}