import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Button } from 'view-ui-plus'

import App from './App.vue'
import router from './router'


//引入sass
import "./assets/scss/style.scss"

//引入饅頭字體
import '@/assets/Mantou_font/_Mantou_font.scss'

import Vue3Marquee from 'vue3-marquee'


//創建一個vue應用程式(主要配置在app.vue裡)
const app = createApp(App)
const pinia = createPinia()
app.component('Button', Button)
app.use(pinia)
app.use(router)
app.use(Vue3Marquee);
// 渲染在index.html裡面的div#app
app.mount('#app')
