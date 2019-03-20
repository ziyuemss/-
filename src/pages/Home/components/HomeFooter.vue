<template>
  <div class="footer">
    <router-link to="/home">
      <div><img src="static/img/f1.png" alt=""><span style="color: #2692ff;">首页</span></div>
    </router-link>
    <router-link to="/makemoney">
      <div><img src="static/img/f2.png" alt=""><span>赚钱</span></div>
    </router-link>
    <router-link to="Borrow">
      <div><img src="static/img/f3.png" alt=""><span>借钱</span></div>
    </router-link>
    <router-link to="Savemoney">
      <div><img src="static/img/f4.png" alt=""><span>省钱</span></div>
    </router-link>
    <router-link to="Member">
      <div><img src="static/img/f5.png" alt=""><span>金融会员</span></div>
    </router-link>




  </div>
</template>

<script>
  export default {
    name: "HomeFooter"
  }
</script>

<style scoped>
  .footer {
    width: 3.75rem;
    height: .5rem;
    display: -webkit-flex;
    border-top: 1px solid #b2b2b2;
    -webkit-align-items: center;
    background: #fff; }

  .footer a {
    width:20%;
    text-align: center;
  }

  .footer a img {
    width: .36rem;
    height: .31rem;
    margin: 0 auto; }

  .footer a span {
    display: block;
    font-size: 10px;
    color: #666666; }
</style>
