<template>
  <div class="election">
    <!-- banner -->
    <div class="election_banner"></div>
    <!-- 候選人資訊 -->
    <div class="election_info">
      <!-- 背景圖"P " -->
      <div class="P_img"><img src="../assets/image/election/Vector.png" alt=""></div>
      <!-- 候選人資訊 -->
      <div class="election_content">
        <!-- 第一位候選人資料 -->
        <ul v-for="(candidate, index) in candidates" :key="index">
          <li>{{ candidate.position }}</li>
          <li>{{ candidate.name }}</li>
          <li>學歷</li>
          <li>{{ candidate.education }}</li>
          <li>經歷</li>
          <li v-for="experience in candidate.experiences">{{ experience }}</li>
        </ul>












        <!-- <ul>
          <li>進補黨提名/總統候選人</li>
          <li>劉緯育</li>
          <li>學歷</li>
          <li>美國哈佛大學 公共衛生學院碩士</li>
          <li>成功大學 學士後醫學系畢業</li>
          <li>台灣大學 復健學系</li>
          <li>經歷</li>
          <li>進補黨 黨主席</li>
          <li>第 10 屆不分區立法委員</li>
          <li>復興市市長</li>
          <li>立法院進補黨團幹事長</li>
          <li>立法院司法委員會召集委員</li>
          <li>立法院跨黨派厚生會會長</li>
          <li>第4、5、6、7屆立法委員</li>
          <li>幼稚園園長</li>
        </ul> -->
        <!-- 第二位候選人資料 -->
        <!-- <ul>
          <li>進補黨提名/總統候選人</li>
          <li>劉緯育</li>
          <li>學歷</li>
          <li>
            美國哈佛大學 公共衛生學院碩士
            成功大學 學士後醫學系畢業
            台灣大學 復健學系
          </li>
          <li>經歷</li>
          <li>進補黨 黨主席</li>
          <li>第 10 屆不分區立法委員</li>
          <li>復興市市長</li>
          <li>立法院進補黨團幹事長</li>
          <li>立法院司法委員會召集委員</li>
          <li>立法院跨黨派厚生會會長</li>
          <li>第4、5、6、7屆立法委員</li>
          <li>幼稚園園長</li>
        </ul> -->
      </div>
    </div>
    <!-- 跑馬燈 -->
    <vueMarquee :marqueeArray="slogan" />
    <!-- 政策懶人包 -->
    <div>
      <span class="policy">政策懶人包</span>

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
      candidates: [
        {
          // 第一位候選人
          position: "進補黨提名/總統候選人",
          name: "劉緯育",
          education: "美國哈佛大學 公共衛生學院碩士<br>成功大學 學士後醫學系畢業台灣大學 復健學系",
          experiences: [
            "進補黨 黨主席",
            "第 10 屆不分區立法委員",
            "復興市市長",
            "立法院進補黨團幹事長",
            "立法院司法委員會召集委員",
            "立法院跨黨派厚生會會長",
            "第4、5、6、7屆立法委員",
            "幼稚園園長",
          ],
        },
        {
          // 第二位候選人
          position: "進補黨提名/總統候選人",
          name: "陳舒淇",
          education: "美國哈佛大學 公共衛生學院碩士<br>成功大學 學士後醫學系畢業台灣大學 復健學系",
          experiences: [
            "總統府顧問",
            "進補黨國際事務部主任",
            "國際自由政黨聯盟（LI）副主席",
            "臺灣民主基金會董事",
            "幼稚園園長",
            "幼稚園園長",
            "幼稚園園長",
            "幼稚園園長",
          ]
        },
      ],
      components: {
        bookmark,
        vueMarquee,
      }
    };
  },
}

</script>




<style lang="scss">
@import '../assets/scss/base/border';
@import '../assets/scss/base/font';
@import '../assets/scss/base/color';

/* 手機版 */
.election {

  // banner圖
  .election_banner {
    background-image: url('../assets/image/election/banner-480px.png');
    height: 1540px;
  }

  .election_info {
    display: flex;

    /* 候選人資訊 */
    .election_content {
      ul {

        li:nth-child(1) {
          color: #9D9D9D;
        }

        li:nth-child(2) {
          color: $orange;
        }

        li:nth-child(3) {
          @include title_5;
        }
      }
    }

    // 背景P
    .P_img {
      display: none;
    }
  }



  .policy {
    display: flex;
    justify-content: center;
    font-size: 36px;
    margin-bottom: 60px;
    font-weight: bold;
  }
}

/*平板 */
@media screen and (min-width: 768px) {
  .election {

    /* banner */
    .election_banner {
      background-image: url('../assets/image/election/banner-768px.png');
      background-repeat: no-repeat;
    }
  }
}



/*PC板 */
@media screen and (min-width: 1200px) {
  .election {

    /* banner */
    .election_banner {
      background-image: url('../assets/image/election/banner-1000px.png');
      background-repeat: no-repeat;
    }

    /* 背景P */
    .P_img {
      background-position: left center;
      background-attachment: fixed;
      width: 50%;
    }

    /* 候選人資訊 */
    .election_content {}

    /* 跑馬燈 */
    .election_marquee {
      background-color: #D4FF1F;
    }
  }
}
</style>