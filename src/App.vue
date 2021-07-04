<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar v-if="$route.meta.showTabBar"></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from './components/content/maintabbar/MainTabBar.vue'

export default {
  name: 'App',
  data() {
    return {
    }
  },
  methods:{

  },
  components: {
    MainTabBar
  },

}
</script>

<style>
/* 导入base样式 */
  @import "assets/css/base.css";
</style>
