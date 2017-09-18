import axios from 'axios'

const _get = ({ url, query }, commit) => {
  if (commit) commit('START_LOADING')
  let _url
  if (url && query !== '') {
    _url = `/api/${url}?${query}`
  } else {
    _url = `/category?type=${query}`   // moblie api
  }
  return axios.get(_url)
    .then((res) => {
      if (commit) commit('FINISH_LOADING')
      if (res.status >= 200) {
        return res.data
      }
    })
    .catch(function (error) {
      console.log(error)
    })
}

export const fetchCategory = ({ commit }) => {
  let url = ''
  let query = ''
  return _get({ url, query }, commit)
      .then((res) => {
        // 无状态码判断 直接返回
        // console.log(res)
        return commit('FETCH_CATEGORY_SUCCESS', res.cate1Info)
        // return Promise.reject(new Error('FETCH_GAMES_LIST_SUCCESS failure'))
      })
      .catch((error) => {
        return Promise.reject(error)
      })
}

export const fetchCategoryList = ({ commit }, payload) => {
  let url = ''
  let query = payload.type
  return _get({ url, query }, commit)
    .then((res) => {
      // 无状态码判断 直接返回
      // console.log(res)
      return commit('FETCH_CATEGORY_LIST_SUCCESS', res)
      // return Promise.reject(new Error('FETCH_GAMES_LIST_SUCCESS failure'))
    })
    .catch((error) => {
      return Promise.reject(error)
    })
}

export const fetchRoomLists = ({ commit }, obj) => {
  let url = `live/${obj.id}`
  let query = `offset=0&limit=${obj.limit}`
  return _get({ url, query }, commit)
    .then((res) => {
      // console.log(res)
      return commit('FETCH_ROOM_LIST_SUCCESS', res.data)
      // return Promise.reject(new Error('FETCH_ROOM_LIST_SUCCESS failure'))
    })
    .catch((error) => {
      return Promise.reject(error)
    })
}

export const fetchLiveRoomsLists = ({ commit }, limit) => {
  const url = `live`
  const query = `offset=0&limit=${limit}`
  return _get({ url, query }, commit)
    .then((json) => {
      if (json.error === 0) {
        return commit('FETCH_LIVE_LIST_SUCCESS', json.data)
      }
      return Promise.reject(new Error('fetchFilmsLists failure'))
    })
    .catch((error) => {
      return Promise.reject(error)
    })
}

