<template>
  <div>
    <vue3-marquee :pause-on-hover="true">
      <span class="marq" v-for="(slogan, index) in marqueeArray" :key="index">
        {{ slogan }}
        <button class="marqbtn">
          <router-link to="/news">立即前往➜</router-link>
        </button>
      </span>
    </vue3-marquee>
  </div>
</template>


<script>
import commitButton from './button/commitButton.vue';
export default {
  methods: {
    stopMarquee() {
      // 假设 marqueeControl 是 vue3-marquee 组件提供的用于控制滚动的方法
      // 请替换为实际的停止滚动的方法
      this.$refs.marquee.marqueeControl('stop');
    },
    startMarquee() {
      // 同上，替换为实际的开始滚动的方法
      this.$refs.marquee.marqueeControl('start');
    },
  },
  components: {
    commitButton,
  },
  props: ['marqueeArray'],
}
</script>

