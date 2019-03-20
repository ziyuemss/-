<template>
  <div class="indexs">
<save-header></save-header>
    <div class="sections">
      <save-qian-dao></save-qian-dao>
      <save-banner></save-banner>
      <save-ling-juan></save-ling-juan>
      <savezhi-fu></savezhi-fu>
      <save-san-zhe></save-san-zhe>
      <save-bian-li :blList="blList"></save-bian-li>
      <save-bottom></save-bottom>
    </div>
    <home-footer></home-footer>
  </div>
</template>
<script>
  import SaveHeader from './components/SaveHeader.vue'
  import SaveQianDao from './components/SaveQianDao.vue'
  import SaveBanner from './components/SaveBanner.vue'
  import SaveLingJuan from './components/SaveLingJuan.vue'
  import SavezhiFu from './components/SavezhiFu.vue'
  import SaveSanZhe from './components/SaveSanZhe.vue'
  import SaveBianLi from './components/SaveBianLi.vue'
  import SaveBottom from './components/SaveBottom.vue'
  import axios from 'axios'
  import HomeFooter from "../Home/components/HomeFooter";
  export default {
    name:'Savemoney',
    components:{
      HomeFooter,
      SaveHeader,
      SaveQianDao,
      SaveBanner,
      SaveLingJuan,
      SavezhiFu,
      SaveSanZhe,
      SaveBianLi,
      SaveBottom,
      HomeFooter
    },
    data(){
      return{
        blList:[]
      }
    },
    methods:{
      getHomeInfo() {
        axios.get('/static/mock/Savemoney.json')
          .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res){
        res=res.data
        // console.log(res)
        if(res.data){
          const data=res.data
          this.blList=data.blList
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
