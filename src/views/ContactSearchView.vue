<template>
    <div class="wrap">
        <div class="contect">
            <div class="contect_banner">
                <img src="@/assets/image/contect/contectSearch_banner.png" alt="">
                <h1>陳情案件查詢</h1>
            </div>
            <!-- 麵包屑 -->
            <Bread :page="dog" />
        </div>
        <!-- 內容 -->
        <div class="contect_info">


            <div class="con_input_group">

                <div class="con_input">
                    <p>案件宗旨</p>
                    <input type="text" placeholder="請輸入案件宗旨">
                    <p>案件內容</p>
                    <input class="con_text" type="text" placeholder="請輸入100字以內">
                </div>
            </div>
            <commitButton :commitButton="commit" @click="showSuccess" />
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
            dog: '聯絡我們/陳情案件查詢',

        }
    },

}
</script>

<style scoped lang="scss"></style>