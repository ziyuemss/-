<template>
  <div class="lc_meau">
    <div class="lc_one" v-for="item of wordList" :key="item.id">
      <div>
        <span>{{item.wordA}}</span>
        <span>{{item.wordB}}</span>
      </div>
      <div>{{item.wordC}}</div>
      <div>{{item.wordD}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeItems",
    props:["wordList"]
  }
</script>

<style scoped>
.lc_meau {
    width: 3.75rem;
    display: flex;
  flex-wrap: wrap;
    border-bottom: 1px solid #eeeeee; }
.lc_meau .lc_one {
    width: 1.875rem;
    height: .68rem;
    flex-shrink: 0;
    border-right: 1px solid #eeeeee;
    box-sizing: border-box;
    margin-bottom: .1rem;
    margin-top: .2rem; }
.lc_meau .lc_one div:nth-child(1) {
    display: flex;
    margin-left: .18rem; }
   .lc_meau .lc_one div:nth-child(1) span {
    display: block; }
.lc_meau .lc_one div:nth-child(1) span:nth-child(1) {
    font-weight: 600;
    font-size: 12px; }
.lc_meau .lc_one div:nth-child(1) span:nth-child(2) {
    width: .7rem;
    height: .18rem;
    font-size: 10px;
    border: 1px solid red;
    margin-left: .06rem;
    color: red; }
   .lc_meau .lc_one div:nth-child(2) {
    font-size: 14px;
    margin-left: .18rem;
    font-weight: 600;
    color: red;
    line-height: .2rem; }
.lc_meau .lc_one div:nth-child(3) {
    font-size: 12px;
    margin-left: .18rem;
    color: #999999; }
</style>
