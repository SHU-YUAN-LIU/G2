<template>
    <div class="pay-wrap">
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
            <span>$1050</span>
        </div>
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

