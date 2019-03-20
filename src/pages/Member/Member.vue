<template>
  <div class="indexs">
<member-header></member-header>
    <div class="sections">
      <member-geren-center></member-geren-center>
      <member-row :rowList="rowList"></member-row>
      <member-row-tow></member-row-tow>
      <member-row-three></member-row-three>
      <member-row-fore></member-row-fore>
    </div>
    <home-footer></home-footer>
  </div>
</template>
<script>
  import MemberHeader from './components/MemberHeader.vue'
  import MemberGerenCenter from './components/MemberGerenCenter.vue'
  import MemberRow from './components/MemberRow.vue'
  import MemberRowTow from './components/MemberRow2.vue'
  import MemberRowThree from './components/MemberRow3.vue'
  import MemberRowFore from './components/MemberRow4.vue'
  import axios from 'axios'
  import HomeFooter from "../Home/components/HomeFooter";
  export default {
    name:'Member',
    components:{
      HomeFooter,
      MemberHeader,
      MemberGerenCenter,
      MemberRow,
      MemberRowTow,
      MemberRowThree,
      MemberRowFore,
      HomeFooter
    },
    data(){
      return{
        rowList:[]
      }
    },
    methods:{
      getHomeInfo() {
        axios.get('/static/mock/Member.json')
          .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res){
        res=res.data
        // console.log(res)
        if(res.data){
          const data=res.data
          this.rowList=data.rowList
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
