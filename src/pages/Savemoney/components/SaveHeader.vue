<template>
  <div class='header'>
    <img src="static/img/indJt.png"/>
    <h3>省钱</h3>
    <img src="static/img/indDian.png"/>
  </div>
</template>

<script>
  export default {
    name:'SaveHeader'
  }
</script>

<style scoped>
  .header {
    width: 3.75rem;
    height: .44rem;
    background: #fff;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e5e5e5; }
  .header img {
    width: .25rem;
    height: .25rem;
    margin: 0 .15rem; }
  .header h3 {
    font-size: 16px;
    padding: 0 1.14rem; }
</style>
