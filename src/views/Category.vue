<template>
  <div id="category">
 <div class="search-form">
   <form class="search-dec">
     <i class="fa fa-search"></i>
     <input type="text"placeholder="搜索类别,品牌,关键字"/>
     <span class="search-sp">×</span>
   </form>
 </div>
    <div class="hot-search">
    <p class="index-search-title">热门搜索</p>
    <ul class="ul-se">
      <li v-for="item in arr1">{{item}}</li>
    </ul>
  </div>
    <div class="tab-main">
      <ul class="tab-main-list">
        <li><a href="javascript:void(0)"@click="cate()":class="[style1]">分类</a></li>
        <li><a href="javascript:void(0)"@click="pingpai()":class="[style2]">品牌</a></li>
        <li><a href="javascript:void(0)"@click="guawan()":class="[style3]">官网</a></li>
      </ul>
    </div>
    <div class="mainconten"v-show="ca1">
    <div class="tab-left">
      <ul class="tab-left-list">
        <li @click="recommend()":class="[style]">为你推荐</li>
        <li v-for="(item2,$index) in arr2"@click="show(item2.name,$index)":class="{'active':ind === $index}">
          {{item2.name}}
        </li>
      </ul>
    </div>
    <div class="tab-right">
      <ul class="tab-right-list">
        <li v-for="item3 in arr3">
          <div class="clear"></div>
          <img :src="item3.img"v-show="a1">
          <div class="tabconterhd" v-show="a2">
            <p><i></i>{{item3.name}}<span>更多</span></p>
          </div>

        <div v-for="arr in item3.childCategories"class="tab-right-main">
          <div @click="jump2catedetail(arr)">
           <img :src="arr.img">
           <p>{{arr.name}}</p>
          </div>
        </div>

          <!--<router-view></router-view>-->
        </li>
      </ul>
    </div>

    </div>
    <div id="guanwang"v-show="ca3">
      <div class="header">
        <router-link to="/category/two"><button>全部官网</button></router-link>
      </div>
      <div class="main">
        <div class="mainconter"v-for="item5 in arr5">
          <div class="clear"></div>
          <p>{{item5.name}}</p>
          <div class="clear"></div>
          <div v-for="item in item5.simpleShoplist"class="m2">
            <div class="clear"></div>
            <img :src="item.shopImg"></img>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <div id="catepingpai"v-show="ca2">
      <div class="header">
        <router-link to="/category/one"><button>全部品牌</button></router-link>
      </div>

      <div class="main">
        <div class="mainconter"v-for="item5 in arr2">
          <div class="clear"></div>
          <p>{{item5.name}}</p>
          <div class="clear"></div>
          <div v-for="item in item5.simpleBrandList"class="m2">
            <div class="clear"></div>
            <img v-lazy="item.brandImg"></img>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>

  </div>
</template>

<script>
  import Catepingpai from '../components/Catepingpai'
  export default{
    name: 'category',
    data () {

      return {
          ca1:true,
          ca2:false,
        ca3:false,
          a1:true,
           a2:false,
        style:'changes',
        style1:'cat1',
        style2:'',
        style3:'',
        ind:'',
        arr1:[],
        arr2:[],
        arr3:[],
        arr4:[],
        arr5:[],

      }
    },
    components: {
      Catepingpai
    },
    mounted(){
      this.$http.get('static/json/categorylist.json')
        .then(function (res) {
            this.arr1 = res.body.model;

        })
      this.$http.get('static/json/category.json')
        .then(function (data) {
            this.arr4 = data;
           this.arr2 = data.body.model.aggregationBrands;
            this.arr3 = data.body.model.aggregationCategories[0].categories;
            this.arr5 = data.body.model.aggregationShops;
        })


    },
    methods:{
        jump2catedetail:function (obj) {
          localStorage.setItem('catedetail',JSON.stringify(obj));
          console.log(140,obj)
          this.$router.push('/category/catedetail');

        },
        show:function (a,i) {
          for(var j=0;j<this.arr4.body.model.aggregationCategories.length;j++)
         {
             if (a==this.arr4.body.model.aggregationCategories[j].name)
             {
               this.arr3 = this.arr4.body.model.aggregationCategories[j].categories
             }
         }
         this.ind = i;
         this.style = false;
          this.a1 = false;
          this.a2 = true;
        },
      recommend:function () {
          this.arr3 = this.arr4.body.model.aggregationCategories[0].categories;
          this.style='changes';
          this.ind = '';
          this.a1 = true;
          this.a2 = false;
          },
            cate:function () {
            this.style1 = 'cat1';
            this.style2 = false;
            this.style3 = false;
            this.ca1 = true;
              this.ca2 = false;
              this.ca3 = false;
           },pingpai:function () {
                this.style2 = 'cat2';
                 this.style1 = false;
                this.style3 = false;
              this.ca1 = false;
              this.ca2 = true;
              this.ca3 = false
            },guawan:function () {
                this.style3 = 'cat3';
                this.style1 = false;
             this.style2 = false;
        this.ca1 = false;
        this.ca2 = false;
        this.ca3 = true;
      }

    }


    }



</script>

<style scoped>
  .search-form{width: 100%; height: 63px;padding:14.4px;}
  .search-dec{width: 100%;height: 100%;position: relative;}
  .search-form input{width: 100%;height: 100%;outline: none;border: none;background: #f4f4f4;padding-left: 50px;color: #000;font-size:12px;}
  .search-dec .fa{position: absolute;font-size: 20px;top:8px;left: 20px;}
  .search-sp{display: inline-block;width: 15px;height: 15px;border-radius: 50%;background:#9e9e9e;opacity:0.4;color: #fff;font-size: 15px;position: absolute;top:12px;right:25px;text-align: center;
  }
  .index-search-title{width: 100%;padding: 5px 9.6px;text-align: left;height:30px;color: #333;
    font-size:14px;line-height: 20px;}
  .hot-search{display: none;}
  .ul-se{padding: 5px 9.6px;width: 100%;}
  .ul-se li{float: left;height:28px;line-height: 28px;text-align: center;margin: 4.8px  9.6px 4.8px 0;
  border:1px solid #f5f5f5;}
  .mainconten{width: 100%;position: absolute;top: 101px;bottom: 50px;overflow-y: auto;}
  .tab-main{width: 100%;padding: 0 54px;height: 38px;border-bottom: 1px solid #f2f2f2;}
  .tab-main-list{width: 100%;height: 38px;}
  .tab-main-list li{width: 33%;height: 100%;line-height: 38px;padding: 0 10px;text-align: center;float: left;}
  .tab-main-list li a{display: block;width: 100%;height: 100%;font-size: 14px;}
  .tab-left{width:25%;float:left;height: 100%;overflow-y: auto;}
  .tabconterhd{width: 100%;height: 16px;padding:0 4%;margin-bottom: 10px;margin-top: 10px;}
  .tabconterhd i{display: inline-block;width: 2px;height: 13px;background-color: #000;vertical-align: middle;margin-right:5px;}
  .tabconterhd p{text-align: left;font-size: 14px;color:#262626;height: 16px;}
  .tabconterhd span{float:right;}
  .cat1{color: red;border-bottom: 1px solid red;}
  .cat2{color: red;border-bottom: 1px solid red;}
  .cat3{color: red;border-bottom: 1px solid red;}
  .changes{background-color:#FFF;color: red;}
  .active{background-color:#FFF;color: red;}
  .tab-left .tab-left-list{width: 100%;background: #f2f2f2;}
  .tab-left .tab-left-list li{height: 60px;width: 100%;text-align: center;line-height: 60px;}
  .tab-right{width:75%;float: right;height: 100%;overflow-y: auto;}
  .tab-right-list li .tab-right-main img{border: 1px solid #DDD;}
  .clear{ clear:both}
  .tab-right-list li:nth-of-type(1) .tab-right-main img{border:none;}
  .tab-right-list li img{width:100%;}
  .tab-right-main{width:30%;margin-right: 3%;float: left;}
  .tab-right-main p{line-height: 16px;height: 32px;font-size: 14px;color: #666;text-align: center }
  #catepingpai{  position: absolute;top:101px;bottom:50px;width: 100%;background:
    #eee;overflow-y: auto}
  .header{height: 54px;width: 100%;padding:8px 5%;}
  .header button{width: 100%;height: 100%;background: #000000;color: #fff;border:none;}
  .mainconter{width: 100%;}
  .mainconter p{width: 100%;height: 30px;line-height: 30px;text-align: center}
  .mainconter .m2{width: 25%;float: left}
  .clear{clear:both;}
  .mainconter .m2 img{width: 100%}
  #guanwang{  position: absolute;top:101px;bottom:50px;width: 100%;background:
    #eee;overflow-y: auto}







</style>
