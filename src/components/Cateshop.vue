<template>
  <div id="cateshop">
    <p>wo</p>
  </div>

</template>
<script>
  export default
  {
      name:'Cateshop',
    data(){
      return{
       cateshop:{}

      }
    },

    mounted(){
      this.cateshop = JSON.parse(localStorage.getItem('cateshop'));
      console.log(8888);
      console.log(1800,this.cateshop);
      console.log(this.cateshop.shareId);
//      this.$http.get('https://h5api.zhefengle.cn/search/item_search_ext.html?secondCate='+this.catedetail.childCategoryId+'&maskKey='+this.catedetail.maskKey).then(function (res) {
//
//      })
    },methods: {

    }



  }
</script>
<style>
  #cateshop{
    position: absolute;top: 0;bottom: 0;left: 0;right: 0;z-index:100;background:#000000;
  }
</style>
