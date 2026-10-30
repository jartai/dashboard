# PLAN.md — Vuetify MD Pro → Vue 3 + Vuetify 4

Baby-step port plan. One file per step.

## Ground rules

- **Green gate:** dev server compiles AND the step's verify passes before the next step.
- **One branch per phase:** `p0-scaffold`, `p7-base`, `p8-screens`…
- **Commit every 1–3 steps.** Conventional commits.
- **Old app read-only** at `~/ref/md-pro-v2`. Live demo pinned in a browser tab.
- **Log every deviation** in `PORTING.md`.
- **Never more than two uncommitted files.**
- If a step balloons, split it. Step IDs are a checklist, not a contract.
- **Read a file before replacing it.** `create-vue` ships good defaults.
- **2-minute rule:** unresolved visual oddity → park in `PORTING.md`, move on.
- **Dead CSS rules are harmless.** Only fix rules that match the wrong thing.

## Reference: typography mapping (v2 → v4)

| Vuetify 2        | Material 3 token      |
| ---------------- | --------------------- |
| `display-4`      | `text-display-large`  |
| `display-3`      | `text-display-large`  |
| `display-2`      | `text-display-medium` |
| `display-1`      | `text-headline-large` |
| `headline`       | `text-headline-small` |
| `title`          | `text-title-large`    |
| `subtitle-1`     | `text-body-large`     |
| `subtitle-2`     | `text-title-small`    |
| `body-1`         | `text-body-large`     |
| `body-2`         | `text-body-medium`    |
| `caption`        | `text-body-small`     |
| `overline`       | `text-label-medium`   |
| `text--disabled` | `text-disabled`       |
| `primary--text`  | `text-primary`        |
| `info--text`     | `text-info`           |

**In practice we use `text-h*`, not the token names above.** The right-hand column is
Material 3 vocabulary; Vuetify 4 ships `text-h1`–`text-h6` plus `text-body-*`,
`text-caption`, `text-overline`. Shipped screens use:

| Vuetify 2   | Used in the port |
| ----------- | ---------------- |
| `display-4` | `text-h1`        |
| `display-3` | `text-h2`        |
| `display-2` | `text-h3`        |
| `display-1` | `text-h4`        |
| `headline`  | `text-h5`        |
| `title`     | `text-h6`        |

Keep new work consistent with those. `subtitle-1` → `text-subtitle-1`, `body-2` →
`text-body-2`, `overline` → `text-overline`, `caption` → `text-caption`.

## Reference: systemic renames

| Vuetify 2                             | Vuetify 3/4                          |
| ------------------------------------- | ------------------------------------ |
| `app` prop                            | removed — use `<v-layout>`           |
| `outlined`/`text`/`plain`/`depressed` | single `variant` prop                |
| `fab`                                 | `icon` prop                          |
| `v-content`                           | `v-main`                             |
| `v-simple-table`                      | `v-table`                            |
| `v-list-item-content/title/subtitle`  | flat `v-list-item` props/slots       |
| `v-list-item-icon`/`-action`          | removed — bare `v-icon` / slots      |
| `v-subheader`                         | removed — plain `div`                |
| `item-text`                           | `item-title`                         |
| `v-stepper-step`                      | `v-stepper-item`                     |
| `v-expansion-panel-header/content`    | `-title` / `-text`                   |
| `v-tab-item`                          | `v-tabs-window-item`                 |
| `close` on chips                      | `closable`                           |
| `hidden-*-and-*`                      | `d-*` classes                        |
| `$vuetify.breakpoint.*`               | `useDisplay()`                       |
| `$vuetify.rtl`                        | `useLocale().current` + `locale.rtl` |
| `v-slot:activator="{ attrs, on }"`    | `#activator="{ props }"`             |
| header `text:` key                    | header `title:` key                  |
| global component registration         | removed — needs vite plugin          |
| Sass variable names                   | almost all renamed                   |

## Reference: `v-text` on components

| Target                                  | Use                   |
| --------------------------------------- | --------------------- |
| Plain element (`span`, `a`, `div`, `p`) | `v-text` is fine      |
| Vuetify component                       | `{{ }}` interpolation |

## Reference: app.scss selector renames

No consolidated table exists. The renames were applied by two `sed` passes and are
described in `PORTING.md` under `## src/styles/legacy.scss`; per-screen selector work
is a P10 task.

---

## Phase 0 — Environment & scaffold — DONE

- [x] P0.1–P0.27 Scaffold, GitHub repo, Vuetify 4 + theme, README, PORTING.md

## Phase 1 — Learning spike — DONE

- [x] P1.1–P1.7 Card, list, table, form, route; then delete

## Phase 2 — Router skeleton — DONE

- [x] P2.1–P2.6 `_Placeholder`, `routes.ts`, 404, verify, commit

## Phase 3 — UI store — DONE

- [x] P3.1–P3.4 `stores/ui.ts`, verify, delete `counter.ts`, commit

## Phase 4 — Navigation data — DONE

- [x] P4.1–P4.3 `config/navigation.ts`, fix `register` bug, commit

## Phase 5 — i18n setup — DONE

- [x] P5.0.1–P5.0.7 vue-i18n, `locales/en.json`, plugin, `main.ts`, verify, commit

## Phase 5 — Dashboard shell — DONE

- [x] P5.1 `components/core/Footer.vue`
- [x] P5.2 `components/core/View.vue`
- [x] P5.3a `components/base/ItemSubGroup.vue`
- [x] P5.3b `components/base/Item.vue`
- [x] P5.3c `components/base/ItemGroup.vue`
- [x] P5.4 `components/core/AppBarItem.vue`
- [x] P5.5 `components/core/AppBar.vue`
- [x] P5.6 `components/core/Drawer.vue`
- [x] P5.7 `components/core/Settings.vue`
- [x] P5.8 `layouts/DashboardLayout.vue`
- [x] P5.9 Wire routes; clean up `_Placeholder`
- [x] P5.10 Verify + commit

## Phase 6 — Auth shell — DONE

- [x] P6.1 `components/auth/Footer.vue`
- [x] P6.2 `components/auth/AppBar.vue`
- [x] P6.3 `components/auth/View.vue`
- [x] P6.4 `layouts/AuthLayout.vue`
- [x] P6.5 Wire `/pages/*` to `AuthLayout`
- [x] P6.6 Verify all 4 auth routes
- [x] P6.7 Commit

## Phase 6b — Styles: global primitives — DONE

- [x] P6b.1 `src/styles/legacy.scss` + import
- [x] P6b.2 Screenshot the damage
- [x] P6b.3 First `sed` rename pass
- [x] P6b.4 Second `sed` pass + typography + list-item
- [x] P6b.5 Eyeball the shell, park the rest
- [x] P6b.6 Commit

## Phase 7 — Base components — DONE

Ordered smallest → largest.

- [x] P7.1 `components/base/Subheading.vue`
- [x] P7.2 `components/base/VComponent.vue`
- [x] P7.3 `components/base/MaterialTabs.vue`
- [x] P7.4 `components/base/MaterialSnackbar.vue`
- [x] P7.5 `components/base/MaterialAlert.vue`
- [x] P7.6 `components/base/MaterialTestimony.vue`
- [x] P7.7 `components/base/MaterialCard.vue`
- [x] P7.8 `components/base/MaterialStatsCard.vue`
- [x] P7.9 `components/base/MaterialChartCard.vue`
- [x] P7.10 `components/base/MaterialDropdown.vue`
- [x] P7.11 `components/base/MaterialWizard.vue`
- [x] P7.12 `plugins/base.ts` — `import.meta.glob` instead of `require.context`
- [x] P7.13 Verify a `Base*` component renders by name
- [x] P7.14 Commit `feat: base components`

## Phase 8 — Screens (one file per step) — DONE

Each screen expands to five checkboxes: `Sn.1` … `Sn.5`.

- Sn.1 markup only, hardcoded data → renders
- Sn.2 state → script setup, ref/computed → renders
- Sn.3 wiring: props, emits, routing → interactions work
- Sn.4 styles → matches live demo
- Sn.5 verify against live demo, commit

After each screen: merge branch, open a new one.

**Order (difficulty-ramped). Done screens are struck from the queue.**

- [x] S1 `Error.vue`
- [x] S2 `Typography.vue` — full class mapping
- [x] S3 `Heading.vue`
- [x] S4 `Btn.vue`
- [x] S5 `PlanCard.vue`
- [x] S6 `Lock.vue`
- [x] S7 `Login.vue`
- [x] S8 `Register.vue`
- [x] S9 `Pricing.vue`
- [x] S10 `Timeline.vue`
- [x] S11 `UserProfile.vue`
- [x] S12 `RegularTables.vue` — `v-simple-table` → `v-table`
- [x] S13 `DataTables.vue` — headers format, slot names
- [x] S14 `RegularForms.vue`
- [x] S15 `Buttons.vue` — `variant` prop
- [x] S16 `Icons.vue`
- [x] S17 `Grid.vue` — `dense` → `density`/`gap`
- [x] S18 `Tabs.vue` — `v-tabs-window-item`
- [x] S19 `Notifications.vue`
- [x] S20 `Widgets.vue`
- [x] S21 `Calendar.vue` — `v-calendar` is in labs
- [x] S22 `ExtendedTables.vue`
- [x] S23 `ExtendedForms.vue`
- [x] S24 `ValidationForms.vue` — vee-validate
- [x] S25 `Wizard.vue` — `v-stepper-item`
- [x] S26 `Charts.vue` — Phase 9
- [x] S27 `Rtl.vue` — Phase 9
- [x] S28 `Dashboard.vue` — 21KB, last

Remaining: **0** — Phase 8 closed.

## Phase 9 — The hard parts — DONE

P9.1–P9.3 are settled: chartist was kept and `Charts.vue` is ported.

- [x] P9.1 Decide chartist-direct vs swap; log decision — kept chartist
- [x] P9.2 Rewrite `MaterialChartCard` against the choice
- [x] P9.3 Port `Charts.vue`
- [x] P9.4 Decide world-map replacement
- [x] P9.5 Port the map widget in `Dashboard.vue`
- [x] P9.6 Replace `vue-world-map` plugin file
- [x] P9.7 Port `locales/ar.json` verbatim
- [x] P9.8 Add the Vuetify locale adapter; extend the `locale.rtl` map
- [x] P9.9 Verify `Rtl.vue` against the live demo (screen itself is ported)
- [x] P9.10 Decide vee-validate v4 vs Vuetify `rules`
- [x] P9.11 Rebuild validation in `ValidationForms.vue` and `Wizard.vue`
- [x] P9.12 Rebuild the Wizard form
- [x] P9.13 Commit `feat: hard parts`

## Phase 10 — Styles: screen-specific — DONE

**Status: closed.** P10.0a–k and P10.1–P10.4 all done; `legacy.scss` is now `src/styles/app.scss`.

- [x] P10.0 Resolve parked `legacy.scss` selectors: `.v-list-item__content`,
      `.v-tabs-bar`, `.v-calendar-weekly`, `.v-picker`, `.v-select-list`
- [x] P10.0b Add the drawer image gradient as a CSS overlay
- [x] P10.0c Investigate the duplicate node ID warning
- [x] P10.0d Revisit breakpoint fidelity if it matters
- [x] P10.0e Fix the auth backdrop photo (`View.vue`) — element is present, paints nothing
- [x] P10.0f Settle `card-title`, `body-3`, `elevation-12`, `text-danger` — none are v4 classes
- [x] P10.0g Decide `scoped` vs unscoped on the per-screen style blocks
- [x] P10.0h Restore `purple-input` / `v-card-profile` styling (UserProfile.vue)
- [x] P10.0i De-duplicate `id="coloured-line"` in Charts.vue
- [x] P10.0j Register `v-calendar` or replace it
- [x] P10.1 Extract remaining screen rules from `legacy.scss` into scoped blocks
- [x] P10.2 Delete anything MD3 defaults already handle
- [x] P10.3 Verify each screen vs live demo
- [x] P10.4 Rename `src/styles/legacy.scss` to `src/styles/app.scss` (shared skins need a permanent home)
- [x] P10.5 Commit `refactor: screen styles`

## Phase 11 — Polish & cutover

- [ ] P11.1 Add `barImage` as a local asset, update store
- [ ] P11.2 Fix remaining `href="#"` / empty `to` nav stubs
- [ ] P11.3 Vitest tests for 3 shared components
- [ ] P11.4 Tests for the store
- [ ] P11.5 `pnpm lint` clean
- [ ] P11.6 `pnpm build` succeeds
- [ ] P11.7 Set `base: '/dashboard/'` in `vite.config.ts`, deploy to GitHub Pages
- [ ] P11.8 Walk every route side-by-side vs live demo
- [ ] P11.9 Tick off the inventory in `PORTING.md`
- [ ] P11.10 Tag `v1.0.0`

## Skipped on purpose

`src/views/pages/Rtl.vue`, `Timeline.vue`, `UserProfile.vue` — unrouted byte-identical
duplicates of the `views/dashboard/pages/` versions.
