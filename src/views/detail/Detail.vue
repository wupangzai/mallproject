<!--  -->
<template>
  <div id="detail">
    <!-- 顶部导航 -->
    <nav-bar navColor='white' textColor='black' class="nav-bar">
      <template v-slot:left>
          <img src="~@/assets/img/common/back.svg" class="back" @click="backClick">
      </template>
      <template v-slot:center>
        <detail-nav-center :centerList="center" @itemClick="navItemClick" ref="nav"></detail-nav-center>
      </template>
    </nav-bar>
    <scroll class="content" ref="scroll" :probeType = '3' @scroll="scrollmove">
      <!-- 顶部轮播图展示 -->
      <detail-swiper :topImages="topImages"></detail-swiper>
      <!-- 基本信息展示 -->
      <detail-base-info :goods="goods"></detail-base-info>
      <!-- 店铺信息展示 -->
      <detail-shop-info :shop="shop"></detail-shop-info>
      <!-- 商品详情信息 -->
      <detail-goods-info :detailInfo="detailInfo" @loadfinish="loadfinish"></detail-goods-info>
      <!-- 商品参数 -->
      <detail-params :detailParams="goodsParams" ref="params"></detail-params>
      <!-- 用户评价 -->
      <detail-comment :detailComment="comments" ref="comments"></detail-comment>
      <good-list :goods="recommends" ref="recommends"></good-list>
    </scroll>
    <!-- 回顶操作 -->
    <back-top @click.native="backTop" v-show="backTopShow"></back-top>
  </div>
</template>

<script>
// 组件导入
import NavBar from '../../components/common/navbar/NavBar.vue'
import DetailNavCenter from './DetailNavCenter.vue'
import DetailSwiper from './DetailSwiper.vue'
import DetailBaseInfo from './DetailBaseInfo.vue'
import DetailShopInfo from './DetailShopInfo.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import DetailGoodsInfo from './DetailGoodsInfo.vue'
import DetailParams from './DetailParams.vue'
import DetailComment from './DetailComment.vue'
import DetailRecommend from './DetailRecommend.vue'
import GoodList from '../../components/content/goods/GoodList.vue'


// 公共方法导入
import {debounce} from '../../common/utils'
import {backTop} from '../../common/mixin'


// 网络接口导入
import 
{
  getDetailData, getRecommendDate, Goods, Shop, GoodsParam, Comments
}
from '../../network/detail' 
// import BackTop from '../../components/content/backtop/BackTop.vue'


export default {
  name: 'Detail',
  data () {
    return {
      iid: null,
      center:['商品', '参数', '评论', '推荐'],
      // 顶部轮播图片
      topImages: [],
      // goods数据
      goods: {},
      // shop数据
      shop: {},
      // 展示图片
      detailInfo: {},
      //商品参数
      goodsParams: {},
      // 评论信息
      comments: {},
      // 推荐信息
      recommends: [],
      // 滚动位置显示按钮
      backTopShow: false,
      // 距离y
      themeTopYs: [],

    }
  },
  components:{
    NavBar,
    DetailNavCenter,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParams,
    DetailComment,
    DetailRecommend,
    GoodList,
    // BackTop
  },
  methods:{
    // 返回上一级
    backClick() {
      this.$router.back()
    },
    // 监听图片加载完成后刷新高度
    loadfinish() {
      this.$refs.scroll.refresh()
      // 监听刷新完后赋值跳转高度
      this.themeTopYs = []
      this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop)
      this.themeTopYs.push(this.$refs.comments.$el.offsetTop)
      this.themeTopYs.push(this.$refs.recommends.$el.offsetTop)
    },
    // 监听滚动
    scrollmove(position) {
      if(-position.y >= 780){
        this.backTopShow = true
      }else{
        this.backTopShow = false
      }
      for(let i = 0; i < this.themeTopYs.length; i++){
        if(this.currentIndex !== i && (-position.y > this.themeTopYs[parseInt(i)]- 50 && -position.y< this.themeTopYs[parseInt(i + 1)]  -50)){
          this.$refs.nav.currentIndex = i
        }else if( -position.y > this.themeTopYs[this.themeTopYs.length - 1])
          this.$refs.nav.currentIndex = 3
      }
      // this.themeTopYs.forEach((item, index) => {
      //   if(-position.y > item && )
      // });
    },
    // 顶部导航点击
    navItemClick(index) {
      // 导航点击跳转到对应位置
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
    },

    // 详情页请求网络数据方法封装
    getDetailData() {
      getDetailData(this.iid).then( res => {
        this.topImages = res.result.itemInfo.topImages
        this.goods = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)
        this.shop = new Shop(res.result.shopInfo)
        this.detailInfo = res.result.detailInfo
        this.goodsParams = new GoodsParam(res.result.itemParams.info, res.result.itemParams.rule)
        this.comments = new Comments(res.result.rate.list[0].user, res.result.rate.list[0])
      })
    },
    // 请求详情页推荐数据方法封装
    getRecommendDate() {
      getRecommendDate().then(res => {
        this.recommends = res.data.list
      })
    }
  },
  mixins: [backTop],
  created() {
    // 获取事件的id
    this.iid = this.$route.query.id
    // 发送网络请求获取数据
    this.getDetailData()
    // 请求推荐数据，methods封装好的方法
    this.getRecommendDate()
  },
  mounted() {
    // 监听推荐图片是否加载完成
    const refresh = debounce(this.$refs.scroll.refresh,200)
    this.$bus.$on('detailload', () => {
      refresh()
    })
    
  }

}

</script>

<style scoped>
  #detail{
    display: flex;
    flex-direction: column;
    /* position: relative;
    z-index: 9;
    background-color: white; */
    height: 100vh;
    overflow: hidden;
  }
  .back{
    margin-top: 15px;
    width: 15px;
    height: 15px;
  }
  .content{
    height: calc(100vh - 44px);
  }
  .nav-bar{
    position: relative;
    z-index: 9;
  }

</style>
