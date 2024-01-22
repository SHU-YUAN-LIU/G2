<template>
  <div class="donate_member">
    <div class="donate_member_banner">
      <img src="../assets/image/donate/bg_banner.png" alt="">
      <h1>我要捐款</h1>
    </div>

    <breadCrumbs />

    <div class="donate_member_main">
      <div class="donate_member_main_title">
        <img src="../assets/image/donate/icon_info.png">
        <h2>我要捐款</h2>
      </div>
      
      <div class="donate_member_main_content">
        <div class="donate_member_main_info">
          <h4>捐款基本資料</h4>
          <ul>
            <li>真實姓名: <span>吳聰明</span></li>
            <li>身分證字號: <span>H224384755</span></li>
            <li>出生年月日: <span>2024/01/01</span></li>
          </ul>
          <p>(依政治獻金法規定須年滿20歲才能捐款)</p>
        </div>
        <div class="donate_member_main_unit">
          <h4>捐款指定單位</h4>
          <p>單位類別：中央黨部</p>
        </div>
        <div class="donate_member_main_contact">
          <h4>聯絡資訊</h4>
          <input type="checkbox" id="donate_memberInfo"><label for="donate_memberInfo">以下自動帶入會員資料</label>

          <div class="donate_member_email">
            <label for="donate_memberMail">電子信箱 <span>*</span></label>
            <input type="email" id="donate_memberMail" placeholder="請輸入您的電子信箱">
          </div>
          <div class="donate_member_phone">
            <label for="donate_memberPhone">行動電話 <span>*</span></label>
            <input type="tel" id="donate_memberPhone" placeholder="請輸入您的行動電話">
          </div>
        </div>
        <div class="donate_member_method">
          <h4>捐款方式</h4>
          <p>請選擇付款方式</p>
          <ul>
            <li>
              <p>線上刷卡</p>
              <img src="../assets/image/donate/icon_card.png" alt="">
            </li>
            <li>
              <p>行動支付</p>
              <img src="../assets/image/donate/icon_mobilePay.png" alt="">
            </li>
            <li>
              <p>Web ATM</p>
              <img src="../assets/image/donate/icon_atm.png" alt="">
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  </div>
</template>


<script>
import { RouterLink } from 'vue-router';
import breadCrumbs from '../components/Bread.vue';

export default {
    data() {
        return {
          
           
        };
    },
    methods: {
      
    },
    components: {
      breadCrumbs,
    },
    mounted() {
      document.title='我要捐款 - 會員捐款';
    },
};

</script>

<style scoped lang="scss">
@import '../assets/scss/style.scss';
.donate_member{
  .donate_member_banner{
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      width: 100%;
    }
    h1{
      @include title_1;
      color: $white;
      position: absolute;
      font-weight: inherit;
    }
  }

  // 主要內容區塊
  .donate_member_main{
    width: 100%;
    max-width: 1200px;
    margin: auto;
    margin-top: 40px;

    p{
      @include title_10;
      margin-top: 30px;
    }
    .donate_member_main_title{
      display: flex;
      align-items: center;
      gap: 20px;
      border-bottom: 1px solid $gray_2;
      height: 80px;
      h2{
        @include title_3;
        font-weight: inherit;

      }
    }

    .donate_member_main_content{
      margin-left: 60px;
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      gap: 40px;
      h4{
        font-size: $font_size_8;
        font-family: $font_family_2;
        font-weight: inherit;
        color: $orange;

      }

      .donate_member_main_info{
        
        p{
          color: red;
        }
        li{
          margin-top: 30px;
        }
      }

      .donate_member_main_unit{

        p{
          @include title_10;
        }
      }

      .donate_member_main_contact{
        
        input[type="checkbox"]{
          width: 15px;
          height: 15px;
          margin-right: 10px;
        }

        .donate_member_email{
          margin: 30px 0;
          span{
            color: red;
          }
          input{
            width: 100%;
            height: 40px;
          }
        }
        .donate_member_phone{
          span{
            color: red;
          } 
          input{
            width: 100%;
            height: 40px;
          }
        }
      }

      .donate_member_method{
        ul{
          display: flex;
        }
        li{
          display: flex;
          flex-direction: column;
          gap: 20px;
          justify-content: center;
          align-items: center;
          background-color: $white;
          border-radius: $border-radius-1;
          width: 160px;
          height: 180px;
          border: 1px solid #000;

          p{
            text-align: center;
          }

          img{
            width: 70px;
          }
        }
      }
    }
  }
}

</style>