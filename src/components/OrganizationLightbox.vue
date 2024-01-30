<template>
  <div v-if="showLightbox" class="donate_lightbox" @click="closeLightbox">
    <div class="donate_container" @click.stop>
      <!-- 打叉icon -->
      <div class="icon" @click="closeLightbox">
        <img src="@/assets/image/contect/cross.svg" alt="" />
      </div>
      <div>
        <div class="PartyInfo-container">
          <div class="PartyInfo-column">
            <img
              loading="lazy"
              srcSet="/src/assets/image/about/Candidate1.svg"
              class="PartyInfo-img"
            />
          </div>
          <div class="PartyInfo-column-2">
            <div class="PartyInfo-Info">
              <h1 class="PartyInfo-name">陳緯珊</h1>
              <div class="PartyInfo-solid"></div>
              <h2 class="PartyInfo-position">現任</h2>
              <div class="party-info">
                <p class="party">青年黨 黨主席</p>
                <p class="legislator">第 10 屆不分區立法委員</p>
              </div>
              <h2 class="PartyInfo-education">學歷</h2>
              <div class="PartyInfo-education-info">
                <p>
                  美國哈佛大學 公共衛生學院碩士
                  <br />
                  成功大學 學士後醫學系畢業
                  <br />
                  台灣大學 復健學系
                </p>
              </div>
              <h2 class="PartyInfo-experience">經歷</h2>
              <div class="PartyInfo-experience-info">
                <p>
                  青年黨 黨主席
                  <br />
                  第 10 屆不分區立法委員
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLightbox: false,
    };
  },
  methods: {
    closeLightbox() {
      this.showLightbox = false;
      document.body.style.overflow = "auto";
    },
  },
};
</script>
<style lang="scss">
@import "../assets/scss/base/color";
@import "../assets/scss/base/font";
@import "../assets/scss/base/border";

.donate_lightbox {
  width: 100vw;
  height: 100vh;
  background-color: #4b4b4b72;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  .donate_container {
    width: 1228px;
    height: 740px;
    margin: auto;
    background-color: $white;
    border: #ff892e solid 6px;
    border-radius: $border-radius-1;
    display: flex;
    flex-wrap: wrap;
    // justify-content: center;
    align-items: center;
    position: absolute;

    .icon {
      position: absolute;
      width: 50px;
      height: 50px;
      top: -25px;
      right: -25px;
      cursor: pointer;
      position: absolute;
      z-index: 3;
    }

    .donate_content {
      display: flex;

      .donate_top {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
        width: 400px;
        height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: $white;
        border-radius: $border-radius-1;
      }
    }
  }
}

.PartyInfo-container {
  gap: 20px;
  display: flex;
  //   flex-wrap: wrap;
  margin-top: 5px;
}

@media (max-width: 991px) {
  .PartyInfo-container {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}

.PartyInfo-column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 500px;
  margin-left: 50px;
  margin-top: 15px;
}

@media (max-width: 991px) {
  .PartyInfo-column {
    width: 100%;
  }
}

.PartyInfo-img {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 100%;
}

@media (max-width: 991px) {
  .PartyInfo-img {
    margin-top: 40px;
  }
}

.PartyInfo-column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 61%;
  margin-left: 30px;
  //   margin: auto;
}

@media (max-width: 991px) {
  .PartyInfo-column-2 {
    width: 100%;
  }
}

.PartyInfo-Info {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  color: #000;
  letter-spacing: 10px;
  padding: 0 20px;
}

@media (max-width: 991px) {
  .PartyInfo-Info {
    max-width: 100%;
    margin-top: 40px;
  }
}

.PartyInfo-name {
  letter-spacing: 13px;
  font-family: $font_family_2;
  font-size: $font_size_2;
  font-weight: initial;
}

@media (max-width: 991px) {
  .PartyInfo-name {
    max-width: 100%;
    font-size: 40px;
  }
}

.PartyInfo-solid {
  border: #000 solid 1px;
  width: 560px;
  margin-top: 10px;
}

.PartyInfo-position {
  color: var(--text-color, #ff892e);
  margin-top: 5px;
  font-family: $font_family_2;
  font-size: $font_size_2;
  font-weight: initial;
}

@media (max-width: 991px) {
  .PartyInfo-position {
    max-width: 100%;
  }
}

.party-info {
  justify-content: center;
  text-align: justify;
  letter-spacing: 4.8px;
  margin-top: 10px;
  font-family: $font_family_1;
  font-size: $font_size_7;
  font-weight: 500;
}

@media (max-width: 991px) {
  .party-info {
    max-width: 100%;
  }
}

.PartyInfo-education {
  color: var(--text-color, #ff892e);
  font-family: $font_family_2;
  font-size: $font_size_2;
  font-weight: initial;
  margin-top: 5px;
}

@media (max-width: 991px) {
  .PartyInfo-education {
    max-width: 100%;
  }
}

.PartyInfo-education-info {
  justify-content: center;
  text-align: justify;
  letter-spacing: 4.8px;
  margin-top: 10px;
  font-family: $font_family_1;
  font-size: $font_size_7;
  font-weight: 500;
}

@media (max-width: 991px) {
  .PartyInfo-education-info {
    max-width: 100%;
  }
}

.PartyInfo-experience {
  color: var(--text-color, #ff892e);
  font-family: $font_family_2;
  font-size: $font_size_2;
  font-weight: initial;
  margin-top: 5px;
}

@media (max-width: 991px) {
  .PartyInfo-experience {
    max-width: 100%;
  }
}

.PartyInfo-experience-info {
  justify-content: center;
  text-align: justify;
  letter-spacing: 4.8px;
  margin-top: 10px;
  font-family: $font_family_1;
  font-size: $font_size_7;
  font-weight: 500;
}

@media (max-width: 991px) {
  .PartyInfo-experience-info {
    max-width: 100%;
  }
}
</style>
