import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'

let service: AxiosInstance
if (import.meta.env.MODE === 'development') {
  service = axios.create({
    baseURL: 'api',
    timeout: 20000,
  })
} else {
  service = axios.create({
    baseURL: '/api',
    timeout: 20000,
  })
}

// request
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  (error: any) => {
    Promise.reject(error)
  }
)

// response
service.interceptors.response.use(
  (res: AxiosResponse) => {
    if (res.status === 200) {
      const data = res.data
      if (data.level !== 'success') {
        ElMessage({
          message: data.message,
          type: 'error',
        })
      }
      return data
    } else {
      ElMessage({
        message: '网络错误！',
        type: 'error',
      })
      return Promise.reject(new Error(res.data.message || 'Error'))
    }
  },
  (error: any) => {
    console.log('RequestError', error)
    return Promise.reject(error)
  }
)

export default service
