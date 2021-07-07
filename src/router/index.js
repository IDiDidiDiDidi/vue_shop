import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/Login.vue'
import Home from '../components/Home.vue'


// 导入全局样式表
import "../assets/css/global.css"



Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/home', component: Home },
]

const router = new VueRouter({
  routes
})

// 挂载路由导航卫士
  router.beforeEach((to, from, next) => {
    if(to.path === '/login') return next()

    // 获取 token
    const tokenStr = window.sessionStorage.getItem('token')
    if(!tokenStr) return next('/login')
    next()
  })


export default router
