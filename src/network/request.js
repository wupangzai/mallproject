import axios from 'axios'
// 网络接口封装
export function request(config){
  // 创建axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })

  // 响应拦截处理数据
  instance.interceptors.response.use(res => {
    return res.data
  },err => {
    console.log(err)
  })
  // 发送真正的网络请求
  return instance(config)
}