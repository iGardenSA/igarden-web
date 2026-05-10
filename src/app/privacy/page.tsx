import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY, CONTACT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "سياسة الخصوصية | iGarden",
  description:
    "سياسة الخصوصية الخاصة بـ iGarden — شركة انتيليجنت غاردن. كيف نَجمع بياناتك ونَستخدمها ونَحميها وفقاً لنظام حماية البيانات الشخصية في المملكة العربية السعودية.",
  alternates: { canonical: "https://igarden.sa/privacy" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "سياسة الخصوصية | iGarden",
    description: "كيف نَجمع بياناتك ونَستخدمها ونَحميها وفقاً لنظام PDPL السعودي.",
    images: [{ url: "/api/og?title=%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9+%D8%A7%D9%84%D8%AE%D8%B5%D9%88%D8%B5%D9%8A%D8%A9+%E2%80%94+iGarden&sub=%D9%86%D8%B8%D8%A7%D9%85+PDPL+%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A", width: 1200, height: 630 }],
    type: "website",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "سياسة الخصوصية | iGarden",
    description: "حماية بياناتك وفق نظام PDPL السعودي.",
    images: ["/api/og?title=%D8%B3%D9%8A%D8%A7%D8%B3%D8%A9+%D8%A7%D9%84%D8%AE%D8%B5%D9%88%D8%B5%D9%8A%D8%A9"],
  },
};

const LAST_UPDATED = "8 مايو 2026";

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-deep-green py-20 md:py-24" dir="rtl">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-lime text-sm font-bold uppercase tracking-widest mb-3">
            وثيقة قانونية
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-cream mb-4">
            سياسة الخصوصية
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

            <Block title="١. من نحن">
              <p>
                هذه السياسة تَخصّ {COMPANY.legalFull} — العلامة التجارية{" "}
                <span dir="ltr" className="ltr-inline font-latin font-medium">
                  iGarden
                </span>{" "}
                (انتيليجنت غاردن)، وهي شركة سعودية مرخّصة من هيئة الاستثمار (MISA #
                <span dir="ltr" className="ltr-inline font-latin">
                  24926249716
                </span>
                )، ومقرّها {COMPANY.hq}.
              </p>
              <p>
                نَلتزم بحماية خصوصيّتك وفقاً لنظام حماية البيانات الشخصية الصادر
                في المملكة العربية السعودية ولوائحه التنفيذية.
              </p>
            </Block>

            <Block title="٢. البيانات التي نَجمعها">
              <p>
                نَجمع البيانات التي تُقدّمها لنا طوعياً عند:
              </p>
              <ul className="list-disc ps-6 space-y-2">
                <li>تعبئة نماذج التواصل أو طلب الاستشارة (الاسم، الجوّال، البريد الإلكتروني، الجهة، تفاصيل المشروع).</li>
                <li>حجز زيارة لمحطّة عسفان أو طلب عرض سعر.</li>
                <li>الاشتراك في النشرة البريدية أو طلب نسخة المستثمرين.</li>
                <li>التواصل المباشر عبر البريد الإلكتروني أو واتساب.</li>
              </ul>
              <p>
                كما نَجمع تلقائياً معلومات تقنية محدودة (نوع المتصفح، نظام
                التشغيل، عنوان IP، صفحات الموقع التي زرتها) لأغراض تحسين الأداء
                والإحصاءات.
              </p>
            </Block>

            <Block title="٣. كيف نَستخدم بياناتك">
              <ul className="list-disc ps-6 space-y-2">
                <li>الردّ على استفساراتك وتقديم الخدمات المطلوبة.</li>
                <li>إرسال عروض أسعار، تقارير، أو محتوى تعليمي بناءً على طلبك.</li>
                <li>تحسين تجربتك على الموقع وقياس فعاليّة المحتوى.</li>
                <li>التواصل التسويقي — فقط بعد موافقتك الصريحة، ويُمكنك إلغاء الاشتراك في أي وقت.</li>
                <li>الالتزام بالمتطلّبات النظامية والقانونية.</li>
              </ul>
            </Block>

            <Block title="٤. مشاركة البيانات مع أطراف ثالثة">
              <p>
                لا نَبيع بياناتك لأيّ طرف ثالث. نَستخدم مزوّدي خدمات تقنية
                موثوقين لتشغيل الموقع وإدارة العلاقات مع العملاء، أبرزهم:
              </p>
              <ul className="list-disc ps-6 space-y-2">
                <li>
                  <strong>Supabase</strong> — لتخزين بيانات النماذج (مركز
                  البيانات في فرانكفورت، أوروبا).
                </li>
                <li>
                  <strong>Vercel</strong> — لاستضافة الموقع والأداء.
                </li>
                <li>
                  <strong>Google Analytics / Vercel Analytics</strong> —
                  لقياسات إحصائيّة مجهولة الهويّة.
                </li>
              </ul>
              <p>
                قد نُشارك بياناتك مع الجهات التنظيمية المختصّة عند طلبها بموجب
                نظام رسمي.
              </p>
            </Block>

            <Block title="٥. حقوقك">
              <p>وفقاً لنظام حماية البيانات الشخصية السعودي، يَحقّ لك:</p>
              <ul className="list-disc ps-6 space-y-2">
                <li>الوصول إلى بياناتك الشخصية التي نَحتفظ بها.</li>
                <li>طلب تصحيح البيانات غير الدقيقة.</li>
                <li>طلب حذف بياناتك (حقّ الإلغاء)، ضمن الحدود النظامية.</li>
                <li>سحب موافقتك على المعالجة في أيّ وقت.</li>
                <li>تقديم شكوى للهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا).</li>
              </ul>
              <p>
                لتفعيل أيّ من هذه الحقوق، تَواصل معنا على{" "}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-lime hover:text-deep-green font-medium"
                >
                  <span dir="ltr" className="ltr-inline font-latin">
                    {CONTACT.email}
                  </span>
                </a>
                .
              </p>
            </Block>

            <Block title="٦. ملفّات تعريف الارتباط (Cookies)">
              <p>
                نَستخدم ملفّات تعريف الارتباط الأساسية لضمان عمل الموقع بشكل
                صحيح، وملفّات تحليلية لقياس الأداء. يُمكنك تعطيلها من إعدادات
                متصفّحك.
              </p>
            </Block>

            <Block title="٧. أمن البيانات">
              <p>
                نَتّخذ إجراءات تقنية وتنظيمية مناسبة لحماية بياناتك من الوصول
                غير المُصرَّح به، أو الفقدان، أو التغيير، أو الإفصاح. ومع ذلك،
                لا يُمكن ضمان أمن مطلق لأيّ نقل عبر الإنترنت.
              </p>
            </Block>

            <Block title="٨. الاحتفاظ بالبيانات">
              <p>
                نَحتفظ ببياناتك للمدّة اللازمة لتحقيق الأغراض الموضّحة في هذه
                السياسة، أو وفقاً لما تَفرضه الأنظمة المرعيّة.
              </p>
            </Block>

            <Block title="٩. تَحديثات السياسة">
              <p>
                قد نُحدّث هذه السياسة من وقت لآخر. ستَجد آخر تاريخ تحديث في
                أعلى هذه الصفحة. التغييرات الجوهرية ستُبلَّغ بها عبر إشعار واضح
                على الموقع أو بالبريد الإلكتروني.
              </p>
            </Block>

            <Block title="١٠. التواصل معنا">
              <p>لأيّ استفسار حول هذه السياسة:</p>
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

            <p className="text-medium-gray text-sm pt-6 border-t border-light-gray">
              للاطّلاع على شروط الاستخدام، يُرجى زيارة{" "}
              <Link href="/terms" className="text-lime hover:text-deep-green font-medium">
                الشروط والأحكام
              </Link>
              .
            </p>
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
