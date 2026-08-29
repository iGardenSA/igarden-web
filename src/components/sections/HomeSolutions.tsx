import Link from "next/link";

export function HomeSolutions() {
  return (
    <section
      className="py-12 bg-gradient-to-b from-white to-emerald-50/30 border-t border-emerald-100"
      dir="rtl"
      aria-label="حلول منزلية"
    >
      <div className="container mx-auto max-w-5xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-right">

          {/* النص الرئيسي */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              نُقدّم أيضاً حلولاً للمنزل
            </h2>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              عبر{" "}
              <span className="font-semibold text-emerald-700">
                iGarden Home Solutions
              </span>
              ، نوفّر حلولاً مدروسة للزراعة المنزلية الذكية — بنفس المعايير
              الصناعية، بمقاس يناسب البيوت والمكاتب.
            </p>
          </div>

          {/* زر CTA */}
          <div className="flex-shrink-0">
            <Link
              href="/home-solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              <span>زيارة المتجر</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
