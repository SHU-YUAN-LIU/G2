<template>
    <!-- 麵包屑 -->
    <Bread :page="text" />
    <div class="ContactSearchFinal_banner">
        <img src="../assets/image/donate/bg_banner.png" alt="">
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