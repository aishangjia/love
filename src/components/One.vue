<template>
  <div id="one">
 <ul class="tablist"><li v-for="item in arr"><a href="javascript:void(0)">{{item.key}}</a></li></ul>
    <div class="main"v-for="item2 in arr">
      <h2>{{item2.key}}</h2>
      <div v-for="item3 in item2.innerPOJOs"class="shopimg"><a href="javascript:void(0)"><img :src="item3.brandImg"><span class="s1">{{item3.brandName}}</span></a></div>
    </div>
  </div>
</template>
<script>
  export default
  {
    name:'one',
    data()
    {
        return{
           arr:[]
        }
    },
    mounted(){

      this.$http.get('static/json/category.json')
        .then(function (data) {
          this.arr = data.body.model.brandIndexes;
          console.log(data.body.model.brandIndexes[0].innerPOJOs[0].brandImg)

        })


    },
  }

</script>
<style>
  #one{position: absolute;right: 0;left:0;bottom:50px;top: 0;background:#fff;;z-index:200;overflow-y: auto}
  .tablist{width: 100%;height: 76px;padding: 16px 0 0 11px;}
  .tablist li{float: left;text-align: center;height: 30px;width:7%;line-height: 30px;}
  .main{width: 100%;}
  .main h2{padding-top:2.76px;padding-bottom:2.76px;color: #999;width: 100%;height: 24px;
    line-height: 24px;background:#F2F2F2;text-align: left;padding-left: 5%;}
  .shopimg{width: 100%;height: 57px;padding-left: 5%;padding-right: 5%}
  .shopimg a{width: 100%;height: 100%;display: block;border-top: 1px solid #eee;border-bottom: 1px solid #eee;text-align:left;}
  .shopimg a img{width: 10%;height: 80%;vertical-align:middle;}
  .shopimg a .s1{display: inline-block;height: 100%;line-height: 55px;margin-left: 4%;}
</style>
