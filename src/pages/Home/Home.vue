<template>
  <div class="indexs">
      <home-header></home-header>
    <div class="sections">
      <home-swiper></home-swiper>
      <home-icons :iconList="iconList"></home-icons>
      <home-section :title="title" :wordList="wordList"></home-section>
      <home-sectiont :title="title" :picList="picList"></home-sectiont>
      <home-section-bx :title="title" :imgList="imgList"></home-section-bx>
      <home-section-zc :title="title" :zcList="zcList"></home-section-zc>
      <home-bottom></home-bottom>
    </div>
      <home-footer></home-footer>
  </div>
</template>
<script>
  import HomeHeader from './components/Header.vue'
  import HomeSwiper from './components/Swiper.vue'
  import HomeIcons from './components/Icons.vue'
  import HomeSection from './components/Section.vue'
  import HomeSectiont from './components/SectionTwo.vue'
  import HomeSectionBx from './components/SectionBx.vue'
  import HomeSectionZc from './components/SectionZc.vue'
  import HomeBottom from './components/Bottom.vue'
  import HomeFooter from './components/HomeFooter'
  import axios from 'axios'
  export default {
    name:'Home',
    components:{
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeSection,
      HomeSectiont,
      HomeSectionBx,
      HomeSectionZc,
      HomeBottom,
      HomeFooter
    },
    data(){
      return{
        title:[],
        // bannerList:{}
        iconList:[],
        wordList:[],
        imgList:[],
        picList:[],
        zcList:[]
      }
    },
    methods:{
      getHomeInfo() {
        axios.get('/static/mock/index.json')
          .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res){
        res=res.data
        // console.log(res)
        if(res.data){
          const data=res.data
          this.title=data.title
          // this.bannerList=data.bannerList
          this.iconList=data.iconList
          this.wordList=data.wordList
          this.imgList=data.imgList
          this.picList=data.picList
          this.zcList=data.zcList
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
