import type { RouteRecordRaw } from 'vue-router'

// Placeholder until layouts exist (P5.6 dashboard, P6.4 auth).
const Placeholder = () => import('@/views/_Placeholder.vue')

export const routes: RouteRecordRaw[] = [
  {
    path: '/pages',
    component: Placeholder,
    children: [
      { path: 'lock', name: 'Lock', component: Placeholder },
      { path: 'login', name: 'Login', component: Placeholder },
      { path: 'pricing', name: 'Pricing', component: Placeholder },
      { path: 'register', name: 'Register', component: Placeholder },
    ],
  },
  {
    path: '/',
    component: Placeholder,
    children: [
      { path: '', name: 'Dashboard', component: Placeholder },
      { path: 'pages/rtl', name: 'RTL', component: Placeholder },
      { path: 'pages/user', name: 'User Profile', component: Placeholder },
      { path: 'pages/timeline', name: 'Timeline', component: Placeholder },
      { path: 'components/buttons', name: 'Buttons', component: Placeholder },
      { path: 'components/grid-system', name: 'Grid System', component: Placeholder },
      { path: 'components/tabs', name: 'Tabs', component: Placeholder },
      { path: 'components/notifications', name: 'Notifications', component: Placeholder },
      { path: 'components/icons', name: 'Icons', component: Placeholder },
      { path: 'components/typography', name: 'Typography', component: Placeholder },
      { path: 'forms/regular', name: 'Regular Forms', component: Placeholder },
      { path: 'forms/extended', name: 'Extended Forms', component: Placeholder },
      { path: 'forms/validation', name: 'Validation Forms', component: Placeholder },
      { path: 'forms/wizard', name: 'Wizard', component: Placeholder },
      { path: 'tables/regular-tables', name: 'Regular Tables', component: Placeholder },
      { path: 'tables/extended-tables', name: 'Extended Tables', component: Placeholder },
      { path: 'tables/data-tables', name: 'Data Tables', component: Placeholder },
      { path: 'widgets', name: 'Widgets', component: Placeholder },
      { path: 'charts', name: 'Charts', component: Placeholder },
      { path: 'calendar', name: 'Calendar', component: Placeholder },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: Placeholder,
    children: [{ path: '', name: '404 Error', component: Placeholder }],
  },
]
