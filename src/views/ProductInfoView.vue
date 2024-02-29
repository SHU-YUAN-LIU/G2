<template>
    <div class="pro-info-wrap">
        <!-- <div class="header"></div> -->
        <!-- 麵包屑 -->
        <!-- <Bread :page="proInfo" /> -->
        <div class="pro_info_group">
            <!-- 右邊文字區 -->
            <div class="proText_group">
                <div class="proText-title">
                    <p>{{ iteminfo[0].product_name }}</p>
                    <div class="proLine"></div>
                    <span>
                        {{ iteminfo[0].product_intro }}
                    </span>
                </div>
                <div class="proText-content">
                    <div class="pro-info-price">
                        <span>建議售價</span>
                        <span class="pro-nt">NT$ <span class="iteminfo-price">{{ iteminfo[0].price }}</span></span>
                    </div>
                    <div class="have-pro">
                        <div class="pro-num-state">供貨狀況: 尚有庫存</div>
                        <div id="num">
                            <button @click="if (count >= 1) { count -= 1 };"> -</button>
                            <div>{{ count }}</div>
                            <button @click="count += 1"> +</button>
                        </div>
                    </div>
                    <CartButton :text="addCart" :id=iteminfo[0].product_no :qty=count />
                </div>
            </div>
            <!-- 左邊圖片區 -->
            <div class="proPic_group">
                <div class="bigPic">
                    <img v-if="showBig == 1" :src="getpicurl(iteminfo[0].product_pic1)" alt="">
                    <img v-if="showBig == 2" :src="getpicurl(iteminfo[0].product_pic2)" alt="">
                    <img v-if="showBig == 3" :src="getpicurl(iteminfo[0].product_pic3)" alt="">
                    <img v-if="showBig == 4" :src="getpicurl(iteminfo[0].product_pic4)" alt="">
                </div>
                <div class="littlePic">
                    <div @click="showBig = 1"><img :src="getpicurl(iteminfo[0].product_pic1)" alt=""></div>
                    <div @click="showBig = 2"><img :src="getpicurl(iteminfo[0].product_pic2)" alt=""></div>
                    <div @click="showBig = 3"><img :src="getpicurl(iteminfo[0].product_pic3)" alt=""></div>
                    <div @click="showBig = 4"><img :src="getpicurl(iteminfo[0].product_pic4)" alt=""></div>
                </div>
            </div>
        </div>
        <div class="pro_info_main">
            <div class="product_info_title">商品介紹</div>
            <p class="product_info_script">{{ iteminfo[0].info }}</p>
            <div class="product_info_title_pic">
                <img :src="getpicurl(iteminfo[0].product_intro_pic1)" alt="">
            </div>
            <div class="product_info_title_pic">
                <img :src="getpicurl(iteminfo[0].product_intro_pic2)" alt="">
            </div>
            <div class="product_info_title">規格說明</div>
            <div class="product_info_title_pic">
                <img :src="getpicurl(iteminfo[0].product_size_pic1)" alt="">
            </div>
        </div>
        <Background_green :height="'80'" />
    </div>
</template>

<script>
import axios from 'axios';
import Bread from '../components/Bread.vue'
import CommitButton from '@/components/button/commitButton.vue';
import CartButton from '@/components/button/CartButton.vue';
import Background_green from '@/components/Background_green.vue';
import { show_product, changeqty } from '@/stores/cart.js';
export default {
    components: {
        Bread,
        CommitButton,
        CartButton,
        Background_green,
    },
    data() {
        return {
            proInfo: '官方商城',
            count: 1,
            iteminfo: [{}],//初始化第一個物件
            addCart: "加入購物車",
            showBig: 1,
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
                var url = `${import.meta.env.VITE_IMG_URL}/product/product_data/` + picname;
            }
            else {
                url = `${import.meta.env.VITE_IMG_URL}/product/errorpic.png`;
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
                    this.iteminfo = response.data.oneProduct;//oneProduct名字要跟php一樣
                })
                .catch(error => {
                    console.log(error);
                });
        },
    },
    //refs有點像是綁定id
}
</script>

<style></style>

