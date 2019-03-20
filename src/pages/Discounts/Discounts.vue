<template>
  <div class="indexs">
    <div class="sections">
      <discounts-header></discounts-header>
      <discounts-banner></discounts-banner>
      <discounts-ji-jiang></discounts-ji-jiang>
      <discounts-li-ji :lijiList="lijiList"></discounts-li-ji>
      <discounts-footer></discounts-footer>
    </div>
    <home-footer></home-footer>
  </div>
</template>
<script>
  import DiscountsHeader from './components/DiscountsHeader.vue'
  import DiscountsJiJiang from './components/DiscountsJiJiang.vue'
  import DiscountsBanner from './components/DiscountsBanner.vue'
  import DiscountsLiJi from './components/DiscountsLiJi.vue'
  import DiscountsFooter from './components/DiscountsFooter.vue'
  import axios from 'axios'
  import HomeFooter from "../Home/components/HomeFooter";

  export default {
    name:'Discounts',
    components:{
      HomeFooter,
      DiscountsHeader,
      DiscountsBanner,
      DiscountsJiJiang,
      DiscountsLiJi,
      DiscountsFooter,
      HomeFooter
    },
    data(){
      return{
        lijiList:[]
      }
    },
    methods:{
      getHomeInfo() {
        axios.get('/static/mock/discounts.json')
          .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res){
        res=res.data
        // console.log(res)
        if(res.data){
          const data=res.data
          this.lijiList=data.lijiList
        }
      }
    },
    mounted(){
      this.getHomeInfo()
    }
  }
</script>
<style>
  html, body {
    height: 100%;
  }

  .indexs{
    display: -webkit-flex;
    flex-direction: column;
    height:100%;
  }
  .sections{
    overflow-y:auto;
    overflow-x:hidden;
    flex:1;
  }
</style>
