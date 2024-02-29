<template>
    <div class="product-pay-wrap">
        <div class="pay-wrap">
            <!-- 1.購物車內容 -->
            <div class="pay-title">
                <div class="pay-title-group">
                    <div class="title-num">1</div>
                    <span>購物車內容</span>
                </div>
                <p>單位 Unit：新台幣 NTD</p>
            </div>
            <div class="pay-bar">
                <p>商品明細</p>
                <p>單價</p>
                <p>數量</p>
                <p>小計</p>
            </div>
            <div v-for="(item, index) in cartList " class="pay-info" :key="item.product_no">
                <div class="pay-product">
                    <div class="pay-pic">
                        <img :src="getpicurl(item.product_pic1)" alt="">
                    </div>
                    <span>{{ item.product_name }}</span>
                </div>
                <div class="pay-price"><span>${{ item.price }}</span></div>
                <div id="num">
                    <button @click="changeqty($event, item.product_no, -1)"> -</button>
                    <div>{{ item.qty }}</div>
                    <button @click="changeqty($event, item.product_no, 1)"> +</button>
                </div>
                <div class="pay-delete">
                    <span>${{ item.qty * item.price }}</span>
                    <div @click=" changeqty($event, item.product_no, -(item.qty))" class="trash-can"><img
                            src="/image/product/trash.svg" alt="">
                    </div>
                </div>
            </div>
            <!-- -------------------------------------------------------------------------------->
            <hr>
            <div class="pay-detail">
                <span>訂單金額</span>
                <span>$ {{ cart_total[0].total }}</span>
            </div>
            <div class="pay-detail">
                <span>運費</span>
                <span>+$60</span>
            </div>
            <div class="pay-detail">
                <span>(持有點數：{{ this.memberData.point }}點)</span>
                <span>點數折抵</span>
                <span>-${{ this.memberData.point }}</span>
                <!-- <span>-$10</span> -->
            </div>
            <hr>
            <div class="pay-detail">
                <span>購物車合計<span style="color:#FF892E ;">&nbsp;{{ cart_total[0].listcount }}&nbsp;</span>項商品</span>
                <span>應付總額</span>
                <span class="final-num">${{ cart_total[0].total + 60 - 10 }}</span>
            </div>
            <!-- 2.會員資料 -->
            <div class="pay-title">
                <div class="pay-title-group">
                    <div class="title-num">2</div>
                    <span>會員資料</span>
                </div>
            </div>
            <div class="mem-info">
                <div class="mem-input">
                    <label for="">會員名稱</label>
                    <input type="text" v-model="memberData.name" disabled>
                </div>
                <div class="mem-input">
                    <label for="">會員電話</label>
                    <input type="text" v-model="memberData.phone" disabled>
                </div>
                <div class="mem-input">
                    <label for="">會員信箱</label>
                    <input type="text" v-model="memberData.email" disabled>
                </div>
                <div class="mem-input">
                    <label for="">會員地址</label>
                    <input type="text" v-model="memberData.address" disabled>
                </div>
            </div>
            <!-- 3.收件人資料 -->
            <div class="pay-title">
                <div class="pay-title-group">
                    <div class="title-num">3</div>
                    <span>收件人資料</span>
                    <input type="checkbox" name="member-info" id="same-as-mem" v-model="isSameAsMember">
                    <label for="same-as-mem">同會員資料</label>
                </div>
            </div>
            <div class="mem-info">
                <div class="mem-input">
                    <label for="">收件人姓名</label>
                    <input type="text" placeholder="請輸入收件人姓名" v-model="orderData.receiver_name" @blur="checkReceiver_name">
                    <div v-if="!isnameOk" class="error-message">姓名格式錯誤</div>
                </div>
                <div class="mem-input">
                    <label for="">收件人聯絡電話</label>
                    <input type="text" placeholder="請輸入購買人聯絡電話" v-model="orderData.receiver_phone"
                        @blur="checkReceiver_phone">
                    <div v-if="!isPhoneOk" class="error-message">手機號碼格式錯誤</div>
                </div>
            </div>
            <!-- 4.運送方式 -->
            <div class="pay-title">
                <div class="pay-title-group">
                    <div class="title-num">4</div>
                    <span>運送方式</span>
                </div>
            </div>
            <div class="shipping-box-group">
                <div class="shipping-box-wrap">
                    <div class="box">
                        <label for="pay-deliver" class="shipping-box">
                            <input type="radio" name="shiping" id="pay-deliver" value="宅配" v-model="orderData.shipping"
                                class="pay-deliver">
                            &nbsp;&nbsp;宅配
                        </label>
                        <label for="pay-family" class="shipping-box">
                            <input type="radio" name="shiping" id="pay-family" value="全家" v-model="orderData.shipping"
                                class="pay-deliver">
                            &nbsp;&nbsp;全家(緯育門市)
                            <span class="waiyu">桃園市中壢區復興路46號</span>
                        </label>
                    </div>
                    <div class="box">
                        <label for="pay-seven" class="shipping-box">
                            <input type="radio" name="shiping" id="pay-seven" value="7-11" v-model="orderData.shipping"
                                class="pay-deliver">
                            &nbsp;&nbsp;7-11 (緯育門市)<span>桃園市中壢區復興路46號</span>
                        </label>
                        <label for="pay-hi-life" class="shipping-box">
                            <input type="radio" name="shiping" id="pay-hi-life" value="萊爾富" v-model="orderData.shipping"
                                class="pay-deliver">
                            &nbsp;&nbsp;萊爾富(緯育門市)<span>桃園市中壢區復興路46號</span>
                        </label>
                    </div>
                </div>
            </div>



            <div class="receive-address" v-if="orderData.shipping === '宅配'">
                <label for="">收件人地址(如果是超商取貨則免填)</label>
                <input type="text" placeholder="收件人地址" v-model="orderData.receiver_address" @blur="checkReceiver_address">
                <div v-if="!isAddressOk" class="error-message">收件人地址格式錯誤</div>
            </div>
            <!-- 5.付款方式 -->
            <div class="pay-title">
                <div class="pay-title-group">
                    <div class="title-num">5</div>
                    <span>付款方式</span>
                </div>
            </div>
            <div class="shipping-box-group">
                <div class="shipping-box-wrap">
                    <div class="box">
                        <label for="pay-credit" class="shipping-box">
                            <input type="radio" name="payment" id="pay-credit" value="信用卡"
                                v-model="orderData.payment_method" class="pay-deliver">
                            &nbsp;&nbsp;信用卡
                        </label>
                    </div>
                    <div class="box">
                        <label for="pay-ATM" class="shipping-box">
                            <input type="radio" name="payment" id="pay-ATM" value="虛擬ATM" v-model="orderData.payment_method"
                                class="pay-deliver">
                            &nbsp;&nbsp;虛擬ATM
                        </label>
                    </div>
                </div>
            </div>
            <div class="pay-checkbox-group">
                <div class="pay-checkbox">
                    <input type="checkbox" name="agree-check" id="pay-order-right" v-model="AgreeAll">
                    <label for="pay-order-right">&nbsp;&nbsp;為保障彼此之權益，賣家在收到您的訂單後仍保有是否接受訂單及出貨與否之權利</label>
                </div>
            </div>
            <button class="pay-btn-now" @click="clearAndSavePro">立即結帳</button>
        </div>
        <Background_green :height="50" />
    </div>
</template>

<script>
import axios from 'axios';
import { show_product, changeqty } from '@/stores/cart.js';
import PayButton from '@/components/button/PayButton.vue';
import Background_green from "@/components/Background_green.vue";
export default {
    components: {

    },

    data() {
        return {

            cartList: [],//存購物車資料的陣列
            qty: 1,//初始數量
            cart_total: [],//存總價格跟總項目陣列
            alert_info: [],//拿來做檢查的陣列

            //把要送去"訂單"資料庫存的物件用v-model放在orderInfo
            orderData: {
                // member_no: '',//?
                receiver_name: '',
                receiver_phone: '',
                shipping: '',
                receiver_address: '',
                payment_method: '',

            },

            //會員資料
            memberData: {
                name: '',
                phone: '',
                email: '',
                address: '',
                point: ''

            },

            //同會員資料
            isSameAsMember: false,

            // 聯絡資訊變數
            receiver_name: '',
            receiver_phone: '',
            receiver_address: '',
            isnameOk: true,
            isPhoneOk: true,
            isAddressOk: true,

            //儲存一個警告資訊的陣列
            alert_info: [],

            // 判斷商店服務須知checkbox
            AgreeAll: false,

            pk: '',
        }
    },
    watch: {
        isSameAsMember(newVal) {
            if (newVal) {
                // 當點checkbox的時候,從memberData複製數據到orderData
                this.orderData.receiver_name = this.memberData.name;
                this.orderData.receiver_phone = this.memberData.phone;
            } else {
                // 取消點選時,改成空字串
                this.orderData.receiver_name = '';
                this.orderData.receiver_phone = '';
            }
        },
        'orderData.shipping'(newVal) {

            // 檢查運送方式，如果不是宅配，則自動填入特定地址
            const nonDeliveryAddress = ['全家', '7-11', '萊爾富']; // 定義非宅配選項

            //include()用法:檢查陣列中是否ㄅㄠ檢查陣列中是否包含次陣列
            if (nonDeliveryAddress.includes(newVal)) {

                // 如果選擇了非宅配運送方式，自動填入預設地址
                this.orderData.receiver_address = '桃園市中壢區復興路46號';

            } else if (newVal === '宅配') {
                // 如果用戶切換回宅配，則清空地址欄位
                this.orderData.receiver_address = '';
            }
        }

    },
    components: {
        PayButton,
        Background_green
    },
    created() {
        this.getMemberData();
        [this.cartList, this.cart_total] = show_product();
        window.addEventListener('storage', this.changecartshow);
    },
    methods: {
        changeqty,
        show_product,
        changecartshow(event) {
            if (event.key == 'cart') {
                [this.cartList, this.cart_total] = show_product();

            }
        },

        //取得圖片路徑
        getpicurl(picname) {
            if (picname) {
                var url = `${import.meta.env.VITE_IMG_URL}/product/product_data/` + picname;
            } else {
                url = `${import.meta.env.VITE_IMG_URL}/product/errorpic.png`;
            }
            return url;
        },
        getpicurl(picname) {
            if (picname) {
                var url = `${import.meta.env.VITE_IMG_URL}/product/product_data/` + picname;
            }
            else {
                url = `${import.meta.env.VITE_IMG_URL}/product/errorpic.png`;
            }
            return url;
        },


        //全部功能:清空購物車並將資料儲存到資料庫
        clearAndSavePro() {
            //檢查所有輸入
            if (!this.checkAllInput()) {
                //如果表單尚未填寫完畢,就不執行後續操作
                return;
            }

            //執行保存"訂單"到資料庫
            this.saveOrderToDb();

            // //將頁面跳轉至產品頁
            window.location.href = "/Product";

        },

        //清除購物車相關資料
        clearAllPro() {
            // 清除 localStorage 中的購物車相關資料
            localStorage.setItem('cart', JSON.stringify([]));

            //將購物車相關資料重設為空陣列
            this.cartList = [];

            //將總total歸零
            this.cart_total[0].total = 0;

            //將項目數輛歸零
            this.cart_total[0].listcount = 0;

        },


        //將獲取的資料存入"訂單"的資料庫
        saveOrderToDb() {

            const final_price = this.cart_total[0].total + 60 - 10;
            // 整包需要的資料
            const insertOrderData = {
                ...this.orderData,//寫...等於orderData裡面所有東西
                final_price,
            }
            console.log(insertOrderData);

            //因為從表單獲取時是字串 必須全部換回int欄位(因為php有規定他是int這邊才要做)
            this.orderData.receiver_phone = parseInt(this.orderData.receiver_phone);

            //把整包東西傳去資料庫
            axios.post(`${import.meta.env.VITE_PHP_URL}` + "/front_productOrderInsert.php", insertOrderData)
                .then(res => {
                    //請求成功的處理
                    // alert('您的訂單已送出');

                    // 然後將pk加到cartList裡面
                    console.log(this.cartList);
                    this.cartList = this.cartList.map(item => {
                        // 將每個元素都加上pk
                        return { ...item, orders_no: res.data.PK };
                    });
                    console.log(this.cartList);
                    this.saveOrderItemToDb();//要執行完商品訂單,才能執行存取訂單細項!
                })
                .catch(error => {
                    console.log(error);
                });
        },

        //將獲取的資料存入"訂單細項!"的資料庫
        saveOrderItemToDb() {
            console.log(this.cartList);
            //把整包東西傳去資料庫

            axios.post(`${import.meta.env.VITE_PHP_URL}` + "/front_productOrderItemInsert.php", this.cartList)
                .then(res => {
                    //請求成功的處理
                    alert('您的訂單已送出')
                    this.clearAllPro();
                })
                .catch(error => {
                    console.log(error);
                });
        },


        //檢查:收件人姓名
        checkReceiver_name() {
            const name = this.orderData.receiver_name.trim();
            //檢查是否為空
            if (name === '') {
                this.isnameOk = false; // 顯示錯誤資訊

            } else {
                //正則表達式:驗證姓名是否包含字母和空格,不包含數字和特定符號
                let namePattern = /^[^\d"';<>!@#$%^&*()_+=\[\]{}\\|~`0-9]+$/;

                //test()一個檢查正則表達式的方法,會回傳true 或是false
                this.isnameOk = namePattern.test(name);
            }
        },
        //檢查:收件人電話
        checkReceiver_phone() {
            const phone = this.orderData.receiver_phone.trim();
            if (phone === '') {
                this.isPhoneOk = false; // 顯示錯誤資訊

            } else {
                //正則表達式:驗證手機號碼是否符合特定格式
                let phonePattern = /^(09)[0-9]{8}$/;

                //test()一個檢查正則表達式的方法,會回傳true 或是false
                this.isPhoneOk = phonePattern.test(phone);
            }
        },
        //檢查:if是宅配,地址要驗證
        checkReceiver_address() {
            console.log('check');
            const address = this.orderData.receiver_address.trim();

            //正則表達式:允許字母,數字,空格,及一些特殊符號
            let addressPattern = /^(?<city>\D+?[縣市])(?<district>\D+?[區鎮市])(?<road>\D+?路)(?<number>\d+號)$/;

            // 如果地址為空字串或格式不正確，就顯示錯誤資訊
            if (address === '' || !addressPattern.test(address)) {
                this.isAddressOk = false; // 顯示錯誤資訊

            } else {
                this.isAddressOk = true;
            }
        },
        //檢查全部輸入框,並alert警告
        checkAllInput() {
            this.alert_info = [];
            //給一個布林值,表示表單是否填寫完畢,方便在上方功能取用
            let allFormOk = true;

            //收件人姓名
            if (!this.orderData.receiver_name) {
                this.alert_info.push('請填寫收件人姓名');
                allFormOk = false; //表單不完整,將布林值改為false
            }

            //收件人電話不為空值
            if (!this.orderData.receiver_name || !this.orderData.receiver_phone) {
                this.alert_info.push('請填寫收件人電話');
                allFormOk = false; //表單不完整,將布林值改為false
            }


            //檢查是否有選擇除了宅配的運送方式
            if (!this.orderData.shipping) {
                this.alert_info.push('請填寫運送方式');
                allFormOk = false; //表單不完整,將布林值改為false
            }

            //檢查假如是宅配,有沒有寫地址
            if (this.orderData.shipping === '宅配' && !this.orderData.receiver_address.trim()) {
                this.alert_info.push('請填寫收件人地址');
                allFormOk = false; //表單不完整,將布林值改為false
            }

            //檢查是否有選擇付款方式
            if (!this.orderData.payment_method) {
                //沒有就跳出警告
                this.alert_info.push('請選擇支付方式');
                allFormOk = false; //表單不完整,將布林值改為false
            }

            //同意都要勾選
            if (!this.AgreeAll) {
                this.alert_info.push('請閱讀商店服務須知並勾選同意');
                allFormOk = false; //表單不完整,將布林值改為false
            }

            if (this.alert_info.length > 0) {
                alert(`請填寫以下欄位: \n*${this.alert_info.join('\n*')}`);
            }

            return allFormOk;
        },
        //發送請求去後端,獲取member的資料
        getMemberData() {
            //發出請求道後端
            axios.post(`${import.meta.env.VITE_PHP_URL}` + "/front_getMemberData.php",
                {
                    member_no: 1
                })
                .then(res => {
                    //獲取會員資訊
                    const memberData = res.data;
                    // console.log(memberData);
                    // console.log(memberData.member[0].member_name);

                    //把會員姓名帶入上面表格
                    this.memberData.name = memberData.member[0].member_name
                    this.memberData.phone = memberData.member[0].cellphone
                    this.memberData.email = memberData.member[0].email
                    this.memberData.address = memberData.member[0].address
                    this.memberData.point = memberData.member[0].point

                })
                .catch(error => {
                    console.log(error);
                });
        }

    },

    mounted() {
        [this.cartList, this.cart_total] = show_product();
    },
    destroyed() {
        window.removeEventListener('storage', this.changecartshow);
    },
}

</script>

<style></style>

