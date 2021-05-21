<template>
  <div id="detail">
    <detail-nav-bar class="nav-bar" @navClick="navBarClick"></detail-nav-bar>
    <scroll class="scroll" ref="scrollRef" @getScrollPosition="getScrollPosition">
    <detail-swiper :swiperImg="swiperImg" class="swiper" @imgLoad="imgLoad" ref="detailRef"></detail-swiper>
    <detail-base-info :goods="goods" ref="baseInfoRef"></detail-base-info>
     <detail-shop-info :shop="shop" ref="shopInfoRef"/>
      <!-- <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/> -->
      <detail-param-info :param-info="paramInfo" ref="paramInfoRef"/>
      </scroll>
      <back-top @click.native="backClick" v-show="isBackTop"></back-top>
      <detail-bottom-bar @cartClick="cartClick"></detail-bottom-bar>
  </div>
</template>

<script>
import DetailNavBar from './childComps/detailNavBar';
import DetailSwiper from './childComps/Detailswiper';
// import DetailsGoodsInfo from './childComps/DetailsGoodsInfo';
import DetailBaseInfo from './childComps/DetailBaseInfo';
import DetailShopInfo from './childComps/DetailShopInfo';
import DetailParamInfo from './childComps/DetailParamInfo'
import Scroll from '@/components/common/scroll/BetterScroll'
import DetailBottomBar from './childComps/DetailBottomBar'


import {getDetail,Goods,Shop,GoodsParam} from '@/network/detail.js'
import {debounce} from '@/utils.js'
import {backTop} from '@/mix.js'


export default {
  name:'Detail',
  components: {
    DetailNavBar,
    DetailSwiper,
    // DetailsGoodsInfo,
    DetailBaseInfo,
    DetailShopInfo,
    DetailParamInfo,
    Scroll,
    DetailBottomBar,
  },
  mixins:[backTop],
  data() {
    return {
        id:null,
        swiperImg:[],
        goods:{},
        shop:{},
        paramInfo:{},
        detailInfo:{},
        position:[],
        positionMethod:null,
        currentPosition:0,
        isBackTop: false,
    };
  },
  updated() {
  },

  created() {
        this.id = this.$route.params.id
        getDetail(this.id).then(res => {
        const data = res.data.result
        this.swiperImg = res.data.result.itemInfo.topImages
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        this.shop = new Shop(data.shopInfo)
        this.detailInfo = data.detailInfo;
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        this.positionMethod = debounce(() => {
           this.position = []
      this.position.push(0)
      this.position.push(this.$refs.baseInfoRef.$el.offsetTop)
      this.position.push(this.$refs.shopInfoRef.$el.offsetTop)
      this.position.push(this.$refs.paramInfoRef.$el.offsetTop)
        },50)
    })
  },
  methods:{
    imgLoad() {
      this.$refs.scrollRef.scroll.refresh()
      this.positionMethod()
      
    },
    navBarClick(index) {
      // this.$refs.scrollRef.scroll
      this.position.forEach(a => {
        console.log(a);
      });
      // this.currentPosition 
    },
    getScrollPosition(position) {
       this.currentPosition = -position.y
            this.isBackTop = -position.y > 1000;     
    },
    // 加入购物车点击
    cartClick() {
      const product = {}
      product.image = this.swiperImg[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.id = this.id
      this.$store.dispatch('addCart',product)
    }
  }
};
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.swiper{
    height: 300px;
}
.scroll{
  height: calc(100% - 44px - 49px);
}
.nav-bar{
  position: relative;
    z-index: 90;
    background-color: #fff;
}
</style>
