<template>
  <div class="title">
    <h1>{{titles}}</h1>
  </div>
</template>

<script>
  export default {
    name: "HomeTitle",
    props:["titles"]
  }

</script>

<style scoped>
  .title h1{
    font-size: 16px;
    text-align: center;
    margin-bottom:.15rem;
    padding-top:.2rem;
    color: #000;}
</style>
