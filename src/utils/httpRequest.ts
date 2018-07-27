/**
 * @name 数据请求配置
 * @author 单志永
 * @version 1.0.0
 * @default 2018.7.26
 */

import Axios from 'axios'
import * as api from './api'
import * as md5 from 'md5'

/**
 * @description Axios默认配置
 */
Axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'
Axios.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest'
Axios.defaults.timeout = 5000

/**
 * @description 全局请求拦截器
 */
Axios.interceptors.request.use(
  config => {
    return config
  },
  error => Promise.reject(error)
)

/**
 * @param { Object } response 请求响应值
 */
interface IResponse {
  status: number,
  data: object
}
const checkStatus = (response: IResponse): object => {
  const { status, data } = response
  if (
    (status === 200 || status === 304) && data['error']
  ) {
    const { message } = data['error']
    return Promise.reject(message)
  }
  return data
}

/**
 * @description 全局响应拦截器
 */

 Axios.interceptors.request.use(
   response => checkStatus(response as IResponse),
   error => Promise.reject(error)
 )
 /**
  * 
  * @description md5请求接口加密 
  */
 const Encrypt = (params: object): any => {
  let secticyStr = ''
  if (params !== null && !!params) {
    const keys = Object.keys(params).sort()
    secticyStr = keys.reduce((result, curValue, cIndex) => {
      if (cIndex === 0) {
        return `${curValue}=${params[curValue]}`
      }
      return `${result}&${curValue}=${params[curValue]}`
    }, '')
    return md5(api.SSH_KEY + md5(secticyStr))
  }
  return false
}
 /**
 * @description 处理params
 */
function dealParams(method: string, params: object) {
  const tempParams = params
  const isNull = !!params && (tempParams['sign'] = Encrypt(tempParams))
  return {
    jsonrpc: '2.0',
    id: 1,
    method,
    params: isNull ? [tempParams] : []
  }
}
export default {
  post(url: string, method: string, data: object): Promise<{}> {
    return Axios({
      method: 'post',
      url,
      data: dealParams(method, data)
    })
  },
  get(url: string, params: object): Promise<{}> {
    return Axios({
      method: 'get',
      url,
      params
    })
  }
}