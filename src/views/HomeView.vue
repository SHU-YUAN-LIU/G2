<template>
    <!-- banner -->
    <div class="banner">
        <div ref="bannercontent" class="bannercontent">
            <div class="bannershow">
                <img v-for="(banner, index) in bannerList" :src="getImageUrl(banner)" class="image">
            </div>
        </div>
        <button class="bannerleft" @click="bannerleft">&lt</button>
        <button class="bannerright" @click="bannerright">></button>
        <div class="pointwrap">
            <div class="bannerpoint" v-for="num in bannerList.length" @click="pointchangebanner(num)"
                :class="{ 'getdeep': currentBanner === num - 1 }"></div>
        </div>
    </div>
    <!-- <button> &lt </button>
        <div ref="bannercontainer" class="bannercontainer">
            <div class="bannershow">
                <img v-for="banner in bannerList" :src="getImageUrl(banner)" alt="">
            </div>
            
        </div>
    <button>></button> -->

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
    <div class="home_line_button ">
        <div class="home_line donate_line"></div>
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
            currentBanner: 0,
            slogan: '這是一場改變政治文化的社會運動，投給劉緯育，投給自己的未來。',
            bannerList: [
                'home/banner_1.png',
                'home/banner_2.png',
                'home/banner_1.png',
                'home/banner_2.png',
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
        move() {
            if (this.$refs.bannercontent) {
                const bannerShow = this.$refs.bannercontent.querySelector('.bannershow');
                const translateX = -(this.currentBanner * 100);
                bannerShow.style.transform = `translateX(${translateX}vw)`;
            }
        },
        bannerStart() {
            this.bannerauto = setInterval(() => {
                const numBanners = this.bannerList.length;
                this.currentBanner = (this.currentBanner + 1) % numBanners;
                this.move();
            }, 3000);
        },
        bannerleft() {
            clearInterval(this.bannerauto)
            const numBanners = this.bannerList.length;
            if (this.currentBanner == 0) {
                this.currentBanner = 0;
            } else {
                this.currentBanner = (this.currentBanner - 1) % numBanners;
            }
            this.move();
            this.bannerStart();
        },
        bannerright() {
            clearInterval(this.bannerauto)
            const numBanners = this.bannerList.length;
            if (this.currentBanner == numBanners - 1) {
                this.currentBanner = numBanners - 1;
            } else {
                this.currentBanner = (this.currentBanner + 1) % numBanners;
            }
            this.move();
            this.bannerStart();
        },
        pointchangebanner(num) {
            clearInterval(this.bannerauto)
            this.currentBanner = num - 1;
            this.move();
            this.bannerStart();
        },



    },
    mounted() {
        // 設定網站標題(瀏覽器頁籤上的標題)
        document.title = '青年進補黨 - 首頁';
        this.bannerStart();


    },
    components: {
        bookmark,
        CommitButton,
        CountDown,
        vueMarquee,
    },
    created() {

    },
    destroyed() {
        clearInterval(this.bannerauto);
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

// ul {
//     list-style: none;
// }

// .banner {
//     overflow: hidden;
//     /* width: 1920px; */
//     position: relative;
//     margin-top: 85px;
// }

// .banner>ul {
//     display: flex;
//     padding: 0;
// }

// .banner>ul {
//     display: flex;
// }

.donate_container {
    width: 100%;
    height: 800px;
    padding-top: 280px;
    position: relative;
    border-radius: $border-radius-1;
    @media screen and (max-width: 786px) {
        padding-top: 218px;
    }
   }

.donate_container h2 {
    font-size: 65px;
    height: 100px;
    text-align: center;
    @media screen and (max-width: 414px) {
     @include title_3;
     margin-top: 20px;
  
}
   
}

.donate_container p {
    font-size: 24px;
    width: 600px;
    margin: auto;
    line-height: 50px;
    @media screen and (max-width: 786px) {
        line-height: 45px;
    }
}


.donate_content {
    width: 1200px;
    height: 300px;
    background-color: $white;
    margin: auto;
    border-radius: 10px;
    display: flex;
    @media screen and (max-width: 769px) {
     display: flex;
     flex-direction: column;
     width: 90%;

     p{
        width: initial;
        background-color: #fff;
        padding: 10px;
        border-radius: 10px;
     }

     img{
        border-radius: 10px;
     }
    }
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
    @media screen and (max-width: 768px) {
        top: -2px;
    }
}

.donate_container>img:nth-child(2) {
    right: 0;
    bottom: 60px;
    margin: auto;
    width: 220px;
    height: 220px;
    @media screen and (max-width: 769px) {
        display: none;
    }
}

.donate_container>img:nth-child(3) {
    left: -70px;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 250px;
    height: 250px;
    @media screen and (max-width: 769px) {
        display: none;
    }
}

.commit_btn{
    margin: initial;
}
</style>
