-- leads.preferred_contact — طريقة التواصل التي يختارها الزائر (Wave 2E أضافت الحقل في
-- النموذج لكنه ذهب للإشعار فقط ولم يُحفَظ). عمود nullable بقيد قيم — لا default كي
-- تبقى الصفوف القديمة صادقة (لم يُسأل أصحابها).
--
-- ⛔ S2 · G-DATA: يُطبَّق على igarden-web (ozheuxpcgvhzkebriqij) بموافقة علي فقط.
-- Rollback: إسقاط العمود preferred_contact وحده (لا يمسّ أي صفّ).

alter table public.leads
  add column if not exists preferred_contact text
  check (preferred_contact in ('whatsapp', 'phone', 'email'));

comment on column public.leads.preferred_contact is
  'قناة التواصل التي اختارها الزائر في النموذج: whatsapp | phone | email. null = لم يُسأل.';
