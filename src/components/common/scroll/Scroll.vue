<!--  -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
    <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
    
  },
  data () {
    return {
      scroll: null
    }
  },
  components:{
  },
  methods:{
    // 回顶方法
    scrollTo(x, y, time) {
      this.scroll.scrollTo(x, y, time)
    },
    // 完成加载
    finishPullUp() {
      this.scroll.finishPullUp()
    },
    // 图片刷新
    refresh() {
      this.scroll && this.scroll.refresh && this.scroll.refresh()
        console.log('----');

    }

  },
  mounted() {
    // 不推荐使用wrapper，防止再其他组件有重复的类名
    // ref绑定再组件上，拿到的就是组件对象
    // ref绑定在标签，拿到的就是元素对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      pullUpLoad: this.pullUpLoad,
      probeType: this.probeType,
    })
    this.scroll.on('pullingUp', () => {
      console.log('触底事件');
      this.$emit('loadMore')
      // 延迟触发，防止多次请求
      setTimeout( () => {
        this.scroll.finishPullUp()
      },5000)
    })
    this.scroll.on('scroll', (position) => {    
    //  发送参数
        this.scroll && this.$emit('scroll', position)
    })
  }
}

</script>

<style scoped>

</style>
