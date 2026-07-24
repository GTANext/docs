import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import * as TabsComponents from 'fumadocs-ui/components/tabs';
import type { MDXComponents } from 'mdx/types';
import { Api } from '@/components/docs/api';
import { Opcode } from '@/components/docs/opcode';

export function getMDXComponents(components?: MDXComponents) {
  return {
    ...defaultMdxComponents,
    // CodeBlockTabs* 已在 defaultMdxComponents；Tabs 供手写 MDX
    ...TabsComponents,
    Api,
    Opcode,
    Steps,
    Step,
    ...components,
  } satisfies MDXComponents;
}

export const useMDXComponents = getMDXComponents;

declare global {
  type MDXProvidedComponents = ReturnType<typeof getMDXComponents>;
}