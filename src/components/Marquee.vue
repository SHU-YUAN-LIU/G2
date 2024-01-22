<template>
    <Vue3Marquee>
        <span v-for="(word, index) in helloArray" :key="index">
            {{ word }}
        </span>
    </Vue3Marquee>
</template>

<script setup>
const helloArray = ['這是一場改變政治文化的社會運動，投給劉緯育，投給自己的未來。']
</script>
