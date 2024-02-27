<template>
  <div class="election">
    <!-- banner -->
    <div class="election_banner">
      <img src="@/assets/image/election/banner-1920px.png" alt="選舉banner圖">
    </div>
    <!-- 候選人 -->
    <div class="horizontal-sliders">
      <!-- 第一位候選人 -->
      <div class="election_info_slide">
        <!-- 候選人圖片 -->
        <img src="../assets/image/election/boy.png" alt="男候選人">
        <!-- 候選人介紹 -->
        <ul>
          <li>進補黨提名/總統候選人</li>
          <li>劉緯育</li>
          <li>學歷</li>
          <li>美國哈佛大學 公共衛生學院碩士</li>
          <li>經歷</li>
          <li>進補黨 黨主席</li>
          <li> 第10 屆不分區立法委員</li>
          <li> 復興市市長</li>
          <li> 立法院進補黨團幹事長</li>
          <li> 立法院司法委員會召集委員</li>
          <li> 立法院跨黨派厚生會會長</li>
        </ul>
      </div>
      <!-- 第二位候選人 -->
      <div class="election_info_slide">
        <!-- 候選人圖片 -->
        <img src="../assets/image/election/girl.png" alt="女候選人">
        <!-- 候選人介紹 -->
        <ul>
          <li>進補黨提名/總統候選人</li>
          <li>陳舒淇</li>
          <li>學歷</li>
          <li>美國哈佛大學 公共衛生學院碩士</li>
          <li>經歷</li>
          <li>進補黨 黨主席</li>
          <li> 第10 屆不分區立法委員</li>
          <li> 復興市市長</li>
          <li> 立法院進補黨團幹事長</li>
          <li> 立法院司法委員會召集委員</li>
          <li> 立法院跨黨派厚生會會長</li>
        </ul>
      </div>
    </div>
    <!-- 跑馬燈 -->
    <vueMarquee :marqueeArray="slogan" />
    <!-- 政策懶人包 -->
    <div>
      <div class="election_policy">
        <span class="policy_title">政策懶人包</span>
      </div>
      <RotateCard />
    </div>
    <div class="election_background">
      <Background_green :height="'50'" />
    </div>
  </div>
</template>


<script>
import vueMarquee from "@/components/Marquee.vue";
import RotateCard from "@/components/RotateCard.vue"
import Background_green from "@/components/Background_green.vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default {
  data() {
    return {
      slogan: [
        '這是一場改變政治文化的社會運動，投給劉緯育，投給自己的未來。',
        '為了更美好的明天，讓我們一起行動起來，為改革而投票。',
      ],
    };
  },
  components: {
    vueMarquee,
    RotateCard,
    Background_green,
    gsap,
  },
  mounted() {
    document.title = "候選人資訊";

    let candidates = gsap.utils.toArray(".election_info_slide");

    gsap.to(candidates, {
      xPercent: -100 * (candidates.length - 1),
      ease: "Power1.easeInOut",
      scrollTrigger: {
        trigger: ".election_info_slide",
        pin: ".election",
        pinSpacing: true,
        scrub: 1,
        end: () => "+=" + document.querySelector(".horizontal-sliders").offsetWidth
      }
    });

  },
}
</script>

<style>
.election {
  .marq {
    margin-top: 60px;
  }
}
</style>