# PROGRESS.md

> Update the four sections below at the end of **every** session.
> Keep it under 15 lines. This file is the handoff document.

## Current position

**Step:** Phase 7 complete — next P8.1 (`views/pages/Error.vue`)
**Branch:** `p7-base` → merge, then cut `p8-screens`
**Last session:** 2026-10-27

## Working

- Phases 0–7 complete: scaffold, Vuetify 4, routes, store, nav data, i18n, shells,
  layouts, global styles, all 14 base components, glob barrel (`plugins/base.ts`)
- Shell renders: app bar, drawer, footer, settings card, both layouts
- Every base component renders on demand via its `<Base*>` global name

## Broken / blocked

- Most of `app.scss` still targets components that don't exist yet — expected
- Screens are all `_Placeholder.vue` — expected until Phase 8
- Vuetify warns duplicate node ID for the profile nav group (non-fatal)
- Parked for P10: `card-title`, `body-3`, `elevation-12`, `scoped` vs unscoped

## Next up

- P8.1 `views/pages/Error.vue` — first screen, five sub-steps

---

## Locked decisions — do not re-litigate

- Target is **Vuetify 4**, not 3. Vuetify 3 is LTS/maintenance only (LTS ends Jul 2027).
- Package manager is **pnpm**. Sass is **`sass-embedded`**.
- **One app**, not separate apps per screen. Screens are isolated routes until they work.
- This app has **no backend** and no API. PHP comes later, separately.
- Do **not** port `app.scss` verbatim. Two passes: P6b (done), P10 (pending).
- `legacy.scss` is **temporary** and **unlayered on purpose**. Deleted at P10.
- Vuetify 4's **lowered breakpoints are adopted**. Don't restore v3 thresholds.
- Typography class mapping (v2 → v4) is in `PLAN.md`. Use it; don't guess.
- The `register → pricing` nav bug is **fixed**, logged in `PORTING.md`.
- TypeScript **yes**, from the start. No `.js` files added.
- Fonts **self-hosted** via `@fontsource/roboto`.
- `noUncheckedIndexedAccess` stays **on**. Fix with `?.` / `??` / `!`.
- `vue/multi-word-component-names` stays **off**.
- `lodash` is **not** a dependency. String helpers are hand-rolled.
- `chartist` + `vue-chartist` **are** dependencies (chartist is unmaintained;
  swapping it touches only `MaterialChartCard.vue`).
- SFC block order is **script → template → style**. Every `<style>` is `lang="scss"`.
  Enforced by `vue/block-order` and `vue/block-lang`.
- Component styles stay **inline** in the SFC. `src/styles/` is cross-cutting only.
- `.ts` files never sit beside `.vue` files. Barrel is `plugins/base.ts`; shared
  types are in `types/`.
- **Exactly one** file augments `declare module 'vue'`, and it must be a module
  (top-level `import`/`export`). Never from a script `.d.ts`.
- When re-declaring a wrapped Vuetify prop, copy **Vuetify's** type — never
  `string` / `number`.
- Base components auto-register as `Base<Name>` from `plugins/base.ts`.
  `types/global-components.d.ts` is a **manual** list — update it when adding one.
- Old app is a **read-only** reference at `~/ref/md-pro-v2`.

## Conventions

- **Green gate:** dev server compiles AND the step's verify passes before the next step.
- **One branch per phase:** `p0-scaffold`, `p7-base`, `p8-screens`…
- **Commit every 1–2 steps.** Conventional commits.
- **Never more than two uncommitted files.**
- Run `pnpm lint` before every commit — it enforces block order and style lang.
- If a step balloons, split it.
- **2-minute rule:** unresolved visual oddity → park in `PORTING.md` with
  `Status: pending — <step>`, move on.
- Every deviation goes in `PORTING.md` with a reason.
- Read a file before replacing it.
- Paths: config files at the **repo root**; app code in `src/`. Folders lowercase,
  `.vue` files PascalCase.
- **Doubled output = placeholder nesting** (temporary). **Missing output = real bug.**
- Dead CSS rules are **harmless**. Only fix rules that match wrongly.

## References

- Plan: `PLAN.md`
- Deviations: `PORTING.md`
- Old app (read-only): https://github.com/kathirr007/Vuetify-md-pro-clone
- Own repo: https://github.com/jartai/dashboard
- Visual target (pinned tab): https://kathirr007.github.io/Vuetify-md-pro-clone
- Vuetify 4 upgrade guide: https://vuetifyjs.com/en/getting-started/upgrade-guide/
- Vue 3 migration guide: https://v3-migration.vuejs.org/

## Screens deliberately skipped

`src/views/pages/Rtl.vue`, `Timeline.vue`, `UserProfile.vue` — unrouted duplicates.

---

## Session log

Newest first. Two lines max per entry.

- 2026-10-27 — Phase 7: 14 base components, glob barrel, scss + block-order conventions.
- 2026-10-26 — Phases 5–6b: shell, auth shell, layouts, global styles.
- 2026-10-26 — Phases 0–4: scaffold, Vuetify 4, routes, store, nav data, i18n.

---

## Handoff prompt

Copy this into a new chat:

    Repo: https://github.com/jartai/dashboard

    Read PLAN.md, PROGRESS.md and PORTING.md from that repo before answering.
    We're at P8.1. Old app reference is
    github.com/kathirr007/Vuetify-md-pro-clone.

    Don't re-litigate the locked decisions in PROGRESS.md.
