# IMAGE-ASSET-MANIFEST.md — سجلّ أصول الصور

> **الغرض:** سجلّ جراحي لكل صورة أُدخلت إلى الموقع — مصدرها، بصمتها، موضعها،
> نسبتها، وحدود الادّعاء المسموح بها عليها.
> **الأساس:** `origin/main = a20b258` · **الفرع:** `feat/image-pass-al-ahsa-tower`
> **آخر تحديث:** 2026-08-25
>
> **وسم الثقة:** ✓ مُتحقَّق بأمر · ◐ مُستنتَج · ⚠ يحتاج اعتماد

---

## قواعد حاكمة لهذا السجلّ

1. **المصدر لا يُذكر بمساره الشخصي الكامل** — اسم الملف فقط.
2. **كل أصل يحمل `claim limitations`** — ما لا يجوز أن تُستخدم الصورة لإثباته.
3. **لا صورة تُنسب إلى عميل أو موقع خاص** — الوصف جغرافي عام فقط.
4. **`preview-candidate` ≠ `production-approved`** — لا دمج قبل اعتماد علي.
5. الأصول الكاملة (‏4000px) **لا تدخل Git** — النسخ المنشورة فقط.

---

## الدفعة #1 — 2026-08-25 · Al-Ahsa Field Evidence + Tower Preview

**حالة الاعتماد للدفعة كاملة: `PREVIEW_PENDING_ALI`** ⚠

### 1. `igarden-tower-product.webp`

| الحقل | القيمة |
|---|---|
| **source filename** | `tower-product-full-01.jpg` |
| **source sha256** | `47449cdb1d630dfb9c4d4b7fca7d65eb5dd3ad2d960137579f02da9342eae380` |
| **final sha256** | `f98bbcd49d7854a7da17a183cf4d6687667b8c2f25e5d34099d8dfe4d5c6a498` |
| **الأبعاد النهائية** | `924×2000` · WebP q82 · 93.1 KB |
| **placement** | `/products/hydroponics` → قسم iGarden Tower → `object-contain` |
| **attribution** | صورة منتج · بلا موقع أو مشروع |
| **privacy status** | `PUBLIC_OK` ✓ — لا وجوه، لا أسماء، لا لوحات |
| **claim limitations** | ⛔ ليست دليل محصول ولا نتيجة إنتاجية — البرج غير مزروع. ⛔ لا تُنسب إلى عسفان ولا إلى أي مشروع عميل. |
| **approval status** | `PREVIEW_PENDING_ALI` ⚠ — هوية الإصدار والقصّ |

### 2. `igarden-tower-port-detail.webp`

| الحقل | القيمة |
|---|---|
| **source filename** | `tower-product-port-detail-01.jpg` |
| **source sha256** | `c8258b1dcec5db5dd30cd9de712a0b231dd46dd69cceb0a5fd06942a06d2c1eb` |
| **final sha256** | `079f647c220d5be9f4f730d5359704ace2e98013a16dd1c09882b8db9cd881bb` |
| **الأبعاد النهائية** | `1050×1400` · WebP q82 · 45.9 KB · قُصَّت رأسياً 8%–69.6% |
| **placement** | `/products/hydroponics` → تفصيل داعم تحت صورة المنتج |
| **attribution** | تفصيل منتج · بلا موقع |
| **privacy status** | `PUBLIC_OK` ✓ — تظهر يد مجهولة الهوية بلا وجه |
| **claim limitations** | ⛔ تفصيل آلية زراعة فقط — ليست دليل تشغيل أو أتمتة. |
| **approval status** | `PREVIEW_PENDING_ALI` ⚠ |

### 3. `al-ahsa-towers-installation.webp`

| الحقل | القيمة |
|---|---|
| **source filename** | `al-ahsa-towers-installed-wide-01.jpg` |
| **source sha256** | `522ca30556fdbc1230247c7e2a588a4354e69fc1d1c70394875a1454b3cd6c23` |
| **final sha256** | `4696500aaf36b5cdcda1f6157b3cbe501d1ed9d03961a865e62c30d24f6a04f5` |
| **الأبعاد النهائية** | `924×2000` · WebP q82 · 407.4 KB |
| **placement** | `/` → `FieldEvidence` → `AL_AHSA_GALLERY` · و`/products/hydroponics` → Hero |
| **attribution** | مشروع ميداني في الأحساء · ⛔ بلا اسم عميل |
| **privacy status** | `PUBLIC_OK` ✓ |
| **claim limitations** | ⛔ **دليل تجهيز وتركيب فقط** — الأبراج غير مزروعة. ⛔ لا «مشروع مكتمل» ولا «مُسلَّم» ولا «نتائج إنتاجية» ولا «Smart/Automated» استناداً إلى الصورة وحدها. |
| **approval status** | `PREVIEW_PENDING_ALI` ⚠ |

### 4. `al-ahsa-greenhouse-layout.webp`

| الحقل | القيمة |
|---|---|
| **source filename** | `al-ahsa-greenhouse-layout-wide-01.jpg` |
| **source sha256** | `4a0ece4c38d2baed77e27cca6449f6a825d5efe71887a5b05794279cd5553cff` |
| **final sha256** | `625dfb338d0f774eec9b0e2d69d977471a29b9b329861406c9795198906579cc` |
| **الأبعاد النهائية** | `924×2000` · WebP q82 · 196.1 KB |
| **placement** | `/` → `AL_AHSA_GALLERY` · `/products/smart-greenhouses` → `AlAhsaField` · `/how-we-work` → مسار `new-project` |
| **attribution** | مشروع ميداني في الأحساء · ⛔ بلا اسم عميل |
| **privacy status** | `PUBLIC_OK` ✓ |
| **claim limitations** | ⛔ **ليست «محمية ذكية مسلَّمة» ولا «تشغيل آلي»** — الصورة تُظهر تجهيز صفوف وبنية داخلية فقط. |
| **approval status** | `PREVIEW_PENDING_ALI` ⚠ |

### 5. `al-ahsa-drip-irrigation-detail.webp`

| الحقل | القيمة |
|---|---|
| **source filename** | `al-ahsa-drip-emitter-detail-01.jpg` |
| **source sha256** | `495d9072b4ee7b4b2d4945463ae860e9659b9f984223398ceaf689cf16255cc0` |
| **final sha256** | `65259491d583390951c3f4b71d4c6fe090080bd3f29e95abc849e213d1829772` |
| **الأبعاد النهائية** | `739×1600` · WebP q82 · 210.4 KB |
| **placement** | `/` → `AL_AHSA_GALLERY` · `/products/smart-greenhouses` → `AlAhsaField` |
| **attribution** | مشروع ميداني في الأحساء · ⛔ بلا اسم عميل |
| **privacy status** | `PUBLIC_OK` ✓ |
| **claim limitations** | ⛔ ري بالتنقيط ظاهر — **لا يثبت تحكّماً ذكياً ولا أتمتة ولا حسّاسات**. |
| **approval status** | `PREVIEW_PENDING_ALI` ⚠ |

---

## المعالجة المطبَّقة على الخمسة

Auto-orient (‏EXIF Orientation=6 لكلّها) → قصّ للموضع عند اللزوم → Resize **تصغيراً فقط**
→ WebP q82 → **إزالة كل EXIF وGPS وICC** ✓ مُتحقَّق (‏`metadata-hits=0` لكل ملف).

⛔ لا AI retouching · لا توليد أو إزالة عناصر · لا Blur · لا تعديل على ملفات المصدر.

**مجموع الأصول الجديدة: 964 KB** ✓ (الحدّ المستهدف 2.5 MB)

---

## فجوات ما زالت مفتوحة بعد هذه الدفعة

| الفجوة | الحالة |
|---|---|
| **Smart Controllers** — صورة منتج · مخطط ربط · Dashboard | `OPEN` ⛔ لا تُملأ بأي صورة عتاد من المكتبة |
| **IoT** — وحدة/حساسات مركّبة · مخطط اتصال | `OPEN` ⛔ الصور المتاحة مكوّنات طرف ثالث في بيئة Bench |
| **المشروع العضوي** | `OPEN` — لا دليل بصري كافٍ |
| **Compliance** — نموذج سجلّ منزوع البيانات | `OPEN` |
