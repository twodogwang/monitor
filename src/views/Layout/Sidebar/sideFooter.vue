<template>
  <div class="side-footer">
    <slot>这是底部</slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.side-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  color: #fff;
  line-height: 60px;
  text-align: center;
  font-size: 18px;
}
</style>
