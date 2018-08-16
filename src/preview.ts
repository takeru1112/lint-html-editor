import Vue from "vue";
import App from "./pages/Preview.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
