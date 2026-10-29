## P8.1 — views/pages/Error.vue

Status: done

- Only screen with hardcoded copy; no i18n, no state.
- fill-height prop → class; depressed → variant="flat" + color="primary"; title → text-h6; display-3 → text-h2.
- Catch-all is now a LEAF route to Error.vue; Error.vue renders <AuthLayout> around its content. Nesting under a catch-all parent never resolved a matching child.

## P8.1 fixes along the way

- <CoreView /> was self-closing in AuthLayout, discarding everything inside it — the single cause of the empty middle. Replaced with <CoreView><slot><router-view /></slot></CoreView>.
- View.vue rebuilt: absolutely-positioned v-img backdrop + content sibling, instead of content nested inside v-img (the v2 sizer/absolute-content trick doesn't survive v3+).
- AuthLayout v-layout got flex-column: v-footer was landing beside v-main, not below (v2's appg prop is gone in v3+).
- Settings.vue: theme.global.name.value = x → theme.change(x).
- vue.config: define global → globalThis for the vue-chartist CJS dep.
- CONVENTION: in vue-router 4, never nest under a catch-all parent. Use a leaf route and let the screen render its own layout.
- RESOLVED at P10.0e: `src/assets/*.jpg` are webpack module stubs (68 bytes, containing `module.exports = ...`), so the import yields JS source, not a URL. Dead `.v-responsive` / `.v-responsive__content` selectors replaced too.

---

## P8.2 — views/pages/Lock.vue + components/Btn.vue

Status: done

- PagesBtn is extends:VBtn with prop defaults; ported as a thin wrapper with $attrs passthrough + inheritAttrs:false.
- TRAP: v2 `rounded` on a button = pill (28px). v3+ boolean `rounded` = 4px; `rounded="pill"` is the equivalent. Mapped explicitly.
- Dropped v2 `default` prop (= raised style = v3+ `elevated`, already the default).
- Lock.vue: fill-height → class, `light` on v-card dropped, v-slide-y-transition → slide-y-transition, display-2 → text-h3, `grey--text text--darken-2` → `text-grey-darken-2`.
- No style block in the original.
- Avatar image still remote (demos.creative-tim.com).

---

## P8.3 — views/pages/Login.vue

Status: done

- PagesBtn extended with a `variant` prop; `resolvedVariant` falls back to depressed ? 'flat' : 'elevated'. Needed because the login button is a text variant and the old wrapper hard-coded it.
- Renames: fill-height → class, display-2 → text-h3, grey--text body-1 → text-grey text-body-1, `large` → size="large".
- v2 `class="v-btn--text success--text"` has no v4 class equivalent (v-btn--text doesn't exist) — replaced with variant="text" color="success".
- BaseMaterialCard used via its global name; no import.
- No style block in the original.

---

## P8.4 fix — line-clamp vendor prefix

Status: done

- Added the standard `line-clamp: initial` alongside `-webkit-line-clamp: initial` to silence the vendorPrefix lint.

---

## P8.5 — views/pages/Pricing.vue + components/PlanCard.vue

Status: done

- v2 `light` prop → v3+ `theme` prop (PlanCard's "best" card forces theme="light").
- v2 allowed classes inside the `color` prop ("transparent elevation-0") — v3+ does not; split into :color + :elevation.
- v-for key moved from the child v-col onto the <template> (Vue 3 requirement).
- hidden-sm-and-down → d-none d-md-block; $vuetify.breakpoint.smAndDown → useDisplay().smAndDown.
- Renames: fill-height → class, display-1 → text-h4, display-2 → text-h3, body-1/2 → text-body-1/2, grey--text text--lighten-2 → text-grey-lighten-2.
- $t('plan') relies on globalInjection; verify the key exists in the locale file.

---

## CORRECTION — transition component prefix

- Earlier note said v3+ dropped the `v-` prefix from transition components. WRONG.
- Vuetify 3/4 keeps `v-slide-y-transition` / `v-fade-transition` / `v-expand-transition`.
- Dropping the prefix breaks vite-plugin-vuetify auto-import, which resolves on the `v-` prefix.
- Fixed in Lock, Login, Register, Pricing.
- RULE: transitions keep the `v-` prefix. Other renamed things (v-content → v-main, v-simple-table → v-table) do not apply to transitions.

---

## P8.6 — views/dashboard/Dashboard.vue

Status: done

- Largest screen. v-simple-table → v-table; v-tooltip bottom → location; activator scope {attrs,on} → {props}; small → size="small"; light dropped.
- this.$chartist → import Chartist from 'chartist' + types/chartist.d.ts shim (chartist ships no types).
- Deleted unreferenced data: headers, items, tabs, list, complete() — leftovers from a data-table version.
- PENDING (Phase 9): <v-world-map> is unresolved. vue-world-map is a Vue 2 component; needs a replacement or adapter.
- `card-title` kept verbatim (not a v4 class) — P10. → closed at P10.0f.

---

## P8.7 — views/dashboard/Widgets.vue

Status: done

- `tasks` moved to reactive() — plain objects aren't reactive in Vue 3, so the v-model checkboxes would not re-render.
- tasks[tabs] → computed currentTasks with ?? [] (noUncheckedIndexedAccess).
- v-tabs-items/v-tab-item → v-tabs-window/v-tabs-window-item; v-list-item-action dropped (removed in v3+).
- Data-table headers: `text` key → `title` (silent blank columns otherwise); align 'right' → 'end'.
- v-menu bottom/offset-y/right → location="bottom end"; v-icon left/right → start/end; v-timeline align-top/dense → align="start"/density="compact"; large → size="large".
- Renames: background-color → bg-color, display-2 → text-h3, subtitle-1/subheading → text-subtitle-1, body-2 → text-body-2, overline → text-overline.
- No style block in the original.

---

## P8.7 fix — Widgets.vue headers type

Status: done

- `align: 'end'` widened to `string` inside an unannotated array literal; VDataTable's `headers` prop wants the literal union `'start' | 'center' | 'end'`.
- Fix: `const headers: DataTableHeader[]` with `import type { DataTableHeader } from 'vuetify'`
- RULE: any array of Vuetify header/option objects needs an explicit annotation — literal values otherwise widen to `string` and the prop type rejects them. Expect this again in RegularTables, ExtendedTables and DataTables.

---

## P8.8 — views/dashboard/Charts.vue

Status: done

- Original file is `Charts.vue` (plural). The original router imports it as `Chart` (singular) — a latent mismatch in the source repo, not a port artefact. Route name `Charts` kept as-is.
- `this.$chartist` → `import * as Chartist from 'chartist'`; both `this.$chartist.Interpolation.none()` calls → `Chartist.Interpolation.none()`.
- `types/chartist.d.ts` declared the key as `monone` — a typo conflating `none` and `monotone`. Renamed to `none`; `monotone` added alongside it.
- `v-slot:after-heading` → `#after-heading`.
- Renames: display-1 → text-h4, grey--text → text-grey, subtitle-1 → text-subtitle-1, body-2 → text-body-2, `orange darken-1` → `orange-darken-1`.
- `lang="sass"` → `lang="scss"`. Left **unscoped** so the `#coloured-line` / `#multiple-bar` / `#pie` ID selectors still reach chartist's generated DOM. The duplicate `id="coloured-line"` was resolved at P10.0i — it is a class now.
- Dropped unreferenced data: `headers`, `items`, `tabs`, `list`, `complete()`. Same leftovers as Dashboard.vue; no `v-data-table` on this screen, so no `DataTableHeader` annotation was needed here.
- CONVENTION: in `<script setup>`, a binding counts as unused unless the **template** references it. Data carried over from the original will trip `@typescript-eslint/no-unused-vars` even when the original used it — delete it rather than underscore-prefixing.
- `src/router/routes.ts`: `charts` route swapped from `Placeholder` to a lazy import of the screen.

---

## P8.8 fix — <chartist> shadowed by a script-setup binding

Status: done

- `<chartist>` in Charts.vue resolved to the _chartist library namespace_ instead
  of vue-chartist's component, so Vue warned `Component is missing template or
render function` and no chart drew.
- Cause: the file had `import * as Chartist from 'chartist'`, and in
  `<script setup>` the template compiler matches a tag against script bindings
  BEFORE the global component registry. Tag `chartist` → capitalize → `Chartist`
  → matched the import, so `resolveComponent()` was never called.
- Fix: renamed the binding to `ChartistLib` (import + both
  `Interpolation.none()` call sites). Two words.
- Dashboard.vue also imports `Chartist` but only uses `<BaseMaterialChartCard>`,
  so it was never affected.
- RULE: never name a <script setup> binding the same as a global component you
  use in that file's template. The binding silently wins.

## P8.8 fix — explicit lowercase `chartist` alias

Status: done

- vue-chartist 3.0.0's install registers its component as `Chartist` (capital C);
  templates use the lowercase `<chartist>` tag and rely on Vue's
  capitalize fallback in `resolveComponent`.
- Aliased it there explicitly in main.ts so the lowercase name doesn't depend on that
  fallback. Written as a `const` + `if` because `app.component(name)` returns
  `Component | undefined` and the two-arg overload needs a non-undefined value.
- NOTE: vue-chartist 3.0.0 is CJS with only a named `install` export and no
  default — `import vueChartist from 'vue-chartist'` works purely via Vite's
  interop. Second reason to keep `types/vue-chartist.d.ts` accurate.

---

## P8.9 — views/dashboard/Calendar.vue

Status: done

- Local `CalendarBtn` dropped. It was `extends: VBtn` + `VBtn.options.computed.classes.call(this)`
  — a v2 idiom with no v3+ equivalent. Replaced with `v`-btn carrying the same four
  things it added: `color="secondary" rounded class="mx-1 text-lowercase"`.
- `$refs.calendar.prev()` / `.next()` → template ref `calendarRef` + optional call.
- `type` ref annotated as a `CalendarType` union; `ref('month')` alone widens to
  `string`, which `VCalendar`'s `type` prop rejects. Same class of bug as the
  P8.7 headers fix.
- Dropped unreferenced `disabled` and `focus` from data().
- `lang="sass"` → `lang="scss"`, unscoped, `#calendar` root preserved.
- Resolved at P10.0j: `.v-calendar-weekly__*` markup is unchanged in v4, so the style block applies as written.

---

## P8.10 — views/dashboard/pages/Timeline.vue

Status: done

- No style block in the original.
- Added a `Timeline` interface for the `timelines` array. Items differ in shape
  (some have `action`/`actionIcon`/`actions`, one has `subtext`), so TS infers a
  union and `timeline.action` errors on members lacking it.
- v-timeline `align-top` → `align="start"`; timeline-item `large` → `size="large"`;
  v-chip `small` → `size="small"`.
- Renames: overline → text-overline, subtitle-1 → text-subtitle-1, body-2 → text-body-2.
- v-menu bottom/offset-y/right → location="bottom end" + origin="top left";
  transition="scale-transition" kept (same as P8.7).
- #activator="{ attrs, on }" → #activator="{ props }"; v-on="on" dropped.
- v-icon left/right → start/end; v-text on v-icon and v-list-item-title →
  interpolation (plain p/div keep v-text).

---

## P8.11 — views/dashboard/pages/UserProfile.vue

Status: done

- No style block, no state in the original (`export default { // }`).
- v-textarea `value="..."` → `model-value="..."`. `value` is no longer a Vuetify prop, so it
  landed in $attrs on the wrapper div and the About Me box rendered empty.
- Renames: body-1 → text-body-1, display-1 → text-h4, display-2 → text-h3,
  grey--text → text-grey, black--text → text-black, text-right → text-end.
- `card-title`, `purple-input`, `v-card-profile`, kept verbatim — app.scss-era hooks, not
  Vuetify classes. Closed at P10.0h — neither is defined anywhere, so both were removed.

---

## P8.12 — views/dashboard/pages/Rtl.vue

Status: done

- Widgets.vue's content in Arabic. Original `name: 'Widgets'` (copy-paste artefact)
  → `name: 'Rtl'`.
- RTL: `this.$vuetify.rtl = true` → `useLocale().current = 'ar'` plus the `rtl` map in
  plugins/vuetify.ts. `useRtl().isRtl` is read-only and cannot be assigned.
- `created` → `onMounted`; `beforeDestroy` → `onBeforeUnmount`.
- `v-list-item-action` dropped — removed in v3+, and here it wrapped a checkbox
  outside any v-list-item, so it would not have resolved at all.
- Headers: `text` → `title` (v4 dropped the alias); `align: 'right'` → `'end'`;
  annotated `DataTableHeader[]` per the P8.7 rule.
- `tasks` → `reactive()`; `tasks[tabs]` → `computed currentTasks` with `?? []`.
- v-tabs-items/v-tab-item → v-tabs-window/v-tabs-window-item; background-color →
  bg-color; subheading → text-subtitle-1; text-right → text-end.
- v-menu bottom/offset-y/right → location="bottom end" + origin="top left";
  v-timeline align-top/dense → align="start"/density="compact".
- v-icon left/right → start/end; v-text on v-icon and v-list-item-title →
  interpolation.
- Arabic strings transcribed from the GitHub API's base64 — a few letters may be
  off. Original `data()` payload is plain JS and safe to paste verbatim if so.
- No style block in the original.
- PENDING: RTL direction unverified until tested; if `current.value = 'ar'` does not
  mirror the page, fall back to `<v-locale-provider rtl>`.

---

## P8.13 — views/dashboard/component/Buttons.vue

Status: done

- `dark` dropped on all social buttons — no v4 prop; MD3 derives the on-colour from `:color`.
- `rounded` → `rounded="pill"` on the two style buttons and the two rounded toggles.
- `v-pagination :value` → `v-model` (page1/page2). `value` is not a prop in v4, so it would
  have landed in `$attrs` and left both pagers inert. `circle` → `rounded="circle"`.
- `v-btn small`/`large` → `size=`; `fab` → `icon`; `text` → `variant="text"`.
- `v-icon left`/`right` → `start`/`end`; `v-text` on `v-icon` → interpolation.
- `v-row dense` → `density="compact"`.
- `v-btn-toggle` given `v-model` refs typed `unknown` — the emit type is `unknown | unknown[]`.
- `:key` moved from the `v-col` onto the `<template v-for>`. The redundant `:key` on
  `BaseSubheading` dropped (`v-if` sits on the child, not the loop).
- Second colour list is `colors.slice(2)`. `slice` on a readonly tuple returns the full element
  union, so it still includes `'default'` even though the value can't appear — the sentinel
  ternary stays dropped and the `icons` lookup needs `color as keyof typeof icons`.
- `colors` / `directions` / `icons` are `as const`, so indexing stays exact under
  `noUncheckedIndexedAccess`.
- `name: 'DashboardButtons'` → `defineOptions({ name: 'Buttons' })`, matching the filename
  convention set at P8.12.
- No style block in the original; none added.
- PENDING: the fourth social button renders an icon in the same colour as its own background —
  near-invisible by design, same as the original. Verify at P10.
- PENDING: `min-width="0" max-width="41"` no longer constrains v4 icon buttons. Verify at P10.

---

## P8.14 — views/dashboard/component/Icons.vue

Status: done

- v-tooltip `top` → `location="top"`; `content-class="top"` kept verbatim (not a class, an
  app.scss-era leftover) — P10.
- `#activator="{ attrs, on }"` → `#activator="{ props: activatorProps }"`; `v-on="on"` dropped
  and `v-bind="attrs"` → `v-bind="activatorProps"`.
- `v-slot:heading` → `#heading`.
- `v-icon left` → `start`; `v-btn large` → `size="large"`.
- Renames: display-2 → text-h3, subtitle-1 → text-subtitle-1, `white--text` → `text-white`.
- `name: 'DashboardIcons'` → `defineOptions({ name: 'Icons' })`.
- `icons` left unannotated — it is a flat `string[]` with no index lookups, so no union needed.
- No style block in the original.
- PENDING: `content-class` on v-tooltip is unverified in v4; falls back to $attrs if the prop
  is gone. P10e.

---

## P8.15 — views/dashboard/component/Grid.vue

Status: done

- Local `ParagraphHeading` kept, not inlined. It was `render(h)` in the original; ported as a
  `FunctionalComponent` in the same file, since `<script setup>` slots are functions.
  `this.$slots.default` → `slots.default?.()`.
- `heading` → `text-h5`; `col cols-12` → `v-col-12` (v2 flex classes, v4 grid utilities).
- `red--text text--darken-4` → `text-red-darken-4`.
- FIX: `cols="12 pt-0"` on the paragraphs column was a class stuffed into the `cols` prop.
  Split into `cols="12" class="pt-0"`.
- `name: 'DashboardGrid'` → `defineOptions({ name: 'Grid' })`.
- No style block in the original.
- PENDING: the "Collapsed at 960px / 1280px / 1920px" subheading copy still quotes v2
  thresholds; v4's are 840/1145/1545. Copy left verbatim. P10e.

---

## P8.16 — views/dashboard/component/Tabs.vue

Status: done

- STRUCTURAL: v3+ `v-tabs` no longer hosts its own content, so every `v-tab-item` block became
  a `v-tabs-window` / `v-tabs-window-item` pair placed as a **sibling** after
  `BaseMaterialTabs`, sharing one model. `BaseMaterialTabs` only renders `<v-tabs>`, so content cannot stay inside it without landing in the flex bar.
- Each of the four uncontrolled tab sets gained a `v-model` ref (`nav1`–`nav3`) — the window and the bar must share a value, which the original's implicit v2 pairing did for free.
- `vertical` → `direction="vertical"`; `centered` → `align-tabs="center"`; `background-color` → `bg-color`.
- v-expansion-panel-header / `-content` → `-title` / `-text`.
- `flat` on v-card → `variant="flat"`; `v-icon v-text="tab.icon"` → interpolation.
- Renames: headline → text-h5, `grey--text body-2` → `text-grey text-body-2`.
- FIX: the Help Center subheading passed `heading=`, which BaseSubheading does not declare —
  changed to `subheading=`. Same for its siblings, which already used `subheading`.
- FIX: `v-for="(tab, i) in tabs"` shadowed the `tab` model ref; the loop binding is `tabLabel`.
- `name: 'DashboardPanels'` → `defineOptions({ name: 'Tabs' })`.
- No style block in the original.
- PENDING: `icons-and-text` on v-tabs is unverified in v4 — MaterialTabs' scss keys off `v-tabs--icons-and-text`, so confirm the class still renders. P10e.

---

## P8.17 — views/dashboard/component/Notifications.vue

Status: done

- FIX: `parsedDirection` split on `''`, so `v-bind="{ [parsedDirection[0]]: true, [parsedDirection[1]]: true }"` set `t` and `o` — neither a v2 nor a v4 prop. Replaced with `:location="direction"` and the computed deleted; the snackbar now actually moves.
- `dark` dropped on every BaseMaterialAlert — undeclared, so it fell through $attrs to v-alert as a dead attribute; v4 derives the on-colour from `color`/`type`.
- `dismissible` kept — that is the prop MaterialAlert declares (it maps to v-alert `closable`).
- `v-btn default` dropped; `depressed` → `variant="flat"`; `text` → `variant="text"`;
  `rounded` → `rounded="pill"`; `class="v-btn--block"` → the `block` prop (class kept alongside).
- `color` ref annotated `AlertType` so it satisfies MaterialSnackbar's `type` prop; `randomColor()` uses `?? 'info'` for `noUncheckedIndexedAccess`.
- FIX: `v-for="color in colors"` shadowed the `color` ref used by the snackbar; loop binding renamed `stateColor`.
- Renames: body-1 → text-body-1, `grey--text` → `text-grey`, `hidden-sm-and-down` → `d-none d-md-block`.
- `name: 'DashboardNotifications'` → `defineOptions({ name: 'Notifications' })`.
- Container id stays `alerts` (as in the original).
- No style block in the original.
- PENDING: dialog card images are still remote demos.creative-tim.com URLs. P11.

---

## P8.18 — views/dashboard/forms/RegularForms.vue

Status: done

- `v-subheader` removed in v3+ → plain `div`; `display-1` → `text-h4`.
- `input-value="true"` → `v-model` refs. The original's `checkbox`/`radioGroup`/`switch1` data was dead (nothing bound it), so those are gone and the controls now hold real state. Indeterminate model typed `boolean | null`.
- `filled`/`outlined`/`solo` → `variant="filled"|"outlined"|"solo"`.
- `no-gutters` → `gap="0"`; `no-wrap` kept (still a v4 prop).
- `v-radio-group column` dropped (default); `row` → `inline`.
- `text-right grey--text` → `text-end text-grey`; `track-color="secondary lighten-3"` → `secondary-lighten-3`.
- `v-textarea value="..."` → `model-value="..."` (same trap as P8.11).
- `zoomOut`/`zoomIn` kept verbatim, including the `|| 0` / `|| 100` quirk that lets the value go negative before clamping.
- `name: 'DashboardFormsRegularForms'` → `defineOptions({ name: 'RegularForms' })`.
- No style block in the original.
- PENDING: `prepend-icon`/`append-icon` and `@click:prepend`/`@click:append` on v-slider are unverified in v4. P10.

---

## P8.19 — views/dashboard/tables/RegularTables.vue

Status: done

- `v-simple-table` → `v-table` (rename in the PLAN table; same default-slot markup).
- `text-left` → `text-start`.
- `data()` → typed `Deserts[]` const; the original had no `name` field, so no `defineOptions` — the filename infers `RegularTables`.
- Bare screen: no container, no BaseVComponent, no style block — as in the original.

---

## P8.20 — views/dashboard/tables/DataTables.vue

Status: done

- Headers: `text` → `title` (v4 dropped the alias) and annotated `DataTableHeader[]` per the P8.7 rule; `items` annotated with a `Person` interface.
- `:search.sync` → `v-model:search`; `search: undefined` → `ref('')`.
- sort-by + sort-desc collapsed into a single `:sort-by` of `{ key, order }` objects — sort-desc no longer exists. Declared with an inline `'asc' | 'desc'` union rather than importing `SortItem`, whose export path is not guaranteed.
- single-line`on v-text-field dropped (default in v3+);`hide-details` kept.
- `v-slot:after-heading` → `#after-heading`; display-2 → text-h3.
- `name: 'DashboardDataTables'` → `defineOptions({ name: 'DataTables' })`.
- No style block in the original; container stays non-`fluid` and keeps `id="data-tables"`.
- PENDING: `multi-sort` behaviour unverified against v4's data-table. P10.

---

## P8.21 — views/dashboard/tables/ExtendedTables.vue

Status: done

- `v-simple-table` → `v-table`; `text-right` → `text-end`.
- `v-btn small`/`x-small` → `size="small"`/`size="x-small"`; `fab` → `icon` (the third row had both `fab` and `icon` — one survives); `v-icon v-text` → interpolation.
- Headers: `text` → `title`, `align: 'right'` → `'end'`, both arrays annotated `DataTableHeader[]`; `items` arrays typed (`Product`, `Selection`).
- `#item` slot kept; item objects are raw rows in v3+ as well, so `item.name` etc. are unchanged.
- `#footer` → `#bottom`. v4's data table has no `footer` slot; `bottom` is the area under the body, which is where both totals blocks belong. `hide-default-footer` kept — it suppresses the pagination row without suppressing `bottom`.
- `default` on v-btn dropped; `rounded` → `rounded="pill"`.
- Renames: `purple--text` → text-purple, `headline` → text-h5, `title` class → text-h6, `display-1` → text-h4, `grey--text subtitle-1` → text-grey text-subtitle-1.
- `name: 'DashboardExtendedTables'` → `defineOptions({ name: 'ExtendedTables' })`.
- Original typo kept: `link="componetns/simple-tables"`.
- No style block in the original.
- PENDING: product images still remote demos.creative-tim.com URLs. P11.

---

## P8.22 — views/dashboard/forms/ExtendedForms.vue

Status: done

- `v-date-picker` is a labs component in v3+ and nothing registers labs, so it is imported locally (`vuetify/labs/VDatePicker`) and used as `<VDatePicker>`. Three uses.
- Date-picker actions moved into the `#actions` slot — the default slot no longer hosts them.
- `:return-value.sync` + `$refs.menu.save()` dropped. The picker already writes through `v-model`, so `save` only re-committed what was committed; OK now just closes.
- `@input` on the third picker → `@update:model-value`.
- `offset-y` → `location="bottom start"`; `#activator="{ on }"` → `{ props: activatorProps }` with `v-bind`, `v-on` dropped.
- `input-value` → `v-model` refs on the two switches; progress-linear `:value` → `:model-value`.
- `outlined` → `variant="outlined"`; `closed` on chip → `closable`; chip `small` → `size="small"`.
- `#selection` slot props modernised: the combobox gives `{ item, index }` and a local `removeItem`; the file input gives `{ fileNames, totalBytes, totalBytesReadable }`, so the chips render from `fileNames.slice(0, 2)` and the overflow count uses `fileNames.length`. The v2 `select` prop function is dropped — the chip no longer focuses the input on click.
- `#item` slot on both selects rewritten to v4's `{ item, props }` + `v-bind="props"`. `item` is the raw string here, so no `.title`; `v-list-item-title` takes interpolation, not `v-text`. The multiple select's check icon keys off the bound model instead of `attrs.inputValue`. `white--text` → `text-white`.
- `v-row dense` → `density="compact"`; `info lighten-4` → `info-lighten-4`; `deep-purple accent-4` → `deep-purple-accent-4`; `overline grey--text text--darken-3` → text-overline text-grey-darken-3; display-1 → text-h4, body-1 → text-body-1.
- MaterialDropdown: `top` → `location="top"`, `default` dropped.
- Original bug kept: the second card's field binds `date2` while its picker binds `date`, so the field never shows the picked value. Unreferenced `ranged` data dropped.
- `name: 'DashboardFormsExtendedForms'` → `defineOptions({ name: 'ExtendedForms' })`.
- `v-list-item-icon` dropped — removed in v3+, like `-content` and `-action`. The check is a bare `v-icon` inside the item.
- No style block in the original.
- PENDING: `vuetify/labs/VDatePicker` path unverified in v4 — if it moved to core, swap the import. Also `v-calendar` (Calendar.vue) has the same unregistered-labs gap. P10.
- PENDING: `buffer-value` + `stream` on progress-linear unverified in v4. P10.

---

## P8.23 — views/dashboard/forms/ValidationForms.vue

Status: done

- vee-validate 2 is still not installed, so `v-validate` / `data-vv-*` are carried verbatim. `errors.collect(scope)` is served by a local shim backed by an empty `Record<string, string[]>`` keyed on scope — P9.11 fills it. Expect one "Failed to resolve directive: validate" warning per field until then.
- `validateForm(scope)` → `validateForm()`; the scope argument only existed to drive `$validator.validateAll`. Body is the original's `alert('Form Submitted!')`.
- `\*` escapes → `*`; `body-2` → `text-body-2`; `body-1 grey--text` → `text-body-1 text-grey; text-right` → `text-end`.
- `v-row dense` → `density="compact"`; `default` on v-btn dropped.
- `number` ref typed `number | null` (initial `null`, `type="number"`).
- `name: 'DashboardFormsValidationForms'` → `defineOptions({ name: 'ValidationForms' })`.
- No style block in the original.
- PENDING: whole screen is unvalidated until P9.10 decides the approach and P9.11 rebuilds it.

---

## P8.24 — views/dashboard/forms/Wizard.vue

Status: done

- `v-tab-item` → `v-tabs-window-item` (MaterialWizard renders a `v-tabs-window` around its slot).
- vee-validate 2 still absent: `v-validate` / `data-vv-*` carried verbatim. `$validator.validateAll` is replaced by a local `validationErrors` map of scope → `string[]` (empty until P9.11), and `validateForm` reports a step valid when its message list is empty.
- `ref="file"` + `$refs.file.click()` → `fileInput` template ref + optional call; `onChange(val)` typed against `Event` with a cast to `HTMLInputElement`.
- `v-item` slot `{ active, toggle }` → `{ isSelected, toggle }`; `v-item-group class="row"` → `class="v-row"` (bare `row` is not a v4 class and the `v-col` children need a flex parent).
- outlined`→ variant="outlined";`v-icon large v-text`→`size="large"` + interpolation.
- `validate-on-blur` → `validate-on="blur"`.
- Renames: display-1 → text-h4, subtitle-2 → text-subtitle-2, `text--primary` → `text-high-emphasis` (emphasis, not colour), `success--text`/`grey--text` → `text-success`/`text-grey`.
- lang="sass"`→`lang="scss"`, unscoped, `.v-card--account` hooks preserved.
- `name: 'DashboardFormsWizard'` → `defineOptions({ name: 'Wizard' })`.
- PENDING: whole screen is unvalidated until P9.10/P9.11; step gating depends on it, so the Next button currently only advances on filled fields.

---

## P8.25 — views/dashboard/component/Typography.vue

Status: done

- Every entry key is the rendered class, so the map doubles as the v2 → v4 typography table: display-4/3/2/1 → text-h1/h2/h3/h4, headline → text-h5, `title` → `text-h6 text-uppercase`, `text--disabled` → `text-disabled`, `*--text` → `text-*`.
- `text-danger` kept — `danger` was never a v2 theme colour either, so the class is dead in both. Fixing it to `text-error` would change the label. P10. → closed at P10.0f.
- FIX: the template tested `i === 'quote'`, but the key is `blockquote` — the quote branch, its paragraph wrapper and the "Kanye West, Musician" attribution were all unreachable. Retargeted to `blockquote`.
- `<component :is="t[2]">` kept as-is; `typography` typed `Record<string, [string, string, string]>`.
- Empty-string key left empty — it is the unstyled paragraph case.
- `lang="scss"`, unscoped, `.tim-note` preserved.
- No `name` in the original, so no `defineOptions`.

---

