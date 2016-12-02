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
  if (query) {
    _url = `http://open.douyucdn.cn/api/RoomApi${url}?${query}`
  } else {
    _url = `http://open.douyucdn.cn/api/RoomApi${url}`
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
 * @param  {String} cname            分类名
 * @param  {Number} limit            每页数量
 * @return {Promise}                 Promise
 */
export const fetchRoomLists = ({commit}, cname, limit) => {
  const url = `/live/${cname}`
  const query = `offset=0&limit=${limit}`
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

export const fetchLiveRoomsLists = ({commit}, limit) => {
  const url = `/live`
  const query = `offset=0&limit=${limit}`
  return _get({url, query}, commit)
    .then((json) => {
      if (json.error === 0) {
        return commit('FETCH_LIVE_LIST_SUCCESS', json.data)
      }
      return Promise.reject(new Error('fetchFilmsLists failure'))
    })
    .catch((error) => {
      // commit('FETCH_TOPIC_LISTS_FAILURE', topicTab, page)
      return Promise.reject(error)
    })
}

export const fetchAllGamesLists = ({commit}) => {
  const url = '/game'
  const query = ''
  return _get({ url, query }, commit)
    .then((json) => {
      if (json.error === 0) {
        return commit('FETCH_GAMES_LIST_SUCCESS', json.data)
        // console.log(json.data)
      }
      return Promise.reject(new Error('FETCH_GAMES_LIST_SUCCESS failure'))
    })
    .catch((error) => {
      // commit('FETCH_TOPIC_LISTS_FAILURE', topicTab, page)
      return Promise.reject(error)
    })
}

export const fetchBillboards = ({commit}) => {
  const url = '/billboard/home'
  const query = '_t=' + new Date().getTime()
  return _get({ url, query }, commit)
    .then((json) => {
      if (json.status === 0) {
        return commit('FETCH_BANNER_SUCCESS', json.data)
      }
      return Promise.reject(new Error('FETCH_BANNER_SUCCESS failure'))
    })
    .catch((error) => {
      // commit('FETCH_TOPIC_LISTS_FAILURE', topicTab, page)
      return Promise.reject(error)
    })
}
