import Vue from 'vue'
import Router from 'vue-router'

const home = r => require.ensure([], () => r(require('@/views/home')), 'home')
const category = r => require.ensure([], () => r(require('@/views/category')), 'category')
const rooms = r => require.ensure([], () => r(require('@/views/rooms')), 'rooms')
const detail = r => require.ensure([], () => r(require('@/views/detail')), 'detail')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: home
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
      component: home
    }
  ]
})
