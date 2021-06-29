<!--  -->
<template>
  <div id="home">
    <nav-bar navColor='#ff8198'>
      <template v-slot:center>
        购物街
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components:{
    NavBar
  }
}

    NavBar
</script>

<style scoped>

</style>
