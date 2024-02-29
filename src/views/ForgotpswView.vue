<template>
    <div class="forgot_wrap">
        <form action="" class="forgot_form">
            <h1>忘記密碼?</h1>
            <div class="forgot_email">
                <p>電子信箱<span>*</span></p>
                <input type="email" placeholder="請輸入您的電子信箱">
            </div>
            <div class="forgot_code">
                <p>請輸入驗證碼 (4碼數字)<span>*</span></p>
                <div class="valification">
                    <div>
                        <input type="text" placeholder="請輸入驗證碼" class="input_code" v-model="userInput">
                        <p class="mark">若未收到驗證碼，請點選重新發送</p>
                    </div>
                    <div class="vali_code">
                        <div class="captcha"><img src="/image/login/code.png"></div>
                        <!-- <div class="captcha"><img :src="captchaImage" alt="captcha" @click="refreshCaptcha"></div> -->
                        <button type="button" @click="refreshCaptcha">重新發送</button>
                    </div>
                </div>
            </div>
            <button class="btn" @click="submit">確認 ➜</button>
            <a href="/newpsw">新密碼</a>
        </form>
    </div>

</template>
<script>
export default {
    data() {
        return {
            captchaImage: '',
            realCaptcha: '',
            userInput: ''
        };
    },
    mounted() {
        // this.refreshCaptcha();
    },
    methods: {
    //     refreshCaptcha() {
    //     // 向後端請求生成驗證碼
    //     fetch('')
    //     .then(response => response.json())
    //     .then(data => {
    //         this.realCaptcha = data.captcha;
    //         this.captchaImage = `data:image/svg+xml;utf8,${encodeURIComponent(data.captcha)}`;
    //     })
    // },
    // submit() {
    //     // 在這裡向後端發送用戶輸入的驗證碼以及真實的驗證碼進行比對
    //     if (this.userInput === this.realCaptcha) {
    //         this.$router.push('/newpsw');
    //     } else {
    //         alert('驗證碼錯誤！');
    //         // 驗證碼錯誤時，可以刷新驗證碼
    //         this.refreshCaptcha();
    //     }
    // },
    }
};
</script>
<style>
</style>