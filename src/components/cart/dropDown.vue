<template>
    <div class="drop-down-cart">
        <div class="cart-group">
            <!-- "item"是陣列的每一筆資料 -->
            <!-- 用for迴圈把所有資料找出來 -->
            <div v-for="(item, index) in cartList " class="cart-item" :key="item.product_no">
                <div class="cart-pic"><img :src="`/src/assets/image/product/product_data/${item.product_pic1}`" alt="">
                </div>
                <div class="cart-info">
                    <div class="cart-text">
                        <p>{{ item.product_name }}</p>
                        <span>NT{{ item.price }}</span>
                    </div>
                    <div class="quality-trashcan">
                        <div id="num">
                            <button @click="changeqty($event, item.product_no, -1)"> -</button>
                            <div>{{ item.quantity }}</div>
                            <button @click="changeqty($event, item.product_no, 1)"> +</button>
                        </div>
                        <div @click=" changeqty($event, item.product_no, -(item.quantity))" class="trash-can">
                            <img src="@/assets/image/product/trash.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 結帳按鈕 -->
        <router-link to="/ProductPay">
            <PayButton />
        </router-link>
    </div>
</template>    
<script>
import { RouterLink } from 'vue-router';
// import { show_product, deleteProduct, usecartListStore, changeqty } from '@/stores/cart.js';
import { show_product, changeqty } from '@/stores/cart.js';
import PayButton from '@/components/button/PayButton.vue';

export default {

    data() {
        return {

            cartList: [],//存購物車資料的陣列
            quantity: 1,//初始數量
            cart_total: [],//存總價格跟總項目陣列
        }
    },
    components: {
        PayButton,
    },
    created() {

        [this.cartList, this.cart_total] = show_product();
        window.addEventListener('storage', this.changecartshow);
    },
    methods: {
        changeqty,
        show_product,
        changecartshow(event) {
            if (event.key == 'cart') {
                [this.cartList, this.cart_total] = show_product();
            }
        }

    },
    mounted() {
        [this.cartList, this.cart_total] = show_product();
    },
    destroyed() {
        window.removeEventListener('storage', this.changecartshow);
    },
}
</script>

<style scoped></style>