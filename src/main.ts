import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import '/@/styles/public.scss'
import '/@/styles/tailwind.css'

import { router, setupRouter } from '/@/router/index'
import { setupStore } from '/@/store/index'

async function bootstrap() {
  const app = createApp(App)

  // element組件
  app.use(ElementPlus)

  // 路由
  setupRouter(app)

  // 状态管理
  setupStore(app)

  // Mount when the route is ready
  await router.isReady()

  app.mount('#app')
}

void bootstrap()
