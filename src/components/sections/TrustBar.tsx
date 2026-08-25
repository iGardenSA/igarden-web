import { CheckCircle2 } from "lucide-react";

const TRUST_ITEMS = [
  { text: "شركة سعودية ريادية ومبتكرة في التقنيات الزراعية", label: null, number: null },
  { text: "مرخّصة", label: "MISA", number: "24926249716" },
  { text: "مشروع جديد أو تطوير منشأة قائمة", label: null, number: null },
  { text: "نموذج صناعي مسجّل لـiGarden Tower", label: "SAIP", number: "#423450193" },
  { text: "مرفق R&D في عسفان قابل للزيارة", label: null, number: null },
];

export function TrustBar() {
  return (
    <section className="bg-white border-y border-light-gray py-5">
      <div className="container mx-auto px-4 max-w-7xl">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {TRUST_ITEMS.map((item) => (
            <li key={item.text} className="flex items-start gap-2 text-base text-dark-text">
              <CheckCircle2
                className="w-5 h-5 text-lime flex-shrink-0 mt-0.5"
                aria-hidden
              />
              <span>
                {item.text}
                {item.label && item.number && (
                  <>
                    {" "}
                    <span dir="ltr" className="ltr-inline font-latin font-medium text-medium-gray">
                      {item.label}: {item.number}
                    </span>
                  </>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
