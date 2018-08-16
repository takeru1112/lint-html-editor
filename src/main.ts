import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import Index from "./pages/Index.vue";
import "./registerServiceWorker";

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
  render: h => h(Index)
}).$mount("#app");
