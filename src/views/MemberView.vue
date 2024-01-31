<template>
    <div class="member_wrap">
        <div class="member_profile">
            <div class="edit_icon"><img src="../assets/image/login/camara.png" alt=""></div>
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
                    <img src="../assets/image/login/searchicon.svg" alt="">
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
                        More
                    </div>
                    <div class="triangle"></div>
                    <div class="orderleft">
                        <div>訂單編號: {{ item.orderId }}</div>
                        <div>訂單日期: {{ item.orderDate }}</div>
                        <div class="orderstatus">訂單狀態: <span>{{ item.orderStatus }}</span></div>
                    </div>
                    <div class="orderright">金額: <span class="orderTotal">${{ item.orderTotal }}</span></div>
                </div>
            </div>
        </div>
        <div class="membercontent" v-show="currentPage == 2">
            <div class="searchbar">
                <div class="search_icon">
                    <input type="text" class="searchnum" placeholder="請輸入陳情編號">
                    <img src="../assets/image/login/searchicon.svg" alt="">
                </div>
            </div>
            <div class="contentwrap">
                <div v-for="item in petition" class="memberorder">
                    <div class="ordermore">
                        More
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
                    <div class="orderright"><img src="../assets/image/login/pointlogo.png" alt="">進補點數: <span
                            class="orderTotal">${{ item.donateTotal / 100 }}點</span></div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            currentPage: 0,
            order: {
                order1: {
                    orderId: 123321,
                    orderDate: '2023/11/11',
                    orderStatus: '已完成',
                    orderTotal: 1000,
                },
                order2: {
                    orderId: 123761,
                    orderDate: '2023/10/12',
                    orderStatus: '已完成',
                    orderTotal: 500,
                },
                order3: {
                    orderId: 136356,
                    orderDate: '2023/10/10',
                    orderStatus: '已完成',
                    orderTotal: 12000,
                },
                order4: {
                    orderId: 749239,
                    orderDate: '2023/09/22',
                    orderStatus: '已完成',
                    orderTotal: 700,
                },
                order5: {
                    orderId: 184923,
                    orderDate: '2023/09/01',
                    orderStatus: '已完成',
                    orderTotal: 1432,
                }
            },
            petition: {
                petition1: {
                    petitionId: 123321,
                    petitionDate: '2023/11/11',
                    petitionStatus: '已回覆',
                },
                petition2: {
                    petitionId: 123761,
                    petitionDate: '2023/10/12',
                    petitionStatus: '已回覆',
                },
                petition3: {
                    petitionId: 136356,
                    petitionDate: '2023/10/10',
                    petitionStatus: '已回覆',
                },
                petition4: {
                    petitionId: 749239,
                    petitionDate: '2023/09/22',
                    petitionStatus: '已回覆',
                },
                petition5: {
                    petitionId: 184923,
                    petitionDate: '2023/09/01',
                    petitionStatus: '已回覆',
                }
            },
            donate: {
                donate1: {
                    donateId: 123321,
                    donateDate: '2023/11/11',
                    donateWay: '現金匯款',
                    donateTotal: 2200,
                },
                donate2: {
                    donateId: 123761,
                    donateDate: '2023/10/12',
                    donateWay: '現金匯款',
                    donateTotal: 1200,
                },
                donate3: {
                    donateId: 136356,
                    donateDate: '2023/10/10',
                    donateWay: '現金匯款',
                    donateTotal: 3200,
                },
                donate4: {
                    donateId: 749239,
                    donateDate: '2023/09/22',
                    donateWay: '現金匯款',
                    donateTotal: 4000,
                },
                donate5: {
                    donateId: 184923,
                    donateDate: '2023/09/01',
                    donateWay: '現金匯款',
                    donateTotal: 5200,
                }
            }
        }
    },
    methods: {

    },

}
</script>
