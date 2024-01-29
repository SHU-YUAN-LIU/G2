<template>
    <div class="elecion_journey">
        <!-- banner -->
        <banner :bannerTitle="bannerTitle" :bannerPic="bannerPic" />
        <!-- 麵包屑 -->
        <breadCrumbs />
        <!-- 跑馬燈 -->
        <vueMarquee :marqueeArray="slogan" />
        <!-- 行程站台內容 -->
        <div class="journey_title">
            <h2>行程站台</h2>
        </div>
        <div class="election_container">
            <!-- 地圖 -->
            <div class="minimap">
                <div>
                    <Button type="error" @click="red = !red">{{ red ? '隱藏' : '顯示' }}紅色Pin</Button> |
                    <Button type="info" @click="blue = !blue">{{ blue ? '隱藏' : '顯示' }}藍色Pin</Button> |
                </div>
                <div class="minimap_svg" :class="{ redShow: red, blueShow: blue }">
                    <MiniMap />
                </div>
            </div>
            <!-- 行程 -->
            <div class="journey">
                <h3>行程</h3>
                <h3>即將開始</h3>
                <div class="journey_card">
                    <div>
                        <p>2024/01/01(五)18:30-22:00</p>
                        <p>Team進補召集令 112凱道見</p>
                        <p>凱達格蘭大道</p>
                        <p>台北市中正區凱達格蘭大道</p>
                    </div>
                    <div>
                        <img src="../assets/image/election/journey-1.png" alt="">
                    </div>
                </div>
                <div class="journey_card">
                    <div>
                        <p>2024/01/01(五)18:30-22:00</p>
                        <p>Team進補召集令 112凱道見</p>
                        <p>凱達格蘭大道</p>
                        <p>台北市中正區凱達格蘭大道</p>
                    </div>
                    <div>
                        <img src="../assets/image/election/journey-1.png" alt="">
                    </div>
                </div>
                <div class="journey_card">
                    <div>
                        <p>2024/01/01(五)18:30-22:00</p>
                        <p>Team進補召集令 112凱道見</p>
                        <p>凱達格蘭大道</p>
                        <p>台北市中正區凱達格蘭大道</p>
                    </div>
                    <div>
                        <img src="../assets/image/election/journey-1.png" alt="">
                    </div>
                </div>
                <div class="journey_card">
                    <div>
                        <p>2024/01/01(五)18:30-22:00</p>
                        <p>Team進補召集令 112凱道見</p>
                        <p>凱達格蘭大道</p>
                        <p>台北市中正區凱達格蘭大道</p>
                    </div>
                    <div>
                        <img src="../assets/image/election/journey-1.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 倒數計時器 -->
    <CountDown />
</template>


<script>
import Banner from '../components/Banner.vue';
import breadCrumbs from '../components/Bread.vue';
import vueMarquee from '@/components/Marquee.vue';
import CountDown from '../components/CountDown.vue';
import MiniMap from '../components/MiniMap.vue';
export default {
    data() {
        return {
            bannerTitle: '候選人行程',
            bannerPic: 'src/assets/image/election/journey.png',
            slogan: '這是一場改變政治文化的社會運動，投給劉緯育，投給自己的未來。',
            red: true,
            blue: true,
            list: []

        }
    },
    components: {
        Banner,
        breadCrumbs,
        vueMarquee,
        CountDown,
        MiniMap,
    },
    methods: {
    },
    mounted() {
        document.title="青年進補黨 - 活動資訊";
    },
}
</script>


<style scoped lang="scss">
@import '../assets/scss/base/border';
@import '../assets/scss/base/font';
@import '../assets/scss/base/color';

.elecion_journey {


    .journey_title {
        h2 {
            @include title_2;
            text-align: center;
            margin-top: 70px;
        }
    }

    .election_container {
        display: flex;
        align-items: center;
        position: relative;
        right: 200px;

        .journey {
            background-color: #272727;
            border-radius: 10px;
            height: 700px;
            width: 600px;
            display: flex;
            flex-direction: column;
            align-items: flex-end;

            h3 {
                @include title_6;
                color: #fff;
                text-align: center;
                width: 100%;
                height: 60px;   
                line-height: 60px;

                &:nth-child(2) {
                    background-color: $orange;
                }
            }

            .journey_card {
                display: flex;
                justify-content: space-between;
                // border-bottom: 1px solid #FFFFFF;
                border-left: 1px solid #fff;
                width: 360px;
                padding: 10px 20px;
                p {
                    font-size: 14px;
                    line-height: 20px;
                    color: $gray_3;

                    &:nth-child(1){
                        position: relative;
                    }

                    &:nth-child(1)::before {
                        content: '';
                        width: 10px;
                        height: 10px;
                        background-color: $gray_3;
                        border: 1px solid #fff;
                        border-radius: 50%;
                        display: inline-block;
                        position: absolute;
                        top: 5px;
                        left: -26px;
                    }

                    &:nth-child(2) {
                        color: #fff;
                    }

                    &:nth-child(3) {
                        margin-top: 30px;
                    }
                }
                div:last-child{
                    &::after{
                        content: '';
                        width: 240%;
                        height: 1px;
                        background: $white;
                        display: block;
                        margin-left: -180px;
                        margin-top: 5px;
                    }
                }
               
            }
        }
    }
}
</style>