import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3Marquee from 'vue3-marquee'

import App from './App.vue'
import router from './router'



import "./assets/scss/style.scss"

//創建一個vue應用程式(主要配置在app.vue裡)
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue3Marquee)
// 渲染在index.html裡面的div#app
app.mount('#app')
