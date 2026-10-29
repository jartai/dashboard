# Porting log

Every deviation from the original app, with a reason. One file per phase. Append to the live phase file only.

Format:

    ## <file or area>
    **Deviation:** what differs from the original
    **Reason:** why
    **Status:** pending — <step>   (only if not yet resolved)
    **Date:** YYYY-MM-DD

## Files

| File | Phase | State |
|---|---|---|
| [archive-01-foundation.md](archive-01-foundation.md) | P0–P7 | closed |
| [archive-08-screens.md](archive-08-screens.md) | P8 | closed |
| [phase-09-replacements.md](phase-09-replacements.md) | P9 | closed |
| [phase-10-styles.md](phase-10-styles.md) | P10 | **live** |

## Rules

- Append to the live phase file. Never reorder existing sections.
- A closed file takes edits only to point at a later resolution — never new sections.
- Sections route on the `P<n>.` prefix in the `## ` heading. An unnumbered heading belongs to whichever phase precedes it.
- Search across all phases with `grep -rn <pattern> porting/`.

## Skipped files


`src/views/pages/Rtl.vue`, `Timeline.vue`, `UserProfile.vue` — unrooted, byte-identical duplicates of the `views/dashboard/pages/` versions (same git SHAs).
**Date:** 2026-10-26
