<template>
  <div class="tab-control">
      <div v-for="(item,index) in titles" :key="index" 
      class="item" 
      :class="{active: index === currentIndex}"
      @click="itemClick(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            currentIndex:0
        }
    },
props:{
    titles:{
        type:Array,
        default(){
            return []
        }
    }
},
methods:{
      itemClick(index){
            this.currentIndex = index
            this.$emit("tabClick",index)
        }
}
}
</script>

<style>
.tab-control{
    display: flex;
    text-align: center;
    line-height: 40px;
    height: 40px;
    background-color: #fff;
}
.tab-control .item{
    flex: 1;
}
.active{
    color: pink;
}
.active span{
    padding: 5px;
    border-bottom: 5px solid pink;

}
</style>