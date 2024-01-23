<template>
  <div class="value">
    <div class="value-2">台灣價值</div>
    <div class="value-3">
      <div class="value-4">
        <div class="value-column">
          <img
            loading="lazy"
            srcSet="..."
            class="img"
          />
        </div>
        <div class="value-column-2">
          <div class="value-5">
            <div class="value-6">DEMOCRACY</div>
            <div class="value-7"></div>
            <div class="value-8">
              政治為人民所共有，人民有平等的權利來參與政治，不受限於黨派、意識型態、性別、族群、階級，開放政府、全民參與，是我們的目標。
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.value {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
}
.value-2 {
  color: #000;
  text-align: center;
  letter-spacing: 13px;
  white-space: nowrap;
  font: 400 65px/97% Mantou Sans, sans-serif;
}
@media (max-width: 991px) {
  .value-2 {
    font-size: 40px;
    white-space: initial;
  }
}
.value-3 {
  align-self: stretch;
  margin-top: 191px;
  width: 100%;
}
@media (max-width: 991px) {
  .value-3 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.value-4 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .value-4 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.value-column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 62%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .value-column {
    width: 100%;
  }
}
.img {
  aspect-ratio: 0.74;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  flex-grow: 1;
}
@media (max-width: 991px) {
  .img {
    max-width: 100%;
    margin-top: 40px;
  }
}
.value-column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 38%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .value-column-2 {
    width: 100%;
  }
}
.value-5 {
  border-radius: var(--40px-, 10px);
  border: 3px solid var(--, #ff892e);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: auto 0;
  padding: 50px 80px;
}
@media (max-width: 991px) {
  .value-5 {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
}
.value-6 {
  justify-content: center;
  color: #000;
  text-align: justify;
  letter-spacing: 3.6px;
  margin-top: 23px;
  white-space: nowrap;
  font: 600 36px/131% Noto Sans, sans-serif;
}
@media (max-width: 991px) {
  .value-6 {
    white-space: initial;
    margin: 0 8px;
  }
}
.value-7 {
  background-color: #000;
  margin-top: 22px;
  width: 259px;
  max-width: 100%;
  height: 1px;
}
@media (max-width: 991px) {
  .value-7 {
    margin: 0 8px;
  }
}
.value-8 {
  justify-content: center;
  color: #000;
  text-align: justify;
  letter-spacing: 2.08px;
  max-width: 259px;
  margin: 23px 0 20px;
  font: 500 16px/27px Noto Sans, sans-serif;
}
@media (max-width: 991px) {
  .value-8 {
    margin: 0 8px;
  }
}
</style>