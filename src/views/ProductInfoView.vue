<template>
    <div class="header"></div>
    <!-- 麵包屑 -->
    <Bread :page="proInfo" />
    <div class="pro_info_group">
        <!-- 右邊文字區 -->
        <div class="proText_group">
            <p>{{ iteminfo[0].product_name }}</p>
            <div class="proLine"></div>
            <span>
                {{ iteminfo[0].product_intro }}
            </span>
            <div class="pro-info-price">
                <span>建議售價</span>
                <span class="pro-nt">NT$ <span class="iteminfo-price">{{ iteminfo[0].price }}</span></span>
            </div>
            <div class="pro-num-state">供貨狀況: 尚有庫存</div>
            <div id="num">
                <button @click="if (count >= 1) { count -= 1 };"> -</button>
                <div>{{ count }}</div>
                <button @click="count += 1"> +</button>
                <!-- <button @click="changeqty($event, item.product_no, -1)"> -</button>
                <div>{{ item.quantity }}</div>
                <button @click="changeqty($event, item.product_no, 1)"> +</button> -->
            </div>
            <CartButton :text="addCart" :id=iteminfo.product_no :qty=count />
        </div>
        <!-- 左邊圖片區 -->
        <div class="proPic_group">
            <div class="bigPic">
                <img :src="getpicurl(iteminfo.product_pic1)" alt="">
            </div>
            <div class="littlePic">
                <div><img :src="getpicurl(iteminfo.product_pic1)" alt=""></div>
                <div><img :src="getpicurl(iteminfo.product_pic2)" alt=""></div>
                <div><img :src="getpicurl(iteminfo.product_pic3)" alt=""></div>
                <div><img :src="getpicurl(iteminfo.product_pic4)" alt=""></div>
            </div>
        </div>
    </div>
    <div class="pro_info_main">
        <div class="product_info_title">商品介紹</div>
        <p class="product_info_script">單一雙色的灰白定調，使用台灣獨有的創新環保布料，鐵灰與純白象徵超然的「意志」與「包容」的氣度。布料由台灣興采咖啡渣技術製成絲絨，表示永續環保的精神。</p>
        <div>
            <img src="/image/product/product_info_example1.png" alt="">
        </div>
        <div>
            <img src="/image/product/product_info_example2.png" alt="">
        </div>
        <div class="product_info_title">規格說明</div>
        <div class="product_info_title">SIDE GUIDE</div>
        <div>
            <img src="/image/product/product_size_example.png" alt="">
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Bread from '../components/Bread.vue'
import CommitButton from '@/components/button/commitButton.vue';
import CartButton from '@/components/button/CartButton.vue';
import { show_product, changeqty } from '@/stores/cart.js';
export default {
    components: {
        Bread,
        CommitButton,
        CartButton,
    },
    data() {
        return {
            proInfo: '官方商城',
            count: 0,
            iteminfo: null,// 儲存從資料庫獲取的產品資料
            addCart: "加入購物車",

        }
    },
    computed: {

    },
    created() {
        this.getOneProduct();
    },
    methods: {
        // 連json
        // axiosGetData() {
        //     var productId = this.$route.params.productId;
        //     axios.get(`${import.meta.env.VITE_RESOURCE_URL}` + "/local_json/product_data.json")
        //         .then(res => {
        //             console.log(res.data.products.find(product => product.product_no == productId));
        //             this.iteminfo = res.data.products.find(product => product.product_no == productId);
        //         })
        //         .catch(error => {
        //             console.error('Error fetching data:', error);
        //         });
        // },
        getpicurl(picname) {
            if (picname) {
                var url = `${import.meta.env.VITE_RESOURCE_URL}/image/product/product_data/` + picname;
            }
            else {
                url = `${import.meta.env.VITE_RESOURCE_URL}/image/product/errorpic.png`;
            }
            return url;
        },
        changeqty,
        show_product,
        changecartshow(event) {
            if (event.key == 'cart') {
                [this.cartList, this.cart_total] = show_product();
            }
        },

        //"單個"商品串聯資料庫
        getOneProduct() {
            // this.$route.params獲取路由中動態參數的寫法($route是回到router,params拿參數,productId是參數名)
            var productId = this.$route.params.productId;//.productId是index那裏的變數
            // 為了傳送資料給php所以要寫axios.post(url,發送的資料物件)
            axios.post(`${import.meta.env.VITE_PHP_URL}/front_productDataGetOne.php`, { product_no: productId })
                .then(response => {
                    // 從回應中取得資料 response.data.products，並將其傳遞給 oneProductData()
                    const oneProductData = response.data.oneProduct;//oneProduct名字要跟php一樣
                    this.iteminfo = oneProductData; // 將從資料庫獲取的資料賦值給 iteminfo
                    console.log(this.iteminfo)
                })
                .catch(error => {
                    console.log(error);
                });
        },
    },

}
</script>

<style></style>

