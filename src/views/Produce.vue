<template>
	<div id="produce">
  		 <div class="topPicter">
		 	  <ul >
		 	  	    <li v-for="item in arr1">
		 	  	    	<router-link to = '/Allproduce'>
			 	  	   <img :src="item.logourl" />
			 	  	   <p>{{item.categName}}</p>
			 	  	   </router-link>
		 	  	   </li>
		 	  </ul>
		 </div>
		 
		 <div class="title1"><i class="fa fa-tree fa-lg"></i>超值精选</div>
	<!--产品内容-->	 
		<div class="picter1">
		 	  <ul >
		 	  	    <li v-for="item in arr2">			 	  	   	
			 	  	   <img :src="item.itemLogoUrl" />
			 	  	   <p>{{item.itemTitle}}</p>
			 	  	   <p>￥{{item.salePrice}}</p>
			 	  	   <p>{{item.country}}</p>
		 	  	   </li>
		 	  </ul>
		 </div> 
		 
		 
		 
		 
  </div>
</template>

<script>     
		export default {
		  name: 'produce',
		  data(){
		      return {
		          arr1:[],
		          arr2:[],
		      }
		  },
	//预加载	  
//		  created(){
//			        Indicator.open({
//			          text: '加载中...',
//			          spinnerType: 'fading-circle'
//			        });
//			    setTimeout(() =>{
//			      Indicator.close();
//			    },3000)
//			  },
//		  props:{
//		      message:[]
//		  },
		  
				mounted(){
							  	  this.$http.get('static/myin.json').then(function(res){
//							  	  	console.log(res)
							  	  	this.arr1 = res.body.data
//							  	  	console.log(this.arr1)
							 });
							  	  
							  	this.$http.get('static/buy.json').then(function(res){
//							  	  	console.log(res)
							  	  	this.arr2 = res.body.data.list
							  	    	console.log(res)
							 })
							  	  							  	  
					 }
		}
</script>

<style>
#produce{width: 100%;padding-bottom: 50px;position: absolute;}
.topPicter{width: 100%;height: 90px}	
.topPicter ul{width: 100%;height: 90px;overflow-x: scroll;overflow-y: hidden;display: flex;white-space:nowrap;}	
.topPicter ul li img{width: 45px;display: block;}	
.topPicter ul li{float: left;padding: 5px 15px;width: 77px;text-align: center;}	
.topPicter ul li p{padding-top: 5px;}	
.title1{width: 100%;height: 40px;line-height: 40px;font-size: 14px;background: #f4f4f4;}	
.title1 i{color: red;padding: 10px;}
.picter1{width: 100%;}
.picter1 ul{width: 100%;}
.picter1 ul li{width: 50%;float: left;position: relative;border: 1px solid #f8f8f8;}
.picter1 ul li img{width: 80%;}
.picter1 ul li p{overflow: hidden;text-overflow: ellipsis;white-space: nowrap;padding-left:10px;padding-bottom: 10px;}
.picter1 ul li p:nth-child(3){position: absolute;right: 10%;color: red;}	
	
</style>