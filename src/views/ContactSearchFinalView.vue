<template>
    <!-- banner -->
    <div class="ContactSearchFinal_banner">
        <img src="/image/donate/bg_banner.png" alt="">
        <h1>我要捐款</h1>
    </div>
    <!-- 麵包屑 -->
    <Bread :page="text" />
    <!-- 陳情查詢結果 -->
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
                <p>呼籲政府加強環保政策，共同守護家園！</p>
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
            <div class="triangle-group">
                <p>陳情內容</p>
                <div class="triangle"></div>
            </div>
            <span>
                我是一位關心國家發展的普通公民，透過這封陳情信，我希望能就一些我認為重要的議題向貴黨提出建議和期望。

                首先，環境保護是我們共同的責任。隨著工業化進程加速，環境污染問題日益嚴重，氣候變化對我們的生存環境造成了威脅。我希望貴黨能夠積極制定並實施更嚴格的環保政策，加強對污染企業的監管，鼓勵綠色能源的發展，以保護我們的地球家園。

                其次，教育是國家發展的基石。我們的下一代需要受到優質的教育，才能有更好的未來。我建議貴黨加大對教育的投資，改善教育設施，提高教師待遇，並推動教育改革，使教育更加公平、包容，能夠真正培養出具有創新精神和批判思維的人才。

                最後，社會公平是我們追求的目標。貧富差距的擴大和社會不公的現象需要引起我們的重視。我希望貴黨能夠制定更多的社會福利政策，幫助弱勢群體脫貧致富，促進社會公平和諧。

                在此，我衷心期盼貴黨能夠聆聽人民的聲音，以實際行動回應我們的期望，為國家的長遠發展努力奮鬥。感謝貴黨一直以來的努力和付出，期待未來更加美好的社會！
            </span>

        </div>
    </div>
    <Background_green :height="100" />
</template>



<script>
import Bread from '../components/Bread.vue'
import commitButton from '../components/button/commitButton.vue'
import Background_green from "@/components/Background_green.vue";

export default {
    components: {
        Bread,
        commitButton,
        Background_green

    },
    data() {
        return {
            text: '聯絡我們/陳情案件查詢結果',


        }
    },
    mounted() {
        document.title = "青年進補黨 - 陳情案件查詢結果";
    },
}
</script>

<style scoped lang="scss"></style>