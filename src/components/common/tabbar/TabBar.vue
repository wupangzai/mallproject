<!--  -->
<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  data () {
    return {
    }
  },
  components:{
  }
}

</script>

<style scoped>
  #tab-bar{
    display: flex;
    background-color: #f6f6f6;
    justify-content: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0 -1px 1px rgba(75, 48, 48, 0.1);
  }

</style>
