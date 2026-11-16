import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('@/pages/DashboardPage.vue'),
      },
      {
        path: 'pages/user',
        name: 'User Profile',
        component: () => import('@/pages/UserProfilePage.vue'),
      },
      {
        path: 'tables/regular-tables',
        name: 'Regular Tables',
        component: () => import('@/pages/RegularTablesPage.vue'),
      },
      {
        path: 'components/typography',
        name: 'Typography',
        component: () => import('@/pages/TypographyPage.vue'),
      },
      {
        path: 'components/icons',
        name: 'Icons',
        component: () => import('@/pages/IconsPage.vue'),
      },
      {
        path: 'maps/google-maps',
        name: 'Google Maps',
        component: () => import('@/pages/GoogleMapsPage.vue'),
      },
      {
        path: 'components/notifications',
        name: 'Notifications',
        component: () => import('@/pages/NotificationsPage.vue'),
      },
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue'),
  },
];

export default routes;
