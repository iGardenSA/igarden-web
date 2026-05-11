'use client';

import { CalendarCheck, Thermometer, MonitorSmartphone, Award, FlaskConical } from 'lucide-react';

const stats = [
  { icon: FlaskConical,       number: 'منذ 2025',    label: '5+ ورش عمل مُنفَّذة'        },
  { icon: CalendarCheck,     number: 'منذ 2024',    label: 'تطوير مستمر'               },
  { icon: Thermometer,       number: '+45°C',        label: 'اختبار ميداني'             },
  { icon: MonitorSmartphone, number: '24/7',         label: 'Smart OS بلا انقطاع'       },
  { icon: Award,             number: 'SAIP',         label: 'براءة صناعية مسجّلة'       },
];

export default function HeroTrustBar() {
  return (
    <section
      className="bg-[#0F3D2E] border-y border-[#1B5E3F]"
      aria-label="إحصاءات الشركة"
    >
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
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
