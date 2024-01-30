<template>
    <div v-if="showLightbox" class="donate_lightbox_point" @click="closeLightbox">
        <div class="lightbox_point_bg"  @click.stop>
            <button @click="closeLightbox" class="donate_closelightbox"><img src="../assets/image/donate/icon_close.png"
                    alt=""></button>

            <div class="point_lightbox_content">
                <h2>您的支持</h2>
                <h2>是我們進補的力量</h2>

                <ul class="point_lightbox_list">
                    <li>
                        <span class="list_num">1</span>
                        <h2>捐款集點</h2>
                        <div>
                            <img src="../assets/image/donate/donateLightbox_point.png" alt="">
                            <img src="../assets/image/donate/donate_equal.png" alt="">
                            <span>1點</span>
                        </div>
                    </li>
                    <li>
                        <span class="list_num">2</span>
                        <h2>前往商品頁面<br>折抵商品</h2>
                        <div>
                            <img src="../assets/image/donate/donateLightbox_cart.png" alt="">
                            <span>一點一元</span>
                        </div>
                    </li>
                </ul>
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
    },
    components: { RouterLink }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/base/reset";
@import "../assets/scss/base/font";
@import "../assets/scss/base/color";
@import "../assets/scss/base/border";
.donate_lightbox_point{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;


    div.lightbox_point_bg {
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

    .point_lightbox_content {
        width: 1000px;
        height: 650px;
        background: $orange;
        overflow-y: scroll;
        padding: 40px;
        border-radius: $border-radius-1;        
        h2{
            @include title_2;
            color: $white;
            text-align: center;
            margin-bottom: 30px;
        }
        .point_lightbox_list{

            li+li{
                margin-top: 60px;
            }
            li{
                background: $white;
                position: relative;
                overflow: hidden;
                border-radius: $border-radius-1;
                display: flex;
                flex-direction: column;
                padding: 40px;

                span{
                    z-index: 100;
                }
                span.list_num{
                    position: absolute;
                    top: -5px;
                    left: -5px;
                    background: $orange;
                    @include title_2;
                    color: $white;
                    width: 100px;
                    height: 100px;
                    border-radius: $border-radius-1;
                    text-align: center;
                    line-height: 100px;
                    
                }

                h2{
                    @include title_2;
                    color: $black;
                }
                div{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: $white;
                    gap: 40px;

                    img{

                    }

                    span{
                        @include title_2;
                        color: $orange;
                    }
                }
            }
        }
    }

}

@media(max-width: 768px){
.donate_lightbox_point{
    div.lightbox_point_bg {
        button {
            top: -25px;
            right: -25px;
            width: 50px;
            height: 50px;
        }
    }

    .point_lightbox_content {
        max-width: 350px;
        height: 600px;
        padding: 20px;   
        h2{
            @include title_4;
            margin-bottom: 30px;
        }
        .point_lightbox_list{
            li+li{
                margin-top: 20px;
            }
            li{
                padding: 20px;

                span.list_num{
                    top: -5px;
                    left: -5px;
                    @include title_3;
                    width: 60px;
                    height: 60px;
                    line-height: 60px;
                    
                }

                h2{
                    @include title_3;
                    position: relative;
                    left: 15px;
                }
                div{
                    gap: 20px;
                    img{
                        width: 100px;
                    }

                    img:nth-child(2){
                        width: 70px;
                    }
                    span{
                        @include title_4;
                    }
                }
            }
        }
    }

}
}
</style>