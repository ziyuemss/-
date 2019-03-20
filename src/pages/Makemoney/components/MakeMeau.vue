<template>
  <div class="bianlish">
    <h3></h3>
    <div>
      <a href="##" v-for="item of mmList" :key="item.id">
        <img :src="item.imgUrlA"/>
        <span>{{item.wordA}}</span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name:'MakeMeau',
    props:['mmList']
  }
</script>

<style scoped>
  .bianlish {
    width: 3.75rem;
    background: #fff;
    padding-bottom: .25rem; }
  .bianlish h3 {
    font-size: 16px;
    padding: .15rem .15rem; }
  .bianlish div {
    display: flex; }
  .bianlish div a {
    display: block;
    width: 20%; }
  .bianlish div a img {
    width: .45rem;
    height: .45rem;
    margin: 0 auto; }
  .bianlish div a span {
    color: #666;
    font-size: 12px;
    display: block;
    text-align: center;
    line-height: .35rem; }
</style>
