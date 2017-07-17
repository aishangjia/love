// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import  VueResource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import Home from './views/Home'
import Category from './views/Category'
import Mine from './views/Mine'
import Regesit from './views/Regesit'
import Login from './views/Login'
import Repwd from './views/Repwd'
import FindPassword from './views/FindPassword'
import Person from './views/Person'
import Shopcar from './views/Shopcar'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import {Indicator} from 'mint-ui'
import { Field } from 'mint-ui'
import VeeValidate from 'vee-validate';
import Produce from './views/Produce'
import PicTer1 from './views/PicTer1'
import Picter2 from './views/Picter2'
import Weibo from './views/Weibo'
import One from './components/One'
import Two from './components/Two'
import Catedetail from './components/Catedetail'


   Vue.use(Mint)
   Vue.use(Indicator)
   Vue.config.productionTip = false
   Vue.use(VueRouter)
   Vue.use(VueResource)
   Vue.component(Field.name, Field)
   Vue.use(VueAwesomeSwiper)
   Vue.use(VeeValidate, config)
// Vue.use(Field)
const config = {
                  errorBagName: 'errors', // change if property conflicts.
                  fieldsBagName: 'fields',
                  delay: 0,
                  locale: 'en',
                  dictionary: null,
                  strict: true,
                  enableAutoClasses: false,
  classNames: {
                touched: 'touched', // the control has been blurred
                untouched: 'untouched', // the control hasn't been blurred
                valid: 'valid', // model is valid
                invalid: 'invalid', // model is invalid
                pristine: 'pristine', // control has not been interacted with
                dirty: 'dirty' // control has been interacted with
             },
            events: 'input|blur',
            inject: true
    };
const routes = [
                 {path: '/home',component:Home},
                 {path: '/category',component:Category,children:[
                   {path:'one',component:One},
                   {path:'two',component:Two},
                   {path:'catedetail',component:Catedetail}
                 ]},
                 {path: '/shopcar',component:Shopcar},
              /*   {path: '/mine',component:Mine},*/
                  {path:'/regesit',component:Regesit},
                  {path:'/repwd',component:Repwd},
                  {path:'/login',component:Login},
                  {path:'/findPassword',component:FindPassword},
                  {path:'/person',component:Person},
                  {path: '/',redirect: '/home'},
                 {path: '/produce',component:Produce},
                 {path: '/picTer1',component:PicTer1},
                 {path: '/picter2',component:Picter2},
                 {path: '/weibo',component:Weibo},
                ]
const router = new VueRouter({
                                 routes
                               })

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
