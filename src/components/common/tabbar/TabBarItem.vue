<!--  -->
<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
    <slot name="item-icon"></slot>
    </div>
    <div v-else>
    <slot name="item-icon_active"></slot>
    </div>
    <div :style="activeStyle">
    <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props:{
    path: {
      type: String
    },
    activeColor: {
      type: String,
      default:'deepPink'
    }
  },
  data () {
    return {
      // isActive: true
    }
  },
  methods: {
    itemClick() {
      console.log('123')
      this.$router.replace(this.path)
    }
  },
  computed: {
    isActive() {
      return this.$route.path == this.path
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  components:{
  }
}

</script>

<style scoped>
    .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;

  }
  
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-top: 3px;
    margin-bottom: 2px;
  }
  .active{
    color: pink;
  }
</style>
