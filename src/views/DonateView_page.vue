<template>
  <div class="donate_page">
    <div class="donate_page_banner">
      <img src="/image/donate/bg_banner.png" alt="">
      <h1>我要捐款</h1>
    </div>

    <breadCrumbs />

    <div class="donate_page_main">
      <!-- 標題 -->
      <div class="donate_page_title">
        <img src="/image/donate/icon_info.png">
        <h2>我要捐款</h2>
      </div>
      <div class="donate_page_content">
        <!-- 基本資料 -->
        <div v-if="donate_num == 2" class="donate_page_info">
          <h4>捐款基本資料</h4>
          <ul>
            <li>真實姓名: <span>吳聰明</span></li>
            <li>身分證字號: <span>H224384755</span></li>
            <li>出生年月日: <span>2024/01/01</span></li>
          </ul>
          <p>(依政治獻金法規定須年滿20歲才能捐款)</p>
        </div>

        <!-- 捐款單位 -->
        <div v-if="donate_num == 2" class="donate_page_unit">
          <h4>捐款指定單位</h4>
          <p>單位類別：中央黨部</p>
        </div>

        <!-- 聯絡資訊 -->
        <div v-if="donate_num == 2" class="donate_page_contact" id="registerform">
          <h4>聯絡資訊</h4>
          <input type="checkbox" id="donate_pageInfo"><label for="donate_pageInfo">以下自動帶入會員資料</label>
          <div class="donate_page_email">
            <label for="donate_pageMail">電子信箱 <span>*</span></label>
            <input type="email" id="email" placeholder="請輸入您的電子信箱" v-model="donate_email" @blur="checkEmail">
            <div v-if="!isEmailValid" class="error-message">電子郵件格式錯誤</div>
          </div>
          <div class="donate_page_phone">
            <label for="donate_pagePhone">行動電話 <span>*</span></label>
            <input type="tel" id="phone" placeholder="請輸入您的行動電話" v-model="donate_phone" @blur="checkPhone">
            <div v-if="!isPhoneValid" class="error-message">手機號碼格式錯誤</div>
          </div>
        </div>

        <!-- 捐款方式 -->
        <div class="donate_page_method">
          <h4>捐款方式</h4>
          <p>請選擇付款方式</p>
          <ul class="list_container">
            <li v-for="(method, index_method) in paymentMethods" @click="selectPaymentMethod(index_method)"
              :key="index_method" :class="{ method_active: currentIndex_method === index_method }">
              <p>{{ method.text }}</p>
              <img :src="getImageUrl(method.imgUrl)" alt="">
            </li>
          </ul>
        </div>

        <!-- 捐款金額 -->
        <div class="donate_page_amount">
          <h4>捐贈金額</h4>
          <ul class="list_container">
            <li v-for="(amount, index_amount) in donateAmount" :key="index_amount" @click="selectAmount(index_amount)"
              :class="{ amount_active: currentIndex_amount === index_amount }">
              <p class="donate_point" v-if="donate_num == 2">{{ amount.point }}<span>點</span></p>
              <div class="donate_amount_item">
                <p>{{ amount.title }}</p>
                <p>{{ amount.description }}</p>
              </div>
              <p class="donate_amount_text">$ {{ amount.amount }}</p>
            </li>
          </ul>
          <button v-if="donate_num == 2" class="donate_detail" @click="showLightbox">了解進補點數</button>
        </div>

        <!-- 自訂金額區塊 -->
        <div class="donate_page_inputAmount">
          <p v-if="donate_num == 2">自訂金額 <span v-if="this.donate_point && this.donate_point>=1">獲得: {{ donate_point }}點</span></p>
          <div>
            <table>
              <tr>
                <td>新台幣</td>
                <td><input type="text" placeholder="請自行輸入金額" @blur="handleAmount" @input="cancelAmount"
                    v-model="amount_input"></td>
                <td>元</td>
              </tr>
            </table>
          </div>

          <p>可捐款金額為新台幣 <span v-if="donate_num == 2">300 ~ 300,000</span><span v-else-if="donate_num == 1">300 ~
              10,000</span> 元</p>
        </div>

        <!-- 捐款須知 -->
        <div class="donate_page_attention">
          <h4>捐款須知</h4>
          <input type="checkbox" id="donate_attention" v-model="isAgreeToTerms">
          <label for="donate_attention">本人已年滿20歲並同意遵守政治獻金相關法規於線上捐贈政治獻金 (政治獻金法及捐款須知)</label>
        </div>
      </div>

      <!-- <RouterLink to="/donate/page/confirm"><button class="donate_page_next">下一步,捐款資料 →</button></RouterLink> -->
      <button class="donate_page_next" @click="checkAndNavigate">下一步,捐款資料 →</button>
    </div>
    <donatePoint ref="donatePoint" />
  </div>
</template>
  
  
<script>
import breadCrumbs from '../components/Bread.vue';
import donatePoint from '../components/DonateLightbox_point.vue';

export default {
  data() {
    return {
      donate_num: 0,
      paymentMethods: [
        {
          text: '線上刷卡',
          imgUrl: 'donate/icon_card.png',
        },
        {
          text: '行動支付',
          imgUrl: 'donate/icon_mobilePay.png',
        },
        {
          text: 'Web ATM',
          imgUrl: 'donate/icon_atm.png',
        },
      ],
      currentIndex_method: -1,
      currentIndex_amount: -1,

      donateAmount: [
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
      ],
      // 聯絡資訊變數
      donate_email: '',
      donate_phone: '',
      isEmailValid: true,
      isPhoneValid: true,

      // 輸入金額變數
      amount_input: '',

      alert_info: [],

      // 判斷捐款須知checkbox
      isAgreeToTerms: false,

      donatePoint:0,
    };
  },
  methods: {
    getImageUrl(paths) {
      return new URL(`../assets/image/${paths}`, import.meta.url).href
    },

    showLightbox() {
      // 用$refs指向燈箱元件檔案裡的showLightbox變數並設定為true
      this.$refs.donatePoint.showLightbox = true;
      console.log(this.$refs.donatePoint.showLightbox);
      document.body.style.overflow = 'hidden';
    },

    // 被選擇的付款方式切換顏色
    selectPaymentMethod(index_method) {
      this.currentIndex_method = index_method;

      console.log(index_method, this.currentIndex_method)
    },

    selectAmount(index_amount) {
      this.currentIndex_amount = index_amount;
      // console.log(index_amount, this.currentIndex_amount)

      this.amount_input = this.donateAmount[index_amount].amount;
    },
    checkEmail() {
      if (this.donate_email.trim() === '') {
        this.isEmailValid = true; // 不顯示錯誤文字
      } else {
        let emailPattern = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
        this.isEmailValid = emailPattern.test(this.donate_email);
      }
    },
    checkPhone() {
      if (this.donate_phone.trim() === '') {
        this.isPhoneValid = true; // 不顯示錯誤文字
      } else {
        let phonePattern = /^(09)[0-9]{8}$/;
        this.isPhoneValid = phonePattern.test(this.donate_phone);
      }
    },
    // 改用輸入框填寫金額時，取消捐贈金額欄位的資訊
    cancelAmount() {
      this.currentIndex_amount = -1;
    },

    // 輸入金額驗證
    handleAmount() {
      if (Number.isInteger(Number(this.amount_input))) {
        // 判斷為整數
        if (this.donate_num == 1) {
          if (parseInt(this.amount_input) > 10000) {
            alert('匿名捐款金額不得大於新台幣10,000元');
            this.amount_input = '';
          } else if (parseInt(this.amount_input) < 300) {
            alert('單筆捐款金額不得小於新台幣300元');
            this.amount_input = '';
          }
        } else if (this.donate_num == 2) {
          if (parseInt(this.amount_input) > 300000) {
            alert('會員捐款金額單筆不得大於新台幣300,000元');
            this.amount_input = '';
          } else if (parseInt(this.amount_input) < 300) {
            alert('單筆捐款金額不得小於新台幣300元');
            this.amount_input = '';
          }
        }
      } else {
        // 不是整數，可能是浮點數
        this.amount_input = '';
        alert('請輸入正整數');
      }
    },
    // 判斷匿名捐款和會員捐款顯示的金額li
    shouldShowAmount() {
      if (this.donate_num == 1) {
        // 如果是匿名捐款, 捐款li最後兩個元素刪除
        this.donateAmount.splice(4, 2);
      }
    },
    checkAndNavigate() {
      this.alert_info = [];
        if (this.currentIndex_method === -1) {
          this.alert_info.push('請選擇付款方式');
        }

        if (this.currentIndex_amount === -1 && !this.amount_input.trim()) {
          this.alert_info.push('請選擇捐款金額, 或自行填寫捐款金額');
        }

        if (this.donate_num == 2 && (!this.isEmailValid || !this.isPhoneValid || this.donate_email == '' || this.donate_phone == '')) {
          this.alert_info.push('請填寫正確的連絡資訊');
        }

        if (!this.isAgreeToTerms) {
          this.alert_info.push('請閱讀捐款須知並勾選同意');
        }

        if (this.alert_info.length > 0) {
          alert(`請填寫以下欄位: \n*${this.alert_info.join('\n*')}`);
        } else {
          this.$router.push('/donate/page/confirm');
          if (this.amount_input) {
            localStorage.setItem('donateAmount', this.amount_input);
            localStorage.setItem('donatePoint', this.donate_point);
          }
        }
      
    },

  },
  components: {
    breadCrumbs,
    donatePoint,
  },
  mounted() {
    document.title = '青年進補黨 - 捐款';
    this.donate_num = Number(localStorage.getItem('donate_num'));
    console.log(this.donate_num);
    this.shouldShowAmount();
  },
  computed:{
    donate_point(){
      let point = this.donatePoint;
      if(this.donate_num == 2){
        point = Math.floor(parseInt(this.amount_input) / 100);
      }else if(this.donate_num == 1){
        point = null;
      }     
      return point;
    }
  }
}

</script>
  
<style scoped lang="scss">
@import '../assets/scss/style.scss';

.donate_page_method .method_active {
  box-shadow: 0px 1px 0px #666,
    0px 1px 0px #777,
    0px 2px 0px #888,
    0px 2px 0px #999,
    0px 3px 0px #aaa,
    0px 3px 0px #bbb !important;
  transform: translate(0px, 3px);
  background: $orange;
  color: $white;
}

.donate_page_amount .amount_active .donate_amount_item {
  background-color: $orange !important;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 10px;
  position: relative;
  left: 10px;
}
</style>