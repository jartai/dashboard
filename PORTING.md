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

**Deviation:** `require(\`@/assets/${src}\`)`→ static imports in a lookup map.
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

## Skipped files

`src/views/pages/Rtl.vue`, `Timeline.vue`, `UserProfile.vue` — unrouted, byte-identical
duplicates of the `views/dashboard/pages/` versions (same git SHAs).
**Date:** 2026-10-26
