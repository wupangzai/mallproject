<!--  -->
<template>
  <div class="comment">
    <div class="more-comments">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="comment-item">
      <div class="comment-user">
        <img :src="detailComment.avatar" alt=""/>
        <span>{{ detailComment.username }}</span>
      </div>
      <div class="comment-content">
        <span>{{ detailComment.content }}</span>
      </div>
      <div class="style">
        <span>{{ date }}</span>
        <span>{{ detailComment.style }}</span>
      </div>
      <div class="images">
        <img :src="item" v-for="(item, index) in detailComment.images" :key="index">
      </div>
    </div>
  </div>
</template>

<script>
// 导入时间戳函数
import {formateDate} from '../../common/utils'

export default {
  props: {
    detailComment: {
      type: Object
    }
  },
  data () {
    return {
    }
  },
  components:{
  },
  computed: {
    date() {
      // 时间戳如何转化为字符串
      // 1、将时间戳转化为Date对象
      // const date = new Date(时间戳（秒）*1000)
      const date = new Date(this.detailComment.date * 1000)
      // 2、将date进行格式化，转化成对应的字符串
      // 中间的连接方式可任意修改
      // Y：year  M：month  d：day
      // h: hour  m: minute  s: second
     return formateDate(date, 'yyyy-MM-dd')

    }
  }
}

</script>

<style scoped>
  .comment{
    margin: 0px 10px;
    padding-bottom: 30px;
    border-bottom: 2px solid  #eee;
  }
  .more-comments{
    display: flex;
    font-size: 13px;
    justify-content: space-between;
    border-bottom: 3px solid #eee;
    padding-top: 10px;
    padding-bottom: 15px;
  }
  .comment-item{
    margin-top: 20px;
  }
  .comment-user{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .comment-user img{
    widows: 40px;
    height: 40px;
    border-radius: 25px;
    margin-right: 10px;
  }
  .comment-content{
    font-size: 13px;
  }
  .style{
    color: #999;
    margin-top: 10px;
    font-size: 13px;
  }
  .style span{
    margin-right: 5px;
  }
  .images{
    margin-top: 15px;
  }
  .images img{
    margin-right: 5px;
    width: 70px;
    height: 70px;
  }
</style>
