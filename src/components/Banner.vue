<template>
    <img
    srcSet="/img/product_banner.svg"
    class="img"
    loading="lazy" 
    />
    <!-- loading="lazy" 是一個優化網頁性能的方式，特別適用於圖片較多或長頁面的情況，可以選擇要不要放。 -->
</template>    


<style scoped>
/* scoped 這個屬性的存在使得樣式只作用於當前的 Vue 元件，而不會影響到全局樣式。 */
    .img {
    aspect-ratio: 3.32; 
    /* 設置圖片的寬高比 */
    object-fit: contain;
    object-position: center;
    width: 100%;
    overflow: hidden;
    }
    @media (max-width: 768px) {
    .img {
        max-width: 100%;
      /* 當螢幕寬度小於或等於 768px 時，img 的最大寬度設置為 100%，使圖片在較小的屏幕上適應。 */
    }
    }
</style>