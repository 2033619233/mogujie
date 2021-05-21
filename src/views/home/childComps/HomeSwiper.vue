<template>
   <swiper>
        <swiper-item v-for="(item,index) in banner" :key="index">
          <a :href="item.link">
            <img :src="item.image" alt="swiper" @load="swiperImgLoad">
          </a>
        </swiper-item>
      </swiper>
</template>

<script>
import {Swiper,SwiperItem} from '@/components/common/swiper/index'
export default {
    props:{
        banner:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data() {
      return{
      isImgLoad: true
      }
    },
    components: {
   Swiper,
   SwiperItem
  },
  methods:{
    swiperImgLoad() {
      // 只加载一次
      if(this.isImgLoad){
        this.$emit('swiperImgLoad')
        this.isImgLoad = false
      }
  }
  }
}
</script>

<style>

</style>