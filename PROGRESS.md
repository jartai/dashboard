# PROGRESS.md

> Update the four sections below at the end of **every** session.
> Keep it under 15 lines. This file is the handoff document.

## Current position

**Step:** P5.1 complete — next P5.2
**Branch:** `p5-shell`
**Last session:** 2026-10-26

## Working

- Phase 0–4 complete: scaffold, Vuetify 4 + theme, route skeleton, ui store, nav data
- `components/core/Footer.vue` ported

## Broken / blocked

- Footer links render flush — expected, spacing comes from `app.scss` at P6b
- Shell renders doubled alerts and footers — expected, `_Placeholder` is the parent
  component for both `/` and `/pages`. Resolves at P5.6 / P6.4.

## Next up

- P5.2 `src/components/core/View.vue` (`v-content` → `v-main`)

---

## Locked decisions — do not re-litigate

- Target is **Vuetify 4**, not 3. Vuetify 3 is LTS/maintenance only (LTS ends Jul 2027).
- Package manager is **pnpm**.
- **One app**, not separate apps per screen. Screens are added as isolated routes and
  wired into navigation only once they work.
- This app has **no backend** and no API. All data is hardcoded. PHP comes later, separately.
- Do **not** port `app.scss` verbatim. Rebuild it in two passes: P6b (global primitives),
  P10 (screen-specific).
- Typography class mapping (v2 → v4) is in `PLAN.md`. Use it; don't guess.
- The `register → pricing` nav bug in the original is **fixed**, logged in `PORTING.md`.
- Vuetify 2 reached EOL Jan 2025. Vue 2 reached EOL Dec 2023. Neither gets patches.
- TypeScript **yes**, from the start, on all new code. No `.js` files added.
- Fonts are **self-hosted** via `@fontsource/roboto` — no Google Fonts CDN.
- `noUncheckedIndexedAccess` stays **on**. Fix errors with `?.` / `??` / `!`, don't disable.
- `vue/multi-word-component-names` stays **off**.
- Old app is a **read-only** reference at `~/ref/md-pro-v2`.

## Conventions

- **Green gate:** dev server compiles AND the step's verify passes before the next step.
- **One branch per phase:** `p0-scaffold`, `p5-shell`, `p8-screens`…
- **Commit every 1–2 steps.** Conventional commits.
- **Never more than two uncommitted files.**
- If a step balloons, split it. Step IDs are a checklist, not a contract.
- **2-minute rule:** if something looks visually off and isn't resolved in two minutes,
  park it in `PORTING.md` with `Status: pending — <step>` and move on.
- Every deviation from the original goes in `PORTING.md` with a reason.
- Read a file before replacing it. `create-vue` ships good defaults.
- Paths: config files live at the **repo root**; app code lives in `src/`.
- **Doubled output = placeholder nesting** (temporary). **Missing output = real bug.**

## References

- Plan: `PLAN.md`
- Deviations: `PORTING.md`
- Old app (read-only): https://github.com/kathirr007/Vuetify-md-pro-clone
- Own repo: https://github.com/jartai/dashboard
- Visual target (pinned tab): https://kathirr007.github.io/Vuetify-md-pro-clone
- Vuetify 4 upgrade guide: https://vuetifyjs.com/en/getting-started/upgrade-guide/
- Vue 3 migration guide: https://v3-migration.vuejs.org/

## Screens deliberately skipped

`src/views/pages/Rtl.vue`, `Timeline.vue`, `UserProfile.vue` — unrouted, byte-identical
duplicates of the `views/dashboard/pages/` versions (same git SHAs).

---

## Session log

Newest first. Two lines max per entry.

- 2026-10-26 — Phases 0–4 complete. Started shell: footer ported.
- 2026-10-26 — Scaffold, GitHub repo, Vuetify 4 + theme, `vite.config.ts`.
