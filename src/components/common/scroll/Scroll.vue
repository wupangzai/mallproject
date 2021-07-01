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
  data () {
    return {
    }
  },
  components:{
  },
  mounted() {
    // 不推荐使用wrapper，防止再其他组件有重复的类名
    // ref绑定再组件上，拿到的就是组件对象
    // ref绑定在标签，拿到的就是元素对象
    const scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      pullUpLoad: true,
      probeType: 3,
    })
    scroll.on('pullingUp', () => {
      console.log('触底事件');
      // 延迟触发，防止多次请求
      setTimeout( () => {
        scroll.finishPullUp()
      },5000)
    })
  }
}

</script>

<style scoped>

</style>
