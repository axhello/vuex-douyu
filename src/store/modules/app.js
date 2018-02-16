
const app = {
  state: {
    loading: false,
    leftNavState: false
  },

  mutations: {
    CHANGE_LEFTNAV_STATE: (state, data) => {
      state.leftNavState = data
    },
    TOGGLE_LOADING_STATE: (state, data) => {
      state.loading = data
    }
  },

  actions: {
    changeLeftNavState({ commit }, payload) {
      return commit('CHANGE_LEFTNAV_STATE', payload)
    },
    toggleLoadingState({ commit }, payload) {
      return commit('TOGGLE_LOADING_STATE', payload)
    }
  },

  getters: {
    loading: state => state.loading,
    leftNavState: state => state.leftNavState
  }
}

export default app
