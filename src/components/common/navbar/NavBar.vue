<!--  -->
<template>
  <div class="nav-bar" :style="isNavColor">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props:{
    navColor:{
      type: String
    },
    textColor: {
      type: String
    }
  },
  data () {
    return {
    }
  },
  components:{
  },
  computed:{
    isNavColor() {
      return this.navColor? {backgroundColor: this.navColor,color: this.textColor} :{}
    },
  }
}

</script>

<style>
  .nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
    color: white;
  }
  .navColor{
    background-color: #ff8198;
  }
  .left, .right{
    width: 60px;
  }
  .center{
    flex: 1;
  }

</style>
