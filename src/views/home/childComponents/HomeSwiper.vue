<!--  -->
<template>
  <div>
    <swiper>
      <swiper-item v-for="(item, index) in banner" :key="index">
        <a :href="item.link">
          <img :src="item.image" @load="imgload">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from '@/components/common/swiper'


export default {
  name: 'HomeSwiper',
  props: {
    banner:{
      type:Array
    }
  },
  data () {
    return {
      isLoad: false
    }
  },
  methods:{
    // 避免多次发送事件，导致执行多次获取offsettop
    // 和防抖不一样的是，我只需要获取一次，防抖是间歇性获取
    // 用一个变量记录发送
    imgload() {
      if(!this.isLoad)
      this.$emit('swiperimgload')
      this.isLoad = true
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}

</script>

<style scoped>

</style>
