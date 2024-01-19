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
                <RouterLink to="/donate">Donate</RouterLink>
              </li>
              <li>
                <RouterLink to="/login">Login</RouterLink>
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
