import Vue from 'vue';

import VoidUI from 'void-ui';
Vue.use(VoidUI);

import router from './router';
import store from './store';
import VApp from '@src/views/app';

Vue.config.productionTip = false;

/**
 * App
 */
new Vue({
  router,
  store,
  render: h => h(VApp),
}).$mount('#app');

// tslint:disable:no-import-side-effect
import '@src/main.scss';
