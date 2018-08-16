import Vue from "vue";
import Preview from "./pages/Preview.vue";

Vue.config.productionTip = false;

new Vue({
  render: h => h(Preview)
}).$mount("#app");
