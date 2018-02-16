import Vue from 'vue'
import Router from 'vue-router'
const index = r => require.ensure([], () => r(require('@/views/home/index')), 'index')
const category = r => require.ensure([], () => r(require('@/views/category/index')), 'category')
const rooms = r => require.ensure([], () => r(require('@/views/rooms/index')), 'rooms')
const detail = r => require.ensure([], () => r(require('~/roomDetail')), 'detail')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/category/:type',
      name: 'category',
      component: category
    },
    {
      path: '/rooms/:name',
      name: 'rooms',
      component: rooms
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    },
    {
      path: '*',
      component: index
    }
  ]
})
