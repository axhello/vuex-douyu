import { liveLists, roomLists } from '@/api/live'
import { category } from '@/api/category'

const ajax = {
  state: {
    livelists: [],
    roomlists: [],
    categories: [],
    catelists: []
  },

  mutations: {
    // 获取热门直播
    FETCH_LIVE_LIST: (state, data) => {
      state.livelists = data
    },
    // 获取分类房间列表
    FETCH_ROOM_LIST: (state, data) => {
      state.roomlists = data
    },
    // 获取所有目录
    FETCH_All_CATEGORY: (state, data) => {
      state.categories = data
    },
    // 获取目录列表
    FETCH_CATEGORY_LIST: (state, data) => {
      state.catelists = data
    }
  },

  actions: {
    fetchLiveLists({ commit }, payload) {
      const query = payload
      return new Promise((resolve, reject) => {
        liveLists(query).then(response => {
          const result = response.data
          commit('FETCH_LIVE_LIST', result.data)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    fetchRoomLists({ commit }, payload) {
      const query = { offset: payload.offset, limit: payload.limit }
      return new Promise((resolve, reject) => {
        roomLists(payload.name, query).then(response => {
          const result = response.data
          commit('FETCH_ROOM_LIST', result.data)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    fetchCategory({ commit }, payload) {
      return new Promise((resolve, reject) => {
        category().then(response => {
          const result = response.data
          // console.log(result.cate1Info)
          commit('FETCH_All_CATEGORY', result.cate1Info)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    fetchCateList({ commit }, payload) {
      return new Promise((resolve, reject) => {
        category(payload).then(response => {
          const result = response.data
          // console.log(result.cate2Info)
          commit('FETCH_CATEGORY_LIST', result.cate2Info)
          localStorage.setItem('cateName', result.cate1Info.cate1Name)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    }
  },

  getters: {
    livelists: state => state.livelists,
    roomlists: state => state.roomlists,
    categories: state => state.categories,
    catelists: state => state.catelists
  }
}

export default ajax
