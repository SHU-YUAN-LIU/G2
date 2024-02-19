import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
    state: () => ({
        token: null,
        userEmail: null,
    }),
    actions: {
        async login(email, psw) {
            try {
                const response = await axios.post(`${import.meta.env.VITE_PHP_URL}` + "/memberDataGetAll.php", { email, psw })
                if (response.data.token) {
                    this.token = response.data.token
                    this.userEmail = email
                    localStorage.setItem('token', response.data.token)
                    // 路由跳轉或其他操作
                } else {
                    alert('登入失敗')
                }
            } catch (error) {
                console.error('登入出錯', error)
                alert('登入出錯')
            }
        },
        logout() {
            this.token = null
            this.userEmail = null
            localStorage.removeItem('token')
            // 路由跳轉或其他操作
        }
    }
})