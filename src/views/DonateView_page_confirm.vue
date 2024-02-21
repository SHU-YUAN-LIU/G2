<template>
    <div class="donate_confirm">
        <!-- banner -->
        <div class="donate_confirm_banner">
            <img src="/image/donate/bg_banner.png" alt="">
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
                        <li>捐款金額:新台幣 <span>{{ donate_amount }}</span> 元</li>
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
                <p>單位 Unit：新台幣 NTD</p>
                <table>
                    <th colspan="2">
                        捐款明細 Merchandise detail
                        小計
                    </th>
                    <tr colspan="2">
                            <td><span>{{ donate_amount }}</span></td>
                            <td><span>{{ donate_amount }}</span></td>
                        </tr>
                        <tr colspan="2">
                            <td colspan="2">實際付款金額 NT$<span>{{ donate_amount }}</span></td>
                        </tr>
                </table>
            </div>
            <!-- 捐款方式 -->
            <div class="donete_payment">
                <h3>捐款方式</h3>
                <p>信用卡交易資訊</p>
                <img src="/image/donate/donate_card_icon.png" alt="信用卡icon">
                <div class="credit_card">
                    <label for="">信用卡卡號<br>Credit card number</label>
                    <div>
                        <input v-for="(input, index) in inputs" :key="index" v-model="input.value" @input="doChange(index)"
                            :maxlength="input.maxLength" placeholder="XXXX" ref="inputs" />
                    </div>
                </div>
                <div>
                    <label for="">卡片有效期限<br>Card valid thru</label>
                    <input type="text" v-model="expiryDate">
                </div>
                <div>
                    <label for="">信用卡安全碼<br>CVV Code</label>
                    <input type="text" v-model="cvvCode">
                </div>
            </div>
        </div>
        <!-- 按鈕 -->
        <div class="donate_confirm_button">
            <button class="donate_confirm_button">←返回上頁 </button>
            <!-- 彈窗 -->
            <button class="donate_confirm_button" @click="donatePayment, checkInputs()">立即付款→</button>
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
            expiryDate: '',
            cvvCode: '',
            inputs: [
                { value: '', maxLength: 4 },
                { value: '', maxLength: 4 },
                { value: '', maxLength: 4 },
                { value: '', maxLength: 4 }
            ]
        }
    },
    created() {

    },
    methods: {
        // 輸入信用卡卡號時，自動跳下一個輸入格
        doChange(index) {
            if (this.inputs[index].value.length === this.inputs[index].maxLength) {
                if (index < this.inputs.length - 1) {
                    this.$refs.inputs[index + 1].focus();
                }
            }
        },
        // 檢查輸入框是否填寫
        checkInputs() {
            let emptyFields = [];

            // 檢查信用卡卡號輸入框
            for (let i = 0; i < this.inputs.length; i++) {
                if (!this.inputs[i].value.trim()) {
                    emptyFields.push(`信用卡卡號 - 第${i + 1}個欄位`);
                }
            }

            // 檢查卡片有效期限輸入框+資料格式
            if (!/^\d{2}\/\d{2}$/.test(this.expiryDate.trim())) {
                emptyFields.push('卡片有效期限');
            }

            // 檢查信用卡安全碼輸入框 + 資料格式
            if (!/^\d{3}$/.test(this.cvvCode.trim())) {
                emptyFields.push('信用卡安全碼');
            }

            // 判斷是否有未填寫得輸入框，都有填寫的話才會跳出燈箱
            if (emptyFields.length > 0) {
                alert(`請填寫以下輸入欄位: \n*${emptyFields.join('\n*')}`);
            } else {
                this.$refs.DonateConfirmLightBox.showLightbox = true;
                document.body.style.overflow = "hidden";
            }
        }
    },
    mounted() {
        this.donate_num = localStorage.getItem('donate_num');
    },
    computed:{
        donate_amount() {
            if(localStorage.getItem('donateAmount')){
                let amount = localStorage.getItem('donateAmount');
                return amount;
            };

        },
    },
}
</script>


