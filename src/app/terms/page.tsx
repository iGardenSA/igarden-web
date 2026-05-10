import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "الشروط والأحكام | iGarden",
  description:
    "الشروط والأحكام الخاصة باستخدام موقع iGarden — شركة انتيليجنت غاردن. شروط الخدمة والاستخدام وفقاً للأنظمة المعمول بها في المملكة العربية السعودية.",
  alternates: { canonical: "https://igarden.sa/terms" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "8 مايو 2026";

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-deep-green py-20 md:py-24" dir="rtl">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-lime text-sm font-bold uppercase tracking-widest mb-3">
            وثيقة قانونية
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-cream mb-4">
            الشروط والأحكام
          </h1>
          <p className="text-cream/70 text-base">
            آخر تحديث: {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 md:py-20" dir="rtl">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="prose-igarden space-y-8 text-medium-gray leading-relaxed">

            <Block title="١. مُقدّمة">
              <p>
                باستخدامك لهذا الموقع{" "}
                <span dir="ltr" className="ltr-inline font-latin font-medium">
                  igarden.sa
                </span>
                ، فإنّك تُوافق على هذه الشروط والأحكام. الموقع تُديره {COMPANY.legalFull} —
                العلامة التجارية{" "}
                <span dir="ltr" className="ltr-inline font-latin font-medium">
                  iGarden
                </span>
                .
              </p>
            </Block>

            <Block title="٢. تَعريفات">
              <ul className="list-disc ps-6 space-y-2">
                <li><strong>الشركة / نحن:</strong> شركة انتيليجنت غاردن (ذات مسؤولية محدودة).</li>
                <li><strong>الموقع:</strong> النطاق <span dir="ltr" className="ltr-inline font-latin">igarden.sa</span> وكلّ النطاقات الفرعية التابعة له.</li>
                <li><strong>الخدمات:</strong> أنظمة الزراعة الذكية، Smart Controllers، المحميات الذكية، أنظمة الزراعة المائية، Smart OS، والاستشارات والتدريب.</li>
                <li><strong>المُستخدم / أنت:</strong> أيّ شخص يَزور الموقع أو يَطلب أيّاً من الخدمات.</li>
              </ul>
            </Block>

            <Block title="٣. استخدام الموقع">
              <p>تَوافق على:</p>
              <ul className="list-disc ps-6 space-y-2">
                <li>استخدام الموقع لأغراض مشروعة فقط.</li>
                <li>عدم محاولة الوصول غير المُصرَّح به إلى أيّ جزء من الموقع أو الأنظمة المرتبطة به.</li>
                <li>عدم إرسال محتوى مُسيء، احتيالي، أو ينتهك حقوق الآخرين.</li>
                <li>عدم استخدام بيانات الموقع تلقائياً (Scraping) دون إذن خطّي مُسبَق.</li>
              </ul>
            </Block>

            <Block title="٤. الملكية الفكرية">
              <p>
                جميع المحتويات على هذا الموقع — بما فيها الشعارات، النصوص،
                الصور، الفيديوهات، الرسوم، البرمجيات، والمنهجيات — مَملوكة لـ{" "}
                {COMPANY.legalFull} أو مُرخَّصة لها، ومحميّة بموجب قوانين الملكية
                الفكرية في المملكة العربية السعودية والأنظمة الدولية.
              </p>
              <p>
                العلامة التجارية{" "}
                <span dir="ltr" className="ltr-inline font-latin font-medium">
                  iGarden
                </span>{" "}
                النموذج الصناعي iGarden
                Tower مُسجَّل لدى الهيئة السعودية للملكية الفكرية برقم{" "}
                <span dir="ltr" className="ltr-inline font-latin">
                  SAIP #423450193
                </span>
                .
              </p>
              <p>
                لا يُسمح بنسخ أو إعادة نشر أو تعديل أيّ محتوى دون إذن خطّي مُسبَق.
              </p>
            </Block>

            <Block title="٥. الخدمات والعروض">
              <p>
                المعلومات والأرقام المنشورة في الموقع (مثل توفير المياه، كفاءة
                الطاقة، زيادة الإنتاجية) مَبنيّة على اختبارات ميدانية في محطّة
                عسفان وتجارب فعلية، وقد تَختلف النتائج بناءً على:
              </p>
              <ul className="list-disc ps-6 space-y-2">
                <li>نوع المحصول والدورة الزراعية.</li>
                <li>المناخ المحلي والظروف الميدانية.</li>
                <li>حجم النظام وطريقة التشغيل.</li>
                <li>جودة المياه والمدخلات.</li>
              </ul>
              <p>
                العقود الرسمية تَتضمّن مواصفات وضمانات محدّدة لكلّ مشروع.
              </p>
            </Block>

            <Block title="٦. الروابط الخارجية">
              <p>
                قد يَحتوي الموقع روابط لمواقع أو خدمات تَتبع جهات أخرى (مثل{" "}
                <span dir="ltr" className="ltr-inline font-latin">
                  demo.igarden.sa
                </span>
                ، منصّات التواصل الاجتماعي، أو أنظمة شركاء). لسنا مسؤولين عن
                محتوى تلك الجهات أو سياساتها.
              </p>
            </Block>

            <Block title="٧. حدود المسؤولية">
              <p>
                نَسعى لتقديم محتوى دقيق ومُحدَّث، لكنّ الموقع مُقدَّم "كما هو"
                دون ضمانات صريحة أو ضمنية. لا نَتحمّل المسؤولية عن:
              </p>
              <ul className="list-disc ps-6 space-y-2">
                <li>الأضرار الناتجة عن الاعتماد على معلومات الموقع دون استشارة فنية رسمية.</li>
                <li>انقطاع الخدمة أو الأخطاء التقنية الطارئة.</li>
                <li>تصرّفات أطراف ثالثة عبر الروابط الخارجية.</li>
              </ul>
              <p>
                لا تَنطبق هذه الحدود على المسؤوليات التعاقدية المُتّفَق عليها
                ضمن عقود رسمية مع عملائنا.
              </p>
            </Block>

            <Block title="٨. الخصوصية">
              <p>
                التعامل مع بياناتك الشخصية يَخضع لـ{" "}
                <Link href="/privacy" className="text-lime hover:text-deep-green font-medium">
                  سياسة الخصوصية
                </Link>{" "}
                التي تُعتبر جزءاً لا يتجزّأ من هذه الشروط.
              </p>
            </Block>

            <Block title="٩. القانون الواجب التطبيق">
              <p>
                تَخضع هذه الشروط للأنظمة المعمول بها في المملكة العربية
                السعودية. أيّ نزاع يَنشأ عن استخدام الموقع يَتمّ حلّه أمام
                الجهات القضائية المختصّة في مدينة جدة، ما لم يُتَّفَق على آلية
                تَحكيم في عقد منفصل.
              </p>
            </Block>

            <Block title="١٠. تَعديل الشروط">
              <p>
                نَحتفظ بحقّ تَعديل هذه الشروط في أيّ وقت. آخر تاريخ تحديث
                مُعلَن في أعلى الصفحة، والاستمرار في استخدام الموقع بعد التعديل
                يُعدّ موافقة على النسخة المُحدَّثة.
              </p>
            </Block>

            <Block title="١١. التواصل">
              <p>لأيّ استفسار حول هذه الشروط:</p>
              <ul className="space-y-2">
                <li>
                  <strong>البريد الإلكتروني:</strong>{" "}
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-lime hover:text-deep-green font-medium"
                  >
                    <span dir="ltr" className="ltr-inline font-latin">
                      {CONTACT.email}
                    </span>
                  </a>
                </li>
                <li>
                  <strong>الهاتف:</strong>{" "}
                  <span dir="ltr" className="ltr-inline font-latin">
                    {CONTACT.phone}
                  </span>
                </li>
                <li>
                  <strong>المقرّ:</strong> {COMPANY.hq}
                </li>
              </ul>
            </Block>
          </div>
        </div>
      </section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-deep-green mb-4">
        {title}
      </h2>
      <div className="space-y-3 text-base leading-relaxed">{children}</div>
    </div>
  );
}
