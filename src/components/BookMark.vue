<template>
    <div class="bookmark">
        <!-- 頁籤標題 -->
        <div class="bookmark_tab">
            <ul>
                <li class="" v-for="(tab, index) in tabs" :class="{ active_tab: currentIndex == index }"
                    :style="{ ...getTabStyle(tab), width: '400px' }" @click="currentIndex = index">
                    {{ tab }}
                </li>
            </ul>
        </div>
        <!-- 頁籤內容 -->
        <div class="bookmark_content">
            <ul>
                <li v-for="(content, index) in contents" :class="{ active: currentIndex == index }"
                    :style="{ 'background-color': getTabStyle(tabs[currentIndex])['background-color'] }"
                    v-show="currentIndex == index" @click="currentIndex = index">
                    <p>{{ content }}</p>
                </li>
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
            ],
            contents: [
                '為了將台灣更深入地融入區域經濟，我們推出三大關鍵政策方向。首先，我們將致力於強化與鄰近國家的經濟合作關係，開拓新市場，以促進台灣成為亞洲經濟的重要樞紐。接著，我們將改進投資環境，創建更有利於企業發展的條件，這不僅吸引外來投資，也鼓勵國內企業擴大投資。最後，我們重視企業創新與轉型，透過提供資金支援和技術升級等措施，鼓勵企業採用新科技，迎接未來挑戰。這三大政策方向旨在創造一個充滿活力和機遇的經濟環境，讓台灣在區域經濟中屹立不搖。',

                '為了將台灣更深入地融入區域經濟，我們推出三大關鍵政策方向。首先，我們將致力於強化與鄰近國家的經濟合作關係，開拓新市場，以促進台灣成為亞洲經濟的重要樞紐。接著，我們將改進投資環境，創建更有利於企業發展的條件，這不僅吸引外來投資，也鼓勵國內企業擴大投資。最後，我們重視企業創新與轉型，透過提供資金支援和技術升級等措施，鼓勵企業採用新科技，迎接未來挑戰。這三大政策方向旨在創造一個充滿活力和機遇的經濟環境，讓台灣在區域經濟中屹立不搖。',

                '為了將台灣更深入地融入區域經濟，我們推出三大關鍵政策方向。首先，我們將致力於強化與鄰近國家的經濟合作關係，開拓新市場，以促進台灣成為亞洲經濟的重要樞紐。接著，我們將改進投資環境，創建更有利於企業發展的條件，這不僅吸引外來投資，也鼓勵國內企業擴大投資。最後，我們重視企業創新與轉型，透過提供資金支援和技術升級等措施，鼓勵企業採用新科技，迎接未來挑戰。這三大政策方向旨在創造一個充滿活力和機遇的經濟環境，讓台灣在區域經濟中屹立不搖。',
            ]
        }
    },
    props: ['content'],
    created() { },
    methods: {
        getTabStyle(tab) {
            // 根據 tab 條件返回不同的樣式
            if (tab === '房屋改革') {
                return { 'background-color': '#D8D8D8' };
            } else if (tab === '經濟改革') {
                return { 'background-color': '#D4FF1F' };
            } else {
                return { 'background-color': '#93E6D7' };
            }
        },
    }
}
</script>

<style>
/* 頁籤 */

</style>
