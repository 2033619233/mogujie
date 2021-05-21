<template>
  <div class="goods">
      <div class="goods-item" v-for="(item,index) in goods" :key="index" @click="itemClick(item.iid)">
          <img :src="item.show.img" alt="img" >
          <div class="dsc">
              <p>{{item.title}}</p>
              <span class="price">{{item.price}}</span>
              <span class="collect">{{item.cfav}}</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    },

    data() {
        return {
            currentIndex: 0
        }
    },
    methods:{
       itemClick(id) {
           this.$router.push(`/detail/${id}`)
       }
    }

}
</script>

<style scoped>
.goods{
   display: flex;
   flex-wrap: wrap;
   padding: 2px;
   justify-content: space-around;
}
.goods-item{
    width: 48%;
}
.goods-item img{
   width: 100%;
}
.dsc{
   padding: 4px 2px;
    text-align: center;

}
p{
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 13px;
    
}

.price{
color: pink;
font-size: 16px;
}
.collect{
margin-left: 5px;
}
</style>