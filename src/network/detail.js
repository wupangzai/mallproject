import {request} from '../network/request'

export function getDetailData(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
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

