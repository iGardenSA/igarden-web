# IMAGE-ASSET-MANIFEST.md — Public image asset manifest

> **Status:** APPROVED IMAGE PASS CLOSED
> **Merged PR:** #58
> **Release anchor:** `618426618852ac78e421d86b45e7fa0f0c7827f7`
> **Closeout:** 2026-08-28

This file records the five public assets approved in the closed image pass. Future visual needs are backlog, not unfinished work from PR #58.

## Governing rules

1. Do not publish client/person identity in filename, alt text, caption, or visible copy unless separately approved.
2. Every asset has claim limits; the image proves only what it actually shows.
3. Do not label old or third-party hardware as a current iGarden product.
4. These five assets must not be duplicated across multiple route/section placements without a new editorial decision.
5. Field photos use crop/cover treatment; do not create letterboxing to preserve an unsuitable original aspect ratio.
6. Full camera originals remain outside Git; only publication derivatives belong in the repo.
7. Published derivatives have EXIF/GPS/ICC removed; no AI retouching was used in this pass.

---

## Live approved assets

### 1. `public/images/products/hydroponics/igarden-tower-product.webp`

| Field | Value |
|---|---|
| source | `1000156737_f90319fa…_20250123_204434_٠٠٠٠.png` |
| final sha256 | `778e6912dcdc35df7818be49dbbb8f80c7983ea0e0e3bfa0310b46c78fa2d930` |
| dimensions | 1440×1440 · WebP q82 · ~13.8 KB |
| placement | `/products/hydroponics` → iGarden Tower product card |
| attribution | iGarden product photography on white background |
| privacy | `PUBLIC_OK` |
| claim limit | unplanted product image; not crop/output evidence and not attributed to a client site |
| approval | `APPROVED_BY_ALI` |

### 2. `public/images/products/hydroponics/igarden-tower-port-detail.webp`

| Field | Value |
|---|---|
| source | `1000156747_20250123_204822_٠٠٠٤.png` |
| final sha256 | `7529d78854486e0b68ab7b2660d514bd67b45702545a70d7e7140036af851d9c` |
| dimensions | 900×900 · WebP q82 · ~13.1 KB |
| placement | `/products/hydroponics` → small inset inside Tower product card |
| attribution | Tower planting-port/net-cup detail; unidentified hand only |
| privacy | `PUBLIC_OK` |
| claim limit | mechanism detail only; not automation or production evidence |
| approval | `APPROVED_BY_ALI` |

### 3. `public/images/projects/home-greenhouse/home-greenhouse-hydroponic-rows.webp`

| Field | Value |
|---|---|
| source | `٢٠٢٦٠٢٠٨_١٧٥١٢٣.jpg` — approved 3×9 home greenhouse |
| final sha256 | `8378224a44352f313595e6c501320ebe9c74201fbea6fa66fcb2bca7c882d0c5` |
| dimensions | 1800×1350 · WebP q82 · ~384 KB |
| placement | `/products/hydroponics` → hero |
| attribution | operating **home greenhouse**; no owner/site name |
| privacy | `PUBLIC_OK` |
| claim limit | residential context only; do not present as a commercial project or production-scale evidence |
| approval | `APPROVED_BY_ALI` — explicit publication permission recorded for the 3×9 greenhouse |

### 4. `public/images/projects/home-greenhouse/home-greenhouse-production-path.webp`

| Field | Value |
|---|---|
| source | `٢٠٢٦٠٢٠٨_١٧٥١٠٧.jpg` — approved 3×9 home greenhouse |
| final sha256 | `b064bddb0d27e0b75ae18507f400b567d75839458906837f01e4b468e8832cde` |
| dimensions | 1800×1350 · WebP q82 · ~391 KB |
| placement | `/how-we-work` → new-project path |
| attribution | operating home greenhouse; no owner/site name |
| privacy | `PUBLIC_OK` |
| claim limit | illustrates execution approach; not commercial-project scale evidence |
| approval | `APPROVED_BY_ALI` |

### 5. `public/images/projects/al-ahsa/al-ahsa-greenhouse-layout.webp`

| Field | Value |
|---|---|
| source | `al-ahsa-greenhouse-layout-wide-01.jpg` from curated staging library |
| final sha256 | `4f0ef34b62d2541bbbb22199e4a4f25687c0afac40b8e1b5b95046a653897a20` |
| dimensions | 1800×1350 · WebP q82 · ~137 KB |
| placement | `/products/smart-greenhouses` → single field-evidence card |
| attribution | field project in Al-Ahsa; no client name |
| privacy | `PUBLIC_OK` |
| claim limit | **preparation/installation stage only**; does not prove project completion, handover, smart automation, or production results |
| approval | `APPROVED_BY_ALI` |

**Total publication derivatives:** ~952 KB.

---

## Rejected / held source material

These decisions remain closed; do not import them automatically:

| Source family | Disposition | Reason |
|---|---|---|
| controller cabinet bearing iGarden branding / open cabinet | `HOLD_FOR_NEW_SCOPE` | product/version identity requires a dedicated controller review |
| live climate-control screen exposing internal address/platform | `REJECT_PUBLIC` | exposes internal network/platform details |
| 2017–2018 fodder/technology photos | `HOLD_FOR_NEW_SCOPE` | ownership and historical attribution require separate confirmation |
| folder named for a private person/site | `REJECT_PUBLIC` | faces/private-home identification risk |
| `unclassified-*` project groups | `HOLD_FOR_NEW_SCOPE` | project attribution unresolved |

---

## Future visual backlog — not open work from #58

The following are **BACKLOG_NEXT_PHASE** and must only be reopened under a new explicit scope:

- Smart Controller final product photography.
- Controller architecture diagram.
- IoT architecture diagram.
- Stronger installed IoT node/sensor photography.
- Publishable organic/bioponics evidence.
- Compliance/log/report visual example.
- New approved Smart OS screenshot when needed.

**Closeout rule:** no item in this backlog blocks the current website release or makes PR #58 incomplete.
