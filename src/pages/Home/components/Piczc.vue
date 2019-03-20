<template>
  <div class="bx_meau">
    <a href="##" v-for="item of zcList" :key="item.id">
      <img :src="item.imgUrl"/>
    </a>
  </div>
</template>

<script>
  export default {
    name:"HomePicZc",
    props:['zcList']
  }
</script>

<style scoped>
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
