<template>
  <div class="card">
    <h1>購物車</h1>
  </div>
  <div v-for="item in cart_info_show" :key="item.product_no">
    <div> 商品ID : <span>{{ item.product_no }}</span></div>
    <div> 名稱 : <span>{{ item.product_name }}</span></div>
    <div> 數量 : <span>{{ item.qty }}</span></div>
    <div> 價格 : <span>{{ item.price }}</span></div>
    <div> 圖片名稱 : <span>{{ item.product_pic1 }}</span></div>
  </div>

  <div> 總價格 : <span>{{ cart_total[0].total }}</span></div>
  <div> 總項目數 : <span>{{ cart_total[0].listcount }}</span></div>

  <!-- <div v-for="item in cart_total">
    <div> 總價格 : <span>{{ item.total }}</span></div>
    <div> 總項目數 : <span>{{ item.listcount }}</span></div>
  </div> -->
</template>

<style></style>

<script>
import { show_product } from '@/stores/cart.js';
import dropDown from '@/components/cart/dropDown.vue';
export default {
  data() {
    return {
      cart_info_show: [],
      cart_total: [],

    }
  },
  components: {
    dropDown,
  }
  ,
  created() {
    // 在 created 鉤子中處理
    this.cartcreate();
    [this.cart_info_show, this.cart_total] = show_product();
    console.log(show_product());
    window.addEventListener('storage', this.changecartshow);
  },
  methods: {
    show_product,
    cartcreate() {
      // 檢查是否已經存在 cart 變數，如果不存在，則創建一個空值
      if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
      }
    },
    changecartshow(event) {
      if (event.key === 'cart') {
        [this.cart_info_show, this.cart_total] = show_product();
      }
    }
  },
  mounted() {
    [this.cart_info_show, this.cart_total] = show_product();
    // 其他方法...
  },
  destroyed() {
    // 移除監聽器，防止內存洩漏
    window.removeEventListener('storage', this.changecartshow);
  },
};
</script>
