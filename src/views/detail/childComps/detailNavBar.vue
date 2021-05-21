<template>
  <div>
    <nav-bar>
      <div slot="left" @click="backClick">
          <img src="@/assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" :title="title" class="title">
          <div v-for="(item,index) in title" :key="index" class="title-item" @click="itemClick(index)"
          :class="{active:index === curentIndex}"
          >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/content/navbar/NavBar.vue';
export default {
  components: {
    NavBar
  },
  data() {
    return {
      title: ["商品", "详情", "评论", "推荐"],
      curentIndex:0
    };
  },
  methods:{
      itemClick(index){
          if(this.curentIndex === index) return
          this.curentIndex = index
          this.$emit('navClick',index)
      },
       backClick(){
          // this.$router.back()
         this.$router.go(-1)
      }
  }
};
</script>

<style scoped>
.left img{
    margin-top: 10px;
}
.title{
    display: flex;
}
.title-item{
    flex: 1;
}
.active{
    color: pink;
}
</style>
