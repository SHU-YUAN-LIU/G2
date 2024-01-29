<template>
    <div>
        <div v-for="item in paginatedData" :key="item.product_no">
            {{ item.product_no }} - {{ item.product_name }}
        </div>

        <div class="pagination">
            <button v-for="page in totalPages" :key="page" @click="setCurrentPage(page)">
                {{ page }}
            </button>
        </div>
    </div>
</template>
  
<script>
import { ref, computed } from 'vue';

export default {
    name: 'Pagination',
    setup() {
        const currentPage = ref(1);
        const pageSize = 5;

        const products = ref([
            {
                "product_no": "1",
                "product_name": "挺進補•帽T-淺灰M",
                "product_class_no": "1",
                "product_intro": "單一雙色的灰白定調，鐵灰與純白象徵超然的「意志」與「包容」的氣度。使用台灣獨有的創新環保布料，布料由台灣興采咖啡渣技術製成絲絨，表示永續環保的精神。單一雙色的灰白定調，鐵灰與純白象徵超然的「意志」與「包容」的氣度。使用台灣獨有的創新環保布料，布料由台灣興采咖啡渣技術製成絲絨，表示永續環保的精神。",
                "info": "Product 1 description",
                "price": 3600,
                "status": "A",
                "product_pic1": "product1_pic1.png",
                "product_pic2": "",
                "product_pic3": "",
                "product_pic4": ""
            },
            {
                "product_no": "2",
                "product_name": "挺進補•素T-淺灰M",
                "product_class_no": "1",
                "product_intro": "product 2 script",
                "info": "Product 2 description",
                "price": 3600,
                "status": "A",
                "product_pic1": "product2_pic1.png",
                "product_pic2": "",
                "product_pic3": "",
                "product_pic4": ""
            },
            {
                "product_no": "2",
                "product_name": "挺進補•素T-淺灰M",
                "product_class_no": "1",
                "product_intro": "product 2 script",
                "info": "Product 2 description",
                "price": 3600,
                "status": "A",
                "product_pic1": "product2_pic1.png",
                "product_pic2": "",
                "product_pic3": "",
                "product_pic4": ""
            },
            {
                "product_no": "2",
                "product_name": "挺進補•素T-淺灰M",
                "product_class_no": "1",
                "product_intro": "product 2 script",
                "info": "Product 2 description",
                "price": 3600,
                "status": "A",
                "product_pic1": "product2_pic1.png",
                "product_pic2": "",
                "product_pic3": "",
                "product_pic4": ""
            },
            {
                "product_no": "2",
                "product_name": "挺進補•素T-淺灰M",
                "product_class_no": "1",
                "product_intro": "product 2 script",
                "info": "Product 2 description",
                "price": 3600,
                "status": "A",
                "product_pic1": "product2_pic1.png",
                "product_pic2": "",
                "product_pic3": "",
                "product_pic4": ""
            },
            {
                "product_no": "2",
                "product_name": "挺進補•素T-淺灰M",
                "product_class_no": "1",
                "product_intro": "product 2 script",
                "info": "Product 2 description",
                "price": 3600,
                "status": "A",
                "product_pic1": "product2_pic1.png",
                "product_pic2": "",
                "product_pic3": "",
                "product_pic4": ""
            },
            {
                "product_no": "2",
                "product_name": "挺進補•素T-淺灰M",
                "product_class_no": "1",
                "product_intro": "product 2 script",
                "info": "Product 2 description",
                "price": 3600,
                "status": "A",
                "product_pic1": "product2_pic1.png",
                "product_pic2": "",
                "product_pic3": "",
                "product_pic4": ""
            },
            {
                "product_no": "2",
                "product_name": "挺進補•素T-淺灰M",
                "product_class_no": "1",
                "product_intro": "product 2 script",
                "info": "Product 2 description",
                "price": 3600,
                "status": "A",
                "product_pic1": "product2_pic1.png",
                "product_pic2": "",
                "product_pic3": "",
                "product_pic4": ""
            },
        ]);

        const totalPages = computed(() => {
            return Math.ceil(products.value.length / pageSize);
        });

        const paginatedData = computed(() => {
            const start = (currentPage.value - 1) * pageSize;
            const end = start + pageSize;
            return products.value.slice(start, end);
        });

        const setCurrentPage = (page) => {
            currentPage.value = page;
        };

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
    width: 500px;
    height: 500px;
    background-color: antiquewhite;
}
</style>
  