<template>
  <div class="bank">
    <h3>银行精选</h3>
    <div class="bx_meau">
      <a href="##" v-for="item of imgsList" :key="item.id">
        <img :src="item.imgUrl"/>
      </a>
    </div>
  </div>

</template>

<script>
  export default {
    name:"MakePicTwo",
    props:['imgsList']
  }
</script>

<style scoped>
  .bank{
    background:#fff;
  }
  h3 {
    font-size: 16px;
    /*padding: .1rem .1rem; */
    padding:.2rem;
  }
  .bx_meau {
    width: 3.75rem;
    display: -webkit-flex;
    overflow-x: auto;
    /*flex-shrink: 0;*/
    padding-bottom: .4rem; }
  .bx_meau a {
    display: block;
    margin: 0 .05rem; }
  .bx_meau a img {
    width: 1.25rem;
    height: 1.6rem; }
  .bx_meau a:nth-child(1) {
    margin-left: .2rem; }

</style>
