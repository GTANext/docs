import { t as BASE_PATH } from "./url-CWbf4MFh-BrwsO0CS.js";
import { t as createContentHighlighter } from "./search-DWZma9r9.js";
import { t as removeUndefined } from "./remove-undefined-CzMSKybq-DkhLi2pm.js";
import { create, getByID, load, search } from "@orama/orama";
//#region node_modules/.pnpm/fumadocs-core@16.11.5_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.5_@type_72cb31c98dbdcd9237f5eec6550b9329/node_modules/fumadocs-core/dist/advanced-BnqbPavQ.js
async function searchSimple(db, query, params = {}) {
	const highlighter = createContentHighlighter(query);
	return (await search(db, {
		term: query,
		tolerance: 1,
		...params,
		boost: {
			title: 2,
			..."boost" in params ? params.boost : void 0
		}
	})).hits.map((hit) => ({
		type: "page",
		content: highlighter.highlightMarkdown(hit.document.title),
		breadcrumbs: hit.document.breadcrumbs,
		id: hit.document.url,
		url: hit.document.url
	}));
}
async function searchAdvanced(db, query, tag = [], { mode = "fulltext", ...override } = {}) {
	if (typeof tag === "string") tag = [tag];
	const params = {
		limit: 60,
		mode,
		...override,
		where: removeUndefined({
			tags: tag.length > 0 ? { containsAll: tag } : void 0,
			...override.where
		}),
		groupBy: {
			properties: ["page_id"],
			maxResult: 8,
			...override.groupBy
		},
		properties: mode === "fulltext" ? ["content"] : ["content", "embeddings"]
	};
	if (query.length > 0) params.term = query;
	const highlighter = createContentHighlighter(query);
	const result = await search(db, params);
	const list = [];
	for (const item of result.groups ?? []) {
		const pageId = item.values[0];
		const page = getByID(db, pageId);
		if (!page) continue;
		list.push({
			id: pageId,
			type: "page",
			content: highlighter.highlightMarkdown(page.content),
			breadcrumbs: page.breadcrumbs,
			url: page.url
		});
		for (const hit of item.result) {
			if (hit.document.type === "page") continue;
			list.push({
				id: hit.document.id.toString(),
				content: highlighter.highlightMarkdown(hit.document.content),
				breadcrumbs: hit.document.breadcrumbs,
				type: hit.document.type,
				url: hit.document.url
			});
		}
	}
	if (typeof params.limit === "number" && list.length > params.limit) return list.slice(0, params.limit);
	return list;
}
//#endregion
//#region node_modules/.pnpm/fumadocs-core@16.11.5_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.5_@type_72cb31c98dbdcd9237f5eec6550b9329/node_modules/fumadocs-core/dist/search/client/orama-static.js
var cache = /* @__PURE__ */ new Map();
async function loadDB(from, initOrama = (locale) => create({
	schema: { _: "string" },
	language: locale
})) {
	const res = await fetch(from);
	if (!res.ok) throw new Error(`failed to fetch exported search indexes from ${from}, make sure the search database is exported and available for client.`);
	const data = await res.json();
	const dbs = /* @__PURE__ */ new Map();
	if (data.type === "i18n") await Promise.all(Object.entries(data.data).map(async ([k, v]) => {
		const db = await initOrama(k);
		load(db, v);
		dbs.set(k, {
			type: v.type,
			db
		});
	}));
	else {
		const db = await initOrama();
		load(db, data);
		dbs.set("", {
			type: data.type,
			db
		});
	}
	return dbs;
}
function getDBCached({ from = `${BASE_PATH}api/search`, initOrama }) {
	const cacheKey = from;
	const cached = cache.get(cacheKey);
	if (cached) return cached;
	const result = loadDB(from, initOrama);
	cache.set(cacheKey, result);
	return result;
}
function oramaStaticClient(options = {}) {
	const { tag, locale, search } = options;
	return {
		deps: [tag, locale],
		async search(query) {
			const dbs = await getDBCached(options);
			let db = dbs.get(locale ?? "");
			if (!db) {
				console.warn(`failed to find search data for "${locale}", available: ${Array.from(dbs.keys())}.`);
				db = dbs.values().next().value;
			}
			if (!db) return [];
			if (db.type === "simple") return searchSimple(db, query, search);
			return searchAdvanced(db.db, query, tag, search);
		}
	};
}
//#endregion
export { searchAdvanced as n, searchSimple as r, oramaStaticClient as t };
