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
                        <li>捐款單位:中央黨部</li>
                        <li>捐款方式:信用卡</li>
                        <li>捐款金額:新台幣 <span>{{ donate_amount }}</span> 元</li>
                    </ul>
                </div>
            </div>
            <!-- 捐款明細 -->
            <h3>捐款明細</h3>
            <div class="donate_detail_table">
                <p>單位 Unit：新台幣 NTD</p>
                <table>
                    <th colspan="2">
                        Merchandise detail
                        小計
                    </th>
                    <tr colspan="2" class="donate_name">
                        <td><span>捐款金額</span></td>
                        <td><span>${{ donate_amount }}</span></td>
                    </tr>
                    <tr colspan="2">
                        <td colspan="2" v-if="donate_num == 2">獲得點數 NT$<span>{{ donate_amount }}</span></td>
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
                        <template v-for="(input, index) in inputs" :key="index">
                            <input v-model="input.value" @input="doChange(index)" :maxlength="input.maxLength"
                                placeholder="XXXX" class="credit-input" ref="inputs" />
                            <!-- 新增破折號 -->
                            <span v-if="index < inputs.length - 1" class="credit_dash">–</span>
                        </template>
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
            <RouterLink to="/donate/page">
                <button class="donate_confirm_button">←返回上頁 </button>
            </RouterLink>
            <!-- 彈窗 -->
            <button class="donate_confirm_button" @click="donatePayment, checkInputs(), submitData()">立即付款→</button>
            <DonateConfirmLightBox ref="DonateConfirmLightBox" />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
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
            let emptyFields = []; //存未填寫的欄位
            let invalidFields = []; // 存無效的資料格式

            // 檢查信用卡卡號輸入框
            for (let i = 0; i < this.inputs.length; i++) {
                if (!this.inputs[i].value.trim()) {
                    emptyFields.push(`信用卡卡號 - 第${i + 1}個欄位`);
                } else if (!/^\d{4}$/.test(this.inputs[i].value.trim())) {
                    invalidFields.push(`第${i + 1}個欄位 - 請輸入有效的數字格式，例如：1234`);
                }
            }

            // 檢查卡片有效期限輸入框+資料格式
            if (!this.expiryDate.trim()) {
                emptyFields.push('卡片有效期限');
            } else if (!/^(0[1-9]|1[0-2])\/(0[1-9]|[1-9][0-9])$/.test(this.expiryDate)) {
                invalidFields.push('請輸入有效的卡片有效期限，例如：MM/YY');
            }

            // 檢查信用卡安全碼輸入框 + 資料格式
            if (!this.cvvCode.trim()) {
                emptyFields.push('信用卡安全碼');
            } else if (!/^\d{3}$/.test(this.cvvCode.trim())) {
                invalidFields.push('請輸入有效的信用卡安全碼，例如：787');
            }

            // 判斷是否有未填寫的輸入框，都有填寫的話才會跳出燈箱
            let message = '';
            if (emptyFields.length > 0) {
                message += `請填寫以下空白的輸入欄位: \n*${emptyFields.join('\n*')}\n\n`;
            }
            if (invalidFields.length > 0) {
                message += `以下輸入欄位格式不正確，請輸入正確格式: \n*${invalidFields.join('\n*')}`;
            }
            if (message !== '') {
                alert(message);
            } else {
                this.$refs.DonateConfirmLightBox.showLightbox = true;
                document.body.style.overflow = "hidden";
            }
        },
        // 將捐款資料存到資料庫
        submitData() {
            const donateformdata = new FormData();
            donateformdata.append('donateAmount', this.donate_amount)
            donateformdata.append('donateClass', this.donate_class)
            donateformdata.append('donatePoint', this.donate_point)
            console.log(this.donate_point);
            // 連結php
            axios({
                method: "post",
                url: `${import.meta.env.VITE_PHP_URL}` + "/front_donate.php",
                data: donateformdata,
            }).then(res => {
                console.log('insert data:', res.data.msg);
            })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });

        },
    },
    mounted() {
        this.donate_num = localStorage.getItem('donate_num');
    },
    computed: {
        donate_amount() {
            if (localStorage.getItem('donateAmount')) {
                let amount = localStorage.getItem('donateAmount');
                return amount;
            };
        },

        donate_class(){
            let msg='';
            if(localStorage.getItem('donate_num')==1){
                msg = '匿名';
            } else if (localStorage.getItem('donate_num')==2){
                msg =  '具名';
            }
            return msg;
        },
        donate_point(){
            let point = localStorage.getItem('donatePoint');
            return point;
        }
    },
}
</script>


