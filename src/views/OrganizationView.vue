<template>
  <div class="organization_wrap">
    <div class="organization">
      <div class="contect_banner">
        <img
          src="@/assets/image/about/organization_banner.svg"
          alt="organization_banner.svg"
        />
        <h1>組織團隊</h1>
      </div>
      <!-- 麵包屑 -->
      <Bread :page="dog" />
    </div>
    <h1 class="organization-title">青年進補黨中央委員會<br />組織團隊</h1>
    <h1 class="organization-title2">中央黨部</h1>

    <div class="card-container">
      <div
        v-for="(candidate, index) in candidates"
        :key="index"
        class="card"
        @click="showPopup(candidate)"
      >
        <img
          :src="candidate.image"
          alt="Candidate Image"
          class="candidate-image"
        />
        <div class="candidate-info">
          <p class="candidate-name">{{ candidate.name }}</p>
          <p class="candidate-position">{{ candidate.position }}</p>
        </div>
      </div>
    </div>

    <h1 class="organization-title3">地方黨部</h1>

    <div class="localparty">
      <div class="localcard-container">
        <div
          v-for="(localcandidate, index) in localcandidates"
          :key="index"
          class="localcard"
        >
          <div class="localcandidate-info">
            <p class="localcandidate-name">{{ localcandidate.name }}</p>
            <p class="localcandidate-position">{{ localcandidate.position }}</p>
          </div>
          <div class="local-span" @click="showDetails(localcandidate)">
            <div class="add">詳細資訊</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 分隔線 -->
  <!-- <div class="IamSpace" style="display: block; width: 100%; height: 10000px;"></div> -->
</template>

<script>
import Bread from "../components/Bread.vue";
export default {
  components: {
    Bread,
  },
  data() {
    return {
      candidates: [
        {
          name: "陳緯珊",
          position: "黨主席",
          image: "/src/assets/image/about/Candidate1.svg",
        },
        {
          name: "陳優華",
          position: "秘書長",
          image: "/src/assets/image/about/Candidate2.svg",
        },
        {
          name: "林悅芬",
          position: "副秘書長",
          image: "/src/assets/image/about/Candidate3.svg",
        },
        {
          name: "劉緯育",
          position: "發言人",
          image: "/src/assets/image/about/Candidate4.svg",
        },
        {
          name: "張美玲",
          position: "發言人",
          image: "/src/assets/image/about/Candidate5.svg",
        },
        {
          name: "許嘉宏",
          position: "發言人",
          image: "/src/assets/image/about/Candidate6.svg",
        },
        {
          name: "吳建民",
          position: "政策研究部主任",
          image: "/src/assets/image/about/Candidate7.svg",
        },
        {
          name: "陳淑萍",
          position: "新聞輿情部主任",
          image: "/src/assets/image/about/Candidate8.svg",
        },
        {
          name: "林宗良",
          position: "媒體創意部主任",
          image: "/src/assets/image/about/Candidate9.svg",
        },
        {
          name: "黃雅琳",
          position: "組織部主任",
          image: "/src/assets/image/about/Candidate10.svg",
        },
        {
          name: "王明德",
          position: "行政部主任",
          image: "/src/assets/image/about/Candidate11.svg",
        },
      ],
      localcandidates: [
        { id: 1, name: "陳建宏", position: "基隆黨部主任" },
        { id: 2, name: "張秀芬", position: "新北黨部主任" },
        { id: 3, name: "李志明", position: "台北黨部主任" },
        { id: 4, name: "蔡雅雯", position: "桃園黨部主任" },
        { id: 5, name: "林國良", position: "新竹黨部主任" },
        { id: 6, name: "王美玲", position: "苗栗黨部主任" },
        { id: 7, name: "陳明宏", position: "台中黨部主任" },
        { id: 8, name: "鄭雅筑", position: "彰化黨部主任" },
        { id: 9, name: "吳宗霖", position: "雲林黨部主任" },
        { id: 10, name: "許玉美", position: "嘉義黨部主任" },
        { id: 11, name: "梁偉哲", position: "台南黨部主任" },
        { id: 12, name: "蔡佳琳", position: "高雄黨部主任" },
        { id: 13, name: "鄭文彬", position: "屏東黨部主任" },
        { id: 14, name: "賴宏偉", position: "花蓮黨部主任" },
        { id: 15, name: "吳偉賢", position: "宜蘭黨部主任" },
        // ... 其他候選人的資料 ...
      ],
    };
  },
  methods: {
    showPopup(candidate) {
      // Implement logic to show popup with candidate details
      
      console.log("Show popup for", candidate.name);
    },
    showDetails(localcandidate) {
      // 调用弹窗显示详细信息的逻辑，您可以根据需要实现
      console.log("Show details for", localcandidate.name);
      // 在这里添加弹窗显示的逻辑，例如使用模态框或其他方式
    },

  },
};
</script>

<style scoped lang="scss"></style>
