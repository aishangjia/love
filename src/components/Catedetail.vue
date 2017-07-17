<template>
<div id="detail">
<div class="app-text"></div>
  <router-view></router-view>
  <div class="main"><router-link to="/category"><a><i class="fa fa-chevron-left"></i></a></router-link>{{catedetail.name}}</div>
  <ul class="main-list">
    <li>综合</li>
    <li>折扣</li>
    <li>价格</li>
    <li>筛选</li>
  </ul>
  <div class="main-detail">
    <ul>

      <li v-for="item in arr">
        <div @click="jumpcateshop(item)">
          <div class="clear"></div>
        <div class="shopimg">
          <img v-lazy="item.itemImgUrl">
        </div>
        <h4>{{item.itemTitle}}</h4>
        <div class="Shopprice"><span class="left">￥{{item.itemCurPrice}}</span>
          <span class="right"><i class="i1">{{item.discount}}折</i><i class="i2">￥{{item.itemOriPrice}}</i></span>
          <div class="clear"></div></div>
        <p class="shoporigin"><img :src="item.countryImgUrl"/>{{item.shopName}}</p>
        </div>
      </li>
    </ul>
  </div>
</div>
</template>
<script>
  export default
  {
    name:'Catedetail',
    data(){
        return{
           catedetail:{},
           arr:[]
        }
    },
    mounted(){
        this.catedetail = JSON.parse(localStorage.getItem('catedetail'));
        console.log(17,this.catedetail);
        console.log(this.catedetail.childCategoryId);
        this.$http.get('https://h5api.zhefengle.cn/search/item_search_ext.html?secondCate='+this.catedetail.childCategoryId+'&maskKey='+this.catedetail.maskKey).then(function (res) {
          console.log( res.body.model.searchList)
          this.arr = res.body.model.searchList;
        })
    }, methods: {
    jumpcateshop: function (obj) {
      localStorage.setItem('cateshop', JSON.stringify(obj));
      console.log(180, obj)
      this.$router.push('/category/catedetail/cateshop');

    }
  }

  }
</script>
<style>
  #detail{position: absolute;top: 0;bottom: 0;right: 0;left: 0;
    background: #ffffff;z-index: 40;}
  .app-text{width: 100%;height: 52px;background:#BCAAAA;}
  .main{height: 47px;line-height: 47px;text-align: center;color: #333;font-size: 14px;position: relative;
  border-bottom: 1px solid #f5f5f5}
  .main>a {display: block;font-size:20px;position: absolute;left: 10%}
  .main-list {width: 100%;height: 44px;padding-top: 3px;padding-bottom: 3px;}
  .main-list li{width: 25%;height: 100%;float: left;text-align: center;font-size: 14px;border-bottom: 1px solid #f5f5f5;line-height:38px;}
  .main-detail{overflow-y: auto;position: absolute;bottom: 0;top:143px;width: 100%;padding: 20px 3% 0 3%;}
  .main-detail ul {width: 100%;}
  .main-detail ul li {width:48%;float: left;border: 1px solid #f5f5f5;}
  .main-detail ul:nth-of-type(1) li{margin-right: 2%;}
  .shopimg{width:188px;height: 296px;padding-top:54px;padding-bottom: 54px;}
  .shopimg img{width: 100%;height: 100%;}
  .main-detail ul li h4{width: 100%;padding-left: 5%;height: 35px;color: #444;font-weight: 400;
    font-size: 14px;text-align: left;overflow: hidden;margin-bottom: 10px;text-overflow: ellipsis;white-space: nowrap;}
  .Shopprice{color: #DF001B;font-size: 14px;padding-right: 5%;}
  .Shopprice .left{float: left;margin-left: 5%;}
  .Shopprice i{font-style: normal;}
  .clear{clear: both;}
  .Shopprice .right{display: inline-block;border: 1px solid  #DF001B;border-radius: 10px;float: right;height: 16px;margin-top: 3px;}
  .Shopprice .right .i1{width: 38px;color: #fff;background:#DF001B; font-size: 12px;height: 100%;display: inline-block;}
    .Shopprice .right .i2{width:38px;border-left: 1px solid #DF001B;overflow: hidden;text-decoration: line-through;font-size: 12px;text-overflow: ellipsis;white-space: nowrap;}
  .shoporigin {width: 100%;height: 16px;padding-left: 5%;padding-right: 5%;text-align:left;color:  #878787;margin-top: 10px;margin-bottom: 10px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
  .shoporigin img{width: 16px;margin-right:8%;}
</style>
