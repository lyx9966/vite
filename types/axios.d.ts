export interface ResponseData<T = any> {
  level: string
  data?: T
  message: string
}

declare module 'axios' {
  interface AxiosInstance {
    (config: AxiosRequestConfig): Promise<any>
  }
}
