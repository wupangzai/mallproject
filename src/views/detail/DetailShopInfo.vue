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
            <span>总销量</span>
          </div>
          <div class="shop-run-desc">
            <span>{{ shop.goodCount }}</span>
            <span>全部宝贝</span>
          </div>
      </div>
      <div class="shop-comment">
        <div class="shop-comment-desc" v-for="(item, index) in shop.score" :key="index">
          <span>{{ item.name }}</span>
          <span :class="{isHigh: item.score >= 4.8, isNotHigh: item.score < 4.8}">{{ item.score.toFixed(2) }}</span>
          <span :class="{isBetter:item.isBetter, isNotBetter:!item.isBetter}">{{ item.isBetter ? '高' : '低' }}</span>
        </div>
      </div>
    </div>
    <div class="enter-shop">
      <div>进店逛逛</div>
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
    flex-wrap: wrap;
    border-right: 1px solid #cfcfcf8e;
    align-items: center;
    justify-content: center;
  }
  .shop-run-nums{
    font-size: 14px;
    display: flex;
    justify-content: space-around;
    color: black;
    display: flex;flex-direction: column;
    align-items: center;
    margin-right: 15px;
  }
  .shop-run-nums span{
    padding-bottom: 8px;
  }
  .shop-run-desc{
    font-size: 14px;
    color: black;
    display: flex;
    justify-content: space-around;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .shop-run-desc span{
    padding-bottom: 8px;
  }
  .shop-comment{
    flex: 0.5;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 15px;
    font-size: 14px;
    color: black;
  }
  .shop-comment-desc{
    margin-bottom: 12px;
    text-align: center;
  }
  .shop-comment-desc span{
    padding-right: 8px;    
  }
  .isBetter{
    color: red;
  }
  .isNotBetter{
    color: green;
  }
  .isHigh{
    color: red;
  }
  .isNotHigh{
    color: green;
  }
  .enter-shop{
    display: flex;
    justify-content: center;
  }
  .enter-shop div{

    text-align: center;
    line-height: 24px;
    width: 85px;
    height: 24px;
    background-color: #eee;
    border-radius: 20px;
    font-size: 14px;
    margin-right: 10px;
  }
</style>
