<!--  -->
<template>
  <!-- 枚举键值判断是不是为空对象 -->
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <!-- 标题 -->
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="new-price">￥{{ goods.newPrice }}</span>
      <span class="old-price">{{ goods.oldPrice }}</span>
      <span class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length-1].name }}</span>
    </div>
    <div class="info-service">
      <div class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{ goods.services[index-1].name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
    }
  },
  data () {
    return {
    }
  },
  components:{
  }
}

</script>

<style scoped>
  .base-info{
    margin: 0 5px;
  }
  .info-title{
    font-size: 18px;
    color: black;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .new-price{
    color: var(--color-high-text);
    font-size: 20px;
    font-weight: 500;
    padding-right: 8px;
  }
  .old-price{
    text-decoration: line-through;
    color: #999;
    padding-right: 5px;
    font-size: 13px;
  }
  .discount{
    background-color: var(--color-high-text);
    color: white;
    border-radius: 5px;
    font-size: 14px;
  }
  .info-other{
    margin-top: 15px;
    padding-bottom: 8px;
    display: flex;
    font-size: 13px;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    color: #999;
  }
  .info-service{
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    border-bottom: 5px solid #eee;
    margin-top: 15px;
    padding-bottom: 20px;

  }
  .info-service-item{
    display: flex;
    align-items: center;
  }
  .info-service-item img{
    width: 14px;
    height: 14px;
  }

</style>
