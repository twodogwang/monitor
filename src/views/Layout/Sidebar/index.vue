<template>
  <div class="sidebar-container">
    <el-menu>
      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item-group>
        <span slot="title">分组一</span>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group> -->
    <sidebar-item v-for="(item,index) in router" :route="item" :key="item.name"></sidebar-item>
    </el-menu>
  </div>
</template>

<script>
import { routeList } from "@/router.js";
export default {
  name: "sidebar-container",
  data() {
    return {
      router: routeList
    };
  },
  created() {
    console.log(routeList);
  },
  components: {
    sidebarItem:()=>import('comp/sidebarComp/sidebarItem.js')
  }
};
</script>

<style lang="scss" scoped>
.sidebar-container {
  width: 100px;
  float: left;
}
</style>
