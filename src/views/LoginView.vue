<!-- 
    如果這邊想要寫動畫可以看
    https://www.youtube.com/watch?v=uotY_cx1dvo
    他音樂非常大聲請小心
-->
<!-- input不要用v-for直接寫就好了 -->
<template>
    <div style="position: relative;" class="login_big_wrap">
    <div class="background">
        <div class="triangle_top"></div>
    </div>
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
                <form action="" method="post" class="register" id="registerform" @submit.prevent="handleSubmit">
                    <div class="register_name">
                        <p>真實姓名<span>*</span><span id="nameerror"></span></p>
                        <input type="text" id="name" placeholder="請輸入您的姓名" v-model="registerForm.member_name">
                    </div>
                    <div class="register_birthday">
                        <p>生日<span>*</span><span id="dateerror"></span></p>
                        <input type="date" id="date" v-model="registerForm.birthday">
                    </div>
                    <div class="register_email">
                        <p>電子信箱<span>*</span><span id="emailerror"></span></p>
                        <input type="email" name="email1" placeholder="請輸入您的電子信箱" v-model="registerForm.email">
                    </div>
                    <div class="register_phone">
                        <p>手機<span>*</span><span id="phoneerror"></span></p>
                        <input type="phone" name="phone" id="phone" placeholder="請輸入您的手機號碼" maxlength="10"
                            v-model="registerForm.cellphone">
                    </div>
                    <div class="register_id">
                        <p>身分證<span>*</span></p>
                        <input type="text" name="id" id="id" placeholder="請輸入您的身分證" minlength="10"
                            v-model="registerForm.id_number">
                    </div>
                    <div class="register_psw">
                        <p>密碼<span>*</span><span id="pswerror"></span></p>
                        <input type="text" name="psw" placeholder="請輸入您的密碼" v-model="registerForm.password">
                    </div>
                    <div class="register_check_psw">
                        <p>確認密碼<span>*</span></p>
                        <input type="text" name="checkpsw" id="checkpsw" placeholder="請再次輸入您的密碼"
                            v-model="registerForm.check_psw">
                    </div>
                    <div class="register_read">
                        <input type="checkbox" class="box" v-model="registerForm.read">
                        <p>我已閱讀並瞭解條款和條件以及隱私權政策。<span>*</span></p>
                    </div>
                    <button class="btn" type="submit">送出 ➜</button>
                </form>
                <form method="POST" action="" class="login" id="loginform" @submit.prevent="memberLogin">
                    <div class="profile">
                        <img src="/image/login/user-solid.svg" alt="">
                    </div>
                    <div class="register_email">
                        <p>電子信箱<span>*</span><span id="emailerror"></span></p>
                        <input type="email" name="email" id="email" placeholder="請輸入您的電子信箱" v-model="loginForm.email">
                    </div>
                    <div class="register_psw">
                        <p>密碼<span>*</span></p>
                        <input type="password" name="psw" id="psw" placeholder="請輸入您的密碼" v-model="loginForm.psw">
                    </div>
                    <router-link to="/member">忘記密碼?</router-link>
                    <button class="btn" type="submit">登入 ➜</button>
                </form>
            </div>
        </article>
        <background :height="'0'" />
    </div>
    <div class="login_wrap_sm">
        <div class="login_logo"><img src="../assets/image/login/logo.png" alt=""></div>
        <form method="POST" action="" class="login" id="loginformSm" @submit.prevent="memberLogin">
            <div class="login_logo"><img src="" alt=""></div>
            <div class="login_email">
                <p>帳號</p>
                <input type="email" v-model="loginForm.email">
            </div>
            <div class="login_psw">
                <p>密碼</p>
                <input type="password" v-model="loginForm.psw">
            </div>
            <router-link to="/signupform">尚未加入會員?</router-link>
            <router-link to="/forgotpsw">忘記密碼?</router-link>
            <button class="btn" type="submit">登入 ➜</button>
        </form>
    </div>
</template>
<script>



import { addlistener } from '@/stores/datacheck.js';
import Cookies from 'js-cookie';
import axios from 'axios';
import { mapActions } from 'pinia';
import { useUserStore } from '@/stores/user';
import { RouterView } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';
import background from '../components/Background_green.vue';

export default {

    name: 'login',
    data: () => {
        return {
            resizewidth: "",
            registerBtn: false,
            member: {
                email: '',
                psw: '',
                userToken: '',
            },
            loginForm: {
                email: '',
                psw: '',
            },
            registerForm: {
                member_name: '',
                birthday: '',
                email: '',
                cellphone: '',
                id_number: '',
                password: '',
                check_psw: '',
                read: false,
            },
            //儲存一個警告資訊的陣列
            alert_info: [],
            memberData: [],
            pk: '',
            member_no: '',
        }
    },
    components: {
        Cookies,
        background
    },
    computed: {
        bodyWidth() {
            return document.documentElement.offsetWidth + 'px';
        }
    },

    //資料驗證
    methods: {
        addlistener,
        resizebody() {
            this.resizewidth = document.documentElement.offsetWidth + 'px';
            document.documentElement.style.setProperty('--body-width', this.resizewidth);
        },

        ...mapActions(useUserStore, ['updateToken', 'updateName', 'checkLogin', 'updateUserData']),
        checkmemdata(event) {
            const mailinput = this.$refs.login.querySelector('#email').value;
            console.log(mailinput);
            const pswinput = this.$refs.login.querySelector('#psw').value;
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
        

        memberLogin() {
            if (!this.loginForm.email || !this.loginForm.psw) {
                alert('請填寫電子郵件和密碼。');
                return;
            }
            // console.log(1234);
            // 創建一個新的FormData物件
            const bodyFormData = new FormData();
            bodyFormData.append('email', this.loginForm.email);
            bodyFormData.append('psw', this.loginForm.psw);

            axios({
                method: "post",
                url: `${import.meta.env.VITE_PHP_URL}` + "/front_memberLogin.php",
                data: bodyFormData,
                // headers: { "Content-Type": "multipart/form-data" },
            }).then(res => {
                // console.log(res.data); // 打印 data 属性
                if (res.data.error) {
                    // 登錄失敗，顯示錯誤消息
                    alert(res.data.msg); // 或進行本地化處理顯示給用戶
                } else if (res.data.member.status == 'IA') {
                    alert('帳號已停權'); // 或進行本地化處理顯示給用戶
                    return;
                }
                else {
                    // 登錄成功，處理 token 和用戶資料
                    localStorage.setItem('userToken', res.data.token);
                    localStorage.setItem('member', JSON.stringify(res.data.member));
                    this.$router.push('/');
                    this.$store.checkLoginStatus();
                }
            }).catch(error => {
                console.log(error);
            })

        },
        handleSubmit() {
            if (this.checkAllInput) { // 假设这个函数返回true当所有输入都是有效的
                this.clearAndSaveMember();
            }
        },
        checkAllInput() {
            this.alert_info = [];
            //給一個布林值,表示表單是否填寫完畢,方便在上方功能取用
            let allFormOk = true;

            if (!this.registerForm.member_name) {
                this.alert_info.push('姓名未填寫');
                allFormOk = false;
            }

            if (!this.registerForm.birthday) {
                this.alert_info.push('生日未填寫');
                allFormOk = false;
            }

            if (!this.registerForm.email) {
                this.alert_info.push('電子信箱未填寫');
                allFormOk = false;
            }

            if (!this.registerForm.email) {
                this.alert_info.push('電子信箱未填寫');
                allFormOk = false;
            }

            if (!this.registerForm.cellphone) {
                this.alert_info.push('手機號碼未填寫');
                allFormOk = false;
            }

            if (!this.registerForm.id_number) {
                this.alert_info.push('身分證字號未填寫');
                allFormOk = false;
            }

            if (!this.registerForm.password) {
                this.alert_info.push('密碼未填寫');
                allFormOk = false;
            }
            if (!this.registerForm.check_psw) {
                this.alert_info.push('請確認密碼');
                allFormOk = false;
            }
            if (this.registerForm.password !== this.registerForm.check_psw) {
                this.alert_info.push('密碼不相符，請再次確認填寫密碼');
                allFormOk = false;
            }

            if (!this.registerForm.read) {
                this.alert_info.push('註冊須知未勾選');
                allFormOk = false;
            }

            if (this.alert_info.length > 0) {
                alert(`請填寫以下欄位: \n*${this.alert_info.join('\n*')}`);
            }
            // return allFormOk;
            console.log(this.memberData);
        },
        clearAndSaveMember() {
            //檢查所有輸入
            if (!this.checkAllInput) {
                //如果表單尚未填寫完畢,就不執行後續操作
                return;
            }
            //執行保存"訂單"到資料庫
            this.saveMemberToDb();

        },
        saveMemberToDb() {

            const memberData = new FormData();
            memberData.append('member_name', this.registerForm.member_name);
            memberData.append('member_birthday', this.registerForm.birthday);
            memberData.append('member_email', this.registerForm.email);
            memberData.append('member_cellphone', this.registerForm.cellphone);
            memberData.append('member_id', this.registerForm.id_number);
            memberData.append('member_psw', this.registerForm.password);

            axios({
                method: "post",
                url: `${import.meta.env.VITE_PHP_URL}` + "/front_memberSignUp.php",
                data: memberData,
            }).then(res => {
                console.log('insert data:', res.data.msg);
                alert(res.data.msg);
                if (res.data.error == false) {
                    this.loginForm.email = this.registerForm.email
                    this.loginForm.psw = this.registerForm.password
                    this.memberLogin();
                }
            }).catch(error => {
                console.error('Error fetching data:', error);
            });
        },


    },
    created() {
        // const user = this.checkLogin()
        // addlistener();
        this.$store = useAuthStore();
    },
    mounted() {
        document.title = '會員登入/註冊';
        addlistener();
        document.documentElement.style.setProperty('--body-width', this.bodyWidth);
        // 监听窗口大小改变事件
        window.addEventListener('resize', this.resizebody);
    },
    beforeDestroy() {
        // 在组件销毁前移除事件监听器，以防止内存泄漏
        window.removeEventListener('resize', this.resizebody);
    }

}


</script>
<style scoped></style>




