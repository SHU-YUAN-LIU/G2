<template>
    <div class="bookmark">
        <div>
            <ul>
                <li v-for="(tab, index) in tabs" :class="{ active: currentIndex == index }" :style="getTabStyle(tab)"
                    @click="currentIndex = index">
                    {{ tab }}
                </li>
            </ul>
        </div>
        <div>
            <ul>
                <li v-show="currentIndex == 0">我們推出三大關鍵政策方向。首先，...</li>
                <li v-show="currentIndex == 1">為了將台灣更深入地融入區域經濟，我們推出三大關鍵政策方向。首先，...</li>
                <li v-show="currentIndex == 2">我們推出三大關鍵政策方向。首先，...</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentIndex: 0,
            tabs: [
                '房屋改革', '經濟改革', '政策改革'
            ]
        }
    },
    props: ['content'],
    created() { },
    methods: {
        getTabStyle(tab) {
            // 根據 tab 或其他條件返回不同的樣式
            if (tab === '房屋改革') {
                return 'background-color: #D8D8D8;';
            } else if (tab === '經濟改革') {
                return 'background-color: #D4FF1F;';
            } else {
                return 'background-color: #93E6D7;';
            }
        }

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
        /* margin-right: 25px; */
        border-radius: 10px;
        padding: 7px;
        cursor: pointer;
    }

}

.active {
    color: #000;
}
</style>
