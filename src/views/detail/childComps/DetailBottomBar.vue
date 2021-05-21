<template>
  <div class="bottom-bar">
      <div class="left bar-item">
          <div>
              <i class="icon service"></i>
              <span>客服</span>
          </div>
          <div>
              <i class="icon shop"></i>
              <span>店铺</span>
          </div>
          <div>
              <i class="icon"></i>
              <span>收藏</span>
          </div>
          
      </div>
      <div class="right bar-item">
          <div class="cart" @click="cartClick">加入购物车</div>
          <div class="buy">购买</div>
      </div>
  </div>
</template>

<script>
export default {
methods:{
    cartClick() {
        this.$emit('cartClick')
    }
}
}
</script>

<style scoped>
  .bottom-bar{
      position: fixed;
      height: 49px;
      bottom: 0;
      right: 0;
      left: 0;
      background-color: #fff;
      /* position: relative;
      bottom:49px; */
      display: flex;
      text-align: center;
      border-top: 1px solid #ccc;
  }
  .bar-item{
      display: flex;
      flex: 1;
      align-items: center;
  }
  .bar-item > div{
      flex: 1;
  }
  .bar-item .icon{
      display: block;
      width: 22px;
      height: 22px;
      background: url("../../../assets/img/detail/detail_bottom.png") 0px 0px/100%;
      margin: 0 auto;
  }
   .bar-item .service{
       background-position: 0 -54px;
   }
    .bar-item .shop{
        background-position: 0 -98px;
    }
    .right .cart{
        line-height: 58px;
        background-color: #ffff00;
    }
    .right .buy{
         line-height: 58px;
        background-color: deeppink;
        color: white;
    }
</style>