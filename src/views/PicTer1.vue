<template>
	<div id="picTer1">
		 	  <ul id="topPic">
		 	  	    <li v-for="item in arr1">			 	  	   	
			 	  	   <img :src="item.imgUrl" />			 	  	   
		 	  	   </li>
		 	  </ul>
		 	  
		 	<ul id="topPic">
		 	  	    <li v-for="item in arr2">			 	  	   	
			 	  	   <img :src="item.imgUrl" />			 	  	   
		 	  	   </li>
		 	  </ul> 
		<!--产品列表--> 
		 	<ul id="oul">
		 	  	    <li v-for="(item,index) in arr3">		
		 	  	    	<div class="img-at-left clear"  v-if="index % 2 == 0">
		 	  	    		<img :src="item.itemLogoUrl"  class="left"/>
				 	  	   <div class="right">
					 	  	   	<p>{{item.itemTitle}}</p>
					 	  	   <p>{{item.recommend}}</p>
					 	  	   <p>￥{{item.salePrice}}</p>				 	  	   				 	  	   	
					 	  	   <p><router-link to = '/Picter2'>立即购买</router-link></p>
					 	  	   	
				 	  	   </div>
		 	  	    	</div>
			 	  	   
			 	  	   <div class="img-at-right clear"  v-if="index % 2 == 1">
				 	  	   	<img :src="item.itemLogoUrl"  class="right"/>
				 	  	   	<div class="left">
					 	  	   		<p>{{item.itemTitle}}</p>
						 	  	   <p>{{item.recommend}}</p>
						 	  	   <p>￥{{item.salePrice}}</p>
						 	  	   <p ><router-link to = '/Picter2'>立即购买</router-link></p>
				 	  	   	</div>
			 	  	   </div>   				 	  	   
		 	  	   </li>		 	  	  		 	  	   
		 </ul> 	
		 
		 	<ul id="topPic2">
		 	  	    <li v-for="item in arr4">			 	  	   	
			 	  	   <img :src="item.imgUrl" />			 	  	   
		 	  	   </li>
		 	  </ul>
		 	  
		 	  <div class="producePic clear">
		 	  	    <ul >
		 	  	    	  <li v-for="item in arr5">
			 	  	    	  	<img :src="item.itemLogoUrl"  />
			 	  	    	  	 <p>{{item.itemTitle}}</p>
			 	  	    	  	 <p>￥{{item.salePrice}}</p>
		 	  	    	  </li>
		 	  	    </ul>
		 	  </div>
			  
		<!--回到顶部的标签-->	 
	<div id="bgtop" v-on:click="backTop"><img src="../assets/5.png"/></div>	 	  
		 	  
	</div>
</template>

<script>
	  export default{
	  	      name: 'picTer1',
//  回到顶部
    methods:{
    	backTop(){
    		$('body').animate({scrollTop:0},700)                       
    	},
    },	  	      
	  	      data(){
	  	      	 return{
	  	      	 	arr1:[],
	  	      	 	arr2:[],
	  	      	 	arr3:[],
	  	      	    arr4:[],
	  	      	    arr5:[],
	  	      	    aa:[],
	  	      	 }
	  	           
			localStorage.setItem('title','value1');
	  	      },
	  	      
	  	
			mounted(){				  	      	      					
				this.$http.get('static/picter1.json').then(function(res){
//					                console.log(res);
				      this.arr1 =  res.body.data.list[0].list
				      this.arr2 =  res.body.data.list[1].list
				      this.arr4 =  res.body.data.list[3].list
//				  	      	      	console.log(res);
				  	      	      	
				  this.$http.get('static/produce5.json').then(function(res){
//				  	              console.log(res);
				  	   this.arr3 =  res.body.data.list
				  	           console.log(this.arr3);
				  })
				  	      	      	
				  this.$http.get('static/produce6.json').then(function(res){
				  	              console.log(res);
				  	   this.arr5 =  res.body.data.list
				  	           console.log(this.arr5);
				  })	
				  
			 })
		}
			

	  }
</script>
         

<style>
#topPic{width: 100%;}	
#topPic li img{width: 100%;}	
#oul{width: 100%;}	
#oul li{width: 100%;height: 215px;}
#oul li > div{width: 100%;}
#oul li div img{width: 40%;padding-top: 23px;}
#oul li div div {width: 60%;height:215px;font-size: 16px;}
.left{float: left;padding-left: 20px;}
.right{float:right;padding-right: 10px;}
.clear:after{
	content: '.';
	visibility: hidden;
	overflow: hidden;
	height: 0;
	clear: both;
	display: block;
}

#oul li p:nth-child(2){font-size: 12px;color:#999999}	
#oul li p:nth-child(3){color: red;}
#oul li p:nth-child(4){background:#c9bc9c ;width: 100px;height: 30px;line-height: 30px;text-align: center;color: #fff;}
#oul li p:nth-child(4) a{color: #fff;}
#oul li:first-child .right p:first-child{padding-top: 35px;}
#oul li:nth-child(2) .left p:first-child{padding-top: 50px;}		
#oul li:nth-child(3) .right p:first-child{padding-top: 50px;}	
#oul li:nth-child(5) .right p:first-child{padding-top: 50px;}
#oul li:nth-child(6) .left p:first-child{padding-top: 50px;}
#oul li:nth-child(8) .left p:first-child{padding-top: 35px;}
#oul li:nth-child(9) .right p:first-child{padding-top: 35px;}
#oul li:nth-child(10) .left p:first-child{padding-top: 50px;}
#topPic2{width: 100%;}
#topPic2 li img{width: 100%;}
.producePic{width: 100%;margin-bottom: 50px;}
.producePic ul{width: 100%;}
.producePic ul li{width: 50%;float: left;font-size: 15px;border: 1px solid #eeeeee;}
.producePic ul li img{width: 100%;}
.producePic ul li p{overflow: hidden;text-overflow: ellipsis;white-space: nowrap; }
.producePic ul li p:last-child {color: red;}    
#bgtop{position: fixed;right: 10px;bottom: 60px;z-index: 100;}
#bgtop img{width: 50px;}    









</style>