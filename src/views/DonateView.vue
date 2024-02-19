<template>
  <div class="donate">
    <div class="donate_banner">
      <img src="/image/donate/donate_banner.png" alt="">
      <h1>我要捐款</h1>
    </div>

    <breadCrumbs :page="currentPage" />

    <div class="donate_main">
      <div class="donate_cards">
        <div class="donate_card1">
          <div class="donate_card1_top">

            <h2>小額支持</h2>
            <p>您的小筆捐款，是我們未來的大大動力！</p>
            <img src="/image/donate/donate_card1.png" alt="">
          </div>
          <div class="donate_card1_bottom">
            <!-- <button @click="showLightbox" class="donate_showLightbox">我要捐款 → </button> -->
            <commitButton :commitButton="commit" @click="showLightbox" />
            <!-- 要加上ref屬性, script裡的$refs才能抓到變數 -->
            <DonateLightbox ref="DonateLightbox" />

          </div>
        </div>
        <div class="donate_card2">
          <div class="donate_card2_top">
            <img src="/image/donate/donate_card2.png" alt="">
            <div>
              <h3>支持青年進補黨</h3>
              <h3>給台灣新的選擇</h3>
            </div>
          </div>
          <div class="donate_card2_bottom">
            <ul>
              <li v-for="info in donateInfo">
                <span>{{ info.type }}</span>
                <span>{{ info.details }}</span>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </div>
    <background :height="300" />
  </div>

</template>
<script>
import DonateLightbox from '../components/DonateLightbox.vue';
import commitButton from '../components/button/commitButton.vue'
import breadCrumbs from '../components/Bread.vue';
import { RouterLink } from 'vue-router';
import background from '../components/Background_green.vue';

export default {
  components: {
    DonateLightbox,
    commitButton,
    breadCrumbs,
    background,
  },
  data() {
    return {
      commit: "我要捐款",
      donateInfo: [
        { type: "銀行臨櫃捐款/戶名", details: "青年進補黨政治獻金專戶" },
        { type: "金融機構代碼", details: "578" },
        { type: "帳號(郵局劃撥)", details: "12345678" },
        { type: "營利事業或人民團體捐款", details: "請逕洽中央黨部財務室" }
      ],
      currentPage: '我要捐款',
    }
  },
  created() {

  },

  methods: {
    getImageUrl(paths) {
      return new URL(`../assets/image/${paths}`, import.meta.url).href
      // return new URL(`/image/${paths}`, import.meta.url).href
    },
    showLightbox() {
      // 用$refs指向燈箱元件檔案裡的showLightbox變數並設定為true
      this.$refs.DonateLightbox.showLightbox = true;
      console.log(this.$refs.DonateLightbox.showLightbox);
      document.body.style.overflow = 'hidden';
    }

  },
  mounted() {
    document.title = "青年進補黨 - 捐款";
  },
}
</script>

<style scoped lang="scss">
@import "../assets/scss/style.scss";

</style>