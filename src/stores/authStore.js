// src/stores/authStore.js
import { defineStore } from 'pinia'

// 使用 Pinia 的 defineStore 函數定義一個名為 'auth' 的 store
export const useAuthStore = defineStore('auth', {
  // state 返回一個函數，該函數返回此 store 的初始狀態
  state: () => ({
    isLoggedIn: false, // 用戶是否已登入
    member: '登入',
  }),

  actions: {
    // 檢查登入狀態的方法
    checkLoginStatus() {
      if (localStorage.getItem('userToken')) {
        this.isLoggedIn = true;
        this.member = '會員中心';
      } else {
        this.isLoggedIn = false;
        this.member = '登入';
      }
    },
    // 登入的方法
    login() {
      // 實際登入邏輯，例如 API 請求，這裡簡化為直接使用 localStorage
      if(localStorage.getItem('userToken')){
        this.isLoggedIn = true;
        this.member = '會員中心';
      }
      
    },
    // 登出的方法
    logout() {
        if(!localStorage.getItem('userToken')){
            this.isLoggedIn = false;
            this.member = '登入';
        }
    }
  }
})
