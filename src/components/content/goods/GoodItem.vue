<!--  -->
<template>
  <div class="goodItem" @click="itemClick">
    <img :src="goodItem.show.img" alt="" @load="imgLoad">
    <div class="goodInfo">
      <p>{{goodItem.title}}</p>
      <span class="price">{{goodItem.price}}</span>
      <span>★</span>
      <span class="collect">{{goodItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodItem',
  props: {
    goodItem: {
      type: Object
    }
  },
  data () {
    return {
    }
  },
  components:{
  },
  methods: {
    imgLoad() {
      // 事件总线
      this.$bus.$emit('imgLoad')
    },
    itemClick() {
      console.log('点击了item');
      this.$router.push({
        path: '/detail',
        query:{
          id: this.goodItem.iid
        }
      })
    }
  }
}

</script>

<style scoped>
  .goodItem{
    padding-bottom: 1px;
  }
  .goodItem img{
    width: 100%;
    border-radius: 5px;
  }
  .goodInfo{
    font-size: 12px;
    overflow: hidden;
  }
  .goodInfo p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .price{
    color: var(--color-high-text);
    margin-right: 10px;
  }
  .collect::before{
    content: '';
    width: 14px;
    height: 14px;
    background: url('~@/assets/img/common/collect.svg') 0 0/14px 14px; 
  }
</style>
