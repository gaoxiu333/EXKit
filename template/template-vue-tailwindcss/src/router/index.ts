import { type App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

export const routerHistory = createWebHistory(import.meta.env.BASE_URL)
const router = createRouter({
  history: routerHistory,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes: routes
})

export default router
