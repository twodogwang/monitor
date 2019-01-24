<template>
  <div class="home">
    <!-- <div class="overflow-container"> -->
      <side-bar></side-bar>
    <!-- </div> -->
    <div class="content-container">
      <nav-bar></nav-bar>
      <router-view></router-view>
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
.home {
  position: relative;
  width: 100%;
  height: 100%;
  .overflow-container {
    display: inline-block;
  }
  .content-container {
    margin-left: 110px;
  }
}
</style>

