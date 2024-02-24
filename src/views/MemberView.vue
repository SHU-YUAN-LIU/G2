<template>
    <div class="member_wrap">
        <div class="member_profile">
            <div class="edit_icon"><img src="/image/login/camara.png" alt=""></div>
        </div>
        <!-- 電腦版選單 -->
        <div class="btn_wrap">
            <button class="btn" @click="currentPage = 0" :class="{ focuson: currentPage === 0 }">會員資料</button>
            <button class="btn" @click="currentPage = 1" :class="{ focuson: currentPage === 1 }">我的訂單</button>
            <button class="btn" @click="currentPage = 2" :class="{ focuson: currentPage === 2 }">我的陳情</button>
            <button class="btn" @click="currentPage = 3" :class="{ focuson: currentPage === 3 }">我的捐款</button>
        </div>
        <!-- 手機板選單 -->
        <select v-model="currentPage">
            <option value="0">會員資料</option>
            <option value="1">我的訂單</option>
            <option value="2">我的陳情</option>
            <option value="3">我的捐款</option>
        </select>
        <!-- 表單 -->
        <form class="membercontent" v-show="currentPage == 0">
            <div class="member_name">
                <label for="name">真實姓名： </label>
                <input type="text" id="name">
            </div>
            <div class="member_idno">
                <p>身分證字號： <span class="member_idno_text">H224729803</span></p>
            </div>
            <div class="member_birth">
                <label for="birthday">出生日期：</label>
                <input type="date" id="birthday">
            </div>
            <div class="member_tel">
                <label for="cellphone">行動電話：</label>
                <input type="text" id="cellphone">
            </div>
            <div class="member_phone">
                <label for="phone">市內電話：</label>
                <input type="text" id="phone">
            </div>
            <div class="member_email">
                <label for="email">電子信箱：</label>
                <input type="email" id="email">
            </div>
            <div class="member_addr">
                <label for="address">通訊地址：</label>
                <input type="text" id="address">
            </div>
            <div class="member_point">
                <p>進補點數：<span class="member_point_text">9999點</span></p>
            </div>
            <button class="btn">確認修改 ➜</button>
        </form>
        <div class="membercontent" v-show="currentPage == 1">
            <div class="searchbar">
                <div class="search_icon">
                    <input type="text" class="searchnum" placeholder="請輸入訂單編號">
                    <img src="/image/login/searchicon.svg" alt="">
                </div>
                <div class="orderdatesearch">
                    <input type="date" class="startdate">到
                    <input type="date" class="enddate">
                    <button class="searchbtn">搜尋</button>
                </div>
            </div>
            <div class="contentwrap">
                <div v-for="item in order" class="memberorder">
                    <div class="ordermore">
                        orders
                    </div>
                    <div class="triangle"></div>
                    <div class="orderleft">
                        <div>訂單編號: {{ this.order.orderId }} </div>
                        <div>訂單日期: {{ this.order.orderDate }}</div>
                        <div>運送方式: {{ this.order.shipping }}</div>
                        <div>付款方式: {{ this.order.payment_method }}</div>
                        <div class="orderstatus">
                            訂單狀態: <span>{{ this.order.orderStatus }}</span>
                        </div>

                    </div>
                    <div class="orderleft">
                        <div>收件人姓名: {{ this.order.receiver_name }}</div>
                        <div>收件人電話: {{ this.order.receiver_phone }}</div>
                        <div>收件人地址: {{ this.order.receiver_address }}</div>
                        <div>金額: {{ this.order.final_price }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="membercontent" v-show="currentPage == 2">
            <div class="searchbar">
                <div class="search_icon">
                    <input type="text" class="searchnum" placeholder="請輸入陳情編號">
                    <img src="/image/login/searchicon.svg" alt="">
                </div>
            </div>
            <div class="contentwrap">
                <div v-for="item in petition" class="memberorder">
                    <div class="ordermore">
                        Petitions
                    </div>
                    <div class="triangle"></div>
                    <div class="orderleft">
                        <div>陳情主旨: {{ item.petitionId }}</div>
                        <div>陳情日期: {{ item.petitionDate }}</div>
                        <div class="orderstatus">陳情狀態: <span>{{ item.petitionStatus }}</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="membercontent" v-show="currentPage == 3">
            <div class="searchbar">
                <input type="date" class="startdate">到
                <input type="date" class="enddate">
                <button class="searchbtn">搜尋</button>
                <span class="havepoints">持有進補點數: 999</span>
            </div>
            <div class="contentwrap">
                <div v-for="item in donate" class="memberorder">

                    <div class="orderleft">
                        <div>捐款編號: {{ item.donateId }}</div>
                        <div>捐款日期: {{ item.donateDate }}</div>
                        <div class="orderstatus">捐款方式:{{ item.donateWay }}</div>
                        <div>捐款金額: <span class="donateTotal">${{ item.donateTotal }}</span></div>
                    </div>
                    <div class="orderright"><img src="/image/login/pointlogo.png" alt="">進補點數: <span class="orderTotal">${{
                        item.donateTotal / 100 }}點</span></div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            currentPage: 0,
            order: {
                orderId: '',
                orderDate: '',
                orderStatus: '',
                orderTotal: '',
                receiver_name: '',
                receiver_phone: '',
                receiver_address: '',
                shipping: '',
                payment_method: '',
                final_price: '',
            },
            //陳情寫死
            petition: {
                petition1: {
                    petitionId: '提高公共交通質量，方便民眾出行',
                    petitionDate: '2023/11/11',
                    petitionStatus: '已回覆',
                },
                petition2: {
                    petitionId: '環境保護大家事，政府需更積極',
                    petitionDate: '2023/10/12',
                    petitionStatus: '已回覆',
                },
                petition3: {
                    petitionId: '給教育更多資源，讓下一代更有未來',
                    petitionDate: '2023/10/10',
                    petitionStatus: '已回覆',
                },
                petition4: {
                    petitionId: '改善醫療制度，讓每個人都能得到幫助',
                    petitionDate: '2023/09/22',
                    petitionStatus: '已回覆',
                },

            },
            donate: {
                donateId: 123321,
                donateDate: '2023/11/11',
                donateWay: '現金匯款',
                donateTotal: 2200,

            },
        }
    },
    created() {
        this.getProductOrders();
    },
    methods: {
        logines() {
            const bodyFormData = new FormData();
            bodyFormData.append('email', this.loginForm.email);
            bodyFormData.append('psw', this.loginForm.psw);
            axios({
                method: "post",
                url: `${import.meta.env.VITE_PHP_URL}` + "/front_memberInfo.php",
                data: bodyFormData,
                // headers: { "Content-Type": "multipart/form-data" },
            }).then(res => {
                console.log(res.data); // 打印 data 属性
                if (res.data.error) {
                    // 登錄失敗，顯示錯誤消息
                    alert(res.data.msg); // 或進行本地化處理顯示給用戶
                } else {
                    // 登錄成功，處理 token 和用戶資料
                    localStorage.setItem('userToken', res.data.token);
                    this.$router.push('/');
                }
            }).catch(error => {
                console.log(error);
            })
        },
        //帶入會員商品訂單資料
        getProductOrders() {
            axios.post(`${import.meta.env.VITE_PHP_URL}` + "/front_getOrdersData.php", { orders_no: 1 })
                .then(res => {
                    //取得商品訂單資訊
                    const ordersData = res.data;
                    console.log(ordersData);
                    //把商品帶入上面表格
                    this.order.orderId = ordersData.orders[0].orders_no;
                    this.order.orderDate = ordersData.orders[0].orders_date;
                    this.order.shipping = ordersData.orders[0].shipping;
                    this.order.orderStatus = ordersData.orders[0].status;

                    this.order.payment_method = ordersData.orders[0].payment_method;
                    this.order.receiver_name = ordersData.orders[0].receiver_name;
                    this.order.receiver_phone = ordersData.orders[0].receiver_phone;
                    this.order.receiver_address = ordersData.orders[0].receiver_address;
                    this.order.final_price = ordersData.orders[0].final_price;

                })
                .catch(error => {
                    console.error('您的訂單無法成功送出,請撥打03-0857878', error);
                })
        },
        //帶入會員捐款資料
        // getMemberData() {
        //     axios.post(`${import.meta.env.VITE_PHP_URL}` + "/front_getDonateData.php", { donate_no: 1 })
        //         .then(res => {
        //             //取得捐款訂單資訊
        //             const donateData = res.data;
        //             console.log(donateData);
        //             //把捐款紀錄帶入上面表格
        //             // this.order.orderId = donateData.orders[0].orders_no;


        //         })
        //         .catch(error => {
        //             console.error('您的訂單無法成功送出,請撥打03-0857878', error);
        //         })
        // }

    },

}
</script>
