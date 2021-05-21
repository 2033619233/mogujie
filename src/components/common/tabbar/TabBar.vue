<template>
  <div class="TabBar">
  <slot></slot>
  </div>
</template>

<script>
  export default {
   
  }
</script>

<style scoped>
  .TabBar {
  display: flex;
  height: 49px;
  background-color: #f6f6f6;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
