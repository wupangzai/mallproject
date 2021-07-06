import {request} from '../network/request'


// 详情数据请求
export function getDetailData(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

// 推荐数据请求
export function getRecommendDate(){
  return request({
    url: '/recommend'
  })
}



// 导出类来进行数据保存
// 商品相关信息
export class Goods{
  // 构造器
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.lowNowPrice
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}

// shop相关信息
export class Shop{
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodCount = shopInfo.cGoods
  }
}

// 导出参数信息
export class GoodsParam{
  constructor(info, rule){
    this.image = info.images ? info.images[0] :''
    this.info = info.set
    this.size = rule.tables

  }
}

// 导出评论信息
export class Comments{
  constructor(user,content) {
    this.username = user.uname
    this.avatar = user.avatar
    this.content = content.content
    this.style = content.style
    this.images = content.images
    this.date = content.created
  }
}
