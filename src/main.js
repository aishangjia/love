// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import  VueResource from 'vue-resource'
import App from './App'
import Home from './views/Home'
import Category from './views/Category'
import Mine from './views/Mine'
import Shopcar from './views/Shopcar'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
                 {path: '/home',component:Home},
                 {path: '/category',component:Category},
                 {path: '/shopcar',component:Shopcar},
                 {path: '/mine',component:Mine},
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