<template>
<div class="nav-bar">

    <div class= "left">
        <slot name= "left"></slot>
    </div>

    <div class= "mid">
        <slot name= "mid"></slot>
    </div>

    <div class= "right">
        <slot name= "right"></slot>
    </div>
</div>
</template>

<script>
export default {
    name: "navBar"
}
</script>

<style scoped>
    .nav-bar {
        display: flex;
        line-height: 40px;
        height: 40px;
        box-shadow: 0 1px 1px rgba(100,100,100,.1);
        text-align: center;
    }
    .left, .right{
        width: 60px;
        
    }
    .mid {
        flex: 1;
        
    }
</style>