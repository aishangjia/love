<template>
  <div id="cateshop">
    <div class="app-text">

    </div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="item in arr.itemDetailImgUrls"><img :src="item"/></swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <div class="title-top"><router-link to="/category/catedetail"><a><i class="fa fa-chevron-left"></i></a></router-link></div>

    <div class="price-shop">
   <div class="price-lazy">
    <span>{{arr.itemCurPrice}}</span>
     <span>{{arr.itemOriPrice}}</span>
      <span v-for="item2 in arr.attributeList"v-bind:style="{background:'#'+(item2.backGroundColor)}">
        {{item2.text}}
      </span>
     <p class="title-text">{{arr.itemTitle}}</p>
     <p class="title-text-new">{{arr.oriTitle}}</p>
   </div>
</div>
    <div class="shop-box">
     <div class="detail-row-hd">
       <div class="first">
       <div class="country-img"><img :src="cateshop.countryImgUrl"/></div>
       <div class="shopname">{{cateshop.shopName}}</div>
       <div class="activity">全部活动</div>
       </div>
       <div class="shop-bd-row" v-for="item3 in arr.shopInfo.moduleInfoList">

         <div class="left-bd">{{item3.title}}</div>
         <div class="main-bd">{{item3.desc}}</div>

       </div>
     </div>
    </div>
    <div class="shopcarlist">
      <ul>
        <li>客服<i class="fa fa-user-circle-o"></i></li>
        <li>购物车<i class="fa fa-shopping-cart"></i></li>
        <li><router-link to="/login"><a>加入购物车</a></router-link></li>
        <li>立即购买</li>
      </ul>
    </div>

  </div>

</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default
  {
      name:'Cateshop',
    data(){
      return{
        swiperOption: {
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置

//        direction : 'vertical',
          grabCursor : true,
          setWrapperSize :true,
          autoHeight: true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          mousewheelControl : true,
          observer:true,
          observeParents:true,
          loop: true, //匀速轮播
        },
       cateshop:{},
        arr:[]

      }
    },

    mounted(){

      this.cateshop = JSON.parse(localStorage.getItem('cateshop'));


      this.$http.get('https://h5api.zhefengle.cn/item/item_detail.html?shareId='+this.cateshop.shareId).then(function (res) {
       this.arr = res.body.model
        console.log(10000,res.body.model)

      })
    },methods: {

    }



  }
</script>
<style>
  #cateshop{
    position: absolute;top: 0;bottom: 0;left: 0;right: 0;z-index:100;overflow-y:auto;
    background: #eee;
  }

  .swiper-slide img{width: 100%;height:414px;display: block;}
  .price-shop{padding-left:2%;height: 167px;background: #fff;margin-bottom: 10px;}
  .price-lazy{width: 100%;height: 51px;padding-top: 7px;text-align: center;line-height: 44px;}
  .title-text{width: 100%;height: 34px;padding-top: 5px;padding-bottom: 5px;text-align: center;line-height: 24px;
    color: #333;font-size: 16px;}
  .title-text-new{color: #999;height: 35px;width: 100%;padding-right:15%;text-align: center;
  line-height: 17px;font-size: 16px;margin-top: 16px;margin-bottom: 16px;padding-left: 15%;}
  .shop-box{width: 100%;height: 198px;padding-left: 3%;padding-right: 3%;background: #fff;font-size: 16px;}
  .first{width: 100%;height: 48px;border-bottom: 1px solid #eee;padding-top: 7.5px;}
  .country-img{width: 33px;height: 33px;float: left;}
  .country-img img {width:100%;height: 100%;border-radius: 50%;}
  .shopname{float: left;    color: #333;line-height: 33px;margin-left: 2%;}
  .shop-bd-row{width: 100%;height: 50px;border-bottom: 1px solid #eee;}
  .activity{float:right;line-height: 33px;margin-right: 3%;}
  .left-bd{float: left;color: #333;margin-right: 5%;line-height: 50px;}
  .main-bd{float: left;color: #999;width:80%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;height: 50px;line-height:50px;}
  .shopcarlist{position:fixed;bottom: 0;width: 100%;height: 53px;background: #fff;z-index: 100;}
  .shopcarlist ul{width: 100%;height: 53px;}
  .shopcarlist ul li{float: left;height: 53px;}
  .shopcarlist ul li:nth-of-type(1){width: 20%;color: #999;text-align: center;position:relative;line-height: 80px;}
  .shopcarlist ul li:nth-of-type(2){width: 20%;color: #999;text-align: center;position: relative;line-height: 80px;}
  .shopcarlist .fa{position: absolute;font-size: 20px;top: 10px;left: 50%;margin-left:-10px;}
  .shopcarlist ul li:nth-of-type(3){width: 30%;background: #333; color: #fff;text-align: center;line-height: 53px;font-size: 16px;}
  .shopcarlist ul li:nth-of-type(4){width: 30%;color: #fff;background: #e61128;text-align: center;line-height: 53px;font-size: 16px;}
  .title-top{width: 100%;height: 48px;position: fixed;top: 52px;z-index: 120;padding-left: 3%;}
  .title-top .fa{font-size: 30px;color: #666;line-height: 48px;}
  .shopcarlist ul li:nth-of-type(3) a{display: block;width: 100%;height: 100%;background: #333; color: #fff;}
</style>
