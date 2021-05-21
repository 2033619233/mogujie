<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ length }})</div>
    </nav-bar>
    <template v-if="length">
    <cart-list v-for="(item,index) in list" :key="index" :products="item"></cart-list>
    </template>
    <p v-else>暂无添加的商品</p>
  </div>
</template>

<script>
import NavBar from "@/components/content/navbar/NavBar";
import CartList from './childComps/CartList'
import { mapGetters } from "vuex";

export default {
  components: {
    NavBar,
    CartList
  },
  mounted() {
  },
  computed: {
    // cartListLength() {
    //  return this.$store.state.cartList.length
    // },
    ...mapGetters({
      length: "cartLength",
      list: "cartList"
    })
  }
};
</script>

<style scoped>
.nav-bar {
  background-color: pink;
  color: aliceblue;
}
</style>
