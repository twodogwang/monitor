<template>
  <div class="footer-container">
    <span>
      <slot name="title">百达智慧</slot>
    </span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "assets/style/global.scss";
.footer-container {
  line-height: 60px;
  padding: 7px;
  position: absolute;
  bottom: 0;
  width: 100%;
  box-shadow: $shadow;
}
</style>
