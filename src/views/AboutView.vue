<template>
  <div class="about">
    <div class="contect_banner">
      <img src="/image/about/about_banner.svg" alt="about_banner.svg" />
      <h1>關於我們</h1>
    </div>
    <!-- 麵包屑 -->
    <Bread :page="dog" />
  </div>
  <div class="about_wrap">

    <div class="about_content">
      <div class="about_content-2">
        <div class="about_content-3">
          以三大政策方向，讓台灣融入區域經濟、改善投資環境，帶動企業創新轉型
        </div>
        <div class="about_content-4"></div>
        <div class="about_content-5">
          透過三大政策方向，我們能引領台灣融入區域經濟，加強與周邊國家合作，促進貿易，打造共榮經濟環境。優化投資環境，進行法規改革，提供激勵，吸引企業投資發展。著重企業創新轉型，建立創新生態系統，支持研發。這三項政策結合，有助於提升競爭力，帶動經濟成長，確保台灣在全球經濟中有更穩固的地位。
        </div>
      </div>
    </div>

    <div class="rule">
      <div class="rule-2">
        <div class="rule-3">
          <div class="rule-column">
            <div class="rule-4">
              我們是台灣的人民。我們堅信政治應該是我們日常生活中的重要一環，以「追求台灣的共同利益和增進人民福祉」為我們的宗旨。期望憑藉我們的存在和努力，台灣能變得更加美好。基於這一信念，我們相信集體的智慧遠勝於個人，要達到長遠的目標，需要大家的共同前行。
            </div>
          </div>
          <div class="rule-column-2">
            <div class="rule-5">
              <div class="rule-6">黨會規範</div>
              <img loading="lazy" src="@/assets/image/about/logo.svg" class="img" />
            </div>
          </div>
          <div class="rule-column-3">
            <div class="rule-7">
              雖然我們來自不同的背景，但現在擁有同一片天空，並期望邁向一個共同的未來。我們的願景是終結政治派系之間的紛爭和族群間的分歧，通過實現包容和融合，達到真正的和諧與榮耀。我們相信，只有先實現彼此的相互接納和融合，最終才能共同分享榮光。
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 決策三原則 -->
    <div class="Three">
      <span class="policy rule-6">決策三原則</span>
      <ThreeBookMark />
    </div>

    <!-- 台灣價值 -->
    <div class="Value-main-container">
      <div class="Value-title">台灣價值</div>
      <section class="Value-section">
        <div class="Value-column">
          <div class="Value-img-container">
            <img loading="lazy" src="@/assets/image/about/GreanTaiwan 1.svg" class="Value-img" />
            <div class="Value-small-img1">
              <img src="@/assets/image/about/small_image_1.svg" alt="small_image_1" @click="showContent(1)" />
            </div>
            <div class="Value-small-img2">
              <img src="@/assets/image/about/small_image_2.svg" alt="small_image_2" @click="showContent(2)" />
            </div>
            <div class="Value-small-img3">
              <img src="@/assets/image/about/small_image_3.svg" alt="small_image_3" @click="showContent(3)" />
            </div>
            <div class="Value-small-img4">
              <img src="@/assets/image/about/small_image_4.svg" alt="small_image_4" @click="showContent(4)" />
            </div>
            <div class="Value-small-img5">
              <img src="@/assets/image/about/small_image_5.svg" alt="small_image_5" @click="showContent(5)" />
            </div>
            <div class="Value-small-img6">
              <img src="@/assets/image/about/small_image_6.svg" alt="small_image_6" @click="showContent(6)" />
            </div>
            <div class="Value-small-img7">
              <img src="@/assets/image/about/small_image_7.svg" alt="small_image_7" @click="showContent(7)" />
            </div>
            <div class="Value-small-img8">
              <img src="@/assets/image/about/small_image_8.svg" alt="small_image_8" @click="showContent(8)" />
            </div>
          </div>
        </div>
        <div class="Value-column">
          <div class="Value-description">
            <!-- 內容將在這裡動態更新 -->
            <h2 class="Value-sub-title" ref="ValueSubtitle">DEMOCRACY</h2>
            <div class="Value-divider"></div>
            <div class="Value-content" ref="ValueDescription">
              <p class="Value-word">政治為人民所共有，人民有平等的權利來參與政治，不受限於黨派意識型態、性別、族群、階級，開放政府、全民參與，是我們的目標。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- <Background_green :height="100" /> -->
  </div>

 
  <!-- 分隔線 -->
  <!-- <div class="IamSpace" style="display: block; width: 100%; height: 1200px;"></div> -->
</template>

<script>
import Background_green from "@/components/Background_green.vue";
import Bread from "../components/Bread.vue";
import ThreeBookMark from "../components/ThreeBookMark.vue";
export default {
  components: {
    Bread,
    ThreeBookMark,
    Background_green
  },
  data() {
    return {
      applyCustomStyle: false,
      // 內容數據，例如：
      titles: [
        "DEMOCRACY",
        "FREEDOM",
        "DIVERSITY",
        "OPEN",
        "RULE OF LAW",
        "HUMAN RIGHTS",
        "CARE",
        "SUSTAINABILITY",
      ],
      contents: [
        "政治為人民所共有，人民有平等的權利來參與政治，不受限於黨派意識型態、性別、族群、階級，開放政府、全民參與，是我們的目標。",
        "自由是每個人的根本權利，追求夢想與表達意見，是社會不斷進步的重要動能。",
        "多元是文明的象徵，尊重各種觀點和信仰，共同建構充滿活力的社會。",
        "開放政府促進透明參與，民眾有權監督，打造公正、高效的治理機制。",
        "法治是社會秩序的基石，以法律守護公民權益，維護社會公正。",
        "人權是普世價值，每個人生而平等，應受到尊重和保護。",
        "關懷弱勢是社會的溫度，共同發聲、提供支持，實現平等機會。",
        "永續經營為後代着想，保護環境、節約資源，實現社會經濟的永續發展。",
      ],
    };
  },
  methods: {
    showContent(index) {
      this.applyCustomStyle = true;
      // 在這個方法中更新 Value-description 的內容
      this.$refs.ValueDescription.innerHTML = this.contents[index - 1];
      this.applyCustomStyle = true;
      // 在這個方法中更新 Value-sub-title 的內容
      this.$refs.ValueSubtitle.innerHTML = this.titles[index - 1];

    },
  },

};

</script>

<style scoped lang="scss"></style>