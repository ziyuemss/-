<template>
  <div class='header'>
    <h3>精选</h3>
    <div></div>
    <h3>全部</h3>
    <div></div>
  </div>
</template>

<script>
export default {
  name:'DiscountsHeader'
}
</script>

<style scoped>
  .header {
    width: 3.75rem;
    height: .55em;
    background: #fff;
    display: flex;
    align-items: center; }
  .header h3 {
    font-size: 16px;
    color: #666; }
  .header h3:nth-child(1) {
    margin-left: .72rem; }
  .header div {
    margin-left: .03rem;
    width: 2px;
    height: 3px;
    border-style: solid;
    border-width: 3px 3px 0px;
    border-color: #999999 transparent; }
  .header div:nth-child(2) {
    margin-right: 1.45rem; }
</style>
