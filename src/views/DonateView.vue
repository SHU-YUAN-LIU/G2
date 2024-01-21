<template>
  <div class="donate">
    <div class="donate_banner">
      <img src="@/assets/image/donate/donate_banner.png" alt="">
      <h1>我要捐款</h1>
    </div>

    <div class="donate_bread">
      <ul>
        <li><RouterLink to="/">首頁</RouterLink> / </li>
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
            <img src="@/assets/image/donate/donate_card1.png" alt="">
          </div>
          <div class="donate_card1_bottom">
            <button>我要捐款 → </button>
          </div>
        </div>
        <div class="donate_card2">
          <div class="donate_card2_top">
            <img src="@/assets/image/donate/donate_card2.png" alt="">
            <div>
              <h3>支持青年進補黨</h3>
              <h3>給台灣新的選擇</h3>
            </div>
          </div>
          <div class="donate_card2_bottom">
            <ul>
              <li v-for="info in donateInfo">
                <span>{{ info.type }}</span>
                <span>{{info.details}}</span>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import {RouterLink} from 'vue-router'
export default {
  components:{
    
  },
  data(){
      return{
        imgList:[
          'donate/donate_bgi_1.png',
          'donate/donate_bgi_2.png',
          'donate/donate_bgi_3.png'
        ],
        donateInfo:[
          { type: "銀行臨櫃捐款/戶名", details: "青年進補黨政治獻金專戶" },
          { type: "金融機構代碼", details: "578" },
          { type: "帳號(郵局劃撥)", details: "12345678" },
          { type: "營利事業或人民團體捐款", details: "請逕洽中央黨部財務室" }
        ],
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
@import "../assets/scss/components/btn";

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
        text-decoration: none;
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
    width: 100%;
    height: 1100px;
    display: flex;
    position: relative;
    
    // 背景圖片設定
    img.icon{
      position: absolute;
      // 設z-index以免背景圖蓋到卡片
      z-index: 1;
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

    // 卡片區塊
    .donate_cards{
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      z-index: 2;
      // 卡片1
      .donate_card1{
        width: 550px;
        z-index: 2;
        border-radius: $border-radius-1;
        border: 3px solid $orange;
        margin-right: 30px;

        img{
          width: 240px;
          height: 195px;
        }

        // 卡片1上半
        .donate_card1_top{
          height: 530px;
          background-color: $orange;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          h2{
            @include title_2;
            color: $white;
            font-weight: inherit;
            height: 120px;
          }
          p{
            @include title_8;
            color: $white;
            margin-bottom: 70px;
          }
        }
        // 卡片1下半
        .donate_card1_bottom{
          height: 170px;
          display: flex;
          align-items: center;
          justify-content: center;
          button{
            @include btn_1;
            border: none;
            @include title_7;
            color: $white;
            border-radius: 50px;
          }
        }
      }

      // 卡片2
      .donate_card2{
        z-index: 2;
        background-color: $white;
        border-radius: $border-radius-1;
        border: 3px solid $orange;
        // 卡片2上半
        .donate_card2_top{
          display: flex;
          justify-content: center;
          position: relative;
          height: 320px;
          z-index: 2;
          img{
            width: 636px;
            vertical-align: middle;
            border-radius: 5px;
          }
          div{
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            h3{
              @include title_2;
              color: $white;
              font-weight: inherit;
              line-height: 60px;
              letter-spacing: 10px;
            }
          }
        }
        // 卡片2下半
        .donate_card2_bottom{
          height: 380px;
          position: relative;
          ul{
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          li{
            width: 570px;
            line-height: 55px;
            display: flex;
            justify-content: center;
            border: 1px solid $gray_2;
            border-radius: $border-radius-1;
            span{
              display: inline-block;
              text-align: center;
            }
            span:first-child{
              width: 270px;
              border-radius: $border-radius-1;
              background-color: $green;
              height: 55px;
              justify-self: flex-start;
            }
            span:last-child{
              width: 300px;
            }
          }
          li+li{
            margin-top: 20px;
          }
        }
      }
    }
  }
  
}



</style>