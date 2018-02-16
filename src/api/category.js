import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: '/category/', // api的base_url
  timeout: 15000 // 请求超时时间
})

export function category(query) {
  return service({
    url: '',
    method: 'get',
    params: query
  })
}

