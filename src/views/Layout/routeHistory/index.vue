<template>
  <div class="route-history">
    <div class="route" v-for="(item, index) in routeList" :key="index">{{item.meta.title}}</div>
  </div>
</template>

<script>
export default {
  computed: {
    routeList: function() {
      return this.$store.state.routeHistory.routeList;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/style/global.scss";
.route-history {
  height: 30px;
  margin-top: 5px;
  // box-shadow: $shadow;
  border-bottom: 1px solid $borderColor;
  padding-left: 10px;
  .route {
    min-width: 60px;
    height: 28px;
    border: 1px solid $borderColor;
    border-bottom: none;
    display: inline-block;
    margin-right: 5px;
    text-align: center;
    vertical-align: text-top;
  }
}
</style>
