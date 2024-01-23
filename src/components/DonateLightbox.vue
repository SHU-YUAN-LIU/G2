<template>
    <div v-if="showLightbox" class="donate_lightbox">
        <div>
            <button @click="closeLightbox" class="donate_closelightbox"><img src="../assets/image/donate/icon_close.png"
                    alt=""></button>

            <div class="donate_lightbox_content">
                <div class="donate_lightbox_top">
                    <div class="donate_anonymous">
                        <RouterLink to="//donate/anonymous">
                            <h2>匿名捐款</h2>
                            <img src="../assets/image/donate/donate_card1.png" alt="">
                            <p>匿名捐贈：新台幣1萬元以下</p>
                        </RouterLink>
                    </div>
                    <div class="donate_member">
                        <RouterLink to="/donate/page">
                            <h2>會員捐款</h2>
                            <img src="../assets/image/donate/donate_card1.png" alt="">
                        </RouterLink>
                    </div>
                </div>
                <div class="donate_lightbox_bottom">
                    <h3>政治獻金法對捐贈者規定</h3>
                    <p>捐贈者為中華民國籍，滿20歲，具選舉權。(外國籍及陸港澳居民不符)</p>
                    <div>
                        <p>金額上限</p>
                        <ul>
                            <li v-for="limit in amountLimit">{{ limit }}</li>
                        </ul>
                        <p>資格限制(不得捐款)</p>
                        <ul>
                            <li v-for="qual in qualification ">{{ qual }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>    

<script>
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            showLightbox: false,
            amountLimit: [
                '．個人名義：30萬元。',
                '．營利事業(公司)：300萬元。',
                '．人民團體：200萬元。',
                '．匿名捐贈：新台幣1萬元以下。',
            ],
            qualification: [
                '．公營事業或政府持有資本達20%之民營企業。',
                '．與政府機關(構)有巨額採購或重大公共建設投資契約，且在履約期間之廠商。',
                '．有累積虧損尚未依規定彌補之營利事業。',
                '．營利事業(公司)外資持股30%以上，或外國籍擔任董事長或董監事名額1/3以上者。',
                '．財團法人(基金會)､宗教團體'
            ]
        };
    },
    methods: {
        closeLightbox() {
            this.showLightbox = false;
            console.log(this.showLightbox);
        },
    },
    components: { RouterLink }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/base/reset";
@import "../assets/scss/base/font";
@import "../assets/scss/base/color";
@import "../assets/scss/base/border";
.donate_lightbox{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, .5);
    display: flex;
    align-items: center;
    justify-content: center;
    color: $white;
    z-index: 1000;
    overflow-y: scroll;

    div {
        width: 100%;
        max-width: 1200px;
        position: relative;

        button {
            position: absolute;
            top: -35px;
            right: -35px;
            background: none;
            border: none;
            width: 70px;
            height: 70px;
            z-index: 500;
        }
    }

    a {
        color: $white;
    }

    .donate_lightbox_content {
        background: $white;
        border: 3px solid $orange;
        border-radius: $border-radius-1;
        width: 100%;
        height: 600px;
        max-width: 1200px;
        position: relative;
        padding: 50px;
        overflow-y: scroll;

        .donate_lightbox_top {
            display: flex;
            justify-content: center;
            height: 100%;
            align-items: center;

            .donate_anonymous {
                background: $orange;
                margin-right: 50px;
            }

            .donate_member {
                background: $gray-3;
            }

            .donate_anonymous,
            .donate_member {
                border-radius: $border-radius-1;
                width: 500px;
                height: 390px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                h2 {
                    @include title-2;
                    font-weight: inherit;
                }

                img {
                    margin: 30px 0;
                }

                p {
                    text-align: center;
                }
            }
        }

        .donate_lightbox_bottom {
            width: 100%;

            h3 {
                color: $orange;
                width: 100%;
                text-align: center;
                @include title_3;
                font-weight: inherit;
                margin-top: 60px;
                margin-bottom: 20px;
            }

            // 
            p {
                color: red;
                line-height: 60px;
                font-weight: bold;
            }

            div {
                border-radius: $border-radius-1;
                overflow: hidden;
                border: 1px solid $gray-3;

                p {
                    color: $white;
                    background: $gray-3;
                    text-align: center;
                    @include title-10;
                }

                ul {
                    padding: 20px;

                    li {
                        color: $black;
                        line-height: 30px;
                    }
                }

            }
        }
    }

}</style>