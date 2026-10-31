// Navigation tree, extracted from the original Drawer.vue.
// `title` values are i18n keys — translated via $t() in the components.

export interface NavItem {
  title: string
  subtitle?: string
  icon?: string
  to?: string
  href?: string
  children?: NavItem[]
  avatar?: boolean
}

export const navItems: NavItem[] = [
  { icon: 'mdi-view-dashboard', title: 'dashboard', to: '/' },
  {
    icon: 'mdi-image',
    title: 'pages',
    children: [
      { title: 'pricing', to: '/pages/pricing' },
      { title: 'rtl', to: '/pages/rtl' },
      { title: 'timeline', to: '/pages/timeline' },
      { title: 'login', to: '/pages/login' },
      { title: 'register', to: '/pages/register' },
      { title: 'lock', to: '/pages/lock' },
      { title: 'user', to: '/pages/user' },
      { title: 'error', to: '/pages/404' },
    ],
  },
  {
    icon: 'mdi-view-comfy',
    title: 'components',
    children: [
      {
        title: 'multi',
        children: [{ title: 'example', to: '/components/buttons' }],
      },
      { title: 'buttons', to: '/components/buttons' },
      { title: 'grid', to: '/components/grid-system' },
      { title: 'tabs', to: '/components/tabs' },
      { title: 'notifications', to: '/components/notifications' },
      { title: 'icons', to: '/components/icons' },
      { title: 'typography', to: '/components/typography' },
    ],
  },
  {
    icon: 'mdi-clipboard-outline',
    title: 'forms',
    children: [
      { title: 'rforms', to: '/forms/regular' },
      { title: 'eforms', to: '/forms/extended' },
      { title: 'vforms', to: '/forms/validation' },
      { title: 'wizard', to: '/forms/wizard' },
    ],
  },
  {
    icon: 'mdi-grid',
    title: 'tables',
    children: [
      { title: 'rtables', to: '/tables/regular-tables' },
      { title: 'etables', to: '/tables/extended-tables' },
      { title: 'dtables', to: '/tables/data-tables' },
    ],
  },
  { icon: 'mdi-widgets', title: 'widgets', to: '/widgets' },
  { icon: 'mdi-chart-timeline-variant', title: 'charts', to: '/charts' },
  { icon: 'mdi-calendar-range', title: 'calendar', to: '/calendar' },
]

// Profile menu — all three land on the only route behind it.
export const profileNav: NavItem = {
  avatar: true,
  title: 'avatar',
  children: [
    { title: 'my-profile', to: '/pages/user' },
    { title: 'edit-profile', to: '/pages/user' },
    { title: 'settings', to: '/pages/user' },
  ],
}
