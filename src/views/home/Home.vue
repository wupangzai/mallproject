<!--  -->
<template>
  <div id="home">
    <!-- navbar -->
    <!-- 使用nav-bar传入背景色和字体颜色 -->
    <nav-bar class="nav-bar" navColor='#ff8198' textColor='white'>
      <template v-slot:center>
        购物街
      </template>
    </nav-bar>
    <!-- 滚动组件设置 -->
    <scroll class="content">
    <!-- 轮播图 -->
    <home-swiper :banner='banner'></home-swiper>
    <!-- 推荐视图 -->
    <recommend-view :recommend="recommend"></recommend-view>
    <!-- 本周精选 -->
    <feature-view></feature-view>
    <!-- tabControl -->
    <tab-control class="tab-control" :title="['流行', '新款', '精选']" @tabClick="tabClick"></tab-control>
    <good-list :goods="goods[tabType].list"></good-list>
    </scroll>
  </div>
</template>

<script>
// 组件导入
import NavBar from '../../components/common/navbar/NavBar.vue'
import HomeSwiper from './childComponents/HomeSwiper.vue'
import RecommendView from './childComponents/RecommendView.vue'
import FeatureView from './childComponents/FeatureView.vue'
import TabControl from '../../components/content/tabControl/TabControl.vue'
import GoodList from '../../components/content/goods/GoodList.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'




// 网络请求导入
import {getHomeMultidata,getHomeGoods} from '@/network/home'

export default {
  name: 'Home',
  data () {
    return {
      banner: null,
      recommend: null,
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
      tabType: 'pop',
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodList,
    Scroll,
  },
  
  created() {
     // 请求多个数据
    // 函数调用 -> 压入函数栈（保存函数调用过程中所有变量）
    // 函数调用结束 -> 弹出函数栈（释放函数所有的变量）
    // 要存到data里
    this.getHomeMultidata()
    // 请求goods数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },

  mounted() {

  },

  methods:{
    // 事件监听
    tabClick(index) {
      console.log(index)
      if(index == 0){
        this.tabType = 'pop'
      }
      else if(index == 1){
        this.tabType = 'new'
      }
      else{
        this.tabType = 'sell'
      }
    },



    // 网络请求
    getHomeMultidata() {
      getHomeMultidata().then(res => {
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
     })
    },

    getHomeGoods(type) {
      // 拿到goods里的对应type的页数+1
      const page = this.goods[type].page + 1
      // 传入type和刚拿的page
      getHomeGoods(type,page).then(res => {
        // 将请求的数组和已存在的数组惊醒拼接
      this.goods[type].list=this.goods[type].list.concat(res.data.list)
      // 将type里的页数+1
      this.goods[type].page += 1
      // console.log(res.data.list);
      })
    }
  }
}

</script>

<style scoped>
  #home{
    /* padding-top: 44px; */
    height: 100vh;
  }
  .nav-bar{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control{
    position: sticky;
    top: 44px;
    background-color: #fff;
  }
  .content{
    /* height: 470px; */
    margin-top: 44px;
    height: calc(100% - 93px);
    overflow: hidden;
  }


</style>
