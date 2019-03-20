<template>
  <div class="licai">
    <borrow-title :title="title[1]"></borrow-title>
    <div class="lc_meau">
      <img v-for="item of btList" :key="item.id" :src="item.imgUrl"/>
      <span >小白信用</span>
      <a href="##">登录查看</a>
    </div>
  </div>

</template>

<script>
  import BorrowTitle from "./BorrowTitle";
  export default {
    name:'BorrowBaiTiao',
    props:['title','btList'],
    components:{
      BorrowTitle
    }
  }
</script>

<style scoped>
  .licai {
    width: 3.75rem;
    margin-bottom: .1rem;
    background: #fff;
    padding-top: .2rem;
    padding-bottom: .1rem; }
  .licai .lc_meau {
    width: 100%;
    display: flex;
    border-bottom: 1px solid #eeeeee;
    position: relative; }
  .licai .lc_meau img:nth-child(1) {
    width: 2.34rem;
    height: 1.57rem;
    margin-left: .08rem; }
  .licai .lc_meau img:nth-child(2) {
    width: 1.29rem;
    height: 1.57rem; }
  .licai .lc_meau span {
    display: flex;
    font-size: 12px;
    color: #ffeac9;
    position: absolute;
    top: .5rem;
    left: 2.8rem; }
  .licai .lc_meau a {
    display: block;
    font-size: 12px;
    color: #ae8339;
    position: absolute;
    top: 1.04rem;
    left: 2.8rem; }
</style>
