<!--  -->
<template>
  <div class="goodList">
    <good-item v-for="(item, index) in goods" :key="index" :goodItem="item" class="item">

    </good-item>
  </div>
</template>

<script>
import GoodItem from './GoodItem.vue'
export default {
  name: 'GoodList',
  props: {
    goods:{
      type: Array
    }
  },
  data () {
    return {
    }
  },
  components:{
    GoodItem
  }
}

</script>

<style scoped>
  .goodList{
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    padding-left: 10px;
  }
  .item{
    width: 50%;
    padding: 10px 10px 0 0;
  }


</style>
