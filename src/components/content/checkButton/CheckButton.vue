<template>
  <div :class="{ checked: check }">
    <img src="@/assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  props:{
    check:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
     
    };
  },
  created(){
  

  },
  methods:{
   
  },
 
  
};
</script>

<style scoped>
.checked {
  background-color: red;
  border-color: red;
}
img {
  padding-left: 2px;
  
}
div {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid #aaa;
  line-height: 22px;
}
</style>
