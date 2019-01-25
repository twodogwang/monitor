import Vue from "vue";
import router from "vue-router";

export default Vue.component("sidebar-item", {
  // functional: true,
  render: function(h, ctx) {
    // const _this = this;
    const renderSidebar = route => {
      if (route.children && route.children.length > 0) {
        const menuList = route.children.map(value => {
          if (value.children && value.children.length > 0) {
            return renderSidebar(value);
          } else {
            return (
              <el-menu-item
                onClick={this.push.bind(this, value.name)}
                index={value.path}
              >
                <span slot="title">{this.route.meta.title}</span>
              </el-menu-item>
            );
          }
        });
        return (
          <el-submenu index={route.name}>
            <span slot="title">{route.meta.title}</span>
            {menuList}
          </el-submenu>
        );
      } else {
        return (
          <el-menu-item
            onClick={this.push.bind(this, this.route.name)}
            index={this.route.path}
          >
            <span slot="title">{this.route.meta.title}</span>
          </el-menu-item>
        );
      }
    };
    return renderSidebar(this.route);
  },
  props: {
    route: {
      type: Object
    }
  },
  methods: {
    push(name) {
      this.$router.push({ name });
    }
  }
});
