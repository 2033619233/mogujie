<template>
  <div class="recommend">
      <div class="recommend-item" v-for="item in recommend" :key="item.sort">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        recommend:{
            type:Array,
            deafult(){
                return []
            }
        }
    }
}
</script>

<style scoped>
.recommend{
    display: flex;
    padding: 20px 0 30px 0;
    font-size: 12px;
    border-bottom: 10px solid #eee;
    text-align: center;
    width: 100%;
}
.recommend .recommend-item{
    flex: 1;
}
.recommend .recommend-item img{
width: 80px;
height: 80px; 
margin-bottom: 10px;
}
</style>