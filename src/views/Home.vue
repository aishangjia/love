<template>
   <div id="home">
       <ul class='oul'>
            <li><img src="../assets/1.png"/></li>
            <li><i class="fa fa-search fa-lg"></i><span></span></li>
            <input type="text" name="">            
       </ul>
       
  <div class="center">
	    <swiper :options="swiperOption" ref="mySwiper">
		    <!-- slides -->
		    <swiper-slide><img src="../assets/2.png"/></swiper-slide>
		    <swiper-slide><img src="../assets/3.png"/></swiper-slide>
		    <swiper-slide><img src="../assets/4.png"/></swiper-slide>
		    <!-- Optional controls -->
		    <div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
		  
		  
		  <div class="oimg">
			  <div v-for="list in arr1">
	<!--在这里配了一个一级路由-->
			  	  
				  		 <ul class="ulLmg">
						  		 <router-link to='/produce'>
						  	    	 <li><img :src="list.logoImg" /></li>
						  	    	  <li>{{list.categName}}</li>   
					  			</router-link>  	
				  	   </ul>		
			   </div>
		 </div> 
		 <!--海拼团-->
		 <div class="haiGou">
		 	  <ul v-for="list in arr2">
		 	  	   <li>{{list.activityName}}</li>		 	  	   
		 	  	   <li>
		 	  	   	   <router-link to = '/picTer1'><img :src="list.bannerImg" /></router-link>
		 	  	   </li>
		 	  	   
		 	  </ul>
		 </div>
		 
		 <!--辣妈-->
		 	 <div class="mou">
		 	  <div v-for="list in arr3">
		 	  	   <li>{{list.activityName}}</li>
		 	  	   <li><img :src="list.bannerImg" /></li>
		 	  </div>
		 </div>
		 <!--横向滑动-->
		<div class="lateralSlide">
		 	  <ul>		 	  	 
		 	  	   <li v-for="list in arr4"><img :src="list.bannerImg" /></li>
		 	  </ul>
		 </div>
		 
		 <div class="picter">
		 	  <div v-for="list in arr5">
		 	  	   <li>{{list.activityName}}</li>
		 	  	   <li><img :src="list.bannerImg" /></li>
		 	  </div>
		 </div>
	<!--左右滑动-->
 		<div class="lateralSlide2">
		 	  <ul>		 	  	 
		 	  	   <li v-for="list in arr6">
		 	  	   	  <img :src="list.bannerImg" />
		 	  	   	  <p>￥{{list.price}}</p>
		 	  	   </li>
		 	  </ul>
        </div>
        
       <div class="cleanmen">
		 	  <ul >
		 	  	    <li v-for="list in arr7">
			 	  	   	<p>{{list.activityName}}</p>
			 	  	   <img :src="list.bannerImg" />
		 	  	   </li>
		 	  </ul>
		 </div>
		 
	<div class="produce1">
		 	  <ul >
		 	  	    <li v-for="item in obj1">			 	  	   	
			 	  	   <img :src="item.itemLogoUrl" />
			 	  	   <p>{{item.itemTitle}}</p>
			 	  	   <p>￥{{item.marketPrice}}</p>
			 	  	   <p>{{item.country}}</p>
		 	  	   </li>
		 	  </ul>
		 </div>
		 
		 <div class="produce2">
		 	  <ul >
		 	  	    <li v-for="item in obj2">			 	  	   	
			 	  	   <img :src="item.itemLogoUrl" />
			 	  	   <p>{{item.itemTitle}}</p>
			 	  	   <p>￥{{item.marketPrice}}</p>
			 	  	   <p>{{item.country}}</p>
		 	  	   </li>
		 	  </ul>
		 </div>
		 
		 <div class="produce3">
		 	  <ul >
		 	  	    <li v-for="item in obj3">			 	  	   	
			 	  	   <img :src="item.itemLogoUrl" />
			 	  	   <p>{{item.itemTitle}}</p>
			 	  	   <p>￥{{item.marketPrice}}</p>
			 	  	   <p>{{item.country}}</p>
		 	  	   </li>
		 	  </ul>
		 </div>
		 
		<div class="produce4">
		 	  <ul >
		 	  	    <li v-for="item in obj4">			 	  	   	
			 	  	   <img :src="item.itemLogoUrl" />
			 	  	   <p>{{item.itemTitle}}</p>
			 	  	   <p>￥{{item.marketPrice}}</p>
			 	  	   <p>{{item.country}}</p>
		 	  	   </li>
		 	  </ul>
		 </div>
	<!--回到顶部的标签-->	 
	<div id="bgtop" v-on:click="backTop"><img src="../assets/5.png"/></div>
		 
	  </div>
   </div>
   
   
</template>

<script>
//	轮播图插件
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
    name: 'home',
//  回到顶部
    methods:{
    	backTop(){
    		$('body').animate({scrollTop:0},700)                       
    	},
    },
    data() {
//  	jsonUrl:'https://m.asj.com/xy-marketing/api/activity/getHeadPageData?_t=1499761376350'
      return {
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
             arr1:[],
             arr2:[],
             arr3:[],
             arr4:[],
             arr5:[],
             arr6:[],
             arr7:[],
             obj1:[],
             obj2:[],
             obj3:[],
             obj4:[],
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
      
    
		     mounted(){
		       this.$http.get('static/home.json').then(function(res){	
		               this.arr1 = res.body.data.list[1].list;
		               this.arr2= res.body.data.list[2].list;
		               this.arr3= res.body.data.list[3].list;		               
		               this.arr4= res.body.data.list[8].list;
		               this.arr5= res.body.data.list[5].list;
		               this.arr6= res.body.data.list[4].list;
		               this.arr7= res.body.data.list[7].list;
		                      console.log(this.arr1)
		      })
		       
		       this.$http.get('static/produce.json').then(function(res){
//		            	console.log(res);
		            	this.obj1 = res.body.data.list;
//		            	console.log(this.obj1);
		       })

   		     this.$http.get('static/produce2.json').then(function(res){
//		            	console.log(res);
		            	this.obj2 = res.body.data.list;
//		            	console.log(this.obj2);
		       })  
		       
		   this.$http.get('static/produce3.json').then(function(res){
//		            	console.log(res);
		            	this.obj3 = res.body.data.list;
//		            	console.log(this.obj3);
		       }) 
		       
		    this.$http.get('static/produce4.json').then(function(res){
//		            	console.log(res);
		            	this.obj4 = res.body.data.list;
//		            	console.log(this.obj4);
		       }) 
   		       

		  }
     
  }
    
</script>

<!--<style src="http://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></style>-->
<style>
#home{width: 100%;height: 100%;}	
.center{width: 100%;position: absolute;top:0;padding-bottom: 50px;}	
.oul{width: 100%;height: 36px;line-height: 36px;border-bottom: 1px solid #ddd;position: fixed;z-index: 100;background: #fff;}
.oul li{float: left;}    
 .oul li img{width: 18px;height: 18px;vertical-align:middle;margin-left: 3%;} 
 .oul li:nth-child(2){position: absolute;left: 10%;z-index: 100;}
 input[type=text]{width: 90%;height: 24px;background: #e5e5e5;display: inline-block;position:relative;
             border-bottom-left-radius: 5%;border-bottom-right-radius: 5%;border-top-left-radius: 5%;        border-top-right-radius: 5%;margin-left: 3%;}
.oul li:nth-child(2) span{border-right: 1px solid black;margin-left: 10px;}
.swiper-container{padding-top: 36px;}
.swiper-slide img{width: 100%;height: 176px;display: block;}
.oimg{width: 100%;height: 188px;}
.ulLmg{width: 25%;float: left;padding: 3%;text-align: center;}    
.ulLmg li img{width: 70%;}
.haiGou{width: 100%;float: left;}
.haiGou img{width: 100%;}
.haiGou li:first-child{width:100%;height: 30px;line-height: 30px;border-top:3px solid #f2f2f2;}
.mou{width: 100%;float: left;}
.mou img{width: 100%;}
.mou li:first-child{width:100%;height: 30px;line-height: 30px;border-top:3px solid #f2f2f2;}
/*.lateralSlide{width: 100%;}*/
.lateralSlide ul{width: 100%;height:150px;overflow-x:scroll;overflow-y: hidden;display: flex;white-space:nowrap;}
.lateralSlide ul li{height: 90%;float: left;}
.lateralSlide ul li img{height: 100%;padding-left: 15px; display: block;}
.picter{width: 100%;}
.picter img{width: 100%;}
.picter li:first-child{width:100%;height: 30px;line-height: 30px;border-top:3px solid #f2f2f2;}
.lateralSlide2 ul{width: 100%;height:160px;overflow-x: scroll;overflow-y: hidden;display: flex;white-space:nowrap;border-bottom: 1px solid #ddd;position: relative;}
.lateralSlide2 ul li{height: 90%;float: left;}
.lateralSlide2 ul li img{height: 100%;padding-left: 15px; display: block;}
.lateralSlide2 ul li p{color: red;position: absolute;bottom:10px;padding-left: 18%;}
.cleanmen ul{width: 100%;}
.cleanmen ul li img{width: 100%;}
.cleanmen ul li p{width: 100%;height: 30px;line-height: 30px;font-size: 14px;}
.produce1{width: 100%;}
.produce1 ul{width: 100%;}
.produce1 ul li{width: 50%;float: left;position: relative;border: 1px solid #f8f8f8;}
.produce1 ul li img{width: 80%;}
.produce1 ul li p{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;padding-left:10px;padding-bottom: 10px;}
.produce1 ul li p:nth-child(3){position: absolute;right: 10%;color: red;}
.produce2{width: 100%;}
.produce2 ul{width: 100%;}
.produce2 ul li{width: 50%;float: left;position: relative;border: 1px solid #f8f8f8;}
.produce2 ul li img{width: 80%;}
.produce2 ul li p{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;padding-left:10px;padding-bottom: 10px;}
.produce2 ul li p:nth-child(3){position: absolute;right: 10%;color: red;}
.produce3{width: 100%;}
.produce3 ul{width: 100%;}
.produce3 ul li{width: 50%;float: left;position: relative;border: 1px solid #f8f8f8;}
.produce3 ul li img{width: 80%;}
.produce3 ul li p{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;padding-left:10px;padding-bottom: 10px;}
.produce3 ul li p:nth-child(3){position: absolute;right: 10%;color: red;}
.produce4{width: 100%;}
.produce4 ul{width: 100%;}
.produce4 ul li{width: 50%;float: left;position: relative;border: 1px solid #f8f8f8;}
.produce4 ul li img{width: 80%;}
.produce4 ul li p{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;padding-left:10px;padding-bottom: 10px;}
.produce4 ul li p:nth-child(3){position: absolute;right: 10%;color: red;}
#bgtop{position: fixed;right: 10px;bottom: 60px;z-index: 100;}
#bgtop img{width: 50px;}









</style>


