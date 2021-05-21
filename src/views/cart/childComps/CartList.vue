<template>
  <div class="list">
    <better-scroll ref="scroll">
      <cart-list-item class="item" :products="products"></cart-list-item>
    </better-scroll>
  </div>
</template>

<script>
import BetterScroll from "@/components/common/scroll/BetterScroll.vue";
import CartListItem from "./CartListItem";
export default {
  components: {
    BetterScroll,
    CartListItem
  },
  props:{
      products
      :{
          type:Object,
          default:{}
      }
  },
  activated(){
    //   this.$refs.scroll.scroll.refresh()
  }
};
</script>

<style scoped>
.list {

}
.item {

}
</style>
