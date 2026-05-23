# Brand Bible — الملخص التشغيلي

> **الإصدار الفعلي:** v3.0 + v3.1 + v3.2 (تراكمي)
> **المصادر:**
> - [v3.0 Master Reference](https://www.notion.so/35c5d680dbf681208cbcea7987cea2be) — 1,095 سطر، 15 فصل + 3 ملاحق
> - [v3.1 Presentation Edition](https://www.notion.so/3605d680dbf68165bd48f28ba0a86e03) — Semantic Palette + Tajawal 900 + Source Rule (للديكات فقط)
> - [v3.2 Addendum](https://www.notion.so/3625d680dbf6811ab1b0d4d9dddfa18c) — Audience Discipline Matrix → `docs/TIER-MATRIX.md`
> **آخر تحديث:** 17 مايو 2026

---

## المبدأ الحاكم

> "العلامة التجارية أصل قانوني مملوك للشركة، وكل خروج غير مأذون عنها يُضعف هذا الأصل."

---

## هرم الاسم القانوني والعلامات (حرج)

```
شركة انتيليجنت غاردن / Intelligent Garden Co.  ← الكيان القانوني
   └ iGarden                                     ← العلامة التجارية الرئيسية
      ├ الحديقة الذكية                            ← علامة عربية (ليست اسماً قانونياً)
      ├ iGarden Tower                             ← SAIP #423450193
      ├ iGarden Smart OS                          ← المنصة البرمجية
      ├ iGarden Home Solutions                    ← المتجر (shop.igarden.sa)
      └ Compliance Bridge                         ← خدمة الامتثال
```

**قواعد إلزامية:**
- "الحديقة الذكية" علامة تجارية/مرشّحة للتسجيل — **ليست الاسم القانوني**
- "iGarden" واجهة تجارية، **ليست الاسم القانوني الكامل**
- لا يجوز عرض "iGarden / الحديقة الذكية" ككيان قانوني واحد

---

## الثوابت البصرية (NON-NEGOTIABLE)

### الألوان

```css
/* Primary */
#0F3D2E   Deep Forest Green  — خلفيات, headers, nav, footer (60%)
#1B5E3F   Corporate Green    — Hover states

/* Accent */
#7CB342   Lime Accent        — CTAs, buttons, highlights (10%)
#A5D63F   Bright Lime        — Stats, badges

/* Neutrals */
#FAFAF7   Cream              — Surfaces, bodies, cards (30%)
#1A1A1A   Dark Text
#6B7280   Medium Gray        — Secondary text
#E5E7EB   Light Gray         — Borders
```

**قاعدة 60-30-10:**
- 60% → Cream/White (surfaces, bodies)
- 30% → Deep Forest Green (headings, CTAs, nav, footer)
- 10% → Lime Accent (stats, badges, highlights)

### Typography

```
العربية:   Tajawal (Bold 700/900 · Medium 500 · Regular 400)
اللاتينية: Poppins (SemiBold 600 · Medium 500) + Inter (Regular)
الأرقام:   Tajawal Bold / Poppins Bold
```

**v3.1 (للديكات فقط — لا تُنقل لـ igarden-web):**
- Tajawal 900 مسموح في pitch decks
- Semantic Palette (ألوان دلالية موسّعة للعروض)
- Source Rule: أرقام السوق الخارجي تحتاج مصدر مذكور

### أسلوب التصميم: Minimalist Eco-Tech

- White space سخيّ
- Grid: 12 عمود
- border-radius: 8-16px
- Shadows: `0 2px 8px rgba(15, 61, 46, 0.08)` (خفيفة فقط)
- أيقونات outline (1.5-2px stroke) — **لا filled icons**
- **لا emojis** في المخرجات الرسمية
- **لا stock photography** — صور عسفان الحقيقية

---

## شخصية العلامة: "الخبير الهادئ"

- **بدون mascot** (ذكية/Zakeya وأي شخصية = ممنوع)
- لهجة: متخصّصة، هادئة، واثقة — لا مبالغة
- الجمهور: B2B أولاً → B2G ثانياً → B2C في Phase 2 فقط

---

## هرم الشعارات (الفصل 9 — حرج)

```
Primary (AR): ازرع بذكاء                       ← العربية · كل السياقات
Primary (EN): Plant Smart                      ← الإنجليزية · سياق منفصل، لا يُجمَع مع AR في سلوغن واحد
Secondary:   نَبني · نُوطّن · نُطوّر            ← Tier 0+ (Secondary فقط)
App-only:    ازرع بذكاء · من جيبك              ← Tier 3 (app فقط)
Store-only:  حلول جاهزة · للمنزل              ← Tier 3 (shop فقط)
```

**قاعدة الجمع (حرج):**
- الشعاران الأول والثاني **لا يُجمعان في سياق لغوي واحد** أبداً
- في meta/OpenGraph/Schema-LD: Primary فقط
- في UI المرئي: عنصران HTML منفصلان، Primary أبرز بصرياً
- راجع `docs/LEXICON.md #18` للتفاصيل الكاملة

---

## المعجم الممنوع (الفصل 10 — 6 فئات)

### 1. ادعاءات الامتثال الممنوعة
❌ معتمد من الوزارة · شريك الوزارة · شهادة Saudi GAP آلية · نضمن الحصول على شهادة

### 2. الادعاءات التفوّقية المطلقة
❌ الأول في السعودية · الأفضل · الأقوى/الأرخص/الوحيد · ثوري/طفرة

### 3. الأرقام المطلقة دون شروط (Tier 0)
❌ توفير 95% من المياه · خفض 50% من التكاليف · زيادة 300%

### 4. الكلمات التسويقية المُتضخّمة
❌ مبتكر/رائد/فريد (بلا proof) · حلّ جذري · منصة ثورية

### 5. إفصاحات Tier 0 الممنوعة
❌ أسماء العملاء · قيم العقود · نسب الملكية · توقعات إيرادية

### 6. الخلط بين الكيانات
❌ آي جاردن · متجر iGarden · iGarden Sunbulah · Smart Garden/Garden Co.

---

## المعجم المسموح + 4 Boilerplates (الفصل 11)

**الصياغات الآمنة للـ Tier 0:**

```
شركة سعودية متخصّصة في تطوير وتركيب أنظمة الزراعة المائية الذكية
مرفق R&D في عسفان
عملاء صناعيون في عدة مناطق سعودية
تقليص جوهري في استهلاك المياه (قابل للقياس)
نموذج ROI يُحتسَب فردياً لكل عميل
تساعد منصة iGarden على تنظيم سجلات الإنتاج
```

**Boilerplate 1 — Homepage Meta:**
```
شركة iGarden (انتيليجنت غاردن): شركة سعودية متخصّصة في تطوير المزارع وأنظمة التحكم الزراعي الذكي.
مرخّصة MISA · SAIP #423450193. ازرع بذكاء.
```

**Boilerplate 2 — About Page:**
```
iGarden شركة سعودية تأسّست 2024 وانطلقت رسمياً 2026.
تطوّر أنظمة تحكم زراعي مُكيَّفة للمناخ السعودي: من الحساس إلى التقرير.
ازرع بذكاء.
```

**Boilerplate 3 — Footer:**
```
© 2026 شركة انتيليجنت غاردن (Intelligent Garden Company) — ذات مسؤولية محدودة.
```

**Boilerplate 4 — Legal Pages:**
```
شركة انتيليجنت غاردن (Intelligent Garden Company)، سجل تجاري [CR]، ترخيص MISA #24926249716.
```

---

## قواعد قصص العملاء (الفصل 14)

| المستوى | ما يُسمح | الـ Tier |
|---|---|---|
| Level 1 | اسم + تفاصيل كاملة | Tier 2-B (NDA) فقط |
| Level 2 | قصة مُجهَّلة ("منشأة في منطقة شمالية") | Tier 0/1 |
| Level 3 | قصة بالاسم | يتطلّب نموذج موافقة من العميل |

**قاعدة Asfan:** مرفق R&D ملك للشركة — ليس عميلاً. يُذكر كـ "مرفق R&D في عسفان".

---

## مصفوفة التطبيق — 16 سطحاً (ملخص)

| السطح | الطبقة | الشعار المسموح | قواعد الإفصاح |
|---|---|---|---|
| igarden.sa | Tier 0 | Primary فقط في meta; Primary + Secondary (منفصلان) في UI | لا أرقام مطلقة |
| LinkedIn | Tier 0 | Primary | لا أرقام داخلية |
| Sales deck | Tier 1 | Primary | ROI بنطاقات |
| Pitch deck | Tier 2-A | Primary + Secondary | Projections + disclaimers |
| Notion داخلي | Tier 3 | كل شيء | بلا قيود (عدا الأسرار) |
| shop.igarden.sa | Tier 0 + شعار Store | "حلول جاهزة · للمنزل" | B2C framing |
| app.igarden.sa | Tier 0 + شعار App | "ازرع بذكاء · من جيبك" | B2C framing |
| demo.igarden.sa | Tier 0 | Primary | لا financial |
| بطاقة عمل | Tier 0/1 | Primary | الاسم القانوني في الظهر |
| Email signature | Tier 0/1 | Primary | "iGarden — ازرع بذكاء" |
| Press release | Tier 0 | Primary | Boilerplate 1 |
| RFP/Proposal | Tier 1 | Primary | Anonymized cases |
| Investor memo | Tier 2-A | Primary + Secondary | Full financials + disclaimers |
| NDA session | Tier 2-B | Primary | Client names OK |
| Board materials | Tier 3 | Primary | كل شيء |
| Twitter/X | Tier 0 | Primary | لا أرقام داخلية |

---

## حوكمة Brand Bible (الفصل 15)

- **دورة المراجعة:** نصف سنوية (مايو + نوفمبر)
- **إضافة مصطلح:** عبر CEO
- **تعديل مصطلح:** CEO أو مجلس الشركاء (حسب الخطورة)
- **إلغاء مصطلح:** مجلس الشركاء بالإجماع
- **أي وثيقة Tier 2-A:** مراجعة CEO قبل الإرسال الخارجي

---

## سجل الإصدارات

| الإصدار | التاريخ | ما الجديد |
|---|---|---|
| v3.0 | مايو 2026 | Master Reference — 15 فصلاً (نظام ثلاثي الطبقات، هرم العلامة، المعجم الممنوع) |
| v3.1 | 14 مايو 2026 | Presentation Edition — Semantic Palette + Tajawal 900 + Source Rule (للديكات فقط) |
| v3.2 | 17 مايو 2026 | Audience Discipline Matrix — تفريق Tier 2-A (مستثمرون) عن Tier 2-B (NDA) |

---

*"العلامة التجارية أصل قانوني مملوك للشركة، وكل خروج غير مأذون عنها يُضعف هذا الأصل ويُربك السوق."*
