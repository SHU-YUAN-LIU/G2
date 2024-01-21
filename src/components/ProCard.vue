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
    <CartButton />
  </div>
</template>
<script>
import CartButton from '../components/button/CartButton.vue'
export default {
  components: {
    CartButton,
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
