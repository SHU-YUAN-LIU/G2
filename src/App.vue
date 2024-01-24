<template>
  <MainHeader />
  <div id="goToTop-a"></div>
  <RouterView />
  <goToTop />
  <MainFooter />
</template>

<script>
import { RouterView } from 'vue-router';
import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';
import goToTop from './components/goToTop.vue';


export default {
  components: {
    RouterView,
    MainHeader,
    MainFooter,
    goToTop,
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

<style scoped></style>

