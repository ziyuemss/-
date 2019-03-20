<template>
  <div class="geren_center">
    <div>
      <img src="static/img/jrhy_tx.png"/>
      <div>
        <p>jd_183299czo</p>
        <p>jd_183299czo</p>
      </div>
    </div>
    <div>会员福利</div>
    <img src="static/img/jrhy_jt.png"/>
  </div>
</template>

<script>
export  default {
  name:'MemberGerenCenter'
}
</script>

<style scoped>
  .geren_center {
    width: 3.75rem;
    height: .7rem;
    background: #fff;
    display: flex;
    align-items: center;
    margin-bottom: .1rem; }
  .geren_center div:nth-child(1) {
    display: flex;
    margin-right: .95rem; }
  .geren_center div:nth-child(1) img {
    width: .5rem;
    height: .5rem;
    border-radius: 50%;
    margin-left: .15rem; }
  .geren_center div:nth-child(1) div {
    margin-left: .15rem; }
  .geren_center div:nth-child(1) div p:nth-child(1) {
    font-size: 16px;
    color: #333;
    height: .13rem;
    line-height: .115rem;
    margin-top: .07rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-bottom: .08rem; }
  .geren_center div:nth-child(1) div p:nth-child(2) {
    font-size: 14px;
    height: .13rem;
    line-height: .1rem;
    color: #999;
    margin-top: 4px;
    overflow: hidden; }
  .geren_center div:nth-child(2) {
    font-size: 14px;
    color: #999;
    margin-right: .1rem; }
  .geren_center img {
    width: .07rem;
    height: .12rem; }
</style>
