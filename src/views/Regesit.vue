<template>
    <div class="person">
        <div class="index">
              <i class="fa fa-id-badge"></i>
              <input type="text" placeholder="点击输入手机号码" @blur='num' v-model="tel">
              <i class="fa fa-key"></i>
              <input type="password" placeholder="点击输入密码(至少6位)" v-model='pwd' :value='666666' @blur='word'>
              <input type="submit" value="下一步" class="next" @click="nexta">
        </div>
    </div>
</template>
<script>
/*      import Login from './Login'*/
    import Repwd from './Repwd'
      export default{
                         name:'regesit',
                         data(){
                              return {
                                        tel:'',
                                        pwd:'',
                                        isknow:false,
                                        ispwd:false,
                                        ccc:[],
                                      }
                                 },
                   methods:{
                          num(){
                                    if(!(/^1[3|4|5|7|8]\d{9}$/.test(this.tel))){
                                    console.log("手机号码有误，请重新输入");
                                  }else{
                                           this.isknow=true;
                                           localStorage.setItem('iphone',this.tel);
                                           console.log(this.tel)
                                           }
                                    console.log(localStorage.getItem('tel'))
                                    },

                        word(){
                                  if(/^.{6,}$/.test(this.pwd)){
                                   this.ispwd=true;
                                    console.log("密码正确");
                                 }else{
                                          this.ispwd=false;
                                          console.log("密码错误");
                                        }
                                },
                     /*验证下一步*/
                     nexta(){
                         if(this.isknow && this.ispwd){
                             var obj1={text:this.tel,password:this.pwd};
                             var ccc = JSON.parse(localStorage.getItem('tel'));
                                   if(!ccc){
                                              var ccc=[];
                                            }
                           /*把数组添加到对象里面*/
                                  ccc.unshift(obj1);
                           /*把添加进来的对象储存起来，把存储的对象转成字符串存在数组中*/
                                   localStorage.setItem('tel',JSON.stringify(ccc));
                                   console.log(JSON.parse(localStorage.getItem('tel')),ccc);
                                  /* this.$router.push({path:'/login',component:Login});*/
                                   this.$router.push({path:'/repwd',component:Repwd});
                               }else{
                                        alert('请正确输入');
                                     }
                     }


                   }

       }
</script>
<style>
  .person{width:100%;height:100%;background:url("../../static/img/img_login_bg.png") no-repeat;background-size:100% 100%;z-index:200;
            }
  .index{width: 80%;margin: 0 auto;padding-top: 230px;}
   input{text-indent: 20px;width:90%;height: 40px;display: block;margin: 5px auto}
   i{position: absolute;left:16%;margin-top:14px;font-size:16px;}
   #tab{display: none}

</style>
