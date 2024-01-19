<!-- <script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script> -->
<script>
import { RouterView } from 'vue-router';
import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';
import Banner from './components/Banner.vue';
import Button from './components/Button.vue';

export default {
  components: {
    RouterView,
    MainHeader,
    MainFooter,
    Banner,
    Button,
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


    <MainHeader />

    <RouterView />


  <MainFooter />

  

</template>


<style></style>

