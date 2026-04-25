import { CheckCircle2 } from "lucide-react";

const TRUST_ITEMS = [
  { text: "مرخّصة", label: "MISA", number: "24926249716" },
  { text: "نموذج صناعي", label: "SAIP", number: "#423450193" },
  { text: "محطّة عسفان للتجارب قائمة", label: null, number: null },
  { text: "Smart OS Backend يعمل — Demo حيّ", label: null, number: null },
];

export function TrustBar() {
  return (
    <section className="bg-white border-y border-light-gray py-5">
      <div className="container mx-auto px-4 max-w-7xl">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {TRUST_ITEMS.map((item) => (
            <li key={item.text} className="flex items-start gap-2 text-sm text-dark-text">
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
