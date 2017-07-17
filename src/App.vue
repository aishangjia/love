<template>
  <div id="app">
    <router-view></router-view>    
   <div id="tab">
        <ul>
             <li><router-link to="/home"><a href=""><i class="fa fa-home"></i>首页</a></router-link></li>
             <li><router-link to="/category"><a href=""><i class="fa fa-bars"></i>分类照片</a></router-link></li>
             <li><router-link to="/shopcar"><a href=""><i class="fa fa-shopping-cart"></i>购物     车</a></router-link></li>
             <li><router-link to="/mine"><a href=""><i class="fa fa-user"></i>我的</a></router-link></li>
        </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app'
}




</script>

<!--应用样式-->
<style src="./assets/reset.css"></style>
<style>
#app{
         font-family: 'Avenir', Helvetica, Arial, sans-serif;
         -webkit-font-smoothing: antialiased;
         -moz-osx-font-smoothing: grayscale;
         /*text-align: center;*/
         color: #2c3e50;
         /*  margin-top: 60px;*/
        }

#tab{width: 100%;height: 50px;background: lightgray;position: fixed;bottom: 0}
#tab ul{width: 100%;height:50px;}
#tab ul li{width: 25%;float: left;height: 50px;}
#tab ul li a{display: block;position: relative;width: 100%;height: 100%;padding-top: 15px;text-align: center;}
#tab ul li a .fa{position: absolute;top:-10px;left: 50%;margin-left: -8px;font-size: 20px;}
</style>
