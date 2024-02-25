<template>
  <div class="scrollbar">
    <MainHeader />
    <Loading :key="$route.fullPath" :loadingTime=1000 />
    <RouterView />
    <goToTop />
    <MainFooter v-if="!$route.meta.hideFooter" />
  </div>
</template>

<script>
import { RouterView } from 'vue-router';
import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';
import goToTop from './components/goToTop.vue';
import Loading from './components/Loading.vue'

export default {
  components: {
    RouterView,
    MainHeader,
    MainFooter,
    goToTop,
    Loading,
  },
  data() {
    return {

    }
  },
  created() {

  },
  methods: {

  },

}

</script>

<style scoped>
@font-face {
  font-family: 'Mantou Sans';
  src: url('@/assets/Mantou_font/MantouSans-Regular.ttf');
}
</style>

