// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/index';

import 'amfe-flexible'

import DataHunterHeader from '@/components/data-hunter-header';
import DataHunterFooter from '@/components/data-hunter-footer';
import DataHunterBar from '@/components/data-hunter-bar';
import DataHunterDialog from '@/components/data-hunter-dialog';

Vue.config.productionTip = false;

Vue.component('data-hunter-header', DataHunterHeader);
Vue.component('data-hunter-footer', DataHunterFooter);
Vue.component('data-hunter-bar', DataHunterBar);
Vue.component('data-hunter-dialog', DataHunterDialog);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App, DataHunterHeader, DataHunterFooter, DataHunterBar, DataHunterDialog },
  template: '<App/>'
})
