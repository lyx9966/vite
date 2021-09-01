import type { App } from 'vue'
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {}
  },
  mutations: {},
})

export function setupStore(app: App<Element>) {
  app.use(store)
}

export { store }
