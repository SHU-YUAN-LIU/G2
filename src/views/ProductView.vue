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
          <div v-for="(item, index) in disPro">
            <ProCard :imgSrc="defaultSrc + item.product_pic1" :name="item.product_name" :price="item.price" :num="index"
              :id="item.product_no" />
          </div>
        </div>
      </div>
    </div>
    <!-- 分頁 -->
    <div>
      <Pagination />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ProCard from '../components/ProCard.vue'
import Banner from '../components/Banner.vue'
import Bread from '../components/Bread.vue'
import Pagination from '../components/Pagination.vue'
import { products } from '@/assets/local_json/product_data.json';
export default {
  components: {
    ProCard,
    Banner,
    Bread,
    Pagination,
  },
  data() {
    return {
      // defaultSrc: 'https://tibamef2e.com/chd103/g2/image/ShopImage/',
      defaultSrc: `${import.meta.env.VITE_RESOURCE_URL}/image/product/product_data/`,
      search: '',
      allPro: [],
      disPro: [],
      product_class_group: [],
      category: [],
      currentCategory: 'ALL',
      max: 1000000,
      min: 0,
      bannerTitle: '官方商城',
      bannerPic: `${import.meta.env.VITE_RESOURCE_URL}/image/product/product_banner.png`,
      pro: '官方商城',
    }
  },
  computed: {

  },
  created() {
    this.axiosGetData();
  },
  methods: {
    axiosGetData() {
      // this.allPro = products
      // this.disPro = products
      axios.get(`${import.meta.env.VITE_RESOURCE_URL}` + "/local_json/product_data.json")
        .then(res => {
          // console.log(res.data.product_class);
          this.allPro = res.data.products;
          this.disPro = res.data.products;
          this.product_class_group = res.data.product_class;
          this.addCategory();
        })
        .catch(error => {
          console.log(123);
          console.error('Error fetching data:', error);
        });
    },
    changeDis() {
      // if(this.currentCategory=='ALL'){
      //   this.disPro = this.allPro.filter((item)=>{
      //     return item.prod_name.includes(this.search)&&item.prod_price>this.min&&item.prod_price<this.max;
      //   })
      // }else{
      // this.disPro = this.allPro.filter((item) => {
      //   return item.prod_name.includes(this.search) && item.prod_price > this.min && item.prod_price < this.max && (item.prod_type == this.currentCategory || this.currentCategory == "ALL");
      // })

      this.disPro = this.allPro.filter((item) => {
        return item.product_name.includes(this.search) && item.price > this.min && item.price < this.max && (item.product_class_no == this.currentCategory || this.currentCategory == "ALL");
      })
      // }


    },
    addCategory() {
      for (let item of this.allPro) {
        if (!this.category.includes(item.product_class_no)) {
          this.category.push(item.product_class_no);
        }
      }
    },
  },

}
</script>

<style></style>

