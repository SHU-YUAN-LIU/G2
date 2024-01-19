<script>
import {RouterLink} from 'vue-router'
export default {
  components:{
    
  },
  data(){
    return{
      
    }
  },
  created(){

  },

}
</script>

<template>
 <header>
    <div class="wrapper">
      <nav>
        <ul>
          <li>
            <RouterLink to="/home"><img src="../assets/image/home/logo.png" alt=""></RouterLink>
          </li>
          <li>
            <div class="nav_items">
              <li>
                <RouterLink to="/news">最新消息</RouterLink>
              </li>
              <li>
                <RouterLink to="/about">關於我們</RouterLink>
              </li>
              <li>
                <RouterLink to="/election">選舉資訊</RouterLink>
              </li>
              <li>
                <RouterLink to="/product">官方商城</RouterLink>
              </li>
              <li>
                <RouterLink to="/contact">聯絡我們</RouterLink>
              </li>
            </div>
          </li>
          
          <li>
            <div class="nav_icons">
              <li>
                <RouterLink to="/donate"><div><img src="../assets/image/home/icon_donate.svg" alt=""><p>我要捐款</p></div></RouterLink>
              </li>
              <li>
                <RouterLink to="/cart"><div><img src="../assets/image/home/icon_cart.svg" alt=""><p>購物車</p></div></RouterLink>
              </li>
              <li>
                <RouterLink to="/login"><div><img src="../assets/image/home/icon_login.png" alt=""><p>登入</p></div></RouterLink>
              </li>
            </div>
          </li>
        </ul>
      </nav>
    </div>

  </header>
</template>

<style scoped>
@import "@/assets/scss/layout/_header.scss"
</style>
