/**
 * SSR 模式备份：问 AI 聊天 API。
 * 启用方式：
 * 1. next.config 去掉 output: 'export'（或改回 standalone）
 * 2. 将本文件重命名/复制为 route.ts
 * 3. 恢复 layout 中对 AISearch 的引用（若需要）
 */
import { createLLMGateway } from '@llmgateway/ai-sdk-provider';
import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  stepCountIs,
  streamText,
  tool,
  toUIMessageStream,
} from 'ai';
import { z } from 'zod';
import { source } from '@/lib/source';
import { Document, type DocumentData } from 'flexsearch';
import type { ChatUIMessage, SearchTool } from '../../../components/ai/search';

interface CustomDocument extends DocumentData {
  url: string;
  title: string;
  description: string;
  content: string;
}

const searchServer = createSearchServer();

async function createSearchServer() {
  const search = new Document<CustomDocument>({
    document: {
      id: 'url',
      index: ['title', 'description', 'content'],
      store: true,
    },
  });

  const docs = await chunkedAll(
    source.getPages().map(async (page) => {
      if (!('getText' in page.data)) return null;

      return {
        title: page.data.title,
        description: page.data.description,
        url: page.url,
        content: await page.data.getText('processed'),
      } as CustomDocument;
    }),
  );

  for (const doc of docs) {
    if (doc) search.add(doc);
  }

  return search;
}

async function chunkedAll<O>(promises: Promise<O>[]): Promise<O[]> {
  const SIZE = 50;
  const out: O[] = [];
  for (let i = 0; i < promises.length; i += SIZE) {
    out.push(...(await Promise.all(promises.slice(i, i + SIZE))));
  }
  return out;
}

const llmgateway = createLLMGateway({
  apiKey: process.env.LLM_GATEWAY_API_KEY,
});

/** System prompt, you can update it to provide more specific information */
const systemPrompt = [
  '你是 GTAMODX开发文档 的助手，面向 GTA III/VC/SA 的 plugin-sdk ASI 与 CLEO 脚本。',
  '需要事实依据时先用 `search` 工具检索站内文档，再回答。',
  '`search` 返回文档 JSON；请用结果支撑回答，并用文档 `url` 字段以 markdown 链接引用。',
  '搜不到就明确说不知道，并给出更好的检索词。用简洁中文回答，代码保持原样。',
].join('\n');

export async function POST(req: Request) {
  const reqJson = await req.json();
  const modelId = process.env.LLM_GATEWAY_MODEL ?? 'anthropic/claude-3.5-sonnet';

  const result = streamText({
    model: llmgateway.chat(modelId as never),
    stopWhen: stepCountIs(5),
    tools: {
      search: searchTool,
    },
    messages: [
      { role: 'system', content: systemPrompt },
      ...(await convertToModelMessages<ChatUIMessage>(reqJson.messages ?? [], {
        convertDataPart(part) {
          if (part.type === 'data-client')
            return {
              type: 'text',
              text: `[Client Context: ${JSON.stringify(part.data)}]`,
            };
        },
      })),
    ],
    toolChoice: 'auto',
  });

  return createUIMessageStreamResponse({
    stream: toUIMessageStream({ stream: result.stream }),
  });
}

const searchTool = tool({
  description: 'Search the docs content and return raw JSON results.',
  inputSchema: z.object({
    query: z.string(),
    limit: z.number().int().min(1).max(100).default(10),
  }),
  async execute({ query, limit }) {
    const search = await searchServer;
    return await search.searchAsync(query, { limit, merge: true, enrich: true });
  },
}) satisfies SearchTool;