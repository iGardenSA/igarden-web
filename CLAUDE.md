# CLAUDE.md — Working Memory for Claude Code

> **Version:** v3.0
> **Last Updated:** 2026-05-17
> **Project:** igarden.sa — Intelligent Garden Co. Website
> **Stack:** Next.js 16 · React 19 · Tailwind v4 · Supabase · Vercel

---

## 🚦 Quick Rules (اقرأ هذه أولاً)

### القواعد الذهبية الخمس (لا تُكسَر أبداً)

1. **Primary Slogan:** `ازرع بذكاء` — الشعار الرئيسي في كل سياق
2. **Secondary Slogan:** `نَبني · نُوطّن · نُطوّر` (مع الفتحة على النون)
   - في UI المرئي: تحت Primary بحجم أصغر، كعنصر HTML منفصل
   - في metadata/schema/alt text: **لا يُذكر** (Primary فقط)
   - الشعاران **لا يُجمعان أبداً** في سياق لغوي واحد
3. **أسماء العملاء محظورة علناً** — استخدم "عملاء صناعيون في عدة مناطق سعودية"
4. **لا أرقام مطلقة في Tier 0** — لا 95%/90%/3×/100% في الموقع العام
5. **Discovery قبل أي خطة:** `ls -la + git log -5 + gh pr list + find -maxdepth 2 -type d`

### للسؤال السريع

- ما المسموح/الممنوع في الكتابة؟ → `docs/LEXICON.md`
- ما نوع الجمهور لهذا المحتوى؟ → `docs/TIER-MATRIX.md`
- لماذا هذه القاعدة موجودة؟ → `docs/BRAND-BIBLE.md`
- ما حالة المشروع الحالية؟ → `docs/PROJECT-STATE.md`
- ما الدستور التشغيلي؟ → `docs/CONSTITUTION.md`

---

## 🎯 الهوية المؤسسية (مختصر)

- **الاسم القانوني:** شركة انتيليجنت غاردن (ذات مسؤولية محدودة)
- **العلامة:** iGarden / الحديقة الذكية
- **CR:** 4030579637 · **الموحد:** 7041878278
- **MISA:** 24926249716 · **SAIP:** #423450193 · **الضريبي:** 312554598200003
- **المقر:** جدة · **مرفق R&D:** عسفان (شمال جدة)
- **الموقع:** https://igarden.sa

---

## 🌐 منظومة النطاقات

| النطاق | الغرض | الحالة |
|---|---|---|
| `igarden.sa` | B2B/B2G الرئيسي | منشور (Phase 5) |
| `shop.igarden.sa` | iGarden Home Solutions (B2C على Salla) | تطوير |
| `demo.igarden.sa` | Smart OS Live Demo | منشور |
| `app.igarden.sa` | Pre-order Landing (تطبيق 2027) | منشور |
| `api.igarden.sa` | API | داخلي |
| `n8n.igarden.sa` | n8n Cloud (المعتمد — `.work` legacy) | داخلي |

---

## 📐 معمارية الموقع

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19 + Tailwind v4
- **DB:** Supabase
- **Hosting:** Vercel (Pro plan)
- **Locale:** Arabic-first (RTL)
- **Repo Pattern:** Trunk-based (`main`) + feature branches
- **PR Discipline:** كل ادعاء "merged" يحتاج verification بـ `git log main`

### بنية المجلدات (الراهنة على main)

```
src/
├── app/
│   ├── (home)/                       # الرئيسية
│   ├── about/                        # من نحن
│   ├── services/                     # خدماتنا
│   ├── products/                     # المنتجات (ركائز)
│   ├── how-we-work/                  # كيف نعمل
│   ├── smart-controllers/            # المتحكمات الذكية
│   ├── smart-greenhouses/            # البيوت المحمية الذكية
│   ├── hydroponics/                  # الزراعة المائية
│   ├── osfan-station/                # محطة عسفان ✅
│   ├── for-individuals/              # للأفراد
│   ├── blog/                         # المدوّنة
│   ├── learn/                        # Knowledge Hub (Phase 5) ✅
│   │   ├── when-do-you-need-smart-controller/
│   │   ├── why-hydroponic-fail-summer/
│   │   ├── hydroponic-vs-traditional/
│   │   ├── operational-logs-farm-decisions/
│   │   └── daily-measurements-smart-farm/
│   ├── privacy/                      # Phase 4 ✅
│   ├── terms/                        # Phase 4 ✅
│   ├── compliance-disclaimer/        # Phase 4 ✅
│   ├── data-charter/                 # Phase 4 ✅
│   ├── compliance/                   # الامتثال
│   ├── investors/                    # للمستثمرين
│   └── contact/                      # تواصل
├── components/
│   ├── layout/                       # Hero, Footer, Nav
│   ├── shared/                       # SchemaJsonLd, مشتركات
│   └── sections/                     # WhatWeDontClaim, StatsStrip, etc.
└── lib/                              # constants, utils
```

**التفاصيل الكاملة لكل phase:** `docs/PROJECT-STATE.md`

---

## 🛡️ الانضباط ثلاثي الطبقات (مرجع سريع)

| Tier | الجمهور | السطح | الأرقام المسموحة |
|---|---|---|---|
| **0** | العامة | الموقع، social، press | لا أرقام مطلقة |
| **1** | العملاء المحتملون | Sales decks، RFPs قبل NDA | نسبي + ROI تقريبي |
| **2-A** | المستثمرون والمُسرّعات | Pitch decks (Sunbulah, TASMU, Angels) | projections + margins + disclaimers |
| **2-B** | الشركاء الداخليون | NDA-signed advisors، محامون | كاملة بضوابط |
| **3** | الحوكمة الداخلية | Notion، Board materials | كاملة |

**المصفوفة الكاملة + أمثلة:** `docs/TIER-MATRIX.md`

> 🚨 **هذا الملف (CLAUDE.md) في repo public-readable.** لا تضع فيه أسماء عملاء أو نسب ملكية أو قيم عقود حتى لو "داخلي".

---

## 🚫 المحظورات الجوهرية (في كل الـ Tiers)

1. ❌ أسماء العملاء بالاسم (Khamis, Ghulah, Ahsa, BinLaden) في أي مكان علني
2. ❌ قيم العقود الفردية
3. ❌ نسب الملكية بين المؤسسين
4. ❌ شراكات غير مؤكّدة كمؤكّدة
5. ❌ ادعاءات تفوّقية بلا أساس ("الأول"، "الرائد")
6. ❌ ادعاءات اعتماد حكومي ("معتمد من الوزارة")
7. ❌ ادعاءات صناعية مطلقة ("100% سعودي" — التجميع محلي لكن المكوّنات مستوردة)
8. ❌ ALL CAPS في العربية
9. ❌ `iGarden Sunbulah` (سنبلة برنامج، ليس منتج)
10. ❌ جمع الشعارين في سياق واحد (`ازرع بذكاء — نَبني · نُوطّن · نُطوّر`)

**التفاصيل والبدائل (41 مدخل):** `docs/LEXICON.md`

---

## ⚙️ بروتوكول العمل (Discovery-First)

### قبل أي خطة/تطوير/تعديل

```bash
ls -la                          # الحالة الراهنة
git log --oneline -5            # آخر 5 commits
git status                      # ما المعدّل غير المحفوظ
gh pr list --state all          # PRs المعلّقة والمدمجة
find . -maxdepth 2 -type d      # البنية العامة
```

### القواعد القاطعة

1. ❌ ممنوع اقتراح بنية/ملف/خطة قبل رؤية القرص فعلياً
2. ❌ "merged" دون `git log main` = ادعاء غير موثّق
3. ✅ STOP-GATE بين كل مرحلة — لا تقدّم بدون قرار صريح من علي
4. ✅ Source of Truth: الملف الفعلي > Notion > userMemories > افتراض

### بيئة التطوير الحالية

- **علي يستخدم:** Claude Code Web (المتصفح، عبر GitHub)
- **القرص المحلي** `~/Projects/igarden-web/` متروك منذ 25 أبريل 2026
- **مرجع الحقيقة:** `main` على GitHub، لا القرص المحلي

---

## 📝 قواعد الكتابة والمحتوى

### اللغة
- **الافتراضية:** العربية (RTL)
- **المصطلحات التقنية:** بالإنجليزية حسب السياق
- **النمط:** الخبير الهادئ — لا hype، لا اختصارات مدعاة

### الشعارات (انتباه — هذا حسّاس)
- ✅ `ازرع بذكاء` — Primary، عام (Tier 0/1/2/3)
- ✅ `نَبني · نُوطّن · نُطوّر` — Secondary، عام بشروط
- ✅ `ازرع بذكاء · من جيبك` — للتطبيق فقط (`app.igarden.sa`)
- ✅ `حلول جاهزة · للمنزل` — للمتجر فقط (`shop.igarden.sa`)
- ❌ `ننفّذ · نُوطّن · نُطوّر` — صياغة قديمة خاطئة (لا تستخدم)
- ❌ لا تخلط شعار التطبيق أو المتجر في الموقع الرئيسي

### مفردات معتمدة بدلاً من المحظورة

| محظور | المعتمد |
|---|---|
| "الأول/الرائد" | "شركة سعودية متخصّصة في..." |
| "توفير 95% من المياه" | "تستهدف تقليصاً جوهرياً في استهلاك المياه" |
| "ROI خلال 6 أشهر" | "نموذج عائد الاستثمار يُحتسب فردياً" |
| "4 عملاء/خميس/غولة" | "عملاء صناعيون في عدة مناطق سعودية" |
| "موقع عميل في عسفان" | "مرفق R&D في عسفان" |
| "تصنيع 100% سعودي" | "تصميم وتطوير وتجميع في السعودية · مكوّنات عالمية" |
| "معتمد من الوزارة" | "مصمَّم وفق متطلبات MEWA المعلَنة" |

**القائمة الكاملة (41 مدخل):** `docs/LEXICON.md`

---

## 🧪 Validators & Quality Gates

### قبل أي PR

```bash
npm run lint
npm run type-check
npm run test                    # إن وُجد
```

### Lexicon Validator (مخطط له — Phase 7)

سكريبت يفحص أي ملف `.tsx/.ts/.md` ضد قائمة المصطلحات المحظورة في `docs/LEXICON.md`. يفشل الـ CI إن وجد:
- ❌ "ننفّذ · نُوطّن" (الصياغة القديمة)
- ❌ "الأول" / "الرائد" / "معتمد من الوزارة"
- ❌ "100%" + "سعودي" في نفس الجملة
- ❌ أسماء العملاء (Khamis/Ghulah/Ahsa/BinLaden) في أي ملف public-facing
- ❌ جمع الشعارين في سياق لغوي واحد

---

## 📚 مرجعية القرارات والقواعد

### الوثائق الرسمية (في Notion — Source of Truth الأساسي)

- 📕 [Brand Bible v3.0 — Master Reference](https://www.notion.so/35c5d680dbf681208cbcea7987cea2be)
- 🎨 [Brand Bible v3.1 — Presentation Edition](https://www.notion.so/3605d680dbf68165bd48f28ba0a86e03)
- 🎯 [Brand Bible v3.2 Addendum — Audience Discipline Matrix](https://www.notion.so/3625d680dbf6811ab1b0d4d9dddfa18c)
- 📖 [Approved Lexicon (41 مدخل)](https://www.notion.so/35c5d680dbf681119697e8cadadbca25)
- 📜 [Operating Constitution v3.0](https://www.notion.so/35c5d680dbf68169ba60c2bec5c0f2ee)
- ⚠️ [Brand Compliance Issues](https://www.notion.so/35c5d680dbf681c88d2ff64878b55815)

### النسخ المحلية في هذا الـ repo

- `docs/BRAND-BIBLE.md` — مقتطفات الأهم للتطوير
- `docs/TIER-MATRIX.md` — مصفوفة الجمهور
- `docs/LEXICON.md` — الـ41 مدخلاً المعتمدة
- `docs/CONSTITUTION.md` — Operating Constitution (الفصول التشغيلية)
- `docs/PROJECT-STATE.md` — حالة الـ phases والـ roadmap

> **القاعدة عند التعارض:** Notion يفوز. `docs/` نسخ مرجعية للسرعة، تُحدَّث دورياً.

---

## 🗓️ سجل التحديثات

| الإصدار | التاريخ | التغيير | السبب |
|---|---|---|---|
| **v3.0** | **2026-05-17** | **إعادة كتابة شاملة + Docs split** | **Drift 21 يوماً، 6 PRs، +16 صفحة. الشعار `ننفّذ` متعارض مع الكود. غياب Brand Bible v3.2 + Tier Matrix + Lexicon 41** |
| v2.0 | 2026-04-25 | Stages A-B-C: design system + layout + homepage | — |
| v1.2 | 2026-04-23 | Next 16 + Vercel | — |
| v1.1 | 2026-04-22 | التأسيس | — |

التفاصيل الكاملة: `CHANGELOG_CLAUDE_md.md`

---

## 📞 جهات الاتصال

- **CEO:** علي محمد غنيمة — ali@igarden.sa
- **Head of R&D:** أيمن المخزوم
- **Operations:** محمد الكثيري

---

*🌱 ازرع بذكاء*
