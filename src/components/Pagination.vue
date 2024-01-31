<template>
  <div>
    <div v-for="item in paginatedData" :key="item.product_no">
      {{ item.product_no }} - {{ item.product_name }}
    </div>

    <div class="pagination">
      <button v-if="currentPage > 1" @click="setCurrentPage(currentPage - 1)">
        ❮ </button>
      <button :key="currentPage" @click="setCurrentPage(currentPage)">{{ currentPage }}</button>
      <button v-if="currentPage < totalPages" @click="setCurrentPage(currentPage + 1)">❯</button>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'Pagination',
  setup() {
    const currentPage = ref(1);
    const pageSize = 5;
    const products = ref({ products: [] });  // 初始化為空物件
    const totalPages = computed(() => {
      return Math.ceil(products.value.products.length / pageSize);
    });
    const paginatedData = computed(() => {
      const start = (currentPage.value - 1) * pageSize;
      const end = start + pageSize;
      return products.value.products.slice(start, end);
    });

    const setCurrentPage = (page) => {
      currentPage.value = page;
    };

    // 使用 Axios 取得資料
    const fetchData = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_RESOURCE_URL}` + "/local_json/product_data.json");
        products.value = response.data;  // 確保 response.data 是物件
      } catch (error) {
        console.error('Error loading product data:', error);
      }
    };

    // 在組件被掛載後執行 fetchData
    onMounted(fetchData);

    return {
      currentPage,
      pageSize,
      products,
      totalPages,
      paginatedData,
      setCurrentPage,
    };
  },
};
</script>

<style>
.pagination {
  /* width: 500px;
  height: 500px; */
  /* background-color: antiquewhite; */
}
</style>
