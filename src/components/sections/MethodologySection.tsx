import { Wrench, MapPin, RefreshCw } from "lucide-react";

const BENEFITS = [
  {
    Icon: Wrench,
    verb: "نبني",
    title: "نظام يُركَّب، لا صندوق يُسلَّم",
    text: "فريقنا الميداني في موقعك من اليوم الأوّل حتى أوّل دورة ري ناجحة. لا تَستلم كرتوناً وكتيّب ترجمة — تَستلم نظاماً يَعمل، وفريقاً يَفهم محصولك.",
  },
  {
    Icon: MapPin,
    verb: "نُوطّن",
    title: "قطع غيار من جدة، لا من ألمانيا",
    text: "لوحات التحكّم مُصنَّعة محلياً بمواصفاتنا. عطل في يوليو؟ القطعة عندك خلال أيام، لا أسابيع. الدعم بنفس لغتك وفي نفس منطقتك الزمنية.",
  },
  {
    Icon: RefreshCw,
    verb: "نُطوّر",
    title: "تَحديث كل موسم، لا تَجميد على الإصدار",
    text: "ما تعلّمناه من فشل عسفان في الصيف يَتحوّل إلى تَحسين عند عملاء الموسم القادم. شريكنا يَحصل على آخر إصدار دائماً — ليس من اشترى أقدم نسخة.",
  },
];

export function MethodologySection() {
  return (
    <section className="section-light py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-lime text-lg font-bold uppercase tracking-widest mb-3">
            ما تَحصل عليه
          </p>
          <h2 className="h2 text-deep-green mb-4">
            ثلاثة فروق تَشعر بها من اليوم الأوّل
          </h2>
          <p className="body-large text-medium-gray max-w-2xl mx-auto">
            ليست شعارات داخلية — هي الفرق الذي يَفصل بين نظامٍ يَعمل ٥ سنوات،
            ونظامٍ يَتعطّل في ثاني صيف.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BENEFITS.map(({ Icon, verb, title, text }) => (
            <div
              key={verb}
              className="bg-white rounded-card p-8 shadow-soft hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Icon + verb — centered square block */}
              <div className="flex flex-col items-center justify-center w-24 h-24 rounded-2xl bg-deep-green mx-auto mb-6">
                <Icon className="w-8 h-8 text-lime mb-1" aria-hidden />
                <span className="text-lime font-bold text-xl leading-tight tracking-wide">
                  {verb}
                </span>
              </div>

              <h3 className="h4 text-deep-green mb-3 text-center">{title}</h3>
              <p className="body-base text-medium-gray text-center">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
