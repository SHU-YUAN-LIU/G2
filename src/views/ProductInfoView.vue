<template>
    <div class="header"></div>
    <!-- 麵包屑 -->
    <Bread :page="proInfo" />
    <div class="pro_info_group">
        <!-- 右邊文字區 -->
        <div class="proText_group">
            <p>{{ iteminfo.product_name }}</p>
            <div class="proLine"></div>
            <span>
                {{ iteminfo.product_intro }}
            </span>
            <span>建議售價</span>
            <span>NT$ {{ iteminfo.price }}</span>
            <span>供貨狀況: 尚有庫存</span>
            <div id="num">
                <button @click="count -= 1"> -</button>
                <div>{{ count }}</div>
                <button @click="count += 1"> +</button>
            </div>
            <CartButton :id= iteminfo.product_no :qty= count />
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
</template>

<script>
import axios from 'axios';
import Bread from '../components/Bread.vue'
import CommitButton from '@/components/button/commitButton.vue';
import CartButton from '@/components/button/cartButton.vue';
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
            iteminfo: [],
        }
    },
    computed: {

    },
    created() {
        this.axiosGetData();
    },
    methods: {
        axiosGetData() {
            var productId = this.$route.params.productId;
            axios.get("../../product_data.json")
                .then(res => {
                    console.log(res.data.products.find(product => product.product_no == productId));
                    this.iteminfo = res.data.products.find(product => product.product_no == productId);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        },
        getpicurl(picname) {
            var url = '../src/assets/image/product/product_data/' + picname;
            return url;
        }
    },

}
</script>

<style></style>

