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
                      <div class="icon"><img src="@/assets/image/home/icon_donate.svg" alt="">
                        <p>我要捐款</p>
                      </div>
                    </RouterLink>
                  </li>
              <li style="position:relative;">

                <div class="icon" @click="showDropDown"><img src="@/assets/image/home/icon_cart.svg" alt="">
                  <p>購物車</p>
                </div>
                <DropDown v-if="isDropDown" />
              </li>

              <li>
                <RouterLink to="/login">
                  <div class="icon"><img src="@/assets/image/home/icon_login.png" alt="">
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
import dropDown from '../components/cart/dropDown.vue'
import DropDown from '../components/cart/dropDown.vue';


export default {
  setup() {
  },
  components: {
    dropDown,
    DropDown
  },
  data() {
    return {
      isDropDown: false,

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
</style>
