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
  components:{
    RouterView,
    MainHeader,
    MainFooter,
    Banner,
  },
  data(){
    return{
      
    }
  },
  created(){

  },
  methods:{
    
  }
  
}

</script>

<template>
  <MainHeader />



  <RouterView />


  <MainFooter />

</template>


<style>
  header{
    position: fixed;
    top: 0;
    left: 45%;
  }
</style>

