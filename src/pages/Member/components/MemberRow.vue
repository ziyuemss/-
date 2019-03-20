<template>
  <div>
    <div class="row" v-for="item of rowList" :key="item.id">
      <img class="icon" :src="item.imgUrlA"/>
      <span>{{item.wordA}}</span>
      <div>{{item.wordB}}</div>
      <img class="jt" :src="item.imgUrl"/>
    </div>
  </div>

</template>

<script>
export default {
  name:'MemberRow',
  props:['rowList']
}
</script>

<style scoped>
  .row {
    width: 3.75rem;
    height: .6rem;
    display: flex;
    align-items: center;
    background: #fff;
    border-bottom: 1px solid #f6f6f6; }
  .row .icon {
    width: .24rem;
    height: .24rem;
    border-radius: 50%;
    margin: 0 .18rem; }
  .row span {
    font-size: 16px;
    color: #333;
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden; }
  .row div {
    font-size: 14px;
    color: #999;
    width: 2.2rem;
    text-align: right; }
  .row .jt {
    width: .07rem;
    height: .12rem;
    margin-left: .1rem; }
</style>
