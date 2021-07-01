<!--  -->
<template>
  <div class="tab-control">
    <div class="item" v-for="(item, index) in title" :key="index" @click="itemClick(index)" :class="{'active':currentIndex == index}">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    title: {
      type: Array
    }
  },
  data () {
    return {
      currentIndex:0,
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  },

  components:{
  }
}

</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    font-size: 14px;
    z-index: 9;
  }
  .item{
    flex: 1;
    height: 40px;
    line-height: 40px;
  }
  .active{
    color: var(--color-high-text);
  }
  .active span{
    border-bottom: 3px solid var(--color-tint);
    padding-bottom: 5px;
  }
</style>
