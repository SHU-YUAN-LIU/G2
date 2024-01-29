<template>
    <div class="drop-down-cart">
        <div class="cart-group">
            <!-- "item"是陣列的每一筆資料 -->
            <!-- 用for迴圈把所有資料找出來 -->
            <div v-for="(item, index) in $cartListStore.$state.cartList " class="cart-item">
                <div class="cart-pic"><img :src="`src/assets/image/product/product_data/${item.product_pic1}`" alt="">
                </div>
                <div class="cart-info">
                    <div class="cart-text">
                        <p>{{ item.product_name }}</p>
                        <span>NT{{ item.price }}</span>
                    </div>
                    <div class="quality-trashcan">
                        <div id="num">
                            <button @click="proQuantity(item, 'minus')"> -</button>
                            <div>{{ item.quantity }}</div>
                            <button @click="proQuantity(item, 'add')"> +</button>
                        </div>
                        <div @click=" removeItem(item.id)" class="trash-can"><img src="@/assets/image/product/trash.svg"
                                alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 結帳按鈕 -->
        <router-link to="/ProductPayView">
            <cartButton :text="pay" />
        </router-link>
    </div>
</template>    
<script>
import { RouterLink } from 'vue-router';
import { show_product, deleteProduct, usecartListStore } from '@/stores/cart.js';
import cartButton from '@/components/button/CartButton.vue';

export default {
    //在組件使用pinia?
    setup() {
        const $cartListStore = usecartListStore();
        console.log($cartListStore.$state
        );
        return {
            $cartListStore,
        };
    },
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
        console.log(this.cartList);
        console.log(usecartListStore().$state.cartList);

    },
    methods: {
        proQuantity(item, change) {
            console.log(item.quantity);
            if (change == 'minus') {
                item.quantity--;
            } else {
                item.quantity++;
            }

            if (item.quantity < 1) {
                item.quantity = 1;
                return;
            }

        },
        //垃圾桶移除後,要刪掉索引值?
        removeItem(id) {
            // this.cartList.splice(index, 1);
            //this.cartList 陣列中刪除索引位置為 index 的元素，並且只刪除一個元素
            //splice(index, 1)=>用於在指定的索引位置開始刪除指定數量的元素
            deleteProduct(id)
        },
    },

}
</script>

<style scoped></style>