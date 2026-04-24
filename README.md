# iGarden Web — igarden.sa

> **شركة انتيليجنت غاردن (ذات مسؤولية محدودة)** · Intelligent Garden Company
>
> الموقع المؤسسي لـ **iGarden — الحديقة الذكية**
>
> ازرع بذكاء · Plant Smart

[![Next.js](https://img.shields.io/badge/Next.js-16.2.4-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.5-61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-v4-38B2AC)](https://tailwindcss.com/)
[![Deployed](https://img.shields.io/badge/Deployed-Vercel%20Pro-000000)](https://vercel.com)

---

## 🌐 الروابط

- **الموقع الرسمي:** https://igarden.sa
- **الديمو التفاعلي:** https://demo.igarden.sa
- **المتجر (قريباً):** https://shop.igarden.sa

---

## 🎯 التموضع

**iGarden** شركة سعودية لتطوير المزارع وأنظمة التحكم الزراعي الذكي.

**ننفّذ · نُوطّن · نُطوّر**

- **ننفّذ:** نُصمّم ونُركّب مزارع وأنظمة تحكّم ذكية كمقاول متخصّص
- **نُوطّن:** نأخذ التقنية العالمية ونُعيد تنفيذها بمدخلات محلية لمناخ +45°C
- **نُطوّر:** R&D داخلي كسلاح دائم، لا خدمة خارجية

---

## 🏗️ الركائز الثلاث للمنتج

1. **Smart Controllers** ⭐ — لوحات التحكم (Flagship — صناعة سعودية)
2. **Smart Greenhouses** — المحميات الذكية (للمشاريع الكبيرة والمتوسطة)
3. **Hydroponic Systems** — أنظمة الزراعة المائية (تشمل iGarden Tower · SAIP #423450193)

منتجات تكميلية: Hydroponic Fodder · Aquaponics

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 16.2.4** (App Router)
- **React 19.2.5**
- **TypeScript** (strict mode)
- **Tailwind CSS v4**
- **shadcn/ui** components
- **Lucide React** (line icons)
- **React Hook Form + Zod**

### Backend
- **Supabase** (Postgres + Auth + RLS) — Frankfurt EU
- **Resend** (Transactional email — قيد الإعداد)

### DevOps
- **Vercel Pro** (استضافة + CDN + SSL)
- **GitHub:** [iGardenSA/igarden-web](https://github.com/iGardenSA)
- **DNS:** Vercel DNS

### Fonts
- **Arabic:** Tajawal (via next/font)
- **English:** Poppins + Inter

---

## 🚀 البدء السريع

### المتطلبات

- Node.js ≥ 20
- npm أو yarn
- حساب Supabase (لـ CRM)

### التنصيب

```bash
# استنساخ المستودع
git clone https://github.com/iGardenSA/igarden-web.git
cd igarden-web

# تثبيت الحزم
npm install

# نسخ ملف البيئة
cp .env.example .env.local

# إضافة متغيّرات Supabase في .env.local:
# NEXT_PUBLIC_SUPABASE_URL=https://...supabase.co
# NEXT_PUBLIC_SUPABASE_ANON_KEY=...
# SUPABASE_SERVICE_ROLE_KEY=...  (للـ server-side فقط)

# تشغيل dev server
npm run dev
```

افتح [http://localhost:3000](http://localhost:3000) في المتصفّح.

### أوامر مفيدة

```bash
npm run dev          # تشغيل local dev server
npm run build        # build للإنتاج
npm run start        # تشغيل production build
npm run lint         # فحص ESLint
npm run type-check   # فحص TypeScript
```

---

## 📂 هيكل المشروع

```
src/
├── app/
│   ├── layout.tsx                       ← RTL + Fonts + Schema.org
│   ├── page.tsx                         ← Homepage
│   ├── about/                           ← من نحن + Timeline
│   ├── products/
│   │   ├── page.tsx                     ← Products overview
│   │   ├── smart-controllers/           ← Flagship
│   │   ├── smart-greenhouses/
│   │   └── hydroponics/                 ← يشمل iGarden Tower
│   ├── osfan-station/                   ← محطّة عسفان
│   ├── contact/                         ← CRM form
│   ├── blog/                            ← Academy
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/                          ← Navigation + Footer
│   ├── sections/                        ← Homepage sections
│   ├── SchemaOrg.tsx                    ← JSON-LD
│   └── ui/                              ← shadcn components
└── lib/
    ├── constants.ts                     ← Brand constants
    ├── supabase.ts                      ← Client
    ├── supabase-server.ts               ← Server client
    ├── lead-schema.ts                   ← Zod validation
    └── utils.ts                         ← Helpers
```

---

## 🎨 الهوية البصرية

### الألوان الرسمية

```css
--igarden-primary: #0F3D2E;        /* Deep Forest Green */
--igarden-primary-alt: #1B5E3F;    /* Corporate Green */
--igarden-accent: #7CB342;         /* Lime Accent */
--igarden-accent-bright: #A5D63F;  /* Bright Lime */
--igarden-bg: #FAFAF7;             /* Cream */
--igarden-text: #1A1A1A;           /* Dark Text */
```

### قاعدة 60-30-10

- **60%** Cream/White (surfaces, bodies)
- **30%** Deep Forest Green (headings, CTAs, nav)
- **10%** Lime Accent (stats, badges, highlights)

### Design System

- **Border radius:** 8-16px
- **Shadows:** `0 2px 8px rgba(15, 61, 46, 0.08)`
- **Icons:** Line icons (1.5-2px stroke) only
- **Typography:** Minimalist Eco-Tech

راجع `CLAUDE.md` للتفاصيل الكاملة.

---

## 🌱 SEO & Accessibility

- ✅ Server-side rendering (Next.js App Router)
- ✅ RTL support (`dir="rtl"`)
- ✅ Mobile-first responsive
- ✅ Schema.org JSON-LD (Organization + Product + LocalBusiness)
- ✅ Open Graph + Twitter Cards
- ✅ Sitemap + robots.txt
- ✅ ARIA labels بالعربية
- ✅ Lighthouse target: ≥ 90 لكل المحاور

---

## 🔒 الأمان

- ✅ Supabase RLS (Row Level Security) مفعّل
- ✅ Public insert مسموح فقط لجدول `leads`
- ✅ Service Role key server-side فقط
- ✅ Environment variables محمية
- ✅ CSP headers عبر Vercel
- ✅ HTTPS عبر Vercel SSL

---

## 📊 CRM Integration

الموقع مربوط مع Supabase CRM لإدارة Leads القادمة من نموذج `/contact`.

### جدول Leads يدعم

- 10 قنوات (`lead_channel`)
- 6 حالات (`lead_status`)
- 5 أنواع عملاء (`lead_type`)
- 4 مستويات أولوية (`lead_priority`)

للتفاصيل الكاملة راجع `CLAUDE.md § CRM Database`.

---

## 🚢 النشر (Deployment)

الموقع يُنشَر تلقائياً على Vercel عند أي `git push` إلى branch `main`.

- **Production:** [igarden.sa](https://igarden.sa)
- **Preview:** كل PR يحصل على preview URL تلقائياً

### متغيّرات البيئة المطلوبة على Vercel

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
RESEND_API_KEY                     # عند تفعيل Resend
```

---

## 📚 الوثائق المرجعية

قبل أي عمل في هذا المستودع، راجع:

- **`CLAUDE.md`** — تعليمات كاملة لـ Claude Code (وللمطوّرين)
- **iGarden Master Doc v1.4** — المرجع التجاري + التسميات + Timeline
- **استراتيجية الموقع v3** — Blueprint الصفحات
- **ClaudeCode Brief v1** — تفاصيل التنفيذ كود-بكود

---

## 🤝 الفريق

- **علي محمد غنيمة** — CEO & Founder (Hydroponics · IoT · Raspberry Pi)
- **م. أيمن حسين المخزومي** — R&D Director (Agronomy · Water Systems)
- **محمد يعن الله الكثيري** — Founding Partner (Finance · B2G)

---

## 📞 التواصل

- **الموقع:** [igarden.sa](https://igarden.sa)
- **البريد:** info@igarden.sa
- **الجوال:** +966 57 034 0500
- **المقر:** جدة، المملكة العربية السعودية

---

## 📜 التراخيص

- **MISA:** #24926249716
- **Entity ID:** 1490078
- **SAIP:** #423450193 (iGarden Tower)
- **Tax:** 312554598200003

---

## 📅 Timeline الشركة

- **2024** — مرحلة الفكرة + التسجيل الأولي
- **2025** — محطّة عسفان + 5 ورش عمل + النماذج التجريبية
- **2026** — الانطلاق الرسمي (MISA فبراير · التشغيل أبريل)

---

## 📄 الترخيص

هذا المستودع خاصّ بـ **شركة انتيليجنت غاردن (ذات مسؤولية محدودة)**.

© 2026 شركة انتيليجنت غاردن — جميع الحقوق محفوظة.

---

*ازرع بذكاء · Plant Smart* 🌱
