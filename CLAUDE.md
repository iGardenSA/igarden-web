# CLAUDE.md — iGarden Web (igarden.sa)

> **تعليمات لـ Claude Code للعمل في هذا المستودع**
>
> هذا الملف يُقرأ تلقائياً في كل جلسة Claude Code.
> آخر تحديث: 2026-04-24 (متوافق مع Master v1.0.1 + Tech Appendix v1.0)

---

## 📚 الوثائق المرجعية

> ⚠️ **قبل أي قرار معماري، راجع هذه الوثائق في iGarden HQ Project:**

| الوثيقة | الإصدار | الغرض |
|---|---|---|
| **iGarden Master Document** | v1.0.1 | المرجع التجاري + الهوية + الحوكمة |
| **iGarden Tech Appendix** | v1.0 | البنية التحتية + ADRs + R&D Tools |
| **iGarden Brand Guidelines** | v1.0 | الهوية البصرية الرسمية |

### قاعدة الفصل المرجعي

```
موضوع تجاري/تسويقي/أعمال    →  Master Doc
موضوع تقني/Hardware/Firmware  →  Tech Appendix
موضوع بصري/ألوان/خطوط         →  Brand Guidelines
```

---

## 🏢 السياق العام

**iGarden** = شركة AgriFood Tech سعودية (الحديقة الذكية)

- **المقر:** جدة، المملكة العربية السعودية
- **الترخيص:** MISA #24926249716 (نشط منذ فبراير 2026)
- **الكيان:** ID 1490078
- **رأس المال:** 100,000 ريال
- **النموذج الصناعي:** SAIP #423450193 (iGarden Tower)
- **الفريق:** 3 شركاء (50/25/25)
- **الموقع:** https://igarden.sa
- **التواصل الرسمي:** info@igarden.sa | +966 57 034 0500

### التموضع الاستراتيجي (مهم جداً)

> **iGarden = شركة ذكاء اصطناعي تُقدّم حلولاً زراعية**
> (وليست: شركة زراعية تستخدم تكنولوجيا)

كل قرار تصميمي/معماري/نصّي يجب أن يبرز AI أولاً.

---

## 🛠️ Tech Stack

### Frontend
- **Next.js 16.2.4** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS v4** + CSS Variables
- **shadcn/ui** components
- **Lucide React** (line icons only, 1.5-2px stroke)
- **React Hook Form + Zod** for validation
- **Next/Font** with Tajawal (Arabic) + Poppins (English)

### Backend & Database
- **Supabase** (Central EU — Frankfurt)
  - Postgres + Auth + Storage
  - URL: https://ozheuxpcgvhzkebriqij.supabase.co
  - ⚠️ PDPL compliance review pending
- **Sanity.io** (Headless CMS — جاهز غير مفعّل بعد)
- **Resend** (Edge Email — مخطط)

### DevOps
- **Vercel Pro** — ✅ مفعّل (Paid plan active)
- **GitHub:** iGardenSA/igarden-web (Public)
- **Domain:** igarden.sa (لم يُربط بعد)

---

## 🔴 Blockers الحرجة (Apr 2026)

### Blocker 1: Pitch Deck UTF-8 (للتسويق)
- شرائح 1-3 معطوبة الترميز
- الحل: إعادة بناء في Claude Design (مخطط)

---

## 🎨 الهوية البصرية (إلزامية)

### الألوان (NON-NEGOTIABLE)

```css
/* Primary */
--igarden-primary: #0F3D2E;        /* Deep Forest Green */
--igarden-primary-alt: #1B5E3F;    /* Corporate Green */

/* Accent */
--igarden-accent: #7CB342;         /* Lime Accent */
--igarden-accent-bright: #A5D63F;  /* Bright Lime */

/* Neutrals */
--igarden-bg: #FAFAF7;             /* Cream */
--igarden-text: #1A1A1A;           /* Dark Text */
--igarden-text-secondary: #6B7280; /* Medium Gray */
--igarden-border: #E5E7EB;         /* Light Gray */
```

### قاعدة 60-30-10 (NON-NEGOTIABLE)
- **60%** Cream/White → surfaces, bodies, cards
- **30%** Deep Forest Green → headings, CTAs, nav, footer
- **10%** Lime Accent → AI badges, stats, highlights

### Typography
- **Arabic:** Tajawal (Bold/Medium/Regular)
- **English:** Poppins (SemiBold/Medium) + Inter (Regular)
- **Numbers:** Tajawal Bold / Poppins Bold

### Design Style: Minimalist Eco-Tech
- Generous white space
- 12-column grid
- border-radius: 8-16px
- Soft shadows: `0 2px 8px rgba(15, 61, 46, 0.08)`
- Line icons only (1.5-2px stroke, NOT filled)
- NO emojis in formal outputs
- NO generic stock photography

### الشعار
- اسم الشركة دائماً: **iGarden** (لاتيني — لا "آي جاردن")
- الاسم العربي الرسمي: **الحديقة الذكية**

---

## 📊 الأرقام الرسمية (USE ONLY THESE)

```
Performance:
  95% توفير مياه (إجمالي)
  60% توفير مياه Aeroponic
  50% خفض أسمدة
  60% خفض تكاليف تشغيل
  3x زيادة إنتاجية (عام)
  10x زيادة إنتاجية (Vertical)
  40% كفاءة طاقة (Smart Greenhouses)
  90% إعادة تدوير مياه (Aquaponics)
  45°C+ تحمل مناخي

Fodder:
  98% توفير مياه
  50% خفض تكلفة تغذية
  7 أيام دورة إنتاج

Financial:
  2026: 2.4M SAR / صافي 0.3M
  2027: 6.9M SAR
  2028: 12.5M SAR
  3-year cumulative: +17.3M SAR
  Annual growth: 150%
```

> ⚠️ **لا تخترع أرقاماً.** إذا احتجت رقماً غير موجود هنا، اسأل أولاً.

---

## 🏗️ معمارية النظام

### Smart Hybrid Architecture (المعتمدة)

```
┌─────────────────────────────────────┐
│         igarden.sa (هذا الـ repo)    │
│         Next.js — مؤسسي               │
└──────────────┬──────────────────────┘
               │
        ┌──────┴──────┬──────┬──────┐
        ▼             ▼      ▼      ▼
    shop.*        app.*   learn.*  admin.*
   (Salla)        (P2)    (P2)    (P2)
```

### Subdomains المخططة

| Subdomain | الغرض | الحالة |
|---|---|---|
| igarden.sa | الموقع المؤسسي | P1 — قيد البناء |
| shop.igarden.sa | متجر Salla | P1 — مخطط |
| app.igarden.sa | بوابة عملاء IoT | P2 |
| learn.igarden.sa | مدرسة iGarden | P2 |
| admin.igarden.sa | لوحة إدارة | P2 |
| api.igarden.sa | REST API | P3 |

---

## 🗂️ هيكل المشروع

```
src/
├── app/
│   ├── layout.tsx              ← RTL + Fonts
│   ├── page.tsx                ← Homepage (11 sections)
│   ├── about/page.tsx          ← 6 sections + Founders
│   ├── contact/page.tsx        ← Form + Supabase CRM
│   └── roadmap/page.tsx        ← Timeline + Segments
├── components/
│   ├── sections/               ← 12 section components
│   │   ├── 01-hero.tsx
│   │   ├── 02-trust-bar.tsx
│   │   ├── 02b-achievements.tsx
│   │   ├── 03-problem.tsx
│   │   ├── 04-solution.tsx
│   │   ├── 05-products.tsx
│   │   ├── 06-impact.tsx
│   │   ├── 07-process.tsx
│   │   ├── 08-sectors.tsx
│   │   ├── 09-knowledge.tsx
│   │   ├── 09b-ewax.tsx
│   │   └── 10-final-cta.tsx
│   └── ui/                     ← shadcn components
└── lib/
    ├── constants.ts            ← Brand constants
    ├── supabase.ts             ← Client
    ├── supabase-server.ts      ← Server client
    ├── lead-schema.ts          ← Zod validation
    ├── utils.ts                ← Helpers
    ├── sanity.ts               ← CMS (جاهز غير مفعّل)
    └── hooks/use-in-view.ts    ← Animations
```

---

## 💾 CRM Database (Supabase)

### Tables

```sql
-- Main leads table
leads (
  id uuid PRIMARY KEY,
  full_name text NOT NULL,
  email text,
  phone text NOT NULL,
  type lead_type,
  interest text,
  message text,
  channel lead_channel,
  status lead_status DEFAULT 'new',
  priority lead_priority DEFAULT 'medium',
  source text,
  assigned_to text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Interactions tracking
lead_interactions (
  id uuid PRIMARY KEY,
  lead_id uuid REFERENCES leads(id),
  interaction_type interaction_type,
  notes text,
  created_at timestamptz DEFAULT now()
);
```

### ENUMs

```sql
lead_channel: website | email | whatsapp | phone | linkedin |
              instagram | shop | referral | event | other

lead_status:  new | contacted | qualified | proposal | won | lost

lead_type:    individual | business | government | academic | investor

lead_priority: low | medium | high | urgent

interaction_type: call | email | meeting | whatsapp | note
```

### Security
- **RLS:** `allow_public_insert_leads` (anonymous insert only)
- **Trigger:** `update_updated_at_column()`

---

## 🔌 ربط بالأنظمة الخارجية (R&D Infrastructure)

> 📎 **هذا للمعلومات فقط — التفاصيل الكاملة في Tech Appendix § 3**

### المنتج الفعلي (يصل للعميل)
- **ESP32-U + ESPHome** firmware (igarden-tank)
- **MQTT Topics:** `igarden/<site_id>/sensors/<type>/state`
- **حساسات:** pH (ADS1115) + TDS (UART) + Temp (DS18B20) + Level
- **Relays:** 8 channels (مضخات + دوزرات)

### أدوات R&D الداخلية (لا يراها العميل)
- **Pi 5 (.235):** FastAPI Backend (208 اختبار ناجح)
- **Pi CM5 (.21):** n8n + TimescaleDB + Mosquitto + Portainer
- **HP EliteBook:** Claude Code + تطوير

### التمييز الحاسم (مهم جداً)

```
🔑 Smart OS ≠ FastAPI Backend

Smart OS:
  - وعد تسويقي للعميل
  - يظهر في Pitch Deck والـ marketing
  - منظومة AI متكاملة (مفهوم)

FastAPI Backend:
  - أداة R&D داخلية
  - على Pi 5 في /opt/igarden/
  - port 8080 (ليس 8000 - ESPHome)
  - 208 اختبار ناجح

⚠️ لا تخلط بينهما في أي مخرج تسويقي.
```

---

## 📐 ADRs المعتمدة (تقنية)

> 📎 **التفاصيل الكاملة في Tech Appendix § 6**

| ADR | القرار | Component |
|---|---|---|
| T001 | ESPHome للـ Firmware (لا Arduino) | Firmware |
| T002 | ADS1115 إلزامي لـ pH (سلامة منتج) | Hardware |
| T003 | TDS عبر UART (لا تناظري) | Hardware |
| T004 | Pi OS + FastAPI (لا HAOS) | R&D |
| T005 | Mosquitto systemd (لا Docker) | R&D |
| T006 | FastAPI port 8080 (8000 محتل) | R&D |
| T007 | Scenario Engine — 14 قرار تصميمي | R&D |
| T008 | Backup .img.gz (لا .iso) | R&D |

### Stack web (هذا المستودع)
- ✅ Next.js + TypeScript + Tailwind v4 + shadcn/ui
- ✅ Supabase (Frankfurt) + RLS
- ✅ Sanity.io (جاهز للتفعيل)
- ⏳ Resend (Edge Email — مخطط)

---

## 🚫 ما لا تفعله أبداً

### Code Rules
- ❌ **لا تستخدم localStorage/sessionStorage** في artifacts (محظور بـ Claude.ai)
- ❌ **لا تخترع ألواناً** خارج الـ palette المعتمدة
- ❌ **لا تخلط الخطوط** (Arabic ↔ English) عشوائياً
- ❌ **لا تذكر أسماء منافسين** في النصوص العامة
- ❌ **لا تخترع أرقاماً** غير الأرقام الرسمية
- ❌ **لا تكتب "آي جاردن"** — دائماً "iGarden"

### Git Rules
- ❌ **لا تـ git push** بدون مراجعتي
- ❌ **لا تُعدّل .env** (يحتوي أسرار)
- ❌ **لا تُسرّب** Supabase keys في أي ملف
- ❌ **لا تُعدّل** package.json بدون إخباري

### Architectural Rules
- ❌ **لا تربط** الموقع بـ Pi 5 R&D backend مباشرة
- ❌ **لا تخلط** بين Smart OS (وعد) و FastAPI (أداة)
- ❌ **لا تنشر** بدون اختبار محلي (`npm run dev`)
- ❌ **لا تتجاوز** Brand Guidelines

---

## ✅ ما تفعله دائماً

### Code Quality
- ✅ TypeScript strict mode
- ✅ ESLint + Prettier formatting
- ✅ React Hook Form + Zod validation
- ✅ RTL support للعربية
- ✅ Mobile-first responsive
- ✅ shadcn/ui للمكونات

### Branding
- ✅ استخدم CSS variables من `:root`
- ✅ طبّق قاعدة 60-30-10
- ✅ أيقونات outline (1.5-2px stroke)
- ✅ ظلال خفيفة فقط
- ✅ "iGarden" دائماً لاتيني

### Workflow
- ✅ اقرأ Master Doc + Tech Appendix قبل قرارات معمارية
- ✅ نبّهني عند تضارب طلبي مع الوثائق
- ✅ اختبر محلياً قبل أي push
- ✅ commit messages بالإنجليزية + واضحة
- ✅ سؤالي عند الغموض

---

## 🎯 الأولويات الحالية (Apr 2026)

### P0 — هذا الأسبوع
1. ✅ ~~Vercel Deployment Blocker~~ — محلول (Next 16 + Vercel Pro)
2. 🔴 ربط دومين igarden.sa بـ Vercel
3. 🔴 Pitch Deck v4 (بـ Claude Design)

### P1 — الأسبوع القادم
1. تحميل صور Hero مؤقتة (Unsplash)
2. تنظيف ESLint warnings
3. اختبار Mobile responsive
4. Resend Edge Function للـ Lead notifications
5. لوحة /admin للـ CRM

### P2 — هذا الشهر
1. shop.igarden.sa setup (Salla)
2. WhatsApp BSP integration
3. 5 SEO articles
4. صفحة /investors

---

## 🤝 ربط بالـ Ecosystem

```
iGarden Ecosystem:
├── Master Doc (في iGarden HQ Project) ← المرجع التجاري
├── Tech Appendix (في iGarden HQ Project) ← المرجع التقني
├── Brand Guidelines PDF ← المرجع البصري
├── igarden-web (هذا المستودع) ← الموقع المؤسسي
├── Pi 5 R&D backend ← FastAPI internal
├── Pi CM5 ← n8n automation hub
├── ESP32 firmware ← Production hardware
└── shop.igarden.sa (Salla) ← متجر مستقبلي
```

> هذا المستودع **هو فقط** الموقع المؤسسي.
> لا يحتوي firmware، لا backend R&D، لا automation.

---

## 📞 عند الحاجة

### إذا اقترحت حلاً يخالف الوثائق
1. **توقف**
2. **نبّهني** بوضوح: "هذا يخالف Master § X.X"
3. **اقترح البديل** المتوافق
4. **انتظر قراري**

### إذا واجهت خطأ غير موثق
1. اقترح حلاً
2. اذكر أنه ليس في الوثائق
3. أعرض عليّ توثيقه في Master/Tech Appendix

### إذا طلبت شيئاً خارج خبرتك
- قُلها صراحة
- اقترح من يساعد (محامٍ، محاسب، مطور IoT)

---

## 🔄 آلية تحديث هذا الملف

هذا الملف (CLAUDE.md) يُحدَّث في الحالات التالية:

1. **بعد كل تحديث Master Doc** → تحديث المراجع
2. **بعد كل تحديث Tech Appendix** → تحديث ADRs
3. **عند تغيير Tech Stack** → تحديث القسم
4. **عند ظهور Blockers جديدة** → إضافة + إزالة المحلولة
5. **شهرياً على الأقل** → مراجعة عامة

**صاحب التحديث:** Ali Ghanimah (CEO)
**آخر تحديث:** 2026-04-24
**الإصدار:** v1.2 (متوافق مع Master v1.0.1 + Tech Appendix v1.0)

---

## 📝 ملاحظة شخصية

علي (المؤسس) يعمل في وقت ضيق جداً — الشركة عمرها 3 أسابيع.
كن:
- **حاسماً** في التوصيات
- **موجزاً** في الردود
- **واعياً** أن كل دقيقة مهمة
- **صادقاً** عن حدود قدراتك

شكراً لك.

— علي محمد غنيمة | iGarden CEO
