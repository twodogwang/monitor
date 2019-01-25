<template>
  <div class="nav-container">
    <span>
      <slot name="title"></slot>
    </span>
    <div class="menu">
      您好，{{userInfo.name}}
      <i class="el-icon-caret-bottom menu-icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: { name: "Kyon" }
    };
  }
};
</script>

<style scoped lang="scss">
@import 'assets/style/index.scss';
.nav-container {
  line-height: 60px;
  padding: 7px;
  box-shadow: $shadow;
  .menu {
      display: inline-block;
      float: right;
      .menu-icon {
          cursor: pointer;
      }
  }
}
</style>
