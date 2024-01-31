<template>
    <div v-if="showSuccessPop" class="showSuccessPop">
        <div class="successPop_bg">
            <div class="con_success">
                <!-- 阻止冒泡事件.stop -->
                <!-- 打叉 -->
                <Router-link to="/" class="cross" @click="closeLightbox"><img src="/image/contect/cross.svg"
                        alt=""></Router-link>
                <div class="con_success_group">
                    <!-- 送出成功 -->
                    <div class="success_top">
                        <h3>送出成功</h3>
                        <img src="/image/contect/successCheck.svg" alt="">
                        <hr>
                        <p>案件編號:ABC12345678</p>
                        <p>表單送出日期:2024/01/01</p>
                        <p>相關訊息已送至您的信箱囉!</p>
                    </div>
                    <!-- 親愛的陳情者 -->
                    <div class="success_bottom">
                        <p>親愛的陳情者</p>
                        <p>
                            感謝您的關注與參與。我們已經收到了您提交的陳情案件表單，您的意見對我們來說非常重要。我們將儘快進行審核並處理您所提出的陳情事宜。請耐心等待，我們將盡快回覆，並在解決方案上持續與您保持聯繫。我們感謝您的發聲。再次感謝您的支持與協助。
                        </p>
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
            showSuccessPop: false,
        }
    },
    methods: {
        closeLightbox() {
            this.showSuccessPop = false;
            console.log(this.showLightbox);
            document.body.style.overflow = 'auto';
        },
    },

}
</script>
<style lang="scss"></style>
