<!--  -->
<template>
  <div id="detail">
    <!-- 顶部导航 -->
    <nav-bar navColor='white' textColor='black'>
      <template v-slot:left>
          <img src="~@/assets/img/common/back.svg" class="back" @click="backClick">
      </template>
      <template v-slot:center>
        <detail-nav-center :centerList="center"></detail-nav-center>
      </template>
    </nav-bar>
    <scroll class="content">
      <!-- 顶部轮播图展示 -->
      <detail-swiper :topImages="topImages"></detail-swiper>
      <!-- 基本信息展示 -->
      <detail-base-info :goods="goods"></detail-base-info>
      <!-- 店铺信息展示 -->
      <detail-shop-info :shop="shop"></detail-shop-info>
    </scroll>


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





// 网络接口导入
import {getDetailData, Goods, Shop} from '../../network/detail' 


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
      shop: {}
    }
  },
  components:{
    NavBar,
    DetailNavCenter,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll
  },
  methods:{
    backClick() {
      this.$router.back()
    },

    // 请求网络数据方法封装
    getDetailData() {
      getDetailData(this.iid).then( res => {
        this.topImages = res.result.itemInfo.topImages
        this.goods = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)
        this.shop = new Shop(res.result.shopInfo)
      })
    },
  },
 
  created() {
    // 获取事件的id
    this.iid = this.$route.query.id
    // 发送网络请求获取数据
    this.getDetailData()
    console.log(this.$route);
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
  }
  .back{
    margin-top: 15px;
    width: 15px;
    height: 15px;
  }
  .content{
    height: calc(100vh - 44px);
  }

</style>
