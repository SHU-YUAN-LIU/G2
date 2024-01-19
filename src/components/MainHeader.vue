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
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/news">最新消息</RouterLink>
        <RouterLink to="/about">關於我們</RouterLink>
        <RouterLink to="/election">選舉資訊</RouterLink>
        <RouterLink to="/product">官方商城</RouterLink>
        <RouterLink to="/contact">聯絡我們</RouterLink>
        <RouterLink to="/donate">Donate</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </div>

  </header>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
