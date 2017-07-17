<template xmlns:v-validate="http://www.w3.org/1999/xhtml">
  <div id="mine">
    <div class="wrap">
      <div class="loginInf">
         <i class="fa fa-id-badge"></i>
         <input type="text" placeholder="点击输入手机号码" id="tel" v-model="tel" @blur='tel'>
         <i class="fa fa-key"></i>
         <input type="text" placeholder="输入密码" id="password" v-model="password" @blur='word'>
        <div class="regesit">
            <span><router-link to="/regesit">立即注册</router-link></span>
            <span><router-link to="/findPassword">忘记密码</router-link></span>
        </div>
            <div class="btn"><input type="submit" value="登录" @click="go" /></div>
      </div>
    </div>
  </div>
</template>

<script>
       import Person from './Person'
  export default{
    name:'login',
       /*当用户进到登录页面的时候，先判断：
           1.当用户没有账号密码的时候：就让登录页面停留在当前就是不能跳到首页去
             （a.停留在当前页面
               b.点击注册可以前往注册页面）
          2.当用户有账号密码的时候（假定账号：admin 密码：888888）
               【1.如果账号密码一致，则登录成功跳转到首页
                2.如果账号密码不一致，则提示用户输入的有错，不能跳转，留在当前页
               】
             【有账号密码，可是忘记了密码】-------------【1.提示用户找回密码,即前往找回密码页面】
       */
          data(){
                  return{

                              tel:"",
                              password:"",
                              router:"",
                             /* login_a:[],*/
                              accout:'',
                              word:'',

                           }
                 },

                methods:{
                              tel(){
                                     if(!(/^1[3|4|5|7|8]\d{9}$/.test(this.tel))){
                                           console.log("手机号码有误，请重新输入")
                                          }else if(this.tel===''||this.password===''){
                                                  console.log("手机号不能为空");
                                        }else if(!(/^[0-9]\d{5}$/.test(this.password))){
                                                 console.log("您输入的密码有问题")
                                              }
                                    },
                                 go(){
                                          if(this.tel && this.password){
                                              this.$router.push({path:'/person',component:Person})
                                              console.log("正在前往个人中心页面");
                                       }


                         }
            }

     }

</script>

<style src="../../static/css/login.css" scoped></style>
<style scoped>
  span{display: block}
</style>



