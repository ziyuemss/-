<template>
  <div class="sectionbx">
    <home-title :titles="title[3]"></home-title>
    <home-pic-zc :zcList="zcList"></home-pic-zc>
  </div>
</template>

<script>
  import HomeTitle from "./Title"
  import HomePicZc from "./Piczc"
  export default {
    name: "HomeSectionZc",
    props:["title","zcList"],
    components: {
      HomeTitle,
      HomePicZc
    }
  }
</script>

<style scoped>
  .sectionbx {
    width: 100%;
    margin-bottom: .1rem;
    background: #fff; }
</style>
