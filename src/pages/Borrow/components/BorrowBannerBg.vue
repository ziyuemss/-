<template>
  <div class="bannerBg">
    <div class="pic">
      <img src="static/img/goldCard.png">
    </div>
    <div class="cardDw">
      <p>最高可惜</p>
      <p>￥ 300,000</p>
      <p>立即登录</p>
    </div>
    <div class="banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><img src="static/img/jq-banner1.png"/></div>
          <div class="swiper-slide"><img src="static/img/jq-banner2.png"/></div>
          <div class="swiper-slide"><img src="static/img/jq-banner3.png"/></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper"
  import "swiper/dist/css/swiper.min.css"

  export default {
    name:'BorrowBannerBg',
    methods: {
      _initswiper(){
        var mySwiper = new Swiper ('.swiper-container', {
          direction: 'horizontal', // 垂直切换选项
          // effect : 'fade',
          loop: true, // 循环模式选项

          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          }
        })
      }
    },
    mounted() {
      this._initswiper()
    },
  }

</script>

<style scoped>
  .bannerBg {
    width: 3.75rem;
    height: 3.2rem;
    background: url(../../../../static/img/jqBg.jpg) no-repeat top;
    background-size: 3.75rem 2.95rem;
    position: relative;
    }
  .bannerBg .pic {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 2.055rem;
    margin-bottom: .25rem; }
  .bannerBg .pic img {
    width: 3.475rem;
    height: 2.055rem;
    margin-top: .5rem; }
  .bannerBg .cardDw {
    position: absolute;
    top: .5rem;
    left: .5rem; }
  .bannerBg .cardDw p {
    font-size: 14px;
    color: #fff; }
  .bannerBg .cardDw p:nth-child(1) {
    letter-spacing: .03rem; }
  .bannerBg .cardDw p:nth-child(2) {
    font-weight: 600;
    font-size: .3rem;
    margin: .1rem 0; }
  .bannerBg .cardDw p:nth-child(3) {
    width: 1.03rem;
    height: .34rem;
    background: #fd7610;
    border-radius: .17rem;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: .03rem;
    box-shadow: 1px 3px 5px #da2115; }
  .bannerBg .banner {
    width: 100%;
    height: 2rem; }
  .bannerBg .banner img {
    width: 100%;
    height: .9rem; }
  .bannerBg .banner .swiper-container-horizontal >>>.swiper-pagination-bullets .swiper-pagination-bullet {
    margin: -.28rem 2px;
    width: 5px;
    height: 5px; }
</style>
