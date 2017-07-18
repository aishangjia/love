<template xmlns:v-validate="http://www.w3.org/1999/xhtml">
  <div id="mine">
    <div class="wrap">
      <div class="loginInf">
         <i class="fa fa-id-badge"></i>
         <input type="text" placeholder="点击输入手机号码" id="tel" v-model="tel" @blur='telnum'>
         <i class="fa fa-key"></i>
         <input type="text" placeholder="输入密码" id="password" v-model="password" @blur='wordNum'>
                <div class="regesit">
                  <span><router-link to="/regesit">立即注册</router-link></span>
                  <span><router-link to="/findPassword">忘记密码</router-link></span>
                </div>
                <div class="btn"><input type="submit" value="登录" @click="go"/></div>
      </div>
    </div>
  </div>
</template>

<script>
       import Person from './Person'
  export default{
    name:'login',
              data(){
                      return{
                              tel:"",
                              password:"",
                              router:"",
                              word:''
                             }
                      },
                methods:{
                            telnum(){
                                     if(!(/^1[3|4|5|7|8]\d{9}$/.test(this.tel))){
                                           console.log("手机号码有误，请重新输入")
                                          }else if(this.tel===''||this.password===''){
                                                  console.log("不能为空，请重新输入");
                                         }else{
                                                   console.log("手机号输入正确");
                                                }
                                         },
                      wordNum(){
                                  if(!(/^[0-9]\d{5}$/.test(this.password))){
                                          console.log("您输入的密码有问题")
                                       }
                               },
                       go(){
                              if((/^1[3|4|5|7|8]\d{9}$/.test(this.tel)) && (this.password==="666666")){
                                        this.$router.push({path:'/person',component:Person})
                                        localStorage.setItem('itemId',this.tel);

                                        console.log("正在前往个人中心页面");
                                   }
                           }
                   }

              }

</script>

<style src="../../static/css/login.css" scoped></style>
<style scoped>
  span{display: block}
  #tab{display: none}
</style>



