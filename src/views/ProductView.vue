<template>
    <div class="header"></div>
    <!-- banner -->
    <banner :bannerTitle="bannerTitle" :bannerPic="bannerPic" />
    <!-- 麵包屑 -->
    <Bread :page="pro" />

    <div class="pro_wrap">
        <div class="pro-top">
            <!-- 分類篩選 -->
            <select v-model="currentCategory" @change="changeDis" class="pro-class">
                <option selected value="ALL">類別</option>
                <option v-for="types in product_class_group" :value="types.product_class_no">{{ types.product_class_name }}
                </option>
            </select>
            <!-- 關鍵字篩選 -->
            <input type="text" width="100px" placeholder="搜尋關鍵字" v-model.trim="search" @input="changeDis">
            <input type="number" width="100px" v-model="min" @input="changeDis">
            <input type="number" width="100px" v-model="max" @input="changeDis">
        </div>
        <!-- 商品卡片 -->
        <div class="product">
            <div class="pro_card_group">
                <div class="card_group">
                    <div v-for="(item, index) in allProducts">
                        <ProCard :imgSrc="defaultSrc + item.product_pic1" :name="item.product_name" :price="item.price"
                            :num="index" :id="item.product_no" />
                    </div>
                </div>
            </div>
        </div>
        <!-- 分頁 -->
        <div>
            <!-- <Pagination /> -->
        </div>
    </div>
    <Background_green :height="100" />
</template>
  
<script>
import axios from 'axios';
import ProCard from '../components/ProCard.vue'
import Banner from '../components/Banner.vue'
import Bread from '../components/Bread.vue'
import Pagination from '../components/Pagination.vue'
// import { products } from '@/assets/local_json/product_data.json';
import Background_green from "@/components/Background_green.vue";
export default {
    components: {
        ProCard,
        Banner,
        Bread,
        Pagination,
        Background_green
    },
    data() {
        return {
            // defaultSrc: 'https://tibamef2e.com/chd103/g2/image/ShopImage/',
            defaultSrc: `${import.meta.env.VITE_RESOURCE_URL}/image/product/product_data/`,
            search: '',
            allPro: [],
            allProducts: [],
            product_class_group: [],
            category: [],
            currentCategory: 'ALL',
            max: 1000000,
            min: 0,
            bannerTitle: '官方商城',
            bannerPic: `${import.meta.env.VITE_RESOURCE_URL}/image/product/product_banner.png`,

            // 存儲從資料庫獲取的產品資料
            allProducts: []
        }
    },
    mounted() {
        document.title = '官方商城';

    },
    created() {
        this.getProducts();
    },
    methods: {
        changeDis() {

            this.allProducts = this.allProducts.filter((item) => {
                return item.product_name.includes(this.search) && item.price > this.min && item.price < this.max && (item.product_class_no == this.currentCategory || this.currentCategory == "ALL");
            })
            // }


        },
        //分類
        addCategory() {
            for (let item of this.allProducts) {
                if (!this.category.includes(item.product_class_no)) {
                    this.category.push(item.product_class_no);
                }
            }
        },

        //串聯資料庫
        getProducts() {
            axios.get(`${import.meta.env.VITE_PHP_URL}/front_product.php`)
                .then(response => {
                    // 從回應中取得資料 response.data.products，並將其傳遞給 showProducts()
                    const products = response.data.products;
                    this.showProducts(products);
                    console.log(response.data)
                })
                .catch(error => {
                    console.log(error);
                });
        },
        showProducts(products) {
            console.log(products);
            this.allProducts = products;
        }
    },

}
</script>
  
<style></style>
  
  