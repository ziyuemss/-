<template>
  <div class="footer">
    <h3>支付卡包</h3>
    <h3>我的优惠劵</h3>
  </div>
</template>

<script>
export default {
  name:'DiscountsFooter'
}
</script>

<style scoped>
  .footer {
    width: 3.75rem;
    height: .5rem;
    display: flex;
    align-items: center; }
  .footer h3 {
    font-size: 14px;
    color: #444444;
    padding: 0 .6rem; }
  .footer h3:nth-child(1) {
    border-right: 1px solid #e3e3e3; }
</style>
