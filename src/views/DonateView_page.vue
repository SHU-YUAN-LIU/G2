<template>
<div class="donate_page">
  <div class="donate_page_banner">
    <img src="../assets/image/donate/bg_banner.png" alt="">
    <h1>我要捐款</h1>
  </div>

  <breadCrumbs />

  <div class="donate_page_main">
    <!-- 標題 -->
    <div class="donate_page_title">
      <img src="../assets/image/donate/icon_info.png">
      <h2>我要捐款</h2>
    </div>
    <div class="donate_page_content">
      <!-- 基本資料 -->
      <div class="donate_page_info">
        <h4>捐款基本資料</h4>
        <ul>
          <li>真實姓名: <span>吳聰明</span></li>
          <li>身分證字號: <span>H224384755</span></li>
          <li>出生年月日: <span>2024/01/01</span></li>
        </ul>
        <p>(依政治獻金法規定須年滿20歲才能捐款)</p>
      </div>

      <!-- 捐款單位 -->
      <div class="donate_page_unit">
        <h4>捐款指定單位</h4>
        <p>單位類別：中央黨部</p>
      </div>

      <!-- 聯絡資訊 -->
      <div class="donate_page_contact">
        <h4>聯絡資訊</h4>
        <input type="checkbox" id="donate_pageInfo"><label for="donate_pageInfo">以下自動帶入會員資料</label>
        <div class="donate_page_email">
          <label for="donate_pageMail">電子信箱 <span>*</span></label>
          <input type="email" id="donate_pageMail" placeholder="請輸入您的電子信箱">
        </div>
        <div class="donate_page_phone">
          <label for="donate_pagePhone">行動電話 <span>*</span></label>
          <input type="tel" id="donate_pagePhone" placeholder="請輸入您的行動電話">
        </div>
      </div>

      <!-- 捐款方式 -->
      <div class="donate_page_method">
        <h4>捐款方式</h4>
        <p>請選擇付款方式</p>
        <ul>
          <li v-for="method in paymentMethods">
            <p>{{ method.text }}</p>
            <img :src="getImageUrl(method.imgUrl)" alt="">
          </li>
        </ul>
      </div>

      <!-- 捐款金額 -->
      <div class="donate_page_amount">
        <h4>捐贈金額</h4>
        <ul>
          <li v-for="amount in donateAmount">
            <p class="donate_point">{{ amount.point }}<span>點</span></p>
            <div class="donate_amount_item">
              <p>{{ amount.title }}</p>
              <p>{{ amount.description }}</p>
            </div>
            <p class="donate_amount_text">$ {{ amount.amount }}</p>
          </li>
        </ul>
        <button class="donate_detail">了解進補點數</button>
      </div>

      <!-- 自訂金額區塊 -->
      <div class="donate_page_inputAmount">
        <p>自訂金額 <span>獲得: 20點</span></p>
        <div>
          <table>
            <tr>
              <td>新台幣</td>
              <td><input type="number" placeholder="請自行輸入金額"></td>
              <td>元</td>
            </tr>
          </table>
        </div>
        
        <p>目前選擇方式可捐款金額為新台幣 <span>300 ~ 300,000</span> 元</p>
      </div>
      
      <div class="donate_page_attention">
        <h4>捐款須知</h4>
        <input type="checkbox" id="donate_attention">
        <label for="donate_attention">本人已年滿20歲並同意遵守政治獻金相關法規於線上捐贈政治獻金 (政治獻金法及捐款須知)</label>
      </div>

    </div>

    <RouterLink to="/donate/page/confirm"><button class="donate_page_next">下一步,捐款資料 →</button></RouterLink>
  </div>
</div>
</template>


<script>
import { RouterLink } from 'vue-router';
import breadCrumbs from '../components/Bread.vue';

export default {
  data() {
    return {
      paymentMethods:[
        {
          text: '線上刷卡',
          imgUrl:'donate/icon_card.png',
        },
        {
          text: '行動支付',
          imgUrl:'donate/icon_mobilePay.png',
        },
        {
          text: 'Web ATM',
          imgUrl:'donate/icon_atm.png',
        },
      ],

      donateAmount:[
        {
          point: 3,
          title: '開路先鋒',
          description: '展現氣勢，壯大團隊自信態度',
          amount: 300,
        },
        {
          point: 10,
          title: '快速直球',
          description: '正面對決，任何挑戰都無所畏懼',
          amount: 1000,
        },
        {
          point: 50,
          title: '重砲打者',
          description: '長程火炮，創造大局拉開距離',
          amount: 5000,
        },
        {
          point: 100,
          title: '王牌投手',
          description: '一夫當闊，掌握賽場順利瞬間',
          amount: 10000,
        },
        {
          point: 300,
          title: '冠軍教練',
          description: '運籌帷幄，打造戰力最強陣容',
          amount: 30000,
        },
        {
          point: 500,
          title: '民主MVP',
          description: '攻守俱佳，震懾全場贏得冠軍',
          amount: 50000,
        },
      ]
    };
  },
  methods: {
    getImageUrl(paths) {
      return new URL(`../assets/image/${paths}`, import.meta.url).href
    },
  },
  components: {
    breadCrumbs,
  },
  mounted() {
    document.title = '我要捐款 - 會員捐款';
  },
};

</script>

<style scoped lang="scss">
@import '../assets/scss/style.scss';
.donate_page{
  h4{
        margin-bottom: 30px;
        @include title_4;
        color: $orange;
        width: 100%;
        }
  .donate_page_banner{
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
    }

    h1 {
      @include title_1;
      color: $white;
      position: absolute;
    }
  }

  // 主要內容區塊
  .donate_page_main {
    width: 100%;
    max-width: 1200px;
    margin: auto;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      @include title_10;
      margin-top: 30px;
    }

    // 下一步按鈕
    button.donate_page_next{
    @include btn_3;
    margin: 90px 0;
    }

    // 我要捐款的標題
    .donate_page_title {
      display: flex;
      align-items: center;
      gap: 20px;
      border-bottom: 1px solid $gray_2;
      height: 80px;
      width: 100%;

      h2 {
        @include title_3;

      }
    }

    // 捐款資料內容
    .donate_page_content {
      margin-left: 60px;
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      gap: 40px;

      input{
        margin-top: 10px;
      }
      // 捐款資料內容_會員資料
      .donate_page_info {

        p {
          color: red;
        }

        li {
          margin-top: 30px;
        }
      }

      // 捐款資料內容_捐款單位
      .donate_page_unit {

        p {
          @include title_10;
        }
      }

      // 捐款資料內容_聯絡資訊
      .donate_page_contact {


        input[type="checkbox"] {
          width: 15px;
          height: 15px;
          margin-right: 10px;
        }

        .donate_page_email {
          margin: 30px 0;

          span {
            color: red;
          }

          input {
            width: 100%;
            height: 40px;
          }
        }

        .donate_page_phone {
          span {
            color: red;
          }

          input {
            width: 100%;
            height: 40px;
          }
        }
      }

      // 捐款資料內容_付款方式
      .donate_page_method {
        ul {
          display: flex;
          margin-top: 30px;
          gap: 20px;
          justify-content: start;
        }

        li {
          display: flex;
          flex-direction: column;
          gap: 40px;
          justify-content: center;
          align-items: center;
          background-color: $white;
          border-radius: $border-radius-1;
          width: 160px;
          height: 180px;
          border: 1px solid #000;

          p {
            text-align: center;
          }

          img {
            width: 70px;
          }
        }
      }

      // 捐款資料內容_金額選擇
      .donate_page_amount{
        display: flex;
        flex-direction: column;
        align-items: center;
        h4{
            margin-bottom: 60px;
          }
        ul{
          display: flex;
          gap: 70px;
          flex-wrap: wrap;
          justify-content: space-around;
          align-items: center;
          
          
          li{
            border-radius: $border-radius-1;
            border: 1px solid $gray_3;
            position: relative;
            width: 310px;
            height: 160px;

            // 點數標籤(黃色圓形)
            .donate_point{
              border-radius: 50%;
              background: $yellow_2;
              width: 110px;
              height: 110px;
              text-align: center;
              line-height: 110px;
              color: $white;
              position: absolute;
              top: -70px;
              left: -50px;
              letter-spacing: 1px;
              @include title_4;
              span{
                font-size: 18px;
              }
            }
            .donate_amount_item{
              background: $gray_3;
              height: 100px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              gap: 20px;
              border-radius: $border-radius-1 $border-radius-1 0 0;
              p{
                color: $white;
                text-align: center;
                margin: 0;
              }

              p:first-child{
                font-size: $font_size_7;
              }

            }

          }

            p.donate_amount_text{
              @include title_4;
              color: $orange;
              text-align: center;
              margin: 0;
              // li: 160px - div(容器上半)100px = 60px
              line-height: 60px;
            }
          }
          
        }

        // 了解進補點數按鈕
        .donate_detail{
          border: none;
          border-bottom: 1px solid $orange;
          @include title_9;
          color: $orange;
          background-color: rgba(255,255,255, 0);
          height: 40px;
          align-self: flex-end;
        }

        // 自訂金額區塊
        .donate_page_inputAmount{

          p:first-child{
              margin-bottom: 30px;
              span{
                color: $orange;
              }
            }
          div{
            border-radius: $border-radius-1;
            overflow: hidden;

            table{

              tr{
                height: 50px;
                td{
                  line-height: 50px;
                }

                td:nth-child(1){
                  width: 220px;
                  text-align: center;
                  background-color: $orange;
                  color: $white;
                }
                td:nth-child(2){
                  input{
                    height: 50px;
                    vertical-align: middle;
                    margin: 0;
                    width: 910px;
                  }
                }
                td:nth-child(3){
                  width: 70px;
                  text-align: center;
                  background-color: $orange;
                  color: $white;
                }
              }
            }

          }
        }
    }
  }
}
</style>