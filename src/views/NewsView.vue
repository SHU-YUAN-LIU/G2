<template>
  <div class="news_wrap">
    <div class="news_banner">
      <img src="/src/assets/image/news/news_banner.png" alt="">
      <h1>最新消息</h1>
    </div>

    <breadCrumbs />

    <form action="" class="filter_form" @submit.prevent>
      <div class="news_filter">
        <select name="" id="" v-model="selectedCategory"> 
          <option value="" disabled selected>類別</option>
          <option value="all">全部消息</option>
          <option value="新聞資訊">新聞資訊</option>
          <option value="假消息澄清">假消息澄清</option>
          <option value="演講活動">演講活動</option>
        </select>
        <input type="date" name="" v-model="startDate"><span>到</span><input type="date" name="" v-model="endDate">
        <input type="text" name="" id="newsSearch" placeholder="請輸入關鍵字" class="news_search" v-model="searchKeyword">
        <!-- 因為button在form標籤內, 按下後的預設行為會送出表單, 所以要+一個type=button的屬性 -->
        <button class="remove" @click="clearFilter" type="button">⟳</button>
      </div>
    </form>
    <div class="news_cards">
      <div class="card_a" v-for="item in filteredNewsCard" :key="item.id">
        <router-link :to="item.url">
          <div class="news_card">
            <div class="news_pic">
              <img :src="item.imageUrl">
            </div>
            <div class="news_content">
              <div :class="item.typeClass">{{ item.type }}</div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.content }}</p>
              <span>{{ item.date }}</span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <background :height="'100'" />
  </div>

</template>
<script>
import breadCrumbs from '../components/Bread.vue';
import { RouterLink } from 'vue-router';
import background from '../components/Background_green.vue';

export default {
  data() {
    return {
      selectedCategory: '',
      startDate: '', 
      endDate: '',  
      searchKeyword: '',
      newsCard: [
        { 
          url: '/newspage',
          type: "新聞資訊",
          typeClass: "news_info",
          title: "#120 台灣政治改革之路 - 義無反顧的選擇",
          content: "今天，台灣政治掀起一陣嶄新的風潮，政黨號次抽籤結果出爐，青年進補黨為「20」號，為這場政治革命的序幕定調。",
          date: "2023/12/11",
          imageUrl: `${import.meta.env.VITE_RESOURCE_URL}/image/news/news1_s.png`

        },
        {
          url: '/newspage',
          type: "假消息澄清",
          typeClass: "fake_news",
          title: "傳言：劉緯育高傲自大，對庶民經濟有什麼貢獻？",
          content: "傳言：劉緯育高傲自大，對庶民經濟有什麼貢獻？ 事實：改變成真！傳統市場改頭換面，菜籃族都說讚！",
          date: "2024/1/11",
          imageUrl: `${import.meta.env.VITE_RESOURCE_URL}/image/news/news2_s.png`
        },
        {
          url: '/newspage',
          type: "假消息澄清",
          typeClass: "fake_news",
          title: "傳言：劉緯育是不是歧視少數族群？",
          content: "傳言：劉緯育是不是歧視少數族群？事實：錯誤！劉緯育主張尊重多元，創造共榮。",
          date: "2024/2/1",
          imageUrl: `${import.meta.env.VITE_RESOURCE_URL}/image/news/news6_s.png`
        },
        {
          url: '/newspage',
          type: "演講活動",
          typeClass: "speech",
          title: "2024/2/24 青年之聲 新竹開講",
          content: "作為青年進補黨的總統候選人，劉緯育將於四日在新竹這個充滿活力和創意的城市，舉行一場為年輕族群打造更佳工作環境的重要演講。這次演講聚焦於年輕人的就業機會、工作環境以及相關政策。",
          date: "2024/2/1",
          imageUrl: `${import.meta.env.VITE_RESOURCE_URL}/image/news/news4_s.png`
        },
        {
          url: '/newspage',
          type: "新聞資訊",
          typeClass: "news_info",
          title: "台灣政治迎來新希望 - 青年進補黨宣佈改變政治文化",
          content: "今天，台灣政治迎來一場顛覆性的社會運動，青年進補黨正式宣佈成立，以改變政治文化並帶來新希望。該黨的黨主席是劉緯育，一位決心重塑台灣政治的嶄新領袖。",
          date: "2020/5/20",
          imageUrl: `${import.meta.env.VITE_RESOURCE_URL}/image/news/news5_s.png`
        },
        {
          url: '/newspage',
          type: "演講活動",
          typeClass: "speech",
          title: "2023/12/4 老年之聲 嘉義開講",
          content: "作為青年進補黨的總統候選人，劉緯育將於四日在嘉義這個高齡化城市，舉行一場為年老年族群打造合適工作環境的重要演講。這次演講聚焦於老年人的就業機會、工作環境以及相關政策。",
          date: "2023/12/4",
          imageUrl: `${import.meta.env.VITE_RESOURCE_URL}/image/news/news3_s.png`
        },
      ]

    }
  },
  components: {
    breadCrumbs,
    background,
  },
  computed: {
    // 動態屬性
    filteredNewsCard() {
      let filteredNews = this.newsCard;

      //篩選類別
      if (this.selectedCategory && this.selectedCategory !== 'all') {
        filteredNews = filteredNews.filter(item => item.type === this.selectedCategory);
      }

      // 篩選日期區間
      if (this.startDate && this.endDate) {
        filteredNews = filteredNews.filter(news => {
          const newsDate = new Date(news.date);
          const startDate = new Date(this.startDate);
          const endDate = new Date(this.endDate);
          return newsDate >= startDate && newsDate <= endDate;
        });
      }

      if (this.searchKeyword) {
        const keyword = this.searchKeyword.trim().toLowerCase();
        filteredNews = filteredNews.filter(news => {
          return news.title.toLowerCase().includes(keyword) || news.content.toLowerCase().includes(keyword);
        });
      }

      return filteredNews;
    },
  },
  methods: {
    searchNews() {    
      this.filteredNews= this.filterDate();
    },
    filterDate() {
      const startDate = new Date(this.startDate);
      const endDate = new Date(this.endDate);
      return this.newsCard.filter(news => {
        const newsDate = new Date(news.date);
        return newsDate >= startDate && newsDate <= endDate;
      });    
      
    },
    filterWord() {
      const keyword = this.searchKeyword.trim().toLowerCase();
        filteredNews = filteredNews.filter(news => {
          return news.title.toLowerCase().includes(keyword) || news.content.toLowerCase().includes(keyword);
        });    
    },
    clearFilter(){
      this.selectedCategory='';
      this.startDate='';
      this.endDate='';
      this.searchKeyword='';
    }
    
  },

  mounted() {
        document.title = '最新消息';
    }
}

</script>


<style scoped lang="scss">
@import "../assets/scss/style.scss";
</style>