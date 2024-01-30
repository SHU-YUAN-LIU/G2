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
        <div class="pay-info">
            <div class="pay-product">
                <div class="pay-pic">
                    <img src="@/assets/image/product/product_data/product10_pic1.png" alt="">
                </div>
                <span>挺進補•鴨舌帽-漆黑M</span>
            </div>
            <span>$1000</span>
            <div id="num">
                <button> -</button>
                <div>0</div>
                <button> +</button>
            </div>
            <div class="pay-delete">
                <span>$1000</span>
                <div class="trash-can"><img src="@/assets/image/product/trash.svg" alt="">
                </div>
            </div>
        </div>
        <hr>
        <div class="pay-detail">
            <span>訂單金額</span>
            <span>$1000</span>
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
            <span>購物車合計1項商品</span>
            <span>應付總額</span>
            <span class="final-num">$1050</span>
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
import axios from 'axios';

export default {
    components: {


    },
    data() {
        return {

        }
    },
    computed: {

    },
    created() {

    },
    methods: {

    },

}
</script>

<style></style>

