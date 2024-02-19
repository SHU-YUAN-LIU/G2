<template>
    <div class="product">
        <div class="header"></div>
        <!-- banner -->
        <banner :bannerTitle="bannerTitle" :bannerPic="bannerPic" />
        <!-- 麵包屑 -->
        <Bread :page="'pro'" />

        <div class="pro_wrap">
            <div class="pro-top">
                <!-- 分類篩選 -->
                <select v-model="currentCategory" @change="changeDis" class="pro-class">
                    <option value="全部商品">全部商品</option>
                    <option v-for="types in product_class_group" :value="types.product_class_no">{{ types.product_class }}
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
                        <div v-for="(item, index) in filteredProducts" :key="index">
                            <ProCard :imgSrc="getproductpic(item.product_pic1)" :name="item.product_name"
                                :price="item.price" :num="index" :id="item.product_no" />
                        </div>
                    </div>
                </div>
                <!-- 分頁 -->
                <div>
                    <!-- <Pagination /> -->
                </div>
            </div>
            <Background_green :height="'200'" />
        </div>
    </div>
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
            bannerTitle: '官方商城',
            bannerPic: `${import.meta.env.VITE_RESOURCE_URL}/image/product/product_banner.png`,
            // defaultSrc: `${import.meta.env.VITE_RESOURCE_URL}/image/product/product_data/`,
            search: '',
            product_class_group: [],// 存儲從資料庫獲取的產品分類資料
            category: [],//儲存商品的分類編號
            filteredProducts: [],//新增一個暫存變數來存篩選後的商品資料
            currentCategory: '全部商品',
            max: 1000000,
            min: 0,

            allProducts: [] // 存儲從資料庫獲取的產品資料
        }
    },
    mounted() {
        document.title = '官方商城';

    },
    created() {
        this.getProducts();
        // this.getProductClass();
    },
    methods: {

        changeDis() {

            // 基於 filteredProducts 進行篩選
            this.filteredProducts = this.allProducts.filter((item) => {
                return item.product_name.includes(this.search) && item.price > this.min && item.price < this.max && (item.product_class_no == this.currentCategory || this.currentCategory == "全部商品");
            });
            // console.log(this.filteredProducts);
            // 將篩選結果賦值給 allProducts
            // this.allProducts = this.filteredProducts;
            // this.allProducts = this.allProducts.filter((item) => {
            //     return item.product_name.includes(this.search) && item.price > this.min && item.price < this.max && (item.product_class_no == this.currentCategory || this.currentCategory == "全部商品");
            // })


        },
        //把分類加進去
        addCategory() {
            for (let item of this.allProducts) {
                if (!this.category.includes(item.product_class_no)) {
                    this.category.push(item.product_class_no);
                }
            }
        },

        //商品串聯資料庫
        getProducts() {
            axios.get(`${import.meta.env.VITE_PHP_URL}/front_product.php`)
                .then(response => {
                    // 從回應中取得資料 response.data.products，並將其傳遞給 showProducts()
                    const products = response.data.products;
                    // this.showProducts(products);
                    this.allProducts = products;
                    this.filteredProducts = products;

                    //把從資料庫撈到的資料存到localstorage裡
                    //轉為字串(localStorage只能存字串,不能存陣列)
                    localStorage.setItem('allProducts', JSON.stringify(this.allProducts));
                    this.getProductClass();

                })
                .catch(error => {
                    console.log(error);
                });
        },


        //取商品網址
        getproductpic(src) {
            return `${import.meta.env.VITE_RESOURCE_URL}image/product/product_data/` + src;
        },


        //商品"分類"串聯資料庫
        getProductClass() {
            axios.get(`${import.meta.env.VITE_PHP_URL}/front_product_class.php`)
                .then(response => {

                    const productClass = response.data.productClass;
                    this.product_class_group = productClass;
                    // console.log(this.product_class_group);
                })
                .catch(error => {
                    console.log(error);
                });
        },

    },

}
</script>
  
<style></style>
  
  