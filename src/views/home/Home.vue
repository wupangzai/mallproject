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
    <tab-control :title="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl1" v-show="isFix"></tab-control>
    <!-- 滚动组件设置 绑定ref方便获取滚动方法-->
    <scroll class="content" ref="scroll" :probeType = '3' :pullUpLoad="true" @scroll="scrollmove" @loadMore="loadmore">
    <!-- 轮播图 -->
    <home-swiper :banner='banner' @swiperimgload='swiperimgload'></home-swiper>
    <!-- 推荐视图 -->
    <recommend-view :recommend="recommend"></recommend-view>
    <!-- 本周精选 -->
    <feature-view></feature-view>
    <!-- tabControl -->
    <tab-control  :title="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl2" v-show="!isFix"></tab-control>
    <good-list :goods="goods[tabType].list"></good-list>
    </scroll>
    <back-top @click.native="backtop" v-show="backTopShow"></back-top>
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
import BackTop from '../../components/content/backtop/BackTop.vue'

// 公共方法类导入
import {debounce} from '../../common/utils'


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
      backTopShow: false,
      tabOffsetTop: 0,
      isFix: false
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
    BackTop,
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
      // refresh解决better-scroll的高度问题，调用debounce函数
      const refresh = debounce(this.$refs.scroll.refresh, 200)
      this.$bus.$on('imgLoad', () => {
        refresh()
      }) 



    

  },

  methods:{
    // 事件监听数据
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
      this.$refs.tabControl1.currentIndex = index 
      this.$refs.tabControl2.currentIndex = index 
    },
    // backtop
    backtop() {
      this.$refs.scroll.scrollTo(0,0,500)
    },
    // 监听滚动参数
    scrollmove(position) {
      // 判断回顶按钮是否显示
      if(position.y < -800)
      this.backTopShow = true
      if(position.y > -800){
        this.backTopShow = false
      }
      // 判断tabcontrol是否吸顶参数
      this.isFix = (-position.y) > this.tabOffsetTop

    },
    // 上拉加载更多
    loadmore() {
      this.getHomeGoods(this.tabType)
    },
    // 监听轮播图图片是否加载完成
    swiperimgload() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
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
      this.$refs.scroll.finishPullUp()
      })
    },

  },

  watch:{
    goods() {
    }
  },
  computed: {
 
  }
}

</script>

<style scoped>
  #home{
    /* padding-top: 44px; */
    height: 100vh;
  }
  /* .nav-bar{ */
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0; */
    /* z-index: 9; */
  /* } */
  /* .tab-control{
    background-color: #fff;
    position: sticky;
    top: 44px;
  } */
  /* .tabFix{
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    z-index: 99;

  } */
  .content{
    /* height: 470px; */
    /* margin-top: 44px; */
    height: calc(100% - 93px);
    overflow: hidden;
  }


</style>
