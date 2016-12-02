import {
  FETCH_LIVE_LIST_SUCCESS,
  FETCH_GAMES_LIST_SUCCESS,
  FETCH_ROOM_LIST_SUCCESS
  } from './mutation-type'

const mutations = {
  // 获取热门直播
  [FETCH_LIVE_LIST_SUCCESS] (state, data) {
    state.liveroomslists = data
  },
  // 获取所有游戏列表
  [FETCH_GAMES_LIST_SUCCESS] (state, data) {
    state.allgameslists = data
  },
  // 获取分类房间列表
  [FETCH_ROOM_LIST_SUCCESS] (state, data) {
    state.roomlists = data
  }
}

export default mutations
