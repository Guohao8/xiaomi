<template>
  <div class="index">
    <div class="container">
      <div class="swiper-box">
        <swiper :options="swiperOptions">
          <swiper-slide v-for="item in slideList" :key="item.id">
            <a :href="'/prouct/'+item.id" ><img :src="item.img"/></a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="ads-box"></div>
      <div class="banner-box"></div>
      <div class="product-box"></div>
    </div>
  </div>
</template>

<script>
import ServiceBar from 'components/service/ServiceBar'
import { swiper, swiperSlide  } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name:'Index',
  components:{
    swiper,
    ServiceBar,
    swiperSlide,
  },
  data(){
    return {
      swiperOptions:{
        autoplay: true,
        loop: true,
        effect : 'fade',
        fadeEffect: {
          crossFade: true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable : true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
      slideList:[
        {
          id : '42',
          img : '~assets/img/imgs/slider/silde-1.jpg'
        },
        {
          id : '45',
          img : '~assets/img/imgs/slider/silde-2.jpg'
        },
        {
          id : '46',
          img : '~assets/img/imgs/slider/silde-3.jpg'
        },
        {
          id : '',
          img : '~assets/img/imgs/slider/silde-4.jpg'
        },
        {
          id : '',
          img : '~assets/img/imgs/slider/silde-5.jpg'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .index{
    .swiper-box{
      .swiper-container{
        height: 451px;
        img{
          height: 100%;
          width: 100%;
        }
      }
    }
  }
</style>
