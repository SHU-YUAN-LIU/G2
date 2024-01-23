<template>
    <vue3-marquee>
      <span class="marq">
        {{ marqueeArray }}
        <button class="marqbtn">
        <router-link to="/news">立即前往➜</router-link>
        </button> 
      </span>
      

    </vue3-marquee>
</template>

<script>
import commitButton from './button/commitButton.vue';
export default {
  data() {
    return {

    }
  },
  components: {
    commitButton,
  },
  props:['marqueeArray'],
}
</script>
<style>

</style>
