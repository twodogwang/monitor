<template>
  <div class="sidebar-container">
    <side-header></side-header>
    <el-menu
      background-color="#354157"
      text-color="#fff"
      active-text-color="#42a5f2"
      unique-opened
    >
      <sidebar-item
        v-for="(route,index) in routes"
        :route="route"
        :key="route.name"
      ></sidebar-item>
    </el-menu>
    <side-footer></side-footer>
  </div>
</template>

<script>
import NProgress from "nprogress";
import { sidebar } from "@/route/router.js";
export default {
  name: "sidebar-container",
  data() {
    return {
      routes: sidebar
    };
  },
  created() {
    NProgress.start();
  },
  mounted() {
    NProgress.done();
  },
  components: {
    sidebarItem: () => import("comp/sidebarComp/sidebarItem.js"),
    sideFooter: () => import("./sideFooter.vue"),
    sideHeader: () => import("./sideHeader.vue")
  }
};
</script>

<style lang="scss" scoped>
@import "assets/style/index.scss";
.sidebar-container {
  width: 200px;
  height: 100vh;
  float: left;
  background-color: rgb(53, 65, 87);
  box-shadow: $shadow;
  position: relative;
  .el-menu {
    border-right: none;
  }
}
</style>
