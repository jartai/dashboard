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

## P10.2 — retarget shared skins, wizard slider, timeline and calendar

### Wizard tab slider

The slider was invisible for five stacked reasons, each found by reading the library rather than the page:

- `hideSlider: Boolean` has no default, so `VTab` renders the slider unconditionally — the per-tab `:hide-slider="false"` is redundant and kept only as documentation.
- `v-tab` had no `value`, so `useGroupItem`'s `selectedClass` never fired and the tab was never `--selected`. `:value="i"` added; this also makes `v-model` and `v-tabs-window` agree.
- `VTab.css` sets `background: currentColor`; with `color="white"` on the tabs the bar was white on white. The rule now sets `background: rgb(var(--v-theme-success))`.
- `bottom: -2px` at the theme's 2px height put the bar entirely outside the tab, where it clipped. Settled on `bottom: 0`.
- `slider-size` is inert — `VTabs` declares `sliderSize`, `VTab` never reads it. The 50px moved to CSS with `left: calc(50% - 25px); right: auto`.

### `.v-select-list.v-card`

Fully dead. `VSelect` applies `v-select__content` to its menu content (VSelect.js:503), so the rule retargets there and keeps `margin: 0` and the squared top corners.

### `.v-picker.v-card`

Dead. The `VDatePicker` root is built from `v-date-picker` only — no `v-picker`, no `v-card`. Block deleted.

### Field variant and state selectors

- `.v-input--is-disabled` no longer exists; disabled moved to `.v-field--disabled`. The `:not()` cannot stay on `.v-input` and moved to `.v-field`.
- `input, textarea` became `.v-field__input`, the class the element actually carries.
- `v-field--variant-solo` is composed onto the field (VField.js:223), not the root, so the box-shadow selector moved onto `.v-field`.
- `solo-flat` was dropped in v3, so the `:not(.v-field--variant-solo-flat)` guard was permanently true and came off.
- `.v-select__selections` → `.v-select__selection`.

### Timeline

- `v-timeline-item__inner-dot` → `v-timeline-divider__inner-dot`; the divider is its own component and the dot sits under `.v-timeline-divider`.
- The line is `.v-timeline-divider:before`, not a `:before` on `.v-timeline`.
- `backgroundColorClasses` emits `bg-*`, so the six state pairs key off `&.bg-error` and siblings, not `&.error`.
- **Screen fix:** `Timeline.vue` bound `:color`, but `VTimelineItem` has no `color` prop — the divider owns `dotColor` (VTimelineDivider.js:37). Binding changed to `:dot-color`. `iconColor` colours the icon; `dotColor` colours the dot.

### Calendar

- `#calendar` rules merged into the `#calendar` block already in `Calendar.vue`; two of them were already there.
- `.v-event { &.__primary }` does not exist — `eventColor` goes through `getColorProps` → `computeColor`, which emits both a `bg-*` class and an inline style. The five pairs key off `&.bg-primary` and siblings.
- `event-color="primary"` is a single fixed value, so only `bg-primary` is reachable; the other four are kept for future per-event colours.
- The broad `.v-theme--light` wrapper at 1438-1495 was flattened; `#calendar` scopes the calendar rules tighter, and `#pages`, `#app`, `.v-ripple__container` and `.v-btn--router` survived at top level.
- The empty `.v-toolbar__content > .v-btn` rule was dropped — it had no declarations.

### Plan change

P10.4 no longer deletes `legacy.scss`. It renames to `src/styles/app.scss`, because shared skins (select content, field variants, counters, ripple, router buttons) have no single owning component and need a permanent home.

## P10.2 — tail selectors, field icons, prefix sweep, rename

Status: done

### Selector retargets

- `.v-size--default` / `-large` / `-small` → `.v-btn--size-*`, 9 sites. `useSize`
  (`composables/size.ts`) builds `--size-*` from `predefinedSizes`; the v2 names matched
  nothing. They had also been suppressing three padding rules, so the retarget moved button
  padding app-wide — toolbar buttons `10px 15px`, other sheet buttons `12px 30px` and
  `18px 36px` when large, everything else `0 30px`, all from existing specificity.
- `:not(.v-btn--icon):not(.v-btn--icon)` → one `:not()`, 8 sites. The pair never was a
  deliberate specificity bump.
- `.v-btn--router` → `a.v-btn`. **Deviation:** v4 emits no router class — `useLink` returns
  only `href` / `aria-*` / `tabindex`, and `VBtn` renders a bare `<a>`. The rule was dead.
  `a.v-btn` is the structural equivalent, but it also catches plain `href` buttons, which
  v2 did not.
- `.v-content` → `.v-main`. `components/core/View.vue` renders `<v-main>`.
- `.error-page h1.title` → `.error-page h1`. The h1 carries `text-h6 font-weight-black` and
  no `title`, so the rule never matched — it was rendering at `text-h6` size. Merged into
  the rule already in `Error.vue`; `12rem` kept as the equivalent of 192px and the
  `!important`s dropped, `.error-page h1` being `0,1,1` against `0,1,0`.
- Deleted `.v-btn.v-btn--size-default` / `-large { padding: 10px 15px }`. Same specificity as
  the later `padding: 0 30px` block and earlier in the file, so it never won once retargeted.

### Field icons

- `prepend-icon` → `prepend-inner-icon`, 3 sites each in Register and Login. v2 drew
  `prepend-icon` inside the control; v4 split it and the old prop now targets
  `v-input__prepend`, outside the field. The icons were orphaned in the margin.

### Prefix sweep

- Removed every `-webkit-box-shadow` (each duplicated the `box-shadow` directly beneath), the
  single `-webkit-transition` and the single `-ms-flex-item-align`. `display:
  -webkit-inline-box` → `inline-flex`, the only prefix with no unprefixed twin.

### Rename

- `src/styles/legacy.scss` → `src/styles/app.scss`, `main.ts` import updated. Once the file
  holds only cross-cutting skins with no owning component, "legacy" stops describing it.

### Process

- Two `sed` passes no-opped and exited 0: the `.error-page h1.title` selector, then the entire
  P10.1 retarget block on a later step. Both surfaced in the step's own verification `grep`.
  Replayed whole rather than hand-patched, since a partial replay was what produced the second
  failure.
