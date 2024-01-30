import { Dropdown } from 'view-ui-plus'
import { createRouter, createWebHistory } from 'vue-router'

// path設定'/'表示將該頁面設置為首頁
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //跳轉頁面後,會回到最上成
  scrollBehavior(to, from, savedPosition) {
    // 如果有 savedPosition，使用它，否则滚动到页面顶部
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },


  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        breadcrumb: [{
          name: '首頁',
        }]
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        breadcrumb: [{
          name: '首頁 / ',
          link: '/',
        },
        {
          name: '關於我們',
        }]
      }
    },
    {
      path: '/organization',
      name: 'organization',
      component: () => import('../views/OrganizationView.vue'),
      meta: {
        breadcrumb: [{
          name: '首頁 / ',
          link: '/',
        },
        {
          name: '組織團隊',
        }]
      }
    },
    {
      path: '/partyhistory',
      name: 'partyhistory',
      component: () => import('../views/PartyHistoryView.vue'),
      meta: {
        breadcrumb: [{
          name: '首頁 / ',
          link: '/',
        },
        {
          name: '黨史',
        }]
      }
    },
    {
      path: '/product',
      name: 'product',
      // route level code-splitting
      // this generates a separate chunk (Product.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProductView.vue'),
      meta: {
        breadcrumb: [{
          name: '首頁 / ',
          link: '/',
        },
        {
          name: '官方商城',
        }]
      },

    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (Login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/donate',
      name: 'donate',
      // route level code-splitting
      // this generates a separate chunk (Login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DonateView.vue'),
      meta: {
        breadcrumb: [{
          name: '首頁 / ',
          link: '/',
        },
        {
          name: '我要捐款',
        }]
      }
    },
    {
      path: '/donate/page',
      name: 'donate_page',

      component: () => import('../views/DonateView_page.vue'),
      meta: {
        breadcrumb: [{
          name: '首頁 / ',
          link: '/',
        },
        {
          name: '我要捐款 /',
          link: '/donate',
        },
        {
          name: '基本資料',
        }]
      }
    },
    {
      path: '/donate/page/confirm',
      name: 'donate_page_confirm',
      component: () => import('../views/DonateView_page_confirm.vue'),
      meta: {
        breadcrumb: [{
          name: '首頁 / ',
          link: '/',
        },
        {
          name: '我要捐款 /',
          link: '/donate',
        },
        {
          name: '確認資料',
        }]
      }
    },
    {
      path: '/news',
      name: 'news',

      component: () => import('../views/NewsView.vue'),
      meta: {
        breadcrumb: [{
          name: '首頁 / ',
          link: '/',
        },
        {
          name: '最新消息',
        }]
      }
    },
    {
      path: '/contact',
      name: 'contact',

      component: () => import('../views/ContactView.vue'),
      meta: {
        breadcrumb: [{
          name: '首頁 / ',
          link: '/',
        },
        {
          name: '聯絡我們',
        }]
      }

    },
    {
      path: '/contact_search',
      name: '/contact_search',

      component: () => import('../views/ContactSearchView.vue'),
      meta: {
        breadcrumb: [{
          name: '首頁 / ',
          link: '/',
        },
        {
          name: ' 聯絡我們 /',
          link: '/contact',
        },
        {
          name: ' 陳情案件查詢',
        }]
      }
    },
    {
      path: '/contact_searchFinal',
      name: '/contact_searchFinal',

      component: () => import('../views/ContactSearchFinalView.vue'),
      meta: {
        breadcrumb: [{
          name: '首頁 / ',
          link: '/',
        },
        {
          name: ' 聯絡我們 /',
          link: '/contact',
        },
        {
          name: ' 陳情案件查詢結果',
        }]
      }
    },
    {
      path: '/election',
      name: 'election',

      component: () => import('../views/ElectionView.vue')
    },
    {
      path: '/election_journey',
      name: 'election_journey',

      component: () => import('../views/ElectionView_journey.vue'),
      meta: {
        breadcrumb: [{
          name: '首頁 / ',
          link: '/',
        },
        {
          name: ' 選舉資訊',
        }]
      }
    },
    {
      path: '/product/:productId',
      name: 'productinfoview',
      component: () => import('../views/ProductInfoView.vue')
    },
    {
      path: '/member',
      name: 'member',
      component: () => import('../views/MemberView.vue')
    },
    {
      path: '/forgotpsw',
      name: 'forgotpsw',
      component: () => import('../views/ForgotpswView.vue')
    },
    {
      path: '/newpsw',
      name: 'newpsw',
      component: () => import('../views/NewpswView.vue')
    },
    {
      path: '/newspage',
      name: 'newspage',
      component: () => import('../views/NewspageView.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/ProductPayView',
      name: 'ProductPay',
      component: () => import('../views/ProductPayView.vue')
    },
  ]
})

export default router