# Project State — igarden.sa

> **SSOT for website work.** Read this first. If older docs or branch descriptions conflict with this file, this file wins.
> **Closeout date:** 2026-08-28
> **Branch of truth:** `main`
> **Deployment:** Vercel auto-deploy from `main`
> **Release baseline before this docs-only closeout:** `618426618852ac78e421d86b45e7fa0f0c7827f7`
> **Status:** WEBSITE PREVIOUS-WORK CLOSEOUT COMPLETE

---

## 1. Release reality

The previous website delivery sequence is closed and incorporated into `main`:

| PR | Scope | Result |
|---|---|---|
| #57 | Site narrative rebuild | **MERGED** — release anchor `a20b258` |
| #59 | Wave 2E — UI/content closeout, forms, lead attribution, notification hardening | **MERGED** — release anchor `a0fb868` |
| #58 | Corrected image pass | **MERGED** — release anchor `6184266` |

There are **no earlier website PRs waiting to be merged** as part of this closeout. Closed/unmerged historical PRs were reviewed and are intentionally superseded or archival; they must not be revived wholesale onto current `main`.

---

## 2. What is live in the closed website baseline

### UI / content
- Hero Tier-0 remains **«ازرع بذكاء.»**; no competing unverified slogan was introduced.
- The isolated «تعرّف على iGarden» strip was removed.
- YouTube points to `@igardensa`.
- Mega footer includes **حلول الأفراد والمنازل** and **المتجر**.
- `/fact-sheet` title duplication was corrected.
- `/home-solutions` unsupported parity wording was softened.
- `/app` prefetch is disabled where the internal route redirects to the external application origin, preventing the diagnosed redirect/prefetch CORS noise.
- The top white area in installed-PWA mode is classified as platform/PWA chrome behavior, not a website layout bug.

### Forms / lead capture
- Phone/WhatsApp remains required.
- Email is visible and optional unless the visitor selects email as the preferred contact method.
- `preferred_contact` supports WhatsApp / phone / email.
- First-touch attribution is captured at root layout, not at form-submit time.
- First landing page uses the existing `referrer` field; first UTM uses existing `utm_*` fields; **no database migration was required**.
- Applied to home assessment, contact, and Asfan visit forms.
- Privacy text was updated for first-touch/UTM storage.

### Lead email notification code
- `/api/notify-lead` is merged and hardened with same-origin checks, JSON/content-size limits, payload limits, safe `reply_to`, fixed internal recipient, and non-blocking failure behavior.
- **Email notification is intentionally INACTIVE until external operations are configured.** This is not an unfinished code change and does not block website use or lead saving.
- Future activation requires, as a new operations task: Vercel edge/firewall rate limiting, verified Resend sender domain, and `RESEND_API_KEY`/sender environment variables.
- Never claim notification delivery is active until a real production notification is verified.

### Approved image pass
Five approved public assets are live in the release baseline:
1. iGarden Tower product image — `/products/hydroponics` product card.
2. iGarden Tower port detail — inset inside that product card.
3. Approved 3×9 home-greenhouse crop image — `/products/hydroponics` hero.
4. Approved 3×9 home-greenhouse image — `/how-we-work` new-project path.
5. One Al-Ahsa field-installation image — `/products/smart-greenhouses`, explicitly limited to preparation/installation evidence.

Image rules remain: no client/person identity in public naming/copy, no mislabeling old/third-party hardware as a current iGarden product, and no duplicate use of these five assets across routes.

---

## 3. Items deliberately NOT carried forward as unfinished previous work

The following are **future backlog / new-scope candidates**, not blockers and not open work from the closed waves:

- Final Smart Controller product photography and verified hardware identity.
- Controller architecture diagram.
- IoT architecture diagram and stronger installed-sensor imagery.
- Organic/bioponics publishable evidence.
- Compliance/log/report visual example.
- New Smart OS publishable screenshot if/when a newer approved public view is selected.
- Optional automated test framework (Vitest/Jest/Playwright); the repository did not previously contain one.
- Optional Resend production activation as an external operations task.

Do not reopen these automatically when resuming website work. They require a new explicit scope.

---

## 4. Historical PR / branch disposition

### Historical merged work
Branches associated with merged PRs through #59 are historical refs only. Their work is represented in current `main`; do not merge them again.

### Closed, deliberately unmerged historical work
The following lines of work were inspected and are **ARCHIVE / SUPERSEDED**, not pending:
- `fix/seo-audit-pass1` (#41) — old sitemap/metadata state; useful material was transferred into later waves.
- `fix/seo-lexicon-pass2` (#42) — stacked on the old SEO pass; valid copy corrections were transferred later; wholesale merge would regress current structure.
- `docs/seo-context-layer` (#43) — old SEO governance snapshot; must be rebuilt from current SSOT if SEO governance is reopened.
- `claude/convert-to-html-IJFTQ` post-PR #2 work (#3) — pitch/company-profile artifact branch, not part of current website runtime closeout.

### Un-PR'd old branches inspected during closeout
These have **zero commits ahead of current main** and are therefore stale historical refs: `claude/fix-igarden-sunbolah-7jVlt`, `feat/app-page`, `feat/rebuild-v1.4`, `feat/wave-2b-hero-and-trust-bar`, `feat/wave-2b-prep-stats-update`, `fix/wave-2a-visual-polish`, `fix/wave-2a-visual-polish-r2`, `preview/claude-review`.

Two very old divergent review branches (`claude/github-project-selection-ozhkZ`, `claude/website-review-audit-NIRd3`) contain pre-current versions of navigation/legal/learn/roadmap work and are **SUPERSEDED** by later merged implementations; do not merge them.

**Remote branch refs may remain on GitHub for history. Their presence does not mean active work.** Local worktrees on Ali's laptop are outside this connected GitHub closeout and should be treated as local housekeeping only.

---

## 5. Definition of a clean starting point

A future website session begins from fresh `origin/main` only, then performs a new Reality Lock. It must **not** resume an old feature branch merely because the branch still exists.

Before a new wave:
1. `git fetch origin --prune`
2. verify `origin/main`
3. read this file and `docs/SITE-ARCHITECTURE.md`
4. define the new scope explicitly
5. create a fresh branch/worktree from current `origin/main`

---

## 6. Confidence / closeout

✓ #57, #59 and #58 are merged in the intended order.
✓ Wave 2E code and corrected approved image pass are in `main`.
✓ Historical unmerged SEO branches were reviewed and intentionally not merged.
✓ Resend is reclassified as a future external activation task, not an open development blocker.
✓ Image/controller/IoT/compliance gaps are reclassified as next-phase backlog, not unfinished prior-wave work.
⚠ Vercel/Resend account configuration cannot be asserted active from GitHub; do not claim it is.
