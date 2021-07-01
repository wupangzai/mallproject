import BScroll from 'better-scroll'


export function scroll(config) {
  // 默认情况下new的better-scroll不会实时监听位置
  return new BScroll(config,{
    // 0,1表示不侦测,
    // 2表示手指滑动侦测，离开后的惯性不侦测
    // 3表示只要是滑动都侦测
    probeType: 3,
    // 默认监听不到里面的点击事件
    click: true,
    // 上拉加载更多
    pullUpLoad: true
  })
}