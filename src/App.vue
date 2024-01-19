<!-- <script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script> -->
<script>
import { RouterView } from 'vue-router';
import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';
import Banner from './components/Banner.vue';

export default {
  components: {
    RouterView,
    MainHeader,
    MainFooter,
    Banner,
  },
  data() {
    return {

    }
  },
  created() {

  },
  methods: {

  }

}

</script>

<template>
  <header>
    <div class="wrapper">
      <h1 class="$title_1">你好</h1>
      <nav>
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/product">Product</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/donate">Donate</RouterLink>
        <RouterLink to="/news">News</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/election">Election</RouterLink>
      </nav>
    </div>




    <RouterView />


  </header>
</template>


<style></style>

