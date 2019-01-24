import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export const routeList = [
  {
    path: "/",
    name: "home",
    component: Home,
    children: [
      {
        path: "monitor",
        component: () => import("@/views/safeMonitor/taskReport.vue"),
        meta: {
          authorizition: ["super"]
        }
      }
    ]
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
