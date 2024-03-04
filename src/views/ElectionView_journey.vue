<template>
    <button style="position: fixed;
    top: 50%;
    z-index: 100000;"  @click="remove">刪除怪東西</button>
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
            <select v-model="currentPage" @change="selectlocation">
                <option>所有地區</option>
                <option>宜蘭市</option>
                <option>基隆市</option>
                <option>台北市</option>
                <option>桃園市</option>
                <option>新竹市</option>
                <option>新竹縣</option>
                <option>苗栗縣</option>
                <option>台中市</option>
                <option>彰化縣</option>
                <option>雲林縣</option>
                <option>嘉義市</option>
                <option>台南市</option>
                <option>高雄市</option>
                <option>屏東縣</option>
                <option>花蓮縣</option>
                <option>台東縣</option>
                <option>南投縣</option>
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
                <div v-for="trip in displayTrip" class="journey_card" @change="showLocationInfo">
                    <div>
                        <p>{{ trip.start_date }}</p>
                        <p>{{ trip.campaign_name }}</p>
                        <p>{{ trip.address }}</p>
                        <p>{{ trip.add }}</p>
                        <!-- <p>{{ trip.pic }}</p> -->
                    </div>
                    <div>
                        <img :src="getPicUrl(trip.pic)">
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
import axios from 'axios';
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
            allTrip: [],
            displayTrip: "",
            currentTitle: "",
            currentPage: "所有地區",
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
        remove(){
            axios.get(`${import.meta.env.VITE_PHP_URL}/front_campaign_delete.php`)
                .then(response => {
                    console.log(response.data)
                })
                .catch(error => {
                    console.log(error);
                });
        },
        //(手機版) 切換行程標題
        getPicUrl(index) {
            return `${import.meta.env.VITE_IMG_URL}/campaign/` + index + `?${Date.now()}`;
        },
        change(pos) {
            this.currentTitle = pos;
            this.displayTrip = this.allTrip.filter((item) => {
                return item.country === pos;
            });
        },
        // (手機版)篩選行程
        selectlocation() {
            // console.log(this.allTrip[0].address.substr(0,3));
            // console.log(this.currentPage);
            this.displayTrip = this.allTrip.filter((item) => {
                return item.address.substr(0, 3) === this.currentPage || this.currentPage == '所有地區';
            });
        },

        // (電腦版)篩選行程
        showLocationInfo(data) {
            console.log(data);
            const locationInfo = this.allTrip.filter(item => item.campaign_name === data.campaign_name);
            console.log(locationInfo);
            this.displayTrip = locationInfo;
        },

        // 串資料-右邊資訊欄位
        getCampaign() {
            axios.get(`${import.meta.env.VITE_PHP_URL}/front_campaign.php`)
                .then(response => {
                    const campaign = response.data.campaign;
                    this.showCampaign(campaign);
                    console.log(response.data)
                    return campaign;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        showCampaign(campaign) {
            console.log(campaign);
            this.allTrip = campaign;
            this.displayTrip = campaign;
            console.log(this.displayTrip);
        }
    },
    mounted() {
        document.title = "候選人行程";
    },
    created() {
        this.getCampaign();
    },
}
</script>


