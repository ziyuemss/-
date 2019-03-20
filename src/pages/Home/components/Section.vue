<template>
  <div class="section">
    <home-title :titles="title[0]"></home-title>
    <home-items :wordList="wordList"></home-items>
  </div>
</template>

<script>
  import HomeTitle from "./Title"
  import HomeItems from "./Items"
  export default {
    name: "HomeSection",
    props:['title','wordList'],
    components: {
      HomeTitle,
      HomeItems
    }
  }
</script>

<style scoped>
  .section {
    width: 100%;
    margin-bottom: .1rem;
    background: #fff; }
</style>
