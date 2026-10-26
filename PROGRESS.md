# PROGRESS.md

> Update the four sections below at the end of **every** session.
> Keep it under 15 lines. This file is the handoff document.

## Current position

**Step:** P0.19 — next (P0.16–P0.18 complete)
**Branch:** `main`
**Last session:** 2026-10-26

## Working

- Vue 3 + TS scaffold, committed and pushed
- Vuetify 4 installed, theme wired, `vite.config.ts` configured
- `PLAN.md`, `PORTING.md`, `PROGRESS.md` in repo root

## Broken / blocked

- Confirm `@fontsource/roboto` actually installed (`pnpm add vuetify @mdi/font @fontsource/roboto`)
- `vite-plugin-vuetify` must be a dev dependency (`pnpm add -D`)

## Next up

- P0.19 create `src/plugins/vuetify.ts`
- P0.20 edit `src/main.ts` — Roboto imports, vuetify/styles, `app.use(vuetify)`
- P0.21 edit `src/App.vue`
- P0.22 delete demo files

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
- Fonts are **self-hosted** via `@fontsource/roboto` — no Google Fonts CDN.
- `noUncheckedIndexedAccess` stays **on**. Fix errors with `?.` / `??` / `!`, don't disable.
- Old app is a **read-only** reference at `~/ref/md-pro-v2`.

## Conventions

- **Green gate:** dev server compiles AND the step's verify passes before the next step.
- **One branch per phase:** `p0-scaffold`, `p5-shell`, `p8-screens`…
- **Commit every 1–2 steps.** Conventional commits.
- **Never more than two uncommitted files.**
- If a step balloons, split it. Step IDs are a checklist, not a contract.
- Every deviation from the original goes in `PORTING.md` with a reason.
- Read a file before replacing it. `create-vue` ships good defaults.
- Paths: config files live at the **repo root**; app code lives in `src/`.

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

- 2026-10-26 — P0.27 complete — Phase 0 done, next P1.1
