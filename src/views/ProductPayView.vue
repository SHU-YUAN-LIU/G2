<template>
    <p>購物車內容</p>
</template>

<script>
import axios from 'axios';
import ProCard from '../components/ProCard.vue'
export default {
    components: {
        ProCard,

    },
    data() {
        return {
            defaultSrc: 'https://tibamef2e.com/chd103/g2/image/ShopImage/',
            search: '',
            allPro: [],
            disPro: [],
            category: [],
            currentCategory: 'ALL',
            max: 1000000,
            min: 0,
        }
    },
    computed: {

    },
    created() {
        this.axiosGetData();
    },
    methods: {
        axiosGetData() {
            console.log(123);
            axios.get('https://tibamef2e.com/chd103/g2/api/getProducts.php')
                .then(res => {
                    console.log(res.data);
                    this.allPro = res.data;
                    this.disPro = res.data;
                    this.addCategory();
                })
        },
    },

}
</script>

<style></style>

