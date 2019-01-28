import Vue from "vue";
import App from "./App.vue";
import router from "./route/router";
import store from "./store/store";
import "./plugins/element.js";
import "./assets/style/index.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
