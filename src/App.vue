<template>
  <div class="scrollbar">
    <MainHeader />
    <Loading :key="$route.fullPath" :loadingTime=500 />
    <RouterView />
    <goToTop />
    <MainFooter />
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

/* ----------------------------------------- */
.scrollbar {

  /* WebKit引擎的卷軸 */
  ::-webkit-scrollbar {
    width: 12px;
    /* 卷軸寬度 */
  }

  /* 卷軸滑塊 */
  ::-webkit-scrollbar-thumb {
    background-color: #ba1a1a;
    /* 滑塊顏色 */
    border-radius: 6px;
    /* 滑塊圓角 */
  }

  /* 卷軸軌道 */
  ::-webkit-scrollbar-track {
    background-color: #c70000;
    /* 軌道顏色 */
    border-radius: 6px;
    /* 軌道圓角 */
  }
}
</style>

