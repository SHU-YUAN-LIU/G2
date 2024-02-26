<template>
  <div class="election">
    <!-- banner -->
    <div class="election_banner"></div>
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


    // 获取每个候选人的容器元素
    let candidates = gsap.utils.toArray(".election_info_slide");

    // 创建滚动触发器，控制候选人的动画
    gsap.to(candidates, {
      xPercent: -100 * (candidates.length - 1),
      ease: "none", //設置動畫的過渡效果
      scrollTrigger: {
        trigger: ".horizontal-sliders", //觸發滾動基準點
        pin: ".election", //選擇要被固定的element，直到觸發器結束
        pinSpacing: true, //保留其原來的佔位空間
        scrub: 0.5, //滾動速度
        end: "+=6000", //滾動觸發器的結束位置，將在滾動到目標元素的上邊緣後終止，距離1000px
      }
    });

    gsap.to('.marquee', {
      scrollTrigger: {
        trigger: '.next-block',
        pinnedContainer: ".main",
        start: 'top 50%',
        toggleActions: 'play pause resume pause',
      }
    })
  },
  methods: {

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