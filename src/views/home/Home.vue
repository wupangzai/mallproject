<!--  -->
<template>
  <div id="home">
    <!-- navbar -->
    <!-- 使用nav-bar传入背景色和字体颜色 -->
    <nav-bar navColor='#ff8198' textColor='white'>
      <template v-slot:center>
        购物街
      </template>
    </nav-bar>
    <!-- 轮播图 -->
    <home-swiper :banner='banner'></home-swiper>
    <!-- 推荐视图 -->
    <recommend-view :recommend="recommend"></recommend-view>
  </div>
</template>

<script>
// 组件导入
import NavBar from '../../components/common/navbar/NavBar.vue'
import HomeSwiper from './childComponents/HomeSwiper.vue'
import RecommendView from './childComponents/RecommendView.vue'
// 网络请求导入
import {getHomeMultidata} from '@/network/home'

export default {
  name: 'Home',
  data () {
    return {
      banner: null,
      recommend: null
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
  },
  created() {
     // 请求多个数据
    // 函数调用 -> 压入函数栈（保存函数调用过程中所有变量）
    // 函数调用结束 -> 弹出函数栈（释放函数所有的变量）
    // 要存到data里
    getHomeMultidata().then(res => {
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
    })
  },
}

</script>

<style scoped>

</style>
