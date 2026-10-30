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
