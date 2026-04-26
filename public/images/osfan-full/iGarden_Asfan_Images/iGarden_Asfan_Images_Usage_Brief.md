# iGarden — دليل استخدام صور عسفان

**الإصدار:** 1.0  
**التاريخ:** 25 أبريل 2026  
**المصدر:** فيديو محطة عسفان (24 أبريل 2026) — 6 لقطات معالَجة  
**الجودة الأصلية:** 832×464 (480p)  
**الجودة بعد المعالجة:** 1920×1080 (Full HD)  
**الحالة:** مقبولة كـ fallback / مع overlay — موصى بإعادة تصوير لاحقاً بـ 4K

---

## 📂 هيكل الملفات

```
final_assets/
├── 01_tower_visitors.jpg       (1920×1080, 402KB)
├── 01_tower_visitors.webp      (207KB — أصغر بـ 49%)
├── 02_tower_closeup.jpg
├── 02_tower_closeup.webp
├── 03_cabbage_diversity.jpg
├── 03_cabbage_diversity.webp
├── 04_greenhouse_wide.jpg
├── 04_greenhouse_wide.webp
├── 05_tomato_tunnel.jpg
├── 05_tomato_tunnel.webp
├── 06_inspector_crops.jpg
├── 06_inspector_crops.webp
└── responsive/
    ├── *_mobile.{jpg,webp}    (640px width)
    ├── *_tablet.{jpg,webp}    (1024px)
    ├── *_desktop.{jpg,webp}   (1440px)
    └── *_full.{jpg,webp}      (1920px)
```

---

## 🎯 خريطة استخدام كل صورة

### 1. `01_tower_visitors.jpg` — Tower + زوار رسميون
**الموضع المُوصى به:** `/about` — قسم القصة، أو `/case-studies/asfan` — banner  
**ينقل:** مصداقية B2G، اهتمام رسمي، tower كمنتج محوري  
**التحفظ:** الأشخاص واضحون — تأكد من إذن النشر قبل الاستخدام  
**Alt text عربي:** "زيارة رسمية لمحطة iGarden في عسفان لاستعراض نظام الأبراج العمودية"  
**Alt text إنجليزي:** "Official delegation visit to iGarden's Asfan facility reviewing the vertical tower system"

---

### 2. `02_tower_closeup.jpg` — Tower قريب
**الموضع المُوصى به:** `/products/igarden-tower` — صفحة المنتج، أو `/services` — بطاقة Vertical Farming  
**ينقل:** المنتج المميز (Tower)، التفاصيل التقنية، حجم النبتة  
**القوة:** يدعم استراتيجية رفع التركيز على Tower كمنتج Hero  
**Alt text عربي:** "نظام iGarden Tower للزراعة العمودية — يزرع الفراولة والخضروات الورقية في مساحة دائرية موفّرة للمياه"  
**Alt text إنجليزي:** "iGarden Tower vertical farming system — strawberries and leafy greens in a water-efficient circular footprint"

---

### 3. `03_cabbage_diversity.jpg` — تنوع المحاصيل
**الموضع المُوصى به:** `/services` — قسم "ماذا نزرع؟"، أو blog post عن الكرنب  
**ينقل:** قدرة على زراعة محاصيل متنوعة، إنتاجية حقيقية  
**التحفظ:** الكرنب ضخم — يمكن أن يثير سؤال "هل هذا hydroponics فعلاً؟" — استخدمه مع caption يوضح النظام  
**Alt text عربي:** "محصول كرنب مزروع في نظام iGarden، يعكس تنوّع المحاصيل القابلة للإنتاج المحلي"  
**Alt text إنجليزي:** "Cabbage harvest grown in iGarden's system, demonstrating crop diversity in local production"

---

### 4. `04_greenhouse_wide.jpg` — منظور طولي للـ greenhouse ⭐
**الموضع المُوصى به:** **Hero الموقع** (مع overlay داكن)، أو `/about` — قسم البطل  
**ينقل:** اتساع، احترافية، هدف النباتات نفسها (لا الأشخاص)  
**القوة:** اللقطة الأكثر "سينمائية" في الفيديو — symmetry، depth، الـ pink hibiscus نقطة لون مميزة  
**التحذير:** بدون overlay داكن، الإضاءة المسطحة للـ greenhouse cover ستضعف الـ Hero  

**كود Hero CSS موصى به:**
```css
.hero {
  position: relative;
  min-height: 90vh;
  background: 
    linear-gradient(
      to bottom,
      rgba(15, 61, 46, 0.6),
      rgba(15, 61, 46, 0.85)
    ),
    url('/images/04_greenhouse_wide.jpg') center/cover;
}

.hero h1 {
  color: var(--cream);  /* #FAFAF7 */
  font-family: 'Tajawal', sans-serif;
}

.hero .cta {
  background: var(--lime-accent);  /* #7CB342 */
  color: var(--deep-forest);  /* #0F3D2E */
}
```

**Alt text عربي:** "منظر داخلي لمحطة iGarden في عسفان — صفوف من المحاصيل المزروعة في نظام مياه ذكي"  
**Alt text إنجليزي:** "Interior view of iGarden Asfan facility — rows of crops grown in a smart water system"

---

### 5. `05_tomato_tunnel.jpg` — نفق الطماطم
**الموضع المُوصى به:** Hero بديل، أو `/services/hydroponics` — قسم Dutch Bucket  
**ينقل:** كثافة إنتاجية، نظام Dutch Bucket لمحاصيل ثمرية  
**القوة:** symmetry قوية، perspective جذاب  
**Alt text عربي:** "نظام Dutch Bucket لزراعة الطماطم في محطة iGarden عسفان"  
**Alt text إنجليزي:** "Dutch Bucket tomato cultivation system at iGarden Asfan"

---

### 6. `06_inspector_crops.jpg` — تفقّد المحاصيل
**الموضع المُوصى به:** `/case-studies/asfan` — قسم "زيارات التحقق"، أو blog post عن جودة الإنتاج  
**ينقل:** شفافية، رقابة جودة، اهتمام جهات خارجية  
**التحفظ:** الأشخاص واضحون — إذن نشر إلزامي  
**Alt text عربي:** "تفقّد المحاصيل في محطة iGarden للتحقق من معايير الجودة"  
**Alt text إنجليزي:** "Crop inspection at iGarden's facility verifying quality standards"

---

## ⚙️ كيفية استخدام الصور في Next.js 15

### مثال Hero مع `next/image`:
```tsx
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <Image
        src="/images/04_greenhouse_wide.webp"
        alt="منظر داخلي لمحطة iGarden في عسفان"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Overlay */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'linear-gradient(to bottom, rgba(15,61,46,0.6), rgba(15,61,46,0.85))'
        }}
      />
      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div>
          <h1 className="text-cream text-6xl font-bold">
            نبني · نُوطّن · نُطوّر
          </h1>
          <p className="text-cream/90 mt-4 text-xl">
            الحديقة الذكية — حلول AgriFood Tech سعودية
          </p>
          <button className="bg-lime-accent text-deep-forest mt-8 rounded-full px-8 py-3 font-semibold">
            احجز جولة افتراضية
          </button>
        </div>
      </div>
    </section>
  );
}
```

### Responsive Image مع `srcset` (HTML خام):
```html
<picture>
  <source
    type="image/webp"
    srcset="
      /images/responsive/04_greenhouse_wide_mobile.webp 640w,
      /images/responsive/04_greenhouse_wide_tablet.webp 1024w,
      /images/responsive/04_greenhouse_wide_desktop.webp 1440w,
      /images/responsive/04_greenhouse_wide_full.webp 1920w
    "
    sizes="100vw"
  />
  <img
    src="/images/responsive/04_greenhouse_wide_desktop.jpg"
    alt="منظر داخلي لمحطة iGarden في عسفان"
    loading="lazy"
    width="1440"
    height="810"
  />
</picture>
```

---

## 📍 موضع الصور في المستودع

```
public/
└── images/
    ├── hero/
    │   └── 04_greenhouse_wide.{jpg,webp}
    ├── about/
    │   ├── 01_tower_visitors.{jpg,webp}
    │   └── 06_inspector_crops.{jpg,webp}
    ├── products/
    │   └── 02_tower_closeup.{jpg,webp}
    ├── services/
    │   ├── 03_cabbage_diversity.{jpg,webp}
    │   └── 05_tomato_tunnel.{jpg,webp}
    └── responsive/
        └── *_mobile.{jpg,webp}
        └── *_tablet.{jpg,webp}
        └── *_desktop.{jpg,webp}
        └── *_full.{jpg,webp}
```

---

## ⚠️ تحذيرات قانونية وأخلاقية

### إذن نشر الأشخاص (PDPL — قانون حماية البيانات الشخصية)
الصور 1، 2، 6 تحتوي وجوهاً واضحة. **ممنوع نشرها على الموقع قبل:**
- الحصول على إذن خطّي من كل شخص (نموذج Image Release Form)
- الاحتفاظ بنسخة من الإذن في ملف الشركة لمدة 5 سنوات على الأقل
- في حال الرفض → استخدام blur على الوجوه قبل النشر

**نموذج إذن سريع (عربي):**
> "أنا [الاسم]، أوافق على استخدام صورتي الواردة في الفيديو/الصور المُلتقطة بتاريخ [التاريخ] في محطة iGarden بعسفان، لأغراض تسويقية ونشر على موقع igarden.sa وقنوات التواصل الاجتماعي الرسمية لشركة الحديقة الذكية، دون أي مقابل مادي. هذا الإذن سارٍ حتى إشعار خطي بالعكس."

### استخدام صور Tower
لا تذكر أن Tower منتج "حصري لـ iGarden" إذا كان في الواقع **منتج مستورد معاد توطينه**. السرد الصحيح:
- ✅ "نُوطّن نظام الأبراج العمودية بمعايير سعودية"
- ❌ "ابتكرنا نظام الأبراج العمودية"

---

## 🎬 توصية إعادة التصوير (P1)

عند جلسة تصوير الفريق (المُدرجة في P1)، خصّص **ساعة إضافية** لإعادة تصوير هذه اللقطات بـ 4K:

| اللقطة الأصلية | إعادة التصوير المُوصى بها |
|---|---|
| 04_greenhouse_wide | iPhone 15 Pro / Sony A7 IV — 4K — Golden Hour قبل الغروب بساعة |
| 02_tower_closeup | إضاءة مُكمّلة (LED panel) — Macro lens لتفاصيل الفراولة |
| 01_tower_visitors | إعادة تصوير مع الفريق الرسمي + شعار iGarden في الخلفية |

**الميزانية المتوقعة لجلسة 4 ساعات:** 2,000 - 4,000 ريال (مصور محترف + مساعد)

---

**انتهى الـ Brief.**

— أُعدّ بواسطة المستشار التقني لـ iGarden
