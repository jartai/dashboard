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

**Deviation:** `app.scss` is not ported verbatim; it is rebuilt in two passes
(global primitives after Phase 6, screen-specific at Phase 10).
**Reason:** 36KB of MD2-era patchwork; Vuetify 4's MD3 defaults cover much of it.
**Status:** pending — P6b / P10
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
**Reason:** `AppBar.vue` and `Drawer.vue` both call `$t()`, which requires vue-i18n.
`en.json` was ported early so nav labels render as text, not raw keys.
**Reason for `globalInjection: true`:** keeps every original `$t()` call working
unchanged, rather than rewriting all of them to `t()`.
**Status:** `ar.json` and RTL still deferred to P9.7–P9.8
**Date:** 2026-10-26

## Global

**Deviation:** Vuetify 4's lowered breakpoints are adopted rather than restoring v3
thresholds (md 960→840, lg 1280→1145, xl 1920→1545, xxl 2560→2138).
**Reason:** Keeps JS and CSS thresholds consistent without a partial Sass override.
Responsive behaviour therefore shifts a few dozen pixels from the original.
**Status:** revisit at P10 if fidelity matters
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

---

## src/plugins/vuetify.js

**Deviation:** `lang.t` i18n bridge not carried over.
**Reason:** Vuetify 4 uses a locale adapter instead.
**Status:** pending — P9.8
**Date:** —

**Deviation:** Drawer `:dark` prop replaced with `theme="dark"`.
**Reason:** `dark` prop removed in Vuetify 3+.
**Status:** pending — P5.5
**Date:** —

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

**Deviation:** Vuex mutations (`SET_DRAWER`, `SET_BAR_IMAGE`, `SET_SCRIM`) replaced
with plain Pinia functions.
**Reason:** Pinia has no mutations/actions split.
**Date:** 2026-10-26

**Deviation:** `barImage` still points at an external creative-tim URL.
**Reason:** Local asset deferred to P11.1.
**Status:** pending — P11.1
**Date:** —

---

## src/config/navigation.ts

**Deviation:** Nav tree moved out of `Drawer.vue` into `src/config/navigation.ts`.
**Reason:** Separates data from presentation; `to` paths pre-resolved to absolute
(original concatenated a `group` prefix in `ItemGroup.vue`).
**Date:** 2026-10-26

**Deviation:** Nav item `register` pointed to route `pricing`.
**Reason:** Bug in the original. Corrected to `/pages/register`.
**Date:** 2026-10-26

---

## components/core/Footer.vue

**Deviation:** `lang="sass"` converted to plain CSS; Vuetify 2 Sass path removed.
**Reason:** Avoids adding a Sass dependency for one rule block.
**Date:** 2026-10-26

**Deviation:** `no-gutters` mapped to `gap="0"`.
**Reason:** Direct v4 equivalent; v4's grid is gap-based.
**Date:** 2026-10-26

**Deviation:** `v-text` on `v-icon` replaced with the `icon` prop.
**Reason:** Slot → prop is the v3+ idiom.
**Date:** 2026-10-26

**Note:** Footer links render flush until P6b. Spacing comes from
`.v-footer a { padding: 15px 18px 15px 16px }` in the global `app.scss`.
**Status:** resolves at P6b

**Note:** Copyright div uses `text-body-large` (was `body-1`). The `app.scss` pass
must target the new class name.
**Status:** pending — P6b

---

## components/core/AppBarItem.vue

**Deviation:** Extracted from an inline `render(h)` component into an SFC.
**Reason:** `scopedSlots` → `slots` in Vue 3; an SFC is clearer than a render function.
**Date:** 2026-10-26

**Deviation:** Hover slot prop `hover` → `isHovering`.
**Reason:** Renamed in Vuetify 3+.
**Date:** 2026-10-26

**Deviation:** `black--text` → `text-black`; `white--text secondary elevation-12` →
`text-white bg-secondary elevation-4`.
**Reason:** Colour utility rename; v4 ships only elevation 0–5, so 12 → 4.
**Date:** 2026-10-26

**Deviation:** `title` passed as a prop instead of a `v-list-item-title` child.
**Reason:** `v-text` on a component triggers `vue/no-v-text-v-html-on-component`.
**Date:** 2026-10-26

---

## components/core/AppBar.vue

**Deviation:** `app` prop removed.
**Reason:** Replaced by `<v-layout>` in Vuetify 3+.
**Date:** 2026-10-26

**Deviation:** `$vuetify.breakpoint.smAndDown` / `.mdAndUP` → `useDisplay()`.
**Reason:** Global breakpoint object removed in v3+.
**Date:** 2026-10-26

**Deviation:** `value` prop + `$emit('input')` removed; toggles write to the Pinia store.
**Reason:** `expandOnHover` now lives in the store, so the v-model round-trip is
unnecessary. Vue 3 also renamed the `input` event to `update:modelValue`.
**Date:** 2026-10-26

**Deviation:** `fab` → `icon`; `text` → `variant="text"`.
**Reason:** `fab` removed and variant props unified in v3+.
**Date:** 2026-10-26

**Deviation:** `v-slot:activator="{ attrs, on }"` + `v-bind="attrs"` + `v-on="on"`
→ `#activator="{ props }"` + `v-bind="props"`.
**Reason:** Activator slot contract changed in v3+.
**Date:** 2026-10-26

**Deviation:** `caption` → `text-body-small`.
**Reason:** MD2 → MD3 typography.
**Date:** 2026-10-26

**Deviation:** `hidden-sm-and-down` → `d-none d-md-block`.
**Reason:** `hidden-*` classes replaced by `d-*` in v3+.
**Date:** 2026-10-26

**Deviation:** `v-text="route.name"` on `v-toolbar-title` → interpolation.
**Reason:** `vue/no-v-text-v-html-on-component`.
**Date:** 2026-10-26

**Status:** pending — verify at P5.9

- `append-outer` → `append-inner` (fallback: `append`)
- `transition="scale-transition"` may not exist in v4
- `offset-y` dropped entirely (v3 uses `offset`)
- `:tile="false"` on `v-list` dropped

---

## Skipped files

`src/views/pages/Rtl.vue`, `Timeline.vue`, `UserProfile.vue` — unrouted, byte-identical
duplicates of the `views/dashboard/pages/` versions (same git SHAs).
**Date:** 2026-10-26

---

## P10 prep — app.scss selector renames

`app.scss` needs a mechanical selector pass before any other styling work. Mapping:

| app.scss selector                                                  | Vuetify 4                            |
| ------------------------------------------------------------------ | ------------------------------------ |
| `.v-content__wrap`                                                 | `.v-main__wrap`                      |
| `.theme--light` / `.theme--dark`                                   | `.v-theme--light` / `.v-theme--dark` |
| `.v-application--is-ltr` / `--is-rtl`                              | `.v-locale--is-ltr` / `--is-rtl`     |
| `.v-btn--flat` / `--text` / `--outlined` / `--contained`           | `variant` classes                    |
| `.v-input__slot`                                                   | `.v-field`                           |
| `.v-text-field--solo`                                              | `.v-field--variant-solo`             |
| `.v-expansion-panel-header`                                        | `-title`                             |
| `.v-list-item__content` / `__title` / `__subtitle`                 | flat `v-list-item`                   |
| `.v-navigation-drawer--mini-variant`                               | `--rail`                             |
| `.v-snack__content`                                                | `.v-snackbar__content`               |
| `.body-1`, `.display-2`, `.headline`, `.subtitle-1`, `.caption`    | MD3 classes                          |
| `.v-tabs-bar`, `.v-calendar-weekly`, `.v-picker`, `.v-select-list` | restructured                         |

ID-based rules also present, targeting `#app`, `#pages`, `#login`, `#register`,
`#settings`, `.error-page`. These map to screen components — handle in P10.

Other notable global rules to carry over: `.theme--light.v-content { background-color: #eee }`,
`.v-footer` border-top, `.v-card` border-radius and shadows.

## components/core/Settings.vue

**Deviation:** Theme mutation uses `theme.themes.value[name]!` with a non-null assertion.
**Reason:** `noUncheckedIndexedAccess` makes computed-key record access `| undefined`;
both themes are defined in `plugins/vuetify.ts` so the key always exists.
**Date:** 2026-10-26
