<template>
    <a href="#">
        <div class="goToTop">
            <img src="/image/home/toTop_img.png" alt="">
            <div class="goToTop_content">
                <span class="material-symbols-outlined">
                expand_less
                </span>
                <span>TOP</span>
            </div>
            
        </div>
    </a>
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
    width: 80px;
    height: 80px;
    color: white;
    position: fixed;
    z-index: 10;
    right: 50px;
    bottom: 50px;
    transition: bottom 0.3s ease-in-out;

    @media(width<=414px) {
        display: none;
    }
}

.goToTop_content{
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    z-index: 10;
    background-color: rgba(255, 107, 0, 1);
    border-radius: 50%;
}

.goToTop_content span:last-child {
    font-size: 15px;
    letter-spacing: 1px;
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 400;
}

.goToTop_content span:first-child{
    z-index: 10;
}

img{
    position: absolute;
    top: -20px;
    left: -5px;
    opacity: 0;
    z-index: -1;
    transition: top .5s ease-in-out, opacity .3s .1s;
}

.goToTop:hover img{
    opacity: 1;
    top: -80px;
}
</style>
  