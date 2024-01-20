<template>
  <div class="donate">
    <div class="donate_banner">
      <img src="../assets/image/donate/donate_banner.png" alt="">
      <h1>我要捐款</h1>
    </div>
    <div class="donate_bread">
      <ul>
        <li>首頁 / </li>
        <li>我要捐款</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  components:{
    
  },
data(){
    return{
      
    }
},
  created(){

  },

}
</script>

<style scoped lang="scss">
@import "../assets/scss/base/reset";
@import "../assets/scss/base/font";
@import "../assets/scss/base/color";
@import "../assets/scss/base/border";

div.donate{
  margin-top: 85px;
  .donate_banner{
    position: relative; 
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
      @include title_1;
      color: $white;
      font-weight:initial;
      position: absolute;
    }
    img{
      width: 100%;
      vertical-align: middle;
    }
  }

  // 麵包屑區塊
  .donate_bread{
    background-color: $orange;  
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    // 麵包屑文字
    ul{ 
      width: 100%;
      max-width: 1200px;
      display: flex;
      align-items: center;
      li{
        @include title_7;
      }

      // 麵包屑最後一個改成白字
      li:last-child{
        color: $white; 
        position: relative;
      }

      // 裝飾線
      li:last-child:after{
          content:'';
          height: 1px;
          // 寬度不確定要設多少?
          width: 900%;
          background-color: $black;
          position: absolute;
          top: 50%;
          margin-left: 20px;

        }
    }
  }
  
}



</style>