<template>
    <div id="scened">
        <div id="scene">
            <div v-for="(policy, index) in policyList" :key="policy.id" class="election_card"
                :style="[`--i:${index};`, getTabStyle(policy.tag)]">
                <h2>{{ policy.tag }}</h2>
                <div>
                    <p>{{ policy.content }}</p>
                </div>
            </div>
        </div>
    </div>
    <div class="rotate_button">
        <i class="fa fa-arrow-circle-left fa-2x fa-fw" aria-hidden="true" id="rotateLeftBtn"></i>
        <i class="fa fa-arrow-circle-right fa-2x" aria-hidden="true" id="rotateRightBtn"></i>
    </div>
</template>

<script>
export default {
    mounted() {
        let j = 0;
        const scene = document.getElementById("scene");
        let sceneW = document.querySelector("#scened #scene").clientWidth;
        const cards = [...document.querySelectorAll("#scene .election_card")];
        const angle = 360 / cards.length;
        console.log("angle", angle);
        console.log("sceneW", sceneW);

        cards.forEach((election_card, i) => {
            election_card.style.transform = `rotate3d(0,1,0,${(i + 1) * angle
                }deg) translateZ(${sceneW}px)`;
            console.log(election_card.style.transform);
        });

        document.getElementById("rotateLeftBtn").addEventListener("click", (e) => {
            e.stopPropagation();
            j += 1;
            scene.style.transform = `perspective(2000px) rotateX(-5deg) rotateY(${j * angle}deg)`;
        });

        document.getElementById("rotateRightBtn").addEventListener("click", (e) => {
            e.stopPropagation();
            j -= 1;
            scene.style.transform = `perspective(2000px) rotateX(-5deg) rotateY(${j * angle}deg)`;
        });
    },
    data() {
        return {
            policyList: [{
                tag: '房屋改革',
                content:
                    '為深化台灣區域經濟融合，我們推出三項核心政策：一是加強與週邊國家經濟合作，拓展新市場，提升台灣作為亞洲經濟樞紐的地位。',
            },
            {
                tag: '經濟改革',
                content:
                    '為深化台灣區域經濟融合，我們推出三項核心政策：一是加強與週邊國家經濟合作，拓展新市場，提升台灣作為亞洲經濟樞紐的地位。',
            },
            {
                tag: '經濟改革',
                content:
                    '為深化台灣區域經濟融合，我們推出三項核心政策：一是加強與週邊國家經濟合作，拓展新市場，提升台灣作為亞洲經濟樞紐的地位。',
            },
            {
                tag: '房屋改革',
                content:
                    '為深化台灣區域經濟融合，我們推出三項核心政策：一是加強與週邊國家經濟合作，拓展新市場，提升台灣作為亞洲經濟樞紐的地位。',
            },
            {
                tag: '政策改革',
                content:
                    '為深化台灣區域經濟融合，我們推出三項核心政策：一是加強與週邊國家經濟合作，拓展新市場，提升台灣作為亞洲經濟樞紐的地位。',
            },]
        }
    },
    methods: {
        getTabStyle(tab) {
            if (tab === '房屋改革') {
                return { 'background-color': '#FF892E' };
            } else if (tab === '經濟改革') {
                return { 'background-color': '#565656' };
            } else {
                return { 'background-color': '#93E6D7' };
            }
        },
    }
}


</script>  