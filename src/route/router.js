import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(Router);

export const sidebar = [
  {
    path: "monitor",
    name: "monitor",
    component: {
      render: function(createElement) {
        return createElement(
          "transition",
          {
            name: "slide-fade"
          },
          [createElement("router-view")]
        );
      }
    },
    children: [
      {
        path: "index",
        name: "monitors",
        component: () => import("@/views/safeMonitor/taskReport.vue"),
        meta: {
          title: "报告"
        }
      }
    ],
    meta: {
      authorizition: ["super"],
      title: "监控"
    }
  },
  {
    path: "dashboard",
    name: "dashboard",
    component: {
      render: function(createElement) {
        return createElement(
          "transition",
          {
            name: "slide-fade"
          },
          [createElement("router-view")]
        );
      }
    },
    children: [
      {
        path: "index",
        name: "dashboard",
        component: () => import("@/views/dashboard"),
        meta: { title: "index" }
      }
    ],
    meta: {
      title: "主页"
    }
  }
];
export const routeList = [
  {
    path: "/",
    name: "home",
    component: Home,
    children: sidebar
  }
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "./views/About.vue")
  // }
];
export default new Router({
  routes: routeList
});
