<template>
   <div class="getInf">
      <div class="head">
          <li><i class="fa fa-sun-o"></i></li>
          <li><i class="fa fa-user-circle-o"></i></li>
      </div>

     <!--中间的图像-->
        <div class="photo">
          <img src="static/img/smile.png" alt="">

              <div class="nickName">
                <input type="text">
                <p>v1的我特权</p>
              </div>
        </div>

     <!--我的订单-->
        <div class="order">
            <p>我的订单</p>
            <ul>
                <li><img src="static/img/icon1.png"/><span>待处理</span></li>
                <li><img src="static/img/icon2.png"/><span>待收货</span></li>
                <li><img src="static/img/icon3.png"/><span>已完成</span> </li>
            </ul>
        </div>

     <!--我的收藏-->
       <div class="coll">
          <ul class="first">
             <li><img src="static/img/favorite.png" alt=""><p>我的收藏</p></li>
             <li><img src="static/img/youhui.png" alt=""><p>优惠券</p></li>
             <li><img src="static/img/tuangou.png" alt=""><p>我的团购</p></li>
             <li><img src="static/img/choose.png" alt=""><p>我挑你选</p></li>
          </ul>

            <ul class="second">
               <li><img src="static/img/friends.png" alt=""><p>邀请好友</p></li>
               <li><img src="static/img/youhui.png" alt=""><p>售后服务</p></li>
               <li><img src="static/img/share.png" alt=""><p>分享赚钱</p></li>
            </ul>
       </div>

        <!--为你推荐-->
          <div class="recomend">
             <p>你为推荐|<span>推荐</span> </p>
          </div>

   </div>
</template>
<script>

</script>

<style>
   .getInf{width: 100%;height:172px;background: lightgrey}
   .head{width:100%;height: 42px;position:fixed}
   .head li{height: 42px;float: left;}
   .head li i{height:42px;margin:2px auto;font-size: 30px;}
   .head .fa-sun-o{float: left}
   .head .fa-user-circle-o{position: absolute;right: 0}

   .photo{width: 100%;height: 129px;padding-top: 42px;}
   .photo img{display: block;width:80px;float: left}
   /*图片右边的昵称*/
      .photo .nickName{width:50%;height:58px;float: right;margin-right:20%;margin-top: 12px;}
      .nickName input[type=text]{width:100%;height:30px;display: block}
      .nickName p{height: 30px;display: block;font-size:18px;}

   .order{width: 100%;height: 104px;}
   .order p{width: 100%;height:40px;display: block;background: white;
          line-height:40px;text-align: left;font-weight: bold;font-size: 16px}
   .order ul{width: 100%;height: 64px;}
   .order ul li{width: 33%;float: left;text-align: center;height: 64px;}
   .order ul li img{width: 22px;height: 22px; margin-top: 10px;}
   .order ul li span{display:block;}

   .coll{width: 100%;height:210px;}
   .coll .first{width: 100%;height:100px;}
   .first li{width: 25%;height:100px;float: left;font-size:14px;text-align: center;}
   .first li img{width:35px;height: 35px;margin-top: 10px;}


   .coll .second{width: 100%;height:100px;}
   .second li{float: left;width: 90px;height: 100px;font-size:14px;text-align: center;}
   .second li img{margin-top: 10px;width:35px;height: 35px;}

   .recomend{width:100%;height:75px;}
   .recomend p{font-size: 18px;text-align: left;line-height: 75px;height: 75px;font-weight: bold}
   .recomend span{font-size: 14px;}
</style>
