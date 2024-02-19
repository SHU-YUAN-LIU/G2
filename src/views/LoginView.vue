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
                    <input type="text" name="phone" id="phone" placeholder="請輸入您的手機號碼" maxlength="10" v-model="register.phone">
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
            <form ref="login"  method="POST" action="" class="login" id="loginform" >
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
                <button class="btn" @click="memberLogin" type="button">登入 ➜</button>
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
export default {
    name: 'login',
    data: () => {
        return {
            registerBtn: false,
            member: {
                // email: 'youth@party',
                // psw: 'youthparty',
                email: '',
                psw: '',
            },
            login: {
                email: '',
                psw: '',
            },
        }
    },
    components: {
        Cookies,
    },

    setup() {
        const register = ref({
            name: '',
            date: '',
            email: '',
            phone: '',
            id: '',
            psw: '',
            check_psw: '',
            read: '',
        });

        const submitForm = async () => {
        try {
            const response = await fetch('https://our-backend.com/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(register.value)
            });
            if (!response.ok) throw new Error('Network response was not ok');
            console.log('Success:', response);
        } catch (error) {
            console.error('Error:', error);
        }
        };

        return {
            register,
            submitForm
        };
    },



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
                this.$router.push('/news')
            } else {
                alert("fail")
                event.preventDefault();
            }
        },
        memberLogin(){
            var formData = new FormData();
            formData.append('account',this.login.email);
            formData.append('psw',this.login.psw);

            axios({
                method:"post",
                url:`${import.meta.env.VITE_PHP_URL}` + "/front_memberLogin.php",
                data:formData,
                headers: { "Content-Type": "multipart/form-data" },
            })
            .then(res => {
                    console.log(res.data.member.length);
                    // console.log(res.data.admin[0].status);
                    if(res.data.member.length===0){
                        alert("帳號密碼錯誤");
                    }else if(res.data.member[0].status=="IA"){
                        alert("帳戶已停用");
                    }else{
                        this.$router.push({ name: 'Home' });
                        alert('登入成功');
                    }
                })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        }
	},
    created() {
        // const user = this.checkLogin()
        // addlistener();
        // console.log(this.login)
    },
    mounted() {
        document.title = '會員登入/註冊';
        addlistener();

        // this.login.email = "mor_2314";    ////////////套用的API裡面的帳號密碼
        // this.login.psw = "83r5^_";
        // this.handleLogin();
    },
    
}









    //     handleLogin() { 
    //         const token = 1;
    //         let loginEmail = this.login.email;
    //         let loginPsw = this.login.psw;
    //         if(loginEmail !=='' && loginPsw !=='') {
    //             // 模拟登录成功
    //             if (loginEmail == 'user@gmail.com' && loginPsw == 'Ab12345' ) {
    //                 // 登录成功，设置 token
    //                 this.login.token = token;
    //                 // 将登录信息存储在 cookie 中
    //                 Cookies.set('loginCookies', JSON.stringify(this.login), { expires: 1 });
    //                 console.log(this.login);
    //                 // cookie 中有 token 时才进行路由跳转
    //                 if (Cookies.get('loginCookies') && this.login.token) {
    //                     this.$router.push({name: 'member'});
    //                 }
    //             } else {
    //                 alert('帳號密碼錯誤');
    //             }
    //         } else {
    //             alert('帳號密碼不能為空');
    //         }
    //         //將 this.login 轉換為 JSON 字符串，保存在名為 'loginCookies' 的 Cookie 中，設置 Cookie 的過期時間為 1 天。
    //         Cookies.set('loginCookies', JSON.stringify(this.login), { expires: 1 })
    //         console.log(this.login)

    //         // cookie當中有token被設置才能改變路由
    //         if (Cookies.get('loginCookies') && this.login.token) {
    //         this.$router.push({name: 'member'})
    //         }
    //     },
    //     removeCookie() {
    //         Cookies.remove('loginCookies')
    //     }
    // },
</script>
<style scoped></style>




