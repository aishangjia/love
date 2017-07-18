<template>
   <div class="box">
         <div class="head">
               <i class="fa fa-chevron-left"></i>
               <p>我的地址</p>
         </div>

        <div class="con">
              <div class="conList">
                  <img src="static/img/icona.png" alt="">
                  <p>你还没有添加收货地址哦~</p>
              </div>
         </div>

          <div class="buttom"><input type="button" value="+添加新地址"></div>
     </div>

</template>

<script>

</script>

<style>
   .box{width: 100%;height: 100%;background:#f4f4f4;}
   .head{width: 100%;height:40px;background:#ffffff}
   .head i{font-size: 20px;margin:6px 14px 12px 14px;}
   .head p{line-height:40px;font-size: 20px;display: inline-block;margin-left:30%;}

    .con{width: 100%;height: 80%;}
    .conList{padding-top:20%;}
    .conList  img{width:160px;height:160px;display: block;margin: 0 auto;}
    .conList p{text-align: center;font-size: 16px;margin-top: 10px;}
     .buttom{width: 100%;height: 54px;position:fixed;bottom:0}
     .buttom input[type=button]{width:100%;height:34px;
                                  background:black;
                                  color:white;
                                  border:none;
                                  margin:8px 0;
                                  font-size: 16px;
                                }

  #tab{display: none}
</style>
