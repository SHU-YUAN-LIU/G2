<template>
    <div class="ThreeBookMark">
        <!-- 頁籤標題 -->
        <div class="ThreeBookMark_tab">
            <ul>
                <li class="" v-for="(tab, index) in tabs" :class="{ active_tab: currentIndex == index }"
                    :style="{ ...getTabStyle(tab), width: '400px' }" @click="currentIndex = index">
                    {{ tab }}
                </li>
            </ul>
        </div>
        <!-- 頁籤內容 -->
        <div class="ThreeBookMark_content">
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
                '民意', '專業', '價值'
            ],
            contents: [
                '政治落實在生活的每一天，台灣需要解決問題的方案，而不是情緒發洩與意識形態的對立。我們相信眾人的智慧能超越個人的智慧，我們尊重、傾聽每一個不同立場的聲音。',

                '政黨決策應注重專業度，超越情緒與意識形態的對立。解決問題需理性方案，智慧合力勝於個體。我們應尊重不同聲音，傾聽各立場，追求全面協商。唯有高專業度的決策，才能確保政治真正落實在生活中，為台灣社會帶來穩健發展。',

                '政黨決策的價值在於為社會帶來方向與穩定。透過理性討論與專業判斷，政黨能制定有效政策，解決問題。正確的決策不僅推動國家發展，更促進公平正義。政黨的價值體現在其使命，以全體人民福祉為核心，建構更良好社會。',
            ]
        }
    },
    props: ['content'],
    created() { },
    methods: {
        getTabStyle(tab) {
            // 根據 tab 條件返回不同的樣式
            if (tab === '民意') {
                return { 'background-color': '#D8D8D8' };
            } else if (tab === '專業') {
                return { 'background-color': '#ff8a2d' };
            } else {
                return { 'background-color': '#93E6D7' };
            }
        },
    }
}
</script>

<style>
/* 頁籤 */
.ThreeBookMark {
    /* margin: auto; */
    width: 1100px;
}
@media (max-width: 1400px) {
    .ThreeBookMark{
        width: 100%;    
        margin: auto;
        gap: 15px;

    }
}


.ThreeBookMark_tab ul {
    list-style: none;
    display: flex;
    justify-content: center;
    font-size: 36px;
    font-weight: 600;
    /* width: 100%; */
}

.ThreeBookMark_content ul {
    list-style: none;
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: 600;   
}

.ThreeBookMark_tab li {
    border-radius: 10px 10px 0 0;
    text-align: center;
    cursor: pointer;
    line-height: 20px;
    /* letter-spacing: 20px; */
    text-align: center;
    padding: 20px;
}


.ThreeBookMark_content li {
    border-radius: 0px 0px 10px 10px;
    line-height: 50px;
    padding: 30px;
}

.ThreeBookMark_content li p {
    background-color: #fff;
    border-radius: 10px;
    padding: 30px;
    /* height: 250px; */
    /* overflow: auto; 或者 overflow: hidden; */
}
</style>
