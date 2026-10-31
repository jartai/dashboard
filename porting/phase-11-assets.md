## P11.1 — localise every remote image

Status: done

- The whole tree pointed at two dead hosts. `demos.creative-tim.com/material-dashboard-pro/assets/img/`
  held the sidebar set, faces, products and dialog cards; `demos.creative-tim.com/vue-material-dashboard-pro/img/`
  held the dashboard flags and cards. The second path shape is why an early `grep 'assets/'` missed it —
  filter on the host, not a path fragment.
- Twelve images fetched into `src/assets/` and imported: sidebar-1..4, avatar, card-profile1-square,
  product-1..3, card-1..3, flag-us/de/au/gb/ro/br. Placeholders are picsum seeds except the flags,
  which come from `flagcdn.com/w40` — a stand-in flag reads wrong in a country table.
- `barImage` defaults to `sidebar-1.jpg` and `sidebar.jpg` was deleted: the settings panel has always
  offered `sidebar-1..4`, so a fifth file meant no thumbnail could ever show as selected.
- `components/auth/View.vue` now maps `route.name` to a local backdrop through a `Record<string, string>`
  with `?? loginBg`, which also satisfies `noUncheckedIndexedAccess` without a `!`.
- `clint-mckoy.jpg` was unreferenced and deleted rather than localised.
- Two substitutions failed silently and were caught by the step's greps: the `:src` rewrite in
  Notifications (double-quote escaping) and a `perl` import insert that consumed its own anchor line in
  Settings.vue, deleting the `useUiStore` import. The anchor is now repeated inside every replacement.

## P11.2 — nav stubs and dead glyphs

Status: done

- `AppBar.vue` hardcoded `to="/"` on every profile-menu row, so Profile, Settings and Log out all
  landed on the dashboard. Rows now carry their own `to`: the first two to `/pages/user`, Log out to
  `/`. Log out stays a stub by nature — there is no auth to clear.
- `profileNav` in `config/navigation.ts` is **not** dead, contrary to the first read: `Drawer.vue`
  imports it and renders it as the avatar group through `mapItem`. Only `AppBar` ignores it, and it
  keeps its own array because the two want different shapes (group with avatar vs flat list with a
  divider). Both stay.
- Six social links were `href: '#'`. Now real destinations, with `rel="noopener"` and
  `target="_blank"` added to Register's buttons — Login already had both.
- The terms link at `Register.vue:135` stays `#`. `creative-tim.com/terms` timed out and
  `/terms-and-conditions` 404s; a visible stub beats a guessed URL.
- **23 dead MDI glyphs replaced.** MDI 7 removed the brand set the v2 templates were written against;
  each rendered as an empty circle or blank tile. `mdi-facebook-box` and `mdi-github-box` were caught
  on screen, then a full audit found 23 more across `Icons.vue` (15), `Buttons.vue` (5), `Settings.vue`
  (2) and one each in Register, Login, Wizard and Charts. Every substitute was verified against
  `node_modules/@mdi/font` before writing. `mdi-face` → `mdi-face-man` shifts meaning slightly; the
  rest are shape-for-shape or letter tiles where no brand mark survives.
