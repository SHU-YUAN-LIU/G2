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
        <div class="donate_container">
            <div v-if="donate_num == 2">
                <h3>捐款資料確認</h3>
                <div class="content">
                    <ul>
                        <li>請款資料填寫:我要實名捐款</li>
                        <li>真實姓名:王曉明</li>
                        <li>身份證字號: H123456789</li>
                        <li>出生年月日:1954 年 3 月 5 日</li>
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
            <!-- 捐款資訊 -->
            <h3>捐款資訊</h3>
            <div class="donate_info_table">
                <table>
                    <tr>
                        <td>
                            捐款編號
                            Order number
                        </td>
                        <td>DO20231228000010</td>
                    </tr>
                    <tr>
                        <td>
                            帳戶名稱
                            Merchant'name
                        </td>
                        <td>青年進補黨政治獻金專戶</td>
                    </tr>
                </table>
            </div>
            <!-- 捐款明細 -->
            <div class="donate_detail_table">
                <table>
                    <p>單位 Unit：新台幣 NTD</p>
                    <th colspan="2">
                        捐款明細 Merchandise detail
                        小計
                        <tr colspan="2">
                            <td>100</td>
                            <td>100</td>
                        </tr>
                        <tr colspan="2">
                            <td colspan="2">實際付款金額 NT$100</td>
                        </tr>
                    </th>
                </table>
            </div>
            <!-- 捐款方式 -->
            <div class="donete_payment">
                <h3>捐款方式</h3>
                <p>信用卡交易資訊</p>
                <img src="../assets/image/donate/donate_card_icon.png" alt="信用卡icon">
                <div class="credit_card">
                    <label for="">信用卡卡號<br>Credit card number</label>
                    <div>
                        <input type="text">
                        <input type="text">
                        <input type="text">
                        <input type="text">
                    </div>
                    
                </div>
                <div>
                    <label for="">卡片有效期限<br>Card valid thru</label>
                    <input type="text">
                </div>
                <div>
                    <label for="">信用卡安全碼<br>CVV Code</label>
                    <input type="text">
                </div>
                <div>
                    <label>※ 持卡人資料 </label>
                    <input type="checkbox">
                    <span>記住本次付款人資訊</span>
                </div>
                <div>
                    <label for="">持卡人姓名<br>Cardholder name</label>
                    <input type="text">
                </div>
                <div>
                    <label for="">手機號碼<br>Mobile Number</label>
                    <input type="text">
                </div>
                <div>
                    <label for="">電子信箱<br>Email address</label>
                    <input type="text">
                </div>
                <div>
                    <label for="">帳單地址<br>Billing address</label>
                    <input type="text">
                </div>
            </div>
        </div>
        <!-- 按鈕 -->
        <div class="donate_confirm_button">
            <RouterLink to="/donate/page">
                <button class="donate_confirm_button">←返回上頁 </button>
            </RouterLink>
            <!-- 彈窗 -->
            <button class="donate_confirm_button" @click="donatePayment">立即付款→</button>
            <DonateConfirmLightBox ref="DonateConfirmLightBox" />
        </div>
    </div>
</template>

<script>
import commitButton from '../components/button/commitButton.vue'
import breadCrumbs from '../components/Bread.vue';
import DonateConfirmLightBox from '../components/DonateConfirmLightBox.vue';


export default {
    components: {
        commitButton,
        breadCrumbs,
        DonateConfirmLightBox,
    },
    data() {
        return {
            donate_num: 0,
        }
    },
    created() {

    },
    methods: {
        donatePayment() {
            this.$refs.DonateConfirmLightBox.showLightbox = true;
            document.body.style.overflow="hidden";
        }

    },
    mounted() {
        this.donate_num = localStorage.getItem('donate_num');
    },
}
</script>


<style scoped lang="scss">
@import '../assets/scss/style.scss';

.donate_confirm {

    // banner
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
        }
    }

    // 捐款確認資料
    .donate_container {
        max-width: 1200px;
        margin: auto;

        // 捐款確認資料的標題
        h3 {
            @include title_3;
            color: $orange;
            text-align: center;
            margin: 135px 0 35px 0;
        }

        // 捐款確認資料的內容
        .content {
            border: 2px solid $orange;
            border-radius: $border-radius-1;
            padding: 30px;

            li {
                padding: 10px;

                +li {
                    border-top: 1px solid black;
                }
            }
        }

        // 捐款資訊
        .donate_info_table {
            border-radius: $border-radius-1;
            overflow: hidden;
            border: 1px solid $gray_3;

            table {
                border: none;
                width: 100%;

                tr {
                    height: 50px;
                    padding: 0;
                }

                tr+tr {
                    border-top: 1px solid $gray_3;
                }

                td:first-child {
                    text-align: center;
                    background-color: $orange;
                    color: aliceblue;
                    letter-spacing: 2px;
                    width: 390px;
                }

                td:last-child {
                    padding-left: 20px;
                    line-height: 50px;
                }
            }
        }

        // 捐款明細
        .donate_detail_table {

            p {
                margin: 30px 0 20px 0;
                text-align: right;
                @include title_10;
            }


            table {
                width: 100%;

                th {
                    @include title_9;
                    background-color: $orange;
                    color: #fff;
                    height: 50px;
                    line-height: 50px;
                    border-radius: $border-radius-1;
                    letter-spacing: 2px;
                }

                tr:last-child {
                    border-top: 1px solid black;
                }

                td {
                    height: 40px;
                }

                td:last-child {
                    text-align: right;
                    padding-top: 20px;
                }

            }
        }

        // 捐款方式
        .donete_payment {
            display: flex;
            flex-direction: column;

            p {
                background-color: $orange;
                color: #fff;
                @include title_9;
                border-radius: $border-radius-1;
                padding-left: 10px;
                line-height: 50px;
            }

            img {
                margin: 30px 0;
                width: 175px;
                height: 26px;
            }

            div {
                display: flex;

                label {
                    @include title_10;
                    width: 200px;
                }

                input {
                    margin: 0 0 30px 30px;
                    border-radius: $border-radius-1;
                    height: 40px;
                    flex: 1;
                }

                span {
                    line-height: 20px;
                    padding-left: 10px;
                }
            }

            input[type="checkbox"] {
                width: 20px;
                height: 20px;
                flex: initial;
            }

            .credit_card{
                label{
                    width: 200px;
                    margin: 0;
                    padding: 0;
                }
            }
        }
    }

    // 捐款按鈕
    .donate_confirm_button {
        max-width: 1200px;
        margin: auto;
        display: flex;
        justify-content: space-between;

        button {
            @include btn_3;
            margin: 90px 0;
            cursor: pointer;
        }
    }
}


@media(max-width: 768px){
.donate_confirm {
// banner
    .donate_confirm_banner {
        img {
            width: 100%;
        }
        h1 {
            @include title_3;
        }
    }

// 捐款確認資料
    .donate_container {
        max-width: 350px;
        margin: auto;

        // 捐款確認資料的標題

        // 捐款確認資料的內容
        .content {
            padding: 15px;

            li {
                padding: 10px;

                +li {
                    border-top: 1px solid black;
                }
            }
        }
        // 捐款資訊
        .donate_info_table {
            table {
                tr {
                    font-size: 14px;
                }

                td:first-child {
                    letter-spacing: 2px;
                    width: 120px;
                    line-height: 20px;
                }

                td:last-child {
                    padding-left: 10px;
                    line-height: 40px;
                }
            }
        }

        // 捐款明細
        .donate_detail_table {

            table {
                th {
                    @include title_10;
                    letter-spacing: 1px;
                }
            }
        }

        // 捐款方式
        .donete_payment {
            div {
                label {
                    width: 100px;
                }

                input {
                    height: 30px;
                    flex: 1;
                }
            }

            .credit_card{
                label{
                    width: 100px;
                    margin: 0;
                    padding: 0;
                }
                div{
                    display: flex;
                    flex-direction: column;
                    height: 200px;
                    input{
                        margin-bottom: 20px;
                        width: 220px;

                    }
                }
            }
        }
    }

// 捐款按鈕
        .donate_confirm_button {
            max-width: 350px;
            button {
                @include btn_3;
                margin: 60px 0;
                cursor: pointer;
            }
        }
    }
}
</style>
