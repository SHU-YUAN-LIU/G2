<template>
    <footer>
        <div class="footer_container">
            <div class="footer_logo">
                <img src="@/assets/image/login/Logo.png" alt="">
            </div>
            <div class="footer_contact">
                <h4>中央黨部</h4>
                <ul>
                    <li v-for="list in info">
                        {{ list.type }}{{ list.value }}
                    </li>
                </ul>
            </div>
            <div class="footer_media">
                <h4>社群媒體</h4>
                <div class="footer_icon">
                    <img src="@/assets/image/footer/youtube.png" alt="">
                    <img src="@/assets/image/footer/fb.png" alt="">
                </div>
                <div class="footer_icon">
                    <img src="@/assets/image/footer/ig.png" alt="">
                    <img src="@/assets/image/footer/line.png" alt="">
                </div>
            </div>
        </div>
        <div class="footer_declaration">
            <p>本網站為緯育TibaMe_前端設計工程師班第88期學員專題成果作品,本平台僅供學習、展示之用。若有抵觸有關著作權,或有第三人主張侵害智慧財產權等情事,均由學員負法律上責任,緯育公司概不負責。若有侵權疑慮,您可以私訊[
                緯育TibaMe ],後續會由專人協助處理。</p>
        </div>
    </footer>
</template>

<script>
export default {
    components: {

    },
    data() {
        return {
            info: [
                {
                    "type": "地址 | ",
                    "value": "桃園市中壢區復興路46號9樓"
                },
                {
                    "type": "電話 | ",
                    "value": "03-4251108"
                },
                {
                    "type": "傳真 | ",
                    "value": "03-4251108"
                },
                {
                    "type": "信箱 | ",
                    "value": "weiiyuuu@gmail.com"
                }
            ],
        }
    },
    created() {

    },

}
</script>

<style scoped></style>
