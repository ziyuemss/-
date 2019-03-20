<template>
  <div class="qiandao">
    <div>
      <img src="static/img/sq_tx.png"/>
      <div>金融会员</div>
    </div>
    <div>
      <ul>
        <li>
          <h3>任务</h3>
          <p>0</p>
        </li>
        <li>
          <h3>账单</h3>
          <p>0</p>
        </li>
        <li>
          <h3>卡券</h3>
          <p>0</p>
        </li>
      </ul>
    </div>
    <div>
      <img src="static/img/sq-sign01.png"/>
    </div>
  </div>
</template>

<script>
  export default {
    name:'SaveQianDao'
  }
</script>

<style scoped>
  .qiandao {
    width: 3.75rem;
    height: .7rem;
    background: #fff;
    display: flex; }
  .qiandao div:nth-child(1) {
    margin-left: .25rem; }
  .qiandao div:nth-child(1) img {
    width: .5rem;
    height: .5rem;
    border-radius: 50%; }
  .qiandao div:nth-child(1) div {
    font-size: .1rem;
    color: #794b02;
    background: #e0b777;
    width: .6rem;
    height: .18rem;
    border-radius: .1rem;
    display: flex;
    align-items: center;
    justify-content: center; }
  .qiandao div:nth-child(2) {
    display: flex;
    align-items: center; }
  .qiandao div:nth-child(2) ul {
    display: flex;
    margin-right: .62rem; }
  .qiandao div:nth-child(2) ul li {
    padding: 0 .12rem; }
  .qiandao div:nth-child(2) ul li h3 {
    font-size: .1rem;
    text-align: left; }
  .qiandao div:nth-child(2) ul li p {
    font-family: DIN-Medium;
    font-size: .23rem;
    color: #b67e38;
    text-align: left; }
  .qiandao div:nth-child(3) img {
    width: .725rem;
    height: .68rem;
    background-size: contain; }

</style>
