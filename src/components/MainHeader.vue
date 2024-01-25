<template>
  <header>
    <div class="wrapper">
      <nav>
        <ul>
          <li>
            <!-- 這邊的路由設定要全部和index.js裡面的一致 -->
            <RouterLink to="/"><img src="@/assets/image/home/logo.svg" alt=""></RouterLink>
          </li>
          <li>
            <div class="nav_items">
          <li>
            <RouterLink to="/news">最新消息</RouterLink>
          </li>
          <li class="dropdown">
            <span>關於我們</span>
            <div class="dropdown-content">
              <RouterLink to="/">核心理念</RouterLink>
              <RouterLink to="/">組織團隊</RouterLink>
              <RouterLink to="/">黨史</RouterLink>
            </div>
          </li>
          <li class="dropdown">
            <span>選舉資訊</span>
            <div class="dropdown-content">
              <router-link to="/election">候選人資訊</router-link>
              <router-link to="/election_journey">活動資訊</router-link>
            </div>
          </li>
          <li>
            <RouterLink to="/product">官方商城</RouterLink>
          </li>
          <li class="dropdown">
            <span>聯絡我們</span>
            <div class="dropdown-content">
              <router-link to="/contact">我要陳情</router-link>
              <router-link to="/contact_search">陳情進度查詢</router-link>
            </div>
          </li>
    </div>
    </li>
    <li>
      <div class="nav_icons">
    <li>
      <RouterLink to="/donate">
        <div><img src="@/assets/image/home/icon_donate.svg" alt="">
          <p>我要捐款</p>
        </div>
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/cart">
        <div><img src="@/assets/image/home/icon_cart.svg" alt="">
          <p>購物車</p>
        </div>
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/login">
        <div><img src="@/assets/image/home/icon_login.png" alt="">
          <p>登入</p>
        </div>
      </RouterLink>
    </li>
    </div>
    </li>
    </ul>
    </nav>
    </div>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

export default {
  setup() {
  },
  components: {

  },
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/layout/_header.scss";


.dropdown {
  cursor: pointer;

  :hover {
    color: red;
  }
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 120px;
  z-index: 1;
  transform: translateX(-18%);
}

.dropdown-content a {
  padding: 12px 0px;
  text-align: center;
  text-decoration: none;
  display: block;

  +a {
    border-top: 1px solid #000;
  }
}

.dropdown-content a:nth-child(1) {
  margin-top: 34px;
}

.dropdown-content a:hover {
  background-color: orange;
  color: #f9f9f9;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>