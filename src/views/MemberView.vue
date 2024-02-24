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
                <input type="text" id="name" value="王陽明" v-model="member.name" disabled>
            </div>
            <div class="member_idno">
                <p>身分證字號： <span class="member_idno_text">H224729803</span></p>
            </div>
            <div class="member_birth">
                <label for="birthday">出生日期：</label>
                <input type="date" id="birthday" value="" v-model="member.birth" disabled>
            </div>
            <div class="member_tel">
                <label for="cellphone">行動電話：</label>
                <input type="text" id="cellphone" value="" v-model="member.cell" disabled>
            </div>
            <div class="member_phone">
                <label for="phone">市內電話：</label>
                <input type="text" id="phone" value="" v-model="member.phone" disabled>
            </div>
            <div class="member_email">
                <label for="email">電子信箱：</label>
                <input type="email" id="email" value="" v-model="member.email" disabled>
            </div>
            <div class="member_addr">
                <label for="address">通訊地址：</label>
                <input type="text" id="address" value="" v-model="member.addr" disabled>
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
                        <div><span>訂單編號: </span>{{ this.order.orderId }} </div>
                        <div><span>訂單日期:</span> {{ this.order.orderDate }}</div>
                        <div><span>運送方式: </span>{{ this.order.shipping }}</div>
                        <div><span>付款方式:</span> {{ this.order.payment_method }}</div>
                        <div class="orderstatus">
                            <span>訂單狀態:{{ this.order.orderStatus }}</span>
                        </div>

                    </div>
                    <div class="orderleft">
                        <div><span>收件人姓名: </span>{{ this.order.receiver_name }}</div>
                        <div><span>收件人電話:</span> {{ this.order.receiver_phone }}</div>
                        <div><span>收件人地址:</span> {{ this.order.receiver_address }}</div>
                        <div style="color:#FF892E;"><span>金額: {{ this.order.final_price }}</span></div>
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
                        <div><span>陳情主旨: </span>{{ item.petitionId }}</div>
                        <div><span>陳情日期: </span>{{ item.petitionDate }}</div>
                        <div class="orderstatus"><span>陳情狀態: {{ item.petitionStatus }}</span></div>
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
                        <div><span>捐款編號: </span>{{ item.donateId }}</div>
                        <div><span>捐款日期: </span>{{ item.donateDate }}</div>
                        <div class="orderstatus">捐款方式:{{ item.donateWay }}</div>
                        <div style="color:#FF892E;"><span class="donateTotal">捐款金額: ${{ item.donateTotal }}</span></div>
                    </div>
                    <div class="orderright">
                        <img src="/image/login/pointlogo.png" alt="">
                        進補點數:
                        <span class="orderTotal">
                            ${{ item.donateTotal / 100 }}點
                        </span>
                    </div>
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
            member: {
                neme: '',
                birth: '',
                cell: '',
                phone: '',
                email: '',
                addr: '',
            },
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
        if (localStorage.getItem('userToken')) {
            this.memberInfo();
        }

        this.getProductOrders();
    },
    methods: {
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
        memberInfo() {
            // 假設在登入時，您已經將用戶資料保存在localStorage中，鍵是'memberData'
            let memberData = localStorage.getItem('member'); 

            // 由於localStorage中保存的是字符串，所以需要將其解析為JSON對象
            memberData = JSON.parse(memberData);
            this.member.name = memberData.member_name;
            this.member.birth = memberData.birthday;
            this.member.cell = memberData.cellphone;
            this.member.phone = memberData.phone;
            this.member.email= memberData.email;
            this.member.addr = memberData.address;
            
        }
    }
}
</script>



























<!-- axios.post(`${import.meta.env.VITE_PHP_URL}/front_memberInfo.php`, {}, { withCredentials: true })
                .then(response => {
                    if (response.data.memberData) {
                        // 如果成功获取到会员信息，则将其填充到对应的输入框中
                        const { member } = response.data.memberData;
                        this.memberName = member.member_name;
                        this.memberBirth = member.birthday;
                        this.memberCell = member.cellphone;
                        this.memberPhone = member.phone;
                        this.memberEmail = member.email;
                        this.memberAddr = member.address;
                    }
                })
                .catch(error => {
                    console.error(error);
                }); -->