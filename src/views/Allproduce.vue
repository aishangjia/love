<template>
      <div id="allproduce">
                   <ul class="divOul">
                         <li v-for='item in obj1'>
                         	    <img :src="item.itemLogoUrl"/>
                         	    <p>{{item.itemTitle}}</p>
                         	    <p>￥{{item.salePrice}} </p> 
                         	    <p>{{item.country}}</p>
                         </li>
                   </ul>
             
      
      
      </div>
</template>

<script>
	 export default{
	 	 name:'allproduce',
	 	 data(){
	 	 	return{
	 	 		     obj1:[],
	 	 	}
	 	 }, 
	 	  mounted(){
	 	  	  this.$http.get('static/produce7.json').then(function(res){
	 	  	  	            console.log(res)
	 	  	  	         this.obj1 = res.body.data.list
	 	  	  	           console.log(this.obj1)
	 	  	  })
	 	  }
	 }
</script>

<style>
 #allproduce{width: 100%;height: 100%;overflow: hidden;}
.divOul{width: 100%;height: 100%;}
.divOul li{width: 50%;height:275px;float: left;border: 1px solid #f8f8f8;position: relative;}
.divOul li img{width: 100%;float: left;}
.divOul li p:nth-child(3){position: absolute;bottom: 10px;color: red;}
.divOul li p:nth-child(4){position: absolute;bottom: 10px;right: 10px;}
</style>
