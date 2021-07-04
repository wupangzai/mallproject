<!--  -->
<template>
  <div class="center">
    <p class="item" v-for="(item, index) in centerList" 
                    :key="index" 
                    :class="{active: index == currentIndex}" 
                    @click="itemClick(index)">
      {{ item }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    centerList: {
      type: Array,
    }
  },
  data () {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
    }
  },
  components:{
  }
}

</script>

<style scoped>
  .center{
    display: flex;
    justify-content: center;
    font-size: 13px;
  }
  .item{
    flex: 1;
  }
  .active{
    color: var(--color-high-text);
  }
</style>
