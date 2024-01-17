<script setup>
// import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>
<script>
// import TheWelcome from '../components/TheWelcome.vue'
  const imgUrl = new URL('../src/assets/image/home/hannah-wei-aso6SYJZGps-unsplash.jpg', import.meta.url).href
  export default {
    data() {
      return {
        rawHtml: '<p>1</p>',
        imgUrl: imgUrl,
        list: [
          {
            src: 'home/hannah-wei-aso6SYJZGps-unsplash.jpg',
            name: 'pic1',
            price: '150',
          },
          {
            src: 'home/flowstep1.png',
            name: 'pic2',
            price: '100',
          },
          {
            src: 'home/products_craft_2.png',
            name: 'pic3',
            price: '200',
          },
          {
            src: 'home/flowstep3.png',
            name: 'pic4',
            price: '500',
          }

        ],
        imgIndex: 1,
      }
    },
    // components:{
    //   TheWelcome
    // },
    methods:{
      getImageUrl(paths){
        return new URL(`./assets/image/${paths}`, import.meta.url).href
      },
      toggleImgBefore(){
        if(this.imgIndex!==1){
          this.imgIndex-= 1;
        }else{
          this.imgIndex = 7;
        }
      },
      toggleImgAfter(){
        //this.imgIndex = (this.imgIndex)%7+1;
        if(this.imgIndex!==7){
          this.imgIndex+= 1;
        }else{
          this.imgIndex = 1;
        }
      }
    },
}
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" :src="getImageUrl('home/hannah-wei-aso6SYJZGps-unsplash.jpg')" width="125" height="125" />
    <img alt="Vue logo" class="logo" :src="getImageUrl('home/flowstep1.png')" width="125" height="125" /> -->

    <!-- <img v-for="(item, index) in list"  :src="getImageUrl(item)" :width="(index+1)*100" alt=""> -->


    <!-- <div v-for="item in list">
      <img :src="getImageUrl(item.src)" width='120px' height='120px' alt="">
      <p>{{ item.name }}</p>
      <br>
      <p>價錢 : {{ item.price }}</p>
    </div>
    <p v-for="num in 2">
      <img :src="getImageUrl(`product/${num}.jpg`)" width="100px" alt=""> -->
      <!-- {{ getImageUrl(`product/${num}.png`) }} -->
    <!-- </p> -->

    <!-- <img :src="getImageUrl(`product/${imgIndex}.jpg`)" width="500px" alt="" >
    <br>
    <button @click="toggleImgBefore">上一張</button>
    <img v-for="num in 7" :src="getImageUrl(`product/${num}.jpg`)" @click="imgIndex = num" width="100px"> -->
    <!-- <img :src="getImageUrl(`product/${imgIndex}.jpg`)" width="100px" alt=""> -->
    <!-- <button @click="toggleImgAfter">下一張</button> -->
    <!-- <p>{{ imgIndex }}</p> -->




    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/product">Product</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
      </nav>
    </div>
  </header>
<!-- 頁面路由route渲染的地方 -->
  <RouterView />

  <footer>
    @fjslidjflidsjflifjalfia
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
