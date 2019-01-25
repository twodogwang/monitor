<template>
  <div class="sidebar-container">
    <el-menu
      background-color="rgb(53,65,87)"
      text-color="rgb(25,37,45)"
      active-text-color="#fff"
    >
      <sidebar-item
        v-for="(route,index) in routes"
        :route="route"
        :key="route.name"
      ></sidebar-item>
    </el-menu>
  </div>
</template>

<script>
import { sidebar } from "@/router.js";
export default {
  name: "sidebar-container",
  data() {
    return {
      routes: sidebar
    };
  },
  created() {},
  components: {
    sidebarItem: () => import("comp/sidebarComp/sidebarItem.js")
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
  .el-menu {
    border-right: none;
  }
}
</style>
