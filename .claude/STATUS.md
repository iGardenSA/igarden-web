# iGarden Status — 26 أبريل 2026

## آخر تحديث
- التاريخ: 26 أبريل 2026 (~01:30 صباحاً)
- آخر commit: `d474739` feat(hero): full-bleed video hero + scroll-aware transparent header
- Branch: `feat/rebuild-v1.4`

## ما أُنجز هذا اليوم (25-26 أبريل)

### تنظيف الكود (5 commits)
- حذف 13 ملف ميت من v1.2 (570 سطر)
- إصلاح barrel export في `sections/index.ts`
- حذف Sanity scripts من package.json (الكود نظيف، scripts كانت بقايا)

### Hero Full-Bleed
- HeroSection.tsx: استبدال split layout بفيديو خلفية كامل
- Video assets: hero-video.{mp4,webm} + hero-poster.jpg
- Triple gradient overlay لقابلية القراءة
- 15 ثانية loop، 1920×1080، صامت
- إضافة "نَبني" بالحركات

### Header Scroll-Aware
- شفاف على home (Y < 50px)، صلب بعد scroll
- Logo: أبيض ↔ أخضر تلقائياً
- Nav links: cream ↔ deep-green
- Position: fixed (transparent) / sticky (solid)
- لا يكسر باقي الصفحات

## Build Status
- ✅ 16/16 صفحات prerendered
- ✅ TypeScript نظيف
- ✅ Tailwind v4 + Next 16 + React 19

## ما لم يُنجز بعد

### P0 — Vercel Deploy
- [ ] إنشاء `.env.local` بمتغيرات Supabase
- [ ] Vercel deployment + اختبار
- [ ] ربط دومين igarden.sa

### P0 — المحتوى
- [ ] رفع 9 صور عسفان إلى public/images/osfan/
- [ ] قصة "لماذا بدأنا" (120-150 كلمة)
- [ ] قصة التَوطين لـ iGarden Tower
- [ ] FAQ × 15 سؤال (5 لكل ركيزة)

### P0 — التحقق
- [ ] Lighthouse audit (Mobile + Desktop)
- [ ] اختبار جوال فعلي

### P1 — بعد سنبلة
- [ ] جلسة تصوير الفريق (3 أعضاء)
- [ ] OG Images الـ 6 (1200×630)
- [ ] PDF Lead Magnet
- [ ] صفحات /privacy + /terms (بعد استشارة PDPL)
- [ ] حذف ملفات video.mp4 المكررة (غير ضروري الآن)

## ملاحظات تقنية

### تبديل Logo
- Transparent: `/logo/lockup-horizontal-en-white.png` (PNG, 19KB)
- Solid: `/logo/lockup-horizontal-en.svg` (SVG)
- لاحقاً: تحويل الـ PNG إلى SVG أبيض للجودة

### Hero Video
- الجودة: 1080p مُعالَج من 480p (upscale + grading)
- Loop seam خفيف لكن مخفي بالـ overlay
- يحتاج إعادة تصوير 4K في P1

### Navigation
- 7 روابط (الرئيسية، المنتجات، عسفان، من نحن، الأكاديمية، المدونة، تواصل)
- Mobile drawer من اليمين، 300px width
- z-50 للـ header، z-40 للـ backdrop، z-50 للـ drawer
