import Axios, { AxiosInstance, AxiosPromise, AxiosResponse } from 'axios'
import * as md5 from 'md5'
import * as API from './api'

/**
 * @description 参数配置接口
 */
interface IPramas {
  readonly id: number
  readonly jsonrpc: string
  readonly method: string
  readonly params: object
}

class BNRequest {
  /*axios请求实例*/
  private fetch: AxiosInstance
  constructor() {
    this.init()
  }
  /**
   * @description Post请求
   */
  public post(url: string, method: string, param: object): AxiosPromise {
    return this.fetch(
      { data: this.dealParams(method, param),
        method: 'POST',
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
    this.fetch =  Axios.create({
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-Requested-With': 'XMLHttpRequest'
      },
      timeout: 3000
    })

    /**
     * @description 全局请求拦截器
     */
    this.fetch.interceptors.request.use(
      config => {
        return config
      },
      error => Promise.reject(error)
    )
    /**
     * @description 全局响应拦截器
     */
    this.fetch.interceptors.response.use(
      response => this.checkStatus(response),
      error => Promise.reject(error)
    )
  }
  
  /**
   * @description 处理响应数据
   */
  private checkStatus(response: AxiosResponse): AxiosPromise {
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
      return md5(API.SSH_KEY + md5(secticyStr))
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

export default new BNRequest()
