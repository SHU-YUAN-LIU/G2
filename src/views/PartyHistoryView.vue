<template>
  <div class="organization">
    <div class="contect_banner">
      <img src="/image/about/PartyHistory.svg" alt="PartyHistory.svg" />
      <h1>YWEP黨史</h1>
    </div>
    <!-- 麵包屑 -->
    <Bread :page="dog" />

    <div class="organization_wrap">
      <h1 class="organization-title">青年進補黨<br />大事記</h1>
      <div class="bigstory">
        <div class="bigstory-img">
          <img
            :src="cards[activeCardIndex].imgSrc"
            :alt="`history${activeCardIndex + 1}.svg`"
          />
        </div>
        <div class="bigstory-info" ref="infoContainer">
          <div
            v-for="(card, index) in cards"
            :key="index"
            class="bigstory-info-card"
          >
            <div class="bigstory-info-card-year">{{ card.year }}</div>
            <div class="bigstory-info-card-content">
              <div class="bigstory-info-card-content-title">
                {{ card.title }}
              </div>
              <div class="bigstory-info-card-content-word">
                {{ card.content }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 class="organization-title3">宣傳影片</h1>

    </div>
    <div><iframe width="100%" height="400px" src="https://www.youtube.com/embed/mKZSMpBmq70?si=neiSwK6fgYp89b_z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
  </div>
</template>

<script>
import Bread from "../components/Bread.vue";
import OrganizationLightbox from "../components/OrganizationLightbox.vue";

export default {
  components: {
    Bread,
    OrganizationLightbox,
  },
  data() {
    return {
      activeCardIndex: 0,
      cards: [
        {
          year: "2014年",
          title: "緯育黨的雛形與初步理念",
          content:
            "2014年，緯育黨的雛形開始浮現，黨內人士提出了初步的政治理念和發展目標。這一年，緯育黨的成立象徵著政治格局的變遷，並預示了其未來在政治舞台上的重要性。",
          imgSrc: "/image/about/history1.svg",
        },
        {
          year: "2015年",
          title: "黨的初創與社會參與",
          content:
            "2015年，緯育黨正式成立，開始建立自己的政治體系和組織結構。這一年，黨內人士積極參與社會事務，爭取基層支持。緯育黨的初創歷程成為其後發展的基石，也為其在政治舞台上的崛起埋下種子。",
          imgSrc: "/image/about/history2.svg",
        },
        {
          year: "2017年",
          title: "緯育黨的環境保護政策",
          content:
            "2017年，緯育黨開始強化對環境保護的承諾，推動了一系列減碳和綠能發展的政策。這一年，緯育黨不僅提出了具體的環境目標，還鼓勵民眾參與綠色生活，推動社會走向可持續發展的方向。",
          imgSrc: "/image/about/history1.svg",
        },
        {
          year: "2019年",
          title: "緯育黨的教育政策引起矚目",
          content:
            "2019年，緯育黨推出了一系列具有前瞻性的教育政策，引起了社會的廣泛關注。這些政策旨在提高教育品質、鼓勵創新和培養具有國際競爭力的人才。這一年，緯育黨在教育領域的改革成為國內外媒體關注的焦點。",
          imgSrc: "/image/about/history2.svg",
        },
        {
          year: "2021年",
          title: "選舉的危機與轉機",
          content:
            "2021年，緯育黨在地方選舉中遭遇到一些挑戰，面臨著選民對於政府施政的不滿。這一年成為緯育黨的轉折點，他們開始深入反思政策，加強與基層民眾的溝通，並積極推動改革方案，以重拾民心。",
          imgSrc: "/image/about/history1.svg",
        },
        {
          year: "2022年",
          title: "緯育黨的民主精神與政治開放",
          content:
            "2022年，緯育黨展現了其深厚的民主精神，成為引領政治開放的重要力量。這一年，緯育黨在推動政策和治理中強調了多元參與、民意尊重的價值觀，使其成為民主制度的倡導者。",
          imgSrc: "/image/about/history1.svg",
        },
        // ... (其他 bigstory-info-card 的資料)
      ],
    };
  },
  // mounted() {
  //   window.addEventListener('scroll', this.handleScroll);
  // },
  // beforeDestroy() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // },
  // methods: {
  //   handleScroll() {
  //     const containerTop = document.querySelector('.bigstory').getBoundingClientRect().top;
  //     const windowHeight = window.innerHeight;
  //     const index = Math.floor((containerTop + windowHeight / 2) / windowHeight);

  //     if (index !== this.activeCardIndex) {
  //       this.activeCardIndex = index;
  //     }
  //   }
  // },
};
</script>

<style scoped lang="scss"></style>
