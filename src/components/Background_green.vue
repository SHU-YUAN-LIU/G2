<template>
    <div class="background">
        <div class="triangle"></div>
        <div class="rectangle" :style="{ height: height + 'px' }"></div>
    </div>
</template>


<style scoped>
.background {
    position: relative;
    bottom: 0;
    z-index: 0;
}

.triangle {
    width: 0;
    height: 0;
    border-left: var(--body-width) solid transparent;
    border-bottom: 20vw solid #D4FF1F;
}

.rectangle {
    background-color: #D4FF1F;
}
</style>

<script>
export default {
    data() {
        return {
            resizewidth: "",
        };
    },
    props: { height: String },
    computed: {
        bodyWidth() {
            return document.documentElement.offsetWidth + 'px';
        }
    },
    mounted() {
        document.documentElement.style.setProperty('--body-width', this.bodyWidth);
        // 监听窗口大小改变事件
        window.addEventListener('resize', this.resizebody);
    },
    methods: {
        resizebody() {
            this.resizewidth = document.documentElement.offsetWidth + 'px';
            document.documentElement.style.setProperty('--body-width', this.resizewidth);
        }
    },
    beforeDestroy() {
        // 在组件销毁前移除事件监听器，以防止内存泄漏
        window.removeEventListener('resize', this.resizebody);
    }
}
</script>