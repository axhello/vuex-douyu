import Vue from 'vue'
import Vuex from 'vuex'
import ajax from './modules/ajax'
import app from './modules/app'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    ajax,
    app
  },
  strict: debug
})
