<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: '//img1.qunarzz.com/qs/1810/db/ab9e1204b6144902.jpg'
      }, {
        id: '0002',
        imgUrl: '//img1.qunarzz.com/qs/1809/64/62160a38d119c202.jpg'
      } ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
      background:#fff
  .wrapper
    width :100%
    overflow :hidden
    height :0
    padding-bottom :24.53%
    .swiper-img
      width:100%
</style>
