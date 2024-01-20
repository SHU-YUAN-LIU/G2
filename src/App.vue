<template>
  <MainHeader />
  <RouterView />
  <MainFooter />
</template>

<script>
import { RouterView } from 'vue-router';
import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';
// import Banner from './components/Banner.vue';
// import Button from './components/Button.vue';

export default {
  components: {
    RouterView,
    MainHeader,
    MainFooter,
    // Banner,
    // Button,
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

<style></style>

