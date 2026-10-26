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

**Deviation:** `app.scss` is not being ported.
**Reason:** 36KB of MD2-era patchwork; Vuetify 4's MD3 defaults cover most of it.
**Status:** pending — P10
**Date:** —

**Deviation:** Fonts are self-hosted via `@fontsource/roboto` instead of a CDN.
**Reason:** No external request, no layout shift, works offline.
**Date:** 2026-10-26

**Deviation:** `vee-validate` 2 is not being ported as-is.
**Reason:** v4 is a complete API rewrite.
**Status:** pending — decision at P9.12
**Date:** —

**Deviation:** `chartist` / `vue-chartist` and `vue-world-map` are being replaced.
**Reason:** Both are Vue 2-era packages.
**Status:** pending — decision at P9.1 / P9.4
**Date:** —

---

## src/plugins/vuetify.ts

**Deviation:** `accent` theme colour removed.
**Reason:** Dropped as a theme key in Vuetify 3+. Inert in v4.
**Date:** 2026-10-26

---

## src/plugins/vuetify.js

**Deviation:** `lang.t` i18n bridge not carried over.
**Reason:** Vuetify 4 uses a locale adapter instead.
**Status:** pending — P9.7
**Date:** —

**Deviation:** Drawer `:dark` prop replaced with `theme="dark"`.
**Reason:** `dark` prop removed in Vuetify 3+.
**Status:** pending — P5.4
**Date:** —

---

## src/views/dashboard/components/core/Drawer.vue

**Deviation:** Nav item `register` pointed to route `pricing`.
**Reason:** Bug in the original. Corrected to `register`.
**Date:** 2026-10-26

---

## Skipped files

`src/views/pages/Rtl.vue`, `Timeline.vue`, `UserProfile.vue` — unrouted, byte-identical
duplicates of the `views/dashboard/pages/` versions (same git SHAs).
**Date:** 2026-10-26
