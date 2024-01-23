<template>
    <div class="header"></div>
    <!-- 麵包屑 -->
    <Bread :page="proInfo" />
    <div class="pro_info_group">
        <!-- 右邊文字區 -->
        <div class="proText_group">
            <p>內刷毛連帽T(鐵灰)-L</p>
            <div class="proLine"></div>
            <span>
                單一雙色的灰白定調，鐵灰與純白象徵超然的「意志」與「包容」的氣度。使用台灣獨有的創新環保布料，布料由台灣興采咖啡渣技術製成絲絨，表示永續環保的精神。單一雙色的灰白定調，鐵灰與純白象徵超然的「意志」與「包容」的氣度。使用台灣獨有的創新環保布料，布料由台灣興采咖啡渣技術製成絲絨，表示永續環保的精神。
            </span>
            <span>建議售價</span>
            <span>NT$ 3890</span>
            <span>供貨狀況: 尚有庫存</span>
            <div id="num">
                <button @click="count -= 1"> -</button>
                <div>{{ count }}</div>
                <button @click="count += 1"> +</button>
            </div>
            <CartButton />
        </div>
        <!-- 左邊圖片區 -->
        <div class="proPic_group">
            <div class="bigPic">
                <img src="../assets/image/product/proInfo_1.png" alt="">
            </div>
            <div class="littlePic">
                <div><img src="../assets/image/product/proInfo_1.png" alt=""></div>
                <div><img src="../assets/image/product/proInfo_2.png" alt=""></div>
                <div><img src="../assets/image/product/proInfo_3.png" alt=""></div>
                <div><img src="../assets/image/product/proInfo_4.png" alt=""></div>
            </div>
        </div>
    </div>
    <!-- 測試 -->
    <!-- <div class="test">
        <span>投票倒數</span>
        <div class="right">
            <div>
                <span>15</span>
                <span>天</span>
            </div>
            <div>
                <span>02</span>
                <span>小時</span>
            </div>
            <div>
                <span>17</span>
                <span>分鐘</span>
            </div>
            <div>
                <span>30</span>
                <span>秒</span>
            </div>
        </div>
    </div> -->
</template>

<script>
import axios from 'axios';
import Bread from '../components/Bread.vue'
import CommitButton from '@/components/button/commitButton.vue';
import CartButton from '@/components/button/CartButton.vue';
export default {
    components: {
        Bread,
        CommitButton,
        CartButton,
    },
    data() {
        return {
            proInfo: '官方商城',
            count: 0,

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

