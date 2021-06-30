import {request} from './request'
// home首页相关网络请求
export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

