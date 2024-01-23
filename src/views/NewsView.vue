<template>
  <div class="news_wrap">
    <div class="news_banner">
      <h1>最新消息</h1>
    </div>
    <div class="news_filter">
      <select name="" id="">
        <option value="" disabled selected>類別</option>
        <option value="">全部消息</option>
        <option value="">新聞資訊</option>
        <option value="">假消息澄清</option>
        <option value="">演講活動</option>
      </select>
      <input type="date" name="" id=""> 到 <input type="date">
      <input type="text" name="" id="" placeholder="請輸入關鍵字">
      <button class="remove">⟳</button>
      <button class="btn">搜尋</button>

    </div>
    <div v-for="item in newsCard" class="news_cards">
      <a :href="item.url">
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
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      
      newsCard: [
        { 
          url: '/member',
          type: "新聞資訊",
          typeClass: "news_info",
          title: "#120 台灣政治改革之路 - 義無反顧的選擇",
          content: "今天，台灣政治掀起一陣嶄新的風潮，政黨號次抽籤結果出爐，青年進補黨為「20」號，為這場政治革命的序幕定調。",
          date: "2023/12/11",
          imageUrl: "https://picsum.photos/600/600/?random=10"

        },
        {
          url: '#',
          type: "假消息澄清",
          typeClass: "fake_news",
          title: "傳言：劉緯育高傲自大，對庶民經濟有什麼貢獻？",
          content: "傳言：劉緯育高傲自大，對庶民經濟有什麼貢獻？ 事實：改變成真！傳統市場改頭換面，菜籃族都說讚！",
          date: "2024/2/1",
          imageUrl: "https://picsum.photos/500/450/?random=10"
        },
        {
          url: '#',
          type: "新聞資訊",
          typeClass: "news_info",
          title: "2024，選擇劉緯育，改變台灣的未來!",
          content: "我們站在一個新的開始之前，面對著選擇台灣未來的重要時刻。劉緯育，一位堅定認為台灣需要改變的領袖，宣佈參選2024年總統選舉。他的政策和願景將帶領台灣走向更美好的未來。",
          date: "2024/1/11",
          imageUrl: "https://picsum.photos/420/900/?random=10"
        },
        {
          url: '#',
          type: "演講活動",
          typeClass: "speech",
          title: "2024/2/24 青年之聲 新竹開講",
          content: "作為青年進補黨的總統候選人，劉緯育將於四日在新竹這個充滿活力和創意的城市，舉行一場為年輕族群打造更佳工作環境的重要演講。這次演講聚焦於年輕人的就業機會、工作環境以及相關政策。",
          date: "2024/2/1",
          imageUrl: "https://picsum.photos/300/250/?random=10"
        },
        {
          url: '#',
          type: "新聞資訊",
          typeClass: "news_info",
          title: "台灣政治迎來新希望 - 青年進補黨宣佈改變政治文化",
          content: "今天，台灣政治迎來一場顛覆性的社會運動，青年進補黨正式宣佈成立，以改變政治文化並帶來新希望。該黨的黨主席是劉緯育，一位決心重塑台灣政治的嶄新領袖。",
          date: "2020/5/20",
          imageUrl: "https://picsum.photos/700/690/?random=10"
        },
      ]

    }
  }
}

</script>

<style>

</style>