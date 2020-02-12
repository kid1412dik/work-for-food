<template>
  <tabbar>
      <tabbarItem path="home">
        <img slot="item-icon" src="./assets/img/tabbar/主页.svg" alt="">
        <div slot="item-text" activeColor="pink">首页</div>
      </tabbarItem >
      <tabbarItem path="cart">
        <img slot="item-icon" src="./assets/img/tabbar/购物车.svg" alt="">
        <div slot="item-text">购物车</div>
      </tabbarItem>
      <tabbarItem path="category">
        <img slot="item-icon" src="./assets/img/tabbar/列表.svg" alt="">
        <div slot="item-text">分类</div>
      </tabbarItem>
      <tabbarItem path="profile">
        <img slot="item-icon" src="./assets/img/tabbar/个人中心.svg" alt="">
        <div slot="item-text">我的</div>
      </tabbarItem>
    </tabbar>
</template>

<script>
import tabbar from './components/tabbar/tabbar'
import tabbarItem from './components/tabbar/tabbar-item'
export default {
  components: {
    tabbarItem,
    tabbar
  }
}
</script>

<style>
@import './assets/css/base.css';
</style>