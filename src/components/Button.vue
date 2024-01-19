<template>
    <span class="span">
        <img
        loading="lazy"
        src="/src/assets/image/product/Cart.svg"
        class="img"/>
        <div class="div">加入購物車</div>
    </span>
</template>

<style scoped>
    .span {
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 1px solid #ff892e;
    display: flex;
    gap: 10px;
    padding: 10px 50px;
    width: 278px;
    }

    .span:hover {
    background-color: #ff892e;
    }

    .img {
    aspect-ratio: 1.12;
    object-fit: contain;
    object-position: center;
    width: 28px;
    fill: var(--, #ff892e);
    overflow: hidden;
    max-width: 100%;
    margin: auto 0;
    transition: fill 0.3s; /* 加入過渡效果，使顏色變化更平滑 */
    }
    .div {
    color: var(--, #ff892e);
    text-align: center;
    letter-spacing: 4.8px;
    align-self: stretch;
    flex-grow: 1;
    white-space: nowrap;
    font: 500 24px/50px Noto Sans, sans-serif;
    transition: color 0.3s; /* 加入過渡效果，使顏色變化更平滑 */
    }

    .span:hover .img {
        filter: brightness(0) invert(1); /* 透過 filter 屬性反轉顏色 */
    }

    .span:hover .div {
    color: white; 
    }
</style>