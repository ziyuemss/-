<template>
  <div class="meau">
    <div>
      <img src="static/img/indMeau1.png"/>
      <router-link to="Discounts">
        <div>
        <span>优惠券</span>
        <span>100-99劵</span>
      </div>
      </router-link>

    </div>
  <div v-for="item of iconList" :key="item.id">
    <img :src="item.imgUrl"/>
    <div>
      <span>{{item.desc}}</span>
    </div>
  </div>
  </div>
</template>

<script>
  export default{
    name:'HomeIconse',
    props:["iconList"]
  }
</script>

<style scoped>
  .meau {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: .2rem;
    background: #fff; }
  .meau div {
    width: 25%;
    margin-top: .2rem; }
  .meau div img {
    width: .44rem;
    height: .44rem;
    border-radius: 50%;
    margin: 0 auto; }
  .meau div div {
    text-align: center; }
  .meau div div .three {
    color: red; }
  .meau div div span {
    display: block;
    font-size: 14px;
    width: .93rem;
    text-align: center;
    color: #666666;
  overflow:hidden;
  white-space:nowrap;
  text-overflow:ellipsis;}
  .meau div div span:nth-child(2) {
    font-size: 10px;
    color: red;
    margin-top: .08rem; }
</style>
