<template>
  <div class="wrapper" ref="wrap">
    <div class="content"><slot></slot></div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    /**
     * 1 滚动的时候会派发scroll事件，会截流。
     * 2 滚动的时候实时派发scroll事件，不会截流。
     * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
     */
    probeType: {
      type: Number,
      default: 0
    },
    /**
     * 点击列表是否派发click事件
     */
    click: {
      type: Boolean,
      default: false
    },
    /**
     * 是否开启横向滚动
     */
    scrollX: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发滚动到底部的事件，用于上拉加载
     */
    pullUpLoad: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发顶部下拉的事件，用于下拉刷新
     */
    pullDownRefresh: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrap, {
      probeType: this.probeType,
      click: true,
      pullDownRefresh: true,
      pullUpLoad: true
    });

    this.scroll.on("scroll", position => {
      this.$emit("getScrollPosition", position);
    });
    this.scroll.on("pullingDown", () => {
      
    });
    this.scroll.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
  methods: {
    finishPullUp() {
     this.scroll &&
      this.scroll.finishPullUp();
    }
  }
};
</script>

<style>
/* .wrapper{
  height: 100%;

 */
/* .content{
height: 100%;
} */
</style>
