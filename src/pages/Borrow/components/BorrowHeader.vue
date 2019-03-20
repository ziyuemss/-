<template>
  <div class="header">
    <a href="##"><img src="static/img/indJt.png"/></a>
    <h3>借钱</h3>
    <a href="##"><img src="static/img/indDian.png"/></a>
  </div>
</template>

<script>
  export default {
    name:'BorrowHeader'
  }
</script>

<style scoped>
  .header {
    width: 3.75rem;
    height: .45rem;
    display: flex;
    align-items: center;
    background: #fff;
    border-bottom: 1px solid #e5e5e5; }
  .header img, .header a {
    width: .25rem;
    height: .25rem;
    display: block; }
  .header a:nth-child(1) {
    margin-left: .14rem;
    margin-right: 1.2rem; }
  .header h3 {
    font-size: 16px;
    font-weight: 100;
    margin-right: 1.2rem; }
</style>
