<template>
  <div class="donate">
    <div class="donate_banner">
      <img src="../assets/image/donate/donate_banner.png" alt="">
      <h1>我要捐款</h1>
    </div>

    <div class="donate_bread">
      <ul>
        <li>首頁 / </li>
        <li>我要捐款</li>
      </ul>
    </div>

    <div class="donate_main">
      <img v-for="list in imgList" :src="getImageUrl(list)" alt="" class="icon">
      <div class="donate_cards">
        <div class="donate_card1">
          <div class="donate_card1_top">
            
            <h2>小額支持</h2>
            <p>您的小筆捐款，是我們未來的大大動力！</p>
            <img src="../assets/image/donate/donate_card1.png" alt="">
          </div>
          <div class="donate_card1_bottom">

          </div>
        </div>
        <div class="donate_card2">
          <div class="donate_card2_top">

          </div>
          <div class="donate_card2_bottom">

          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  components:{
    
  },
  data(){
      return{
        imgList:[
          'donate/donate_bgi_1.png',
          'donate/donate_bgi_2.png',
          'donate/donate_bgi_3.png'
        ]
      }
  },
  created(){

  },
  methods: {
    getImageUrl(paths) {
            return new URL(`../assets/image/${paths}`, import.meta.url).href
        },
  },

}
</script>

<style scoped lang="scss">
@import "../assets/scss/base/reset";
@import "../assets/scss/base/font";
@import "../assets/scss/base/color";
@import "../assets/scss/base/border";

div.donate{
  margin-top: 85px;
  .donate_banner{
    position: relative; 
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
      @include title_1;
      color: $white;
      font-weight:initial;
      position: absolute;
    }
    img{
      width: 100%;
      vertical-align: middle;
    }
  }

  // 麵包屑區塊
  .donate_bread{
    background-color: $orange;  
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    // 麵包屑文字
    ul{ 
      width: 100%;
      max-width: 1200px;
      display: flex;
      align-items: center;
      li{
        @include title_7;
      }

      // 麵包屑最後一個改成白字
      li:last-child{
        color: $white; 
        position: relative;
      }

      // 裝飾線
      li:last-child:after{
          content:'';
          height: 1px;
          // 寬度不確定要設多少?
          width: 900%;
          background-color: $black;
          position: absolute;
          top: 50%;
          margin-left: 20px;

        }
    }
  }

  // 主要區塊
  .donate_main{
    border: 1px solid #000; 
    width: 100%;
    height: 1100px;
    display: flex;
    position: relative;
    
    // 背景圖片設定
    img.icon{
      position: absolute;
      z-index: 0;
    }
    img.icon:nth-child(1){
      left: -80px;
      top: 0;
      bottom: 0;
      margin: auto;
    }
    img.icon:nth-child(2){
      right: 120px;
      top: 100px;
    }
    img.icon:nth-child(3){
      right: 100px;
      bottom: 200px;
    }

    // 卡片1
    .donate_card1{
      width: 550px;
      z-index: 2;

      // 卡片1上半
      .donate_card1_top{
        height: 530px;
        background-color: $orange;
      }
      // 卡片1下半
      .donate_card1_bottom{

      }
    }

    // 卡片2
    .donate_card2{
      width: 630px;
      z-index: 2;

      // 卡片2上半
      .donate_card2_top{

      }
      // 卡片2下半
      .donate_card2_bottom{

      }
    }
  }
  
}



</style>