<template>
<div id="picter2">
	   	<div class="banner clear">
	   		<ul class="oul3">
		   		<li><router-link to ='/PicTer1'><i class="fa fa-chevron-circle-left fa-3x"></i></router-link></li>
		   		<li v-on:click ='changebg'><i class="fa fa-share-alt-square fa-3x"></i></li>
	   		</ul>
	   	  <swiper :options="swiperOption" ref="mySwiper">
		    <!-- slides -->
				    <swiper-slide v-for='item in obj1'><img :src="item"/></swiper-slide>		    
				    <!-- Optional controls -->
				    <div class="swiper-pagination"  slot="pagination"></div>
		  </swiper>		  
	 </div>
	 <div class="textnode">
	     <h2>{{obj2.itemTitle}}</h2>
	     <h1>￥{{obj2.salePrice}}</h1>
	     <p><span>￥{{obj2.marketPrice}}</span><a>6.9折</a></p>	     
	 </div>
	 <div class="textnode1">{{obj2.warehouseName}},{{obj2.deliveryTime}}</div>
	 <div class="divlist">
	 	   <ul>
	 	   	   <li><a>精品正品</a></li>
	 	   	   <li><a>海外采购</a></li>
	 	   	   <li><a>快速清关</a></li>
	 	   	   <li><a>超时赔付</a></li>
	 	   </ul>
	 </div>
	 
	 <div class="divlist2 clear">
	 	  <p>小编寄语</p>
	 	  <p>韩国超人气医院美容面膜，为肌肤注入满满一瓶针剂精华。十五分钟肌肤解渴，还你水漾容颜</p>
	 	  <p>该商品仅适于自用，不得进行转售</p>
	 </div>
	 <div  class="divlist3 clear">
	 	  <ul>
	 	  	  <li>图文说明</li>
	 	  	  <li>商品参数</li>
	 	  </ul>
	 </div>
	 
	 <div  class="divlist4">
	 	  	  <li v-for='item in obj3'><img :src="item"/></li> 	  
	 </div>
	 
	 <!--回到顶部的标签-->	 
	<div id="bgtop" v-on:click="backTop"><img src="../assets/5.png"/></div>
	<div id="bot">
		<ul>
			 <li><a><img src="../assets/6.png"/></a></li>
			 <li><a>加入购物车</a></li>
			 <li><a>直接购买</a></li>
			 <li><a><img src="../assets/7.png"/></a></li>
		</ul>	  
	</div>
	
	<!--<div id="weibo"></div>-->
	 
	 
</div>
</template>

<script>
	//	轮播图插件
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	   export default{
	   	       name: 'picter2',
	   	       //  回到顶部
	    methods:{
			   backTop(){
			    		$('body').animate({scrollTop:0},700)                       
			    	},
			    	
//			    	changebg:function(){
//			    		 $('#weibo').css({
//			    		 	    backgroundColor='red';
//			    		 })
//			    	}
			  },
  
	   	       data(){
	   	       	  return{
	   	       	  	        swiperOption: {
          notNextTick: true,
          // swiper configs 所有的配置同swiper官方api配置
         autoplay: 500,
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
	   	       	  	 obj1:[],
	   	       	  	 obj2:[],
	   	       	  	 obj3:[],
	   	       	  }
 },
 
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
   },
	   	       
	   	            mounted(){
	   	            	    this.$http.get('static/produce8.json').then(function(res){
//	   	            	    	     console.log(res)
	   	            	    	     this.obj1 =  res.body.data.imageList
	   	            	    	     this.obj2 =  res.body.data
	   	            	    })
	   	            	    
	   	            	    this.$http.get('static/oimg.json').then(function(res){
	   	            	    	       console.log(res)
	   	            	             this.obj3 =  res.body.data
	   	            	   
	   	            	   })
	   	            	 
	   	            }
	   }
</script>

<style>
#picter2{width: 100%;height: 100%;padding-bottom:70px;overflow: auto;}
.banner{width: 100%;}	
.swiper{width: 100%;}	
.swiper-slide img{width: 100%}
.banner .oul3 li{float: left;}
.oul3{width: 100%;background: red;z-index: 100;}
.banner .oul3 li:last-child{float: right;padding-right: 5%;}
.banner .oul3 li:first-child{padding-left: 5%;}
.banner .oul3 li i{padding-top: 8px;}
.textnode{width: 100%;height: 90px;}
.textnode h2{width: 100%;height:30px;border-bottom: 1px solid #ccc;text-align: center;padding-left: 5%;}
.textnode h1{padding-left: 8%;float: left;padding-top: 10px;}
.textnode p{float: left;padding-top: 20px;}
.textnode p span{text-decoration:line-through;padding-right: 15px;}
.textnode p a{border: 1px solid red;color: red;width: 15px;}
.textnode1{font-size: 14px;padding-left: 8%;}
.divlist{width: 100%;height: 50px;margin-top: 40px;}
.divlist ul{width: 100%;height: 50px;background: #ddd;}
.divlist ul li{width: 25%;float: left;height: 50px;line-height: 50px;text-align: center;}
.divlist2{width: 100%;height: 190px;float: left;margin-top: 50px;border-top: 15px solid #f4f4f4;border-bottom: 15px solid #f4f4f4;}
.divlist2 p:first-child{font-size: 16px;padding: 20px  10px;}
.divlist2 p:nth-child(2){font-size: 20px;padding-left: 10px;padding-bottom: 20px;}
.divlist2 p:last-child{font-size: 16px;color: #af1c40;padding-left: 10px;}
.divlist3{width: 100%;height: 60px;line-height: 60px;float: left;}
.divlist3 ul{width: 100%;height:60px;}
.divlist3 ul li{float: left;font-size: 22px;}
.divlist3 ul li:last-child{float: right;padding-right: 15%;}
.divlist3 ul li:first-child{padding-left: 15%;}
.divlist4{width: 100%;float: left;}
.divlist4 li img{width: 100%;}
#bgtop{position: fixed;right: 10px;bottom: 90px;z-index: 100;}
#bgtop img{width: 50px;}  
#tab{display: none;}
#bot{width: 100%;height: 70px;}
#bot ul{width: 100%;height: 70px;line-height:70px;background: #C9BC9C;float: left;position: fixed;bottom: 0;}
#bot ul li{width: 25%;text-align: center;float: left;font-size: 20px;}
#bot ul li:first-child{padding-top: 20px;}
#bot ul li:last-child{padding-top: 20px;}
#bot ul li:nth-child(2){background: red;}
#bot ul li:nth-child(3){background: black;}
#bot ul li a{color: #ffffff;}



</style>