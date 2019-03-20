<template>
  <div>
    <borrow-title :title="title[2]"></borrow-title>
    <div class="jphd car">
      <div class="jp_meau">
        <img v-for="item of jpList" :key="item.id" :src="item.imgUrl"/>
      </div>
    </div>
  </div>

</template>

<script>
  import BorrowTitle from "./BorrowTitle";
  export default {
    name:'BorrowJinPin',
    props:['title','jpList'],
    components:{
      BorrowTitle
    }
  }
</script>

<style scoped>
  .jphd {
    width: 100%; }
  .jphd .jp_meau img {
    width: 3.65rem;
    height: 1.32rem; }
</style>
