// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import ToggleButton from 'vue-js-toggle-button';
import DatePicker from 'vue-bootstrap-datetimepicker';
import VueCharts from 'vue-charts';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css';

import App from './App';
import router from './router';
import store from './store';
import 'jquery';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(ToggleButton);
Vue.use(DatePicker);
Vue.use(VueCharts);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
