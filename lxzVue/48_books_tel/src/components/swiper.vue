<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <!-- <img :src="slide"> -->
        <img v-lazy="slide">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        },
        // swiperSlides: [1, 2, 3, 4, 5],
      }
    },
    props:['swiperSlides'],
    components: {
        swiper,
        swiperSlide
    },
    mounted() {
      
    }
  }
</script>
<style lang="less" scoped>
.swiper-slide{
    width:100%!important;
    height:200px;
    img{
        width:100%;
        height:100%;
    }
}
</style>