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
    ],
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue'),
  },
];

export default routes;
