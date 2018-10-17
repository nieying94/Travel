<!-- template定义了组件的模板 -->
<template>
    <div>
      <home-header> </home-header>
      <home-swiper> </home-swiper>
      <home-icons> </home-icons>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
// 导出一个对象，里面定义一个组件的名字
export default{
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>

<style>

</style>
