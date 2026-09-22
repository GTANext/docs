//#region node_modules/.pnpm/fumadocs-core@16.11.5_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.5_@type_72cb31c98dbdcd9237f5eec6550b9329/node_modules/fumadocs-core/dist/remove-undefined-CzMSKybq.js
function removeUndefined(value, deep = false) {
	const obj = value;
	for (const key in obj) {
		if (obj[key] === void 0) delete obj[key];
		if (!deep) continue;
		const entry = obj[key];
		if (isPlainObject(entry)) {
			removeUndefined(entry, deep);
			continue;
		}
		if (Array.isArray(entry)) {
			for (const item of entry) if (isPlainObject(item)) removeUndefined(item, deep);
		}
	}
	return value;
}
function isPlainObject(value) {
	if (typeof value !== "object" || value === null) return false;
	const prototype = Object.getPrototypeOf(value);
	return prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null;
}
//#endregion
export { removeUndefined as t };
