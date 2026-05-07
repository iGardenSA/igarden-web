import { Info } from "lucide-react";

export function StageHonesty() {
  return (
    <div className="bg-[#0F3D2E]/5 border border-[#0F3D2E]/15 rounded-xl px-5 py-4 flex items-start gap-3" dir="rtl">
      <Info className="w-4 h-4 text-[#0F3D2E]/60 flex-shrink-0 mt-0.5" aria-hidden="true" />
      <p className="text-sm text-[#0F3D2E]/70 leading-relaxed">
        نحن في مرحلة تشغيل مبكر بإيرادات حقيقية. بعض الطبقات قيد التطوير
        الميداني، ونُصرّح بمرحلتها كما هي.
      </p>
    </div>
  );
}
