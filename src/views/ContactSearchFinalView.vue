<template>
    <!-- banner -->
    <div class="ContactSearchFinal_banner">
        <img src="../assets/image/donate/bg_banner.png" alt="">
    </div>
    <!-- 麵包屑 -->
    <Bread :page="text" />
    <div class="searchFinal-wrap">
        <div class="searchF-title">
            <div class="text-group">
                <span>陳情編號</span>
                <p>FRE1234567890</p>
            </div>
            <div class="text-group">
                <span>陳情日期</span>
                <p>2024/01/01</p>
            </div>
            <div class="text-group">
                <span>陳情主旨</span>
                <p>我家狗狗沒飯吃,
                    我家狗狗沒飯吃</p>
            </div>
            <div class="text-group">
                <span>陳情狀態</span>
                <div class="searchF-process">
                    <div>已受理</div>
                    <div>處理中</div>
                    <div>已回覆</div>
                </div>
            </div>
        </div>
        <hr>
        <div class="searchF-content">
            <p>陳情內容</p>
            <div></div>
            <span>
                我家狗狗沒飯吃，這情況讓我深感擔憂與無助。寵物是家庭的一部分，他們的幸福與健康對我們來說至關重要。面對這樣的困境，我呼籲任何能提供幫助的人士伸出援手。不論是捐贈狗食、提供經濟援助，或是提供寵物照顧的資源，所有的幫助都是寶貴的。
                此外，我也建議成立一個社區基金，專門用於支持像我這樣的寵物主人，特別是在經濟困難時期。讓我們攜手合作，為我們愛護的動物創造一個更加友善和支持的環境。謝謝大家的關注和支持，讓我們一起為這些無聲的生命發聲。
            </span>

        </div>
    </div>
</template>



<script>
import Bread from '../components/Bread.vue'
import commitButton from '../components/button/commitButton.vue'


export default {
    components: {
        Bread,
        commitButton,

    },
    data() {
        return {
            text: '聯絡我們/陳情案件查詢結果',


        }
    },

}
</script>

<style scoped lang="scss"></style>