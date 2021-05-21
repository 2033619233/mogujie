<template>
    <tab-bar class="tabbar_item">
      <tab-bar-item path="/home" activeColor="deeppink">
        <img src="../../../assets/img/tabbar/home.svg" alt="lo" slot="img1" />
        <img src="../../../assets/img/tabbar/home_active.svg" alt="lo" slot="img2" />
        <div slot="tit">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="deeppink">
        <img src="../../../assets/img/tabbar/category.svg" alt="lo" slot="img1" />
        <img
          src="../../../assets/img/tabbar/category_active.svg"
          alt="lo"
          slot="img2"
        />
        <div slot="tit">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="deeppink">
        <img src="../../../assets/img/tabbar/shopcart.svg" alt="lo" slot="img1" />
        <img
          src="../../../assets/img/tabbar/shopcart_active.svg"
          alt="lo"
          slot="img2"
        />
        <div slot="tit">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="deeppink">
        <img src="../../../assets/img/tabbar/profile.svg" alt="lo" slot="img1" />
        <img
          src="../../../assets/img/tabbar/profile_active.svg"
          alt="lo"
          slot="img2"
        />
        <div slot="tit">详情</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from "./TabBar.vue";
import TabBarItem from "./TabBarItem.vue";
export default {
  components: {
    TabBar,
    TabBarItem
  },
  methods: {}
};
</script>

<style></style>
