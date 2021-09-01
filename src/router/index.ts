import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes, LoginRoute } from './routes'

const WHITE_NAME_LIST = [LoginRoute.name]

export const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: routes as unknown as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export function resetRouter() {
  router.getRoutes().forEach((route: RouteRecordRaw) => {
    const { name } = route
    if (name && !WHITE_NAME_LIST.includes(name as string)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

export function setupRouter(app: App<Element>) {
  app.use(router)
}
