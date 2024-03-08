<template>
    <div class="goToTop">
        <img src="/image/home/toTop_img.svg" alt="">
        <a href="#">
            <div class="goToTop_content">
                <span class="material-symbols-outlined">
                    expand_less
                </span>
                <span>TOP</span>
            </div>
        </a>
    </div>
</template>
  
<script>
//   import { RouterLink } from 'vue-router'
export default {
    data() {
        return {

        }
    },

}
</script>
  
<style scoped>
/* GO TO TOP */
.goToTop {
    width: 70px;
    height: 70px;
    color: white;
    position: fixed;
    z-index: 10;
    right: 60px;
    bottom: 50px;
    transition: bottom 0.3s ease-in-out;

    @media(width<=460px) {
        display: none;
    }
}

.goToTop_content {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: rgba(255, 107, 0, 1);
    border-radius: 50%;
    color: #fff;
}

.goToTop_content span:last-child {
    font-size: 15px;
    letter-spacing: 1px;
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 400;
}

.goToTop_content span:first-child {
    z-index: 10;
}

img {
    position: absolute;
    top: -40px;
    left: -5px;
    opacity: 0;
    z-index: -1;
    transition: top .5s ease-in-out, opacity .4s .1s;
}

.goToTop:hover img {
    opacity: 1;
    top: -80px;
}

@media (width <=768px) {}
</style>
  