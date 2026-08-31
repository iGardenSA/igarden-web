# REALITY LOCK — WEB-REMED-01

> **Lane:** WEB-REMED-01 · **Executor:** Claude Code · **Date:** 2026-08-29
> **Risk:** S0 — قراءة ورصد. صفر تعديل على `src/`. صفر إرسال نموذج. صفر عملية قاعدة بيانات.

---

## 1. تثبيت الأساس

| البند | القيمة |
|---|---|
| Base SHA | **`997d99061478c5cea3da57146d00c02203380076`** |
| مصدره | `origin/main` بعد `git fetch origin --prune` (2026-08-29) |
| commit الأساس | `chore(closeout): establish clean website SSOT (#60)` · 2026-08-28 |
| الفرع | `fix/web-remediation-2026-08` |
| نوع الإنشاء | `git worktree add -b` → `/home/ali/Projects/igarden-web-remed` |
| HEAD مقابل origin/main | `0 0` (ahead/behind) — **HEAD مبنيّ مباشرة على origin/main، بلا commit وسيط** ✓ |
| نظافة الشجرة | نظيفة عند الإنشاء ✓ · `AGENTS.md` **لم ينتقل** ✓ |
| `docs/project-state-reconcile-aug` | **لم يُدمج ولم يُنتقَ ولم يُحذف** — باقٍ على `bcbc4ad` مع `AGENTS.md` غير المتعقَّب ✓ |
| SSOT المقروء | `PROJECT-STATE.md` من هذا الفرع — مطابق حرفياً لنسخة `origin/main` ✓ |

**سبب تغيير الأساس:** الشجرة السابقة كانت متأخّرة **١٩ commit / ١٦ PR (#45→#60)**. `PROJECT-STATE.md` §5 على `origin/main` يأمر حرفياً: *"A future website session begins from fresh `origin/main` only... It must not resume an old feature branch."*

**تعارض مع البريف:** البريف كُتب على أساس أن `PROJECT-STATE.md` المحلي هو SSOT. النسخة المحلية كانت متجاوَزة. الأولوية أُعطيت للنسخة على `origin/main` بموجب ترتيب مصادر الحقيقة، **وبقرار صريح من علي (2026-08-29)**.

---

## 2. Required-fields audit — النماذج الأربعة

**المنهج:** قراءة ثابتة للـsource فقط. صفر تشغيل، صفر إرسال، صفر شبكة.
**عمود «إلزامي في HTML؟»** = وجود سمة `required` فعلية على العنصر.
**عمود «يفرضه التحقق؟»** = وجود قاعدة `zod` أو منطق submit يمنع الإرسال.

### 2.1 نموذج تقييم الرئيسية — `AssessmentSection`

**Route:** `/` (`#assessment`) · **الملف:** `src/components/sections/AssessmentSection.tsx` · **الوجهة:** `supabase.from("leads").insert()` `:122`
**ملاحظة:** `<form noValidate>` `:189` — تحقّق المتصفح مُعطَّل عمداً؛ zod هو الطبقة الوحيدة.

| الحقل | name | type | id | label | إلزامي في HTML؟ | يفرضه التحقق؟ | سياسة الخصوصية | يُخزَّن في |
|---|---|---|---|---|---|---|---|---|
| نقطة البداية | `start_point` `:211` | hidden + أزرار `aria-pressed` | ✗ | `<label>` بلا `htmlFor` `:313` | ✗ | ✓ `z.enum` `:44` | غير مذكور | `leads` |
| الاسم | `full_name` `:216` | text (ضمني) | ✗ | بلا `htmlFor` | ✗ | ✓ `min(2)` `:47` | «الاسم والبريد فقط» | `leads` |
| المنشأة | `company` `:219` | text (ضمني) | ✗ | بلا `htmlFor` | ✗ | ✓ `min(2)` `:48` | غير مذكور | `leads` |
| المنطقة | `region` `:222` | text (ضمني) | ✗ | بلا `htmlFor` | ✗ | ✓ `min(2)` `:49` | غير مذكور | `leads` |
| الجوال | `phone` `:225` | text (ضمني — `dir="ltr"` فقط) | ✗ | بلا `htmlFor` | ✗ | ✓ `min(7)+regex` `:54-58` | **غير مذكور كإلزامي** | `leads` |
| نوع المنشأة | `facility_type` `:228` | select | ✗ | بلا `htmlFor` | ✗ | ✓ `z.enum` `:50` | غير مذكور | `leads` |
| الاحتياج | `interest` `:236` | select | ✗ | بلا `htmlFor` | ✗ | ✓ `min(1)` `:53` | غير مذكور | `leads` |
| التوقيت | `timing` `:263` | hidden + أزرار | ✗ | بلا `htmlFor` | ✗ | ✓ `z.enum` `:59` | غير مذكور | `leads` |
| المساحة | `area` `:267` | text (ضمني) | ✗ | بلا `htmlFor` | ✗ | اختياري `:62` | غير مذكور | `leads` |

🔴 **٩ من ٩ حقول بلا ربط برمجي بين label والحقل.** استعلام القبول في §9 سيُرجع **9**، لا 0.
🔴 `type` غائب على ٤ حقول نصية — والجوال `type="text"` لا `type="tel"`.
🔴 `autoComplete` غائب كلياً.
🔴 رسالة الخطأ `:315` بلا `id` وبلا `aria-describedby`.
🔴 كتلة الخطأ العامة `:271-276` بلا `role="alert"`؛ كتلة النجاح `:178-186` بلا `role="status"`.
🔴 زر الإرسال `:278-280` يحمل `disabled` أثناء الإرسال ✓ لكن بلا `aria-busy`.

### 2.2 نموذج التواصل — `/contact`

**الملف:** `src/app/contact/page.tsx` · **الوجهة:** `supabase.from("leads").insert()` `:126`

| الحقل | name | type | id | label | إلزامي في HTML؟ | يفرضه التحقق؟ | سياسة الخصوصية | يُخزَّن في |
|---|---|---|---|---|---|---|---|---|
| الاسم الكامل | `full_name` `:377` | `text` | ✗ | `<label>` بلا `htmlFor` `:792` · نجمة مرئية `:794` | ✗ | ✓ `min(2)` | **«الاسم والبريد فقط»** | `leads` |
| رقم الجوال | `phone` `:391` | `tel` ✓ | ✗ | بلا `htmlFor` · نجمة مرئية | ✗ | ✓ **مطلوب** `lead-schema:21-27` | 🔴 **غير مذكور كإلزامي** | `leads` |
| البريد | `email` `:404` | `email` ✓ | ✗ | بلا `htmlFor` · نجمة **مشروطة** `:399` | ✗ | ◐ إلزامي فقط عند `preferred_contact==="email"` | 🔴 **مذكور كإلزامي دائماً** | `leads` |
| طريقة التواصل | `preferred_contact` `:427` | `radio` | ✗ | `<label>` **يلفّ** الراديو `:418` ✓ + `role="radiogroup"` + `aria-label` `:416` ✓ | ✗ | ✓ | غير مذكور | `leads` |
| نوع الجهة | `lead_type` `:440` | select | ✗ | بلا `htmlFor` | ✗ | `.default("unknown")` | مذكور | `leads` |
| الاهتمامات | `interested_in` `:744` | `checkbox` (`sr-only`) | ✗ | `<label>` **يلفّ** المربع `:743` ✓ | ✗ | `z.array(z.string())` بلا enum | مذكور | `leads` |
| الرسالة | `message` `:513` | textarea | ✗ | بلا `htmlFor` · نجمة مرئية `:510` | ✗ | ✓ | مذكور | `leads` |
| الجهة/الشركة | `company` `:544` | `text` | ✗ | بلا `htmlFor` | ✗ | اختياري | غير مذكور | `leads` |
| المدينة/المنطقة | `city` `:555` | `text` | ✗ | بلا `htmlFor` | ✗ | اختياري | غير مذكور | `leads` |
| حجم المشروع | `project_size` `:562` | select | ✗ | بلا `htmlFor` | ✗ | اختياري | غير مذكور | `leads` |
| متى تَرغب بالبدء؟ | `timeline` `:573` | select | ✗ | بلا `htmlFor` | ✗ | اختياري | غير مذكور | `leads` |
| الموضوع | `subject` `:582` | `text` | ✗ | بلا `htmlFor` | ✗ | اختياري | مذكور | `leads` |

✓ الراديو والـcheckbox **مُسمَّيان** عبر لفّ `<label>`.
🔴 **١٠ حقول** (نص/بريد/هاتف/قوائم/textarea) بلا ربط برمجي → استعلام §9 يُرجع **10**.
🔴 `autoComplete` غائب كلياً (`name`, `tel`, `email`, `organization`, `address-level1`).
🔴 لا `<fieldset>`/`<legend>` — يُعوَّض جزئياً بـ`role="radiogroup"` + `aria-label`.
🔴 رسالة الخطأ في `FormField` `:796-800` بلا `id`/`aria-describedby`.
🔴 صفر `role="status"` / `role="alert"` / `aria-busy` في الملف.
◐ النجمة `*` تظهر بصرياً فقط — بلا `required` ولا `aria-required` → **قارئ الشاشة لا يعرف أن الحقل إلزامي**.

### 2.3 نموذج حجز زيارة عسفان — `VisitForm`

**Route:** `/osfan-station` · **الملف:** `src/app/osfan-station/VisitForm.tsx` · **الوجهة:** `supabase.from("leads").insert()` `:37`

| الحقل | name | type | id | label | إلزامي في HTML؟ | يفرضه التحقق؟ | سياسة الخصوصية | يُخزَّن في |
|---|---|---|---|---|---|---|---|---|
| الاسم | `full_name` `:91` | `text` ✓ | `visit-name` ✓ | `htmlFor="visit-name"` ✓ `:86` | ✓ `:93` | HTML فقط | «الكل» إلزامي | `leads` |
| الجوال | `phone` `:104` | `tel` ✓ | `visit-phone` ✓ | `htmlFor` ✓ `:99` | ✓ `:106` | 🔴 **غير مذكور في الجدول أصلاً** | `leads` |
| التاريخ المقترح | `preferred_date` `:121` | `date` ✓ | `visit-date` ✓ | `htmlFor` ✓ `:116` | ✗ | HTML فقط | «الكل» إلزامي 🔴 تعارض | `leads` |
| نوع الزيارة | `visit_type` `:132` | select ✓ | `visit-type` ✓ | `htmlFor` ✓ `:127` | ✗ | HTML فقط | غير مذكور | `leads` |

✓ **أفضل نموذج من حيث التسمية — ٤/٤ مربوطة.** استعلام §9 يُرجع **0**.
🔴 صفر `autoComplete` · صفر `aria-describedby` · صفر `role="status"`/`role="alert"`/`aria-busy` · صفر طبقة `zod`.
🔴 «سيتواصل معك فريقنا خلال 24 ساعة» `:77` — التزام SLA بينما الإشعار البريدي **غير مُفعَّل** (SSOT §2). مسجَّل كـ`J3` في `CLAIM-REGISTER`.
🔴 السياسة تذكر حقلَي «الجهة» و«عدد الزوار» — **غير موجودين في النموذج**؛ ولا تذكر «الجوال» و«نوع الزيارة» — **موجودان فيه**.

### 2.4 نموذج قائمة انتظار التطبيق — `AppWaitlistForm`

**Route:** `/app` (و`app.igarden.sa/` عبر `middleware.ts`) · **الوجهة:** `supabase.from("app_waitlist").insert()` `:66`

| الحقل | name | type | id | label | إلزامي في HTML؟ | يفرضه التحقق؟ | سياسة الخصوصية | يُخزَّن في |
|---|---|---|---|---|---|---|---|---|
| البريد | `email` | `email` ✓ | `waitlist-email` ✓ | `htmlFor` ✓ `:148` | ✓ `:157` | 🔴 **النموذج غائب كلياً عن جدول السياسة** | `app_waitlist` |
| مستوى الاهتمام | (radio) `:195` | `radio` ✓ | ✗ | `<label>` يلفّ ✓ `:186` | ✗ | غائب | `app_waitlist` |
| الجوال | `phone` | `tel` ✓ | `waitlist-phone` ✓ | `htmlFor` ✓ `:228` | ✗ | غائب | `app_waitlist` |
| المدينة | `city` | `text` ✓ | `waitlist-city` ✓ | `htmlFor` ✓ `:253` | ✗ | غائب | `app_waitlist` |

✓ **الأكثر اكتمالاً:** `autoComplete` (`email` `:155` · `tel` `:235` · `address-level2` `:259`) + `aria-invalid` `:167` + `aria-describedby` `:168` + `id="email-error"` `:171`. استعلام §9 يُرجع **0**.
🔴 `aria-describedby` مطبَّق على البريد فقط — غائب عن الجوال والمدينة.
🔴 صفر `role="status"` / `role="alert"` / `aria-busy`.
🔴 **الجدول القانوني في `/privacy` §2.1 لا يذكر هذا النموذج ولا جدول `app_waitlist` إطلاقاً.**

---

## 3. تعارضات الحقول الإلزامية — كود مقابل سياسة

`/privacy` §2.1 (`src/app/privacy/page.tsx:67-98`) مقابل الكود على `997d990`:

| # | السياسة تقول | الكود يفعل | الحكم |
|---|---|---|---|
| P1 | نموذج التواصل: الإلزامي = **«الاسم والبريد فقط»** | الإلزامي = **الاسم + الجوال**؛ البريد اختياري إلا عند اختياره قناةً مفضّلة (Wave 2E) | 🔴 **تعارض مباشر** — السياسة تصف حالة ما قبل Wave 2E |
| P2 | نموذج التواصل: الحقول = «الاسم، البريد، الهاتف، نوع الجهة، الاهتمام، نص الرسالة» | يجمع أيضاً `city` · `project_size` · `timeline` · `subject` · `company` · `preferred_contact` | 🔴 السياسة **ناقصة** ٦ حقول |
| P3 | طلب زيارة عسفان: «الاسم، الجهة، تاريخ الزيارة المقترح، **عدد الزوار**» — الكل إلزامي | يجمع الاسم · **الجوال** · التاريخ · **نوع الزيارة**. الإلزامي = الاسم + الجوال فقط | 🔴 تعارض في **المحتوى والإلزامية** معاً |
| P4 | «اشتراك النشرة» — البريد إلزامي | **لا وجود لنموذج نشرة في المستودع**؛ `KnowledgeSection.tsx:26` يحيل إلى `/contact?interest=newsletter` | 🔴 السياسة تصف نموذجاً **غير موجود** |
| P5 | لا ذكر لنموذج `/app` ولا لجدول `app_waitlist` | النموذج يعمل ويكتب في `app_waitlist` | 🔴 **جمع بيانات بلا تغطية في السياسة** |
| P6 | — | Attribution أول لمسة (`referrer` + `utm_*`) يُلتقط في root layout عبر `FirstTouchCapture.tsx` | ◐ SSOT §2 يقول «Privacy text was updated for first-touch/UTM storage» — **تحقّق من موضعه** |

⛔ **لم يُغيَّر أي سلوك ولا أي نص قانوني.** البريف §10 يمنع ذلك بلا مصدر قانوني/تشغيلي مباشر. P1→P5 مرفوعة كـ`NEEDS_DECISION`.

---

## 4. عبارة الخصوصية تحت النماذج (§10)

| الموضع | النص الحالي | الحالة |
|---|---|---|
| `contact/page.tsx:621` | «...الخاصة بنا. **لن نشارك بياناتك مع أي طرف ثالث.**» | 🔴 هدف الاستبدال |
| `AppWaitlistForm.tsx:303` | «. **لن نشارك بياناتك مع طرف ثالث.**» | 🔴 هدف الاستبدال (صياغة مختلفة قليلاً) |
| `AssessmentSection.tsx:291-294` | «نراجع احتياجك ونقترح الخطوة الأولى المناسبة. لا يتضمّن التقييم الأولي تسعيراً...» | ◐ **لا عبارة خصوصية إطلاقاً** |
| `VisitForm.tsx` | — | ◐ **لا عبارة خصوصية إطلاقاً** |

◐ البريف يقول «تحت **كل** نموذج». نموذجان لا يحملان العبارة أصلاً: هل تُضاف أم يقتصر الاستبدال على الموضعين القائمين؟ → `NEEDS_DECISION`.

**الاتساق الداخلي:** `/privacy:227` يقول أصلاً «لا نبيع بياناتك. لا نشاركها لأغراض تسويقية مع طرف ثالث.» — أي أن النص المعتمد في §10 **يوائم النماذج مع السياسة القائمة**، لا يغيّر السياسة ✓

---

## 5. أوامر التحقق المتاحة

| الأمر | الحالة |
|---|---|
| `npm run build` | ✓ متاح |
| `npm run lint` | ✓ متاح |
| `npm run type-check` | ✓ متاح |
| `npm test` | ✗ **غير موجود** — لا سكربت ولا إطار ولا ملف اختبار واحد |

يُعتمد **build + lint + type-check** بديلاً عن بند «test» في §17.

---

## 6. الحالة

**S0 مكتمل.** المخرجات: هذا التقرير · `docs/CLAIM-REGISTER.md` · `docs/CAPABILITY-MATRIX.md`.
**لم يبدأ S1.** لا merge. لا production deploy.
