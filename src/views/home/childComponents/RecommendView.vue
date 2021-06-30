<!--  -->
<template>
  <div class="recommend">
    <div class="item" v-for="(item, index) in recommend" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt=""/>
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
    recommend:{
      type: Array
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
  .recommend{
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }
  .item{
    flex: 1;
    
  }
  .item img{
    width: 65px;
    height: 65px;
    margin-bottom: 10px;
  }


</style>
