import * as types from './mutation-types'

const mutations = {
  // 获取热门直播
  [types.FETCH_LIVE_LIST_SUCCESS] (state, data) {
    state.liveroomslists = data
  },
  // 获取分类房间列表
  [types.FETCH_ROOM_LIST_SUCCESS] (state, data) {
    state.roomlists = data
  },
  // 获取所有目录
  [types.FETCH_CATEGORY_SUCCESS] (state, data) {
    state.category = data
  },
  // 获取目录列表
  [types.FETCH_CATEGORY_LIST_SUCCESS] (state, data) {
    state.categorylist = data
  }
}

export default mutations
