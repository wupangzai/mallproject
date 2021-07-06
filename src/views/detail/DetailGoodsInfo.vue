<!--  -->
<template>
  <div class="goods-info" v-if="Object.keys(detailInfo).length != 0">
    <div class="desc">
      {{ detailInfo.desc }}
    </div>
    <div class="img-desc" v-for="(item, index) in detailInfo.detailImage" :key="index">
      <p>{{ item.key }}</p>
      <img :src="item" v-for="(item, index) in item.list" :key="index" @load="imgload">
    </div>

  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      type: Object
    }
  },
  data () {
    return {
      counter: 0,
      imgLength: 0,
    }
  },
  methods: {
    imgload() {
      // 定义一个counter判断全部加载完后发出一次事件，避免多次发出
      if(++this.counter == this.imgLength)
      this.$emit('loadfinish')
    }
  },
  watch: {
    
    // 监听图片长度
    // 定义一个imglength监听加载完成的图片数量
    detailInfo() {
      this.imgLength = this.detailInfo.detailImage[0].list.length
    }
  },

}

</script>

<style scoped>
  .goods-info{
    margin: 10px 10px;
  }
  .desc{
    font-size: 12px;
    border: 1px solid #eee;
    padding: 10px 10px ;
  }
  .img-desc{
    margin-top: 10px;
    font-size: 14px;
  }
  .img-desc img{
    width: 100%;
  }
</style>
