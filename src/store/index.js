import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import ajax from './modules/ajax'
// import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    ajax
  }
})

export default store
