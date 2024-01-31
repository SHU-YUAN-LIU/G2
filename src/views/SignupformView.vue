<template>
    <div class="register_s">
        <form action="" id="registerform" class="signup_form">
            <h1>會員註冊</h1>
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
                    <input type="text" name="ide" id="ide" placeholder="請輸入您的身分證" minlength="10">
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
                <button class="btn">送出 ➜</button>
            </form>
    </div>
</template>
<script></script>
<style>
</style>