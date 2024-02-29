import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Button } from 'view-ui-plus'

import App from './App.vue'
import router from './router'

import { useAuthStore } from './stores/authStore'

import AOS from 'aos'
import 'aos/dist/aos.css' // 引入AOS文件

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

const authStore = useAuthStore()
authStore.checkLoginStatus()

app.use(router)
app.use(Vue3Marquee);
app.AOS = new AOS.init({
  offset: 500, // 觸動畫面偏移量（像素）
  duration: 600, // 動畫持續時間（毫秒）
  easing: 'ease-in-out', // 动画缓动函数
  once: false, // 動畫是否只有執行一次
  mirror: false, // 是否在向上滾動時觸發畫面
});
// 渲染在index.html裡面的div#app
app.mount('#app')
