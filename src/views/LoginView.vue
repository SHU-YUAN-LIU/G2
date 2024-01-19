<template>
    <article class="login_wrap">
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
                    <div v-for=" item in loginList" :class="item.className">
                        <p>{{item.label}}<span>*</span></p>
                        <input :type="item.type" :placeholder="item.placeholder">
                    </div>
                </form>
                <button class="btn" id="loginBtn">登入 ➜</button>
            </div>
        </div>
        <div class="register">
            <div class="main_register_container" id="mainRegister">
                <form action="">
                    <div v-for="item in registerList" :class="item.className" :key="item.key">
                        <div v-if="item.type !== 'checkbox'">
                            <p>{{item.label}}<span>*</span></p>
                            <input :type="item.type" :placeholder="item.placeholder" v-model="registerFormData[item.key]">
                        </div>
                        <div v-else :style="{ display: 'flex' }">
                            <input :type="item.type" v-model="registerFormData[item.key]" class="box">
                            <p><span>*</span>{{item.label}}</p>
                        </div>
                    </div>
                    <input type="submit" name="" id="submitBtn" value="立刻前往 ➜" class="btn">
                </form>
            </div>
            <div class="sub_register_container" id="subRegister">
                <div class="login_logo">
                    <img src="../assets/image/login/Logo.png" alt="">
                </div>
                <button class="btn" id="registerBtn">註冊 ➜</button>
            </div>
        </div>
    </article>
</template>

    <script>
        export default{
            data() {
                return {
                    registerList: [
                        { label: '真實姓名', type: 'text', placeholder: '請輸入您的姓名', className: 'register_name', key: 'name' },
                        { label: '生日', type: 'date', className: 'register_birthday', key: 'birthday' },
                        { label: '電子信箱', type: 'email', placeholder: '請輸入您的電子信箱', className: 'register_email', key: 'email' },
                        { label: '手機', type: 'text', placeholder: '請輸入您的手機號碼', maxlength: '10', className: 'register_phone', key: 'phone' },
                        { label: '身分證', type: 'text', placeholder: '請輸入您的身分證', minlength: '10', className: 'register_id', key: 'id' },
                        { label: '密碼', type: 'password', placeholder: '請輸入您的密碼', className: 'register_psw', key: 'password' },
                        { label: '確認密碼', type: 'password', placeholder: '請再次輸入您的密碼', className: 'register_check_psw', key: 'confirmPassword' },
                        { label: '我已閱讀並瞭解條款和條件以及隱私權政策。', type: 'checkbox', className: 'register_read', key: 'agreementCheckbox' }
                    ],
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
                    loginList: [
                        { label: '電子信箱', type: 'email', placeholder: '請輸入您的電子信箱', className: 'register_email', key: 'email' },
                        { label: '密碼', type: 'password', placeholder: '請輸入您的密碼', className: 'register_psw', key: 'password' },
                    ]
                }
            },
        }
    </script>

<style>
</style>