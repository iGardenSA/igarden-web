module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/igarden-web/src/lib/utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/igarden-web/src/components/ui/button.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/@radix-ui/react-slot/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
;
;
/**
 * Button — مكوّن الزر الرسمي لـ iGarden
 * يلتزم بقاعدة 60-30-10 ولوحة الألوان المعتمدة.
 */ const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])([
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "rounded-xl text-sm font-semibold transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "focus-visible:ring-[var(--color-accent-500)]",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
], {
    variants: {
        variant: {
            // الزر الأساسي — أخضر غامق (30% من قاعدة الألوان)
            primary: [
                "bg-[var(--color-brand-600)] text-white shadow-[var(--shadow-soft)]",
                "hover:bg-[var(--color-brand-700)] hover:shadow-[var(--shadow-md)]",
                "active:scale-[0.98]"
            ],
            // الزر المحفّز — ليموني (10% — للتأكيدات والـ CTA الثانوي)
            accent: [
                "bg-[var(--color-accent-500)] text-[var(--color-brand-700)] font-bold",
                "hover:bg-[var(--color-accent-600)] hover:text-white",
                "shadow-[var(--shadow-soft)] active:scale-[0.98]"
            ],
            // محدّد — للأزرار الثانوية على خلفيات فاتحة
            outline: [
                "border-2 border-[var(--color-brand-600)] text-[var(--color-brand-600)] bg-transparent",
                "hover:bg-[var(--color-brand-600)] hover:text-white"
            ],
            // شبحي — للروابط الخفيفة
            ghost: [
                "text-[var(--color-brand-600)] bg-transparent",
                "hover:bg-[var(--color-brand-50)]"
            ],
            // فاتح — للأزرار على خلفيات داكنة (Hero الأخضر)
            light: [
                "bg-white text-[var(--color-brand-600)]",
                "hover:bg-[var(--color-surface)] shadow-[var(--shadow-soft)]",
                "active:scale-[0.98]"
            ],
            link: "text-[var(--color-brand-600)] underline-offset-4 hover:underline"
        },
        size: {
            sm: "h-9 px-4 text-xs",
            md: "h-11 px-6 text-sm",
            lg: "h-12 px-8 text-base",
            xl: "h-14 px-10 text-base",
            icon: "size-10"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "md"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/igarden-web/src/components/ui/button.tsx",
        lineNumber: 77,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Button.displayName = "Button";
;
}),
"[project]/igarden-web/src/components/ui/glow-accent.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GlowAccent",
    ()=>GlowAccent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
const positionClasses = {
    "top-right": "top-0 right-0 translate-x-1/2 -translate-y-1/2",
    "top-left": "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
    "bottom-right": "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
    "bottom-left": "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
};
const intensityOpacity = {
    subtle: 0.15,
    medium: 0.25,
    strong: 0.4
};
// RGB values for radial-gradient
const colorRgb = {
    accent: "124, 179, 66",
    lime: "165, 214, 63"
};
function GlowAccent({ position, intensity = "subtle", color = "accent", className }) {
    const opacity = intensityOpacity[intensity];
    const rgb = colorRgb[color];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": "true",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("absolute pointer-events-none", "w-64 sm:w-80 md:w-96", "h-64 sm:h-80 md:h-96", "blur-3xl rounded-full", positionClasses[position], className),
        style: {
            background: `radial-gradient(circle, rgba(${rgb}, ${opacity}) 0%, transparent 70%)`
        }
    }, void 0, false, {
        fileName: "[project]/igarden-web/src/components/ui/glow-accent.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}),
"[project]/igarden-web/src/components/sections/01-hero.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroSection",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-rsc] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-rsc] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$glow$2d$accent$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/ui/glow-accent.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/lib/constants.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
function HeroSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden bg-gradient-to-br from-[var(--color-brand-700)] via-[var(--color-brand-600)] to-[var(--color-brand-500)] text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "absolute inset-0 opacity-20 pointer-events-none",
                style: {
                    backgroundImage: "radial-gradient(circle at 20% 30%, var(--color-accent-500) 0%, transparent 40%), radial-gradient(circle at 80% 70%, var(--color-accent-300) 0%, transparent 40%)"
                }
            }, void 0, false, {
                fileName: "[project]/igarden-web/src/components/sections/01-hero.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$glow$2d$accent$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GlowAccent"], {
                position: "top-left",
                intensity: "strong",
                color: "lime"
            }, void 0, false, {
                fileName: "[project]/igarden-web/src/components/sections/01-hero.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$glow$2d$accent$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GlowAccent"], {
                position: "bottom-right",
                intensity: "medium",
                color: "accent"
            }, void 0, false, {
                fileName: "[project]/igarden-web/src/components/sections/01-hero.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-igarden relative py-12 md:py-20 lg:py-28",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-accent-500)]/30 bg-[var(--color-accent-500)]/10 text-[var(--color-accent-300)] text-sm font-semibold mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/igarden-web/src/components/sections/01-hero.tsx",
                                        lineNumber: 27,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "مرخّصة من وزارة الاستثمار · جدة"
                                    }, void 0, false, {
                                        fileName: "[project]/igarden-web/src/components/sections/01-hero.tsx",
                                        lineNumber: 28,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/igarden-web/src/components/sections/01-hero.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "heading-eyebrow mb-6 text-[var(--color-accent-300)]",
                                children: "AgriTech · IoT · AI"
                            }, void 0, false, {
                                fileName: "[project]/igarden-web/src/components/sections/01-hero.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-white mb-6",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["KEY_MESSAGES"].hero
                            }, void 0, false, {
                                fileName: "[project]/igarden-web/src/components/sections/01-hero.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg md:text-xl text-white/85 leading-relaxed max-w-2xl mb-10",
                                children: "منظومة متكاملة من الزراعة المائية (Hydroponics) والاستزراع السمكي (Aquaponics) والزراعة الهوائية (Aeroponics)، مدعومة بالذكاء الاصطناعي وإنترنت الأشياء — ومصممة محلياً لمناخ المملكة."
                            }, void 0, false, {
                                fileName: "[project]/igarden-web/src/components/sections/01-hero.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col sm:flex-row gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "accent",
                                        size: "xl",
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/contact",
                                            children: [
                                                "احجز استشارة مجانية",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                    className: "rotate-180"
                                                }, void 0, false, {
                                                    fileName: "[project]/igarden-web/src/components/sections/01-hero.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 56
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/igarden-web/src/components/sections/01-hero.tsx",
                                            lineNumber: 39,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/igarden-web/src/components/sections/01-hero.tsx",
                                        lineNumber: 38,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "light",
                                        size: "xl",
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            href: "#solutions",
                                            children: "اكتشف الحلول"
                                        }, void 0, false, {
                                            fileName: "[project]/igarden-web/src/components/sections/01-hero.tsx",
                                            lineNumber: 42,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/igarden-web/src/components/sections/01-hero.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/igarden-web/src/components/sections/01-hero.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/igarden-web/src/components/sections/01-hero.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mt-14 md:mt-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroStat, {
                                value: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STATS"].waterSavingsMax.value,
                                unit: "%",
                                label: "توفير في المياه"
                            }, void 0, false, {
                                fileName: "[project]/igarden-web/src/components/sections/01-hero.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroStat, {
                                value: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STATS"].productivity.value,
                                unit: "x",
                                label: "زيادة في الإنتاجية"
                            }, void 0, false, {
                                fileName: "[project]/igarden-web/src/components/sections/01-hero.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroStat, {
                                value: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STATS"].opexReduction.value,
                                unit: "%",
                                label: "خفض التكاليف"
                            }, void 0, false, {
                                fileName: "[project]/igarden-web/src/components/sections/01-hero.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroStat, {
                                value: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STATS"].climateTolerance.value,
                                unit: "°C+",
                                label: "تحمل مناخي"
                            }, void 0, false, {
                                fileName: "[project]/igarden-web/src/components/sections/01-hero.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/igarden-web/src/components/sections/01-hero.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/igarden-web/src/components/sections/01-hero.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/igarden-web/src/components/sections/01-hero.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
function HeroStat({ value, unit, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:bg-white/10 hover:border-white/20 transition-all duration-500 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-baseline gap-1 justify-center",
                "data-num": true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-5xl sm:text-6xl font-extrabold text-[var(--color-accent-300)] leading-none",
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/igarden-web/src/components/sections/01-hero.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-2xl md:text-3xl font-bold text-white/80",
                        children: unit
                    }, void 0, false, {
                        fileName: "[project]/igarden-web/src/components/sections/01-hero.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/igarden-web/src/components/sections/01-hero.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-10 h-0.5 bg-[var(--color-accent-500)] mt-3 mb-2 mx-auto"
            }, void 0, false, {
                fileName: "[project]/igarden-web/src/components/sections/01-hero.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-white/70",
                children: label
            }, void 0, false, {
                fileName: "[project]/igarden-web/src/components/sections/01-hero.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/igarden-web/src/components/sections/01-hero.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
}),
"[project]/igarden-web/src/components/sections/02-trust-bar.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrustBarSection",
    ()=>TrustBarSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/award.js [app-rsc] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCheck$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/file-check.js [app-rsc] (ecmascript) <export default as FileCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/building-2.js [app-rsc] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/trophy.js [app-rsc] (ecmascript) <export default as Trophy>");
;
;
function TrustBarSection() {
    const items = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCheck$3e$__["FileCheck"],
            title: "ترخيص استثماري",
            subtitle: "وزارة الاستثمار",
            detail: "رقم 24926249716"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
            title: "نموذج صناعي مسجل",
            subtitle: "iGarden Tower",
            detail: "رقم 423450193"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"],
            title: "Agrofood 2025",
            subtitle: "المعرض الزراعي",
            detail: "مشاركة رسمية — جدة"
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"],
            title: "شراكات استراتيجية",
            subtitle: "شركاء مؤسسيون",
            detail: "حكومي · أكاديمي · تجاري"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white border-y border-[var(--color-border)]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-igarden py-10 md:py-14",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-muted)] mb-8",
                    children: "موثوقية مبنية على التوثيق والشراكات"
                }, void 0, false, {
                    fileName: "[project]/igarden-web/src/components/sections/02-trust-bar.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8",
                    children: items.map((item)=>{
                        const Icon = item.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 md:gap-5 group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "shrink-0 h-12 w-12 md:h-14 md:w-14 rounded-xl bg-[var(--color-brand-50)] text-[var(--color-brand-600)] flex items-center justify-center group-hover:bg-[var(--color-accent-500)] group-hover:text-[var(--color-brand-700)] transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                        className: "h-5 w-5 md:h-6 md:w-6"
                                    }, void 0, false, {
                                        fileName: "[project]/igarden-web/src/components/sections/02-trust-bar.tsx",
                                        lineNumber: 22,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/igarden-web/src/components/sections/02-trust-bar.tsx",
                                    lineNumber: 21,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "leading-tight",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm md:text-base font-bold text-[var(--color-brand-600)]",
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/igarden-web/src/components/sections/02-trust-bar.tsx",
                                            lineNumber: 25,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-[var(--color-muted)] mt-0.5",
                                            children: item.subtitle
                                        }, void 0, false, {
                                            fileName: "[project]/igarden-web/src/components/sections/02-trust-bar.tsx",
                                            lineNumber: 26,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-[var(--color-muted)]/70 mt-0.5 font-medium",
                                            dir: "ltr",
                                            children: item.detail
                                        }, void 0, false, {
                                            fileName: "[project]/igarden-web/src/components/sections/02-trust-bar.tsx",
                                            lineNumber: 27,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/igarden-web/src/components/sections/02-trust-bar.tsx",
                                    lineNumber: 24,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, item.title, true, {
                            fileName: "[project]/igarden-web/src/components/sections/02-trust-bar.tsx",
                            lineNumber: 20,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/igarden-web/src/components/sections/02-trust-bar.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/igarden-web/src/components/sections/02-trust-bar.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/igarden-web/src/components/sections/02-trust-bar.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/igarden-web/src/components/ui/fade-in.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FadeIn",
    ()=>FadeIn
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const FadeIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FadeIn() from the server but FadeIn is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/igarden-web/src/components/ui/fade-in.tsx <module evaluation>", "FadeIn");
}),
"[project]/igarden-web/src/components/ui/fade-in.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FadeIn",
    ()=>FadeIn
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const FadeIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FadeIn() from the server but FadeIn is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/igarden-web/src/components/ui/fade-in.tsx", "FadeIn");
}),
"[project]/igarden-web/src/components/ui/fade-in.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$fade$2d$in$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/igarden-web/src/components/ui/fade-in.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$fade$2d$in$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/ui/fade-in.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$fade$2d$in$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/igarden-web/src/components/sections/02b-achievements.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AchievementsSection",
    ()=>AchievementsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-rsc] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/rocket.js [app-rsc] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sprout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sprout$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/sprout.js [app-rsc] (ecmascript) <export default as Sprout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/users.js [app-rsc] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/award.js [app-rsc] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-rsc] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$glow$2d$accent$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/ui/glow-accent.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$fade$2d$in$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/ui/fade-in.tsx [app-rsc] (ecmascript)");
;
;
;
;
const achievements = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"],
        title: "ترخيص استثماري رسمي",
        value: "24926249716",
        description: "من وزارة الاستثمار للنشاط الزراعي الذكي"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"],
        title: "انطلاق فعلي",
        value: "Q2 2025",
        description: "بدء التشغيل مع تحقيق مبيعات أولية"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sprout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sprout$3e$__["Sprout"],
        title: "محمية التجارب",
        value: "عسفان",
        description: "مقر الشركة — حقل تطبيقي للابتكار"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        title: "ورش عمل مجتمعية",
        value: "+5",
        description: "لتشجيع التحول نحو الزراعة المائية الذكية"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
        title: "نموذج صناعي مسجل",
        value: "#423450193",
        description: "SAIP — iGarden Tower محمي قانونياً"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
        title: "فريق متكامل",
        value: "+15 سنة",
        description: "خبرة تراكمية جاهزة للتنفيذ الفوري"
    }
];
function AchievementsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden bg-[var(--color-brand-600)] text-white section-padding",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "absolute inset-0 opacity-10 pointer-events-none",
                style: {
                    backgroundImage: "radial-gradient(circle at 10% 90%, var(--color-accent-500) 0%, transparent 50%), radial-gradient(circle at 90% 10%, var(--color-accent-300) 0%, transparent 40%)"
                }
            }, void 0, false, {
                fileName: "[project]/igarden-web/src/components/sections/02b-achievements.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$glow$2d$accent$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GlowAccent"], {
                position: "top-right",
                intensity: "strong",
                color: "lime"
            }, void 0, false, {
                fileName: "[project]/igarden-web/src/components/sections/02b-achievements.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$glow$2d$accent$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GlowAccent"], {
                position: "bottom-left",
                intensity: "medium",
                color: "accent"
            }, void 0, false, {
                fileName: "[project]/igarden-web/src/components/sections/02b-achievements.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-igarden relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center max-w-3xl mx-auto mb-12 md:mb-14",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "heading-eyebrow mb-4 text-[var(--color-accent-300)]",
                                children: "إنجازاتنا المبكرة"
                            }, void 0, false, {
                                fileName: "[project]/igarden-web/src/components/sections/02b-achievements.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl md:text-5xl font-bold text-white mb-6 leading-tight",
                                children: "سجل تراكشن حقيقي"
                            }, void 0, false, {
                                fileName: "[project]/igarden-web/src/components/sections/02b-achievements.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-white/85 leading-relaxed",
                                children: "لسنا فكرة على ورق — نحن شركة شغّالة بترخيص رسمي ومنتج مسجل وفريق منفّذ، وانطلاقة فعلية في السوق السعودي."
                            }, void 0, false, {
                                fileName: "[project]/igarden-web/src/components/sections/02b-achievements.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/igarden-web/src/components/sections/02b-achievements.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5",
                        children: achievements.map((item, i)=>{
                            const Icon = item.icon;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$fade$2d$in$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FadeIn"], {
                                delay: i * 80,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-500 h-full flex flex-col",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-10 w-10 rounded-xl bg-[var(--color-accent-500)]/20 text-[var(--color-accent-300)] flex items-center justify-center mb-4 shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/igarden-web/src/components/sections/02b-achievements.tsx",
                                                lineNumber: 78,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/igarden-web/src/components/sections/02b-achievements.tsx",
                                            lineNumber: 77,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-3xl md:text-4xl font-extrabold text-[var(--color-accent-300)] leading-tight mb-2",
                                            "data-num": true,
                                            children: item.value
                                        }, void 0, false, {
                                            fileName: "[project]/igarden-web/src/components/sections/02b-achievements.tsx",
                                            lineNumber: 80,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base font-bold text-white mb-1",
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/igarden-web/src/components/sections/02b-achievements.tsx",
                                            lineNumber: 86,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-white/70 leading-relaxed mt-auto",
                                            children: item.description
                                        }, void 0, false, {
                                            fileName: "[project]/igarden-web/src/components/sections/02b-achievements.tsx",
                                            lineNumber: 87,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/igarden-web/src/components/sections/02b-achievements.tsx",
                                    lineNumber: 76,
                                    columnNumber: 17
                                }, this)
                            }, item.title, false, {
                                fileName: "[project]/igarden-web/src/components/sections/02b-achievements.tsx",
                                lineNumber: 75,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/igarden-web/src/components/sections/02b-achievements.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/igarden-web/src/components/sections/02b-achievements.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/igarden-web/src/components/sections/02b-achievements.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
"[project]/igarden-web/src/components/sections/03-problem.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProblemSection",
    ()=>ProblemSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/droplets.js [app-rsc] (ecmascript) <export default as Droplets>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/thermometer.js [app-rsc] (ecmascript) <export default as Thermometer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/trending-down.js [app-rsc] (ecmascript) <export default as TrendingDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sprout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sprout$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/sprout.js [app-rsc] (ecmascript) <export default as Sprout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-rsc] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$fade$2d$in$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/ui/fade-in.tsx [app-rsc] (ecmascript)");
;
;
;
const featuredChallenge = {
    icon: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"],
    stat: "70%",
    title: "تفشل خلال 3 سنوات",
    description: "من المزارع الصغيرة والمتوسطة تتعثر وتخرج من السوق خلال السنوات الثلاث الأولى — فجوة يجب سدّها لحماية الأمن الغذائي الوطني."
};
const challenges = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$droplets$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Droplets$3e$__["Droplets"],
        stat: "84%",
        title: "من المياه للزراعة",
        description: "أكثر من 84% من استهلاك المياه في المملكة يذهب للقطاع الزراعي — بينما تتناقص الموارد الجوفية بسرعة."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__["Thermometer"],
        stat: "+45°C",
        title: "صيف قاسٍ يوقف الإنتاج",
        description: "درجات حرارة الصيف تُعطّل الزراعة التقليدية لأشهر، وتستنزف كلفة التبريد والطاقة في البيوت المحمية غير الذكية."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$down$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingDown$3e$__["TrendingDown"],
        stat: "80%",
        title: "اعتماد على الاستيراد",
        description: "تستورد المملكة نحو 80% من احتياجاتها الغذائية — فجوة تهدد الأمن الغذائي وتضغط على الاقتصاد."
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sprout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sprout$3e$__["Sprout"],
        stat: "1x",
        title: "إنتاجية محدودة بالمساحة",
        description: "الزراعة التقليدية الأفقية تحدّ الإنتاجية بمساحة الأرض المتاحة، ولا تستفيد من البُعد الرأسي."
    }
];
function ProblemSection() {
    const FeaturedIcon = featuredChallenge.icon;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative bg-[var(--color-surface)] section-padding overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[var(--color-brand-600)]/10 to-transparent pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/igarden-web/src/components/sections/03-problem.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-igarden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-3xl mb-12 md:mb-14",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "heading-eyebrow mb-4",
                                children: "التحدي"
                            }, void 0, false, {
                                fileName: "[project]/igarden-web/src/components/sections/03-problem.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "heading-section mb-6",
                                children: [
                                    "الزراعة التقليدية",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/igarden-web/src/components/sections/03-problem.tsx",
                                        lineNumber: 33,
                                        columnNumber: 30
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--color-muted)]",
                                        children: "لم تعد تكفي."
                                    }, void 0, false, {
                                        fileName: "[project]/igarden-web/src/components/sections/03-problem.tsx",
                                        lineNumber: 34,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/igarden-web/src/components/sections/03-problem.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-[var(--color-muted)] leading-relaxed",
                                children: "رؤية 2030 وضعت الأمن الغذائي هدفاً استراتيجياً — لكن التحديات المناخية وشح المياه والاعتماد على الاستيراد يجعلون التحوّل الرقمي الزراعي ضرورة، لا خياراً."
                            }, void 0, false, {
                                fileName: "[project]/igarden-web/src/components/sections/03-problem.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/igarden-web/src/components/sections/03-problem.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$fade$2d$in$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FadeIn"], {
                                className: "col-span-1 md:col-span-2 lg:col-span-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative overflow-hidden bg-[var(--color-brand-600)] text-white rounded-2xl p-7 md:p-9 flex flex-col md:flex-row md:items-center gap-6 md:gap-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "aria-hidden": "true",
                                            className: "absolute inset-0 opacity-15 pointer-events-none",
                                            style: {
                                                backgroundImage: "radial-gradient(circle at 80% 50%, var(--color-accent-500) 0%, transparent 60%)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/igarden-web/src/components/sections/03-problem.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "shrink-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-14 w-14 rounded-2xl bg-[var(--color-accent-500)]/20 text-[var(--color-accent-300)] flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(FeaturedIcon, {
                                                            className: "h-7 w-7"
                                                        }, void 0, false, {
                                                            fileName: "[project]/igarden-web/src/components/sections/03-problem.tsx",
                                                            lineNumber: 56,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/igarden-web/src/components/sections/03-problem.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/igarden-web/src/components/sections/03-problem.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-6xl md:text-7xl lg:text-8xl font-extrabold text-[var(--color-accent-300)] leading-none mb-3",
                                                            "data-num": true,
                                                            children: featuredChallenge.stat
                                                        }, void 0, false, {
                                                            fileName: "[project]/igarden-web/src/components/sections/03-problem.tsx",
                                                            lineNumber: 60,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-xl md:text-2xl font-bold text-white mb-2",
                                                            children: featuredChallenge.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/igarden-web/src/components/sections/03-problem.tsx",
                                                            lineNumber: 66,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-base text-white/85 leading-relaxed max-w-2xl",
                                                            children: featuredChallenge.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/igarden-web/src/components/sections/03-problem.tsx",
                                                            lineNumber: 69,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/igarden-web/src/components/sections/03-problem.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/igarden-web/src/components/sections/03-problem.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/igarden-web/src/components/sections/03-problem.tsx",
                                    lineNumber: 44,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/igarden-web/src/components/sections/03-problem.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            challenges.map((item, i)=>{
                                const Icon = item.icon;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$fade$2d$in$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FadeIn"], {
                                    delay: (i + 1) * 100,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white rounded-2xl p-6 md:p-7 border border-[var(--color-border)] hover:border-[var(--color-brand-300)] transition-colors h-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-12 w-12 rounded-xl bg-[var(--color-brand-50)] text-[var(--color-brand-600)] flex items-center justify-center mb-5",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    className: "h-6 w-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/igarden-web/src/components/sections/03-problem.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/igarden-web/src/components/sections/03-problem.tsx",
                                                lineNumber: 83,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-4xl md:text-5xl font-extrabold text-[var(--color-brand-600)] leading-none mb-3",
                                                "data-num": true,
                                                children: item.stat
                                            }, void 0, false, {
                                                fileName: "[project]/igarden-web/src/components/sections/03-problem.tsx",
                                                lineNumber: 86,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-base md:text-lg font-bold text-[var(--color-brand-600)] mb-2",
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/igarden-web/src/components/sections/03-problem.tsx",
                                                lineNumber: 92,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-[var(--color-muted)] leading-relaxed",
                                                children: item.description
                                            }, void 0, false, {
                                                fileName: "[project]/igarden-web/src/components/sections/03-problem.tsx",
                                                lineNumber: 95,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/igarden-web/src/components/sections/03-problem.tsx",
                                        lineNumber: 82,
                                        columnNumber: 17
                                    }, this)
                                }, item.title, false, {
                                    fileName: "[project]/igarden-web/src/components/sections/03-problem.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/igarden-web/src/components/sections/03-problem.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/igarden-web/src/components/sections/03-problem.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/igarden-web/src/components/sections/03-problem.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/igarden-web/src/components/ui/badge.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/class-variance-authority/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] transition-colors", {
    variants: {
        variant: {
            hardware: "bg-[var(--color-brand-50)] text-[var(--color-brand-600)] border border-[var(--color-brand-200)]",
            software: "bg-[var(--color-accent-100)] text-[var(--color-accent-700)] border border-[var(--color-accent-300)]",
            knowledge: "bg-amber-50 text-amber-800 border border-amber-200",
            accent: "bg-[var(--color-accent-500)] text-[var(--color-brand-700)]",
            outline: "border border-[var(--color-border)] text-[var(--color-muted)]"
        }
    },
    defaultVariants: {
        variant: "hardware"
    }
});
function Badge({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/igarden-web/src/components/ui/badge.tsx",
        lineNumber: 28,
        columnNumber: 10
    }, this);
}
;
}),
"[project]/igarden-web/src/components/sections/04-solution.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SolutionSection",
    ()=>SolutionSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/cpu.js [app-rsc] (ecmascript) <export default as Cpu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/cloud.js [app-rsc] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-rsc] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/check.js [app-rsc] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/ui/badge.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$fade$2d$in$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/ui/fade-in.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/lib/constants.ts [app-rsc] (ecmascript)");
;
;
;
;
;
function SolutionSection() {
    const pillars = [
        {
            badge: "hardware",
            badgeLabel: "HARDWARE",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cpu$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Cpu$3e$__["Cpu"],
            title: "العتاد الذكي",
            description: "أبراج Aeroponic، بيوت محمية، أنظمة Aquaponics، وشبكة حساسات دقيقة لقياس pH و TDS ودرجة الحرارة بدقة متناهية.",
            points: [
                "مصمّم محلياً لمناخ المملكة (+45°C)",
                "نموذج صناعي مسجل",
                "تركيب وصيانة في الموقع"
            ]
        },
        {
            badge: "software",
            badgeLabel: "SOFTWARE",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"],
            title: "منصة iGarden Cloud",
            description: "لوحة تحكم سحابية مركزية مع تحليلات تنبؤية بالذكاء الاصطناعي، تنبيهات لحظية، وتكامل API مع أنظمة ERP.",
            points: [
                "تحكم كامل من أي مكان",
                "تنبؤ بالمحاصيل والأمراض (AI)",
                "تقارير قابلة للتصدير"
            ]
        },
        {
            badge: "knowledge",
            badgeLabel: "KNOWLEDGE",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
            title: "iGarden Knowledge",
            description: "برامج إرشاد فني وتدريب متخصص للمزارعين والشركاء الحكوميين والأكاديميين لضمان أعلى كفاءة تشغيل.",
            points: [
                "إرشاد تقني مستمر",
                "دورات تدريبية عملية",
                "شراكات أكاديمية"
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "solutions",
        className: "bg-white section-padding",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-igarden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center max-w-3xl mx-auto mb-12 md:mb-14",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "heading-eyebrow mb-4",
                            children: "ميزتنا التنافسية"
                        }, void 0, false, {
                            fileName: "[project]/igarden-web/src/components/sections/04-solution.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "heading-section mb-6",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["KEY_MESSAGES"].competitive
                        }, void 0, false, {
                            fileName: "[project]/igarden-web/src/components/sections/04-solution.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-[var(--color-muted)] leading-relaxed",
                            children: "منظومة واحدة متكاملة تُغنيك عن تعدد الموردين — كل مكوّن مصمّم ليعمل مع البقية بأعلى كفاءة ممكنة."
                        }, void 0, false, {
                            fileName: "[project]/igarden-web/src/components/sections/04-solution.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/igarden-web/src/components/sections/04-solution.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8",
                    children: pillars.map((p, i)=>{
                        const Icon = p.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$fade$2d$in$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FadeIn"], {
                            delay: i * 120,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white rounded-2xl border border-[var(--color-border)] p-7 md:p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-md)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-14 w-14 rounded-2xl bg-[var(--color-brand-50)] text-[var(--color-brand-600)] flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    className: "h-7 w-7"
                                                }, void 0, false, {
                                                    fileName: "[project]/igarden-web/src/components/sections/04-solution.tsx",
                                                    lineNumber: 28,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/igarden-web/src/components/sections/04-solution.tsx",
                                                lineNumber: 27,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                                                variant: p.badge,
                                                children: p.badgeLabel
                                            }, void 0, false, {
                                                fileName: "[project]/igarden-web/src/components/sections/04-solution.tsx",
                                                lineNumber: 30,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/igarden-web/src/components/sections/04-solution.tsx",
                                        lineNumber: 26,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl md:text-2xl font-bold text-[var(--color-brand-600)] mb-3",
                                        children: p.title
                                    }, void 0, false, {
                                        fileName: "[project]/igarden-web/src/components/sections/04-solution.tsx",
                                        lineNumber: 32,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm md:text-base text-[var(--color-muted)] leading-relaxed mb-6",
                                        children: p.description
                                    }, void 0, false, {
                                        fileName: "[project]/igarden-web/src/components/sections/04-solution.tsx",
                                        lineNumber: 33,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2.5 mt-auto pt-5 border-t border-[var(--color-border)]",
                                        children: p.points.map((pt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-2.5 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        className: "h-4 w-4 shrink-0 mt-0.5 text-[var(--color-accent-500)]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/igarden-web/src/components/sections/04-solution.tsx",
                                                        lineNumber: 37,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[var(--color-foreground)]",
                                                        children: pt
                                                    }, void 0, false, {
                                                        fileName: "[project]/igarden-web/src/components/sections/04-solution.tsx",
                                                        lineNumber: 38,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, pt, true, {
                                                fileName: "[project]/igarden-web/src/components/sections/04-solution.tsx",
                                                lineNumber: 36,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/igarden-web/src/components/sections/04-solution.tsx",
                                        lineNumber: 34,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/igarden-web/src/components/sections/04-solution.tsx",
                                lineNumber: 25,
                                columnNumber: 17
                            }, this)
                        }, p.title, false, {
                            fileName: "[project]/igarden-web/src/components/sections/04-solution.tsx",
                            lineNumber: 24,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/igarden-web/src/components/sections/04-solution.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/igarden-web/src/components/sections/04-solution.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/igarden-web/src/components/sections/04-solution.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/igarden-web/src/components/sections/05-products.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductsSection",
    ()=>ProductsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-rsc] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sprout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sprout$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/sprout.js [app-rsc] (ecmascript) <export default as Sprout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/thermometer.js [app-rsc] (ecmascript) <export default as Thermometer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fish$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Fish$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/fish.js [app-rsc] (ecmascript) <export default as Fish>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/wind.js [app-rsc] (ecmascript) <export default as Wind>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/cloud.js [app-rsc] (ecmascript) <export default as Cloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/ui/badge.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$fade$2d$in$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/ui/fade-in.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
function ProductsSection() {
    const products = [
        {
            id: "tower",
            name: "iGarden Tower",
            nameAr: "البرج الزراعي الذكي",
            category: "hardware",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sprout$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sprout$3e$__["Sprout"],
            description: "برج Aeroponics عمودي يرفع الإنتاجية 3 أضعاف على نفس المساحة — نموذج صناعي مسجل.",
            stats: [
                {
                    value: "95%",
                    label: "توفير مياه"
                },
                {
                    value: "3x",
                    label: "إنتاجية"
                }
            ],
            featured: true
        },
        {
            id: "greenhouse",
            name: "Smart Greenhouses",
            nameAr: "البيوت المحمية الذكية",
            category: "hardware",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$thermometer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Thermometer$3e$__["Thermometer"],
            description: "بيوت محمية مؤتمتة بالكامل مع تحكم مناخي ذكي وكفاءة طاقة 40% مقارنة بالبيوت التقليدية.",
            stats: [
                {
                    value: "40%",
                    label: "كفاءة طاقة"
                },
                {
                    value: "45°C+",
                    label: "تحمل مناخي"
                }
            ]
        },
        {
            id: "aquaponics",
            name: "Aquaponics",
            nameAr: "الاستزراع السمكي المتكامل",
            category: "hardware",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$fish$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Fish$3e$__["Fish"],
            description: "منظومة تكاملية تربط الزراعة بالاستزراع السمكي مع إعادة تدوير 90% من المياه.",
            stats: [
                {
                    value: "90%",
                    label: "إعادة تدوير"
                },
                {
                    value: "50%",
                    label: "خفض أسمدة"
                }
            ]
        },
        {
            id: "aeroponics",
            name: "Aeroponics",
            nameAr: "الزراعة الهوائية",
            category: "hardware",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Wind$3e$__["Wind"],
            description: "زراعة الجذور في الهواء مع رذاذ مغذّي — أعلى كفاءة مائية في قطاع الزراعة المحمية.",
            stats: [
                {
                    value: "60%",
                    label: "توفير مياه"
                },
                {
                    value: "2x",
                    label: "سرعة نمو"
                }
            ]
        },
        {
            id: "cloud",
            name: "iGarden Cloud",
            nameAr: "منصة التحكم السحابية",
            category: "software",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Cloud$3e$__["Cloud"],
            description: "لوحة تحكم مركزية بالذكاء الاصطناعي لإدارة كل منظومتك من أي مكان وفي أي وقت.",
            stats: [
                {
                    value: "24/7",
                    label: "مراقبة"
                },
                {
                    value: "AI",
                    label: "تنبؤ ذكي"
                }
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-[var(--color-surface)] section-padding",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-igarden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "heading-eyebrow mb-4",
                                    children: "منتجاتنا"
                                }, void 0, false, {
                                    fileName: "[project]/igarden-web/src/components/sections/05-products.tsx",
                                    lineNumber: 19,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "heading-section",
                                    children: "حلول متكاملة لكل احتياج زراعي"
                                }, void 0, false, {
                                    fileName: "[project]/igarden-web/src/components/sections/05-products.tsx",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/igarden-web/src/components/sections/05-products.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/products",
                            className: "text-[var(--color-brand-600)] font-semibold hover:text-[var(--color-accent-600)] inline-flex items-center gap-2 group",
                            children: [
                                "عرض كل المنتجات",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    className: "h-4 w-4 rotate-180 group-hover:-translate-x-1 transition-transform"
                                }, void 0, false, {
                                    fileName: "[project]/igarden-web/src/components/sections/05-products.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/igarden-web/src/components/sections/05-products.tsx",
                            lineNumber: 22,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/igarden-web/src/components/sections/05-products.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 md:gap-6 auto-rows-fr",
                    children: products.map((product, i)=>{
                        const Icon = product.icon;
                        const isFeatured = product.featured;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$fade$2d$in$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FadeIn"], {
                            delay: i * 80,
                            className: "lg:col-span-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/products/${product.id}`,
                                className: "group relative bg-white rounded-2xl border border-[var(--color-border)] p-6 md:p-7 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-md)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `h-12 w-12 rounded-xl flex items-center justify-center transition-colors ${isFeatured ? "bg-[var(--color-accent-500)] text-[var(--color-brand-700)]" : "bg-[var(--color-brand-50)] text-[var(--color-brand-600)] group-hover:bg-[var(--color-accent-500)] group-hover:text-[var(--color-brand-700)]"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    className: "h-6 w-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/igarden-web/src/components/sections/05-products.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/igarden-web/src/components/sections/05-products.tsx",
                                                lineNumber: 35,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                                                variant: product.category,
                                                children: product.category.toUpperCase()
                                            }, void 0, false, {
                                                fileName: "[project]/igarden-web/src/components/sections/05-products.tsx",
                                                lineNumber: 38,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/igarden-web/src/components/sections/05-products.tsx",
                                        lineNumber: 34,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-[var(--color-muted)] uppercase tracking-wider mb-1",
                                        children: product.nameAr
                                    }, void 0, false, {
                                        fileName: "[project]/igarden-web/src/components/sections/05-products.tsx",
                                        lineNumber: 40,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xl md:text-2xl font-bold text-[var(--color-brand-600)] mb-3",
                                        children: product.name
                                    }, void 0, false, {
                                        fileName: "[project]/igarden-web/src/components/sections/05-products.tsx",
                                        lineNumber: 41,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-[var(--color-muted)] leading-relaxed mb-5",
                                        children: product.description
                                    }, void 0, false, {
                                        fileName: "[project]/igarden-web/src/components/sections/05-products.tsx",
                                        lineNumber: 42,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-5 mt-auto pt-5 border-t border-[var(--color-border)]",
                                        children: product.stats.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-2xl font-extrabold text-[var(--color-accent-500)] leading-none",
                                                        "data-num": true,
                                                        children: s.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/igarden-web/src/components/sections/05-products.tsx",
                                                        lineNumber: 46,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-[var(--color-muted)] mt-1",
                                                        children: s.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/igarden-web/src/components/sections/05-products.tsx",
                                                        lineNumber: 47,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, s.label, true, {
                                                fileName: "[project]/igarden-web/src/components/sections/05-products.tsx",
                                                lineNumber: 45,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/igarden-web/src/components/sections/05-products.tsx",
                                        lineNumber: 43,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/igarden-web/src/components/sections/05-products.tsx",
                                lineNumber: 33,
                                columnNumber: 17
                            }, this)
                        }, product.id, false, {
                            fileName: "[project]/igarden-web/src/components/sections/05-products.tsx",
                            lineNumber: 32,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/igarden-web/src/components/sections/05-products.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/igarden-web/src/components/sections/05-products.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/igarden-web/src/components/sections/05-products.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/igarden-web/src/components/ui/stat.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Stat",
    ()=>Stat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
function Stat({ value, unit, label, align = "start", size = "lg", className, ...props }) {
    const sizeClasses = {
        md: "text-3xl md:text-4xl",
        lg: "text-4xl md:text-5xl",
        xl: "text-5xl md:text-6xl lg:text-7xl"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2", align === "center" && "items-center text-center", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-baseline gap-1",
                "data-num": true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("font-extrabold tracking-tight text-[var(--color-accent-500)] leading-none", sizeClasses[size]),
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/igarden-web/src/components/ui/stat.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    unit && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-2xl md:text-3xl font-bold text-[var(--color-brand-600)]",
                        children: unit
                    }, void 0, false, {
                        fileName: "[project]/igarden-web/src/components/ui/stat.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/igarden-web/src/components/ui/stat.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm md:text-base text-[var(--color-muted)] font-medium",
                children: label
            }, void 0, false, {
                fileName: "[project]/igarden-web/src/components/ui/stat.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/igarden-web/src/components/ui/stat.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/igarden-web/src/components/sections/06-impact.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImpactSection",
    ()=>ImpactSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-rsc] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$stat$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/ui/stat.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$fade$2d$in$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/ui/fade-in.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/lib/constants.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
function ImpactSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white section-padding",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-igarden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:sticky lg:top-28",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "heading-eyebrow mb-4",
                                children: "الأثر بالأرقام"
                            }, void 0, false, {
                                fileName: "[project]/igarden-web/src/components/sections/06-impact.tsx",
                                lineNumber: 14,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "heading-section mb-6",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["KEY_MESSAGES"].trust
                            }, void 0, false, {
                                fileName: "[project]/igarden-web/src/components/sections/06-impact.tsx",
                                lineNumber: 15,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-[var(--color-muted)] leading-relaxed mb-6",
                                children: "كل رقم هنا مأخوذ من تشغيل فعلي لأنظمتنا — لا أرقام تسويقية مجرّدة. هذه قاعدة الثقة التي نبني عليها كل شراكة."
                            }, void 0, false, {
                                fileName: "[project]/igarden-web/src/components/sections/06-impact.tsx",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base text-[var(--color-muted)] leading-relaxed mb-8",
                                children: [
                                    "الهدف ليس الأرقام بحد ذاتها — الهدف هو ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--color-brand-600)] font-bold",
                                        children: "أمن غذائي مستدام"
                                    }, void 0, false, {
                                        fileName: "[project]/igarden-web/src/components/sections/06-impact.tsx",
                                        lineNumber: 20,
                                        columnNumber: 54
                                    }, this),
                                    "، ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--color-brand-600)] font-bold",
                                        children: "موارد محفوظة"
                                    }, void 0, false, {
                                        fileName: "[project]/igarden-web/src/components/sections/06-impact.tsx",
                                        lineNumber: 20,
                                        columnNumber: 137
                                    }, this),
                                    "، و",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[var(--color-brand-600)] font-bold",
                                        children: "استدامة اقتصادية قابلة للقياس"
                                    }, void 0, false, {
                                        fileName: "[project]/igarden-web/src/components/sections/06-impact.tsx",
                                        lineNumber: 20,
                                        columnNumber: 217
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/igarden-web/src/components/sections/06-impact.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "primary",
                                size: "lg",
                                asChild: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/about",
                                    children: [
                                        "تعرّف على قصتنا",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            className: "rotate-180"
                                        }, void 0, false, {
                                            fileName: "[project]/igarden-web/src/components/sections/06-impact.tsx",
                                            lineNumber: 23,
                                            columnNumber: 50
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/igarden-web/src/components/sections/06-impact.tsx",
                                    lineNumber: 23,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/igarden-web/src/components/sections/06-impact.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/igarden-web/src/components/sections/06-impact.tsx",
                        lineNumber: 13,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-5 md:gap-6",
                        children: [
                            [
                                {
                                    value: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STATS"].waterSavingsMax.value,
                                    unit: "%",
                                    label: "توفير في المياه",
                                    delay: 0
                                },
                                {
                                    value: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STATS"].productivity.value,
                                    unit: "x",
                                    label: "زيادة الإنتاجية",
                                    delay: 80
                                },
                                {
                                    value: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STATS"].fertilizerReduction.value,
                                    unit: "%",
                                    label: "خفض الأسمدة",
                                    delay: 160
                                },
                                {
                                    value: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STATS"].opexReduction.value,
                                    unit: "%",
                                    label: "خفض التكاليف",
                                    delay: 240
                                },
                                {
                                    value: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STATS"].energyEfficiency.value,
                                    unit: "%",
                                    label: "كفاءة الطاقة",
                                    delay: 320
                                },
                                {
                                    value: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STATS"].waterRecycle.value,
                                    unit: "%",
                                    label: "إعادة تدوير المياه",
                                    delay: 400
                                }
                            ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$fade$2d$in$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FadeIn"], {
                                    delay: s.delay,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-[var(--color-surface)] rounded-2xl p-6 md:p-7 h-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$stat$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Stat"], {
                                            value: s.value,
                                            unit: s.unit,
                                            label: s.label,
                                            size: "lg"
                                        }, void 0, false, {
                                            fileName: "[project]/igarden-web/src/components/sections/06-impact.tsx",
                                            lineNumber: 37,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/igarden-web/src/components/sections/06-impact.tsx",
                                        lineNumber: 36,
                                        columnNumber: 17
                                    }, this)
                                }, s.label, false, {
                                    fileName: "[project]/igarden-web/src/components/sections/06-impact.tsx",
                                    lineNumber: 35,
                                    columnNumber: 15
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$fade$2d$in$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FadeIn"], {
                                delay: 480,
                                className: "col-span-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[var(--color-brand-600)] text-white rounded-2xl p-6 md:p-7",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-baseline gap-2",
                                            "data-num": true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-5xl md:text-6xl font-extrabold text-[var(--color-accent-300)] leading-none",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STATS"].climateTolerance.value
                                                }, void 0, false, {
                                                    fileName: "[project]/igarden-web/src/components/sections/06-impact.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-2xl md:text-3xl font-bold",
                                                    children: "°C+"
                                                }, void 0, false, {
                                                    fileName: "[project]/igarden-web/src/components/sections/06-impact.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/igarden-web/src/components/sections/06-impact.tsx",
                                            lineNumber: 43,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm md:text-base text-white/80 mt-3 font-medium",
                                            children: "تحمّل مناخي — مصمّمة خصيصاً لصيف المملكة الحار"
                                        }, void 0, false, {
                                            fileName: "[project]/igarden-web/src/components/sections/06-impact.tsx",
                                            lineNumber: 47,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/igarden-web/src/components/sections/06-impact.tsx",
                                    lineNumber: 42,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/igarden-web/src/components/sections/06-impact.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/igarden-web/src/components/sections/06-impact.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/igarden-web/src/components/sections/06-impact.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/igarden-web/src/components/sections/06-impact.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/igarden-web/src/components/sections/06-impact.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/igarden-web/src/components/sections/07-process.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProcessSection",
    ()=>ProcessSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-rsc] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2d$ruler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilRuler$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/pencil-ruler.js [app-rsc] (ecmascript) <export default as PencilRuler>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/wrench.js [app-rsc] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/activity.js [app-rsc] (ecmascript) <export default as Activity>");
;
;
function ProcessSection() {
    const steps = [
        {
            number: "01",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"],
            title: "استشارة مجانية",
            description: "نلتقي معك لفهم احتياجاتك — المساحة، نوع المحصول، الميزانية، الأهداف الإنتاجية — خلال جلسة استشارية مجانية (حضورية أو عن بُعد)."
        },
        {
            number: "02",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2d$ruler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__PencilRuler$3e$__["PencilRuler"],
            title: "تصميم مخصّص",
            description: "فريقنا الهندسي يُعدّ تصميماً تفصيلياً خاصاً بمشروعك: اختيار المنتج المناسب، دراسة جدوى مبدئية، وخطة تركيب واضحة."
        },
        {
            number: "03",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
            title: "تركيب وتشغيل",
            description: "نُنفّذ التركيب في موقعك بأيدي فنيين مدرّبين، ونُفعّل منظومة iGarden Cloud، ونُجري أول دورة تشغيل تجريبية لضمان الجودة."
        },
        {
            number: "04",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"],
            title: "متابعة ودعم",
            description: "علاقة طويلة المدى — مراقبة عن بُعد عبر السحابة، صيانة دورية، دعم فني مستمر، وتدريب فريقك عبر iGarden Knowledge."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-[var(--color-surface)] section-padding",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-igarden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center max-w-2xl mx-auto mb-14 md:mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "heading-eyebrow mb-4",
                            children: "كيف نعمل"
                        }, void 0, false, {
                            fileName: "[project]/igarden-web/src/components/sections/07-process.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "heading-section mb-6",
                            children: "من أول تواصل حتى حصادك الأول"
                        }, void 0, false, {
                            fileName: "[project]/igarden-web/src/components/sections/07-process.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-[var(--color-muted)] leading-relaxed",
                            children: "أربع مراحل واضحة — بلا مفاجآت، بلا تكاليف خفية."
                        }, void 0, false, {
                            fileName: "[project]/igarden-web/src/components/sections/07-process.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/igarden-web/src/components/sections/07-process.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: steps.map((step)=>{
                        const Icon = step.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative bg-white rounded-2xl p-6 md:p-7 border border-[var(--color-border)] h-full flex flex-col hover:border-[var(--color-accent-500)] transition-colors",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between mb-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-14 w-14 rounded-2xl bg-[var(--color-brand-600)] text-[var(--color-accent-300)] flex items-center justify-center shadow-[var(--shadow-soft)]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    className: "h-6 w-6"
                                                }, void 0, false, {
                                                    fileName: "[project]/igarden-web/src/components/sections/07-process.tsx",
                                                    lineNumber: 26,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/igarden-web/src/components/sections/07-process.tsx",
                                                lineNumber: 25,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-3xl font-extrabold text-[var(--color-brand-100)] leading-none",
                                                "data-num": true,
                                                children: step.number
                                            }, void 0, false, {
                                                fileName: "[project]/igarden-web/src/components/sections/07-process.tsx",
                                                lineNumber: 28,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/igarden-web/src/components/sections/07-process.tsx",
                                        lineNumber: 24,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg md:text-xl font-bold text-[var(--color-brand-600)] mb-3",
                                        children: step.title
                                    }, void 0, false, {
                                        fileName: "[project]/igarden-web/src/components/sections/07-process.tsx",
                                        lineNumber: 30,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-[var(--color-muted)] leading-relaxed",
                                        children: step.description
                                    }, void 0, false, {
                                        fileName: "[project]/igarden-web/src/components/sections/07-process.tsx",
                                        lineNumber: 31,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/igarden-web/src/components/sections/07-process.tsx",
                                lineNumber: 23,
                                columnNumber: 17
                            }, this)
                        }, step.number, false, {
                            fileName: "[project]/igarden-web/src/components/sections/07-process.tsx",
                            lineNumber: 22,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/igarden-web/src/components/sections/07-process.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/igarden-web/src/components/sections/07-process.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/igarden-web/src/components/sections/07-process.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/igarden-web/src/components/sections/08-sectors.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectorsSection",
    ()=>SectorsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/landmark.js [app-rsc] (ecmascript) <export default as Landmark>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/store.js [app-rsc] (ecmascript) <export default as Store>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-rsc] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-rsc] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-rsc] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$fade$2d$in$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/ui/fade-in.tsx [app-rsc] (ecmascript)");
;
;
;
;
function SectorsSection() {
    const sectors = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$landmark$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Landmark$3e$__["Landmark"],
            title: "القطاع الحكومي",
            description: "مشاريع الأمن الغذائي، البلديات، الوزارات، والمؤسسات التعليمية — حلول بمواصفات اعتمادية تلبّي أعلى المعايير.",
            useCases: [
                "أمن غذائي",
                "مشاريع توعوية",
                "حدائق مدرسية ذكية"
            ]
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"],
            title: "القطاع التجاري",
            description: "المزارع التجارية، الفنادق، المطاعم، وسلاسل التجزئة — إنتاج موثوق وسلسلة تبريد أقصر من المزرعة للطاولة.",
            useCases: [
                "مزارع عمودية",
                "إنتاج للفنادق",
                "سلاسل البيع"
            ]
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
            title: "القطاع الأكاديمي",
            description: "الجامعات ومراكز الأبحاث — مختبرات تجريبية، شراكات بحثية، وتطوير مناهج الزراعة الذكية للجيل القادم.",
            useCases: [
                "مختبرات بحثية",
                "شراكات علمية",
                "تدريب طلابي"
            ]
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
            title: "المستثمرون والشركاء",
            description: "فرص استثمار في منظومة AgriTech سعودية صاعدة ضمن رؤية 2030 — عوائد مستدامة وأثر بيئي قابل للقياس.",
            useCases: [
                "شراكات توسعية",
                "فرص استثمار",
                "امتيازات تجارية"
            ]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white section-padding",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-igarden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center max-w-2xl mx-auto mb-12 md:mb-14",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "heading-eyebrow mb-4",
                            children: "قطاعات نخدمها"
                        }, void 0, false, {
                            fileName: "[project]/igarden-web/src/components/sections/08-sectors.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "heading-section mb-6",
                            children: "حلول مُصمّمة لكل قطاع"
                        }, void 0, false, {
                            fileName: "[project]/igarden-web/src/components/sections/08-sectors.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-[var(--color-muted)] leading-relaxed",
                            children: "من المشاريع الحكومية الكبرى إلى الشركاء الأكاديميين والمستثمرين — نُصمّم الحل بما يناسب احتياجاتك."
                        }, void 0, false, {
                            fileName: "[project]/igarden-web/src/components/sections/08-sectors.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/igarden-web/src/components/sections/08-sectors.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6",
                    children: sectors.map((s, i)=>{
                        const Icon = s.icon;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$fade$2d$in$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FadeIn"], {
                            delay: i * 100,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group bg-[var(--color-surface)] rounded-2xl p-7 md:p-8 border border-transparent hover:border-[var(--color-brand-300)] hover:bg-white transition-all duration-300 h-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "shrink-0 h-14 w-14 rounded-2xl bg-[var(--color-brand-600)] text-[var(--color-accent-300)] flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                className: "h-6 w-6"
                                            }, void 0, false, {
                                                fileName: "[project]/igarden-web/src/components/sections/08-sectors.tsx",
                                                lineNumber: 28,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/igarden-web/src/components/sections/08-sectors.tsx",
                                            lineNumber: 27,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-[var(--color-brand-600)] mb-3",
                                                    children: s.title
                                                }, void 0, false, {
                                                    fileName: "[project]/igarden-web/src/components/sections/08-sectors.tsx",
                                                    lineNumber: 31,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm md:text-base text-[var(--color-muted)] leading-relaxed mb-5",
                                                    children: s.description
                                                }, void 0, false, {
                                                    fileName: "[project]/igarden-web/src/components/sections/08-sectors.tsx",
                                                    lineNumber: 32,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-2",
                                                    children: s.useCases.map((uc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-flex items-center px-3 py-1 rounded-full bg-white border border-[var(--color-border)] text-xs font-medium text-[var(--color-brand-600)]",
                                                            children: uc
                                                        }, uc, false, {
                                                            fileName: "[project]/igarden-web/src/components/sections/08-sectors.tsx",
                                                            lineNumber: 35,
                                                            columnNumber: 27
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/igarden-web/src/components/sections/08-sectors.tsx",
                                                    lineNumber: 33,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/igarden-web/src/components/sections/08-sectors.tsx",
                                            lineNumber: 30,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/igarden-web/src/components/sections/08-sectors.tsx",
                                    lineNumber: 26,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/igarden-web/src/components/sections/08-sectors.tsx",
                                lineNumber: 25,
                                columnNumber: 17
                            }, this)
                        }, s.title, false, {
                            fileName: "[project]/igarden-web/src/components/sections/08-sectors.tsx",
                            lineNumber: 24,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/igarden-web/src/components/sections/08-sectors.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mt-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/contact",
                        className: "inline-flex items-center gap-2 text-[var(--color-brand-600)] font-semibold hover:text-[var(--color-accent-600)] group",
                        children: [
                            "تحدّث معنا عن احتياجات قطاعك",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "h-4 w-4 rotate-180 group-hover:-translate-x-1 transition-transform"
                            }, void 0, false, {
                                fileName: "[project]/igarden-web/src/components/sections/08-sectors.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/igarden-web/src/components/sections/08-sectors.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/igarden-web/src/components/sections/08-sectors.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/igarden-web/src/components/sections/08-sectors.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/igarden-web/src/components/sections/08-sectors.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/igarden-web/src/components/sections/09-knowledge.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KnowledgeSection",
    ()=>KnowledgeSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/book-open.js [app-rsc] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/users.js [app-rsc] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/video.js [app-rsc] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-rsc] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$glow$2d$accent$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/ui/glow-accent.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$fade$2d$in$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/ui/fade-in.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
function KnowledgeSection() {
    const offerings = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
            title: "إرشاد فني",
            description: "فريق متخصص يرافقك في كل مرحلة — من أول نبتة حتى الحصاد الأول."
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
            title: "دورات تدريبية",
            description: "برامج عملية للمزارعين وفرق التشغيل — في مقرك أو في مراكزنا التدريبية."
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"],
            title: "محتوى تعليمي",
            description: "مكتبة متنامية من المقالات والفيديوهات لنشر ثقافة الزراعة الذكية محلياً."
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden bg-[var(--color-brand-600)] text-white section-padding",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "absolute inset-0 opacity-10 pointer-events-none",
                style: {
                    backgroundImage: "radial-gradient(circle at 90% 20%, var(--color-accent-500) 0%, transparent 50%), radial-gradient(circle at 10% 80%, var(--color-accent-300) 0%, transparent 40%)"
                }
            }, void 0, false, {
                fileName: "[project]/igarden-web/src/components/sections/09-knowledge.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$glow$2d$accent$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GlowAccent"], {
                position: "top-right",
                intensity: "medium",
                color: "lime"
            }, void 0, false, {
                fileName: "[project]/igarden-web/src/components/sections/09-knowledge.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-igarden relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "heading-eyebrow mb-4 text-[var(--color-accent-300)]",
                                    children: "iGarden Knowledge"
                                }, void 0, false, {
                                    fileName: "[project]/igarden-web/src/components/sections/09-knowledge.tsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 leading-tight",
                                    children: [
                                        "التقنية وحدها لا تكفي —",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/igarden-web/src/components/sections/09-knowledge.tsx",
                                            lineNumber: 23,
                                            columnNumber: 38
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[var(--color-accent-300)]",
                                            children: "المعرفة تصنع الفرق."
                                        }, void 0, false, {
                                            fileName: "[project]/igarden-web/src/components/sections/09-knowledge.tsx",
                                            lineNumber: 23,
                                            columnNumber: 44
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/igarden-web/src/components/sections/09-knowledge.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg text-white/85 leading-relaxed mb-8",
                                    children: [
                                        "نؤمن أن أفضل عتاد لا يحقق نتائجه ما لم يكن وراءه فريق يعرف كيف يُشغّله ويتطوّر به. لذلك جعلنا ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "المعرفة"
                                        }, void 0, false, {
                                            fileName: "[project]/igarden-web/src/components/sections/09-knowledge.tsx",
                                            lineNumber: 26,
                                            columnNumber: 109
                                        }, this),
                                        " ركيزة ثالثة أساسية في منظومتنا — بجانب العتاد والبرمجيات."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/igarden-web/src/components/sections/09-knowledge.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "accent",
                                            size: "lg",
                                            asChild: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/knowledge",
                                                children: [
                                                    "اكتشف برامجنا التدريبية",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                        className: "rotate-180"
                                                    }, void 0, false, {
                                                        fileName: "[project]/igarden-web/src/components/sections/09-knowledge.tsx",
                                                        lineNumber: 30,
                                                        columnNumber: 64
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/igarden-web/src/components/sections/09-knowledge.tsx",
                                                lineNumber: 30,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/igarden-web/src/components/sections/09-knowledge.tsx",
                                            lineNumber: 29,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "light",
                                            size: "lg",
                                            asChild: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/blog",
                                                children: "تصفّح المقالات"
                                            }, void 0, false, {
                                                fileName: "[project]/igarden-web/src/components/sections/09-knowledge.tsx",
                                                lineNumber: 33,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/igarden-web/src/components/sections/09-knowledge.tsx",
                                            lineNumber: 32,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/igarden-web/src/components/sections/09-knowledge.tsx",
                                    lineNumber: 28,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/igarden-web/src/components/sections/09-knowledge.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: offerings.map((o, i)=>{
                                const Icon = o.icon;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$fade$2d$in$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FadeIn"], {
                                    delay: i * 120,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-7 shadow-[0_8px_32px_rgba(0,0,0,0.1)] hover:bg-white/10 hover:border-white/20 transition-all duration-500",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "shrink-0 h-12 w-12 rounded-xl bg-[var(--color-accent-500)] text-[var(--color-brand-700)] flex items-center justify-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                        className: "h-6 w-6"
                                                    }, void 0, false, {
                                                        fileName: "[project]/igarden-web/src/components/sections/09-knowledge.tsx",
                                                        lineNumber: 45,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/igarden-web/src/components/sections/09-knowledge.tsx",
                                                    lineNumber: 44,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-lg md:text-xl font-bold text-white mb-2",
                                                            children: o.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/igarden-web/src/components/sections/09-knowledge.tsx",
                                                            lineNumber: 48,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm md:text-base text-white/75 leading-relaxed",
                                                            children: o.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/igarden-web/src/components/sections/09-knowledge.tsx",
                                                            lineNumber: 49,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/igarden-web/src/components/sections/09-knowledge.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/igarden-web/src/components/sections/09-knowledge.tsx",
                                            lineNumber: 43,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/igarden-web/src/components/sections/09-knowledge.tsx",
                                        lineNumber: 42,
                                        columnNumber: 19
                                    }, this)
                                }, o.title, false, {
                                    fileName: "[project]/igarden-web/src/components/sections/09-knowledge.tsx",
                                    lineNumber: 41,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/igarden-web/src/components/sections/09-knowledge.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/igarden-web/src/components/sections/09-knowledge.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/igarden-web/src/components/sections/09-knowledge.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/igarden-web/src/components/sections/09-knowledge.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/igarden-web/src/components/sections/09b-ewax.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EWAxSection",
    ()=>EWAxSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/leaf.js [app-rsc] (ecmascript) <export default as Leaf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/building-2.js [app-rsc] (ecmascript) <export default as Building2>");
;
;
function EWAxSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-[var(--color-surface)] border-y border-[var(--color-border)]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-igarden py-8 md:py-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-[var(--color-brand-600)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"], {
                                className: "h-5 w-5 text-[var(--color-accent-500)]"
                            }, void 0, false, {
                                fileName: "[project]/igarden-web/src/components/sections/09b-ewax.tsx",
                                lineNumber: 10,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-bold uppercase tracking-widest",
                                children: "EWAx"
                            }, void 0, false, {
                                fileName: "[project]/igarden-web/src/components/sections/09b-ewax.tsx",
                                lineNumber: 11,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/igarden-web/src/components/sections/09b-ewax.tsx",
                        lineNumber: 9,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm md:text-base text-[var(--color-muted)] leading-relaxed max-w-2xl",
                        children: [
                            "نُشارك أهداف",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--color-brand-600)] font-bold",
                                children: "EWAx"
                            }, void 0, false, {
                                fileName: "[project]/igarden-web/src/components/sections/09b-ewax.tsx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, this),
                            " ",
                            "و",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[var(--color-brand-600)] font-bold",
                                children: "وزارة البيئة والمياه والزراعة"
                            }, void 0, false, {
                                fileName: "[project]/igarden-web/src/components/sections/09b-ewax.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this),
                            " ",
                            "في بناء قطاع زراعي سعودي مستدام ومتقدّم تقنياً."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/igarden-web/src/components/sections/09b-ewax.tsx",
                        lineNumber: 15,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-[var(--color-brand-600)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-bold text-center leading-snug",
                                children: [
                                    "وزارة البيئة",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                        className: "hidden sm:block"
                                    }, void 0, false, {
                                        fileName: "[project]/igarden-web/src/components/sections/09b-ewax.tsx",
                                        lineNumber: 25,
                                        columnNumber: 86
                                    }, this),
                                    " والمياه"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/igarden-web/src/components/sections/09b-ewax.tsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                className: "h-5 w-5 text-[var(--color-accent-500)]"
                            }, void 0, false, {
                                fileName: "[project]/igarden-web/src/components/sections/09b-ewax.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/igarden-web/src/components/sections/09b-ewax.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/igarden-web/src/components/sections/09b-ewax.tsx",
                lineNumber: 7,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/igarden-web/src/components/sections/09b-ewax.tsx",
            lineNumber: 6,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/igarden-web/src/components/sections/09b-ewax.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
}),
"[project]/igarden-web/src/components/sections/10-final-cta.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FinalCtaSection",
    ()=>FinalCtaSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/leaf.js [app-rsc] (ecmascript) <export default as Leaf>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/phone.js [app-rsc] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/mail.js [app-rsc] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/lucide-react/dist/esm/icons/message-square.js [app-rsc] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$glow$2d$accent$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/ui/glow-accent.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/lib/constants.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
function FinalCtaSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative bg-[var(--color-surface)] py-10 sm:py-14 md:py-20 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": "true",
                className: "absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[var(--color-brand-600)]/10 to-transparent pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/igarden-web/src/components/sections/10-final-cta.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-igarden relative",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative overflow-hidden rounded-3xl bg-[var(--color-brand-600)] text-white",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "aria-hidden": true,
                            className: "absolute inset-0 opacity-20 pointer-events-none",
                            style: {
                                backgroundImage: "radial-gradient(circle at 90% 50%, var(--color-accent-500) 0%, transparent 50%), radial-gradient(circle at 10% 20%, var(--color-accent-300) 0%, transparent 40%)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/igarden-web/src/components/sections/10-final-cta.tsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$glow$2d$accent$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["GlowAccent"], {
                            position: "bottom-left",
                            intensity: "medium",
                            color: "accent"
                        }, void 0, false, {
                            fileName: "[project]/igarden-web/src/components/sections/10-final-cta.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative p-10 md:p-16 lg:p-20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-3xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$leaf$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Leaf$3e$__["Leaf"], {
                                        className: "h-10 w-10 text-[var(--color-accent-300)] mb-6"
                                    }, void 0, false, {
                                        fileName: "[project]/igarden-web/src/components/sections/10-final-cta.tsx",
                                        lineNumber: 23,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white leading-tight",
                                        children: [
                                            "جاهز لبدء رحلتك",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/igarden-web/src/components/sections/10-final-cta.tsx",
                                                lineNumber: 24,
                                                columnNumber: 119
                                            }, this),
                                            "في الزراعة الذكية؟"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/igarden-web/src/components/sections/10-final-cta.tsx",
                                        lineNumber: 24,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-white/85 leading-relaxed mb-10 max-w-2xl",
                                        children: "احجز استشارة مجانية مع فريقنا التقني — سنصمّم لك حلاً يناسب موقعك ومناخك وأهدافك الإنتاجية، خلال 72 ساعة من تواصلك."
                                    }, void 0, false, {
                                        fileName: "[project]/igarden-web/src/components/sections/10-final-cta.tsx",
                                        lineNumber: 25,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col sm:flex-row gap-4 mb-12",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "accent",
                                                size: "xl",
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/contact",
                                                    children: "احجز استشارتك المجانية"
                                                }, void 0, false, {
                                                    fileName: "[project]/igarden-web/src/components/sections/10-final-cta.tsx",
                                                    lineNumber: 27,
                                                    columnNumber: 60
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/igarden-web/src/components/sections/10-final-cta.tsx",
                                                lineNumber: 27,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "light",
                                                size: "xl",
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/products",
                                                    children: "تصفّح المنتجات"
                                                }, void 0, false, {
                                                    fileName: "[project]/igarden-web/src/components/sections/10-final-cta.tsx",
                                                    lineNumber: 28,
                                                    columnNumber: 59
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/igarden-web/src/components/sections/10-final-cta.tsx",
                                                lineNumber: 28,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/igarden-web/src/components/sections/10-final-cta.tsx",
                                        lineNumber: 26,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 border-t border-white/15",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CONTACT"].phoneE164}`,
                                                className: "flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-white/90 hover:bg-white/10 hover:border-white/20 transition-all duration-500 group",
                                                dir: "ltr",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-10 w-10 rounded-xl bg-white/10 group-hover:bg-[var(--color-accent-500)]/30 flex items-center justify-center transition-colors shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/igarden-web/src/components/sections/10-final-cta.tsx",
                                                            lineNumber: 33,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/igarden-web/src/components/sections/10-final-cta.tsx",
                                                        lineNumber: 32,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-white/60",
                                                                children: "اتصال مباشر"
                                                            }, void 0, false, {
                                                                fileName: "[project]/igarden-web/src/components/sections/10-final-cta.tsx",
                                                                lineNumber: 36,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold",
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CONTACT"].phone
                                                            }, void 0, false, {
                                                                fileName: "[project]/igarden-web/src/components/sections/10-final-cta.tsx",
                                                                lineNumber: 37,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/igarden-web/src/components/sections/10-final-cta.tsx",
                                                        lineNumber: 35,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/igarden-web/src/components/sections/10-final-cta.tsx",
                                                lineNumber: 31,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CONTACT"].email}`,
                                                className: "flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-white/90 hover:bg-white/10 hover:border-white/20 transition-all duration-500 group",
                                                dir: "ltr",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-10 w-10 rounded-xl bg-white/10 group-hover:bg-[var(--color-accent-500)]/30 flex items-center justify-center transition-colors shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/igarden-web/src/components/sections/10-final-cta.tsx",
                                                            lineNumber: 42,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/igarden-web/src/components/sections/10-final-cta.tsx",
                                                        lineNumber: 41,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-white/60",
                                                                children: "راسلنا"
                                                            }, void 0, false, {
                                                                fileName: "[project]/igarden-web/src/components/sections/10-final-cta.tsx",
                                                                lineNumber: 45,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold",
                                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CONTACT"].email
                                                            }, void 0, false, {
                                                                fileName: "[project]/igarden-web/src/components/sections/10-final-cta.tsx",
                                                                lineNumber: 46,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/igarden-web/src/components/sections/10-final-cta.tsx",
                                                        lineNumber: 44,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/igarden-web/src/components/sections/10-final-cta.tsx",
                                                lineNumber: 40,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CONTACT"].whatsapp,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-white/90 hover:bg-white/10 hover:border-white/20 transition-all duration-500 group",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-10 w-10 rounded-xl bg-white/10 group-hover:bg-[var(--color-accent-500)]/30 flex items-center justify-center transition-colors shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/igarden-web/src/components/sections/10-final-cta.tsx",
                                                            lineNumber: 51,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/igarden-web/src/components/sections/10-final-cta.tsx",
                                                        lineNumber: 50,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-white/60",
                                                                children: "واتساب"
                                                            }, void 0, false, {
                                                                fileName: "[project]/igarden-web/src/components/sections/10-final-cta.tsx",
                                                                lineNumber: 54,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-semibold",
                                                                children: "رد خلال ساعات العمل"
                                                            }, void 0, false, {
                                                                fileName: "[project]/igarden-web/src/components/sections/10-final-cta.tsx",
                                                                lineNumber: 55,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/igarden-web/src/components/sections/10-final-cta.tsx",
                                                        lineNumber: 53,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/igarden-web/src/components/sections/10-final-cta.tsx",
                                                lineNumber: 49,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/igarden-web/src/components/sections/10-final-cta.tsx",
                                        lineNumber: 30,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/igarden-web/src/components/sections/10-final-cta.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/igarden-web/src/components/sections/10-final-cta.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/igarden-web/src/components/sections/10-final-cta.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/igarden-web/src/components/sections/10-final-cta.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/igarden-web/src/components/sections/10-final-cta.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/igarden-web/src/components/sections/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$01$2d$hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/sections/01-hero.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$02$2d$trust$2d$bar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/sections/02-trust-bar.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$02b$2d$achievements$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/sections/02b-achievements.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$03$2d$problem$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/sections/03-problem.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$04$2d$solution$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/sections/04-solution.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$05$2d$products$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/sections/05-products.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$06$2d$impact$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/sections/06-impact.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$07$2d$process$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/sections/07-process.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$08$2d$sectors$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/sections/08-sectors.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$09$2d$knowledge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/sections/09-knowledge.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$09b$2d$ewax$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/sections/09b-ewax.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$10$2d$final$2d$cta$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/sections/10-final-cta.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/igarden-web/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/igarden-web/src/components/sections/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$01$2d$hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/sections/01-hero.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$02$2d$trust$2d$bar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/sections/02-trust-bar.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$02b$2d$achievements$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/sections/02b-achievements.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$03$2d$problem$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/sections/03-problem.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$04$2d$solution$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/sections/04-solution.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$05$2d$products$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/sections/05-products.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$06$2d$impact$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/sections/06-impact.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$07$2d$process$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/sections/07-process.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$08$2d$sectors$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/sections/08-sectors.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$09$2d$knowledge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/sections/09-knowledge.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$09b$2d$ewax$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/sections/09b-ewax.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$10$2d$final$2d$cta$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/igarden-web/src/components/sections/10-final-cta.tsx [app-rsc] (ecmascript)");
;
;
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$01$2d$hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HeroSection"], {}, void 0, false, {
                fileName: "[project]/igarden-web/src/app/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$02$2d$trust$2d$bar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TrustBarSection"], {}, void 0, false, {
                fileName: "[project]/igarden-web/src/app/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$02b$2d$achievements$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AchievementsSection"], {}, void 0, false, {
                fileName: "[project]/igarden-web/src/app/page.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$03$2d$problem$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProblemSection"], {}, void 0, false, {
                fileName: "[project]/igarden-web/src/app/page.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$04$2d$solution$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SolutionSection"], {}, void 0, false, {
                fileName: "[project]/igarden-web/src/app/page.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$05$2d$products$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductsSection"], {}, void 0, false, {
                fileName: "[project]/igarden-web/src/app/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$06$2d$impact$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ImpactSection"], {}, void 0, false, {
                fileName: "[project]/igarden-web/src/app/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$07$2d$process$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProcessSection"], {}, void 0, false, {
                fileName: "[project]/igarden-web/src/app/page.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$08$2d$sectors$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SectorsSection"], {}, void 0, false, {
                fileName: "[project]/igarden-web/src/app/page.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$09$2d$knowledge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["KnowledgeSection"], {}, void 0, false, {
                fileName: "[project]/igarden-web/src/app/page.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$09b$2d$ewax$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EWAxSection"], {}, void 0, false, {
                fileName: "[project]/igarden-web/src/app/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$igarden$2d$web$2f$src$2f$components$2f$sections$2f$10$2d$final$2d$cta$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FinalCtaSection"], {}, void 0, false, {
                fileName: "[project]/igarden-web/src/app/page.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/igarden-web/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/igarden-web/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0trs8jb._.js.map