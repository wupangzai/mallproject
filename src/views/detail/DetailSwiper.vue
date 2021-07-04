<!--  -->
<template>
  <div>
    <swiper class="detail-swiper">
      <swiper-item v-for="(item, index) in topImages" :key="index">
        <img :src="item" alt="" key="item">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from '../../components/common/swiper'
// import Swiper from '../../components/common/swiper/Swiper.vue'
// import SwiperItem from '../../components/common/swiper/SwiperItem.vue'

export default {
  props: {
    topImages: {
      type: Array
    }
  },
  data () {
    return {
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}

</script>

<style scoped>
  .detail-swiper{
    width: 100%;
    height: 300px;
    overflow: hidden;
  }
</style>
