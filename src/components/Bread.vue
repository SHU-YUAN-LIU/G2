<template>
    <div class="bread">
        <!-- <ul>
            <li>
                <RouterLink to="/">首頁</RouterLink> / {{ page }}
            </li>
        </ul> -->

        <ul>
            <!-- 用v-for來渲染麵包屑內容 -->
            <!-- 被點擊時將索引值作為參數傳到routeTo函式 -->
            <li v-for="(breadcrumb, idx) in breadcrumbList" :key="idx" @click="routeTo(idx)">
                {{ breadcrumb.name }}
            </li>
        </ul>

    </div>
</template>
<script>
export default {
    name:'Breadcrumb',
    data() {
        return {
            // 建立一個放麵包屑內容的空陣列
            breadcrumbList:[],
        }
    },
    props: ['page',],
    mounted(){
        // 當元件掛載時叫用updateList函式
        this.updateList()
    },
    watch:{
        // 監聽$route的變化, 路由變化時也叫用updateList
        '$route'(){
            this.updateList();
        },
    },
    methods: {
        // 處理當點擊麵包屑連結時的事件
        routeTo(pRouteTo){
            // 如果被點擊的麵包屑文字存在link屬性, 則把路徑導到link內紀錄的連結
            if (this.breadcrumbList[pRouteTo].link) {
                // $router用來管理路由(連結路徑)
                // $router.push可以把當前路由切換到指定路徑
                this.$router.push(this.breadcrumbList[pRouteTo].link)
            }
        },
        
        updateList(){
            this.breadcrumbList = this.$route.meta.breadcrumb;
            // 在畫面顯示對應麵包屑內容
            // 麵包屑內容寫在index.js內的meta物件=>breadcrumb陣列裡
        },

    },

}
</script>
<style lang="scss"></style>
