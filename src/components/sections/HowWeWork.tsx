const STEPS = [
  {
    step: "01",
    title: "التقييم الميداني",
    desc: "نزور موقعك، ندرس المناخ والتربة والمياه، ونُحدّد الحلّ الأمثل لظروفك الفعلية — لا حلول جاهزة.",
  },
  {
    step: "02",
    title: "التصميم والتخصيص",
    desc: "نُصمّم النظام بمدخلات سعودية محلية، ونُوطّن التقنية العالمية لتصمد في +45°C.",
  },
  {
    step: "03",
    title: "التركيب والتشغيل",
    desc: "فريقنا الميداني يُركّب ويُشغّل حتى تصل أهداف الإنتاجية المتّفق عليها.",
  },
  {
    step: "04",
    title: "الدعم والتطوير المستمرّ",
    desc: "Smart OS يُراقب لحظياً، وفريقنا يُحدّث الأنظمة باستمرار. مشروعك لا يتوقف بعد التسليم.",
  },
];

export function HowWeWork() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-lime text-xs font-bold uppercase tracking-widest mb-2">
            من الفكرة إلى الحصاد
          </p>
          <h2 className="h2 text-deep-green">كيف نعمل معك</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line — desktop only */}
          <div
            className="absolute top-8 right-0 left-0 h-px bg-light-gray hidden lg:block"
            aria-hidden
          />

          {STEPS.map((s) => (
            <div key={s.step} className="relative flex flex-col items-center text-center lg:items-start lg:text-start">
              {/* Step number circle */}
              <div className="relative z-10 w-16 h-16 rounded-full bg-cream border-2 border-lime flex items-center justify-center mb-4 flex-shrink-0">
                <span className="stat-num !text-xl !text-deep-green">{s.step}</span>
              </div>
              <h3 className="h4 text-deep-green mb-2">{s.title}</h3>
              <p className="body-sm text-medium-gray">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
