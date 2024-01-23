<template>
    <div class="donate_confirm">
        <!-- banner -->
        <div class="donate_confirm_banner">
            <img src="../assets/image/donate/bg_banner.png" alt="">
            <h1>確認資料</h1>
        </div>
        <!-- 麵包屑 -->
        <breadCrumbs />
        <!-- 捐款確認資料 -->
        <div>
            <h3>捐款資料確認</h3>
            <ul>
                <li>請款資料填寫:我要實名捐款</li>
                <li>真實姓名:王曉明</li>
                <li>身份證字號: H123456789</li>
                <li>出生年月日:1904 年 3 月 5 日</li>
                <li>行動電話: 0912345678</li>
                <li>市內電話:</li>
                <li>電子郵件:</li>
                <li>通訊地址:宜蘭縣壯圍鄉中央路24號</li>
                <li>捐款單位:中央黨部</li>
                <li>捐款方式:信用卡</li>
                <li>捐款金額:新台幣 100 元</li>
            </ul>
        </div>
    </div>
</template>

<script>
</script>


<style scoped lang="scss">
@import '../assets/scss/style.scss';

.donate_confirm {
    .donate_confirm_banner {
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            width: 100%;
        }

        h1 {
            @include title_1;
            color: $white;
            position: absolute;
            font-weight: inherit;
        }
    }

    h3 {
        @include title_3;
        color: $orange;
    }
}
</style>