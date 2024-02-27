<template>
    <div class="body">
        <!-- banner -->
        <div class="banner">
            <div ref="bannercontent" class="bannercontent">
                <div class="bannershow" style="transform: translateX(-100vw);">
                    <img v-for="(banner, index) in bannerList" :src="getImageUrl(banner)" class="image">
                </div>
            </div>
            <button class="bannerleft" @click="bannerleft">&lt</button>
            <button class="bannerright" @click="bannerright">></button>
            <div class="pointwrap">
                <div class="bannerpoint" style="display: none;" v-for="num in bannerList.length" @click="pointchangebanner(num)"
                    :class="{ 'getdeep': currentBanner%6 === num - 1 }"></div>
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
                <div class="policy">
                    <h3 v-for="policy in policies">
                        <span>{{ policy.title }}</span>
                        <span>改革</span>
                        <span>
                            <img :src="getImageUrl(policy.img)" alt="">
                        </span>
                    </h3>
                </div>
            </div>
        </div>
        <div class="home_line_button">
            <div class="home_line"></div>
            <router-link to="/election">
                <CommitButton class="homebutton dog" commitButton="立即前往"></CommitButton>
            </router-link>
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
                <router-link to="/news">
                    <CommitButton class="homebutton dog" commitButton="立即前往"></CommitButton>
                </router-link>
            </div>
        </div>

        <!-- 假消息澄清-->
        <div class="home_container">
            <div class="row index_news_flex">
                <div class="col col-12 index_news_title">假消息澄清</div>
                <a class="col col-4 index_news_card" href="#">
                    <div>
                        <img :src="getImageUrl(clarifications[0].news_img)">
                    </div>
                    <div class="index_news_card_text">
                        <span>{{ clarifications[0].date_time }}</span>
                        <p class="index_news_card_header">{{ clarifications[0].news_title }}</p>
                        <p>{{ clarifications[0].news_script }}</p>
                    </div>
                </a>
                <div class="row col col-6 news_index_inner_flex">
                    <a v-for="(clarification, index) in get_for_range(clarifications, 1, 2)" :key="index"
                        class="col index_news_card" href="#">
                        <div>
                            <img :src="getImageUrl(clarification.news_img)">
                        </div>
                        <div class="index_news_card_text">
                            <span>{{ clarification.date_time }}</span>
                            <p class="index_news_card_header">{{ clarification.news_title }}</p>
                            <p>{{ clarification.news_script }}</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div class="home_line_button">
            <div class="home_line"></div>
            <router-link to="/news">
                <CommitButton class="homebutton dog" commitButton="立即前往"></CommitButton>
            </router-link>
        </div>
        <!-- 捐款 -->
        <div class="donate_container">

            <img v-for="donateImg in donateList" :src="getImageUrl(donateImg)" alt="" class="icon">
            <div>
                <h2>小額捐款, 作伙相挺</h2>
                <div class="donate_content">
                    <img src="/image/home/donate_img.png" alt="">
                    <p>2024 總統大選，面對這光榮民主的一戰，我們需要更多社會支持，邀請大家加入 Team Taiwan，一起挺台灣！</p>
                </div>
            </div>
            <RouterView />
            <!-- 頁面路由route渲染的位置 -->
        </div>
        <div class="home_line_button ">
            <div class="home_line donate_line"></div>
            <router-link to="/donate">
                <CommitButton class="homebutton dog" commitButton="立即前往"></CommitButton>
            </router-link>
        </div>
    </div>
</template>

<script>
import CommitButton from '@/components/button/commitButton.vue';
import bookmark from '../components/BookMark.vue';
import CountDown from '../components/CountDown.vue';
import vueMarquee from '@/components/Marquee.vue';
import Background_green from "@/components/Background_green.vue";
export default {
    data() {
        return {
            policies: [
                { title: '房屋', img: 'home/icon_house.png' },
                { title: '經濟', img: 'home/icon_money.png' },
                { title: '政策', img: 'home/icon_taiwan.png' }
            ],
            index:3,
            currentBanner: 0,
            slogan: ['這是一場改變政治文化的社會運動，投給劉緯育，投給自己的未來。',
                '為了更美好的明天，讓我們一起行動起來，為改革而投票',
            ],
            bannerList: [
                'home/banner_1.png',
                'home/banner_2.png',
                'home/banner_3.png',
                'home/banner_1.png',
                'home/banner_2.png',
                'home/banner_3.png',
            ],
            donateList: [
                'home/donate_icon_1.png',
                'home/donate_icon_2.png',
                'home/donate_icon_3.png',
            ],
            clarifications: [{
                id: 1,
                news_img: "home/index_clarify_pic1.png",
                date_time: "2023/12/25",
                news_title: "青年進補黨未支持極端主張",
                news_script: "近日有關本黨支持極端主張的消息是不實的。本黨一向秉持中庸立場，主張理性政治，並未贊同任何極端觀點。請大眾擇善信訊，不受不實訊息影響。"
            },
            {
                id: 2,
                news_img: "home/index_clarify_pic2.png",
                date_time: "2023/12/25",
                news_title: "青年進補黨未涉及不當金錢交易",
                news_script: "關於本黨涉及不當金錢交易的謠言純屬虛構。本黨一向遵守法律規定，未參與任何不正當的金錢往來。請大眾保持理性思考，勿輕信未經證實的謠言。"
            },
            {
                id: 3,
                news_img: "home/index_clarify_pic3.png",
                date_time: "2023/12/25",
                news_title: "青年進補黨發表攻擊性言論之指控不實",
                news_script: "近期有指本黨發表攻擊性言論的指控純屬失實。本黨一直倡導理性辯論，絕非以攻擊性言論為手段。請大眾慎重對待言論，保持公正評價。"
            }],
            news_card: [{
                id: 1,
                news_img: "home/index_news_pic1.png",
                date_time: "2024/3/8",
                news_title: "民眾參與決定未來",
                news_script: "2024年3月8日，一場關鍵的投票活動如火如荼地進行。民眾積極行使選舉權，投票所內洋溢著民主的熱情。與此同時，政黨領袖在不同場合發表演說，強調合理討論與政策的重要性。本黨堅持中立、理性的政治立場，期望為國家的明天畫上正義與希望的一筆。"
            },
            {
                id: 2,
                news_img: "home/index_news_pic2.png",
                date_time: "2023/12/25",
                news_title: "青年進補黨領袖擘畫未來藍圖",
                news_script: "青年進補黨領袖在國旗映襯下發表了振奮人心的演講，承諾將進行重要的政治改革。面對眾多關注的目光，他強調政策的透明度和公正性，呼籲公眾不應輕信未經證實的指控。每個字眼都體現了本黨秉持中立和理性的核心價值，展現出對國家未來的堅定信念和清晰方向。"
            },
            {
                id: 3,
                news_img: "home/index_news_pic3.png",
                date_time: "2023/12/25",
                news_title: "群眾聚焦青年進補黨的願景",
                news_script: "本黨領袖在晨光中對著龐大的人群發表演說，他的言論充滿了對國家未來的希望與決心，並呼籲群眾團結一致，共同努力實現共同的目標。在這關鍵時刻，本黨展現了連結民心的能力，以及推動社會進步和積極變革的承諾。"
            }],
        }
    },
    methods: {
        // 改用函式, 動態抓取圖片路徑
        // 參數為圖片路徑的最後一層子資料夾/檔名.副檔名
        getImageUrl(paths) {
            return new URL(`../assets/image/${paths}`, import.meta.url).href
            // return new URL(`/image/${paths}`, import.meta.url).href
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
                this.currentBanner = (this.currentBanner + 1);
                const newbannerr = document.createElement('img')
                const now = (((this.currentBanner - 1) % 3) + 1)
                const newpic = 'home/banner_' + now + '.png'
                console.log(now);
                newbannerr.src = this.getImageUrl(newpic);
                this.$refs.bannercontent.querySelector('.bannershow').appendChild(newbannerr)
                this.move();
            }, 3000);
        },
        bannerleft() {
            clearInterval(this.bannerauto)
            this.move();
            this.bannerStart();
            const numBanners = this.bannerList.length;
            const firstChild = this.$refs.bannercontent.querySelector('.bannershow').firstChild;
            const newbannerr = document.createElement('img')
            const newpic = 'home/banner_' + this.index + '.png'
            this.index-=1
            if(this.index==0)
            this.index=3
            newbannerr.src = this.getImageUrl(newpic);
            this.$refs.bannercontent.querySelector('.bannershow').insertBefore(newbannerr,firstChild)
            if (this.currentBanner == 0) {
                this.currentBanner = 0;
                // this.currentBanner = (this.currentBanner - 1);
            } else {
            this.currentBanner = (this.currentBanner - 1);
            }
            
        },
        loadin(){
            const numBanners = this.bannerList.length;
            const firstChild = this.$refs.bannercontent.querySelector('.bannershow').firstChild;
            const newbannerr = document.createElement('img')
            const newpic = 'home/banner_' + this.index + '.png'
            this.index-=1
            if(this.index==0)
            this.index=3
            newbannerr.src = this.getImageUrl(newpic);
            this.$refs.bannercontent.querySelector('.bannershow').insertBefore(newbannerr,firstChild)
            if (this.currentBanner == 0) {
                this.currentBanner = 0;
                // this.currentBanner = (this.currentBanner - 1);
            } else {
            this.currentBanner = (this.currentBanner - 1);
            }
        },
        bannerright() {
            clearInterval(this.bannerauto)
            const numBanners = this.bannerList.length;
            // if (this.currentBanner == numBanners - 1) {
            //     this.currentBanner = numBanners - 1;
            // } else {
            this.currentBanner = (this.currentBanner + 1);
            // }
            console.log(this.currentBanner);
            const newbannerr = document.createElement('img')
            const now = (((this.currentBanner - 1) % 3) + 1)
            const newpic = 'home/banner_' + now + '.png'
            newbannerr.src = this.getImageUrl(newpic);
            this.$refs.bannercontent.querySelector('.bannershow').appendChild(newbannerr)
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
        this.loadin()
        this.bannerStart();


    },
    components: {
        bookmark,
        CommitButton,
        CountDown,
        vueMarquee,
        Background_green,
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

.body {
    background: linear-gradient(-10deg, #D4FF1F 0% 25%, rgba(255, 255, 255, 0) 25% 100%);
}

.donate_container {
    width: 100%;
    margin-top: 100px;
    position: relative;
    border-radius: $border-radius-1;

    @media screen and (max-width: 786px) {
        padding-top: 218px;
    }
}

.donate_container h2 {
    @include title_2;
    height: 100px;
    text-align: center;
    position: relative;

    @media screen and (max-width: 414px) {
        @include title_3;
        margin-top: 20px;
    }

}

.donate_container p {
    font-size: 24px;
    width: 600px;
    margin: auto;
    line-height: 40px;
    padding: 0px 40px;
    text-align: justify;

    @media screen and (max-width: 786px) {
        line-height: 45px;
    }
}


.donate_content {
    height: 300px;
    background-color: $white;
    margin: auto;
    border-radius: 10px;
    display: flex;

    @media screen and (max-width: 769px) {
        display: flex;
        flex-direction: column;
        width: 90%;

        p {
            width: initial;
            background-color: #fff;
            padding: 10px;
            border-radius: 10px;
        }

        img {
            border-radius: 10px;
        }
    }
}

.donate_container>div>div {
    width: 1020px;
    // 元素前後順序: 有定位 > 沒定位, 如果取消相對定位, container會被背景圖案蓋住
    position: relative;
}

.donate_container>img {
    position: absolute;
}

.donate_container>img:nth-child(1) {
    bottom: 20px;
    right: 20px;
    margin: auto;
    width: 100px;
    height: 100px;

    @media screen and (max-width: 768px) {
        top: -2px;
    }
}

.donate_container>img:nth-child(2) {
    right: 70px;
    top: -100px;
    width: 180px;
    height: 180px;

    @media screen and (max-width: 769px) {
        display: none;
    }
}

.donate_container>img:nth-child(3) {
    left: -30px;
    top: 30px;
    width: 200px;
    height: 200px;

    @media screen and (max-width: 769px) {
        display: none;
    }
}


.commit_btn {
    margin: initial;
}
</style>
