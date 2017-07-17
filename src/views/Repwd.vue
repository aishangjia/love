<template>
    <div id="xinxi">
       <mt-field label="密码" placeholder="请设置新密码（6-16位）" v-model="npwd" state="error"></mt-field>
       <mt-field label="密码" placeholder="请再次确认输入密码"  v-model="password" state="error"></mt-field>
       <mt-checklist v-model="server" :options="['爱尚家服务条款']"></mt-checklist>
       <mt-button size="large" @click="over">完成</mt-button>
    </div>
</template>

<script>
 /* import Mint from 'mint-ui'
  import 'mint-ui/lib/style.css'*/
  import Vue from 'vue'
  import { Field } from 'mint-ui'
  import { Checklist } from 'mint-ui'
/*  Vue.component(Checklist.name, Checklist)*/
  import Login from './Login'

  export default{
    name:'finish',
    data(){
            return {
                      npwd:'',
                      password:'',
                      server:"",
                      options:'',
                      state:"error"
                    }
         },
    /*注册组件*/
    components:{

               },
    methods:{
               over(){
                        if(this.npwd === this.password){
                               this.state="success";
                               this.$router.push({path:'/login',component:Login})
                        }else if(this.npwd === null){
                                          alert("不能为空，请重新输入");
                                      }
                        else{
                                 alert("两次输入的密码不一致，请重新输入");
                               }
                     },

              }

            }
</script>
<style scoped>
    #xinxi{width: 100%;margin-top: 130px;}
</style>

