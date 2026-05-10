'use client';

import { GraduationCap, Award } from 'lucide-react';

const stats = [
  { icon: GraduationCap,  number: '5',      label: 'ورش «ازرع بذكاء» مُنفَّذة' },
  { icon: Award,          number: 'SAIP',   label: 'نموذج صناعي #423450193'    },
];

export default function HeroTrustBar() {
  return (
    <section
      className="bg-[#0F3D2E] border-y border-[#1B5E3F]"
      aria-label="إحصاءات الشركة"
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-center gap-10">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 justify-center md:justify-start"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#7CB342]/15 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#A5D63F]" aria-hidden="true" />
                </div>
                <div className="text-right">
                  <div className="text-[#A5D63F] font-bold text-base leading-tight">
                    {stat.number}
                  </div>
                  <div className="text-white/80 text-xs leading-tight">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
