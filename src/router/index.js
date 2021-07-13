import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/user/Users.vue'


// 导入全局样式表
import "../assets/css/global.css"



Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  // 这是一个重定向模式，是要我们访问了home，就会访问到/welcome这个页面
  { 
    path: '/home', 
    component: Home, 
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: Welcome},
      { path: '/users', component: Users}
    ] 
  },

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
