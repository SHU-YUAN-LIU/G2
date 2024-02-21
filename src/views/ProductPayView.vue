<template>
    <div class="product-pay-wrap">
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
                        <img :src="getpicurl(item.product_pic1)" alt="">
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
            <!-- -------------------------------------------------------------------------------->
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
                </div>
            </div>
            <div class="mem-info">
                <div class="mem-input">
                    <label for="">會員名稱</label>
                    <input type="text" value="王大明">
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
                    <input type="checkbox" name="approval" id="same-as-mem">
                    <label for="same-as-mem">同會員資料</label>
                </div>
            </div>
            <div class="mem-info">
                <div class="mem-input">
                    <label for="">收件人姓名</label>
                    <input type="text" placeholder="請輸入收件人姓名" v-model="orderData.receiver_name">
                </div>
                <div class="mem-input">
                    <label for="">收件人聯絡電話</label>
                    <input type="text" placeholder="請輸入購買人聯絡電話" v-model="orderData.receiver_phone">
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
                    <input type="radio" name="approval" id="pay-deliver" value="deliver" v-model="shipping">
                    <label for="pay-deliver">宅配</label>
                </div>
                <div class="shipping-box">
                    <input type="radio" name="approval" id="pay-family" value="family" v-model="shipping">
                    <label for="pay-family">全家(緯育門市)<span>桃園市中壢區復興路46號</span></label>
                </div>
                <div class="shipping-box">
                    <input type="radio" name="approval" id="pay-seven" value="seven" v-model="shipping">
                    <label for="pay-seven">7-11 (緯育門市)<span>桃園市中壢區復興路46號</span></label>
                </div>
                <div class="shipping-box">
                    <input type="radio" name="approval" id="pay-hi-life" value="hi-life" v-model="shipping">
                    <label for="pay-hi-life">萊爾富(緯育門市)<span>桃園市中壢區復興路46號</span></label>
                </div>
            </div>
            <!-- <button class="pay-btn">請選擇取貨門市</button> -->
            <div class="receive-address" v-if="shipping === 'deliver'">
                <label for="">收件人地址(如果是超商取貨則免填)</label>
                <input type="text" placeholder="購買人地址" v-model="orderData.receiver_address">
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
                    <input type="radio" name="approval" id="pay-credit" value="credit" v-model="payment_method">
                    <label for="pay-credit">信用卡</label>
                </div>
                <div class="shipping-box">
                    <input type="radio" name="approval" id="pay-ATM" value="credit" v-model="payment_method">
                    <label for="pay-ATM">虛擬ATM</label>
                </div>
            </div>
            <div class="pay-checkbox-group">
                <div class="pay-checkbox">
                    <input type="checkbox" name="approval" id="pay-agree-box">
                    <label for="pay-agree-box">同意商店服務條款/會員責任規範及個資聲明</label>
                </div>
                <div class="pay-checkbox">
                    <input type="checkbox" name="approval" id="pay-order-right">
                    <label for="pay-order-right">為保障彼此之權益，賣家在收到您的訂單後仍保有決定是否接受訂單及出貨與否之權利</label>
                </div>
            </div>
            <button class="pay-btn-now" @click="clearAllPro">立即結賬</button>
        </div>
        <Background_green :height="80" />
    </div>
</template>

<script>
import axios from 'axios';
import { show_product, changeqty } from '@/stores/cart.js';
import PayButton from '@/components/button/PayButton.vue';
import Background_green from "@/components/Background_green.vue";
export default {

    data() {
        return {
            cartList: [],//存購物車資料的陣列
            quantity: 1,//初始數量
            cart_total: [],//存總價格跟總項目陣列
            //把要送去資料庫存的物件用v-model放在orderInfo
            orderData: {
                member_no: '',//?
                receiver_name: '',
                receiver_phone: '',
                shipping: '',
                receiver_address: '',
                payment_method: '',
            }
        }
    },
    components: {
        PayButton,
        Background_green
    },
    created() {

        [this.cartList, this.cart_total] = show_product();
        console.log(show_product());
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

        //取得圖片路徑
        getpicurl(picname) {
            if (picname) {
                var url = `${import.meta.env.VITE_IMG_URL}/product/product_data/` + picname;
            } else {
                url = `${import.meta.env.VITE_IMG_URL}/product/errorpic.png`;
            }
            return url;
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


        //清空購物車並將資料儲存到資料庫
        clearAndSavePro() {
            this.clearAllPro();
            this.saveOrderToDatabase();
        },
        //清除購物車相關資料
        clearAllPro() {
            // 清除 localStorage 中的購物車相關資料
            localStorage.setItem('cart', JSON.stringify([]));

            //將購物車相關資料重設為空陣列
            this.cartList = [];

            //將總total歸零
            this.cart_total[0].total = 0;

            //將項目數輛歸零
            this.cart_total[0].listcount = 0;

            //將頁面跳轉至產品頁
            window.location.href = "/Product";
        },


        //將獲取的資料存入資料庫
        saveOrderToDatabase() {

            const tokenStr = localStorage.getItem('token');//從localstorage拿token
            let memberNo;//在if外面也宣告,以便在外部也能使用

            //檢查tokenStr是否存在
            if (tokenStr) {
                //將字串轉成json對象
                const tokenobj = JSON.parse(tokenStr);

                //從轉換過得json對象取得member_no
                memberNo = tokenobj.member_no;
            }

            const insertOrderData = {
                ...this.orderData,//寫...等於orderData裡面所有東西
                member_no: memberNo,//添加從localstorage的token取得的memeber_no
            }

            axios.post(`${import.meta.env.VITE_PHP_URL}` + "/front_productOrderInsert.php", insertOrderData)
                .then(res => {
                    //請求成功的處理
                    alert('您的訂單已送出')

                })
                .catch(error => {
                    console.error('您的訂單無法成功送出,請撥打03-0857878', error);
                });
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

