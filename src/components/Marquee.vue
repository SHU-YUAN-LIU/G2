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
  components: {
    commitButton,
  },
  props: ['marqueeArray'],
}
</script>

