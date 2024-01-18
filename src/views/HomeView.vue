<template>
    <link rel="stylesheet" href="../../css/style.css">
    <div class="index_news_bg">
        <div class="container">
            <div class="row index_news_flex">
                <div class="col col-4">
                    <div>
                        <img src="../assets/image/home/index_news_pic1.png" alt="">
                    </div>
                    <div class="index_news_card_text">
                        <span>2023/12/25</span>
                        <p class="index_news_card_header">這是一場改變政治文化的社會運動</p>
                        <p>這是一場改變政治文化的社會運動，投給劉緯育，投給自己的未來。躊灣資蚤萌我取要天，枯思揀傳之破裡知？書也等起論都風、看珊妻欒外龍若停</p>
                    </div>
                </div>
                <div class="col col-6">
                    <div class="index_news_card">
                        <div>
                            <img src="../assets/image/home/index_news_pic2.png" alt="">
                        </div>
                        <div class="index_news_card_text">
                            <span>2023/12/25</span>
                            <p class="index_news_card_header">這是一場改變政治文化的社會運動</p>
                            <p>這是一場改變政治文化的社會運動，投給劉緯育，投給自己的未來。躊灣資蚤萌我取要天，枯思揀傳之破裡知？書也等起論都風、看珊妻欒外龍若停衣不凰性燈啡。瑛感今我您給不空風樣。作，鳩體能、具的矜手描
                            </p>
                        </div>
                    </div>

                    <div class="index_news_card">
                        <div>
                            <img src="../assets/image/home/index_news_pic3.png" alt="">
                        </div>
                        <div class="index_news_card_text">
                            <span>2023/12/25</span>
                            <p class="index_news_card_header">這是一場改變政治文化的社會運動</p>
                            <p>這是一場改變政治文化的社會運動，投給劉緯育，投給自己的未來。躊灣資蚤萌我取要天，枯思揀傳之破裡知？書也等起論都風、看珊妻欒外龍若停衣不凰性燈啡。瑛感今我您給不空風樣。作，鳩體能、具的矜手描
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import TheWelcome from '../components/TheWelcome.vue'

</script>

<style>
.index_news_bg {
    background-color: red;
}

.index_news_flex {
    gap: 40px;
    justify-content: center;
}

.index_news_flex>.col-4 img {
    width: 100%;
    vertical-align: middle;
    /* overflow: hidden; */
}

.index_news_flex>.col-4 {
    background-color: #fff;
    /* border: 1px solid #F3F5F7; */
    padding: 0;
    border-radius: 10px;

}
.index_news_flex>.col-6{
    display: flex;
    flex-direction: column;
    gap: 40px;
}
.index_news_card{
    display: flex;
    box-sizing: border-box;
    background-color: #fff;
    /* border: 1px solid #F3F5F7; */
    padding: 0;
    border-radius: 10px;
}
.index_news_card_text{
padding: 16px 35px 0;
font-size: 16px;
}

.index_news_card_text .index_news_card_header {
    font-size: 24px;
}
</style>