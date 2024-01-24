<template>
    <div class="span" @click="changeqty($event,id,qty)">
        <img loading="lazy" src="/src/assets/image/product/Cart.svg" class="img" />
        <div class="div">加入購物車</div>
    </div>
</template>

<style scoped>
.span {
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 1px solid #ff892e;
    display: flex;
    padding: 5px 10px;
    gap: 10px;
    cursor: pointer;
}

.span:hover {
    background-color: #ff892e;
}

.img {
    aspect-ratio: 1.12;
    object-fit: contain;
    object-position: center;
    width: 20px;
    fill: var(--, #ff892e);
    overflow: hidden;
    max-width: 100%;
    margin: auto 0;
    transition: fill 0.3s;
    /* 加入過渡效果，使顏色變化更平滑 */
}

.div {
    color: var(--, #ff892e);
    text-align: center;
    letter-spacing: 1.5px;
    font: 500 20px/45px Noto Sans, sans-serif;
    transition: color 0.3s ease-in-out;

    /* 加入過渡效果，使顏色變化更平滑 */
}

.span:hover .img {
    filter: brightness(0) invert(1);
    /* 透過 filter 屬性反轉顏色 */
}

.span:hover .div {
    color: white;
}
</style>

<script>
import { changeqty } from '../../stores/cart.js';
export default {
    props: ['id','qty'],
    methods: {
        changeqty ,
    }
}
</script>