import Vue from "vue";

export default Vue.component("sidebar-item", {
  render: function(h) {
    if (this.route.children && this.route.children.length > 0) {
      return (
        <el-submenu index={this.route.name}> {this.route.name} </el-submenu>
      );
    } else {
      return <em>12343</em>;
    }
  },
  props: {
    route: {
      type: Object
    }
  }
});
