// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'lib-flexible'
import Scroll from 'vue-infinite-scroll'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routerConfig from './routers'
import store from './vuex/store'
import FastClick from 'fastclick'
import * as filters from './filters'

window.addEventListener('load', () => {
  FastClick.attach(document.body)
})

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Scroll)
const router = new VueRouter({routes: routerConfig})
// router.beforeEach((to, from, next) => {
//   console.log(next)
// })
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  store,
  render: h => h(App)
})
