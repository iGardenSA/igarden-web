# CLAUDE.md Changelog

---

## v3.0 — 2026-05-17

**نوع التغيير:** إعادة بناء شامل (Stage A)
**الفرع:** `refactor/claude-md-v3-docs-split`
**PR:** مفتوح (STOP-GATE 6)

### ما تغيّر

**CLAUDE.md:**
- أُعيد بناؤه من 758 سطراً → 263 سطراً (index-style)
- يُشير إلى `docs/` بدل تضمين كل التفاصيل
- Quick Rules (5 قواعد ذهبية) في الصدارة
- Protocol اكتشافي قبل أي تعديل

**docs/ (جديدة كلياً):**
- `docs/LEXICON.md` — 41 مدخلاً معتمداً (من Notion، v3.2)
- `docs/TIER-MATRIX.md` — مصفوفة الانضباط: Tier 0/1/2-A/2-B/3
- `docs/BRAND-BIBLE.md` — الملخص التشغيلي لـ v3.0 + v3.1 + v3.2
- `docs/CONSTITUTION.md` — الفصول ذات الصلة بالتطوير (§8/8.5/12.4/13/14/17/18/19.4)
- `docs/PROJECT-STATE.md` — الحالة الجوهرية + Roadmap + KPIs

### السبب

- CLAUDE.md v2.0 كان 758 سطراً — ثقيل ومُكرَّر مع Notion
- معلومات Lexicon كانت مُبعثَرة بين ملفات متعددة
- غياب قاعدة الهرم الشعاراتي مكتوبةً بوضوح في الكود

### ما لم يتغيّر

- CLAUDE.md لا يزال يحتوي Quick Rules + Company Identity + Site Architecture + Code Rules
- لا تغيير على الكود الفعلي للموقع
- لا تغيير على الـ Tech Stack أو الـ Design System

---

## v2.0 — 2026-04-24

Full rewrite — إعادة بناء شامل بعد Master Doc v1.4.
متوافق مع: iGarden Master v1.4 + Pitch v2 + Brand Guidelines v1.4 (قيد التحديث).

---

## v1.x — 2026-03 / 2026-04

النسخ الأولى — تأسيس قواعد الـ Tech Stack + الهوية الأولية.
