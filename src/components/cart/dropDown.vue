<template>
    <div class="drop-down-cart">
        <div class="cart-group">
            <!-- "item"是陣列的每一筆資料 -->
            <!-- 用for迴圈把所有資料找出來 -->
            <div v-for="item in cartList" class="cart-item">
                <div class="cart-pic"><img :src="`@/assets/image/product/product_data/${item.product_pic1}`" alt="">
                </div>
                <div class="cart-info">
                    <div class="cart-text">
                        <p>{{ item.product_name }}</p>
                        <span>NT{{ item.price }}</span>
                    </div>
                    <div class="quality-trashcan">
                        <div id="num">
                            <!-- 從下面來的東西都要加this -->
                            <button @click="proQuantity(item.quantity) - 1"> -</button>
                            <div>{{ item.quantity }}</div>
                            <button @click="proQuantity(item.quantity) + 1"> +</button>
                        </div>
                        <div @click=" removeItem(item)" class="trash-can"><img src="@/assets/image/product/trash.svg"
                                alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 結帳按鈕 -->
        <router-link :to="{ path: '/cart' }">
            <cartButton :text="pay" />
        </router-link>
    </div>
</template>    
<script>
import { show_product } from '@/stores/cart.js';
import cartButton from '@/components/button/CartButton.vue';

export default {
    data() {
        return {
            pay: '結帳',
            cartList: [],//存購物車資料的陣列
            quantity: 1,//初始數量
            total: [],//存總價格陣列
            totalItem: [],//存總項目陣列
        }
    },
    components: {
        cartButton,
    },
    props: [],
    created() {
        //show_product()有兩個陣列
        //[0]:購物車資料,[1]總價格陣列&總項目陣列
        this.cartList = show_product()[0];
        console.log(show_product());

        this.total = show_product()[1][0];
        this.totalItem = show_product()[1][1];

    },
    methods: {
        proQuantity(item, change) {
            // console.log(e);
            item.quantity += change;
        },
        //垃圾桶移除後,要刪掉索引值?//this.cartList.splice(index, 1)
        removeItem(item) {
            let index = this.cartList.findIndex(cartItem => cartItem.id === item.id);
            if (index !== -1) {
                this.carList.splice(index, 1);
            }
        }
    },

}
</script>

<style scoped></style>