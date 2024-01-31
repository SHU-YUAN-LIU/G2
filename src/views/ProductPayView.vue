<template>
    <div class="pay-wrap">
        <!-- 1.購物車內容 -->
        <div class="pay-title">
            <div class="pay-title-group">
                <div class="title-num">1</div>
                <span>購物車內容</span>
            </div>
            <p>單位 Unit：新台幣 NTD</p>
        </div>
        <div class="pay-bar">
            <p>商品明細</p>
            <p>單價</p>
            <p>數量</p>
            <p>小計</p>
        </div>
        <div v-for="(item, index) in cartList " class="pay-info" :key="item.product_no">
            <div class="pay-product">
                <div class="pay-pic">
                    <img :src="`https://tibamef2e.com/chd104/g2/front/image/product/product_data/${item.product_pic1}`" alt="">
                </div>
                <span>{{ item.product_name }}</span>
            </div>
            <span>NT{{ item.price }}</span>
            <div id="num">
                <button @click="changeqty($event, item.product_no, -1)"> -</button>
                <div>{{ item.quantity }}</div>
                <button @click="changeqty($event, item.product_no, 1)"> +</button>
            </div>
            <div class="pay-delete">
                <span>${{ item.quantity * item.price }}</span>
                <div @click=" changeqty($event, item.product_no, -(item.quantity))" class="trash-can"><img
                        src="/image/product/trash.svg" alt="">
                </div>
            </div>
        </div>
        <!-- ------------------------------------------------------------------------------ -->
        <hr>
        <div class="pay-detail">
            <span>訂單金額</span>
            <span>$ {{ cart_total[0].total }}</span>
        </div>
        <div class="pay-detail">
            <span>運費</span>
            <span>+$60</span>
        </div>
        <div class="pay-detail">
            <span>使用點數折抵(持有點數：10點)</span>
            <span>點數折抵</span>
            <span>-$10</span>
        </div>
        <hr>
        <div class="pay-detail">
            <span>購物車合計{{ cart_total[0].listcount }}項商品</span>
            <span>應付總額</span>
            <span class="final-num">${{ cart_total[0].total + 60 - 10 }}</span>
        </div>
        <!-- 2.會員資料 -->
        <div class="pay-title">
            <div class="pay-title-group">
                <div class="title-num">2</div>
                <span>會員資料</span>
                <input type="checkbox" name="approval">
                以下自動帶入會員資料
            </div>
        </div>
        <div class="mem-info">
            <div class="mem-input">
                <label for="">會員名稱</label>
                <input type="text" placeholder="王大明">
            </div>
            <div class="mem-input">
                <label for="">會員電話</label>
                <input type="text" placeholder="0927384773">
            </div>
            <div class="mem-input">
                <label for="">會員信箱</label>
                <input type="text" placeholder="andy123@yahoo.com.tw">
            </div>
            <div class="mem-input">
                <label for="">會員地址</label>
                <input type="text" placeholder="桃園市中壢區復興路46號9樓">
            </div>

        </div>
        <!-- 3.收件人資料 -->
        <div class="pay-title">
            <div class="pay-title-group">
                <div class="title-num">3</div>
                <span>收件人資料</span>
                <input type="checkbox" name="approval">
                同會員資料
            </div>
        </div>
        <div class="mem-info">
            <div class="mem-input">
                <label for="">收件人姓名</label>
                <input type="text" placeholder="請輸入收件人姓名">
            </div>
            <div class="mem-input">
                <label for="">收件人聯絡電話</label>
                <input type="text" placeholder="請輸入購買人聯絡電話">
            </div>
        </div>
        <!-- 4.運送方式 -->
        <div class="pay-title">
            <div class="pay-title-group">
                <div class="title-num">4</div>
                <span>運送方式</span>
            </div>
        </div>
        <div class="shipping-box-group">
            <div class="shipping-box">
                <input type="radio" name="approval">
                宅配
            </div>
            <div class="shipping-box">
                <input type="radio" name="approval">
                全家取貨(先付款)
            </div>
            <div class="shipping-box">
                <input type="radio" name="approval">
                7-11 取貨(先付款)
            </div>
            <div class="shipping-box">
                <input type="radio" name="approval">
                萊爾富取貨(先付款)
            </div>
        </div>
        <button class="pay-btn">請選擇取貨門市</button>
        <div class="receive-address">
            <label for="">收件人地址(如果是超商取貨則免填)</label>
            <input type="text" placeholder="購買人地址， 例：桃園市中壢區復興路46號9樓">
        </div>
        <!-- 5.付款方式 -->
        <div class="pay-title">
            <div class="pay-title-group">
                <div class="title-num">5</div>
                <span>付款方式</span>
            </div>
        </div>
        <div class="shipping-box-group">
            <div class="shipping-box">
                <input type="radio" name="approval">
                信用卡
            </div>
            <div class="shipping-box">
                <input type="radio" name="approval">
                虛擬ATM
            </div>
        </div>
        <div class="pay-checkbox-group">
            <div class="pay-checkbox">
                <input type="checkbox" name="approval">
                同意商店服務條款/會員責任規範及個資聲明
            </div>
            <div class="pay-checkbox">
                <input type="checkbox" name="approval">
                為保障彼此之權益，賣家在收到您的訂單後仍保有決定是否接受訂單及出貨與否之權利
            </div>
        </div>
        <button class="pay-btn-now">立即結賬</button>
    </div>
</template>

<script>
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
        },
        getpicurl(picname) {
            if (picname) {
                var url = `${import.meta.env.VITE_RESOURCE_URL}/image/product/product_data/` + picname;
            }
            else {
                url = `${import.meta.env.VITE_RESOURCE_URL}/image/product/errorpic.png`;
            }
            return url;
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

<style></style>

