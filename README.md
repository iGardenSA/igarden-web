# 🌱 iGarden — الموقع المؤسسي

> **iGarden — الحديقة الذكية** | الموقع الرسمي على `igarden.sa`

موقع مؤسسي لشركة **الحديقة الذكية** مبني بـ Next.js 15 + Tailwind v4 + shadcn/ui، ملتزم بالكامل بدليل الهوية البصرية v1.0.

---

## 📐 البنية التقنية (Stack)

| الطبقة | التقنية |
|---|---|
| Framework | Next.js 15 (App Router) + TypeScript |
| Styling | Tailwind CSS v4 + CSS Variables |
| UI Components | shadcn/ui (Radix Primitives) |
| Icons | Lucide React (outline, stroke 1.5) |
| Fonts | Tajawal (AR) + Poppins (EN) |
| CMS | Sanity.io (محتوى مرن قابل للتحرير) |
| Auth + DB | Supabase |
| Hosting | Vercel |
| Forms | React Hook Form + Zod |

---

## 🚀 البدء السريع

### 1) المتطلبات
- Node.js **20+**
- pnpm / npm / yarn

### 2) التثبيت
```bash
npm install
```

### 3) متغيرات البيئة
```bash
cp .env.example .env.local
# عبّئ القيم: Sanity, Supabase, ...
```

### 4) التشغيل
```bash
npm run dev          # موقع Next.js على http://localhost:3000
npm run sanity:dev   # Sanity Studio على http://localhost:3333
```

---

## 📂 هيكل المشروع

```
igarden-web/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx           # Root layout (RTL, fonts, SEO)
│   │   ├── page.tsx             # الصفحة الرئيسية
│   │   └── about/
│   │       └── page.tsx         # صفحة من نحن
│   │
│   ├── components/
│   │   ├── ui/                  # مكونات shadcn (Button, Card, Badge, Stat)
│   │   ├── layout/              # Header, Footer
│   │   └── sections/            # أقسام صفحات قابلة لإعادة الاستخدام
│   │
│   ├── lib/
│   │   ├── utils.ts            # دالة cn()
│   │   ├── constants.ts        # ⭐ الثوابت الرسمية (أرقام، تواصل، رسائل)
│   │   ├── sanity.ts           # عميل Sanity
│   │   └── supabase.ts         # عميل Supabase
│   │
│   └── styles/
│       └── globals.css         # ⭐ نظام الألوان والخطوط (Design Tokens)
│
├── sanity/
│   ├── schemas/                # مخططات المحتوى
│   └── ...
│
├── public/                     # صور، شعار، favicons
├── sanity.config.ts
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

---

## 🎨 الالتزام بدليل الهوية

### الألوان (CSS Variables)

كل الألوان معرّفة في `src/styles/globals.css` تحت `@theme`:

```css
--color-brand-600: #0F3D2E;   /* Deep Forest Green - أساسي */
--color-accent-500: #7CB342;  /* Lime Accent - محفّز */
--color-surface: #FAFAF7;     /* خلفية كريمية */
--color-foreground: #1A1A1A;
--color-muted: #6B7280;
```

**استخدمها دائماً** عبر:
```tsx
<div className="bg-[var(--color-brand-600)] text-[var(--color-accent-300)]">
```

### قاعدة 60-30-10
- **60%** أبيض/كريمي → خلفيات (`bg-white`, `bg-[var(--color-surface)]`)
- **30%** أخضر غامق → عناوين، أزرار رئيسية، Hero
- **10%** ليموني → CTAs ثانوية، أرقام، أيقونات تأكيد

### الخطوط
- العربية: `Tajawal` (محمّل عبر `next/font`)
- اللاتينية: `Poppins`
- الأرقام: `Poppins` مع `font-feature-settings: "tnum"` (استخدم class `num` أو attr `data-num`)

---

## 📊 الثوابت الرسمية

⚠️ **أي رقم أو رسالة تظهر في الواجهة يجب أن تأتي من `src/lib/constants.ts` فقط.**

```ts
import { STATS, KEY_MESSAGES, PRODUCTS, CONTACT } from "@/lib/constants";

// ✅ صحيح
<Stat value={STATS.waterSavingsMax.value} unit="%" />

// ❌ خطأ — لا تكتب الأرقام يدوياً
<Stat value={95} unit="%" />
```

أي تعديل على هذا الملف يتطلب موافقة مدير التسويق.

---

## 🧩 المكونات الجاهزة

### Button
```tsx
<Button variant="primary" size="lg">احجز استشارة</Button>
<Button variant="accent">تواصل الآن</Button>
<Button variant="outline">اقرأ المزيد</Button>
<Button variant="light">على خلفية داكنة</Button>
```

### Stat
```tsx
<Stat value={95} unit="%" label="توفير في المياه" size="lg" />
```

### Badge
```tsx
<Badge variant="hardware">HARDWARE</Badge>
<Badge variant="software">SOFTWARE</Badge>
<Badge variant="knowledge">KNOWLEDGE</Badge>
```

### Card
```tsx
<Card>
  <CardHeader>
    <CardTitle>عنوان</CardTitle>
    <CardDescription>وصف</CardDescription>
  </CardHeader>
</Card>
```

---

## 🌐 Routing وSEO

- **اللغة الافتراضية:** عربي (`ar`) — RTL
- **الإنجليزية:** ستضاف لاحقاً تحت `/en`
- **Open Graph + Twitter Cards** مهيأة في `app/layout.tsx`
- **JSON-LD Organization Schema** للسيو المحلي السعودي
- **Sitemap + robots.txt:** أضف لاحقاً عبر `next-sitemap`

---

## 🔌 ربط Sanity

1. أنشئ مشروع Sanity جديد على [sanity.io](https://sanity.io)
2. ضع `Project ID` في `.env.local`
3. شغّل `npm run sanity:dev` للوصول إلى Studio
4. الصفحات تُحرَّر من Studio وتظهر تلقائياً في الموقع

المخططات الجاهزة: `page`, `heroSection`, `statsSection`, `featureGrid`, `ctaSection`, `richTextSection`.

---

## 🔐 ربط Supabase

- `lib/supabase.ts` يوفّر `createBrowserSupabase()` و `createServerSupabase()`
- استخدمه لاحقاً لـ:
  - نماذج التواصل (Contact Forms)
  - تسجيل العملاء المحتملين (Leads)
  - لوحة العميل (مستقبلاً)

---

## 🚢 النشر على Vercel

```bash
# 1) ارفع الكود إلى GitHub
git push origin main

# 2) اربط المستودع بـ Vercel
# 3) أضف متغيرات البيئة من .env.example
# 4) اربط الدومين igarden.sa
```

---

## 📝 خارطة الطريق — الأسبوع الأول

- [x] إعداد Boilerplate كامل
- [x] نظام الألوان والخطوط
- [x] مكونات UI أساسية
- [x] Header + Footer
- [x] الصفحة الرئيسية (Hero + Pillars + Stats + CTA)
- [x] صفحة من نحن (Vision + Mission + Values + Integration)
- [ ] صور Hero عالية الجودة
- [ ] استبدال LogoMark المؤقت بالشعار الرسمي SVG
- [ ] ربط Sanity فعلياً وتعبئة محتوى من نحن
- [ ] اختبارات Lighthouse + Accessibility
- [ ] نشر تجريبي على `staging.igarden.sa`

---

## 📞 جهة الاتصال

**iGarden — الحديقة الذكية**
- 📧 info@igarden.sa
- 📱 +966 57 034 0500
- 📍 جدة، المملكة العربية السعودية
- 🌐 [igarden.sa](https://igarden.sa)
