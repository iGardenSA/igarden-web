import Link from "next/link";
import { Leaf, Phone, Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/constants";

export function FinalCtaSection() {
  return (
    <section className="container-igarden py-16 md:py-24">
      <div className="relative overflow-hidden rounded-3xl bg-[var(--color-brand-600)] text-white">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 90% 50%, var(--color-accent-500) 0%, transparent 50%), radial-gradient(circle at 10% 20%, var(--color-accent-300) 0%, transparent 40%)" }} />
        <div className="relative p-10 md:p-16 lg:p-20">
          <div className="max-w-3xl">
            <Leaf className="h-10 w-10 text-[var(--color-accent-300)] mb-6" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">جاهز لبدء رحلتك<br />في الزراعة الذكية؟</h2>
            <p className="text-lg text-white/85 leading-relaxed mb-10 max-w-2xl">احجز استشارة مجانية مع فريقنا التقني — سنصمّم لك حلاً يناسب موقعك ومناخك وأهدافك الإنتاجية، خلال 72 ساعة من تواصلك.</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="accent" size="xl" asChild><Link href="/contact">احجز استشارتك المجانية</Link></Button>
              <Button variant="light" size="xl" asChild><Link href="/products">تصفّح المنتجات</Link></Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-10 border-t border-white/15">
              <a href={`tel:${CONTACT.phoneE164}`} className="flex items-center gap-3 text-white/90 hover:text-[var(--color-accent-300)] transition-colors group" dir="ltr">
                <div className="h-10 w-10 rounded-xl bg-white/10 group-hover:bg-[var(--color-accent-500)]/20 flex items-center justify-center transition-colors"><Phone className="h-4 w-4" /></div>
                <div className="text-start"><p className="text-xs text-white/60">اتصال مباشر</p><p className="text-sm font-semibold">{CONTACT.phone}</p></div>
              </a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 text-white/90 hover:text-[var(--color-accent-300)] transition-colors group" dir="ltr">
                <div className="h-10 w-10 rounded-xl bg-white/10 group-hover:bg-[var(--color-accent-500)]/20 flex items-center justify-center transition-colors"><Mail className="h-4 w-4" /></div>
                <div class ="text-start"><p className="text-xs text-white/60">راسلنا</p><p className="text-sm font-semibold">{CONTACT.email}</p></div>
              </a>
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/90 hover:text-[var(--color-accent-300)] transition-colors group">
                <div className="h-10 w-10 rounded-xl bg-white/10 group-hover:bg-[var(--color-accent-500)]/20 flex items-center justify-center transition-colors"><MessageSquare className="h-4 w-4" /></div>
                <div><p className="text-xs text-white/60">واتساب</p><p className="text-sm font-semibold">رد خلال ساعات العمل</p></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
