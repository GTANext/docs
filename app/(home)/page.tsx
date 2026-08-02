import type { ComponentType } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  Box,
  Code2,
  Cpu,
  Map,
  Route,
  Bug,
  ShieldCheck,
  Terminal,
} from 'lucide-react';
import { docsRoute, siteTitle } from '@/lib/shared';

type Icon = ComponentType<{ className?: string }>;

type DocEntry = {
  title: string;
  audience: string;
  description: string;
  href: string;
  action: string;
  icon: Icon;
  accent: string;
};

type GameEntry = {
  code: string;
  title: string;
  atmosphere: string;
  description: string;
  href: string;
  icon: Icon;
  className: string;
  codeClassName: string;
};

const docEntries: DocEntry[] = [
  {
    title: '使用 XBase 开发功能',
    audience: '适合 XMenu 与跨版本功能开发',
    description: '查看玩家、载具、世界、UI、输入等统一接口，以及不同游戏中的能力支持情况。',
    href: `${docsRoute}/xbase`,
    action: '打开 XBase 文档',
    icon: Box,
    accent: 'bg-sky-500/10 text-sky-700 dark:text-sky-300',
  },
  {
    title: '编写 C++ ASI 插件',
    audience: '适合 plugin-sdk 开发者',
    description: '查找游戏事件、实体 API、函数调用、内存补丁和常用插件开发方式。',
    href: `${docsRoute}/plugins`,
    action: '打开插件文档',
    icon: Cpu,
    accent: 'bg-amber-500/10 text-amber-700 dark:text-amber-300',
  },
  {
    title: '编写 CLEO 脚本',
    audience: '适合 OP、Lua 与 Redux 用户',
    description: '按游戏和扩展查找 opcode，核对参数，并查看对应的 Lua 与 Redux 写法。',
    href: `${docsRoute}/cleo`,
    action: '打开 CLEO 文档',
    icon: Terminal,
    accent: 'bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-300',
  },
  {
    title: '让开发助手理解项目',
    audience: '适合使用 Cursor 等开发工具',
    description: '安装项目 Skill，让开发助手按照正确的 API、版本边界和工程约束协助编码。',
    href: `${docsRoute}/skill`,
    action: '查看 Skill 用法',
    icon: ShieldCheck,
    accent: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
  },
];

const gameEntries: GameEntry[] = [
  {
    code: 'III',
    title: 'GTA III',
    atmosphere: 'Liberty City · 工业蓝灰',
    description: '查阅 GTA III 可用的 CLEO 命令与类型。',
    href: `${docsRoute}/cleo/gta3`,
    icon: Map,
    className:
      'border-slate-300 bg-gradient-to-br from-slate-50 to-slate-200/70 dark:border-slate-700 dark:from-slate-900 dark:to-slate-800/70',
    codeClassName: 'text-slate-500 dark:text-slate-400',
  },
  {
    code: 'VC',
    title: 'Vice City',
    atmosphere: 'Ocean Beach · 霓虹与海岸',
    description: '查阅 Vice City 可用的 CLEO 命令与类型。',
    href: `${docsRoute}/cleo/vc`,
    icon: Code2,
    className:
      'border-fuchsia-200 bg-gradient-to-br from-pink-50 via-fuchsia-50 to-cyan-50 dark:border-fuchsia-900/70 dark:from-fuchsia-950/50 dark:via-slate-900 dark:to-cyan-950/40',
    codeClassName: 'text-fuchsia-500 dark:text-fuchsia-300',
  },
  {
    code: 'SA',
    title: 'San Andreas',
    atmosphere: 'Los Santos · 街区与公路',
    description: '从 SA 实体 API 开始编写更完整的插件功能。',
    href: `${docsRoute}/plugins/entities`,
    icon: Route,
    className:
      'border-amber-200 bg-gradient-to-br from-amber-50 via-lime-50/70 to-stone-100 dark:border-amber-900/70 dark:from-amber-950/40 dark:via-green-950/30 dark:to-stone-900',
    codeClassName: 'text-amber-600 dark:text-amber-300',
  },
];

const startSteps = [
  {
    title: '先确定开发方式',
    description: '跨版本宿主功能使用 XBase；原生 C++ 插件使用 plugin-sdk；游戏脚本使用 CLEO。',
  },
  {
    title: '再选择目标游戏',
    description: 'III、VC 与 SA 的接口和能力并不完全相同，请在对应版本范围内查阅。',
  },
  {
    title: '最后核对示例与边界',
    description: '复制代码前确认签名、生命周期与失败条件，避免把不同技术栈的示例混在一起。',
  },
] as const;

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-fd-background text-fd-foreground">
      <section className="relative isolate border-b border-fd-border">
        <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_12%_16%,rgba(14,165,233,.12),transparent_32%),radial-gradient(circle_at_88%_20%,rgba(217,70,239,.1),transparent_30%),radial-gradient(circle_at_65%_90%,rgba(132,204,22,.08),transparent_32%)] dark:opacity-90" />
        <div className="gta-city-grid absolute inset-0 -z-10 opacity-50" />

        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_.85fr] lg:px-10 lg:py-28">
          <div>
            <p className="text-sm font-medium text-fd-muted-foreground">{siteTitle}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-6xl">
              找到你需要的 GTA
              <span className="block bg-gradient-to-r from-sky-600 via-fuchsia-600 to-amber-600 bg-clip-text text-transparent dark:from-sky-300 dark:via-fuchsia-300 dark:to-amber-300">
                三部曲开发资料
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-fd-muted-foreground sm:text-lg">
              无论你在编写 C++ 插件、CLEO 脚本，还是基于 XBase 开发跨版本功能，都可以从这里找到对应的接口说明、代码示例和版本差异。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`${docsRoute}`}
                className="inline-flex items-center gap-2 rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground shadow-sm transition hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-ring"
              >
                <BookOpen className="size-4" />
                开始阅读
              </Link>
              <Link
                href={`https://github.com/GTANext/docs`}
                className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card/70 px-5 py-2.5 text-sm font-medium transition hover:bg-fd-accent hover:text-fd-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-ring"
              >
                <Bug className="size-4" />
                提交&反馈
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-fd-border bg-fd-card/75 p-5 shadow-xl shadow-black/5 backdrop-blur-sm dark:shadow-black/20 sm:p-7">
            <p className="text-sm font-medium">我应该从哪里开始？</p>
            <div className="mt-5 space-y-5">
              {startSteps.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-fd-primary/10 text-sm font-semibold text-fd-primary">
                    {index + 1}
                  </span>
                  <div>
                    <h2 className="text-sm font-medium">{step.title}</h2>
                    <p className="mt-1 text-sm leading-6 text-fd-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <SectionTitle
          eyebrow="按你的目标选择"
          title="你今天想做什么？"
          description="不必先理解所有工具。选择最接近当前任务的入口，再按文档逐步深入。"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {docEntries.map((entry) => (
            <DocCard key={entry.href} {...entry} />
          ))}
        </div>
      </section>

      <section className="border-y border-fd-border bg-fd-muted/25">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
          <SectionTitle
            eyebrow="按游戏浏览"
            title="选择你正在开发的游戏"
            description="每款游戏都有自己的接口范围。按目标游戏进入，可以减少版本不匹配带来的问题。"
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {gameEntries.map((entry) => (
              <GameCard key={entry.code} {...entry} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-fd-border bg-fd-card p-7 sm:flex-row sm:items-center sm:p-9">
          <div>
            <p className="text-sm font-medium text-fd-primary">给开发助手使用</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">让 AI Agent 按照本站文档协助开发</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-fd-muted-foreground">
              安装 GTAMODX Skill 后，开发助手会区分 XBase、plugin-sdk 与 CLEO，并在生成代码前核对版本和 API 边界。
            </p>
          </div>
          <Link
            href={`${docsRoute}/skill`}
            className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-fd-border px-4 py-2.5 text-sm font-medium transition hover:bg-fd-accent hover:text-fd-accent-foreground"
          >
            查看安装方法
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}

function DocCard({ title, audience, description, href, action, icon: Icon, accent }: DocEntry) {
  return (
    <Link
      href={href}
      className="group flex min-h-52 flex-col rounded-2xl border border-fd-border bg-fd-card/70 p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-fd-primary/30 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-ring"
    >
      <div className="flex items-start justify-between gap-4">
        <span className={`flex size-11 items-center justify-center rounded-xl ${accent}`}>
          <Icon className="size-5" />
        </span>
        <ArrowRight className="size-4 text-fd-muted-foreground transition group-hover:translate-x-1 group-hover:text-fd-foreground" />
      </div>
      <div className="mt-6">
        <p className="text-xs font-medium text-fd-muted-foreground">{audience}</p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-fd-muted-foreground">{description}</p>
      </div>
      <span className="mt-auto pt-5 text-sm font-medium text-fd-primary">{action}</span>
    </Link>
  );
}

function GameCard({ code, title, atmosphere, description, href, icon: Icon, className, codeClassName }: GameEntry) {
  return (
    <Link
      href={href}
      className={`group relative min-h-64 overflow-hidden rounded-2xl border p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-ring ${className}`}
    >
      <div className="gta-road-lines pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between">
          <span className={`text-5xl font-semibold tracking-[-0.07em] ${codeClassName}`}>{code}</span>
          <Icon className="size-5 text-fd-muted-foreground" />
        </div>
        <div className="mt-auto pt-16">
          <p className="text-xs font-medium text-fd-muted-foreground">{atmosphere}</p>
          <h3 className="mt-2 text-xl font-semibold">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-fd-muted-foreground">{description}</p>
          <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium">
            进入文档
            <ArrowRight className="size-4 transition group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-medium text-fd-primary">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-4 leading-7 text-fd-muted-foreground">{description}</p>
    </div>
  );
}