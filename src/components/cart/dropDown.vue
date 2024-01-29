<template>
    <div class="drop-down-cart">
        <div class="cart-group">
            <!-- "item"是陣列的每一筆資料 -->
            <!-- 用for迴圈把所有資料找出來 -->
            <div v-for="item in cartList" class="cart-item">
                <div class="cart-pic"><img :src="`src/assets/image/product/product_data/${item.product_pic1}`" alt="">
                </div>
                <div class="cart-info">
                    <div class="cart-text">
                        <p>{{ item.product_name }}</p>
                        <span>NT{{ item.price }}</span>
                    </div>
                    <div class="quality-trashcan">
                        <div id="num">
                            <button @click="quantity -= 1"> -</button>
                            <div>{{ item.quantity }}</div>
                            <button @click="quantity += 1"> +</button>
                        </div>
                        <div @click="" class="trash-can"><img src="@/assets/image/product/trash.svg" alt=""></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 結帳按鈕 -->
        <cartButton />
    </div>
</template>    
<script>
import { show_product } from '@/stores/cart.js';
import cartButton from '@/components/button/CartButton.vue'
export default {
    data() {
        return {
            cartList: [],
            quantity: 0,
        }
    },
    components: {
        cartButton,
    },
    props: [],
    created() {

        show_product();
        // console.log(show_product());

        this.cartList = show_product();
        console.log(this.cartList);


    },

}
</script>

<style scoped></style>