// https://pinia.vuejs.org/core-concepts/state.html
import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
    // 對應 data
    state: () => ({
        token: '',   // 後端僅返回token(通行證/令牌)
        userData: {} // 可以在login API中返回user資訊
    }),

    // 對應 computed (物件形式)
    getters: {
    },

    // 對應 methods (物件形式)
    actions: {
        updateToken (payload) {
            if(payload){
                this.token = payload
                localStorage.setItem('userToken', payload)
            }else{
                this.token = ''
                localStorage.removeItem('userToken')
            }
        },
        updateUserData(val) {
            // console.log(val);
            // 不把全部資訊紀錄
            this.userData = {
                email: val.email,
                // 封鎖狀況1|0
                status: val.status,
                // // 如果有權限可以把權限角色記載資料庫
                // role: 'editor'
            }

        },
        checkLogin(){
            const storageToken = localStorage.getItem('userToken')
            if(this.token){
                return this.token
            }else if(storageToken){
                this.token = storageToken
                return storageToken
            }else{
                return ''
            }
        },
        checkUserData(){
            const storageUserData = localStorage.getItem('userData')
            console.log(Object.keys(this.userData).length);
            if(Object.keys(this.userData).length > 0){
                return this.userData
            }else if(storageUserData){
                this.userData = JSON.parse(storageUserData)
                return storageUserData
            }else{
                return ''
            }
        },
    }
})