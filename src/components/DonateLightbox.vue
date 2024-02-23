<template>
    <div v-if="showLightbox" class="donate_lightbox" @click="closeLightbox">
        <div>
            <button @click="closeLightbox" class="donate_closelightbox"><img src="/image/donate/icon_close.png"
                    alt=""></button>

            <div class="donate_lightbox_content" @click.stop>
                <div class="donate_lightbox_top">
                    <div class="donate_anonymous">
                        <RouterLink to="/donate/page" @click="storeItemId(1)">
                            <h2>匿名捐款</h2>
                            <img src="/image/donate/donate_card1.png" alt="">
                            <p>匿名捐贈：新台幣1萬元以下</p>
                        </RouterLink>
                    </div>
                    <div class="donate_member" >
                        <RouterLink to="/donate/page" @click="storeItemId(2)">
                            <h2>會員捐款</h2>
                            <img src="/image/donate/donate_card1.png" alt="">
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
            document.body.style.overflow = 'auto';
        },

        storeItemId(control_num) {
            // if(localStorage.getItem('userToken')){
            //     localStorage.setItem('donate_num', control_num);
            //     this.$router.push('/donate/page');
            // }else if (!localStorage.getItem('userToken')){
            //     alert('請先登入會員');
            //     this.$router.push('/login');
            // }
            localStorage.setItem('donate_num', control_num);
            this.enableBodyScroll();
        },

        enableBodyScroll() {
            document.body.style.overflow = 'auto';
        }
    },
    components: { RouterLink }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/base/reset";
@import "../assets/scss/base/font";
@import "../assets/scss/base/color";
@import "../assets/scss/base/border";

.donate_lightbox {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .5);
    display: flex;
    align-items: center;
    justify-content: center;
    color: $white;
    z-index: 1000;
    overflow-y: scroll;

    div {
        width: 100%;
        max-width: 1000px;
        position: relative;
        max-height: 500px;

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
                background: $gray_3;
                margin-right: 50px;
            }

            .donate_member {
                background: $orange;
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
                    margin-bottom: 10px;
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
                margin-top: 60px;
                margin-bottom: 20px;
            }

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

}

@media(max-width: 768px) {
    .donate_lightbox {
        z-index: 1000;

        div {
            width: 100%;
            max-width: 350px;


            button {
                top: -25px;
                right: -25px;
                width: 50px;
                height: 50px;

                img {
                    width: 50px;
                    height: 50px;
                }
            }
        }

        .donate_lightbox_content {
            max-width: 350px;
            padding: 20px;
            border: 1px solid #000;

            img{
                display: none;
            }
            .donate_lightbox_top {
                display: flex;
                flex-direction: column;
                gap: 20px;

                .donate_anonymous {
                    margin-right: 0px;
                    margin-top: 0px;
                }


                .donate_anonymous,
                .donate_member {
                    width: 300px;
                    padding: 20px;

                    h2 {
                        @include title-2;
                    }

                }
            }

            .donate_lightbox_bottom {
                width: 100%;
                

                h3 {
                    @include title_3;
                }

                p {
                    line-height: 30px;
                }

                div {

                    p {
                        @include title-10;
                    }

                    ul {
                        padding: 20px;

                        li {
                            line-height: 30px;
                            font-size: 14px;
                        }
                    }

                }
            }
        }

    }


}</style>