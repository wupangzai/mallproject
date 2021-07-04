<!--  -->
<template>
  <div class="shop">
    <div class="shop-logo-name">
      <img :src="shop.logo" alt="">
      <span>{{ shop.name }}</span>
    </div>
    <div class="shop-info">
      <div class="shop-run">
          <div class="shop-run-nums">
            <span>{{ goodsell }}万</span>
            <span>{{ shop.goodCount }}</span>
          </div>
          <div class="shop-run-desc">
            <span>总销量</span>
            <span>全部宝贝</span>
          </div>
      </div>
      <div class="shop-comment">
        <div class="shop-comment-desc" v-for="(item, index) in shop.score" :key="index">
          <span>{{ item.name }}</span>
          <span>{{ item.score.toFixed(2) }}</span>
          <span :class="{isBetter:item.isBetter, isNotBetter:!item.isBetter}">{{ item.isBetter ? '高' : '低' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data () {
    return {

    }
  },
  components:{
  },
  computed: {
    goodsell() {
      return (this.shop.sells/10000).toFixed(1)
    },
    isBetter() {
      return this.shop.score
    }
  }
}

</script>

<style scoped>
  .shop{
    margin: 0 5px;
  }
  .shop-logo-name{
    display: flex;
    align-items: center;
    margin: 25px 0;
  }
  .shop-logo-name img{
    width: 50px;
    width: 50px;
    border-radius: 25px;
    margin-right: 10px;
    border: 2px solid #eee;
  }
  .shop-logo-name span{
    font-size: 18px;
    color: #777;
  }
  .shop-info{
    display: flex;
    margin: 5px 20px;
    align-items: center;
  }
  .shop-run{
    flex: 0.5;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border-right: 1px solid #cfcfcf8e;
  }
  .shop-run-nums{
    font-size: 18px;
    font-weight: 520;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-around;
    color: black;
  }
  .shop-run-desc{
    font-size: 14px;
    color: black;
    display: flex;
    justify-content: space-around;
  }
  .shop-comment{
    flex: 0.5;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 10px;
    font-size: 14px;
    color: black;
  }
  .shop-comment-desc{
    margin-bottom: 12px;
  }
  .shop-comment-desc span{
    padding-right: 6px;    
  }
  .isBetter{
    background-color:red;
    color: white;
  }
  .isNotBetter{
    background-color: green;
    color: white;
  }
</style>
