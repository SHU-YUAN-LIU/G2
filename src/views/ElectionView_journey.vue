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
            <h2>地點: {{ currentTitle }}</h2>
            <select v-model="currentPage" @change="selectloaction">
                <option>所有地區</option>
                <option>宜蘭</option>
                <option>台北</option>
                <option>桃園</option>
                <option>新竹</option>
                <option>新竹</option>
                <option>台中</option>
                <option>彰化</option>
                <option>雲林</option>
                <option>嘉義</option>
                <option>台南</option>
                <option>高雄</option>
                <option>屏東</option>
                <option>花蓮</option>
                <option>台東</option>
                <option>南投</option>
            </select>
        </div>
        <div class="election_container">
            <!-- 地圖 -->
            <div class="minimap">
                <div>
                    <!-- <Button type="error" @click="red = !red">{{ red ? '隱藏' : '顯示' }}紅色Pin</Button> |
                    <Button type="info" @click="blue = !blue">{{ blue ? '隱藏' : '顯示' }}藍色Pin</Button> | -->
                </div>
                <div class="minimap_svg" :class="{ redShow: red, blueShow: blue }">
                    <MiniMap @changeInfo="change" />
                </div>
            </div>
            <!-- 行程 -->
            <div class="journey">
                <h3>行程</h3>
                <h3>即將開始</h3>
                <div v-for="trip in displayTrip " class="journey_card">
                    <div>
                        <p>{{ trip.date }}</p>
                        <p>{{ trip.slogan }}</p>
                        <p>{{ trip.position }}</p>
                        <p>{{ trip.add }}</p>
                    </div>
                    <div>
                        <img :src="trip.src">
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
            bannerPic: `${import.meta.env.VITE_RESOURCE_URL}/image/election/journey.png`,
            slogan: '這是一場改變政治文化的社會運動，投給劉緯育，投給自己的未來。',
            red: true,
            blue: true,
            list: [],
            allTrip: [
                {
                    time: "2024/01/01(五)18:30-22:00",
                    slogan: "Team進補召集令 112凱道見",
                    position: "凱達格蘭大道",
                    add: "台北市中正區凱達格蘭大道",
                    country: '桃園',
                    src: `${import.meta.env.VITE_RESOURCE_URL}/image/election/journey-2.png`,
                },
                {
                    time: "2024/01/01(五)18:30-22:00",
                    slogan: "Team進補召集令 112凱道見",
                    position: "凱達格蘭大道",
                    add: "台北市中正區凱達格蘭大道",
                    country: '桃園',
                    src: `${import.meta.env.VITE_RESOURCE_URL}/image/election/journey-1.png`,
                },
                {
                    time: "2024/01/01(五)18:30-22:00",
                    slogan: "Team進補召集令 112凱道見",
                    position: "凱達格蘭大道",
                    add: "台北市中正區凱達格蘭大道",
                    country: '南投',
                    src: `${import.meta.env.VITE_RESOURCE_URL}/image/election/journey-1.png`,
                },
                {
                    time: "2024/01/01(五)18:30-22:00",
                    slogan: "Team進補召集令 112凱道見",
                    position: "凱達格蘭大道",
                    add: "台北市中正區凱達格蘭大道",
                    country: '苗栗',
                    src: `${import.meta.env.VITE_RESOURCE_URL}/image/election/journey-1.png`,
                },
                {
                    time: "2024/01/01(五)18:30-22:00",
                    slogan: "Team進補召集令 112凱道見",
                    position: "凱達格蘭大道",
                    add: "台北市中正區凱達格蘭大道",
                    country: '雲林',
                    src: `${import.meta.env.VITE_RESOURCE_URL}/image/election/journey-2.png`,
                },
                {
                    time: "2024/01/01(五)18:30-22:00",
                    slogan: "Team進補召集令 112凱道見",
                    position: "凱達格蘭大道",
                    add: "台北市中正區凱達格蘭大道",
                    country: '高雄',
                    src: `${import.meta.env.VITE_RESOURCE_URL}/image/election/journey-2.png`,
                },
                {
                    time: "2024/01/01(五)18:30-22:00",
                    slogan: "Team進補召集令 112凱道見",
                    position: "凱達格蘭大道",
                    add: "台北市中正區凱達格蘭大道",
                    country: '台東',
                    src: `${import.meta.env.VITE_RESOURCE_URL}/image/election/journey-2.png`,
                },
            ],
            displayTrip: [
                {
                    time: "2024/01/01(五)18:30-22:00",
                    slogan: "Team進補召集令 112凱道見",
                    position: "凱達格蘭大道",
                    add: "台北市中正區凱達格蘭大道",
                    country: '桃園',
                    src: `${import.meta.env.VITE_RESOURCE_URL}/image/election/journey-1.png`,
                },
                {
                    time: "2024/01/01(五)18:30-22:00",
                    slogan: "Team進補召集令 112凱道見",
                    position: "凱達格蘭大道",
                    add: "台北市中正區凱達格蘭大道",
                    country: '桃園',
                    src: `${import.meta.env.VITE_RESOURCE_URL}/image/election/journey-1.png`,
                },
                {
                    time: "2024/01/01(五)18:30-22:00",
                    slogan: "Team進補召集令 112凱道見",
                    position: "凱達格蘭大道",
                    add: "台北市中正區凱達格蘭大道",
                    country: '南投',
                    src: `${import.meta.env.VITE_RESOURCE_URL}/image/election/journey-1.png`,
                },
                {
                    time: "2024/01/01(五)18:30-22:00",
                    slogan: "Team進補召集令 112凱道見",
                    position: "凱達格蘭大道",
                    add: "台北市中正區凱達格蘭大道",
                    country: '台東',
                    src: `${import.meta.env.VITE_RESOURCE_URL}/image/election/journey-1.png`,
                },
                {
                    time: "2024/01/01(五)18:30-22:00",
                    slogan: "Team進補召集令 112凱道見",
                    position: "凱達格蘭大道",
                    add: "台北市中正區凱達格蘭大道",
                    country: '台東',
                    src: `${import.meta.env.VITE_RESOURCE_URL}/image/election/journey-1.png`,
                },
                {
                    time: "2024/01/01(五)18:30-22:00",
                    slogan: "Team進補召集令 112凱道見",
                    position: "凱達格蘭大道",
                    add: "台北市中正區凱達格蘭大道",
                    country: '苗栗',
                    src: `${import.meta.env.VITE_RESOURCE_URL}/image/election/journey-1.png`,
                },
                {
                    time: "2024/01/01(五)18:30-22:00",
                    slogan: "Team進補召集令 112凱道見",
                    position: "凱達格蘭大道",
                    add: "台北市中正區凱達格蘭大道",
                    country: '高雄',
                    src: `${import.meta.env.VITE_RESOURCE_URL}/image/election/journey-1.png`,
                },
            ],
            currentTitle: "",
            currentPage: "所有地區",
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
        change(pos) {
            this.currentTitle = pos;
            this.displayTrip = this.allTrip.filter((item) => {
                return item.country == pos;
            })
        },
        selectloaction() {
            this.displayTrip = this.allTrip.filter((item) => {
                return item.country == this.currentPage;
            })
        }
    },
    mounted() {
        document.title = "候選人行程";
    },
}
</script>


