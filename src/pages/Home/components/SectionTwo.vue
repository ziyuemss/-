<template>
  <div class="sectiont">
    <home-title :titles="title[1]"></home-title>
    <home-pic :picList="picList"></home-pic>
  </div>
</template>

<script>
  import HomeTitle from "./Title"
  import HomePic from "./Pic"
  export default {
    name: "HomeSectiont",
    props:["title","picList"],
    components: {
      HomeTitle,
      HomePic
    }
  }
</script>

<style scoped>
  .sectiont {
    width: 100%;
    margin-bottom: .1rem;
    background: #fff; }
</style>
