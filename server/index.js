import { t as __exportAll$1 } from "./assets/rolldown-runtime-D7D4PA-g.js";
import { n as __toESM, t as __commonJSMin } from "./assets/rolldown-runtime-B-1-B7_t-slbNE3WJ.js";
import { $ as useOpenChangeComplete, $n as Image, $t as createChangeEventDetails, A as HORIZONTAL_KEYS, An as isTableElement, At as isListIndexDisabled, B as getEmptyRootContext, Bn as mergeProps, Bt as isTypeableElement, C as ARROW_DOWN, Cn as getParentNode, Ct as getTabbableAfterElement, D as ARROW_UP, Dn as isHTMLElement, Dt as getMaxListIndex, E as ARROW_RIGHT, En as isElement, Et as findNonDisabledListIndex, F as isNativeInput, Fn as triggerOpenStateMapping$1, Ft as useValueAsRef, G as setPopupOpenState, Gn as useMergedRefs, Gt as stopEvent, H as FOCUSABLE_POPUP_PROPS, Hn as EMPTY_ARRAY$1, Ht as contains, I as scrollIntoViewIfNeeded, In as TransitionStatusDataAttributes, It as mergeCleanups, J as useOpenStateTransitions, Jn as formatErrorMessage, Jt as Timeout, K as useImplicitActiveTrigger, Kn as useRefWithInit, Kt as webkit, L as createInitialPopupStoreState, Ln as transitionStatusMapping, Lt as addEventListener, M as MODIFIER_KEYS, Mn as isWebKit, Mt as ownerDocument, N as VERTICAL_KEYS, Nn as popupStateMapping, Nt as AnimationFrame, O as COMPOSITE_KEYS, On as isLastTraversableNode, Ot as getMinListIndex, P as VERTICAL_KEYS_WITH_EXTRA_KEYS, Pn as pressableTriggerOpenStateMapping, Pt as useAnimationFrame, Q as useTriggerDataForwarding, Qn as FrameworkProvider, Qt as useId$1, R as createPopupFloatingRootContext, Rn as useRenderElement, Rt as isInteractiveElement, S as inertValue, Sn as getOverflowAncestors, St as getPreviousTabbable, T as ARROW_LEFT, Tn as isContainingBlock, Tt as isOutsideEvent, U as attachPreventUnmountOnClose, Un as EMPTY_OBJECT, Ut as getTarget, V as PopupTriggerMap, Vn as resolveStyle, Vt as activeElement, W as createDefaultInitialFocus, Wn as warn, Wt as isMouseLikePointerType, X as usePopupRootSync, Xn as useI18n, Xt as useOnMount, Y as usePopupInteractionProps, Yn as I18nProvider, Yt as useTimeout, Z as usePopupStore, Zn as useTranslations, Zt as useBaseUiId, _ as buttonVariants$1, _n as getContainingBlock, _t as ownerVisuallyHidden, an as initial, at as useDismiss, b as useScrollLock, bn as getNodeName, bt as enableFocusInside, c as SearchDialogInput, cn as missing, ct as FloatingTree, dn as triggerHover, dt as useFloatingTree, en as closePress, er as Link$2, et as useAnimationsFinished, fn as triggerPress, ft as FloatingPortal, g as mergeRefs$1, gn as getComputedStyle$1, gt as POPUP_COLLISION_AVOIDANCE, h as isEqualShallow, hn as SafeReact, ht as DROPDOWN_COLLISION_AVOIDANCE, i as SearchDialogContent, in as imperativeAction, it as createSelector, j as HORIZONTAL_KEYS_WITH_EXTRA_KEYS, jn as isTopLayer, jt as FocusGuard, kn as isOverflowElement, kt as isIndexOutOfListBounds, l as SearchDialogList, ln as none, lt as useFloatingNodeId, m as useOnChange, mn as useStableCallback, mt as DISABLED_TRANSITIONS_STYLE, n as SearchDialog, nt as FloatingRootStore, o as SearchDialogHeader, on as linkPress, ot as FloatingFocusManager, p as e, pn as useIsoLayoutEffect, pt as CLICK_TRIGGER_IDENTIFIER, q as useInitialOpenSync, qn as useDialogRootContext, qt as ios, r as SearchDialogClose, rn as focusOut, rt as ReactStore, s as SearchDialogIcon, sn as listNavigation, st as FloatingNode, t as useDocsSearch, tn as disabled, tr as usePathname, tt as useTransitionStatus, u as SearchDialogOverlay, un as outsidePress, ut as useFloatingParentNodeId, v as cn$1, vn as getDocumentElement, vt as getNodeChildren, w as ARROW_KEYS, wn as getWindow, wt as getTabbableBeforeElement, x as InternalBackdrop, xn as getNodeScroll, xt as getNextTabbable, y as DialogStore, yn as getFrameElement, yt as disableFocusInside, z as popupStoreSelectors, zn as makeEventPreventable, zt as isTargetInsideEnabledTrigger } from "./assets/client-CnbdGMVY.js";
import { n as normalizeUrl } from "./assets/url-CWbf4MFh-BrwsO0CS.js";
import { n as searchAdvanced, r as searchSimple, t as oramaStaticClient } from "./assets/orama-static-3bW-jngR.js";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Link, Links, Meta, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, useLocation, useNavigate, useParams, useRevalidator } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { Children, Fragment as Fragment$1, Suspense, createContext, createElement, lazy, use, useCallback, useContext, useDeferredValue, useEffect, useEffectEvent, useId, useLayoutEffect, useMemo, useRef, useState } from "react";
import * as ReactDOM$1 from "react-dom";
import ReactDOM, { flushSync } from "react-dom";
import { cn } from "cnfast";
import { cva } from "class-variance-authority";
import { Airplay, ArrowRight, BookOpen, Box, Bug, Check, ChevronDown, ChevronLeft, ChevronRight, ChevronsUpDown, CircleCheck, CircleX, Clipboard, Code2, Compass, Copy, CopyCheckIcon, Cpu, ExternalLink, ExternalLinkIcon, Info, Languages, Lightbulb, LinkIcon, Loader2, Map as Map$1, MessageCircleIcon, Moon, RefreshCw, Route, Search, SearchIcon, Send, ShieldCheck, Sidebar, SidebarIcon, Sun, Terminal, Text, TextIcon, TriangleAlert, X, icons } from "lucide-react";
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import * as path$1 from "node:path";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { visit } from "unist-util-visit";
import { create, insertMultiple, save } from "@orama/orama";
import { createTokenizer } from "@orama/tokenizers/mandarin";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, convertToModelMessages, createUIMessageStreamResponse, stepCountIs, streamText, toUIMessageStream, tool } from "ai";
import remarkGfm from "remark-gfm";
import { createLLMGateway } from "@llmgateway/ai-sdk-provider";
import { z } from "zod";
import { Document } from "flexsearch";
import { ImageResponse } from "takumi-js/response";
//#region node_modules/.pnpm/@react-router+dev@8.4.0_@react-router+serve@8.4.0_react-router@8.4.0_react-dom@19.2.8_r_a650686f8bee818af39d41987e6081e1/node_modules/@react-router/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = /* @__PURE__ */ __exportAll$1({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
	if (request.method.toUpperCase() === "HEAD") return new Response(null, {
		status: responseStatusCode,
		headers: responseHeaders
	});
	return new Promise((resolve, reject) => {
		let shellRendered = false;
		let userAgent = request.headers.get("user-agent");
		let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
		let timeoutId = setTimeout(() => abort(), 6e3);
		const { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(ServerRouter, {
			context: routerContext,
			url: request.url
		}), {
			[readyOption]() {
				shellRendered = true;
				const body = new PassThrough({ final(callback) {
					clearTimeout(timeoutId);
					timeoutId = void 0;
					callback();
				} });
				const stream = createReadableStreamFromReadable(body);
				responseHeaders.set("Content-Type", "text/html");
				pipe(body);
				resolve(new Response(stream, {
					headers: responseHeaders,
					status: responseStatusCode
				}));
			},
			onShellError(error) {
				reject(error);
			},
			onError(error) {
				responseStatusCode = 500;
				if (shellRendered) console.error(error);
			}
		});
	});
}
//#endregion
//#region node_modules/.pnpm/fumadocs-core@16.11.5_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.5_@type_72cb31c98dbdcd9237f5eec6550b9329/node_modules/fumadocs-core/dist/negotiation-D7x4zl2m.js
/**
* negotiator
* Copyright(c) 2012 Isaac Z. Schlueter
* Copyright(c) 2014 Federico Romero
* Copyright(c) 2014-2015 Douglas Christopher Wilson
* MIT Licensed
*/
var require_charset = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Module exports.
	* @public
	*/
	module.exports = preferredCharsets;
	module.exports.preferredCharsets = preferredCharsets;
	/**
	* Module variables.
	* @private
	*/
	var simpleCharsetRegExp = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
	/**
	* Parse the Accept-Charset header.
	* @private
	*/
	function parseAcceptCharset(accept) {
		var accepts = accept.split(",");
		for (var i = 0, j = 0; i < accepts.length; i++) {
			var charset = parseCharset(accepts[i].trim(), i);
			if (charset) accepts[j++] = charset;
		}
		accepts.length = j;
		return accepts;
	}
	/**
	* Parse a charset from the Accept-Charset header.
	* @private
	*/
	function parseCharset(str, i) {
		var match = simpleCharsetRegExp.exec(str);
		if (!match) return null;
		var charset = match[1];
		var q = 1;
		if (match[2]) {
			var params = match[2].split(";");
			for (var j = 0; j < params.length; j++) {
				var p = params[j].trim().split("=");
				if (p[0] === "q") {
					q = parseFloat(p[1]);
					break;
				}
			}
		}
		return {
			charset,
			q,
			i
		};
	}
	/**
	* Get the priority of a charset.
	* @private
	*/
	function getCharsetPriority(charset, accepted, index) {
		var priority = {
			o: -1,
			q: 0,
			s: 0
		};
		for (var i = 0; i < accepted.length; i++) {
			var spec = specify(charset, accepted[i], index);
			if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) priority = spec;
		}
		return priority;
	}
	/**
	* Get the specificity of the charset.
	* @private
	*/
	function specify(charset, spec, index) {
		var s = 0;
		if (spec.charset.toLowerCase() === charset.toLowerCase()) s |= 1;
		else if (spec.charset !== "*") return null;
		return {
			i: index,
			o: spec.i,
			q: spec.q,
			s
		};
	}
	/**
	* Get the preferred charsets from an Accept-Charset header.
	* @public
	*/
	function preferredCharsets(accept, provided) {
		var accepts = parseAcceptCharset(accept === void 0 ? "*" : accept || "");
		if (!provided) return accepts.filter(isQuality).sort(compareSpecs).map(getFullCharset);
		var priorities = provided.map(function getPriority(type, index) {
			return getCharsetPriority(type, accepts, index);
		});
		return priorities.filter(isQuality).sort(compareSpecs).map(function getCharset(priority) {
			return provided[priorities.indexOf(priority)];
		});
	}
	/**
	* Compare two specs.
	* @private
	*/
	function compareSpecs(a, b) {
		return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i || 0;
	}
	/**
	* Get full charset string.
	* @private
	*/
	function getFullCharset(spec) {
		return spec.charset;
	}
	/**
	* Check if a spec has any quality.
	* @private
	*/
	function isQuality(spec) {
		return spec.q > 0;
	}
}));
/**
* negotiator
* Copyright(c) 2012 Isaac Z. Schlueter
* Copyright(c) 2014 Federico Romero
* Copyright(c) 2014-2015 Douglas Christopher Wilson
* MIT Licensed
*/
var require_encoding = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Module exports.
	* @public
	*/
	module.exports = preferredEncodings;
	module.exports.preferredEncodings = preferredEncodings;
	/**
	* Module variables.
	* @private
	*/
	var simpleEncodingRegExp = /^\s*([^\s;]+)\s*(?:;(.*))?$/;
	/**
	* Parse the Accept-Encoding header.
	* @private
	*/
	function parseAcceptEncoding(accept) {
		var accepts = accept.split(",");
		var hasIdentity = false;
		var minQuality = 1;
		for (var i = 0, j = 0; i < accepts.length; i++) {
			var encoding = parseEncoding(accepts[i].trim(), i);
			if (encoding) {
				accepts[j++] = encoding;
				hasIdentity = hasIdentity || specify("identity", encoding);
				minQuality = Math.min(minQuality, encoding.q || 1);
			}
		}
		if (!hasIdentity) accepts[j++] = {
			encoding: "identity",
			q: minQuality,
			i
		};
		accepts.length = j;
		return accepts;
	}
	/**
	* Parse an encoding from the Accept-Encoding header.
	* @private
	*/
	function parseEncoding(str, i) {
		var match = simpleEncodingRegExp.exec(str);
		if (!match) return null;
		var encoding = match[1];
		var q = 1;
		if (match[2]) {
			var params = match[2].split(";");
			for (var j = 0; j < params.length; j++) {
				var p = params[j].trim().split("=");
				if (p[0] === "q") {
					q = parseFloat(p[1]);
					break;
				}
			}
		}
		return {
			encoding,
			q,
			i
		};
	}
	/**
	* Get the priority of an encoding.
	* @private
	*/
	function getEncodingPriority(encoding, accepted, index) {
		var priority = {
			encoding,
			o: -1,
			q: 0,
			s: 0
		};
		for (var i = 0; i < accepted.length; i++) {
			var spec = specify(encoding, accepted[i], index);
			if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) priority = spec;
		}
		return priority;
	}
	/**
	* Get the specificity of the encoding.
	* @private
	*/
	function specify(encoding, spec, index) {
		var s = 0;
		if (spec.encoding.toLowerCase() === encoding.toLowerCase()) s |= 1;
		else if (spec.encoding !== "*") return null;
		return {
			encoding,
			i: index,
			o: spec.i,
			q: spec.q,
			s
		};
	}
	/**
	* Get the preferred encodings from an Accept-Encoding header.
	* @public
	*/
	function preferredEncodings(accept, provided, preferred) {
		var accepts = parseAcceptEncoding(accept || "");
		var comparator = preferred ? function comparator(a, b) {
			if (a.q !== b.q) return b.q - a.q;
			var aPreferred = preferred.indexOf(a.encoding);
			var bPreferred = preferred.indexOf(b.encoding);
			if (aPreferred === -1 && bPreferred === -1) return b.s - a.s || a.o - b.o || a.i - b.i;
			if (aPreferred !== -1 && bPreferred !== -1) return aPreferred - bPreferred;
			return aPreferred === -1 ? 1 : -1;
		} : compareSpecs;
		if (!provided) return accepts.filter(isQuality).sort(comparator).map(getFullEncoding);
		var priorities = provided.map(function getPriority(type, index) {
			return getEncodingPriority(type, accepts, index);
		});
		return priorities.filter(isQuality).sort(comparator).map(function getEncoding(priority) {
			return provided[priorities.indexOf(priority)];
		});
	}
	/**
	* Compare two specs.
	* @private
	*/
	function compareSpecs(a, b) {
		return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i;
	}
	/**
	* Get full encoding string.
	* @private
	*/
	function getFullEncoding(spec) {
		return spec.encoding;
	}
	/**
	* Check if a spec has any quality.
	* @private
	*/
	function isQuality(spec) {
		return spec.q > 0;
	}
}));
/**
* negotiator
* Copyright(c) 2012 Isaac Z. Schlueter
* Copyright(c) 2014 Federico Romero
* Copyright(c) 2014-2015 Douglas Christopher Wilson
* MIT Licensed
*/
var require_language = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Module exports.
	* @public
	*/
	module.exports = preferredLanguages;
	module.exports.preferredLanguages = preferredLanguages;
	/**
	* Module variables.
	* @private
	*/
	var simpleLanguageRegExp = /^\s*([^\s\-;]+)(?:-([^\s;]+))?\s*(?:;(.*))?$/;
	/**
	* Parse the Accept-Language header.
	* @private
	*/
	function parseAcceptLanguage(accept) {
		var accepts = accept.split(",");
		for (var i = 0, j = 0; i < accepts.length; i++) {
			var language = parseLanguage(accepts[i].trim(), i);
			if (language) accepts[j++] = language;
		}
		accepts.length = j;
		return accepts;
	}
	/**
	* Parse a language from the Accept-Language header.
	* @private
	*/
	function parseLanguage(str, i) {
		var match = simpleLanguageRegExp.exec(str);
		if (!match) return null;
		var prefix = match[1];
		var suffix = match[2];
		var full = prefix;
		if (suffix) full += "-" + suffix;
		var q = 1;
		if (match[3]) {
			var params = match[3].split(";");
			for (var j = 0; j < params.length; j++) {
				var p = params[j].split("=");
				if (p[0] === "q") q = parseFloat(p[1]);
			}
		}
		return {
			prefix,
			suffix,
			q,
			i,
			full
		};
	}
	/**
	* Get the priority of a language.
	* @private
	*/
	function getLanguagePriority(language, accepted, index) {
		var priority = {
			o: -1,
			q: 0,
			s: 0
		};
		for (var i = 0; i < accepted.length; i++) {
			var spec = specify(language, accepted[i], index);
			if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) priority = spec;
		}
		return priority;
	}
	/**
	* Get the specificity of the language.
	* @private
	*/
	function specify(language, spec, index) {
		var p = parseLanguage(language);
		if (!p) return null;
		var s = 0;
		if (spec.full.toLowerCase() === p.full.toLowerCase()) s |= 4;
		else if (spec.prefix.toLowerCase() === p.full.toLowerCase()) s |= 2;
		else if (spec.full.toLowerCase() === p.prefix.toLowerCase()) s |= 1;
		else if (spec.full !== "*") return null;
		return {
			i: index,
			o: spec.i,
			q: spec.q,
			s
		};
	}
	/**
	* Get the preferred languages from an Accept-Language header.
	* @public
	*/
	function preferredLanguages(accept, provided) {
		var accepts = parseAcceptLanguage(accept === void 0 ? "*" : accept || "");
		if (!provided) return accepts.filter(isQuality).sort(compareSpecs).map(getFullLanguage);
		var priorities = provided.map(function getPriority(type, index) {
			return getLanguagePriority(type, accepts, index);
		});
		return priorities.filter(isQuality).sort(compareSpecs).map(function getLanguage(priority) {
			return provided[priorities.indexOf(priority)];
		});
	}
	/**
	* Compare two specs.
	* @private
	*/
	function compareSpecs(a, b) {
		return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i || 0;
	}
	/**
	* Get full language string.
	* @private
	*/
	function getFullLanguage(spec) {
		return spec.full;
	}
	/**
	* Check if a spec has any quality.
	* @private
	*/
	function isQuality(spec) {
		return spec.q > 0;
	}
}));
/**
* negotiator
* Copyright(c) 2012 Isaac Z. Schlueter
* Copyright(c) 2014 Federico Romero
* Copyright(c) 2014-2015 Douglas Christopher Wilson
* MIT Licensed
*/
var require_mediaType = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Module exports.
	* @public
	*/
	module.exports = preferredMediaTypes;
	module.exports.preferredMediaTypes = preferredMediaTypes;
	/**
	* Module variables.
	* @private
	*/
	var simpleMediaTypeRegExp = /^\s*([^\s\/;]+)\/([^;\s]+)\s*(?:;(.*))?$/;
	/**
	* Parse the Accept header.
	* @private
	*/
	function parseAccept(accept) {
		var accepts = splitMediaTypes(accept);
		for (var i = 0, j = 0; i < accepts.length; i++) {
			var mediaType = parseMediaType(accepts[i].trim(), i);
			if (mediaType) accepts[j++] = mediaType;
		}
		accepts.length = j;
		return accepts;
	}
	/**
	* Parse a media type from the Accept header.
	* @private
	*/
	function parseMediaType(str, i) {
		var match = simpleMediaTypeRegExp.exec(str);
		if (!match) return null;
		var params = Object.create(null);
		var q = 1;
		var subtype = match[2];
		var type = match[1];
		if (match[3]) {
			var kvps = splitParameters(match[3]).map(splitKeyValuePair);
			for (var j = 0; j < kvps.length; j++) {
				var pair = kvps[j];
				var key = pair[0].toLowerCase();
				var val = pair[1];
				var value = val && val[0] === "\"" && val[val.length - 1] === "\"" ? val.slice(1, -1) : val;
				if (key === "q") {
					q = parseFloat(value);
					break;
				}
				params[key] = value;
			}
		}
		return {
			type,
			subtype,
			params,
			q,
			i
		};
	}
	/**
	* Get the priority of a media type.
	* @private
	*/
	function getMediaTypePriority(type, accepted, index) {
		var priority = {
			o: -1,
			q: 0,
			s: 0
		};
		for (var i = 0; i < accepted.length; i++) {
			var spec = specify(type, accepted[i], index);
			if (spec && (priority.s - spec.s || priority.q - spec.q || priority.o - spec.o) < 0) priority = spec;
		}
		return priority;
	}
	/**
	* Get the specificity of the media type.
	* @private
	*/
	function specify(type, spec, index) {
		var p = parseMediaType(type);
		var s = 0;
		if (!p) return null;
		if (spec.type.toLowerCase() == p.type.toLowerCase()) s |= 4;
		else if (spec.type != "*") return null;
		if (spec.subtype.toLowerCase() == p.subtype.toLowerCase()) s |= 2;
		else if (spec.subtype != "*") return null;
		var keys = Object.keys(spec.params);
		if (keys.length > 0) if (keys.every(function(k) {
			return spec.params[k] == "*" || (spec.params[k] || "").toLowerCase() == (p.params[k] || "").toLowerCase();
		})) s |= 1;
		else return null;
		return {
			i: index,
			o: spec.i,
			q: spec.q,
			s
		};
	}
	/**
	* Get the preferred media types from an Accept header.
	* @public
	*/
	function preferredMediaTypes(accept, provided) {
		var accepts = parseAccept(accept === void 0 ? "*/*" : accept || "");
		if (!provided) return accepts.filter(isQuality).sort(compareSpecs).map(getFullType);
		var priorities = provided.map(function getPriority(type, index) {
			return getMediaTypePriority(type, accepts, index);
		});
		return priorities.filter(isQuality).sort(compareSpecs).map(function getType(priority) {
			return provided[priorities.indexOf(priority)];
		});
	}
	/**
	* Compare two specs.
	* @private
	*/
	function compareSpecs(a, b) {
		return b.q - a.q || b.s - a.s || a.o - b.o || a.i - b.i || 0;
	}
	/**
	* Get full type string.
	* @private
	*/
	function getFullType(spec) {
		return spec.type + "/" + spec.subtype;
	}
	/**
	* Check if a spec has any quality.
	* @private
	*/
	function isQuality(spec) {
		return spec.q > 0;
	}
	/**
	* Count the number of quotes in a string.
	* @private
	*/
	function quoteCount(string) {
		var count = 0;
		var index = 0;
		while ((index = string.indexOf("\"", index)) !== -1) {
			count++;
			index++;
		}
		return count;
	}
	/**
	* Split a key value pair.
	* @private
	*/
	function splitKeyValuePair(str) {
		var index = str.indexOf("=");
		var key;
		var val;
		if (index === -1) key = str;
		else {
			key = str.slice(0, index);
			val = str.slice(index + 1);
		}
		return [key, val];
	}
	/**
	* Split an Accept header into media types.
	* @private
	*/
	function splitMediaTypes(accept) {
		var accepts = accept.split(",");
		for (var i = 1, j = 0; i < accepts.length; i++) if (quoteCount(accepts[j]) % 2 == 0) accepts[++j] = accepts[i];
		else accepts[j] += "," + accepts[i];
		accepts.length = j + 1;
		return accepts;
	}
	/**
	* Split a string of parameters.
	* @private
	*/
	function splitParameters(str) {
		var parameters = str.split(";");
		for (var i = 1, j = 0; i < parameters.length; i++) if (quoteCount(parameters[j]) % 2 == 0) parameters[++j] = parameters[i];
		else parameters[j] += ";" + parameters[i];
		parameters.length = j + 1;
		for (var i = 0; i < parameters.length; i++) parameters[i] = parameters[i].trim();
		return parameters;
	}
}));
/*!
* negotiator
* Copyright(c) 2012 Federico Romero
* Copyright(c) 2012-2014 Isaac Z. Schlueter
* Copyright(c) 2015 Douglas Christopher Wilson
* MIT Licensed
*/
var require_negotiator = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var preferredCharsets = require_charset();
	var preferredEncodings = require_encoding();
	var preferredLanguages = require_language();
	var preferredMediaTypes = require_mediaType();
	/**
	* Module exports.
	* @public
	*/
	module.exports = Negotiator;
	module.exports.Negotiator = Negotiator;
	/**
	* Create a Negotiator instance from a request.
	* @param {object} request
	* @public
	*/
	function Negotiator(request) {
		if (!(this instanceof Negotiator)) return new Negotiator(request);
		this.request = request;
	}
	Negotiator.prototype.charset = function charset(available) {
		var set = this.charsets(available);
		return set && set[0];
	};
	Negotiator.prototype.charsets = function charsets(available) {
		return preferredCharsets(this.request.headers["accept-charset"], available);
	};
	Negotiator.prototype.encoding = function encoding(available, opts) {
		var set = this.encodings(available, opts);
		return set && set[0];
	};
	Negotiator.prototype.encodings = function encodings(available, options) {
		var opts = options || {};
		return preferredEncodings(this.request.headers["accept-encoding"], available, opts.preferred);
	};
	Negotiator.prototype.language = function language(available) {
		var set = this.languages(available);
		return set && set[0];
	};
	Negotiator.prototype.languages = function languages(available) {
		return preferredLanguages(this.request.headers["accept-language"], available);
	};
	Negotiator.prototype.mediaType = function mediaType(available) {
		var set = this.mediaTypes(available);
		return set && set[0];
	};
	Negotiator.prototype.mediaTypes = function mediaTypes(available) {
		return preferredMediaTypes(this.request.headers.accept, available);
	};
	Negotiator.prototype.preferredCharset = Negotiator.prototype.charset;
	Negotiator.prototype.preferredCharsets = Negotiator.prototype.charsets;
	Negotiator.prototype.preferredEncoding = Negotiator.prototype.encoding;
	Negotiator.prototype.preferredEncodings = Negotiator.prototype.encodings;
	Negotiator.prototype.preferredLanguage = Negotiator.prototype.language;
	Negotiator.prototype.preferredLanguages = Negotiator.prototype.languages;
	Negotiator.prototype.preferredMediaType = Negotiator.prototype.mediaType;
	Negotiator.prototype.preferredMediaTypes = Negotiator.prototype.mediaTypes;
}));
var require_dist = /* @__PURE__ */ __commonJSMin(((exports) => {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.PathError = exports.TokenData = void 0;
	exports.compile = compile;
	exports.match = match;
	const DEFAULT_DELIMITER = "/";
	const NOOP_VALUE = (value) => value;
	const ID_START = /^[$_\p{ID_Start}]$/u;
	const ID_CONTINUE = /^[$\u200c\u200d\p{ID_Continue}]$/u;
	/**
	* Escape a regular expression string.
	*/
	function escape(str) {
		return str.replace(/[.+*?^${}()[\]|/\\]/g, "\\$&");
	}
	/**
	* Tokenized path instance.
	*/
	var TokenData = class {
		constructor(tokens, originalPath) {
			this.tokens = tokens;
			this.originalPath = originalPath;
		}
	};
	exports.TokenData = TokenData;
	/**
	* ParseError is thrown when there is an error processing the path.
	*/
	var PathError = class extends TypeError {
		constructor(message, originalPath) {
			let text = message;
			if (originalPath) text += `: ${originalPath}`;
			text += `; visit https://git.new/pathToRegexpError for info`;
			super(text);
			this.originalPath = originalPath;
		}
	};
	exports.PathError = PathError;
	/**
	* Parse a string for the raw tokens.
	*/
	function parse(str, options = {}) {
		const { encodePath = NOOP_VALUE } = options;
		const chars = [...str];
		let index = 0;
		function consumeUntil(end) {
			const output = [];
			let path = "";
			function writePath() {
				if (!path) return;
				output.push({
					type: "text",
					value: encodePath(path)
				});
				path = "";
			}
			while (index < chars.length) {
				const value = chars[index++];
				if (value === end) {
					writePath();
					return output;
				}
				if (value === "\\") {
					if (index === chars.length) throw new PathError(`Unexpected end after \\ at index ${index}`, str);
					path += chars[index++];
					continue;
				}
				if (value === ":" || value === "*") {
					const type = value === ":" ? "param" : "wildcard";
					let name = "";
					if (ID_START.test(chars[index])) do
						name += chars[index++];
					while (ID_CONTINUE.test(chars[index]));
					else if (chars[index] === "\"") {
						let quoteStart = index;
						while (index < chars.length) {
							if (chars[++index] === "\"") {
								index++;
								quoteStart = 0;
								break;
							}
							if (chars[index] === "\\") index++;
							name += chars[index];
						}
						if (quoteStart) throw new PathError(`Unterminated quote at index ${quoteStart}`, str);
					}
					if (!name) throw new PathError(`Missing parameter name at index ${index}`, str);
					writePath();
					output.push({
						type,
						name
					});
					continue;
				}
				if (value === "{") {
					writePath();
					output.push({
						type: "group",
						tokens: consumeUntil("}")
					});
					continue;
				}
				if (value === "}" || value === "(" || value === ")" || value === "[" || value === "]" || value === "+" || value === "?" || value === "!") throw new PathError(`Unexpected ${value} at index ${index - 1}`, str);
				path += value;
			}
			if (end) throw new PathError(`Unexpected end at index ${index}, expected ${end}`, str);
			writePath();
			return output;
		}
		return new TokenData(consumeUntil(""), str);
	}
	/**
	* Compile a string to a template function for the path.
	*/
	function compile(path, options = {}) {
		const { encode = encodeURIComponent, delimiter = DEFAULT_DELIMITER } = options;
		const fn = tokensToFunction((typeof path === "object" ? path : parse(path, options)).tokens, delimiter, encode);
		return function path(params = {}) {
			const missing = [];
			const path = fn(params, missing);
			if (missing.length) throw new TypeError(`Missing parameters: ${missing.join(", ")}`);
			return path;
		};
	}
	function tokensToFunction(tokens, delimiter, encode) {
		const encoders = tokens.map((token) => tokenToFunction(token, delimiter, encode));
		return (data, missing) => {
			let result = "";
			for (const encoder of encoders) result += encoder(data, missing);
			return result;
		};
	}
	/**
	* Convert a single token into a path building function.
	*/
	function tokenToFunction(token, delimiter, encode) {
		if (token.type === "text") return () => token.value;
		if (token.type === "group") {
			const fn = tokensToFunction(token.tokens, delimiter, encode);
			return (data, missing) => {
				const len = missing.length;
				const value = fn(data, missing);
				if (missing.length === len) return value;
				missing.length = len;
				return "";
			};
		}
		const encodeValue = encode || NOOP_VALUE;
		if (token.type === "wildcard" && encode !== false) return (data, missing) => {
			const value = data[token.name];
			if (value == null) {
				missing.push(token.name);
				return "";
			}
			if (!Array.isArray(value) || value.length === 0) throw new TypeError(`Expected "${token.name}" to be a non-empty array`);
			let result = "";
			for (let i = 0; i < value.length; i++) {
				if (typeof value[i] !== "string") throw new TypeError(`Expected "${token.name}/${i}" to be a string`);
				if (i > 0) result += delimiter;
				result += encodeValue(value[i]);
			}
			return result;
		};
		return (data, missing) => {
			const value = data[token.name];
			if (value == null) {
				missing.push(token.name);
				return "";
			}
			if (typeof value !== "string") throw new TypeError(`Expected "${token.name}" to be a string`);
			return encodeValue(value);
		};
	}
	/**
	* Transform a path into a match function.
	*/
	function match(path, options = {}) {
		const { decode = decodeURIComponent, delimiter = DEFAULT_DELIMITER } = options;
		const { regexp, keys } = pathToRegexp(path, options);
		const decoders = keys.map((key) => {
			if (decode === false) return NOOP_VALUE;
			if (key.type === "param") return decode;
			return (value) => value.split(delimiter).map(decode);
		});
		return function match(input) {
			const m = regexp.exec(input);
			if (!m) return false;
			const path = m[0];
			const params = Object.create(null);
			for (let i = 1; i < m.length; i++) {
				if (m[i] === void 0) continue;
				const key = keys[i - 1];
				const decoder = decoders[i - 1];
				params[key.name] = decoder(m[i]);
			}
			return {
				path,
				params
			};
		};
	}
	/**
	* Transform a path into a regular expression and capture keys.
	*/
	function pathToRegexp(path, options = {}) {
		const { delimiter = DEFAULT_DELIMITER, end = true, sensitive = false, trailing = true } = options;
		const keys = [];
		let source = "";
		let combinations = 0;
		function process(path) {
			if (Array.isArray(path)) {
				for (const p of path) process(p);
				return;
			}
			const data = typeof path === "object" ? path : parse(path, options);
			flatten(data.tokens, 0, [], (tokens) => {
				if (combinations >= 256) throw new PathError("Too many path combinations", data.originalPath);
				if (combinations > 0) source += "|";
				source += toRegExpSource(tokens, delimiter, keys, data.originalPath);
				combinations++;
			});
		}
		process(path);
		let pattern = `^(?:${source})`;
		if (trailing) pattern += "(?:" + escape(delimiter) + "$)?";
		pattern += end ? "$" : "(?=" + escape(delimiter) + "|$)";
		return {
			regexp: new RegExp(pattern, sensitive ? "" : "i"),
			keys
		};
	}
	/**
	* Generate a flat list of sequence tokens from the given tokens.
	*/
	function flatten(tokens, index, result, callback) {
		while (index < tokens.length) {
			const token = tokens[index++];
			if (token.type === "group") {
				const len = result.length;
				flatten(token.tokens, 0, result, (seq) => flatten(tokens, index, seq, callback));
				result.length = len;
				continue;
			}
			result.push(token);
		}
		callback(result);
	}
	/**
	* Transform a flat sequence of tokens into a regular expression.
	*/
	function toRegExpSource(tokens, delimiter, keys, originalPath) {
		let result = "";
		let backtrack = "";
		let wildcardBacktrack = "";
		let prevCaptureType = 0;
		let hasSegmentCapture = 0;
		let index = 0;
		function hasInSegment(index, type) {
			while (index < tokens.length) {
				const token = tokens[index++];
				if (token.type === type) return true;
				if (token.type === "text") {
					if (token.value.includes(delimiter)) break;
				}
			}
			return false;
		}
		function peekText(index) {
			let result = "";
			while (index < tokens.length) {
				const token = tokens[index++];
				if (token.type !== "text") break;
				result += token.value;
			}
			return result;
		}
		while (index < tokens.length) {
			const token = tokens[index++];
			if (token.type === "text") {
				result += escape(token.value);
				backtrack += token.value;
				if (prevCaptureType === 2) wildcardBacktrack += token.value;
				if (token.value.includes(delimiter)) hasSegmentCapture = 0;
				continue;
			}
			if (token.type === "param" || token.type === "wildcard") {
				if (prevCaptureType && !backtrack) throw new PathError(`Missing text before "${token.name}" ${token.type}`, originalPath);
				if (token.type === "param") {
					result += hasSegmentCapture & 2 ? `(${negate(delimiter, backtrack)}+)` : hasInSegment(index, "wildcard") ? `(${negate(delimiter, peekText(index))}+)` : hasSegmentCapture & 1 ? `(${negate(delimiter, backtrack)}+|${escape(backtrack)})` : `(${negate(delimiter, "")}+)`;
					hasSegmentCapture |= prevCaptureType = 1;
				} else {
					result += hasSegmentCapture & 2 ? `(${negate(backtrack, "")}+)` : wildcardBacktrack ? `(${negate(wildcardBacktrack, "")}+|${negate(delimiter, "")}+)` : `([^]+)`;
					wildcardBacktrack = "";
					hasSegmentCapture |= prevCaptureType = 2;
				}
				keys.push(token);
				backtrack = "";
				continue;
			}
			throw new TypeError(`Unknown token type: ${token.type}`);
		}
		return result;
	}
	/**
	* Block backtracking on previous text/delimiter.
	*/
	function negate(a, b) {
		if (b.length > a.length) return negate(b, a);
		if (a === b) b = "";
		if (b.length > 1) return `(?:(?!${escape(a)}|${escape(b)})[^])`;
		if (a.length > 1) return `(?:(?!${escape(a)})[^${escape(b)}])`;
		return `[^${escape(a + b)}]`;
	}
}));
var import_negotiator = /* @__PURE__ */ __toESM(require_negotiator(), 1);
var import_dist = require_dist();
function getNegotiator(request) {
	const headers = {};
	request.headers.forEach((value, key) => {
		headers[key] = value;
	});
	return new import_negotiator.default({ headers });
}
/**
* Rewrite incoming path matching the `source` pattern into the `destination` pattern.
*
* See [`path-to-regexp`](https://github.com/pillarjs/path-to-regexp) for accepted pattern formats.
*
* @param source - the original pattern of incoming paths
* @param destination - the target pattern to convert into
*/
function rewritePath(source, destination) {
	const matcher = (0, import_dist.match)(source, { decode: false });
	const compiler = (0, import_dist.compile)(destination, { encode: false });
	return { rewrite(pathname) {
		const result = matcher(pathname);
		if (!result) return false;
		return compiler(result.params);
	} };
}
function isMarkdownPreferred(request, options) {
	const { markdownMediaTypes = [
		"text/plain",
		"text/markdown",
		"text/x-markdown"
	] } = options ?? {};
	const mediaTypes = getNegotiator(request).mediaTypes();
	return markdownMediaTypes.some((type) => mediaTypes.includes(type));
}
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/error.mjs
var set;
if (process.env.NODE_ENV !== "production") set = /* @__PURE__ */ new Set();
function error(...messages) {
	if (process.env.NODE_ENV !== "production") {
		const messageKey = messages.join(" ");
		if (!set.has(messageKey)) {
			set.add(messageKey);
			console.error(`Base UI: ${messageKey}`);
		}
	}
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/internals/composite/root/CompositeRootContext.mjs
var CompositeRootContext = /*#__PURE__*/ React.createContext(void 0);
if (process.env.NODE_ENV !== "production") CompositeRootContext.displayName = "CompositeRootContext";
function useCompositeRootContext(optional = false) {
	const context = React.useContext(CompositeRootContext);
	if (context === void 0 && !optional) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: CompositeRootContext is missing. Composite parts must be placed within <Composite.Root>." : formatErrorMessage(16));
	return context;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/utils/useFocusableWhenDisabled.mjs
function useFocusableWhenDisabled(parameters) {
	const { focusableWhenDisabled, disabled, composite = false, tabIndex: tabIndexProp = 0, isNativeButton } = parameters;
	const isFocusableComposite = composite && focusableWhenDisabled !== false;
	const isNonFocusableComposite = composite && focusableWhenDisabled === false;
	return { props: React.useMemo(() => {
		const additionalProps = { onKeyDown(event) {
			if (disabled && focusableWhenDisabled && event.key !== "Tab") event.preventDefault();
		} };
		if (!composite) {
			additionalProps.tabIndex = tabIndexProp;
			if (!isNativeButton && disabled) additionalProps.tabIndex = focusableWhenDisabled ? tabIndexProp : -1;
		}
		if (isNativeButton && (focusableWhenDisabled || isFocusableComposite) || !isNativeButton && disabled) additionalProps["aria-disabled"] = disabled;
		if (isNativeButton && (!focusableWhenDisabled || isNonFocusableComposite)) additionalProps.disabled = disabled;
		return additionalProps;
	}, [
		composite,
		disabled,
		focusableWhenDisabled,
		isFocusableComposite,
		isNonFocusableComposite,
		isNativeButton,
		tabIndexProp
	]) };
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/internals/use-button/useButton.mjs
function useButton(parameters = {}) {
	const { disabled = false, focusableWhenDisabled, tabIndex = 0, native: isNativeButton = true, composite: compositeProp } = parameters;
	const elementRef = React.useRef(null);
	const compositeRootContext = useCompositeRootContext(true);
	const isCompositeItem = compositeProp ?? compositeRootContext !== void 0;
	const { props: focusableWhenDisabledProps } = useFocusableWhenDisabled({
		focusableWhenDisabled,
		disabled,
		composite: isCompositeItem,
		tabIndex,
		isNativeButton
	});
	if (process.env.NODE_ENV !== "production") React.useEffect(() => {
		if (!elementRef.current) return;
		const isButtonTag = isButtonElement(elementRef.current);
		if (isNativeButton) {
			if (!isButtonTag) error(`A component that acts as a button expected a native <button> because the \`nativeButton\` prop is true. Rendering a non-<button> removes native button semantics, which can impact forms and accessibility. Use a real <button> in the \`render\` prop, or set \`nativeButton\` to \`false\`.${SafeReact.captureOwnerStack?.() || ""}`);
		} else if (isButtonTag) error(`A component that acts as a button expected a non-<button> because the \`nativeButton\` prop is false. Rendering a <button> keeps native behavior while Base UI applies non-native attributes and handlers, which can add unintended extra attributes (such as \`role\` or \`aria-disabled\`). Use a non-<button> in the \`render\` prop, or set \`nativeButton\` to \`true\`.${SafeReact.captureOwnerStack?.() || ""}`);
	}, [isNativeButton]);
	const updateDisabled = React.useCallback(() => {
		const element = elementRef.current;
		if (!isButtonElement(element)) return;
		if (isCompositeItem && disabled && focusableWhenDisabledProps.disabled === void 0 && element.disabled) element.disabled = false;
	}, [
		disabled,
		focusableWhenDisabledProps.disabled,
		isCompositeItem
	]);
	useIsoLayoutEffect(updateDisabled, [updateDisabled]);
	return {
		getButtonProps: React.useCallback((externalProps = {}) => {
			const { onClick: externalOnClick, onMouseDown: externalOnMouseDown, onKeyUp: externalOnKeyUp, onKeyDown: externalOnKeyDown, onPointerDown: externalOnPointerDown, ...otherExternalProps } = externalProps;
			return mergeProps({
				onClick(event) {
					if (disabled) {
						event.preventDefault();
						return;
					}
					externalOnClick?.(event);
				},
				onMouseDown(event) {
					if (!disabled) externalOnMouseDown?.(event);
				},
				onKeyDown(event) {
					if (disabled) return;
					makeEventPreventable(event);
					externalOnKeyDown?.(event);
					if (event.baseUIHandlerPrevented) return;
					const isCurrentTarget = event.target === event.currentTarget;
					const currentTarget = event.currentTarget;
					const isButton = isButtonElement(currentTarget);
					const isLink = !isNativeButton && isValidLinkElement(currentTarget);
					const shouldClick = isCurrentTarget && (isNativeButton ? isButton : !isLink);
					const isEnterKey = event.key === "Enter";
					const isSpaceKey = event.key === " ";
					const role = currentTarget.getAttribute("role");
					const isTextNavigationRole = role?.startsWith("menuitem") || role === "option" || role === "gridcell";
					if (isCurrentTarget && isCompositeItem && isSpaceKey) {
						if (event.defaultPrevented && isTextNavigationRole) return;
						event.preventDefault();
						if (isLink || isNativeButton && isButton) {
							currentTarget.click();
							event.preventBaseUIHandler();
						} else if (shouldClick) {
							externalOnClick?.(event);
							event.preventBaseUIHandler();
						}
						return;
					}
					if (shouldClick) {
						if (!isNativeButton && (isSpaceKey || isEnterKey)) event.preventDefault();
						if (!isNativeButton && isEnterKey) externalOnClick?.(event);
					}
				},
				onKeyUp(event) {
					if (disabled) return;
					makeEventPreventable(event);
					externalOnKeyUp?.(event);
					if (event.target === event.currentTarget && isNativeButton && isCompositeItem && isButtonElement(event.currentTarget) && event.key === " ") {
						event.preventDefault();
						return;
					}
					if (event.baseUIHandlerPrevented) return;
					if (event.target === event.currentTarget && !isNativeButton && !isCompositeItem && event.key === " ") externalOnClick?.(event);
				},
				onPointerDown(event) {
					if (disabled) {
						event.preventDefault();
						return;
					}
					externalOnPointerDown?.(event);
				}
			}, isNativeButton ? { type: "button" } : { role: "button" }, focusableWhenDisabledProps, otherExternalProps);
		}, [
			disabled,
			focusableWhenDisabledProps,
			isCompositeItem,
			isNativeButton
		]),
		buttonRef: useStableCallback((element) => {
			elementRef.current = element;
			updateDisabled();
		})
	};
}
function isButtonElement(elem) {
	return isHTMLElement(elem) && elem.tagName === "BUTTON";
}
function isValidLinkElement(elem) {
	return Boolean(elem?.tagName === "A" && elem?.href);
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/floating-ui-react/hooks/useHoverShared.mjs
function resolveValue(value, pointerType) {
	if (pointerType != null && !isMouseLikePointerType(pointerType)) return 0;
	if (typeof value === "function") return value();
	return value;
}
function getDelay(value, prop, pointerType) {
	const result = resolveValue(value, pointerType);
	if (typeof result === "number") return result;
	return result?.[prop];
}
function getRestMs(value) {
	if (typeof value === "function") return value();
	return value;
}
function isClickLikeOpenEvent(openEventType, interactedInside) {
	return interactedInside || openEventType === "click" || openEventType === "mousedown";
}
function isHoverOpenEvent(openEventType) {
	return openEventType?.includes("mouse") && openEventType !== "mousedown";
}
//#endregion
//#region node_modules/.pnpm/@floating-ui+utils@0.2.12/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
/**
* Custom positioning reference element.
* @see https://floating-ui.com/docs/virtual-elements
*/
var sides = [
	"top",
	"right",
	"bottom",
	"left"
];
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v) => ({
	x: v,
	y: v
});
var oppositeSideMap = {
	left: "right",
	right: "left",
	bottom: "top",
	top: "bottom"
};
function clamp$2(start, value, end) {
	return max(start, min(value, end));
}
function evaluate(value, param) {
	return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
	return placement.split("-")[0];
}
function getAlignment(placement) {
	return placement.split("-")[1];
}
function getOppositeAxis(axis) {
	return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
	return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
	const firstChar = placement[0];
	return firstChar === "t" || firstChar === "b" ? "y" : "x";
}
function getAlignmentAxis(placement) {
	return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
	if (rtl === void 0) rtl = false;
	const alignment = getAlignment(placement);
	const alignmentAxis = getAlignmentAxis(placement);
	const length = getAxisLength(alignmentAxis);
	let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
	if (rects.reference[length] > rects.floating[length]) mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
	return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
	const oppositePlacement = getOppositePlacement(placement);
	return [
		getOppositeAlignmentPlacement(placement),
		oppositePlacement,
		getOppositeAlignmentPlacement(oppositePlacement)
	];
}
function getOppositeAlignmentPlacement(placement) {
	return placement.includes("start") ? placement.replace("start", "end") : placement.replace("end", "start");
}
var lrPlacement = ["left", "right"];
var rlPlacement = ["right", "left"];
var tbPlacement = ["top", "bottom"];
var btPlacement = ["bottom", "top"];
function getSideList(side, isStart, rtl) {
	switch (side) {
		case "top":
		case "bottom":
			if (rtl) return isStart ? rlPlacement : lrPlacement;
			return isStart ? lrPlacement : rlPlacement;
		case "left":
		case "right": return isStart ? tbPlacement : btPlacement;
		default: return [];
	}
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
	const alignment = getAlignment(placement);
	let list = getSideList(getSide(placement), direction === "start", rtl);
	if (alignment) {
		list = list.map((side) => side + "-" + alignment);
		if (flipAlignment) list = list.concat(list.map(getOppositeAlignmentPlacement));
	}
	return list;
}
function getOppositePlacement(placement) {
	const side = getSide(placement);
	return oppositeSideMap[side] + placement.slice(side.length);
}
function expandPaddingObject(padding) {
	var _padding$top, _padding$right, _padding$bottom, _padding$left;
	return {
		top: (_padding$top = padding.top) != null ? _padding$top : 0,
		right: (_padding$right = padding.right) != null ? _padding$right : 0,
		bottom: (_padding$bottom = padding.bottom) != null ? _padding$bottom : 0,
		left: (_padding$left = padding.left) != null ? _padding$left : 0
	};
}
function getPaddingObject(padding) {
	return typeof padding !== "number" ? expandPaddingObject(padding) : {
		top: padding,
		right: padding,
		bottom: padding,
		left: padding
	};
}
function rectToClientRect(rect) {
	const { x, y, width, height } = rect;
	return {
		width,
		height,
		top: y,
		left: x,
		right: x + width,
		bottom: y + height,
		x,
		y
	};
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/floating-ui-react/hooks/useClick.mjs
/**
* Opens or closes the floating element when clicking the reference element.
* @see https://floating-ui.com/docs/useClick
*/
function useClick(context, props = {}) {
	const { enabled = true, event: eventOption = "click", toggle = true, ignoreMouse = false, stickIfOpen = true, touchOpenDelay = 0, reason = triggerPress } = props;
	const store = "rootStore" in context ? context.rootStore : context;
	const dataRef = store.context.dataRef;
	const pointerTypeRef = React.useRef(void 0);
	const frame = useAnimationFrame();
	const touchOpenTimeout = useTimeout();
	const reference = React.useMemo(() => {
		function setOpenWithTouchDelay(nextOpen, nativeEvent, target, pointerType) {
			const details = createChangeEventDetails(reason, nativeEvent, target);
			if (nextOpen && pointerType === "touch" && touchOpenDelay > 0) touchOpenTimeout.start(touchOpenDelay, () => {
				store.setOpen(true, details);
			});
			else store.setOpen(nextOpen, details);
		}
		function getNextOpen(open, currentTarget, isClickLikeOpenEvent) {
			const openEvent = dataRef.current.openEvent;
			const hasClickedOnInactiveTrigger = store.select("domReferenceElement") !== currentTarget;
			if (open && hasClickedOnInactiveTrigger) return true;
			if (!open) return true;
			if (!toggle) return true;
			if (openEvent && stickIfOpen) return !isClickLikeOpenEvent(openEvent.type);
			return false;
		}
		return {
			onPointerDown(event) {
				pointerTypeRef.current = event.pointerType;
			},
			onMouseDown(event) {
				const pointerType = pointerTypeRef.current;
				const nativeEvent = event.nativeEvent;
				const open = store.select("open");
				if (event.button !== 0 || eventOption === "click" || isMouseLikePointerType(pointerType, true) && ignoreMouse) return;
				const nextOpen = getNextOpen(open, event.currentTarget, (openEventType) => openEventType === "click" || openEventType === "mousedown");
				const target = getTarget(nativeEvent);
				if (isTypeableElement(target)) {
					setOpenWithTouchDelay(nextOpen, nativeEvent, target, pointerType);
					return;
				}
				const eventCurrentTarget = event.currentTarget;
				frame.request(() => {
					setOpenWithTouchDelay(nextOpen, nativeEvent, eventCurrentTarget, pointerType);
				});
			},
			onClick(event) {
				if (eventOption === "mousedown-only") return;
				const pointerType = pointerTypeRef.current;
				if (eventOption === "mousedown" && pointerType) {
					pointerTypeRef.current = void 0;
					return;
				}
				if (isMouseLikePointerType(pointerType, true) && ignoreMouse) return;
				setOpenWithTouchDelay(getNextOpen(store.select("open"), event.currentTarget, (openEventType) => openEventType === "click" || openEventType === "mousedown" || openEventType === "keydown" || openEventType === "keyup"), event.nativeEvent, event.currentTarget, pointerType);
			},
			onKeyDown() {
				pointerTypeRef.current = void 0;
			}
		};
	}, [
		dataRef,
		eventOption,
		ignoreMouse,
		reason,
		store,
		stickIfOpen,
		toggle,
		frame,
		touchOpenTimeout,
		touchOpenDelay
	]);
	return React.useMemo(() => enabled ? { reference } : EMPTY_OBJECT, [enabled, reference]);
}
//#endregion
//#region node_modules/.pnpm/@floating-ui+core@1.8.0/node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
	let { reference, floating } = _ref;
	const sideAxis = getSideAxis(placement);
	const alignmentAxis = getAlignmentAxis(placement);
	const alignLength = getAxisLength(alignmentAxis);
	const side = getSide(placement);
	const isVertical = sideAxis === "y";
	const commonX = reference.x + reference.width / 2 - floating.width / 2;
	const commonY = reference.y + reference.height / 2 - floating.height / 2;
	const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
	let coords;
	switch (side) {
		case "top":
			coords = {
				x: commonX,
				y: reference.y - floating.height
			};
			break;
		case "bottom":
			coords = {
				x: commonX,
				y: reference.y + reference.height
			};
			break;
		case "right":
			coords = {
				x: reference.x + reference.width,
				y: commonY
			};
			break;
		case "left":
			coords = {
				x: reference.x - floating.width,
				y: commonY
			};
			break;
		default: coords = {
			x: reference.x,
			y: reference.y
		};
	}
	const alignment = getAlignment(placement);
	if (alignment) coords[alignmentAxis] += commonAlign * (alignment === "end" ? 1 : -1) * (rtl && isVertical ? -1 : 1);
	return coords;
}
/**
* Resolves with an object of overflow side offsets that determine how much the
* element is overflowing a given clipping boundary on each side.
* - positive = overflowing the boundary by that number of pixels
* - negative = how many pixels left before it will overflow
* - 0 = lies flush with the boundary
* @see https://floating-ui.com/docs/detectOverflow
*/
async function detectOverflow(state, options) {
	var _await$platform$isEle;
	if (options === void 0) options = {};
	const { x, y, platform, rects, elements, strategy } = state;
	const { boundary = "clippingAncestors", rootBoundary = "viewport", elementContext = "floating", altBoundary = false, padding = 0 } = evaluate(options, state);
	const paddingObject = getPaddingObject(padding);
	const element = elements[altBoundary ? elementContext === "floating" ? "reference" : "floating" : elementContext];
	const clippingClientRect = rectToClientRect(await platform.getClippingRect({
		element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating)),
		boundary,
		rootBoundary,
		strategy
	}));
	const rect = elementContext === "floating" ? {
		x,
		y,
		width: rects.floating.width,
		height: rects.floating.height
	} : rects.reference;
	const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
	const offsetScale = await (platform.isElement == null ? void 0 : platform.isElement(offsetParent)) && await (platform.getScale == null ? void 0 : platform.getScale(offsetParent)) || {
		x: 1,
		y: 1
	};
	const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
		elements,
		rect,
		offsetParent,
		strategy
	}) : rect);
	return {
		top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
		bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
		left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
		right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
	};
}
var MAX_RESET_COUNT = 50;
/**
* Computes the `x` and `y` coordinates that will place the floating element
* next to a given reference element.
*
* This export does not have any `platform` interface logic. You will need to
* write one for the platform you are using Floating UI with.
*/
var computePosition$1 = async (reference, floating, config) => {
	const { placement = "bottom", strategy = "absolute", middleware = [], platform } = config;
	const platformWithDetectOverflow = platform.detectOverflow ? platform : {
		...platform,
		detectOverflow
	};
	const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
	let rects = await platform.getElementRects({
		reference,
		floating,
		strategy
	});
	let { x, y } = computeCoordsFromPlacement(rects, placement, rtl);
	let statefulPlacement = placement;
	let resetCount = 0;
	const middlewareData = {};
	for (let i = 0; i < middleware.length; i++) {
		const currentMiddleware = middleware[i];
		if (!currentMiddleware) continue;
		const { name, fn } = currentMiddleware;
		const { x: nextX, y: nextY, data, reset } = await fn({
			x,
			y,
			initialPlacement: placement,
			placement: statefulPlacement,
			strategy,
			middlewareData,
			rects,
			platform: platformWithDetectOverflow,
			elements: {
				reference,
				floating
			}
		});
		x = nextX != null ? nextX : x;
		y = nextY != null ? nextY : y;
		middlewareData[name] = {
			...middlewareData[name],
			...data
		};
		if (reset && resetCount < MAX_RESET_COUNT) {
			resetCount++;
			if (typeof reset === "object") {
				if (reset.placement) statefulPlacement = reset.placement;
				if (reset.rects) rects = reset.rects === true ? await platform.getElementRects({
					reference,
					floating,
					strategy
				}) : reset.rects;
				({x, y} = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
			}
			i = -1;
		}
	}
	return {
		x,
		y,
		placement: statefulPlacement,
		strategy,
		middlewareData
	};
};
/**
* Optimizes the visibility of the floating element by flipping the `placement`
* in order to keep it in view when the preferred placement(s) will overflow the
* clipping boundary. Alternative to `autoPlacement`.
* @see https://floating-ui.com/docs/flip
*/
var flip$2 = function(options) {
	if (options === void 0) options = {};
	return {
		name: "flip",
		options,
		async fn(state) {
			var _middlewareData$arrow, _middlewareData$flip;
			const { placement, middlewareData, rects, initialPlacement, platform, elements } = state;
			const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true, fallbackPlacements: specifiedFallbackPlacements, fallbackStrategy = "bestFit", fallbackAxisSideDirection = "none", flipAlignment = true, ...detectOverflowOptions } = evaluate(options, state);
			if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) return {};
			const side = getSide(placement);
			const initialSideAxis = getSideAxis(initialPlacement);
			const isBasePlacement = getSide(initialPlacement) === initialPlacement;
			const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
			const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
			const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
			if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
			const placements = [initialPlacement, ...fallbackPlacements];
			const overflow = await platform.detectOverflow(state, detectOverflowOptions);
			const overflows = [];
			let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
			if (checkMainAxis) overflows.push(overflow[side]);
			if (checkCrossAxis) {
				const sides = getAlignmentSides(placement, rects, rtl);
				overflows.push(overflow[sides[0]], overflow[sides[1]]);
			}
			overflowsData = [...overflowsData, {
				placement,
				overflows
			}];
			if (!overflows.every((side) => side <= 0)) {
				var _middlewareData$flip2, _overflowsData$filter;
				const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
				const nextPlacement = placements[nextIndex];
				if (nextPlacement) {
					if (!(checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false) || overflowsData.every((d) => getSideAxis(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) return {
						data: {
							index: nextIndex,
							overflows: overflowsData
						},
						reset: { placement: nextPlacement }
					};
				}
				let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
				if (!resetPlacement) switch (fallbackStrategy) {
					case "bestFit": {
						var _overflowsData$filter2;
						const placement = (_overflowsData$filter2 = overflowsData.filter((d) => {
							if (hasFallbackAxisSideDirection) {
								const currentSideAxis = getSideAxis(d.placement);
								return currentSideAxis === initialSideAxis || currentSideAxis === "y";
							}
							return true;
						}).map((d) => [d.placement, d.overflows.filter((overflow) => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
						if (placement) resetPlacement = placement;
						break;
					}
					case "initialPlacement": resetPlacement = initialPlacement;
				}
				if (placement !== resetPlacement) return { reset: { placement: resetPlacement } };
			}
			return {};
		}
	};
};
function getSideOffsets(overflow, rect) {
	return {
		top: overflow.top - rect.height,
		right: overflow.right - rect.width,
		bottom: overflow.bottom - rect.height,
		left: overflow.left - rect.width
	};
}
function isAnySideFullyClipped(overflow) {
	return sides.some((side) => overflow[side] >= 0);
}
/**
* Provides data to hide the floating element in applicable situations, such as
* when it is not in the same clipping context as the reference element.
* @see https://floating-ui.com/docs/hide
*/
var hide$3 = function(options) {
	if (options === void 0) options = {};
	return {
		name: "hide",
		options,
		async fn(state) {
			const { rects, platform } = state;
			const { strategy = "referenceHidden", ...detectOverflowOptions } = evaluate(options, state);
			switch (strategy) {
				case "referenceHidden": {
					const offsets = getSideOffsets(await platform.detectOverflow(state, {
						...detectOverflowOptions,
						elementContext: "reference"
					}), rects.reference);
					return { data: {
						referenceHiddenOffsets: offsets,
						referenceHidden: isAnySideFullyClipped(offsets)
					} };
				}
				case "escaped": {
					const offsets = getSideOffsets(await platform.detectOverflow(state, {
						...detectOverflowOptions,
						altBoundary: true
					}), rects.floating);
					return { data: {
						escapedOffsets: offsets,
						escaped: isAnySideFullyClipped(offsets)
					} };
				}
				default: return {};
			}
		}
	};
};
var originSides = /*#__PURE__*/ new Set(["left", "top"]);
async function convertValueToCoords(state, options) {
	const { placement, platform, elements } = state;
	const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
	const side = getSide(placement);
	const alignment = getAlignment(placement);
	const isVertical = getSideAxis(placement) === "y";
	const mainAxisMulti = originSides.has(side) ? -1 : 1;
	const crossAxisMulti = rtl && isVertical ? -1 : 1;
	const rawValue = evaluate(options, state);
	let { mainAxis, crossAxis, alignmentAxis } = typeof rawValue === "number" ? {
		mainAxis: rawValue,
		crossAxis: 0,
		alignmentAxis: null
	} : {
		mainAxis: rawValue.mainAxis || 0,
		crossAxis: rawValue.crossAxis || 0,
		alignmentAxis: rawValue.alignmentAxis
	};
	if (alignment && typeof alignmentAxis === "number") crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
	return isVertical ? {
		x: crossAxis * crossAxisMulti,
		y: mainAxis * mainAxisMulti
	} : {
		x: mainAxis * mainAxisMulti,
		y: crossAxis * crossAxisMulti
	};
}
/**
* Modifies the placement by translating the floating element along the
* specified axes.
* A number (shorthand for `mainAxis` or distance), or an axes configuration
* object may be passed.
* @see https://floating-ui.com/docs/offset
*/
var offset$2 = function(options) {
	if (options === void 0) options = 0;
	return {
		name: "offset",
		options,
		async fn(state) {
			var _middlewareData$offse, _middlewareData$arrow;
			const { x, y, placement, middlewareData } = state;
			const diffCoords = await convertValueToCoords(state, options);
			if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) return {};
			return {
				x: x + diffCoords.x,
				y: y + diffCoords.y,
				data: {
					...diffCoords,
					placement
				}
			};
		}
	};
};
/**
* Optimizes the visibility of the floating element by shifting it in order to
* keep it in view when it will overflow the clipping boundary.
* @see https://floating-ui.com/docs/shift
*/
var shift$2 = function(options) {
	if (options === void 0) options = {};
	return {
		name: "shift",
		options,
		async fn(state) {
			const { x, y, placement, platform } = state;
			const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = false, limiter = { fn: (_ref) => {
				let { x, y } = _ref;
				return {
					x,
					y
				};
			} }, ...detectOverflowOptions } = evaluate(options, state);
			const coords = {
				x,
				y
			};
			const overflow = await platform.detectOverflow(state, detectOverflowOptions);
			const crossAxis = getSideAxis(placement);
			const mainAxis = getOppositeAxis(crossAxis);
			let mainAxisCoord = coords[mainAxis];
			let crossAxisCoord = coords[crossAxis];
			const clampCoord = (axis, coord) => clamp$2(coord + overflow[axis === "y" ? "top" : "left"], coord, coord - overflow[axis === "y" ? "bottom" : "right"]);
			if (checkMainAxis) mainAxisCoord = clampCoord(mainAxis, mainAxisCoord);
			if (checkCrossAxis) crossAxisCoord = clampCoord(crossAxis, crossAxisCoord);
			const limitedCoords = limiter.fn({
				...state,
				[mainAxis]: mainAxisCoord,
				[crossAxis]: crossAxisCoord
			});
			return {
				...limitedCoords,
				data: {
					x: limitedCoords.x - x,
					y: limitedCoords.y - y,
					enabled: {
						[mainAxis]: checkMainAxis,
						[crossAxis]: checkCrossAxis
					}
				}
			};
		}
	};
};
/**
* Built-in `limiter` that will stop `shift()` at a certain point.
*/
var limitShift$2 = function(options) {
	if (options === void 0) options = {};
	return {
		options,
		fn(state) {
			var _rawOffset$mainAxis, _rawOffset$crossAxis;
			const { x, y, placement, rects, middlewareData } = state;
			const { offset = 0, mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true } = evaluate(options, state);
			const coords = {
				x,
				y
			};
			const crossAxis = getSideAxis(placement);
			const mainAxis = getOppositeAxis(crossAxis);
			let mainAxisCoord = coords[mainAxis];
			let crossAxisCoord = coords[crossAxis];
			const rawOffset = evaluate(offset, state);
			const computedOffset = typeof rawOffset === "number" ? {
				mainAxis: rawOffset,
				crossAxis: 0
			} : {
				mainAxis: (_rawOffset$mainAxis = rawOffset.mainAxis) != null ? _rawOffset$mainAxis : 0,
				crossAxis: (_rawOffset$crossAxis = rawOffset.crossAxis) != null ? _rawOffset$crossAxis : 0
			};
			if (checkMainAxis) {
				const len = mainAxis === "y" ? "height" : "width";
				const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
				const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
				if (mainAxisCoord < limitMin) mainAxisCoord = limitMin;
				else if (mainAxisCoord > limitMax) mainAxisCoord = limitMax;
			}
			if (checkCrossAxis) {
				var _middlewareData$offse, _middlewareData$offse2;
				const len = mainAxis === "y" ? "width" : "height";
				const isOriginSide = originSides.has(getSide(placement));
				const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
				const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
				if (crossAxisCoord < limitMin) crossAxisCoord = limitMin;
				else if (crossAxisCoord > limitMax) crossAxisCoord = limitMax;
			}
			return {
				[mainAxis]: mainAxisCoord,
				[crossAxis]: crossAxisCoord
			};
		}
	};
};
/**
* Provides data that allows you to change the size of the floating element —
* for instance, prevent it from overflowing the clipping boundary or match the
* width of the reference element.
* @see https://floating-ui.com/docs/size
*/
var size$2 = function(options) {
	if (options === void 0) options = {};
	return {
		name: "size",
		options,
		async fn(state) {
			const { placement, rects, platform, elements } = state;
			const { apply = () => {}, ...detectOverflowOptions } = evaluate(options, state);
			const overflow = await platform.detectOverflow(state, detectOverflowOptions);
			const side = getSide(placement);
			const alignment = getAlignment(placement);
			const isYAxis = getSideAxis(placement) === "y";
			const { width, height } = rects.floating;
			let heightSide;
			let widthSide;
			if (side === "top" || side === "bottom") {
				heightSide = side;
				widthSide = alignment === (await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
			} else {
				widthSide = side;
				heightSide = alignment === "end" ? "top" : "bottom";
			}
			const maximumClippingHeight = height - overflow.top - overflow.bottom;
			const maximumClippingWidth = width - overflow.left - overflow.right;
			const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
			const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
			const shiftData = state.middlewareData.shift;
			const noShift = !shiftData;
			let availableHeight = overflowAvailableHeight;
			let availableWidth = overflowAvailableWidth;
			if (shiftData != null && shiftData.enabled.x) availableWidth = maximumClippingWidth;
			if (shiftData != null && shiftData.enabled.y) availableHeight = maximumClippingHeight;
			if (noShift && !alignment) {
				if (isYAxis) availableWidth = width - 2 * max(overflow.left, overflow.right);
				else availableHeight = height - 2 * max(overflow.top, overflow.bottom);
			}
			await apply({
				...state,
				availableWidth,
				availableHeight
			});
			const nextDimensions = await platform.getDimensions(elements.floating);
			if (width !== nextDimensions.width || height !== nextDimensions.height) return { reset: { rects: true } };
			return {};
		}
	};
};
//#endregion
//#region node_modules/.pnpm/@floating-ui+dom@1.8.0/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions$1(element) {
	const css = getComputedStyle$1(element);
	let width = parseFloat(css.width) || 0;
	let height = parseFloat(css.height) || 0;
	const hasOffset = isHTMLElement(element);
	const offsetWidth = hasOffset ? element.offsetWidth : width;
	const offsetHeight = hasOffset ? element.offsetHeight : height;
	const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
	if (shouldFallback) {
		width = offsetWidth;
		height = offsetHeight;
	}
	return {
		width,
		height,
		$: shouldFallback
	};
}
function unwrapElement(element) {
	return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
	const domElement = unwrapElement(element);
	if (!isHTMLElement(domElement)) return createCoords(1);
	const rect = domElement.getBoundingClientRect();
	const { width, height, $ } = getCssDimensions$1(domElement);
	let x = ($ ? round(rect.width) : rect.width) / width;
	let y = ($ ? round(rect.height) : rect.height) / height;
	if (!x || !Number.isFinite(x)) x = 1;
	if (!y || !Number.isFinite(y)) y = 1;
	return {
		x,
		y
	};
}
var noOffsets = /*#__PURE__*/ createCoords(0);
function getVisualOffsets(element) {
	const win = getWindow(element);
	if (!isWebKit() || !win.visualViewport) return noOffsets;
	return {
		x: win.visualViewport.offsetLeft,
		y: win.visualViewport.offsetTop
	};
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
	if (isFixed === void 0) isFixed = false;
	return !!floatingOffsetParent && isFixed && floatingOffsetParent === getWindow(element);
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
	if (includeScale === void 0) includeScale = false;
	if (isFixedStrategy === void 0) isFixedStrategy = false;
	const clientRect = element.getBoundingClientRect();
	const domElement = unwrapElement(element);
	let scale = createCoords(1);
	if (includeScale) {
		if (offsetParent) {
			if (isElement(offsetParent)) scale = getScale(offsetParent);
		} else scale = getScale(element);
	}
	const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
	let x = (clientRect.left + visualOffsets.x) / scale.x;
	let y = (clientRect.top + visualOffsets.y) / scale.y;
	let width = clientRect.width / scale.x;
	let height = clientRect.height / scale.y;
	if (domElement && offsetParent) {
		const win = getWindow(domElement);
		const offsetWin = isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
		let currentWin = win;
		let currentIFrame = getFrameElement(currentWin);
		while (currentIFrame && offsetWin !== currentWin) {
			const iframeScale = getScale(currentIFrame);
			const iframeRect = currentIFrame.getBoundingClientRect();
			const css = getComputedStyle$1(currentIFrame);
			const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
			const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
			x *= iframeScale.x;
			y *= iframeScale.y;
			width *= iframeScale.x;
			height *= iframeScale.y;
			x += left;
			y += top;
			currentWin = getWindow(currentIFrame);
			currentIFrame = getFrameElement(currentWin);
		}
	}
	return rectToClientRect({
		width,
		height,
		x,
		y
	});
}
function getWindowScrollBarX(element, rect) {
	const leftScroll = getNodeScroll(element).scrollLeft;
	if (!rect) return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
	return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
	const htmlRect = documentElement.getBoundingClientRect();
	return {
		x: htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect),
		y: htmlRect.top + scroll.scrollTop
	};
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
	let { elements, rect, offsetParent, strategy } = _ref;
	const isFixed = strategy === "fixed";
	const documentElement = getDocumentElement(offsetParent);
	const topLayer = elements ? isTopLayer(elements.floating) : false;
	if (offsetParent === documentElement || topLayer && isFixed) return rect;
	let scroll = {
		scrollLeft: 0,
		scrollTop: 0
	};
	let scale = createCoords(1);
	const offsets = createCoords(0);
	const isOffsetParentAnElement = isHTMLElement(offsetParent);
	if (isOffsetParentAnElement || !isFixed) {
		if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) scroll = getNodeScroll(offsetParent);
		if (isOffsetParentAnElement) {
			const offsetRect = getBoundingClientRect(offsetParent);
			scale = getScale(offsetParent);
			offsets.x = offsetRect.x + offsetParent.clientLeft;
			offsets.y = offsetRect.y + offsetParent.clientTop;
		}
	}
	const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
	return {
		width: rect.width * scale.x,
		height: rect.height * scale.y,
		x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
		y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
	};
}
function getClientRects(element) {
	return element.getClientRects ? Array.from(element.getClientRects()) : [];
}
function getDocumentRect(html) {
	const scroll = getNodeScroll(html);
	const body = html.ownerDocument.body;
	const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
	const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
	let x = -scroll.scrollLeft + getWindowScrollBarX(html);
	const y = -scroll.scrollTop;
	if (getComputedStyle$1(body).direction === "rtl") x += max(html.clientWidth, body.clientWidth) - width;
	return {
		width,
		height,
		x,
		y
	};
}
var SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy, rootBoundary) {
	if (rootBoundary === void 0) rootBoundary = "viewport";
	const isLayoutViewport = rootBoundary === "layoutViewport";
	const win = getWindow(element);
	const html = getDocumentElement(element);
	const visualViewport = win.visualViewport;
	let width = html.clientWidth;
	let height = html.clientHeight;
	let x = 0;
	let y = 0;
	if (visualViewport) {
		const layoutRelativeClientCoords = !isWebKit() || strategy === "fixed";
		if (isLayoutViewport) {
			if (!layoutRelativeClientCoords) {
				x = -visualViewport.offsetLeft;
				y = -visualViewport.offsetTop;
			}
		} else {
			width = visualViewport.width;
			height = visualViewport.height;
			if (layoutRelativeClientCoords) {
				x = visualViewport.offsetLeft;
				y = visualViewport.offsetTop;
			}
		}
	}
	if (getWindowScrollBarX(html) <= 0) {
		const doc = html.ownerDocument;
		const body = doc.body;
		const bodyStyles = getComputedStyle(body);
		const bodyMarginInline = doc.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
		const reservedWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
		const gutter = getComputedStyle(html).scrollbarGutter === "stable both-edges" ? reservedWidth / 2 : reservedWidth;
		if (gutter <= SCROLLBAR_MAX) width -= gutter;
	}
	return {
		width,
		height,
		x,
		y
	};
}
function getInnerBoundingClientRect(element, strategy) {
	const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
	const top = clientRect.top + element.clientTop;
	const left = clientRect.left + element.clientLeft;
	const scale = getScale(element);
	return {
		width: element.clientWidth * scale.x,
		height: element.clientHeight * scale.y,
		x: left * scale.x,
		y: top * scale.y
	};
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
	let rect;
	if (clippingAncestor === "viewport" || clippingAncestor === "layoutViewport") rect = getViewportRect(element, strategy, clippingAncestor);
	else if (clippingAncestor === "document") rect = getDocumentRect(getDocumentElement(element));
	else if (isElement(clippingAncestor)) rect = getInnerBoundingClientRect(clippingAncestor, strategy);
	else {
		const visualOffsets = getVisualOffsets(element);
		rect = {
			x: clippingAncestor.x - visualOffsets.x,
			y: clippingAncestor.y - visualOffsets.y,
			width: clippingAncestor.width,
			height: clippingAncestor.height
		};
	}
	return rectToClientRect(rect);
}
function getClippingElementAncestors(element, cache) {
	const cachedResult = cache.get(element);
	if (cachedResult) return cachedResult;
	let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
	let lastKeptComputedStyle = null;
	const elementIsFixed = getComputedStyle$1(element).position === "fixed";
	let currentNode = elementIsFixed ? getParentNode(element) : element;
	while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
		const computedStyle = getComputedStyle$1(currentNode);
		const currentNodeIsContaining = isContainingBlock(currentNode);
		const lastPosition = lastKeptComputedStyle ? lastKeptComputedStyle.position : elementIsFixed ? "fixed" : "";
		if (!currentNodeIsContaining && (lastPosition === "fixed" || lastPosition === "absolute" && computedStyle.position === "static")) result = result.filter((ancestor) => ancestor !== currentNode);
		else lastKeptComputedStyle = computedStyle;
		currentNode = getParentNode(currentNode);
	}
	cache.set(element, result);
	return result;
}
function getClippingRect(_ref) {
	let { element, boundary, rootBoundary, strategy } = _ref;
	const clippingAncestors = [...boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary), rootBoundary];
	const firstRect = getClientRectFromClippingAncestor(element, clippingAncestors[0], strategy);
	let top = firstRect.top;
	let right = firstRect.right;
	let bottom = firstRect.bottom;
	let left = firstRect.left;
	for (let i = 1; i < clippingAncestors.length; i++) {
		const rect = getClientRectFromClippingAncestor(element, clippingAncestors[i], strategy);
		top = max(rect.top, top);
		right = min(rect.right, right);
		bottom = min(rect.bottom, bottom);
		left = max(rect.left, left);
	}
	return {
		width: right - left,
		height: bottom - top,
		x: left,
		y: top
	};
}
function getDimensions$1(element) {
	const { width, height } = getCssDimensions$1(element);
	return {
		width,
		height
	};
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
	const isOffsetParentAnElement = isHTMLElement(offsetParent);
	const documentElement = getDocumentElement(offsetParent);
	const isFixed = strategy === "fixed";
	const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
	let scroll = {
		scrollLeft: 0,
		scrollTop: 0
	};
	const offsets = createCoords(0);
	if (isOffsetParentAnElement || !isFixed) {
		if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) scroll = getNodeScroll(offsetParent);
		if (isOffsetParentAnElement) {
			const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
			offsets.x = offsetRect.x + offsetParent.clientLeft;
			offsets.y = offsetRect.y + offsetParent.clientTop;
		}
	}
	if (!isOffsetParentAnElement && documentElement) offsets.x = getWindowScrollBarX(documentElement);
	const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
	return {
		x: rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x,
		y: rect.top + scroll.scrollTop - offsets.y - htmlOffset.y,
		width: rect.width,
		height: rect.height
	};
}
function isStaticPositioned(element) {
	return getComputedStyle$1(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
	if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") return null;
	if (polyfill) return polyfill(element);
	let rawOffsetParent = element.offsetParent;
	if (getDocumentElement(element) === rawOffsetParent) rawOffsetParent = rawOffsetParent.ownerDocument.body;
	return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
	const win = getWindow(element);
	if (isTopLayer(element)) return win;
	if (!isHTMLElement(element)) {
		let svgOffsetParent = getParentNode(element);
		while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
			if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) return svgOffsetParent;
			svgOffsetParent = getParentNode(svgOffsetParent);
		}
		return win;
	}
	let offsetParent = getTrueOffsetParent(element, polyfill);
	while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) offsetParent = getTrueOffsetParent(offsetParent, polyfill);
	if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) return win;
	return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data) {
	const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
	const getDimensionsFn = this.getDimensions;
	const floatingDimensions = await getDimensionsFn(data.floating);
	return {
		reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
		floating: {
			x: 0,
			y: 0,
			width: floatingDimensions.width,
			height: floatingDimensions.height
		}
	};
};
function isRTL(element) {
	return getComputedStyle$1(element).direction === "rtl";
}
var platform = {
	convertOffsetParentRelativeRectToViewportRelativeRect,
	getDocumentElement,
	getClippingRect,
	getOffsetParent,
	getElementRects,
	getClientRects,
	getDimensions: getDimensions$1,
	getScale,
	isElement,
	isRTL
};
function rectsAreEqual(a, b) {
	return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
function observeMove(element, onMove, ancestorResize) {
	let io = null;
	let timeoutId;
	const root = getDocumentElement(element);
	function cleanup() {
		var _io;
		clearTimeout(timeoutId);
		(_io = io) == null || _io.disconnect();
		io = null;
	}
	function refresh(skip, threshold) {
		if (skip === void 0) skip = false;
		if (threshold === void 0) threshold = 1;
		cleanup();
		const elementRectForRootMargin = element.getBoundingClientRect();
		const { left, top, width, height } = elementRectForRootMargin;
		if (!skip) onMove();
		if (!width || !height) return;
		const insetTop = floor(top);
		const insetRight = floor(root.clientWidth - (left + width));
		const insetBottom = floor(root.clientHeight - (top + height));
		const insetLeft = floor(left);
		const options = {
			rootMargin: -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px",
			threshold: max(0, min(1, threshold)) || 1
		};
		let isFirstUpdate = true;
		function handleObserve(entries) {
			const ratio = entries[0].intersectionRatio;
			if (!rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) return refresh();
			if (ratio !== threshold) {
				if (!isFirstUpdate) return refresh();
				if (!ratio) timeoutId = setTimeout(() => {
					refresh(false, 1e-7);
				}, 1e3);
				else refresh(false, ratio);
			}
			isFirstUpdate = false;
		}
		try {
			io = new IntersectionObserver(handleObserve, {
				...options,
				root: root.ownerDocument
			});
		} catch (_e) {
			io = new IntersectionObserver(handleObserve, options);
		}
		io.observe(element);
	}
	const win = getWindow(element);
	const handleResize = () => refresh(ancestorResize);
	win.addEventListener("resize", handleResize);
	refresh(true);
	return () => {
		win.removeEventListener("resize", handleResize);
		cleanup();
	};
}
/**
* Automatically updates the position of the floating element when necessary.
* Should only be called when the floating element is mounted on the DOM or
* visible on the screen.
* @returns cleanup function that should be invoked when the floating element is
* removed from the DOM or hidden from the screen.
* @see https://floating-ui.com/docs/autoUpdate
*/
function autoUpdate(reference, floating, update, options) {
	if (options === void 0) options = {};
	const { ancestorScroll = true, ancestorResize = true, elementResize = typeof ResizeObserver === "function", layoutShift = typeof IntersectionObserver === "function", animationFrame = false } = options;
	const referenceEl = unwrapElement(reference);
	const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...floating ? getOverflowAncestors(floating) : []] : [];
	ancestors.forEach((ancestor) => {
		ancestorScroll && ancestor.addEventListener("scroll", update);
		ancestorResize && ancestor.addEventListener("resize", update);
	});
	const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update, ancestorResize) : null;
	let reobserveFrame = -1;
	let resizeObserver = null;
	if (elementResize) {
		resizeObserver = new ResizeObserver((_ref) => {
			let [firstEntry] = _ref;
			if (firstEntry && firstEntry.target === referenceEl && resizeObserver && floating) {
				resizeObserver.unobserve(floating);
				cancelAnimationFrame(reobserveFrame);
				reobserveFrame = requestAnimationFrame(() => {
					var _resizeObserver;
					(_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
				});
			}
			update();
		});
		if (referenceEl && !animationFrame) resizeObserver.observe(referenceEl);
		if (floating) resizeObserver.observe(floating);
	}
	let frameId;
	let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
	if (animationFrame) frameLoop();
	function frameLoop() {
		const nextRefRect = getBoundingClientRect(reference);
		if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) update();
		prevRefRect = nextRefRect;
		frameId = requestAnimationFrame(frameLoop);
	}
	update();
	return () => {
		var _resizeObserver2;
		ancestors.forEach((ancestor) => {
			ancestorScroll && ancestor.removeEventListener("scroll", update);
			ancestorResize && ancestor.removeEventListener("resize", update);
		});
		cleanupIo?.();
		(_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
		resizeObserver = null;
		if (animationFrame) cancelAnimationFrame(frameId);
	};
}
/**
* Modifies the placement by translating the floating element along the
* specified axes.
* A number (shorthand for `mainAxis` or distance), or an axes configuration
* object may be passed.
* @see https://floating-ui.com/docs/offset
*/
var offset$1 = offset$2;
/**
* Optimizes the visibility of the floating element by shifting it in order to
* keep it in view when it will overflow the clipping boundary.
* @see https://floating-ui.com/docs/shift
*/
var shift$1 = shift$2;
/**
* Optimizes the visibility of the floating element by flipping the `placement`
* in order to keep it in view when the preferred placement(s) will overflow the
* clipping boundary. Alternative to `autoPlacement`.
* @see https://floating-ui.com/docs/flip
*/
var flip$1 = flip$2;
/**
* Provides data that allows you to change the size of the floating element —
* for instance, prevent it from overflowing the clipping boundary or match the
* width of the reference element.
* @see https://floating-ui.com/docs/size
*/
var size$1 = size$2;
/**
* Provides data to hide the floating element in applicable situations, such as
* when it is not in the same clipping context as the reference element.
* @see https://floating-ui.com/docs/hide
*/
var hide$2 = hide$3;
/**
* Built-in `limiter` that will stop `shift()` at a certain point.
*/
var limitShift$1 = limitShift$2;
/**
* Computes the `x` and `y` coordinates that will place the floating element
* next to a given reference element.
*/
var computePosition = (reference, floating, options) => {
	const cache = /* @__PURE__ */ new Map();
	const mergedOptions = options != null ? options : {};
	const platformWithCache = {
		...platform,
		...mergedOptions.platform,
		_c: cache
	};
	return computePosition$1(reference, floating, {
		...mergedOptions,
		platform: platformWithCache
	});
};
//#endregion
//#region node_modules/.pnpm/@floating-ui+react-dom@2.1.9_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var index = typeof document !== "undefined" ? useLayoutEffect : function noop() {};
function deepEqual(a, b) {
	if (a === b) return true;
	if (typeof a !== typeof b) return false;
	if (typeof a === "function" && a.toString() === b.toString()) return true;
	let length;
	let i;
	let keys;
	if (a && b && typeof a === "object") {
		if (Array.isArray(a)) {
			length = a.length;
			if (length !== b.length) return false;
			for (i = length; i-- !== 0;) if (!deepEqual(a[i], b[i])) return false;
			return true;
		}
		keys = Object.keys(a);
		length = keys.length;
		if (length !== Object.keys(b).length) return false;
		for (i = length; i-- !== 0;) if (!{}.hasOwnProperty.call(b, keys[i])) return false;
		for (i = length; i-- !== 0;) {
			const key = keys[i];
			if (key === "_owner" && a.$$typeof) continue;
			if (!deepEqual(a[key], b[key])) return false;
		}
		return true;
	}
	return a !== a && b !== b;
}
function getDPR(element) {
	if (typeof window === "undefined") return 1;
	return (element.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function roundByDPR(element, value) {
	const dpr = getDPR(element);
	return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
	const ref = React.useRef(value);
	index(() => {
		ref.current = value;
	});
	return ref;
}
/**
* Provides data to position a floating element.
* @see https://floating-ui.com/docs/useFloating
*/
function useFloating$1(options) {
	if (options === void 0) options = {};
	const { placement = "bottom", strategy = "absolute", middleware = [], platform, elements: { reference: externalReference, floating: externalFloating } = {}, transform = true, whileElementsMounted, open } = options;
	const [data, setData] = React.useState({
		x: 0,
		y: 0,
		strategy,
		placement,
		middlewareData: {},
		isPositioned: false
	});
	const [latestMiddleware, setLatestMiddleware] = React.useState(middleware);
	if (!deepEqual(latestMiddleware, middleware)) setLatestMiddleware(middleware);
	const [_reference, _setReference] = React.useState(null);
	const [_floating, _setFloating] = React.useState(null);
	const setReference = React.useCallback((node) => {
		if (node !== referenceRef.current) {
			referenceRef.current = node;
			_setReference(node);
		}
	}, []);
	const setFloating = React.useCallback((node) => {
		if (node !== floatingRef.current) {
			floatingRef.current = node;
			_setFloating(node);
		}
	}, []);
	const referenceEl = externalReference || _reference;
	const floatingEl = externalFloating || _floating;
	const referenceRef = React.useRef(null);
	const floatingRef = React.useRef(null);
	const dataRef = React.useRef(data);
	const hasWhileElementsMounted = whileElementsMounted != null;
	const whileElementsMountedRef = useLatestRef(whileElementsMounted);
	const platformRef = useLatestRef(platform);
	const openRef = useLatestRef(open);
	const update = React.useCallback(() => {
		if (!referenceRef.current || !floatingRef.current) return;
		const config = {
			placement,
			strategy,
			middleware: latestMiddleware
		};
		if (platformRef.current) config.platform = platformRef.current;
		computePosition(referenceRef.current, floatingRef.current, config).then((data) => {
			const fullData = {
				...data,
				isPositioned: openRef.current !== false
			};
			if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
				dataRef.current = fullData;
				ReactDOM$1.flushSync(() => {
					setData(fullData);
				});
			}
		});
	}, [
		latestMiddleware,
		placement,
		strategy,
		platformRef,
		openRef
	]);
	index(() => {
		if (open === false && dataRef.current.isPositioned) {
			dataRef.current.isPositioned = false;
			setData((data) => ({
				...data,
				isPositioned: false
			}));
		}
	}, [open]);
	const isMountedRef = React.useRef(false);
	index(() => {
		isMountedRef.current = true;
		return () => {
			isMountedRef.current = false;
		};
	}, []);
	index(() => {
		if (referenceEl) referenceRef.current = referenceEl;
		if (floatingEl) floatingRef.current = floatingEl;
		if (referenceEl && floatingEl) {
			if (whileElementsMountedRef.current) return whileElementsMountedRef.current(referenceEl, floatingEl, update);
			update();
		}
	}, [
		referenceEl,
		floatingEl,
		update,
		whileElementsMountedRef,
		hasWhileElementsMounted
	]);
	const refs = React.useMemo(() => ({
		reference: referenceRef,
		floating: floatingRef,
		setReference,
		setFloating
	}), [setReference, setFloating]);
	const elements = React.useMemo(() => ({
		reference: referenceEl,
		floating: floatingEl
	}), [referenceEl, floatingEl]);
	const floatingStyles = React.useMemo(() => {
		const initialStyles = {
			position: strategy,
			left: 0,
			top: 0
		};
		if (!elements.floating) return initialStyles;
		const x = roundByDPR(elements.floating, data.x);
		const y = roundByDPR(elements.floating, data.y);
		if (transform) return {
			...initialStyles,
			transform: "translate(" + x + "px, " + y + "px)",
			...getDPR(elements.floating) >= 1.5 && { willChange: "transform" }
		};
		return {
			position: strategy,
			left: x,
			top: y
		};
	}, [
		strategy,
		transform,
		elements.floating,
		data.x,
		data.y
	]);
	return React.useMemo(() => ({
		...data,
		update,
		refs,
		elements,
		floatingStyles
	}), [
		data,
		update,
		refs,
		elements,
		floatingStyles
	]);
}
/**
* Modifies the placement by translating the floating element along the
* specified axes.
* A number (shorthand for `mainAxis` or distance), or an axes configuration
* object may be passed.
* @see https://floating-ui.com/docs/offset
*/
var offset = (options, deps) => {
	const result = offset$1(options);
	return {
		name: result.name,
		fn: result.fn,
		options: [options, deps]
	};
};
/**
* Optimizes the visibility of the floating element by shifting it in order to
* keep it in view when it will overflow the clipping boundary.
* @see https://floating-ui.com/docs/shift
*/
var shift = (options, deps) => {
	const result = shift$1(options);
	return {
		name: result.name,
		fn: result.fn,
		options: [options, deps]
	};
};
/**
* Built-in `limiter` that will stop `shift()` at a certain point.
*/
var limitShift = (options, deps) => {
	return {
		fn: limitShift$1(options).fn,
		options: [options, deps]
	};
};
/**
* Optimizes the visibility of the floating element by flipping the `placement`
* in order to keep it in view when the preferred placement(s) will overflow the
* clipping boundary. Alternative to `autoPlacement`.
* @see https://floating-ui.com/docs/flip
*/
var flip = (options, deps) => {
	const result = flip$1(options);
	return {
		name: result.name,
		fn: result.fn,
		options: [options, deps]
	};
};
/**
* Provides data that allows you to change the size of the floating element —
* for instance, prevent it from overflowing the clipping boundary or match the
* width of the reference element.
* @see https://floating-ui.com/docs/size
*/
var size = (options, deps) => {
	const result = size$1(options);
	return {
		name: result.name,
		fn: result.fn,
		options: [options, deps]
	};
};
/**
* Provides data to hide the floating element in applicable situations, such as
* when it is not in the same clipping context as the reference element.
* @see https://floating-ui.com/docs/hide
*/
var hide$1 = (options, deps) => {
	const result = hide$2(options);
	return {
		name: result.name,
		fn: result.fn,
		options: [options, deps]
	};
};
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/floating-ui-react/hooks/useFloatingRootContext.mjs
function useFloatingRootContext(options) {
	const { open = false, onOpenChange, elements = {} } = options;
	const floatingId = useId$1();
	const nested = useFloatingParentNodeId() != null;
	if (process.env.NODE_ENV !== "production") {
		const optionDomReference = elements.reference;
		if (optionDomReference && !isElement(optionDomReference)) console.error("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `context.setPositionReference()`", "instead.");
	}
	const store = useRefWithInit(() => new FloatingRootStore({
		open,
		transitionStatus: void 0,
		onOpenChange,
		referenceElement: elements.reference ?? null,
		floatingElement: elements.floating ?? null,
		triggerElements: new PopupTriggerMap(),
		floatingId,
		syncOnly: false,
		nested
	})).current;
	useIsoLayoutEffect(() => {
		const valuesToSync = {
			open,
			floatingId
		};
		if (elements.reference !== void 0) {
			valuesToSync.referenceElement = elements.reference;
			valuesToSync.domReferenceElement = isElement(elements.reference) ? elements.reference : null;
		}
		if (elements.floating !== void 0) valuesToSync.floatingElement = elements.floating;
		store.update(valuesToSync);
	}, [
		open,
		floatingId,
		elements.reference,
		elements.floating,
		store
	]);
	store.context.onOpenChange = onOpenChange;
	store.context.nested = nested;
	return store;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/floating-ui-react/hooks/useFloating.mjs
/**
* Provides data to position a floating element and context to add interactions.
* @see https://floating-ui.com/docs/useFloating
*/
function useFloating(options = {}) {
	const { nodeId, externalTree } = options;
	const internalStore = useFloatingRootContext(options);
	const store = options.rootContext || internalStore;
	const referenceElement = store.useState("referenceElement");
	const floatingElement = store.useState("floatingElement");
	const domReferenceElement = store.useState("domReferenceElement");
	const open = store.useState("open");
	const floatingId = store.useState("floatingId");
	const [positionReference, setPositionReferenceRaw] = React.useState(null);
	const [localDomReference, setLocalDomReference] = React.useState(void 0);
	const [localFloatingElement, setLocalFloatingElement] = React.useState(void 0);
	const domReferenceRef = React.useRef(null);
	const tree = useFloatingTree(externalTree);
	const storeElements = React.useMemo(() => ({
		reference: referenceElement,
		floating: floatingElement,
		domReference: domReferenceElement
	}), [
		referenceElement,
		floatingElement,
		domReferenceElement
	]);
	const position = useFloating$1({
		...options,
		elements: {
			...storeElements,
			...positionReference && { reference: positionReference }
		}
	});
	const localDomReferenceElement = isElement(localDomReference) ? localDomReference : null;
	const syncedFloatingElement = localFloatingElement === void 0 ? store.state.floatingElement : localFloatingElement;
	store.useSyncedValue("referenceElement", localDomReference ?? null);
	store.useSyncedValue("domReferenceElement", localDomReference === void 0 ? domReferenceElement : localDomReferenceElement);
	store.useSyncedValue("floatingElement", syncedFloatingElement);
	const setPositionReference = React.useCallback((node) => {
		const computedPositionReference = isElement(node) ? {
			getBoundingClientRect: () => node.getBoundingClientRect(),
			getClientRects: () => node.getClientRects(),
			contextElement: node
		} : node;
		setPositionReferenceRaw(computedPositionReference);
		position.refs.setReference(computedPositionReference);
	}, [position.refs]);
	const setReference = React.useCallback((node) => {
		if (isElement(node) || node === null) {
			domReferenceRef.current = node;
			setLocalDomReference(node);
		}
		if (isElement(position.refs.reference.current) || position.refs.reference.current === null || node !== null && !isElement(node)) position.refs.setReference(node);
	}, [position.refs, setLocalDomReference]);
	const setFloating = React.useCallback((node) => {
		setLocalFloatingElement(node);
		position.refs.setFloating(node);
	}, [position.refs]);
	const refs = React.useMemo(() => ({
		...position.refs,
		setReference,
		setFloating,
		setPositionReference,
		domReference: domReferenceRef
	}), [
		position.refs,
		setReference,
		setFloating,
		setPositionReference
	]);
	const elements = React.useMemo(() => ({
		...position.elements,
		domReference: domReferenceElement
	}), [position.elements, domReferenceElement]);
	const context = React.useMemo(() => ({
		...position,
		dataRef: store.context.dataRef,
		open,
		onOpenChange: store.setOpen,
		events: store.context.events,
		floatingId,
		refs,
		elements,
		nodeId,
		rootStore: store
	}), [
		position,
		refs,
		elements,
		nodeId,
		store,
		open,
		floatingId
	]);
	useIsoLayoutEffect(() => {
		if (domReferenceElement) domReferenceRef.current = domReferenceElement;
	}, [domReferenceElement]);
	useIsoLayoutEffect(() => {
		store.context.dataRef.current.floatingContext = context;
		const node = tree?.nodesRef.current.find((n) => n.id === nodeId);
		if (node) node.context = context;
	});
	return React.useMemo(() => ({
		...position,
		context,
		refs,
		elements,
		rootStore: store
	}), [
		position,
		refs,
		elements,
		context,
		store
	]);
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/floating-ui-react/hooks/useHoverInteractionSharedState.mjs
var HoverInteraction = class HoverInteraction {
	constructor() {
		this.pointerType = void 0;
		this.interactedInside = false;
		this.handler = void 0;
		this.blockMouseMove = true;
		this.performedPointerEventsMutation = false;
		this.pointerEventsScopeElement = null;
		this.pointerEventsReferenceElement = null;
		this.pointerEventsFloatingElement = null;
		this.restTimeoutPending = false;
		this.openChangeTimeout = new Timeout();
		this.restTimeout = new Timeout();
		this.handleCloseOptions = void 0;
	}
	static create() {
		return new HoverInteraction();
	}
	dispose = () => {
		this.openChangeTimeout.clear();
		this.restTimeout.clear();
	};
	disposeEffect = () => {
		return this.dispose;
	};
};
var pointerEventsMutationOwnerByScopeElement = /* @__PURE__ */ new WeakMap();
function clearSafePolygonPointerEventsMutation(instance) {
	if (!instance.performedPointerEventsMutation) return;
	const scopeElement = instance.pointerEventsScopeElement;
	if (scopeElement && pointerEventsMutationOwnerByScopeElement.get(scopeElement) === instance) {
		instance.pointerEventsScopeElement?.style.removeProperty("pointer-events");
		instance.pointerEventsReferenceElement?.style.removeProperty("pointer-events");
		instance.pointerEventsFloatingElement?.style.removeProperty("pointer-events");
		pointerEventsMutationOwnerByScopeElement.delete(scopeElement);
	}
	instance.performedPointerEventsMutation = false;
	instance.pointerEventsScopeElement = null;
	instance.pointerEventsReferenceElement = null;
	instance.pointerEventsFloatingElement = null;
}
function applySafePolygonPointerEventsMutation(instance, options) {
	const { scopeElement, referenceElement, floatingElement } = options;
	const existingOwner = pointerEventsMutationOwnerByScopeElement.get(scopeElement);
	if (existingOwner && existingOwner !== instance) clearSafePolygonPointerEventsMutation(existingOwner);
	clearSafePolygonPointerEventsMutation(instance);
	instance.performedPointerEventsMutation = true;
	instance.pointerEventsScopeElement = scopeElement;
	instance.pointerEventsReferenceElement = referenceElement;
	instance.pointerEventsFloatingElement = floatingElement;
	pointerEventsMutationOwnerByScopeElement.set(scopeElement, instance);
	scopeElement.style.pointerEvents = "none";
	referenceElement.style.pointerEvents = "auto";
	floatingElement.style.pointerEvents = "auto";
}
function useHoverInteractionSharedState(store) {
	const data = store.context.dataRef.current;
	const instance = useRefWithInit(() => data.hoverInteractionState ?? HoverInteraction.create()).current;
	if (!data.hoverInteractionState) data.hoverInteractionState = instance;
	useOnMount(data.hoverInteractionState.disposeEffect);
	return data.hoverInteractionState;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/floating-ui-react/hooks/useHoverFloatingInteraction.mjs
/**
* Provides hover interactions that should be attached to the floating element.
*/
function useHoverFloatingInteraction(context, parameters = {}) {
	const { enabled = true, closeDelay: closeDelayProp = 0, nodeId: nodeIdProp } = parameters;
	const store = "rootStore" in context ? context.rootStore : context;
	const open = store.useState("open");
	const floatingElement = store.useState("floatingElement");
	const domReferenceElement = store.useState("domReferenceElement");
	const { dataRef } = store.context;
	const tree = useFloatingTree();
	const parentId = useFloatingParentNodeId();
	const instance = useHoverInteractionSharedState(store);
	const childClosedTimeout = useTimeout();
	const isClickLikeOpenEvent$2 = useStableCallback(() => {
		return isClickLikeOpenEvent(dataRef.current.openEvent?.type, instance.interactedInside);
	});
	const isHoverOpen = useStableCallback(() => {
		return isHoverOpenEvent(dataRef.current.openEvent?.type);
	});
	const clearPointerEvents = useStableCallback(() => {
		clearSafePolygonPointerEventsMutation(instance);
	});
	useIsoLayoutEffect(() => {
		if (!open) {
			instance.pointerType = void 0;
			instance.restTimeoutPending = false;
			instance.interactedInside = false;
			clearPointerEvents();
		}
	}, [
		open,
		instance,
		clearPointerEvents
	]);
	React.useEffect(() => {
		return clearPointerEvents;
	}, [clearPointerEvents]);
	useIsoLayoutEffect(() => {
		if (!enabled) return;
		if (open && instance.handleCloseOptions?.blockPointerEvents && isHoverOpen() && isElement(domReferenceElement) && floatingElement) {
			const ref = domReferenceElement;
			const floatingEl = floatingElement;
			const doc = ownerDocument(floatingElement);
			const parentFloating = tree?.nodesRef.current.find((node) => node.id === parentId)?.context?.elements.floating;
			if (parentFloating) parentFloating.style.pointerEvents = "";
			const cachedScopeElement = instance.pointerEventsScopeElement !== floatingEl ? instance.pointerEventsScopeElement : null;
			const parentScopeElement = parentFloating !== floatingEl ? parentFloating : null;
			const scopeElement = instance.handleCloseOptions?.getScope?.() ?? cachedScopeElement ?? parentScopeElement ?? ref.closest("[data-rootownerid]") ?? doc.body;
			applySafePolygonPointerEventsMutation(instance, {
				scopeElement,
				referenceElement: ref,
				floatingElement: floatingEl
			});
			return () => {
				clearPointerEvents();
			};
		}
	}, [
		enabled,
		open,
		domReferenceElement,
		floatingElement,
		instance,
		isHoverOpen,
		tree,
		parentId,
		clearPointerEvents
	]);
	React.useEffect(() => {
		if (!enabled) return;
		function hasParentChildren() {
			return !!(tree && parentId && getNodeChildren(tree.nodesRef.current, parentId).length > 0);
		}
		function closeWithDelay(event) {
			const closeDelay = getDelay(closeDelayProp, "close", instance.pointerType);
			const close = () => {
				store.setOpen(false, createChangeEventDetails(triggerHover, event));
				tree?.events.emit("floating.closed", event);
			};
			if (closeDelay) instance.openChangeTimeout.start(closeDelay, close);
			else {
				instance.openChangeTimeout.clear();
				close();
			}
		}
		function handleInteractInside(event) {
			const target = getTarget(event);
			if (!isInteractiveElement(target)) {
				instance.interactedInside = false;
				return;
			}
			instance.interactedInside = target?.closest("[aria-haspopup]") != null;
		}
		function onFloatingMouseEnter() {
			instance.openChangeTimeout.clear();
			childClosedTimeout.clear();
			tree?.events.off("floating.closed", onNodeClosed);
			clearPointerEvents();
		}
		function onFloatingMouseLeave(event) {
			if (hasParentChildren() && tree) {
				tree.events.on("floating.closed", onNodeClosed);
				return;
			}
			if (isTargetInsideEnabledTrigger(event.relatedTarget, store.context.triggerElements)) return;
			const currentNodeId = dataRef.current.floatingContext?.nodeId ?? nodeIdProp;
			const relatedTarget = event.relatedTarget;
			if (tree && currentNodeId && isElement(relatedTarget) && getNodeChildren(tree.nodesRef.current, currentNodeId, false).some((node) => contains(node.context?.elements.floating, relatedTarget))) return;
			if (instance.handler) {
				instance.handler(event);
				return;
			}
			clearPointerEvents();
			if (isHoverOpen() && !isClickLikeOpenEvent$2()) closeWithDelay(event);
		}
		function onNodeClosed(event) {
			if (!tree || !parentId || hasParentChildren()) return;
			childClosedTimeout.start(0, () => {
				tree.events.off("floating.closed", onNodeClosed);
				store.setOpen(false, createChangeEventDetails(triggerHover, event));
				tree.events.emit("floating.closed", event);
			});
		}
		const floating = floatingElement;
		return mergeCleanups(floating && addEventListener(floating, "mouseenter", onFloatingMouseEnter), floating && addEventListener(floating, "mouseleave", onFloatingMouseLeave), floating && addEventListener(floating, "pointerdown", handleInteractInside, true), () => {
			tree?.events.off("floating.closed", onNodeClosed);
		});
	}, [
		enabled,
		floatingElement,
		store,
		dataRef,
		closeDelayProp,
		nodeIdProp,
		isHoverOpen,
		isClickLikeOpenEvent$2,
		clearPointerEvents,
		instance,
		tree,
		parentId,
		childClosedTimeout
	]);
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/floating-ui-react/hooks/useHoverReferenceInteraction.mjs
var EMPTY_REF = { current: null };
/**
* Provides hover interactions that should be attached to reference or trigger
* elements.
*/
function useHoverReferenceInteraction(context, props = {}) {
	const { enabled = true, delay = 0, handleClose = null, mouseOnly = false, restMs = 0, move = true, triggerElementRef = EMPTY_REF, externalTree, isActiveTrigger = true, getHandleCloseContext, isClosing, shouldOpen: shouldOpenProp } = props;
	const store = "rootStore" in context ? context.rootStore : context;
	const { dataRef, events } = store.context;
	const tree = useFloatingTree(externalTree);
	const instance = useHoverInteractionSharedState(store);
	const isHoverCloseActiveRef = React.useRef(false);
	const handleCloseRef = useValueAsRef(handleClose);
	const delayRef = useValueAsRef(delay);
	const restMsRef = useValueAsRef(restMs);
	const enabledRef = useValueAsRef(enabled);
	const shouldOpenRef = useValueAsRef(shouldOpenProp);
	const isClosingRef = useValueAsRef(isClosing);
	const isClickLikeOpenEvent$1 = useStableCallback(() => {
		return isClickLikeOpenEvent(dataRef.current.openEvent?.type, instance.interactedInside);
	});
	const checkShouldOpen = useStableCallback(() => {
		return shouldOpenRef.current?.() !== false;
	});
	const isOverInactiveTrigger = useStableCallback((currentDomReference, currentTarget, target) => {
		const allTriggers = store.context.triggerElements;
		if (allTriggers.hasElement(currentTarget)) return !currentDomReference || !contains(currentDomReference, currentTarget);
		if (!isElement(target)) return false;
		const targetElement = target;
		return allTriggers.hasMatchingElement((trigger) => contains(trigger, targetElement)) && (!currentDomReference || !contains(currentDomReference, targetElement));
	});
	const cleanupMouseMoveHandler = useStableCallback(() => {
		if (!instance.handler) return;
		ownerDocument(store.select("domReferenceElement")).removeEventListener("mousemove", instance.handler);
		instance.handler = void 0;
	});
	const clearPointerEvents = useStableCallback(() => {
		clearSafePolygonPointerEventsMutation(instance);
	});
	if (isActiveTrigger) instance.handleCloseOptions = handleCloseRef.current?.__options;
	React.useEffect(() => cleanupMouseMoveHandler, [cleanupMouseMoveHandler]);
	React.useEffect(() => {
		if (!enabled) return;
		function onOpenChangeLocal(details) {
			if (!details.open) {
				isHoverCloseActiveRef.current = details.reason === triggerHover;
				cleanupMouseMoveHandler();
				instance.openChangeTimeout.clear();
				instance.restTimeout.clear();
				instance.blockMouseMove = true;
				instance.restTimeoutPending = false;
			} else isHoverCloseActiveRef.current = false;
		}
		events.on("openchange", onOpenChangeLocal);
		return () => {
			events.off("openchange", onOpenChangeLocal);
		};
	}, [
		enabled,
		events,
		instance,
		cleanupMouseMoveHandler
	]);
	React.useEffect(() => {
		if (!enabled) return;
		function closeWithDelay(event, runElseBranch = true) {
			const closeDelay = getDelay(delayRef.current, "close", instance.pointerType);
			if (closeDelay) instance.openChangeTimeout.start(closeDelay, () => {
				store.setOpen(false, createChangeEventDetails(triggerHover, event));
				tree?.events.emit("floating.closed", event);
			});
			else if (runElseBranch) {
				instance.openChangeTimeout.clear();
				store.setOpen(false, createChangeEventDetails(triggerHover, event));
				tree?.events.emit("floating.closed", event);
			}
		}
		const trigger = triggerElementRef.current ?? (isActiveTrigger ? store.select("domReferenceElement") : null);
		if (!isElement(trigger)) return;
		function onMouseEnter(event) {
			instance.openChangeTimeout.clear();
			instance.blockMouseMove = false;
			if (mouseOnly && !isMouseLikePointerType(instance.pointerType)) return;
			const restMsValue = getRestMs(restMsRef.current);
			const openDelay = getDelay(delayRef.current, "open", instance.pointerType);
			const eventTarget = getTarget(event);
			const currentTarget = event.currentTarget ?? null;
			const currentDomReference = store.select("domReferenceElement");
			let triggerNode = currentTarget;
			if (isElement(eventTarget) && !store.context.triggerElements.hasElement(eventTarget)) {
				for (const triggerElement of store.context.triggerElements.elements()) if (contains(triggerElement, eventTarget)) {
					triggerNode = triggerElement;
					break;
				}
			}
			if (isElement(currentTarget) && isElement(currentDomReference) && !store.context.triggerElements.hasElement(currentTarget) && contains(currentTarget, currentDomReference)) triggerNode = currentDomReference;
			const isOverInactive = triggerNode == null ? false : isOverInactiveTrigger(currentDomReference, triggerNode, eventTarget);
			const isOpen = store.select("open");
			const isInClosingTransition = isClosingRef.current?.() ?? store.select("transitionStatus") === "ending";
			const isHoverCloseTransition = !isOpen && isInClosingTransition && isHoverCloseActiveRef.current;
			const isReenteringSameTriggerDuringCloseTransition = !isOverInactive && isElement(triggerNode) && isElement(currentDomReference) && contains(currentDomReference, triggerNode) && isHoverCloseTransition;
			const isRestOnlyDelay = restMsValue > 0 && !openDelay;
			const shouldOpenImmediately = isOverInactive && (isOpen || isHoverCloseTransition) || isReenteringSameTriggerDuringCloseTransition;
			const shouldOpen = !isOpen || isOverInactive;
			if (shouldOpenImmediately) {
				if (checkShouldOpen()) store.setOpen(true, createChangeEventDetails(triggerHover, event, triggerNode));
				return;
			}
			if (isRestOnlyDelay) return;
			if (openDelay) instance.openChangeTimeout.start(openDelay, () => {
				if (shouldOpen && checkShouldOpen()) store.setOpen(true, createChangeEventDetails(triggerHover, event, triggerNode));
			});
			else if (shouldOpen) {
				if (checkShouldOpen()) store.setOpen(true, createChangeEventDetails(triggerHover, event, triggerNode));
			}
		}
		function onMouseLeave(event) {
			if (isClickLikeOpenEvent$1()) {
				clearPointerEvents();
				return;
			}
			cleanupMouseMoveHandler();
			const domReferenceElement = store.select("domReferenceElement");
			const doc = ownerDocument(domReferenceElement);
			instance.restTimeout.clear();
			instance.restTimeoutPending = false;
			const handleCloseContextBase = dataRef.current.floatingContext ?? getHandleCloseContext?.();
			if (isTargetInsideEnabledTrigger(event.relatedTarget, store.context.triggerElements)) return;
			if (handleCloseRef.current && handleCloseContextBase) {
				if (!store.select("open")) instance.openChangeTimeout.clear();
				const currentTrigger = triggerElementRef.current;
				instance.handler = handleCloseRef.current({
					...handleCloseContextBase,
					tree,
					x: event.clientX,
					y: event.clientY,
					onClose() {
						clearPointerEvents();
						cleanupMouseMoveHandler();
						if (enabledRef.current && !isClickLikeOpenEvent$1() && currentTrigger === store.select("domReferenceElement")) closeWithDelay(event, true);
					}
				});
				doc.addEventListener("mousemove", instance.handler);
				instance.handler(event);
				return;
			}
			if (instance.pointerType === "touch" ? !contains(store.select("floatingElement"), event.relatedTarget) : true) closeWithDelay(event);
		}
		if (move) return mergeCleanups(addEventListener(trigger, "mousemove", onMouseEnter, { once: true }), addEventListener(trigger, "mouseenter", onMouseEnter), addEventListener(trigger, "mouseleave", onMouseLeave));
		return mergeCleanups(addEventListener(trigger, "mouseenter", onMouseEnter), addEventListener(trigger, "mouseleave", onMouseLeave));
	}, [
		cleanupMouseMoveHandler,
		clearPointerEvents,
		dataRef,
		delayRef,
		store,
		enabled,
		handleCloseRef,
		instance,
		isActiveTrigger,
		isOverInactiveTrigger,
		isClickLikeOpenEvent$1,
		mouseOnly,
		move,
		restMsRef,
		triggerElementRef,
		tree,
		enabledRef,
		getHandleCloseContext,
		isClosingRef,
		checkShouldOpen
	]);
	return React.useMemo(() => {
		if (!enabled) return;
		function setPointerRef(event) {
			instance.pointerType = event.pointerType;
		}
		return {
			onPointerDown: setPointerRef,
			onPointerEnter: setPointerRef,
			onMouseMove(event) {
				const { nativeEvent } = event;
				const trigger = event.currentTarget;
				const currentDomReference = store.select("domReferenceElement");
				const currentOpen = store.select("open");
				const isOverInactive = isOverInactiveTrigger(currentDomReference, trigger, event.target);
				if (mouseOnly && !isMouseLikePointerType(instance.pointerType)) return;
				if (currentOpen && isOverInactive && instance.handleCloseOptions?.blockPointerEvents) {
					const floatingElement = store.select("floatingElement");
					if (floatingElement) {
						const scopeElement = instance.handleCloseOptions?.getScope?.() ?? trigger.ownerDocument.body;
						applySafePolygonPointerEventsMutation(instance, {
							scopeElement,
							referenceElement: trigger,
							floatingElement
						});
					}
				}
				const restMsValue = getRestMs(restMsRef.current);
				if (currentOpen && !isOverInactive || restMsValue === 0) return;
				if (!isOverInactive && instance.restTimeoutPending && event.movementX ** 2 + event.movementY ** 2 < 2) return;
				instance.restTimeout.clear();
				function handleMouseMove() {
					instance.restTimeoutPending = false;
					if (isClickLikeOpenEvent$1()) return;
					const latestOpen = store.select("open");
					if (!instance.blockMouseMove && (!latestOpen || isOverInactive) && checkShouldOpen()) store.setOpen(true, createChangeEventDetails(triggerHover, nativeEvent, trigger));
				}
				if (instance.pointerType === "touch") ReactDOM$1.flushSync(() => {
					handleMouseMove();
				});
				else if (isOverInactive && currentOpen) handleMouseMove();
				else {
					instance.restTimeoutPending = true;
					instance.restTimeout.start(restMsValue, handleMouseMove);
				}
			}
		};
	}, [
		enabled,
		instance,
		isClickLikeOpenEvent$1,
		isOverInactiveTrigger,
		mouseOnly,
		store,
		restMsRef,
		checkShouldOpen
	]);
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/floating-ui-react/safePolygon.mjs
var CURSOR_SPEED_THRESHOLD = .1;
var CURSOR_SPEED_THRESHOLD_SQUARED = CURSOR_SPEED_THRESHOLD * CURSOR_SPEED_THRESHOLD;
var POLYGON_BUFFER = .5;
function hasIntersectingEdge(pointX, pointY, xi, yi, xj, yj) {
	return yi >= pointY !== yj >= pointY && pointX <= (xj - xi) * (pointY - yi) / (yj - yi) + xi;
}
function isPointInQuadrilateral(pointX, pointY, x1, y1, x2, y2, x3, y3, x4, y4) {
	let isInsideValue = false;
	if (hasIntersectingEdge(pointX, pointY, x1, y1, x2, y2)) isInsideValue = !isInsideValue;
	if (hasIntersectingEdge(pointX, pointY, x2, y2, x3, y3)) isInsideValue = !isInsideValue;
	if (hasIntersectingEdge(pointX, pointY, x3, y3, x4, y4)) isInsideValue = !isInsideValue;
	if (hasIntersectingEdge(pointX, pointY, x4, y4, x1, y1)) isInsideValue = !isInsideValue;
	return isInsideValue;
}
function isInsideRect(pointX, pointY, rect) {
	return pointX >= rect.x && pointX <= rect.x + rect.width && pointY >= rect.y && pointY <= rect.y + rect.height;
}
function isInsideAxisAlignedRect(pointX, pointY, x1, y1, x2, y2) {
	return pointX >= Math.min(x1, x2) && pointX <= Math.max(x1, x2) && pointY >= Math.min(y1, y2) && pointY <= Math.max(y1, y2);
}
/**
* Generates a safe polygon area that the user can traverse without closing the
* floating element once leaving the reference element.
* @see https://floating-ui.com/docs/useHover#safepolygon
*/
function safePolygon(options = {}) {
	const { blockPointerEvents = false } = options;
	const timeout = new Timeout();
	const fn = ({ x, y, placement, elements, onClose, nodeId, tree }) => {
		const side = placement?.split("-")[0];
		let hasLanded = false;
		let lastX = null;
		let lastY = null;
		let lastCursorTime = typeof performance !== "undefined" ? performance.now() : 0;
		function isCursorMovingSlowly(nextX, nextY) {
			const currentTime = performance.now();
			const elapsedTime = currentTime - lastCursorTime;
			if (lastX === null || lastY === null || elapsedTime === 0) {
				lastX = nextX;
				lastY = nextY;
				lastCursorTime = currentTime;
				return false;
			}
			const deltaX = nextX - lastX;
			const deltaY = nextY - lastY;
			const distanceSquared = deltaX * deltaX + deltaY * deltaY;
			const thresholdSquared = elapsedTime * elapsedTime * CURSOR_SPEED_THRESHOLD_SQUARED;
			lastX = nextX;
			lastY = nextY;
			lastCursorTime = currentTime;
			return distanceSquared < thresholdSquared;
		}
		function close() {
			timeout.clear();
			onClose();
		}
		return function onMouseMove(event) {
			timeout.clear();
			const domReference = elements.domReference;
			const floating = elements.floating;
			if (!domReference || !floating || side == null || x == null || y == null) return;
			const { clientX, clientY } = event;
			const target = getTarget(event);
			const isLeave = event.type === "mouseleave";
			const isOverFloatingEl = contains(floating, target);
			const isOverReferenceEl = contains(domReference, target);
			if (isOverFloatingEl) {
				hasLanded = true;
				if (!isLeave) return;
			}
			if (isOverReferenceEl) {
				hasLanded = false;
				if (!isLeave) {
					hasLanded = true;
					return;
				}
			}
			if (isLeave && isElement(event.relatedTarget) && contains(floating, event.relatedTarget)) return;
			function hasOpenChildNode() {
				return Boolean(tree && getNodeChildren(tree.nodesRef.current, nodeId).length > 0);
			}
			function closeIfNoOpenChild() {
				if (!hasOpenChildNode()) close();
			}
			if (hasOpenChildNode()) return;
			const refRect = domReference.getBoundingClientRect();
			const rect = floating.getBoundingClientRect();
			const cursorLeaveFromRight = x > rect.right - rect.width / 2;
			const cursorLeaveFromBottom = y > rect.bottom - rect.height / 2;
			const isFloatingWider = rect.width > refRect.width;
			const isFloatingTaller = rect.height > refRect.height;
			const left = (isFloatingWider ? refRect : rect).left;
			const right = (isFloatingWider ? refRect : rect).right;
			const top = (isFloatingTaller ? refRect : rect).top;
			const bottom = (isFloatingTaller ? refRect : rect).bottom;
			if (side === "top" && y >= refRect.bottom - 1 || side === "bottom" && y <= refRect.top + 1 || side === "left" && x >= refRect.right - 1 || side === "right" && x <= refRect.left + 1) {
				closeIfNoOpenChild();
				return;
			}
			let isInsideTroughRect = false;
			switch (side) {
				case "top":
					isInsideTroughRect = isInsideAxisAlignedRect(clientX, clientY, left, refRect.top + 1, right, rect.bottom - 1);
					break;
				case "bottom":
					isInsideTroughRect = isInsideAxisAlignedRect(clientX, clientY, left, rect.top + 1, right, refRect.bottom - 1);
					break;
				case "left":
					isInsideTroughRect = isInsideAxisAlignedRect(clientX, clientY, rect.right - 1, bottom, refRect.left + 1, top);
					break;
				case "right": isInsideTroughRect = isInsideAxisAlignedRect(clientX, clientY, refRect.right - 1, bottom, rect.left + 1, top);
			}
			if (isInsideTroughRect) return;
			if (hasLanded && !isInsideRect(clientX, clientY, refRect)) {
				closeIfNoOpenChild();
				return;
			}
			if (!isLeave && isCursorMovingSlowly(clientX, clientY)) {
				closeIfNoOpenChild();
				return;
			}
			let isInsidePolygon = false;
			switch (side) {
				case "top": {
					const cursorXOffset = isFloatingWider ? POLYGON_BUFFER / 2 : POLYGON_BUFFER * 4;
					const cursorPointOneX = isFloatingWider ? x + cursorXOffset : cursorLeaveFromRight ? x + cursorXOffset : x - cursorXOffset;
					const cursorPointTwoX = isFloatingWider ? x - cursorXOffset : cursorLeaveFromRight ? x + cursorXOffset : x - cursorXOffset;
					const cursorPointY = y + POLYGON_BUFFER + 1;
					const commonYLeft = cursorLeaveFromRight ? rect.bottom - POLYGON_BUFFER : isFloatingWider ? rect.bottom - POLYGON_BUFFER : rect.top;
					const commonYRight = cursorLeaveFromRight ? isFloatingWider ? rect.bottom - POLYGON_BUFFER : rect.top : rect.bottom - POLYGON_BUFFER;
					isInsidePolygon = isPointInQuadrilateral(clientX, clientY, cursorPointOneX, cursorPointY, cursorPointTwoX, cursorPointY, rect.left, commonYLeft, rect.right, commonYRight);
					break;
				}
				case "bottom": {
					const cursorXOffset = isFloatingWider ? POLYGON_BUFFER / 2 : POLYGON_BUFFER * 4;
					const cursorPointOneX = isFloatingWider ? x + cursorXOffset : cursorLeaveFromRight ? x + cursorXOffset : x - cursorXOffset;
					const cursorPointTwoX = isFloatingWider ? x - cursorXOffset : cursorLeaveFromRight ? x + cursorXOffset : x - cursorXOffset;
					const cursorPointY = y - POLYGON_BUFFER;
					const commonYLeft = cursorLeaveFromRight ? rect.top + POLYGON_BUFFER : isFloatingWider ? rect.top + POLYGON_BUFFER : rect.bottom;
					const commonYRight = cursorLeaveFromRight ? isFloatingWider ? rect.top + POLYGON_BUFFER : rect.bottom : rect.top + POLYGON_BUFFER;
					isInsidePolygon = isPointInQuadrilateral(clientX, clientY, cursorPointOneX, cursorPointY, cursorPointTwoX, cursorPointY, rect.left, commonYLeft, rect.right, commonYRight);
					break;
				}
				case "left": {
					const cursorYOffset = isFloatingTaller ? POLYGON_BUFFER / 2 : POLYGON_BUFFER * 4;
					const cursorPointOneY = isFloatingTaller ? y + cursorYOffset : cursorLeaveFromBottom ? y + cursorYOffset : y - cursorYOffset;
					const cursorPointTwoY = isFloatingTaller ? y - cursorYOffset : cursorLeaveFromBottom ? y + cursorYOffset : y - cursorYOffset;
					const cursorPointX = x + POLYGON_BUFFER + 1;
					const commonXTop = cursorLeaveFromBottom ? rect.right - POLYGON_BUFFER : isFloatingTaller ? rect.right - POLYGON_BUFFER : rect.left;
					const commonXBottom = cursorLeaveFromBottom ? isFloatingTaller ? rect.right - POLYGON_BUFFER : rect.left : rect.right - POLYGON_BUFFER;
					isInsidePolygon = isPointInQuadrilateral(clientX, clientY, commonXTop, rect.top, commonXBottom, rect.bottom, cursorPointX, cursorPointOneY, cursorPointX, cursorPointTwoY);
					break;
				}
				case "right": {
					const cursorYOffset = isFloatingTaller ? POLYGON_BUFFER / 2 : POLYGON_BUFFER * 4;
					const cursorPointOneY = isFloatingTaller ? y + cursorYOffset : cursorLeaveFromBottom ? y + cursorYOffset : y - cursorYOffset;
					const cursorPointTwoY = isFloatingTaller ? y - cursorYOffset : cursorLeaveFromBottom ? y + cursorYOffset : y - cursorYOffset;
					const cursorPointX = x - POLYGON_BUFFER;
					const commonXTop = cursorLeaveFromBottom ? rect.left + POLYGON_BUFFER : isFloatingTaller ? rect.left + POLYGON_BUFFER : rect.right;
					const commonXBottom = cursorLeaveFromBottom ? isFloatingTaller ? rect.left + POLYGON_BUFFER : rect.right : rect.left + POLYGON_BUFFER;
					isInsidePolygon = isPointInQuadrilateral(clientX, clientY, cursorPointX, cursorPointOneY, cursorPointX, cursorPointTwoY, commonXTop, rect.top, commonXBottom, rect.bottom);
					break;
				}
			}
			if (!isInsidePolygon) closeIfNoOpenChild();
			else if (!hasLanded) timeout.start(40, closeIfNoOpenChild);
		};
	};
	fn.__options = {
		...options,
		blockPointerEvents
	};
	return fn;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/useEnhancedClickHandler.mjs
/**
* Provides a cross-browser way to determine the type of the pointer used to click.
* Safari and Firefox do not provide the PointerEvent to the click handler (they use MouseEvent) yet.
* Additionally, this implementation detects if the click was triggered by the keyboard.
*
* @param handler The function to be called when the button is clicked. The first parameter is the original event and the second parameter is the pointer type.
*/
function useEnhancedClickHandler(handler) {
	const lastClickInteractionTypeRef = React.useRef("");
	const handlePointerDown = React.useCallback((event) => {
		if (event.defaultPrevented) return;
		lastClickInteractionTypeRef.current = event.pointerType;
		handler(event, event.pointerType);
	}, [handler]);
	return {
		onClick: React.useCallback((event) => {
			if (event.detail === 0) {
				handler(event, "keyboard");
				return;
			}
			if ("pointerType" in event) handler(event, event.pointerType);
			else handler(event, lastClickInteractionTypeRef.current);
			lastClickInteractionTypeRef.current = "";
		}, [handler]),
		onPointerDown: handlePointerDown
	};
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/utils/useOpenInteractionType.mjs
function useOpenMethodTriggerProps(open, setOpenMethod) {
	const { onClick, onPointerDown } = useEnhancedClickHandler(useStableCallback((_, interactionType) => {
		if (!(typeof open === "function" ? open() : open)) setOpenMethod(interactionType || (ios ? "touch" : ""));
	}));
	return React.useMemo(() => ({
		onClick,
		onPointerDown
	}), [onClick, onPointerDown]);
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/dialog/trigger/DialogTrigger.mjs
/**
* A button that opens the dialog.
* Renders a `<button>` element.
*
* Documentation: [Base UI Dialog](https://base-ui.com/react/components/dialog)
*/
var DialogTrigger = /*#__PURE__*/ React.forwardRef(function DialogTrigger(componentProps, forwardedRef) {
	const { render, className, style, disabled = false, nativeButton = true, id: idProp, payload, handle, ...elementProps } = componentProps;
	const dialogRootContext = useDialogRootContext(true);
	const store = handle?.store ?? dialogRootContext?.store;
	if (!store) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: <Dialog.Trigger> must be used within <Dialog.Root> or provided with a handle." : formatErrorMessage(79));
	const thisTriggerId = useBaseUiId(idProp);
	const floatingContext = store.useState("floatingRootContext");
	const isOpenedByThisTrigger = store.useState("isOpenedByTrigger", thisTriggerId);
	const popupId = store.useState("triggerPopupId", thisTriggerId);
	const triggerElementRef = React.useRef(null);
	const { registerTrigger, isMountedByThisTrigger } = useTriggerDataForwarding(thisTriggerId, triggerElementRef, store, { payload });
	const { getButtonProps, buttonRef } = useButton({
		disabled,
		native: nativeButton
	});
	const click = useClick(floatingContext, { enabled: floatingContext != null });
	const interactionTypeProps = useOpenMethodTriggerProps(() => store.select("open"), (interactionType) => {
		store.set("openMethod", interactionType);
	});
	const state = {
		disabled,
		open: isOpenedByThisTrigger
	};
	const rootTriggerProps = store.useState("triggerProps", isMountedByThisTrigger);
	return useRenderElement("button", componentProps, {
		state,
		ref: [
			buttonRef,
			forwardedRef,
			registerTrigger,
			triggerElementRef
		],
		props: [
			click.reference,
			rootTriggerProps,
			interactionTypeProps,
			{
				[CLICK_TRIGGER_IDENTIFIER]: "",
				id: thisTriggerId,
				"aria-haspopup": "dialog",
				"aria-expanded": isOpenedByThisTrigger,
				"aria-controls": popupId
			},
			elementProps,
			getButtonProps
		],
		stateAttributesMapping: triggerOpenStateMapping$1
	});
});
if (process.env.NODE_ENV !== "production") DialogTrigger.displayName = "DialogTrigger";
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/dialog/store/DialogHandle.mjs
/**
* A handle to control a Dialog imperatively and to associate detached triggers with it.
*/
var DialogHandle = class {
	/**
	* Internal store holding the dialog state.
	* @internal
	*/
	constructor(store) {
		this.store = store ?? new DialogStore();
	}
	/**
	* Opens the dialog and associates it with the trigger with the given id.
	* The trigger, if provided, must be a matching Trigger component with this handle passed as a prop.
	*
	* This method should only be called in an event handler or an effect (not during rendering).
	*
	* @param triggerId ID of the trigger to associate with the dialog. If null, the dialog will open without a trigger association.
	*/
	open(triggerId) {
		const triggerElement = triggerId ? this.store.context.triggerElements.getById(triggerId) : void 0;
		if (process.env.NODE_ENV !== "production") {
			if (triggerId && !triggerElement) console.warn(`Base UI: DialogHandle.open: No trigger found with id "${triggerId}". The dialog will open, but the trigger will not be associated with the dialog.`);
		}
		this.store.setOpen(true, createChangeEventDetails(imperativeAction, void 0, triggerElement));
	}
	/**
	* Opens the dialog and sets the payload.
	* Does not associate the dialog with any trigger.
	*
	* @param payload Payload to set when opening the dialog.
	*/
	openWithPayload(payload) {
		this.store.set("payload", payload);
		this.store.setOpen(true, createChangeEventDetails(imperativeAction, void 0, void 0));
	}
	/**
	* Closes the dialog.
	*/
	close() {
		this.store.setOpen(false, createChangeEventDetails(imperativeAction, void 0, void 0));
	}
	/**
	* Indicates whether the dialog is currently open.
	*/
	get isOpen() {
		return this.store.select("open");
	}
};
/**
* Creates a new handle to connect a Dialog.Root with detached Dialog.Trigger components.
*/
function createDialogHandle() {
	return new DialogHandle();
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/contexts/search.js
/** built-in Base UI Dialog handle */
var dialogHandle = createDialogHandle();
var SearchContext = createContext({
	enabled: false,
	open: false,
	hotKey: [],
	setOpenSearch: () => void 0,
	dialogHandle
});
function useSearchContext() {
	return use(SearchContext);
}
function MetaOrControl() {
	const [key, setKey] = useState("⌘");
	useEffect(() => {
		if (/Windows|Linux/i.test(window.navigator.userAgent)) setKey("Ctrl");
	}, []);
	return key;
}
var DEFAULT_HOT_KEYS = [{
	key: (e) => e.metaKey || e.ctrlKey,
	display: /* @__PURE__ */ jsx(MetaOrControl, {})
}, {
	key: "k",
	display: "K"
}];
var DefaultSearchDialog = lazy(() => import("./assets/search-default-CHuGf_zy.js"));
function SearchProvider({ SearchDialog = DefaultSearchDialog, children, options, hotKey = DEFAULT_HOT_KEYS, links }) {
	const [isOpen, setIsOpen] = useState(false);
	const onKeyDown = useEffectEvent((e) => {
		if (hotKey.every((v) => typeof v.key === "string" ? e.key === v.key : v.key(e))) {
			setIsOpen((open) => !open);
			e.preventDefault();
		}
	});
	useEffect(() => {
		window.addEventListener("keydown", onKeyDown);
		return () => {
			window.removeEventListener("keydown", onKeyDown);
		};
	}, []);
	return /* @__PURE__ */ jsxs(SearchContext, {
		value: useMemo(() => ({
			enabled: true,
			open: isOpen,
			hotKey,
			dialogHandle,
			setOpenSearch: setIsOpen
		}), [isOpen, hotKey]),
		children: [/* @__PURE__ */ jsx(Suspense, {
			fallback: null,
			children: /* @__PURE__ */ jsx(SearchDialog, {
				open: isOpen,
				onOpenChange: setIsOpen,
				links,
				dialogHandle,
				...options
			})
		}), children]
	});
}
//#endregion
//#region node_modules/.pnpm/next-themes@0.4.6_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/next-themes/dist/index.mjs
var M = (e, i, s, u, m, a, l, h) => {
	let d = document.documentElement, w = ["light", "dark"];
	function p(n) {
		(Array.isArray(e) ? e : [e]).forEach((y) => {
			let k = y === "class", S = k && a ? m.map((f) => a[f] || f) : m;
			k ? (d.classList.remove(...S), d.classList.add(a && a[n] ? a[n] : n)) : d.setAttribute(y, n);
		}), R(n);
	}
	function R(n) {
		h && w.includes(n) && (d.style.colorScheme = n);
	}
	function c() {
		return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	}
	if (u) p(u);
	else try {
		let n = localStorage.getItem(i) || s;
		p(l && n === "system" ? c() : n);
	} catch (n) {}
};
var b = ["light", "dark"];
var I = "(prefers-color-scheme: dark)";
var O = typeof window == "undefined";
var x = React.createContext(void 0);
var U = {
	setTheme: (e) => {},
	themes: []
};
var z$1 = () => {
	var e;
	return (e = React.useContext(x)) != null ? e : U;
};
var J = (e) => React.useContext(x) ? React.createElement(React.Fragment, null, e.children) : React.createElement(V, { ...e });
var N = ["light", "dark"];
var V = ({ forcedTheme: e, disableTransitionOnChange: i = !1, enableSystem: s = !0, enableColorScheme: u = !0, storageKey: m = "theme", themes: a = N, defaultTheme: l = s ? "system" : "light", attribute: h = "data-theme", value: d, children: w, nonce: p, scriptProps: R }) => {
	let [c, n] = React.useState(() => H(m, l)), [T, y] = React.useState(() => c === "system" ? E() : c), k = d ? Object.values(d) : a, S = React.useCallback((o) => {
		let r = o;
		if (!r) return;
		o === "system" && s && (r = E());
		let v = d ? d[r] : r, C = i ? W(p) : null, P = document.documentElement, L = (g) => {
			g === "class" ? (P.classList.remove(...k), v && P.classList.add(v)) : g.startsWith("data-") && (v ? P.setAttribute(g, v) : P.removeAttribute(g));
		};
		if (Array.isArray(h) ? h.forEach(L) : L(h), u) {
			let g = b.includes(l) ? l : null, D = b.includes(r) ? r : g;
			P.style.colorScheme = D;
		}
		C?.();
	}, [p]), f = React.useCallback((o) => {
		let r = typeof o == "function" ? o(c) : o;
		n(r);
		try {
			localStorage.setItem(m, r);
		} catch (v) {}
	}, [c]), A = React.useCallback((o) => {
		let r = E(o);
		y(r), c === "system" && s && !e && S("system");
	}, [c, e]);
	React.useEffect(() => {
		let o = window.matchMedia(I);
		return o.addListener(A), A(o), () => o.removeListener(A);
	}, [A]), React.useEffect(() => {
		let o = (r) => {
			r.key === m && (r.newValue ? n(r.newValue) : f(l));
		};
		return window.addEventListener("storage", o), () => window.removeEventListener("storage", o);
	}, [f]), React.useEffect(() => {
		S(e != null ? e : c);
	}, [e, c]);
	let Q = React.useMemo(() => ({
		theme: c,
		setTheme: f,
		forcedTheme: e,
		resolvedTheme: c === "system" ? T : c,
		themes: s ? [...a, "system"] : a,
		systemTheme: s ? T : void 0
	}), [
		c,
		f,
		e,
		T,
		s,
		a
	]);
	return React.createElement(x.Provider, { value: Q }, React.createElement(_, {
		forcedTheme: e,
		storageKey: m,
		attribute: h,
		enableSystem: s,
		enableColorScheme: u,
		defaultTheme: l,
		value: d,
		themes: a,
		nonce: p,
		scriptProps: R
	}), w);
};
var _ = React.memo(({ forcedTheme: e, storageKey: i, attribute: s, enableSystem: u, enableColorScheme: m, defaultTheme: a, value: l, themes: h, nonce: d, scriptProps: w }) => {
	let p = JSON.stringify([
		s,
		i,
		a,
		e,
		h,
		l,
		u,
		m
	]).slice(1, -1);
	return React.createElement("script", {
		...w,
		suppressHydrationWarning: !0,
		nonce: typeof window == "undefined" ? d : "",
		dangerouslySetInnerHTML: { __html: `(${M.toString()})(${p})` }
	});
});
var H = (e, i) => {
	if (O) return;
	let s;
	try {
		s = localStorage.getItem(e) || void 0;
	} catch (u) {}
	return s || i;
};
var W = (e) => {
	let i = document.createElement("style");
	return e && i.setAttribute("nonce", e), i.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(i), () => {
		window.getComputedStyle(document.body), setTimeout(() => {
			document.head.removeChild(i);
		}, 1);
	};
};
var E = (e) => (e || (e = window.matchMedia(I)), e.matches ? "dark" : "light");
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/internals/direction-context/DirectionContext.mjs
/**
* @internal
*/
var DirectionContext = /*#__PURE__*/ React.createContext(void 0);
if (process.env.NODE_ENV !== "production") DirectionContext.displayName = "DirectionContext";
function useDirection() {
	return React.useContext(DirectionContext)?.direction ?? "ltr";
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/direction-provider/DirectionProvider.mjs
/**
* Enables RTL behavior for Base UI components.
*
* Documentation: [Base UI Direction Provider](https://base-ui.com/react/utils/direction-provider)
*/
var DirectionProvider = function DirectionProvider(props) {
	const { direction = "ltr" } = props;
	const contextValue = React.useMemo(() => ({ direction }), [direction]);
	return /*#__PURE__*/ jsx(DirectionContext.Provider, {
		value: contextValue,
		children: props.children
	});
};
if (process.env.NODE_ENV !== "production") DirectionProvider.displayName = "DirectionProvider";
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/provider/base.js
function RootProvider$1({ children, dir = "ltr", theme = {}, search, i18n }) {
	let body = children;
	if (search?.enabled !== false) body = /* @__PURE__ */ jsx(SearchProvider, {
		...search,
		children: body
	});
	if (theme?.enabled !== false) body = /* @__PURE__ */ jsx(J, {
		attribute: "class",
		defaultTheme: "system",
		enableSystem: true,
		disableTransitionOnChange: true,
		...theme,
		children: body
	});
	if (i18n) body = /* @__PURE__ */ jsx(I18nProvider, {
		...i18n,
		children: body
	});
	return /* @__PURE__ */ jsx(DirectionProvider, {
		direction: dir,
		children: body
	});
}
//#endregion
//#region node_modules/.pnpm/fumadocs-core@16.11.5_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.5_@type_72cb31c98dbdcd9237f5eec6550b9329/node_modules/fumadocs-core/dist/framework/react-router.js
var framework = {
	usePathname() {
		return useLocation().pathname;
	},
	useParams() {
		return useParams();
	},
	useRouter() {
		const navigate = useNavigate();
		const revalidator = useRevalidator();
		return useMemo(() => ({
			push(url) {
				navigate(url);
			},
			refresh() {
				revalidator.revalidate();
			}
		}), [navigate, revalidator]);
	},
	Link({ href, prefetch, ...props }) {
		return /* @__PURE__ */ jsx(Link, {
			to: href,
			prefetch: prefetch ? "intent" : "none",
			...props,
			children: props.children
		});
	}
};
function ReactRouterProvider({ children, Link: CustomLink, Image: CustomImage }) {
	return /* @__PURE__ */ jsx(FrameworkProvider, {
		...framework,
		Link: CustomLink ?? framework.Link,
		Image: CustomImage ?? framework.Image,
		children
	});
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/provider/react-router.js
function RootProvider({ components, ...props }) {
	return /* @__PURE__ */ jsx(ReactRouterProvider, {
		Link: components?.Link,
		Image: components?.Image,
		children: /* @__PURE__ */ jsx(RootProvider$1, {
			...props,
			children: props.children
		})
	});
}
//#endregion
//#region components/search.tsx
/** 与 /api/search 导出索引使用同一套分词，保证检索一致 */
function initOrama() {
	return create({
		schema: { _: "string" },
		components: { tokenizer: createTokenizer() }
	});
}
function StaticSearchDialog(props) {
	const { search, setSearch, query } = useDocsSearch({ client: oramaStaticClient({ initOrama }) });
	return /* @__PURE__ */ jsxs(SearchDialog, {
		search,
		onSearchChange: setSearch,
		isLoading: query.isLoading,
		...props,
		children: [/* @__PURE__ */ jsx(SearchDialogOverlay, {}), /* @__PURE__ */ jsxs(SearchDialogContent, { children: [/* @__PURE__ */ jsxs(SearchDialogHeader, { children: [
			/* @__PURE__ */ jsx(SearchDialogIcon, {}),
			/* @__PURE__ */ jsx(SearchDialogInput, {}),
			/* @__PURE__ */ jsx(SearchDialogClose, {})
		] }), /* @__PURE__ */ jsx(SearchDialogList, { items: query.data !== "empty" ? query.data : null })] })]
	});
}
//#endregion
//#region components/provider.tsx
/** Client Provider：可传入 SearchDialog 等函数型配置 */
function Provider({ children }) {
	return /* @__PURE__ */ jsx(RootProvider, {
		search: { SearchDialog: StaticSearchDialog },
		children
	});
}
//#endregion
//#region node_modules/.pnpm/fumadocs-core@16.11.5_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.5_@type_72cb31c98dbdcd9237f5eec6550b9329/node_modules/fumadocs-core/dist/path-B9zu5SjE.js
function basename$1(path, ext) {
	const idx = path.lastIndexOf("/");
	return path.substring(idx === -1 ? 0 : idx + 1, ext ? path.length - ext.length : path.length);
}
function extname(path) {
	for (let i = path.length - 1; i >= 0; i--) {
		const c = path[i];
		if (c === ".") return path.substring(i);
		if (c === "/") return "";
	}
	return "";
}
function dirname(path) {
	const idx = path.lastIndexOf("/");
	if (idx === -1) return "";
	return path.substring(0, idx);
}
/**
* Resolve paths, slashes within the path will be ignored
* @param paths - Paths to join
* @example
* ```
* ['a','b'] // 'a/b'
* ['/a'] // 'a'
* ['a', '/b'] // 'a/b'
* ['a', '../b/c'] // 'b/c'
* ```
*/
function joinPath(...paths) {
	const out = [];
	for (const path of paths) for (const seg of path.split("/")) switch (seg) {
		case "..":
			out.pop();
			break;
		case "":
		case ".": break;
		default: out.push(seg);
	}
	return out.join("/");
}
/**
* Convert (relative) file path to virtual file path.
*
* @param path - Relative path
* @returns Normalized path, with no trailing/leading slashes
* @throws Throws error if path starts with `./` or `../`
*/
function normalize$1(path) {
	const segments = path.split(/\/|\\/).filter((v) => v.length > 0);
	if (segments[0] === "." || segments[0] === "..") throw new Error("It must not start with './' or '../'");
	return segments.join("/");
}
//#endregion
//#region node_modules/.pnpm/fumadocs-core@16.11.5_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.5_@type_72cb31c98dbdcd9237f5eec6550b9329/node_modules/fumadocs-core/dist/utils-Dn9VIXRN.js
/**
* Search the path of a node in the tree matched by the matcher.
*
* @returns The path to the target node (from starting root), or null if the page doesn't exist
*/
function findPath(nodes, matcher, options = {}) {
	const { includeSeparator = true } = options;
	function run(nodes) {
		let separator;
		for (const node of nodes) {
			if (matcher(node)) {
				const items = [];
				if (separator) items.push(separator);
				items.push(node);
				return items;
			}
			if (node.type === "separator" && includeSeparator) {
				separator = node;
				continue;
			}
			if (node.type === "folder") {
				const items = node.index && matcher(node.index) ? [node.index] : run(node.children);
				if (items) {
					items.unshift(node);
					if (separator) items.unshift(separator);
					return items;
				}
			}
		}
	}
	return run(nodes) ?? null;
}
var VisitBreak = Symbol("VisitBreak");
/**
* Perform a depth-first search on page tree visiting every node.
*
* @param root - the root of page tree to visit.
* @param visitor - function to receive nodes, return `skip` to skip the children of current node, `break` to stop the search entirely.
*/
function visit$1(root, visitor) {
	function onNode(node, parent) {
		const result = visitor(node, parent);
		switch (result) {
			case "skip": return node;
			case "break": throw VisitBreak;
			default: if (result) node = result;
		}
		if ("index" in node && node.index) node.index = onNode(node.index, node);
		if ("fallback" in node && node.fallback) node.fallback = onNode(node.fallback, node);
		if ("children" in node) for (let i = 0; i < node.children.length; i++) node.children[i] = onNode(node.children[i], node);
		return node;
	}
	try {
		return onNode(root);
	} catch (e) {
		if (e === VisitBreak) return root;
		throw e;
	}
}
//#endregion
//#region node_modules/.pnpm/fumadocs-core@16.11.5_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.5_@type_72cb31c98dbdcd9237f5eec6550b9329/node_modules/fumadocs-core/dist/source/plugins/slugs.js
/**
* Generate slugs for pages if missing
*/
function slugsPlugin(slugFn) {
	function isIndex(file) {
		return basename$1(file, extname(file)) === "index";
	}
	return {
		name: "fumadocs:slugs",
		transformStorage({ storage }) {
			const indexFiles = [];
			const taken = /* @__PURE__ */ new Set();
			for (const path of storage.getFiles()) {
				const file = storage.read(path);
				if (!file || file.format !== "page" || file.slugs) continue;
				const customSlugs = slugFn?.(file);
				if (customSlugs === void 0 && isIndex(path)) {
					indexFiles.push(path);
					continue;
				}
				file.slugs = customSlugs ?? getSlugs(path);
				const key = file.slugs.join("/");
				if (taken.has(key)) throw new Error(`Duplicated slugs: ${key}`);
				taken.add(key);
			}
			for (const path of indexFiles) {
				const file = storage.read(path);
				if (file?.format !== "page") continue;
				file.slugs = getSlugs(path);
				if (taken.has(file.slugs.join("/"))) file.slugs.push("index");
			}
		}
	};
}
var GroupRegex = /^\(.+\)$/;
/**
* Convert file path into slugs, also encode non-ASCII characters, so they can work in pathname
*/
function getSlugs(file) {
	const dir = dirname(file);
	const name = basename$1(file, extname(file));
	const slugs = [];
	for (const seg of dir.split("/")) if (seg.length > 0 && !GroupRegex.test(seg)) slugs.push(encodeURI(seg));
	if (GroupRegex.test(name)) throw new Error(`Cannot use folder group in file names: ${file}`);
	if (name !== "index") slugs.push(encodeURI(name));
	return slugs;
}
//#endregion
//#region node_modules/.pnpm/fumadocs-core@16.11.5_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.5_@type_72cb31c98dbdcd9237f5eec6550b9329/node_modules/fumadocs-core/dist/icon-BILaoXeg.js
function iconPlugin(resolveIcon) {
	function replaceIcon(node) {
		if (node.icon === void 0 || typeof node.icon === "string") node.icon = resolveIcon(node.icon);
		return node;
	}
	return {
		name: "fumadocs:icon",
		transformPageTree: {
			file: replaceIcon,
			folder: replaceIcon,
			separator: replaceIcon
		}
	};
}
//#endregion
//#region node_modules/.pnpm/fumadocs-core@16.11.5_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.5_@type_72cb31c98dbdcd9237f5eec6550b9329/node_modules/fumadocs-core/dist/loader-CoSFINvo.js
/**
* In memory file system.
*/
var FileSystem = class {
	constructor(inherit) {
		this.files = /* @__PURE__ */ new Map();
		this.folders = /* @__PURE__ */ new Map();
		if (inherit) {
			for (const [k, v] of inherit.folders) this.folders.set(k, v);
			for (const [k, v] of inherit.files) this.files.set(k, v);
		} else this.folders.set("", []);
	}
	read(path) {
		return this.files.get(path);
	}
	/**
	* get the direct children of folder (in virtual file path)
	*/
	readDir(path) {
		return this.folders.get(path);
	}
	write(path, file) {
		if (!this.files.has(path)) {
			const dir = dirname(path);
			this.makeDir(dir);
			this.readDir(dir)?.push(path);
		}
		this.files.set(path, file);
	}
	/**
	* Delete files at specified path.
	*
	* @param path - the target path.
	* @param [recursive=false] - if set to `true`, it will also delete directories.
	*/
	delete(path, recursive = false) {
		if (this.files.delete(path)) return true;
		if (recursive) {
			const folder = this.folders.get(path);
			if (!folder) return false;
			this.folders.delete(path);
			for (const child of folder) this.delete(child);
			return true;
		}
		return false;
	}
	getFiles() {
		return Array.from(this.files.keys());
	}
	makeDir(path) {
		const cur = [];
		let parentPath = "";
		for (const seg of path.split("/")) {
			cur.push(seg);
			const curPath = cur.join("/");
			if (!this.folders.has(curPath)) {
				this.folders.set(curPath, []);
				this.folders.get(parentPath).push(curPath);
			}
			parentPath = curPath;
		}
	}
};
function isStaticSource(s) {
	return "files" in s && Array.isArray(s.files);
}
var EmptyLang = Symbol();
/**
* convert input files into virtual file system.
*
* in the storage, locale codes are removed from file paths, hence the same file will have same file paths in every storage.
*/
function createContentStorageBuilder(loaderConfig) {
	const { input, plugins, i18n } = loaderConfig;
	let parser;
	if (!i18n) parser = (path) => [path];
	else if (i18n.parser === "dir") {
		const langSet = new Set(i18n.languages);
		parser = (path) => {
			const [locale, ...segs] = path.split("/");
			if (!locale || segs.length === 0) return [path];
			if (langSet.has(locale)) return [segs.join("/"), locale];
			if (locale === "$") return [segs.join("/"), i18n.languages];
			return [path];
		};
	} else {
		const langSet = new Set(i18n.languages);
		parser = (path) => {
			const segs = path.split("/");
			const base = segs.pop();
			if (!base) return [path];
			const parts = base.split(".");
			if (parts.length < 3) return [path];
			const [locale] = parts.splice(parts.length - 2, 1);
			segs.push(parts.join("."));
			if (langSet.has(locale)) return [segs.join("/"), locale];
			if (locale === "$") return [segs.join("/"), i18n.languages];
			return [path];
		};
	}
	const fileMap = /* @__PURE__ */ new Map();
	function scan(type, source) {
		for (const inputFile of source.files) {
			let file;
			if (inputFile.type === "page") file = {
				format: "page",
				type,
				path: normalize$1(inputFile.path),
				slugs: inputFile.slugs,
				data: inputFile.data,
				absolutePath: inputFile.absolutePath
			};
			else file = {
				format: "meta",
				type,
				path: normalize$1(inputFile.path),
				absolutePath: inputFile.absolutePath,
				data: inputFile.data
			};
			const [storageKey, locale = i18n ? i18n.defaultLanguage : EmptyLang] = parser(file.path);
			const entry = [storageKey, file];
			if (Array.isArray(locale)) for (const item of locale) pushMapList(fileMap, item, entry);
			else pushMapList(fileMap, locale, entry);
		}
	}
	if (isStaticSource(input)) scan(void 0, input);
	else for (const k in input) scan(k, input[k]);
	function makeStorage(locale, inherit) {
		const storage = new FileSystem(inherit);
		for (const [storageKey, file] of fileMap.get(locale) ?? []) storage.write(storageKey, file);
		const context = { storage };
		for (const plugin of plugins) plugin.transformStorage?.(context);
		return storage;
	}
	return {
		i18n() {
			const storages = {};
			if (!i18n) return storages;
			const fallbackLang = i18n.fallbackLanguage !== null ? i18n.fallbackLanguage ?? i18n.defaultLanguage : null;
			function scan(lang) {
				if (storages[lang]) return storages[lang];
				return storages[lang] = makeStorage(lang, fallbackLang && fallbackLang !== lang ? scan(fallbackLang) : void 0);
			}
			for (const lang of i18n.languages) scan(lang);
			return storages;
		},
		single() {
			return makeStorage(EmptyLang);
		}
	};
}
function pushMapList(map, k, v) {
	let list = map.get(k);
	if (!list) {
		list = [];
		map.set(k, list);
	}
	list.push(v);
}
function transformerFallback() {
	const addedFiles = /* @__PURE__ */ new Set();
	function shouldIgnore(context) {
		return context.custom?._fallback === true;
	}
	return {
		root(root) {
			if (shouldIgnore(this)) return root;
			const isolatedStorage = new FileSystem();
			if (addedFiles.size === this.storage.files.size) return root;
			for (const file of this.storage.getFiles()) {
				if (addedFiles.has(file)) continue;
				isolatedStorage.write(file, this.storage.read(file));
			}
			root.fallback = createPageTreeBuilder(isolatedStorage, {
				...this.options,
				idPrefix: this.options.idPrefix ? `fallback:${this.options.idPrefix}` : "fallback",
				generateFallback: false,
				context: {
					...this.custom,
					_fallback: true
				}
			}).root();
			addedFiles.clear();
			return root;
		},
		file(node, file) {
			if (shouldIgnore(this)) return node;
			if (file) addedFiles.add(file);
			return node;
		},
		folder(node, _dir, metaPath) {
			if (shouldIgnore(this)) return node;
			if (metaPath) addedFiles.add(metaPath);
			return node;
		}
	};
}
var group = /^\((?<name>.+)\)$/;
var link = /^(?<external>external:)?(?:\[(?<icon>[^\]]+)])?\[(?<name>[^\]]+)]\((?<url>[^)]+)\)$/;
var separator = /^---(?:\[(?<icon>[^\]]+)])?(?<name>.+)---|^---$/;
var rest = "...";
var restReversed = "z...a";
var extractPrefix = "...";
var excludePrefix = "!";
var SymbolUnfinished = Symbol("unfinished");
var SymbolName = Symbol("name");
var SymbolOwner = Symbol("owner");
function createPageTreeBuilder(input, options) {
	const flattenPathToFullPath = /* @__PURE__ */ new Map();
	const transformers = [];
	/** virtual file path -> output page tree node (if cached) */
	const pathToNode = /* @__PURE__ */ new Map();
	let _nextId = 0;
	const { noRef = false, idPrefix, url: getUrl, generateFallback = true, sort: { by: sortBy = "path", locales: sortLocales, options: sortOptions } = {} } = options;
	/** passed as additional information to transformers */
	let ctx;
	if (options.transformers) transformers.push(...options.transformers);
	if (generateFallback) transformers.push(transformerFallback());
	if (Array.isArray(input)) {
		const [locale, storages] = input;
		ctx = {
			get builder() {
				return builder;
			},
			storage: storages[locale],
			storages,
			locale,
			transformers,
			custom: options.context,
			options
		};
	} else ctx = {
		get builder() {
			return builder;
		},
		storage: input,
		transformers,
		custom: options.context,
		options
	};
	const { storage, locale } = ctx;
	for (const file of storage.getFiles()) {
		const content = storage.read(file);
		const flattenPath = file.substring(0, file.length - extname(file).length);
		flattenPathToFullPath.set(flattenPath + "." + content.format, file);
	}
	function resolveFlattenPath(name, format) {
		return flattenPathToFullPath.get(name + "." + format) ?? name;
	}
	/**
	* try to register as the owner of `node`.
	*
	* when a node is referenced by multiple folders, this determines which folder they should belong to.
	*
	* @returns whether the owner owns the node.
	*/
	function own(ownerPath, node, priority) {
		if (node[SymbolUnfinished]) return false;
		const existing = node[SymbolOwner];
		if (!existing) {
			node[SymbolOwner] = {
				owner: ownerPath,
				priority
			};
			return true;
		}
		if (existing.owner === ownerPath) {
			existing.priority = Math.max(existing.priority, priority);
			return true;
		}
		if (existing.priority >= priority) return false;
		const folder = pathToNode.get(existing.owner);
		if (folder && folder.type === "folder") if (folder.index === node) delete folder.index;
		else {
			const idx = folder.children.indexOf(node);
			if (idx !== -1) folder.children.splice(idx, 1);
		}
		existing.owner = ownerPath;
		existing.priority = priority;
		return true;
	}
	function transferOwner(ownerPath, node) {
		const existing = node[SymbolOwner];
		if (existing) existing.owner = ownerPath;
	}
	function generateId(localId = `_${_nextId++}`) {
		let id = localId;
		if (locale) id = `${locale}:${id}`;
		if (idPrefix) id = `${idPrefix}:${id}`;
		return id;
	}
	function buildPaths(paths, filter, reversed = false) {
		const nodes = [];
		let indexNode;
		for (const path of paths) {
			if (filter && !filter(path)) continue;
			const fileNode = buildFile(path);
			if (fileNode) {
				nodes.push(fileNode);
				if (!indexNode && basename$1(path, extname(path)) === "index") indexNode = fileNode;
				continue;
			}
			const dirNode = buildFolder(path);
			if (dirNode) nodes.push(dirNode);
		}
		const factor = reversed ? -1 : 1;
		const useName = sortBy === "name";
		return nodes.sort((a, b) => {
			if (a === indexNode) return -100;
			if (b === indexNode) return 100;
			const aT = useName && a[SymbolName] || (a.type === "folder" ? a.$ref.folder : a.$ref);
			const bT = useName && b[SymbolName] || (b.type === "folder" ? b.$ref.folder : b.$ref);
			const aK = a.type === "folder" ? 10 : 0;
			const bK = b.type === "folder" ? 10 : 0;
			return factor * (aT.localeCompare(bT, sortLocales, sortOptions) + (aK - bK));
		});
	}
	function resolveLink(item) {
		const match = link.exec(item);
		if (!match?.groups) return;
		const { icon, url, name, external } = match.groups;
		let node = {
			$id: generateId(),
			type: "page",
			icon,
			name,
			url,
			external: external ? true : void 0
		};
		for (const transformer of transformers) {
			if (!transformer.file) continue;
			node = transformer.file.call(ctx, node);
		}
		return node;
	}
	function resolveSeparator(item) {
		const match = separator.exec(item);
		if (!match?.groups) return;
		let node = {
			$id: generateId(),
			type: "separator",
			icon: match.groups.icon,
			name: match.groups.name
		};
		for (const transformer of transformers) {
			if (!transformer.separator) continue;
			node = transformer.separator.call(ctx, node);
		}
		return node;
	}
	function resolveFolderItem(folderPath, item, outputArray, excludedPaths) {
		if (item === rest || item === restReversed) {
			outputArray.push(item);
			return;
		}
		const separator = resolveSeparator(item);
		if (separator) {
			outputArray.push(separator);
			return;
		}
		const link = resolveLink(item);
		if (link) {
			outputArray.push(link);
			return;
		}
		if (item.startsWith(excludePrefix)) {
			const path = joinPath(folderPath, item.slice(1));
			excludedPaths.add(path);
			excludedPaths.add(resolveFlattenPath(path, "page"));
			return;
		}
		if (item.startsWith(extractPrefix)) {
			const path = joinPath(folderPath, item.slice(3));
			const node = buildFolder(path);
			if (!node) return;
			const children = node.index ? [node.index, ...node.children] : node.children;
			if (own(folderPath, node, 2)) {
				for (const child of children) {
					transferOwner(folderPath, child);
					outputArray.push(child);
				}
				excludedPaths.add(path);
			} else for (const child of children) if (own(folderPath, child, 2)) outputArray.push(child);
			return;
		}
		let path = joinPath(folderPath, item);
		let node = buildFolder(path);
		if (!node) {
			path = resolveFlattenPath(path, "page");
			node = buildFile(path);
		}
		if (!node || !own(folderPath, node, 2)) return;
		outputArray.push(node);
		excludedPaths.add(path);
	}
	function buildFolder(folderPath, isGlobalRoot = false) {
		const cached = pathToNode.get(folderPath);
		if (cached) return cached;
		const files = storage.readDir(folderPath);
		if (!files) return;
		let metaPath = resolveFlattenPath(joinPath(folderPath, "meta"), "meta");
		let meta = storage.read(metaPath);
		if (!meta || meta.format !== "meta") {
			meta = void 0;
			metaPath = void 0;
		}
		const metadata = meta?.data ?? {};
		const isRoot = metadata.root ?? isGlobalRoot;
		let node = {
			type: "folder",
			name: null,
			root: metadata.root,
			defaultOpen: metadata.defaultOpen,
			description: metadata.description,
			collapsible: metadata.collapsible,
			children: [],
			$id: generateId(folderPath),
			$ref: {
				folder: folderPath,
				meta: metaPath
			},
			[SymbolUnfinished]: true
		};
		pathToNode.set(folderPath, node);
		let indexPath;
		if (metadata.pagesIndex) {
			const resolvedPath = resolveFlattenPath(joinPath(folderPath, metadata.pagesIndex), "page");
			const page = buildFile(resolvedPath);
			if (page && own(folderPath, page, 3)) {
				indexPath = resolvedPath;
				node.index = page;
			} else node.index = resolveLink(metadata.pagesIndex);
		} else if (!isRoot) {
			const defaultPath = resolveFlattenPath(joinPath(folderPath, "index"), "page");
			const page = buildFile(defaultPath);
			if (page && own(folderPath, page, 0)) {
				indexPath = defaultPath;
				node.index = page;
			}
		}
		if (metadata.pages) {
			const outputArray = [];
			const excludedPaths = /* @__PURE__ */ new Set();
			for (const item of metadata.pages) resolveFolderItem(folderPath, item, outputArray, excludedPaths);
			if (indexPath) if (excludedPaths.has(indexPath)) delete node.index;
			else excludedPaths.add(indexPath);
			for (const item of outputArray) {
				if (item !== rest && item !== restReversed) {
					node.children.push(item);
					continue;
				}
				const resolvedItem = buildPaths(files, (file) => !excludedPaths.has(file), item === restReversed);
				for (const child of resolvedItem) if (own(folderPath, child, 0)) node.children.push(child);
			}
		} else for (const item of buildPaths(files, indexPath ? (file) => file !== indexPath : void 0)) if (own(folderPath, item, 0)) node.children.push(item);
		node.icon = metadata.icon ?? node.index?.icon;
		node.name = metadata.title ?? node.index?.name;
		node[SymbolName] = metadata.title ?? node.index?.[SymbolName];
		if (!node.name) {
			const folderName = basename$1(folderPath);
			node.name = pathToName(group.exec(folderName)?.[1] ?? folderName);
		}
		for (const transformer of transformers) {
			if (!transformer.folder) continue;
			node = transformer.folder.call(ctx, node, folderPath, metaPath);
		}
		pathToNode.set(folderPath, node);
		delete node[SymbolUnfinished];
		return node;
	}
	function buildFile(path) {
		const cached = pathToNode.get(path);
		if (cached) return cached;
		const page = storage.read(path);
		if (!page || page.format !== "page") return;
		const { title, description, icon } = page.data;
		let item = {
			$id: generateId(path),
			type: "page",
			name: title ?? pathToName(basename$1(path, extname(path))),
			description,
			icon,
			url: getUrl(page.slugs, ctx.locale),
			$ref: path,
			[SymbolName]: title
		};
		for (const transformer of transformers) {
			if (!transformer.file) continue;
			item = transformer.file.call(ctx, item, path);
		}
		pathToNode.set(path, item);
		return item;
	}
	const builder = {
		resolveFlattenPath,
		root(id = "root", path = "") {
			const folder = buildFolder(path, true);
			for (const node of pathToNode.values()) {
				delete node[SymbolName];
				delete node[SymbolOwner];
				if (noRef && "$ref" in node) delete node.$ref;
			}
			let root = {
				type: "root",
				$ref: folder?.$ref,
				$id: generateId(id),
				name: folder?.name || "Docs",
				description: folder?.description,
				children: folder ? folder.children : []
			};
			for (const transformer of transformers) {
				if (!transformer.root) continue;
				root = transformer.root.call(ctx, root);
			}
			return root;
		}
	};
	return builder;
}
/**
* Get item name from file name
*
* @param name - file name
*/
function pathToName(name) {
	const result = [];
	for (const c of name) if (result.length === 0) result.push(c.toLocaleUpperCase());
	else if (c === "-") result.push(" ");
	else result.push(c);
	return result.join("");
}
function createPageIndexer({ url }) {
	const pages = /* @__PURE__ */ new Map();
	const pathToMeta = /* @__PURE__ */ new Map();
	const pathToPage = /* @__PURE__ */ new Map();
	return {
		scan(storage, lang) {
			for (const filePath of storage.getFiles()) {
				const item = storage.read(filePath);
				const prefix = lang ? `${lang}.` : ".";
				const path = prefix + filePath;
				if (item.format === "meta") {
					pathToMeta.set(path, {
						type: item.type,
						path: item.path,
						absolutePath: item.absolutePath,
						data: item.data
					});
					continue;
				}
				const page = {
					type: item.type,
					path: item.path,
					absolutePath: item.absolutePath,
					url: url(item.slugs, lang),
					slugs: item.slugs,
					data: item.data,
					locale: lang
				};
				pathToPage.set(path, page);
				pages.set(prefix + page.slugs.join("/"), page);
			}
		},
		getPage(path, lang = "") {
			return pathToPage.get(`${lang}.${path}`);
		},
		getMeta(path, lang = "") {
			return pathToMeta.get(`${lang}.${path}`);
		},
		getPageBySlugs(slugs, lang = "") {
			let page = pages.get(`${lang}.${slugs.join("/")}`);
			if (page) return page;
			page = pages.get(`${lang}.${slugs.map(decodeURI).join("/")}`);
			if (page) return page;
		},
		/** do not filter by language if `lang` is not specified */
		getPages(lang) {
			const out = [];
			for (const [key, value] of pages.entries()) if (lang === void 0 || key.startsWith(`${lang}.`)) out.push(value);
			return out;
		}
	};
}
function createGetUrl(baseUrl, i18n) {
	const baseSlugs = baseUrl.split("/");
	return (slugs, locale) => {
		const hideLocale = i18n?.hideLocale ?? "never";
		let urlLocale;
		if (hideLocale === "never") urlLocale = locale;
		else if (hideLocale === "default-locale" && locale !== i18n?.defaultLanguage) urlLocale = locale;
		const paths = [...baseSlugs, ...slugs];
		if (urlLocale) paths.unshift(urlLocale);
		return `/${paths.filter((v) => v.length > 0).join("/")}`;
	};
}
function loader$7(...args) {
	const loaderConfig = args.length === 2 ? resolveConfig(args[0], args[1]) : resolveConfig(args[0].source, args[0]);
	const { i18n } = loaderConfig;
	const storage = i18n ? createContentStorageBuilder(loaderConfig).i18n() : createContentStorageBuilder(loaderConfig).single();
	const indexer = createPageIndexer(loaderConfig);
	if (storage instanceof FileSystem) indexer.scan(storage);
	else for (const locale in storage) indexer.scan(storage[locale], locale);
	let pageTrees;
	function getPageTrees() {
		if (pageTrees) return pageTrees;
		const { plugins, url, pageTree: pageTreeConfig } = loaderConfig;
		const transformers = [];
		if (pageTreeConfig?.transformers) transformers.push(...pageTreeConfig.transformers);
		for (const plugin of plugins) if (plugin.transformPageTree) transformers.push(plugin.transformPageTree);
		const options = {
			url,
			...pageTreeConfig,
			transformers
		};
		if (storage instanceof FileSystem) return pageTrees = createPageTreeBuilder(storage, options).root();
		else {
			const out = {};
			for (const locale in storage) out[locale] = createPageTreeBuilder([locale, storage], options).root();
			return pageTrees = out;
		}
	}
	return {
		_i18n: i18n,
		get pageTree() {
			return getPageTrees();
		},
		set pageTree(v) {
			pageTrees = v;
		},
		getPageByHref(href, { dir = "", language = i18n?.defaultLanguage } = {}) {
			const [value, hash] = href.split("#", 2);
			let target;
			if (value.startsWith("./") || value.startsWith("../")) {
				const path = joinPath(dir, value);
				target = indexer.getPage(path, language);
			} else target = this.getPages(language).find((item) => item.url === value);
			if (target) return {
				page: target,
				hash
			};
		},
		resolveHref(href, parent) {
			if (href.startsWith("./") || href.startsWith("../")) {
				const target = this.getPageByHref(href, {
					dir: dirname(parent.path),
					language: parent.locale
				});
				if (target) return target.hash ? `${target.page.url}#${target.hash}` : target.page.url;
			}
			return href;
		},
		getPages(language) {
			return indexer.getPages(language);
		},
		getLanguages() {
			const list = [];
			if (!i18n) return list;
			for (const language of i18n.languages) list.push({
				language,
				pages: this.getPages(language)
			});
			return list;
		},
		getPage(slugs = [], language = i18n?.defaultLanguage) {
			return indexer.getPageBySlugs(slugs, language);
		},
		getNodeMeta(node, language = i18n?.defaultLanguage) {
			const ref = node.$ref;
			if (!ref?.meta) return;
			return indexer.getMeta(ref.meta, language);
		},
		getNodePage(node, language = i18n?.defaultLanguage) {
			const ref = node.$ref;
			if (!ref) return;
			return indexer.getPage(ref, language);
		},
		getPageTree(locale) {
			if (i18n) {
				const trees = getPageTrees();
				if (locale && trees[locale]) return trees[locale];
				return trees[i18n.defaultLanguage];
			}
			return getPageTrees();
		},
		generateParams(slug, lang) {
			if (i18n) return this.getLanguages().flatMap((entry) => entry.pages.map((page) => ({
				[slug ?? "slug"]: page.slugs,
				[lang ?? "lang"]: entry.language
			})));
			return this.getPages().map((page) => ({ [slug ?? "slug"]: page.slugs }));
		},
		async serializePageTree(tree) {
			const { renderToString } = await import("react-dom/server.edge");
			return {
				$fumadocs_loader: "page-tree",
				data: visit$1(tree, (node) => {
					node = { ...node };
					if ("icon" in node && node.icon) node.icon = renderToString(node.icon);
					if (node.name) node.name = renderToString(node.name);
					if ("children" in node) node.children = [...node.children];
					return node;
				})
			};
		}
	};
}
function resolveConfig(input, { slugs, icon, plugins = [], baseUrl, url, ...base }) {
	let config = {
		...base,
		url: url ? (...args) => normalizeUrl(url(...args)) : createGetUrl(baseUrl, base.i18n),
		input,
		plugins: buildPlugins([
			icon && iconPlugin(icon),
			...typeof plugins === "function" ? plugins({ typedPlugin: (plugin) => plugin }) : plugins,
			slugsPlugin(slugs)
		])
	};
	for (const plugin of config.plugins) {
		const result = plugin.config?.(config);
		if (result) config = result;
	}
	return config;
}
var priorityMap = {
	pre: 1,
	default: 0,
	post: -1
};
function buildPlugins(plugins, sort = true) {
	const flatten = [];
	for (const plugin of plugins) if (Array.isArray(plugin)) flatten.push(...buildPlugins(plugin, false));
	else if (plugin) flatten.push(plugin);
	if (sort) return flatten.sort((a, b) => priorityMap[b.enforce ?? "default"] - priorityMap[a.enforce ?? "default"]);
	return flatten;
}
//#endregion
//#region node_modules/.pnpm/fumadocs-core@16.11.5_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.5_@type_72cb31c98dbdcd9237f5eec6550b9329/node_modules/fumadocs-core/dist/source/llms.js
function llms(loader, config = {}) {
	const { TAB = "  ", renderName = (node, ctx) => {
		if (node.type === "page") {
			const page = loader.getNodePage(node, ctx.lang);
			if (page?.data.title) return page.data.title;
		} else if (node.type !== "separator") {
			const meta = loader.getNodeMeta(node, ctx.lang);
			if (meta?.data.title) return meta.data.title;
		}
		return typeof node.name === "string" ? node.name : "";
	}, renderDescription = (node, ctx) => {
		if (node.type === "page") {
			const page = loader.getNodePage(node, ctx.lang);
			if (page?.data.description) return page.data.description;
		} else {
			const meta = loader.getNodeMeta(node, ctx.lang);
			if (meta?.data.description) return meta.data.description;
		}
		return typeof node.description === "string" ? node.description : "";
	} } = config;
	function formatListItem(name, description, indent) {
		const prefix = TAB.repeat(indent);
		description = description.trim();
		if (description.length > 0) return `${prefix}- ${name}: ${description}`;
		return `${prefix}- ${name}`;
	}
	function formatNode(node, indent, ctx) {
		switch (node.type) {
			case "page": return formatListItem(formatMarkdownLink(renderName(node, ctx), node.url), renderDescription(node, ctx), indent);
			case "folder": {
				const out = [];
				out.push(formatListItem(renderName(node, ctx), renderDescription(node, ctx), indent));
				if (node.index) out.push(formatNode(node.index, indent + 1, ctx));
				for (const child of node.children) out.push(formatNode(child, indent + 1, ctx));
				return out.join("\n");
			}
			case "separator": return "\n" + formatListItem(`**${renderName(node, ctx) || "Separator"}**`, "", indent);
		}
	}
	function index(lang) {
		if (loader._i18n && lang === void 0) {
			const { languages } = loader._i18n;
			return languages.map(index).join("\n\n");
		}
		const pageTree = loader.getPageTree(lang);
		const out = [];
		const ctx = { lang };
		out.push(`# ${renderName(pageTree, ctx)}`, "");
		const description = renderDescription(pageTree, ctx);
		if (description) out.push(`> ${description}`, "");
		for (const child of pageTree.children) out.push(formatNode(child, 0, ctx));
		return out.join("\n");
	}
	return {
		/**
		* generate `llms.txt` content in Markdown format.
		*
		* use `indexNode(node)` instead for more control (e.g. add extra sections to output).
		*/
		index,
		/**
		* generate `llms.txt` content for a single page tree node.
		*/
		indexNode(node, lang) {
			return formatNode(node, 0, { lang });
		}
	};
}
function formatMarkdownLink(title, url) {
	return `[${title.replace(/([[\]])/g, "\\$1")}](${url.replace(/([()])/g, "\\$1")})`;
}
//#endregion
//#region lib/shared.ts
/** 站点正式名 · SEO 尾缀 */
var siteTitle = "GTAMODX开发文档";
/** 导航栏短名 */
var appName = siteTitle;
var docsRoute = "/docs";
var docsImageRoute = "/og/docs";
var docsContentRoute = "/llms.mdx/docs";
var gitConfig = {
	user: "GTANext",
	repo: "docs",
	branch: "main"
};
var getContentUrl = createGetUrl(docsContentRoute);
var getImageUrl = createGetUrl(docsImageRoute);
/**
* 页面 Markdown 文本地址（/llms.mdx/docs/<slug>/content.md）
* 与 proxy 协商、MarkdownCopyButton 共用
*/
function getPageMarkdownUrl(page) {
	const segments = [...page.slugs, "content.md"];
	return {
		segments,
		url: getContentUrl(segments)
	};
}
/** 页面 OG 图地址（/og/docs/<slug>/image.png） */
function getPageImageUrl(page) {
	const segments = [...page.slugs, "image.png"];
	return {
		segments,
		url: getImageUrl(segments)
	};
}
//#endregion
//#region app/routes/not-found.tsx
var not_found_exports = /* @__PURE__ */ __exportAll$1({
	default: () => not_found_default,
	loader: () => loader$6,
	meta: () => meta$3
});
/** 兜底路由只负责 404 状态，渲染交给 root ErrorBoundary 的 NotFound */
function loader$6() {
	throw new Response("Not found", { status: 404 });
}
function meta$3() {
	return [
		{ title: `页面不存在 - ${siteTitle}` },
		{
			name: "description",
			content: "请求的文档地址不存在。"
		},
		{
			name: "robots",
			content: "noindex"
		}
	];
}
/** 404：文档根仍可用，避免只剩死链 */
var not_found_default = UNSAFE_withComponentProps(function NotFound() {
	return /* @__PURE__ */ jsx("main", {
		className: "mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-6 py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "relative isolate overflow-hidden rounded-3xl border border-fd-border bg-fd-card/70 p-8 sm:p-12",
			children: [
				/* @__PURE__ */ jsx("div", { className: "gta-city-grid pointer-events-none absolute inset-0 -z-10 opacity-40" }),
				/* @__PURE__ */ jsx("p", {
					className: "text-sm font-medium text-fd-primary",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl",
					children: "找不到这个页面"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-4 max-w-xl text-sm leading-6 text-fd-muted-foreground",
					children: "链接可能已经失效，或者地址拼写有误。回到文档目录重新查找，或者从首页选择你要开发的游戏与工具。"
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ jsxs(Link, {
						to: docsRoute,
						className: "inline-flex items-center gap-2 rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground shadow-sm transition hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-ring",
						children: [/* @__PURE__ */ jsx(Compass, { className: "size-4" }), "回到文档"]
					}), /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card/70 px-5 py-2.5 text-sm font-medium transition hover:bg-fd-accent hover:text-fd-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-ring",
						children: "打开首页"
					})]
				})
			]
		})
	});
});
//#endregion
//#region app/root.tsx
var root_exports = /* @__PURE__ */ __exportAll$1({
	ErrorBoundary: () => ErrorBoundary,
	Layout: () => Layout,
	default: () => root_default,
	links: () => links,
	meta: () => meta$2,
	middleware: () => middleware
});
var links = () => [
	{
		rel: "preconnect",
		href: "https://fonts.googleapis.com"
	},
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous"
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
	}
];
function Layout({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "zh-CN",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
			/* @__PURE__ */ jsx("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			}),
			/* @__PURE__ */ jsx(Meta, {}),
			/* @__PURE__ */ jsx(Links, {})
		] }), /* @__PURE__ */ jsxs("body", {
			className: "flex flex-col min-h-screen",
			children: [
				/* @__PURE__ */ jsx(Provider, { children }),
				/* @__PURE__ */ jsx(ScrollRestoration, {}),
				/* @__PURE__ */ jsx(Scripts, {})
			]
		})]
	});
}
var root_default = UNSAFE_withComponentProps(function App() {
	return /* @__PURE__ */ jsx(Outlet, {});
});
var ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary({ error }) {
	if (isRouteErrorResponse(error) && error.status === 404) return /* @__PURE__ */ jsx(not_found_default, {});
	let message = "页面出错了";
	let details = "页面渲染时发生了未知错误。";
	if (isRouteErrorResponse(error)) {
		message = `${error.status}`;
		details = error.statusText;
	}
	return /* @__PURE__ */ jsxs("main", {
		className: "mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-6 py-24",
		children: [
			/* @__PURE__ */ jsx("h1", {
				className: "text-3xl font-semibold tracking-tight",
				children: message
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-3 text-sm text-fd-muted-foreground",
				children: details
			}),
			null
		]
	});
});
var { rewrite: rewriteDocs } = rewritePath(`${docsRoute}{/*path}`, `${docsContentRoute}{/*path}/content.md`);
var { rewrite: rewriteSuffix } = rewritePath(`${docsRoute}{/*path}.md`, `${docsContentRoute}{/*path}/content.md`);
/**
* Markdown 协商：显式 .md 后缀或 Accept 偏好 markdown 时，重定向到 content.md 资源
*/
var markdownNegotiation = async ({ request }, next) => {
	const url = new URL(request.url);
	const suffixPath = rewriteSuffix(url.pathname);
	if (suffixPath) return new Response(null, {
		status: 302,
		headers: { Location: new URL(suffixPath, url).toString() }
	});
	if (isMarkdownPreferred(request)) {
		const docsPath = rewriteDocs(url.pathname);
		if (docsPath) return new Response(null, {
			status: 302,
			headers: {
				Location: new URL(docsPath, url).toString(),
				Vary: "Accept"
			}
		});
	}
	return next();
};
var middleware = [markdownNegotiation];
function meta$2() {
	return [{ title: siteTitle }, {
		name: "description",
		content: "GTA III / VC / SA 插件与 CLEO 开发文档 · plugin-sdk ASI 与 opcode 调用"
	}];
}
//#endregion
//#region lib/terms.ts
/**
* 全站中文名词表（导航 / 侧栏 / 交叉链接统一用这里）
*
* 原则：
* - 分区入口页侧栏名一律「综述」
* - 产品/协议专名保留原文：CLEO · CLEO+ · plugin-sdk · Redux · OP · Lua
* - 游戏代号：SA · VC · III（正文可写 San Andreas / Vice City / GTA III）
* - 分区中文：插件 · 技能（路径仍是 plugins / skill）
*/
var terms = {
	/** 任意分区 / 全站的入口概览页 */
	overview: "综述",
	/** 文档大区 */
	xbase: "XBase",
	plugins: "插件",
	cleo: "CLEO",
	skill: "技能",
	/** 全站文档根 */
	docs: "文档",
	/** 首页主 CTA 文案（动作，不是侧栏页名） */
	start: "快速开始"
};
terms.xbase, `${docsRoute}`, terms.plugins, `${docsRoute}`, terms.cleo, `${docsRoute}`, terms.skill, `${docsRoute}`;
//#endregion
//#region lib/layout.shared.tsx
/** 文档 notebook 布局 / 首页共用：品牌 + GitHub icon */
function baseOptions() {
	return {
		nav: {
			title: appName,
			/** notebook 顶栏常驻；首页忽略此字段 */
			mode: "top",
			url: "/"
		},
		/** 分区链接在 AppHeader 二级；这里只留给 githubUrl 生成 icon */
		links: [],
		githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`
	};
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/popover/root/PopoverRootContext.mjs
var PopoverRootContext = /*#__PURE__*/ React.createContext(void 0);
if (process.env.NODE_ENV !== "production") PopoverRootContext.displayName = "PopoverRootContext";
function usePopoverRootContext(optional) {
	const context = React.useContext(PopoverRootContext);
	if (context === void 0 && !optional) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: PopoverRootContext is missing. Popover parts must be placed within <Popover.Root>." : formatErrorMessage(47));
	return context;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/popover/store/PopoverStore.mjs
function createInitialState() {
	return {
		...createInitialPopupStoreState(),
		disabled: false,
		modal: false,
		focusManagerModal: false,
		instantType: void 0,
		openMethod: null,
		openChangeReason: null,
		titleElementId: void 0,
		descriptionElementId: void 0,
		stickIfOpen: true,
		nested: false,
		openOnHover: false,
		closeDelay: 0,
		hasViewport: false
	};
}
var selectors = {
	...popupStoreSelectors,
	disabled: createSelector((state) => state.disabled),
	instantType: createSelector((state) => state.instantType),
	openMethod: createSelector((state) => state.openMethod),
	openChangeReason: createSelector((state) => state.openChangeReason),
	modal: createSelector((state) => state.modal),
	focusManagerModal: createSelector((state) => state.focusManagerModal),
	stickIfOpen: createSelector((state) => state.stickIfOpen),
	titleElementId: createSelector((state) => state.titleElementId),
	descriptionElementId: createSelector((state) => state.descriptionElementId),
	openOnHover: createSelector((state) => state.openOnHover),
	closeDelay: createSelector((state) => state.closeDelay),
	hasViewport: createSelector((state) => state.hasViewport)
};
var PopoverStore = class PopoverStore extends ReactStore {
	constructor(initialState, floatingId, nested = false) {
		const initial = {
			...createInitialState(),
			...initialState
		};
		const triggerElements = new PopupTriggerMap();
		if (initial.open && initialState?.mounted === void 0) initial.mounted = true;
		initial.floatingRootContext = createPopupFloatingRootContext(triggerElements, floatingId, nested);
		super(initial, {
			popupRef: /*#__PURE__*/ React.createRef(),
			backdropRef: /*#__PURE__*/ React.createRef(),
			internalBackdropRef: /*#__PURE__*/ React.createRef(),
			onOpenChange: void 0,
			onOpenChangeComplete: void 0,
			triggerFocusTargetRef: /*#__PURE__*/ React.createRef(),
			beforeContentFocusGuardRef: /*#__PURE__*/ React.createRef(),
			stickIfOpenTimeout: new Timeout(),
			triggerElements
		}, selectors);
	}
	setOpen = (nextOpen, eventDetails) => {
		const isHover = eventDetails.reason === triggerHover;
		const isKeyboardClick = eventDetails.reason === "trigger-press" && eventDetails.event.detail === 0;
		const isDismissClose = !nextOpen && (eventDetails.reason === "escape-key" || eventDetails.reason == null);
		const shouldPreventUnmountOnClose = attachPreventUnmountOnClose(eventDetails);
		const activeTriggerId = this.select("activeTriggerId");
		if (!nextOpen && eventDetails.reason === "close-press" && eventDetails.trigger == null && activeTriggerId != null) eventDetails.trigger = this.context.triggerElements.getById(activeTriggerId) ?? this.select("activeTriggerElement") ?? void 0;
		this.context.onOpenChange?.(nextOpen, eventDetails);
		if (eventDetails.isCanceled) return;
		this.state.floatingRootContext.dispatchOpenChange(nextOpen, eventDetails);
		const changeState = () => {
			const updatedState = {
				open: nextOpen,
				openChangeReason: eventDetails.reason
			};
			setPopupOpenState(updatedState, nextOpen, eventDetails.trigger, shouldPreventUnmountOnClose());
			this.update(updatedState);
		};
		if (isHover) {
			this.set("stickIfOpen", true);
			this.context.stickIfOpenTimeout.start(500, () => {
				this.set("stickIfOpen", false);
			});
			ReactDOM$1.flushSync(changeState);
		} else changeState();
		if (isKeyboardClick || isDismissClose) this.set("instantType", isKeyboardClick ? "click" : "dismiss");
		else if (eventDetails.reason === "focus-out") this.set("instantType", "focus");
		else this.set("instantType", void 0);
	};
	static useStore(externalStore, initialState) {
		const { store, internalStore } = usePopupStore(externalStore, (floatingId, nested) => new PopoverStore(initialState, floatingId, nested));
		React.useEffect(() => internalStore?.disposeEffect(), [internalStore]);
		return store;
	}
	disposeEffect = () => {
		return this.context.stickIfOpenTimeout.disposeEffect();
	};
};
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/popover/root/PopoverRoot.mjs
function PopoverRootComponent({ props }) {
	const { children, open: openProp, defaultOpen = false, onOpenChange, onOpenChangeComplete, modal = false, handle, triggerId: triggerIdProp, defaultTriggerId: defaultTriggerIdProp = null } = props;
	const store = PopoverStore.useStore(handle?.store, {
		modal,
		open: defaultOpen,
		openProp,
		activeTriggerId: defaultTriggerIdProp,
		triggerIdProp
	});
	useInitialOpenSync(store, openProp, defaultOpen, defaultTriggerIdProp);
	store.useControlledProp("openProp", openProp);
	store.useControlledProp("triggerIdProp", triggerIdProp);
	const open = store.useState("open");
	const mounted = store.useState("mounted");
	const payload = store.useState("payload");
	const nested = useFloatingParentNodeId() != null;
	store.useContextCallback("onOpenChange", onOpenChange);
	store.useContextCallback("onOpenChangeComplete", onOpenChangeComplete);
	usePopupRootSync(store, open);
	useImplicitActiveTrigger(store);
	const { forceUnmount } = useOpenStateTransitions(open, store, () => {
		store.update({
			stickIfOpen: true,
			openChangeReason: null
		});
	});
	store.useSyncedValues({
		modal,
		nested
	});
	React.useEffect(() => {
		if (!open) store.context.stickIfOpenTimeout.clear();
	}, [store, open]);
	const handleImperativeClose = React.useCallback(() => {
		store.setOpen(false, createChangeEventDetails(imperativeAction));
	}, [store]);
	React.useImperativeHandle(props.actionsRef, () => ({
		unmount: forceUnmount,
		close: handleImperativeClose
	}), [forceUnmount, handleImperativeClose]);
	const shouldRenderInteractions = open || mounted;
	const popoverContext = React.useMemo(() => ({ store }), [store]);
	return /*#__PURE__*/ jsxs(PopoverRootContext.Provider, {
		value: popoverContext,
		children: [shouldRenderInteractions && /*#__PURE__*/ jsx(PopoverInteractions, {
			store,
			modal
		}), typeof children === "function" ? children({ payload }) : children]
	});
}
/**
* Groups all parts of the popover.
* Doesn't render its own HTML element.
*
* Documentation: [Base UI Popover](https://base-ui.com/react/components/popover)
*/
function PopoverRoot(props) {
	if (usePopoverRootContext(true)) return /*#__PURE__*/ jsx(PopoverRootComponent, { props });
	return /*#__PURE__*/ jsx(FloatingTree, { children: /*#__PURE__*/ jsx(PopoverRootComponent, { props }) });
}
function PopoverInteractions({ store, modal }) {
	const floatingRootContext = store.useState("floatingRootContext");
	const dismiss = useDismiss(floatingRootContext, { outsidePressEvent: {
		mouse: modal === "trap-focus" ? "sloppy" : "intentional",
		touch: "sloppy"
	} });
	const activeTriggerProps = dismiss.reference ?? EMPTY_OBJECT;
	const inactiveTriggerProps = dismiss.trigger ?? EMPTY_OBJECT;
	const popupProps = React.useMemo(() => mergeProps(FOCUSABLE_POPUP_PROPS, dismiss.floating), [dismiss.floating]);
	usePopupInteractionProps(store, {
		activeTriggerProps,
		inactiveTriggerProps,
		popupProps
	});
	return null;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/utils/popups/useTriggerFocusGuards.mjs
/**
* Minimal store interface required by the focus guard hook.
* Both PopoverStore and MenuStore satisfy this interface.
*/
/**
* Provides focus guard handlers for popup triggers (Popover, Menu).
*
* When the popup is open, invisible focus guard elements are placed before and after
* the trigger. These handlers close the popup and move focus to the appropriate
* tabbable element when the guards receive focus (i.e. when the user tabs out).
*/
function useTriggerFocusGuards(store, triggerElementRef) {
	const preFocusGuardRef = React.useRef(null);
	function handlePreFocusGuardFocus(event) {
		ReactDOM$1.flushSync(() => {
			store.setOpen(false, createChangeEventDetails(focusOut, event.nativeEvent, event.currentTarget));
		});
		getTabbableBeforeElement(preFocusGuardRef.current)?.focus();
	}
	function handleFocusTargetFocus(event) {
		const positionerElement = store.select("positionerElement");
		if (positionerElement && isOutsideEvent(event, positionerElement)) store.context.beforeContentFocusGuardRef.current?.focus();
		else {
			ReactDOM$1.flushSync(() => {
				store.setOpen(false, createChangeEventDetails(focusOut, event.nativeEvent, event.currentTarget));
			});
			let nextTabbable = getTabbableAfterElement(store.context.triggerFocusTargetRef.current || triggerElementRef.current);
			while (nextTabbable !== null && contains(positionerElement, nextTabbable)) {
				const prevTabbable = nextTabbable;
				nextTabbable = getNextTabbable(nextTabbable);
				if (nextTabbable === prevTabbable) break;
			}
			nextTabbable?.focus();
		}
	}
	return {
		preFocusGuardRef,
		handlePreFocusGuardFocus,
		handleFocusTargetFocus
	};
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/popover/trigger/PopoverTrigger.mjs
/**
* A button that opens the popover.
* Renders a `<button>` element.
*
* Documentation: [Base UI Popover](https://base-ui.com/react/components/popover)
*/
var PopoverTrigger$1 = /*#__PURE__*/ React.forwardRef(function PopoverTrigger(componentProps, forwardedRef) {
	const { render, className, style, disabled = false, nativeButton = true, handle, payload, openOnHover = false, delay = 300, closeDelay = 0, id: idProp, ...elementProps } = componentProps;
	const rootContext = usePopoverRootContext(true);
	const store = handle?.store ?? rootContext?.store;
	if (!store) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: <Popover.Trigger> must be either used within a <Popover.Root> component or provided with a handle." : formatErrorMessage(74));
	const thisTriggerId = useBaseUiId(idProp);
	const isTriggerActive = store.useState("isTriggerActive", thisTriggerId);
	const floatingContext = store.useState("floatingRootContext");
	const isOpenedByThisTrigger = store.useState("isOpenedByTrigger", thisTriggerId);
	const popupId = store.useState("triggerPopupId", thisTriggerId);
	const triggerElementRef = React.useRef(null);
	const { registerTrigger, isMountedByThisTrigger } = useTriggerDataForwarding(thisTriggerId, triggerElementRef, store, {
		payload,
		disabled,
		openOnHover,
		closeDelay
	});
	const openReason = store.useState("openChangeReason");
	const stickIfOpen = store.useState("stickIfOpen");
	const openMethod = store.useState("openMethod");
	const focusManagerModal = store.useState("focusManagerModal");
	const hoverProps = useHoverReferenceInteraction(floatingContext, {
		enabled: !disabled && floatingContext != null && openOnHover && (openMethod !== "touch" || openReason !== "trigger-press"),
		mouseOnly: true,
		move: false,
		handleClose: safePolygon(),
		restMs: delay,
		delay: { close: closeDelay },
		triggerElementRef,
		isActiveTrigger: isTriggerActive,
		isClosing: () => store.select("transitionStatus") === "ending"
	});
	const click = useClick(floatingContext, {
		enabled: floatingContext != null,
		stickIfOpen
	});
	const interactionTypeProps = useOpenMethodTriggerProps(() => store.select("open"), (interactionType) => {
		store.set("openMethod", interactionType);
	});
	const rootTriggerProps = store.useState("triggerProps", isMountedByThisTrigger);
	const { getButtonProps, buttonRef } = useButton({
		disabled,
		native: nativeButton
	});
	const stateAttributesMapping = { open(value) {
		if (value && openReason === "trigger-press") return pressableTriggerOpenStateMapping.open(value);
		return triggerOpenStateMapping$1.open(value);
	} };
	const { preFocusGuardRef, handlePreFocusGuardFocus, handleFocusTargetFocus } = useTriggerFocusGuards(store, triggerElementRef);
	const element = useRenderElement("button", componentProps, {
		state: {
			disabled,
			open: isOpenedByThisTrigger
		},
		ref: [
			buttonRef,
			forwardedRef,
			registerTrigger,
			triggerElementRef
		],
		props: [
			click.reference,
			hoverProps,
			rootTriggerProps,
			interactionTypeProps,
			{
				[CLICK_TRIGGER_IDENTIFIER]: "",
				id: thisTriggerId,
				"aria-haspopup": "dialog",
				"aria-expanded": isOpenedByThisTrigger,
				"aria-controls": popupId
			},
			elementProps,
			getButtonProps
		],
		stateAttributesMapping
	});
	if (isMountedByThisTrigger && !focusManagerModal) return /*#__PURE__*/ jsxs(React.Fragment, { children: [
		/*#__PURE__*/ jsx(FocusGuard, {
			ref: preFocusGuardRef,
			onFocus: handlePreFocusGuardFocus
		}),
		/*#__PURE__*/ jsx(React.Fragment, { children: element }, thisTriggerId),
		/*#__PURE__*/ jsx(FocusGuard, {
			ref: store.context.triggerFocusTargetRef,
			onFocus: handleFocusTargetFocus
		})
	] });
	return /*#__PURE__*/ jsx(React.Fragment, { children: element }, thisTriggerId);
});
if (process.env.NODE_ENV !== "production") PopoverTrigger$1.displayName = "PopoverTrigger";
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/popover/portal/PopoverPortalContext.mjs
var PopoverPortalContext = /*#__PURE__*/ React.createContext(void 0);
if (process.env.NODE_ENV !== "production") PopoverPortalContext.displayName = "PopoverPortalContext";
function usePopoverPortalContext() {
	const value = React.useContext(PopoverPortalContext);
	if (value === void 0) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: <Popover.Portal> is missing." : formatErrorMessage(45));
	return value;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/popover/portal/PopoverPortal.mjs
/**
* A portal element that moves the popup to a different part of the DOM.
* By default, the portal element is appended to `<body>`.
* Renders a `<div>` element.
*
* Documentation: [Base UI Popover](https://base-ui.com/react/components/popover)
*/
var PopoverPortal = /*#__PURE__*/ React.forwardRef(function PopoverPortal(props, forwardedRef) {
	const { keepMounted = false, ...portalProps } = props;
	const { store } = usePopoverRootContext();
	if (!(store.useState("mounted") || keepMounted)) return null;
	return /*#__PURE__*/ jsx(PopoverPortalContext.Provider, {
		value: keepMounted,
		children: /*#__PURE__*/ jsx(FloatingPortal, {
			ref: forwardedRef,
			...portalProps
		})
	});
});
if (process.env.NODE_ENV !== "production") PopoverPortal.displayName = "PopoverPortal";
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/popover/positioner/PopoverPositionerContext.mjs
var PopoverPositionerContext = /*#__PURE__*/ React.createContext(void 0);
if (process.env.NODE_ENV !== "production") PopoverPositionerContext.displayName = "PopoverPositionerContext";
function usePopoverPositionerContext() {
	const context = React.useContext(PopoverPositionerContext);
	if (!context) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: PopoverPositionerContext is missing. PopoverPositioner parts must be placed within <Popover.Positioner>." : formatErrorMessage(46));
	return context;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/floating-ui-react/middleware/arrow.mjs
/**
* Fork of the original `arrow` middleware from Floating UI that allows
* configuring the offset parent.
*/
var baseArrow = (options) => ({
	name: "arrow",
	options,
	async fn(state) {
		const { x, y, placement, rects, platform, elements, middlewareData } = state;
		const { element, padding = 0, offsetParent = "real" } = evaluate(options, state) || {};
		if (element == null) return {};
		const paddingObject = getPaddingObject(padding);
		const coords = {
			x,
			y
		};
		const axis = getAlignmentAxis(placement);
		const length = getAxisLength(axis);
		const arrowDimensions = await platform.getDimensions(element);
		const isYAxis = axis === "y";
		const minProp = isYAxis ? "top" : "left";
		const maxProp = isYAxis ? "bottom" : "right";
		const clientProp = isYAxis ? "clientHeight" : "clientWidth";
		const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
		const startDiff = coords[axis] - rects.reference[axis];
		const arrowOffsetParent = offsetParent === "real" ? await platform.getOffsetParent?.(element) : elements.floating;
		let clientSize = elements.floating[clientProp] || rects.floating[length];
		if (!clientSize || !await platform.isElement?.(arrowOffsetParent)) clientSize = elements.floating[clientProp] || rects.floating[length];
		const centerToReference = endDiff / 2 - startDiff / 2;
		const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
		const minPadding = Math.min(paddingObject[minProp], largestPossiblePadding);
		const maxPadding = Math.min(paddingObject[maxProp], largestPossiblePadding);
		const min = minPadding;
		const max = clientSize - arrowDimensions[length] - maxPadding;
		const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
		const offset = clamp$2(min, center, max);
		const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
		const alignmentOffset = shouldAddOffset ? center < min ? center - min : center - max : 0;
		return {
			[axis]: coords[axis] + alignmentOffset,
			data: {
				[axis]: offset,
				centerOffset: center - offset - alignmentOffset,
				...shouldAddOffset && { alignmentOffset }
			},
			reset: shouldAddOffset
		};
	}
});
/**
* Provides data to position an inner element of the floating element so that it
* appears centered to the reference element.
* This wraps the core `arrow` middleware to allow React refs as the element.
* @see https://floating-ui.com/docs/arrow
*/
var arrow = (options, deps) => ({
	...baseArrow(options),
	options: [options, deps]
});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/utils/hideMiddleware.mjs
var nativeHideFn = hide$1().fn;
var hide = {
	name: "hide",
	async fn(state) {
		const { width, height, x, y } = state.rects.reference;
		const anchorHidden = width === 0 && height === 0 && x === 0 && y === 0;
		return { data: { referenceHidden: (await nativeHideFn(state)).data?.referenceHidden || anchorHidden } };
	}
};
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/utils/adaptiveOriginMiddleware.mjs
var DEFAULT_SIDES = {
	sideX: "left",
	sideY: "top"
};
var adaptiveOrigin = {
	name: "adaptiveOrigin",
	async fn(state) {
		const { x: rawX, y: rawY, rects: { floating: floatRect }, elements: { floating }, platform, strategy, placement } = state;
		const win = getWindow(floating);
		const styles = win.getComputedStyle(floating);
		if (!(styles.transitionDuration !== "0s" && styles.transitionDuration !== "")) return {
			x: rawX,
			y: rawY,
			data: DEFAULT_SIDES
		};
		const offsetParent = await platform.getOffsetParent?.(floating);
		let offsetDimensions = {
			width: 0,
			height: 0
		};
		if (strategy === "fixed" && win?.visualViewport) offsetDimensions = {
			width: win.visualViewport.width,
			height: win.visualViewport.height
		};
		else if (offsetParent === win) {
			const doc = ownerDocument(floating);
			offsetDimensions = {
				width: doc.documentElement.clientWidth,
				height: doc.documentElement.clientHeight
			};
		} else if (await platform.isElement?.(offsetParent)) offsetDimensions = await platform.getDimensions(offsetParent);
		const currentSide = getSide(placement);
		let x = rawX;
		let y = rawY;
		if (currentSide === "left") x = offsetDimensions.width - (rawX + floatRect.width);
		if (currentSide === "top") y = offsetDimensions.height - (rawY + floatRect.height);
		const sideX = currentSide === "left" ? "right" : DEFAULT_SIDES.sideX;
		const sideY = currentSide === "top" ? "bottom" : DEFAULT_SIDES.sideY;
		return {
			x,
			y,
			data: {
				sideX,
				sideY
			}
		};
	}
};
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/utils/useAnchorPositioning.mjs
function getLogicalSide(sideParam, renderedSide, isRtl) {
	const isLogicalSideParam = sideParam === "inline-start" || sideParam === "inline-end";
	return {
		top: "top",
		right: isLogicalSideParam ? isRtl ? "inline-start" : "inline-end" : "right",
		bottom: "bottom",
		left: isLogicalSideParam ? isRtl ? "inline-end" : "inline-start" : "left"
	}[renderedSide];
}
function getOffsetData(state, sideParam, isRtl) {
	const { rects, placement } = state;
	return {
		side: getLogicalSide(sideParam, getSide(placement), isRtl),
		align: getAlignment(placement) || "center",
		anchor: {
			width: rects.reference.width,
			height: rects.reference.height
		},
		positioner: {
			width: rects.floating.width,
			height: rects.floating.height
		}
	};
}
/**
* Provides standardized anchor positioning behavior for floating elements. Wraps Floating UI's
* `useFloating` hook.
*/
function useAnchorPositioning(params) {
	const { anchor, positionMethod = "absolute", side: sideParam = "bottom", sideOffset = 0, align = "center", alignOffset = 0, collisionBoundary, collisionPadding: collisionPaddingParam = 5, sticky = false, arrowPadding = 5, disableAnchorTracking = false, inline: inlineMiddleware, keepMounted = false, floatingRootContext, mounted, collisionAvoidance, shiftCrossAxis = false, nodeId, adaptiveOrigin, lazyFlip = false, externalTree } = params;
	const [mountSide, setMountSide] = React.useState(null);
	if (!mounted && mountSide !== null) setMountSide(null);
	const collisionAvoidanceSide = collisionAvoidance.side || "flip";
	const collisionAvoidanceAlign = collisionAvoidance.align || "flip";
	const collisionAvoidanceFallbackAxisSide = collisionAvoidance.fallbackAxisSide || "end";
	const anchorFn = typeof anchor === "function" ? anchor : void 0;
	const anchorFnCallback = useStableCallback(anchorFn);
	const anchorDep = anchorFn ? anchorFnCallback : anchor;
	const anchorValueRef = useValueAsRef(anchor);
	const mountedRef = useValueAsRef(mounted);
	const isRtl = useDirection() === "rtl";
	const side = mountSide || {
		top: "top",
		right: "right",
		bottom: "bottom",
		left: "left",
		"inline-end": isRtl ? "left" : "right",
		"inline-start": isRtl ? "right" : "left"
	}[sideParam];
	const placement = align === "center" ? side : `${side}-${align}`;
	let collisionPadding = collisionPaddingParam;
	const bias = 1;
	const biasTop = sideParam === "bottom" ? bias : 0;
	const biasBottom = sideParam === "top" ? bias : 0;
	const biasLeft = sideParam === "right" ? bias : 0;
	const biasRight = sideParam === "left" ? bias : 0;
	if (typeof collisionPadding === "number") collisionPadding = {
		top: collisionPadding + biasTop,
		right: collisionPadding + biasRight,
		bottom: collisionPadding + biasBottom,
		left: collisionPadding + biasLeft
	};
	else if (collisionPadding) collisionPadding = {
		top: (collisionPadding.top || 0) + biasTop,
		right: (collisionPadding.right || 0) + biasRight,
		bottom: (collisionPadding.bottom || 0) + biasBottom,
		left: (collisionPadding.left || 0) + biasLeft
	};
	const commonCollisionProps = {
		boundary: collisionBoundary === "clipping-ancestors" ? "clippingAncestors" : collisionBoundary,
		padding: collisionPadding
	};
	const arrowRef = React.useRef(null);
	const sideOffsetRef = useValueAsRef(sideOffset);
	const alignOffsetRef = useValueAsRef(alignOffset);
	const sideOffsetDep = typeof sideOffset !== "function" ? sideOffset : 0;
	const alignOffsetDep = typeof alignOffset !== "function" ? alignOffset : 0;
	const middleware = [];
	if (inlineMiddleware) middleware.push(inlineMiddleware);
	middleware.push(offset((state) => {
		const data = getOffsetData(state, sideParam, isRtl);
		const sideAxis = typeof sideOffsetRef.current === "function" ? sideOffsetRef.current(data) : sideOffsetRef.current;
		const alignAxis = typeof alignOffsetRef.current === "function" ? alignOffsetRef.current(data) : alignOffsetRef.current;
		return {
			mainAxis: sideAxis,
			crossAxis: alignAxis,
			alignmentAxis: alignAxis
		};
	}, [
		sideOffsetDep,
		alignOffsetDep,
		isRtl,
		sideParam
	]));
	const shiftDisabled = collisionAvoidanceAlign === "none" && collisionAvoidanceSide !== "shift";
	const crossAxisShiftEnabled = !shiftDisabled && (sticky || shiftCrossAxis || collisionAvoidanceSide === "shift");
	const flipMiddleware = collisionAvoidanceSide === "none" ? null : flip({
		...commonCollisionProps,
		padding: {
			top: collisionPadding.top + bias,
			right: collisionPadding.right + bias,
			bottom: collisionPadding.bottom + bias,
			left: collisionPadding.left + bias
		},
		mainAxis: !shiftCrossAxis && collisionAvoidanceSide === "flip",
		crossAxis: collisionAvoidanceAlign === "flip" ? "alignment" : false,
		fallbackAxisSideDirection: collisionAvoidanceFallbackAxisSide
	});
	const shiftMiddleware = shiftDisabled ? null : shift((data) => {
		const html = ownerDocument(data.elements.floating).documentElement;
		return {
			...commonCollisionProps,
			rootBoundary: shiftCrossAxis ? {
				x: 0,
				y: 0,
				width: html.clientWidth,
				height: html.clientHeight
			} : void 0,
			mainAxis: collisionAvoidanceAlign !== "none",
			crossAxis: crossAxisShiftEnabled,
			limiter: sticky || shiftCrossAxis ? void 0 : limitShift((limitData) => {
				if (!arrowRef.current) return {};
				const { width, height } = arrowRef.current.getBoundingClientRect();
				const sideAxis = getSideAxis(getSide(limitData.placement));
				const arrowSize = sideAxis === "y" ? width : height;
				const offsetAmount = sideAxis === "y" ? collisionPadding.left + collisionPadding.right : collisionPadding.top + collisionPadding.bottom;
				return { offset: arrowSize / 2 + offsetAmount / 2 };
			})
		};
	}, [
		commonCollisionProps,
		sticky,
		shiftCrossAxis,
		collisionPadding,
		collisionAvoidanceAlign
	]);
	if (collisionAvoidanceSide === "shift" || collisionAvoidanceAlign === "shift" || align === "center") middleware.push(shiftMiddleware, flipMiddleware);
	else middleware.push(flipMiddleware, shiftMiddleware);
	middleware.push(size({
		...commonCollisionProps,
		apply({ elements: { floating }, availableWidth, availableHeight, rects }) {
			if (!mountedRef.current) return;
			const floatingStyle = floating.style;
			floatingStyle.setProperty("--available-width", `${availableWidth}px`);
			floatingStyle.setProperty("--available-height", `${availableHeight}px`);
			const dpr = getWindow(floating).devicePixelRatio || 1;
			const { x, y, width, height } = rects.reference;
			const anchorWidth = (Math.round((x + width) * dpr) - Math.round(x * dpr)) / dpr;
			const anchorHeight = (Math.round((y + height) * dpr) - Math.round(y * dpr)) / dpr;
			floatingStyle.setProperty("--anchor-width", `${anchorWidth}px`);
			floatingStyle.setProperty("--anchor-height", `${anchorHeight}px`);
		}
	}), arrow((state) => ({
		element: arrowRef.current || ownerDocument(state.elements.floating).createElement("div"),
		padding: arrowPadding,
		offsetParent: "floating"
	}), [arrowPadding]), {
		name: "transformOrigin",
		fn(state) {
			const { elements, middlewareData, placement: renderedPlacement, rects, y } = state;
			const currentRenderedSide = getSide(renderedPlacement);
			const currentRenderedAxis = getSideAxis(currentRenderedSide);
			const arrowEl = arrowRef.current;
			const arrowX = middlewareData.arrow?.x || 0;
			const arrowY = middlewareData.arrow?.y || 0;
			const arrowWidth = arrowEl?.clientWidth || 0;
			const arrowHeight = arrowEl?.clientHeight || 0;
			const transformX = arrowX + arrowWidth / 2;
			const transformY = arrowY + arrowHeight / 2;
			const shiftY = Math.abs(middlewareData.shift?.y || 0);
			const halfAnchorHeight = rects.reference.height / 2;
			const sideOffsetValue = typeof sideOffset === "function" ? sideOffset(getOffsetData(state, sideParam, isRtl)) : sideOffset;
			const isOverlappingAnchor = shiftY > sideOffsetValue;
			const adjacentTransformOrigin = {
				top: `${transformX}px calc(100% + ${sideOffsetValue}px)`,
				bottom: `${transformX}px ${-sideOffsetValue}px`,
				left: `calc(100% + ${sideOffsetValue}px) ${transformY}px`,
				right: `${-sideOffsetValue}px ${transformY}px`
			}[currentRenderedSide];
			const overlapTransformOrigin = `${transformX}px ${rects.reference.y + halfAnchorHeight - y}px`;
			elements.floating.style.setProperty("--transform-origin", crossAxisShiftEnabled && currentRenderedAxis === "y" && isOverlappingAnchor ? overlapTransformOrigin : adjacentTransformOrigin);
			return {};
		}
	}, hide, adaptiveOrigin);
	useIsoLayoutEffect(() => {
		if (!mounted && floatingRootContext) floatingRootContext.update({
			referenceElement: null,
			floatingElement: null,
			domReferenceElement: null,
			positionReference: null
		});
	}, [mounted, floatingRootContext]);
	const autoUpdateOptions = React.useMemo(() => ({
		elementResize: !disableAnchorTracking && typeof ResizeObserver !== "undefined",
		layoutShift: !disableAnchorTracking && typeof IntersectionObserver !== "undefined"
	}), [disableAnchorTracking]);
	const { refs, elements, x, y, middlewareData, update, placement: renderedPlacement, context, isPositioned, floatingStyles: originalFloatingStyles } = useFloating({
		rootContext: floatingRootContext,
		open: keepMounted ? mounted : void 0,
		placement,
		middleware,
		strategy: positionMethod,
		whileElementsMounted: keepMounted ? void 0 : (...args) => autoUpdate(...args, autoUpdateOptions),
		nodeId,
		externalTree
	});
	const { sideX, sideY } = middlewareData.adaptiveOrigin || DEFAULT_SIDES;
	const resolvedPosition = isPositioned ? positionMethod : "fixed";
	const floatingStyles = React.useMemo(() => {
		const base = adaptiveOrigin ? {
			position: resolvedPosition,
			[sideX]: x,
			[sideY]: y
		} : {
			position: resolvedPosition,
			...originalFloatingStyles
		};
		if (!isPositioned) base.opacity = 0;
		return base;
	}, [
		adaptiveOrigin,
		resolvedPosition,
		sideX,
		x,
		sideY,
		y,
		originalFloatingStyles,
		isPositioned
	]);
	const registeredPositionReferenceRef = React.useRef(null);
	useIsoLayoutEffect(() => {
		if (!mounted) return;
		const anchorValue = anchorValueRef.current;
		const resolvedAnchor = typeof anchorValue === "function" ? anchorValue() : anchorValue;
		const finalAnchor = (isRef(resolvedAnchor) ? resolvedAnchor.current : resolvedAnchor) || null;
		if (finalAnchor !== registeredPositionReferenceRef.current) {
			refs.setPositionReference(finalAnchor);
			registeredPositionReferenceRef.current = finalAnchor;
		}
	}, [
		mounted,
		refs,
		anchorDep,
		anchorValueRef
	]);
	React.useEffect(() => {
		if (!mounted) return;
		const anchorValue = anchorValueRef.current;
		if (typeof anchorValue === "function") return;
		if (isRef(anchorValue) && anchorValue.current !== registeredPositionReferenceRef.current) {
			refs.setPositionReference(anchorValue.current);
			registeredPositionReferenceRef.current = anchorValue.current;
		}
	}, [
		mounted,
		refs,
		anchorDep,
		anchorValueRef
	]);
	React.useEffect(() => {
		if (keepMounted && mounted && elements.reference && elements.floating) return autoUpdate(elements.reference, elements.floating, update, autoUpdateOptions);
	}, [
		keepMounted,
		mounted,
		elements,
		update,
		autoUpdateOptions
	]);
	const renderedSide = getSide(renderedPlacement);
	const logicalRenderedSide = getLogicalSide(sideParam, renderedSide, isRtl);
	const renderedAlign = getAlignment(renderedPlacement) || "center";
	const anchorHidden = Boolean(middlewareData.hide?.referenceHidden);
	useIsoLayoutEffect(() => {
		if (lazyFlip && mounted && isPositioned) setMountSide(renderedSide);
	}, [
		lazyFlip,
		mounted,
		isPositioned,
		renderedSide
	]);
	const arrowStyles = React.useMemo(() => ({
		position: "absolute",
		top: middlewareData.arrow?.y,
		left: middlewareData.arrow?.x
	}), [middlewareData.arrow]);
	const arrowUncentered = middlewareData.arrow?.centerOffset !== 0;
	return React.useMemo(() => ({
		positionerStyles: floatingStyles,
		arrowStyles,
		arrowRef,
		arrowUncentered,
		side: logicalRenderedSide,
		align: renderedAlign,
		physicalSide: renderedSide,
		anchorHidden,
		refs,
		context,
		isPositioned,
		update
	}), [
		floatingStyles,
		arrowStyles,
		arrowRef,
		arrowUncentered,
		logicalRenderedSide,
		renderedAlign,
		renderedSide,
		anchorHidden,
		refs,
		context,
		isPositioned,
		update
	]);
}
function isRef(param) {
	return param != null && "current" in param;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/utils/getDisabledMountTransitionStyles.mjs
function getDisabledMountTransitionStyles(transitionStatus) {
	return transitionStatus === "starting" ? DISABLED_TRANSITIONS_STYLE : EMPTY_OBJECT;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/utils/usePositioner.mjs
/**
* Renders the shared outer Positioner element used by popup components.
* Applies the common role, hidden state, transition styles, state attributes, and optional inert styling.
*/
function usePositioner(componentProps, state, { styles, transitionStatus, props, refs, hidden, inert = false }) {
	const style = { ...styles };
	if (inert) style.pointerEvents = "none";
	return useRenderElement("div", componentProps, {
		state,
		ref: refs,
		props: [
			{
				role: "presentation",
				hidden,
				style
			},
			getDisabledMountTransitionStyles(transitionStatus),
			props
		],
		stateAttributesMapping: popupStateMapping
	});
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/utils/useAnchoredPopupScrollLock.mjs
var VIEWPORT_WIDTH_TOLERANCE_PX = 20;
/**
* Manages scroll lock for anchored popups. For non-touch opens, scroll lock is applied when
* enabled. For touch opens, scroll lock is applied only when the positioner width is effectively
* viewport-sized.
*/
function useAnchoredPopupScrollLock(enabled, touchOpen, positionerElement, referenceElement) {
	const [touchOpenShouldLockScroll, setTouchOpenShouldLockScroll] = React.useState(false);
	useIsoLayoutEffect(() => {
		if (!enabled || !touchOpen || positionerElement == null) {
			setTouchOpenShouldLockScroll(false);
			return;
		}
		const viewportWidth = ownerDocument(positionerElement).documentElement.clientWidth;
		const popupWidth = positionerElement.offsetWidth;
		setTouchOpenShouldLockScroll(viewportWidth > 0 && popupWidth > 0 && popupWidth >= viewportWidth - VIEWPORT_WIDTH_TOLERANCE_PX);
	}, [
		enabled,
		touchOpen,
		positionerElement
	]);
	useScrollLock(enabled && (!touchOpen || touchOpenShouldLockScroll), referenceElement);
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/popover/positioner/PopoverPositioner.mjs
/**
* Positions the popover against the trigger.
* Renders a `<div>` element.
*
* Documentation: [Base UI Popover](https://base-ui.com/react/components/popover)
*/
var PopoverPositioner = /*#__PURE__*/ React.forwardRef(function PopoverPositioner(componentProps, forwardedRef) {
	const { render, className, style, anchor, positionMethod = "absolute", side = "bottom", align = "center", sideOffset = 0, alignOffset = 0, collisionBoundary = "clipping-ancestors", collisionPadding = 5, arrowPadding = 5, sticky = false, disableAnchorTracking = false, collisionAvoidance = POPUP_COLLISION_AVOIDANCE, ...elementProps } = componentProps;
	const { store } = usePopoverRootContext();
	const keepMounted = usePopoverPortalContext();
	const nodeId = useFloatingNodeId();
	const floatingRootContext = store.useState("floatingRootContext");
	const mounted = store.useState("mounted");
	const open = store.useState("open");
	const openReason = store.useState("openChangeReason");
	const triggerElement = store.useState("activeTriggerElement");
	const modal = store.useState("modal");
	const openMethod = store.useState("openMethod");
	const positionerElement = store.useState("positionerElement");
	const instantType = store.useState("instantType");
	const transitionStatus = store.useState("transitionStatus");
	const hasViewport = store.useState("hasViewport");
	const prevTriggerElementRef = React.useRef(null);
	const runOnceAnimationsFinish = useAnimationsFinished(positionerElement, false, false);
	const positioning = useAnchorPositioning({
		anchor,
		floatingRootContext,
		positionMethod,
		mounted,
		side,
		sideOffset,
		align,
		alignOffset,
		arrowPadding,
		collisionBoundary,
		collisionPadding,
		sticky,
		disableAnchorTracking,
		keepMounted,
		nodeId,
		collisionAvoidance,
		adaptiveOrigin: hasViewport ? adaptiveOrigin : void 0
	});
	const domReference = floatingRootContext.useState("domReferenceElement");
	useIsoLayoutEffect(() => {
		const currentTriggerElement = domReference;
		const prevTriggerElement = prevTriggerElementRef.current;
		if (currentTriggerElement) prevTriggerElementRef.current = currentTriggerElement;
		if (prevTriggerElement && currentTriggerElement && currentTriggerElement !== prevTriggerElement) {
			store.set("instantType", void 0);
			const ac = new AbortController();
			runOnceAnimationsFinish(() => {
				store.set("instantType", "trigger-change");
			}, ac.signal);
			return () => {
				ac.abort();
			};
		}
	}, [
		domReference,
		runOnceAnimationsFinish,
		store
	]);
	useAnchoredPopupScrollLock(open && modal === true && openReason !== "trigger-hover", openMethod === "touch", positionerElement, triggerElement);
	const setPositionerElement = React.useCallback((element) => {
		store.set("positionerElement", element);
	}, [store]);
	const element = usePositioner(componentProps, {
		open,
		side: positioning.side,
		align: positioning.align,
		anchorHidden: positioning.anchorHidden,
		instant: instantType
	}, {
		styles: positioning.positionerStyles,
		transitionStatus,
		props: elementProps,
		refs: [forwardedRef, setPositionerElement],
		hidden: !mounted,
		inert: !open
	});
	return /*#__PURE__*/ jsxs(PopoverPositionerContext.Provider, {
		value: positioning,
		children: [mounted && modal === true && openReason !== "trigger-hover" && /*#__PURE__*/ jsx(InternalBackdrop, {
			ref: store.context.internalBackdropRef,
			inert: inertValue(!open),
			cutout: triggerElement
		}), /*#__PURE__*/ jsx(FloatingNode, {
			id: nodeId,
			children: element
		})]
	});
});
if (process.env.NODE_ENV !== "production") PopoverPositioner.displayName = "PopoverPositioner";
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/toolbar/root/ToolbarRootContext.mjs
var ToolbarRootContext = /*#__PURE__*/ React.createContext(void 0);
if (process.env.NODE_ENV !== "production") ToolbarRootContext.displayName = "ToolbarRootContext";
function useToolbarRootContext(optional) {
	const context = React.useContext(ToolbarRootContext);
	if (context === void 0 && !optional) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: ToolbarRootContext is missing. Toolbar parts must be placed within <Toolbar.Root>." : formatErrorMessage(69));
	return context;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/utils/closePart.mjs
var ClosePartContext = /*#__PURE__*/ React.createContext(void 0);
if (process.env.NODE_ENV !== "production") ClosePartContext.displayName = "ClosePartContext";
function useClosePartCount() {
	const [closePartCount, setClosePartCount] = React.useState(0);
	const register = useStableCallback(() => {
		setClosePartCount((count) => count + 1);
		return () => {
			setClosePartCount((count) => Math.max(0, count - 1));
		};
	});
	return {
		context: React.useMemo(() => ({ register }), [register]),
		hasClosePart: closePartCount > 0
	};
}
function ClosePartProvider(props) {
	const { value, children } = props;
	return /*#__PURE__*/ jsx(ClosePartContext.Provider, {
		value,
		children
	});
}
function useClosePartRegistration() {
	const context = React.useContext(ClosePartContext);
	useIsoLayoutEffect(() => {
		return context?.register();
	}, [context]);
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/popover/popup/PopoverPopup.mjs
var stateAttributesMapping$4 = {
	...popupStateMapping,
	...transitionStatusMapping
};
/**
* A container for the popover contents.
* Renders a `<div>` element.
*
* Documentation: [Base UI Popover](https://base-ui.com/react/components/popover)
*/
var PopoverPopup = /*#__PURE__*/ React.forwardRef(function PopoverPopup(componentProps, forwardedRef) {
	const { render, className, style, initialFocus, finalFocus, ...elementProps } = componentProps;
	const { store } = usePopoverRootContext();
	const positioner = usePopoverPositionerContext();
	const insideToolbar = useToolbarRootContext(true) != null;
	const { context: closePartContext, hasClosePart } = useClosePartCount();
	const open = store.useState("open");
	const openMethod = store.useState("openMethod");
	const instantType = store.useState("instantType");
	const transitionStatus = store.useState("transitionStatus");
	const popupProps = store.useState("popupProps");
	const titleId = store.useState("titleElementId");
	const descriptionId = store.useState("descriptionElementId");
	const modal = store.useState("modal");
	const mounted = store.useState("mounted");
	const openReason = store.useState("openChangeReason");
	const activeTriggerElement = store.useState("activeTriggerElement");
	const floatingContext = store.useState("floatingRootContext");
	const floatingId = floatingContext.useState("floatingId");
	const disabled = store.useState("disabled");
	const openOnHover = store.useState("openOnHover");
	const closeDelay = store.useState("closeDelay");
	const popupId = elementProps.id ?? floatingId;
	useOpenChangeComplete({
		open,
		ref: store.context.popupRef,
		onComplete() {
			if (open) store.context.onOpenChangeComplete?.(true);
		}
	});
	useHoverFloatingInteraction(floatingContext, {
		enabled: openOnHover && !disabled,
		closeDelay
	});
	const resolvedInitialFocus = initialFocus === void 0 ? createDefaultInitialFocus(store.context.popupRef) : initialFocus;
	const focusManagerModal = modal !== false && hasClosePart;
	store.useSyncedValue("focusManagerModal", focusManagerModal);
	const setPopupElement = React.useCallback((element) => {
		store.set("popupElement", element);
	}, [store]);
	const state = {
		open,
		side: positioner.side,
		align: positioner.align,
		instant: instantType,
		transitionStatus
	};
	const element = useRenderElement("div", componentProps, {
		state,
		ref: [
			forwardedRef,
			store.context.popupRef,
			setPopupElement
		],
		props: [
			popupProps,
			{
				id: popupId,
				role: "dialog",
				...FOCUSABLE_POPUP_PROPS,
				"aria-labelledby": titleId,
				"aria-describedby": descriptionId,
				onKeyDown(event) {
					if (insideToolbar && COMPOSITE_KEYS.has(event.key)) event.stopPropagation();
				}
			},
			getDisabledMountTransitionStyles(transitionStatus),
			elementProps
		],
		stateAttributesMapping: stateAttributesMapping$4
	});
	return /*#__PURE__*/ jsx(FloatingFocusManager, {
		context: floatingContext,
		openInteractionType: openMethod,
		modal: focusManagerModal,
		disabled: !mounted || openReason === "trigger-hover",
		initialFocus: resolvedInitialFocus,
		returnFocus: finalFocus,
		restoreFocus: "popup",
		previousFocusableElement: isHTMLElement(activeTriggerElement) ? activeTriggerElement : void 0,
		nextFocusableElement: store.context.triggerFocusTargetRef,
		beforeContentFocusGuardRef: store.context.beforeContentFocusGuardRef,
		children: /*#__PURE__*/ jsx(ClosePartProvider, {
			value: closePartContext,
			children: element
		})
	});
});
if (process.env.NODE_ENV !== "production") PopoverPopup.displayName = "PopoverPopup";
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/popover/close/PopoverClose.mjs
/**
* A button that closes the popover.
* Renders a `<button>` element.
*
* Documentation: [Base UI Popover](https://base-ui.com/react/components/popover)
*/
var PopoverClose$1 = /*#__PURE__*/ React.forwardRef(function PopoverClose(componentProps, forwardedRef) {
	const { render, className, style, disabled = false, nativeButton = true, ...elementProps } = componentProps;
	const { buttonRef, getButtonProps } = useButton({
		disabled,
		focusableWhenDisabled: false,
		native: nativeButton
	});
	const { store } = usePopoverRootContext();
	useClosePartRegistration();
	return useRenderElement("button", componentProps, {
		ref: [forwardedRef, buttonRef],
		props: [
			{ onClick(event) {
				store.setOpen(false, createChangeEventDetails(closePress, event.nativeEvent));
			} },
			elementProps,
			getButtonProps
		]
	});
});
if (process.env.NODE_ENV !== "production") PopoverClose$1.displayName = "PopoverClose";
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/utils/getCssDimensions.mjs
function getCssDimensions(element) {
	const css = getComputedStyle$1(element);
	let width = parseFloat(css.width) || 0;
	let height = parseFloat(css.height) || 0;
	const hasOffset = isHTMLElement(element);
	const offsetWidth = hasOffset ? element.offsetWidth : width;
	const offsetHeight = hasOffset ? element.offsetHeight : height;
	if (round(width) !== offsetWidth || round(height) !== offsetHeight) {
		width = offsetWidth;
		height = offsetHeight;
	}
	return {
		width,
		height
	};
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/components/ui/popover.js
var Popover = PopoverRoot;
var PopoverTrigger = PopoverTrigger$1;
function PopoverContent({ className, align = "center", sideOffset = 4, ...props }) {
	return /* @__PURE__ */ jsx(PopoverPortal, { children: /* @__PURE__ */ jsx(PopoverPositioner, {
		align,
		side: "bottom",
		sideOffset,
		className: "z-50",
		children: /* @__PURE__ */ jsx(PopoverPopup, {
			className: (s) => cn$1("z-50 origin-(--transform-origin) overflow-y-auto max-h-(--available-height) min-w-[240px] max-w-[98vw] rounded-xl border bg-fd-popover/60 backdrop-blur-lg p-2 text-sm text-fd-popover-foreground shadow-lg focus-visible:outline-none data-[closed]:animate-fd-popover-out data-[open]:animate-fd-popover-in", typeof className === "function" ? className(s) : className),
			...props
		})
	}) });
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/layouts/shared/slots/language-select.js
function LanguageSelect({ className, variant = "ghost", children, ...rest }) {
	const context = useI18n();
	const t = useTranslations({ note: "language switcher" });
	if (!context.locales) throw new Error("Missing `<I18nProvider />`");
	const chooseLanguage = t("Choose a language");
	return /* @__PURE__ */ jsxs(Popover, { children: [/* @__PURE__ */ jsx(PopoverTrigger, {
		"aria-label": t("Choose a language", { note: "aria-label" }),
		className: (s) => cn$1(buttonVariants$1({ variant }), "gap-1.5 p-1.5", s.open && "bg-fd-accent", className),
		...rest,
		children
	}), /* @__PURE__ */ jsxs(PopoverContent, {
		className: "flex flex-col gap-0.5 p-1",
		children: [/* @__PURE__ */ jsx("p", {
			className: "p-2 text-xs font-medium text-fd-muted-foreground",
			children: chooseLanguage
		}), context.locales.map((item) => /* @__PURE__ */ jsx("button", {
			type: "button",
			className: cn$1("px-2 py-1.5 text-start text-sm rounded-lg transition-colors", item.locale === context.locale ? "bg-fd-primary/10 text-fd-primary" : "text-fd-muted-foreground hover:bg-fd-accent hover:text-fd-accent-foreground"),
			onClick: () => {
				context.onChange?.(item.locale);
			},
			children: item.name
		}, item.locale))]
	})] });
}
function LanguageSelectText(props) {
	const { locales, locale } = useI18n();
	const text = locales?.find((item) => item.locale === locale)?.name;
	return /* @__PURE__ */ jsx("span", {
		...props,
		children: text
	});
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/layouts/shared/slots/search-trigger.js
function SearchTrigger({ hideIfDisabled, size = "icon-sm", color = "ghost", ...props }) {
	const { enabled, dialogHandle } = useSearchContext();
	const t = useTranslations({ note: "search trigger" });
	if (hideIfDisabled && !enabled) return null;
	return /* @__PURE__ */ jsx(DialogTrigger, {
		handle: dialogHandle,
		type: "button",
		className: cn$1(buttonVariants$1({
			size,
			color
		}), props.className),
		"data-search": "",
		"aria-label": t("Open Search", { note: "aria-label" }),
		children: /* @__PURE__ */ jsx(Search, {})
	});
}
function FullSearchTrigger({ hideIfDisabled, ...props }) {
	const { enabled, hotKey, dialogHandle } = useSearchContext();
	const t = useTranslations({ note: "search trigger" });
	if (hideIfDisabled && !enabled) return null;
	return /* @__PURE__ */ jsxs(DialogTrigger, {
		handle: dialogHandle,
		type: "button",
		"data-search-full": "",
		...props,
		className: cn$1("inline-flex items-center gap-2 rounded-lg border bg-fd-secondary/50 p-1.5 ps-2 text-sm text-fd-muted-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground", props.className),
		children: [
			/* @__PURE__ */ jsx(Search, { className: "size-4" }),
			t("Search"),
			/* @__PURE__ */ jsx("div", {
				className: "ms-auto inline-flex gap-0.5",
				children: hotKey.map((k, i) => /* @__PURE__ */ jsx("kbd", {
					className: "rounded-md border bg-fd-background px-1.5",
					children: k.display
				}, i))
			})
		]
	});
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/layouts/shared/slots/theme-switch.js
var itemVariants$1 = cva("size-6.5 p-1.5 text-fd-muted-foreground", { variants: { active: {
	true: "bg-fd-accent text-fd-accent-foreground",
	false: "text-fd-muted-foreground"
} } });
var themes = [
	["light", Sun],
	["dark", Moon],
	["system", Airplay]
];
function ThemeSwitch({ className, mode = "light-dark", ...props }) {
	const { setTheme, theme, resolvedTheme } = z$1();
	const [mounted, setMounted] = useState(false);
	const t = useTranslations({ note: "theme switcher" });
	const themeAriaLabels = {
		light: t("Light", { note: "aria-label" }),
		dark: t("Dark", { note: "aria-label" }),
		system: t("System", { note: "aria-label" })
	};
	const handleThemeChange = (newTheme) => {
		if (document?.startViewTransition) document.startViewTransition(() => flushSync(() => setTheme(newTheme)));
		else setTheme(newTheme);
	};
	useEffect(() => {
		setMounted(true);
	}, []);
	const container = cn$1("inline-flex items-center rounded-full border p-1 overflow-hidden *:rounded-full", className);
	if (mode === "light-dark") {
		const value = mounted ? resolvedTheme : null;
		return /* @__PURE__ */ jsx("button", {
			className: container,
			"aria-label": t("Toggle Theme", { note: "aria-label" }),
			onClick: () => handleThemeChange(value === "light" ? "dark" : "light"),
			"data-theme-toggle": "",
			children: themes.map(([key, Icon]) => {
				if (key === "system") return;
				return /* @__PURE__ */ jsx(Icon, {
					fill: "currentColor",
					className: cn$1(itemVariants$1({ active: value === key }))
				}, key);
			})
		});
	}
	const value = mounted ? theme : null;
	return /* @__PURE__ */ jsxs("div", {
		className: container,
		"data-theme-toggle": "",
		...props,
		children: [
			/* @__PURE__ */ jsx("button", {
				"aria-label": themeAriaLabels.light,
				className: cn$1(itemVariants$1({ active: value === "light" })),
				onClick: () => handleThemeChange("light"),
				children: /* @__PURE__ */ jsx(Sun, {
					className: "size-full",
					fill: "currentColor"
				})
			}),
			/* @__PURE__ */ jsx("button", {
				"aria-label": themeAriaLabels.dark,
				className: cn$1(itemVariants$1({ active: value === "dark" })),
				onClick: () => handleThemeChange("dark"),
				children: /* @__PURE__ */ jsx(Moon, {
					className: "size-full",
					fill: "currentColor"
				})
			}),
			/* @__PURE__ */ jsx("button", {
				"aria-label": themeAriaLabels.system,
				className: cn$1(itemVariants$1({ active: value === "system" })),
				onClick: () => handleThemeChange("system"),
				children: /* @__PURE__ */ jsx(Airplay, {
					className: "size-full",
					fill: "currentColor"
				})
			})
		]
	});
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/utils/urls.js
function normalize(urlOrPath) {
	if (urlOrPath.length > 1 && urlOrPath.endsWith("/")) return urlOrPath.slice(0, -1);
	return urlOrPath;
}
/**
* @returns if `href` is matching the given pathname
*/
function isActive(href, pathname, nested = false) {
	href = normalize(href);
	pathname = normalize(pathname);
	return href === pathname || nested && pathname.startsWith(`${href}/`);
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/layouts/shared/index.js
var defaultTransform = (option, node) => {
	if (!node.icon) return option;
	return {
		...option,
		icon: /* @__PURE__ */ jsx("div", {
			className: "size-full [&_svg]:size-full max-md:p-1.5 max-md:rounded-md max-md:border max-md:bg-fd-secondary",
			children: node.icon
		})
	};
};
function getLayoutTabs(tree, { transform = defaultTransform } = {}) {
	const results = [];
	function next(node, unlisted) {
		if ("root" in node && node.root) {
			const url = node.index?.url ?? node.children.find((node) => node.type === "page")?.url;
			if (url) {
				const option = {
					title: node.name,
					icon: node.icon,
					description: node.description,
					url,
					unlisted,
					$folder: node
				};
				const mapped = transform ? transform(option, node) : option;
				if (mapped) results.push(mapped);
			}
		}
		for (const child of node.children) if (child.type === "folder") next(child, unlisted);
	}
	next(tree);
	if (tree.fallback) next(tree.fallback, true);
	return results;
}
function isLayoutTabActive(tab, pathname) {
	if (tab.$folder) return findPath(tab.$folder.children, (node) => node.type === "page" && isActive(node.url, pathname)) !== null;
	if (tab.urls) return tab.urls.has(normalize(pathname));
	return isActive(tab.url, pathname, true);
}
/**
* Get link items with shortcuts
*/
function resolveLinkItems({ links = [], githubUrl }) {
	const result = [...links];
	if (githubUrl) result.push({
		type: "icon",
		url: githubUrl,
		text: "Github",
		label: "GitHub",
		icon: /* @__PURE__ */ jsx("svg", {
			role: "img",
			viewBox: "0 0 24 24",
			fill: "currentColor",
			children: /* @__PURE__ */ jsx("path", { d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" })
		}),
		external: true
	});
	return result;
}
function useLinkItems({ githubUrl, links }) {
	return useMemo(() => {
		const all = resolveLinkItems({
			links,
			githubUrl
		});
		const navItems = [];
		const menuItems = [];
		for (const item of all) switch (item.on) {
			case "menu":
				menuItems.push(item);
				break;
			case "nav":
				navItems.push(item);
				break;
			default:
				navItems.push(item);
				menuItems.push(item);
		}
		return {
			navItems,
			menuItems,
			all
		};
	}, [links, githubUrl]);
}
function isLinkItemActive(link, pathname) {
	if (link.type === "custom" || !link.url) return false;
	if (link.active === "none") return false;
	return isActive(link.url, pathname, link.active === "nested-url");
}
//#endregion
//#region node_modules/.pnpm/fumadocs-core@16.11.5_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.5_@type_72cb31c98dbdcd9237f5eec6550b9329/node_modules/fumadocs-core/dist/link.js
function Link$1({ ref, href = "#", external = !!(href.match(/^\w+:/) || href.startsWith("//")), prefetch, children, ...props }) {
	if (external) return /* @__PURE__ */ jsx("a", {
		ref,
		href,
		rel: "noreferrer noopener",
		target: "_blank",
		...props,
		children
	});
	return /* @__PURE__ */ jsx(Link$2, {
		ref,
		href,
		prefetch,
		...props,
		children
	});
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/layouts/shared/client.js
function LinkItem({ ref, item, ...props }) {
	const active = isLinkItemActive(item, usePathname());
	return /* @__PURE__ */ jsx(Link$1, {
		ref,
		href: item.url,
		external: item.external,
		...props,
		"data-active": active,
		children: props.children
	});
}
function baseSlots({ useProps }) {
	function InlineThemeSwitch(props) {
		const { themeSwitch } = useProps();
		if (themeSwitch.component) return themeSwitch.component;
		return /* @__PURE__ */ jsx(ThemeSwitch, {
			...props,
			...themeSwitch
		});
	}
	function InlineSearchTrigger(props) {
		const { searchToggle } = useProps();
		if (searchToggle.components?.sm) return searchToggle.components.sm;
		return /* @__PURE__ */ jsx(SearchTrigger, {
			...props,
			...searchToggle.sm
		});
	}
	function InlineSearchTriggerFull(props) {
		const { searchToggle } = useProps();
		if (searchToggle.components?.lg) return searchToggle.components.lg;
		return /* @__PURE__ */ jsx(FullSearchTrigger, {
			...props,
			...searchToggle.full
		});
	}
	function InlineNavTitle({ href: defaultUrl = "/", ...props }) {
		const { url = defaultUrl, title } = useProps().nav ?? {};
		if (typeof title === "function") return title({
			href: url,
			...props
		});
		return /* @__PURE__ */ jsx(Link$1, {
			href: url,
			...props,
			children: title
		});
	}
	return { useProvider(options) {
		const { locales = [] } = useI18n();
		const { nav, slots = {}, i18n = locales.length > 1, searchToggle: { enabled: searchToggleEnabled = true, ...searchToggle } = {}, themeSwitch: { enabled: themeSwitchEnabled = true, ...themeSwitch } = {} } = options;
		return {
			baseSlots: {
				navTitle: slots.navTitle ?? InlineNavTitle,
				themeSwitch: themeSwitchEnabled && (slots.themeSwitch ?? InlineThemeSwitch),
				languageSelect: i18n ? slots.languageSelect ?? {
					root: LanguageSelect,
					text: LanguageSelectText
				} : false,
				searchTrigger: searchToggleEnabled && (slots.searchTrigger ?? {
					sm: InlineSearchTrigger,
					full: InlineSearchTriggerFull
				})
			},
			baseProps: {
				nav,
				searchToggle,
				themeSwitch
			}
		};
	} };
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/layouts/home/slots/container.js
function Container$2(props) {
	return /* @__PURE__ */ jsx("main", {
		id: "nd-home-layout",
		...props,
		className: cn$1("flex flex-1 flex-col [--fd-layout-width:1400px]", props.className)
	});
}
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/useControlled.mjs
function useControlled({ controlled, default: defaultProp, name, state = "value" }) {
	const { current: isControlled } = React.useRef(controlled !== void 0);
	const [valueState, setValue] = React.useState(defaultProp);
	const value = isControlled ? controlled : valueState;
	if (process.env.NODE_ENV !== "production") {
		React.useEffect(() => {
			if (isControlled !== (controlled !== void 0)) error([
				`A component is changing the ${isControlled ? "" : "un"}controlled ${state} state of ${name} to be ${isControlled ? "un" : ""}controlled.`,
				"Elements should not switch from uncontrolled to controlled (or vice versa).",
				`Decide between using a controlled or uncontrolled ${name} element for the lifetime of the component.`,
				"The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.",
				"More info: https://fb.me/react-controlled-components"
			].join("\n"));
		}, [
			state,
			name,
			controlled
		]);
		const { current: defaultValue } = React.useRef(defaultProp);
		React.useEffect(() => {
			if (!isControlled && serializeToDevModeString(defaultValue) !== serializeToDevModeString(defaultProp)) error([`A component is changing the default ${state} state of an uncontrolled ${name} after being initialized. To suppress this warning opt to use a controlled ${name}.`].join("\n"));
		}, [defaultProp]);
	}
	return [value, React.useCallback((newValue) => {
		if (!isControlled) setValue(newValue);
	}, [])];
}
function serializeToDevModeString(input) {
	let nextId = 0;
	const seen = /* @__PURE__ */ new WeakMap();
	try {
		return JSON.stringify(input, function replacer(key, value) {
			if (key === "_owner" && this != null && typeof this === "object" && "$$typeof" in this) return;
			if (typeof value === "bigint") return `__bigint__:${value}`;
			if (value !== null && typeof value === "object") {
				const id = seen.get(value);
				if (id !== void 0) return `__object__:${id}`;
				seen.set(value, nextId);
				nextId += 1;
			}
			return value;
		}) ?? `__top__:${typeof input}`;
	} catch {
		return "__unserializable__";
	}
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/collapsible/root/useCollapsibleRoot.mjs
function useCollapsibleRoot(parameters) {
	const { open: openParam, defaultOpen, onOpenChange, disabled } = parameters;
	const [open, setOpen] = useControlled({
		controlled: openParam,
		default: defaultOpen,
		name: "Collapsible",
		state: "open"
	});
	const { mounted, setMounted, transitionStatus } = useTransitionStatus(open, true, true);
	const defaultPanelId = useBaseUiId();
	const [panelIdState, setPanelIdState] = React.useState();
	const panelId = panelIdState ?? defaultPanelId;
	const handleTrigger = useStableCallback((event) => {
		const nextOpen = !open;
		const eventDetails = createChangeEventDetails(triggerPress, event.nativeEvent);
		onOpenChange(nextOpen, eventDetails);
		if (eventDetails.isCanceled) return;
		setOpen(nextOpen);
	});
	return React.useMemo(() => ({
		disabled,
		handleTrigger,
		mounted,
		open,
		panelId,
		setMounted,
		setOpen,
		setPanelIdState,
		transitionStatus
	}), [
		disabled,
		handleTrigger,
		mounted,
		open,
		panelId,
		setMounted,
		setOpen,
		setPanelIdState,
		transitionStatus
	]);
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/collapsible/root/CollapsibleRootContext.mjs
var CollapsibleRootContext = /*#__PURE__*/ React.createContext(void 0);
if (process.env.NODE_ENV !== "production") CollapsibleRootContext.displayName = "CollapsibleRootContext";
function useCollapsibleRootContext() {
	const context = React.useContext(CollapsibleRootContext);
	if (context === void 0) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: CollapsibleRootContext is missing. Collapsible parts must be placed within <Collapsible.Root>." : formatErrorMessage(15));
	return context;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/collapsible/panel/CollapsiblePanelDataAttributes.mjs
var CollapsiblePanelDataAttributes = function(CollapsiblePanelDataAttributes) {
	/**
	* Present when the collapsible panel is open.
	*/
	CollapsiblePanelDataAttributes["open"] = "data-open";
	/**
	* Present when the collapsible panel is closed.
	*/
	CollapsiblePanelDataAttributes["closed"] = "data-closed";
	/**
	* Present when the panel is animating in.
	*/
	CollapsiblePanelDataAttributes[CollapsiblePanelDataAttributes["startingStyle"] = TransitionStatusDataAttributes.startingStyle] = "startingStyle";
	/**
	* Present when the panel is animating out.
	*/
	CollapsiblePanelDataAttributes[CollapsiblePanelDataAttributes["endingStyle"] = TransitionStatusDataAttributes.endingStyle] = "endingStyle";
	return CollapsiblePanelDataAttributes;
}({});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/collapsible/trigger/CollapsibleTriggerDataAttributes.mjs
var CollapsibleTriggerDataAttributes = /*#__PURE__*/ function(CollapsibleTriggerDataAttributes) {
	/**
	* Present when the collapsible panel is open.
	*/
	CollapsibleTriggerDataAttributes["panelOpen"] = "data-panel-open";
	return CollapsibleTriggerDataAttributes;
}({});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/utils/collapsibleOpenStateMapping.mjs
var PANEL_OPEN_HOOK = { [CollapsiblePanelDataAttributes.open]: "" };
var PANEL_CLOSED_HOOK = { [CollapsiblePanelDataAttributes.closed]: "" };
var triggerOpenStateMapping = { open(value) {
	if (value) return { [CollapsibleTriggerDataAttributes.panelOpen]: "" };
	return null;
} };
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/collapsible/root/stateAttributesMapping.mjs
var collapsibleStateAttributesMapping = {
	open(value) {
		if (value) return PANEL_OPEN_HOOK;
		return PANEL_CLOSED_HOOK;
	},
	...transitionStatusMapping
};
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/collapsible/root/CollapsibleRoot.mjs
/**
* Groups all parts of the collapsible.
* Renders a `<div>` element.
*
* Documentation: [Base UI Collapsible](https://base-ui.com/react/components/collapsible)
*/
var CollapsibleRoot = /*#__PURE__*/ React.forwardRef(function CollapsibleRoot(componentProps, forwardedRef) {
	const { render, className, defaultOpen = false, disabled = false, onOpenChange: onOpenChangeProp, open, style, ...elementProps } = componentProps;
	const onOpenChange = useStableCallback(onOpenChangeProp);
	const collapsible = useCollapsibleRoot({
		open,
		defaultOpen,
		onOpenChange,
		disabled
	});
	const state = React.useMemo(() => ({
		open: collapsible.open,
		disabled: collapsible.disabled,
		transitionStatus: collapsible.transitionStatus
	}), [
		collapsible.open,
		collapsible.disabled,
		collapsible.transitionStatus
	]);
	const contextValue = React.useMemo(() => ({
		...collapsible,
		onOpenChange,
		state
	}), [
		collapsible,
		onOpenChange,
		state
	]);
	const element = useRenderElement("div", componentProps, {
		state,
		ref: forwardedRef,
		props: elementProps,
		stateAttributesMapping: collapsibleStateAttributesMapping
	});
	return /*#__PURE__*/ jsx(CollapsibleRootContext.Provider, {
		value: contextValue,
		children: element
	});
});
if (process.env.NODE_ENV !== "production") CollapsibleRoot.displayName = "CollapsibleRoot";
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/collapsible/trigger/CollapsibleTrigger.mjs
var stateAttributesMapping$3 = {
	...triggerOpenStateMapping,
	...transitionStatusMapping
};
/**
* A button that opens and closes the collapsible panel.
* Renders a `<button>` element.
*
* Documentation: [Base UI Collapsible](https://base-ui.com/react/components/collapsible)
*/
var CollapsibleTrigger$1 = /*#__PURE__*/ React.forwardRef(function CollapsibleTrigger(componentProps, forwardedRef) {
	const { panelId, open, handleTrigger, state, disabled: contextDisabled } = useCollapsibleRootContext();
	const { className, disabled = contextDisabled, render, nativeButton = true, style, ...elementProps } = componentProps;
	const { getButtonProps, buttonRef } = useButton({
		disabled,
		focusableWhenDisabled: true,
		native: nativeButton
	});
	return useRenderElement("button", componentProps, {
		state,
		ref: [forwardedRef, buttonRef],
		props: [
			{
				"aria-controls": open ? panelId : void 0,
				"aria-expanded": open,
				onClick: handleTrigger
			},
			elementProps,
			getButtonProps
		],
		stateAttributesMapping: stateAttributesMapping$3
	});
});
if (process.env.NODE_ENV !== "production") CollapsibleTrigger$1.displayName = "CollapsibleTrigger";
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/collapsible/panel/useCollapsiblePanel.mjs
var EMPTY_DIMENSIONS = {
	height: void 0,
	width: void 0
};
function useCollapsiblePanel(parameters) {
	const { externalRef, hiddenUntilFound, id: idParam, keepMounted, mounted, onOpenChange, open, setMounted, setOpen, transitionStatus } = parameters;
	const panelRef = React.useRef(null);
	const animationTypeRef = React.useRef(null);
	const [dimensions, setDimensionsUnwrapped] = React.useState(EMPTY_DIMENSIONS);
	const lastMeasuredDimensionsRef = React.useRef(EMPTY_DIMENSIONS);
	const shouldSkipNextOpenRef = React.useRef(false);
	const shouldPreventMountAnimationRef = React.useRef(open);
	const shouldPreventActivityResumeAnimationRef = React.useRef(false);
	const [forcePanelIdle, setForcePanelIdle] = React.useState(false);
	const pendingTemporaryStyleRestoreRef = React.useRef(null);
	const mergedPanelRef = useMergedRefs(externalRef, panelRef);
	const latestStateRef = useValueAsRef({
		mounted,
		open
	});
	const runOnceCloseAnimationsFinish = useAnimationsFinished(panelRef, false, false);
	const hidden = !open && !mounted;
	const panelTransitionStatus = forcePanelIdle ? "idle" : transitionStatus;
	const shouldPreventOpenAnimation = open && (shouldPreventMountAnimationRef.current || shouldPreventActivityResumeAnimationRef.current);
	const renderedDimensions = !open && mounted && animationTypeRef.current === "css-animation" && dimensions.height === void 0 && dimensions.width === void 0 ? lastMeasuredDimensionsRef.current : dimensions;
	const shouldPersistHiddenTransitionStyles = hiddenUntilFound && hidden && animationTypeRef.current !== "css-animation";
	const setDimensions = useStableCallback((nextDimensions, shouldCacheMeasurement = true) => {
		if (shouldCacheMeasurement) lastMeasuredDimensionsRef.current = nextDimensions;
		setDimensionsUnwrapped(nextDimensions);
	});
	const restorePendingTemporaryStyle = useStableCallback(() => {
		pendingTemporaryStyleRestoreRef.current?.();
		pendingTemporaryStyleRestoreRef.current = null;
	});
	const setPendingTemporaryStyleRestore = useStableCallback((restore) => {
		restorePendingTemporaryStyle();
		pendingTemporaryStyleRestoreRef.current = () => {
			pendingTemporaryStyleRestoreRef.current = null;
			restore();
		};
	});
	const markActivityResumeAnimationSuppressed = useStableCallback(() => {
		if (open && mounted && animationTypeRef.current === "css-animation") shouldPreventActivityResumeAnimationRef.current = true;
	});
	useIsoLayoutEffect(() => {
		if (!forcePanelIdle || transitionStatus === "starting") return;
		setForcePanelIdle(false);
	}, [forcePanelIdle, transitionStatus]);
	React.useEffect(() => {
		return () => {
			markActivityResumeAnimationSuppressed();
			restorePendingTemporaryStyle();
		};
	}, [markActivityResumeAnimationSuppressed, restorePendingTemporaryStyle]);
	useIsoLayoutEffect(() => {
		const panel = panelRef.current;
		if (!panel) return;
		if (!open && pendingTemporaryStyleRestoreRef.current) restorePendingTemporaryStyle();
		const animationType = getAnimationType(panel, shouldPreventOpenAnimation);
		animationTypeRef.current = animationType;
		if (open && transitionStatus === "idle" && shouldPreventMountAnimationRef.current && animationType === "css-animation") {
			lastMeasuredDimensionsRef.current = getDimensions(panel);
			return;
		}
		if (open && transitionStatus === "starting") {
			const skipNextOpen = shouldSkipNextOpenRef.current;
			shouldSkipNextOpenRef.current = false;
			if (animationType === "none") {
				setDimensions(getDimensions(panel));
				setForcePanelIdle(true);
				return;
			}
			if (animationType === "css-transition") {
				const restoreLayoutStyles = resetLayoutStyles(panel);
				setDimensions(getDimensions(panel));
				if (!skipNextOpen) return restoreLayoutStyles;
				const restoreTransitionDuration = setTemporaryStyle(panel, "transition-duration", "0s");
				setPendingTemporaryStyleRestore(restoreTransitionDuration);
				setForcePanelIdle(true);
				return restoreLayoutStyles;
			}
			if (animationType === "css-animation") {
				setDimensions(getDimensions(panel));
				if (!skipNextOpen) {
					setTemporaryStyle(panel, "animation-name", "none")();
					return;
				}
				const restoreAnimationName = setTemporaryStyle(panel, "animation-name", "none");
				const restoreAnimationDuration = setTemporaryStyle(panel, "animation-duration", "0s");
				restoreAnimationName();
				setPendingTemporaryStyleRestore(restoreAnimationDuration);
				setForcePanelIdle(true);
				return;
			}
		}
		if (!open && mounted && (transitionStatus === "idle" || transitionStatus === "starting")) {
			shouldPreventMountAnimationRef.current = false;
			shouldPreventActivityResumeAnimationRef.current = false;
			if (animationType === "none") {
				setDimensions(EMPTY_DIMENSIONS, false);
				setMounted(false);
				return;
			}
			setDimensions(getDimensions(panel));
			return;
		}
		if (transitionStatus !== "ending") return;
		if (animationType === "none") {
			setMounted(false);
			return;
		}
		const nextDimensions = getDimensions(panel);
		if (!((nextDimensions.height ?? 0) > 0 || (nextDimensions.width ?? 0) > 0)) {
			setMounted(false);
			return;
		}
		setDimensions(nextDimensions);
		if (animationType === "css-animation") setTemporaryStyle(panel, "animation-name", "none")();
	}, [
		mounted,
		open,
		restorePendingTemporaryStyle,
		setDimensions,
		setMounted,
		setPendingTemporaryStyleRestore,
		shouldPreventOpenAnimation,
		transitionStatus
	]);
	useOpenChangeComplete({
		enabled: open && mounted && panelTransitionStatus === "idle",
		open: true,
		ref: panelRef,
		onComplete() {
			if (!open) return;
			setDimensions(EMPTY_DIMENSIONS, false);
		}
	});
	React.useEffect(() => {
		if (open || !mounted || panelTransitionStatus !== "ending") return;
		if (!panelRef.current) return;
		const abortController = new AbortController();
		let endingStyleFrame = -1;
		function handleComplete() {
			if (latestStateRef.current.open) return;
			setMounted(false);
			setDimensions(EMPTY_DIMENSIONS, false);
		}
		endingStyleFrame = AnimationFrame.request(() => {
			if (!abortController.signal.aborted) runOnceCloseAnimationsFinish(handleComplete, abortController.signal);
		});
		return () => {
			AnimationFrame.cancel(endingStyleFrame);
			abortController.abort();
		};
	}, [
		latestStateRef,
		mounted,
		open,
		panelTransitionStatus,
		runOnceCloseAnimationsFinish,
		setDimensions,
		setMounted
	]);
	useIsoLayoutEffect(() => {
		const panel = panelRef.current;
		if (!panel || !hiddenUntilFound || !hidden) return;
		panel.setAttribute("hidden", "until-found");
	}, [hidden, hiddenUntilFound]);
	React.useEffect(function registerBeforeMatchListener() {
		const panel = panelRef.current;
		if (!panel) return;
		function handleBeforeMatch(event) {
			const eventDetails = createChangeEventDetails(none, event);
			onOpenChange(true, eventDetails);
			if (eventDetails.isCanceled) return;
			shouldSkipNextOpenRef.current = true;
			setOpen(true);
		}
		return addEventListener(panel, "beforematch", handleBeforeMatch);
	}, [onOpenChange, setOpen]);
	const shouldRender = keepMounted || hiddenUntilFound || mounted || open;
	return {
		height: renderedDimensions.height,
		props: {
			...shouldPersistHiddenTransitionStyles ? { [CollapsiblePanelDataAttributes.startingStyle]: "" } : void 0,
			hidden,
			id: idParam
		},
		ref: mergedPanelRef,
		shouldPreventOpenAnimation,
		shouldRender,
		transitionStatus: panelTransitionStatus,
		width: renderedDimensions.width
	};
}
function getDimensions(element) {
	return {
		height: element.scrollHeight,
		width: element.scrollWidth
	};
}
function getAnimationType(element, hasSuppressedMountAnimation = false) {
	const panelStyles = getWindow(element).getComputedStyle(element);
	const hasAnimation = (panelStyles.animationName.split(",").map((name) => name.trim()).some((name) => name !== "" && name !== "none") || hasSuppressedMountAnimation) && hasNonZeroDuration(panelStyles.animationDuration);
	const hasTransition = hasNonZeroDuration(panelStyles.transitionDuration);
	if (hasAnimation && hasTransition) {
		if (process.env.NODE_ENV !== "production") warn("CSS transitions and CSS animations both detected on Collapsible or Accordion panel.", "Only one of either animation type should be used.");
		return "css-transition";
	}
	if (hasTransition) return "css-transition";
	if (hasAnimation) return "css-animation";
	return "none";
}
function hasNonZeroDuration(value) {
	return value.split(",").map((part) => part.trim()).some((part) => part !== "" && Number.parseFloat(part) > 0);
}
/**
* Temporarily overrides an inline style property and returns a cleanup that
* restores the previous inline value and priority.
* @param element - The element whose inline style should be updated.
* @param property - The CSS property name to override.
* @param value - The temporary value to assign.
* @returns A cleanup function that restores the original inline style state.
*/
function setTemporaryStyle(element, property, value) {
	const previousValue = element.style.getPropertyValue(property);
	const previousPriority = element.style.getPropertyPriority(property);
	element.style.setProperty(property, value);
	return () => {
		if (previousValue === "") {
			element.style.removeProperty(property);
			return;
		}
		element.style.setProperty(property, previousValue, previousPriority);
	};
}
/**
* Temporarily resets inline alignment styles that can distort scroll-based
* size measurements, then restores them on the next animation frame.
* @param element - The panel element being measured.
* @returns A cleanup function that cancels the scheduled restore and reapplies
* the original inline layout styles immediately.
*/
function resetLayoutStyles(element) {
	const originalLayoutStyles = {
		"justify-content": element.style.justifyContent,
		"align-items": element.style.alignItems,
		"align-content": element.style.alignContent,
		"justify-items": element.style.justifyItems
	};
	Object.keys(originalLayoutStyles).forEach((key) => {
		element.style.setProperty(key, "initial", "important");
	});
	function restoreLayoutStyles() {
		Object.entries(originalLayoutStyles).forEach(([key, value]) => {
			if (value === "") {
				element.style.removeProperty(key);
				return;
			}
			element.style.setProperty(key, value);
		});
	}
	const frame = AnimationFrame.request(restoreLayoutStyles);
	return () => {
		AnimationFrame.cancel(frame);
		restoreLayoutStyles();
	};
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/collapsible/panel/CollapsiblePanelCssVars.mjs
var CollapsiblePanelCssVars = /*#__PURE__*/ function(CollapsiblePanelCssVars) {
	/**
	* The collapsible panel's height.
	* @type {number}
	*/
	CollapsiblePanelCssVars["collapsiblePanelHeight"] = "--collapsible-panel-height";
	/**
	* The collapsible panel's width.
	* @type {number}
	*/
	CollapsiblePanelCssVars["collapsiblePanelWidth"] = "--collapsible-panel-width";
	return CollapsiblePanelCssVars;
}({});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/collapsible/panel/CollapsiblePanel.mjs
/**
* A panel with the collapsible contents.
* Renders a `<div>` element.
*
* Documentation: [Base UI Collapsible](https://base-ui.com/react/components/collapsible)
*/
var CollapsiblePanel = /*#__PURE__*/ React.forwardRef(function CollapsiblePanel(componentProps, forwardedRef) {
	const { className, hiddenUntilFound: hiddenUntilFoundProp, keepMounted: keepMountedProp, render, id: idProp, style, ...elementProps } = componentProps;
	if (process.env.NODE_ENV !== "production") useIsoLayoutEffect(() => {
		if (hiddenUntilFoundProp && keepMountedProp === false) warn("The `keepMounted={false}` prop on `Collapsible.Panel` is ignored when `hiddenUntilFound` is enabled, since the panel must remain mounted while closed.");
	}, [hiddenUntilFoundProp, keepMountedProp]);
	const { mounted, onOpenChange, open, panelId, setMounted, setPanelIdState, setOpen, state, transitionStatus } = useCollapsibleRootContext();
	const hiddenUntilFound = hiddenUntilFoundProp ?? false;
	const keepMounted = keepMountedProp ?? false;
	useIsoLayoutEffect(() => {
		if (idProp) {
			setPanelIdState(idProp);
			return () => {
				setPanelIdState(void 0);
			};
		}
	}, [idProp, setPanelIdState]);
	const { height, props, ref, shouldPreventOpenAnimation, shouldRender, transitionStatus: panelTransitionStatus, width } = useCollapsiblePanel({
		externalRef: forwardedRef,
		hiddenUntilFound,
		id: panelId,
		keepMounted,
		mounted,
		onOpenChange,
		open,
		setMounted,
		setOpen,
		transitionStatus
	});
	const panelState = {
		...state,
		transitionStatus: panelTransitionStatus
	};
	const resolvedStyle = resolveStyle(style, panelState);
	const element = useRenderElement("div", {
		...componentProps,
		style: void 0
	}, {
		state: panelState,
		ref,
		props: [
			props,
			{ style: {
				[CollapsiblePanelCssVars.collapsiblePanelHeight]: height === void 0 ? "auto" : `${height}px`,
				[CollapsiblePanelCssVars.collapsiblePanelWidth]: width === void 0 ? "auto" : `${width}px`
			} },
			elementProps,
			resolvedStyle ? { style: resolvedStyle } : void 0,
			shouldPreventOpenAnimation ? { style: { animationName: "none" } } : void 0
		],
		stateAttributesMapping: collapsibleStateAttributesMapping
	});
	if (!shouldRender) return null;
	return element;
});
if (process.env.NODE_ENV !== "production") CollapsiblePanel.displayName = "CollapsiblePanel";
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/components/ui/collapsible.js
var Collapsible = CollapsibleRoot;
var CollapsibleTrigger = CollapsibleTrigger$1;
function CollapsibleContent({ children, className, ...props }) {
	return /* @__PURE__ */ jsx(CollapsiblePanel, {
		...props,
		className: (s) => cn$1("overflow-hidden [&[hidden]:not([hidden='until-found'])]:hidden h-(--collapsible-panel-height) transition-[height,opacity] data-starting-style:opacity-0 data-starting-style:h-0 data-ending-style:h-0 data-ending-style:opacity-0", typeof className === "function" ? className(s) : className),
		children
	});
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/utils/use-is-scroll-top.js
function useIsScrollTop({ enabled = true }) {
	const [isTop, setIsTop] = useState();
	useEffect(() => {
		if (!enabled) return;
		const listener = () => {
			setIsTop(window.scrollY < 10);
		};
		listener();
		window.addEventListener("scroll", listener);
		return () => {
			window.removeEventListener("scroll", listener);
		};
	}, [enabled]);
	return isTop;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/navigation-menu/root/NavigationMenuRootContext.mjs
var NavigationMenuRootContext = /*#__PURE__*/ React.createContext(void 0);
if (process.env.NODE_ENV !== "production") NavigationMenuRootContext.displayName = "NavigationMenuRootContext";
if (process.env.NODE_ENV !== "production") NavigationMenuRootContext.displayName = "NavigationMenuRootContext";
function useNavigationMenuRootContext(optional) {
	const context = React.useContext(NavigationMenuRootContext);
	if (context === void 0 && !optional) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: NavigationMenuRootContext is missing. Navigation Menu parts must be placed within <NavigationMenu.Root>." : formatErrorMessage(41));
	return context;
}
var NavigationMenuTreeContext = /*#__PURE__*/ React.createContext(void 0);
if (process.env.NODE_ENV !== "production") NavigationMenuTreeContext.displayName = "NavigationMenuTreeContext";
function useNavigationMenuTreeContext() {
	return React.useContext(NavigationMenuTreeContext);
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/navigation-menu/positioner/NavigationMenuPositionerCssVars.mjs
var NavigationMenuPositionerCssVars = /*#__PURE__*/ function(NavigationMenuPositionerCssVars) {
	/**
	* The available width between the trigger and the edge of the viewport.
	* @type {number}
	*/
	NavigationMenuPositionerCssVars["availableWidth"] = "--available-width";
	/**
	* The available height between the trigger and the edge of the viewport.
	* @type {number}
	*/
	NavigationMenuPositionerCssVars["availableHeight"] = "--available-height";
	/**
	* The anchor's width.
	* @type {number}
	*/
	NavigationMenuPositionerCssVars["anchorWidth"] = "--anchor-width";
	/**
	* The anchor's height.
	* @type {number}
	*/
	NavigationMenuPositionerCssVars["anchorHeight"] = "--anchor-height";
	/**
	* The coordinates that this element is anchored to. Used for animations and transitions.
	* @type {string}
	*/
	NavigationMenuPositionerCssVars["transformOrigin"] = "--transform-origin";
	/**
	* The fixed width of the positioner element.
	* @type {number}
	*/
	NavigationMenuPositionerCssVars["positionerWidth"] = "--positioner-width";
	/**
	* The fixed height of the positioner element.
	* @type {number}
	*/
	NavigationMenuPositionerCssVars["positionerHeight"] = "--positioner-height";
	return NavigationMenuPositionerCssVars;
}({});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/navigation-menu/popup/NavigationMenuPopupCssVars.mjs
var NavigationMenuPopupCssVars = /*#__PURE__*/ function(NavigationMenuPopupCssVars) {
	/**
	* The fixed width of the popup element.
	* @type {number}
	*/
	NavigationMenuPopupCssVars["popupWidth"] = "--popup-width";
	/**
	* The fixed height of the popup element.
	* @type {number}
	*/
	NavigationMenuPopupCssVars["popupHeight"] = "--popup-height";
	return NavigationMenuPopupCssVars;
}({});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/navigation-menu/utils/setSharedFixedSize.mjs
function setSharedFixedSize(popupElement, positionerElement, width, height) {
	popupElement.style.setProperty(NavigationMenuPopupCssVars.popupWidth, `${width}px`);
	popupElement.style.setProperty(NavigationMenuPopupCssVars.popupHeight, `${height}px`);
	positionerElement.style.setProperty(NavigationMenuPositionerCssVars.positionerWidth, `${width}px`);
	positionerElement.style.setProperty(NavigationMenuPositionerCssVars.positionerHeight, `${height}px`);
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/navigation-menu/root/NavigationMenuRoot.mjs
var blockedReturnFocusReasons = /* @__PURE__ */ new Set([
	triggerHover,
	outsidePress,
	focusOut
]);
function getPositionerFixedSize(positionerElement) {
	const width = parseFloat(positionerElement.style.getPropertyValue(NavigationMenuPositionerCssVars.positionerWidth)) || 0;
	const height = parseFloat(positionerElement.style.getPropertyValue(NavigationMenuPositionerCssVars.positionerHeight)) || 0;
	if (width <= 0 || height <= 0) return null;
	return {
		width,
		height
	};
}
/**
* Groups all parts of the navigation menu.
* Renders a `<nav>` element at the root, or `<div>` element when nested.
*
* Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
*/
var NavigationMenuRoot = /*#__PURE__*/ React.forwardRef(function NavigationMenuRoot(componentProps, forwardedRef) {
	const { defaultValue = null, value: valueParam, onValueChange, actionsRef, delay = 50, closeDelay = 50, orientation = "horizontal", onOpenChangeComplete } = componentProps;
	const nested = useFloatingParentNodeId() != null;
	const parentRootContext = useNavigationMenuRootContext(true);
	const [value, setValueUnwrapped] = useControlled({
		controlled: valueParam,
		default: defaultValue,
		name: "NavigationMenu",
		state: "value"
	});
	const open = value != null;
	const closeReasonRef = React.useRef(void 0);
	const rootRef = React.useRef(null);
	const [positionerElement, setPositionerElement] = React.useState(null);
	const [popupElement, setPopupElement] = React.useState(null);
	const [viewportElement, setViewportElement] = React.useState(null);
	const [viewportTargetElement, setViewportTargetElement] = React.useState(null);
	const [activationDirection, setActivationDirection] = React.useState(null);
	const [floatingRootContext, setFloatingRootContext] = React.useState(void 0);
	const [viewportInert, setViewportInert] = React.useState(false);
	const prevTriggerElementRef = React.useRef(null);
	const currentContentRef = React.useRef(null);
	const beforeInsideRef = React.useRef(null);
	const afterInsideRef = React.useRef(null);
	const beforeOutsideRef = React.useRef(null);
	const afterOutsideRef = React.useRef(null);
	const popupAutoSizeResetRef = React.useRef({
		abortController: null,
		owner: null
	});
	const { mounted, setMounted, transitionStatus } = useTransitionStatus(open);
	useIsoLayoutEffect(() => {
		if (open) return;
		if (!positionerElement || !popupElement) return;
		const closeTransitionSize = getPositionerFixedSize(positionerElement);
		if (!closeTransitionSize) return;
		setSharedFixedSize(popupElement, positionerElement, closeTransitionSize.width, closeTransitionSize.height);
	}, [
		open,
		popupElement,
		positionerElement
	]);
	React.useEffect(() => {
		setViewportInert(false);
	}, [value]);
	const setValue = useStableCallback((nextValue, eventDetails) => {
		if (nextValue == null) closeReasonRef.current = eventDetails.reason;
		if (nextValue !== value) onValueChange?.(nextValue, eventDetails);
		if (eventDetails.isCanceled) return;
		if (nextValue == null) {
			setActivationDirection(null);
			setFloatingRootContext(void 0);
		}
		setValueUnwrapped(nextValue);
		if (nested && nextValue == null && eventDetails.reason === "link-press" && parentRootContext) parentRootContext.setValue(null, eventDetails);
	});
	const handleUnmount = useStableCallback(() => {
		const doc = ownerDocument(rootRef.current);
		const activeEl = activeElement(doc);
		if (!(closeReasonRef.current ? blockedReturnFocusReasons.has(closeReasonRef.current) : false) && isHTMLElement(prevTriggerElementRef.current) && (activeEl === ownerDocument(popupElement).body || contains(popupElement, activeEl)) && popupElement) {
			prevTriggerElementRef.current.focus({ preventScroll: true });
			prevTriggerElementRef.current = void 0;
		}
		setMounted(false);
		onOpenChangeComplete?.(false);
		setActivationDirection(null);
		setFloatingRootContext(void 0);
		currentContentRef.current = null;
		closeReasonRef.current = void 0;
	});
	React.useImperativeHandle(actionsRef, () => ({ unmount: handleUnmount }), [handleUnmount]);
	useOpenChangeComplete({
		enabled: !actionsRef,
		open,
		ref: { current: popupElement },
		onComplete() {
			if (!open) handleUnmount();
		}
	});
	useOpenChangeComplete({
		enabled: !actionsRef,
		open,
		ref: { current: viewportTargetElement },
		onComplete() {
			if (!open) handleUnmount();
		}
	});
	const contextActivationDirection = open ? activationDirection : null;
	const contextValue = React.useMemo(() => ({
		open,
		value,
		setValue,
		mounted,
		transitionStatus,
		positionerElement,
		setPositionerElement,
		popupElement,
		setPopupElement,
		viewportElement,
		setViewportElement,
		viewportTargetElement,
		setViewportTargetElement,
		activationDirection: contextActivationDirection,
		setActivationDirection,
		floatingRootContext,
		setFloatingRootContext,
		currentContentRef,
		nested,
		rootRef,
		beforeInsideRef,
		afterInsideRef,
		beforeOutsideRef,
		afterOutsideRef,
		prevTriggerElementRef,
		popupAutoSizeResetRef,
		delay,
		closeDelay,
		orientation,
		viewportInert,
		setViewportInert
	}), [
		open,
		value,
		setValue,
		mounted,
		transitionStatus,
		positionerElement,
		popupElement,
		viewportElement,
		viewportTargetElement,
		contextActivationDirection,
		floatingRootContext,
		nested,
		delay,
		closeDelay,
		orientation,
		viewportInert
	]);
	const jsx$1 = /*#__PURE__*/ jsx(NavigationMenuRootContext.Provider, {
		value: contextValue,
		children: /*#__PURE__*/ jsx(TreeContext$1, {
			componentProps,
			forwardedRef,
			children: componentProps.children
		})
	});
	if (!nested) return /*#__PURE__*/ jsx(FloatingTree, { children: jsx$1 });
	return jsx$1;
});
if (process.env.NODE_ENV !== "production") NavigationMenuRoot.displayName = "NavigationMenuRoot";
function TreeContext$1(props) {
	const { className, render, defaultValue, value: valueParam, onValueChange, actionsRef, delay, closeDelay, orientation, onOpenChangeComplete, style, ...elementProps } = props.componentProps;
	const nodeId = useFloatingNodeId();
	const { rootRef, nested, open } = useNavigationMenuRootContext();
	const state = {
		open,
		nested
	};
	const element = useRenderElement(nested ? "div" : "nav", props.componentProps, {
		state,
		ref: [props.forwardedRef, rootRef],
		props: elementProps
	});
	return /*#__PURE__*/ jsx(NavigationMenuTreeContext.Provider, {
		value: nodeId,
		children: /*#__PURE__*/ jsx(FloatingNode, {
			id: nodeId,
			children: element
		})
	});
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/internals/composite/list/CompositeListContext.mjs
var CompositeListContext = /*#__PURE__*/ React.createContext({
	register: () => {},
	unregister: () => {},
	subscribeMapChange: () => {
		return () => {};
	},
	elementsRef: { current: [] },
	nextIndexRef: { current: 0 }
});
if (process.env.NODE_ENV !== "production") CompositeListContext.displayName = "CompositeListContext";
function useCompositeListContext() {
	return React.useContext(CompositeListContext);
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/internals/composite/list/CompositeList.mjs
/**
* Provides context for a list of items in a composite component.
* @internal
*/
function CompositeList(props) {
	const { children, elementsRef, labelsRef, onMapChange: onMapChangeProp } = props;
	const onMapChange = useStableCallback(onMapChangeProp);
	const nextIndexRef = React.useRef(0);
	const listeners = useRefWithInit(createListeners).current;
	const map = useRefWithInit(createMap).current;
	const [mapTick, setMapTick] = React.useState(0);
	const lastTickRef = React.useRef(mapTick);
	const register = useStableCallback((node, metadata) => {
		map.set(node, metadata ?? null);
		lastTickRef.current += 1;
		setMapTick(lastTickRef.current);
	});
	const unregister = useStableCallback((node) => {
		map.delete(node);
		lastTickRef.current += 1;
		setMapTick(lastTickRef.current);
	});
	const sortedMap = React.useMemo(() => {
		const newMap = /* @__PURE__ */ new Map();
		Array.from(map.keys()).filter((node) => node.isConnected).sort(sortByDocumentPosition).forEach((node, index) => {
			const metadata = map.get(node) ?? {};
			newMap.set(node, {
				...metadata,
				index
			});
		});
		return newMap;
	}, [map, mapTick]);
	useIsoLayoutEffect(() => {
		if (typeof MutationObserver !== "function" || sortedMap.size === 0) return;
		const mutationObserver = new MutationObserver((entries) => {
			const diff = /* @__PURE__ */ new Set();
			const updateDiff = (node) => diff.has(node) ? diff.delete(node) : diff.add(node);
			entries.forEach((entry) => {
				entry.removedNodes.forEach(updateDiff);
				entry.addedNodes.forEach(updateDiff);
			});
			if (diff.size === 0) {
				lastTickRef.current += 1;
				setMapTick(lastTickRef.current);
			}
		});
		sortedMap.forEach((_, node) => {
			if (node.parentElement) mutationObserver.observe(node.parentElement, { childList: true });
		});
		return () => {
			mutationObserver.disconnect();
		};
	}, [sortedMap]);
	useIsoLayoutEffect(() => {
		if (lastTickRef.current === mapTick) {
			if (elementsRef.current.length !== sortedMap.size) elementsRef.current.length = sortedMap.size;
			if (labelsRef && labelsRef.current.length !== sortedMap.size) labelsRef.current.length = sortedMap.size;
			nextIndexRef.current = sortedMap.size;
		}
		onMapChange(sortedMap);
	}, [
		onMapChange,
		sortedMap,
		elementsRef,
		labelsRef,
		mapTick
	]);
	useIsoLayoutEffect(() => {
		return () => {
			elementsRef.current = [];
		};
	}, [elementsRef]);
	useIsoLayoutEffect(() => {
		return () => {
			if (labelsRef) labelsRef.current = [];
		};
	}, [labelsRef]);
	const subscribeMapChange = useStableCallback((fn) => {
		listeners.add(fn);
		return () => {
			listeners.delete(fn);
		};
	});
	useIsoLayoutEffect(() => {
		listeners.forEach((l) => l(sortedMap));
	}, [listeners, sortedMap]);
	const contextValue = React.useMemo(() => ({
		register,
		unregister,
		subscribeMapChange,
		elementsRef,
		labelsRef,
		nextIndexRef
	}), [
		register,
		unregister,
		subscribeMapChange,
		elementsRef,
		labelsRef,
		nextIndexRef
	]);
	return /*#__PURE__*/ jsx(CompositeListContext.Provider, {
		value: contextValue,
		children
	});
}
function createMap() {
	return /* @__PURE__ */ new Map();
}
function createListeners() {
	return /* @__PURE__ */ new Set();
}
function sortByDocumentPosition(a, b) {
	const position = a.compareDocumentPosition(b);
	if (position & Node.DOCUMENT_POSITION_FOLLOWING || position & Node.DOCUMENT_POSITION_CONTAINED_BY) return -1;
	if (position & Node.DOCUMENT_POSITION_PRECEDING || position & Node.DOCUMENT_POSITION_CONTAINS) return 1;
	return 0;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+utils@0.3.1_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/utils/isElementDisabled.mjs
function isElementDisabled(element) {
	return element == null || element.hasAttribute("disabled") || element.getAttribute("aria-disabled") === "true";
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/internals/composite/constants.mjs
var ACTIVE_COMPOSITE_ITEM = "data-composite-item-active";
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/internals/composite/root/useCompositeRoot.mjs
var EMPTY_ARRAY = [];
function useCompositeRoot(params) {
	const { loopFocus = true, orientation = "both", grid, onLoop, direction, highlightedIndex: externalHighlightedIndex, onHighlightedIndexChange: externalSetHighlightedIndex, rootRef: externalRef, enableHomeAndEndKeys = false, stopEventPropagation = false, disabledIndices, modifierKeys = EMPTY_ARRAY } = params;
	const [internalHighlightedIndex, internalSetHighlightedIndex] = React.useState(0);
	const isGrid = grid != null;
	const rootRef = React.useRef(null);
	const mergedRef = useMergedRefs(rootRef, externalRef);
	const elementsRef = React.useRef([]);
	const hasSetDefaultIndexRef = React.useRef(false);
	const highlightedIndex = externalHighlightedIndex ?? internalHighlightedIndex;
	const onHighlightedIndexChange = useStableCallback((index, shouldScrollIntoView = false) => {
		(externalSetHighlightedIndex ?? internalSetHighlightedIndex)(index);
		if (shouldScrollIntoView) {
			const newActiveItem = elementsRef.current[index];
			scrollIntoViewIfNeeded(rootRef.current, newActiveItem, direction, orientation);
		}
	});
	const onMapChange = useStableCallback((map) => {
		if (map.size === 0 || hasSetDefaultIndexRef.current) return;
		hasSetDefaultIndexRef.current = true;
		const sortedElements = Array.from(map.keys());
		const activeItem = sortedElements.find((compositeElement) => compositeElement?.hasAttribute("data-composite-item-active")) ?? null;
		const activeIndex = activeItem ? sortedElements.indexOf(activeItem) : -1;
		if (activeIndex !== -1) onHighlightedIndexChange(activeIndex);
		else if (isListIndexDisabled(sortedElements, highlightedIndex, disabledIndices)) {
			const firstEnabledIndex = findNonDisabledListIndex(sortedElements, { disabledIndices });
			if (!isIndexOutOfListBounds(sortedElements, firstEnabledIndex)) onHighlightedIndexChange(firstEnabledIndex);
		}
		scrollIntoViewIfNeeded(rootRef.current, activeItem, direction, orientation);
	});
	useIsoLayoutEffect(() => {
		if (disabledIndices == null || externalHighlightedIndex != null || !hasSetDefaultIndexRef.current) return;
		const elements = elementsRef.current;
		if (isListIndexDisabled(elements, highlightedIndex, disabledIndices)) {
			const firstEnabledIndex = findNonDisabledListIndex(elements, { disabledIndices });
			if (!isIndexOutOfListBounds(elements, firstEnabledIndex)) onHighlightedIndexChange(firstEnabledIndex);
		}
	}, [
		disabledIndices,
		externalHighlightedIndex,
		highlightedIndex,
		elementsRef,
		onHighlightedIndexChange
	]);
	const wrappedOnLoop = useStableCallback((event, prevIndex, nextIndex) => {
		if (!onLoop) return nextIndex;
		return onLoop(event, prevIndex, nextIndex, elementsRef);
	});
	const onKeyDown = useStableCallback((event) => {
		const RELEVANT_KEYS = enableHomeAndEndKeys ? COMPOSITE_KEYS : ARROW_KEYS;
		if (!RELEVANT_KEYS.has(event.key)) return;
		if (isModifierKeySet(event, modifierKeys)) return;
		if (!rootRef.current) return;
		const isRtl = direction === "rtl";
		const horizontalForwardKey = isRtl ? ARROW_LEFT : ARROW_RIGHT;
		const forwardKey = {
			horizontal: horizontalForwardKey,
			vertical: ARROW_DOWN,
			both: horizontalForwardKey
		}[orientation];
		const horizontalBackwardKey = isRtl ? ARROW_RIGHT : ARROW_LEFT;
		const backwardKey = {
			horizontal: horizontalBackwardKey,
			vertical: ARROW_UP,
			both: horizontalBackwardKey
		}[orientation];
		const target = getTarget(event.nativeEvent);
		if (target != null && isNativeInput(target) && !isElementDisabled(target)) {
			const selectionStart = target.selectionStart;
			const selectionEnd = target.selectionEnd;
			const textContent = target.value ?? "";
			if (selectionStart == null || event.shiftKey || selectionStart !== selectionEnd) return;
			if (event.key !== backwardKey && selectionStart < textContent.length) return;
			if (event.key !== forwardKey && selectionStart > 0) return;
		}
		let nextIndex = highlightedIndex;
		const minIndex = getMinListIndex(elementsRef, disabledIndices);
		const maxIndex = getMaxListIndex(elementsRef, disabledIndices);
		if (grid != null) nextIndex = grid({
			disabledIndices,
			elementsRef,
			event,
			highlightedIndex,
			loopFocus,
			maxIndex,
			minIndex,
			onLoop: wrappedOnLoop,
			orientation,
			rtl: isRtl
		});
		const forwardKeys = {
			horizontal: [horizontalForwardKey],
			vertical: [ARROW_DOWN],
			both: [horizontalForwardKey, ARROW_DOWN]
		}[orientation];
		const backwardKeys = {
			horizontal: [horizontalBackwardKey],
			vertical: [ARROW_UP],
			both: [horizontalBackwardKey, ARROW_UP]
		}[orientation];
		const preventedKeys = isGrid ? RELEVANT_KEYS : {
			horizontal: enableHomeAndEndKeys ? HORIZONTAL_KEYS_WITH_EXTRA_KEYS : HORIZONTAL_KEYS,
			vertical: enableHomeAndEndKeys ? VERTICAL_KEYS_WITH_EXTRA_KEYS : VERTICAL_KEYS,
			both: RELEVANT_KEYS
		}[orientation];
		if (enableHomeAndEndKeys) {
			if (event.key === "Home") nextIndex = minIndex;
			else if (event.key === "End") nextIndex = maxIndex;
		}
		if (nextIndex === highlightedIndex && (forwardKeys.includes(event.key) || backwardKeys.includes(event.key))) {
			if (loopFocus && nextIndex === maxIndex && forwardKeys.includes(event.key)) {
				nextIndex = minIndex;
				if (onLoop) nextIndex = onLoop(event, highlightedIndex, nextIndex, elementsRef);
			} else if (loopFocus && nextIndex === minIndex && backwardKeys.includes(event.key)) {
				nextIndex = maxIndex;
				if (onLoop) nextIndex = onLoop(event, highlightedIndex, nextIndex, elementsRef);
			} else nextIndex = findNonDisabledListIndex(elementsRef.current, {
				startingIndex: nextIndex,
				decrement: backwardKeys.includes(event.key),
				disabledIndices
			});
		}
		if (nextIndex !== highlightedIndex && !isIndexOutOfListBounds(elementsRef.current, nextIndex)) {
			if (stopEventPropagation) event.stopPropagation();
			if (preventedKeys.has(event.key)) event.preventDefault();
			onHighlightedIndexChange(nextIndex, true);
			queueMicrotask(() => {
				elementsRef.current[nextIndex]?.focus();
			});
		}
	});
	return {
		props: {
			ref: mergedRef,
			onFocus(event) {
				const element = rootRef.current;
				const target = getTarget(event.nativeEvent);
				if (!element || target == null || !isNativeInput(target)) return;
				target.setSelectionRange(0, target.value.length ?? 0);
			},
			onKeyDown
		},
		highlightedIndex,
		onHighlightedIndexChange,
		elementsRef,
		disabledIndices,
		onMapChange,
		relayKeyboardEvent: onKeyDown
	};
}
function isModifierKeySet(event, ignoredModifierKeys) {
	for (const key of MODIFIER_KEYS.values()) {
		if (ignoredModifierKeys.includes(key)) continue;
		if (event.getModifierState(key)) return true;
	}
	return false;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/internals/composite/root/CompositeRoot.mjs
/**
* @internal
*/
function CompositeRoot(componentProps) {
	const { render, className, style, refs = EMPTY_ARRAY$1, props = EMPTY_ARRAY$1, state = EMPTY_OBJECT, stateAttributesMapping, highlightedIndex: highlightedIndexProp, onHighlightedIndexChange: onHighlightedIndexChangeProp, orientation, grid, loopFocus, onLoop, enableHomeAndEndKeys, onMapChange: onMapChangeProp, stopEventPropagation = true, rootRef, disabledIndices, modifierKeys, highlightItemOnHover = false, tag = "div", ...elementProps } = componentProps;
	const { props: defaultProps, highlightedIndex, onHighlightedIndexChange, elementsRef, onMapChange: onMapChangeUnwrapped, relayKeyboardEvent } = useCompositeRoot({
		grid,
		loopFocus,
		onLoop,
		orientation,
		highlightedIndex: highlightedIndexProp,
		onHighlightedIndexChange: onHighlightedIndexChangeProp,
		rootRef,
		stopEventPropagation,
		enableHomeAndEndKeys,
		direction: useDirection(),
		disabledIndices,
		modifierKeys
	});
	const element = useRenderElement(tag, componentProps, {
		state,
		ref: refs,
		props: [
			defaultProps,
			...props,
			elementProps
		],
		stateAttributesMapping
	});
	const contextValue = React.useMemo(() => ({
		highlightedIndex,
		onHighlightedIndexChange,
		highlightItemOnHover,
		relayKeyboardEvent
	}), [
		highlightedIndex,
		onHighlightedIndexChange,
		highlightItemOnHover,
		relayKeyboardEvent
	]);
	return /*#__PURE__*/ jsx(CompositeRootContext.Provider, {
		value: contextValue,
		children: /*#__PURE__*/ jsx(CompositeList, {
			elementsRef,
			onMapChange: (newMap) => {
				onMapChangeProp?.(newMap);
				onMapChangeUnwrapped(newMap);
			},
			children: element
		})
	});
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/navigation-menu/utils/constants.mjs
var NAVIGATION_MENU_TRIGGER_IDENTIFIER = "data-base-ui-navigation-menu-trigger";
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/navigation-menu/list/NavigationMenuDismissContext.mjs
var NavigationMenuDismissContext = /*#__PURE__*/ React.createContext(void 0);
if (process.env.NODE_ENV !== "production") NavigationMenuDismissContext.displayName = "NavigationMenuDismissContext";
function useNavigationMenuDismissContext() {
	return React.useContext(NavigationMenuDismissContext);
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/navigation-menu/list/NavigationMenuList.mjs
/**
* Contains a list of navigation menu items.
* Renders a `<ul>` element.
*
* Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
*/
var NavigationMenuList = /*#__PURE__*/ React.forwardRef(function NavigationMenuList(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const nodeId = useNavigationMenuTreeContext();
	const { orientation, open, floatingRootContext, positionerElement, value, closeDelay, viewportElement, nested } = useNavigationMenuRootContext();
	const fallbackContext = React.useMemo(() => getEmptyRootContext(), []);
	const context = floatingRootContext || fallbackContext;
	const interactionsEnabled = positionerElement != null || value == null;
	useHoverFloatingInteraction(context, {
		enabled: Boolean(floatingRootContext) && (positionerElement != null || viewportElement != null || value == null),
		closeDelay,
		nodeId
	});
	const dismiss = useDismiss(context, {
		enabled: interactionsEnabled,
		outsidePressEvent: "intentional",
		outsidePress(event) {
			return getTarget(event)?.closest(`[${NAVIGATION_MENU_TRIGGER_IDENTIFIER}]`) === null;
		}
	});
	const dismissProps = floatingRootContext ? dismiss : void 0;
	const state = { open };
	const defaultProps = nested ? EMPTY_OBJECT : { onKeyDown(event) {
		if (orientation === "horizontal" && (event.key === "ArrowLeft" || event.key === "ArrowRight") || orientation === "vertical" && (event.key === "ArrowUp" || event.key === "ArrowDown")) event.stopPropagation();
	} };
	const props = [
		dismissProps?.floating || EMPTY_OBJECT,
		defaultProps,
		elementProps
	];
	const element = useRenderElement("ul", componentProps, {
		state,
		ref: forwardedRef,
		props,
		enabled: nested
	});
	if (nested) return /*#__PURE__*/ jsx(NavigationMenuDismissContext.Provider, {
		value: dismissProps,
		children: element
	});
	return /*#__PURE__*/ jsx(NavigationMenuDismissContext.Provider, {
		value: dismissProps,
		children: /*#__PURE__*/ jsx(CompositeRoot, {
			render,
			className,
			style,
			state,
			refs: [forwardedRef],
			props,
			loopFocus: false,
			orientation,
			tag: "ul"
		})
	});
});
if (process.env.NODE_ENV !== "production") NavigationMenuList.displayName = "NavigationMenuList";
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/navigation-menu/item/NavigationMenuItemContext.mjs
var NavigationMenuItemContext = /*#__PURE__*/ React.createContext(void 0);
if (process.env.NODE_ENV !== "production") NavigationMenuItemContext.displayName = "NavigationMenuItemContext";
function useNavigationMenuItemContext() {
	const value = React.useContext(NavigationMenuItemContext);
	if (!value) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: NavigationMenuItem parts must be used within a <NavigationMenu.Item>." : formatErrorMessage(39));
	return value;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/navigation-menu/item/NavigationMenuItem.mjs
/**
* An individual navigation menu item.
* Renders a `<li>` element.
*
* Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
*/
var NavigationMenuItem = /*#__PURE__*/ React.forwardRef(function NavigationMenuItem(componentProps, forwardedRef) {
	const { render, className, style, value: valueProp, ...elementProps } = componentProps;
	const fallbackValue = useBaseUiId();
	const value = valueProp ?? fallbackValue;
	const element = useRenderElement("li", componentProps, {
		ref: forwardedRef,
		props: elementProps
	});
	const contextValue = React.useMemo(() => ({ value }), [value]);
	return /*#__PURE__*/ jsx(NavigationMenuItemContext.Provider, {
		value: contextValue,
		children: element
	});
});
if (process.env.NODE_ENV !== "production") NavigationMenuItem.displayName = "NavigationMenuItem";
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/navigation-menu/content/NavigationMenuContent.mjs
var stateAttributesMapping$2 = {
	...popupStateMapping,
	...transitionStatusMapping,
	activationDirection(value) {
		if (!value) return null;
		return { "data-activation-direction": value };
	}
};
/**
* A container for the content of the navigation menu item that is moved into the popup
* when the item is active.
* Renders a `<div>` element.
*
* Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
*/
var NavigationMenuContent = /*#__PURE__*/ React.forwardRef(function NavigationMenuContent(componentProps, forwardedRef) {
	const { render, className, style, keepMounted = false, ...elementProps } = componentProps;
	const { mounted: popupMounted, viewportElement, value, activationDirection, currentContentRef, viewportTargetElement } = useNavigationMenuRootContext();
	const { value: itemValue } = useNavigationMenuItemContext();
	const nodeId = useNavigationMenuTreeContext();
	const open = popupMounted && value === itemValue;
	const ref = React.useRef(null);
	const [hasMountedInPortal, setHasMountedInPortal] = React.useState(false);
	const [focusInside, setFocusInside] = React.useState(false);
	const { mounted, setMounted, transitionStatus } = useTransitionStatus(open);
	if (mounted && !popupMounted) setMounted(false);
	useOpenChangeComplete({
		ref,
		open,
		onComplete() {
			if (!open) setMounted(false);
		}
	});
	useIsoLayoutEffect(() => {
		if (open && ref.current) currentContentRef.current = ref.current;
	}, [open, currentContentRef]);
	const state = {
		open,
		transitionStatus,
		activationDirection
	};
	const handleCurrentContentRef = useStableCallback((node) => {
		if (node && open) currentContentRef.current = node;
	});
	const commonProps = {
		onFocus(event) {
			if (getTarget(event.nativeEvent)?.hasAttribute("data-base-ui-focus-guard")) return;
			setFocusInside(true);
		},
		onBlur(event) {
			if (!contains(event.currentTarget, event.relatedTarget)) setFocusInside(false);
		}
	};
	const defaultProps = !open && mounted ? {
		style: {
			position: "absolute",
			top: 0,
			left: 0
		},
		inert: inertValue(!focusInside),
		...commonProps
	} : commonProps;
	const portalContainer = viewportTargetElement || viewportElement;
	const hidden = keepMounted && !mounted;
	const shouldRenderInline = keepMounted && !portalContainer && !hasMountedInPortal;
	if (keepMounted && portalContainer && !hasMountedInPortal) setHasMountedInPortal(true);
	if (shouldRenderInline) return /*#__PURE__*/ jsx(CompositeRoot, {
		render,
		className,
		style,
		state,
		refs: [forwardedRef],
		props: [
			defaultProps,
			{ hidden: true },
			elementProps
		],
		stateAttributesMapping: stateAttributesMapping$2
	});
	if (!portalContainer || !mounted && !keepMounted) return null;
	return /*#__PURE__*/ ReactDOM$1.createPortal(/*#__PURE__*/ jsx(FloatingNode, {
		id: nodeId,
		children: /*#__PURE__*/ jsx(CompositeRoot, {
			render,
			className,
			style,
			state,
			refs: [
				forwardedRef,
				ref,
				handleCurrentContentRef
			],
			props: [
				defaultProps,
				hidden ? { hidden: true } : EMPTY_OBJECT,
				elementProps
			],
			stateAttributesMapping: stateAttributesMapping$2
		})
	}), portalContainer);
});
if (process.env.NODE_ENV !== "production") NavigationMenuContent.displayName = "NavigationMenuContent";
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/navigation-menu/utils/isOutsideMenuEvent.mjs
function isOutsideMenuEvent({ currentTarget, relatedTarget }, params) {
	const { popupElement, rootRef, tree, nodeId } = params;
	const nodeChildrenContains = tree ? getNodeChildren(tree.nodesRef.current, nodeId).some((node) => contains(node.context?.elements.floating, relatedTarget)) : [];
	if (!popupElement) return !contains(rootRef.current, relatedTarget) && !nodeChildrenContains;
	return !contains(popupElement, currentTarget) && !contains(popupElement, relatedTarget) && !contains(rootRef.current, relatedTarget) && !nodeChildrenContains && !(contains(popupElement, relatedTarget) && relatedTarget?.hasAttribute("data-base-ui-focus-guard"));
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/internals/composite/list/useCompositeListItem.mjs
var IndexGuessBehavior = /*#__PURE__*/ function(IndexGuessBehavior) {
	IndexGuessBehavior[IndexGuessBehavior["None"] = 0] = "None";
	IndexGuessBehavior[IndexGuessBehavior["GuessFromOrder"] = 1] = "GuessFromOrder";
	return IndexGuessBehavior;
}({});
/**
* Used to register a list item and its index (DOM position) in the `CompositeList`.
*/
function useCompositeListItem(params = {}) {
	const { label, metadata, textRef, indexGuessBehavior, index: externalIndex } = params;
	const { register, unregister, subscribeMapChange, elementsRef, labelsRef, nextIndexRef } = useCompositeListContext();
	const indexRef = React.useRef(-1);
	const [index, setIndex] = React.useState(externalIndex ?? (indexGuessBehavior === IndexGuessBehavior.GuessFromOrder ? () => {
		if (indexRef.current === -1) {
			const newIndex = nextIndexRef.current;
			nextIndexRef.current += 1;
			indexRef.current = newIndex;
		}
		return indexRef.current;
	} : -1));
	const componentRef = React.useRef(null);
	const ref = React.useCallback((node) => {
		componentRef.current = node;
		if (index !== -1 && node !== null) {
			elementsRef.current[index] = node;
			if (labelsRef) {
				const isLabelDefined = label !== void 0;
				labelsRef.current[index] = isLabelDefined ? label : textRef?.current?.textContent ?? node.textContent;
			}
		}
	}, [
		index,
		elementsRef,
		labelsRef,
		label,
		textRef
	]);
	useIsoLayoutEffect(() => {
		if (externalIndex != null) return;
		const node = componentRef.current;
		if (node) {
			register(node, metadata);
			return () => {
				unregister(node);
			};
		}
	}, [
		externalIndex,
		register,
		unregister,
		metadata
	]);
	useIsoLayoutEffect(() => {
		if (externalIndex != null) return;
		return subscribeMapChange((map) => {
			const i = componentRef.current ? map.get(componentRef.current)?.index : null;
			if (i != null) setIndex(i);
		});
	}, [
		externalIndex,
		subscribeMapChange,
		setIndex
	]);
	return {
		ref,
		index
	};
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/internals/composite/item/useCompositeItem.mjs
function useCompositeItem(params = {}) {
	const { highlightItemOnHover, highlightedIndex, onHighlightedIndexChange } = useCompositeRootContext();
	const { ref, index } = useCompositeListItem(params);
	const isHighlighted = highlightedIndex === index;
	const itemRef = React.useRef(null);
	const mergedRef = useMergedRefs(ref, itemRef);
	return {
		compositeProps: {
			tabIndex: isHighlighted ? 0 : -1,
			onFocus() {
				onHighlightedIndexChange(index);
			},
			onMouseMove() {
				const item = itemRef.current;
				if (!highlightItemOnHover || !item) return;
				const disabled = item.hasAttribute("disabled") || item.ariaDisabled === "true";
				if (!isHighlighted && !disabled) item.focus();
			}
		},
		compositeRef: mergedRef,
		index
	};
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/internals/composite/item/CompositeItem.mjs
/**
* @internal
*/
function CompositeItem(componentProps) {
	const { render, className, style, state = EMPTY_OBJECT, props = EMPTY_ARRAY$1, refs = EMPTY_ARRAY$1, metadata, stateAttributesMapping, tag = "div", ...elementProps } = componentProps;
	const { compositeProps, compositeRef } = useCompositeItem({ metadata });
	return useRenderElement(tag, componentProps, {
		state,
		ref: [...refs, compositeRef],
		props: [
			compositeProps,
			...props,
			elementProps
		],
		stateAttributesMapping
	});
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/navigation-menu/trigger/NavigationMenuTrigger.mjs
var DEFAULT_SIZE$1 = {
	width: 0,
	height: 0
};
/**
* Opens the navigation menu popup when hovered or clicked, revealing the
* associated content.
* Renders a `<button>` element.
*
* Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
*/
var NavigationMenuTrigger = /*#__PURE__*/ React.forwardRef(function NavigationMenuTrigger(componentProps, forwardedRef) {
	const { render, className, style, nativeButton = true, disabled, ...elementProps } = componentProps;
	const { value, setValue, mounted, open, positionerElement, setActivationDirection, setFloatingRootContext, popupElement, viewportElement, transitionStatus, rootRef, beforeOutsideRef, afterOutsideRef, afterInsideRef, beforeInsideRef, prevTriggerElementRef, popupAutoSizeResetRef, currentContentRef, delay, closeDelay, orientation, setViewportInert, nested } = useNavigationMenuRootContext();
	const { value: itemValue } = useNavigationMenuItemContext();
	const nodeId = useNavigationMenuTreeContext();
	const tree = useFloatingTree();
	const dismissProps = useNavigationMenuDismissContext();
	const direction = useDirection();
	const stickIfOpenTimeout = useTimeout();
	const focusFrame = useAnimationFrame();
	const mutationFrame = useAnimationFrame();
	const resizeFrame = useAnimationFrame();
	const sizeFrame = useAnimationFrame();
	const [triggerElement, setTriggerElement] = React.useState(null);
	const [stickIfOpen, setStickIfOpen] = React.useState(true);
	const [pointerType, setPointerType] = React.useState("");
	const triggerElementRef = React.useRef(null);
	const allowFocusRef = React.useRef(false);
	const prevSizeRef = React.useRef(DEFAULT_SIZE$1);
	const skipAutoSizeSyncRef = React.useRef(false);
	const isActiveItem = open && value === itemValue;
	const isActiveItemRef = useValueAsRef(isActiveItem);
	const interactionsEnabled = (positionerElement != null || value == null) && !disabled;
	const hoverFloatingElement = positionerElement || viewportElement;
	const hoverInteractionsEnabled = (hoverFloatingElement != null || value == null) && !disabled;
	const runOnceAnimationsFinish = useAnimationsFinished(popupElement, false, false);
	const handleTriggerElement = React.useCallback((element) => {
		triggerElementRef.current = element;
		setTriggerElement(element);
	}, []);
	const cancelAutoSizeReset = useStableCallback((force = false) => {
		if (!force && popupAutoSizeResetRef.current.owner !== itemValue) return;
		popupAutoSizeResetRef.current.abortController?.abort();
		popupAutoSizeResetRef.current.abortController = null;
		popupAutoSizeResetRef.current.owner = null;
	});
	useIsoLayoutEffect(() => {
		if (isActiveItem) return;
		mutationFrame.cancel();
		sizeFrame.cancel();
		cancelAutoSizeReset();
	}, [
		isActiveItem,
		mutationFrame,
		sizeFrame,
		cancelAutoSizeReset
	]);
	function setAutoSizes() {
		if (!popupElement) return;
		popupElement.style.setProperty(NavigationMenuPopupCssVars.popupWidth, "auto");
		popupElement.style.setProperty(NavigationMenuPopupCssVars.popupHeight, "auto");
	}
	function clearFixedSizes() {
		if (!popupElement || !positionerElement) return;
		popupElement.style.removeProperty(NavigationMenuPopupCssVars.popupWidth);
		popupElement.style.removeProperty(NavigationMenuPopupCssVars.popupHeight);
		positionerElement.style.removeProperty(NavigationMenuPositionerCssVars.positionerWidth);
		positionerElement.style.removeProperty(NavigationMenuPositionerCssVars.positionerHeight);
	}
	function scheduleAutoSizeReset() {
		cancelAutoSizeReset(true);
		const abortController = new AbortController();
		popupAutoSizeResetRef.current.abortController = abortController;
		popupAutoSizeResetRef.current.owner = itemValue;
		runOnceAnimationsFinish(() => {
			if (popupAutoSizeResetRef.current.abortController !== abortController || popupAutoSizeResetRef.current.owner !== itemValue) return;
			popupAutoSizeResetRef.current.abortController = null;
			popupAutoSizeResetRef.current.owner = null;
			setAutoSizes();
		}, abortController.signal);
	}
	const handleValueChange = useStableCallback((currentWidth, currentHeight, options = {}) => {
		if (!popupElement || !positionerElement) return;
		cancelAutoSizeReset(true);
		const { syncPositioner = false } = options;
		clearFixedSizes();
		const { width, height } = getCssDimensions(popupElement);
		const measuredWidth = width || prevSizeRef.current.width;
		const measuredHeight = height || prevSizeRef.current.height;
		if (currentHeight === 0 || currentWidth === 0) {
			currentWidth = measuredWidth;
			currentHeight = measuredHeight;
		}
		popupElement.style.setProperty(NavigationMenuPopupCssVars.popupWidth, `${currentWidth}px`);
		popupElement.style.setProperty(NavigationMenuPopupCssVars.popupHeight, `${currentHeight}px`);
		positionerElement.style.setProperty(NavigationMenuPositionerCssVars.positionerWidth, `${syncPositioner ? currentWidth : measuredWidth}px`);
		positionerElement.style.setProperty(NavigationMenuPositionerCssVars.positionerHeight, `${syncPositioner ? currentHeight : measuredHeight}px`);
		sizeFrame.request(() => {
			if (!isActiveItemRef.current) return;
			popupElement.style.setProperty(NavigationMenuPopupCssVars.popupWidth, `${measuredWidth}px`);
			popupElement.style.setProperty(NavigationMenuPopupCssVars.popupHeight, `${measuredHeight}px`);
			if (syncPositioner) {
				positionerElement.style.setProperty(NavigationMenuPositionerCssVars.positionerWidth, `${measuredWidth}px`);
				positionerElement.style.setProperty(NavigationMenuPositionerCssVars.positionerHeight, `${measuredHeight}px`);
			}
			scheduleAutoSizeReset();
		});
	});
	const handleInterruptedMutationResize = useStableCallback((currentWidth, currentHeight) => {
		if (!popupElement || !positionerElement) return;
		sizeFrame.cancel();
		mutationFrame.cancel();
		cancelAutoSizeReset(true);
		if (currentWidth === 0 || currentHeight === 0) return;
		setSharedFixedSize(popupElement, positionerElement, currentWidth, currentHeight);
		mutationFrame.request(() => {
			mutationFrame.request(() => {
				clearFixedSizes();
				const { width, height } = getCssDimensions(popupElement);
				const measuredWidth = width || currentWidth || prevSizeRef.current.width;
				const measuredHeight = height || currentHeight || prevSizeRef.current.height;
				setSharedFixedSize(popupElement, positionerElement, currentWidth, currentHeight);
				sizeFrame.request(() => {
					if (!isActiveItemRef.current) return;
					setSharedFixedSize(popupElement, positionerElement, measuredWidth, measuredHeight);
					scheduleAutoSizeReset();
				});
			});
		});
	});
	const syncCurrentSize = useStableCallback(() => {
		if (!popupElement || !positionerElement) return;
		sizeFrame.cancel();
		cancelAutoSizeReset(true);
		clearFixedSizes();
		const { width, height } = getCssDimensions(popupElement);
		if (width === 0 || height === 0) return;
		prevSizeRef.current = {
			width,
			height
		};
		setAutoSizes();
		positionerElement.style.setProperty(NavigationMenuPositionerCssVars.positionerWidth, `${width}px`);
		positionerElement.style.setProperty(NavigationMenuPositionerCssVars.positionerHeight, `${height}px`);
	});
	const getMutationBaseline = useStableCallback(() => {
		if (!popupElement) return {
			size: prevSizeRef.current,
			syncPositioner: false
		};
		const popupWidth = popupElement.style.getPropertyValue(NavigationMenuPopupCssVars.popupWidth);
		const popupHeight = popupElement.style.getPropertyValue(NavigationMenuPopupCssVars.popupHeight);
		if (!(popupWidth !== "" && popupWidth !== "auto" && popupHeight !== "" && popupHeight !== "auto")) return {
			size: prevSizeRef.current,
			syncPositioner: false
		};
		return {
			size: {
				width: popupElement.offsetWidth || prevSizeRef.current.width,
				height: popupElement.offsetHeight || prevSizeRef.current.height
			},
			syncPositioner: true
		};
	});
	React.useEffect(() => {
		if (!open) {
			stickIfOpenTimeout.clear();
			mutationFrame.cancel();
			resizeFrame.cancel();
			sizeFrame.cancel();
			cancelAutoSizeReset(true);
			skipAutoSizeSyncRef.current = false;
			setPointerType("");
		}
	}, [
		stickIfOpenTimeout,
		open,
		mutationFrame,
		resizeFrame,
		sizeFrame,
		cancelAutoSizeReset
	]);
	React.useEffect(() => {
		if (!mounted) prevSizeRef.current = DEFAULT_SIZE$1;
	}, [mounted]);
	useIsoLayoutEffect(() => {
		if (!popupElement || typeof ResizeObserver !== "function") return;
		const resizeObserver = new ResizeObserver(() => {
			prevSizeRef.current = {
				width: popupElement.offsetWidth,
				height: popupElement.offsetHeight
			};
		});
		resizeObserver.observe(popupElement);
		return () => {
			resizeObserver.disconnect();
		};
	}, [popupElement]);
	React.useEffect(() => {
		if (!open || !isActiveItem || !popupElement || !positionerElement) return;
		const win = getWindow(positionerElement);
		function handleResize() {
			resizeFrame.cancel();
			resizeFrame.request(syncCurrentSize);
		}
		const unsubscribe = addEventListener(win, "resize", handleResize);
		return () => {
			resizeFrame.cancel();
			unsubscribe();
		};
	}, [
		open,
		isActiveItem,
		popupElement,
		positionerElement,
		resizeFrame,
		syncCurrentSize
	]);
	React.useEffect(() => {
		const observedElement = currentContentRef.current;
		if (!observedElement || !popupElement || !isActiveItem || typeof MutationObserver !== "function") return;
		const mutationObserver = new MutationObserver(() => {
			if (transitionStatus === "starting" || popupElement.hasAttribute(TransitionStatusDataAttributes.startingStyle)) {
				syncCurrentSize();
				return;
			}
			const { size, syncPositioner } = getMutationBaseline();
			if (syncPositioner) {
				handleInterruptedMutationResize(size.width, size.height);
				return;
			}
			handleValueChange(size.width, size.height);
		});
		mutationObserver.observe(observedElement, {
			childList: true,
			subtree: true,
			characterData: true,
			attributes: true,
			attributeFilter: ["hidden"]
		});
		return () => {
			mutationObserver.disconnect();
		};
	}, [
		currentContentRef,
		popupElement,
		isActiveItem,
		transitionStatus,
		getMutationBaseline,
		handleInterruptedMutationResize,
		handleValueChange,
		syncCurrentSize
	]);
	React.useEffect(() => {
		if (isActiveItem && open && popupElement && allowFocusRef.current) {
			allowFocusRef.current = false;
			focusFrame.request(() => {
				beforeOutsideRef.current?.focus();
			});
		}
		return () => {
			focusFrame.cancel();
		};
	}, [
		beforeOutsideRef,
		focusFrame,
		isActiveItem,
		open,
		popupElement
	]);
	useIsoLayoutEffect(() => {
		if (isActiveItemRef.current && open && popupElement) {
			const hasNestedMenu = currentContentRef.current?.querySelector("[data-nested]") != null;
			if (transitionStatus === "starting" && hasNestedMenu) {
				sizeFrame.request(syncCurrentSize);
				return () => {
					sizeFrame.cancel();
				};
			}
			if (skipAutoSizeSyncRef.current) {
				skipAutoSizeSyncRef.current = false;
				return;
			}
			const { width, height } = getCssDimensions(popupElement);
			handleValueChange(width, height);
		}
	}, [
		currentContentRef,
		handleValueChange,
		isActiveItemRef,
		open,
		popupElement,
		sizeFrame,
		syncCurrentSize,
		transitionStatus
	]);
	function handleOpenChange(nextOpen, eventDetails) {
		const isHover = eventDetails.reason === triggerHover;
		if (!interactionsEnabled) return;
		if (pointerType === "touch" && isHover) return;
		if (!nextOpen && value !== itemValue) return;
		function changeState() {
			if (isHover) {
				setStickIfOpen(true);
				stickIfOpenTimeout.clear();
				stickIfOpenTimeout.start(500, () => {
					setStickIfOpen(false);
				});
			}
			if (nextOpen) setValue(itemValue, eventDetails);
			else {
				setValue(null, eventDetails);
				setPointerType("");
			}
		}
		if (isHover) ReactDOM$1.flushSync(changeState);
		else changeState();
	}
	const context = useFloatingRootContext({
		open,
		onOpenChange: handleOpenChange,
		elements: {
			reference: triggerElement,
			floating: hoverFloatingElement
		}
	});
	const hoverInteractionState = useHoverInteractionSharedState(context);
	const shouldBlockSafePolygonPointerEvents = pointerType !== "touch";
	React.useEffect(() => {
		if (!open) {
			context.context.dataRef.current.openEvent = void 0;
			hoverInteractionState.pointerType = void 0;
			hoverInteractionState.interactedInside = false;
			hoverInteractionState.restTimeoutPending = false;
			hoverInteractionState.openChangeTimeout.clear();
			hoverInteractionState.restTimeout.clear();
			clearSafePolygonPointerEventsMutation(hoverInteractionState);
		}
	}, [
		context,
		hoverInteractionState,
		open
	]);
	const getInlineHandleCloseContext = useStableCallback(() => {
		if (!nested || positionerElement || !triggerElementRef.current || !hoverFloatingElement) return null;
		return getHandleCloseContext(triggerElementRef.current, hoverFloatingElement, nodeId);
	});
	function getScope() {
		if (!nested || !positionerElement) return triggerElementRef.current?.closest("ul") ?? null;
		return null;
	}
	const hoverProps = useHoverReferenceInteraction(context, {
		enabled: hoverInteractionsEnabled,
		move: false,
		handleClose: safePolygon({
			blockPointerEvents: shouldBlockSafePolygonPointerEvents,
			getScope
		}),
		restMs: mounted && positionerElement ? 0 : delay,
		delay: { close: closeDelay },
		triggerElementRef,
		getHandleCloseContext: getInlineHandleCloseContext
	});
	const hover = React.useMemo(() => hoverProps ? { reference: hoverProps } : void 0, [hoverProps]);
	const click = useClick(context, {
		enabled: interactionsEnabled,
		stickIfOpen,
		toggle: isActiveItem
	});
	const referenceProps = React.useMemo(() => mergeProps(click.reference, hover?.reference), [click.reference, hover]);
	useIsoLayoutEffect(() => {
		if (isActiveItem) {
			setFloatingRootContext(context);
			prevTriggerElementRef.current = triggerElement;
		}
	}, [
		isActiveItem,
		context,
		setFloatingRootContext,
		prevTriggerElementRef,
		triggerElement
	]);
	function handleActivation(event) {
		ReactDOM$1.flushSync(() => {
			const currentTarget = isHTMLElement(event.currentTarget) ? event.currentTarget : null;
			const prevTriggerRect = prevTriggerElementRef.current?.getBoundingClientRect();
			if (mounted && prevTriggerRect && triggerElement) {
				const nextTriggerRect = triggerElement.getBoundingClientRect();
				const isMovingRight = nextTriggerRect.left > prevTriggerRect.left;
				const isMovingDown = nextTriggerRect.top > prevTriggerRect.top;
				if (orientation === "horizontal" && nextTriggerRect.left !== prevTriggerRect.left) setActivationDirection(isMovingRight ? "right" : "left");
				else if (orientation === "vertical" && nextTriggerRect.top !== prevTriggerRect.top) setActivationDirection(isMovingDown ? "down" : "up");
			}
			if (event.type !== "click" && value != null) context.context.dataRef.current.openEvent = void 0;
			if (pointerType === "touch" && event.type !== "click") return;
			if (value != null && event.type !== "keydown") setValue(itemValue, createChangeEventDetails(event.type === "mouseenter" ? triggerHover : triggerPress, event.nativeEvent));
			if (event.type === "mouseenter" && shouldBlockSafePolygonPointerEvents && (!nested || !positionerElement) && hoverFloatingElement && currentTarget) {
				const applyPointerEventsMutation = () => {
					const scopeElement = getScope() ?? currentTarget.ownerDocument.body;
					applySafePolygonPointerEventsMutation(hoverInteractionState, {
						scopeElement,
						referenceElement: currentTarget,
						floatingElement: hoverFloatingElement
					});
				};
				if (value != null && value !== itemValue) queueMicrotask(applyPointerEventsMutation);
				else applyPointerEventsMutation();
			}
		});
	}
	const handleOpenEvent = useStableCallback((event) => {
		if (disabled) return;
		if (!popupElement || !positionerElement) {
			handleActivation(event);
			return;
		}
		const { width, height } = getCssDimensions(popupElement);
		const shouldSkipAutoSizeSync = value != null && value !== itemValue && (event.type === "click" || pointerType !== "touch");
		handleActivation(event);
		if (shouldSkipAutoSizeSync) skipAutoSizeSyncRef.current = true;
		handleValueChange(width, height);
	});
	const state = { open: isActiveItem };
	function handleSetPointerType(event) {
		setPointerType(event.pointerType);
	}
	function handleTriggerPointerDown(event) {
		handleSetPointerType(event);
		clearSafePolygonPointerEventsMutation(hoverInteractionState);
	}
	const defaultProps = {
		tabIndex: 0,
		onMouseEnter: handleOpenEvent,
		onClick: handleOpenEvent,
		onPointerEnter: handleSetPointerType,
		onPointerDown: handleTriggerPointerDown,
		"aria-expanded": isActiveItem,
		"aria-controls": isActiveItem ? popupElement?.id : void 0,
		[NAVIGATION_MENU_TRIGGER_IDENTIFIER]: "",
		onFocus() {
			if (!isActiveItem) return;
			setViewportInert(false);
		},
		onMouseMove() {
			allowFocusRef.current = false;
		},
		onKeyDown(event) {
			allowFocusRef.current = true;
			if (nested) return;
			const verticalOpenKey = direction === "rtl" ? "ArrowLeft" : "ArrowRight";
			const openHorizontal = orientation === "horizontal" && event.key === "ArrowDown";
			const openVertical = orientation === "vertical" && event.key === verticalOpenKey;
			if (openHorizontal || openVertical) {
				setValue(itemValue, createChangeEventDetails(listNavigation, event.nativeEvent));
				handleOpenEvent(event);
				stopEvent(event);
			}
		},
		onBlur(event) {
			if (positionerElement && popupElement && isOutsideMenuEvent({
				currentTarget: event.currentTarget,
				relatedTarget: event.relatedTarget
			}, {
				popupElement,
				rootRef,
				tree,
				nodeId
			})) setValue(null, createChangeEventDetails(focusOut, event.nativeEvent));
		}
	};
	const { getButtonProps, buttonRef } = useButton({
		disabled,
		focusableWhenDisabled: true,
		native: nativeButton
	});
	const referenceElement = hoverFloatingElement;
	return /*#__PURE__*/ jsxs(React.Fragment, { children: [/*#__PURE__*/ jsx(CompositeItem, {
		tag: "button",
		render,
		className,
		style,
		state,
		stateAttributesMapping: pressableTriggerOpenStateMapping,
		refs: [
			forwardedRef,
			handleTriggerElement,
			buttonRef
		],
		props: [
			referenceProps,
			dismissProps?.reference || EMPTY_ARRAY$1,
			defaultProps,
			elementProps,
			getButtonProps
		]
	}), isActiveItem && /*#__PURE__*/ jsxs(React.Fragment, { children: [
		/*#__PURE__*/ jsx(FocusGuard, {
			ref: beforeOutsideRef,
			onFocus: (event) => {
				if (referenceElement && isOutsideEvent(event, referenceElement)) beforeInsideRef.current?.focus();
				else getPreviousTabbable(triggerElement)?.focus();
			}
		}),
		/*#__PURE__*/ jsx("span", {
			"aria-owns": viewportElement?.id,
			style: ownerVisuallyHidden
		}),
		/*#__PURE__*/ jsx(FocusGuard, {
			ref: afterOutsideRef,
			onFocus: (event) => {
				if (referenceElement && isOutsideEvent(event, referenceElement)) {
					ReactDOM$1.flushSync(() => {
						setViewportInert(false);
					});
					(afterInsideRef.current || triggerElement)?.focus();
				} else {
					let nextTabbable = getNextTabbable(triggerElement);
					if (nested && !positionerElement && referenceElement && nextTabbable && contains(referenceElement, nextTabbable)) nextTabbable = getTabbableAfterElement(afterInsideRef.current);
					nextTabbable?.focus();
					if ((!nested || positionerElement) && !contains(rootRef.current, nextTabbable)) setValue(null, createChangeEventDetails("focus-out", event.nativeEvent));
				}
			}
		})
	] })] });
});
if (process.env.NODE_ENV !== "production") NavigationMenuTrigger.displayName = "NavigationMenuTrigger";
function getPlacementFromElements(domReferenceElement, floatingElement) {
	const referenceRect = domReferenceElement.getBoundingClientRect();
	const floatingRect = floatingElement.getBoundingClientRect();
	const referenceCenterX = referenceRect.left + referenceRect.width / 2;
	const referenceCenterY = referenceRect.top + referenceRect.height / 2;
	const floatingCenterX = floatingRect.left + floatingRect.width / 2;
	const floatingCenterY = floatingRect.top + floatingRect.height / 2;
	const deltaX = floatingCenterX - referenceCenterX;
	const deltaY = floatingCenterY - referenceCenterY;
	if (Math.abs(deltaX) >= Math.abs(deltaY)) return deltaX >= 0 ? "right" : "left";
	return deltaY >= 0 ? "bottom" : "top";
}
function getHandleCloseContext(domReferenceElement, floatingElement, nodeId) {
	return {
		placement: getPlacementFromElements(domReferenceElement, floatingElement),
		elements: {
			domReference: domReferenceElement,
			floating: floatingElement
		},
		nodeId
	};
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/navigation-menu/portal/NavigationMenuPortalContext.mjs
var NavigationMenuPortalContext = /*#__PURE__*/ React.createContext(void 0);
if (process.env.NODE_ENV !== "production") NavigationMenuPortalContext.displayName = "NavigationMenuPortalContext";
function useNavigationMenuPortalContext() {
	const value = React.useContext(NavigationMenuPortalContext);
	if (value === void 0) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: <NavigationMenu.Portal> is missing." : formatErrorMessage(40));
	return value;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/navigation-menu/portal/NavigationMenuPortal.mjs
/**
* A portal element that moves the popup to a different part of the DOM.
* By default, the portal element is appended to `<body>`.
* Renders a `<div>` element.
*
* Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
*/
var NavigationMenuPortal = /*#__PURE__*/ React.forwardRef(function NavigationMenuPortal(props, forwardedRef) {
	const { keepMounted = false, ...portalProps } = props;
	const { mounted } = useNavigationMenuRootContext();
	if (!(mounted || keepMounted)) return null;
	return /*#__PURE__*/ jsx(NavigationMenuPortalContext.Provider, {
		value: keepMounted,
		children: /*#__PURE__*/ jsx(FloatingPortal, {
			ref: forwardedRef,
			...portalProps
		})
	});
});
if (process.env.NODE_ENV !== "production") NavigationMenuPortal.displayName = "NavigationMenuPortal";
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/navigation-menu/positioner/NavigationMenuPositionerContext.mjs
var NavigationMenuPositionerContext = /*#__PURE__*/ React.createContext(void 0);
if (process.env.NODE_ENV !== "production") NavigationMenuPositionerContext.displayName = "NavigationMenuPositionerContext";
function useNavigationMenuPositionerContext(optional = false) {
	const context = React.useContext(NavigationMenuPositionerContext);
	if (!context && !optional) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: NavigationMenuPositionerContext is missing. NavigationMenuPositioner parts must be placed within <NavigationMenu.Positioner>." : formatErrorMessage(42));
	return context;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/navigation-menu/positioner/NavigationMenuPositioner.mjs
var EMPTY_ROOT_CONTEXT$1 = getEmptyRootContext();
/**
* Positions the navigation menu against the currently active trigger.
* Renders a `<div>` element.
*
* Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
*/
var NavigationMenuPositioner = /*#__PURE__*/ React.forwardRef(function NavigationMenuPositioner(componentProps, forwardedRef) {
	const { open, mounted, positionerElement, setPositionerElement, floatingRootContext, nested, transitionStatus } = useNavigationMenuRootContext();
	const { className, render, anchor, positionMethod = "absolute", side = "bottom", align = "center", sideOffset = 0, alignOffset = 0, collisionBoundary = "clipping-ancestors", collisionPadding = 5, collisionAvoidance = nested ? POPUP_COLLISION_AVOIDANCE : DROPDOWN_COLLISION_AVOIDANCE, arrowPadding = 5, sticky = false, disableAnchorTracking = false, style, ...elementProps } = componentProps;
	const keepMounted = useNavigationMenuPortalContext();
	const nodeId = useNavigationMenuTreeContext();
	const initialInstantTimeout = useTimeout();
	const resizeTimeout = useTimeout();
	const [instant, setInstant] = React.useState(open);
	const needsInitialInstantResetRef = React.useRef(open);
	const positionerRef = React.useRef(null);
	const prevTriggerElementRef = React.useRef(null);
	React.useEffect(() => {
		if (!positionerElement) return;
		function onFocus(event) {
			if (positionerElement && isOutsideEvent(event)) (event.type === "focusin" ? enableFocusInside : disableFocusInside)(positionerElement);
		}
		return mergeCleanups(addEventListener(positionerElement, "focusin", onFocus, true), addEventListener(positionerElement, "focusout", onFocus, true));
	}, [positionerElement]);
	const domReference = (floatingRootContext || EMPTY_ROOT_CONTEXT$1).useState("domReferenceElement");
	const positioning = useAnchorPositioning({
		anchor: anchor ?? domReference ?? prevTriggerElementRef,
		positionMethod,
		mounted,
		side,
		sideOffset,
		align,
		alignOffset,
		arrowPadding,
		collisionBoundary,
		collisionPadding,
		sticky,
		disableAnchorTracking,
		keepMounted,
		floatingRootContext,
		collisionAvoidance,
		nodeId,
		adaptiveOrigin
	});
	const state = {
		open,
		side: positioning.side,
		align: positioning.align,
		anchorHidden: positioning.anchorHidden,
		instant
	};
	React.useEffect(() => {
		if (!open) return;
		if (needsInitialInstantResetRef.current) initialInstantTimeout.start(0, () => {
			needsInitialInstantResetRef.current = false;
			if (!resizeTimeout.isStarted()) setInstant(false);
		});
		function handleResize() {
			ReactDOM$1.flushSync(() => {
				setInstant(true);
			});
			resizeTimeout.start(100, () => {
				setInstant(false);
			});
		}
		const win = getWindow(positionerElement);
		return addEventListener(win, "resize", handleResize);
	}, [
		open,
		initialInstantTimeout,
		resizeTimeout,
		positionerElement
	]);
	const element = usePositioner(componentProps, state, {
		styles: positioning.positionerStyles,
		transitionStatus,
		props: elementProps,
		refs: [
			forwardedRef,
			setPositionerElement,
			positionerRef
		],
		hidden: !mounted,
		inert: !open
	});
	return /*#__PURE__*/ jsx(NavigationMenuPositionerContext.Provider, {
		value: positioning,
		children: element
	});
});
if (process.env.NODE_ENV !== "production") NavigationMenuPositioner.displayName = "NavigationMenuPositioner";
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/navigation-menu/viewport/NavigationMenuViewport.mjs
var EMPTY_ROOT_CONTEXT = getEmptyRootContext();
function Guards({ children }) {
	const { beforeInsideRef, beforeOutsideRef, afterInsideRef, afterOutsideRef, positionerElement, viewportElement, floatingRootContext } = useNavigationMenuRootContext();
	const hasPositioner = Boolean(useNavigationMenuPositionerContext(true));
	const referenceElement = positionerElement || viewportElement;
	if (!floatingRootContext && !hasPositioner) return children;
	return /*#__PURE__*/ jsxs(React.Fragment, { children: [
		/*#__PURE__*/ jsx(FocusGuard, {
			ref: beforeInsideRef,
			onFocus: (event) => {
				if (referenceElement && isOutsideEvent(event, referenceElement)) getNextTabbable(referenceElement)?.focus();
				else beforeOutsideRef.current?.focus();
			}
		}),
		children,
		/*#__PURE__*/ jsx(FocusGuard, {
			ref: afterInsideRef,
			onFocus: (event) => {
				if (referenceElement && isOutsideEvent(event, referenceElement)) getPreviousTabbable(referenceElement)?.focus();
				else afterOutsideRef.current?.focus();
			}
		})
	] });
}
/**
* The clipping viewport of the navigation menu's current content.
* Renders a `<div>` element.
*
* Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
*/
var NavigationMenuViewport = /*#__PURE__*/ React.forwardRef(function NavigationMenuViewport(componentProps, forwardedRef) {
	const { render, className, style, children, id: idProp, ...elementProps } = componentProps;
	const id = useId$1(idProp);
	const { setViewportElement, setViewportTargetElement, floatingRootContext, prevTriggerElementRef, viewportInert, setViewportInert } = useNavigationMenuRootContext();
	const positioning = useNavigationMenuPositionerContext(true);
	const hasPositioner = Boolean(positioning);
	const domReference = (floatingRootContext || EMPTY_ROOT_CONTEXT).useState("domReferenceElement");
	useIsoLayoutEffect(() => {
		if (domReference) prevTriggerElementRef.current = domReference;
	}, [domReference, prevTriggerElementRef]);
	const element = useRenderElement("div", componentProps, {
		ref: [forwardedRef, setViewportElement],
		props: [{
			id,
			onBlur(event) {
				const relatedTarget = event.relatedTarget;
				const currentTarget = event.currentTarget;
				if (relatedTarget && !contains(currentTarget, relatedTarget) && relatedTarget !== domReference) setViewportInert(true);
			},
			...!hasPositioner && viewportInert && { inert: inertValue(true) },
			children: hasPositioner ? children : /*#__PURE__*/ jsx(Guards, { children: /*#__PURE__*/ jsx("div", {
				ref: setViewportTargetElement,
				children
			}) })
		}, elementProps]
	});
	return hasPositioner ? /*#__PURE__*/ jsx(Guards, { children: element }) : element;
});
if (process.env.NODE_ENV !== "production") NavigationMenuViewport.displayName = "NavigationMenuViewport";
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/navigation-menu/popup/NavigationMenuPopup.mjs
var stateAttributesMapping$1 = {
	...popupStateMapping,
	...transitionStatusMapping
};
/**
* A container for the navigation menu contents.
* Renders a `<nav>` element.
*
* Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
*/
var NavigationMenuPopup = /*#__PURE__*/ React.forwardRef(function NavigationMenuPopup(componentProps, forwardedRef) {
	const { render, className, style, id: idProp, ...elementProps } = componentProps;
	const { open, transitionStatus, setPopupElement } = useNavigationMenuRootContext();
	const positioning = useNavigationMenuPositionerContext();
	const direction = useDirection();
	const id = useBaseUiId(idProp);
	const state = {
		open,
		transitionStatus,
		side: positioning.side,
		align: positioning.align,
		anchorHidden: positioning.anchorHidden
	};
	let isPhysicalLeft = positioning.side === "left";
	if (direction === "rtl") isPhysicalLeft = isPhysicalLeft || positioning.side === "inline-end";
	else isPhysicalLeft = isPhysicalLeft || positioning.side === "inline-start";
	const isOriginSide = positioning.side === "top" || isPhysicalLeft;
	return useRenderElement("nav", componentProps, {
		state,
		ref: [forwardedRef, setPopupElement],
		props: [
			{
				id,
				tabIndex: -1,
				style: isOriginSide ? {
					position: "absolute",
					[positioning.side === "top" ? "bottom" : "top"]: "0",
					[isPhysicalLeft ? "right" : "left"]: "0"
				} : {}
			},
			getDisabledMountTransitionStyles(transitionStatus),
			elementProps
		],
		stateAttributesMapping: stateAttributesMapping$1
	});
});
if (process.env.NODE_ENV !== "production") NavigationMenuPopup.displayName = "NavigationMenuPopup";
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/navigation-menu/link/NavigationMenuLink.mjs
/**
* A link in the navigation menu that can be used to navigate to a different page or section.
* Renders an `<a>` element.
*
* Documentation: [Base UI Navigation Menu](https://base-ui.com/react/components/navigation-menu)
*/
var NavigationMenuLink = /*#__PURE__*/ React.forwardRef(function NavigationMenuLink(componentProps, forwardedRef) {
	const { className, render, active = false, closeOnClick = false, style, ...elementProps } = componentProps;
	const { setValue, popupElement, positionerElement, rootRef } = useNavigationMenuRootContext();
	const nodeId = useNavigationMenuTreeContext();
	const tree = useFloatingTree();
	return /*#__PURE__*/ jsx(CompositeItem, {
		tag: "a",
		render,
		className,
		style,
		state: { active },
		refs: [forwardedRef],
		props: [{
			"aria-current": active ? "page" : void 0,
			tabIndex: void 0,
			onClick(event) {
				if (closeOnClick) setValue(null, createChangeEventDetails(linkPress, event.nativeEvent));
			},
			onBlur(event) {
				if (positionerElement && popupElement && isOutsideMenuEvent({
					currentTarget: event.currentTarget,
					relatedTarget: event.relatedTarget
				}, {
					popupElement,
					rootRef,
					tree,
					nodeId
				})) setValue(null, createChangeEventDetails(focusOut, event.nativeEvent));
			}
		}, elementProps]
	});
});
if (process.env.NODE_ENV !== "production") NavigationMenuLink.displayName = "NavigationMenuLink";
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/layouts/home/slots/header.js
var navItemVariants = cva("[&_svg]:size-4", {
	variants: { variant: {
		main: "inline-flex items-center gap-1 p-2 text-fd-muted-foreground transition-colors hover:text-fd-accent-foreground data-[active=true]:text-fd-primary",
		button: buttonVariants$1({
			color: "secondary",
			className: "gap-1.5"
		}),
		icon: buttonVariants$1({
			color: "ghost",
			size: "icon"
		})
	} },
	defaultVariants: { variant: "main" }
});
var MobileNavigationMenuContext = createContext(null);
function Header$1(props) {
	const { navItems, menuItems, slots, props: { nav } } = useHomeLayout();
	const headerRef = useRef(null);
	const listRef = useRef(null);
	const [open, setOpen] = useState(false);
	const t = useTranslations({ note: "home layout header" });
	const transparentMode = nav?.transparentMode ?? "none";
	const isTop = useIsScrollTop({ enabled: transparentMode === "top" }) ?? true;
	const isNavTransparent = transparentMode === "top" ? isTop : transparentMode === "always";
	const onClick = useEffectEvent((e) => {
		const element = headerRef.current;
		if (!open || !element) return;
		if (element !== e.target && !element.contains(e.target)) setOpen(false);
	});
	useEffect(() => {
		window.addEventListener("click", onClick);
		return () => {
			window.removeEventListener("click", onClick);
		};
	}, []);
	const list = /* @__PURE__ */ jsxs(NavigationMenuList, {
		ref: listRef,
		className: "flex h-14 w-full mx-auto max-w-(--fd-layout-width) items-center px-4",
		children: [
			slots.navTitle && /* @__PURE__ */ jsx(slots.navTitle, { className: "inline-flex items-center gap-2.5 font-semibold" }),
			nav?.children,
			/* @__PURE__ */ jsx("ul", {
				className: "flex flex-row items-center gap-2 px-6 max-sm:hidden",
				children: navItems.filter((item) => !isSecondary(item)).map((item, i) => /* @__PURE__ */ jsx(NavigationMenuLinkItem, {
					item,
					className: "text-sm"
				}, i))
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-row items-center justify-end gap-1.5 flex-1 max-lg:hidden",
				children: [
					slots.searchTrigger && /* @__PURE__ */ jsx(slots.searchTrigger.full, {
						hideIfDisabled: true,
						className: "w-full rounded-full ps-2.5 max-w-[240px]"
					}),
					slots.themeSwitch && /* @__PURE__ */ jsx(slots.themeSwitch, {}),
					slots.languageSelect && /* @__PURE__ */ jsx(slots.languageSelect.root, { children: /* @__PURE__ */ jsx(Languages, { className: "size-5" }) }),
					/* @__PURE__ */ jsx("ul", {
						className: "flex flex-row gap-2 items-center empty:hidden",
						children: navItems.filter(isSecondary).map((item, i) => /* @__PURE__ */ jsx(NavigationMenuLinkItem, {
							className: cn$1(item.type === "icon" && "-mx-1 first:ms-0 last:me-0"),
							item
						}, i))
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-row items-center ms-auto -me-1.5 lg:hidden",
				children: [slots.searchTrigger && /* @__PURE__ */ jsx(slots.searchTrigger.sm, {
					hideIfDisabled: true,
					className: "p-2"
				}), /* @__PURE__ */ jsx(CollapsibleTrigger, {
					"aria-label": t("Toggle Menu", { note: "aria-label" }),
					className: cn$1(buttonVariants$1({
						size: "icon",
						color: "ghost"
					})),
					onPointerEnter: nav?.enableHoverToOpen ? () => {
						setOpen(true);
					} : void 0,
					children: /* @__PURE__ */ jsx(ChevronDown, { className: cn$1("transition-transform", open && "rotate-180") })
				})]
			})
		]
	});
	return /* @__PURE__ */ jsx(Collapsible, {
		open,
		onOpenChange: setOpen,
		render: /* @__PURE__ */ jsx("header", {
			id: "nd-nav",
			...props,
			ref: mergeRefs$1(headerRef, props.ref),
			className: cn$1("sticky h-14 top-0 z-40", props.className),
			children: /* @__PURE__ */ jsxs(NavigationMenuRoot, {
				className: (s) => cn$1("backdrop-blur-lg border-b transition-[box-shadow,background-color,border-radius]", open && "max-lg:shadow-lg max-lg:rounded-b-2xl", (open || !isNavTransparent || s.open) && "bg-fd-background/80"),
				children: [
					list,
					/* @__PURE__ */ jsx(CollapsibleContent, {
						className: "mx-auto max-w-(--fd-layout-width) lg:hidden",
						children: /* @__PURE__ */ jsx("div", {
							className: "flex flex-col pt-2 p-4 sm:flex-row sm:items-center sm:justify-end",
							children: /* @__PURE__ */ jsxs(MobileNavigationMenuContext, {
								value: useMemo(() => ({ setOpen }), []),
								children: [menuItems.filter((item) => !isSecondary(item)).map((item, i) => /* @__PURE__ */ jsx(MobileNavigationMenuLinkItem, {
									item,
									className: "sm:hidden"
								}, i)), /* @__PURE__ */ jsxs("div", {
									className: "-ms-1.5 flex flex-row items-center gap-2 max-sm:mt-2",
									children: [
										menuItems.filter(isSecondary).map((item, i) => /* @__PURE__ */ jsx(MobileNavigationMenuLinkItem, {
											item,
											className: cn$1(item.type === "icon" && "-mx-1 first:ms-0")
										}, i)),
										/* @__PURE__ */ jsx("div", {
											role: "separator",
											className: "flex-1"
										}),
										slots.languageSelect && /* @__PURE__ */ jsxs(slots.languageSelect.root, { children: [
											/* @__PURE__ */ jsx(Languages, { className: "size-5" }),
											slots.languageSelect.text && /* @__PURE__ */ jsx(slots.languageSelect.text, {}),
											/* @__PURE__ */ jsx(ChevronDown, { className: "size-3 text-fd-muted-foreground" })
										] }),
										slots.themeSwitch && /* @__PURE__ */ jsx(slots.themeSwitch, {})
									]
								})]
							})
						})
					}),
					/* @__PURE__ */ jsx(NavigationMenuPortal, { children: /* @__PURE__ */ jsx(NavigationMenuPositioner, {
						side: "bottom",
						anchor: listRef,
						collisionPadding: {
							top: 5,
							bottom: 5
						},
						className: "z-40 box-border h-(--positioner-height) w-(--anchor-width) max-w-(--available-width) duration-(--duration) ease-(--easing) before:absolute before:content-[''] data-instant:transition-none data-[side=bottom]:before:top-[-10px] data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0 data-[side=bottom]:before:h-2.5 data-[side=left]:before:top-0 data-[side=left]:before:right-[-10px] data-[side=left]:before:bottom-0 data-[side=left]:before:w-2.5 data-[side=right]:before:top-0 data-[side=right]:before:bottom-0 data-[side=right]:before:left-[-10px] data-[side=right]:before:w-2.5 data-[side=top]:before:right-0 data-[side=top]:before:bottom-[-10px] data-[side=top]:before:left-0 data-[side=top]:before:h-2.5",
						style: {
							["--duration"]: "0.35s",
							["--easing"]: "cubic-bezier(0.22, 1, 0.36, 1)"
						},
						children: /* @__PURE__ */ jsx(NavigationMenuPopup, {
							className: "relative border h-(--popup-height) w-full rounded-xl bg-fd-popover/80 text-fd-popover-foreground backdrop-blur-md shadow-lg transition-[opacity,width,height] duration-(--duration) ease-(--easing) data-ending-style:opacity-0 data-ending-style:duration-150 data-starting-style:opacity-0",
							children: /* @__PURE__ */ jsx(NavigationMenuViewport, { className: "relative size-full overflow-hidden" })
						})
					}) })
				]
			})
		})
	});
}
function isSecondary(item) {
	if ("secondary" in item && item.secondary != null) return item.secondary;
	return item.type === "icon";
}
function NavigationMenuLinkItem({ item, className, ...props }) {
	if (item.type === "custom") return item.children;
	if (item.type === "menu") {
		const children = item.items.map((child, j) => {
			if (child.type === "custom") return /* @__PURE__ */ jsx(Fragment$1, { children: child.children }, j);
			const { banner = child.icon ? /* @__PURE__ */ jsx("div", {
				className: "w-fit rounded-md border bg-fd-muted p-1 [&_svg]:size-4",
				children: child.icon
			}) : null, ...rest } = child.menu ?? {};
			return /* @__PURE__ */ jsx(NavigationMenuLink, { render: /* @__PURE__ */ jsx(Link$1, {
				href: child.url,
				external: child.external,
				...rest,
				className: cn$1("flex flex-col gap-2 rounded-lg border bg-fd-card p-3 transition-colors hover:bg-fd-accent/80 hover:text-fd-accent-foreground", rest.className),
				children: rest.children ?? /* @__PURE__ */ jsxs(Fragment, { children: [
					banner,
					/* @__PURE__ */ jsx("p", {
						className: "text-base font-medium",
						children: child.text
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-sm text-fd-muted-foreground empty:hidden",
						children: child.description
					})
				] })
			}) }, `${j}-${child.url}`);
		});
		return /* @__PURE__ */ jsxs(NavigationMenuItem, {
			className: cn$1("list-none", className),
			...props,
			children: [/* @__PURE__ */ jsx(NavigationMenuTrigger, {
				className: cn$1(navItemVariants(), "rounded-md"),
				children: item.url ? /* @__PURE__ */ jsx(Link$1, {
					href: item.url,
					external: item.external,
					children: item.text
				}) : item.text
			}), /* @__PURE__ */ jsx(NavigationMenuContent, {
				className: cn$1("h-full w-(--anchor-width) max-w-(--available-width) p-3", "transition-[opacity,transform,translate] duration-(--duration) ease-(--easing)", "data-starting-style:opacity-0 data-ending-style:opacity-0", "data-starting-style:data-[activation-direction=left]:-translate-x-1/2", "data-starting-style:data-[activation-direction=right]:translate-x-1/2", "data-ending-style:data-[activation-direction=left]:translate-x-1/2", "data-ending-style:data-[activation-direction=right]:-translate-x-1/2", "grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3"),
				children
			})]
		});
	}
	return /* @__PURE__ */ jsx(NavigationMenuItem, {
		className: cn$1("list-none", className),
		...props,
		children: /* @__PURE__ */ jsx(NavigationMenuLink, { render: /* @__PURE__ */ jsx(LinkItem, {
			item,
			"aria-label": item.type === "icon" ? item.label : void 0,
			className: cn$1(navItemVariants({ variant: item.type })),
			children: item.type === "icon" ? item.icon : item.text
		}) })
	});
}
function MobileNavigationMenuLinkItem({ item, ...props }) {
	const { setOpen } = use(MobileNavigationMenuContext);
	if (item.type === "custom") return /* @__PURE__ */ jsx("div", {
		className: cn$1("grid", props.className),
		children: item.children
	});
	if (item.type === "menu") return /* @__PURE__ */ jsxs("div", {
		className: cn$1("mb-4 flex flex-col", props.className),
		children: [/* @__PURE__ */ jsx("p", {
			className: "mb-1 text-sm text-fd-muted-foreground",
			children: item.url ? /* @__PURE__ */ jsxs(Link$1, {
				href: item.url,
				external: item.external,
				onClick: () => setOpen(false),
				children: [item.icon, item.text]
			}) : /* @__PURE__ */ jsxs(Fragment, { children: [item.icon, item.text] })
		}), item.items.map((child, i) => /* @__PURE__ */ jsx(MobileNavigationMenuLinkItem, { item: child }, i))]
	});
	return /* @__PURE__ */ jsxs(LinkItem, {
		item,
		className: cn$1({
			main: "inline-flex items-center gap-2 py-1.5 transition-colors hover:text-fd-popover-foreground/50 data-[active=true]:font-medium data-[active=true]:text-fd-primary [&_svg]:size-4",
			icon: buttonVariants$1({
				size: "icon",
				color: "ghost"
			}),
			button: buttonVariants$1({
				color: "secondary",
				className: "gap-1.5 [&_svg]:size-4"
			})
		}[item.type ?? "main"], props.className),
		"aria-label": item.type === "icon" ? item.label : void 0,
		onClick: () => setOpen(false),
		children: [item.icon, item.type === "icon" ? void 0 : item.text]
	});
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/layouts/home/index.js
var LayoutContext$1 = createContext(null);
function useHomeLayout() {
	const context = use(LayoutContext$1);
	if (!context) throw new Error("Please use this component under <HomeLayout /> (`fumadocs-ui/layouts/home`).");
	return context;
}
var { useProvider: useProvider$1 } = baseSlots({ useProps() {
	return useHomeLayout().props;
} });
function HomeLayout(props) {
	const { nav: { enabled: navEnabled = true } = {}, slots: defaultSlots, children, i18n: _i18n, githubUrl: _githubUrl, links: _links, themeSwitch: _themeSwitch, searchToggle: _searchToggle, ...rest } = props;
	const { baseSlots, baseProps } = useProvider$1(props);
	const linkItems = useLinkItems(props);
	const slots = {
		...baseSlots,
		header: defaultSlots?.header ?? InlineHeader,
		container: defaultSlots?.container ?? Container$2
	};
	return /* @__PURE__ */ jsx(LayoutContext$1, {
		value: {
			props: baseProps,
			slots,
			...linkItems
		},
		children: /* @__PURE__ */ jsxs(slots.container, {
			...rest,
			children: [navEnabled && /* @__PURE__ */ jsx(slots.header, {}), children]
		})
	});
}
function InlineHeader(props) {
	const { nav } = useHomeLayout().props;
	if (nav?.component) return nav.component;
	return /* @__PURE__ */ jsx(Header$1, { ...props });
}
//#endregion
//#region node_modules/.pnpm/fumadocs-core@16.11.5_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.5_@type_72cb31c98dbdcd9237f5eec6550b9329/node_modules/fumadocs-core/dist/breadcrumb.js
function getBreadcrumbItemsFromPath(tree, path, options) {
	const { includePage = false, includeSeparator = false, includeRoot = false } = options;
	let items = [];
	for (let i = 0; i < path.length; i++) {
		const item = path[i];
		switch (item.type) {
			case "page":
				if (includePage) items.push({
					name: item.name,
					url: item.url
				});
				break;
			case "folder":
				if (item.root) {
					items = [];
					if (includeRoot) items.push({
						name: tree.name,
						url: typeof includeRoot === "object" ? includeRoot.url : item.index?.url
					});
					break;
				}
				if (i === path.length - 1 || item.index !== path[i + 1]) items.push({
					name: item.name,
					url: item.index?.url
				});
				break;
			case "separator": if (item.name && includeSeparator) items.push({ name: item.name });
		}
	}
	return items;
}
/**
* Search the path of a node in the tree by a specified url
*
* - When the page doesn't exist, return null
*
* @returns The path to the target node from root
* @internal Don't use this on your own
*/
function searchPath(nodes, url) {
	const normalizedUrl = normalizeUrl(url);
	return findPath(nodes, (node) => node.type === "page" && node.url === normalizedUrl);
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/contexts/tree.js
var TreeContext = createContext(null);
var PathContext = createContext([]);
function TreeContextProvider({ tree: rawTree, children }) {
	const nextIdRef = useRef(0);
	const pathname = usePathname();
	const tree = useMemo(() => rawTree, [rawTree.$id]);
	const path = useMemo(() => {
		return searchPath(tree.children, pathname) ?? (tree.fallback ? searchPath(tree.fallback.children, pathname) : null) ?? [];
	}, [tree, pathname]);
	const root = path.findLast((item) => item.type === "folder" && item.root) ?? tree;
	root.$id ??= String(nextIdRef.current++);
	return /* @__PURE__ */ jsx(TreeContext, {
		value: useMemo(() => ({
			root,
			full: tree
		}), [root, tree]),
		children: /* @__PURE__ */ jsx(PathContext, {
			value: path,
			children
		})
	});
}
function useTreePath() {
	return use(PathContext);
}
function useTreeContext() {
	const ctx = use(TreeContext);
	if (!ctx) throw new Error("You must wrap this component under <DocsLayout />");
	return ctx;
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/layouts/notebook/slots/container.js
function Container$1(props) {
	const { props: { nav }, slots } = useNotebookLayout();
	const pageCol = "calc(var(--fd-layout-width,97rem) - var(--fd-sidebar-col) - var(--fd-toc-width))";
	const { collapsed } = slots.sidebar?.useSidebar?.() ?? {};
	const [previousCollapsed, setPreviousCollapsed] = useState(collapsed);
	const isCollapseChanged = previousCollapsed !== collapsed;
	useEffect(() => {
		if (isCollapseChanged) setPreviousCollapsed(collapsed);
	}, [collapsed, isCollapseChanged]);
	return /* @__PURE__ */ jsx("div", {
		id: "nd-notebook-layout",
		"data-sidebar-collapsed": collapsed,
		"data-column-changed": isCollapseChanged,
		...props,
		style: {
			gridTemplate: nav?.mode === "top" ? `". header header header ."
"sidebar sidebar toc-popover toc-popover ."
"sidebar sidebar main toc ." 1fr / minmax(min-content, 1fr) var(--fd-sidebar-col) minmax(0, ${pageCol}) var(--fd-toc-width) minmax(min-content, 1fr)` : `"sidebar sidebar header header ."
"sidebar sidebar toc-popover toc-popover ."
"sidebar sidebar main toc ." 1fr / minmax(min-content, 1fr) var(--fd-sidebar-col) minmax(0, ${pageCol}) var(--fd-toc-width) minmax(min-content, 1fr)`,
			"--fd-docs-row-1": "var(--fd-banner-height, 0px)",
			"--fd-docs-row-2": "calc(var(--fd-docs-row-1) + var(--fd-header-height))",
			"--fd-docs-row-3": "calc(var(--fd-docs-row-2) + var(--fd-toc-popover-height))",
			"--fd-sidebar-col": collapsed ? "0px" : "var(--fd-sidebar-width)",
			...props.style
		},
		className: cn$1("grid overflow-x-clip min-h-(--fd-docs-height) auto-cols-auto auto-rows-auto [--fd-docs-height:100dvh] [--fd-header-height:0px] [--fd-toc-popover-height:0px] [--fd-sidebar-width:0px] [--fd-toc-width:0px] data-[column-changed=true]:transition-[grid-template-columns]", props.className),
		children: props.children
	});
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/_virtual/_rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/scroll-area/root/ScrollAreaRootContext.mjs
var ScrollAreaRootContext = /*#__PURE__*/ React.createContext(void 0);
if (process.env.NODE_ENV !== "production") ScrollAreaRootContext.displayName = "ScrollAreaRootContext";
function useScrollAreaRootContext() {
	const context = React.useContext(ScrollAreaRootContext);
	if (context === void 0) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: ScrollAreaRootContext is missing. ScrollArea parts must be placed within <ScrollArea.Root>." : formatErrorMessage(53));
	return context;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/scroll-area/root/ScrollAreaRootCssVars.mjs
var ScrollAreaRootCssVars = /*#__PURE__*/ function(ScrollAreaRootCssVars) {
	/**
	* The scroll area's corner height.
	* @type {number}
	*/
	ScrollAreaRootCssVars["scrollAreaCornerHeight"] = "--scroll-area-corner-height";
	/**
	* The scroll area's corner width.
	* @type {number}
	*/
	ScrollAreaRootCssVars["scrollAreaCornerWidth"] = "--scroll-area-corner-width";
	return ScrollAreaRootCssVars;
}({});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/scroll-area/utils/getOffset.mjs
function getOffset(element, prop, axis) {
	if (!element) return 0;
	const styles = getComputedStyle(element);
	const propAxis = axis === "x" ? "Inline" : "Block";
	if (axis === "x" && prop === "margin") return parseFloat(styles[`${prop}InlineStart`]) * 2;
	return parseFloat(styles[`${prop}${propAxis}Start`]) + parseFloat(styles[`${prop}${propAxis}End`]);
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/scroll-area/scrollbar/ScrollAreaScrollbarDataAttributes.mjs
var ScrollAreaScrollbarDataAttributes = /*#__PURE__*/ function(ScrollAreaScrollbarDataAttributes) {
	/**
	* Indicates the orientation of the scrollbar.
	* @type {'horizontal' | 'vertical'}
	*/
	ScrollAreaScrollbarDataAttributes["orientation"] = "data-orientation";
	/**
	* Present when the pointer is over the scroll area.
	*/
	ScrollAreaScrollbarDataAttributes["hovering"] = "data-hovering";
	/**
	* Present when the user scrolls inside the scroll area.
	*/
	ScrollAreaScrollbarDataAttributes["scrolling"] = "data-scrolling";
	/**
	* Present when the scroll area content is wider than the viewport.
	*/
	ScrollAreaScrollbarDataAttributes["hasOverflowX"] = "data-has-overflow-x";
	/**
	* Present when the scroll area content is taller than the viewport.
	*/
	ScrollAreaScrollbarDataAttributes["hasOverflowY"] = "data-has-overflow-y";
	/**
	* Present when there is overflow on the horizontal start side.
	*/
	ScrollAreaScrollbarDataAttributes["overflowXStart"] = "data-overflow-x-start";
	/**
	* Present when there is overflow on the horizontal end side.
	*/
	ScrollAreaScrollbarDataAttributes["overflowXEnd"] = "data-overflow-x-end";
	/**
	* Present when there is overflow on the vertical start side.
	*/
	ScrollAreaScrollbarDataAttributes["overflowYStart"] = "data-overflow-y-start";
	/**
	* Present when there is overflow on the vertical end side.
	*/
	ScrollAreaScrollbarDataAttributes["overflowYEnd"] = "data-overflow-y-end";
	return ScrollAreaScrollbarDataAttributes;
}({});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/utils/styles.mjs
var DISABLE_SCROLLBAR_CLASS_NAME = "base-ui-disable-scrollbar";
var styleDisableScrollbar = {
	className: DISABLE_SCROLLBAR_CLASS_NAME,
	getElement(nonce) {
		return /*#__PURE__*/ jsx("style", {
			nonce,
			href: DISABLE_SCROLLBAR_CLASS_NAME,
			precedence: "base-ui:low",
			children: `.${DISABLE_SCROLLBAR_CLASS_NAME}{scrollbar-width:none}.${DISABLE_SCROLLBAR_CLASS_NAME}::-webkit-scrollbar{display:none}`
		});
	}
};
if (process.env.NODE_ENV !== "production") styleDisableScrollbar.getElement.displayName = "styleDisableScrollbar.getElement";
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/scroll-area/root/ScrollAreaRootDataAttributes.mjs
var ScrollAreaRootDataAttributes = /*#__PURE__*/ function(ScrollAreaRootDataAttributes) {
	/**
	* Present when the user scrolls inside the scroll area.
	*/
	ScrollAreaRootDataAttributes["scrolling"] = "data-scrolling";
	/**
	* Present when the scroll area content is wider than the viewport.
	*/
	ScrollAreaRootDataAttributes["hasOverflowX"] = "data-has-overflow-x";
	/**
	* Present when the scroll area content is taller than the viewport.
	*/
	ScrollAreaRootDataAttributes["hasOverflowY"] = "data-has-overflow-y";
	/**
	* Present when there is overflow on the horizontal start side.
	*/
	ScrollAreaRootDataAttributes["overflowXStart"] = "data-overflow-x-start";
	/**
	* Present when there is overflow on the horizontal end side.
	*/
	ScrollAreaRootDataAttributes["overflowXEnd"] = "data-overflow-x-end";
	/**
	* Present when there is overflow on the vertical start side.
	*/
	ScrollAreaRootDataAttributes["overflowYStart"] = "data-overflow-y-start";
	/**
	* Present when there is overflow on the vertical end side.
	*/
	ScrollAreaRootDataAttributes["overflowYEnd"] = "data-overflow-y-end";
	return ScrollAreaRootDataAttributes;
}({});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/scroll-area/root/stateAttributes.mjs
var scrollAreaStateAttributesMapping = {
	hasOverflowX: (value) => value ? { [ScrollAreaRootDataAttributes.hasOverflowX]: "" } : null,
	hasOverflowY: (value) => value ? { [ScrollAreaRootDataAttributes.hasOverflowY]: "" } : null,
	overflowXStart: (value) => value ? { [ScrollAreaRootDataAttributes.overflowXStart]: "" } : null,
	overflowXEnd: (value) => value ? { [ScrollAreaRootDataAttributes.overflowXEnd]: "" } : null,
	overflowYStart: (value) => value ? { [ScrollAreaRootDataAttributes.overflowYStart]: "" } : null,
	overflowYEnd: (value) => value ? { [ScrollAreaRootDataAttributes.overflowYEnd]: "" } : null,
	cornerHidden: () => null
};
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/internals/csp-context/CSPContext.mjs
/**
* @internal
*/
var CSPContext = /*#__PURE__*/ React.createContext(void 0);
if (process.env.NODE_ENV !== "production") CSPContext.displayName = "CSPContext";
var DEFAULT_CSP_CONTEXT_VALUE = { disableStyleElements: false };
/**
* @internal
*/
function useCSPContext() {
	return React.useContext(CSPContext) ?? DEFAULT_CSP_CONTEXT_VALUE;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/scroll-area/root/ScrollAreaRoot.mjs
var DEFAULT_COORDS = {
	x: 0,
	y: 0
};
var DEFAULT_SIZE = {
	width: 0,
	height: 0
};
var DEFAULT_OVERFLOW_EDGES = {
	xStart: false,
	xEnd: false,
	yStart: false,
	yEnd: false
};
var DEFAULT_HIDDEN_STATE = {
	x: true,
	y: true,
	corner: true
};
/**
* Groups all parts of the scroll area.
* Renders a `<div>` element.
*
* Documentation: [Base UI Scroll Area](https://base-ui.com/react/components/scroll-area)
*/
var ScrollAreaRoot = /*#__PURE__*/ React.forwardRef(function ScrollAreaRoot(componentProps, forwardedRef) {
	const { render, className, overflowEdgeThreshold: overflowEdgeThresholdProp, style, ...elementProps } = componentProps;
	const { xStart, xEnd, yStart, yEnd } = normalizeOverflowEdgeThreshold(overflowEdgeThresholdProp);
	const rootId = useBaseUiId();
	const scrollYTimeout = useTimeout();
	const scrollXTimeout = useTimeout();
	const { nonce, disableStyleElements } = useCSPContext();
	const [hovering, setHovering] = React.useState(false);
	const [scrollingX, setScrollingX] = React.useState(false);
	const [scrollingY, setScrollingY] = React.useState(false);
	const [touchModality, setTouchModality] = React.useState(false);
	const [hasMeasuredScrollbar, setHasMeasuredScrollbar] = React.useState(false);
	const [cornerSize, setCornerSize] = React.useState(DEFAULT_SIZE);
	const [thumbSize, setThumbSize] = React.useState(DEFAULT_SIZE);
	const [overflowEdges, setOverflowEdges] = React.useState(DEFAULT_OVERFLOW_EDGES);
	const [hiddenState, setHiddenState] = React.useState(DEFAULT_HIDDEN_STATE);
	const rootRef = React.useRef(null);
	const viewportRef = React.useRef(null);
	const scrollbarYRef = React.useRef(null);
	const scrollbarXRef = React.useRef(null);
	const thumbYRef = React.useRef(null);
	const thumbXRef = React.useRef(null);
	const cornerRef = React.useRef(null);
	const thumbDraggingRef = React.useRef(false);
	const startYRef = React.useRef(0);
	const startXRef = React.useRef(0);
	const startScrollTopRef = React.useRef(0);
	const startScrollLeftRef = React.useRef(0);
	const currentOrientationRef = React.useRef("vertical");
	const scrollPositionRef = React.useRef(DEFAULT_COORDS);
	const handleScroll = useStableCallback((scrollPosition) => {
		const offsetX = scrollPosition.x - scrollPositionRef.current.x;
		const offsetY = scrollPosition.y - scrollPositionRef.current.y;
		scrollPositionRef.current = scrollPosition;
		if (offsetY !== 0) {
			setScrollingY(true);
			scrollYTimeout.start(500, () => {
				setScrollingY(false);
			});
		}
		if (offsetX !== 0) {
			setScrollingX(true);
			scrollXTimeout.start(500, () => {
				setScrollingX(false);
			});
		}
	});
	const handlePointerDown = useStableCallback((event) => {
		if (event.button !== 0) return;
		thumbDraggingRef.current = true;
		startYRef.current = event.clientY;
		startXRef.current = event.clientX;
		currentOrientationRef.current = event.currentTarget.getAttribute(ScrollAreaScrollbarDataAttributes.orientation);
		if (viewportRef.current) {
			startScrollTopRef.current = viewportRef.current.scrollTop;
			startScrollLeftRef.current = viewportRef.current.scrollLeft;
		}
		if (thumbYRef.current && currentOrientationRef.current === "vertical") thumbYRef.current.setPointerCapture(event.pointerId);
		if (thumbXRef.current && currentOrientationRef.current === "horizontal") thumbXRef.current.setPointerCapture(event.pointerId);
	});
	const handlePointerMove = useStableCallback((event) => {
		if (!thumbDraggingRef.current) return;
		const deltaY = event.clientY - startYRef.current;
		const deltaX = event.clientX - startXRef.current;
		if (viewportRef.current) {
			const scrollableContentHeight = viewportRef.current.scrollHeight;
			const viewportHeight = viewportRef.current.clientHeight;
			const scrollableContentWidth = viewportRef.current.scrollWidth;
			const viewportWidth = viewportRef.current.clientWidth;
			if (thumbYRef.current && scrollbarYRef.current && currentOrientationRef.current === "vertical") {
				const scrollbarYOffset = getOffset(scrollbarYRef.current, "padding", "y");
				const thumbYOffset = getOffset(thumbYRef.current, "margin", "y");
				const thumbHeight = thumbYRef.current.offsetHeight;
				const scrollRatioY = deltaY / (scrollbarYRef.current.offsetHeight - thumbHeight - scrollbarYOffset - thumbYOffset);
				viewportRef.current.scrollTop = startScrollTopRef.current + scrollRatioY * (scrollableContentHeight - viewportHeight);
				event.preventDefault();
				setScrollingY(true);
				scrollYTimeout.start(500, () => {
					setScrollingY(false);
				});
			}
			if (thumbXRef.current && scrollbarXRef.current && currentOrientationRef.current === "horizontal") {
				const scrollbarXOffset = getOffset(scrollbarXRef.current, "padding", "x");
				const thumbXOffset = getOffset(thumbXRef.current, "margin", "x");
				const thumbWidth = thumbXRef.current.offsetWidth;
				const scrollRatioX = deltaX / (scrollbarXRef.current.offsetWidth - thumbWidth - scrollbarXOffset - thumbXOffset);
				viewportRef.current.scrollLeft = startScrollLeftRef.current + scrollRatioX * (scrollableContentWidth - viewportWidth);
				event.preventDefault();
				setScrollingX(true);
				scrollXTimeout.start(500, () => {
					setScrollingX(false);
				});
			}
		}
	});
	const handlePointerUp = useStableCallback((event) => {
		thumbDraggingRef.current = false;
		if (thumbYRef.current && currentOrientationRef.current === "vertical" && thumbYRef.current.hasPointerCapture(event.pointerId)) thumbYRef.current.releasePointerCapture(event.pointerId);
		if (thumbXRef.current && currentOrientationRef.current === "horizontal" && thumbXRef.current.hasPointerCapture(event.pointerId)) thumbXRef.current.releasePointerCapture(event.pointerId);
	});
	function handleTouchModalityChange(event) {
		setTouchModality(event.pointerType === "touch");
	}
	function handlePointerEnterOrMove(event) {
		handleTouchModalityChange(event);
		if (event.pointerType !== "touch") {
			const isTargetRootChild = contains(rootRef.current, event.target);
			setHovering(isTargetRootChild);
		}
	}
	const state = React.useMemo(() => ({
		scrolling: scrollingX || scrollingY,
		hasOverflowX: !hiddenState.x,
		hasOverflowY: !hiddenState.y,
		overflowXStart: overflowEdges.xStart,
		overflowXEnd: overflowEdges.xEnd,
		overflowYStart: overflowEdges.yStart,
		overflowYEnd: overflowEdges.yEnd,
		cornerHidden: hiddenState.corner
	}), [
		scrollingX,
		scrollingY,
		hiddenState.x,
		hiddenState.y,
		hiddenState.corner,
		overflowEdges
	]);
	const props = {
		role: "presentation",
		onPointerEnter: handlePointerEnterOrMove,
		onPointerMove: handlePointerEnterOrMove,
		onPointerDown: handleTouchModalityChange,
		onPointerLeave() {
			setHovering(false);
		},
		style: {
			position: "relative",
			[ScrollAreaRootCssVars.scrollAreaCornerHeight]: `${cornerSize.height}px`,
			[ScrollAreaRootCssVars.scrollAreaCornerWidth]: `${cornerSize.width}px`
		}
	};
	const element = useRenderElement("div", componentProps, {
		state,
		ref: [forwardedRef, rootRef],
		props: [props, elementProps],
		stateAttributesMapping: scrollAreaStateAttributesMapping
	});
	const contextValue = React.useMemo(() => ({
		handlePointerDown,
		handlePointerMove,
		handlePointerUp,
		handleScroll,
		cornerSize,
		setCornerSize,
		thumbSize,
		setThumbSize,
		hasMeasuredScrollbar,
		setHasMeasuredScrollbar,
		touchModality,
		cornerRef,
		scrollingX,
		setScrollingX,
		scrollingY,
		setScrollingY,
		hovering,
		setHovering,
		viewportRef,
		rootRef,
		scrollbarYRef,
		scrollbarXRef,
		thumbYRef,
		thumbXRef,
		rootId,
		hiddenState,
		setHiddenState,
		overflowEdges,
		setOverflowEdges,
		viewportState: state,
		overflowEdgeThreshold: {
			xStart,
			xEnd,
			yStart,
			yEnd
		}
	}), [
		handlePointerDown,
		handlePointerMove,
		handlePointerUp,
		handleScroll,
		cornerSize,
		thumbSize,
		hasMeasuredScrollbar,
		touchModality,
		scrollingX,
		setScrollingX,
		scrollingY,
		setScrollingY,
		hovering,
		setHovering,
		rootId,
		hiddenState,
		overflowEdges,
		state,
		xStart,
		xEnd,
		yStart,
		yEnd
	]);
	return /*#__PURE__*/ jsxs(ScrollAreaRootContext.Provider, {
		value: contextValue,
		children: [!disableStyleElements && styleDisableScrollbar.getElement(nonce), element]
	});
});
if (process.env.NODE_ENV !== "production") ScrollAreaRoot.displayName = "ScrollAreaRoot";
function normalizeOverflowEdgeThreshold(threshold) {
	if (typeof threshold === "number") {
		const value = Math.max(0, threshold);
		return {
			xStart: value,
			xEnd: value,
			yStart: value,
			yEnd: value
		};
	}
	return {
		xStart: Math.max(0, threshold?.xStart || 0),
		xEnd: Math.max(0, threshold?.xEnd || 0),
		yStart: Math.max(0, threshold?.yStart || 0),
		yEnd: Math.max(0, threshold?.yEnd || 0)
	};
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/scroll-area/viewport/ScrollAreaViewportContext.mjs
var ScrollAreaViewportContext = /*#__PURE__*/ React.createContext(void 0);
if (process.env.NODE_ENV !== "production") ScrollAreaViewportContext.displayName = "ScrollAreaViewportContext";
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/internals/clamp.mjs
function clamp$1(val, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
	return Math.max(min, Math.min(val, max));
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/scroll-area/viewport/ScrollAreaViewportCssVars.mjs
var ScrollAreaViewportCssVars = /*#__PURE__*/ function(ScrollAreaViewportCssVars) {
	/**
	* The distance from the horizontal start edge in pixels.
	* @type {number}
	*/
	ScrollAreaViewportCssVars["scrollAreaOverflowXStart"] = "--scroll-area-overflow-x-start";
	/**
	* The distance from the horizontal end edge in pixels.
	* @type {number}
	*/
	ScrollAreaViewportCssVars["scrollAreaOverflowXEnd"] = "--scroll-area-overflow-x-end";
	/**
	* The distance from the vertical start edge in pixels.
	* @type {number}
	*/
	ScrollAreaViewportCssVars["scrollAreaOverflowYStart"] = "--scroll-area-overflow-y-start";
	/**
	* The distance from the vertical end edge in pixels.
	* @type {number}
	*/
	ScrollAreaViewportCssVars["scrollAreaOverflowYEnd"] = "--scroll-area-overflow-y-end";
	return ScrollAreaViewportCssVars;
}({});
function normalizeScrollOffset(value, max) {
	if (max <= 0) return 0;
	const clamped = clamp$1(value, 0, max);
	const startDistance = clamped;
	const endDistance = max - clamped;
	const withinStartTolerance = startDistance <= 1;
	const withinEndTolerance = endDistance <= 1;
	if (withinStartTolerance && withinEndTolerance) return startDistance <= endDistance ? 0 : max;
	if (withinStartTolerance) return 0;
	if (withinEndTolerance) return max;
	return clamped;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/scroll-area/viewport/ScrollAreaViewport.mjs
var scrollAreaOverflowVarsRegistered = false;
/**
* Removes inheritance of the scroll area overflow CSS variables, which
* improves rendering performance in complex scroll areas with deep subtrees.
* Instead, each child must manually opt-in to using these properties by
* specifying `inherit`.
* See https://motion.dev/blog/web-animation-performance-tier-list
* under the "Improving CSS variable performance" section.
*/
function removeCSSVariableInheritance() {
	if (scrollAreaOverflowVarsRegistered || webkit) return;
	if (typeof CSS !== "undefined" && "registerProperty" in CSS) [
		ScrollAreaViewportCssVars.scrollAreaOverflowXStart,
		ScrollAreaViewportCssVars.scrollAreaOverflowXEnd,
		ScrollAreaViewportCssVars.scrollAreaOverflowYStart,
		ScrollAreaViewportCssVars.scrollAreaOverflowYEnd
	].forEach((name) => {
		try {
			CSS.registerProperty({
				name,
				syntax: "<length>",
				inherits: false,
				initialValue: "0px"
			});
		} catch {}
	});
	scrollAreaOverflowVarsRegistered = true;
}
/**
* The actual scrollable container of the scroll area.
* Renders a `<div>` element.
*
* Documentation: [Base UI Scroll Area](https://base-ui.com/react/components/scroll-area)
*/
var ScrollAreaViewport = /*#__PURE__*/ React.forwardRef(function ScrollAreaViewport(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const { viewportRef, scrollbarYRef, scrollbarXRef, thumbYRef, thumbXRef, cornerRef, cornerSize, setCornerSize, setThumbSize, rootId, setHiddenState, hiddenState, setHasMeasuredScrollbar, handleScroll, setHovering, setOverflowEdges, overflowEdges, overflowEdgeThreshold, scrollingX, scrollingY } = useScrollAreaRootContext();
	const direction = useDirection();
	const programmaticScrollRef = React.useRef(true);
	const lastMeasuredViewportMetricsRef = React.useRef([
		NaN,
		NaN,
		NaN,
		NaN
	]);
	const scrollEndTimeout = useTimeout();
	const waitForAnimationsTimeout = useTimeout();
	const computeThumbPosition = useStableCallback(() => {
		const viewportEl = viewportRef.current;
		const scrollbarYEl = scrollbarYRef.current;
		const scrollbarXEl = scrollbarXRef.current;
		const thumbYEl = thumbYRef.current;
		const thumbXEl = thumbXRef.current;
		const cornerEl = cornerRef.current;
		if (!viewportEl) return;
		const scrollableContentHeight = viewportEl.scrollHeight;
		const scrollableContentWidth = viewportEl.scrollWidth;
		const viewportHeight = viewportEl.clientHeight;
		const viewportWidth = viewportEl.clientWidth;
		const scrollTop = viewportEl.scrollTop;
		const scrollLeft = viewportEl.scrollLeft;
		const lastMeasuredViewportMetrics = lastMeasuredViewportMetricsRef.current;
		const isFirstMeasurement = Number.isNaN(lastMeasuredViewportMetrics[0]);
		lastMeasuredViewportMetrics[0] = viewportHeight;
		lastMeasuredViewportMetrics[1] = scrollableContentHeight;
		lastMeasuredViewportMetrics[2] = viewportWidth;
		lastMeasuredViewportMetrics[3] = scrollableContentWidth;
		if (isFirstMeasurement) setHasMeasuredScrollbar(true);
		if (scrollableContentHeight === 0 || scrollableContentWidth === 0) return;
		const nextHiddenState = getHiddenState(viewportEl);
		const scrollbarYHidden = nextHiddenState.y;
		const scrollbarXHidden = nextHiddenState.x;
		const ratioX = viewportWidth / scrollableContentWidth;
		const ratioY = viewportHeight / scrollableContentHeight;
		const maxScrollLeft = Math.max(0, scrollableContentWidth - viewportWidth);
		const maxScrollTop = Math.max(0, scrollableContentHeight - viewportHeight);
		let scrollLeftFromStart = 0;
		let scrollLeftFromEnd = 0;
		if (!scrollbarXHidden) {
			let rawScrollLeftFromStart = 0;
			if (direction === "rtl") rawScrollLeftFromStart = clamp$1(-scrollLeft, 0, maxScrollLeft);
			else rawScrollLeftFromStart = clamp$1(scrollLeft, 0, maxScrollLeft);
			scrollLeftFromStart = normalizeScrollOffset(rawScrollLeftFromStart, maxScrollLeft);
			scrollLeftFromEnd = maxScrollLeft - scrollLeftFromStart;
		}
		const rawScrollTopFromStart = !scrollbarYHidden ? clamp$1(scrollTop, 0, maxScrollTop) : 0;
		const scrollTopFromStart = !scrollbarYHidden ? normalizeScrollOffset(rawScrollTopFromStart, maxScrollTop) : 0;
		const scrollTopFromEnd = !scrollbarYHidden ? maxScrollTop - scrollTopFromStart : 0;
		const nextWidth = scrollbarXHidden ? 0 : viewportWidth;
		const nextHeight = scrollbarYHidden ? 0 : viewportHeight;
		let nextCornerWidth = 0;
		let nextCornerHeight = 0;
		if (!scrollbarXHidden && !scrollbarYHidden) {
			nextCornerWidth = scrollbarYEl?.offsetWidth || 0;
			nextCornerHeight = scrollbarXEl?.offsetHeight || 0;
		}
		const cornerNotYetSized = cornerSize.width === 0 && cornerSize.height === 0;
		const cornerWidthOffset = cornerNotYetSized ? nextCornerWidth : 0;
		const cornerHeightOffset = cornerNotYetSized ? nextCornerHeight : 0;
		const scrollbarXOffset = getOffset(scrollbarXEl, "padding", "x");
		const scrollbarYOffset = getOffset(scrollbarYEl, "padding", "y");
		const thumbXOffset = getOffset(thumbXEl, "margin", "x");
		const thumbYOffset = getOffset(thumbYEl, "margin", "y");
		const idealNextWidth = nextWidth - scrollbarXOffset - thumbXOffset;
		const idealNextHeight = nextHeight - scrollbarYOffset - thumbYOffset;
		const maxNextWidth = scrollbarXEl ? Math.min(scrollbarXEl.offsetWidth - cornerWidthOffset, idealNextWidth) : idealNextWidth;
		const maxNextHeight = scrollbarYEl ? Math.min(scrollbarYEl.offsetHeight - cornerHeightOffset, idealNextHeight) : idealNextHeight;
		const clampedNextWidth = Math.max(16, maxNextWidth * ratioX);
		const clampedNextHeight = Math.max(16, maxNextHeight * ratioY);
		setThumbSize((prevSize) => {
			if (prevSize.height === clampedNextHeight && prevSize.width === clampedNextWidth) return prevSize;
			return {
				width: clampedNextWidth,
				height: clampedNextHeight
			};
		});
		if (scrollbarYEl && thumbYEl) {
			const maxThumbOffsetY = scrollbarYEl.offsetHeight - clampedNextHeight - scrollbarYOffset - thumbYOffset;
			const scrollRangeY = scrollableContentHeight - viewportHeight;
			const scrollRatioY = scrollRangeY === 0 ? 0 : scrollTop / scrollRangeY;
			const thumbOffsetY = Math.min(maxThumbOffsetY, Math.max(0, scrollRatioY * maxThumbOffsetY));
			thumbYEl.style.transform = `translate3d(0,${thumbOffsetY}px,0)`;
		}
		if (scrollbarXEl && thumbXEl) {
			const maxThumbOffsetX = scrollbarXEl.offsetWidth - clampedNextWidth - scrollbarXOffset - thumbXOffset;
			const scrollRangeX = scrollableContentWidth - viewportWidth;
			const scrollRatioX = scrollRangeX === 0 ? 0 : scrollLeft / scrollRangeX;
			const thumbOffsetX = direction === "rtl" ? clamp$1(scrollRatioX * maxThumbOffsetX, -maxThumbOffsetX, 0) : clamp$1(scrollRatioX * maxThumbOffsetX, 0, maxThumbOffsetX);
			thumbXEl.style.transform = `translate3d(${thumbOffsetX}px,0,0)`;
		}
		const overflowMetricsPx = [
			[ScrollAreaViewportCssVars.scrollAreaOverflowXStart, scrollLeftFromStart],
			[ScrollAreaViewportCssVars.scrollAreaOverflowXEnd, scrollLeftFromEnd],
			[ScrollAreaViewportCssVars.scrollAreaOverflowYStart, scrollTopFromStart],
			[ScrollAreaViewportCssVars.scrollAreaOverflowYEnd, scrollTopFromEnd]
		];
		for (const [cssVar, value] of overflowMetricsPx) viewportEl.style.setProperty(cssVar, `${value}px`);
		if (cornerEl) {
			if (scrollbarXHidden || scrollbarYHidden) setCornerSize({
				width: 0,
				height: 0
			});
			else if (!scrollbarXHidden && !scrollbarYHidden) setCornerSize({
				width: nextCornerWidth,
				height: nextCornerHeight
			});
		}
		setHiddenState((prevState) => mergeHiddenState(prevState, nextHiddenState));
		const nextOverflowEdges = {
			xStart: !scrollbarXHidden && scrollLeftFromStart > overflowEdgeThreshold.xStart,
			xEnd: !scrollbarXHidden && scrollLeftFromEnd > overflowEdgeThreshold.xEnd,
			yStart: !scrollbarYHidden && scrollTopFromStart > overflowEdgeThreshold.yStart,
			yEnd: !scrollbarYHidden && scrollTopFromEnd > overflowEdgeThreshold.yEnd
		};
		setOverflowEdges((prev) => {
			if (prev.xStart === nextOverflowEdges.xStart && prev.xEnd === nextOverflowEdges.xEnd && prev.yStart === nextOverflowEdges.yStart && prev.yEnd === nextOverflowEdges.yEnd) return prev;
			return nextOverflowEdges;
		});
	});
	useIsoLayoutEffect(() => {
		if (!viewportRef.current) return;
		removeCSSVariableInheritance();
	}, [viewportRef]);
	useIsoLayoutEffect(() => {
		queueMicrotask(computeThumbPosition);
	}, [
		computeThumbPosition,
		hiddenState,
		direction,
		overflowEdgeThreshold.xStart,
		overflowEdgeThreshold.xEnd,
		overflowEdgeThreshold.yStart,
		overflowEdgeThreshold.yEnd
	]);
	useIsoLayoutEffect(() => {
		if (viewportRef.current?.matches(":hover")) setHovering(true);
	}, [viewportRef, setHovering]);
	useIsoLayoutEffect(() => {
		const viewport = viewportRef.current;
		if (typeof ResizeObserver === "undefined" || !viewport) return;
		let hasInitialized = false;
		const resizeObserver = new ResizeObserver(() => {
			if (!hasInitialized) {
				hasInitialized = true;
				const lastMeasuredViewportMetrics = lastMeasuredViewportMetricsRef.current;
				if (lastMeasuredViewportMetrics[0] === viewport.clientHeight && lastMeasuredViewportMetrics[1] === viewport.scrollHeight && lastMeasuredViewportMetrics[2] === viewport.clientWidth && lastMeasuredViewportMetrics[3] === viewport.scrollWidth) return;
			}
			computeThumbPosition();
		});
		resizeObserver.observe(viewport);
		waitForAnimationsTimeout.start(0, () => {
			const animations = viewport.getAnimations({ subtree: true });
			if (animations.length === 0) return;
			Promise.allSettled(animations.map((animation) => animation.finished)).then(computeThumbPosition).catch(() => {});
		});
		return () => {
			resizeObserver.disconnect();
			waitForAnimationsTimeout.clear();
		};
	}, [
		computeThumbPosition,
		viewportRef,
		waitForAnimationsTimeout
	]);
	function handleUserInteraction() {
		programmaticScrollRef.current = false;
	}
	const props = {
		role: "presentation",
		...rootId && { "data-id": `${rootId}-viewport` },
		tabIndex: hiddenState.x && hiddenState.y ? -1 : 0,
		className: styleDisableScrollbar.className,
		style: { overflow: "scroll" },
		onScroll() {
			if (!viewportRef.current) return;
			computeThumbPosition();
			if (!programmaticScrollRef.current) handleScroll({
				x: viewportRef.current.scrollLeft,
				y: viewportRef.current.scrollTop
			});
			scrollEndTimeout.start(100, () => {
				programmaticScrollRef.current = true;
			});
		},
		onWheel: handleUserInteraction,
		onTouchMove: handleUserInteraction,
		onPointerMove: handleUserInteraction,
		onPointerEnter: handleUserInteraction,
		onKeyDown: handleUserInteraction
	};
	const viewportState = React.useMemo(() => ({
		scrolling: scrollingX || scrollingY,
		hasOverflowX: !hiddenState.x,
		hasOverflowY: !hiddenState.y,
		overflowXStart: overflowEdges.xStart,
		overflowXEnd: overflowEdges.xEnd,
		overflowYStart: overflowEdges.yStart,
		overflowYEnd: overflowEdges.yEnd,
		cornerHidden: hiddenState.corner
	}), [
		scrollingX,
		scrollingY,
		hiddenState.x,
		hiddenState.y,
		hiddenState.corner,
		overflowEdges
	]);
	const element = useRenderElement("div", componentProps, {
		ref: [forwardedRef, viewportRef],
		state: viewportState,
		props: [props, elementProps],
		stateAttributesMapping: scrollAreaStateAttributesMapping
	});
	const contextValue = React.useMemo(() => ({ computeThumbPosition }), [computeThumbPosition]);
	return /*#__PURE__*/ jsx(ScrollAreaViewportContext.Provider, {
		value: contextValue,
		children: element
	});
});
if (process.env.NODE_ENV !== "production") ScrollAreaViewport.displayName = "ScrollAreaViewport";
function getHiddenState(viewport) {
	const y = viewport.clientHeight >= viewport.scrollHeight;
	const x = viewport.clientWidth >= viewport.scrollWidth;
	return {
		y,
		x,
		corner: y || x
	};
}
function mergeHiddenState(prevState, nextState) {
	if (prevState.y === nextState.y && prevState.x === nextState.x && prevState.corner === nextState.corner) return prevState;
	return nextState;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/scroll-area/scrollbar/ScrollAreaScrollbarContext.mjs
var ScrollAreaScrollbarContext = /*#__PURE__*/ React.createContext(void 0);
if (process.env.NODE_ENV !== "production") ScrollAreaScrollbarContext.displayName = "ScrollAreaScrollbarContext";
function useScrollAreaScrollbarContext() {
	const context = React.useContext(ScrollAreaScrollbarContext);
	if (context === void 0) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: ScrollAreaScrollbarContext is missing. ScrollAreaScrollbar parts must be placed within <ScrollArea.Scrollbar>." : formatErrorMessage(54));
	return context;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/scroll-area/scrollbar/ScrollAreaScrollbarCssVars.mjs
var ScrollAreaScrollbarCssVars = /*#__PURE__*/ function(ScrollAreaScrollbarCssVars) {
	/**
	* The scroll area thumb's height.
	* @type {number}
	*/
	ScrollAreaScrollbarCssVars["scrollAreaThumbHeight"] = "--scroll-area-thumb-height";
	/**
	* The scroll area thumb's width.
	* @type {number}
	*/
	ScrollAreaScrollbarCssVars["scrollAreaThumbWidth"] = "--scroll-area-thumb-width";
	return ScrollAreaScrollbarCssVars;
}({});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/scroll-area/scrollbar/ScrollAreaScrollbar.mjs
/**
* A vertical or horizontal scrollbar for the scroll area.
* Renders a `<div>` element.
*
* Documentation: [Base UI Scroll Area](https://base-ui.com/react/components/scroll-area)
*/
var ScrollAreaScrollbar = /*#__PURE__*/ React.forwardRef(function ScrollAreaScrollbar(componentProps, forwardedRef) {
	const { render, className, orientation = "vertical", keepMounted = false, style, ...elementProps } = componentProps;
	const { hovering, scrollingX, scrollingY, hiddenState, overflowEdges, scrollbarYRef, scrollbarXRef, viewportRef, thumbYRef, thumbXRef, handlePointerDown, handlePointerUp, handleScroll, rootId, thumbSize, hasMeasuredScrollbar } = useScrollAreaRootContext();
	const state = {
		hovering,
		scrolling: {
			horizontal: scrollingX,
			vertical: scrollingY
		}[orientation],
		orientation,
		hasOverflowX: !hiddenState.x,
		hasOverflowY: !hiddenState.y,
		overflowXStart: overflowEdges.xStart,
		overflowXEnd: overflowEdges.xEnd,
		overflowYStart: overflowEdges.yStart,
		overflowYEnd: overflowEdges.yEnd,
		cornerHidden: hiddenState.corner
	};
	const direction = useDirection();
	const hideTrackUntilMeasured = !hasMeasuredScrollbar && !keepMounted;
	const isHidden = orientation === "vertical" ? hiddenState.y : hiddenState.x;
	const shouldRender = keepMounted || !isHidden;
	React.useEffect(() => {
		if (!shouldRender) return;
		const viewportEl = viewportRef.current;
		const scrollbarEl = orientation === "vertical" ? scrollbarYRef.current : scrollbarXRef.current;
		if (!scrollbarEl) return;
		function handleWheel(event) {
			if (!viewportEl || !scrollbarEl || event.ctrlKey) return;
			const horizontal = orientation === "horizontal";
			const scrollProperty = horizontal ? "scrollLeft" : "scrollTop";
			const delta = horizontal ? event.deltaX : event.deltaY;
			if (delta === 0) return;
			const maxScroll = horizontal ? viewportEl.scrollWidth - viewportEl.clientWidth : viewportEl.scrollHeight - viewportEl.clientHeight;
			const minScroll = horizontal && direction === "rtl" ? -maxScroll : 0;
			const maxScrollValue = horizontal && direction === "rtl" ? 0 : maxScroll;
			const scrollValue = viewportEl[scrollProperty];
			if (scrollValue <= minScroll && delta < 0 || scrollValue >= maxScrollValue && delta > 0) return;
			event.preventDefault();
			viewportEl[scrollProperty] = Math.min(maxScrollValue, Math.max(minScroll, scrollValue + delta));
			handleScroll({
				x: viewportEl.scrollLeft,
				y: viewportEl.scrollTop
			});
		}
		return addEventListener(scrollbarEl, "wheel", handleWheel, { passive: false });
	}, [
		direction,
		handleScroll,
		orientation,
		scrollbarXRef,
		scrollbarYRef,
		shouldRender,
		viewportRef
	]);
	const props = {
		...rootId && { "data-id": `${rootId}-scrollbar` },
		onPointerDown(event) {
			if (event.button !== 0) return;
			const target = getTarget(event.nativeEvent);
			const thumb = orientation === "vertical" ? thumbYRef.current : thumbXRef.current;
			if (thumb && contains(thumb, target)) return;
			if (!viewportRef.current) return;
			if (thumbYRef.current && scrollbarYRef.current && orientation === "vertical") {
				const thumbYOffset = getOffset(thumbYRef.current, "margin", "y");
				const scrollbarYOffset = getOffset(scrollbarYRef.current, "padding", "y");
				const thumbHeight = thumbYRef.current.offsetHeight;
				const trackRectY = scrollbarYRef.current.getBoundingClientRect();
				const clickY = event.clientY - trackRectY.top - thumbHeight / 2 - scrollbarYOffset + thumbYOffset / 2;
				const scrollableContentHeight = viewportRef.current.scrollHeight;
				const viewportHeight = viewportRef.current.clientHeight;
				const newScrollTop = clickY / (scrollbarYRef.current.offsetHeight - thumbHeight - scrollbarYOffset - thumbYOffset) * (scrollableContentHeight - viewportHeight);
				viewportRef.current.scrollTop = newScrollTop;
			}
			if (thumbXRef.current && scrollbarXRef.current && orientation === "horizontal") {
				const thumbXOffset = getOffset(thumbXRef.current, "margin", "x");
				const scrollbarXOffset = getOffset(scrollbarXRef.current, "padding", "x");
				const thumbWidth = thumbXRef.current.offsetWidth;
				const trackRectX = scrollbarXRef.current.getBoundingClientRect();
				const clickX = event.clientX - trackRectX.left - thumbWidth / 2 - scrollbarXOffset + thumbXOffset / 2;
				const scrollableContentWidth = viewportRef.current.scrollWidth;
				const viewportWidth = viewportRef.current.clientWidth;
				const scrollRatioX = clickX / (scrollbarXRef.current.offsetWidth - thumbWidth - scrollbarXOffset - thumbXOffset);
				let newScrollLeft;
				if (direction === "rtl") {
					newScrollLeft = (1 - scrollRatioX) * (scrollableContentWidth - viewportWidth);
					if (viewportRef.current.scrollLeft <= 0) newScrollLeft = -newScrollLeft;
				} else newScrollLeft = scrollRatioX * (scrollableContentWidth - viewportWidth);
				viewportRef.current.scrollLeft = newScrollLeft;
			}
			handleScroll({
				x: viewportRef.current.scrollLeft,
				y: viewportRef.current.scrollTop
			});
			handlePointerDown(event);
		},
		onPointerUp: handlePointerUp,
		onPointerCancel: handlePointerUp,
		style: {
			position: "absolute",
			touchAction: "none",
			WebkitUserSelect: "none",
			userSelect: "none",
			visibility: hideTrackUntilMeasured ? "hidden" : void 0,
			...orientation === "vertical" && {
				top: 0,
				bottom: `var(${ScrollAreaRootCssVars.scrollAreaCornerHeight})`,
				insetInlineEnd: 0,
				[ScrollAreaScrollbarCssVars.scrollAreaThumbHeight]: `${thumbSize.height}px`
			},
			...orientation === "horizontal" && {
				insetInlineStart: 0,
				insetInlineEnd: `var(${ScrollAreaRootCssVars.scrollAreaCornerWidth})`,
				bottom: 0,
				[ScrollAreaScrollbarCssVars.scrollAreaThumbWidth]: `${thumbSize.width}px`
			}
		}
	};
	const element = useRenderElement("div", componentProps, {
		ref: [forwardedRef, orientation === "vertical" ? scrollbarYRef : scrollbarXRef],
		state,
		props: [props, elementProps],
		stateAttributesMapping: scrollAreaStateAttributesMapping
	});
	const contextValue = React.useMemo(() => ({ orientation }), [orientation]);
	if (!shouldRender) return null;
	return /*#__PURE__*/ jsx(ScrollAreaScrollbarContext.Provider, {
		value: contextValue,
		children: element
	});
});
if (process.env.NODE_ENV !== "production") ScrollAreaScrollbar.displayName = "ScrollAreaScrollbar";
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/scroll-area/thumb/ScrollAreaThumb.mjs
/**
* The draggable part of the scrollbar that indicates the current scroll position.
* Renders a `<div>` element.
*
* Documentation: [Base UI Scroll Area](https://base-ui.com/react/components/scroll-area)
*/
var ScrollAreaThumb = /*#__PURE__*/ React.forwardRef(function ScrollAreaThumb(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const { thumbYRef, thumbXRef, handlePointerDown, handlePointerMove, handlePointerUp, setScrollingX, setScrollingY, scrollingX, scrollingY, hasMeasuredScrollbar } = useScrollAreaRootContext();
	const { orientation } = useScrollAreaScrollbarContext();
	const state = {
		scrolling: orientation === "horizontal" ? scrollingX : scrollingY,
		orientation
	};
	function endDrag(event) {
		if (orientation === "vertical") setScrollingY(false);
		if (orientation === "horizontal") setScrollingX(false);
		handlePointerUp(event);
	}
	return useRenderElement("div", componentProps, {
		ref: [forwardedRef, orientation === "vertical" ? thumbYRef : thumbXRef],
		state,
		props: [{
			onPointerDown: handlePointerDown,
			onPointerMove: handlePointerMove,
			onPointerUp: endDrag,
			onPointerCancel: endDrag,
			style: {
				visibility: hasMeasuredScrollbar ? void 0 : "hidden",
				...orientation === "vertical" && { height: `var(${ScrollAreaScrollbarCssVars.scrollAreaThumbHeight})` },
				...orientation === "horizontal" && { width: `var(${ScrollAreaScrollbarCssVars.scrollAreaThumbWidth})` }
			}
		}, elementProps]
	});
});
if (process.env.NODE_ENV !== "production") ScrollAreaThumb.displayName = "ScrollAreaThumb";
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/scroll-area/corner/ScrollAreaCorner.mjs
/**
* A small rectangular area that appears at the intersection of horizontal and vertical scrollbars.
* Renders a `<div>` element.
*
* Documentation: [Base UI Scroll Area](https://base-ui.com/react/components/scroll-area)
*/
var ScrollAreaCorner = /*#__PURE__*/ React.forwardRef(function ScrollAreaCorner(componentProps, forwardedRef) {
	const { render, className, style, ...elementProps } = componentProps;
	const { cornerRef, cornerSize, hiddenState } = useScrollAreaRootContext();
	const element = useRenderElement("div", componentProps, {
		ref: [forwardedRef, cornerRef],
		props: [{ style: {
			position: "absolute",
			bottom: 0,
			insetInlineEnd: 0,
			width: cornerSize.width,
			height: cornerSize.height
		} }, elementProps]
	});
	if (hiddenState.corner) return null;
	return element;
});
if (process.env.NODE_ENV !== "production") ScrollAreaCorner.displayName = "ScrollAreaCorner";
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/components/ui/scroll-area.js
function ScrollArea({ children, ...props }) {
	return /* @__PURE__ */ jsxs(ScrollAreaRoot, {
		...props,
		children: [
			children,
			/* @__PURE__ */ jsx(ScrollAreaCorner, {}),
			/* @__PURE__ */ jsx(ScrollBar, { orientation: "vertical" })
		]
	});
}
function ScrollViewport({ className, children, ...props }) {
	return /* @__PURE__ */ jsx(ScrollAreaViewport, {
		className: (s) => cn$1("size-full rounded-[inherit]", typeof className === "function" ? className(s) : className),
		...props,
		children
	});
}
function ScrollBar({ className, orientation = "vertical", ...props }) {
	return /* @__PURE__ */ jsx(ScrollAreaScrollbar, {
		orientation,
		className: (s) => cn$1("flex select-none transition-opacity", !s.hovering && "opacity-0", orientation === "vertical" && "h-full w-1.5", orientation === "horizontal" && "h-1.5 flex-col", typeof className === "function" ? className(s) : className),
		...props,
		children: /* @__PURE__ */ jsx(ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-fd-border" })
	});
}
//#endregion
//#region node_modules/.pnpm/fumadocs-core@16.11.5_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.5_@type_72cb31c98dbdcd9237f5eec6550b9329/node_modules/fumadocs-core/dist/utils/use-media-query.js
function useMediaQuery(query, disabled = false) {
	const [isMatch, setMatch] = useState(null);
	useEffect(() => {
		if (disabled) return;
		const mediaQueryList = window.matchMedia(query);
		const handleChange = () => {
			setMatch(mediaQueryList.matches);
		};
		handleChange();
		mediaQueryList.addEventListener("change", handleChange);
		return () => {
			mediaQueryList.removeEventListener("change", handleChange);
		};
	}, [disabled, query]);
	return isMatch;
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/components/sidebar/base.js
var base_exports = /* @__PURE__ */ __exportAll({
	SidebarCollapseTrigger: () => SidebarCollapseTrigger$1,
	SidebarContent: () => SidebarContent$1,
	SidebarDrawerContent: () => SidebarDrawerContent,
	SidebarDrawerOverlay: () => SidebarDrawerOverlay,
	SidebarFolder: () => SidebarFolder$1,
	SidebarFolderContent: () => SidebarFolderContent$1,
	SidebarFolderLink: () => SidebarFolderLink$1,
	SidebarFolderTrigger: () => SidebarFolderTrigger$1,
	SidebarItem: () => SidebarItem$1,
	SidebarProvider: () => SidebarProvider$1,
	SidebarSeparator: () => SidebarSeparator$1,
	SidebarTrigger: () => SidebarTrigger$1,
	SidebarViewport: () => SidebarViewport,
	useAutoScroll: () => useAutoScroll,
	useFolder: () => useFolder,
	useFolderDepth: () => useFolderDepth,
	useSidebar: () => useSidebar$1
});
var SidebarContext = createContext(null);
var FolderContext = createContext(null);
function SidebarProvider$1({ defaultOpenLevel = 0, prefetch, children }) {
	const closeOnRedirect = useRef(true);
	const [open, setOpen] = useState(false);
	const [collapsed, setCollapsed] = useState(false);
	const pathname = usePathname();
	const mode = useMediaQuery("(width < 768px)") ? "drawer" : "full";
	useOnChange(pathname, () => {
		if (closeOnRedirect.current) setOpen(false);
		closeOnRedirect.current = true;
	});
	return /* @__PURE__ */ jsx(SidebarContext, {
		value: useMemo(() => ({
			open,
			setOpen,
			collapsed,
			setCollapsed,
			closeOnRedirect,
			defaultOpenLevel,
			prefetch,
			mode
		}), [
			open,
			collapsed,
			defaultOpenLevel,
			prefetch,
			mode
		]),
		children
	});
}
function useSidebar$1() {
	const ctx = use(SidebarContext);
	if (!ctx) throw new Error("Missing SidebarContext, make sure you have wrapped the component in <DocsLayout /> and the context is available.");
	return ctx;
}
function useFolder() {
	return use(FolderContext);
}
function useFolderDepth() {
	return use(FolderContext)?.depth ?? 0;
}
function SidebarContent$1({ children }) {
	const { collapsed, mode } = useSidebar$1();
	const [hover, setHover] = useState(false);
	const ref = useRef(null);
	const timerRef = useRef(0);
	useOnChange(collapsed, () => {
		if (collapsed) setHover(false);
	});
	if (mode !== "full") return;
	function shouldIgnoreHover(e) {
		const element = ref.current;
		if (!element) return true;
		return !collapsed || e.pointerType === "touch" || element.getAnimations().length > 0;
	}
	return children({
		ref,
		collapsed,
		hovered: hover,
		onPointerEnter(e) {
			if (shouldIgnoreHover(e)) return;
			window.clearTimeout(timerRef.current);
			setHover(true);
		},
		onPointerLeave(e) {
			if (shouldIgnoreHover(e)) return;
			window.clearTimeout(timerRef.current);
			timerRef.current = window.setTimeout(() => setHover(false), Math.min(e.clientX, document.body.clientWidth - e.clientX) > 100 ? 0 : 500);
		}
	});
}
function SidebarDrawerOverlay(props) {
	const { open, setOpen, mode } = useSidebar$1();
	const [hidden, setHidden] = useState(!open);
	if (open && hidden) setHidden(false);
	if (mode !== "drawer" || hidden) return;
	return /* @__PURE__ */ jsx("div", {
		"data-state": open ? "open" : "closed",
		onClick: () => setOpen(false),
		onAnimationEnd: () => {
			if (!open) ReactDOM.flushSync(() => setHidden(true));
		},
		...props
	});
}
function SidebarDrawerContent({ className, children, ...props }) {
	const { open, mode } = useSidebar$1();
	const [hidden, setHidden] = useState(!open);
	if (open && hidden) setHidden(false);
	if (mode !== "drawer") return;
	return /* @__PURE__ */ jsx("aside", {
		id: "nd-sidebar-mobile",
		"data-state": open ? "open" : "closed",
		className: cn$1(hidden && "invisible", className),
		onAnimationEnd: () => {
			if (!open) ReactDOM.flushSync(() => setHidden(true));
		},
		...props,
		children
	});
}
function SidebarViewport({ className, ...props }) {
	return /* @__PURE__ */ jsx(ScrollArea, {
		className: (s) => cn$1("min-h-0 flex-1", typeof className === "function" ? className(s) : className),
		...props,
		children: /* @__PURE__ */ jsx(ScrollViewport, {
			className: "p-4 overscroll-contain mask-[linear-gradient(to_bottom,transparent,white_12px,white_calc(100%-12px),transparent)]",
			children: props.children
		})
	});
}
function SidebarSeparator$1(props) {
	const depth = useFolderDepth();
	return /* @__PURE__ */ jsx("p", {
		...props,
		className: cn$1("inline-flex items-center gap-2 mb-1.5 px-2 mt-6 empty:mb-0", depth === 0 && "first:mt-0", props.className),
		children: props.children
	});
}
function SidebarItem$1({ icon, active = false, children, ...props }) {
	const ref = useRef(null);
	const { prefetch } = useSidebar$1();
	useAutoScroll(active, ref);
	return /* @__PURE__ */ jsxs(Link$1, {
		ref,
		"data-active": active,
		prefetch,
		...props,
		children: [icon ?? (props.external ? /* @__PURE__ */ jsx(ExternalLink, {}) : null), children]
	});
}
function SidebarFolder$1({ defaultOpen: defaultOpenProp, collapsible = true, active = false, children, ...props }) {
	const { defaultOpenLevel } = useSidebar$1();
	const depth = useFolderDepth() + 1;
	const defaultOpen = collapsible === false || active || (defaultOpenProp ?? defaultOpenLevel >= depth);
	const [open, setOpen] = useState(defaultOpen);
	useOnChange(defaultOpen, (v) => {
		if (v) setOpen(v);
	});
	return /* @__PURE__ */ jsx(Collapsible, {
		open,
		onOpenChange: setOpen,
		disabled: !collapsible,
		...props,
		children: /* @__PURE__ */ jsx(FolderContext, {
			value: useMemo(() => ({
				open,
				setOpen,
				depth,
				collapsible
			}), [
				collapsible,
				depth,
				open
			]),
			children
		})
	});
}
function SidebarFolderTrigger$1({ children, ...props }) {
	const { open, collapsible } = use(FolderContext);
	if (collapsible) return /* @__PURE__ */ jsxs(CollapsibleTrigger, {
		...props,
		children: [children, /* @__PURE__ */ jsx(ChevronDown, {
			"data-icon": true,
			className: cn$1("ms-auto transition-transform", !open && "-rotate-90 rtl:rotate-90")
		})]
	});
	return /* @__PURE__ */ jsx("div", {
		...props,
		children
	});
}
function SidebarFolderLink$1({ children, active = false, ...props }) {
	const ref = useRef(null);
	const { open, setOpen, collapsible } = use(FolderContext);
	const { prefetch } = useSidebar$1();
	useAutoScroll(active, ref);
	return /* @__PURE__ */ jsxs(Link$1, {
		ref,
		"data-active": active,
		onClick: (e) => {
			if (!collapsible) return;
			if (e.target instanceof Element && e.target.matches("[data-icon], [data-icon] *")) {
				setOpen(!open);
				e.preventDefault();
			} else setOpen(active ? !open : true);
		},
		prefetch,
		...props,
		children: [children, collapsible && /* @__PURE__ */ jsx(ChevronDown, {
			"data-icon": true,
			className: cn$1("ms-auto transition-transform", !open && "-rotate-90 rtl:rotate-90")
		})]
	});
}
function SidebarFolderContent$1(props) {
	return /* @__PURE__ */ jsx(CollapsibleContent, {
		...props,
		children: props.children
	});
}
function SidebarTrigger$1({ children, ...props }) {
	const { open, setOpen } = useSidebar$1();
	const t = useTranslations({ note: "sidebar" });
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		"aria-label": open ? t("Close Sidebar", { note: "aria-label" }) : t("Open Sidebar", { note: "aria-label" }),
		"aria-expanded": open,
		"aria-controls": "nd-sidebar-mobile",
		onClick: () => setOpen((prev) => !prev),
		...props,
		children
	});
}
function SidebarCollapseTrigger$1(props) {
	const { collapsed, setCollapsed } = useSidebar$1();
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		"aria-label": useTranslations({ note: "sidebar" })("Collapse Sidebar", { note: "aria-label" }),
		"data-collapsed": collapsed,
		onClick: () => {
			setCollapsed((prev) => !prev);
		},
		...props,
		children: props.children
	});
}
/**
* scroll to the element if `active` is true
*/
function useAutoScroll(active, ref) {
	const { mode } = useSidebar$1();
	useEffect(() => {
		if (active && ref.current) e(ref.current, {
			boundary: document.getElementById(mode === "drawer" ? "nd-sidebar-mobile" : "nd-sidebar"),
			scrollMode: "if-needed"
		});
	}, [
		active,
		mode,
		ref
	]);
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/components/sidebar/page-tree.js
var RendererContext = createContext(null);
function createPageTreeRenderer({ SidebarFolder, SidebarFolderContent, SidebarFolderLink, SidebarFolderTrigger, SidebarSeparator, SidebarItem }) {
	function renderList(nodes) {
		return nodes.map((node, i) => /* @__PURE__ */ jsx(PageTreeNode, { node }, i));
	}
	function PageTreeNode({ node }) {
		const { Separator, Item, Folder, pathname } = use(RendererContext);
		if (node.type === "separator") {
			if (Separator) return /* @__PURE__ */ jsx(Separator, { item: node });
			return /* @__PURE__ */ jsxs(SidebarSeparator, { children: [node.icon, node.name] });
		}
		if (node.type === "folder") {
			const path = useTreePath();
			if (Folder) return /* @__PURE__ */ jsx(Folder, {
				item: node,
				children: renderList(node.children)
			});
			return /* @__PURE__ */ jsxs(SidebarFolder, {
				collapsible: node.collapsible,
				active: path.includes(node),
				defaultOpen: node.defaultOpen,
				children: [node.index ? /* @__PURE__ */ jsxs(SidebarFolderLink, {
					href: node.index.url,
					active: isActive(node.index.url, pathname),
					external: node.index.external,
					children: [node.icon, node.name]
				}) : /* @__PURE__ */ jsxs(SidebarFolderTrigger, { children: [node.icon, node.name] }), /* @__PURE__ */ jsx(SidebarFolderContent, { children: renderList(node.children) })]
			});
		}
		if (Item) return /* @__PURE__ */ jsx(Item, { item: node });
		return /* @__PURE__ */ jsx(SidebarItem, {
			href: node.url,
			external: node.external,
			active: isActive(node.url, pathname),
			icon: node.icon,
			children: node.name
		});
	}
	/**
	* Render sidebar items from page tree
	*/
	return function SidebarPageTree(components) {
		const { Folder, Item, Separator } = components;
		const { root } = useTreeContext();
		const pathname = usePathname();
		return /* @__PURE__ */ jsx(RendererContext, {
			value: useMemo(() => ({
				Folder,
				Item,
				Separator,
				pathname
			}), [
				Folder,
				Item,
				Separator,
				pathname
			]),
			children: /* @__PURE__ */ jsx(Fragment$1, { children: renderList(root.children) }, root.$id)
		});
	};
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/components/sidebar/link-item.js
function createLinkItemRenderer({ SidebarFolder, SidebarFolderContent, SidebarFolderLink, SidebarFolderTrigger, SidebarItem }) {
	/**
	* Render sidebar items from page tree
	*/
	return function SidebarLinkItem({ item, ...props }) {
		const active = isLinkItemActive(item, usePathname());
		if (item.type === "custom") return /* @__PURE__ */ jsx("div", {
			...props,
			children: item.children
		});
		if (item.type === "menu") return /* @__PURE__ */ jsxs(SidebarFolder, {
			...props,
			children: [item.url ? /* @__PURE__ */ jsxs(SidebarFolderLink, {
				href: item.url,
				active,
				external: item.external,
				children: [item.icon, item.text]
			}) : /* @__PURE__ */ jsxs(SidebarFolderTrigger, { children: [item.icon, item.text] }), /* @__PURE__ */ jsx(SidebarFolderContent, { children: item.items.map((child, i) => /* @__PURE__ */ jsx(SidebarLinkItem, { item: child }, i)) })]
		});
		return /* @__PURE__ */ jsx(SidebarItem, {
			href: item.url,
			icon: item.icon,
			external: item.external,
			active,
			...props,
			children: item.text
		});
	};
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/layouts/notebook/slots/sidebar.js
var itemVariants = cva("relative flex flex-row items-center gap-2 rounded-lg p-2 text-start text-fd-muted-foreground wrap-anywhere [&_svg]:size-4 [&_svg]:shrink-0", { variants: {
	variant: {
		link: "transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none data-[active=true]:bg-fd-primary/10 data-[active=true]:text-fd-primary data-[active=true]:hover:transition-colors",
		button: "transition-colors hover:bg-fd-accent/50 hover:text-fd-accent-foreground/80 hover:transition-none"
	},
	highlight: { true: "data-[active=true]:before:content-[''] data-[active=true]:before:bg-fd-primary data-[active=true]:before:absolute data-[active=true]:before:w-px data-[active=true]:before:inset-y-2.5 data-[active=true]:before:start-2.5" }
} });
function getItemOffset$2(depth) {
	return `calc(${2 + 3 * depth} * var(--spacing))`;
}
var { useSidebar } = base_exports;
function SidebarProvider(props) {
	return /* @__PURE__ */ jsx(SidebarProvider$1, { ...props });
}
function SidebarTrigger(props) {
	return /* @__PURE__ */ jsx(SidebarTrigger$1, { ...props });
}
function SidebarCollapseTrigger(props) {
	return /* @__PURE__ */ jsx(SidebarCollapseTrigger$1, { ...props });
}
function SidebarContent({ ref: refProp, className, children, ...props }) {
	const { props: { nav } } = useNotebookLayout();
	const navMode = nav?.mode ?? "auto";
	const ref = useRef(null);
	return /* @__PURE__ */ jsx(SidebarContent$1, { children: ({ collapsed, hovered, ref: asideRef, ...rest }) => /* @__PURE__ */ jsxs("div", {
		"data-sidebar-placeholder": "",
		className: cn$1("sticky z-20 [grid-area:sidebar] pointer-events-none *:pointer-events-auto md:layout:[--fd-sidebar-width:268px] max-md:hidden", navMode === "auto" ? "top-(--fd-docs-row-1) h-[calc(var(--fd-docs-height)-var(--fd-docs-row-1))]" : "top-(--fd-docs-row-2) h-[calc(var(--fd-docs-height)-var(--fd-docs-row-2))]"),
		children: [collapsed && /* @__PURE__ */ jsx("div", {
			className: "absolute start-0 inset-y-0 w-4",
			...rest
		}), /* @__PURE__ */ jsx("aside", {
			id: "nd-sidebar",
			ref: mergeRefs$1(ref, refProp, asideRef),
			"data-collapsed": collapsed,
			"data-hovered": collapsed && hovered,
			className: cn$1("absolute flex flex-col w-full start-0 inset-y-0 items-end text-sm duration-250 *:w-(--fd-sidebar-width)", navMode === "auto" && "bg-fd-card border-e", collapsed && ["inset-y-2 rounded-xl bg-fd-card transition-transform border w-(--fd-sidebar-width)", hovered ? "shadow-lg translate-x-2 rtl:-translate-x-2" : "-translate-x-(--fd-sidebar-width) rtl:translate-x-full"], ref.current && ref.current.getAttribute("data-collapsed") === "true" !== collapsed && "transition-[width,inset-block,translate,background-color]", className),
			...props,
			...rest,
			children
		})]
	}) });
}
function SidebarDrawer({ children, className, ...props }) {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SidebarDrawerOverlay, { className: "fixed z-40 inset-0 backdrop-blur-xs data-[state=open]:animate-fd-fade-in data-[state=closed]:animate-fd-fade-out" }), /* @__PURE__ */ jsx(SidebarDrawerContent, {
		className: cn$1("fixed text-[0.9375rem] flex flex-col shadow-lg border-s end-0 inset-y-0 w-[85%] max-w-[380px] z-40 bg-fd-background data-[state=open]:animate-fd-sidebar-in data-[state=closed]:animate-fd-sidebar-out", className),
		...props,
		children
	})] });
}
function SidebarFolder(props) {
	return /* @__PURE__ */ jsx(SidebarFolder$1, { ...props });
}
function SidebarSeparator({ className, style, children, ...props }) {
	const depth = useFolderDepth();
	return /* @__PURE__ */ jsx(SidebarSeparator$1, {
		className: cn$1("inline-flex items-center gap-2 mb-1.5 px-2 mt-6 empty:mb-0 [&_svg]:size-4 [&_svg]:shrink-0", depth === 0 && "first:mt-0", className),
		style: {
			paddingInlineStart: getItemOffset$2(depth),
			...style
		},
		...props,
		children
	});
}
function SidebarItem({ className, style, children, ...props }) {
	const depth = useFolderDepth();
	return /* @__PURE__ */ jsx(SidebarItem$1, {
		className: cn$1(itemVariants({
			variant: "link",
			highlight: depth >= 1
		}), className),
		style: {
			paddingInlineStart: getItemOffset$2(depth),
			...style
		},
		...props,
		children
	});
}
function SidebarFolderTrigger({ className, style, ...props }) {
	const { depth, collapsible } = useFolder();
	return /* @__PURE__ */ jsx(SidebarFolderTrigger$1, {
		className: (state) => cn$1(itemVariants({ variant: collapsible ? "button" : null }), "w-full", typeof className === "function" ? className(state) : className),
		style: {
			paddingInlineStart: getItemOffset$2(depth - 1),
			...style
		},
		...props,
		children: props.children
	});
}
function SidebarFolderLink({ className, style, ...props }) {
	const depth = useFolderDepth();
	return /* @__PURE__ */ jsx(SidebarFolderLink$1, {
		className: cn$1(itemVariants({
			variant: "link",
			highlight: depth > 1
		}), "w-full", className),
		style: {
			paddingInlineStart: getItemOffset$2(depth - 1),
			...style
		},
		...props,
		children: props.children
	});
}
function SidebarFolderContent({ className, children, ...props }) {
	const depth = useFolderDepth();
	return /* @__PURE__ */ jsx(SidebarFolderContent$1, {
		className: (state) => cn$1("relative flex flex-col gap-0.5 pt-0.5", depth === 1 && "before:content-[''] before:absolute before:w-px before:inset-y-1 before:bg-fd-border before:start-2.5", typeof className === "function" ? className(state) : className),
		...props,
		children
	});
}
var SidebarPageTree = createPageTreeRenderer({
	SidebarFolder,
	SidebarFolderContent,
	SidebarFolderLink,
	SidebarFolderTrigger,
	SidebarItem,
	SidebarSeparator
});
var SidebarLinkItem = createLinkItemRenderer({
	SidebarFolder,
	SidebarFolderContent,
	SidebarFolderLink,
	SidebarFolderTrigger,
	SidebarItem
});
function Sidebar$1({ banner, footer, components, collapsible = true, ...rest }) {
	const { menuItems, slots, props: { nav, tabs, tabMode } } = useNotebookLayout();
	const navMode = nav?.mode ?? "auto";
	const iconLinks = menuItems.filter((item) => item.type === "icon");
	function renderHeader(props) {
		if (typeof banner === "function") return createElement(banner, props);
		return /* @__PURE__ */ jsxs("div", {
			...props,
			className: cn$1("flex flex-col gap-3 p-4 pb-2 empty:hidden", props.className),
			children: [props.children, banner]
		});
	}
	function renderFooter(props) {
		if (typeof footer === "function") return createElement(footer, props);
		return /* @__PURE__ */ jsxs("div", {
			...props,
			children: [props.children, footer]
		});
	}
	const viewport = /* @__PURE__ */ jsx(SidebarViewport, { children: /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col gap-0.5",
		children: [menuItems.filter((item) => item.type !== "icon").map((item, i, arr) => /* @__PURE__ */ jsx(SidebarLinkItem, {
			item,
			className: cn$1("lg:hidden", i === arr.length - 1 && "mb-4")
		}, i)), /* @__PURE__ */ jsx(SidebarPageTree, { ...components })]
	}) });
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs(SidebarContent, {
		...rest,
		children: [
			renderHeader({ children: /* @__PURE__ */ jsxs(Fragment, { children: [navMode === "auto" && /* @__PURE__ */ jsxs("div", {
				className: "flex justify-between",
				children: [
					slots.navTitle && /* @__PURE__ */ jsx(slots.navTitle, { className: "inline-flex items-center gap-2.5 font-medium" }),
					nav?.children,
					collapsible && /* @__PURE__ */ jsx(SidebarCollapseTrigger, {
						className: cn$1(buttonVariants$1({
							color: "ghost",
							size: "icon-sm",
							className: "mt-px mb-auto text-fd-muted-foreground"
						})),
						children: /* @__PURE__ */ jsx(SidebarIcon, {})
					})
				]
			}), tabs.length > 0 && /* @__PURE__ */ jsx(SidebarTabsDropdown, {
				options: tabs,
				className: cn$1(tabMode === "navbar" && "lg:hidden")
			})] }) }),
			viewport,
			renderFooter({
				className: cn$1("hidden flex-row text-fd-muted-foreground items-center border-t px-4 py-2.5", iconLinks.length > 0 && "max-lg:flex"),
				children: iconLinks.map((item, i) => /* @__PURE__ */ jsx(LinkItem, {
					item,
					className: cn$1(buttonVariants$1({
						size: "icon-sm",
						color: "ghost",
						className: "lg:hidden"
					})),
					"aria-label": item.label,
					children: item.icon
				}, i))
			})
		]
	}), /* @__PURE__ */ jsxs(SidebarDrawer, {
		...rest,
		children: [
			renderHeader({ children: /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SidebarTrigger, {
				className: cn$1(buttonVariants$1({
					size: "icon-sm",
					color: "ghost",
					className: "ms-auto text-fd-muted-foreground"
				})),
				children: /* @__PURE__ */ jsx(X, {})
			}), tabs.length > 0 && /* @__PURE__ */ jsx(SidebarTabsDropdown, { options: tabs })] }) }),
			viewport,
			renderFooter({
				className: cn$1("hidden flex-row text-fd-muted-foreground items-center border-t p-4 pt-2 justify-end", (slots.languageSelect || slots.themeSwitch) && "flex", iconLinks.length > 0 && "max-lg:flex"),
				children: /* @__PURE__ */ jsxs(Fragment, { children: [
					iconLinks.map((item, i) => /* @__PURE__ */ jsx(LinkItem, {
						item,
						className: cn$1(buttonVariants$1({
							size: "icon-sm",
							color: "ghost"
						}), "text-fd-muted-foreground lg:hidden", i === iconLinks.length - 1 && "me-auto"),
						"aria-label": item.label,
						children: item.icon
					}, i)),
					slots.languageSelect && /* @__PURE__ */ jsx(slots.languageSelect.root, { children: /* @__PURE__ */ jsx(Languages, { className: "size-4.5 text-fd-muted-foreground" }) }),
					slots.themeSwitch && /* @__PURE__ */ jsx(slots.themeSwitch, {})
				] })
			})
		]
	})] });
}
function SidebarTabsDropdown({ options, placeholder, ...props }) {
	const [open, setOpen] = useState(false);
	const { closeOnRedirect } = useSidebar();
	const pathname = usePathname();
	const selected = useMemo(() => {
		return options.findLast((item) => isLayoutTabActive(item, pathname));
	}, [options, pathname]);
	const onClick = () => {
		closeOnRedirect.current = false;
		setOpen(false);
	};
	const item = selected ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
		className: "size-9 shrink-0 empty:hidden md:size-5",
		children: selected.icon
	}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
		className: "text-sm font-medium",
		children: selected.title
	}), /* @__PURE__ */ jsx("p", {
		className: "text-sm text-fd-muted-foreground empty:hidden md:hidden",
		children: selected.description
	})] })] }) : placeholder;
	return /* @__PURE__ */ jsxs(Popover, {
		open,
		onOpenChange: setOpen,
		children: [item && /* @__PURE__ */ jsxs(PopoverTrigger, {
			...props,
			className: cn$1("flex items-center gap-2 rounded-lg p-2 border bg-fd-secondary/50 text-start text-fd-secondary-foreground transition-colors hover:bg-fd-accent data-[popup-open]:bg-fd-accent data-[popup-open]:text-fd-accent-foreground", props.className),
			children: [item, /* @__PURE__ */ jsx(ChevronsUpDown, { className: "shrink-0 ms-auto size-4 text-fd-muted-foreground" })]
		}), /* @__PURE__ */ jsx(PopoverContent, {
			className: "flex flex-col gap-1 w-(--anchor-width) p-1 fd-scroll-container",
			children: options.map((item) => {
				const isActive = selected && item.url === selected.url;
				if (!isActive && item.unlisted) return;
				return /* @__PURE__ */ jsxs(Link$1, {
					href: item.url,
					onClick,
					...item.props,
					className: cn$1("flex items-center gap-2 rounded-lg p-1.5 hover:bg-fd-accent hover:text-fd-accent-foreground", item.props?.className),
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "shrink-0 size-9 md:mb-auto md:size-5 empty:hidden",
							children: item.icon
						}),
						/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "text-sm font-medium leading-none",
							children: item.title
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[0.8125rem] text-fd-muted-foreground mt-1 empty:hidden",
							children: item.description
						})] }),
						/* @__PURE__ */ jsx(Check, { className: cn$1("shrink-0 ms-auto size-3.5 text-fd-primary", !isActive && "invisible") })
					]
				}, item.url);
			})
		})]
	});
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/layouts/notebook/slots/header.js
function Header(props) {
	const { slots, navItems, isNavTransparent, props: { tabMode, nav, tabs, sidebar } } = useNotebookLayout();
	const { open } = slots.sidebar?.useSidebar?.() ?? {};
	const navMode = nav?.mode ?? "auto";
	const sidebarCollapsible = sidebar.collapsible ?? true;
	const showLayoutTabs = tabMode === "navbar" && tabs.length > 0;
	if (nav?.component) return nav.component;
	return /* @__PURE__ */ jsxs("header", {
		id: "nd-subnav",
		"data-transparent": isNavTransparent && !open,
		...props,
		className: cn$1("sticky [grid-area:header] flex flex-col top-(--fd-docs-row-1) z-10 backdrop-blur-sm transition-colors data-[transparent=false]:bg-fd-background/80 layout:[--fd-header-height:--spacing(14)]", showLayoutTabs && "lg:layout:[--fd-header-height:--spacing(24)]", props.className),
		children: [/* @__PURE__ */ jsxs("div", {
			"data-header-body": "",
			className: "flex border-b px-4 gap-2 h-14 md:px-6",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: cn$1("items-center", navMode === "top" && "flex flex-1", navMode === "auto" && "hidden has-data-[collapsed=true]:md:flex max-md:flex"),
					children: [
						sidebarCollapsible && slots.sidebar && navMode === "auto" && /* @__PURE__ */ jsx(slots.sidebar.collapseTrigger, {
							className: cn$1(buttonVariants$1({
								color: "ghost",
								size: "icon-sm"
							}), "-ms-1.5 text-fd-muted-foreground data-[collapsed=false]:hidden max-md:hidden"),
							children: /* @__PURE__ */ jsx(Sidebar, {})
						}),
						slots.navTitle && /* @__PURE__ */ jsx(slots.navTitle, { className: cn$1("inline-flex items-center gap-2.5 font-semibold", navMode === "auto" && "md:hidden") }),
						nav?.children
					]
				}),
				slots.searchTrigger && /* @__PURE__ */ jsx(slots.searchTrigger.full, {
					hideIfDisabled: true,
					className: cn$1("w-full my-auto max-md:hidden", navMode === "top" ? "ps-2.5 rounded-xl max-w-sm" : "max-w-[240px]")
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-1 items-center justify-end md:gap-2",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "flex items-center gap-6 empty:hidden max-lg:hidden",
							children: navItems.filter((item) => item.type !== "icon").map((item, i) => /* @__PURE__ */ jsx(NavbarLinkItem, { item }, i))
						}),
						navItems.filter((item) => item.type === "icon").map((item, i) => /* @__PURE__ */ jsx(LinkItem, {
							item,
							className: cn$1(buttonVariants$1({
								size: "icon-sm",
								color: "ghost"
							}), "text-fd-muted-foreground max-lg:hidden"),
							"aria-label": item.label,
							children: item.icon
						}, i)),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center md:hidden",
							children: [slots.searchTrigger && /* @__PURE__ */ jsx(slots.searchTrigger.sm, {
								hideIfDisabled: true,
								className: "p-2"
							}), slots.sidebar && /* @__PURE__ */ jsx(slots.sidebar.trigger, {
								className: cn$1(buttonVariants$1({
									color: "ghost",
									size: "icon-sm",
									className: "p-2 -me-1.5"
								})),
								children: /* @__PURE__ */ jsx(Sidebar, {})
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2 max-md:hidden",
							children: [
								slots.languageSelect && /* @__PURE__ */ jsx(slots.languageSelect.root, { children: /* @__PURE__ */ jsx(Languages, { className: "size-4.5 text-fd-muted-foreground" }) }),
								slots.themeSwitch && /* @__PURE__ */ jsx(slots.themeSwitch, {}),
								sidebarCollapsible && slots.sidebar && navMode === "top" && /* @__PURE__ */ jsx(slots.sidebar.collapseTrigger, {
									className: cn$1(buttonVariants$1({
										color: "secondary",
										size: "icon-sm"
									}), "text-fd-muted-foreground rounded-full -me-1.5"),
									children: /* @__PURE__ */ jsx(Sidebar, {})
								})
							]
						})
					]
				})
			]
		}), showLayoutTabs && /* @__PURE__ */ jsx(LayoutHeaderTabs, {
			"data-header-tabs": "",
			className: "overflow-x-auto border-b px-6 h-10 max-lg:hidden",
			tabs
		})]
	});
}
function LayoutHeaderTabs({ tabs, className, ...props }) {
	const pathname = usePathname();
	const selectedIdx = useMemo(() => {
		return tabs.findLastIndex((option) => isLayoutTabActive(option, pathname));
	}, [tabs, pathname]);
	return /* @__PURE__ */ jsx("div", {
		className: cn$1("flex flex-row items-end gap-6", className),
		...props,
		children: tabs.map((option, i) => {
			const { title, url, unlisted, props: { className, ...rest } = {} } = option;
			const isSelected = selectedIdx === i;
			return /* @__PURE__ */ jsx(Link$1, {
				href: url,
				className: cn$1("inline-flex border-b-2 border-transparent transition-colors items-center pb-1.5 font-medium gap-2 text-fd-muted-foreground text-sm text-nowrap hover:text-fd-accent-foreground", unlisted && !isSelected && "hidden", isSelected && "border-fd-primary text-fd-primary", className),
				...rest,
				children: title
			}, i);
		})
	});
}
function NavbarLinkItem({ item, className, ...props }) {
	if (item.type === "custom") return item.children;
	if (item.type === "menu") return /* @__PURE__ */ jsx(NavbarLinkItemMenu, {
		item,
		className,
		...props
	});
	return /* @__PURE__ */ jsx(LinkItem, {
		item,
		className: cn$1("text-sm text-fd-muted-foreground transition-colors hover:text-fd-accent-foreground data-[active=true]:text-fd-primary", className),
		...props,
		children: item.text
	});
}
function NavbarLinkItemMenu({ item, hoverDelay = 50, className, ...props }) {
	const [open, setOpen] = useState(false);
	const timeoutRef = useRef(null);
	const freezeUntil = useRef(null);
	const delaySetOpen = (value) => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
			timeoutRef.current = null;
		}
		timeoutRef.current = window.setTimeout(() => {
			setOpen(value);
			freezeUntil.current = Date.now() + 300;
		}, hoverDelay);
	};
	const onPointerEnter = (e) => {
		if (e.pointerType === "touch") return;
		delaySetOpen(true);
	};
	const onPointerLeave = (e) => {
		if (e.pointerType === "touch") return;
		delaySetOpen(false);
	};
	function isTouchDevice() {
		return "ontouchstart" in window || navigator.maxTouchPoints > 0;
	}
	return /* @__PURE__ */ jsxs(Popover, {
		open,
		onOpenChange: (value) => {
			if (freezeUntil.current === null || Date.now() >= freezeUntil.current) setOpen(value);
		},
		children: [/* @__PURE__ */ jsxs(PopoverTrigger, {
			className: cn$1("inline-flex items-center gap-1.5 p-1 text-sm text-fd-muted-foreground transition-colors has-data-[active=true]:text-fd-primary data-[popup-open]:text-fd-accent-foreground focus-visible:outline-none", className),
			onPointerEnter,
			onPointerLeave,
			...props,
			children: [item.url ? /* @__PURE__ */ jsx(LinkItem, {
				item,
				children: item.text
			}) : item.text, /* @__PURE__ */ jsx(ChevronDown, { className: "size-3" })]
		}), /* @__PURE__ */ jsx(PopoverContent, {
			className: "flex flex-col p-1 text-fd-muted-foreground text-start",
			onPointerEnter,
			onPointerLeave,
			children: item.items.map((child, i) => {
				if (child.type === "custom") return /* @__PURE__ */ jsx(Fragment$1, { children: child.children }, i);
				return /* @__PURE__ */ jsxs(LinkItem, {
					item: child,
					className: "inline-flex items-center gap-2 rounded-md p-2 transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground data-[active=true]:text-fd-primary [&_svg]:size-4",
					onClick: () => {
						if (isTouchDevice()) setOpen(false);
					},
					children: [child.icon, child.text]
				}, i);
			})
		})]
	});
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/layouts/notebook/client.js
var { useProvider } = baseSlots({ useProps() {
	return useNotebookLayout().props;
} });
var LayoutContext = createContext(null);
function useNotebookLayout() {
	const context = use(LayoutContext);
	if (!context) throw new Error("Please use <DocsPage /> (`fumadocs-ui/layouts/notebook/page`) under <DocsLayout /> (`fumadocs-ui/layouts/notebook`).");
	return context;
}
function LayoutBody(props) {
	const { nav: { enabled: navEnabled = true, transparentMode: navTransparentMode = "none" } = {}, sidebar: { defaultOpenLevel, prefetch, ...sidebarProps } = {}, slots: defaultSlots, tabMode = "sidebar", tabs, tree, containerProps, children } = props;
	const isTop = useIsScrollTop({ enabled: navTransparentMode === "top" }) ?? true;
	const isNavTransparent = navTransparentMode === "top" ? isTop : navTransparentMode === "always";
	const { baseSlots, baseProps } = useProvider(props);
	const linkItems = useLinkItems(props);
	const slots = {
		...baseSlots,
		header: defaultSlots?.header ?? Header,
		container: defaultSlots?.container ?? Container$1,
		sidebar: defaultSlots?.sidebar ?? {
			provider: SidebarProvider,
			root: Sidebar$1,
			trigger: SidebarTrigger,
			collapseTrigger: SidebarCollapseTrigger,
			useSidebar
		}
	};
	return /* @__PURE__ */ jsx(TreeContextProvider, {
		tree,
		children: /* @__PURE__ */ jsx(LayoutContext, {
			value: {
				props: {
					tabs,
					tabMode,
					sidebar: sidebarProps,
					...baseProps
				},
				isNavTransparent,
				slots,
				...linkItems
			},
			children: /* @__PURE__ */ jsx(slots.sidebar.provider, {
				defaultOpenLevel,
				prefetch,
				children: /* @__PURE__ */ jsxs(slots.container, {
					...containerProps,
					children: [
						navEnabled && /* @__PURE__ */ jsx(slots.header, {}),
						/* @__PURE__ */ jsx(slots.sidebar.root, { ...sidebarProps }),
						children
					]
				})
			})
		})
	});
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/layouts/notebook/index.js
function DocsLayout({ tree, tabMode = "sidebar", sidebar: { tabs: defaultTabs, ...sidebarProps } = {}, children, tabs = defaultTabs, ...props }) {
	return /* @__PURE__ */ jsx(LayoutBody, {
		tree,
		tabs: useMemo(() => {
			if (Array.isArray(tabs)) return tabs;
			if (typeof tabs === "object") return getLayoutTabs(tree, tabs);
			if (tabs !== false) return getLayoutTabs(tree);
			return [];
		}, [tabs, tree]),
		tabMode,
		sidebar: sidebarProps,
		...props,
		children
	});
}
//#endregion
//#region components/layout/app-header.tsx
function isIconLink(item) {
	return item.type === "icon";
}
/** 首页 / 文档共用：GitHub 等 icon 链接尺寸与 hover 一致 */
var iconLinkClassName = cn(buttonVariants$1({
	size: "icon-sm",
	color: "ghost"
}), "text-fd-muted-foreground");
/** 文档二级 · root 分区（XBase / 插件 / CLEO / 技能） */
function DocsSectionNav({ items, className }) {
	const pathname = useLocation().pathname;
	const selectedIdx = items.findLastIndex((item) => {
		return pathname === item.url || pathname.startsWith(`${item.url}/`);
	});
	return /* @__PURE__ */ jsx("div", {
		"data-header-tabs": "",
		className: cn("flex h-10 flex-row items-end gap-6 overflow-x-auto border-b px-4 md:px-6 max-lg:hidden", className),
		children: items.map((item, i) => {
			const active = selectedIdx === i;
			if (item.unlisted && !active) return null;
			return /* @__PURE__ */ jsx(Link, {
				to: item.url,
				className: cn("inline-flex items-center gap-2 border-b-2 border-transparent pb-1.5 text-sm font-medium text-nowrap text-fd-muted-foreground transition-colors hover:text-fd-accent-foreground", active && "border-fd-primary text-fd-primary"),
				children: item.title
			}, item.url);
		})
	});
}
function HeaderShell({ brand, end, secondary, forDocs = false, className, children, ...props }) {
	const hasSecondary = Boolean(secondary);
	return /* @__PURE__ */ jsxs("header", {
		...props,
		className: cn("sticky top-0 z-40 flex flex-col border-b bg-fd-background/80 backdrop-blur-lg", forDocs && cn("[grid-area:header] top-(--fd-docs-row-1) z-10 layout:[--fd-header-height:--spacing(14)]", hasSecondary && "lg:layout:[--fd-header-height:--spacing(24)]"), !forDocs && "h-auto", className),
		children: [
			/* @__PURE__ */ jsxs("div", {
				"data-header-body": "",
				className: cn("flex h-14 w-full items-center px-4", forDocs ? "md:px-6" : "mx-auto max-w-(--fd-layout-width)"),
				children: [/* @__PURE__ */ jsx("div", {
					className: "flex items-center gap-2",
					children: brand
				}), /* @__PURE__ */ jsx("div", {
					className: "ms-auto flex flex-row items-center justify-end gap-1.5",
					children: end
				})]
			}),
			secondary,
			children
		]
	});
}
/**
* 全站顶栏
*/
function AppHeader({ sectionNav = false, ...props }) {
	if (sectionNav) return /* @__PURE__ */ jsx(DocsAppHeader, { ...props });
	return /* @__PURE__ */ jsx(HomeAppHeader, { ...props });
}
/**
* 顶栏右侧工具统一顺序：
* 搜索 → 语言 → 主题 → GitHub 等 icon → 侧栏（仅文档）
*/
function HomeAppHeader(props) {
	const { slots, navItems } = useHomeLayout();
	const iconLinks = navItems.filter(isIconLink);
	return /* @__PURE__ */ jsx(HeaderShell, {
		id: "nd-nav",
		...props,
		className: cn(props.className),
		brand: slots.navTitle ? /* @__PURE__ */ jsx(slots.navTitle, { className: "inline-flex items-center gap-2.5 font-semibold" }) : void 0,
		end: /* @__PURE__ */ jsxs(Fragment, { children: [slots.searchTrigger ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(slots.searchTrigger.full, {
			hideIfDisabled: true,
			className: "w-full max-w-[240px] rounded-full ps-2.5 max-lg:hidden"
		}), /* @__PURE__ */ jsx(slots.searchTrigger.sm, {
			hideIfDisabled: true,
			className: "p-2 lg:hidden"
		})] }) : null, /* @__PURE__ */ jsxs("div", {
			className: "flex flex-row items-center gap-1.5 max-lg:hidden",
			children: [
				slots.languageSelect ? /* @__PURE__ */ jsx(slots.languageSelect.root, { children: /* @__PURE__ */ jsx(Languages, { className: "size-4.5 text-fd-muted-foreground" }) }) : null,
				slots.themeSwitch ? /* @__PURE__ */ jsx(slots.themeSwitch, {}) : null,
				iconLinks.map((item, i) => /* @__PURE__ */ jsx(LinkItem, {
					item,
					className: iconLinkClassName,
					"aria-label": item.label,
					children: item.icon
				}, i))
			]
		})] })
	});
}
function DocsAppHeader(props) {
	const { slots, navItems, isNavTransparent, props: { tabs, sidebar } } = useNotebookLayout();
	const { open } = slots.sidebar?.useSidebar?.() ?? {};
	const sidebarCollapsible = sidebar?.collapsible ?? true;
	const iconLinks = navItems.filter(isIconLink);
	const showSecondary = tabs.length > 0;
	return /* @__PURE__ */ jsx(HeaderShell, {
		id: "nd-subnav",
		forDocs: true,
		"data-transparent": isNavTransparent && !open,
		...props,
		className: cn("transition-colors data-[transparent=true]:bg-transparent data-[transparent=false]:bg-fd-background/80", props.className),
		brand: slots.navTitle ? /* @__PURE__ */ jsx(slots.navTitle, { className: "inline-flex items-center gap-2.5 font-semibold" }) : void 0,
		end: /* @__PURE__ */ jsxs(Fragment, { children: [
			slots.searchTrigger ? /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(slots.searchTrigger.full, {
				hideIfDisabled: true,
				className: "my-auto w-full max-w-[240px] rounded-full ps-2.5 max-md:hidden"
			}), /* @__PURE__ */ jsx(slots.searchTrigger.sm, {
				hideIfDisabled: true,
				className: "p-2 md:hidden"
			})] }) : null,
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-1.5 max-md:hidden",
				children: [
					slots.languageSelect ? /* @__PURE__ */ jsx(slots.languageSelect.root, { children: /* @__PURE__ */ jsx(Languages, { className: "size-4.5 text-fd-muted-foreground" }) }) : null,
					slots.themeSwitch ? /* @__PURE__ */ jsx(slots.themeSwitch, {}) : null,
					iconLinks.map((item, i) => /* @__PURE__ */ jsx(LinkItem, {
						item,
						className: iconLinkClassName,
						"aria-label": item.label,
						children: item.icon
					}, i)),
					sidebarCollapsible && slots.sidebar ? /* @__PURE__ */ jsx(slots.sidebar.collapseTrigger, {
						className: cn(buttonVariants$1({
							color: "secondary",
							size: "icon-sm"
						}), "rounded-full text-fd-muted-foreground -me-1.5"),
						children: /* @__PURE__ */ jsx(Sidebar, {})
					}) : null
				]
			}),
			slots.sidebar ? /* @__PURE__ */ jsx(slots.sidebar.trigger, {
				className: cn(buttonVariants$1({
					color: "ghost",
					size: "icon-sm",
					className: "p-2 -me-1.5"
				}), "md:hidden"),
				children: /* @__PURE__ */ jsx(Sidebar, {})
			}) : null
		] }),
		secondary: showSecondary ? /* @__PURE__ */ jsx(DocsSectionNav, { items: tabs.map((tab) => ({
			title: tab.title,
			url: tab.url,
			unlisted: tab.unlisted
		})) }) : null
	});
}
//#endregion
//#region components/layout/site-layouts.tsx
/** slots.header 必须在 Client 内赋 FC，不能从 Server 传函数或 nav.component */
function HomeHeaderSlot(props) {
	return /* @__PURE__ */ jsx(AppHeader, { ...props });
}
function DocsHeaderSlot(props) {
	return /* @__PURE__ */ jsx(AppHeader, {
		...props,
		sectionNav: true
	});
}
function SiteHomeLayout({ slots, ...props }) {
	return /* @__PURE__ */ jsx(HomeLayout, {
		...props,
		slots: {
			...slots,
			header: HomeHeaderSlot
		}
	});
}
function SiteDocsLayout({ slots, ...props }) {
	return /* @__PURE__ */ jsx(DocsLayout, {
		...props,
		slots: {
			...slots,
			header: DocsHeaderSlot
		}
	});
}
//#endregion
//#region app/routes/home.tsx
var home_exports = /* @__PURE__ */ __exportAll$1({
	default: () => home_default,
	meta: () => meta$1
});
var docEntries = [
	{
		title: "使用 XBase 开发功能",
		audience: "适合 XMenu 与跨版本功能开发",
		description: "查看玩家、载具、世界、UI、输入等统一接口，以及不同游戏中的能力支持情况。",
		href: `${docsRoute}/xbase`,
		action: "打开 XBase 文档",
		icon: Box,
		accent: "bg-sky-500/10 text-sky-700 dark:text-sky-300"
	},
	{
		title: "编写 C++ ASI 插件",
		audience: "适合 plugin-sdk 开发者",
		description: "查找游戏事件、实体 API、函数调用、内存补丁和常用插件开发方式。",
		href: `${docsRoute}/plugins`,
		action: "打开插件文档",
		icon: Cpu,
		accent: "bg-amber-500/10 text-amber-700 dark:text-amber-300"
	},
	{
		title: "编写 CLEO 脚本",
		audience: "适合 OP、Lua 与 Redux 用户",
		description: "按游戏和扩展查找 opcode，核对参数，并查看对应的 Lua 与 Redux 写法。",
		href: `${docsRoute}/cleo`,
		action: "打开 CLEO 文档",
		icon: Terminal,
		accent: "bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-300"
	},
	{
		title: "让开发助手理解项目",
		audience: "适合使用 Cursor 等开发工具",
		description: "安装项目 Skill，让开发助手按照正确的 API、版本边界和工程约束协助编码。",
		href: `${docsRoute}/skill`,
		action: "查看 Skill 用法",
		icon: ShieldCheck,
		accent: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
	}
];
var gameEntries = [
	{
		code: "III",
		title: "GTA III",
		atmosphere: "Liberty City · 工业蓝灰",
		description: "查阅 GTA III 可用的 CLEO 命令与类型。",
		href: `${docsRoute}/cleo/gta3`,
		icon: Map$1,
		className: "border-slate-300 bg-gradient-to-br from-slate-50 to-slate-200/70 dark:border-slate-700 dark:from-slate-900 dark:to-slate-800/70",
		codeClassName: "text-slate-500 dark:text-slate-400"
	},
	{
		code: "VC",
		title: "Vice City",
		atmosphere: "Ocean Beach · 霓虹与海岸",
		description: "查阅 Vice City 可用的 CLEO 命令与类型。",
		href: `${docsRoute}/cleo/vc`,
		icon: Code2,
		className: "border-fuchsia-200 bg-gradient-to-br from-pink-50 via-fuchsia-50 to-cyan-50 dark:border-fuchsia-900/70 dark:from-fuchsia-950/50 dark:via-slate-900 dark:to-cyan-950/40",
		codeClassName: "text-fuchsia-500 dark:text-fuchsia-300"
	},
	{
		code: "SA",
		title: "San Andreas",
		atmosphere: "Los Santos · 街区与公路",
		description: "从 SA 实体 API 开始编写更完整的插件功能。",
		href: `${docsRoute}/plugins/entities`,
		icon: Route,
		className: "border-amber-200 bg-gradient-to-br from-amber-50 via-lime-50/70 to-stone-100 dark:border-amber-900/70 dark:from-amber-950/40 dark:via-green-950/30 dark:to-stone-900",
		codeClassName: "text-amber-600 dark:text-amber-300"
	}
];
var startSteps = [
	{
		title: "先确定开发方式",
		description: "跨版本宿主功能使用 XBase；原生 C++ 插件使用 plugin-sdk；游戏脚本使用 CLEO。"
	},
	{
		title: "再选择目标游戏",
		description: "III、VC 与 SA 的接口和能力并不完全相同，请在对应版本范围内查阅。"
	},
	{
		title: "最后核对示例与边界",
		description: "复制代码前确认签名、生命周期与失败条件，避免把不同技术栈的示例混在一起。"
	}
];
function meta$1() {
	return [{ title: siteTitle }, {
		name: "description",
		content: "GTA 三部曲开发文档 · XBase、plugin-sdk、CLEO 与 Agent Skill（III / VC / SA）"
	}];
}
var home_default = UNSAFE_withComponentProps(function HomePage() {
	return /* @__PURE__ */ jsx(SiteHomeLayout, {
		...baseOptions(),
		children: /* @__PURE__ */ jsxs("main", {
			className: "min-h-screen overflow-hidden bg-fd-background text-fd-foreground",
			children: [
				/* @__PURE__ */ jsxs("section", {
					className: "relative isolate border-b border-fd-border",
					children: [
						/* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_12%_16%,rgba(14,165,233,.12),transparent_32%),radial-gradient(circle_at_88%_20%,rgba(217,70,239,.1),transparent_30%),radial-gradient(circle_at_65%_90%,rgba(132,204,22,.08),transparent_32%)] dark:opacity-90" }),
						/* @__PURE__ */ jsx("div", { className: "gta-city-grid absolute inset-0 -z-10 opacity-50" }),
						/* @__PURE__ */ jsxs("div", {
							className: "mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_.85fr] lg:px-10 lg:py-28",
							children: [/* @__PURE__ */ jsxs("div", { children: [
								/* @__PURE__ */ jsx("p", {
									className: "text-sm font-medium text-fd-muted-foreground",
									children: siteTitle
								}),
								/* @__PURE__ */ jsxs("h1", {
									className: "mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.035em] sm:text-6xl",
									children: ["找到你需要的 GTA", /* @__PURE__ */ jsx("span", {
										className: "block bg-gradient-to-r from-sky-600 via-fuchsia-600 to-amber-600 bg-clip-text text-transparent dark:from-sky-300 dark:via-fuchsia-300 dark:to-amber-300",
										children: "三部曲开发资料"
									})]
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-6 max-w-2xl text-base leading-7 text-fd-muted-foreground sm:text-lg",
									children: "无论你在编写 C++ 插件、CLEO 脚本，还是基于 XBase 开发跨版本功能，都可以从这里找到对应的接口说明、代码示例和版本差异。"
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-8 flex flex-wrap gap-3",
									children: [/* @__PURE__ */ jsxs(Link, {
										to: docsRoute,
										className: "inline-flex items-center gap-2 rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground shadow-sm transition hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-ring",
										children: [/* @__PURE__ */ jsx(BookOpen, { className: "size-4" }), "开始阅读"]
									}), /* @__PURE__ */ jsxs(Link, {
										to: "https://github.com/GTANext/docs",
										className: "inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card/70 px-5 py-2.5 text-sm font-medium transition hover:bg-fd-accent hover:text-fd-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-ring",
										children: [/* @__PURE__ */ jsx(Bug, { className: "size-4" }), "提交&反馈"]
									})]
								})
							] }), /* @__PURE__ */ jsxs("div", {
								className: "rounded-3xl border border-fd-border bg-fd-card/75 p-5 shadow-xl shadow-black/5 backdrop-blur-sm dark:shadow-black/20 sm:p-7",
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-sm font-medium",
									children: "我应该从哪里开始？"
								}), /* @__PURE__ */ jsx("div", {
									className: "mt-5 space-y-5",
									children: startSteps.map((step, index) => /* @__PURE__ */ jsxs("div", {
										className: "flex gap-4",
										children: [/* @__PURE__ */ jsx("span", {
											className: "flex size-8 shrink-0 items-center justify-center rounded-full bg-fd-primary/10 text-sm font-semibold text-fd-primary",
											children: index + 1
										}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
											className: "text-sm font-medium",
											children: step.title
										}), /* @__PURE__ */ jsx("p", {
											className: "mt-1 text-sm leading-6 text-fd-muted-foreground",
											children: step.description
										})] })]
									}, step.title))
								})]
							})]
						})
					]
				}),
				/* @__PURE__ */ jsxs("section", {
					className: "mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20",
					children: [/* @__PURE__ */ jsx(SectionTitle, {
						eyebrow: "按你的目标选择",
						title: "你今天想做什么？",
						description: "不必先理解所有工具。选择最接近当前任务的入口，再按文档逐步深入。"
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-8 grid gap-4 sm:grid-cols-2",
						children: docEntries.map((entry) => /* @__PURE__ */ jsx(DocCard, { ...entry }, entry.href))
					})]
				}),
				/* @__PURE__ */ jsx("section", {
					className: "border-y border-fd-border bg-fd-muted/25",
					children: /* @__PURE__ */ jsxs("div", {
						className: "mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20",
						children: [/* @__PURE__ */ jsx(SectionTitle, {
							eyebrow: "按游戏浏览",
							title: "选择你正在开发的游戏",
							description: "每款游戏都有自己的接口范围。按目标游戏进入，可以减少版本不匹配带来的问题。"
						}), /* @__PURE__ */ jsx("div", {
							className: "mt-8 grid gap-5 lg:grid-cols-3",
							children: gameEntries.map((entry) => /* @__PURE__ */ jsx(GameCard, { ...entry }, entry.code))
						})]
					})
				}),
				/* @__PURE__ */ jsx("section", {
					className: "mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20",
					children: /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col items-start justify-between gap-6 rounded-3xl border border-fd-border bg-fd-card p-7 sm:flex-row sm:items-center sm:p-9",
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("p", {
								className: "text-sm font-medium text-fd-primary",
								children: "给开发助手使用"
							}),
							/* @__PURE__ */ jsx("h2", {
								className: "mt-2 text-2xl font-semibold tracking-tight",
								children: "让 AI Agent 按照本站文档协助开发"
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 max-w-2xl text-sm leading-6 text-fd-muted-foreground",
								children: "安装 GTAMODX Skill 后，开发助手会区分 XBase、plugin-sdk 与 CLEO，并在生成代码前核对版本和 API 边界。"
							})
						] }), /* @__PURE__ */ jsxs(Link, {
							to: `${docsRoute}/skill`,
							className: "inline-flex shrink-0 items-center gap-2 rounded-lg border border-fd-border px-4 py-2.5 text-sm font-medium transition hover:bg-fd-accent hover:text-fd-accent-foreground",
							children: ["查看安装方法", /* @__PURE__ */ jsx(ArrowRight, { className: "size-4" })]
						})]
					})
				})
			]
		})
	});
});
function DocCard({ title, audience, description, href, action, icon: Icon, accent }) {
	return /* @__PURE__ */ jsxs(Link, {
		to: href,
		className: "group flex min-h-52 flex-col rounded-2xl border border-fd-border bg-fd-card/70 p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-fd-primary/30 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-ring",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-start justify-between gap-4",
				children: [/* @__PURE__ */ jsx("span", {
					className: `flex size-11 items-center justify-center rounded-xl ${accent}`,
					children: /* @__PURE__ */ jsx(Icon, { className: "size-5" })
				}), /* @__PURE__ */ jsx(ArrowRight, { className: "size-4 text-fd-muted-foreground transition group-hover:translate-x-1 group-hover:text-fd-foreground" })]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-6",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "text-xs font-medium text-fd-muted-foreground",
						children: audience
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "mt-2 text-xl font-semibold tracking-tight",
						children: title
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-3 text-sm leading-6 text-fd-muted-foreground",
						children: description
					})
				]
			}),
			/* @__PURE__ */ jsx("span", {
				className: "mt-auto pt-5 text-sm font-medium text-fd-primary",
				children: action
			})
		]
	});
}
function GameCard({ code, title, atmosphere, description, href, icon: Icon, className, codeClassName }) {
	return /* @__PURE__ */ jsxs(Link, {
		to: href,
		className: `group relative min-h-64 overflow-hidden rounded-2xl border p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-ring ${className}`,
		children: [/* @__PURE__ */ jsx("div", { className: "gta-road-lines pointer-events-none absolute inset-0 opacity-50" }), /* @__PURE__ */ jsxs("div", {
			className: "relative flex h-full flex-col",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-start justify-between",
				children: [/* @__PURE__ */ jsx("span", {
					className: `text-5xl font-semibold tracking-[-0.07em] ${codeClassName}`,
					children: code
				}), /* @__PURE__ */ jsx(Icon, { className: "size-5 text-fd-muted-foreground" })]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-auto pt-16",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "text-xs font-medium text-fd-muted-foreground",
						children: atmosphere
					}),
					/* @__PURE__ */ jsx("h3", {
						className: "mt-2 text-xl font-semibold",
						children: title
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-2 text-sm leading-6 text-fd-muted-foreground",
						children: description
					}),
					/* @__PURE__ */ jsxs("span", {
						className: "mt-4 inline-flex items-center gap-2 text-sm font-medium",
						children: ["进入文档", /* @__PURE__ */ jsx(ArrowRight, { className: "size-4 transition group-hover:translate-x-1" })]
					})
				]
			})]
		})]
	});
}
function SectionTitle({ eyebrow, title, description }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "max-w-2xl",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "text-sm font-medium text-fd-primary",
				children: eyebrow
			}),
			/* @__PURE__ */ jsx("h2", {
				className: "mt-2 text-3xl font-semibold tracking-tight sm:text-4xl",
				children: title
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mt-4 leading-7 text-fd-muted-foreground",
				children: description
			})
		]
	});
}
//#endregion
//#region node_modules/.pnpm/fumadocs-mdx@15.2.0_@types+mdast@4.0.4_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-_90849500dae805d7f2e77f6293e16471/node_modules/fumadocs-mdx/dist/runtime/browser.js
function browser() {
	return { doc(_name, glob) {
		return {
			raw: glob,
			createClientLoader({ id = _name, ...options }) {
				return createClientLoader(this.raw, {
					id,
					...options
				});
			}
		};
	} };
}
var loaderStore = /* @__PURE__ */ new Map();
function createClientLoader(globEntries, options) {
	const { id = "", component: useRenderer } = options;
	const renderers = {};
	const loaders = /* @__PURE__ */ new Map();
	const store = loaderStore.get(id) ?? { preloaded: /* @__PURE__ */ new Map() };
	loaderStore.set(id, store);
	for (const k in globEntries) loaders.set(k.startsWith("./") ? k.slice(2) : k, globEntries[k]);
	function getLoader(path) {
		const loader = loaders.get(path);
		if (!loader) throw new Error(`[createClientLoader] ${path} does not exist in available entries`);
		return loader;
	}
	function getRenderer(path) {
		if (path in renderers) return renderers[path];
		let promise;
		function Renderer(props) {
			let doc = store.preloaded.get(path);
			doc ??= use(promise ??= getLoader(path)());
			return useRenderer(doc, props);
		}
		return renderers[path] = Renderer;
	}
	return {
		async preload(path) {
			const loaded = await getLoader(path)();
			store.preloaded.set(path, loaded);
			return loaded;
		},
		getComponent(path) {
			return getRenderer(path);
		},
		useContent(path, props) {
			return /* @__PURE__ */ jsx(getRenderer(path), { ...props });
		}
	};
}
//#endregion
//#region .source/browser.ts
var browserCollections = { docs: browser().doc("docs", /* #__PURE__ */ Object.assign({
	"./cleo/gta3/arith.mdx": () => import("./assets/arith-BHZvvIib.js"),
	"./cleo/gta3/dll.mdx": () => import("./assets/dll-C4_Ywv_Z.js"),
	"./cleo/gta3/entity.mdx": () => import("./assets/entity-B-twMcHS.js"),
	"./cleo/gta3/file.mdx": () => import("./assets/file-mPoXlqIf.js"),
	"./cleo/gta3/game.mdx": () => import("./assets/game-c42xsJxv.js"),
	"./cleo/gta3/index.mdx": () => import("./assets/gta3-CHgGBCba.js"),
	"./cleo/gta3/math.mdx": () => import("./assets/math-CSO_Y8KT.js"),
	"./cleo/gta3/memory.mdx": () => import("./assets/memory-Be21ifJD.js"),
	"./cleo/gta3/misc.mdx": () => import("./assets/misc-Bs6nWGm-.js"),
	"./cleo/gta3/script.mdx": () => import("./assets/script-DXV5AYN-.js"),
	"./cleo/gta3/text.mdx": () => import("./assets/text-DDTw2bnL.js"),
	"./cleo/index.mdx": () => import("./assets/cleo-BuC-2Xuz.js"),
	"./cleo/sa/arith.mdx": () => import("./assets/arith-QBHp-TW_.js"),
	"./cleo/sa/default/attractor.mdx": () => import("./assets/attractor-53cbAXGB.js"),
	"./cleo/sa/default/audio.mdx": () => import("./assets/audio-CQuYiVqS.js"),
	"./cleo/sa/default/blip.mdx": () => import("./assets/blip-GpqMHHfE.js"),
	"./cleo/sa/default/boat.mdx": () => import("./assets/boat-BNSPArkt.js"),
	"./cleo/sa/default/camera.mdx": () => import("./assets/camera-0HxjDpzR.js"),
	"./cleo/sa/default/car.mdx": () => import("./assets/car-CS-HGxp4.js"),
	"./cleo/sa/default/cargenerator.mdx": () => import("./assets/cargenerator-esdYP98U.js"),
	"./cleo/sa/default/char.mdx": () => import("./assets/char-DcRC9V2h.js"),
	"./cleo/sa/default/checkpoint.mdx": () => import("./assets/checkpoint-DFbcfBU-.js"),
	"./cleo/sa/default/clock.mdx": () => import("./assets/clock-hhYyPNn1.js"),
	"./cleo/sa/default/conversation.mdx": () => import("./assets/conversation-B72QNJOA.js"),
	"./cleo/sa/default/crane.mdx": () => import("./assets/crane-DEHwmpQB.js"),
	"./cleo/sa/default/cutscene.mdx": () => import("./assets/cutscene-EE0efEWv.js"),
	"./cleo/sa/default/debugger.mdx": () => import("./assets/debugger-BdbmYLWo.js"),
	"./cleo/sa/default/decisionmaker.mdx": () => import("./assets/decisionmaker-B3k4Q06a.js"),
	"./cleo/sa/default/decisionmakerchar.mdx": () => import("./assets/decisionmakerchar-D42egq5M.js"),
	"./cleo/sa/default/decisionmakergroup.mdx": () => import("./assets/decisionmakergroup-NvuauMad.js"),
	"./cleo/sa/default/fx.mdx": () => import("./assets/fx-BNmcjfqD.js"),
	"./cleo/sa/default/game.mdx": () => import("./assets/game-CKESK2xl.js"),
	"./cleo/sa/default/gang.mdx": () => import("./assets/gang-Bk2yl_de.js"),
	"./cleo/sa/default/garage.mdx": () => import("./assets/garage-DN2MVpCA.js"),
	"./cleo/sa/default/group.mdx": () => import("./assets/group-Cyq-LhL3.js"),
	"./cleo/sa/default/heli.mdx": () => import("./assets/heli-CZ8kV5mg.js"),
	"./cleo/sa/default/hud.mdx": () => import("./assets/hud-D6jMLZps.js"),
	"./cleo/sa/default/index.mdx": () => import("./assets/default-DcJHsMYA.js"),
	"./cleo/sa/default/math.mdx": () => import("./assets/math-CPFChYHh.js"),
	"./cleo/sa/default/menu.mdx": () => import("./assets/menu-SNm1vlYI.js"),
	"./cleo/sa/default/misc.mdx": () => import("./assets/misc-Dl2KI22Z.js"),
	"./cleo/sa/default/mission.mdx": () => import("./assets/mission-C3IjtUqm.js"),
	"./cleo/sa/default/mouse.mdx": () => import("./assets/mouse-Cw9eW_lX.js"),
	"./cleo/sa/default/object.mdx": () => import("./assets/object-C6EzB7Sg.js"),
	"./cleo/sa/default/pad.mdx": () => import("./assets/pad-zkYvnwUI.js"),
	"./cleo/sa/default/particle.mdx": () => import("./assets/particle-BL-j7rV0.js"),
	"./cleo/sa/default/path.mdx": () => import("./assets/path-BhCMJe0H.js"),
	"./cleo/sa/default/pickup.mdx": () => import("./assets/pickup-DhRSbHLv.js"),
	"./cleo/sa/default/plane.mdx": () => import("./assets/plane-un7F9JR8.js"),
	"./cleo/sa/default/player.mdx": () => import("./assets/player-BqkcmHTI.js"),
	"./cleo/sa/default/rc.mdx": () => import("./assets/rc-D5P3gJ0L.js"),
	"./cleo/sa/default/restart.mdx": () => import("./assets/restart-DeQ0F024.js"),
	"./cleo/sa/default/scriptfire.mdx": () => import("./assets/scriptfire-CsSh2Rf4.js"),
	"./cleo/sa/default/searchlight.mdx": () => import("./assets/searchlight-Bxm5g4-H.js"),
	"./cleo/sa/default/sequence.mdx": () => import("./assets/sequence-DZLNU5GJ.js"),
	"./cleo/sa/default/shopping.mdx": () => import("./assets/shopping-DEmozUsX.js"),
	"./cleo/sa/default/skip.mdx": () => import("./assets/skip-2r_wV4HE.js"),
	"./cleo/sa/default/sound.mdx": () => import("./assets/sound-CEYe98yF.js"),
	"./cleo/sa/default/sphere.mdx": () => import("./assets/sphere-CYBF2CkG.js"),
	"./cleo/sa/default/stat.mdx": () => import("./assets/stat-CnyOv_Z_.js"),
	"./cleo/sa/default/streamedscript.mdx": () => import("./assets/streamedscript-BeuRTllY.js"),
	"./cleo/sa/default/streaming.mdx": () => import("./assets/streaming-C7m7Yia1.js"),
	"./cleo/sa/default/stuckcarcheck.mdx": () => import("./assets/stuckcarcheck-C0AQNf-T.js"),
	"./cleo/sa/default/task.mdx": () => import("./assets/task-Bi5AJQsS.js"),
	"./cleo/sa/default/text.mdx": () => import("./assets/text-DgQbVhPy.js"),
	"./cleo/sa/default/trailer.mdx": () => import("./assets/trailer-Itw05iV8.js"),
	"./cleo/sa/default/train.mdx": () => import("./assets/train-LQRpcKAD.js"),
	"./cleo/sa/default/txd.mdx": () => import("./assets/txd-DWZi0eOK.js"),
	"./cleo/sa/default/user3dmarker.mdx": () => import("./assets/user3dmarker-0xu2LMpa.js"),
	"./cleo/sa/default/weapon.mdx": () => import("./assets/weapon-Bcj4RjJG.js"),
	"./cleo/sa/default/weather.mdx": () => import("./assets/weather-DPUwtd76.js"),
	"./cleo/sa/default/world.mdx": () => import("./assets/world-BwlVUl-J.js"),
	"./cleo/sa/default/zone.mdx": () => import("./assets/zone-B5z03n9I.js"),
	"./cleo/sa/dll.mdx": () => import("./assets/dll-Dhg7lKZq.js"),
	"./cleo/sa/entity.mdx": () => import("./assets/entity-BVCXLhTq.js"),
	"./cleo/sa/ext/audio.mdx": () => import("./assets/audio-_RaUYcXm.js"),
	"./cleo/sa/ext/bitwise.mdx": () => import("./assets/bitwise-o-7OjD0D.js"),
	"./cleo/sa/ext/clipboard.mdx": () => import("./assets/clipboard-CtJWytxH.js"),
	"./cleo/sa/ext/debug.mdx": () => import("./assets/debug-tE2cr-A9.js"),
	"./cleo/sa/ext/file.mdx": () => import("./assets/file-Cybi5u2v.js"),
	"./cleo/sa/ext/imgui/index.mdx": () => import("./assets/imgui-D2HBkWAu.js"),
	"./cleo/sa/ext/index.mdx": () => import("./assets/ext-BgySq_0A.js"),
	"./cleo/sa/ext/ini.mdx": () => import("./assets/ini-DSDVjj-k.js"),
	"./cleo/sa/ext/input.mdx": () => import("./assets/input-DY9ChyWv.js"),
	"./cleo/sa/ext/math.mdx": () => import("./assets/math-BO9xOyQG.js"),
	"./cleo/sa/ext/memory.mdx": () => import("./assets/memory-D94Gnv4X.js"),
	"./cleo/sa/ext/newopcodes/atomic.mdx": () => import("./assets/atomic-D_09Vg4Q.js"),
	"./cleo/sa/ext/newopcodes/draw.mdx": () => import("./assets/draw-BbzybtgJ.js"),
	"./cleo/sa/ext/newopcodes/entity.mdx": () => import("./assets/entity-uEEqEa0d.js"),
	"./cleo/sa/ext/newopcodes/fx.mdx": () => import("./assets/fx-BpXrx1F_.js"),
	"./cleo/sa/ext/newopcodes/index.mdx": () => import("./assets/newopcodes-CC5umtt0.js"),
	"./cleo/sa/ext/newopcodes/matrix.mdx": () => import("./assets/matrix-BM7sQqjL.js"),
	"./cleo/sa/ext/newopcodes/misc.mdx": () => import("./assets/misc--VvruMha.js"),
	"./cleo/sa/ext/newopcodes/print.mdx": () => import("./assets/print-38socWAN.js"),
	"./cleo/sa/ext/newopcodes/texture.mdx": () => import("./assets/texture-cZI-R3rC.js"),
	"./cleo/sa/ext/newopcodes/vehicle.mdx": () => import("./assets/vehicle-D-TH8u9J.js"),
	"./cleo/sa/ext/sampfuncs/car.mdx": () => import("./assets/car-DlEe4YdM.js"),
	"./cleo/sa/ext/sampfuncs/char.mdx": () => import("./assets/char-BYfA73qQ.js"),
	"./cleo/sa/ext/sampfuncs/index.mdx": () => import("./assets/sampfuncs-CP88JgVo.js"),
	"./cleo/sa/ext/sampfuncs/misc.mdx": () => import("./assets/misc-FqVECwNg.js"),
	"./cleo/sa/ext/sampfuncs/object.mdx": () => import("./assets/object-BCEuJ_up.js"),
	"./cleo/sa/ext/sampfuncs/pickup.mdx": () => import("./assets/pickup-oCn_NjT-.js"),
	"./cleo/sa/ext/sampfuncs/sampbitstream.mdx": () => import("./assets/sampbitstream-Getf2-Qh.js"),
	"./cleo/sa/ext/sampfuncs/sampchat.mdx": () => import("./assets/sampchat-Bxi6jEKZ.js"),
	"./cleo/sa/ext/sampfuncs/sampchatinput.mdx": () => import("./assets/sampchatinput-DG2wWVkM.js"),
	"./cleo/sa/ext/sampfuncs/sampclient.mdx": () => import("./assets/sampclient-xr6DIjUb.js"),
	"./cleo/sa/ext/sampfuncs/samplocalchatcmd.mdx": () => import("./assets/samplocalchatcmd-BZ_rRmXj.js"),
	"./cleo/sa/ext/sampfuncs/sampmyplayer.mdx": () => import("./assets/sampmyplayer-B6aefK92.js"),
	"./cleo/sa/ext/sampfuncs/sampplayer.mdx": () => import("./assets/sampplayer-C1BLaqvv.js"),
	"./cleo/sa/ext/sampfuncs/sampraknet.mdx": () => import("./assets/sampraknet-C851FXko.js"),
	"./cleo/sa/ext/sampfuncs/samptextdraw.mdx": () => import("./assets/samptextdraw-DevLPQgJ.js"),
	"./cleo/sa/ext/sampfuncs/samptextlabel3d.mdx": () => import("./assets/samptextlabel3d-DNKsLzMw.js"),
	"./cleo/sa/ext/sampfuncs/sf.mdx": () => import("./assets/sf-DMcaRLZM.js"),
	"./cleo/sa/ext/sampfuncs/sfconsole.mdx": () => import("./assets/sfconsole-CPCknidP.js"),
	"./cleo/sa/ext/sampfuncs/sfd3d.mdx": () => import("./assets/sfd3d-C8SkjPZm.js"),
	"./cleo/sa/ext/sampfuncs/sfd3dfont.mdx": () => import("./assets/sfd3dfont-Biszz6If.js"),
	"./cleo/sa/ext/sampfuncs/sfd3dtexture.mdx": () => import("./assets/sfd3dtexture-BfrILvsm.js"),
	"./cleo/sa/ext/sampfuncs/sfdownload.mdx": () => import("./assets/sfdownload-nSPgS_it.js"),
	"./cleo/sa/ext/sampfuncs/sfdxutdialog.mdx": () => import("./assets/sfdxutdialog-C4Naanhf.js"),
	"./cleo/sa/ext/sampfuncs/sfgfunc.mdx": () => import("./assets/sfgfunc-3HR2uOch.js"),
	"./cleo/sa/ext/sampfuncs/sfgvar.mdx": () => import("./assets/sfgvar-Bs-T7_7Q.js"),
	"./cleo/sa/ext/sampfuncs/sfscript.mdx": () => import("./assets/sfscript-DoSUuLEW.js"),
	"./cleo/sa/ext/sampfuncs/sftimer.mdx": () => import("./assets/sftimer-1F7Rn9B_.js"),
	"./cleo/sa/ext/sphere.mdx": () => import("./assets/sphere-DeRBFhrT.js"),
	"./cleo/sa/ext/text.mdx": () => import("./assets/text-BwEFnNLB.js"),
	"./cleo/sa/file.mdx": () => import("./assets/file-C5LXHnyB.js"),
	"./cleo/sa/game.mdx": () => import("./assets/game-CgaTyRgQ.js"),
	"./cleo/sa/math.mdx": () => import("./assets/math-DExYqyPP.js"),
	"./cleo/sa/memory.mdx": () => import("./assets/memory-CWOP-shz.js"),
	"./cleo/sa/misc.mdx": () => import("./assets/misc-KVjJ3o1C.js"),
	"./cleo/sa/plus/audio.mdx": () => import("./assets/audio-BOusv9ux.js"),
	"./cleo/sa/plus/blip.mdx": () => import("./assets/blip-DXp2vlXD.js"),
	"./cleo/sa/plus/camera.mdx": () => import("./assets/camera-Cqi4CySo.js"),
	"./cleo/sa/plus/clipboard.mdx": () => import("./assets/clipboard-DH6AWFH2.js"),
	"./cleo/sa/plus/clock.mdx": () => import("./assets/clock-DZg2OQ-Z.js"),
	"./cleo/sa/plus/colpoint.mdx": () => import("./assets/colpoint-Dow8zzKI.js"),
	"./cleo/sa/plus/dll.mdx": () => import("./assets/dll-BAJpvgsK.js"),
	"./cleo/sa/plus/entity-car.mdx": () => import("./assets/entity-car-L80muOiu.js"),
	"./cleo/sa/plus/entity-char.mdx": () => import("./assets/entity-char-CddZihd_.js"),
	"./cleo/sa/plus/entity-object.mdx": () => import("./assets/entity-object-B6xIdQQX.js"),
	"./cleo/sa/plus/entity-world.mdx": () => import("./assets/entity-world-DzkTL2_p.js"),
	"./cleo/sa/plus/entity.mdx": () => import("./assets/entity-BAXcVktk.js"),
	"./cleo/sa/plus/fx.mdx": () => import("./assets/fx-Ctef66oU.js"),
	"./cleo/sa/plus/game.mdx": () => import("./assets/game-GYeXMoRz.js"),
	"./cleo/sa/plus/hud.mdx": () => import("./assets/hud-DVLU8Uqg.js"),
	"./cleo/sa/plus/index.mdx": () => import("./assets/plus-Dk1qfsK0.js"),
	"./cleo/sa/plus/list.mdx": () => import("./assets/list-CLGlR65f.js"),
	"./cleo/sa/plus/math.mdx": () => import("./assets/math-t6UM3F4W.js"),
	"./cleo/sa/plus/matrix.mdx": () => import("./assets/matrix-D6mwQK_5.js"),
	"./cleo/sa/plus/memory.mdx": () => import("./assets/memory-CcY2uwzh.js"),
	"./cleo/sa/plus/misc.mdx": () => import("./assets/misc-BGofxS4n.js"),
	"./cleo/sa/plus/mouse.mdx": () => import("./assets/mouse-CsFxta-X.js"),
	"./cleo/sa/plus/pad.mdx": () => import("./assets/pad-CUKyMuQi.js"),
	"./cleo/sa/plus/pickup.mdx": () => import("./assets/pickup-B13MRHUD.js"),
	"./cleo/sa/plus/render.mdx": () => import("./assets/render-BHJ7tGYN.js"),
	"./cleo/sa/plus/script.mdx": () => import("./assets/script-CbONhlPw.js"),
	"./cleo/sa/plus/streaming.mdx": () => import("./assets/streaming-ColK1Vtf.js"),
	"./cleo/sa/plus/text.mdx": () => import("./assets/text-CZ7rWDcb.js"),
	"./cleo/sa/plus/txd.mdx": () => import("./assets/txd-DvB9oVyt.js"),
	"./cleo/sa/plus/weapon.mdx": () => import("./assets/weapon-EO4Aeg0r.js"),
	"./cleo/sa/script.mdx": () => import("./assets/script-DY8YCvym.js"),
	"./cleo/syntax-redux.mdx": () => import("./assets/syntax-redux-CBCIEAR4.js"),
	"./cleo/syntax.mdx": () => import("./assets/syntax-1ukrNXcm.js"),
	"./cleo/vc/arith.mdx": () => import("./assets/arith-jJxBsRzR.js"),
	"./cleo/vc/dll.mdx": () => import("./assets/dll-CYNyUtkl.js"),
	"./cleo/vc/entity.mdx": () => import("./assets/entity-BF5-_Z-g.js"),
	"./cleo/vc/file.mdx": () => import("./assets/file-CLvHLOfp.js"),
	"./cleo/vc/game.mdx": () => import("./assets/game-Br9Kbr5s.js"),
	"./cleo/vc/index.mdx": () => import("./assets/vc-D38xS0_X.js"),
	"./cleo/vc/math.mdx": () => import("./assets/math-DfEPhKPo.js"),
	"./cleo/vc/memory.mdx": () => import("./assets/memory-BTKc-Mk1.js"),
	"./cleo/vc/misc.mdx": () => import("./assets/misc-BBAfOi-O.js"),
	"./cleo/vc/script.mdx": () => import("./assets/script-CExvy-Gy.js"),
	"./cleo/vc/text.mdx": () => import("./assets/text-DA1bPftL.js"),
	"./index.mdx": () => import("./assets/docs-CxUukqBR.js"),
	"./plugins/commands.mdx": () => import("./assets/commands-i6f67cKA.js"),
	"./plugins/entities/anim.mdx": () => import("./assets/anim-BKa6YfYE.js"),
	"./plugins/entities/audio-engine.mdx": () => import("./assets/audio-engine-6doKwXWs.js"),
	"./plugins/entities/camera.mdx": () => import("./assets/camera-B_i_rLfs.js"),
	"./plugins/entities/car-ctrl.mdx": () => import("./assets/car-ctrl-Dx-UkIqS.js"),
	"./plugins/entities/coverage.mdx": () => import("./assets/coverage-DAeay_7D.js"),
	"./plugins/entities/draw.mdx": () => import("./assets/draw-4PvG5NZs.js"),
	"./plugins/entities/entity.mdx": () => import("./assets/entity-BOHeZgMv.js"),
	"./plugins/entities/entry-exit.mdx": () => import("./assets/entry-exit-BNWpRslW.js"),
	"./plugins/entities/explosion.mdx": () => import("./assets/explosion-BPbcPwUN.js"),
	"./plugins/entities/file-mgr.mdx": () => import("./assets/file-mgr-C9PV_V7q.js"),
	"./plugins/entities/fire.mdx": () => import("./assets/fire-COv-WFGX.js"),
	"./plugins/entities/font.mdx": () => import("./assets/font-B44GfSY0.js"),
	"./plugins/entities/game.mdx": () => import("./assets/game-a8v08fA5.js"),
	"./plugins/entities/hud-messages.mdx": () => import("./assets/hud-messages-CofuXTF5.js"),
	"./plugins/entities/index.mdx": () => import("./assets/entities-B4b71FeJ.js"),
	"./plugins/entities/markers.mdx": () => import("./assets/markers-DxNoH_9y.js"),
	"./plugins/entities/menu.mdx": () => import("./assets/menu-B0HsURmM.js"),
	"./plugins/entities/model-info.mdx": () => import("./assets/model-info--N_4bvCa.js"),
	"./plugins/entities/object.mdx": () => import("./assets/object-BsxHDQ31.js"),
	"./plugins/entities/pad.mdx": () => import("./assets/pad-CfkRP2dK.js"),
	"./plugins/entities/pathfind.mdx": () => import("./assets/pathfind-BIdWuNlf.js"),
	"./plugins/entities/ped.mdx": () => import("./assets/ped-BrQ3Y-Uo.js"),
	"./plugins/entities/physical.mdx": () => import("./assets/physical-Z36BTyZK.js"),
	"./plugins/entities/pickups.mdx": () => import("./assets/pickups-BhmxJuPv.js"),
	"./plugins/entities/placeable.mdx": () => import("./assets/placeable-CBOPVlgb.js"),
	"./plugins/entities/player-info.mdx": () => import("./assets/player-info-DfOUD4aq.js"),
	"./plugins/entities/player-ped.mdx": () => import("./assets/player-ped-dgfY5Ip_.js"),
	"./plugins/entities/player.mdx": () => import("./assets/player-BVK2Z3O8.js"),
	"./plugins/entities/pools.mdx": () => import("./assets/pools-CTs9OHTm.js"),
	"./plugins/entities/population.mdx": () => import("./assets/population-BSK4w1gI.js"),
	"./plugins/entities/projectile.mdx": () => import("./assets/projectile-a_krhb_a.js"),
	"./plugins/entities/radar.mdx": () => import("./assets/radar-C2n6KGBE.js"),
	"./plugins/entities/scripts.mdx": () => import("./assets/scripts-Dxc8bLyC.js"),
	"./plugins/entities/shadows.mdx": () => import("./assets/shadows-WQo2dHKI.js"),
	"./plugins/entities/sprite2d.mdx": () => import("./assets/sprite2d-CCOuenIy.js"),
	"./plugins/entities/stats.mdx": () => import("./assets/stats-CBrZWT3l.js"),
	"./plugins/entities/streaming.mdx": () => import("./assets/streaming-Cv4AO3IN.js"),
	"./plugins/entities/time-cycle.mdx": () => import("./assets/time-cycle-CTWwIgd5.js"),
	"./plugins/entities/timer.mdx": () => import("./assets/timer-CQcLgbuf.js"),
	"./plugins/entities/txd-store.mdx": () => import("./assets/txd-store-BkegSlmh.js"),
	"./plugins/entities/vehicle.mdx": () => import("./assets/vehicle-DJOm8LwH.js"),
	"./plugins/entities/wanted.mdx": () => import("./assets/wanted-B6syQleb.js"),
	"./plugins/entities/water.mdx": () => import("./assets/water-bu1PtOoL.js"),
	"./plugins/entities/weapon.mdx": () => import("./assets/weapon-pAbQgSxX.js"),
	"./plugins/entities/world-state.mdx": () => import("./assets/world-state-Bs25rGOU.js"),
	"./plugins/entities/world.mdx": () => import("./assets/world-TmTEMgGP.js"),
	"./plugins/events.mdx": () => import("./assets/events-Jirkr-ej.js"),
	"./plugins/extender.mdx": () => import("./assets/extender-l7lSPvvK.js"),
	"./plugins/extensions/config.mdx": () => import("./assets/config-D36rLiXS.js"),
	"./plugins/extensions/font.mdx": () => import("./assets/font-B8ay7TpV.js"),
	"./plugins/extensions/index.mdx": () => import("./assets/extensions-DM1-uhBB.js"),
	"./plugins/extensions/keycheck.mdx": () => import("./assets/keycheck-COlJYDRQ.js"),
	"./plugins/extensions/paths.mdx": () => import("./assets/paths-kOlRKYp6.js"),
	"./plugins/extensions/pool-iterator.mdx": () => import("./assets/pool-iterator-CI__ivQc.js"),
	"./plugins/extensions/screen.mdx": () => import("./assets/screen-C2oCwKTO.js"),
	"./plugins/index.mdx": () => import("./assets/plugins-HZntkhs5.js"),
	"./plugins/patch.mdx": () => import("./assets/patch-CLd8xR8W.js"),
	"./plugins/pattern.mdx": () => import("./assets/pattern-VI2uYxpQ.js"),
	"./plugins/plugin-base.mdx": () => import("./assets/plugin-base-DULgjeJL.js"),
	"./plugins/recipes.mdx": () => import("./assets/recipes-DdqSxnH_.js"),
	"./plugins/utils/audio.mdx": () => import("./assets/audio-CFfUEVjl.js"),
	"./plugins/utils/image-sprite.mdx": () => import("./assets/image-sprite-CbTGmGGW.js"),
	"./plugins/utils/index.mdx": () => import("./assets/utils-BDP7YBpj.js"),
	"./plugins/utils/math-color-timer.mdx": () => import("./assets/math-color-timer-B8IvCtvx.js"),
	"./plugins/utils/other.mdx": () => import("./assets/other-DafYqEQK.js"),
	"./plugins/utils/shader.mdx": () => import("./assets/shader-CrYpURH0.js"),
	"./plugins/utils/text-error.mdx": () => import("./assets/text-error-DtRMxTi0.js"),
	"./plugins/utils/version-address.mdx": () => import("./assets/version-address-C5BP9laZ.js"),
	"./skill/cleo-dev.mdx": () => import("./assets/cleo-dev-CJJP0gca.js"),
	"./skill/index.mdx": () => import("./assets/skill-ncHL9JdJ.js"),
	"./skill/plugins-dev.mdx": () => import("./assets/plugins-dev-CEkdlUSD.js"),
	"./skill/xbase-dev.mdx": () => import("./assets/xbase-dev-C2oJfBR0.js"),
	"./xbase/bullet-assist.mdx": () => import("./assets/bullet-assist-Drhki_mB.js"),
	"./xbase/camera.mdx": () => import("./assets/camera-B-t5RcWD.js"),
	"./xbase/cheats.mdx": () => import("./assets/cheats-Cu-EnDfI.js"),
	"./xbase/config.mdx": () => import("./assets/config-Demomk76.js"),
	"./xbase/core.mdx": () => import("./assets/core-DkEOAE66.js"),
	"./xbase/hooks.mdx": () => import("./assets/hooks-DkfSMD32.js"),
	"./xbase/host-integration.mdx": () => import("./assets/host-integration-CaWcC3Hi.js"),
	"./xbase/hotkey.mdx": () => import("./assets/hotkey-BXlpj9lZ.js"),
	"./xbase/i18n.mdx": () => import("./assets/i18n-QBk3qEhP.js"),
	"./xbase/index.mdx": () => import("./assets/xbase-Bb0lbsfa.js"),
	"./xbase/json.mdx": () => import("./assets/json-ClbxQhxp.js"),
	"./xbase/log.mdx": () => import("./assets/log-nb178W60.js"),
	"./xbase/overlay.mdx": () => import("./assets/overlay-DNEsc_2E.js"),
	"./xbase/ped.mdx": () => import("./assets/ped-DU-z1Nqt.js"),
	"./xbase/player.mdx": () => import("./assets/player-DJ81-YhV.js"),
	"./xbase/scene.mdx": () => import("./assets/scene-DgpemeA-.js"),
	"./xbase/teleport.mdx": () => import("./assets/teleport-zZIAPn74.js"),
	"./xbase/theme.mdx": () => import("./assets/theme-CeIVPkS-.js"),
	"./xbase/types.mdx": () => import("./assets/types-eI3Y8Ens.js"),
	"./xbase/ui.mdx": () => import("./assets/ui-DyrhEAZj.js"),
	"./xbase/vehicle-effects.mdx": () => import("./assets/vehicle-effects-DFE-Fgd5.js"),
	"./xbase/vehicle.mdx": () => import("./assets/vehicle-CLWc7g71.js"),
	"./xbase/version.mdx": () => import("./assets/version-D7VgHGZ8.js"),
	"./xbase/visual.mdx": () => import("./assets/visual-DZr7FCBK.js"),
	"./xbase/weapon.mdx": () => import("./assets/weapon--C8Vxj5s.js"),
	"./xbase/web-bridge.mdx": () => import("./assets/web-bridge-DxQc3cvR.js"),
	"./xbase/webview.mdx": () => import("./assets/webview-C_sviExC.js"),
	"./xbase/world.mdx": () => import("./assets/world-Co1at2KJ.js")
})) };
//#endregion
//#region node_modules/.pnpm/fumadocs-core@16.11.5_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.5_@type_72cb31c98dbdcd9237f5eec6550b9329/node_modules/fumadocs-core/dist/source/client/index.js
function deserializePageTree(serialized) {
	const root = serialized.data;
	visit$1(root, (item) => {
		if ("icon" in item && typeof item.icon === "string") item.icon = /* @__PURE__ */ jsx("span", { dangerouslySetInnerHTML: { __html: item.icon } });
		if (typeof item.name === "string") item.name = /* @__PURE__ */ jsx("span", {
			className: "fd-page-tree-item-name",
			dangerouslySetInnerHTML: { __html: item.name }
		});
	});
	return root;
}
/**
* Deserialize loader data that is serialized by the server-side Fumadocs `loader()`, supported:
* - Page Tree
*
* other unrelated properties are kept in the output.
*/
function useFumadocsLoader(serialized) {
	return useMemo(() => {
		const out = {};
		for (const k in serialized) {
			const v = serialized[k];
			if (isSerializedPageTree(v)) out[k] = deserializePageTree(v);
			else out[k] = v;
		}
		return out;
	}, [serialized]);
}
function isSerializedPageTree(v) {
	return typeof v === "object" && v !== null && "$fumadocs_loader" in v && v.$fumadocs_loader === "page-tree";
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/utils/use-copy-button.js
function useCopyButton(onCopy) {
	const [checked, setChecked] = useState(false);
	const callbackRef = useRef(onCopy);
	const timeoutRef = useRef(null);
	callbackRef.current = onCopy;
	const onClick = useCallback(() => {
		if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
		Promise.resolve(callbackRef.current()).then(() => {
			setChecked(true);
			timeoutRef.current = window.setTimeout(() => {
				setChecked(false);
			}, 1500);
		});
	}, []);
	useEffect(() => {
		return () => {
			if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
		};
	}, []);
	return [checked, onClick];
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/layouts/shared/page-actions.js
var cache$1 = /* @__PURE__ */ new Map();
/**
* see https://fumadocs.dev/docs/integrations/llms#page-actions to customize.
*/
function MarkdownCopyButton({ markdownUrl, ...props }) {
	const t = useTranslations({ note: "page actions" });
	const [isLoading, setLoading] = useState(false);
	const [checked, onClick] = useCopyButton(async () => {
		const cached = cache$1.get(markdownUrl);
		if (cached) return navigator.clipboard.writeText(await cached);
		setLoading(true);
		try {
			const promise = fetch(withBasePath(markdownUrl)).then((res) => res.text());
			cache$1.set(markdownUrl, promise);
			await navigator.clipboard.write([new ClipboardItem({ "text/plain": promise })]);
		} finally {
			setLoading(false);
		}
	});
	return /* @__PURE__ */ jsxs("button", {
		disabled: isLoading,
		onClick,
		...props,
		className: cn$1(buttonVariants$1({
			color: "secondary",
			size: "sm",
			className: "gap-2 [&_svg]:size-3.5 [&_svg]:text-fd-muted-foreground"
		}), props.className),
		children: [checked ? /* @__PURE__ */ jsx(Check, {}) : /* @__PURE__ */ jsx(Copy, {}), props.children ?? t("Copy Markdown")]
	});
}
/**
* see https://fumadocs.dev/docs/integrations/llms#page-actions to customize.
*/
function ViewOptionsPopover({ markdownUrl, githubUrl, ...props }) {
	const pathname = usePathname();
	const t = useTranslations({ note: "page actions" });
	const items = useMemo(() => {
		const pageUrl = typeof window === "undefined" ? pathname : new URL(pathname, window.location.origin);
		const q = t("Read {url}, I want to ask questions about it.", { variables: { url: String(pageUrl) } });
		return [
			githubUrl && {
				title: t("Open in GitHub"),
				href: githubUrl,
				icon: /* @__PURE__ */ jsxs("svg", {
					fill: "currentColor",
					role: "img",
					viewBox: "0 0 24 24",
					children: [/* @__PURE__ */ jsx("title", { children: "GitHub" }), /* @__PURE__ */ jsx("path", { d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" })]
				})
			},
			markdownUrl && {
				title: t("View as Markdown"),
				href: withBasePath(markdownUrl),
				icon: /* @__PURE__ */ jsx(TextIcon, {})
			},
			{
				title: t("Open in Scira AI"),
				href: `https://scira.ai/?${new URLSearchParams({ q })}`,
				icon: /* @__PURE__ */ jsxs("svg", {
					width: "910",
					height: "934",
					viewBox: "0 0 910 934",
					fill: "none",
					xmlns: "http://www.w3.org/2000/svg",
					children: [
						/* @__PURE__ */ jsx("title", { children: "Scira AI" }),
						/* @__PURE__ */ jsx("path", {
							d: "M647.664 197.775C569.13 189.049 525.5 145.419 516.774 66.8849C508.048 145.419 464.418 189.049 385.884 197.775C464.418 206.501 508.048 250.131 516.774 328.665C525.5 250.131 569.13 206.501 647.664 197.775Z",
							fill: "currentColor",
							stroke: "currentColor",
							strokeWidth: "8",
							strokeLinejoin: "round"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M516.774 304.217C510.299 275.491 498.208 252.087 480.335 234.214C462.462 216.341 439.058 204.251 410.333 197.775C439.059 191.3 462.462 179.209 480.335 161.336C498.208 143.463 510.299 120.06 516.774 91.334C523.25 120.059 535.34 143.463 553.213 161.336C571.086 179.209 594.49 191.3 623.216 197.775C594.49 204.251 571.086 216.341 553.213 234.214C535.34 252.087 523.25 275.491 516.774 304.217Z",
							fill: "currentColor",
							stroke: "currentColor",
							strokeWidth: "8",
							strokeLinejoin: "round"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M857.5 508.116C763.259 497.644 710.903 445.288 700.432 351.047C689.961 445.288 637.605 497.644 543.364 508.116C637.605 518.587 689.961 570.943 700.432 665.184C710.903 570.943 763.259 518.587 857.5 508.116Z",
							stroke: "currentColor",
							strokeWidth: "20",
							strokeLinejoin: "round"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M700.432 615.957C691.848 589.05 678.575 566.357 660.383 548.165C642.191 529.973 619.499 516.7 592.593 508.116C619.499 499.533 642.191 486.258 660.383 468.066C678.575 449.874 691.848 427.181 700.432 400.274C709.015 427.181 722.289 449.874 740.481 468.066C758.673 486.258 781.365 499.533 808.271 508.116C781.365 516.7 758.673 529.973 740.481 548.165C722.289 566.357 709.015 589.05 700.432 615.957Z",
							stroke: "currentColor",
							strokeWidth: "20",
							strokeLinejoin: "round"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M889.949 121.237C831.049 114.692 798.326 81.9698 791.782 23.0692C785.237 81.9698 752.515 114.692 693.614 121.237C752.515 127.781 785.237 160.504 791.782 219.404C798.326 160.504 831.049 127.781 889.949 121.237Z",
							fill: "currentColor",
							stroke: "currentColor",
							strokeWidth: "8",
							strokeLinejoin: "round"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M791.782 196.795C786.697 176.937 777.869 160.567 765.16 147.858C752.452 135.15 736.082 126.322 716.226 121.237C736.082 116.152 752.452 107.324 765.16 94.6152C777.869 81.9065 786.697 65.5368 791.782 45.6797C796.867 65.5367 805.695 81.9066 818.403 94.6152C831.112 107.324 847.481 116.152 867.338 121.237C847.481 126.322 831.112 135.15 818.403 147.858C805.694 160.567 796.867 176.937 791.782 196.795Z",
							fill: "currentColor",
							stroke: "currentColor",
							strokeWidth: "8",
							strokeLinejoin: "round"
						}),
						/* @__PURE__ */ jsx("path", {
							d: "M760.632 764.337C720.719 814.616 669.835 855.1 611.872 882.692C553.91 910.285 490.404 924.255 426.213 923.533C362.022 922.812 298.846 907.419 241.518 878.531C184.19 849.643 134.228 808.026 95.4548 756.863C56.6815 705.7 30.1238 646.346 17.8129 583.343C5.50207 520.339 7.76433 455.354 24.4266 393.359C41.089 331.364 71.7099 274.001 113.947 225.658C156.184 177.315 208.919 139.273 268.117 114.442",
							stroke: "currentColor",
							strokeWidth: "30",
							strokeLinecap: "round",
							strokeLinejoin: "round"
						})
					]
				})
			},
			{
				title: t("Open in ChatGPT"),
				href: `https://chatgpt.com/?${new URLSearchParams({
					prompt: q,
					hints: "search"
				})}`,
				icon: /* @__PURE__ */ jsxs("svg", {
					role: "img",
					viewBox: "0 0 24 24",
					fill: "currentColor",
					xmlns: "http://www.w3.org/2000/svg",
					children: [/* @__PURE__ */ jsx("title", { children: "OpenAI" }), /* @__PURE__ */ jsx("path", { d: "M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" })]
				})
			},
			{
				title: t("Open in Claude"),
				href: `https://claude.ai/new?${new URLSearchParams({ q })}`,
				icon: /* @__PURE__ */ jsxs("svg", {
					fill: "currentColor",
					role: "img",
					viewBox: "0 0 24 24",
					xmlns: "http://www.w3.org/2000/svg",
					children: [/* @__PURE__ */ jsx("title", { children: "Anthropic" }), /* @__PURE__ */ jsx("path", { d: "M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.5409Zm-.3712 10.2232 2.2914-5.9456 2.2914 5.9456Z" })]
				})
			},
			{
				title: t("Open in Cursor"),
				icon: /* @__PURE__ */ jsxs("svg", {
					fill: "currentColor",
					role: "img",
					viewBox: "0 0 24 24",
					xmlns: "http://www.w3.org/2000/svg",
					children: [/* @__PURE__ */ jsx("title", { children: "Cursor" }), /* @__PURE__ */ jsx("path", { d: "M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0M2.657 6.338h18.55c.263 0 .43.287.297.515L12.23 22.918c-.062.107-.229.064-.229-.06V12.335a.59.59 0 0 0-.295-.51l-9.11-5.257c-.109-.063-.064-.23.061-.23" })]
				}),
				href: `https://cursor.com/link/prompt?${new URLSearchParams({ text: q })}`
			}
		].filter((v) => !!v);
	}, [
		githubUrl,
		markdownUrl,
		pathname,
		t
	]);
	return /* @__PURE__ */ jsxs(Popover, { children: [/* @__PURE__ */ jsxs(PopoverTrigger, {
		...props,
		className: (state) => cn$1(buttonVariants$1({
			color: "secondary",
			size: "sm"
		}), "gap-2 data-[popup-open]:bg-fd-accent data-[popup-open]:text-fd-accent-foreground", typeof props.className === "function" ? props.className(state) : props.className),
		children: [props.children ?? t("Open"), /* @__PURE__ */ jsx(ChevronDown, { className: "size-3.5 text-fd-muted-foreground" })]
	}), /* @__PURE__ */ jsx(PopoverContent, {
		className: "flex flex-col",
		children: items.map((item) => /* @__PURE__ */ jsxs("a", {
			href: item.href,
			rel: "noreferrer noopener",
			target: "_blank",
			className: "text-sm p-2 rounded-lg inline-flex items-center gap-2 hover:text-fd-accent-foreground hover:bg-fd-accent [&_svg]:size-4",
			children: [
				item.icon,
				item.title,
				/* @__PURE__ */ jsx(ExternalLinkIcon, { className: "text-fd-muted-foreground size-3.5 ms-auto" })
			]
		}, item.href))
	})] });
}
function withBasePath(href) {
	if (href.match(/^\w+:/) || href.startsWith("//")) return href;
	return "/".replace(/\/$/, "") + href;
}
//#endregion
//#region node_modules/.pnpm/fumadocs-core@16.11.5_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.5_@type_72cb31c98dbdcd9237f5eec6550b9329/node_modules/fumadocs-core/dist/toc.js
var toc_exports = /* @__PURE__ */ __exportAll$1({
	AnchorProvider: () => AnchorProvider,
	ScrollProvider: () => ScrollProvider,
	TOCItem: () => TOCItem$2,
	useActiveAnchor: () => useActiveAnchor$1,
	useActiveAnchors: () => useActiveAnchors$1,
	useItems: () => useItems$1,
	useTOC: () => useTOC,
	useTOCListener: () => useTOCListener,
	useTOCSelector: () => useTOCSelector
});
function mergeRefs(...refs) {
	return (value) => {
		refs.forEach((ref) => {
			if (typeof ref === "function") ref(value);
			else if (ref != null) ref.current = value;
		});
	};
}
var ObserverContext = createContext(null);
var ScrollContext = createContext(null);
/** Optional: add auto-scroll to TOC items. */
function ScrollProvider({ containerRef, children }) {
	return /* @__PURE__ */ jsx(ScrollContext, {
		value: containerRef,
		children
	});
}
function AnchorProvider({ toc, single = false, children }) {
	const observer = useMemo(() => new Observer(), []);
	observer.single = single;
	useEffect(() => {
		observer.setItems(toc);
	}, [observer, toc]);
	useEffect(() => {
		observer.watch({ threshold: .9 });
		return () => observer.unwatch();
	}, [observer]);
	return /* @__PURE__ */ jsx(ObserverContext, {
		value: observer,
		children
	});
}
function TOCItem$2({ ref, onActiveChange = () => null, ...props }) {
	const id = props.href ? getItemId(props.href) : null;
	const containerRef = use(ScrollContext);
	const anchorRef = useRef(null);
	const observer = useObserver();
	const [active, setActive] = useState(() => observer.items.some((item) => item.id === id && item.active));
	function autoScroll(items, instant = false) {
		const anchor = anchorRef.current;
		const container = containerRef?.current;
		if (!id || !anchor || !container) return;
		let lastActive;
		for (const item of items) {
			if (!item.active) continue;
			if (!lastActive || lastActive.t < item.t) lastActive = item;
		}
		if (lastActive?.id === id) e(anchor, {
			behavior: instant ? "instant" : "smooth",
			block: "center",
			inline: "center",
			scrollMode: "always",
			boundary: container
		});
	}
	useTOCListener((items) => {
		const itemData = id ? items.find((item) => item.id === id) : null;
		if (itemData && itemData.active !== active) {
			setActive(itemData.active);
			onActiveChange(itemData.active);
			autoScroll(items);
		}
	});
	useEffect(() => {
		autoScroll(observer.items, true);
	}, [observer]);
	return /* @__PURE__ */ jsx("a", {
		ref: mergeRefs(anchorRef, ref),
		"data-active": active,
		...props
	});
}
function useObserver() {
	const observer = use(ObserverContext);
	if (!observer) throw new Error(`Component must be used under the <AnchorProvider /> component.`);
	return observer;
}
/** @returns static info object, useful for custom rendering logic */
function useTOC() {
	const observer = useObserver();
	return useMemo(() => ({
		get() {
			return observer.items;
		},
		listen: observer.listen.bind(observer),
		unlisten: observer.unlisten.bind(observer)
	}), [observer]);
}
function useTOCListener(listener) {
	const observer = useObserver();
	const callback = useEffectEvent(listener);
	useEffect(() => {
		observer.listen(callback);
		return () => observer.unlisten(callback);
	}, [observer]);
}
function useTOCSelector(select, isEqual = isEqualShallow) {
	const observer = useObserver();
	const [value, setValue] = useState(() => select(observer.items));
	useTOCListener((items) => {
		const next = select(items);
		if (!isEqual(value, next)) setValue(next);
	});
	return value;
}
/**
* The estimated active heading ID
*/
function useActiveAnchor$1() {
	return useTOCSelector((items) => {
		let out;
		for (const item of items) {
			if (!item.active) continue;
			if (!out || item.t > out.t) out = item;
		}
		return out?.id;
	});
}
/**
* The id of visible anchors
*/
function useActiveAnchors$1() {
	return useTOCSelector((items) => {
		const out = [];
		for (const item of items) if (item.active) out.push(item.id);
		return out;
	});
}
function useItems$1() {
	return useTOCSelector((items) => items);
}
function getItemId(url) {
	if (url.startsWith("#")) return url.slice(1);
	return null;
}
var Observer = class {
	constructor() {
		this.items = [];
		this.single = false;
		this.observer = null;
		this.listeners = /* @__PURE__ */ new Set();
	}
	listen(listener) {
		this.listeners.add(listener);
	}
	unlisten(listener) {
		this.listeners.delete(listener);
	}
	setItems(newItems) {
		const observer = this.observer;
		if (observer) for (const item of this.items) {
			const element = document.getElementById(item.id);
			if (!element) continue;
			observer.unobserve(element);
		}
		const next = [];
		for (const item of newItems) {
			const id = getItemId(item.url);
			if (!id) continue;
			next.push({
				id,
				active: false,
				fallback: false,
				t: 0,
				original: item
			});
		}
		this.update(next);
		this.observeItems();
	}
	watch(options) {
		if (this.observer) return;
		this.observer = new IntersectionObserver(this.callback.bind(this), options);
		this.observeItems();
	}
	unwatch() {
		this.observer?.disconnect();
		this.observer = null;
	}
	callback(entries) {
		if (entries.length === 0) return;
		let hasActive = false;
		const updated = this.items.map((item) => {
			const entry = entries.find((entry) => entry.target.id === item.id);
			let active = entry ? entry.isIntersecting : item.active && !item.fallback;
			if (this.single && hasActive) active = false;
			if (item.active !== active) item = {
				...item,
				t: Date.now(),
				active,
				fallback: false
			};
			if (active) hasActive = true;
			return item;
		});
		if (!hasActive && entries[0].rootBounds) {
			const viewTop = entries[0].rootBounds.top;
			let min = Number.MAX_VALUE;
			let fallbackIdx = -1;
			for (let i = 0; i < updated.length; i++) {
				const element = document.getElementById(updated[i].id);
				if (!element) continue;
				const d = Math.abs(viewTop - element.getBoundingClientRect().top);
				if (d < min) {
					fallbackIdx = i;
					min = d;
				}
			}
			if (fallbackIdx !== -1) updated[fallbackIdx] = {
				...updated[fallbackIdx],
				active: true,
				fallback: true,
				t: Date.now()
			};
		}
		this.update(updated);
	}
	observeItems() {
		if (!this.observer) return;
		for (const item of this.items) {
			const element = document.getElementById(item.id);
			if (!element) continue;
			this.observer.observe(element);
		}
	}
	update(next) {
		this.items = next;
		for (const listener of this.listeners) listener(next);
	}
};
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/components/toc/index.js
var TOCContext = createContext([]);
function useTOCItems() {
	return use(TOCContext);
}
var { useActiveAnchor, useActiveAnchors, useItems } = toc_exports;
function TOCProvider$1({ toc, children, ...props }) {
	return /* @__PURE__ */ jsx(TOCContext, {
		value: toc,
		children: /* @__PURE__ */ jsx(AnchorProvider, {
			toc,
			...props,
			children
		})
	});
}
function TOCScrollArea({ ref, className, ...props }) {
	const viewRef = useRef(null);
	return /* @__PURE__ */ jsx("div", {
		ref: mergeRefs$1(viewRef, ref),
		className: cn$1("relative min-h-0 text-sm ms-px overflow-auto [scrollbar-width:none] mask-[linear-gradient(to_bottom,transparent,white_16px,white_calc(100%-16px),transparent)] py-3", className),
		...props,
		children: /* @__PURE__ */ jsx(ScrollProvider, {
			containerRef: viewRef,
			children: props.children
		})
	});
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/components/toc/default.js
var default_exports = /* @__PURE__ */ __exportAll({
	TOCEmpty: () => TOCEmpty$1,
	TOCItem: () => TOCItem$1,
	TOCItems: () => TOCItems$1
});
function TOCItems$1({ ref, className, thumbBox = true, children, ...props }) {
	const containerRef = useRef(null);
	const items = useTOCItems();
	const [svg, setSvg] = useState(null);
	const onPrint = useCallback(() => {
		const container = containerRef.current;
		if (!container || container.clientHeight === 0) return;
		if (items.length === 0) {
			setSvg(null);
			return;
		}
		let w = 0;
		let h = 0;
		let d = "";
		const positions = [];
		const output = [];
		for (let i = 0; i < items.length; i++) {
			const item = items[i];
			const element = container.querySelector(`a[href="${item.url}"]`);
			if (!element) continue;
			const styles = getComputedStyle(element);
			const x = getLineOffset$1(item.depth) + .5;
			const top = element.offsetTop + parseFloat(styles.paddingTop);
			const bottom = element.offsetTop + element.clientHeight - parseFloat(styles.paddingBottom);
			w = Math.max(x + 8, w);
			h = Math.max(h, bottom);
			if (i === 0) d += ` M${x} ${top} L${x} ${bottom}`;
			else {
				const [, upperBottom, upperX] = i > 0 ? positions[i - 1] : [
					0,
					0,
					0
				];
				d += ` C ${upperX} ${top - 4} ${x} ${upperBottom + 4} ${x} ${top} L${x} ${bottom}`;
			}
			if (item._step !== void 0) output.push(/* @__PURE__ */ jsxs("g", {
				transform: `translate(${x}, ${(top + bottom) / 2})`,
				children: [/* @__PURE__ */ jsx("circle", {
					cx: "0",
					cy: "0",
					r: "8",
					className: "fill-fd-primary"
				}), /* @__PURE__ */ jsx("text", {
					cx: "0",
					cy: "0",
					textAnchor: "middle",
					alignmentBaseline: "central",
					dominantBaseline: "middle",
					className: "fill-fd-primary-foreground font-medium text-xs leading-none font-mono rtl:-scale-x-100",
					children: item._step
				})]
			}, i));
			positions.push([
				top,
				bottom,
				x
			]);
		}
		output.unshift(/* @__PURE__ */ jsx("path", {
			d,
			className: "stroke-fd-primary",
			strokeWidth: "1",
			fill: "none"
		}, "path"));
		const itemLineLengths = [];
		if (thumbBox) {
			const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
			path.setAttribute("d", d);
			const n = path.getTotalLength();
			for (let i = 0; i < positions.length; i++) {
				const [top, bottom] = positions[i];
				let l = i > 0 ? itemLineLengths[i - 1][1] + (top - positions[i - 1][1]) : top;
				while (l < n && path.getPointAtLength(l).y < top) l++;
				itemLineLengths.push([l, l + bottom - top]);
			}
		}
		setSvg({
			content: output,
			width: w,
			height: h,
			d,
			itemLineLengths,
			positions
		});
	}, [items, thumbBox]);
	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;
		const observer = new ResizeObserver(onPrint);
		observer.observe(container);
		onPrint();
		return () => {
			observer.unobserve(container);
		};
	}, [onPrint]);
	return /* @__PURE__ */ jsxs("div", {
		ref: mergeRefs$1(containerRef, ref),
		className: cn$1("relative flex flex-col", className),
		...props,
		children: [svg && /* @__PURE__ */ jsx(ThumbTrack$1, {
			computed: svg,
			thumbBox
		}), children]
	});
}
function TOCEmpty$1() {
	return /* @__PURE__ */ jsx("div", {
		className: "rounded-lg border bg-fd-card p-3 text-xs text-fd-muted-foreground",
		children: useTranslations({ note: "table of contents" })("No Headings")
	});
}
function ThumbTrack$1({ computed, thumbBox }) {
	const ref = useRef(null);
	const previousRef = useRef(null);
	const tocInfo = useTOC();
	function calculate(items) {
		const out = {};
		const startIdx = items.findIndex((item) => item.active);
		if (startIdx === -1) return out;
		const endIdx = items.findLastIndex((item) => item.active);
		out["--track-top"] = `${computed.positions[startIdx][0]}px`;
		out["--track-bottom"] = `${computed.positions[endIdx][1]}px`;
		if (thumbBox) {
			let isUp = false;
			if (previousRef.current) {
				const prev = previousRef.current;
				isUp = prev.startIdx > startIdx || prev.endIdx > endIdx || prev.startIdx === startIdx && prev.endIdx === endIdx && prev.isUp;
			}
			previousRef.current = {
				startIdx,
				endIdx,
				isUp
			};
			out["--offset-distance"] = isUp ? `${computed.itemLineLengths[startIdx][0]}px` : `${computed.itemLineLengths[endIdx][1]}px`;
			out["--opacity"] = items[isUp ? startIdx : endIdx].original._step !== void 0 ? "0" : "1";
		}
		return out;
	}
	useTOCListener((items) => {
		const element = ref.current;
		if (!element) return;
		for (const [k, v] of Object.entries(calculate(items))) element.style.setProperty(k, v);
	});
	return /* @__PURE__ */ jsxs("div", {
		ref,
		className: "absolute top-0 inset-s-0 origin-center rtl:-scale-x-100",
		style: {
			width: computed.width,
			height: computed.height,
			...calculate(tocInfo.get())
		},
		children: [/* @__PURE__ */ jsx("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: `0 0 ${computed.width} ${computed.height}`,
			className: "absolute transition-[clip-path]",
			style: {
				width: computed.width,
				height: computed.height,
				clipPath: `polygon(0 var(--track-top,0), 100% var(--track-top,0), 100% var(--track-bottom,0), 0 var(--track-bottom,0))`
			},
			children: computed.content
		}), thumbBox && /* @__PURE__ */ jsx("div", {
			className: "absolute left-0 size-1 bg-fd-primary rounded-full [offset-distance:var(--offset-distance,0)] opacity-(--opacity,0) transition-[opacity,offset-distance]",
			style: { offsetPath: `path("${computed.d}")` }
		})]
	});
}
var BASE$1 = 8;
function getItemOffset$1(depth) {
	if (depth <= 2) return 20;
	if (depth === 3) return 32;
	return 44;
}
function getLineOffset$1(depth) {
	if (depth <= 2) return BASE$1;
	if (depth === 3) return 16;
	return 24;
}
function TOCItem$1({ item, ...props }) {
	const items = useTOCItems();
	const { isFirst, isLast, svg } = useMemo(() => {
		const index = items.indexOf(item);
		const isFirst = index === 0;
		const isLast = index === items.length - 1;
		const l1 = getLineOffset$1(item.depth);
		const l0 = isFirst ? l1 : getLineOffset$1(items[index - 1].depth);
		const l2 = isLast ? l1 : getLineOffset$1(items[index + 1].depth);
		return {
			isFirst,
			isLast,
			svg: /* @__PURE__ */ jsxs("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				className: cn$1("absolute -top-1.5 inset-s-0 bottom-0 h-[calc(100%+--spacing(1.5))] -z-1 rtl:-scale-x-100", l1 !== l2 && "h-full bottom-1.5"),
				style: { width: Math.max(l0, l1) + 9 },
				children: [
					l0 !== l1 && /* @__PURE__ */ jsx("path", {
						d: `M ${l0 + .5} 0 C ${l0 + .5} 8 ${l1 + .5} 4 ${l1 + .5} 12`,
						stroke: "black",
						strokeWidth: "1",
						fill: "none",
						className: "stroke-fd-foreground/10"
					}),
					/* @__PURE__ */ jsx("line", {
						x1: l1 + .5,
						y1: l0 === l1 ? "6" : "12",
						x2: l1 + .5,
						y2: "100%",
						strokeWidth: "1",
						className: "stroke-fd-foreground/10"
					}),
					item._step !== void 0 && /* @__PURE__ */ jsxs("g", {
						transform: `translate(${l1 + .5}, ${l1 === l2 ? "3" : "6"})`,
						children: [/* @__PURE__ */ jsx("circle", {
							cx: "0",
							cy: "50%",
							r: "8",
							className: "fill-fd-muted"
						}), /* @__PURE__ */ jsx("text", {
							x: "0",
							y: "50%",
							textAnchor: "middle",
							alignmentBaseline: "central",
							dominantBaseline: "middle",
							className: "fill-fd-muted-foreground font-medium text-xs leading-none font-mono rtl:-scale-x-100",
							children: item._step
						})]
					})
				]
			})
		};
	}, [items, item]);
	return /* @__PURE__ */ jsxs(TOCItem$2, {
		href: item.url,
		...props,
		className: cn$1("prose relative py-1.5 text-sm scroll-m-4 text-fd-muted-foreground hover:text-fd-accent-foreground transition-colors wrap-anywhere data-[active=true]:text-fd-primary", isFirst && "pt-0", isLast && "pb-0", props.className),
		style: {
			paddingInlineStart: getItemOffset$1(item.depth),
			...props.style
		},
		children: [svg, item.title]
	});
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/components/toc/clerk.js
var clerk_exports = /* @__PURE__ */ __exportAll({
	TOCEmpty: () => TOCEmpty,
	TOCItem: () => TOCItem,
	TOCItems: () => TOCItems
});
function TOCItems({ ref, className, children, ...props }) {
	const containerRef = useRef(null);
	const items = useTOCItems();
	const [svg, setSvg] = useState(null);
	const onPrint = useCallback(() => {
		const container = containerRef.current;
		if (!container || container.clientHeight === 0) return;
		if (items.length === 0) {
			setSvg(null);
			return;
		}
		let w = 0;
		let h = 0;
		let d = "";
		const positions = [];
		const output = [];
		for (let i = 0; i < items.length; i++) {
			const item = items[i];
			const element = container.querySelector(`a[href="${item.url}"]`);
			if (!element) continue;
			const styles = getComputedStyle(element);
			const x = getLineOffset(item.depth) + .5;
			const top = element.offsetTop + parseFloat(styles.paddingTop);
			const bottom = element.offsetTop + element.clientHeight - parseFloat(styles.paddingBottom);
			w = Math.max(x + 8, w);
			h = Math.max(h, bottom);
			if (i === 0) d += ` M${x} ${top} L${x} ${bottom}`;
			else {
				const [, upperBottom, upperX] = i > 0 ? positions[i - 1] : [
					0,
					0,
					0
				];
				d += ` L ${upperX} ${upperBottom} ${x} ${top} L${x} ${bottom}`;
			}
			if (item._step !== void 0) output.push(/* @__PURE__ */ jsxs("g", {
				transform: `translate(${x}, ${(top + bottom) / 2})`,
				children: [/* @__PURE__ */ jsx("circle", {
					cx: "0",
					cy: "0",
					r: "8",
					className: "fill-fd-primary"
				}), /* @__PURE__ */ jsx("text", {
					cx: "0",
					cy: "0",
					textAnchor: "middle",
					alignmentBaseline: "central",
					dominantBaseline: "middle",
					className: "fill-fd-primary-foreground font-medium text-xs leading-none font-mono rtl:-scale-x-100",
					children: item._step
				})]
			}, i));
			positions.push([
				top,
				bottom,
				x
			]);
		}
		output.unshift(/* @__PURE__ */ jsx("path", {
			d,
			className: "stroke-fd-primary",
			strokeWidth: "1",
			fill: "none"
		}, "path"));
		setSvg({
			content: output,
			width: w,
			height: h,
			d,
			itemLineLengths: [],
			positions
		});
	}, [items]);
	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;
		const observer = new ResizeObserver(onPrint);
		observer.observe(container);
		onPrint();
		return () => {
			observer.unobserve(container);
		};
	}, [onPrint]);
	return /* @__PURE__ */ jsxs("div", {
		ref: mergeRefs$1(containerRef, ref),
		className: cn$1("relative flex flex-col", className),
		...props,
		children: [svg && /* @__PURE__ */ jsx(ThumbTrack, { computed: svg }), children]
	});
}
function TOCEmpty() {
	return /* @__PURE__ */ jsx("div", {
		className: "rounded-lg border bg-fd-card p-3 text-xs text-fd-muted-foreground",
		children: useTranslations({ note: "table of contents" })("No Headings")
	});
}
function ThumbTrack({ computed }) {
	const ref = useRef(null);
	const tocInfo = useTOC();
	function calculate(items) {
		const out = {};
		const startIdx = items.findIndex((item) => item.active);
		if (startIdx === -1) return out;
		const endIdx = items.findLastIndex((item) => item.active);
		out["--track-top"] = `${computed.positions[startIdx][0]}px`;
		out["--track-bottom"] = `${computed.positions[endIdx][1]}px`;
		return out;
	}
	useTOCListener((items) => {
		const element = ref.current;
		if (!element) return;
		for (const [k, v] of Object.entries(calculate(items))) element.style.setProperty(k, v);
	});
	return /* @__PURE__ */ jsx("div", {
		ref,
		className: "absolute top-0 inset-s-0 origin-center rtl:-scale-x-100",
		style: {
			width: computed.width,
			height: computed.height,
			...calculate(tocInfo.get())
		},
		children: /* @__PURE__ */ jsx("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: `0 0 ${computed.width} ${computed.height}`,
			className: "absolute transition-[clip-path]",
			style: {
				width: computed.width,
				height: computed.height,
				clipPath: `polygon(0 var(--track-top,0), 100% var(--track-top,0), 100% var(--track-bottom,0), 0 var(--track-bottom,0))`
			},
			children: computed.content
		})
	});
}
var BASE = 8;
function getItemOffset(depth) {
	if (depth <= 2) return 20;
	if (depth === 3) return 32;
	return 44;
}
function getLineOffset(depth) {
	if (depth <= 2) return BASE;
	if (depth === 3) return 20;
	return 32;
}
function TOCItem({ item, ...props }) {
	const items = useTOCItems();
	const { isFirst, isLast, svg } = useMemo(() => {
		const index = items.indexOf(item);
		const isFirst = index === 0;
		const isLast = index === items.length - 1;
		const l1 = getLineOffset(item.depth);
		const l0 = isFirst ? l1 : getLineOffset(items[index - 1].depth);
		const l2 = isLast ? l1 : getLineOffset(items[index + 1].depth);
		return {
			isFirst,
			isLast,
			svg: /* @__PURE__ */ jsxs("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				className: cn$1("absolute -top-1.5 inset-s-0 bottom-0 h-[calc(100%+--spacing(1.5))] -z-1 rtl:-scale-x-100", l1 !== l2 && "h-full bottom-1.5"),
				style: { width: Math.max(l0, l1) + 9 },
				children: [
					l0 !== l1 && /* @__PURE__ */ jsx("path", {
						d: `M ${l0 + .5} 0 L ${l0 + .5} 0 ${l1 + .5} 12`,
						stroke: "black",
						strokeWidth: "1",
						fill: "none",
						className: "stroke-fd-foreground/10"
					}),
					/* @__PURE__ */ jsx("line", {
						x1: l1 + .5,
						y1: l0 === l1 ? "6" : "12",
						x2: l1 + .5,
						y2: "100%",
						strokeWidth: "1",
						className: "stroke-fd-foreground/10"
					}),
					item._step !== void 0 && /* @__PURE__ */ jsxs("g", {
						transform: `translate(${l1 + .5}, ${l1 === l2 ? "3" : "6"})`,
						children: [/* @__PURE__ */ jsx("circle", {
							cx: "0",
							cy: "50%",
							r: "8",
							className: "fill-fd-muted"
						}), /* @__PURE__ */ jsx("text", {
							x: "0",
							y: "50%",
							textAnchor: "middle",
							alignmentBaseline: "central",
							dominantBaseline: "middle",
							className: "fill-fd-muted-foreground font-medium text-xs leading-none font-mono rtl:-scale-x-100",
							children: item._step
						})]
					})
				]
			})
		};
	}, [items, item]);
	return /* @__PURE__ */ jsxs(TOCItem$2, {
		href: item.url,
		...props,
		className: cn$1("prose relative py-1.5 text-sm scroll-m-4 text-fd-muted-foreground hover:text-fd-accent-foreground transition-colors wrap-anywhere data-[active=true]:text-fd-primary", isFirst && "pt-0", isLast && "pb-0", props.className),
		style: {
			paddingInlineStart: getItemOffset(item.depth),
			...props.style
		},
		children: [svg, item.title]
	});
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/layouts/notebook/page/slots/toc.js
function TOCProvider(props) {
	return /* @__PURE__ */ jsx(TOCProvider$1, { ...props });
}
function TOC({ container, header, footer, style = "normal", list }) {
	const t = useTranslations({ note: "table of contents" });
	const items = useTOCItems();
	const { TOCItems, TOCEmpty, TOCItem } = style === "clerk" ? clerk_exports : default_exports;
	if (items.length === 0 && !footer && !header) return /* @__PURE__ */ jsx("div", {
		id: "nd-toc-placeholder",
		className: "hidden xl:layout:[--fd-toc-width:268px]"
	});
	return /* @__PURE__ */ jsxs("div", {
		id: "nd-toc",
		...container,
		className: cn$1("sticky top-(--fd-docs-row-3) [grid-area:toc] h-[calc(var(--fd-docs-height)-var(--fd-docs-row-3))] flex flex-col w-(--fd-toc-width) pt-12 pe-4 pb-2 xl:layout:[--fd-toc-width:268px] max-xl:hidden", container?.className),
		children: [
			header,
			/* @__PURE__ */ jsxs("h3", {
				id: "toc-title",
				className: "inline-flex items-center gap-1.5 text-sm text-fd-muted-foreground",
				children: [/* @__PURE__ */ jsx(Text, { className: "size-4" }), t("On this page")]
			}),
			/* @__PURE__ */ jsx(TOCScrollArea, { children: /* @__PURE__ */ jsxs(TOCItems, {
				...list,
				children: [items.length === 0 && /* @__PURE__ */ jsx(TOCEmpty, {}), items.map((item) => /* @__PURE__ */ jsx(TOCItem, { item }, item.url))]
			}) }),
			footer
		]
	});
}
var TocPopoverContext = createContext(null);
function TOCPopover({ container, trigger, content, header, footer, style = "normal", list }) {
	const items = useTOCItems();
	const ref = useRef(null);
	const [open, setOpen] = useState(false);
	const { isNavTransparent } = useNotebookLayout();
	const { TOCItems, TOCItem, TOCEmpty } = style === "clerk" ? clerk_exports : default_exports;
	const onClickOutside = useEffectEvent((e) => {
		if (!open || !(e.target instanceof HTMLElement)) return;
		if (ref.current && !ref.current.contains(e.target)) setOpen(false);
	});
	const onClickItem = () => {
		setOpen(false);
	};
	useEffect(() => {
		window.addEventListener("click", onClickOutside);
		return () => {
			window.removeEventListener("click", onClickOutside);
		};
	}, []);
	return /* @__PURE__ */ jsx(TocPopoverContext, {
		value: useMemo(() => ({
			open,
			setOpen
		}), [setOpen, open]),
		children: /* @__PURE__ */ jsx(Collapsible, {
			open,
			onOpenChange: setOpen,
			"data-toc-popover": "",
			...container,
			className: cn$1("sticky top-(--fd-docs-row-2) z-10 [grid-area:toc-popover] h-(--fd-toc-popover-height) xl:hidden max-xl:layout:[--fd-toc-popover-height:--spacing(10)]", container?.className),
			children: /* @__PURE__ */ jsxs("header", {
				ref,
				className: cn$1("border-b backdrop-blur-sm transition-colors", (!isNavTransparent || open) && "bg-fd-background/80", open && "shadow-lg"),
				children: [/* @__PURE__ */ jsx(PageTOCPopoverTrigger, { ...trigger }), /* @__PURE__ */ jsxs(PageTOCPopoverContent, {
					...content,
					children: [
						header,
						/* @__PURE__ */ jsx(TOCScrollArea, { children: /* @__PURE__ */ jsxs(TOCItems, {
							...list,
							children: [items.length === 0 && /* @__PURE__ */ jsx(TOCEmpty, {}), items.map((item) => /* @__PURE__ */ jsx(TOCItem, {
								item,
								onClick: onClickItem
							}, item.url))]
						}) }),
						footer
					]
				})]
			})
		})
	});
}
function PageTOCPopoverTrigger({ className, ...props }) {
	const t = useTranslations({ note: "table of contents" });
	const { open } = use(TocPopoverContext);
	const items = useItems();
	const selectedIdx = items.findIndex((item) => item.active);
	const path = useTreePath().at(-1);
	const showItem = selectedIdx !== -1 && !open;
	return /* @__PURE__ */ jsxs(CollapsibleTrigger, {
		className: cn$1("flex w-full h-10 items-center text-sm text-fd-muted-foreground gap-2.5 px-4 py-2.5 text-start focus-visible:outline-none [&_svg]:size-4 md:px-6", className),
		"data-toc-popover-trigger": "",
		...props,
		children: [
			/* @__PURE__ */ jsx(ProgressCircle, {
				value: (items.findLastIndex((item) => item.active) + 1) / Math.max(1, items.length),
				max: 1,
				className: cn$1("shrink-0", open && "text-fd-primary")
			}),
			/* @__PURE__ */ jsxs("span", {
				className: "grid flex-1 *:my-auto *:row-start-1 *:col-start-1",
				children: [/* @__PURE__ */ jsx("span", {
					className: cn$1("truncate transition-[opacity,translate,color]", open && "text-fd-foreground", showItem && "opacity-0 -translate-y-full pointer-events-none"),
					children: path?.name ?? t("On this page")
				}), /* @__PURE__ */ jsx("span", {
					className: cn$1("truncate transition-[opacity,translate]", !showItem && "opacity-0 translate-y-full pointer-events-none"),
					children: items[selectedIdx]?.original.title
				})]
			}),
			/* @__PURE__ */ jsx(ChevronDown, { className: cn$1("shrink-0 transition-transform mx-0.5", open && "rotate-180") })
		]
	});
}
function clamp(input, min, max) {
	if (input < min) return min;
	if (input > max) return max;
	return input;
}
function ProgressCircle({ value, strokeWidth = 1.5, size = 18, min = 0, max = 100, style, ...restSvgProps }) {
	const normalizedValue = clamp(value, min, max);
	const radius = size / 2 - strokeWidth;
	const circumference = 2 * Math.PI * radius;
	const progress = normalizedValue / max * circumference;
	const circleProps = {
		cx: size / 2,
		cy: size / 2,
		r: radius,
		fill: "none",
		strokeWidth
	};
	return /* @__PURE__ */ jsxs("svg", {
		role: "progressbar",
		viewBox: `0 0 ${size} ${size}`,
		"aria-valuenow": normalizedValue,
		"aria-valuemin": min,
		"aria-valuemax": max,
		style: {
			width: size,
			height: size,
			...style
		},
		...restSvgProps,
		children: [/* @__PURE__ */ jsx("circle", {
			...circleProps,
			className: "stroke-current/25"
		}), /* @__PURE__ */ jsx("circle", {
			...circleProps,
			stroke: "currentColor",
			strokeDasharray: circumference,
			strokeDashoffset: circumference - progress,
			strokeLinecap: "round",
			transform: `rotate(-90 ${size / 2} ${size / 2})`,
			className: "transition-all"
		})]
	});
}
function PageTOCPopoverContent(props) {
	return /* @__PURE__ */ jsx(CollapsibleContent, {
		"data-toc-popover-content": "",
		...props,
		children: /* @__PURE__ */ jsx("div", {
			className: "flex flex-col px-4 max-h-[50vh] md:px-6",
			children: props.children
		})
	});
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/utils/use-footer-items.js
var footerCache = /* @__PURE__ */ new WeakMap();
/**
* @returns a list of page tree items (linear), that you can obtain footer items
*/
function useFooterItems() {
	const { root } = useTreeContext();
	const cached = footerCache.get(root);
	if (cached) return cached;
	const list = [];
	function onNode(node) {
		if (node.type === "folder") {
			if (node.index) onNode(node.index);
			for (const child of node.children) onNode(child);
		} else if (node.type === "page" && !node.external) list.push(node);
	}
	for (const child of root.children) onNode(child);
	footerCache.set(root, list);
	return list;
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/layouts/notebook/page/slots/footer.js
function Footer({ items, children, className, ...props }) {
	const footerList = useFooterItems();
	const pathname = usePathname();
	const { previous, next } = useMemo(() => {
		if (items) return items;
		const idx = footerList.findIndex((item) => isActive(item.url, pathname));
		if (idx === -1) return {};
		return {
			previous: footerList[idx - 1],
			next: footerList[idx + 1]
		};
	}, [
		footerList,
		items,
		pathname
	]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
		className: cn$1("@container grid gap-4", previous && next ? "grid-cols-2" : "grid-cols-1", className),
		...props,
		children: [previous && /* @__PURE__ */ jsx(FooterItem, {
			item: previous,
			index: 0
		}), next && /* @__PURE__ */ jsx(FooterItem, {
			item: next,
			index: 1
		})]
	}), children] });
}
function FooterItem({ item, index }) {
	const t = useTranslations({ note: "pagination" });
	const Icon = index === 0 ? ChevronLeft : ChevronRight;
	return /* @__PURE__ */ jsxs(Link$1, {
		href: item.url,
		className: cn$1("flex flex-col gap-2 rounded-lg border p-4 text-sm transition-colors hover:bg-fd-accent/80 hover:text-fd-accent-foreground @max-lg:col-span-full", index === 1 && "text-end"),
		children: [/* @__PURE__ */ jsxs("div", {
			className: cn$1("inline-flex items-center gap-1.5 font-medium", index === 1 && "flex-row-reverse"),
			children: [/* @__PURE__ */ jsx(Icon, { className: "-mx-1 size-4 shrink-0 rtl:rotate-180" }), /* @__PURE__ */ jsx("p", { children: item.name })]
		}), /* @__PURE__ */ jsx("p", {
			className: "text-fd-muted-foreground truncate",
			children: item.description ?? (index === 0 ? t("Previous Page") : t("Next Page"))
		})]
	});
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/layouts/notebook/page/slots/breadcrumb.js
function Breadcrumb({ includeRoot, includeSeparator, includePage, ...props }) {
	const path = useTreePath();
	const { root } = useTreeContext();
	const items = useMemo(() => {
		return getBreadcrumbItemsFromPath(root, path, {
			includePage,
			includeSeparator,
			includeRoot
		});
	}, [
		includePage,
		includeRoot,
		includeSeparator,
		path,
		root
	]);
	if (items.length === 0) return null;
	return /* @__PURE__ */ jsx("div", {
		...props,
		className: cn$1("flex items-center gap-1.5 text-sm text-fd-muted-foreground", props.className),
		children: items.map((item, i) => {
			const className = cn$1("truncate", i === items.length - 1 && "text-fd-primary font-medium");
			return /* @__PURE__ */ jsxs(Fragment$1, { children: [i !== 0 && /* @__PURE__ */ jsx(ChevronRight, { className: "size-3.5 shrink-0" }), item.url ? /* @__PURE__ */ jsx(Link$1, {
				href: item.url,
				className: cn$1(className, "transition-opacity hover:opacity-80"),
				children: item.name
			}) : /* @__PURE__ */ jsx("span", {
				className,
				children: item.name
			})] }, i);
		})
	});
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/layouts/notebook/page/slots/container.js
function Container(props) {
	const { full } = useDocsPage();
	return /* @__PURE__ */ jsx("article", {
		id: "nd-page",
		"data-full": full,
		...props,
		className: cn$1("flex flex-col [grid-area:main] px-4 py-6 gap-4 md:px-6 md:pt-8 xl:px-8 xl:pt-14 *:max-w-[900px]", full && "*:max-w-[1285px]", props.className),
		children: props.children
	});
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/layouts/notebook/page/index.js
var PageContext = createContext(null);
function useDocsPage() {
	const context = use(PageContext);
	if (!context) throw new Error("Please use page components under <DocsPage /> (`fumadocs-ui/layouts/notebook/page`).");
	return context;
}
function DocsPage({ full = false, tableOfContent: { enabled: tocEnabled = !full, single, ...tocProps } = {}, tableOfContentPopover: { enabled: tocPopoverEnabled, ...tocPopoverProps } = {}, breadcrumb: { enabled: breadcrumbEnabled = true, ...breadcrumb } = {}, footer: { enabled: footerEnabled = true, ...footer } = {}, toc = [], slots: defaultSlots = {}, children, ...containerProps }) {
	tocPopoverEnabled ??= Boolean(toc.length > 0 || tocPopoverProps.header || tocPopoverProps.footer);
	const slots = {
		breadcrumb: defaultSlots.breadcrumb ?? Breadcrumb,
		footer: defaultSlots.footer ?? Footer,
		toc: defaultSlots.toc ?? {
			provider: TOCProvider,
			main: TOC,
			popover: TOCPopover
		},
		container: defaultSlots.container ?? Container
	};
	return /* @__PURE__ */ jsx(PageContext, {
		value: {
			full,
			slots
		},
		children: /* @__PURE__ */ jsxs(slots.toc.provider, {
			single,
			toc: tocEnabled || tocPopoverEnabled ? toc : [],
			children: [
				tocPopoverEnabled && (tocPopoverProps.component ?? /* @__PURE__ */ jsx(slots.toc.popover, { ...tocPopoverProps })),
				/* @__PURE__ */ jsxs(slots.container, {
					...containerProps,
					children: [
						breadcrumbEnabled && (breadcrumb.component ?? /* @__PURE__ */ jsx(slots.breadcrumb, { ...breadcrumb })),
						children,
						footerEnabled && (footer.component ?? /* @__PURE__ */ jsx(slots.footer, { ...footer }))
					]
				}),
				tocEnabled && (tocProps.component ?? /* @__PURE__ */ jsx(slots.toc.main, { ...tocProps }))
			]
		})
	});
}
/**
* Add typography styles
*/
function DocsBody({ children, className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		...props,
		className: cn$1("prose flex-1", className),
		children
	});
}
function DocsDescription({ children, className, ...props }) {
	if (children === void 0) return null;
	return /* @__PURE__ */ jsx("p", {
		...props,
		className: cn$1("mb-8 text-lg text-fd-muted-foreground", className),
		children
	});
}
function DocsTitle({ children, className, ...props }) {
	return /* @__PURE__ */ jsx("h1", {
		...props,
		className: cn$1("text-[1.75em] font-semibold", className),
		children
	});
}
var meta_default$16 = {
	title: "III",
	pages: [
		"index",
		"memory",
		"arith",
		"script",
		"file",
		"dll",
		"game",
		"entity",
		"text",
		"math",
		"misc"
	]
};
var meta_default$15 = {
	title: "CLEO",
	pages: [
		"index",
		"syntax",
		"syntax-redux",
		"sa",
		"vc",
		"gta3"
	],
	root: true,
	icon: "Terminal"
};
var meta_default$14 = {
	title: "default",
	pages: [
		"index",
		"attractor",
		"audio",
		"blip",
		"boat",
		"camera",
		"car",
		"cargenerator",
		"char",
		"checkpoint",
		"clock",
		"conversation",
		"crane",
		"cutscene",
		"debugger",
		"decisionmaker",
		"decisionmakerchar",
		"decisionmakergroup",
		"fx",
		"game",
		"gang",
		"garage",
		"group",
		"heli",
		"hud",
		"math",
		"menu",
		"misc",
		"mission",
		"mouse",
		"object",
		"pad",
		"particle",
		"path",
		"pickup",
		"plane",
		"player",
		"rc",
		"restart",
		"scriptfire",
		"searchlight",
		"sequence",
		"shopping",
		"skip",
		"sound",
		"sphere",
		"stat",
		"streaming",
		"streamedscript",
		"stuckcarcheck",
		"task",
		"text",
		"trailer",
		"train",
		"txd",
		"user3dmarker",
		"weapon",
		"weather",
		"world",
		"zone"
	]
};
var meta_default$13 = {
	title: "imgui",
	pages: ["index"]
};
var meta_default$12 = {
	title: "SA 扩展",
	pages: [
		"index",
		"audio",
		"bitwise",
		"clipboard",
		"debug",
		"file",
		"ini",
		"input",
		"math",
		"memory",
		"text",
		"sphere",
		"newopcodes",
		"imgui",
		"sampfuncs"
	]
};
var meta_default$11 = {
	title: "NewOpcodes",
	pages: [
		"index",
		"matrix",
		"entity",
		"draw",
		"misc",
		"fx",
		"vehicle",
		"texture",
		"print",
		"atomic"
	]
};
var meta_default$10 = {
	title: "SAMPFUNCS",
	pages: [
		"index",
		"car",
		"char",
		"object",
		"pickup",
		"sampbitstream",
		"sampchat",
		"sampchatinput",
		"sampclient",
		"samplocalchatcmd",
		"sampmyplayer",
		"sampplayer",
		"sampraknet",
		"samptextdraw",
		"samptextlabel3d",
		"sf",
		"sfconsole",
		"sfd3d",
		"sfd3dfont",
		"sfd3dtexture",
		"sfdownload",
		"sfdxutdialog",
		"sfgfunc",
		"sfgvar",
		"sfscript",
		"sftimer",
		"misc"
	]
};
var meta_default$9 = {
	title: "SA",
	pages: [
		"---CLEO---",
		"memory",
		"arith",
		"script",
		"file",
		"dll",
		"game",
		"entity",
		"math",
		"misc",
		"plus",
		"ext",
		"default"
	]
};
var meta_default$8 = {
	title: "CLEO+",
	pages: [
		"index",
		"clipboard",
		"matrix",
		"memory",
		"entity",
		"entity-char",
		"entity-car",
		"entity-object",
		"entity-world",
		"text",
		"colpoint",
		"clock",
		"script",
		"game",
		"math",
		"mouse",
		"audio",
		"weapon",
		"txd",
		"blip",
		"pad",
		"render",
		"pickup",
		"hud",
		"camera",
		"list",
		"streaming",
		"fx",
		"dll",
		"misc"
	]
};
var meta_default$7 = {
	title: "VC",
	pages: [
		"index",
		"memory",
		"arith",
		"script",
		"file",
		"dll",
		"game",
		"entity",
		"text",
		"math",
		"misc"
	]
};
var meta_default$6 = {
	title: "文档",
	pages: [
		"index",
		"plugins",
		"cleo",
		"xbase",
		"skill"
	]
};
var meta_default$5 = {
	title: "实体",
	pages: [
		"index",
		"coverage",
		"---基类与玩家---",
		"placeable",
		"entity",
		"physical",
		"player",
		"player-ped",
		"player-info",
		"---池与实体---",
		"pools",
		"ped",
		"vehicle",
		"object",
		"world",
		"fire",
		"explosion",
		"pickups",
		"projectile",
		"weapon",
		"---流式与资源---",
		"streaming",
		"model-info",
		"txd-store",
		"anim",
		"file-mgr",
		"---人口交通路径---",
		"population",
		"car-ctrl",
		"pathfind",
		"water",
		"entry-exit",
		"---绘制与 HUD---",
		"sprite2d",
		"font",
		"markers",
		"shadows",
		"radar",
		"hud-messages",
		"camera",
		"draw",
		"---游戏态---",
		"timer",
		"time-cycle",
		"world-state",
		"stats",
		"wanted",
		"pad",
		"menu",
		"game",
		"scripts",
		"audio-engine"
	]
};
var meta_default$4 = {
	title: "扩展",
	pages: [
		"index",
		"paths",
		"screen",
		"config",
		"font",
		"keycheck",
		"pool-iterator"
	]
};
var meta_default$3 = {
	title: "插件",
	pages: [
		"index",
		"---核心---",
		"plugin-base",
		"events",
		"patch",
		"pattern",
		"commands",
		"---扩展与工具---",
		"extensions",
		"utils",
		"extender",
		"entities",
		"---组合---",
		"recipes"
	],
	root: true,
	icon: "Box"
};
var meta_default$2 = {
	title: "工具",
	pages: [
		"index",
		"other",
		"image-sprite",
		"audio",
		"math-color-timer",
		"text-error",
		"version-address",
		"shader"
	]
};
var meta_default$1 = {
	title: "技能",
	pages: [
		"index",
		"plugins-dev",
		"xbase-dev",
		"cleo-dev"
	],
	root: true,
	icon: "Sparkles"
};
var meta_default = {
	title: "XBase",
	pages: [
		"index",
		"---基础设施---",
		"log",
		"json",
		"config",
		"i18n",
		"hooks",
		"hotkey",
		"host-integration",
		"---控制器---",
		"core",
		"player",
		"ped",
		"vehicle",
		"world",
		"weapon",
		"teleport",
		"scene",
		"visual",
		"bullet-assist",
		"overlay",
		"camera",
		"cheats",
		"vehicle-effects",
		"---UI 层---",
		"theme",
		"ui",
		"webview",
		"web-bridge",
		"---其他---",
		"version",
		"types"
	],
	root: true,
	icon: "Blocks"
};
//#endregion
//#region content/docs/cleo/gta3/arith.mdx?collection=docs&only=frontmatter
var frontmatter$275 = {
	"title": "算术",
	"description": "整数与位运算 opcode"
};
//#endregion
//#region content/docs/cleo/gta3/dll.mdx?collection=docs&only=frontmatter
var frontmatter$274 = {
	"title": "动态库 DynamicLibrary",
	"description": "加载 DLL 与取导出地址"
};
//#endregion
//#region content/docs/cleo/gta3/entity.mdx?collection=docs&only=frontmatter
var frontmatter$273 = {
	"title": "实体 Entity",
	"description": "Player / Char / Car / World / Weapon / Camera"
};
//#endregion
//#region content/docs/cleo/gta3/file.mdx?collection=docs&only=frontmatter
var frontmatter$272 = {
	"title": "文件 File / Fs",
	"description": "文件读写、目录与查找"
};
//#endregion
//#region content/docs/cleo/gta3/game.mdx?collection=docs&only=frontmatter
var frontmatter$271 = {
	"title": "游戏 Game / Pad",
	"description": "版本、键鼠手柄与天气"
};
//#endregion
//#region content/docs/cleo/gta3/index.mdx?collection=docs&only=frontmatter
var frontmatter$270 = {
	"title": "GTA III",
	"description": "GTA III CLEO 扩展 opcode 按类型分页"
};
//#endregion
//#region content/docs/cleo/gta3/math.mdx?collection=docs&only=frontmatter
var frontmatter$269 = {
	"title": "数学 Math",
	"description": "幂与对数"
};
//#endregion
//#region content/docs/cleo/gta3/memory.mdx?collection=docs&only=frontmatter
var frontmatter$268 = {
	"title": "内存 Memory",
	"description": "内存读写、句柄指针与原生调用"
};
//#endregion
//#region content/docs/cleo/gta3/misc.mdx?collection=docs&only=frontmatter
var frontmatter$267 = {
	"title": "杂项",
	"description": "无独立 class 的边缘 op 说明"
};
//#endregion
//#region content/docs/cleo/gta3/script.mdx?collection=docs&only=frontmatter
var frontmatter$266 = {
	"title": "自定义脚本",
	"description": "启停脚本、CLEO_CALL 与共享变量"
};
//#endregion
//#region content/docs/cleo/gta3/text.mdx?collection=docs&only=frontmatter
var frontmatter$265 = {
	"title": "文本 Text",
	"description": "屏幕字与 GXT"
};
//#endregion
//#region content/docs/cleo/index.mdx?collection=docs&only=frontmatter
var frontmatter$264 = {
	"title": "综述",
	"description": "脚本侧 opcode 调用文档入口"
};
//#endregion
//#region content/docs/cleo/sa/arith.mdx?collection=docs&only=frontmatter
var frontmatter$263 = {
	"title": "算术",
	"description": "整数与浮点基本运算 opcode"
};
//#endregion
//#region content/docs/cleo/sa/default/attractor.mdx?collection=docs&only=frontmatter
var frontmatter$262 = {
	"title": "吸引点 Attractor",
	"description": "行人吸引点"
};
//#endregion
//#region content/docs/cleo/sa/default/audio.mdx?collection=docs&only=frontmatter
var frontmatter$261 = {
	"title": "音频 Audio",
	"description": "任务语音 / 电台 / 节拍轨"
};
//#endregion
//#region content/docs/cleo/sa/default/blip.mdx?collection=docs&only=frontmatter
var frontmatter$260 = {
	"title": "标记 Blip",
	"description": "雷达标记"
};
//#endregion
//#region content/docs/cleo/sa/default/boat.mdx?collection=docs&only=frontmatter
var frontmatter$259 = {
	"title": "船只 Boat",
	"description": "船移动 / 巡航 / 锚泊"
};
//#endregion
//#region content/docs/cleo/sa/default/camera.mdx?collection=docs&only=frontmatter
var frontmatter$258 = {
	"title": "镜头 Camera",
	"description": "镜头 / 淡入淡出 / 附着"
};
//#endregion
//#region content/docs/cleo/sa/default/car.mdx?collection=docs&only=frontmatter
var frontmatter$257 = {
	"title": "载具 Car",
	"description": "车辆创建 / 驾驶 / 状态 / 改装"
};
//#endregion
//#region content/docs/cleo/sa/default/cargenerator.mdx?collection=docs&only=frontmatter
var frontmatter$256 = {
	"title": "载具生成 CarGenerator",
	"description": "停车生成器"
};
//#endregion
//#region content/docs/cleo/sa/default/char.mdx?collection=docs&only=frontmatter
var frontmatter$255 = {
	"title": "角色 Char",
	"description": "角色创建 / 位置 / 载具 / 状态 / 武器"
};
//#endregion
//#region content/docs/cleo/sa/default/checkpoint.mdx?collection=docs&only=frontmatter
var frontmatter$254 = {
	"title": "检查点 Checkpoint",
	"description": "竞速检查点"
};
//#endregion
//#region content/docs/cleo/sa/default/clock.mdx?collection=docs&only=frontmatter
var frontmatter$253 = {
	"title": "时钟 Clock",
	"description": "游戏时间 / 流速 / 日期"
};
//#endregion
//#region content/docs/cleo/sa/default/conversation.mdx?collection=docs&only=frontmatter
var frontmatter$252 = {
	"title": "对话 Conversation",
	"description": "脚本对话节点"
};
//#endregion
//#region content/docs/cleo/sa/default/crane.mdx?collection=docs&only=frontmatter
var frontmatter$251 = {
	"title": "吊车 Crane",
	"description": "起重机进入 / 控制"
};
//#endregion
//#region content/docs/cleo/sa/default/cutscene.mdx?collection=docs&only=frontmatter
var frontmatter$250 = {
	"title": "过场 Cutscene",
	"description": "过场加载 / 播放 / 偏移"
};
//#endregion
//#region content/docs/cleo/sa/default/debugger.mdx?collection=docs&only=frontmatter
var frontmatter$249 = {
	"title": "调试 Debugger",
	"description": "脚本调试"
};
//#endregion
//#region content/docs/cleo/sa/default/decisionmaker.mdx?collection=docs&only=frontmatter
var frontmatter$248 = {
	"title": "决策器 DecisionMaker",
	"description": "决策器删除与存在"
};
//#endregion
//#region content/docs/cleo/sa/default/decisionmakerchar.mdx?collection=docs&only=frontmatter
var frontmatter$247 = {
	"title": "角色决策 DecisionMakerChar",
	"description": "角色决策器"
};
//#endregion
//#region content/docs/cleo/sa/default/decisionmakergroup.mdx?collection=docs&only=frontmatter
var frontmatter$246 = {
	"title": "组决策 DecisionMakerGroup",
	"description": "组决策器"
};
//#endregion
//#region content/docs/cleo/sa/default/fx.mdx?collection=docs&only=frontmatter
var frontmatter$245 = {
	"title": "特效 Fx",
	"description": "爆炸 / 光晕 / 粒子"
};
//#endregion
//#region content/docs/cleo/sa/default/game.mdx?collection=docs&only=frontmatter
var frontmatter$244 = {
	"title": "游戏 Game",
	"description": "全局规则 / 通缉 / 双人 / 帮战"
};
//#endregion
//#region content/docs/cleo/sa/default/gang.mdx?collection=docs&only=frontmatter
var frontmatter$243 = {
	"title": "帮派 Gang",
	"description": "帮派武器配置"
};
//#endregion
//#region content/docs/cleo/sa/default/garage.mdx?collection=docs&only=frontmatter
var frontmatter$242 = {
	"title": "车库 Garage",
	"description": "车库开关 / 类型 / 喷漆"
};
//#endregion
//#region content/docs/cleo/sa/default/group.mdx?collection=docs&only=frontmatter
var frontmatter$241 = {
	"title": "小组 Group",
	"description": "角色组"
};
//#endregion
//#region content/docs/cleo/sa/default/heli.mdx?collection=docs&only=frontmatter
var frontmatter$240 = {
	"title": "直升机 Heli",
	"description": "直升机飞向 / 绞盘 / 攻击"
};
//#endregion
//#region content/docs/cleo/sa/default/hud.mdx?collection=docs&only=frontmatter
var frontmatter$239 = {
	"title": "界面 Hud",
	"description": "计时 / 计数 / 雷达 / 绘制"
};
//#endregion
//#region content/docs/cleo/sa/default/index.mdx?collection=docs&only=frontmatter
var frontmatter$238 = {
	"title": "SCM 原生 default",
	"description": "SCM 原生 opcode 按 class 分页"
};
//#endregion
//#region content/docs/cleo/sa/default/math.mdx?collection=docs&only=frontmatter
var frontmatter$237 = {
	"title": "数学 Math",
	"description": "数学 / 随机 / 位运算"
};
//#endregion
//#region content/docs/cleo/sa/default/menu.mdx?collection=docs&only=frontmatter
var frontmatter$236 = {
	"title": "菜单 Menu",
	"description": "屏上面板菜单"
};
//#endregion
//#region content/docs/cleo/sa/default/misc.mdx?collection=docs&only=frontmatter
var frontmatter$235 = {
	"title": "杂项 Misc",
	"description": "无 class 的 SCM 原生命令（脚本控制 / 变量 / 条件 等）"
};
//#endregion
//#region content/docs/cleo/sa/default/mission.mdx?collection=docs&only=frontmatter
var frontmatter$234 = {
	"title": "任务 Mission",
	"description": "任务启动与收尾"
};
//#endregion
//#region content/docs/cleo/sa/default/mouse.mdx?collection=docs&only=frontmatter
var frontmatter$233 = {
	"title": "鼠标 Mouse",
	"description": "鼠标位移与反转"
};
//#endregion
//#region content/docs/cleo/sa/default/object.mdx?collection=docs&only=frontmatter
var frontmatter$232 = {
	"title": "物体 Object",
	"description": "物体创建 / 物理 / 附着 / 动画"
};
//#endregion
//#region content/docs/cleo/sa/default/pad.mdx?collection=docs&only=frontmatter
var frontmatter$231 = {
	"title": "手柄 Pad",
	"description": "手柄 / 按键控制"
};
//#endregion
//#region content/docs/cleo/sa/default/particle.mdx?collection=docs&only=frontmatter
var frontmatter$230 = {
	"title": "粒子 Particle",
	"description": "粒子特效"
};
//#endregion
//#region content/docs/cleo/sa/default/path.mdx?collection=docs&only=frontmatter
var frontmatter$229 = {
	"title": "路径 Path",
	"description": "路径节点 / 路线"
};
//#endregion
//#region content/docs/cleo/sa/default/pickup.mdx?collection=docs&only=frontmatter
var frontmatter$228 = {
	"title": "拾取物 Pickup",
	"description": "拾取物 / 收藏品"
};
//#endregion
//#region content/docs/cleo/sa/default/plane.mdx?collection=docs&only=frontmatter
var frontmatter$227 = {
	"title": "飞机 Plane",
	"description": "飞机飞向 / 攻击 / 起落架"
};
//#endregion
//#region content/docs/cleo/sa/default/player.mdx?collection=docs&only=frontmatter
var frontmatter$226 = {
	"title": "玩家 Player",
	"description": "玩家金钱 / 通缉 / 操控 / 服装"
};
//#endregion
//#region content/docs/cleo/sa/default/rc.mdx?collection=docs&only=frontmatter
var frontmatter$225 = {
	"title": "遥控 Rc",
	"description": "遥控车"
};
//#endregion
//#region content/docs/cleo/sa/default/restart.mdx?collection=docs&only=frontmatter
var frontmatter$224 = {
	"title": "重生点 Restart",
	"description": "医院 / 警局重生点"
};
//#endregion
//#region content/docs/cleo/sa/default/scriptfire.mdx?collection=docs&only=frontmatter
var frontmatter$223 = {
	"title": "脚本火 ScriptFire",
	"description": "脚本火"
};
//#endregion
//#region content/docs/cleo/sa/default/searchlight.mdx?collection=docs&only=frontmatter
var frontmatter$222 = {
	"title": "探照灯 Searchlight",
	"description": "探照灯"
};
//#endregion
//#region content/docs/cleo/sa/default/sequence.mdx?collection=docs&only=frontmatter
var frontmatter$221 = {
	"title": "序列 Sequence",
	"description": "任务序列"
};
//#endregion
//#region content/docs/cleo/sa/default/shopping.mdx?collection=docs&only=frontmatter
var frontmatter$220 = {
	"title": "商店 Shopping",
	"description": "商店 / 购物"
};
//#endregion
//#region content/docs/cleo/sa/default/skip.mdx?collection=docs&only=frontmatter
var frontmatter$219 = {
	"title": "跳过 Skip",
	"description": "行程跳过"
};
//#endregion
//#region content/docs/cleo/sa/default/sound.mdx?collection=docs&only=frontmatter
var frontmatter$218 = {
	"title": "音效 Sound",
	"description": "一次性音效"
};
//#endregion
//#region content/docs/cleo/sa/default/sphere.mdx?collection=docs&only=frontmatter
var frontmatter$217 = {
	"title": "球体 Sphere",
	"description": "调试球 / 静态球"
};
//#endregion
//#region content/docs/cleo/sa/default/stat.mdx?collection=docs&only=frontmatter
var frontmatter$216 = {
	"title": "统计 Stat",
	"description": "进度 / 统计读写"
};
//#endregion
//#region content/docs/cleo/sa/default/streamedscript.mdx?collection=docs&only=frontmatter
var frontmatter$215 = {
	"title": "流式脚本 StreamedScript",
	"description": "环境脚本流加载 / 启动"
};
//#endregion
//#region content/docs/cleo/sa/default/streaming.mdx?collection=docs&only=frontmatter
var frontmatter$214 = {
	"title": "流式 Streaming",
	"description": "模型 / 动画 / IPL / 场景流式加载"
};
//#endregion
//#region content/docs/cleo/sa/default/stuckcarcheck.mdx?collection=docs&only=frontmatter
var frontmatter$213 = {
	"title": "卡死检测 StuckCarCheck",
	"description": "载具卡住检测"
};
//#endregion
//#region content/docs/cleo/sa/default/task.mdx?collection=docs&only=frontmatter
var frontmatter$212 = {
	"title": "任务 Task",
	"description": "AI 任务 / 移动 / 战斗 / 动画"
};
//#endregion
//#region content/docs/cleo/sa/default/text.mdx?collection=docs&only=frontmatter
var frontmatter$211 = {
	"title": "文本 Text",
	"description": "消息 / 帮助框 / 屏幕文字"
};
//#endregion
//#region content/docs/cleo/sa/default/trailer.mdx?collection=docs&only=frontmatter
var frontmatter$210 = {
	"title": "拖车 Trailer",
	"description": "挂车挂接"
};
//#endregion
//#region content/docs/cleo/sa/default/train.mdx?collection=docs&only=frontmatter
var frontmatter$209 = {
	"title": "火车 Train",
	"description": "任务列车"
};
//#endregion
//#region content/docs/cleo/sa/default/txd.mdx?collection=docs&only=frontmatter
var frontmatter$208 = {
	"title": "贴图 Txd",
	"description": "贴图字典 / 精灵槽"
};
//#endregion
//#region content/docs/cleo/sa/default/user3dmarker.mdx?collection=docs&only=frontmatter
var frontmatter$207 = {
	"title": "3D标记 User3DMarker",
	"description": "用户 3D 标记"
};
//#endregion
//#region content/docs/cleo/sa/default/weapon.mdx?collection=docs&only=frontmatter
var frontmatter$206 = {
	"title": "武器 Weapon",
	"description": "武器类型 → 模型 / 槽位"
};
//#endregion
//#region content/docs/cleo/sa/default/weather.mdx?collection=docs&only=frontmatter
var frontmatter$205 = {
	"title": "天气 Weather",
	"description": "天气强制与热浪"
};
//#endregion
//#region content/docs/cleo/sa/default/world.mdx?collection=docs&only=frontmatter
var frontmatter$204 = {
	"title": "世界 World",
	"description": "区域清理 / 密度 / 查询 / 世界状态"
};
//#endregion
//#region content/docs/cleo/sa/default/zone.mdx?collection=docs&only=frontmatter
var frontmatter$203 = {
	"title": "区域 Zone",
	"description": "区域人口 / 帮派"
};
//#endregion
//#region content/docs/cleo/sa/dll.mdx?collection=docs&only=frontmatter
var frontmatter$202 = {
	"title": "动态库 DynamicLibrary",
	"description": "加载 DLL 与取导出地址"
};
//#endregion
//#region content/docs/cleo/sa/entity.mdx?collection=docs&only=frontmatter
var frontmatter$201 = {
	"title": "实体 Char / Car / Player / World",
	"description": "实体查询、刷车、瞄准与档位"
};
//#endregion
//#region content/docs/cleo/sa/ext/audio.mdx?collection=docs&only=frontmatter
var frontmatter$200 = {
	"title": "音频流 AudioStream",
	"description": "流式音频与 3D 声源（26 条）"
};
//#endregion
//#region content/docs/cleo/sa/ext/bitwise.mdx?collection=docs&only=frontmatter
var frontmatter$199 = {
	"title": "位运算",
	"description": "位运算与取余"
};
//#endregion
//#region content/docs/cleo/sa/ext/clipboard.mdx?collection=docs&only=frontmatter
var frontmatter$198 = {
	"title": "剪贴板 Clipboard",
	"description": "剪贴板扩展（与 CLEO+ 同号）"
};
//#endregion
//#region content/docs/cleo/sa/ext/debug.mdx?collection=docs&only=frontmatter
var frontmatter$197 = {
	"title": "调试 Debug",
	"description": "调试输出、断点与日志"
};
//#endregion
//#region content/docs/cleo/sa/ext/file.mdx?collection=docs&only=frontmatter
var frontmatter$196 = {
	"title": "文件 Fs / File",
	"description": "文件目录操作与块读写"
};
//#endregion
//#region content/docs/cleo/sa/ext/imgui/index.mdx?collection=docs&only=frontmatter
var frontmatter$195 = {
	"title": "界面 ImGui",
	"description": "ImGui 扩展全表（87 条）"
};
//#endregion
//#region content/docs/cleo/sa/ext/index.mdx?collection=docs&only=frontmatter
var frontmatter$194 = {
	"title": "其它扩展",
	"description": "除 CLEO / CLEO+ / default 外的 SA 扩展入口"
};
//#endregion
//#region content/docs/cleo/sa/ext/ini.mdx?collection=docs&only=frontmatter
var frontmatter$193 = {
	"title": "配置 IniFile",
	"description": "读写 ini 段与键"
};
//#endregion
//#region content/docs/cleo/sa/ext/input.mdx?collection=docs&only=frontmatter
var frontmatter$192 = {
	"title": "手柄 Pad",
	"description": "键边沿、模拟按键与绑定查询"
};
//#endregion
//#region content/docs/cleo/sa/ext/math.mdx?collection=docs&only=frontmatter
var frontmatter$191 = {
	"title": "数学 Math",
	"description": "位标志、随机挑选与浮点四则"
};
//#endregion
//#region content/docs/cleo/sa/ext/memory.mdx?collection=docs&only=frontmatter
var frontmatter$190 = {
	"title": "内存 Memory",
	"description": "内存拷贝、偏移读写与脚本结构"
};
//#endregion
//#region content/docs/cleo/sa/ext/newopcodes/atomic.mdx?collection=docs&only=frontmatter
var frontmatter$189 = {
	"title": "组件 Atomic",
	"description": "部件父节点、RpAtomic 显隐与材质"
};
//#endregion
//#region content/docs/cleo/sa/ext/newopcodes/draw.mdx?collection=docs&only=frontmatter
var frontmatter$188 = {
	"title": "碰撞绘制 Col / Draw / Txd",
	"description": "ColPoint、shape 绘制、TXD、字符串"
};
//#endregion
//#region content/docs/cleo/sa/ext/newopcodes/entity.mdx?collection=docs&only=frontmatter
var frontmatter$187 = {
	"title": "实体 Entity / Component",
	"description": "部件、透明度、碰撞实体、骨骼"
};
//#endregion
//#region content/docs/cleo/sa/ext/newopcodes/fx.mdx?collection=docs&only=frontmatter
var frontmatter$186 = {
	"title": "特效 Fx",
	"description": "阴影光 corona 太阳 天气 音量 分辨率"
};
//#endregion
//#region content/docs/cleo/sa/ext/newopcodes/index.mdx?collection=docs&only=frontmatter
var frontmatter$185 = {
	"title": "扩展 NewOpcodes",
	"description": "NewOpcodes 按页入口（约 128 条）"
};
//#endregion
//#region content/docs/cleo/sa/ext/newopcodes/matrix.mdx?collection=docs&only=frontmatter
var frontmatter$184 = {
	"title": "矩阵 Matrix / Quat / Vector",
	"description": "矩阵、四元数、向量与圆相交"
};
//#endregion
//#region content/docs/cleo/sa/ext/newopcodes/misc.mdx?collection=docs&only=frontmatter
var frontmatter$183 = {
	"title": "杂项 Misc",
	"description": "内存拷贝、线程变量、结构体与字符串"
};
//#endregion
//#region content/docs/cleo/sa/ext/newopcodes/print.mdx?collection=docs&only=frontmatter
var frontmatter$182 = {
	"title": "打印 PrintText",
	"description": "临时屏上文字"
};
//#endregion
//#region content/docs/cleo/sa/ext/newopcodes/texture.mdx?collection=docs&only=frontmatter
var frontmatter$181 = {
	"title": "贴图 Texture / Sprite",
	"description": "BMP/PNG/DDS 贴图与 2D 精灵"
};
//#endregion
//#region content/docs/cleo/sa/ext/newopcodes/vehicle.mdx?collection=docs&only=frontmatter
var frontmatter$180 = {
	"title": "载具 Vehicle",
	"description": "车灯损伤、车类、dummy 点、抛射物"
};
//#endregion
//#region content/docs/cleo/sa/ext/sampfuncs/car.mdx?collection=docs&only=frontmatter
var frontmatter$179 = {
	"title": "载具 Car",
	"description": "载具句柄 → SA-MP 车辆 ID"
};
//#endregion
//#region content/docs/cleo/sa/ext/sampfuncs/char.mdx?collection=docs&only=frontmatter
var frontmatter$178 = {
	"title": "角色 Char",
	"description": "角色句柄 → SA-MP 玩家 ID"
};
//#endregion
//#region content/docs/cleo/sa/ext/sampfuncs/index.mdx?collection=docs&only=frontmatter
var frontmatter$177 = {
	"title": "SA-MP SAMPFUNCS",
	"description": "SA-MP SAMPFUNCS 扩展表入口（382 条）"
};
//#endregion
//#region content/docs/cleo/sa/ext/sampfuncs/misc.mdx?collection=docs&only=frontmatter
var frontmatter$176 = {
	"title": "杂项 Misc",
	"description": "底层 D3D 图元与纹理绑定"
};
//#endregion
//#region content/docs/cleo/sa/ext/sampfuncs/object.mdx?collection=docs&only=frontmatter
var frontmatter$175 = {
	"title": "物体 Object",
	"description": "物体句柄 → SA-MP 物体 ID"
};
//#endregion
//#region content/docs/cleo/sa/ext/sampfuncs/pickup.mdx?collection=docs&only=frontmatter
var frontmatter$174 = {
	"title": "拾取物 Pickup",
	"description": "拾取物句柄 → SA-MP 拾取物 ID"
};
//#endregion
//#region content/docs/cleo/sa/ext/sampfuncs/sampbitstream.mdx?collection=docs&only=frontmatter
var frontmatter$173 = {
	"title": "比特流 SampBitstream",
	"description": "RakNet BitStream 读写与收发"
};
//#endregion
//#region content/docs/cleo/sa/ext/sampfuncs/sampchat.mdx?collection=docs&only=frontmatter
var frontmatter$172 = {
	"title": "聊天 SampChat",
	"description": "聊天行追加与显示模式"
};
//#endregion
//#region content/docs/cleo/sa/ext/sampfuncs/sampchatinput.mdx?collection=docs&only=frontmatter
var frontmatter$171 = {
	"title": "聊天输入 SampChatInput",
	"description": "聊天输入框文本与可见性"
};
//#endregion
//#region content/docs/cleo/sa/ext/sampfuncs/sampclient.mdx?collection=docs&only=frontmatter
var frontmatter$170 = {
	"title": "客户端 SampClient",
	"description": "客户端状态、对话框、池指针与光标"
};
//#endregion
//#region content/docs/cleo/sa/ext/sampfuncs/samplocalchatcmd.mdx?collection=docs&only=frontmatter
var frontmatter$169 = {
	"title": "本地聊天命令 SampLocalChatCmd",
	"description": "本地聊天命令钩子"
};
//#endregion
//#region content/docs/cleo/sa/ext/sampfuncs/sampmyplayer.mdx?collection=docs&only=frontmatter
var frontmatter$168 = {
	"title": "本地玩家 SampMyPlayer",
	"description": "本地玩家重生与昵称"
};
//#endregion
//#region content/docs/cleo/sa/ext/sampfuncs/sampplayer.mdx?collection=docs&only=frontmatter
var frontmatter$167 = {
	"title": "玩家 SampPlayer",
	"description": "远程玩家状态、数据与 NPC"
};
//#endregion
//#region content/docs/cleo/sa/ext/sampfuncs/sampraknet.mdx?collection=docs&only=frontmatter
var frontmatter$166 = {
	"title": "网络 SampRaknet",
	"description": "RPC/Packet 发送、Hook 与强制同步"
};
//#endregion
//#region content/docs/cleo/sa/ext/sampfuncs/samptextdraw.mdx?collection=docs&only=frontmatter
var frontmatter$165 = {
	"title": "文字绘制 SampTextDraw",
	"description": "TextDraw 创建、样式与读写"
};
//#endregion
//#region content/docs/cleo/sa/ext/sampfuncs/samptextlabel3d.mdx?collection=docs&only=frontmatter
var frontmatter$164 = {
	"title": "3D标签 SampTextLabel3D",
	"description": "模拟 SA-MP 3D 文本"
};
//#endregion
//#region content/docs/cleo/sa/ext/sampfuncs/sf.mdx?collection=docs&only=frontmatter
var frontmatter$163 = {
	"title": "框架 Sf",
	"description": "坐标、数学、内存、字符串与输入"
};
//#endregion
//#region content/docs/cleo/sa/ext/sampfuncs/sfconsole.mdx?collection=docs&only=frontmatter
var frontmatter$162 = {
	"title": "控制台 SfConsole",
	"description": "SAMPFUNCS 控制台日志与命令"
};
//#endregion
//#region content/docs/cleo/sa/ext/sampfuncs/sfd3d.mdx?collection=docs&only=frontmatter
var frontmatter$161 = {
	"title": "D3D SfD3D",
	"description": "线框矩形多边形绘制"
};
//#endregion
//#region content/docs/cleo/sa/ext/sampfuncs/sfd3dfont.mdx?collection=docs&only=frontmatter
var frontmatter$160 = {
	"title": "字体 SfD3DFont",
	"description": "D3D 字体创建与文本测量"
};
//#endregion
//#region content/docs/cleo/sa/ext/sampfuncs/sfd3dtexture.mdx?collection=docs&only=frontmatter
var frontmatter$159 = {
	"title": "纹理 SfD3DTexture",
	"description": "D3D 纹理加载与绘制"
};
//#endregion
//#region content/docs/cleo/sa/ext/sampfuncs/sfdownload.mdx?collection=docs&only=frontmatter
var frontmatter$158 = {
	"title": "下载 SfDownload",
	"description": "异步下载文件"
};
//#endregion
//#region content/docs/cleo/sa/ext/sampfuncs/sfdxutdialog.mdx?collection=docs&only=frontmatter
var frontmatter$157 = {
	"title": "对话框 SfDxutDialog",
	"description": "DXUT 对话框控件与事件"
};
//#endregion
//#region content/docs/cleo/sa/ext/sampfuncs/sfgfunc.mdx?collection=docs&only=frontmatter
var frontmatter$156 = {
	"title": "全局函数 SfGFunc",
	"description": "自定义全局函数注册与调用"
};
//#endregion
//#region content/docs/cleo/sa/ext/sampfuncs/sfgvar.mdx?collection=docs&only=frontmatter
var frontmatter$155 = {
	"title": "全局变量 SfGVar",
	"description": "自定义全局变量"
};
//#endregion
//#region content/docs/cleo/sa/ext/sampfuncs/sfscript.mdx?collection=docs&only=frontmatter
var frontmatter$154 = {
	"title": "脚本 SfScript",
	"description": "启停脚本与局部变量"
};
//#endregion
//#region content/docs/cleo/sa/ext/sampfuncs/sftimer.mdx?collection=docs&only=frontmatter
var frontmatter$153 = {
	"title": "定时器 SfTimer",
	"description": "周期定时器"
};
//#endregion
//#region content/docs/cleo/sa/ext/sphere.mdx?collection=docs&only=frontmatter
var frontmatter$152 = {
	"title": "球体 Sphere",
	"description": "球体显示颜色"
};
//#endregion
//#region content/docs/cleo/sa/ext/text.mdx?collection=docs&only=frontmatter
var frontmatter$151 = {
	"title": "文本 Text",
	"description": "串比较、屏上格式化与 FXT"
};
//#endregion
//#region content/docs/cleo/sa/file.mdx?collection=docs&only=frontmatter
var frontmatter$150 = {
	"title": "文件 File / Fs",
	"description": "文件读写、目录与通配查找"
};
//#endregion
//#region content/docs/cleo/sa/game.mdx?collection=docs&only=frontmatter
var frontmatter$149 = {
	"title": "游戏 Game / Pad",
	"description": "版本、平台、按键与作弊串"
};
//#endregion
//#region content/docs/cleo/sa/math.mdx?collection=docs&only=frontmatter
var frontmatter$148 = {
	"title": "数学 Math",
	"description": "幂与对数"
};
//#endregion
//#region content/docs/cleo/sa/memory.mdx?collection=docs&only=frontmatter
var frontmatter$147 = {
	"title": "内存 Memory",
	"description": "内存读写、句柄指针与原生调用"
};
//#endregion
//#region content/docs/cleo/sa/misc.mdx?collection=docs&only=frontmatter
var frontmatter$146 = {
	"title": "杂项",
	"description": "无独立 class 或占位 opcode"
};
//#endregion
//#region content/docs/cleo/sa/plus/audio.mdx?collection=docs&only=frontmatter
var frontmatter$145 = {
	"title": "音频 Audio",
	"description": "SFX/电台音量与 AudioStream 内部引用"
};
//#endregion
//#region content/docs/cleo/sa/plus/blip.mdx?collection=docs&only=frontmatter
var frontmatter$144 = {
	"title": "标记 CleoBlip",
	"description": "不占原生上限的自定义雷达点"
};
//#endregion
//#region content/docs/cleo/sa/plus/camera.mdx?collection=docs&only=frontmatter
var frontmatter$143 = {
	"title": "镜头 Camera",
	"description": "镜头控制、偏移、淡入与结构地址"
};
//#endregion
//#region content/docs/cleo/sa/plus/clipboard.mdx?collection=docs&only=frontmatter
var frontmatter$142 = {
	"title": "剪贴板 Clipboard",
	"description": "系统剪贴板读写"
};
//#endregion
//#region content/docs/cleo/sa/plus/clock.mdx?collection=docs&only=frontmatter
var frontmatter$141 = {
	"title": "时钟 Clock / Weather",
	"description": "本地时间、游戏时钟与天气"
};
//#endregion
//#region content/docs/cleo/sa/plus/colpoint.mdx?collection=docs&only=frontmatter
var frontmatter$140 = {
	"title": "碰撞点 ColPoint",
	"description": "碰撞点查询"
};
//#endregion
//#region content/docs/cleo/sa/plus/dll.mdx?collection=docs&only=frontmatter
var frontmatter$139 = {
	"title": "动态库 DynamicLibrary",
	"description": "取已加载 DLL 句柄"
};
//#endregion
//#region content/docs/cleo/sa/plus/entity-car.mdx?collection=docs&only=frontmatter
var frontmatter$138 = {
	"title": "载具实体 Entity Car",
	"description": "载具透明度、扩展变量、拖车碰撞与所有权"
};
//#endregion
//#region content/docs/cleo/sa/plus/entity-char.mdx?collection=docs&only=frontmatter
var frontmatter$137 = {
	"title": "角色实体 Entity Char",
	"description": "角色骨骼、任务状态、武器与生命周期"
};
//#endregion
//#region content/docs/cleo/sa/plus/entity-object.mdx?collection=docs&only=frontmatter
var frontmatter$136 = {
	"title": "物体实体 Entity Object",
	"description": "物体透明度、扩展变量与 renderObject"
};
//#endregion
//#region content/docs/cleo/sa/plus/entity-world.mdx?collection=docs&only=frontmatter
var frontmatter$135 = {
	"title": "世界实体 Entity World",
	"description": "距离判定、池遍历、实体类型与金钱"
};
//#endregion
//#region content/docs/cleo/sa/plus/entity.mdx?collection=docs&only=frontmatter
var frontmatter$134 = {
	"title": "实体 Entity",
	"description": "CLEO+ 实体相关入口（按主体拆页）"
};
//#endregion
//#region content/docs/cleo/sa/plus/fx.mdx?collection=docs&only=frontmatter
var frontmatter$133 = {
	"title": "特效 Fx",
	"description": "FX 系统地址、加粒子与按名查询"
};
//#endregion
//#region content/docs/cleo/sa/plus/game.mdx?collection=docs&only=frontmatter
var frontmatter$132 = {
	"title": "游戏 Game / Mission",
	"description": "分辨率任务状态作弊与世界查询"
};
//#endregion
//#region content/docs/cleo/sa/plus/hud.mdx?collection=docs&only=frontmatter
var frontmatter$131 = {
	"title": "界面 Hud",
	"description": "本地 onscreen 计时器计数器与 HUD 可见性"
};
//#endregion
//#region content/docs/cleo/sa/plus/index.mdx?collection=docs&only=frontmatter
var frontmatter$130 = {
	"title": "综述",
	"description": "CLEO+ 按类型分页入口（约 318 条）"
};
//#endregion
//#region content/docs/cleo/sa/plus/list.mdx?collection=docs&only=frontmatter
var frontmatter$129 = {
	"title": "列表 List",
	"description": "动态数值/字符串列表"
};
//#endregion
//#region content/docs/cleo/sa/plus/math.mdx?collection=docs&only=frontmatter
var frontmatter$128 = {
	"title": "数学 Math",
	"description": "噪声、缓动、随机与夹值"
};
//#endregion
//#region content/docs/cleo/sa/plus/matrix.mdx?collection=docs&only=frontmatter
var frontmatter$127 = {
	"title": "矩阵 Matrix / Quat",
	"description": "矩阵旋转与四元数运算"
};
//#endregion
//#region content/docs/cleo/sa/plus/memory.mdx?collection=docs&only=frontmatter
var frontmatter$126 = {
	"title": "内存 Memory",
	"description": "结构体读写、NOP 与自定义脚本地址"
};
//#endregion
//#region content/docs/cleo/sa/plus/misc.mdx?collection=docs&only=frontmatter
var frontmatter$125 = {
	"title": "杂项 Misc",
	"description": "CLEO+ 分类说明（无独立 opcode 堆）"
};
//#endregion
//#region content/docs/cleo/sa/plus/mouse.mdx?collection=docs&only=frontmatter
var frontmatter$124 = {
	"title": "鼠标 Mouse",
	"description": "滚轮与灵敏度"
};
//#endregion
//#region content/docs/cleo/sa/plus/pad.mdx?collection=docs&only=frontmatter
var frontmatter$123 = {
	"title": "手柄 Pad",
	"description": "键边沿与 Pad 控制"
};
//#endregion
//#region content/docs/cleo/sa/plus/pickup.mdx?collection=docs&only=frontmatter
var frontmatter$122 = {
	"title": "拾取物 Pickup",
	"description": "坐标查拾取物、模型类型与指针"
};
//#endregion
//#region content/docs/cleo/sa/plus/render.mdx?collection=docs&only=frontmatter
var frontmatter$121 = {
	"title": "渲染对象 RenderObject",
	"description": "挂到角色骨骼上的渲染物体"
};
//#endregion
//#region content/docs/cleo/sa/plus/script.mdx?collection=docs&only=frontmatter
var frontmatter$120 = {
	"title": "脚本 Script",
	"description": "脚本变量、自定义脚本与生命周期事件"
};
//#endregion
//#region content/docs/cleo/sa/plus/streaming.mdx?collection=docs&only=frontmatter
var frontmatter$119 = {
	"title": "流式 Streaming",
	"description": "优先模型、特殊角色、池清理与 specialModel"
};
//#endregion
//#region content/docs/cleo/sa/plus/text.mdx?collection=docs&only=frontmatter
var frontmatter$118 = {
	"title": "文本 Text",
	"description": "字符串工具与扩展绘制"
};
//#endregion
//#region content/docs/cleo/sa/plus/txd.mdx?collection=docs&only=frontmatter
var frontmatter$117 = {
	"title": "贴图 Txd / Draw",
	"description": "扩展贴图绘制与 sprite 取纹理"
};
//#endregion
//#region content/docs/cleo/sa/plus/weapon.mdx?collection=docs&only=frontmatter
var frontmatter$116 = {
	"title": "武器 Weapon",
	"description": "开火类型与 WeaponInfo 字段"
};
//#endregion
//#region content/docs/cleo/sa/script.mdx?collection=docs&only=frontmatter
var frontmatter$115 = {
	"title": "自定义脚本",
	"description": "启停脚本、CLEO_CALL 与共享变量"
};
//#endregion
//#region content/docs/cleo/syntax-redux.mdx?collection=docs&only=frontmatter
var frontmatter$114 = {
	"title": "Redux 语法",
	"description": "JS 调用形态与 native 边界"
};
//#endregion
//#region content/docs/cleo/syntax.mdx?collection=docs&only=frontmatter
var frontmatter$113 = {
	"title": "OP / Lua 语法",
	"description": "OP · Lua · Redux 三种形态与 Lua 约定"
};
//#endregion
//#region content/docs/cleo/vc/arith.mdx?collection=docs&only=frontmatter
var frontmatter$112 = {
	"title": "算术",
	"description": "整数与位运算 opcode"
};
//#endregion
//#region content/docs/cleo/vc/dll.mdx?collection=docs&only=frontmatter
var frontmatter$111 = {
	"title": "动态库 DynamicLibrary",
	"description": "加载 DLL 与取导出地址"
};
//#endregion
//#region content/docs/cleo/vc/entity.mdx?collection=docs&only=frontmatter
var frontmatter$110 = {
	"title": "实体 Entity",
	"description": "Char / Car / World / Weapon / Camera"
};
//#endregion
//#region content/docs/cleo/vc/file.mdx?collection=docs&only=frontmatter
var frontmatter$109 = {
	"title": "文件 File / Fs",
	"description": "文件读写与目录"
};
//#endregion
//#region content/docs/cleo/vc/game.mdx?collection=docs&only=frontmatter
var frontmatter$108 = {
	"title": "游戏 Game / Pad",
	"description": "版本、键鼠手柄与天气"
};
//#endregion
//#region content/docs/cleo/vc/index.mdx?collection=docs&only=frontmatter
var frontmatter$107 = {
	"title": "Vice City",
	"description": "Vice City CLEO 扩展 opcode 按类型分页"
};
//#endregion
//#region content/docs/cleo/vc/math.mdx?collection=docs&only=frontmatter
var frontmatter$106 = {
	"title": "数学 Math",
	"description": "幂与对数"
};
//#endregion
//#region content/docs/cleo/vc/memory.mdx?collection=docs&only=frontmatter
var frontmatter$105 = {
	"title": "内存 Memory",
	"description": "内存读写、句柄指针与原生调用"
};
//#endregion
//#region content/docs/cleo/vc/misc.mdx?collection=docs&only=frontmatter
var frontmatter$104 = {
	"title": "杂项",
	"description": "无独立 class 的边缘 op 说明"
};
//#endregion
//#region content/docs/cleo/vc/script.mdx?collection=docs&only=frontmatter
var frontmatter$103 = {
	"title": "自定义脚本",
	"description": "启停脚本、CLEO_CALL 与共享变量"
};
//#endregion
//#region content/docs/cleo/vc/text.mdx?collection=docs&only=frontmatter
var frontmatter$102 = {
	"title": "文本 Text",
	"description": "字体、屏幕字与 GXT"
};
//#endregion
//#region content/docs/index.mdx?collection=docs&only=frontmatter
var frontmatter$101 = {
	"title": "综述",
	"description": "GTAMODX 文档入口 — plugin-sdk ASI 与 CLEO 脚本"
};
//#endregion
//#region content/docs/plugins/commands.mdx?collection=docs&only=frontmatter
var frontmatter$100 = {
	"title": "脚本 Command",
	"description": "在 C++ 中调用 SCM 脚本命令"
};
//#endregion
//#region content/docs/plugins/entities/anim.mdx?collection=docs&only=frontmatter
var frontmatter$99 = {
	"title": "动画 CAnimManager",
	"description": "动画块混合与关联"
};
//#endregion
//#region content/docs/plugins/entities/audio-engine.mdx?collection=docs&only=frontmatter
var frontmatter$98 = {
	"title": "音频引擎 CAudioEngine",
	"description": "前端音效、电台与主音量"
};
//#endregion
//#region content/docs/plugins/entities/camera.mdx?collection=docs&only=frontmatter
var frontmatter$97 = {
	"title": "镜头 CCamera",
	"description": "淡入淡出、脚本接管与震动"
};
//#endregion
//#region content/docs/plugins/entities/car-ctrl.mdx?collection=docs&only=frontmatter
var frontmatter$96 = {
	"title": "交通 CCarCtrl",
	"description": "交通密度、脚本造车与路网"
};
//#endregion
//#region content/docs/plugins/entities/coverage.mdx?collection=docs&only=frontmatter
var frontmatter$95 = {
	"title": "ASI 覆盖边界",
	"description": "entities 收录范围与明确不扩清单"
};
//#endregion
//#region content/docs/plugins/entities/draw.mdx?collection=docs&only=frontmatter
var frontmatter$94 = {
	"title": "绘制 CDraw",
	"description": "全局 FOV、裁剪面与淡色"
};
//#endregion
//#region content/docs/plugins/entities/entity.mdx?collection=docs&only=frontmatter
var frontmatter$93 = {
	"title": "实体 CEntity",
	"description": "模型、标志、传送与 RW 对象"
};
//#endregion
//#region content/docs/plugins/entities/entry-exit.mdx?collection=docs&only=frontmatter
var frontmatter$92 = {
	"title": "室内门 CEntryExitManager",
	"description": "室内门、进出栈与区域码"
};
//#endregion
//#region content/docs/plugins/entities/explosion.mdx?collection=docs&only=frontmatter
var frontmatter$91 = {
	"title": "爆炸 CExplosion",
	"description": "爆炸槽表添加与查询"
};
//#endregion
//#region content/docs/plugins/entities/file-mgr.mdx?collection=docs&only=frontmatter
var frontmatter$90 = {
	"title": "文件 CFileMgr",
	"description": "游戏目录相对路径读写"
};
//#endregion
//#region content/docs/plugins/entities/fire.mdx?collection=docs&only=frontmatter
var frontmatter$89 = {
	"title": "火焰 CFireManager",
	"description": "点灭火与脚本火"
};
//#endregion
//#region content/docs/plugins/entities/font.mdx?collection=docs&only=frontmatter
var frontmatter$88 = {
	"title": "字体 CFont",
	"description": "游戏内置字绘制与测宽"
};
//#endregion
//#region content/docs/plugins/entities/game.mdx?collection=docs&only=frontmatter
var frontmatter$87 = {
	"title": "游戏态 CGame",
	"description": "区域、关卡与游戏状态"
};
//#endregion
//#region content/docs/plugins/entities/hud-messages.mdx?collection=docs&only=frontmatter
var frontmatter$86 = {
	"title": "HUD 消息 CHud / CMessages",
	"description": "帮助信息、大字与 Brief 消息"
};
//#endregion
//#region content/docs/plugins/entities/index.mdx?collection=docs&only=frontmatter
var frontmatter$85 = {
	"title": "综述",
	"description": "SA 游戏类 API 入口（ASI 高频）"
};
//#endregion
//#region content/docs/plugins/entities/markers.mdx?collection=docs&only=frontmatter
var frontmatter$84 = {
	"title": "标记 CCoronas / C3dMarkers",
	"description": "光晕与 3D 标记"
};
//#endregion
//#region content/docs/plugins/entities/menu.mdx?collection=docs&only=frontmatter
var frontmatter$83 = {
	"title": "菜单 CMenuManager",
	"description": "暂停菜单与偏好开关"
};
//#endregion
//#region content/docs/plugins/entities/model-info.mdx?collection=docs&only=frontmatter
var frontmatter$82 = {
	"title": "模型信息 CModelInfo",
	"description": "按 id 查模型信息与车型判断"
};
//#endregion
//#region content/docs/plugins/entities/object.mdx?collection=docs&only=frontmatter
var frontmatter$81 = {
	"title": "物体 CObject",
	"description": "物体血量、伤害、绳索与门"
};
//#endregion
//#region content/docs/plugins/entities/pad.mdx?collection=docs&only=frontmatter
var frontmatter$80 = {
	"title": "输入 CPad",
	"description": "手柄与输入状态"
};
//#endregion
//#region content/docs/plugins/entities/pathfind.mdx?collection=docs&only=frontmatter
var frontmatter$79 = {
	"title": "寻路 CPathFind",
	"description": "ThePaths 搜路与路径节点"
};
//#endregion
//#region content/docs/plugins/entities/ped.mdx?collection=docs&only=frontmatter
var frontmatter$78 = {
	"title": "行人 CPed",
	"description": "血量、武器、状态与骨骼"
};
//#endregion
//#region content/docs/plugins/entities/physical.mdx?collection=docs&only=frontmatter
var frontmatter$77 = {
	"title": "物理 CPhysical",
	"description": "速度、力、附着与免疫"
};
//#endregion
//#region content/docs/plugins/entities/pickups.mdx?collection=docs&only=frontmatter
var frontmatter$76 = {
	"title": "拾取物 CPickups",
	"description": "生成删除拾取物与撒钱"
};
//#endregion
//#region content/docs/plugins/entities/placeable.mdx?collection=docs&only=frontmatter
var frontmatter$75 = {
	"title": "可放置 CPlaceable",
	"description": "位置、朝向与矩阵基类"
};
//#endregion
//#region content/docs/plugins/entities/player-info.mdx?collection=docs&only=frontmatter
var frontmatter$74 = {
	"title": "玩家信息 CPlayerInfo",
	"description": "钱、最大血甲、免累与玩家状态"
};
//#endregion
//#region content/docs/plugins/entities/player-ped.mdx?collection=docs&only=frontmatter
var frontmatter$73 = {
	"title": "玩家行人 CPlayerPed",
	"description": "通缉、小队、冲刺与武器切换"
};
//#endregion
//#region content/docs/plugins/entities/player.mdx?collection=docs&only=frontmatter
var frontmatter$72 = {
	"title": "玩家 FindPlayer*",
	"description": "common.h 玩家快捷（SA 高频）"
};
//#endregion
//#region content/docs/plugins/entities/pools.mdx?collection=docs&only=frontmatter
var frontmatter$71 = {
	"title": "对象池 CPools",
	"description": "句柄互转与池指针"
};
//#endregion
//#region content/docs/plugins/entities/population.mdx?collection=docs&only=frontmatter
var frontmatter$70 = {
	"title": "人口 CPopulation",
	"description": "路人密度、生成与组表"
};
//#endregion
//#region content/docs/plugins/entities/projectile.mdx?collection=docs&only=frontmatter
var frontmatter$69 = {
	"title": "抛射物 CProjectileInfo",
	"description": "火箭手雷等抛射物槽"
};
//#endregion
//#region content/docs/plugins/entities/radar.mdx?collection=docs&only=frontmatter
var frontmatter$68 = {
	"title": "雷达 CRadar",
	"description": "Blip 创建、外观与清除"
};
//#endregion
//#region content/docs/plugins/entities/scripts.mdx?collection=docs&only=frontmatter
var frontmatter$67 = {
	"title": "脚本 CTheScripts",
	"description": "脚本线程、全局开关与清理"
};
//#endregion
//#region content/docs/plugins/entities/shadows.mdx?collection=docs&only=frontmatter
var frontmatter$66 = {
	"title": "阴影 CShadows",
	"description": "地面影、车灯影与永久影"
};
//#endregion
//#region content/docs/plugins/entities/sprite2d.mdx?collection=docs&only=frontmatter
var frontmatter$65 = {
	"title": "精灵 CSprite2d",
	"description": "2D 贴图矩形与进度条"
};
//#endregion
//#region content/docs/plugins/entities/stats.mdx?collection=docs&only=frontmatter
var frontmatter$64 = {
	"title": "统计 CStats",
	"description": "读写统计与进度"
};
//#endregion
//#region content/docs/plugins/entities/streaming.mdx?collection=docs&only=frontmatter
var frontmatter$63 = {
	"title": "流式 CStreaming",
	"description": "请求加载模型与场景"
};
//#endregion
//#region content/docs/plugins/entities/time-cycle.mdx?collection=docs&only=frontmatter
var frontmatter$62 = {
	"title": "时段光 CTimeCycle",
	"description": "时段光照、雾与额外色"
};
//#endregion
//#region content/docs/plugins/entities/timer.mdx?collection=docs&only=frontmatter
var frontmatter$61 = {
	"title": "计时 CTimer",
	"description": "帧步长、游戏时间与暂停"
};
//#endregion
//#region content/docs/plugins/entities/txd-store.mdx?collection=docs&only=frontmatter
var frontmatter$60 = {
	"title": "贴图字典 CTxdStore",
	"description": "贴图字典槽加载与引用"
};
//#endregion
//#region content/docs/plugins/entities/vehicle.mdx?collection=docs&only=frontmatter
var frontmatter$59 = {
	"title": "载具 CVehicle",
	"description": "修车、司机乘客、部件与姿态"
};
//#endregion
//#region content/docs/plugins/entities/wanted.mdx?collection=docs&only=frontmatter
var frontmatter$58 = {
	"title": "通缉 CWanted",
	"description": "通缉等级与犯罪登记"
};
//#endregion
//#region content/docs/plugins/entities/water.mdx?collection=docs&only=frontmatter
var frontmatter$57 = {
	"title": "水面 CWaterLevel",
	"description": "水面高度、波浪与渲染入口"
};
//#endregion
//#region content/docs/plugins/entities/weapon.mdx?collection=docs&only=frontmatter
var frontmatter$56 = {
	"title": "武器 CWeapon",
	"description": "Ped 武器槽实例与开火入口"
};
//#endregion
//#region content/docs/plugins/entities/world-state.mdx?collection=docs&only=frontmatter
var frontmatter$55 = {
	"title": "时间天气 CClock / CWeather / CWeaponInfo",
	"description": "全局时钟、天气与武器表"
};
//#endregion
//#region content/docs/plugins/entities/world.mdx?collection=docs&only=frontmatter
var frontmatter$54 = {
	"title": "世界 CWorld",
	"description": "贴地、射线、区域清理与爆炸"
};
//#endregion
//#region content/docs/plugins/events.mdx?collection=docs&only=frontmatter
var frontmatter$53 = {
	"title": "生命周期 Events",
	"description": "挂游戏帧、绘制与实体构造析构回调（SA 为主）"
};
//#endregion
//#region content/docs/plugins/extender.mdx?collection=docs&only=frontmatter
var frontmatter$52 = {
	"title": "附加数据 Extender",
	"description": "Ped / Vehicle / Object 附加数据"
};
//#endregion
//#region content/docs/plugins/extensions/config.mdx?collection=docs&only=frontmatter
var frontmatter$51 = {
	"title": "配置 config_file",
	"description": "读写插件 ini"
};
//#endregion
//#region content/docs/plugins/extensions/font.mdx?collection=docs&only=frontmatter
var frontmatter$50 = {
	"title": "屏幕字 gamefont",
	"description": "屏幕与世界坐标文字绘制"
};
//#endregion
//#region content/docs/plugins/extensions/index.mdx?collection=docs&only=frontmatter
var frontmatter$49 = {
	"title": "综述",
	"description": "shared/extensions 工具入口"
};
//#endregion
//#region content/docs/plugins/extensions/keycheck.mdx?collection=docs&only=frontmatter
var frontmatter$48 = {
	"title": "按键 KeyCheck",
	"description": "边沿检测与延迟连发"
};
//#endregion
//#region content/docs/plugins/extensions/paths.mdx?collection=docs&only=frontmatter
var frontmatter$47 = {
	"title": "路径 paths",
	"description": "游戏目录与 ASI 目录路径"
};
//#endregion
//#region content/docs/plugins/extensions/pool-iterator.mdx?collection=docs&only=frontmatter
var frontmatter$46 = {
	"title": "池遍历 PoolIterator",
	"description": "对 CPool 做 range-for"
};
//#endregion
//#region content/docs/plugins/extensions/screen.mdx?collection=docs&only=frontmatter
var frontmatter$45 = {
	"title": "屏幕坐标 screen",
	"description": "设计坐标与分辨率换算"
};
//#endregion
//#region content/docs/plugins/index.mdx?collection=docs&only=frontmatter
var frontmatter$44 = {
	"title": "综述",
	"description": "plugin-sdk ASI 精选文档入口、覆盖边界与可抄组合示例"
};
//#endregion
//#region content/docs/plugins/patch.mdx?collection=docs&only=frontmatter
var frontmatter$43 = {
	"title": "内存 Patch",
	"description": "读写、NOP、跳转重定向与可逆修改"
};
//#endregion
//#region content/docs/plugins/pattern.mdx?collection=docs&only=frontmatter
var frontmatter$42 = {
	"title": "特征码 Pattern",
	"description": "特征码搜索与匹配后读内存"
};
//#endregion
//#region content/docs/plugins/plugin-base.mdx?collection=docs&only=frontmatter
var frontmatter$41 = {
	"title": "调用 PluginBase / Call",
	"description": "Call / CallDyn / Method / VMT 选型与基址"
};
//#endregion
//#region content/docs/plugins/recipes.mdx?collection=docs&only=frontmatter
var frontmatter$40 = {
	"title": "组合示例",
	"description": "可抄示例目录（兼容旧 /plugins/recipes 链接）"
};
//#endregion
//#region content/docs/plugins/utils/audio.mdx?collection=docs&only=frontmatter
var frontmatter$39 = {
	"title": "音频 BassSampleManager",
	"description": "采样播放（依赖 bass）"
};
//#endregion
//#region content/docs/plugins/utils/image-sprite.mdx?collection=docs&only=frontmatter
var frontmatter$38 = {
	"title": "图片精灵 Image / SpriteLoader",
	"description": "加载图片与精灵绘制"
};
//#endregion
//#region content/docs/plugins/utils/index.mdx?collection=docs&only=frontmatter
var frontmatter$37 = {
	"title": "综述",
	"description": "shared 工具库入口"
};
//#endregion
//#region content/docs/plugins/utils/math-color-timer.mdx?collection=docs&only=frontmatter
var frontmatter$36 = {
	"title": "色数学墙钟 color / maths / Timer",
	"description": "颜色、圆周率与墙钟计时"
};
//#endregion
//#region content/docs/plugins/utils/other.mdx?collection=docs&only=frontmatter
var frontmatter$35 = {
	"title": "杂项工具",
	"description": "Other.h 控制台、随机、字符串与插值"
};
//#endregion
//#region content/docs/plugins/utils/shader.mdx?collection=docs&only=frontmatter
var frontmatter$34 = {
	"title": "着色器 Shader",
	"description": "SA 着色器（继承 DynamicResource）"
};
//#endregion
//#region content/docs/plugins/utils/text-error.mdx?collection=docs&only=frontmatter
var frontmatter$33 = {
	"title": "文本与报错",
	"description": "TextLoader、StringUtils、Error / Message"
};
//#endregion
//#region content/docs/plugins/utils/version-address.mdx?collection=docs&only=frontmatter
var frontmatter$32 = {
	"title": "版本与地址",
	"description": "GameVersion、DynAddress、DynamicResource"
};
//#endregion
//#region content/docs/skill/cleo-dev.mdx?collection=docs&only=frontmatter
var frontmatter$31 = {
	"title": "CLEO",
	"description": "CLEO 开发 Skill · opcode、Lua 与 Redux 硬约束与文档路由"
};
//#endregion
//#region content/docs/skill/index.mdx?collection=docs&only=frontmatter
var frontmatter$30 = {
	"title": "综述",
	"description": "Cursor / IDE 用 gtamodx skill 路由与边界"
};
//#endregion
//#region content/docs/skill/plugins-dev.mdx?collection=docs&only=frontmatter
var frontmatter$29 = {
	"title": "插件",
	"description": "插件开发 Skill · ASI / plugin-sdk 侧硬约束与文档路由"
};
//#endregion
//#region content/docs/skill/xbase-dev.mdx?collection=docs&only=frontmatter
var frontmatter$28 = {
	"title": "XBase",
	"description": "XBase 开发 Skill · 公共 API、能力矩阵与版本后端边界"
};
//#endregion
//#region content/docs/xbase/bullet-assist.mdx?collection=docs&only=frontmatter
var frontmatter$27 = {
	"title": "BulletAssist",
	"description": "子弹追踪、坐标透视、强制锁定与开火抑制。"
};
//#endregion
//#region content/docs/xbase/camera.mdx?collection=docs&only=frontmatter
var frontmatter$26 = {
	"title": "Camera",
	"description": "自由视角与俯视相机。"
};
//#endregion
//#region content/docs/xbase/cheats.mdx?collection=docs&only=frontmatter
var frontmatter$25 = {
	"title": "Cheats",
	"description": "游戏全局作弊开关与随机作弊。"
};
//#endregion
//#region content/docs/xbase/config.mdx?collection=docs&only=frontmatter
var frontmatter$24 = {
	"title": "Config",
	"description": "基于 JSON 文件的持久化配置管理器。"
};
//#endregion
//#region content/docs/xbase/core.mdx?collection=docs&only=frontmatter
var frontmatter$23 = {
	"title": "Core",
	"description": "初始化、世界就绪检测。"
};
//#endregion
//#region content/docs/xbase/hooks.mdx?collection=docs&only=frontmatter
var frontmatter$22 = {
	"title": "Hooks",
	"description": "D3D9 Hook（kiero）+ ImGui 引导。"
};
//#endregion
//#region content/docs/xbase/host-integration.mdx?collection=docs&only=frontmatter
var frontmatter$21 = {
	"title": "宿主接入与版本后端",
	"description": "XBase 静态库的版本选择、生命周期和能力边界。"
};
//#endregion
//#region content/docs/xbase/hotkey.mdx?collection=docs&only=frontmatter
var frontmatter$20 = {
	"title": "Hotkey",
	"description": "按键绑定、Toggle/Hold/Once 模式与持久化。"
};
//#endregion
//#region content/docs/xbase/i18n.mdx?collection=docs&only=frontmatter
var frontmatter$19 = {
	"title": "I18n",
	"description": "多语言字符串翻译系统。"
};
//#endregion
//#region content/docs/xbase/index.mdx?collection=docs&only=frontmatter
var frontmatter$18 = {
	"title": "综述",
	"description": "XBase 是 GTA SA / VC / III 的轻量基础库。大道至简。"
};
//#endregion
//#region content/docs/xbase/json.mdx?collection=docs&only=frontmatter
var frontmatter$17 = {
	"title": "Json",
	"description": "手写递归下降 JSON 解析器 + 序列化器。"
};
//#endregion
//#region content/docs/xbase/log.mdx?collection=docs&only=frontmatter
var frontmatter$16 = {
	"title": "Log",
	"description": "线程安全的日志系统，同时写入文件和内存缓存。"
};
//#endregion
//#region content/docs/xbase/overlay.mdx?collection=docs&only=frontmatter
var frontmatter$15 = {
	"title": "Overlay",
	"description": "屏幕信息覆盖层，显示 FPS、坐标、血量、护甲、金钱、通缉、时间、室内编号。"
};
//#endregion
//#region content/docs/xbase/ped.mdx?collection=docs&only=frontmatter
var frontmatter$14 = {
	"title": "Ped",
	"description": "Ped 生成、作弊、帮派控制。"
};
//#endregion
//#region content/docs/xbase/player.mdx?collection=docs&only=frontmatter
var frontmatter$13 = {
	"title": "Player",
	"description": "血量、护甲、金钱、通缉、皮肤、技能与运行时状态机。"
};
//#endregion
//#region content/docs/xbase/scene.mdx?collection=docs&only=frontmatter
var frontmatter$12 = {
	"title": "Scene",
	"description": "动画、粒子、过场动画。"
};
//#endregion
//#region content/docs/xbase/teleport.mdx?collection=docs&only=frontmatter
var frontmatter$11 = {
	"title": "Teleport",
	"description": "坐标传送、标记点传送、地图传送。"
};
//#endregion
//#region content/docs/xbase/theme.mdx?collection=docs&only=frontmatter
var frontmatter$10 = {
	"title": "Theme",
	"description": "主题配色与样式管理。"
};
//#endregion
//#region content/docs/xbase/types.mdx?collection=docs&only=frontmatter
var frontmatter$9 = {
	"title": "Types",
	"description": "共享数据结构定义。"
};
//#endregion
//#region content/docs/xbase/ui.mdx?collection=docs&only=frontmatter
var frontmatter$8 = {
	"title": "UI",
	"description": "窗口管理、Tab 系统、MenuSurface 与基础 UI 组件。"
};
//#endregion
//#region content/docs/xbase/vehicle-effects.mdx?collection=docs&only=frontmatter
var frontmatter$7 = {
	"title": "VehicleEffects",
	"description": "载具渲染期特效（霓虹等）。"
};
//#endregion
//#region content/docs/xbase/vehicle.mdx?collection=docs&only=frontmatter
var frontmatter$6 = {
	"title": "Vehicle",
	"description": "修复、生成、引擎、灯光、锁定、防护、特效。"
};
//#endregion
//#region content/docs/xbase/version.mdx?collection=docs&only=frontmatter
var frontmatter$5 = {
	"title": "Version",
	"description": "游戏版本检测与版本名称。"
};
//#endregion
//#region content/docs/xbase/visual.mdx?collection=docs&only=frontmatter
var frontmatter$4 = {
	"title": "Visual",
	"description": "HUD、雷达、雷达选项与画面滤镜。"
};
//#endregion
//#region content/docs/xbase/weapon.mdx?collection=docs&only=frontmatter
var frontmatter$3 = {
	"title": "Weapon",
	"description": "给予武器、清空、丢弃、无限弹药与属性覆盖。"
};
//#endregion
//#region content/docs/xbase/web-bridge.mdx?collection=docs&only=frontmatter
var frontmatter$2 = {
	"title": "WebBridge",
	"description": "让网页 JavaScript 直接调用 XBase 公共 API，用前端框架替代 ImGui 写界面。"
};
//#endregion
//#region content/docs/xbase/webview.mdx?collection=docs&only=frontmatter
var frontmatter$1 = {
	"title": "WebView",
	"description": "通过系统 WebView2 在游戏窗口内渲染网页。"
};
//#endregion
//#region content/docs/xbase/world.mdx?collection=docs&only=frontmatter
var frontmatter = {
	"title": "World",
	"description": "天气、时间、游戏速度、重力、Pickup。"
};
//#endregion
//#region node_modules/.pnpm/fumadocs-mdx@15.2.0_@types+mdast@4.0.4_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-_90849500dae805d7f2e77f6293e16471/node_modules/fumadocs-mdx/dist/runtime/server.js
function server$1() {
	function fileInfo(file, base) {
		if (file.startsWith("./")) file = file.slice(2);
		return {
			path: file,
			fullPath: path$1.join(base, file)
		};
	}
	function mapDocData(entry) {
		const data = {
			body: entry.default,
			toc: entry.toc,
			structuredData: entry.structuredData,
			_exports: entry
		};
		for (const key of ["lastModified", "extractedReferences"]) data[key] = entry[key];
		return data;
	}
	return {
		async doc(_name, base, glob) {
			return await Promise.all(Object.entries(glob).map(async ([k, v]) => {
				const data = typeof v === "function" ? await v() : v;
				return {
					...mapDocData(data),
					...data.frontmatter,
					...createDocMethods(fileInfo(k, base), () => data)
				};
			}));
		},
		async docLazy(_name, base, head, body) {
			return await Promise.all(Object.entries(head).map(async ([k, v]) => {
				const data = typeof v === "function" ? await v() : v;
				const content = body[k];
				return {
					...data,
					...createDocMethods(fileInfo(k, base), content),
					async load() {
						return mapDocData(await content());
					},
					async structuredData() {
						return (await content()).structuredData;
					}
				};
			}));
		},
		async meta(_name, base, glob) {
			return await Promise.all(Object.entries(glob).map(async ([k, v]) => {
				const data = typeof v === "function" ? await v() : v;
				return {
					info: fileInfo(k, base),
					...data
				};
			}));
		},
		async docs(name, base, metaGlob, docGlob) {
			return {
				docs: await this.doc(name, base, docGlob),
				meta: await this.meta(name, base, metaGlob),
				toFumadocsSource(options) {
					return toFumadocsSource(this.docs, this.meta, options);
				}
			};
		},
		async docsLazy(name, base, metaGlob, docHeadGlob, docBodyGlob) {
			return {
				docs: await this.docLazy(name, base, docHeadGlob, docBodyGlob),
				meta: await this.meta(name, base, metaGlob),
				toFumadocsSource(options) {
					return toFumadocsSource(this.docs, this.meta, options);
				}
			};
		}
	};
}
function toFumadocsSource(pages, metas, options) {
	const baseDir = options?.baseDir;
	const files = [];
	for (const entry of pages) files.push({
		type: "page",
		path: baseDir ? path$1.join(baseDir, entry.info.path) : entry.info.path,
		absolutePath: entry.info.fullPath,
		data: entry
	});
	for (const entry of metas) files.push({
		type: "meta",
		path: baseDir ? path$1.join(baseDir, entry.info.path) : entry.info.path,
		absolutePath: entry.info.fullPath,
		data: entry
	});
	return { files };
}
function createDocMethods(info, load) {
	return {
		info,
		async getText(type) {
			if (type === "raw") return await (await import("node:fs/promises")).readFile(info.fullPath, "utf-8");
			const data = await load();
			const markdown = data._markdown ?? data._exports?._markdown;
			if (typeof markdown !== "string") throw new Error("getText('processed') requires `includeProcessedMarkdown` to be enabled in your collection config.");
			return markdown;
		},
		async getMDAST() {
			const data = await load();
			if (!data._mdast) throw new Error("getMDAST() requires `includeMDAST` to be enabled in your collection config.");
			return JSON.parse(data._mdast);
		}
	};
}
var docs = await server$1().docsLazy("docs", "content/docs", /* #__PURE__ */ Object.assign({
	"./cleo/gta3/meta.json": meta_default$16,
	"./cleo/meta.json": meta_default$15,
	"./cleo/sa/default/meta.json": meta_default$14,
	"./cleo/sa/ext/imgui/meta.json": meta_default$13,
	"./cleo/sa/ext/meta.json": meta_default$12,
	"./cleo/sa/ext/newopcodes/meta.json": meta_default$11,
	"./cleo/sa/ext/sampfuncs/meta.json": meta_default$10,
	"./cleo/sa/meta.json": meta_default$9,
	"./cleo/sa/plus/meta.json": meta_default$8,
	"./cleo/vc/meta.json": meta_default$7,
	"./meta.json": meta_default$6,
	"./plugins/entities/meta.json": meta_default$5,
	"./plugins/extensions/meta.json": meta_default$4,
	"./plugins/meta.json": meta_default$3,
	"./plugins/utils/meta.json": meta_default$2,
	"./skill/meta.json": meta_default$1,
	"./xbase/meta.json": meta_default
}), /* #__PURE__ */ Object.assign({
	"./cleo/gta3/arith.mdx": frontmatter$275,
	"./cleo/gta3/dll.mdx": frontmatter$274,
	"./cleo/gta3/entity.mdx": frontmatter$273,
	"./cleo/gta3/file.mdx": frontmatter$272,
	"./cleo/gta3/game.mdx": frontmatter$271,
	"./cleo/gta3/index.mdx": frontmatter$270,
	"./cleo/gta3/math.mdx": frontmatter$269,
	"./cleo/gta3/memory.mdx": frontmatter$268,
	"./cleo/gta3/misc.mdx": frontmatter$267,
	"./cleo/gta3/script.mdx": frontmatter$266,
	"./cleo/gta3/text.mdx": frontmatter$265,
	"./cleo/index.mdx": frontmatter$264,
	"./cleo/sa/arith.mdx": frontmatter$263,
	"./cleo/sa/default/attractor.mdx": frontmatter$262,
	"./cleo/sa/default/audio.mdx": frontmatter$261,
	"./cleo/sa/default/blip.mdx": frontmatter$260,
	"./cleo/sa/default/boat.mdx": frontmatter$259,
	"./cleo/sa/default/camera.mdx": frontmatter$258,
	"./cleo/sa/default/car.mdx": frontmatter$257,
	"./cleo/sa/default/cargenerator.mdx": frontmatter$256,
	"./cleo/sa/default/char.mdx": frontmatter$255,
	"./cleo/sa/default/checkpoint.mdx": frontmatter$254,
	"./cleo/sa/default/clock.mdx": frontmatter$253,
	"./cleo/sa/default/conversation.mdx": frontmatter$252,
	"./cleo/sa/default/crane.mdx": frontmatter$251,
	"./cleo/sa/default/cutscene.mdx": frontmatter$250,
	"./cleo/sa/default/debugger.mdx": frontmatter$249,
	"./cleo/sa/default/decisionmaker.mdx": frontmatter$248,
	"./cleo/sa/default/decisionmakerchar.mdx": frontmatter$247,
	"./cleo/sa/default/decisionmakergroup.mdx": frontmatter$246,
	"./cleo/sa/default/fx.mdx": frontmatter$245,
	"./cleo/sa/default/game.mdx": frontmatter$244,
	"./cleo/sa/default/gang.mdx": frontmatter$243,
	"./cleo/sa/default/garage.mdx": frontmatter$242,
	"./cleo/sa/default/group.mdx": frontmatter$241,
	"./cleo/sa/default/heli.mdx": frontmatter$240,
	"./cleo/sa/default/hud.mdx": frontmatter$239,
	"./cleo/sa/default/index.mdx": frontmatter$238,
	"./cleo/sa/default/math.mdx": frontmatter$237,
	"./cleo/sa/default/menu.mdx": frontmatter$236,
	"./cleo/sa/default/misc.mdx": frontmatter$235,
	"./cleo/sa/default/mission.mdx": frontmatter$234,
	"./cleo/sa/default/mouse.mdx": frontmatter$233,
	"./cleo/sa/default/object.mdx": frontmatter$232,
	"./cleo/sa/default/pad.mdx": frontmatter$231,
	"./cleo/sa/default/particle.mdx": frontmatter$230,
	"./cleo/sa/default/path.mdx": frontmatter$229,
	"./cleo/sa/default/pickup.mdx": frontmatter$228,
	"./cleo/sa/default/plane.mdx": frontmatter$227,
	"./cleo/sa/default/player.mdx": frontmatter$226,
	"./cleo/sa/default/rc.mdx": frontmatter$225,
	"./cleo/sa/default/restart.mdx": frontmatter$224,
	"./cleo/sa/default/scriptfire.mdx": frontmatter$223,
	"./cleo/sa/default/searchlight.mdx": frontmatter$222,
	"./cleo/sa/default/sequence.mdx": frontmatter$221,
	"./cleo/sa/default/shopping.mdx": frontmatter$220,
	"./cleo/sa/default/skip.mdx": frontmatter$219,
	"./cleo/sa/default/sound.mdx": frontmatter$218,
	"./cleo/sa/default/sphere.mdx": frontmatter$217,
	"./cleo/sa/default/stat.mdx": frontmatter$216,
	"./cleo/sa/default/streamedscript.mdx": frontmatter$215,
	"./cleo/sa/default/streaming.mdx": frontmatter$214,
	"./cleo/sa/default/stuckcarcheck.mdx": frontmatter$213,
	"./cleo/sa/default/task.mdx": frontmatter$212,
	"./cleo/sa/default/text.mdx": frontmatter$211,
	"./cleo/sa/default/trailer.mdx": frontmatter$210,
	"./cleo/sa/default/train.mdx": frontmatter$209,
	"./cleo/sa/default/txd.mdx": frontmatter$208,
	"./cleo/sa/default/user3dmarker.mdx": frontmatter$207,
	"./cleo/sa/default/weapon.mdx": frontmatter$206,
	"./cleo/sa/default/weather.mdx": frontmatter$205,
	"./cleo/sa/default/world.mdx": frontmatter$204,
	"./cleo/sa/default/zone.mdx": frontmatter$203,
	"./cleo/sa/dll.mdx": frontmatter$202,
	"./cleo/sa/entity.mdx": frontmatter$201,
	"./cleo/sa/ext/audio.mdx": frontmatter$200,
	"./cleo/sa/ext/bitwise.mdx": frontmatter$199,
	"./cleo/sa/ext/clipboard.mdx": frontmatter$198,
	"./cleo/sa/ext/debug.mdx": frontmatter$197,
	"./cleo/sa/ext/file.mdx": frontmatter$196,
	"./cleo/sa/ext/imgui/index.mdx": frontmatter$195,
	"./cleo/sa/ext/index.mdx": frontmatter$194,
	"./cleo/sa/ext/ini.mdx": frontmatter$193,
	"./cleo/sa/ext/input.mdx": frontmatter$192,
	"./cleo/sa/ext/math.mdx": frontmatter$191,
	"./cleo/sa/ext/memory.mdx": frontmatter$190,
	"./cleo/sa/ext/newopcodes/atomic.mdx": frontmatter$189,
	"./cleo/sa/ext/newopcodes/draw.mdx": frontmatter$188,
	"./cleo/sa/ext/newopcodes/entity.mdx": frontmatter$187,
	"./cleo/sa/ext/newopcodes/fx.mdx": frontmatter$186,
	"./cleo/sa/ext/newopcodes/index.mdx": frontmatter$185,
	"./cleo/sa/ext/newopcodes/matrix.mdx": frontmatter$184,
	"./cleo/sa/ext/newopcodes/misc.mdx": frontmatter$183,
	"./cleo/sa/ext/newopcodes/print.mdx": frontmatter$182,
	"./cleo/sa/ext/newopcodes/texture.mdx": frontmatter$181,
	"./cleo/sa/ext/newopcodes/vehicle.mdx": frontmatter$180,
	"./cleo/sa/ext/sampfuncs/car.mdx": frontmatter$179,
	"./cleo/sa/ext/sampfuncs/char.mdx": frontmatter$178,
	"./cleo/sa/ext/sampfuncs/index.mdx": frontmatter$177,
	"./cleo/sa/ext/sampfuncs/misc.mdx": frontmatter$176,
	"./cleo/sa/ext/sampfuncs/object.mdx": frontmatter$175,
	"./cleo/sa/ext/sampfuncs/pickup.mdx": frontmatter$174,
	"./cleo/sa/ext/sampfuncs/sampbitstream.mdx": frontmatter$173,
	"./cleo/sa/ext/sampfuncs/sampchat.mdx": frontmatter$172,
	"./cleo/sa/ext/sampfuncs/sampchatinput.mdx": frontmatter$171,
	"./cleo/sa/ext/sampfuncs/sampclient.mdx": frontmatter$170,
	"./cleo/sa/ext/sampfuncs/samplocalchatcmd.mdx": frontmatter$169,
	"./cleo/sa/ext/sampfuncs/sampmyplayer.mdx": frontmatter$168,
	"./cleo/sa/ext/sampfuncs/sampplayer.mdx": frontmatter$167,
	"./cleo/sa/ext/sampfuncs/sampraknet.mdx": frontmatter$166,
	"./cleo/sa/ext/sampfuncs/samptextdraw.mdx": frontmatter$165,
	"./cleo/sa/ext/sampfuncs/samptextlabel3d.mdx": frontmatter$164,
	"./cleo/sa/ext/sampfuncs/sf.mdx": frontmatter$163,
	"./cleo/sa/ext/sampfuncs/sfconsole.mdx": frontmatter$162,
	"./cleo/sa/ext/sampfuncs/sfd3d.mdx": frontmatter$161,
	"./cleo/sa/ext/sampfuncs/sfd3dfont.mdx": frontmatter$160,
	"./cleo/sa/ext/sampfuncs/sfd3dtexture.mdx": frontmatter$159,
	"./cleo/sa/ext/sampfuncs/sfdownload.mdx": frontmatter$158,
	"./cleo/sa/ext/sampfuncs/sfdxutdialog.mdx": frontmatter$157,
	"./cleo/sa/ext/sampfuncs/sfgfunc.mdx": frontmatter$156,
	"./cleo/sa/ext/sampfuncs/sfgvar.mdx": frontmatter$155,
	"./cleo/sa/ext/sampfuncs/sfscript.mdx": frontmatter$154,
	"./cleo/sa/ext/sampfuncs/sftimer.mdx": frontmatter$153,
	"./cleo/sa/ext/sphere.mdx": frontmatter$152,
	"./cleo/sa/ext/text.mdx": frontmatter$151,
	"./cleo/sa/file.mdx": frontmatter$150,
	"./cleo/sa/game.mdx": frontmatter$149,
	"./cleo/sa/math.mdx": frontmatter$148,
	"./cleo/sa/memory.mdx": frontmatter$147,
	"./cleo/sa/misc.mdx": frontmatter$146,
	"./cleo/sa/plus/audio.mdx": frontmatter$145,
	"./cleo/sa/plus/blip.mdx": frontmatter$144,
	"./cleo/sa/plus/camera.mdx": frontmatter$143,
	"./cleo/sa/plus/clipboard.mdx": frontmatter$142,
	"./cleo/sa/plus/clock.mdx": frontmatter$141,
	"./cleo/sa/plus/colpoint.mdx": frontmatter$140,
	"./cleo/sa/plus/dll.mdx": frontmatter$139,
	"./cleo/sa/plus/entity-car.mdx": frontmatter$138,
	"./cleo/sa/plus/entity-char.mdx": frontmatter$137,
	"./cleo/sa/plus/entity-object.mdx": frontmatter$136,
	"./cleo/sa/plus/entity-world.mdx": frontmatter$135,
	"./cleo/sa/plus/entity.mdx": frontmatter$134,
	"./cleo/sa/plus/fx.mdx": frontmatter$133,
	"./cleo/sa/plus/game.mdx": frontmatter$132,
	"./cleo/sa/plus/hud.mdx": frontmatter$131,
	"./cleo/sa/plus/index.mdx": frontmatter$130,
	"./cleo/sa/plus/list.mdx": frontmatter$129,
	"./cleo/sa/plus/math.mdx": frontmatter$128,
	"./cleo/sa/plus/matrix.mdx": frontmatter$127,
	"./cleo/sa/plus/memory.mdx": frontmatter$126,
	"./cleo/sa/plus/misc.mdx": frontmatter$125,
	"./cleo/sa/plus/mouse.mdx": frontmatter$124,
	"./cleo/sa/plus/pad.mdx": frontmatter$123,
	"./cleo/sa/plus/pickup.mdx": frontmatter$122,
	"./cleo/sa/plus/render.mdx": frontmatter$121,
	"./cleo/sa/plus/script.mdx": frontmatter$120,
	"./cleo/sa/plus/streaming.mdx": frontmatter$119,
	"./cleo/sa/plus/text.mdx": frontmatter$118,
	"./cleo/sa/plus/txd.mdx": frontmatter$117,
	"./cleo/sa/plus/weapon.mdx": frontmatter$116,
	"./cleo/sa/script.mdx": frontmatter$115,
	"./cleo/syntax-redux.mdx": frontmatter$114,
	"./cleo/syntax.mdx": frontmatter$113,
	"./cleo/vc/arith.mdx": frontmatter$112,
	"./cleo/vc/dll.mdx": frontmatter$111,
	"./cleo/vc/entity.mdx": frontmatter$110,
	"./cleo/vc/file.mdx": frontmatter$109,
	"./cleo/vc/game.mdx": frontmatter$108,
	"./cleo/vc/index.mdx": frontmatter$107,
	"./cleo/vc/math.mdx": frontmatter$106,
	"./cleo/vc/memory.mdx": frontmatter$105,
	"./cleo/vc/misc.mdx": frontmatter$104,
	"./cleo/vc/script.mdx": frontmatter$103,
	"./cleo/vc/text.mdx": frontmatter$102,
	"./index.mdx": frontmatter$101,
	"./plugins/commands.mdx": frontmatter$100,
	"./plugins/entities/anim.mdx": frontmatter$99,
	"./plugins/entities/audio-engine.mdx": frontmatter$98,
	"./plugins/entities/camera.mdx": frontmatter$97,
	"./plugins/entities/car-ctrl.mdx": frontmatter$96,
	"./plugins/entities/coverage.mdx": frontmatter$95,
	"./plugins/entities/draw.mdx": frontmatter$94,
	"./plugins/entities/entity.mdx": frontmatter$93,
	"./plugins/entities/entry-exit.mdx": frontmatter$92,
	"./plugins/entities/explosion.mdx": frontmatter$91,
	"./plugins/entities/file-mgr.mdx": frontmatter$90,
	"./plugins/entities/fire.mdx": frontmatter$89,
	"./plugins/entities/font.mdx": frontmatter$88,
	"./plugins/entities/game.mdx": frontmatter$87,
	"./plugins/entities/hud-messages.mdx": frontmatter$86,
	"./plugins/entities/index.mdx": frontmatter$85,
	"./plugins/entities/markers.mdx": frontmatter$84,
	"./plugins/entities/menu.mdx": frontmatter$83,
	"./plugins/entities/model-info.mdx": frontmatter$82,
	"./plugins/entities/object.mdx": frontmatter$81,
	"./plugins/entities/pad.mdx": frontmatter$80,
	"./plugins/entities/pathfind.mdx": frontmatter$79,
	"./plugins/entities/ped.mdx": frontmatter$78,
	"./plugins/entities/physical.mdx": frontmatter$77,
	"./plugins/entities/pickups.mdx": frontmatter$76,
	"./plugins/entities/placeable.mdx": frontmatter$75,
	"./plugins/entities/player-info.mdx": frontmatter$74,
	"./plugins/entities/player-ped.mdx": frontmatter$73,
	"./plugins/entities/player.mdx": frontmatter$72,
	"./plugins/entities/pools.mdx": frontmatter$71,
	"./plugins/entities/population.mdx": frontmatter$70,
	"./plugins/entities/projectile.mdx": frontmatter$69,
	"./plugins/entities/radar.mdx": frontmatter$68,
	"./plugins/entities/scripts.mdx": frontmatter$67,
	"./plugins/entities/shadows.mdx": frontmatter$66,
	"./plugins/entities/sprite2d.mdx": frontmatter$65,
	"./plugins/entities/stats.mdx": frontmatter$64,
	"./plugins/entities/streaming.mdx": frontmatter$63,
	"./plugins/entities/time-cycle.mdx": frontmatter$62,
	"./plugins/entities/timer.mdx": frontmatter$61,
	"./plugins/entities/txd-store.mdx": frontmatter$60,
	"./plugins/entities/vehicle.mdx": frontmatter$59,
	"./plugins/entities/wanted.mdx": frontmatter$58,
	"./plugins/entities/water.mdx": frontmatter$57,
	"./plugins/entities/weapon.mdx": frontmatter$56,
	"./plugins/entities/world-state.mdx": frontmatter$55,
	"./plugins/entities/world.mdx": frontmatter$54,
	"./plugins/events.mdx": frontmatter$53,
	"./plugins/extender.mdx": frontmatter$52,
	"./plugins/extensions/config.mdx": frontmatter$51,
	"./plugins/extensions/font.mdx": frontmatter$50,
	"./plugins/extensions/index.mdx": frontmatter$49,
	"./plugins/extensions/keycheck.mdx": frontmatter$48,
	"./plugins/extensions/paths.mdx": frontmatter$47,
	"./plugins/extensions/pool-iterator.mdx": frontmatter$46,
	"./plugins/extensions/screen.mdx": frontmatter$45,
	"./plugins/index.mdx": frontmatter$44,
	"./plugins/patch.mdx": frontmatter$43,
	"./plugins/pattern.mdx": frontmatter$42,
	"./plugins/plugin-base.mdx": frontmatter$41,
	"./plugins/recipes.mdx": frontmatter$40,
	"./plugins/utils/audio.mdx": frontmatter$39,
	"./plugins/utils/image-sprite.mdx": frontmatter$38,
	"./plugins/utils/index.mdx": frontmatter$37,
	"./plugins/utils/math-color-timer.mdx": frontmatter$36,
	"./plugins/utils/other.mdx": frontmatter$35,
	"./plugins/utils/shader.mdx": frontmatter$34,
	"./plugins/utils/text-error.mdx": frontmatter$33,
	"./plugins/utils/version-address.mdx": frontmatter$32,
	"./skill/cleo-dev.mdx": frontmatter$31,
	"./skill/index.mdx": frontmatter$30,
	"./skill/plugins-dev.mdx": frontmatter$29,
	"./skill/xbase-dev.mdx": frontmatter$28,
	"./xbase/bullet-assist.mdx": frontmatter$27,
	"./xbase/camera.mdx": frontmatter$26,
	"./xbase/cheats.mdx": frontmatter$25,
	"./xbase/config.mdx": frontmatter$24,
	"./xbase/core.mdx": frontmatter$23,
	"./xbase/hooks.mdx": frontmatter$22,
	"./xbase/host-integration.mdx": frontmatter$21,
	"./xbase/hotkey.mdx": frontmatter$20,
	"./xbase/i18n.mdx": frontmatter$19,
	"./xbase/index.mdx": frontmatter$18,
	"./xbase/json.mdx": frontmatter$17,
	"./xbase/log.mdx": frontmatter$16,
	"./xbase/overlay.mdx": frontmatter$15,
	"./xbase/ped.mdx": frontmatter$14,
	"./xbase/player.mdx": frontmatter$13,
	"./xbase/scene.mdx": frontmatter$12,
	"./xbase/teleport.mdx": frontmatter$11,
	"./xbase/theme.mdx": frontmatter$10,
	"./xbase/types.mdx": frontmatter$9,
	"./xbase/ui.mdx": frontmatter$8,
	"./xbase/vehicle-effects.mdx": frontmatter$7,
	"./xbase/vehicle.mdx": frontmatter$6,
	"./xbase/version.mdx": frontmatter$5,
	"./xbase/visual.mdx": frontmatter$4,
	"./xbase/weapon.mdx": frontmatter$3,
	"./xbase/web-bridge.mdx": frontmatter$2,
	"./xbase/webview.mdx": frontmatter$1,
	"./xbase/world.mdx": frontmatter
}), /* #__PURE__ */ Object.assign({
	"./cleo/gta3/arith.mdx": () => import("./assets/arith-BHZvvIib.js"),
	"./cleo/gta3/dll.mdx": () => import("./assets/dll-C4_Ywv_Z.js"),
	"./cleo/gta3/entity.mdx": () => import("./assets/entity-B-twMcHS.js"),
	"./cleo/gta3/file.mdx": () => import("./assets/file-mPoXlqIf.js"),
	"./cleo/gta3/game.mdx": () => import("./assets/game-c42xsJxv.js"),
	"./cleo/gta3/index.mdx": () => import("./assets/gta3-CHgGBCba.js"),
	"./cleo/gta3/math.mdx": () => import("./assets/math-CSO_Y8KT.js"),
	"./cleo/gta3/memory.mdx": () => import("./assets/memory-Be21ifJD.js"),
	"./cleo/gta3/misc.mdx": () => import("./assets/misc-Bs6nWGm-.js"),
	"./cleo/gta3/script.mdx": () => import("./assets/script-DXV5AYN-.js"),
	"./cleo/gta3/text.mdx": () => import("./assets/text-DDTw2bnL.js"),
	"./cleo/index.mdx": () => import("./assets/cleo-BuC-2Xuz.js"),
	"./cleo/sa/arith.mdx": () => import("./assets/arith-QBHp-TW_.js"),
	"./cleo/sa/default/attractor.mdx": () => import("./assets/attractor-53cbAXGB.js"),
	"./cleo/sa/default/audio.mdx": () => import("./assets/audio-CQuYiVqS.js"),
	"./cleo/sa/default/blip.mdx": () => import("./assets/blip-GpqMHHfE.js"),
	"./cleo/sa/default/boat.mdx": () => import("./assets/boat-BNSPArkt.js"),
	"./cleo/sa/default/camera.mdx": () => import("./assets/camera-0HxjDpzR.js"),
	"./cleo/sa/default/car.mdx": () => import("./assets/car-CS-HGxp4.js"),
	"./cleo/sa/default/cargenerator.mdx": () => import("./assets/cargenerator-esdYP98U.js"),
	"./cleo/sa/default/char.mdx": () => import("./assets/char-DcRC9V2h.js"),
	"./cleo/sa/default/checkpoint.mdx": () => import("./assets/checkpoint-DFbcfBU-.js"),
	"./cleo/sa/default/clock.mdx": () => import("./assets/clock-hhYyPNn1.js"),
	"./cleo/sa/default/conversation.mdx": () => import("./assets/conversation-B72QNJOA.js"),
	"./cleo/sa/default/crane.mdx": () => import("./assets/crane-DEHwmpQB.js"),
	"./cleo/sa/default/cutscene.mdx": () => import("./assets/cutscene-EE0efEWv.js"),
	"./cleo/sa/default/debugger.mdx": () => import("./assets/debugger-BdbmYLWo.js"),
	"./cleo/sa/default/decisionmaker.mdx": () => import("./assets/decisionmaker-B3k4Q06a.js"),
	"./cleo/sa/default/decisionmakerchar.mdx": () => import("./assets/decisionmakerchar-D42egq5M.js"),
	"./cleo/sa/default/decisionmakergroup.mdx": () => import("./assets/decisionmakergroup-NvuauMad.js"),
	"./cleo/sa/default/fx.mdx": () => import("./assets/fx-BNmcjfqD.js"),
	"./cleo/sa/default/game.mdx": () => import("./assets/game-CKESK2xl.js"),
	"./cleo/sa/default/gang.mdx": () => import("./assets/gang-Bk2yl_de.js"),
	"./cleo/sa/default/garage.mdx": () => import("./assets/garage-DN2MVpCA.js"),
	"./cleo/sa/default/group.mdx": () => import("./assets/group-Cyq-LhL3.js"),
	"./cleo/sa/default/heli.mdx": () => import("./assets/heli-CZ8kV5mg.js"),
	"./cleo/sa/default/hud.mdx": () => import("./assets/hud-D6jMLZps.js"),
	"./cleo/sa/default/index.mdx": () => import("./assets/default-DcJHsMYA.js"),
	"./cleo/sa/default/math.mdx": () => import("./assets/math-CPFChYHh.js"),
	"./cleo/sa/default/menu.mdx": () => import("./assets/menu-SNm1vlYI.js"),
	"./cleo/sa/default/misc.mdx": () => import("./assets/misc-Dl2KI22Z.js"),
	"./cleo/sa/default/mission.mdx": () => import("./assets/mission-C3IjtUqm.js"),
	"./cleo/sa/default/mouse.mdx": () => import("./assets/mouse-Cw9eW_lX.js"),
	"./cleo/sa/default/object.mdx": () => import("./assets/object-C6EzB7Sg.js"),
	"./cleo/sa/default/pad.mdx": () => import("./assets/pad-zkYvnwUI.js"),
	"./cleo/sa/default/particle.mdx": () => import("./assets/particle-BL-j7rV0.js"),
	"./cleo/sa/default/path.mdx": () => import("./assets/path-BhCMJe0H.js"),
	"./cleo/sa/default/pickup.mdx": () => import("./assets/pickup-DhRSbHLv.js"),
	"./cleo/sa/default/plane.mdx": () => import("./assets/plane-un7F9JR8.js"),
	"./cleo/sa/default/player.mdx": () => import("./assets/player-BqkcmHTI.js"),
	"./cleo/sa/default/rc.mdx": () => import("./assets/rc-D5P3gJ0L.js"),
	"./cleo/sa/default/restart.mdx": () => import("./assets/restart-DeQ0F024.js"),
	"./cleo/sa/default/scriptfire.mdx": () => import("./assets/scriptfire-CsSh2Rf4.js"),
	"./cleo/sa/default/searchlight.mdx": () => import("./assets/searchlight-Bxm5g4-H.js"),
	"./cleo/sa/default/sequence.mdx": () => import("./assets/sequence-DZLNU5GJ.js"),
	"./cleo/sa/default/shopping.mdx": () => import("./assets/shopping-DEmozUsX.js"),
	"./cleo/sa/default/skip.mdx": () => import("./assets/skip-2r_wV4HE.js"),
	"./cleo/sa/default/sound.mdx": () => import("./assets/sound-CEYe98yF.js"),
	"./cleo/sa/default/sphere.mdx": () => import("./assets/sphere-CYBF2CkG.js"),
	"./cleo/sa/default/stat.mdx": () => import("./assets/stat-CnyOv_Z_.js"),
	"./cleo/sa/default/streamedscript.mdx": () => import("./assets/streamedscript-BeuRTllY.js"),
	"./cleo/sa/default/streaming.mdx": () => import("./assets/streaming-C7m7Yia1.js"),
	"./cleo/sa/default/stuckcarcheck.mdx": () => import("./assets/stuckcarcheck-C0AQNf-T.js"),
	"./cleo/sa/default/task.mdx": () => import("./assets/task-Bi5AJQsS.js"),
	"./cleo/sa/default/text.mdx": () => import("./assets/text-DgQbVhPy.js"),
	"./cleo/sa/default/trailer.mdx": () => import("./assets/trailer-Itw05iV8.js"),
	"./cleo/sa/default/train.mdx": () => import("./assets/train-LQRpcKAD.js"),
	"./cleo/sa/default/txd.mdx": () => import("./assets/txd-DWZi0eOK.js"),
	"./cleo/sa/default/user3dmarker.mdx": () => import("./assets/user3dmarker-0xu2LMpa.js"),
	"./cleo/sa/default/weapon.mdx": () => import("./assets/weapon-Bcj4RjJG.js"),
	"./cleo/sa/default/weather.mdx": () => import("./assets/weather-DPUwtd76.js"),
	"./cleo/sa/default/world.mdx": () => import("./assets/world-BwlVUl-J.js"),
	"./cleo/sa/default/zone.mdx": () => import("./assets/zone-B5z03n9I.js"),
	"./cleo/sa/dll.mdx": () => import("./assets/dll-Dhg7lKZq.js"),
	"./cleo/sa/entity.mdx": () => import("./assets/entity-BVCXLhTq.js"),
	"./cleo/sa/ext/audio.mdx": () => import("./assets/audio-_RaUYcXm.js"),
	"./cleo/sa/ext/bitwise.mdx": () => import("./assets/bitwise-o-7OjD0D.js"),
	"./cleo/sa/ext/clipboard.mdx": () => import("./assets/clipboard-CtJWytxH.js"),
	"./cleo/sa/ext/debug.mdx": () => import("./assets/debug-tE2cr-A9.js"),
	"./cleo/sa/ext/file.mdx": () => import("./assets/file-Cybi5u2v.js"),
	"./cleo/sa/ext/imgui/index.mdx": () => import("./assets/imgui-D2HBkWAu.js"),
	"./cleo/sa/ext/index.mdx": () => import("./assets/ext-BgySq_0A.js"),
	"./cleo/sa/ext/ini.mdx": () => import("./assets/ini-DSDVjj-k.js"),
	"./cleo/sa/ext/input.mdx": () => import("./assets/input-DY9ChyWv.js"),
	"./cleo/sa/ext/math.mdx": () => import("./assets/math-BO9xOyQG.js"),
	"./cleo/sa/ext/memory.mdx": () => import("./assets/memory-D94Gnv4X.js"),
	"./cleo/sa/ext/newopcodes/atomic.mdx": () => import("./assets/atomic-D_09Vg4Q.js"),
	"./cleo/sa/ext/newopcodes/draw.mdx": () => import("./assets/draw-BbzybtgJ.js"),
	"./cleo/sa/ext/newopcodes/entity.mdx": () => import("./assets/entity-uEEqEa0d.js"),
	"./cleo/sa/ext/newopcodes/fx.mdx": () => import("./assets/fx-BpXrx1F_.js"),
	"./cleo/sa/ext/newopcodes/index.mdx": () => import("./assets/newopcodes-CC5umtt0.js"),
	"./cleo/sa/ext/newopcodes/matrix.mdx": () => import("./assets/matrix-BM7sQqjL.js"),
	"./cleo/sa/ext/newopcodes/misc.mdx": () => import("./assets/misc--VvruMha.js"),
	"./cleo/sa/ext/newopcodes/print.mdx": () => import("./assets/print-38socWAN.js"),
	"./cleo/sa/ext/newopcodes/texture.mdx": () => import("./assets/texture-cZI-R3rC.js"),
	"./cleo/sa/ext/newopcodes/vehicle.mdx": () => import("./assets/vehicle-D-TH8u9J.js"),
	"./cleo/sa/ext/sampfuncs/car.mdx": () => import("./assets/car-DlEe4YdM.js"),
	"./cleo/sa/ext/sampfuncs/char.mdx": () => import("./assets/char-BYfA73qQ.js"),
	"./cleo/sa/ext/sampfuncs/index.mdx": () => import("./assets/sampfuncs-CP88JgVo.js"),
	"./cleo/sa/ext/sampfuncs/misc.mdx": () => import("./assets/misc-FqVECwNg.js"),
	"./cleo/sa/ext/sampfuncs/object.mdx": () => import("./assets/object-BCEuJ_up.js"),
	"./cleo/sa/ext/sampfuncs/pickup.mdx": () => import("./assets/pickup-oCn_NjT-.js"),
	"./cleo/sa/ext/sampfuncs/sampbitstream.mdx": () => import("./assets/sampbitstream-Getf2-Qh.js"),
	"./cleo/sa/ext/sampfuncs/sampchat.mdx": () => import("./assets/sampchat-Bxi6jEKZ.js"),
	"./cleo/sa/ext/sampfuncs/sampchatinput.mdx": () => import("./assets/sampchatinput-DG2wWVkM.js"),
	"./cleo/sa/ext/sampfuncs/sampclient.mdx": () => import("./assets/sampclient-xr6DIjUb.js"),
	"./cleo/sa/ext/sampfuncs/samplocalchatcmd.mdx": () => import("./assets/samplocalchatcmd-BZ_rRmXj.js"),
	"./cleo/sa/ext/sampfuncs/sampmyplayer.mdx": () => import("./assets/sampmyplayer-B6aefK92.js"),
	"./cleo/sa/ext/sampfuncs/sampplayer.mdx": () => import("./assets/sampplayer-C1BLaqvv.js"),
	"./cleo/sa/ext/sampfuncs/sampraknet.mdx": () => import("./assets/sampraknet-C851FXko.js"),
	"./cleo/sa/ext/sampfuncs/samptextdraw.mdx": () => import("./assets/samptextdraw-DevLPQgJ.js"),
	"./cleo/sa/ext/sampfuncs/samptextlabel3d.mdx": () => import("./assets/samptextlabel3d-DNKsLzMw.js"),
	"./cleo/sa/ext/sampfuncs/sf.mdx": () => import("./assets/sf-DMcaRLZM.js"),
	"./cleo/sa/ext/sampfuncs/sfconsole.mdx": () => import("./assets/sfconsole-CPCknidP.js"),
	"./cleo/sa/ext/sampfuncs/sfd3d.mdx": () => import("./assets/sfd3d-C8SkjPZm.js"),
	"./cleo/sa/ext/sampfuncs/sfd3dfont.mdx": () => import("./assets/sfd3dfont-Biszz6If.js"),
	"./cleo/sa/ext/sampfuncs/sfd3dtexture.mdx": () => import("./assets/sfd3dtexture-BfrILvsm.js"),
	"./cleo/sa/ext/sampfuncs/sfdownload.mdx": () => import("./assets/sfdownload-nSPgS_it.js"),
	"./cleo/sa/ext/sampfuncs/sfdxutdialog.mdx": () => import("./assets/sfdxutdialog-C4Naanhf.js"),
	"./cleo/sa/ext/sampfuncs/sfgfunc.mdx": () => import("./assets/sfgfunc-3HR2uOch.js"),
	"./cleo/sa/ext/sampfuncs/sfgvar.mdx": () => import("./assets/sfgvar-Bs-T7_7Q.js"),
	"./cleo/sa/ext/sampfuncs/sfscript.mdx": () => import("./assets/sfscript-DoSUuLEW.js"),
	"./cleo/sa/ext/sampfuncs/sftimer.mdx": () => import("./assets/sftimer-1F7Rn9B_.js"),
	"./cleo/sa/ext/sphere.mdx": () => import("./assets/sphere-DeRBFhrT.js"),
	"./cleo/sa/ext/text.mdx": () => import("./assets/text-BwEFnNLB.js"),
	"./cleo/sa/file.mdx": () => import("./assets/file-C5LXHnyB.js"),
	"./cleo/sa/game.mdx": () => import("./assets/game-CgaTyRgQ.js"),
	"./cleo/sa/math.mdx": () => import("./assets/math-DExYqyPP.js"),
	"./cleo/sa/memory.mdx": () => import("./assets/memory-CWOP-shz.js"),
	"./cleo/sa/misc.mdx": () => import("./assets/misc-KVjJ3o1C.js"),
	"./cleo/sa/plus/audio.mdx": () => import("./assets/audio-BOusv9ux.js"),
	"./cleo/sa/plus/blip.mdx": () => import("./assets/blip-DXp2vlXD.js"),
	"./cleo/sa/plus/camera.mdx": () => import("./assets/camera-Cqi4CySo.js"),
	"./cleo/sa/plus/clipboard.mdx": () => import("./assets/clipboard-DH6AWFH2.js"),
	"./cleo/sa/plus/clock.mdx": () => import("./assets/clock-DZg2OQ-Z.js"),
	"./cleo/sa/plus/colpoint.mdx": () => import("./assets/colpoint-Dow8zzKI.js"),
	"./cleo/sa/plus/dll.mdx": () => import("./assets/dll-BAJpvgsK.js"),
	"./cleo/sa/plus/entity-car.mdx": () => import("./assets/entity-car-L80muOiu.js"),
	"./cleo/sa/plus/entity-char.mdx": () => import("./assets/entity-char-CddZihd_.js"),
	"./cleo/sa/plus/entity-object.mdx": () => import("./assets/entity-object-B6xIdQQX.js"),
	"./cleo/sa/plus/entity-world.mdx": () => import("./assets/entity-world-DzkTL2_p.js"),
	"./cleo/sa/plus/entity.mdx": () => import("./assets/entity-BAXcVktk.js"),
	"./cleo/sa/plus/fx.mdx": () => import("./assets/fx-Ctef66oU.js"),
	"./cleo/sa/plus/game.mdx": () => import("./assets/game-GYeXMoRz.js"),
	"./cleo/sa/plus/hud.mdx": () => import("./assets/hud-DVLU8Uqg.js"),
	"./cleo/sa/plus/index.mdx": () => import("./assets/plus-Dk1qfsK0.js"),
	"./cleo/sa/plus/list.mdx": () => import("./assets/list-CLGlR65f.js"),
	"./cleo/sa/plus/math.mdx": () => import("./assets/math-t6UM3F4W.js"),
	"./cleo/sa/plus/matrix.mdx": () => import("./assets/matrix-D6mwQK_5.js"),
	"./cleo/sa/plus/memory.mdx": () => import("./assets/memory-CcY2uwzh.js"),
	"./cleo/sa/plus/misc.mdx": () => import("./assets/misc-BGofxS4n.js"),
	"./cleo/sa/plus/mouse.mdx": () => import("./assets/mouse-CsFxta-X.js"),
	"./cleo/sa/plus/pad.mdx": () => import("./assets/pad-CUKyMuQi.js"),
	"./cleo/sa/plus/pickup.mdx": () => import("./assets/pickup-B13MRHUD.js"),
	"./cleo/sa/plus/render.mdx": () => import("./assets/render-BHJ7tGYN.js"),
	"./cleo/sa/plus/script.mdx": () => import("./assets/script-CbONhlPw.js"),
	"./cleo/sa/plus/streaming.mdx": () => import("./assets/streaming-ColK1Vtf.js"),
	"./cleo/sa/plus/text.mdx": () => import("./assets/text-CZ7rWDcb.js"),
	"./cleo/sa/plus/txd.mdx": () => import("./assets/txd-DvB9oVyt.js"),
	"./cleo/sa/plus/weapon.mdx": () => import("./assets/weapon-EO4Aeg0r.js"),
	"./cleo/sa/script.mdx": () => import("./assets/script-DY8YCvym.js"),
	"./cleo/syntax-redux.mdx": () => import("./assets/syntax-redux-CBCIEAR4.js"),
	"./cleo/syntax.mdx": () => import("./assets/syntax-1ukrNXcm.js"),
	"./cleo/vc/arith.mdx": () => import("./assets/arith-jJxBsRzR.js"),
	"./cleo/vc/dll.mdx": () => import("./assets/dll-CYNyUtkl.js"),
	"./cleo/vc/entity.mdx": () => import("./assets/entity-BF5-_Z-g.js"),
	"./cleo/vc/file.mdx": () => import("./assets/file-CLvHLOfp.js"),
	"./cleo/vc/game.mdx": () => import("./assets/game-Br9Kbr5s.js"),
	"./cleo/vc/index.mdx": () => import("./assets/vc-D38xS0_X.js"),
	"./cleo/vc/math.mdx": () => import("./assets/math-DfEPhKPo.js"),
	"./cleo/vc/memory.mdx": () => import("./assets/memory-BTKc-Mk1.js"),
	"./cleo/vc/misc.mdx": () => import("./assets/misc-BBAfOi-O.js"),
	"./cleo/vc/script.mdx": () => import("./assets/script-CExvy-Gy.js"),
	"./cleo/vc/text.mdx": () => import("./assets/text-DA1bPftL.js"),
	"./index.mdx": () => import("./assets/docs-CxUukqBR.js"),
	"./plugins/commands.mdx": () => import("./assets/commands-i6f67cKA.js"),
	"./plugins/entities/anim.mdx": () => import("./assets/anim-BKa6YfYE.js"),
	"./plugins/entities/audio-engine.mdx": () => import("./assets/audio-engine-6doKwXWs.js"),
	"./plugins/entities/camera.mdx": () => import("./assets/camera-B_i_rLfs.js"),
	"./plugins/entities/car-ctrl.mdx": () => import("./assets/car-ctrl-Dx-UkIqS.js"),
	"./plugins/entities/coverage.mdx": () => import("./assets/coverage-DAeay_7D.js"),
	"./plugins/entities/draw.mdx": () => import("./assets/draw-4PvG5NZs.js"),
	"./plugins/entities/entity.mdx": () => import("./assets/entity-BOHeZgMv.js"),
	"./plugins/entities/entry-exit.mdx": () => import("./assets/entry-exit-BNWpRslW.js"),
	"./plugins/entities/explosion.mdx": () => import("./assets/explosion-BPbcPwUN.js"),
	"./plugins/entities/file-mgr.mdx": () => import("./assets/file-mgr-C9PV_V7q.js"),
	"./plugins/entities/fire.mdx": () => import("./assets/fire-COv-WFGX.js"),
	"./plugins/entities/font.mdx": () => import("./assets/font-B44GfSY0.js"),
	"./plugins/entities/game.mdx": () => import("./assets/game-a8v08fA5.js"),
	"./plugins/entities/hud-messages.mdx": () => import("./assets/hud-messages-CofuXTF5.js"),
	"./plugins/entities/index.mdx": () => import("./assets/entities-B4b71FeJ.js"),
	"./plugins/entities/markers.mdx": () => import("./assets/markers-DxNoH_9y.js"),
	"./plugins/entities/menu.mdx": () => import("./assets/menu-B0HsURmM.js"),
	"./plugins/entities/model-info.mdx": () => import("./assets/model-info--N_4bvCa.js"),
	"./plugins/entities/object.mdx": () => import("./assets/object-BsxHDQ31.js"),
	"./plugins/entities/pad.mdx": () => import("./assets/pad-CfkRP2dK.js"),
	"./plugins/entities/pathfind.mdx": () => import("./assets/pathfind-BIdWuNlf.js"),
	"./plugins/entities/ped.mdx": () => import("./assets/ped-BrQ3Y-Uo.js"),
	"./plugins/entities/physical.mdx": () => import("./assets/physical-Z36BTyZK.js"),
	"./plugins/entities/pickups.mdx": () => import("./assets/pickups-BhmxJuPv.js"),
	"./plugins/entities/placeable.mdx": () => import("./assets/placeable-CBOPVlgb.js"),
	"./plugins/entities/player-info.mdx": () => import("./assets/player-info-DfOUD4aq.js"),
	"./plugins/entities/player-ped.mdx": () => import("./assets/player-ped-dgfY5Ip_.js"),
	"./plugins/entities/player.mdx": () => import("./assets/player-BVK2Z3O8.js"),
	"./plugins/entities/pools.mdx": () => import("./assets/pools-CTs9OHTm.js"),
	"./plugins/entities/population.mdx": () => import("./assets/population-BSK4w1gI.js"),
	"./plugins/entities/projectile.mdx": () => import("./assets/projectile-a_krhb_a.js"),
	"./plugins/entities/radar.mdx": () => import("./assets/radar-C2n6KGBE.js"),
	"./plugins/entities/scripts.mdx": () => import("./assets/scripts-Dxc8bLyC.js"),
	"./plugins/entities/shadows.mdx": () => import("./assets/shadows-WQo2dHKI.js"),
	"./plugins/entities/sprite2d.mdx": () => import("./assets/sprite2d-CCOuenIy.js"),
	"./plugins/entities/stats.mdx": () => import("./assets/stats-CBrZWT3l.js"),
	"./plugins/entities/streaming.mdx": () => import("./assets/streaming-Cv4AO3IN.js"),
	"./plugins/entities/time-cycle.mdx": () => import("./assets/time-cycle-CTWwIgd5.js"),
	"./plugins/entities/timer.mdx": () => import("./assets/timer-CQcLgbuf.js"),
	"./plugins/entities/txd-store.mdx": () => import("./assets/txd-store-BkegSlmh.js"),
	"./plugins/entities/vehicle.mdx": () => import("./assets/vehicle-DJOm8LwH.js"),
	"./plugins/entities/wanted.mdx": () => import("./assets/wanted-B6syQleb.js"),
	"./plugins/entities/water.mdx": () => import("./assets/water-bu1PtOoL.js"),
	"./plugins/entities/weapon.mdx": () => import("./assets/weapon-pAbQgSxX.js"),
	"./plugins/entities/world-state.mdx": () => import("./assets/world-state-Bs25rGOU.js"),
	"./plugins/entities/world.mdx": () => import("./assets/world-TmTEMgGP.js"),
	"./plugins/events.mdx": () => import("./assets/events-Jirkr-ej.js"),
	"./plugins/extender.mdx": () => import("./assets/extender-l7lSPvvK.js"),
	"./plugins/extensions/config.mdx": () => import("./assets/config-D36rLiXS.js"),
	"./plugins/extensions/font.mdx": () => import("./assets/font-B8ay7TpV.js"),
	"./plugins/extensions/index.mdx": () => import("./assets/extensions-DM1-uhBB.js"),
	"./plugins/extensions/keycheck.mdx": () => import("./assets/keycheck-COlJYDRQ.js"),
	"./plugins/extensions/paths.mdx": () => import("./assets/paths-kOlRKYp6.js"),
	"./plugins/extensions/pool-iterator.mdx": () => import("./assets/pool-iterator-CI__ivQc.js"),
	"./plugins/extensions/screen.mdx": () => import("./assets/screen-C2oCwKTO.js"),
	"./plugins/index.mdx": () => import("./assets/plugins-HZntkhs5.js"),
	"./plugins/patch.mdx": () => import("./assets/patch-CLd8xR8W.js"),
	"./plugins/pattern.mdx": () => import("./assets/pattern-VI2uYxpQ.js"),
	"./plugins/plugin-base.mdx": () => import("./assets/plugin-base-DULgjeJL.js"),
	"./plugins/recipes.mdx": () => import("./assets/recipes-DdqSxnH_.js"),
	"./plugins/utils/audio.mdx": () => import("./assets/audio-CFfUEVjl.js"),
	"./plugins/utils/image-sprite.mdx": () => import("./assets/image-sprite-CbTGmGGW.js"),
	"./plugins/utils/index.mdx": () => import("./assets/utils-BDP7YBpj.js"),
	"./plugins/utils/math-color-timer.mdx": () => import("./assets/math-color-timer-B8IvCtvx.js"),
	"./plugins/utils/other.mdx": () => import("./assets/other-DafYqEQK.js"),
	"./plugins/utils/shader.mdx": () => import("./assets/shader-CrYpURH0.js"),
	"./plugins/utils/text-error.mdx": () => import("./assets/text-error-DtRMxTi0.js"),
	"./plugins/utils/version-address.mdx": () => import("./assets/version-address-C5BP9laZ.js"),
	"./skill/cleo-dev.mdx": () => import("./assets/cleo-dev-CJJP0gca.js"),
	"./skill/index.mdx": () => import("./assets/skill-ncHL9JdJ.js"),
	"./skill/plugins-dev.mdx": () => import("./assets/plugins-dev-CEkdlUSD.js"),
	"./skill/xbase-dev.mdx": () => import("./assets/xbase-dev-C2oJfBR0.js"),
	"./xbase/bullet-assist.mdx": () => import("./assets/bullet-assist-Drhki_mB.js"),
	"./xbase/camera.mdx": () => import("./assets/camera-B-t5RcWD.js"),
	"./xbase/cheats.mdx": () => import("./assets/cheats-Cu-EnDfI.js"),
	"./xbase/config.mdx": () => import("./assets/config-Demomk76.js"),
	"./xbase/core.mdx": () => import("./assets/core-DkEOAE66.js"),
	"./xbase/hooks.mdx": () => import("./assets/hooks-DkfSMD32.js"),
	"./xbase/host-integration.mdx": () => import("./assets/host-integration-CaWcC3Hi.js"),
	"./xbase/hotkey.mdx": () => import("./assets/hotkey-BXlpj9lZ.js"),
	"./xbase/i18n.mdx": () => import("./assets/i18n-QBk3qEhP.js"),
	"./xbase/index.mdx": () => import("./assets/xbase-Bb0lbsfa.js"),
	"./xbase/json.mdx": () => import("./assets/json-ClbxQhxp.js"),
	"./xbase/log.mdx": () => import("./assets/log-nb178W60.js"),
	"./xbase/overlay.mdx": () => import("./assets/overlay-DNEsc_2E.js"),
	"./xbase/ped.mdx": () => import("./assets/ped-DU-z1Nqt.js"),
	"./xbase/player.mdx": () => import("./assets/player-DJ81-YhV.js"),
	"./xbase/scene.mdx": () => import("./assets/scene-DgpemeA-.js"),
	"./xbase/teleport.mdx": () => import("./assets/teleport-zZIAPn74.js"),
	"./xbase/theme.mdx": () => import("./assets/theme-CeIVPkS-.js"),
	"./xbase/types.mdx": () => import("./assets/types-eI3Y8Ens.js"),
	"./xbase/ui.mdx": () => import("./assets/ui-DyrhEAZj.js"),
	"./xbase/vehicle-effects.mdx": () => import("./assets/vehicle-effects-DFE-Fgd5.js"),
	"./xbase/vehicle.mdx": () => import("./assets/vehicle-CLWc7g71.js"),
	"./xbase/version.mdx": () => import("./assets/version-D7VgHGZ8.js"),
	"./xbase/visual.mdx": () => import("./assets/visual-DZr7FCBK.js"),
	"./xbase/weapon.mdx": () => import("./assets/weapon--C8Vxj5s.js"),
	"./xbase/web-bridge.mdx": () => import("./assets/web-bridge-DxQc3cvR.js"),
	"./xbase/webview.mdx": () => import("./assets/webview-C_sviExC.js"),
	"./xbase/world.mdx": () => import("./assets/world-Co1at2KJ.js")
}));
//#endregion
//#region node_modules/.pnpm/fumadocs-core@16.11.5_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.5_@type_72cb31c98dbdcd9237f5eec6550b9329/node_modules/fumadocs-core/dist/source/plugins/lucide-icons.js
/**
* Convert icon names into Lucide Icons, requires `lucide-react` to be installed.
*/
function lucideIconsPlugin(options = {}) {
	const { defaultIcon } = options;
	return iconPlugin((icon = defaultIcon) => {
		if (icon === void 0) return;
		const Icon = icons[icon];
		if (!Icon) {
			console.warn(`[lucide-icons-plugin] Unknown icon detected: ${icon}.`);
			return;
		}
		return createElement(Icon);
	});
}
//#endregion
//#region lib/seo.ts
/**
* 从 docs slug 推断 type / gameType
* 例: cleo/gta3/arith → CLEO + III
*     cleo/sa/plus/memory → CLEO+ + SA
*     plugins/events → 插件 + SA
*/
function seoPartsFromSlug(slug, pageTitle) {
	const parts = slug ?? [];
	const title = cleanPageTitle(pageTitle);
	if (parts.length === 0) return {
		title: title || "文档",
		type: "文档"
	};
	if (parts[0] === "plugins") return {
		title: title || "插件",
		type: "插件",
		gameType: "SA"
	};
	if (parts[0] === "cleo") {
		if (parts[1] === "sa") return {
			title: title || "SA",
			type: saType(parts),
			gameType: "SA"
		};
		if (parts[1] === "vc") return {
			title: title || "VC",
			type: "CLEO",
			gameType: "VC"
		};
		if (parts[1] === "gta3") return {
			title: title || "III",
			type: "CLEO",
			gameType: "III"
		};
		return {
			title: title || "CLEO",
			type: "CLEO"
		};
	}
	if (parts[0] === "xbase") return {
		title: title || "XBase",
		type: "XBase"
	};
	if (parts[0] === "skill") return {
		title: title || "技能",
		type: "技能"
	};
	return {
		title: title || parts.at(-1) || "文档",
		type: "文档"
	};
}
function saType(parts) {
	if (parts[2] === "plus") return "CLEO+";
	if (parts[2] === "default") return "default";
	if (parts[2] === "ext") {
		if (parts[3] === "newopcodes") return "NewOpcodes";
		if (parts[3] === "sampfuncs") return "SAMPFUNCS";
		if (parts[3] === "imgui") return "imgui";
		return "扩展";
	}
	return "CLEO";
}
/** 去掉历史塞进 title 的前缀，只留页面本身名称 */
function cleanPageTitle(raw) {
	let t = raw.trim();
	t = t.replace(/^CLEO\s*·\s*(?:GTA\s*)?(?:III|VC|SA)\s*·\s*/i, "");
	t = t.replace(/^CLEO\s*·\s*(?:GTA\s*)?(?:III|VC|SA)\s*$/i, (m) => {
		if (/III/i.test(m)) return "III";
		if (/VC/i.test(m)) return "VC";
		return "SA";
	});
	t = t.replace(/^CLEO\+\s*·\s*/i, "");
	t = t.replace(/^CLEO\s*·\s*/i, "");
	t = t.replace(/^CLEO\s+/i, "");
	t = t.replace(/^SAMPFUNCS\s*·\s*/i, "");
	t = t.replace(/^NewOpcodes\s*·\s*/i, "");
	t = t.replace(/^SA\s*·\s*/i, "");
	t = t.replace(/^Entity\s*·\s*/i, "Entity ");
	t = t.replace(/^[a-z][a-z0-9_-]*\s*·\s*/, "");
	return t.trim() || raw.trim();
}
/**
* SEO title: title / type / gameType - sitetitle
* 缺项与重复项会自动跳过
*/
function formatDocSeoTitle(parts) {
	const title = parts.title.trim();
	const type = parts.type?.trim();
	const gameType = parts.gameType?.trim();
	const segs = [];
	if (title) segs.push(title);
	if (type && type !== title) segs.push(type);
	if (gameType && gameType !== title && gameType !== type) segs.push(gameType);
	const head = segs.join(" / ");
	return head ? `${head} - ${siteTitle}` : siteTitle;
}
function docSeoTitle(slug, pageTitle) {
	return formatDocSeoTitle(seoPartsFromSlug(slug, pageTitle));
}
//#endregion
//#region lib/source.ts
var source = loader$7({
	baseUrl: docsRoute,
	source: docs.toFumadocsSource(),
	plugins: [lucideIconsPlugin(), {
		name: "clean-page-title",
		transformStorage({ storage }) {
			for (const filePath of storage.getFiles()) {
				const file = storage.read(filePath);
				if (file?.format === "page" && typeof file.data.title === "string") file.data.title = cleanPageTitle(file.data.title);
			}
		}
	}]
});
async function getLLMText(page) {
	const processed = await page.data.getText("processed");
	return `# ${cleanPageTitle(page.data.title)} (${page.url})

${processed}`;
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/components/card.js
function Cards(props) {
	return /* @__PURE__ */ jsx("div", {
		...props,
		className: cn$1("grid grid-cols-2 gap-3 @container", props.className),
		children: props.children
	});
}
function Card({ icon, title, description, ...props }) {
	return /* @__PURE__ */ jsxs(props.href ? Link$1 : "div", {
		...props,
		"data-card": true,
		className: cn$1("block rounded-xl border bg-fd-card p-4 text-fd-card-foreground transition-colors @max-lg:col-span-full", props.href && "hover:bg-fd-accent/80", props.className),
		children: [
			icon ? /* @__PURE__ */ jsx("div", {
				className: "not-prose mb-2 w-fit shadow-md rounded-lg border bg-fd-muted p-1.5 text-fd-muted-foreground [&_svg]:size-4",
				children: icon
			}) : null,
			/* @__PURE__ */ jsx("h3", {
				className: "not-prose mb-1 text-sm font-medium",
				children: title
			}),
			description ? /* @__PURE__ */ jsx("p", {
				className: "my-0! text-sm text-fd-muted-foreground",
				children: description
			}) : null,
			/* @__PURE__ */ jsx("div", {
				className: "text-sm text-fd-muted-foreground prose-no-margin empty:hidden",
				children: props.children
			})
		]
	});
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/components/callout.js
var iconClass = "size-5 -me-0.5 fill-(--callout-color) text-fd-card";
function Callout({ children, title, ...props }) {
	return /* @__PURE__ */ jsxs(CalloutContainer, {
		...props,
		children: [title && /* @__PURE__ */ jsx(CalloutTitle, { children: title }), /* @__PURE__ */ jsx(CalloutDescription, { children })]
	});
}
function resolveAlias(type) {
	if (type === "warn") return "warning";
	if (type === "tip") return "info";
	return type;
}
function CalloutContainer({ type: inputType = "info", icon, children, className, style, ...props }) {
	const type = resolveAlias(inputType);
	return /* @__PURE__ */ jsxs("div", {
		className: cn$1("flex gap-2 my-4 rounded-xl border bg-fd-card p-3 ps-1 text-sm text-fd-card-foreground shadow-md", className),
		style: {
			"--callout-color": `var(--color-fd-${type}, var(--color-fd-muted))`,
			...style
		},
		...props,
		children: [
			/* @__PURE__ */ jsx("div", {
				role: "none",
				className: "w-0.5 bg-(--callout-color)/50 rounded-sm"
			}),
			icon ?? {
				info: /* @__PURE__ */ jsx(Info, { className: iconClass }),
				warning: /* @__PURE__ */ jsx(TriangleAlert, { className: iconClass }),
				error: /* @__PURE__ */ jsx(CircleX, { className: iconClass }),
				success: /* @__PURE__ */ jsx(CircleCheck, { className: iconClass }),
				idea: /* @__PURE__ */ jsx(Lightbulb, { className: "size-5 -me-0.5 fill-(--callout-color) text-(--callout-color)" })
			}[type],
			/* @__PURE__ */ jsx("div", {
				className: "flex flex-col gap-2 min-w-0 flex-1",
				children
			})
		]
	});
}
function CalloutTitle({ children, className, ...props }) {
	return /* @__PURE__ */ jsx("p", {
		className: cn$1("font-medium my-0!", className),
		...props,
		children
	});
}
function CalloutDescription({ children, className, ...props }) {
	return /* @__PURE__ */ jsx("div", {
		className: cn$1("text-fd-muted-foreground prose-no-margin empty:hidden", className),
		...props,
		children
	});
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/components/heading.js
function Heading({ as, ...props }) {
	const As = as ?? "h1";
	const t = useTranslations({ note: "heading anchor" });
	const [isChecked, onCopy] = useCopyButton(() => {
		if (!props.id) return;
		const url = new URL(window.location.href);
		url.hash = props.id;
		return navigator.clipboard.writeText(url.href);
	});
	if (!props.id) return /* @__PURE__ */ jsx(As, { ...props });
	return /* @__PURE__ */ jsxs(As, {
		...props,
		className: cn$1("group/heading flex scroll-m-28 flex-row items-center gap-1", props.className),
		children: [/* @__PURE__ */ jsx("a", {
			"data-card": "",
			href: `#${props.id}`,
			children: props.children
		}), /* @__PURE__ */ jsx("button", {
			"aria-label": t("Copy Anchor Link", { note: "aria-label" }),
			className: cn$1(buttonVariants$1({
				variant: "ghost",
				size: "icon-xs"
			}), "not-prose shrink-0 text-fd-muted-foreground opacity-0 transition-opacity group-hover/heading:opacity-100"),
			onClick: onCopy,
			children: isChecked ? /* @__PURE__ */ jsx(CopyCheckIcon, {}) : /* @__PURE__ */ jsx(LinkIcon, {})
		})]
	});
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/tabs/root/TabsRootContext.mjs
/**
* @internal
*/
var TabsRootContext = /*#__PURE__*/ React.createContext(void 0);
if (process.env.NODE_ENV !== "production") TabsRootContext.displayName = "TabsRootContext";
function useTabsRootContext() {
	const context = React.useContext(TabsRootContext);
	if (context === void 0) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: TabsRootContext is missing. Tabs parts must be placed within <Tabs.Root>." : formatErrorMessage(64));
	return context;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/tabs/root/TabsRootDataAttributes.mjs
var TabsRootDataAttributes = /*#__PURE__*/ function(TabsRootDataAttributes) {
	/**
	* Indicates the direction of the activation (based on the previous active tab).
	* @type {'left' | 'right' | 'up' | 'down' | 'none'}
	*/
	TabsRootDataAttributes["activationDirection"] = "data-activation-direction";
	/**
	* Indicates the orientation of the tabs.
	* @type {'horizontal' | 'vertical'}
	*/
	TabsRootDataAttributes["orientation"] = "data-orientation";
	return TabsRootDataAttributes;
}({});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/tabs/root/stateAttributesMapping.mjs
var tabsStateAttributesMapping = { tabActivationDirection: (dir) => ({ [TabsRootDataAttributes.activationDirection]: dir }) };
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/tabs/root/TabsRoot.mjs
/**
* Groups the tabs and the corresponding panels.
* Renders a `<div>` element.
*
* Documentation: [Base UI Tabs](https://base-ui.com/react/components/tabs)
*/
var TabsRoot = /*#__PURE__*/ React.forwardRef(function TabsRoot(componentProps, forwardedRef) {
	const { className, defaultValue: defaultValueProp = 0, onValueChange: onValueChangeProp, orientation = "horizontal", render, value: valueProp, style, ...elementProps } = componentProps;
	const hasExplicitDefaultValueProp = componentProps.defaultValue !== void 0;
	const tabPanelRefs = React.useRef([]);
	const [mountedTabPanels, setMountedTabPanels] = React.useState(() => /* @__PURE__ */ new Map());
	const [value, setValue] = useControlled({
		controlled: valueProp,
		default: defaultValueProp,
		name: "Tabs",
		state: "value"
	});
	const isControlled = valueProp !== void 0;
	const [tabMap, setTabMap] = React.useState(() => /* @__PURE__ */ new Map());
	const lastKnownTabElementRef = React.useRef(void 0);
	const getTabElementBySelectedValue = React.useCallback((selectedValue) => {
		if (selectedValue === void 0) return null;
		for (const [tabElement, tabMetadata] of tabMap.entries()) if (tabMetadata != null && selectedValue === (tabMetadata.value ?? tabMetadata.index)) return tabElement;
		return null;
	}, [tabMap]);
	const [activationDirectionState, setActivationDirectionState] = React.useState(() => ({
		previousValue: value,
		tabActivationDirection: "none"
	}));
	const { previousValue, tabActivationDirection: committedTabActivationDirection } = activationDirectionState;
	let tabActivationDirection = committedTabActivationDirection;
	let directionComputationIncomplete = false;
	if (previousValue !== value) {
		tabActivationDirection = computeActivationDirection(previousValue, value, orientation, tabMap);
		directionComputationIncomplete = previousValue != null && value != null && getTabElementBySelectedValue(value) == null;
	}
	const nextPreviousValue = directionComputationIncomplete ? previousValue : value;
	const shouldSyncActivationDirectionState = previousValue !== nextPreviousValue || committedTabActivationDirection !== tabActivationDirection;
	useIsoLayoutEffect(() => {
		if (!shouldSyncActivationDirectionState) return;
		setActivationDirectionState({
			previousValue: nextPreviousValue,
			tabActivationDirection
		});
	}, [
		nextPreviousValue,
		shouldSyncActivationDirectionState,
		tabActivationDirection
	]);
	const onValueChange = useStableCallback((newValue, eventDetails) => {
		eventDetails.activationDirection = computeActivationDirection(value, newValue, orientation, tabMap);
		onValueChangeProp?.(newValue, eventDetails);
		if (eventDetails.isCanceled) return;
		setValue(newValue);
	});
	const notifyAutomaticValueChange = useStableCallback((nextValue, reason) => {
		onValueChangeProp?.(nextValue, createChangeEventDetails(reason, void 0, void 0, { activationDirection: "none" }));
	});
	const registerMountedTabPanel = useStableCallback((panelValue, panelId) => {
		setMountedTabPanels((prev) => {
			if (prev.get(panelValue) === panelId) return prev;
			const next = new Map(prev);
			next.set(panelValue, panelId);
			return next;
		});
	});
	const unregisterMountedTabPanel = useStableCallback((panelValue, panelId) => {
		setMountedTabPanels((prev) => {
			if (!prev.has(panelValue) || prev.get(panelValue) !== panelId) return prev;
			const next = new Map(prev);
			next.delete(panelValue);
			return next;
		});
	});
	const getTabPanelIdByValue = React.useCallback((tabValue) => {
		return mountedTabPanels.get(tabValue);
	}, [mountedTabPanels]);
	const getTabIdByPanelValue = React.useCallback((tabPanelValue) => {
		for (const tabMetadata of tabMap.values()) if (tabPanelValue === tabMetadata?.value) return tabMetadata?.id;
	}, [tabMap]);
	const tabsContextValue = React.useMemo(() => ({
		getTabElementBySelectedValue,
		getTabIdByPanelValue,
		getTabPanelIdByValue,
		onValueChange,
		orientation,
		registerMountedTabPanel,
		setTabMap,
		unregisterMountedTabPanel,
		tabActivationDirection,
		value
	}), [
		getTabElementBySelectedValue,
		getTabIdByPanelValue,
		getTabPanelIdByValue,
		onValueChange,
		orientation,
		registerMountedTabPanel,
		setTabMap,
		unregisterMountedTabPanel,
		tabActivationDirection,
		value
	]);
	const selectedTabMetadata = React.useMemo(() => {
		for (const tabMetadata of tabMap.values()) if (tabMetadata != null && tabMetadata.value === value) return tabMetadata;
	}, [tabMap, value]);
	const firstEnabledTabValue = React.useMemo(() => {
		for (const tabMetadata of tabMap.values()) if (tabMetadata != null && !tabMetadata.disabled) return tabMetadata.value;
	}, [tabMap]);
	const shouldNotifyInitialValueChangeRef = React.useRef(!hasExplicitDefaultValueProp);
	const initialDefaultValueRef = React.useRef(defaultValueProp);
	const shouldHonorDisabledDefaultValueRef = React.useRef(hasExplicitDefaultValueProp);
	const didRegisterTabsRef = React.useRef(false);
	useIsoLayoutEffect(() => {
		if (isControlled) return;
		function commitAutomaticValueChange(fallbackValue, fallbackReason) {
			setValue(fallbackValue);
			setActivationDirectionState((prev) => {
				if (prev.previousValue === fallbackValue && prev.tabActivationDirection === "none") return prev;
				return {
					previousValue: fallbackValue,
					tabActivationDirection: "none"
				};
			});
			notifyAutomaticValueChange(fallbackValue, fallbackReason);
			shouldNotifyInitialValueChangeRef.current = false;
		}
		if (tabMap.size === 0) {
			if (didRegisterTabsRef.current && value !== null && !lastKnownTabElementRef.current?.isConnected) commitAutomaticValueChange(null, missing);
			return;
		}
		didRegisterTabsRef.current = true;
		lastKnownTabElementRef.current = tabMap.keys().next().value;
		const selectionIsDisabled = selectedTabMetadata?.disabled;
		const selectionIsMissing = selectedTabMetadata == null && value !== null;
		if (!selectionIsDisabled && value === initialDefaultValueRef.current) shouldHonorDisabledDefaultValueRef.current = false;
		if (shouldHonorDisabledDefaultValueRef.current && selectionIsDisabled && value === initialDefaultValueRef.current) return;
		const shouldNotifyInitialValueChange = shouldNotifyInitialValueChangeRef.current;
		if (selectionIsDisabled || selectionIsMissing) {
			const fallbackValue = firstEnabledTabValue ?? null;
			if (value === fallbackValue) {
				shouldNotifyInitialValueChangeRef.current = false;
				return;
			}
			let fallbackReason = missing;
			if (shouldNotifyInitialValueChange) fallbackReason = initial;
			else if (selectionIsDisabled) fallbackReason = disabled;
			commitAutomaticValueChange(fallbackValue, fallbackReason);
			return;
		}
		if (shouldNotifyInitialValueChange && selectedTabMetadata != null) {
			notifyAutomaticValueChange(value, initial);
			shouldNotifyInitialValueChangeRef.current = false;
		}
	}, [
		firstEnabledTabValue,
		isControlled,
		notifyAutomaticValueChange,
		selectedTabMetadata,
		setValue,
		tabMap,
		value
	]);
	const element = useRenderElement("div", componentProps, {
		state: {
			orientation,
			tabActivationDirection
		},
		ref: forwardedRef,
		props: elementProps,
		stateAttributesMapping: tabsStateAttributesMapping
	});
	return /*#__PURE__*/ jsx(TabsRootContext.Provider, {
		value: tabsContextValue,
		children: /*#__PURE__*/ jsx(CompositeList, {
			elementsRef: tabPanelRefs,
			children: element
		})
	});
});
if (process.env.NODE_ENV !== "production") TabsRoot.displayName = "TabsRoot";
function computeActivationDirection(oldValue, newValue, orientation, tabMap) {
	if (oldValue == null || newValue == null) return "none";
	let oldTab = null;
	let newTab = null;
	for (const [tabElement, tabMetadata] of tabMap.entries()) {
		if (tabMetadata == null) continue;
		const tabValue = tabMetadata.value ?? tabMetadata.index;
		if (oldValue === tabValue) oldTab = tabElement;
		if (newValue === tabValue) newTab = tabElement;
		if (oldTab != null && newTab != null) break;
	}
	if (oldTab == null || newTab == null) {
		if (oldTab !== newTab && (typeof oldValue === "number" || typeof oldValue === "string") && typeof oldValue === typeof newValue) {
			if (orientation === "horizontal") return newValue > oldValue ? "right" : "left";
			return newValue > oldValue ? "down" : "up";
		}
		return "none";
	}
	const oldRect = oldTab.getBoundingClientRect();
	const newRect = newTab.getBoundingClientRect();
	if (orientation === "horizontal") {
		if (newRect.left < oldRect.left) return "left";
		if (newRect.left > oldRect.left) return "right";
	} else {
		if (newRect.top < oldRect.top) return "up";
		if (newRect.top > oldRect.top) return "down";
	}
	return "none";
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/tabs/list/TabsListContext.mjs
var TabsListContext = /*#__PURE__*/ React.createContext(void 0);
if (process.env.NODE_ENV !== "production") TabsListContext.displayName = "TabsListContext";
function useTabsListContext() {
	const context = React.useContext(TabsListContext);
	if (context === void 0) throw new Error(process.env.NODE_ENV !== "production" ? "Base UI: TabsListContext is missing. TabsList parts must be placed within <Tabs.List>." : formatErrorMessage(65));
	return context;
}
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/tabs/tab/TabsTab.mjs
/**
* An individual interactive tab button that toggles the corresponding panel.
* Renders a `<button>` element.
*
* Documentation: [Base UI Tabs](https://base-ui.com/react/components/tabs)
*/
var TabsTab = /*#__PURE__*/ React.forwardRef(function TabsTab(componentProps, forwardedRef) {
	const { className, disabled = false, render, value, id: idProp, nativeButton = true, style, ...elementProps } = componentProps;
	const { value: activeTabValue, getTabPanelIdByValue, orientation, tabActivationDirection } = useTabsRootContext();
	const { activateOnFocus, highlightedTabIndex, onTabActivation, registerTabResizeObserverElement, setHighlightedTabIndex, tabsListElement } = useTabsListContext();
	const id = useBaseUiId(idProp);
	const { compositeProps, compositeRef, index } = useCompositeItem({ metadata: React.useMemo(() => ({
		disabled,
		id,
		value
	}), [
		disabled,
		id,
		value
	]) });
	const active = value === activeTabValue;
	const isNavigatingRef = React.useRef(false);
	const tabElementRef = React.useRef(null);
	useIsoLayoutEffect(() => {
		const tabElement = tabElementRef.current;
		if (!tabElement) return;
		return registerTabResizeObserverElement(tabElement);
	}, [registerTabResizeObserverElement]);
	useIsoLayoutEffect(() => {
		if (isNavigatingRef.current) {
			isNavigatingRef.current = false;
			return;
		}
		if (!(active && index > -1 && highlightedTabIndex !== index)) return;
		const listElement = tabsListElement;
		if (listElement != null) {
			const activeEl = activeElement(ownerDocument(listElement));
			if (activeEl && contains(listElement, activeEl)) return;
		}
		if (!disabled) setHighlightedTabIndex(index);
	}, [
		active,
		index,
		highlightedTabIndex,
		setHighlightedTabIndex,
		disabled,
		tabsListElement
	]);
	const { getButtonProps, buttonRef } = useButton({
		disabled,
		native: nativeButton,
		focusableWhenDisabled: true
	});
	const tabPanelId = getTabPanelIdByValue(value);
	const isPressingRef = React.useRef(false);
	const isMainButtonRef = React.useRef(false);
	function onClick(event) {
		if (active || disabled) return;
		onTabActivation(value, createChangeEventDetails(none, event.nativeEvent, void 0, { activationDirection: "none" }));
	}
	function onFocus(event) {
		if (active) return;
		if (index > -1 && !disabled) setHighlightedTabIndex(index);
		if (disabled) return;
		if (activateOnFocus && (!isPressingRef.current || isPressingRef.current && isMainButtonRef.current)) onTabActivation(value, createChangeEventDetails(none, event.nativeEvent, void 0, { activationDirection: "none" }));
	}
	function onPointerDown(event) {
		if (active || disabled) return;
		isPressingRef.current = true;
		function handlePointerUp() {
			isPressingRef.current = false;
			isMainButtonRef.current = false;
		}
		if (!event.button || event.button === 0) {
			isMainButtonRef.current = true;
			ownerDocument(event.currentTarget).addEventListener("pointerup", handlePointerUp, { once: true });
		}
	}
	return useRenderElement("button", componentProps, {
		state: {
			disabled,
			active,
			orientation,
			tabActivationDirection
		},
		ref: [
			forwardedRef,
			buttonRef,
			compositeRef,
			tabElementRef
		],
		props: [
			compositeProps,
			{
				role: "tab",
				"aria-controls": tabPanelId,
				"aria-selected": active,
				id,
				onClick,
				onFocus,
				onPointerDown,
				[ACTIVE_COMPOSITE_ITEM]: active ? "" : void 0,
				onKeyDownCapture() {
					isNavigatingRef.current = true;
				}
			},
			elementProps,
			getButtonProps
		],
		stateAttributesMapping: tabsStateAttributesMapping
	});
});
if (process.env.NODE_ENV !== "production") TabsTab.displayName = "TabsTab";
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/tabs/panel/TabsPanelDataAttributes.mjs
var TabsPanelDataAttributes = function(TabsPanelDataAttributes) {
	/**
	* Indicates the index of the tab panel.
	*/
	TabsPanelDataAttributes["index"] = "data-index";
	/**
	* Indicates the direction of the activation (based on the previous active tab).
	* @type {'left' | 'right' | 'up' | 'down' | 'none'}
	*/
	TabsPanelDataAttributes["activationDirection"] = "data-activation-direction";
	/**
	* Indicates the orientation of the tabs.
	* @type {'horizontal' | 'vertical'}
	*/
	TabsPanelDataAttributes["orientation"] = "data-orientation";
	/**
	* Present when the panel is hidden.
	*/
	TabsPanelDataAttributes["hidden"] = "data-hidden";
	/**
	* Present when the panel is animating in.
	*/
	TabsPanelDataAttributes[TabsPanelDataAttributes["startingStyle"] = TransitionStatusDataAttributes.startingStyle] = "startingStyle";
	/**
	* Present when the panel is animating out.
	*/
	TabsPanelDataAttributes[TabsPanelDataAttributes["endingStyle"] = TransitionStatusDataAttributes.endingStyle] = "endingStyle";
	return TabsPanelDataAttributes;
}({});
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/tabs/panel/TabsPanel.mjs
var stateAttributesMapping = {
	...tabsStateAttributesMapping,
	...transitionStatusMapping
};
/**
* A panel displayed when the corresponding tab is active.
* Renders a `<div>` element.
*
* Documentation: [Base UI Tabs](https://base-ui.com/react/components/tabs)
*/
var TabsPanel = /*#__PURE__*/ React.forwardRef(function TabsPanel(componentProps, forwardedRef) {
	const { className, value, render, keepMounted = false, style, ...elementProps } = componentProps;
	const { value: selectedValue, getTabIdByPanelValue, orientation, tabActivationDirection, registerMountedTabPanel, unregisterMountedTabPanel } = useTabsRootContext();
	const id = useBaseUiId();
	const { ref: listItemRef, index } = useCompositeListItem({ metadata: React.useMemo(() => ({
		id,
		value
	}), [id, value]) });
	const open = value === selectedValue;
	const { mounted, transitionStatus, setMounted } = useTransitionStatus(open);
	const hidden = !mounted;
	const correspondingTabId = getTabIdByPanelValue(value);
	const state = {
		hidden,
		orientation,
		tabActivationDirection,
		transitionStatus
	};
	const panelRef = React.useRef(null);
	const element = useRenderElement("div", componentProps, {
		state,
		ref: [
			forwardedRef,
			listItemRef,
			panelRef
		],
		props: [{
			"aria-labelledby": correspondingTabId,
			hidden,
			id,
			role: "tabpanel",
			tabIndex: open ? 0 : -1,
			inert: inertValue(!open),
			[TabsPanelDataAttributes.index]: index
		}, elementProps],
		stateAttributesMapping
	});
	useOpenChangeComplete({
		open,
		ref: panelRef,
		onComplete() {
			if (!open) setMounted(false);
		}
	});
	useIsoLayoutEffect(() => {
		if (hidden && !keepMounted) return;
		if (id == null) return;
		registerMountedTabPanel(value, id);
		return () => {
			unregisterMountedTabPanel(value, id);
		};
	}, [
		hidden,
		keepMounted,
		value,
		id,
		registerMountedTabPanel,
		unregisterMountedTabPanel
	]);
	if (!(keepMounted || mounted)) return null;
	return element;
});
if (process.env.NODE_ENV !== "production") TabsPanel.displayName = "TabsPanel";
//#endregion
//#region node_modules/.pnpm/@base-ui+react@1.6.0_@types+react@19.2.17_react-dom@19.2.8_react@19.2.8__react@19.2.8/node_modules/@base-ui/react/tabs/list/TabsList.mjs
/**
* Groups the individual tab buttons.
* Renders a `<div>` element.
*
* Documentation: [Base UI Tabs](https://base-ui.com/react/components/tabs)
*/
var TabsList$2 = /*#__PURE__*/ React.forwardRef(function TabsList(componentProps, forwardedRef) {
	const { activateOnFocus = false, className, loopFocus = true, render, style, ...elementProps } = componentProps;
	const { onValueChange, orientation, value, setTabMap, tabActivationDirection } = useTabsRootContext();
	const [highlightedTabIndex, setHighlightedTabIndex] = React.useState(0);
	const [tabsListElement, setTabsListElement] = React.useState(null);
	const indicatorUpdateListenersRef = React.useRef(/* @__PURE__ */ new Set());
	const tabResizeObserverElementsRef = React.useRef(/* @__PURE__ */ new Set());
	const resizeObserverRef = React.useRef(null);
	useIsoLayoutEffect(() => {
		if (typeof ResizeObserver === "undefined") return;
		const resizeObserver = new ResizeObserver(() => {
			indicatorUpdateListenersRef.current.forEach((listener) => {
				listener();
			});
		});
		resizeObserverRef.current = resizeObserver;
		if (tabsListElement) resizeObserver.observe(tabsListElement);
		tabResizeObserverElementsRef.current.forEach((element) => {
			resizeObserver.observe(element);
		});
		return () => {
			resizeObserver.disconnect();
			resizeObserverRef.current = null;
		};
	}, [tabsListElement]);
	const registerIndicatorUpdateListener = useStableCallback((listener) => {
		indicatorUpdateListenersRef.current.add(listener);
		return () => {
			indicatorUpdateListenersRef.current.delete(listener);
		};
	});
	const registerTabResizeObserverElement = useStableCallback((element) => {
		tabResizeObserverElementsRef.current.add(element);
		resizeObserverRef.current?.observe(element);
		return () => {
			tabResizeObserverElementsRef.current.delete(element);
			resizeObserverRef.current?.unobserve(element);
		};
	});
	const onTabActivation = useStableCallback((newValue, eventDetails) => {
		if (newValue !== value) onValueChange(newValue, eventDetails);
	});
	const state = {
		orientation,
		tabActivationDirection
	};
	const defaultProps = {
		"aria-orientation": orientation === "vertical" ? "vertical" : void 0,
		role: "tablist"
	};
	const tabsListContextValue = React.useMemo(() => ({
		activateOnFocus,
		highlightedTabIndex,
		registerIndicatorUpdateListener,
		registerTabResizeObserverElement,
		onTabActivation,
		setHighlightedTabIndex,
		tabsListElement
	}), [
		activateOnFocus,
		highlightedTabIndex,
		registerIndicatorUpdateListener,
		registerTabResizeObserverElement,
		onTabActivation,
		setHighlightedTabIndex,
		tabsListElement
	]);
	return /*#__PURE__*/ jsx(TabsListContext.Provider, {
		value: tabsListContextValue,
		children: /*#__PURE__*/ jsx(CompositeRoot, {
			render,
			className,
			style,
			state,
			refs: [forwardedRef, setTabsListElement],
			props: [defaultProps, elementProps],
			stateAttributesMapping: tabsStateAttributesMapping,
			highlightedIndex: highlightedTabIndex,
			enableHomeAndEndKeys: true,
			loopFocus,
			orientation,
			onHighlightedIndexChange: setHighlightedTabIndex,
			onMapChange: setTabMap,
			disabledIndices: EMPTY_ARRAY$1
		})
	});
});
if (process.env.NODE_ENV !== "production") TabsList$2.displayName = "TabsList";
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/components/ui/tabs.js
var listeners = /* @__PURE__ */ new Map();
var TabsContext$2 = createContext(null);
function useTabContext$1() {
	const ctx = use(TabsContext$2);
	if (!ctx) throw new Error("You must wrap your component in <Tabs>");
	return ctx;
}
var TabsList$1 = TabsList$2;
var TabsTrigger$1 = TabsTab;
function Tabs$1({ ref, groupId, persist = false, updateAnchor = false, defaultValue, value: _value, onValueChange: _onValueChange, ...props }) {
	const tabsRef = useRef(null);
	const valueToIdMap = useMemo(() => /* @__PURE__ */ new Map(), []);
	const [value, setValue] = _value === void 0 ? useState(defaultValue) : [_value, useEffectEvent((v) => _onValueChange?.(v))];
	useLayoutEffect(() => {
		if (!groupId) return;
		let previous = sessionStorage.getItem(groupId);
		if (persist) previous ??= localStorage.getItem(groupId);
		if (previous) setValue(previous);
		const groupListeners = listeners.get(groupId) ?? /* @__PURE__ */ new Set();
		groupListeners.add(setValue);
		listeners.set(groupId, groupListeners);
		return () => {
			groupListeners.delete(setValue);
		};
	}, [
		groupId,
		persist,
		setValue
	]);
	useLayoutEffect(() => {
		const hash = window.location.hash.slice(1);
		if (!hash) return;
		for (const [value, id] of valueToIdMap.entries()) if (id === hash) {
			setValue(value);
			tabsRef.current?.scrollIntoView();
			break;
		}
	}, [setValue, valueToIdMap]);
	return /* @__PURE__ */ jsx(TabsRoot, {
		ref: mergeRefs$1(ref, tabsRef),
		value,
		onValueChange: (v) => {
			if (updateAnchor) {
				const id = valueToIdMap.get(v);
				if (id) window.history.replaceState(null, "", `#${id}`);
			}
			if (groupId) {
				const groupListeners = listeners.get(groupId);
				if (groupListeners) for (const listener of groupListeners) listener(v);
				sessionStorage.setItem(groupId, v);
				if (persist) localStorage.setItem(groupId, v);
			} else setValue(v);
		},
		...props,
		children: /* @__PURE__ */ jsx(TabsContext$2, {
			value: useMemo(() => ({ valueToIdMap }), [valueToIdMap]),
			children: props.children
		})
	});
}
function TabsContent$1({ value, ...props }) {
	const { valueToIdMap } = useTabContext$1();
	if (props.id) valueToIdMap.set(value, props.id);
	return /* @__PURE__ */ jsx(TabsPanel, {
		value,
		...props,
		children: props.children
	});
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/components/codeblock.js
var TabsContext$1 = createContext(null);
function Pre$1(props) {
	return /* @__PURE__ */ jsx("pre", {
		...props,
		className: cn$1("min-w-full w-max *:flex *:flex-col", props.className),
		children: props.children
	});
}
function CodeBlock({ ref, title, allowCopy = true, keepBackground = false, icon, viewportProps = {}, children, Actions = (props) => /* @__PURE__ */ jsx("div", {
	...props,
	className: cn$1("empty:hidden", props.className)
}), ...props }) {
	const inTab = use(TabsContext$1) !== null;
	const areaRef = useRef(null);
	if (allowCopy === "true") allowCopy = true;
	else if (allowCopy === "false") allowCopy = false;
	return /* @__PURE__ */ jsxs("figure", {
		ref,
		dir: "ltr",
		...props,
		tabIndex: -1,
		className: cn$1(inTab ? "bg-fd-secondary -mx-px -mb-px last:rounded-b-xl" : "my-4 bg-fd-card rounded-xl", keepBackground && "bg-(--shiki-light-bg) dark:bg-(--shiki-dark-bg)", "shiki relative border shadow-sm not-prose overflow-hidden text-sm", props.className),
		children: [title ? /* @__PURE__ */ jsxs("div", {
			className: "flex text-fd-muted-foreground items-center gap-2 h-9.5 border-b px-4",
			children: [
				typeof icon === "string" ? /* @__PURE__ */ jsx("div", {
					className: "[&_svg]:size-3.5",
					dangerouslySetInnerHTML: { __html: icon }
				}) : icon,
				/* @__PURE__ */ jsx("figcaption", {
					className: "flex-1 truncate",
					children: title
				}),
				Actions({
					className: "-me-2",
					children: allowCopy && /* @__PURE__ */ jsx(CopyButton, { containerRef: areaRef })
				})
			]
		}) : Actions({
			className: "absolute top-2 right-2 z-2 backdrop-blur-lg rounded-lg text-fd-muted-foreground",
			children: allowCopy && /* @__PURE__ */ jsx(CopyButton, { containerRef: areaRef })
		}), /* @__PURE__ */ jsx("div", {
			ref: areaRef,
			...viewportProps,
			role: "region",
			tabIndex: 0,
			className: cn$1("text-[0.8125rem] py-3.5 overflow-auto max-h-[600px] fd-scroll-container focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-fd-ring", viewportProps.className),
			style: {
				"--padding-right": !title ? "calc(var(--spacing) * 8)" : void 0,
				counterSet: props["data-line-numbers"] ? `line ${Number(props["data-line-numbers-start"] ?? 1) - 1}` : void 0,
				...viewportProps.style
			},
			children
		})]
	});
}
function CopyButton({ className, containerRef, ...props }) {
	const t = useTranslations({ note: "code block" });
	const [checked, onClick] = useCopyButton(() => {
		const pre = containerRef.current?.getElementsByTagName("pre").item(0);
		if (!pre) return;
		const clone = pre.cloneNode(true);
		clone.querySelectorAll(".nd-copy-ignore").forEach((node) => {
			node.replaceWith("\n");
		});
		navigator.clipboard.writeText(clone.textContent ?? "");
	});
	return /* @__PURE__ */ jsx("button", {
		type: "button",
		"data-checked": checked || void 0,
		className: cn$1(buttonVariants$1({
			className: "hover:text-fd-accent-foreground data-checked:text-fd-accent-foreground",
			size: "icon-xs"
		}), className),
		"aria-label": checked ? t("Copied Text", { note: "aria-label" }) : t("Copy Text", { note: "aria-label" }),
		onClick,
		...props,
		children: checked ? /* @__PURE__ */ jsx(Check, {}) : /* @__PURE__ */ jsx(Clipboard, {})
	});
}
function CodeBlockTabs({ ref, className, ...props }) {
	const containerRef = useRef(null);
	const nested = use(TabsContext$1) !== null;
	return /* @__PURE__ */ jsx(Tabs$1, {
		ref: mergeRefs$1(containerRef, ref),
		...props,
		className: (s) => cn$1("bg-fd-card rounded-xl border", !nested && "my-4", typeof className === "function" ? className(s) : className),
		children: /* @__PURE__ */ jsx(TabsContext$1, {
			value: useMemo(() => ({
				containerRef,
				nested
			}), [nested]),
			children: props.children
		})
	});
}
function CodeBlockTabsList({ className, ...props }) {
	return /* @__PURE__ */ jsx(TabsList$1, {
		...props,
		className: (s) => cn$1("flex flex-row px-2 overflow-x-auto text-fd-muted-foreground", typeof className === "function" ? className(s) : className),
		children: props.children
	});
}
function CodeBlockTabsTrigger({ children, className, ...props }) {
	return /* @__PURE__ */ jsxs(TabsTrigger$1, {
		...props,
		className: (s) => cn$1("relative group inline-flex text-sm font-medium text-nowrap items-center transition-colors gap-2 px-2 py-1.5 [&_svg]:size-3.5", s.active ? "text-fd-primary" : "hover:text-fd-accent-foreground", typeof className === "function" ? className(s) : className),
		children: [/* @__PURE__ */ jsx("div", { className: "absolute inset-x-2 bottom-0 h-px group-data-active:bg-fd-primary" }), children]
	});
}
function CodeBlockTab(props) {
	return /* @__PURE__ */ jsx(TabsContent$1, { ...props });
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/mdx.js
function Image$1(props) {
	return /* @__PURE__ */ jsx(Image, {
		sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px",
		...props,
		className: cn$1("rounded-lg", props.className)
	});
}
function Table(props) {
	return /* @__PURE__ */ jsx("div", {
		className: "relative overflow-auto prose-no-margin my-6",
		children: /* @__PURE__ */ jsx("table", { ...props })
	});
}
var defaultMdxComponents = {
	CodeBlockTab,
	CodeBlockTabs,
	CodeBlockTabsList,
	CodeBlockTabsTrigger,
	pre: (props) => /* @__PURE__ */ jsx(CodeBlock, {
		...props,
		children: /* @__PURE__ */ jsx(Pre$1, { children: props.children })
	}),
	Card,
	Cards,
	a: Link$1,
	img: Image$1,
	h1: (props) => /* @__PURE__ */ jsx(Heading, {
		as: "h1",
		...props
	}),
	h2: (props) => /* @__PURE__ */ jsx(Heading, {
		as: "h2",
		...props
	}),
	h3: (props) => /* @__PURE__ */ jsx(Heading, {
		as: "h3",
		...props
	}),
	h4: (props) => /* @__PURE__ */ jsx(Heading, {
		as: "h4",
		...props
	}),
	h5: (props) => /* @__PURE__ */ jsx(Heading, {
		as: "h5",
		...props
	}),
	h6: (props) => /* @__PURE__ */ jsx(Heading, {
		as: "h6",
		...props
	}),
	table: Table,
	Callout,
	CalloutContainer,
	CalloutTitle,
	CalloutDescription
};
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/components/steps.js
function Steps({ children }) {
	return /* @__PURE__ */ jsx("div", {
		className: "fd-steps",
		children
	});
}
function Step({ children }) {
	return /* @__PURE__ */ jsx("div", {
		className: "fd-step",
		children
	});
}
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/components/tabs.js
var tabs_exports = /* @__PURE__ */ __exportAll$1({
	Tab: () => Tab,
	Tabs: () => Tabs,
	TabsContent: () => TabsContent,
	TabsList: () => TabsList,
	TabsTrigger: () => TabsTrigger
});
var TabsContext = createContext(null);
function useTabContext() {
	const ctx = useContext(TabsContext);
	if (!ctx) throw new Error("You must wrap your component in <Tabs>");
	return ctx;
}
function TabsList({ className, ...props }) {
	return /* @__PURE__ */ jsx(TabsList$1, {
		...props,
		className: (s) => cn$1("flex gap-3.5 text-fd-secondary-foreground overflow-x-auto px-4 not-prose", typeof className === "function" ? className(s) : className)
	});
}
function TabsTrigger({ className, ...props }) {
	return /* @__PURE__ */ jsx(TabsTrigger$1, {
		...props,
		className: (s) => cn$1("inline-flex items-center gap-2 whitespace-nowrap text-fd-muted-foreground border-b border-transparent py-2 text-sm font-medium transition-colors [&_svg]:size-4 hover:text-fd-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[active]:border-fd-primary data-[active]:text-fd-primary", typeof className === "function" ? className(s) : className)
	});
}
function Tabs({ ref, className, items, label, defaultIndex = 0, defaultValue = items ? escapeValue(items[defaultIndex]) : void 0, ...props }) {
	const [value, setValue] = useState(defaultValue);
	const collection = useMemo(() => [], []);
	return /* @__PURE__ */ jsxs(Tabs$1, {
		ref,
		className: (s) => cn$1("flex flex-col overflow-hidden rounded-xl border bg-fd-secondary my-4", typeof className === "function" ? className(s) : className),
		value,
		onValueChange: (v) => {
			if (items && !items.some((item) => escapeValue(item) === v)) return;
			setValue(v);
		},
		...props,
		children: [items && /* @__PURE__ */ jsxs(TabsList, { children: [label && /* @__PURE__ */ jsx("span", {
			className: "text-sm font-medium my-auto me-auto",
			children: label
		}), items.map((item) => /* @__PURE__ */ jsx(TabsTrigger, {
			value: escapeValue(item),
			children: item
		}, item))] }), /* @__PURE__ */ jsx(TabsContext.Provider, {
			value: useMemo(() => ({
				items,
				collection
			}), [collection, items]),
			children: props.children
		})]
	});
}
function Tab({ value, ...props }) {
	const { items } = useTabContext();
	const resolved = value ?? items?.at(useCollectionIndex());
	if (!resolved) throw new Error("Failed to resolve tab `value`, please pass a `value` prop to the Tab component.");
	return /* @__PURE__ */ jsx(TabsContent, {
		value: escapeValue(resolved),
		...props,
		children: props.children
	});
}
function TabsContent({ value, className, ...props }) {
	return /* @__PURE__ */ jsx(TabsContent$1, {
		value,
		keepMounted: true,
		className: (s) => cn$1("p-4 text-[0.9375rem] bg-fd-background rounded-xl outline-none prose-no-margin data-[inactive]:hidden [&>figure:only-child]:-m-4 [&>figure:only-child]:border-none", typeof className === "function" ? className(s) : className),
		...props,
		children: props.children
	});
}
/**
* Inspired by Headless UI.
*
* Return the index of children, this is made possible by registering the order of render from children using React context.
* This is supposed by work with pre-rendering & pure client-side rendering.
*/
function useCollectionIndex() {
	const key = useId();
	const { collection } = useTabContext();
	useEffect(() => {
		return () => {
			const idx = collection.indexOf(key);
			if (idx !== -1) collection.splice(idx, 1);
		};
	}, [key, collection]);
	if (!collection.includes(key)) collection.push(key);
	return collection.indexOf(key);
}
/**
* only escape whitespaces in values in simple mode
*/
function escapeValue(v) {
	return v.toLowerCase().replace(/\s/, "-");
}
//#endregion
//#region components/docs/api.tsx
/**
* C++ API 文档块：标题 + 可选头文件/命名空间。
* 连续 cpp 由 remark-auto-code-tabs → CodeBlockTabs（签名 | 示例）。
*/
function Api({ name, header, children, className }) {
	return /* @__PURE__ */ jsxs("div", {
		className: cn("my-6 scroll-mt-24 rounded-xl border border-fd-border bg-fd-card/30 p-4 sm:p-5", className),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "not-prose mb-3 border-b border-fd-border pb-3",
			children: [/* @__PURE__ */ jsx("div", {
				className: "font-mono text-[0.95rem] font-semibold tracking-tight text-fd-foreground",
				children: name
			}), header ? /* @__PURE__ */ jsx("div", {
				className: "mt-1 text-sm text-fd-muted-foreground",
				children: header
			}) : null]
		}), /* @__PURE__ */ jsx("div", {
			className: "prose-no-margin",
			children
		})]
	});
}
//#endregion
//#region components/docs/opcode.tsx
/**
* CLEO opcode 文档块：名称 · 十六进制 ID · 可选成员名。
* 正文内连续 text/lua/js 由 remark-auto-code-tabs → CodeBlockTabs（OP | Lua | Redux）。
*/
function Opcode({ id, name, member, children, className }) {
	const anchor = `${name.toLowerCase()}-${id.toLowerCase()}`;
	return /* @__PURE__ */ jsxs("div", {
		id: anchor,
		className: cn("my-6 scroll-mt-24 rounded-xl border border-fd-border bg-fd-card/30 p-4 sm:p-5", className),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "not-prose mb-3 border-b border-fd-border pb-3",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "font-mono text-[0.95rem] font-semibold tracking-tight text-fd-foreground",
				children: [
					name,
					/* @__PURE__ */ jsx("span", {
						className: "text-fd-muted-foreground",
						children: " · "
					}),
					id
				]
			}), member ? /* @__PURE__ */ jsx("div", {
				className: "mt-1 font-mono text-sm text-fd-muted-foreground",
				children: member
			}) : null]
		}), /* @__PURE__ */ jsx("div", {
			className: "prose-no-margin",
			children
		})]
	});
}
//#endregion
//#region components/mdx.tsx
function getMDXComponents(components) {
	return {
		...defaultMdxComponents,
		...tabs_exports,
		Api,
		Opcode,
		Steps,
		Step,
		...components
	};
}
//#endregion
//#region components/ui/button.tsx
var variants = {
	primary: "bg-fd-primary text-fd-primary-foreground hover:bg-fd-primary/80 disabled:bg-fd-secondary disabled:text-fd-secondary-foreground",
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
//#region components/markdown.tsx
function rehypeWrapWords() {
	return (tree) => {
		visit(tree, ["text", "element"], (node, index, parent) => {
			if (node.type === "element" && node.tagName === "pre") return "skip";
			if (node.type !== "text" || !parent || index === void 0) return;
			const newNodes = node.value.split(/(?=\s)/).flatMap((word) => {
				if (word.length === 0) return [];
				return {
					type: "element",
					tagName: "span",
					properties: { class: "animate-fd-fade-in" },
					children: [{
						type: "text",
						value: word
					}]
				};
			});
			Object.assign(node, {
				type: "element",
				tagName: "span",
				properties: {},
				children: newNodes
			});
			return "skip";
		});
	};
}
function createProcessor() {
	const processor = remark().use(remarkGfm).use(remarkRehype).use(rehypeWrapWords);
	return { async process(content) {
		const nodes = processor.parse({ value: content });
		const hast = await processor.run(nodes);
		return toJsxRuntime(hast, {
			development: false,
			jsx,
			jsxs,
			Fragment,
			components: {
				...defaultMdxComponents,
				pre: Pre,
				img: void 0
			}
		});
	} };
}
function Pre({ children, ...props }) {
	const codeProps = Children.only(children).props;
	const content = codeProps.children;
	if (typeof content !== "string") return null;
	let lang = codeProps.className?.split(" ").find((v) => v.startsWith("language-"))?.slice(9) ?? "text";
	if (lang === "mdx") lang = "md";
	return /* @__PURE__ */ jsx(CodeBlock, {
		title: lang,
		...props,
		children: /* @__PURE__ */ jsx(Pre$1, { children: content.trimEnd() })
	});
}
var processor = createProcessor();
function Markdown({ text }) {
	const deferredText = useDeferredValue(text);
	return /* @__PURE__ */ jsx(Suspense, {
		fallback: /* @__PURE__ */ jsx("p", {
			className: "invisible",
			children: text
		}),
		children: /* @__PURE__ */ jsx(Renderer, { text: deferredText })
	});
}
var cache = /* @__PURE__ */ new Map();
function Renderer({ text }) {
	const result = cache.get(text) ?? processor.process(text);
	cache.set(text, result);
	return use(result);
}
//#endregion
//#region components/ai/search.tsx
var Context = createContext(null);
function AISearchPanelHeader({ className, ...props }) {
	const { setOpen } = useAISearchContext();
	return /* @__PURE__ */ jsxs("div", {
		className: cn("sticky top-0 flex items-start gap-2 border rounded-xl bg-fd-secondary text-fd-secondary-foreground shadow-sm", className),
		...props,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "px-3 py-2 flex-1",
			children: [/* @__PURE__ */ jsx("p", {
				className: "text-sm font-medium mb-2",
				children: "问 AI"
			}), /* @__PURE__ */ jsx("p", {
				className: "text-xs text-fd-muted-foreground",
				children: "回答可能不准，请对照文档核对。"
			})]
		}), /* @__PURE__ */ jsx("button", {
			"aria-label": "关闭",
			tabIndex: -1,
			className: cn(buttonVariants({
				size: "icon-sm",
				color: "ghost",
				className: "text-fd-muted-foreground rounded-full"
			})),
			onClick: () => setOpen(false),
			children: /* @__PURE__ */ jsx(X, {})
		})]
	});
}
function AISearchInputActions() {
	const { messages, status, setMessages, regenerate } = useChatContext();
	const isLoading = status === "streaming";
	if (messages.length === 0) return null;
	return /* @__PURE__ */ jsxs(Fragment, { children: [!isLoading && messages.at(-1)?.role === "assistant" && /* @__PURE__ */ jsxs("button", {
		type: "button",
		className: cn(buttonVariants({
			color: "secondary",
			size: "sm",
			className: "rounded-full gap-1.5"
		})),
		onClick: () => regenerate(),
		children: [/* @__PURE__ */ jsx(RefreshCw, { className: "size-4" }), "重试"]
	}), /* @__PURE__ */ jsx("button", {
		type: "button",
		className: cn(buttonVariants({
			color: "secondary",
			size: "sm",
			className: "rounded-full"
		})),
		onClick: () => setMessages([]),
		children: "清空"
	})] });
}
var StorageKeyInput = "__ai_search_input";
function AISearchInput(props) {
	const { status, sendMessage, stop } = useChatContext();
	const [input, setInput] = useState(() => localStorage.getItem(StorageKeyInput) ?? "");
	const isLoading = status === "streaming" || status === "submitted";
	const onStart = (e) => {
		e?.preventDefault();
		const message = input.trim();
		if (message.length === 0) return;
		sendMessage({
			role: "user",
			parts: [{
				type: "data-client",
				data: { location: location.href }
			}, {
				type: "text",
				text: message
			}]
		});
		setInput("");
		localStorage.removeItem(StorageKeyInput);
	};
	useEffect(() => {
		if (isLoading) document.getElementById("nd-ai-input")?.focus();
	}, [isLoading]);
	return /* @__PURE__ */ jsxs("form", {
		...props,
		className: cn("flex items-start pe-2", props.className),
		onSubmit: onStart,
		children: [/* @__PURE__ */ jsx(Input, {
			value: input,
			placeholder: isLoading ? "回答中…" : "问文档相关问题",
			autoFocus: true,
			className: "p-3",
			disabled: status === "streaming" || status === "submitted",
			onChange: (e) => {
				setInput(e.target.value);
				localStorage.setItem(StorageKeyInput, e.target.value);
			},
			onKeyDown: (event) => {
				if (!event.shiftKey && event.key === "Enter") onStart(event);
			}
		}), isLoading ? /* @__PURE__ */ jsxs("button", {
			type: "button",
			className: cn(buttonVariants({
				color: "secondary",
				className: "transition-all rounded-full mt-2 gap-2"
			})),
			onClick: stop,
			children: [/* @__PURE__ */ jsx(Loader2, { className: "size-4 animate-spin text-fd-muted-foreground" }), "停止"]
		}, "bn") : /* @__PURE__ */ jsx("button", {
			type: "submit",
			className: cn(buttonVariants({
				color: "primary",
				className: "transition-all rounded-full mt-2"
			})),
			disabled: input.length === 0,
			children: /* @__PURE__ */ jsx(Send, { className: "size-4" })
		}, "bn")]
	});
}
function List(props) {
	const containerRef = useRef(null);
	useEffect(() => {
		if (!containerRef.current) return;
		function callback() {
			const container = containerRef.current;
			if (!container) return;
			container.scrollTo({
				top: container.scrollHeight,
				behavior: "instant"
			});
		}
		const observer = new ResizeObserver(callback);
		callback();
		const element = containerRef.current?.firstElementChild;
		if (element) observer.observe(element);
		return () => {
			observer.disconnect();
		};
	}, []);
	return /* @__PURE__ */ jsx("div", {
		ref: containerRef,
		...props,
		className: cn("fd-scroll-container overflow-y-auto min-w-0 flex flex-col", props.className),
		children: props.children
	});
}
function Input(props) {
	const ref = useRef(null);
	const shared = cn("col-start-1 row-start-1", props.className);
	return /* @__PURE__ */ jsxs("div", {
		className: "grid flex-1",
		children: [/* @__PURE__ */ jsx("textarea", {
			id: "nd-ai-input",
			...props,
			className: cn("resize-none bg-transparent placeholder:text-fd-muted-foreground focus-visible:outline-none", shared)
		}), /* @__PURE__ */ jsx("div", {
			ref,
			className: cn(shared, "break-all invisible"),
			children: `${props.value?.toString() ?? ""}\n`
		})]
	});
}
var roleName = {
	user: "你",
	assistant: "GTAMODX"
};
function Message({ message, ...props }) {
	let markdown = "";
	const searchCalls = [];
	for (const part of message.parts ?? []) {
		if (part.type === "text") {
			markdown += part.text;
			continue;
		}
		if (part.type.startsWith("tool-")) {
			const toolName = part.type.slice(5);
			const p = part;
			if (toolName !== "search" || !p.toolCallId) continue;
			searchCalls.push(p);
		}
	}
	return /* @__PURE__ */ jsxs("div", {
		onClick: (e) => e.stopPropagation(),
		...props,
		children: [
			/* @__PURE__ */ jsx("p", {
				className: cn("mb-1 text-sm font-medium text-fd-muted-foreground", message.role === "assistant" && "text-fd-primary"),
				children: roleName[message.role] ?? "unknown"
			}),
			/* @__PURE__ */ jsx("div", {
				className: "prose text-sm",
				children: /* @__PURE__ */ jsx(Markdown, { text: markdown })
			}),
			searchCalls.map((call) => {
				return /* @__PURE__ */ jsxs("div", {
					className: "flex flex-row gap-2 items-center mt-3 rounded-lg border bg-fd-secondary text-fd-muted-foreground text-xs p-2",
					children: [/* @__PURE__ */ jsx(SearchIcon, { className: "size-4" }), call.state === "output-error" || call.state === "output-denied" ? /* @__PURE__ */ jsx("p", {
						className: "text-fd-error",
						children: call.errorText ?? "搜索失败"
					}) : /* @__PURE__ */ jsx("p", { children: !call.output ? "搜索中…" : `${call.output.length} 条结果` })]
				}, call.toolCallId);
			})
		]
	});
}
function AISearch({ children }) {
	const [open, setOpen] = useState(false);
	const chat = useChat({
		id: "search",
		transport: new DefaultChatTransport({ api: "/api/chat" })
	});
	return /* @__PURE__ */ jsx(Context, {
		value: useMemo(() => ({
			chat,
			open,
			setOpen
		}), [chat, open]),
		children
	});
}
function AISearchTrigger({ position = "default", className, ...props }) {
	const { open, setOpen } = useAISearchContext();
	return /* @__PURE__ */ jsx("button", {
		"data-state": open ? "open" : "closed",
		className: cn(position === "float" && ["fixed bottom-4 gap-3 w-24 inset-e-[calc(--spacing(4)+var(--removed-body-scroll-bar-size,0px))] shadow-lg z-20 transition-[translate,opacity]", open && "translate-y-10 opacity-0"], className),
		onClick: () => setOpen(!open),
		...props,
		children: props.children
	});
}
function AISearchPanel() {
	const { open, setOpen } = useAISearchContext();
	const [actualOpen, setActualOpen] = useState(open);
	useHotKey();
	if (open && !actualOpen) setActualOpen(open);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("style", { children: `
        @keyframes ask-ai-open {
          from {
            translate: 100% 0;
          }
          to {
            translate: 0 0;
          }
        }
        @keyframes ask-ai-close {
          from {
            translate: 0 0;
          }
          to {
            translate: 100% 0;
          }
        }` }),
		actualOpen && /* @__PURE__ */ jsx("div", {
			className: cn("fixed inset-0 z-30 backdrop-blur-xs bg-fd-overlay lg:hidden motion-reduce:animate-none", open ? "animate-fd-fade-in" : "animate-fd-fade-out"),
			onClick: () => setOpen(false),
			onAnimationEnd: () => {
				if (!open) flushSync(() => setActualOpen(false));
			}
		}),
		actualOpen && /* @__PURE__ */ jsx("div", {
			className: cn("overflow-hidden z-30 bg-fd-card text-fd-card-foreground shadow-xl [--ai-chat-width:400px] 2xl:[--ai-chat-width:460px]", "max-lg:fixed max-lg:inset-x-2 max-lg:inset-y-4 max-lg:border max-lg:rounded-2xl", "lg:fixed lg:inset-y-0 lg:inset-e-0 lg:border-s", open ? "animate-fd-dialog-in motion-reduce:animate-none lg:animate-[ask-ai-open_200ms]" : "animate-fd-dialog-out motion-reduce:animate-none lg:animate-[ask-ai-close_200ms]"),
			onAnimationEnd: () => {
				if (!open) flushSync(() => setActualOpen(false));
			},
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col size-full p-2 lg:p-3 lg:w-(--ai-chat-width)",
				children: [
					/* @__PURE__ */ jsx(AISearchPanelHeader, {}),
					/* @__PURE__ */ jsx(AISearchPanelList, { className: "flex-1" }),
					/* @__PURE__ */ jsxs("div", {
						className: "rounded-xl border bg-fd-secondary text-fd-secondary-foreground shadow-sm has-focus-visible:shadow-md",
						children: [/* @__PURE__ */ jsx(AISearchInput, {}), /* @__PURE__ */ jsx("div", {
							className: "flex items-center gap-1.5 p-1 empty:hidden",
							children: /* @__PURE__ */ jsx(AISearchInputActions, {})
						})]
					})
				]
			})
		})
	] });
}
function AISearchPanelList({ className, style, ...props }) {
	const chat = useChatContext();
	const messages = chat.messages.filter((msg) => msg.role !== "system");
	return /* @__PURE__ */ jsx(List, {
		className: cn("py-4 overscroll-contain", className),
		style: {
			maskImage: "linear-gradient(to bottom, transparent, white 1rem, white calc(100% - 1rem), transparent 100%)",
			...style
		},
		...props,
		children: messages.length === 0 ? /* @__PURE__ */ jsxs("div", {
			className: "text-sm text-fd-muted-foreground/80 size-full flex flex-col items-center justify-center text-center gap-2",
			children: [/* @__PURE__ */ jsx(MessageCircleIcon, {
				fill: "currentColor",
				stroke: "none"
			}), /* @__PURE__ */ jsx("p", {
				onClick: (e) => e.stopPropagation(),
				children: "在下方输入问题开始对话。"
			})]
		}) : /* @__PURE__ */ jsxs("div", {
			className: "flex flex-col px-3 gap-4",
			children: [chat.error && /* @__PURE__ */ jsxs("div", {
				className: "p-2 bg-fd-secondary text-fd-secondary-foreground border rounded-lg",
				children: [/* @__PURE__ */ jsxs("p", {
					className: "text-xs text-fd-muted-foreground mb-1",
					children: ["请求失败: ", chat.error.name]
				}), /* @__PURE__ */ jsx("p", {
					className: "text-sm",
					children: chat.error.message
				})]
			}), messages.map((item) => /* @__PURE__ */ jsx(Message, { message: item }, item.id))]
		})
	});
}
function useHotKey() {
	const { open, setOpen } = useAISearchContext();
	const onKeyPress = useEffectEvent((e) => {
		if (e.key === "Escape" && open) {
			setOpen(false);
			e.preventDefault();
		}
		if (e.key === "/" && (e.metaKey || e.ctrlKey) && !open) {
			setOpen(true);
			e.preventDefault();
		}
	});
	useEffect(() => {
		window.addEventListener("keydown", onKeyPress);
		return () => window.removeEventListener("keydown", onKeyPress);
	}, []);
}
function useAISearchContext() {
	return use(Context);
}
function useChatContext() {
	return use(Context).chat;
}
//#endregion
//#region app/routes/docs.tsx
var docs_exports = /* @__PURE__ */ __exportAll$1({
	clientLoader: () => clientLoader,
	default: () => docs_default,
	loader: () => loader$5,
	meta: () => meta
});
var content = browserCollections.docs.createClientLoader({
	id: "docs",
	component(doc, props) {
		const { toc, default: MDX, frontmatter } = doc;
		const title = cleanPageTitle(frontmatter.title ?? "");
		return /* @__PURE__ */ jsxs(DocsPage, {
			toc,
			full: frontmatter.full,
			children: [
				/* @__PURE__ */ jsx(DocsTitle, { children: title }),
				/* @__PURE__ */ jsx(DocsDescription, {
					className: "mb-0",
					children: frontmatter.description
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-row flex-wrap gap-2 items-center border-b pb-6",
					children: [/* @__PURE__ */ jsx(MarkdownCopyButton, { markdownUrl: props.markdownUrl }), /* @__PURE__ */ jsx(ViewOptionsPopover, {
						markdownUrl: props.markdownUrl,
						githubUrl: props.githubUrl
					})]
				}),
				/* @__PURE__ */ jsx(DocsBody, { children: /* @__PURE__ */ jsx(MDX, { components: getMDXComponents() }) })
			]
		});
	}
});
/** GitHub 源码链接 · GTANext/docs@main */
function githubBlobUrl(pagePath) {
	return `https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/content/docs/${pagePath}`;
}
async function loader$5({ params }) {
	const slugs = params["*"] ? params["*"].split("/").filter((v) => v.length > 0) : [];
	const page = source.getPage(slugs);
	if (!page) throw new Response("Not found", { status: 404 });
	await content.preload(page.path);
	return {
		path: page.path,
		slug: slugs,
		title: page.data.title,
		description: page.data.description,
		pageTree: await source.serializePageTree(source.getPageTree())
	};
}
async function clientLoader({ serverLoader }) {
	const data = await serverLoader();
	await content.preload(data.path);
	return data;
}
function meta({ loaderData }) {
	if (!loaderData) return [{ title: siteTitle }];
	return [
		{ title: docSeoTitle(loaderData.slug, loaderData.title) },
		{
			name: "description",
			content: loaderData.description
		},
		{
			property: "og:image",
			content: getPageImageUrl({ slugs: loaderData.slug }).url
		}
	];
}
var docs_default = UNSAFE_withComponentProps(function Page({ loaderData }) {
	const { path, pageTree } = useFumadocsLoader(loaderData);
	return /* @__PURE__ */ jsxs(SiteDocsLayout, {
		tree: pageTree,
		tabMode: "navbar",
		...baseOptions(),
		children: [/* @__PURE__ */ jsxs(AISearch, { children: [/* @__PURE__ */ jsx(AISearchPanel, {}), /* @__PURE__ */ jsxs(AISearchTrigger, {
			position: "float",
			className: cn(buttonVariants$1({
				variant: "secondary",
				className: "text-fd-muted-foreground rounded-2xl"
			})),
			children: [/* @__PURE__ */ jsx(MessageCircleIcon, { className: "size-4.5" }), "问 AI"]
		})] }), content.useContent(path, {
			markdownUrl: getPageMarkdownUrl({ slugs: loaderData.slug }).url,
			githubUrl: githubBlobUrl(path)
		})]
	});
});
//#endregion
//#region node_modules/.pnpm/fumadocs-core@16.11.5_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.5_@type_72cb31c98dbdcd9237f5eec6550b9329/node_modules/fumadocs-core/dist/endpoint-MyoBU5IC.js
function createEndpoint(server, options = {}) {
	const { search } = server;
	const { readOptions = defaultReadOptions } = options;
	return {
		...server,
		async staticGET() {
			return Response.json(await server.export());
		},
		async GET(request) {
			const url = new URL(request.url);
			const query = url.searchParams.get("query");
			if (!query) return Response.json([]);
			return Response.json(await search(query, readOptions(url, request)));
		}
	};
}
function defaultReadOptions(url) {
	const params = url.searchParams;
	const limit = params.has("limit") ? Number(params.get("limit")) : void 0;
	return {
		tag: params.get("tag")?.split(","),
		locale: params.get("locale"),
		limit: Number.isInteger(limit) ? limit : void 0
	};
}
//#endregion
//#region node_modules/.pnpm/fumadocs-core@16.11.5_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.5_@type_72cb31c98dbdcd9237f5eec6550b9329/node_modules/fumadocs-core/dist/build-doc-CTQdPLc0.js
async function buildIndexDefault(page) {
	let structuredData;
	if (page.data.structuredData) structuredData = typeof page.data.structuredData === "function" ? await page.data.structuredData() : page.data.structuredData;
	else if ("load" in page.data && typeof page.data.load === "function") structuredData = (await page.data.load()).structuredData;
	if (!structuredData) throw new Error("Cannot find structured data from page, please define the page to index function.");
	return {
		title: page.data.title ?? basename$1(page.path, extname(page.path)),
		description: page.data.description,
		url: page.url,
		id: page.url,
		structuredData
	};
}
function isBreadcrumbItem(item) {
	return typeof item === "string" && item.length > 0;
}
function buildBreadcrumbs(source, page) {
	const pageTree = source.getPageTree(page.locale);
	const path = findPath(pageTree.children, (node) => node.type === "page" && node.url === page.url);
	if (path) {
		const breadcrumbs = [];
		path.pop();
		if (isBreadcrumbItem(pageTree.name)) breadcrumbs.push(pageTree.name);
		for (const segment of path) {
			if (!isBreadcrumbItem(segment.name)) continue;
			breadcrumbs.push(segment.name);
		}
		return breadcrumbs;
	}
}
function buildDocuments(indexes) {
	const docs = [];
	for (const page of indexes) {
		const pageTag = page.tag ?? [];
		const tags = Array.isArray(pageTag) ? pageTag : [pageTag];
		const data = page.structuredData;
		let id = 0;
		docs.push({
			id: page.id,
			page_id: page.id,
			type: "page",
			content: page.title,
			breadcrumbs: page.breadcrumbs,
			tags,
			url: page.url
		});
		const nextId = () => `${page.id}-${id++}`;
		if (page.description) docs.push({
			id: nextId(),
			page_id: page.id,
			tags,
			type: "text",
			url: page.url,
			content: page.description
		});
		for (const heading of data.headings) docs.push({
			id: nextId(),
			page_id: page.id,
			type: "heading",
			tags,
			url: `${page.url}#${heading.id}`,
			content: heading.content
		});
		for (const content of data.contents) docs.push({
			id: nextId(),
			page_id: page.id,
			tags,
			type: "text",
			url: content.heading ? `${page.url}#${content.heading}` : page.url,
			content: content.content
		});
	}
	return docs;
}
//#endregion
//#region node_modules/.pnpm/fumadocs-core@16.11.5_@mdx-js+mdx@3.1.1_@types+estree-jsx@1.0.5_@types+hast@3.0.5_@type_72cb31c98dbdcd9237f5eec6550b9329/node_modules/fumadocs-core/dist/search/server.js
var STEMMERS = {
	arabic: "ar",
	armenian: "am",
	bulgarian: "bg",
	czech: "cz",
	danish: "dk",
	dutch: "nl",
	english: "en",
	finnish: "fi",
	french: "fr",
	german: "de",
	greek: "gr",
	hungarian: "hu",
	indian: "in",
	indonesian: "id",
	irish: "ie",
	italian: "it",
	lithuanian: "lt",
	nepali: "np",
	norwegian: "no",
	portuguese: "pt",
	romanian: "ro",
	russian: "ru",
	serbian: "rs",
	slovenian: "ru",
	spanish: "es",
	swedish: "se",
	tamil: "ta",
	turkish: "tr",
	ukrainian: "uk",
	vietnamese: "vi",
	sanskrit: "sk"
};
var simpleSchema = {
	url: "string",
	title: "string",
	breadcrumbs: "string[]",
	description: "string",
	content: "string",
	keywords: "string"
};
var advancedSchema = {
	content: "string",
	page_id: "string",
	type: "string",
	breadcrumbs: "string[]",
	tags: "enum[]",
	url: "string",
	embeddings: "vector[512]"
};
async function createDB({ indexes, tokenizer, search: _, ...rest }) {
	const items = typeof indexes === "function" ? await indexes() : indexes;
	const db = create({
		schema: advancedSchema,
		...rest,
		components: {
			...rest.components,
			tokenizer: tokenizer ?? rest.components?.tokenizer
		}
	});
	await insertMultiple(db, buildDocuments(items));
	return db;
}
async function createDBSimple({ indexes, tokenizer, ...rest }) {
	const items = typeof indexes === "function" ? await indexes() : indexes;
	const db = create({
		schema: simpleSchema,
		...rest,
		components: {
			...rest.components,
			tokenizer: tokenizer ?? rest.components?.tokenizer
		}
	});
	await insertMultiple(db, items.map((page) => ({
		title: page.title,
		description: page.description,
		breadcrumbs: page.breadcrumbs,
		url: page.url,
		content: page.content,
		keywords: page.keywords
	})));
	return db;
}
function initSimpleSearch(options) {
	const doc = createDBSimple(options);
	return {
		async export() {
			return {
				type: "simple",
				...save(await doc)
			};
		},
		async search(query, searchOptions = {}) {
			const db = await doc;
			const { limit } = searchOptions;
			return searchSimple(db, query, {
				limit,
				...options.search
			});
		}
	};
}
function initAdvancedSearch(options) {
	const get = createDB(options);
	return {
		async export() {
			return {
				type: "advanced",
				...save(await get)
			};
		},
		async search(query, searchOptions = {}) {
			const db = await get;
			const { limit, tag, mode } = searchOptions;
			return searchAdvanced(db, query, tag, {
				...options.search,
				limit,
				mode: mode === "vector" ? "vector" : "fulltext"
			}).catch((err) => {
				if (mode === "vector") throw new Error("failed to search, make sure you have installed `@orama/plugin-embeddings` according to their docs.", { cause: err });
				throw err;
			});
		}
	};
}
function getTokenizer(locale) {
	return { language: Object.keys(STEMMERS).find((lang) => STEMMERS[lang] === locale) ?? locale };
}
function createI18nSearchAPI(...[type, options]) {
	async function initSearchServers() {
		const map = /* @__PURE__ */ new Map();
		if (options.i18n.languages.length === 0) return map;
		const indexes = typeof options.indexes === "function" ? await options.indexes() : options.indexes;
		for (const locale of options.i18n.languages) {
			const localeIndexes = indexes.filter((index) => index.locale === locale);
			const mapped = options.localeMap?.[locale] ?? getTokenizer(locale);
			if (type === "simple") map.set(locale, typeof mapped === "object" ? initSimpleSearch({
				...options,
				...mapped,
				indexes: localeIndexes
			}) : initSimpleSearch({
				...options,
				language: mapped,
				indexes: localeIndexes
			}));
			else map.set(locale, typeof mapped === "object" ? initAdvancedSearch({
				...options,
				indexes: localeIndexes,
				...mapped
			}) : initAdvancedSearch({
				...options,
				language: mapped,
				indexes: localeIndexes
			}));
		}
		return map;
	}
	const get = initSearchServers();
	return toAPI({
		async export() {
			const map = await get;
			const entries = Array.from(map.entries()).map(async ([k, v]) => [k, await v.export()]);
			return {
				type: "i18n",
				data: Object.fromEntries(await Promise.all(entries))
			};
		},
		async search(query, searchOptions) {
			const map = await get;
			const locale = searchOptions?.locale ?? options.i18n.defaultLanguage;
			const handler = map.get(locale);
			if (handler) return handler.search(query, searchOptions);
			return [];
		}
	});
}
/**
* create server from loader, if passed as function, the server will re-index all records once a different instance of loader is returned.
*/
function createFromSource(loader, options = {}) {
	const { buildIndex = buildIndexDefault } = options;
	const cache = /* @__PURE__ */ new WeakMap();
	async function initServer(loader) {
		const indexes = await Promise.all(loader.getPages().map(async (page) => {
			const index = await buildIndex(page);
			return {
				...index,
				breadcrumbs: index.breadcrumbs ?? buildBreadcrumbs(loader, page),
				locale: page.locale
			};
		}));
		if (loader._i18n) return createI18nSearchAPI("advanced", {
			...options,
			indexes,
			i18n: loader._i18n
		});
		return initAdvancedSearch({
			indexes,
			...options
		});
	}
	async function getCurrentServer() {
		const l = typeof loader === "function" ? await loader() : loader;
		let server = cache.get(l);
		if (!server) {
			server = initServer(l);
			cache.set(l, server);
		}
		return await server;
	}
	return toAPI({
		async export() {
			return (await getCurrentServer()).export();
		},
		async search(query, options) {
			return (await getCurrentServer()).search(query, options);
		}
	});
}
function toAPI(server) {
	return createEndpoint(server, { readOptions(url) {
		return {
			...defaultReadOptions(url),
			mode: url.searchParams.get("mode") === "vector" ? "vector" : "full"
		};
	} });
}
//#endregion
//#region app/routes/api.search.ts
var api_search_exports = /* @__PURE__ */ __exportAll$1({ loader: () => loader$4 });
/**
* 静态搜索索引：构建 / SSR 时导出 JSON，客户端下载后本地检索。
* @see https://fumadocs.dev/docs/headless/search/orama#static-export
*/
var server = createFromSource(source, {
	components: { tokenizer: createTokenizer() },
	search: {
		threshold: 0,
		tolerance: 0
	}
});
function loader$4() {
	return server.staticGET();
}
//#endregion
//#region app/routes/api.chat.ts
var api_chat_exports = /* @__PURE__ */ __exportAll$1({ action: () => action });
var searchServer = createSearchServer();
async function createSearchServer() {
	const search = new Document({ document: {
		id: "url",
		index: [
			"title",
			"description",
			"content"
		],
		store: true
	} });
	const docs = await chunkedAll(source.getPages().map(async (page) => {
		if (!("getText" in page.data)) return null;
		return {
			title: page.data.title,
			description: page.data.description,
			url: page.url,
			content: await page.data.getText("processed")
		};
	}));
	for (const doc of docs) if (doc) search.add(doc);
	return search;
}
async function chunkedAll(promises) {
	const SIZE = 50;
	const out = [];
	for (let i = 0; i < promises.length; i += SIZE) out.push(...await Promise.all(promises.slice(i, i + SIZE)));
	return out;
}
var llmgateway = createLLMGateway({ apiKey: process.env.LLM_GATEWAY_API_KEY });
/** System prompt, you can update it to provide more specific information */
var systemPrompt = [
	"你是 GTAMODX开发文档 的助手，面向 GTA III/VC/SA 的 plugin-sdk ASI 与 CLEO 脚本。",
	"需要事实依据时先用 `search` 工具检索站内文档，再回答。",
	"`search` 返回文档 JSON；请用结果支撑回答，并用文档 `url` 字段以 markdown 链接引用。",
	"搜不到就明确说不知道，并给出更好的检索词。用简洁中文回答，代码保持原样。"
].join("\n");
async function action({ request }) {
	const reqJson = await request.json();
	const modelId = process.env.LLM_GATEWAY_MODEL ?? "anthropic/claude-3.5-sonnet";
	const result = streamText({
		model: llmgateway.chat(modelId),
		stopWhen: stepCountIs(5),
		tools: { search: searchTool },
		messages: [{
			role: "system",
			content: systemPrompt
		}, ...await convertToModelMessages(reqJson.messages ?? [], { convertDataPart(part) {
			if (part.type === "data-client") return {
				type: "text",
				text: `[Client Context: ${JSON.stringify(part.data)}]`
			};
		} })],
		toolChoice: "auto"
	});
	return createUIMessageStreamResponse({ stream: toUIMessageStream({ stream: result.stream }) });
}
var searchTool = tool({
	description: "Search the docs content and return raw JSON results.",
	inputSchema: z.object({
		query: z.string(),
		limit: z.number().int().min(1).max(100).default(10)
	}),
	async execute({ query, limit }) {
		return await (await searchServer).searchAsync(query, {
			limit,
			merge: true,
			enrich: true
		});
	}
});
//#endregion
//#region node_modules/.pnpm/@fumadocs+base-ui@16.11.5_@types+mdx@2.0.14_@types+react@19.2.17_fumadocs-core@16.11.5__831d4dd7f2f0f43e34132a195bca3251/node_modules/@fumadocs/base-ui/dist/og/takumi.js
function generateOGImage(options) {
	const { title, description, icon, site, primaryColor, primaryTextColor, ...rest } = options;
	return new ImageResponse(generate({
		title,
		description,
		icon,
		site,
		primaryTextColor,
		primaryColor
	}), {
		width: 1200,
		height: 630,
		...rest
	});
}
function generate({ primaryColor = "rgba(255,150,255,0.3)", primaryTextColor = "rgb(255,150,255)", icon = /* @__PURE__ */ jsx("svg", {
	xmlns: "http://www.w3.org/2000/svg",
	width: "56",
	height: "56",
	viewBox: "0 0 24 24",
	fill: "none",
	stroke: "currentColor",
	strokeWidth: "2",
	strokeLinecap: "round",
	strokeLinejoin: "round",
	className: "lucide lucide-book-icon lucide-book",
	children: /* @__PURE__ */ jsx("circle", {
		cx: "12",
		cy: "12",
		r: "11",
		stroke: primaryTextColor,
		strokeWidth: "2"
	})
}), ...props }) {
	return /* @__PURE__ */ jsxs("div", {
		style: {
			display: "flex",
			flexDirection: "column",
			width: "100%",
			height: "100%",
			color: "white",
			padding: "4rem",
			backgroundColor: "#0c0c0c",
			borderBottom: `18px solid ${primaryColor}`
		},
		children: [
			/* @__PURE__ */ jsx("p", {
				style: {
					fontWeight: 800,
					fontSize: "82px",
					margin: 0
				},
				children: props.title
			}),
			/* @__PURE__ */ jsx("p", {
				style: {
					fontSize: "52px",
					color: "rgba(240,240,240,0.8)",
					margin: 0,
					marginTop: "16px",
					paddingBottom: "28px",
					borderBottom: `10px dashed ${primaryColor}`
				},
				children: props.description
			}),
			/* @__PURE__ */ jsxs("div", {
				style: {
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					gap: "20px",
					marginTop: "auto",
					color: primaryTextColor
				},
				children: [icon, props.site && /* @__PURE__ */ jsx("p", {
					style: {
						fontSize: "56px",
						fontWeight: 600,
						margin: 0
					},
					children: props.site
				})]
			})
		]
	});
}
//#endregion
//#region app/routes/og.docs.tsx
var og_docs_exports = /* @__PURE__ */ __exportAll$1({ loader: () => loader$3 });
function loader$3({ params }) {
	const slugs = params["*"] ? params["*"].split("/").filter((v) => v.length > 0) : [];
	const page = source.getPage(slugs.slice(0, -1));
	if (!page) throw new Response(null, { status: 404 });
	return generateOGImage({
		title: cleanPageTitle(page.data.title),
		description: page.data.description,
		site: siteTitle
	});
}
//#endregion
//#region app/routes/llms.ts
var llms_exports = /* @__PURE__ */ __exportAll$1({ loader: () => loader$2 });
function loader$2() {
	return new Response(llms(source).index());
}
//#endregion
//#region app/routes/llms-full.ts
var llms_full_exports = /* @__PURE__ */ __exportAll$1({ loader: () => loader$1 });
async function loader$1() {
	const scan = source.getPages().map(getLLMText);
	const scanned = await Promise.all(scan);
	return new Response(scanned.join("\n\n"));
}
//#endregion
//#region app/routes/llms-mdx.ts
var llms_mdx_exports = /* @__PURE__ */ __exportAll$1({ loader: () => loader });
async function loader({ params }) {
	const slugs = params["*"] ? params["*"].split("/").filter((v) => v.length > 0) : [];
	const page = source.getPage(slugs.slice(0, -1));
	if (!page) throw new Response("Not found", { status: 404 });
	return new Response(await getLLMText(page), { headers: { "Content-Type": "text/markdown" } });
}
//#endregion
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-_wjXRGzk.js",
		"imports": ["/assets/jsx-runtime-DFJu3dTM.js", "/assets/react-dom-Dq4KzjWf.js"],
		"css": []
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": true,
			"module": "/assets/root-DcNNA-xJ.js",
			"imports": [
				"/assets/jsx-runtime-DFJu3dTM.js",
				"/assets/react-dom-Dq4KzjWf.js",
				"/assets/shared-BV1rC7lP.js",
				"/assets/dist-mTjZWd7O.js",
				"/assets/client-Ci-xH6Ud.js",
				"/assets/not-found-cnVM0gI9.js",
				"/assets/orama-static-mD8saAqB.js",
				"/assets/lib-C9WO10Ms.js",
				"/assets/search-CtgYUWz_.js",
				"/assets/remove-undefined-CzMSKybq-CUTPf38U.js"
			],
			"css": ["/assets/root-Cr9m4A3p.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/home": {
			"id": "routes/home",
			"parentId": "root",
			"path": void 0,
			"index": true,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/home-CwsrVH9L.js",
			"imports": [
				"/assets/jsx-runtime-DFJu3dTM.js",
				"/assets/shared-BV1rC7lP.js",
				"/assets/site-layouts-CXd3bcwO.js",
				"/assets/react-dom-Dq4KzjWf.js",
				"/assets/dist-mTjZWd7O.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/docs": {
			"id": "routes/docs",
			"parentId": "root",
			"path": "docs/*",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": true,
			"hasClientAction": false,
			"hasClientLoader": true,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/docs-Cuqn1fUc.js",
			"imports": [
				"/assets/jsx-runtime-DFJu3dTM.js",
				"/assets/react-dom-Dq4KzjWf.js",
				"/assets/shared-BV1rC7lP.js",
				"/assets/dist-mTjZWd7O.js",
				"/assets/site-layouts-CXd3bcwO.js",
				"/assets/lib-C9WO10Ms.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/api.search": {
			"id": "routes/api.search",
			"parentId": "root",
			"path": "api/search",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": true,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": false,
			"hasErrorBoundary": false,
			"module": "/assets/api.search-BvRk9kiK.js",
			"imports": [],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/api.chat": {
			"id": "routes/api.chat",
			"parentId": "root",
			"path": "api/chat",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": true,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": false,
			"hasErrorBoundary": false,
			"module": "/assets/api.chat-BvRk9kiK.js",
			"imports": [],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/og.docs": {
			"id": "routes/og.docs",
			"parentId": "root",
			"path": "og/docs/*",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": true,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": false,
			"hasErrorBoundary": false,
			"module": "/assets/og.docs-BvRk9kiK.js",
			"imports": [],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/llms": {
			"id": "routes/llms",
			"parentId": "root",
			"path": "llms.txt",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": true,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": false,
			"hasErrorBoundary": false,
			"module": "/assets/llms-BvRk9kiK.js",
			"imports": [],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/llms-full": {
			"id": "routes/llms-full",
			"parentId": "root",
			"path": "llms-full.txt",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": true,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": false,
			"hasErrorBoundary": false,
			"module": "/assets/llms-full-BvRk9kiK.js",
			"imports": [],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/llms-mdx": {
			"id": "routes/llms-mdx",
			"parentId": "root",
			"path": "llms.mdx/docs/*",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": true,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": false,
			"hasErrorBoundary": false,
			"module": "/assets/llms-mdx-BvRk9kiK.js",
			"imports": [],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/not-found": {
			"id": "routes/not-found",
			"parentId": "root",
			"path": "*",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": true,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/not-found-DgjmJpX0.js",
			"imports": [
				"/assets/not-found-cnVM0gI9.js",
				"/assets/jsx-runtime-DFJu3dTM.js",
				"/assets/shared-BV1rC7lP.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-7b3b4413.js",
	"version": "7b3b4413",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var assetsBuildDirectory = "build/client";
var basename = "/";
var future = {
	"unstable_enableNodeReadableStream": false,
	"unstable_optimizeDeps": false
};
var ssr = true;
var isSpaMode = false;
var prerender = [
	"/",
	"/docs",
	"/docs/xbase",
	"/docs/plugins",
	"/docs/cleo",
	"/docs/skill",
	"/llms.txt",
	"/llms-full.txt"
];
var routeDiscovery = {
	"mode": "lazy",
	"manifestPath": "/__manifest"
};
var publicPath = "/";
var entry = { module: entry_server_node_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"routes/home": {
		id: "routes/home",
		parentId: "root",
		path: void 0,
		index: true,
		caseSensitive: void 0,
		module: home_exports
	},
	"routes/docs": {
		id: "routes/docs",
		parentId: "root",
		path: "docs/*",
		index: void 0,
		caseSensitive: void 0,
		module: docs_exports
	},
	"routes/api.search": {
		id: "routes/api.search",
		parentId: "root",
		path: "api/search",
		index: void 0,
		caseSensitive: void 0,
		module: api_search_exports
	},
	"routes/api.chat": {
		id: "routes/api.chat",
		parentId: "root",
		path: "api/chat",
		index: void 0,
		caseSensitive: void 0,
		module: api_chat_exports
	},
	"routes/og.docs": {
		id: "routes/og.docs",
		parentId: "root",
		path: "og/docs/*",
		index: void 0,
		caseSensitive: void 0,
		module: og_docs_exports
	},
	"routes/llms": {
		id: "routes/llms",
		parentId: "root",
		path: "llms.txt",
		index: void 0,
		caseSensitive: void 0,
		module: llms_exports
	},
	"routes/llms-full": {
		id: "routes/llms-full",
		parentId: "root",
		path: "llms-full.txt",
		index: void 0,
		caseSensitive: void 0,
		module: llms_full_exports
	},
	"routes/llms-mdx": {
		id: "routes/llms-mdx",
		parentId: "root",
		path: "llms.mdx/docs/*",
		index: void 0,
		caseSensitive: void 0,
		module: llms_mdx_exports
	},
	"routes/not-found": {
		id: "routes/not-found",
		parentId: "root",
		path: "*",
		index: void 0,
		caseSensitive: void 0,
		module: not_found_exports
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
