/* بطاقتان نصّيتان — ⛔ بلا إطار صورة · ⛔ بلا أي ذكر لترخيص أو اعتماد عضوي. */
import { FlaskConical, Leaf } from "lucide-react";

const CARDS = [
  {
    Icon: Leaf,
    tag: "مشروع ميداني جارٍ",
    title: "الزراعة المائية العضوية",
    text: "نظام زراعة مائية يعمل بمغذّيات عضوية في مشروع قائم داخل مزرعة عضوية.",
  },
  {
    Icon: FlaskConical,
    tag: "قيد التطوير في عسفان",
    title: "البيوبونيك (Bioponics)",
    text: "نطوّر مساراً يعتمد التحلّل الحيوي لإتاحة المغذّيات للنبات، ونختبر مصادر عضوية محلية إلى جانب المغذّيات المستخدمة في المشروع الميداني.",
  },
] as const;

export function InnovationTracks() {
  return (
    <section className="bg-white section-padding" dir="rtl">
      <div className="container-igarden">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="heading-eyebrow mb-3">بطاقة الابتكار</p>
          <h2 className="heading-section">حين لا يناسب مشروعك حلّ جاهز، نبدأ بتحديد ما يستحقّ الاختبار</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {CARDS.map(({ Icon, tag, title, text }) => (
            <article
              key={title}
              className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border)] p-7"
            >
              <Icon
                className="w-8 h-8 text-[var(--color-brand-600)] mb-4"
                aria-hidden="true"
              />
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-[var(--color-brand-600)]/10 text-[var(--color-brand-600)] mb-3">
                {tag}
              </span>
              <h3 className="text-lg font-bold text-deep-green mb-2">{title}</h3>
              <p className="text-sm text-medium-gray leading-relaxed">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
