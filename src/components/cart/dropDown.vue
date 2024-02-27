<template>
    <div class="drop-down-cart">
        <div class="cart-group">
            <!-- "item"是陣列的每一筆資料 -->
            <!-- 用for迴圈把所有資料找出來 -->
            <div v-for="(item, index) in cartList " class="cart-item" :key="item.product_no">
                <div class="cart-pic">
                    <img :src="getpicurl(item.product_pic1)" alt="">
                </div>
                <div class="cart-info">
                    <div class="cart-text">
                        <!-- 品名 -->
                        <p>{{ item.product_name }}</p>
                        <!-- 數量*價格 -->
                        <span>NT{{ item.qty * item.price }}</span>
                    </div>
                    <div class="quality-trashcan">
                        <div id="num">
                            <button @click="changeqty($event, item.product_no, -1)"> -</button>
                            <div>{{ item.qty }}</div>
                            <button @click="changeqty($event, item.product_no, 1)"> +</button>
                        </div>
                        <div @click=" changeqty($event, item.product_no, -(item.qty))" class="trash-can">
                            <img src="/image/product/trash.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 結帳按鈕 -->
        <div @click="checkCartNotEmpty">
            <PayButton />
        </div>
    </div>
</template>    
<script>
import axios from 'axios';
import { RouterLink } from 'vue-router';
// import { show_product, deleteProduct, usecartListStore, changeqty } from '@/stores/cart.js';
import { show_product, changeqty } from '@/stores/cart.js';
import PayButton from '@/components/button/PayButton.vue';

export default {

    data() {
        return {
            cartList: [],//存購物車資料的陣列
            qty: 1,//初始數量
            cart_total: [],//存總價格跟總項目陣列
            // isDropDown: false,
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
        },
        getpicurl(picname) {
            if (picname) {
                var url = `${import.meta.env.VITE_IMG_URL}/product/product_data/` + picname;
            }
            else {
                url = `${import.meta.env.VITE_IMG_URL}/product/errorpic.png`;
            }
            return url;
        },

        mounted() {
            [this.cartList, this.cart_total] = show_product();
            console.log(show_product());
        },
        destroyed() {
            window.removeEventListener('storage', this.changecartshow);
        },
        checkCartNotEmpty() {
            //從local storage中獲取'cart'
            const cart = JSON.parse(localStorage.getItem('cart') || '[]');

            //檢查'cart'是否為空
            if (cart.length === 0) {
                //就跳出警告
                alert('您的購物車是空的喔!');
            } else {
                //如果不是空的,就跳轉頁面
                this.$router.push('/productPay');
            }
        }
    }
}
</script>

<style scoped></style>