## vue-world-map replacement

**Deviation:** `vue-world-map` is dropped. Replaced with `@svg-maps/world` (path data only) and a local `src/components/core/WorldMap.vue` that fills each location from a `countryData` prop, interpolating `lowColor` → `highColor`.
**Reason:** The screen uses a static choropleth — ISO-2 keys in, two fill colours, no interaction. `vue-world-map` is a Vue 2 plugin; the alternatives (`jsvectormap`, `svgmap`, `vue-svg-map`) are all interactive libraries whose API and styling we would mostly discard.
Data-only dependency keeps the Vue version out of it.
**Status:** decided — P9.4. Component lands at P9.5. `@svg-maps/world` is CC-BY-4.0: attribution line required in the component header.
**Date:** 2026-10-28

---

## P9.5 — Dashboard.vue map widget

Status: done

- `v-world-map` → `<WorldMap>` from `src/components/core/WorldMap.vue`, driven by `@svg-maps/world` (data-only, CC-BY-4.0, attributed in the component header).
- `src/types/svg-maps-world.d.ts` shims the untyped package — same pattern as `chartist.d.ts`.
- Fill is a straight `lowColor` → `highColor` interpolation against the dataset peak; countries absent from `countryData` keep `lowColor`. `<title>` per path gives hover labels for free.
- Supersedes the P8.6 note: `v-world-map` is no longer unresolved.

## P9.6 — vue-world-map plugin file

Status: done, no file

- The old `src/plugins/vue-world-map.js` (a `Vue.component('v-world-map', …)` call) was never ported, so there is nothing to replace. `WorldMap.vue` is imported directly where used.

---

## P9.7 — src/locales/ar.json

Status: done

- Copied verbatim from the original. Key set and order match `en.json` exactly (42 keys), so nothing had to be added or dropped.
- Re-indented 4 → 2 spaces to match `en.json`; content untouched.
- Registered in `plugins/i18n.ts` alongside `en`. Nothing switches to it yet — that is P9.8 (`Rtl.vue` sets the locale, the adapter makes Vuetify follow).
- `rtl` in `plugins/vuetify.ts` already maps `ar: true`, so direction flips as soon as the locale is set.

---

## P9.8 — Vuetify locale adapter

Status: done

- Added `locale.adapter: createVueI18nAdapter({ i18n, useI18n })` from `vuetify/locale`. Vuetify now reads its locale from the vue-i18n instance instead of the dropped `lang.t` bridge.
- `locale.rtl` extended from `ar` to the rest of the RTL locales Vuetify ships: dv, fa, he, ku, ps, sd, ug, ur, yi. Direction stays driven by this map — `useRtl().isRtl` is read-only.
- Vuetify's _own_ strings (pagination labels, data-table "no data", etc.) still resolve in English: `ar.json` carries no `$vuetify` subtree. Added at P10.0k.
- Adapter import is `vuetify/locale/adapters/vue-i18n`, not the `vuetify/locale` barrel — the barrel only re-exports `createVuetifyAdapter`, and the failure is a runtime SyntaxError rather than a build error.

---

## P9.9 — rtl.vue verification

Status: done

- `useLocale().current = 'ar'` mirrors correctly once the P9.8 adapter is in place — direction, logical utilities and the drawer side all flip, and `onBeforeUnmount` restores `'en'`.
- No `<v-locale-provider rtl>` fallback was needed.
- Resolves the P8.12 pending ("RTL direction unverified until tested").
- Note: the two assignments in `onMounted` are now the same underlying value — `current` delegates to the vue-i18n locale. Left as-is; the duplication is harmless and makes the intent readable.

---

## Validation approach — decision

**Deviation:** vee-validate is not adopted at all. `v-validate` / `data-vv-*` are replaced with Vuetify `rules` arrays and `v-form` refs; both temporary shims (`errors.collect`, `validationErrors`) are deleted.
**Reason:** v4 is a rewrite of v2, so the fields are rewritten either way. The screens need six trivial validators that `rules` expresses in a line each, and `v-form` already provides `validate()`/`reset()`/error display. vee-validate would add a dependency, its own error plumbing and a provider layer for capabilities the demo never uses.
**Status:** decided — P9.10. Rebuilds land at P9.11 (ValidationForms) and P9.12 (Wizard).
**Date:** 2026-10-28

---

## P9.11 — ValidationForms.vue rebuilt on Vuetify rules

Status: done

- `v-validate` directives, `data-vv-scope` and `data-vv-name` all removed. Each field carries ` `:rules`array instead; the`errors.collect`shim and`validationErrors` map are gone.
- Rules: `requiredRule`, `emailRule`, `numericRule`, `urlRule`, and `minLengthRule`/`maxLengthRule` factories. Local `Rule` type (`(value: unknown) => boolean | string`) — no Vuetify type import, and structurally assignable to the `rules` prop.
- The outer `<form action="">` wrappers were dropped: `v-form` already renders a `<form>`, so the markup was nesting forms. `@submit.prevent` moved onto `v-form`, which also means `type="submit"` on the buttons now actually submits.
- `validateForm(form)` takes the form ref and awaits `validate()`, alerting only when `valid`. Ref typed with a local `ValidatableForm` interface rather than importing `VForm`.
- Field behaviour note: the original's `min:5` / `max:5` were vee-validate _value_ bounds renamed in the UI as "Min/Max Length"; they are implemented here as length checks, matching the labels.

---

## P9.12 — Wizard.vue rebuilt on Vuetify rules

Status: done

- The three `<form action="" data-vv-scope>` wrappers became `v-form` with `aboutForm` / `addressForm` refs. `v-validate`, `data-vv-*`, the `validationErrors` map and the `scope` computed are all gone.
- The account step has no inputs, so `validateCurrentStep()` short-circuits on `account.length > 0` and the hidden `<input v-validate="'required'">` is dropped.
- `next()` async and awaits validation before advancing or finishing.
- `v-for="(account, i) in accounts"` renamed its binding to `item` — it no longer shadows the `account` model ref, which is now read from script instead of the template.
- Rules: one shared `requiredRule` per field; `validate-on="blur"` retained so errors appear on blur rather than on every keystroke.
- Email keeps `required` only, matching the original's `v-validate="'required'"` — it was never format-validated.
- `requiredRule` is duplicated between this file and ValidationForms.vue rather than extracted; two call sites, one line each. Revisit if a third appears.

---

## P9.13 — Phase 9 closed

Status: done

- `v-validate` / `data-vv-*` count in `src/`: 0. `v-world-map` / `vue-world-map`: 0.
- Both temporary shims (`errors.collect`, `validationErrors`) deleted with their screens' rewrites.
- Phase 9 outcomes: chartist kept, world map replaced with `@svg-maps/world`, vee-validate dropped for Vuetify `rules`, Arabic locale ported, i18n adapter wired, Rtl verified.
- `v-validate` / `data-vv-*` count in `src/`: 0. `v-world-map` / `vue-world-map`: 1 — the `.vue-world-map` rule at `legacy.scss:1190`, now dead. Its `max-height: 350px` moved into `WorldMap.vue`; its `.land` stroke is covered by the `strokeColor` default. Rule left for P10.4 to delete.
- Still open into Phase 10: `v-calendar` has nothing registering it (P10.0j).

---

