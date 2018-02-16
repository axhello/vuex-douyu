import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: '/api/', // api的base_url
  timeout: 15000 // 请求超时时间
})

export function liveLists(data) {
  return service({
    url: `live`,
    method: 'get',
    params: data
  })
}

export function roomLists(id, data) {
  return service({
    url: `live/${id}`,
    method: 'get',
    params: data
  })
}
