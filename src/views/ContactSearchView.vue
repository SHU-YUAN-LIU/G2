<template>
    <!-- banner -->
    <!-- 解析度有點低要換 -->
    <banner :bannerTitle="bannerTitle" :bannerPic="bannerPic" />
    <!-- 麵包屑 -->
    <Bread :page="text" />
    <div class="contect_search">
        <div class="searchInput">
            <label for="">請輸入案件編號</label>
            <input type="text">
        </div>
        <div class="searchInput">
            <label for="">電子信箱</label>
            <input type="text" placeholder="請輸入您的電子信箱">
        </div>
        <router-link :to="{ path: '/contact_searchFinal' }">
            <commitButton :commitButton="check" />
        </router-link>
    </div>
</template>



<script>
import Bread from '../components/Bread.vue'
import commitButton from '../components/button/commitButton.vue'
import Banner from '../components/Banner.vue'

export default {
    components: {
        Bread,
        commitButton,
        Banner,

    },
    data() {
        return {
            text: '聯絡我們/陳情案件查詢',
            bannerTitle: '陳情案件查詢',
            bannerPic: 'src/assets/image/contect/contectSearch_banner.png',
            check: '確認送出',

        }
    },
    mounted() {
        document.title = "青年進補黨 - 陳情案件查詢";
    },
}
</script>

<style scoped lang="scss"></style>