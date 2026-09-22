import { t as BASE_PATH } from "./url-CWbf4MFh-BrwsO0CS.js";
//#region node_modules/.pnpm/fumadocs-core@16.11.5_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.5_@type_72cb31c98dbdcd9237f5eec6550b9329/node_modules/fumadocs-core/dist/search/client/fetch.js
var globalCache = /* @__PURE__ */ new Map();
function fetchClient({ api = `${BASE_PATH}api/search`, locale, tag, cache = globalCache } = {}) {
	return {
		deps: [
			api,
			locale,
			tag
		],
		async search(query) {
			const url = new URL(api, window.location.origin);
			url.searchParams.set("query", query);
			if (locale) url.searchParams.set("locale", locale);
			if (tag) url.searchParams.set("tag", Array.isArray(tag) ? tag.join(",") : tag);
			const key = url.toString();
			const cached = cache.get(key);
			if (cached) return cached;
			const res = await fetch(url);
			if (!res.ok) throw new Error(await res.text());
			const result = await res.json();
			cache.set(key, result);
			return result;
		}
	};
}
//#endregion
export { fetchClient as t };
