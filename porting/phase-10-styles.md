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

## P10.0g — scoped vs unscoped

**Deviation:** Style blocks stay **unscoped**, namespaced by a per-screen root selector.
No `scoped`, no `:deep()`.
**Reason:** Almost every rule in `legacy.scss` targets a child component's internals
(`.v-list-item__content`, `.v-tabs__slider`, `.ct-series-a .ct-line`,
`.v-calendar-weekly__day`). Scoping appends `[data-v-hash]` to the last compound
selector, which only matches the screen's own elements, so each rule would need
`:deep()` — identical output, more syntax, and a boundary that breaks on slot children.
The original relied on global cascade, and every screen already carries a stable id
(`#pages`, `#calendar`, `#dashboard`, `#user-profile`, `#alerts`, `#settings`,
`#core-navigation-drawer`).
**Status:** decided — P10.0g. Applies to every extraction in P10.1.
**Date:** 2026-10-29

---

## P10.1 — extract screen styles from legacy

`legacy.scss` lost 245 lines. Every block was verified against the component that renders it before deletion; nothing was cut on the assumption that it looked dead.

### Deleted — verified duplicates

| Legacy lines | Block | Verified against |
| --- | --- | --- |
| 28-33 | `.v-card--material__avatar` | `MaterialCard.vue` `&__avatar` |
| 34-41 | `.v-card--material__heading` | `MaterialCard.vue` `&__heading` |
| 42-46 | `.v-card--material--hover-reveal:hover` | `MaterialCard.vue` hover rule |
| 47-81 | `.v-card--material-chart` | `MaterialChartCard.vue` block |
| 97-135 | `.v-card--material-stats` | `MaterialStatsCard.vue` block; legacy only added `-webkit-`/`-ms-` prefixes |
| 136-153 | `.v-tabs--pill` | `MaterialTabs.vue` block |
| 154-164 | `.v-card--testimony` (first of two) | `MaterialTestimony.vue` block, byte-identical |
| 1030-1033 | `.v-card--material-chart .v-card--material__heading .ct-label` | `MaterialChartCard.vue` nested `.ct-label` |
| 1190-1197 | `.vue-world-map` | dead — `WorldMap.vue` renders and styles `.world-map` |
| 913-925 | `.v-card--material .v-image` | merged into `MaterialCard.vue` |

### Deleted — after merge

| Legacy lines | Block | Merged into |
| --- | --- | --- |
| 1077-1096 | `.v-card--wizard` (first of two) | `MaterialWizard.vue` |
| 1098-1128 | `.v-card--plan` | `PlanCard.vue` |
| 1130-1149 | `.v-card--testimony` (second of two) | `MaterialTestimony.vue` |
| 1822-1846 | `.v-card--wizard` (second of two) | `MaterialWizard.vue` |

### Resolutions

**The double-dash hover class was already dead.** Legacy targeted `.v-card--material--hover-reveal`; the template applies `v-card--material-hover-reveal`, single dash.

**`.v-card__actions` was not dead.** Live rule on a v2 class name; became `.v-card-actions`.

**`.v-card--testimony` was split across two blocks.** 154-164 held padding, margin and the avatar offset; 1130-1149 held the text colour, typography and an avatar `left` override. Merged into one. `left` was declared in both — `calc(50% - 64px)` and `calc(50% - 50px)` — and the survivor kept `-50px`, since the component renders a 100px avatar.

**`.v-card--account` does not exist.** The wizard is styled entirely through `.v-card--wizard`, which appeared twice.

**`text-body-medium` / `text-display-medium` retargeted** to `text-body-2` / `text-h3`. The markup already carries those, so the rules moved rather than the templates gaining classes.

**`.v-slide-group__wrapper` does not exist in v4.** Both rules moved to `.v-slide-group__container`, and `contain: none` replaced the component's `contain: initial` — `none` is the correct value.

**`:before` overlays became `.v-btn__overlay` in v3.** Tabs inherit it from `VBtn`; there is no tab-specific overlay class. All three opacity rules retargeted.

**`slider-size` is inert.** `VTabs` declares `sliderSize` but `VTab` never reads it, so the 50px moved into CSS with `left: calc(50% - 25px); right: auto`.

**`hide-slider` defaults to `false`.** `hideSlider: Boolean` has no default, so the slider always renders; the per-tab attribute is redundant and kept only as documentation.

**`currentColor` resolved to `text-white`.** `VTab.css` sets the slider to `background: currentColor`; with `color="white"` on the tabs the bar was white on white. The rule now sets `background: rgb(var(--v-theme-success))`.

**`bottom: -2px` clipped at 2px height.** At 2px the bar sat entirely outside the tab and was clipped; it only showed while debugging because `height: 6px` left 4px inside. Settled on `bottom: 0`.

**`v-tab` needed `:value`.** The `--selected` class comes from `useGroupItem`'s `selectedClass` and fires only on a value match. Without it no tab could be selected and the slider stayed at `opacity: 0`.

**`.v-image` / `.v-image__image` retargeted** to `.v-img` / `.v-img__img`; `-webkit-box-shadow` dropped.

**`sed` ran twice on the first attempt.** 913-925 was applied to an already-shifted file, orphaning a declaration at 913. Recovered by discarding `legacy.scss` and replaying the whole sequence once, verified by `git diff --stat` at 243 deletions before the final cut.

### Pending

- **Wizard step-one fields overlap the avatar** — the `v-row`/`v-col` pair under the picture collapses to one column. Markup, not CSS. `Status: pending — P10.1`
- **`availableSteps` arrives as `[0]`** — PREVIOUS and NEXT both disabled, only ABOUT reachable. `Status: pending — P10.1`
- **User Profile nav entries are stubs** — `href: ''` / `to: ''` on all three `profileNav` children while the route exists at `/pages/user`; first child also uses `href` where the other two use `to`. `Status: pending — P11.2`
