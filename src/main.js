// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'amfe-flexible'

import DataHunterHeader from '@/components/data-hunter-header';
import DataHunterFooter from '@/components/data-hunter-footer';

Vue.config.productionTip = false;

Vue.component('data-hunter-header', DataHunterHeader);
Vue.component('data-hunter-footer', DataHunterFooter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App, DataHunterHeader, DataHunterFooter },
  template: '<App/>'
})
