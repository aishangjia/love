<template>
    <div id="wrap">
        <div class="con">
              <p><span>修改密码:</span><input type="text"/></p>
              <p><router-link to="address"><span>收货地址</span><input type="text"/></router-link></p>
              <p><span>服务条款</span><input type="text"/></p>
              <p><span>联系我们</span><input type="text"/></p>
             <router-link to="home"><input type="submit" value="退出登录"/></router-link>
        </div>
    </div>

</template>

<script>
     export default{
                name:"address",
             data(){
                      return{

                            }
                      }

          }
</script>

<style>
  #wrap{width:100%;height: 100%;border: 1px solid black}
  #wrap .con{width:100%;height:370px;margin:0 auto;}
  .con p{width:100%;display: inline-block}
  .con p span{ font-size:18px;
                  display:block;
                  width: 22%;
                  position: fixed;
                  margin-top:24px;
                  text-align: center;
              }
  input[type=text]{width:70%;height:40px;
                              margin-left:25%;
                              margin-top:20px;
                              display: inline;
                              border: 1px solid black;
                            }


  input[type = submit]{height:50px;background: black;color:white;font-size: 16px;
                         width:100%;margin-top:20px;border: none;}



</style>
