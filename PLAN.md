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

## Reference: typography mapping (v2 → v4)

| Vuetify 2 | Vuetify 4 |
|---|---|
| `display-4` | `text-display-large` |
| `display-3` | `text-display-large` |
| `display-2` | `text-display-medium` |
| `display-1` | `text-headline-large` |
| `headline` | `text-headline-small` |
| `title` | `text-title-large` |
| `subtitle-1` | `text-body-large` |
| `subtitle-2` | `text-title-small` |
| `body-1` | `text-body-large` |
| `body-2` | `text-body-medium` |
| `caption` | `text-body-small` |
| `overline` | `text-label-medium` |
| `text--disabled` | `text-disabled` |
| `primary--text` | `text-primary` |
| `info--text` | `text-info` |

## Reference: systemic renames

| Vuetify 2 | Vuetify 3/4 |
|---|---|
| `app` prop | removed — use `<v-layout>` |
| `outlined`/`text`/`plain`/`depressed` | single `variant` prop |
| `v-content` | `v-main` |
| `v-simple-table` | `v-table` |
| `v-list-item-content/title/subtitle` | flat `v-list-item` props/slots |
| `item-text` | `item-title` |
| `v-stepper-step` | `v-stepper-item` |
| `v-expansion-panel-header/content` | `-title` / `-text` |
| `v-tab-item` | `v-tabs-window-item` |
| `close` on chips | `closable` |
| global component registration | removed — needs vite plugin |
| Sass variable names | almost all renamed |

---

## Phase 0 — Environment & scaffold

- [ ] P0.1 Install Node LTS via nvm — `node -v` → 22.x
- [ ] P0.2 `corepack enable && corepack prepare pnpm@latest --activate`
- [ ] P0.3 VS Code extensions: Vue (Official), ESLint, Prettier, Error Lens
- [ ] P0.4 Install Vue DevTools browser extension
- [ ] P0.5 `git clone https://github.com/kathirr007/Vuetify-md-pro-clone ~/ref/md-pro-v2`
- [ ] P0.6 Open live demo in a pinned tab
- [ ] P0.7 `pnpm create vue@latest md-pro-vue3` — TS, Router, Pinia, Vitest, ESLint, Prettier all yes
- [ ] P0.8 `pnpm install`
- [ ] P0.9 `pnpm dev` — localhost:5173 loads
- [ ] P0.10 `git init` + first commit
- [ ] P0.11 Create GitHub repo, add remote, push
- [ ] P0.12 Edit `.gitignore` — add `.env.local`, `.DS_Store`
- [ ] P0.13 Create `.nvmrc`
- [ ] P0.14 Create `.editorconfig`
- [ ] P0.15 Commit `chore: repo hygiene`
- [ ] P0.16 `pnpm add vuetify@^4 vite-plugin-vuetify @mdi/font`
- [ ] P0.17 Edit `vite.config.ts` — vuetify plugin, `@` alias, optimizeDeps for overlays
- [ ] P0.18 Create `src/plugins/vuetify.ts` — theme, `defaultTheme: 'dark'`
- [ ] P0.19 Edit `src/main.ts` — vuetify/styles, mdi font, `app.use(vuetify)`
- [ ] P0.20 Edit `src/App.vue` — `v-app` + `router-view`
- [ ] P0.21 Delete demo files in `assets/` and `components/`
- [ ] P0.22 Temp `v-btn` + `v-icon` — styled pink button renders
- [ ] P0.23 Commit `feat: vuetify 4 and theme`
- [ ] P0.24 Create `PORTING.md` with the three decisions
- [ ] P0.25 Commit `docs: porting decisions`

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
- [ ] P3.3 Commit `feat: ui store`

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

**Order (difficulty-ramped):**

- [ ] S1.1 `Error.vue` — markup
- [ ] S1.2 `Error.vue` — state
- [ ] S1.3 `Error.vue` — wiring
- [ ] S1.4 `Error.vue` — styles
- [ ] S1.5 `Error.vue` — verify + commit
- [ ] S2.1 `Typography.vue` — markup
- [ ] S2.2 `Typography.vue` — state
- [ ] S2.3 `Typography.vue` — wiring
- [ ] S2.4 `Typography.vue` — styles
- [ ] S2.5 `Typography.vue` — verify + commit
- [ ] S3.1 `Heading.vue` — markup
- [ ] S3.2 `Heading.vue` — state
- [ ] S3.3 `Heading.vue` — wiring
- [ ] S3.4 `Heading.vue` — styles
- [ ] S3.5 `Heading.vue` — verify + commit
- [ ] S4.1 `Btn.vue` — markup
- [ ] S4.2 `Btn.vue` — state
- [ ] S4.3 `Btn.vue` — wiring
- [ ] S4.4 `Btn.vue` — styles
- [ ] S4.5 `Btn.vue` — verify + commit
- [ ] S5.1 `PlanCard.vue` — markup
- [ ] S5.2 `PlanCard.vue` — state
- [ ] S5.3 `PlanCard.vue` — wiring
- [ ] S5.4 `PlanCard.vue` — styles
- [ ] S5.5 `PlanCard.vue` — verify + commit
- [ ] S6.1 `Lock.vue` — markup
- [ ] S6.2 `Lock.vue` — state
- [ ] S6.3 `Lock.vue` — wiring
- [ ] S6.4 `Lock.vue` — styles
- [ ] S6.5 `Lock.vue` — verify + commit
- [ ] S7.1 `Login.vue` — markup
- [ ] S7.2 `Login.vue` — state
- [ ] S7.3 `Login.vue` — wiring
- [ ] S7.4 `Login.vue` — styles
- [ ] S7.5 `Login.vue` — verify + commit
- [ ] S8.1 `Register.vue` — markup
- [ ] S8.2 `Register.vue` — state
- [ ] S8.3 `Register.vue` — wiring
- [ ] S8.4 `Register.vue` — styles
- [ ] S8.5 `Register.vue` — verify + commit
- [ ] S9.1 `Pricing.vue` — markup
- [ ] S9.2 `Pricing.vue` — state
- [ ] S9.3 `Pricing.vue` — wiring
- [ ] S9.4 `Pricing.vue` — styles
- [ ] S9.5 `Pricing.vue` — verify + commit
- [ ] S10.1 `Timeline.vue` — markup
- [ ] S10.2 `Timeline.vue` — state
- [ ] S10.3 `Timeline.vue` — wiring
- [ ] S10.4 `Timeline.vue` — styles
- [ ] S10.5 `Timeline.vue` — verify + commit
- [ ] S11.1 `UserProfile.vue` — markup
- [ ] S11.2 `UserProfile.vue` — state
- [ ] S11.3 `UserProfile.vue` — wiring
- [ ] S11.4 `UserProfile.vue` — styles
- [ ] S11.5 `UserProfile.vue` — verify + commit
- [ ] S12.1 `RegularTables.vue` — markup (`v-simple-table` → `v-table`)
- [ ] S12.2 `RegularTables.vue` — state
- [ ] S12.3 `RegularTables.vue` — wiring
- [ ] S12.4 `RegularTables.vue` — styles
- [ ] S12.5 `RegularTables.vue` — verify + commit
- [ ] S13.1 `DataTables.vue` — markup (headers format, slot names)
- [ ] S13.2 `DataTables.vue` — state
- [ ] S13.3 `DataTables.vue` — wiring
- [ ] S13.4 `DataTables.vue` — styles
- [ ] S13.5 `DataTables.vue` — verify + commit
- [ ] S14.1 `RegularForms.vue` — markup
- [ ] S14.2 `RegularForms.vue` — state
- [ ] S14.3 `RegularForms.vue` — wiring
- [ ] S14.4 `RegularForms.vue` — styles
- [ ] S14.5 `RegularForms.vue` — verify + commit
- [ ] S15.1 `Buttons.vue` — markup (`variant` prop)
- [ ] S15.2 `Buttons.vue` — state
- [ ] S15.3 `Buttons.vue` — wiring
- [ ] S15.4 `Buttons.vue` — styles
- [ ] S15.5 `Buttons.vue` — verify + commit
- [ ] S16.1 `Icons.vue` — markup
- [ ] S16.2 `Icons.vue` — state
- [ ] S16.3 `Icons.vue` — wiring
- [ ] S16.4 `Icons.vue` — styles
- [ ] S16.5 `Icons.vue` — verify + commit
- [ ] S17.1 `Grid.vue` — markup (`dense` → `density`/`gap`)
- [ ] S17.2 `Grid.vue` — state
- [ ] S17.3 `Grid.vue` — wiring
- [ ] S17.4 `Grid.vue` — styles
- [ ] S17.5 `Grid.vue` — verify + commit
- [ ] S18.1 `Tabs.vue` — markup (`v-tabs-window-item`)
- [ ] S18.2 `Tabs.vue` — state
- [ ] S18.3 `Tabs.vue` — wiring
- [ ] S18.4 `Tabs.vue` — styles
- [ ] S18.5 `Tabs.vue` — verify + commit
- [ ] S19.1 `Notifications.vue` — markup
- [ ] S19.2 `Notifications.vue` — state
- [ ] S19.3 `Notifications.vue` — wiring
- [ ] S19.4 `Notifications.vue` — styles
- [ ] S19.5 `Notifications.vue` — verify + commit
- [ ] S20.1 `Widgets.vue` — markup
- [ ] S20.2 `Widgets.vue` — state
- [ ] S20.3 `Widgets.vue` — wiring
- [ ] S20.4 `Widgets.vue` — styles
- [ ] S20.5 `Widgets.vue` — verify + commit
- [ ] S21.1 `Calendar.vue` — markup (`v-calendar` is in labs)
- [ ] S21.2 `Calendar.vue` — state
- [ ] S21.3 `Calendar.vue` — wiring
- [ ] S21.4 `Calendar.vue` — styles
- [ ] S21.5 `Calendar.vue` — verify + commit
- [ ] S22.1 `ExtendedTables.vue` — markup
- [ ] S22.2 `ExtendedTables.vue` — state
- [ ] S22.3 `ExtendedTables.vue` — wiring
- [ ] S22.4 `ExtendedTables.vue` — styles
- [ ] S22.5 `ExtendedTables.vue` — verify + commit
- [ ] S23.1 `ExtendedForms.vue` — markup
- [ ] S23.2 `ExtendedForms.vue` — state
- [ ] S23.3 `ExtendedForms.vue` — wiring
- [ ] S23.4 `ExtendedForms.vue` — styles
- [ ] S23.5 `ExtendedForms.vue` — verify + commit
- [ ] S24.1 `ValidationForms.vue` — markup
- [ ] S24.2 `ValidationForms.vue` — state
- [ ] S24.3 `ValidationForms.vue` — wiring (vee-validate)
- [ ] S24.4 `ValidationForms.vue` — styles
- [ ] S24.5 `ValidationForms.vue` — verify + commit
- [ ] S25.1 `Wizard.vue` — markup (`v-stepper-item`)
- [ ] S25.2 `Wizard.vue` — state
- [ ] S25.3 `Wizard.vue` — wiring
- [ ] S25.4 `Wizard.vue` — styles
- [ ] S25.5 `Wizard.vue` — verify + commit
- [ ] S26.1 `Charts.vue` — markup
- [ ] S26.2 `Charts.vue` — state
- [ ] S26.3 `Charts.vue` — wiring
- [ ] S26.4 `Charts.vue` — styles
- [ ] S26.5 `Charts.vue` — verify + commit
- [ ] S27.1 `Rtl.vue` — markup
- [ ] S27.2 `Rtl.vue` — state
- [ ] S27.3 `Rtl.vue` — wiring
- [ ] S27.4 `Rtl.vue` — styles
- [ ] S27.5 `Rtl.vue` — verify + commit
- [ ] S28.1 `Dashboard.vue` — markup
- [ ] S28.2 `Dashboard.vue` — state
- [ ] S28.3 `Dashboard.vue` — wiring
- [ ] S28.4 `Dashboard.vue` — styles
- [ ] S28.5 `Dashboard.vue` — verify + commit

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
- [ ] P11.7 Deploy preview to GitHub Pages
- [ ] P11.8 Walk every route side-by-side vs live demo
- [ ] P11.9 Tick off the inventory in `PORTING.md`
- [ ] P11.10 Tag `v1.0.0`

## Skipped on purpose

`src/views/pages/Rtl.vue`, `Timeline.vue`, `UserProfile.vue` — unrouted byte-identical duplicates of the `views/dashboard/pages/` versions.