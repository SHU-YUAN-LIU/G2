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
                        <td>捐款編號 Order number</td>
                        <td>DO20231228000010</td>
                    </tr>
                    <tr>
                        <td>帳戶名稱Merchant'name</td>
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
                <div class="credit card">
                    <label for="">信用卡卡號<br>Credit card number</label>
                    <input type="text">
                    <input type="text">
                    <input type="text">
                    <input type="text">
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
            document.body.style.overflow = "hidden";
        }

    },
    mounted() {
        this.donate_num = localStorage.getItem('donate_num');
    },
}
</script>



