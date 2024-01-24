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
          <li>
            <RouterLink to="/about">關於我們</RouterLink>
          </li>
          <li class="dropdown">
            <span>選舉資訊</span>
            <div v-show="showDropdown" class="dropdown-content">
              <router-link to="/election">候選人資訊</router-link>
              <router-link to="/election_journey">活動資訊</router-link>
            </div>
          </li>
          <li>
            <RouterLink to="/product">官方商城</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact">聯絡我們</RouterLink>
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
    const showDropdown = ref(true);

    return {
      showDropdown,
    };
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

.nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.dropdown {
  cursor: pointer;
}

.nav li {
  padding: 10px;
  cursor: pointer;
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>