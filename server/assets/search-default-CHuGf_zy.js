import { Xn as useI18n, a as SearchDialogFooter, c as SearchDialogInput, d as TagsList, f as TagsListItem, i as SearchDialogContent, l as SearchDialogList, m as useOnChange, n as SearchDialog, o as SearchDialogHeader, r as SearchDialogClose, s as SearchDialogIcon, t as useDocsSearch, u as SearchDialogOverlay } from "./client-CnbdGMVY.js";
import { t as fetchClient } from "./fetch-CZ3QT_Eu.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { use, useMemo, useState } from "react";
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/components/dialog/search-default.js
var STATIC;
function DefaultSearchDialog({ type, defaultTag, tags = [], api, delayMs, allowClear = false, links = [], footer, ...props }) {
	const { locale } = useI18n();
	const [tag, setTag] = useState(defaultTag);
	let client;
	if (type === "static") client = use(STATIC ??= import("./orama-static-DA9eusiD.js")).oramaStaticClient({
		from: api,
		locale,
		tag
	});
	else client = fetchClient({
		api,
		locale,
		tag
	});
	const { search, setSearch, query } = useDocsSearch({
		client,
		delayMs
	});
	const defaultItems = useMemo(() => {
		if (links.length === 0) return null;
		return links.map(([name, link]) => ({
			type: "page",
			id: name,
			content: name,
			url: link
		}));
	}, [links]);
	useOnChange(defaultTag, (v) => {
		setTag(v);
	});
	return /* @__PURE__ */ jsxs(SearchDialog, {
		search,
		onSearchChange: setSearch,
		isLoading: query.isLoading,
		...props,
		children: [
			/* @__PURE__ */ jsx(SearchDialogOverlay, {}),
			/* @__PURE__ */ jsxs(SearchDialogContent, { children: [/* @__PURE__ */ jsxs(SearchDialogHeader, { children: [
				/* @__PURE__ */ jsx(SearchDialogIcon, {}),
				/* @__PURE__ */ jsx(SearchDialogInput, {}),
				/* @__PURE__ */ jsx(SearchDialogClose, {})
			] }), /* @__PURE__ */ jsx(SearchDialogList, { items: query.data !== "empty" ? query.data : defaultItems })] }),
			/* @__PURE__ */ jsxs(SearchDialogFooter, { children: [tags.length > 0 && /* @__PURE__ */ jsx(TagsList, {
				tag,
				onTagChange: setTag,
				allowClear,
				children: tags.map((tag) => /* @__PURE__ */ jsx(TagsListItem, {
					value: tag.value,
					children: tag.name
				}, tag.value))
			}), footer] })
		]
	});
}
//#endregion
export { DefaultSearchDialog as default };
