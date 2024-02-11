<template>
    <div class="elecion_journey">
        <!-- banner -->
        <!-- <banner :bannerTitle="bannerTitle" :bannerPic="bannerPic" /> -->
        <!-- 麵包屑 -->
        <!-- <breadCrumbs /> -->
        <!-- 跑馬燈 -->
        <!-- <vueMarquee :marqueeArray="slogan" /> -->
        <!-- (手機板)行程站台內容 -->
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
        <!-- (電腦版)行程站台內容 -->
        <div class="election_container">
            <!-- mapbox地圖 -->
            <div class="mapbox">
                <mapbox @showLocationInfo="showLocationInfo" />
            </div>
            <!-- 行程 -->
            <div class="journey">
                <h3>行程</h3>
                <h3>即將開始</h3>
                <div v-for="trip in displayTrip " class="journey_card" @change="showLocationInfo">
                    <div>
                        <p>{{ trip.time }}</p>
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
    <div class="count_down">
        <CountDown />
    </div>
</template>


<script>
import Banner from '../components/Banner.vue';
import breadCrumbs from '../components/Bread.vue';
import vueMarquee from '@/components/Marquee.vue';
import CountDown from '../components/CountDown.vue';
import mapbox from '../components/mapbox.vue';

export default {
    data() {
        return {
            bannerTitle: '候選人行程',
            bannerPic: `${import.meta.env.VITE_RESOURCE_URL}/image/election/journey.png`,
            slogan: '這是一場改變政治文化的社會運動，投給劉緯育，投給自己的未來。',
            allTrip: [
                {
                    time: "2024/01/01(五)18:30-22:00",
                    slogan: "Team進補召集令 112凱道見",
                    position: "凱達格蘭大道",
                    add: "台北市中正區凱達格蘭大道",
                    country: '桃園',
                    src: `${import.meta.env.VITE_RESOURCE_URL}/image/election/journey-2.png`,
                    name: "New Taipei",
                },
                {
                    time: "2024/01/01(五)18:30-22:00",
                    slogan: "Team進補召集令 112凱道見",
                    position: "凱達格蘭大道",
                    add: "台北市中正區凱達格蘭大道",
                    country: '桃園',
                    src: `${import.meta.env.VITE_RESOURCE_URL}/image/election/journey-1.png`,
                    name: "Hsinchu",
                },
                {
                    time: "2024/01/01(五)18:30-22:00",
                    slogan: "Team進補召集令 112凱道見",
                    position: "凱達格蘭大道",
                    add: "台北市中正區凱達格蘭大道",
                    country: '南投',
                    src: `${import.meta.env.VITE_RESOURCE_URL}/image/election/journey-1.png`,
                    name: " Taitung",
                },
                {
                    time: "2024/01/01(五)18:30-22:00",
                    slogan: "Team進補召集令 112凱道見",
                    position: "凱達格蘭大道",
                    add: "台北市中正區凱達格蘭大道",
                    country: "Taipei",
                    src: `${import.meta.env.VITE_RESOURCE_URL}/image/election/journey-1.png`,
                    name: "New Taipei",
                },
                {
                    time: "2024/01/01(五)18:30-22:00",
                    slogan: "Team進補召集令 112凱道見",
                    position: "凱達格蘭大道",
                    add: "台北市中正區凱達格蘭大道",
                    country: '雲林',
                    src: `${import.meta.env.VITE_RESOURCE_URL}/image/election/journey-2.png`,
                    name: " Taitung",
                },
                {
                    time: "2024/01/01(五)18:30-22:00",
                    slogan: "Team進補召集令 112凱道見",
                    position: "凱達格蘭大道",
                    add: "台北市中正區凱達格蘭大道",
                    country: 'New Taipei',
                    src: `${import.meta.env.VITE_RESOURCE_URL}/image/election/journey-2.png`,
                    name: " Taitung",
                },
                {
                    time: "2024/01/01(五)18:30-22:00",
                    slogan: "Team進補召集令 112凱道見",
                    position: "凱達格蘭大道",
                    add: "台北市中正區凱達格蘭大道",
                    country: 'Taitung',
                    src: `${import.meta.env.VITE_RESOURCE_URL}/image/election/journey-2.png`,
                    name: " Taitung",
                },
            ],
            currentTitle: "",
            currentPage: "",
            displayTrip: "",
        }
    },
    components: {
        Banner,
        breadCrumbs,
        vueMarquee,
        CountDown,
        mapbox,
    },
    methods: {
        //手機版切換行程標題
        // change(pos) {
        //     this.currentTitle = pos;
        //     this.displayTrip = this.allTrip.filter((item) => {
        //         return item.country === pos;
        //     });
        // },
        // 篩選行程
        selectLocation() {
            this.displayTrip = this.allTrip.filter((item) => {
                return item.country === this.name;
            });
        },
        showLocationInfo(data) {
            console.log(data);
            const locationInfo = this.allTrip.filter(item => item.name === data.name);
            console.log(locationInfo);
            this.displayTrip = locationInfo;
        },
    },
    mounted() {
        document.title = "候選人行程";
        this.displayTrip = this.allTrip;
    },
}
</script>


