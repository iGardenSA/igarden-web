# WAVE-2E-CLOSEOUT.md — Wave 2E final closeout

> **Final status:** CLOSED
> **Merged PR:** #59
> **Release anchor:** `a0fb86885b5b7d3b0f7be46d9dfa14f43f72b2b3`
> **Closed:** 2026-08-28

Wave 2E is no longer an active branch of work. This document records the final disposition only; `PROJECT-STATE.md` is the governing SSOT.

---

## Delivered

### UI / content
- Retained the production Tier-0 hero **«ازرع بذكاء.»**; no alternate unverified literal was invented.
- Removed the standalone «تعرّف على iGarden» strip.
- Corrected YouTube to `@igardensa`.
- Added Home Solutions and Store entries to the Mega Menu footer strip.
- Corrected `/fact-sheet` title duplication.
- Softened unsupported commercial-parity wording in `/home-solutions`.
- Diagnosed `/app` redirect/prefetch CORS noise and disabled prefetch at the three internal `/app` link surfaces.
- Classified the installed-PWA top white area as platform/PWA chrome behavior, not a site layout defect.

### Forms
- Phone/WhatsApp required.
- Email visible and optional unless `preferred_contact=email`.
- Preferred-contact choices: WhatsApp / phone / email.
- Lead is saved before notification is attempted; notification failure never turns a saved lead into a user-facing submission error.

### First-touch attribution
- Captured from root layout using first-touch local storage.
- First landing page uses existing `referrer`.
- UTM uses existing `utm_source`, `utm_medium`, `utm_campaign`.
- Current URL / first-touch metadata is carried in existing `source_url` convention.
- Applied to home assessment, contact, and Asfan visit forms.
- Privacy copy updated.
- **No schema migration.**

### Notification endpoint hardening
`/api/notify-lead` includes:
- same-origin enforcement before send;
- JSON-only request handling;
- body-size and field-length bounds;
- payload type filtering;
- valid-email check before `reply_to`;
- fixed internal recipient from server environment;
- a lightweight per-instance memory limiter as defense in depth;
- non-blocking failure semantics for normal form submission.

---

## Deliberately deferred external activation

Resend production delivery is **NOT ACTIVE by claim in this closeout** because Vercel Firewall/environment and Resend account credentials are outside the connected GitHub execution surface.

This is not unfinished Wave 2E code. It is a future operations task and must be opened as a new task if email notifications are desired:
1. configure edge/firewall rate limiting for `POST /api/notify-lead`;
2. verify the sender domain in Resend;
3. add `RESEND_API_KEY` and approved sender environment variables;
4. redeploy;
5. send a real lead and verify arrival before calling the feature active.

Until then, lead saving remains functional and notification sending is skipped/fails safely.

---

## Verification recorded before merge

- ESLint: 0 errors on the Wave 2E source set.
- TypeScript: `tsc --noEmit` passed.
- Production build passed.
- `git diff --check` clean.
- Desktop/mobile QA reported RTL intact, no horizontal overflow, and no relevant 4xx.
- `/app` prefetch request disappeared after the fix.
- Conditional email requirement worked in both directions.
- First UTM persisted across navigation.

---

## Closeout decision

✓ Wave 2E merged and closed.
✓ No remaining code change from this wave is waiting for merge.
✓ Resend activation is a future external-ops task, not an open development blocker.
✓ Automated-test-framework creation is future scope, not a defect left open by this wave.
