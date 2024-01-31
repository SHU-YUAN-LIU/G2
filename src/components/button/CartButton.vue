<template>
    <div class="cart-btn" @click="changeqty($event, id, qty)">
        <img loading="lazy" src="/image/product/Cart.svg" class="img" />
        <div class="add">{{ text }}</div>
    </div>
</template>

<style scoped lang="scss"></style>

<script>
import { changeqty } from '../../stores/cart.js';
export default {
    props: ['id', 'qty', 'text'],
    created() {
        // 在 created 鉤子中處理
        this.cartcreate();
    },
    methods: {
        changeqty,
        cartcreate() {
            // 檢查是否已經存在 cart 變數，如果不存在，則創建一個空值
            if (!localStorage.getItem('cart')) {
                localStorage.setItem('cart', JSON.stringify([]));
            }
        },
    },

}
</script>