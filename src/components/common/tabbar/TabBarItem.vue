<template>
  <div class="tabbar_item" @click="itemClick" :style="activeStyle">
    <div v-if="!isActive"><slot name="img1"></slot></div>
    <div v-else><slot name="img2"></slot></div>
    <div><slot name="tit"></slot></div>
  </div>
</template>

<script>
export default {
  methods: {
    itemClick() {
      this.$router.replace(this.path)
    }
  },
   props:{
      path:String,
    activeColor:{
      type:String,
      default:'skybule'
    }
    },
    computed: {
      isActive(){
        return this.$route.path.indexOf(this.path) === 0
      },
      activeStyle(){
        return this.isActive ? {color: this.activeColor} : {}
      }
    }
};
</script>

<style scoped>
.TabBar .tabbar_item {
  flex-grow: 1;
  text-align: center;
  font-size: 14px;
}
.TabBar .tabbar_item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-top: 5px;
}
</style>
