<template>
  <div class="election">
    <!-- banner -->
    <div class="election_banner"></div>
    <!-- 候選人資料 -->
    <div class="election_info">
      <div class="election_content">
        <ul v-for="(candidate, index) in candidates" :key="index">
          <li>{{ candidate.position }}</li>
          <li>{{ candidate.name }}</li>
          <li>學歷</li>
          <li v-for="education in candidate.education">{{ education }}</li>
          <li>經歷</li>
          <li v-for="experience in candidate.experiences">{{ experience }}</li>
        </ul>
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
import vueMarquee from "@/components/Marquee.vue";
import bookmark from "@/components/BookMark.vue"



export default {
  data() {
    return {
      slogan: '這是一場改變政治文化的社會運動，投給劉緯育，投給自己的未來。',
      candidates: [
        {
          // 第一位候選人
          position: "進補黨提名/總統候選人",
          name: "劉緯育",
          education: [
            "美國哈佛大學 公共衛生學院碩士",
            "成功大學 學士後醫學系畢業",
            "台灣大學 復健學系",
          ],
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
          education: [
            "美國哈佛大學 公共衛生學院碩士",
            "成功大學 學士後醫學系畢業",
            "台灣大學 復健學系",
          ],
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
    };
  },
  components: {
    vueMarquee,
    bookmark,
  },
  mounted() {
    document.title = "候選人資訊";
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