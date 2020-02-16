<template >

    <div id='tabbar-item' @click="here">
        <slot v-if="!isactive" name="item-icon"></slot>
        <slot v-else name="item-icon"></slot>
        <slot :class="{active: isactive}"  name="item-text"></slot>
    </div>

</template>

<script>
export default {
    name: "tabbar-item",
    data(){
        return{
            isactive: true
        }
    },
    methods: {
      here (){
        this.$router.replace(this.path)
      }
    },
    props:[
      'path'
    ]
}
</script>


<style>
  #tabbar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  #tabbar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
    
  }
  .active {
    color: red;
  }
</style>