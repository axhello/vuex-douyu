import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/404',
      component: () => import('@/views/error/404')
    },
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/home')
    },
    {
      path: '/category/:type',
      name: 'category',
      component: () => import('@/views/category')
    },
    {
      path: '/rooms/:name',
      name: 'rooms',
      component: () => import('@/views/room')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('@/views/detail')
    },
    {
      path: '*',
      redirect: '/404'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
