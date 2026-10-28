# PROGRESS.md

> Update the four sections below at the end of **every** session.
> Keep it under 15 lines. This file is the handoff document.

## Current position

**Step:** Phase 8 **complete** — 28/28 screens. Next: P9.4 world-map decision
**Branch:** `main` (`p8-screens` merged)
**Last session:** 2026-10-28

## Working

- Phases 0–8 complete: scaffold, Vuetify 4, routes, store, nav data, i18n, shells, layouts,
  global styles, all 14 base components, all 28 screens — lint and type clean
- Zero `_Placeholder` routes left
- `locale.rtl` map added to `plugins/vuetify.ts`; Rtl.vue mirrors correctly

## Broken / blocked

- `src/views/_Placeholder.vue` now unreferenced — delete at P11
- `v-validate` unresolved on ValidationForms / Wizard until P9.10–P9.11
- `v-calendar` has nothing registering it — P10
- `v-world-map` in Dashboard.vue unresolved — P9.4 / P9.5
- Auth backdrop photo not painting (`View.vue`) — parked for P10
- Most of `app.scss` still targets components that don't exist yet — expected
- Vuetify warns duplicate node ID for the profile nav group (non-fatal)
- Parked for P10: `card-title`, `body-3`, `elevation-12`, `text-danger`, `scoped` vs unscoped,
  duplicate `id="coloured-line"`, `purple-input`/`v-card-profile`, `.v-calendar-weekly__*`

## Next up

- P9.4 Decide world-map replacement

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
  types are in `types/`
- **Exactly one** file augments `declare module 'vue'`, and it must be a module
  (top-level `import`/`export`). Never from a script `.d.ts`.
- When re-declaring a wrapped Vuetify prop, copy **Vuetify's** type — never
  `string` / `number`.
- Base components auto-register as `Base<Name>` from `plugins/base.ts`.
  `types/global-components.d.ts` is a **manual** list — update it when adding one.
- **Never nest a route under a catch-all parent** (vue-router 4). Use a leaf route
  and let the screen render its own layout.
- **Transition components keep the `v-` prefix** (`v-slide-y-transition`). Dropping it
  breaks auto-import.
- Old app is a **read-only** reference at `~/ref/md-pro-v2`.

### Type/lint traps already paid for

- **Never name a `<script setup>` binding the same as a global component tag used in
  that file.** The template compiler matches script bindings _before_ the global
  registry, so `import * as Chartist` shadows `<chartist>` and it renders as a module
  namespace. (Cost: one debugging detour on Charts.vue.)
- **Annotate arrays of Vuetify header/option objects** — `const headers: DataTableHeader[]`.
  Unannotated literals widen (`'end'` → `string`) and the prop type rejects them.
- **`ref('literal')` feeding a union-typed prop needs an explicit union** —
  `ref<CalendarType>('month')`, not `ref('month')`.
- **`useRtl().isRtl` is read-only.** RTL is driven by the `locale.rtl` map in
  `plugins/vuetify.ts` plus `useLocale().current`.
- **`DataTableHeader` uses `title`, not `text`.** Vuetify 4 dropped the alias.
- **`v-text` on a Vuetify component → interpolation.** Plain elements keep `v-text`.
- **In `<script setup>`, a binding is "unused" unless the template uses it.**
  Delete carried-over data rather than underscore-prefixing it.
- **A closure that ignores a parameter is still an unused param** — `argsIgnorePattern`
  is not configured. Consume the argument or use a method.
- **`slice()` on a readonly tuple keeps the full element union.** Narrowing by slicing
  does not narrow the type.

## Conventions

- **Green gate:** dev server compiles AND the step's verify passes before the next step.
- **One branch per phase:** `p0-scaffold`, `p7-base`, `p8-screens`…
- **Commit every 1–3 steps.** Conventional commits.
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

## Source layout of the old app

- Screens: `src/views/dashboard/` (flat), `.../pages/`, `.../component/` (singular),
  `.../forms/`, `.../tables/`
- `component/` holds Buttons, Grid, Icons, Notifications, Tabs, Typography
- `components/` holds only `core/`, which in our port lives at `src/components/core/`
- `raw.githubusercontent.com` 404s on these often — use
  `https://api.github.com/repos/kathirr007/Vuetify-md-pro-clone/contents/<path>`,
  which returns base64

---

## Session log

Newest first. Two lines max per entry.

- 2026-10-28 — Phase 8 closed: Buttons, Icons, Grid, Tabs, Notifications, RegularForms,
  DataTables, ExtendedTables, ExtendedForms, ValidationForms, Wizard, Typography.
- 2026-10-28 — Phase 8: Charts, Calendar, Timeline, UserProfile, Rtl. Added `locale.rtl`
  map; fixed `<chartist>` binding shadowing; logged four type traps.
- 2026-10-27 — Phase 8: Dashboard, Widgets. `v-world-map` parked for Phase 9.
- 2026-10-27 — Phase 8: 5 auth screens; fixed catch-all routing, CoreView slot, v-footer stacking, transition prefix.
- 2026-10-27 — Phase 7: 14 base components, glob barrel, scss + block-order conventions.
- 2026-10-26 — Phases 5–6b: shell, auth shell, layouts, global styles.
- 2026-10-26 — Phases 0–4: scaffold, Vuetify 4, routes, store, nav data, i18n.

---

## Handoff prompt

Copy this into a new chat:

    Repo: https://github.com/jartai/dashboard

    Read PLAN.md, PROGRESS.md and PORTING.md from that repo before answering.
    Phase 8 is closed; we're at P9.4 (world-map replacement). Old app reference is
    github.com/kathirr007/Vuetify-md-pro-clone, cloned read-only at ~/ref/md-pro-v2.

    Don't re-litigate the locked decisions in PROGRESS.md.
    One file per step, full file content, explicit paths
