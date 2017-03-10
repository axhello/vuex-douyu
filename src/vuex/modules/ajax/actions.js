import vue from 'vue'
/**
 * get请求
 * @param  {String} options.url   api地址
 * @param  {String} options.query query参数
 * @return {Promise}               Promise
 */
const _get = ({ url, query }, commit) => {
  if (commit) commit('START_LOADING')
  let _url
  if (url && query !== '') {
    _url = `/api/${url}?${query}`
  } else {
    // moblie api
    _url = `/category?type=${query}`
  }

  return vue.http.get(_url)
    .then((res) => {
      if (commit) commit('FINISH_LOADING')
      if (res.status >= 200 && res.status < 300) {
        return res.data
      }
      return Promise.reject(new Error(res.status))
    })
}

/**
 * 获取分类直播房间列表
 * @param  {Function} options.dispatch store对象解构出来的函数，无需手动提供
 * @param  {String} obj            传递过来的对象 包含id与limit
 * @return {Promise}               Promise
 */
export const fetchRoomLists = ({ commit }, obj) => {
  const url = `live/${obj.id}`
  const query = `offset=0&limit=${obj.limit}`
  return _get({ url, query }, commit)
    .then((json) => {
      if (json.error === 0) {
        return commit('FETCH_ROOM_LIST_SUCCESS', json.data)
        // console.log(query)
      }
      return Promise.reject(new Error('FETCH_ROOM_LIST_SUCCESS failure'))
    })
    .catch((error) => {
      return Promise.reject(error)
    })
}
/**
 * 获取直播中房间列表
 * @param  {Function} options.dispatch store对象解构出来的函数，无需手动提供
 * @param  {Number} limit            每页数量
 * @return {Promise}                 Promise
 */
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

/**
 * 获取分类列表
 * @param  {Function} options.dispatch store对象解构出来的函数，无需手动提供
 * @param  {String} type            分类类型
 * @return {Promise}                Promise
 */
export const fetchAllGamesLists = ({ commit }, type) => {
  const url = ''
  const query = type
  return _get({ url, query }, commit)
    .then((json) => {
      // 无状态码判断 直接返回
      return commit('FETCH_GAMES_LIST_SUCCESS', json)
      // return Promise.reject(new Error('FETCH_GAMES_LIST_SUCCESS failure'))
    })
    .catch((error) => {
      return Promise.reject(error)
    })
}
