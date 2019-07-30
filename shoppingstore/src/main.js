import Vue from 'vue';
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

Vue.filter('currency', function (value) {
  return new Intl.NumberFormat("en-US",
    { style: "currency", currency: "USD" }).format(value);
});

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
