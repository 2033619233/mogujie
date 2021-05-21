<template>
  <div>
    <swiper class="swiper">
      <swiper-item v-for="(item, index) in swiperImg" :key="index">
        <img :src="item" alt="" @load="imgLoad" />
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "@/components/common/swiper/index";

export default {
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    swiperImg: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  methods: {
    imgLoad() {
      this.$emit("imgLoad");
    }
  },
  created() {}
};
</script>

<style>
.swiper {
  height: 300px;
  overflow: hidden;
}
</style>
