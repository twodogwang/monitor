<template>
  <div class="home">
    <side-bar></side-bar>
    <div class="right-container">
      <nav-bar>
        <span class="title" slot="title">网络安全态势感知平台</span>
      </nav-bar>
      <route/>
      <div class="content-container">
        <transition name="slide-fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
      <foot></foot>
    </div>
  </div>
</template>

<script>
import { sideBar, navBar, foot, route } from "./Layout/index.js";

export default {
  name: "Home",
  components: {
    sideBar,
    navBar,
    foot,
    route
  },
  watch: {
    $route: function(val) {
      console.log(val);
      this.$store.dispatch("addHistory", val);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "assets/style/index.scss";
.home {
  position: relative;
  width: 100%;
  height: 100%;
  display: inline-block;
  .right-container {
    margin-left: 200px;
    height: 100vh;
    position: relative;
    .title {
      margin: 0;
      font-weight: 200;
      color: #666;
      font-size: 24px;
    }
    .content-container {
      // height: 100%;
      position: absolute;
      top: 117px;
      bottom: 74px;
      width: 100%;
      overflow: auto;
      padding: 20px;
    }
  }
}
</style>
