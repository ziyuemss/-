<template>
  <div class="indexs">
<make-header></make-header>
    <div class="sections">
      <make-banner></make-banner>
      <make-meau :mmList="mmList"></make-meau>
      <make-roll></make-roll>
      <make-pic :picList="picList[0]"></make-pic>
      <make-shang-jin :imgList="imgList"></make-shang-jin>
      <make-pic :picList="picList[1]"></make-pic>
      <make-pic-two :imgsList="imgsList"></make-pic-two>
      <make-pic :picList="picList[2]"></make-pic>
      <make-pic-three :picsList="picsList"></make-pic-three>
      <make-bottom></make-bottom>
    </div>

    <home-footer></home-footer>
  </div>
</template>
<script>
  import MakeHeader from './components/MakeHeader.vue'
  import MakeBanner from './components/MakeBanner.vue'
  import MakeMeau from './components/MakeMeau.vue'
  import MakeRoll from './components/MakeRoll.vue'
  import MakePic from './components/MakePic.vue'
  import MakeShangJin from "./components/MakeShangJin.vue";
  import MakePicTwo from "./components/MakePicTwo.vue";
  import MakePicThree from "./components/MakePicThree.vue";
  import MakeBottom from "./components/MakeBottom.vue";
  import HomeFooter from "../Home/components/HomeFooter";
  import axios from 'axios'

  export default {
    name:'Makemoney',
    components:{
      MakeHeader,
      MakeBanner,
      MakeMeau,
      MakeRoll,
      MakePic,
      MakeShangJin,
      MakePicTwo,
      MakePicThree,
      MakeBottom,
      HomeFooter
    },
    data(){
      return{
        mmList:[],
        picList:[],
        imgList:[],
        imgsList:[],
        picsList:[]
      }
    },
    methods:{
      getHomeInfo() {
        axios.get('/static/mock/makemoney.json')
          .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res){
        res=res.data
        // console.log(res)
        if(res.data){
          const data=res.data
          this.mmList=data.mmList
          this.picList=data.picList
          this.imgList=data.imgList
          this.imgsList=data.imgsList
          this.picsList=data.picsList
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
