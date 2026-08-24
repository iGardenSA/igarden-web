/**
 * iGarden — الثوابت الرسمية
 * المرجع الوحيد لأي رقم/معلومة تظهر في الواجهة.
 * ⚠️ أي تعديل يتطلب موافقة مدير التسويق.
 */

export const COMPANY = {
  nameEn: "iGarden",
  nameAr: "الحديقة الذكية",
  legalAr: "شركة انتيليجنت غاردن",
  legalFull: "شركة انتيليجنت غاردن (ذات مسؤولية محدودة)",
  legalEn: "Intelligent Garden Company",
  domain: "igarden.sa",
  shopDomain: "shop.igarden.sa",
  hq: "جدة، المملكة العربية السعودية",
  hqEn: "Jeddah, Saudi Arabia",
  founded: 2024,
  launched: 2026,
  tagline: "ازرع بذكاء",
  legalEntity: "شركة ذات مسؤولية محدودة",
} as const;

export const CONTACT = {
  email: "info@igarden.sa",
  phone: "+966 57 034 0500",
  phoneE164: "+966570340500",
  whatsapp: "https://wa.me/966570340500",
  website: "https://igarden.sa",
  shop: "https://shop.igarden.sa",
} as const;

/**
 * @deprecated أرقام تاريخية من عروض سابقة، غير معتمدة للنشر العام حتى توثيق
 * مصدرها ونطاقها. ✓ مُتحقَّق 2026-08-24: صفر مستهلك خارج هذا الملف — لا تُصيَّر
 * علناً. ⛔ لا تُستورَد في أي مكوّن عام قبل إسناد كل رقم إلى قياس موثّق.
 */
export const STATS = {
  waterSavingsMax: { value: 95, unit: "%", label: "كفاءة مائية (مرجع داخلي — لا يُعرض مباشرةً)" },
  waterSavingsAero: { value: 60, unit: "%", label: "كفاءة مياه في Aeroponic (مرجع داخلي)" },
  fertilizerReduction: { value: 50, unit: "%", label: "خفض في استهلاك الأسمدة" },
  opexReduction: { value: 60, unit: "%", label: "خفض تكاليف التشغيل" },
  productivity: { value: 3, unit: "x", label: "زيادة في الإنتاجية" },
  energyEfficiency: { value: 40, unit: "%", label: "كفاءة طاقة في البيوت المحمية" },
  waterRecycle: { value: 90, unit: "%", label: "إعادة تدوير المياه في Aquaponics" },
  climateTolerance: { value: 45, unit: "°C+", label: "التحمل المناخي" },
} as const;

/**
 * @deprecated Legacy — لا تمثّل التموضع الحالي («منظومات زراعية متكاملة» ·
 * «ازرع بذكاء»). ✓ مُتحقَّق 2026-08-24: صفر مستهلك. تُترك للسجلّ التاريخي.
 * ⛔ لا تُستعمل في Hero ولا في أي سطح عام.
 */
export const KEY_MESSAGES = {
  hero: "مستقبل الزراعة بين يديك",
  competitive: "تكامل 3 في 1: عتاد + برمجيات + معرفة",
  localization: "مصمم محلياً لمناخ المملكة",
  trust: "استدامة مالية وبيئية قابلة للقياس",
} as const;

/**
 * الأسماء الرسمية للمنتجات. ✓ مُتحقَّق 2026-08-24: صفر مستهلك عام.
 * الأوصاف أُعيدت صياغتها إلى وصف قدرة/نطاق بلا نتيجة مطلقة.
 * ⛔ الأسماء الرسمية ورقم SAIP الخاص بـiGarden Tower لا يُغيَّران.
 */
export const PRODUCTS = {
  tower: {
    nameEn: "iGarden Tower",
    nameAr: "البرج الزراعي الذكي",
    industrialModel: "423450193",
    category: "HARDWARE",
    description:
      "البرج الزراعي الذكي — نموذج صناعي مسجل، يجمع Aeroponics مع إمكانية دمج القياس والتحكم بحسب نطاق المشروع.",
  },
  greenhouse: {
    nameEn: "Smart Greenhouses",
    nameAr: "البيوت المحمية الذكية",
    category: "HARDWARE",
    description: "بيوت محمية يُصمَّم فيها التحكم المناخي والأتمتة بحسب نطاق المشروع، بهدف ترشيد التشغيل.",
  },
  aquaponics: {
    nameEn: "Aquaponics Systems",
    nameAr: "أنظمة الاستزراع السمكي المتكاملة",
    category: "HARDWARE",
    description: "تكامل بين الزراعة والاستزراع السمكي في دورة مغلقة تُصمَّم وفق احتياج المشروع.",
  },
  aeroponics: {
    nameEn: "Aeroponics",
    nameAr: "الزراعة الهوائية",
    category: "HARDWARE",
    description: "تقنية الزراعة الهوائية — تعتمد إعادة تدوير المحلول، ويُحدَّد نطاقها وفق المشروع.",
  },
  cloud: {
    nameEn: "iGarden Cloud Platform",
    nameAr: "منصة iGarden السحابية",
    category: "SOFTWARE",
    description: "منصة تحكم سحابية لإدارة المزرعة عن بُعد — قياس وتنبيهات وفق التجهيز المتاح ونطاق المشروع.",
  },
  knowledge: {
    nameEn: "iGarden Knowledge",
    nameAr: "iGarden للإرشاد والتدريب",
    category: "KNOWLEDGE",
    description: "برامج تدريب وإرشاد فني للمزارعين والشركاء.",
  },
} as const;

export const SOCIAL = {
  linkedin: "https://linkedin.com/company/igarden-sa",
  instagram: "https://instagram.com/igarden.sa",
  twitter: "https://x.com/igarden_sa",
  youtube: "https://youtube.com/@igarden",
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Navigation System — v2 (Wave 1C)
// المرجع: docs/SITE-ARCHITECTURE.md
// ⚠ NAV_MAIN القديمة حُذفت: كانت كوداً ميّتاً (صفر مستهلك) وتحمل
//   /roadmap و/investors، وكلاهما خارج التنقّل العام بقرار محسوم.
// ─────────────────────────────────────────────────────────────────────────────

/** رسالة واتساب مسبقة عامّة — تُشير إلى أن الزائر وصل من الموقع. */
export const WHATSAPP_PREFILL = "مرحباً iGarden، وصلت من الموقع وأودّ الاستفسار عن حلولكم.";

/** رابط واتساب الجاهز — يُبنى من CONTACT.whatsapp، بلا رقم مكتوب يدوياً. */
export const WHATSAPP_HREF = `${CONTACT.whatsapp}?text=${encodeURIComponent(WHATSAPP_PREFILL)}`;

export const DEMO_URL = "https://demo.igarden.sa";
export const SHOP_URL = "https://shop.igarden.sa";

// ─── Utility Bar — سطح المكتب فقط · ثلاثة روابط · غير sticky ─────────────────

export type UtilityIconName = "monitor" | "shopping-bag" | "home";

export type UtilityItem = {
  label: string;
  icon: UtilityIconName;
  href: string;
  external?: boolean;
  badge?: "live" | "soon";
};

export const UTILITY_ITEMS: UtilityItem[] = [
  { label: "Smart OS Demo", icon: "monitor", href: DEMO_URL, external: true, badge: "live" },
  { label: "المتجر", icon: "shopping-bag", href: SHOP_URL, external: true },
  { label: "للأفراد", icon: "home", href: "/home-solutions" },
];

// ─── Mega Menu — مساران + أربعة أعمدة + شريط سفلي ────────────────────────────

export type NavColumnItem = {
  label: string;
  href: string;
  external?: boolean;
  badge?: "live";
};

export type NavColumn = {
  title: string;
  icon: "sprout" | "cpu" | "monitor-cog" | "sun";
  items: NavColumnItem[];
};

/** مساران أعلى القائمة — مرساتان مُتحقَّقتان على الإنتاج. */
export const MEGA_PATHS: NavColumnItem[] = [
  { label: "مشروع جديد", href: "/how-we-work#new-project" },
  { label: "منشأة قائمة", href: "/how-we-work#existing-facility" },
];

export const MEGA_COLUMNS: NavColumn[] = [
  {
    title: "أنظمة الإنتاج",
    icon: "sprout",
    items: [
      { label: "المحميات الزراعية", href: "/products/smart-greenhouses" },
      { label: "أنظمة الزراعة المائية", href: "/products/hydroponics" },
      { label: "الحلول المتخصصة", href: "/products#specialized" },
    ],
  },
  {
    title: "التحكم والأتمتة",
    icon: "cpu",
    items: [
      { label: "Smart Controllers", href: "/products/smart-controllers" },
      { label: "القياس وإنترنت الأشياء", href: "/products/iot" },
    ],
  },
  {
    title: "رقمنة تشغيل المزرعة",
    icon: "monitor-cog",
    items: [
      { label: "Smart OS — لوحة تشغيل المزرعة", href: "/products/smart-os" },
      { label: "Demo مباشر", href: DEMO_URL, external: true, badge: "live" },
      { label: "السجلات وجاهزية الامتثال", href: "/compliance" },
    ],
  },
  {
    title: "الاستدامة وكفاءة التشغيل",
    icon: "sun",
    items: [
      // ملاحظة: قيمة cta واحدة معتمدة؛ التفريق في topic ويُحفظ ضمن source_url.
      { label: "الطاقة الشمسية المساندة", href: "/contact?cta=sustainability_solutions&topic=solar_support" },
      { label: "كفاءة المياه والطاقة", href: "/contact?cta=sustainability_solutions&topic=water_energy_efficiency" },
    ],
  },
];

export const MEGA_FOOTER: NavColumnItem[] = [
  { label: "استعرض كل الحلول", href: "/products" },
  { label: "كيف نعمل", href: "/how-we-work" },
  { label: "Demo مباشر", href: DEMO_URL, external: true, badge: "live" },
];

// ─── التنقّل الرئيسي ─────────────────────────────────────────────────────────

export type NavItemMega = {
  label: string;
  href: string;
  hasMegaMenu: true;
};

export type NavItemSimple = {
  label: string;
  href: string;
  hasMegaMenu?: never;
};

export type NavItemType = NavItemMega | NavItemSimple;

export const HEADER_NAV_ITEMS: NavItemType[] = [
  { label: "الحلول", href: "/products", hasMegaMenu: true },
  { label: "كيف نعمل", href: "/how-we-work" },
  { label: "مرفق عسفان", href: "/osfan-station" },
  { label: "المعرفة", href: "/learn" },
  { label: "عن iGarden", href: "/about" },
];

// ─── CTA الأساسي ─────────────────────────────────────────────────────────────

export const MAIN_CTA = {
  label: "ابدأ مشروعك",
  href: "/contact?cta=readiness_assessment",
} as const;
