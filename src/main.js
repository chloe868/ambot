import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
// import AUTH from "../services/auth";

// import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// import VueAxios from 'vue-axios'

// import axios from './axios'

// Vue.prototype.$AUTH = AUTH;
// Vue.use(VueAxios, axios)
import * as mdbvue from 'mdbvue'
for (const component in mdbvue) {
  Vue.component(component, mdbvue[component])
}

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
