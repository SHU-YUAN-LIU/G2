<template>
  <div class="about_wrap">
    <div class="about">
      <div class="contect_banner">
        <img
          src="@/assets/image/about/about_banner.svg"
          alt="about_banner.svg"
        />
        <h1>關於我們</h1>
      </div>
      <!-- 麵包屑 -->
      <Bread :page="dog" />
    </div>

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
              <img
                loading="lazy"
                src="@/assets/image/about/logo.svg"
                class="img"
              />
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
    <div class="div">
    <div class="div-2">台灣價值</div>
    <div class="div-3">
      <div class="div-4">
        <div class="column">
          <img
            loading="lazy"
            srcSet="/src/assets/image/about/GreanTaiwan.png"
            class="value_img"
          />
        </div>
        <div class="column-2">
          <div class="div-5">
            <div class="div-6">DEMOCRACY</div>
            <div class="div-7"></div>
            <div class="div-8">
              政治為人民所共有，人民有平等的權利來參與政治，不受限於黨派、意識型態、性別、族群、階級，開放政府、全民參與，是我們的目標。
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>

  
</template>

<script>
import Bread from "../components/Bread.vue";
import ThreeBookMark from '../components/ThreeBookMark.vue';
export default {
  components: {
    Bread,
    ThreeBookMark,
  },
};

</script>

<style scoped lang="scss"></style>
