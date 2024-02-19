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
                    <input id="name" type="text" placeholder="請輸入您的姓名" v-model="register.name">
                </div>
                <div class="register_birthday">
                    <p>生日<span>*</span><span id="dateerror"></span></p>
                    <input type="date" id="date" v-model="register.date">
                </div>
                <div class="register_email">
                    <p>電子信箱<span>*</span><span id="emailerror"></span></p>
                    <input type="email" name="email1" id="email" placeholder="請輸入您的電子信箱" v-model="register.email">
                </div>
                <div class="register_phone">
                    <p>手機<span>*</span><span id="phoneerror"></span></p>
                    <input type="text" name="phone" id="phone" placeholder="請輸入您的手機號碼" maxlength="10"
                        v-model="register.phone">
                </div>
                <div class="register_id">
                    <p>身分證<span>*</span></p>
                    <input type="text" name="id" id="ide" placeholder="請輸入您的身分證" minlength="10" v-model="register.id">
                </div>
                <div class="register_psw">
                    <p>密碼<span>*</span><span id="pswerror"></span></p>
                    <input type="text" name="psw" id="psw1" placeholder="請輸入您的密碼" v-model="register.psw">
                </div>
                <div class="register_check_psw">
                    <p>確認密碼<span>*</span></p>
                    <input type="text" name="checkpsw" id="checkpsw" placeholder="請再次輸入您的密碼" v-model="register.check_psw">
                </div>
                <div class="register_read">
                    <input type="checkbox" class="box" v-model="register.read">
                    <p>我已閱讀並瞭解條款和條件以及隱私權政策。<span>*</span></p>
                </div>
                <button class="btn" @onclick="sendRegisterForm">送出 ➜</button>
            </form>
            <form @submit.prevent="login" ref="login" action="" class="login" id="loginform" method="post">
                <div class="profile">
                    <img src="/image/login/user-solid.svg" alt="">
                </div>
                <div class="register_email">
                    <p>電子信箱<span>*</span><span id="emailerror"></span></p>
                    <input type="email" name="email" id="email2" placeholder="請輸入您的電子信箱" v-model="login.email">
                </div>
                <div class="register_psw">
                    <p>密碼<span>*</span></p>
                    <input type="password" name="psw" id="psw2" placeholder="請輸入您的密碼" v-model="login.psw">
                </div>
                <router-link to="/forgotpsw">忘記密碼?</router-link>
                <button class="btn" type="submit" @click="login">登入 ➜</button>
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
            <button type="button" class="btn" @click="login">登入 ➜</button>
        </form>
    </div>
</template>
<script>



import { addlistener } from '@/stores/datacheck.js';
import { useUserStore } from '@/stores/user'
import Cookies from 'js-cookie';
import axios from 'axios';
export default {

    name: 'login',
    data: () => {
        
        return {
            registerBtn: false,
            member: {
                mail: 'youth@party',
                psw: 'youthparty',
            },
            login: {
                email: '',
                psw: '',
            },
            register: {
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
        login() {
            const userStore = useUserStore()
            userStore.login(this.email, this.password)
                .then(() => {
                // 登錄成功的處理
                })
                .catch(error => {
                // 登錄失敗的處理
                console.error('登錄失敗', error)
                })
            }
        },

        // handleLogin() {
        //     // 使用 this.login.email 和 this.login.psw 進行驗證
        //     if (this.login.email === '' || this.login.psw === '') {
        //         alert('帳號及密碼不能為空');
        //         return; // 不發送請求，直接返回
        //     }

        //     axios({
        //         method: "post",
        //         url: `${import.meta.env.VITE_PHP_URL}` + "/memberDataGetAll.php",
        //         data: JSON.stringify({ // 確保數據被轉為 JSON 字符串
        //             email: this.login.email,
        //             psw: this.login.psw
        //         }),
        //         headers: { "Content-Type": "application/json" },
        //     })
        //     .then(res => {
        //         // console.log(res.data.token);
        //         if (res.data.token) {
        //             localStorage.setItem('token', res.data.token);
        //             this.$router.push({ name: '/' });
        //         } else {
        //             alert('帳號或密碼錯誤');
        //         }
        //     })
        //     .catch(error => {
        //         console.error('Error fetching data:', error);
        //     });
        // }

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




