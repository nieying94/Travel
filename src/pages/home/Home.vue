<!-- template定义了组件的模板 -->
<template>
    <home-header> </home-header>
</template>

<script>
import HomeHeader from './components/Header'
// 导出一个对象，里面定义一个组件的名字
export default{
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>

<style>

</style>
