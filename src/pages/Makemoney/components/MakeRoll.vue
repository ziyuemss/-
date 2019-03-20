<template>
  <div class="roll">
    <div>
      <p class="num">
        6.00
        <span>%</span>
      </p>
      <p>历史年化收益率</p>
      <p>立即抢购<span></span></p>
    </div>
    <div>
      <marquee behavior="alternate" width="" height="150px" direction="up" scrollamount="3">
        <img src="static/img/mm_banner5.jpg"/>
        <img src="static/img/mm_bnner6.jpg"/>
        <img src="static/img/mm_bnner7.jpg"/>
        <img src="static/img/mm_banner5.jpg"/>
        <img src="static/img/mm_bnner6.jpg"/>
        <img src="static/img/mm_bnner7.jpg"/>
        <img src="static/img/mm_banner5.jpg"/>
        <img src="static/img/mm_bnner6.jpg"/>
        <img src="static/img/mm_bnner7.jpg"/>
      </marquee>
    </div>
  </div>
</template>

<script>
export default {
  name:"MakeRoll"
}
</script>

<style>
  .roll {
    width: 3.75rem;
    display: flex;
    padding-top: .2rem;
    padding-bottom: .15rem;
    background: #fff; }
  .roll div:nth-child(1) {
    width: 35%;
    height: .96rem;
    background: #ff6716;
    margin-left: .1rem; }
  .roll div:nth-child(1) p {
    font-size: 12px;
    color: #fff;
    padding-left: .14rem; }
  .roll div:nth-child(1) p span {
    font-size: 12px;
    font-weight: 100; }
  .roll div:nth-child(1) p:nth-child(2) {
    border-bottom: 1px solid #ff6b14;
    padding-bottom: .1rem; }
  .roll div:nth-child(1) .num {
    font-size: .3rem;
    font-family: DIN-Bold;
    font-weight: 600;
    padding-top: .1rem; }
  .roll div:nth-child(1) p:nth-child(3) span {
    margin-left: .1rem;
    display: inline-block;
    width: 0;
    height: 0;
    border: .05rem solid transparent;
    border-left-color: #fff; }
  .roll div:nth-child(2) {
    width: 2.2rem;
    height: .955rem;
    overflow: hidden;
    margin-left: .1rem; }
  .roll div:nth-child(2) img {
    width: 2.05rem;
    height: .955rem; }
  .roll div:nth-child(2) img marquee {
    banckground: red;
    width: 2.05rem;
    height: .955rem;
    overflow: hidden; }


</style>
