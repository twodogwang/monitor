<template>
  <div class="home">
    <side-bar></side-bar>
    <div class="right-container">
      <nav-bar>
        <span class="title" slot="title">
          网络安全态势感知平台
        </span>
      </nav-bar>
      <div class="content-container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "index",
  components: {
    sideBar: () => import("./Layout/Sidebar"),
    navBar: () => import("./Layout/Navbar")
  }
};
</script>
<style lang="scss" scoped>
@import "assets/style/index.scss";
.home {
  position: relative;
  width: 100%;
  height: 100%;
  .right-container {
    margin-left: 200px;
    .title {
      margin: 0;
      font-weight: 200;
      color:#666;
      font-size: 24px;
    }
    .content-container {
      padding: 20px;
    }
  }
}
</style>

