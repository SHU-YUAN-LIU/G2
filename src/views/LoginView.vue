<template>
    <article class="wrap">
        <div class="login">
            <div class="sub_login_container">
                <p>如果您已經有帳戶，請登入。</p>
                <button class="btn">登入 ➜</button>
            </div>
            <div class="main_login_container">
                <div class="profile">
                    <i class="fa-solid fa-user" style="color: #ffffff;"></i>
                </div>
                <div class="register_email">
                    <p>電子信箱<span>*</span></p>
                    <input type="email" name="" id="" placeholder="請輸入您的電子信箱">
                </div>
                <div class="register_psw">
                    <p>密碼<span>*</span></p>
                    <input type="text" placeholder="請輸入您的密碼">
                </div>
            </div>
        </div>
        <div class="register">
            <div class="main_register_container">
                <form action="">
                    <div v-for="item in list" :class="item.className" :key="item.key">
                        <div v-if="item.type !== 'checkbox'">
                            <p>{{item.label}}<span>*</span></p>
                            <input :type="item.type" :placeholder="item.placeholder" v-model="formData[item.key]">
                        </div>
                        <div v-else :style="{ display: 'flex' }">
                            <input :type="item.type" v-model="formData[item.key]" class="box">
                            <p><span>*</span>{{item.label}}</p>
                        </div>
                    </div>
                    <input type="submit" name="" id="registerBtn" value="立刻前往 ➜" class="btn">
                </form>
            </div>
            <div class="sub_register_container">
                <div class="logo">
                    <img src="./img/Logo.png" alt="">
                </div>
                <button class="btn">註冊 ➜</button>
            </div>
        </div>
    </article>
</template>

    <script>
        export default{
            data() {
                return {
                    list: [
                        { label: '真實姓名', type: 'text', placeholder: '請輸入您的姓名', className: 'register_name', key: 'name' },
                        { label: '生日', type: 'date', className: 'register_birthday', key: 'birthday' },
                        { label: '電子信箱', type: 'email', placeholder: '請輸入您的電子信箱', className: 'register_email', key: 'email' },
                        { label: '手機', type: 'text', placeholder: '請輸入您的手機號碼', maxlength: '10', className: 'register_phone', key: 'phone' },
                        { label: '身分證', type: 'text', placeholder: '請輸入您的身分證', minlength: '10', className: 'register_id', key: 'id' },
                        { label: '密碼', type: 'password', placeholder: '請輸入您的密碼', className: 'register_psw', key: 'password' },
                        { label: '確認密碼', type: 'password', placeholder: '請再次輸入您的密碼', className: 'register_check_psw', key: 'confirmPassword' },
                        { label: '我已閱讀並瞭解條款和條件以及隱私權政策。', type: 'checkbox', className: 'register_read', key: 'agreementCheckbox' }
                    ],
                    formData: {
                        name: '',
                        birthday: '',
                        email: '',
                        phone: '',
                        id: '',
                        password: '',
                        confirmPassword: '',
                        agreementCheckbox: false
                    }
                }
            },
        }
    </script>

<style>
.wrap {
    display: flex;
    width: 1200px;
    height: 1000px;
    border: 1px solid #ccc;
    margin: auto;
    justify-content: space-between;
    border-radius: 10px;
}
.login {
    background-color: rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.register form {
    width: 400px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
}
input {
    width: 400px;
    height: 48px; 
    border-radius: 10px;
    padding: 0 10px;
    font-size: 16px;
    box-sizing: border-box;
}
.register {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.register span {
    color: red;
}
.register label {
    display: flex;
    align-items: center;
}
.register_read {
    display: flex;
}
.register_read .box {
    width: 20px;
}
.register_read p {
    padding-left: 10px;
}
.logo {
    padding: 30px 0;
}
.btn {
    background-color: #FF892E;
    color: white;
    border-radius: 50px;
    border: none;
    height: 78px;
    font-size: 24px;
    margin: 30px 0;
    padding: 0 50px;
} 
.profile {
    width: 210px;
    height: 210px;
    border-radius: 50%;
    background-color: #666666;
    margin: auto;
}



.main_login_container {
    width: 720px;
    display: flex;
    flex-direction: column;
    align-items: center;
    display: none;
}

.sub_login_container {
    width: 480px;
    font-size: 55px;
    text-align: center;
    /* display: none; */
}


.main_register_container {
    width: 720px;
    height: 1000px;
    display: flex;
    border-left: 1px solid #ccc;
    /* display: none; */
}


.sub_register_container {
    width: 480px;
    height: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-left: 1px solid #ccc;
    display: none;
}

</style>