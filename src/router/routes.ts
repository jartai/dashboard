import type { RouteRecordRaw } from 'vue-router'

// Placeholder until screens are ported (Phase 8) and the auth layout exists (P6.4).
const Placeholder = () => import('@/views/_Placeholder.vue')

export const routes: RouteRecordRaw[] = [
  {
    path: '/pages',
    component: () => import('@/layouts/AuthLayout.vue'),
    children: [
      {
        path: 'lock',
        name: 'Lock',
        component: () => import('@/views/pages/Lock.vue'),
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/pages/Login.vue'),
      },
      {
        path: 'pricing',
        name: 'Pricing',
        component: () => import('@/views/pages/Pricing.vue'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/pages/Register.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('@/layouts/DashboardLayout.vue'),
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/Dashboard.vue'),
      },
      {
        path: 'pages/rtl',
        name: 'RTL',
        component: () => import('@/views/dashboard/pages/Rtl.vue'),
      },
      {
        path: 'pages/user',
        name: 'User Profile',
        component: () => import('@/views/dashboard/pages/UserProfile.vue'),
      },
      {
        path: 'pages/timeline',
        name: 'Timeline',
        component: () => import('@/views/dashboard/pages/Timeline.vue'),
      },
      {
        path: 'components/buttons',
        name: 'Buttons',
        component: () => import('@/views/dashboard/component/Buttons.vue'),
      },
      {
        path: 'components/grid-system',
        name: 'Grid System',
        component: () => import('@/views/dashboard/component/Grid.vue'),
      },
      {
        path: 'components/tabs',
        name: 'Tabs',
        component: () => import('@/views/dashboard/component/Tabs.vue'),
      },
      {
        path: 'components/notifications',
        name: 'Notifications',
        component: () => import('@/views/dashboard/component/Notifications.vue'),
      },
      {
        path: 'components/icons',
        name: 'Icons',
        component: () => import('@/views/dashboard/component/Icons.vue'),
      },
      { path: 'components/typography', name: 'Typography', component: Placeholder },
      {
        path: 'forms/regular',
        name: 'Regular Forms',
        component: () => import('@/views/dashboard/forms/RegularForms.vue'),
      },
      {
        path: 'forms/extended',
        name: 'Extended Forms',
        component: () => import('@/views/dashboard/forms/ExtendedForms.vue'),
      },
      {
        path: 'forms/validation',
        name: 'Validation Forms',
        component: () => import('@/views/dashboard/forms/ValidationForms.vue'),
      },
      { path: 'forms/wizard', name: 'Wizard', component: Placeholder },
      {
        path: 'tables/regular-tables',
        name: 'Regular Tables',
        component: () => import('@/views/dashboard/tables/RegularTables.vue'),
      },
      {
        path: 'tables/extended-tables',
        name: 'Extended Tables',
        component: () => import('@/views/dashboard/tables/ExtendedTables.vue'),
      },
      {
        path: 'tables/data-tables',
        name: 'Data Tables',
        component: () => import('@/views/dashboard/tables/DataTables.vue'),
      },
      {
        path: 'widgets',
        name: 'Widgets',
        component: () => import('@/views/dashboard/Widgets.vue'),
      },
      {
        path: 'charts',
        name: 'Charts',
        component: () => import('@/views/dashboard/Charts.vue'),
      },
      {
        path: 'calendar',
        name: 'Calendar',
        component: () => import('@/views/dashboard/Calendar.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404 Error',
    component: () => import('@/views/pages/Error.vue'),
  },
]
