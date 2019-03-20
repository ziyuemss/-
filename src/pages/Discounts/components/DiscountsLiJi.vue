<template>
  <div>
    <div class="juan" v-for="item of lijiList" :key="item.id">
      <img src="static/img/yhj_juan.png"/>
      <div>
        <p>{{item.wordA}}</p>
        <p>{{item.wordB}}</p>
        <p>{{item.wordC}}</p>
      </div>
      <div>
        <p>{{item.wordD}}</p>
        <p>{{item.wordE}}</p>
        <p></p>
      </div>
      <div id="lq">立即领取</div>
    </div>
  </div>


</template>

<script>
  export default {
    name:'DiscountsLiJi',
    props:['lijiList']
  }
</script>

<style scoped>
  .juan {
    width: 3.75rem;
    margin-top: .1rem;
    position: relative; }
  .juan img {
    width: 3.43rem;
    height: .8rem;
    margin: 0 auto; }
  .juan div:nth-child(2) {
    position: absolute;
    left: .25rem;
    top: .08rem; }
  .juan div:nth-child(2) p {
    font-size: 12px;
    color: #fff; }
  .juan div:nth-child(2) p:nth-child(1) {
    font-weight: 600;
    font-size: 16px; }
  .juan div:nth-child(3) {
    position: absolute;
    left: 1.25rem;
    top: .05rem; }
  .juan div:nth-child(3) p {
    font-size: 14px; }
  .juan div:nth-child(3) p:nth-child(3) {
    font-size: 14px;
    display: flex;
    margin-top: .13rem; }
  .juan div:nth-child(3) p:nth-child(3) span {
    text-align: center;
    line-height: .17rem;
    font-size: 14px;
    dispaly: block;
    width: .22rem;
    height: .17rem;
    background: #fff3ed;
    color: #f9706b; }
  .juan div:nth-child(3) p:nth-child(2) {
    color: #999;
    font-size: 12px;
    padding-top: .1rem; }
  .juan div:nth-child(4) {
    position: absolute;
    left: 3.3rem;
    top: .05rem;
    font-size: 12px;
    width: .1rem;
    color: #ffa89e; }
  .juan #lq {
    color: #ff513e; }

</style>
