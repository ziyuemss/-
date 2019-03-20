<template>
  <div class="sj">
    <h3>赏金任务</h3>
    <div class="sj_meau">
      <div class="sj_two sj_one">
        <div>赚成长值</div>
        <div>提升会员等级</div>
        <div>
          <span></span>
        </div>
        <div>我的成长值</div>
      </div>
      <div class="sj_one" v-for="item of imgList" :key="item.id">
        <div>{{item.picA}}</div>
        <div>{{item.picB}}</div>
        <div>
          <img :src="item.picUrl"/>
          <span class="sp">{{item.picB}}</span>
        </div>
        <div>{{item.picD}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"MakeShangJin",
    props:['imgList']
  }
</script>

<style scoped>
  .sj{
    background:#fff;
  }
  .sj_meau {
    width: 3.75rem;
    display: -webkit-flex;
    overflow-x: auto;
    padding-bottom: .2rem;
    margin-top:.2rem;
  }
  h3 {
    font-size: 16px;
    /*padding: .1rem .1rem; */
    padding:.2rem .2rem 0 .2rem;
  }
  .sj_meau .sj_one {
    width: 1.55rem;
    height: 1.54rem;
    background: #ffcd39;
    border-radius: 5px;
    padding-bottom: .1rem;
    margin: 0 .06rem; }
  .sj_meau .sj_one div {
    font-size: 14px;
    color: #fff;
    margin-left: .16rem; }
  .sj_meau .sj_one div:nth-child(1) {
    padding-top: .2rem;
    line-height: .25rem; }
  .sj_meau .sj_one div:nth-child(3) {
    display: flex;
    margin: .16rem; }
  .sj_meau .sj_one div:nth-child(3) img {
    width: .2rem;
    height: .2rem;
    border-radius: 50%; }
  .sp{
    font-size:12px;
    width:0.8rem;
  }
  .sj_meau .sj_one div:nth-child(3) span {
    display: block; }
  .sj_meau .sj_one div:nth-child(4) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: .9rem;
    height: .3rem;
    border-radius: .14rem;
    background: #fff;
    color: #000;
    margin-right: .15rem; }
  .sj_meau .sj_two {
    margin-left: .2rem;
    background: #535b73; }
  .sj_meau .sj_two div:nth-child(3) {
    height: .21rem; }

</style>
