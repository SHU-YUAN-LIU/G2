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
    z-index: 2;
}

.triangle {
    width: 0;
    height: 0;
    border-left: 100vw solid transparent;
    border-bottom: 20vw solid #D4FF1F;
}

.rectangle {
    background-color: #D4FF1F;
    width: 100vw;
}
</style>

<script>
export default {
    props: { height: String },
}
</script>