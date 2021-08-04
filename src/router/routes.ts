import type { AppRouteRecordRaw } from '/@/router/types'
import { PageEnum } from '/@/enums/pageEnum'

export const routes: AppRouteRecordRaw[] = [
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
    component: () => import('/@/pages/Home.vue'),
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: 'About',
    },
  },
]
