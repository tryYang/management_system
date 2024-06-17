import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from '@/App.vue'
import router from './router'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import gloalComponent from '@/components'
import 'virtual:svg-icons-register'
import '@/styles/index.scss'
const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn
})
app.use(createPinia())
app.use(router)
app.use(gloalComponent)
//svg

app.mount('#app')
