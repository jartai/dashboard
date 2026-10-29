## P10.0 — parked legacy.scss selectors

Status: done

- `.v-tabs-bar` → `.v-slide-group__container`, 4 occurrences via sed. v3+ has no tabs bar; the slide-group container is the element that carries height/padding, and `MaterialWizard.vue` itself already styles it under that name.
- `.v-list-item__content` — KEPT. The component was removed, not the class; `VListItem` still renders it as the slot wrapper, so the chains resolve. Supersedes the P6b assumption.
- `.v-picker.v-card` — KEPT. Still the `VDatePicker` root.
- `.v-select-list.v-card` — KEPT, unresolved. Deferred to P10.3 for DOM verification against v4's overlay-based select menu.
- `.v-calendar-weekly__*` — KEPT, blocked on P10.0j (nothing registers `v-calendar`).
- Also noted, not in the original park list: `.v-card__actions` (no hyphen) appears in `.v-card--wizard` and is dead — `.v-card-actions` is the v3 class. P10.1.

---

## P10.0b — Drawer image gradient restored

Status: done

- The dropped `#image` slot is replaced by a `::after` pseudo-element on
  `.v-navigation-drawer__image` carrying `linear-gradient(to bottom, var(--drawer-bar-color))`.
  The original passed the same string to `v-img`'s `gradient` prop.
- `barColor` reaches CSS through `:style` on the drawer, since it is a two-stop
  gradient fragment (`rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)`) and not a colour.
- `.v-navigation-drawer__image` is `z-index: -1` in v4, so the overlay paints above
  the photo and below the list without touching the content stacking order.
- Restoring the slot itself is still not viable — it renders inside a
  `VDefaultsProvider` and threw at P5.6.
- If `ui.barImage` is empty the image element is absent and no gradient paints;
  same failure mode as the original.

---

## P10.0k — Vuetify locale strings mounted

Status: done

- `plugins/i18n.ts` now spreads `en` / `ar` from `vuetify/locale` under a
  `$vuetify` key per locale. The P9.8 adapter resolves Vuetify's strings through
  vue-i18n, so without this every badge rendered the literal `$vuetify.badge`
  and logged a missing-key warning six times per mount.
- Uses the shipped translations rather than copying keys into the JSON files, so
  a Vuetify upgrade brings new keys automatically and no strings are hand-kept.
- `$vuetify` is spread after the JSON import so it cannot be shadowed.
- Closes the P9.8 "optional follow-up" note.

---

## P10.0e — auth backdrop

Status: done

- Root cause: every raster in `src/assets/` is a webpack module stub, not an image.
  `login.jpg` is 68 bytes of `module.exports = __webpack_public_path__ + "img/login...jpg";`,
  so `:src` received JS source text and the `<img>` was broken. `logo.svg` is the
  only real asset.
- Secondary: `VImg` renders the `v-responsive` class on its own root, so
  `.page-bg .v-responsive` never matched, and `.v-responsive__content` only exists
  when a default slot is passed — this `v-img` has none. `.v-img__img` and
  `.v-img__gradient` are `absolute` with `top/left` but no dimensions, so both
  collapsed to zero. Both selectors replaced by sizing those two layers to 100%.
- Added `cover` (`object-fit: cover`), `overflow: hidden`, and `aria-hidden` + empty
  `alt` since the backdrop is decorative.
- Source is now `picsum.photos` with a per-route seed — deterministic per page and
  independent of the dead host. `demos.creative-time.com` fails TLS and
  `demos.creative-tim.com/material-dashboard-pro/...` 404s, so the remote URLs used
  elsewhere in the app are suspect too.
- All of this is interim; localising real assets stays at P11.1.

---

## P10.0f — non-v4 class triage

Status: done

- `card-title` → `text-h6`. Never a Vuetify class in v2 or v4; app.scss set it to
  1.125rem, `text-h6` is 1rem — nearest surviving step. Five sites: three headings
  in Dashboard, one in UserProfile, one in MaterialCard.
- `body-3` → `text-body-2`. Also app.scss-only (0.875rem, same as text-body-2).
  One site in MaterialStatsCard.
- `elevation-12` → `elevation-5`. v4 generates only `elevation-0`…`elevation-5`
  (`styles/utilities/_elevation.scss`), and `$shadow-key` carries no key above 5,
  so anything higher is a silent no-op rather than a broken value. One site, the
  MaterialCard avatar.
- `text-danger` → `text-error`. `danger` was never a theme colour; the Typography
  row's label is now "Error Text" so the page documents the class it shows.
- `purple-input` and `v-card-profile` were initially left in place; both turned out
  to be dead in the original too and were removed at P10.0h.

---

## P10.0h — purple-input / v-card-profile

Status: done

- Both classes removed. Verified against the original `src/assets/css/app.scss`
  _and_ the compiled `app.css`: no rule for `.purple-input`, none for
  `.v-card-profile`. They were markup-only hooks with no styling in either build.
- Nine `purple-input` occurrences (eight text fields plus the About Me textarea)
  and one `v-card-profile` on the profile card.
- Nothing replaces them — the fields render with stock v4 input styling, which is
  what the original did once the dead classes had no rule behind them.
- Correction to P10.0f: that step deferred these expecting styling to port.
- Still open on this screen: the `avatar` URL points at
  `demos.creative-tim.com/vue-material-dashboard/...`, another host that no longer
  serves the demo. P11.1.

---

## P10.0i — duplicate id="coloured-line"

Status: done

- Two `BaseMaterialCard`s carried the same id and one `#coloured-line` rule served
  both, so the id was doing a class's job. Converted to `class="... coloured-line"`
  and the selector to `.coloured-line`.
- Both cards keep `px-4 py-3`; the class is appended to that attribute rather than
  added as a second `class` attribute on the same element.
- `#multiple-bar` and `#pie` stay ids — one instance each.
- Style block remains unscoped so the rule still reaches chartist's generated SVG.

---

## P10.0j — v-calendar registration

Status: done, no code change

- `VCalendar` is a core v4 component — it is absent from `labs/index.ts` entirely.
  `vite.config.ts` runs `vuetify({ autoImport: true })`, so `v-calendar` resolves
  without an import; the "nothing registers it" note was written against v3 labs.
- `VCalendarWeekly` still renders `v-calendar-weekly__head-weekday`,
  `v-calendar-weekly__week` and `v-calendar-weekly__day`, so Calendar.vue's style
  block and legacy.scss's two rules apply unchanged.
- `next` / `prev` are returned from setup and re-exported via `forwardRefs`, so the
  toolbar chevrons still drive the view. `modelValue`, `type`, `now` and `eventColor`
  all survive as props.
- Closes the P8.9 pending and the P10.0 park for `.v-calendar-weekly__*`.
- No explicit import added; auto-import covers core components.

---
