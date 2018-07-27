import Axios from 'axios'
import * as md5 from 'md5'
import * as qs from 'qs'
import * as api from './api'

interface IData {
  result: object
  error: any
}
/**
 * @description 参数配置接口
 */
interface IPramas {
  jsonrpc: string
  method: string
  params: object
  id: number
}
/**
 * @param { Object } response 请求响应值
 */
interface IResponse {
  status: number // http状态码
  data: IData // 返回的数据
}

class BNRequest {
  constructor() {
    this.init()
  }
  /**
   * @description Post请求
   */
  public post(url: string, method: string, param: object): Promise<{}> {
    return Axios({
      data: this.dealParams(method, param),
      method: 'post',
      url
    })
  }
  /**
   * @description 初始化方法
   */
  private init(): void {
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
        if (config.method === 'post') {
          config.data = qs.stringify(config.data)
        }
        return config
      },
      error => Promise.reject(error)
    )
    Axios.interceptors.request.use(
      response => this.checkStatus(response as IResponse),
      error => Promise.reject(error)
    )
  }
  /**
   * @description 处理响应数据
   */

  private checkStatus(response: IResponse): object {
    const { status, data } = response
    if ((status === 200 || status === 304) && data.error) {
      const { message } = data.error
      return Promise.reject(message)
    }
    return data
  }

  /**
   * @description 加密参数
   */
  private encrypt(params: object): any {
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
  private dealParams(method: string, params: object): IPramas {
    const tempParams = params as any
    const isNull = !!params && (tempParams.sign = this.encrypt(tempParams))
    return {
      id: 1,
      jsonrpc: '2.0',
      method,
      params: isNull ? [tempParams] : []
    }
  }
}

export default BNRequest
