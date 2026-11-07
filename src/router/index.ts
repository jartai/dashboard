/**
 * router/index.ts
 *
 * Manual routes for the files in ./src/pages
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('@/pages/Index.vue') },
  { path: '/dashboard', name: 'dashboard', component: () => import('@/pages/dashboard/Index.vue') },
  { path: '/charts', name: 'charts', component: () => import('@/pages/charts/Index.vue') },
  { path: '/calendar', name: 'calendar', component: () => import('@/pages/calendar/Index.vue') },
  { path: '/widgets', name: 'widgets', component: () => import('@/pages/widgets/Index.vue') },
  { path: '/tables/regular', name: 'tables-regular', component: () => import('@/pages/tables/regular.vue') },
  { path: '/tables/data', name: 'tables-data', component: () => import('@/pages/tables/data.vue') },
  { path: '/tables/extended', name: 'tables-extended', component: () => import('@/pages/tables/extended.vue') },
  { path: '/forms/regular', name: 'forms-regular', component: () => import('@/pages/forms/regular.vue') },
  { path: '/forms/extended', name: 'forms-extended', component: () => import('@/pages/forms/extended.vue') },
  { path: '/forms/validation', name: 'forms-validation', component: () => import('@/pages/forms/validation.vue') },
  { path: '/forms/wizard', name: 'forms-wizard', component: () => import('@/pages/forms/wizard.vue') },
  { path: '/auth/login', name: 'login', component: () => import('@/pages/auth/login.vue'), meta: { layout: 'auth' } },
  { path: '/auth/register', name: 'register', component: () => import('@/pages/auth/register.vue'), meta: { layout: 'auth' } },
  { path: '/auth/lock', name: 'lock', component: () => import('@/pages/auth/lock.vue'), meta: { layout: 'auth' } },
  { path: '/error', name: 'error', component: () => import('@/pages/error/Index.vue') },
  { path: '/profile', name: 'profile', component: () => import('@/pages/profile/Index.vue') },
  { path: '/pricing', name: 'pricing', component: () => import('@/pages/pricing/Index.vue') },
  { path: '/timeline', name: 'timeline', component: () => import('@/pages/timeline/Index.vue') },
  { path: '/rtl', name: 'rtl', component: () => import('@/pages/rtl/Index.vue') },
  { path: '/:pathMatch(.*)*', redirect: '/error' },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

export default router
