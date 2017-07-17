<template>
  <div id="shopcar">
    <p>我是购物车页面</p>
  </div>
</template>

<script>
/*  import { Indicator } from 'mint-ui'
  import 'mint-ui/lib/style.css'*/
  export default{
    name:'shopcar',
    mounted(){
    	this.$http.get('https://m.asj.com/xy-marketing/api/activity/getProductList?startNum=0&activityId=1703281107330001&_t=1499761376759').then(function(res){

    	})
    },
  }
</script>

<style scoped>
  p{font-size: 30px;}
</style>
