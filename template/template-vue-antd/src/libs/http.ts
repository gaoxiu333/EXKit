import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { stringify } from 'qs'
import { getCookie } from './utils'

/** 创建一个 Axios 实例 */
const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://api.example.com', // 设置基本的 API 地址
  timeout: 10000 // 设置请求超时时间（单位：毫秒）
})

/** 打印日志 */
const logOnDev = (message: string) => {
  if (import.meta.env.MODE === 'development') {
    console.log(message)
  }
}

/**
 * 请求拦截器
 * 1. 如果有token，则在请求头添加token
 * 2. 或者在请求被发送之前做些什么...
 */
const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const { method, url, headers } = config
  const token = window.localStorage.getItem('token')

  if (token) {
    headers.Authorization = 'Bearer ' + token
  }

  logOnDev(`🚀 [API] ${method?.toUpperCase()} ${url} | Request`)
  return config
}

/**
 * 响应拦截器
 * 1. 响应拦截器统一处理一些请求结果
 * 2. 有些请求返回成功，但会带有错误信息，这种情况也可以在这里统一处理
 */
const onResponse = (response: AxiosResponse): AxiosResponse => {
  const { method, url } = response.config
  const { status } = response

  logOnDev(`🚀 [API] ${method?.toUpperCase()} ${url} | Response ${status}`)

  return response
}

/** 处理请求错误 */
const onErrorResponse = (error: AxiosError | Error): Promise<AxiosError> => {
  if (axios.isAxiosError(error)) {
    const { message } = error
    const { method, url } = error.config as AxiosRequestConfig
    const { status } = (error.response as AxiosResponse) ?? {}

    logOnDev(`🚨 [API] ${method?.toUpperCase()} ${url} | Error ${status} ${message}`)
    // 处理 HTTP 状态码
    switch (status) {
      case 401: {
        // 处理未登录
        break
      }
      case 403: {
        // 非法请求/请求参数错误等
        break
      }
      case 404: {
        // 无效请求
        break
      }
      case 500: {
        // 服务器错误
        break
      }
      default: {
        // 未知错误
        break
      }
    }

    if (status === 401) {
      window.localStorage.clear()
    }
  } else {
    logOnDev(`🚨 [API] | Error ${error.message}`)
  }

  return Promise.reject(error)
}

const setupInterceptors = (instance: AxiosInstance): AxiosInstance => {
  instance.interceptors.request.use(onRequest, onErrorResponse)
  instance.interceptors.response.use(onResponse, onErrorResponse)

  return instance
}

const instance = setupInterceptors(axiosInstance)

/** 创建一个包装，以支持返回值的 TS 类型 */
const request = async <T>(options: AxiosRequestConfig): Promise<T> => {
  const response: AxiosResponse<T> = await instance(options)
  return response.data
}

export default request
