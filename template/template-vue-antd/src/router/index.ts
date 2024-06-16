import { type App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { staticRoutes, dynamicRoutes } from './routes'

export const routerHistory = createWebHistory(import.meta.env.BASE_URL)
const router = createRouter({
  history: routerHistory,
  strict: true, // 是否应该禁止尾部斜杠。默认为假
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes: [...staticRoutes, ...dynamicRoutes]
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}
