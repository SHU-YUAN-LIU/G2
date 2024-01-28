<template>
  <router-link :to="{ name: 'productinfoview', params: { productId: id } }" class="procard">
    <!-- NewIcon -->
    <div v-if="num < 6" class="newIcon">NEW</div>

    <!-- 圖片 -->
    <div class="card_pic">
      <img :src="imgSrc">
    </div>
    <!-- 標題/價錢 -->
    <p class="pro-title">{{ name }}</p>
    <p class="pro-price">價錢:{{ price }}</p>
    <CartButton :text="addCart" :id=id :qty=1 />
  </router-link>
</template>
<script>
import CartButton from '../components/button/CartButton.vue'
export default {
  components: {
    CartButton,
  },
  data() {
    return {
      addCart: "加入購物車"
    }
  },
  props: ['imgSrc', 'name', 'price', 'int', 'num', 'id'],
  created() { },
  methods: {

  }
}
</script>

<style lang="scss"></style>
