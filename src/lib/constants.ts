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
 * الأرقام الرسمية — تُستخدم كما هي دون تعديل.
 */
export const STATS = {
  waterSavingsMax: { value: 95, unit: "%", label: "توفير في استهلاك المياه" },
  waterSavingsAero: { value: 60, unit: "%", label: "توفير مياه في Aeroponic" },
  fertilizerReduction: { value: 50, unit: "%", label: "خفض في استهلاك الأسمدة" },
  opexReduction: { value: 60, unit: "%", label: "خفض تكاليف التشغيل" },
  productivity: { value: 3, unit: "x", label: "زيادة في الإنتاجية" },
  energyEfficiency: { value: 40, unit: "%", label: "كفاءة طاقة في البيوت المحمية" },
  waterRecycle: { value: 90, unit: "%", label: "إعادة تدوير المياه في Aquaponics" },
  climateTolerance: { value: 45, unit: "°C+", label: "التحمل المناخي" },
} as const;

/**
 * الرسائل الرئيسية — لا يُسمح بتعديل الصياغة.
 */
export const KEY_MESSAGES = {
  hero: "مستقبل الزراعة بين يديك",
  competitive: "تكامل 3 في 1: عتاد + برمجيات + معرفة",
  localization: "مصمم محلياً لمناخ المملكة",
  trust: "استدامة مالية وبيئية قابلة للقياس",
} as const;

/**
 * خدماتنا والخدمات — الأسماء الرسمية.
 */
export const PRODUCTS = {
  tower: {
    nameEn: "iGarden Tower",
    nameAr: "البرج الزراعي الذكي",
    industrialModel: "423450193",
    category: "HARDWARE",
    description:
      "البرج الزراعي الذكي — نموذج صناعي مسجل، يجمع Aeroponics مع تحكم IoT كامل.",
  },
  greenhouse: {
    nameEn: "Smart Greenhouses",
    nameAr: "البيوت المحمية الذكية",
    category: "HARDWARE",
    description: "بيوت محمية مؤتمتة مع تحكم مناخي دقيق وكفاءة طاقة 40%.",
  },
  aquaponics: {
    nameEn: "Aquaponics Systems",
    nameAr: "أنظمة الاستزراع السمكي المتكاملة",
    category: "HARDWARE",
    description: "تكامل بين الزراعة والاستزراع السمكي مع 90% إعادة تدوير للمياه.",
  },
  aeroponics: {
    nameEn: "Aeroponics",
    nameAr: "الزراعة الهوائية",
    category: "HARDWARE",
    description: "تقنية الزراعة الهوائية بتوفير مياه يصل إلى 95%.",
  },
  cloud: {
    nameEn: "iGarden Cloud Platform",
    nameAr: "منصة iGarden السحابية",
    category: "SOFTWARE",
    description: "منصة تحكم سحابية مركزية لإدارة المزرعة من أي مكان مع تنبيهات لحظية.",
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

export const NAV_MAIN = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "من نحن" },
  { href: "/products", label: "خدماتنا" },
  { href: "/roadmap", label: "خارطة الطريق" },
  { href: "/investors", label: "المستثمرون" },
  { href: "/contact", label: "تواصل معنا" },
] as const;

// ─────────────────────────────────────────────────────────────────────────────
// Wave 2A — Navigation System Types + Constants
// ─────────────────────────────────────────────────────────────────────────────

export type TopBarIconName = "globe" | "monitor" | "shopping-bag" | "smartphone";

export type TopBarItem = {
  label: string;
  icon: TopBarIconName;
  href: string;
  external?: boolean;
  active?: boolean;
  badge?: "live" | "soon";
};

export type NavColumnItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavColumn = {
  title: string;
  icon: "tractor" | "cpu" | "leaf";
  items: NavColumnItem[];
  cta?: {
    label: string;
    href: string;
    external?: boolean;
    variant: "live" | "shop" | "default";
  };
};

export type NavItemMega = {
  label: string;
  href: string;
  hasMegaMenu: true;
  megaMenuColumns: NavColumn[];
};

export type NavItemSimple = {
  label: string;
  href: string;
  hasMegaMenu?: never;
  megaMenuColumns?: never;
};

export type NavItemType = NavItemMega | NavItemSimple;

// ─── Top Bar — المنظومة الموحّدة ─────────────────────────────────────────────

export const TOP_BAR_ITEMS: TopBarItem[] = [
  { label: "الموقع", icon: "globe", href: "/", active: true },
  {
    label: "Demo",
    icon: "monitor",
    href: "https://demo.igarden.sa",
    external: true,
    badge: "live",
  },
  {
    label: "المتجر",
    icon: "shopping-bag",
    href: "https://shop.igarden.sa",
    external: true,
  },
  { label: "احجز التطبيق", icon: "smartphone", href: "/app", badge: "soon" },
];

// ─── Main Navigation — 5 عناصر ───────────────────────────────────────────────

export const HEADER_NAV_ITEMS: NavItemType[] = [
  {
    label: "الحلول",
    href: "/solutions",
    hasMegaMenu: true,
    megaMenuColumns: [
      {
        title: "للمزارع التجارية",
        icon: "tractor",
        items: [
          { label: "أنظمة الري والتحكم الذكي", href: "/solutions/farms" },
          { label: "البيوت المحمية والـ Hydroponics", href: "/solutions/greenhouses" },
        ],
      },
      {
        title: "منصة Smart OS",
        icon: "cpu",
        items: [
          { label: "منصة الإدارة الموحّدة", href: "/solutions/smart-os" },
          { label: "تقارير الامتثال", href: "/compliance" },
        ],
        cta: {
          label: "Live Demo",
          href: "https://demo.igarden.sa",
          external: true,
          variant: "live",
        },
      },
      {
        title: "للحديقة المنزلية",
        icon: "leaf",
        items: [
          { label: "البرج الهوائي iGarden Tower", href: "https://shop.igarden.sa", external: true },
          { label: "مستلزمات الزراعة", href: "https://shop.igarden.sa", external: true },
        ],
        cta: {
          label: "تسوّق المتجر",
          href: "https://shop.igarden.sa",
          external: true,
          variant: "shop",
        },
      },
    ],
  },
  { label: "محطة عسفان", href: "/osfan-station" },
  { label: "كيف نعمل", href: "/about" },
  { label: "المعرفة", href: "/learn" },
  { label: "للمستثمرين", href: "/investors" },
];

// ─── Main CTA ─────────────────────────────────────────────────────────────────

export const MAIN_CTA = {
  label: "تحدّث معنا",
  href: "/contact",
} as const;
