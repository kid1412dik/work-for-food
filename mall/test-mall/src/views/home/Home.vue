<template>
  <div id="home">
  <navBar class="homenav"><div slot="mid">购物街</div></navBar>
  <home-swiper class="homeswiper" :banners="banners"></home-swiper>
  <recommend-view :recommend="recommend"></recommend-view>
  </div>
</template>

<script>
import navBar from 'components/common/navbar/NavBar'

import homeSwiper from './HomeChild/homeswiper'
import recommendView from './HomeChild/recommendView'

import {getmultdata} from 'network/home.js'

  export default {
    name: "Home",
    components: {
      navBar,
      homeSwiper,
      recommendView 
    },
    data() {
      return {
        banners:[],
        recommend:[]
      }
    },
    created() {
      this.getmultdata();
      console.log(this.recommend)
    },
    methods: {
      getmultdata(){
        getmultdata().then(
          res => {
            this.banners = res.data.banner.list;
            this.recommend = res.data.recommend.list;
          })
      }
    },
  }
</script>

<style scoped>
#home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }

.homenav {
  background-color: var(--color-tint);
    /* color: #fff; */

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
    /* 堆叠权限 */
}

.homeswiper {
  position: fixed;
  top: 40px;
}





</style>
