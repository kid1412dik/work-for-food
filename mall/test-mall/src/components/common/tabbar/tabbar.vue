<template>
    <div id='tabbar' >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:"tabbar"
}
</script>


<style>
#tabbar {
  display: flex;
  background-color: #f2f2f2;
  height: 49px;
  position: fixed;
  /* ? */
  left: 0px;
  right: 0px;
  /* 占据整个宽度 */
  bottom: 0px;
  box-shadow: 0px -1.5px 10px rgba(69, 149, 160, 0.2)
}

</style>
