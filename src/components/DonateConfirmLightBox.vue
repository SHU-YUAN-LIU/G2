<template>
    <div v-if="showLightbox" class="donate_lightbox" @click="closeLightbox">
        <div class="donate_container" @click.stop>
            <!-- 打叉icon -->
            <div class="icon" @click="closeLightbox"><img src="@/assets/image/contect/cross.svg" alt="">
            </div>
            <!-- 捐款成功 -->
            <div class="donate_content">
                <div class="donate_top">
                    <p>捐款成功</p>
                    <img src="@/assets/image/contect/successCheck.svg" alt="">
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
        }
    },
    methods: {
        closeLightbox() {
            this.showLightbox = false;
            document.body.style.overflow="auto";
        }
    },
}
</script>
<style lang="scss">
@import '../assets/scss/base/color';
@import '../assets/scss/base/font';
@import '../assets/scss/base/border';

.donate_lightbox {
    background-color: #4b4b4b72;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2000;

    .donate_container {
        width: 600px;
        height: 400px;
        margin: auto;
        background-color: $green;
        border-radius: $border-radius-1;
        display: flex;
        justify-content: center;
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
            @include title_3;

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

@media (max-width: 768px){
    .donate_lightbox {
        .donate_container {
            width: 350px;
            height: 400px;
            .donate_content {
                .donate_top {
                    width: 250px;
                    height: 300px;
                }
            }
        }
    }
}
</style>