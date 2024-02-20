<!-- 
    如果這邊想要寫動畫可以看
    https://www.youtube.com/watch?v=uotY_cx1dvo
    他音樂非常大聲請小心
-->
<!-- input不要用v-for直接寫就好了 -->
<template>
    <article class="login_wrap_lg">
        <div class="container" :class="{ 'register-active': registerBtn }">
            <div class="overlay_container">
                <div class="overlay">
                    <div class="overlay_left">
                        <p>如果您已經有帳戶，請登入。</p>
                        <button class="btn" id="loginBtn" @click="registerBtn = !registerBtn">登入 ➜</button>
                    </div>
                    <div class="overlay_right">
                        <div class="sub_register">
                            <div class="login_logo">
                                <img src="/image/login/Logo.png" alt="">
                            </div>
                            <button class="btn" id="registerBtn" @click="registerBtn = !registerBtn">註冊 ➜</button>
                        </div>
                    </div>
                </div>
            </div>
            <form action="" class="register" id="registerform" @submit.prevent="submitForm">
                <div class="register_name">
                    <p>真實姓名<span>*</span><span id="nameerror"></span></p>
                    <input id="name" type="text" placeholder="請輸入您的姓名" v-model="registerForm.name">
                </div>
                <div class="register_birthday">
                    <p>生日<span>*</span><span id="dateerror"></span></p>
                    <input type="date" id="date" v-model="registerForm.date">
                </div>
                <div class="register_email">
                    <p>電子信箱<span>*</span><span id="emailerror"></span></p>
                    <input type="email" name="email1" id="email" placeholder="請輸入您的電子信箱" v-model="registerForm.email">
                </div>
                <div class="register_phone">
                    <p>手機<span>*</span><span id="phoneerror"></span></p>
                    <input type="text" name="phone" id="phone" placeholder="請輸入您的手機號碼" maxlength="10"
                        v-model="registerForm.phone">
                </div>
                <div class="register_id">
                    <p>身分證<span>*</span></p>
                    <input type="text" name="id" id="ide" placeholder="請輸入您的身分證" minlength="10" v-model="registerForm.id">
                </div>
                <div class="register_psw">
                    <p>密碼<span>*</span><span id="pswerror"></span></p>
                    <input type="text" name="psw" id="psw1" placeholder="請輸入您的密碼" v-model="registerForm.psw">
                </div>
                <div class="register_check_psw">
                    <p>確認密碼<span>*</span></p>
                    <input type="text" name="checkpsw" id="checkpsw" placeholder="請再次輸入您的密碼" v-model="registerForm.check_psw">
                </div>
                <div class="register_read">
                    <input type="checkbox" class="box" v-model="registerForm.read">
                    <p>我已閱讀並瞭解條款和條件以及隱私權政策。<span>*</span></p>
                </div>
                <button class="btn" @click="sendRegisterForm">送出 ➜</button>
            </form>
            <form method="POST" action="" class="login" id="loginform" @submit.prevent="memberLogin">
                <div class="profile">
                    <img src="/image/login/user-solid.svg" alt="">
                </div>
                <div class="register_email">
                    <p>電子信箱<span>*</span><span id="emailerror"></span></p>
                    <input type="email" name="email" id="email2" placeholder="請輸入您的電子信箱" v-model="loginForm.email">
                </div>
                <div class="register_psw">
                    <p>密碼<span>*</span></p>
                    <input type="password" name="psw" id="psw2" placeholder="請輸入您的密碼" v-model="loginForm.psw">
                </div>
                <router-link to="/forgotpsw">忘記密碼?</router-link>
                <button class="btn" type="submit">登入 ➜</button>
                <!-- <button class="btn" @click="handleLogin();checkmemdata()"><router-link to="/member">登入 ➜</router-link></button> -->
                <!-- <button type="reset" @click="removeCookie">clear</button> -->
            </form>

        </div>
    </article>
    <div class="login_wrap_sm">
        <div class="login_logo"><img src="../assets/image/login/logo.png" alt=""></div>
        <form action="">
        <div class="login_logo"><img src="" alt=""></div>
        <div class="login_email">
            <p>帳號</p>
            <input type="email">
        </div>
        <div class="login_psw">
            <p>密碼</p>
            <input type="password">
        </div>
        <router-link to="/signupform">尚未加入會員?</router-link>
        <router-link to="/forgotpsw">忘記密碼?</router-link>
        <button type="button" class="btn" @click="memberLogin">登入 ➜</button>
        </form>
    </div>
</template>
<script>



import { addlistener } from '@/stores/datacheck.js';
import Cookies from 'js-cookie';
import { ref } from 'vue';
import axios from 'axios';
import { mapActions } from 'pinia'
import {useUserStore} from '@/stores/user'
import { RouterView } from 'vue-router'
export default {

    name: 'login',
    data: () => {
        
        return {
            registerBtn: false,
            member: {
                email: '',
                psw: '',
            },
            loginForm: {
                email: '',
                psw: '',
            },
            registerForm: {
                name: '',
                date: '',
                email: '',
                phone: '',
                id: '',
                psw: '',
                check_psw: '',
                read: '',
            }

        }
    },
    components: {
        Cookies,
    },


    //資料驗證
    methods: {
        addlistener,

        ...mapActions(useUserStore, ['updateToken', 'updateName', 'checkLogin', 'updateUserData']),
        checkmemdata(event) {
            const mailinput = this.$refs.login.querySelector('#email2').value;
            console.log(mailinput);
            const pswinput = this.$refs.login.querySelector('#psw2').value;
            console.log(pswinput);
            if (mailinput == this.member.mail && pswinput == this.member.psw) {
                alert("success")
                event.preventDefault();
                this.$router.push('/')
            } else {
                alert("fail")
                event.preventDefault();
            }
        },

        memberLogin(){
            if (!this.loginForm.email || !this.loginForm.psw) {
                alert('請填寫電子郵件和密碼。');
                return;
            }

            // 創建一個新的FormData物件
            const bodyFormData = new FormData();
            bodyFormData.append('email', this.loginForm.email);
            bodyFormData.append('psw', this.loginForm.psw);

                axios({
                        method:"post",
                        url:`${import.meta.env.VITE_PHP_URL}` + "/front_memberLogin.php",
                        data:bodyFormData,
                        // headers: { "Content-Type": "multipart/form-data" },
                }).then(res=>{
                    console.log(res.data.member);
                    if (res.data.error) {
                        // 登錄失敗，顯示錯誤消息
                        alert(res.data.msg); // 或進行本地化處理顯示給用戶
                    } else {
                        // 登錄成功，處理 token 和用戶資料
                        // this.updateToken(res.data.session_id);
                        this.updateUserData(res.data.member);
                        this.$router.push('/');
                    }
                }).catch(error=>{
                    console.log(error);
                })
        },

    // memberLogin(){
    //     // 創建一個新的FormData物件
    //     var formData = new FormData();
    //     // 向FormData物件中添加帳號（email）
    //     formData.append('account',this.login.email);
    //     // 向FormData物件中添加密碼（psw）
    //     formData.append('psw',this.login.psw);

    //     // 使用axios發送post請求
    //     axios({
    //         method:"post", // 指定請求方式為post
    //         url:`${import.meta.env.VITE_PHP_URL}` + "/front_memberLogin.php", // 指定請求的URL
    //         data:bodyFormData, // 將創建的FormData作為請求體發送
    //         headers: { "Content-Type": "multipart/form-data" }, // 設置請求頭，指定數據類型為multipart/form-data
    //     })
    //     .then(res => { // 請求成功後的處理函數
    //             console.log(res.data.member.length); // 打印出返回數據中member屬性的長度
    //             // 檢查帳號和密碼是否為空
    //             if(!this.login.email && !this.login.psw){
    //                 alert('帳號密碼不能為空'); // 若為空，則彈出提示
    //             }else if(res.data.member.length===0){ // 若member長度為0，表示未找到該用戶
    //                 alert("帳號密碼錯誤"); // 彈出帳號密碼錯誤提示
    //             }else if(res.data.member[0].status=="IA"){ // 若用戶狀態為IA（停用狀態）
    //                 alert("帳戶已停用"); // 彈出帳戶已停用提示
    //             }else{ // 如果以上條件都不滿足，表示登入成功
    //                 this.$router.push({ name: 'Home' }); // 導航到Home頁面
    //                 alert('登入成功'); // 彈出登入成功提示
    //                 localStorage.setItem('member', JSON.stringify(res.data.member)); // 將用戶數據保存到localStorage中
    //             }
    //         })
    //     .catch(error => { // 請求失敗後的處理函數
    //         console.error('Error fetching data:', error); // 打印出錯誤信息
    //     });
    // }
	},
    created() {
        // const user = this.checkLogin()
        // addlistener();
    },
    mounted() {
        document.title = '會員登入/註冊';
        addlistener();
    },

}


</script>
<style scoped></style>




