# Website closeout audit — 2026-08-28

This audit closes the accumulated website work before the next development wave. It records what was merged, what was deliberately not merged, and what is future scope rather than unfinished prior work.

## Release actions performed

1. Reviewed Wave 2E PR #59, including the hardened lead-notification route and first-touch attribution.
2. Verified its Vercel status was successful before merge.
3. Merged #59 first, as required by the agreed dependency order.
4. Refreshed image PR #58 on top of the new `main` without force-push/history rewrite by creating a merge commit that preserved Wave 2E changes and applied only the non-overlapping approved image/code blobs.
5. Verified the refreshed #58 branch was ahead of `main` with zero commits behind and received Vercel SUCCESS.
6. Merged #58.
7. Replaced the contradictory/stale `PROJECT-STATE.md` with a concise final SSOT and marked Wave 2E closed.

Release anchors:
- #57: `a20b258`
- #59: `a0fb868`
- #58: `6184266`

## PR / issue audit

At closeout:
- Earlier active PRs #59 and #58 were both merged.
- The repository had no open GitHub issues during the audit.
- Historical closed PRs were reviewed through repository PR history; old closed-unmerged PRs were not auto-merged into modern `main`.

### Closed-unmerged work intentionally archived

| Branch / PR | Disposition | Why |
|---|---|---|
| `fix/seo-audit-pass1` / #41 | SUPERSEDED | old sitemap/metadata state; valid material was transferred into later waves; wholesale merge would regress current navigation/indexing decisions |
| `fix/seo-lexicon-pass2` / #42 | SUPERSEDED | stacked on #41 and contains old layout/sitemap state; useful copy corrections were transferred later |
| `docs/seo-context-layer` / #43 | ARCHIVE | one old governance snapshot; if SEO governance is reopened it must be regenerated from current SSOT rather than merged blindly |
| `claude/convert-to-html-IJFTQ` / #3 | ARCHIVE | pitch/company-profile artifacts and export tooling, not current website runtime work; earlier PR #2 from the same lineage was already merged |

## Remote branch audit

Remote refs observed during the audit: **64** including `main`.

### Old branches with zero commits ahead of current `main`
These contain no unique work to recover and are classified **STALE / SAFE TO PRUNE**:

- `claude/fix-igarden-sunbolah-7jVlt`
- `feat/app-page`
- `feat/rebuild-v1.4`
- `feat/wave-2b-hero-and-trust-bar`
- `feat/wave-2b-prep-stats-update`
- `fix/wave-2a-visual-polish`
- `fix/wave-2a-visual-polish-r2`
- `preview/claude-review`

### Old divergent branches inspected and superseded

- `claude/github-project-selection-ozhkZ` — 4 commits ahead of its old base, but the diff is an obsolete combination of navigation, legal, learn and project configuration work that was superseded by later merged implementations.
- `claude/website-review-audit-NIRd3` — 1 commit ahead of an old base, containing obsolete legal/learn/roadmap state superseded by later merged implementations.

### Merged-history branches
The remaining feature/hotfix/style/refactor branches are historical branch refs for already merged PR work (or ancestors of merged consolidation PRs). They are **not active tasks and must not be merged again**.

### Physical branch deletion
This connected GitHub surface does not expose a remote-branch-delete operation. Therefore stale refs were classified and closed semantically but were **not falsely reported as deleted**. Their continued presence in the branch dropdown is repository history, not active work.

For local cleanup on Ali's laptop, a future local housekeeping command may remove merged worktrees/branches, but that is not required to start new website work and was not executed remotely here.

## Production-scope decisions closed

### Wave 2E
CLOSED:
- UI/content corrections
- `/app` prefetch/CORS diagnosis and fix
- form contact preference behavior
- first-touch attribution without schema migration
- privacy update
- hardened non-blocking lead notification endpoint

### Email notifications
Classified **DEFERRED EXTERNAL OPS**, not unfinished code.

The code is merged, but delivery must not be called active until Vercel rate limiting + Resend sender/domain/API key are configured and a production message is verified. The site and lead saving do not depend on that activation.

### Image pass
CLOSED for the approved batch:
- clean iGarden Tower product asset
- Tower detail inset
- approved 3×9 home-greenhouse hero
- approved 3×9 home-greenhouse how-we-work image
- one limited-claim Al-Ahsa installation card

The remaining Smart Controller/IoT/Organic/Compliance/Smart OS visual needs are **NEXT-PHASE BACKLOG**, not unfinished work from #58.

## Start rule for the next website session

Do not resume any existing historical branch by name.

Start from current `origin/main`, perform a Reality Lock, read `PROJECT-STATE.md` and `docs/SITE-ARCHITECTURE.md`, then create a fresh branch for the new explicitly approved scope.

## Closeout result

✓ Prior active PR dependency chain resolved and merged in the correct order.
✓ No old closed-unmerged branch was blindly merged onto modern site state.
✓ Stale/no-ahead and divergent old branch families inspected and classified.
✓ Previous-wave external dependencies reclassified so they do not masquerade as unfinished website code.
✓ SSOT rewritten to provide one clean resumption point.
⚠ Physical deletion of remote branch refs and Ali's local worktrees is not available through the connected GitHub actions used in this closeout; these are housekeeping only, not open product work.
