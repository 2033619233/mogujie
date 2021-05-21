<template>
  <div class="container">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
     <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from './components/common/tabbar/MainTabBar'
export default {
  components: {
   MainTabBar
  },
  methods:{
   
  }
};
</script>

<style>
@import "./assets/css/base.css";

.container {
  height: 100%;
  width: 100%;
  position: relative;
}


</style>
