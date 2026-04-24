# iGarden — ClaudeCode Brief v2

> **Brief تنفيذي مكتفٍ ذاتياً لإعادة بناء igarden.sa**
> الإصدار: 2.0 · 25 أبريل 2026
> المرجع الأعلى: Master Doc v1.4 + استراتيجية الموقع v3
> المُعِدّ: علي محمد غنيمة (CEO) — للتنفيذ على Claude Code

---

## فهرس المحتويات

1. [السياق والقواعد المُلزمة](#1-السياق-والقواعد-المُلزمة)
2. [Tech Stack وهيكل المجلدات](#2-tech-stack-وهيكل-المجلدات)
3. [Design System — جاهز للصق](#3-design-system--جاهز-للصق)
4. [Navigation و Footer](#4-navigation-و-footer)
5. [Homepage — 12 قسم](#5-homepage--12-قسم)
6. [صفحات الركائز الثلاث](#6-صفحات-الركائز-الثلاث)
7. [/osfan-station و /about](#7-osfan-station-و-about)
8. [SEO Stack الكامل](#8-seo-stack-الكامل)
9. [Definition of Done](#9-definition-of-done)
10. [الممنوعات المطلقة](#10-الممنوعات-المطلقة)
11. [قائمة [CONTENT_NEEDED] — للمؤسس](#11-قائمة-content_needed--للمؤسس)

---

## 1. السياق والقواعد المُلزمة

### 1.1 الجوهر

iGarden هي **العلامة التجارية** لشركة **انتيليجنت غاردن (ذات مسؤولية محدودة)** — شركة سعودية مُرخَّصة فبراير 2026. التموضع المعتمد:

> **«ننفّذ · نُوطّن · نُطوّر — أنظمة الزراعة الذكية»**

iGarden ليست شركة AI. الذكاء الاصطناعي **أداة داخل المنتج**، لا التموضع. الموقع الحالي مبني على تموضع «AI First» المُلغى — يجب إعادة بناء **المحتوى والبنية** فقط، مع **حفظ البنية التقنية**.

### 1.2 ما لا يُلمس (BLOCKED)

- البنية التقنية: Next.js 16.2.4 + React 19.2.5 + TypeScript
- Vercel Pro (مدفوع + SSL + CDN)
- Supabase SSR + CRM (جدولا `leads` + `lead_interactions` + RLS)
- Google Workspace (info@igarden.sa)
- DNS + MX + SPF + DKIM
- Tailwind v4 + shadcn/ui + خطوط Tajawal/Poppins
- demo.igarden.sa (subdomain منفصل — لا يتأثر)
- Smart OS Backend على Raspberry Pi (208 unit tests)

### 1.3 ما يُعاد بناؤه

- **Homepage** كاملاً (12 قسم بالهيكل الجديد)
- **Top Navigation** + **Footer**
- **/products** (من 9 حلول مسطّحة → 3 ركائز)
- **/about** (إبراز منهج «ننفّذ · نُوطّن · نُطوّر»)

### 1.4 ما يُضاف جديداً

- `/products/smart-controllers` — صفحة Flagship
- `/products/smart-greenhouses` — صفحة ركيزة
- `/products/hydroponics` — صفحة ركيزة (تضمّ iGarden Tower داخلها)
- `/osfan-station` — صفحة محطّة عسفان
- SEO Stack كامل: `metadata`, `sitemap.ts`, `robots.ts`, OG Images, Schema.org JSON-LD
- Favicons set كامل من `/public/favicons/`

### 1.5 الأرقام الرسمية المعتمدة (لا تعديل)

| الرقم | المعنى | الاستخدام |
|---|---|---|
| **95%** | توفير المياه | Stats Strip + Hero أحياناً |
| **3x** | الإنتاجية | Stats Strip |
| **+45°C** | تحمّل المناخ | Stats Strip + Greenhouses + Controllers |
| **208** | unit tests على Smart OS | Trust Bar + Smart OS Demo |
| **5** | ورش عمل «ازرع بذكاء» | Stats Strip + Osfan Section |
| **24926249716** | رقم سجل MISA | Trust Bar + Footer |
| **#423450193** | رقم تسجيل النموذج الصناعي SAIP لـ iGarden Tower | Trust Bar + Hydroponics page |

### 1.6 اسم الشركة في النصوص

- **iGarden** دائماً لاتيني — لا تُكتب «آي جاردن»
- داخل النص العربي: `<span dir="ltr">iGarden</span>`
- الاسم القانوني: **شركة انتيليجنت غاردن (ذات مسؤولية محدودة)** — يُذكر في Footer + /about + Legal فقط
- الاسم العربي للعلامة: **«الحديقة الذكية»** — استخدام جانبي/ثانوي

### 1.7 Tagline الرسمي

**«ازرع بذكاء · Plant Smart»** — يظهر:
- في Footer
- في صفحة /about
- في OG Images
- (اختياري) شريط أعلى Hero

❌ Tagline القديم «مستقبل الزراعة بين يديك» **لا يُستخدم** كرئيسي — صياغة ثانوية فقط.

---

## 2. Tech Stack وهيكل المجلدات

### 2.1 Tech Stack المعتمد

```
Frontend:  Next.js 16.2.4 (App Router)
           React 19.2.5
           TypeScript (strict mode)
           Tailwind CSS v4 (@theme block)
           shadcn/ui

Backend:   Supabase (Frankfurt EU)
           - Postgres + Auth + RLS
           - جدول leads + lead_interactions
           - View leads_stats

Deploy:    Vercel Pro
           - Edge Network + SSL تلقائي
           - Production: igarden.sa

Fonts:     Tajawal (Google Fonts) — عربي
           Poppins (Google Fonts) — لاتيني

❌ Sanity.io محذوف نهائياً (28 ثغرة أمنية حُلّت بحذفه)
❌ localStorage / sessionStorage ممنوع في أي artifact
```

### 2.2 هيكل المجلدات المتوقع بعد إعادة البناء

```
igarden-web/
├── app/
│   ├── layout.tsx                    [يُعاد كتابته جزئياً — Metadata + favicons]
│   ├── page.tsx                      [يُعاد كتابته كاملاً — 12 sections]
│   ├── about/
│   │   └── page.tsx                  [يُعاد كتابته]
│   ├── contact/
│   │   └── page.tsx                  [يبقى كما هو — Supabase form شغّال]
│   ├── products/
│   │   ├── page.tsx                  [يُعاد كتابته — 3 ركائز]
│   │   ├── smart-controllers/
│   │   │   └── page.tsx              [جديد]
│   │   ├── smart-greenhouses/
│   │   │   └── page.tsx              [جديد]
│   │   └── hydroponics/
│   │       └── page.tsx              [جديد — يضمّ iGarden Tower]
│   ├── osfan-station/
│   │   └── page.tsx                  [جديد]
│   ├── learn/                        [P2 — placeholder صفحة "قريباً"]
│   ├── blog/                         [P2 — placeholder]
│   ├── sitemap.ts                    [جديد]
│   ├── robots.ts                     [جديد]
│   └── globals.css                   [يُحدَّث — @theme block جديد]
│
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx            [جديد]
│   │   └── Footer.tsx                [جديد]
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── TrustBar.tsx
│   │   ├── MethodologySection.tsx
│   │   ├── ThreePillarsSection.tsx
│   │   ├── ComplementaryProducts.tsx
│   │   ├── OsfanStationPreview.tsx
│   │   ├── SmartOSDemoSection.tsx
│   │   ├── StatsStrip.tsx
│   │   ├── HowWeWork.tsx
│   │   ├── KnowledgeSection.tsx
│   │   └── FinalCTA.tsx
│   ├── product-pages/
│   │   ├── ProductHero.tsx
│   │   ├── ProductValues.tsx
│   │   ├── ProductTechSpecs.tsx
│   │   ├── ProductFAQ.tsx
│   │   └── ProductScalesSection.tsx  [قسم «بكل الأحجام»]
│   ├── ui/                           [shadcn/ui components — موجود]
│   └── shared/
│       ├── BilingualText.tsx         [يُغلّف iGarden بـ dir="ltr"]
│       ├── CTAButton.tsx
│       └── SchemaJsonLd.tsx          [يحقن JSON-LD]
│
├── lib/
│   ├── supabase/                     [موجود — لا يُلمس]
│   ├── seo/
│   │   ├── metadata.ts               [generators للـ Metadata]
│   │   └── schema.ts                 [JSON-LD builders]
│   └── utils.ts
│
├── public/
│   ├── favicons/                     [انسخ من Brand Pack /favicons/]
│   ├── logo/
│   │   ├── lockup-horizontal-en.svg  [من Brand Pack]
│   │   ├── lockup-horizontal-ar.svg
│   │   ├── icon-only.svg
│   │   └── icon-master-original.png
│   ├── images/
│   │   ├── osfan/                    [15 صورة من المحطة — ALT بالعربية]
│   │   ├── products/
│   │   │   ├── smart-controllers/
│   │   │   ├── smart-greenhouses/
│   │   │   └── hydroponics/
│   │   └── og/                       [OG images 1200x630 لكل صفحة]
│   └── site.webmanifest              [من Brand Pack /favicons/]
│
└── content/                          [اختياري — لو فُضّل فصل المحتوى]
    ├── homepage.ts
    └── products/*.ts
```

### 2.3 ملاحظات تقنية حرجة

- **RTL:** الموقع كامل بالعربية. `<html dir="rtl" lang="ar">` في `app/layout.tsx`
- **Mixed-direction text:** كل ذكر لـ "iGarden" أو مصطلحات لاتينية داخل نص عربي يُغلَّف بـ `<span dir="ltr">iGarden</span>` — يُفضَّل عبر `<BilingualText>` component موحَّد
- **Mobile-first:** كل قسم يُختبر على 375px قبل Desktop
- **خطوط:** عبر `next/font` لتحميل Tajawal + Poppins بأقل overhead
- **Images:** كل الصور عبر `next/image` مع `alt` عربي وصفي + `priority` للـ Hero فقط

---

## 3. Design System — جاهز للصق

### 3.1 globals.css — كامل

```css
/* app/globals.css */

@import "tailwindcss";

@theme {
  /* ----- Brand colors ----- */
  --color-deep-green:   #0F3D2E;
  --color-corp-green:   #1B5E3F;
  --color-lime:         #7CB342;
  --color-bright-lime:  #A5D63F;
  --color-cream:        #FAFAF7;

  /* ----- Text ----- */
  --color-dark-text:    #1A1A1A;
  --color-medium-gray:  #6B7280;
  --color-light-gray:   #E5E7EB;

  /* ----- Functional ----- */
  --color-success:      #2E7D3F;
  --color-warning:      #F59E0B;
  --color-danger:       #DC2626;
  --color-info:         #2563EB;

  /* ----- Fonts ----- */
  --font-arabic: "Tajawal", "IBM Plex Sans Arabic", system-ui, sans-serif;
  --font-latin:  "Poppins", "Inter", system-ui, sans-serif;

  /* ----- Radius ----- */
  --radius-sm:     6px;
  --radius-button: 8px;
  --radius-card:   12px;
  --radius-xl:     16px;
  --radius-pill:   9999px;

  /* ----- Shadow ----- */
  --shadow-sm: 0 1px 3px rgba(15, 61, 46, 0.06);
  --shadow-md: 0 2px 8px rgba(15, 61, 46, 0.08);
  --shadow-lg: 0 8px 24px rgba(15, 61, 46, 0.12);
}

/* ----- Base styles ----- */
:root {
  font-family: var(--font-arabic);
  background: var(--color-cream);
  color: var(--color-dark-text);
}

html[dir="rtl"] {
  text-align: right;
}

body {
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  line-height: 1.7;
}

/* ----- Mixed-direction utility ----- */
.ltr-inline {
  direction: ltr;
  unicode-bidi: isolate;
}

/* ----- Type scale (Master Doc §2.6) ----- */
.h1 { font-size: 3rem;     line-height: 1.2;  font-weight: 700; }
.h2 { font-size: 2.25rem;  line-height: 1.25; font-weight: 700; }
.h3 { font-size: 1.5rem;   line-height: 1.35; font-weight: 500; }
.h4 { font-size: 1.25rem;  line-height: 1.4;  font-weight: 500; }
.body-base { font-size: 1rem;     line-height: 1.7;  font-weight: 400; }
.body-sm   { font-size: 0.875rem; line-height: 1.6;  font-weight: 400; }
.caption   { font-size: 0.75rem;  letter-spacing: 0.02em; }
.stat-num  { font-size: 3.5rem; line-height: 1; font-weight: 700;
             font-family: var(--font-latin); color: var(--color-lime); }

/* ----- 60-30-10 helpers ----- */
.section-light { background: var(--color-cream); color: var(--color-dark-text); }
.section-dark  { background: var(--color-deep-green); color: var(--color-cream); }
.section-accent { background: var(--color-lime); color: white; }
```

### 3.2 next/font setup

```tsx
// app/layout.tsx — قسم خطوط فقط
import { Tajawal, Poppins } from "next/font/google";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700"],
  variable: "--font-tajawal",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// في <html>:
// className={`${tajawal.variable} ${poppins.variable}`}
```

### 3.3 Tailwind classes الجاهزة (مرجع سريع)

```
الخلفيات:
  bg-cream            → الخلفية الافتراضية
  bg-deep-green       → Nav, Footer, Stats Strip, Hero alternates
  bg-lime             → CTA buttons, badges
  bg-corp-green       → Cards على dark sections

النصوص:
  text-deep-green     → عناوين على cream
  text-cream          → نصوص على dark sections
  text-lime           → أرقام إحصائية + accents
  text-medium-gray    → نص ثانوي

الحدود والظلال:
  border-light-gray   → فواصل بين أقسام
  shadow-md           → بطاقات قياسية
  shadow-lg           → بطاقات بارزة (hover)
  rounded-card        → 12px (افتراضي للبطاقات)
  rounded-button      → 8px (للأزرار)
  rounded-pill        → للشارات الدائرية

الخطوط:
  font-arabic         → Tajawal (default)
  font-latin          → Poppins (للأرقام واسم iGarden)
```

### 3.4 المكوّنات المشتركة

#### `BilingualText.tsx`

```tsx
// components/shared/BilingualText.tsx
export function IGardenName() {
  return <span dir="ltr" className="font-latin font-bold">iGarden</span>;
}

export function LtrText({ children }: { children: React.ReactNode }) {
  return <span dir="ltr" className="ltr-inline">{children}</span>;
}
```

**استخدام:** كل ظهور لـ "iGarden" داخل نص عربي يستخدم `<IGardenName />`.

#### `CTAButton.tsx`

```tsx
// components/shared/CTAButton.tsx
import Link from "next/link";

type Variant = "lime" | "outline-green" | "ghost";

export function CTAButton({
  href,
  children,
  variant = "lime",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
}) {
  const base = "inline-flex items-center justify-center px-6 py-3 rounded-button font-medium transition-colors";
  const variants = {
    lime: "bg-lime text-white hover:bg-bright-lime",
    "outline-green": "border-2 border-deep-green text-deep-green hover:bg-deep-green hover:text-cream",
    ghost: "text-deep-green hover:bg-cream",
  };

  if (external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${variants[variant]}`}>{children}</a>;
  }

  return <Link href={href} className={`${base} ${variants[variant]}`}>{children}</Link>;
}
```

---

## 4. Navigation و Footer

### 4.1 Top Navigation

#### الهيكل المنطقي

```tsx
// components/layout/Navigation.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CTAButton } from "@/components/shared/CTAButton";

const NAV_ITEMS = [
  { label: "الرئيسية", href: "/" },
  {
    label: "المنتجات",
    href: "/products",
    children: [
      { label: "Smart Controllers", href: "/products/smart-controllers", badge: "Flagship" },
      { label: "المحميات الذكية", href: "/products/smart-greenhouses" },
      { label: "أنظمة الزراعة المائية", href: "/products/hydroponics" },
    ],
  },
  { label: "محطة عسفان", href: "/osfan-station" },
  { label: "من نحن", href: "/about" },
  { label: "الأكاديمية", href: "/learn" },
  { label: "المدونة", href: "/blog" },
  { label: "تواصل", href: "/contact" },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-light-gray">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="iGarden — الصفحة الرئيسية">
          <Image
            src="/logo/lockup-horizontal-en.svg"
            alt="iGarden"
            width={140}
            height={40}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.href} className="relative">
              {item.children ? (
                <ProductsDropdown item={item} />
              ) : (
                <Link
                  href={item.href}
                  className="text-deep-green hover:text-lime transition-colors font-medium"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <CTAButton href="/contact" variant="lime">
            احجز استشارة مجانية
          </CTAButton>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden p-2"
          aria-label="فتح القائمة"
        >
          {/* burger icon */}
        </button>
      </nav>

      {/* Mobile sheet (full-screen overlay) */}
      {mobileOpen && <MobileSheet items={NAV_ITEMS} onClose={() => setMobileOpen(false)} />}
    </header>
  );
}
```

#### قواعد سلوك Navigation

| السلوك | Desktop ≥1024px | Mobile <1024px |
|---|---|---|
| **القائمة الرئيسية** | شريط أفقي | Sheet كامل من اليمين |
| **dropdown «المنتجات»** | hover/focus → يظهر | accordion داخل الـ sheet |
| **CTA «احجز استشارة»** | زرّ Lime ثابت | في أعلى الـ sheet + زرّ تالي للـ burger |
| **شارة Flagship على Smart Controllers** | تظهر دائماً | تظهر دائماً |
| **الخلفية عند Scroll** | `bg-cream/95 backdrop-blur` ثابت | نفس السلوك |

#### ملاحظات حرجة

- **لا ذكر لـ «متجر» أو «منزلي» في Navigation الرئيسي.** المتجر يظهر في Footer فقط.
- Active state للرابط الحالي: `text-lime` + خط سفلي بـ 2px Lime
- ESC يُغلق Mobile Sheet
- Focus trap داخل Mobile Sheet

### 4.2 Footer

```tsx
// components/layout/Footer.tsx
export function Footer() {
  return (
    <footer className="bg-deep-green text-cream">
      <div className="container mx-auto px-4 py-16">
        {/* Top: 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand */}
          <div>
            <Image
              src="/logo/lockup-horizontal-en-white.png"
              alt="iGarden"
              width={140}
              height={40}
            />
            <p className="mt-4 text-sm leading-relaxed opacity-80">
              شركة سعودية لتطوير المزارع وأنظمة التحكم الزراعي الذكي. ننفّذ · نُوطّن · نُطوّر.
            </p>
            <p className="mt-4 text-sm font-latin opacity-90">ازرع بذكاء · Plant Smart</p>
          </div>

          {/* Column 2: Pillars */}
          <FooterColumn title="الركائز">
            <FooterLink href="/products/smart-controllers">Smart Controllers</FooterLink>
            <FooterLink href="/products/smart-greenhouses">المحميات الذكية</FooterLink>
            <FooterLink href="/products/hydroponics">أنظمة الزراعة المائية</FooterLink>
            <FooterLink href="/osfan-station">محطة عسفان</FooterLink>
          </FooterColumn>

          {/* Column 3: Company */}
          <FooterColumn title="الشركة">
            <FooterLink href="/about">من نحن</FooterLink>
            <FooterLink href="/contact">تواصل معنا</FooterLink>
            <FooterLink href="/learn">الأكاديمية</FooterLink>
            <FooterLink href="/blog">المدونة</FooterLink>
            <FooterLink href="https://shop.igarden.sa" external>متجر iGarden — حلول منزلية</FooterLink>
            <FooterLink href="https://demo.igarden.sa" external>الديمو التفاعلي</FooterLink>
          </FooterColumn>

          {/* Column 4: Contact */}
          <FooterColumn title="التواصل">
            <p className="text-sm mb-2">
              <a href="mailto:info@igarden.sa" className="hover:text-lime">info@igarden.sa</a>
            </p>
            <p className="text-sm mb-2 font-latin" dir="ltr">+966 57 034 0500</p>
            <p className="text-sm mb-4 opacity-80">جدة، المملكة العربية السعودية</p>
            <SocialIcons />
          </FooterColumn>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs opacity-70">
            <div className="space-y-1">
              <p>شركة انتيليجنت غاردن (ذات مسؤولية محدودة)</p>
              <p>سجل تجاري MISA: <span className="font-latin" dir="ltr">24926249716</span></p>
              <p>نموذج صناعي SAIP: <span className="font-latin" dir="ltr">#423450193</span></p>
            </div>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-lime">سياسة الخصوصية</Link>
              <Link href="/terms" className="hover:text-lime">الشروط والأحكام</Link>
            </div>
            <p className="font-latin">© 2026 iGarden. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

**ملاحظات Footer:**
- **رابط متجر iGarden يظهر هنا فقط** (لا في Hero ولا Nav الرئيسي)
- **Social icons:** LinkedIn, X, Instagram, YouTube, WhatsApp, TikTok — استخدم `lucide-react` أو SVG inline
- **روابط Legal:** صفحتا `/privacy` + `/terms` placeholders حتى استشارة PDPL [CONTENT_NEEDED: نص قانوني للخصوصية والشروط]

---

## 5. Homepage — 12 قسم

**Route:** `app/page.tsx`

ترتيب الأقسام **مُلزم** للموبايل والديسكتوب:

```tsx
// app/page.tsx
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { ThreePillarsSection } from "@/components/sections/ThreePillarsSection";
import { ComplementaryProducts } from "@/components/sections/ComplementaryProducts";
import { OsfanStationPreview } from "@/components/sections/OsfanStationPreview";
import { SmartOSDemoSection } from "@/components/sections/SmartOSDemoSection";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { KnowledgeSection } from "@/components/sections/KnowledgeSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { OrganizationSchema, WebSiteSchema } from "@/components/shared/SchemaJsonLd";

export { metadata } from "./homepage-metadata"; // انظر §8

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      <Navigation />
      <main>
        <HeroSection />
        <TrustBar />
        <MethodologySection />
        <ThreePillarsSection />
        <ComplementaryProducts />
        <OsfanStationPreview />
        <SmartOSDemoSection />
        <StatsStrip />
        <HowWeWork />
        <KnowledgeSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
```

### القسم 1 — Hero

**الهدف:** الرسالة الجوهرية + CTA رئيسي.

#### المحتوى الكامل

| العنصر | النص |
|---|---|
| **Eyebrow** (Lime, small) | AgriTech سعودية · ريادية · مُبتكرة |
| **Headline** (H1) | نُنفّذ ونُوطّن ونُطوّر<br>أنظمة الزراعة الذكية |
| **Subhead** | شركة سعودية لتطوير المزارع وأنظمة التحكم الزراعي — نأخذ التقنية العالمية ونُعيد تنفيذها بمدخلات محلية، ونختبرها في مناخك قبل أن تصل إليك. |
| **CTA1** (Lime, primary) | احجز استشارة مجانية → `/contact` |
| **CTA2** (outline) | تعرّف على محطّة عسفان → `/osfan-station` |
| **Link صغير أسفل** | شاهد الديمو التفاعلي ↗ → `https://demo.igarden.sa` |

#### الكود التوجيهي

```tsx
// components/sections/HeroSection.tsx
import Image from "next/image";
import { CTAButton } from "@/components/shared/CTAButton";

export function HeroSection() {
  return (
    <section className="relative section-light py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="text-right">
            <p className="text-lime font-medium text-sm md:text-base mb-4 tracking-wide">
              AgriTech سعودية · ريادية · مُبتكرة
            </p>
            <h1 className="h1 text-deep-green mb-6">
              نُنفّذ ونُوطّن ونُطوّر
              <br />
              أنظمة الزراعة الذكية
            </h1>
            <p className="body-base text-medium-gray max-w-2xl mb-8">
              شركة سعودية لتطوير المزارع وأنظمة التحكم الزراعي — نأخذ التقنية
              العالمية ونُعيد تنفيذها بمدخلات محلية، ونختبرها في مناخك قبل أن
              تصل إليك.
            </p>
            <div className="flex flex-wrap gap-4">
              <CTAButton href="/contact" variant="lime">
                احجز استشارة مجانية
              </CTAButton>
              <CTAButton href="/osfan-station" variant="outline-green">
                تعرّف على محطّة عسفان
              </CTAButton>
            </div>
            <p className="mt-6 text-sm text-medium-gray">
              <a
                href="https://demo.igarden.sa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lime hover:text-deep-green underline-offset-4 hover:underline"
              >
                شاهد الديمو التفاعلي ↗
              </a>
            </p>
          </div>

          {/* Visual */}
          <div className="relative aspect-[4/3] rounded-card overflow-hidden shadow-lg">
            <Image
              src="/images/osfan/hero-osfan.jpg"
              alt="محطة عسفان للتجارب والتطوير — نباتات ضمن نظام الزراعة المائية"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
```

**صورة Hero:** `[CONTENT_NEEDED: أفضل صورة من عسفان — تُسمَّى hero-osfan.jpg، نسبة 4:3 على الأقل، عرض 1600px+]`

---

### القسم 2 — Trust Bar

**الهدف:** المصداقية الفورية.

#### المحتوى

شريط أفقي بـ **4 أعمدة**، خلفية بيضاء، حدود علوية وسفلية رفيعة:

| ✓ | النص |
|---|---|
| ✓ | مرخّصة MISA · `24926249716` |
| ✓ | نموذج صناعي SAIP · `#423450193` |
| ✓ | محطّة عسفان للتجارب قائمة |
| ✓ | Smart OS Backend يعمل (Demo حيّ) |

#### الكود التوجيهي

```tsx
// components/sections/TrustBar.tsx
import { CheckCircle2 } from "lucide-react";

const TRUST_ITEMS = [
  { text: "مرخّصة MISA", number: "24926249716", isLatin: true },
  { text: "نموذج صناعي SAIP", number: "#423450193", isLatin: true },
  { text: "محطّة عسفان للتجارب قائمة", number: null },
  { text: "Smart OS Backend يعمل", number: "(Demo حيّ)" },
];

export function TrustBar() {
  return (
    <section className="bg-white border-y border-light-gray py-6">
      <div className="container mx-auto px-4">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {TRUST_ITEMS.map((item) => (
            <li key={item.text} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="w-5 h-5 text-lime flex-shrink-0 mt-0.5" aria-hidden />
              <span>
                {item.text}
                {item.number && (
                  <>
                    {" "}
                    {item.isLatin ? (
                      <span dir="ltr" className="font-latin font-medium">
                        {item.number}
                      </span>
                    ) : (
                      <span className="text-medium-gray">{item.number}</span>
                    )}
                  </>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
```

---

### القسم 3 — Methodology «ننفّذ · نُوطّن · نُطوّر»

**الهدف:** شرح التموضع في 3 بطاقات.

#### المحتوى

عنوان القسم: **«منهجنا الثلاثي»**
Subhead: «ما يُميّز iGarden ليس التقنية وحدها — بل كيف نُوصلها إليك.»

3 بطاقات متجاورة:

| الأيقونة | العنوان | النص (3 أسطر) |
|---|---|---|
| ⚙️ Hammer/Tools | **ننفّذ** | نُصمّم ونُركّب مزارع وأنظمة تحكّم ذكي. من الفكرة إلى التشغيل، فريقنا يُنفّذ ميدانياً. |
| 🌍 Map/Globe | **نُوطّن** | نأخذ التقنية العالمية ونُعيد تنفيذها بمدخلات سعودية وتصنيع محلي. ما يصلك، صُنع لمناخك. |
| 🔬 Microscope | **نُطوّر** | نُواجه الصعوبات بالابتكار، لا بالاستسلام لحدود المنتج المستورد. R&D داخلي مستمرّ. |

**الأيقونات:** من `lucide-react` — Hammer, Globe, Microscope. بلون Deep Green داخل دائرة Lime/10.

```tsx
// components/sections/MethodologySection.tsx
import { Hammer, Globe2, Microscope } from "lucide-react";

const PILLARS = [
  {
    icon: Hammer,
    title: "ننفّذ",
    text: "نُصمّم ونُركّب مزارع وأنظمة تحكّم ذكي. من الفكرة إلى التشغيل، فريقنا يُنفّذ ميدانياً.",
  },
  {
    icon: Globe2,
    title: "نُوطّن",
    text: "نأخذ التقنية العالمية ونُعيد تنفيذها بمدخلات سعودية وتصنيع محلي. ما يصلك، صُنع لمناخك.",
  },
  {
    icon: Microscope,
    title: "نُطوّر",
    text: "نُواجه الصعوبات بالابتكار، لا بالاستسلام لحدود المنتج المستورد. R&D داخلي مستمرّ.",
  },
];

export function MethodologySection() {
  return (
    <section className="section-light py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="h2 text-deep-green mb-4">منهجنا الثلاثي</h2>
          <p className="body-base text-medium-gray max-w-2xl mx-auto">
            ما يُميّز <span dir="ltr" className="font-latin font-bold">iGarden</span>
            {" "}ليس التقنية وحدها — بل كيف نُوصلها إليك.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-white rounded-card p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-pill bg-lime/10 flex items-center justify-center mb-6">
                <Icon className="w-7 h-7 text-deep-green" aria-hidden />
              </div>
              <h3 className="h3 text-deep-green mb-3">{title}</h3>
              <p className="body-base text-medium-gray">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### القسم 4 — الركائز الثلاث ⭐ (المحور التجاري)

**الهدف:** عرض المنتجات الرئيسية في صورة منصّة.

#### المحتوى

عنوان القسم: **«ثلاث ركائز · منصّة منتجات متكاملة»**
Subhead: «لكلّ مرحلة من مراحل مزرعتك — حلٌّ مُختَبَر في عسفان.»

3 بطاقات كبيرة:

| | الأيقونة/الصورة | الشارة | العنوان | السطران |
|---|---|---|---|---|
| 1 | صورة Smart Controller من عسفان | **Flagship · صناعة سعودية** | **Smart Controllers** | لوحات تحكم زراعية بصناعتنا. تُربط بأيّ نظام قائم. |
| 2 | صورة محمية من عسفان | — | **Smart Greenhouses** | محميات ذكية تصمد في +45°C وتُؤتمت بالكامل. |
| 3 | صورة Tower من عسفان | **يشمل iGarden Tower — منتجنا المسجَّل** | **Hydroponic Systems** | 7 تقنيات زراعة مائية + برج iGarden المُسجَّل SAIP. |

كل بطاقة تنتهي بـ زرّ outline-green: **«استكشف →»** يقود إلى صفحة الركيزة.

```tsx
// components/sections/ThreePillarsSection.tsx
import Image from "next/image";
import Link from "next/link";

const PILLARS = [
  {
    image: "/images/products/smart-controllers/card.jpg",
    alt: "Smart Controllers — لوحة تحكم Raspberry Pi مع شاشة LCD",
    badge: "Flagship · صناعة سعودية",
    title: "Smart Controllers",
    desc: "لوحات تحكم زراعية بصناعتنا. تُربط بأيّ نظام قائم.",
    href: "/products/smart-controllers",
  },
  {
    image: "/images/products/smart-greenhouses/card.jpg",
    alt: "محمية ذكية في محطة عسفان مع شبكة استشعار",
    badge: null,
    title: "Smart Greenhouses",
    desc: "محميات ذكية تصمد في +45°C وتُؤتمت بالكامل.",
    href: "/products/smart-greenhouses",
  },
  {
    image: "/images/products/hydroponics/card.jpg",
    alt: "iGarden Tower — برج زراعي عمودي ضمن نظام Aeroponics",
    badge: "يشمل iGarden Tower — منتجنا المسجَّل",
    title: "Hydroponic Systems",
    desc: "7 تقنيات زراعة مائية + برج iGarden المُسجَّل SAIP.",
    href: "/products/hydroponics",
  },
];

export function ThreePillarsSection() {
  return (
    <section className="bg-white py-20" id="pillars">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="h2 text-deep-green mb-4">ثلاث ركائز · منصّة منتجات متكاملة</h2>
          <p className="body-base text-medium-gray max-w-2xl mx-auto">
            لكلّ مرحلة من مراحل مزرعتك — حلٌّ مُختَبَر في عسفان.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PILLARS.map((p) => (
            <article key={p.title} className="bg-cream rounded-card overflow-hidden shadow-md hover:shadow-lg transition-shadow flex flex-col">
              <div className="relative aspect-[4/3]">
                <Image src={p.image} alt={p.alt} fill className="object-cover" />
                {p.badge && (
                  <span className="absolute top-4 right-4 bg-lime text-white text-xs font-medium px-3 py-1 rounded-pill">
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="h3 text-deep-green mb-2">{p.title}</h3>
                <p className="body-base text-medium-gray flex-1 mb-4">{p.desc}</p>
                <Link
                  href={p.href}
                  className="text-lime font-medium hover:text-deep-green transition-colors"
                >
                  استكشف ←
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**صور البطاقات:** `[CONTENT_NEEDED: 3 صور 4:3 من عسفان — card-controllers.jpg, card-greenhouse.jpg, card-tower.jpg]`

---

### القسم 5 — منتجات تكميلية

**الهدف:** إكمال صورة المحفظة بدون تشتيت.

#### المحتوى

شريط بـ بطاقتين أصغر بخلفية cream خفيفة:

| الصورة | العنوان | السطران |
|---|---|---|
| Fodder | **Hydroponic Fodder — استنبات الشعير** | إنتاج علف أخضر طازج بكفاءة مياه عالية، مثالي لقطاعات الإنتاج الحيواني. |
| Aquaponics | **Aquaponics — نظام تكاملي سمكي-نباتي** | منظومة مغلقة تُنتج الأسماك والخضراوات في تناغم بيئي تامّ. |

**ملاحظة:** البطاقتان **بدون روابط لصفحات تفصيلية** في هذه المرحلة — مجرّد عرض. زرّ صغير «اطلب استشارة» في كلّ بطاقة → `/contact?interest=fodder` أو `?interest=aquaponics`.

---

### القسم 6 — محطّة عسفان (مُختَبَرنا الميداني) ⭐

**الهدف:** الأصل التشغيلي الأبرز — يُحوّل الشركة الناشئة إلى شركة بسجل ميداني.

#### المحتوى

عنوان: **«في عسفان، نُجرّب قبل أن نُسلّم»**

نصّ تمهيدي:
> «محطّتنا في عسفان ليست مشروعاً عابراً — هي المختبر الميداني حيث نختبر كلّ نظام في ظروف السعودية الحقيقية قبل تسليمه لعميل.»

**Grid من 4 صور** (2×2 على Mobile، 4 على Desktop) من عسفان.

تحتها 3 أرقام في صفّ:
- **5** ورش عمل «ازرع بذكاء» مُنفَّذة
- **متعدد** نماذج أنظمة زراعة مائية
- **قيد الاختبار** نماذج Smart Controllers

CTA: **«تعرّف على محطّة عسفان»** → `/osfan-station`

#### الكود التوجيهي

```tsx
// components/sections/OsfanStationPreview.tsx
import Image from "next/image";
import { CTAButton } from "@/components/shared/CTAButton";

const GALLERY = [
  { src: "/images/osfan/preview-1.jpg", alt: "نظام زراعة مائية في محطة عسفان" },
  { src: "/images/osfan/preview-2.jpg", alt: "ورشة ازرع بذكاء — مشاركون يتعرّفون على الأنظمة" },
  { src: "/images/osfan/preview-3.jpg", alt: "نباتات الخس النامية في محطة عسفان" },
  { src: "/images/osfan/preview-4.jpg", alt: "برج iGarden Tower في وضع تشغيل ميداني" },
];

const NUMBERS = [
  { num: "5", label: "ورش «ازرع بذكاء» مُنفَّذة" },
  { num: "متعدد", label: "نماذج أنظمة زراعة مائية" },
  { num: "قيد الاختبار", label: "نماذج Smart Controllers" },
];

export function OsfanStationPreview() {
  return (
    <section className="section-light py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="h2 text-deep-green mb-4">في عسفان، نُجرّب قبل أن نُسلّم</h2>
          <p className="body-base text-medium-gray max-w-3xl mx-auto">
            محطّتنا في عسفان ليست مشروعاً عابراً — هي المختبر الميداني حيث نختبر
            كلّ نظام في ظروف السعودية الحقيقية قبل تسليمه لعميل.
          </p>
        </div>

        {/* Gallery 2x2 / 4 cols */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {GALLERY.map((img) => (
            <div key={img.src} className="relative aspect-square rounded-card overflow-hidden">
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
            </div>
          ))}
        </div>

        {/* Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {NUMBERS.map((n) => (
            <div key={n.label} className="text-center">
              <p className="stat-num text-lime mb-2">{n.num}</p>
              <p className="text-deep-green font-medium">{n.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <CTAButton href="/osfan-station" variant="lime">
            تعرّف على محطّة عسفان
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
```

---

### القسم 7 — Smart OS + Demo التفاعلي 🆕

**الهدف:** إبراز الـ Moat التقني (Smart OS الفعلي) + ربط الديمو الحيّ.

#### المحتوى

خلفية **Deep Green** (نقلة بصرية مهمّة)، عنوان أبيض:

**«جرّب نظام التحكم قبل أن تقتنيه»**

نصّ:
> «Smart OS يعمل حالياً على Raspberry Pi 5 في محطّة عسفان — مع 208 unit tests تضمن الموثوقية. جرّبه بنفسك عبر الديمو التفاعلي.»

على اليسار: Screenshot من Dashboard الديمو (إن لم يتوفّر، استخدم mockup بسيط).

CTA رئيسي: **«افتح الديمو التفاعلي ↗»** → `https://demo.igarden.sa` (يفتح في tab جديد)

```tsx
// components/sections/SmartOSDemoSection.tsx
import Image from "next/image";

export function SmartOSDemoSection() {
  return (
    <section className="section-dark py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-right">
            <p className="text-lime font-medium text-sm mb-4 uppercase tracking-wide font-latin">
              Smart OS · Live Demo
            </p>
            <h2 className="h2 text-cream mb-4">جرّب نظام التحكم قبل أن تقتنيه</h2>
            <p className="body-base text-cream/85 mb-8">
              <span dir="ltr" className="font-latin font-bold">Smart OS</span>
              {" "}يعمل حالياً على Raspberry Pi 5 في محطّة عسفان — مع{" "}
              <span dir="ltr" className="font-latin font-bold">208 unit tests</span>
              {" "}تضمن الموثوقية. جرّبه بنفسك عبر الديمو التفاعلي.
            </p>
            <a
              href="https://demo.igarden.sa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-lime text-white px-6 py-3 rounded-button font-medium hover:bg-bright-lime transition-colors"
            >
              افتح الديمو التفاعلي ↗
            </a>
          </div>
          <div className="relative aspect-video rounded-card overflow-hidden shadow-lg ring-1 ring-cream/10">
            <Image
              src="/images/products/smart-controllers/dashboard-screenshot.jpg"
              alt="لقطة من لوحة Smart OS — قراءات pH و EC و الحرارة بالزمن الفعلي"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

### القسم 8 — Stats Strip

**الهدف:** الإقناع الرقمي السريع.

#### المحتوى

شريط أفقي بخلفية **Deep Green** + 5 أرقام بـ Bright Lime (Poppins Bold 56pt على Desktop):

| الرقم | التسمية |
|---|---|
| **95%** | توفير مياه |
| **3x** | إنتاجية |
| **+45°C** | تحمّل المناخ |
| **208** | اختبار موثوقية |
| **5** | ورش عمل |

```tsx
// components/sections/StatsStrip.tsx
const STATS = [
  { num: "95%", label: "توفير مياه" },
  { num: "3x", label: "إنتاجية" },
  { num: "+45°C", label: "تحمّل المناخ" },
  { num: "208", label: "اختبار موثوقية" },
  { num: "5", label: "ورش عمل" },
];

export function StatsStrip() {
  return (
    <section className="section-dark py-12 border-y border-cream/10">
      <div className="container mx-auto px-4">
        <ul className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {STATS.map((s) => (
            <li key={s.label} className="text-center">
              <p className="stat-num font-latin">{s.num}</p>
              <p className="text-cream/85 text-sm mt-2">{s.label}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
```

---

### القسم 9 — كيف نعمل (HowWeWork)

**الهدف:** إزالة الغموض من رحلة العميل.

#### المحتوى

عنوان: **«كيف نعمل معك»**

4 خطوات أفقية (Desktop) / عمودية (Mobile)، أيقونات خطّية + أرقام Lime:

| # | العنوان | الوصف |
|---|---|---|
| 1 | استشارة مجانية | اتصال أوّل لفهم احتياجاتك + زيارة ميدانية للموقع. |
| 2 | تصميم مخصّص | حلٌّ مبني على ظروفك — لا قوالب جاهزة. |
| 3 | تركيب وتشغيل | فريقنا يُنفّذ + يختبر النظام في موقعك. |
| 4 | دعم وتطوير | متابعة دورية + تحديثات مستمرّة لكسب أكبر. |

---

### القسم 10 — الأكاديمية + المدوّنة

**الهدف:** SEO + Lead Magnet + إثبات المعرفة.

#### المحتوى

عنوان: **«التقنية وحدها لا تكفي — المعرفة تصنع الفرق»**

3 بطاقات:

1. **بطاقة الأكاديمية:**
   - صورة من ورشة عسفان
   - «ورش ازرع بذكاء — في عسفان»
   - «5 ورش مُنفَّذة. فتح التسجيل للقادمة قريباً.»
   - زرّ: «اشترك في القائمة البريدية» → نموذج Email subscribe

2. **بطاقة المدوّنة:**
   - placeholder للمقال الأحدث (P2)
   - «3 مقالات حديثة» (لاحقاً عند إنشاء المدوّنة)
   - زرّ: «استعرض المدوّنة» → `/blog`

3. **بطاقة Lead Magnet:**
   - أيقونة PDF
   - «دليل الزراعة المائية في المناخ السعودي»
   - «PDF مجاني — 24 صفحة»
   - زرّ: «حمّل الدليل» → نموذج بسيط (اسم + إيميل) → Resend email
   - `[CONTENT_NEEDED: PDF الدليل — لم يُكتب بعد]`

---

### القسم 11 — Final CTA + Footer

**الهدف:** التحويل النهائي.

#### المحتوى

بانر بخلفية متدرّجة من Deep Green إلى Corp Green:

**العنوان:** «مشروعك يستحقّ حلاً مُوطَّناً، لا مستورَداً.»
**Subhead:** «دعنا نزور موقعك ونصمّم لك حلاً مبنياً على ظروفك الفعلية.»
**CTA:** زرّ Lime كبير — «احجز استشارة مجانية الآن» → `/contact`

```tsx
// components/sections/FinalCTA.tsx
import { CTAButton } from "@/components/shared/CTAButton";

export function FinalCTA() {
  return (
    <section className="bg-gradient-to-br from-deep-green to-corp-green py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="h2 text-cream mb-4">
          مشروعك يستحقّ حلاً مُوطَّناً، لا مستورَداً.
        </h2>
        <p className="body-base text-cream/85 max-w-2xl mx-auto mb-8">
          دعنا نزور موقعك ونصمّم لك حلاً مبنياً على ظروفك الفعلية.
        </p>
        <CTAButton href="/contact" variant="lime">
          احجز استشارة مجانية الآن
        </CTAButton>
      </div>
    </section>
  );
}
```

---

## 6. صفحات الركائز الثلاث

كل صفحة ركيزة تشترك في **بنية موحَّدة من 9 أقسام** لتسهيل البناء، مع اختلاف المحتوى:

```
1. Hero (مع شارة الركيزة)
2. القيم الثلاث
3. المكوّنات التقنية
4. كيف يعمل (4 مراحل)
5. صور من عسفان
6. ربط الديمو (Controllers + Greenhouses فقط) | iGarden Tower (Hydroponics فقط)
7. قسم «بكل الأحجام» (صناعي + متوسط + منزلي → CTA shop للمنزلي)
8. FAQ
9. CTA ختامي
```

سأبني template مشترك ثم محتوى كل صفحة.

### 6.1 Template مشترك للركائز

```tsx
// components/product-pages/ProductPageLayout.tsx
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { ProductHero } from "./ProductHero";
import { ProductValues } from "./ProductValues";
import { ProductTechSpecs } from "./ProductTechSpecs";
import { ProductHowItWorks } from "./ProductHowItWorks";
import { ProductOsfanGallery } from "./ProductOsfanGallery";
import { ProductScalesSection } from "./ProductScalesSection";
import { ProductFAQ } from "./ProductFAQ";
import { ProductFinalCTA } from "./ProductFinalCTA";
import { ProductSchema, FAQSchema } from "@/components/shared/SchemaJsonLd";

export interface ProductPageData {
  slug: string;
  title: string;
  badge?: string | null;
  hero: { eyebrow: string; headline: string; subhead: string; cta: { label: string; href: string } };
  values: { icon: string; title: string; text: string }[];
  techSpecs: { sectionTitle: string; items: { label: string; value: string }[] };
  howItWorks?: { title: string; steps: { title: string; desc: string }[] };
  osfanGallery: { title: string; subhead: string; images: { src: string; alt: string }[] };
  middleSection?: React.ReactNode; // Demo link OR Tower section
  scales: { intro: string; items: { tier: string; title: string; desc: string; cta?: { label: string; href: string } }[] };
  faq: { question: string; answer: string }[];
  finalCTA: { headline: string; subhead: string; cta: { label: string; href: string } };
}
```

---

### 6.2 /products/smart-controllers (Flagship)

#### Metadata

```tsx
// app/products/smart-controllers/page.tsx
export const metadata = {
  title: "Smart Controllers — لوحات التحكم الزراعي بصناعة سعودية | iGarden",
  description: "لوحات تحكم زراعية مُصمَّمة ومُصنَّعة في السعودية. تُربط بأيّ نظام زراعي قائم. اختُبرت في عسفان لتحمّل +45°C ورطوبة الخليج.",
  alternates: { canonical: "https://igarden.sa/products/smart-controllers" },
  openGraph: {
    title: "Smart Controllers — لوحات التحكم الزراعي بصناعة سعودية",
    description: "تصميم وبرمجة وتصنيع 100% سعودي. قابلة للربط مع أيّ نظام قائم.",
    images: ["/images/og/smart-controllers.jpg"],
    type: "website",
    locale: "ar_SA",
  },
};
```

#### القسم 1 — Hero

| العنصر | المحتوى |
|---|---|
| **شارة** | Flagship · صناعة سعودية |
| **Eyebrow** (Lime) | المنتج الرائد · Smart OS Powered |
| **Headline** | Smart Controllers — لوحات التحكم الزراعي بصناعتنا |
| **Subhead** | تصميم وبرمجة وتصنيع 100% سعودي — قابلة للربط مع أيّ نظام زراعة قائم. |
| **CTA1** (Lime) | سجّل اهتمامك — Early Access → `/contact?interest=controllers` |
| **CTA2** (outline) | افتح الديمو التفاعلي ↗ → `https://demo.igarden.sa` |
| **صورة Hero** | `/images/products/smart-controllers/hero.jpg` (لوحة Controller من عسفان) |

#### القسم 2 — حالة المنتج (شفافية ريادية) ⚠️

> هذا القسم **حصري لـ Smart Controllers** — يُحوّل الضعف إلى قيمة.

بطاقة بخلفية Cream + حد Lime على اليمين:

> **منتج قيد التطوير الميداني**
> نحن شركة ريادية — عدّة نماذج أوّلية قيد الاختبار في محطّة عسفان. نقبل اهتمام عملاء **Early Access** للمشاركة في مرحلة الاختبار الميداني والحصول على أولوية في الإصدار التجاري.

CTA صغير: «انضمّ لـ Early Access» → نموذج

#### القسم 3 — القيم الثلاث

| الأيقونة | العنوان | النص |
|---|---|---|
| 🇸🇦 / Factory | **صناعة محلية** | قطع الغيار متاحة. لا انتظار لشحنات دولية. لا ترجمة لمشاكل دعم فنّي بعيد. |
| 🔌 / Plug | **قابلية الربط** | تتكامل مع أيّ نظام زراعة قائم — لا حاجة لاستبدال معداتك الحالية. |
| 🔥 / Thermometer | **تحمّل +45°C** | مُصمَّمة لظروف الخليج — حرارة قاسية، رطوبة عالية، غبار، أعطال شبكة كهرباء. |

#### القسم 4 — المكوّنات التقنية

عنوان: **«ما داخل الصندوق»**

عمودان (Desktop):
- يسار: Diagram بسيط (SVG) لاتصالات النظام
- يمين: قائمة بـ bullets:

```
المتحكمات الدقيقة
  • Raspberry Pi 5 — العقل المركزي
  • ESP32 — Edge nodes للحساسات البعيدة

الحساسات المدعومة
  • pH meter (دقّة ±0.01)
  • EC / TDS meter (للمحاليل المغذية)
  • DHT22 — حرارة + رطوبة
  • DS18B20 — حرارة الماء
  • Float switch — مستوى الخزّانات
  • Light sensor — قياس الإضاءة

البرمجيات والاتصال
  • Smart OS — نظام التحكم (Python + n8n)
  • MQTT Broker محلي + اتصال سحابي
  • Dashboard محلي (web) + تطبيق جوّال (P2)
  • تنبيهات WhatsApp + Email عند الانحرافات
```

`[CONTENT_NEEDED: مراجعة دقّة المواصفات التقنية مع م. أيمن قبل النشر]`

#### القسم 5 — كيف يعمل (4 مراحل)

```
1. القياس     →  الحساسات تقرأ pH/EC/حرارة/رطوبة كل ثانية
2. التحليل    →  Smart OS يقارن بالقيم المثلى لمحصولك
3. التحكم     →  المضخات والصمّامات تُعمل/تُطفأ تلقائياً
4. التنبيه    →  أيّ انحراف → WhatsApp + Email خلال ثوانٍ
```

#### القسم 6 — ربط الديمو

قسم خلفية **Deep Green**، Screenshots من الديمو + CTA:

> «جرّب لوحة التحكم بنفسك — قبل أن تقتنيها»
> «الديمو الحيّ يعرض 7 حسّاسات + 10 شاشات تفاعلية»

CTA: **«افتح الديمو التفاعلي ↗»** → `https://demo.igarden.sa`

#### القسم 7 — قصّة التطوير (Timeline)

`[CONTENT_NEEDED: Timeline 4 مراحل — البحث الأوّلي → أول Prototype → الاختبار في عسفان → الإصدار القادم. مع تواريخ وصور حقيقية. م. أيمن مصدر المعلومات.]`

#### القسم 8 — للمشاريع (B2B/B2G)

شريط بسيط:
> «مُصمَّمة لـ المزارع التجارية القائمة + المشاريع الحكومية. حلول مخصّصة لكل مشروع — لا قوالب جاهزة.»

`[CONTENT_NEEDED: لائحة 3-5 قطاعات مستهدفة — مزارع تمور؟ ورود؟ ورقيات؟ — لتوضع كـ chips]`

> **ملاحظة:** **لا ذكر للقطاع المنزلي هنا** — حسب التموضع المعتمد.

#### القسم 9 — FAQ

`[CONTENT_NEEDED: 5 أسئلة + إجابات. مقترحات للأسئلة:]`
- متى الإصدار التجاري المتوقّع؟
- هل يعمل مع نظامي الحالي (XYZ)؟
- ما النطاق السعري المتوقّع؟
- هل يحتاج تركيب من فريقكم أم يُمكنني تركيبه؟
- ما الضمان وفترة الدعم الفنّي؟

#### القسم 10 — CTA ختامي

> «هل أنت جاهز لتجربة لوحة تحكم صُنعت لمناخك؟»

CTA: «سجّل اهتمامك Early Access» → `/contact?interest=controllers`

---

### 6.3 /products/smart-greenhouses

#### Metadata

```tsx
export const metadata = {
  title: "Smart Greenhouses — محميات ذكية تصمد في +45°C | iGarden",
  description: "محميات ذكية بأتمتة IoT كاملة. هياكل مقاومة للرياح، عزل حراري، تحكم مناخي مُختَبَر في عسفان. حلول للمزارع التجارية والحكومية.",
  alternates: { canonical: "https://igarden.sa/products/smart-greenhouses" },
  openGraph: {
    title: "Smart Greenhouses — محميات ذكية تصمد في +45°C",
    description: "هيكل + أتمتة + تحكم مناخي. مُختَبَرة في عسفان.",
    images: ["/images/og/smart-greenhouses.jpg"],
    type: "website",
    locale: "ar_SA",
  },
};
```

#### القسم 1 — Hero

| العنصر | المحتوى |
|---|---|
| **Eyebrow** | المحميات الذكية · IoT-Enabled |
| **Headline** | Smart Greenhouses — محميات ذكية تصمد في مناخك |
| **Subhead** | محميات بأتمتة IoT كاملة، هياكل مقاومة لرياح الخليج، وتحكم مناخي اختُبر في عسفان عند +45°C. |
| **CTA1** (Lime) | اطلب عرض مخصّص → `/contact?interest=greenhouses` |
| **CTA2** (outline) | شاهد محطّة عسفان → `/osfan-station` |

#### القسم 2 — القيم الثلاث

| الأيقونة | العنوان | النص |
|---|---|---|
| 🏗️ / Building | **هيكل مُصمَّم لمناخك** | مقاوم لرياح الخليج. عزل حراري عالٍ. مواد مُختارة لظروف +45°C والرطوبة. |
| 🤖 / Cpu | **أتمتة IoT كاملة** | تحكم آلي بالتهوية + التبريد + الريّ + الإضاءة. لوحة Smart Controller داخلية. |
| 🌡️ / Wind | **تحكم مناخي ذكي** | الحفاظ على درجة الحرارة والرطوبة المثاليتين 24/7 — حتى في ذروة الصيف. |

#### القسم 3 — المكوّنات التقنية

```
الهيكل
  • أعمدة فولاذية مجلفنة
  • تغطية بلاستيكية UV-resistant
  • نظام تهوية جانبي + علوي

الأنظمة الذكية
  • Smart Controller (راجع صفحة Controllers)
  • مرشّات ضباب — Fogger system
  • مراوح استخراج بمستشعرات حرارة
  • شبكات تظليل آلية
  • نظام ريّ آلي (Drip / Hydroponics)

المراقبة
  • Dashboard لمراقبة الظروف 24/7
  • تنبيهات الانحرافات
```

`[CONTENT_NEEDED: تأكيد قائمة المكوّنات مع م. أيمن]`

#### القسم 4 — كيف يعمل

`[CONTENT_NEEDED: 4 مراحل — توضع لاحقاً. مقترح: استشارة وزيارة → تصميم وحجم مخصّص → تصنيع وتركيب → تشغيل ودعم]`

#### القسم 5 — صور من عسفان

Gallery من 6 صور للمحميات في المحطة.

#### القسم 6 — قسم «بكل الأحجام»

> **«حلول بكل الأحجام»**
> «من المشاريع الصناعية الكبرى إلى الفلل والاستراحات — لكل حجم حلٌّ مناسب.»

3 بطاقات:

| التصنيف | العنوان | الوصف | CTA |
|---|---|---|---|
| **صناعي** | محميات تجارية كبرى | للمشاريع التجارية والحكومية. مساحات 1,000-10,000+ م². | اطلب عرضاً → `/contact?interest=greenhouses-industrial` |
| **متوسط** | محميات للمزارع المتوسطة | 200-1,000 م². للمزارعين والمنتجين المحلّيين. | اطلب عرضاً → `/contact?interest=greenhouses-mid` |
| **منزلي** | محميات منزلية صغيرة | للفلل والاستراحات. حلول جاهزة عبر متجرنا. | استكشف المتجر ↗ → `https://shop.igarden.sa` |

> **ملاحظة:** القسم «المنزلي» **هو** الموضع المعتمد لذكر متجر iGarden داخل صفحة منتج — حسب القرار الاستراتيجي.

#### القسم 7 — FAQ

`[CONTENT_NEEDED: 5 أسئلة. مقترحات:]`
- ما حجم المحمية المُناسب لمشروعي؟
- هل تستوردون المواد أم تُصنَّع محلياً؟
- ما مدّة التركيب الكامل؟
- ما تكلفة التشغيل الشهرية؟
- هل تقدّمون عقود صيانة سنوية؟

#### القسم 8 — CTA ختامي

> «اطلب زيارة موقعك المجانية — نُصمّم محمية مبنيّة على ظروفك الفعلية»

---

### 6.4 /products/hydroponics (يضمّ iGarden Tower)

#### Metadata

```tsx
export const metadata = {
  title: "Hydroponic Systems — أنظمة الزراعة المائية + iGarden Tower | iGarden",
  description: "7 تقنيات زراعة مائية مُختَبَرة في عسفان. من NFT إلى DWC إلى Aeroponics. يشمل iGarden Tower المُسجَّل صناعياً (SAIP #423450193).",
  alternates: { canonical: "https://igarden.sa/products/hydroponics" },
  openGraph: {
    title: "Hydroponic Systems — أنظمة الزراعة المائية + iGarden Tower",
    description: "7 تقنيات + iGarden Tower المُسجَّل. توفير 95% من المياه و3x إنتاجية.",
    images: ["/images/og/hydroponics.jpg"],
    type: "website",
    locale: "ar_SA",
  },
};
```

#### القسم 1 — Hero

| العنصر | المحتوى |
|---|---|
| **Eyebrow** | الزراعة المائية · 7 تقنيات |
| **Headline** | Hydroponic Systems — زراعة بلا تربة، بكفاءة استثنائية |
| **Subhead** | 7 تقنيات زراعة مائية مُختَبَرة في عسفان — توفّر 95% من المياه وتُنتج 3x مقارنة بالزراعة التقليدية. |
| **CTA1** (Lime) | اطلب استشارة → `/contact?interest=hydroponics` |

#### القسم 2 — القيم الثلاث

| الأيقونة | العنوان | النص |
|---|---|---|
| 💧 / Droplet | **توفير 95% من المياه** | أنظمة مغلقة تُعيد تدوير المياه — مقارنة بالزراعة التقليدية المفتوحة. |
| 📈 / TrendingUp | **3x إنتاجية** | زراعة عمودية + دورة نمو أقصر = إنتاج أعلى لكل متر مربع. |
| 🌱 / Leaf | **بلا تربة، بلا مبيدات** | بيئة معقّمة محكومة — أقلّ آفات، أقلّ كيماويات، محصول أنظف. |

#### القسم 3 — التقنيات السبع

عنوان: **«7 تقنيات لـ 7 احتياجات»**

Grid بـ 7 بطاقات صغيرة (كل واحدة: أيقونة + اسم + سطر تعريفي):

| # | التقنية | الوصف القصير |
|---|---|---|
| 1 | NFT — Nutrient Film Technique | تيار رقيق من المحلول المغذّي يمرّ عبر الجذور. مثالي للورقيات. |
| 2 | DWC — Deep Water Culture | الجذور غاطسة كلّياً في محلول مُهوّى. سريع النمو. |
| 3 | Drip Hydroponics | تنقيط محلول مغذّي إلى أوساط صلبة (perlite/coco). |
| 4 | Ebb & Flow | غمر دوري + تصريف. توازن جيد للهواء والماء. |
| 5 | Wick System | بسيط — حبل ينقل المحلول للجذور بالخاصية الشعرية. |
| 6 | Aeroponics | الجذور في الهواء + رشّ ضباب مغذّي. أعلى كفاءة. |
| 7 | Vertical Towers | أعمدة عمودية تُضاعف الإنتاج لكل m². |

`[CONTENT_NEEDED: مراجعة هذه التقنيات السبع مع م. أيمن — تأكيد الترتيب وأنّ كلها مُختَبَرة]`

#### القسم 4 — iGarden Tower (قسم بارز ⭐)

> **هذا قسم خاص — يحظى بمساحة بصرية أكبر من باقي الصفحة**

خلفية متدرّجة Cream → Lime/5، حدّ علوي بـ Lime:

**العنوان:** «iGarden Tower — منتجنا المُسجَّل صناعياً»

**Subhead:** «نموذج Aeroponics عمودي صُمِّم وطُوِّر محلياً، مسجَّل في الهيئة السعودية للملكية الفكرية SAIP بالرقم #423450193»

**Layout:** صورة الـ Tower على اليسار (تأخذ نصف الشاشة) + نص + أرقام على اليمين.

النصّ:
> «مرّ بثلاث مراحل تطوير في محطّة عسفان قبل أن يصل إلى مرحلة الاعتماد. كلّ مدخل فيه — من المضخّات إلى الأنابيب — اختُرنا أفضل بديل متاح من السوق المحلي قبل اللجوء للاستيراد.»

3 أرقام تحت النص:
- **#423450193** SAIP — مسجَّل
- **3** مراحل تطوير في عسفان
- **عمودي** يُضاعف الإنتاج × 4

CTA: «اطلب iGarden Tower لمشروعك» → `/contact?interest=tower`

`[CONTENT_NEEDED: قصّة التَوطين الكاملة — أيّ مكوّنات حُلّت محلياً؟ ما المشاكل التي ووجهت وكيف حُلّت؟]`

#### القسم 5 — صور من عسفان

Gallery 4-6 صور لأنظمة Hydroponics في المحطة.

#### القسم 6 — قسم «بكل الأحجام»

| التصنيف | العنوان | الوصف | CTA |
|---|---|---|---|
| **صناعي** | مزارع مائية تجارية | مشاريع تجارية كبرى. NFT + Towers بمقاييس صناعية. | اطلب عرضاً |
| **متوسط** | أنظمة للمزارع المتوسطة | حلول مرنة 50-500 م². | اطلب عرضاً |
| **منزلي** | أنظمة منزلية + iGarden Tower مصغّر | للفلل والشرفات. حلول جاهزة. | استكشف المتجر ↗ → `https://shop.igarden.sa` |

#### القسم 7 — FAQ

`[CONTENT_NEEDED: 5 أسئلة. مقترحات:]`
- ما الفرق بين NFT و DWC وأيّهما يناسبني؟
- كم تستهلك الأنظمة من الكهرباء يومياً؟
- ما المحاصيل الأنسب للزراعة المائية في السعودية؟
- هل أحتاج خبير لتشغيل النظام يومياً؟
- كيف يختلف iGarden Tower عن الأبراج المستوردة؟

#### القسم 8 — CTA ختامي

> «احجز زيارة لمحطّة عسفان — شاهد التقنيات السبع تعمل أمامك»

---


## 7. /osfan-station و /about

### 7.1 /osfan-station — الصفحة الكاملة

#### Metadata

```tsx
// app/osfan-station/page.tsx
export const metadata = {
  title: "محطّة عسفان للتجارب والتطوير | iGarden",
  description: "المختبر الميداني لـ iGarden في عسفان شمال جدة. حيث نُجرّب كلّ نظام في ظروف السعودية الحقيقية قبل أن يصل إلى عميل.",
  alternates: { canonical: "https://igarden.sa/osfan-station" },
  openGraph: {
    title: "محطّة عسفان — حيث نُجرّب قبل أن نُسلّم",
    description: "المختبر الميداني لـ iGarden. أنظمة زراعة مائية + ورش «ازرع بذكاء» في ظروف +45°C.",
    images: ["/images/og/osfan-station.jpg"],
    type: "website",
    locale: "ar_SA",
  },
};
```

#### القسم 1 — Hero (full-width banner)

- صورة Banner عريضة لمحطّة عسفان (أفضل صورة متاحة)
- Overlay داكن خفيف (rgba(15, 61, 46, 0.5)) لتحسين قراءة النص
- **العنوان:** «محطّة عسفان — حيث نُجرّب قبل أن نُسلّم»
- **Subhead:** «المختبر الميداني لـ iGarden في عسفان، شمال جدة»
- لا CTA في Hero — يُترك للقسم الأخير

#### القسم 2 — لماذا عسفان

عمودان: نص يسار + صورة قريبة (close-up) لنبتة في النظام يمين.

> «لأنّ الحلول تُقاس في الميدان، لا في المختبر. في عسفان، كلّ نظام قبل أن يصل إليك، اختُبر في ظروف المناخ السعودي الحقيقية — درجات حرارة تتجاوز +45°C، رطوبة ساحلية، رياح، وغبار.»
>
> «ما يصلك من iGarden ليس منتجاً مستورَداً مع كتيّب ترجمة. هو حلٌّ مرّ بأيدينا، وقاسى مناخك قبل أن يصل إلى مزرعتك.»

#### القسم 3 — Gallery (Grid كبير)

3×3 على Desktop / 2×4 على Mobile = 9-12 صورة.

`[CONTENT_NEEDED: 9-12 صورة من عسفان منظَّمة. الأنواع المطلوبة:]`
- 3 صور للبنية والمساحة العامة
- 3 صور لأنظمة زراعة مائية تعمل (NFT + DWC + Towers)
- 2 صورة للنباتات النامية (close-up)
- 2 صورة من ورش العمل (مع المشاركين)
- 1-2 صورة من ليل/شفق المحطّة (للتنوّع البصري)

#### القسم 4 — أنظمتنا المُختَبَرة

عنوان: **«ما اختبرناه في عسفان»**

4-6 بطاقات (2×3 / 3×2 على Desktop):

كل بطاقة: صورة + اسم النظام + 2 سطر:
- ما تعلّمناه منه
- كيف غيّر منتجاتنا

`[CONTENT_NEEDED: قائمة الأنظمة المُختَبَرة فعلياً مع م. أيمن — مثلاً: NFT بأنابيب 4"، DWC مفرد، Tower النموذج الأوّل، نظام Foggers، Smart Controller v0.1، إلخ. مع وصف للتعلّم من كلّ تجربة.]`

#### القسم 5 — ورش «ازرع بذكاء»

عنوان: **«5 ورش مُنفَّذة — والقادمة تنتظركم»**

محتوى:
- صورة بانورامية من ورشة
- نصّ قصير عن الورش:
  > «ورش عمل تطبيقية بدلاً من المحاضرات النظرية. كلّ ورشة تأخذ المشارك من الفكرة إلى نظام شغّال — في يوم واحد.»
- 3 أرقام:
  - **5** ورش مُنفَّذة
  - `[CONTENT_NEEDED: عدد المشاركين الإجمالي]`
  - `[CONTENT_NEEDED: أهم تعليق إيجابي مع اسم/مهنة المشارك إن أمكن]`

CTA: «اشترك للتنبيه بالورشة القادمة» → نموذج Email subscribe (Resend integration P1)

#### القسم 6 — خطط التوسّع

عنوان: **«ما يأتي بعد ذلك في عسفان»**

نصّ + 4 bullets:
> «بدعم من حاضنة سنبلة (عند الفوز بها)، نخطّط لتوسعة المحطّة لتشمل:»
- توسعة المساحة المُغطّاة بالمحميات الذكية
- إضافة معمل Tissue Culture (زراعة الأنسجة) — تكثير النباتات النادرة
- نماذج Smart Controllers v2 و Tower v2 للاختبار
- مقهى زراعي تعليمي يُتيح للزوّار رؤية الأنظمة في عملها

#### القسم 7 — احجز زيارة

عنوان: **«نرحّب بزيارتك — احجز موعداً لرؤية الأنظمة في عملها»**

نموذج بسيط:
- اسمك
- رقم الجوال
- تاريخ مقترح
- نوع الزيارة (فردي / مجموعة / استثماري / صحفي)

→ يُرسل عبر نفس Supabase CRM مع `interest = "osfan_visit"`.

---

### 7.2 /about — الصفحة الكاملة

#### Metadata

```tsx
export const metadata = {
  title: "من نحن — شركة سعودية لتطوير المزارع | iGarden",
  description: "iGarden — العلامة التجارية لشركة انتيليجنت غاردن. نُنفّذ ونُوطّن ونُطوّر أنظمة الزراعة الذكية. تأسّست 2024، مُرخَّصة 2026.",
  alternates: { canonical: "https://igarden.sa/about" },
  openGraph: {
    title: "من نحن — iGarden",
    description: "شركة سعودية لتطوير المزارع. سلاحنا الابتكار، ومنهجنا «ننفّذ · نُوطّن · نُطوّر».",
    images: ["/images/og/about.jpg"],
    type: "website",
    locale: "ar_SA",
  },
};
```

#### القسم 1 — Hero

- **العنوان:** «شركة ريادية سعودية، سلاحها الابتكار»
- **Subhead:** «iGarden — العلامة التجارية لشركة انتيليجنت غاردن (ذات مسؤولية محدودة). نُطوّر أنظمة الزراعة الذكية المُكيَّفة لمناخ السعودية ومدخلاتها المحلية.»

#### القسم 2 — لماذا بدأنا

`[CONTENT_NEEDED: قصّة 120-150 كلمة عن سبب بدء iGarden. المحاور المقترحة: الفجوة في حلول الزراعة الذكية المُكيَّفة محلياً + رؤية المملكة 2030 + شغف الفريق المؤسّس + تجربة مع منتجات مستوردة لا تصمد في الصيف]`

#### القسم 3 — Timeline ثلاثي (2024 → 2025 → 2026)

عرض بصري لـ 3 مراحل:

| السنة | العنوان | المحتوى |
|---|---|---|
| **2024** | البداية والتأسيس | تأسيس فريق العمل + بحث وتطوير أوّلي + تحديد المنهج. |
| **2025** | النماذج والتجارب | بناء النماذج الأوّلية + إطلاق محطّة عسفان + تنفيذ ورش «ازرع بذكاء». |
| **2026** | الترخيص والإطلاق | الترخيص الرسمي MISA + تسجيل iGarden Tower في SAIP + إطلاق المنصّة الرقمية الكاملة. |

`[CONTENT_NEEDED: تأكيد التواريخ والإنجازات الدقيقة من Master Doc §1.5]`

#### القسم 4 — منهجنا «ننفّذ · نُوطّن · نُطوّر»

تفصيل أعمق ممّا في Homepage. كل ركيزة بفقرة كاملة (3-4 أسطر) + مثال عملي:

`[CONTENT_NEEDED: مثال عملي لكل ركيزة من الواقع — مثلاً: "نُوطّن: حين احتجنا مضخّات لـ Tower، اختبرنا 4 مضخّات محلية قبل اعتماد الأفضل، بدلاً من استيراد..."]`

#### القسم 5 — الفريق المؤسّس

3 بطاقات أفقية:

| الصورة | الاسم | المنصب | الخبرة |
|---|---|---|---|
| `[CONTENT_NEEDED]` | علي محمد غنيمة | المؤسس والمدير التنفيذي | خبير تقني في Hydroponics, Aquaponics, IoT, Raspberry Pi |
| `[CONTENT_NEEDED]` | م. أيمن المخزومي | شريك ومسؤول R&D | `[CONTENT_NEEDED: خلفية أيمن العملية]` |
| `[CONTENT_NEEDED]` | محمد الكثيري | شريك ممول | `[CONTENT_NEEDED: خلفية محمد]` |

> **ملاحظة بصرية:** حتى تتوفّر صور احترافية، استخدم **placeholder بإيقونة + إطار Lime + اسم على Cream** (يُحدَّث بعد جلسة التصوير P1).

#### القسم 6 — مختبرنا الميداني — محطّة عسفان

قسم قصير (3 صور small + نصّ + رابط):
> «نحن نملك ما لا تملكه شركات «AgriTech» الورقية: مختبرٌ ميداني حقيقي.»

CTA: «استكشف محطّة عسفان» → `/osfan-station`

#### القسم 7 — قيمنا الخمس

5 بطاقات صغيرة (5 أعمدة Desktop / 2 Mobile):

| القيمة | الوصف القصير |
|---|---|
| **احترافية** | في كلّ تفصيلة — من الاتّصال الأوّل إلى التسليم النهائي. |
| **ابتكار** | نحلّ المشاكل بدل تجاوزها. R&D داخلي مستمرّ. |
| **استدامة** | كفاءة الموارد ليست شعاراً — هي معيار التصميم. |
| **محلية** | مدخلات سعودية، تصنيع سعودي، اختبار سعودي. |
| **ثقة بالبيانات** | قراراتنا مبنيّة على قياسات وليس على افتراضات. |

#### القسم 8 — CTA ختامي

> «هل أنت جاهز للعمل مع شركة تُجرّب قبل أن تُسلّم؟»

CTA1: «احجز استشارة مجانية» → `/contact`
CTA2: «احجز زيارة لمحطّة عسفان» → `/osfan-station`

---

## 8. SEO Stack الكامل

### 8.1 app/layout.tsx — Metadata الأساسي

```tsx
// app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://igarden.sa"),
  title: {
    default: "iGarden — ننفّذ · نُوطّن · نُطوّر أنظمة الزراعة الذكية",
    template: "%s | iGarden",
  },
  description: "شركة سعودية لتطوير المزارع وأنظمة التحكم الزراعي الذكي. ننفّذ ونُوطّن ونُطوّر — بمدخلات محلية ومناخ مُختَبَر.",
  keywords: [
    "زراعة ذكية السعودية",
    "أنظمة زراعة مائية",
    "Hydroponics Saudi Arabia",
    "محميات ذكية جدة",
    "Smart Controllers زراعية",
    "iGarden Tower",
    "زراعة هيدروبونيك",
    "AgriTech سعودية",
  ],
  authors: [{ name: "iGarden", url: "https://igarden.sa" }],
  creator: "شركة انتيليجنت غاردن",
  publisher: "شركة انتيليجنت غاردن",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: "https://igarden.sa",
    languages: { "ar-SA": "https://igarden.sa" },
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://igarden.sa",
    siteName: "iGarden",
    title: "iGarden — ننفّذ · نُوطّن · نُطوّر",
    description: "شركة سعودية لتطوير المزارع وأنظمة التحكم الزراعي الذكي.",
    images: [
      {
        url: "/images/og/home.jpg",
        width: 1200,
        height: 630,
        alt: "iGarden — ازرع بذكاء · Plant Smart",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iGarden — ننفّذ · نُوطّن · نُطوّر",
    description: "شركة سعودية لتطوير المزارع وأنظمة التحكم الزراعي الذكي.",
    images: ["/images/og/home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicons/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicons/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/favicons/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/favicons/site.webmanifest",
  themeColor: "#0F3D2E",
};
```

### 8.2 app/sitemap.ts

```tsx
// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://igarden.sa";
  const lastModified = new Date();

  return [
    { url: `${base}/`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/products/smart-controllers`, lastModified, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/products/smart-greenhouses`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/products/hydroponics`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/osfan-station`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/about`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];
}
```

### 8.3 app/robots.ts

```tsx
// app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/_next/"],
      },
    ],
    sitemap: "https://igarden.sa/sitemap.xml",
    host: "https://igarden.sa",
  };
}
```

### 8.4 Schema.org JSON-LD — جاهز للصق

كلّ الـ schemas في component واحد لإعادة الاستخدام:

```tsx
// components/shared/SchemaJsonLd.tsx

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "iGarden",
    alternateName: ["الحديقة الذكية", "شركة انتيليجنت غاردن"],
    legalName: "شركة انتيليجنت غاردن (ذات مسؤولية محدودة)",
    url: "https://igarden.sa",
    logo: "https://igarden.sa/logo/icon-master-original.png",
    image: "https://igarden.sa/images/og/home.jpg",
    description: "شركة سعودية لتطوير المزارع وأنظمة التحكم الزراعي الذكي. ننفّذ · نُوطّن · نُطوّر.",
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      addressCountry: "SA",
      addressRegion: "مكة المكرمة",
      addressLocality: "جدة",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+966-57-034-0500",
      contactType: "customer service",
      email: "info@igarden.sa",
      availableLanguage: ["Arabic", "English"],
    },
    sameAs: [
      // [CONTENT_NEEDED: روابط السوشيال ميديا — LinkedIn, X, Instagram, YouTube]
    ],
    identifier: [
      { "@type": "PropertyValue", propertyID: "MISA", value: "24926249716" },
      { "@type": "PropertyValue", propertyID: "SAIP", value: "423450193" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "iGarden",
    url: "https://igarden.sa",
    inLanguage: "ar-SA",
    publisher: { "@type": "Organization", name: "iGarden" },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://igarden.sa/#localbusiness",
    name: "iGarden — محطّة عسفان للتجارب والتطوير",
    description: "المختبر الميداني لـ iGarden في عسفان شمال جدة.",
    url: "https://igarden.sa/osfan-station",
    image: "https://igarden.sa/images/og/osfan-station.jpg",
    telephone: "+966-57-034-0500",
    email: "info@igarden.sa",
    address: {
      "@type": "PostalAddress",
      addressCountry: "SA",
      addressRegion: "مكة المكرمة",
      addressLocality: "عسفان",
    },
    // [CONTENT_NEEDED: إحداثيات GPS الدقيقة لمحطّة عسفان]
    // geo: { "@type": "GeoCoordinates", latitude: ..., longitude: ... },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ProductSchemaProps {
  name: string;
  description: string;
  image: string;
  url: string;
  category: string;
}

export function ProductSchema({ name, description, image, url, category }: ProductSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: `https://igarden.sa${image}`,
    url: `https://igarden.sa${url}`,
    category,
    brand: { "@type": "Brand", name: "iGarden" },
    manufacturer: {
      "@type": "Organization",
      name: "شركة انتيليجنت غاردن",
      url: "https://igarden.sa",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQSchemaProps {
  faqs: { question: string; answer: string }[];
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: { name: string; url: string }[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://igarden.sa${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

### 8.5 OG Images — استراتيجية الإنتاج

كل صفحة تحتاج OG image بأبعاد **1200×630**. **الإستراتيجية:**

**خيار A — توليد ديناميكي (موصى به):**
استخدم `next/og` لتوليد OG images من template:

```tsx
// app/og/route.tsx
import { ImageResponse } from "next/og";
// راجع وثائق Next.js — يبني OG image من JSX مع خط Tajawal
```

**خيار B — يدوي:**
كلّ صفحة → ملف JPG في `/public/images/og/`:
- `home.jpg`
- `smart-controllers.jpg`
- `smart-greenhouses.jpg`
- `hydroponics.jpg`
- `osfan-station.jpg`
- `about.jpg`

كل صورة:
- خلفية Cream أو Deep Green
- شعار iGarden في زاوية
- عنوان الصفحة بـ Tajawal Bold
- Tagline: «ازرع بذكاء · Plant Smart»

`[CONTENT_NEEDED: تصميم 6 OG Images — يُنتَج عبر Figma أو Canva بهوية iGarden]`

### 8.6 مفاتيح SEO الأولوية

كلمات مفتاحية تستهدفها الصفحات:

| الصفحة | الكلمات الأولوية |
|---|---|
| Homepage | iGarden · أنظمة زراعة ذكية السعودية · زراعة مائية جدة · AgriTech سعودية |
| Smart Controllers | لوحات تحكم زراعية · Smart Controllers سعودي · Raspberry Pi زراعة |
| Smart Greenhouses | بيوت محمية ذكية · محميات زراعية جدة · Smart Greenhouses Saudi |
| Hydroponics | زراعة مائية · هيدروبونيك السعودية · Hydroponics Saudi · iGarden Tower · برج زراعي |
| Osfan | محطّة تجارب زراعية عسفان · مختبر زراعي السعودية |
| About | شركة زراعة ذكية سعودية · شركة انتيليجنت غاردن |

---

## 9. Definition of Done

صفحة تُعتبر «جاهزة» عندما:

- ✅ تعمل على Mobile 375px بلا horizontal overflow
- ✅ تعمل على Desktop 1280px+
- ✅ Lighthouse Mobile Performance ≥ 85
- ✅ Lighthouse SEO ≥ 95
- ✅ Lighthouse Accessibility ≥ 90
- ✅ RTL صحيح (لا نصوص مقلوبة، لا أيقونات معكوسة)
- ✅ كل ظهور لـ "iGarden" داخل نص عربي مغلَّف بـ `<IGardenName />` أو `dir="ltr"`
- ✅ كل الصور تستخدم `next/image` مع `alt` عربي وصفي
- ✅ Hero فقط له `priority` على الصور
- ✅ جميع الروابط الداخلية تعمل (لا 404)
- ✅ Meta tags كاملة (title + description + canonical + OG + Twitter)
- ✅ Schema.org JSON-LD موجود حسب نوع الصفحة
- ✅ لا console errors / warnings في Dev mode
- ✅ TypeScript: `tsc --noEmit` بلا أخطاء
- ✅ ESLint: بلا warnings جديدة
- ✅ لا يوجد أيّ ذكر لـ "AI First" أو "5 محميات تشغيلية"
- ✅ تم اختبار النموذج (Contact / Osfan visit) — يصل للـ Supabase

---

## 10. الممنوعات المطلقة

❌ **Sanity.io** — محذوف نهائياً (28 ثغرة)
❌ **localStorage / sessionStorage** — في أيّ component
❌ **ذكر «AI First»** كتموضع رئيسي في أيّ مكان
❌ **«5 محميات تشغيلية»** — الصحيح: محطّة عسفان
❌ **«آي جاردن»** بالعربية — دائماً `iGarden` لاتيني
❌ **iGarden Tower كبطاقة مستقلّة** في grid Homepage — مكانه داخل /products/hydroponics
❌ **ذكر «متجر» أو «منزلي» في Hero أو Top Nav** — يظهران فقط في:
  - Footer
  - قسم «بكل الأحجام» داخل صفحات Greenhouses + Hydroponics
❌ **Stock photos** — كل صورة من عسفان أو من Brand Pack
❌ **ذكر منافسين بالاسم** في أيّ مكان
❌ **عبارات تسويقية مبتذلة** («الأفضل في العالم»، «الرائد بلا منازع»)
❌ **ادعاءات غير موثَّقة** بأرقام
❌ **ألوان خارج Palette** — فقط الـ tokens المحدّدة في §3.1
❌ **خطوط أخرى** غير Tajawal + Poppins
❌ **إيموجيات** في المحتوى الرسمي (نصوص الـ user-facing). الأيقونات OK كـ icons.
❌ **«مُسجَّلة»** للعلامة — هي **«قيد التسجيل»**. iGarden Tower **مُسجَّل** في SAIP فقط.
❌ **Tagline القديم** «مستقبل الزراعة بين يديك» — ثانوي فقط، لا رئيسي
❌ **HTML `<form>` tags في أيّ React Artifact** — استخدم `onClick` handlers

---

## 11. قائمة [CONTENT_NEEDED] — للمؤسس

هذه القائمة تجمع كلّ نقاط المحتوى الناقص. **رتّبها بالأولوية وأكمِلها قبل تسليم Brief لـ Claude Code:**

### 🔴 P0 — حرج للإطلاق

1. **[CONTENT-01]** أفضل صورة Hero من عسفان (4:3، 1600px+) → `/images/osfan/hero-osfan.jpg`
2. **[CONTENT-02]** 3 صور بطاقات الركائز (4:3 لكل ركيزة) → `/images/products/{pillar}/card.jpg`
3. **[CONTENT-03]** 4 صور Gallery للـ OsfanStationPreview على Homepage → `/images/osfan/preview-{1,2,3,4}.jpg`
4. **[CONTENT-04]** 9-12 صورة لـ Gallery كامل في `/osfan-station` → `/images/osfan/gallery-{1..12}.jpg`
5. **[CONTENT-05]** Screenshot من Smart OS Dashboard للـ Demo Section → `/images/products/smart-controllers/dashboard-screenshot.jpg`
6. **[CONTENT-06]** قصّة «لماذا بدأنا» في `/about` (120-150 كلمة)
7. **[CONTENT-07]** 5 أسئلة FAQ × 3 صفحات ركائز (= 15 سؤال + إجابة)
8. **[CONTENT-08]** قصّة التَوطين لـ iGarden Tower (3-4 فقرات)
9. **[CONTENT-09]** قصّة التطوير لـ Smart Controllers (Timeline 4 مراحل)

### 🟠 P1 — مهم قبل التقديم لسنبلة

10. **[CONTENT-10]** خلفيات الفريق المؤسّس: م. أيمن + محمد الكثيري (3-4 أسطر لكل واحد)
11. **[CONTENT-11]** صور احترافية للفريق الثلاثي (جلسة تصوير)
12. **[CONTENT-12]** قائمة الأنظمة المُختَبَرة في عسفان (4-6 أنظمة + التعلّم منها) — مع م. أيمن
13. **[CONTENT-13]** عدد المشاركين الإجمالي في ورش «ازرع بذكاء» + اقتباس إيجابي مع الاسم
14. **[CONTENT-14]** إحداثيات GPS لمحطّة عسفان (للـ LocalBusiness Schema)
15. **[CONTENT-15]** روابط السوشيال ميديا الرسمية (LinkedIn, X, Instagram, YouTube, TikTok)
16. **[CONTENT-16]** PDF Lead Magnet: «دليل الزراعة المائية في المناخ السعودي» (24 صفحة)
17. **[CONTENT-17]** نصوص قانونية لـ `/privacy` + `/terms` (بعد استشارة PDPL)
18. **[CONTENT-18]** قطاعات B2B/B2G المستهدفة لـ Smart Controllers (chips)
19. **[CONTENT-19]** مراجعة قائمة المكوّنات التقنية (Controllers + Greenhouses) مع م. أيمن
20. **[CONTENT-20]** تأكيد الترتيب الفعلي للتقنيات السبع في Hydroponics مع م. أيمن

### 🟡 P2 — يُمكن تأخيره

21. **[CONTENT-21]** 6 OG Images (1200×630) — تصميم بـ Figma/Canva
22. **[CONTENT-22]** 3 مقالات SEO أوّلية لـ `/blog`
23. **[CONTENT-23]** صفحة `/learn` placeholder — «الأكاديمية قريباً»
24. **[CONTENT-24]** أمثلة عملية لكلّ ركيزة من «ننفّذ · نُوطّن · نُطوّر» في `/about`

---

## 12. عند انتهاء العمل

### رسالة PR موحَّدة

```
feat: rebuild igarden.sa with v1.4 positioning — 3 pillars + Osfan + SEO stack

Homepage:
- Rebuild with 12 sections per Blueprint v3
- New Methodology + Three Pillars sections
- Add Osfan Station Preview section
- Add Smart OS Demo section linking to demo.igarden.sa

Product pages (new):
- /products/smart-controllers (Flagship — Early Access)
- /products/smart-greenhouses
- /products/hydroponics (includes iGarden Tower SAIP #423450193)

New pages:
- /osfan-station (with full gallery + booking form)
- /about rebuilt with Timeline + 5 values

Layout:
- New Navigation (no shop/home mention)
- New 4-column Footer (with shop link)

SEO:
- Complete metadata on all pages
- sitemap.ts + robots.ts
- Schema.org: Organization + WebSite + LocalBusiness + Product × 3 + FAQPage + Breadcrumb

Removed:
- All "AI First" positioning references
- All "5 محميات تشغيلية" claims
- iGarden Tower as standalone product card

Source: Master Doc v1.4 + Report v3 + Brief v2
Refs: SAIP #423450193, MISA #24926249716, 208 unit tests, 5 workshops
```

### الخطوات النهائية قبل الـ Merge

1. اختبار كل الروابط يدوياً
2. Lighthouse audit على 4 صفحات: `/`, `/products/smart-controllers`, `/osfan-station`, `/about`
3. اختبار النماذج (Contact + Osfan visit) — التأكد من وصولها لـ Supabase
4. اختبار على 4 أحجام: 375px, 768px, 1024px, 1440px
5. اختبار في 3 متصفحات: Chrome, Safari, Firefox
6. التحقق من sitemap.xml يُولَّد صحيحاً عبر Vercel
7. التحقق من robots.txt يستجيب صحيحاً
8. تشغيل `pnpm tsc --noEmit` بلا أخطاء
9. تشغيل `pnpm lint` بلا warnings جديدة

---

**انتهى Brief v2.**

> هذا Brief مكتفٍ ذاتياً. Claude Code يبدأ التنفيذ مباشرة دون الحاجة لقراءة Master Doc أو Report v3.
> العلامات `[CONTENT_NEEDED]` تُشير لمحتوى يجب أن يكتبه المؤسس قبل الإطلاق — استبدلها قبل النشر.

> **المرجع الأعلى:** Master Doc v1.4 — في حال أيّ تضارب، يُرجَّح Master Doc.
> **آخر تحديث:** 25 أبريل 2026
