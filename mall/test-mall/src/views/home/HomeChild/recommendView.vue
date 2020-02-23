<template>
  <div class="recommendView" >
      <div v-for="item in recommend" :key="item.acm" class="recommend-item">
         <a :href="item.link">
           <img :src="item.image">
           <div>{{item.title}}</div>
         </a>
      </div>
  </div>
</template>

<script>
export default {
    name:'recommendView',
    props:{
        recommend:{
            type: Array,
            default(){
                return []
            }
        }
    }

}
</script>

<style>
  .recommendView {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;

    padding: 40px 0 20px;
    border-bottom: 10px solid #eee;
  }

  .recommend-item {
    flex: 1;
  }

  .recommend-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }

</style>