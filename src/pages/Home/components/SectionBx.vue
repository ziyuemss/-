<template>
  <div class="sectionbx">
    <home-title :titles="title[2]"></home-title>
    <home-pichd :imgList="imgList"></home-pichd>
  </div>
</template>

<script>
  import HomeTitle from "./Title"
  import HomePichd from "./Pichd"
  export default {
    name: "HomeSectionBx",
    props:["title","imgList"],
    components: {
      HomeTitle,
      HomePichd
    }
  }
</script>

<style scoped>
  .sectionbx {
    width: 100%;
    margin-bottom: .1rem;
    background: #fff; }
</style>
