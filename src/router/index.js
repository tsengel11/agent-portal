import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [

  {
    path: '/login',
    name: 'login',
    component: ()=>import('../views/Login')
  },
  {
    path: '/',
    name: 'enrollment',
    component: ()=>import('../views/Enrollment')
  },
  {
    path: '/newenrollment',
    name: 'newenrollment',
    component: ()=>import('../views/NewEnrollment')
  },
  {
    path: '/materials',
    name: 'materials',
    component: ()=>import('../views/Materials')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
