import { t as createContentHighlighter } from "./search-DWZma9r9.js";
//#region node_modules/.pnpm/fumadocs-core@16.11.5_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.5_@type_72cb31c98dbdcd9237f5eec6550b9329/node_modules/fumadocs-core/dist/search/client/algolia.js
function groupResults(hits) {
	const grouped = [];
	const scannedUrls = /* @__PURE__ */ new Set();
	for (const hit of hits) {
		if (!scannedUrls.has(hit.url)) {
			scannedUrls.add(hit.url);
			grouped.push({
				id: hit.url,
				type: "page",
				breadcrumbs: hit.breadcrumbs,
				url: hit.url,
				content: hit.title
			});
		}
		grouped.push({
			id: hit.objectID,
			type: hit.content === hit.section ? "heading" : "text",
			url: hit.section_id ? `${hit.url}#${hit.section_id}` : hit.url,
			content: hit.content
		});
	}
	return grouped;
}
function algoliaClient(options) {
	const { indexName, onSearch, client, locale, tag } = options;
	return {
		deps: [
			indexName,
			client,
			locale,
			tag
		],
		async search(query) {
			if (query.trim().length === 0) return [];
			const result = onSearch ? await onSearch(query, tag, locale) : await client.searchForHits({ requests: [{
				type: "default",
				indexName,
				query,
				distinct: 5,
				hitsPerPage: 10,
				filters: tag ? `tag:${tag}` : void 0
			}] });
			const highlighter = createContentHighlighter(query);
			return groupResults(result.results[0].hits).flatMap((hit) => {
				if (hit.type === "page") return {
					...hit,
					content: highlighter.highlightMarkdown(hit.content)
				};
				return [];
			});
		}
	};
}
//#endregion
export { algoliaClient };
