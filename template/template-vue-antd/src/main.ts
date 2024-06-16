import 'ant-design-vue/dist/reset.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'

import App from './App.vue'
import { setupRouter } from './router'

const app = createApp(App)

const bootstrap = () => {
  app.use(createPinia())
  app.use(Antd)

  setupRouter(app)
  app.mount('#app')
}

bootstrap()
