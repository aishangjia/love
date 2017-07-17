<template>
  <div class="forget">
      <div class="index">
         <i class="fa fa-id-badge"></i>
         <input type="text" placeholder="点击输入手机号码" @blur='num' v-model="tel">
         <i class="fa fa-key"></i>
         <input type="password" placeholder="点击输入密码(至少6位)" v-model='pwd' :value='666666' @blur='word'>
         <input type="submit" value="完成" class="next" @click="finish">
      </div>
  </div>

</template>

<script>
  import Person from './Person'
  export default{
                    name:"findpassword",
                      data(){
                               return{
                                        tel:'',
                                        num:'',
                                        pwd:'',
                                        word:'',
                                        over:"",
                                     }
                           },

                    methods:{
                                finish(){
                                if(!(/^1[3|4|5|7|8]\d{9}$/.test(this.tel))){
                                                 alert("手机号码有误，请重新输入");
                                          }else if(!(/^[0-9]\d{5}$/.test(this.pwd))){
                                                       alert("您输入的密码有问题")
                                                    }else if(this.tel===''||this.pwd===''){
                                                        console.log("手机号不能为空");
                                                  }
                                          else{
                                                  this.$router.push({path:'/person',component:Person})
                                                  console.log("找回密码成功，前往个人中心页面");
                                               }
                                       }
                               }

                   }

</script>

<style>
  .forget{width: 100%;height:800px;background: lightgrey}
  .index{width: 80%;margin: 0 auto;padding-top: 230px;position: fixed;left:10%}
  input{text-indent: 20px;width:90%;height: 40px;display: block;margin: 5px auto}
  i{position: absolute;left:10%;margin-top:16px;font-size:20px;}
   #tab{display: none}
</style>
