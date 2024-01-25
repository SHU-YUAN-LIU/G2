<template>
  <div class="con_wrap">
    <div class="contect">
      <!-- banner -->
      <banner :bannerTitle="bannerTitle" :bannerPic="bannerPic" />
      <!-- 麵包屑 -->
      <Bread :page="dog" />
    </div>
    <!-- 內容 -->
    <div class="contect_info">
      <h2>陳情流程</h2>
      <!-- 陳情流程 -->
      <div class="con_process_group">
        <div class="bar"></div>
        <div class="con_process">
          <img src="@/assets/image/contect/writeForm.svg" alt="">
          <span>填寫表單</span>
        </div>
        <div class="con_process">
          <img src="@/assets/image/contect/check.svg" alt="">
          <span>已受理</span>
        </div>
        <div class="con_process">
          <img src="@/assets/image/contect/working.svg" alt="">
          <span>處理中</span>
        </div>
        <div class="con_process">
          <img src="@/assets/image/contect/finalReply.svg" alt="">
          <span>結果回覆</span>
        </div>
      </div>
      <!-- 陳情須知 -->
      <div class="con_process_know">
        <h3>歡迎使用青年進補黨陳情整合平台，請先詳讀下列使用說明後再填寫陳情表單：</h3>
        <ul>
          <li>一、登錄案件時請務必載明具體事項、姓名及聯絡方式；如未具名及聯絡方式，本黨得逕為不受理。</li>
          <li>二、陳情案件請以真實案件為限，與本黨無關之建議、批評、惡意攻擊、謾罵等，恕不受理。</li>
          <li>三、表單所填寫之姓名或住址、聯絡電話、電子郵件位址，經查證屬匿名虛報不實者，本黨不予處理。</li>
          <li>四、若因未填具真實姓名或相關資料，而引發之相關法律責任，應由當事人負全責。</li>
          <li>五、表單中所填寫的資料，將依據個人資料保護法及相關規定蒐集、處理及合理使用。
            您所填寫的資料，依據個人資料保護法及相關規定，不對外公開，僅供本黨業務上聯繫，回覆及分析使用。</li>
        </ul>
      </div>
      <h2>陳情表單填寫</h2>
      <div class="con_input_group">
        <p>真實姓名:劉書菀</p>
        <p>電子信箱:YWTEP@gmail.com</p>
        <div class="con_input">
          <p>案件宗旨</p>
          <input type="text" placeholder="請輸入案件宗旨">
          <p>案件內容</p>
          <textarea name="" placeholder="請輸入100字以內"></textarea>
        </div>
      </div>

      <commitButton :commitButton="commit" @click="showSuccessPop" />
      <!-- 要加上ref屬性, script裡的$refs才能抓到變數 -->
      <successPop ref="successPop" />

      <router-link :to="{ path: '/contact_search' }">
        <commitButton />
      </router-link>
    </div>
  </div>
</template>



<script>
import Bread from '../components/Bread.vue'
import commitButton from '../components/button/commitButton.vue'
import successPop from '../components/successPop.vue'
import Banner from '../components/Banner.vue'
export default {
  components: {
    Bread,
    commitButton,
    successPop,
    Banner,
  },
  data() {
    return {
      dog: '聯絡我們',
      commit: '表單送出',
      isModalVisible: false,
      bannerTitle: '聯絡我們',
      bannerPic: 'src/assets/image/contect/contect_banner.png'
    }
  },
  methods: {
    showSuccessPop() {
      // 用$refs(搭配上方的元件的ref屬性)指向燈箱元件檔案裡的showSuccessPop變數並設定為true
      this.$refs.successPop.showSuccessPop = true;
      console.log(this.$refs.successPop.showSuccessPop);
      document.body.style.overflow = 'hidden';
    }
  },

}
</script>

<style scoped lang="scss"></style>