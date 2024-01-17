<script>
//
  import axios from 'axios';
  export default {
    data(){
      return {
        search:'',
        responseData : [],
        displayData:[],
        max:1000000000,
        min:0,
      }
    },
    created() {
      console.log('嗨');
      //this.fetchData()
      this.axiosGetData();
    },
    methods: {
      fetchData(){
        console.log('api');
        fetch('https://fakestoreapi.com/products')
        .then(res=>{
          return res.json();
        })
        .then(json=>{
            this.responseData=json;
            console.log(this.responseData);
        })
      },
      axiosGetData(){
        axios.get('https://fakestoreapi.com/products')
        .then(res=>{
          console.log(res.data);
          this.responseData = res.data
          this.displayData = res.data
        })
      },
      handleInput(){
        this.displayData = this.responseData.filter((item)=>{
          return item.title.includes(this.search)&&item.price>this.min&&item.price<this.max;
        })
      }
    },
  }
</script>
<template>
  <div class="product">
    <h1>This is an about page</h1>
    <input type="text" v-model.trim="search" @input="handleInput">
    <br>
    <input type="number" v-model="min" @input="handleInput">-
    <input type="number" v-model="max" @input="handleInput">
    <!-- {{ responseData }} -->

    <div class="item" v-for="item in displayData">
      <img :src="item.image" width='100px' alt="">
      <p>價錢:{{ item.price }}</p>
      <p>品名:{{ item.title }}</p>
      <p>描述:{{ item.description }}</p>
    </div>     <!-- -->

  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
