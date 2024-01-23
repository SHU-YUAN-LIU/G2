<template>
    <div class="banner">
        <img :src="bannerPic">
        <h1>{{ bannerTitle }}</h1>
    </div>
    <!-- <img srcSet="/src/assets/image/product/2.jpg" class="img" loading="lazy" /> -->
    <!-- loading="lazy" 是一個優化網頁性能的方式，特別適用於圖片較多或長頁面的情況，可以選擇要不要放。 -->
</template>    
<script>
export default {
    data() {
        return {

        }
    },
    props: ['bannerTitle', 'bannerPic']

}
</script>

<style scoped>
/* scoped 這個屬性的存在使得樣式只作用於當前的 Vue 元件，而不會影響到全局樣式。 */

@media (max-width: 768px) {
    .img {
        max-width: 100%;
        /* 當螢幕寬度小於或等於 768px 時，img 的最大寬度設置為 100%，使圖片在較小的屏幕上適應。 */
    }
}
</style>