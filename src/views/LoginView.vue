<!-- 
    如果這邊想要寫動畫可以看
    https://www.youtube.com/watch?v=uotY_cx1dvo
    他音樂非常大聲請小心
-->
<!-- input不要用v-for直接寫就好了 -->
<template>
    <article>
        <div class="container" :class="{'register-active': registerBtn}">
            <div class="overlay_container">
                <div class="overlay">
                    <div class="overlay_left">
                        <p>如果您已經有帳戶，請登入。</p>
                        <button class="btn" id="loginBtn" @click="registerBtn = !registerBtn">登入 ➜</button>
                    </div>
                    <div class="overlay_right">
                        <div class="sub_register">
                            <div class="login_logo">
                                <img src="@/assets/image/login/Logo.png" alt="">
                            </div>
                            <button class="btn" id="registerBtn" @click="registerBtn = !registerBtn">註冊 ➜</button>
                        </div>
                    </div>
                </div>
            </div>
            <form action="" class="register" id="registerform">
                <div class="register_name">
                    <p>真實姓名<span>*</span><span id="nameerror"></span></p>
                    <input id="name" type="text" placeholder="請輸入您的姓名">
                </div>
                <div class="register_birthday">
                    <p>生日<span>*</span><span id="dateerror"></span></p>
                    <input type="date" id="date">
                </div>
                <div class="register_email">
                    <p>電子信箱<span>*</span><span id="emailerror"></span></p>
                    <input type="email" name="email" id="email" placeholder="請輸入您的電子信箱">
                </div>
                <div class="register_phone">
                    <p>手機<span>*</span><span id="phoneerror"></span></p>
                    <input type="text" name="phone" id="phone" placeholder="請輸入您的手機號碼" maxlength="10">
                </div>
                <div class="register_id">
                    <p>身分證<span>*</span></p>
                    <input type="text" name="ide" id="ide" placeholder="請輸入您的身分證" minlength="10" >
                </div>
                <div class="register_psw">
                    <p>密碼<span>*</span><span id="pswerror"></span></p>
                    <input type="text" name="psw" id="psw" placeholder="請輸入您的密碼">
                </div>
                <div class="register_check_psw">
                    <p>確認密碼<span>*</span></p>
                    <input type="text" name="checkpsw" id="checkpsw" placeholder="請再次輸入您的密碼">
                </div>
                <div class="register_read">
                    <input type="checkbox" class="box">
                    <p>我已閱讀並瞭解條款和條件以及隱私權政策。<span>*</span></p>
                </div>
                <button class="btn">立刻前往 ➜</button>
            </form>
            <form ref="login" action="" class="login" id="loginform">
                <div class="profile">
                    <img src="../assets/image/login/user-solid.svg" alt="">
                </div>
                <div class="register_email">
                    <p>電子信箱<span>*</span><span id="emailerror"></span></p>
                    <input type="email" name="email" id="email" placeholder="請輸入您的電子信箱">
                </div>
                <div class="register_psw">
                    <p>密碼<span>*</span></p>
                    <input type="text" name="psw" id="psw" placeholder="請輸入您的密碼">
                </div>
                <a href="/forgotpsw">忘記密碼?</a>
                <button class="btn" @click="checkmemdata">登入 ➜</button>
            </form>
        </div>
    </article>
</template>
<script>
    import { addlistener } from '@/stores/datacheck.js';
    export default{
                data: () => {
                    return {
                        registerBtn: false,
                        member:{
                            mail:'youth@party',
                            psw:'youthparty',
                        }
                    }
                },
                methods: {
                    addlistener,
                    checkmemdata(event){
                        const mailinput = this.$refs.login.querySelector('#email').value;
                        console.log(mailinput);
                        const pswinput = this.$refs.login.querySelector('#psw').value;
                        console.log(pswinput);
                        if(mailinput==this.member.mail&&pswinput==this.member.psw){
                            alert("success")
                            event.preventDefault();
                            this.$router.push('/news')
                        }else{
                            alert("fail")
                            event.preventDefault();
                        }
                    },
                },
                created(){
                    // const user = this.checkLogin()
                    // addlistener();
                },
                mounted(){
                    addlistener(); 
                }
            }
</script>
<style scoped> 
/* @import "../assets/scss/page/_test.scss" */
</style>