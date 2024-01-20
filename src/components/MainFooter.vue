<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
    <footer>
        <div class="footer_container">
            <div class="footer_logo">
                <img src="../assets/image/login/Logo.png" alt="">
            </div>
            <div class="footer_contact">
                <h4>中央黨部</h4>
                <ul>
                    <li>地址 | 桃園市中壢區復興路46號9樓</li>
                    <li>電話 | 03-4251108</li>
                    <li>傳真 | 03-4251108</li>
                    <li>信箱 | weiiyuuu@gmail.com</li>
                </ul>
            </div>
            <div class="footer_media">
                <h4>社群媒體</h4>
                <div class="footer_icon">
                    <img src="../assets/image/footer/youtube.png" alt="">
                    <img src="../assets/image/footer/fb.png" alt="">
                </div>
                <div class="footer_icon">
                    <img src="../assets/image/footer/ig.png" alt="">
                    <img src="../assets/image/footer/line.png" alt="">
                </div>
            </div>
        </div>
        <div class="footer_declaration">
            <p>本網站為緯育TibaMe_前端設計工程師班第88期學員專題成果作品,本平台僅供學習、展示之用。若有抵觸有關著作權,或有第三人主張侵害智慧財產權等情事,均由學員負法律上責任,緯育公司概不負責。若有侵權疑慮,您可以私訊[ 緯育TibaMe ],後續會由專人協助處理。</p>
        </div>
    </footer>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
