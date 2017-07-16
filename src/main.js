// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//首字母大写
import Vue from 'vue'
import VueRouter from 'vue-router'
import  VueResource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import Home from './views/Home'
import Category from './views/Category'
import Mine from './views/Mine'
import Shopcar from './views/Shopcar'
import Produce from './views/Produce'
import PicTer1 from './views/PicTer1'
import Picter2 from './views/Picter2'
import Weibo from './views/Weibo'

Vue.config.productionTip = false;
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueAwesomeSwiper)

const routes = [
                 {path: '/home',component:Home},
                 {path: '/category',component:Category},
                 {path: '/shopcar',component:Shopcar},
                 {path: '/mine',component:Mine},
                 {path: '/produce',component:Produce},
                 {path: '/picTer1',component:PicTer1},
                 {path: '/picter2',component:Picter2},
                 {path: '/weibo',component:Weibo},
                ]
const router = new VueRouter({
            routes
          })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
