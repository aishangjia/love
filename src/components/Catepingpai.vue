<template>
  <div id="catepingpai">
    <div class="header">
      <button>全部品牌</button>
    </div>
    <div class="main">
      <div class="mainconter"v-for="item5 in message">
        <div class="clear"></div>
        <p>{{item5.name}}</p>
        <div class="clear"></div>
        <div v-for="item in item5.simpleBrandList"class="m2">
          <div class="clear"></div>
          <img :src="item.brandImg"></img>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:'catepingpai',
    date()
    {
        return{}
    },
    props: {
      message:[]
    },
    mounted()
    {

    },
    methods:{

    }
    }
</script>
<style>
  #catepingpai{  position: absolute;top:101px;bottom:50px;width: 100%;z-index: 10;background:
    #eee;overflow-y: auto}
  .header{height: 54px;width: 100%;padding:8px 5%;}
  .header button{width: 100%;height: 100%;background: #000000;color: #fff;border:none;}
   .mainconter{width: 100%;}
  .mainconter p{width: 100%;height: 30px;line-height: 30px;text-align: center}
  .mainconter .m2{width: 25%;float: left}
  .clear{clear:both;}
  .mainconter .m2 img{width: 100%}
</style>
