import 'lib-flexible'
import Scroll from 'vue-infinite-scroll'
import FastClick from 'fastclick'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routerConfig from './routers'
import store from './vuex/store'
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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
