<template>
  <div class="car">
    <borrow-title :title="title[0]"></borrow-title>
    <div >
      <a href="##" v-for="item of havemoneyList" :key="item.id"><img :src="item.imgUrl"></a>

    </div>
  </div>
</template>

<script>
  import BorrowTitle from './BorrowTitle'
  export default {
    name:'BorrowHaveMoney',
    props:['title','havemoneyList'],
    components:{
      BorrowTitle
    }
  }
</script>

<style scoped>
  .car {
    width: 3.75rem;
    padding-top: 0.3rem;
    background: #fff;
    padding-bottom: .2rem; }
  .car h1 {
    font-size: 16px;
    background: url(../../../../static/img/title.png) no-repeat left center;
    background-size: .03rem .18rem;
    background-position: .15rem;
    padding-left: .25rem;
    margin-bottom: .24rem; }
  .car div {
    display: flex; }
  .car div a {
    display: block; }
  .car div a img {
    width: 1.875rem;
    height: 1.165rem; }
</style>
