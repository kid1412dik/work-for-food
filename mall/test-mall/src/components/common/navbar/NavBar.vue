<template>
<div class="nav-bar">

    <div class="left">
        <slot></slot>
    </div>

    <div class="mid">
        <slot></slot>
    </div>

    <div class="right">
        <slot></slot>
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
        line-height: 44px;
        height: 44px;
        box-shadow: 0 1px 1px rgba(100,100,100,.1);
        text-align: center;
    }
    .left, .right{
        width: 60px;
        background-color: #f00;
    }
    .mid {
        flex: 1;
        background-color: #f0f;
    }
</style>