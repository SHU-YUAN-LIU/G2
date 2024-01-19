<template>
    <div class="bookmark">
        <ul>
            <li v-for="(tab, index) in tabs" :class="{ active: currentIndex == index }" @click="currentIndex = index">
                {{ tab }}
            </li>
        </ul>
        <ul>
            <li v-show="currentIndex == 0">我們推出三大關鍵政策方向。首先，...</li>
            <li v-show="currentIndex == 1">為了將台灣更深入地融入區域經濟，我們推出三大關鍵政策方向。首先，...</li>
            <li v-show="currentIndex == 2">我們推出三大關鍵政策方向。首先，...</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: 0,
            tabs: [
                'tab1', 'tab2', 'tab3'
            ]
        }
    },
    props: ['content'],
    created() { },
    methods: {
    }
}
</script>

<style>
/* 頁籤 */
.bookmark ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    margin-bottom: 25px;

    li {
        margin-right: 25px;
        padding: 7px;
        cursor: pointer;
    }

}

.active {
    background-color: black;
    color: #fff;
}
</style>
