# PORTING.md

Every deviation from the original app, with a reason. Newest first.

Format:

    ## <file or area>
    **Deviation:** what differs from the original
    **Reason:** why
    **Status:** pending — <step>   (only if not yet resolved)
    **Date:** YYYY-MM-DD

---

## Global

**Deviation:** Target is Vue 3 + Vuetify 4 + TypeScript + Vite + Pinia, replacing
Vue 2 + Vuetify 2 + JS + Vue CLI + Vuex.
**Reason:** Vue 2 and Vuetify 2 are both EOL. Full rewrite was required regardless.
**Date:** 2026-10-26

**Deviation:** Vuetify 4's lowered breakpoints are adopted rather than restoring v3
thresholds (md 960→840, lg 1280→1145, xl 1920→1545, xxl 2560→2138).
**Reason:** Keeps JS and CSS thresholds consistent without a partial Sass override.
**Status:** revisit at P10 if fidelity matters
**Date:** 2026-10-26

**Deviation:** `app.scss` is not ported verbatim; rebuilt in two passes
(global primitives at P6b, screen-specific at P10).
**Reason:** 36KB of MD2-era patchwork; Vuetify 4's MD3 defaults cover much of it.
**Status:** P6b done, P10 pending
**Date:** —

**Deviation:** Fonts are self-hosted via `@fontsource/roboto` instead of a CDN.
**Reason:** No external request, no layout shift, works offline.
**Date:** 2026-10-26

**Deviation:** `vee-validate` 2 is not being ported as-is.
**Reason:** v4 is a complete API rewrite.
**Status:** pending — decision at P9.10
**Date:** —

**Deviation:** `chartist` / `vue-chartist` and `vue-world-map` are being replaced.
**Reason:** Both are Vue 2-era packages.
**Status:** pending — decision at P9.1 / P9.4
**Date:** —

**Deviation:** i18n setup pulled forward from P9.7 to Phase 5.
**Reason:** `AppBar.vue` and `Drawer.vue` both call `$t()`. `globalInjection: true`
keeps every original `$t()` call working unchanged.
**Status:** `ar.json` and RTL still deferred to P9.7–P9.8
**Date:** 2026-10-26

**Deviation:** `lodash` dropped entirely.
**Reason:** Only `kebabCase` was used, by `ItemGroup`'s `genGroup`, which became
redundant once `navigation.ts` pre-resolved `to` paths.
**Date:** 2026-10-26

**Deviation:** `sass-embedded` used instead of `sass`.
**Reason:** Faster; Vite's preferred compiler. Dev-only dependency.
**Date:** 2026-10-26

---

## eslint.config.ts

**Deviation:** `vue/multi-word-component-names` disabled.
**Reason:** The original has ~16 single-word screen filenames. Keeping filenames
identical to the original keeps both file trees navigable during the port.
**Date:** 2026-10-26

---

## src/plugins/vuetify.ts

**Deviation:** `accent` theme colour removed.
**Reason:** Dropped as a theme key in Vuetify 3+. Inert in v4.
**Date:** 2026-10-26

**Deviation:** `defaultTheme: 'light'`.
**Reason:** The original had no `dark: true`; Vuetify 2 defaulted to light.
**Date:** 2026-10-26

**Deviation:** Added a `locale` block with `rtl: { ar: true }`.
**Reason:** `$vuetify.rtl = true` is gone in v3+; `useRtl().isRtl` is a read-only
computed. Direction is now derived from a locale→RTL map, so switching the Vuetify
locale to `'ar'` flips the app and sets `dir="rtl"`.
**Status:** also the mechanism P9.8 needs for `ar.json`
**Date:** —

---

## src/plugins/vuetify.js

**Deviation:** `lang.t` i18n bridge not carried over.
**Reason:** Vuetify 4 uses a locale adapter instead.
**Status:** pending — P9.8
**Date:** —

**Deviation:** Drawer `:dark` prop replaced with `:theme`.
**Reason:** `dark` prop removed in Vuetify 3+.
**Date:** 2026-10-26

---

## src/router/routes.ts

**Deviation:** Route name `'Data Tabels'` corrected to `'Data Tables'`.
**Reason:** Typo in the original.
**Date:** 2026-10-26

**Deviation:** Catch-all path `'*'` replaced with `'/:pathMatch(.*)*'`.
**Reason:** vue-router 4 syntax.
**Date:** 2026-10-26

---

## src/stores/ui.ts

**Deviation:** `expandOnHover` moved from component-local `data` in
`dashboard/Index.vue` into the store.
**Reason:** Avoids prop-drilling through the layout to AppBar, Drawer and Settings.
**Date:** 2026-10-26

**Deviation:** Vuex mutations replaced with plain Pinia functions.
**Reason:** Pinia has no mutations/actions split.
**Date:** 2026-10-26

**Deviation:** `barImage` still points at an external creative-tim URL.
**Status:** pending — P11.1
**Date:** —

---

## src/config/navigation.ts

**Deviation:** Nav tree moved out of `Drawer.vue` into `src/config/navigation.ts`.
**Reason:** Separates data from presentation; `to` paths pre-resolved to absolute
(original concatenated a `group` prefix in `ItemGroup.vue`).
**Date:** 2026-10-26

**Deviation:** Nav item `register` pointed to route `pricing`. Corrected.
**Reason:** Bug in the original.
**Date:** 2026-10-26

**Deviation:** `profileNav` children kept as empty-string stubs from the original.
**Status:** pending — P11.2
**Date:** —

---

## components/core/Footer.vue

**Deviation:** `lang="sass"` converted to plain CSS.
**Reason:** Avoids a Sass dependency for one rule block (superseded by the
`legacy.scss` decision, which does use Sass).
**Date:** 2026-10-26

**Deviation:** `no-gutters` mapped to `gap="0"`.
**Reason:** Direct v4 equivalent; v4's grid is gap-based.
**Date:** 2026-10-26

**Deviation:** `v-text` on `v-icon` replaced with the `icon` prop.
**Date:** 2026-10-26

**Note:** Footer links render flush until the `.v-footer a` padding rule in
`legacy.scss` applies.
**Status:** resolves at P6b — done

---

## components/core/AppBarItem.vue

**Deviation:** Extracted from an inline `render(h)` component into an SFC.
**Reason:** `scopedSlots` → `slots` in Vue 3.
**Date:** 2026-10-26

**Deviation:** `hover` → `isHovering`; `black--text` → `text-black`;
`white--text secondary elevation-12` → `text-white bg-secondary elevation-4`.
**Reason:** Renames; v4 ships elevation 0–5.
**Date:** 2026-10-26

**Deviation:** `title` passed as a prop instead of a `v-list-item-title` child.
**Reason:** `v-text` on a component triggers `vue/no-v-text-v-html-on-component`.
**Date:** 2026-10-26

---

## components/core/AppBar.vue

**Deviation:** `app` prop removed; `fab` → `icon`; `text` → `variant="text"`.
**Date:** 2026-10-26

**Deviation:** `$vuetify.breakpoint.*` → `useDisplay()`.
**Date:** 2026-10-26

**Deviation:** `value` prop + `$emit('input')` removed; writes to the store.
**Date:** 2026-10-26

**Deviation:** `v-slot:activator="{ attrs, on }"` → `#activator="{ props }"`.
**Date:** 2026-10-26

**Deviation:** `caption` → `text-body-small`; `hidden-sm-and-down` → `d-none d-md-block`.
**Date:** 2026-10-26

**Deviation:** `v-text` on `v-toolbar-title` → interpolation.
**Date:** 2026-10-26

**Deviation:** `offset-y` dropped; `append-outer` → `append-inner`; `:tile="false"` dropped.
**Status:** verify at P8 when screens exist
**Date:** —

---

## components/core/Drawer.vue

**Deviation:** `mobile-break-point="960"` → `mobile-breakpoint="md"`.
**Reason:** v4 lowered breakpoints; 960 sits between md and lg. Semantic value follows
whatever thresholds are configured.
**Date:** 2026-10-26

**Deviation:** `:expand-on-hover` kept (not mapped to `rail`).
**Reason:** The prop still exists in v4 with the same behaviour.
**Date:** 2026-10-26

**Deviation:** `#image` slot dropped; `:image` prop used instead.
**Reason:** The v4 slot is wrapped in a `VDefaultsProvider` and threw during render.
**Status:** gradient overlay pending — P10
**Date:** —

**Deviation:** `:right="$vuetify.rtl"` → `:location="isRtl ? 'end' : 'start'"`.
**Date:** 2026-10-26

**Note:** Vuetify warns `Multiple nodes with the same ID` for the profile nav group.
Non-fatal; the drawer renders.
**Status:** pending — investigate at P10

---

## components/base/Item.vue, ItemGroup.vue, ItemSubGroup.vue

**Deviation:** Moved from Phase 7 to Phase 5.
**Reason:** The drawer cannot render without them.
**Date:** 2026-10-26

**Deviation:** `genGroup` deleted; `v-list-group :group` → `:value="item.title"`.
**Reason:** `to` paths are pre-resolved, so child-path concatenation is redundant.
**Status:** auto-expand-on-active-child needs verification
**Date:** —

**Deviation:** `Themeable` mixin → `useTheme()`; `mapState(['barColor'])` → store.
**Date:** 2026-10-26

**Deviation:** `v-list-item-icon` / `-content` / `-title` children → `#prepend` slot
plus `title` / `subtitle` props.
**Date:** 2026-10-26

**Deviation:** `v-list-item-avatar` → `<v-avatar>` in the activator's `#prepend`.
**Date:** 2026-10-26

**Deviation:** Activator slot now wraps an explicit `<v-list-item v-bind="activatorProps">`.
**Reason:** In v2 the slot content _was_ the item; v3 requires the wrapper.
**Date:** 2026-10-26

---

## components/core/Settings.vue

**Deviation:** `Proxyable` mixin dropped; `expandOnHover` read from the store.
**Date:** 2026-10-26

**Deviation:** `$vuetify.theme.dark` → `isDark` computed over `theme.global.name`;
theme mutation uses `theme.themes.value[name]!`.
**Reason:** Global instance removed; `noUncheckedIndexedAccess` requires the assertion.
**Date:** 2026-10-26

**Deviation:** `dark` prop → `theme="dark"`; `v-icon large` → `size="large"`;
`left` → `location="start"`; `active` slot prop → `isSelected`; `default` dropped.
**Date:** 2026-10-26

**Deviation:** `showImg` watcher keeps the original's boolean-as-image quirk.
**Status:** pending — tidy at P10
**Date:** —

---

## layouts/DashboardLayout.vue / AuthLayout.vue

**Deviation:** Replace `views/dashboard/Index.vue` and `views/pages/Index.vue`.
**Date:** 2026-10-26

**Deviation:** `v-app` moved to `App.vue`; layouts render `v-layout`.
**Reason:** `v-app` belongs at the root in Vuetify 3+; `v-layout` supplies the app
layout context the `app` prop used to provide.
**Date:** 2026-10-26

**Deviation:** No `expandOnHover` prop plumbing.
**Date:** 2026-10-26

**Deviation:** AuthLayout restores the _previous_ theme on unmount rather than
hardcoding `dark = false`.
**Reason:** The original discarded a dark-mode choice made on the dashboard.
**Date:** 2026-10-26

---

## components/auth/*

**Deviation:** ``require(`@/assets/${src}`)``→ static imports in a lookup map.
**Reason:**`require` is not defined in Vite's ESM runtime.
**Date:** 2026-10-26

**Deviation:** `:src` lookup uses `?? clintMckoy` fallback.
**Reason:** `noUncheckedIndexedAccess` types the lookup as `string | undefined`.
**Date:** 2026-10-26

**Deviation:** `v-content` → `v-main`; `grey lighten-3` → `grey-lighten-3`;
`left` → `start`; `text` → `variant="text"`.
**Date:** 2026-10-26

---

## src/styles/legacy.scss

**Deviation:** `app.scss` copied verbatim, then renamed in two `sed` passes.
**Reason:** Bulk selector renames; keeps the file diffable against the original.
**Date:** 2026-10-26

**Deviation:** Imported **unlayered** so it beats Vuetify's `@layer` blocks.
**Reason:** Preserves original specificity behaviour. Consequence: it overrides
Vuetify aggressively.
**Date:** 2026-10-26

**Deviation:** File is temporary; dissolves into scoped component styles and is
deleted at P10.
**Status:** pending — P10

**Deviation:** `.v-btn.v-size--*` renamed rather than `.v-size--*` globally.
**Reason:** `.v-size--small` also appears on chips, which need `.v-chip--size-small`.
**Date:** 2026-10-26

**Status:** parked selectors needing judgement — P10
`.v-list-item__content` (gone in v3, breaks middle-selector chains),
`.v-tabs-bar`, `.v-calendar-weekly`, `.v-picker`, `.v-select-list`.

---

## components/base/Subheading.vue

**Deviation:** `col col-12` → `v-col-12`; `text-left` → `text-start`.
**Reason:** Grid class prefix added; v3+ uses logical direction utilities.
**Date:** —

---

## components/base/MaterialTabs.vue

**Deviation:** `Proxyable` mixin replaced with a `modelValue` prop +
`update:modelValue` emit, bridged by a writable `computed`.
**Reason:** Vue 3 renamed `value`/`input` to `modelValue`/`update:modelValue`.
**Date:** —

---

## components/base/*.vue

**Deviation:** `extends: VX` replaced with render-and-wrap plus `v-bind="$attrs"`.
**Reason:** `<script setup>` has no `extends`; unknown props pass through `$attrs`.
**Date:** —

---

## P7.6 — MaterialTestimony.vue

Status: done

- Displayed card only; no state.
- Class renames: display-1 → text-h4, display-2 → text-h3, body-2 → text-body-2, grey--text → text-grey
- v-icon `x-large` prop → size="x-large"
- v-card-text switched from v-text to interpolation
- Style block kept as indented sass, unscoped, as in the original
- Default avatar URL still points at demos.creative-tim.com (local asset deferred to P11)

---

## P7.4/P7.5 — MaterialAlert + MaterialSnackbar rework

Status: done

- Extracted AlertType to components/base/types.ts; both components import it.
- inheritAttrs:false on both (explicit $attrs forwarding was double-attaching handlers).
- MaterialAlert: added #prepend icon map — v4 renders type icons white, original's white icon box made them invisible.
- Style selectors updated: v-alert__icon → v-alert__prepend, v-snack__* → v-snackbar__*; added position:relative for the -36px offset.
- MaterialSnackbar: value → modelValue (v3 removed `value`), dropped dead `dark` prop and the v2 `change` event.
- Divergence: close button now inherits alert colour via `closable` instead of the original's hardcoded white.

---

## P7.7 — MaterialCard.vue

Status: done

- 6 named slots: default, heading, image, after-heading, reveal-actions, actions.
- Deleted dead code: hasAltHeading computed (never referenced), `image` prop (template checks $slots.image, prop never read).
- $slots accessed via useSlots() since <script setup> has no $slots binding.
- Classes computed folded into an inline :class object.
- Renames: display-1 → text-h4, headline → text-h5. Dropped dead `dark` on v-sheet.
- Pending: `card-title` is not a v4 typography class — kept verbatim, review at P10.
- Pending: elevation-12 on the avatar — verify v4 supports >5; remap if flat.

---

## P7.8 — MaterialStatsCard.vue

Status: done

- Original spread ...Card.props; <script setup> has no props object to spread, so only the 8 props this component reads are declared.
- Consequence (improvement): avatar/color/hoverReveal/inline/text were declared-but-unused in the original and therefore swallowed by $attrs. Now undeclared, they flow through to MaterialCard. color now works.
- Dropped v-on="$listeners" (Vue 3 puts listeners in $attrs).
- TRAP recorded: v2 `text--primary` is text emphasis, not the primary colour. Mapped to text-high-emphasis, NOT text-primary.
- Renames: display-2 → text-h3, caption → text-caption, grey--text → text-grey, text-right → text-end, v-card__text/__actions → v-card-text/actions.
- Pending: `body-3` is not a real Vuetify class (vestigial). Empty v-icon renders when subIcon is undefined.

---

## P7.9 — MaterialChartCard.vue

Status: done

- Dependency added: chartist@0.11 + vue-chartist@3 (the Vue 3 build; v2 was Vue 2 only).
- vue-chartist ships Chartist JS but not its stylesheet → chartist installed separately for chartist.min.css, imported in main.ts.
- vue-chartist is CJS and untyped → src/types/vue-chartist.d.ts shim (module decl + GlobalComponents entry for <chartist>).
- optimizeDeps.include added in vite.config.ts (CJS-only dep).
- type validator fn replaced with a 'Bar'|'Line'|'Pie' union.
- v2 `slot="x"` pass-throughs rewritten as <template #x>.
- Phase 9 note: chartist is unmaintained since 2019. Decision effectively made to keep it; swapping means touching this one file.

---

## P7.10 — MaterialDropdown.vue

Status: done

- FINDING: the original's @click="$(`click:action-${item.id}`)" calls a method `$` that is defined nowhere (checked main.js, App.vue, plugins/base.js, plugins/vuetify.js, no global mixin). Latent bug — throws on item click while the menu still closes.
- Ported as an explicit `action` emit carrying item.id. Screens listening for click:action-N, if any exist, will surface in Phase 8.
- Proxyable mixin replaced with a computed get/set on modelValue. Also accepts a `value` prop and emits `change`, because Proxyable's model was value/change and ported screens may use v-model against that.
- activator slot: v2 { attrs, on } → v3+ { props }. v-on="on" dropped.
- Dropped: offset-y (no v3+ equivalent, default offset used), `default` on v-btn (v3+ default is elevated).
- dense → density="compact"; v-list-item-content wrapper removed; v-list-item-title uses interpolation.
- No style block in the original.

---

## P7.11 — MaterialWizard.vue

Status: done

- v-tabs-slider REMOVED in v3+: element deleted, color moved to v-tabs slider-color, mt-1 replaced with CSS on .v-tabs__slider.
- v-tabs-items → v-tabs-window. Consumers must rename v-tab-item → v-tabs-window-item in Phase 8.
- background-color → bg-color; 'green lighten-5' → 'green-lighten-5'.
- Proxyable → computed get/set; accepts modelValue or value, emits update:modelValue + change.
- Dropped unused ref="tabs".
- Style selectors: .v-tabs-bar → .v-slide-group__container, .v-tabs-slider → .v-tabs__slider, two .v-slide-group__wrapper rules merged.
- Verified MaterialTabs is unaffected (uses hide-slider, not the slider component).
- Last base component.

---

## P7.12/P7.13 — components/base/index.ts

Status: done

- Replaces src/plugins/base.js (webpack require.context → import.meta.glob, eager).
- Names follow the original scheme: Base + PascalCase(filename), so <base-material-card> resolves as before.
- Hand-rolled the name derivation instead of adding lodash (the original imported lodash/upperFirst + camelCase for just this). Revisit at P9 if screens turn out to use lodash elsewhere.
- global.d.ts augments GlobalComponents so Volar accepts the global names. MANUAL LIST — must be updated when a base component is added.
- toGlobalName exported for the P11 Vitest test.

---

## P7.9 fix — conflicting declare module 'vue'

Status: done

- src/types/vue-chartist.d.ts declared `declare module 'vue'` from a SCRIPT file (ambient), while components/base/global.d.ts did it from a MODULE file (augmentation). The ambient form won, and its self-referential import('vue').Component hid vue's real exports → "Module 'vue' has no exported member 'createApp'" plus cascading errors.
- Fix: removed the block from vue-chartist.d.ts; global.d.ts rewritten as a module via a top-level import type, with chartist folded in.
- RULE: exactly one file augments `declare module 'vue'`, and it must be a module (top-level import or export {}).

---

## Restructure — keep .ts out of component dirs

Status: done

- components/base/ is now .vue-only. Moved: index.ts → plugins/base.ts (also matches the original repo's plugins/base.js), types.ts → types/alert.ts, global.d.ts → types/global-components.d.ts.
- Barrel glob changed from './_.vue' to '../components/base/_.vue'; toGlobalName now takes the basename.
- CORRECTION to the earlier P7.12 note: Item.vue / ItemGroup.vue / ItemSubGroup.vue live in components/base/ (not components/core/) and are registered as BaseItem / BaseItemGroup / BaseItemSubGroup. Added to global-components.d.ts.

---

## Convention — SFC block order

Status: done

- Standardised on script → template → style, per the Vue style guide (Recommended) and the vue/block-order default.
- Enforced via vue/block-order in eslint.config.ts; applied repo-wide with pnpm lint.
- Applies to every .vue file, not just components/base/.

---

## Convention — style block lang

Status: done

- Standardised on lang="scss" for every <style> block; enforced via vue/block-lang.
- Converted 7 indented-sass blocks (MaterialAlert, MaterialCard, MaterialChartCard, MaterialSnackbar, MaterialStatsCard, MaterialTestimony, MaterialWizard).
- Added lang to 4 plain <style> blocks (core/Settings, core/Drawer, auth/View, base/MaterialTabs); MaterialTabs body rewritten from indented nesting.
- Why scss: global stylesheet is already scss, scss ≈ css, Vuetify docs/source are scss, one dialect repo-wide.
- scoped vs unscoped left open — revisit at P10.

---

## P7.14 — kitchen sink removed

Status: done

- Deleted src/views/_KitchenSink.vue and its route. Phase 7 closed.
- Phase 7 ran 14 components plus the glob barrel and three .d.ts files.
- Findings worth carrying: `$` in MaterialDropdown was an undefined method (latent bug, ported as an `action` emit); MaterialStatsCard's `...Card.props` spread silently swallowed avatar/color/hoverReveal/inline/text; `text--primary` in v2 is text emphasis, not the primary colour.
- v3+ removals encountered: v-tabs-slider, v-tabs-items, v-list-item-content, dense, offset-y, background-color, display-*, headline, caption, --text suffix, v-card__text/__actions.

---

## P8.1 — views/pages/Error.vue

Status: done

- Only screen with hardcoded copy; no i18n, no state.
- fill-height prop → class; depressed → variant="flat" + color="primary"; title → text-h6; display-3 → text-h2.
- Catch-all is now a LEAF route to Error.vue; Error.vue renders <AuthLayout> around its content. Nesting under a catch-all parent never resolved a matching child.

## P8.1 fixes along the way

- <CoreView /> was self-closing in AuthLayout, discarding everything inside it — the single cause of the empty middle. Replaced with <CoreView><slot><router-view /></slot></CoreView>.
- View.vue rebuilt: absolutely-positioned v-img backdrop + content sibling, instead of content nested inside v-img (the v2 sizer/absolute-content trick doesn't survive v3+).
- AuthLayout v-layout got flex-column: v-footer was landing beside v-main, not below (v2's `app` prop is gone in v3+).
- Settings.vue: theme.global.name.value = x → theme.change(x).
- vue.config: define global → globalThis for the vue-chartist CJS dep.
- CONVENTION: in vue-router 4, never nest under a catch-all parent. Use a leaf route and let the screen render its own layout.
- PENDING: auth backdrop photo not painting. Element present and sized, paints nothing. Suspect inner .v-responsive collapse.

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
- `card-title` kept verbatim (not a v4 class) — P10.

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
- Fix: `const headers: DataTableHeader[]` with `import type { DataTableHeader } from 'vuetify'`.
- RULE: any array of Vuetify header/option objects needs an explicit annotation — literal values otherwise widen to `string` and the prop type rejects them. Expect this again in RegularTables, ExtendedTables and DataTables.

---

## P8.8 — views/dashboard/Charts.vue

Status: done

- Original file is `Charts.vue` (plural). The original router imports it as `Chart` (singular) — a latent mismatch in the source repo, not a port artefact. Route name `Charts` kept as-is.
- `this.$chartist` → `import * as Chartist from 'chartist'`; both `this.$chartist.Interpolation.none()` calls → `Chartist.Interpolation.none()`.
- `types/chartist.d.ts` declared the key as `monone` — a typo conflating `none` and `monotone`. Renamed to `none`; `monotone` added alongside it.
- `v-slot:after-heading` → `#after-heading`.
- Renames: display-1 → text-h4, grey--text → text-grey, subtitle-1 → text-subtitle-1, body-2 → text-body-2, `orange darken-1` → `orange-darken-1`.
- `lang="sass"` → `lang="scss"`. Left **unscoped** so the `#coloured-line` / `#multiple-bar` / `#pie` ID selectors still reach chartist's generated DOM. The duplicate `id="coloured-line"` is retained as in the original.
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
- RULE: never name a `<script setup>` binding the same as a global component you
  use in that file's template. The binding silently wins.

## P8.8 fix — explicit lowercase `chartist` alias

Status: done

- vue-chartist 3.0.0's install registers its component as `Chartist` (capital C);
  templates use the lowercase `<chartist>` tag and rely on Vue's
  capitalize fallback in `resolveComponent`.
- Aliased it explicitly in main.ts so the lowercase name doesn't depend on that
  fallback. Written as a `const` + `if` because `app.component(name)` returns
  `Component | undefined` and the two-arg overload needs a non-undefined value.
- NOTE: vue-chartist 3.0.0 is CJS with only a named `install` export and no
  default — `import vueChartist from 'vue-chartist'` works purely via Vite's
  interop. Second reason to keep `types/vue-chartist.d.ts` accurate.

---

## P8.9 — views/dashboard/Calendar.vue

Status: done

- Local `CalendarBtn` dropped. It was `extends: VBtn` + `VBtn.options.computed.classes.call(this)`
  — a v2 idiom with no v3+ equivalent. Replaced with `v-btn` carrying the same four
  things it added: `color="secondary" rounded class="mx-1 text-lowercase"`.
- `$refs.calendar.prev()` / `.next()` → template ref `calendarRef` + optional call.
- `type` ref annotated as a `CalendarType` union; `ref('month')` alone widens to
  `string`, which `VCalendar`'s `type` prop rejects. Same class of bug as the
  P8.7 headers fix.
- Dropped unreferenced `disabled` and `focus` from data().
- `lang="sass"` → `lang="scss"`, unscoped, `#calendar` root preserved.
- PENDING: the style block targets v2's `.v-calendar-weekly__*` markup — verify
  against v4's DOM at P10.

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
- `card-title`, `purple-input`, `v-card-profile` kept verbatim — app.scss-era hooks, not
  Vuetify classes. Pending: their styling is a P10 item.

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
- `:key` moved from the `v-col` onto the `<template v-for>`; the redundant `:key` on
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
  is gone. P10.

---

## P8.15 — views/dashboard/component/Grid.vue

Status: done

- Local `ParagraphHeading` kept, not inlined. It was `render(h)` in the original; ported as a
  `FunctionalComponent` in the same file, since `<script setup>` slots are functions.
  `this.$slots.default` → `slots.default?.()`.
- `headline` → `text-h5`; `col cols-12` → `v-col-12` (v2 flex classes, v4 grid utilities).
- `red--text text--darken-4` → `text-red-darken-4`.
- FIX: `cols="12 pt-0"` on the paragraphs column was a class stuffed into the `cols` prop.
  Split into `cols="12" class="pt-0"`.
- `name: 'DashboardGrid'` → `defineOptions({ name: 'Grid' })`.
- No style block in the original.
- PENDING: the "Collapsed at 960px / 1280px / 1920px" subheading copy still quotes v2
  thresholds; v4's are 840/1145/1545. Copy left verbatim. P10.

---

## P8.16 — views/dashboard/component/Tabs.vue

Status: done

- STRUCTURAL: v3+ `v-tabs` no longer hosts its own content, so every `v-tab-item` block became
  a `v-tabs-window` / `v-tabs-window-item` pair placed as a **sibling** after
  `BaseMaterialTabs`, sharing one model. `BaseMaterialTabs` only renders `<v-tabs>`, so
  content cannot stay inside it without landing in the flex bar.
- Each of the four uncontrolled tab sets gained a `v-model` ref (`nav1`–`nav3`) — the window
  and the bar must share a value, which the original's implicit v2 pairing did for free.
- `vertical` → `direction="vertical"`; `centered` → `align-tabs="center"`;
  `background-color` → `bg-color`.
- `v-expansion-panel-header` / `-content` → `-title` / `-text`.
- `flat` on v-card → `variant="flat"`; `v-icon v-text="tab.icon"` → interpolation.
- Renames: headline → text-h5, `grey--text body-2` → `text-grey text-body-2`.
- FIX: the Help Center subheading passed `heading=`, which BaseSubheading does not declare —
  changed to `subheading=`. Same for its siblings, which already used `subheading`.
- FIX: `v-for="(tab, i) in tabs"` shadowed the `tab` model ref; the loop binding is `tabLabel`.
- `name: 'DashboardPanels'` → `defineOptions({ name: 'Tabs' })`.
- No style block in the original.
- PENDING: `icons-and-text` on v-tabs is unverified in v4 — MaterialTabs' scss keys off
  `v-tabs--icons-and-text`, so confirm the class still renders. P10.

---

## P8.17 — views/dashboard/component/Notifications.vue

Status: done

- FIX: `parsedDirection` split on `''`, so `v-bind="{ [parsedDirection[0]]: true, [parsedDirection[1]]: true }"`
  set `t` and `o` — neither a v2 nor a v4 prop. Replaced with `:location="direction"` and the
  computed deleted; the snackbar now actually moves.
- `dark` dropped on every BaseMaterialAlert — undeclared, so it fell through $attrs to v-alert
  as a dead attribute; v4 derives the on-colour from `color`/`type`.
- `dismissible` kept — that is the prop MaterialAlert declares (it maps to v-alert `closable`).
- `v-btn default` dropped; `depressed` → `variant="flat"`; `text` → `variant="text"`;
  `rounded` → `rounded="pill"`; `class="v-btn--block"` → the `block` prop (class kept alongside).
- `color` ref annotated `AlertType` so it satisfies MaterialSnackbar's `type` prop;
  `randomColor()` uses `?? 'info'` for `noUncheckedIndexedAccess`.
- FIX: `v-for="color in colors"` shadowed the `color` ref used by the snackbar; loop binding
  renamed `stateColor`.
- Renames: body-1 → text-body-1, `grey--text` → `text-grey`,
  `hidden-sm-and-down` → `d-none d-md-block`.
- `name: 'DashboardNotifications'` → `defineOptions({ name: 'Notifications' })`.
- Container id stays `alerts` (as in the original).
- No style block in the original.
- PENDING: dialog card images are still remote demos.creative-tim.com URLs. P11.

---

## P8.18 — views/dashboard/forms/RegularForms.vue

Status: done

- `v-subheader` removed in v3+ → plain `div`; `display-1` → `text-h4`.
- `input-value="true"` → `v-model` refs. The original's `checkbox`/`radioGroup`/`switch1`
  data was dead (nothing bound it), so those are gone and the controls now hold real state.
  Indeterminate model typed `boolean | null`.
- `filled`/`outlined`/`solo` → `variant="filled"|"outlined"|"solo"`.
- `no-gutters` → `gap="0"`; `no-wrap` kept (still a v4 prop).
- `v-radio-group column` dropped (default); `row` → `inline`.
- `text-right grey--text` → `text-end text-grey`; `track-color="secondary lighten-3"` →
  `secondary-lighten-3`.
- `v-textarea value="…"` → `model-value="…"` (same trap as P8.11).
- `zoomOut`/`zoomIn` kept verbatim, including the `|| 0` / `|| 100` quirk that lets the value
  go negative before clamping.
- `name: 'DashboardFormsRegularForms'` → `defineOptions({ name: 'RegularForms' })`.
- No style block in the original.
- PENDING: `prepend-icon`/`append-icon` and `@click:prepend`/`@click:append` on v-slider are
  unverified in v4. P10.

---

## P8.19 — views/dashboard/tables/RegularTables.vue

Status: done

- `v-simple-table` → `v-table` (rename in the PLAN table; same default-slot markup).
- `text-left` → `text-start`.
- `data()` → typed `Dessert[]` const; the original had no `name` field, so no `defineOptions`
  — the filename infers `RegularTables`.
- Bare screen: no container, no BaseVComponent, no style block — as in the original.

---

## P8.20 — views/dashboard/tables/DataTables.vue

Status: done

- Headers: `text` → `title` (v4 dropped the alias) and annotated `DataTableHeader[]` per the
  P8.7 rule; `items` annotated with a `Person` interface.
- `:search.sync` → `v-model:search`; `search: undefined` → `ref('')`.
- `sort-by` + `sort-desc` collapsed into a single `:sort-by` of `{ key, order }` objects —
  `sort-desc` no longer exists. Declared with an inline `'asc' | 'desc'` union rather than
  importing `SortItem`, whose export path is not guaranteed.
- `single-line` on v-text-field dropped (default in v3+); `hide-details` kept.
- `v-slot:after-heading` → `#after-heading`; display-2 → text-h3.
- `name: 'DashboardDataTables'` → `defineOptions({ name: 'DataTables' })`.
- No style block in the original; container stays non-`fluid` and keeps `id="data-tables"`.
- PENDING: `multi-sort` behaviour unverified against v4's data-table. P10.

---

## P8.21 — views/dashboard/tables/ExtendedTables.vue

Status: done

- `v-simple-table` → `v-table`; `text-right` → `text-end`.
- `v-btn small`/`x-small` → `size="small"`/`size="x-small"`; `fab` → `icon` (the third row had
  both `fab` and `icon` — one survives); `v-icon v-text` → interpolation.
- Headers: `text` → `title`, `align: 'right'` → `'end'`, both arrays annotated
  `DataTableHeader[]`; `items` arrays typed (`Product`, `Selection`).
- `#item` slot kept; item objects are raw rows in v3+ as well, so `item.name` etc. are unchanged.
- `#footer` → `#bottom`. v4's data table has no `footer` slot; `bottom` is the area under the
  body, which is where both totals blocks belong. `hide-default-footer` kept — it suppresses
  the pagination row without suppressing `bottom`.
- `default` on v-btn dropped; `rounded` → `rounded="pill"`.
- Renames: `purple--text` → `text-purple`, `headline` → `text-h5`, `title` class → `text-h6`,
  `display-1` → `text-h4`, `grey--text subtitle-1` → `text-grey text-subtitle-1`.
- `name: 'DashboardExtendedTables'` → `defineOptions({ name: 'ExtendedTables' })`.
- Original typo kept: `link="componetns/simple-tables"`.
- No style block in the original.
- PENDING: product images still remote demos.creative-tim.com URLs. P11.

---

## P8.22 — views/dashboard/forms/ExtendedForms.vue

Status: done

- `v-date-picker` is a labs component in v3+ and nothing registers labs, so it is imported
  locally (`vuetify/labs/VDatePicker`) and used as `<VDatePicker>`. Three uses.
- Date-picker actions moved into the `#actions` slot — the default slot no longer hosts them.
- `:return-value.sync` + `$refs.menu.save()` dropped. The picker already writes through
  `v-model`, so `save` only re-committed what was committed; OK now just closes.
- `@input` on the third picker → `@update:model-value`.
- `offset-y` → `location="bottom start"`; `#activator="{ on }"` → `{ props: activatorProps }`
  with `v-bind`, `v-on` dropped.
- `input-value` → `v-model` refs on the two switches; progress-linear `:value` → `:model-value`.
- `outlined` → `variant="outlined"`; `close` on chip → `closable`; chip `small` → `size="small"`.
- `#selection` slot props modernised: the combobox gives `{ item, index }` and a local
  `removeItem`; the file input gives `{ fileNames, totalBytes, totalBytesReadable }`, so the
  chips render from `fileNames.slice(0, 2)` and the overflow count uses `fileNames.length`.
  The v2 `select` prop function is dropped — the chip no longer focuses the input on click.
- `#item` slot on both selects rewritten to v4's `{ item, props }` + `v-bind="props"`. `item`
  is the raw string here, so no `.title`; `v-list-item-title` takes interpolation, not `v-text`.
  The multiple select's check icon keys off the bound model instead of `attrs.inputValue`.
  `white--text` → `text-white`.
- `v-row dense` → `density="compact"`; `info lighten-4` → `info-lighten-4`;
  `deep-purple accent-4` → `deep-purple-accent-4`; `overline grey--text text--darken-3` →
  `text-overline text-grey-darken-3`; display-1 → text-h4, body-1 → text-body-1.
- MaterialDropdown: `top` → `location="top"`, `default` dropped.
- Original bug kept: the second card's field binds `date2` while its picker binds `date`, so
  the field never shows the picked value. Unreferenced `range` data dropped.
- `name: 'DashboardFormsExtendedForms'` → `defineOptions({ name: 'ExtendedForms' })`.
- `v-list-item-icon` dropped — removed in v3+, like `-content` and `-action`. The check is a
  bare `v-icon` inside the item.
- No style block in the original.
- PENDING: `vuetify/labs/VDatePicker` path unverified in v4 — if it moved to core, swap the
  import. Also `v-calendar` (Calendar.vue) has the same unregistered-labs gap. P10.
- PENDING: `buffer-value` + `stream` on progress-linear unverified in v4. P10.

---

## P8.23 — views/dashboard/forms/ValidationForms.vue

Status: done

- vee-validate 2 is still not installed, so `v-validate` / `data-vv-*` are carried verbatim.
  `errors.collect(scope)` is served by a local shim backed by an empty
  `Record<string, string[]>` keyed on scope — P9.11 fills it. Expect one
  "Failed to resolve directive: validate" warning per field until then.
- `validateForm(scope)` → `validateForm()`; the scope argument only existed to drive
  `$validator.validateAll`. Body is the original's `alert('Form Submitted!')`.
- `\*` escapes → `*`; `body-2` → `text-body-2`; `body-1 grey--text` → `text-body-1 text-grey`;
  `text-right` → `text-end`.
- `v-row dense` → `density="compact"`; `default` on v-btn dropped.
- `number` ref typed `number | null` (initial `null`, `type="number"`).
- `name: 'DashboardFormsValidationForms'` → `defineOptions({ name: 'ValidationForms' })`.
- No style block in the original.
- PENDING: whole screen is unvalidated until P9.10 decides the approach and P9.11 rebuilds it.

---

## P8.24 — views/dashboard/forms/Wizard.vue

Status: done

- `v-tab-item` → `v-tabs-window-item` (MaterialWizard renders a `v-tabs-window` around its slot).
- vee-validate 2 still absent: `v-validate` / `data-vv-*` carried verbatim. `$validator.validateAll`
  is replaced by a local `validationErrors` map of scope → `string[]` (empty until P9.11), and
  `validateForm` reports a step valid when its message list is empty.
- `ref="file"` + `$refs.file.click()` → `fileInput` template ref + optional call;
  `onChange(val)` typed against `Event` with a cast to `HTMLInputElement`.
- `v-item` slot `{ active, toggle }` → `{ isSelected, toggle }`; `v-item-group class="row"` →
  `class="v-row"` (bare `row` is not a v4 class and the `v-col` children need a flex parent).
- `outlined` → `variant="outlined"`; `v-icon large v-text` → `size="large"` + interpolation.
- `validate-on-blur` → `validate-on="blur"`.
- Renames: display-1 → text-h4, subtitle-2 → text-subtitle-2, `text--primary` →
  `text-high-emphasis` (emphasis, not colour), `success--text`/`grey--text` → `text-success`/`text-grey`.
- `lang="sass"` → `lang="scss"`, unscoped, `.v-card--account` hooks preserved.
- `name: 'DashboardFormsWizard'` → `defineOptions({ name: 'Wizard' })`.
- PENDING: whole screen is unvalidated until P9.10/P9.11; step gating depends on it, so the
  Next button currently only advances on filled fields.

---

## P8.25 — views/dashboard/component/Typography.vue

Status: done

- Every entry key is the rendered class, so the map doubles as the v2 → v4 typography table:
  display-4/3/2/1 → text-h1/h2/h3/h4, headline → text-h5, `title` → `text-h6 text-uppercase`,
  `text--disabled` → `text-disabled`, `*--text` → `text-*`.
- `text-danger` kept — `danger` was never a v2 theme colour either, so the class is dead in both.
  Fixing it to `text-error` would change the label. P10.
- FIX: the template tested `i === 'quote'`, but the key is `blockquote` — the quote branch, its
  paragraph wrapper and the "Kanye West, Musician" attribution were all unreachable. Retargeted
  to `blockquote`.
- `<component :is="t[2]">` kept as-is; `typography` typed `Record<string, [string, string, string]>`.
- Empty-string key left empty — it is the unstyled paragraph case.
- `lang="scss"`, unscoped, `.tim-note` preserved.
- No `name` in the original, so no `defineOptions`.

---

## vue-world-map replacement

**Deviation:** `vue-world-map` is dropped. Replaced with `@svg-maps/world` (path data only) and a
local `src/components/core/WorldMap.vue` that fills each location from a `countryData` prop,
interpolating `lowColor` → `highColor`.
**Reason:** The screen uses a static choropleth — ISO-2 keys in, two fill colours, no
interaction. `vue-world-map` is a Vue 2 plugin; the alternatives (`jsvectormap`, `svgmap`,
`vue-svg-map`) are all interactive libraries whose API and styling we would mostly discard.
Data-only dependency keeps the Vue version out of it.
**Status:** decided — P9.4. Component lands at P9.5. `@svg-maps/world` is CC-BY-4.0: attribution
line required in the component header.
**Date:** 2026-10-28

---

## P9.5 — Dashboard.vue map widget

Status: done

- `v-world-map` → `<WorldMap>` from `src/components/core/WorldMap.vue`, driven by
  `@svg-maps/world` (data-only, CC-BY-4.0, attributed in the component header).
- `src/types/svg-maps-world.d.ts` shims the untyped package — same pattern as `chartist.d.ts`.
- Fill is a straight `lowColor` → `highColor` interpolation against the dataset peak; countries
  absent from `countryData` keep `lowColor`. `<title>` per path gives hover labels for free.
- Supersedes the P8.6 note: `v-world-map` is no longer unresolved.

## P9.6 — vue-world-map plugin file

Status: done, no file

- The old `src/plugins/vue-world-map.js` (a `Vue.component('v-world-map', …)` call) was never
  ported, so there is nothing to replace. `WorldMap.vue` is imported directly where used.

---

## Skipped files

`src/views/pages/Rtl.vue`, `Timeline.vue`, `UserProfile.vue` — unrouted, byte-identical
duplicates of the `views/dashboard/pages/` versions (same git SHAs).
**Date:** 2026-10-26
