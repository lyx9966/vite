import type { RouteRecordRaw } from 'vue-router'
import { PageEnum } from '/@/enums/pageEnum'
import { LAYOUT } from '/@/router/constant'

export const REDIRECT_NAME = 'Redirect'

export const LoginRoute: RouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('/@/pages/login/index.vue'),
}

export const RedirectRoute: RouteRecordRaw = {
  path: '/redirect',
  name: REDIRECT_NAME,
  component: () => import('/@/pages/login/index.vue'),
}

export const PageNotFound: RouteRecordRaw = {
  path: '/:path(.*)*',
  name: 'ErrorPage',
  component: () => import('/@/pages/login/index.vue'),
}

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Root',
    redirect: PageEnum.BASE_HOME,
    meta: {
      title: 'Root',
    },
  },
  {
    path: '/home',
    name: 'Home',
    component: LAYOUT,
    children: [
      {
        path: '',
        component: () => import('/@/pages/Home.vue'),
        meta: {
          title: 'Home',
        },
      },
    ],
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('/@/pages/About.vue'),
    meta: {
      title: 'About',
    },
  },
  LoginRoute,
]
