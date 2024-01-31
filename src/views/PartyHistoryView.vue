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
      <section class="index_health_banner" ref="indexHealthBanner">
        <div class="index_health_wrap">
            <div
                class="box"
                :style="`transform:translateX(-${translate}px)`"
                ref="healthWrap"
            >
                <div class="title">
                    <p>
                        HEALTH<br />VEGETABLE<br />
                        <span>食材朔源</span>
                    </p>
                    <div class="title_bg">
                        <img :src="vegetable.bg" alt="" />
                    </div>
                </div>
                <div class="veg01 show_text" ref="veg01">
                    <img :src="vegetable.Img" alt="" />
                    <div class="veg_bg"></div>
                    <div class="veg_title">
                        <p>高麗菜<br />CABBAGE</p>
                        <div class="veg_title_bg"></div>
                    </div>
                </div>
                <div class="veg02" ref="veg02">
                    <img :src="vegetable.Img2" alt="" />
                    <div class="veg_bg"></div>
                    <div class="veg_title">
                        <p>花椰菜<br />BROCOLI</p>
                        <div class="veg_title_bg"></div>
                    </div>
                </div>
                <div class="veg03" ref="veg03">
                    <img :src="vegetable.Img3" alt="" />
                    <div class="veg_bg"></div>
                    <div class="veg_title">
                        <p>甜椒<br />PEPPER</p>
                        <div class="veg_title_bg"></div>
                    </div>
                </div>
                <div class="veg04" ref="veg04">
                    <img :src="vegetable.Img4" alt="" />
                    <div class="veg_bg"></div>
                    <div class="veg_title">
                        <p>南瓜<br />PUMPKIN</p>
                        <div class="veg_title_bg"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>



      <h1 class="organization-title3">宣傳影片</h1>
    </div>
  </div>
</template>

<script>
import Bread from "../components/Bread.vue";
import OrganizationLightbox from "../components/OrganizationLightbox.vue";


export default {
  components: {
    Bread,
    OrganizationLightbox,
  }
}
</script>

<style scoped lang="scss"></style>
