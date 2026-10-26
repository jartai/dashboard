# PLAN.md — Vuetify MD Pro → Vue 3 + Vuetify 4

Baby-step port plan. One file per step. ~230 steps.

## Ground rules

- **Green gate:** dev server compiles AND the step's verify passes before the next step.
- **One branch per phase:** `p0-scaffold`, `p5-shell`, `p8-screens`…
- **Commit every 1–2 steps.** Conventional commits.
- **Old app read-only** at `~/ref/md-pro-v2`. Live demo pinned in a browser tab.
- **Log every deviation** in `PORTING.md`.
- **Never more than two uncommitted files.**
- If a step balloons, split it. Step IDs are a checklist, not a contract.
- **Read a file before replacing it.** `create-vue` ships good defaults.

## Reference: typography mapping (v2 → v4)

| Vuetify 2        | Vuetify 4             |
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

## Reference: systemic renames

| Vuetify 2                             | Vuetify 3/4                    |
| ------------------------------------- | ------------------------------ |
| `app` prop                            | removed — use `<v-layout>`     |
| `outlined`/`text`/`plain`/`depressed` | single `variant` prop          |
| `v-content`                           | `v-main`                       |
| `v-simple-table`                      | `v-table`                      |
| `v-list-item-content/title/subtitle`  | flat `v-list-item` props/slots |
| `item-text`                           | `item-title`                   |
| `v-stepper-step`                      | `v-stepper-item`               |
| `v-expansion-panel-header/content`    | `-title` / `-text`             |
| `v-tab-item`                          | `v-tabs-window-item`           |
| `close` on chips                      | `closable`                     |
| global component registration         | removed — needs vite plugin    |
| Sass variable names                   | almost all renamed             |

---

## Phase 0 — Environment & scaffold

- [ ] P0.1 Install Node LTS via nvm — `node -v` → 22.x
- [ ] P0.2 `corepack enable && corepack prepare pnpm@latest --activate`
- [ ] P0.3 VS Code extensions: Vue (Official), ESLint, Prettier, Error Lens
- [ ] P0.4 Install Vue DevTools browser extension
- [ ] P0.5 `git clone https://github.com/kathirr007/Vuetify-md-pro-clone ~/ref/md-pro-v2`
- [ ] P0.6 Open live demo in a pinned tab
- [ ] P0.7 `pnpm create vue@latest dashboard` — TS yes, JSX no, Router yes, Pinia yes,
      Vitest yes, E2E no, ESLint yes, Prettier yes, no experimental features
- [ ] P0.8 `pnpm install`
- [ ] P0.9 `pnpm dev` — localhost:5173 loads
- [ ] P0.10 `git init` + first commit
- [ ] P0.11 Create empty public GitHub repo `dashboard`, add remote, push
- [ ] P0.12 Verify `.gitignore` — create-vue's is already complete
- [ ] P0.13 Create `.nvmrc` containing `22`
- [ ] P0.14 Add `root = true` to top of `.editorconfig` + `[*.md]` trailing-space exception
- [ ] P0.15 Create `PLAN.md`, `PROGRESS.md`, `PORTING.md`; commit `chore: scaffold + port plan`
- [ ] P0.16 `pnpm add vuetify @mdi/font @fontsource/roboto`
- [ ] P0.17 `pnpm add -D vite-plugin-vuetify`
- [ ] P0.18 Edit `vite.config.ts` — vuetify plugin, optimizeDeps for overlays
- [ ] P0.19 Create `src/plugins/vuetify.ts` — theme, `defaultTheme: 'dark'`, mdi icon set
- [ ] P0.20 Edit `src/main.ts` — Roboto 300/400/500/700, mdi font CSS, vuetify/styles,
      `app.use(vuetify)`
- [ ] P0.21 Edit `src/App.vue` — `v-app` + `router-view`
- [ ] P0.22 Delete demo files: `src/components/`, `src/assets/`, `src/__tests__/App.spec.ts`
- [ ] P0.23 Temp `v-btn` + `v-icon` — styled pink button, Roboto in Computed styles
- [ ] P0.24 Commit `feat: vuetify 4 and theme`
- [ ] P0.25 Create `PORTING.md` global entries
- [ ] P0.26 Replace `README.md` with project-specific content
- [ ] P0.27 Commit `docs: porting notes and readme`

## Phase 1 — Learning spike (throwaway)

- [ ] P1.1 Create `src/views/Spike.vue` — card, list, buttons, hardcoded
- [ ] P1.2 Convert to `script setup` + `ref` + `computed`
- [ ] P1.3 Add `v-data-table`, 5 hardcoded rows — sorts
- [ ] P1.4 Add `v-form` with one validated field — errors show
- [ ] P1.5 Add `/spike` route
- [ ] P1.6 Commit `chore: spike`
- [ ] P1.7 Delete `Spike.vue`, remove route, commit

## Phase 2 — Router skeleton

- [ ] P2.1 Create `src/views/_Placeholder.vue`
- [ ] P2.2 Create `src/router/routes.ts` — full route table, paths preserved
- [ ] P2.3 Edit `src/router/index.ts` to consume `routes.ts`
- [ ] P2.4 Visit 5 routes manually — all resolve
- [ ] P2.5 Add catch-all 404 route
- [ ] P2.6 Commit `feat: route skeleton`

## Phase 3 — UI store

- [ ] P3.1 Create `src/stores/ui.ts` — `barColor`, `barImage`, `drawer`, `expandOnHover`
- [ ] P3.2 Read `drawer` in `_Placeholder` — value prints
- [ ] P3.3 Delete `src/stores/counter.ts`
- [ ] P3.4 Commit `feat: ui store`

## Phase 4 — Navigation data

- [ ] P4.1 Create `src/navigation.ts` — nav tree from `Drawer.vue`, typed
- [ ] P4.2 Fix `register → pricing` bug, log in `PORTING.md`
- [ ] P4.3 Commit `feat: navigation data`

## Phase 5 — Dashboard shell

- [ ] P5.1 `src/components/core/Footer.vue` — renders
- [ ] P5.2 `src/components/core/View.vue` — `v-content` → `v-main`
- [ ] P5.3 `src/components/core/AppBar.vue` — drop `app` prop, `useDisplay()`
- [ ] P5.4 `src/components/core/Drawer.vue` — `mobile-breakpoint`, `rail`, nav data
- [ ] P5.5 `src/components/core/Settings.vue`
- [ ] P5.6 `src/layouts/DashboardLayout.vue`
- [ ] P5.7 Route dashboard routes through `DashboardLayout`
- [ ] P5.8 Verify drawer toggle, nav highlight, theme toggle, footer
- [ ] P5.9 Commit `feat: dashboard shell`

## Phase 6 — Auth shell

- [ ] P6.1 `src/components/auth/Footer.vue`
- [ ] P6.2 `src/components/auth/AppBar.vue`
- [ ] P6.3 `src/components/auth/View.vue`
- [ ] P6.4 `src/layouts/AuthLayout.vue`
- [ ] P6.5 Route `/pages/*` through `AuthLayout`
- [ ] P6.6 Verify all 4 auth routes render
- [ ] P6.7 Commit `feat: auth shell`

## Phase 7 — Base components (one file per step)

- [ ] P7.1 `components/base/Card.vue`
- [ ] P7.2 `components/base/ItemSubGroup.vue`
- [ ] P7.3 `components/base/Subheading.vue`
- [ ] P7.4 `components/base/VComponent.vue`
- [ ] P7.5 `components/base/MaterialTabs.vue`
- [ ] P7.6 `components/base/MaterialSnackbar.vue`
- [ ] P7.7 `components/base/MaterialAlert.vue`
- [ ] P7.8 `components/base/MaterialTestimony.vue`
- [ ] P7.9 `components/base/Item.vue`
- [ ] P7.10 `components/base/MaterialCard.vue`
- [ ] P7.11 `components/base/MaterialStatsCard.vue`
- [ ] P7.12 `components/base/MaterialChartCard.vue`
- [ ] P7.13 `components/base/ItemGroup.vue`
- [ ] P7.14 `components/base/MaterialDropdown.vue`
- [ ] P7.15 `components/base/MaterialWizard.vue`
- [ ] P7.16 `components/base/index.ts` — `import.meta.glob` instead of `require.context`
- [ ] P7.17 Verify a `Base*` component renders by name
- [ ] P7.18 Commit `feat: base components`

For each of P7.1–P7.15: port markup → convert to `script setup` → verify render → commit.

## Phase 8 — Screens

**Pattern — every screen gets exactly these five steps:**

- Sn.1 markup only, hardcoded data → renders
- Sn.2 state → script setup, ref/computed → renders
- Sn.3 wiring: props, emits, routing → interactions work
- Sn.4 scoped styles → matches live demo
- Sn.5 verify against live demo, commit

**Order (difficulty-ramped):**

- [ ] S1 `Error.vue`
- [ ] S2 `Typography.vue` — full class mapping
- [ ] S3 `Heading.vue`
- [ ] S4 `Btn.vue`
- [ ] S5 `PlanCard.vue`
- [ ] S6 `Lock.vue`
- [ ] S7 `Login.vue`
- [ ] S8 `Register.vue`
- [ ] S9 `Pricing.vue`
- [ ] S10 `Timeline.vue`
- [ ] S11 `UserProfile.vue`
- [ ] S12 `RegularTables.vue` — `v-simple-table` → `v-table`
- [ ] S13 `DataTables.vue` — headers format, slot names
- [ ] S14 `RegularForms.vue`
- [ ] S15 `Buttons.vue` — `variant` prop
- [ ] S16 `Icons.vue`
- [ ] S17 `Grid.vue` — `dense` → `density`/`gap`
- [ ] S18 `Tabs.vue` — `v-tabs-window-item`
- [ ] S19 `Notifications.vue`
- [ ] S20 `Widgets.vue`
- [ ] S21 `Calendar.vue` — `v-calendar` is in labs
- [ ] S22 `ExtendedTables.vue`
- [ ] S23 `ExtendedForms.vue`
- [ ] S24 `ValidationForms.vue` — vee-validate
- [ ] S25 `Wizard.vue` — `v-stepper-item`
- [ ] S26 `Charts.vue` — Phase 9
- [ ] S27 `Rtl.vue` — Phase 9
- [ ] S28 `Dashboard.vue` — 21KB, last

Each screen expands to five checkboxes: `Sn.1` … `Sn.5`.
After each screen: merge branch, open a new one.

## Phase 9 — The hard parts

- [ ] P9.1 Decide chartist-direct vs swap; log decision
- [ ] P9.2 Rewrite `MaterialChartCard` against the choice
- [ ] P9.3 Port `Charts.vue`
- [ ] P9.4 Decide world-map replacement
- [ ] P9.5 Port the map widget in `Dashboard.vue`
- [ ] P9.6 Replace `vue-world-map` plugin file
- [ ] P9.7 Add `vue-i18n@^11`, create `plugins/i18n.ts`
- [ ] P9.8 Port `locales/en.json` verbatim
- [ ] P9.9 Port `locales/ar.json` verbatim
- [ ] P9.10 Wire `v-locale-provider` for RTL
- [ ] P9.11 Port `Rtl.vue`
- [ ] P9.12 Decide vee-validate v4 vs Vuetify `rules`
- [ ] P9.13 Rebuild validation in `ValidationForms.vue`
- [ ] P9.14 Rebuild the Wizard form
- [ ] P9.15 Commit `feat: hard parts`

## Phase 10 — Styles

- [ ] P10.1 Copy `app.scss` → `src/styles/legacy.scss` untouched
- [ ] P10.2 Import it, screenshot the damage
- [ ] P10.3 Delete the Vuetify 2 Sass import block
- [ ] P10.4 Convert remaining rules to plain CSS
- [ ] P10.5 Split into `base.css`, `drawer.css`, `cards.css`
- [ ] P10.6 Move component rules into scoped style blocks
- [ ] P10.7 Delete anything MD3 defaults already handle
- [ ] P10.8 Verify each screen vs live demo
- [ ] P10.9 Commit `refactor: styles`

## Phase 11 — Polish & cutover

- [ ] P11.1 Add `barImage` as a local asset, update store
- [ ] P11.2 Fix remaining `href="#"` nav stubs
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
