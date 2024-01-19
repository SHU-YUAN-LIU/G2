<template>
  <div class="procard">
    <!-- NewIcon -->
    <div v-if="num < 6" class="newIcon">NEW</div>

    <!-- 圖片 -->
    <div class="card_pic">
      <img :src="imgSrc">
    </div>
    <!-- 標題/價錢 -->
    <p class="pro-title">{{ name }}</p>
    <p class="pro-price">價錢:{{ price }}</p>
    <Button />
  </div>
</template>
<script>
import Button from '../components/Button.vue'
export default {
  components: {
    Button,
  },
  data() {
    return {

    }
  },
  props: ['imgSrc', 'name', 'price', 'int', 'num'],
  created() { },
  methods: {

  }
}
</script>

<style lang="scss"></style>
