<template>
  <!-- Banner -->
  <Banner />
  <!-- 麵包屑 -->
  <Bread />
  <div class="pro_wrap">
    <div class="top">
      <input type="text" width="100px" placeholder="搜尋關鍵字" v-model.trim="search" @input="changeDis">
      <input type="number" width="100px" v-model="min" @input="changeDis">
      <input type="number" width="100px" v-model="max" @input="changeDis">
      <select v-model="currentCategory" @change="changeDis">
        <option selected value="ALL">ALL</option>
        <option v-for="types in category" :value="types">{{ types }}</option>
      </select>
    </div>
    <div class="product">
      <!-- 商品卡片 -->
      <div class="pro_card_group">
        <div class="card_group">
          <div v-for="(item, index) in disPro">
            <ProCard :imgSrc="defaultSrc + item.prod_pic" :name="item.prod_name" :price="item.prod_price" :num="index" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import ProCard from '../components/ProCard.vue'
import Banner from '../components/Banner.vue'
import Bread from '../components/Bread.vue'
export default {
  components: {
    ProCard,
    Banner,
    Bread,
  },
  data() {
    return {
      defaultSrc: 'https://tibamef2e.com/chd103/g2/image/ShopImage/',
      search: '',
      allPro: [],
      disPro: [],
      category: [],
      currentCategory: 'ALL',
      max: 1000000,
      min: 0,
    }
  },
  computed: {

  },
  created() {
    this.axiosGetData();
  },
  methods: {
    axiosGetData() {
      console.log(123);
      axios.get('https://tibamef2e.com/chd103/g2/api/getProducts.php')
        .then(res => {
          console.log(res.data);
          this.allPro = res.data;
          this.disPro = res.data;
          this.addCategory();
        })
    },
    changeDis() {
      // if(this.currentCategory=='ALL'){
      //   this.disPro = this.allPro.filter((item)=>{
      //     return item.prod_name.includes(this.search)&&item.prod_price>this.min&&item.prod_price<this.max;
      //   })
      // }else{
      this.disPro = this.allPro.filter((item) => {
        return item.prod_name.includes(this.search) && item.prod_price > this.min && item.prod_price < this.max && (item.prod_type == this.currentCategory || this.currentCategory == "ALL");
      })
      // }


    },
    addCategory() {
      for (let item of this.allPro) {
        if (!this.category.includes(item.prod_type)) {
          this.category.push(item.prod_type);
        }
      }
    },
  },

}
</script>

<style></style>

