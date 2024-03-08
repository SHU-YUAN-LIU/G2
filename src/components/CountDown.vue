<template>
    <!-- <div class="countdown">{{ countDownHTML }}</div> -->
    <div class="countdown">
        <span class="countdownch">投票倒數</span><span class="countdownline"></span>
        <div class="countdownright">
            <div class="dayyyy">
                <span>{{this.day}}</span>
                <span>天</span>
            </div>
            <div class="hourrr">
                <span>{{this.hr}}</span>
                <span>小時</span>
            </div>
            <div class="minnnn">
                <span>{{this.min}}</span>
                <span>分鐘</span>
            </div>
            <div class="secccc">
                <span>{{this.sec}}</span>
                <span>秒</span>
            </div>
        </div>
        
    </div>
</template>    

<script>
import moment from 'moment'
export default {
    data() {
        return {
            electionTime:'2024-06-08',
            day:'',
            hr:'',
            min:'',
            sec:'',
        }
    },
    mounted() {
        this.startCountDown();
    },
    methods:{
        startCountDown(){
            this.updateCountDown();
            setInterval(this.updateCountDown,1000)
        },
        updateCountDown(){
            let end = moment(this.electionTime);
            let now = moment();
            if(now>=end){
                clearInterval(this.updateCountDown)
                return;
            }
            // console.log(end);
            // console.log(now);
            this.day = end.diff(now, 'days')
            this.hr = end.diff(now, 'hours')%24
            this.min = end.diff(now, 'minutes')%60
            this.sec = end.diff(now, 'seconds')%60
            // this.day = moment.duration(end.diff(now)).days()
            // this.hr = moment.duration(end.diff(now)).hours()
            // this.min = moment.duration(end.diff(now)).minutes()
            // this.sec = moment.duration(end.diff(now)).seconds()
        },
    },
    computed:{
        countDownHTML() {
            return `投票倒數 ${this.day}天 ${this.hr}小時 ${this.min}分鐘 ${this.sec}秒`;
        },
    }
}
</script>

<style>

</style>