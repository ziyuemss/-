<template>

  <div class="swiper-container banner">
    <div class="swiper-wrapper">
      <div v-for="item of bannerList" :key="item.id" class="swiper-slide"><img :src="item.imgUrl"/></div>
      <!--<div class="swiper-slide"><img src="@/assets/img/indBanner2.png"/></div>-->
      <!--<div class="swiper-slide"><img src="@/assets/img/indBanner3.png"/></div>-->
      <!--<div class="swiper-slide"><img src="@/assets/img/indBanner4.png"/></div>-->
    </div>
    <!-- 如果需要分页器 -->
    <!--<div class="swiper-pagination"></div>-->
  </div>

</template>

<script>
  import Swiper from "swiper"
  import "swiper/dist/css/swiper.min.css"

  export default {
    name:'MakeBanner',
    data(){
      return {
        bannerList:[
          {
            id:'0001',
            imgUrl:'static/img/mm_Banner1.png',
          },
          {
            id:'0002',
            imgUrl:'static/img/mm_Banner2.png',
          },
          {
            id:'0003',
            imgUrl:'static/img/mm_Banner3.png',
          },
          {
            id:'0004',
            imgUrl:'static/img/mm_Banner4.png',
          }
        ]
      }
    },
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
  .banner {
    width: 3.75rem;
    height: 2rem; }
  .banner img {
    width: 3.75rem;
    height: 2rem; }
  swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
    bottom: -10px;
  }
</style>
