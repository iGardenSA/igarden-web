(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/igarden-web/src/lib/hooks/use-in-view.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useInView",
    ()=>useInView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useInView(options = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
}) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInView.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "useInView.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setInView(true);
                        obs.unobserve(el);
                    }
                }
            }["useInView.useEffect"], options);
            obs.observe(el);
            return ({
                "useInView.useEffect": ()=>obs.disconnect()
            })["useInView.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useInView.useEffect"], []);
    return {
        ref,
        inView
    };
}
_s(useInView, "K+dCFMkCcTyPMHOI0MxAWPXS6Js=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/igarden-web/src/components/ui/fade-in.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FadeIn",
    ()=>FadeIn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$hooks$2f$use$2d$in$2d$view$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/lib/hooks/use-in-view.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function FadeIn({ children, delay = 0, className }) {
    _s();
    const { ref, inView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$hooks$2f$use$2d$in$2d$view$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fade-up-ready", inView && "fade-up-visible", className),
        style: delay ? {
            transitionDelay: `${delay}ms`
        } : undefined,
        children: children
    }, void 0, false, {
        fileName: "[project]/igarden-web/src/components/ui/fade-in.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(FadeIn, "oyd/E8SD7Fx4uOp6P7gVV2pVlaE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$hooks$2f$use$2d$in$2d$view$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = FadeIn;
var _c;
__turbopack_context__.k.register(_c, "FadeIn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=igarden-web_src_0hy~aex._.js.map