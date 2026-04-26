import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Droplets, Sprout, Smartphone } from "lucide-react";

export function HomeSolutions() {
  return (
    <section className="section-light py-20" dir="rtl">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-base font-medium text-lime mb-3">حلول منزلية</p>
          <h2 className="h2 text-deep-green mb-4">ابدأ زراعتك من بيتك</h2>
          <p className="text-lg text-medium-gray max-w-2xl mx-auto">
            ليس كل حل يحتاج مزرعة — قدمنا للأفراد نسخة مصغرة من تقنياتنا.
          </p>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-card shadow-soft overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
            <div className="relative bg-cream min-h-[320px] lg:min-h-[420px]">
              <Image
                src="/images/osfan-full/02_tower_closeup.jpg"
                alt="iGarden Tower Mini"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-4 right-4 bg-lime text-deep-green px-3 py-1.5 rounded-full text-base font-medium">
                صناعة سعودية
              </div>
            </div>

            <div className="p-8 lg:p-10 flex flex-col justify-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-deep-green mb-3">
                <span dir="ltr" className="ltr-inline font-latin">iGarden Tower Mini</span>
              </h3>
              <p className="text-lg text-medium-gray mb-2">برج المنزل الذكي</p>
              <p className="text-lg text-dark-text leading-relaxed mb-6">
                برج زراعة هوائية مصغر للمنازل والشقق — ازرع 30+ نبتة في متر واحد.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-lime/10 flex items-center justify-center">
                    <Droplets className="w-5 h-5 text-deep-green" />
                  </div>
                  <span className="text-lg text-dark-text">توفير 95% من المياه</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-lime/10 flex items-center justify-center">
                    <Sprout className="w-5 h-5 text-deep-green" />
                  </div>
                  <span className="text-lg text-dark-text">زراعة بدون تربة</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-lime/10 flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-deep-green" />
                  </div>
                  <span className="text-lg text-dark-text">تطبيق جوال للتحكم</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://shop.igarden.sa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-lime hover:bg-bright-lime text-deep-green rounded-lg text-lg font-medium">
                  تسوق من المتجر
                  <ArrowLeft className="w-5 h-5" />
                </a>
                <Link href="/products/hydroponics" className="inline-flex items-center justify-center px-6 py-3.5 bg-transparent text-deep-green border border-deep-green/30 rounded-lg text-lg font-medium">
                  تفاصيل أكثر
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
