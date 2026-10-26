# PROGRESS.md

> Update the four sections below at the end of **every** session.
> Keep it under 15 lines. This file is the handoff document.

## Current position

**Step:** P0.1 — not started
**Branch:** `p0-scaffold`
**Last session:** —

## Working

- nothing yet

## Broken / blocked

- nothing yet

## Next up

- P0.1 install Node LTS via nvm

---

## Locked decisions — do not re-litigate

- Target is **Vuetify 4**, not 3. Vuetify 3 is LTS/maintenance only (LTS ends Jul 2027).
- Package manager is **pnpm**.
- **One app**, not separate apps per screen. Screens are added as isolated routes and
  wired into navigation only once they work.
- This app has **no backend** and no API. All data is hardcoded. PHP comes later, separately.
- Do **not** port `src/assets/css/app.scss`. Rebuild styles; keep only layout-critical rules.
- Typography class mapping (v2 → v4) is in `PLAN.md`. Use it; don't guess.
- The `register → pricing` nav bug in the original is **fixed**, logged in `PORTING.md`.
- Vuetify 2 reached EOL Jan 2025. Vue 2 reached EOL Dec 2023. Neither gets patches.
- TypeScript **yes**, from the start, on all new code. No `.js` files added.
- Old app is a **read-only** reference at `~/ref/md-pro-v2`.

## Conventions

- **Green gate:** dev server compiles AND the step's verify passes before the next step.
- **One branch per phase:** `p0-scaffold`, `p5-shell`, `p8-screens`…
- **Commit every 1–2 steps.** Conventional commits.
- **Never more than two uncommitted files.**
- If a step balloons, split it. Step IDs are a checklist, not a contract.
- Every deviation from the original goes in `PORTING.md` with a reason.

## References

- Plan: `PLAN.md`
- Deviations: `PORTING.md`
- Old app (read-only): https://github.com/kathirr007/Vuetify-md-pro-clone
- Visual target (pinned tab): https://kathirr007.github.io/Vuetify-md-pro-clone
- Vuetify 4 upgrade guide: https://vuetifyjs.com/en/getting-started/upgrade-guide/
- Vue 3 migration guide: https://v3-migration.vuejs.org/

## Screens deliberately skipped

`src/views/pages/Rtl.vue`, `Timeline.vue`, `UserProfile.vue` — unrouted, byte-identical
duplicates of the `views/dashboard/pages/` versions (same git SHAs).

---

## Session log

Newest first. Two lines max per entry.

- —

---

## Handoff prompt

Copy this into a new chat:

    Repo: https://github.com/<you>/md-pro-vue3

    Read PLAN.md, PROGRESS.md and PORTING.md from that repo before answering.
    We're at <step id>. Old app reference is
    github.com/kathirr007/Vuetify-md-pro-clone.

    Don't re-litigate the locked decisions in PROGRESS.md.