<template>
  <tabbar>
      <tabbarItem path="home">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg">
        <div slot="item-text">首页</div>
      </tabbarItem >
      <tabbarItem path="cart">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg">
        <div slot="item-text">购物车</div>
      </tabbarItem>
      <tabbarItem path="category">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg">
        <div slot="item-text">分类</div>
      </tabbarItem>
      <tabbarItem path="profile">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg">
        <div slot="item-text">我的</div>
      </tabbarItem>
    </tabbar>
</template>

<script>
import tabbar from 'components/common/tabbar/tabbar'
import tabbarItem from 'components/common/tabbar/tabbar-item'
export default {
  name: "MainTabBar",
  components: {
    tabbarItem,
    tabbar
  }
}
</script>

<style>

</style>