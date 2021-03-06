// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/index';
import axios from 'axios';
import VueAxios from 'vue-axios'

import 'amfe-flexible'

import DataHunterHeader from '@/components/data-hunter-header';
import DataHunterFooter from '@/components/data-hunter-footer';
import DataHunterBar from '@/components/data-hunter-bar';
import DataHunterDialog from '@/components/data-hunter-dialog';
import DataHunterBanner from '@/components/data-hunter-banner';

Vue.config.productionTip = false;
Vue.use(VueAxios,axios);

Vue.component('data-hunter-header', DataHunterHeader);
Vue.component('data-hunter-footer', DataHunterFooter);
Vue.component('data-hunter-bar', DataHunterBar);
Vue.component('data-hunter-dialog', DataHunterDialog);
Vue.component('data-hunter-banner', DataHunterBanner);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App, DataHunterHeader, DataHunterFooter, DataHunterBar, DataHunterDialog, DataHunterBanner },
  template: '<App/>'
})
