<template>
    <!-- banner -->
    <div class="banner">
        <button> &lt </button>
        <ul>
            <li v-for="banner in bannerList">
                <img :src="getImageUrl(banner)" alt="">
            </li>
        </ul>
        <button>></button>
    </div>

    <!-- 倒數 -->
    <CountDown />
    <!-- 跑馬燈 -->
    <vueMarquee :marqueeArray="slogan" />
    <!-- 頁籤 -->
    <div class="home_container">
        <div class="row index_news_flex">
            <div class="col col-12 index_news_title">政策懶人包</div>
        </div>
    </div>
    <bookmark />
    <div class="home_line_button">
        <div class="home_line"></div>
        <CommitButton class="homebutton dog" commitButton="立即前往">
            <router-link to="/news">
            </router-link>
        </CommitButton>
    </div>



    <!-- 消息-->
    <div class="index_news_bg">
        <div class="home_container">
            <div class="row index_news_flex">
                <div class="col col-12 index_news_title">最新消息</div>
                <a class="col col-4 index_news_card" href="#">
                    <div>
                        <img :src="getImageUrl(news_card[0].news_img)">
                    </div>
                    <div class="index_news_card_text">
                        <span>{{ news_card[0].date_time }}</span>
                        <p class="index_news_card_header">{{ news_card[0].news_title }}</p>
                        <p>{{ news_card[0].news_script }}</p>
                    </div>
                </a>
                <div class="row col col-6 news_index_inner_flex">
                    <a v-for="(item, index) in get_for_range(news_card, 1, 2)" :key="index" class="col index_news_card"
                        href="#">
                        <div>
                            <img :src="getImageUrl(item.news_img)">
                        </div>
                        <div class="index_news_card_text">
                            <span>{{ item.date_time }}</span>
                            <p class="index_news_card_header">{{ item.news_title }}</p>
                            <p>{{ item.news_script }}</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="home_line_button">
            <div class="home_line"></div>
            <CommitButton class="homebutton dog" commitButton="立即前往">
                <router-link to="/news">
                </router-link>
            </CommitButton>
        </div>
    </div>

    <!-- 假消息澄清-->
    <div class="home_container">
        <div class="row index_news_flex">
            <div class="col col-12 index_news_title">假消息澄清</div>
            <a class="col col-4 index_news_card" href="#">
                <div>
                    <img :src="getImageUrl(news_card[0].news_img)">
                </div>
                <div class="index_news_card_text">
                    <span>{{ news_card[0].date_time }}</span>
                    <p class="index_news_card_header">{{ news_card[0].news_title }}</p>
                    <p>{{ news_card[0].news_script }}</p>
                </div>
            </a>
            <div class="row col col-6 news_index_inner_flex">
                <a v-for="(item, index) in get_for_range(news_card, 1, 2)" :key="index" class="col index_news_card"
                    href="#">
                    <div>
                        <img :src="getImageUrl(item.news_img)">
                    </div>
                    <div class="index_news_card_text">
                        <span>{{ item.date_time }}</span>
                        <p class="index_news_card_header">{{ item.news_title }}</p>
                        <p>{{ item.news_script }}</p>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <div class="home_line_button">
        <div class="home_line"></div>
        <CommitButton class="homebutton dog" commitButton="立即前往">
            <router-link to="/news">
            </router-link>
        </CommitButton>
    </div>
    <!-- 捐款 -->

    <div class="donate_container">

        <img v-for="donateImg in donateList" :src="getImageUrl(donateImg)" alt="" class="icon">
        <div>
            <h2>小額捐款, 作伙相挺</h2>
            <div class="donate_content">
                <img src="@/assets/image/home/donate_img.png" alt="">
                <p>2024 總統大選，面對這光榮民主的一戰，我們需要更多社會支持，邀請大家加入 Team Taiwan，一起挺台灣！</p>
            </div>
        </div>




        <RouterView />
        <!-- 頁面路由route渲染的位置 -->
    </div>
    <div class="home_line_button">
        <div class="home_line"></div>
        <CommitButton class="homebutton dog" commitButton="立即前往">
            <router-link to="/news">
            </router-link>
        </CommitButton>
    </div>
</template>

<script>
import CommitButton from '@/components/button/commitButton.vue';
import bookmark from '../components/BookMark.vue';
import CountDown from '../components/CountDown.vue';
import vueMarquee from '@/components/Marquee.vue';
export default {
    data() {
        return {
            slogan: '這是一場改變政治文化的社會運動，投給劉緯育，投給自己的未來。',
            bannerList: [
                'home/banner_1.png',
                'home/banner_2.png',
            ],
            donateList: [
                'home/donate_icon_1.png',
                'home/donate_icon_2.png',
                'home/donate_icon_3.png',
            ],
            news_card: [{
                id: 1,
                news_img: "home/index_news_pic1.png",
                date_time: "2023/12/25",
                news_title: "這是一場改變政治文化的社會運動",
                news_script: "這是一場改變政治文化的社會運動，投給劉緯育，投給自己的未來。躊灣資蚤萌我取要天，枯思揀傳之破裡知？書也等起論都風、看珊妻欒外龍若停"
            },
            {
                id: 2,
                news_img: "home/index_news_pic2.png",
                date_time: "2023/12/25",
                news_title: "這是一場改變政治文化的社會運動",
                news_script: "這是一場改變政治文化的社會運動，投給劉緯育，投給自己的未來。躊灣資蚤萌我取要天，枯思揀傳之破裡知？書也等起論都風、看珊妻欒外龍若停衣不凰性燈啡。瑛感今我您給不空風樣。作，鳩體能、具的矜手描"
            },
            {
                id: 3,
                news_img: "home/index_news_pic3.png",
                date_time: "2023/12/25",
                news_title: "這是一場改變政治文化的社會運動",
                news_script: "這是一場改變政治文化的社會運動，投給劉緯育，投給自己的未來。躊灣資蚤萌我取要天，枯思揀傳之破裡知？書也等起論都風、看珊妻欒外龍若停衣不凰性燈啡。瑛感今我您給不空風樣。作，鳩體能、具的矜手描"
            }],
        }
    },
    methods: {
        // 改用函式, 動態抓取圖片路徑
        // 參數為圖片路徑的最後一層子資料夾/檔名.副檔名

        getImageUrl(paths) {
            return new URL(`../assets/image/${paths}`, import.meta.url).href
        },
        get_for_range(arraydata, indexmin, indexmax) {
            return arraydata.filter((item, index) => index >= indexmin && index <= indexmax);
        },
    },
    mounted() {
        // 設定網站標題(瀏覽器頁籤上的標題)
        document.title = '青年進補黨 - 首頁';
    },
    components: {
        bookmark,
        CommitButton,
        CountDown,
        vueMarquee,
    },
}
</script>

<style scoped lang="scss">
@import '../assets/scss/base/border';
@import '../assets/scss/base/font';
@import '../assets/scss/base/color';

#app {
    background: linear-gradient(-10deg, $green 0% 35%, rgba(255, 255, 255, 0) 35% 50%, $orange 50% 100%) !important;
    z-index: 0;
}

ul {
    list-style: none;
}

.banner {
    overflow: hidden;
    /* width: 1920px; */
    position: relative;
    margin-top: 85px;
}

.banner>ul {
    display: flex;
    padding: 0;
}

.banner>ul {
    display: flex;
}

.banner>button {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid #fff;
    background-color: rgba(255, 255, 255, .5);
    backdrop-filter: blur(5px);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    font-size: 40px;
}


.banner>button:first-child {
    left: 20px;
}

.banner>button:last-child {
    right: 20px;
}

.banner>button:last-child {
    right: 60px;
}

.donate_container {
    width: 100%;
    height: 800px;
    padding-top: 280px;
    position: relative;
    border-radius: $border-radius-1;
}

.donate_container h2 {
    font-size: 65px;
    height: 130px;
    text-align: center;
}

.donate_container p {
    font-size: 24px;
    width: 600px;
    margin: auto;
    line-height: 50px;
}


.donate_content {
    width: 1200px;
    height: 300px;
    background-color: $white;
    margin: auto;
    border-radius: 10px;
    display: flex;
}


.donate_container>img {
    position: absolute;
}

.donate_container>img:nth-child(1) {
    top: 60px;
    left: 0;
    right: 0;
    margin: auto;
    width: 200px;
    height: 200px;
}

.donate_container>img:nth-child(2) {
    right: 0;
    bottom: 60px;
    margin: auto;
    width: 220px;
    height: 220px;
}

.donate_container>img:nth-child(3) {
    left: -70px;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 250px;
    height: 250px;
}
</style>
