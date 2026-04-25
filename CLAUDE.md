# CLAUDE.md — iGarden Web (igarden.sa)

> **تعليمات لـ Claude Code للعمل في هذا المستودع**
>
> هذا الملف يُقرأ تلقائياً في كل جلسة Claude Code.
> آخر تحديث: 2026-04-24 (متوافق مع Master v1.4 + Pitch v2)
> الإصدار: **v2.0** — إعادة بناء شامل بعد Master Doc v1.4

---

## 📚 الوثائق المرجعية

> ⚠️ **قبل أي قرار معماري، راجع هذه الوثائق في iGarden HQ Project:**

| الوثيقة | الإصدار | الغرض |
|---|---|---|
| **iGarden Master Document** | **v1.4** | المرجع الأعلى — التسميات، Timeline، Tagline، الركائز |
| **iGarden استراتيجية الموقع** | **v3** | Homepage Blueprint + 3 صفحات ركائز + Osfan |
| **iGarden ClaudeCode Brief** | **v2** | تفاصيل التنفيذ كود-بكود للـ Pages · الملف: `.claude/Brief_v2.md` |
| **iGarden Pitch Sunbolah** | **v2** | المحتوى التسويقي المُعتمد + الأرقام |
| **Brand Guidelines** | v1.0 | الهوية البصرية الرسمية (قيد التحديث لـ v1.4) |

### قاعدة الفصل المرجعي

```
تموضع + تسميات + تاريخ        →  Master Doc v1.4
بنية الموقع + الصفحات          →  استراتيجية الموقع v3
تفاصيل كود كل صفحة             →  ClaudeCode Brief v2 (.claude/Brief_v2.md)
المحتوى التسويقي + الأرقام     →  Pitch v2
الألوان + الخطوط + الشعار      →  Brand Guidelines
```

**عند تضارب بين المراجع:** الأحدث يفوز. Master v1.4 > باقي المراجع إلا في تفاصيل تقنية محدّدة.

---

## 🏢 هوية الشركة (v1.4 — حرج)

### ⚠️ التسميات الصحيحة (لا خلط)

```
الاسم القانوني (عربي):     شركة انتيليجنت غاردن
الاسم القانوني (إنجليزي):  Intelligent Garden Company
الكيان:                    ذات مسؤولية محدودة (تُكتب بعد الاسم)

العلامة التجارية (عربي):   الحديقة الذكية
العلامة التجارية (لاتيني): iGarden  (دائماً CamelCase — لا "آي جاردن")

Tagline الرسمي:           ازرع بذكاء · Plant Smart
```

### استخدام التسميات حسب السياق

| السياق | التسمية المُستخدمة |
|---|---|
| Hero + Nav + محتوى الموقع | `iGarden` / `الحديقة الذكية` |
| Footer + Legal pages | `شركة انتيليجنت غاردن (Intelligent Garden Company)` |
| Meta tags + Schema.org | `iGarden — الحديقة الذكية` |
| Email templates | `iGarden — ازرع بذكاء` |
| Copyright notice | `© 2026 شركة انتيليجنت غاردن` |
| Business registration refs | `شركة انتيليجنت غاردن (ذات مسؤولية محدودة)` |

### التموضع الرسمي (v1.4 — حرج)

> **iGarden = شركة سعودية لتطوير المزارع وأنظمة التحكم الزراعي الذكي**
>
> **ننفّذ · نُوطّن · نُطوّر**

**⚠️ التموضع القديم «AI First» مُلغى نهائياً.** لا تُنتج أيّ نصّ يعتمد عليه.

كل قرار تصميمي/معماري/نصّي يجب أن يُبرز:
1. **ننفّذ** — مقاول متخصّص من الحساس إلى الحصاد
2. **نُوطّن** — تقنية عالمية + مدخلات سعودية + تصنيع محلي
3. **نُطوّر** — R&D مستمرّ كسلاح داخلي

---

## 📅 Timeline الشركة (v1.4 — جديد)

> ⚠️ **لا تذكر «شركة عمرها 3 أسابيع» — استخدم الصياغات المُعتمدة.**

| السنة | المرحلة |
|---|---|
| **2024** | مرحلة الفكرة — تسجيل أولي بلا نشاط |
| **2025** | مرحلة النماذج — محطّة عسفان + 5 ورش عمل |
| **2026** | الانطلاق الرسمي — ترخيص MISA (فبراير) + تشغيل (أبريل) |

### الصياغات المُعتمدة

| المكان | الصياغة |
|---|---|
| Hero Eyebrow | `منذ 2024 — AgriTech سعودية ريادية` |
| Stats Strip | `3+ سنوات من التطوير` |
| About Page | Timeline بصري 2024 → 2025 → 2026 |
| Email Signature | `iGarden — تأسّست 2024` |
| Meta description | `شركة سعودية منذ 2024، إطلاق رسمي 2026` |

**المبدأ الذهبي:** نُبرز الحقيقة الكاملة بالترتيب الذي يخدمنا — لا نخلق حقيقة موازية. الإيرادات والعقود تُنسب لـ 2026، الرحلة تُنسب لـ 2024-2025.

---

## 🎯 الركائز الثلاث للمنتج (v1.4 — هيكل جديد)

```
┌──────────────────────────┬──────────────────────────┬──────────────────────────┐
│  1. Smart Controllers ⭐  │  2. Smart Greenhouses    │  3. Hydroponic Systems   │
│  (Flagship)               │                          │  (يشمل iGarden Tower)    │
│  /products/               │  /products/              │  /products/              │
│  smart-controllers        │  smart-greenhouses       │  hydroponics             │
└──────────────────────────┴──────────────────────────┴──────────────────────────┘

منتجات تكميلية: Hydroponic Fodder + Aquaponics (بطاقات في الرئيسية فقط)
```

### قواعد الهيكل

- ✅ Smart Controllers = **Flagship** (المنتج الرائد — Moat التقني)
- ✅ iGarden Tower **داخل** صفحة Hydroponics (بمساحة بارزة + قصّة توطين)
- ❌ **لا تُنتج** iGarden Tower كبطاقة مستقلّة في `/products`
- ✅ Hydroponic Fodder + Aquaponics = **منتجات تكميلية** (رئيسية مهمّة، لا صفحات تفصيلية في المرحلة 1)

### قصّة تَوطين iGarden Tower (للمحتوى)

```
المصدر:    نظام Aeroponics عالمي
التَوطين:  مدخلات محلية + تصنيع سعودي + اختبار في +45°C
لماذا:     لأنّ الحلّ المستورد لا يصمد في مناخنا
النتيجة:   نموذج صناعي مُسجَّل SAIP #423450193
```

---

## 🏭 الأصول التشغيلية

### محطّة عسفان للتجارب والتطوير

- **الموقع:** عسفان، شمال جدة
- **الدور:** المختبر الميداني الرئيسي — ليست محمية تجارية
- **التأسيس:** 2025
- **الإنجازات:** 5+ ورش عمل + نماذج متعدّدة Hydroponics + اختبار Smart Controllers Prototypes
- **الصور:** متوفّرة (تُستخدم في صفحة `/osfan-station` + Pitch)

### ⚠️ ممنوع استخدام الادعاءات القديمة

- ❌ «5 محميات تشغيلية في جدة»
- ❌ «عملاء أوائل» للمحميات التجريبية
- ❌ «حضور في مكة والمدينة»
- ✅ «محطّة عسفان — المختبر الميداني الرئيسي»
- ✅ «5 ورش عمل مُنفَّذة»
- ✅ «نماذج قيد الاختبار»

---

## 🛠️ Tech Stack

### Frontend (هذا الـ repo)
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
  - ⚠️ PDPL compliance review pending (P1)
- **Resend** (Edge Email — مخطط P1)
- ❌ ~~Sanity.io~~ — **محذوف نهائياً** (حلّ 28 ثغرة أمنية في 24 أبريل)

### DevOps
- **Vercel Pro** — ✅ مفعّل (Paid plan active)
- **GitHub:** iGardenSA/igarden-web (Public)
- **Domain:** igarden.sa — ✅ مربوط عبر Vercel DNS

### المنظومة الموسّعة (خارج هذا الـ repo)

> 📎 **للمعلومات فقط — لا يدخل هذا الـ repo**

- **Google Workspace** — Email + Drive + Calendar
- **Notion Team** — Tasks + Knowledge Base + CRM View (قيد الإعداد)
- **n8n على Raspberry Pi 5** — Automation Hub (قيد الإعداد)
- **shop.igarden.sa** — CNAME إلى سلة (P2 بعد سنبلة)
- **demo.igarden.sa** — Smart OS Demo (منفصل، يعمل ✅)

---

## 🔴 Blockers الحرجة (24 أبريل 2026)

### Blocker 1: إعادة بناء الموقع بالتموضع الجديد 🔴
- الموقع الحالي مبني على تموضع «AI First» المُلغى
- يحتاج إعادة بناء Homepage + إضافة 3 صفحات ركائز + صفحة Osfan
- **المرجع:** `.claude/Brief_v2.md`
- **الحالة:** في الانتظار — هذا الـ Blocker الرئيسي لـ Claude Code

### Blocker 2: تسجيل العلامة التجارية 🟠
- العلامة (iGarden / الحديقة الذكية / ازرع بذكاء) غير مُسجَّلة في SAIP
- مخاطرة قانونية + ضعف Pitch سنبلة
- **الخطوة الأولى:** استشارة محامي ملكية فكرية
- **التكلفة المتوقّعة:** 10-15K ريال

### Blocker 3: جلسة تصوير الفريق 🟡
- صور عسفان متوفّرة ✅
- صور الفريق الثلاثي غير متوفّرة بجودة احترافية
- مطلوبة لـ `/about` + Pitch v2 + LinkedIn

### ✅ Blockers محلولة
- ~~Vercel Deployment~~ — حُلّ (Vercel Pro مفعّل)
- ~~Sanity.io ثغرات أمنية~~ — حُلّ (حُذف نهائياً)
- ~~Pitch Deck UTF-8~~ — حُلّ (Pitch v2 جاهز)

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
- **10%** Lime Accent → stats, badges, highlights

### Typography

- **Arabic:** Tajawal (Bold/Medium/Regular)
- **English:** Poppins (SemiBold/Medium) + Inter (Regular)
- **Numbers:** Tajawal Bold / Poppins Bold
- **داخل RTL للأرقام/اللاتينية:** استخدم `<span dir="ltr">iGarden</span>`

### Design Style: Minimalist Eco-Tech

- Generous white space
- 12-column grid
- border-radius: 8-16px
- Soft shadows: `0 2px 8px rgba(15, 61, 46, 0.08)`
- Line icons only (1.5-2px stroke, NOT filled)
- NO emojis in formal outputs
- NO generic stock photography — استخدم صور عسفان الحقيقية

---

## 📊 الأرقام الرسمية (USE ONLY THESE)

### الأداء والاستدامة

```
المياه والاستدامة:
  95% توفير مياه (إجمالي iGarden Tower)
  98% توفير مياه (Hydroponic Fodder)
  90% إعادة تدوير (Aquaponics)

الإنتاجية:
  3× زيادة إنتاجية (Tower — المرجع الأساسي)
  10× زيادة إنتاجية (Vertical Systems)
  40% كفاءة طاقة (Smart Greenhouses)

المناخ:
  +45°C تحمل ميداني (اختُبر في عسفان)

Smart Controllers:
  208 Unit Tests passing
  Raspberry Pi 5 + ESP32
  pH/EC/TDS/حرارة/رطوبة
```

### المالية (مُحدَّث في Pitch v2)

```
2026: 2.4M ريال / صافي -0.5M
2027: 6.9M ريال / صافي +1.0M / Break-even Q2
2028: 12M ريال / صافي +3.5M / توسّع خليجي

Cumulative 3-year: 21.3M ريال
Recurring Revenue: 40% (SaaS + Maintenance)
```

### The Ask

```
Sunbolah Grant: 150,000 ريال (P0 الآن)
  - 50% Smart Controllers (75K)
  - 25% Osfan Station (37.5K)
  - 15% Marketing + Web (22.5K)
  - 10% Legal + Trademark (15K)

Seed Round: 2.0M ريال (Q4 2026)
  - مقابل 15-20% حصة (تقديرية)
  - للتوسّع + CTO + SaaS platform
```

### تراخيص ومعرّفات

```
MISA #24926249716
Entity ID #1490078
SAIP #423450193 (iGarden Tower)
Tax #312554598200003
Capital: 100,000 SAR
```

> ⚠️ **لا تخترع أرقاماً.** إذا احتجت رقماً غير موجود هنا، اسأل أولاً أو راجع `iGarden_Master_v1_4.md`.

---

## 🏗️ معمارية النظام

### Smart Hybrid Architecture (المعتمدة)

```
┌─────────────────────────────────────┐
│         igarden.sa (هذا الـ repo)    │
│         Next.js — مؤسسي B2B/B2G       │
│         3 ركائز + Osfan Station       │
└──────────────┬──────────────────────┘
               │
        ┌──────┼──────┬──────┬──────┐
        ▼      ▼      ▼      ▼      ▼
    shop.*  demo.*  app.* learn.* admin.*
   (Salla) (✅ حيّ) (P2)   (P2)    (P2)
   B2C     Demo     IoT  أكاديمية  CRM
```

### Subdomains

| Subdomain | الغرض | الحالة |
|---|---|---|
| igarden.sa | الموقع المؤسسي (هذا الـ repo) | ✅ منشور (يُعاد بناؤه) |
| demo.igarden.sa | Smart OS interactive demo | ✅ حيّ ومنفصل |
| shop.igarden.sa | متجر B2C (CNAME → Salla) | ⏳ P2 — بعد سنبلة |
| app.igarden.sa | بوابة عملاء IoT | ⏳ P2 |
| learn.igarden.sa | أكاديمية iGarden | ⏳ P2 |
| admin.igarden.sa | لوحة CRM داخلية | ⏳ P2 |
| api.igarden.sa | REST API | ⏳ P3 |

### قواعد Pi vs Cloud

**ما يسكن السحابة (Source of Truth):**
- Supabase — كل بيانات العملاء
- Google Drive — كل الوثائق الرسمية
- Vercel — الموقع والمتجر
- Notion — المهام والمعرفة

**ما يسكن Pi (Operational):**
- Smart OS Backend (FastAPI)
- n8n Automation Hub
- MQTT Broker
- Redis cache

> ⚠️ **لا تربط** الموقع بـ Pi مباشرة — عبر Supabase + APIs فقط.

---

## 🗂️ هيكل المشروع (بعد إعادة البناء v1.4)

```
src/
├── app/
│   ├── layout.tsx                       ← RTL + Fonts + Schema.org
│   ├── page.tsx                         ← Homepage (12 sections)
│   ├── about/page.tsx                   ← 8 sections + Timeline
│   ├── products/
│   │   ├── page.tsx                     ← Products overview (3 pillars)
│   │   ├── smart-controllers/page.tsx   ← Flagship ⭐
│   │   ├── smart-greenhouses/page.tsx
│   │   └── hydroponics/page.tsx         ← يشمل iGarden Tower
│   ├── osfan-station/page.tsx           ← 🆕 صفحة بارزة
│   ├── contact/page.tsx                 ← Form + Supabase CRM
│   ├── blog/page.tsx                    ← Academy content
│   ├── sitemap.ts                       ← 🆕
│   └── robots.ts                        ← 🆕
├── components/
│   ├── layout/
│   │   ├── Navigation.tsx               ← Top nav (new structure)
│   │   └── Footer.tsx                   ← 4 columns + legal
│   ├── sections/                        ← Homepage sections
│   │   ├── HeroSection.tsx              ← «ننفّذ · نُوطّن · نُطوّر»
│   │   ├── TrustBar.tsx
│   │   ├── MethodologySection.tsx       ← 3 verbs
│   │   ├── ThreePillarsSection.tsx      ← الركائز الثلاث
│   │   ├── ComplementaryProducts.tsx    ← Fodder + Aquaponics
│   │   ├── OsfanStationPreview.tsx
│   │   ├── SmartOSDemoSection.tsx       ← ربط demo.igarden.sa
│   │   ├── StatsStrip.tsx
│   │   ├── HowWeWork.tsx
│   │   ├── KnowledgeSection.tsx
│   │   └── FinalCTA.tsx
│   ├── SchemaOrg.tsx                    ← 🆕 JSON-LD
│   └── ui/                              ← shadcn components
└── lib/
    ├── constants.ts                     ← Brand constants (v1.4)
    ├── supabase.ts                      ← Client
    ├── supabase-server.ts               ← Server client
    ├── lead-schema.ts                   ← Zod validation
    ├── utils.ts                         ← Helpers
    └── hooks/use-in-view.ts             ← Animations
```

### Navigation Structure (v1.4)

```tsx
const NAV_ITEMS = [
  { label: 'الرئيسية', href: '/' },
  {
    label: 'المنتجات',
    href: '/products',
    children: [
      { label: 'Smart Controllers', href: '/products/smart-controllers', badge: 'Flagship' },
      { label: 'المحميات الذكية', href: '/products/smart-greenhouses' },
      { label: 'أنظمة الزراعة المائية', href: '/products/hydroponics' },
    ]
  },
  { label: 'محطة عسفان', href: '/osfan-station' },
  { label: 'من نحن', href: '/about' },
  { label: 'الأكاديمية', href: '/learn' },
  { label: 'المدونة', href: '/blog' },
  { label: 'تواصل', href: '/contact' },
];

// CTA ثابت في Nav:
// { label: 'احجز استشارة مجانية', href: '/contact', variant: 'lime' }
```

**⚠️ لا يوجد رابط «متجر» أو ذكر لـ «منزلي» في Navigation الرئيسي.** القطاع المنزلي يظهر ثانوياً داخل صفحات Greenhouses + Hydroponics فقط.

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
  -- Sync metadata for n8n ↔ Notion
  notion_page_id text,
  last_synced_at timestamptz,
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
- **Service Role:** للـ n8n Workflows فقط

---

## 🔌 ربط بالأنظمة الخارجية (R&D Infrastructure)

> 📎 **هذا للمعلومات فقط — التفاصيل الكاملة في Master Doc §8.7**

### المنتج الفعلي (يصل للعميل)

- **ESP32-U + ESPHome** firmware (igarden-tank)
- **MQTT Topics:** `igarden/<site_id>/sensors/<type>/state`
- **حساسات:** pH (ADS1115) + TDS (UART) + Temp (DS18B20) + Level
- **Relays:** 8 channels (مضخات + دوزرات)

### أدوات R&D الداخلية (لا يراها العميل)

- **Pi 5 (.235):** FastAPI Backend (208 اختبار ناجح) + n8n Automation Hub
- **Pi CM5 (.21):** TimescaleDB + Mosquitto + Portainer
- **HP EliteBook:** Claude Code + تطوير

### التمييز الحاسم (مهم جداً)

```
🔑 Smart OS ≠ FastAPI Backend

Smart OS:
  - وعد تسويقي للعميل
  - يظهر في Pitch Deck + demo.igarden.sa
  - منظومة تحكم ذكي متكاملة (مفهوم)

FastAPI Backend:
  - أداة R&D داخلية
  - على Pi 5 في /opt/igarden/
  - port 8080 (ليس 8000 - ESPHome)
  - 208 اختبار ناجح

⚠️ لا تخلط بينهما في أي مخرج تسويقي على الموقع.
```

---

## 📐 ADRs المعتمدة

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
| **T009** | **n8n ذاتي الاستضافة على Pi** (Automation Hub) | **DevOps (v1.3)** |
| **T010** | **Notion Team بدل ClickUp** (Company ops) | **Tools (v1.3)** |
| **T011** | **shop.igarden.sa عبر CNAME → سلة** (لا إعادة بناء متجر) | **Architecture (v1.2)** |
| **T012** | **iGarden Tower داخل Hydroponics** (لا منتج مستقلّ) | **Product (v1.2)** |
| **T013** | **Respond.io مُؤجَّل** (WhatsApp Business App حالياً) | **Tools (v1.3)** |
| **T014** | **Sanity.io محذوف نهائياً** (28 ثغرة أمنية) | **Web Stack (v1.4)** |

### Web Stack (هذا المستودع)

- ✅ Next.js 16.2.4 + TypeScript + Tailwind v4 + shadcn/ui
- ✅ Supabase (Frankfurt) + RLS
- ✅ Vercel Pro (paid, active)
- ❌ ~~Sanity.io~~ — محذوف نهائياً
- ⏳ Resend (Edge Email — P1)

---

## 🚫 ما لا تفعله أبداً

### Positioning & Content

- ❌ **لا تذكر «AI First»** أو «شركة ذكاء اصطناعي» كتموضع أساسي
- ❌ **لا تدّعي «5 محميات تشغيلية»** — الأصل هو محطّة عسفان
- ❌ **لا تدّعي عملاء قبل 2026** — Timeline يحترم الحقيقة
- ❌ **لا تذكر iGarden Tower كمنتج مستقلّ** في `/products` — هو داخل Hydroponics
- ❌ **لا تُنتج «شركة 3 أسابيع»** — استخدم «منذ 2024 · 3+ سنوات تطوير»
- ❌ **لا تذكر القطاع المنزلي في Hero أو Nav** — ثانوي فقط داخل صفحات Greenhouses/Hydroponics
- ❌ **لا تدّعي العلامة التجارية «مسجَّلة»** — الصياغة: «قيد التسجيل الرسمي»

### Code Rules

- ❌ **لا تستخدم localStorage/sessionStorage** في artifacts (محظور بـ Claude.ai)
- ❌ **لا تخترع ألواناً** خارج الـ palette المعتمدة
- ❌ **لا تخلط الخطوط** (Arabic ↔ English) عشوائياً
- ❌ **لا تذكر أسماء منافسين** في النصوص العامة
- ❌ **لا تخترع أرقاماً** غير الأرقام الرسمية أعلاه
- ❌ **لا تكتب «آي جاردن»** — دائماً `iGarden` (CamelCase)
- ❌ **لا تستخدم «الحديقة الذكية» كاسم قانوني** — هي علامة تجارية فقط
- ❌ **لا تستخدم Sanity.io imports** — الحزمة محذوفة

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
- ✅ RTL support (`dir="rtl"` على `<html>`)
- ✅ Mobile-first responsive (اختبار على 375px أولاً)
- ✅ shadcn/ui للمكونات
- ✅ Server Components افتراضياً، Client Components فقط عند الحاجة

### Branding

- ✅ استخدم CSS variables من `:root`
- ✅ طبّق قاعدة 60-30-10
- ✅ أيقونات outline (1.5-2px stroke)
- ✅ ظلال خفيفة فقط
- ✅ `iGarden` دائماً لاتيني (`<span dir="ltr">iGarden</span>` داخل RTL)
- ✅ Tagline `ازرع بذكاء · Plant Smart` في Hero + Footer + Signatures

### SEO (v1.4 — إضافات مطلوبة)

- ✅ Meta tags شاملة (title + description + OG + Twitter)
- ✅ Schema.org JSON-LD (Organization + Product + LocalBusiness)
- ✅ `sitemap.ts` + `robots.ts`
- ✅ Canonical URLs
- ✅ OG Images (1200×630) لكل صفحة رئيسية

### Workflow

- ✅ اقرأ Master Doc v1.4 + ClaudeCode Brief قبل قرارات معمارية
- ✅ نبّهني عند تضارب طلبي مع الوثائق
- ✅ اختبر محلياً قبل أي push
- ✅ commit messages بالإنجليزية + واضحة
- ✅ سؤالي عند الغموض

---

## 🎯 الأولويات الحالية (Apr 2026)

### P0 — هذا الأسبوع (حرج)

1. 🔴 **إعادة بناء الموقع بالتموضع الجديد v1.4**
   - Homepage (12 sections جديدة)
   - 3 صفحات ركائز
   - صفحة `/osfan-station` جديدة
   - Navigation + Footer جديدان
   - **المرجع:** `.claude/Brief_v2.md`

2. 🔴 **إضافة Meta + Schema.org + sitemap + robots**

3. 🟠 **استشارة محامي ملكية فكرية** (لتسجيل العلامة)

### P1 — الأسبوع القادم

1. جلسة تصوير الفريق الثلاثي (صور عسفان متوفّرة)
2. Resend Edge Function للـ Lead notifications
3. لوحة `/admin` للـ CRM (بعد n8n setup)
4. اختبار Mobile responsive شامل
5. Lighthouse Score ≥ 90 لكل المحاور

### P2 — هذا الشهر (بعد سنبلة)

1. تنفيذ shop.igarden.sa (CNAME → سلة) + إعادة تصميم المتجر
2. WhatsApp BSP integration (Respond.io عند تحقّق Triggers)
3. 5 SEO articles للمدوّنة
4. صفحة `/investors`
5. Newsletter + 3 Lead Magnets

---

## 🤝 ربط بالـ Ecosystem

```
iGarden Ecosystem:
├── Master Doc v1.4 (HQ Project) ←────── المرجع الأعلى
├── استراتيجية الموقع v3 ←──────────── بنية الصفحات
├── ClaudeCode Brief v1 ←─────────────── تعليمات التنفيذ
├── Pitch Sunbolah v2 ←──────────────── المحتوى التسويقي
├── n8n Setup Brief ←──────────────── Pi automation
├── Notion Setup Brief ←───────────── Company ops
├── Supabase Sync Brief ←──────────── Data layer
├── Brand Guidelines v1.4 ←────────── البصري (قيد التحديث)
├── igarden-web (هذا المستودع) ←──── الموقع المؤسسي
├── Pi 5 R&D backend ←────────────── FastAPI internal
├── Pi 5 n8n ←────────────────────── Automation Hub (قيد الإعداد)
├── ESP32 firmware ←──────────────── Production hardware
├── demo.igarden.sa ←──────────────── Smart OS Demo (منفصل ✅)
└── shop.igarden.sa ←──────────────── سلة B2C (P2)
```

> هذا المستودع **هو فقط** الموقع المؤسسي.
> لا يحتوي firmware، لا backend R&D، لا automation، لا shop.

---

## 📞 عند الحاجة

### إذا اقترحت حلاً يخالف الوثائق

1. **توقف**
2. **نبّهني** بوضوح: «هذا يخالف Master v1.4 §X.X»
3. **اقترح البديل** المتوافق
4. **انتظر قراري**

### إذا واجهت خطأ غير موثق

1. اقترح حلاً
2. اذكر أنه ليس في الوثائق
3. أعرض عليّ توثيقه في Master Doc القادم

### إذا طلبت شيئاً خارج خبرتك

- قُلها صراحة
- اقترح من يساعد (محامٍ، محاسب، مطور IoT)

---

## 🔄 آلية تحديث هذا الملف

هذا الملف (CLAUDE.md) يُحدَّث في الحالات التالية:

1. **بعد كل تحديث Master Doc** → تحديث المراجع + التسميات + الأرقام
2. **عند تغيير Tech Stack** → تحديث القسم + ADRs
3. **عند ظهور Blockers جديدة** → إضافة + إزالة المحلولة
4. **شهرياً على الأقل** → مراجعة عامة

**صاحب التحديث:** Ali Ghanimah (CEO)
**آخر تحديث:** 2026-04-24 (متأخّر ليلاً)
**الإصدار:** v2.0 (متوافق مع Master v1.4 + Pitch v2 + Brand v1.4 قيد الإنجاز)

---

## 📝 ملاحظة شخصية

علي (المؤسس) يعمل في وقت ضيق — الشركة في مرحلة حرجة (الإعداد لسنبلة).

كن:
- **حاسماً** في التوصيات
- **موجزاً** في الردود
- **واعياً** أن كل دقيقة مهمة
- **صادقاً** عن حدود قدراتك
- **حريصاً** على التموضع الجديد (ننفّذ · نُوطّن · نُطوّر) في كل مخرج

شكراً لك.

— علي محمد غنيمة | iGarden CEO
