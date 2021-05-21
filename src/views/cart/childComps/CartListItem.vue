<template>
  <div class="cart-item">
      <check-button class="check" :check="products.checked" @click.native="checkClick"></check-button>
      <div class="img">
          <img :src="products.image" alt="">
      </div>
      <div class="info">
          <div class="title">
              {{products.title}}
          </div>
          <div class="desc">
              {{products.desc}}
          </div>
          <div class="bottom">
              <div class="item-price">￥{{products.price}}</div>
              <div class="warp"></div>
              <div class="item-count">x{{products.count}}</div>
          </div>
      </div>
  </div>
</template>

<script>
import CheckButton from '@/components/content/checkButton/CheckButton'
 
export default {
    props:{
        products
        :{
            type:Object,
            default:{}
        }
    },
components:{
    CheckButton
},
methods:{
checkClick() {
    this.products.checked = !this.products.checked
    }
},
//  watch:{
//     check(n,old) {
//       console.log(n,old);
//     }
//   }
 
}
</script>

<style scoped>
.cart-item{
    display: flex;
    height: 100px;
    overflow: hidden;
    width: 100vw;
    border-bottom: 1px solid #ccc;
    align-items: center;
}
.check{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    align-self: center;
    margin: 0 5px;
}
.img{
    width: 100px;
    height: 100%;
}
img{
    width: 100%;
    height: 100%;
}
.info{
    padding: 5px;
    width: 250px;
}
.bottom{
display: flex;
margin-top: 10px;
}

.title,
.desc{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    flex-wrap: wrap;
}
.item-price{
    color: pink;
    font-size: 20px;
}
.item-count{
    margin-right: 5px;
}
.warp{
    flex: 1;
}
</style>