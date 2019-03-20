<template>
  <div class="meau">
    <div  v-for="item of iconList" :key="item.id">
      <img :src="item.imgUrl"/>
      <div>
        <span>{{item.desc}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'BorrowIconse',
    props:['iconList']
  }
</script>

<style scoped>
  .meau {
    width: 3.75rem;
    display: flex;
    overflow-x: auto;
    padding-bottom: .3rem;
    background: #fff;
    margin-bottom: .1rem; }
  .meau div {
    width: 20%;
    margin-top: .2rem; }
  .meau div img {
    width: .45rem;
    height: .45rem;
    border-radius: 50%;
    margin: 0 auto; }
  .meau div div {
    text-align: center; }
  .meau div div span {
    display: block;
    font-size: 14px;
    width: .78rem;
    text-align: center;
    color: #666666; }
</style>
