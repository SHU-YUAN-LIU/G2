<template>
<<<<<<< HEAD
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
=======
    <MainHeader />
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
>>>>>>> f2dadc6a71a50df5ce3bb5c3cb388c6873c1a4a8

  <!-- 頁籤 -->
  <!-- <div class="bookmark">
    <ul>
      <li v-for="(tab, index) in tabs" :class="{ isactive: currentIndex == index }" @click="currentIndex = index">
        {{ tab }}
      </li>
    </ul>
    <ul>
      <li v-show="currentIndex == 0">我們推出三大關鍵政策方向。首先，...</li>
      <li v-show="currentIndex == 1">為了將台灣更深入地融入區域經濟，我們推出三大關鍵政策方向。首先，...</li>
      <li v-show="currentIndex == 2">我們推出三大關鍵政策方向。首先，...</li>
    </ul>
  </div> -->
  <bookmark />

<<<<<<< HEAD
  <!-- 捐款  -->

  <div class=" donate_container">

    <img v-for="donateImg in donateList" :src="getImageUrl(donateImg)" alt="" class="icon">
    <div>
      <h2>小額捐款, 作伙相挺</h2>
      <div class="donate_content">
        <img src="../assets/image/home/donate_img.png" alt="">
        <p>2024 總統大選，面對這光榮民主的一戰，我們需要更多社會支持，邀請大家加入 Team Taiwan，一起挺台灣！</p>
      </div>
    </div>


    <!-- 頁面路由route渲染的位置 -->
    <RouterView />
  </div>
=======







    <!-- 捐款 -->

    <div class="donate_container">

        <img v-for="donateImg in donateList" :src="getImageUrl(donateImg)" alt="" class="icon">
        <div>
            <h2>小額捐款, 作伙相挺</h2>
            <div class="donate_content">
                <img src="../assets/image/home/donate_img.png" alt="">
                <p>2024 總統大選，面對這光榮民主的一戰，我們需要更多社會支持，邀請大家加入 Team Taiwan，一起挺台灣！</p>
            </div>
        </div>
    </div>
    
    <!-- 消息-->
    <div class="index_news_bg">
        <div class="container">
            <div class="row index_news_flex">
                <div class="col col-12 index_news_title">最新消息</div>
                <div class="col col-4 index_news_card">
                    <div>
                        <img :src="getImageUrl(news_card[0].news_img)">
                    </div>
                    <div class="index_news_card_text">
                        <span>{{ news_card[0].date_time }}</span>
                        <p class="index_news_card_header">{{ news_card[0].news_title }}</p>
                        <p>{{ news_card[0].news_script }}</p>
                    </div>
                </div>
                <div class="row col col-6 news_index_inner_flex">
                    <div v-for="(item, index) in get_for_range(news_card, 1, 2)" :key="index" class="col index_news_card">
                        <div>
                            <img :src="getImageUrl(item.news_img)">
                        </div>
                        <div class="index_news_card_text">
                            <span>{{ item.date_time }}</span>
                            <p class="index_news_card_header">{{ item.news_title }}</p>
                            <p>{{ item.news_script }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 假消息澄清-->
    <div class="container">
        <div class="row index_news_flex">
            <div class="col col-12 index_news_title">假消息澄清</div>
            <div class="col col-4 index_news_card">
                <div>
                    <img :src="getImageUrl(news_card[0].news_img)">
                </div>
                <div class="index_news_card_text">
                    <span>{{ news_card[0].date_time }}</span>
                    <p class="index_news_card_header">{{ news_card[0].news_title }}</p>
                    <p>{{ news_card[0].news_script }}</p>
                </div>
            </div>
            <div class="row col col-6 news_index_inner_flex">
                <div v-for="(item, index) in get_for_range(news_card, 1, 2)" :key="index" class="col index_news_card">
                    <div>
                        <img :src="getImageUrl(item.news_img)">
                    </div>
                    <div class="index_news_card_text">
                        <span>{{ item.date_time }}</span>
                        <p class="index_news_card_header">{{ item.news_title }}</p>
                        <p>{{ item.news_script }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 捐款 -->

    <div class="donate_container">

        <img v-for="donateImg in donateList" :src="getImageUrl(donateImg)" alt="" class="icon">
        <div>
            <h2>小額捐款, 作伙相挺</h2>
            <div class="donate_content">
                <img src="../assets/image/home/donate_img.png" alt="">
                <p>2024 總統大選，面對這光榮民主的一戰，我們需要更多社會支持，邀請大家加入 Team Taiwan，一起挺台灣！</p>
            </div>
        </div>


        <!-- 頁面路由route渲染的位置 -->
        <RouterView />
    </div>
>>>>>>> f2dadc6a71a50df5ce3bb5c3cb388c6873c1a4a8
</template>

<script>
import bookmark from '../components/bookmark.vue'
export default {
<<<<<<< HEAD
  data() {
    return {
      bannerList: [
        'home/banner_1.png',
        'home/banner_2.png',
      ],
      donateList: [
        'home/donate_icon_1.png',
        'home/donate_icon_2.png',
        'home/donate_icon_3.png',
      ],
    }
  },
  methods: {
    // 改用函式, 動態抓取圖片路徑
    // 參數為圖片路徑的最後一層子資料夾/檔名.副檔名

    getImageUrl(paths) {
      return new URL(`../assets/image/${paths}`, import.meta.url).href
    },
  },
  mounted() {
  },
  computed: {
    current_tab_component() {
      return this.currentTab + "_content";
    }
  },
  components: {
    bookmark,
  },
=======
    data() {
        return {
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
            }]

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
        }
    },
    mounted() {

    },
>>>>>>> f2dadc6a71a50df5ce3bb5c3cb388c6873c1a4a8
}
</script>




<style>
<<<<<<< HEAD
.banner {
  overflow: hidden;
  position: relative;
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
  left: 60px;
}

.banner>button:last-child {
  right: 60px;
}

.donate_container {
  width: 100%;
  height: 860px;
  padding-top: 280px;
  background-color: #d4ff1f;
  position: relative;
  border-radius: 10px;
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
=======
ul {
    list-style: none;
}

.banner {
    overflow: hidden;
    width: 1920px;
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
    height: 860px;
    padding-top: 280px;
    background-color: #d4ff1f;
    position: relative;
    border-radius: 10px;
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
>>>>>>> f2dadc6a71a50df5ce3bb5c3cb388c6873c1a4a8
}


.donate_content {
<<<<<<< HEAD
  width: 1200px;
  height: 300px;
  background-color: #fff;
  margin: auto;
  border-radius: 10px;
  display: flex;
=======
    width: 1200px;
    height: 300px;
    background-color: #fff;
    margin: auto;
    border-radius: 10px;
    display: flex;
>>>>>>> f2dadc6a71a50df5ce3bb5c3cb388c6873c1a4a8
}


.donate_container>img {
<<<<<<< HEAD
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
  left: -100px;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 250px;
  height: 250px;
=======
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
    left: -100px;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 250px;
    height: 250px;
}

.index_news_bg {
    background-color: #F3F5F7;
}

.index_news_flex {
    justify-content: center;
    gap: 40px;
}

.index_news_flex>.col-4:nth-child(2) {
    flex-direction: column;
}

.news_index_inner_flex {
    flex-direction: column;
    gap: 40px;
}

.index_news_flex .index_news_card {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    box-sizing: border-box;
    padding: 0;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid #F3F5F7;
    box-shadow: 0 0 30px 0 #CBCBCB;
}

.index_news_card img {
    min-width: 100%;
    vertical-align: middle;
}

.index_news_flex>.col-4:nth-child(2) img {
    width: 100%;
}

.index_news_title {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-size: 65px;
    margin: 145px 0;
}

.index_news_card_text {
    padding: 16px 35px 0;
    font-size: 16px;
}

.index_news_card_text .index_news_card_header {
    font-size: 24px;
>>>>>>> f2dadc6a71a50df5ce3bb5c3cb388c6873c1a4a8
}
</style>