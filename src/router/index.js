import { createRouter, createWebHistory } from 'vue-router'

// path設定'/'表示將該頁面設置為首頁
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/product',
      name: 'product',
      // route level code-splitting
      // this generates a separate chunk (Product.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProductView.vue')
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
    },
    {
      path: '/donate/page',
      name: 'donate_page',

      component: () => import('../views/DonateView_page.vue')
    }, {
      path: '/donate/page/confirm',
      name: 'donate_page_confirm',
      component: () => import('../views/DonateView_page_confirm.vue')
    },
    {
      path: '/news',
      name: 'news',

      component: () => import('../views/NewsView.vue')
    },
    {
      path: '/contact',
      name: 'contact',

      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/contact_search',
      name: '/contact_search',

      component: () => import('../views/ContactSearchView.vue')
    },
    {
      path: '/contact_searchFinal',
      name: '/contact_searchFinal',

      component: () => import('../views/ContactSearchFinalView.vue')
    },
    {
      path: '/election',
      name: 'election',

      component: () => import('../views/ElectionView.vue')
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
    }
  ]
})

export default router
