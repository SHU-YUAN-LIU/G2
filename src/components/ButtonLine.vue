<template>
    <div class="line"></div>
    <button class="commit_btn">
        {{ commitButton }}
        <img src="/image/contect/arrow.svg" alt="">
    </button>
</template>
<script>

export default {
    data() {
        return {

        }
    },
    props: ['commitButton',],

}
</script>

<style lang="scss">
.commit_btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 60px;
    background-color: #FF892E;
    padding: 13px 40px;
    font-family: 'Noto Sans';
    font-weight: 800;
    font-size: 16px;
    border-radius: 50px;
    letter-spacing: 1.5px;
    color: white;
    gap: 10px;
    border: transparent;
    cursor: pointer;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 80px;

    &:hover {
        transform: translateX(10px);
        transition: .5s ease-in-out;
    }

    img {
        width: 20px;

        &:hover {
            transform: translateX(10px);
            transition: .5s ease-in-out;
        }

    }
}
</style>
