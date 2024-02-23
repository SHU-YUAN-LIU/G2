<template>
  <header>
    <div class="wrapper">
      <nav>
        <ul>
          <li>
            <!-- 這邊的路由設定要全部和index.js裡面的一致 -->
            <RouterLink to="/"><img src="/image/home/logo.svg" alt=""></RouterLink>
          </li>
          <li>
            <div class="nav_items">
          <li>
            <RouterLink to="/news">最新消息</RouterLink>
          </li>
          <li class="dropdown">
            <span>關於我們</span>
            <div class="dropdown-content">
              <RouterLink to="/about">核心理念</RouterLink>
              <RouterLink to="/organization">組織團隊</RouterLink>
              <RouterLink to="/partyhistory">黨史</RouterLink>
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
        <div class="icon"><img src="/image/home/icon_donate.svg" alt="">
          <p>我要捐款</p>
        </div>
      </RouterLink>
    </li>
    <li style="position:relative;">

      <div class="icon cartbtn" @click.stop="showDropDown"><img src="/image/home/icon_cart.svg" alt="">
        <p>購物車</p>
      </div>
      <DropDown ref="dropDown" class="drop-down" />
    </li>
    <li class="dropdown">
      <RouterLink to="/login">
        <div class="icon"><img src="/image/home/icon_login.png" alt="">
          <p>登入</p>
        </div>
      </RouterLink>
      <div class="dropdown-content">
        <RouterLink to="/member">會員中心</RouterLink>
        <button class="logout_btn" @click="memberLogout">登出</button>
      </div>
    </li>
    </div>
    </li>
    </ul>
    </nav>
    </div>
  </header>
  <!-- 漢堡 -->
  <div class="hamburger-menu" :class="{ open: isOpen }" @click="toggleMenu">
    <RouterLink to="/"><img class="ham-pic" src="/image/home/logo.svg" alt=""></RouterLink>
    <div class="ham-bar-group">
      <div class="ham-bar"></div>
      <div class="ham-bar"></div>
      <div class="ham-bar"></div>
    </div>
    <div class="ham-pull-menu" v-if="isMenuOpen">
      <ul>
        <li>
          <RouterLink to="/news">最新消息</RouterLink>
        </li>
        <!-- 關於我們 -->
        <li>
          <RouterLink to="/about">關於我們</RouterLink>
          <RouterLink to="/organization">組織團隊</RouterLink>
        </li>
        <!-- 選舉資訊 -->
        <li>
          <router-link to="/election">候選人資訊</router-link>
        </li>
        <li>
          <router-link to="/election_journey"> 活動資訊 </router-link>
        </li>
        <li>
          <RouterLink to="/product">官方商城</RouterLink>
        </li>
        <!-- 聯絡我們 -->
        <li><router-link to="/contact">我要陳情</router-link></li>
        <li><router-link to="/contact_searchFinal">陳情進度查詢</router-link></li>
        <li>
          <RouterLink to="/donate">
            <div class="icon"><img src="/image/home/icon_donate.svg" alt="">
              <p>我要捐款</p>
            </div>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/productPay">
            <div class="icon"><img src="/image/home/icon_cart.svg" alt="">
              <p>購物車</p>
            </div>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/login" class="login_info_btn" @click="toggleLogin">
            <div class="icon"><img src="/image/home/icon_login.png" alt="">
              <p>登入</p>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import DropDown from '../components/cart/dropDown.vue'
import axios from 'axios';


export default {

  components: {
    DropDown,
  },
  data() {
    return {
      //購物車下拉
      // isDropDown: false,
      //漢堡
      isOpen: false,
      //漢堡選單
      isMenuOpen: false,
      //漢堡選單下拉
      dropDownMenu: false,
    }
  },
  created() {
  },
  mounted() {
    // 添加點擊事件監聽器到整個頁面上
    document.addEventListener('click', this.closeDropDown);

  },

  methods: {
    showDropDown() {
      //$refs(可以想像成可以拿子元件的變數方法),dropDown(在這頁要同一個名字),isDropDown(子元件的方法)
      this.$refs.dropDown.isDropDown = !this.$refs.dropDown.isDropDown;
    },
    //關閉購物車下拉
    closeDropDown() {
      // this.isDropDown = !this.isDropDown;//寫這樣,會變成案外面也會打開
      // this.isDropDown = false;
      this.$refs.dropDown.isDropDown = false;
    },
    //漢堡
    toggleMenu() {
      this.isOpen = !this.isOpen;
      this.isMenuOpen = !this.isMenuOpen;
    },

    //login_info_btn 
    memberLogout() {
      // 檢查localStorage是否有userToken
      if (localStorage.getItem('userToken')) {
        // 已登入，執行登出
        axios.get(`${import.meta.env.VITE_PHP_URL}/logout.php`)
          .then(response => {
            // 登出成功，移除本地存储的userToken
            console.log(123);
            localStorage.removeItem('userToken');
            // 重定向到登录页面或主页
            this.$router.push('/login');
          })
          .catch(error => {
            console.error('發生錯誤', error);
          });
      }
    }
  },
  beforeUnmount() {
    // 移除點擊事件監聽器
    document.removeEventListener('click', this.closeDropDown);
  }
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
  border: 2px solid orange;
  min-width: 120px;
  z-index: 1;
  transform: translateX(-18%);

  @media screen and (max-width: 768px) {
    display: block;
  }
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

.dropdown-content a:hover {
  background-color: #FF892E;
  color: #f9f9f9;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>