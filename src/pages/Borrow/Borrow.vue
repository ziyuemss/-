<template>
  <div class="indexs">
    <borrow-header></borrow-header>
    <div class="sections">
      <borrow-banner-bg></borrow-banner-bg>
      <borrow-have-money :title="title" :havemoneyList="havemoneyList"></borrow-have-money>
      <borrow-iconse :iconList="iconList"></borrow-iconse>
      <borrow-bai-tiao :title="title" :btList="btList"></borrow-bai-tiao>
      <borrow-jin-pin :title="title" :jpList="jpList"></borrow-jin-pin>
    </div>
    <home-footer></home-footer>
  </div>
</template>
<script>
import BorrowHeader from './components/BorrowHeader.vue'
import BorrowBannerBg from './components/BorrowBannerBg.vue'
import BorrowHaveMoney from './components/BorrowHaveMoney.vue'
import BorrowIconse from './components/BorrowIcons.vue'
import BorrowBaiTiao from'./components/BorrowBaiTiao'
import BorrowJinPin from'./components/BorrowJinPin'
import HomeFooter from '../Home/components/HomeFooter'
import axios from 'axios'
  export default {
  name:'Borrow',
    components:{
    BorrowHeader,
    BorrowBannerBg,
    BorrowHaveMoney,
    BorrowIconse,
    BorrowBaiTiao,
    BorrowJinPin,
      HomeFooter

    },
    data(){
      return{
        title:[],
        iconList:[],
        havemoneyList:[],
        btList:[],
        jpList:[]
      }
    },
    methods:{
      getHomeInfo() {
        axios.get('/static/mock/borrow.json')
          .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res){
        res=res.data
        // console.log(res)
        if(res.data){
          const data=res.data
          this.title=data.title
          this.iconList=data.iconList
          this.havemoneyList=data.havemoneyList
          this.btList=data.btList
          this.jpList=data.jpList
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
