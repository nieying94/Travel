import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // 访问根路径
      name: 'Home',
      // 给路由项定义名字'Home'
      component: Home
      // 显示的组件是Home
    }
  ]
})
