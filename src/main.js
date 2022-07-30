import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import requrest from './utils/request'
import storage from './utils/storage'

const app = createApp(App)
app.config.globalProperties.$request = requrest
app.config.globalProperties.$storage = storage
app.use(router)
    .use(ElementPlus)
    .mount('#app')
