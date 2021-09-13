import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'
import '/@/styles/public.scss'
import '/@/styles/tailwind.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// 添加需要的图标，不全局添加，不然会导致文件太大
// 两种图标样式：1. fas   2. far
import { faUser as fasUser } from '@fortawesome/free-solid-svg-icons'
import { faUser as farUser } from '@fortawesome/free-regular-svg-icons'

library.add(fasUser, farUser)

import { router, setupRouter } from '/@/router/index'
import { setupStore } from '/@/store'

async function bootstrap() {
  const app = createApp(App)

  // font-awesome
  app.component('FaIcon', FontAwesomeIcon)

  // element組件
  app.use(ElementPlus)

  // 状态管理
  setupStore(app)

  // 路由
  setupRouter(app)

  // Mount when the route is ready
  await router.isReady()

  app.mount('#app')
}

void bootstrap()
