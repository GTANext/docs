import { t as __exportAll } from "./rolldown-runtime-D7D4PA-g.js";
import * as JsxRuntime from "react/jsx-runtime";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Fragment as Fragment$1, cloneElement, createContext, createElement, isValidElement, use, useCallback, useEffect, useEffectEvent, useMemo, useRef, useState } from "react";
import * as ReactDOM$1 from "react-dom";
import { useSyncExternalStore } from "use-sync-external-store/shim";
import { useSyncExternalStoreWithSelector } from "use-sync-external-store/shim/with-selector";
import { cn } from "cnfast";
import { cva } from "class-variance-authority";
import { ChevronRight, Hash, SearchIcon } from "lucide-react";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import minpath from "node:path";
import minproc from "node:process";
import { fileURLToPath as urlToPath } from "node:url";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { visit } from "unist-util-visit";
//#region node_modules/.pnpm/fumadocs-core@16.11.5_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.5_@type_72cb31c98dbdcd9237f5eec6550b9329/node_modules/fumadocs-core/dist/framework/index.js
var notImplemented = () => {
	throw new Error("You need to wrap your application inside `FrameworkProvider`.");
};
var FrameworkContext = createContext({
	useParams: notImplemented,
	useRouter: notImplemented,
	usePathname: notImplemented
});
function FrameworkProvider({ Link, useRouter, useParams, usePathname, Image, children }) {
	const framework = useMemo(() => ({
		usePathname,
		useRouter,
		Link,
		Image,
		useParams
	}), [
		Link,
		usePathname,
		useRouter,
		useParams,
		Image
	]);
	return /* @__PURE__ */ jsx(FrameworkContext, {
		value: framework,
		children
	});
}
function usePathname() {
	return use(FrameworkContext).usePathname();
}
function useRouter() {
	return use(FrameworkContext).useRouter();
}
function Image(props) {
	const { Image } = use(FrameworkContext);
	if (!Image) {
		const { src, alt, priority, ...rest } = props;
		return /* @__PURE__ */ jsx("img", {
			alt,
			src,
			fetchPriority: priority ? "high" : "auto",
			...rest
		});
	}
	return /* @__PURE__ */ jsx(Image, { ...props });
}
function Link(props) {
	const { Link } = use(FrameworkContext);
	if (!Link) {
		const { href, prefetch: _, ...rest } = props;
		return /* @__PURE__ */ jsx("a", {
			href,
			...rest
		});
	}
	return /* @__PURE__ */ jsx(Link, { ...props });
}
//#endregion
//#region node_modules/.pnpm/@fuma-translate+react@1.0.2_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@fuma-translate/react/dist/index.mjs
var Context = createContext({});
/** add translations, you can stack multiple <TranslationProvider /> to override/extend translations */
function TranslationProvider({ translations, children }) {
	const parent = use(Context);
	return /* @__PURE__ */ jsx(Context, {
		value: useMemo(() => ({
			...parent,
			...translations
		}), [parent, translations]),
		children
	});
}
var REGEX_VAR = /\\?\{([^}]+)\}/g;
function useTranslations({ note } = {}) {
	const translations = use(Context);
	return useMemo(() => fromTranslations(translations, { note }), [translations, note]);
}
/** create a translation function from a translations object (e.g. outside React) */
function fromTranslations(translations, { note: hookNote } = {}) {
	const res = (rawText, opts = {}) => {
		const { note, variables } = opts;
		const notes = [];
		if (hookNote) notes.push(hookNote);
		if (note) notes.push(note);
		let text = translations[encodeKey(rawText, notes)] ?? rawText;
		if (variables) text = text.replaceAll(REGEX_VAR, (m, name) => {
			if (m[0] === "\\") return m.slice(1);
			if (name in variables) return variables[name];
			return m;
		});
		return text;
	};
	res.jsx = (rawText, opts = {}) => {
		const { note, variables, tags } = opts;
		const notes = [];
		if (hookNote) notes.push(hookNote);
		if (note) notes.push(note);
		const text = translations[encodeKey(rawText, notes)] ?? rawText;
		if (tags) return onJsx(text, variables, tags);
		if (variables) return onJsxVariables(text, variables);
		return text;
	};
	res.translations = translations;
	return res;
}
function encodeKey(text, notes) {
	return text + notes.map((n) => `(${n})`).join("");
}
function onJsxVariables(text, variables) {
	let idx = 0;
	const out = [];
	for (const match of text.matchAll(REGEX_VAR)) {
		const [s, name] = match;
		if (idx < match.index) out.push(text.slice(idx, match.index));
		idx = match.index + s.length;
		if (s[0] === "\\") out.push(s.slice(1));
		else if (name in variables) out.push(enforceElementKey(variables[name], idx));
		else out.push(s);
	}
	out.push(text.slice(idx));
	return out;
}
var REGEX_TAG = /\\?<([^>]+)>/g;
function onJsx(text, variables, tags) {
	const stack = [{ children: [] }];
	let idx = 0;
	const closeTag = () => {
		const current = stack.pop();
		stack[stack.length - 1].children.push(enforceElementKey(current.tag && tags[current.tag] ? renderTag$1(tags[current.tag], current.children) : current.children, idx));
	};
	for (const match of text.matchAll(REGEX_TAG)) {
		const current = stack[stack.length - 1];
		const [s, content] = match;
		if (idx < match.index) {
			const str = text.slice(idx, match.index);
			current.children.push(variables ? onJsxVariables(str, variables) : str);
		}
		idx = match.index + s.length;
		if (s[0] === "\\") {
			const str = s.slice(1);
			current.children.push(variables ? onJsxVariables(str, variables) : str);
		} else if (content[0] === "/") {
			const name = content.slice(1);
			if (current.tag !== name) current.children.push(variables ? onJsxVariables(s, variables) : s);
			else closeTag();
		} else if (content.at(-1) === "/") {
			const name = content.slice(0, -1);
			if (tags[name]) current.children.push(enforceElementKey(renderTag$1(tags[name]), idx));
		} else stack.push({
			children: [],
			tag: content
		});
	}
	if (idx < text.length) {
		const str = text.slice(idx);
		stack[stack.length - 1].children.push(variables ? onJsxVariables(str, variables) : str);
	}
	while (stack.length > 1) closeTag();
	return stack[0].children;
}
function T({ text, note, variables, tags }) {
	const translations = use(Context);
	return useMemo(() => fromTranslations(translations).jsx(text, {
		note,
		variables,
		tags
	}), [
		translations,
		text,
		note,
		variables,
		tags
	]);
}
function renderTag$1(renderer, child) {
	if (isValidElement(renderer)) return child === void 0 ? renderer : cloneElement(renderer, void 0, child);
	return renderer(child);
}
function enforceElementKey(value, key) {
	if (isValidElement(value)) return cloneElement(value, { key });
	return value;
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/contexts/i18n.js
var LocaleContext = createContext({});
function useI18n() {
	return use(LocaleContext);
}
var Empty = {};
function I18nProvider({ locales = [], locale, onLocaleChange, children, translations = Empty }) {
	const router = useRouter();
	const pathname = usePathname();
	const onChange = (value) => {
		if (onLocaleChange) return onLocaleChange(value);
		const segments = pathname.split("/").filter((v) => v.length > 0);
		if (segments.length === 0 || segments[0] !== locale) segments.unshift(value);
		else segments[0] = value;
		router.push(`/${segments.join("/")}`);
	};
	const onChangeRef = useRef(onChange);
	onChangeRef.current = onChange;
	return /* @__PURE__ */ jsx(LocaleContext, {
		value: useMemo(() => ({
			locale,
			locales,
			onChange: (v) => onChangeRef.current(v)
		}), [locale, locales]),
		children: /* @__PURE__ */ jsx(TranslationProvider, {
			translations,
			children
		})
	});
}
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/formatErrorMessage.mjs
/**
* Creates a formatErrorMessage function with a custom URL and prefix.
* @param baseUrl - The base URL for the error page (e.g., 'https://base-ui.com/production-error')
* @param prefix - The prefix for the error message (e.g., 'Base UI')
* @returns A function that formats error messages with the given URL and prefix
*/
function createFormatErrorMessage(baseUrl, prefix) {
	return function formatErrorMessage(code, ...args) {
		const url = new URL(baseUrl);
		url.searchParams.set("code", code.toString());
		args.forEach((arg) => url.searchParams.append("args[]", arg));
		return `${prefix} error #${code}; visit ${url} for the full message.`;
	};
}
/**
* WARNING: Don't import this directly. It's imported by the code generated by
* `@mui/internal-babel-plugin-minify-errors`. Make sure to always use string literals in `Error`
* constructors to ensure the plugin works as expected. Supported patterns include:
*   throw new Error('My message');
*   throw new Error(`My message: ${foo}`);
*   throw new Error(`My message: ${foo}` + 'another string');
*   ...
*/
var formatErrorMessage = createFormatErrorMessage("https://base-ui.com/production-error", "Base UI");
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/dialog/root/DialogRootContext.mjs
var IsDrawerContext = /*#__PURE__*/ React.createContext(false);
if (process.env.NODE_ENV !== "production") IsDrawerContext.displayName = "IsDrawerContext";
var DialogRootContext = /*#__PURE__*/ React.createContext(void 0);
if (process.env.NODE_ENV !== "production") DialogRootContext.displayName = "DialogRootContext";
function useDialogRootContext(optional) {
	const dialogRootContext = React.useContext(DialogRootContext);
	if (optional === false && dialogRootContext === void 0) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: DialogRootContext is missing. Dialog parts must be placed within <Dialog.Root>." : formatErrorMessage(27));
	return dialogRootContext;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/useRefWithInit.mjs
var UNINITIALIZED = {};
/**
* A React.useRef() that is initialized with a function. Note that it accepts an optional
* initialization argument, so the initialization function doesn't need to be an inline closure.
*
* @usage
*   const ref = useRefWithInit(sortColumns, columns)
*/
function useRefWithInit(init, initArg) {
	const ref = React.useRef(UNINITIALIZED);
	if (ref.current === UNINITIALIZED) ref.current = init(initArg);
	return ref;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/useMergedRefs.mjs
/**
* Merges refs into a single memoized callback ref or `null`.
* This makes sure multiple refs are updated together and have the same value.
*
* This function accepts up to four refs. If you need to merge more, or have an unspecified number of refs to merge,
* use `useMergedRefsN` instead.
*/
function useMergedRefs(a, b, c, d) {
	const forkRef = useRefWithInit(createForkRef).current;
	if (didChange(forkRef, a, b, c, d)) update(forkRef, [
		a,
		b,
		c,
		d
	]);
	return forkRef.callback;
}
/**
* Merges an array of refs into a single memoized callback ref or `null`.
*
* If you need to merge a fixed number (up to four) of refs, use `useMergedRefs` instead for better performance.
*/
function useMergedRefsN(refs) {
	const forkRef = useRefWithInit(createForkRef).current;
	if (didChangeN(forkRef, refs)) update(forkRef, refs);
	return forkRef.callback;
}
function createForkRef() {
	return {
		callback: null,
		cleanup: null,
		refs: []
	};
}
function didChange(forkRef, a, b, c, d) {
	return forkRef.refs[0] !== a || forkRef.refs[1] !== b || forkRef.refs[2] !== c || forkRef.refs[3] !== d;
}
function didChangeN(forkRef, newRefs) {
	return forkRef.refs.length !== newRefs.length || forkRef.refs.some((ref, index) => ref !== newRefs[index]);
}
function update(forkRef, refs) {
	forkRef.refs = refs;
	if (refs.every((ref) => ref == null)) {
		forkRef.callback = null;
		return;
	}
	forkRef.callback = (instance) => {
		if (forkRef.cleanup) {
			forkRef.cleanup();
			forkRef.cleanup = null;
		}
		if (instance != null) {
			const cleanupCallbacks = Array(refs.length).fill(null);
			for (let i = 0; i < refs.length; i += 1) {
				const ref = refs[i];
				if (ref == null) continue;
				switch (typeof ref) {
					case "function": {
						const refCleanup = ref(instance);
						if (typeof refCleanup === "function") cleanupCallbacks[i] = refCleanup;
						break;
					}
					case "object": ref.current = instance;
				}
			}
			forkRef.cleanup = () => {
				for (let i = 0; i < refs.length; i += 1) {
					const ref = refs[i];
					if (ref == null) continue;
					switch (typeof ref) {
						case "function": {
							const cleanupCallback = cleanupCallbacks[i];
							if (typeof cleanupCallback === "function") cleanupCallback();
							else ref(null);
							break;
						}
						case "object": ref.current = null;
					}
				}
			};
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/reactVersion.mjs
var majorVersion = parseInt(React.version, 10);
function isReactVersionAtLeast(reactVersionToCheck) {
	return majorVersion >= reactVersionToCheck;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/getReactElementRef.mjs
/**
* Extracts the `ref` from a React element, handling different React versions.
*/
function getReactElementRef(element) {
	if (!/*#__PURE__*/ React.isValidElement(element)) return null;
	const reactElement = element;
	const propsWithRef = reactElement.props;
	return (isReactVersionAtLeast(19) ? propsWithRef?.ref : reactElement.ref) ?? null;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/mergeObjects.mjs
function mergeObjects(a, b) {
	if (a && !b) return a;
	if (!a && b) return b;
	if (a || b) return {
		...a,
		...b
	};
}
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/warn.mjs
var set;
if (process.env.NODE_ENV !== "production") set = /* @__PURE__ */ new Set();
function warn(...messages) {
	if (process.env.NODE_ENV !== "production") {
		const messageKey = messages.join(" ");
		if (!set.has(messageKey)) {
			set.add(messageKey);
			console.warn(`Base UI: ${messageKey}`);
		}
	}
}
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/empty.mjs
function NOOP() {}
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/internals/getStateAttributesProps.mjs
function getStateAttributesProps(state, customMapping) {
	const props = {};
	for (const key in state) {
		const value = state[key];
		if (customMapping?.hasOwnProperty(key)) {
			const customProps = customMapping[key](value);
			if (customProps != null) Object.assign(props, customProps);
			continue;
		}
		if (value === true) props[`data-${key.toLowerCase()}`] = "";
		else if (value) props[`data-${key.toLowerCase()}`] = value.toString();
	}
	return props;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/utils/resolveClassName.mjs
/**
* If the provided className is a string, it will be returned as is.
* Otherwise, the function will call the className function with the state as the first argument.
*
* @param className
* @param state
*/
function resolveClassName(className, state) {
	return typeof className === "function" ? className(state) : className;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/utils/resolveStyle.mjs
/**
* If the provided style is an object, it will be returned as is.
* Otherwise, the function will call the style function with the state as the first argument.
*
* @param style
* @param state
*/
function resolveStyle(style, state) {
	return typeof style === "function" ? style(state) : style;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/merge-props/mergeProps.mjs
var EMPTY_PROPS = {};
/**
* Merges multiple sets of React props. It follows the Object.assign pattern where the rightmost object's fields overwrite
* the conflicting ones from others. This doesn't apply to event handlers, `className` and `style` props.
*
* Event handlers are merged and called in right-to-left order (rightmost handler executes first, leftmost last).
* For React synthetic events, the rightmost handler can prevent prior (left-positioned) handlers from executing
* by calling `event.preventBaseUIHandler()`. For non-synthetic events (custom events with primitive/object values),
* all handlers always execute without prevention capability.
*
* The `className` prop is merged by concatenating classes in right-to-left order (rightmost class appears first in the string).
* The `style` prop is merged with rightmost styles overwriting the prior ones.
*
* Props can either be provided as objects or as functions that take the previous props as an argument.
* The function will receive the merged props up to that point (going from left to right):
* so in the case of `(obj1, obj2, fn, obj3)`, `fn` will receive the merged props of `obj1` and `obj2`.
* The function is responsible for chaining event handlers if needed (that is, we don't run the merge logic).
*
* Event handlers returned by the functions are not automatically prevented when `preventBaseUIHandler` is called.
* They must check `event.baseUIHandlerPrevented` themselves and bail out if it's true.
*
* @important **`ref` is not merged.**
* @param a Props object to merge.
* @param b Props object to merge. The function will overwrite conflicting props from `a`.
* @param c Props object to merge. The function will overwrite conflicting props from previous parameters.
* @param d Props object to merge. The function will overwrite conflicting props from previous parameters.
* @param e Props object to merge. The function will overwrite conflicting props from previous parameters.
* @returns The merged props.
* @public
*/
function mergeProps(a, b, c, d, e) {
	if (!c && !d && !e && !a) return createInitialMergedProps(b);
	let merged = createInitialMergedProps(a);
	if (b) merged = mergeInto(merged, b);
	if (c) merged = mergeInto(merged, c);
	if (d) merged = mergeInto(merged, d);
	if (e) merged = mergeInto(merged, e);
	return merged;
}
/**
* Merges an arbitrary number of React props using the same logic as {@link mergeProps}.
* This function accepts an array of props instead of individual arguments.
*
* This has slightly lower performance than {@link mergeProps} due to accepting an array
* instead of a fixed number of arguments. Prefer {@link mergeProps} when merging 5 or
* fewer prop sets for better performance.
*
* @param props Array of props to merge.
* @returns The merged props.
* @see mergeProps
* @public
*/
function mergePropsN(props) {
	if (props.length === 0) return EMPTY_PROPS;
	if (props.length === 1) return createInitialMergedProps(props[0]);
	let merged = createInitialMergedProps(props[0]);
	for (let i = 1; i < props.length; i += 1) merged = mergeInto(merged, props[i]);
	return merged;
}
function createInitialMergedProps(inputProps) {
	if (isPropsGetter(inputProps)) return { ...resolvePropsGetter(inputProps, EMPTY_PROPS) };
	return copyInitialProps(inputProps);
}
function mergeInto(merged, inputProps) {
	if (isPropsGetter(inputProps)) return resolvePropsGetter(inputProps, merged);
	return mutablyMergeInto(merged, inputProps);
}
function copyInitialProps(inputProps) {
	const copiedProps = { ...inputProps };
	for (const propName in copiedProps) {
		const propValue = copiedProps[propName];
		if (isEventHandler(propName, propValue)) copiedProps[propName] = wrapEventHandler(propValue);
	}
	return copiedProps;
}
/**
* Merges two sets of props. In case of conflicts, the external props take precedence.
*/
function mutablyMergeInto(mergedProps, externalProps) {
	if (!externalProps) return mergedProps;
	for (const propName in externalProps) {
		const externalPropValue = externalProps[propName];
		switch (propName) {
			case "style":
				mergedProps[propName] = mergeObjects(mergedProps.style, externalPropValue);
				break;
			case "className":
				mergedProps[propName] = mergeClassNames(mergedProps.className, externalPropValue);
				break;
			default: if (isEventHandler(propName, externalPropValue)) mergedProps[propName] = mergeEventHandlers(mergedProps[propName], externalPropValue);
			else mergedProps[propName] = externalPropValue;
		}
	}
	return mergedProps;
}
function isEventHandler(key, value) {
	const code0 = key.charCodeAt(0);
	const code1 = key.charCodeAt(1);
	const code2 = key.charCodeAt(2);
	return code0 === 111 && code1 === 110 && code2 >= 65 && code2 <= 90 && (typeof value === "function" || typeof value === "undefined");
}
function isPropsGetter(inputProps) {
	return typeof inputProps === "function";
}
function resolvePropsGetter(inputProps, previousProps) {
	if (isPropsGetter(inputProps)) return inputProps(previousProps);
	return inputProps ?? EMPTY_PROPS;
}
function mergeEventHandlers(ourHandler, theirHandler) {
	if (!theirHandler) return ourHandler;
	if (!ourHandler) return wrapEventHandler(theirHandler);
	return (...args) => {
		const event = args[0];
		if (isSyntheticEvent(event)) {
			const baseUIEvent = event;
			makeEventPreventable(baseUIEvent);
			const result = theirHandler(...args);
			if (!baseUIEvent.baseUIHandlerPrevented) ourHandler?.(...args);
			return result;
		}
		const result = theirHandler(...args);
		ourHandler?.(...args);
		return result;
	};
}
function wrapEventHandler(handler) {
	if (!handler) return handler;
	return (...args) => {
		const event = args[0];
		if (isSyntheticEvent(event)) makeEventPreventable(event);
		return handler(...args);
	};
}
function makeEventPreventable(event) {
	event.preventBaseUIHandler = () => {
		event.baseUIHandlerPrevented = true;
	};
	return event;
}
function mergeClassNames(ourClassName, theirClassName) {
	if (theirClassName) {
		if (ourClassName) return theirClassName + " " + ourClassName;
		return theirClassName;
	}
	return ourClassName;
}
function isSyntheticEvent(event) {
	return event != null && typeof event === "object" && "nativeEvent" in event;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/internals/useRenderElement.mjs
/**
* Renders a Base UI element.
*
* @param element The default HTML element to render. Can be overridden by the `render` prop.
* @param componentProps An object containing the `render` and `className` props to be used for element customization. Other props are ignored.
* @param params Additional parameters for rendering the element.
*/
function useRenderElement(element, componentProps, params = {}) {
	const renderProp = componentProps.render;
	const outProps = useRenderElementProps(componentProps, params);
	if (params.enabled === false) return null;
	return evaluateRenderProp(element, renderProp, outProps, params.state ?? EMPTY_OBJECT);
}
/**
* Computes render element final props.
*/
function useRenderElementProps(componentProps, params = {}) {
	const { className: classNameProp, style: styleProp, render: renderProp } = componentProps;
	const { state = EMPTY_OBJECT, ref, props, stateAttributesMapping, enabled = true } = params;
	const className = enabled ? resolveClassName(classNameProp, state) : void 0;
	const style = enabled ? resolveStyle(styleProp, state) : void 0;
	const stateProps = enabled ? getStateAttributesProps(state, stateAttributesMapping) : EMPTY_OBJECT;
	const resolvedProps = enabled && props ? resolveRenderFunctionProps(props) : void 0;
	const outProps = enabled ? mergeObjects(stateProps, resolvedProps) ?? {} : EMPTY_OBJECT;
	if (typeof document !== "undefined") {
		if (!enabled) useMergedRefs(null, null);
		else if (Array.isArray(ref)) outProps.ref = useMergedRefsN([
			outProps.ref,
			getReactElementRef(renderProp),
			...ref
		]);
		else outProps.ref = useMergedRefs(outProps.ref, getReactElementRef(renderProp), ref);
	}
	if (!enabled) return EMPTY_OBJECT;
	if (className !== void 0) outProps.className = mergeClassNames(outProps.className, className);
	if (style !== void 0) outProps.style = mergeObjects(outProps.style, style);
	return outProps;
}
function resolveRenderFunctionProps(props) {
	if (Array.isArray(props)) return mergePropsN(props);
	return mergeProps(void 0, props);
}
var REACT_LAZY_TYPE = Symbol.for("react.lazy");
var COMPONENT_IDENTIFIER_PATTERN = /^[A-Z][A-Za-z0-9$]*$/;
var LOWERCASE_CHARACTER_PATTERN = /[a-z]/;
function evaluateRenderProp(element, render, props, state) {
	if (render) {
		if (typeof render === "function") {
			if (process.env.NODE_ENV !== "production") warnIfRenderPropLooksLikeComponent(render);
			return render(props, state);
		}
		const mergedProps = mergeProps(props, render.props);
		mergedProps.ref = props.ref;
		let newElement = render;
		if (newElement?.$$typeof === REACT_LAZY_TYPE) newElement = React.Children.toArray(render)[0];
		if (process.env.NODE_ENV !== "production") {
			if (!/*#__PURE__*/ React.isValidElement(newElement)) throw new Error([
				"Base UI: The `render` prop was provided an invalid React element as `React.isValidElement(render)` is `false`.",
				"A valid React element must be provided to the `render` prop because it is cloned with props to replace the default element.",
				"https://base-ui.com/r/invalid-render-prop"
			].join("\n"));
		}
		return /*#__PURE__*/ React.cloneElement(newElement, mergedProps);
	}
	if (element) {
		if (typeof element === "string") return renderTag(element, props);
	}
	throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: Render element or function are not defined." : formatErrorMessage(8));
}
function warnIfRenderPropLooksLikeComponent(renderFn) {
	const functionName = renderFn.name;
	if (functionName.length === 0) return;
	if (!COMPONENT_IDENTIFIER_PATTERN.test(functionName)) return;
	if (!LOWERCASE_CHARACTER_PATTERN.test(functionName)) return;
	warn(`The \`render\` prop received a function named \`${functionName}\` that starts with an uppercase letter.`, "This usually means a React component was passed directly as `render={Component}`.", "Base UI calls `render` as a plain function, which can break the Rules of Hooks during reconciliation.", "If this is an intentional render callback, rename it to start with a lowercase letter.", "Use `render={<Component />}` or `render={(props) => <Component {...props} />}` instead.", "https://base-ui.com/r/invalid-render-prop");
}
function renderTag(Tag, props) {
	if (Tag === "button") return /*#__PURE__*/ createElement("button", {
		type: "button",
		...props,
		key: props.key
	});
	if (Tag === "img") return /*#__PURE__*/ createElement("img", {
		alt: "",
		...props,
		key: props.key
	});
	return /*#__PURE__*/ React.createElement(Tag, props);
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/internals/stateAttributesMapping.mjs
var TransitionStatusDataAttributes = /*#__PURE__*/ function(TransitionStatusDataAttributes) {
	/**
	* Present when the component is animating in.
	*/
	TransitionStatusDataAttributes["startingStyle"] = "data-starting-style";
	/**
	* Present when the component is animating out.
	*/
	TransitionStatusDataAttributes["endingStyle"] = "data-ending-style";
	return TransitionStatusDataAttributes;
}({});
var STARTING_HOOK = { [TransitionStatusDataAttributes.startingStyle]: "" };
var ENDING_HOOK = { [TransitionStatusDataAttributes.endingStyle]: "" };
var transitionStatusMapping = { transitionStatus(value) {
	if (value === "starting") return STARTING_HOOK;
	if (value === "ending") return ENDING_HOOK;
	return null;
} };
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/utils/popupStateMapping.mjs
var CommonPopupDataAttributes = function(CommonPopupDataAttributes) {
	/**
	* Present when the popup is open.
	*/
	CommonPopupDataAttributes["open"] = "data-open";
	/**
	* Present when the popup is closed.
	*/
	CommonPopupDataAttributes["closed"] = "data-closed";
	/**
	* Present when the popup is animating in.
	*/
	CommonPopupDataAttributes[CommonPopupDataAttributes["startingStyle"] = TransitionStatusDataAttributes.startingStyle] = "startingStyle";
	/**
	* Present when the popup is animating out.
	*/
	CommonPopupDataAttributes[CommonPopupDataAttributes["endingStyle"] = TransitionStatusDataAttributes.endingStyle] = "endingStyle";
	/**
	* Present when the anchor is hidden.
	*/
	CommonPopupDataAttributes["anchorHidden"] = "data-anchor-hidden";
	/**
	* Indicates which side the popup is positioned relative to the trigger.
	* @type { 'top' | 'bottom' | 'left' | 'right' | 'inline-end' | 'inline-start'}
	*/
	CommonPopupDataAttributes["side"] = "data-side";
	/**
	* Indicates how the popup is aligned relative to specified side.
	* @type {'start' | 'center' | 'end'}
	*/
	CommonPopupDataAttributes["align"] = "data-align";
	return CommonPopupDataAttributes;
}({});
var CommonTriggerDataAttributes = /*#__PURE__*/ function(CommonTriggerDataAttributes) {
	/**
	* Present when the popup is open.
	*/
	CommonTriggerDataAttributes["popupOpen"] = "data-popup-open";
	/**
	* Present when a pressable trigger is pressed.
	*/
	CommonTriggerDataAttributes["pressed"] = "data-pressed";
	return CommonTriggerDataAttributes;
}({});
var TRIGGER_HOOK = { [CommonTriggerDataAttributes.popupOpen]: "" };
var PRESSABLE_TRIGGER_HOOK = {
	[CommonTriggerDataAttributes.popupOpen]: "",
	[CommonTriggerDataAttributes.pressed]: ""
};
var POPUP_OPEN_HOOK = { [CommonPopupDataAttributes.open]: "" };
var POPUP_CLOSED_HOOK = { [CommonPopupDataAttributes.closed]: "" };
var ANCHOR_HIDDEN_HOOK = { [CommonPopupDataAttributes.anchorHidden]: "" };
var triggerOpenStateMapping = { open(value) {
	if (value) return TRIGGER_HOOK;
	return null;
} };
var pressableTriggerOpenStateMapping = { open(value) {
	if (value) return PRESSABLE_TRIGGER_HOOK;
	return null;
} };
var popupStateMapping = {
	open(value) {
		if (value) return POPUP_OPEN_HOOK;
		return POPUP_CLOSED_HOOK;
	},
	anchorHidden(value) {
		if (value) return ANCHOR_HIDDEN_HOOK;
		return null;
	}
};
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/dialog/backdrop/DialogBackdrop.mjs
var stateAttributesMapping$1 = {
	...popupStateMapping,
	...transitionStatusMapping
};
/**
* An overlay displayed beneath the popup.
* Renders a `<div>` element.
*
* Documentation: [Base UI Dialog](https://base-ui.com/react/components/dialog)
*/
var DialogBackdrop = /*#__PURE__*/ React.forwardRef(function DialogBackdrop(componentProps, forwardedRef) {
	const { render, className, style, forceRender = false, ...elementProps } = componentProps;
	const { store } = useDialogRootContext();
	const open = store.useState("open");
	const nested = store.useState("nested");
	const mounted = store.useState("mounted");
	return useRenderElement("div", componentProps, {
		state: {
			open,
			transitionStatus: store.useState("transitionStatus")
		},
		ref: [store.context.backdropRef, forwardedRef],
		stateAttributesMapping: stateAttributesMapping$1,
		props: [{
			role: "presentation",
			hidden: !mounted,
			style: {
				userSelect: "none",
				WebkitUserSelect: "none"
			}
		}, elementProps],
		enabled: forceRender || !nested
	});
});
if (process.env.NODE_ENV !== "production") DialogBackdrop.displayName = "DialogBackdrop";
//#endregion
//#region node_modules/.pnpm/@floating-ui+utils@0.2.12/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
	return typeof window !== "undefined";
}
function getNodeName(node) {
	if (isNode(node)) return (node.nodeName || "").toLowerCase();
	return "#document";
}
function getWindow(node) {
	var _node$ownerDocument;
	return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
	var _ref;
	return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
	if (!hasWindow()) return false;
	return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
	if (!hasWindow()) return false;
	return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
	if (!hasWindow()) return false;
	return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
	if (!hasWindow() || typeof ShadowRoot === "undefined") return false;
	return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
	const { overflow, overflowX, overflowY, display } = getComputedStyle$1(element);
	return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && display !== "inline" && display !== "contents";
}
function isTableElement(element) {
	return /^(table|td|th)$/.test(getNodeName(element));
}
function isTopLayer(element) {
	try {
		if (element.matches(":popover-open")) return true;
	} catch (_e) {}
	try {
		return element.matches(":modal");
	} catch (_e) {
		return false;
	}
}
var willChangeRe = /transform|translate|scale|rotate|perspective|filter/;
var containRe = /paint|layout|strict|content/;
var isNotNone = (value) => !!value && value !== "none";
var isWebKitValue;
function isContainingBlock(elementOrCss) {
	const css = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;
	return isNotNone(css.transform) || isNotNone(css.translate) || isNotNone(css.scale) || isNotNone(css.rotate) || isNotNone(css.perspective) || !isWebKit() && (isNotNone(css.backdropFilter) || isNotNone(css.filter)) || willChangeRe.test(css.willChange || "") || containRe.test(css.contain || "");
}
function getContainingBlock(element) {
	let currentNode = getParentNode(element);
	while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
		if (isContainingBlock(currentNode)) return currentNode;
		else if (isTopLayer(currentNode)) return null;
		currentNode = getParentNode(currentNode);
	}
	return null;
}
function isWebKit() {
	if (isWebKitValue == null) isWebKitValue = typeof CSS !== "undefined" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
	return isWebKitValue;
}
function isLastTraversableNode(node) {
	return /^(html|body|#document)$/.test(getNodeName(node));
}
function getComputedStyle$1(element) {
	return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
	if (isElement(element)) return {
		scrollLeft: element.scrollLeft,
		scrollTop: element.scrollTop
	};
	return {
		scrollLeft: element.scrollX,
		scrollTop: element.scrollY
	};
}
function getParentNode(node) {
	if (getNodeName(node) === "html") return node;
	const result = node.assignedSlot || node.parentNode || isShadowRoot(node) && node.host || getDocumentElement(node);
	return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
	const parentNode = getParentNode(node);
	if (isLastTraversableNode(parentNode)) return (node.ownerDocument || node).body;
	if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) return parentNode;
	return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
	var _node$ownerDocument2;
	if (list === void 0) list = [];
	if (traverseIframes === void 0) traverseIframes = true;
	const scrollableAncestor = getNearestOverflowAncestor(node);
	const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
	const win = getWindow(scrollableAncestor);
	if (isBody) {
		const frameElement = getFrameElement(win);
		return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
	} else return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
	return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/safeReact.mjs
/**
* A clone of the React namespace for reading APIs that may be missing in older
* supported React versions. Bundlers can rewrite direct `React.someNewApi`
* reads into named imports, which breaks React 17. Reading from this cloned
* object keeps those lookups optional.
*
* @see https://github.com/mui/material-ui/issues/41190#issuecomment-2040873379
*/
var SafeReact = { ...React };
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/useStableCallback.mjs
var useInsertionEffect = SafeReact.useInsertionEffect;
var useSafeInsertionEffect = useInsertionEffect && useInsertionEffect !== SafeReact.useLayoutEffect ? useInsertionEffect : (fn) => fn();
/**
* Stabilizes the function passed so it's always the same between renders.
*
* The function becomes non-reactive to any values it captures.
* It can safely be passed as a dependency of `React.useMemo` and `React.useEffect` without re-triggering them if its captured values change.
*
* The function must only be called inside effects and event handlers, never during render (which throws an error).
*
* This hook is a more permissive version of React 19.2's `React.useEffectEvent` in that it can be passed through contexts and called in event handler props, not just effects.
*/
function useStableCallback(callback) {
	const stable = useRefWithInit(createStableCallback).current;
	stable.next = callback;
	useSafeInsertionEffect(stable.effect);
	return stable.trampoline;
}
function createStableCallback() {
	const stable = {
		next: void 0,
		callback: assertNotCalled,
		trampoline: (...args) => stable.callback?.(...args),
		effect: () => {
			stable.callback = stable.next;
		}
	};
	return stable;
}
function assertNotCalled() {
	if (process.env.NODE_ENV !== "production") throw new Error("Base UI: Cannot call an event handler while rendering.");
}
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/useIsoLayoutEffect.mjs
var noop = () => {};
var useIsoLayoutEffect = typeof document !== "undefined" ? React.useLayoutEffect : noop;
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/internals/reason-parts.mjs
var none = "none";
var triggerPress = "trigger-press";
var triggerHover = "trigger-hover";
var outsidePress = "outside-press";
var closePress = "close-press";
var linkPress = "link-press";
var focusOut = "focus-out";
var escapeKey = "escape-key";
var listNavigation = "list-navigation";
var disabled = "disabled";
var missing = "missing";
var initial = "initial";
var imperativeAction = "imperative-action";
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/internals/createBaseUIEventDetails.mjs
/**
* Maps a change `reason` string to the corresponding native event type.
*/
/**
* Details of custom change events emitted by Base UI components.
*/
/**
* Details of custom generic events emitted by Base UI components.
*/
/**
* Creates a Base UI event details object with the given reason and utilities
* for preventing Base UI's internal event handling.
*/
function createChangeEventDetails(reason, event, trigger, customProperties) {
	let canceled = false;
	let allowPropagation = false;
	const custom = customProperties ?? EMPTY_OBJECT;
	return {
		reason,
		event: event ?? new Event("base-ui"),
		cancel() {
			canceled = true;
		},
		allowPropagation() {
			allowPropagation = true;
		},
		get isCanceled() {
			return canceled;
		},
		get isPropagationAllowed() {
			return allowPropagation;
		},
		trigger,
		...custom
	};
}
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/useId.mjs
var globalId = 0;
function useGlobalId(idOverride, prefix = "mui") {
	const [defaultId, setDefaultId] = React.useState(idOverride);
	const id = idOverride || defaultId;
	React.useEffect(() => {
		if (defaultId == null) {
			globalId += 1;
			setDefaultId(`${prefix}-${globalId}`);
		}
	}, [defaultId, prefix]);
	return id;
}
var maybeReactUseId = SafeReact.useId;
/**
*
* @example <div id={useId()} />
* @param idOverride
* @returns {string}
*/
function useId$1(idOverride, prefix) {
	if (maybeReactUseId !== void 0) {
		const reactId = maybeReactUseId();
		return idOverride ?? (prefix ? `${prefix}-${reactId}` : reactId);
	}
	return useGlobalId(idOverride, prefix);
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/internals/useBaseUiId.mjs
/**
* Wraps `useId` and prefixes generated `id`s with `base-ui-`
* @param {string | undefined} idOverride overrides the generated id when provided
* @returns {string | undefined}
*/
function useBaseUiId(idOverride) {
	return useId$1(idOverride, "base-ui");
}
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/useOnMount.mjs
var EMPTY$3 = [];
/**
* A React.useEffect equivalent that runs once, when the component is mounted.
*/
function useOnMount(fn) {
	React.useEffect(fn, EMPTY$3);
}
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/useTimeout.mjs
var EMPTY$2 = 0;
var Timeout = class Timeout {
	static create() {
		return new Timeout();
	}
	currentId = EMPTY$2;
	/**
	* Executes `fn` after `delay`, clearing any previously scheduled call.
	*/
	start(delay, fn) {
		this.clear();
		this.currentId = setTimeout(() => {
			this.currentId = EMPTY$2;
			fn();
		}, delay);
	}
	isStarted() {
		return this.currentId !== EMPTY$2;
	}
	clear = () => {
		if (this.currentId !== EMPTY$2) {
			clearTimeout(this.currentId);
			this.currentId = EMPTY$2;
		}
	};
	disposeEffect = () => {
		return this.clear;
	};
};
/**
* A `setTimeout` with automatic cleanup and guard.
*/
function useTimeout() {
	const timeout = useRefWithInit(Timeout.create).current;
	useOnMount(timeout.disposeEffect);
	return timeout;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/platform/shared.mjs
/**
* Reads `navigator.userAgent` / `navigator.platform` (legacy but universally
* supported) into a normalized shape. In development, prefers the modern
* `navigator.userAgentData` API on Chromium to avoid DevTools warnings about
* the deprecated reads; that branch is dead-code-eliminated in production
* builds to keep the bundle small.
*
* Returns empty/zero values when `navigator` is undefined (SSR), so every
* derived flag safely evaluates to `false`.
*/
function readRawData() {
	if (typeof navigator === "undefined") return {
		userAgent: "",
		platform: "",
		maxTouchPoints: 0
	};
	if (process.env.NODE_ENV !== "production") {
		const uaData = navigator.userAgentData;
		if (uaData && Array.isArray(uaData.brands)) return {
			userAgent: uaData.brands.map(({ brand, version }) => `${brand}/${version}`).join(" "),
			platform: uaData.platform ?? navigator.platform ?? "",
			maxTouchPoints: navigator.maxTouchPoints ?? 0
		};
	}
	return {
		userAgent: navigator.userAgent,
		platform: navigator.platform ?? "",
		maxTouchPoints: navigator.maxTouchPoints ?? 0
	};
}
var { userAgent, platform, maxTouchPoints } = readRawData();
var lowerUserAgent = userAgent.toLowerCase();
var lowerPlatform = platform.toLowerCase();
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/platform/os.mjs
/** iPhone, iPad (including iPadOS 13+ reporting as macOS), iPod. */
var ios = /^i(os$|p)/.test(lowerPlatform) || lowerPlatform === "macintel" && maxTouchPoints > 1;
/** Android phones, tablets, and embedded Android browsers. */
var ANDROID_STRING = "android";
var android = lowerPlatform === ANDROID_STRING || lowerUserAgent.includes(ANDROID_STRING);
/** macOS desktop. Excludes iPadOS, which reports as `MacIntel`. */
var mac = !ios && lowerPlatform.startsWith("mac");
lowerPlatform.startsWith("win");
!android && /^(linux|chrome os)/.test(lowerPlatform);
/** Any Apple OS (`mac || ios`). */
var apple = mac || ios;
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/platform/engine.mjs
/** WebKit: Safari, all iOS browsers, GNOME Web. Excludes Blink. */
var webkit = typeof CSS !== "undefined" && !!CSS.supports?.("-webkit-backdrop-filter:none");
!webkit && lowerUserAgent.includes("firefox");
!webkit && lowerUserAgent.includes("chrom");
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/platform/screen-reader.mjs
/**
* The user *may* be using VoiceOver — actual activation is not detectable.
* True on any Apple platform (macOS, iOS, iPadOS).
*/
var voiceOver = apple;
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/platform/env.mjs
/** Running in jsdom or HappyDOM (used by unit tests). */
var jsdom = /jsdom|happydom/.test(lowerUserAgent);
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/floating-ui-react/utils/event.mjs
function stopEvent(event) {
	event.preventDefault();
	event.stopPropagation();
}
function isReactEvent(event) {
	return "nativeEvent" in event;
}
function isVirtualClick(event) {
	if (event.pointerType === "" && event.isTrusted) return true;
	if (android && event.pointerType) return event.type === "click" && event.buttons === 1;
	return event.detail === 0 && !event.pointerType;
}
function isVirtualPointerEvent(event) {
	if (jsdom) return false;
	return !android && event.width === 0 && event.height === 0 || android && event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "mouse" || event.width < 1 && event.height < 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "touch";
}
function isMouseLikePointerType(pointerType, strict) {
	const values = ["mouse", "pen"];
	if (!strict) values.push("", void 0);
	return values.includes(pointerType);
}
function isClickLikeEvent(event) {
	const type = event.type;
	return type === "click" || type === "mousedown" || type === "keydown" || type === "keyup";
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/floating-ui-react/utils/constants.mjs
var FOCUSABLE_ATTRIBUTE = "data-base-ui-focusable";
var TYPEABLE_SELECTOR = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/internals/shadowDom.mjs
function activeElement(doc) {
	let element = doc.activeElement;
	while (element?.shadowRoot?.activeElement != null) element = element.shadowRoot.activeElement;
	return element;
}
function contains(parent, child) {
	if (!parent || !child) return false;
	const rootNode = child.getRootNode?.();
	if (parent.contains(child)) return true;
	if (rootNode && isShadowRoot(rootNode)) {
		let next = child;
		while (next) {
			if (parent === next) return true;
			next = next.parentNode || next.host;
		}
	}
	return false;
}
function getTarget(event) {
	if ("composedPath" in event) return event.composedPath()[0];
	return event.target;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/floating-ui-react/utils/element.mjs
function isTargetInsideEnabledTrigger(target, triggerElements) {
	if (!isElement(target)) return false;
	const targetElement = target;
	if (triggerElements.hasElement(targetElement)) return !targetElement.hasAttribute("data-trigger-disabled");
	for (const [, trigger] of triggerElements.entries()) if (contains(trigger, targetElement)) return !trigger.hasAttribute("data-trigger-disabled");
	return false;
}
function isEventTargetWithin(event, node) {
	if (node == null) return false;
	if ("composedPath" in event) return event.composedPath().includes(node);
	const eventAgain = event;
	return eventAgain.target != null && node.contains(eventAgain.target);
}
function isRootElement(element) {
	return element.matches("html,body");
}
function isTypeableElement(element) {
	return isHTMLElement(element) && element.matches("input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])");
}
function isInteractiveElement(element) {
	return element?.closest(`button,a[href],[role="button"],select,[tabindex]:not([tabindex="-1"]),${TYPEABLE_SELECTOR}`) != null;
}
function isTypeableCombobox(element) {
	if (!element) return false;
	return element.getAttribute("role") === "combobox" && isTypeableElement(element);
}
function getFloatingFocusElement(floatingElement) {
	if (!floatingElement) return null;
	return floatingElement.hasAttribute("data-base-ui-focusable") ? floatingElement : floatingElement.querySelector(`[data-base-ui-focusable]`) || floatingElement;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/addEventListener.mjs
/**
* Adds an event listener and returns a cleanup function to remove it.
*/
function addEventListener(target, type, listener, options) {
	target.addEventListener(type, listener, options);
	return () => {
		target.removeEventListener(type, listener, options);
	};
}
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/mergeCleanups.mjs
/**
* Combines multiple cleanup functions into a single cleanup function.
*/
function mergeCleanups(...cleanups) {
	return () => {
		for (let i = 0; i < cleanups.length; i += 1) {
			const cleanup = cleanups[i];
			if (cleanup) cleanup();
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/useValueAsRef.mjs
/**
* Untracks the provided value by turning it into a ref to remove its reactivity.
*
* Used to access the passed value inside `React.useEffect` without causing the effect to re-run when the value changes.
*/
function useValueAsRef(value) {
	const latest = useRefWithInit(createLatestRef, value).current;
	latest.next = value;
	useIsoLayoutEffect(latest.effect);
	return latest;
}
function createLatestRef(value) {
	const latest = {
		current: value,
		next: value,
		effect: () => {
			latest.current = latest.next;
		}
	};
	return latest;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/useAnimationFrame.mjs
/** Unlike `setTimeout`, rAF doesn't guarantee a positive integer return value, so we can't have
* a monomorphic `uint` type with `0` meaning empty.
* See warning note at:
* https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame#return_value */
var EMPTY$1 = null;
var LAST_RAF = globalThis.requestAnimationFrame;
var Scheduler = class {
	callbacks = [];
	callbacksCount = 0;
	nextId = 1;
	startId = 1;
	isScheduled = false;
	tick = (timestamp) => {
		this.isScheduled = false;
		const currentCallbacks = this.callbacks;
		const currentCallbacksCount = this.callbacksCount;
		this.callbacks = [];
		this.callbacksCount = 0;
		this.startId = this.nextId;
		if (currentCallbacksCount > 0) for (let i = 0; i < currentCallbacks.length; i += 1) currentCallbacks[i]?.(timestamp);
	};
	request(fn) {
		const id = this.nextId;
		this.nextId += 1;
		this.callbacks.push(fn);
		this.callbacksCount += 1;
		const didRAFChange = process.env.NODE_ENV !== "production" && LAST_RAF !== requestAnimationFrame && (LAST_RAF = requestAnimationFrame, true);
		if (!this.isScheduled || didRAFChange) {
			requestAnimationFrame(this.tick);
			this.isScheduled = true;
		}
		return id;
	}
	cancel(id) {
		const index = id - this.startId;
		if (index < 0 || index >= this.callbacks.length) return;
		this.callbacks[index] = null;
		this.callbacksCount -= 1;
	}
};
var scheduler = new Scheduler();
var AnimationFrame = class AnimationFrame {
	static create() {
		return new AnimationFrame();
	}
	static request(fn) {
		return scheduler.request(fn);
	}
	static cancel(id) {
		return scheduler.cancel(id);
	}
	currentId = EMPTY$1;
	/**
	* Executes `fn` after `delay`, clearing any previously scheduled call.
	*/
	request(fn) {
		this.cancel();
		this.currentId = scheduler.request(() => {
			this.currentId = EMPTY$1;
			fn();
		});
	}
	cancel = () => {
		if (this.currentId !== EMPTY$1) {
			scheduler.cancel(this.currentId);
			this.currentId = EMPTY$1;
		}
	};
	disposeEffect = () => {
		return this.cancel;
	};
};
/**
* A `requestAnimationFrame` with automatic cleanup and guard.
*/
function useAnimationFrame() {
	const timeout = useRefWithInit(AnimationFrame.create).current;
	useOnMount(timeout.disposeEffect);
	return timeout;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/owner.mjs
function ownerDocument(node) {
	return node?.ownerDocument || document;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/visuallyHidden.mjs
var visuallyHiddenBase = {
	clipPath: "inset(50%)",
	overflow: "hidden",
	whiteSpace: "nowrap",
	border: 0,
	padding: 0,
	width: 1,
	height: 1,
	margin: -1
};
var visuallyHidden = {
	...visuallyHiddenBase,
	position: "fixed",
	top: 0,
	left: 0
};
({ ...visuallyHiddenBase });
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/utils/FocusGuard.mjs
/**
* @internal
*/
var FocusGuard = /*#__PURE__*/ React.forwardRef(function FocusGuard(props, ref) {
	const [role, setRole] = React.useState();
	useIsoLayoutEffect(() => {
		if (voiceOver && webkit) setRole("button");
	}, []);
	const restProps = {
		tabIndex: 0,
		role
	};
	return /*#__PURE__*/ jsx("span", {
		...props,
		ref,
		style: visuallyHidden,
		"aria-hidden": role ? void 0 : true,
		...restProps,
		"data-base-ui-focus-guard": ""
	});
});
if (process.env.NODE_ENV !== "production") FocusGuard.displayName = "FocusGuard";
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/floating-ui-react/utils/composite.mjs
function isIndexOutOfListBounds(list, index) {
	return index < 0 || index >= list.length;
}
function getMinListIndex(listRef, disabledIndices) {
	return findNonDisabledListIndex(listRef.current, { disabledIndices });
}
function getMaxListIndex(listRef, disabledIndices) {
	return findNonDisabledListIndex(listRef.current, {
		decrement: true,
		startingIndex: listRef.current.length,
		disabledIndices
	});
}
function findNonDisabledListIndex(list, { startingIndex = -1, decrement = false, disabledIndices, amount = 1 } = {}) {
	let index = startingIndex;
	do
		index += decrement ? -amount : amount;
	while (index >= 0 && index <= list.length - 1 && isListIndexDisabled(list, index, disabledIndices));
	return index;
}
function isListIndexDisabled(list, index, disabledIndices) {
	if (typeof disabledIndices === "function" ? disabledIndices(index) : disabledIndices?.includes(index) ?? false) return true;
	const element = list[index];
	if (!element) return false;
	if (!isElementVisible(element)) return true;
	return !disabledIndices && (element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true");
}
function isHiddenByStyles(styles) {
	return styles.visibility === "hidden" || styles.visibility === "collapse";
}
function isElementVisible(element, styles = element ? getComputedStyle$1(element) : null) {
	if (!element || !element.isConnected || !styles || isHiddenByStyles(styles)) return false;
	if (typeof element.checkVisibility === "function") return element.checkVisibility();
	return styles.display !== "none" && styles.display !== "contents";
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/floating-ui-react/utils/tabbable.mjs
var CANDIDATE_SELECTOR = "a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable=\"false\"]),audio[controls],video[controls]";
function getParentElement(element) {
	const assignedSlot = element.assignedSlot;
	if (assignedSlot) return assignedSlot;
	if (element.parentElement) return element.parentElement;
	const rootNode = element.getRootNode();
	return isShadowRoot(rootNode) ? rootNode.host : null;
}
function getDetailsSummary(details) {
	for (const child of Array.from(details.children)) if (getNodeName(child) === "summary") return child;
	return null;
}
function isWithinOpenDetailsSummary(element, details) {
	const summary = getDetailsSummary(details);
	return !!summary && (element === summary || contains(summary, element));
}
function isFocusableCandidate(element) {
	const nodeName = element ? getNodeName(element) : "";
	return element != null && element.matches(CANDIDATE_SELECTOR) && (nodeName !== "summary" || element.parentElement != null && getNodeName(element.parentElement) === "details" && getDetailsSummary(element.parentElement) === element) && (nodeName !== "details" || getDetailsSummary(element) == null) && (nodeName !== "input" || element.type !== "hidden");
}
function isFocusableElement(element) {
	if (!isFocusableCandidate(element) || !element.isConnected || element.matches(":disabled")) return false;
	for (let current = element; current; current = getParentElement(current)) {
		const isAncestor = current !== element;
		const isSlot = getNodeName(current) === "slot";
		if (current.hasAttribute("inert")) return false;
		if (isAncestor && getNodeName(current) === "details" && !current.open && !isWithinOpenDetailsSummary(element, current) || current.hasAttribute("hidden") || !isSlot && !isVisibleInTabbableTree(current, isAncestor)) return false;
	}
	return true;
}
function isVisibleInTabbableTree(element, isAncestor) {
	const styles = getComputedStyle$1(element);
	if (!isAncestor) return isElementVisible(element, styles);
	return styles.display !== "none";
}
function getTabIndex(element) {
	const tabIndex = element.tabIndex;
	if (tabIndex < 0) {
		const nodeName = getNodeName(element);
		if (nodeName === "details" || nodeName === "audio" || nodeName === "video" || isHTMLElement(element) && element.isContentEditable) return 0;
	}
	return tabIndex;
}
function getNamedRadioInput(element) {
	if (getNodeName(element) !== "input") return null;
	const input = element;
	return input.type === "radio" && input.name !== "" ? input : null;
}
function isTabbableRadio(element, candidates) {
	const input = getNamedRadioInput(element);
	if (!input) return true;
	const checkedRadio = candidates.find((candidate) => {
		const radio = getNamedRadioInput(candidate);
		return radio?.name === input.name && radio.form === input.form && radio.checked;
	});
	if (checkedRadio) return checkedRadio === input;
	return candidates.find((candidate) => {
		const radio = getNamedRadioInput(candidate);
		return radio?.name === input.name && radio.form === input.form;
	}) === input;
}
function getComposedChildren(container) {
	if (isHTMLElement(container) && getNodeName(container) === "slot") {
		const assignedElements = container.assignedElements({ flatten: true });
		if (assignedElements.length > 0) return assignedElements;
	}
	if (isHTMLElement(container) && container.shadowRoot) return Array.from(container.shadowRoot.children);
	return Array.from(container.children);
}
function appendCandidates(container, list) {
	getComposedChildren(container).forEach((child) => {
		if (isFocusableCandidate(child)) list.push(child);
		appendCandidates(child, list);
	});
}
function appendMatchingElements(container, selector, list) {
	getComposedChildren(container).forEach((child) => {
		if (isHTMLElement(child) && child.matches(selector)) list.push(child);
		appendMatchingElements(child, selector, list);
	});
}
function isTabbable(element) {
	return isFocusableElement(element) && getTabIndex(element) >= 0;
}
function focusable(container) {
	const candidates = [];
	appendCandidates(container, candidates);
	return candidates.filter(isFocusableElement);
}
function tabbable(container) {
	const candidates = focusable(container);
	return candidates.filter((element) => getTabIndex(element) >= 0 && isTabbableRadio(element, candidates));
}
function getTabbableIn(container, dir) {
	const list = tabbable(container);
	const len = list.length;
	if (len === 0) return;
	const active = activeElement(ownerDocument(container));
	const index = list.indexOf(active);
	return list[index === -1 ? dir === 1 ? 0 : len - 1 : index + dir];
}
function getNextTabbable(referenceElement) {
	return getTabbableIn(ownerDocument(referenceElement).body, 1) || referenceElement;
}
function getPreviousTabbable(referenceElement) {
	return getTabbableIn(ownerDocument(referenceElement).body, -1) || referenceElement;
}
function getTabbableNearElement(referenceElement, dir) {
	if (!referenceElement) return null;
	const list = tabbable(ownerDocument(referenceElement).body);
	const elementCount = list.length;
	if (elementCount === 0) return null;
	const index = list.indexOf(referenceElement);
	if (index === -1) return null;
	return list[(index + dir + elementCount) % elementCount];
}
function getTabbableAfterElement(referenceElement) {
	return getTabbableNearElement(referenceElement, 1);
}
function getTabbableBeforeElement(referenceElement) {
	return getTabbableNearElement(referenceElement, -1);
}
function isOutsideEvent(event, container) {
	const containerElement = container || event.currentTarget;
	const relatedTarget = event.relatedTarget;
	return !relatedTarget || !contains(containerElement, relatedTarget);
}
function disableFocusInside(container) {
	tabbable(container).forEach((element) => {
		element.dataset.tabindex = element.getAttribute("tabindex") || "";
		element.setAttribute("tabindex", "-1");
	});
}
function enableFocusInside(container) {
	const elements = [];
	appendMatchingElements(container, "[data-tabindex]", elements);
	elements.forEach((element) => {
		const tabindex = element.dataset.tabindex;
		delete element.dataset.tabindex;
		if (tabindex) element.setAttribute("tabindex", tabindex);
		else element.removeAttribute("tabindex");
	});
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/floating-ui-react/utils/nodes.mjs
function getNodeChildren(nodes, id, onlyOpenChildren = true) {
	return nodes.filter((node) => node.parentId === id).flatMap((child) => [...!onlyOpenChildren || child.context?.open ? [child] : [], ...getNodeChildren(nodes, child.id, onlyOpenChildren)]);
}
function getNodeAncestors(nodes, id) {
	let allAncestors = [];
	let currentParentId = nodes.find((node) => node.id === id)?.parentId;
	while (currentParentId) {
		const currentNode = nodes.find((node) => node.id === currentParentId);
		currentParentId = currentNode?.parentId;
		if (currentNode) allAncestors = allAncestors.concat(currentNode);
	}
	return allAncestors;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/floating-ui-react/utils/createAttribute.mjs
function createAttribute(name) {
	return `data-base-ui-${name}`;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/floating-ui-react/utils/enqueueFocus.mjs
var rafId = 0;
function enqueueFocus(el, options = {}) {
	const { preventScroll = false, sync = false, shouldFocus } = options;
	cancelAnimationFrame(rafId);
	function exec() {
		if (shouldFocus && !shouldFocus()) return;
		el?.focus({ preventScroll });
	}
	if (sync) {
		exec();
		return NOOP;
	}
	const currentRafId = requestAnimationFrame(exec);
	rafId = currentRafId;
	return () => {
		if (rafId === currentRafId) {
			cancelAnimationFrame(currentRafId);
			rafId = 0;
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/floating-ui-react/utils/markOthers.mjs
var counters = {
	inert: /* @__PURE__ */ new WeakMap(),
	"aria-hidden": /* @__PURE__ */ new WeakMap()
};
var markerName = "data-base-ui-inert";
var uncontrolledElementsSets = {
	inert: /* @__PURE__ */ new WeakSet(),
	"aria-hidden": /* @__PURE__ */ new WeakSet()
};
var markerCounterMap = /* @__PURE__ */ new WeakMap();
var lockCount = 0;
function getUncontrolledElementsSet(controlAttribute) {
	return uncontrolledElementsSets[controlAttribute];
}
function unwrapHost(node) {
	if (!node) return null;
	return isShadowRoot(node) ? node.host : unwrapHost(node.parentNode);
}
var correctElements = (parent, targets) => targets.map((target) => {
	if (parent.contains(target)) return target;
	const correctedTarget = unwrapHost(target);
	if (parent.contains(correctedTarget)) return correctedTarget;
	return null;
}).filter((x) => x != null);
var buildKeepSet = (targets) => {
	const keep = /* @__PURE__ */ new Set();
	targets.forEach((target) => {
		let node = target;
		while (node && !keep.has(node)) {
			keep.add(node);
			node = node.parentNode;
		}
	});
	return keep;
};
var collectOutsideElements = (root, keepElements, stopElements) => {
	const outside = [];
	const walk = (parent) => {
		if (!parent || stopElements.has(parent)) return;
		Array.from(parent.children).forEach((node) => {
			if (getNodeName(node) === "script") return;
			if (keepElements.has(node)) walk(node);
			else outside.push(node);
		});
	};
	walk(root);
	return outside;
};
function applyAttributeToOthers(uncorrectedAvoidElements, body, ariaHidden, inert, { mark = true }) {
	let controlAttribute = null;
	if (inert) controlAttribute = "inert";
	else if (ariaHidden) controlAttribute = "aria-hidden";
	let counterMap = null;
	let uncontrolledElementsSet = null;
	const avoidElements = correctElements(body, uncorrectedAvoidElements);
	const markerTargets = mark ? collectOutsideElements(body, buildKeepSet(avoidElements), new Set(avoidElements)) : [];
	const hiddenElements = [];
	const markedElements = [];
	if (controlAttribute) {
		const map = counters[controlAttribute];
		const currentUncontrolledElementsSet = getUncontrolledElementsSet(controlAttribute);
		uncontrolledElementsSet = currentUncontrolledElementsSet;
		counterMap = map;
		const ariaLiveElements = correctElements(body, Array.from(body.querySelectorAll("[aria-live]")));
		const controlElements = avoidElements.concat(ariaLiveElements);
		collectOutsideElements(body, buildKeepSet(controlElements), new Set(controlElements)).forEach((node) => {
			const attr = node.getAttribute(controlAttribute);
			const alreadyHidden = attr !== null && attr !== "false";
			const counterValue = (map.get(node) || 0) + 1;
			map.set(node, counterValue);
			hiddenElements.push(node);
			if (counterValue === 1 && alreadyHidden) currentUncontrolledElementsSet.add(node);
			if (!alreadyHidden) node.setAttribute(controlAttribute, controlAttribute === "inert" ? "" : "true");
		});
	}
	if (mark) markerTargets.forEach((node) => {
		const markerValue = (markerCounterMap.get(node) || 0) + 1;
		markerCounterMap.set(node, markerValue);
		markedElements.push(node);
		if (markerValue === 1) node.setAttribute(markerName, "");
	});
	lockCount += 1;
	return () => {
		if (counterMap) hiddenElements.forEach((element) => {
			const counterValue = (counterMap.get(element) || 0) - 1;
			counterMap.set(element, counterValue);
			if (!counterValue) {
				if (!uncontrolledElementsSet?.has(element) && controlAttribute) element.removeAttribute(controlAttribute);
				uncontrolledElementsSet?.delete(element);
			}
		});
		if (mark) markedElements.forEach((element) => {
			const markerValue = (markerCounterMap.get(element) || 0) - 1;
			markerCounterMap.set(element, markerValue);
			if (!markerValue) element.removeAttribute(markerName);
		});
		lockCount -= 1;
		if (!lockCount) {
			counters.inert = /* @__PURE__ */ new WeakMap();
			counters["aria-hidden"] = /* @__PURE__ */ new WeakMap();
			uncontrolledElementsSets.inert = /* @__PURE__ */ new WeakSet();
			uncontrolledElementsSets["aria-hidden"] = /* @__PURE__ */ new WeakSet();
			markerCounterMap = /* @__PURE__ */ new WeakMap();
		}
	};
}
function markOthers(avoidElements, options = {}) {
	const { ariaHidden = false, inert = false, mark = true } = options;
	const body = ownerDocument(avoidElements[0]).body;
	return applyAttributeToOthers(avoidElements, body, ariaHidden, inert, { mark });
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/internals/constants.mjs
var DISABLED_TRANSITIONS_STYLE = { style: { transition: "none" } };
var CLICK_TRIGGER_IDENTIFIER = "data-base-ui-click-trigger";
var BASE_UI_SWIPE_IGNORE_ATTRIBUTE = "data-base-ui-swipe-ignore";
var LEGACY_SWIPE_IGNORE_ATTRIBUTE = "data-swipe-ignore";
`${BASE_UI_SWIPE_IGNORE_ATTRIBUTE}`;
`${LEGACY_SWIPE_IGNORE_ATTRIBUTE}`;
/**
* Used for dropdowns that usually strictly prefer top/bottom placements and
* use `var(--available-height)` to limit their height.
*/
var DROPDOWN_COLLISION_AVOIDANCE = { fallbackAxisSide: "none" };
/**
* Used by regular popups that usually aren't scrollable and are allowed to
* freely flip to any axis of placement.
*/
var POPUP_COLLISION_AVOIDANCE = { fallbackAxisSide: "end" };
/**
* Special visually hidden styles for the aria-owns owner element to ensure owned element
* accessibility in iOS/Safari/VoiceControl.
* The owner element is an empty span, so most of the common visually hidden styles are not needed.
* @see https://github.com/floating-ui/floating-ui/issues/3403
*/
var ownerVisuallyHidden = {
	clipPath: "inset(50%)",
	position: "fixed",
	top: 0,
	left: 0
};
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/floating-ui-react/components/FloatingPortal.mjs
var PortalContext = /*#__PURE__*/ React.createContext(null);
if (process.env.NODE_ENV !== "production") PortalContext.displayName = "PortalContext";
var usePortalContext = () => React.useContext(PortalContext);
var attr = createAttribute("portal");
function useFloatingPortalNode(props = {}) {
	const { ref, container: containerProp, componentProps = EMPTY_OBJECT, elementProps } = props;
	const uniqueId = useId$1();
	const parentPortalNode = usePortalContext()?.portalNode;
	const [containerElement, setContainerElement] = React.useState(null);
	const [portalNode, setPortalNode] = React.useState(null);
	const setPortalNodeRef = useStableCallback((node) => {
		if (node !== null) setPortalNode(node);
	});
	const containerRef = React.useRef(null);
	useIsoLayoutEffect(() => {
		if (containerProp === null) {
			if (containerRef.current) {
				containerRef.current = null;
				setPortalNode(null);
				setContainerElement(null);
			}
			return;
		}
		if (uniqueId == null) return;
		const resolvedContainer = (containerProp && (isNode(containerProp) ? containerProp : containerProp.current)) ?? parentPortalNode ?? document.body;
		if (resolvedContainer == null) {
			if (containerRef.current) {
				containerRef.current = null;
				setPortalNode(null);
				setContainerElement(null);
			}
			return;
		}
		if (containerRef.current !== resolvedContainer) {
			containerRef.current = resolvedContainer;
			setPortalNode(null);
			setContainerElement(resolvedContainer);
		}
	}, [
		containerProp,
		parentPortalNode,
		uniqueId
	]);
	const portalElement = useRenderElement("div", componentProps, {
		ref: [ref, setPortalNodeRef],
		props: [{
			id: uniqueId,
			[attr]: ""
		}, elementProps]
	});
	return {
		portalNode,
		portalSubtree: containerElement && portalElement ? /*#__PURE__*/ ReactDOM$1.createPortal(portalElement, containerElement) : null
	};
}
/**
* Portals the floating element into a given container element — by default,
* outside of the app root and into the body.
* This is necessary to ensure the floating element can appear outside any
* potential parent containers that cause clipping (such as `overflow: hidden`),
* while retaining its location in the React tree.
* @see https://floating-ui.com/docs/FloatingPortal
* @internal
*/
var FloatingPortal = /*#__PURE__*/ React.forwardRef(function FloatingPortal(componentProps, forwardedRef) {
	const { render, className, style, children, container, renderGuards, ...elementProps } = componentProps;
	const { portalNode, portalSubtree } = useFloatingPortalNode({
		container,
		ref: forwardedRef,
		componentProps,
		elementProps
	});
	const beforeOutsideRef = React.useRef(null);
	const afterOutsideRef = React.useRef(null);
	const beforeInsideRef = React.useRef(null);
	const afterInsideRef = React.useRef(null);
	const [focusManagerState, setFocusManagerState] = React.useState(null);
	const focusInsideDisabledRef = React.useRef(false);
	const modal = focusManagerState?.modal;
	const open = focusManagerState?.open;
	const shouldRenderGuards = typeof renderGuards === "boolean" ? renderGuards : !!focusManagerState && !focusManagerState.modal && focusManagerState.open && !!portalNode;
	React.useEffect(() => {
		if (!portalNode || modal) return;
		function onFocus(event) {
			if (portalNode && event.relatedTarget && isOutsideEvent(event)) {
				if (event.type === "focusin") {
					if (focusInsideDisabledRef.current) {
						enableFocusInside(portalNode);
						focusInsideDisabledRef.current = false;
					}
				} else {
					disableFocusInside(portalNode);
					focusInsideDisabledRef.current = true;
				}
			}
		}
		return mergeCleanups(addEventListener(portalNode, "focusin", onFocus, true), addEventListener(portalNode, "focusout", onFocus, true));
	}, [portalNode, modal]);
	useIsoLayoutEffect(() => {
		if (!portalNode || open !== true || !focusInsideDisabledRef.current) return;
		enableFocusInside(portalNode);
		focusInsideDisabledRef.current = false;
	}, [open, portalNode]);
	const portalContextValue = React.useMemo(() => ({
		beforeOutsideRef,
		afterOutsideRef,
		beforeInsideRef,
		afterInsideRef,
		portalNode,
		setFocusManagerState
	}), [portalNode]);
	return /*#__PURE__*/ jsxs(React.Fragment, { children: [portalSubtree, /*#__PURE__*/ jsxs(PortalContext.Provider, {
		value: portalContextValue,
		children: [
			shouldRenderGuards && portalNode && /*#__PURE__*/ jsx(FocusGuard, {
				"data-type": "outside",
				ref: beforeOutsideRef,
				onFocus: (event) => {
					if (isOutsideEvent(event, portalNode)) beforeInsideRef.current?.focus();
					else getPreviousTabbable(focusManagerState ? focusManagerState.domReference : null)?.focus();
				}
			}),
			shouldRenderGuards && portalNode && /*#__PURE__*/ jsx("span", {
				"aria-owns": portalNode.id,
				style: ownerVisuallyHidden
			}),
			portalNode && /*#__PURE__*/ ReactDOM$1.createPortal(children, portalNode),
			shouldRenderGuards && portalNode && /*#__PURE__*/ jsx(FocusGuard, {
				"data-type": "outside",
				ref: afterOutsideRef,
				onFocus: (event) => {
					if (isOutsideEvent(event, portalNode)) afterInsideRef.current?.focus();
					else {
						getNextTabbable(focusManagerState ? focusManagerState.domReference : null)?.focus();
						if (focusManagerState?.closeOnFocusOut) focusManagerState?.onOpenChange(false, createChangeEventDetails("focus-out", event.nativeEvent));
					}
				}
			})
		]
	})] });
});
if (process.env.NODE_ENV !== "production") FloatingPortal.displayName = "FloatingPortal";
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/floating-ui-react/utils/createEventEmitter.mjs
function createEventEmitter() {
	const map = /* @__PURE__ */ new Map();
	return {
		emit(event, data) {
			map.get(event)?.forEach((listener) => listener(data));
		},
		on(event, listener) {
			if (!map.has(event)) map.set(event, /* @__PURE__ */ new Set());
			map.get(event).add(listener);
		},
		off(event, listener) {
			map.get(event)?.delete(listener);
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/floating-ui-react/components/FloatingTreeStore.mjs
/**
* Stores and manages floating elements in a tree structure.
* This is a backing store for the `FloatingTree` component.
*/
var FloatingTreeStore = class {
	nodesRef = { current: [] };
	events = createEventEmitter();
	addNode(node) {
		this.nodesRef.current.push(node);
	}
	removeNode(node) {
		const index = this.nodesRef.current.findIndex((n) => n === node);
		if (index !== -1) this.nodesRef.current.splice(index, 1);
	}
};
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/floating-ui-react/components/FloatingTree.mjs
var FloatingNodeContext = /*#__PURE__*/ React.createContext(null);
if (process.env.NODE_ENV !== "production") FloatingNodeContext.displayName = "FloatingNodeContext";
var FloatingTreeContext = /*#__PURE__*/ React.createContext(null);
/**
* Returns the parent node id for nested floating elements, if available.
* Returns `null` for top-level floating elements.
*/
if (process.env.NODE_ENV !== "production") FloatingTreeContext.displayName = "FloatingTreeContext";
var useFloatingParentNodeId = () => React.useContext(FloatingNodeContext)?.id || null;
/**
* Returns the nearest floating tree context, if available.
*/
var useFloatingTree = (externalTree) => {
	const contextTree = React.useContext(FloatingTreeContext);
	return externalTree ?? contextTree;
};
/**
* Registers a node into the `FloatingTree`, returning its id.
* @see https://floating-ui.com/docs/FloatingTree
*/
function useFloatingNodeId(externalTree) {
	const id = useId$1();
	const tree = useFloatingTree(externalTree);
	const parentId = useFloatingParentNodeId();
	useIsoLayoutEffect(() => {
		if (!id) return;
		const node = {
			id,
			parentId
		};
		tree?.addNode(node);
		return () => {
			tree?.removeNode(node);
		};
	}, [
		tree,
		id,
		parentId
	]);
	return id;
}
/**
* Provides parent node context for nested floating elements.
* @see https://floating-ui.com/docs/FloatingTree
* @internal
*/
function FloatingNode(props) {
	const { children, id } = props;
	const parentId = useFloatingParentNodeId();
	return /*#__PURE__*/ jsx(FloatingNodeContext.Provider, {
		value: React.useMemo(() => ({
			id,
			parentId
		}), [id, parentId]),
		children
	});
}
/**
* Provides context for nested floating elements when they are not children of
* each other on the DOM.
* This is not necessary in all cases, except when there must be explicit communication between parent and child floating elements. It is necessary for:
* - The `bubbles` option in the `useDismiss()` Hook
* - Nested virtual list navigation
* - Nested floating elements that each open on hover
* - Custom communication between parent and child floating elements
* @see https://floating-ui.com/docs/FloatingTree
* @internal
*/
function FloatingTree(props) {
	const { children, externalTree } = props;
	const tree = useRefWithInit(() => externalTree ?? new FloatingTreeStore()).current;
	return /*#__PURE__*/ jsx(FloatingTreeContext.Provider, {
		value: tree,
		children
	});
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/utils/resolveRef.mjs
/**
* If the provided argument is a ref object, returns its `current` value.
* Otherwise, returns the argument itself.
*/
function resolveRef(maybeRef) {
	if (maybeRef == null) return maybeRef;
	return "current" in maybeRef ? maybeRef.current : maybeRef;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/floating-ui-react/components/FloatingFocusManager.mjs
function getEventType(event, lastInteractionType) {
	const win = getWindow(getTarget(event));
	if (event instanceof win.KeyboardEvent) return "keyboard";
	if (event instanceof win.FocusEvent) return lastInteractionType || "keyboard";
	if ("pointerType" in event) return event.pointerType || "keyboard";
	if ("touches" in event) return "touch";
	if (event instanceof win.MouseEvent) return lastInteractionType || (event.detail === 0 ? "keyboard" : "mouse");
	return "";
}
var LIST_LIMIT = 20;
var previouslyFocusedElements = [];
function clearDisconnectedPreviouslyFocusedElements() {
	previouslyFocusedElements = previouslyFocusedElements.filter((entry) => {
		return entry.deref()?.isConnected;
	});
}
function addPreviouslyFocusedElement(element) {
	clearDisconnectedPreviouslyFocusedElements();
	if (element && getNodeName(element) !== "body") {
		previouslyFocusedElements.push(new WeakRef(element));
		if (previouslyFocusedElements.length > LIST_LIMIT) previouslyFocusedElements = previouslyFocusedElements.slice(-20);
	}
}
function getPreviouslyFocusedElement() {
	clearDisconnectedPreviouslyFocusedElements();
	return previouslyFocusedElements[previouslyFocusedElements.length - 1]?.deref();
}
function getFirstTabbableElement(container) {
	if (!container) return null;
	if (isTabbable(container)) return container;
	return tabbable(container)[0] || container;
}
function handleTabIndex(floatingFocusElement) {
	if (floatingFocusElement.hasAttribute("tabindex") && !floatingFocusElement.hasAttribute("data-tabindex")) return;
	if (!floatingFocusElement.getAttribute("role")?.includes("dialog")) return;
	const tabbableContent = focusable(floatingFocusElement).filter((element) => {
		const dataTabIndex = element.getAttribute("data-tabindex") || "";
		return isTabbable(element) || element.hasAttribute("data-tabindex") && !dataTabIndex.startsWith("-");
	});
	const tabIndex = floatingFocusElement.getAttribute("tabindex");
	if (tabbableContent.length === 0) {
		if (tabIndex !== "0") {
			floatingFocusElement.setAttribute("tabindex", "0");
			floatingFocusElement.setAttribute("data-tabindex", "0");
		}
	} else if (tabIndex !== "-1" || floatingFocusElement.hasAttribute("data-tabindex") && floatingFocusElement.getAttribute("data-tabindex") !== "-1") {
		floatingFocusElement.setAttribute("tabindex", "-1");
		floatingFocusElement.setAttribute("data-tabindex", "-1");
	}
}
/**
* Provides focus management for the floating element.
* @see https://floating-ui.com/docs/FloatingFocusManager
* @internal
*/
function FloatingFocusManager(props) {
	const { context, children, disabled = false, initialFocus = true, returnFocus = true, restoreFocus = false, modal = true, closeOnFocusOut = true, openInteractionType = "", nextFocusableElement, previousFocusableElement, beforeContentFocusGuardRef, externalTree, getInsideElements } = props;
	const store = "rootStore" in context ? context.rootStore : context;
	const open = store.useState("open");
	const domReference = store.useState("domReferenceElement");
	const floating = store.useState("floatingElement");
	const { events, dataRef } = store.context;
	const getNodeId = useStableCallback(() => dataRef.current.floatingContext?.nodeId);
	const ignoreInitialFocus = initialFocus === false;
	const isUntrappedTypeableCombobox = isTypeableCombobox(domReference) && ignoreInitialFocus;
	const initialFocusRef = useValueAsRef(initialFocus);
	const returnFocusRef = useValueAsRef(returnFocus);
	const openInteractionTypeRef = useValueAsRef(openInteractionType);
	const openRef = useValueAsRef(open);
	const tree = useFloatingTree(externalTree);
	const portalContext = usePortalContext();
	const preventReturnFocusRef = React.useRef(false);
	const isPointerDownRef = React.useRef(false);
	const pointerDownOutsideRef = React.useRef(false);
	const lastFocusedTabbableRef = React.useRef(null);
	const closeTypeRef = React.useRef("");
	const lastInteractionTypeRef = React.useRef("");
	const beforeGuardRef = React.useRef(null);
	const afterGuardRef = React.useRef(null);
	const mergedBeforeGuardRef = useMergedRefs(beforeGuardRef, beforeContentFocusGuardRef, portalContext?.beforeInsideRef);
	const mergedAfterGuardRef = useMergedRefs(afterGuardRef, portalContext?.afterInsideRef);
	const blurTimeout = useTimeout();
	const pointerDownTimeout = useTimeout();
	const restoreFocusFrame = useAnimationFrame();
	const isInsidePortal = portalContext != null;
	const floatingFocusElement = getFloatingFocusElement(floating);
	const getTabbableContent = useStableCallback((container = floatingFocusElement) => {
		return container ? tabbable(container) : [];
	});
	const getResolvedInsideElements = useStableCallback(() => getInsideElements?.().filter((element) => element != null) ?? []);
	React.useEffect(() => {
		if (disabled || !modal) return;
		function onKeyDown(event) {
			if (event.key === "Tab") {
				if (contains(floatingFocusElement, activeElement(ownerDocument(floatingFocusElement))) && getTabbableContent().length === 0 && !isUntrappedTypeableCombobox) stopEvent(event);
			}
		}
		return addEventListener(ownerDocument(floatingFocusElement), "keydown", onKeyDown);
	}, [
		disabled,
		floatingFocusElement,
		modal,
		isUntrappedTypeableCombobox,
		getTabbableContent
	]);
	React.useEffect(() => {
		if (disabled || !open) return;
		const doc = ownerDocument(floatingFocusElement);
		function clearPointerDownOutside() {
			pointerDownOutsideRef.current = false;
		}
		function onPointerDown(event) {
			const target = getTarget(event);
			const insideElements = getResolvedInsideElements();
			const pointerTargetInside = contains(floating, target) || contains(domReference, target) || contains(portalContext?.portalNode, target) || insideElements.some((element) => element === target || contains(element, target));
			pointerDownOutsideRef.current = !pointerTargetInside;
			lastInteractionTypeRef.current = event.pointerType || "keyboard";
			if (target?.closest(`[data-base-ui-click-trigger]`)) {
				isPointerDownRef.current = true;
				pointerDownTimeout.start(0, () => {
					isPointerDownRef.current = false;
				});
			}
		}
		function onKeyDown() {
			lastInteractionTypeRef.current = "keyboard";
		}
		return mergeCleanups(addEventListener(doc, "pointerdown", onPointerDown, true), addEventListener(doc, "pointerup", clearPointerDownOutside, true), addEventListener(doc, "pointercancel", clearPointerDownOutside, true), addEventListener(doc, "keydown", onKeyDown, true), clearPointerDownOutside);
	}, [
		disabled,
		floating,
		domReference,
		floatingFocusElement,
		open,
		portalContext,
		pointerDownTimeout,
		getResolvedInsideElements
	]);
	React.useEffect(() => {
		if (disabled || !closeOnFocusOut) return;
		const doc = ownerDocument(floatingFocusElement);
		function handlePointerDown() {
			isPointerDownRef.current = true;
			pointerDownTimeout.start(0, () => {
				isPointerDownRef.current = false;
			});
		}
		function handleFocusIn(event) {
			const target = getTarget(event);
			if (isTabbable(target)) lastFocusedTabbableRef.current = target;
		}
		function handleFocusOutside(event) {
			const relatedTarget = event.relatedTarget;
			const currentTarget = event.currentTarget;
			const target = getTarget(event);
			if (modal && relatedTarget == null && target != null && contains(floating, target)) addPreviouslyFocusedElement(target);
			queueMicrotask(() => {
				const nodeId = getNodeId();
				const triggers = store.context.triggerElements;
				const insideElements = getResolvedInsideElements();
				const isRelatedFocusGuard = relatedTarget?.hasAttribute(createAttribute("focus-guard")) && [
					beforeGuardRef.current,
					afterGuardRef.current,
					portalContext?.beforeInsideRef.current,
					portalContext?.afterInsideRef.current,
					portalContext?.beforeOutsideRef.current,
					portalContext?.afterOutsideRef.current,
					resolveRef(previousFocusableElement),
					resolveRef(nextFocusableElement)
				].includes(relatedTarget);
				const movedToUnrelatedNode = !(contains(domReference, relatedTarget) || contains(floating, relatedTarget) || contains(relatedTarget, floating) || contains(portalContext?.portalNode, relatedTarget) || insideElements.some((element) => element === relatedTarget || contains(element, relatedTarget)) || relatedTarget != null && triggers.hasElement(relatedTarget) || triggers.hasMatchingElement((trigger) => contains(trigger, relatedTarget)) || isRelatedFocusGuard || tree && (getNodeChildren(tree.nodesRef.current, nodeId).find((node) => contains(node.context?.elements.floating, relatedTarget) || contains(node.context?.elements.domReference, relatedTarget)) || getNodeAncestors(tree.nodesRef.current, nodeId).find((node) => [node.context?.elements.floating, getFloatingFocusElement(node.context?.elements.floating)].includes(relatedTarget) || node.context?.elements.domReference === relatedTarget)));
				if (currentTarget === domReference && floatingFocusElement) handleTabIndex(floatingFocusElement);
				if (restoreFocus && currentTarget !== domReference && !isElementVisible(target) && activeElement(doc) === doc.body) {
					if (isHTMLElement(floatingFocusElement)) {
						floatingFocusElement.focus();
						if (restoreFocus === "popup") {
							restoreFocusFrame.request(() => {
								floatingFocusElement.focus();
							});
							return;
						}
					}
					const tabbableContent = getTabbableContent();
					const prevTabbable = lastFocusedTabbableRef.current;
					const nodeToFocus = (prevTabbable && tabbableContent.includes(prevTabbable) ? prevTabbable : null) || tabbableContent[tabbableContent.length - 1] || floatingFocusElement;
					if (isHTMLElement(nodeToFocus)) nodeToFocus.focus();
				}
				if (dataRef.current.insideReactTree) {
					dataRef.current.insideReactTree = false;
					return;
				}
				if ((isUntrappedTypeableCombobox ? true : !modal) && relatedTarget && movedToUnrelatedNode && !isPointerDownRef.current && (isUntrappedTypeableCombobox || relatedTarget !== getPreviouslyFocusedElement())) {
					preventReturnFocusRef.current = true;
					store.setOpen(false, createChangeEventDetails(focusOut, event));
				}
			});
		}
		function markInsideReactTree() {
			if (pointerDownOutsideRef.current) return;
			dataRef.current.insideReactTree = true;
			blurTimeout.start(0, () => {
				dataRef.current.insideReactTree = false;
			});
		}
		const domReferenceElement = isHTMLElement(domReference) ? domReference : null;
		if (!floating && !domReferenceElement) return;
		return mergeCleanups(domReferenceElement && addEventListener(domReferenceElement, "focusout", handleFocusOutside), domReferenceElement && addEventListener(domReferenceElement, "pointerdown", handlePointerDown), floating && addEventListener(floating, "focusin", handleFocusIn), floating && addEventListener(floating, "focusout", handleFocusOutside), floating && portalContext && addEventListener(floating, "focusout", markInsideReactTree, true));
	}, [
		disabled,
		domReference,
		floating,
		floatingFocusElement,
		modal,
		tree,
		portalContext,
		store,
		closeOnFocusOut,
		restoreFocus,
		getTabbableContent,
		isUntrappedTypeableCombobox,
		getNodeId,
		dataRef,
		blurTimeout,
		pointerDownTimeout,
		restoreFocusFrame,
		nextFocusableElement,
		previousFocusableElement,
		getResolvedInsideElements
	]);
	React.useEffect(() => {
		if (disabled || !floating || !open) return;
		const portalNodes = Array.from(portalContext?.portalNode?.querySelectorAll(`[${createAttribute("portal")}]`) || []);
		const rootAncestorComboboxDomReference = (tree ? getNodeAncestors(tree.nodesRef.current, getNodeId()) : []).find((node) => isTypeableCombobox(node.context?.elements.domReference || null))?.context?.elements.domReference;
		const ariaHiddenCleanup = markOthers([
			...[
				floating,
				...portalNodes,
				beforeGuardRef.current,
				afterGuardRef.current,
				portalContext?.beforeOutsideRef.current,
				portalContext?.afterOutsideRef.current,
				...getResolvedInsideElements()
			],
			rootAncestorComboboxDomReference,
			resolveRef(previousFocusableElement),
			resolveRef(nextFocusableElement),
			isUntrappedTypeableCombobox ? domReference : null
		].filter((x) => x != null), {
			ariaHidden: modal || isUntrappedTypeableCombobox,
			mark: false
		});
		const markerCleanup = markOthers([floating, ...portalNodes].filter((x) => x != null));
		return () => {
			markerCleanup();
			ariaHiddenCleanup();
		};
	}, [
		open,
		disabled,
		domReference,
		floating,
		modal,
		portalContext,
		isUntrappedTypeableCombobox,
		tree,
		getNodeId,
		nextFocusableElement,
		previousFocusableElement,
		getResolvedInsideElements
	]);
	useIsoLayoutEffect(() => {
		if (!open || disabled || !isHTMLElement(floatingFocusElement)) return;
		const doc = ownerDocument(floatingFocusElement);
		const previouslyFocusedElement = activeElement(doc);
		queueMicrotask(() => {
			const initialFocusValueOrFn = initialFocusRef.current;
			const resolvedInitialFocus = typeof initialFocusValueOrFn === "function" ? initialFocusValueOrFn(openInteractionTypeRef.current || "") : initialFocusValueOrFn;
			if (resolvedInitialFocus === void 0 || resolvedInitialFocus === false) return;
			if (contains(floatingFocusElement, previouslyFocusedElement)) return;
			let focusableElements = null;
			const getDefaultFocusElement = () => {
				if (focusableElements == null) focusableElements = getTabbableContent(floatingFocusElement);
				return focusableElements[0] || floatingFocusElement;
			};
			let elToFocus;
			if (resolvedInitialFocus === true || resolvedInitialFocus === null) elToFocus = getDefaultFocusElement();
			else elToFocus = resolveRef(resolvedInitialFocus);
			elToFocus = elToFocus || getDefaultFocusElement();
			const hadFocusInside = contains(floatingFocusElement, activeElement(doc));
			enqueueFocus(elToFocus, {
				preventScroll: elToFocus === floatingFocusElement,
				shouldFocus() {
					if (!openRef.current) return false;
					if (hadFocusInside) return true;
					const currentActiveElement = activeElement(doc);
					return !(currentActiveElement !== elToFocus && contains(floatingFocusElement, currentActiveElement));
				}
			});
		});
	}, [
		disabled,
		open,
		floatingFocusElement,
		getTabbableContent,
		initialFocusRef,
		openInteractionTypeRef,
		openRef
	]);
	useIsoLayoutEffect(() => {
		if (disabled || !floatingFocusElement) return;
		const doc = ownerDocument(floatingFocusElement);
		const elementFocusedBeforeOpen = activeElement(doc);
		const preferPreviousFocus = openInteractionTypeRef.current == null;
		addPreviouslyFocusedElement(elementFocusedBeforeOpen);
		function onOpenChangeLocal(details) {
			if (!details.open) closeTypeRef.current = getEventType(details.nativeEvent, lastInteractionTypeRef.current);
			if (details.reason === "trigger-hover" && details.nativeEvent.type === "mouseleave") preventReturnFocusRef.current = true;
			if (details.reason !== "outside-press") return;
			if (details.nested) preventReturnFocusRef.current = false;
			else if (isVirtualClick(details.nativeEvent) || isVirtualPointerEvent(details.nativeEvent)) preventReturnFocusRef.current = false;
			else {
				let isPreventScrollSupported = false;
				ownerDocument(floatingFocusElement).createElement("div").focus({ get preventScroll() {
					isPreventScrollSupported = true;
					return false;
				} });
				if (isPreventScrollSupported) preventReturnFocusRef.current = false;
				else preventReturnFocusRef.current = true;
			}
		}
		events.on("openchange", onOpenChangeLocal);
		function getReturnElement() {
			const returnFocusValueOrFn = returnFocusRef.current;
			let resolvedReturnFocusValue = typeof returnFocusValueOrFn === "function" ? returnFocusValueOrFn(closeTypeRef.current) : returnFocusValueOrFn;
			if (resolvedReturnFocusValue === void 0 || resolvedReturnFocusValue === false) return null;
			if (resolvedReturnFocusValue === null) resolvedReturnFocusValue = true;
			const referenceReturnElement = domReference?.isConnected ? domReference : null;
			const previousReturnElement = elementFocusedBeforeOpen?.isConnected && getNodeName(elementFocusedBeforeOpen) !== "body" ? elementFocusedBeforeOpen : null;
			let defaultReturnElement = preferPreviousFocus ? previousReturnElement || referenceReturnElement : referenceReturnElement || previousReturnElement;
			if (!defaultReturnElement) defaultReturnElement = getPreviouslyFocusedElement() || null;
			if (typeof resolvedReturnFocusValue === "boolean") return defaultReturnElement;
			return resolveRef(resolvedReturnFocusValue) || defaultReturnElement || null;
		}
		return () => {
			events.off("openchange", onOpenChangeLocal);
			const activeEl = activeElement(doc);
			const insideElements = getResolvedInsideElements();
			const isFocusInsideFloatingTree = contains(floating, activeEl) || insideElements.some((element) => element === activeEl || contains(element, activeEl)) || tree && getNodeChildren(tree.nodesRef.current, getNodeId(), false).some((node) => contains(node.context?.elements.floating, activeEl));
			const returnFocusValueOrFn = returnFocusRef.current;
			const returnElement = getReturnElement();
			queueMicrotask(() => {
				const tabbableReturnElement = getFirstTabbableElement(returnElement);
				const hasExplicitReturnFocus = typeof returnFocusValueOrFn !== "boolean";
				if (returnFocusValueOrFn && !preventReturnFocusRef.current && isHTMLElement(tabbableReturnElement) && (!hasExplicitReturnFocus && tabbableReturnElement !== activeEl && activeEl !== doc.body ? isFocusInsideFloatingTree : true)) tabbableReturnElement.focus({ preventScroll: true });
				preventReturnFocusRef.current = false;
			});
		};
	}, [
		disabled,
		floating,
		floatingFocusElement,
		returnFocusRef,
		openInteractionTypeRef,
		events,
		tree,
		domReference,
		getNodeId,
		getResolvedInsideElements
	]);
	useIsoLayoutEffect(() => {
		if (!webkit || open || !floating) return;
		const activeEl = activeElement(ownerDocument(floating));
		if (!isHTMLElement(activeEl) || !isTypeableElement(activeEl)) return;
		if (contains(floating, activeEl)) activeEl.blur();
	}, [open, floating]);
	useIsoLayoutEffect(() => {
		if (disabled || !portalContext) return;
		portalContext.setFocusManagerState({
			modal,
			closeOnFocusOut,
			open,
			onOpenChange: store.setOpen,
			domReference
		});
		return () => {
			portalContext.setFocusManagerState(null);
		};
	}, [
		disabled,
		portalContext,
		modal,
		open,
		store,
		closeOnFocusOut,
		domReference
	]);
	useIsoLayoutEffect(() => {
		if (disabled || !floatingFocusElement) return;
		handleTabIndex(floatingFocusElement);
		return () => {
			queueMicrotask(clearDisconnectedPreviouslyFocusedElements);
		};
	}, [disabled, floatingFocusElement]);
	const shouldRenderGuards = !disabled && (modal ? !isUntrappedTypeableCombobox : true) && (isInsidePortal || modal);
	return /*#__PURE__*/ jsxs(React.Fragment, { children: [
		shouldRenderGuards && /*#__PURE__*/ jsx(FocusGuard, {
			"data-type": "inside",
			ref: mergedBeforeGuardRef,
			onFocus: (event) => {
				if (modal) {
					const els = getTabbableContent();
					enqueueFocus(els[els.length - 1]);
				} else if (portalContext?.portalNode) {
					preventReturnFocusRef.current = false;
					if (isOutsideEvent(event, portalContext.portalNode)) getNextTabbable(domReference)?.focus();
					else resolveRef(previousFocusableElement ?? portalContext.beforeOutsideRef)?.focus();
				}
			}
		}),
		children,
		shouldRenderGuards && /*#__PURE__*/ jsx(FocusGuard, {
			"data-type": "inside",
			ref: mergedAfterGuardRef,
			onFocus: (event) => {
				if (modal) enqueueFocus(getTabbableContent()[0]);
				else if (portalContext?.portalNode) {
					if (closeOnFocusOut) preventReturnFocusRef.current = true;
					if (isOutsideEvent(event, portalContext.portalNode)) getPreviousTabbable(domReference)?.focus();
					else resolveRef(nextFocusableElement ?? portalContext.afterOutsideRef)?.focus();
				}
			}
		})
	] });
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/floating-ui-react/hooks/useDismiss.mjs
function alwaysFalse() {
	return false;
}
function normalizeProp(normalizable) {
	return {
		escapeKey: typeof normalizable === "boolean" ? normalizable : normalizable?.escapeKey ?? false,
		outsidePress: typeof normalizable === "boolean" ? normalizable : normalizable?.outsidePress ?? true
	};
}
/**
* Closes the floating element when a dismissal is requested — by default, when
* the user presses the `escape` key or outside of the floating element.
* @see https://floating-ui.com/docs/useDismiss
*/
function useDismiss(context, props = {}) {
	const { enabled = true, escapeKey: escapeKey$1 = true, outsidePress: outsidePressProp = true, outsidePressEvent = "sloppy", referencePress = alwaysFalse, bubbles, externalTree } = props;
	const store = "rootStore" in context ? context.rootStore : context;
	const open = store.useState("open");
	const floatingElement = store.useState("floatingElement");
	const { dataRef } = store.context;
	const tree = useFloatingTree(externalTree);
	const outsidePressFn = useStableCallback(typeof outsidePressProp === "function" ? outsidePressProp : () => false);
	const outsidePress$1 = typeof outsidePressProp === "function" ? outsidePressFn : outsidePressProp;
	const outsidePressEnabled = outsidePress$1 !== false;
	const getOutsidePressEventProp = useStableCallback(() => outsidePressEvent);
	const { escapeKey: escapeKeyBubbles, outsidePress: outsidePressBubbles } = normalizeProp(bubbles);
	const pressStartedInsideRef = React.useRef(false);
	const pressStartPreventedRef = React.useRef(false);
	const suppressNextOutsideClickRef = React.useRef(false);
	const isComposingRef = React.useRef(false);
	const currentPointerTypeRef = React.useRef("");
	const touchStateRef = React.useRef(null);
	const cancelDismissOnEndTimeout = useTimeout();
	const clearInsideReactTreeTimeout = useTimeout();
	const clearInsideReactTree = useStableCallback(() => {
		clearInsideReactTreeTimeout.clear();
		dataRef.current.insideReactTree = false;
	});
	const hasBlockingChild = useStableCallback((bubbleKey) => {
		const nodeId = dataRef.current.floatingContext?.nodeId;
		return (tree ? getNodeChildren(tree.nodesRef.current, nodeId) : []).some((child) => child.context?.open && !child.context.dataRef.current[bubbleKey]);
	});
	const isEventWithinOwnElements = useStableCallback((event) => {
		return isEventTargetWithin(event, store.select("floatingElement")) || isEventTargetWithin(event, store.select("domReferenceElement"));
	});
	const closeOnReferencePress = useStableCallback((event) => {
		if (!referencePress()) return;
		store.setOpen(false, createChangeEventDetails(triggerPress, event.nativeEvent));
	});
	const closeOnEscapeKeyDown = useStableCallback((event) => {
		if (!open || !enabled || !escapeKey$1 || event.key !== "Escape") return;
		if (isComposingRef.current) return;
		if (!escapeKeyBubbles && hasBlockingChild("__escapeKeyBubbles")) return;
		const eventDetails = createChangeEventDetails(escapeKey, isReactEvent(event) ? event.nativeEvent : event);
		store.setOpen(false, eventDetails);
		if (!eventDetails.isCanceled) event.preventDefault();
		if (!escapeKeyBubbles && !eventDetails.isPropagationAllowed) event.stopPropagation();
	});
	const markInsideReactTree = useStableCallback(() => {
		dataRef.current.insideReactTree = true;
		clearInsideReactTreeTimeout.start(0, clearInsideReactTree);
	});
	const markPressStartedInsideReactTree = useStableCallback((event) => {
		if (!open || !enabled || event.button !== 0) return;
		const target = getTarget(event.nativeEvent);
		if (!contains(store.select("floatingElement"), target)) return;
		if (!pressStartedInsideRef.current) {
			pressStartedInsideRef.current = true;
			pressStartPreventedRef.current = false;
		}
	});
	const markInsidePressStartPrevented = useStableCallback((event) => {
		if (!open || !enabled) return;
		if (!(event.defaultPrevented || event.nativeEvent.defaultPrevented)) return;
		if (pressStartedInsideRef.current) pressStartPreventedRef.current = true;
	});
	React.useEffect(() => {
		if (!open || !enabled) return;
		dataRef.current.__escapeKeyBubbles = escapeKeyBubbles;
		dataRef.current.__outsidePressBubbles = outsidePressBubbles;
		const compositionTimeout = new Timeout();
		const preventedPressSuppressionTimeout = new Timeout();
		function handleCompositionStart() {
			compositionTimeout.clear();
			isComposingRef.current = true;
		}
		function handleCompositionEnd() {
			compositionTimeout.start(webkit ? 5 : 0, () => {
				isComposingRef.current = false;
			});
		}
		function suppressImmediateOutsideClickAfterPreventedStart() {
			suppressNextOutsideClickRef.current = true;
			preventedPressSuppressionTimeout.start(0, () => {
				suppressNextOutsideClickRef.current = false;
			});
		}
		function resetPressStartState() {
			pressStartedInsideRef.current = false;
			pressStartPreventedRef.current = false;
		}
		function getOutsidePressEvent() {
			const type = currentPointerTypeRef.current;
			const computedType = type === "pen" || !type ? "mouse" : type;
			const outsidePressEventValue = getOutsidePressEventProp();
			const resolved = typeof outsidePressEventValue === "function" ? outsidePressEventValue() : outsidePressEventValue;
			if (typeof resolved === "string") return resolved;
			return resolved[computedType];
		}
		function shouldIgnoreEvent(event) {
			const computedOutsidePressEvent = getOutsidePressEvent();
			return computedOutsidePressEvent === "intentional" && event.type !== "click" || computedOutsidePressEvent === "sloppy" && event.type === "click";
		}
		function isEventWithinFloatingTree(event) {
			const nodeId = dataRef.current.floatingContext?.nodeId;
			const targetIsInsideChildren = tree && getNodeChildren(tree.nodesRef.current, nodeId).some((node) => isEventTargetWithin(event, node.context?.elements.floating));
			return isEventWithinOwnElements(event) || targetIsInsideChildren;
		}
		function closeOnPressOutside(event) {
			if (shouldIgnoreEvent(event)) {
				if (event.type !== "click" && !isEventWithinOwnElements(event)) {
					preventedPressSuppressionTimeout.clear();
					suppressNextOutsideClickRef.current = false;
				}
				clearInsideReactTree();
				return;
			}
			if (dataRef.current.insideReactTree) {
				clearInsideReactTree();
				return;
			}
			const target = getTarget(event);
			const inertSelector = `[${createAttribute("inert")}]`;
			const targetRoot = isElement(target) ? target.getRootNode() : null;
			const markers = Array.from((isShadowRoot(targetRoot) ? targetRoot : ownerDocument(store.select("floatingElement"))).querySelectorAll(inertSelector));
			const triggers = store.context.triggerElements;
			if (target && (triggers.hasElement(target) || triggers.hasMatchingElement((trigger) => contains(trigger, target)))) return;
			let targetRootAncestor = isElement(target) ? target : null;
			while (targetRootAncestor && !isLastTraversableNode(targetRootAncestor)) {
				const nextParent = getParentNode(targetRootAncestor);
				if (isLastTraversableNode(nextParent) || !isElement(nextParent)) break;
				targetRootAncestor = nextParent;
			}
			if (markers.length && isElement(target) && !isRootElement(target) && !contains(target, store.select("floatingElement")) && markers.every((marker) => !contains(targetRootAncestor, marker))) return;
			if (isHTMLElement(target) && !("touches" in event)) {
				const lastTraversableNode = isLastTraversableNode(target);
				const style = getComputedStyle$1(target);
				const scrollRe = /auto|scroll/;
				const isScrollableX = lastTraversableNode || scrollRe.test(style.overflowX);
				const isScrollableY = lastTraversableNode || scrollRe.test(style.overflowY);
				const canScrollX = isScrollableX && target.clientWidth > 0 && target.scrollWidth > target.clientWidth;
				const canScrollY = isScrollableY && target.clientHeight > 0 && target.scrollHeight > target.clientHeight;
				const isRTL = style.direction === "rtl";
				const pressedVerticalScrollbar = canScrollY && (isRTL ? event.offsetX <= target.offsetWidth - target.clientWidth : event.offsetX > target.clientWidth);
				const pressedHorizontalScrollbar = canScrollX && event.offsetY > target.clientHeight;
				if (pressedVerticalScrollbar || pressedHorizontalScrollbar) return;
			}
			if (isEventWithinFloatingTree(event)) return;
			if (getOutsidePressEvent() === "intentional" && suppressNextOutsideClickRef.current) {
				preventedPressSuppressionTimeout.clear();
				suppressNextOutsideClickRef.current = false;
				return;
			}
			if (typeof outsidePress$1 === "function" && !outsidePress$1(event)) return;
			if (hasBlockingChild("__outsidePressBubbles")) return;
			store.setOpen(false, createChangeEventDetails(outsidePress, event));
			clearInsideReactTree();
		}
		function handlePointerDown(event) {
			if (getOutsidePressEvent() !== "sloppy" || event.pointerType === "touch" || !store.select("open") || !enabled || isEventWithinOwnElements(event)) return;
			closeOnPressOutside(event);
		}
		function handleTouchStart(event) {
			if (getOutsidePressEvent() !== "sloppy" || !store.select("open") || !enabled || isEventWithinOwnElements(event)) return;
			const touch = event.touches[0];
			if (touch) {
				touchStateRef.current = {
					startTime: Date.now(),
					startX: touch.clientX,
					startY: touch.clientY,
					dismissOnTouchEnd: false,
					dismissOnMouseDown: true
				};
				cancelDismissOnEndTimeout.start(1e3, () => {
					if (touchStateRef.current) {
						touchStateRef.current.dismissOnTouchEnd = false;
						touchStateRef.current.dismissOnMouseDown = false;
					}
				});
			}
		}
		function addTargetEventListenerOnce(event, listener) {
			const target = getTarget(event);
			if (!target) return;
			const unsubscribe = addEventListener(target, event.type, () => {
				listener(event);
				unsubscribe();
			});
		}
		function handleTouchStartCapture(event) {
			currentPointerTypeRef.current = "touch";
			addTargetEventListenerOnce(event, handleTouchStart);
		}
		function closeOnPressOutsideCapture(event) {
			cancelDismissOnEndTimeout.clear();
			if (event.type === "pointerdown") currentPointerTypeRef.current = event.pointerType;
			if (event.type === "mousedown" && touchStateRef.current && !touchStateRef.current.dismissOnMouseDown) return;
			addTargetEventListenerOnce(event, (targetEvent) => {
				if (targetEvent.type === "pointerdown") handlePointerDown(targetEvent);
				else closeOnPressOutside(targetEvent);
			});
		}
		function handlePressEndCapture(event) {
			if (!pressStartedInsideRef.current) return;
			const pressStartedInsideDefaultPrevented = pressStartPreventedRef.current;
			resetPressStartState();
			if (getOutsidePressEvent() !== "intentional") return;
			if (event.type === "pointercancel") {
				if (pressStartedInsideDefaultPrevented) suppressImmediateOutsideClickAfterPreventedStart();
				return;
			}
			if (isEventWithinFloatingTree(event)) return;
			if (pressStartedInsideDefaultPrevented) {
				suppressImmediateOutsideClickAfterPreventedStart();
				return;
			}
			if (typeof outsidePress$1 === "function" && !outsidePress$1(event)) return;
			preventedPressSuppressionTimeout.clear();
			suppressNextOutsideClickRef.current = true;
			clearInsideReactTree();
		}
		function handleTouchMove(event) {
			if (getOutsidePressEvent() !== "sloppy" || !touchStateRef.current || isEventWithinOwnElements(event)) return;
			const touch = event.touches[0];
			if (!touch) return;
			const deltaX = Math.abs(touch.clientX - touchStateRef.current.startX);
			const deltaY = Math.abs(touch.clientY - touchStateRef.current.startY);
			const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
			if (distance > 5) touchStateRef.current.dismissOnTouchEnd = true;
			if (distance > 10) {
				closeOnPressOutside(event);
				cancelDismissOnEndTimeout.clear();
				touchStateRef.current = null;
			}
		}
		function handleTouchMoveCapture(event) {
			addTargetEventListenerOnce(event, handleTouchMove);
		}
		function handleTouchEnd(event) {
			if (getOutsidePressEvent() !== "sloppy" || !touchStateRef.current || isEventWithinOwnElements(event)) return;
			if (touchStateRef.current.dismissOnTouchEnd) closeOnPressOutside(event);
			cancelDismissOnEndTimeout.clear();
			touchStateRef.current = null;
		}
		function handleTouchEndCapture(event) {
			addTargetEventListenerOnce(event, handleTouchEnd);
		}
		const doc = ownerDocument(floatingElement);
		const unsubscribe = mergeCleanups(escapeKey$1 && mergeCleanups(addEventListener(doc, "keydown", closeOnEscapeKeyDown), addEventListener(doc, "compositionstart", handleCompositionStart), addEventListener(doc, "compositionend", handleCompositionEnd)), outsidePressEnabled && mergeCleanups(addEventListener(doc, "click", closeOnPressOutsideCapture, true), addEventListener(doc, "pointerdown", closeOnPressOutsideCapture, true), addEventListener(doc, "pointerup", handlePressEndCapture, true), addEventListener(doc, "pointercancel", handlePressEndCapture, true), addEventListener(doc, "mousedown", closeOnPressOutsideCapture, true), addEventListener(doc, "mouseup", handlePressEndCapture, true), addEventListener(doc, "touchstart", handleTouchStartCapture, true), addEventListener(doc, "touchmove", handleTouchMoveCapture, true), addEventListener(doc, "touchend", handleTouchEndCapture, true)));
		return () => {
			unsubscribe();
			compositionTimeout.clear();
			preventedPressSuppressionTimeout.clear();
			resetPressStartState();
			suppressNextOutsideClickRef.current = false;
		};
	}, [
		dataRef,
		floatingElement,
		escapeKey$1,
		outsidePressEnabled,
		outsidePress$1,
		open,
		enabled,
		escapeKeyBubbles,
		outsidePressBubbles,
		closeOnEscapeKeyDown,
		clearInsideReactTree,
		getOutsidePressEventProp,
		hasBlockingChild,
		isEventWithinOwnElements,
		tree,
		store,
		cancelDismissOnEndTimeout
	]);
	React.useEffect(clearInsideReactTree, [outsidePress$1, clearInsideReactTree]);
	const reference = React.useMemo(() => ({
		onKeyDown: closeOnEscapeKeyDown,
		onPointerDown: closeOnReferencePress,
		onClick: closeOnReferencePress
	}), [closeOnEscapeKeyDown, closeOnReferencePress]);
	const floating = React.useMemo(() => ({
		onKeyDown: closeOnEscapeKeyDown,
		onPointerDown: markInsidePressStartPrevented,
		onMouseDown: markInsidePressStartPrevented,
		onClickCapture: markInsideReactTree,
		onMouseDownCapture(event) {
			markInsideReactTree();
			markPressStartedInsideReactTree(event);
		},
		onPointerDownCapture(event) {
			markInsideReactTree();
			markPressStartedInsideReactTree(event);
		},
		onMouseUpCapture: markInsideReactTree,
		onTouchEndCapture: markInsideReactTree,
		onTouchMoveCapture: markInsideReactTree
	}), [
		closeOnEscapeKeyDown,
		markInsideReactTree,
		markPressStartedInsideReactTree,
		markInsidePressStartPrevented
	]);
	return React.useMemo(() => enabled ? {
		reference,
		floating,
		trigger: reference
	} : {}, [
		enabled,
		reference,
		floating
	]);
}
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/useOnFirstRender.mjs
function useOnFirstRender(fn) {
	const ref = React.useRef(true);
	if (ref.current) {
		ref.current = false;
		fn();
	}
}
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/store/createSelector.mjs
/**
* The NoOptionalParams type is a utility type that checks if a function has optional or default parameters.
* If the function has optional or default parameters, it returns a string literal type with an error message.
* Otherwise, it returns the original function type.
*
* This is used to enforce that the combiner function passed to createSelector does not have optional or default parameters,
* as memoization relies on the Function.length property, which does not account for optional or default parameters.
*/
/**
* Creates a selector function that can be used to derive values from the store's state.
*
* The combiner function can have up to three additional parameters, but it **cannot have optional or default parameters**.
*
* This function accepts up to six functions and combines them into a single selector function.
* The resulting selector will take the state from the combined selectors and any additional parameters required by the combiner.
*
* The return type of the resulting selector is determined by the return type of the combiner function.
*
* @example
* const selector = createSelector(
*  (state) => state.disabled
* );
*
* @example
* const selector = createSelector(
*   (state) => state.disabled,
*   (state) => state.open,
*   (disabled, open) => ({ disabled, open })
* );
*/
var createSelector = (a, b, c, d, e, f, ...other) => {
	if (other.length > 0) throw new Error(process.env.NODE_ENV !== "production" ? "Unsupported number of selectors" : formatErrorMessage(1));
	let selector;
	if (a && b && c && d && e && f) selector = (state, a1, a2, a3) => {
		return f(a(state, a1, a2, a3), b(state, a1, a2, a3), c(state, a1, a2, a3), d(state, a1, a2, a3), e(state, a1, a2, a3), a1, a2, a3);
	};
	else if (a && b && c && d && e) selector = (state, a1, a2, a3) => {
		return e(a(state, a1, a2, a3), b(state, a1, a2, a3), c(state, a1, a2, a3), d(state, a1, a2, a3), a1, a2, a3);
	};
	else if (a && b && c && d) selector = (state, a1, a2, a3) => {
		return d(a(state, a1, a2, a3), b(state, a1, a2, a3), c(state, a1, a2, a3), a1, a2, a3);
	};
	else if (a && b && c) selector = (state, a1, a2, a3) => {
		return c(a(state, a1, a2, a3), b(state, a1, a2, a3), a1, a2, a3);
	};
	else if (a && b) selector = (state, a1, a2, a3) => {
		return b(a(state, a1, a2, a3), a1, a2, a3);
	};
	else if (a) selector = a;
	else throw new Error("Missing arguments");
	return selector;
};
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/fastHooks.mjs
var hooks = [];
var currentInstance = void 0;
function getInstance() {
	return currentInstance;
}
function register(hook) {
	hooks.push(hook);
}
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/store/useStore.mjs
var useStoreImplementation = isReactVersionAtLeast(19) ? useStoreFast : useStoreLegacy;
function useStore(store, selector, a1, a2, a3) {
	return useStoreImplementation(store, selector, a1, a2, a3);
}
function useStoreR19(store, selector, a1, a2, a3) {
	const getSelection = React.useCallback(() => selector(store.getSnapshot(), a1, a2, a3), [
		store,
		selector,
		a1,
		a2,
		a3
	]);
	return useSyncExternalStore(store.subscribe, getSelection, getSelection);
}
register({
	before(instance) {
		instance.syncIndex = 0;
		if (!instance.didInitialize) {
			instance.syncTick = 1;
			instance.syncHooks = [];
			instance.didChangeStore = true;
			instance.getSnapshot = () => {
				let didChange = false;
				for (let i = 0; i < instance.syncHooks.length; i += 1) {
					const hook = instance.syncHooks[i];
					const value = hook.selector(hook.store.state, hook.a1, hook.a2, hook.a3);
					if (!Object.is(hook.value, value)) {
						didChange = true;
						hook.value = value;
					}
				}
				if (didChange) instance.syncTick += 1;
				return instance.syncTick;
			};
		}
	},
	after(instance) {
		if (instance.syncHooks.length > 0) {
			if (instance.didChangeStore) {
				instance.didChangeStore = false;
				instance.subscribe = (onStoreChange) => {
					const stores = /* @__PURE__ */ new Set();
					for (const hook of instance.syncHooks) stores.add(hook.store);
					const unsubscribes = [];
					for (const store of stores) unsubscribes.push(store.subscribe(onStoreChange));
					return () => {
						for (const unsubscribe of unsubscribes) unsubscribe();
					};
				};
			}
			useSyncExternalStore(instance.subscribe, instance.getSnapshot, instance.getSnapshot);
		}
	}
});
function useStoreFast(store, selector, a1, a2, a3) {
	const instance = getInstance();
	if (!instance) return useStoreR19(store, selector, a1, a2, a3);
	const index = instance.syncIndex;
	instance.syncIndex += 1;
	let hook;
	if (!instance.didInitialize) {
		hook = {
			store,
			selector,
			a1,
			a2,
			a3,
			value: selector(store.getSnapshot(), a1, a2, a3)
		};
		instance.syncHooks.push(hook);
	} else {
		hook = instance.syncHooks[index];
		if (hook.store !== store || hook.selector !== selector || !Object.is(hook.a1, a1) || !Object.is(hook.a2, a2) || !Object.is(hook.a3, a3)) {
			if (hook.store !== store) instance.didChangeStore = true;
			hook.store = store;
			hook.selector = selector;
			hook.a1 = a1;
			hook.a2 = a2;
			hook.a3 = a3;
			hook.value = selector(store.getSnapshot(), a1, a2, a3);
		}
	}
	return hook.value;
}
function useStoreLegacy(store, selector, a1, a2, a3) {
	return useSyncExternalStoreWithSelector(store.subscribe, store.getSnapshot, store.getSnapshot, (state) => selector(state, a1, a2, a3));
}
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/store/Store.mjs
/**
* A data store implementation that allows subscribing to state changes and updating the state.
* It uses an observer pattern to notify subscribers when the state changes.
*/
var Store = class {
	/**
	* The current state of the store.
	* This property is updated immediately when the state changes as a result of calling {@link setState}, {@link update}, or {@link set}.
	* To subscribe to state changes, use the {@link useState} method. The value returned by {@link useState} is updated after the component renders (similarly to React's useState).
	* The values can be used directly (to avoid subscribing to the store) in effects or event handlers.
	*
	* Do not modify properties in state directly. Instead, use the provided methods to ensure proper state management and listener notification.
	*/
	constructor(state) {
		this.state = state;
		this.listeners = /* @__PURE__ */ new Set();
		this.updateTick = 0;
	}
	/**
	* Registers a listener that will be called whenever the store's state changes.
	*
	* @param fn The listener function to be called on state changes.
	* @returns A function to unsubscribe the listener.
	*/
	subscribe = (fn) => {
		this.listeners.add(fn);
		return () => {
			this.listeners.delete(fn);
		};
	};
	/**
	* Returns the current state of the store.
	*/
	getSnapshot = () => {
		return this.state;
	};
	/**
	* Updates the entire store's state and notifies all registered listeners.
	*
	* @param newState The new state to set for the store.
	*/
	setState(newState) {
		if (this.state === newState) return;
		this.state = newState;
		this.updateTick += 1;
		const currentTick = this.updateTick;
		for (const listener of this.listeners) {
			if (currentTick !== this.updateTick) return;
			listener(newState);
		}
	}
	/**
	* Merges the provided changes into the current state and notifies listeners if there are changes.
	*
	* @param changes An object containing the changes to apply to the current state.
	*/
	update(changes) {
		for (const key in changes) if (!Object.is(this.state[key], changes[key])) {
			this.setState({
				...this.state,
				...changes
			});
			return;
		}
	}
	/**
	* Sets a specific key in the store's state to a new value and notifies listeners if the value has changed.
	*
	* @param key The key in the store's state to update.
	* @param value The new value to set for the specified key.
	*/
	set(key, value) {
		if (!Object.is(this.state[key], value)) this.setState({
			...this.state,
			[key]: value
		});
	}
	/**
	* Gives the state a new reference and updates all registered listeners.
	*/
	notifyAll() {
		const newState = { ...this.state };
		this.setState(newState);
	}
	use(selector, a1, a2, a3) {
		return useStore(this, selector, a1, a2, a3);
	}
};
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/store/ReactStore.mjs
/**
* A Store that supports controlled state keys, non-reactive values and provides utility methods for React.
*/
var ReactStore = class extends Store {
	/**
	* Creates a new ReactStore instance.
	*
	* @param state Initial state of the store.
	* @param context Non-reactive context values.
	* @param selectors Optional selectors for use with `useState`.
	*/
	constructor(state, context = {}, selectors) {
		super(state);
		this.context = context;
		this.selectors = selectors;
	}
	/**
	* Non-reactive values such as refs, callbacks, etc.
	*/
	/**
	* Synchronizes a single external value into the store.
	*
	* Note that the while the value in `state` is updated immediately, the value returned
	* by `useState` is updated before the next render (similarly to React's `useState`).
	*/
	useSyncedValue(key, value) {
		React.useDebugValue(key);
		const store = this;
		useIsoLayoutEffect(() => {
			if (store.state[key] !== value) store.set(key, value);
		}, [
			store,
			key,
			value
		]);
	}
	/**
	* Synchronizes a single external value into the store and
	* cleans it up (sets to `undefined`) on unmount.
	*
	* Note that the while the value in `state` is updated immediately, the value returned
	* by `useState` is updated before the next render (similarly to React's `useState`).
	*/
	useSyncedValueWithCleanup(key, value) {
		const store = this;
		useIsoLayoutEffect(() => {
			if (store.state[key] !== value) store.set(key, value);
			return () => {
				store.set(key, void 0);
			};
		}, [
			store,
			key,
			value
		]);
	}
	/**
	* Synchronizes multiple external values into the store.
	*
	* Note that the while the values in `state` are updated immediately, the values returned
	* by `useState` are updated before the next render (similarly to React's `useState`).
	*/
	useSyncedValues(statePart) {
		const store = this;
		if (process.env.NODE_ENV !== "production") {
			React.useDebugValue(statePart, (p) => Object.keys(p));
			const keys = React.useRef(Object.keys(statePart)).current;
			const nextKeys = Object.keys(statePart);
			if (keys.length !== nextKeys.length || keys.some((key, index) => key !== nextKeys[index])) console.error("ReactStore.useSyncedValues expects the same prop keys on every render. Keys should be stable.");
		}
		useIsoLayoutEffect(() => {
			store.update(statePart);
		}, [store, ...Object.values(statePart)]);
	}
	/**
	* Registers a controllable prop pair (`controlled`, `defaultValue`) for a specific key. If `controlled`
	* is non-undefined, the store's state at `key` is updated to match `controlled`.
	*/
	useControlledProp(key, controlled) {
		React.useDebugValue(key);
		const store = this;
		const isControlled = controlled !== void 0;
		useIsoLayoutEffect(() => {
			if (isControlled && !Object.is(store.state[key], controlled)) store.setState({
				...store.state,
				[key]: controlled
			});
		}, [
			store,
			key,
			controlled,
			isControlled
		]);
		if (process.env.NODE_ENV !== "production") {
			const cache = this.controlledValues ??= /* @__PURE__ */ new Map();
			if (!cache.has(key)) cache.set(key, isControlled);
			const previouslyControlled = cache.get(key);
			if (previouslyControlled !== void 0 && previouslyControlled !== isControlled) console.error(`A component is changing the ${isControlled ? "" : "un"}controlled state of ${key.toString()} to be ${isControlled ? "un" : ""}controlled. Elements should not switch from uncontrolled to controlled (or vice versa).`);
		}
	}
	/** Gets the current value from the store using a selector with the provided key.
	*
	* @param key Key of the selector to use.
	*/
	select(key, a1, a2, a3) {
		const selector = this.selectors[key];
		return selector(this.state, a1, a2, a3);
	}
	/**
	* Returns a value from the store's state using a selector function.
	* Used to subscribe to specific parts of the state.
	* This methods causes a rerender whenever the selected state changes.
	*
	* @param key Key of the selector to use.
	*/
	useState(key, a1, a2, a3) {
		React.useDebugValue(key);
		return useStore(this, this.selectors[key], a1, a2, a3);
	}
	/**
	* Wraps a function with `useStableCallback` to ensure it has a stable reference
	* and assigns it to the context.
	*
	* @param key Key of the event callback. Must be a function in the context.
	* @param fn Function to assign.
	*/
	useContextCallback(key, fn) {
		React.useDebugValue(key);
		const stableFunction = useStableCallback(fn ?? NOOP);
		this.context[key] = stableFunction;
	}
	/**
	* Returns a stable setter function for a specific key in the store's state.
	* It's commonly used to pass as a ref callback to React elements.
	*
	* @param key Key of the state to set.
	*/
	useStateSetter(key) {
		const ref = React.useRef(void 0);
		if (ref.current === void 0) ref.current = (value) => {
			this.set(key, value);
		};
		return ref.current;
	}
	/**
	* Observes changes derived from the store's selectors and calls the listener when the selected value changes.
	*
	* @param key Key of the selector to observe.
	* @param listener Listener function called when the selector result changes.
	*/
	observe(selector, listener) {
		let selectFn;
		if (typeof selector === "function") selectFn = selector;
		else selectFn = this.selectors[selector];
		let prevValue = selectFn(this.state);
		listener(prevValue, prevValue, this);
		return this.subscribe((nextState) => {
			const nextValue = selectFn(nextState);
			if (!Object.is(prevValue, nextValue)) {
				const oldValue = prevValue;
				prevValue = nextValue;
				listener(nextValue, oldValue, this);
			}
		});
	}
};
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/floating-ui-react/components/FloatingRootStore.mjs
var selectors$1 = {
	open: createSelector((state) => state.open),
	transitionStatus: createSelector((state) => state.transitionStatus),
	domReferenceElement: createSelector((state) => state.domReferenceElement),
	referenceElement: createSelector((state) => state.positionReference ?? state.referenceElement),
	floatingElement: createSelector((state) => state.floatingElement),
	floatingId: createSelector((state) => state.floatingId)
};
var FloatingRootStore = class extends ReactStore {
	constructor(options) {
		const { syncOnly, nested, onOpenChange, triggerElements, ...initialState } = options;
		super({
			...initialState,
			positionReference: initialState.referenceElement,
			domReferenceElement: initialState.referenceElement
		}, {
			onOpenChange,
			dataRef: { current: {} },
			events: createEventEmitter(),
			nested,
			triggerElements
		}, selectors$1);
		this.syncOnly = syncOnly;
	}
	/**
	* Syncs the event used by hover logic to distinguish hover-open from click-like interaction.
	*/
	syncOpenEvent = (newOpen, event) => {
		if (!newOpen || !this.state.open || event != null && isClickLikeEvent(event)) this.context.dataRef.current.openEvent = newOpen ? event : void 0;
	};
	/**
	* Runs the root-owned side effects for an open state change.
	*/
	dispatchOpenChange = (newOpen, eventDetails) => {
		this.syncOpenEvent(newOpen, eventDetails.event);
		const details = {
			open: newOpen,
			reason: eventDetails.reason,
			nativeEvent: eventDetails.event,
			nested: this.context.nested,
			triggerElement: eventDetails.trigger
		};
		this.context.events.emit("openchange", details);
	};
	/**
	* Emits the `openchange` event through the internal event emitter and calls the `onOpenChange` handler with the provided arguments.
	*
	* @param newOpen The new open state.
	* @param eventDetails Details about the event that triggered the open state change.
	*/
	setOpen = (newOpen, eventDetails) => {
		if (this.syncOnly) {
			this.context.onOpenChange?.(newOpen, eventDetails);
			return;
		}
		this.dispatchOpenChange(newOpen, eventDetails);
		this.context.onOpenChange?.(newOpen, eventDetails);
	};
};
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/floating-ui-react/hooks/useSyncedFloatingRootContext.mjs
/**
* Keeps a FloatingRootStore in sync with the provided PopupStore.
* Uses the provided FloatingRootStore when one exists, otherwise creates one once and updates it on every render.
*/
function useSyncedFloatingRootContext(options) {
	const { popupStore, treatPopupAsFloatingElement = false, floatingRootContext: floatingRootContextProp, floatingId, nested, onOpenChange } = options;
	const open = popupStore.useState("open");
	const referenceElement = popupStore.useState("activeTriggerElement");
	const floatingElement = popupStore.useState(treatPopupAsFloatingElement ? "popupElement" : "positionerElement");
	const triggerElements = popupStore.context.triggerElements;
	const handleOpenChange = onOpenChange;
	const internalStoreRef = React.useRef(null);
	if (floatingRootContextProp === void 0 && internalStoreRef.current === null) internalStoreRef.current = new FloatingRootStore({
		open,
		transitionStatus: void 0,
		referenceElement,
		floatingElement,
		triggerElements,
		onOpenChange: handleOpenChange,
		floatingId,
		syncOnly: true,
		nested
	});
	const store = floatingRootContextProp ?? internalStoreRef.current;
	popupStore.useSyncedValue("floatingId", floatingId);
	useIsoLayoutEffect(() => {
		const valuesToSync = {
			open,
			floatingId,
			referenceElement,
			floatingElement
		};
		if (isElement(referenceElement)) valuesToSync.domReferenceElement = referenceElement;
		if (store.state.positionReference === store.state.referenceElement) valuesToSync.positionReference = referenceElement;
		store.update(valuesToSync);
	}, [
		open,
		floatingId,
		referenceElement,
		floatingElement,
		store
	]);
	store.context.onOpenChange = handleOpenChange;
	store.context.nested = nested;
	return store;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/internals/useTransitionStatus.mjs
/**
* Provides a status string for CSS animations.
* @param open - a boolean that determines if the element is open.
* @param enableIdleState - a boolean that enables the `'idle'` state between `'starting'` and `'ending'`
*/
function useTransitionStatus(open, enableIdleState = false, deferEndingState = false) {
	const [transitionStatus, setTransitionStatus] = React.useState(open && enableIdleState ? "idle" : void 0);
	const [mounted, setMounted] = React.useState(open);
	if (open && !mounted) {
		setMounted(true);
		setTransitionStatus("starting");
	}
	if (!open && mounted && transitionStatus !== "ending" && !deferEndingState) setTransitionStatus("ending");
	if (!open && !mounted && transitionStatus === "ending") setTransitionStatus(void 0);
	useIsoLayoutEffect(() => {
		if (!open && mounted && transitionStatus !== "ending" && deferEndingState) {
			const frame = AnimationFrame.request(() => {
				setTransitionStatus("ending");
			});
			return () => {
				AnimationFrame.cancel(frame);
			};
		}
	}, [
		open,
		mounted,
		transitionStatus,
		deferEndingState
	]);
	useIsoLayoutEffect(() => {
		if (!open || enableIdleState) return;
		const frame = AnimationFrame.request(() => {
			setTransitionStatus(void 0);
		});
		return () => {
			AnimationFrame.cancel(frame);
		};
	}, [enableIdleState, open]);
	useIsoLayoutEffect(() => {
		if (!open || !enableIdleState) return;
		if (open && mounted && transitionStatus !== "idle") setTransitionStatus("starting");
		const frame = AnimationFrame.request(() => {
			setTransitionStatus("idle");
		});
		return () => {
			AnimationFrame.cancel(frame);
		};
	}, [
		enableIdleState,
		open,
		mounted,
		transitionStatus
	]);
	return {
		mounted,
		setMounted,
		transitionStatus
	};
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/internals/useAnimationsFinished.mjs
/**
* Executes a function once all animations have finished on the provided element.
* @param elementOrRef - The element to watch for animations.
* @param waitForStartingStyleRemoved - Whether to wait for [data-starting-style] to be removed before checking for animations.
* @param treatAbortedAsFinished - Whether to treat aborted animations as finished. If `false`, and there are aborted animations,
*   the function will check again if any new animations have started and wait for them to finish.
* @returns A function that takes a callback to execute once all animations have finished, and an optional AbortSignal to abort the callback
*/
function useAnimationsFinished(elementOrRef, waitForStartingStyleRemoved = false, treatAbortedAsFinished = true) {
	const frame = useAnimationFrame();
	return useStableCallback((fnToExecute, signal = null) => {
		frame.cancel();
		const element = resolveRef(elementOrRef);
		if (element == null) return;
		const resolvedElement = element;
		const done = () => {
			ReactDOM$1.flushSync(fnToExecute);
		};
		if (typeof resolvedElement.getAnimations !== "function" || globalThis.BASE_UI_ANIMATIONS_DISABLED) {
			fnToExecute();
			return;
		}
		function exec() {
			Promise.all(resolvedElement.getAnimations().map((animation) => animation.finished)).then(() => {
				if (!signal?.aborted) done();
			}).catch(() => {
				if (treatAbortedAsFinished) {
					if (!signal?.aborted) done();
					return;
				}
				const currentAnimations = resolvedElement.getAnimations();
				if (!signal?.aborted && currentAnimations.length > 0 && currentAnimations.some((animation) => animation.pending || animation.playState !== "finished")) exec();
			});
		}
		if (waitForStartingStyleRemoved) {
			const startingStyleAttribute = TransitionStatusDataAttributes.startingStyle;
			if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
				frame.request(exec);
				return;
			}
			const attributeObserver = new MutationObserver(() => {
				if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
					attributeObserver.disconnect();
					exec();
				}
			});
			attributeObserver.observe(resolvedElement, {
				attributes: true,
				attributeFilter: [startingStyleAttribute]
			});
			signal?.addEventListener("abort", () => attributeObserver.disconnect(), { once: true });
			return;
		}
		frame.request(exec);
	});
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/internals/useOpenChangeComplete.mjs
/**
* Calls the provided function when the CSS open/close animation or transition completes.
*/
function useOpenChangeComplete(parameters) {
	const { enabled = true, open, ref, onComplete: onCompleteParam } = parameters;
	const onComplete = useStableCallback(onCompleteParam);
	const runOnceAnimationsFinish = useAnimationsFinished(ref, open, false);
	React.useEffect(() => {
		if (!enabled) return;
		const abortController = new AbortController();
		runOnceAnimationsFinish(onComplete, abortController.signal);
		return () => {
			abortController.abort();
		};
	}, [
		enabled,
		open,
		onComplete,
		runOnceAnimationsFinish
	]);
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/utils/popups/popupStoreUtils.mjs
var FOCUSABLE_POPUP_PROPS = {
	tabIndex: -1,
	[FOCUSABLE_ATTRIBUTE]: ""
};
/**
* Returns the default `initialFocus` resolver for a popup. When opened by touch it focuses the
* popup element itself to prevent the virtual keyboard from opening (required for Android
* specifically; iOS handles this automatically). Otherwise it falls back to the default behavior.
*/
function createDefaultInitialFocus(popupRef) {
	return (interactionType) => interactionType === "touch" ? popupRef.current : true;
}
function usePopupStore(externalStore, createStore, treatPopupAsFloatingElement = false) {
	const floatingId = useId$1();
	const nested = useFloatingParentNodeId() != null;
	const internalStoreRef = React.useRef(null);
	if (externalStore === void 0 && internalStoreRef.current === null) internalStoreRef.current = createStore(floatingId, nested);
	const store = externalStore ?? internalStoreRef.current;
	useSyncedFloatingRootContext({
		popupStore: store,
		treatPopupAsFloatingElement,
		floatingRootContext: store.state.floatingRootContext,
		floatingId,
		nested,
		onOpenChange: store.setOpen
	});
	return {
		store,
		internalStore: internalStoreRef.current
	};
}
/**
* Returns a callback ref that registers/unregisters the trigger element in the store.
*
* @param store The Store instance where the trigger should be registered.
*/
function useTriggerRegistration(id, store) {
	const registeredElementIdRef = React.useRef(null);
	const registeredElementRef = React.useRef(null);
	return React.useCallback((element) => {
		if (id === void 0) return;
		let shouldSyncTriggerCount = false;
		if (registeredElementIdRef.current !== null) {
			const registeredId = registeredElementIdRef.current;
			const registeredElement = registeredElementRef.current;
			const currentElement = store.context.triggerElements.getById(registeredId);
			if (registeredElement && currentElement === registeredElement) {
				store.context.triggerElements.delete(registeredId);
				shouldSyncTriggerCount = true;
			}
			registeredElementIdRef.current = null;
			registeredElementRef.current = null;
		}
		if (element !== null) {
			registeredElementIdRef.current = id;
			registeredElementRef.current = element;
			store.context.triggerElements.add(id, element);
			shouldSyncTriggerCount = true;
		}
		if (shouldSyncTriggerCount) {
			const triggerCount = store.context.triggerElements.size;
			if (store.select("open") && store.state.triggerCount !== triggerCount) store.set("triggerCount", triggerCount);
		}
	}, [store, id]);
}
function setPopupOpenState(state, open, trigger, preventUnmountOnClose = false) {
	if (open) state.preventUnmountingOnClose = false;
	else if (preventUnmountOnClose) state.preventUnmountingOnClose = true;
	const triggerId = trigger?.id ?? null;
	if (triggerId || open) {
		state.activeTriggerId = triggerId;
		state.activeTriggerElement = trigger ?? null;
	}
}
function attachPreventUnmountOnClose(eventDetails) {
	let preventUnmountOnClose = false;
	eventDetails.preventUnmountOnClose = () => {
		preventUnmountOnClose = true;
	};
	return () => preventUnmountOnClose;
}
function useInitialOpenSync(store, openProp, defaultOpen, defaultTriggerId) {
	useOnFirstRender(() => {
		if (openProp === void 0 && store.state.open === false && defaultOpen) store.state = {
			...store.state,
			open: true,
			activeTriggerId: defaultTriggerId,
			preventUnmountingOnClose: false
		};
	});
}
/**
* Sets up trigger data forwarding to the store.
*
* @param triggerId Id of the trigger.
* @param triggerElementRef Ref for the trigger DOM element.
* @param store The Store instance managing the popup state.
* @param stateUpdates An object with state updates to apply when the trigger is active.
*/
function useTriggerDataForwarding(triggerId, triggerElementRef, store, stateUpdates) {
	const isMountedByThisTrigger = store.useState("isMountedByTrigger", triggerId);
	const baseRegisterTrigger = useTriggerRegistration(triggerId, store);
	const registerTrigger = useStableCallback((element) => {
		baseRegisterTrigger(element);
		if (!element) return;
		const open = store.select("open");
		const activeTriggerId = store.select("activeTriggerId");
		if (activeTriggerId === triggerId) {
			store.update({
				activeTriggerElement: element,
				...open ? stateUpdates : null
			});
			return;
		}
		if (activeTriggerId == null && open) store.update({
			activeTriggerId: triggerId,
			activeTriggerElement: element,
			...stateUpdates
		});
	});
	useIsoLayoutEffect(() => {
		if (isMountedByThisTrigger) store.update({
			activeTriggerElement: triggerElementRef.current,
			...stateUpdates
		});
	}, [
		isMountedByThisTrigger,
		store,
		triggerElementRef,
		...Object.values(stateUpdates)
	]);
	return {
		registerTrigger,
		isMountedByThisTrigger
	};
}
/**
* Keeps trigger registration state synchronized while the popup is open.
*
* When a popup opens without an explicit trigger id and exactly one trigger is registered, that
* trigger is claimed as the active trigger. When the active trigger id is still registered but its
* element changed, the active element is refreshed. When the active trigger unregisters, the
* default path preserves existing ownership so non-closing popup families do not silently claim a
* different trigger while staying open.
*
* If `closeOnActiveTriggerUnmount` is enabled, unregistering the active trigger requests a close
* after a microtask so a same-tick replacement trigger with the same id can register first.
*
* This should be called on the Root part.
*
* @param store The Store instance managing the popup state.
* @param options Options for active trigger unmount behavior.
*/
function useImplicitActiveTrigger(store, options = {}) {
	const { closeOnActiveTriggerUnmount = false } = options;
	const open = store.useState("open");
	useIsoLayoutEffect(() => {
		if (!open) {
			if (store.state.triggerCount !== 0) store.set("triggerCount", 0);
			return;
		}
		const triggerCount = store.context.triggerElements.size;
		const stateUpdates = {};
		if (store.state.triggerCount !== triggerCount) stateUpdates.triggerCount = triggerCount;
		const activeTriggerId = store.select("activeTriggerId");
		let lostActiveTriggerId = null;
		if (activeTriggerId) {
			const activeTriggerElement = store.context.triggerElements.getById(activeTriggerId);
			if (!activeTriggerElement) lostActiveTriggerId = activeTriggerId;
			else if (activeTriggerElement !== store.state.activeTriggerElement) stateUpdates.activeTriggerElement = activeTriggerElement;
		}
		if (!lostActiveTriggerId && !activeTriggerId && triggerCount === 1) {
			const iteratorResult = store.context.triggerElements.entries().next();
			if (!iteratorResult.done) {
				const [implicitTriggerId, implicitTriggerElement] = iteratorResult.value;
				stateUpdates.activeTriggerId = implicitTriggerId;
				stateUpdates.activeTriggerElement = implicitTriggerElement;
			}
		}
		if (stateUpdates.triggerCount !== void 0 || stateUpdates.activeTriggerId !== void 0 || stateUpdates.activeTriggerElement !== void 0) store.update(stateUpdates);
		if (lostActiveTriggerId) {
			if (closeOnActiveTriggerUnmount) queueMicrotask(() => {
				if (store.select("open") && store.select("activeTriggerId") === lostActiveTriggerId && !store.context.triggerElements.getById(lostActiveTriggerId)) {
					const eventDetails = createChangeEventDetails(none);
					store.setOpen(false, eventDetails);
					if (!eventDetails.isCanceled) store.update({
						activeTriggerId: null,
						activeTriggerElement: null
					});
				}
			});
		}
	}, [
		open,
		store,
		store.useState("triggerCount"),
		closeOnActiveTriggerUnmount
	]);
}
/**
* Manages the mounted state of the popup.
* Sets up the transition status listeners and handles unmounting when needed.
* Updates the `mounted`, `transitionStatus`, and `preventUnmountingOnClose` states in the store.
*
* @param open Whether the popup is open.
* @param store The Store instance managing the popup state.
* @param onUnmount Optional callback to be called when the popup is unmounted.
*
* @returns A function to forcibly unmount the popup.
*/
function useOpenStateTransitions(open, store, onUnmount) {
	const { mounted, setMounted, transitionStatus } = useTransitionStatus(open);
	const preventUnmountingOnClose = store.useState("preventUnmountingOnClose");
	const syncedPreventUnmountingOnClose = open ? false : preventUnmountingOnClose;
	store.useSyncedValues({
		mounted,
		transitionStatus,
		preventUnmountingOnClose: syncedPreventUnmountingOnClose
	});
	const forceUnmount = useStableCallback(() => {
		setMounted(false);
		store.update({
			activeTriggerId: null,
			activeTriggerElement: null,
			mounted: false,
			preventUnmountingOnClose: false
		});
		onUnmount?.();
		store.context.onOpenChangeComplete?.(false);
	});
	useOpenChangeComplete({
		enabled: mounted && !open && !syncedPreventUnmountingOnClose,
		open,
		ref: store.context.popupRef,
		onComplete() {
			if (!open) forceUnmount();
		}
	});
	return {
		forceUnmount,
		transitionStatus
	};
}
function usePopupInteractionProps(store, statePart) {
	store.useSyncedValues(statePart);
	useIsoLayoutEffect(() => () => {
		store.update({
			activeTriggerProps: EMPTY_OBJECT,
			inactiveTriggerProps: EMPTY_OBJECT,
			popupProps: EMPTY_OBJECT
		});
	}, [store]);
}
function usePopupRootSync(store, open) {
	useIsoLayoutEffect(() => {
		if (!open && store.state.openMethod !== null) store.set("openMethod", null);
	}, [open, store]);
	useIsoLayoutEffect(() => () => {
		if (store.state.openMethod !== null) store.set("openMethod", null);
	}, [store]);
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/utils/popups/popupTriggerMap.mjs
/**
* Data structure to keep track of popup trigger elements by their IDs.
* Uses both a set of Elements and a map of IDs to Elements for efficient lookups.
*/
var PopupTriggerMap = class {
	constructor() {
		this.elementsSet = /* @__PURE__ */ new Set();
		this.idMap = /* @__PURE__ */ new Map();
	}
	/**
	* Adds a trigger element with the given ID.
	*
	* Note: The provided element is assumed to not be registered under multiple IDs.
	*/
	add(id, element) {
		const existingElement = this.idMap.get(id);
		if (existingElement === element) return;
		if (existingElement !== void 0) this.elementsSet.delete(existingElement);
		this.elementsSet.add(element);
		this.idMap.set(id, element);
		if (process.env.NODE_ENV !== "production") {
			if (this.elementsSet.size !== this.idMap.size) throw new Error("Base UI: A trigger element cannot be registered under multiple IDs in PopupTriggerMap.");
		}
	}
	/**
	* Removes the trigger element with the given ID.
	*/
	delete(id) {
		const element = this.idMap.get(id);
		if (element) {
			this.elementsSet.delete(element);
			this.idMap.delete(id);
		}
	}
	/**
	* Whether the given element is registered as a trigger.
	*/
	hasElement(element) {
		return this.elementsSet.has(element);
	}
	/**
	* Whether there is a registered trigger element matching the given predicate.
	*/
	hasMatchingElement(predicate) {
		for (const element of this.elementsSet) if (predicate(element)) return true;
		return false;
	}
	/**
	* Returns the trigger element associated with the given ID, or undefined if no such element exists.
	*/
	getById(id) {
		return this.idMap.get(id);
	}
	/**
	* Returns an iterable of all registered trigger entries, where each entry is a tuple of [id, element].
	*/
	entries() {
		return this.idMap.entries();
	}
	/**
	* Returns an iterable of all registered trigger elements.
	*/
	elements() {
		return this.elementsSet.values();
	}
	/**
	* Returns the number of registered trigger elements.
	*/
	get size() {
		return this.idMap.size;
	}
};
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/floating-ui-react/utils/getEmptyRootContext.mjs
function getEmptyRootContext() {
	return new FloatingRootStore({
		open: false,
		transitionStatus: void 0,
		floatingElement: null,
		referenceElement: null,
		triggerElements: new PopupTriggerMap(),
		floatingId: void 0,
		syncOnly: false,
		nested: false,
		onOpenChange: void 0
	});
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/utils/popups/store.mjs
/**
* State common to all popup stores.
*/
function createInitialPopupStoreState() {
	return {
		open: false,
		openProp: void 0,
		mounted: false,
		transitionStatus: void 0,
		floatingRootContext: getEmptyRootContext(),
		floatingId: void 0,
		triggerCount: 0,
		preventUnmountingOnClose: false,
		payload: void 0,
		activeTriggerId: null,
		activeTriggerElement: null,
		triggerIdProp: void 0,
		popupElement: null,
		positionerElement: null,
		activeTriggerProps: EMPTY_OBJECT,
		inactiveTriggerProps: EMPTY_OBJECT,
		popupProps: EMPTY_OBJECT
	};
}
function createPopupFloatingRootContext(triggerElements, floatingId, nested = false) {
	return new FloatingRootStore({
		open: false,
		transitionStatus: void 0,
		floatingElement: null,
		referenceElement: null,
		triggerElements,
		floatingId,
		syncOnly: true,
		nested,
		onOpenChange: void 0
	});
}
var activeTriggerIdSelector = createSelector((state) => state.triggerIdProp ?? state.activeTriggerId);
var openSelector = createSelector((state) => state.openProp ?? state.open);
var popupIdSelector = createSelector((state) => {
	return (state.popupElement?.id ?? state.floatingId) || void 0;
});
function triggerOwnsOpenPopup(state, triggerId) {
	return triggerId !== void 0 && openSelector(state) && activeTriggerIdSelector(state) === triggerId;
}
function triggerOwnsOpenPopupOrIsOnlyTrigger(state, triggerId) {
	if (triggerOwnsOpenPopup(state, triggerId)) return true;
	return triggerId !== void 0 && openSelector(state) && activeTriggerIdSelector(state) == null && state.triggerCount === 1;
}
var popupStoreSelectors = {
	open: openSelector,
	mounted: createSelector((state) => state.mounted),
	transitionStatus: createSelector((state) => state.transitionStatus),
	floatingRootContext: createSelector((state) => state.floatingRootContext),
	triggerCount: createSelector((state) => state.triggerCount),
	preventUnmountingOnClose: createSelector((state) => state.preventUnmountingOnClose),
	payload: createSelector((state) => state.payload),
	activeTriggerId: activeTriggerIdSelector,
	activeTriggerElement: createSelector((state) => state.mounted ? state.activeTriggerElement : null),
	popupId: popupIdSelector,
	/**
	* Whether the trigger with the given ID was used to open the popup.
	*/
	isTriggerActive: createSelector((state, triggerId) => triggerId !== void 0 && activeTriggerIdSelector(state) === triggerId),
	/**
	* Whether the popup is open and was activated by a trigger with the given ID.
	*/
	isOpenedByTrigger: createSelector((state, triggerId) => triggerOwnsOpenPopup(state, triggerId)),
	/**
	* Whether the popup is mounted and was activated by a trigger with the given ID.
	*/
	isMountedByTrigger: createSelector((state, triggerId) => triggerId !== void 0 && activeTriggerIdSelector(state) === triggerId && state.mounted),
	triggerProps: createSelector((state, isActive) => isActive ? state.activeTriggerProps : state.inactiveTriggerProps),
	/**
	* Popup id for the trigger that currently owns the open popup.
	*/
	triggerPopupId: createSelector((state, triggerId) => triggerOwnsOpenPopupOrIsOnlyTrigger(state, triggerId) ? popupIdSelector(state) : void 0),
	popupProps: createSelector((state) => state.popupProps),
	popupElement: createSelector((state) => state.popupElement),
	positionerElement: createSelector((state) => state.positionerElement)
};
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/dialog/popup/DialogPopupCssVars.mjs
var DialogPopupCssVars = /*#__PURE__*/ function(DialogPopupCssVars) {
	/**
	* Indicates how many dialogs are nested within.
	* @type {number}
	*/
	DialogPopupCssVars["nestedDialogs"] = "--nested-dialogs";
	return DialogPopupCssVars;
}({});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/dialog/popup/DialogPopupDataAttributes.mjs
var DialogPopupDataAttributes = function(DialogPopupDataAttributes) {
	/**
	* Present when the dialog is open.
	*/
	DialogPopupDataAttributes[DialogPopupDataAttributes["open"] = CommonPopupDataAttributes.open] = "open";
	/**
	* Present when the dialog is closed.
	*/
	DialogPopupDataAttributes[DialogPopupDataAttributes["closed"] = CommonPopupDataAttributes.closed] = "closed";
	/**
	* Present when the dialog is animating in.
	*/
	DialogPopupDataAttributes[DialogPopupDataAttributes["startingStyle"] = CommonPopupDataAttributes.startingStyle] = "startingStyle";
	/**
	* Present when the dialog is animating out.
	*/
	DialogPopupDataAttributes[DialogPopupDataAttributes["endingStyle"] = CommonPopupDataAttributes.endingStyle] = "endingStyle";
	/**
	* Present when the dialog is nested within another dialog.
	*/
	DialogPopupDataAttributes["nested"] = "data-nested";
	/**
	* Present when the dialog has other open dialogs nested within it.
	*/
	DialogPopupDataAttributes["nestedDialogOpen"] = "data-nested-dialog-open";
	return DialogPopupDataAttributes;
}({});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/dialog/portal/DialogPortalContext.mjs
var DialogPortalContext = /*#__PURE__*/ React.createContext(void 0);
if (process.env.NODE_ENV !== "production") DialogPortalContext.displayName = "DialogPortalContext";
function useDialogPortalContext() {
	const value = React.useContext(DialogPortalContext);
	if (value === void 0) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: <Dialog.Portal> is missing." : formatErrorMessage(26));
	return value;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/internals/composite/composite.mjs
var ARROW_UP = "ArrowUp";
var ARROW_DOWN = "ArrowDown";
var ARROW_LEFT = "ArrowLeft";
var ARROW_RIGHT = "ArrowRight";
var HOME = "Home";
var HORIZONTAL_KEYS = /* @__PURE__ */ new Set([ARROW_LEFT, ARROW_RIGHT]);
var HORIZONTAL_KEYS_WITH_EXTRA_KEYS = /* @__PURE__ */ new Set([
	ARROW_LEFT,
	ARROW_RIGHT,
	HOME,
	"End"
]);
var VERTICAL_KEYS = /* @__PURE__ */ new Set([ARROW_UP, ARROW_DOWN]);
var VERTICAL_KEYS_WITH_EXTRA_KEYS = /* @__PURE__ */ new Set([
	ARROW_UP,
	ARROW_DOWN,
	HOME,
	"End"
]);
var ARROW_KEYS = /* @__PURE__ */ new Set([...HORIZONTAL_KEYS, ...VERTICAL_KEYS]);
var COMPOSITE_KEYS = /* @__PURE__ */ new Set([
	...ARROW_KEYS,
	HOME,
	"End"
]);
var MODIFIER_KEYS = /* @__PURE__ */ new Set([
	"Shift",
	"Control",
	"Alt",
	"Meta"
]);
function isInputElement(element) {
	return isHTMLElement(element) && element.tagName === "INPUT";
}
function isNativeInput(element) {
	if (isInputElement(element) && element.selectionStart != null) return true;
	if (isHTMLElement(element) && element.tagName === "TEXTAREA") return true;
	return false;
}
function scrollIntoViewIfNeeded(scrollContainer, element, direction, orientation) {
	if (!scrollContainer || !element || !element.scrollTo) return;
	let targetX = scrollContainer.scrollLeft;
	let targetY = scrollContainer.scrollTop;
	const isOverflowingX = scrollContainer.clientWidth < scrollContainer.scrollWidth;
	const isOverflowingY = scrollContainer.clientHeight < scrollContainer.scrollHeight;
	if (isOverflowingX && orientation !== "vertical") {
		const elementOffsetLeft = getOffset(scrollContainer, element, "left");
		const containerStyles = getStyles(scrollContainer);
		const elementStyles = getStyles(element);
		if (direction === "ltr") {
			if (elementOffsetLeft + element.offsetWidth + elementStyles.scrollMarginRight > scrollContainer.scrollLeft + scrollContainer.clientWidth - containerStyles.scrollPaddingRight) targetX = elementOffsetLeft + element.offsetWidth + elementStyles.scrollMarginRight - scrollContainer.clientWidth + containerStyles.scrollPaddingRight;
			else if (elementOffsetLeft - elementStyles.scrollMarginLeft < scrollContainer.scrollLeft + containerStyles.scrollPaddingLeft) targetX = elementOffsetLeft - elementStyles.scrollMarginLeft - containerStyles.scrollPaddingLeft;
		}
		if (direction === "rtl") {
			if (elementOffsetLeft - elementStyles.scrollMarginRight < scrollContainer.scrollLeft + containerStyles.scrollPaddingLeft) targetX = elementOffsetLeft - elementStyles.scrollMarginLeft - containerStyles.scrollPaddingLeft;
			else if (elementOffsetLeft + element.offsetWidth + elementStyles.scrollMarginRight > scrollContainer.scrollLeft + scrollContainer.clientWidth - containerStyles.scrollPaddingRight) targetX = elementOffsetLeft + element.offsetWidth + elementStyles.scrollMarginRight - scrollContainer.clientWidth + containerStyles.scrollPaddingRight;
		}
	}
	if (isOverflowingY && orientation !== "horizontal") {
		const elementOffsetTop = getOffset(scrollContainer, element, "top");
		const containerStyles = getStyles(scrollContainer);
		const elementStyles = getStyles(element);
		if (elementOffsetTop - elementStyles.scrollMarginTop < scrollContainer.scrollTop + containerStyles.scrollPaddingTop) targetY = elementOffsetTop - elementStyles.scrollMarginTop - containerStyles.scrollPaddingTop;
		else if (elementOffsetTop + element.offsetHeight + elementStyles.scrollMarginBottom > scrollContainer.scrollTop + scrollContainer.clientHeight - containerStyles.scrollPaddingBottom) targetY = elementOffsetTop + element.offsetHeight + elementStyles.scrollMarginBottom - scrollContainer.clientHeight + containerStyles.scrollPaddingBottom;
	}
	scrollContainer.scrollTo({
		left: targetX,
		top: targetY,
		behavior: "auto"
	});
}
function getOffset(ancestor, element, side) {
	const propName = side === "left" ? "offsetLeft" : "offsetTop";
	let result = 0;
	while (element.offsetParent) {
		result += element[propName];
		if (element.offsetParent === ancestor) break;
		element = element.offsetParent;
	}
	return result;
}
function getStyles(element) {
	const styles = getComputedStyle(element);
	return {
		scrollMarginTop: parseFloat(styles.scrollMarginTop) || 0,
		scrollMarginRight: parseFloat(styles.scrollMarginRight) || 0,
		scrollMarginBottom: parseFloat(styles.scrollMarginBottom) || 0,
		scrollMarginLeft: parseFloat(styles.scrollMarginLeft) || 0,
		scrollPaddingTop: parseFloat(styles.scrollPaddingTop) || 0,
		scrollPaddingRight: parseFloat(styles.scrollPaddingRight) || 0,
		scrollPaddingBottom: parseFloat(styles.scrollPaddingBottom) || 0,
		scrollPaddingLeft: parseFloat(styles.scrollPaddingLeft) || 0
	};
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/dialog/popup/DialogPopup.mjs
var stateAttributesMapping = {
	...popupStateMapping,
	...transitionStatusMapping,
	nestedDialogOpen(value) {
		return value ? { [DialogPopupDataAttributes.nestedDialogOpen]: "" } : null;
	}
};
/**
* A container for the dialog contents.
* Renders a `<div>` element.
*
* Documentation: [Base UI Dialog](https://base-ui.com/react/components/dialog)
*/
var DialogPopup = /*#__PURE__*/ React.forwardRef(function DialogPopup(componentProps, forwardedRef) {
	const { render, className, style, finalFocus, initialFocus, ...elementProps } = componentProps;
	const { store } = useDialogRootContext();
	const descriptionElementId = store.useState("descriptionElementId");
	const disablePointerDismissal = store.useState("disablePointerDismissal");
	const floatingRootContext = store.useState("floatingRootContext");
	const rootPopupProps = store.useState("popupProps");
	const modal = store.useState("modal");
	const mounted = store.useState("mounted");
	const nested = store.useState("nested");
	const nestedOpenDialogCount = store.useState("nestedOpenDialogCount");
	const open = store.useState("open");
	const openMethod = store.useState("openMethod");
	const titleElementId = store.useState("titleElementId");
	const transitionStatus = store.useState("transitionStatus");
	const role = store.useState("role");
	const floatingId = floatingRootContext.useState("floatingId");
	const popupId = elementProps.id ?? floatingId;
	useDialogPortalContext();
	useOpenChangeComplete({
		open,
		ref: store.context.popupRef,
		onComplete() {
			if (open) store.context.onOpenChangeComplete?.(true);
		}
	});
	const resolvedInitialFocus = initialFocus === void 0 ? createDefaultInitialFocus(store.context.popupRef) : initialFocus;
	const nestedDialogOpen = nestedOpenDialogCount > 0;
	const setPopupElement = store.useStateSetter("popupElement");
	const element = useRenderElement("div", componentProps, {
		state: {
			open,
			nested,
			transitionStatus,
			nestedDialogOpen
		},
		props: [
			rootPopupProps,
			{
				id: popupId,
				"aria-labelledby": titleElementId ?? void 0,
				"aria-describedby": descriptionElementId ?? void 0,
				role,
				...FOCUSABLE_POPUP_PROPS,
				hidden: !mounted,
				onKeyDown(event) {
					if (COMPOSITE_KEYS.has(event.key)) event.stopPropagation();
				},
				style: { [DialogPopupCssVars.nestedDialogs]: nestedOpenDialogCount }
			},
			elementProps
		],
		ref: [
			forwardedRef,
			store.context.popupRef,
			setPopupElement
		],
		stateAttributesMapping
	});
	return /*#__PURE__*/ jsx(FloatingFocusManager, {
		context: floatingRootContext,
		openInteractionType: openMethod,
		disabled: !mounted,
		closeOnFocusOut: !disablePointerDismissal,
		initialFocus: resolvedInitialFocus,
		returnFocus: finalFocus,
		modal: modal !== false,
		restoreFocus: "popup",
		children: element
	});
});
if (process.env.NODE_ENV !== "production") DialogPopup.displayName = "DialogPopup";
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/inertValue.mjs
function inertValue(value) {
	if (isReactVersionAtLeast(19)) return value;
	return value ? "true" : void 0;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/utils/InternalBackdrop.mjs
/**
* @internal
*/
var InternalBackdrop = /*#__PURE__*/ React.forwardRef(function InternalBackdrop(props, ref) {
	const { cutout, ...otherProps } = props;
	let clipPath;
	if (cutout) {
		const rect = cutout.getBoundingClientRect();
		clipPath = `polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${rect.left}px ${rect.top}px,${rect.left}px ${rect.bottom}px,${rect.right}px ${rect.bottom}px,${rect.right}px ${rect.top}px,${rect.left}px ${rect.top}px)`;
	}
	return /*#__PURE__*/ jsx("div", {
		ref,
		role: "presentation",
		"data-base-ui-inert": "",
		...otherProps,
		style: {
			position: "fixed",
			inset: 0,
			userSelect: "none",
			WebkitUserSelect: "none",
			clipPath
		}
	});
});
if (process.env.NODE_ENV !== "production") InternalBackdrop.displayName = "InternalBackdrop";
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/dialog/portal/DialogPortal.mjs
/**
* A portal element that moves the popup to a different part of the DOM.
* By default, the portal element is appended to `<body>`.
* Renders a `<div>` element.
*
* Documentation: [Base UI Dialog](https://base-ui.com/react/components/dialog)
*/
var DialogPortal = /*#__PURE__*/ React.forwardRef(function DialogPortal(props, forwardedRef) {
	const { keepMounted = false, ...portalProps } = props;
	const { store } = useDialogRootContext();
	const mounted = store.useState("mounted");
	const modal = store.useState("modal");
	const open = store.useState("open");
	if (!(mounted || keepMounted)) return null;
	return /*#__PURE__*/ jsx(DialogPortalContext.Provider, {
		value: keepMounted,
		children: /*#__PURE__*/ jsxs(FloatingPortal, {
			ref: forwardedRef,
			...portalProps,
			children: [mounted && modal === true && /*#__PURE__*/ jsx(InternalBackdrop, {
				ref: store.context.internalBackdropRef,
				inert: inertValue(!open)
			}), props.children]
		})
	});
});
if (process.env.NODE_ENV !== "production") DialogPortal.displayName = "DialogPortal";
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/useScrollLock.mjs
var originalHtmlStyles = {};
var originalBodyStyles = {};
var originalHtmlScrollBehavior = "";
function hasInsetScrollbars(referenceElement) {
	if (typeof document === "undefined") return false;
	const doc = ownerDocument(referenceElement);
	return getWindow(doc).innerWidth - doc.documentElement.clientWidth > 0;
}
function supportsStableScrollbarGutter(referenceElement) {
	if (!(typeof CSS !== "undefined" && CSS.supports && CSS.supports("scrollbar-gutter", "stable")) || typeof document === "undefined") return false;
	const doc = ownerDocument(referenceElement);
	const html = doc.documentElement;
	const body = doc.body;
	const scrollContainer = isOverflowElement(html) ? html : body;
	const originalScrollContainerOverflowY = scrollContainer.style.overflowY;
	const originalHtmlStyleGutter = html.style.scrollbarGutter;
	html.style.scrollbarGutter = "stable";
	scrollContainer.style.overflowY = "scroll";
	const before = scrollContainer.offsetWidth;
	scrollContainer.style.overflowY = "hidden";
	const after = scrollContainer.offsetWidth;
	scrollContainer.style.overflowY = originalScrollContainerOverflowY;
	html.style.scrollbarGutter = originalHtmlStyleGutter;
	return before === after;
}
function preventScrollOverlayScrollbars(referenceElement) {
	const doc = ownerDocument(referenceElement);
	const html = doc.documentElement;
	const body = doc.body;
	const elementToLock = isOverflowElement(html) ? html : body;
	const originalElementToLockStyles = {
		overflowY: elementToLock.style.overflowY,
		overflowX: elementToLock.style.overflowX
	};
	Object.assign(elementToLock.style, {
		overflowY: "hidden",
		overflowX: "hidden"
	});
	return () => {
		Object.assign(elementToLock.style, originalElementToLockStyles);
	};
}
function preventScrollInsetScrollbars(referenceElement) {
	const doc = ownerDocument(referenceElement);
	const html = doc.documentElement;
	const body = doc.body;
	const win = getWindow(html);
	let scrollTop = 0;
	let scrollLeft = 0;
	let updateGutterOnly = false;
	const resizeFrame = AnimationFrame.create();
	if (webkit && (win.visualViewport?.scale ?? 1) !== 1) return () => {};
	function lockScroll() {
		const htmlStyles = win.getComputedStyle(html);
		const bodyStyles = win.getComputedStyle(body);
		const scrollbarGutterValue = (htmlStyles.scrollbarGutter || "").includes("both-edges") ? "stable both-edges" : "stable";
		scrollTop = html.scrollTop;
		scrollLeft = html.scrollLeft;
		originalHtmlStyles = {
			scrollbarGutter: html.style.scrollbarGutter,
			overflowY: html.style.overflowY,
			overflowX: html.style.overflowX
		};
		originalHtmlScrollBehavior = html.style.scrollBehavior;
		originalBodyStyles = {
			position: body.style.position,
			height: body.style.height,
			width: body.style.width,
			boxSizing: body.style.boxSizing,
			overflowY: body.style.overflowY,
			overflowX: body.style.overflowX,
			scrollBehavior: body.style.scrollBehavior
		};
		const isScrollableY = html.scrollHeight > html.clientHeight;
		const isScrollableX = html.scrollWidth > html.clientWidth;
		const hasConstantOverflowY = htmlStyles.overflowY === "scroll" || bodyStyles.overflowY === "scroll";
		const hasConstantOverflowX = htmlStyles.overflowX === "scroll" || bodyStyles.overflowX === "scroll";
		const scrollbarWidth = Math.max(0, win.innerWidth - body.clientWidth);
		const scrollbarHeight = Math.max(0, win.innerHeight - body.clientHeight);
		const marginY = parseFloat(bodyStyles.marginTop) + parseFloat(bodyStyles.marginBottom);
		const marginX = parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight);
		const elementToLock = isOverflowElement(html) ? html : body;
		updateGutterOnly = supportsStableScrollbarGutter(referenceElement);
		if (updateGutterOnly) {
			html.style.scrollbarGutter = scrollbarGutterValue;
			elementToLock.style.overflowY = "hidden";
			elementToLock.style.overflowX = "hidden";
			return;
		}
		Object.assign(html.style, {
			scrollbarGutter: scrollbarGutterValue,
			overflowY: "hidden",
			overflowX: "hidden"
		});
		if (isScrollableY || hasConstantOverflowY) html.style.overflowY = "scroll";
		if (isScrollableX || hasConstantOverflowX) html.style.overflowX = "scroll";
		Object.assign(body.style, {
			position: "relative",
			height: marginY || scrollbarHeight ? `calc(100dvh - ${marginY + scrollbarHeight}px)` : "100dvh",
			width: marginX || scrollbarWidth ? `calc(100vw - ${marginX + scrollbarWidth}px)` : "100vw",
			boxSizing: "border-box",
			overflow: "hidden",
			scrollBehavior: "unset"
		});
		body.scrollTop = scrollTop;
		body.scrollLeft = scrollLeft;
		html.setAttribute("data-base-ui-scroll-locked", "");
		html.style.scrollBehavior = "unset";
	}
	function cleanup() {
		Object.assign(html.style, originalHtmlStyles);
		Object.assign(body.style, originalBodyStyles);
		if (!updateGutterOnly) {
			html.scrollTop = scrollTop;
			html.scrollLeft = scrollLeft;
			html.removeAttribute("data-base-ui-scroll-locked");
			html.style.scrollBehavior = originalHtmlScrollBehavior;
		}
	}
	function handleResize() {
		cleanup();
		resizeFrame.request(lockScroll);
	}
	lockScroll();
	const unsubscribeResize = addEventListener(win, "resize", handleResize);
	return () => {
		resizeFrame.cancel();
		cleanup();
		if (typeof win.removeEventListener === "function") unsubscribeResize();
	};
}
var ScrollLocker = class {
	lockCount = 0;
	restore = null;
	timeoutLock = Timeout.create();
	timeoutUnlock = Timeout.create();
	acquire(referenceElement) {
		this.lockCount += 1;
		if (this.lockCount === 1 && this.restore === null) this.timeoutLock.start(0, () => this.lock(referenceElement));
		return this.release;
	}
	release = () => {
		this.lockCount -= 1;
		if (this.lockCount === 0 && this.restore) this.timeoutUnlock.start(0, this.unlock);
	};
	unlock = () => {
		if (this.lockCount === 0 && this.restore) {
			this.restore?.();
			this.restore = null;
		}
	};
	lock(referenceElement) {
		if (this.lockCount === 0 || this.restore !== null) return;
		const html = ownerDocument(referenceElement).documentElement;
		const htmlOverflowY = getWindow(html).getComputedStyle(html).overflowY;
		if (htmlOverflowY === "hidden" || htmlOverflowY === "clip") {
			this.restore = NOOP;
			return;
		}
		const hasOverlayScrollbars = ios || !hasInsetScrollbars(referenceElement);
		this.restore = hasOverlayScrollbars ? preventScrollOverlayScrollbars(referenceElement) : preventScrollInsetScrollbars(referenceElement);
	}
};
var SCROLL_LOCKER = new ScrollLocker();
/**
* Locks the scroll of the document when enabled.
*
* @param enabled - Whether to enable the scroll lock.
* @param referenceElement - Element to use as a reference for lock calculations.
*/
function useScrollLock(enabled = true, referenceElement = null) {
	useIsoLayoutEffect(() => {
		if (!enabled) return;
		return SCROLL_LOCKER.acquire(referenceElement);
	}, [enabled, referenceElement]);
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/dialog/root/useDialogRoot.mjs
function useDialogRoot(params) {
	const { store, actionsRef } = params;
	const open = store.useState("open");
	usePopupRootSync(store, open);
	useImplicitActiveTrigger(store);
	const { forceUnmount } = useOpenStateTransitions(open, store);
	const handleImperativeClose = React.useCallback(() => {
		store.setOpen(false, createChangeEventDetails(imperativeAction));
	}, [store]);
	React.useImperativeHandle(actionsRef, () => ({
		unmount: forceUnmount,
		close: handleImperativeClose
	}), [forceUnmount, handleImperativeClose]);
}
function DialogInteractions({ store, parentContext, isDrawer }) {
	const open = store.useState("open");
	const disablePointerDismissal = store.useState("disablePointerDismissal");
	const modal = store.useState("modal");
	const popupElement = store.useState("popupElement");
	const floatingRootContext = store.useState("floatingRootContext");
	const [ownNestedOpenDialogs, setOwnNestedOpenDialogs] = React.useState(0);
	const [ownNestedOpenDrawers, setOwnNestedOpenDrawers] = React.useState(0);
	const isTopmost = ownNestedOpenDialogs === 0;
	const dismiss = useDismiss(floatingRootContext, {
		outsidePressEvent() {
			if (store.context.internalBackdropRef.current || store.context.backdropRef.current) return "intentional";
			return {
				mouse: modal === "trap-focus" ? "sloppy" : "intentional",
				touch: "sloppy"
			};
		},
		outsidePress(event) {
			if (!store.context.outsidePressEnabledRef.current) return false;
			if ("button" in event && event.button !== 0) return false;
			if ("touches" in event && event.touches.length !== 1) return false;
			const target = getTarget(event);
			if (isTopmost && !disablePointerDismissal) {
				if (modal) return store.context.internalBackdropRef.current || store.context.backdropRef.current ? store.context.internalBackdropRef.current === target || store.context.backdropRef.current === target || contains(target, popupElement) && !target?.hasAttribute("data-base-ui-portal") : true;
				return true;
			}
			return false;
		},
		escapeKey: isTopmost
	});
	useScrollLock(open && modal === true, popupElement);
	store.useContextCallback("onNestedDialogOpen", (dialogCount, drawerCount) => {
		setOwnNestedOpenDialogs(dialogCount);
		setOwnNestedOpenDrawers(drawerCount);
	});
	store.useContextCallback("onNestedDialogClose", () => {
		setOwnNestedOpenDialogs(0);
		setOwnNestedOpenDrawers(0);
	});
	React.useEffect(() => {
		if (parentContext?.onNestedDialogOpen && open) parentContext.onNestedDialogOpen(ownNestedOpenDialogs + 1, ownNestedOpenDrawers + (isDrawer ? 1 : 0));
		if (parentContext?.onNestedDialogClose && !open) parentContext.onNestedDialogClose();
		return () => {
			if (parentContext?.onNestedDialogClose && open) parentContext.onNestedDialogClose();
		};
	}, [
		isDrawer,
		open,
		ownNestedOpenDialogs,
		ownNestedOpenDrawers,
		parentContext
	]);
	usePopupInteractionProps(store, {
		activeTriggerProps: dismiss.reference ?? EMPTY_OBJECT,
		inactiveTriggerProps: dismiss.trigger ?? EMPTY_OBJECT,
		popupProps: dismiss.floating ?? EMPTY_OBJECT,
		nestedOpenDialogCount: ownNestedOpenDialogs,
		nestedOpenDrawerCount: ownNestedOpenDrawers
	});
	return null;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/dialog/store/DialogStore.mjs
var selectors = {
	...popupStoreSelectors,
	modal: createSelector((state) => state.modal),
	nested: createSelector((state) => state.nested),
	nestedOpenDialogCount: createSelector((state) => state.nestedOpenDialogCount),
	nestedOpenDrawerCount: createSelector((state) => state.nestedOpenDrawerCount),
	disablePointerDismissal: createSelector((state) => state.disablePointerDismissal),
	openMethod: createSelector((state) => state.openMethod),
	descriptionElementId: createSelector((state) => state.descriptionElementId),
	titleElementId: createSelector((state) => state.titleElementId),
	viewportElement: createSelector((state) => state.viewportElement),
	role: createSelector((state) => state.role)
};
var DialogStore = class DialogStore extends ReactStore {
	constructor(initialState, floatingId, nested = false) {
		const triggerElements = new PopupTriggerMap();
		const state = createInitialState(initialState);
		state.floatingRootContext = createPopupFloatingRootContext(triggerElements, floatingId, nested);
		super(state, {
			popupRef: /*#__PURE__*/ React.createRef(),
			backdropRef: /*#__PURE__*/ React.createRef(),
			internalBackdropRef: /*#__PURE__*/ React.createRef(),
			outsidePressEnabledRef: { current: true },
			triggerElements,
			onOpenChange: void 0,
			onOpenChangeComplete: void 0
		}, selectors);
	}
	setOpen = (nextOpen, eventDetails) => {
		eventDetails.preventUnmountOnClose = () => {
			this.set("preventUnmountingOnClose", true);
		};
		if (!nextOpen && eventDetails.trigger == null && this.state.activeTriggerId != null) eventDetails.trigger = this.state.activeTriggerElement ?? void 0;
		this.context.onOpenChange?.(nextOpen, eventDetails);
		if (eventDetails.isCanceled) return;
		this.state.floatingRootContext.dispatchOpenChange(nextOpen, eventDetails);
		const updatedState = { open: nextOpen };
		setPopupOpenState(updatedState, nextOpen, eventDetails.trigger);
		this.update(updatedState);
	};
	static useStore(externalStore, initialState) {
		return usePopupStore(externalStore, (floatingId, nested) => new DialogStore(initialState, floatingId, nested), true).store;
	}
};
function createInitialState(initialState = {}) {
	return {
		...createInitialPopupStoreState(),
		modal: true,
		disablePointerDismissal: false,
		popupElement: null,
		viewportElement: null,
		descriptionElementId: void 0,
		titleElementId: void 0,
		openMethod: null,
		nested: false,
		nestedOpenDialogCount: 0,
		nestedOpenDrawerCount: 0,
		role: "dialog",
		...initialState
	};
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/dialog/root/useRenderDialogRoot.mjs
function useRenderDialogRoot(props, mode = "dialog") {
	const { children, open: openProp, defaultOpen = false, onOpenChange, onOpenChangeComplete, disablePointerDismissal: disablePointerDismissalProp = false, modal: modalProp = true, actionsRef, handle, triggerId: triggerIdProp, defaultTriggerId: defaultTriggerIdProp = null } = props;
	const isDrawer = mode === "drawer";
	const isAlertDialog = mode === "alert-dialog";
	const modal = isAlertDialog ? true : modalProp;
	const disablePointerDismissal = isAlertDialog || disablePointerDismissalProp;
	const role = isAlertDialog ? "alertdialog" : "dialog";
	const parentDialogRootContext = useDialogRootContext(true);
	const rootState = {
		modal,
		disablePointerDismissal,
		nested: Boolean(parentDialogRootContext),
		role
	};
	const store = DialogStore.useStore(handle?.store, {
		open: defaultOpen,
		openProp,
		activeTriggerId: defaultTriggerIdProp,
		triggerIdProp,
		...rootState
	});
	useOnFirstRender(() => {
		const nextState = openProp === void 0 && store.state.open === false && defaultOpen === true ? {
			open: true,
			activeTriggerId: defaultTriggerIdProp
		} : null;
		if (isAlertDialog) store.update(nextState ? {
			...rootState,
			...nextState
		} : rootState);
		else if (nextState) store.update(nextState);
	});
	store.useControlledProp("openProp", openProp);
	store.useControlledProp("triggerIdProp", triggerIdProp);
	store.useSyncedValues(rootState);
	store.useContextCallback("onOpenChange", onOpenChange);
	store.useContextCallback("onOpenChangeComplete", onOpenChangeComplete);
	const open = store.useState("open");
	const mounted = store.useState("mounted");
	const payload = store.useState("payload");
	useDialogRoot({
		store,
		actionsRef
	});
	const shouldRenderInteractions = open || mounted;
	const contextValue = React.useMemo(() => ({ store }), [store]);
	return /*#__PURE__*/ jsx(IsDrawerContext.Provider, {
		value: false,
		children: /*#__PURE__*/ jsxs(DialogRootContext.Provider, {
			value: contextValue,
			children: [shouldRenderInteractions && /*#__PURE__*/ jsx(DialogInteractions, {
				store,
				parentContext: parentDialogRootContext?.store.context,
				isDrawer
			}), typeof children === "function" ? children({ payload }) : children]
		})
	});
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/dialog/root/DialogRoot.mjs
/**
* Groups all parts of the dialog.
* Doesn't render its own HTML element.
*
* Documentation: [Base UI Dialog](https://base-ui.com/react/components/dialog)
*/
function DialogRoot(props) {
	return useRenderDialogRoot(props, React.useContext(IsDrawerContext) ? "drawer" : "dialog");
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/dialog/title/DialogTitle.mjs
/**
* A heading that labels the dialog.
* Renders an `<h2>` element.
*
* Documentation: [Base UI Dialog](https://base-ui.com/react/components/dialog)
*/
var DialogTitle = /*#__PURE__*/ React.forwardRef(function DialogTitle(componentProps, forwardedRef) {
	const { render, className, style, id: idProp, ...elementProps } = componentProps;
	const { store } = useDialogRootContext();
	const id = useBaseUiId(idProp);
	store.useSyncedValueWithCleanup("titleElementId", id);
	return useRenderElement("h2", componentProps, {
		ref: forwardedRef,
		props: [{ id }, elementProps]
	});
});
if (process.env.NODE_ENV !== "production") DialogTitle.displayName = "DialogTitle";
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/components/ui/button.js
var variants = {
	primary: "bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/80",
	outline: "border hover:bg-fd-accent hover:text-fd-accent-foreground",
	ghost: "hover:bg-fd-accent hover:text-fd-accent-foreground",
	secondary: "border bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent hover:text-fd-accent-foreground"
};
var buttonVariants = cva("inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors duration-100 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fd-ring", { variants: {
	variant: variants,
	color: variants,
	size: {
		sm: "gap-1 px-2 py-1.5 text-xs",
		icon: "p-1.5 [&_svg]:size-5",
		"icon-sm": "p-1.5 [&_svg]:size-4.5",
		"icon-xs": "p-1 [&_svg]:size-4"
	}
} });
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/utils/merge-refs.js
function mergeRefs(...refs) {
	return (value) => {
		refs.forEach((ref) => {
			if (typeof ref === "function") ref(value);
			else if (ref) ref.current = value;
		});
	};
}
//#endregion
//#region node_modules/.pnpm/fumadocs-core@16.11.5_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.5_@type_72cb31c98dbdcd9237f5eec6550b9329/node_modules/fumadocs-core/dist/is-equal-LdLqRs0o.js
function isEqualShallow(a, b) {
	if (a === b) return true;
	if (Array.isArray(a) && Array.isArray(b)) return b.length === a.length && a.every((v, i) => isEqualShallow(v, b[i]));
	return false;
}
//#endregion
//#region node_modules/.pnpm/fumadocs-core@16.11.5_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.5_@type_72cb31c98dbdcd9237f5eec6550b9329/node_modules/fumadocs-core/dist/utils/use-on-change.js
/**
* @param value - state to watch
* @param onChange - when the state changed
* @param isUpdated - a function that determines if the state is updated
*/
function useOnChange(value, onChange, isUpdated = (a, b) => !isEqualShallow(a, b)) {
	const [prev, setPrev] = useState(value);
	if (isUpdated(prev, value)) {
		onChange(value, prev);
		setPrev(value);
	}
}
//#endregion
//#region node_modules/.pnpm/compute-scroll-into-view@3.1.1/node_modules/compute-scroll-into-view/dist/index.js
var t = (t) => "object" == typeof t && null != t && 1 === t.nodeType;
var e$1 = (t, e) => (!e || "hidden" !== t) && "visible" !== t && "clip" !== t;
var n = (t, n) => {
	if (t.clientHeight < t.scrollHeight || t.clientWidth < t.scrollWidth) {
		const o = getComputedStyle(t, null);
		return e$1(o.overflowY, n) || e$1(o.overflowX, n) || ((t) => {
			const e = ((t) => {
				if (!t.ownerDocument || !t.ownerDocument.defaultView) return null;
				try {
					return t.ownerDocument.defaultView.frameElement;
				} catch (t) {
					return null;
				}
			})(t);
			return !!e && (e.clientHeight < t.scrollHeight || e.clientWidth < t.scrollWidth);
		})(t);
	}
	return !1;
};
var o$1 = (t, e, n, o, l, r, i, s) => r < t && i > e || r > t && i < e ? 0 : r <= t && s <= n || i >= e && s >= n ? r - t - o : i > e && s < n || r < t && s > n ? i - e + l : 0;
var l = (t) => {
	const e = t.parentElement;
	return null == e ? t.getRootNode().host || null : e;
};
var r = (e, r) => {
	var i, s, d, h;
	if ("undefined" == typeof document) return [];
	const { scrollMode: c, block: f, inline: u, boundary: a, skipOverflowHiddenElements: g } = r, p = "function" == typeof a ? a : (t) => t !== a;
	if (!t(e)) throw new TypeError("Invalid target");
	const m = document.scrollingElement || document.documentElement, w = [];
	let W = e;
	for (; t(W) && p(W);) {
		if (W = l(W), W === m) {
			w.push(W);
			break;
		}
		null != W && W === document.body && n(W) && !n(document.documentElement) || null != W && n(W, g) && w.push(W);
	}
	const b = null != (s = null == (i = window.visualViewport) ? void 0 : i.width) ? s : innerWidth, H = null != (h = null == (d = window.visualViewport) ? void 0 : d.height) ? h : innerHeight, { scrollX: y, scrollY: M } = window, { height: v, width: E, top: x, right: C, bottom: I, left: R } = e.getBoundingClientRect(), { top: T, right: B, bottom: F, left: V } = ((t) => {
		const e = window.getComputedStyle(t);
		return {
			top: parseFloat(e.scrollMarginTop) || 0,
			right: parseFloat(e.scrollMarginRight) || 0,
			bottom: parseFloat(e.scrollMarginBottom) || 0,
			left: parseFloat(e.scrollMarginLeft) || 0
		};
	})(e);
	let k = "start" === f || "nearest" === f ? x - T : "end" === f ? I + F : x + v / 2 - T + F, D = "center" === u ? R + E / 2 - V + B : "end" === u ? C + B : R - V;
	const L = [];
	for (let t = 0; t < w.length; t++) {
		const e = w[t], { height: l, width: r, top: i, right: s, bottom: d, left: h } = e.getBoundingClientRect();
		if ("if-needed" === c && x >= 0 && R >= 0 && I <= H && C <= b && (e === m && !n(e) || x >= i && I <= d && R >= h && C <= s)) return L;
		const a = getComputedStyle(e), g = parseInt(a.borderLeftWidth, 10), p = parseInt(a.borderTopWidth, 10), W = parseInt(a.borderRightWidth, 10), T = parseInt(a.borderBottomWidth, 10);
		let B = 0, F = 0;
		const V = "offsetWidth" in e ? e.offsetWidth - e.clientWidth - g - W : 0, S = "offsetHeight" in e ? e.offsetHeight - e.clientHeight - p - T : 0, X = "offsetWidth" in e ? 0 === e.offsetWidth ? 0 : r / e.offsetWidth : 0, Y = "offsetHeight" in e ? 0 === e.offsetHeight ? 0 : l / e.offsetHeight : 0;
		if (m === e) B = "start" === f ? k : "end" === f ? k - H : "nearest" === f ? o$1(M, M + H, H, p, T, M + k, M + k + v, v) : k - H / 2, F = "start" === u ? D : "center" === u ? D - b / 2 : "end" === u ? D - b : o$1(y, y + b, b, g, W, y + D, y + D + E, E), B = Math.max(0, B + M), F = Math.max(0, F + y);
		else {
			B = "start" === f ? k - i - p : "end" === f ? k - d + T + S : "nearest" === f ? o$1(i, d, l, p, T + S, k, k + v, v) : k - (i + l / 2) + S / 2, F = "start" === u ? D - h - g : "center" === u ? D - (h + r / 2) + V / 2 : "end" === u ? D - s + W + V : o$1(h, s, r, g, W + V, D, D + E, E);
			const { scrollLeft: t, scrollTop: n } = e;
			B = 0 === Y ? 0 : Math.max(0, Math.min(n + B / Y, e.scrollHeight - l / Y + S)), F = 0 === X ? 0 : Math.max(0, Math.min(t + F / X, e.scrollWidth - r / X + V)), k += n - B, D += t - F;
		}
		L.push({
			el: e,
			top: B,
			left: F
		});
	}
	return L;
};
//#endregion
//#region node_modules/.pnpm/scroll-into-view-if-needed@3.1.0/node_modules/scroll-into-view-if-needed/dist/index.js
var o = (t) => !1 === t ? {
	block: "end",
	inline: "nearest"
} : ((t) => t === Object(t) && 0 !== Object.keys(t).length)(t) ? t : {
	block: "start",
	inline: "nearest"
};
function e(e, r$1) {
	if (!e.isConnected || !((t) => {
		let o = t;
		for (; o && o.parentNode;) {
			if (o.parentNode === document) return !0;
			o = o.parentNode instanceof ShadowRoot ? o.parentNode.host : o.parentNode;
		}
		return !1;
	})(e)) return;
	const n = ((t) => {
		const o = window.getComputedStyle(t);
		return {
			top: parseFloat(o.scrollMarginTop) || 0,
			right: parseFloat(o.scrollMarginRight) || 0,
			bottom: parseFloat(o.scrollMarginBottom) || 0,
			left: parseFloat(o.scrollMarginLeft) || 0
		};
	})(e);
	if (((t) => "object" == typeof t && "function" == typeof t.behavior)(r$1)) return r$1.behavior(r(e, r$1));
	const l = "boolean" == typeof r$1 || null == r$1 ? void 0 : r$1.behavior;
	for (const { el: a, top: i, left: s } of r(e, o(r$1))) {
		const t = i - n.top + n.bottom, o = s - n.left + n.right;
		a.scroll({
			top: t,
			left: o,
			behavior: l
		});
	}
}
//#endregion
//#region node_modules/.pnpm/unist-util-stringify-position@4.0.0/node_modules/unist-util-stringify-position/lib/index.js
/**
* @typedef {import('unist').Node} Node
* @typedef {import('unist').Point} Point
* @typedef {import('unist').Position} Position
*/
/**
* @typedef NodeLike
* @property {string} type
* @property {PositionLike | null | undefined} [position]
*
* @typedef PointLike
* @property {number | null | undefined} [line]
* @property {number | null | undefined} [column]
* @property {number | null | undefined} [offset]
*
* @typedef PositionLike
* @property {PointLike | null | undefined} [start]
* @property {PointLike | null | undefined} [end]
*/
/**
* Serialize the positional info of a point, position (start and end points),
* or node.
*
* @param {Node | NodeLike | Point | PointLike | Position | PositionLike | null | undefined} [value]
*   Node, position, or point.
* @returns {string}
*   Pretty printed positional info of a node (`string`).
*
*   In the format of a range `ls:cs-le:ce` (when given `node` or `position`)
*   or a point `l:c` (when given `point`), where `l` stands for line, `c` for
*   column, `s` for `start`, and `e` for end.
*   An empty string (`''`) is returned if the given value is neither `node`,
*   `position`, nor `point`.
*/
function stringifyPosition(value) {
	if (!value || typeof value !== "object") return "";
	if ("position" in value || "type" in value) return position$1(value.position);
	if ("start" in value || "end" in value) return position$1(value);
	if ("line" in value || "column" in value) return point$2(value);
	return "";
}
/**
* @param {Point | PointLike | null | undefined} point
* @returns {string}
*/
function point$2(point) {
	return index(point && point.line) + ":" + index(point && point.column);
}
/**
* @param {Position | PositionLike | null | undefined} pos
* @returns {string}
*/
function position$1(pos) {
	return point$2(pos && pos.start) + "-" + point$2(pos && pos.end);
}
/**
* @param {number | null | undefined} value
* @returns {number}
*/
function index(value) {
	return value && typeof value === "number" ? value : 1;
}
//#endregion
//#region node_modules/.pnpm/vfile-message@4.0.3/node_modules/vfile-message/lib/index.js
/**
* @import {Node, Point, Position} from 'unist'
*/
/**
* @typedef {object & {type: string, position?: Position | undefined}} NodeLike
*
* @typedef Options
*   Configuration.
* @property {Array<Node> | null | undefined} [ancestors]
*   Stack of (inclusive) ancestor nodes surrounding the message (optional).
* @property {Error | null | undefined} [cause]
*   Original error cause of the message (optional).
* @property {Point | Position | null | undefined} [place]
*   Place of message (optional).
* @property {string | null | undefined} [ruleId]
*   Category of message (optional, example: `'my-rule'`).
* @property {string | null | undefined} [source]
*   Namespace of who sent the message (optional, example: `'my-package'`).
*/
/**
* Message.
*/
var VFileMessage = class extends Error {
	/**
	* Create a message for `reason`.
	*
	* > 🪦 **Note**: also has obsolete signatures.
	*
	* @overload
	* @param {string} reason
	* @param {Options | null | undefined} [options]
	* @returns
	*
	* @overload
	* @param {string} reason
	* @param {Node | NodeLike | null | undefined} parent
	* @param {string | null | undefined} [origin]
	* @returns
	*
	* @overload
	* @param {string} reason
	* @param {Point | Position | null | undefined} place
	* @param {string | null | undefined} [origin]
	* @returns
	*
	* @overload
	* @param {string} reason
	* @param {string | null | undefined} [origin]
	* @returns
	*
	* @overload
	* @param {Error | VFileMessage} cause
	* @param {Node | NodeLike | null | undefined} parent
	* @param {string | null | undefined} [origin]
	* @returns
	*
	* @overload
	* @param {Error | VFileMessage} cause
	* @param {Point | Position | null | undefined} place
	* @param {string | null | undefined} [origin]
	* @returns
	*
	* @overload
	* @param {Error | VFileMessage} cause
	* @param {string | null | undefined} [origin]
	* @returns
	*
	* @param {Error | VFileMessage | string} causeOrReason
	*   Reason for message, should use markdown.
	* @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
	*   Configuration (optional).
	* @param {string | null | undefined} [origin]
	*   Place in code where the message originates (example:
	*   `'my-package:my-rule'` or `'my-rule'`).
	* @returns
	*   Instance of `VFileMessage`.
	*/
	constructor(causeOrReason, optionsOrParentOrPlace, origin) {
		super();
		if (typeof optionsOrParentOrPlace === "string") {
			origin = optionsOrParentOrPlace;
			optionsOrParentOrPlace = void 0;
		}
		/** @type {string} */
		let reason = "";
		/** @type {Options} */
		let options = {};
		let legacyCause = false;
		if (optionsOrParentOrPlace) {
			if ("line" in optionsOrParentOrPlace && "column" in optionsOrParentOrPlace) options = { place: optionsOrParentOrPlace };
			else if ("start" in optionsOrParentOrPlace && "end" in optionsOrParentOrPlace) options = { place: optionsOrParentOrPlace };
			else if ("type" in optionsOrParentOrPlace) options = {
				ancestors: [optionsOrParentOrPlace],
				place: optionsOrParentOrPlace.position
			};
			else options = { ...optionsOrParentOrPlace };
		}
		if (typeof causeOrReason === "string") reason = causeOrReason;
		else if (!options.cause && causeOrReason) {
			legacyCause = true;
			reason = causeOrReason.message;
			options.cause = causeOrReason;
		}
		if (!options.ruleId && !options.source && typeof origin === "string") {
			const index = origin.indexOf(":");
			if (index === -1) options.ruleId = origin;
			else {
				options.source = origin.slice(0, index);
				options.ruleId = origin.slice(index + 1);
			}
		}
		if (!options.place && options.ancestors && options.ancestors) {
			const parent = options.ancestors[options.ancestors.length - 1];
			if (parent) options.place = parent.position;
		}
		const start = options.place && "start" in options.place ? options.place.start : options.place;
		/**
		* Stack of ancestor nodes surrounding the message.
		*
		* @type {Array<Node> | undefined}
		*/
		this.ancestors = options.ancestors || void 0;
		/**
		* Original error cause of the message.
		*
		* @type {Error | undefined}
		*/
		this.cause = options.cause || void 0;
		/**
		* Starting column of message.
		*
		* @type {number | undefined}
		*/
		this.column = start ? start.column : void 0;
		/**
		* State of problem.
		*
		* * `true` — error, file not usable
		* * `false` — warning, change may be needed
		* * `undefined` — change likely not needed
		*
		* @type {boolean | null | undefined}
		*/
		this.fatal = void 0;
		/**
		* Path of a file (used throughout the `VFile` ecosystem).
		*
		* @type {string | undefined}
		*/
		this.file = "";
		/**
		* Reason for message.
		*
		* @type {string}
		*/
		this.message = reason;
		/**
		* Starting line of error.
		*
		* @type {number | undefined}
		*/
		this.line = start ? start.line : void 0;
		/**
		* Serialized positional info of message.
		*
		* On normal errors, this would be something like `ParseError`, buit in
		* `VFile` messages we use this space to show where an error happened.
		*/
		this.name = stringifyPosition(options.place) || "1:1";
		/**
		* Place of message.
		*
		* @type {Point | Position | undefined}
		*/
		this.place = options.place || void 0;
		/**
		* Reason for message, should use markdown.
		*
		* @type {string}
		*/
		this.reason = this.message;
		/**
		* Category of message (example: `'my-rule'`).
		*
		* @type {string | undefined}
		*/
		this.ruleId = options.ruleId || void 0;
		/**
		* Namespace of message (example: `'my-package'`).
		*
		* @type {string | undefined}
		*/
		this.source = options.source || void 0;
		/**
		* Stack of message.
		*
		* This is used by normal errors to show where something happened in
		* programming code, irrelevant for `VFile` messages,
		*
		* @type {string}
		*/
		this.stack = legacyCause && options.cause && typeof options.cause.stack === "string" ? options.cause.stack : "";
		/**
		* Specify the source value that’s being reported, which is deemed
		* incorrect.
		*
		* @type {string | undefined}
		*/
		this.actual = void 0;
		/**
		* Suggest acceptable values that can be used instead of `actual`.
		*
		* @type {Array<string> | undefined}
		*/
		this.expected = void 0;
		/**
		* Long form description of the message (you should use markdown).
		*
		* @type {string | undefined}
		*/
		this.note = void 0;
		/**
		* Link to docs for the message.
		*
		* > 👉 **Note**: this must be an absolute URL that can be passed as `x`
		* > to `new URL(x)`.
		*
		* @type {string | undefined}
		*/
		this.url = void 0;
	}
};
VFileMessage.prototype.file = "";
VFileMessage.prototype.name = "";
VFileMessage.prototype.reason = "";
VFileMessage.prototype.message = "";
VFileMessage.prototype.stack = "";
VFileMessage.prototype.column = void 0;
VFileMessage.prototype.line = void 0;
VFileMessage.prototype.ancestors = void 0;
VFileMessage.prototype.cause = void 0;
VFileMessage.prototype.fatal = void 0;
VFileMessage.prototype.place = void 0;
VFileMessage.prototype.ruleId = void 0;
VFileMessage.prototype.source = void 0;
//#endregion
//#region node_modules/.pnpm/vfile@6.0.3/node_modules/vfile/lib/minurl.shared.js
/**
* Checks if a value has the shape of a WHATWG URL object.
*
* Using a symbol or instanceof would not be able to recognize URL objects
* coming from other implementations (e.g. in Electron), so instead we are
* checking some well known properties for a lack of a better test.
*
* We use `href` and `protocol` as they are the only properties that are
* easy to retrieve and calculate due to the lazy nature of the getters.
*
* We check for auth attribute to distinguish legacy url instance with
* WHATWG URL instance.
*
* @param {unknown} fileUrlOrPath
*   File path or URL.
* @returns {fileUrlOrPath is URL}
*   Whether it’s a URL.
*/
function isUrl(fileUrlOrPath) {
	return Boolean(fileUrlOrPath !== null && typeof fileUrlOrPath === "object" && "href" in fileUrlOrPath && fileUrlOrPath.href && "protocol" in fileUrlOrPath && fileUrlOrPath.protocol && fileUrlOrPath.auth === void 0);
}
//#endregion
//#region node_modules/.pnpm/vfile@6.0.3/node_modules/vfile/lib/index.js
/**
* @import {Node, Point, Position} from 'unist'
* @import {Options as MessageOptions} from 'vfile-message'
* @import {Compatible, Data, Map, Options, Value} from 'vfile'
*/
/**
* @typedef {object & {type: string, position?: Position | undefined}} NodeLike
*/
/**
* Order of setting (least specific to most), we need this because otherwise
* `{stem: 'a', path: '~/b.js'}` would throw, as a path is needed before a
* stem can be set.
*/
var order = [
	"history",
	"path",
	"basename",
	"stem",
	"extname",
	"dirname"
];
var VFile = class {
	/**
	* Create a new virtual file.
	*
	* `options` is treated as:
	*
	* *   `string` or `Uint8Array` — `{value: options}`
	* *   `URL` — `{path: options}`
	* *   `VFile` — shallow copies its data over to the new file
	* *   `object` — all fields are shallow copied over to the new file
	*
	* Path related fields are set in the following order (least specific to
	* most specific): `history`, `path`, `basename`, `stem`, `extname`,
	* `dirname`.
	*
	* You cannot set `dirname` or `extname` without setting either `history`,
	* `path`, `basename`, or `stem` too.
	*
	* @param {Compatible | null | undefined} [value]
	*   File value.
	* @returns
	*   New instance.
	*/
	constructor(value) {
		/** @type {Options | VFile} */
		let options;
		if (!value) options = {};
		else if (isUrl(value)) options = { path: value };
		else if (typeof value === "string" || isUint8Array(value)) options = { value };
		else options = value;
		/**
		* Base of `path` (default: `process.cwd()` or `'/'` in browsers).
		*
		* @type {string}
		*/
		this.cwd = "cwd" in options ? "" : minproc.cwd();
		/**
		* Place to store custom info (default: `{}`).
		*
		* It’s OK to store custom data directly on the file but moving it to
		* `data` is recommended.
		*
		* @type {Data}
		*/
		this.data = {};
		/**
		* List of file paths the file moved between.
		*
		* The first is the original path and the last is the current path.
		*
		* @type {Array<string>}
		*/
		this.history = [];
		/**
		* List of messages associated with the file.
		*
		* @type {Array<VFileMessage>}
		*/
		this.messages = [];
		/**
		* Raw value.
		*
		* @type {Value}
		*/
		this.value;
		/**
		* Source map.
		*
		* This type is equivalent to the `RawSourceMap` type from the `source-map`
		* module.
		*
		* @type {Map | null | undefined}
		*/
		this.map;
		/**
		* Custom, non-string, compiled, representation.
		*
		* This is used by unified to store non-string results.
		* One example is when turning markdown into React nodes.
		*
		* @type {unknown}
		*/
		this.result;
		/**
		* Whether a file was saved to disk.
		*
		* This is used by vfile reporters.
		*
		* @type {boolean}
		*/
		this.stored;
		let index = -1;
		while (++index < order.length) {
			const field = order[index];
			if (field in options && options[field] !== void 0 && options[field] !== null) this[field] = field === "history" ? [...options[field]] : options[field];
		}
		/** @type {string} */
		let field;
		for (field in options) if (!order.includes(field)) this[field] = options[field];
	}
	/**
	* Get the basename (including extname) (example: `'index.min.js'`).
	*
	* @returns {string | undefined}
	*   Basename.
	*/
	get basename() {
		return typeof this.path === "string" ? minpath.basename(this.path) : void 0;
	}
	/**
	* Set basename (including extname) (`'index.min.js'`).
	*
	* Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
	* on windows).
	* Cannot be nullified (use `file.path = file.dirname` instead).
	*
	* @param {string} basename
	*   Basename.
	* @returns {undefined}
	*   Nothing.
	*/
	set basename(basename) {
		assertNonEmpty(basename, "basename");
		assertPart(basename, "basename");
		this.path = minpath.join(this.dirname || "", basename);
	}
	/**
	* Get the parent path (example: `'~'`).
	*
	* @returns {string | undefined}
	*   Dirname.
	*/
	get dirname() {
		return typeof this.path === "string" ? minpath.dirname(this.path) : void 0;
	}
	/**
	* Set the parent path (example: `'~'`).
	*
	* Cannot be set if there’s no `path` yet.
	*
	* @param {string | undefined} dirname
	*   Dirname.
	* @returns {undefined}
	*   Nothing.
	*/
	set dirname(dirname) {
		assertPath(this.basename, "dirname");
		this.path = minpath.join(dirname || "", this.basename);
	}
	/**
	* Get the extname (including dot) (example: `'.js'`).
	*
	* @returns {string | undefined}
	*   Extname.
	*/
	get extname() {
		return typeof this.path === "string" ? minpath.extname(this.path) : void 0;
	}
	/**
	* Set the extname (including dot) (example: `'.js'`).
	*
	* Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
	* on windows).
	* Cannot be set if there’s no `path` yet.
	*
	* @param {string | undefined} extname
	*   Extname.
	* @returns {undefined}
	*   Nothing.
	*/
	set extname(extname) {
		assertPart(extname, "extname");
		assertPath(this.dirname, "extname");
		if (extname) {
			if (extname.codePointAt(0) !== 46) throw new Error("`extname` must start with `.`");
			if (extname.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots");
		}
		this.path = minpath.join(this.dirname, this.stem + (extname || ""));
	}
	/**
	* Get the full path (example: `'~/index.min.js'`).
	*
	* @returns {string}
	*   Path.
	*/
	get path() {
		return this.history[this.history.length - 1];
	}
	/**
	* Set the full path (example: `'~/index.min.js'`).
	*
	* Cannot be nullified.
	* You can set a file URL (a `URL` object with a `file:` protocol) which will
	* be turned into a path with `url.fileURLToPath`.
	*
	* @param {URL | string} path
	*   Path.
	* @returns {undefined}
	*   Nothing.
	*/
	set path(path) {
		if (isUrl(path)) path = urlToPath(path);
		assertNonEmpty(path, "path");
		if (this.path !== path) this.history.push(path);
	}
	/**
	* Get the stem (basename w/o extname) (example: `'index.min'`).
	*
	* @returns {string | undefined}
	*   Stem.
	*/
	get stem() {
		return typeof this.path === "string" ? minpath.basename(this.path, this.extname) : void 0;
	}
	/**
	* Set the stem (basename w/o extname) (example: `'index.min'`).
	*
	* Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
	* on windows).
	* Cannot be nullified (use `file.path = file.dirname` instead).
	*
	* @param {string} stem
	*   Stem.
	* @returns {undefined}
	*   Nothing.
	*/
	set stem(stem) {
		assertNonEmpty(stem, "stem");
		assertPart(stem, "stem");
		this.path = minpath.join(this.dirname || "", stem + (this.extname || ""));
	}
	/**
	* Create a fatal message for `reason` associated with the file.
	*
	* The `fatal` field of the message is set to `true` (error; file not usable)
	* and the `file` field is set to the current file path.
	* The message is added to the `messages` field on `file`.
	*
	* > 🪦 **Note**: also has obsolete signatures.
	*
	* @overload
	* @param {string} reason
	* @param {MessageOptions | null | undefined} [options]
	* @returns {never}
	*
	* @overload
	* @param {string} reason
	* @param {Node | NodeLike | null | undefined} parent
	* @param {string | null | undefined} [origin]
	* @returns {never}
	*
	* @overload
	* @param {string} reason
	* @param {Point | Position | null | undefined} place
	* @param {string | null | undefined} [origin]
	* @returns {never}
	*
	* @overload
	* @param {string} reason
	* @param {string | null | undefined} [origin]
	* @returns {never}
	*
	* @overload
	* @param {Error | VFileMessage} cause
	* @param {Node | NodeLike | null | undefined} parent
	* @param {string | null | undefined} [origin]
	* @returns {never}
	*
	* @overload
	* @param {Error | VFileMessage} cause
	* @param {Point | Position | null | undefined} place
	* @param {string | null | undefined} [origin]
	* @returns {never}
	*
	* @overload
	* @param {Error | VFileMessage} cause
	* @param {string | null | undefined} [origin]
	* @returns {never}
	*
	* @param {Error | VFileMessage | string} causeOrReason
	*   Reason for message, should use markdown.
	* @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
	*   Configuration (optional).
	* @param {string | null | undefined} [origin]
	*   Place in code where the message originates (example:
	*   `'my-package:my-rule'` or `'my-rule'`).
	* @returns {never}
	*   Never.
	* @throws {VFileMessage}
	*   Message.
	*/
	fail(causeOrReason, optionsOrParentOrPlace, origin) {
		const message = this.message(causeOrReason, optionsOrParentOrPlace, origin);
		message.fatal = true;
		throw message;
	}
	/**
	* Create an info message for `reason` associated with the file.
	*
	* The `fatal` field of the message is set to `undefined` (info; change
	* likely not needed) and the `file` field is set to the current file path.
	* The message is added to the `messages` field on `file`.
	*
	* > 🪦 **Note**: also has obsolete signatures.
	*
	* @overload
	* @param {string} reason
	* @param {MessageOptions | null | undefined} [options]
	* @returns {VFileMessage}
	*
	* @overload
	* @param {string} reason
	* @param {Node | NodeLike | null | undefined} parent
	* @param {string | null | undefined} [origin]
	* @returns {VFileMessage}
	*
	* @overload
	* @param {string} reason
	* @param {Point | Position | null | undefined} place
	* @param {string | null | undefined} [origin]
	* @returns {VFileMessage}
	*
	* @overload
	* @param {string} reason
	* @param {string | null | undefined} [origin]
	* @returns {VFileMessage}
	*
	* @overload
	* @param {Error | VFileMessage} cause
	* @param {Node | NodeLike | null | undefined} parent
	* @param {string | null | undefined} [origin]
	* @returns {VFileMessage}
	*
	* @overload
	* @param {Error | VFileMessage} cause
	* @param {Point | Position | null | undefined} place
	* @param {string | null | undefined} [origin]
	* @returns {VFileMessage}
	*
	* @overload
	* @param {Error | VFileMessage} cause
	* @param {string | null | undefined} [origin]
	* @returns {VFileMessage}
	*
	* @param {Error | VFileMessage | string} causeOrReason
	*   Reason for message, should use markdown.
	* @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
	*   Configuration (optional).
	* @param {string | null | undefined} [origin]
	*   Place in code where the message originates (example:
	*   `'my-package:my-rule'` or `'my-rule'`).
	* @returns {VFileMessage}
	*   Message.
	*/
	info(causeOrReason, optionsOrParentOrPlace, origin) {
		const message = this.message(causeOrReason, optionsOrParentOrPlace, origin);
		message.fatal = void 0;
		return message;
	}
	/**
	* Create a message for `reason` associated with the file.
	*
	* The `fatal` field of the message is set to `false` (warning; change may be
	* needed) and the `file` field is set to the current file path.
	* The message is added to the `messages` field on `file`.
	*
	* > 🪦 **Note**: also has obsolete signatures.
	*
	* @overload
	* @param {string} reason
	* @param {MessageOptions | null | undefined} [options]
	* @returns {VFileMessage}
	*
	* @overload
	* @param {string} reason
	* @param {Node | NodeLike | null | undefined} parent
	* @param {string | null | undefined} [origin]
	* @returns {VFileMessage}
	*
	* @overload
	* @param {string} reason
	* @param {Point | Position | null | undefined} place
	* @param {string | null | undefined} [origin]
	* @returns {VFileMessage}
	*
	* @overload
	* @param {string} reason
	* @param {string | null | undefined} [origin]
	* @returns {VFileMessage}
	*
	* @overload
	* @param {Error | VFileMessage} cause
	* @param {Node | NodeLike | null | undefined} parent
	* @param {string | null | undefined} [origin]
	* @returns {VFileMessage}
	*
	* @overload
	* @param {Error | VFileMessage} cause
	* @param {Point | Position | null | undefined} place
	* @param {string | null | undefined} [origin]
	* @returns {VFileMessage}
	*
	* @overload
	* @param {Error | VFileMessage} cause
	* @param {string | null | undefined} [origin]
	* @returns {VFileMessage}
	*
	* @param {Error | VFileMessage | string} causeOrReason
	*   Reason for message, should use markdown.
	* @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
	*   Configuration (optional).
	* @param {string | null | undefined} [origin]
	*   Place in code where the message originates (example:
	*   `'my-package:my-rule'` or `'my-rule'`).
	* @returns {VFileMessage}
	*   Message.
	*/
	message(causeOrReason, optionsOrParentOrPlace, origin) {
		const message = new VFileMessage(causeOrReason, optionsOrParentOrPlace, origin);
		if (this.path) {
			message.name = this.path + ":" + message.name;
			message.file = this.path;
		}
		message.fatal = false;
		this.messages.push(message);
		return message;
	}
	/**
	* Serialize the file.
	*
	* > **Note**: which encodings are supported depends on the engine.
	* > For info on Node.js, see:
	* > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
	*
	* @param {string | null | undefined} [encoding='utf8']
	*   Character encoding to understand `value` as when it’s a `Uint8Array`
	*   (default: `'utf-8'`).
	* @returns {string}
	*   Serialized file.
	*/
	toString(encoding) {
		if (this.value === void 0) return "";
		if (typeof this.value === "string") return this.value;
		return new TextDecoder(encoding || void 0).decode(this.value);
	}
};
/**
* Assert that `part` is not a path (as in, does not contain `path.sep`).
*
* @param {string | null | undefined} part
*   File path part.
* @param {string} name
*   Part name.
* @returns {undefined}
*   Nothing.
*/
function assertPart(part, name) {
	if (part && part.includes(minpath.sep)) throw new Error("`" + name + "` cannot be a path: did not expect `" + minpath.sep + "`");
}
/**
* Assert that `part` is not empty.
*
* @param {string | undefined} part
*   Thing.
* @param {string} name
*   Part name.
* @returns {asserts part is string}
*   Nothing.
*/
function assertNonEmpty(part, name) {
	if (!part) throw new Error("`" + name + "` cannot be empty");
}
/**
* Assert `path` exists.
*
* @param {string | undefined} path
*   Path.
* @param {string} name
*   Dependency name.
* @returns {asserts path is string}
*   Nothing.
*/
function assertPath(path, name) {
	if (!path) throw new Error("Setting `" + name + "` requires `path` to be set too");
}
/**
* Assert `value` is an `Uint8Array`.
*
* @param {unknown} value
*   thing.
* @returns {value is Uint8Array}
*   Whether `value` is an `Uint8Array`.
*/
function isUint8Array(value) {
	return Boolean(value && typeof value === "object" && "byteLength" in value && "byteOffset" in value);
}
//#endregion
//#region node_modules/.pnpm/fumadocs-core@16.11.5_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.5_@type_72cb31c98dbdcd9237f5eec6550b9329/node_modules/fumadocs-core/dist/content/md.js
function createMarkdownRenderer({ rehypePlugins = [], remarkPlugins = [], remarkRehypeOptions } = {}) {
	const processor = remark().use(remarkPlugins).use(remarkRehype, remarkRehypeOptions).use(rehypePlugins);
	const promises = {};
	function render(tree, file, props) {
		return toJsxRuntime(tree, {
			development: false,
			filePath: file.path,
			components: props.components,
			...JsxRuntime
		});
	}
	function parse(file) {
		return processor.parse(file);
	}
	return {
		Markdown(props) {
			const { async = false, children } = props;
			const file = new VFile(children);
			const id = `${file.path}:${file.value}`;
			if (async) {
				promises[id] ??= processor.run(parse(file), file);
				return render(use(promises[id]), file, props);
			}
			return render(useMemo(() => processor.runSync(parse(file), file), [id]), file, props);
		},
		async MarkdownServer(props) {
			const file = new VFile(props.children);
			return render(await processor.run(parse(file), file), file, props);
		}
	};
}
//#endregion
//#region node_modules/.pnpm/@ungap+structured-clone@1.3.3/node_modules/@ungap/structured-clone/esm/deserialize.js
var env = typeof self === "object" ? self : globalThis;
var guard = (name, init) => {
	switch (name) {
		case "Function":
		case "SharedWorker":
		case "Worker":
		case "eval":
		case "setInterval":
		case "setTimeout": throw new TypeError("unable to deserialize " + name);
	}
	return new env[name](init);
};
var deserializer = ($, _) => {
	const as = (out, index) => {
		$.set(index, out);
		return out;
	};
	const unpair = (index) => {
		if ($.has(index)) return $.get(index);
		const [type, value] = _[index];
		switch (type) {
			case 0:
			case -1: return as(value, index);
			case 1: {
				const arr = as([], index);
				for (const index of value) arr.push(unpair(index));
				return arr;
			}
			case 2: {
				const object = as({}, index);
				for (const [key, index] of value) object[unpair(key)] = unpair(index);
				return object;
			}
			case 3: return as(new Date(value), index);
			case 4: {
				const { source, flags } = value;
				return as(new RegExp(source, flags), index);
			}
			case 5: {
				const map = as(/* @__PURE__ */ new Map(), index);
				for (const [key, index] of value) map.set(unpair(key), unpair(index));
				return map;
			}
			case 6: {
				const set = as(/* @__PURE__ */ new Set(), index);
				for (const index of value) set.add(unpair(index));
				return set;
			}
			case 7: {
				const { name, message } = value;
				return as(typeof env[name] === "function" ? guard(name, message) : new Error(message), index);
			}
			case 8: return as(BigInt(value), index);
			case "BigInt": return as(Object(BigInt(value)), index);
			case "ArrayBuffer": return as(new Uint8Array(value).buffer, value);
			case "DataView": {
				const { buffer } = new Uint8Array(value);
				return as(new DataView(buffer), value);
			}
		}
		return as(guard(type, value), index);
	};
	return unpair;
};
/**
* @typedef {Array<string,any>} Record a type representation
*/
/**
* Returns a deserialized value from a serialized array of Records.
* @param {Record[]} serialized a previously serialized value.
* @returns {any}
*/
var deserialize = (serialized) => deserializer(/* @__PURE__ */ new Map(), serialized)(0);
//#endregion
//#region node_modules/.pnpm/@ungap+structured-clone@1.3.3/node_modules/@ungap/structured-clone/esm/serialize.js
var EMPTY = "";
var { toString } = {};
var { keys } = Object;
var typeOf = (value) => {
	const type = typeof value;
	if (type !== "object" || !value) return [0, type];
	const asString = toString.call(value).slice(8, -1);
	switch (asString) {
		case "Array": return [1, EMPTY];
		case "Object": return [2, EMPTY];
		case "Date": return [3, EMPTY];
		case "RegExp": return [4, EMPTY];
		case "Map": return [5, EMPTY];
		case "Set": return [6, EMPTY];
		case "DataView": return [1, asString];
	}
	if (asString.includes("Array")) return [1, asString];
	if (value instanceof Error) return [7, value.name || "Error"];
	return [2, asString];
};
var shouldSkip = ([TYPE, type]) => TYPE === 0 && (type === "function" || type === "symbol");
var serializer = (strict, json, $, _) => {
	const as = (out, value) => {
		const index = _.push(out) - 1;
		$.set(value, index);
		return index;
	};
	const pair = (value) => {
		if ($.has(value)) return $.get(value);
		let [TYPE, type] = typeOf(value);
		switch (TYPE) {
			case 0: {
				let entry = value;
				switch (type) {
					case "bigint":
						TYPE = 8;
						entry = value.toString();
						break;
					case "function":
					case "symbol":
						if (strict) throw new TypeError("unable to serialize " + type);
						entry = null;
						break;
					case "undefined": return as([-1], value);
				}
				return as([TYPE, entry], value);
			}
			case 1: {
				if (type) {
					let spread = value;
					if (type === "DataView") spread = new Uint8Array(value.buffer);
					else if (type === "ArrayBuffer") spread = new Uint8Array(value);
					return as([type, [...spread]], value);
				}
				const arr = [];
				const index = as([TYPE, arr], value);
				for (const entry of value) arr.push(pair(entry));
				return index;
			}
			case 2: {
				if (type) switch (type) {
					case "BigInt": return as([type, value.toString()], value);
					case "Boolean":
					case "Number":
					case "String": return as([type, value.valueOf()], value);
				}
				if (json && "toJSON" in value) return pair(value.toJSON());
				const entries = [];
				const index = as([TYPE, entries], value);
				for (const key of keys(value)) if (strict || !shouldSkip(typeOf(value[key]))) entries.push([pair(key), pair(value[key])]);
				return index;
			}
			case 3: return as([TYPE, isNaN(value.getTime()) ? EMPTY : value.toISOString()], value);
			case 4: {
				const { source, flags } = value;
				return as([TYPE, {
					source,
					flags
				}], value);
			}
			case 5: {
				const entries = [];
				const index = as([TYPE, entries], value);
				for (const [key, entry] of value) if (strict || !(shouldSkip(typeOf(key)) || shouldSkip(typeOf(entry)))) entries.push([pair(key), pair(entry)]);
				return index;
			}
			case 6: {
				const entries = [];
				const index = as([TYPE, entries], value);
				for (const entry of value) if (strict || !shouldSkip(typeOf(entry))) entries.push(pair(entry));
				return index;
			}
		}
		const { message } = value;
		return as([TYPE, {
			name: type,
			message
		}], value);
	};
	return pair;
};
/**
* @typedef {Array<string,any>} Record a type representation
*/
/**
* Returns an array of serialized Records.
* @param {any} value a serializable value.
* @param {{json?: boolean, lossy?: boolean}?} options an object with a `lossy` or `json` property that,
*  if `true`, will not throw errors on incompatible types, and behave more
*  like JSON stringify would behave. Symbol and Function will be discarded.
* @returns {Record[]}
*/
var serialize = (value, { json, lossy } = {}) => {
	const _ = [];
	return serializer(!(json || lossy), !!json, /* @__PURE__ */ new Map(), _)(value), _;
};
//#endregion
//#region node_modules/.pnpm/@ungap+structured-clone@1.3.3/node_modules/@ungap/structured-clone/esm/index.js
/**
* @typedef {Array<string,any>} Record a type representation
*/
/**
* Returns an array of serialized Records.
* @param {any} any a serializable value.
* @param {{transfer?: any[], json?: boolean, lossy?: boolean}?} options an object with
* a transfer option (ignored when polyfilled) and/or non standard fields that
* fallback to the polyfill if present.
* @returns {Record[]}
*/
var esm_default = typeof structuredClone === "function" ? 
/* c8 ignore start */
(any, options) => options && ("json" in options || "lossy" in options) ? deserialize(serialize(any, options)) : structuredClone(any) : (any, options) => deserialize(serialize(any, options));
//#endregion
//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/util/schema.js
/**
* @import {Schema as SchemaType, Space} from 'property-information'
*/
/** @type {SchemaType} */
var Schema = class {
	/**
	* @param {SchemaType['property']} property
	*   Property.
	* @param {SchemaType['normal']} normal
	*   Normal.
	* @param {Space | undefined} [space]
	*   Space.
	* @returns
	*   Schema.
	*/
	constructor(property, normal, space) {
		this.normal = normal;
		this.property = property;
		if (space) this.space = space;
	}
};
Schema.prototype.normal = {};
Schema.prototype.property = {};
Schema.prototype.space = void 0;
//#endregion
//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/util/merge.js
/**
* @import {Info, Space} from 'property-information'
*/
/**
* @param {ReadonlyArray<Schema>} definitions
*   Definitions.
* @param {Space | undefined} [space]
*   Space.
* @returns {Schema}
*   Schema.
*/
function merge(definitions, space) {
	/** @type {Record<string, Info>} */
	const property = {};
	/** @type {Record<string, string>} */
	const normal = {};
	for (const definition of definitions) {
		Object.assign(property, definition.property);
		Object.assign(normal, definition.normal);
	}
	return new Schema(property, normal, space);
}
//#endregion
//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/normalize.js
/**
* Get the cleaned case insensitive form of an attribute or property.
*
* @param {string} value
*   An attribute-like or property-like name.
* @returns {string}
*   Value that can be used to look up the properly cased property on a
*   `Schema`.
*/
function normalize(value) {
	return value.toLowerCase();
}
//#endregion
//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/util/info.js
/**
* @import {Info as InfoType} from 'property-information'
*/
/** @type {InfoType} */
var Info$1 = class {
	/**
	* @param {string} property
	*   Property.
	* @param {string} attribute
	*   Attribute.
	* @returns
	*   Info.
	*/
	constructor(property, attribute) {
		this.attribute = attribute;
		this.property = property;
	}
};
Info$1.prototype.attribute = "";
Info$1.prototype.booleanish = false;
Info$1.prototype.boolean = false;
Info$1.prototype.commaOrSpaceSeparated = false;
Info$1.prototype.commaSeparated = false;
Info$1.prototype.defined = false;
Info$1.prototype.mustUseProperty = false;
Info$1.prototype.number = false;
Info$1.prototype.overloadedBoolean = false;
Info$1.prototype.property = "";
Info$1.prototype.spaceSeparated = false;
Info$1.prototype.space = void 0;
//#endregion
//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/util/types.js
var types_exports = /* @__PURE__ */ __exportAll({
	boolean: () => boolean,
	booleanish: () => booleanish,
	commaOrSpaceSeparated: () => commaOrSpaceSeparated,
	commaSeparated: () => commaSeparated,
	number: () => number,
	overloadedBoolean: () => overloadedBoolean,
	spaceSeparated: () => spaceSeparated
});
var powers = 0;
var boolean = increment();
var booleanish = increment();
var overloadedBoolean = increment();
var number = increment();
var spaceSeparated = increment();
var commaSeparated = increment();
var commaOrSpaceSeparated = increment();
function increment() {
	return 2 ** ++powers;
}
//#endregion
//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/util/defined-info.js
/**
* @import {Space} from 'property-information'
*/
var checks = Object.keys(types_exports);
var DefinedInfo = class extends Info$1 {
	/**
	* @constructor
	* @param {string} property
	*   Property.
	* @param {string} attribute
	*   Attribute.
	* @param {number | null | undefined} [mask]
	*   Mask.
	* @param {Space | undefined} [space]
	*   Space.
	* @returns
	*   Info.
	*/
	constructor(property, attribute, mask, space) {
		let index = -1;
		super(property, attribute);
		mark(this, "space", space);
		if (typeof mask === "number") while (++index < checks.length) {
			const check = checks[index];
			mark(this, checks[index], (mask & types_exports[check]) === types_exports[check]);
		}
	}
};
DefinedInfo.prototype.defined = true;
/**
* @template {keyof DefinedInfo} Key
*   Key type.
* @param {DefinedInfo} values
*   Info.
* @param {Key} key
*   Key.
* @param {DefinedInfo[Key]} value
*   Value.
* @returns {undefined}
*   Nothing.
*/
function mark(values, key, value) {
	if (value) values[key] = value;
}
//#endregion
//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/util/create.js
/**
* @import {Info, Space} from 'property-information'
*/
/**
* @typedef Definition
*   Definition of a schema.
* @property {Record<string, string> | undefined} [attributes]
*   Normalzed names to special attribute case.
* @property {ReadonlyArray<string> | undefined} [mustUseProperty]
*   Normalized names that must be set as properties.
* @property {Record<string, number | null>} properties
*   Property names to their types.
* @property {Space | undefined} [space]
*   Space.
* @property {Transform} transform
*   Transform a property name.
*/
/**
* @callback Transform
*   Transform.
* @param {Record<string, string>} attributes
*   Attributes.
* @param {string} property
*   Property.
* @returns {string}
*   Attribute.
*/
/**
* @param {Definition} definition
*   Definition.
* @returns {Schema}
*   Schema.
*/
function create(definition) {
	/** @type {Record<string, Info>} */
	const properties = {};
	/** @type {Record<string, string>} */
	const normals = {};
	for (const [property, value] of Object.entries(definition.properties)) {
		const info = new DefinedInfo(property, definition.transform(definition.attributes || {}, property), value, definition.space);
		if (definition.mustUseProperty && definition.mustUseProperty.includes(property)) info.mustUseProperty = true;
		properties[property] = info;
		normals[normalize(property)] = property;
		normals[normalize(info.attribute)] = property;
	}
	return new Schema(properties, normals, definition.space);
}
//#endregion
//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/aria.js
var aria = create({
	properties: {
		ariaActiveDescendant: null,
		ariaAtomic: booleanish,
		ariaAutoComplete: null,
		ariaBusy: booleanish,
		ariaChecked: booleanish,
		ariaColCount: number,
		ariaColIndex: number,
		ariaColSpan: number,
		ariaControls: spaceSeparated,
		ariaCurrent: null,
		ariaDescribedBy: spaceSeparated,
		ariaDetails: null,
		ariaDisabled: booleanish,
		ariaDropEffect: spaceSeparated,
		ariaErrorMessage: null,
		ariaExpanded: booleanish,
		ariaFlowTo: spaceSeparated,
		ariaGrabbed: booleanish,
		ariaHasPopup: null,
		ariaHidden: booleanish,
		ariaInvalid: null,
		ariaKeyShortcuts: null,
		ariaLabel: null,
		ariaLabelledBy: spaceSeparated,
		ariaLevel: number,
		ariaLive: null,
		ariaModal: booleanish,
		ariaMultiLine: booleanish,
		ariaMultiSelectable: booleanish,
		ariaOrientation: null,
		ariaOwns: spaceSeparated,
		ariaPlaceholder: null,
		ariaPosInSet: number,
		ariaPressed: booleanish,
		ariaReadOnly: booleanish,
		ariaRelevant: null,
		ariaRequired: booleanish,
		ariaRoleDescription: spaceSeparated,
		ariaRowCount: number,
		ariaRowIndex: number,
		ariaRowSpan: number,
		ariaSelected: booleanish,
		ariaSetSize: number,
		ariaSort: null,
		ariaValueMax: number,
		ariaValueMin: number,
		ariaValueNow: number,
		ariaValueText: null,
		role: null
	},
	transform(_, property) {
		return property === "role" ? property : "aria-" + property.slice(4).toLowerCase();
	}
});
//#endregion
//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/util/case-sensitive-transform.js
/**
* @param {Record<string, string>} attributes
*   Attributes.
* @param {string} attribute
*   Attribute.
* @returns {string}
*   Transformed attribute.
*/
function caseSensitiveTransform(attributes, attribute) {
	return attribute in attributes ? attributes[attribute] : attribute;
}
//#endregion
//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/util/case-insensitive-transform.js
/**
* @param {Record<string, string>} attributes
*   Attributes.
* @param {string} property
*   Property.
* @returns {string}
*   Transformed property.
*/
function caseInsensitiveTransform(attributes, property) {
	return caseSensitiveTransform(attributes, property.toLowerCase());
}
//#endregion
//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/html.js
var html$1 = create({
	attributes: {
		acceptcharset: "accept-charset",
		classname: "class",
		htmlfor: "for",
		httpequiv: "http-equiv"
	},
	mustUseProperty: [
		"checked",
		"multiple",
		"muted",
		"selected"
	],
	properties: {
		abbr: null,
		accept: commaSeparated,
		acceptCharset: spaceSeparated,
		accessKey: spaceSeparated,
		action: null,
		allow: null,
		allowFullScreen: boolean,
		allowPaymentRequest: boolean,
		allowUserMedia: boolean,
		alpha: boolean,
		alt: null,
		as: null,
		async: boolean,
		autoCapitalize: null,
		autoComplete: spaceSeparated,
		autoFocus: boolean,
		autoPlay: boolean,
		blocking: spaceSeparated,
		capture: null,
		charSet: null,
		checked: boolean,
		cite: null,
		className: spaceSeparated,
		closedBy: null,
		colorSpace: null,
		cols: number,
		colSpan: number,
		command: null,
		commandFor: null,
		content: null,
		contentEditable: booleanish,
		controls: boolean,
		controlsList: spaceSeparated,
		coords: number | commaSeparated,
		crossOrigin: null,
		data: null,
		dateTime: null,
		decoding: null,
		default: boolean,
		defer: boolean,
		dir: null,
		dirName: null,
		disabled: boolean,
		download: overloadedBoolean,
		draggable: booleanish,
		encType: null,
		enterKeyHint: null,
		fetchPriority: null,
		form: null,
		formAction: null,
		formEncType: null,
		formMethod: null,
		formNoValidate: boolean,
		formTarget: null,
		headers: spaceSeparated,
		height: number,
		hidden: overloadedBoolean,
		high: number,
		href: null,
		hrefLang: null,
		htmlFor: spaceSeparated,
		httpEquiv: spaceSeparated,
		id: null,
		imageSizes: null,
		imageSrcSet: null,
		inert: boolean,
		inputMode: null,
		integrity: null,
		is: null,
		isMap: boolean,
		itemId: null,
		itemProp: spaceSeparated,
		itemRef: spaceSeparated,
		itemScope: boolean,
		itemType: spaceSeparated,
		kind: null,
		label: null,
		lang: null,
		language: null,
		list: null,
		loading: null,
		loop: boolean,
		low: number,
		manifest: null,
		max: null,
		maxLength: number,
		media: null,
		method: null,
		min: null,
		minLength: number,
		multiple: boolean,
		muted: boolean,
		name: null,
		nonce: null,
		noModule: boolean,
		noValidate: boolean,
		onAbort: null,
		onAfterPrint: null,
		onAuxClick: null,
		onBeforeMatch: null,
		onBeforePrint: null,
		onBeforeToggle: null,
		onBeforeUnload: null,
		onBlur: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onContextLost: null,
		onContextMenu: null,
		onContextRestored: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFormData: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLanguageChange: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadEnd: null,
		onLoadStart: null,
		onMessage: null,
		onMessageError: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRejectionHandled: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onScrollEnd: null,
		onSecurityPolicyViolation: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onSlotChange: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnhandledRejection: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onWheel: null,
		open: boolean,
		optimum: number,
		pattern: null,
		ping: spaceSeparated,
		placeholder: null,
		playsInline: boolean,
		popover: null,
		popoverTarget: null,
		popoverTargetAction: null,
		poster: null,
		preload: null,
		readOnly: boolean,
		referrerPolicy: null,
		rel: spaceSeparated,
		required: boolean,
		reversed: boolean,
		rows: number,
		rowSpan: number,
		sandbox: spaceSeparated,
		scope: null,
		scoped: boolean,
		seamless: boolean,
		selected: boolean,
		shadowRootClonable: boolean,
		shadowRootCustomElementRegistry: boolean,
		shadowRootDelegatesFocus: boolean,
		shadowRootMode: null,
		shadowRootSerializable: boolean,
		shape: null,
		size: number,
		sizes: null,
		slot: null,
		span: number,
		spellCheck: booleanish,
		src: null,
		srcDoc: null,
		srcLang: null,
		srcSet: null,
		start: number,
		step: null,
		style: null,
		tabIndex: number,
		target: null,
		title: null,
		translate: null,
		type: null,
		typeMustMatch: boolean,
		useMap: null,
		value: booleanish,
		width: number,
		wrap: null,
		writingSuggestions: null,
		align: null,
		aLink: null,
		archive: spaceSeparated,
		axis: null,
		background: null,
		bgColor: null,
		border: number,
		borderColor: null,
		bottomMargin: number,
		cellPadding: null,
		cellSpacing: null,
		char: null,
		charOff: null,
		classId: null,
		clear: null,
		code: null,
		codeBase: null,
		codeType: null,
		color: null,
		compact: boolean,
		declare: boolean,
		event: null,
		face: null,
		frame: null,
		frameBorder: null,
		hSpace: number,
		leftMargin: number,
		link: null,
		longDesc: null,
		lowSrc: null,
		marginHeight: number,
		marginWidth: number,
		noResize: boolean,
		noHref: boolean,
		noShade: boolean,
		noWrap: boolean,
		object: null,
		profile: null,
		prompt: null,
		rev: null,
		rightMargin: number,
		rules: null,
		scheme: null,
		scrolling: booleanish,
		standby: null,
		summary: null,
		text: null,
		topMargin: number,
		valueType: null,
		version: null,
		vAlign: null,
		vLink: null,
		vSpace: number,
		allowTransparency: null,
		autoCorrect: null,
		autoSave: null,
		credentialless: boolean,
		disablePictureInPicture: boolean,
		disableRemotePlayback: boolean,
		exportParts: commaSeparated,
		part: spaceSeparated,
		prefix: null,
		property: null,
		results: number,
		security: null,
		unselectable: null
	},
	space: "html",
	transform: caseInsensitiveTransform
});
//#endregion
//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/svg.js
var svg$1 = create({
	attributes: {
		accentHeight: "accent-height",
		alignmentBaseline: "alignment-baseline",
		arabicForm: "arabic-form",
		baselineShift: "baseline-shift",
		capHeight: "cap-height",
		className: "class",
		clipPath: "clip-path",
		clipRule: "clip-rule",
		colorInterpolation: "color-interpolation",
		colorInterpolationFilters: "color-interpolation-filters",
		colorProfile: "color-profile",
		colorRendering: "color-rendering",
		crossOrigin: "crossorigin",
		dataType: "datatype",
		dominantBaseline: "dominant-baseline",
		enableBackground: "enable-background",
		fillOpacity: "fill-opacity",
		fillRule: "fill-rule",
		floodColor: "flood-color",
		floodOpacity: "flood-opacity",
		fontFamily: "font-family",
		fontSize: "font-size",
		fontSizeAdjust: "font-size-adjust",
		fontStretch: "font-stretch",
		fontStyle: "font-style",
		fontVariant: "font-variant",
		fontWeight: "font-weight",
		glyphName: "glyph-name",
		glyphOrientationHorizontal: "glyph-orientation-horizontal",
		glyphOrientationVertical: "glyph-orientation-vertical",
		hrefLang: "hreflang",
		horizAdvX: "horiz-adv-x",
		horizOriginX: "horiz-origin-x",
		horizOriginY: "horiz-origin-y",
		imageRendering: "image-rendering",
		letterSpacing: "letter-spacing",
		lightingColor: "lighting-color",
		markerEnd: "marker-end",
		markerMid: "marker-mid",
		markerStart: "marker-start",
		maskType: "mask-type",
		navDown: "nav-down",
		navDownLeft: "nav-down-left",
		navDownRight: "nav-down-right",
		navLeft: "nav-left",
		navNext: "nav-next",
		navPrev: "nav-prev",
		navRight: "nav-right",
		navUp: "nav-up",
		navUpLeft: "nav-up-left",
		navUpRight: "nav-up-right",
		onAbort: "onabort",
		onActivate: "onactivate",
		onAfterPrint: "onafterprint",
		onBeforePrint: "onbeforeprint",
		onBegin: "onbegin",
		onCancel: "oncancel",
		onCanPlay: "oncanplay",
		onCanPlayThrough: "oncanplaythrough",
		onChange: "onchange",
		onClick: "onclick",
		onClose: "onclose",
		onCopy: "oncopy",
		onCueChange: "oncuechange",
		onCut: "oncut",
		onDblClick: "ondblclick",
		onDrag: "ondrag",
		onDragEnd: "ondragend",
		onDragEnter: "ondragenter",
		onDragExit: "ondragexit",
		onDragLeave: "ondragleave",
		onDragOver: "ondragover",
		onDragStart: "ondragstart",
		onDrop: "ondrop",
		onDurationChange: "ondurationchange",
		onEmptied: "onemptied",
		onEnd: "onend",
		onEnded: "onended",
		onError: "onerror",
		onFocus: "onfocus",
		onFocusIn: "onfocusin",
		onFocusOut: "onfocusout",
		onHashChange: "onhashchange",
		onInput: "oninput",
		onInvalid: "oninvalid",
		onKeyDown: "onkeydown",
		onKeyPress: "onkeypress",
		onKeyUp: "onkeyup",
		onLoad: "onload",
		onLoadedData: "onloadeddata",
		onLoadedMetadata: "onloadedmetadata",
		onLoadStart: "onloadstart",
		onMessage: "onmessage",
		onMouseDown: "onmousedown",
		onMouseEnter: "onmouseenter",
		onMouseLeave: "onmouseleave",
		onMouseMove: "onmousemove",
		onMouseOut: "onmouseout",
		onMouseOver: "onmouseover",
		onMouseUp: "onmouseup",
		onMouseWheel: "onmousewheel",
		onOffline: "onoffline",
		onOnline: "ononline",
		onPageHide: "onpagehide",
		onPageShow: "onpageshow",
		onPaste: "onpaste",
		onPause: "onpause",
		onPlay: "onplay",
		onPlaying: "onplaying",
		onPopState: "onpopstate",
		onProgress: "onprogress",
		onRateChange: "onratechange",
		onRepeat: "onrepeat",
		onReset: "onreset",
		onResize: "onresize",
		onScroll: "onscroll",
		onSeeked: "onseeked",
		onSeeking: "onseeking",
		onSelect: "onselect",
		onShow: "onshow",
		onStalled: "onstalled",
		onStorage: "onstorage",
		onSubmit: "onsubmit",
		onSuspend: "onsuspend",
		onTimeUpdate: "ontimeupdate",
		onToggle: "ontoggle",
		onUnload: "onunload",
		onVolumeChange: "onvolumechange",
		onWaiting: "onwaiting",
		onZoom: "onzoom",
		overlinePosition: "overline-position",
		overlineThickness: "overline-thickness",
		paintOrder: "paint-order",
		panose1: "panose-1",
		pointerEvents: "pointer-events",
		referrerPolicy: "referrerpolicy",
		renderingIntent: "rendering-intent",
		shapeRendering: "shape-rendering",
		stopColor: "stop-color",
		stopOpacity: "stop-opacity",
		strikethroughPosition: "strikethrough-position",
		strikethroughThickness: "strikethrough-thickness",
		strokeDashArray: "stroke-dasharray",
		strokeDashOffset: "stroke-dashoffset",
		strokeLineCap: "stroke-linecap",
		strokeLineJoin: "stroke-linejoin",
		strokeMiterLimit: "stroke-miterlimit",
		strokeOpacity: "stroke-opacity",
		strokeWidth: "stroke-width",
		tabIndex: "tabindex",
		textAnchor: "text-anchor",
		textDecoration: "text-decoration",
		textRendering: "text-rendering",
		transformOrigin: "transform-origin",
		typeOf: "typeof",
		underlinePosition: "underline-position",
		underlineThickness: "underline-thickness",
		unicodeBidi: "unicode-bidi",
		unicodeRange: "unicode-range",
		unitsPerEm: "units-per-em",
		vAlphabetic: "v-alphabetic",
		vHanging: "v-hanging",
		vIdeographic: "v-ideographic",
		vMathematical: "v-mathematical",
		vectorEffect: "vector-effect",
		vertAdvY: "vert-adv-y",
		vertOriginX: "vert-origin-x",
		vertOriginY: "vert-origin-y",
		wordSpacing: "word-spacing",
		writingMode: "writing-mode",
		xHeight: "x-height",
		playbackOrder: "playbackorder",
		timelineBegin: "timelinebegin"
	},
	properties: {
		about: commaOrSpaceSeparated,
		accentHeight: number,
		accumulate: null,
		additive: null,
		alignmentBaseline: null,
		alphabetic: number,
		amplitude: number,
		arabicForm: null,
		ascent: number,
		attributeName: null,
		attributeType: null,
		azimuth: number,
		bandwidth: null,
		baselineShift: null,
		baseFrequency: null,
		baseProfile: null,
		bbox: null,
		begin: null,
		bias: number,
		by: null,
		calcMode: null,
		capHeight: number,
		className: spaceSeparated,
		clip: null,
		clipPath: null,
		clipPathUnits: null,
		clipRule: null,
		color: null,
		colorInterpolation: null,
		colorInterpolationFilters: null,
		colorProfile: null,
		colorRendering: null,
		content: null,
		contentScriptType: null,
		contentStyleType: null,
		crossOrigin: null,
		cursor: null,
		cx: null,
		cy: null,
		d: null,
		dataType: null,
		defaultAction: null,
		descent: number,
		diffuseConstant: number,
		direction: null,
		display: null,
		dur: null,
		divisor: number,
		dominantBaseline: null,
		download: boolean,
		dx: null,
		dy: null,
		edgeMode: null,
		editable: null,
		elevation: number,
		enableBackground: null,
		end: null,
		event: null,
		exponent: number,
		externalResourcesRequired: null,
		fill: null,
		fillOpacity: number,
		fillRule: null,
		filter: null,
		filterRes: null,
		filterUnits: null,
		floodColor: null,
		floodOpacity: null,
		focusable: null,
		focusHighlight: null,
		fontFamily: null,
		fontSize: null,
		fontSizeAdjust: null,
		fontStretch: null,
		fontStyle: null,
		fontVariant: null,
		fontWeight: null,
		format: null,
		fr: null,
		from: null,
		fx: null,
		fy: null,
		g1: commaSeparated,
		g2: commaSeparated,
		glyphName: commaSeparated,
		glyphOrientationHorizontal: null,
		glyphOrientationVertical: null,
		glyphRef: null,
		gradientTransform: null,
		gradientUnits: null,
		handler: null,
		hanging: number,
		hatchContentUnits: null,
		hatchUnits: null,
		height: null,
		href: null,
		hrefLang: null,
		horizAdvX: number,
		horizOriginX: number,
		horizOriginY: number,
		id: null,
		ideographic: number,
		imageRendering: null,
		initialVisibility: null,
		in: null,
		in2: null,
		intercept: number,
		k: number,
		k1: number,
		k2: number,
		k3: number,
		k4: number,
		kernelMatrix: commaOrSpaceSeparated,
		kernelUnitLength: null,
		keyPoints: null,
		keySplines: null,
		keyTimes: null,
		kerning: null,
		lang: null,
		lengthAdjust: null,
		letterSpacing: null,
		lightingColor: null,
		limitingConeAngle: number,
		local: null,
		markerEnd: null,
		markerMid: null,
		markerStart: null,
		markerHeight: null,
		markerUnits: null,
		markerWidth: null,
		mask: null,
		maskContentUnits: null,
		maskType: null,
		maskUnits: null,
		mathematical: null,
		max: null,
		media: null,
		mediaCharacterEncoding: null,
		mediaContentEncodings: null,
		mediaSize: number,
		mediaTime: null,
		method: null,
		min: null,
		mode: null,
		name: null,
		navDown: null,
		navDownLeft: null,
		navDownRight: null,
		navLeft: null,
		navNext: null,
		navPrev: null,
		navRight: null,
		navUp: null,
		navUpLeft: null,
		navUpRight: null,
		numOctaves: null,
		observer: null,
		offset: null,
		onAbort: null,
		onActivate: null,
		onAfterPrint: null,
		onBeforePrint: null,
		onBegin: null,
		onCancel: null,
		onCanPlay: null,
		onCanPlayThrough: null,
		onChange: null,
		onClick: null,
		onClose: null,
		onCopy: null,
		onCueChange: null,
		onCut: null,
		onDblClick: null,
		onDrag: null,
		onDragEnd: null,
		onDragEnter: null,
		onDragExit: null,
		onDragLeave: null,
		onDragOver: null,
		onDragStart: null,
		onDrop: null,
		onDurationChange: null,
		onEmptied: null,
		onEnd: null,
		onEnded: null,
		onError: null,
		onFocus: null,
		onFocusIn: null,
		onFocusOut: null,
		onHashChange: null,
		onInput: null,
		onInvalid: null,
		onKeyDown: null,
		onKeyPress: null,
		onKeyUp: null,
		onLoad: null,
		onLoadedData: null,
		onLoadedMetadata: null,
		onLoadStart: null,
		onMessage: null,
		onMouseDown: null,
		onMouseEnter: null,
		onMouseLeave: null,
		onMouseMove: null,
		onMouseOut: null,
		onMouseOver: null,
		onMouseUp: null,
		onMouseWheel: null,
		onOffline: null,
		onOnline: null,
		onPageHide: null,
		onPageShow: null,
		onPaste: null,
		onPause: null,
		onPlay: null,
		onPlaying: null,
		onPopState: null,
		onProgress: null,
		onRateChange: null,
		onRepeat: null,
		onReset: null,
		onResize: null,
		onScroll: null,
		onSeeked: null,
		onSeeking: null,
		onSelect: null,
		onShow: null,
		onStalled: null,
		onStorage: null,
		onSubmit: null,
		onSuspend: null,
		onTimeUpdate: null,
		onToggle: null,
		onUnload: null,
		onVolumeChange: null,
		onWaiting: null,
		onZoom: null,
		opacity: null,
		operator: null,
		order: null,
		orient: null,
		orientation: null,
		origin: null,
		overflow: null,
		overlay: null,
		overlinePosition: number,
		overlineThickness: number,
		paintOrder: null,
		panose1: null,
		path: null,
		pathLength: number,
		patternContentUnits: null,
		patternTransform: null,
		patternUnits: null,
		phase: null,
		ping: spaceSeparated,
		pitch: null,
		playbackOrder: null,
		pointerEvents: null,
		points: null,
		pointsAtX: number,
		pointsAtY: number,
		pointsAtZ: number,
		preserveAlpha: null,
		preserveAspectRatio: null,
		primitiveUnits: null,
		propagate: null,
		property: commaOrSpaceSeparated,
		r: null,
		radius: null,
		referrerPolicy: null,
		refX: null,
		refY: null,
		rel: commaOrSpaceSeparated,
		rev: commaOrSpaceSeparated,
		renderingIntent: null,
		repeatCount: null,
		repeatDur: null,
		requiredExtensions: commaOrSpaceSeparated,
		requiredFeatures: commaOrSpaceSeparated,
		requiredFonts: commaOrSpaceSeparated,
		requiredFormats: commaOrSpaceSeparated,
		resource: null,
		restart: null,
		result: null,
		rotate: null,
		rx: null,
		ry: null,
		scale: null,
		seed: null,
		shapeRendering: null,
		side: null,
		slope: null,
		snapshotTime: null,
		specularConstant: number,
		specularExponent: number,
		spreadMethod: null,
		spacing: null,
		startOffset: null,
		stdDeviation: null,
		stemh: null,
		stemv: null,
		stitchTiles: null,
		stopColor: null,
		stopOpacity: null,
		strikethroughPosition: number,
		strikethroughThickness: number,
		string: null,
		stroke: null,
		strokeDashArray: commaOrSpaceSeparated,
		strokeDashOffset: null,
		strokeLineCap: null,
		strokeLineJoin: null,
		strokeMiterLimit: number,
		strokeOpacity: number,
		strokeWidth: null,
		style: null,
		surfaceScale: number,
		syncBehavior: null,
		syncBehaviorDefault: null,
		syncMaster: null,
		syncTolerance: null,
		syncToleranceDefault: null,
		systemLanguage: commaOrSpaceSeparated,
		tabIndex: number,
		tableValues: null,
		target: null,
		targetX: number,
		targetY: number,
		textAnchor: null,
		textDecoration: null,
		textRendering: null,
		textLength: null,
		timelineBegin: null,
		title: null,
		transformBehavior: null,
		type: null,
		typeOf: commaOrSpaceSeparated,
		to: null,
		transform: null,
		transformOrigin: null,
		u1: null,
		u2: null,
		underlinePosition: number,
		underlineThickness: number,
		unicode: null,
		unicodeBidi: null,
		unicodeRange: null,
		unitsPerEm: number,
		values: null,
		vAlphabetic: number,
		vMathematical: number,
		vectorEffect: null,
		vHanging: number,
		vIdeographic: number,
		version: null,
		vertAdvY: number,
		vertOriginX: number,
		vertOriginY: number,
		viewBox: null,
		viewTarget: null,
		visibility: null,
		width: null,
		widths: null,
		wordSpacing: null,
		writingMode: null,
		x: null,
		x1: null,
		x2: null,
		xChannelSelector: null,
		xHeight: number,
		y: null,
		y1: null,
		y2: null,
		yChannelSelector: null,
		z: null,
		zoomAndPan: null
	},
	space: "svg",
	transform: caseSensitiveTransform
});
//#endregion
//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/xlink.js
var xlink = create({
	properties: {
		xLinkActuate: null,
		xLinkArcRole: null,
		xLinkHref: null,
		xLinkRole: null,
		xLinkShow: null,
		xLinkTitle: null,
		xLinkType: null
	},
	space: "xlink",
	transform(_, property) {
		return "xlink:" + property.slice(5).toLowerCase();
	}
});
//#endregion
//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/xmlns.js
var xmlns = create({
	attributes: { xmlnsxlink: "xmlns:xlink" },
	properties: {
		xmlnsXLink: null,
		xmlns: null
	},
	space: "xmlns",
	transform: caseInsensitiveTransform
});
//#endregion
//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/xml.js
var xml = create({
	properties: {
		xmlBase: null,
		xmlLang: null,
		xmlSpace: null
	},
	space: "xml",
	transform(_, property) {
		return "xml:" + property.slice(3).toLowerCase();
	}
});
//#endregion
//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/lib/find.js
/**
* @import {Schema} from 'property-information'
*/
var cap = /[A-Z]/g;
var dash = /-[a-z]/g;
var valid = /^data[-\w.:]+$/i;
/**
* Look up info on a property.
*
* In most cases the given `schema` contains info on the property.
* All standard,
* most legacy,
* and some non-standard properties are supported.
* For these cases,
* the returned `Info` has hints about the value of the property.
*
* `name` can also be a valid data attribute or property,
* in which case an `Info` object with the correctly cased `attribute` and
* `property` is returned.
*
* `name` can be an unknown attribute,
* in which case an `Info` object with `attribute` and `property` set to the
* given name is returned.
* It is not recommended to provide unsupported legacy or recently specced
* properties.
*
*
* @param {Schema} schema
*   Schema;
*   either the `html` or `svg` export.
* @param {string} value
*   An attribute-like or property-like name;
*   it will be passed through `normalize` to hopefully find the correct info.
* @returns {Info}
*   Info.
*/
function find(schema, value) {
	const normal = normalize(value);
	let property = value;
	let Type = Info$1;
	if (normal in schema.normal) return schema.property[schema.normal[normal]];
	if (normal.length > 4 && normal.slice(0, 4) === "data" && valid.test(value)) {
		if (value.charAt(4) === "-") {
			const rest = value.slice(5).replace(dash, camelcase);
			property = "data" + rest.charAt(0).toUpperCase() + rest.slice(1);
		} else {
			const rest = value.slice(4);
			if (!dash.test(rest)) {
				let dashes = rest.replace(cap, kebab);
				if (dashes.charAt(0) !== "-") dashes = "-" + dashes;
				value = "data" + dashes;
			}
		}
		Type = DefinedInfo;
	}
	return new Type(property, value);
}
/**
* @param {string} $0
*   Value.
* @returns {string}
*   Kebab.
*/
function kebab($0) {
	return "-" + $0.toLowerCase();
}
/**
* @param {string} $0
*   Value.
* @returns {string}
*   Camel.
*/
function camelcase($0) {
	return $0.charAt(1).toUpperCase();
}
//#endregion
//#region node_modules/.pnpm/property-information@7.2.0/node_modules/property-information/index.js
var html = merge([
	aria,
	html$1,
	xlink,
	xmlns,
	xml
], "html");
var svg = merge([
	aria,
	svg$1,
	xlink,
	xmlns,
	xml
], "svg");
//#endregion
//#region node_modules/.pnpm/comma-separated-tokens@2.0.3/node_modules/comma-separated-tokens/index.js
/**
* @typedef Options
*   Configuration for `stringify`.
* @property {boolean} [padLeft=true]
*   Whether to pad a space before a token.
* @property {boolean} [padRight=false]
*   Whether to pad a space after a token.
*/
/**
* @typedef {Options} StringifyOptions
*   Please use `StringifyOptions` instead.
*/
/**
* Parse comma-separated tokens to an array.
*
* @param {string} value
*   Comma-separated tokens.
* @returns {Array<string>}
*   List of tokens.
*/
function parse$1(value) {
	/** @type {Array<string>} */
	const tokens = [];
	const input = String(value || "");
	let index = input.indexOf(",");
	let start = 0;
	/** @type {boolean} */
	let end = false;
	while (!end) {
		if (index === -1) {
			index = input.length;
			end = true;
		}
		const token = input.slice(start, index).trim();
		if (token || !end) tokens.push(token);
		start = index + 1;
		index = input.indexOf(",", start);
	}
	return tokens;
}
/**
* Serialize an array of strings or numbers to comma-separated tokens.
*
* @param {Array<string|number>} values
*   List of tokens.
* @param {Options} [options]
*   Configuration for `stringify` (optional).
* @returns {string}
*   Comma-separated tokens.
*/
function stringify$1(values, options) {
	const settings = options || {};
	return (values[values.length - 1] === "" ? [...values, ""] : values).join((settings.padRight ? " " : "") + "," + (settings.padLeft === false ? "" : " ")).trim();
}
//#endregion
//#region node_modules/.pnpm/hast-util-parse-selector@4.0.0/node_modules/hast-util-parse-selector/lib/index.js
/**
* @typedef {import('hast').Element} Element
* @typedef {import('hast').Properties} Properties
*/
/**
* @template {string} SimpleSelector
*   Selector type.
* @template {string} DefaultTagName
*   Default tag name.
* @typedef {(
*   SimpleSelector extends ''
*     ? DefaultTagName
*     : SimpleSelector extends `${infer TagName}.${infer Rest}`
*     ? ExtractTagName<TagName, DefaultTagName>
*     : SimpleSelector extends `${infer TagName}#${infer Rest}`
*     ? ExtractTagName<TagName, DefaultTagName>
*     : SimpleSelector extends string
*     ? SimpleSelector
*     : DefaultTagName
* )} ExtractTagName
*   Extract tag name from a simple selector.
*/
var search = /[#.]/g;
/**
* Create a hast element from a simple CSS selector.
*
* @template {string} Selector
*   Type of selector.
* @template {string} [DefaultTagName='div']
*   Type of default tag name (default: `'div'`).
* @param {Selector | null | undefined} [selector]
*   Simple CSS selector (optional).
*
*   Can contain a tag name (`foo`), classes (`.bar`), and an ID (`#baz`).
*   Multiple classes are allowed.
*   Uses the last ID if multiple IDs are found.
* @param {DefaultTagName | null | undefined} [defaultTagName='div']
*   Tag name to use if `selector` does not specify one (default: `'div'`).
* @returns {Element & {tagName: ExtractTagName<Selector, DefaultTagName>}}
*   Built element.
*/
function parseSelector(selector, defaultTagName) {
	const value = selector || "";
	/** @type {Properties} */
	const props = {};
	let start = 0;
	/** @type {string | undefined} */
	let previous;
	/** @type {string | undefined} */
	let tagName;
	while (start < value.length) {
		search.lastIndex = start;
		const match = search.exec(value);
		const subvalue = value.slice(start, match ? match.index : value.length);
		if (subvalue) {
			if (!previous) tagName = subvalue;
			else if (previous === "#") props.id = subvalue;
			else if (Array.isArray(props.className)) props.className.push(subvalue);
			else props.className = [subvalue];
			start += subvalue.length;
		}
		if (match) {
			previous = match[0];
			start++;
		}
	}
	return {
		type: "element",
		tagName: tagName || defaultTagName || "div",
		properties: props,
		children: []
	};
}
//#endregion
//#region node_modules/.pnpm/space-separated-tokens@2.0.2/node_modules/space-separated-tokens/index.js
/**
* Parse space-separated tokens to an array of strings.
*
* @param {string} value
*   Space-separated tokens.
* @returns {Array<string>}
*   List of tokens.
*/
function parse(value) {
	const input = String(value || "").trim();
	return input ? input.split(/[ \t\n\r\f]+/g) : [];
}
/**
* Serialize an array of strings as space separated-tokens.
*
* @param {Array<string|number>} values
*   List of tokens.
* @returns {string}
*   Space-separated tokens.
*/
function stringify(values) {
	return values.join(" ").trim();
}
//#endregion
//#region node_modules/.pnpm/hastscript@9.0.1/node_modules/hastscript/lib/create-h.js
/**
* @import {Element, Nodes, RootContent, Root} from 'hast'
* @import {Info, Schema} from 'property-information'
*/
/**
* @typedef {Array<Nodes | PrimitiveChild>} ArrayChildNested
*   List of children (deep).
*/
/**
* @typedef {Array<ArrayChildNested | Nodes | PrimitiveChild>} ArrayChild
*   List of children.
*/
/**
* @typedef {Array<number | string>} ArrayValue
*   List of property values for space- or comma separated values (such as `className`).
*/
/**
* @typedef {ArrayChild | Nodes | PrimitiveChild} Child
*   Acceptable child value.
*/
/**
* @typedef {number | string | null | undefined} PrimitiveChild
*   Primitive children, either ignored (nullish), or turned into text nodes.
*/
/**
* @typedef {boolean | number | string | null | undefined} PrimitiveValue
*   Primitive property value.
*/
/**
* @typedef {Record<string, PropertyValue | Style>} Properties
*   Acceptable value for element properties.
*/
/**
* @typedef {ArrayValue | PrimitiveValue} PropertyValue
*   Primitive value or list value.
*/
/**
* @typedef {Element | Root} Result
*   Result from a `h` (or `s`) call.
*/
/**
* @typedef {number | string} StyleValue
*   Value for a CSS style field.
*/
/**
* @typedef {Record<string, StyleValue>} Style
*   Supported value of a `style` prop.
*/
/**
* @param {Schema} schema
*   Schema to use.
* @param {string} defaultTagName
*   Default tag name.
* @param {ReadonlyArray<string> | undefined} [caseSensitive]
*   Case-sensitive tag names (default: `undefined`).
* @returns
*   `h`.
*/
function createH(schema, defaultTagName, caseSensitive) {
	const adjust = caseSensitive ? createAdjustMap(caseSensitive) : void 0;
	/**
	* Hyperscript compatible DSL for creating virtual hast trees.
	*
	* @overload
	* @param {null | undefined} [selector]
	* @param {...Child} children
	* @returns {Root}
	*
	* @overload
	* @param {string} selector
	* @param {Properties} properties
	* @param {...Child} children
	* @returns {Element}
	*
	* @overload
	* @param {string} selector
	* @param {...Child} children
	* @returns {Element}
	*
	* @param {string | null | undefined} [selector]
	*   Selector.
	* @param {Child | Properties | null | undefined} [properties]
	*   Properties (or first child) (default: `undefined`).
	* @param {...Child} children
	*   Children.
	* @returns {Result}
	*   Result.
	*/
	function h(selector, properties, ...children) {
		/** @type {Result} */
		let node;
		if (selector === null || selector === void 0) {
			node = {
				type: "root",
				children: []
			};
			const child = properties;
			children.unshift(child);
		} else {
			node = parseSelector(selector, defaultTagName);
			const lower = node.tagName.toLowerCase();
			const adjusted = adjust ? adjust.get(lower) : void 0;
			node.tagName = adjusted || lower;
			if (isChild(properties)) children.unshift(properties);
			else for (const [key, value] of Object.entries(properties)) addProperty(schema, node.properties, key, value);
		}
		for (const child of children) addChild(node.children, child);
		if (node.type === "element" && node.tagName === "template") {
			node.content = {
				type: "root",
				children: node.children
			};
			node.children = [];
		}
		return node;
	}
	return h;
}
/**
* Check if something is properties or a child.
*
* @param {Child | Properties} value
*   Value to check.
* @returns {value is Child}
*   Whether `value` is definitely a child.
*/
function isChild(value) {
	if (value === null || typeof value !== "object" || Array.isArray(value)) return true;
	if (typeof value.type !== "string") return false;
	const record = value;
	const keys = Object.keys(value);
	for (const key of keys) {
		const value = record[key];
		if (value && typeof value === "object") {
			if (!Array.isArray(value)) return true;
			const list = value;
			for (const item of list) if (typeof item !== "number" && typeof item !== "string") return true;
		}
	}
	if ("children" in value && Array.isArray(value.children)) return true;
	return false;
}
/**
* @param {Schema} schema
*   Schema.
* @param {Properties} properties
*   Properties object.
* @param {string} key
*   Property name.
* @param {PropertyValue | Style} value
*   Property value.
* @returns {undefined}
*   Nothing.
*/
function addProperty(schema, properties, key, value) {
	const info = find(schema, key);
	/** @type {PropertyValue} */
	let result;
	if (value === null || value === void 0) return;
	if (typeof value === "number") {
		if (Number.isNaN(value)) return;
		result = value;
	} else if (typeof value === "boolean") result = value;
	else if (typeof value === "string") {
		if (info.spaceSeparated) result = parse(value);
		else if (info.commaSeparated) result = parse$1(value);
		else if (info.commaOrSpaceSeparated) result = parse(parse$1(value).join(" "));
		else result = parsePrimitive(info, info.property, value);
	} else if (Array.isArray(value)) result = [...value];
	else result = info.property === "style" ? style(value) : String(value);
	if (Array.isArray(result)) {
		/** @type {Array<number | string>} */
		const finalResult = [];
		for (const item of result) finalResult.push(parsePrimitive(info, info.property, item));
		result = finalResult;
	}
	if (info.property === "className" && Array.isArray(properties.className)) result = properties.className.concat(result);
	properties[info.property] = result;
}
/**
* @param {Array<RootContent>} nodes
*   Children.
* @param {Child} value
*   Child.
* @returns {undefined}
*   Nothing.
*/
function addChild(nodes, value) {
	if (value === null || value === void 0) {} else if (typeof value === "number" || typeof value === "string") nodes.push({
		type: "text",
		value: String(value)
	});
	else if (Array.isArray(value)) for (const child of value) addChild(nodes, child);
	else if (typeof value === "object" && "type" in value) {
		if (value.type === "root") addChild(nodes, value.children);
		else nodes.push(value);
	} else throw new Error("Expected node, nodes, or string, got `" + value + "`");
}
/**
* Parse a single primitives.
*
* @param {Info} info
*   Property information.
* @param {string} name
*   Property name.
* @param {PrimitiveValue} value
*   Property value.
* @returns {PrimitiveValue}
*   Property value.
*/
function parsePrimitive(info, name, value) {
	if (typeof value === "string") {
		if (info.number && value && !Number.isNaN(Number(value))) return Number(value);
		if ((info.boolean || info.overloadedBoolean) && (value === "" || normalize(value) === normalize(name))) return true;
	}
	return value;
}
/**
* Serialize a `style` object as a string.
*
* @param {Style} styles
*   Style object.
* @returns {string}
*   CSS string.
*/
function style(styles) {
	/** @type {Array<string>} */
	const result = [];
	for (const [key, value] of Object.entries(styles)) result.push([key, value].join(": "));
	return result.join("; ");
}
/**
* Create a map to adjust casing.
*
* @param {ReadonlyArray<string>} values
*   List of properly cased keys.
* @returns {Map<string, string>}
*   Map of lowercase keys to uppercase keys.
*/
function createAdjustMap(values) {
	/** @type {Map<string, string>} */
	const result = /* @__PURE__ */ new Map();
	for (const value of values) result.set(value.toLowerCase(), value);
	return result;
}
//#endregion
//#region node_modules/.pnpm/hastscript@9.0.1/node_modules/hastscript/lib/svg-case-sensitive-tag-names.js
/**
* List of case-sensitive SVG tag names.
*
* @type {ReadonlyArray<string>}
*/
var svgCaseSensitiveTagNames = [
	"altGlyph",
	"altGlyphDef",
	"altGlyphItem",
	"animateColor",
	"animateMotion",
	"animateTransform",
	"clipPath",
	"feBlend",
	"feColorMatrix",
	"feComponentTransfer",
	"feComposite",
	"feConvolveMatrix",
	"feDiffuseLighting",
	"feDisplacementMap",
	"feDistantLight",
	"feDropShadow",
	"feFlood",
	"feFuncA",
	"feFuncB",
	"feFuncG",
	"feFuncR",
	"feGaussianBlur",
	"feImage",
	"feMerge",
	"feMergeNode",
	"feMorphology",
	"feOffset",
	"fePointLight",
	"feSpecularLighting",
	"feSpotLight",
	"feTile",
	"feTurbulence",
	"foreignObject",
	"glyphRef",
	"linearGradient",
	"radialGradient",
	"solidColor",
	"textArea",
	"textPath"
];
//#endregion
//#region node_modules/.pnpm/hastscript@9.0.1/node_modules/hastscript/lib/index.js
/**
* @typedef {import('./jsx-classic.js').Element} h.JSX.Element
* @typedef {import('./jsx-classic.js').ElementChildrenAttribute} h.JSX.ElementChildrenAttribute
* @typedef {import('./jsx-classic.js').IntrinsicAttributes} h.JSX.IntrinsicAttributes
* @typedef {import('./jsx-classic.js').IntrinsicElements} h.JSX.IntrinsicElements
*/
/**
* @typedef {import('./jsx-classic.js').Element} s.JSX.Element
* @typedef {import('./jsx-classic.js').ElementChildrenAttribute} s.JSX.ElementChildrenAttribute
* @typedef {import('./jsx-classic.js').IntrinsicAttributes} s.JSX.IntrinsicAttributes
* @typedef {import('./jsx-classic.js').IntrinsicElements} s.JSX.IntrinsicElements
*/
/** @type {ReturnType<createH>} */
var h = createH(html, "div");
/** @type {ReturnType<createH>} */
var s = createH(svg, "g", svgCaseSensitiveTagNames);
//#endregion
//#region node_modules/.pnpm/vfile-location@5.0.3/node_modules/vfile-location/lib/index.js
/**
* @import {VFile, Value} from 'vfile'
* @import {Location} from 'vfile-location'
*/
/**
* Create an index of the given document to translate between line/column and
* offset based positional info.
*
* Also implemented in Rust in [`wooorm/markdown-rs`][markdown-rs].
*
* [markdown-rs]: https://github.com/wooorm/markdown-rs/blob/main/src/util/location.rs
*
* @param {VFile | Value} file
*   File to index.
* @returns {Location}
*   Accessors for index.
*/
function location(file) {
	const value = String(file);
	/**
	* List, where each index is a line number (0-based), and each value is the
	* byte index *after* where the line ends.
	*
	* @type {Array<number>}
	*/
	const indices = [];
	return {
		toOffset,
		toPoint
	};
	/** @type {Location['toPoint']} */
	function toPoint(offset) {
		if (typeof offset === "number" && offset > -1 && offset <= value.length) {
			let index = 0;
			while (true) {
				let end = indices[index];
				if (end === void 0) {
					const eol = next(value, indices[index - 1]);
					end = eol === -1 ? value.length + 1 : eol + 1;
					indices[index] = end;
				}
				if (end > offset) return {
					line: index + 1,
					column: offset - (index > 0 ? indices[index - 1] : 0) + 1,
					offset
				};
				index++;
			}
		}
	}
	/** @type {Location['toOffset']} */
	function toOffset(point) {
		if (point && typeof point.line === "number" && typeof point.column === "number" && !Number.isNaN(point.line) && !Number.isNaN(point.column)) {
			while (indices.length < point.line) {
				const from = indices[indices.length - 1];
				const eol = next(value, from);
				const end = eol === -1 ? value.length + 1 : eol + 1;
				if (from === end) break;
				indices.push(end);
			}
			const offset = (point.line > 1 ? indices[point.line - 2] : 0) + point.column - 1;
			if (offset < indices[point.line - 1]) return offset;
		}
	}
}
/**
* @param {string} value
* @param {number} from
*/
function next(value, from) {
	const cr = value.indexOf("\r", from);
	const lf = value.indexOf("\n", from);
	if (lf === -1) return cr;
	if (cr === -1 || cr + 1 === lf) return lf;
	return cr < lf ? cr : lf;
}
//#endregion
//#region node_modules/.pnpm/web-namespaces@2.0.1/node_modules/web-namespaces/index.js
/**
* Map of web namespaces.
*
* @type {Record<string, string>}
*/
var webNamespaces = {
	html: "http://www.w3.org/1999/xhtml",
	mathml: "http://www.w3.org/1998/Math/MathML",
	svg: "http://www.w3.org/2000/svg",
	xlink: "http://www.w3.org/1999/xlink",
	xml: "http://www.w3.org/XML/1998/namespace",
	xmlns: "http://www.w3.org/2000/xmlns/"
};
//#endregion
//#region node_modules/.pnpm/hast-util-from-parse5@8.0.3/node_modules/hast-util-from-parse5/lib/index.js
/**
* @import {ElementData, Element, Nodes, RootContent, Root} from 'hast'
* @import {DefaultTreeAdapterMap, Token} from 'parse5'
* @import {Schema} from 'property-information'
* @import {Point, Position} from 'unist'
* @import {VFile} from 'vfile'
* @import {Options} from 'hast-util-from-parse5'
*/
/**
* @typedef State
*   Info passed around about the current state.
* @property {VFile | undefined} file
*   Corresponding file.
* @property {boolean} location
*   Whether location info was found.
* @property {Schema} schema
*   Current schema.
* @property {boolean | undefined} verbose
*   Add extra positional info.
*/
var own$2 = {}.hasOwnProperty;
/** @type {unknown} */
var proto = Object.prototype;
/**
* Transform a `parse5` AST to hast.
*
* @param {DefaultTreeAdapterMap['node']} tree
*   `parse5` tree to transform.
* @param {Options | null | undefined} [options]
*   Configuration (optional).
* @returns {Nodes}
*   hast tree.
*/
function fromParse5(tree, options) {
	const settings = options || {};
	return one$1({
		file: settings.file || void 0,
		location: false,
		schema: settings.space === "svg" ? svg : html,
		verbose: settings.verbose || false
	}, tree);
}
/**
* Transform a node.
*
* @param {State} state
*   Info passed around about the current state.
* @param {DefaultTreeAdapterMap['node']} node
*   p5 node.
* @returns {Nodes}
*   hast node.
*/
function one$1(state, node) {
	/** @type {Nodes} */
	let result;
	switch (node.nodeName) {
		case "#comment": {
			const reference = node;
			result = {
				type: "comment",
				value: reference.data
			};
			patch$1(state, reference, result);
			return result;
		}
		case "#document":
		case "#document-fragment": {
			const reference = node;
			const quirksMode = "mode" in reference ? reference.mode === "quirks" || reference.mode === "limited-quirks" : false;
			result = {
				type: "root",
				children: all$2(state, node.childNodes),
				data: { quirksMode }
			};
			if (state.file && state.location) {
				const document = String(state.file);
				const loc = location(document);
				const start = loc.toPoint(0);
				const end = loc.toPoint(document.length);
				result.position = {
					start,
					end
				};
			}
			return result;
		}
		case "#documentType": {
			const reference = node;
			result = { type: "doctype" };
			patch$1(state, reference, result);
			return result;
		}
		case "#text": {
			const reference = node;
			result = {
				type: "text",
				value: reference.value
			};
			patch$1(state, reference, result);
			return result;
		}
		default:
			result = element$2(state, node);
			return result;
	}
}
/**
* Transform children.
*
* @param {State} state
*   Info passed around about the current state.
* @param {Array<DefaultTreeAdapterMap['node']>} nodes
*   Nodes.
* @returns {Array<RootContent>}
*   hast nodes.
*/
function all$2(state, nodes) {
	let index = -1;
	/** @type {Array<RootContent>} */
	const results = [];
	while (++index < nodes.length) {
		const result = one$1(state, nodes[index]);
		results.push(result);
	}
	return results;
}
/**
* Transform an element.
*
* @param {State} state
*   Info passed around about the current state.
* @param {DefaultTreeAdapterMap['element']} node
*   `parse5` node to transform.
* @returns {Element}
*   hast node.
*/
function element$2(state, node) {
	const schema = state.schema;
	state.schema = node.namespaceURI === webNamespaces.svg ? svg : html;
	let index = -1;
	/** @type {Record<string, string>} */
	const properties = {};
	while (++index < node.attrs.length) {
		const attribute = node.attrs[index];
		const name = (attribute.prefix ? attribute.prefix + ":" : "") + attribute.name;
		if (!own$2.call(proto, name)) properties[name] = attribute.value;
	}
	const result = (state.schema.space === "svg" ? s : h)(node.tagName, properties, all$2(state, node.childNodes));
	patch$1(state, node, result);
	if (result.tagName === "template") {
		const reference = node;
		const pos = reference.sourceCodeLocation;
		const startTag = pos && pos.startTag && position(pos.startTag);
		const endTag = pos && pos.endTag && position(pos.endTag);
		const content = one$1(state, reference.content);
		if (startTag && endTag && state.file) content.position = {
			start: startTag.end,
			end: endTag.start
		};
		result.content = content;
	}
	state.schema = schema;
	return result;
}
/**
* Patch positional info from `from` onto `to`.
*
* @param {State} state
*   Info passed around about the current state.
* @param {DefaultTreeAdapterMap['node']} from
*   p5 node.
* @param {Nodes} to
*   hast node.
* @returns {undefined}
*   Nothing.
*/
function patch$1(state, from, to) {
	if ("sourceCodeLocation" in from && from.sourceCodeLocation && state.file) {
		const position = createLocation(state, to, from.sourceCodeLocation);
		if (position) {
			state.location = true;
			to.position = position;
		}
	}
}
/**
* Create clean positional information.
*
* @param {State} state
*   Info passed around about the current state.
* @param {Nodes} node
*   hast node.
* @param {Token.ElementLocation} location
*   p5 location info.
* @returns {Position | undefined}
*   Position, or nothing.
*/
function createLocation(state, node, location) {
	const result = position(location);
	if (node.type === "element") {
		const tail = node.children[node.children.length - 1];
		if (result && !location.endTag && tail && tail.position && tail.position.end) result.end = Object.assign({}, tail.position.end);
		if (state.verbose) {
			/** @type {Record<string, Position | undefined>} */
			const properties = {};
			/** @type {string} */
			let key;
			if (location.attrs) {
				for (key in location.attrs) if (own$2.call(location.attrs, key)) properties[find(state.schema, key).property] = position(location.attrs[key]);
			}
			location.startTag;
			const opening = position(location.startTag);
			const closing = location.endTag ? position(location.endTag) : void 0;
			/** @type {ElementData['position']} */
			const data = { opening };
			if (closing) data.closing = closing;
			data.properties = properties;
			node.data = { position: data };
		}
	}
	return result;
}
/**
* Turn a p5 location into a position.
*
* @param {Token.Location} loc
*   Location.
* @returns {Position | undefined}
*   Position or nothing.
*/
function position(loc) {
	const start = point$1({
		line: loc.startLine,
		column: loc.startCol,
		offset: loc.startOffset
	});
	const end = point$1({
		line: loc.endLine,
		column: loc.endCol,
		offset: loc.endOffset
	});
	return start || end ? {
		start,
		end
	} : void 0;
}
/**
* Filter out invalid points.
*
* @param {Point} point
*   Point with potentially `undefined` values.
* @returns {Point | undefined}
*   Point or nothing.
*/
function point$1(point) {
	return point.line && point.column ? point : void 0;
}
//#endregion
//#region node_modules/.pnpm/zwitch@2.0.4/node_modules/zwitch/index.js
/**
* @callback Handler
*   Handle a value, with a certain ID field set to a certain value.
*   The ID field is passed to `zwitch`, and it’s value is this function’s
*   place on the `handlers` record.
* @param {...any} parameters
*   Arbitrary parameters passed to the zwitch.
*   The first will be an object with a certain ID field set to a certain value.
* @returns {any}
*   Anything!
*/
/**
* @callback UnknownHandler
*   Handle values that do have a certain ID field, but it’s set to a value
*   that is not listed in the `handlers` record.
* @param {unknown} value
*   An object with a certain ID field set to an unknown value.
* @param {...any} rest
*   Arbitrary parameters passed to the zwitch.
* @returns {any}
*   Anything!
*/
/**
* @callback InvalidHandler
*   Handle values that do not have a certain ID field.
* @param {unknown} value
*   Any unknown value.
* @param {...any} rest
*   Arbitrary parameters passed to the zwitch.
* @returns {void|null|undefined|never}
*   This should crash or return nothing.
*/
/**
* @template {InvalidHandler} [Invalid=InvalidHandler]
* @template {UnknownHandler} [Unknown=UnknownHandler]
* @template {Record<string, Handler>} [Handlers=Record<string, Handler>]
* @typedef Options
*   Configuration (required).
* @property {Invalid} [invalid]
*   Handler to use for invalid values.
* @property {Unknown} [unknown]
*   Handler to use for unknown values.
* @property {Handlers} [handlers]
*   Handlers to use.
*/
var own$1 = {}.hasOwnProperty;
/**
* Handle values based on a field.
*
* @template {InvalidHandler} [Invalid=InvalidHandler]
* @template {UnknownHandler} [Unknown=UnknownHandler]
* @template {Record<string, Handler>} [Handlers=Record<string, Handler>]
* @param {string} key
*   Field to switch on.
* @param {Options<Invalid, Unknown, Handlers>} [options]
*   Configuration (required).
* @returns {{unknown: Unknown, invalid: Invalid, handlers: Handlers, (...parameters: Parameters<Handlers[keyof Handlers]>): ReturnType<Handlers[keyof Handlers]>, (...parameters: Parameters<Unknown>): ReturnType<Unknown>}}
*/
function zwitch(key, options) {
	const settings = options || {};
	/**
	* Handle one value.
	*
	* Based on the bound `key`, a respective handler will be called.
	* If `value` is not an object, or doesn’t have a `key` property, the special
	* “invalid” handler will be called.
	* If `value` has an unknown `key`, the special “unknown” handler will be
	* called.
	*
	* All arguments, and the context object, are passed through to the handler,
	* and it’s result is returned.
	*
	* @this {unknown}
	*   Any context object.
	* @param {unknown} [value]
	*   Any value.
	* @param {...unknown} parameters
	*   Arbitrary parameters passed to the zwitch.
	* @property {Handler} invalid
	*   Handle for values that do not have a certain ID field.
	* @property {Handler} unknown
	*   Handle values that do have a certain ID field, but it’s set to a value
	*   that is not listed in the `handlers` record.
	* @property {Handlers} handlers
	*   Record of handlers.
	* @returns {unknown}
	*   Anything.
	*/
	function one(value, ...parameters) {
		/** @type {Handler|undefined} */
		let fn = one.invalid;
		const handlers = one.handlers;
		if (value && own$1.call(value, key)) {
			const id = String(value[key]);
			fn = own$1.call(handlers, id) ? handlers[id] : one.unknown;
		}
		if (fn) return fn.call(this, value, ...parameters);
	}
	one.handlers = settings.handlers || {};
	one.invalid = settings.invalid;
	one.unknown = settings.unknown;
	return one;
}
//#endregion
//#region node_modules/.pnpm/hast-util-to-parse5@8.0.1/node_modules/hast-util-to-parse5/lib/index.js
/**
* @import {Comment, Doctype, Element, Nodes, RootContent, Root, Text} from 'hast'
* @import {DefaultTreeAdapterMap, Token} from 'parse5'
* @import {Schema} from 'property-information'
*/
/**
* @typedef {DefaultTreeAdapterMap['document']} Parse5Document
* @typedef {DefaultTreeAdapterMap['documentFragment']} Parse5Fragment
* @typedef {DefaultTreeAdapterMap['element']} Parse5Element
* @typedef {DefaultTreeAdapterMap['node']} Parse5Nodes
* @typedef {DefaultTreeAdapterMap['documentType']} Parse5Doctype
* @typedef {DefaultTreeAdapterMap['commentNode']} Parse5Comment
* @typedef {DefaultTreeAdapterMap['textNode']} Parse5Text
* @typedef {DefaultTreeAdapterMap['parentNode']} Parse5Parent
* @typedef {Token.Attribute} Parse5Attribute
*
* @typedef Options
*   Configuration.
* @property {Space | null | undefined} [space='html']
*   Which space the document is in (default: `'html'`).
*
*   When an `<svg>` element is found in the HTML space, this package already
*   automatically switches to and from the SVG space when entering and exiting
*   it.
*
* @typedef {Exclude<Parse5Nodes, Parse5Document | Parse5Fragment>} Parse5Content
*
* @typedef {'html' | 'svg'} Space
*/
/** @type {Options} */
var emptyOptions = {};
var own = {}.hasOwnProperty;
var one = zwitch("type", { handlers: {
	root: root$1,
	element: element$1,
	text: text$1,
	comment: comment$1,
	doctype: doctype$1
} });
/**
* Transform a hast tree to a `parse5` AST.
*
* @param {Nodes} tree
*   Tree to transform.
* @param {Options | null | undefined} [options]
*   Configuration (optional).
* @returns {Parse5Nodes}
*   `parse5` node.
*/
function toParse5(tree, options) {
	const space = (options || emptyOptions).space;
	return one(tree, space === "svg" ? svg : html);
}
/**
* @param {Root} node
*   Node (hast) to transform.
* @param {Schema} schema
*   Current schema.
* @returns {Parse5Document}
*   Parse5 node.
*/
function root$1(node, schema) {
	/** @type {Parse5Document} */
	const result = {
		nodeName: "#document",
		mode: (node.data || {}).quirksMode ? "quirks" : "no-quirks",
		childNodes: []
	};
	result.childNodes = all$1(node.children, result, schema);
	patch(node, result);
	return result;
}
/**
* @param {Root} node
*   Node (hast) to transform.
* @param {Schema} schema
*   Current schema.
* @returns {Parse5Fragment}
*   Parse5 node.
*/
function fragment(node, schema) {
	/** @type {Parse5Fragment} */
	const result = {
		nodeName: "#document-fragment",
		childNodes: []
	};
	result.childNodes = all$1(node.children, result, schema);
	patch(node, result);
	return result;
}
/**
* @param {Doctype} node
*   Node (hast) to transform.
* @returns {Parse5Doctype}
*   Parse5 node.
*/
function doctype$1(node) {
	/** @type {Parse5Doctype} */
	const result = {
		nodeName: "#documentType",
		name: "html",
		publicId: "",
		systemId: "",
		parentNode: null
	};
	patch(node, result);
	return result;
}
/**
* @param {Text} node
*   Node (hast) to transform.
* @returns {Parse5Text}
*   Parse5 node.
*/
function text$1(node) {
	/** @type {Parse5Text} */
	const result = {
		nodeName: "#text",
		value: node.value,
		parentNode: null
	};
	patch(node, result);
	return result;
}
/**
* @param {Comment} node
*   Node (hast) to transform.
* @returns {Parse5Comment}
*   Parse5 node.
*/
function comment$1(node) {
	/** @type {Parse5Comment} */
	const result = {
		nodeName: "#comment",
		data: node.value,
		parentNode: null
	};
	patch(node, result);
	return result;
}
/**
* @param {Element} node
*   Node (hast) to transform.
* @param {Schema} schema
*   Current schema.
* @returns {Parse5Element}
*   Parse5 node.
*/
function element$1(node, schema) {
	const parentSchema = schema;
	let currentSchema = parentSchema;
	if (node.type === "element" && node.tagName.toLowerCase() === "svg" && parentSchema.space === "html") currentSchema = svg;
	/** @type {Array<Parse5Attribute>} */
	const attrs = [];
	/** @type {string} */
	let prop;
	if (node.properties) {
		for (prop in node.properties) if (prop !== "children" && own.call(node.properties, prop)) {
			const result = createProperty(currentSchema, prop, node.properties[prop]);
			if (result) attrs.push(result);
		}
	}
	const space = currentSchema.space;
	/** @type {Parse5Element} */
	const result = {
		nodeName: node.tagName,
		tagName: node.tagName,
		attrs,
		namespaceURI: webNamespaces[space],
		childNodes: [],
		parentNode: null
	};
	result.childNodes = all$1(node.children, result, currentSchema);
	patch(node, result);
	if (node.tagName === "template" && node.content) result.content = fragment(node.content, currentSchema);
	return result;
}
/**
* Handle a property.
*
* @param {Schema} schema
*   Current schema.
* @param {string} prop
*   Key.
* @param {Array<number | string> | boolean | number | string | null | undefined} value
*   hast property value.
* @returns {Parse5Attribute | undefined}
*   Field for runtime, optional.
*/
function createProperty(schema, prop, value) {
	const info = find(schema, prop);
	if (value === false || value === null || value === void 0 || typeof value === "number" && Number.isNaN(value) || !value && info.boolean) return;
	if (Array.isArray(value)) value = info.commaSeparated ? stringify$1(value) : stringify(value);
	/** @type {Parse5Attribute} */
	const attribute = {
		name: info.attribute,
		value: value === true ? "" : String(value)
	};
	if (info.space && info.space !== "html" && info.space !== "svg") {
		const index = attribute.name.indexOf(":");
		if (index < 0) attribute.prefix = "";
		else {
			attribute.name = attribute.name.slice(index + 1);
			attribute.prefix = info.attribute.slice(0, index);
		}
		attribute.namespace = webNamespaces[info.space];
	}
	return attribute;
}
/**
* Transform all hast nodes.
*
* @param {Array<RootContent>} children
*   List of children.
* @param {Parse5Parent} parentNode
*   `parse5` parent node.
* @param {Schema} schema
*   Current schema.
* @returns {Array<Parse5Content>}
*   Transformed children.
*/
function all$1(children, parentNode, schema) {
	let index = -1;
	/** @type {Array<Parse5Content>} */
	const results = [];
	if (children) while (++index < children.length) {
		/** @type {Parse5Content} */
		const child = one(children[index], schema);
		child.parentNode = parentNode;
		results.push(child);
	}
	return results;
}
/**
* Add position info from `from` to `to`.
*
* @param {Nodes} from
*   hast node.
* @param {Parse5Nodes} to
*   `parse5` node.
* @returns {undefined}
*   Nothing.
*/
function patch(from, to) {
	const position = from.position;
	if (position && position.start && position.end) {
		position.start.offset;
		position.end.offset;
		to.sourceCodeLocation = {
			startLine: position.start.line,
			startCol: position.start.column,
			startOffset: position.start.offset,
			endLine: position.end.line,
			endCol: position.end.column,
			endOffset: position.end.offset
		};
	}
}
//#endregion
//#region node_modules/.pnpm/html-void-elements@3.0.0/node_modules/html-void-elements/index.js
/**
* List of HTML void tag names.
*
* @type {Array<string>}
*/
var htmlVoidElements = [
	"area",
	"base",
	"basefont",
	"bgsound",
	"br",
	"col",
	"command",
	"embed",
	"frame",
	"hr",
	"image",
	"img",
	"input",
	"keygen",
	"link",
	"meta",
	"param",
	"source",
	"track",
	"wbr"
];
//#endregion
//#region node_modules/.pnpm/parse5@7.0.0/node_modules/parse5/dist/common/unicode.js
var UNDEFINED_CODE_POINTS = /* @__PURE__ */ new Set([
	65534,
	65535,
	131070,
	131071,
	196606,
	196607,
	262142,
	262143,
	327678,
	327679,
	393214,
	393215,
	458750,
	458751,
	524286,
	524287,
	589822,
	589823,
	655358,
	655359,
	720894,
	720895,
	786430,
	786431,
	851966,
	851967,
	917502,
	917503,
	983038,
	983039,
	1048574,
	1048575,
	1114110,
	1114111
]);
var CODE_POINTS;
(function(CODE_POINTS) {
	CODE_POINTS[CODE_POINTS["EOF"] = -1] = "EOF";
	CODE_POINTS[CODE_POINTS["NULL"] = 0] = "NULL";
	CODE_POINTS[CODE_POINTS["TABULATION"] = 9] = "TABULATION";
	CODE_POINTS[CODE_POINTS["CARRIAGE_RETURN"] = 13] = "CARRIAGE_RETURN";
	CODE_POINTS[CODE_POINTS["LINE_FEED"] = 10] = "LINE_FEED";
	CODE_POINTS[CODE_POINTS["FORM_FEED"] = 12] = "FORM_FEED";
	CODE_POINTS[CODE_POINTS["SPACE"] = 32] = "SPACE";
	CODE_POINTS[CODE_POINTS["EXCLAMATION_MARK"] = 33] = "EXCLAMATION_MARK";
	CODE_POINTS[CODE_POINTS["QUOTATION_MARK"] = 34] = "QUOTATION_MARK";
	CODE_POINTS[CODE_POINTS["NUMBER_SIGN"] = 35] = "NUMBER_SIGN";
	CODE_POINTS[CODE_POINTS["AMPERSAND"] = 38] = "AMPERSAND";
	CODE_POINTS[CODE_POINTS["APOSTROPHE"] = 39] = "APOSTROPHE";
	CODE_POINTS[CODE_POINTS["HYPHEN_MINUS"] = 45] = "HYPHEN_MINUS";
	CODE_POINTS[CODE_POINTS["SOLIDUS"] = 47] = "SOLIDUS";
	CODE_POINTS[CODE_POINTS["DIGIT_0"] = 48] = "DIGIT_0";
	CODE_POINTS[CODE_POINTS["DIGIT_9"] = 57] = "DIGIT_9";
	CODE_POINTS[CODE_POINTS["SEMICOLON"] = 59] = "SEMICOLON";
	CODE_POINTS[CODE_POINTS["LESS_THAN_SIGN"] = 60] = "LESS_THAN_SIGN";
	CODE_POINTS[CODE_POINTS["EQUALS_SIGN"] = 61] = "EQUALS_SIGN";
	CODE_POINTS[CODE_POINTS["GREATER_THAN_SIGN"] = 62] = "GREATER_THAN_SIGN";
	CODE_POINTS[CODE_POINTS["QUESTION_MARK"] = 63] = "QUESTION_MARK";
	CODE_POINTS[CODE_POINTS["LATIN_CAPITAL_A"] = 65] = "LATIN_CAPITAL_A";
	CODE_POINTS[CODE_POINTS["LATIN_CAPITAL_F"] = 70] = "LATIN_CAPITAL_F";
	CODE_POINTS[CODE_POINTS["LATIN_CAPITAL_X"] = 88] = "LATIN_CAPITAL_X";
	CODE_POINTS[CODE_POINTS["LATIN_CAPITAL_Z"] = 90] = "LATIN_CAPITAL_Z";
	CODE_POINTS[CODE_POINTS["RIGHT_SQUARE_BRACKET"] = 93] = "RIGHT_SQUARE_BRACKET";
	CODE_POINTS[CODE_POINTS["GRAVE_ACCENT"] = 96] = "GRAVE_ACCENT";
	CODE_POINTS[CODE_POINTS["LATIN_SMALL_A"] = 97] = "LATIN_SMALL_A";
	CODE_POINTS[CODE_POINTS["LATIN_SMALL_F"] = 102] = "LATIN_SMALL_F";
	CODE_POINTS[CODE_POINTS["LATIN_SMALL_X"] = 120] = "LATIN_SMALL_X";
	CODE_POINTS[CODE_POINTS["LATIN_SMALL_Z"] = 122] = "LATIN_SMALL_Z";
	CODE_POINTS[CODE_POINTS["REPLACEMENT_CHARACTER"] = 65533] = "REPLACEMENT_CHARACTER";
})(CODE_POINTS || (CODE_POINTS = {}));
var SEQUENCES = {
	DASH_DASH: "--",
	CDATA_START: "[CDATA[",
	DOCTYPE: "doctype",
	SCRIPT: "script",
	PUBLIC: "public",
	SYSTEM: "system"
};
function isSurrogate(cp) {
	return cp >= 55296 && cp <= 57343;
}
function isSurrogatePair(cp) {
	return cp >= 56320 && cp <= 57343;
}
function getSurrogatePairCodePoint(cp1, cp2) {
	return (cp1 - 55296) * 1024 + 9216 + cp2;
}
function isControlCodePoint(cp) {
	return cp !== 32 && cp !== 10 && cp !== 13 && cp !== 9 && cp !== 12 && cp >= 1 && cp <= 31 || cp >= 127 && cp <= 159;
}
function isUndefinedCodePoint(cp) {
	return cp >= 64976 && cp <= 65007 || UNDEFINED_CODE_POINTS.has(cp);
}
//#endregion
//#region node_modules/.pnpm/parse5@7.0.0/node_modules/parse5/dist/common/error-codes.js
var ERR;
(function(ERR) {
	ERR["controlCharacterInInputStream"] = "control-character-in-input-stream";
	ERR["noncharacterInInputStream"] = "noncharacter-in-input-stream";
	ERR["surrogateInInputStream"] = "surrogate-in-input-stream";
	ERR["nonVoidHtmlElementStartTagWithTrailingSolidus"] = "non-void-html-element-start-tag-with-trailing-solidus";
	ERR["endTagWithAttributes"] = "end-tag-with-attributes";
	ERR["endTagWithTrailingSolidus"] = "end-tag-with-trailing-solidus";
	ERR["unexpectedSolidusInTag"] = "unexpected-solidus-in-tag";
	ERR["unexpectedNullCharacter"] = "unexpected-null-character";
	ERR["unexpectedQuestionMarkInsteadOfTagName"] = "unexpected-question-mark-instead-of-tag-name";
	ERR["invalidFirstCharacterOfTagName"] = "invalid-first-character-of-tag-name";
	ERR["unexpectedEqualsSignBeforeAttributeName"] = "unexpected-equals-sign-before-attribute-name";
	ERR["missingEndTagName"] = "missing-end-tag-name";
	ERR["unexpectedCharacterInAttributeName"] = "unexpected-character-in-attribute-name";
	ERR["unknownNamedCharacterReference"] = "unknown-named-character-reference";
	ERR["missingSemicolonAfterCharacterReference"] = "missing-semicolon-after-character-reference";
	ERR["unexpectedCharacterAfterDoctypeSystemIdentifier"] = "unexpected-character-after-doctype-system-identifier";
	ERR["unexpectedCharacterInUnquotedAttributeValue"] = "unexpected-character-in-unquoted-attribute-value";
	ERR["eofBeforeTagName"] = "eof-before-tag-name";
	ERR["eofInTag"] = "eof-in-tag";
	ERR["missingAttributeValue"] = "missing-attribute-value";
	ERR["missingWhitespaceBetweenAttributes"] = "missing-whitespace-between-attributes";
	ERR["missingWhitespaceAfterDoctypePublicKeyword"] = "missing-whitespace-after-doctype-public-keyword";
	ERR["missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers"] = "missing-whitespace-between-doctype-public-and-system-identifiers";
	ERR["missingWhitespaceAfterDoctypeSystemKeyword"] = "missing-whitespace-after-doctype-system-keyword";
	ERR["missingQuoteBeforeDoctypePublicIdentifier"] = "missing-quote-before-doctype-public-identifier";
	ERR["missingQuoteBeforeDoctypeSystemIdentifier"] = "missing-quote-before-doctype-system-identifier";
	ERR["missingDoctypePublicIdentifier"] = "missing-doctype-public-identifier";
	ERR["missingDoctypeSystemIdentifier"] = "missing-doctype-system-identifier";
	ERR["abruptDoctypePublicIdentifier"] = "abrupt-doctype-public-identifier";
	ERR["abruptDoctypeSystemIdentifier"] = "abrupt-doctype-system-identifier";
	ERR["cdataInHtmlContent"] = "cdata-in-html-content";
	ERR["incorrectlyOpenedComment"] = "incorrectly-opened-comment";
	ERR["eofInScriptHtmlCommentLikeText"] = "eof-in-script-html-comment-like-text";
	ERR["eofInDoctype"] = "eof-in-doctype";
	ERR["nestedComment"] = "nested-comment";
	ERR["abruptClosingOfEmptyComment"] = "abrupt-closing-of-empty-comment";
	ERR["eofInComment"] = "eof-in-comment";
	ERR["incorrectlyClosedComment"] = "incorrectly-closed-comment";
	ERR["eofInCdata"] = "eof-in-cdata";
	ERR["absenceOfDigitsInNumericCharacterReference"] = "absence-of-digits-in-numeric-character-reference";
	ERR["nullCharacterReference"] = "null-character-reference";
	ERR["surrogateCharacterReference"] = "surrogate-character-reference";
	ERR["characterReferenceOutsideUnicodeRange"] = "character-reference-outside-unicode-range";
	ERR["controlCharacterReference"] = "control-character-reference";
	ERR["noncharacterCharacterReference"] = "noncharacter-character-reference";
	ERR["missingWhitespaceBeforeDoctypeName"] = "missing-whitespace-before-doctype-name";
	ERR["missingDoctypeName"] = "missing-doctype-name";
	ERR["invalidCharacterSequenceAfterDoctypeName"] = "invalid-character-sequence-after-doctype-name";
	ERR["duplicateAttribute"] = "duplicate-attribute";
	ERR["nonConformingDoctype"] = "non-conforming-doctype";
	ERR["missingDoctype"] = "missing-doctype";
	ERR["misplacedDoctype"] = "misplaced-doctype";
	ERR["endTagWithoutMatchingOpenElement"] = "end-tag-without-matching-open-element";
	ERR["closingOfElementWithOpenChildElements"] = "closing-of-element-with-open-child-elements";
	ERR["disallowedContentInNoscriptInHead"] = "disallowed-content-in-noscript-in-head";
	ERR["openElementsLeftAfterEof"] = "open-elements-left-after-eof";
	ERR["abandonedHeadElementChild"] = "abandoned-head-element-child";
	ERR["misplacedStartTagForHeadElement"] = "misplaced-start-tag-for-head-element";
	ERR["nestedNoscriptInHead"] = "nested-noscript-in-head";
	ERR["eofInElementThatCanContainOnlyText"] = "eof-in-element-that-can-contain-only-text";
})(ERR || (ERR = {}));
//#endregion
//#region node_modules/.pnpm/parse5@7.0.0/node_modules/parse5/dist/tokenizer/preprocessor.js
var DEFAULT_BUFFER_WATERLINE = 65536;
var Preprocessor = class {
	constructor(handler) {
		this.handler = handler;
		this.html = "";
		this.pos = -1;
		this.lastGapPos = -2;
		this.gapStack = [];
		this.skipNextNewLine = false;
		this.lastChunkWritten = false;
		this.endOfChunkHit = false;
		this.bufferWaterline = DEFAULT_BUFFER_WATERLINE;
		this.isEol = false;
		this.lineStartPos = 0;
		this.droppedBufferSize = 0;
		this.line = 1;
		this.lastErrOffset = -1;
	}
	/** The column on the current line. If we just saw a gap (eg. a surrogate pair), return the index before. */
	get col() {
		return this.pos - this.lineStartPos + Number(this.lastGapPos !== this.pos);
	}
	get offset() {
		return this.droppedBufferSize + this.pos;
	}
	getError(code) {
		const { line, col, offset } = this;
		return {
			code,
			startLine: line,
			endLine: line,
			startCol: col,
			endCol: col,
			startOffset: offset,
			endOffset: offset
		};
	}
	_err(code) {
		if (this.handler.onParseError && this.lastErrOffset !== this.offset) {
			this.lastErrOffset = this.offset;
			this.handler.onParseError(this.getError(code));
		}
	}
	_addGap() {
		this.gapStack.push(this.lastGapPos);
		this.lastGapPos = this.pos;
	}
	_processSurrogate(cp) {
		if (this.pos !== this.html.length - 1) {
			const nextCp = this.html.charCodeAt(this.pos + 1);
			if (isSurrogatePair(nextCp)) {
				this.pos++;
				this._addGap();
				return getSurrogatePairCodePoint(cp, nextCp);
			}
		} else if (!this.lastChunkWritten) {
			this.endOfChunkHit = true;
			return CODE_POINTS.EOF;
		}
		this._err(ERR.surrogateInInputStream);
		return cp;
	}
	willDropParsedChunk() {
		return this.pos > this.bufferWaterline;
	}
	dropParsedChunk() {
		if (this.willDropParsedChunk()) {
			this.html = this.html.substring(this.pos);
			this.lineStartPos -= this.pos;
			this.droppedBufferSize += this.pos;
			this.pos = 0;
			this.lastGapPos = -2;
			this.gapStack.length = 0;
		}
	}
	write(chunk, isLastChunk) {
		if (this.html.length > 0) this.html += chunk;
		else this.html = chunk;
		this.endOfChunkHit = false;
		this.lastChunkWritten = isLastChunk;
	}
	insertHtmlAtCurrentPos(chunk) {
		this.html = this.html.substring(0, this.pos + 1) + chunk + this.html.substring(this.pos + 1);
		this.endOfChunkHit = false;
	}
	startsWith(pattern, caseSensitive) {
		if (this.pos + pattern.length > this.html.length) {
			this.endOfChunkHit = !this.lastChunkWritten;
			return false;
		}
		if (caseSensitive) return this.html.startsWith(pattern, this.pos);
		for (let i = 0; i < pattern.length; i++) if ((this.html.charCodeAt(this.pos + i) | 32) !== pattern.charCodeAt(i)) return false;
		return true;
	}
	peek(offset) {
		const pos = this.pos + offset;
		if (pos >= this.html.length) {
			this.endOfChunkHit = !this.lastChunkWritten;
			return CODE_POINTS.EOF;
		}
		return this.html.charCodeAt(pos);
	}
	advance() {
		this.pos++;
		if (this.isEol) {
			this.isEol = false;
			this.line++;
			this.lineStartPos = this.pos;
		}
		if (this.pos >= this.html.length) {
			this.endOfChunkHit = !this.lastChunkWritten;
			return CODE_POINTS.EOF;
		}
		let cp = this.html.charCodeAt(this.pos);
		if (cp === CODE_POINTS.CARRIAGE_RETURN) {
			this.isEol = true;
			this.skipNextNewLine = true;
			return CODE_POINTS.LINE_FEED;
		}
		if (cp === CODE_POINTS.LINE_FEED) {
			this.isEol = true;
			if (this.skipNextNewLine) {
				this.line--;
				this.skipNextNewLine = false;
				this._addGap();
				return this.advance();
			}
		}
		this.skipNextNewLine = false;
		if (isSurrogate(cp)) cp = this._processSurrogate(cp);
		if (!(this.handler.onParseError === null || cp > 31 && cp < 127 || cp === CODE_POINTS.LINE_FEED || cp === CODE_POINTS.CARRIAGE_RETURN || cp > 159 && cp < 64976)) this._checkForProblematicCharacters(cp);
		return cp;
	}
	_checkForProblematicCharacters(cp) {
		if (isControlCodePoint(cp)) this._err(ERR.controlCharacterInInputStream);
		else if (isUndefinedCodePoint(cp)) this._err(ERR.noncharacterInInputStream);
	}
	retreat(count) {
		this.pos -= count;
		while (this.pos < this.lastGapPos) {
			this.lastGapPos = this.gapStack.pop();
			this.pos--;
		}
		this.isEol = false;
	}
};
//#endregion
//#region node_modules/.pnpm/parse5@7.0.0/node_modules/parse5/dist/common/token.js
var TokenType;
(function(TokenType) {
	TokenType[TokenType["CHARACTER"] = 0] = "CHARACTER";
	TokenType[TokenType["NULL_CHARACTER"] = 1] = "NULL_CHARACTER";
	TokenType[TokenType["WHITESPACE_CHARACTER"] = 2] = "WHITESPACE_CHARACTER";
	TokenType[TokenType["START_TAG"] = 3] = "START_TAG";
	TokenType[TokenType["END_TAG"] = 4] = "END_TAG";
	TokenType[TokenType["COMMENT"] = 5] = "COMMENT";
	TokenType[TokenType["DOCTYPE"] = 6] = "DOCTYPE";
	TokenType[TokenType["EOF"] = 7] = "EOF";
	TokenType[TokenType["HIBERNATION"] = 8] = "HIBERNATION";
})(TokenType || (TokenType = {}));
function getTokenAttr(token, attrName) {
	for (let i = token.attrs.length - 1; i >= 0; i--) if (token.attrs[i].name === attrName) return token.attrs[i].value;
	return null;
}
//#endregion
//#region node_modules/.pnpm/entities@4.3.0/node_modules/entities/lib/esm/generated/decode-data-html.js
var decode_data_html_default = new Uint16Array([
	7489,
	60,
	213,
	305,
	650,
	1181,
	1403,
	1488,
	1653,
	1758,
	1954,
	2006,
	2063,
	2634,
	2705,
	3489,
	3693,
	3849,
	3878,
	4298,
	4648,
	4833,
	5141,
	5277,
	5315,
	5343,
	5413,
	0,
	0,
	0,
	0,
	0,
	0,
	5483,
	5837,
	6541,
	7186,
	7645,
	8062,
	8288,
	8624,
	8845,
	9152,
	9211,
	9282,
	10276,
	10514,
	11528,
	11848,
	12238,
	12310,
	12986,
	13881,
	14252,
	14590,
	14888,
	14961,
	15072,
	15150,
	2048,
	69,
	77,
	97,
	98,
	99,
	102,
	103,
	108,
	109,
	110,
	111,
	112,
	114,
	115,
	116,
	117,
	92,
	98,
	102,
	109,
	115,
	127,
	132,
	139,
	144,
	149,
	152,
	166,
	179,
	185,
	200,
	207,
	108,
	105,
	103,
	32827,
	198,
	16582,
	80,
	32827,
	38,
	16422,
	99,
	117,
	116,
	101,
	32827,
	193,
	16577,
	114,
	101,
	118,
	101,
	59,
	16642,
	256,
	105,
	121,
	120,
	125,
	114,
	99,
	32827,
	194,
	16578,
	59,
	17424,
	114,
	59,
	49152,
	55349,
	56580,
	114,
	97,
	118,
	101,
	32827,
	192,
	16576,
	112,
	104,
	97,
	59,
	17297,
	97,
	99,
	114,
	59,
	16640,
	100,
	59,
	27219,
	256,
	103,
	112,
	157,
	161,
	111,
	110,
	59,
	16644,
	102,
	59,
	49152,
	55349,
	56632,
	112,
	108,
	121,
	70,
	117,
	110,
	99,
	116,
	105,
	111,
	110,
	59,
	24673,
	105,
	110,
	103,
	32827,
	197,
	16581,
	256,
	99,
	115,
	190,
	195,
	114,
	59,
	49152,
	55349,
	56476,
	105,
	103,
	110,
	59,
	25172,
	105,
	108,
	100,
	101,
	32827,
	195,
	16579,
	109,
	108,
	32827,
	196,
	16580,
	1024,
	97,
	99,
	101,
	102,
	111,
	114,
	115,
	117,
	229,
	251,
	254,
	279,
	284,
	290,
	295,
	298,
	256,
	99,
	114,
	234,
	242,
	107,
	115,
	108,
	97,
	115,
	104,
	59,
	25110,
	374,
	246,
	248,
	59,
	27367,
	101,
	100,
	59,
	25350,
	121,
	59,
	17425,
	384,
	99,
	114,
	116,
	261,
	267,
	276,
	97,
	117,
	115,
	101,
	59,
	25141,
	110,
	111,
	117,
	108,
	108,
	105,
	115,
	59,
	24876,
	97,
	59,
	17298,
	114,
	59,
	49152,
	55349,
	56581,
	112,
	102,
	59,
	49152,
	55349,
	56633,
	101,
	118,
	101,
	59,
	17112,
	99,
	242,
	275,
	109,
	112,
	101,
	113,
	59,
	25166,
	1792,
	72,
	79,
	97,
	99,
	100,
	101,
	102,
	104,
	105,
	108,
	111,
	114,
	115,
	117,
	333,
	337,
	342,
	384,
	414,
	418,
	437,
	439,
	442,
	476,
	533,
	627,
	632,
	638,
	99,
	121,
	59,
	17447,
	80,
	89,
	32827,
	169,
	16553,
	384,
	99,
	112,
	121,
	349,
	354,
	378,
	117,
	116,
	101,
	59,
	16646,
	256,
	59,
	105,
	359,
	360,
	25298,
	116,
	97,
	108,
	68,
	105,
	102,
	102,
	101,
	114,
	101,
	110,
	116,
	105,
	97,
	108,
	68,
	59,
	24901,
	108,
	101,
	121,
	115,
	59,
	24877,
	512,
	97,
	101,
	105,
	111,
	393,
	398,
	404,
	408,
	114,
	111,
	110,
	59,
	16652,
	100,
	105,
	108,
	32827,
	199,
	16583,
	114,
	99,
	59,
	16648,
	110,
	105,
	110,
	116,
	59,
	25136,
	111,
	116,
	59,
	16650,
	256,
	100,
	110,
	423,
	429,
	105,
	108,
	108,
	97,
	59,
	16568,
	116,
	101,
	114,
	68,
	111,
	116,
	59,
	16567,
	242,
	383,
	105,
	59,
	17319,
	114,
	99,
	108,
	101,
	512,
	68,
	77,
	80,
	84,
	455,
	459,
	465,
	470,
	111,
	116,
	59,
	25241,
	105,
	110,
	117,
	115,
	59,
	25238,
	108,
	117,
	115,
	59,
	25237,
	105,
	109,
	101,
	115,
	59,
	25239,
	111,
	256,
	99,
	115,
	482,
	504,
	107,
	119,
	105,
	115,
	101,
	67,
	111,
	110,
	116,
	111,
	117,
	114,
	73,
	110,
	116,
	101,
	103,
	114,
	97,
	108,
	59,
	25138,
	101,
	67,
	117,
	114,
	108,
	121,
	256,
	68,
	81,
	515,
	527,
	111,
	117,
	98,
	108,
	101,
	81,
	117,
	111,
	116,
	101,
	59,
	24605,
	117,
	111,
	116,
	101,
	59,
	24601,
	512,
	108,
	110,
	112,
	117,
	542,
	552,
	583,
	597,
	111,
	110,
	256,
	59,
	101,
	549,
	550,
	25143,
	59,
	27252,
	384,
	103,
	105,
	116,
	559,
	566,
	570,
	114,
	117,
	101,
	110,
	116,
	59,
	25185,
	110,
	116,
	59,
	25135,
	111,
	117,
	114,
	73,
	110,
	116,
	101,
	103,
	114,
	97,
	108,
	59,
	25134,
	256,
	102,
	114,
	588,
	590,
	59,
	24834,
	111,
	100,
	117,
	99,
	116,
	59,
	25104,
	110,
	116,
	101,
	114,
	67,
	108,
	111,
	99,
	107,
	119,
	105,
	115,
	101,
	67,
	111,
	110,
	116,
	111,
	117,
	114,
	73,
	110,
	116,
	101,
	103,
	114,
	97,
	108,
	59,
	25139,
	111,
	115,
	115,
	59,
	27183,
	99,
	114,
	59,
	49152,
	55349,
	56478,
	112,
	256,
	59,
	67,
	644,
	645,
	25299,
	97,
	112,
	59,
	25165,
	1408,
	68,
	74,
	83,
	90,
	97,
	99,
	101,
	102,
	105,
	111,
	115,
	672,
	684,
	688,
	692,
	696,
	715,
	727,
	737,
	742,
	819,
	1165,
	256,
	59,
	111,
	377,
	677,
	116,
	114,
	97,
	104,
	100,
	59,
	26897,
	99,
	121,
	59,
	17410,
	99,
	121,
	59,
	17413,
	99,
	121,
	59,
	17423,
	384,
	103,
	114,
	115,
	703,
	708,
	711,
	103,
	101,
	114,
	59,
	24609,
	114,
	59,
	24993,
	104,
	118,
	59,
	27364,
	256,
	97,
	121,
	720,
	725,
	114,
	111,
	110,
	59,
	16654,
	59,
	17428,
	108,
	256,
	59,
	116,
	733,
	734,
	25095,
	97,
	59,
	17300,
	114,
	59,
	49152,
	55349,
	56583,
	256,
	97,
	102,
	747,
	807,
	256,
	99,
	109,
	752,
	802,
	114,
	105,
	116,
	105,
	99,
	97,
	108,
	512,
	65,
	68,
	71,
	84,
	768,
	774,
	790,
	796,
	99,
	117,
	116,
	101,
	59,
	16564,
	111,
	372,
	779,
	781,
	59,
	17113,
	98,
	108,
	101,
	65,
	99,
	117,
	116,
	101,
	59,
	17117,
	114,
	97,
	118,
	101,
	59,
	16480,
	105,
	108,
	100,
	101,
	59,
	17116,
	111,
	110,
	100,
	59,
	25284,
	102,
	101,
	114,
	101,
	110,
	116,
	105,
	97,
	108,
	68,
	59,
	24902,
	1136,
	829,
	0,
	0,
	0,
	834,
	852,
	0,
	1029,
	102,
	59,
	49152,
	55349,
	56635,
	384,
	59,
	68,
	69,
	840,
	841,
	845,
	16552,
	111,
	116,
	59,
	24796,
	113,
	117,
	97,
	108,
	59,
	25168,
	98,
	108,
	101,
	768,
	67,
	68,
	76,
	82,
	85,
	86,
	867,
	882,
	898,
	975,
	994,
	1016,
	111,
	110,
	116,
	111,
	117,
	114,
	73,
	110,
	116,
	101,
	103,
	114,
	97,
	236,
	569,
	111,
	628,
	889,
	0,
	0,
	891,
	187,
	841,
	110,
	65,
	114,
	114,
	111,
	119,
	59,
	25043,
	256,
	101,
	111,
	903,
	932,
	102,
	116,
	384,
	65,
	82,
	84,
	912,
	918,
	929,
	114,
	114,
	111,
	119,
	59,
	25040,
	105,
	103,
	104,
	116,
	65,
	114,
	114,
	111,
	119,
	59,
	25044,
	101,
	229,
	714,
	110,
	103,
	256,
	76,
	82,
	939,
	964,
	101,
	102,
	116,
	256,
	65,
	82,
	947,
	953,
	114,
	114,
	111,
	119,
	59,
	26616,
	105,
	103,
	104,
	116,
	65,
	114,
	114,
	111,
	119,
	59,
	26618,
	105,
	103,
	104,
	116,
	65,
	114,
	114,
	111,
	119,
	59,
	26617,
	105,
	103,
	104,
	116,
	256,
	65,
	84,
	984,
	990,
	114,
	114,
	111,
	119,
	59,
	25042,
	101,
	101,
	59,
	25256,
	112,
	577,
	1001,
	0,
	0,
	1007,
	114,
	114,
	111,
	119,
	59,
	25041,
	111,
	119,
	110,
	65,
	114,
	114,
	111,
	119,
	59,
	25045,
	101,
	114,
	116,
	105,
	99,
	97,
	108,
	66,
	97,
	114,
	59,
	25125,
	110,
	768,
	65,
	66,
	76,
	82,
	84,
	97,
	1042,
	1066,
	1072,
	1118,
	1151,
	892,
	114,
	114,
	111,
	119,
	384,
	59,
	66,
	85,
	1053,
	1054,
	1058,
	24979,
	97,
	114,
	59,
	26899,
	112,
	65,
	114,
	114,
	111,
	119,
	59,
	25077,
	114,
	101,
	118,
	101,
	59,
	17169,
	101,
	102,
	116,
	722,
	1082,
	0,
	1094,
	0,
	1104,
	105,
	103,
	104,
	116,
	86,
	101,
	99,
	116,
	111,
	114,
	59,
	26960,
	101,
	101,
	86,
	101,
	99,
	116,
	111,
	114,
	59,
	26974,
	101,
	99,
	116,
	111,
	114,
	256,
	59,
	66,
	1113,
	1114,
	25021,
	97,
	114,
	59,
	26966,
	105,
	103,
	104,
	116,
	468,
	1127,
	0,
	1137,
	101,
	101,
	86,
	101,
	99,
	116,
	111,
	114,
	59,
	26975,
	101,
	99,
	116,
	111,
	114,
	256,
	59,
	66,
	1146,
	1147,
	25025,
	97,
	114,
	59,
	26967,
	101,
	101,
	256,
	59,
	65,
	1158,
	1159,
	25252,
	114,
	114,
	111,
	119,
	59,
	24999,
	256,
	99,
	116,
	1170,
	1175,
	114,
	59,
	49152,
	55349,
	56479,
	114,
	111,
	107,
	59,
	16656,
	2048,
	78,
	84,
	97,
	99,
	100,
	102,
	103,
	108,
	109,
	111,
	112,
	113,
	115,
	116,
	117,
	120,
	1213,
	1216,
	1220,
	1227,
	1246,
	1250,
	1255,
	1262,
	1269,
	1313,
	1327,
	1334,
	1362,
	1373,
	1376,
	1381,
	71,
	59,
	16714,
	72,
	32827,
	208,
	16592,
	99,
	117,
	116,
	101,
	32827,
	201,
	16585,
	384,
	97,
	105,
	121,
	1234,
	1239,
	1244,
	114,
	111,
	110,
	59,
	16666,
	114,
	99,
	32827,
	202,
	16586,
	59,
	17453,
	111,
	116,
	59,
	16662,
	114,
	59,
	49152,
	55349,
	56584,
	114,
	97,
	118,
	101,
	32827,
	200,
	16584,
	101,
	109,
	101,
	110,
	116,
	59,
	25096,
	256,
	97,
	112,
	1274,
	1278,
	99,
	114,
	59,
	16658,
	116,
	121,
	595,
	1286,
	0,
	0,
	1298,
	109,
	97,
	108,
	108,
	83,
	113,
	117,
	97,
	114,
	101,
	59,
	26107,
	101,
	114,
	121,
	83,
	109,
	97,
	108,
	108,
	83,
	113,
	117,
	97,
	114,
	101,
	59,
	26027,
	256,
	103,
	112,
	1318,
	1322,
	111,
	110,
	59,
	16664,
	102,
	59,
	49152,
	55349,
	56636,
	115,
	105,
	108,
	111,
	110,
	59,
	17301,
	117,
	256,
	97,
	105,
	1340,
	1353,
	108,
	256,
	59,
	84,
	1346,
	1347,
	27253,
	105,
	108,
	100,
	101,
	59,
	25154,
	108,
	105,
	98,
	114,
	105,
	117,
	109,
	59,
	25036,
	256,
	99,
	105,
	1367,
	1370,
	114,
	59,
	24880,
	109,
	59,
	27251,
	97,
	59,
	17303,
	109,
	108,
	32827,
	203,
	16587,
	256,
	105,
	112,
	1386,
	1391,
	115,
	116,
	115,
	59,
	25091,
	111,
	110,
	101,
	110,
	116,
	105,
	97,
	108,
	69,
	59,
	24903,
	640,
	99,
	102,
	105,
	111,
	115,
	1413,
	1416,
	1421,
	1458,
	1484,
	121,
	59,
	17444,
	114,
	59,
	49152,
	55349,
	56585,
	108,
	108,
	101,
	100,
	595,
	1431,
	0,
	0,
	1443,
	109,
	97,
	108,
	108,
	83,
	113,
	117,
	97,
	114,
	101,
	59,
	26108,
	101,
	114,
	121,
	83,
	109,
	97,
	108,
	108,
	83,
	113,
	117,
	97,
	114,
	101,
	59,
	26026,
	880,
	1466,
	0,
	1471,
	0,
	0,
	1476,
	102,
	59,
	49152,
	55349,
	56637,
	65,
	108,
	108,
	59,
	25088,
	114,
	105,
	101,
	114,
	116,
	114,
	102,
	59,
	24881,
	99,
	242,
	1483,
	1536,
	74,
	84,
	97,
	98,
	99,
	100,
	102,
	103,
	111,
	114,
	115,
	116,
	1512,
	1516,
	1519,
	1530,
	1536,
	1554,
	1558,
	1563,
	1565,
	1571,
	1644,
	1650,
	99,
	121,
	59,
	17411,
	32827,
	62,
	16446,
	109,
	109,
	97,
	256,
	59,
	100,
	1527,
	1528,
	17299,
	59,
	17372,
	114,
	101,
	118,
	101,
	59,
	16670,
	384,
	101,
	105,
	121,
	1543,
	1548,
	1552,
	100,
	105,
	108,
	59,
	16674,
	114,
	99,
	59,
	16668,
	59,
	17427,
	111,
	116,
	59,
	16672,
	114,
	59,
	49152,
	55349,
	56586,
	59,
	25305,
	112,
	102,
	59,
	49152,
	55349,
	56638,
	101,
	97,
	116,
	101,
	114,
	768,
	69,
	70,
	71,
	76,
	83,
	84,
	1589,
	1604,
	1614,
	1622,
	1627,
	1638,
	113,
	117,
	97,
	108,
	256,
	59,
	76,
	1598,
	1599,
	25189,
	101,
	115,
	115,
	59,
	25307,
	117,
	108,
	108,
	69,
	113,
	117,
	97,
	108,
	59,
	25191,
	114,
	101,
	97,
	116,
	101,
	114,
	59,
	27298,
	101,
	115,
	115,
	59,
	25207,
	108,
	97,
	110,
	116,
	69,
	113,
	117,
	97,
	108,
	59,
	27262,
	105,
	108,
	100,
	101,
	59,
	25203,
	99,
	114,
	59,
	49152,
	55349,
	56482,
	59,
	25195,
	1024,
	65,
	97,
	99,
	102,
	105,
	111,
	115,
	117,
	1669,
	1675,
	1686,
	1691,
	1694,
	1706,
	1726,
	1738,
	82,
	68,
	99,
	121,
	59,
	17450,
	256,
	99,
	116,
	1680,
	1684,
	101,
	107,
	59,
	17095,
	59,
	16478,
	105,
	114,
	99,
	59,
	16676,
	114,
	59,
	24844,
	108,
	98,
	101,
	114,
	116,
	83,
	112,
	97,
	99,
	101,
	59,
	24843,
	496,
	1711,
	0,
	1714,
	102,
	59,
	24845,
	105,
	122,
	111,
	110,
	116,
	97,
	108,
	76,
	105,
	110,
	101,
	59,
	25856,
	256,
	99,
	116,
	1731,
	1733,
	242,
	1705,
	114,
	111,
	107,
	59,
	16678,
	109,
	112,
	324,
	1744,
	1752,
	111,
	119,
	110,
	72,
	117,
	109,
	240,
	303,
	113,
	117,
	97,
	108,
	59,
	25167,
	1792,
	69,
	74,
	79,
	97,
	99,
	100,
	102,
	103,
	109,
	110,
	111,
	115,
	116,
	117,
	1786,
	1790,
	1795,
	1799,
	1806,
	1818,
	1822,
	1825,
	1832,
	1860,
	1912,
	1931,
	1935,
	1941,
	99,
	121,
	59,
	17429,
	108,
	105,
	103,
	59,
	16690,
	99,
	121,
	59,
	17409,
	99,
	117,
	116,
	101,
	32827,
	205,
	16589,
	256,
	105,
	121,
	1811,
	1816,
	114,
	99,
	32827,
	206,
	16590,
	59,
	17432,
	111,
	116,
	59,
	16688,
	114,
	59,
	24849,
	114,
	97,
	118,
	101,
	32827,
	204,
	16588,
	384,
	59,
	97,
	112,
	1824,
	1839,
	1855,
	256,
	99,
	103,
	1844,
	1847,
	114,
	59,
	16682,
	105,
	110,
	97,
	114,
	121,
	73,
	59,
	24904,
	108,
	105,
	101,
	243,
	989,
	500,
	1865,
	0,
	1890,
	256,
	59,
	101,
	1869,
	1870,
	25132,
	256,
	103,
	114,
	1875,
	1880,
	114,
	97,
	108,
	59,
	25131,
	115,
	101,
	99,
	116,
	105,
	111,
	110,
	59,
	25282,
	105,
	115,
	105,
	98,
	108,
	101,
	256,
	67,
	84,
	1900,
	1906,
	111,
	109,
	109,
	97,
	59,
	24675,
	105,
	109,
	101,
	115,
	59,
	24674,
	384,
	103,
	112,
	116,
	1919,
	1923,
	1928,
	111,
	110,
	59,
	16686,
	102,
	59,
	49152,
	55349,
	56640,
	97,
	59,
	17305,
	99,
	114,
	59,
	24848,
	105,
	108,
	100,
	101,
	59,
	16680,
	491,
	1946,
	0,
	1950,
	99,
	121,
	59,
	17414,
	108,
	32827,
	207,
	16591,
	640,
	99,
	102,
	111,
	115,
	117,
	1964,
	1975,
	1980,
	1986,
	2e3,
	256,
	105,
	121,
	1969,
	1973,
	114,
	99,
	59,
	16692,
	59,
	17433,
	114,
	59,
	49152,
	55349,
	56589,
	112,
	102,
	59,
	49152,
	55349,
	56641,
	483,
	1991,
	0,
	1996,
	114,
	59,
	49152,
	55349,
	56485,
	114,
	99,
	121,
	59,
	17416,
	107,
	99,
	121,
	59,
	17412,
	896,
	72,
	74,
	97,
	99,
	102,
	111,
	115,
	2020,
	2024,
	2028,
	2033,
	2045,
	2050,
	2056,
	99,
	121,
	59,
	17445,
	99,
	121,
	59,
	17420,
	112,
	112,
	97,
	59,
	17306,
	256,
	101,
	121,
	2038,
	2043,
	100,
	105,
	108,
	59,
	16694,
	59,
	17434,
	114,
	59,
	49152,
	55349,
	56590,
	112,
	102,
	59,
	49152,
	55349,
	56642,
	99,
	114,
	59,
	49152,
	55349,
	56486,
	1408,
	74,
	84,
	97,
	99,
	101,
	102,
	108,
	109,
	111,
	115,
	116,
	2085,
	2089,
	2092,
	2128,
	2147,
	2483,
	2488,
	2503,
	2509,
	2615,
	2631,
	99,
	121,
	59,
	17417,
	32827,
	60,
	16444,
	640,
	99,
	109,
	110,
	112,
	114,
	2103,
	2108,
	2113,
	2116,
	2125,
	117,
	116,
	101,
	59,
	16697,
	98,
	100,
	97,
	59,
	17307,
	103,
	59,
	26602,
	108,
	97,
	99,
	101,
	116,
	114,
	102,
	59,
	24850,
	114,
	59,
	24990,
	384,
	97,
	101,
	121,
	2135,
	2140,
	2145,
	114,
	111,
	110,
	59,
	16701,
	100,
	105,
	108,
	59,
	16699,
	59,
	17435,
	256,
	102,
	115,
	2152,
	2416,
	116,
	1280,
	65,
	67,
	68,
	70,
	82,
	84,
	85,
	86,
	97,
	114,
	2174,
	2217,
	2225,
	2272,
	2278,
	2300,
	2351,
	2395,
	912,
	2410,
	256,
	110,
	114,
	2179,
	2191,
	103,
	108,
	101,
	66,
	114,
	97,
	99,
	107,
	101,
	116,
	59,
	26600,
	114,
	111,
	119,
	384,
	59,
	66,
	82,
	2201,
	2202,
	2206,
	24976,
	97,
	114,
	59,
	25060,
	105,
	103,
	104,
	116,
	65,
	114,
	114,
	111,
	119,
	59,
	25030,
	101,
	105,
	108,
	105,
	110,
	103,
	59,
	25352,
	111,
	501,
	2231,
	0,
	2243,
	98,
	108,
	101,
	66,
	114,
	97,
	99,
	107,
	101,
	116,
	59,
	26598,
	110,
	468,
	2248,
	0,
	2258,
	101,
	101,
	86,
	101,
	99,
	116,
	111,
	114,
	59,
	26977,
	101,
	99,
	116,
	111,
	114,
	256,
	59,
	66,
	2267,
	2268,
	25027,
	97,
	114,
	59,
	26969,
	108,
	111,
	111,
	114,
	59,
	25354,
	105,
	103,
	104,
	116,
	256,
	65,
	86,
	2287,
	2293,
	114,
	114,
	111,
	119,
	59,
	24980,
	101,
	99,
	116,
	111,
	114,
	59,
	26958,
	256,
	101,
	114,
	2305,
	2327,
	101,
	384,
	59,
	65,
	86,
	2313,
	2314,
	2320,
	25251,
	114,
	114,
	111,
	119,
	59,
	24996,
	101,
	99,
	116,
	111,
	114,
	59,
	26970,
	105,
	97,
	110,
	103,
	108,
	101,
	384,
	59,
	66,
	69,
	2340,
	2341,
	2345,
	25266,
	97,
	114,
	59,
	27087,
	113,
	117,
	97,
	108,
	59,
	25268,
	112,
	384,
	68,
	84,
	86,
	2359,
	2370,
	2380,
	111,
	119,
	110,
	86,
	101,
	99,
	116,
	111,
	114,
	59,
	26961,
	101,
	101,
	86,
	101,
	99,
	116,
	111,
	114,
	59,
	26976,
	101,
	99,
	116,
	111,
	114,
	256,
	59,
	66,
	2390,
	2391,
	25023,
	97,
	114,
	59,
	26968,
	101,
	99,
	116,
	111,
	114,
	256,
	59,
	66,
	2405,
	2406,
	25020,
	97,
	114,
	59,
	26962,
	105,
	103,
	104,
	116,
	225,
	924,
	115,
	768,
	69,
	70,
	71,
	76,
	83,
	84,
	2430,
	2443,
	2453,
	2461,
	2466,
	2477,
	113,
	117,
	97,
	108,
	71,
	114,
	101,
	97,
	116,
	101,
	114,
	59,
	25306,
	117,
	108,
	108,
	69,
	113,
	117,
	97,
	108,
	59,
	25190,
	114,
	101,
	97,
	116,
	101,
	114,
	59,
	25206,
	101,
	115,
	115,
	59,
	27297,
	108,
	97,
	110,
	116,
	69,
	113,
	117,
	97,
	108,
	59,
	27261,
	105,
	108,
	100,
	101,
	59,
	25202,
	114,
	59,
	49152,
	55349,
	56591,
	256,
	59,
	101,
	2493,
	2494,
	25304,
	102,
	116,
	97,
	114,
	114,
	111,
	119,
	59,
	25050,
	105,
	100,
	111,
	116,
	59,
	16703,
	384,
	110,
	112,
	119,
	2516,
	2582,
	2587,
	103,
	512,
	76,
	82,
	108,
	114,
	2526,
	2551,
	2562,
	2576,
	101,
	102,
	116,
	256,
	65,
	82,
	2534,
	2540,
	114,
	114,
	111,
	119,
	59,
	26613,
	105,
	103,
	104,
	116,
	65,
	114,
	114,
	111,
	119,
	59,
	26615,
	105,
	103,
	104,
	116,
	65,
	114,
	114,
	111,
	119,
	59,
	26614,
	101,
	102,
	116,
	256,
	97,
	114,
	947,
	2570,
	105,
	103,
	104,
	116,
	225,
	959,
	105,
	103,
	104,
	116,
	225,
	970,
	102,
	59,
	49152,
	55349,
	56643,
	101,
	114,
	256,
	76,
	82,
	2594,
	2604,
	101,
	102,
	116,
	65,
	114,
	114,
	111,
	119,
	59,
	24985,
	105,
	103,
	104,
	116,
	65,
	114,
	114,
	111,
	119,
	59,
	24984,
	384,
	99,
	104,
	116,
	2622,
	2624,
	2626,
	242,
	2124,
	59,
	25008,
	114,
	111,
	107,
	59,
	16705,
	59,
	25194,
	1024,
	97,
	99,
	101,
	102,
	105,
	111,
	115,
	117,
	2650,
	2653,
	2656,
	2679,
	2684,
	2693,
	2699,
	2702,
	112,
	59,
	26885,
	121,
	59,
	17436,
	256,
	100,
	108,
	2661,
	2671,
	105,
	117,
	109,
	83,
	112,
	97,
	99,
	101,
	59,
	24671,
	108,
	105,
	110,
	116,
	114,
	102,
	59,
	24883,
	114,
	59,
	49152,
	55349,
	56592,
	110,
	117,
	115,
	80,
	108,
	117,
	115,
	59,
	25107,
	112,
	102,
	59,
	49152,
	55349,
	56644,
	99,
	242,
	2678,
	59,
	17308,
	1152,
	74,
	97,
	99,
	101,
	102,
	111,
	115,
	116,
	117,
	2723,
	2727,
	2733,
	2752,
	2836,
	2841,
	3473,
	3479,
	3486,
	99,
	121,
	59,
	17418,
	99,
	117,
	116,
	101,
	59,
	16707,
	384,
	97,
	101,
	121,
	2740,
	2745,
	2750,
	114,
	111,
	110,
	59,
	16711,
	100,
	105,
	108,
	59,
	16709,
	59,
	17437,
	384,
	103,
	115,
	119,
	2759,
	2800,
	2830,
	97,
	116,
	105,
	118,
	101,
	384,
	77,
	84,
	86,
	2771,
	2783,
	2792,
	101,
	100,
	105,
	117,
	109,
	83,
	112,
	97,
	99,
	101,
	59,
	24587,
	104,
	105,
	256,
	99,
	110,
	2790,
	2776,
	235,
	2777,
	101,
	114,
	121,
	84,
	104,
	105,
	238,
	2777,
	116,
	101,
	100,
	256,
	71,
	76,
	2808,
	2822,
	114,
	101,
	97,
	116,
	101,
	114,
	71,
	114,
	101,
	97,
	116,
	101,
	242,
	1651,
	101,
	115,
	115,
	76,
	101,
	115,
	243,
	2632,
	76,
	105,
	110,
	101,
	59,
	16394,
	114,
	59,
	49152,
	55349,
	56593,
	512,
	66,
	110,
	112,
	116,
	2850,
	2856,
	2871,
	2874,
	114,
	101,
	97,
	107,
	59,
	24672,
	66,
	114,
	101,
	97,
	107,
	105,
	110,
	103,
	83,
	112,
	97,
	99,
	101,
	59,
	16544,
	102,
	59,
	24853,
	1664,
	59,
	67,
	68,
	69,
	71,
	72,
	76,
	78,
	80,
	82,
	83,
	84,
	86,
	2901,
	2902,
	2922,
	2940,
	2977,
	3051,
	3076,
	3166,
	3204,
	3238,
	3288,
	3425,
	3461,
	27372,
	256,
	111,
	117,
	2907,
	2916,
	110,
	103,
	114,
	117,
	101,
	110,
	116,
	59,
	25186,
	112,
	67,
	97,
	112,
	59,
	25197,
	111,
	117,
	98,
	108,
	101,
	86,
	101,
	114,
	116,
	105,
	99,
	97,
	108,
	66,
	97,
	114,
	59,
	25126,
	384,
	108,
	113,
	120,
	2947,
	2954,
	2971,
	101,
	109,
	101,
	110,
	116,
	59,
	25097,
	117,
	97,
	108,
	256,
	59,
	84,
	2962,
	2963,
	25184,
	105,
	108,
	100,
	101,
	59,
	49152,
	8770,
	824,
	105,
	115,
	116,
	115,
	59,
	25092,
	114,
	101,
	97,
	116,
	101,
	114,
	896,
	59,
	69,
	70,
	71,
	76,
	83,
	84,
	2998,
	2999,
	3005,
	3017,
	3027,
	3032,
	3045,
	25199,
	113,
	117,
	97,
	108,
	59,
	25201,
	117,
	108,
	108,
	69,
	113,
	117,
	97,
	108,
	59,
	49152,
	8807,
	824,
	114,
	101,
	97,
	116,
	101,
	114,
	59,
	49152,
	8811,
	824,
	101,
	115,
	115,
	59,
	25209,
	108,
	97,
	110,
	116,
	69,
	113,
	117,
	97,
	108,
	59,
	49152,
	10878,
	824,
	105,
	108,
	100,
	101,
	59,
	25205,
	117,
	109,
	112,
	324,
	3058,
	3069,
	111,
	119,
	110,
	72,
	117,
	109,
	112,
	59,
	49152,
	8782,
	824,
	113,
	117,
	97,
	108,
	59,
	49152,
	8783,
	824,
	101,
	256,
	102,
	115,
	3082,
	3111,
	116,
	84,
	114,
	105,
	97,
	110,
	103,
	108,
	101,
	384,
	59,
	66,
	69,
	3098,
	3099,
	3105,
	25322,
	97,
	114,
	59,
	49152,
	10703,
	824,
	113,
	117,
	97,
	108,
	59,
	25324,
	115,
	768,
	59,
	69,
	71,
	76,
	83,
	84,
	3125,
	3126,
	3132,
	3140,
	3147,
	3160,
	25198,
	113,
	117,
	97,
	108,
	59,
	25200,
	114,
	101,
	97,
	116,
	101,
	114,
	59,
	25208,
	101,
	115,
	115,
	59,
	49152,
	8810,
	824,
	108,
	97,
	110,
	116,
	69,
	113,
	117,
	97,
	108,
	59,
	49152,
	10877,
	824,
	105,
	108,
	100,
	101,
	59,
	25204,
	101,
	115,
	116,
	101,
	100,
	256,
	71,
	76,
	3176,
	3193,
	114,
	101,
	97,
	116,
	101,
	114,
	71,
	114,
	101,
	97,
	116,
	101,
	114,
	59,
	49152,
	10914,
	824,
	101,
	115,
	115,
	76,
	101,
	115,
	115,
	59,
	49152,
	10913,
	824,
	114,
	101,
	99,
	101,
	100,
	101,
	115,
	384,
	59,
	69,
	83,
	3218,
	3219,
	3227,
	25216,
	113,
	117,
	97,
	108,
	59,
	49152,
	10927,
	824,
	108,
	97,
	110,
	116,
	69,
	113,
	117,
	97,
	108,
	59,
	25312,
	256,
	101,
	105,
	3243,
	3257,
	118,
	101,
	114,
	115,
	101,
	69,
	108,
	101,
	109,
	101,
	110,
	116,
	59,
	25100,
	103,
	104,
	116,
	84,
	114,
	105,
	97,
	110,
	103,
	108,
	101,
	384,
	59,
	66,
	69,
	3275,
	3276,
	3282,
	25323,
	97,
	114,
	59,
	49152,
	10704,
	824,
	113,
	117,
	97,
	108,
	59,
	25325,
	256,
	113,
	117,
	3293,
	3340,
	117,
	97,
	114,
	101,
	83,
	117,
	256,
	98,
	112,
	3304,
	3321,
	115,
	101,
	116,
	256,
	59,
	69,
	3312,
	3315,
	49152,
	8847,
	824,
	113,
	117,
	97,
	108,
	59,
	25314,
	101,
	114,
	115,
	101,
	116,
	256,
	59,
	69,
	3331,
	3334,
	49152,
	8848,
	824,
	113,
	117,
	97,
	108,
	59,
	25315,
	384,
	98,
	99,
	112,
	3347,
	3364,
	3406,
	115,
	101,
	116,
	256,
	59,
	69,
	3355,
	3358,
	49152,
	8834,
	8402,
	113,
	117,
	97,
	108,
	59,
	25224,
	99,
	101,
	101,
	100,
	115,
	512,
	59,
	69,
	83,
	84,
	3378,
	3379,
	3387,
	3398,
	25217,
	113,
	117,
	97,
	108,
	59,
	49152,
	10928,
	824,
	108,
	97,
	110,
	116,
	69,
	113,
	117,
	97,
	108,
	59,
	25313,
	105,
	108,
	100,
	101,
	59,
	49152,
	8831,
	824,
	101,
	114,
	115,
	101,
	116,
	256,
	59,
	69,
	3416,
	3419,
	49152,
	8835,
	8402,
	113,
	117,
	97,
	108,
	59,
	25225,
	105,
	108,
	100,
	101,
	512,
	59,
	69,
	70,
	84,
	3438,
	3439,
	3445,
	3455,
	25153,
	113,
	117,
	97,
	108,
	59,
	25156,
	117,
	108,
	108,
	69,
	113,
	117,
	97,
	108,
	59,
	25159,
	105,
	108,
	100,
	101,
	59,
	25161,
	101,
	114,
	116,
	105,
	99,
	97,
	108,
	66,
	97,
	114,
	59,
	25124,
	99,
	114,
	59,
	49152,
	55349,
	56489,
	105,
	108,
	100,
	101,
	32827,
	209,
	16593,
	59,
	17309,
	1792,
	69,
	97,
	99,
	100,
	102,
	103,
	109,
	111,
	112,
	114,
	115,
	116,
	117,
	118,
	3517,
	3522,
	3529,
	3541,
	3547,
	3552,
	3559,
	3580,
	3586,
	3616,
	3618,
	3634,
	3647,
	3652,
	108,
	105,
	103,
	59,
	16722,
	99,
	117,
	116,
	101,
	32827,
	211,
	16595,
	256,
	105,
	121,
	3534,
	3539,
	114,
	99,
	32827,
	212,
	16596,
	59,
	17438,
	98,
	108,
	97,
	99,
	59,
	16720,
	114,
	59,
	49152,
	55349,
	56594,
	114,
	97,
	118,
	101,
	32827,
	210,
	16594,
	384,
	97,
	101,
	105,
	3566,
	3570,
	3574,
	99,
	114,
	59,
	16716,
	103,
	97,
	59,
	17321,
	99,
	114,
	111,
	110,
	59,
	17311,
	112,
	102,
	59,
	49152,
	55349,
	56646,
	101,
	110,
	67,
	117,
	114,
	108,
	121,
	256,
	68,
	81,
	3598,
	3610,
	111,
	117,
	98,
	108,
	101,
	81,
	117,
	111,
	116,
	101,
	59,
	24604,
	117,
	111,
	116,
	101,
	59,
	24600,
	59,
	27220,
	256,
	99,
	108,
	3623,
	3628,
	114,
	59,
	49152,
	55349,
	56490,
	97,
	115,
	104,
	32827,
	216,
	16600,
	105,
	364,
	3639,
	3644,
	100,
	101,
	32827,
	213,
	16597,
	101,
	115,
	59,
	27191,
	109,
	108,
	32827,
	214,
	16598,
	101,
	114,
	256,
	66,
	80,
	3659,
	3680,
	256,
	97,
	114,
	3664,
	3667,
	114,
	59,
	24638,
	97,
	99,
	256,
	101,
	107,
	3674,
	3676,
	59,
	25566,
	101,
	116,
	59,
	25524,
	97,
	114,
	101,
	110,
	116,
	104,
	101,
	115,
	105,
	115,
	59,
	25564,
	1152,
	97,
	99,
	102,
	104,
	105,
	108,
	111,
	114,
	115,
	3711,
	3719,
	3722,
	3727,
	3730,
	3732,
	3741,
	3760,
	3836,
	114,
	116,
	105,
	97,
	108,
	68,
	59,
	25090,
	121,
	59,
	17439,
	114,
	59,
	49152,
	55349,
	56595,
	105,
	59,
	17318,
	59,
	17312,
	117,
	115,
	77,
	105,
	110,
	117,
	115,
	59,
	16561,
	256,
	105,
	112,
	3746,
	3757,
	110,
	99,
	97,
	114,
	101,
	112,
	108,
	97,
	110,
	229,
	1693,
	102,
	59,
	24857,
	512,
	59,
	101,
	105,
	111,
	3769,
	3770,
	3808,
	3812,
	27323,
	99,
	101,
	100,
	101,
	115,
	512,
	59,
	69,
	83,
	84,
	3784,
	3785,
	3791,
	3802,
	25210,
	113,
	117,
	97,
	108,
	59,
	27311,
	108,
	97,
	110,
	116,
	69,
	113,
	117,
	97,
	108,
	59,
	25212,
	105,
	108,
	100,
	101,
	59,
	25214,
	109,
	101,
	59,
	24627,
	256,
	100,
	112,
	3817,
	3822,
	117,
	99,
	116,
	59,
	25103,
	111,
	114,
	116,
	105,
	111,
	110,
	256,
	59,
	97,
	549,
	3833,
	108,
	59,
	25117,
	256,
	99,
	105,
	3841,
	3846,
	114,
	59,
	49152,
	55349,
	56491,
	59,
	17320,
	512,
	85,
	102,
	111,
	115,
	3857,
	3862,
	3867,
	3871,
	79,
	84,
	32827,
	34,
	16418,
	114,
	59,
	49152,
	55349,
	56596,
	112,
	102,
	59,
	24858,
	99,
	114,
	59,
	49152,
	55349,
	56492,
	1536,
	66,
	69,
	97,
	99,
	101,
	102,
	104,
	105,
	111,
	114,
	115,
	117,
	3902,
	3907,
	3911,
	3936,
	3955,
	4007,
	4010,
	4013,
	4246,
	4265,
	4276,
	4286,
	97,
	114,
	114,
	59,
	26896,
	71,
	32827,
	174,
	16558,
	384,
	99,
	110,
	114,
	3918,
	3923,
	3926,
	117,
	116,
	101,
	59,
	16724,
	103,
	59,
	26603,
	114,
	256,
	59,
	116,
	3932,
	3933,
	24992,
	108,
	59,
	26902,
	384,
	97,
	101,
	121,
	3943,
	3948,
	3953,
	114,
	111,
	110,
	59,
	16728,
	100,
	105,
	108,
	59,
	16726,
	59,
	17440,
	256,
	59,
	118,
	3960,
	3961,
	24860,
	101,
	114,
	115,
	101,
	256,
	69,
	85,
	3970,
	3993,
	256,
	108,
	113,
	3975,
	3982,
	101,
	109,
	101,
	110,
	116,
	59,
	25099,
	117,
	105,
	108,
	105,
	98,
	114,
	105,
	117,
	109,
	59,
	25035,
	112,
	69,
	113,
	117,
	105,
	108,
	105,
	98,
	114,
	105,
	117,
	109,
	59,
	26991,
	114,
	187,
	3961,
	111,
	59,
	17313,
	103,
	104,
	116,
	1024,
	65,
	67,
	68,
	70,
	84,
	85,
	86,
	97,
	4033,
	4075,
	4083,
	4130,
	4136,
	4187,
	4231,
	984,
	256,
	110,
	114,
	4038,
	4050,
	103,
	108,
	101,
	66,
	114,
	97,
	99,
	107,
	101,
	116,
	59,
	26601,
	114,
	111,
	119,
	384,
	59,
	66,
	76,
	4060,
	4061,
	4065,
	24978,
	97,
	114,
	59,
	25061,
	101,
	102,
	116,
	65,
	114,
	114,
	111,
	119,
	59,
	25028,
	101,
	105,
	108,
	105,
	110,
	103,
	59,
	25353,
	111,
	501,
	4089,
	0,
	4101,
	98,
	108,
	101,
	66,
	114,
	97,
	99,
	107,
	101,
	116,
	59,
	26599,
	110,
	468,
	4106,
	0,
	4116,
	101,
	101,
	86,
	101,
	99,
	116,
	111,
	114,
	59,
	26973,
	101,
	99,
	116,
	111,
	114,
	256,
	59,
	66,
	4125,
	4126,
	25026,
	97,
	114,
	59,
	26965,
	108,
	111,
	111,
	114,
	59,
	25355,
	256,
	101,
	114,
	4141,
	4163,
	101,
	384,
	59,
	65,
	86,
	4149,
	4150,
	4156,
	25250,
	114,
	114,
	111,
	119,
	59,
	24998,
	101,
	99,
	116,
	111,
	114,
	59,
	26971,
	105,
	97,
	110,
	103,
	108,
	101,
	384,
	59,
	66,
	69,
	4176,
	4177,
	4181,
	25267,
	97,
	114,
	59,
	27088,
	113,
	117,
	97,
	108,
	59,
	25269,
	112,
	384,
	68,
	84,
	86,
	4195,
	4206,
	4216,
	111,
	119,
	110,
	86,
	101,
	99,
	116,
	111,
	114,
	59,
	26959,
	101,
	101,
	86,
	101,
	99,
	116,
	111,
	114,
	59,
	26972,
	101,
	99,
	116,
	111,
	114,
	256,
	59,
	66,
	4226,
	4227,
	25022,
	97,
	114,
	59,
	26964,
	101,
	99,
	116,
	111,
	114,
	256,
	59,
	66,
	4241,
	4242,
	25024,
	97,
	114,
	59,
	26963,
	256,
	112,
	117,
	4251,
	4254,
	102,
	59,
	24861,
	110,
	100,
	73,
	109,
	112,
	108,
	105,
	101,
	115,
	59,
	26992,
	105,
	103,
	104,
	116,
	97,
	114,
	114,
	111,
	119,
	59,
	25051,
	256,
	99,
	104,
	4281,
	4284,
	114,
	59,
	24859,
	59,
	25009,
	108,
	101,
	68,
	101,
	108,
	97,
	121,
	101,
	100,
	59,
	27124,
	1664,
	72,
	79,
	97,
	99,
	102,
	104,
	105,
	109,
	111,
	113,
	115,
	116,
	117,
	4324,
	4337,
	4343,
	4349,
	4377,
	4382,
	4433,
	4438,
	4449,
	4455,
	4533,
	4539,
	4543,
	256,
	67,
	99,
	4329,
	4334,
	72,
	99,
	121,
	59,
	17449,
	121,
	59,
	17448,
	70,
	84,
	99,
	121,
	59,
	17452,
	99,
	117,
	116,
	101,
	59,
	16730,
	640,
	59,
	97,
	101,
	105,
	121,
	4360,
	4361,
	4366,
	4371,
	4375,
	27324,
	114,
	111,
	110,
	59,
	16736,
	100,
	105,
	108,
	59,
	16734,
	114,
	99,
	59,
	16732,
	59,
	17441,
	114,
	59,
	49152,
	55349,
	56598,
	111,
	114,
	116,
	512,
	68,
	76,
	82,
	85,
	4394,
	4404,
	4414,
	4425,
	111,
	119,
	110,
	65,
	114,
	114,
	111,
	119,
	187,
	1054,
	101,
	102,
	116,
	65,
	114,
	114,
	111,
	119,
	187,
	2202,
	105,
	103,
	104,
	116,
	65,
	114,
	114,
	111,
	119,
	187,
	4061,
	112,
	65,
	114,
	114,
	111,
	119,
	59,
	24977,
	103,
	109,
	97,
	59,
	17315,
	97,
	108,
	108,
	67,
	105,
	114,
	99,
	108,
	101,
	59,
	25112,
	112,
	102,
	59,
	49152,
	55349,
	56650,
	626,
	4461,
	0,
	0,
	4464,
	116,
	59,
	25114,
	97,
	114,
	101,
	512,
	59,
	73,
	83,
	85,
	4475,
	4476,
	4489,
	4527,
	26017,
	110,
	116,
	101,
	114,
	115,
	101,
	99,
	116,
	105,
	111,
	110,
	59,
	25235,
	117,
	256,
	98,
	112,
	4495,
	4510,
	115,
	101,
	116,
	256,
	59,
	69,
	4503,
	4504,
	25231,
	113,
	117,
	97,
	108,
	59,
	25233,
	101,
	114,
	115,
	101,
	116,
	256,
	59,
	69,
	4520,
	4521,
	25232,
	113,
	117,
	97,
	108,
	59,
	25234,
	110,
	105,
	111,
	110,
	59,
	25236,
	99,
	114,
	59,
	49152,
	55349,
	56494,
	97,
	114,
	59,
	25286,
	512,
	98,
	99,
	109,
	112,
	4552,
	4571,
	4617,
	4619,
	256,
	59,
	115,
	4557,
	4558,
	25296,
	101,
	116,
	256,
	59,
	69,
	4557,
	4565,
	113,
	117,
	97,
	108,
	59,
	25222,
	256,
	99,
	104,
	4576,
	4613,
	101,
	101,
	100,
	115,
	512,
	59,
	69,
	83,
	84,
	4589,
	4590,
	4596,
	4607,
	25211,
	113,
	117,
	97,
	108,
	59,
	27312,
	108,
	97,
	110,
	116,
	69,
	113,
	117,
	97,
	108,
	59,
	25213,
	105,
	108,
	100,
	101,
	59,
	25215,
	84,
	104,
	225,
	3980,
	59,
	25105,
	384,
	59,
	101,
	115,
	4626,
	4627,
	4643,
	25297,
	114,
	115,
	101,
	116,
	256,
	59,
	69,
	4636,
	4637,
	25219,
	113,
	117,
	97,
	108,
	59,
	25223,
	101,
	116,
	187,
	4627,
	1408,
	72,
	82,
	83,
	97,
	99,
	102,
	104,
	105,
	111,
	114,
	115,
	4670,
	4676,
	4681,
	4693,
	4702,
	4721,
	4726,
	4767,
	4802,
	4808,
	4817,
	79,
	82,
	78,
	32827,
	222,
	16606,
	65,
	68,
	69,
	59,
	24866,
	256,
	72,
	99,
	4686,
	4690,
	99,
	121,
	59,
	17419,
	121,
	59,
	17446,
	256,
	98,
	117,
	4698,
	4700,
	59,
	16393,
	59,
	17316,
	384,
	97,
	101,
	121,
	4709,
	4714,
	4719,
	114,
	111,
	110,
	59,
	16740,
	100,
	105,
	108,
	59,
	16738,
	59,
	17442,
	114,
	59,
	49152,
	55349,
	56599,
	256,
	101,
	105,
	4731,
	4745,
	498,
	4736,
	0,
	4743,
	101,
	102,
	111,
	114,
	101,
	59,
	25140,
	97,
	59,
	17304,
	256,
	99,
	110,
	4750,
	4760,
	107,
	83,
	112,
	97,
	99,
	101,
	59,
	49152,
	8287,
	8202,
	83,
	112,
	97,
	99,
	101,
	59,
	24585,
	108,
	100,
	101,
	512,
	59,
	69,
	70,
	84,
	4779,
	4780,
	4786,
	4796,
	25148,
	113,
	117,
	97,
	108,
	59,
	25155,
	117,
	108,
	108,
	69,
	113,
	117,
	97,
	108,
	59,
	25157,
	105,
	108,
	100,
	101,
	59,
	25160,
	112,
	102,
	59,
	49152,
	55349,
	56651,
	105,
	112,
	108,
	101,
	68,
	111,
	116,
	59,
	24795,
	256,
	99,
	116,
	4822,
	4827,
	114,
	59,
	49152,
	55349,
	56495,
	114,
	111,
	107,
	59,
	16742,
	2785,
	4855,
	4878,
	4890,
	4902,
	0,
	4908,
	4913,
	0,
	0,
	0,
	0,
	0,
	4920,
	4925,
	4983,
	4997,
	0,
	5119,
	5124,
	5130,
	5136,
	256,
	99,
	114,
	4859,
	4865,
	117,
	116,
	101,
	32827,
	218,
	16602,
	114,
	256,
	59,
	111,
	4871,
	4872,
	24991,
	99,
	105,
	114,
	59,
	26953,
	114,
	483,
	4883,
	0,
	4886,
	121,
	59,
	17422,
	118,
	101,
	59,
	16748,
	256,
	105,
	121,
	4894,
	4899,
	114,
	99,
	32827,
	219,
	16603,
	59,
	17443,
	98,
	108,
	97,
	99,
	59,
	16752,
	114,
	59,
	49152,
	55349,
	56600,
	114,
	97,
	118,
	101,
	32827,
	217,
	16601,
	97,
	99,
	114,
	59,
	16746,
	256,
	100,
	105,
	4929,
	4969,
	101,
	114,
	256,
	66,
	80,
	4936,
	4957,
	256,
	97,
	114,
	4941,
	4944,
	114,
	59,
	16479,
	97,
	99,
	256,
	101,
	107,
	4951,
	4953,
	59,
	25567,
	101,
	116,
	59,
	25525,
	97,
	114,
	101,
	110,
	116,
	104,
	101,
	115,
	105,
	115,
	59,
	25565,
	111,
	110,
	256,
	59,
	80,
	4976,
	4977,
	25283,
	108,
	117,
	115,
	59,
	25230,
	256,
	103,
	112,
	4987,
	4991,
	111,
	110,
	59,
	16754,
	102,
	59,
	49152,
	55349,
	56652,
	1024,
	65,
	68,
	69,
	84,
	97,
	100,
	112,
	115,
	5013,
	5038,
	5048,
	5060,
	1e3,
	5074,
	5079,
	5107,
	114,
	114,
	111,
	119,
	384,
	59,
	66,
	68,
	4432,
	5024,
	5028,
	97,
	114,
	59,
	26898,
	111,
	119,
	110,
	65,
	114,
	114,
	111,
	119,
	59,
	25029,
	111,
	119,
	110,
	65,
	114,
	114,
	111,
	119,
	59,
	24981,
	113,
	117,
	105,
	108,
	105,
	98,
	114,
	105,
	117,
	109,
	59,
	26990,
	101,
	101,
	256,
	59,
	65,
	5067,
	5068,
	25253,
	114,
	114,
	111,
	119,
	59,
	24997,
	111,
	119,
	110,
	225,
	1011,
	101,
	114,
	256,
	76,
	82,
	5086,
	5096,
	101,
	102,
	116,
	65,
	114,
	114,
	111,
	119,
	59,
	24982,
	105,
	103,
	104,
	116,
	65,
	114,
	114,
	111,
	119,
	59,
	24983,
	105,
	256,
	59,
	108,
	5113,
	5114,
	17362,
	111,
	110,
	59,
	17317,
	105,
	110,
	103,
	59,
	16750,
	99,
	114,
	59,
	49152,
	55349,
	56496,
	105,
	108,
	100,
	101,
	59,
	16744,
	109,
	108,
	32827,
	220,
	16604,
	1152,
	68,
	98,
	99,
	100,
	101,
	102,
	111,
	115,
	118,
	5159,
	5164,
	5168,
	5171,
	5182,
	5253,
	5258,
	5264,
	5270,
	97,
	115,
	104,
	59,
	25259,
	97,
	114,
	59,
	27371,
	121,
	59,
	17426,
	97,
	115,
	104,
	256,
	59,
	108,
	5179,
	5180,
	25257,
	59,
	27366,
	256,
	101,
	114,
	5187,
	5189,
	59,
	25281,
	384,
	98,
	116,
	121,
	5196,
	5200,
	5242,
	97,
	114,
	59,
	24598,
	256,
	59,
	105,
	5199,
	5205,
	99,
	97,
	108,
	512,
	66,
	76,
	83,
	84,
	5217,
	5221,
	5226,
	5236,
	97,
	114,
	59,
	25123,
	105,
	110,
	101,
	59,
	16508,
	101,
	112,
	97,
	114,
	97,
	116,
	111,
	114,
	59,
	26456,
	105,
	108,
	100,
	101,
	59,
	25152,
	84,
	104,
	105,
	110,
	83,
	112,
	97,
	99,
	101,
	59,
	24586,
	114,
	59,
	49152,
	55349,
	56601,
	112,
	102,
	59,
	49152,
	55349,
	56653,
	99,
	114,
	59,
	49152,
	55349,
	56497,
	100,
	97,
	115,
	104,
	59,
	25258,
	640,
	99,
	101,
	102,
	111,
	115,
	5287,
	5292,
	5297,
	5302,
	5308,
	105,
	114,
	99,
	59,
	16756,
	100,
	103,
	101,
	59,
	25280,
	114,
	59,
	49152,
	55349,
	56602,
	112,
	102,
	59,
	49152,
	55349,
	56654,
	99,
	114,
	59,
	49152,
	55349,
	56498,
	512,
	102,
	105,
	111,
	115,
	5323,
	5328,
	5330,
	5336,
	114,
	59,
	49152,
	55349,
	56603,
	59,
	17310,
	112,
	102,
	59,
	49152,
	55349,
	56655,
	99,
	114,
	59,
	49152,
	55349,
	56499,
	1152,
	65,
	73,
	85,
	97,
	99,
	102,
	111,
	115,
	117,
	5361,
	5365,
	5369,
	5373,
	5380,
	5391,
	5396,
	5402,
	5408,
	99,
	121,
	59,
	17455,
	99,
	121,
	59,
	17415,
	99,
	121,
	59,
	17454,
	99,
	117,
	116,
	101,
	32827,
	221,
	16605,
	256,
	105,
	121,
	5385,
	5389,
	114,
	99,
	59,
	16758,
	59,
	17451,
	114,
	59,
	49152,
	55349,
	56604,
	112,
	102,
	59,
	49152,
	55349,
	56656,
	99,
	114,
	59,
	49152,
	55349,
	56500,
	109,
	108,
	59,
	16760,
	1024,
	72,
	97,
	99,
	100,
	101,
	102,
	111,
	115,
	5429,
	5433,
	5439,
	5451,
	5455,
	5469,
	5472,
	5476,
	99,
	121,
	59,
	17430,
	99,
	117,
	116,
	101,
	59,
	16761,
	256,
	97,
	121,
	5444,
	5449,
	114,
	111,
	110,
	59,
	16765,
	59,
	17431,
	111,
	116,
	59,
	16763,
	498,
	5460,
	0,
	5467,
	111,
	87,
	105,
	100,
	116,
	232,
	2777,
	97,
	59,
	17302,
	114,
	59,
	24872,
	112,
	102,
	59,
	24868,
	99,
	114,
	59,
	49152,
	55349,
	56501,
	3041,
	5507,
	5514,
	5520,
	0,
	5552,
	5558,
	5567,
	0,
	0,
	0,
	0,
	5574,
	5595,
	5611,
	5727,
	5741,
	0,
	5781,
	5787,
	5810,
	5817,
	0,
	5822,
	99,
	117,
	116,
	101,
	32827,
	225,
	16609,
	114,
	101,
	118,
	101,
	59,
	16643,
	768,
	59,
	69,
	100,
	105,
	117,
	121,
	5532,
	5533,
	5537,
	5539,
	5544,
	5549,
	25150,
	59,
	49152,
	8766,
	819,
	59,
	25151,
	114,
	99,
	32827,
	226,
	16610,
	116,
	101,
	32955,
	180,
	774,
	59,
	17456,
	108,
	105,
	103,
	32827,
	230,
	16614,
	256,
	59,
	114,
	178,
	5562,
	59,
	49152,
	55349,
	56606,
	114,
	97,
	118,
	101,
	32827,
	224,
	16608,
	256,
	101,
	112,
	5578,
	5590,
	256,
	102,
	112,
	5583,
	5588,
	115,
	121,
	109,
	59,
	24885,
	232,
	5587,
	104,
	97,
	59,
	17329,
	256,
	97,
	112,
	5599,
	99,
	256,
	99,
	108,
	5604,
	5607,
	114,
	59,
	16641,
	103,
	59,
	27199,
	612,
	5616,
	0,
	0,
	5642,
	640,
	59,
	97,
	100,
	115,
	118,
	5626,
	5627,
	5631,
	5633,
	5639,
	25127,
	110,
	100,
	59,
	27221,
	59,
	27228,
	108,
	111,
	112,
	101,
	59,
	27224,
	59,
	27226,
	896,
	59,
	101,
	108,
	109,
	114,
	115,
	122,
	5656,
	5657,
	5659,
	5662,
	5695,
	5711,
	5721,
	25120,
	59,
	27044,
	101,
	187,
	5657,
	115,
	100,
	256,
	59,
	97,
	5669,
	5670,
	25121,
	1121,
	5680,
	5682,
	5684,
	5686,
	5688,
	5690,
	5692,
	5694,
	59,
	27048,
	59,
	27049,
	59,
	27050,
	59,
	27051,
	59,
	27052,
	59,
	27053,
	59,
	27054,
	59,
	27055,
	116,
	256,
	59,
	118,
	5701,
	5702,
	25119,
	98,
	256,
	59,
	100,
	5708,
	5709,
	25278,
	59,
	27037,
	256,
	112,
	116,
	5716,
	5719,
	104,
	59,
	25122,
	187,
	185,
	97,
	114,
	114,
	59,
	25468,
	256,
	103,
	112,
	5731,
	5735,
	111,
	110,
	59,
	16645,
	102,
	59,
	49152,
	55349,
	56658,
	896,
	59,
	69,
	97,
	101,
	105,
	111,
	112,
	4801,
	5755,
	5757,
	5762,
	5764,
	5767,
	5770,
	59,
	27248,
	99,
	105,
	114,
	59,
	27247,
	59,
	25162,
	100,
	59,
	25163,
	115,
	59,
	16423,
	114,
	111,
	120,
	256,
	59,
	101,
	4801,
	5778,
	241,
	5763,
	105,
	110,
	103,
	32827,
	229,
	16613,
	384,
	99,
	116,
	121,
	5793,
	5798,
	5800,
	114,
	59,
	49152,
	55349,
	56502,
	59,
	16426,
	109,
	112,
	256,
	59,
	101,
	4801,
	5807,
	241,
	648,
	105,
	108,
	100,
	101,
	32827,
	227,
	16611,
	109,
	108,
	32827,
	228,
	16612,
	256,
	99,
	105,
	5826,
	5832,
	111,
	110,
	105,
	110,
	244,
	626,
	110,
	116,
	59,
	27153,
	2048,
	78,
	97,
	98,
	99,
	100,
	101,
	102,
	105,
	107,
	108,
	110,
	111,
	112,
	114,
	115,
	117,
	5869,
	5873,
	5936,
	5948,
	5955,
	5960,
	6008,
	6013,
	6112,
	6118,
	6201,
	6224,
	5901,
	6461,
	6472,
	6512,
	111,
	116,
	59,
	27373,
	256,
	99,
	114,
	5878,
	5918,
	107,
	512,
	99,
	101,
	112,
	115,
	5888,
	5893,
	5901,
	5907,
	111,
	110,
	103,
	59,
	25164,
	112,
	115,
	105,
	108,
	111,
	110,
	59,
	17398,
	114,
	105,
	109,
	101,
	59,
	24629,
	105,
	109,
	256,
	59,
	101,
	5914,
	5915,
	25149,
	113,
	59,
	25293,
	374,
	5922,
	5926,
	101,
	101,
	59,
	25277,
	101,
	100,
	256,
	59,
	103,
	5932,
	5933,
	25349,
	101,
	187,
	5933,
	114,
	107,
	256,
	59,
	116,
	4956,
	5943,
	98,
	114,
	107,
	59,
	25526,
	256,
	111,
	121,
	5889,
	5953,
	59,
	17457,
	113,
	117,
	111,
	59,
	24606,
	640,
	99,
	109,
	112,
	114,
	116,
	5971,
	5979,
	5985,
	5988,
	5992,
	97,
	117,
	115,
	256,
	59,
	101,
	266,
	265,
	112,
	116,
	121,
	118,
	59,
	27056,
	115,
	233,
	5900,
	110,
	111,
	245,
	275,
	384,
	97,
	104,
	119,
	5999,
	6001,
	6003,
	59,
	17330,
	59,
	24886,
	101,
	101,
	110,
	59,
	25196,
	114,
	59,
	49152,
	55349,
	56607,
	103,
	896,
	99,
	111,
	115,
	116,
	117,
	118,
	119,
	6029,
	6045,
	6067,
	6081,
	6101,
	6107,
	6110,
	384,
	97,
	105,
	117,
	6036,
	6038,
	6042,
	240,
	1888,
	114,
	99,
	59,
	26095,
	112,
	187,
	4977,
	384,
	100,
	112,
	116,
	6052,
	6056,
	6061,
	111,
	116,
	59,
	27136,
	108,
	117,
	115,
	59,
	27137,
	105,
	109,
	101,
	115,
	59,
	27138,
	625,
	6073,
	0,
	0,
	6078,
	99,
	117,
	112,
	59,
	27142,
	97,
	114,
	59,
	26117,
	114,
	105,
	97,
	110,
	103,
	108,
	101,
	256,
	100,
	117,
	6093,
	6098,
	111,
	119,
	110,
	59,
	26045,
	112,
	59,
	26035,
	112,
	108,
	117,
	115,
	59,
	27140,
	101,
	229,
	5188,
	229,
	5293,
	97,
	114,
	111,
	119,
	59,
	26893,
	384,
	97,
	107,
	111,
	6125,
	6182,
	6197,
	256,
	99,
	110,
	6130,
	6179,
	107,
	384,
	108,
	115,
	116,
	6138,
	1451,
	6146,
	111,
	122,
	101,
	110,
	103,
	101,
	59,
	27115,
	114,
	105,
	97,
	110,
	103,
	108,
	101,
	512,
	59,
	100,
	108,
	114,
	6162,
	6163,
	6168,
	6173,
	26036,
	111,
	119,
	110,
	59,
	26046,
	101,
	102,
	116,
	59,
	26050,
	105,
	103,
	104,
	116,
	59,
	26040,
	107,
	59,
	25635,
	433,
	6187,
	0,
	6195,
	434,
	6191,
	0,
	6193,
	59,
	26002,
	59,
	26001,
	52,
	59,
	26003,
	99,
	107,
	59,
	25992,
	256,
	101,
	111,
	6206,
	6221,
	256,
	59,
	113,
	6211,
	6214,
	49152,
	61,
	8421,
	117,
	105,
	118,
	59,
	49152,
	8801,
	8421,
	116,
	59,
	25360,
	512,
	112,
	116,
	119,
	120,
	6233,
	6238,
	6247,
	6252,
	102,
	59,
	49152,
	55349,
	56659,
	256,
	59,
	116,
	5067,
	6243,
	111,
	109,
	187,
	5068,
	116,
	105,
	101,
	59,
	25288,
	1536,
	68,
	72,
	85,
	86,
	98,
	100,
	104,
	109,
	112,
	116,
	117,
	118,
	6277,
	6294,
	6314,
	6331,
	6359,
	6363,
	6380,
	6399,
	6405,
	6410,
	6416,
	6433,
	512,
	76,
	82,
	108,
	114,
	6286,
	6288,
	6290,
	6292,
	59,
	25943,
	59,
	25940,
	59,
	25942,
	59,
	25939,
	640,
	59,
	68,
	85,
	100,
	117,
	6305,
	6306,
	6308,
	6310,
	6312,
	25936,
	59,
	25958,
	59,
	25961,
	59,
	25956,
	59,
	25959,
	512,
	76,
	82,
	108,
	114,
	6323,
	6325,
	6327,
	6329,
	59,
	25949,
	59,
	25946,
	59,
	25948,
	59,
	25945,
	896,
	59,
	72,
	76,
	82,
	104,
	108,
	114,
	6346,
	6347,
	6349,
	6351,
	6353,
	6355,
	6357,
	25937,
	59,
	25964,
	59,
	25955,
	59,
	25952,
	59,
	25963,
	59,
	25954,
	59,
	25951,
	111,
	120,
	59,
	27081,
	512,
	76,
	82,
	108,
	114,
	6372,
	6374,
	6376,
	6378,
	59,
	25941,
	59,
	25938,
	59,
	25872,
	59,
	25868,
	640,
	59,
	68,
	85,
	100,
	117,
	1725,
	6391,
	6393,
	6395,
	6397,
	59,
	25957,
	59,
	25960,
	59,
	25900,
	59,
	25908,
	105,
	110,
	117,
	115,
	59,
	25247,
	108,
	117,
	115,
	59,
	25246,
	105,
	109,
	101,
	115,
	59,
	25248,
	512,
	76,
	82,
	108,
	114,
	6425,
	6427,
	6429,
	6431,
	59,
	25947,
	59,
	25944,
	59,
	25880,
	59,
	25876,
	896,
	59,
	72,
	76,
	82,
	104,
	108,
	114,
	6448,
	6449,
	6451,
	6453,
	6455,
	6457,
	6459,
	25858,
	59,
	25962,
	59,
	25953,
	59,
	25950,
	59,
	25916,
	59,
	25892,
	59,
	25884,
	256,
	101,
	118,
	291,
	6466,
	98,
	97,
	114,
	32827,
	166,
	16550,
	512,
	99,
	101,
	105,
	111,
	6481,
	6486,
	6490,
	6496,
	114,
	59,
	49152,
	55349,
	56503,
	109,
	105,
	59,
	24655,
	109,
	256,
	59,
	101,
	5914,
	5916,
	108,
	384,
	59,
	98,
	104,
	6504,
	6505,
	6507,
	16476,
	59,
	27077,
	115,
	117,
	98,
	59,
	26568,
	364,
	6516,
	6526,
	108,
	256,
	59,
	101,
	6521,
	6522,
	24610,
	116,
	187,
	6522,
	112,
	384,
	59,
	69,
	101,
	303,
	6533,
	6535,
	59,
	27310,
	256,
	59,
	113,
	1756,
	1755,
	3297,
	6567,
	0,
	6632,
	6673,
	6677,
	6706,
	0,
	6711,
	6736,
	0,
	0,
	6836,
	0,
	0,
	6849,
	0,
	0,
	6945,
	6958,
	6989,
	6994,
	0,
	7165,
	0,
	7180,
	384,
	99,
	112,
	114,
	6573,
	6578,
	6621,
	117,
	116,
	101,
	59,
	16647,
	768,
	59,
	97,
	98,
	99,
	100,
	115,
	6591,
	6592,
	6596,
	6602,
	6613,
	6617,
	25129,
	110,
	100,
	59,
	27204,
	114,
	99,
	117,
	112,
	59,
	27209,
	256,
	97,
	117,
	6607,
	6610,
	112,
	59,
	27211,
	112,
	59,
	27207,
	111,
	116,
	59,
	27200,
	59,
	49152,
	8745,
	65024,
	256,
	101,
	111,
	6626,
	6629,
	116,
	59,
	24641,
	238,
	1683,
	512,
	97,
	101,
	105,
	117,
	6640,
	6651,
	6657,
	6661,
	496,
	6645,
	0,
	6648,
	115,
	59,
	27213,
	111,
	110,
	59,
	16653,
	100,
	105,
	108,
	32827,
	231,
	16615,
	114,
	99,
	59,
	16649,
	112,
	115,
	256,
	59,
	115,
	6668,
	6669,
	27212,
	109,
	59,
	27216,
	111,
	116,
	59,
	16651,
	384,
	100,
	109,
	110,
	6683,
	6688,
	6694,
	105,
	108,
	32955,
	184,
	429,
	112,
	116,
	121,
	118,
	59,
	27058,
	116,
	33024,
	162,
	59,
	101,
	6701,
	6702,
	16546,
	114,
	228,
	434,
	114,
	59,
	49152,
	55349,
	56608,
	384,
	99,
	101,
	105,
	6717,
	6720,
	6733,
	121,
	59,
	17479,
	99,
	107,
	256,
	59,
	109,
	6727,
	6728,
	26387,
	97,
	114,
	107,
	187,
	6728,
	59,
	17351,
	114,
	896,
	59,
	69,
	99,
	101,
	102,
	109,
	115,
	6751,
	6752,
	6754,
	6763,
	6820,
	6826,
	6830,
	26059,
	59,
	27075,
	384,
	59,
	101,
	108,
	6761,
	6762,
	6765,
	17094,
	113,
	59,
	25175,
	101,
	609,
	6772,
	0,
	0,
	6792,
	114,
	114,
	111,
	119,
	256,
	108,
	114,
	6780,
	6785,
	101,
	102,
	116,
	59,
	25018,
	105,
	103,
	104,
	116,
	59,
	25019,
	640,
	82,
	83,
	97,
	99,
	100,
	6802,
	6804,
	6806,
	6810,
	6815,
	187,
	3911,
	59,
	25800,
	115,
	116,
	59,
	25243,
	105,
	114,
	99,
	59,
	25242,
	97,
	115,
	104,
	59,
	25245,
	110,
	105,
	110,
	116,
	59,
	27152,
	105,
	100,
	59,
	27375,
	99,
	105,
	114,
	59,
	27074,
	117,
	98,
	115,
	256,
	59,
	117,
	6843,
	6844,
	26211,
	105,
	116,
	187,
	6844,
	748,
	6855,
	6868,
	6906,
	0,
	6922,
	111,
	110,
	256,
	59,
	101,
	6861,
	6862,
	16442,
	256,
	59,
	113,
	199,
	198,
	621,
	6873,
	0,
	0,
	6882,
	97,
	256,
	59,
	116,
	6878,
	6879,
	16428,
	59,
	16448,
	384,
	59,
	102,
	108,
	6888,
	6889,
	6891,
	25089,
	238,
	4448,
	101,
	256,
	109,
	120,
	6897,
	6902,
	101,
	110,
	116,
	187,
	6889,
	101,
	243,
	589,
	487,
	6910,
	0,
	6919,
	256,
	59,
	100,
	4795,
	6914,
	111,
	116,
	59,
	27245,
	110,
	244,
	582,
	384,
	102,
	114,
	121,
	6928,
	6932,
	6935,
	59,
	49152,
	55349,
	56660,
	111,
	228,
	596,
	33024,
	169,
	59,
	115,
	341,
	6941,
	114,
	59,
	24855,
	256,
	97,
	111,
	6949,
	6953,
	114,
	114,
	59,
	25013,
	115,
	115,
	59,
	26391,
	256,
	99,
	117,
	6962,
	6967,
	114,
	59,
	49152,
	55349,
	56504,
	256,
	98,
	112,
	6972,
	6980,
	256,
	59,
	101,
	6977,
	6978,
	27343,
	59,
	27345,
	256,
	59,
	101,
	6985,
	6986,
	27344,
	59,
	27346,
	100,
	111,
	116,
	59,
	25327,
	896,
	100,
	101,
	108,
	112,
	114,
	118,
	119,
	7008,
	7020,
	7031,
	7042,
	7084,
	7124,
	7161,
	97,
	114,
	114,
	256,
	108,
	114,
	7016,
	7018,
	59,
	26936,
	59,
	26933,
	624,
	7026,
	0,
	0,
	7029,
	114,
	59,
	25310,
	99,
	59,
	25311,
	97,
	114,
	114,
	256,
	59,
	112,
	7039,
	7040,
	25014,
	59,
	26941,
	768,
	59,
	98,
	99,
	100,
	111,
	115,
	7055,
	7056,
	7062,
	7073,
	7077,
	7080,
	25130,
	114,
	99,
	97,
	112,
	59,
	27208,
	256,
	97,
	117,
	7067,
	7070,
	112,
	59,
	27206,
	112,
	59,
	27210,
	111,
	116,
	59,
	25229,
	114,
	59,
	27205,
	59,
	49152,
	8746,
	65024,
	512,
	97,
	108,
	114,
	118,
	7093,
	7103,
	7134,
	7139,
	114,
	114,
	256,
	59,
	109,
	7100,
	7101,
	25015,
	59,
	26940,
	121,
	384,
	101,
	118,
	119,
	7111,
	7124,
	7128,
	113,
	624,
	7118,
	0,
	0,
	7122,
	114,
	101,
	227,
	7027,
	117,
	227,
	7029,
	101,
	101,
	59,
	25294,
	101,
	100,
	103,
	101,
	59,
	25295,
	101,
	110,
	32827,
	164,
	16548,
	101,
	97,
	114,
	114,
	111,
	119,
	256,
	108,
	114,
	7150,
	7155,
	101,
	102,
	116,
	187,
	7040,
	105,
	103,
	104,
	116,
	187,
	7101,
	101,
	228,
	7133,
	256,
	99,
	105,
	7169,
	7175,
	111,
	110,
	105,
	110,
	244,
	503,
	110,
	116,
	59,
	25137,
	108,
	99,
	116,
	121,
	59,
	25389,
	2432,
	65,
	72,
	97,
	98,
	99,
	100,
	101,
	102,
	104,
	105,
	106,
	108,
	111,
	114,
	115,
	116,
	117,
	119,
	122,
	7224,
	7227,
	7231,
	7261,
	7273,
	7285,
	7306,
	7326,
	7340,
	7351,
	7419,
	7423,
	7437,
	7547,
	7569,
	7595,
	7611,
	7622,
	7629,
	114,
	242,
	897,
	97,
	114,
	59,
	26981,
	512,
	103,
	108,
	114,
	115,
	7240,
	7245,
	7250,
	7252,
	103,
	101,
	114,
	59,
	24608,
	101,
	116,
	104,
	59,
	24888,
	242,
	4403,
	104,
	256,
	59,
	118,
	7258,
	7259,
	24592,
	187,
	2314,
	363,
	7265,
	7271,
	97,
	114,
	111,
	119,
	59,
	26895,
	97,
	227,
	789,
	256,
	97,
	121,
	7278,
	7283,
	114,
	111,
	110,
	59,
	16655,
	59,
	17460,
	384,
	59,
	97,
	111,
	818,
	7292,
	7300,
	256,
	103,
	114,
	703,
	7297,
	114,
	59,
	25034,
	116,
	115,
	101,
	113,
	59,
	27255,
	384,
	103,
	108,
	109,
	7313,
	7316,
	7320,
	32827,
	176,
	16560,
	116,
	97,
	59,
	17332,
	112,
	116,
	121,
	118,
	59,
	27057,
	256,
	105,
	114,
	7331,
	7336,
	115,
	104,
	116,
	59,
	27007,
	59,
	49152,
	55349,
	56609,
	97,
	114,
	256,
	108,
	114,
	7347,
	7349,
	187,
	2268,
	187,
	4126,
	640,
	97,
	101,
	103,
	115,
	118,
	7362,
	888,
	7382,
	7388,
	7392,
	109,
	384,
	59,
	111,
	115,
	806,
	7370,
	7380,
	110,
	100,
	256,
	59,
	115,
	806,
	7377,
	117,
	105,
	116,
	59,
	26214,
	97,
	109,
	109,
	97,
	59,
	17373,
	105,
	110,
	59,
	25330,
	384,
	59,
	105,
	111,
	7399,
	7400,
	7416,
	16631,
	100,
	101,
	33024,
	247,
	59,
	111,
	7399,
	7408,
	110,
	116,
	105,
	109,
	101,
	115,
	59,
	25287,
	110,
	248,
	7415,
	99,
	121,
	59,
	17490,
	99,
	623,
	7430,
	0,
	0,
	7434,
	114,
	110,
	59,
	25374,
	111,
	112,
	59,
	25357,
	640,
	108,
	112,
	116,
	117,
	119,
	7448,
	7453,
	7458,
	7497,
	7509,
	108,
	97,
	114,
	59,
	16420,
	102,
	59,
	49152,
	55349,
	56661,
	640,
	59,
	101,
	109,
	112,
	115,
	779,
	7469,
	7479,
	7485,
	7490,
	113,
	256,
	59,
	100,
	850,
	7475,
	111,
	116,
	59,
	25169,
	105,
	110,
	117,
	115,
	59,
	25144,
	108,
	117,
	115,
	59,
	25108,
	113,
	117,
	97,
	114,
	101,
	59,
	25249,
	98,
	108,
	101,
	98,
	97,
	114,
	119,
	101,
	100,
	103,
	229,
	250,
	110,
	384,
	97,
	100,
	104,
	4398,
	7517,
	7527,
	111,
	119,
	110,
	97,
	114,
	114,
	111,
	119,
	243,
	7299,
	97,
	114,
	112,
	111,
	111,
	110,
	256,
	108,
	114,
	7538,
	7542,
	101,
	102,
	244,
	7348,
	105,
	103,
	104,
	244,
	7350,
	354,
	7551,
	7557,
	107,
	97,
	114,
	111,
	247,
	3906,
	623,
	7562,
	0,
	0,
	7566,
	114,
	110,
	59,
	25375,
	111,
	112,
	59,
	25356,
	384,
	99,
	111,
	116,
	7576,
	7587,
	7590,
	256,
	114,
	121,
	7581,
	7585,
	59,
	49152,
	55349,
	56505,
	59,
	17493,
	108,
	59,
	27126,
	114,
	111,
	107,
	59,
	16657,
	256,
	100,
	114,
	7600,
	7604,
	111,
	116,
	59,
	25329,
	105,
	256,
	59,
	102,
	7610,
	6166,
	26047,
	256,
	97,
	104,
	7616,
	7619,
	114,
	242,
	1065,
	97,
	242,
	4006,
	97,
	110,
	103,
	108,
	101,
	59,
	27046,
	256,
	99,
	105,
	7634,
	7637,
	121,
	59,
	17503,
	103,
	114,
	97,
	114,
	114,
	59,
	26623,
	2304,
	68,
	97,
	99,
	100,
	101,
	102,
	103,
	108,
	109,
	110,
	111,
	112,
	113,
	114,
	115,
	116,
	117,
	120,
	7681,
	7689,
	7705,
	7736,
	1400,
	7740,
	7753,
	7777,
	7806,
	7845,
	7855,
	7869,
	7905,
	7978,
	7991,
	8004,
	8014,
	8026,
	256,
	68,
	111,
	7686,
	7476,
	111,
	244,
	7305,
	256,
	99,
	115,
	7694,
	7700,
	117,
	116,
	101,
	32827,
	233,
	16617,
	116,
	101,
	114,
	59,
	27246,
	512,
	97,
	105,
	111,
	121,
	7714,
	7719,
	7729,
	7734,
	114,
	111,
	110,
	59,
	16667,
	114,
	256,
	59,
	99,
	7725,
	7726,
	25174,
	32827,
	234,
	16618,
	108,
	111,
	110,
	59,
	25173,
	59,
	17485,
	111,
	116,
	59,
	16663,
	256,
	68,
	114,
	7745,
	7749,
	111,
	116,
	59,
	25170,
	59,
	49152,
	55349,
	56610,
	384,
	59,
	114,
	115,
	7760,
	7761,
	7767,
	27290,
	97,
	118,
	101,
	32827,
	232,
	16616,
	256,
	59,
	100,
	7772,
	7773,
	27286,
	111,
	116,
	59,
	27288,
	512,
	59,
	105,
	108,
	115,
	7786,
	7787,
	7794,
	7796,
	27289,
	110,
	116,
	101,
	114,
	115,
	59,
	25575,
	59,
	24851,
	256,
	59,
	100,
	7801,
	7802,
	27285,
	111,
	116,
	59,
	27287,
	384,
	97,
	112,
	115,
	7813,
	7817,
	7831,
	99,
	114,
	59,
	16659,
	116,
	121,
	384,
	59,
	115,
	118,
	7826,
	7827,
	7829,
	25093,
	101,
	116,
	187,
	7827,
	112,
	256,
	49,
	59,
	7837,
	7844,
	307,
	7841,
	7843,
	59,
	24580,
	59,
	24581,
	24579,
	256,
	103,
	115,
	7850,
	7852,
	59,
	16715,
	112,
	59,
	24578,
	256,
	103,
	112,
	7860,
	7864,
	111,
	110,
	59,
	16665,
	102,
	59,
	49152,
	55349,
	56662,
	384,
	97,
	108,
	115,
	7876,
	7886,
	7890,
	114,
	256,
	59,
	115,
	7882,
	7883,
	25301,
	108,
	59,
	27107,
	117,
	115,
	59,
	27249,
	105,
	384,
	59,
	108,
	118,
	7898,
	7899,
	7903,
	17333,
	111,
	110,
	187,
	7899,
	59,
	17397,
	512,
	99,
	115,
	117,
	118,
	7914,
	7923,
	7947,
	7971,
	256,
	105,
	111,
	7919,
	7729,
	114,
	99,
	187,
	7726,
	617,
	7929,
	0,
	0,
	7931,
	237,
	1352,
	97,
	110,
	116,
	256,
	103,
	108,
	7938,
	7942,
	116,
	114,
	187,
	7773,
	101,
	115,
	115,
	187,
	7802,
	384,
	97,
	101,
	105,
	7954,
	7958,
	7962,
	108,
	115,
	59,
	16445,
	115,
	116,
	59,
	25183,
	118,
	256,
	59,
	68,
	565,
	7968,
	68,
	59,
	27256,
	112,
	97,
	114,
	115,
	108,
	59,
	27109,
	256,
	68,
	97,
	7983,
	7987,
	111,
	116,
	59,
	25171,
	114,
	114,
	59,
	26993,
	384,
	99,
	100,
	105,
	7998,
	8001,
	7928,
	114,
	59,
	24879,
	111,
	244,
	850,
	256,
	97,
	104,
	8009,
	8011,
	59,
	17335,
	32827,
	240,
	16624,
	256,
	109,
	114,
	8019,
	8023,
	108,
	32827,
	235,
	16619,
	111,
	59,
	24748,
	384,
	99,
	105,
	112,
	8033,
	8036,
	8039,
	108,
	59,
	16417,
	115,
	244,
	1390,
	256,
	101,
	111,
	8044,
	8052,
	99,
	116,
	97,
	116,
	105,
	111,
	238,
	1369,
	110,
	101,
	110,
	116,
	105,
	97,
	108,
	229,
	1401,
	2529,
	8082,
	0,
	8094,
	0,
	8097,
	8103,
	0,
	0,
	8134,
	8140,
	0,
	8147,
	0,
	8166,
	8170,
	8192,
	0,
	8200,
	8282,
	108,
	108,
	105,
	110,
	103,
	100,
	111,
	116,
	115,
	101,
	241,
	7748,
	121,
	59,
	17476,
	109,
	97,
	108,
	101,
	59,
	26176,
	384,
	105,
	108,
	114,
	8109,
	8115,
	8129,
	108,
	105,
	103,
	59,
	32768,
	64259,
	617,
	8121,
	0,
	0,
	8125,
	103,
	59,
	32768,
	64256,
	105,
	103,
	59,
	32768,
	64260,
	59,
	49152,
	55349,
	56611,
	108,
	105,
	103,
	59,
	32768,
	64257,
	108,
	105,
	103,
	59,
	49152,
	102,
	106,
	384,
	97,
	108,
	116,
	8153,
	8156,
	8161,
	116,
	59,
	26221,
	105,
	103,
	59,
	32768,
	64258,
	110,
	115,
	59,
	26033,
	111,
	102,
	59,
	16786,
	496,
	8174,
	0,
	8179,
	102,
	59,
	49152,
	55349,
	56663,
	256,
	97,
	107,
	1471,
	8183,
	256,
	59,
	118,
	8188,
	8189,
	25300,
	59,
	27353,
	97,
	114,
	116,
	105,
	110,
	116,
	59,
	27149,
	256,
	97,
	111,
	8204,
	8277,
	256,
	99,
	115,
	8209,
	8274,
	945,
	8218,
	8240,
	8248,
	8261,
	8264,
	0,
	8272,
	946,
	8226,
	8229,
	8231,
	8234,
	8236,
	0,
	8238,
	32827,
	189,
	16573,
	59,
	24915,
	32827,
	188,
	16572,
	59,
	24917,
	59,
	24921,
	59,
	24923,
	435,
	8244,
	0,
	8246,
	59,
	24916,
	59,
	24918,
	692,
	8254,
	8257,
	0,
	0,
	8259,
	32827,
	190,
	16574,
	59,
	24919,
	59,
	24924,
	53,
	59,
	24920,
	438,
	8268,
	0,
	8270,
	59,
	24922,
	59,
	24925,
	56,
	59,
	24926,
	108,
	59,
	24644,
	119,
	110,
	59,
	25378,
	99,
	114,
	59,
	49152,
	55349,
	56507,
	2176,
	69,
	97,
	98,
	99,
	100,
	101,
	102,
	103,
	105,
	106,
	108,
	110,
	111,
	114,
	115,
	116,
	118,
	8322,
	8329,
	8351,
	8357,
	8368,
	8372,
	8432,
	8437,
	8442,
	8447,
	8451,
	8466,
	8504,
	791,
	8510,
	8530,
	8606,
	256,
	59,
	108,
	1613,
	8327,
	59,
	27276,
	384,
	99,
	109,
	112,
	8336,
	8341,
	8349,
	117,
	116,
	101,
	59,
	16885,
	109,
	97,
	256,
	59,
	100,
	8348,
	7386,
	17331,
	59,
	27270,
	114,
	101,
	118,
	101,
	59,
	16671,
	256,
	105,
	121,
	8362,
	8366,
	114,
	99,
	59,
	16669,
	59,
	17459,
	111,
	116,
	59,
	16673,
	512,
	59,
	108,
	113,
	115,
	1598,
	1602,
	8381,
	8393,
	384,
	59,
	113,
	115,
	1598,
	1612,
	8388,
	108,
	97,
	110,
	244,
	1637,
	512,
	59,
	99,
	100,
	108,
	1637,
	8402,
	8405,
	8421,
	99,
	59,
	27305,
	111,
	116,
	256,
	59,
	111,
	8412,
	8413,
	27264,
	256,
	59,
	108,
	8418,
	8419,
	27266,
	59,
	27268,
	256,
	59,
	101,
	8426,
	8429,
	49152,
	8923,
	65024,
	115,
	59,
	27284,
	114,
	59,
	49152,
	55349,
	56612,
	256,
	59,
	103,
	1651,
	1563,
	109,
	101,
	108,
	59,
	24887,
	99,
	121,
	59,
	17491,
	512,
	59,
	69,
	97,
	106,
	1626,
	8460,
	8462,
	8464,
	59,
	27282,
	59,
	27301,
	59,
	27300,
	512,
	69,
	97,
	101,
	115,
	8475,
	8477,
	8489,
	8500,
	59,
	25193,
	112,
	256,
	59,
	112,
	8483,
	8484,
	27274,
	114,
	111,
	120,
	187,
	8484,
	256,
	59,
	113,
	8494,
	8495,
	27272,
	256,
	59,
	113,
	8494,
	8475,
	105,
	109,
	59,
	25319,
	112,
	102,
	59,
	49152,
	55349,
	56664,
	256,
	99,
	105,
	8515,
	8518,
	114,
	59,
	24842,
	109,
	384,
	59,
	101,
	108,
	1643,
	8526,
	8528,
	59,
	27278,
	59,
	27280,
	33536,
	62,
	59,
	99,
	100,
	108,
	113,
	114,
	1518,
	8544,
	8554,
	8558,
	8563,
	8569,
	256,
	99,
	105,
	8549,
	8551,
	59,
	27303,
	114,
	59,
	27258,
	111,
	116,
	59,
	25303,
	80,
	97,
	114,
	59,
	27029,
	117,
	101,
	115,
	116,
	59,
	27260,
	640,
	97,
	100,
	101,
	108,
	115,
	8580,
	8554,
	8592,
	1622,
	8603,
	496,
	8585,
	0,
	8590,
	112,
	114,
	111,
	248,
	8350,
	114,
	59,
	27e3,
	113,
	256,
	108,
	113,
	1599,
	8598,
	108,
	101,
	115,
	243,
	8328,
	105,
	237,
	1643,
	256,
	101,
	110,
	8611,
	8621,
	114,
	116,
	110,
	101,
	113,
	113,
	59,
	49152,
	8809,
	65024,
	197,
	8618,
	1280,
	65,
	97,
	98,
	99,
	101,
	102,
	107,
	111,
	115,
	121,
	8644,
	8647,
	8689,
	8693,
	8698,
	8728,
	8733,
	8751,
	8808,
	8829,
	114,
	242,
	928,
	512,
	105,
	108,
	109,
	114,
	8656,
	8660,
	8663,
	8667,
	114,
	115,
	240,
	5252,
	102,
	187,
	8228,
	105,
	108,
	244,
	1705,
	256,
	100,
	114,
	8672,
	8676,
	99,
	121,
	59,
	17482,
	384,
	59,
	99,
	119,
	2292,
	8683,
	8687,
	105,
	114,
	59,
	26952,
	59,
	25005,
	97,
	114,
	59,
	24847,
	105,
	114,
	99,
	59,
	16677,
	384,
	97,
	108,
	114,
	8705,
	8718,
	8723,
	114,
	116,
	115,
	256,
	59,
	117,
	8713,
	8714,
	26213,
	105,
	116,
	187,
	8714,
	108,
	105,
	112,
	59,
	24614,
	99,
	111,
	110,
	59,
	25273,
	114,
	59,
	49152,
	55349,
	56613,
	115,
	256,
	101,
	119,
	8739,
	8745,
	97,
	114,
	111,
	119,
	59,
	26917,
	97,
	114,
	111,
	119,
	59,
	26918,
	640,
	97,
	109,
	111,
	112,
	114,
	8762,
	8766,
	8771,
	8798,
	8803,
	114,
	114,
	59,
	25087,
	116,
	104,
	116,
	59,
	25147,
	107,
	256,
	108,
	114,
	8777,
	8787,
	101,
	102,
	116,
	97,
	114,
	114,
	111,
	119,
	59,
	25001,
	105,
	103,
	104,
	116,
	97,
	114,
	114,
	111,
	119,
	59,
	25002,
	102,
	59,
	49152,
	55349,
	56665,
	98,
	97,
	114,
	59,
	24597,
	384,
	99,
	108,
	116,
	8815,
	8820,
	8824,
	114,
	59,
	49152,
	55349,
	56509,
	97,
	115,
	232,
	8692,
	114,
	111,
	107,
	59,
	16679,
	256,
	98,
	112,
	8834,
	8839,
	117,
	108,
	108,
	59,
	24643,
	104,
	101,
	110,
	187,
	7259,
	2785,
	8867,
	0,
	8874,
	0,
	8888,
	8901,
	8910,
	0,
	8917,
	8947,
	0,
	0,
	8952,
	8994,
	9063,
	9058,
	9087,
	0,
	9094,
	9130,
	9140,
	99,
	117,
	116,
	101,
	32827,
	237,
	16621,
	384,
	59,
	105,
	121,
	1905,
	8880,
	8885,
	114,
	99,
	32827,
	238,
	16622,
	59,
	17464,
	256,
	99,
	120,
	8892,
	8895,
	121,
	59,
	17461,
	99,
	108,
	32827,
	161,
	16545,
	256,
	102,
	114,
	927,
	8905,
	59,
	49152,
	55349,
	56614,
	114,
	97,
	118,
	101,
	32827,
	236,
	16620,
	512,
	59,
	105,
	110,
	111,
	1854,
	8925,
	8937,
	8942,
	256,
	105,
	110,
	8930,
	8934,
	110,
	116,
	59,
	27148,
	116,
	59,
	25133,
	102,
	105,
	110,
	59,
	27100,
	116,
	97,
	59,
	24873,
	108,
	105,
	103,
	59,
	16691,
	384,
	97,
	111,
	112,
	8958,
	8986,
	8989,
	384,
	99,
	103,
	116,
	8965,
	8968,
	8983,
	114,
	59,
	16683,
	384,
	101,
	108,
	112,
	1823,
	8975,
	8979,
	105,
	110,
	229,
	1934,
	97,
	114,
	244,
	1824,
	104,
	59,
	16689,
	102,
	59,
	25271,
	101,
	100,
	59,
	16821,
	640,
	59,
	99,
	102,
	111,
	116,
	1268,
	9004,
	9009,
	9021,
	9025,
	97,
	114,
	101,
	59,
	24837,
	105,
	110,
	256,
	59,
	116,
	9016,
	9017,
	25118,
	105,
	101,
	59,
	27101,
	100,
	111,
	244,
	8985,
	640,
	59,
	99,
	101,
	108,
	112,
	1879,
	9036,
	9040,
	9051,
	9057,
	97,
	108,
	59,
	25274,
	256,
	103,
	114,
	9045,
	9049,
	101,
	114,
	243,
	5475,
	227,
	9037,
	97,
	114,
	104,
	107,
	59,
	27159,
	114,
	111,
	100,
	59,
	27196,
	512,
	99,
	103,
	112,
	116,
	9071,
	9074,
	9078,
	9083,
	121,
	59,
	17489,
	111,
	110,
	59,
	16687,
	102,
	59,
	49152,
	55349,
	56666,
	97,
	59,
	17337,
	117,
	101,
	115,
	116,
	32827,
	191,
	16575,
	256,
	99,
	105,
	9098,
	9103,
	114,
	59,
	49152,
	55349,
	56510,
	110,
	640,
	59,
	69,
	100,
	115,
	118,
	1268,
	9115,
	9117,
	9121,
	1267,
	59,
	25337,
	111,
	116,
	59,
	25333,
	256,
	59,
	118,
	9126,
	9127,
	25332,
	59,
	25331,
	256,
	59,
	105,
	1911,
	9134,
	108,
	100,
	101,
	59,
	16681,
	491,
	9144,
	0,
	9148,
	99,
	121,
	59,
	17494,
	108,
	32827,
	239,
	16623,
	768,
	99,
	102,
	109,
	111,
	115,
	117,
	9164,
	9175,
	9180,
	9185,
	9191,
	9205,
	256,
	105,
	121,
	9169,
	9173,
	114,
	99,
	59,
	16693,
	59,
	17465,
	114,
	59,
	49152,
	55349,
	56615,
	97,
	116,
	104,
	59,
	16951,
	112,
	102,
	59,
	49152,
	55349,
	56667,
	483,
	9196,
	0,
	9201,
	114,
	59,
	49152,
	55349,
	56511,
	114,
	99,
	121,
	59,
	17496,
	107,
	99,
	121,
	59,
	17492,
	1024,
	97,
	99,
	102,
	103,
	104,
	106,
	111,
	115,
	9227,
	9238,
	9250,
	9255,
	9261,
	9265,
	9269,
	9275,
	112,
	112,
	97,
	256,
	59,
	118,
	9235,
	9236,
	17338,
	59,
	17392,
	256,
	101,
	121,
	9243,
	9248,
	100,
	105,
	108,
	59,
	16695,
	59,
	17466,
	114,
	59,
	49152,
	55349,
	56616,
	114,
	101,
	101,
	110,
	59,
	16696,
	99,
	121,
	59,
	17477,
	99,
	121,
	59,
	17500,
	112,
	102,
	59,
	49152,
	55349,
	56668,
	99,
	114,
	59,
	49152,
	55349,
	56512,
	2944,
	65,
	66,
	69,
	72,
	97,
	98,
	99,
	100,
	101,
	102,
	103,
	104,
	106,
	108,
	109,
	110,
	111,
	112,
	114,
	115,
	116,
	117,
	118,
	9328,
	9345,
	9350,
	9357,
	9361,
	9486,
	9533,
	9562,
	9600,
	9806,
	9822,
	9829,
	9849,
	9853,
	9882,
	9906,
	9944,
	10077,
	10088,
	10123,
	10176,
	10241,
	10258,
	384,
	97,
	114,
	116,
	9335,
	9338,
	9340,
	114,
	242,
	2502,
	242,
	917,
	97,
	105,
	108,
	59,
	26907,
	97,
	114,
	114,
	59,
	26894,
	256,
	59,
	103,
	2452,
	9355,
	59,
	27275,
	97,
	114,
	59,
	26978,
	2403,
	9381,
	0,
	9386,
	0,
	9393,
	0,
	0,
	0,
	0,
	0,
	9397,
	9402,
	0,
	9414,
	9416,
	9421,
	0,
	9465,
	117,
	116,
	101,
	59,
	16698,
	109,
	112,
	116,
	121,
	118,
	59,
	27060,
	114,
	97,
	238,
	2124,
	98,
	100,
	97,
	59,
	17339,
	103,
	384,
	59,
	100,
	108,
	2190,
	9409,
	9411,
	59,
	27025,
	229,
	2190,
	59,
	27269,
	117,
	111,
	32827,
	171,
	16555,
	114,
	1024,
	59,
	98,
	102,
	104,
	108,
	112,
	115,
	116,
	2201,
	9438,
	9446,
	9449,
	9451,
	9454,
	9457,
	9461,
	256,
	59,
	102,
	2205,
	9443,
	115,
	59,
	26911,
	115,
	59,
	26909,
	235,
	8786,
	112,
	59,
	25003,
	108,
	59,
	26937,
	105,
	109,
	59,
	26995,
	108,
	59,
	24994,
	384,
	59,
	97,
	101,
	9471,
	9472,
	9476,
	27307,
	105,
	108,
	59,
	26905,
	256,
	59,
	115,
	9481,
	9482,
	27309,
	59,
	49152,
	10925,
	65024,
	384,
	97,
	98,
	114,
	9493,
	9497,
	9501,
	114,
	114,
	59,
	26892,
	114,
	107,
	59,
	26482,
	256,
	97,
	107,
	9506,
	9516,
	99,
	256,
	101,
	107,
	9512,
	9514,
	59,
	16507,
	59,
	16475,
	256,
	101,
	115,
	9521,
	9523,
	59,
	27019,
	108,
	256,
	100,
	117,
	9529,
	9531,
	59,
	27023,
	59,
	27021,
	512,
	97,
	101,
	117,
	121,
	9542,
	9547,
	9558,
	9560,
	114,
	111,
	110,
	59,
	16702,
	256,
	100,
	105,
	9552,
	9556,
	105,
	108,
	59,
	16700,
	236,
	2224,
	226,
	9513,
	59,
	17467,
	512,
	99,
	113,
	114,
	115,
	9571,
	9574,
	9581,
	9597,
	97,
	59,
	26934,
	117,
	111,
	256,
	59,
	114,
	3609,
	5958,
	256,
	100,
	117,
	9586,
	9591,
	104,
	97,
	114,
	59,
	26983,
	115,
	104,
	97,
	114,
	59,
	26955,
	104,
	59,
	25010,
	640,
	59,
	102,
	103,
	113,
	115,
	9611,
	9612,
	2441,
	9715,
	9727,
	25188,
	116,
	640,
	97,
	104,
	108,
	114,
	116,
	9624,
	9636,
	9655,
	9666,
	9704,
	114,
	114,
	111,
	119,
	256,
	59,
	116,
	2201,
	9633,
	97,
	233,
	9462,
	97,
	114,
	112,
	111,
	111,
	110,
	256,
	100,
	117,
	9647,
	9652,
	111,
	119,
	110,
	187,
	1114,
	112,
	187,
	2406,
	101,
	102,
	116,
	97,
	114,
	114,
	111,
	119,
	115,
	59,
	25031,
	105,
	103,
	104,
	116,
	384,
	97,
	104,
	115,
	9677,
	9686,
	9694,
	114,
	114,
	111,
	119,
	256,
	59,
	115,
	2292,
	2215,
	97,
	114,
	112,
	111,
	111,
	110,
	243,
	3992,
	113,
	117,
	105,
	103,
	97,
	114,
	114,
	111,
	247,
	8688,
	104,
	114,
	101,
	101,
	116,
	105,
	109,
	101,
	115,
	59,
	25291,
	384,
	59,
	113,
	115,
	9611,
	2451,
	9722,
	108,
	97,
	110,
	244,
	2476,
	640,
	59,
	99,
	100,
	103,
	115,
	2476,
	9738,
	9741,
	9757,
	9768,
	99,
	59,
	27304,
	111,
	116,
	256,
	59,
	111,
	9748,
	9749,
	27263,
	256,
	59,
	114,
	9754,
	9755,
	27265,
	59,
	27267,
	256,
	59,
	101,
	9762,
	9765,
	49152,
	8922,
	65024,
	115,
	59,
	27283,
	640,
	97,
	100,
	101,
	103,
	115,
	9779,
	9785,
	9789,
	9801,
	9803,
	112,
	112,
	114,
	111,
	248,
	9414,
	111,
	116,
	59,
	25302,
	113,
	256,
	103,
	113,
	9795,
	9797,
	244,
	2441,
	103,
	116,
	242,
	9356,
	244,
	2459,
	105,
	237,
	2482,
	384,
	105,
	108,
	114,
	9813,
	2273,
	9818,
	115,
	104,
	116,
	59,
	27004,
	59,
	49152,
	55349,
	56617,
	256,
	59,
	69,
	2460,
	9827,
	59,
	27281,
	353,
	9833,
	9846,
	114,
	256,
	100,
	117,
	9650,
	9838,
	256,
	59,
	108,
	2405,
	9843,
	59,
	26986,
	108,
	107,
	59,
	25988,
	99,
	121,
	59,
	17497,
	640,
	59,
	97,
	99,
	104,
	116,
	2632,
	9864,
	9867,
	9873,
	9878,
	114,
	242,
	9665,
	111,
	114,
	110,
	101,
	242,
	7432,
	97,
	114,
	100,
	59,
	26987,
	114,
	105,
	59,
	26106,
	256,
	105,
	111,
	9887,
	9892,
	100,
	111,
	116,
	59,
	16704,
	117,
	115,
	116,
	256,
	59,
	97,
	9900,
	9901,
	25520,
	99,
	104,
	101,
	187,
	9901,
	512,
	69,
	97,
	101,
	115,
	9915,
	9917,
	9929,
	9940,
	59,
	25192,
	112,
	256,
	59,
	112,
	9923,
	9924,
	27273,
	114,
	111,
	120,
	187,
	9924,
	256,
	59,
	113,
	9934,
	9935,
	27271,
	256,
	59,
	113,
	9934,
	9915,
	105,
	109,
	59,
	25318,
	1024,
	97,
	98,
	110,
	111,
	112,
	116,
	119,
	122,
	9961,
	9972,
	9975,
	10010,
	10031,
	10049,
	10055,
	10064,
	256,
	110,
	114,
	9966,
	9969,
	103,
	59,
	26604,
	114,
	59,
	25085,
	114,
	235,
	2241,
	103,
	384,
	108,
	109,
	114,
	9983,
	9997,
	10004,
	101,
	102,
	116,
	256,
	97,
	114,
	2534,
	9991,
	105,
	103,
	104,
	116,
	225,
	2546,
	97,
	112,
	115,
	116,
	111,
	59,
	26620,
	105,
	103,
	104,
	116,
	225,
	2557,
	112,
	97,
	114,
	114,
	111,
	119,
	256,
	108,
	114,
	10021,
	10025,
	101,
	102,
	244,
	9453,
	105,
	103,
	104,
	116,
	59,
	25004,
	384,
	97,
	102,
	108,
	10038,
	10041,
	10045,
	114,
	59,
	27013,
	59,
	49152,
	55349,
	56669,
	117,
	115,
	59,
	27181,
	105,
	109,
	101,
	115,
	59,
	27188,
	353,
	10059,
	10063,
	115,
	116,
	59,
	25111,
	225,
	4942,
	384,
	59,
	101,
	102,
	10071,
	10072,
	6144,
	26058,
	110,
	103,
	101,
	187,
	10072,
	97,
	114,
	256,
	59,
	108,
	10084,
	10085,
	16424,
	116,
	59,
	27027,
	640,
	97,
	99,
	104,
	109,
	116,
	10099,
	10102,
	10108,
	10117,
	10119,
	114,
	242,
	2216,
	111,
	114,
	110,
	101,
	242,
	7564,
	97,
	114,
	256,
	59,
	100,
	3992,
	10115,
	59,
	26989,
	59,
	24590,
	114,
	105,
	59,
	25279,
	768,
	97,
	99,
	104,
	105,
	113,
	116,
	10136,
	10141,
	2624,
	10146,
	10158,
	10171,
	113,
	117,
	111,
	59,
	24633,
	114,
	59,
	49152,
	55349,
	56513,
	109,
	384,
	59,
	101,
	103,
	2482,
	10154,
	10156,
	59,
	27277,
	59,
	27279,
	256,
	98,
	117,
	9514,
	10163,
	111,
	256,
	59,
	114,
	3615,
	10169,
	59,
	24602,
	114,
	111,
	107,
	59,
	16706,
	33792,
	60,
	59,
	99,
	100,
	104,
	105,
	108,
	113,
	114,
	2091,
	10194,
	9785,
	10204,
	10208,
	10213,
	10218,
	10224,
	256,
	99,
	105,
	10199,
	10201,
	59,
	27302,
	114,
	59,
	27257,
	114,
	101,
	229,
	9714,
	109,
	101,
	115,
	59,
	25289,
	97,
	114,
	114,
	59,
	26998,
	117,
	101,
	115,
	116,
	59,
	27259,
	256,
	80,
	105,
	10229,
	10233,
	97,
	114,
	59,
	27030,
	384,
	59,
	101,
	102,
	10240,
	2349,
	6171,
	26051,
	114,
	256,
	100,
	117,
	10247,
	10253,
	115,
	104,
	97,
	114,
	59,
	26954,
	104,
	97,
	114,
	59,
	26982,
	256,
	101,
	110,
	10263,
	10273,
	114,
	116,
	110,
	101,
	113,
	113,
	59,
	49152,
	8808,
	65024,
	197,
	10270,
	1792,
	68,
	97,
	99,
	100,
	101,
	102,
	104,
	105,
	108,
	110,
	111,
	112,
	115,
	117,
	10304,
	10309,
	10370,
	10382,
	10387,
	10400,
	10405,
	10408,
	10458,
	10466,
	10468,
	2691,
	10483,
	10498,
	68,
	111,
	116,
	59,
	25146,
	512,
	99,
	108,
	112,
	114,
	10318,
	10322,
	10339,
	10365,
	114,
	32827,
	175,
	16559,
	256,
	101,
	116,
	10327,
	10329,
	59,
	26178,
	256,
	59,
	101,
	10334,
	10335,
	26400,
	115,
	101,
	187,
	10335,
	256,
	59,
	115,
	4155,
	10344,
	116,
	111,
	512,
	59,
	100,
	108,
	117,
	4155,
	10355,
	10359,
	10363,
	111,
	119,
	238,
	1164,
	101,
	102,
	244,
	2319,
	240,
	5073,
	107,
	101,
	114,
	59,
	26030,
	256,
	111,
	121,
	10375,
	10380,
	109,
	109,
	97,
	59,
	27177,
	59,
	17468,
	97,
	115,
	104,
	59,
	24596,
	97,
	115,
	117,
	114,
	101,
	100,
	97,
	110,
	103,
	108,
	101,
	187,
	5670,
	114,
	59,
	49152,
	55349,
	56618,
	111,
	59,
	24871,
	384,
	99,
	100,
	110,
	10415,
	10420,
	10441,
	114,
	111,
	32827,
	181,
	16565,
	512,
	59,
	97,
	99,
	100,
	5220,
	10429,
	10432,
	10436,
	115,
	244,
	5799,
	105,
	114,
	59,
	27376,
	111,
	116,
	32955,
	183,
	437,
	117,
	115,
	384,
	59,
	98,
	100,
	10450,
	6403,
	10451,
	25106,
	256,
	59,
	117,
	7484,
	10456,
	59,
	27178,
	355,
	10462,
	10465,
	112,
	59,
	27355,
	242,
	8722,
	240,
	2689,
	256,
	100,
	112,
	10473,
	10478,
	101,
	108,
	115,
	59,
	25255,
	102,
	59,
	49152,
	55349,
	56670,
	256,
	99,
	116,
	10488,
	10493,
	114,
	59,
	49152,
	55349,
	56514,
	112,
	111,
	115,
	187,
	5533,
	384,
	59,
	108,
	109,
	10505,
	10506,
	10509,
	17340,
	116,
	105,
	109,
	97,
	112,
	59,
	25272,
	3072,
	71,
	76,
	82,
	86,
	97,
	98,
	99,
	100,
	101,
	102,
	103,
	104,
	105,
	106,
	108,
	109,
	111,
	112,
	114,
	115,
	116,
	117,
	118,
	119,
	10562,
	10579,
	10622,
	10633,
	10648,
	10714,
	10729,
	10773,
	10778,
	10840,
	10845,
	10883,
	10901,
	10916,
	10920,
	11012,
	11015,
	11076,
	11135,
	11182,
	11316,
	11367,
	11388,
	11497,
	256,
	103,
	116,
	10567,
	10571,
	59,
	49152,
	8921,
	824,
	256,
	59,
	118,
	10576,
	3023,
	49152,
	8811,
	8402,
	384,
	101,
	108,
	116,
	10586,
	10610,
	10614,
	102,
	116,
	256,
	97,
	114,
	10593,
	10599,
	114,
	114,
	111,
	119,
	59,
	25037,
	105,
	103,
	104,
	116,
	97,
	114,
	114,
	111,
	119,
	59,
	25038,
	59,
	49152,
	8920,
	824,
	256,
	59,
	118,
	10619,
	3143,
	49152,
	8810,
	8402,
	105,
	103,
	104,
	116,
	97,
	114,
	114,
	111,
	119,
	59,
	25039,
	256,
	68,
	100,
	10638,
	10643,
	97,
	115,
	104,
	59,
	25263,
	97,
	115,
	104,
	59,
	25262,
	640,
	98,
	99,
	110,
	112,
	116,
	10659,
	10663,
	10668,
	10673,
	10700,
	108,
	97,
	187,
	734,
	117,
	116,
	101,
	59,
	16708,
	103,
	59,
	49152,
	8736,
	8402,
	640,
	59,
	69,
	105,
	111,
	112,
	3460,
	10684,
	10688,
	10693,
	10696,
	59,
	49152,
	10864,
	824,
	100,
	59,
	49152,
	8779,
	824,
	115,
	59,
	16713,
	114,
	111,
	248,
	3460,
	117,
	114,
	256,
	59,
	97,
	10707,
	10708,
	26222,
	108,
	256,
	59,
	115,
	10707,
	2872,
	499,
	10719,
	0,
	10723,
	112,
	32955,
	160,
	2871,
	109,
	112,
	256,
	59,
	101,
	3065,
	3072,
	640,
	97,
	101,
	111,
	117,
	121,
	10740,
	10750,
	10755,
	10768,
	10771,
	496,
	10745,
	0,
	10747,
	59,
	27203,
	111,
	110,
	59,
	16712,
	100,
	105,
	108,
	59,
	16710,
	110,
	103,
	256,
	59,
	100,
	3454,
	10762,
	111,
	116,
	59,
	49152,
	10861,
	824,
	112,
	59,
	27202,
	59,
	17469,
	97,
	115,
	104,
	59,
	24595,
	896,
	59,
	65,
	97,
	100,
	113,
	115,
	120,
	2962,
	10793,
	10797,
	10811,
	10817,
	10821,
	10832,
	114,
	114,
	59,
	25047,
	114,
	256,
	104,
	114,
	10803,
	10806,
	107,
	59,
	26916,
	256,
	59,
	111,
	5106,
	5104,
	111,
	116,
	59,
	49152,
	8784,
	824,
	117,
	105,
	246,
	2915,
	256,
	101,
	105,
	10826,
	10830,
	97,
	114,
	59,
	26920,
	237,
	2968,
	105,
	115,
	116,
	256,
	59,
	115,
	2976,
	2975,
	114,
	59,
	49152,
	55349,
	56619,
	512,
	69,
	101,
	115,
	116,
	3013,
	10854,
	10873,
	10876,
	384,
	59,
	113,
	115,
	3004,
	10861,
	3041,
	384,
	59,
	113,
	115,
	3004,
	3013,
	10868,
	108,
	97,
	110,
	244,
	3042,
	105,
	237,
	3050,
	256,
	59,
	114,
	2998,
	10881,
	187,
	2999,
	384,
	65,
	97,
	112,
	10890,
	10893,
	10897,
	114,
	242,
	10609,
	114,
	114,
	59,
	25006,
	97,
	114,
	59,
	27378,
	384,
	59,
	115,
	118,
	3981,
	10908,
	3980,
	256,
	59,
	100,
	10913,
	10914,
	25340,
	59,
	25338,
	99,
	121,
	59,
	17498,
	896,
	65,
	69,
	97,
	100,
	101,
	115,
	116,
	10935,
	10938,
	10942,
	10946,
	10949,
	10998,
	11001,
	114,
	242,
	10598,
	59,
	49152,
	8806,
	824,
	114,
	114,
	59,
	24986,
	114,
	59,
	24613,
	512,
	59,
	102,
	113,
	115,
	3131,
	10958,
	10979,
	10991,
	116,
	256,
	97,
	114,
	10964,
	10969,
	114,
	114,
	111,
	247,
	10945,
	105,
	103,
	104,
	116,
	97,
	114,
	114,
	111,
	247,
	10896,
	384,
	59,
	113,
	115,
	3131,
	10938,
	10986,
	108,
	97,
	110,
	244,
	3157,
	256,
	59,
	115,
	3157,
	10996,
	187,
	3126,
	105,
	237,
	3165,
	256,
	59,
	114,
	3125,
	11006,
	105,
	256,
	59,
	101,
	3098,
	3109,
	105,
	228,
	3472,
	256,
	112,
	116,
	11020,
	11025,
	102,
	59,
	49152,
	55349,
	56671,
	33152,
	172,
	59,
	105,
	110,
	11033,
	11034,
	11062,
	16556,
	110,
	512,
	59,
	69,
	100,
	118,
	2953,
	11044,
	11048,
	11054,
	59,
	49152,
	8953,
	824,
	111,
	116,
	59,
	49152,
	8949,
	824,
	481,
	2953,
	11059,
	11061,
	59,
	25335,
	59,
	25334,
	105,
	256,
	59,
	118,
	3256,
	11068,
	481,
	3256,
	11073,
	11075,
	59,
	25342,
	59,
	25341,
	384,
	97,
	111,
	114,
	11083,
	11107,
	11113,
	114,
	512,
	59,
	97,
	115,
	116,
	2939,
	11093,
	11098,
	11103,
	108,
	108,
	101,
	236,
	2939,
	108,
	59,
	49152,
	11005,
	8421,
	59,
	49152,
	8706,
	824,
	108,
	105,
	110,
	116,
	59,
	27156,
	384,
	59,
	99,
	101,
	3218,
	11120,
	11123,
	117,
	229,
	3237,
	256,
	59,
	99,
	3224,
	11128,
	256,
	59,
	101,
	3218,
	11133,
	241,
	3224,
	512,
	65,
	97,
	105,
	116,
	11144,
	11147,
	11165,
	11175,
	114,
	242,
	10632,
	114,
	114,
	384,
	59,
	99,
	119,
	11156,
	11157,
	11161,
	24987,
	59,
	49152,
	10547,
	824,
	59,
	49152,
	8605,
	824,
	103,
	104,
	116,
	97,
	114,
	114,
	111,
	119,
	187,
	11157,
	114,
	105,
	256,
	59,
	101,
	3275,
	3286,
	896,
	99,
	104,
	105,
	109,
	112,
	113,
	117,
	11197,
	11213,
	11225,
	11012,
	2936,
	11236,
	11247,
	512,
	59,
	99,
	101,
	114,
	3378,
	11206,
	3383,
	11209,
	117,
	229,
	3397,
	59,
	49152,
	55349,
	56515,
	111,
	114,
	116,
	621,
	11013,
	0,
	0,
	11222,
	97,
	114,
	225,
	11094,
	109,
	256,
	59,
	101,
	3438,
	11231,
	256,
	59,
	113,
	3444,
	3443,
	115,
	117,
	256,
	98,
	112,
	11243,
	11245,
	229,
	3320,
	229,
	3339,
	384,
	98,
	99,
	112,
	11254,
	11281,
	11289,
	512,
	59,
	69,
	101,
	115,
	11263,
	11264,
	3362,
	11268,
	25220,
	59,
	49152,
	10949,
	824,
	101,
	116,
	256,
	59,
	101,
	3355,
	11275,
	113,
	256,
	59,
	113,
	3363,
	11264,
	99,
	256,
	59,
	101,
	3378,
	11287,
	241,
	3384,
	512,
	59,
	69,
	101,
	115,
	11298,
	11299,
	3423,
	11303,
	25221,
	59,
	49152,
	10950,
	824,
	101,
	116,
	256,
	59,
	101,
	3416,
	11310,
	113,
	256,
	59,
	113,
	3424,
	11299,
	512,
	103,
	105,
	108,
	114,
	11325,
	11327,
	11333,
	11335,
	236,
	3031,
	108,
	100,
	101,
	32827,
	241,
	16625,
	231,
	3139,
	105,
	97,
	110,
	103,
	108,
	101,
	256,
	108,
	114,
	11346,
	11356,
	101,
	102,
	116,
	256,
	59,
	101,
	3098,
	11354,
	241,
	3110,
	105,
	103,
	104,
	116,
	256,
	59,
	101,
	3275,
	11365,
	241,
	3287,
	256,
	59,
	109,
	11372,
	11373,
	17341,
	384,
	59,
	101,
	115,
	11380,
	11381,
	11385,
	16419,
	114,
	111,
	59,
	24854,
	112,
	59,
	24583,
	1152,
	68,
	72,
	97,
	100,
	103,
	105,
	108,
	114,
	115,
	11407,
	11412,
	11417,
	11422,
	11427,
	11440,
	11446,
	11475,
	11491,
	97,
	115,
	104,
	59,
	25261,
	97,
	114,
	114,
	59,
	26884,
	112,
	59,
	49152,
	8781,
	8402,
	97,
	115,
	104,
	59,
	25260,
	256,
	101,
	116,
	11432,
	11436,
	59,
	49152,
	8805,
	8402,
	59,
	49152,
	62,
	8402,
	110,
	102,
	105,
	110,
	59,
	27102,
	384,
	65,
	101,
	116,
	11453,
	11457,
	11461,
	114,
	114,
	59,
	26882,
	59,
	49152,
	8804,
	8402,
	256,
	59,
	114,
	11466,
	11469,
	49152,
	60,
	8402,
	105,
	101,
	59,
	49152,
	8884,
	8402,
	256,
	65,
	116,
	11480,
	11484,
	114,
	114,
	59,
	26883,
	114,
	105,
	101,
	59,
	49152,
	8885,
	8402,
	105,
	109,
	59,
	49152,
	8764,
	8402,
	384,
	65,
	97,
	110,
	11504,
	11508,
	11522,
	114,
	114,
	59,
	25046,
	114,
	256,
	104,
	114,
	11514,
	11517,
	107,
	59,
	26915,
	256,
	59,
	111,
	5095,
	5093,
	101,
	97,
	114,
	59,
	26919,
	4691,
	6805,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	0,
	11565,
	0,
	11576,
	11592,
	11616,
	11621,
	11634,
	11652,
	6919,
	0,
	0,
	11661,
	11691,
	0,
	11720,
	11726,
	0,
	11740,
	11801,
	11819,
	11838,
	11843,
	256,
	99,
	115,
	11569,
	6807,
	117,
	116,
	101,
	32827,
	243,
	16627,
	256,
	105,
	121,
	11580,
	11589,
	114,
	256,
	59,
	99,
	6814,
	11586,
	32827,
	244,
	16628,
	59,
	17470,
	640,
	97,
	98,
	105,
	111,
	115,
	6816,
	11602,
	11607,
	456,
	11610,
	108,
	97,
	99,
	59,
	16721,
	118,
	59,
	27192,
	111,
	108,
	100,
	59,
	27068,
	108,
	105,
	103,
	59,
	16723,
	256,
	99,
	114,
	11625,
	11629,
	105,
	114,
	59,
	27071,
	59,
	49152,
	55349,
	56620,
	879,
	11641,
	0,
	0,
	11644,
	0,
	11650,
	110,
	59,
	17115,
	97,
	118,
	101,
	32827,
	242,
	16626,
	59,
	27073,
	256,
	98,
	109,
	11656,
	3572,
	97,
	114,
	59,
	27061,
	512,
	97,
	99,
	105,
	116,
	11669,
	11672,
	11685,
	11688,
	114,
	242,
	6784,
	256,
	105,
	114,
	11677,
	11680,
	114,
	59,
	27070,
	111,
	115,
	115,
	59,
	27067,
	110,
	229,
	3666,
	59,
	27072,
	384,
	97,
	101,
	105,
	11697,
	11701,
	11705,
	99,
	114,
	59,
	16717,
	103,
	97,
	59,
	17353,
	384,
	99,
	100,
	110,
	11712,
	11717,
	461,
	114,
	111,
	110,
	59,
	17343,
	59,
	27062,
	112,
	102,
	59,
	49152,
	55349,
	56672,
	384,
	97,
	101,
	108,
	11732,
	11735,
	466,
	114,
	59,
	27063,
	114,
	112,
	59,
	27065,
	896,
	59,
	97,
	100,
	105,
	111,
	115,
	118,
	11754,
	11755,
	11758,
	11784,
	11789,
	11792,
	11798,
	25128,
	114,
	242,
	6790,
	512,
	59,
	101,
	102,
	109,
	11767,
	11768,
	11778,
	11781,
	27229,
	114,
	256,
	59,
	111,
	11774,
	11775,
	24884,
	102,
	187,
	11775,
	32827,
	170,
	16554,
	32827,
	186,
	16570,
	103,
	111,
	102,
	59,
	25270,
	114,
	59,
	27222,
	108,
	111,
	112,
	101,
	59,
	27223,
	59,
	27227,
	384,
	99,
	108,
	111,
	11807,
	11809,
	11815,
	242,
	11777,
	97,
	115,
	104,
	32827,
	248,
	16632,
	108,
	59,
	25240,
	105,
	364,
	11823,
	11828,
	100,
	101,
	32827,
	245,
	16629,
	101,
	115,
	256,
	59,
	97,
	475,
	11834,
	115,
	59,
	27190,
	109,
	108,
	32827,
	246,
	16630,
	98,
	97,
	114,
	59,
	25405,
	2785,
	11870,
	0,
	11901,
	0,
	11904,
	11933,
	0,
	11938,
	11961,
	0,
	0,
	11979,
	3740,
	0,
	12051,
	0,
	0,
	12075,
	12220,
	0,
	12232,
	114,
	512,
	59,
	97,
	115,
	116,
	1027,
	11879,
	11890,
	3717,
	33024,
	182,
	59,
	108,
	11885,
	11886,
	16566,
	108,
	101,
	236,
	1027,
	617,
	11896,
	0,
	0,
	11899,
	109,
	59,
	27379,
	59,
	27389,
	121,
	59,
	17471,
	114,
	640,
	99,
	105,
	109,
	112,
	116,
	11915,
	11919,
	11923,
	6245,
	11927,
	110,
	116,
	59,
	16421,
	111,
	100,
	59,
	16430,
	105,
	108,
	59,
	24624,
	101,
	110,
	107,
	59,
	24625,
	114,
	59,
	49152,
	55349,
	56621,
	384,
	105,
	109,
	111,
	11944,
	11952,
	11956,
	256,
	59,
	118,
	11949,
	11950,
	17350,
	59,
	17365,
	109,
	97,
	244,
	2678,
	110,
	101,
	59,
	26126,
	384,
	59,
	116,
	118,
	11967,
	11968,
	11976,
	17344,
	99,
	104,
	102,
	111,
	114,
	107,
	187,
	8189,
	59,
	17366,
	256,
	97,
	117,
	11983,
	11999,
	110,
	256,
	99,
	107,
	11989,
	11997,
	107,
	256,
	59,
	104,
	8692,
	11995,
	59,
	24846,
	246,
	8692,
	115,
	1152,
	59,
	97,
	98,
	99,
	100,
	101,
	109,
	115,
	116,
	12019,
	12020,
	6408,
	12025,
	12029,
	12036,
	12038,
	12042,
	12046,
	16427,
	99,
	105,
	114,
	59,
	27171,
	105,
	114,
	59,
	27170,
	256,
	111,
	117,
	7488,
	12034,
	59,
	27173,
	59,
	27250,
	110,
	32955,
	177,
	3741,
	105,
	109,
	59,
	27174,
	119,
	111,
	59,
	27175,
	384,
	105,
	112,
	117,
	12057,
	12064,
	12069,
	110,
	116,
	105,
	110,
	116,
	59,
	27157,
	102,
	59,
	49152,
	55349,
	56673,
	110,
	100,
	32827,
	163,
	16547,
	1280,
	59,
	69,
	97,
	99,
	101,
	105,
	110,
	111,
	115,
	117,
	3784,
	12095,
	12097,
	12100,
	12103,
	12161,
	12169,
	12178,
	12158,
	12214,
	59,
	27315,
	112,
	59,
	27319,
	117,
	229,
	3801,
	256,
	59,
	99,
	3790,
	12108,
	768,
	59,
	97,
	99,
	101,
	110,
	115,
	3784,
	12121,
	12127,
	12134,
	12136,
	12158,
	112,
	112,
	114,
	111,
	248,
	12099,
	117,
	114,
	108,
	121,
	101,
	241,
	3801,
	241,
	3790,
	384,
	97,
	101,
	115,
	12143,
	12150,
	12154,
	112,
	112,
	114,
	111,
	120,
	59,
	27321,
	113,
	113,
	59,
	27317,
	105,
	109,
	59,
	25320,
	105,
	237,
	3807,
	109,
	101,
	256,
	59,
	115,
	12168,
	3758,
	24626,
	384,
	69,
	97,
	115,
	12152,
	12176,
	12154,
	240,
	12149,
	384,
	100,
	102,
	112,
	3820,
	12185,
	12207,
	384,
	97,
	108,
	115,
	12192,
	12197,
	12202,
	108,
	97,
	114,
	59,
	25390,
	105,
	110,
	101,
	59,
	25362,
	117,
	114,
	102,
	59,
	25363,
	256,
	59,
	116,
	3835,
	12212,
	239,
	3835,
	114,
	101,
	108,
	59,
	25264,
	256,
	99,
	105,
	12224,
	12229,
	114,
	59,
	49152,
	55349,
	56517,
	59,
	17352,
	110,
	99,
	115,
	112,
	59,
	24584,
	768,
	102,
	105,
	111,
	112,
	115,
	117,
	12250,
	8930,
	12255,
	12261,
	12267,
	12273,
	114,
	59,
	49152,
	55349,
	56622,
	112,
	102,
	59,
	49152,
	55349,
	56674,
	114,
	105,
	109,
	101,
	59,
	24663,
	99,
	114,
	59,
	49152,
	55349,
	56518,
	384,
	97,
	101,
	111,
	12280,
	12297,
	12307,
	116,
	256,
	101,
	105,
	12286,
	12293,
	114,
	110,
	105,
	111,
	110,
	243,
	1712,
	110,
	116,
	59,
	27158,
	115,
	116,
	256,
	59,
	101,
	12304,
	12305,
	16447,
	241,
	7961,
	244,
	3860,
	2688,
	65,
	66,
	72,
	97,
	98,
	99,
	100,
	101,
	102,
	104,
	105,
	108,
	109,
	110,
	111,
	112,
	114,
	115,
	116,
	117,
	120,
	12352,
	12369,
	12373,
	12377,
	12512,
	12558,
	12587,
	12615,
	12642,
	12658,
	12686,
	12806,
	12821,
	12836,
	12841,
	12888,
	12910,
	12914,
	12944,
	12976,
	12983,
	384,
	97,
	114,
	116,
	12359,
	12362,
	12364,
	114,
	242,
	4275,
	242,
	989,
	97,
	105,
	108,
	59,
	26908,
	97,
	114,
	242,
	7269,
	97,
	114,
	59,
	26980,
	896,
	99,
	100,
	101,
	110,
	113,
	114,
	116,
	12392,
	12405,
	12408,
	12415,
	12431,
	12436,
	12492,
	256,
	101,
	117,
	12397,
	12401,
	59,
	49152,
	8765,
	817,
	116,
	101,
	59,
	16725,
	105,
	227,
	4462,
	109,
	112,
	116,
	121,
	118,
	59,
	27059,
	103,
	512,
	59,
	100,
	101,
	108,
	4049,
	12425,
	12427,
	12429,
	59,
	27026,
	59,
	27045,
	229,
	4049,
	117,
	111,
	32827,
	187,
	16571,
	114,
	1408,
	59,
	97,
	98,
	99,
	102,
	104,
	108,
	112,
	115,
	116,
	119,
	4060,
	12460,
	12463,
	12471,
	12473,
	12476,
	12478,
	12480,
	12483,
	12487,
	12490,
	112,
	59,
	26997,
	256,
	59,
	102,
	4064,
	12468,
	115,
	59,
	26912,
	59,
	26931,
	115,
	59,
	26910,
	235,
	8797,
	240,
	10030,
	108,
	59,
	26949,
	105,
	109,
	59,
	26996,
	108,
	59,
	24995,
	59,
	24989,
	256,
	97,
	105,
	12497,
	12501,
	105,
	108,
	59,
	26906,
	111,
	256,
	59,
	110,
	12507,
	12508,
	25142,
	97,
	108,
	243,
	3870,
	384,
	97,
	98,
	114,
	12519,
	12522,
	12526,
	114,
	242,
	6117,
	114,
	107,
	59,
	26483,
	256,
	97,
	107,
	12531,
	12541,
	99,
	256,
	101,
	107,
	12537,
	12539,
	59,
	16509,
	59,
	16477,
	256,
	101,
	115,
	12546,
	12548,
	59,
	27020,
	108,
	256,
	100,
	117,
	12554,
	12556,
	59,
	27022,
	59,
	27024,
	512,
	97,
	101,
	117,
	121,
	12567,
	12572,
	12583,
	12585,
	114,
	111,
	110,
	59,
	16729,
	256,
	100,
	105,
	12577,
	12581,
	105,
	108,
	59,
	16727,
	236,
	4082,
	226,
	12538,
	59,
	17472,
	512,
	99,
	108,
	113,
	115,
	12596,
	12599,
	12605,
	12612,
	97,
	59,
	26935,
	100,
	104,
	97,
	114,
	59,
	26985,
	117,
	111,
	256,
	59,
	114,
	526,
	525,
	104,
	59,
	25011,
	384,
	97,
	99,
	103,
	12622,
	12639,
	3908,
	108,
	512,
	59,
	105,
	112,
	115,
	3960,
	12632,
	12635,
	4252,
	110,
	229,
	4283,
	97,
	114,
	244,
	4009,
	116,
	59,
	26029,
	384,
	105,
	108,
	114,
	12649,
	4131,
	12654,
	115,
	104,
	116,
	59,
	27005,
	59,
	49152,
	55349,
	56623,
	256,
	97,
	111,
	12663,
	12678,
	114,
	256,
	100,
	117,
	12669,
	12671,
	187,
	1147,
	256,
	59,
	108,
	4241,
	12676,
	59,
	26988,
	256,
	59,
	118,
	12683,
	12684,
	17345,
	59,
	17393,
	384,
	103,
	110,
	115,
	12693,
	12793,
	12796,
	104,
	116,
	768,
	97,
	104,
	108,
	114,
	115,
	116,
	12708,
	12720,
	12738,
	12760,
	12772,
	12782,
	114,
	114,
	111,
	119,
	256,
	59,
	116,
	4060,
	12717,
	97,
	233,
	12488,
	97,
	114,
	112,
	111,
	111,
	110,
	256,
	100,
	117,
	12731,
	12735,
	111,
	119,
	238,
	12670,
	112,
	187,
	4242,
	101,
	102,
	116,
	256,
	97,
	104,
	12746,
	12752,
	114,
	114,
	111,
	119,
	243,
	4074,
	97,
	114,
	112,
	111,
	111,
	110,
	243,
	1361,
	105,
	103,
	104,
	116,
	97,
	114,
	114,
	111,
	119,
	115,
	59,
	25033,
	113,
	117,
	105,
	103,
	97,
	114,
	114,
	111,
	247,
	12491,
	104,
	114,
	101,
	101,
	116,
	105,
	109,
	101,
	115,
	59,
	25292,
	103,
	59,
	17114,
	105,
	110,
	103,
	100,
	111,
	116,
	115,
	101,
	241,
	7986,
	384,
	97,
	104,
	109,
	12813,
	12816,
	12819,
	114,
	242,
	4074,
	97,
	242,
	1361,
	59,
	24591,
	111,
	117,
	115,
	116,
	256,
	59,
	97,
	12830,
	12831,
	25521,
	99,
	104,
	101,
	187,
	12831,
	109,
	105,
	100,
	59,
	27374,
	512,
	97,
	98,
	112,
	116,
	12850,
	12861,
	12864,
	12882,
	256,
	110,
	114,
	12855,
	12858,
	103,
	59,
	26605,
	114,
	59,
	25086,
	114,
	235,
	4099,
	384,
	97,
	102,
	108,
	12871,
	12874,
	12878,
	114,
	59,
	27014,
	59,
	49152,
	55349,
	56675,
	117,
	115,
	59,
	27182,
	105,
	109,
	101,
	115,
	59,
	27189,
	256,
	97,
	112,
	12893,
	12903,
	114,
	256,
	59,
	103,
	12899,
	12900,
	16425,
	116,
	59,
	27028,
	111,
	108,
	105,
	110,
	116,
	59,
	27154,
	97,
	114,
	242,
	12771,
	512,
	97,
	99,
	104,
	113,
	12923,
	12928,
	4284,
	12933,
	113,
	117,
	111,
	59,
	24634,
	114,
	59,
	49152,
	55349,
	56519,
	256,
	98,
	117,
	12539,
	12938,
	111,
	256,
	59,
	114,
	532,
	531,
	384,
	104,
	105,
	114,
	12951,
	12955,
	12960,
	114,
	101,
	229,
	12792,
	109,
	101,
	115,
	59,
	25290,
	105,
	512,
	59,
	101,
	102,
	108,
	12970,
	4185,
	6177,
	12971,
	26041,
	116,
	114,
	105,
	59,
	27086,
	108,
	117,
	104,
	97,
	114,
	59,
	26984,
	59,
	24862,
	3425,
	13013,
	13019,
	13023,
	13100,
	13112,
	13169,
	0,
	13178,
	13220,
	0,
	0,
	13292,
	13296,
	0,
	13352,
	13384,
	13402,
	13485,
	13489,
	13514,
	13553,
	0,
	13846,
	0,
	0,
	13875,
	99,
	117,
	116,
	101,
	59,
	16731,
	113,
	117,
	239,
	10170,
	1280,
	59,
	69,
	97,
	99,
	101,
	105,
	110,
	112,
	115,
	121,
	4589,
	13043,
	13045,
	13055,
	13058,
	13067,
	13071,
	13087,
	13094,
	13097,
	59,
	27316,
	496,
	13050,
	0,
	13052,
	59,
	27320,
	111,
	110,
	59,
	16737,
	117,
	229,
	4606,
	256,
	59,
	100,
	4595,
	13063,
	105,
	108,
	59,
	16735,
	114,
	99,
	59,
	16733,
	384,
	69,
	97,
	115,
	13078,
	13080,
	13083,
	59,
	27318,
	112,
	59,
	27322,
	105,
	109,
	59,
	25321,
	111,
	108,
	105,
	110,
	116,
	59,
	27155,
	105,
	237,
	4612,
	59,
	17473,
	111,
	116,
	384,
	59,
	98,
	101,
	13108,
	7495,
	13109,
	25285,
	59,
	27238,
	896,
	65,
	97,
	99,
	109,
	115,
	116,
	120,
	13126,
	13130,
	13143,
	13147,
	13150,
	13155,
	13165,
	114,
	114,
	59,
	25048,
	114,
	256,
	104,
	114,
	13136,
	13138,
	235,
	8744,
	256,
	59,
	111,
	2614,
	2612,
	116,
	32827,
	167,
	16551,
	105,
	59,
	16443,
	119,
	97,
	114,
	59,
	26921,
	109,
	256,
	105,
	110,
	13161,
	240,
	110,
	117,
	243,
	241,
	116,
	59,
	26422,
	114,
	256,
	59,
	111,
	13174,
	8277,
	49152,
	55349,
	56624,
	512,
	97,
	99,
	111,
	121,
	13186,
	13190,
	13201,
	13216,
	114,
	112,
	59,
	26223,
	256,
	104,
	121,
	13195,
	13199,
	99,
	121,
	59,
	17481,
	59,
	17480,
	114,
	116,
	621,
	13209,
	0,
	0,
	13212,
	105,
	228,
	5220,
	97,
	114,
	97,
	236,
	11887,
	32827,
	173,
	16557,
	256,
	103,
	109,
	13224,
	13236,
	109,
	97,
	384,
	59,
	102,
	118,
	13233,
	13234,
	13234,
	17347,
	59,
	17346,
	1024,
	59,
	100,
	101,
	103,
	108,
	110,
	112,
	114,
	4779,
	13253,
	13257,
	13262,
	13270,
	13278,
	13281,
	13286,
	111,
	116,
	59,
	27242,
	256,
	59,
	113,
	4785,
	4784,
	256,
	59,
	69,
	13267,
	13268,
	27294,
	59,
	27296,
	256,
	59,
	69,
	13275,
	13276,
	27293,
	59,
	27295,
	101,
	59,
	25158,
	108,
	117,
	115,
	59,
	27172,
	97,
	114,
	114,
	59,
	26994,
	97,
	114,
	242,
	4413,
	512,
	97,
	101,
	105,
	116,
	13304,
	13320,
	13327,
	13335,
	256,
	108,
	115,
	13309,
	13316,
	108,
	115,
	101,
	116,
	109,
	233,
	13162,
	104,
	112,
	59,
	27187,
	112,
	97,
	114,
	115,
	108,
	59,
	27108,
	256,
	100,
	108,
	5219,
	13332,
	101,
	59,
	25379,
	256,
	59,
	101,
	13340,
	13341,
	27306,
	256,
	59,
	115,
	13346,
	13347,
	27308,
	59,
	49152,
	10924,
	65024,
	384,
	102,
	108,
	112,
	13358,
	13363,
	13378,
	116,
	99,
	121,
	59,
	17484,
	256,
	59,
	98,
	13368,
	13369,
	16431,
	256,
	59,
	97,
	13374,
	13375,
	27076,
	114,
	59,
	25407,
	102,
	59,
	49152,
	55349,
	56676,
	97,
	256,
	100,
	114,
	13389,
	1026,
	101,
	115,
	256,
	59,
	117,
	13396,
	13397,
	26208,
	105,
	116,
	187,
	13397,
	384,
	99,
	115,
	117,
	13408,
	13433,
	13471,
	256,
	97,
	117,
	13413,
	13423,
	112,
	256,
	59,
	115,
	4488,
	13419,
	59,
	49152,
	8851,
	65024,
	112,
	256,
	59,
	115,
	4532,
	13429,
	59,
	49152,
	8852,
	65024,
	117,
	256,
	98,
	112,
	13439,
	13455,
	384,
	59,
	101,
	115,
	4503,
	4508,
	13446,
	101,
	116,
	256,
	59,
	101,
	4503,
	13453,
	241,
	4509,
	384,
	59,
	101,
	115,
	4520,
	4525,
	13462,
	101,
	116,
	256,
	59,
	101,
	4520,
	13469,
	241,
	4526,
	384,
	59,
	97,
	102,
	4475,
	13478,
	1456,
	114,
	357,
	13483,
	1457,
	187,
	4476,
	97,
	114,
	242,
	4424,
	512,
	99,
	101,
	109,
	116,
	13497,
	13502,
	13506,
	13509,
	114,
	59,
	49152,
	55349,
	56520,
	116,
	109,
	238,
	241,
	105,
	236,
	13333,
	97,
	114,
	230,
	4542,
	256,
	97,
	114,
	13518,
	13525,
	114,
	256,
	59,
	102,
	13524,
	6079,
	26118,
	256,
	97,
	110,
	13530,
	13549,
	105,
	103,
	104,
	116,
	256,
	101,
	112,
	13539,
	13546,
	112,
	115,
	105,
	108,
	111,
	238,
	7904,
	104,
	233,
	11951,
	115,
	187,
	10322,
	640,
	98,
	99,
	109,
	110,
	112,
	13563,
	13662,
	4617,
	13707,
	13710,
	1152,
	59,
	69,
	100,
	101,
	109,
	110,
	112,
	114,
	115,
	13582,
	13583,
	13585,
	13589,
	13598,
	13603,
	13612,
	13617,
	13622,
	25218,
	59,
	27333,
	111,
	116,
	59,
	27325,
	256,
	59,
	100,
	4570,
	13594,
	111,
	116,
	59,
	27331,
	117,
	108,
	116,
	59,
	27329,
	256,
	69,
	101,
	13608,
	13610,
	59,
	27339,
	59,
	25226,
	108,
	117,
	115,
	59,
	27327,
	97,
	114,
	114,
	59,
	27001,
	384,
	101,
	105,
	117,
	13629,
	13650,
	13653,
	116,
	384,
	59,
	101,
	110,
	13582,
	13637,
	13643,
	113,
	256,
	59,
	113,
	4570,
	13583,
	101,
	113,
	256,
	59,
	113,
	13611,
	13608,
	109,
	59,
	27335,
	256,
	98,
	112,
	13658,
	13660,
	59,
	27349,
	59,
	27347,
	99,
	768,
	59,
	97,
	99,
	101,
	110,
	115,
	4589,
	13676,
	13682,
	13689,
	13691,
	13094,
	112,
	112,
	114,
	111,
	248,
	13050,
	117,
	114,
	108,
	121,
	101,
	241,
	4606,
	241,
	4595,
	384,
	97,
	101,
	115,
	13698,
	13704,
	13083,
	112,
	112,
	114,
	111,
	248,
	13082,
	113,
	241,
	13079,
	103,
	59,
	26218,
	1664,
	49,
	50,
	51,
	59,
	69,
	100,
	101,
	104,
	108,
	109,
	110,
	112,
	115,
	13737,
	13740,
	13743,
	4636,
	13746,
	13748,
	13760,
	13769,
	13781,
	13786,
	13791,
	13800,
	13805,
	32827,
	185,
	16569,
	32827,
	178,
	16562,
	32827,
	179,
	16563,
	59,
	27334,
	256,
	111,
	115,
	13753,
	13756,
	116,
	59,
	27326,
	117,
	98,
	59,
	27352,
	256,
	59,
	100,
	4642,
	13765,
	111,
	116,
	59,
	27332,
	115,
	256,
	111,
	117,
	13775,
	13778,
	108,
	59,
	26569,
	98,
	59,
	27351,
	97,
	114,
	114,
	59,
	27003,
	117,
	108,
	116,
	59,
	27330,
	256,
	69,
	101,
	13796,
	13798,
	59,
	27340,
	59,
	25227,
	108,
	117,
	115,
	59,
	27328,
	384,
	101,
	105,
	117,
	13812,
	13833,
	13836,
	116,
	384,
	59,
	101,
	110,
	4636,
	13820,
	13826,
	113,
	256,
	59,
	113,
	4642,
	13746,
	101,
	113,
	256,
	59,
	113,
	13799,
	13796,
	109,
	59,
	27336,
	256,
	98,
	112,
	13841,
	13843,
	59,
	27348,
	59,
	27350,
	384,
	65,
	97,
	110,
	13852,
	13856,
	13869,
	114,
	114,
	59,
	25049,
	114,
	256,
	104,
	114,
	13862,
	13864,
	235,
	8750,
	256,
	59,
	111,
	2603,
	2601,
	119,
	97,
	114,
	59,
	26922,
	108,
	105,
	103,
	32827,
	223,
	16607,
	3041,
	13905,
	13917,
	13920,
	4814,
	13939,
	13945,
	0,
	13950,
	14018,
	0,
	0,
	0,
	0,
	0,
	14043,
	14083,
	0,
	14089,
	14188,
	0,
	0,
	0,
	14215,
	626,
	13910,
	0,
	0,
	13915,
	103,
	101,
	116,
	59,
	25366,
	59,
	17348,
	114,
	235,
	3679,
	384,
	97,
	101,
	121,
	13926,
	13931,
	13936,
	114,
	111,
	110,
	59,
	16741,
	100,
	105,
	108,
	59,
	16739,
	59,
	17474,
	108,
	114,
	101,
	99,
	59,
	25365,
	114,
	59,
	49152,
	55349,
	56625,
	512,
	101,
	105,
	107,
	111,
	13958,
	13981,
	14005,
	14012,
	498,
	13963,
	0,
	13969,
	101,
	256,
	52,
	102,
	4740,
	4737,
	97,
	384,
	59,
	115,
	118,
	13976,
	13977,
	13979,
	17336,
	121,
	109,
	59,
	17361,
	256,
	99,
	110,
	13986,
	14002,
	107,
	256,
	97,
	115,
	13992,
	13998,
	112,
	112,
	114,
	111,
	248,
	4801,
	105,
	109,
	187,
	4780,
	115,
	240,
	4766,
	256,
	97,
	115,
	14010,
	13998,
	240,
	4801,
	114,
	110,
	32827,
	254,
	16638,
	492,
	799,
	14022,
	8935,
	101,
	115,
	33152,
	215,
	59,
	98,
	100,
	14031,
	14032,
	14040,
	16599,
	256,
	59,
	97,
	6415,
	14037,
	114,
	59,
	27185,
	59,
	27184,
	384,
	101,
	112,
	115,
	14049,
	14051,
	14080,
	225,
	10829,
	512,
	59,
	98,
	99,
	102,
	1158,
	14060,
	14064,
	14068,
	111,
	116,
	59,
	25398,
	105,
	114,
	59,
	27377,
	256,
	59,
	111,
	14073,
	14076,
	49152,
	55349,
	56677,
	114,
	107,
	59,
	27354,
	225,
	13154,
	114,
	105,
	109,
	101,
	59,
	24628,
	384,
	97,
	105,
	112,
	14095,
	14098,
	14180,
	100,
	229,
	4680,
	896,
	97,
	100,
	101,
	109,
	112,
	115,
	116,
	14113,
	14157,
	14144,
	14161,
	14167,
	14172,
	14175,
	110,
	103,
	108,
	101,
	640,
	59,
	100,
	108,
	113,
	114,
	14128,
	14129,
	14134,
	14144,
	14146,
	26037,
	111,
	119,
	110,
	187,
	7611,
	101,
	102,
	116,
	256,
	59,
	101,
	10240,
	14142,
	241,
	2350,
	59,
	25180,
	105,
	103,
	104,
	116,
	256,
	59,
	101,
	12970,
	14155,
	241,
	4186,
	111,
	116,
	59,
	26092,
	105,
	110,
	117,
	115,
	59,
	27194,
	108,
	117,
	115,
	59,
	27193,
	98,
	59,
	27085,
	105,
	109,
	101,
	59,
	27195,
	101,
	122,
	105,
	117,
	109,
	59,
	25570,
	384,
	99,
	104,
	116,
	14194,
	14205,
	14209,
	256,
	114,
	121,
	14199,
	14203,
	59,
	49152,
	55349,
	56521,
	59,
	17478,
	99,
	121,
	59,
	17499,
	114,
	111,
	107,
	59,
	16743,
	256,
	105,
	111,
	14219,
	14222,
	120,
	244,
	6007,
	104,
	101,
	97,
	100,
	256,
	108,
	114,
	14231,
	14240,
	101,
	102,
	116,
	97,
	114,
	114,
	111,
	247,
	2127,
	105,
	103,
	104,
	116,
	97,
	114,
	114,
	111,
	119,
	187,
	3933,
	2304,
	65,
	72,
	97,
	98,
	99,
	100,
	102,
	103,
	104,
	108,
	109,
	111,
	112,
	114,
	115,
	116,
	117,
	119,
	14288,
	14291,
	14295,
	14308,
	14320,
	14332,
	14350,
	14364,
	14371,
	14388,
	14417,
	14429,
	14443,
	14505,
	14540,
	14546,
	14570,
	14582,
	114,
	242,
	1005,
	97,
	114,
	59,
	26979,
	256,
	99,
	114,
	14300,
	14306,
	117,
	116,
	101,
	32827,
	250,
	16634,
	242,
	4432,
	114,
	483,
	14314,
	0,
	14317,
	121,
	59,
	17502,
	118,
	101,
	59,
	16749,
	256,
	105,
	121,
	14325,
	14330,
	114,
	99,
	32827,
	251,
	16635,
	59,
	17475,
	384,
	97,
	98,
	104,
	14339,
	14342,
	14347,
	114,
	242,
	5037,
	108,
	97,
	99,
	59,
	16753,
	97,
	242,
	5059,
	256,
	105,
	114,
	14355,
	14360,
	115,
	104,
	116,
	59,
	27006,
	59,
	49152,
	55349,
	56626,
	114,
	97,
	118,
	101,
	32827,
	249,
	16633,
	353,
	14375,
	14385,
	114,
	256,
	108,
	114,
	14380,
	14382,
	187,
	2391,
	187,
	4227,
	108,
	107,
	59,
	25984,
	256,
	99,
	116,
	14393,
	14413,
	623,
	14399,
	0,
	0,
	14410,
	114,
	110,
	256,
	59,
	101,
	14405,
	14406,
	25372,
	114,
	187,
	14406,
	111,
	112,
	59,
	25359,
	114,
	105,
	59,
	26104,
	256,
	97,
	108,
	14422,
	14426,
	99,
	114,
	59,
	16747,
	32955,
	168,
	841,
	256,
	103,
	112,
	14434,
	14438,
	111,
	110,
	59,
	16755,
	102,
	59,
	49152,
	55349,
	56678,
	768,
	97,
	100,
	104,
	108,
	115,
	117,
	4427,
	14456,
	14461,
	4978,
	14481,
	14496,
	111,
	119,
	110,
	225,
	5043,
	97,
	114,
	112,
	111,
	111,
	110,
	256,
	108,
	114,
	14472,
	14476,
	101,
	102,
	244,
	14381,
	105,
	103,
	104,
	244,
	14383,
	105,
	384,
	59,
	104,
	108,
	14489,
	14490,
	14492,
	17349,
	187,
	5114,
	111,
	110,
	187,
	14490,
	112,
	97,
	114,
	114,
	111,
	119,
	115,
	59,
	25032,
	384,
	99,
	105,
	116,
	14512,
	14532,
	14536,
	623,
	14518,
	0,
	0,
	14529,
	114,
	110,
	256,
	59,
	101,
	14524,
	14525,
	25373,
	114,
	187,
	14525,
	111,
	112,
	59,
	25358,
	110,
	103,
	59,
	16751,
	114,
	105,
	59,
	26105,
	99,
	114,
	59,
	49152,
	55349,
	56522,
	384,
	100,
	105,
	114,
	14553,
	14557,
	14562,
	111,
	116,
	59,
	25328,
	108,
	100,
	101,
	59,
	16745,
	105,
	256,
	59,
	102,
	14128,
	14568,
	187,
	6163,
	256,
	97,
	109,
	14575,
	14578,
	114,
	242,
	14504,
	108,
	32827,
	252,
	16636,
	97,
	110,
	103,
	108,
	101,
	59,
	27047,
	1920,
	65,
	66,
	68,
	97,
	99,
	100,
	101,
	102,
	108,
	110,
	111,
	112,
	114,
	115,
	122,
	14620,
	14623,
	14633,
	14637,
	14773,
	14776,
	14781,
	14815,
	14820,
	14824,
	14835,
	14841,
	14845,
	14849,
	14880,
	114,
	242,
	1015,
	97,
	114,
	256,
	59,
	118,
	14630,
	14631,
	27368,
	59,
	27369,
	97,
	115,
	232,
	993,
	256,
	110,
	114,
	14642,
	14647,
	103,
	114,
	116,
	59,
	27036,
	896,
	101,
	107,
	110,
	112,
	114,
	115,
	116,
	13539,
	14662,
	14667,
	14674,
	14685,
	14692,
	14742,
	97,
	112,
	112,
	225,
	9237,
	111,
	116,
	104,
	105,
	110,
	231,
	7830,
	384,
	104,
	105,
	114,
	13547,
	11976,
	14681,
	111,
	112,
	244,
	12213,
	256,
	59,
	104,
	5047,
	14690,
	239,
	12685,
	256,
	105,
	117,
	14697,
	14701,
	103,
	109,
	225,
	13235,
	256,
	98,
	112,
	14706,
	14724,
	115,
	101,
	116,
	110,
	101,
	113,
	256,
	59,
	113,
	14717,
	14720,
	49152,
	8842,
	65024,
	59,
	49152,
	10955,
	65024,
	115,
	101,
	116,
	110,
	101,
	113,
	256,
	59,
	113,
	14735,
	14738,
	49152,
	8843,
	65024,
	59,
	49152,
	10956,
	65024,
	256,
	104,
	114,
	14747,
	14751,
	101,
	116,
	225,
	13980,
	105,
	97,
	110,
	103,
	108,
	101,
	256,
	108,
	114,
	14762,
	14767,
	101,
	102,
	116,
	187,
	2341,
	105,
	103,
	104,
	116,
	187,
	4177,
	121,
	59,
	17458,
	97,
	115,
	104,
	187,
	4150,
	384,
	101,
	108,
	114,
	14788,
	14802,
	14807,
	384,
	59,
	98,
	101,
	11754,
	14795,
	14799,
	97,
	114,
	59,
	25275,
	113,
	59,
	25178,
	108,
	105,
	112,
	59,
	25326,
	256,
	98,
	116,
	14812,
	5224,
	97,
	242,
	5225,
	114,
	59,
	49152,
	55349,
	56627,
	116,
	114,
	233,
	14766,
	115,
	117,
	256,
	98,
	112,
	14831,
	14833,
	187,
	3356,
	187,
	3417,
	112,
	102,
	59,
	49152,
	55349,
	56679,
	114,
	111,
	240,
	3835,
	116,
	114,
	233,
	14772,
	256,
	99,
	117,
	14854,
	14859,
	114,
	59,
	49152,
	55349,
	56523,
	256,
	98,
	112,
	14864,
	14872,
	110,
	256,
	69,
	101,
	14720,
	14870,
	187,
	14718,
	110,
	256,
	69,
	101,
	14738,
	14878,
	187,
	14736,
	105,
	103,
	122,
	97,
	103,
	59,
	27034,
	896,
	99,
	101,
	102,
	111,
	112,
	114,
	115,
	14902,
	14907,
	14934,
	14939,
	14932,
	14945,
	14954,
	105,
	114,
	99,
	59,
	16757,
	256,
	100,
	105,
	14912,
	14929,
	256,
	98,
	103,
	14917,
	14921,
	97,
	114,
	59,
	27231,
	101,
	256,
	59,
	113,
	5626,
	14927,
	59,
	25177,
	101,
	114,
	112,
	59,
	24856,
	114,
	59,
	49152,
	55349,
	56628,
	112,
	102,
	59,
	49152,
	55349,
	56680,
	256,
	59,
	101,
	5241,
	14950,
	97,
	116,
	232,
	5241,
	99,
	114,
	59,
	49152,
	55349,
	56524,
	2787,
	6030,
	14983,
	0,
	14987,
	0,
	14992,
	15003,
	0,
	0,
	15005,
	15016,
	15019,
	15023,
	0,
	0,
	15043,
	15054,
	0,
	15064,
	6108,
	6111,
	116,
	114,
	233,
	6097,
	114,
	59,
	49152,
	55349,
	56629,
	256,
	65,
	97,
	14996,
	14999,
	114,
	242,
	963,
	114,
	242,
	2550,
	59,
	17342,
	256,
	65,
	97,
	15009,
	15012,
	114,
	242,
	952,
	114,
	242,
	2539,
	97,
	240,
	10003,
	105,
	115,
	59,
	25339,
	384,
	100,
	112,
	116,
	6052,
	15029,
	15038,
	256,
	102,
	108,
	15034,
	6057,
	59,
	49152,
	55349,
	56681,
	105,
	109,
	229,
	6066,
	256,
	65,
	97,
	15047,
	15050,
	114,
	242,
	974,
	114,
	242,
	2561,
	256,
	99,
	113,
	15058,
	6072,
	114,
	59,
	49152,
	55349,
	56525,
	256,
	112,
	116,
	6102,
	15068,
	114,
	233,
	6100,
	1024,
	97,
	99,
	101,
	102,
	105,
	111,
	115,
	117,
	15088,
	15101,
	15112,
	15116,
	15121,
	15125,
	15131,
	15137,
	99,
	256,
	117,
	121,
	15094,
	15099,
	116,
	101,
	32827,
	253,
	16637,
	59,
	17487,
	256,
	105,
	121,
	15106,
	15110,
	114,
	99,
	59,
	16759,
	59,
	17483,
	110,
	32827,
	165,
	16549,
	114,
	59,
	49152,
	55349,
	56630,
	99,
	121,
	59,
	17495,
	112,
	102,
	59,
	49152,
	55349,
	56682,
	99,
	114,
	59,
	49152,
	55349,
	56526,
	256,
	99,
	109,
	15142,
	15145,
	121,
	59,
	17486,
	108,
	32827,
	255,
	16639,
	1280,
	97,
	99,
	100,
	101,
	102,
	104,
	105,
	111,
	115,
	119,
	15170,
	15176,
	15188,
	15192,
	15204,
	15209,
	15213,
	15220,
	15226,
	15232,
	99,
	117,
	116,
	101,
	59,
	16762,
	256,
	97,
	121,
	15181,
	15186,
	114,
	111,
	110,
	59,
	16766,
	59,
	17463,
	111,
	116,
	59,
	16764,
	256,
	101,
	116,
	15197,
	15201,
	116,
	114,
	230,
	5471,
	97,
	59,
	17334,
	114,
	59,
	49152,
	55349,
	56631,
	99,
	121,
	59,
	17462,
	103,
	114,
	97,
	114,
	114,
	59,
	25053,
	112,
	102,
	59,
	49152,
	55349,
	56683,
	99,
	114,
	59,
	49152,
	55349,
	56527,
	256,
	106,
	110,
	15237,
	15239,
	59,
	24589,
	106,
	59,
	24588
]);
new Uint16Array([
	512,
	97,
	103,
	108,
	113,
	9,
	21,
	24,
	27,
	621,
	15,
	0,
	0,
	18,
	112,
	59,
	16422,
	111,
	115,
	59,
	16423,
	116,
	59,
	16446,
	116,
	59,
	16444,
	117,
	111,
	116,
	59,
	16418
]);
String.fromCodePoint;
//#endregion
//#region node_modules/.pnpm/entities@4.3.0/node_modules/entities/lib/esm/decode.js
var CharCodes;
(function(CharCodes) {
	CharCodes[CharCodes["NUM"] = 35] = "NUM";
	CharCodes[CharCodes["SEMI"] = 59] = "SEMI";
	CharCodes[CharCodes["ZERO"] = 48] = "ZERO";
	CharCodes[CharCodes["NINE"] = 57] = "NINE";
	CharCodes[CharCodes["LOWER_A"] = 97] = "LOWER_A";
	CharCodes[CharCodes["LOWER_F"] = 102] = "LOWER_F";
	CharCodes[CharCodes["LOWER_X"] = 120] = "LOWER_X";
	/** Bit that needs to be set to convert an upper case ASCII character to lower case */
	CharCodes[CharCodes["To_LOWER_BIT"] = 32] = "To_LOWER_BIT";
})(CharCodes || (CharCodes = {}));
var BinTrieFlags;
(function(BinTrieFlags) {
	BinTrieFlags[BinTrieFlags["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
	BinTrieFlags[BinTrieFlags["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
	BinTrieFlags[BinTrieFlags["JUMP_TABLE"] = 127] = "JUMP_TABLE";
})(BinTrieFlags || (BinTrieFlags = {}));
function determineBranch(decodeTree, current, nodeIdx, char) {
	const branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
	const jumpOffset = current & BinTrieFlags.JUMP_TABLE;
	if (branchCount === 0) return jumpOffset !== 0 && char === jumpOffset ? nodeIdx : -1;
	if (jumpOffset) {
		const value = char - jumpOffset;
		return value < 0 || value > branchCount ? -1 : decodeTree[nodeIdx + value] - 1;
	}
	let lo = nodeIdx;
	let hi = lo + branchCount - 1;
	while (lo <= hi) {
		const mid = lo + hi >>> 1;
		const midVal = decodeTree[mid];
		if (midVal < char) lo = mid + 1;
		else if (midVal > char) hi = mid - 1;
		else return decodeTree[mid + branchCount];
	}
	return -1;
}
//#endregion
//#region node_modules/.pnpm/parse5@7.0.0/node_modules/parse5/dist/common/html.js
/** All valid namespaces in HTML. */
var NS;
(function(NS) {
	NS["HTML"] = "http://www.w3.org/1999/xhtml";
	NS["MATHML"] = "http://www.w3.org/1998/Math/MathML";
	NS["SVG"] = "http://www.w3.org/2000/svg";
	NS["XLINK"] = "http://www.w3.org/1999/xlink";
	NS["XML"] = "http://www.w3.org/XML/1998/namespace";
	NS["XMLNS"] = "http://www.w3.org/2000/xmlns/";
})(NS || (NS = {}));
var ATTRS;
(function(ATTRS) {
	ATTRS["TYPE"] = "type";
	ATTRS["ACTION"] = "action";
	ATTRS["ENCODING"] = "encoding";
	ATTRS["PROMPT"] = "prompt";
	ATTRS["NAME"] = "name";
	ATTRS["COLOR"] = "color";
	ATTRS["FACE"] = "face";
	ATTRS["SIZE"] = "size";
})(ATTRS || (ATTRS = {}));
/**
* The mode of the document.
*
* @see {@link https://dom.spec.whatwg.org/#concept-document-limited-quirks}
*/
var DOCUMENT_MODE;
(function(DOCUMENT_MODE) {
	DOCUMENT_MODE["NO_QUIRKS"] = "no-quirks";
	DOCUMENT_MODE["QUIRKS"] = "quirks";
	DOCUMENT_MODE["LIMITED_QUIRKS"] = "limited-quirks";
})(DOCUMENT_MODE || (DOCUMENT_MODE = {}));
var TAG_NAMES;
(function(TAG_NAMES) {
	TAG_NAMES["A"] = "a";
	TAG_NAMES["ADDRESS"] = "address";
	TAG_NAMES["ANNOTATION_XML"] = "annotation-xml";
	TAG_NAMES["APPLET"] = "applet";
	TAG_NAMES["AREA"] = "area";
	TAG_NAMES["ARTICLE"] = "article";
	TAG_NAMES["ASIDE"] = "aside";
	TAG_NAMES["B"] = "b";
	TAG_NAMES["BASE"] = "base";
	TAG_NAMES["BASEFONT"] = "basefont";
	TAG_NAMES["BGSOUND"] = "bgsound";
	TAG_NAMES["BIG"] = "big";
	TAG_NAMES["BLOCKQUOTE"] = "blockquote";
	TAG_NAMES["BODY"] = "body";
	TAG_NAMES["BR"] = "br";
	TAG_NAMES["BUTTON"] = "button";
	TAG_NAMES["CAPTION"] = "caption";
	TAG_NAMES["CENTER"] = "center";
	TAG_NAMES["CODE"] = "code";
	TAG_NAMES["COL"] = "col";
	TAG_NAMES["COLGROUP"] = "colgroup";
	TAG_NAMES["DD"] = "dd";
	TAG_NAMES["DESC"] = "desc";
	TAG_NAMES["DETAILS"] = "details";
	TAG_NAMES["DIALOG"] = "dialog";
	TAG_NAMES["DIR"] = "dir";
	TAG_NAMES["DIV"] = "div";
	TAG_NAMES["DL"] = "dl";
	TAG_NAMES["DT"] = "dt";
	TAG_NAMES["EM"] = "em";
	TAG_NAMES["EMBED"] = "embed";
	TAG_NAMES["FIELDSET"] = "fieldset";
	TAG_NAMES["FIGCAPTION"] = "figcaption";
	TAG_NAMES["FIGURE"] = "figure";
	TAG_NAMES["FONT"] = "font";
	TAG_NAMES["FOOTER"] = "footer";
	TAG_NAMES["FOREIGN_OBJECT"] = "foreignObject";
	TAG_NAMES["FORM"] = "form";
	TAG_NAMES["FRAME"] = "frame";
	TAG_NAMES["FRAMESET"] = "frameset";
	TAG_NAMES["H1"] = "h1";
	TAG_NAMES["H2"] = "h2";
	TAG_NAMES["H3"] = "h3";
	TAG_NAMES["H4"] = "h4";
	TAG_NAMES["H5"] = "h5";
	TAG_NAMES["H6"] = "h6";
	TAG_NAMES["HEAD"] = "head";
	TAG_NAMES["HEADER"] = "header";
	TAG_NAMES["HGROUP"] = "hgroup";
	TAG_NAMES["HR"] = "hr";
	TAG_NAMES["HTML"] = "html";
	TAG_NAMES["I"] = "i";
	TAG_NAMES["IMG"] = "img";
	TAG_NAMES["IMAGE"] = "image";
	TAG_NAMES["INPUT"] = "input";
	TAG_NAMES["IFRAME"] = "iframe";
	TAG_NAMES["KEYGEN"] = "keygen";
	TAG_NAMES["LABEL"] = "label";
	TAG_NAMES["LI"] = "li";
	TAG_NAMES["LINK"] = "link";
	TAG_NAMES["LISTING"] = "listing";
	TAG_NAMES["MAIN"] = "main";
	TAG_NAMES["MALIGNMARK"] = "malignmark";
	TAG_NAMES["MARQUEE"] = "marquee";
	TAG_NAMES["MATH"] = "math";
	TAG_NAMES["MENU"] = "menu";
	TAG_NAMES["META"] = "meta";
	TAG_NAMES["MGLYPH"] = "mglyph";
	TAG_NAMES["MI"] = "mi";
	TAG_NAMES["MO"] = "mo";
	TAG_NAMES["MN"] = "mn";
	TAG_NAMES["MS"] = "ms";
	TAG_NAMES["MTEXT"] = "mtext";
	TAG_NAMES["NAV"] = "nav";
	TAG_NAMES["NOBR"] = "nobr";
	TAG_NAMES["NOFRAMES"] = "noframes";
	TAG_NAMES["NOEMBED"] = "noembed";
	TAG_NAMES["NOSCRIPT"] = "noscript";
	TAG_NAMES["OBJECT"] = "object";
	TAG_NAMES["OL"] = "ol";
	TAG_NAMES["OPTGROUP"] = "optgroup";
	TAG_NAMES["OPTION"] = "option";
	TAG_NAMES["P"] = "p";
	TAG_NAMES["PARAM"] = "param";
	TAG_NAMES["PLAINTEXT"] = "plaintext";
	TAG_NAMES["PRE"] = "pre";
	TAG_NAMES["RB"] = "rb";
	TAG_NAMES["RP"] = "rp";
	TAG_NAMES["RT"] = "rt";
	TAG_NAMES["RTC"] = "rtc";
	TAG_NAMES["RUBY"] = "ruby";
	TAG_NAMES["S"] = "s";
	TAG_NAMES["SCRIPT"] = "script";
	TAG_NAMES["SECTION"] = "section";
	TAG_NAMES["SELECT"] = "select";
	TAG_NAMES["SOURCE"] = "source";
	TAG_NAMES["SMALL"] = "small";
	TAG_NAMES["SPAN"] = "span";
	TAG_NAMES["STRIKE"] = "strike";
	TAG_NAMES["STRONG"] = "strong";
	TAG_NAMES["STYLE"] = "style";
	TAG_NAMES["SUB"] = "sub";
	TAG_NAMES["SUMMARY"] = "summary";
	TAG_NAMES["SUP"] = "sup";
	TAG_NAMES["TABLE"] = "table";
	TAG_NAMES["TBODY"] = "tbody";
	TAG_NAMES["TEMPLATE"] = "template";
	TAG_NAMES["TEXTAREA"] = "textarea";
	TAG_NAMES["TFOOT"] = "tfoot";
	TAG_NAMES["TD"] = "td";
	TAG_NAMES["TH"] = "th";
	TAG_NAMES["THEAD"] = "thead";
	TAG_NAMES["TITLE"] = "title";
	TAG_NAMES["TR"] = "tr";
	TAG_NAMES["TRACK"] = "track";
	TAG_NAMES["TT"] = "tt";
	TAG_NAMES["U"] = "u";
	TAG_NAMES["UL"] = "ul";
	TAG_NAMES["SVG"] = "svg";
	TAG_NAMES["VAR"] = "var";
	TAG_NAMES["WBR"] = "wbr";
	TAG_NAMES["XMP"] = "xmp";
})(TAG_NAMES || (TAG_NAMES = {}));
/**
* Tag IDs are numeric IDs for known tag names.
*
* We use tag IDs to improve the performance of tag name comparisons.
*/
var TAG_ID;
(function(TAG_ID) {
	TAG_ID[TAG_ID["UNKNOWN"] = 0] = "UNKNOWN";
	TAG_ID[TAG_ID["A"] = 1] = "A";
	TAG_ID[TAG_ID["ADDRESS"] = 2] = "ADDRESS";
	TAG_ID[TAG_ID["ANNOTATION_XML"] = 3] = "ANNOTATION_XML";
	TAG_ID[TAG_ID["APPLET"] = 4] = "APPLET";
	TAG_ID[TAG_ID["AREA"] = 5] = "AREA";
	TAG_ID[TAG_ID["ARTICLE"] = 6] = "ARTICLE";
	TAG_ID[TAG_ID["ASIDE"] = 7] = "ASIDE";
	TAG_ID[TAG_ID["B"] = 8] = "B";
	TAG_ID[TAG_ID["BASE"] = 9] = "BASE";
	TAG_ID[TAG_ID["BASEFONT"] = 10] = "BASEFONT";
	TAG_ID[TAG_ID["BGSOUND"] = 11] = "BGSOUND";
	TAG_ID[TAG_ID["BIG"] = 12] = "BIG";
	TAG_ID[TAG_ID["BLOCKQUOTE"] = 13] = "BLOCKQUOTE";
	TAG_ID[TAG_ID["BODY"] = 14] = "BODY";
	TAG_ID[TAG_ID["BR"] = 15] = "BR";
	TAG_ID[TAG_ID["BUTTON"] = 16] = "BUTTON";
	TAG_ID[TAG_ID["CAPTION"] = 17] = "CAPTION";
	TAG_ID[TAG_ID["CENTER"] = 18] = "CENTER";
	TAG_ID[TAG_ID["CODE"] = 19] = "CODE";
	TAG_ID[TAG_ID["COL"] = 20] = "COL";
	TAG_ID[TAG_ID["COLGROUP"] = 21] = "COLGROUP";
	TAG_ID[TAG_ID["DD"] = 22] = "DD";
	TAG_ID[TAG_ID["DESC"] = 23] = "DESC";
	TAG_ID[TAG_ID["DETAILS"] = 24] = "DETAILS";
	TAG_ID[TAG_ID["DIALOG"] = 25] = "DIALOG";
	TAG_ID[TAG_ID["DIR"] = 26] = "DIR";
	TAG_ID[TAG_ID["DIV"] = 27] = "DIV";
	TAG_ID[TAG_ID["DL"] = 28] = "DL";
	TAG_ID[TAG_ID["DT"] = 29] = "DT";
	TAG_ID[TAG_ID["EM"] = 30] = "EM";
	TAG_ID[TAG_ID["EMBED"] = 31] = "EMBED";
	TAG_ID[TAG_ID["FIELDSET"] = 32] = "FIELDSET";
	TAG_ID[TAG_ID["FIGCAPTION"] = 33] = "FIGCAPTION";
	TAG_ID[TAG_ID["FIGURE"] = 34] = "FIGURE";
	TAG_ID[TAG_ID["FONT"] = 35] = "FONT";
	TAG_ID[TAG_ID["FOOTER"] = 36] = "FOOTER";
	TAG_ID[TAG_ID["FOREIGN_OBJECT"] = 37] = "FOREIGN_OBJECT";
	TAG_ID[TAG_ID["FORM"] = 38] = "FORM";
	TAG_ID[TAG_ID["FRAME"] = 39] = "FRAME";
	TAG_ID[TAG_ID["FRAMESET"] = 40] = "FRAMESET";
	TAG_ID[TAG_ID["H1"] = 41] = "H1";
	TAG_ID[TAG_ID["H2"] = 42] = "H2";
	TAG_ID[TAG_ID["H3"] = 43] = "H3";
	TAG_ID[TAG_ID["H4"] = 44] = "H4";
	TAG_ID[TAG_ID["H5"] = 45] = "H5";
	TAG_ID[TAG_ID["H6"] = 46] = "H6";
	TAG_ID[TAG_ID["HEAD"] = 47] = "HEAD";
	TAG_ID[TAG_ID["HEADER"] = 48] = "HEADER";
	TAG_ID[TAG_ID["HGROUP"] = 49] = "HGROUP";
	TAG_ID[TAG_ID["HR"] = 50] = "HR";
	TAG_ID[TAG_ID["HTML"] = 51] = "HTML";
	TAG_ID[TAG_ID["I"] = 52] = "I";
	TAG_ID[TAG_ID["IMG"] = 53] = "IMG";
	TAG_ID[TAG_ID["IMAGE"] = 54] = "IMAGE";
	TAG_ID[TAG_ID["INPUT"] = 55] = "INPUT";
	TAG_ID[TAG_ID["IFRAME"] = 56] = "IFRAME";
	TAG_ID[TAG_ID["KEYGEN"] = 57] = "KEYGEN";
	TAG_ID[TAG_ID["LABEL"] = 58] = "LABEL";
	TAG_ID[TAG_ID["LI"] = 59] = "LI";
	TAG_ID[TAG_ID["LINK"] = 60] = "LINK";
	TAG_ID[TAG_ID["LISTING"] = 61] = "LISTING";
	TAG_ID[TAG_ID["MAIN"] = 62] = "MAIN";
	TAG_ID[TAG_ID["MALIGNMARK"] = 63] = "MALIGNMARK";
	TAG_ID[TAG_ID["MARQUEE"] = 64] = "MARQUEE";
	TAG_ID[TAG_ID["MATH"] = 65] = "MATH";
	TAG_ID[TAG_ID["MENU"] = 66] = "MENU";
	TAG_ID[TAG_ID["META"] = 67] = "META";
	TAG_ID[TAG_ID["MGLYPH"] = 68] = "MGLYPH";
	TAG_ID[TAG_ID["MI"] = 69] = "MI";
	TAG_ID[TAG_ID["MO"] = 70] = "MO";
	TAG_ID[TAG_ID["MN"] = 71] = "MN";
	TAG_ID[TAG_ID["MS"] = 72] = "MS";
	TAG_ID[TAG_ID["MTEXT"] = 73] = "MTEXT";
	TAG_ID[TAG_ID["NAV"] = 74] = "NAV";
	TAG_ID[TAG_ID["NOBR"] = 75] = "NOBR";
	TAG_ID[TAG_ID["NOFRAMES"] = 76] = "NOFRAMES";
	TAG_ID[TAG_ID["NOEMBED"] = 77] = "NOEMBED";
	TAG_ID[TAG_ID["NOSCRIPT"] = 78] = "NOSCRIPT";
	TAG_ID[TAG_ID["OBJECT"] = 79] = "OBJECT";
	TAG_ID[TAG_ID["OL"] = 80] = "OL";
	TAG_ID[TAG_ID["OPTGROUP"] = 81] = "OPTGROUP";
	TAG_ID[TAG_ID["OPTION"] = 82] = "OPTION";
	TAG_ID[TAG_ID["P"] = 83] = "P";
	TAG_ID[TAG_ID["PARAM"] = 84] = "PARAM";
	TAG_ID[TAG_ID["PLAINTEXT"] = 85] = "PLAINTEXT";
	TAG_ID[TAG_ID["PRE"] = 86] = "PRE";
	TAG_ID[TAG_ID["RB"] = 87] = "RB";
	TAG_ID[TAG_ID["RP"] = 88] = "RP";
	TAG_ID[TAG_ID["RT"] = 89] = "RT";
	TAG_ID[TAG_ID["RTC"] = 90] = "RTC";
	TAG_ID[TAG_ID["RUBY"] = 91] = "RUBY";
	TAG_ID[TAG_ID["S"] = 92] = "S";
	TAG_ID[TAG_ID["SCRIPT"] = 93] = "SCRIPT";
	TAG_ID[TAG_ID["SECTION"] = 94] = "SECTION";
	TAG_ID[TAG_ID["SELECT"] = 95] = "SELECT";
	TAG_ID[TAG_ID["SOURCE"] = 96] = "SOURCE";
	TAG_ID[TAG_ID["SMALL"] = 97] = "SMALL";
	TAG_ID[TAG_ID["SPAN"] = 98] = "SPAN";
	TAG_ID[TAG_ID["STRIKE"] = 99] = "STRIKE";
	TAG_ID[TAG_ID["STRONG"] = 100] = "STRONG";
	TAG_ID[TAG_ID["STYLE"] = 101] = "STYLE";
	TAG_ID[TAG_ID["SUB"] = 102] = "SUB";
	TAG_ID[TAG_ID["SUMMARY"] = 103] = "SUMMARY";
	TAG_ID[TAG_ID["SUP"] = 104] = "SUP";
	TAG_ID[TAG_ID["TABLE"] = 105] = "TABLE";
	TAG_ID[TAG_ID["TBODY"] = 106] = "TBODY";
	TAG_ID[TAG_ID["TEMPLATE"] = 107] = "TEMPLATE";
	TAG_ID[TAG_ID["TEXTAREA"] = 108] = "TEXTAREA";
	TAG_ID[TAG_ID["TFOOT"] = 109] = "TFOOT";
	TAG_ID[TAG_ID["TD"] = 110] = "TD";
	TAG_ID[TAG_ID["TH"] = 111] = "TH";
	TAG_ID[TAG_ID["THEAD"] = 112] = "THEAD";
	TAG_ID[TAG_ID["TITLE"] = 113] = "TITLE";
	TAG_ID[TAG_ID["TR"] = 114] = "TR";
	TAG_ID[TAG_ID["TRACK"] = 115] = "TRACK";
	TAG_ID[TAG_ID["TT"] = 116] = "TT";
	TAG_ID[TAG_ID["U"] = 117] = "U";
	TAG_ID[TAG_ID["UL"] = 118] = "UL";
	TAG_ID[TAG_ID["SVG"] = 119] = "SVG";
	TAG_ID[TAG_ID["VAR"] = 120] = "VAR";
	TAG_ID[TAG_ID["WBR"] = 121] = "WBR";
	TAG_ID[TAG_ID["XMP"] = 122] = "XMP";
})(TAG_ID || (TAG_ID = {}));
var TAG_NAME_TO_ID = /* @__PURE__ */ new Map([
	[TAG_NAMES.A, TAG_ID.A],
	[TAG_NAMES.ADDRESS, TAG_ID.ADDRESS],
	[TAG_NAMES.ANNOTATION_XML, TAG_ID.ANNOTATION_XML],
	[TAG_NAMES.APPLET, TAG_ID.APPLET],
	[TAG_NAMES.AREA, TAG_ID.AREA],
	[TAG_NAMES.ARTICLE, TAG_ID.ARTICLE],
	[TAG_NAMES.ASIDE, TAG_ID.ASIDE],
	[TAG_NAMES.B, TAG_ID.B],
	[TAG_NAMES.BASE, TAG_ID.BASE],
	[TAG_NAMES.BASEFONT, TAG_ID.BASEFONT],
	[TAG_NAMES.BGSOUND, TAG_ID.BGSOUND],
	[TAG_NAMES.BIG, TAG_ID.BIG],
	[TAG_NAMES.BLOCKQUOTE, TAG_ID.BLOCKQUOTE],
	[TAG_NAMES.BODY, TAG_ID.BODY],
	[TAG_NAMES.BR, TAG_ID.BR],
	[TAG_NAMES.BUTTON, TAG_ID.BUTTON],
	[TAG_NAMES.CAPTION, TAG_ID.CAPTION],
	[TAG_NAMES.CENTER, TAG_ID.CENTER],
	[TAG_NAMES.CODE, TAG_ID.CODE],
	[TAG_NAMES.COL, TAG_ID.COL],
	[TAG_NAMES.COLGROUP, TAG_ID.COLGROUP],
	[TAG_NAMES.DD, TAG_ID.DD],
	[TAG_NAMES.DESC, TAG_ID.DESC],
	[TAG_NAMES.DETAILS, TAG_ID.DETAILS],
	[TAG_NAMES.DIALOG, TAG_ID.DIALOG],
	[TAG_NAMES.DIR, TAG_ID.DIR],
	[TAG_NAMES.DIV, TAG_ID.DIV],
	[TAG_NAMES.DL, TAG_ID.DL],
	[TAG_NAMES.DT, TAG_ID.DT],
	[TAG_NAMES.EM, TAG_ID.EM],
	[TAG_NAMES.EMBED, TAG_ID.EMBED],
	[TAG_NAMES.FIELDSET, TAG_ID.FIELDSET],
	[TAG_NAMES.FIGCAPTION, TAG_ID.FIGCAPTION],
	[TAG_NAMES.FIGURE, TAG_ID.FIGURE],
	[TAG_NAMES.FONT, TAG_ID.FONT],
	[TAG_NAMES.FOOTER, TAG_ID.FOOTER],
	[TAG_NAMES.FOREIGN_OBJECT, TAG_ID.FOREIGN_OBJECT],
	[TAG_NAMES.FORM, TAG_ID.FORM],
	[TAG_NAMES.FRAME, TAG_ID.FRAME],
	[TAG_NAMES.FRAMESET, TAG_ID.FRAMESET],
	[TAG_NAMES.H1, TAG_ID.H1],
	[TAG_NAMES.H2, TAG_ID.H2],
	[TAG_NAMES.H3, TAG_ID.H3],
	[TAG_NAMES.H4, TAG_ID.H4],
	[TAG_NAMES.H5, TAG_ID.H5],
	[TAG_NAMES.H6, TAG_ID.H6],
	[TAG_NAMES.HEAD, TAG_ID.HEAD],
	[TAG_NAMES.HEADER, TAG_ID.HEADER],
	[TAG_NAMES.HGROUP, TAG_ID.HGROUP],
	[TAG_NAMES.HR, TAG_ID.HR],
	[TAG_NAMES.HTML, TAG_ID.HTML],
	[TAG_NAMES.I, TAG_ID.I],
	[TAG_NAMES.IMG, TAG_ID.IMG],
	[TAG_NAMES.IMAGE, TAG_ID.IMAGE],
	[TAG_NAMES.INPUT, TAG_ID.INPUT],
	[TAG_NAMES.IFRAME, TAG_ID.IFRAME],
	[TAG_NAMES.KEYGEN, TAG_ID.KEYGEN],
	[TAG_NAMES.LABEL, TAG_ID.LABEL],
	[TAG_NAMES.LI, TAG_ID.LI],
	[TAG_NAMES.LINK, TAG_ID.LINK],
	[TAG_NAMES.LISTING, TAG_ID.LISTING],
	[TAG_NAMES.MAIN, TAG_ID.MAIN],
	[TAG_NAMES.MALIGNMARK, TAG_ID.MALIGNMARK],
	[TAG_NAMES.MARQUEE, TAG_ID.MARQUEE],
	[TAG_NAMES.MATH, TAG_ID.MATH],
	[TAG_NAMES.MENU, TAG_ID.MENU],
	[TAG_NAMES.META, TAG_ID.META],
	[TAG_NAMES.MGLYPH, TAG_ID.MGLYPH],
	[TAG_NAMES.MI, TAG_ID.MI],
	[TAG_NAMES.MO, TAG_ID.MO],
	[TAG_NAMES.MN, TAG_ID.MN],
	[TAG_NAMES.MS, TAG_ID.MS],
	[TAG_NAMES.MTEXT, TAG_ID.MTEXT],
	[TAG_NAMES.NAV, TAG_ID.NAV],
	[TAG_NAMES.NOBR, TAG_ID.NOBR],
	[TAG_NAMES.NOFRAMES, TAG_ID.NOFRAMES],
	[TAG_NAMES.NOEMBED, TAG_ID.NOEMBED],
	[TAG_NAMES.NOSCRIPT, TAG_ID.NOSCRIPT],
	[TAG_NAMES.OBJECT, TAG_ID.OBJECT],
	[TAG_NAMES.OL, TAG_ID.OL],
	[TAG_NAMES.OPTGROUP, TAG_ID.OPTGROUP],
	[TAG_NAMES.OPTION, TAG_ID.OPTION],
	[TAG_NAMES.P, TAG_ID.P],
	[TAG_NAMES.PARAM, TAG_ID.PARAM],
	[TAG_NAMES.PLAINTEXT, TAG_ID.PLAINTEXT],
	[TAG_NAMES.PRE, TAG_ID.PRE],
	[TAG_NAMES.RB, TAG_ID.RB],
	[TAG_NAMES.RP, TAG_ID.RP],
	[TAG_NAMES.RT, TAG_ID.RT],
	[TAG_NAMES.RTC, TAG_ID.RTC],
	[TAG_NAMES.RUBY, TAG_ID.RUBY],
	[TAG_NAMES.S, TAG_ID.S],
	[TAG_NAMES.SCRIPT, TAG_ID.SCRIPT],
	[TAG_NAMES.SECTION, TAG_ID.SECTION],
	[TAG_NAMES.SELECT, TAG_ID.SELECT],
	[TAG_NAMES.SOURCE, TAG_ID.SOURCE],
	[TAG_NAMES.SMALL, TAG_ID.SMALL],
	[TAG_NAMES.SPAN, TAG_ID.SPAN],
	[TAG_NAMES.STRIKE, TAG_ID.STRIKE],
	[TAG_NAMES.STRONG, TAG_ID.STRONG],
	[TAG_NAMES.STYLE, TAG_ID.STYLE],
	[TAG_NAMES.SUB, TAG_ID.SUB],
	[TAG_NAMES.SUMMARY, TAG_ID.SUMMARY],
	[TAG_NAMES.SUP, TAG_ID.SUP],
	[TAG_NAMES.TABLE, TAG_ID.TABLE],
	[TAG_NAMES.TBODY, TAG_ID.TBODY],
	[TAG_NAMES.TEMPLATE, TAG_ID.TEMPLATE],
	[TAG_NAMES.TEXTAREA, TAG_ID.TEXTAREA],
	[TAG_NAMES.TFOOT, TAG_ID.TFOOT],
	[TAG_NAMES.TD, TAG_ID.TD],
	[TAG_NAMES.TH, TAG_ID.TH],
	[TAG_NAMES.THEAD, TAG_ID.THEAD],
	[TAG_NAMES.TITLE, TAG_ID.TITLE],
	[TAG_NAMES.TR, TAG_ID.TR],
	[TAG_NAMES.TRACK, TAG_ID.TRACK],
	[TAG_NAMES.TT, TAG_ID.TT],
	[TAG_NAMES.U, TAG_ID.U],
	[TAG_NAMES.UL, TAG_ID.UL],
	[TAG_NAMES.SVG, TAG_ID.SVG],
	[TAG_NAMES.VAR, TAG_ID.VAR],
	[TAG_NAMES.WBR, TAG_ID.WBR],
	[TAG_NAMES.XMP, TAG_ID.XMP]
]);
function getTagID(tagName) {
	var _a;
	return (_a = TAG_NAME_TO_ID.get(tagName)) !== null && _a !== void 0 ? _a : TAG_ID.UNKNOWN;
}
var $ = TAG_ID;
var SPECIAL_ELEMENTS = {
	[NS.HTML]: /* @__PURE__ */ new Set([
		$.ADDRESS,
		$.APPLET,
		$.AREA,
		$.ARTICLE,
		$.ASIDE,
		$.BASE,
		$.BASEFONT,
		$.BGSOUND,
		$.BLOCKQUOTE,
		$.BODY,
		$.BR,
		$.BUTTON,
		$.CAPTION,
		$.CENTER,
		$.COL,
		$.COLGROUP,
		$.DD,
		$.DETAILS,
		$.DIR,
		$.DIV,
		$.DL,
		$.DT,
		$.EMBED,
		$.FIELDSET,
		$.FIGCAPTION,
		$.FIGURE,
		$.FOOTER,
		$.FORM,
		$.FRAME,
		$.FRAMESET,
		$.H1,
		$.H2,
		$.H3,
		$.H4,
		$.H5,
		$.H6,
		$.HEAD,
		$.HEADER,
		$.HGROUP,
		$.HR,
		$.HTML,
		$.IFRAME,
		$.IMG,
		$.INPUT,
		$.LI,
		$.LINK,
		$.LISTING,
		$.MAIN,
		$.MARQUEE,
		$.MENU,
		$.META,
		$.NAV,
		$.NOEMBED,
		$.NOFRAMES,
		$.NOSCRIPT,
		$.OBJECT,
		$.OL,
		$.P,
		$.PARAM,
		$.PLAINTEXT,
		$.PRE,
		$.SCRIPT,
		$.SECTION,
		$.SELECT,
		$.SOURCE,
		$.STYLE,
		$.SUMMARY,
		$.TABLE,
		$.TBODY,
		$.TD,
		$.TEMPLATE,
		$.TEXTAREA,
		$.TFOOT,
		$.TH,
		$.THEAD,
		$.TITLE,
		$.TR,
		$.TRACK,
		$.UL,
		$.WBR,
		$.XMP
	]),
	[NS.MATHML]: /* @__PURE__ */ new Set([
		$.MI,
		$.MO,
		$.MN,
		$.MS,
		$.MTEXT,
		$.ANNOTATION_XML
	]),
	[NS.SVG]: /* @__PURE__ */ new Set([
		$.TITLE,
		$.FOREIGN_OBJECT,
		$.DESC
	]),
	[NS.XLINK]: /* @__PURE__ */ new Set(),
	[NS.XML]: /* @__PURE__ */ new Set(),
	[NS.XMLNS]: /* @__PURE__ */ new Set()
};
function isNumberedHeader(tn) {
	return tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6;
}
TAG_NAMES.STYLE, TAG_NAMES.SCRIPT, TAG_NAMES.XMP, TAG_NAMES.IFRAME, TAG_NAMES.NOEMBED, TAG_NAMES.NOFRAMES, TAG_NAMES.PLAINTEXT;
//#endregion
//#region node_modules/.pnpm/parse5@7.0.0/node_modules/parse5/dist/tokenizer/index.js
var C1_CONTROLS_REFERENCE_REPLACEMENTS = /* @__PURE__ */ new Map([
	[128, 8364],
	[130, 8218],
	[131, 402],
	[132, 8222],
	[133, 8230],
	[134, 8224],
	[135, 8225],
	[136, 710],
	[137, 8240],
	[138, 352],
	[139, 8249],
	[140, 338],
	[142, 381],
	[145, 8216],
	[146, 8217],
	[147, 8220],
	[148, 8221],
	[149, 8226],
	[150, 8211],
	[151, 8212],
	[152, 732],
	[153, 8482],
	[154, 353],
	[155, 8250],
	[156, 339],
	[158, 382],
	[159, 376]
]);
var State;
(function(State) {
	State[State["DATA"] = 0] = "DATA";
	State[State["RCDATA"] = 1] = "RCDATA";
	State[State["RAWTEXT"] = 2] = "RAWTEXT";
	State[State["SCRIPT_DATA"] = 3] = "SCRIPT_DATA";
	State[State["PLAINTEXT"] = 4] = "PLAINTEXT";
	State[State["TAG_OPEN"] = 5] = "TAG_OPEN";
	State[State["END_TAG_OPEN"] = 6] = "END_TAG_OPEN";
	State[State["TAG_NAME"] = 7] = "TAG_NAME";
	State[State["RCDATA_LESS_THAN_SIGN"] = 8] = "RCDATA_LESS_THAN_SIGN";
	State[State["RCDATA_END_TAG_OPEN"] = 9] = "RCDATA_END_TAG_OPEN";
	State[State["RCDATA_END_TAG_NAME"] = 10] = "RCDATA_END_TAG_NAME";
	State[State["RAWTEXT_LESS_THAN_SIGN"] = 11] = "RAWTEXT_LESS_THAN_SIGN";
	State[State["RAWTEXT_END_TAG_OPEN"] = 12] = "RAWTEXT_END_TAG_OPEN";
	State[State["RAWTEXT_END_TAG_NAME"] = 13] = "RAWTEXT_END_TAG_NAME";
	State[State["SCRIPT_DATA_LESS_THAN_SIGN"] = 14] = "SCRIPT_DATA_LESS_THAN_SIGN";
	State[State["SCRIPT_DATA_END_TAG_OPEN"] = 15] = "SCRIPT_DATA_END_TAG_OPEN";
	State[State["SCRIPT_DATA_END_TAG_NAME"] = 16] = "SCRIPT_DATA_END_TAG_NAME";
	State[State["SCRIPT_DATA_ESCAPE_START"] = 17] = "SCRIPT_DATA_ESCAPE_START";
	State[State["SCRIPT_DATA_ESCAPE_START_DASH"] = 18] = "SCRIPT_DATA_ESCAPE_START_DASH";
	State[State["SCRIPT_DATA_ESCAPED"] = 19] = "SCRIPT_DATA_ESCAPED";
	State[State["SCRIPT_DATA_ESCAPED_DASH"] = 20] = "SCRIPT_DATA_ESCAPED_DASH";
	State[State["SCRIPT_DATA_ESCAPED_DASH_DASH"] = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH";
	State[State["SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN"] = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN";
	State[State["SCRIPT_DATA_ESCAPED_END_TAG_OPEN"] = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN";
	State[State["SCRIPT_DATA_ESCAPED_END_TAG_NAME"] = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME";
	State[State["SCRIPT_DATA_DOUBLE_ESCAPE_START"] = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START";
	State[State["SCRIPT_DATA_DOUBLE_ESCAPED"] = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED";
	State[State["SCRIPT_DATA_DOUBLE_ESCAPED_DASH"] = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH";
	State[State["SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH"] = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH";
	State[State["SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN"] = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN";
	State[State["SCRIPT_DATA_DOUBLE_ESCAPE_END"] = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END";
	State[State["BEFORE_ATTRIBUTE_NAME"] = 31] = "BEFORE_ATTRIBUTE_NAME";
	State[State["ATTRIBUTE_NAME"] = 32] = "ATTRIBUTE_NAME";
	State[State["AFTER_ATTRIBUTE_NAME"] = 33] = "AFTER_ATTRIBUTE_NAME";
	State[State["BEFORE_ATTRIBUTE_VALUE"] = 34] = "BEFORE_ATTRIBUTE_VALUE";
	State[State["ATTRIBUTE_VALUE_DOUBLE_QUOTED"] = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED";
	State[State["ATTRIBUTE_VALUE_SINGLE_QUOTED"] = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED";
	State[State["ATTRIBUTE_VALUE_UNQUOTED"] = 37] = "ATTRIBUTE_VALUE_UNQUOTED";
	State[State["AFTER_ATTRIBUTE_VALUE_QUOTED"] = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED";
	State[State["SELF_CLOSING_START_TAG"] = 39] = "SELF_CLOSING_START_TAG";
	State[State["BOGUS_COMMENT"] = 40] = "BOGUS_COMMENT";
	State[State["MARKUP_DECLARATION_OPEN"] = 41] = "MARKUP_DECLARATION_OPEN";
	State[State["COMMENT_START"] = 42] = "COMMENT_START";
	State[State["COMMENT_START_DASH"] = 43] = "COMMENT_START_DASH";
	State[State["COMMENT"] = 44] = "COMMENT";
	State[State["COMMENT_LESS_THAN_SIGN"] = 45] = "COMMENT_LESS_THAN_SIGN";
	State[State["COMMENT_LESS_THAN_SIGN_BANG"] = 46] = "COMMENT_LESS_THAN_SIGN_BANG";
	State[State["COMMENT_LESS_THAN_SIGN_BANG_DASH"] = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH";
	State[State["COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH"] = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH";
	State[State["COMMENT_END_DASH"] = 49] = "COMMENT_END_DASH";
	State[State["COMMENT_END"] = 50] = "COMMENT_END";
	State[State["COMMENT_END_BANG"] = 51] = "COMMENT_END_BANG";
	State[State["DOCTYPE"] = 52] = "DOCTYPE";
	State[State["BEFORE_DOCTYPE_NAME"] = 53] = "BEFORE_DOCTYPE_NAME";
	State[State["DOCTYPE_NAME"] = 54] = "DOCTYPE_NAME";
	State[State["AFTER_DOCTYPE_NAME"] = 55] = "AFTER_DOCTYPE_NAME";
	State[State["AFTER_DOCTYPE_PUBLIC_KEYWORD"] = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD";
	State[State["BEFORE_DOCTYPE_PUBLIC_IDENTIFIER"] = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER";
	State[State["DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED"] = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED";
	State[State["DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED"] = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED";
	State[State["AFTER_DOCTYPE_PUBLIC_IDENTIFIER"] = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER";
	State[State["BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS"] = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS";
	State[State["AFTER_DOCTYPE_SYSTEM_KEYWORD"] = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD";
	State[State["BEFORE_DOCTYPE_SYSTEM_IDENTIFIER"] = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER";
	State[State["DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED"] = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED";
	State[State["DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED"] = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED";
	State[State["AFTER_DOCTYPE_SYSTEM_IDENTIFIER"] = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER";
	State[State["BOGUS_DOCTYPE"] = 67] = "BOGUS_DOCTYPE";
	State[State["CDATA_SECTION"] = 68] = "CDATA_SECTION";
	State[State["CDATA_SECTION_BRACKET"] = 69] = "CDATA_SECTION_BRACKET";
	State[State["CDATA_SECTION_END"] = 70] = "CDATA_SECTION_END";
	State[State["CHARACTER_REFERENCE"] = 71] = "CHARACTER_REFERENCE";
	State[State["NAMED_CHARACTER_REFERENCE"] = 72] = "NAMED_CHARACTER_REFERENCE";
	State[State["AMBIGUOUS_AMPERSAND"] = 73] = "AMBIGUOUS_AMPERSAND";
	State[State["NUMERIC_CHARACTER_REFERENCE"] = 74] = "NUMERIC_CHARACTER_REFERENCE";
	State[State["HEXADEMICAL_CHARACTER_REFERENCE_START"] = 75] = "HEXADEMICAL_CHARACTER_REFERENCE_START";
	State[State["DECIMAL_CHARACTER_REFERENCE_START"] = 76] = "DECIMAL_CHARACTER_REFERENCE_START";
	State[State["HEXADEMICAL_CHARACTER_REFERENCE"] = 77] = "HEXADEMICAL_CHARACTER_REFERENCE";
	State[State["DECIMAL_CHARACTER_REFERENCE"] = 78] = "DECIMAL_CHARACTER_REFERENCE";
	State[State["NUMERIC_CHARACTER_REFERENCE_END"] = 79] = "NUMERIC_CHARACTER_REFERENCE_END";
})(State || (State = {}));
var TokenizerMode = {
	DATA: State.DATA,
	RCDATA: State.RCDATA,
	RAWTEXT: State.RAWTEXT,
	SCRIPT_DATA: State.SCRIPT_DATA,
	PLAINTEXT: State.PLAINTEXT,
	CDATA_SECTION: State.CDATA_SECTION
};
function isAsciiDigit(cp) {
	return cp >= CODE_POINTS.DIGIT_0 && cp <= CODE_POINTS.DIGIT_9;
}
function isAsciiUpper(cp) {
	return cp >= CODE_POINTS.LATIN_CAPITAL_A && cp <= CODE_POINTS.LATIN_CAPITAL_Z;
}
function isAsciiLower(cp) {
	return cp >= CODE_POINTS.LATIN_SMALL_A && cp <= CODE_POINTS.LATIN_SMALL_Z;
}
function isAsciiLetter(cp) {
	return isAsciiLower(cp) || isAsciiUpper(cp);
}
function isAsciiAlphaNumeric(cp) {
	return isAsciiLetter(cp) || isAsciiDigit(cp);
}
function isAsciiUpperHexDigit(cp) {
	return cp >= CODE_POINTS.LATIN_CAPITAL_A && cp <= CODE_POINTS.LATIN_CAPITAL_F;
}
function isAsciiLowerHexDigit(cp) {
	return cp >= CODE_POINTS.LATIN_SMALL_A && cp <= CODE_POINTS.LATIN_SMALL_F;
}
function isAsciiHexDigit(cp) {
	return isAsciiDigit(cp) || isAsciiUpperHexDigit(cp) || isAsciiLowerHexDigit(cp);
}
function toAsciiLower(cp) {
	return cp + 32;
}
function isWhitespace(cp) {
	return cp === CODE_POINTS.SPACE || cp === CODE_POINTS.LINE_FEED || cp === CODE_POINTS.TABULATION || cp === CODE_POINTS.FORM_FEED;
}
function isEntityInAttributeInvalidEnd(nextCp) {
	return nextCp === CODE_POINTS.EQUALS_SIGN || isAsciiAlphaNumeric(nextCp);
}
function isScriptDataDoubleEscapeSequenceEnd(cp) {
	return isWhitespace(cp) || cp === CODE_POINTS.SOLIDUS || cp === CODE_POINTS.GREATER_THAN_SIGN;
}
var Tokenizer = class {
	constructor(options, handler) {
		this.options = options;
		this.handler = handler;
		this.paused = false;
		/** Ensures that the parsing loop isn't run multiple times at once. */
		this.inLoop = false;
		/**
		* Indicates that the current adjusted node exists, is not an element in the HTML namespace,
		* and that it is not an integration point for either MathML or HTML.
		*
		* @see {@link https://html.spec.whatwg.org/multipage/parsing.html#tree-construction}
		*/
		this.inForeignNode = false;
		this.lastStartTagName = "";
		this.active = false;
		this.state = State.DATA;
		this.returnState = State.DATA;
		this.charRefCode = -1;
		this.consumedAfterSnapshot = -1;
		this.currentCharacterToken = null;
		this.currentToken = null;
		this.currentAttr = {
			name: "",
			value: ""
		};
		this.preprocessor = new Preprocessor(handler);
		this.currentLocation = this.getCurrentLocation(-1);
	}
	_err(code) {
		var _a, _b;
		(_b = (_a = this.handler).onParseError) === null || _b === void 0 || _b.call(_a, this.preprocessor.getError(code));
	}
	getCurrentLocation(offset) {
		if (!this.options.sourceCodeLocationInfo) return null;
		return {
			startLine: this.preprocessor.line,
			startCol: this.preprocessor.col - offset,
			startOffset: this.preprocessor.offset - offset,
			endLine: -1,
			endCol: -1,
			endOffset: -1
		};
	}
	_runParsingLoop() {
		if (this.inLoop) return;
		this.inLoop = true;
		while (this.active && !this.paused) {
			this.consumedAfterSnapshot = 0;
			const cp = this._consume();
			if (!this._ensureHibernation()) this._callState(cp);
		}
		this.inLoop = false;
	}
	pause() {
		this.paused = true;
	}
	resume(writeCallback) {
		if (!this.paused) throw new Error("Parser was already resumed");
		this.paused = false;
		if (this.inLoop) return;
		this._runParsingLoop();
		if (!this.paused) writeCallback === null || writeCallback === void 0 || writeCallback();
	}
	write(chunk, isLastChunk, writeCallback) {
		this.active = true;
		this.preprocessor.write(chunk, isLastChunk);
		this._runParsingLoop();
		if (!this.paused) writeCallback === null || writeCallback === void 0 || writeCallback();
	}
	insertHtmlAtCurrentPos(chunk) {
		this.active = true;
		this.preprocessor.insertHtmlAtCurrentPos(chunk);
		this._runParsingLoop();
	}
	_ensureHibernation() {
		if (this.preprocessor.endOfChunkHit) {
			this._unconsume(this.consumedAfterSnapshot);
			this.active = false;
			return true;
		}
		return false;
	}
	_consume() {
		this.consumedAfterSnapshot++;
		return this.preprocessor.advance();
	}
	_unconsume(count) {
		this.consumedAfterSnapshot -= count;
		this.preprocessor.retreat(count);
	}
	_reconsumeInState(state) {
		this.state = state;
		this._unconsume(1);
	}
	_advanceBy(count) {
		this.consumedAfterSnapshot += count;
		for (let i = 0; i < count; i++) this.preprocessor.advance();
	}
	_consumeSequenceIfMatch(pattern, caseSensitive) {
		if (this.preprocessor.startsWith(pattern, caseSensitive)) {
			this._advanceBy(pattern.length - 1);
			return true;
		}
		return false;
	}
	_createStartTagToken() {
		this.currentToken = {
			type: TokenType.START_TAG,
			tagName: "",
			tagID: TAG_ID.UNKNOWN,
			selfClosing: false,
			ackSelfClosing: false,
			attrs: [],
			location: this.getCurrentLocation(1)
		};
	}
	_createEndTagToken() {
		this.currentToken = {
			type: TokenType.END_TAG,
			tagName: "",
			tagID: TAG_ID.UNKNOWN,
			selfClosing: false,
			ackSelfClosing: false,
			attrs: [],
			location: this.getCurrentLocation(2)
		};
	}
	_createCommentToken(offset) {
		this.currentToken = {
			type: TokenType.COMMENT,
			data: "",
			location: this.getCurrentLocation(offset)
		};
	}
	_createDoctypeToken(initialName) {
		this.currentToken = {
			type: TokenType.DOCTYPE,
			name: initialName,
			forceQuirks: false,
			publicId: null,
			systemId: null,
			location: this.currentLocation
		};
	}
	_createCharacterToken(type, chars) {
		this.currentCharacterToken = {
			type,
			chars,
			location: this.currentLocation
		};
	}
	_createAttr(attrNameFirstCh) {
		this.currentAttr = {
			name: attrNameFirstCh,
			value: ""
		};
		this.currentLocation = this.getCurrentLocation(0);
	}
	_leaveAttrName() {
		var _a;
		var _b;
		const token = this.currentToken;
		if (getTokenAttr(token, this.currentAttr.name) === null) {
			token.attrs.push(this.currentAttr);
			if (token.location && this.currentLocation) {
				const attrLocations = (_a = (_b = token.location).attrs) !== null && _a !== void 0 ? _a : _b.attrs = Object.create(null);
				attrLocations[this.currentAttr.name] = this.currentLocation;
				this._leaveAttrValue();
			}
		} else this._err(ERR.duplicateAttribute);
	}
	_leaveAttrValue() {
		if (this.currentLocation) {
			this.currentLocation.endLine = this.preprocessor.line;
			this.currentLocation.endCol = this.preprocessor.col;
			this.currentLocation.endOffset = this.preprocessor.offset;
		}
	}
	prepareToken(ct) {
		this._emitCurrentCharacterToken(ct.location);
		this.currentToken = null;
		if (ct.location) {
			ct.location.endLine = this.preprocessor.line;
			ct.location.endCol = this.preprocessor.col + 1;
			ct.location.endOffset = this.preprocessor.offset + 1;
		}
		this.currentLocation = this.getCurrentLocation(-1);
	}
	emitCurrentTagToken() {
		const ct = this.currentToken;
		this.prepareToken(ct);
		ct.tagID = getTagID(ct.tagName);
		if (ct.type === TokenType.START_TAG) {
			this.lastStartTagName = ct.tagName;
			this.handler.onStartTag(ct);
		} else {
			if (ct.attrs.length > 0) this._err(ERR.endTagWithAttributes);
			if (ct.selfClosing) this._err(ERR.endTagWithTrailingSolidus);
			this.handler.onEndTag(ct);
		}
		this.preprocessor.dropParsedChunk();
	}
	emitCurrentComment(ct) {
		this.prepareToken(ct);
		this.handler.onComment(ct);
		this.preprocessor.dropParsedChunk();
	}
	emitCurrentDoctype(ct) {
		this.prepareToken(ct);
		this.handler.onDoctype(ct);
		this.preprocessor.dropParsedChunk();
	}
	_emitCurrentCharacterToken(nextLocation) {
		if (this.currentCharacterToken) {
			if (nextLocation && this.currentCharacterToken.location) {
				this.currentCharacterToken.location.endLine = nextLocation.startLine;
				this.currentCharacterToken.location.endCol = nextLocation.startCol;
				this.currentCharacterToken.location.endOffset = nextLocation.startOffset;
			}
			switch (this.currentCharacterToken.type) {
				case TokenType.CHARACTER:
					this.handler.onCharacter(this.currentCharacterToken);
					break;
				case TokenType.NULL_CHARACTER:
					this.handler.onNullCharacter(this.currentCharacterToken);
					break;
				case TokenType.WHITESPACE_CHARACTER: this.handler.onWhitespaceCharacter(this.currentCharacterToken);
			}
			this.currentCharacterToken = null;
		}
	}
	_emitEOFToken() {
		const location = this.getCurrentLocation(0);
		if (location) {
			location.endLine = location.startLine;
			location.endCol = location.startCol;
			location.endOffset = location.startOffset;
		}
		this._emitCurrentCharacterToken(location);
		this.handler.onEof({
			type: TokenType.EOF,
			location
		});
		this.active = false;
	}
	_appendCharToCurrentCharacterToken(type, ch) {
		if (this.currentCharacterToken) {
			if (this.currentCharacterToken.type !== type) {
				this.currentLocation = this.getCurrentLocation(0);
				this._emitCurrentCharacterToken(this.currentLocation);
				this.preprocessor.dropParsedChunk();
			} else {
				this.currentCharacterToken.chars += ch;
				return;
			}
		}
		this._createCharacterToken(type, ch);
	}
	_emitCodePoint(cp) {
		let type = TokenType.CHARACTER;
		if (isWhitespace(cp)) type = TokenType.WHITESPACE_CHARACTER;
		else if (cp === CODE_POINTS.NULL) type = TokenType.NULL_CHARACTER;
		this._appendCharToCurrentCharacterToken(type, String.fromCodePoint(cp));
	}
	_emitChars(ch) {
		this._appendCharToCurrentCharacterToken(TokenType.CHARACTER, ch);
	}
	_matchNamedCharacterReference(cp) {
		let result = null;
		let excess = 0;
		let withoutSemicolon = false;
		for (let i = 0, current = decode_data_html_default[0]; i >= 0; cp = this._consume()) {
			i = determineBranch(decode_data_html_default, current, i + 1, cp);
			if (i < 0) break;
			excess += 1;
			current = decode_data_html_default[i];
			const masked = current & BinTrieFlags.VALUE_LENGTH;
			if (masked) {
				const valueLength = (masked >> 14) - 1;
				if (cp !== CODE_POINTS.SEMICOLON && this._isCharacterReferenceInAttribute() && isEntityInAttributeInvalidEnd(this.preprocessor.peek(1))) {
					result = [CODE_POINTS.AMPERSAND];
					i += valueLength;
				} else {
					result = valueLength === 0 ? [decode_data_html_default[i] & ~BinTrieFlags.VALUE_LENGTH] : valueLength === 1 ? [decode_data_html_default[++i]] : [decode_data_html_default[++i], decode_data_html_default[++i]];
					excess = 0;
					withoutSemicolon = cp !== CODE_POINTS.SEMICOLON;
				}
				if (valueLength === 0) {
					this._consume();
					break;
				}
			}
		}
		this._unconsume(excess);
		if (withoutSemicolon && !this.preprocessor.endOfChunkHit) this._err(ERR.missingSemicolonAfterCharacterReference);
		this._unconsume(1);
		return result;
	}
	_isCharacterReferenceInAttribute() {
		return this.returnState === State.ATTRIBUTE_VALUE_DOUBLE_QUOTED || this.returnState === State.ATTRIBUTE_VALUE_SINGLE_QUOTED || this.returnState === State.ATTRIBUTE_VALUE_UNQUOTED;
	}
	_flushCodePointConsumedAsCharacterReference(cp) {
		if (this._isCharacterReferenceInAttribute()) this.currentAttr.value += String.fromCodePoint(cp);
		else this._emitCodePoint(cp);
	}
	_callState(cp) {
		switch (this.state) {
			case State.DATA:
				this._stateData(cp);
				break;
			case State.RCDATA:
				this._stateRcdata(cp);
				break;
			case State.RAWTEXT:
				this._stateRawtext(cp);
				break;
			case State.SCRIPT_DATA:
				this._stateScriptData(cp);
				break;
			case State.PLAINTEXT:
				this._statePlaintext(cp);
				break;
			case State.TAG_OPEN:
				this._stateTagOpen(cp);
				break;
			case State.END_TAG_OPEN:
				this._stateEndTagOpen(cp);
				break;
			case State.TAG_NAME:
				this._stateTagName(cp);
				break;
			case State.RCDATA_LESS_THAN_SIGN:
				this._stateRcdataLessThanSign(cp);
				break;
			case State.RCDATA_END_TAG_OPEN:
				this._stateRcdataEndTagOpen(cp);
				break;
			case State.RCDATA_END_TAG_NAME:
				this._stateRcdataEndTagName(cp);
				break;
			case State.RAWTEXT_LESS_THAN_SIGN:
				this._stateRawtextLessThanSign(cp);
				break;
			case State.RAWTEXT_END_TAG_OPEN:
				this._stateRawtextEndTagOpen(cp);
				break;
			case State.RAWTEXT_END_TAG_NAME:
				this._stateRawtextEndTagName(cp);
				break;
			case State.SCRIPT_DATA_LESS_THAN_SIGN:
				this._stateScriptDataLessThanSign(cp);
				break;
			case State.SCRIPT_DATA_END_TAG_OPEN:
				this._stateScriptDataEndTagOpen(cp);
				break;
			case State.SCRIPT_DATA_END_TAG_NAME:
				this._stateScriptDataEndTagName(cp);
				break;
			case State.SCRIPT_DATA_ESCAPE_START:
				this._stateScriptDataEscapeStart(cp);
				break;
			case State.SCRIPT_DATA_ESCAPE_START_DASH:
				this._stateScriptDataEscapeStartDash(cp);
				break;
			case State.SCRIPT_DATA_ESCAPED:
				this._stateScriptDataEscaped(cp);
				break;
			case State.SCRIPT_DATA_ESCAPED_DASH:
				this._stateScriptDataEscapedDash(cp);
				break;
			case State.SCRIPT_DATA_ESCAPED_DASH_DASH:
				this._stateScriptDataEscapedDashDash(cp);
				break;
			case State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:
				this._stateScriptDataEscapedLessThanSign(cp);
				break;
			case State.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:
				this._stateScriptDataEscapedEndTagOpen(cp);
				break;
			case State.SCRIPT_DATA_ESCAPED_END_TAG_NAME:
				this._stateScriptDataEscapedEndTagName(cp);
				break;
			case State.SCRIPT_DATA_DOUBLE_ESCAPE_START:
				this._stateScriptDataDoubleEscapeStart(cp);
				break;
			case State.SCRIPT_DATA_DOUBLE_ESCAPED:
				this._stateScriptDataDoubleEscaped(cp);
				break;
			case State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:
				this._stateScriptDataDoubleEscapedDash(cp);
				break;
			case State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:
				this._stateScriptDataDoubleEscapedDashDash(cp);
				break;
			case State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:
				this._stateScriptDataDoubleEscapedLessThanSign(cp);
				break;
			case State.SCRIPT_DATA_DOUBLE_ESCAPE_END:
				this._stateScriptDataDoubleEscapeEnd(cp);
				break;
			case State.BEFORE_ATTRIBUTE_NAME:
				this._stateBeforeAttributeName(cp);
				break;
			case State.ATTRIBUTE_NAME:
				this._stateAttributeName(cp);
				break;
			case State.AFTER_ATTRIBUTE_NAME:
				this._stateAfterAttributeName(cp);
				break;
			case State.BEFORE_ATTRIBUTE_VALUE:
				this._stateBeforeAttributeValue(cp);
				break;
			case State.ATTRIBUTE_VALUE_DOUBLE_QUOTED:
				this._stateAttributeValueDoubleQuoted(cp);
				break;
			case State.ATTRIBUTE_VALUE_SINGLE_QUOTED:
				this._stateAttributeValueSingleQuoted(cp);
				break;
			case State.ATTRIBUTE_VALUE_UNQUOTED:
				this._stateAttributeValueUnquoted(cp);
				break;
			case State.AFTER_ATTRIBUTE_VALUE_QUOTED:
				this._stateAfterAttributeValueQuoted(cp);
				break;
			case State.SELF_CLOSING_START_TAG:
				this._stateSelfClosingStartTag(cp);
				break;
			case State.BOGUS_COMMENT:
				this._stateBogusComment(cp);
				break;
			case State.MARKUP_DECLARATION_OPEN:
				this._stateMarkupDeclarationOpen(cp);
				break;
			case State.COMMENT_START:
				this._stateCommentStart(cp);
				break;
			case State.COMMENT_START_DASH:
				this._stateCommentStartDash(cp);
				break;
			case State.COMMENT:
				this._stateComment(cp);
				break;
			case State.COMMENT_LESS_THAN_SIGN:
				this._stateCommentLessThanSign(cp);
				break;
			case State.COMMENT_LESS_THAN_SIGN_BANG:
				this._stateCommentLessThanSignBang(cp);
				break;
			case State.COMMENT_LESS_THAN_SIGN_BANG_DASH:
				this._stateCommentLessThanSignBangDash(cp);
				break;
			case State.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:
				this._stateCommentLessThanSignBangDashDash(cp);
				break;
			case State.COMMENT_END_DASH:
				this._stateCommentEndDash(cp);
				break;
			case State.COMMENT_END:
				this._stateCommentEnd(cp);
				break;
			case State.COMMENT_END_BANG:
				this._stateCommentEndBang(cp);
				break;
			case State.DOCTYPE:
				this._stateDoctype(cp);
				break;
			case State.BEFORE_DOCTYPE_NAME:
				this._stateBeforeDoctypeName(cp);
				break;
			case State.DOCTYPE_NAME:
				this._stateDoctypeName(cp);
				break;
			case State.AFTER_DOCTYPE_NAME:
				this._stateAfterDoctypeName(cp);
				break;
			case State.AFTER_DOCTYPE_PUBLIC_KEYWORD:
				this._stateAfterDoctypePublicKeyword(cp);
				break;
			case State.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:
				this._stateBeforeDoctypePublicIdentifier(cp);
				break;
			case State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:
				this._stateDoctypePublicIdentifierDoubleQuoted(cp);
				break;
			case State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:
				this._stateDoctypePublicIdentifierSingleQuoted(cp);
				break;
			case State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:
				this._stateAfterDoctypePublicIdentifier(cp);
				break;
			case State.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:
				this._stateBetweenDoctypePublicAndSystemIdentifiers(cp);
				break;
			case State.AFTER_DOCTYPE_SYSTEM_KEYWORD:
				this._stateAfterDoctypeSystemKeyword(cp);
				break;
			case State.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:
				this._stateBeforeDoctypeSystemIdentifier(cp);
				break;
			case State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:
				this._stateDoctypeSystemIdentifierDoubleQuoted(cp);
				break;
			case State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:
				this._stateDoctypeSystemIdentifierSingleQuoted(cp);
				break;
			case State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:
				this._stateAfterDoctypeSystemIdentifier(cp);
				break;
			case State.BOGUS_DOCTYPE:
				this._stateBogusDoctype(cp);
				break;
			case State.CDATA_SECTION:
				this._stateCdataSection(cp);
				break;
			case State.CDATA_SECTION_BRACKET:
				this._stateCdataSectionBracket(cp);
				break;
			case State.CDATA_SECTION_END:
				this._stateCdataSectionEnd(cp);
				break;
			case State.CHARACTER_REFERENCE:
				this._stateCharacterReference(cp);
				break;
			case State.NAMED_CHARACTER_REFERENCE:
				this._stateNamedCharacterReference(cp);
				break;
			case State.AMBIGUOUS_AMPERSAND:
				this._stateAmbiguousAmpersand(cp);
				break;
			case State.NUMERIC_CHARACTER_REFERENCE:
				this._stateNumericCharacterReference(cp);
				break;
			case State.HEXADEMICAL_CHARACTER_REFERENCE_START:
				this._stateHexademicalCharacterReferenceStart(cp);
				break;
			case State.DECIMAL_CHARACTER_REFERENCE_START:
				this._stateDecimalCharacterReferenceStart(cp);
				break;
			case State.HEXADEMICAL_CHARACTER_REFERENCE:
				this._stateHexademicalCharacterReference(cp);
				break;
			case State.DECIMAL_CHARACTER_REFERENCE:
				this._stateDecimalCharacterReference(cp);
				break;
			case State.NUMERIC_CHARACTER_REFERENCE_END:
				this._stateNumericCharacterReferenceEnd();
				break;
			default: throw new Error("Unknown state");
		}
	}
	_stateData(cp) {
		switch (cp) {
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.TAG_OPEN;
				break;
			case CODE_POINTS.AMPERSAND:
				this.returnState = State.DATA;
				this.state = State.CHARACTER_REFERENCE;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				this._emitCodePoint(cp);
				break;
			case CODE_POINTS.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(cp);
		}
	}
	_stateRcdata(cp) {
		switch (cp) {
			case CODE_POINTS.AMPERSAND:
				this.returnState = State.RCDATA;
				this.state = State.CHARACTER_REFERENCE;
				break;
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.RCDATA_LESS_THAN_SIGN;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				this._emitChars("�");
				break;
			case CODE_POINTS.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(cp);
		}
	}
	_stateRawtext(cp) {
		switch (cp) {
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.RAWTEXT_LESS_THAN_SIGN;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				this._emitChars("�");
				break;
			case CODE_POINTS.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(cp);
		}
	}
	_stateScriptData(cp) {
		switch (cp) {
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.SCRIPT_DATA_LESS_THAN_SIGN;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				this._emitChars("�");
				break;
			case CODE_POINTS.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(cp);
		}
	}
	_statePlaintext(cp) {
		switch (cp) {
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				this._emitChars("�");
				break;
			case CODE_POINTS.EOF:
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(cp);
		}
	}
	_stateTagOpen(cp) {
		if (isAsciiLetter(cp)) {
			this._createStartTagToken();
			this.state = State.TAG_NAME;
			this._stateTagName(cp);
		} else switch (cp) {
			case CODE_POINTS.EXCLAMATION_MARK:
				this.state = State.MARKUP_DECLARATION_OPEN;
				break;
			case CODE_POINTS.SOLIDUS:
				this.state = State.END_TAG_OPEN;
				break;
			case CODE_POINTS.QUESTION_MARK:
				this._err(ERR.unexpectedQuestionMarkInsteadOfTagName);
				this._createCommentToken(1);
				this.state = State.BOGUS_COMMENT;
				this._stateBogusComment(cp);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofBeforeTagName);
				this._emitChars("<");
				this._emitEOFToken();
				break;
			default:
				this._err(ERR.invalidFirstCharacterOfTagName);
				this._emitChars("<");
				this.state = State.DATA;
				this._stateData(cp);
		}
	}
	_stateEndTagOpen(cp) {
		if (isAsciiLetter(cp)) {
			this._createEndTagToken();
			this.state = State.TAG_NAME;
			this._stateTagName(cp);
		} else switch (cp) {
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.missingEndTagName);
				this.state = State.DATA;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofBeforeTagName);
				this._emitChars("</");
				this._emitEOFToken();
				break;
			default:
				this._err(ERR.invalidFirstCharacterOfTagName);
				this._createCommentToken(2);
				this.state = State.BOGUS_COMMENT;
				this._stateBogusComment(cp);
		}
	}
	_stateTagName(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
				this.state = State.BEFORE_ATTRIBUTE_NAME;
				break;
			case CODE_POINTS.SOLIDUS:
				this.state = State.SELF_CLOSING_START_TAG;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.DATA;
				this.emitCurrentTagToken();
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				token.tagName += "�";
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInTag);
				this._emitEOFToken();
				break;
			default: token.tagName += String.fromCodePoint(isAsciiUpper(cp) ? toAsciiLower(cp) : cp);
		}
	}
	_stateRcdataLessThanSign(cp) {
		if (cp === CODE_POINTS.SOLIDUS) this.state = State.RCDATA_END_TAG_OPEN;
		else {
			this._emitChars("<");
			this.state = State.RCDATA;
			this._stateRcdata(cp);
		}
	}
	_stateRcdataEndTagOpen(cp) {
		if (isAsciiLetter(cp)) {
			this.state = State.RCDATA_END_TAG_NAME;
			this._stateRcdataEndTagName(cp);
		} else {
			this._emitChars("</");
			this.state = State.RCDATA;
			this._stateRcdata(cp);
		}
	}
	handleSpecialEndTag(_cp) {
		if (!this.preprocessor.startsWith(this.lastStartTagName, false)) return !this._ensureHibernation();
		this._createEndTagToken();
		const token = this.currentToken;
		token.tagName = this.lastStartTagName;
		switch (this.preprocessor.peek(this.lastStartTagName.length)) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
				this._advanceBy(this.lastStartTagName.length);
				this.state = State.BEFORE_ATTRIBUTE_NAME;
				return false;
			case CODE_POINTS.SOLIDUS:
				this._advanceBy(this.lastStartTagName.length);
				this.state = State.SELF_CLOSING_START_TAG;
				return false;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._advanceBy(this.lastStartTagName.length);
				this.emitCurrentTagToken();
				this.state = State.DATA;
				return false;
			default: return !this._ensureHibernation();
		}
	}
	_stateRcdataEndTagName(cp) {
		if (this.handleSpecialEndTag(cp)) {
			this._emitChars("</");
			this.state = State.RCDATA;
			this._stateRcdata(cp);
		}
	}
	_stateRawtextLessThanSign(cp) {
		if (cp === CODE_POINTS.SOLIDUS) this.state = State.RAWTEXT_END_TAG_OPEN;
		else {
			this._emitChars("<");
			this.state = State.RAWTEXT;
			this._stateRawtext(cp);
		}
	}
	_stateRawtextEndTagOpen(cp) {
		if (isAsciiLetter(cp)) {
			this.state = State.RAWTEXT_END_TAG_NAME;
			this._stateRawtextEndTagName(cp);
		} else {
			this._emitChars("</");
			this.state = State.RAWTEXT;
			this._stateRawtext(cp);
		}
	}
	_stateRawtextEndTagName(cp) {
		if (this.handleSpecialEndTag(cp)) {
			this._emitChars("</");
			this.state = State.RAWTEXT;
			this._stateRawtext(cp);
		}
	}
	_stateScriptDataLessThanSign(cp) {
		switch (cp) {
			case CODE_POINTS.SOLIDUS:
				this.state = State.SCRIPT_DATA_END_TAG_OPEN;
				break;
			case CODE_POINTS.EXCLAMATION_MARK:
				this.state = State.SCRIPT_DATA_ESCAPE_START;
				this._emitChars("<!");
				break;
			default:
				this._emitChars("<");
				this.state = State.SCRIPT_DATA;
				this._stateScriptData(cp);
		}
	}
	_stateScriptDataEndTagOpen(cp) {
		if (isAsciiLetter(cp)) {
			this.state = State.SCRIPT_DATA_END_TAG_NAME;
			this._stateScriptDataEndTagName(cp);
		} else {
			this._emitChars("</");
			this.state = State.SCRIPT_DATA;
			this._stateScriptData(cp);
		}
	}
	_stateScriptDataEndTagName(cp) {
		if (this.handleSpecialEndTag(cp)) {
			this._emitChars("</");
			this.state = State.SCRIPT_DATA;
			this._stateScriptData(cp);
		}
	}
	_stateScriptDataEscapeStart(cp) {
		if (cp === CODE_POINTS.HYPHEN_MINUS) {
			this.state = State.SCRIPT_DATA_ESCAPE_START_DASH;
			this._emitChars("-");
		} else {
			this.state = State.SCRIPT_DATA;
			this._stateScriptData(cp);
		}
	}
	_stateScriptDataEscapeStartDash(cp) {
		if (cp === CODE_POINTS.HYPHEN_MINUS) {
			this.state = State.SCRIPT_DATA_ESCAPED_DASH_DASH;
			this._emitChars("-");
		} else {
			this.state = State.SCRIPT_DATA;
			this._stateScriptData(cp);
		}
	}
	_stateScriptDataEscaped(cp) {
		switch (cp) {
			case CODE_POINTS.HYPHEN_MINUS:
				this.state = State.SCRIPT_DATA_ESCAPED_DASH;
				this._emitChars("-");
				break;
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				this._emitChars("�");
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInScriptHtmlCommentLikeText);
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(cp);
		}
	}
	_stateScriptDataEscapedDash(cp) {
		switch (cp) {
			case CODE_POINTS.HYPHEN_MINUS:
				this.state = State.SCRIPT_DATA_ESCAPED_DASH_DASH;
				this._emitChars("-");
				break;
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				this.state = State.SCRIPT_DATA_ESCAPED;
				this._emitChars("�");
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInScriptHtmlCommentLikeText);
				this._emitEOFToken();
				break;
			default:
				this.state = State.SCRIPT_DATA_ESCAPED;
				this._emitCodePoint(cp);
		}
	}
	_stateScriptDataEscapedDashDash(cp) {
		switch (cp) {
			case CODE_POINTS.HYPHEN_MINUS:
				this._emitChars("-");
				break;
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.SCRIPT_DATA;
				this._emitChars(">");
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				this.state = State.SCRIPT_DATA_ESCAPED;
				this._emitChars("�");
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInScriptHtmlCommentLikeText);
				this._emitEOFToken();
				break;
			default:
				this.state = State.SCRIPT_DATA_ESCAPED;
				this._emitCodePoint(cp);
		}
	}
	_stateScriptDataEscapedLessThanSign(cp) {
		if (cp === CODE_POINTS.SOLIDUS) this.state = State.SCRIPT_DATA_ESCAPED_END_TAG_OPEN;
		else if (isAsciiLetter(cp)) {
			this._emitChars("<");
			this.state = State.SCRIPT_DATA_DOUBLE_ESCAPE_START;
			this._stateScriptDataDoubleEscapeStart(cp);
		} else {
			this._emitChars("<");
			this.state = State.SCRIPT_DATA_ESCAPED;
			this._stateScriptDataEscaped(cp);
		}
	}
	_stateScriptDataEscapedEndTagOpen(cp) {
		if (isAsciiLetter(cp)) {
			this.state = State.SCRIPT_DATA_ESCAPED_END_TAG_NAME;
			this._stateScriptDataEscapedEndTagName(cp);
		} else {
			this._emitChars("</");
			this.state = State.SCRIPT_DATA_ESCAPED;
			this._stateScriptDataEscaped(cp);
		}
	}
	_stateScriptDataEscapedEndTagName(cp) {
		if (this.handleSpecialEndTag(cp)) {
			this._emitChars("</");
			this.state = State.SCRIPT_DATA_ESCAPED;
			this._stateScriptDataEscaped(cp);
		}
	}
	_stateScriptDataDoubleEscapeStart(cp) {
		if (this.preprocessor.startsWith(SEQUENCES.SCRIPT, false) && isScriptDataDoubleEscapeSequenceEnd(this.preprocessor.peek(SEQUENCES.SCRIPT.length))) {
			this._emitCodePoint(cp);
			for (let i = 0; i < SEQUENCES.SCRIPT.length; i++) this._emitCodePoint(this._consume());
			this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
		} else if (!this._ensureHibernation()) {
			this.state = State.SCRIPT_DATA_ESCAPED;
			this._stateScriptDataEscaped(cp);
		}
	}
	_stateScriptDataDoubleEscaped(cp) {
		switch (cp) {
			case CODE_POINTS.HYPHEN_MINUS:
				this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH;
				this._emitChars("-");
				break;
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
				this._emitChars("<");
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				this._emitChars("�");
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInScriptHtmlCommentLikeText);
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(cp);
		}
	}
	_stateScriptDataDoubleEscapedDash(cp) {
		switch (cp) {
			case CODE_POINTS.HYPHEN_MINUS:
				this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH;
				this._emitChars("-");
				break;
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
				this._emitChars("<");
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
				this._emitChars("�");
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInScriptHtmlCommentLikeText);
				this._emitEOFToken();
				break;
			default:
				this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
				this._emitCodePoint(cp);
		}
	}
	_stateScriptDataDoubleEscapedDashDash(cp) {
		switch (cp) {
			case CODE_POINTS.HYPHEN_MINUS:
				this._emitChars("-");
				break;
			case CODE_POINTS.LESS_THAN_SIGN:
				this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
				this._emitChars("<");
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.SCRIPT_DATA;
				this._emitChars(">");
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
				this._emitChars("�");
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInScriptHtmlCommentLikeText);
				this._emitEOFToken();
				break;
			default:
				this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
				this._emitCodePoint(cp);
		}
	}
	_stateScriptDataDoubleEscapedLessThanSign(cp) {
		if (cp === CODE_POINTS.SOLIDUS) {
			this.state = State.SCRIPT_DATA_DOUBLE_ESCAPE_END;
			this._emitChars("/");
		} else {
			this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
			this._stateScriptDataDoubleEscaped(cp);
		}
	}
	_stateScriptDataDoubleEscapeEnd(cp) {
		if (this.preprocessor.startsWith(SEQUENCES.SCRIPT, false) && isScriptDataDoubleEscapeSequenceEnd(this.preprocessor.peek(SEQUENCES.SCRIPT.length))) {
			this._emitCodePoint(cp);
			for (let i = 0; i < SEQUENCES.SCRIPT.length; i++) this._emitCodePoint(this._consume());
			this.state = State.SCRIPT_DATA_ESCAPED;
		} else if (!this._ensureHibernation()) {
			this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
			this._stateScriptDataDoubleEscaped(cp);
		}
	}
	_stateBeforeAttributeName(cp) {
		switch (cp) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: break;
			case CODE_POINTS.SOLIDUS:
			case CODE_POINTS.GREATER_THAN_SIGN:
			case CODE_POINTS.EOF:
				this.state = State.AFTER_ATTRIBUTE_NAME;
				this._stateAfterAttributeName(cp);
				break;
			case CODE_POINTS.EQUALS_SIGN:
				this._err(ERR.unexpectedEqualsSignBeforeAttributeName);
				this._createAttr("=");
				this.state = State.ATTRIBUTE_NAME;
				break;
			default:
				this._createAttr("");
				this.state = State.ATTRIBUTE_NAME;
				this._stateAttributeName(cp);
		}
	}
	_stateAttributeName(cp) {
		switch (cp) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
			case CODE_POINTS.SOLIDUS:
			case CODE_POINTS.GREATER_THAN_SIGN:
			case CODE_POINTS.EOF:
				this._leaveAttrName();
				this.state = State.AFTER_ATTRIBUTE_NAME;
				this._stateAfterAttributeName(cp);
				break;
			case CODE_POINTS.EQUALS_SIGN:
				this._leaveAttrName();
				this.state = State.BEFORE_ATTRIBUTE_VALUE;
				break;
			case CODE_POINTS.QUOTATION_MARK:
			case CODE_POINTS.APOSTROPHE:
			case CODE_POINTS.LESS_THAN_SIGN:
				this._err(ERR.unexpectedCharacterInAttributeName);
				this.currentAttr.name += String.fromCodePoint(cp);
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				this.currentAttr.name += "�";
				break;
			default: this.currentAttr.name += String.fromCodePoint(isAsciiUpper(cp) ? toAsciiLower(cp) : cp);
		}
	}
	_stateAfterAttributeName(cp) {
		switch (cp) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: break;
			case CODE_POINTS.SOLIDUS:
				this.state = State.SELF_CLOSING_START_TAG;
				break;
			case CODE_POINTS.EQUALS_SIGN:
				this.state = State.BEFORE_ATTRIBUTE_VALUE;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.DATA;
				this.emitCurrentTagToken();
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInTag);
				this._emitEOFToken();
				break;
			default:
				this._createAttr("");
				this.state = State.ATTRIBUTE_NAME;
				this._stateAttributeName(cp);
		}
	}
	_stateBeforeAttributeValue(cp) {
		switch (cp) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: break;
			case CODE_POINTS.QUOTATION_MARK:
				this.state = State.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
				break;
			case CODE_POINTS.APOSTROPHE:
				this.state = State.ATTRIBUTE_VALUE_SINGLE_QUOTED;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.missingAttributeValue);
				this.state = State.DATA;
				this.emitCurrentTagToken();
				break;
			default:
				this.state = State.ATTRIBUTE_VALUE_UNQUOTED;
				this._stateAttributeValueUnquoted(cp);
		}
	}
	_stateAttributeValueDoubleQuoted(cp) {
		switch (cp) {
			case CODE_POINTS.QUOTATION_MARK:
				this.state = State.AFTER_ATTRIBUTE_VALUE_QUOTED;
				break;
			case CODE_POINTS.AMPERSAND:
				this.returnState = State.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
				this.state = State.CHARACTER_REFERENCE;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				this.currentAttr.value += "�";
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInTag);
				this._emitEOFToken();
				break;
			default: this.currentAttr.value += String.fromCodePoint(cp);
		}
	}
	_stateAttributeValueSingleQuoted(cp) {
		switch (cp) {
			case CODE_POINTS.APOSTROPHE:
				this.state = State.AFTER_ATTRIBUTE_VALUE_QUOTED;
				break;
			case CODE_POINTS.AMPERSAND:
				this.returnState = State.ATTRIBUTE_VALUE_SINGLE_QUOTED;
				this.state = State.CHARACTER_REFERENCE;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				this.currentAttr.value += "�";
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInTag);
				this._emitEOFToken();
				break;
			default: this.currentAttr.value += String.fromCodePoint(cp);
		}
	}
	_stateAttributeValueUnquoted(cp) {
		switch (cp) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
				this._leaveAttrValue();
				this.state = State.BEFORE_ATTRIBUTE_NAME;
				break;
			case CODE_POINTS.AMPERSAND:
				this.returnState = State.ATTRIBUTE_VALUE_UNQUOTED;
				this.state = State.CHARACTER_REFERENCE;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._leaveAttrValue();
				this.state = State.DATA;
				this.emitCurrentTagToken();
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				this.currentAttr.value += "�";
				break;
			case CODE_POINTS.QUOTATION_MARK:
			case CODE_POINTS.APOSTROPHE:
			case CODE_POINTS.LESS_THAN_SIGN:
			case CODE_POINTS.EQUALS_SIGN:
			case CODE_POINTS.GRAVE_ACCENT:
				this._err(ERR.unexpectedCharacterInUnquotedAttributeValue);
				this.currentAttr.value += String.fromCodePoint(cp);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInTag);
				this._emitEOFToken();
				break;
			default: this.currentAttr.value += String.fromCodePoint(cp);
		}
	}
	_stateAfterAttributeValueQuoted(cp) {
		switch (cp) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
				this._leaveAttrValue();
				this.state = State.BEFORE_ATTRIBUTE_NAME;
				break;
			case CODE_POINTS.SOLIDUS:
				this._leaveAttrValue();
				this.state = State.SELF_CLOSING_START_TAG;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._leaveAttrValue();
				this.state = State.DATA;
				this.emitCurrentTagToken();
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInTag);
				this._emitEOFToken();
				break;
			default:
				this._err(ERR.missingWhitespaceBetweenAttributes);
				this.state = State.BEFORE_ATTRIBUTE_NAME;
				this._stateBeforeAttributeName(cp);
		}
	}
	_stateSelfClosingStartTag(cp) {
		switch (cp) {
			case CODE_POINTS.GREATER_THAN_SIGN: {
				const token = this.currentToken;
				token.selfClosing = true;
				this.state = State.DATA;
				this.emitCurrentTagToken();
				break;
			}
			case CODE_POINTS.EOF:
				this._err(ERR.eofInTag);
				this._emitEOFToken();
				break;
			default:
				this._err(ERR.unexpectedSolidusInTag);
				this.state = State.BEFORE_ATTRIBUTE_NAME;
				this._stateBeforeAttributeName(cp);
		}
	}
	_stateBogusComment(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.DATA;
				this.emitCurrentComment(token);
				break;
			case CODE_POINTS.EOF:
				this.emitCurrentComment(token);
				this._emitEOFToken();
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				token.data += "�";
				break;
			default: token.data += String.fromCodePoint(cp);
		}
	}
	_stateMarkupDeclarationOpen(cp) {
		if (this._consumeSequenceIfMatch(SEQUENCES.DASH_DASH, true)) {
			this._createCommentToken(SEQUENCES.DASH_DASH.length + 1);
			this.state = State.COMMENT_START;
		} else if (this._consumeSequenceIfMatch(SEQUENCES.DOCTYPE, false)) {
			this.currentLocation = this.getCurrentLocation(SEQUENCES.DOCTYPE.length + 1);
			this.state = State.DOCTYPE;
		} else if (this._consumeSequenceIfMatch(SEQUENCES.CDATA_START, true)) {
			if (this.inForeignNode) this.state = State.CDATA_SECTION;
			else {
				this._err(ERR.cdataInHtmlContent);
				this._createCommentToken(SEQUENCES.CDATA_START.length + 1);
				this.currentToken.data = "[CDATA[";
				this.state = State.BOGUS_COMMENT;
			}
		} else if (!this._ensureHibernation()) {
			this._err(ERR.incorrectlyOpenedComment);
			this._createCommentToken(2);
			this.state = State.BOGUS_COMMENT;
			this._stateBogusComment(cp);
		}
	}
	_stateCommentStart(cp) {
		switch (cp) {
			case CODE_POINTS.HYPHEN_MINUS:
				this.state = State.COMMENT_START_DASH;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN: {
				this._err(ERR.abruptClosingOfEmptyComment);
				this.state = State.DATA;
				const token = this.currentToken;
				this.emitCurrentComment(token);
				break;
			}
			default:
				this.state = State.COMMENT;
				this._stateComment(cp);
		}
	}
	_stateCommentStartDash(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.HYPHEN_MINUS:
				this.state = State.COMMENT_END;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.abruptClosingOfEmptyComment);
				this.state = State.DATA;
				this.emitCurrentComment(token);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInComment);
				this.emitCurrentComment(token);
				this._emitEOFToken();
				break;
			default:
				token.data += "-";
				this.state = State.COMMENT;
				this._stateComment(cp);
		}
	}
	_stateComment(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.HYPHEN_MINUS:
				this.state = State.COMMENT_END_DASH;
				break;
			case CODE_POINTS.LESS_THAN_SIGN:
				token.data += "<";
				this.state = State.COMMENT_LESS_THAN_SIGN;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				token.data += "�";
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInComment);
				this.emitCurrentComment(token);
				this._emitEOFToken();
				break;
			default: token.data += String.fromCodePoint(cp);
		}
	}
	_stateCommentLessThanSign(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.EXCLAMATION_MARK:
				token.data += "!";
				this.state = State.COMMENT_LESS_THAN_SIGN_BANG;
				break;
			case CODE_POINTS.LESS_THAN_SIGN:
				token.data += "<";
				break;
			default:
				this.state = State.COMMENT;
				this._stateComment(cp);
		}
	}
	_stateCommentLessThanSignBang(cp) {
		if (cp === CODE_POINTS.HYPHEN_MINUS) this.state = State.COMMENT_LESS_THAN_SIGN_BANG_DASH;
		else {
			this.state = State.COMMENT;
			this._stateComment(cp);
		}
	}
	_stateCommentLessThanSignBangDash(cp) {
		if (cp === CODE_POINTS.HYPHEN_MINUS) this.state = State.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH;
		else {
			this.state = State.COMMENT_END_DASH;
			this._stateCommentEndDash(cp);
		}
	}
	_stateCommentLessThanSignBangDashDash(cp) {
		if (cp !== CODE_POINTS.GREATER_THAN_SIGN && cp !== CODE_POINTS.EOF) this._err(ERR.nestedComment);
		this.state = State.COMMENT_END;
		this._stateCommentEnd(cp);
	}
	_stateCommentEndDash(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.HYPHEN_MINUS:
				this.state = State.COMMENT_END;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInComment);
				this.emitCurrentComment(token);
				this._emitEOFToken();
				break;
			default:
				token.data += "-";
				this.state = State.COMMENT;
				this._stateComment(cp);
		}
	}
	_stateCommentEnd(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.DATA;
				this.emitCurrentComment(token);
				break;
			case CODE_POINTS.EXCLAMATION_MARK:
				this.state = State.COMMENT_END_BANG;
				break;
			case CODE_POINTS.HYPHEN_MINUS:
				token.data += "-";
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInComment);
				this.emitCurrentComment(token);
				this._emitEOFToken();
				break;
			default:
				token.data += "--";
				this.state = State.COMMENT;
				this._stateComment(cp);
		}
	}
	_stateCommentEndBang(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.HYPHEN_MINUS:
				token.data += "--!";
				this.state = State.COMMENT_END_DASH;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.incorrectlyClosedComment);
				this.state = State.DATA;
				this.emitCurrentComment(token);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInComment);
				this.emitCurrentComment(token);
				this._emitEOFToken();
				break;
			default:
				token.data += "--!";
				this.state = State.COMMENT;
				this._stateComment(cp);
		}
	}
	_stateDoctype(cp) {
		switch (cp) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
				this.state = State.BEFORE_DOCTYPE_NAME;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.BEFORE_DOCTYPE_NAME;
				this._stateBeforeDoctypeName(cp);
				break;
			case CODE_POINTS.EOF: {
				this._err(ERR.eofInDoctype);
				this._createDoctypeToken(null);
				const token = this.currentToken;
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this._emitEOFToken();
				break;
			}
			default:
				this._err(ERR.missingWhitespaceBeforeDoctypeName);
				this.state = State.BEFORE_DOCTYPE_NAME;
				this._stateBeforeDoctypeName(cp);
		}
	}
	_stateBeforeDoctypeName(cp) {
		if (isAsciiUpper(cp)) {
			this._createDoctypeToken(String.fromCharCode(toAsciiLower(cp)));
			this.state = State.DOCTYPE_NAME;
		} else switch (cp) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				this._createDoctypeToken("�");
				this.state = State.DOCTYPE_NAME;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN: {
				this._err(ERR.missingDoctypeName);
				this._createDoctypeToken(null);
				const token = this.currentToken;
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this.state = State.DATA;
				break;
			}
			case CODE_POINTS.EOF: {
				this._err(ERR.eofInDoctype);
				this._createDoctypeToken(null);
				const token = this.currentToken;
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this._emitEOFToken();
				break;
			}
			default:
				this._createDoctypeToken(String.fromCodePoint(cp));
				this.state = State.DOCTYPE_NAME;
		}
	}
	_stateDoctypeName(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
				this.state = State.AFTER_DOCTYPE_NAME;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.DATA;
				this.emitCurrentDoctype(token);
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				token.name += "�";
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype);
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this._emitEOFToken();
				break;
			default: token.name += String.fromCodePoint(isAsciiUpper(cp) ? toAsciiLower(cp) : cp);
		}
	}
	_stateAfterDoctypeName(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.DATA;
				this.emitCurrentDoctype(token);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype);
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this._emitEOFToken();
				break;
			default: if (this._consumeSequenceIfMatch(SEQUENCES.PUBLIC, false)) this.state = State.AFTER_DOCTYPE_PUBLIC_KEYWORD;
			else if (this._consumeSequenceIfMatch(SEQUENCES.SYSTEM, false)) this.state = State.AFTER_DOCTYPE_SYSTEM_KEYWORD;
			else if (!this._ensureHibernation()) {
				this._err(ERR.invalidCharacterSequenceAfterDoctypeName);
				token.forceQuirks = true;
				this.state = State.BOGUS_DOCTYPE;
				this._stateBogusDoctype(cp);
			}
		}
	}
	_stateAfterDoctypePublicKeyword(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
				this.state = State.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
				break;
			case CODE_POINTS.QUOTATION_MARK:
				this._err(ERR.missingWhitespaceAfterDoctypePublicKeyword);
				token.publicId = "";
				this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case CODE_POINTS.APOSTROPHE:
				this._err(ERR.missingWhitespaceAfterDoctypePublicKeyword);
				token.publicId = "";
				this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.missingDoctypePublicIdentifier);
				token.forceQuirks = true;
				this.state = State.DATA;
				this.emitCurrentDoctype(token);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype);
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this._emitEOFToken();
				break;
			default:
				this._err(ERR.missingQuoteBeforeDoctypePublicIdentifier);
				token.forceQuirks = true;
				this.state = State.BOGUS_DOCTYPE;
				this._stateBogusDoctype(cp);
		}
	}
	_stateBeforeDoctypePublicIdentifier(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: break;
			case CODE_POINTS.QUOTATION_MARK:
				token.publicId = "";
				this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case CODE_POINTS.APOSTROPHE:
				token.publicId = "";
				this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.missingDoctypePublicIdentifier);
				token.forceQuirks = true;
				this.state = State.DATA;
				this.emitCurrentDoctype(token);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype);
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this._emitEOFToken();
				break;
			default:
				this._err(ERR.missingQuoteBeforeDoctypePublicIdentifier);
				token.forceQuirks = true;
				this.state = State.BOGUS_DOCTYPE;
				this._stateBogusDoctype(cp);
		}
	}
	_stateDoctypePublicIdentifierDoubleQuoted(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.QUOTATION_MARK:
				this.state = State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				token.publicId += "�";
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.abruptDoctypePublicIdentifier);
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this.state = State.DATA;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype);
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this._emitEOFToken();
				break;
			default: token.publicId += String.fromCodePoint(cp);
		}
	}
	_stateDoctypePublicIdentifierSingleQuoted(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.APOSTROPHE:
				this.state = State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				token.publicId += "�";
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.abruptDoctypePublicIdentifier);
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this.state = State.DATA;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype);
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this._emitEOFToken();
				break;
			default: token.publicId += String.fromCodePoint(cp);
		}
	}
	_stateAfterDoctypePublicIdentifier(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
				this.state = State.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.DATA;
				this.emitCurrentDoctype(token);
				break;
			case CODE_POINTS.QUOTATION_MARK:
				this._err(ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
				token.systemId = "";
				this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case CODE_POINTS.APOSTROPHE:
				this._err(ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
				token.systemId = "";
				this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype);
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this._emitEOFToken();
				break;
			default:
				this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
				token.forceQuirks = true;
				this.state = State.BOGUS_DOCTYPE;
				this._stateBogusDoctype(cp);
		}
	}
	_stateBetweenDoctypePublicAndSystemIdentifiers(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.emitCurrentDoctype(token);
				this.state = State.DATA;
				break;
			case CODE_POINTS.QUOTATION_MARK:
				token.systemId = "";
				this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case CODE_POINTS.APOSTROPHE:
				token.systemId = "";
				this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype);
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this._emitEOFToken();
				break;
			default:
				this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
				token.forceQuirks = true;
				this.state = State.BOGUS_DOCTYPE;
				this._stateBogusDoctype(cp);
		}
	}
	_stateAfterDoctypeSystemKeyword(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED:
				this.state = State.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
				break;
			case CODE_POINTS.QUOTATION_MARK:
				this._err(ERR.missingWhitespaceAfterDoctypeSystemKeyword);
				token.systemId = "";
				this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case CODE_POINTS.APOSTROPHE:
				this._err(ERR.missingWhitespaceAfterDoctypeSystemKeyword);
				token.systemId = "";
				this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.missingDoctypeSystemIdentifier);
				token.forceQuirks = true;
				this.state = State.DATA;
				this.emitCurrentDoctype(token);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype);
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this._emitEOFToken();
				break;
			default:
				this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
				token.forceQuirks = true;
				this.state = State.BOGUS_DOCTYPE;
				this._stateBogusDoctype(cp);
		}
	}
	_stateBeforeDoctypeSystemIdentifier(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: break;
			case CODE_POINTS.QUOTATION_MARK:
				token.systemId = "";
				this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
				break;
			case CODE_POINTS.APOSTROPHE:
				token.systemId = "";
				this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.missingDoctypeSystemIdentifier);
				token.forceQuirks = true;
				this.state = State.DATA;
				this.emitCurrentDoctype(token);
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype);
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this._emitEOFToken();
				break;
			default:
				this._err(ERR.missingQuoteBeforeDoctypeSystemIdentifier);
				token.forceQuirks = true;
				this.state = State.BOGUS_DOCTYPE;
				this._stateBogusDoctype(cp);
		}
	}
	_stateDoctypeSystemIdentifierDoubleQuoted(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.QUOTATION_MARK:
				this.state = State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				token.systemId += "�";
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.abruptDoctypeSystemIdentifier);
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this.state = State.DATA;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype);
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this._emitEOFToken();
				break;
			default: token.systemId += String.fromCodePoint(cp);
		}
	}
	_stateDoctypeSystemIdentifierSingleQuoted(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.APOSTROPHE:
				this.state = State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				token.systemId += "�";
				break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this._err(ERR.abruptDoctypeSystemIdentifier);
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this.state = State.DATA;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype);
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this._emitEOFToken();
				break;
			default: token.systemId += String.fromCodePoint(cp);
		}
	}
	_stateAfterDoctypeSystemIdentifier(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.SPACE:
			case CODE_POINTS.LINE_FEED:
			case CODE_POINTS.TABULATION:
			case CODE_POINTS.FORM_FEED: break;
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.emitCurrentDoctype(token);
				this.state = State.DATA;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInDoctype);
				token.forceQuirks = true;
				this.emitCurrentDoctype(token);
				this._emitEOFToken();
				break;
			default:
				this._err(ERR.unexpectedCharacterAfterDoctypeSystemIdentifier);
				this.state = State.BOGUS_DOCTYPE;
				this._stateBogusDoctype(cp);
		}
	}
	_stateBogusDoctype(cp) {
		const token = this.currentToken;
		switch (cp) {
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.emitCurrentDoctype(token);
				this.state = State.DATA;
				break;
			case CODE_POINTS.NULL:
				this._err(ERR.unexpectedNullCharacter);
				break;
			case CODE_POINTS.EOF:
				this.emitCurrentDoctype(token);
				this._emitEOFToken();
		}
	}
	_stateCdataSection(cp) {
		switch (cp) {
			case CODE_POINTS.RIGHT_SQUARE_BRACKET:
				this.state = State.CDATA_SECTION_BRACKET;
				break;
			case CODE_POINTS.EOF:
				this._err(ERR.eofInCdata);
				this._emitEOFToken();
				break;
			default: this._emitCodePoint(cp);
		}
	}
	_stateCdataSectionBracket(cp) {
		if (cp === CODE_POINTS.RIGHT_SQUARE_BRACKET) this.state = State.CDATA_SECTION_END;
		else {
			this._emitChars("]");
			this.state = State.CDATA_SECTION;
			this._stateCdataSection(cp);
		}
	}
	_stateCdataSectionEnd(cp) {
		switch (cp) {
			case CODE_POINTS.GREATER_THAN_SIGN:
				this.state = State.DATA;
				break;
			case CODE_POINTS.RIGHT_SQUARE_BRACKET:
				this._emitChars("]");
				break;
			default:
				this._emitChars("]]");
				this.state = State.CDATA_SECTION;
				this._stateCdataSection(cp);
		}
	}
	_stateCharacterReference(cp) {
		if (cp === CODE_POINTS.NUMBER_SIGN) this.state = State.NUMERIC_CHARACTER_REFERENCE;
		else if (isAsciiAlphaNumeric(cp)) {
			this.state = State.NAMED_CHARACTER_REFERENCE;
			this._stateNamedCharacterReference(cp);
		} else {
			this._flushCodePointConsumedAsCharacterReference(CODE_POINTS.AMPERSAND);
			this._reconsumeInState(this.returnState);
		}
	}
	_stateNamedCharacterReference(cp) {
		const matchResult = this._matchNamedCharacterReference(cp);
		if (this._ensureHibernation()) {} else if (matchResult) {
			for (let i = 0; i < matchResult.length; i++) this._flushCodePointConsumedAsCharacterReference(matchResult[i]);
			this.state = this.returnState;
		} else {
			this._flushCodePointConsumedAsCharacterReference(CODE_POINTS.AMPERSAND);
			this.state = State.AMBIGUOUS_AMPERSAND;
		}
	}
	_stateAmbiguousAmpersand(cp) {
		if (isAsciiAlphaNumeric(cp)) this._flushCodePointConsumedAsCharacterReference(cp);
		else {
			if (cp === CODE_POINTS.SEMICOLON) this._err(ERR.unknownNamedCharacterReference);
			this._reconsumeInState(this.returnState);
		}
	}
	_stateNumericCharacterReference(cp) {
		this.charRefCode = 0;
		if (cp === CODE_POINTS.LATIN_SMALL_X || cp === CODE_POINTS.LATIN_CAPITAL_X) this.state = State.HEXADEMICAL_CHARACTER_REFERENCE_START;
		else {
			this.state = State.DECIMAL_CHARACTER_REFERENCE_START;
			this._stateDecimalCharacterReferenceStart(cp);
		}
	}
	_stateHexademicalCharacterReferenceStart(cp) {
		if (isAsciiHexDigit(cp)) {
			this.state = State.HEXADEMICAL_CHARACTER_REFERENCE;
			this._stateHexademicalCharacterReference(cp);
		} else {
			this._err(ERR.absenceOfDigitsInNumericCharacterReference);
			this._flushCodePointConsumedAsCharacterReference(CODE_POINTS.AMPERSAND);
			this._flushCodePointConsumedAsCharacterReference(CODE_POINTS.NUMBER_SIGN);
			this._unconsume(2);
			this.state = this.returnState;
		}
	}
	_stateDecimalCharacterReferenceStart(cp) {
		if (isAsciiDigit(cp)) {
			this.state = State.DECIMAL_CHARACTER_REFERENCE;
			this._stateDecimalCharacterReference(cp);
		} else {
			this._err(ERR.absenceOfDigitsInNumericCharacterReference);
			this._flushCodePointConsumedAsCharacterReference(CODE_POINTS.AMPERSAND);
			this._flushCodePointConsumedAsCharacterReference(CODE_POINTS.NUMBER_SIGN);
			this._reconsumeInState(this.returnState);
		}
	}
	_stateHexademicalCharacterReference(cp) {
		if (isAsciiUpperHexDigit(cp)) this.charRefCode = this.charRefCode * 16 + cp - 55;
		else if (isAsciiLowerHexDigit(cp)) this.charRefCode = this.charRefCode * 16 + cp - 87;
		else if (isAsciiDigit(cp)) this.charRefCode = this.charRefCode * 16 + cp - 48;
		else if (cp === CODE_POINTS.SEMICOLON) this.state = State.NUMERIC_CHARACTER_REFERENCE_END;
		else {
			this._err(ERR.missingSemicolonAfterCharacterReference);
			this.state = State.NUMERIC_CHARACTER_REFERENCE_END;
			this._stateNumericCharacterReferenceEnd();
		}
	}
	_stateDecimalCharacterReference(cp) {
		if (isAsciiDigit(cp)) this.charRefCode = this.charRefCode * 10 + cp - 48;
		else if (cp === CODE_POINTS.SEMICOLON) this.state = State.NUMERIC_CHARACTER_REFERENCE_END;
		else {
			this._err(ERR.missingSemicolonAfterCharacterReference);
			this.state = State.NUMERIC_CHARACTER_REFERENCE_END;
			this._stateNumericCharacterReferenceEnd();
		}
	}
	_stateNumericCharacterReferenceEnd() {
		if (this.charRefCode === CODE_POINTS.NULL) {
			this._err(ERR.nullCharacterReference);
			this.charRefCode = CODE_POINTS.REPLACEMENT_CHARACTER;
		} else if (this.charRefCode > 1114111) {
			this._err(ERR.characterReferenceOutsideUnicodeRange);
			this.charRefCode = CODE_POINTS.REPLACEMENT_CHARACTER;
		} else if (isSurrogate(this.charRefCode)) {
			this._err(ERR.surrogateCharacterReference);
			this.charRefCode = CODE_POINTS.REPLACEMENT_CHARACTER;
		} else if (isUndefinedCodePoint(this.charRefCode)) this._err(ERR.noncharacterCharacterReference);
		else if (isControlCodePoint(this.charRefCode) || this.charRefCode === CODE_POINTS.CARRIAGE_RETURN) {
			this._err(ERR.controlCharacterReference);
			const replacement = C1_CONTROLS_REFERENCE_REPLACEMENTS.get(this.charRefCode);
			if (replacement !== void 0) this.charRefCode = replacement;
		}
		this._flushCodePointConsumedAsCharacterReference(this.charRefCode);
		this._reconsumeInState(this.returnState);
	}
};
//#endregion
//#region node_modules/.pnpm/parse5@7.0.0/node_modules/parse5/dist/parser/open-element-stack.js
var IMPLICIT_END_TAG_REQUIRED = /* @__PURE__ */ new Set([
	TAG_ID.DD,
	TAG_ID.DT,
	TAG_ID.LI,
	TAG_ID.OPTGROUP,
	TAG_ID.OPTION,
	TAG_ID.P,
	TAG_ID.RB,
	TAG_ID.RP,
	TAG_ID.RT,
	TAG_ID.RTC
]);
var IMPLICIT_END_TAG_REQUIRED_THOROUGHLY = /* @__PURE__ */ new Set([
	...IMPLICIT_END_TAG_REQUIRED,
	TAG_ID.CAPTION,
	TAG_ID.COLGROUP,
	TAG_ID.TBODY,
	TAG_ID.TD,
	TAG_ID.TFOOT,
	TAG_ID.TH,
	TAG_ID.THEAD,
	TAG_ID.TR
]);
var SCOPING_ELEMENT_NS = /* @__PURE__ */ new Map([
	[TAG_ID.APPLET, NS.HTML],
	[TAG_ID.CAPTION, NS.HTML],
	[TAG_ID.HTML, NS.HTML],
	[TAG_ID.MARQUEE, NS.HTML],
	[TAG_ID.OBJECT, NS.HTML],
	[TAG_ID.TABLE, NS.HTML],
	[TAG_ID.TD, NS.HTML],
	[TAG_ID.TEMPLATE, NS.HTML],
	[TAG_ID.TH, NS.HTML],
	[TAG_ID.ANNOTATION_XML, NS.MATHML],
	[TAG_ID.MI, NS.MATHML],
	[TAG_ID.MN, NS.MATHML],
	[TAG_ID.MO, NS.MATHML],
	[TAG_ID.MS, NS.MATHML],
	[TAG_ID.MTEXT, NS.MATHML],
	[TAG_ID.DESC, NS.SVG],
	[TAG_ID.FOREIGN_OBJECT, NS.SVG],
	[TAG_ID.TITLE, NS.SVG]
]);
var NAMED_HEADERS = [
	TAG_ID.H1,
	TAG_ID.H2,
	TAG_ID.H3,
	TAG_ID.H4,
	TAG_ID.H5,
	TAG_ID.H6
];
var TABLE_ROW_CONTEXT = [
	TAG_ID.TR,
	TAG_ID.TEMPLATE,
	TAG_ID.HTML
];
var TABLE_BODY_CONTEXT = [
	TAG_ID.TBODY,
	TAG_ID.TFOOT,
	TAG_ID.THEAD,
	TAG_ID.TEMPLATE,
	TAG_ID.HTML
];
var TABLE_CONTEXT = [
	TAG_ID.TABLE,
	TAG_ID.TEMPLATE,
	TAG_ID.HTML
];
var TABLE_CELLS = [TAG_ID.TD, TAG_ID.TH];
var OpenElementStack = class {
	constructor(document, treeAdapter, handler) {
		this.treeAdapter = treeAdapter;
		this.handler = handler;
		this.items = [];
		this.tagIDs = [];
		this.stackTop = -1;
		this.tmplCount = 0;
		this.currentTagId = TAG_ID.UNKNOWN;
		this.current = document;
	}
	get currentTmplContentOrNode() {
		return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current;
	}
	_indexOf(element) {
		return this.items.lastIndexOf(element, this.stackTop);
	}
	_isInTemplate() {
		return this.currentTagId === TAG_ID.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === NS.HTML;
	}
	_updateCurrentElement() {
		this.current = this.items[this.stackTop];
		this.currentTagId = this.tagIDs[this.stackTop];
	}
	push(element, tagID) {
		this.stackTop++;
		this.items[this.stackTop] = element;
		this.current = element;
		this.tagIDs[this.stackTop] = tagID;
		this.currentTagId = tagID;
		if (this._isInTemplate()) this.tmplCount++;
		this.handler.onItemPush(element, tagID, true);
	}
	pop() {
		const popped = this.current;
		if (this.tmplCount > 0 && this._isInTemplate()) this.tmplCount--;
		this.stackTop--;
		this._updateCurrentElement();
		this.handler.onItemPop(popped, true);
	}
	replace(oldElement, newElement) {
		const idx = this._indexOf(oldElement);
		this.items[idx] = newElement;
		if (idx === this.stackTop) this.current = newElement;
	}
	insertAfter(referenceElement, newElement, newElementID) {
		const insertionIdx = this._indexOf(referenceElement) + 1;
		this.items.splice(insertionIdx, 0, newElement);
		this.tagIDs.splice(insertionIdx, 0, newElementID);
		this.stackTop++;
		if (insertionIdx === this.stackTop) this._updateCurrentElement();
		this.handler.onItemPush(this.current, this.currentTagId, insertionIdx === this.stackTop);
	}
	popUntilTagNamePopped(tagName) {
		let targetIdx = this.stackTop + 1;
		do
			targetIdx = this.tagIDs.lastIndexOf(tagName, targetIdx - 1);
		while (targetIdx > 0 && this.treeAdapter.getNamespaceURI(this.items[targetIdx]) !== NS.HTML);
		this.shortenToLength(targetIdx < 0 ? 0 : targetIdx);
	}
	shortenToLength(idx) {
		while (this.stackTop >= idx) {
			const popped = this.current;
			if (this.tmplCount > 0 && this._isInTemplate()) this.tmplCount -= 1;
			this.stackTop--;
			this._updateCurrentElement();
			this.handler.onItemPop(popped, this.stackTop < idx);
		}
	}
	popUntilElementPopped(element) {
		const idx = this._indexOf(element);
		this.shortenToLength(idx < 0 ? 0 : idx);
	}
	popUntilPopped(tagNames, targetNS) {
		const idx = this._indexOfTagNames(tagNames, targetNS);
		this.shortenToLength(idx < 0 ? 0 : idx);
	}
	popUntilNumberedHeaderPopped() {
		this.popUntilPopped(NAMED_HEADERS, NS.HTML);
	}
	popUntilTableCellPopped() {
		this.popUntilPopped(TABLE_CELLS, NS.HTML);
	}
	popAllUpToHtmlElement() {
		this.tmplCount = 0;
		this.shortenToLength(1);
	}
	_indexOfTagNames(tagNames, namespace) {
		for (let i = this.stackTop; i >= 0; i--) if (tagNames.includes(this.tagIDs[i]) && this.treeAdapter.getNamespaceURI(this.items[i]) === namespace) return i;
		return -1;
	}
	clearBackTo(tagNames, targetNS) {
		const idx = this._indexOfTagNames(tagNames, targetNS);
		this.shortenToLength(idx + 1);
	}
	clearBackToTableContext() {
		this.clearBackTo(TABLE_CONTEXT, NS.HTML);
	}
	clearBackToTableBodyContext() {
		this.clearBackTo(TABLE_BODY_CONTEXT, NS.HTML);
	}
	clearBackToTableRowContext() {
		this.clearBackTo(TABLE_ROW_CONTEXT, NS.HTML);
	}
	remove(element) {
		const idx = this._indexOf(element);
		if (idx >= 0) {
			if (idx === this.stackTop) this.pop();
			else {
				this.items.splice(idx, 1);
				this.tagIDs.splice(idx, 1);
				this.stackTop--;
				this._updateCurrentElement();
				this.handler.onItemPop(element, false);
			}
		}
	}
	tryPeekProperlyNestedBodyElement() {
		return this.stackTop >= 1 && this.tagIDs[1] === TAG_ID.BODY ? this.items[1] : null;
	}
	contains(element) {
		return this._indexOf(element) > -1;
	}
	getCommonAncestor(element) {
		const elementIdx = this._indexOf(element) - 1;
		return elementIdx >= 0 ? this.items[elementIdx] : null;
	}
	isRootHtmlElementCurrent() {
		return this.stackTop === 0 && this.tagIDs[0] === TAG_ID.HTML;
	}
	hasInScope(tagName) {
		for (let i = this.stackTop; i >= 0; i--) {
			const tn = this.tagIDs[i];
			const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
			if (tn === tagName && ns === NS.HTML) return true;
			if (SCOPING_ELEMENT_NS.get(tn) === ns) return false;
		}
		return true;
	}
	hasNumberedHeaderInScope() {
		for (let i = this.stackTop; i >= 0; i--) {
			const tn = this.tagIDs[i];
			const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
			if (isNumberedHeader(tn) && ns === NS.HTML) return true;
			if (SCOPING_ELEMENT_NS.get(tn) === ns) return false;
		}
		return true;
	}
	hasInListItemScope(tagName) {
		for (let i = this.stackTop; i >= 0; i--) {
			const tn = this.tagIDs[i];
			const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
			if (tn === tagName && ns === NS.HTML) return true;
			if ((tn === TAG_ID.UL || tn === TAG_ID.OL) && ns === NS.HTML || SCOPING_ELEMENT_NS.get(tn) === ns) return false;
		}
		return true;
	}
	hasInButtonScope(tagName) {
		for (let i = this.stackTop; i >= 0; i--) {
			const tn = this.tagIDs[i];
			const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
			if (tn === tagName && ns === NS.HTML) return true;
			if (tn === TAG_ID.BUTTON && ns === NS.HTML || SCOPING_ELEMENT_NS.get(tn) === ns) return false;
		}
		return true;
	}
	hasInTableScope(tagName) {
		for (let i = this.stackTop; i >= 0; i--) {
			const tn = this.tagIDs[i];
			if (this.treeAdapter.getNamespaceURI(this.items[i]) !== NS.HTML) continue;
			if (tn === tagName) return true;
			if (tn === TAG_ID.TABLE || tn === TAG_ID.TEMPLATE || tn === TAG_ID.HTML) return false;
		}
		return true;
	}
	hasTableBodyContextInTableScope() {
		for (let i = this.stackTop; i >= 0; i--) {
			const tn = this.tagIDs[i];
			if (this.treeAdapter.getNamespaceURI(this.items[i]) !== NS.HTML) continue;
			if (tn === TAG_ID.TBODY || tn === TAG_ID.THEAD || tn === TAG_ID.TFOOT) return true;
			if (tn === TAG_ID.TABLE || tn === TAG_ID.HTML) return false;
		}
		return true;
	}
	hasInSelectScope(tagName) {
		for (let i = this.stackTop; i >= 0; i--) {
			const tn = this.tagIDs[i];
			if (this.treeAdapter.getNamespaceURI(this.items[i]) !== NS.HTML) continue;
			if (tn === tagName) return true;
			if (tn !== TAG_ID.OPTION && tn !== TAG_ID.OPTGROUP) return false;
		}
		return true;
	}
	generateImpliedEndTags() {
		while (IMPLICIT_END_TAG_REQUIRED.has(this.currentTagId)) this.pop();
	}
	generateImpliedEndTagsThoroughly() {
		while (IMPLICIT_END_TAG_REQUIRED_THOROUGHLY.has(this.currentTagId)) this.pop();
	}
	generateImpliedEndTagsWithExclusion(exclusionId) {
		while (this.currentTagId !== exclusionId && IMPLICIT_END_TAG_REQUIRED_THOROUGHLY.has(this.currentTagId)) this.pop();
	}
};
//#endregion
//#region node_modules/.pnpm/parse5@7.0.0/node_modules/parse5/dist/parser/formatting-element-list.js
var NOAH_ARK_CAPACITY = 3;
var EntryType;
(function(EntryType) {
	EntryType[EntryType["Marker"] = 0] = "Marker";
	EntryType[EntryType["Element"] = 1] = "Element";
})(EntryType || (EntryType = {}));
var MARKER = { type: EntryType.Marker };
var FormattingElementList = class {
	constructor(treeAdapter) {
		this.treeAdapter = treeAdapter;
		this.entries = [];
		this.bookmark = null;
	}
	_getNoahArkConditionCandidates(newElement, neAttrs) {
		const candidates = [];
		const neAttrsLength = neAttrs.length;
		const neTagName = this.treeAdapter.getTagName(newElement);
		const neNamespaceURI = this.treeAdapter.getNamespaceURI(newElement);
		for (let i = 0; i < this.entries.length; i++) {
			const entry = this.entries[i];
			if (entry.type === EntryType.Marker) break;
			const { element } = entry;
			if (this.treeAdapter.getTagName(element) === neTagName && this.treeAdapter.getNamespaceURI(element) === neNamespaceURI) {
				const elementAttrs = this.treeAdapter.getAttrList(element);
				if (elementAttrs.length === neAttrsLength) candidates.push({
					idx: i,
					attrs: elementAttrs
				});
			}
		}
		return candidates;
	}
	_ensureNoahArkCondition(newElement) {
		if (this.entries.length < NOAH_ARK_CAPACITY) return;
		const neAttrs = this.treeAdapter.getAttrList(newElement);
		const candidates = this._getNoahArkConditionCandidates(newElement, neAttrs);
		if (candidates.length < NOAH_ARK_CAPACITY) return;
		const neAttrsMap = new Map(neAttrs.map((neAttr) => [neAttr.name, neAttr.value]));
		let validCandidates = 0;
		for (let i = 0; i < candidates.length; i++) {
			const candidate = candidates[i];
			if (candidate.attrs.every((cAttr) => neAttrsMap.get(cAttr.name) === cAttr.value)) {
				validCandidates += 1;
				if (validCandidates >= NOAH_ARK_CAPACITY) this.entries.splice(candidate.idx, 1);
			}
		}
	}
	insertMarker() {
		this.entries.unshift(MARKER);
	}
	pushElement(element, token) {
		this._ensureNoahArkCondition(element);
		this.entries.unshift({
			type: EntryType.Element,
			element,
			token
		});
	}
	insertElementAfterBookmark(element, token) {
		const bookmarkIdx = this.entries.indexOf(this.bookmark);
		this.entries.splice(bookmarkIdx, 0, {
			type: EntryType.Element,
			element,
			token
		});
	}
	removeEntry(entry) {
		const entryIndex = this.entries.indexOf(entry);
		if (entryIndex >= 0) this.entries.splice(entryIndex, 1);
	}
	clearToLastMarker() {
		const markerIdx = this.entries.indexOf(MARKER);
		if (markerIdx >= 0) this.entries.splice(0, markerIdx + 1);
		else this.entries.length = 0;
	}
	getElementEntryInScopeWithTagName(tagName) {
		const entry = this.entries.find((entry) => entry.type === EntryType.Marker || this.treeAdapter.getTagName(entry.element) === tagName);
		return entry && entry.type === EntryType.Element ? entry : null;
	}
	getElementEntry(element) {
		return this.entries.find((entry) => entry.type === EntryType.Element && entry.element === element);
	}
};
//#endregion
//#region node_modules/.pnpm/parse5@7.0.0/node_modules/parse5/dist/tree-adapters/default.js
var NodeType;
(function(NodeType) {
	NodeType["Document"] = "#document";
	NodeType["DocumentFragment"] = "#document-fragment";
	NodeType["Comment"] = "#comment";
	NodeType["Text"] = "#text";
	NodeType["DocumentType"] = "#documentType";
})(NodeType || (NodeType = {}));
function createTextNode(value) {
	return {
		nodeName: NodeType.Text,
		value,
		parentNode: null
	};
}
var defaultTreeAdapter = {
	createDocument() {
		return {
			nodeName: NodeType.Document,
			mode: DOCUMENT_MODE.NO_QUIRKS,
			childNodes: []
		};
	},
	createDocumentFragment() {
		return {
			nodeName: NodeType.DocumentFragment,
			childNodes: []
		};
	},
	createElement(tagName, namespaceURI, attrs) {
		return {
			nodeName: tagName,
			tagName,
			attrs,
			namespaceURI,
			childNodes: [],
			parentNode: null
		};
	},
	createCommentNode(data) {
		return {
			nodeName: NodeType.Comment,
			data,
			parentNode: null
		};
	},
	appendChild(parentNode, newNode) {
		parentNode.childNodes.push(newNode);
		newNode.parentNode = parentNode;
	},
	insertBefore(parentNode, newNode, referenceNode) {
		const insertionIdx = parentNode.childNodes.indexOf(referenceNode);
		parentNode.childNodes.splice(insertionIdx, 0, newNode);
		newNode.parentNode = parentNode;
	},
	setTemplateContent(templateElement, contentElement) {
		templateElement.content = contentElement;
	},
	getTemplateContent(templateElement) {
		return templateElement.content;
	},
	setDocumentType(document, name, publicId, systemId) {
		const doctypeNode = document.childNodes.find((node) => node.nodeName === NodeType.DocumentType);
		if (doctypeNode) {
			doctypeNode.name = name;
			doctypeNode.publicId = publicId;
			doctypeNode.systemId = systemId;
		} else {
			const node = {
				nodeName: NodeType.DocumentType,
				name,
				publicId,
				systemId,
				parentNode: null
			};
			defaultTreeAdapter.appendChild(document, node);
		}
	},
	setDocumentMode(document, mode) {
		document.mode = mode;
	},
	getDocumentMode(document) {
		return document.mode;
	},
	detachNode(node) {
		if (node.parentNode) {
			const idx = node.parentNode.childNodes.indexOf(node);
			node.parentNode.childNodes.splice(idx, 1);
			node.parentNode = null;
		}
	},
	insertText(parentNode, text) {
		if (parentNode.childNodes.length > 0) {
			const prevNode = parentNode.childNodes[parentNode.childNodes.length - 1];
			if (defaultTreeAdapter.isTextNode(prevNode)) {
				prevNode.value += text;
				return;
			}
		}
		defaultTreeAdapter.appendChild(parentNode, createTextNode(text));
	},
	insertTextBefore(parentNode, text, referenceNode) {
		const prevNode = parentNode.childNodes[parentNode.childNodes.indexOf(referenceNode) - 1];
		if (prevNode && defaultTreeAdapter.isTextNode(prevNode)) prevNode.value += text;
		else defaultTreeAdapter.insertBefore(parentNode, createTextNode(text), referenceNode);
	},
	adoptAttributes(recipient, attrs) {
		const recipientAttrsMap = new Set(recipient.attrs.map((attr) => attr.name));
		for (let j = 0; j < attrs.length; j++) if (!recipientAttrsMap.has(attrs[j].name)) recipient.attrs.push(attrs[j]);
	},
	getFirstChild(node) {
		return node.childNodes[0];
	},
	getChildNodes(node) {
		return node.childNodes;
	},
	getParentNode(node) {
		return node.parentNode;
	},
	getAttrList(element) {
		return element.attrs;
	},
	getTagName(element) {
		return element.tagName;
	},
	getNamespaceURI(element) {
		return element.namespaceURI;
	},
	getTextNodeContent(textNode) {
		return textNode.value;
	},
	getCommentNodeContent(commentNode) {
		return commentNode.data;
	},
	getDocumentTypeNodeName(doctypeNode) {
		return doctypeNode.name;
	},
	getDocumentTypeNodePublicId(doctypeNode) {
		return doctypeNode.publicId;
	},
	getDocumentTypeNodeSystemId(doctypeNode) {
		return doctypeNode.systemId;
	},
	isTextNode(node) {
		return node.nodeName === "#text";
	},
	isCommentNode(node) {
		return node.nodeName === "#comment";
	},
	isDocumentTypeNode(node) {
		return node.nodeName === NodeType.DocumentType;
	},
	isElementNode(node) {
		return Object.prototype.hasOwnProperty.call(node, "tagName");
	},
	setNodeSourceCodeLocation(node, location) {
		node.sourceCodeLocation = location;
	},
	getNodeSourceCodeLocation(node) {
		return node.sourceCodeLocation;
	},
	updateNodeSourceCodeLocation(node, endLocation) {
		node.sourceCodeLocation = {
			...node.sourceCodeLocation,
			...endLocation
		};
	}
};
//#endregion
//#region node_modules/.pnpm/parse5@7.0.0/node_modules/parse5/dist/common/doctype.js
var VALID_DOCTYPE_NAME = "html";
var VALID_SYSTEM_ID = "about:legacy-compat";
var QUIRKS_MODE_SYSTEM_ID = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd";
var QUIRKS_MODE_PUBLIC_ID_PREFIXES = [
	"+//silmaril//dtd html pro v0r11 19970101//",
	"-//as//dtd html 3.0 aswedit + extensions//",
	"-//advasoft ltd//dtd html 3.0 aswedit + extensions//",
	"-//ietf//dtd html 2.0 level 1//",
	"-//ietf//dtd html 2.0 level 2//",
	"-//ietf//dtd html 2.0 strict level 1//",
	"-//ietf//dtd html 2.0 strict level 2//",
	"-//ietf//dtd html 2.0 strict//",
	"-//ietf//dtd html 2.0//",
	"-//ietf//dtd html 2.1e//",
	"-//ietf//dtd html 3.0//",
	"-//ietf//dtd html 3.2 final//",
	"-//ietf//dtd html 3.2//",
	"-//ietf//dtd html 3//",
	"-//ietf//dtd html level 0//",
	"-//ietf//dtd html level 1//",
	"-//ietf//dtd html level 2//",
	"-//ietf//dtd html level 3//",
	"-//ietf//dtd html strict level 0//",
	"-//ietf//dtd html strict level 1//",
	"-//ietf//dtd html strict level 2//",
	"-//ietf//dtd html strict level 3//",
	"-//ietf//dtd html strict//",
	"-//ietf//dtd html//",
	"-//metrius//dtd metrius presentational//",
	"-//microsoft//dtd internet explorer 2.0 html strict//",
	"-//microsoft//dtd internet explorer 2.0 html//",
	"-//microsoft//dtd internet explorer 2.0 tables//",
	"-//microsoft//dtd internet explorer 3.0 html strict//",
	"-//microsoft//dtd internet explorer 3.0 html//",
	"-//microsoft//dtd internet explorer 3.0 tables//",
	"-//netscape comm. corp.//dtd html//",
	"-//netscape comm. corp.//dtd strict html//",
	"-//o'reilly and associates//dtd html 2.0//",
	"-//o'reilly and associates//dtd html extended 1.0//",
	"-//o'reilly and associates//dtd html extended relaxed 1.0//",
	"-//sq//dtd html 2.0 hotmetal + extensions//",
	"-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//",
	"-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//",
	"-//spyglass//dtd html 2.0 extended//",
	"-//sun microsystems corp.//dtd hotjava html//",
	"-//sun microsystems corp.//dtd hotjava strict html//",
	"-//w3c//dtd html 3 1995-03-24//",
	"-//w3c//dtd html 3.2 draft//",
	"-//w3c//dtd html 3.2 final//",
	"-//w3c//dtd html 3.2//",
	"-//w3c//dtd html 3.2s draft//",
	"-//w3c//dtd html 4.0 frameset//",
	"-//w3c//dtd html 4.0 transitional//",
	"-//w3c//dtd html experimental 19960712//",
	"-//w3c//dtd html experimental 970421//",
	"-//w3c//dtd w3 html//",
	"-//w3o//dtd w3 html 3.0//",
	"-//webtechs//dtd mozilla html 2.0//",
	"-//webtechs//dtd mozilla html//"
];
var QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES = [
	...QUIRKS_MODE_PUBLIC_ID_PREFIXES,
	"-//w3c//dtd html 4.01 frameset//",
	"-//w3c//dtd html 4.01 transitional//"
];
var QUIRKS_MODE_PUBLIC_IDS = /* @__PURE__ */ new Set([
	"-//w3o//dtd w3 html strict 3.0//en//",
	"-/w3c/dtd html 4.0 transitional/en",
	"html"
]);
var LIMITED_QUIRKS_PUBLIC_ID_PREFIXES = ["-//w3c//dtd xhtml 1.0 frameset//", "-//w3c//dtd xhtml 1.0 transitional//"];
var LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES = [
	...LIMITED_QUIRKS_PUBLIC_ID_PREFIXES,
	"-//w3c//dtd html 4.01 frameset//",
	"-//w3c//dtd html 4.01 transitional//"
];
function hasPrefix(publicId, prefixes) {
	return prefixes.some((prefix) => publicId.startsWith(prefix));
}
function isConforming(token) {
	return token.name === VALID_DOCTYPE_NAME && token.publicId === null && (token.systemId === null || token.systemId === VALID_SYSTEM_ID);
}
function getDocumentMode(token) {
	if (token.name !== VALID_DOCTYPE_NAME) return DOCUMENT_MODE.QUIRKS;
	const { systemId } = token;
	if (systemId && systemId.toLowerCase() === QUIRKS_MODE_SYSTEM_ID) return DOCUMENT_MODE.QUIRKS;
	let { publicId } = token;
	if (publicId !== null) {
		publicId = publicId.toLowerCase();
		if (QUIRKS_MODE_PUBLIC_IDS.has(publicId)) return DOCUMENT_MODE.QUIRKS;
		let prefixes = systemId === null ? QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES : QUIRKS_MODE_PUBLIC_ID_PREFIXES;
		if (hasPrefix(publicId, prefixes)) return DOCUMENT_MODE.QUIRKS;
		prefixes = systemId === null ? LIMITED_QUIRKS_PUBLIC_ID_PREFIXES : LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES;
		if (hasPrefix(publicId, prefixes)) return DOCUMENT_MODE.LIMITED_QUIRKS;
	}
	return DOCUMENT_MODE.NO_QUIRKS;
}
//#endregion
//#region node_modules/.pnpm/parse5@7.0.0/node_modules/parse5/dist/common/foreign-content.js
var MIME_TYPES = {
	TEXT_HTML: "text/html",
	APPLICATION_XML: "application/xhtml+xml"
};
var DEFINITION_URL_ATTR = "definitionurl";
var ADJUSTED_DEFINITION_URL_ATTR = "definitionURL";
var SVG_ATTRS_ADJUSTMENT_MAP = new Map([
	"attributeName",
	"attributeType",
	"baseFrequency",
	"baseProfile",
	"calcMode",
	"clipPathUnits",
	"diffuseConstant",
	"edgeMode",
	"filterUnits",
	"glyphRef",
	"gradientTransform",
	"gradientUnits",
	"kernelMatrix",
	"kernelUnitLength",
	"keyPoints",
	"keySplines",
	"keyTimes",
	"lengthAdjust",
	"limitingConeAngle",
	"markerHeight",
	"markerUnits",
	"markerWidth",
	"maskContentUnits",
	"maskUnits",
	"numOctaves",
	"pathLength",
	"patternContentUnits",
	"patternTransform",
	"patternUnits",
	"pointsAtX",
	"pointsAtY",
	"pointsAtZ",
	"preserveAlpha",
	"preserveAspectRatio",
	"primitiveUnits",
	"refX",
	"refY",
	"repeatCount",
	"repeatDur",
	"requiredExtensions",
	"requiredFeatures",
	"specularConstant",
	"specularExponent",
	"spreadMethod",
	"startOffset",
	"stdDeviation",
	"stitchTiles",
	"surfaceScale",
	"systemLanguage",
	"tableValues",
	"targetX",
	"targetY",
	"textLength",
	"viewBox",
	"viewTarget",
	"xChannelSelector",
	"yChannelSelector",
	"zoomAndPan"
].map((attr) => [attr.toLowerCase(), attr]));
var XML_ATTRS_ADJUSTMENT_MAP = /* @__PURE__ */ new Map([
	["xlink:actuate", {
		prefix: "xlink",
		name: "actuate",
		namespace: NS.XLINK
	}],
	["xlink:arcrole", {
		prefix: "xlink",
		name: "arcrole",
		namespace: NS.XLINK
	}],
	["xlink:href", {
		prefix: "xlink",
		name: "href",
		namespace: NS.XLINK
	}],
	["xlink:role", {
		prefix: "xlink",
		name: "role",
		namespace: NS.XLINK
	}],
	["xlink:show", {
		prefix: "xlink",
		name: "show",
		namespace: NS.XLINK
	}],
	["xlink:title", {
		prefix: "xlink",
		name: "title",
		namespace: NS.XLINK
	}],
	["xlink:type", {
		prefix: "xlink",
		name: "type",
		namespace: NS.XLINK
	}],
	["xml:base", {
		prefix: "xml",
		name: "base",
		namespace: NS.XML
	}],
	["xml:lang", {
		prefix: "xml",
		name: "lang",
		namespace: NS.XML
	}],
	["xml:space", {
		prefix: "xml",
		name: "space",
		namespace: NS.XML
	}],
	["xmlns", {
		prefix: "",
		name: "xmlns",
		namespace: NS.XMLNS
	}],
	["xmlns:xlink", {
		prefix: "xmlns",
		name: "xlink",
		namespace: NS.XMLNS
	}]
]);
var SVG_TAG_NAMES_ADJUSTMENT_MAP = new Map([
	"altGlyph",
	"altGlyphDef",
	"altGlyphItem",
	"animateColor",
	"animateMotion",
	"animateTransform",
	"clipPath",
	"feBlend",
	"feColorMatrix",
	"feComponentTransfer",
	"feComposite",
	"feConvolveMatrix",
	"feDiffuseLighting",
	"feDisplacementMap",
	"feDistantLight",
	"feFlood",
	"feFuncA",
	"feFuncB",
	"feFuncG",
	"feFuncR",
	"feGaussianBlur",
	"feImage",
	"feMerge",
	"feMergeNode",
	"feMorphology",
	"feOffset",
	"fePointLight",
	"feSpecularLighting",
	"feSpotLight",
	"feTile",
	"feTurbulence",
	"foreignObject",
	"glyphRef",
	"linearGradient",
	"radialGradient",
	"textPath"
].map((tn) => [tn.toLowerCase(), tn]));
var EXITS_FOREIGN_CONTENT = /* @__PURE__ */ new Set([
	TAG_ID.B,
	TAG_ID.BIG,
	TAG_ID.BLOCKQUOTE,
	TAG_ID.BODY,
	TAG_ID.BR,
	TAG_ID.CENTER,
	TAG_ID.CODE,
	TAG_ID.DD,
	TAG_ID.DIV,
	TAG_ID.DL,
	TAG_ID.DT,
	TAG_ID.EM,
	TAG_ID.EMBED,
	TAG_ID.H1,
	TAG_ID.H2,
	TAG_ID.H3,
	TAG_ID.H4,
	TAG_ID.H5,
	TAG_ID.H6,
	TAG_ID.HEAD,
	TAG_ID.HR,
	TAG_ID.I,
	TAG_ID.IMG,
	TAG_ID.LI,
	TAG_ID.LISTING,
	TAG_ID.MENU,
	TAG_ID.META,
	TAG_ID.NOBR,
	TAG_ID.OL,
	TAG_ID.P,
	TAG_ID.PRE,
	TAG_ID.RUBY,
	TAG_ID.S,
	TAG_ID.SMALL,
	TAG_ID.SPAN,
	TAG_ID.STRONG,
	TAG_ID.STRIKE,
	TAG_ID.SUB,
	TAG_ID.SUP,
	TAG_ID.TABLE,
	TAG_ID.TT,
	TAG_ID.U,
	TAG_ID.UL,
	TAG_ID.VAR
]);
function causesExit(startTagToken) {
	const tn = startTagToken.tagID;
	return tn === TAG_ID.FONT && startTagToken.attrs.some(({ name }) => name === ATTRS.COLOR || name === ATTRS.SIZE || name === ATTRS.FACE) || EXITS_FOREIGN_CONTENT.has(tn);
}
function adjustTokenMathMLAttrs(token) {
	for (let i = 0; i < token.attrs.length; i++) if (token.attrs[i].name === DEFINITION_URL_ATTR) {
		token.attrs[i].name = ADJUSTED_DEFINITION_URL_ATTR;
		break;
	}
}
function adjustTokenSVGAttrs(token) {
	for (let i = 0; i < token.attrs.length; i++) {
		const adjustedAttrName = SVG_ATTRS_ADJUSTMENT_MAP.get(token.attrs[i].name);
		if (adjustedAttrName != null) token.attrs[i].name = adjustedAttrName;
	}
}
function adjustTokenXMLAttrs(token) {
	for (let i = 0; i < token.attrs.length; i++) {
		const adjustedAttrEntry = XML_ATTRS_ADJUSTMENT_MAP.get(token.attrs[i].name);
		if (adjustedAttrEntry) {
			token.attrs[i].prefix = adjustedAttrEntry.prefix;
			token.attrs[i].name = adjustedAttrEntry.name;
			token.attrs[i].namespace = adjustedAttrEntry.namespace;
		}
	}
}
function adjustTokenSVGTagName(token) {
	const adjustedTagName = SVG_TAG_NAMES_ADJUSTMENT_MAP.get(token.tagName);
	if (adjustedTagName != null) {
		token.tagName = adjustedTagName;
		token.tagID = getTagID(token.tagName);
	}
}
function isMathMLTextIntegrationPoint(tn, ns) {
	return ns === NS.MATHML && (tn === TAG_ID.MI || tn === TAG_ID.MO || tn === TAG_ID.MN || tn === TAG_ID.MS || tn === TAG_ID.MTEXT);
}
function isHtmlIntegrationPoint(tn, ns, attrs) {
	if (ns === NS.MATHML && tn === TAG_ID.ANNOTATION_XML) {
		for (let i = 0; i < attrs.length; i++) if (attrs[i].name === ATTRS.ENCODING) {
			const value = attrs[i].value.toLowerCase();
			return value === MIME_TYPES.TEXT_HTML || value === MIME_TYPES.APPLICATION_XML;
		}
	}
	return ns === NS.SVG && (tn === TAG_ID.FOREIGN_OBJECT || tn === TAG_ID.DESC || tn === TAG_ID.TITLE);
}
function isIntegrationPoint(tn, ns, attrs, foreignNS) {
	return (!foreignNS || foreignNS === NS.HTML) && isHtmlIntegrationPoint(tn, ns, attrs) || (!foreignNS || foreignNS === NS.MATHML) && isMathMLTextIntegrationPoint(tn, ns);
}
//#endregion
//#region node_modules/.pnpm/parse5@7.0.0/node_modules/parse5/dist/parser/index.js
var HIDDEN_INPUT_TYPE = "hidden";
var AA_OUTER_LOOP_ITER = 8;
var AA_INNER_LOOP_ITER = 3;
var InsertionMode;
(function(InsertionMode) {
	InsertionMode[InsertionMode["INITIAL"] = 0] = "INITIAL";
	InsertionMode[InsertionMode["BEFORE_HTML"] = 1] = "BEFORE_HTML";
	InsertionMode[InsertionMode["BEFORE_HEAD"] = 2] = "BEFORE_HEAD";
	InsertionMode[InsertionMode["IN_HEAD"] = 3] = "IN_HEAD";
	InsertionMode[InsertionMode["IN_HEAD_NO_SCRIPT"] = 4] = "IN_HEAD_NO_SCRIPT";
	InsertionMode[InsertionMode["AFTER_HEAD"] = 5] = "AFTER_HEAD";
	InsertionMode[InsertionMode["IN_BODY"] = 6] = "IN_BODY";
	InsertionMode[InsertionMode["TEXT"] = 7] = "TEXT";
	InsertionMode[InsertionMode["IN_TABLE"] = 8] = "IN_TABLE";
	InsertionMode[InsertionMode["IN_TABLE_TEXT"] = 9] = "IN_TABLE_TEXT";
	InsertionMode[InsertionMode["IN_CAPTION"] = 10] = "IN_CAPTION";
	InsertionMode[InsertionMode["IN_COLUMN_GROUP"] = 11] = "IN_COLUMN_GROUP";
	InsertionMode[InsertionMode["IN_TABLE_BODY"] = 12] = "IN_TABLE_BODY";
	InsertionMode[InsertionMode["IN_ROW"] = 13] = "IN_ROW";
	InsertionMode[InsertionMode["IN_CELL"] = 14] = "IN_CELL";
	InsertionMode[InsertionMode["IN_SELECT"] = 15] = "IN_SELECT";
	InsertionMode[InsertionMode["IN_SELECT_IN_TABLE"] = 16] = "IN_SELECT_IN_TABLE";
	InsertionMode[InsertionMode["IN_TEMPLATE"] = 17] = "IN_TEMPLATE";
	InsertionMode[InsertionMode["AFTER_BODY"] = 18] = "AFTER_BODY";
	InsertionMode[InsertionMode["IN_FRAMESET"] = 19] = "IN_FRAMESET";
	InsertionMode[InsertionMode["AFTER_FRAMESET"] = 20] = "AFTER_FRAMESET";
	InsertionMode[InsertionMode["AFTER_AFTER_BODY"] = 21] = "AFTER_AFTER_BODY";
	InsertionMode[InsertionMode["AFTER_AFTER_FRAMESET"] = 22] = "AFTER_AFTER_FRAMESET";
})(InsertionMode || (InsertionMode = {}));
var BASE_LOC = {
	startLine: -1,
	startCol: -1,
	startOffset: -1,
	endLine: -1,
	endCol: -1,
	endOffset: -1
};
var TABLE_STRUCTURE_TAGS = /* @__PURE__ */ new Set([
	TAG_ID.TABLE,
	TAG_ID.TBODY,
	TAG_ID.TFOOT,
	TAG_ID.THEAD,
	TAG_ID.TR
]);
var defaultParserOptions = {
	scriptingEnabled: true,
	sourceCodeLocationInfo: false,
	treeAdapter: defaultTreeAdapter,
	onParseError: null
};
var Parser = class {
	constructor(options, document, fragmentContext = null, scriptHandler = null) {
		this.fragmentContext = fragmentContext;
		this.scriptHandler = scriptHandler;
		this.currentToken = null;
		this.stopped = false;
		this.insertionMode = InsertionMode.INITIAL;
		this.originalInsertionMode = InsertionMode.INITIAL;
		this.headElement = null;
		this.formElement = null;
		/** Indicates that the current node is not an element in the HTML namespace */
		this.currentNotInHTML = false;
		/**
		* The template insertion mode stack is maintained from the left.
		* Ie. the topmost element will always have index 0.
		*/
		this.tmplInsertionModeStack = [];
		this.pendingCharacterTokens = [];
		this.hasNonWhitespacePendingCharacterToken = false;
		this.framesetOk = true;
		this.skipNextNewLine = false;
		this.fosterParentingEnabled = false;
		this.options = {
			...defaultParserOptions,
			...options
		};
		this.treeAdapter = this.options.treeAdapter;
		this.onParseError = this.options.onParseError;
		if (this.onParseError) this.options.sourceCodeLocationInfo = true;
		this.document = document !== null && document !== void 0 ? document : this.treeAdapter.createDocument();
		this.tokenizer = new Tokenizer(this.options, this);
		this.activeFormattingElements = new FormattingElementList(this.treeAdapter);
		this.fragmentContextID = fragmentContext ? getTagID(this.treeAdapter.getTagName(fragmentContext)) : TAG_ID.UNKNOWN;
		this._setContextModes(fragmentContext !== null && fragmentContext !== void 0 ? fragmentContext : this.document, this.fragmentContextID);
		this.openElements = new OpenElementStack(this.document, this.treeAdapter, this);
	}
	static parse(html, options) {
		const parser = new this(options);
		parser.tokenizer.write(html, true);
		return parser.document;
	}
	static getFragmentParser(fragmentContext, options) {
		const opts = {
			...defaultParserOptions,
			...options
		};
		fragmentContext !== null && fragmentContext !== void 0 || (fragmentContext = opts.treeAdapter.createElement(TAG_NAMES.TEMPLATE, NS.HTML, []));
		const documentMock = opts.treeAdapter.createElement("documentmock", NS.HTML, []);
		const parser = new this(opts, documentMock, fragmentContext);
		if (parser.fragmentContextID === TAG_ID.TEMPLATE) parser.tmplInsertionModeStack.unshift(InsertionMode.IN_TEMPLATE);
		parser._initTokenizerForFragmentParsing();
		parser._insertFakeRootElement();
		parser._resetInsertionMode();
		parser._findFormInFragmentContext();
		return parser;
	}
	getFragment() {
		const rootElement = this.treeAdapter.getFirstChild(this.document);
		const fragment = this.treeAdapter.createDocumentFragment();
		this._adoptNodes(rootElement, fragment);
		return fragment;
	}
	_err(token, code, beforeToken) {
		var _a;
		if (!this.onParseError) return;
		const loc = (_a = token.location) !== null && _a !== void 0 ? _a : BASE_LOC;
		const err = {
			code,
			startLine: loc.startLine,
			startCol: loc.startCol,
			startOffset: loc.startOffset,
			endLine: beforeToken ? loc.startLine : loc.endLine,
			endCol: beforeToken ? loc.startCol : loc.endCol,
			endOffset: beforeToken ? loc.startOffset : loc.endOffset
		};
		this.onParseError(err);
	}
	onItemPush(node, tid, isTop) {
		var _a, _b;
		(_b = (_a = this.treeAdapter).onItemPush) === null || _b === void 0 || _b.call(_a, node);
		if (isTop && this.openElements.stackTop > 0) this._setContextModes(node, tid);
	}
	onItemPop(node, isTop) {
		var _a, _b;
		if (this.options.sourceCodeLocationInfo) this._setEndLocation(node, this.currentToken);
		(_b = (_a = this.treeAdapter).onItemPop) === null || _b === void 0 || _b.call(_a, node, this.openElements.current);
		if (isTop) {
			let current;
			let currentTagId;
			if (this.openElements.stackTop === 0 && this.fragmentContext) {
				current = this.fragmentContext;
				currentTagId = this.fragmentContextID;
			} else ({current, currentTagId} = this.openElements);
			this._setContextModes(current, currentTagId);
		}
	}
	_setContextModes(current, tid) {
		const isHTML = current === this.document || this.treeAdapter.getNamespaceURI(current) === NS.HTML;
		this.currentNotInHTML = !isHTML;
		this.tokenizer.inForeignNode = !isHTML && !this._isIntegrationPoint(tid, current);
	}
	_switchToTextParsing(currentToken, nextTokenizerState) {
		this._insertElement(currentToken, NS.HTML);
		this.tokenizer.state = nextTokenizerState;
		this.originalInsertionMode = this.insertionMode;
		this.insertionMode = InsertionMode.TEXT;
	}
	switchToPlaintextParsing() {
		this.insertionMode = InsertionMode.TEXT;
		this.originalInsertionMode = InsertionMode.IN_BODY;
		this.tokenizer.state = TokenizerMode.PLAINTEXT;
	}
	_getAdjustedCurrentElement() {
		return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
	}
	_findFormInFragmentContext() {
		let node = this.fragmentContext;
		while (node) {
			if (this.treeAdapter.getTagName(node) === TAG_NAMES.FORM) {
				this.formElement = node;
				break;
			}
			node = this.treeAdapter.getParentNode(node);
		}
	}
	_initTokenizerForFragmentParsing() {
		if (!this.fragmentContext || this.treeAdapter.getNamespaceURI(this.fragmentContext) !== NS.HTML) return;
		switch (this.fragmentContextID) {
			case TAG_ID.TITLE:
			case TAG_ID.TEXTAREA:
				this.tokenizer.state = TokenizerMode.RCDATA;
				break;
			case TAG_ID.STYLE:
			case TAG_ID.XMP:
			case TAG_ID.IFRAME:
			case TAG_ID.NOEMBED:
			case TAG_ID.NOFRAMES:
			case TAG_ID.NOSCRIPT:
				this.tokenizer.state = TokenizerMode.RAWTEXT;
				break;
			case TAG_ID.SCRIPT:
				this.tokenizer.state = TokenizerMode.SCRIPT_DATA;
				break;
			case TAG_ID.PLAINTEXT: this.tokenizer.state = TokenizerMode.PLAINTEXT;
		}
	}
	_setDocumentType(token) {
		const name = token.name || "";
		const publicId = token.publicId || "";
		const systemId = token.systemId || "";
		this.treeAdapter.setDocumentType(this.document, name, publicId, systemId);
		if (token.location) {
			const docTypeNode = this.treeAdapter.getChildNodes(this.document).find((node) => this.treeAdapter.isDocumentTypeNode(node));
			if (docTypeNode) this.treeAdapter.setNodeSourceCodeLocation(docTypeNode, token.location);
		}
	}
	_attachElementToTree(element, location) {
		if (this.options.sourceCodeLocationInfo) {
			const loc = location && {
				...location,
				startTag: location
			};
			this.treeAdapter.setNodeSourceCodeLocation(element, loc);
		}
		if (this._shouldFosterParentOnInsertion()) this._fosterParentElement(element);
		else {
			const parent = this.openElements.currentTmplContentOrNode;
			this.treeAdapter.appendChild(parent, element);
		}
	}
	_appendElement(token, namespaceURI) {
		const element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);
		this._attachElementToTree(element, token.location);
	}
	_insertElement(token, namespaceURI) {
		const element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);
		this._attachElementToTree(element, token.location);
		this.openElements.push(element, token.tagID);
	}
	_insertFakeElement(tagName, tagID) {
		const element = this.treeAdapter.createElement(tagName, NS.HTML, []);
		this._attachElementToTree(element, null);
		this.openElements.push(element, tagID);
	}
	_insertTemplate(token) {
		const tmpl = this.treeAdapter.createElement(token.tagName, NS.HTML, token.attrs);
		const content = this.treeAdapter.createDocumentFragment();
		this.treeAdapter.setTemplateContent(tmpl, content);
		this._attachElementToTree(tmpl, token.location);
		this.openElements.push(tmpl, token.tagID);
		if (this.options.sourceCodeLocationInfo) this.treeAdapter.setNodeSourceCodeLocation(content, null);
	}
	_insertFakeRootElement() {
		const element = this.treeAdapter.createElement(TAG_NAMES.HTML, NS.HTML, []);
		if (this.options.sourceCodeLocationInfo) this.treeAdapter.setNodeSourceCodeLocation(element, null);
		this.treeAdapter.appendChild(this.openElements.current, element);
		this.openElements.push(element, TAG_ID.HTML);
	}
	_appendCommentNode(token, parent) {
		const commentNode = this.treeAdapter.createCommentNode(token.data);
		this.treeAdapter.appendChild(parent, commentNode);
		if (this.options.sourceCodeLocationInfo) this.treeAdapter.setNodeSourceCodeLocation(commentNode, token.location);
	}
	_insertCharacters(token) {
		let parent;
		let beforeElement;
		if (this._shouldFosterParentOnInsertion()) {
			({parent, beforeElement} = this._findFosterParentingLocation());
			if (beforeElement) this.treeAdapter.insertTextBefore(parent, token.chars, beforeElement);
			else this.treeAdapter.insertText(parent, token.chars);
		} else {
			parent = this.openElements.currentTmplContentOrNode;
			this.treeAdapter.insertText(parent, token.chars);
		}
		if (!token.location) return;
		const siblings = this.treeAdapter.getChildNodes(parent);
		const textNode = siblings[(beforeElement ? siblings.lastIndexOf(beforeElement) : siblings.length) - 1];
		if (this.treeAdapter.getNodeSourceCodeLocation(textNode)) {
			const { endLine, endCol, endOffset } = token.location;
			this.treeAdapter.updateNodeSourceCodeLocation(textNode, {
				endLine,
				endCol,
				endOffset
			});
		} else if (this.options.sourceCodeLocationInfo) this.treeAdapter.setNodeSourceCodeLocation(textNode, token.location);
	}
	_adoptNodes(donor, recipient) {
		for (let child = this.treeAdapter.getFirstChild(donor); child; child = this.treeAdapter.getFirstChild(donor)) {
			this.treeAdapter.detachNode(child);
			this.treeAdapter.appendChild(recipient, child);
		}
	}
	_setEndLocation(element, closingToken) {
		if (this.treeAdapter.getNodeSourceCodeLocation(element) && closingToken.location) {
			const ctLoc = closingToken.location;
			const tn = this.treeAdapter.getTagName(element);
			const endLoc = closingToken.type === TokenType.END_TAG && tn === closingToken.tagName ? {
				endTag: { ...ctLoc },
				endLine: ctLoc.endLine,
				endCol: ctLoc.endCol,
				endOffset: ctLoc.endOffset
			} : {
				endLine: ctLoc.startLine,
				endCol: ctLoc.startCol,
				endOffset: ctLoc.startOffset
			};
			this.treeAdapter.updateNodeSourceCodeLocation(element, endLoc);
		}
	}
	shouldProcessStartTagTokenInForeignContent(token) {
		if (!this.currentNotInHTML) return false;
		let current;
		let currentTagId;
		if (this.openElements.stackTop === 0 && this.fragmentContext) {
			current = this.fragmentContext;
			currentTagId = this.fragmentContextID;
		} else ({current, currentTagId} = this.openElements);
		if (token.tagID === TAG_ID.SVG && this.treeAdapter.getTagName(current) === TAG_NAMES.ANNOTATION_XML && this.treeAdapter.getNamespaceURI(current) === NS.MATHML) return false;
		return this.tokenizer.inForeignNode || (token.tagID === TAG_ID.MGLYPH || token.tagID === TAG_ID.MALIGNMARK) && !this._isIntegrationPoint(currentTagId, current, NS.HTML);
	}
	_processToken(token) {
		switch (token.type) {
			case TokenType.CHARACTER:
				this.onCharacter(token);
				break;
			case TokenType.NULL_CHARACTER:
				this.onNullCharacter(token);
				break;
			case TokenType.COMMENT:
				this.onComment(token);
				break;
			case TokenType.DOCTYPE:
				this.onDoctype(token);
				break;
			case TokenType.START_TAG:
				this._processStartTag(token);
				break;
			case TokenType.END_TAG:
				this.onEndTag(token);
				break;
			case TokenType.EOF:
				this.onEof(token);
				break;
			case TokenType.WHITESPACE_CHARACTER: this.onWhitespaceCharacter(token);
		}
	}
	_isIntegrationPoint(tid, element, foreignNS) {
		return isIntegrationPoint(tid, this.treeAdapter.getNamespaceURI(element), this.treeAdapter.getAttrList(element), foreignNS);
	}
	_reconstructActiveFormattingElements() {
		const listLength = this.activeFormattingElements.entries.length;
		if (listLength) {
			const endIndex = this.activeFormattingElements.entries.findIndex((entry) => entry.type === EntryType.Marker || this.openElements.contains(entry.element));
			const unopenIdx = endIndex < 0 ? listLength - 1 : endIndex - 1;
			for (let i = unopenIdx; i >= 0; i--) {
				const entry = this.activeFormattingElements.entries[i];
				this._insertElement(entry.token, this.treeAdapter.getNamespaceURI(entry.element));
				entry.element = this.openElements.current;
			}
		}
	}
	_closeTableCell() {
		this.openElements.generateImpliedEndTags();
		this.openElements.popUntilTableCellPopped();
		this.activeFormattingElements.clearToLastMarker();
		this.insertionMode = InsertionMode.IN_ROW;
	}
	_closePElement() {
		this.openElements.generateImpliedEndTagsWithExclusion(TAG_ID.P);
		this.openElements.popUntilTagNamePopped(TAG_ID.P);
	}
	_resetInsertionMode() {
		for (let i = this.openElements.stackTop; i >= 0; i--) switch (i === 0 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[i]) {
			case TAG_ID.TR:
				this.insertionMode = InsertionMode.IN_ROW;
				return;
			case TAG_ID.TBODY:
			case TAG_ID.THEAD:
			case TAG_ID.TFOOT:
				this.insertionMode = InsertionMode.IN_TABLE_BODY;
				return;
			case TAG_ID.CAPTION:
				this.insertionMode = InsertionMode.IN_CAPTION;
				return;
			case TAG_ID.COLGROUP:
				this.insertionMode = InsertionMode.IN_COLUMN_GROUP;
				return;
			case TAG_ID.TABLE:
				this.insertionMode = InsertionMode.IN_TABLE;
				return;
			case TAG_ID.BODY:
				this.insertionMode = InsertionMode.IN_BODY;
				return;
			case TAG_ID.FRAMESET:
				this.insertionMode = InsertionMode.IN_FRAMESET;
				return;
			case TAG_ID.SELECT:
				this._resetInsertionModeForSelect(i);
				return;
			case TAG_ID.TEMPLATE:
				this.insertionMode = this.tmplInsertionModeStack[0];
				return;
			case TAG_ID.HTML:
				this.insertionMode = this.headElement ? InsertionMode.AFTER_HEAD : InsertionMode.BEFORE_HEAD;
				return;
			case TAG_ID.TD:
			case TAG_ID.TH:
				if (i > 0) {
					this.insertionMode = InsertionMode.IN_CELL;
					return;
				}
				break;
			case TAG_ID.HEAD: if (i > 0) {
				this.insertionMode = InsertionMode.IN_HEAD;
				return;
			}
		}
		this.insertionMode = InsertionMode.IN_BODY;
	}
	_resetInsertionModeForSelect(selectIdx) {
		if (selectIdx > 0) for (let i = selectIdx - 1; i > 0; i--) {
			const tn = this.openElements.tagIDs[i];
			if (tn === TAG_ID.TEMPLATE) break;
			else if (tn === TAG_ID.TABLE) {
				this.insertionMode = InsertionMode.IN_SELECT_IN_TABLE;
				return;
			}
		}
		this.insertionMode = InsertionMode.IN_SELECT;
	}
	_isElementCausesFosterParenting(tn) {
		return TABLE_STRUCTURE_TAGS.has(tn);
	}
	_shouldFosterParentOnInsertion() {
		return this.fosterParentingEnabled && this._isElementCausesFosterParenting(this.openElements.currentTagId);
	}
	_findFosterParentingLocation() {
		for (let i = this.openElements.stackTop; i >= 0; i--) {
			const openElement = this.openElements.items[i];
			switch (this.openElements.tagIDs[i]) {
				case TAG_ID.TEMPLATE:
					if (this.treeAdapter.getNamespaceURI(openElement) === NS.HTML) return {
						parent: this.treeAdapter.getTemplateContent(openElement),
						beforeElement: null
					};
					break;
				case TAG_ID.TABLE: {
					const parent = this.treeAdapter.getParentNode(openElement);
					if (parent) return {
						parent,
						beforeElement: openElement
					};
					return {
						parent: this.openElements.items[i - 1],
						beforeElement: null
					};
				}
			}
		}
		return {
			parent: this.openElements.items[0],
			beforeElement: null
		};
	}
	_fosterParentElement(element) {
		const location = this._findFosterParentingLocation();
		if (location.beforeElement) this.treeAdapter.insertBefore(location.parent, element, location.beforeElement);
		else this.treeAdapter.appendChild(location.parent, element);
	}
	_isSpecialElement(element, id) {
		return SPECIAL_ELEMENTS[this.treeAdapter.getNamespaceURI(element)].has(id);
	}
	onCharacter(token) {
		this.skipNextNewLine = false;
		if (this.tokenizer.inForeignNode) {
			characterInForeignContent(this, token);
			return;
		}
		switch (this.insertionMode) {
			case InsertionMode.INITIAL:
				tokenInInitialMode(this, token);
				break;
			case InsertionMode.BEFORE_HTML:
				tokenBeforeHtml(this, token);
				break;
			case InsertionMode.BEFORE_HEAD:
				tokenBeforeHead(this, token);
				break;
			case InsertionMode.IN_HEAD:
				tokenInHead(this, token);
				break;
			case InsertionMode.IN_HEAD_NO_SCRIPT:
				tokenInHeadNoScript(this, token);
				break;
			case InsertionMode.AFTER_HEAD:
				tokenAfterHead(this, token);
				break;
			case InsertionMode.IN_BODY:
			case InsertionMode.IN_CAPTION:
			case InsertionMode.IN_CELL:
			case InsertionMode.IN_TEMPLATE:
				characterInBody(this, token);
				break;
			case InsertionMode.TEXT:
			case InsertionMode.IN_SELECT:
			case InsertionMode.IN_SELECT_IN_TABLE:
				this._insertCharacters(token);
				break;
			case InsertionMode.IN_TABLE:
			case InsertionMode.IN_TABLE_BODY:
			case InsertionMode.IN_ROW:
				characterInTable(this, token);
				break;
			case InsertionMode.IN_TABLE_TEXT:
				characterInTableText(this, token);
				break;
			case InsertionMode.IN_COLUMN_GROUP:
				tokenInColumnGroup(this, token);
				break;
			case InsertionMode.AFTER_BODY:
				tokenAfterBody(this, token);
				break;
			case InsertionMode.AFTER_AFTER_BODY: tokenAfterAfterBody(this, token);
		}
	}
	onNullCharacter(token) {
		this.skipNextNewLine = false;
		if (this.tokenizer.inForeignNode) {
			nullCharacterInForeignContent(this, token);
			return;
		}
		switch (this.insertionMode) {
			case InsertionMode.INITIAL:
				tokenInInitialMode(this, token);
				break;
			case InsertionMode.BEFORE_HTML:
				tokenBeforeHtml(this, token);
				break;
			case InsertionMode.BEFORE_HEAD:
				tokenBeforeHead(this, token);
				break;
			case InsertionMode.IN_HEAD:
				tokenInHead(this, token);
				break;
			case InsertionMode.IN_HEAD_NO_SCRIPT:
				tokenInHeadNoScript(this, token);
				break;
			case InsertionMode.AFTER_HEAD:
				tokenAfterHead(this, token);
				break;
			case InsertionMode.TEXT:
				this._insertCharacters(token);
				break;
			case InsertionMode.IN_TABLE:
			case InsertionMode.IN_TABLE_BODY:
			case InsertionMode.IN_ROW:
				characterInTable(this, token);
				break;
			case InsertionMode.IN_COLUMN_GROUP:
				tokenInColumnGroup(this, token);
				break;
			case InsertionMode.AFTER_BODY:
				tokenAfterBody(this, token);
				break;
			case InsertionMode.AFTER_AFTER_BODY: tokenAfterAfterBody(this, token);
		}
	}
	onComment(token) {
		this.skipNextNewLine = false;
		if (this.currentNotInHTML) {
			appendComment(this, token);
			return;
		}
		switch (this.insertionMode) {
			case InsertionMode.INITIAL:
			case InsertionMode.BEFORE_HTML:
			case InsertionMode.BEFORE_HEAD:
			case InsertionMode.IN_HEAD:
			case InsertionMode.IN_HEAD_NO_SCRIPT:
			case InsertionMode.AFTER_HEAD:
			case InsertionMode.IN_BODY:
			case InsertionMode.IN_TABLE:
			case InsertionMode.IN_CAPTION:
			case InsertionMode.IN_COLUMN_GROUP:
			case InsertionMode.IN_TABLE_BODY:
			case InsertionMode.IN_ROW:
			case InsertionMode.IN_CELL:
			case InsertionMode.IN_SELECT:
			case InsertionMode.IN_SELECT_IN_TABLE:
			case InsertionMode.IN_TEMPLATE:
			case InsertionMode.IN_FRAMESET:
			case InsertionMode.AFTER_FRAMESET:
				appendComment(this, token);
				break;
			case InsertionMode.IN_TABLE_TEXT:
				tokenInTableText(this, token);
				break;
			case InsertionMode.AFTER_BODY:
				appendCommentToRootHtmlElement(this, token);
				break;
			case InsertionMode.AFTER_AFTER_BODY:
			case InsertionMode.AFTER_AFTER_FRAMESET: appendCommentToDocument(this, token);
		}
	}
	onDoctype(token) {
		this.skipNextNewLine = false;
		switch (this.insertionMode) {
			case InsertionMode.INITIAL:
				doctypeInInitialMode(this, token);
				break;
			case InsertionMode.BEFORE_HEAD:
			case InsertionMode.IN_HEAD:
			case InsertionMode.IN_HEAD_NO_SCRIPT:
			case InsertionMode.AFTER_HEAD:
				this._err(token, ERR.misplacedDoctype);
				break;
			case InsertionMode.IN_TABLE_TEXT: tokenInTableText(this, token);
		}
	}
	onStartTag(token) {
		this.skipNextNewLine = false;
		this.currentToken = token;
		this._processStartTag(token);
		if (token.selfClosing && !token.ackSelfClosing) this._err(token, ERR.nonVoidHtmlElementStartTagWithTrailingSolidus);
	}
	/**
	* Processes a given start tag.
	*
	* `onStartTag` checks if a self-closing tag was recognized. When a token
	* is moved inbetween multiple insertion modes, this check for self-closing
	* could lead to false positives. To avoid this, `_processStartTag` is used
	* for nested calls.
	*
	* @param token The token to process.
	*/
	_processStartTag(token) {
		if (this.shouldProcessStartTagTokenInForeignContent(token)) startTagInForeignContent(this, token);
		else this._startTagOutsideForeignContent(token);
	}
	_startTagOutsideForeignContent(token) {
		switch (this.insertionMode) {
			case InsertionMode.INITIAL:
				tokenInInitialMode(this, token);
				break;
			case InsertionMode.BEFORE_HTML:
				startTagBeforeHtml(this, token);
				break;
			case InsertionMode.BEFORE_HEAD:
				startTagBeforeHead(this, token);
				break;
			case InsertionMode.IN_HEAD:
				startTagInHead(this, token);
				break;
			case InsertionMode.IN_HEAD_NO_SCRIPT:
				startTagInHeadNoScript(this, token);
				break;
			case InsertionMode.AFTER_HEAD:
				startTagAfterHead(this, token);
				break;
			case InsertionMode.IN_BODY:
				startTagInBody(this, token);
				break;
			case InsertionMode.IN_TABLE:
				startTagInTable(this, token);
				break;
			case InsertionMode.IN_TABLE_TEXT:
				tokenInTableText(this, token);
				break;
			case InsertionMode.IN_CAPTION:
				startTagInCaption(this, token);
				break;
			case InsertionMode.IN_COLUMN_GROUP:
				startTagInColumnGroup(this, token);
				break;
			case InsertionMode.IN_TABLE_BODY:
				startTagInTableBody(this, token);
				break;
			case InsertionMode.IN_ROW:
				startTagInRow(this, token);
				break;
			case InsertionMode.IN_CELL:
				startTagInCell(this, token);
				break;
			case InsertionMode.IN_SELECT:
				startTagInSelect(this, token);
				break;
			case InsertionMode.IN_SELECT_IN_TABLE:
				startTagInSelectInTable(this, token);
				break;
			case InsertionMode.IN_TEMPLATE:
				startTagInTemplate(this, token);
				break;
			case InsertionMode.AFTER_BODY:
				startTagAfterBody(this, token);
				break;
			case InsertionMode.IN_FRAMESET:
				startTagInFrameset(this, token);
				break;
			case InsertionMode.AFTER_FRAMESET:
				startTagAfterFrameset(this, token);
				break;
			case InsertionMode.AFTER_AFTER_BODY:
				startTagAfterAfterBody(this, token);
				break;
			case InsertionMode.AFTER_AFTER_FRAMESET: startTagAfterAfterFrameset(this, token);
		}
	}
	onEndTag(token) {
		this.skipNextNewLine = false;
		this.currentToken = token;
		if (this.currentNotInHTML) endTagInForeignContent(this, token);
		else this._endTagOutsideForeignContent(token);
	}
	_endTagOutsideForeignContent(token) {
		switch (this.insertionMode) {
			case InsertionMode.INITIAL:
				tokenInInitialMode(this, token);
				break;
			case InsertionMode.BEFORE_HTML:
				endTagBeforeHtml(this, token);
				break;
			case InsertionMode.BEFORE_HEAD:
				endTagBeforeHead(this, token);
				break;
			case InsertionMode.IN_HEAD:
				endTagInHead(this, token);
				break;
			case InsertionMode.IN_HEAD_NO_SCRIPT:
				endTagInHeadNoScript(this, token);
				break;
			case InsertionMode.AFTER_HEAD:
				endTagAfterHead(this, token);
				break;
			case InsertionMode.IN_BODY:
				endTagInBody(this, token);
				break;
			case InsertionMode.TEXT:
				endTagInText(this, token);
				break;
			case InsertionMode.IN_TABLE:
				endTagInTable(this, token);
				break;
			case InsertionMode.IN_TABLE_TEXT:
				tokenInTableText(this, token);
				break;
			case InsertionMode.IN_CAPTION:
				endTagInCaption(this, token);
				break;
			case InsertionMode.IN_COLUMN_GROUP:
				endTagInColumnGroup(this, token);
				break;
			case InsertionMode.IN_TABLE_BODY:
				endTagInTableBody(this, token);
				break;
			case InsertionMode.IN_ROW:
				endTagInRow(this, token);
				break;
			case InsertionMode.IN_CELL:
				endTagInCell(this, token);
				break;
			case InsertionMode.IN_SELECT:
				endTagInSelect(this, token);
				break;
			case InsertionMode.IN_SELECT_IN_TABLE:
				endTagInSelectInTable(this, token);
				break;
			case InsertionMode.IN_TEMPLATE:
				endTagInTemplate(this, token);
				break;
			case InsertionMode.AFTER_BODY:
				endTagAfterBody(this, token);
				break;
			case InsertionMode.IN_FRAMESET:
				endTagInFrameset(this, token);
				break;
			case InsertionMode.AFTER_FRAMESET:
				endTagAfterFrameset(this, token);
				break;
			case InsertionMode.AFTER_AFTER_BODY: tokenAfterAfterBody(this, token);
		}
	}
	onEof(token) {
		switch (this.insertionMode) {
			case InsertionMode.INITIAL:
				tokenInInitialMode(this, token);
				break;
			case InsertionMode.BEFORE_HTML:
				tokenBeforeHtml(this, token);
				break;
			case InsertionMode.BEFORE_HEAD:
				tokenBeforeHead(this, token);
				break;
			case InsertionMode.IN_HEAD:
				tokenInHead(this, token);
				break;
			case InsertionMode.IN_HEAD_NO_SCRIPT:
				tokenInHeadNoScript(this, token);
				break;
			case InsertionMode.AFTER_HEAD:
				tokenAfterHead(this, token);
				break;
			case InsertionMode.IN_BODY:
			case InsertionMode.IN_TABLE:
			case InsertionMode.IN_CAPTION:
			case InsertionMode.IN_COLUMN_GROUP:
			case InsertionMode.IN_TABLE_BODY:
			case InsertionMode.IN_ROW:
			case InsertionMode.IN_CELL:
			case InsertionMode.IN_SELECT:
			case InsertionMode.IN_SELECT_IN_TABLE:
				eofInBody(this, token);
				break;
			case InsertionMode.TEXT:
				eofInText(this, token);
				break;
			case InsertionMode.IN_TABLE_TEXT:
				tokenInTableText(this, token);
				break;
			case InsertionMode.IN_TEMPLATE:
				eofInTemplate(this, token);
				break;
			case InsertionMode.AFTER_BODY:
			case InsertionMode.IN_FRAMESET:
			case InsertionMode.AFTER_FRAMESET:
			case InsertionMode.AFTER_AFTER_BODY:
			case InsertionMode.AFTER_AFTER_FRAMESET: stopParsing(this, token);
		}
	}
	onWhitespaceCharacter(token) {
		if (this.skipNextNewLine) {
			this.skipNextNewLine = false;
			if (token.chars.charCodeAt(0) === CODE_POINTS.LINE_FEED) {
				if (token.chars.length === 1) return;
				token.chars = token.chars.substr(1);
			}
		}
		if (this.tokenizer.inForeignNode) {
			this._insertCharacters(token);
			return;
		}
		switch (this.insertionMode) {
			case InsertionMode.IN_HEAD:
			case InsertionMode.IN_HEAD_NO_SCRIPT:
			case InsertionMode.AFTER_HEAD:
			case InsertionMode.TEXT:
			case InsertionMode.IN_COLUMN_GROUP:
			case InsertionMode.IN_SELECT:
			case InsertionMode.IN_SELECT_IN_TABLE:
			case InsertionMode.IN_FRAMESET:
			case InsertionMode.AFTER_FRAMESET:
				this._insertCharacters(token);
				break;
			case InsertionMode.IN_BODY:
			case InsertionMode.IN_CAPTION:
			case InsertionMode.IN_CELL:
			case InsertionMode.IN_TEMPLATE:
			case InsertionMode.AFTER_BODY:
			case InsertionMode.AFTER_AFTER_BODY:
			case InsertionMode.AFTER_AFTER_FRAMESET:
				whitespaceCharacterInBody(this, token);
				break;
			case InsertionMode.IN_TABLE:
			case InsertionMode.IN_TABLE_BODY:
			case InsertionMode.IN_ROW:
				characterInTable(this, token);
				break;
			case InsertionMode.IN_TABLE_TEXT: whitespaceCharacterInTableText(this, token);
		}
	}
};
function aaObtainFormattingElementEntry(p, token) {
	let formattingElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName(token.tagName);
	if (formattingElementEntry) {
		if (!p.openElements.contains(formattingElementEntry.element)) {
			p.activeFormattingElements.removeEntry(formattingElementEntry);
			formattingElementEntry = null;
		} else if (!p.openElements.hasInScope(token.tagID)) formattingElementEntry = null;
	} else genericEndTagInBody(p, token);
	return formattingElementEntry;
}
function aaObtainFurthestBlock(p, formattingElementEntry) {
	let furthestBlock = null;
	let idx = p.openElements.stackTop;
	for (; idx >= 0; idx--) {
		const element = p.openElements.items[idx];
		if (element === formattingElementEntry.element) break;
		if (p._isSpecialElement(element, p.openElements.tagIDs[idx])) furthestBlock = element;
	}
	if (!furthestBlock) {
		p.openElements.shortenToLength(idx < 0 ? 0 : idx);
		p.activeFormattingElements.removeEntry(formattingElementEntry);
	}
	return furthestBlock;
}
function aaInnerLoop(p, furthestBlock, formattingElement) {
	let lastElement = furthestBlock;
	let nextElement = p.openElements.getCommonAncestor(furthestBlock);
	for (let i = 0, element = nextElement; element !== formattingElement; i++, element = nextElement) {
		nextElement = p.openElements.getCommonAncestor(element);
		const elementEntry = p.activeFormattingElements.getElementEntry(element);
		const counterOverflow = elementEntry && i >= AA_INNER_LOOP_ITER;
		if (!elementEntry || counterOverflow) {
			if (counterOverflow) p.activeFormattingElements.removeEntry(elementEntry);
			p.openElements.remove(element);
		} else {
			element = aaRecreateElementFromEntry(p, elementEntry);
			if (lastElement === furthestBlock) p.activeFormattingElements.bookmark = elementEntry;
			p.treeAdapter.detachNode(lastElement);
			p.treeAdapter.appendChild(element, lastElement);
			lastElement = element;
		}
	}
	return lastElement;
}
function aaRecreateElementFromEntry(p, elementEntry) {
	const ns = p.treeAdapter.getNamespaceURI(elementEntry.element);
	const newElement = p.treeAdapter.createElement(elementEntry.token.tagName, ns, elementEntry.token.attrs);
	p.openElements.replace(elementEntry.element, newElement);
	elementEntry.element = newElement;
	return newElement;
}
function aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement) {
	const tid = getTagID(p.treeAdapter.getTagName(commonAncestor));
	if (p._isElementCausesFosterParenting(tid)) p._fosterParentElement(lastElement);
	else {
		const ns = p.treeAdapter.getNamespaceURI(commonAncestor);
		if (tid === TAG_ID.TEMPLATE && ns === NS.HTML) commonAncestor = p.treeAdapter.getTemplateContent(commonAncestor);
		p.treeAdapter.appendChild(commonAncestor, lastElement);
	}
}
function aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry) {
	const ns = p.treeAdapter.getNamespaceURI(formattingElementEntry.element);
	const { token } = formattingElementEntry;
	const newElement = p.treeAdapter.createElement(token.tagName, ns, token.attrs);
	p._adoptNodes(furthestBlock, newElement);
	p.treeAdapter.appendChild(furthestBlock, newElement);
	p.activeFormattingElements.insertElementAfterBookmark(newElement, token);
	p.activeFormattingElements.removeEntry(formattingElementEntry);
	p.openElements.remove(formattingElementEntry.element);
	p.openElements.insertAfter(furthestBlock, newElement, token.tagID);
}
function callAdoptionAgency(p, token) {
	for (let i = 0; i < AA_OUTER_LOOP_ITER; i++) {
		const formattingElementEntry = aaObtainFormattingElementEntry(p, token);
		if (!formattingElementEntry) break;
		const furthestBlock = aaObtainFurthestBlock(p, formattingElementEntry);
		if (!furthestBlock) break;
		p.activeFormattingElements.bookmark = formattingElementEntry;
		const lastElement = aaInnerLoop(p, furthestBlock, formattingElementEntry.element);
		const commonAncestor = p.openElements.getCommonAncestor(formattingElementEntry.element);
		p.treeAdapter.detachNode(lastElement);
		if (commonAncestor) aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement);
		aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry);
	}
}
function appendComment(p, token) {
	p._appendCommentNode(token, p.openElements.currentTmplContentOrNode);
}
function appendCommentToRootHtmlElement(p, token) {
	p._appendCommentNode(token, p.openElements.items[0]);
}
function appendCommentToDocument(p, token) {
	p._appendCommentNode(token, p.document);
}
function stopParsing(p, token) {
	p.stopped = true;
	if (token.location) {
		const target = p.fragmentContext ? 0 : 2;
		for (let i = p.openElements.stackTop; i >= target; i--) p._setEndLocation(p.openElements.items[i], token);
		if (!p.fragmentContext && p.openElements.stackTop >= 0) {
			const htmlElement = p.openElements.items[0];
			const htmlLocation = p.treeAdapter.getNodeSourceCodeLocation(htmlElement);
			if (htmlLocation && !htmlLocation.endTag) {
				p._setEndLocation(htmlElement, token);
				if (p.openElements.stackTop >= 1) {
					const bodyElement = p.openElements.items[1];
					const bodyLocation = p.treeAdapter.getNodeSourceCodeLocation(bodyElement);
					if (bodyLocation && !bodyLocation.endTag) p._setEndLocation(bodyElement, token);
				}
			}
		}
	}
}
function doctypeInInitialMode(p, token) {
	p._setDocumentType(token);
	const mode = token.forceQuirks ? DOCUMENT_MODE.QUIRKS : getDocumentMode(token);
	if (!isConforming(token)) p._err(token, ERR.nonConformingDoctype);
	p.treeAdapter.setDocumentMode(p.document, mode);
	p.insertionMode = InsertionMode.BEFORE_HTML;
}
function tokenInInitialMode(p, token) {
	p._err(token, ERR.missingDoctype, true);
	p.treeAdapter.setDocumentMode(p.document, DOCUMENT_MODE.QUIRKS);
	p.insertionMode = InsertionMode.BEFORE_HTML;
	p._processToken(token);
}
function startTagBeforeHtml(p, token) {
	if (token.tagID === TAG_ID.HTML) {
		p._insertElement(token, NS.HTML);
		p.insertionMode = InsertionMode.BEFORE_HEAD;
	} else tokenBeforeHtml(p, token);
}
function endTagBeforeHtml(p, token) {
	const tn = token.tagID;
	if (tn === TAG_ID.HTML || tn === TAG_ID.HEAD || tn === TAG_ID.BODY || tn === TAG_ID.BR) tokenBeforeHtml(p, token);
}
function tokenBeforeHtml(p, token) {
	p._insertFakeRootElement();
	p.insertionMode = InsertionMode.BEFORE_HEAD;
	p._processToken(token);
}
function startTagBeforeHead(p, token) {
	switch (token.tagID) {
		case TAG_ID.HTML:
			startTagInBody(p, token);
			break;
		case TAG_ID.HEAD:
			p._insertElement(token, NS.HTML);
			p.headElement = p.openElements.current;
			p.insertionMode = InsertionMode.IN_HEAD;
			break;
		default: tokenBeforeHead(p, token);
	}
}
function endTagBeforeHead(p, token) {
	const tn = token.tagID;
	if (tn === TAG_ID.HEAD || tn === TAG_ID.BODY || tn === TAG_ID.HTML || tn === TAG_ID.BR) tokenBeforeHead(p, token);
	else p._err(token, ERR.endTagWithoutMatchingOpenElement);
}
function tokenBeforeHead(p, token) {
	p._insertFakeElement(TAG_NAMES.HEAD, TAG_ID.HEAD);
	p.headElement = p.openElements.current;
	p.insertionMode = InsertionMode.IN_HEAD;
	p._processToken(token);
}
function startTagInHead(p, token) {
	switch (token.tagID) {
		case TAG_ID.HTML:
			startTagInBody(p, token);
			break;
		case TAG_ID.BASE:
		case TAG_ID.BASEFONT:
		case TAG_ID.BGSOUND:
		case TAG_ID.LINK:
		case TAG_ID.META:
			p._appendElement(token, NS.HTML);
			token.ackSelfClosing = true;
			break;
		case TAG_ID.TITLE:
			p._switchToTextParsing(token, TokenizerMode.RCDATA);
			break;
		case TAG_ID.NOSCRIPT:
			if (p.options.scriptingEnabled) p._switchToTextParsing(token, TokenizerMode.RAWTEXT);
			else {
				p._insertElement(token, NS.HTML);
				p.insertionMode = InsertionMode.IN_HEAD_NO_SCRIPT;
			}
			break;
		case TAG_ID.NOFRAMES:
		case TAG_ID.STYLE:
			p._switchToTextParsing(token, TokenizerMode.RAWTEXT);
			break;
		case TAG_ID.SCRIPT:
			p._switchToTextParsing(token, TokenizerMode.SCRIPT_DATA);
			break;
		case TAG_ID.TEMPLATE:
			p._insertTemplate(token);
			p.activeFormattingElements.insertMarker();
			p.framesetOk = false;
			p.insertionMode = InsertionMode.IN_TEMPLATE;
			p.tmplInsertionModeStack.unshift(InsertionMode.IN_TEMPLATE);
			break;
		case TAG_ID.HEAD:
			p._err(token, ERR.misplacedStartTagForHeadElement);
			break;
		default: tokenInHead(p, token);
	}
}
function endTagInHead(p, token) {
	switch (token.tagID) {
		case TAG_ID.HEAD:
			p.openElements.pop();
			p.insertionMode = InsertionMode.AFTER_HEAD;
			break;
		case TAG_ID.BODY:
		case TAG_ID.BR:
		case TAG_ID.HTML:
			tokenInHead(p, token);
			break;
		case TAG_ID.TEMPLATE:
			if (p.openElements.tmplCount > 0) {
				p.openElements.generateImpliedEndTagsThoroughly();
				if (p.openElements.currentTagId !== TAG_ID.TEMPLATE) p._err(token, ERR.closingOfElementWithOpenChildElements);
				p.openElements.popUntilTagNamePopped(TAG_ID.TEMPLATE);
				p.activeFormattingElements.clearToLastMarker();
				p.tmplInsertionModeStack.shift();
				p._resetInsertionMode();
			} else p._err(token, ERR.endTagWithoutMatchingOpenElement);
			break;
		default: p._err(token, ERR.endTagWithoutMatchingOpenElement);
	}
}
function tokenInHead(p, token) {
	p.openElements.pop();
	p.insertionMode = InsertionMode.AFTER_HEAD;
	p._processToken(token);
}
function startTagInHeadNoScript(p, token) {
	switch (token.tagID) {
		case TAG_ID.HTML:
			startTagInBody(p, token);
			break;
		case TAG_ID.BASEFONT:
		case TAG_ID.BGSOUND:
		case TAG_ID.HEAD:
		case TAG_ID.LINK:
		case TAG_ID.META:
		case TAG_ID.NOFRAMES:
		case TAG_ID.STYLE:
			startTagInHead(p, token);
			break;
		case TAG_ID.NOSCRIPT:
			p._err(token, ERR.nestedNoscriptInHead);
			break;
		default: tokenInHeadNoScript(p, token);
	}
}
function endTagInHeadNoScript(p, token) {
	switch (token.tagID) {
		case TAG_ID.NOSCRIPT:
			p.openElements.pop();
			p.insertionMode = InsertionMode.IN_HEAD;
			break;
		case TAG_ID.BR:
			tokenInHeadNoScript(p, token);
			break;
		default: p._err(token, ERR.endTagWithoutMatchingOpenElement);
	}
}
function tokenInHeadNoScript(p, token) {
	const errCode = token.type === TokenType.EOF ? ERR.openElementsLeftAfterEof : ERR.disallowedContentInNoscriptInHead;
	p._err(token, errCode);
	p.openElements.pop();
	p.insertionMode = InsertionMode.IN_HEAD;
	p._processToken(token);
}
function startTagAfterHead(p, token) {
	switch (token.tagID) {
		case TAG_ID.HTML:
			startTagInBody(p, token);
			break;
		case TAG_ID.BODY:
			p._insertElement(token, NS.HTML);
			p.framesetOk = false;
			p.insertionMode = InsertionMode.IN_BODY;
			break;
		case TAG_ID.FRAMESET:
			p._insertElement(token, NS.HTML);
			p.insertionMode = InsertionMode.IN_FRAMESET;
			break;
		case TAG_ID.BASE:
		case TAG_ID.BASEFONT:
		case TAG_ID.BGSOUND:
		case TAG_ID.LINK:
		case TAG_ID.META:
		case TAG_ID.NOFRAMES:
		case TAG_ID.SCRIPT:
		case TAG_ID.STYLE:
		case TAG_ID.TEMPLATE:
		case TAG_ID.TITLE:
			p._err(token, ERR.abandonedHeadElementChild);
			p.openElements.push(p.headElement, TAG_ID.HEAD);
			startTagInHead(p, token);
			p.openElements.remove(p.headElement);
			break;
		case TAG_ID.HEAD:
			p._err(token, ERR.misplacedStartTagForHeadElement);
			break;
		default: tokenAfterHead(p, token);
	}
}
function endTagAfterHead(p, token) {
	switch (token.tagID) {
		case TAG_ID.BODY:
		case TAG_ID.HTML:
		case TAG_ID.BR:
			tokenAfterHead(p, token);
			break;
		case TAG_ID.TEMPLATE:
			endTagInHead(p, token);
			break;
		default: p._err(token, ERR.endTagWithoutMatchingOpenElement);
	}
}
function tokenAfterHead(p, token) {
	p._insertFakeElement(TAG_NAMES.BODY, TAG_ID.BODY);
	p.insertionMode = InsertionMode.IN_BODY;
	modeInBody(p, token);
}
function modeInBody(p, token) {
	switch (token.type) {
		case TokenType.CHARACTER:
			characterInBody(p, token);
			break;
		case TokenType.WHITESPACE_CHARACTER:
			whitespaceCharacterInBody(p, token);
			break;
		case TokenType.COMMENT:
			appendComment(p, token);
			break;
		case TokenType.START_TAG:
			startTagInBody(p, token);
			break;
		case TokenType.END_TAG:
			endTagInBody(p, token);
			break;
		case TokenType.EOF: eofInBody(p, token);
	}
}
function whitespaceCharacterInBody(p, token) {
	p._reconstructActiveFormattingElements();
	p._insertCharacters(token);
}
function characterInBody(p, token) {
	p._reconstructActiveFormattingElements();
	p._insertCharacters(token);
	p.framesetOk = false;
}
function htmlStartTagInBody(p, token) {
	if (p.openElements.tmplCount === 0) p.treeAdapter.adoptAttributes(p.openElements.items[0], token.attrs);
}
function bodyStartTagInBody(p, token) {
	const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
	if (bodyElement && p.openElements.tmplCount === 0) {
		p.framesetOk = false;
		p.treeAdapter.adoptAttributes(bodyElement, token.attrs);
	}
}
function framesetStartTagInBody(p, token) {
	const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
	if (p.framesetOk && bodyElement) {
		p.treeAdapter.detachNode(bodyElement);
		p.openElements.popAllUpToHtmlElement();
		p._insertElement(token, NS.HTML);
		p.insertionMode = InsertionMode.IN_FRAMESET;
	}
}
function addressStartTagInBody(p, token) {
	if (p.openElements.hasInButtonScope(TAG_ID.P)) p._closePElement();
	p._insertElement(token, NS.HTML);
}
function numberedHeaderStartTagInBody(p, token) {
	if (p.openElements.hasInButtonScope(TAG_ID.P)) p._closePElement();
	if (isNumberedHeader(p.openElements.currentTagId)) p.openElements.pop();
	p._insertElement(token, NS.HTML);
}
function preStartTagInBody(p, token) {
	if (p.openElements.hasInButtonScope(TAG_ID.P)) p._closePElement();
	p._insertElement(token, NS.HTML);
	p.skipNextNewLine = true;
	p.framesetOk = false;
}
function formStartTagInBody(p, token) {
	const inTemplate = p.openElements.tmplCount > 0;
	if (!p.formElement || inTemplate) {
		if (p.openElements.hasInButtonScope(TAG_ID.P)) p._closePElement();
		p._insertElement(token, NS.HTML);
		if (!inTemplate) p.formElement = p.openElements.current;
	}
}
function listItemStartTagInBody(p, token) {
	p.framesetOk = false;
	const tn = token.tagID;
	for (let i = p.openElements.stackTop; i >= 0; i--) {
		const elementId = p.openElements.tagIDs[i];
		if (tn === TAG_ID.LI && elementId === TAG_ID.LI || (tn === TAG_ID.DD || tn === TAG_ID.DT) && (elementId === TAG_ID.DD || elementId === TAG_ID.DT)) {
			p.openElements.generateImpliedEndTagsWithExclusion(elementId);
			p.openElements.popUntilTagNamePopped(elementId);
			break;
		}
		if (elementId !== TAG_ID.ADDRESS && elementId !== TAG_ID.DIV && elementId !== TAG_ID.P && p._isSpecialElement(p.openElements.items[i], elementId)) break;
	}
	if (p.openElements.hasInButtonScope(TAG_ID.P)) p._closePElement();
	p._insertElement(token, NS.HTML);
}
function plaintextStartTagInBody(p, token) {
	if (p.openElements.hasInButtonScope(TAG_ID.P)) p._closePElement();
	p._insertElement(token, NS.HTML);
	p.tokenizer.state = TokenizerMode.PLAINTEXT;
}
function buttonStartTagInBody(p, token) {
	if (p.openElements.hasInScope(TAG_ID.BUTTON)) {
		p.openElements.generateImpliedEndTags();
		p.openElements.popUntilTagNamePopped(TAG_ID.BUTTON);
	}
	p._reconstructActiveFormattingElements();
	p._insertElement(token, NS.HTML);
	p.framesetOk = false;
}
function aStartTagInBody(p, token) {
	const activeElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName(TAG_NAMES.A);
	if (activeElementEntry) {
		callAdoptionAgency(p, token);
		p.openElements.remove(activeElementEntry.element);
		p.activeFormattingElements.removeEntry(activeElementEntry);
	}
	p._reconstructActiveFormattingElements();
	p._insertElement(token, NS.HTML);
	p.activeFormattingElements.pushElement(p.openElements.current, token);
}
function bStartTagInBody(p, token) {
	p._reconstructActiveFormattingElements();
	p._insertElement(token, NS.HTML);
	p.activeFormattingElements.pushElement(p.openElements.current, token);
}
function nobrStartTagInBody(p, token) {
	p._reconstructActiveFormattingElements();
	if (p.openElements.hasInScope(TAG_ID.NOBR)) {
		callAdoptionAgency(p, token);
		p._reconstructActiveFormattingElements();
	}
	p._insertElement(token, NS.HTML);
	p.activeFormattingElements.pushElement(p.openElements.current, token);
}
function appletStartTagInBody(p, token) {
	p._reconstructActiveFormattingElements();
	p._insertElement(token, NS.HTML);
	p.activeFormattingElements.insertMarker();
	p.framesetOk = false;
}
function tableStartTagInBody(p, token) {
	if (p.treeAdapter.getDocumentMode(p.document) !== DOCUMENT_MODE.QUIRKS && p.openElements.hasInButtonScope(TAG_ID.P)) p._closePElement();
	p._insertElement(token, NS.HTML);
	p.framesetOk = false;
	p.insertionMode = InsertionMode.IN_TABLE;
}
function areaStartTagInBody(p, token) {
	p._reconstructActiveFormattingElements();
	p._appendElement(token, NS.HTML);
	p.framesetOk = false;
	token.ackSelfClosing = true;
}
function isHiddenInput(token) {
	const inputType = getTokenAttr(token, ATTRS.TYPE);
	return inputType != null && inputType.toLowerCase() === HIDDEN_INPUT_TYPE;
}
function inputStartTagInBody(p, token) {
	p._reconstructActiveFormattingElements();
	p._appendElement(token, NS.HTML);
	if (!isHiddenInput(token)) p.framesetOk = false;
	token.ackSelfClosing = true;
}
function paramStartTagInBody(p, token) {
	p._appendElement(token, NS.HTML);
	token.ackSelfClosing = true;
}
function hrStartTagInBody(p, token) {
	if (p.openElements.hasInButtonScope(TAG_ID.P)) p._closePElement();
	p._appendElement(token, NS.HTML);
	p.framesetOk = false;
	token.ackSelfClosing = true;
}
function imageStartTagInBody(p, token) {
	token.tagName = TAG_NAMES.IMG;
	token.tagID = TAG_ID.IMG;
	areaStartTagInBody(p, token);
}
function textareaStartTagInBody(p, token) {
	p._insertElement(token, NS.HTML);
	p.skipNextNewLine = true;
	p.tokenizer.state = TokenizerMode.RCDATA;
	p.originalInsertionMode = p.insertionMode;
	p.framesetOk = false;
	p.insertionMode = InsertionMode.TEXT;
}
function xmpStartTagInBody(p, token) {
	if (p.openElements.hasInButtonScope(TAG_ID.P)) p._closePElement();
	p._reconstructActiveFormattingElements();
	p.framesetOk = false;
	p._switchToTextParsing(token, TokenizerMode.RAWTEXT);
}
function iframeStartTagInBody(p, token) {
	p.framesetOk = false;
	p._switchToTextParsing(token, TokenizerMode.RAWTEXT);
}
function noembedStartTagInBody(p, token) {
	p._switchToTextParsing(token, TokenizerMode.RAWTEXT);
}
function selectStartTagInBody(p, token) {
	p._reconstructActiveFormattingElements();
	p._insertElement(token, NS.HTML);
	p.framesetOk = false;
	p.insertionMode = p.insertionMode === InsertionMode.IN_TABLE || p.insertionMode === InsertionMode.IN_CAPTION || p.insertionMode === InsertionMode.IN_TABLE_BODY || p.insertionMode === InsertionMode.IN_ROW || p.insertionMode === InsertionMode.IN_CELL ? InsertionMode.IN_SELECT_IN_TABLE : InsertionMode.IN_SELECT;
}
function optgroupStartTagInBody(p, token) {
	if (p.openElements.currentTagId === TAG_ID.OPTION) p.openElements.pop();
	p._reconstructActiveFormattingElements();
	p._insertElement(token, NS.HTML);
}
function rbStartTagInBody(p, token) {
	if (p.openElements.hasInScope(TAG_ID.RUBY)) p.openElements.generateImpliedEndTags();
	p._insertElement(token, NS.HTML);
}
function rtStartTagInBody(p, token) {
	if (p.openElements.hasInScope(TAG_ID.RUBY)) p.openElements.generateImpliedEndTagsWithExclusion(TAG_ID.RTC);
	p._insertElement(token, NS.HTML);
}
function mathStartTagInBody(p, token) {
	p._reconstructActiveFormattingElements();
	adjustTokenMathMLAttrs(token);
	adjustTokenXMLAttrs(token);
	if (token.selfClosing) p._appendElement(token, NS.MATHML);
	else p._insertElement(token, NS.MATHML);
	token.ackSelfClosing = true;
}
function svgStartTagInBody(p, token) {
	p._reconstructActiveFormattingElements();
	adjustTokenSVGAttrs(token);
	adjustTokenXMLAttrs(token);
	if (token.selfClosing) p._appendElement(token, NS.SVG);
	else p._insertElement(token, NS.SVG);
	token.ackSelfClosing = true;
}
function genericStartTagInBody(p, token) {
	p._reconstructActiveFormattingElements();
	p._insertElement(token, NS.HTML);
}
function startTagInBody(p, token) {
	switch (token.tagID) {
		case TAG_ID.I:
		case TAG_ID.S:
		case TAG_ID.B:
		case TAG_ID.U:
		case TAG_ID.EM:
		case TAG_ID.TT:
		case TAG_ID.BIG:
		case TAG_ID.CODE:
		case TAG_ID.FONT:
		case TAG_ID.SMALL:
		case TAG_ID.STRIKE:
		case TAG_ID.STRONG:
			bStartTagInBody(p, token);
			break;
		case TAG_ID.A:
			aStartTagInBody(p, token);
			break;
		case TAG_ID.H1:
		case TAG_ID.H2:
		case TAG_ID.H3:
		case TAG_ID.H4:
		case TAG_ID.H5:
		case TAG_ID.H6:
			numberedHeaderStartTagInBody(p, token);
			break;
		case TAG_ID.P:
		case TAG_ID.DL:
		case TAG_ID.OL:
		case TAG_ID.UL:
		case TAG_ID.DIV:
		case TAG_ID.DIR:
		case TAG_ID.NAV:
		case TAG_ID.MAIN:
		case TAG_ID.MENU:
		case TAG_ID.ASIDE:
		case TAG_ID.CENTER:
		case TAG_ID.FIGURE:
		case TAG_ID.FOOTER:
		case TAG_ID.HEADER:
		case TAG_ID.HGROUP:
		case TAG_ID.DIALOG:
		case TAG_ID.DETAILS:
		case TAG_ID.ADDRESS:
		case TAG_ID.ARTICLE:
		case TAG_ID.SECTION:
		case TAG_ID.SUMMARY:
		case TAG_ID.FIELDSET:
		case TAG_ID.BLOCKQUOTE:
		case TAG_ID.FIGCAPTION:
			addressStartTagInBody(p, token);
			break;
		case TAG_ID.LI:
		case TAG_ID.DD:
		case TAG_ID.DT:
			listItemStartTagInBody(p, token);
			break;
		case TAG_ID.BR:
		case TAG_ID.IMG:
		case TAG_ID.WBR:
		case TAG_ID.AREA:
		case TAG_ID.EMBED:
		case TAG_ID.KEYGEN:
			areaStartTagInBody(p, token);
			break;
		case TAG_ID.HR:
			hrStartTagInBody(p, token);
			break;
		case TAG_ID.RB:
		case TAG_ID.RTC:
			rbStartTagInBody(p, token);
			break;
		case TAG_ID.RT:
		case TAG_ID.RP:
			rtStartTagInBody(p, token);
			break;
		case TAG_ID.PRE:
		case TAG_ID.LISTING:
			preStartTagInBody(p, token);
			break;
		case TAG_ID.XMP:
			xmpStartTagInBody(p, token);
			break;
		case TAG_ID.SVG:
			svgStartTagInBody(p, token);
			break;
		case TAG_ID.HTML:
			htmlStartTagInBody(p, token);
			break;
		case TAG_ID.BASE:
		case TAG_ID.LINK:
		case TAG_ID.META:
		case TAG_ID.STYLE:
		case TAG_ID.TITLE:
		case TAG_ID.SCRIPT:
		case TAG_ID.BGSOUND:
		case TAG_ID.BASEFONT:
		case TAG_ID.TEMPLATE:
			startTagInHead(p, token);
			break;
		case TAG_ID.BODY:
			bodyStartTagInBody(p, token);
			break;
		case TAG_ID.FORM:
			formStartTagInBody(p, token);
			break;
		case TAG_ID.NOBR:
			nobrStartTagInBody(p, token);
			break;
		case TAG_ID.MATH:
			mathStartTagInBody(p, token);
			break;
		case TAG_ID.TABLE:
			tableStartTagInBody(p, token);
			break;
		case TAG_ID.INPUT:
			inputStartTagInBody(p, token);
			break;
		case TAG_ID.PARAM:
		case TAG_ID.TRACK:
		case TAG_ID.SOURCE:
			paramStartTagInBody(p, token);
			break;
		case TAG_ID.IMAGE:
			imageStartTagInBody(p, token);
			break;
		case TAG_ID.BUTTON:
			buttonStartTagInBody(p, token);
			break;
		case TAG_ID.APPLET:
		case TAG_ID.OBJECT:
		case TAG_ID.MARQUEE:
			appletStartTagInBody(p, token);
			break;
		case TAG_ID.IFRAME:
			iframeStartTagInBody(p, token);
			break;
		case TAG_ID.SELECT:
			selectStartTagInBody(p, token);
			break;
		case TAG_ID.OPTION:
		case TAG_ID.OPTGROUP:
			optgroupStartTagInBody(p, token);
			break;
		case TAG_ID.NOEMBED:
			noembedStartTagInBody(p, token);
			break;
		case TAG_ID.FRAMESET:
			framesetStartTagInBody(p, token);
			break;
		case TAG_ID.TEXTAREA:
			textareaStartTagInBody(p, token);
			break;
		case TAG_ID.NOSCRIPT:
			if (p.options.scriptingEnabled) noembedStartTagInBody(p, token);
			else genericStartTagInBody(p, token);
			break;
		case TAG_ID.PLAINTEXT:
			plaintextStartTagInBody(p, token);
			break;
		case TAG_ID.COL:
		case TAG_ID.TH:
		case TAG_ID.TD:
		case TAG_ID.TR:
		case TAG_ID.HEAD:
		case TAG_ID.FRAME:
		case TAG_ID.TBODY:
		case TAG_ID.TFOOT:
		case TAG_ID.THEAD:
		case TAG_ID.CAPTION:
		case TAG_ID.COLGROUP: break;
		default: genericStartTagInBody(p, token);
	}
}
function bodyEndTagInBody(p, token) {
	if (p.openElements.hasInScope(TAG_ID.BODY)) {
		p.insertionMode = InsertionMode.AFTER_BODY;
		if (p.options.sourceCodeLocationInfo) {
			const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
			if (bodyElement) p._setEndLocation(bodyElement, token);
		}
	}
}
function htmlEndTagInBody(p, token) {
	if (p.openElements.hasInScope(TAG_ID.BODY)) {
		p.insertionMode = InsertionMode.AFTER_BODY;
		endTagAfterBody(p, token);
	}
}
function addressEndTagInBody(p, token) {
	const tn = token.tagID;
	if (p.openElements.hasInScope(tn)) {
		p.openElements.generateImpliedEndTags();
		p.openElements.popUntilTagNamePopped(tn);
	}
}
function formEndTagInBody(p) {
	const inTemplate = p.openElements.tmplCount > 0;
	const { formElement } = p;
	if (!inTemplate) p.formElement = null;
	if ((formElement || inTemplate) && p.openElements.hasInScope(TAG_ID.FORM)) {
		p.openElements.generateImpliedEndTags();
		if (inTemplate) p.openElements.popUntilTagNamePopped(TAG_ID.FORM);
		else if (formElement) p.openElements.remove(formElement);
	}
}
function pEndTagInBody(p) {
	if (!p.openElements.hasInButtonScope(TAG_ID.P)) p._insertFakeElement(TAG_NAMES.P, TAG_ID.P);
	p._closePElement();
}
function liEndTagInBody(p) {
	if (p.openElements.hasInListItemScope(TAG_ID.LI)) {
		p.openElements.generateImpliedEndTagsWithExclusion(TAG_ID.LI);
		p.openElements.popUntilTagNamePopped(TAG_ID.LI);
	}
}
function ddEndTagInBody(p, token) {
	const tn = token.tagID;
	if (p.openElements.hasInScope(tn)) {
		p.openElements.generateImpliedEndTagsWithExclusion(tn);
		p.openElements.popUntilTagNamePopped(tn);
	}
}
function numberedHeaderEndTagInBody(p) {
	if (p.openElements.hasNumberedHeaderInScope()) {
		p.openElements.generateImpliedEndTags();
		p.openElements.popUntilNumberedHeaderPopped();
	}
}
function appletEndTagInBody(p, token) {
	const tn = token.tagID;
	if (p.openElements.hasInScope(tn)) {
		p.openElements.generateImpliedEndTags();
		p.openElements.popUntilTagNamePopped(tn);
		p.activeFormattingElements.clearToLastMarker();
	}
}
function brEndTagInBody(p) {
	p._reconstructActiveFormattingElements();
	p._insertFakeElement(TAG_NAMES.BR, TAG_ID.BR);
	p.openElements.pop();
	p.framesetOk = false;
}
function genericEndTagInBody(p, token) {
	const tn = token.tagName;
	const tid = token.tagID;
	for (let i = p.openElements.stackTop; i > 0; i--) {
		const element = p.openElements.items[i];
		const elementId = p.openElements.tagIDs[i];
		if (tid === elementId && (tid !== TAG_ID.UNKNOWN || p.treeAdapter.getTagName(element) === tn)) {
			p.openElements.generateImpliedEndTagsWithExclusion(tid);
			if (p.openElements.stackTop >= i) p.openElements.shortenToLength(i);
			break;
		}
		if (p._isSpecialElement(element, elementId)) break;
	}
}
function endTagInBody(p, token) {
	switch (token.tagID) {
		case TAG_ID.A:
		case TAG_ID.B:
		case TAG_ID.I:
		case TAG_ID.S:
		case TAG_ID.U:
		case TAG_ID.EM:
		case TAG_ID.TT:
		case TAG_ID.BIG:
		case TAG_ID.CODE:
		case TAG_ID.FONT:
		case TAG_ID.NOBR:
		case TAG_ID.SMALL:
		case TAG_ID.STRIKE:
		case TAG_ID.STRONG:
			callAdoptionAgency(p, token);
			break;
		case TAG_ID.P:
			pEndTagInBody(p);
			break;
		case TAG_ID.DL:
		case TAG_ID.UL:
		case TAG_ID.OL:
		case TAG_ID.DIR:
		case TAG_ID.DIV:
		case TAG_ID.NAV:
		case TAG_ID.PRE:
		case TAG_ID.MAIN:
		case TAG_ID.MENU:
		case TAG_ID.ASIDE:
		case TAG_ID.CENTER:
		case TAG_ID.FIGURE:
		case TAG_ID.FOOTER:
		case TAG_ID.HEADER:
		case TAG_ID.HGROUP:
		case TAG_ID.DIALOG:
		case TAG_ID.ADDRESS:
		case TAG_ID.ARTICLE:
		case TAG_ID.DETAILS:
		case TAG_ID.SECTION:
		case TAG_ID.SUMMARY:
		case TAG_ID.LISTING:
		case TAG_ID.FIELDSET:
		case TAG_ID.BLOCKQUOTE:
		case TAG_ID.FIGCAPTION:
			addressEndTagInBody(p, token);
			break;
		case TAG_ID.LI:
			liEndTagInBody(p);
			break;
		case TAG_ID.DD:
		case TAG_ID.DT:
			ddEndTagInBody(p, token);
			break;
		case TAG_ID.H1:
		case TAG_ID.H2:
		case TAG_ID.H3:
		case TAG_ID.H4:
		case TAG_ID.H5:
		case TAG_ID.H6:
			numberedHeaderEndTagInBody(p);
			break;
		case TAG_ID.BR:
			brEndTagInBody(p);
			break;
		case TAG_ID.BODY:
			bodyEndTagInBody(p, token);
			break;
		case TAG_ID.HTML:
			htmlEndTagInBody(p, token);
			break;
		case TAG_ID.FORM:
			formEndTagInBody(p);
			break;
		case TAG_ID.APPLET:
		case TAG_ID.OBJECT:
		case TAG_ID.MARQUEE:
			appletEndTagInBody(p, token);
			break;
		case TAG_ID.TEMPLATE:
			endTagInHead(p, token);
			break;
		default: genericEndTagInBody(p, token);
	}
}
function eofInBody(p, token) {
	if (p.tmplInsertionModeStack.length > 0) eofInTemplate(p, token);
	else stopParsing(p, token);
}
function endTagInText(p, token) {
	var _a;
	if (token.tagID === TAG_ID.SCRIPT) (_a = p.scriptHandler) === null || _a === void 0 || _a.call(p, p.openElements.current);
	p.openElements.pop();
	p.insertionMode = p.originalInsertionMode;
}
function eofInText(p, token) {
	p._err(token, ERR.eofInElementThatCanContainOnlyText);
	p.openElements.pop();
	p.insertionMode = p.originalInsertionMode;
	p.onEof(token);
}
function characterInTable(p, token) {
	if (TABLE_STRUCTURE_TAGS.has(p.openElements.currentTagId)) {
		p.pendingCharacterTokens.length = 0;
		p.hasNonWhitespacePendingCharacterToken = false;
		p.originalInsertionMode = p.insertionMode;
		p.insertionMode = InsertionMode.IN_TABLE_TEXT;
		switch (token.type) {
			case TokenType.CHARACTER:
				characterInTableText(p, token);
				break;
			case TokenType.WHITESPACE_CHARACTER: whitespaceCharacterInTableText(p, token);
		}
	} else tokenInTable(p, token);
}
function captionStartTagInTable(p, token) {
	p.openElements.clearBackToTableContext();
	p.activeFormattingElements.insertMarker();
	p._insertElement(token, NS.HTML);
	p.insertionMode = InsertionMode.IN_CAPTION;
}
function colgroupStartTagInTable(p, token) {
	p.openElements.clearBackToTableContext();
	p._insertElement(token, NS.HTML);
	p.insertionMode = InsertionMode.IN_COLUMN_GROUP;
}
function colStartTagInTable(p, token) {
	p.openElements.clearBackToTableContext();
	p._insertFakeElement(TAG_NAMES.COLGROUP, TAG_ID.COLGROUP);
	p.insertionMode = InsertionMode.IN_COLUMN_GROUP;
	startTagInColumnGroup(p, token);
}
function tbodyStartTagInTable(p, token) {
	p.openElements.clearBackToTableContext();
	p._insertElement(token, NS.HTML);
	p.insertionMode = InsertionMode.IN_TABLE_BODY;
}
function tdStartTagInTable(p, token) {
	p.openElements.clearBackToTableContext();
	p._insertFakeElement(TAG_NAMES.TBODY, TAG_ID.TBODY);
	p.insertionMode = InsertionMode.IN_TABLE_BODY;
	startTagInTableBody(p, token);
}
function tableStartTagInTable(p, token) {
	if (p.openElements.hasInTableScope(TAG_ID.TABLE)) {
		p.openElements.popUntilTagNamePopped(TAG_ID.TABLE);
		p._resetInsertionMode();
		p._processStartTag(token);
	}
}
function inputStartTagInTable(p, token) {
	if (isHiddenInput(token)) p._appendElement(token, NS.HTML);
	else tokenInTable(p, token);
	token.ackSelfClosing = true;
}
function formStartTagInTable(p, token) {
	if (!p.formElement && p.openElements.tmplCount === 0) {
		p._insertElement(token, NS.HTML);
		p.formElement = p.openElements.current;
		p.openElements.pop();
	}
}
function startTagInTable(p, token) {
	switch (token.tagID) {
		case TAG_ID.TD:
		case TAG_ID.TH:
		case TAG_ID.TR:
			tdStartTagInTable(p, token);
			break;
		case TAG_ID.STYLE:
		case TAG_ID.SCRIPT:
		case TAG_ID.TEMPLATE:
			startTagInHead(p, token);
			break;
		case TAG_ID.COL:
			colStartTagInTable(p, token);
			break;
		case TAG_ID.FORM:
			formStartTagInTable(p, token);
			break;
		case TAG_ID.TABLE:
			tableStartTagInTable(p, token);
			break;
		case TAG_ID.TBODY:
		case TAG_ID.TFOOT:
		case TAG_ID.THEAD:
			tbodyStartTagInTable(p, token);
			break;
		case TAG_ID.INPUT:
			inputStartTagInTable(p, token);
			break;
		case TAG_ID.CAPTION:
			captionStartTagInTable(p, token);
			break;
		case TAG_ID.COLGROUP:
			colgroupStartTagInTable(p, token);
			break;
		default: tokenInTable(p, token);
	}
}
function endTagInTable(p, token) {
	switch (token.tagID) {
		case TAG_ID.TABLE:
			if (p.openElements.hasInTableScope(TAG_ID.TABLE)) {
				p.openElements.popUntilTagNamePopped(TAG_ID.TABLE);
				p._resetInsertionMode();
			}
			break;
		case TAG_ID.TEMPLATE:
			endTagInHead(p, token);
			break;
		case TAG_ID.BODY:
		case TAG_ID.CAPTION:
		case TAG_ID.COL:
		case TAG_ID.COLGROUP:
		case TAG_ID.HTML:
		case TAG_ID.TBODY:
		case TAG_ID.TD:
		case TAG_ID.TFOOT:
		case TAG_ID.TH:
		case TAG_ID.THEAD:
		case TAG_ID.TR: break;
		default: tokenInTable(p, token);
	}
}
function tokenInTable(p, token) {
	const savedFosterParentingState = p.fosterParentingEnabled;
	p.fosterParentingEnabled = true;
	modeInBody(p, token);
	p.fosterParentingEnabled = savedFosterParentingState;
}
function whitespaceCharacterInTableText(p, token) {
	p.pendingCharacterTokens.push(token);
}
function characterInTableText(p, token) {
	p.pendingCharacterTokens.push(token);
	p.hasNonWhitespacePendingCharacterToken = true;
}
function tokenInTableText(p, token) {
	let i = 0;
	if (p.hasNonWhitespacePendingCharacterToken) for (; i < p.pendingCharacterTokens.length; i++) tokenInTable(p, p.pendingCharacterTokens[i]);
	else for (; i < p.pendingCharacterTokens.length; i++) p._insertCharacters(p.pendingCharacterTokens[i]);
	p.insertionMode = p.originalInsertionMode;
	p._processToken(token);
}
var TABLE_VOID_ELEMENTS = /* @__PURE__ */ new Set([
	TAG_ID.CAPTION,
	TAG_ID.COL,
	TAG_ID.COLGROUP,
	TAG_ID.TBODY,
	TAG_ID.TD,
	TAG_ID.TFOOT,
	TAG_ID.TH,
	TAG_ID.THEAD,
	TAG_ID.TR
]);
function startTagInCaption(p, token) {
	const tn = token.tagID;
	if (TABLE_VOID_ELEMENTS.has(tn)) {
		if (p.openElements.hasInTableScope(TAG_ID.CAPTION)) {
			p.openElements.generateImpliedEndTags();
			p.openElements.popUntilTagNamePopped(TAG_ID.CAPTION);
			p.activeFormattingElements.clearToLastMarker();
			p.insertionMode = InsertionMode.IN_TABLE;
			startTagInTable(p, token);
		}
	} else startTagInBody(p, token);
}
function endTagInCaption(p, token) {
	const tn = token.tagID;
	switch (tn) {
		case TAG_ID.CAPTION:
		case TAG_ID.TABLE:
			if (p.openElements.hasInTableScope(TAG_ID.CAPTION)) {
				p.openElements.generateImpliedEndTags();
				p.openElements.popUntilTagNamePopped(TAG_ID.CAPTION);
				p.activeFormattingElements.clearToLastMarker();
				p.insertionMode = InsertionMode.IN_TABLE;
				if (tn === TAG_ID.TABLE) endTagInTable(p, token);
			}
			break;
		case TAG_ID.BODY:
		case TAG_ID.COL:
		case TAG_ID.COLGROUP:
		case TAG_ID.HTML:
		case TAG_ID.TBODY:
		case TAG_ID.TD:
		case TAG_ID.TFOOT:
		case TAG_ID.TH:
		case TAG_ID.THEAD:
		case TAG_ID.TR: break;
		default: endTagInBody(p, token);
	}
}
function startTagInColumnGroup(p, token) {
	switch (token.tagID) {
		case TAG_ID.HTML:
			startTagInBody(p, token);
			break;
		case TAG_ID.COL:
			p._appendElement(token, NS.HTML);
			token.ackSelfClosing = true;
			break;
		case TAG_ID.TEMPLATE:
			startTagInHead(p, token);
			break;
		default: tokenInColumnGroup(p, token);
	}
}
function endTagInColumnGroup(p, token) {
	switch (token.tagID) {
		case TAG_ID.COLGROUP:
			if (p.openElements.currentTagId === TAG_ID.COLGROUP) {
				p.openElements.pop();
				p.insertionMode = InsertionMode.IN_TABLE;
			}
			break;
		case TAG_ID.TEMPLATE:
			endTagInHead(p, token);
			break;
		case TAG_ID.COL: break;
		default: tokenInColumnGroup(p, token);
	}
}
function tokenInColumnGroup(p, token) {
	if (p.openElements.currentTagId === TAG_ID.COLGROUP) {
		p.openElements.pop();
		p.insertionMode = InsertionMode.IN_TABLE;
		p._processToken(token);
	}
}
function startTagInTableBody(p, token) {
	switch (token.tagID) {
		case TAG_ID.TR:
			p.openElements.clearBackToTableBodyContext();
			p._insertElement(token, NS.HTML);
			p.insertionMode = InsertionMode.IN_ROW;
			break;
		case TAG_ID.TH:
		case TAG_ID.TD:
			p.openElements.clearBackToTableBodyContext();
			p._insertFakeElement(TAG_NAMES.TR, TAG_ID.TR);
			p.insertionMode = InsertionMode.IN_ROW;
			startTagInRow(p, token);
			break;
		case TAG_ID.CAPTION:
		case TAG_ID.COL:
		case TAG_ID.COLGROUP:
		case TAG_ID.TBODY:
		case TAG_ID.TFOOT:
		case TAG_ID.THEAD:
			if (p.openElements.hasTableBodyContextInTableScope()) {
				p.openElements.clearBackToTableBodyContext();
				p.openElements.pop();
				p.insertionMode = InsertionMode.IN_TABLE;
				startTagInTable(p, token);
			}
			break;
		default: startTagInTable(p, token);
	}
}
function endTagInTableBody(p, token) {
	const tn = token.tagID;
	switch (token.tagID) {
		case TAG_ID.TBODY:
		case TAG_ID.TFOOT:
		case TAG_ID.THEAD:
			if (p.openElements.hasInTableScope(tn)) {
				p.openElements.clearBackToTableBodyContext();
				p.openElements.pop();
				p.insertionMode = InsertionMode.IN_TABLE;
			}
			break;
		case TAG_ID.TABLE:
			if (p.openElements.hasTableBodyContextInTableScope()) {
				p.openElements.clearBackToTableBodyContext();
				p.openElements.pop();
				p.insertionMode = InsertionMode.IN_TABLE;
				endTagInTable(p, token);
			}
			break;
		case TAG_ID.BODY:
		case TAG_ID.CAPTION:
		case TAG_ID.COL:
		case TAG_ID.COLGROUP:
		case TAG_ID.HTML:
		case TAG_ID.TD:
		case TAG_ID.TH:
		case TAG_ID.TR: break;
		default: endTagInTable(p, token);
	}
}
function startTagInRow(p, token) {
	switch (token.tagID) {
		case TAG_ID.TH:
		case TAG_ID.TD:
			p.openElements.clearBackToTableRowContext();
			p._insertElement(token, NS.HTML);
			p.insertionMode = InsertionMode.IN_CELL;
			p.activeFormattingElements.insertMarker();
			break;
		case TAG_ID.CAPTION:
		case TAG_ID.COL:
		case TAG_ID.COLGROUP:
		case TAG_ID.TBODY:
		case TAG_ID.TFOOT:
		case TAG_ID.THEAD:
		case TAG_ID.TR:
			if (p.openElements.hasInTableScope(TAG_ID.TR)) {
				p.openElements.clearBackToTableRowContext();
				p.openElements.pop();
				p.insertionMode = InsertionMode.IN_TABLE_BODY;
				startTagInTableBody(p, token);
			}
			break;
		default: startTagInTable(p, token);
	}
}
function endTagInRow(p, token) {
	switch (token.tagID) {
		case TAG_ID.TR:
			if (p.openElements.hasInTableScope(TAG_ID.TR)) {
				p.openElements.clearBackToTableRowContext();
				p.openElements.pop();
				p.insertionMode = InsertionMode.IN_TABLE_BODY;
			}
			break;
		case TAG_ID.TABLE:
			if (p.openElements.hasInTableScope(TAG_ID.TR)) {
				p.openElements.clearBackToTableRowContext();
				p.openElements.pop();
				p.insertionMode = InsertionMode.IN_TABLE_BODY;
				endTagInTableBody(p, token);
			}
			break;
		case TAG_ID.TBODY:
		case TAG_ID.TFOOT:
		case TAG_ID.THEAD:
			if (p.openElements.hasInTableScope(token.tagID) || p.openElements.hasInTableScope(TAG_ID.TR)) {
				p.openElements.clearBackToTableRowContext();
				p.openElements.pop();
				p.insertionMode = InsertionMode.IN_TABLE_BODY;
				endTagInTableBody(p, token);
			}
			break;
		case TAG_ID.BODY:
		case TAG_ID.CAPTION:
		case TAG_ID.COL:
		case TAG_ID.COLGROUP:
		case TAG_ID.HTML:
		case TAG_ID.TD:
		case TAG_ID.TH: break;
		default: endTagInTable(p, token);
	}
}
function startTagInCell(p, token) {
	const tn = token.tagID;
	if (TABLE_VOID_ELEMENTS.has(tn)) {
		if (p.openElements.hasInTableScope(TAG_ID.TD) || p.openElements.hasInTableScope(TAG_ID.TH)) {
			p._closeTableCell();
			startTagInRow(p, token);
		}
	} else startTagInBody(p, token);
}
function endTagInCell(p, token) {
	const tn = token.tagID;
	switch (tn) {
		case TAG_ID.TD:
		case TAG_ID.TH:
			if (p.openElements.hasInTableScope(tn)) {
				p.openElements.generateImpliedEndTags();
				p.openElements.popUntilTagNamePopped(tn);
				p.activeFormattingElements.clearToLastMarker();
				p.insertionMode = InsertionMode.IN_ROW;
			}
			break;
		case TAG_ID.TABLE:
		case TAG_ID.TBODY:
		case TAG_ID.TFOOT:
		case TAG_ID.THEAD:
		case TAG_ID.TR:
			if (p.openElements.hasInTableScope(tn)) {
				p._closeTableCell();
				endTagInRow(p, token);
			}
			break;
		case TAG_ID.BODY:
		case TAG_ID.CAPTION:
		case TAG_ID.COL:
		case TAG_ID.COLGROUP:
		case TAG_ID.HTML: break;
		default: endTagInBody(p, token);
	}
}
function startTagInSelect(p, token) {
	switch (token.tagID) {
		case TAG_ID.HTML:
			startTagInBody(p, token);
			break;
		case TAG_ID.OPTION:
			if (p.openElements.currentTagId === TAG_ID.OPTION) p.openElements.pop();
			p._insertElement(token, NS.HTML);
			break;
		case TAG_ID.OPTGROUP:
			if (p.openElements.currentTagId === TAG_ID.OPTION) p.openElements.pop();
			if (p.openElements.currentTagId === TAG_ID.OPTGROUP) p.openElements.pop();
			p._insertElement(token, NS.HTML);
			break;
		case TAG_ID.INPUT:
		case TAG_ID.KEYGEN:
		case TAG_ID.TEXTAREA:
		case TAG_ID.SELECT:
			if (p.openElements.hasInSelectScope(TAG_ID.SELECT)) {
				p.openElements.popUntilTagNamePopped(TAG_ID.SELECT);
				p._resetInsertionMode();
				if (token.tagID !== TAG_ID.SELECT) p._processStartTag(token);
			}
			break;
		case TAG_ID.SCRIPT:
		case TAG_ID.TEMPLATE: startTagInHead(p, token);
	}
}
function endTagInSelect(p, token) {
	switch (token.tagID) {
		case TAG_ID.OPTGROUP:
			if (p.openElements.stackTop > 0 && p.openElements.currentTagId === TAG_ID.OPTION && p.openElements.tagIDs[p.openElements.stackTop - 1] === TAG_ID.OPTGROUP) p.openElements.pop();
			if (p.openElements.currentTagId === TAG_ID.OPTGROUP) p.openElements.pop();
			break;
		case TAG_ID.OPTION:
			if (p.openElements.currentTagId === TAG_ID.OPTION) p.openElements.pop();
			break;
		case TAG_ID.SELECT:
			if (p.openElements.hasInSelectScope(TAG_ID.SELECT)) {
				p.openElements.popUntilTagNamePopped(TAG_ID.SELECT);
				p._resetInsertionMode();
			}
			break;
		case TAG_ID.TEMPLATE: endTagInHead(p, token);
	}
}
function startTagInSelectInTable(p, token) {
	const tn = token.tagID;
	if (tn === TAG_ID.CAPTION || tn === TAG_ID.TABLE || tn === TAG_ID.TBODY || tn === TAG_ID.TFOOT || tn === TAG_ID.THEAD || tn === TAG_ID.TR || tn === TAG_ID.TD || tn === TAG_ID.TH) {
		p.openElements.popUntilTagNamePopped(TAG_ID.SELECT);
		p._resetInsertionMode();
		p._processStartTag(token);
	} else startTagInSelect(p, token);
}
function endTagInSelectInTable(p, token) {
	const tn = token.tagID;
	if (tn === TAG_ID.CAPTION || tn === TAG_ID.TABLE || tn === TAG_ID.TBODY || tn === TAG_ID.TFOOT || tn === TAG_ID.THEAD || tn === TAG_ID.TR || tn === TAG_ID.TD || tn === TAG_ID.TH) {
		if (p.openElements.hasInTableScope(tn)) {
			p.openElements.popUntilTagNamePopped(TAG_ID.SELECT);
			p._resetInsertionMode();
			p.onEndTag(token);
		}
	} else endTagInSelect(p, token);
}
function startTagInTemplate(p, token) {
	switch (token.tagID) {
		case TAG_ID.BASE:
		case TAG_ID.BASEFONT:
		case TAG_ID.BGSOUND:
		case TAG_ID.LINK:
		case TAG_ID.META:
		case TAG_ID.NOFRAMES:
		case TAG_ID.SCRIPT:
		case TAG_ID.STYLE:
		case TAG_ID.TEMPLATE:
		case TAG_ID.TITLE:
			startTagInHead(p, token);
			break;
		case TAG_ID.CAPTION:
		case TAG_ID.COLGROUP:
		case TAG_ID.TBODY:
		case TAG_ID.TFOOT:
		case TAG_ID.THEAD:
			p.tmplInsertionModeStack[0] = InsertionMode.IN_TABLE;
			p.insertionMode = InsertionMode.IN_TABLE;
			startTagInTable(p, token);
			break;
		case TAG_ID.COL:
			p.tmplInsertionModeStack[0] = InsertionMode.IN_COLUMN_GROUP;
			p.insertionMode = InsertionMode.IN_COLUMN_GROUP;
			startTagInColumnGroup(p, token);
			break;
		case TAG_ID.TR:
			p.tmplInsertionModeStack[0] = InsertionMode.IN_TABLE_BODY;
			p.insertionMode = InsertionMode.IN_TABLE_BODY;
			startTagInTableBody(p, token);
			break;
		case TAG_ID.TD:
		case TAG_ID.TH:
			p.tmplInsertionModeStack[0] = InsertionMode.IN_ROW;
			p.insertionMode = InsertionMode.IN_ROW;
			startTagInRow(p, token);
			break;
		default:
			p.tmplInsertionModeStack[0] = InsertionMode.IN_BODY;
			p.insertionMode = InsertionMode.IN_BODY;
			startTagInBody(p, token);
	}
}
function endTagInTemplate(p, token) {
	if (token.tagID === TAG_ID.TEMPLATE) endTagInHead(p, token);
}
function eofInTemplate(p, token) {
	if (p.openElements.tmplCount > 0) {
		p.openElements.popUntilTagNamePopped(TAG_ID.TEMPLATE);
		p.activeFormattingElements.clearToLastMarker();
		p.tmplInsertionModeStack.shift();
		p._resetInsertionMode();
		p.onEof(token);
	} else stopParsing(p, token);
}
function startTagAfterBody(p, token) {
	if (token.tagID === TAG_ID.HTML) startTagInBody(p, token);
	else tokenAfterBody(p, token);
}
function endTagAfterBody(p, token) {
	var _a;
	if (token.tagID === TAG_ID.HTML) {
		if (!p.fragmentContext) p.insertionMode = InsertionMode.AFTER_AFTER_BODY;
		if (p.options.sourceCodeLocationInfo && p.openElements.tagIDs[0] === TAG_ID.HTML) {
			p._setEndLocation(p.openElements.items[0], token);
			const bodyElement = p.openElements.items[1];
			if (bodyElement && !((_a = p.treeAdapter.getNodeSourceCodeLocation(bodyElement)) === null || _a === void 0 ? void 0 : _a.endTag)) p._setEndLocation(bodyElement, token);
		}
	} else tokenAfterBody(p, token);
}
function tokenAfterBody(p, token) {
	p.insertionMode = InsertionMode.IN_BODY;
	modeInBody(p, token);
}
function startTagInFrameset(p, token) {
	switch (token.tagID) {
		case TAG_ID.HTML:
			startTagInBody(p, token);
			break;
		case TAG_ID.FRAMESET:
			p._insertElement(token, NS.HTML);
			break;
		case TAG_ID.FRAME:
			p._appendElement(token, NS.HTML);
			token.ackSelfClosing = true;
			break;
		case TAG_ID.NOFRAMES: startTagInHead(p, token);
	}
}
function endTagInFrameset(p, token) {
	if (token.tagID === TAG_ID.FRAMESET && !p.openElements.isRootHtmlElementCurrent()) {
		p.openElements.pop();
		if (!p.fragmentContext && p.openElements.currentTagId !== TAG_ID.FRAMESET) p.insertionMode = InsertionMode.AFTER_FRAMESET;
	}
}
function startTagAfterFrameset(p, token) {
	switch (token.tagID) {
		case TAG_ID.HTML:
			startTagInBody(p, token);
			break;
		case TAG_ID.NOFRAMES: startTagInHead(p, token);
	}
}
function endTagAfterFrameset(p, token) {
	if (token.tagID === TAG_ID.HTML) p.insertionMode = InsertionMode.AFTER_AFTER_FRAMESET;
}
function startTagAfterAfterBody(p, token) {
	if (token.tagID === TAG_ID.HTML) startTagInBody(p, token);
	else tokenAfterAfterBody(p, token);
}
function tokenAfterAfterBody(p, token) {
	p.insertionMode = InsertionMode.IN_BODY;
	modeInBody(p, token);
}
function startTagAfterAfterFrameset(p, token) {
	switch (token.tagID) {
		case TAG_ID.HTML:
			startTagInBody(p, token);
			break;
		case TAG_ID.NOFRAMES: startTagInHead(p, token);
	}
}
function nullCharacterInForeignContent(p, token) {
	token.chars = "�";
	p._insertCharacters(token);
}
function characterInForeignContent(p, token) {
	p._insertCharacters(token);
	p.framesetOk = false;
}
function popUntilHtmlOrIntegrationPoint(p) {
	while (p.treeAdapter.getNamespaceURI(p.openElements.current) !== NS.HTML && !p._isIntegrationPoint(p.openElements.currentTagId, p.openElements.current)) p.openElements.pop();
}
function startTagInForeignContent(p, token) {
	if (causesExit(token)) {
		popUntilHtmlOrIntegrationPoint(p);
		p._startTagOutsideForeignContent(token);
	} else {
		const current = p._getAdjustedCurrentElement();
		const currentNs = p.treeAdapter.getNamespaceURI(current);
		if (currentNs === NS.MATHML) adjustTokenMathMLAttrs(token);
		else if (currentNs === NS.SVG) {
			adjustTokenSVGTagName(token);
			adjustTokenSVGAttrs(token);
		}
		adjustTokenXMLAttrs(token);
		if (token.selfClosing) p._appendElement(token, currentNs);
		else p._insertElement(token, currentNs);
		token.ackSelfClosing = true;
	}
}
function endTagInForeignContent(p, token) {
	if (token.tagID === TAG_ID.P || token.tagID === TAG_ID.BR) {
		popUntilHtmlOrIntegrationPoint(p);
		p._endTagOutsideForeignContent(token);
		return;
	}
	for (let i = p.openElements.stackTop; i > 0; i--) {
		const element = p.openElements.items[i];
		if (p.treeAdapter.getNamespaceURI(element) === NS.HTML) {
			p._endTagOutsideForeignContent(token);
			break;
		}
		const tagName = p.treeAdapter.getTagName(element);
		if (tagName.toLowerCase() === token.tagName) {
			token.tagName = tagName;
			p.openElements.shortenToLength(i);
			break;
		}
	}
}
TAG_NAMES.AREA, TAG_NAMES.BASE, TAG_NAMES.BASEFONT, TAG_NAMES.BGSOUND, TAG_NAMES.BR, TAG_NAMES.COL, TAG_NAMES.EMBED, TAG_NAMES.FRAME, TAG_NAMES.HR, TAG_NAMES.IMG, TAG_NAMES.INPUT, TAG_NAMES.KEYGEN, TAG_NAMES.LINK, TAG_NAMES.META, TAG_NAMES.PARAM, TAG_NAMES.SOURCE, TAG_NAMES.TRACK, TAG_NAMES.WBR;
//#endregion
//#region node_modules/.pnpm/unist-util-position@5.0.0/node_modules/unist-util-position/lib/index.js
/**
* @typedef {import('unist').Node} Node
* @typedef {import('unist').Point} Point
* @typedef {import('unist').Position} Position
*/
/**
* @typedef NodeLike
* @property {string} type
* @property {PositionLike | null | undefined} [position]
*
* @typedef PositionLike
* @property {PointLike | null | undefined} [start]
* @property {PointLike | null | undefined} [end]
*
* @typedef PointLike
* @property {number | null | undefined} [line]
* @property {number | null | undefined} [column]
* @property {number | null | undefined} [offset]
*/
/**
* Get the ending point of `node`.
*
* @param node
*   Node.
* @returns
*   Point.
*/
var pointEnd = point("end");
/**
* Get the starting point of `node`.
*
* @param node
*   Node.
* @returns
*   Point.
*/
var pointStart = point("start");
/**
* Get the positional info of `node`.
*
* @param {'end' | 'start'} type
*   Side.
* @returns
*   Getter.
*/
function point(type) {
	return point;
	/**
	* Get the point info of `node` at a bound side.
	*
	* @param {Node | NodeLike | null | undefined} [node]
	* @returns {Point | undefined}
	*/
	function point(node) {
		const point = node && node.position && node.position[type] || {};
		if (typeof point.line === "number" && point.line > 0 && typeof point.column === "number" && point.column > 0) return {
			line: point.line,
			column: point.column,
			offset: typeof point.offset === "number" && point.offset > -1 ? point.offset : void 0
		};
	}
}
//#endregion
//#region node_modules/.pnpm/hast-util-raw@9.1.0/node_modules/hast-util-raw/lib/index.js
/**
* @import {Options} from 'hast-util-raw'
* @import {Comment, Doctype, Element, Nodes, RootContent, Root, Text} from 'hast'
* @import {Raw} from 'mdast-util-to-hast'
* @import {DefaultTreeAdapterMap, ParserOptions} from 'parse5'
* @import {Point} from 'unist'
*/
/**
* @typedef State
*   Info passed around about the current state.
* @property {(node: Nodes) => undefined} handle
*   Add a hast node to the parser.
* @property {Options} options
*   User configuration.
* @property {Parser<DefaultTreeAdapterMap>} parser
*   Current parser.
* @property {boolean} stitches
*   Whether there are stitches.
*/
/**
* @typedef Stitch
*   Custom comment-like value we pass through parse5, which contains a
*   replacement node that we’ll swap back in afterwards.
* @property {'comment'} type
*   Node type.
* @property {{stitch: Nodes}} value
*   Replacement value.
*/
var gfmTagfilterExpression = /<(\/?)(iframe|noembed|noframes|plaintext|script|style|textarea|title|xmp)(?=[\t\n\f\r />])/gi;
var knownMdxNames = /* @__PURE__ */ new Set([
	"mdxFlowExpression",
	"mdxJsxFlowElement",
	"mdxJsxTextElement",
	"mdxTextExpression",
	"mdxjsEsm"
]);
/** @type {ParserOptions<DefaultTreeAdapterMap>} */
var parseOptions = {
	sourceCodeLocationInfo: true,
	scriptingEnabled: false
};
/**
* Pass a hast tree through an HTML parser, which will fix nesting, and turn
* raw nodes into actual nodes.
*
* @param {Nodes} tree
*   Original hast tree to transform.
* @param {Options | null | undefined} [options]
*   Configuration (optional).
* @returns {Nodes}
*   Parsed again tree.
*/
function raw(tree, options) {
	const document = documentMode(tree);
	/** @type {(node: Nodes, state: State) => undefined} */
	const one = zwitch("type", {
		handlers: {
			root,
			element,
			text,
			comment,
			doctype,
			raw: handleRaw
		},
		unknown
	});
	/** @type {State} */
	const state = {
		parser: document ? new Parser(parseOptions) : Parser.getFragmentParser(void 0, parseOptions),
		handle(node) {
			one(node, state);
		},
		stitches: false,
		options: options || {}
	};
	one(tree, state);
	resetTokenizer(state, pointStart());
	const result = fromParse5(document ? state.parser.document : state.parser.getFragment(), { file: state.options.file });
	if (state.stitches) visit(result, "comment", function(node, index, parent) {
		const stitch = node;
		if (stitch.value.stitch && parent && index !== void 0) {
			/** @type {Array<RootContent>} */
			const siblings = parent.children;
			siblings[index] = stitch.value.stitch;
			return index;
		}
	});
	if (result.type === "root" && result.children.length === 1 && result.children[0].type === tree.type) return result.children[0];
	return result;
}
/**
* Transform all nodes
*
* @param {Array<RootContent>} nodes
*   hast content.
* @param {State} state
*   Info passed around about the current state.
* @returns {undefined}
*   Nothing.
*/
function all(nodes, state) {
	let index = -1;
	/* istanbul ignore else - invalid nodes, see rehypejs/rehype-raw#7. */
	if (nodes) while (++index < nodes.length) state.handle(nodes[index]);
}
/**
* Transform a root.
*
* @param {Root} node
*   hast root node.
* @param {State} state
*   Info passed around about the current state.
* @returns {undefined}
*   Nothing.
*/
function root(node, state) {
	all(node.children, state);
}
/**
* Transform an element.
*
* @param {Element} node
*   hast element node.
* @param {State} state
*   Info passed around about the current state.
* @returns {undefined}
*   Nothing.
*/
function element(node, state) {
	startTag(node, state);
	all(node.children, state);
	endTag(node, state);
}
/**
* Transform a text.
*
* @param {Text} node
*   hast text node.
* @param {State} state
*   Info passed around about the current state.
* @returns {undefined}
*   Nothing.
*/
function text(node, state) {
	if (state.parser.tokenizer.state > 4) state.parser.tokenizer.state = 0;
	/** @type {Token.CharacterToken} */
	const token = {
		type: TokenType.CHARACTER,
		chars: node.value,
		location: createParse5Location(node)
	};
	resetTokenizer(state, pointStart(node));
	state.parser.currentToken = token;
	state.parser._processToken(state.parser.currentToken);
}
/**
* Transform a doctype.
*
* @param {Doctype} node
*   hast doctype node.
* @param {State} state
*   Info passed around about the current state.
* @returns {undefined}
*   Nothing.
*/
function doctype(node, state) {
	/** @type {Token.DoctypeToken} */
	const token = {
		type: TokenType.DOCTYPE,
		name: "html",
		forceQuirks: false,
		publicId: "",
		systemId: "",
		location: createParse5Location(node)
	};
	resetTokenizer(state, pointStart(node));
	state.parser.currentToken = token;
	state.parser._processToken(state.parser.currentToken);
}
/**
* Transform a stitch.
*
* @param {Nodes} node
*   unknown node.
* @param {State} state
*   Info passed around about the current state.
* @returns {undefined}
*   Nothing.
*/
function stitch(node, state) {
	state.stitches = true;
	/** @type {Nodes} */
	const clone = cloneWithoutChildren(node);
	if ("children" in node && "children" in clone) clone.children = raw({
		type: "root",
		children: node.children
	}, state.options).children;
	comment({
		type: "comment",
		value: { stitch: clone }
	}, state);
}
/**
* Transform a comment (or stitch).
*
* @param {Comment | Stitch} node
*   hast comment node.
* @param {State} state
*   Info passed around about the current state.
* @returns {undefined}
*   Nothing.
*/
function comment(node, state) {
	/** @type {string} */
	const data = node.value;
	/** @type {Token.CommentToken} */
	const token = {
		type: TokenType.COMMENT,
		data,
		location: createParse5Location(node)
	};
	resetTokenizer(state, pointStart(node));
	state.parser.currentToken = token;
	state.parser._processToken(state.parser.currentToken);
}
/**
* Transform a raw node.
*
* @param {Raw} node
*   hast raw node.
* @param {State} state
*   Info passed around about the current state.
* @returns {undefined}
*   Nothing.
*/
function handleRaw(node, state) {
	state.parser.tokenizer.preprocessor.html = "";
	state.parser.tokenizer.preprocessor.pos = -1;
	state.parser.tokenizer.preprocessor.lastGapPos = -2;
	state.parser.tokenizer.preprocessor.gapStack = [];
	state.parser.tokenizer.preprocessor.skipNextNewLine = false;
	state.parser.tokenizer.preprocessor.lastChunkWritten = false;
	state.parser.tokenizer.preprocessor.endOfChunkHit = false;
	state.parser.tokenizer.preprocessor.isEol = false;
	setPoint(state, pointStart(node));
	state.parser.tokenizer.write(state.options.tagfilter ? node.value.replace(gfmTagfilterExpression, "&lt;$1$2") : node.value, false);
	state.parser.tokenizer._runParsingLoop();
	/* c8 ignore next 12 -- removed in <https://github.com/inikulin/parse5/pull/897> */
	if (state.parser.tokenizer.state === 72 || state.parser.tokenizer.state === 78) {
		state.parser.tokenizer.preprocessor.lastChunkWritten = true;
		/** @type {number} */
		const cp = state.parser.tokenizer._consume();
		state.parser.tokenizer._callState(cp);
	}
}
/**
* Crash on an unknown node.
*
* @param {unknown} node_
*   unknown node.
* @param {State} state
*   Info passed around about the current state.
* @returns {undefined}
*   Never.
*/
function unknown(node_, state) {
	const node = node_;
	if (state.options.passThrough && state.options.passThrough.includes(node.type)) stitch(node, state);
	else {
		let extra = "";
		if (knownMdxNames.has(node.type)) extra = ". It looks like you are using MDX nodes with `hast-util-raw` (or `rehype-raw`). If you use this because you are using remark or rehype plugins that inject `'html'` nodes, then please raise an issue with that plugin, as its a bad and slow idea. If you use this because you are using markdown syntax, then you have to configure this utility (or plugin) to pass through these nodes (see `passThrough` in docs), but you can also migrate to use the MDX syntax";
		throw new Error("Cannot compile `" + node.type + "` node" + extra);
	}
}
/**
* Reset the tokenizer of a parser.
*
* @param {State} state
*   Info passed around about the current state.
* @param {Point | undefined} point
*   Point.
* @returns {undefined}
*   Nothing.
*/
function resetTokenizer(state, point) {
	setPoint(state, point);
	/** @type {Token.CharacterToken} */
	const token = state.parser.tokenizer.currentCharacterToken;
	if (token && token.location) {
		token.location.endLine = state.parser.tokenizer.preprocessor.line;
		token.location.endCol = state.parser.tokenizer.preprocessor.col + 1;
		token.location.endOffset = state.parser.tokenizer.preprocessor.offset + 1;
		state.parser.currentToken = token;
		state.parser._processToken(state.parser.currentToken);
	}
	state.parser.tokenizer.paused = false;
	state.parser.tokenizer.inLoop = false;
	state.parser.tokenizer.active = false;
	state.parser.tokenizer.returnState = TokenizerMode.DATA;
	state.parser.tokenizer.charRefCode = -1;
	state.parser.tokenizer.consumedAfterSnapshot = -1;
	state.parser.tokenizer.currentLocation = null;
	state.parser.tokenizer.currentCharacterToken = null;
	state.parser.tokenizer.currentToken = null;
	state.parser.tokenizer.currentAttr = {
		name: "",
		value: ""
	};
}
/**
* Set current location.
*
* @param {State} state
*   Info passed around about the current state.
* @param {Point | undefined} point
*   Point.
* @returns {undefined}
*   Nothing.
*/
function setPoint(state, point) {
	if (point && point.offset !== void 0) {
		/** @type {Token.Location} */
		const location = {
			startLine: point.line,
			startCol: point.column,
			startOffset: point.offset,
			endLine: -1,
			endCol: -1,
			endOffset: -1
		};
		state.parser.tokenizer.preprocessor.lineStartPos = -point.column + 1;
		state.parser.tokenizer.preprocessor.droppedBufferSize = point.offset;
		state.parser.tokenizer.preprocessor.line = point.line;
		state.parser.tokenizer.currentLocation = location;
	}
}
/**
* Emit a start tag.
*
* @param {Element} node
*   Element.
* @param {State} state
*   Info passed around about the current state.
* @returns {undefined}
*   Nothing.
*/
function startTag(node, state) {
	const tagName = node.tagName.toLowerCase();
	if (state.parser.tokenizer.state === TokenizerMode.PLAINTEXT) return;
	resetTokenizer(state, pointStart(node));
	const current = state.parser.openElements.current;
	let ns = "namespaceURI" in current ? current.namespaceURI : webNamespaces.html;
	if (ns === webNamespaces.html && tagName === "svg") ns = webNamespaces.svg;
	const result = toParse5({
		...node,
		children: []
	}, { space: ns === webNamespaces.svg ? "svg" : "html" });
	/** @type {Token.TagToken} */
	const tag = {
		type: TokenType.START_TAG,
		tagName,
		tagID: getTagID(tagName),
		selfClosing: false,
		ackSelfClosing: false,
		/* c8 ignore next */
		attrs: "attrs" in result ? result.attrs : [],
		location: createParse5Location(node)
	};
	state.parser.currentToken = tag;
	state.parser._processToken(state.parser.currentToken);
	state.parser.tokenizer.lastStartTagName = tagName;
}
/**
* Emit an end tag.
*
* @param {Element} node
*   Element.
* @param {State} state
*   Info passed around about the current state.
* @returns {undefined}
*   Nothing.
*/
function endTag(node, state) {
	const tagName = node.tagName.toLowerCase();
	if (!state.parser.tokenizer.inForeignNode && htmlVoidElements.includes(tagName)) return;
	if (state.parser.tokenizer.state === TokenizerMode.PLAINTEXT) return;
	resetTokenizer(state, pointEnd(node));
	/** @type {Token.TagToken} */
	const tag = {
		type: TokenType.END_TAG,
		tagName,
		tagID: getTagID(tagName),
		selfClosing: false,
		ackSelfClosing: false,
		attrs: [],
		location: createParse5Location(node)
	};
	state.parser.currentToken = tag;
	state.parser._processToken(state.parser.currentToken);
	if (tagName === state.parser.tokenizer.lastStartTagName && (state.parser.tokenizer.state === TokenizerMode.RCDATA || state.parser.tokenizer.state === TokenizerMode.RAWTEXT || state.parser.tokenizer.state === TokenizerMode.SCRIPT_DATA)) state.parser.tokenizer.state = TokenizerMode.DATA;
}
/**
* Check if `node` represents a whole document or a fragment.
*
* @param {Nodes} node
*   hast node.
* @returns {boolean}
*   Whether this represents a whole document or a fragment.
*/
function documentMode(node) {
	const head = node.type === "root" ? node.children[0] : node;
	return Boolean(head && (head.type === "doctype" || head.type === "element" && head.tagName.toLowerCase() === "html"));
}
/**
* Get a `parse5` location from a node.
*
* @param {Nodes | Stitch} node
*   hast node.
* @returns {Token.Location}
*   `parse5` location.
*/
function createParse5Location(node) {
	const start = pointStart(node) || {
		line: void 0,
		column: void 0,
		offset: void 0
	};
	const end = pointEnd(node) || {
		line: void 0,
		column: void 0,
		offset: void 0
	};
	return {
		startLine: start.line,
		startCol: start.column,
		startOffset: start.offset,
		endLine: end.line,
		endCol: end.column,
		endOffset: end.offset
	};
}
/**
* @template {Nodes} NodeType
*   Node type.
* @param {NodeType} node
*   Node to clone.
* @returns {NodeType}
*   Cloned node, without children.
*/
function cloneWithoutChildren(node) {
	return "children" in node ? esm_default({
		...node,
		children: []
	}) : esm_default(node);
}
//#endregion
//#region node_modules/.pnpm/rehype-raw@7.0.0/node_modules/rehype-raw/lib/index.js
/**
* @typedef {import('hast').Root} Root
* @typedef {import('hast-util-raw').Options} RawOptions
* @typedef {import('vfile').VFile} VFile
*/
/**
* @typedef {Omit<RawOptions, 'file'>} Options
*   Configuration.
*/
/**
* Parse the tree (and raw nodes) again, keeping positional info okay.
*
* @param {Options | null | undefined}  [options]
*   Configuration (optional).
* @returns
*   Transform.
*/
function rehypeRaw(options) {
	/**
	* @param {Root} tree
	*   Tree.
	* @param {VFile} file
	*   File.
	* @returns {Root}
	*   New tree.
	*/
	return function(tree, file) {
		return raw(tree, {
			...options,
			file
		});
	};
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/components/dialog/search.js
var RootContext = createContext(null);
var ListContext = createContext(null);
var TagsListContext = createContext(null);
var PreContext = createContext(false);
var mdRenderer = createMarkdownRenderer({
	remarkRehypeOptions: { allowDangerousHtml: true },
	rehypePlugins: [rehypeRaw, rehypeCustomElements]
});
var mdComponents = {
	mark(props) {
		return /* @__PURE__ */ jsx("span", {
			...props,
			className: "text-fd-primary underline"
		});
	},
	a: "span",
	p(props) {
		return /* @__PURE__ */ jsx("p", {
			...props,
			className: "min-w-0"
		});
	},
	strong(props) {
		return /* @__PURE__ */ jsx("strong", {
			...props,
			className: "text-fd-accent-foreground font-medium"
		});
	},
	code(props) {
		if (use(PreContext)) return /* @__PURE__ */ jsx("code", {
			...props,
			className: "mask-[linear-gradient(to_bottom,white,white_30px,transparent_80px)]"
		});
		return /* @__PURE__ */ jsx("code", {
			...props,
			className: "border rounded-md px-px bg-fd-secondary text-fd-secondary-foreground"
		});
	},
	custom({ _tagName = "fragment", children, ...rest }) {
		return /* @__PURE__ */ jsxs("span", {
			className: "inline-flex max-w-full items-center border p-0.5 rounded-md bg-fd-card text-fd-card-foreground divide-x divide-fd-border",
			children: [
				/* @__PURE__ */ jsx("code", {
					className: "rounded-sm px-0.5 me-1 bg-fd-primary font-medium text-xs text-fd-primary-foreground border-none",
					children: _tagName
				}),
				Object.entries(rest).map(([k, v]) => {
					if (typeof v !== "string") return;
					return /* @__PURE__ */ jsxs("code", {
						className: "truncate text-xs text-fd-muted-foreground px-1",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "text-fd-card-foreground",
							children: [k, ": "]
						}), v]
					}, k);
				}),
				children && /* @__PURE__ */ jsx("span", {
					className: "ps-1",
					children
				})
			]
		});
	},
	pre(props) {
		return /* @__PURE__ */ jsx("pre", {
			...props,
			className: cn("flex flex-col border rounded-md my-0.5 p-2 bg-fd-secondary text-fd-secondary-foreground max-h-20 overflow-hidden", props.className),
			children: /* @__PURE__ */ jsx(PreContext, {
				value: true,
				children: props.children
			})
		});
	}
};
function rehypeCustomElements() {
	return (tree) => {
		visit(tree, (node) => {
			if (node.type === "element" && document.createElement(node.tagName) instanceof HTMLUnknownElement) {
				node.properties._tagName = node.tagName;
				node.tagName = "custom";
			}
		});
	};
}
function SearchDialog({ open, onOpenChange, search, onSearchChange, isLoading = false, onSelect: onSelectProp, children, dialogHandle }) {
	const router = useRouter();
	const onOpenChangeCallback = useRef(onOpenChange);
	onOpenChangeCallback.current = onOpenChange;
	const onSearchChangeCallback = useRef(onSearchChange);
	onSearchChangeCallback.current = onSearchChange;
	const onSelect = (item) => {
		if (item.type === "action") item.onSelect();
		else if (item.external) window.open(item.url, "_blank")?.focus();
		else router.push(item.url);
		onOpenChange(false);
		onSelectProp?.(item);
	};
	const onSelectCallback = useRef(onSelect);
	onSelectCallback.current = onSelect;
	return /* @__PURE__ */ jsx(DialogRoot, {
		open,
		onOpenChange,
		handle: dialogHandle,
		children: /* @__PURE__ */ jsx(RootContext, {
			value: useMemo(() => ({
				open,
				search,
				isLoading,
				onOpenChange: (v) => onOpenChangeCallback.current(v),
				onSearchChange: (v) => onSearchChangeCallback.current(v),
				onSelect: (v) => onSelectCallback.current(v)
			}), [
				isLoading,
				open,
				search
			]),
			children
		})
	});
}
function SearchDialogHeader(props) {
	return /* @__PURE__ */ jsx("div", {
		...props,
		className: cn("flex flex-row items-center gap-2 p-3", props.className)
	});
}
function SearchDialogInput(props) {
	const t = useTranslations({ note: "search dialog" });
	const { search, onSearchChange } = useSearch();
	return /* @__PURE__ */ jsx("input", {
		"data-fd-search-dialog-input": "",
		value: search,
		onChange: (e) => onSearchChange(e.target.value),
		placeholder: t("Search"),
		...props,
		className: cn("w-0 flex-1 bg-transparent text-lg placeholder:text-fd-muted-foreground focus-visible:outline-none", props.className)
	});
}
function SearchDialogClose({ children = "ESC", className, ...props }) {
	const { onOpenChange } = useSearch();
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		"aria-label": useTranslations({ note: "search dialog" })("Close Search", { note: "aria-label" }),
		onClick: () => onOpenChange(false),
		className: cn(buttonVariants({
			color: "outline",
			size: "sm",
			className: "font-mono text-fd-muted-foreground"
		}), className),
		...props,
		children
	});
}
function SearchDialogFooter(props) {
	return /* @__PURE__ */ jsx("div", {
		...props,
		className: cn("bg-fd-secondary/50 p-3 empty:hidden", props.className)
	});
}
function SearchDialogOverlay({ className, ...props }) {
	return /* @__PURE__ */ jsx(DialogBackdrop, {
		...props,
		className: (s) => cn("fixed inset-0 z-50 backdrop-blur-xs bg-fd-overlay data-open:animate-fd-fade-in data-closed:animate-fd-fade-out", typeof className === "function" ? className(s) : className)
	});
}
function SearchDialogContent({ ref, children, className, ...props }) {
	const t = useTranslations({ note: "search dialog" });
	const localRef = useRef(null);
	return /* @__PURE__ */ jsx(DialogPortal, { children: /* @__PURE__ */ jsxs(DialogPopup, {
		id: "fd-search-dialog-content",
		ref: mergeRefs(ref, localRef),
		"aria-describedby": void 0,
		initialFocus: (s) => {
			const input = localRef.current?.querySelector("input[data-fd-search-dialog-input]");
			if (s === "touch") {
				input?.focus({ preventScroll: true });
				return false;
			}
			return input;
		},
		className: (s) => cn("fixed left-1/2 top-4 md:top-[calc(50%-250px)] z-50 w-[calc(100%-1rem)] max-w-screen-sm -translate-x-1/2 rounded-xl border bg-fd-popover text-fd-popover-foreground shadow-2xl overflow-hidden data-closed:animate-fd-dialog-out data-open:animate-fd-dialog-in focus-visible:outline-none", "*:border-b *:has-[+:last-child[data-empty=true]]:border-b-0 *:data-[empty=true]:border-b-0 *:last:border-b-0", typeof className === "function" ? className(s) : className),
		...props,
		children: [/* @__PURE__ */ jsx(DialogTitle, {
			className: "hidden",
			children: t("Search")
		}), children]
	}) });
}
function SearchDialogList({ items = null, Empty = () => /* @__PURE__ */ jsx("div", {
	className: "py-12 text-center text-sm text-fd-muted-foreground",
	children: /* @__PURE__ */ jsx(T, {
		text: "No results found",
		note: "search dialog"
	})
}), Item = (props) => /* @__PURE__ */ jsx(SearchDialogListItem, { ...props }), ...props }) {
	const ref = useRef(null);
	const { onSelect } = useSearch();
	const [active, setActive] = useState(() => items && items.length > 0 ? items[0].id : null);
	const onKey = useEffectEvent((e) => {
		if (!items || e.isComposing) return;
		if (e.key === "ArrowDown" || e.key == "ArrowUp") {
			let idx = items.findIndex((item) => item.id === active);
			if (idx === -1) idx = 0;
			else if (e.key === "ArrowDown") idx++;
			else idx--;
			setActive(items.at(idx % items.length)?.id ?? null);
			e.preventDefault();
		}
		if (e.key === "Enter") {
			const selected = items.find((item) => item.id === active);
			if (selected) onSelect(selected);
			e.preventDefault();
		}
	});
	useEffect(() => {
		const element = ref.current;
		if (!element) return;
		const observer = new ResizeObserver(() => {
			const viewport = element.firstElementChild;
			element.style.setProperty("--fd-animated-height", `${viewport.clientHeight}px`);
		});
		const viewport = element.firstElementChild;
		if (viewport) observer.observe(viewport);
		const content = document.getElementById("fd-search-dialog-content") ?? window;
		content.addEventListener("keydown", onKey);
		return () => {
			observer.disconnect();
			content.removeEventListener("keydown", onKey);
		};
	}, []);
	useOnChange(items, () => {
		if (items && items.length > 0) setActive(items[0].id);
	});
	return /* @__PURE__ */ jsx("div", {
		...props,
		ref,
		"data-empty": items === null,
		className: cn("overflow-hidden h-(--fd-animated-height) transition-[height]", props.className),
		children: /* @__PURE__ */ jsx("div", {
			className: cn("w-full flex flex-col overflow-y-auto max-h-[460px] p-1", !items && "hidden"),
			children: /* @__PURE__ */ jsxs(ListContext, {
				value: useMemo(() => ({
					active,
					setActive
				}), [active]),
				children: [items?.length === 0 && Empty(), items?.map((item) => /* @__PURE__ */ jsx(Fragment$1, { children: Item({
					item,
					onClick: () => onSelect(item)
				}) }, item.id))]
			})
		})
	});
}
function SearchDialogListItem({ item, className, children, renderMarkdown = (s) => /* @__PURE__ */ jsx(mdRenderer.Markdown, {
	components: mdComponents,
	children: s
}), renderHighlights: _, ...props }) {
	const { active: activeId, setActive } = useSearchList();
	const active = item.id === activeId;
	if (item.type === "action") children ??= item.node;
	else children ??= /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("div", {
			className: "inline-flex items-center text-fd-muted-foreground text-xs empty:hidden",
			children: item.breadcrumbs?.map((item, i) => /* @__PURE__ */ jsxs(Fragment$1, { children: [i > 0 && /* @__PURE__ */ jsx(ChevronRight, { className: "size-4 rtl:rotate-180" }), item] }, i))
		}),
		item.type !== "page" && /* @__PURE__ */ jsx("div", {
			role: "none",
			className: "absolute inset-s-3 inset-y-0 w-px bg-fd-border"
		}),
		item.type === "heading" && /* @__PURE__ */ jsx(Hash, { className: "absolute inset-s-6 top-2.5 size-4 text-fd-muted-foreground" }),
		/* @__PURE__ */ jsx("div", {
			className: cn("min-w-0", item.type === "text" && "ps-4", item.type === "heading" && "ps-8", item.type === "page" || item.type === "heading" ? "font-medium" : "text-fd-popover-foreground/80"),
			children: typeof item.content === "string" ? renderMarkdown(item.content) : item.content
		})
	] });
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		ref: useCallback((element) => {
			if (active && element) e(element, {
				scrollMode: "if-needed",
				block: "nearest",
				boundary: element.parentElement
			});
		}, [active]),
		"aria-selected": active,
		className: cn("relative select-none shrink-0 px-2.5 py-2 text-start text-sm overflow-hidden rounded-lg", active && "bg-fd-accent text-fd-accent-foreground", className),
		onPointerMove: () => setActive(item.id),
		...props,
		children
	});
}
function SearchDialogIcon(props) {
	const { isLoading } = useSearch();
	return /* @__PURE__ */ jsx(SearchIcon, {
		...props,
		className: cn("size-5 text-fd-muted-foreground", isLoading && "animate-pulse duration-400", props.className)
	});
}
var itemVariants = cva("rounded-md border px-2 py-0.5 text-xs font-medium text-fd-muted-foreground transition-colors", { variants: { active: { true: "bg-fd-accent text-fd-accent-foreground" } } });
function TagsList({ tag, onTagChange, allowClear = false, ...props }) {
	const onTagChangeCallback = useRef(onTagChange);
	onTagChangeCallback.current = onTagChange;
	return /* @__PURE__ */ jsx("div", {
		...props,
		className: cn("flex items-center gap-1 flex-wrap", props.className),
		children: /* @__PURE__ */ jsx(TagsListContext, {
			value: useMemo(() => ({
				value: tag,
				onValueChange: (v) => onTagChangeCallback.current(v),
				allowClear
			}), [allowClear, tag]),
			children: props.children
		})
	});
}
function TagsListItem({ value, className, ...props }) {
	const { onValueChange, value: selectedValue, allowClear } = useTagsList();
	const selected = value === selectedValue;
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		"data-active": selected,
		className: cn(itemVariants({
			active: selected,
			className
		})),
		onClick: () => onValueChange(selected && allowClear ? void 0 : value),
		tabIndex: -1,
		...props,
		children: props.children
	});
}
function useSearch() {
	const ctx = use(RootContext);
	if (!ctx) throw new Error("Missing <SearchDialog />");
	return ctx;
}
function useTagsList() {
	const ctx = use(TagsListContext);
	if (!ctx) throw new Error("Missing <TagsList />");
	return ctx;
}
function useSearchList() {
	const ctx = use(ListContext);
	if (!ctx) throw new Error("Missing <SearchDialogList />");
	return ctx;
}
//#endregion
//#region node_modules/.pnpm/fumadocs-core@16.11.5_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.5_@type_72cb31c98dbdcd9237f5eec6550b9329/node_modules/fumadocs-core/dist/search/client.js
function useDebounce(value, delayMs = 1e3) {
	const [debouncedValue, setDebouncedValue] = useState(value);
	useEffect(() => {
		if (delayMs === 0) return;
		const handler = window.setTimeout(() => {
			setDebouncedValue(value);
		}, delayMs);
		return () => clearTimeout(handler);
	}, [delayMs, value]);
	if (delayMs === 0) return value;
	return debouncedValue;
}
/**
* Provide a hook to query different official search clients.
*
* Note: it will re-query when its parameters changed, make sure to define `deps` array if you encounter rendering issues.
*/
function useDocsSearch(clientOptions, customDeps) {
	const { delayMs = 100, allowEmpty = false, ...clientRest } = clientOptions;
	const [search, setSearch] = useState("");
	const [results, setResults] = useState("empty");
	const [error, setError] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const debouncedValue = useDebounce(search, delayMs);
	let client;
	if ("type" in clientRest) switch (clientRest.type) {
		case "fetch":
			client = import("./fetch-B6Unf2-5.js").then((mod) => mod.fetchClient(clientRest));
			break;
		case "algolia":
			client = import("./algolia-Bjstxu3N.js").then((mod) => mod.algoliaClient(clientRest));
			break;
		case "orama-cloud":
			client = import("./orama-cloud-D_A7cK7k.js").then((mod) => mod.oramaCloudClient(clientRest));
			break;
		case "orama-cloud-legacy":
			client = import("./orama-cloud-legacy-CS4KF54Z.js").then((mod) => mod.oramaCloudLegacyClient(clientRest));
			break;
		case "mixedbread":
			client = import("./mixedbread-BrOHFfVd.js").then((mod) => mod.mixedbreadClient(clientRest));
			break;
		case "static":
			client = import("./orama-static-DA9eusiD.js").then((mod) => mod.oramaStaticClient(clientRest));
			break;
		default: throw new Error("unknown search client");
	}
	else client = clientRest.client;
	const deps = [customDeps ?? (client instanceof Promise ? JSON.stringify(clientRest) : client.deps), debouncedValue];
	const [activeDeps, setActiveDeps] = useState(null);
	const activeTaskRef = useRef(null);
	if (!isEqualShallow(activeDeps, deps) && (!activeTaskRef.current || !isEqualShallow(activeTaskRef.current.deps, deps))) {
		if (activeTaskRef.current) activeTaskRef.current.interrupt = true;
		activeTaskRef.current = {
			deps,
			interrupt: false,
			async start() {
				try {
					setIsLoading(true);
					let res;
					if (debouncedValue.length === 0 && !allowEmpty) res = "empty";
					else res = await (await client).search(debouncedValue);
					if (!this.interrupt) {
						setActiveDeps(deps);
						setError(void 0);
						setResults(res);
					}
				} catch (err) {
					if (!this.interrupt) setError(err);
				} finally {
					if (!this.interrupt) setIsLoading(false);
				}
			}
		};
		activeTaskRef.current.start();
	}
	return useMemo(() => ({
		search,
		setSearch,
		query: {
			isLoading,
			data: results,
			error
		}
	}), [
		search,
		isLoading,
		results,
		error
	]);
}
//#endregion
export { useOpenChangeComplete as $, Image as $n, createChangeEventDetails as $t, HORIZONTAL_KEYS as A, isTableElement as An, isListIndexDisabled as At, getEmptyRootContext as B, mergeProps as Bn, isTypeableElement as Bt, ARROW_DOWN as C, getParentNode as Cn, getTabbableAfterElement as Ct, ARROW_UP as D, isHTMLElement as Dn, getMaxListIndex as Dt, ARROW_RIGHT as E, isElement as En, findNonDisabledListIndex as Et, isNativeInput as F, triggerOpenStateMapping as Fn, useValueAsRef as Ft, setPopupOpenState as G, useMergedRefs as Gn, stopEvent as Gt, FOCUSABLE_POPUP_PROPS as H, EMPTY_ARRAY as Hn, contains as Ht, scrollIntoViewIfNeeded as I, TransitionStatusDataAttributes as In, mergeCleanups as It, useOpenStateTransitions as J, formatErrorMessage as Jn, Timeout as Jt, useImplicitActiveTrigger as K, useRefWithInit as Kn, webkit as Kt, createInitialPopupStoreState as L, transitionStatusMapping as Ln, addEventListener as Lt, MODIFIER_KEYS as M, isWebKit as Mn, ownerDocument as Mt, VERTICAL_KEYS as N, popupStateMapping as Nn, AnimationFrame as Nt, COMPOSITE_KEYS as O, isLastTraversableNode as On, getMinListIndex as Ot, VERTICAL_KEYS_WITH_EXTRA_KEYS as P, pressableTriggerOpenStateMapping as Pn, useAnimationFrame as Pt, useTriggerDataForwarding as Q, FrameworkProvider as Qn, useId$1 as Qt, createPopupFloatingRootContext as R, useRenderElement as Rn, isInteractiveElement as Rt, inertValue as S, getOverflowAncestors as Sn, getPreviousTabbable as St, ARROW_LEFT as T, isContainingBlock as Tn, isOutsideEvent as Tt, attachPreventUnmountOnClose as U, EMPTY_OBJECT as Un, getTarget as Ut, PopupTriggerMap as V, resolveStyle as Vn, activeElement as Vt, createDefaultInitialFocus as W, warn as Wn, isMouseLikePointerType as Wt, usePopupRootSync as X, useI18n as Xn, useOnMount as Xt, usePopupInteractionProps as Y, I18nProvider as Yn, useTimeout as Yt, usePopupStore as Z, useTranslations as Zn, useBaseUiId as Zt, buttonVariants as _, getContainingBlock as _n, ownerVisuallyHidden as _t, SearchDialogFooter as a, initial as an, useDismiss as at, useScrollLock as b, getNodeName as bn, enableFocusInside as bt, SearchDialogInput as c, missing as cn, FloatingTree as ct, TagsList as d, triggerHover as dn, useFloatingTree as dt, closePress as en, Link as er, useAnimationsFinished as et, TagsListItem as f, triggerPress as fn, FloatingPortal as ft, mergeRefs as g, getComputedStyle$1 as gn, POPUP_COLLISION_AVOIDANCE as gt, isEqualShallow as h, SafeReact as hn, DROPDOWN_COLLISION_AVOIDANCE as ht, SearchDialogContent as i, imperativeAction as in, createSelector as it, HORIZONTAL_KEYS_WITH_EXTRA_KEYS as j, isTopLayer as jn, FocusGuard as jt, HOME as k, isOverflowElement as kn, isIndexOutOfListBounds as kt, SearchDialogList as l, none as ln, useFloatingNodeId as lt, useOnChange as m, useStableCallback as mn, DISABLED_TRANSITIONS_STYLE as mt, SearchDialog as n, escapeKey as nn, FloatingRootStore as nt, SearchDialogHeader as o, linkPress as on, FloatingFocusManager as ot, e as p, useIsoLayoutEffect as pn, CLICK_TRIGGER_IDENTIFIER as pt, useInitialOpenSync as q, useDialogRootContext as qn, ios as qt, SearchDialogClose as r, focusOut as rn, ReactStore as rt, SearchDialogIcon as s, listNavigation as sn, FloatingNode as st, useDocsSearch as t, disabled as tn, usePathname as tr, useTransitionStatus as tt, SearchDialogOverlay as u, outsidePress as un, useFloatingParentNodeId as ut, cn as v, getDocumentElement as vn, getNodeChildren as vt, ARROW_KEYS as w, getWindow as wn, getTabbableBeforeElement as wt, InternalBackdrop as x, getNodeScroll as xn, getNextTabbable as xt, DialogStore as y, getFrameElement as yn, disableFocusInside as yt, popupStoreSelectors as z, makeEventPreventable as zn, isTargetInsideEnabledTrigger as zt };
