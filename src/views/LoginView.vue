<template>
    <article class="login_wrap">
        <!-- 
            如果這邊想要寫動畫可以看
            https://www.youtube.com/watch?v=uotY_cx1dvo
            他音樂非常大聲請小心
         -->
        <div class="login">
            <div class="sub_login_container" id="subLogin">
                <p>如果您已經有帳戶，請登入。</p>
                <button class="btn">登入 ➜</button>
            </div>
            <div class="main_login_container" id="mainLogin">
                <div class="profile">
                    <i class="fa-solid fa-user" style="color: #ffffff;"></i>
                </div>
                <form action="">
                    <!-- input不要用v-for直接寫就好了 -->
                    <div class="register_email">
                        <p>電子信箱<span>*</span></p>
                        <input type="email" placeholder="請輸入您的電子信箱">
                    </div>
                    <div class="register_psw">
                        <p>密碼<span>*</span></p>
                        <input type="text" placeholder="請輸入您的密碼">
                    </div>
                    <a href="/test">忘記密碼?</a>
                    <button id="loginBtn" class="btn">登入 ➜</button>
                </form>
            </div>
        </div>
        <div class="register">
            <div class="main_register_container" id="mainRegister">
                <form action="">
                    <!-- input不要用v-for直接寫就好了 -->
                    <div class="register_name">
                        <p>真實姓名<span>*</span></p>
                        <input type="text" placeholder="請輸入您的姓名">
                    </div>
                    <div class="register_birthday">
                        <p>生日<span>*</span></p>
                        <input type="date">
                    </div>
                    <div class="register_email">
                        <p>電子信箱<span>*</span></p>
                        <input type="email" name="" id="" placeholder="請輸入您的電子信箱">
                    </div>
                    <div class="register_phone">
                        <p>手機<span>*</span></p>
                        <input type="text" placeholder="請輸入您的手機號碼" maxlength="10">
                    </div>
                    <div class="register_id">
                        <p>身分證<span>*</span></p>
                        <input type="text" placeholder="請輸入您的身分證" minlength="10" >
                    </div>
                    <div class="register_psw">
                        <p>密碼<span>*</span></p>
                        <input type="text" placeholder="請輸入您的密碼">
                    </div>
                    <div class="register_check_psw">
                        <p>確認密碼<span>*</span></p>
                        <input type="text" placeholder="請再次輸入您的密碼">
                    </div>
                    <div class="register_read">
                        <input type="checkbox" class="box">
                        <p>我已閱讀並瞭解條款和條件以及隱私權政策。</p>
                    </div>
                    <button id="registerBtn" class="btn">立刻前往 ➜</button>
                </form>
            </div>
            <div class="sub_register_container" id="subRegister">
                <div class="login_logo">
                    <img src="@/assets/image/login/Logo.png" alt="">
                </div>
                <button class="btn" id="registerBtn" @click="login = false">註冊 ➜</button>
            </div>
        </div>
    </article>
</template>

    <script>
        export default{
            data() {
                return {
                    registerFormData: {
                        name: '',
                        birthday: '',
                        email: '',
                        phone: '',
                        id: '',
                        password: '',
                        confirmPassword: '',
                        agreementCheckbox: false
                    },
                    
                }
            },
        }
    </script>

<style>
</style>