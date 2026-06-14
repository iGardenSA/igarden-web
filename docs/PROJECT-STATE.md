# Project State — igarden.sa

> **Last Updated:** 2026-06-13
> **Branch of Truth:** `main`
> **Deployment:** Vercel (Pro plan) — auto-deploy on `main`

---

## 🎯 الحالة الجوهرية

main متوافق مع Lexicon بعد دمج PRs #30 → #40. دفعة 1 يونيو 2026 (#36 «مواءمة الموقع العام مع Brand Stack v4» · #37 «تبسيط tagline الفوتر العام» · #38 «تحسين وضوح الشعار» · #39 «توحيد lockup الشعار (الرئيسية + الصفحات الداخلية)» · #40 «إزالة metrics block من الرئيسية + بطاقة الحلول الشمسية») — جميعها مدموجة. ثم دفعة مايو (#35 «webmanifest dual-slogan» 28 مايو · #34 «إزالة 208 العامة + فصل AR/EN slogan» 23 مايو · #33 «visit-form leads schema» 19 مايو · #32 «CLAUDE.md v3 + docs split» 17 مايو). الموقع منشور، الـ legal pages مكتملة، Knowledge Hub منشور، صفحة عسفان موجودة.

**◐ PRs مفتوحة (غير مدموجة بعد — لا تُحتسب على `main`، حالة 2026-06-13):**
- **#41** — fix(seo) pass 1: OG images + sitemap coverage + robots OG allow
- **#42** — fix(lexicon) pass 2: أرقام `/learn` + «ريادية»→«متخصّصة» (مكدّس على #41)
- **#43** — docs: طبقة حوكمة SEO + مؤشّر CLAUDE.md (الفرع الحالي وقت رصد هذه الحالة)

**ما لا يوجد بعد:** صفحة `/asfan` كـ Case Study كامل (الحالية `/osfan-station` placeholder/coming-soon).

**◐ صفحات منشورة غير مذكورة سابقاً في هذا الملف (وصفي — يحتاج تأكيد علي للتصنيف):**
- `/investors` — صفحة المستثمرين (محتوى تعريفي + توزيع تمويل + disclaimers · كانت في sitemap)
- `/roadmap` — خارطة الطريق
- `/fact-sheet` — بيانات الشركة الرسمية
- `/products/smart-os` — صفحة منصة Smart OS
- `/products/iot` — صفحة طبقة IoT/الحساسات
- `/app` — يُعيد التوجيه إلى `app.igarden.sa`

---

## ✅ Phases المُنجَزة

### Phase 1-3 — Foundation (مارس-أبريل 2026)
- Information Architecture
- Design System (tokens, palette, typography)
- Homepage v1
- Stack: Next.js 16 + React 19 + Tailwind v4

### Phase 3.5 — Smart OS Integration ✅
**PRs:** #13 + #15 + #19 | **Commit:** `3a4e908`
- Integration مع Smart OS demo
- Hero refinement
- Nav 6 elements: الرئيسية · خدماتنا · عسفان · للأفراد · المدوّنة · تواصل

### Phase 4 — Legal Pages ✅
**PR:** #25 | **Date:** 2026-05-13
- `/privacy` (423 سطر)
- `/terms` (268 سطر)
- `/compliance-disclaimer` (208 سطر)
- `/data-charter` (273 سطر)

### Phase 4.5 — Completion ✅
**PR:** #28 | **Date:** 2026-05-14
- Team roles
- B2C strip
- 90% claim refinement

### Phase 5 — Knowledge Hub ✅
**PR:** #27/29 | **Date:** 2026-05-13/15
- `/learn` (hub, 40 سطر)
- 5 educational articles (321-362 سطر each):
  - `/learn/when-do-you-need-smart-controller`
  - `/learn/why-hydroponic-fail-summer`
  - `/learn/hydroponic-vs-traditional`
  - `/learn/operational-logs-farm-decisions`
  - `/learn/daily-measurements-smart-farm`

### Brand Discipline Fixes ✅
- **PR #30** (2026-05-17): إصلاح هرميّة الشعار في Footer + Homepage + SchemaJsonLd
- **PR #31** (2026-05-17): Lexicon sweep — 4 metadata slogans + `100% سعودي` + dead code + `الحفاظ 24/7`

### Brand Stack v4 Alignment ✅
**PRs:** #36 → #40 | **Date:** 2026-06-01 | **Merge:** merge-commit (لا squash — انظر «ملاحظة استراتيجية الدمج» أدناه)
- **#36** — مواءمة المحتوى العام مع Brand Stack v4
- **#37** — تبسيط الـ tagline العام في الفوتر
- **#38** — تحسين وضوح الشعار في الهيدر
- **#39** — توحيد lockup الشعار بين الرئيسية والصفحات الداخلية
- **#40** — إزالة metrics block من الرئيسية + إضافة بطاقة الحلول الشمسية

> ملاحظة محتوى (◐ — تنتظر علي): «Brand Stack v4» مفهوم جديد دخل عبر #36 وليس له بعدُ مدخل تعريفي في هذا الملف ولا في `docs/`. هل يحتاج توثيقاً مستقلاً؟

---

## 🟡 Phase 6 — Audience Routing & Asfan Case Study (التالي)

**الحالة:** تخطيط
**الأولوية:** P1 بعد TASMU
**الموعد المقترح:** 21 مايو 2026 +

### النطاق

1. **صفحة `/asfan` كـ Case Study كامل**
   - استبدال `/osfan-station` الحالية (placeholder)
   - قصة كاملة: الموقع + المناخ + R&D + الدروس
   - أصول بصرية: صور، فيديو، قراءات حساسات
   - يخدم 3 جماهير في صفحة واحدة (مستثمر + جهة حكومية + B2B)

2. **Audience Routing في Hero**
   - CTAs مفصولة:
     - "للمؤسسات والمزارع" → `/services`
     - "للجهات الحكومية" → `/gov` (جديد)
     - "للأفراد" → `shop.igarden.sa`

3. **صفحة `/gov` للجهات الحكومية**
   - ربط صريح برؤية 2030 + كفاءة المياه + الأمن الغذائي
   - التراخيص بشكل بارز (MISA + SAIP)
   - CTA: "طلب عرض جهة حكومية"

### المتطلّبات قبل البدء
- ✅ Lexicon v3.2 محدّث ومُفعّل
- ✅ main نظيف
- 🟡 أصول بصرية لعسفان (صور + قراءات) — يحتاج جلسة منفصلة
- 🟡 تأكيد روابط رؤية 2030 وMEWA (مصادر دقيقة)

---

## 🟡 Phase 7 — Lexicon CI Validator (مستقبل)

**الحالة:** فكرة موثَّقة، لم تُجدول
**الأولوية:** P2 (يحمي من تكرار Drift)

### النطاق المُقترح

سكريبت `npm run lexicon:check` يفشل CI إن وُجد:

```javascript
// نماذج من القواعد المُقترحة
- /ننفّذ · نُوطّن/         // الشعار القديم الخاطئ
- /100%\s*سعودي/            // ادعاء مطلق محظور
- /الأول في|الرائد/         // ادعاءات تفوّقية
- /معتمد من الوزارة/         // ادعاء اعتماد كاذب
- /Khamis|Ghulah|Ahsa|BinLaden/  // أسماء عملاء
- /ازرع بذكاء.*—.*نَبني/    // جمع الشعارين
- /نبني · نُوطّن/            // إملاء خاطئ (بلا فتحة)
```

### الفائدة
يمنع Drift في الكود قبل وصوله لـ main. يحوّل اكتشاف المخالفات من اكتشاف بشري دوري إلى فحص آلي مستمر.

---

## ⏳ Blockers الحالية

**لا blockers حالياً.** main مستقر، Lexicon مطبَّق، التطوير جاهز للمضي.

---

## 🤔 Pending Decisions

| القرار | السياق | الحالة |
|---|---|---|
| Co-CEO structure | بنية القيادة بين الشركاء الثلاثة | معلّق منذ 2026-05-11 |
| B2C في الرئيسية | حجم/موضع iGarden Home Solutions في الموقع الرئيسي | معلّق |

**ملاحظة:** القرار "ترقية الشعار لـ Tier 0" — كان معلّقاً، **حُسم في 2026-05-17** بقرار CEO. ([Decision DB](https://www.notion.so/3625d680dbf68126b5eac89cde4d0351))

---

## 🌿 الفروع المعلّقة (Branch Hygiene)

### مفتوحة وذات صلة
- `refactor/claude-md-v3-docs-split` — Stage A لـ CLAUDE.md v3.0 (هذا الـ PR)

### معلّقة بحاجة تنظيف (بعد v3.0)
- `claude/rebuild-igarden-website-GhU1H` (من Drift قديم؟)
- `feat/homepage-smart-os-screenshot`
- `feat/hotfix-brand-discipline-ii-v2`
- `feat/phase-4-legal-pages` (مدموج عبر PR #25)
- `feat/phase-5-knowledge-hub` (مدموج عبر PR #27)
- `fix/tailwind-typography-plugin`
- `hotfix/friendly-form-errors`
- `hotfix/remove-upper-stats-strip`

**خطة التنظيف (مؤجَّل):**
```bash
git branch --merged main | grep -v "^\*\|main" | xargs git branch -d
```
ينفَّذ في جلسة Branch Hygiene منفصلة بعد Phase 6.

---

## 📊 KPIs التشغيلية (داخلية فقط — Tier 3)

> هذا القسم Tier 3 — لا يُكشف علناً. للحوكمة الداخلية.

- **عدد الصفحات المنشورة:** 33+ (◐ لا يشمل الصفحات غير المصنّفة أعلاه — تنتظر تأكيد)
- **عدد المقالات في `/learn`:** 5
- **عدد PRs المدموجة (إجمالاً):** 37 (✓ مُتحقَّق `gh pr list --state merged`، آخرها #40 · 2026-06-01)
- **عدد المخالفات المتراكمة قبل Audit (2026-05-17):** 13 (8 P1 + 5 P2)
- **عدد المخالفات بعد PR #31:** 0
- **◐ آخر deployment موثّق:** `main` عند `01a5819` (PR #40، 2026-06-01) — Vercel auto-deploy مُفترَض لكن **غير مُتحقَّق منه في هذا التوفيق** (يتطلّب فحص Vercel فعلي). آخر deployment مُتحقَّق سابقاً: 2026-05-17 (`b9239cf` squash).

---

## 🔀 ملاحظة استراتيجية الدمج (✓ مُسجَّلة 2026-06-13)

✓ **رُصد تحوّل في استراتيجية الدمج.** PRs ≤ #35 دُمجت **squash** (commit واحد لكل PR — مثل #31 = `b9239cf`). بينما **#36 → #40 دُمجت merge-commit**، ما أنتج أزواج commits على `main` بنفس الموضوع:

| PR | الموضوع | الزوج على main |
|---|---|---|
| #40 | metrics block + solar card | `01a5819` + `cc18c22` |
| #39 | unified logo lockup | `c430739` + `d574a12` |
| #38 | logo visibility | `cbc28d4` + `26d9b1c` |
| #37 | footer tagline | `bd361b1` + `08abd2e` |
| #36 | Brand Stack v4 | `c8f80bd` + `db99fd6` |

**الأثر:** لا أثر وظيفي على المحتوى المنشور؛ لكن سجلّ `main` صار مزدوجاً ويصعب قراءته. **توصية (PENDING — لا فعل الآن):** توحيد سياسة الدمج على squash افتراضياً لمنع تضخّم السجل مستقبلاً.

---

## 🗺️ Roadmap المُقترح (الأشهر القادمة)

> **مُعاد التأريخ 2026-06-13.** ما جرى فعلاً في يونيو: مواءمة Brand Stack v4 (#36–#40 مدموجة) + مسار SEO (#41–#43 مفتوحة). **Phase 6** (`/asfan` + Audience Routing) لم يبدأ بعد — انزاح عن نافذة 21–31 مايو.

| الفترة | المهمة | الأولوية | الحالة |
|---|---|---|---|
| ~~20 مايو 2026~~ | TASMU F6S submission | 🔴 P0 | ◐ مرّ — يحتاج تأكيد علي |
| ~~21-31 مايو~~ | Phase 6: `/asfan` + Audience Routing | 🟠 P1 | ⏸ لم يبدأ — يُعاد جدولته |
| **يونيو 2026 (جارٍ)** | مسار SEO (#41–#43) + مواءمة Brand Stack v4 | 🟠 P1 | 🟡 #36–#40 ✓ · #41–#43 ◐ مفتوحة |
| يوليو 2026 | Phase 6 (مُعاد جدولته): `/asfan` Case Study + `/gov` | 🟠 P1 | ◐ مُقترَح — تنتظر تأكيد علي |
| يوليو 2026 | Phase 7: Lexicon CI Validator | 🟡 P2 | ◐ مُقترَح — تنتظر تأكيد علي |
| يوليو-أغسطس 2026 | Branch Hygiene + Cleanup | 🟢 P3 | ◐ مُقترَح — تنتظر تأكيد علي |
| Q3 2026 | shop.igarden.sa Phase 1 (Salla integration) | 🟠 P1 | ◐ مُقترَح — تنتظر تأكيد علي |
| Q4 2026 | demo.igarden.sa enhancements | 🟡 P2 | ◐ مُقترَح — تنتظر تأكيد علي |

**ملاحظة:** الأولويات قد تتغيّر بناءً على نتائج Sunbulah (متوقعة منتصف يونيو - يوليو) وTASMU.

---

## 🔗 روابط سريعة

### المرجعيات في Notion
- [iGarden HQ Root](https://www.notion.so/d2c5d680dbf68228856b01a0bade95ac)
- [Current State Anchor](https://www.notion.so/35d5d680dbf681abb432e4096c08121a)
- [Decisions DB](https://www.notion.so/1385d680dbf6832a9c6a818beb3de7d7)
- [Events Timeline](https://www.notion.so/2a45d680dbf68231b3f4011bc14c6736)

### الـ Repos
- [igarden-web](https://github.com/iGardenSA/igarden-web) — الموقع الرئيسي
- [igarden-pitch-decks](https://github.com/iGardenSA/igarden-pitch-decks) — العروض (HTML)
- [igarden-decks](https://github.com/iGardenSA/igarden-decks) — Presentation OS (React)

### النشر
- Vercel Project: `prj_8UGGF…` (igarden-web)
- Domain: https://igarden.sa
- Preview: `igarden-web-git-{branch}-i-garden-sa.vercel.app`

---

*🌱 ازرع بذكاء*
