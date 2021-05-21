<template>
  <div class="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
     <tab-control
        :titles="['流行', '新款', '精选']"
          class="tab-control"
        @tabClick="tabClick"
        ref="tabControlRef2"
        v-show="isTabFix"
      ></tab-control>
    <better-scroll
      class="bscroll"
      ref="scroll"
      :probeType="3"
      :pullDownRefresh="true"
      :pullUpLoad='true'
      @getScrollPosition="getScrollPosition"
      @pullingUp="getHomeGoods('pop')"
    >
      <home-swiper :banner="banner" @swiperImgLoad="getTabControlPosition"></home-swiper>
      <home-recommend-view :recommend="recommend"></home-recommend-view>
      <feature-view></feature-view>
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControlRef1"
        v-show="!isTabFix"
      ></tab-control>
      <goods-list :goods="goodsCom" class="goods" ></goods-list>
    </better-scroll>
    <back-top @click.native="backClick" v-show="isBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from "@/components/content/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
import FeatureView from "./childComps/FeatureView";
import TabControl from "@/components/content/tavControl/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import BetterScroll from "@/components/common/scroll/BetterScroll";
import BackTop from "@/components/content/backTop/BackTop";

import { getHomeMutidata, getHomeGoods } from "@/network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    BetterScroll,
    BackTop
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 1, list: [] },
        news: { page: 1, list: [] },
        sell: { page: 1, list: [] }
      },
      currentType: "pop",
      isBackTop: false,
      isTabFix:false,
      tabOffsetTop:0,
      saveY:0
    };
  },
  created() {
    // 获取轮播和导航栏数据
    this.getHomeMutidata();
    // 得到商品列表
    this.getHomeGoods("pop");
    // this.getHomeGoods("news");
    this.getHomeGoods("sell");
  },
  mounted() {
    this.$refs.scroll.scroll.refresh();
  },
  updated() {
    this.$refs.scroll.scroll.refresh();
  },
  activated(){
    this.$refs.scroll.scroll.scrollTo(0,this.saveY,0)
  },
  deactivated(){
    this.saveY = this.$refs.scroll.scroll.y
  },
  methods: {
    getHomeMutidata() {
      //  const res = await getHomeMutidata()
      getHomeMutidata().then(res => {
        this.banner = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControlRef1.currentIndex = index
      this.$refs.tabControlRef2.currentIndex = index
    },
    // 回到顶部
    backClick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500);
    },
    getScrollPosition(positon) {
      this.isBackTop = -positon.y > 1000;
      this.isTabFix = -positon.y > this.tabOffsetTop
    },
    getTabControlPosition() {
     this.tabOffsetTop = this.$refs.tabControlRef1.$el.offsetTop
    }
  },
  computed: {
    goodsCom() {
      return this.goods[this.currentType].list;
    }
  }
};
</script>

<style scoped>
.home {
  padding-top: 44px;
  position: relative;
  height: 100vh;
}
.home-nav {
  background-color: pink;
  color: #fff;
}
.home-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
/* .tab-control {
  position: sticky;
  top: 44px;
} */
.tab-control{
  position: relative;
  z-index: 1;
  background-color: #fff;
}
.goods {
  margin-top: 10px;
}
.bscroll {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
