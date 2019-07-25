import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import City from '@/pages/city/City.vue'
import Detail from '@/pages/detail/Detail.vue'
import Chart from '@/pages/chart/index.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    // 访问根路径
    name: 'Home',
    // 给路由项定义名字'Home'
    component: Home
    // 显示的组件是Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }, {
    path: '/chart',
    name: 'Chart',
    component: Chart
  }],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
