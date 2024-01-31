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

                <div class="icon" @click="showDropDown"><img src="/image/home/icon_cart.svg" alt="">
                  <p>購物車</p>
                </div>
                <DropDown v-if="isDropDown" />
              </li>

              <li>
                <RouterLink to="/login">
                  <div class="icon"><img src="/image/home/icon_login.png" alt="">
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
        <li>
          <RouterLink to="/about">核心理念</RouterLink>
        </li>
        <li><router-link to="/election">候選人資訊</router-link></li>
        <li>
          <RouterLink to="/product">官方商城</RouterLink>
        </li>
        <li><router-link to="/contact">我要陳情</router-link></li>
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
          <RouterLink to="/login">
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

export default {
  setup() {
  },
  components: {
    DropDown,
  },
  data() {
    return {
      //購物車下拉
      isDropDown: false,
      //漢堡
      isOpen: false,
      //漢堡選單
      isMenuOpen: false,

    }
  },
  created() {
  },
  methods: {
    //只要是data的物件',都要加this
    showDropDown() {
      if (this.isDropDown == true) {
        this.isDropDown = false;
      } else {
        this.isDropDown = true;
      }

    },
    //漢堡
    toggleMenu() {
      this.isOpen = !this.isOpen;
      this.isMenuOpen = !this.isMenuOpen;
    }

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
  border: 2px solid orange;
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

.dropdown-content a:hover {
  background-color: #FF892E;
  color: #f9f9f9;
}

.dropdown:hover .dropdown-content {
  display: block;
}

// 漢堡
.ham-pic {
  @media screen and (min-width:768px) {
    display: none;
  }

  @media screen and (max-width:768px) {
    display: block;
  }
}

header {
  @media screen and (max-width:768px) {
    display: none;
  }
}

@media screen and (max-width:768px) {
  .hamburger-menu {
    position: fixed;
    top: 25px;
    left: 65px;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    cursor: pointer;
    z-index: 99;


    .ham-bar-group {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 30px;
      height: 25px;
      cursor: pointer;



      .ham-bar {
        width: 100%;
        height: 4px;
        background-color: $gray_3;
        transition: all 0.3s;
      }
    }
  }
}

.ham-pull-menu {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.96);
  position: absolute;
  display: flex;
  top: 65px;
  justify-content: center;
  align-items: center;
  z-index: 6;

  li a {
    color: black;
    list-style: none;
    font-family: 'Noto Sans TC', sans-serif;
    font-size: 16px;
    font-weight: 700;
    padding: 17px;
    display: block;
    letter-spacing: 2px;
    display: flex;
    align-items: center;
  }

  .icon {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
}

.open .bar:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
}

.open .bar:nth-child(2) {
  opacity: 0;
}

.open .bar:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
}
</style>
