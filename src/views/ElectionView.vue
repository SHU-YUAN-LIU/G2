<template>
  <div class="election">
    <!-- banner -->
    <div class="election_banner"><img src="../assets/image/election/people.png" alt=""></div>
    <!-- 候選人資訊 -->
    <div class="election_info">
      <!-- 背景圖"P " -->
      <div class="P_img"><img src="../assets/image/election/Vector.png" alt=""></div>
      <!-- 候選人資訊 -->
      <div class="election_content">
        <!-- 第一位候選人資料 -->
        <div>
          <span>進補黨提名/總統候選人</span>
          <br>
          <span>劉緯育</span>
          <br>
          <span>學歷</span>
          <br>
          <span>美國哈佛大學 公共衛生學院碩士</span>
          <br>
          <span>成功大學 學士後醫學系畢業</span>
          <br>
          <span>台灣大學 復健學系</span>
          <span>經歷</span>
          <span>進補黨 黨主席</span>
          <br>
          <span>第 10 屆不分區立法委員</span>
          <br>
          <span>復興市市長</span>
          <br>
          <span>立法院進補黨團幹事長</span>
          <br>
          <span>立法院司法委員會召集委員</span>
          <br>
          <span>立法院跨黨派厚生會會長</span>
          <br>
          <span>第4、5、6、7屆立法委員</span>
          <br>
          <span>幼稚園園長</span>
        </div>
        <!-- 第二位候選人資料 -->
        <div>
          <span>進補黨提名/總統候選人</span>
          <br>
          <span>劉緯育</span>
          <br>
          <span>學歷</span>
          <br>
          <span>
            美國哈佛大學 公共衛生學院碩士
            <br>
            成功大學 學士後醫學系畢業
            <br>
            台灣大學 復健學系
          </span>
          <span>經歷</span>
          <span>進補黨 黨主席</span>
          <br>
          <span>第 10 屆不分區立法委員</span>
          <br>
          <span>復興市市長</span>
          <br>
          <span>立法院進補黨團幹事長</span>
          <br>
          <span>立法院司法委員會召集委員</span>
          <br>
          <span>立法院跨黨派厚生會會長</span>
          <br>
          <span>第4、5、6、7屆立法委員</span>
          <br>
          <span>幼稚園園長</span>
        </div>
      </div>
    </div>
    <!-- 跑馬燈 -->
    <vueMarquee :marqueeArray="slogan" />
    <!-- 政策懶人包 -->
    <div>
      <span class="policy">政策懶人包</span>
      <bookmark />
    </div>
  </div>
</template>


<script>
import vueMarquee from '../components/Marquee.vue';
import bookmark from '../components/BookMark.vue';
export default {
  data() {
    return {
      slogan: '這是一場改變政治文化的社會運動，投給劉緯育，投給自己的未來。',
    }
  },
  components: {
    vueMarquee,
    bookmark,

  },
}

</script>




<style>
.election_banner {
  max-width: 1920px;
  margin-top: 85px;

  img {
    width: 100%;
  }
}

.election_info {
  display: flex;
}


/* 跑馬燈 */
.election_marquee {
  background-color: #D4FF1F;
}

/* 候選人資訊 */
.election_content {
  display: flex;
  height: 300px;
}

.P_img {
  background-position: left center;
  background-attachment: fixed;
  width: 50%;
}

.policy {
  display: flex;
  justify-content: center;
  font-size: 36px;
  margin-bottom: 60px;
  font-weight: bold;
}
</style>