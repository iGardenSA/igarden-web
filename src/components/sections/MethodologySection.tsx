import { Building2, Globe2, Microscope } from "lucide-react";

const PILLARS = [
  {
    Icon: Building2,
    title: "نَبني",
    text: "نَبني المنظومة من الصفر — نُصمّم ونُنفّذ ونُسلّم. مزارع وأنظمة تحكّم تعمل ميدانياً، لا على الورق.",
  },
  {
    Icon: Globe2,
    title: "نُوطّن",
    text: "نصمّم ونطوّر ونصنّع أجزاءً مختارة من منظوماتنا في السعودية — منها قالب iGarden Tower وإنتاج أجزائه البلاستيكية محلياً — بالتعاون مع مصنّعين ومورّدين محلّيين، ونستخدم مكوّنات عالمية حيث تكون الأنسب.",
  },
  {
    Icon: Microscope,
    title: "نُطوّر",
    text: "نُواجه الصعوبات بالابتكار، لا بالاستسلام لحدود ما جرّبناه من أنظمة جاهزة. R&D داخلي مستمرّ.",
  },
];

export function MethodologySection() {
  return (
    <section className="section-light py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="h2 text-deep-green mb-4">منهجنا الثلاثي</h2>
          <p className="body-large text-medium-gray max-w-2xl mx-auto">
            ما يُميّز{" "}
            <span dir="ltr" className="ltr-inline font-latin font-bold">
              iGarden
            </span>{" "}
            ليس التقنية وحدها — بل كيف نُوصلها إليك.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="bg-white rounded-card p-8 shadow-soft hover:shadow-md transition-shadow flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-lime/10 flex items-center justify-center mb-6">
                <Icon className="w-7 h-7 text-deep-green" aria-hidden />
              </div>
              <h3 className="h3 text-deep-green mb-3">{title}</h3>
              <p className="body-base text-medium-gray">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
