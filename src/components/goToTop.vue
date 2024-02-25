<template>
    <a href="#">
        <div class="goToTop">
            <span class="material-symbols-outlined">
                expand_less
            </span>
            <span>TOP</span>
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
    border-radius: 50px;
    background-color: rgba(255, 107, 0, 0.9);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 10;
    right: 50px;
    bottom: 50px;
    transition: bottom 0.3s ease-in-out;

}

.goToTop span:last-child {
    font-size: 15px;
    letter-spacing: 1px;
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 400;
}
</style>
  