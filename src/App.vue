<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>
<script>
// import TheWelcome from '../components/TheWelcome.vue'


</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/index">Index</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/product">Product</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </div>

  </header>

  <RouterView />
</template>
<style>
  header{
    position: fixed;
    top: 0;
    left: 45%;
  }
</style>

